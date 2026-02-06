# GSZFB1.prg

## General

|  |  |
| --- | --- |
| File | GSZFB1.prg |
| Type | PRG |
| Jobs | 44 |
| Tables | 236 |
| Origin | BMW EA-515 Weller |
| Revision | 9.003 |
| Author | ZF-FRIEDRICHSHAFEN-AG EA-521 Strempel |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Getriebesteuergerät 8HPxx |  |  |
| ORIGIN | string | BMW EA-515 Weller |  |  |
| REVISION | string | 9.003 |  |  |
| AUTHOR | string | ZF-FRIEDRICHSHAFEN-AG EA-521 Strempel |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.983 |  |  |
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

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

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

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### _STATUS_EGS_DIAGNOSE_TESTJOB

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

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS, EME, AE, REME ohne Eintrag wird Original-Diagnoseadresse verwendet Argument kann in endgültiger SGBD entfernt werden |

### _FS_LOESCHEN_FUNKTIONAL

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | 0x??????: Angabe eines einzelnen Fehlers Default: 0xFFFFFF: alle Fehler |

### _STATUS_RBM_IUMPR_NUM_DEN_PCKG_1

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x10 )

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_1

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x10 )

_No arguments._

### _STATUS_RBM_IUMPR_NUM_DEN_PCKG_2

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x11 )

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_2

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x11 )

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_3

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x12 )

_No arguments._

### _STATUS_RBM_IUMPR_NUM_DEN_PCKG_3

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x12 )

_No arguments._

### STATUS_RBM_IUMPR_NUM_DEN_PCKG_4

Dient zum Aulesen der OBD fehlerbezogenen RBM Ratios Dabei wird die Häufigkeit des Durchlaufens von abgasrelevanten Diagnosefunktionen gezählt ( Service ID 0x22, Identifier 0x42, 0x13 )

_No arguments._

### _STATUS_AZG_KENNUNG

Status Substrattemperatur UDS: $22 ReadDataByCommonIdentifier UDS: $4630 Modus  : Default

_No arguments._

### _BK_LESEN

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

### ARG_0X4010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | signed char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4011_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | signed char | - | - | - | - | - | - | - | Übergabewert wird nicht ausgewertet |

### ARG_0X4150_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY1 | - | high | signed char | - | - | - | - | - | - | - | Uebergabewert nur 0 |

### ARG_0X4614_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | signed char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4615_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | signed char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0X4616_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | - | high | signed char | - | - | - | - | - | - | - | Übergabewert nur 0 |

### ARG_0XDA15_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LERNFKT | 0-n | - | unsigned char | - | TAB_STEUERN_LERNFKT_RUECKSETZEN | - | - | - | - | - | Lernfunktion, die zurück gesetzt werden soll. Siehe Tabelle TAB_STEUERN_LERNFKT_RUECKSETZEN |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_BUSFEHLER_WAEHLHEBEL

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OP_GWS_SIGNAL_FEHLER_LP_CAN | 0/1 | high | unsigned char | 0x01 | - | - | - | - | OP_GWS Signal Fehler (LP-CAN) |
| STAT_OP_GWS_SIGNAL_FEHLER_LE_OR_PRIVATE_CAN | 0/1 | high | unsigned char | 0x02 | - | - | - | - | OP_GWS Signal Fehler (LE-CAN bei Hybridgetriebe, Private-CAN bei Basisgetriebe) |
| STAT_OP_GWS_PUBU_PKG_SIGNAL_LP_CAN | 0/1 | high | unsigned char | 0x04 | - | - | - | - | OP_GWS_PUBU_PKG Signal Error (LP-CAN) |
| STAT_OP_GWS_PUBU_PKG_SIGNAL_ERROR_LE_OR_PRIVATE_CAN | 0/1 | high | unsigned char | 0x08 | - | - | - | - | OP_GWS_PUBU_PKG Signal Fehler (LE-CAN bei Hybridgetriebe, Private-CAN bei Basisgetriebe) |

### BF_CAN_LEARN_ID1_CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANHAENGER | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | STAT_ANHAENGER |
| STAT_BLT_CT_SOCCU | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | ST_BLT_CT_SOCCU |
| STAT_CON_VEH | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | CON_VEH |
| STAT_INFO_VEH_DRV | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | INFO_VEH_DRV |
| STAT_OP_CCTR | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | OP_CCTR |
| STAT_DS_VRFD | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | STAT_DS_VRFD |
| STAT_BLINKEN | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | BLINKEN |
| STAT_OP_SPD | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | OP_SPD |
| STAT_ZV_KLAPPEN | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | STAT_ZV_KLAPPEN |
| STAT_FAHRGESTELLNUMMER | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | FAHRGESTELLNUMMER |
| STAT_CENG | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | ST_CENG |
| STAT_WMOM_DRV_1 | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | WMOM_DRV_1 |
| STAT_TORQ_CRSH_1 | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | TORQ_CRSH_1 |
| STAT_TORQ_CRSH_2 | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | TORQ_CRSH_1 |
| STAT_TORQ_CRSH_3 | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | TORQ_CRSH_3 |
| STAT_TORQ_CRSH_4 | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | TORQ_CRSH_4 |
| STAT_ANG_ACPD | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | ANG_ACPD |
| STAT_DT_PRD_OSTR | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | DT_PRD_OSTR |
| STAT_WMOM_DRV_3 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | WMOM_DRV_3 |
| STAT_SAFG_PT | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | SAFG_PT |
| STAT_DT_PT_4 | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | DT_PT_4 |
| STAT_ENG_STA_AUTO | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | STAT_ENG_STA_AUTO |
| STAT_SU_CLE_DRV_DXP | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | SU_CLE_DRV_DXP |
| STAT_DIAG_OBD_ENG | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | DIAG_OBD_ENG |
| STAT_DT_PT_2 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | DT_PT_2 |
| STAT_DT_PT_1 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | DT_PT_1 |
| STAT_DT_EWS_4 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | DT_EWS_4 |
| STAT_AVL_BRTORQ_SUM | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | AVL_BRTORQ_SUM |
| STAT_TLT_RW | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | TLT_RW |
| STAT_STAB_DSC | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | ST_STAB_DSC |
| STAT_ACLNX_MASSCNTR | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | ACLNX_MASSCNTR |
| STAT_VYAW_VEH | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | VYAW_VEH |

### BF_CAN_LEARN_ID2_CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_V_VEH | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | V_VEH |
| STAT_AVL_RPM_WHL_UPRT | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | AVL_RPM_WHL_UPRT |
| STAT_MASS_VEH | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | MASS_VEH |
| STAT_STEA_FTAX_EFFV | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | STEA_FTAX_EFFV |
| STAT_ACLNY_MASSCNTR | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | ACLNY_MASSCNTR |
| STAT_ST_GWS_BUS0 | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | ST_GWS_BUS0 |
| STAT_A_TEMP | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | A_TEMP |
| STAT_RELATIVZEIT | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | RELATIVZEIT |
| STAT_KILOMETERSTAND | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | KILOMETERSTAND |
| STAT_NAV_SYS_INF | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | NAV_SYS_INF |
| STAT_FZZSTD | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | FZZSTD |

### BF_CAN_LEARN_ID3_CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_GWS_BUS1 | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | ST_GWS_BUS1 |

### BF_CAN_LEARN_ID4_CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHALT_ID4_01 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Vorhalt für neue Botschaften |

### BF_ERSATZMASSNAHMEN_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DI_ER_S0 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S1 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S2 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S3 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Vorhalt |
| STAT_KMN_DRIVERWARNING | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Die CC-Meldung ''Getriebe-Position P gestört'' wird angezeigt  |
| STAT_DI_ER_S5 | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Vorhalt  |
| STAT_DI_ER_S6 | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | Vorhalt  |
| STAT_DI_ER_S7 | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S8 | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | Vorhalt  |
| STAT_KMN_CCID419 | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | Die CC-Meldung  Antriebe gestört  wird angezeigt |
| STAT_KMN_CCID420 | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | Die CC-Meldung  Getriebe gestört  wird angezeigt |
| STAT_KMN_RESET | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | Reset nach hydraulischer Stabilisierung   |
| STAT_KMN_LCOFF | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | Die Funktion  Rennstart  wird unterbunden |
| STAT_KMN_OUT10LSSOFF | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Endstufe OUT10 deaktivieren  |
| STAT_KMN_SAILOFF | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Deaktivierung Segel-Funktion in Schaltablaufsteuerung  |
| STAT_KMN_DISPOFF | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Kombianzeige dunkel schalten |
| STAT_KMN_EHTEST1 | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | Testmaßnahme 1 ist aktiv  |
| STAT_KMN_EHTEST2 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Testmaßnahme 2 ist aktiv  |
| STAT_DI_ER_S18 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Vorhalt |
| STAT_KMN_OUT7LSSOFF | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | Endstufe OUT7 deaktivieren  |
| STAT_DI_ER_S20 | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | Vorhalt |
| STAT_KMN_NOHOLDN | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | Neutral wird nicht gehalten  |
| STAT_KMN_GFIX | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | Aktuellen Gang halten |
| STAT_KMN_NOPOSTRQREQ | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | Positiven Motoreingriff deaktivieren |
| STAT_KMN_NONEGTRQREQ | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | Negativen Motoreingriff deaktivieren |
| STAT_KMN_ENPG4FIX | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | Elektrischer Notlauf 4. Gang  |
| STAT_KMN_ENPG1 | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | Schalten in 1. Gang über Neutral |
| STAT_KMN_ENPG2 | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | Schalten in 2. Gang über Neutral |
| STAT_KMN_ENPG3 | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | Schalten in 3. Gang über Neutral |
| STAT_KMN_ENPG4 | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | Schalten in 4. Gang über Neutral |
| STAT_KMN_ENPG5 | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | Schalten in 5. Gang über Neutral |
| STAT_KMN_ENPG6 | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | Schalten in 6. Gang über Neutral |

### BF_ERSATZMASSNAHMEN_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMN_ENPG7 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Schalten in 7. Gang über Neutral |
| STAT_KMN_ENPG8 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Schalten in 8. Gang über Neutral |
| STAT_KMN_ADAPTOFF | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Alle Adaptionen deaktivieren |
| STAT_KMN_FAULTINFO | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Notprogramm ist aktiv (Flag auf CAN) |
| STAT_KMN_MSAOFF | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Deaktivierung HIS-Funktion in Schaltablaufsteuerung  |
| STAT_KMN_OUT11LSSOFF | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Endstufe OUT11 deaktivieren  |
| STAT_KMN_NOENGINESTOP | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | Wird nur im Hybrid verwendet  |
| STAT_KMN_IMINOFF | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | Minimalbestromte Druckregler für Getriebekupplungen auf 0mA setzen  |
| STAT_KMN_OUT13LSSOFF | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | Endstufe OUT13 deaktivieren  |
| STAT_KMN_OUT14LSSOFF | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | Endstufe OUT14 deaktivieren  |
| STAT_KMN_TCCLSSOFF | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | Druckregler für Wandlerkupplung auf 0mA setzen  |
| STAT_KMN_PSYSLSSOFF | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | Druckregler für Systemdruck auf 0mA setzen |
| STAT_KMN_NOCSN | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | CSN deaktivieren  |
| STAT_KMN_UPSHIFTINHIBIT | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Hochschaltungsverhinderung  |
| STAT_KMN_NOSTORINGPOS | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Löschen von gespeicherten Positionen im Falle gestörter Wählhebelkommunikation   |
| STAT_DI_ER_S47 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Vorhalt |
| STAT_KMN_NICOFF | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | NIC deaktivieren   |
| STAT_KMN_TCCOPEN | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Wandlerkupplung öffnen über Minimalbestromung   |
| STAT_KMN_PSYSMAX | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Max. Systemdruck auslösen über Minimalbestromung |
| STAT_KMN_GBXRFMTOFF | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | Getriebestrangverstärkung wird als ungültig ausgegeben |
| STAT_DI_ER_S52 | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | Vorhalt |
| STAT_DI_ER_S53 | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | Vorhalt  |
| STAT_DI_ER_S54 | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | Vorhalt  |
| STAT_DI_ER_S55 | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | Vorhalt  |
| STAT_KMN_HSS1OFF | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | HighSide Endstufe 1 deaktivieren  |
| STAT_KMN_LSSOFF | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | Alle LowSide Endstufen deaktivieren |
| STAT_KMN_LAUNCHTRQLIM | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | Anfahrmomentenbegrenzung auslösen  |
| STAT_KMN_HOLDPOSP | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | Wenn PS eingelegt, Parksperre halten |
| STAT_KMN_NOPOSD | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | Aktives verlassen von Position D bzw. D verhindern |
| STAT_KMN_NOPOSR | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | Aktives verlassen von Position R bzw. R verhindern |
| STAT_KMN_SHLOCKOFF | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | Shiftlock-Funktion deaktivieren (Erhaltung Verfügbarkeit)  |
| STAT_KMN_AUTOMODE | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | Tippen und Sportprogramm verbieten |

### BF_SAILING_DISABLE_INFO_AGS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FREIGABESTEUERUNG_SAS | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | STAT_FREIGABESTEUERUNG_SAS |
| STAT_FREIGABESTEUERUNG_DME | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | STAT_FREIGABESTEUERUNG_DME |
| STAT_INIT_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | STAT_INIT_BESCHLEUNIGUNGSWUNSCH |
| STAT_INIT_STEIGUNG | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | STAT_INIT_STEIGUNG |
| STAT_INIT_LAUFENDER_SEGELSTAT_AUSSTIEG | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | STAT_INIT_LAUFENDER_SEGELSTAT_AUSSTIEG |
| STAT_EINSTIEG_ECO_TASTER | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | STAT_EINSTIEG_ECO_TASTER |
| STAT_EINSTIEG_FREIGABESTEUERUNG_AGS | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | STAT_EINSTIEG_FREIGABESTEUERUNG_AGS |
| STAT_EINSTIEG_POSITION_WAEHLHEBEL | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | STAT_EINSTIEG_POSITION_WAEHLHEBEL |
| STAT_EINSTIEG_GESCHWINDIGKEITSBEREICH | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | STAT_EINSTIEG_GESCHWINDIGKEITSBEREICH |
| STAT_EINSTIEG_GANGEINSCHRAENKUNG | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | STAT_EINSTIEG_GANGEINSCHRAENKUNG |
| STAT_EINSTIEG_VERZOEGERUNGSWUNSCH | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | STAT_EINSTIEG_VERZOEGERUNGSWUNSCH |
| STAT_EINSTIEG_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | STAT_EINSTIEG_BESCHLEUNIGUNGSWUNSCH |
| STAT_EINSTIEG_QUERBESCHLEUNIGUNG | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | STAT_EINSTIEG_QUERBESCHLEUNIGUNG |
| STAT_EINSTIEG_DSC_FEHLER | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | STAT_EINSTIEG_DSC_FEHLER |
| STAT_EINSTIEG_GETRIEBETEMPERATUR | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | STAT_EINSTIEG_GETRIEBETEMPERATUR |
| STAT_EINSTIEG_AUSSENTEMPERATUR | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | STAT_EINSTIEG_AUSSENTEMPERATUR |
| STAT_EINSTIEG_GANGSTEUERUNG | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | STAT_EINSTIEG_GANGSTEUERUNG |
| STAT_EINSTIEG_DREHZAHLSTEUERUNG | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | STAT_EINSTIEG_DREHZAHLSTEUERUNG |
| STAT_EINSTIEG_MOMENTENSTEUERUNG | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | STAT_EINSTIEG_MOMENTENSTEUERUNG |
| STAT_EINSTIEG_ANHAENGERERKENNUNG | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | STAT_EINSTIEG_ANHAENGERERKENNUNG |
| STAT_EINSTIEG_BETRIEBSMODUS | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | STAT_EINSTIEG_BETRIEBSMODUS |
| STAT_AUSSTIEG_ECO_TASTER | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | STAT_AUSSTIEG_ECO_TASTER |
| STAT_AUSSTIEG_FREIGABESTEUERUNG_AGS | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | STAT_AUSSTIEG_FREIGABESTEUERUNG_AGS |
| STAT_AUSSTIEG_POSITION_WAEHLHEBEL | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | STAT_AUSSTIEG_POSITION_WAEHLHEBEL |
| STAT_AUSSTIEG_GESCHWINDIGKEITSBEREICH | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | STAT_AUSSTIEG_GESCHWINDIGKEITSBEREICH |
| STAT_AUSSTIEG_GANGEINSCHRAENKUNG | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | STAT_AUSSTIEG_GANGEINSCHRAENKUNG |
| STAT_AUSSTIEG_VERZOEGERUNGSWUNSCH | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | STAT_AUSSTIEG_VERZOEGERUNGSWUNSCH |
| STAT_AUSSTIEG_BESCHLEUNIGUNGSWUNSCH | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | STAT_AUSSTIEG_BESCHLEUNIGUNGSWUNSCH |
| STAT_AUSSTIEG_QUERBESCHLEUNIGUNG | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | STAT_AUSSTIEG_QUERBESCHLEUNIGUNG |
| STAT_AUSSTIEG_DSC_FEHLER | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | STAT_AUSSTIEG_DSC_FEHLER |
| STAT_AUSSTIEG_GETRIEBETEMPERATUR | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | STAT_AUSSTIEG_GETRIEBETEMPERATUR |
| STAT_AUSSTIEG_DIAGNOSESTEUERUNG | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | STAT_AUSSTIEG_DIAGNOSESTEUERUNG |

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
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x021800 | Energiesparmode aktiv | 0 | - |
| 0x021808 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x021809 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02180A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02180B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02180C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02180D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF18 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x420001 | Elektrisches Drucksteuerventil A: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420002 | Elektrisches Drucksteuerventil A: Kurzschluss nach Plus | 0 | - |
| 0x420003 | Elektrisches Drucksteuerventil A: Unterbrechung | 0 | - |
| 0x420007 | Elektrisches Drucksteuerventil A: Stromüberwachung hat einen abweichenden Wert festgestellt | 0 | - |
| 0x420011 | Elektrisches Drucksteuerventil D: Kurzschluss nach Masse | 0 | - |
| 0x420012 | Elektrisches Drucksteuerventil D: Kurzschluss nach Plus | 0 | - |
| 0x420013 | Elektrisches Drucksteuerventil D: Unterbrechung | 0 | - |
| 0x420017 | Elektrisches Drucksteuerventil D: Stromüberwachung hat einen abweichenden Wert festgestellt | 0 | - |
| 0x420021 | Elektrisches Drucksteuerventil B: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420022 | Elektrisches Drucksteuerventil B: Kurzschluss nach Plus | 0 | - |
| 0x420023 | Elektrisches Drucksteuerventil B: Unterbrechung | 0 | - |
| 0x420027 | Elektrisches Drucksteuerventil B: Stromüberwachung hat einen abweichenden Wert festgestellt | 0 | - |
| 0x420031 | Elektrisches Drucksteuerventil E: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420032 | Elektrisches Drucksteuerventil E: Kurzschluss nach Plus | 0 | - |
| 0x420033 | Elektrisches Drucksteuerventil E: Unterbrechung | 0 | - |
| 0x420037 | Elektrisches Drucksteuerventil E: Stromüberwachung hat einen abweichenden Wert festgestellt | 0 | - |
| 0x420041 | Elektrisches Drucksteuerventil C: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420042 | Elektrisches Drucksteuerventil C: Kurzschluss nach Plus | 0 | - |
| 0x420043 | Elektrisches Drucksteuerventil C: Unterbrechung | 0 | - |
| 0x420047 | Elektrisches Drucksteuerventil C: Stromüberwachung hat einen abweichenden Wert festgestellt | 0 | - |
| 0x420051 | Elektrisches Drucksteuerventil WK: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420052 | Elektrisches Drucksteuerventil WK: Kurzschluss nach Plus | 0 | - |
| 0x420053 | Elektrisches Drucksteuerventil WK: Unterbrechung | 0 | - |
| 0x420057 | Elektrisches Drucksteuerventil WK: Stromüberwachung hat einen abweichenden Wert festgestellt | 1 | - |
| 0x420061 | Elektrisches Drucksteuerventil SYS: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420062 | Elektrisches Drucksteuerventil SYS: Kurzschluss nach Plus | 0 | - |
| 0x420063 | Elektrisches Drucksteuerventil SYS: Unterbrechung | 0 | - |
| 0x420071 | Magnetventil POS: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420072 | Magnetventil POS: Kurzschluss nach Plus | 0 | - |
| 0x420073 | Magnetventil POS: Unterbrechung | 0 | - |
| 0x4200A1 | Magnetventil HIS: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x4200A2 | Magnetventil HIS: Kurzschluss nach Plus | 0 | - |
| 0x4200A3 | Magnetventil HIS: Unterbrechung | 0 | - |
| 0x4200B1 | Magnetventil PS: Kurzschluss nach Masse | 0 | - |
| 0x4200B2 | Magnetventil PS: Kurzschluss nach Plus | 0 | - |
| 0x4200B3 | Magnetventil PS: Unterbrechung | 0 | - |
| 0x4200BB | Fahrerwunsch: verhindert durch DME/DDE | 0 | - |
| 0x420201 | Wandlerüberbrückungskupplung: Schlupf zu groß | 0 | - |
| 0x4202E1 | Übersetzungsüberwachung: Kupplungen A, D und E unplausibel | 0 | - |
| 0x4202F1 | Übersetzungsüberwachung: Kupplungen A, B und D unplausibel | 0 | - |
| 0x420311 | Übersetzungsüberwachung: Schaltung 1 nach x unplausibel | 0 | - |
| 0x420321 | Übersetzungsüberwachung: Schaltung 2 nach x unplausibel | 0 | - |
| 0x420331 | Übersetzungsüberwachung: Schaltung 3 nach x unplausibel | 0 | - |
| 0x420341 | Übersetzungsüberwachung: Schaltung 4 nach x unplausibel | 0 | - |
| 0x420351 | Übersetzungsüberwachung: Schaltung 5 nach x unplausibel | 0 | - |
| 0x420361 | Übersetzungsüberwachung: Schaltung 6 nach x unplausibel | 0 | - |
| 0x420371 | Übersetzungsüberwachung: Schaltung 7 nach x unplausibel | 0 | - |
| 0x420381 | Übersetzungsüberwachung: Schaltung 8 nach x unplausibel | 0 | - |
| 0x420391 | Übersetzungsüberwachung: Kupplungen A, B und C unplausibel | 0 | - |
| 0x4203A1 | Übersetzungsüberwachung: Kupplungen A, B und E unplausibel | 0 | - |
| 0x4203B1 | Übersetzungsüberwachung: Kupplungen B, C und E unplausibel | 0 | - |
| 0x4203C1 | Übersetzungsüberwachung: Kupplungen B, D und E unplausibel | 0 | - |
| 0x4203D1 | Übersetzungsüberwachung: Kupplungen B, C und D unplausibel | 0 | - |
| 0x4203E1 | Übersetzungsüberwachung: Kupplungen C, D und E unplausibel | 0 | - |
| 0x420401 | Übersetzungsüberwachung: Kupplung A unplausibel | 0 | - |
| 0x420411 | Übersetzungsüberwachung: Kupplung B unplausibel | 0 | - |
| 0x420421 | Übersetzungsüberwachung: Kupplung C unplausibel | 0 | - |
| 0x420431 | Übersetzungsüberwachung: Kupplung D unplausibel | 0 | - |
| 0x420441 | Übersetzungsüberwachung: Kupplung E unplausibel | 0 | - |
| 0x420451 | Übersetzungsüberwachung: Kupplungen A und B unplausibel | 0 | - |
| 0x420461 | Übersetzungsüberwachung: Kupplungen A und C unplausibel | 0 | - |
| 0x420471 | Übersetzungsüberwachung: Kupplungen A und D unplausibel | 0 | - |
| 0x420481 | Übersetzungsüberwachung: Kupplungen A und E unplausibel | 0 | - |
| 0x420491 | Übersetzungsüberwachung: Kupplungen B und D unplausibel | 0 | - |
| 0x4204A1 | Übersetzungsüberwachung: Kupplungen B und E unplausibel | 0 | - |
| 0x4204B1 | Übersetzungsüberwachung: Kupplungen C und E unplausibel | 0 | - |
| 0x4204C1 | Übersetzungsüberwachung: Kupplungen C und D unplausibel | 0 | - |
| 0x4204D1 | Übersetzungsüberwachung: Kupplungen B und C unplausibel | 0 | - |
| 0x4204E1 | Übersetzungsüberwachung: Kupplungen D und E unplausibel | 0 | - |
| 0x4204F1 | Übersetzungsüberwachung: Kupplungen A, C und D unplausibel | 0 | - |
| 0x420501 | EGS Spannungsversorgung: Mindestspannung unterschritten (kleiner 7 V) | 1 | - |
| 0x420511 | Versorgungsspannung: Unterspannung | 1 | - |
| 0x420521 | Versorgungsspannung: Überspannung | 1 | - |
| 0x420537 | Endstufen Spannungsversorgung: Feldeffekttransistor lässt sich aufgrund defekter Hardware nicht einschalten oder Softwarefehler in der EGS | 0 | - |
| 0x420544 | Sensor Spannungsversorgung: Kurzschluss nach Masse oder Unterbrechung oder Spannung zu klein | 0 | - |
| 0x420545 | Sensor Spannungsversorgung: Kurzschluss nach Plus / Spannung zu groß oder Sensorversorgungsspannung konnte nicht zur Reinitialisierung der Sensoren abgeschaltet werden | 0 | - |
| 0x420571 | EGS Spannungsversorgung: Außerhalb des spezifizierten Bereichs kleiner 6,5V | 0 | - |
| 0x420581 | EGS Spannungsversorgung: Abweichung der beiden HW-Messpfade der Batteriespannung | 0 | - |
| 0x420598 | Abtriebsdrehzahlsensor: unplausibler Gradient | 0 | - |
| 0x420602 | Abtriebsdrehzahlsensor: Kurzschluss nach Plus | 0 | - |
| 0x420606 | Abtriebsdrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420611 | Schnittstelle DSC (Raddrehzahl): unzulässige Abweichung der Raddrehzahl von Abtriebsdrehzahl und Turbinendrehzahl | 1 | - |
| 0x420621 | Turbinendrehzahlsensor: unzulässiger negativer Gradient | 0 | - |
| 0x420622 | Turbinendrehzahlsensor: Kurzschluss nach Plus | 0 | - |
| 0x420626 | Turbinendrehzahlsensor: Kurzschluss nach Masse oder Unterbrechung | 0 | - |
| 0x420633 | Positionssensor: unplausibel oder Parksperre zu lange in Zwischenposition | 0 | - |
| 0x420635 | Positionssensor: elektrischer Fehler an L3 | 0 | - |
| 0x420636 | Positionssensor: elektrischer Fehler an L4 | 0 | - |
| 0x420637 | Positionssensor: elektrischer Fehler an L3 | 0 | - |
| 0x420638 | Positionssensor: elektrischer Fehler an L4 | 0 | - |
| 0x420639 | Parksperre: fehlerhaft ausgelegt | 1 | - |
| 0x42063A | Parksperre: fehlerhaft ausgelegt - Parksperrensensor erkennt Positionswechsel ohne Fahrerwunsch | 0 | - |
| 0x420641 | Parksperre: fehlerhaft eingelegt | 0 | - |
| 0x420661 | Hydraulischer Impulsspeicher: Wurde in der definierten Zeit, nach Fahrer verlässt Fahrzeug, nicht gelöst | 0 | - |
| 0x420671 | Positionsventil: offen verklemmt in Druckversorgungsstellung | 0 | - |
| 0x420701 | Getriebeöltemperatursensor: Kurzschluss nach Masse | 0 | - |
| 0x420702 | Getriebeöltemperatursensor: Kurzschluss nach Plus | 0 | - |
| 0x420703 | Getriebeöltemperatursensor: Unterbrechung | 0 | - |
| 0x420714 | EGS Temperatursensor CG130: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420715 | EGS Temperatursensor CG130: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420721 | Temperatursensorik: Übertemperatur im Getriebe (ca. 145 Grad C) | 1 | - |
| 0x420734 | EGS Temperatursensor LM71: Überschreitung oberer Schwellenwert | 0 | - |
| 0x420735 | EGS Temperatursensor LM71: Unterschreitung unterer Schwellenwert | 0 | - |
| 0x420892 | Ebene 2 Fehler: Hauptprozessor oder der Abtriebsdrehzahlstatus des zweiten Mikroprozessors hat einen elektrischen Fehler erkannt | 0 | - |
| 0x420893 | Zweiter Mikroprozessor: Überhöhter Abtriebsgradient erkannt | 0 | - |
| 0x420895 | Kommunikationsfehler zwischen Hauptprozessor und zweiten Mikroprozessor | 0 | - |
| 0x420897 | Reset (zweiter Mikroprozessor): Unterspannung während Fahrt oder fehlerhafter Speicherzustand | 0 | - |
| 0x420907 | Hardwareüberwachungseinheit: Programmablaufsteuerung hat eine Abweichung festgestellt | 0 | - |
| 0x420911 | EPROM: Prüfsummenüberwachung hat im Daten-, Programm-, Boot-, Abgleichdaten- oder Fertigungsdatenblock eine Abweichung festgestellt | 0 | - |
| 0x420921 | EEPROM: Daten können nicht gelesen werden (bei Initialisierung der EGS) oder es ist in Summe nur noch 1 Block beschreibbar | 0 | - |
| 0x420922 | Sicherheitszugang: Authentisierung ist dreimal fehlgeschlagen | 0 | - |
| 0x420941 | Reset: Unterspannung während Fahrt | 1 | - |
| 0x420971 | E-Schaltung: PMA fehlerhaft aktiviert | 0 | - |
| 0x420972 | E-Schaltung: Falsche Weitergabe der Positionsvorgabe an den Schaltablauf | 0 | - |
| 0x420973 | E-Schaltung: Positionswechsel von D/P/N nach R oder R/P/N nach D oder P nach N ohne Fahrerwunsch | 0 | - |
| 0x420974 | E-Schaltung: Kein Positionswechsel von N/R/D nach P/automatisches Einlegen von P oder R/D nach N/Diagnose in N oder D nach R oder R nach D | 0 | - |
| 0x420975 | E-Schaltung: angezeigte Position ungleich eingelegter Position (N/P statt D/R oder R statt D oder D statt R oder P statt N) | 0 | - |
| 0x420976 | E-Schaltung: falsche Datenapplikation oder die intern berechnete Position ist unplausibel | 0 | - |
| 0x420978 | Fahrermeldung: Check-Control-Meldung nicht versendet | 1 | - |
| 0x420981 | Motoreingriff: Schaltablaufsteuerung - unerlaubter Motoreingriff | 0 | - |
| 0x420982 | Motoreingriff: Schaltablaufsteuerung - Komplement unplausibel | 0 | - |
| 0x420983 | Motoreingriff: Schaltablaufsteuerung - Gradient unplausibel | 0 | - |
| 0x420984 | Motoreingriff: Anforderung ist (nach interner Signalverarbeitung) zu hoch | 0 | - |
| 0x420991 | Positionsplausibilisierung: Schalten von N/P nach D/R ohne Änderung der Wählhebelposition erkannt (mehr als 2 Kupplungen druckbeaufschlagt) | 0 | - |
| 0x420993 | Positionsplausibilisierung: Wählhebelposition N/P wurde aus D/R nicht umgesetzt | 0 | - |
| 0x4209A1 | Temperatursensorik: Heißbetrieb 1 mit evtl. Anpassung des Schaltprogramms | 0 | - |
| 0x4209A2 | Temperatursensorik: Heißbetrieb 2 mit Drehmomentreduzierung | 0 | - |
| 0x4209A3 | Temperatursensorik: Heißbetrieb 2 mit erfolgter Fahrermeldung | 1 | - |
| 0x4209A4 | Temperatursensorik: Heißbetrieb 3 - Übertemperatur mit möglicher Schädigung der Getriebeölkühler-Leitungen erkannt | 1 | - |
| 0x4209A5 | Temperatursensorik: Heißbetrieb 4 - Übertemperatur mit Schädigung Getriebeöl erkannt. Weiterfahrt trotz roter Warnleuchte. | 1 | - |
| 0x421012 | Kollision von Maßnahmen der Prioritätsklasse 2: mehr als ein elektrisches Notprogramm gleichzeitig aktiv | 0 | - |
| 0x421061 | EWS: Wählhebelposition P verlassen wurde durch EWS verhindert | 1 | - |
| 0x4210A2 | Getriebestrangverstärkung: Fehler in der Berechnung erkannt | 0 | - |
| 0x4210B1 | Fahrgeschwindigkeit: Blockierbremsung und anschliessendes Lösen der Bremse bei höherer Geschwindigkeit über eine Gradientenüberschreitung am Abtriebsdrehzahlsignal bei ausgefallener ABS-Funktion erkannt | 0 | - |
| 0x4210B2 | Fahrgeschwindigkeit: Blockierbremsung bei höherer Geschwindigkeit über eine Gradientenüberschreitung am Abtriebsdrehzahlsignal bei ausgefallener ABS-Funktion erkannt | 0 | - |
| 0x421191 | Mikrokontroller-Komponenten: Messungen aus Analog/Digital-Wandler sind nicht mehr plausibel. Fehler in Kommunikation zwischen Prozessor/ASICs, Fehler in ECC-Logik oder Fehler in Registerprüfung. | 0 | - |
| 0x421231 | EDS-Logik: Überbestimmter Radsatz | 0 | - |
| 0x421278 | Abtriebsdrehzahlsensor: unzulässige Abweichung der Abtriebsdrehzahl von Raddrehzahl und Turbinendrehzahl | 0 | - |
| 0x421279 | Abtriebsdrehzahlsensor: Messwert größer Schwellenwert | 0 | - |
| 0x42127A | Turbinendrehzahlsensor: Messwert größer Schwellenwert | 0 | - |
| 0x421302 | Fehlverbau: Inkompatibilität zwischen hydraulischem Schaltgerät und Steuergeräte-Software | 1 | - |
| 0x421342 | Positionsvorgabe: Ungewollter Kraftschluss in Neutral erkannt | 0 | - |
| 0x421343 | Positionsvorgabe: Ungewollter Kraftschluss in Neutral über dynamische Berechnung erkannt | 0 | - |
| 0x421352 | Positionsvorgabe: Ungewollter Fahrtrichtungswechsel erkannt | 0 | - |
| 0x421362 | Übersetzungsüberwachung: alle Kupplungen unplausibel | 0 | - |
| 0x421382 | EDS-Logik: Aktuatoransteuerung/Sollposition (D/R) unplausibel | 0 | - |
| 0x421392 | EDS-Logik: R-Gangsicherung bei zu hoher Fahrgeschwindigkeit | 0 | - |
| 0x421402 | EDS-Logik: unerlaubtes Einlegen von P bei unplausibler Fahrgeschwindigkeit | 0 | - |
| 0x421412 | EDS-Logik: Aktuatoransteuerung gegenüber Sollposition P unplausibel | 0 | - |
| 0x421441 | Schnittstelle DME/DDE: Abweichung der Motordrehzahlführung bei Segelausstieg | 1 | - |
| 0x421462 | Turbinendrehzahlsensor: unzulässige Abweichung der Turbinendrehzahl von der Raddrehzahl und von der internen Abtriebsdrehzahl | 0 | - |
| 0x421471 | Sensorik: Doppelausfall von Steuergeräteinnentemperatursensor und Öltemperatursensor | 0 | - |
| 0x421472 | Sensorik: Ausfall von mindestens zwei Sensoren - Abtriebsdrehzahlsensor, Turbinendrehzahlsensor oder Raddrehzahl | 0 | - |
| 0x421473 | Sensorik: Doppelausfall von Turbinendrehzahlsensor und Motordrehzahl (Istdrehzahl Motor Kurbelwelle, 0xA5) | 0 | - |
| 0x421475 | Sensorik: unzulässige Abweichung von Abtriebsdrehzahl und Raddrehzahl innerhalb Schaltung oder in nicht kraftschlüssigem Zustand | 0 | - |
| 0x421477 | Sensorik: unzulässige Abweichung von Abtriebsdrehzahl und Turbinendrehzahl bei noch nicht angelernter Hinterachse | 0 | - |
| 0x421522 | Getriebeöltemperatursensor: Temperatursprung erkannt - d. h. Temperaturdifferenz zwischen zwei Messungen größer als der zulässige Bereich | 0 | - |
| 0x421532 | Getriebeöltemperatursensor: Getriebeöltemperatur zu Steuergeräteinnentemperatur LM71 und Steuergeräteinnentemperatur CG130 unplausibel | 0 | - |
| 0x421542 | EGS Temperatursensor: Steuergeräteinnentemperatur CG130 zu Steuergeräteinnentemperatur LM71 und Getriebeöltemperatur unplausibel | 0 | - |
| 0x421552 | EGS Temperatursensor: Steuergeräteinnentemperatur LM71 zu Steuergeräteinnentemperatur CG130 und Getriebeöltemperatur unplausibel | 0 | - |
| 0x421672 | E-Schaltung: Missbrauch der elektrischen Getriebenotentriegelung | 1 | - |
| 0x421681 | Eingeschränkte Getriebefunktion: Fahrzeug im Transportmodus | 1 | - |
| 0xCF0469 | LP-CAN Physikalischer Busfehler | 0 | - |
| 0xCF0472 | LP-CAN Control Module Bus OFF | 0 | - |
| 0xCF0BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCF0C00 | Private-CAN Physikalischer Busfehler | 0 | - |
| 0xCF0C01 | Private-CAN Control Module Bus OFF | 0 | - |
| 0xCF1401 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: 0xA5): fehlt | 1 | - |
| 0xCF1402 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: 0xA5): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1406 | Botschaft (Potentialvektor Beschleunigung, ID: 0x1FF) fehlt, Sender: DSC | 1 | - |
| 0xCF140A | Botschaftsfehler: Absicherung der Botschaftsfehler durch aktive Degradation | 1 | - |
| 0xCF1411 | Botschaftsfehler (Drehmoment Kurbelwelle 2, ID: 0xA6): fehlt | 1 | - |
| 0xCF1415 | Botschaft (Status M-Systeme, 0x384) fehlt, Sender DSC | 1 | - |
| 0xCF1421 | Botschaftsfehler (Drehmoment Kurbelwelle 3, ID: 0xA7): fehlt | 1 | - |
| 0xCF1422 | Botschaftsfehler (Drehmoment Kurbelwelle 3, ID: 0xA7): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1431 | Botschaftsfehler (Daten Antriebsstrang 1, ID: 0x3FB): fehlt | 1 | - |
| 0xCF1441 | Botschaftsfehler (Daten Antriebsstrang 2, ID: 0x3F9): fehlt | 1 | - |
| 0xCF1442 | Botschaftsfehler (Daten Antriebsstrang 2, ID: 0x3F9): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1451 | Botschaftsfehler (Winkel Fahrpedal, ID: 0xD9): fehlt | 1 | - |
| 0xCF1452 | Botschaftsfehler (Winkel Fahrpedal, ID: 0xD9): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1461 | Botschaftsfehler (Diagnose OBD Motor, ID: 0x397): fehlt | 1 | - |
| 0xCF1473 | LP-CAN: Kommunikationsfehler | 1 | - |
| 0xCF1481 | Botschaftsfehler (Radmoment Antrieb 3, ID: 0x145): fehlt | 1 | - |
| 0xCF14B1 | Botschaftsfehler (Radmoment Antrieb 1, ID: 0x8F): fehlt | 1 | - |
| 0xCF14B2 | Botschaftsfehler (Radmoment Antrieb 1, ID: 0x8F): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF14C1 | Botschaftsfehler (Status Motor Start Auto, ID: 0x30B): fehlt | 1 | - |
| 0xCF14E1 | Botschaftsfehler (Daten Antriebsstrang 4, ID: 0x1FC): fehlt | 1 | - |
| 0xCF1551 | Botschaftsfehler (Drehmoment Kurbelwelle 4, ID: 0xC2): fehlt | 1 | - |
| 0xCF1552 | Botschaftsfehler (Drehmoment Kurbelwelle 4, ID: 0xC2): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1571 | Botschaftsfehler (Daten Voraussage Betriebsstrategie, ID: 0xFE): fehlt | 1 | - |
| 0xCF1591 | Botschaftsfehler (Daten_EWS_4, ID: 0x413): fehlt | 1 | - |
| 0xCF15C1 | Botschaftsfehler (Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: 0x324): fehlt | 1 | - |
| 0xCF1611 | Botschaftsfehler (Status Stabilisierung DSC , ID: 0x173): fehlt | 1 | - |
| 0xCF1612 | Botschaftsfehler (Status Stabilisierung DSC , ID: 0x173): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1621 | Botschaftsfehler (Ist Bremsmoment Summe , ID: 0xEF): fehlt | 1 | - |
| 0xCF1622 | Botschaftsfehler (Ist Bremsmoment Summe , ID: 0xEF): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1651 | Botschaftsfehler (Ist Drehzahl Rad ungesichert, ID: 0x254): fehlt | 1 | - |
| 0xCF16B1 | Botschaft (Neigung Fahrbahn, 0x163) fehlt, Sender DSC | 1 | - |
| 0xCF16C1 | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: 0x199): fehlt | 1 | - |
| 0xCF16D1 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: 0x1A1): fehlt | 1 | - |
| 0xCF16D2 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: 0x1A1): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF16F1 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: 0x19A): fehlt | 1 | - |
| 0xCF1701 | Botschaftsfehler (Status Gangwahlschalter, ID: 0x197, LP-CAN): fehlt | 1 | - |
| 0xCF1702 | Botschaftsfehler (Status Gangwahlschalter, ID: 0x197, LP-CAN): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF1703 | Schnittstelle GWS (Status Gangwahlschalter, ID: 0x197): Totalausfall der Kommunikation | 1 | - |
| 0xCF1731 | Botschaftsfehler (Status Gangwahlschalter, ID: 0x197, Private-CAN): fehlt | 1 | - |
| 0xCF1732 | Botschaftsfehler (Status Gangwahlschalter, ID: 0x197, Private-CAN): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF17D1 | Botschaftsfehler (Status Stillstandsfunktionen DSC, 0x2B5): fehlt | 1 | - |
| 0xCF1861 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug , ID: 0x19F): fehlt | 1 | - |
| 0xCF1871 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: 0x2E0): fehlt | 1 | - |
| 0xCF1881 | Botschaftsfehler (Lenkwinkel Vorderachse Effektiv, ID: 0x302): fehlt | 1 | - |
| 0xCF1921 | Botschaftsfehler (Außentemperatur, ID: 0x2CA): fehlt | 1 | - |
| 0xCF1931 | Botschaftsfehler (Relativzeit BN2020, ID: 0x328): fehlt | 1 | - |
| 0xCF1941 | Botschaftsfehler (Kilometerstand/Reichweite, ID: 0x330): fehlt | 1 | - |
| 0xCF2011 | Botschaftsfehler (ZV und Klappenzustand, ID: 0x2FC): fehlt | 1 | - |
| 0xCF2021 | Botschaftsfehler (Fahrzeugzustand, ID: 0x3A0): fehlt | 1 | - |
| 0xCF2061 | Botschaftsfehler (Zustand Fahrzeug, ID: 0x3C): fehlt | 1 | - |
| 0xCF2062 | Botschaftsfehler (Zustand Fahrzeug, ID: 0x3C): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF2071 | Botschaftsfehler (Bedienung Tempomat, ID: 0x189): fehlt | 1 | - |
| 0xCF2091 | Botschaftsfehler (Information Fahrzeug Antrieb , ID: 0x65): fehlt | 1 | - |
| 0xCF20D1 | Botschaftsfehler (Blinken, ID: 0x1F6): fehlt | 1 | - |
| 0xCF2101 | Botschaftsfehler (Bedienung Schaltpaddel, ID: 0x207): fehlt | 1 | - |
| 0xCF2301 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: 0x297): fehlt | 1 | - |
| 0xCF2302 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: 0x297): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF2501 | Botschaftsfehler (Status Anhaenger, ID: 0x2E4): fehlt | 1 | - |
| 0xCF2701 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: 0x1E1): fehlt | 1 | - |
| 0xCF2702 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: 0x1E1): nicht aktuell oder Prüfsummenfehler | 1 | - |
| 0xCF2801 | Botschaftsfehler (Information Antriebsstrang , ID: 0x138): fehlt | 1 | - |
| 0xCF2C11 | Signal (Ist Drehmoment Kurbelwelle, 0xA5) ungültig, Sender DME | 1 | - |
| 0xCF2C21 | Signal (Ist Drehmoment Kurbelwelle, 0xA5) ungültig oder Qualifier-Abgleichwert-Nutzsignal, Sender DME | 1 | - |
| 0xCF2C25 | Signal (Ist Drehzahl Kurbelwelle, 0xA5) Qualifier-Ersatzwert, Sender DME | 1 | - |
| 0xCF2C26 | Signal (Absenkung Abregelung Drehzahl Antrieb 2, 0x3F9 oder Drehzahl Motor Maximal zulässig, 0x3F9) ungültig, Empfänger: EGS, Sender DME | 1 | - |
| 0xCF2CE1 | Signal (Ist Winkel Fahrpedal, 0xD9) ungültig, Empfänger: EGS, Sender DME | 1 | - |
| 0xCF2CE2 | Signal (Qualifier Ist Winkel Fahrpedal, 0xD9) ungültig oder Qualifier-Abgleichwert-Nutzsignal, Sender DME | 1 | - |
| 0xCF2D01 | Signal (Status OBD Zyklus, 0x397) ungültig, Sender DME | 1 | - |
| 0xCF2D41 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Status KAT Heizung, Sender DME | 1 | - |
| 0xCF2D50 | Signal (Daten Antriebsstrang 1, 0x3FB) ungültig Soll Drehzahl Leerlauf Antrieb Erweitert, Sender DME | 1 | - |
| 0xCF2D51 | Signal (Soll Drehzahl Leerlauf Antrieb, 0x3FB) ungültig, Sender DME | 1 | - |
| 0xCF2DB1 | Signal (Anforderung Anfahrhilfe Motorsteuerung, 0x3FB) ungültig, Sender DME | 1 | - |
| 0xCF2DE1 | Signal (Status Schalter Warmlauf Antrieb, 0x3FB) ungültig oder Zwangshochschaltung aufgrund Anforderung thermischer Motorschutz, Sender DME | 1 | - |
| 0xCF2E01 | Signal (Ist Bremsmoment Summe, 0xEF) ungültig, Sender DSC | 1 | - |
| 0xCF2E02 | Signal (Status Automatic Hold und Status Parkbremse, 0x2B5) ungültig, Sender DSC | 1 | - |
| 0xCF2F02 | Signal (Ist Drehzahl Rad HL/VL/HR/VR, 0x254) ungültig, Sender DSC | 1 | - |
| 0xCF2F03 | Signal (Querbeschleunigung Schwerpunkt, 0x19A) ungültig | 1 | - |
| 0xCF2F82 | Signal (Status Zustand Fahrzeug, 0x3C) ungültig | 1 | - |
| 0xCF2FA1 | Signal (Status Türkontakt FAT, 0x2FC, Status Türkontakt FAT Abgesichert, 0x1E1) ungültig, Sender BDC | 1 | - |
| 0xCF2FC2 | Signal (Neigung Fahrbahn, 0x163) ungültig Ist Längsneigung Fahrbahn oder eingeschränkte Nutzsignalqualität, Sender DSC | 1 | - |
| 0xCF3101 | Signal (Status Gangwahlschalter, 0x197, LP-CAN) ungültig Bedienung Gangwahlschalter, Empfänger EGS, Sender GWS | 1 | - |
| 0xCF3141 | Signal (Bedienung Gangwahlschalter Taster Parken, 0x197) ungültig, Empfänger EGS, Sender GWS | 1 | - |
| 0xCF3192 | Signal (Status Gurtschloß Schalter FA, 0x297) ungültig, Sender ACSM | 1 | - |
| 0xCF31C1 | Signal (Ist Drehzahl Motor Kurbelwelle, 0xA5, Absenkung Abregelung Drehzahl Antrieb 2, 0x3F9, Drehzahl Motor Maximal zulässig, 0x3F9) ungültig oder Motor-Überdrehzahl | 1 | - |
| 0xCF3501 | Signal (Status Bremsung Fahrer, 0x173) ungültig, Sender DSC | 1 | - |
| 0xCF3503 | Signal (Konfiguration Stellhebel Antrieb Fahrerlebnis, 0x324, LP-CAN) ungültig Status Verhinderung Gangwahl, Sender DME | 1 | - |
| 0xCF3531 | Signal (Ist Bremsmoment Summe Fahrerwunsch, 0xEF) ungültig, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF3603 | Signal (Status Verfügbarkeit Segeln DME, 0x30B) ungültig, Sender DME | 1 | - |
| 0xCF36B1 | Signal (Anforderung Funktion Antrieb, 0x65) ungültig, Sender BDC | 1 | - |
| 0xCF36D1 | Signal (Qualifier Funktion FDR / ABS / ASC, 0x173) ungültig oder eingeschränkte Nutzsignalqualität, Empfänger EGS, Sender DSC | 1 | - |
| 0xCF3801 | Signal (Soll Betriebsart Antriebsstrang Getriebe, Anforderung Betriebsart Getriebestrang FAS, 0xA7) ungültig, Sender DME | 1 | - |
| 0xCF3851 | Signal (Status Motor Start Auto, 0x30B) ungültig Status Zustand MSA, Sender  DME | 1 | - |
| 0xCF3852 | MSA-Plausibilisierung: Verarbeitung des Motorstopp-Signals EGS intern unplausibel | 1 | - |
| 0xCF3A61 | Signal (Fahrer Verfügbarkeit Schnell, 0x8F) ungültig, Empfänger EGS, Sender DME | 1 | - |
| 0xCF3A91 | Signal (OBD Modellwert Last Motor, 0x397) ungültig, Sender DME | 1 | - |
| 0xCF3AA1 | Signal (OBD Position Drosselklappe Motor, 0x397) ungültig, Sender DME | 1 | - |
| 0xCF3CB1 | Signal (Temperatur Motor Antrieb, 0x3F9) ungültig, Sender DME | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Zustand Elektromaschine | 0-n | High | 0xF0 | TAB_UWB_6120_EM_ZUSTAND | - | - | - |
| 0x0002 | Zustand Verbrennungsmotor | 0-n | High | 0x0F | TAB_UWB_6120_VM_ZUSTAND | - | - | - |
| 0x0003 | Raddrehzahl vorne | 0/1 | High | 0x01 | - | - | - | - |
| 0x0004 | Raddrehzahl hinten | 0/1 | High | 0x02 | - | - | - | - |
| 0x0005 | Bremsmoment | 0/1 | High | 0x04 | - | - | - | - |
| 0x0006 | Bremslichtkontakt | 0/1 | High | 0x08 | - | - | - | - |
| 0x0007 | ABS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0008 | P-Taster | 0/1 | High | 0x20 | - | - | - | - |
| 0x0009 | GWS | 0/1 | High | 0x40 | - | - | - | - |
| 0x000A | Bremsflag | 0/1 | High | 0x80 | - | - | - | - |
| 0x000B | Abtrieb | 0/1 | High | 0x01 | - | - | - | - |
| 0x000C | Turbine | 0/1 | High | 0x02 | - | - | - | - |
| 0x000D | P-Sensor | 0/1 | High | 0x04 | - | - | - | - |
| 0x000E | CGT-Sensor | 0/1 | High | 0x08 | - | - | - | - |
| 0x000F | CCHIP-Sensor | 0/1 | High | 0x10 | - | - | - | - |
| 0x0010 | CGT | 0/1 | High | 0x20 | - | - | - | - |
| 0x0011 | Fahrbetrieb | 0/1 | High | 0x80 | - | - | - | - |
| 0x0012 | Out 14 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0013 | Out 13 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0014 | Out 12 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0015 | Out 10 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0016 | Out 9 | 0/1 | High | 0x10 | - | - | - | - |
| 0x0017 | Out 8 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0018 | Out 11 | 0/1 | High | 0x40 | - | - | - | - |
| 0x0019 | Out 7 | 0/1 | High | 0x80 | - | - | - | - |
| 0x001A | Kraftschluss | 0-n | High | 0x0f | UWB_TAB_KRAFTSCHLUSS | - | - | - |
| 0x001B | Drehrichtung Abtrieb | 0-n | High | 0x20 | UW_TAB_DREHRICHTUING_ABTRIEB | - | - | - |
| 0x001C | Drehrichtung Turbine | 0-n | High | 0x80 | UW_TAB_DREHRICHTUNG_TURBINE | - | - | - |
| 0x001D | Tab_Zielgang | 0-n | High | 0xF0 | UWB_TAB_ZIELGANG | - | - | - |
| 0x001E | Tab_Istgang | 0-n | High | 0x0F | UWB_TAB_ISTGANG | - | - | - |
| 0x001F | Wandlerueberbrueckungskupplung | 0-n | High | 0x02 | UWB_TAB_F006 | - | - | - |
| 0x0020 | Segelzustand_Getriebe | 0-n | High | 0x10 | UWB_TAB_F007 | - | - | - |
| 0x0021 | Segelzustand | 0/1 | High | 0x20 | - | - | - | - |
| 0x0022 | Zielzustand Hybridablauf | 0-n | High | 0xF0 | TAB_ZIELZUSTAND_HYBRIDABLAUF | - | - | - |
| 0x0023 | Istzustand Hybridablauf | 0-n | High | 0x0F | TAB_ISTZUSTAND_HYBRIDABLAUF | - | - | - |
| 0x0024 | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0025 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0026 | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0027 | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x0028 | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0029 | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x002A | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x002B | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x002C | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x002D | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x002E | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x002F | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x0030 | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0031 | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x0032 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0033 | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x0034 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x0035 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x0036 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x0037 | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x0038 | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x0039 | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x003A | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x003B | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x003C | Signalplausibilisierungsfehler positiver Motoreingriff | 0/1 | High | 0x01 | - | - | - | - |
| 0x003D | Signalplausibilisierungsfehler negativer Motoreingriff | 0/1 | High | 0x02 | - | - | - | - |
| 0x003E | Fehlermerker negative Intensität | 0/1 | High | 0x08 | - | - | - | - |
| 0x003F | Fehlermerker positive Intensität | 0/1 | High | 0x04 | - | - | - | - |
| 0x0040 | Gradientenfehler positiver Motoreingriff | 0/1 | High | 0x10 | - | - | - | - |
| 0x0041 | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x0042 | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x0043 | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x0044 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x0045 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x0046 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x0047 | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x0048 | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x0049 | Schaltzustand Kupplung A | 0/1 | High | 0x01 | - | - | - | - |
| 0x004A | Schaltzustand Kupplung B | 0/1 | High | 0x02 | - | - | - | - |
| 0x004B | Schaltzustand Kupplung C | 0/1 | High | 0x04 | - | - | - | - |
| 0x004C | Schaltzustand Kupplung D | 0/1 | High | 0x08 | - | - | - | - |
| 0x004D | Schaltzustand Kupplung E | 0/1 | High | 0x10 | - | - | - | - |
| 0x004E | Kupplung_Bit0-2 | 0-n | High | 0x07 | TAB_UWB_6210_KUPPLUNG | - | - | - |
| 0x004F | Temperatur_Bit3-7 | 0-n | High | 0xF8 | TAB_UWB_6210_TEMPERATUR | - | - | - |
| 0x0050 | Kommunikation zu zweitem Mikroprozessor in Ordnung | 0/1 | High | 0x00 | - | - | - | - |
| 0x0051 | Botschaftsausfall | 0/1 | High | 0x01 | - | - | - | - |
| 0x0052 | CAN-Bus Fehler | 0/1 | High | 0x02 | - | - | - | - |
| 0x0053 | Prüfsumme nicht aktuell | 0/1 | High | 0x08 | - | - | - | - |
| 0x0054 | Botschaft nicht aktuell | 0/1 | High | 0x10 | - | - | - | - |
| 0x0055 | Fehlerhafte ID von zweitem Mikroprozessor | 0/1 | High | 0x20 | - | - | - | - |
| 0x0056 | Komplementfehler | 0/1 | High | 0x40 | - | - | - | - |
| 0x0057 | Botschaft in aktuellem Fahrzyklus nicht erhalten | 0/1 | High | 0x80 | - | - | - | - |
| 0x0058 | Plusseitenschalter nicht deaktiviert | 0/1 | High | 0x0000 | - | - | - | - |
| 0x0059 | Überhöhter Abtriebsdrehzahlgradient | 0/1 | High | 0x0001 | - | - | - | - |
| 0x005A | Abtriebsdrehzahlstatus unplausibel | 0/1 | High | 0x0002 | - | - | - | - |
| 0x005B | Überwachungsebene 2 Fehler | 0/1 | High | 0x0004 | - | - | - | - |
| 0x005C | Kommunikationsfehler | 0/1 | High | 0x0008 | - | - | - | - |
| 0x005D | Zweiter Mikroprozessor hat einen internen Fehler erkannt | 0/1 | High | 0x0100 | - | - | - | - |
| 0x005E | Prüfrechnung der Kommunikationsstack-Überwachung | 0/1 | High | 0x0200 | - | - | - | - |
| 0x005F | Speicherfehler auf zweitem Mikroprozessor | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0060 | Inkompatible Software auf Hauptprozessor und zweitem Mikroprozessor | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0061 | Abschaltpfadtest des zweiten Mikroprozessors | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0062 | Zweiter Mikroprozessor in Initialisierung | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0063 | TemporäreFehler-Überspannung | 0/1 | High | 0x0108 | - | - | - | - |
| 0x0064 | PermanenteFehler-Watchdogtestfehlerhaft | 0/1 | High | 0x0201 | - | - | - | - |
| 0x0065 | PermanenteFehler-RAM-Fehler | 0/1 | High | 0x0202 | - | - | - | - |
| 0x0066 | PermanenteFehler-ROM-Fehler | 0/1 | High | 0x0204 | - | - | - | - |
| 0x0067 | PermanenteFehler-Endstufenfehler | 0/1 | High | 0x0210 | - | - | - | - |
| 0x0068 | IEP: Temperatursensor permanent defekt | 0/1 | High | 0x0220 | - | - | - | - |
| 0x0069 | Rotor: dauerhafte Blockierung | 0/1 | High | 0x0280 | - | - | - | - |
| 0x006A | Kommunikationsfehler: Prüfsummer | 0/1 | High | 0x0402 | - | - | - | - |
| 0x006B | Sicherheitskonzept: Funktionsüberwachung | 0/1 | High | 0x8004 | - | - | - | - |
| 0x006C | TemporäreFehler-Rotorblockierung | 0/1 | High | 0x0101 | - | - | - | - |
| 0x006D | TemporäreFehler-Übertemperatur | 0/1 | High | 0x0102 | - | - | - | - |
| 0x006E | TemporäreFehler-Untertemperatur | 0/1 | High | 0x0104 | - | - | - | - |
| 0x006F | TemporäreFehler-Unterspannung | 0/1 | High | 0x0110 | - | - | - | - |
| 0x0070 | TemporäreFehler-Überdrehzahl | 0/1 | High | 0x0120 | - | - | - | - |
| 0x0071 | Sicherheitskonzept: CRC-Checksumme: BP-Vorgabe | 0/1 | High | 0x8001 | - | - | - | - |
| 0x0072 | PermanenteFehler-Überstromfehler | 0/1 | High | 0x0208 | - | - | - | - |
| 0x0073 | Rotorlagesensor: permanent defekt | 0/1 | High | 0x0240 | - | - | - | - |
| 0x0074 | Kommunikationsfehler: Botschaftszähler | 0/1 | High | 0x0401 | - | - | - | - |
| 0x0075 | Sicherheitskonzept: Datenkonsistenz | 0/1 | High | 0x8002 | - | - | - | - |
| 0x0076 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x0077 | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x0078 | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x0079 | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x007A | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x007B | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x007C | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x007D | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x007E | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x007F | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x0080 | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0081 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x0082 | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x0083 | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x0084 | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x0085 | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x0086 | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x0087 | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0088 | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x0089 | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x008A | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x008B | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x008C | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x008D | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x008E | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x008F | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x0090 | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x0091 | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x0092 | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x0093 | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x0094 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x0095 | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x0096 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0097 | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x0098 | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x0099 | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x009A | Kupplung D geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x08 | - | - | - | - |
| 0x009B | Kupplung B geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x02 | - | - | - | - |
| 0x009C | Kupplung A geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x01 | - | - | - | - |
| 0x009D | Kupplung E geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x10 | - | - | - | - |
| 0x009E | Kupplung C geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x04 | - | - | - | - |
| 0x009F | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x00A0 | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x00A1 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00A2 | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00A3 | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x00A4 | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x00A5 | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x00A6 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x00A7 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x00A8 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00A9 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x00AA | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x00AB | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x00AC | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00AD | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x00AE | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x00AF | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x00B0 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x00B1 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x00B2 | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x00B3 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00B4 | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x00B5 | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00B6 | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x00B7 | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00B8 | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00B9 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x00BA | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x00BB | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x00BC | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x00BD | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00BE | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x00BF | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00C0 | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00C1 | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00C2 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x00C3 | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x00C4 | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x00C5 | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x00C6 | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x00C7 | Positionssignal | 0/1 | High | 0x02 | - | - | - | - |
| 0x00C8 | Bremssignal | 0/1 | High | 0x04 | - | - | - | - |
| 0x00C9 | Modussignal | 0/1 | High | 0x01 | - | - | - | - |
| 0x00CA | Kommunikationsstatus IEP Chksum | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00CB | Kommunikationsstatus IEP NotReceived | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00CC | Kommunikationsstatus IEP Timeout | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00CD | Kommunikationsstatus IEP LINBus | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00CE | Kommunikationsstatus IEP AliveCnt | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00CF | Kommunikationsstatus IEP BusOff | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00D0 | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x00D1 | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x00D2 | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x00D3 | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00D4 | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x00D5 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x00D6 | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x00D7 | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x00D8 | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x00D9 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x00DA | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x00DB | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00DC | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x00DD | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x00DE | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00DF | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x00E0 | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x00E1 | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x00E2 | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x00E3 | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x00E4 | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x00E5 | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x00E6 | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x00E7 | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x00E8 | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x00E9 | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x00EA | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00EB | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x00EC | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x00ED | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x00EE | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x00EF | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00F0 | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x00F1 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x00F2 | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x00F3 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00F4 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x00F5 | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x00F6 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00F7 | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x00F8 | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x00F9 | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x00FA | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00FB | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | Getriebeöltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6001 | Batteriespannung | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x6002 | Kilometerstand | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | Systemzeit | s | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6004 | Versorgungsspannung Sensor | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x6005 | Chip1 - Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | Spannung der elektrischen Drucksteuerventile und Magnetventile | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x6007 | Fahrpedalwinkel | % | High | unsigned char | - | 39.21 | 100.0 | 0.0 |
| 0x6008 | Abbtriebsdrehzahl | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x6009 | Turbinendrehzahl | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x600A | Motordrehzahl | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x600B | Motor-Istmoment | Nm | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x600C | Aktueller Gang | 0-n | High | 0xFF | UWB_TAB_600C | - | - | - |
| 0x600D | Aktive Maßnahmen Byte 1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x600E | Aktive Maßnahmen Byte 2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x600F | Aktive Maßnahmen Byte 3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6010 | Aktive Maßnahmen Byte 4 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6011 | Aktive Maßnahmen Byte 5 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6012 | Aktive Maßnahmen Byte 6 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6013 | Aktive Maßnahmen Byte 7 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6014 | Aktive Maßnahmen Byte 8 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6015 | Fehlermerker EEPROM Prüfung | 0-n | High | 0xFF | UWB_TAB_6015 | - | - | - |
| 0x6016 | Zustand Parken-Wohnen-Fahren | 0-n | High | 0xFF | UWB_TAB_PWF | - | - | - |
| 0x6017 | Zeit seit Reset / Klemme 15 ein | ms | High | unsigned char | - | 30.0 | 1.0 | 0.0 |
| 0x6018 | Diskrete Eingänge | 0-n | High | 0xF0 | UWB_TAB_6018 | - | - | - |
| 0x6019 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x601A | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x601B | Signalstatus für CAN-Botschaften von DME | 0-n | High | 0xF0 | UWB_TAB_601B | - | - | - |
| 0x601C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x601D | Chip2-Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x601E | Wandlertemperatur | °C | High | unsigned char | - | 2.0 | 1.0 | -40.0 |
| 0x601F | angeforderter Motoreingriff der EGS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6020 | Signalstatus für CAN-Botschaften von FEM / CAS | 0-n | High | 0xFF | UWB_TAB_6020 | - | - | - |
| 0x6021 | Raddrehzahl vorn links | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6022 | Raddrehzahl vorn rechts | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6023 | Raddrehzahl hinten links | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6024 | Raddrehzahl hinten rechts | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6025 | Vorgabe der HAS Ablaufvariante durch die HST | 0-n | High | 0x0F | UWB_TAB_6025 | - | - | - |
| 0x6026 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6027 | Vorgabe Solldrehzahl an die Elektromaschine | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x6028 | Istmoment Elektromaschine mit Getriebeeingriff | Nm | High | unsigned char | - | 4.0 | 1.0 | -500.0 |
| 0x6029 | Maximal zulässiges Motordrehmoment für Hybrid-Antriebsstrang | Nm | High | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x602A | Istmoment K0 | Nm | High | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x602B | Istzustand K0 | 0-n | High | 0x0F | UWB_TAB_602B | - | - | - |
| 0x602C | Physikalischer Zustand integriertes Anfahrelement | 0-n | High | 0x0F | UWB_TAB_602C | - | - | - |
| 0x602D | Istzustand integrierte elektrische Pumpe | 0-n | High | 0x0F | UWB_TAB_602D | - | - | - |
| 0x602E | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x602F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6030 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6031 | Motormoment | Nm | High | unsigned int | - | 4.0 | 1.0 | -100.0 |
| 0x6032 | Sollstrom OUT0 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6033 | Sollstrom OUT1 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6034 | Sollstrom OUT2 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6035 | Sollstrom OUT3 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6036 | Sollstrom OUT4 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6037 | Sollstrom OUT5 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6038 | Sollstrom OUT6 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6039 | Sollstrom OUT7 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x603C | Sollstrom OUT10 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x603D | Sollstrom OUT11 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x603E | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x603F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6040 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6041 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6042 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6043 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6044 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6045 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6046 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6047 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x604E | Maximal zulässiges Motordrehmoment | - | High | unsigned char | - | 8.0 | 1.0 | -400.0 |
| 0x604F | Status Antrieb | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6050 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6051 | IEP Betriebspunkt BP-Rückmeldung | 0-n | High | 0xFF | UWB_TAB_6051 | - | - | - |
| 0x6052 | integrierte elektrische Pumpe: Drehzahl | 1/min | High | unsigned char | - | 1.0 | 32.0 | 0.0 |
| 0x6053 | integrierte elektrische Pumpe: Summenstrom | mA | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x6054 | integrierte elektrische Pumpe: Spannung Klemme 30 | mV | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x6055 | IEP Betriebspunkt BP-Vorgabe | 0-n | High | 0xFF | UWB_TAB_6051 | - | - | - |
| 0x6056 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6057 | integrierte elektrische Pumpe: Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6058 | integrierte elektrische Pumpe: Identifikationsnummer als Hex-Wert | HEX | High | unsigned char | - | - | - | - |
| 0x6059 | Motordrehzahl Verbrennungsmotor | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x605A | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6060 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6061 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6062 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6063 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6064 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6065 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6066 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6067 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6068 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6069 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6078 | Betriebsart Elektromaschine | 0-n | High | 0xFF | TAB_UWB_6078_EM_BETRIEBSART | - | - | - |
| 0x6079 | Virtuelle Turbinendrehzahl | - | High | unsigned char | - | 16.0 | 1.0 | 0.0 |
| 0x6080 | Zurückgelegte Kilometer aus Getriebe Antrieb berechnet | km | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6081 | Betriebszeit der EGS ohne Standby-Zeit | min | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6082 | Motoreingriff Fehlerart | 0-n | High | 0xFF | UW_TAB_6081 | - | - | - |
| 0x6083 | Motoreingriff Fehlerart 1 | 0-n | High | 0xFF | UW_TAB_6081 | - | - | - |
| 0x6090 | Anzahl der ausgeführten Standadaptionen | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6091 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6092 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6093 | Abtriebsdrehzahl zweiter Mikroprozessor | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6094 | Abtriebsdrehzahldifferenz zweiter Mikroprozessor | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6095 | Abtriebsdrehzahlstatus zweiter Mikroprozessor | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6100 | Aktive Maßnahmen Byte 9 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6101 | Aktive Maßnahmen Byte 10 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6102 | Aktive Maßnahmen Byte 11 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6103 | Aktive Maßnahmen Byte 12 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6120 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x61F5 | Trennkupplung Elektromaschine Temperatur | °C | High | signed int | - | 1.0 | 1.0 | -40.0 |
| 0x61F6 | integriertes Anfahrelement: Temperatur | °C | High | signed int | - | 1.0 | 1.0 | -40.0 |
| 0x61F7 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x61F8 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x61F9 | Iststrom Kühlung integriertes Anfahrelement | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x61FA | Fülldruck K0 | mbar | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x61FB | Zähler Fülldruck K0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x61FC | Schnellfüllzeit K0 | ms | High | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x61FD | Zähler Schnellfüllzeit K0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x61FE | IAE Anlegepunkt Adaptions-Speicher 0 | mbar | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x61FF | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6200 | Signalwechsel Filterzaehler Kupplung A | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6201 | Signalwechsel Filterzaehler Kupplung B | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6202 | Signalwechsel Filterzaehler Kupplung C | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6203 | Signalwechsel Filterzaehler Kupplung D | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6204 | Signalwechsel Filterzaehler Kupplung E | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6210 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x63EA | Getriebesollposition | 0-n | High | 0xFF | UWB_TAB_63EA | - | - | - |
| 0x63EB | Im Puffer abgelegte Getriebesollposition | 0-n | High | 0xFF | UWB_TAB_63EA | - | - | - |
| 0x63EC | im Puffer abgelegte Fahrtrichtung | 0-n | High | 0xFF | UWB_TAB_63EC | - | - | - |
| 0x63ED | Zwischengröße der Anzeigepositionen P,R,N,D | 0-n | High | 0xFF | UWB_TAB_63EA | - | - | - |
| 0x63EE | Fahrgeschwindigkeit | - | High | unsigned int | - | 1.0 | 16.0 | 0.0 |
| 0x63EF | Im Puffer abgelegter Merker für mechanischen Notlauf | 0-n | High | 0xFF | UWB_TAB_63EF | - | - | - |
| 0x63F0 | Zustand Parksperre | 0-n | High | 0xFF | UWB_TAB_63F0 | - | - | - |
| 0x63F1 | Status Parksperre | 0-n | High | 0xFF | UWB_TAB_63F1 | - | - | - |
| 0x63F2 | Statusmerker Parkbremse | 0-n | High | 0xFF | UWB_TAB_63F2 | - | - | - |
| 0x63F3 | Zustand Überhitzungsschutz | 0-n | High | 0xFF | UWB_TAB_63F3 | - | - | - |
| 0x63F4 | Automatisches Einlegen der Parksperre, wenn Fahrer das Fahrzeug verlässt und das Getriebe in Position R oder D steht | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F5 | Automatisches Einlegen der Parksperre von EMF angefordert | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F6 | Modus elektrische Getriebenotentriegelung abgeschlossen, Position P erfolgreich ausgelegt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F7 | Modus elektrische Getriebenotentriegelung abgeschlossen, Position P nicht erfolgreich ausgelegt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F8 | Position N durch elektrische Getriebenotentriegelung und Fahrgeschwindigkeit größer Schwellenwert eingelegt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F9 | Zustand verschiedener EWS6 Systeme | 0-n | High | 0xFF | UWB_TAB_63F9 | - | - | - |
| 0x63FA | Status verschiedener Eingangsgrößen für automatisches Einlegen der Parksperre | 0-n | High | 0xFF | UWB_TAB_63FA | - | - | - |
| 0x63FB | N-Haltephase_angefordert | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FC | Anzahl Fahrzeug verlassen bei geschlossenem Sicherheitsgurt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FD | Fehlerursache Anzeige Bedien Konzept Ebene 2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FE | Zähler für Diagnose in N Gegenbremsbetrieb | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FF | Zähler für Diagnose in P | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6400 | Zaehler AutoN für das Verlassen des Fzg | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65DF | Überhitzungsschutz: Steuergeräteinnentemperatur (LM71) | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65E0 | Überhitzungsschutz: Steuergeräteinnentemperatur (CG130) | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65E1 | Überhitzungsschutz: Status der Sensoren | 0-n | High | 0xFF | UWB_TAB_65E1 | - | - | - |
| 0x65E2 | Schwellenwert für Überhitzungsschutz | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65E3 | Ausnahmenummer | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x65E4 | Bitfeld für Lesespeicher Prüfsummenfehler | 0-n | High | 0xFFFF | UWB_TAB_65E4 | - | - | - |
| 0x65E5 | Unterspannungsreset: Parameter des Exception Handlers bzgl. Adressinformationen | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x65E6 | Hardwareüberwachungseinheit: Umweltbedingungen 1 | 0-n | High | 0xFFFF | UWB_TAB_65E6 | - | - | - |
| 0x65E7 | Hardwareüberwachungseinheit: Umweltbedingungen 2 | 0-n | High | 0xFFFF | UWB_TAB_65E7 | - | - | - |
| 0x65E8 | Mikrokontrollerkomponenten: Umweltbedingung 1 | 0-n | High | 0xFF | UWB_TAB_65E8 | - | - | - |
| 0x65E9 | Mikrokontrollerkomponenten: Umweltbedingung 2 | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x420291 | Übersetzungsüberwachung: Sollposition D/R ohne Kraftschluss. Fehler noch nicht abschließend erkannt. | 0 | - |
| 0x420301 | Übersetzungsüberwachung: Symptom Gangüberwachung unplausibel | 0 | - |
| 0x4203F1 | Übersetzungsüberwachung: Symptom Schaltungsüberwachung unplausibel | 0 | - |
| 0x420781 | Zähler: Fahrer verlässt Fahrzeug in Wählhebelpositon N | 0 | - |
| 0x420792 | E-Schaltung: Automatisches Einlegen von N durch erkannten Gegenbremsbetrieb | 1 | - |
| 0x420801 | E-Schaltung: Infozähler für automatisches einlegen von P bei Fahrzeugverlassen | 1 | - |
| 0x420812 | E-Schaltung: Infozähler für Hilferuf von DSC oder EMF in Getriebeposition R/D oder N | 1 | - |
| 0x420822 | E-Schaltung: Infozähler für Gurtdummy | 1 | - |
| 0x420951 | Reset: Hardwarelieferant | 0 | - |
| 0x420956 | Reset: Unterspannung | 0 | - |
| 0x420961 | Reset: Systemlieferant | 0 | - |
| 0x420977 | Parkmanöver-Assistent (RCP/PMA): Wählhebelposition P angefordert | 0 | - |
| 0x421062 | EWS: Manipulationsversuch | 1 | - |
| 0x421081 | Parksperre: Missbrauch | 1 | - |
| 0x421492 | Programmierung: Alle Fehlergruppen wurden gesperrt (z.B. über UDS ControlDTCSetting beim SW-Update der EGS) | 1 | - |
| 0x421652 | E-Schaltung: elektrische Getriebenotentriegelung aktiviert | 1 | - |
| 0x421662 | E-Schaltung: Aktivierung der elektrischen Getriebenotentriegelung ist fehlgeschlagen | 1 | - |
| 0x421691 | STADA wurde durch Tester aktiviert | 0 | - |
| 0x421702 | AGS: Motor Anforderung Drehzahlbegrenzung | 0 | - |
| 0x421703 | AGS: Vorausschau-Information Erkennung ADAS2D-Fehler Motor | 0 | - |
| 0x421704 | AGS: Vorausschau-Information Zustands-/ Zeitverhalten fehlerhaft | 0 | - |
| 0x421705 | AGS: Vorausschau-Information Topologiezustand unplausibel | 0 | - |
| 0x421707 | AGS: Sollgang Instabilität | 0 | - |
| 0x421711 | E-Schaltung: Infozähler für Gurtdummy und unbekannter Fahreranwesendheit | 0 | - |
| 0x421732 | E-Schaltung: Infozähler für N-Haltephase | 1 | - |
| 0x421882 | Motoreingriff: starke Abweichung der Intensität | 0 | - |
| 0x421892 | Motoreingriff: Abweichung der Intensität | 0 | - |
| 0x422051 | Kupplungsüberhitzung: Beeinflussung Spontaneitätsindex | 0 | - |
| 0x422061 | Kupplungsüberhitzung: Reduzierung max. Motormoment | 0 | - |
| 0x422071 | Kupplungsüberhitzung: Verbot manueller Schaltungen | 0 | - |
| 0x422081 | Kupplungsüberhitzung: Schaltungsverhinderung | 0 | - |
| 0x422091 | Kupplungsüberhitzung: Schaltungsbeeinflussung | 0 | - |
| 0xCF27A1 | Botschaftsfehler (Navigation System Information, ID: 0x34E): fehlt | 1 | - |
| 0xCF2C41 | Signal (Ist Drehmoment Kurbelwelle Minimal, 0xA6, Ist Drehmoment Kurbelwelle Fahrerwunsch FAS, 0xA7) ungültig, Empfänger: EGS, Sender DME | 1 | - |
| 0xCF3002 | SysFunktion: keine gültige Zeitbotschaft RELATIVZEIT (328h) vom Systime-Master auf dem LP-CAN empfangen | 1 | - |
| 0xCF3851 | Schnittstelle DME/DDE (Status Antrieb Fahrzeug, 3F9h - Status Umsetzung MSA Motorstop, 30Bh) Signal ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Zustand Elektromaschine | 0-n | High | 0xF0 | TAB_UWB_6120_EM_ZUSTAND | - | - | - |
| 0x0002 | Zustand Verbrennungsmotor | 0-n | High | 0x0F | TAB_UWB_6120_VM_ZUSTAND | - | - | - |
| 0x0003 | Raddrehzahl vorne | 0/1 | High | 0x01 | - | - | - | - |
| 0x0004 | Raddrehzahl hinten | 0/1 | High | 0x02 | - | - | - | - |
| 0x0005 | Bremsmoment | 0/1 | High | 0x04 | - | - | - | - |
| 0x0006 | Bremslichtkontakt | 0/1 | High | 0x08 | - | - | - | - |
| 0x0007 | ABS | 0/1 | High | 0x10 | - | - | - | - |
| 0x0008 | P-Taster | 0/1 | High | 0x20 | - | - | - | - |
| 0x0009 | GWS | 0/1 | High | 0x40 | - | - | - | - |
| 0x000A | Bremsflag | 0/1 | High | 0x80 | - | - | - | - |
| 0x000B | Abtrieb | 0/1 | High | 0x01 | - | - | - | - |
| 0x000C | Turbine | 0/1 | High | 0x02 | - | - | - | - |
| 0x000D | P-Sensor | 0/1 | High | 0x04 | - | - | - | - |
| 0x000E | CGT-Sensor | 0/1 | High | 0x08 | - | - | - | - |
| 0x000F | CCHIP-Sensor | 0/1 | High | 0x10 | - | - | - | - |
| 0x0010 | CGT | 0/1 | High | 0x20 | - | - | - | - |
| 0x0011 | Fahrbetrieb | 0/1 | High | 0x80 | - | - | - | - |
| 0x0012 | Out 14 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0013 | Out 13 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0014 | Out 12 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0015 | Out 10 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0016 | Out 9 | 0/1 | High | 0x10 | - | - | - | - |
| 0x0017 | Out 8 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0018 | Out 11 | 0/1 | High | 0x40 | - | - | - | - |
| 0x0019 | Out 7 | 0/1 | High | 0x80 | - | - | - | - |
| 0x001A | Kraftschluss | 0-n | High | 0x0f | UWB_TAB_KRAFTSCHLUSS | - | - | - |
| 0x001B | Drehrichtung Abtrieb | 0-n | High | 0x20 | UW_TAB_DREHRICHTUING_ABTRIEB | - | - | - |
| 0x001C | Drehrichtung Turbine | 0-n | High | 0x80 | UW_TAB_DREHRICHTUNG_TURBINE | - | - | - |
| 0x001D | Tab_Zielgang | 0-n | High | 0xF0 | UWB_TAB_ZIELGANG | - | - | - |
| 0x001E | Tab_Istgang | 0-n | High | 0x0F | UWB_TAB_ISTGANG | - | - | - |
| 0x001F | Wandlerueberbrueckungskupplung | 0-n | High | 0x02 | UWB_TAB_F006 | - | - | - |
| 0x0020 | Segelzustand_Getriebe | 0-n | High | 0x10 | UWB_TAB_F007 | - | - | - |
| 0x0021 | Segelzustand | 0/1 | High | 0x20 | - | - | - | - |
| 0x0022 | Zielzustand Hybridablauf | 0-n | High | 0xF0 | TAB_ZIELZUSTAND_HYBRIDABLAUF | - | - | - |
| 0x0023 | Istzustand Hybridablauf | 0-n | High | 0x0F | TAB_ISTZUSTAND_HYBRIDABLAUF | - | - | - |
| 0x0024 | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0025 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0026 | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0027 | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x0028 | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0029 | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x002A | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x002B | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x002C | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x002D | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x002E | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x002F | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x0030 | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0031 | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x0032 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x0033 | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x0034 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x0035 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x0036 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x0037 | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x0038 | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x0039 | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x003A | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x003B | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x003C | Signalplausibilisierungsfehler positiver Motoreingriff | 0/1 | High | 0x01 | - | - | - | - |
| 0x003D | Signalplausibilisierungsfehler negativer Motoreingriff | 0/1 | High | 0x02 | - | - | - | - |
| 0x003E | Fehlermerker negative Intensität | 0/1 | High | 0x08 | - | - | - | - |
| 0x003F | Fehlermerker positive Intensität | 0/1 | High | 0x04 | - | - | - | - |
| 0x0040 | Gradientenfehler positiver Motoreingriff | 0/1 | High | 0x10 | - | - | - | - |
| 0x0041 | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x0042 | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x0043 | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x0044 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x0045 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x0046 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x0047 | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x0048 | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x0049 | Schaltzustand Kupplung A | 0/1 | High | 0x01 | - | - | - | - |
| 0x004A | Schaltzustand Kupplung B | 0/1 | High | 0x02 | - | - | - | - |
| 0x004B | Schaltzustand Kupplung C | 0/1 | High | 0x04 | - | - | - | - |
| 0x004C | Schaltzustand Kupplung D | 0/1 | High | 0x08 | - | - | - | - |
| 0x004D | Schaltzustand Kupplung E | 0/1 | High | 0x10 | - | - | - | - |
| 0x004E | Kupplung_Bit0-2 | 0-n | High | 0x07 | TAB_UWB_6210_KUPPLUNG | - | - | - |
| 0x004F | Temperatur_Bit3-7 | 0-n | High | 0xF8 | TAB_UWB_6210_TEMPERATUR | - | - | - |
| 0x0050 | Kommunikation zu zweitem Mikroprozessor in Ordnung | 0/1 | High | 0x00 | - | - | - | - |
| 0x0051 | Botschaftsausfall | 0/1 | High | 0x01 | - | - | - | - |
| 0x0052 | CAN-Bus Fehler | 0/1 | High | 0x02 | - | - | - | - |
| 0x0053 | Prüfsumme nicht aktuell | 0/1 | High | 0x08 | - | - | - | - |
| 0x0054 | Botschaft nicht aktuell | 0/1 | High | 0x10 | - | - | - | - |
| 0x0055 | Fehlerhafte ID von zweitem Mikroprozessor | 0/1 | High | 0x20 | - | - | - | - |
| 0x0056 | Komplementfehler | 0/1 | High | 0x40 | - | - | - | - |
| 0x0057 | Botschaft in aktuellem Fahrzyklus nicht erhalten | 0/1 | High | 0x80 | - | - | - | - |
| 0x0058 | Plusseitenschalter nicht deaktiviert | 0/1 | High | 0x0000 | - | - | - | - |
| 0x0059 | Überhöhter Abtriebsdrehzahlgradient | 0/1 | High | 0x0001 | - | - | - | - |
| 0x005A | Abtriebsdrehzahlstatus unplausibel | 0/1 | High | 0x0002 | - | - | - | - |
| 0x005B | Überwachungsebene 2 Fehler | 0/1 | High | 0x0004 | - | - | - | - |
| 0x005C | Kommunikationsfehler | 0/1 | High | 0x0008 | - | - | - | - |
| 0x005D | Zweiter Mikroprozessor hat einen internen Fehler erkannt | 0/1 | High | 0x0100 | - | - | - | - |
| 0x005E | Prüfrechnung der Kommunikationsstack-Überwachung | 0/1 | High | 0x0200 | - | - | - | - |
| 0x005F | Speicherfehler auf zweitem Mikroprozessor | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0060 | Inkompatible Software auf Hauptprozessor und zweitem Mikroprozessor | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0061 | Abschaltpfadtest des zweiten Mikroprozessors | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0062 | Zweiter Mikroprozessor in Initialisierung | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0063 | TemporäreFehler-Überspannung | 0/1 | High | 0x0108 | - | - | - | - |
| 0x0064 | PermanenteFehler-Watchdogtestfehlerhaft | 0/1 | High | 0x0201 | - | - | - | - |
| 0x0065 | PermanenteFehler-RAM-Fehler | 0/1 | High | 0x0202 | - | - | - | - |
| 0x0066 | PermanenteFehler-ROM-Fehler | 0/1 | High | 0x0204 | - | - | - | - |
| 0x0067 | PermanenteFehler-Endstufenfehler | 0/1 | High | 0x0210 | - | - | - | - |
| 0x0068 | IEP: Temperatursensor permanent defekt | 0/1 | High | 0x0220 | - | - | - | - |
| 0x0069 | Rotor: dauerhafte Blockierung | 0/1 | High | 0x0280 | - | - | - | - |
| 0x006A | Kommunikationsfehler: Prüfsummer | 0/1 | High | 0x0402 | - | - | - | - |
| 0x006B | Sicherheitskonzept: Funktionsüberwachung | 0/1 | High | 0x8004 | - | - | - | - |
| 0x006C | TemporäreFehler-Rotorblockierung | 0/1 | High | 0x0101 | - | - | - | - |
| 0x006D | TemporäreFehler-Übertemperatur | 0/1 | High | 0x0102 | - | - | - | - |
| 0x006E | TemporäreFehler-Untertemperatur | 0/1 | High | 0x0104 | - | - | - | - |
| 0x006F | TemporäreFehler-Unterspannung | 0/1 | High | 0x0110 | - | - | - | - |
| 0x0070 | TemporäreFehler-Überdrehzahl | 0/1 | High | 0x0120 | - | - | - | - |
| 0x0071 | Sicherheitskonzept: CRC-Checksumme: BP-Vorgabe | 0/1 | High | 0x8001 | - | - | - | - |
| 0x0072 | PermanenteFehler-Überstromfehler | 0/1 | High | 0x0208 | - | - | - | - |
| 0x0073 | Rotorlagesensor: permanent defekt | 0/1 | High | 0x0240 | - | - | - | - |
| 0x0074 | Kommunikationsfehler: Botschaftszähler | 0/1 | High | 0x0401 | - | - | - | - |
| 0x0075 | Sicherheitskonzept: Datenkonsistenz | 0/1 | High | 0x8002 | - | - | - | - |
| 0x0076 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x0077 | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x0078 | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x0079 | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x007A | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x007B | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x007C | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x007D | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x007E | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x007F | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x0080 | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0081 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x0082 | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x0083 | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x0084 | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x0085 | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x0086 | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x0087 | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x0088 | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x0089 | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x008A | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x008B | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x008C | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x008D | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x008E | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x008F | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x0090 | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x0091 | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x0092 | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x0093 | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x0094 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x0095 | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x0096 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x0097 | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x0098 | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x0099 | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x009A | Kupplung D geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x08 | - | - | - | - |
| 0x009B | Kupplung B geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x02 | - | - | - | - |
| 0x009C | Kupplung A geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x01 | - | - | - | - |
| 0x009D | Kupplung E geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x10 | - | - | - | - |
| 0x009E | Kupplung C geschaltet EDS-Logik R-Gangerkennung | 0/1 | High | 0x04 | - | - | - | - |
| 0x009F | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x00A0 | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x00A1 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00A2 | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00A3 | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x00A4 | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x00A5 | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x00A6 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x00A7 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x00A8 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00A9 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x00AA | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x00AB | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x00AC | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00AD | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x00AE | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x00AF | Status Anhänger | 0/1 | High | 0x01 | - | - | - | - |
| 0x00B0 | Klemmen | 0/1 | High | 0x04 | - | - | - | - |
| 0x00B1 | Status Türsensoren Abgesichert | 0/1 | High | 0x10 | - | - | - | - |
| 0x00B2 | Status Kontakt Handbremse | 0/1 | High | 0x40 | - | - | - | - |
| 0x00B3 | ZV und Klappenzustand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00B4 | Status Gurt Kontakt Sitzbelegung | 0/1 | High | 0x02 | - | - | - | - |
| 0x00B5 | Drehmoment Kurbelwelle 1 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00B6 | Bedienung Schaltpaddel | 0/1 | High | 0x20 | - | - | - | - |
| 0x00B7 | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00B8 | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00B9 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x00BA | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x00BB | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x00BC | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x00BD | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00BE | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x00BF | Drehmoment Kurbelwelle 3 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00C0 | Drehmoment Kurbelwelle 2 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00C1 | Radmoment Antrieb 3 | 0/1 | High | 0x80 | - | - | - | - |
| 0x00C2 | Daten Antriebsstrang 1 | 0/1 | High | 0x02 | - | - | - | - |
| 0x00C3 | Status Motor Start Auto | 0/1 | High | 0x10 | - | - | - | - |
| 0x00C4 | Radmoment Antrieb 1 | 0/1 | High | 0x40 | - | - | - | - |
| 0x00C5 | Winkel Fahrpedal | 0/1 | High | 0x08 | - | - | - | - |
| 0x00C6 | Daten Antriebsstrang 2 | 0/1 | High | 0x04 | - | - | - | - |
| 0x00C7 | Positionssignal | 0/1 | High | 0x02 | - | - | - | - |
| 0x00C8 | Bremssignal | 0/1 | High | 0x04 | - | - | - | - |
| 0x00C9 | Modussignal | 0/1 | High | 0x01 | - | - | - | - |
| 0x00CA | Kommunikationsstatus IEP Chksum | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00CB | Kommunikationsstatus IEP NotReceived | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00CC | Kommunikationsstatus IEP Timeout | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00CD | Kommunikationsstatus IEP LINBus | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00CE | Kommunikationsstatus IEP AliveCnt | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00CF | Kommunikationsstatus IEP BusOff | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00D0 | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x00D1 | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x00D2 | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x00D3 | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00D4 | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x00D5 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x00D6 | Diagnose OBD Motor | 0/1 | High | 0x08 | - | - | - | - |
| 0x00D7 | Kilometerstand/Reichweite | 0/1 | High | 0x01 | - | - | - | - |
| 0x00D8 | Fahrzeugzustand | 0/1 | High | 0x10 | - | - | - | - |
| 0x00D9 | Navigation System Information | 0/1 | High | 0x02 | - | - | - | - |
| 0x00DA | Übereinstimmung Navigationsgraph | 0/1 | High | 0x04 | - | - | - | - |
| 0x00DB | Status Gangwahlschalter Bus1 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00DC | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x00DD | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x00DE | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00DF | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x00E0 | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x00E1 | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x00E2 | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x00E3 | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x00E4 | Status Stabilisierung DSC | 0/1 | High | 0x04 | - | - | - | - |
| 0x00E5 | Längsbeschleunigung Schwerpunkt | 0/1 | High | 0x10 | - | - | - | - |
| 0x00E6 | Giergeschwindigkeit Fahrzeug | 0/1 | High | 0x80 | - | - | - | - |
| 0x00E7 | Konfiguration Schalter Fahrdynamik | 0/1 | High | 0x20 | - | - | - | - |
| 0x00E8 | Neigung Fahrbahn | 0/1 | High | 0x02 | - | - | - | - |
| 0x00E9 | Ist Bremsmoment Summe | 0/1 | High | 0x08 | - | - | - | - |
| 0x00EA | Daten Antriebsstrang 4 | 0/1 | High | 0x01 | - | - | - | - |
| 0x00EB | Geschwindigkeit Fahrzeug | 0/1 | High | 0x40 | - | - | - | - |
| 0x00EC | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x00ED | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x00EE | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x00EF | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00F0 | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x00F1 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x00F2 | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x00F3 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00F4 | Außentemperatur | 0/1 | High | 0x80 | - | - | - | - |
| 0x00F5 | Status Fahrzeugstillstand Parkbremse | 0/1 | High | 0x10 | - | - | - | - |
| 0x00F6 | Status Gangwahlschalter Bus0 | 0/1 | High | 0x20 | - | - | - | - |
| 0x00F7 | Lenkwinkel Vorderachse Effektiv | 0/1 | High | 0x02 | - | - | - | - |
| 0x00F8 | Ist Drehzahl Rad ungesichert | 0/1 | High | 0x04 | - | - | - | - |
| 0x00F9 | Masse/Gewicht Fahrzeug | 0/1 | High | 0x01 | - | - | - | - |
| 0x00FA | Status Fahrzeugstillstand | 0/1 | High | 0x08 | - | - | - | - |
| 0x00FB | Relativzeit | 0/1 | High | 0x40 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x6000 | Getriebeöltemperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6001 | Batteriespannung | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x6002 | Kilometerstand | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x6003 | Systemzeit | s | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6004 | Versorgungsspannung Sensor | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x6005 | Chip1 - Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | Spannung der elektrischen Drucksteuerventile und Magnetventile | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x6007 | Fahrpedalwinkel | % | High | unsigned char | - | 39.21 | 100.0 | 0.0 |
| 0x6008 | Abbtriebsdrehzahl | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x6009 | Turbinendrehzahl | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x600A | Motordrehzahl | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x600B | Motor-Istmoment | Nm | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x600C | Aktueller Gang | 0-n | High | 0xFF | UWB_TAB_600C | - | - | - |
| 0x600D | Aktive Maßnahmen Byte 1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x600E | Aktive Maßnahmen Byte 2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x600F | Aktive Maßnahmen Byte 3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6010 | Aktive Maßnahmen Byte 4 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6011 | Aktive Maßnahmen Byte 5 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6012 | Aktive Maßnahmen Byte 6 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6013 | Aktive Maßnahmen Byte 7 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6014 | Aktive Maßnahmen Byte 8 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6015 | Fehlermerker EEPROM Prüfung | 0-n | High | 0xFF | UWB_TAB_6015 | - | - | - |
| 0x6016 | Zustand Parken-Wohnen-Fahren | 0-n | High | 0xFF | UWB_TAB_PWF | - | - | - |
| 0x6017 | Zeit seit Reset / Klemme 15 ein | ms | High | unsigned char | - | 30.0 | 1.0 | 0.0 |
| 0x6018 | Diskrete Eingänge | 0-n | High | 0xF0 | UWB_TAB_6018 | - | - | - |
| 0x6019 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x601A | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x601B | Signalstatus für CAN-Botschaften von DME | 0-n | High | 0xF0 | UWB_TAB_601B | - | - | - |
| 0x601C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x601D | Chip2-Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x601E | Wandlertemperatur | °C | High | unsigned char | - | 2.0 | 1.0 | -40.0 |
| 0x601F | angeforderter Motoreingriff der EGS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6020 | Signalstatus für CAN-Botschaften von FEM / CAS | 0-n | High | 0xFF | UWB_TAB_6020 | - | - | - |
| 0x6021 | Raddrehzahl vorn links | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6022 | Raddrehzahl vorn rechts | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6023 | Raddrehzahl hinten links | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6024 | Raddrehzahl hinten rechts | rad/s | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6025 | Vorgabe der HAS Ablaufvariante durch die HST | 0-n | High | 0x0F | UWB_TAB_6025 | - | - | - |
| 0x6026 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6027 | Vorgabe Solldrehzahl an die Elektromaschine | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x6028 | Istmoment Elektromaschine mit Getriebeeingriff | Nm | High | unsigned char | - | 4.0 | 1.0 | -500.0 |
| 0x6029 | Maximal zulässiges Motordrehmoment für Hybrid-Antriebsstrang | Nm | High | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x602A | Istmoment K0 | Nm | High | unsigned char | - | 4.0 | 1.0 | -100.0 |
| 0x602B | Istzustand K0 | 0-n | High | 0x0F | UWB_TAB_602B | - | - | - |
| 0x602C | Physikalischer Zustand integriertes Anfahrelement | 0-n | High | 0x0F | UWB_TAB_602C | - | - | - |
| 0x602D | Istzustand integrierte elektrische Pumpe | 0-n | High | 0x0F | UWB_TAB_602D | - | - | - |
| 0x602E | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x602F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6030 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6031 | Motormoment | Nm | High | unsigned int | - | 4.0 | 1.0 | -100.0 |
| 0x6032 | Sollstrom OUT0 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6033 | Sollstrom OUT1 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6034 | Sollstrom OUT2 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6035 | Sollstrom OUT3 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6036 | Sollstrom OUT4 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6037 | Sollstrom OUT5 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6038 | Sollstrom OUT6 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x6039 | Sollstrom OUT7 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x603C | Sollstrom OUT10 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x603D | Sollstrom OUT11 | mA | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x603E | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x603F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6040 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6041 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6042 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6043 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6044 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6045 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6046 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6047 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x604E | Maximal zulässiges Motordrehmoment | - | High | unsigned char | - | 8.0 | 1.0 | -400.0 |
| 0x604F | Status Antrieb | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6050 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6051 | IEP Betriebspunkt BP-Rückmeldung | 0-n | High | 0xFF | UWB_TAB_6051 | - | - | - |
| 0x6052 | integrierte elektrische Pumpe: Drehzahl | 1/min | High | unsigned char | - | 1.0 | 32.0 | 0.0 |
| 0x6053 | integrierte elektrische Pumpe: Summenstrom | mA | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x6054 | integrierte elektrische Pumpe: Spannung Klemme 30 | mV | High | unsigned char | - | 1.0 | 100.0 | 0.0 |
| 0x6055 | IEP Betriebspunkt BP-Vorgabe | 0-n | High | 0xFF | UWB_TAB_6051 | - | - | - |
| 0x6056 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6057 | integrierte elektrische Pumpe: Temperatur | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6058 | integrierte elektrische Pumpe: Identifikationsnummer als Hex-Wert | HEX | High | unsigned char | - | - | - | - |
| 0x6059 | Motordrehzahl Verbrennungsmotor | 1/min | High | unsigned char | - | 32.0 | 1.0 | 0.0 |
| 0x605A | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6060 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6061 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6062 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6063 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6064 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6065 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6066 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6067 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6068 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6069 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6078 | Betriebsart Elektromaschine | 0-n | High | 0xFF | TAB_UWB_6078_EM_BETRIEBSART | - | - | - |
| 0x6079 | Virtuelle Turbinendrehzahl | - | High | unsigned char | - | 16.0 | 1.0 | 0.0 |
| 0x6080 | Zurückgelegte Kilometer aus Getriebe Antrieb berechnet | km | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6081 | Betriebszeit der EGS ohne Standby-Zeit | min | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x6082 | Motoreingriff Fehlerart | 0-n | High | 0xFF | UW_TAB_6081 | - | - | - |
| 0x6083 | Motoreingriff Fehlerart 1 | 0-n | High | 0xFF | UW_TAB_6081 | - | - | - |
| 0x6090 | Anzahl der ausgeführten Standadaptionen | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6091 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6092 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x6093 | Abtriebsdrehzahl zweiter Mikroprozessor | 1/min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x6094 | Abtriebsdrehzahldifferenz zweiter Mikroprozessor | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x6095 | Abtriebsdrehzahlstatus zweiter Mikroprozessor | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6100 | Aktive Maßnahmen Byte 9 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6101 | Aktive Maßnahmen Byte 10 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6102 | Aktive Maßnahmen Byte 11 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6103 | Aktive Maßnahmen Byte 12 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6120 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x61F5 | Trennkupplung Elektromaschine Temperatur | °C | High | signed int | - | 1.0 | 1.0 | -40.0 |
| 0x61F6 | integriertes Anfahrelement: Temperatur | °C | High | signed int | - | 1.0 | 1.0 | -40.0 |
| 0x61F7 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x61F8 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x61F9 | Iststrom Kühlung integriertes Anfahrelement | 1/min | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x61FA | Fülldruck K0 | mbar | High | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x61FB | Zähler Fülldruck K0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x61FC | Schnellfüllzeit K0 | ms | High | signed char | - | 2.0 | 1.0 | 0.0 |
| 0x61FD | Zähler Schnellfüllzeit K0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x61FE | IAE Anlegepunkt Adaptions-Speicher 0 | mbar | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x61FF | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x6200 | Signalwechsel Filterzaehler Kupplung A | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6201 | Signalwechsel Filterzaehler Kupplung B | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6202 | Signalwechsel Filterzaehler Kupplung C | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6203 | Signalwechsel Filterzaehler Kupplung D | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6204 | Signalwechsel Filterzaehler Kupplung E | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6210 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x63EA | Getriebesollposition | 0-n | High | 0xFF | UWB_TAB_63EA | - | - | - |
| 0x63EB | Im Puffer abgelegte Getriebesollposition | 0-n | High | 0xFF | UWB_TAB_63EA | - | - | - |
| 0x63EC | im Puffer abgelegte Fahrtrichtung | 0-n | High | 0xFF | UWB_TAB_63EC | - | - | - |
| 0x63ED | Zwischengröße der Anzeigepositionen P,R,N,D | 0-n | High | 0xFF | UWB_TAB_63EA | - | - | - |
| 0x63EE | Fahrgeschwindigkeit | - | High | unsigned int | - | 1.0 | 16.0 | 0.0 |
| 0x63EF | Im Puffer abgelegter Merker für mechanischen Notlauf | 0-n | High | 0xFF | UWB_TAB_63EF | - | - | - |
| 0x63F0 | Zustand Parksperre | 0-n | High | 0xFF | UWB_TAB_63F0 | - | - | - |
| 0x63F1 | Status Parksperre | 0-n | High | 0xFF | UWB_TAB_63F1 | - | - | - |
| 0x63F2 | Statusmerker Parkbremse | 0-n | High | 0xFF | UWB_TAB_63F2 | - | - | - |
| 0x63F3 | Zustand Überhitzungsschutz | 0-n | High | 0xFF | UWB_TAB_63F3 | - | - | - |
| 0x63F4 | Automatisches Einlegen der Parksperre, wenn Fahrer das Fahrzeug verlässt und das Getriebe in Position R oder D steht | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F5 | Automatisches Einlegen der Parksperre von EMF angefordert | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F6 | Modus elektrische Getriebenotentriegelung abgeschlossen, Position P erfolgreich ausgelegt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F7 | Modus elektrische Getriebenotentriegelung abgeschlossen, Position P nicht erfolgreich ausgelegt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F8 | Position N durch elektrische Getriebenotentriegelung und Fahrgeschwindigkeit größer Schwellenwert eingelegt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63F9 | Zustand verschiedener EWS6 Systeme | 0-n | High | 0xFF | UWB_TAB_63F9 | - | - | - |
| 0x63FA | Status verschiedener Eingangsgrößen für automatisches Einlegen der Parksperre | 0-n | High | 0xFF | UWB_TAB_63FA | - | - | - |
| 0x63FB | N-Haltephase_angefordert | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FC | Anzahl Fahrzeug verlassen bei geschlossenem Sicherheitsgurt | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FD | Fehlerursache Anzeige Bedien Konzept Ebene 2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FE | Zähler für Diagnose in N Gegenbremsbetrieb | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x63FF | Zähler für Diagnose in P | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6400 | Zaehler AutoN für das Verlassen des Fzg | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x65DF | Überhitzungsschutz: Steuergeräteinnentemperatur (LM71) | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65E0 | Überhitzungsschutz: Steuergeräteinnentemperatur (CG130) | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65E1 | Überhitzungsschutz: Status der Sensoren | 0-n | High | 0xFF | UWB_TAB_65E1 | - | - | - |
| 0x65E2 | Schwellenwert für Überhitzungsschutz | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x65E3 | Ausnahmenummer | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x65E4 | Bitfeld für Lesespeicher Prüfsummenfehler | 0-n | High | 0xFFFF | UWB_TAB_65E4 | - | - | - |
| 0x65E5 | Unterspannungsreset: Parameter des Exception Handlers bzgl. Adressinformationen | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x65E6 | Hardwareüberwachungseinheit: Umweltbedingungen 1 | 0-n | High | 0xFFFF | UWB_TAB_65E6 | - | - | - |
| 0x65E7 | Hardwareüberwachungseinheit: Umweltbedingungen 2 | 0-n | High | 0xFFFF | UWB_TAB_65E7 | - | - | - |
| 0x65E8 | Mikrokontrollerkomponenten: Umweltbedingung 1 | 0-n | High | 0xFF | UWB_TAB_65E8 | - | - | - |
| 0x65E9 | Mikrokontrollerkomponenten: Umweltbedingung 2 | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ISOSAEReserved_00 |
| 1 | defaultSession |
| 2 | programmingSession |
| 3 | extendedDiagnosticSession |
| 4 | safetySystemDiagnosticSession |
| 64 | vehicleManufacturerSpecific_40 |
| 65 | codingSession |
| 66 | SWTSession |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID1_CC | - | - | - | Gibt für die ersten 32 CAN-Botschaften des ersten CAN-Bus an, ob Sie gelernt wurden |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID2_CC | - | - | - | Gibt für die zweiten 32 CAN-Botschaften des ersten CAN-Bus an, ob Sie gelernt wurden |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID3_CC | - | - | - | Gibt für die ersten 32 CAN-Botschaften des zweiten CAN-Bus an, ob Sie gelernt wurden |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID4_CC | - | - | - | Gibt für die zweiten 32 CAN-Botschaften des zweiten CAN-Bus an, ob Sie gelernt wurden |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID1_CC | - | - | - | Gibt für die ersten 32 CAN-Botschaften des ersten CAN-Bus an, ob Sie gelernt wurden |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID2_CC | - | - | - | Gibt für die zweiten 32 CAN-Botschaften des ersten CAN-Bus an, ob Sie gelernt wurden |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID3_CC | - | - | - | Gibt für die ersten 32 CAN-Botschaften des zweiten CAN-Bus an, ob Sie gelernt wurden |
| - | Bit | high | BITFIELD | - | BF_CAN_LEARN_ID4_CC | - | - | - | Gibt für die zweiten 32 CAN-Botschaften des zweiten CAN-Bus an, ob Sie gelernt wurden |

### RES_0X4110_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT25_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT26_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT27_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT28_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT29_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT30_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT31_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT32_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT33_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT34_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT35_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT36_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT37_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT38_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT39_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT40_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT41_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT42_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT43_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT44_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT45_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT46_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT47_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT48_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT49_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT50_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT51_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT52_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT53_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT54_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT55_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT56_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT57_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT58_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT59_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT60_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT61_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT62_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT63_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT64_GLS_KF1_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |

### RES_0X4111_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT25_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT26_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT27_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT28_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT29_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT30_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT31_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT32_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT33_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT34_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT35_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT36_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT37_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT38_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT39_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT40_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT41_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT42_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT43_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT44_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT45_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT46_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT47_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT48_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT49_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT50_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT51_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT52_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT53_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT54_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT55_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT56_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT57_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT58_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT59_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT60_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT61_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT62_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT63_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT64_GLS_KF1_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |

### RES_0X4112_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT25_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT26_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT27_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT28_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT29_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT30_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT31_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT32_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT33_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT34_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT35_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT36_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT37_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT38_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT39_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT40_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT41_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT42_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT43_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT44_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT45_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT46_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT47_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT48_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT49_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT50_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT51_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT52_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT53_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT54_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT55_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT56_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT57_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT58_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT59_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT60_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT61_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT62_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT63_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT64_GLS_KF1_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |

### RES_0X4113_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT2_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT3_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT4_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT5_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT6_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT7_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT8_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT9_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT10_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT11_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT12_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT13_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT14_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT15_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT16_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT17_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT18_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT19_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT20_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT21_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT22_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT23_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT24_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT25_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT26_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT27_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT28_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT29_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT30_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT31_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT32_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT33_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT34_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT35_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT36_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT37_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT38_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT39_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT40_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT41_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT42_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT43_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT44_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT45_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT46_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT47_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT48_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT49_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT50_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT51_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT52_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT53_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT54_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT55_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT56_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT57_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT58_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT59_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT60_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT61_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT62_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT63_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT64_GLS_KF1_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |

### RES_0X4114_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT25_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT26_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT27_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT28_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT29_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT30_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT31_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT32_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT33_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT34_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT35_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT36_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT37_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT38_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT39_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT40_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT41_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT42_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT43_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT44_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT45_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT46_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT47_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT48_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT49_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT50_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT51_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT52_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT53_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT54_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT55_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT56_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT57_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT58_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT59_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT60_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT61_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT62_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT63_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT64_GLS_KF1_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |

### RES_0X4115_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT25_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT26_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT27_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT28_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT29_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT30_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT31_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT32_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT33_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT34_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT35_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT36_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT37_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT38_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT39_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT40_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT41_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT42_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT43_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT44_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT45_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT46_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT47_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT48_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT49_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT50_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT51_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT52_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT53_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT54_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT55_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT56_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT57_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT58_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT59_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT60_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT61_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT62_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT63_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT64_GLS_KF1_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |

### RES_0X4116_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT25_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT26_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT27_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT28_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT29_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT30_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT31_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT32_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT33_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT34_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT35_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT36_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT37_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT38_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT39_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT40_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT41_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT42_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT43_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT44_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT45_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT46_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT47_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT48_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT49_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT50_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT51_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT52_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT53_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT54_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT55_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT56_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT57_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT58_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT59_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT60_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT61_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT62_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT63_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT64_GLS_KF1_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |

### RES_0X411D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT25_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT26_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT27_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT28_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT29_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT30_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT31_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT32_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT33_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT34_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT35_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT36_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT37_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT38_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT39_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT40_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT41_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT42_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT43_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT44_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT45_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT46_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT47_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT48_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT49_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT50_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT51_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT52_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT53_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT54_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT55_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT56_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT57_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT58_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT59_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT60_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT61_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT62_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT63_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT64_GLS_KF1_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |

### RES_0X411E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT25_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT26_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT27_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT28_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT29_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT30_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT31_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT32_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT33_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT34_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT35_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT36_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT37_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT38_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT39_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT40_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT41_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT42_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT43_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT44_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT45_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT46_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT47_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT48_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT49_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT50_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT51_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT52_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT53_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT54_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT55_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT56_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT57_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT58_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT59_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT60_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT61_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT62_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT63_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT64_GLS_KF1_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |

### RES_0X411F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT25_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT26_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT27_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT28_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT29_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT30_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT31_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT32_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT33_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT34_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT35_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT36_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT37_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT38_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT39_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT40_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT41_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT42_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT43_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT44_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT45_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT46_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT47_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT48_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT49_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT50_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT51_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT52_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT53_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT54_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT55_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT56_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT57_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT58_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT59_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT60_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT61_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT62_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT63_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT64_GLS_KF1_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |

### RES_0X4120_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT25_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT26_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT27_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT28_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT29_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT30_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT31_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT32_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT33_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT34_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT35_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT36_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT37_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT38_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT39_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT40_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT41_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT42_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT43_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT44_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT45_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT46_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT47_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT48_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT49_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT50_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT51_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT52_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT53_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT54_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT55_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT56_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT57_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT58_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT59_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT60_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT61_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT62_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT63_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT64_GLS_KF1_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |

### RES_0X4121_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT25_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT26_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT27_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT28_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT29_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT30_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT31_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT32_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT33_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT34_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT35_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT36_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT37_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT38_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT39_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT40_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT41_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT42_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT43_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT44_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT45_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT46_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT47_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT48_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT49_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT50_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT51_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT52_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT53_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT54_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT55_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT56_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT57_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT58_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT59_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT60_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT61_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT62_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT63_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT64_GLS_KF1_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |

### RES_0X4122_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT25_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT26_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT27_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT28_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT29_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT30_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT31_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT32_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT33_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT34_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT35_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT36_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT37_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT38_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT39_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT40_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT41_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT42_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT43_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT44_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT45_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT46_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT47_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT48_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT49_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT50_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT51_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT52_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT53_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT54_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT55_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT56_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT57_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT58_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT59_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT60_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT61_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT62_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT63_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT64_GLS_KF1_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |

### RES_0X4123_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT25_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT26_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT27_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT28_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT29_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT30_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT31_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT32_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT33_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT34_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT35_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT36_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT37_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT38_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT39_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT40_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT41_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT42_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT43_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT44_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT45_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT46_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT47_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT48_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT49_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT50_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT51_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT52_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT53_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT54_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT55_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT56_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT57_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT58_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT59_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT60_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT61_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT62_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT63_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT64_GLS_KF1_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |

### RES_0X4124_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT25_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT26_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT27_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT28_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT29_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT30_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT31_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT32_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT33_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT34_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT35_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT36_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT37_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT38_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT39_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT40_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT41_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT42_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT43_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT44_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT45_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT46_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT47_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT48_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT49_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT50_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT51_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT52_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT53_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT54_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT55_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT56_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT57_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT58_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT59_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT60_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT61_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT62_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT63_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |
| STAT_ADAPTIONSWERT64_GLS_KF1_3_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 3-1 |

### RES_0X4125_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT25_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT26_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT27_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT28_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT29_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT30_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT31_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT32_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT33_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT34_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT35_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT36_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT37_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT38_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT39_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT40_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT41_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT42_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT43_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT44_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT45_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT46_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT47_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT48_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT49_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT50_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT51_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT52_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT53_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT54_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT55_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT56_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT57_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT58_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT59_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT60_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT61_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT62_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT63_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |
| STAT_ADAPTIONSWERT64_GLS_KF1_4_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 4-2 |

### RES_0X4126_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT25_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT26_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT27_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT28_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT29_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT30_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT31_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT32_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT33_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT34_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT35_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT36_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT37_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT38_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT39_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT40_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT41_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT42_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT43_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT44_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT45_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT46_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT47_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT48_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT49_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT50_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT51_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT52_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT53_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT54_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT55_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT56_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT57_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT58_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT59_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT60_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT61_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT62_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT63_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |
| STAT_ADAPTIONSWERT64_GLS_KF1_5_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 5-3 |

### RES_0X4127_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT25_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT26_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT27_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT28_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT29_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT30_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT31_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT32_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT33_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT34_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT35_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT36_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT37_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT38_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT39_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT40_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT41_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT42_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT43_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT44_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT45_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT46_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT47_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT48_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT49_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT50_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT51_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT52_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT53_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT54_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT55_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT56_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT57_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT58_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT59_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT60_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT61_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT62_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT63_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |
| STAT_ADAPTIONSWERT64_GLS_KF1_6_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 6-4 |

### RES_0X4128_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT25_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT26_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT27_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT28_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT29_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT30_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT31_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT32_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT33_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT34_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT35_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT36_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT37_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT38_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT39_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT40_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT41_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT42_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT43_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT44_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT45_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT46_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT47_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT48_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT49_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT50_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT51_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT52_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT53_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT54_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT55_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT56_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT57_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT58_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT59_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT60_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT61_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT62_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT63_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |
| STAT_ADAPTIONSWERT64_GLS_KF1_7_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 7-5 |

### RES_0X4129_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT25_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT26_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT27_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT28_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT29_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT30_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT31_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT32_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT33_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT34_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT35_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT36_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT37_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT38_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT39_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT40_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT41_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT42_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT43_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT44_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT45_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT46_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT47_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT48_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT49_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT50_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT51_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT52_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT53_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT54_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT55_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT56_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT57_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT58_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT59_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT60_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT61_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT62_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT63_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |
| STAT_ADAPTIONSWERT64_GLS_KF1_8_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Doppelrückschaltung 8-6 |

### RES_0X412A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_5_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 5-1 |

### RES_0X412B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT2_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT3_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT4_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT5_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT6_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT7_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT8_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT9_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT10_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT11_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT12_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT13_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT14_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT15_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT16_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT17_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT18_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT19_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT20_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT21_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT22_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT23_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |
| STAT_ADAPTIONSWERT24_GLS_KF1_6_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 6-3 |

### RES_0X412C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT2_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT3_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT4_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT5_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT6_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT7_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT8_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT9_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT10_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT11_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT12_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT13_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT14_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT15_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT16_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT17_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT18_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT19_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT20_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT21_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT22_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT23_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |
| STAT_ADAPTIONSWERT24_GLS_KF1_7_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 7-1 |

### RES_0X412D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-2 |

### RES_0X412E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT2_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT3_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT4_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT5_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT6_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT7_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT8_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT9_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT10_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT11_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT12_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT13_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT14_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT15_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT16_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT17_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT18_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT19_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT20_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT21_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT22_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT23_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |
| STAT_ADAPTIONSWERT24_GLS_KF1_8_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Mehrfachrückschaltung 8-4 |

### RES_0X412F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GE_N_D1_WERT | mbar | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Adaptionswerte Gang einlegen D1 |
| STAT_ADAPTIONSWERTE_GE_N_D2_WERT | mbar | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Adaptionswerte Gang einlegen D2 |
| STAT_ADAPTIONSWERTE_GE_N_R_WERT | mbar | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen der Adaptionswerte Gang einlegen R |

### RES_0X4130_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_A_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung A |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_B_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung B |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_C_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung C |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_D_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung D |
| STAT_ADAPTIONSWERTE_KSFCTR_KUPPLUNG_E_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Schnellfüllungsadaption von Kupplung E |

### RES_0X4131_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_A_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung A |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_B_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung B |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_C_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung C |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_D_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung D |
| STAT_ADAPTIONSWERTE_KPFCTR_KUPPLUNG_E_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der kupplungsbezogenen Fülldruckadaption von Kupplung E |

### RES_0X4133_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_1_2_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_2_3_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_3_4_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_4_5_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_5_6_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_6_7_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF1_7_8_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 7-8 |

### RES_0X4134_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_2_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_3_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_4_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_5_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_6_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_7_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_3_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 3-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_4_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 4-2 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_5_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 5-3 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_6_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 6-4 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_7_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 7-5 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-6 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_5_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 5-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF21_6_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 6-3 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_7_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 7-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-2 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF1_8_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-4 |

### RES_0X4136_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_1_2_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_2_3_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_3_4_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_4_5_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_5_6_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_6_7_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF2_7_8_WERT | - | high | unsigned int | - | - | - | - | - | Zähler der Hochschaltung 7-8 |

### RES_0X4137_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_2_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_3_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_4_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_5_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_6_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_7_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_3_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 3-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_4_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 4-2 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_5_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 5-3 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_6_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 6-4 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_7_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 7-5 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-6 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_5_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 5-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_6_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 6-3 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_7_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 7-1 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-2 |
| STAT_ADAPTIONSWERTE_GLSRSCTRKF2_8_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Rückschaltung 8-4 |

### RES_0X413A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_A_WERT | mbar | high | signed int | - | - | - | - | - | Adaption Kupplung A |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_B_WERT | mbar | high | signed int | - | - | - | - | - | Adaption Kupplung B |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_C_WERT | mbar | high | signed int | - | - | - | - | - | Adaption Kupplung C |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_D_WERT | mbar | high | signed int | - | - | - | - | - | Adaption Kupplung D |
| STAT_ADAPTIONSWERTE_KPF_KUPPLUNG_E_WERT | mbar | high | signed int | - | - | - | - | - | Adaption Kupplung E |

### RES_0X4140_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_A_WERT | ms | high | signed int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung A |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_B_WERT | ms | high | signed int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung B |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_C_WERT | ms | high | signed int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung C |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_D_WERT | ms | high | signed int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung D |
| STAT_ADAPTIONSWERTE_KSF_KUPPLUNG_E_WERT | ms | high | signed int | - | - | - | - | - | Schnellfüllzeit Adaption Kupplung E |

### RES_0X4143_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_BFLGLSHS_1_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 1-2 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_2_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 2-3 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_3_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 3-4 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_4_5_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 4-5 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_5_6_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 5-6 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_6_7_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 6-7 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_7_8_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 7-8 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_2_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 2-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_5_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_6_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_7_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-7 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_5_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_6_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-4 |

### RES_0X4144_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_BFLGLSHS_1_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 1-2 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_2_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 2-3 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_3_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 3-4 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_4_5_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 4-5 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_5_6_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 5-6 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_6_7_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 6-7 |
| STAT_ADAPTIONSWERTE_BFLGLSHS_7_8_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Hochschaltung 7-8 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_2_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 2-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_5_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_6_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_7_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-7 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_3_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 3-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_4_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 4-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-4 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_5_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-5 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_6_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-6 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_5_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 5-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_6_3_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 6-3 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_7_1_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 7-1 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_2_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-2 |
| STAT_ADAPTIONSWERTE_BFLGLSRS_8_4_WERT | mbar | high | signed int | - | - | - | - | - | Beeinflussungsadaption der GLS Rückschaltung 8-4 |

### RES_0X4145_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_LCCFP_I_F_ADA_WERT | - | high | signed int | - | - | - | - | - | Auslesen der LCC-Fußpunktsadaption |
| STAT_ADAPTIONSWERTE_LCCFP_GWK_AKTIV_WERT | - | high | unsigned int | - | - | - | - | - | Auslesen der LCC-Fußpunktsadaption |
| STAT_ADAPTIONSWERTE_LCCFP_BEWERTUNG_WERT | - | high | unsigned int | - | - | - | - | - | Auslesen der LCC-Fußpunktsadaption |

### RES_0X415F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GANG_EINLEGE_ADAPTION_CTR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für 1. Gang |
| STAT_GANG_EINLEGE_ADAPTION_CTR_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für 2. Gang |
| STAT_GANG_EINLEGE_ADAPTION_CTR_R_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler für R- Gang |

### RES_0X4160_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT2_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT3_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT4_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT5_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT6_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT7_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT8_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT9_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT10_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT11_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT12_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT13_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT14_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT15_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT16_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT17_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT18_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT19_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT20_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT21_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT22_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT23_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT24_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT25_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT26_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT27_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT28_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT29_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT30_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT31_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT32_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT33_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT34_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT35_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT36_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT37_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT38_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT39_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT40_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT41_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT42_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT43_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT44_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT45_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT46_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT47_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT48_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT49_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT50_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT51_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT52_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT53_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT54_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT55_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT56_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT57_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT58_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT59_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT60_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT61_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT62_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT63_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |
| STAT_ADAPTIONSWERT64_GLS_KF2_1_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 1-2 |

### RES_0X4161_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT2_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT3_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT4_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT5_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT6_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT7_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT8_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT9_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT10_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT11_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT12_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT13_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT14_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT15_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT16_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT17_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT18_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT19_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT20_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT21_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT22_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT23_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT24_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT25_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT26_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT27_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT28_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT29_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT30_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT31_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT32_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT33_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT34_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT35_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT36_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT37_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT38_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT39_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT40_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT41_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT42_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT43_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT44_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT45_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT46_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT47_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT48_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT49_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT50_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT51_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT52_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT53_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT54_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT55_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT56_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT57_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT58_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT59_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT60_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT61_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT62_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT63_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |
| STAT_ADAPTIONSWERT64_GLS_KF2_2_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 2-3 |

### RES_0X4162_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT2_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT3_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT4_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT5_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT6_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT7_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT8_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT9_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT10_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT11_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT12_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT13_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT14_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT15_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT16_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT17_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT18_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT19_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT20_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT21_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT22_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT23_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT24_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT25_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT26_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT27_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT28_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT29_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT30_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT31_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT32_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT33_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT34_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT35_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT36_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT37_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT38_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT39_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT40_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT41_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT42_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT43_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT44_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT45_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT46_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT47_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT48_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT49_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT50_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT51_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT52_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT53_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT54_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT55_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT56_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT57_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT58_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT59_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT60_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT61_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT62_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT63_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |
| STAT_ADAPTIONSWERT64_GLS_KF2_3_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 3-4 |

### RES_0X4163_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT2_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT3_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT4_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT5_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT6_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT7_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT8_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT9_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT10_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT11_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT12_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT13_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT14_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT15_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT16_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT17_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT18_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT19_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT20_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT21_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT22_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT23_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT24_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT25_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT26_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT27_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT28_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT29_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT30_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT31_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT32_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT33_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT34_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT35_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT36_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT37_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT38_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT39_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT40_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT41_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT42_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT43_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT44_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT45_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT46_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT47_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT48_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT49_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT50_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT51_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT52_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT53_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT54_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT55_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT56_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT57_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT58_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT59_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT60_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT61_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT62_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT63_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |
| STAT_ADAPTIONSWERT64_GLS_KF2_4_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 4-5 |

### RES_0X4164_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT2_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT3_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT4_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT5_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT6_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT7_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT8_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT9_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT10_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT11_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT12_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT13_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT14_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT15_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT16_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT17_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT18_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT19_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT20_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT21_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT22_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT23_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT24_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT25_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT26_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT27_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT28_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT29_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT30_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT31_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT32_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT33_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT34_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT35_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT36_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT37_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT38_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT39_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT40_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT41_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT42_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT43_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT44_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT45_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT46_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT47_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT48_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT49_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT50_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT51_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT52_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT53_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT54_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT55_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT56_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT57_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT58_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT59_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT60_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT61_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT62_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT63_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |
| STAT_ADAPTIONSWERT64_GLS_KF2_5_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 5-6 |

### RES_0X4165_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT2_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT3_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT4_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT5_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT6_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT7_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT8_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT9_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT10_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT11_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT12_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT13_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT14_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT15_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT16_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT17_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT18_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT19_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT20_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT21_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT22_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT23_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT24_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT25_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT26_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT27_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT28_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT29_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT30_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT31_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT32_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT33_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT34_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT35_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT36_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT37_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT38_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT39_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT40_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT41_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT42_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT43_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT44_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT45_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT46_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT47_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT48_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT49_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT50_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT51_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT52_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT53_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT54_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT55_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT56_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT57_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT58_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT59_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT60_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT61_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT62_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT63_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |
| STAT_ADAPTIONSWERT64_GLS_KF2_6_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 6-7 |

### RES_0X4166_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT2_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT3_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT4_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT5_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT6_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT7_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT8_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT9_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT10_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT11_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT12_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT13_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT14_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT15_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT16_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT17_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT18_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT19_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT20_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT21_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT22_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT23_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT24_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT25_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT26_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT27_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT28_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT29_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT30_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT31_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT32_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT33_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT34_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT35_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT36_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT37_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT38_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT39_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT40_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT41_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT42_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT43_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT44_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT45_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT46_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT47_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT48_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT49_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT50_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT51_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT52_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT53_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT54_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT55_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT56_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT57_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT58_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT59_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT60_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT61_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT62_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT63_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |
| STAT_ADAPTIONSWERT64_GLS_KF2_7_8_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Hochschaltung 7-8 |

### RES_0X416D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT2_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT3_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT4_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT5_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT6_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT7_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT8_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT9_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT10_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT11_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT12_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT13_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT14_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT15_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT16_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT17_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT18_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT19_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT20_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT21_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT22_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT23_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT24_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT25_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT26_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT27_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT28_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT29_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT30_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT31_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT32_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT33_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT34_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT35_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT36_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT37_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT38_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT39_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT40_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT41_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT42_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT43_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT44_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT45_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT46_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT47_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT48_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT49_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT50_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT51_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT52_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT53_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT54_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT55_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT56_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT57_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT58_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT59_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT60_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT61_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT62_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT63_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |
| STAT_ADAPTIONSWERT64_GLS_KF2_2_1_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 2-1 |

### RES_0X416E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT2_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT3_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT4_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT5_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT6_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT7_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT8_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT9_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT10_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT11_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT12_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT13_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT14_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT15_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT16_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT17_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT18_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT19_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT20_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT21_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT22_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT23_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT24_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT25_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT26_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT27_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT28_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT29_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT30_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT31_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT32_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT33_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT34_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT35_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT36_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT37_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT38_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT39_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT40_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT41_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT42_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT43_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT44_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT45_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT46_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT47_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT48_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT49_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT50_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT51_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT52_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT53_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT54_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT55_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT56_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT57_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT58_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT59_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT60_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT61_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT62_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT63_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |
| STAT_ADAPTIONSWERT64_GLS_KF2_3_2_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 3-2 |

### RES_0X416F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT2_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT3_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT4_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT5_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT6_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT7_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT8_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT9_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT10_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT11_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT12_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT13_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT14_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT15_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT16_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT17_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT18_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT19_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT20_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT21_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT22_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT23_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT24_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT25_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT26_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT27_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT28_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT29_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT30_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT31_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT32_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT33_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT34_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT35_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT36_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT37_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT38_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT39_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT40_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT41_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT42_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT43_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT44_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT45_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT46_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT47_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT48_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT49_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT50_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT51_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT52_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT53_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT54_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT55_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT56_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT57_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT58_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT59_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT60_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT61_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT62_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT63_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |
| STAT_ADAPTIONSWERT64_GLS_KF2_4_3_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 4-3 |

### RES_0X4170_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT2_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT3_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT4_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT5_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT6_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT7_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT8_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT9_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT10_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT11_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT12_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT13_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT14_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT15_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT16_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT17_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT18_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT19_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT20_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT21_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT22_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT23_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT24_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT25_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT26_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT27_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT28_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT29_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT30_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT31_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT32_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT33_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT34_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT35_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT36_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT37_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT38_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT39_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT40_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT41_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT42_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT43_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT44_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT45_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT46_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT47_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT48_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT49_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT50_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT51_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT52_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT53_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT54_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT55_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT56_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT57_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT58_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT59_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT60_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT61_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT62_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT63_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |
| STAT_ADAPTIONSWERT64_GLS_KF2_5_4_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 5-4 |

### RES_0X4171_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT2_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT3_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT4_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT5_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT6_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT7_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT8_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT9_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT10_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT11_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT12_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT13_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT14_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT15_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT16_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT17_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT18_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT19_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT20_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT21_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT22_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT23_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT24_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT25_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT26_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT27_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT28_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT29_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT30_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT31_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT32_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT33_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT34_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT35_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT36_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT37_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT38_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT39_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT40_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT41_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT42_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT43_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT44_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT45_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT46_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT47_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT48_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT49_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT50_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT51_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT52_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT53_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT54_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT55_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT56_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT57_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT58_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT59_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT60_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT61_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT62_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT63_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |
| STAT_ADAPTIONSWERT64_GLS_KF2_6_5_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 6-5 |

### RES_0X4172_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT2_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT3_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT4_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT5_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT6_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT7_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT8_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT9_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT10_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT11_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT12_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT13_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT14_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT15_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT16_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT17_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT18_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT19_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT20_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT21_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT22_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT23_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT24_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT25_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT26_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT27_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT28_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT29_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT30_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT31_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT32_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT33_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT34_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT35_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT36_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT37_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT38_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT39_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT40_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT41_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT42_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT43_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT44_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT45_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT46_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT47_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT48_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT49_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT50_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT51_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT52_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT53_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT54_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT55_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT56_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT57_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT58_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT59_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT60_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT61_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT62_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT63_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |
| STAT_ADAPTIONSWERT64_GLS_KF2_7_6_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 7-6 |

### RES_0X4173_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERT1_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT2_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT3_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT4_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT5_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT6_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT7_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT8_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT9_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT10_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT11_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT12_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT13_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT14_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT15_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT16_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT17_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT18_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT19_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT20_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT21_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT22_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT23_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT24_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT25_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT26_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT27_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT28_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT29_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT30_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT31_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT32_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT33_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT34_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT35_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT36_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT37_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT38_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT39_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT40_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT41_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT42_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT43_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT44_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT45_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT46_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT47_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT48_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT49_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT50_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT51_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT52_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT53_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT54_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT55_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT56_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT57_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT58_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT59_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT60_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT61_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT62_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT63_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |
| STAT_ADAPTIONSWERT64_GLS_KF2_8_7_WERT | bar | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Auslesen der GLS-Adaption der Rückschaltung 8-7 |

### RES_0X4187_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAGLS_BEEINF_KF1_KALT_1_2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 1-2 |
| STAT_ADAGLS_BEEINF_KF1_KALT_2_3_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 2-3 |
| STAT_ADAGLS_BEEINF_KF1_KALT_3_4_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 3-4 |
| STAT_ADAGLS_BEEINF_KF1_KALT_4_5_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 4-5 |
| STAT_ADAGLS_BEEINF_KF1_KALT_5_6_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 5-6 |
| STAT_ADAGLS_BEEINF_KF1_KALT_6_7_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 6-7 |
| STAT_ADAGLS_BEEINF_KF1_KALT_7_8_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF1 KALT GANG 7-8 |

### RES_0X4188_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAGLS_BEEINF_KF2_KALT_1_2_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 1-2 |
| STAT_ADAGLS_BEEINF_KF2_KALT_2_3_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 2-3 |
| STAT_ADAGLS_BEEINF_KF2_KALT_3_4_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 3-4 |
| STAT_ADAGLS_BEEINF_KF2_KALT_4_5_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 4-5 |
| STAT_ADAGLS_BEEINF_KF2_KALT_5_6_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 5-6 |
| STAT_ADAGLS_BEEINF_KF2_KALT_6_7_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 6-7 |
| STAT_ADAGLS_BEEINF_KF2_KALT_7_8_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Beeinflussungsadaption KF2 KALT GANG 7-8 |

### RES_0X4189_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAKPFCTR_KALT_KUPPLUNG_A_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Fülldruck KALT Kupplung A |
| STAT_ADAKPFCTR_KALT_KUPPLUNG_B_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Fülldruck KALT Kupplung B |
| STAT_ADAKPFCTR_KALT_KUPPLUNG_C_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Fülldruck KALT Kupplung C |
| STAT_ADAKPFCTR_KALT_KUPPLUNG_D_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Fülldruck KALT Kupplung D |
| STAT_ADAKPFCTR_KALT_KUPPLUNG_E_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Fülldruck KALT Kupplung E |

### RES_0X418A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAKPF_KALT_KUPPLUNG_A_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Adaptionswert Fülldruck KALT  Kupplung A |
| STAT_ADAKPF_KALT_KUPPLUNG_B_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Adaptionswert Fülldruck KALT Kupplung B |
| STAT_ADAKPF_KALT_KUPPLUNG_C_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Adaptionswert Fülldruck KALT Kupplung C |
| STAT_ADAKPF_KALT_KUPPLUNG_D_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Adaptionswert Fülldruck KALT Kupplung D |
| STAT_ADAKPF_KALT_KUPPLUNG_E_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Adaptionswert Fülldruck KALT Kupplung E |

### RES_0X418B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAKPF_SHCTR_KALT_KUPPLUNG_A_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsschaltungszähler Fülldruck KALT  Kupplung A |
| STAT_ADAKPF_SHCTR_KALT_KUPPLUNG_B_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsschaltungszähler Fülldruck KALT  Kupplung B |
| STAT_ADAKPF_SHCTR_KALT_KUPPLUNG_C_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsschaltungszähler Fülldruck KALT  Kupplung C |
| STAT_ADAKPF_SHCTR_KALT_KUPPLUNG_D_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsschaltungszähler Fülldruck KALT Kupplung D |
| STAT_ADAKPF_SHCTR_KALT_KUPPLUNG_E_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsschaltungszähler Fülldruck KALT Kupplung E |

### RES_0X418C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAKPF_START_CTR_KUPPLUNG_A_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Startadaption Fülldruck Kupplung A |
| STAT_ADAKPF_START_CTR_KUPPLUNG_B_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Startadaption Fülldruck Kupplung B |
| STAT_ADAKPF_START_CTR_KUPPLUNG_C_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Startadaption Fülldruck Kupplung C |
| STAT_ADAKPF_START_CTR_KUPPLUNG_D_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Startadaption Fülldruck Kupplung D |
| STAT_ADAKPF_START_CTR_KUPPLUNG_E_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Auslesen Kupplungsbefüllprüfzähler Startadaption Fülldruck Kupplung E |

### RES_0X4190_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_1_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 1-2 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_2_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 2-3 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_3_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 3-4 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_4_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 4-5 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_5_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 5-6 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_6_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 6-7 in der GLS-Adaption |
| STAT_ADAPTIONSWERTE_GLSHSCTRKF3_7_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler der Hochschaltung 7-8 in der GLS-Adaption |

### RES_0X41B0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GANGAUSLEGE_ADAPT_SPEICHER_G1_WERT | mbar | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Gangauslege-Adaptions-Speicher 1. Gang |
| STAT_GANGAUSLEGE_ADAPT_SPEICHER_G2_WERT | mbar | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Gangauslege-Adaptions-Speicher 2. Gang |
| STAT_GANGAUSLEGE_ADAPT_SPEICHER_GR_WERT | mbar | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Gangauslege-Adaptions-Speicher R- Gang |

### RES_0X41B1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GANGAUSLEGE_ADAPT_SPEICHER_CTR_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Gangauslege-Adaptions-Speicher Prüfzähler 1. Gang |
| STAT_GANGAUSLEGE_ADAPT_SPEICHER_CTR_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Gangauslege-Adaptions-Speicher Prüfzähler 2. Gang |
| STAT_GANGAUSLEGE_ADAPT_SPEICHER_CTR_R_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Gangauslege-Adaptions-Speicher Prüfzähler R- Gang |

### RES_0X41B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC12_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC23_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC34_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC45_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC56_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC67_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF1_SC78_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |

### RES_0X41B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC12_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 1-2,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC23_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 2-3,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC34_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 3-4,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC45_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 4-5,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC56_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 5-6,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC67_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 6-7,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT1_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT2_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT3_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT4_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT5_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT6_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT7_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT1_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT2_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT3_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT4_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT5_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT6_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT7_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |
| STAT_GLS_ADAP_KF2_SC78_NT8_MT8_WERT | mbar | - | signed char | - | - | 10.0 | 1.0 | 0.0 | Auslesen Werte Schaltung 7-8,Turbinendrehzahl, Moment |

### RES_0X41B9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_1_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 1 nach 2 |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_2_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 2 nach 3 |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_3_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 3 nach 4 |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_4_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 4 nach 5 |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_5_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 5 nach 6 |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_6_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 6 nach 7 |
| STAT_GLS_ADAP_EHS_KF1_KALT_CTR_7_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltung Kennfeld 1 Kalt Bewertungszähler für Schaltung 7 nach 8 |

### RES_0X41BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_1_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 1 nach 2 |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_2_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 2 nach 3 |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_3_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 3 nach 4 |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_4_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 4 nach 5 |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_5_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 5 nach 6 |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_6_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 6 nach 7 |
| STAT_GLS_ADAP_EHS_KF2_KALT_CTR_7_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt Bewertungszähler für Schaltung 7 nach 8 |

### RES_0X4425_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_1 | - | - | - | Zeigt den Status der ersten 32 Ersatzmaßnahmen (von 64) |
| - | Bit | high | BITFIELD | - | BF_ERSATZMASSNAHMEN_2 | - | - | - | Zeigt den Status der letzten 32 Ersatzmaßnahmen (von 64) |

### RES_0X4440_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATURBEREICH_1_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 1 von -40° bis 0° |
| STAT_TEMPERATURBEREICH_2_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 2 von 0° bis 40° |
| STAT_TEMPERATURBEREICH_3_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 3 von 40° bis 90° |
| STAT_TEMPERATURBEREICH_4_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 4 von 90° bis 105° |
| STAT_TEMPERATURBEREICH_5_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 5 von 105° bis 120° |
| STAT_TEMPERATURBEREICH_6_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 6 von 120° bis 130° |
| STAT_TEMPERATURBEREICH_7_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 7 von 130° bis 135° |
| STAT_TEMPERATURBEREICH_8_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 8 von 135° bis 140° |
| STAT_TEMPERATURBEREICH_9_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 9 von 140° bis 145° |
| STAT_TEMPERATURBEREICH_10_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 10 von 145° bis 150° |
| STAT_TEMPERATURBEREICH_11_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 11 von 150° bis 155° |
| STAT_TEMPERATURBEREICH_12_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 12 von 155° bis 170° |
| STAT_TEMPERATURBEREICH_13_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich konnte nicht sicher festgestellt werden |

### RES_0X4441_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATURBEREICH_1_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 1 von -40° bis 40° |
| STAT_TEMPERATURBEREICH_2_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 2 von    40° bis 80° |
| STAT_TEMPERATURBEREICH_3_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 3 von  80° bis 90° |
| STAT_TEMPERATURBEREICH_4_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 4 von  90° bis 95° |
| STAT_TEMPERATURBEREICH_5_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 5 von 95° bis 100° |
| STAT_TEMPERATURBEREICH_6_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 6 von 100° bis 105° |
| STAT_TEMPERATURBEREICH_7_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 7 von 105° bis 110° |
| STAT_TEMPERATURBEREICH_8_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 8 von 110° bis 115° |
| STAT_TEMPERATURBEREICH_9_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 9 von 115° bis 120° |
| STAT_TEMPERATURBEREICH_10_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 10 von 120° bis 130° |
| STAT_TEMPERATURBEREICH_11_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 11 von 130° bis 140° |
| STAT_TEMPERATURBEREICH_12_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich 12 von 140° bis 170° |
| STAT_TEMPERATURBEREICH_13_WERT | s | high | unsigned long | - | - | - | - | - | Temperaturbereich konnte nicht sicher festgestellt werden |

### RES_0X4500_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIC | 0-n | high | signed char | - | TAB_NIC | - | - | - | 0: NIC eingeschaltet, 1: NIC ausgeschaltet |
| STAT_SPORTTASTER | 0-n | high | signed char | - | TAB_SPORTTASTER | - | - | - | 0: Sporttaster ausgeschaltet, 1: Sporttaster eingeschaltet |
| STAT_CODIERUNG_MIL | 0-n | high | signed char | - | TAB_MIL | - | - | - | 0: MIL aus; 1: MIL an |
| STAT_CODIERUNG_SCANTOOL | 0-n | high | signed char | - | TAB_SCANTOOL | - | - | - | 0: Kommunikation aus; 1: Kommunikation an |
| STAT_CODIERUNG_MIL_CYCLES_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Wert bestimmt nach wie vielen Zyklen das MIL aktiviert wird (0 = US = 2 Zyklen; 1 = ECE = 3 Zyklen) |

### RES_0X4501_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_3000_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Codierung 0x3000 |
| STAT_CODIERUNG_3001_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Codierung 0x3001 |

### RES_0X4502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_MOD_3000_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Codierung nach Beeinflussung 0x3000 |
| STAT_CODIERUNG_MOD_3001_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Codierung nach Beeinflussung 0x3001 |

### RES_0X4608_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEGEL_FKT | 0-n | high | unsigned char | - | TAB_SEGEL_FKT | - | - | - | Status der Segelfunktion |
| STAT_SEGELVERHINDERER_DME | 0-n | high | unsigned char | - | TAB_SEGELVERHINDERER_DME | - | - | - | Segelverhinderung der DME |
| STAT_SEGELN_ZUSTAND_ATSYS | 0-n | high | unsigned char | - | TAB_SEGEL_ZUSTAND_ATSYS | - | - | - | Segel Status der ATSYS Seite |
| STAT_SEGELN_RUECKMELDUNG_AGS | 0-n | high | unsigned char | - | TAB_SEGEL_RUECKMELDUNG_AGS | - | - | - | Rückmeldung Segeln der AGS |
| STAT_SEGELN_ZUSTAND_GETRIEBE | 0-n | high | unsigned char | - | STAT_SEGEL_ZUSTAND_GETRIEBE | - | - | - | Status Segeln Zustand vom Getriebe |
| - | Bit | high | BITFIELD | - | BF_SAILING_DISABLE_INFO_AGS | - | - | - | GET_SAILING_DISABLE_INFO_AGS |

### RES_0XDA1D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADGESCHWINDIGKEIT_HL_WERT | rad/s | - | unsigned int | - | - | 1.0 | 64.0 | -512.0 | Radgeschwindigkeit hinten links M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |
| STAT_RADGESCHWINDIGKEIT_HR_WERT | rad/s | - | unsigned int | - | - | 1.0 | 64.0 | -512.0 | Radgeschwindigkeit hinten rechts M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |
| STAT_RADGESCHWINDIGKEIT_VL_WERT | rad/s | - | unsigned int | - | - | 1.0 | 64.0 | -512.0 | Radgeschwindigkeit vorne links M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |
| STAT_RADGESCHWINDIGKEIT_VR_WERT | rad/s | - | unsigned int | - | - | 1.0 | 64.0 | -512.0 | Radgeschwindigkeit vorne rechts M-Fahrzeug: Bereich von -512 [rad/s] bis 512 [rad/s] |

### RES_0XDA24_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_MINUS_AKTIV | 0-n | - | signed int | - | TAB_SCHALTWIPPE2 | - | - | - | Status Schaltwippe Minus: 0 = nicht betätigt, 1 = betätigt |
| STAT_TASTER_LENKRAD_SCHALTWIPPE_PLUS_AKTIV | 0-n | - | signed int | - | TAB_SCHALTWIPPE2 | - | - | - | Status Schaltwippe Plus: 0 = nicht betätigt, 1 = betätigt |

### RES_0XDA27_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WAEHLHEBELPOSITION | 0-n | high | unsigned char | - | TAB_WAEHLHEBELPOSITION | - | - | - | Ausgabe der Wählhebelstellung |
| - | Bit | high | BITFIELD | - | BF_BUSFEHLER_WAEHLHEBEL | - | - | - | Ausgabe der Busfehler, alle möglichen Fehler: Signal ungültig, Botschaft Timeout, Botschaft Alive, Botschaft Checksumme |

### RES_0XDA28_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSLICHTSCHALTER_EIN | 0-n | - | signed int | - | TAB_STATUS_BLS | - | - | - | 0 = Bremslichtschalter nicht betätigt 1 = Bremslichtschalter betätigt |
| STAT_BREMSLICHTTESTSCHALTER_EIN | 0-n | - | signed int | - | TAB_STATUS_BLS | - | - | - | 0 = Bremslichttestschalter nicht betätigt 1 = Bremslichttestschalter betätigt |

### RES_0XDA2A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANGSDREHZAHL_WERT | 1/min | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Getriebeeingangsdrehzahl der ersten Welle Bereich von 0 [1/min] bis 10000 [1/min] |
| STAT_AUSGANGSDREHZAHL_WERT | 1/min | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Getriebeausgangsdrehzahl Bereich von 0 [1/min] bis 10000 [1/min] |

### RES_0XDA2E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISTGANG | 0-n | high | unsigned char | - | TAB_ISTGANG | - | - | - | Eingelegter Gang im Getriebe: P, R, N, 0-8 |
| STAT_FAHRSTUFE | 0-n | high | unsigned char | - | TAB_FAHRSTUFE | - | - | - | Eingelegte Fahrstufe: P, R, N, D, M |

### RES_0XDA40_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HA_BERECHNETER_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Berechneter Wert aus den 11 eingelernten Werten |
| STAT_HA_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Eingelernter Wert der Hinterachse |
| STAT_HA_LERNFLAG | 0-n | - | signed int | - | TAB_LERNFLAG_HA | - | - | - | Lernflag Hinterachse 0 = nicht eingelernt 1= eingelernt |
| STAT_HA_START_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Vorgabewerte für ersten gemessenen Lernwert |
| STAT_ANZAHL_HA_LERN_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Es wird festgehalten, wie viele Werte für das Lernen gemessen werden. |
| STAT_HA_AVR_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Statistisch berechnete Werte aus der Anzahl der Anlernwerte |
| STAT_HA_1_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_2_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_3_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_4_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_5_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_6_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_7_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_8_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_9_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_10_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |
| STAT_HA_11_MESS_WERT | - | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rückgabe der Messwerte. Die Anzahl der Messwerte ist festgelegt durch ANZAHL_HA_LERN_WERTE |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| CAN_LERNFUNKTION_GELERNT | 0x4006 | - | CAN_LERNFUNKTION_GELERNT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4006_D |
| CAN_LERNFUNKTION_AKTIV | 0x4007 | - | CAN_LERNFUNKTION_AKTIV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007_D |
| CAN_LERNFUNKTION_RUECKSETZEN | 0x4010 | - | CAN Lernfunktionen zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4010_D | - |
| GELERNTE_PADDLES_RUECKSETZEN | 0x4011 | - | Gelernte Schaltpaddles zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4011_D | - |
| RB_SACHNUMMER_LESEN | 0x4020 | STAT_RB_SACHNUMMER_LESEN_TEXT | RB Sachnummer | TEXT | - | High | string[32] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZF_SACHNUMMER_LESEN | 0x4021 | STAT_ZF_SACHNUMMER_LESEN_TEXT | ZF Sachnummer | TEXT | - | High | string[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ADAPTIONSWERTE_GLS_KF1_1_2 | 0x4110 | - | Schaltungsapplikation  1 1 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4110_D |
| ADAPTIONSWERTE_GLS_KF1_2_3 | 0x4111 | - | Schaltungsapplikation  1 2 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4111_D |
| ADAPTIONSWERTE_GLS_KF1_3_4 | 0x4112 | - | Schaltungsapplikation  1 3 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4112_D |
| ADAPTIONSWERTE_GLS_KF1_4_5 | 0x4113 | - | Schaltungsapplikation  1 4 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4113_D |
| ADAPTIONSWERTE_GLS_KF1_5_6 | 0x4114 | - | Schaltungsapplikation  1 5 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4114_D |
| ADAPTIONSWERTE_GLS_KF1_6_7 | 0x4115 | - | Schaltungsapplikation  1 6 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4115_D |
| ADAPTIONSWERTE_GLS_KF1_7_8 | 0x4116 | - | Schaltungsapplikation  1 7 8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4116_D |
| ADAPTIONSWERTE_GLS_KF1_2_1 | 0x411D | - | Schaltungsapplikation  1 2 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x411D_D |
| ADAPTIONSWERTE_GLS_KF1_3_2 | 0x411E | - | Schaltungsapplikation  1 3 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x411E_D |
| ADAPTIONSWERTE_GLS_KF1_4_3 | 0x411F | - | Schaltungsapplikation  1 4 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x411F_D |
| ADAPTIONSWERTE_GLS_KF1_5_4 | 0x4120 | - | Schaltungsapplikation  1 5 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4120_D |
| ADAPTIONSWERTE_GLS_KF1_6_5 | 0x4121 | - | Schaltungsapplikation  1 6 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4121_D |
| ADAPTIONSWERTE_GLS_KF1_7_6 | 0x4122 | - | Schaltungsapplikation  1 7 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4122_D |
| ADAPTIONSWERTE_GLS_KF1_8_7 | 0x4123 | - | Schaltungsapplikation  1 8 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4123_D |
| ADAPTIONSWERTE_GLS_KF1_3_1 | 0x4124 | - | Schaltungsapplikation  1 3 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4124_D |
| ADAPTIONSWERTE_GLS_KF1_4_2 | 0x4125 | - | Schaltungsapplikation  1 4 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4125_D |
| ADAPTIONSWERTE_GLS_KF1_5_3 | 0x4126 | - | Schaltungsapplikation  1 5 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4126_D |
| ADAPTIONSWERTE_GLS_KF1_6_4 | 0x4127 | - | Schaltungsapplikation  1 6 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4127_D |
| ADAPTIONSWERTE_GLS_KF1_7_5 | 0x4128 | - | Schaltungsapplikation  1 7 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4128_D |
| ADAPTIONSWERTE_GLS_KF1_8_6 | 0x4129 | - | Schaltungsapplikation  1 8 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4129_D |
| ADAPTIONSWERTE_GLS_KF1_5_1 | 0x412A | - | Schaltungsapplikation  1 5 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412A_D |
| ADAPTIONSWERTE_GLS_KF1_6_3 | 0x412B | - | Schaltungsapplikation  1 6 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412B_D |
| ADAPTIONSWERTE_GLS_KF1_7_1 | 0x412C | - | Schaltungsapplikation  1 7 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412C_D |
| ADAPTIONSWERTE_GLS_KF1_8_2 | 0x412D | - | Schaltungsapplikation  1 8 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412D_D |
| ADAPTIONSWERTE_GLS_KF1_8_4 | 0x412E | - | Schaltungsapplikation  1 8 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412E_D |
| ADAPTIONSWERTE_GE | 0x412F | - | Adaptionswerte Gang einlegen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412F_D |
| ADAPTIONSWERTE_KSFCTR | 0x4130 | - | Zähler kupplungsbezogene Schnellfüllungsadaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4130_D |
| ADAPTIONSWERTE_KPFCTR | 0x4131 | - | Zähler kupplungsbezogene Schnellfüllungsadaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4131_D |
| ADAPTIONSWERTE_NICCTR | 0x4132 | STAT_ADAPTIONSWERTE_NICCTR_WERT | Zähler der erfolgten NIC Adaptionen von Kupplung B | - | - | High | unsigned int | - | - | - | - | - | 22 | - | - |
| ADAPTIONSWERTE_GLSHSCTRKF1 | 0x4133 | - | Zähler Hochschaltung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4133_D |
| ADAPTIONSWERTE_GLSRSCTRKF1 | 0x4134 | - | Zähler Rückschaltung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4134_D |
| ADAPTIONSWERTE_GLSHSCTRKF2 | 0x4136 | - | Zähler Hochschaltung der GLS Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4136_D |
| ADAPTIONSWERTE_GLSRSCTRKF2 | 0x4137 | - | Zähler Rückschaltung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4137_D |
| ADAPTIONSWERTE_NIC | 0x4138 | STAT_ADAPTIONSWERTE_NIC_WERT | Adaption Kupplung B fuer NIC | mbar | - | High | signed int | - | - | - | - | - | 22 | - | - |
| ADAPTIONSWERTE_KPF | 0x413A | - | Adaptionswerte KPF Kupplung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x413A_D |
| ADAPTIONSWERTE_KSF | 0x4140 | - | Schnellfüllzeit Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4140_D |
| ADAPTIONSWERTE_BFLGLSKF1 | 0x4143 | - | imported by DiagFuncImport | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4143_D |
| ADAPTIONSWERTE_BFLGLSKF2 | 0x4144 | - | imported by DiagFuncImport | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4144_D |
| ADAPTIONSWERTE_LCCFP | 0x4145 | - | LCC Fußpunktadaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4145_D |
| ADAPTIONSWERTE_LOESCHEN | 0x4150 | - | Adaptionswerte löschen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4150_D | - |
| GANG_EINLEGE_ADAPTION_CTR | 0x415F | - | Auslesen der Zähler für Gang-Einlege-Adaption | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x415F_D |
| ADAPTIONSWERTE_GLS_KF2_1_2 | 0x4160 | - | Schaltungsapplikation 2 1 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4160_D |
| ADAPTIONSWERTE_GLS_KF2_2_3 | 0x4161 | - | Schaltungsapplikation 2 2 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4161_D |
| ADAPTIONSWERTE_GLS_KF2_3_4 | 0x4162 | - | Schaltungsapplikation 2 3 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4162_D |
| ADAPTIONSWERTE_GLS_KF2_4_5 | 0x4163 | - | Schaltungsapplikation 2 4 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4163_D |
| ADAPTIONSWERTE_GLS_KF2_5_6 | 0x4164 | - | Schaltungsapplikation 2 5 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4164_D |
| ADAPTIONSWERTE_GLS_KF2_6_7 | 0x4165 | - | Schaltungsapplikation 2 6 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4165_D |
| ADAPTIONSWERTE_GLS_KF2_7_8 | 0x4166 | - | Schaltungsapplikation 2 7 8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4166_D |
| ADAPTIONSWERTE_GLS_KF2_2_1 | 0x416D | - | Schaltungsapplikation 2 2 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x416D_D |
| ADAPTIONSWERTE_GLS_KF2_3_2 | 0x416E | - | Schaltungsapplikation 2 3 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x416E_D |
| ADAPTIONSWERTE_GLS_KF2_4_3 | 0x416F | - | Schaltungsapplikation 2 4 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x416F_D |
| ADAPTIONSWERTE_GLS_KF2_5_4 | 0x4170 | - | Schaltungsapplikation 2 5 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4170_D |
| ADAPTIONSWERTE_GLS_KF2_6_5 | 0x4171 | - | Schaltungsapplikation 2 6 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4171_D |
| ADAPTIONSWERTE_GLS_KF2_7_6 | 0x4172 | - | Schaltungsapplikation 2 7 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4172_D |
| ADAPTIONSWERTE_GLS_KF2_8_7 | 0x4173 | - | Schaltungsapplikation 2 8 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4173_D |
| ADAGLS_BEEINF_KF1_KALT_MEM_ID | 0x4187 | - | Auslesen Beeinflussungsadaption KF1 KALT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4187_D |
| ADAGLS_BEEINF_KF2_KALT_MEM_ID | 0x4188 | - | Auslesen Beeinflussungsadaption KF2 KALT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4188_D |
| ADAKPFCTR_KALT_MEM_ID | 0x4189 | - | Auslesen Beeinflussungsadaption KF1 KALT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4189_D |
| ADAKPF_KALT_MEM_ID | 0x418A | - | Auslesen Beeinflussungsadaption KF2 KALT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x418A_D |
| ADAKPF_SHCTR_KALT_MEM_ID | 0x418B | - | Auslesen Kupplungsschaltungszähler Fülldruck KALT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x418B_D |
| ADAKPF_START_CTR_MEM_ID | 0x418C | - | Auslesen Kupplungsbefüllprüfzähler Startadaption Fülldruck | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x418C_D |
| ADAPTIONSWERTE_GLSHSCTRKF3 | 0x4190 | - | ADAPTIONSWERTE_GLSHSCTRKF3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4190_D |
| ADAPTIONSWERTE_TSF_WK_AUSLESEN | 0x41A0 | STAT_ADAPTIONSWERTE_TSF_WK_WERT | Status der WK-TSF-Adaptionswerte | ms | - | High | signed int | - | 10.0 | 1.0 | 0.0 | - | 22 | - | - |
| ADAPTION_WK_TSF_CTR_AUSLESEN | 0x41A1 | STAT_ADAPTION_WK_TSF_CTR_WERT | Status des Bewertungszählers zur WK-TSF-Adaption | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GANGAUSLEGE_ADAPT_SPEICHER | 0x41B0 | - | Gangauslege-Adaptions-Speicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41B0_D |
| GANGAUSLEGE_ADAPT_SPEICHER_CTR | 0x41B1 | - | Gangauslege-Adaptions-Speicher Prüfzähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41B1_D |
| FUSSPUNKT_ADAPTIONSWERT_WK | 0x41B3 | STAT_FUSSPUNKT_ADAPTIONSWERT_WK_WERT | Status Fußpunkt Adaptionswert WK | mA | - | High | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FUSSPUNKT_ADAPTWERT_WK_CTR | 0x41B4 | STAT_FUSSPUNKT_ADAPTWERT_WK_CTR_WERT | Status von Fußpunkt Adaptionswert WK Bewertungszähler | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GLS_ADAP_EHS_KF1_KALT | 0x41B6 | - | GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 1 Kalt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41B6_D |
| GLS_ADAP_EHS_KF2_KALT | 0x41B7 | - | GLS Adaption Einzel-Hoch-Schaltungen Kennfeld 2 Kalt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41B7_D |
| GLS_ADAP_EHS_KF1_KALT_CTR | 0x41B9 | - | GLS Adaption Bewertungszähler Einzel-Hoch-Schaltungen Kennfeld 1 Kalt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41B9_D |
| GLS_ADAP_EHS_KF2_KALT_CTR | 0x41BA | - | GLS Adaption Bewertungszähler Eilnzel-Hoch-Schaltungen Kennfeld 2 Kalt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41BA_D |
| IUMPR_GEN_DEN | 0x4200 | STAT_IUMPR_GEN_DEN_WERT | Status IUMPR_GEN_DEN als Integerwert | - | - | High | signed int | - | - | - | - | - | 22 | - | - |
| IUMPR_IGN_CYC_CNT | 0x4201 | STAT_IUMPR_IGN_CYC_CNT_WERT | Status IIGN_CYC_CNT als Integerwert | - | - | High | signed int | - | - | - | - | - | 22 | - | - |
| AUTO_P_EMF3_ZAEHLER | 0x4300 | STAT_AUTO_P_EMF3_ZAEHLER_WERT | Anzahl von P (EMF3) | - | - | High | signed char | - | - | - | - | - | 22 | - | - |
| AUTO_P_EMF2_ZAEHLER | 0x4301 | STAT_AUTO_P_EMF2_ZAEHLER_WERT | Zähler Auto-P wegen EMF-Komfortebene | - | - | High | signed char | - | - | - | - | - | 22 | - | - |
| AUTO_P_EMF1_ZAEHLER | 0x4302 | STAT_AUTO_P_EMF1_ZAEHLER_WERT | Zähler Auto-P wegen EMF-Anforderung in N | - | - | High | signed char | - | - | - | - | - | 22 | - | - |
| CNT_ADAPT_MODE | 0x4308 | STAT_CNT_ADAPT_MODE_WERT | Gesamtzeit in D | - | - | High | signed long | - | - | - | - | - | 22 | - | - |
| CNT_EGNER_ENABLED | 0x431B | STAT_CNT_ENGER_ENABLED_WERT | Zähler: P ausgelegt durch EGNER | - | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CNT_EGNER_FAILED | 0x431C | STAT_CNT_EGNER_FAILED_WERT | Zähler: P nicht ausgelegt, obwohl angefordert durch EGNER | - | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CNT_EGNER_MISUSE | 0x431D | STAT_CNT_EGNER_MISUSE_WERT | Zähler: Zu hohe Geschwindigkeit während aktiver EGNER | - | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| INFO10_COUNTER | 0x4327 | STAT_INFO10_COUNTER_WERT | Rollen entgegen der gewählten Fahrtrichtung | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CNT_DRIVELOGIC_LEVEL1_ADAPTIVMODE | 0x4329 | STAT_CNT_DRIVELOGIC_LEVEL1_ADAPTIVMODE_WERT | Eeprom-based counter for Drive Logic Level 1 in position D. | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CNT_DRIVELOGIC_LEVEL2_ADAPTIVMODE | 0x432A | STAT_CNT_DRIVELOGIC_LEVEL2_ADAPTIVMODE_WERT | Eeprom-based counter for Drive Logic Level 2 in position D. | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CNT_DRIVELOGIC_LEVEL3_ADAPTIVMODE | 0x432B | STAT_CNT_DRIVELOGIC_LEVEL3_ADAPTIVMODE_WERT | Eeprom-based counter for Drive Logic Level 3 in position D. | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CNT_DRIVELOGIC_LEVEL1_MANUALMODE | 0x432C | STAT_CNT_DRIVELOGIC_LEVEL1_MANUALMODE_WERT | Eeprom-based counter for Drive Logic Level 1 in manual mode. | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CNT_DRIVELOGIC_LEVEL2_MANUALMODE | 0x432D | STAT_CNT_DRIVELOGIC_LEVEL2_MANUALMODE_WERT | Eeprom-based counter for Drive Logic Level 2 in manual mode. | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_CNT_DRIVELOGIC_LEVEL3_MANUALMODE | 0x432E | STAT_CNT_DRIVELOGIC_LEVEL3_MANUALMODE_WERT | Eeprom-based counter for Drive Logic Level 3 in manual mode. | - | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ERSATZMASSNAHMEN_AKTIV | 0x4425 | - | Status der Ersatzmassnahmen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4425_D |
| SUBSTRATTEMPERATURKOLLEKTIV | 0x4440 | - | EGS Temperaturkollektiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4440_D |
| OELTEMPERATURKOLLEKTIV | 0x4441 | - | Öltemperaturkollektiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4441_D |
| HOCHSCHALTUNGSZAEHLER | 0x4445 | STAT_COUNT_FORCEDSHIFTUP_WERT | Anzahl der vom Motor angeforderten Hochschaltungen | - | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| CODIERUNG | 0x4500 | - | Codierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4500_D |
| CODIERBYTES | 0x4501 | - | Codier-Bytes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4501_D |
| CODIERBYTES_MOD | 0x4502 | - | Codierbyte Mode | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4502_D |
| HARDWARE_INDEX | 0x4510 | STAT_HARDWARE_INDEX_WERT | Ausgabe des Index der Hardware | - | - | High | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STAT_MSA_EGS | 0x4605 | STAT_MSA_EGS | Status der MSA Schnittstelle | 0-n | - | High | unsigned char | TAB_MSA_EGS | - | - | - | - | 22 | - | - |
| SEGELFKT | 0x4608 | - | Segelfunktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4608_D |
| SEGELFKT_RUECKSETZEN | 0x4614 | - | Segelfunktion zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4614_D | - |
| SEGELFKT_DEAK_DAUERHAFT | 0x4615 | - | Segelfunktion dauerhaft deaktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4615_D | - |
| SEGELFKT_DEAK_ENDE | 0x4616 | - | Segelfunktion dauerhaft deaktivieren Ende | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4616_D | - |
| GETRIEBEVORADAPTION_STATUS | 0x4620 | STAT_GETRIEBEVORADAPTION_STATUS | Status der Getriebevoradaption | 0-n | - | High | unsigned char | TAB_GETRIEBVORADA_STATUS | - | - | - | - | 22 | - | - |
| STAT_GETRIEBEVORADAPTION_ZUSTAND | 0x4621 | STAT_GETRIEBEVORADA_ZUSTAND | Zustand der Getriebevoradaption. | 0-n | - | High | unsigned char | TAB_GETRIEBEVORADAPTION_ZUSTAND | - | - | - | - | 22 | - | - |
| STAT_UPSHIFT_COUNTER_QS3 | 0x4622 | STAT_UPSHIFT_COUNTER_QS3_WERT | STATUS_UPSHIFT_COUNTER_QS3 | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STAT_PID30 | 0x4646 | STAT_PID30_WERT | Status des PID30 - Warm-Up Cycles | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_EE_UPDATE | 0x4647 | STAT_EE_UPDATE | Status des EE UPDATES | 0-n | - | High | unsigned char | TAB_EE_UPDATE | - | - | - | - | 22 | - | - |
| _GETRIEBEOELTEMPERATUR | 0x6000 | - | GETRIEBEOELTEMPERATUR | - | - | - | - | - | - | - | - | - | 22 | - | - |
| ANHAENGERBETRIEB_EIN | 0xDA10 | STAT_ANHAENGERBETRIEB_EIN | Anhängerbetrieb erkannt 0= Anhängerbetrieb inaktiv, 1 = Anhängerbetrieb aktiv, FFFF = ungültig | 0-n | - | - | signed int | TAB_ANHAENGERBETRIEB | - | - | - | - | 22 | - | - |
| GETRIEBEOELTMEPERATUR | 0xDA12 | STAT_GETRIEBEOELTMEPERATUR_WERT | Getriebeöltemperatur Bereich von -48 [Grad C] bis 205 [Grad C] | °C | - | - | signed int | - | 1.0 | 1.0 | -48.0 | - | 22 | - | - |
| STEUERN_LERNFKT_RUECKSETZEN | 0xDA15 | - | Rücksetzen der Lernfunktion | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA15_D | - |
| GESCHWINDIGKEIT | 0xDA1C | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit M-Fahrzeug: Bereich von -305 [km/h] bis 305 [km/h] | km/h | - | - | signed int | - | 1.0 | 16.0 | 0.0 | - | 22 | - | - |
| RADGESCHWINDIGKEIT | 0xDA1D | - | Status der Radgeschwindigkeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA1D_D |
| EGS_KICK_DOWN | 0xDA1F | STAT_KICK_DOWN_EIN | Kick-Down Schalter: 0 = aus; 1 = ein | 0/1 | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| WANDLERKUPPLUNG | 0xDA22 | STAT_WANDLERKUPPLUNG | Status der Wandlerkupplung  Siehe Tabelle TAB_WANDLERKUPPLUNG | 0-n | - | High | signed int | TAB_WANDLERKUPPLUNG | - | - | - | - | 22 | - | - |
| KILOMETERSTAND | 0xDA23 | STAT_KILOMETERSTAND_WERT | Rückgabe Kilometerstand | km | - | High | unsigned long | - | 8.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRAD_SCHALTPADDLES | 0xDA24 | - | Status Schaltpaddles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA24_D |
| MOTOROELTEMPERATUR_BUS | 0xDA25 | STAT_MOTOROELTEMPERATUR_WERT | Motoröltemperatur Bereich von -48 [Grad C] bis 205 [Grad C] | °C | - | - | signed int | - | 1.0 | 1.0 | -48.0 | - | 22 | - | - |
| MOTORTEMPERATUR_BUS | 0xDA26 | STAT_MOTORTEMPERATUR_WERT | Motortemperatur Bereich von -48 [Grad C] bis 205 [Grad C] | °C | - | - | signed int | - | 1.0 | 1.0 | -48.0 | - | 22 | - | - |
| WAEHLHEBEL_STELLUNG | 0xDA27 | - | Statusabfrage der Waehlhebenstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA27_D |
| BREMSLICHTSCHALTER_EIN | 0xDA28 | - | Status Bremslichschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA28_D |
| ANLASSERFREIGABE_AKTIV | 0xDA29 | STAT_ANLASSERFREIGABE_AKTIV | Motorstartfreigabe an CAS 0=keine Freigabe, 1=Motorstart zulassen | 0/1 | - | High | signed int | - | - | - | - | - | 22 | - | - |
| EINAUSGANG_DREHZAHL | 0xDA2A | - | Getriebe Eingangs- und Ausgangsdrehzahl | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA2A_D |
| FAHRPEDAL_WERT | 0xDA2C | STAT_FAHRPEDAL_WERT | Fahrpedalwert (von 0% bis 100%) | % | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ISTGANG | 0xDA2E | - | Aktuell eingelegter Gang | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA2E_D |
| FESTSTELLBREMSE | 0xDA31 | STAT_FESTSTELLBREMSE_EIN | Feststellbremse, 0=AUS, 1=EIN, FFFF=ungültig | 0-n | - | - | signed int | TAB_FESTSTELLBREMSE | - | - | - | - | 22 | - | - |
| UBAT_WERT | 0xDA33 | STAT_UBAT_WERT | Batteriespannung Klemme 30g Bereich von 0 [V] bis 25,6 [V] | V | - | - | signed int | - | 25.0 | 1000.0 | 0.0 | - | 22 | - | - |
| MOTORDREHZAHL | 0xDA34 | STAT_BUS_IN_MOTORDREHZAHL_WERT | Die über CAN von der Motorsteuerung empfangenen Motordrehzahl (Ist_Drehzahl_Motor_Kurbelwelle). Bereich von 0 [U/min] bis 12000 [U/min] | U/min | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EGS_KL15 | 0xDA38 | STAT_KL15_EIN | Der Status der Klemme 15 auf Pin 9, 0 = Klemme_15 AUS / Zündung AUS (Klemme15 = 0 V = 0), 1 = Klemme_15 EIN / Zündung EIN (Klemme15 = 12 V = 1) | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| STATUS_LERNFKT | 0xDA40 | - | Statusabfrage des Starts und Rücksetzen der Lernfunktion. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA40_D |
| OBD_LOCK_BIT | 0xE2EC | STAT_LOCK_BIT | 0x00: Verriegelungsbit nicht gesetzt 0x01: Verriegelungsbit gesetzt | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| EEPROM_UPDATE | 0xF4BC | - | EEPROM schreiben | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_GETRIEBEVORADAPTION | 0xFEA5 | - | STEUERN_GETRIEBEVORADAPTION | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STAT_SEGEL_ZUSTAND_GETRIEBE

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln nicht möglich |
| 0x01 | Segeln möglich, passiv |
| 0x02 | Übergang in Segeln |
| 0x03 | Segeln aktiv |
| 0x04 | Übergang aus Segeln |
| 0x0D | Nicht verfügbar |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xFF | undefiniert |

### TAB_ANHAENGERBETRIEB

| WERT | TEXT |
| --- | --- |
| 0x0000 | Anhängerbetrieb inaktiv |
| 0x0001 | Anhängerbetrieb aktiv |
| 0xFFFF | Signal ungültig |

### TAB_EE_UPDATE

| WERT | TEXT |
| --- | --- |
| 0x00 | idle / update done |
| 0x01 | pending / update running |
| 0xFF | Ungültiger Wert |

### TAB_FAHRSTUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | P - parken |
| 0x01 | R - rückwärts |
| 0x02 | N - neutral |
| 0x03 | D - dauer |
| 0x04 | M - manuelle Schaltgasse |
| 0xFF | ungültiger Wert |

### TAB_FESTSTELLBREMSE

| WERT | TEXT |
| --- | --- |
| 0x0000 | Feststellbremse inaktiv |
| 0x0001 | Feststellbremse aktiv |
| 0xFFFF | Signal ungültig |

### TAB_GETRIEBEVORADAPTION_ZUSTAND

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
| 0x10 | Parkbremse/EMF nicht aktiv |
| 0x11 | Allgemeine Abbruchkriterien für Adaptionen nicht erfüllt (Notprogramme oder auch Sonderzustände die Adaptionsgüte beeinflussen) |
| 0x12 | Nicht alle Kupplungen konnten adaptiert werden. Da wo es möglich war, werden die Adaptionswerte gesichert. |
| 0xFF | Notgang oder andere nicht definierte Zustände |

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
| 0x10 | Parkbremse/EMF nicht aktiv |
| 0x11 | Allgemeine Abbruchkriterien für Adaptionen nicht erfüllt (Notprogramme oder auch Sonderzustände die Adaptionsgüte beeinflussen) |
| 0x12 | Nicht alle Kupplungen konnten adaptiert werden. Da wo es möglich war, werden die Adaptionswerte gesichert. |
| 0xFF | Notgang oder andere nicht definierte Zustände |

### TAB_GETRIEBVORADA_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Stillstandsadaption nicht gestartet |
| 0x10 | Stillstandsadaption beendet |
| 0x40 | Stillstandsadaption wegen Sicherheitskriterien abgebrochen |
| 0x60 | Stillstandsadaption wegen erkanntem Fehler abgebrochen |
| 0x80 | Stillstandsadaption konnte nicht gestoppt werden |
| 0xC0 | Stillstandsadaption läuft |
| 0xFF | undefiniert |

### TAB_ISTGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | P - parken |
| 0x01 | R - rückwärts |
| 0x02 | N - neutral |
| 0x03 | Gang 1 |
| 0x04 | Gang 2 |
| 0x05 | Gang 3 |
| 0x06 | Gang 4 |
| 0x07 | Gang 5 |
| 0x08 | Gang 6 |
| 0x09 | Gang 7 |
| 0x10 | Gang 8 |
| 0xFF | ungültiger Wert |

### TAB_ISTZUSTAND_HYBRIDABLAUF

| WERT | TEXT |
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

### TAB_LERNFLAG_HA

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gelernt |
| 0x01 | eingelernt |
| 0xFF | nicht definiert |

### TAB_MIL

| WERT | TEXT |
| --- | --- |
| 0x00 | MIL aus |
| 0x01 | MIL ein |
| 0xFF | ungültig |

### TAB_MSA_EGS

| WERT | TEXT |
| --- | --- |
| 0x01 | Abschaltverhinderer_Retry |
| 0x02 | Abschaltverhinderer_Getriebetemperatur |
| 0x03 | Abschaltverhinderer_fehlende_Druckversorgung |
| 0x04 | Abschaltverhinderer_Gang |
| 0x05 | Abschaltverhinderer_vnab |
| 0x06 | Abschaltverhinderer_PosR |
| 0x07 | Freigabe_Motorstopp |
| 0x08 | Freigabe_Motorstopp_mit_Teilentkopplung |
| 0x09 | Freigabe_Motorstopp_und_Start_Kraftschlussfrei |
| 0x0A | Einschaltaufforderer_PosP |
| 0x0B | Einschaltaufforderer_PosR |
| 0x0C | MSA_Getriebe_Systemfehler |
| 0x0D | Abschaltverhinderer_AGS |
| 0x0E | Abschaltverhinderer_MSA_passiv |
| 0x0F | ungültig |
| 0xFF | ungültig |

### TAB_NIC

| WERT | TEXT |
| --- | --- |
| 0x00 | NIC eingeschaltet |
| 0x01 | NIC ausgeschaltet |
| 0x02 | NIC applikativ eingeschaltet |
| 0xFF | ungültig |

### TAB_SCANTOOL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kommunikation aus |
| 0x01 | Kommunikation ein |
| 0xFF | ungültig |

### TAB_SCHALTWIPPE2

| WERT | TEXT |
| --- | --- |
| 0x0000 | Schaltwippe nicht betätigt |
| 0x0001 | Schaltwippe betätigt |
| 0xFFFF | Signal ungültig |

### TAB_SEGELVERHINDERER_DME

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Segelverhinderer außerhalb Antrieb |
| 0x01 | Segelverhinderer außerhalb Antrieb |
| 0x02 | DME-interner Segelverhinderer 1 |
| 0x03 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 |
| 0x04 | DME- interner Segelverhinderer  2 |
| 0x05 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 |
| 0x06 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x07 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x08 | DME-interner Segelverhinderer 3 |
| 0x09 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 3 |
| 0x10 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x11 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x12 | DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x13 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x14 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x15 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und 2 und 3 |
| 0x16 | Kein Segelverhinderer außerhalb Antrieb |
| 0x17 | Segelverhinderer außerhalb Antrieb |
| 0x18 | DME-interner Segelverhinderer 1 |
| 0x19 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 |
| 0x20 | DME- interner Segelverhinderer  2 |
| 0x21 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 |
| 0x22 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x23 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x24 | DME-interner Segelverhinderer 3 |
| 0x25 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 3 |
| 0x26 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x27 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x28 | DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x29 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x30 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x31 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und 2 und 3 |
| 0x32 | Kein Segelverhinderer außerhalb Antrieb |
| 0x33 | Segelverhinderer außerhalb Antrieb |
| 0x34 | DME-interner Segelverhinderer 1 |
| 0x35 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 |
| 0x36 | DME- interner Segelverhinderer  2 |
| 0x37 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 |
| 0x38 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x39 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x40 | DME-interner Segelverhinderer 3 |
| 0x41 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 3 |
| 0x42 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x43 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x44 | DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x45 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x46 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x47 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und 2 und 3 |
| 0x48 | Kein Segelverhinderer außerhalb Antrieb |
| 0x49 | Segelverhinderer außerhalb Antrieb |
| 0x50 | DME-interner Segelverhinderer 1 |
| 0x51 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 |
| 0x52 | DME- interner Segelverhinderer  2 |
| 0x53 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 |
| 0x54 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x55 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x56 | DME-interner Segelverhinderer 3 |
| 0x57 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 3 |
| 0x58 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x59 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x60 | DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x61 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x62 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x63 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und 2 und 3 |
| 0x64 | Kein Segelverhinderer außerhalb Antrieb |
| 0x65 | Segelverhinderer außerhalb Antrieb |
| 0x66 | DME-interner Segelverhinderer 1 |
| 0x67 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 |
| 0x68 | DME- interner Segelverhinderer  2 |
| 0x69 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 |
| 0x70 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x71 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 |
| 0x72 | DME-interner Segelverhinderer 3 |
| 0x73 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 3 |
| 0x74 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x75 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 3 |
| 0x76 | DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x77 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x78 | DME-interner Segelverhinderer 1 und DME-interner Segelverhinderer 2 und DME-interner Segelverhinderer 3 |
| 0x79 | Segelverhinderer außerhalb Antrieb und DME-interner Segelverhinderer 1 und 2 und 3 |
| 0x80 | undefiniert |
| 0xFD | Nicht verfügbar |
| 0xFE | Fehler |
| 0xFF | ungültig |

### TAB_SEGEL_FKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Segelfunktion fest deaktiviert |
| 0x02 | Segel-Lernfunktion aktiviert, aber nicht gelernt |
| 0x03 | Segel-Codierfunktion aktiviert, aber nicht codiert |
| 0x41 | Segelfunktion fest eingeschaltet und nicht per Diagnosetester deaktivert |
| 0x42 | Segelfunktion über Lernfunktion aktiviert und nicht per Diagnosetester deaktivert |
| 0x43 | Segelfunktion per Codierung eingeschaltet und nicht per Diagnosetester deaktivert |
| 0x80 | Segelfunktion fest deaktiviert und per Diagnosetester deaktivert |
| 0x82 | Segel-Lernfunktion aktiviert, aber nicht gelernt und per Diagnosetester deaktivert |
| 0x83 | Segel-Codierfunktion aktiviert, aber nicht codiert und per Diagnosetester deaktivert |
| 0xC1 | Segelfunktion fest eingeschaltet aber per Diagnosetester deaktivert |
| 0xC2 | Segelfunktion über Lernfunktion aktiviert aber per Diagnosetester deaktivert |
| 0xC3 | Segelfunktion per Codierung eingeschaltet aber per Diagnosetester deaktivert |
| 0xFF | undefiniert |

### TAB_SEGEL_RUECKMELDUNG_AGS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Segelanforderung seitens AGS bzw. Segelverbot durch AGS |
| 0x01 | Segelanforderung AGS (die AGS sieht Segeln als sinnvoll an und es liegt kein Verhinderer vor) |
| 0xFF | undefiniert |

### TAB_SEGEL_ZUSTAND_ATSYS

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln nicht verfügbar (aus Getriebesicht Segeln nicht möglich) |
| 0x01 | Segeln verfügbar (nicht aktiv) (aus Getriebesicht Segeln möglich, aber keine Segel-Anforderung durch AGS  bzw. Segelverbot durch AGS) |
| 0x02 | Segeln Einstieg |
| 0x03 | Segeln aktiv |
| 0x04 | Segeln Ausstieg |
| 0xFF | undefiniert |

### TAB_SPORTTASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Sporttaster ausgeschaltet |
| 0x01 | Sporttaster eingeschaltet |
| 0xFF | ungültig |

### TAB_STATUS_BLS

| WERT | TEXT |
| --- | --- |
| 0x0000 | Bremslichtschalter nicht betätigt |
| 0x0001 | Bremslichtschalter betätigt |
| 0xFFFF | Ungültiger Wert |

### TAB_STEUERN_LERNFKT_RUECKSETZEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Hinter- oder Vorderachse  zurücksetzen |
| 0x02 | Gelernte  CAN Botschaften  zurücksetzen |
| 0x03 | Hinter- oder Vorderachse und gelernte CAN Botschaften zurücksetzen |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_UWB_6078_EM_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Standby |
| 0x01 | Drehmomentregelung |
| 0x02 | Drehzahlregelung |
| 0x03 | Spannungsregelung |
| 0x04 | Externe Drehzahlregelung |
| 0x05 | PID Drehzahlregler mit Momentenvorsteuerung |
| 0x06 | HV-Batterie-Stromregelung (var.) |
| 0x07 | Position Sensor Offset Learning Mode (var.) |
| 0x08 | Aktiver Kurzschluss (var.) |
| 0x09 | undefined |
| 0x10 | Freilauf (var.) |
| 0x11 | undefined |
| 0x12 | Sicherer Zustand fehlerbedingt (var.) |
| 0x13 | Standby-EME in der Initialisierung. Betrieb nicht möglich. Zuschalten der Hauptschütze in der Batterie NICHT erlaubt. |
| 0x14 | Standby-Zwischenkreisvorladung. Betrieb nicht möglich. Zuschalten der Hauptschütze in der Batterie NICHT erlaubt. |
| 0x15 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_UWB_6120_EM

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine E-Maschine verfügbar |
| 0x10 | E-Maschine ist elektrisch fahrbereit oder bereits aktiv |
| 0xF0 | EM-Status-Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_UWB_6120_EM_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine E-Maschine verfügbar |
| 0x10 | E-Maschine ist elektrisch fahrbereit oder bereits aktiv |
| 0xF0 | EM-Status-Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_UWB_6120_VM

| WERT | TEXT |
| --- | --- |
| 0xFF | ungültig |

### TAB_UWB_6120_VM_ZUSTAENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0xFF | Wert ungültig |

### TAB_UWB_6120_VM_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht |
| 0x01 | Motor startet |
| 0x02 | Motor läuft |
| 0x03 | Motor im Auslauf |
| 0x0D | Funktionsschnittstelle ist nicht verfügbar. DME in der Initialisierung (z.B. nach Reset) |
| 0x0E | Reserviert |
| 0x0F | VM-Status-Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_UWB_6210_KUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Default (keine Kupplung über Schwelle) |
| 0x01 | Kupplung A |
| 0x02 | Kupplung B |
| 0x03 | Kupplung C |
| 0x04 | Kupplung D |
| 0x05 | Kupplung E |
| 0x06 | Kupplung F |
| 0x07 | WK/K0 |
| 0xFF | Wert ungültig |

### TAB_UWB_6210_TEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x00 | 0° C |
| 0x08 | 16° C |
| 0x10 | 32° C |
| 0x18 | 48° C |
| 0x20 | 64°C |
| 0x28 | 80° C |
| 0x30 | 96° C |
| 0x38 | 112° C |
| 0x40 | 128° C |
| 0x48 | 144° C |
| 0x50 | 160° C |
| 0x58 | 176° C |
| 0x60 | 192° C |
| 0x68 | 208° C |
| 0x70 | 224° C |
| 0x78 | 240° C |
| 0x80 | 256° C |
| 0x88 | 272° C |
| 0x90 | 288° C |
| 0x98 | 304° C |
| 0xA0 | 320° C |
| 0xA8 | 336° C |
| 0xB0 | 352° C |
| 0xB8 | 368° C |
| 0xC0 | 384° C |
| 0xC8 | 400° C |
| 0xD0 | 416° C |
| 0xD8 | 432° C |
| 0xE0 | 448° C |
| 0xE8 | 464° C |
| 0xF0 | 480° C |
| 0xF8 | 496° C |
| 0xFF | Wert ungültig |

### TAB_WAEHLHEBELPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Grundstellung |
| 0x01 | P-Taster |
| 0x02 | R - rückwärts |
| 0x03 | N - neutral |
| 0x04 | D - dauer |
| 0x05 | M- |
| 0x06 | M+ |
| 0x07 | M/S |

### TAB_WANDLERKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Wandlerkupplung geöffnet |
| 0x0001 | Wandlerkupplung geregelt low |
| 0x0002 | Wandlerkupplung geregelt high |
| 0x0003 | Wandlerkupplung geschlossen low |
| 0x0004 | Wandlerkupplung geschlossen high |
| 0x0008 | Wandlerkupplung Übergang nach auf |
| 0x0009 | Wandlerkupplung Übergang nach geregelt low |
| 0x000A | Wandlerkupplung Übergang nach geregelt high |
| 0x000B | Wandlerkupplung Übergang nach zu low |
| 0x000C | Wandlerkupplung Übergang nach zu high |
| 0xFFFF | Signal ungültig |

### TAB_ZIELZUSTAND_HYBRIDABLAUF

| WERT | TEXT |
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

### TAB_0X6019

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 |

### TAB_0X601A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 |

### TAB_0X601C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A |

### TAB_0X6026

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0022 | 0x0023 |

### TAB_0X602E

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x001D | 0x001E |

### TAB_0X602F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x001F | 0x0020 | 0x0021 |

### TAB_0X6030

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x001A | 0x001B | 0x001C |

### TAB_0X603E

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 | 0x0039 | 0x003A | 0x003B |

### TAB_0X603F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 | 0x0048 |

### TAB_0X6040

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B |

### TAB_0X6041

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 |

### TAB_0X6042

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0082 | 0x0083 | 0x0084 | 0x0085 | 0x0086 | 0x0087 | 0x0088 | 0x0089 |

### TAB_0X6043

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x008A | 0x008B | 0x008C | 0x008D | 0x008E | 0x008F | 0x0090 | 0x0091 |

### TAB_0X6044

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0092 | 0x0093 | 0x0094 | 0x0095 | 0x0096 | 0x0097 | 0x0098 | 0x0099 |

### TAB_0X6045

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x009F | 0x00A0 | 0x00A1 | 0x00A2 | 0x00A3 | 0x00A4 | 0x00A5 | 0x00A6 |

### TAB_0X6046

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0076 | 0x0077 | 0x0078 | 0x0079 | 0x007A | 0x007B |

### TAB_0X6047

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x007C | 0x007D | 0x007E | 0x007F | 0x0080 | 0x0081 |

### TAB_0X6050

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 19 | 0x0063 | 0x0064 | 0x0065 | 0x0066 | 0x0067 | 0x0068 | 0x0069 | 0x006A | 0x006B | 0x006C | 0x006D | 0x006E | 0x006F | 0x0070 | 0x0071 | 0x0072 | 0x0073 | 0x0074 | 0x0075 |

### TAB_0X6056

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x00CA | 0x00CB | 0x00CC | 0x00CD | 0x00CE | 0x00CF |

### TAB_0X605A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x00C7 | 0x00C8 | 0x00C9 |

### TAB_0X6060

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00A7 | 0x00A8 | 0x00A9 | 0x00AA | 0x00AB | 0x00AC | 0x00AD | 0x00AE |

### TAB_0X6061

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00AF | 0x00B0 | 0x00B1 | 0x00B2 | 0x00B3 | 0x00B4 | 0x00B5 | 0x00B6 |

### TAB_0X6062

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00B7 | 0x00B8 | 0x00B9 | 0x00BA | 0x00BB | 0x00BC | 0x00BD | 0x00BE |

### TAB_0X6063

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00BF | 0x00C0 | 0x00C1 | 0x00C2 | 0x00C3 | 0x00C4 | 0x00C5 | 0x00C6 |

### TAB_0X6064

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00DC | 0x00DD | 0x00DE | 0x00DF | 0x00E0 | 0x00E1 | 0x00E2 | 0x00E3 |

### TAB_0X6065

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00E4 | 0x00E5 | 0x00E6 | 0x00E7 | 0x00E8 | 0x00E9 | 0x00EA | 0x00EB |

### TAB_0X6066

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00EC | 0x00ED | 0x00EE | 0x00EF | 0x00F0 | 0x00F1 | 0x00F2 | 0x00F3 |

### TAB_0X6067

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00F4 | 0x00F5 | 0x00F6 | 0x00F7 | 0x00F8 | 0x00F9 | 0x00FA | 0x00FB |

### TAB_0X6068

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x00D0 | 0x00D1 | 0x00D2 | 0x00D3 | 0x00D4 | 0x00D5 |

### TAB_0X6069

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x00D6 | 0x00D7 | 0x00D8 | 0x00D9 | 0x00DA | 0x00DB |

### TAB_0X6091

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0050 | 0x0051 | 0x0052 | 0x0053 | 0x0054 | 0x0055 | 0x0056 | 0x0057 |

### TAB_0X6092

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x0058 | 0x0059 | 0x005A | 0x005B | 0x005C | 0x005D | 0x005E | 0x005F | 0x0060 | 0x0061 | 0x0062 |

### TAB_0X6120

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0001 | 0x0002 |

### TAB_0X61F7

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 |

### TAB_0X61F8

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0049 | 0x004A | 0x004B | 0x004C | 0x004D |

### TAB_0X61FF

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x009A | 0x009B | 0x009C | 0x009D | 0x009E |

### TAB_0X6210

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x004E | 0x004F |

### UWB_TAB_600C

| WERT | TEXT |
| --- | --- |
| 0x01 | Gang: 1 |
| 0x02 | Gang: 2 |
| 0x03 | Gang: 3 |
| 0x04 | Gang: 4 |
| 0x05 | Gang: 5 |
| 0x06 | Gang: 6 |
| 0x07 | Gang: 7 |
| 0x08 | Gang: 8 |
| 0xFF | Rückwärtsgang |
| 0xFE | ungültig |

### UWB_TAB_6015

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehler im überwachten RAM |
| 0x01 | Kein Fehler im überwachten RAM |
| 0x02 | Prüfung noch nicht abgeschlossen(sendet nur ATSYS) |
| 0xFF | undefiniert |

### UWB_TAB_6018

| WERT | TEXT |
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

### UWB_TAB_601B

| WERT | TEXT |
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

### UWB_TAB_6020

| WERT | TEXT |
| --- | --- |
| 0x00 | Schlüssel i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x01 | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x02 | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x03 | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt i.o. |
| 0x04 | Schlüssel i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x05 | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x06 | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x07 | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt i.o. |
| 0x08 | Schlüssel i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x09 | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x0A | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x0B | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz i.o. Fahrergurt n.i.o. |
| 0x0C | Schlüssel i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x0D | Schlüssel n.i.o. Fahrertür i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x0E | Schlüssel i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0x0F | Schlüssel n.i.o. Fahrertür n.i.o. Fahrersitz n.i.o. Fahrergurt n.i.o. |
| 0xFF | ungültig |

### UWB_TAB_6025

| WERT | TEXT |
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

### UWB_TAB_602B

| WERT | TEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | angelegt |
| 0x02 | druckstellung |
| 0x03 | schlupfgeregelt |
| 0x04 | geregeltgeschlossen |
| 0x05 | geschlossen |
| 0xFF | undefiniert |

### UWB_TAB_602C

| WERT | TEXT |
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

### UWB_TAB_602D

| WERT | TEXT |
| --- | --- |
| 0x00 | IEP aus |
| 0x01 | IEP sleep |
| 0x02 | IEP LP1 |
| 0x03 | IEP LP2 |
| 0x04 | IEP LP3 |
| 0xFF | undefiniert |

### UWB_TAB_6051

| WERT | TEXT |
| --- | --- |
| 0x33 | BP3 |
| 0x55 | BP1 |
| 0xAA | BP0 |
| 0xCC | BP2 |
| 0xFF | undefiniert |

### UWB_TAB_6072

| WERT | TEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | Ablauf aktiv, Phase 1 (normaler Ablauf) |
| 0x02 | Ablauf aktiv, Phase 2 (normaler Ablauf) |
| 0x03 | Ablauf aktiv, Phase 3 (normaler Ablauf) |
| 0x04 | Ablauf aktiv, Phase 4 (normaler Ablauf) |
| 0x05 | Ablauf aktiv, Phase 5 (normaler Ablauf) |
| 0x06 | Ablauf aktiv, Phase 6 (normaler Ablauf) |
| 0x07 | Ablauf aktiv, Phase 7 (normaler Ablauf) |
| 0x08 | Ablauf aktiv, Phase 8 (Ende normaler Ablauf) |
| 0x09 | Ablauf aktiv, Phase 9 (Abbruch aktiv) |
| 0x0A | Ablauf aktiv, Phase 10 (Abbruch aktiv) |
| 0x0B | Ablauf aktiv, Phase 11 (Abbruch aktiv) |
| 0x0C | Ablauf aktiv, Phase 12 (Abbruch aktiv) |
| 0x0D | Ablauf abgebrochen (Abbruch aktiv) |
| 0x0E | Ablauf abgeschlossen (Abbruch abgeschlossen) |
| 0x0F | Sprunganforderung bei aufgetretenem Fehler |
| 0xFF | undefiniert |

### UWB_TAB_63EA

| WERT | TEXT |
| --- | --- |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | P |
| 0xFF | undefiniert |

### UWB_TAB_63EC

| WERT | TEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | vorwärts |
| 0x02 | rückwärts |
| 0xFF | ungültig |

### UWB_TAB_63EF

| WERT | TEXT |
| --- | --- |
| 0x00 | mech. Notlauf nicht aktiv |
| 0x01 | mech. Notlauf aktiv |
| 0xFF | undefiniert |

### UWB_TAB_63F0

| WERT | TEXT |
| --- | --- |
| 0x00 | Parksperre nicht eingelegt |
| 0x01 | Parksperre eingelegt |
| 0x02 | Parksperre in Zwischenposition |
| 0x03 | Zustand der Parksperre unbekannt |
| 0xFF | undefiniert |

### UWB_TAB_63F1

| WERT | TEXT |
| --- | --- |
| 0x00 | Parksperre undefiniert |
| 0x01 | Parksperre freigegeben |
| 0x02 | Freigeben der Parksperre |
| 0x03 | Einlegen der Parksperre |
| 0x04 | Parksperre eingerastet |
| 0xFF | ungültig |

### UWB_TAB_63F2

| WERT | TEXT |
| --- | --- |
| 0x00 | Parksperre nicht eingelegt |
| 0x01 | Parksperre eingelegt |
| 0xFF | undefiniert |

### UWB_TAB_63F3

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Hotmode aktiv |
| 0x01 | Hotmode1 aktiv |
| 0x02 | Hotmode2 aktiv |
| 0xFF | undefiniert |

### UWB_TAB_63F9

| WERT | TEXT |
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

### UWB_TAB_63FA

| WERT | TEXT |
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

### UWB_TAB_65E1

| WERT | TEXT |
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

### UWB_TAB_65E4

| WERT | TEXT |
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

### UWB_TAB_65E6

| WERT | TEXT |
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

### UWB_TAB_65E7

| WERT | TEXT |
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

### UWB_TAB_65E8

| WERT | TEXT |
| --- | --- |
| 0x00 | SPI Fehler detektiert=0 ADC Fehler detektiert=0 |
| 0x01 | SPI Fehler detektiert=0 ADC Fehler detektiert=1 |
| 0x02 | SPI Fehler detektiert=1 ADC Fehler detektiert=0 |
| 0x03 | SPI Fehler detektiert=1 ADC Fehler detektiert=1 |
| 0xFF | undefiniert |

### UWB_TAB_F006

| WERT | TEXT |
| --- | --- |
| 0x00 | Wandlerkupplung offen |
| 0x01 | Wandlerkupplung geregelt |
| 0x02 | Wandlerkupplung geschlossen |
| 0x03 | nicht definiert |
| 0xFF | undefiniert |

### UWB_TAB_F007

| WERT | TEXT |
| --- | --- |
| 0x00 | Segeln nicht verfügbar |
| 0x04 | Segeln verfügbar aber nicht aktiv und nicht verboten |
| 0x08 | Segeln Einstieg |
| 0x12 | Segeln aktiv |
| 0x10 | Segeln Ausstieg |
| 0xFF | undefiniert |

### UWB_TAB_ISTGANG

| WERT | TEXT |
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

### UWB_TAB_KRAFTSCHLUSS

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Kraftschluss |
| 0x01 | Kraftschluss vorwärts aufbauend/abbauend |
| 0x02 | Kraftschluss vorwärts |
| 0x03 | Kraftschluss rückwärts aufbauend/abbauend |
| 0x04 | Kraftschluss rückwärts |
| 0x05 | schlupfendes Schaltelement (8HP/8P: Bremse B) vorwärts |
| 0x06 | schlupfendes Schaltelement (8HP/8P: Bremse B) rückwärts (SAB) |
| 0x0F | undefiniert |

### UWB_TAB_PWF

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserviert |
| 0x01 | Parken BN niO |
| 0x02 | Parken BN iO |
| 0x03 | Standfunktionen Kunde nicht in Fahrzeug |
| 0x04 | undefiniert |
| 0x05 | Wohnen |
| 0x06 | undefiniert |
| 0x07 | Pruefen Analyse Diagnose |
| 0x08 | Fahrbereitschaft herstellen |
| 0x09 | undefiniert |
| 0x0A | Fahren |
| 0x0B | undefiniert |
| 0x0C | Fahrbereitschaft beenden |
| 0x0D | undefinert |
| 0x0E | nicht verfügbar |
| 0x0F | undefiniert |
| 0xFF | ungültig |

### UWB_TAB_ZIELGANG

| WERT | TEXT |
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

### UW_TAB_6081

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Motoreingriff |
| 0x01 | negative Motoreingriff zu klein entgegen Getriebeanforderung während Rückschaltung |
| 0x02 | negative Motoreingriff zu klein entgegen Getriebeanforderung während Hochschaltung |
| 0x04 | negative Motoreingriff zu groß entgegen Getriebeanforderung während Rückschaltung |
| 0x08 | negative Motoreingriff zu groß entgegen Getriebeanforderung während Hochschaltung |
| 0x10 | positive Motoreingriff zu klein entgegen Getriebeanforderung während Rückschaltung |
| 0x20 | positive Motoreingriff zu klein entgegen Getriebeanforderung während Hochschaltung |
| 0x40 | positive Motoreingriff zu groß entgegen Getriebeanforderung während Rückschaltung |
| 0x80 | positive Motoreingriff zu groß entgegen Getriebeanforderung während Hochschaltung |
| 0xFF | ungültig |

### UW_TAB_DREHRICHTUING_ABTRIEB

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehrichtung unbestimmt |
| 0x10 | Drehrichtung vorwärts |
| 0x20 | Drehrichtung rückwärts |
| 0xF0 | undefiniert |

### UW_TAB_DREHRICHTUNG_TURBINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehrichtung unbestimmt |
| 0x40 | Drehrichtung Motor und Turbine gleichsinnig |
| 0x80 | Drehrichtung Motor und Turbine ungleichsinnig |
| 0xF0 | undefiniert |

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
| 0x3A | EME |
| 0x0A | REME |
