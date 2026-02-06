# dsc_01.prg

## General

|  |  |
| --- | --- |
| File | dsc_01.prg |
| Type | PRG |
| Jobs | 45 |
| Tables | 81 |
| Origin | BMW EF-623 Wanner |
| Revision | 2.025 |
| Author | BMW EF-601 Rudolph |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitäts Control Steuergerät |  |  |
| ORIGIN | string | BMW EF-623 Wanner |  |  |
| REVISION | string | 2.025 |  |  |
| AUTHOR | string | BMW EF-601 Rudolph |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.18 |  |  |
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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### CBS_INFO

Ausgabe der CBS-Version

_No arguments._

### CBS_DATEN_LESEN

CBS Daten auslesen (fuer CBS-Version 5) UDS: $22 ReadDataByIdentifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS-Version 5) UDS: $2E WriteDataByIdentifier Modus  : Default Musterparametersatz fuer Bremsbelagverschleiss Vorder/Hinterachse br_v,100,1,0,0,0,1,0,0 br_h,100,1,0,0,0,1,0,0 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma!)

| Name | Type | Description |
| --- | --- | --- |
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, Sic, Sic_v, TUV, AU, Ueb, Efk Werte externe Umfaenge: Oel, NOx_a, Br_v, Br_h Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 0xFFh (255 dez) Defaultwert: 100 (0x64h) Bremflüssigkeit: 150 (0x96h) erlaubt |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 0x0F (15 dez) Defaultwert: 0x0Fh (15 dez) |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter, keine Aenderung: 0x3F (63 dez) Defaultwert: 0x3Fh (63 dez) |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 8000h Defaultwert: 8000h |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0hex -> % 1hex -> km*10 Fhex -> d.c. Defaultwert: Fh |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0h Schalter, keine Aenderung: FFh Defaultwert: FFh |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 0-254 Monate Schalter, keine Aenderung: FFh Defaultwert: FFh |
| RES_BYTE | int | Reserve Byte (noch unbenutzt) Defaultwert: 00h |

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

### STATUS_REIFENPANNENANZEIGE

Auslesen Reifenpannenanzeige UDS SID : $22   ReadDataByIdentifier UDS DID : $4005 _REIFENPANNENANZEIGE UDS DID : $4007 _RPA_LERNDATEN_STD_RB wird ersetzt durch DID : $DBE3 Modus: Default

_No arguments._

### _BYTE_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |

### STATUS_VIN

HW_NR UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter VIN Modus: Default

_No arguments._

### DEBUG_DMCLIENT_SYSTIME

Systemzeit UDS  : $22   ReadDataByIdentifier UDS  : $1701 Sub-Parameter Systemzeit Modus: Default

_No arguments._

### _DID_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $22 ReadDataByID Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DID | unsigned int | 0x0000 - 0xFFFF |

### _SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### _FASTA_LESEN

Auslesen der FASTA Daten und der Debug Codierung UDS: $22 $5010 ReadDataByID FASTA_DATEN UDS: $22 $3003 ReadDataByID Codierdaten Debug Block UDS: $22 $3000 ReadDataByID Codierdaten Allgemein Modus   : Default

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

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelag vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x06 | Br_h | Bremsbelag hinten |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x15 | Efk | Einfahrkontrolle |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
| 0x0D | NOx_a | NOx-Additiv |
| 0x64 | Sic_v | Sichtpruefung/Fahrzeug-Check verknuepft |

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
| 0x022900 | Energiesparmode - aktiv | 0 |
| 0x02FF29 | Diagnosemaster - Dummy Application DTC | 1 |
| 0x480680 | Steuergerät intern - Bosch - Ecu - Robert Bosch Fehlerspeicher: Transfer nicht gestartet in AS | 0 |
| 0x480681 | Weckleitung aktiv - Bus Sleep registriert bei aktiver Weckleitung | 0 |
| 0x480682 | Verteilergetriebe - Kupplungsposition unbekannt | 1 |
| 0x480683 | EMF - Montagemodus aktiv und hydraulisch gehalten | 0 |
| 0x480684 | Codierung - Notlaufregler aktiv oder LMV inaktiv | 0 |
| 0x480685 | EMF - Unter- oder Überspannung, anziehen und lösen nicht möglich | 1 |
| 0x480687 | Bremspedalwegsensor - Leitung Masse - Leitungsunterbrechung | 0 |
| 0x480688 | Bremspedalwegsensor - Plausibilisierung - Kurzschluss Signal auf Masse | 0 |
| 0x480689 | ICM  - Plausi: Initialisierung ICM SG dauert zu lange | 0 |
| 0x48068A | ICM  - Längsbeschleunigung  - Phase 2: Fehleramplitude zu groß | 0 |
| 0x48068B | ICM  - Querbeschleunigung  - Phase 2: Fehleramplitude zu groß | 0 |
| 0x48068C | Verteilergetriebe - Kupplung voruebergehend stillgelegt, evtl. Überhitzung | 1 |
| 0x48068D | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Entbremste Vorderachse - EVA | 0 |
| 0x48068F | Kombi - Ungültige Daten vom Kombi - Vorderachse | 0 |
| 0x480690 | Kombi - Ungültige Daten vom Kombi - Hinterachse | 0 |
| 0x480691 | DSC Pumpe - Plausi: System IC erkennt kein defektes Motorrelais während FSA-Test | 0 |
| 0x480692 | Bremsbelagsensor - Vorderachse - Leitungsfehler | 0 |
| 0x480696 | Bremsbelagsensor - Hinterachse - Leitungsfehler | 0 |
| 0x480697 | Bremspedalwegsensor - Plausibilisierung - Messung Signal nicht möglich | 0 |
| 0x48069F | Raddrehzahlsensor - Vorn Links - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4806A0 | Raddrehzahlsensor - Vorn Links - Anfahrerkennung fehlerhaft im Stillstand | 0 |
| 0x4806A2 | Raddrehzahlsensor - Vorn Links - Anfahrerkennung fehlerhaft langsam | 0 |
| 0x4806A3 | Raddrehzahlsensor - Vorn Rechts - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4806A4 | Raddrehzahlsensor - Vorn Rechts - Anfahrerkennung fehlerhaft im Stillstand | 0 |
| 0x4806A5 | Raddrehzahlsensor - Vorn Rechts - Anfahrerkennung fehlerhaft langsam | 0 |
| 0x4806A8 | Steuergerät intern - Bosch - Vafs - VAFS Kommunikation zwischen Algorithm Server fehlerhaft | 0 |
| 0x4806AA | DSC-Pumpe - Rückförderpume aufgrund zu langer Pumpenmotor- und Ventilansteuerung überhitzt | 0 |
| 0x4806AB | Steuergerät intern - Bosch keine Unterstützung HW Variante durch SW | 0 |
| 0x4806AC | Lenkwinkelsensor - Fehleramplitude des Linkwinkel-Signals übersteigt zulaessigen Schwellwert (Phase 2) | 0 |
| 0x4806AD | Lenkwinkelsensor - Fehleramplitude des Linkwinkel-Signals übersteigt zulaessigen Schwellwert (Phase 1) | 0 |
| 0x4806AE | Drucksensor - Hinten Links - Analog Digital Wandler: Selbsttest fehlgeschlagen | 0 |
| 0x4806AF | Drucksensor - Hinten Links - Leitungsfehler | 0 |
| 0x4806B0 | Drucksensor - Hauptzylinder - Leitungsfehler | 0 |
| 0x4806B1 | ICM  - Längsbeschleunigung  - Phase 1: Fehleramplitude zu groß | 0 |
| 0x4806B2 | ICM  - Querbeschleunigung  - Phase 1: Fehleramplitude zu groß | 0 |
| 0x4806B3 | Drucksensor - Vorn Links - Analog Digital Wandler: Selbsttest fehlgeschlagen | 0 |
| 0x4806B5 | Drucksensor - Vorn Links - Leitungsfehler | 0 |
| 0x4806B6 | Steuergerät intern - Bosch - Ecu - Boot-Rom Checksummenfehler | 0 |
| 0x4806B7 | LDM - Ventile im DSC-SG überhitzt während LDM-Regelung Schwelle 1 | 0 |
| 0x4806B9 | Drucksensor - Hauptzylinder - Sensor Test fehlgeschlagen Vergleich zu hoch | 0 |
| 0x4806BA | Vacuumsensor - Plausi: mit Hauptzylinderbremsdruck | 0 |
| 0x4806BB | Vacuumsensor - Signal außerhalb des zulässigen Wertebereichs | 0 |
| 0x4806BC | Vacuumsensor - Analog/DigitalConverter - fehlerhafter Selbsttest | 0 |
| 0x4806BD | Lokale Spannungsversorgung - Unterhalb 6,6 Volt für Vacuumsensor - Drucksensor | 0 |
| 0x4806BE | Bremspedalwegsensor - Plausibilisierung - Fehlersignal, interner Fehler, Leitungsfehler | 0 |
| 0x4806BF | Lokale Spannungsversorgung - Ausgangsspannung für Vacuumsensor - Drucksensor fehlerhaft | 0 |
| 0x4806C0 | DSC Pumpe - Hydraulische Leakage festgestellt | 0 |
| 0x4806C1 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Hydraulischer Bremskraftverstaerker Fehlerkompensation- Hbc - | 0 |
| 0x4806C2 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Autohold-Funktion  - Avh - | 0 |
| 0x4806C3 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 1 Kurzschluss nach Plus | 0 |
| 0x4806C4 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 2 Kurzschluss nach Plus | 0 |
| 0x4806C5 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Masse | 0 |
| 0x4806C6 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Plus | 0 |
| 0x4806C7 | Bremspedalwegsensor - Plausibilisierung - Wegsignal zu groß | 0 |
| 0x4806C8 | Bremspedalwegsensor - Plausibilisierung - Wegsignal zu klein | 0 |
| 0x4806C9 | Bremspedalwegsensor - Plausibilisierung - Null - Punkt Offset zu groß | 0 |
| 0x4806CA | Bremspedalwegsensor - Plausibilisierung - Wegsignal Gradient zu groß | 0 |
| 0x4806CB | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Hydraulischer Bremskraftverstaerker - Hbb - | 0 |
| 0x4806CC | ICM  - Gierrate - Soll - Fehleramplitude des Ackermann-Sollgierraten-Signals übersteigt zulässigen Schwellwert - Phase 1 | 0 |
| 0x4806CD | ICM  - Gierrate - Soll - Fehleramplitude des Ackermann-Sollgierraten-Signals übersteigt zulässigen Schwellwert - Phase 2 und 3 | 0 |
| 0x4806CE | EMF - Schnittstelle inaktiv | 0 |
| 0x4806CF | EMF - Stellvorgang nicht umsetzbar | 0 |
| 0x4806D0 | Drucksensor - Hauptzylinder - Sensor Test fehlgeschlagen Vergleich zu niedrig | 0 |
| 0x4806D1 | Bremspedalwegsensor - Plausibilisierung - Wegsignal Gradient zu klein | 0 |
| 0x4806D2 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Adaptive Brake Assist oder Adaptive Brake Prefill -  AbaAbp - | 0 |
| 0x4806D3 | Steuergerät intern - Bosch - Asw - Timeout Software Startup Phase AX | 0 |
| 0x4806D4 | Reifenpannenanzeige - FASTA-Daten unplausibel. | 0 |
| 0x4806D5 | Reifenpannenanzeige - Standartisierungsdaten unplausibel | 0 |
| 0x4806D6 | Reifenpannenanzeige - Codierdaten unplausibel | 0 |
| 0x4806D7 | Reifenpannenanzeige - Inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Vorderachse. | 0 |
| 0x4806D8 | Reifenpannenanzeige - Inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Hinterachse. | 0 |
| 0x4806DB | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Bremsscheibenwischer - Bsw - | 0 |
| 0x4806DC | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Elektron. Brems-Vorbefüllung - Evb - | 0 |
| 0x4806DD | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - ACB HPS Fading Control | 0 |
| 0x4806DE |  Fading Control - laenger als 500ms aktiv und Bremsscheibentemp. oberhalb Grenzwert 600 Grad - Infoeintrag - | 0 |
| 0x4806DF |  Fading Control - aktiv und Bremsscheibentemperatur oberhalb Grenzwert 700 Grad - Infoeintrag - | 0 |
| 0x4806E0 | LDM - ACC Stop&Go oder DCC deaktiviert wegen Bremsenüberhitzung, Überhitzung während ECBA-Bremsung | 0 |
| 0x4806E1 | LDM - Ventile im DSC-SG überhitzt während LDM-Regelung Schwelle 2 | 0 |
| 0x4806E2 | DSC Pumpe - Freilauf Interrupt Fehler | 0 |
| 0x4806E3 | Automatikhold - Temporäre Deaktivierung zur Überhitzungsvermeidung | 0 |
| 0x4806E5 | Codierung - Variantencodierung - Anhängerschlingerlogik: Einstellungen ungültig | 0 |
| 0x4806E6 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4806E7 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft im Stillstand | 0 |
| 0x4806E8 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft langsam | 0 |
| 0x4806E9 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft im Stillstand | 0 |
| 0x4806EA | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft langsam | 0 |
| 0x4806EB | Drucksensor - Hauptzylinder - Spannung zu niedrig Kein Drucksensorsignal | 0 |
| 0x4806EC | Drucksensor - Hauptzylinder - Spannung zu hoch Kein Drucksensorsignal | 0 |
| 0x4806ED | ICM  - Gierrate - Ist - Fehleramplitude des Gierraten-Signals übersteigt zulässigen Schwellwert - Phase 1 | 0 |
| 0x4806EE | ICM  - Gierrate - Ist - Fehleramplitude des Gierraten-Signals übersteigt zulässigen Schwellwert - Phase 2 und 3 | 0 |
| 0x4806EF | Globale Spannungsversorgung - Unter- oder Überspannung | 1 |
| 0x4806FD | Bremspedalwegsensor - Nullstellung - nicht initialisiert | 0 |
| 0x4806FE | Bremspedalwegsensor - Plausibilisierung - Reserve | 0 |
| 0x4806FF | Bremspedalwegsensor - Plausibilisierung - Reserve | 0 |
| 0x480710 | Raddrehzahlsensor - Vorn Links - Plausi: Drehrichtung | 0 |
| 0x480713 | Raddrehzahlsensor - Vorn Rechts - Plausi: Drehrichtung | 0 |
| 0x480716 | Raddrehzahlsensor - Hinten Links - Plausi: Drehrichtung | 0 |
| 0x480719 | Raddrehzahlsensor - Hinten Rechts - Plausi: Drehrichtung | 0 |
| 0x480927 | Raddrehzahlsensor - Vorn Links - Radschlupfüberwachung | 0 |
| 0x480928 | Raddrehzahlsensor - Vorn Links - Fehlender Zahn | 0 |
| 0x48092A | Steuergerät intern - Bosch - Ecu - ECU internal fault / Valve Driver ASIC fault | 0 |
| 0x48092E | Steuergerät intern - Bosch - Ecu - Analog Digital Controler -  Selftest failure on VAFS controller | 0 |
| 0x480930 | Ventil Relais - DSC Versorgungsspannung Klemme 15 Fehler, Spannung zu niedrig für Ventilrelais Test | 0 |
| 0x480932 | Bremsflüssigkeitssensor - Bremsflüssigkeitsstand zu niedrig | 0 |
| 0x480934 | Vacuumsensor - Unterdruck des Booster zu niedrig | 0 |
| 0x480936 | Vacuumsensor - Vakuum zu niedrig - Hbc-Funktion degradiert | 0 |
| 0x480937 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 1 unterbrochen | 0 |
| 0x480938 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 2 unterbrochen | 0 |
| 0x480939 | Codierung - Falsches Steuergerät (Vakuumsensor) | 0 |
| 0x48093A | EMF - Rücksprung auf Init erkannt oder Init zu lang | 0 |
| 0x48093B | DSC Pumpe - RFP laeuft staendig - obwohl nicht angesteuert - | 0 |
| 0x48093D | Ventile allgemein - zu viele erkannte Einzelfehler | 0 |
| 0x48093E | Ventil Relais - Startuptest: VR schließt nicht während Startuptest | 0 |
| 0x48093F | Ventil Relais - Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. | 0 |
| 0x480940 | Ventil Relais - Startuptest: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse | 0 |
| 0x480941 | Ventil Relais - Startuptest: geschlossen | 0 |
| 0x480942 | Ventil Relais - Startuptest: Spannungsversorgung VR zu niedrig | 0 |
| 0x480943 | Ventil Relais - zyklischen Test:  Kurzschluss zu Uz | 0 |
| 0x480944 | Ventil Relais - zyklischen Test: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse | 0 |
| 0x480945 | Einlassventil - vorn links - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480946 | Einlassventil - vorn links - Allgemeiner Fehler | 0 |
| 0x480947 | Einlassventil - vorn links - Driftfehler: Ventilspannung defekt | 0 |
| 0x480948 | Auslassventil - vorn links  - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480949 | Auslassventil - vorn links  - Allgemeiner Fehler | 0 |
| 0x48094A | Einlassventil - vorn rechts - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x48094B | Einlassventil - vorn rechts - Allgemeiner Fehler | 0 |
| 0x48094C | Auslassventil - vorn rechts - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x48094D | Auslassventil - vorn rechts - Allgemeiner Fehler | 0 |
| 0x48094E | Einlassventil - hinten links - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x48094F | Einlassventil - hinten links - Allgemeiner Fehler | 0 |
| 0x480950 | Einlassventil - hinten links - Driftfehler: Ventilspannung defekt | 0 |
| 0x480951 | Auslassventil - hinten links - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480952 | Auslassventil - hinten links - Allgemeiner Fehler | 0 |
| 0x480953 | Einlassventil - hinten rechts - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480954 | Einlassventil - hinten rechts - Allgemeiner Fehler | 0 |
| 0x480955 | Auslassventil - hinten rechts - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480956 | Auslassventil - hinten rechts - Allgemeiner Fehler | 0 |
| 0x480957 | Trennventil - Kreis 1 - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480958 | Trennventil - Kreis 1 - Allgemeiner Fehler | 0 |
| 0x480959 | Trennventil - Kreis 2 - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x48095A | Trennventil - Kreis 2 - Allgemeiner Fehler | 0 |
| 0x48095B | Vorladeventil - Kreis 1 - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x48095C | Vorladeventil - Kreis 1 - Allgemeiner Fehler | 0 |
| 0x48095D | Lokale Spannungsversorgung - Unterspannung | 0 |
| 0x48095E | Globale Spannungsversorgung - Unterspannung intern | 0 |
| 0x48095F | Vorladeventil - Kreis 2 - Fehler bei zyklischem Ventil- und Relaistest | 0 |
| 0x480960 | Vorladeventil - Kreis 2 - Allgemeiner Fehler | 0 |
| 0x480961 | Lokale Spannungsversorgung - Überspannung | 0 |
| 0x480962 | DSC Pumpe Intern ADC oder ASIC Fehler | 0 |
| 0x480963 | Lokale Spannungsversorgung - leichte Unterspannung | 1 |
| 0x480964 | Lokale Spannungsversorgung - schwere Unterspannung | 1 |
| 0x480965 | Lokale Spannungsversorgung - Überspannung | 1 |
| 0x480966 | Raddrehzahlsensor - Allgemein - Kurzschluss einer Raddrehzahlfuehler-Spannungsleitung auf UBatt | 0 |
| 0x480967 | Lokale Spannungsversorgung - Spannungsspitze auf Uz | 0 |
| 0x480968 | Steuergerät intern - Bosch - Ecu - Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler) | 0 |
| 0x480969 | Steuergerät intern - Bosch - Ecu - Aufstarttest: Enable nicht einschaltbar | 0 |
| 0x48096A | Steuergerät intern - Bosch - Ecu - Aufstarttest: Enable nicht ausschaltbar | 0 |
| 0x48096B | Steuergerät intern - Bosch - Ecu - System Startup: Synchronisations-Timeout | 0 |
| 0x48096C | Steuergerät intern - Bosch - Ecu - SP-Interface: Hardwarfehler erkannt | 0 |
| 0x48096D | ECBA - Momentenanforderung zu hoch | 0 |
| 0x48096E | EMF - Notentriegelt Hydraulische Stillstandsfunktionen nicht aktivierbar | 0 |
| 0x480970 | Steuergerät intern - Bosch - Ecu - Watchdog-Ueberwachung meldet: Datenfehler aufgetreten | 0 |
| 0x480971 | Steuergerät intern - Bosch - Ecu - Watchdog-Ueberwachung meldet: Status nicht korrekt | 0 |
| 0x480972 | Steuergerät intern - Bosch - Ecu - Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15DS | 0 |
| 0x480973 | Steuergerät intern - Bosch - Ecu - DePwm Status: Software-/ Hardwarekonfigurationen passen nicht zusammen (DF11i/s) | 0 |
| 0x480974 | Steuergerät intern - Bosch - Ecu - Status_Raddrehzahlfuehlerausgang des SP-Interface passt nicht zur Konfiguration | 0 |
| 0x480977 | Steuergerät intern - Bosch - Ecu - Serial Processing Interface Botschaft im Algorithmus Server fehlerhaft | 0 |
| 0x480979 | Steuergerät intern - Bosch - Ecu - ROM Checksummentest fehlgeschlagen | 0 |
| 0x48097A | Steuergerät intern - Bosch - Ecu - RAM Adressierungstest fehlgeschlagen | 0 |
| 0x48097B | Steuergerät intern - Bosch - Ecu - RAM Checkpatterntest fehlgeschlagen | 0 |
| 0x48097C | Steuergerät intern - Bosch - Ecu - HET-Module: RAM Adressierungstest fehlgeschlagen | 0 |
| 0x48097D | Verteilergetriebe - Kupplungsposition offen, nur Heckantrieb | 1 |
| 0x48097E | Steuergerät intern - Bosch - Ecu - CAN RAM Checkpatterntest  fehlgeschlagen | 0 |
| 0x48097F | Steuergerät intern - Bosch - Ecu - Betriebssystem Rechenzykluszeit zu hoch - Leitungsverbindung oder Endstufe defekt ? | 0 |
| 0x480980 | Steuergerät intern - Bosch - Ecu - Betriebssystem: Geringe Background-Rechenzyklus(Task)- Aktivitaet - System ueberlastet ! | 0 |
| 0x480981 | Steuergerät intern - Bosch - Ecu - Betriebssystem Ausnahmefehler. | 0 |
| 0x480982 | Steuergerät intern - Bosch - Ecu - Betriebssystem: Rechenzyklus (Task) fehlt bzw. nicht aktiviert. | 0 |
| 0x480983 | Steuergerät intern - Bosch - Ecu - Programm Abbruch -> Mikrocontroller-Mode: Paboard. | 0 |
| 0x480984 | Steuergerät intern - Bosch - Ecu - ROM Checksummentest fehlgeschlagen | 0 |
| 0x480985 | Steuergerät intern - Bosch - Ecu - RAM Adressierungstest fehlgeschlagen | 0 |
| 0x480986 | Steuergerät intern - Bosch - Ecu - RAM Checkpatterntest fehlgeschlagen | 0 |
| 0x480987 | Steuergerät intern - Bosch - Ecu - HET-Module: RAM Adressierungstest fehlgeschlagen | 0 |
| 0x480988 | Steuergerät intern - Bosch - Ecu - HET-Module: RAM Checkpatterntest  fehlgeschlagen | 0 |
| 0x480989 | Steuergerät intern - Bosch - Ecu - Aufstarttest: Enable dauerhaft aus | 0 |
| 0x48098A | Steuergerät intern - Bosch - Ecu - interne Datenübertragung: Auftrag nicht angenommen | 0 |
| 0x48098B | Steuergerät intern - Bosch - Ecu - interne Datenübertragung: Auftrag nicht bearbeitet | 0 |
| 0x48098C | Steuergerät intern - Bosch - Ecu - interne Datenübertragung: Fehlerhafte Antwort | 0 |
| 0x48098D | Steuergerät intern - Bosch - Ecu - Selbsttest Kontinuität | 0 |
| 0x48098E | Steuergerät intern - Bosch - Ecu - Selbsttest: Signature verschieden in AS oder SS | 0 |
| 0x48098F | Steuergerät intern - Bosch - Ecu - Allgemeiner Fehler | 0 |
| 0x480990 | Steuergerät intern - Bosch - Ecu - FPS Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. | 0 |
| 0x480991 | Steuergerät intern - Bosch - Ecu - Selbsttest: Signature verschieden in AS oder SS | 0 |
| 0x480992 | Steuergerät intern - Bosch - Ecu - Selbsttest: Timeout in AS | 0 |
| 0x480993 | Steuergerät intern - Bosch - Ecu - Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus(Task)-Timing. | 0 |
| 0x480994 | Steuergerät intern - Bosch - Ecu - Betriebssystem Rechenzyklus (Task) fehlt bzw. nicht aktiviert. | 0 |
| 0x480995 | Steuergerät intern - Bosch - Ecu - Betriebssystem: geringe Background Rechenzyklus(Task)-Aktivität - System ueberlastet ! | 0 |
| 0x480996 | Steuergerät intern - Bosch - Ecu - Undefiniertes Fast-Interrupt-Request (FIQ) aufgetreten | 0 |
| 0x480997 | Steuergerät intern - Bosch - Ecu - Illegaler Opcode gefunden -> Mikrocontroller Mode: undefiniert | 0 |
| 0x480998 | Steuergerät intern - Bosch - Ecu - Programm Abbruch -> Mikrocontroller Mode: Paboard. | 0 |
| 0x480999 | Steuergerät intern - Bosch - Ecu - Daten Abbruch -> Mikrocontroller Mode: Daboard. | 0 |
| 0x48099A | Steuergerät intern - Bosch - Ecu - FPS Status Transfer: SP-Interface timeout im System-Server. | 0 |
| 0x48099B | Steuergerät intern - Bosch - Ecu - FPS Fehlertransfer: SP-Interface timeout im System-Server. | 0 |
| 0x48099C | Steuergerät intern - Bosch - Ecu - FPS Status Transfer: SP-Interface Fehler im System-Server. | 0 |
| 0x48099D | Codierung - Falsches Steuergerät (Anzahl Drucksensoren) | 0 |
| 0x48099E | Steuergerät intern - Bosch - Ecu - Serial-Peripheral-Interface (SPI): ID Anfrage nicht akzeptiert. | 0 |
| 0x48099F | Steuergerät intern - Bosch - Ecu - Serial-Peripheral-Interface (SPI): Uebersetzungsfehler multi IC. | 0 |
| 0x4809A0 | Steuergerät intern - Bosch - Ecu - Serial-Peripheral-Interface (SPI): Uebersetzungsfehler im EEPROM. | 0 |
| 0x4809A1 | Steuergerät intern - Bosch - Ecu - Bandluecke ausserhalb Bereich | 0 |
| 0x4809A2 | Steuergerät intern - Bosch - Ecu - Analog Digital Wandler: Start-Fehler | 0 |
| 0x4809A3 | Steuergerät intern - Bosch - Ecu - Allgemeiner Fehler | 0 |
| 0x4809A4 | Steuergerät intern - Bosch - Ecu - Betriebssystem Ausnahmefehler. | 0 |
| 0x4809A5 | Raddrehzahlsensor - Vorn Links - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809A6 | Raddrehzahlsensor - Vorn Links - Signalflanke fehlt | 0 |
| 0x4809A7 | Raddrehzahlsensor - Vorn Links - Falsche Signalweite | 0 |
| 0x4809A8 | Raddrehzahlsensor - Vorn Links - Luftspalt zu groß | 0 |
| 0x4809A9 | Raddrehzahlsensor - Vorn Links - Dynamischer Signalverlust | 0 |
| 0x4809AA | Raddrehzahlsensor - Vorn Links - Signaleinstreuung | 0 |
| 0x4809AB | Globale Spannungsversorgung - Unterspannung extern | 1 |
| 0x4809AC | Globale Spannungsversorgung - Überspannung extern | 1 |
| 0x4809B1 | Raddrehzahlsensor - Hinten Links - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809B2 | Raddrehzahlsensor - Hinten Links - Signalflanke fehlt | 0 |
| 0x4809B3 | Raddrehzahlsensor - Hinten Links - Falsche Signalweite | 0 |
| 0x4809B4 | Raddrehzahlsensor - Hinten Links - Luftspalt zu groß | 0 |
| 0x4809B5 | Raddrehzahlsensor - Hinten Links - Dynamischer Signalverlust | 0 |
| 0x4809B6 | Raddrehzahlsensor - Hinten Links - Signaleinstreuung | 0 |
| 0x4809B7 | Raddrehzahlsensor - Hinten Links - Fehlender Zahn | 0 |
| 0x4809B8 | Raddrehzahlsensor - Hinten Links - Radschlupfüberwachung | 0 |
| 0x4809BA | Raddrehzahlsensor - Hinten Rechts - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809BB | Raddrehzahlsensor - Hinten Rechts - Signalflanke fehlt | 0 |
| 0x4809BC | Raddrehzahlsensor - Hinten Rechts - Falsche Signalweite | 0 |
| 0x4809BD | Raddrehzahlsensor - Hinten Rechts - Luftspalt zu groß | 0 |
| 0x4809BE | Raddrehzahlsensor - Hinten Rechts - Dynamischer Signalverlust | 0 |
| 0x4809BF | Raddrehzahlsensor - Hinten Rechts - Signaleinstreuung | 0 |
| 0x4809C1 | EMF - Uebernahme nicht möglich | 0 |
| 0x4809C2 | Raddrehzahlsensor - Hinten Rechts - Fehlender Zahn | 0 |
| 0x4809C3 | Raddrehzahlsensor - Hinten Rechts - Radschlupfüberwachung | 0 |
| 0x4809C4 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4809C5 | Raddrehzahlsensor - Vorn Rechts - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809C6 | Raddrehzahlsensor - Vorn Rechts - Signalflanke fehlt | 0 |
| 0x4809C7 | Raddrehzahlsensor - Vorn Rechts - Falsche Signalweite | 0 |
| 0x4809C8 | Raddrehzahlsensor - Vorn Rechts - Luftspalt zu groß | 0 |
| 0x4809C9 | Raddrehzahlsensor - Vorn Rechts - Dynamischer Signalverlust | 0 |
| 0x4809CA | Raddrehzahlsensor - Vorn Rechts - Signaleinstreuung | 0 |
| 0x4809CB | Raddrehzahlsensor - Vorn Rechts - Fehlender Zahn | 0 |
| 0x4809CC | Raddrehzahlsensor - Vorn Rechts - Radschlupfüberwachung | 0 |
| 0x4809CE | Codierung - Falsche Software (Allrad/Heckantieb) | 0 |
| 0x4809CF | Raddrehzahlsensor - Allgemein - Mehrere Sekunden vorhandener Fehlerverdacht von 3-4 RDF führte zu Fehler-Modus. | 0 |
| 0x4809D0 | Raddrehzahlsensor - Allgemein - Drehrichtung unplausibel | 0 |
| 0x4809D1 | Raddrehzahlsensor - Allgemein - Unplausibilitaet bei ABS-Regelung. | 0 |
| 0x4809D2 | Raddrehzahlsensor - Allgemein - Allg. Fehler bei Schlupfueberwachung (Lambda). | 0 |
| 0x4809D3 | Raddrehzahlsensor - Allgemein - Wenige Sekunden vorhandener Fehlerverdacht von 2-3 RDF. Temporaer heilbarer Fehler. | 0 |
| 0x4809D4 | Bremslichtschalter - permanent getretenes Bremspedal (Verdacht) | 0 |
| 0x4809D5 | Raddrehzahlsensor - Allgemein - Vertauschte Raddrehzahlfuehler an Vorderachse | 0 |
| 0x4809D6 | Raddrehzahlsensor - Allgemein - Vertauschte Raddrehzahlfuehler an Hinterachse | 0 |
| 0x4809DD | Globale Spannungsversorgung - Überspannung intern | 0 |
| 0x4809DE | DSC Pumpe Generatorspannung zu hoch | 0 |
| 0x480A00 | Fahrzeugregler - Unplausibilitaet bei Gierratenregelung - FZR-Controlling - | 0 |
| 0x480A01 | Notbremse - Wegen unplausibler Regelung: Blockieren der Raeder wird moeglich gemacht, Notbremse ausgelöst | 0 |
| 0x480A03 | Status Rückwärtsgang - Plausi: Geschwindigkeit zu hoch im Rückwärtsgang | 0 |
| 0x480A04 | Status Rückwärtsgang - Plausi: Gangwahlschalter passt nicht zu Fahrtrichtung | 0 |
| 0x480A05 | Codierung - Variantencodierung - Ungültig | 0 |
| 0x480A06 | Codierung - Variantencodierung - Ausserhalb Bereich | 0 |
| 0x480A07 | FlexRay Hardware - Allgemeiner Fehler | 0 |
| 0x480A09 | Steuergerät intern - Bosch - Asw - Timeout Software Startup Phase | 0 |
| 0x480A0A | Steuergerät intern - Bosch - Asw - Asynchroner Rechenzyklus Task-Counter in Software | 0 |
| 0x480A0B | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Hill Decent Control - HDC | 0 |
| 0x480A0E | Steuergerät intern - Bosch - Ecu - Fehlerhafter Zugriff auf Ventilansteuerungs-Ausgang | 0 |
| 0x480A11 | Bremsbelagsensor - Vorderachse - Verschleissgrenze erreicht | 0 |
| 0x480A12 | Bremsbelagsensor - Hinterachse - Verschleissgrenze erreicht | 0 |
| 0x480A13 | Bremsbelagsensor - Vorderachse - Plausibilität | 0 |
| 0x480A14 | Bremsbelagsensor - Hinterachse - Plausibilität | 0 |
| 0x480A15 | Steuergerät intern - Bosch - Ecu - Radgeschwindigkeit von Hauptprozessor und Coprozessor stimmen nicht ueberein | 0 |
| 0x480A16 | Steuergerät intern - Bosch - Ecu - HET-Modul: Exception | 0 |
| 0x480A17 | Fahrleistungsreduzierung - Fahrleistungsreduzierung durch DSC-Befehl aktiv - Infoeintrag - | 0 |
| 0x480A1A | Steuergerät intern - Bosch - EEPROM - Taster - AVH Taster Aktivierung | 0 |
| 0x480A1B | Steuergerät intern - Bosch - VarCode - Abgespeicherte ungültige Konfiguration oder EEPROM defekt | 0 |
| 0x480A1E | Trennventil - Kreis 2 - Driftfehler: Ventilspannung defekt | 0 |
| 0x480A1F | Ventile allgemein - Überhitzung | 0 |
| 0x480A20 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Hydraulischer Bremsassistent - Hba - | 0 |
| 0x480A21 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Hydraulische Vollverzoegerung - Hvv - | 0 |
| 0x480A23 | Codierung - Falsches Fahrzeug | 0 |
| 0x480A27 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - Berg-Anfahrassistent - Hhc - | 0 |
| 0x480A28 | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: VAFS-SP-Interface Übertragungsfehler des VAFS-Controllers. | 0 |
| 0x480A29 | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: Falscher Speicherzugriff auf den VAFS-Controller. | 0 |
| 0x480A2A | Codierung - Falsches Steuergerät MSA nicht möglich | 0 |
| 0x480A2B | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: ADC Konvertierungsstartfehler des VAFS-Controllers. | 0 |
| 0x480A2C | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: ADC Übertragungsfehler des VAFS-Controllers | 0 |
| 0x480A2D | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: Softwareuebertragungsfehler (ASW-PSW). | 0 |
| 0x480A2E | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: Allg. HSW-Fehler des VAFS-Controllers. | 0 |
| 0x480A2F | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: CAN-Hardwarefehler des VAFS-Controllers. | 0 |
| 0x480A30 | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: CAN Botschafts-Timeout des VAFS-Controllers. | 0 |
| 0x480A31 | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: CAN Signalfehler des VAFS-Controllers. | 0 |
| 0x480A32 | Steuergerät intern - Bosch - Vafs - VAFS-Prozessor: Allg. VAFS-Fehler des VAFS-Controllers | 0 |
| 0x480A33 | DSC Pumpe - Motorrelais Kurzschluss nach KL 31 | 0 |
| 0x480A34 | DSC Pumpe - Motorrelais Ueberlast erkannt | 0 |
| 0x480A35 | Steuergerät intern - Bosch - Ecu - Hydraulik: Flip Flop Reset fehlgeschlagen | 0 |
| 0x480A36 | Steuergerät intern - Bosch - Ecu - Analog Digital Wandler: Selbsttest | 0 |
| 0x480A37 | Steuergerät intern - Bosch - Ecu - System IC Ladungspumpe fehlerhaft | 0 |
| 0x480A38 | Steuergerät intern - Bosch - Ecu - IC Taktung fehlerhaft | 0 |
| 0x480A39 | Raddrehzahlsensor - Vorn Links - Versorgungsleitung: Kurzschluss nach Masse | 0 |
| 0x480A3A | Raddrehzahlsensor - Vorn Links - Sensorleitung: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x480A3B | Raddrehzahlsensor - Vorn Links - Sensorleitung: Kurzschluß nach KL30 | 0 |
| 0x480A3C | Raddrehzahlsensor - Hinten Links - Versorgungsleitung: Kurzschluss nach Masse | 0 |
| 0x480A3D | Raddrehzahlsensor - Hinten Links - Sensorleitung: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x480A3E | Raddrehzahlsensor - Hinten Links - Sensorleitung: Kurzschluß nach KL30 | 0 |
| 0x480A3F | Raddrehzahlsensor - Hinten Rechts - Versorgungsleitung: Kurzschluss nach Masse | 0 |
| 0x480A40 | Raddrehzahlsensor - Hinten Rechts - Sensorleitung: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x480A41 | Raddrehzahlsensor - Hinten Rechts - Sensorleitung: Kurzschluß nach KL30 | 0 |
| 0x480A42 | Raddrehzahlsensor - Vorn Rechts - Versorgungsleitung: Kurzschluss nach Masse | 0 |
| 0x480A43 | Raddrehzahlsensor - Vorn Rechts - Sensorleitung: Kurzschluß nach Masse oder Unterbrechung | 0 |
| 0x480A44 | Raddrehzahlsensor - Vorn Rechts - Sensorleitung: Kurzschluß nach KL30 | 0 |
| 0x480A49 | Codierung - Variantencodierung - Nicht unterstützt | 0 |
| 0x480A4B | Steuergerät intern - Bosch - Ecu - HET-Module: Execution Speed falsch | 0 |
| 0x480A4C | Steuergerät intern - Bosch - Ecu - HET-Module: Duty Cycle falsch | 0 |
| 0x480A4D | Raddrehzahlsensor - Vorn Links - Wert unplausibel | 0 |
| 0x480A4E | Raddrehzahlsensor - Hinten Links - Wert unplausibel | 0 |
| 0x480A4F | Raddrehzahlsensor - Hinten Rechts - Wert unplausibel | 0 |
| 0x480A50 | Raddrehzahlsensor - Vorn Rechts - Wert unplausibel | 0 |
| 0x480A51 | EMF - Anziehen nicht möglich | 0 |
| 0x480A52 | EMF - Parkbremse ueberhitzt | 0 |
| 0x480A53 | EMF - Tasterfehler - Taster defekt | 0 |
| 0x480A54 | EMF - Schnittstelle degradiert | 0 |
| 0x480A55 | EMF - Notentriegelt | 0 |
| 0x480A56 | Steuergerät intern - Bosch - Vafs - VAFS (Value Added Function Server) Versionen inkompatibel | 0 |
| 0x480A57 | Steuergerät intern - Bosch - Vafs - VAFS (Value Added Function Server) Transfer Timeout | 0 |
| 0x480A58 | Steuergerät intern - Bosch - Vafs - VAFS (Value Added Function Server) Data Checksum Fehler | 0 |
| 0x480A59 | Steuergerät intern - Bosch - Vafs - VAFS (Value Added Function Server) allgemeiner Spi Fehler | 0 |
| 0x480A5A | DSC Pumpe - Freilauf Kurzschluss Fehler erkannt | 0 |
| 0x480A5B | DSC Pumpe - gemessene Drehzahl trotz Ansteuerung zu gering - RFP laeuft nicht | 0 |
| 0x480A5C | DSC Pumpe - gemessene Drehzahl bei Ansteuerung zu hoch. | 0 |
| 0x480A5D | DSC Pumpe - MRD Versorungsspannung falsch | 0 |
| 0x480A5E | Steuergerät intern - Bosch - Ecu - Ecu - System IC configuration for C3 motor actuation not possible | 0 |
| 0x480A5F | Steuergerät intern - Bosch - Ecu - Ecu - too much swapped blocks were inconsistent | 0 |
| 0x480A60 | EMF - Montagemodus aktiv und elektrisch gehalten | 0 |
| 0x480A61 | EMF - Schnittstelle ungültig | 0 |
| 0x480A62 | EMF - Lösen nicht möglich | 0 |
| 0x480A63 | Steuergerät intern - Bosch - Temperature - Temperatursignal außerhalb Wertebereich | 0 |
| 0x480A64 | Steuergerät intern - Bosch - Temperature - Temperature Plausibilitätfehler gegen NTC | 0 |
| 0x480A65 | Automatikhold - Taster Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x480A66 | Drucksensor - Drucksensor gegenüber Bremslichtschalter unplausibel | 0 |
| 0x480A67 | Drucksensor - alle Drucksensoren gegenüber Bremslichtschalter unplausibel | 0 |
| 0x480A68 | Drucksensor - Hauptzylinder - Offsetfehler | 0 |
| 0x480A69 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 0 |
| 0x480A6A | Drucksensor - Vorn Links - Offsetfehler | 0 |
| 0x480A6B | Drucksensor - Hinten Links - Offsetfehler | 0 |
| 0x480A6C | Drucksensor - Vorn Links - Impulstest fehlgeschlagen | 0 |
| 0x480A6D | Drucksensor - Hinten Links - Impulstest fehlgeschlagen | 0 |
| 0x480A6E | Steuergerät intern - Bosch - Vr - Ventil Relais VR nicht aus, waehrend Watchdog unterdrueckt (FSA) | 0 |
| 0x480A6F | Trennventil - Kreis 2 - Kurzschluss im Umschaltventil - Spannungsversorung | 0 |
| 0x480A70 | Steuergerät intern - Bosch - Ecu - System IC Watchdog Oszillator Fehler | 0 |
| 0x480A71 | DSC Pumpe - falsches MRAuC Signal erkannt | 0 |
| 0x480A72 | DSC Pumpe - Freilauf Schalter Fehler | 0 |
| 0x480A73 | DSC Pumpe - MRG Test fehlgeschlagen | 0 |
| 0x480A74 | DSC Pumpe - Freilauf Ueberlast Fehler | 0 |
| 0x480A76 | EMF - Tasterfehler - Richtung anziehen | 0 |
| 0x480A77 | EMF - Tasterfehler - Richtung lösen | 0 |
| 0x480A78 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - EMF-Zaehler und Daten | 0 |
| 0x480A79 | Steuergerät intern - Bosch - EEPROM Eintrag ungueltig - EMF Lerndaten im EEPROM unplausibel | 0 |
| 0x480A7A | EMF - Stellvorgang nicht umgesetzt | 0 |
| 0x480A7B | EMF - Stellvorgang nicht rechtzeitig abgeschlossen | 0 |
| 0x480A7C | EMF - Einbremsen aktiv (Infoeintrag) | 0 |
| 0x480A7D | EMF - Zeitverzug EGS - während Anforderung Getriebe-P, während nachziehen | 0 |
| 0x480A7E | EMF - Zeitverzug EGS - während Anforderung Getriebe-P, während Elektrohydraulischen Modus | 0 |
| 0x480A7F | Codierung - Steuergeraet nicht codiert | 0 |
| 0x480A80 | Codierung - ABS Rückfallebene mit EMF Funktion aktiv | 0 |
| 0x480A81 | Codierung - ABS Rückfallebene ohne EMF Funktion aktiv | 0 |
| 0x480A82 | Steuergerät intern - Bosch - FlxSys - Unberechtigte ISR-Aktivierung | 0 |
| 0x480A83 | Codierung - Signatur fehlerhaft | 0 |
| 0x480A84 | Codierung - ungueltige Daten | 0 |
| 0x480A93 | Codierung - Transaktion gescheitert | 0 |
| 0x480A96 | Steuergerät intern - Bosch - Hardware Raddrehzahlsensor allgemein | 0 |
| 0x480A97 | Ventil Relais - Allgemein | 0 |
| 0x480A98 | Raddrehzahlsensor - Allgemein - Fehlerverdacht bei RDF | 0 |
| 0x480AB0 | Raddrehzahlsensor Unterspannung | 0 |
| 0x480AB6 | DSC-Pumpe Rückföderpumpe schwergängig | 0 |
| 0x480AB9 | Steuergerät intern - Bosch EEPROM Allgemeiner Fehler | 0 |
| 0x480ABA | Steuergerät intern - Bosch EEPROM Allgemeiner Fehler Codierbereich | 0 |
| 0x480ABB | Steuergerät intern - Bosch - Hardware System ASIC | 0 |
| 0x480ABC | Steuergerät intern - Bosch - Hardware Ventiltreiber | 0 |
| 0x480AC0 | Codierung - Falsche Antriebsvariante Allrad | 0 |
| 0x480AC1 | Codierung - Falsche Antriebsvariante Hybrid | 0 |
| 0x480AC6 | Elektrohydraulischer Bremsaktuator Generatorspannung zu niedrig | 0 |
| 0xD3441F | Busfehler (Flexray) - Physikalischer Bus Fehler | 0 |
| 0xD34420 | Busfehler (Flexray) - Controller Fehler | 0 |
| 0xD34BFF | Diagnosemaster - Dummy Network DTC | 1 |
| 0xD35418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Timeout | 1 |
| 0xD35419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Checksumme | 1 |
| 0xD3541A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Alive | 1 |
| 0xD3541B | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Sender: ICM_QL - Timeout | 1 |
| 0xD3541C | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Sender: ICM_QL - Checksumme | 1 |
| 0xD3541D | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Sender: ICM_QL - Alive | 1 |
| 0xD35420 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Timeout | 1 |
| 0xD35421 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Checksumme | 1 |
| 0xD35422 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Alive | 1 |
| 0xD35424 | Signalfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Sender: CDM - Ungültig | 1 |
| 0xD35425 | Signalfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Sender: CDM - Undefiniert | 1 |
| 0xD35426 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Ungültig | 1 |
| 0xD35427 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3542C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3542E | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Qualifier | 1 |
| 0xD35434 | Signalfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Ungültig | 1 |
| 0xD35435 | Signalfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD3543A | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) Sender: ICM_QL - Ungültig | 1 |
| 0xD3543B | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) Sender: ICM_QL - Undefiniert | 1 |
| 0xD3543E | Botschaftsfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: RAD1_2 - Timeout | 1 |
| 0xD35442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: RAD1_2 - Ungültig | 1 |
| 0xD35443 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: RAD1_2 - Undefiniert | 1 |
| 0xD35444 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Timeout | 1 |
| 0xD35445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Checksumme | 1 |
| 0xD35448 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Ungültig | 1 |
| 0xD3544A | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Sender: CDM - Timeout | 1 |
| 0xD3544B | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Sender: CDM - Checksumme | 1 |
| 0xD3544C | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Sender: CDM - Alive | 1 |
| 0xD3544D | Signalfehler (Steuerung Crash, ID: CTR_CR ) Sender: ACSM -  Ungültig | 1 |
| 0xD3544E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM, ICM-QL - Ungültig | 1 |
| 0xD35452 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) Sender: DME1 - Timeout | 1 |
| 0xD35454 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) Sender: DME1 - Alive | 1 |
| 0xD35456 | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) Sender: DME1 - Ungültig | 1 |
| 0xD35457 | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) Sender: DME1 - Undefiniert | 1 |
| 0xD3545D | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: ) Sender: DME - Timeout | 1 |
| 0xD3545E | Botschaftsfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3545F | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: ) Sender: DME - Checksumme | 1 |
| 0xD35460 | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: ) Sender: DME - Alive | 1 |
| 0xD35461 | Signalfehler (Daten Bremssystem Motorsteuerung, ID: ) Sender: DME - Ungültig | 1 |
| 0xD35462 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Timeout | 1 |
| 0xD35463 | Signalfehler (Daten Bremssystem Motorsteuerung, ID: ) Sender: DME - Undefiniert | 1 |
| 0xD35466 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD35467 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD3546E | Botschaftsfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3546F | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD35470 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD35473 | Botschaftsfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) Sender:  - Timeout | 1 |
| 0xD35476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Ungültig | 1 |
| 0xD35477 | Signalfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) Sender:  - Ungültig | 1 |
| 0xD35478 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD35479 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD3547A | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD3547C | Signalfehler (Ist Lenkwinkel Vorderachse Reduziert, ID: AVL_STEA_FTAX_RED) Sender:  - Qualifier | 1 |
| 0xD3547E | Signalfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD3547F | Signalfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM, ICM-QL - Timeout | 1 |
| 0xD35494 | Botschaftsfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) Sender: CAS, FEM - Timeout | 1 |
| 0xD35498 | Signalfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) Sender: CAS, FEM - Ungültig | 1 |
| 0xD35499 | Signalfehler (Fahrzeugtyp, ID: FAHRZEUGTYP) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD354A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) Sender: DME1 - Timeout | 1 |
| 0xD354AA | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) Sender: DME1 - Ungültig | 1 |
| 0xD354AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Timeout | 1 |
| 0xD354B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD354B3 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD354B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Ungültig | 1 |
| 0xD354B7 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Undefiniert | 1 |
| 0xD354B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD354B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD354BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD354BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD354BF | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD354C1 | Signalfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Sender: CDM - Qualifier | 1 |
| 0xD354C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD354C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD354C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD354C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD354C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD354CC | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Timeout | 1 |
| 0xD354CD | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Checksumme | 1 |
| 0xD354CE | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Alive | 1 |
| 0xD354D0 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Ungültig | 1 |
| 0xD354D1 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Undefiniert | 1 |
| 0xD354E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Checksumme | 1 |
| 0xD354E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Timeout | 1 |
| 0xD354E9 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Checksumme | 1 |
| 0xD354EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Alive | 1 |
| 0xD354EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Ungültig | 1 |
| 0xD354EF | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Undefiniert | 1 |
| 0xD354F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD354F3 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) Sender: ICM_QL - Checksumme | 1 |
| 0xD354F4 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) Sender: ICM_QL - Alive | 1 |
| 0xD354F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD354F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD354F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Checksumme | 1 |
| 0xD354FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Alive | 1 |
| 0xD354FC | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD354FD | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD3550A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Timeout | 1 |
| 0xD3550B | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Checksumme | 1 |
| 0xD3550C | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Alive | 1 |
| 0xD35510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Ungültig | 1 |
| 0xD35511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Alive | 1 |
| 0xD3551A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3551C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Ungültig | 1 |
| 0xD3551D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35528 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD35529 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD3552A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD3552E | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD3552F | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Timeout | 1 |
| 0xD35539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Checksumme | 1 |
| 0xD3553A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Alive | 1 |
| 0xD3553E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Ungültig | 1 |
| 0xD3553F | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD35543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD35544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Alive | 1 |
| 0xD35548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Ungültig | 1 |
| 0xD35549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Ungültig | 1 |
| 0xD35553 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Undefiniert | 1 |
| 0xD35557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Timeout | 1 |
| 0xD35558 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME1 - Timeout | 1 |
| 0xD35559 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME1 - Checksumme | 1 |
| 0xD3555A | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME1 - Alive | 1 |
| 0xD3555E | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME1 - Ungültig | 1 |
| 0xD3556C | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME1 - Ungültig | 1 |
| 0xD3556D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME1 - Timeout | 1 |
| 0xD35570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Timeout | 1 |
| 0xD35571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Checksumme | 1 |
| 0xD35572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Alive | 1 |
| 0xD35577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Qualifier | 1 |
| 0xD3557A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Ungültig | 1 |
| 0xD3557B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) Sender: DME1 - Undefiniert | 1 |
| 0xD35584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Ungültig | 1 |
| 0xD35585 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Undefiniert | 1 |
| 0xD35586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: FEM, JBBF - Timeout | 1 |
| 0xD3558A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: FEM, JBBF - Ungültig | 1 |
| 0xD3558B | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) Sender: FEM, JBBF - Undefiniert | 1 |
| 0xD3558C | Botschaftsfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD35590 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD35591 | Signalfehler (Relativzeit, ID: RELATIVZEIT) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD35598 | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) Sender: ICM_QL - Timeout | 1 |
| 0xD35599 | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) Sender: ICM_QL - Checksumme | 1 |
| 0xD3559A | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) Sender: ICM_QL - Alive | 1 |
| 0xD3559C | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) Sender: ICM_QL - Ungültig | 1 |
| 0xD3559D | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) Sender: ICM_QL - Undefiniert | 1 |
| 0xD355A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Timeout | 1 |
| 0xD355A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Ungültig | 1 |
| 0xD355A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Undefiniert | 1 |
| 0xD355A6 | Botschaftsfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Timeout | 1 |
| 0xD355A7 | Botschaftsfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Checksumme | 1 |
| 0xD355A8 | Botschaftsfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Alive | 1 |
| 0xD355AA | Signalfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Ungültig | 1 |
| 0xD355AB | Signalfehler (Status ARS, ID: ST_ARS) Sender: ICM_V - Undefiniert | 1 |
| 0xD355AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FEM, FRMFA - Timeout | 1 |
| 0xD355B0 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FEM, FRMFA - Ungültig | 1 |
| 0xD355B1 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FEM, FRMFA - Undefiniert | 1 |
| 0xD355B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ICM_QL, ZBE - Timeout | 1 |
| 0xD355B8 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ICM_QL, ZBE - Ungültig | 1 |
| 0xD355B9 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ICM_QL, ZBE - Undefiniert | 1 |
| 0xD355CA | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Timeout | 1 |
| 0xD355CB | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Checksumme | 1 |
| 0xD355CC | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Alive | 1 |
| 0xD355D0 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Ungültig | 1 |
| 0xD355D1 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) Sender: HSR - Undefiniert | 1 |
| 0xD355E2 | Botschaftsfehler (Status Parkbremse, ID: ST_PBRK) Sender: EMF - Timeout | 1 |
| 0xD355E3 | Botschaftsfehler (Status Parkbremse, ID: ST_PBRK) Sender: EMF - Checksumme | 1 |
| 0xD355E4 | Botschaftsfehler (Status Parkbremse, ID: ST_PBRK) Sender: EMF - Alive | 1 |
| 0xD355E6 | Signalfehler (Status Parkbremse, ID: ST_PBRK) Sender: EMF - Ungültig | 1 |
| 0xD355E7 | Signalfehler (Status Parkbremse, ID: ST_PBRK) Sender: EMF - Undefiniert | 1 |
| 0xD355EA | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) Sender: ICM-QL - Timeout | 1 |
| 0xD355EB | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) Sender: ICM-QL - Checksumme | 1 |
| 0xD355EC | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) Sender: ICM-QL - Alive | 1 |
| 0xD355F0 | Signalfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD ) Sender: ICM-QL -  Ungültig | 1 |
| 0xD355F2 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) Sender: ACSM - Timeout | 1 |
| 0xD355F3 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) Sender: ACSM - Checksumme | 1 |
| 0xD355F4 | Botschaftsfehler  (Steuerung Crash, ID: CTR_CR ) Sender: ACSM -  Alive | 1 |
| 0xD3561C | Botschaftsfehler (Toleranzabgleich Rad, ID: TOMA_WHL) Sender: ICM_QL - Timeout | 1 |
| 0xD35620 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) Sender: ICM_QL - Ungültig | 1 |
| 0xD35621 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Timeout | 1 |
| 0xD35647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Checksumme | 1 |
| 0xD35648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Alive | 1 |
| 0xD3564C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Ungültig | 1 |
| 0xD3564D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Undefiniert | 1 |
| 0xD35652 | Botschaftsfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) Sender: CAS, FEM - Timeout | 1 |
| 0xD35656 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) Sender: CAS, FEM - Ungültig | 1 |
| 0xD35657 | Signalfehler (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD35672 | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35677 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Qualifier | 1 |
| 0xD3567A | Signalfehler (Status Parkbremse, ID: ST_PBRK) Sender: EMF - Qualifier | 1 |
| 0xD356A1 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Alive | 1 |
| 0xD356A2 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Checksumme | 1 |
| 0xD356D4 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) Sender: ICM_QL - Timeout | 1 |
| 0xD356D5 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) Sender: ICM_QL - Alive | 1 |
| 0xD356D8 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) Sender: ICM_QL - Checksumme | 1 |
| 0xD356E4 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Timeout | 1 |
| 0xD356E5 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Checksumme | 1 |
| 0xD356E6 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Alive | 1 |
| 0xD356F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Timeout | 1 |
| 0xD356F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Alive | 1 |
| 0xD35744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Timeout | 1 |
| 0xD35745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Checksumme | 1 |
| 0xD35746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Alive | 1 |
| 0xD3574D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME1 - Checksumme | 1 |
| 0xD3574E | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME1 - Alive | 1 |
| 0xD35751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Checksumme | 1 |
| 0xD35752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Alive | 1 |
| 0xD35755 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Timeout | 1 |
| 0xD35757 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Checksumme | 1 |
| 0xD35758 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Alive | 1 |
| 0xD357E1 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Qualifier | 1 |
| 0xD357E2 | Signalfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Qualifier | 1 |
| 0xD357EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD358E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Timeout | 1 |
| 0xD358F8 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Ungültig | 1 |
| 0xD358F9 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Undefiniert | 1 |
| 0xD35907 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) Sender: ICM_QL - Timeout | 1 |
| 0xD35909 | Signalfehler (Status ZFM, ID: ST_ZFM) Sender: ICM_QL - Ungültig | 1 |
| 0xD3590A | Signalfehler (Status ZFM, ID: ST_ZFM) Sender: ICM_QL - Qualifier | 1 |
| 0xD3593C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Timeout | 1 |
| 0xD3593E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Alive | 1 |
| 0xD35940 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Ungültig | 1 |
| 0xD35941 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Undefiniert | 1 |
| 0xD35948 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Ungültig | 1 |
| 0xD35949 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Undefiniert | 1 |
| 0xD3594E | Botschaftsfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Timeout | 1 |
| 0xD35952 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Ungültig | 1 |
| 0xD35953 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Undefiniert | 1 |
| 0xD359AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD359CA | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) Sender: DME1 - Qualifier | 1 |
| 0xD359F4 | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) Sender: ICM_QL - Qualifier | 1 |
| 0xD359FC | Botschaftsfehler (Rad Last, ID: WHL_LD) Sender: ICM_V, VDC1 - Timeout | 1 |
| 0xD359FD | Botschaftsfehler (Rad Last, ID: WHL_LD) Sender: ICM_V, VDC1 - Checksumme | 1 |
| 0xD359FE | Botschaftsfehler (Rad Last, ID: WHL_LD) Sender: ICM_V, VDC1 - Alive | 1 |
| 0xD35A00 | Signalfehler (Rad Last, ID: WHL_LD) Sender: ICM_V, VDC1 - Ungültig | 1 |
| 0xD35A01 | Signalfehler (Rad Last, ID: WHL_LD) Sender: ICM_V, VDC1 - Undefiniert | 1 |
| 0xD35A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Timeout | 1 |
| 0xD35A0A | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Alive | 1 |
| 0xD35A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Ungültig | 1 |
| 0xD35A0D | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Undefiniert | 1 |
| 0xD35A31 | Signalfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A41 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A61 | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A64 | Signalfehler (Rad Last, ID: WHL_LD) Sender: ICM_V, VDC1 - Qualifier | 1 |
| 0xD35A69 | Signalfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A74 | Botschaftsfehler (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) Sender: DME1 - Timeout | 1 |
| 0xD35A78 | Signalfehler (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) Sender: DME1 - Ungültig | 1 |
| 0xD35A84 | Signalfehler (Toleranzabgleich Rad, ID: TOMA_WHL) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A94 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) Sender: ICM_V - Qualifier | 1 |
| 0xD35A9C | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Qualifier | 1 |
| 0xD35B00 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Timeout | 1 |
| 0xD35B01 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Checksumme | 1 |
| 0xD35B02 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Alive | 1 |
| 0xD35B03 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Qualifier | 1 |
| 0xD35B04 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Ungültig | 1 |
| 0xD35B05 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Undefiniert | 1 |
| 0xD35B18 | Botschaftsfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD35B19 | Botschaftsfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD35B1A | Botschaftsfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD35B1C | Signalfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD35B21 | Botschaftsfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) Sender: EME15, EME20 - Timeout | 1 |
| 0xD35B22 | Signalfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) Sender: EME15, EME20 - Ungültig | 1 |
| 0xD35B23 | Signalfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) Sender: EME15, EME20 - Undefiniert | 1 |
| 0xD35B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD35B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD35B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Alive | 1 |
| 0xD35B30 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) Sender: ICM_QL - Timeout | 1 |
| 0xD35B31 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) Sender: ICM_QL - Checksumme | 1 |
| 0xD35B32 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) Sender: ICM_QL - Alive | 1 |
| 0xD35B34 | Signalfehler (Lenkwinkel Offset, ID: STEA_OFFS) Sender: ICM_QL - Ungültig | 1 |
| 0xD35B35 | Signalfehler (Lenkwinkel Offset, ID: STEA_OFFS) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Timeout | 1 |
| 0xD35B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Checksumme | 1 |
| 0xD35B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Alive | 1 |
| 0xD35B43 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Timeout | 1 |
| 0xD35B44 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Checksumme | 1 |
| 0xD35B45 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Alive | 1 |
| 0xD35B47 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Ungültig | 1 |
| 0xD35B48 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Undefiniert | 1 |
| 0xD35C09 | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt, ID: VEH_DYNMC_DT_ESTI) Sender: ICM_QL - Timeout | 1 |
| 0xD35C0B | Botschaftsfehler (Höhenstände EHC, ID: Hoehenstand_EHC) Sender: EHC - Timeout | 1 |
| 0xD35C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Timeout | 1 |
| 0xD35C34 | Botschaftsfehler (Höhenstände EHC, ID: Hoehenstand_EHC) Sender: EHC - Checksumme | 1 |
| 0xD35C35 | Botschaftsfehler (Höhenstände EHC, ID: Hoehenstand_EHC) Sender: EHC - Alive | 1 |
| 0xD36C05 | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD36C09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Undefiniert | 1 |
| 0xD36C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Undefiniert | 1 |
| 0xD36C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Undefiniert | 1 |
| 0xD36C1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD36C22 | Signalfehler (Höhenstände EHC, ID: Hoehenstand_EHC) Sender: EHC - Ungültig | 1 |
| 0xD36C23 | Signalfehler (Höhenstände EHC, ID: Hoehenstand_EHC) Sender: EHC - Undefiniert | 1 |
| 0xD36C2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD36C2C | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD36C3A | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME1 - Undefiniert | 1 |
| 0xD36C3B | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME1 - Undefiniert | 1 |
| 0xD36C44 | Signalfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Ungültig | 1 |
| 0xD36C58 | Signalfehler (Status ZFM, ID: ST_ZFM) Sender: ICM_QL - Undefiniert | 1 |
| 0xD36C81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Ungültig | 1 |
| 0xD36C82 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Undefiniert | 1 |
| 0xD36C84 | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Sender: ICM_QL - Ungültig | 1 |
| 0xD36C85 | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Sender: ICM_QL - Undefiniert | 1 |
| 0xD36C86 | Signalfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) Sender: ICM_QL - Qualifier | 1 |
| 0xD36D01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Qualifier | 1 |
| 0xD36D44 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) Sender: LMV - Qualifier | 1 |
| 0xD36D54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Qualifier | 1 |
| 0xD36D58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) Sender: DME1 - Qualifier | 1 |
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
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | _STATUS_STEUERGERAET | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x170C | Betriebsspannung | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x5000 | Absolute Geschwindigkeit | km/h | high | unsigned int | - | 5625 | 100000 | 0 |
| 0x5001 | DSC Betriebsmodus | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x5002 | Fahrzeugzustand | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x5004 | Antriebszustand | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x5006 | Betriebsspannung | V | high | unsigned char | - | 8 | 100 | 0 |
| 0x5008 | Spannungmaster | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x500A | Fahrzeuggeschwindigkeit | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x500B | Funktionszustand | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x500C | int. Funktionszustand | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x500E | int. Fehlernummer | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x500F | Fehlerspeichersperre | 0/1 | high | 0x01 | - | - | - | - |

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
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4001 | _STATUS_STEUERGERAET | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x170C | Betriebsspannung | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x5000 | Absolute Geschwindigkeit | km/h | high | unsigned int | - | 5625 | 100000 | 0 |
| 0x5001 | DSC Betriebsmodus | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x5002 | Fahrzeugzustand | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x5004 | Antriebszustand | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x5006 | Betriebsspannung | V | high | unsigned char | - | 8 | 100 | 0 |
| 0x5008 | Spannungmaster | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x500A | Fahrzeuggeschwindigkeit | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x500B | Funktionszustand | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x500C | int. Funktionszustand | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x500E | int. Fehlernummer | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x500F | Fehlerspeichersperre | 0/1 | high | 0x01 | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABS_FUNKTION | 0xDC6C | - | Auslesen Status Funktion Antiblockiersystem (ABS) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6C |
| ASC_FUNKTION | 0xDC6D | - | Auslesen Status Funktion Antriebsschlupfregelung (ASC) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6D |
| AUTOHOLDLED | 0xDC1D | - | Auslesen und Vorgeben AutoHold LED | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC1D | RES_0xDC1D |
| AUTOHOLDTASTER | 0xDBDE | STAT_AUTOHOLD_TASTER_EIN | Auslesen Zustand AutoHold Taster | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BPWS_INITIALISIERUNG | 0xA067 | - | Starten, Stoppen und Status Initialisierung Nullstellung Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA067 | RES_0xA067 |
| BREMSBELAGSSENSOR | 0xDBDF | - | Auslesen Bremsbelagssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDF |
| BREMSFLUESSIGKEITSSCHALTER | 0xDC1F | STAT_BREMSFLUESSIGKEIT_NIVEAU_SCHALTER_EIN | Auslesen Niveau Bremsflüssigkeit | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BREMSPEDALWEGSENSOR | 0xDBF5 | - | Auslesen Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF5 |
| BREMSREKUPERATIONSMOMENT | 0xDBF6 | - | Auslesen Radmoment Bremsrekuperation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF6 |
| DSC_BEFUELLUNG | 0xA060 | - | Starten, Stoppen und Status Befüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA060 | RES_0xA060 |
| DSC_BREMSLICHTSCHALTER | 0xDC1E | STAT_SCHALTER_BREMSLICHT_EIN | Auslesen Bremslichtschalter | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| DSC_DRUCKSENSOREN | 0xDBE5 | - | Auslesen Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE5 |
| DSC_ENTLUEFTUNG | 0xA061 | - | Starten, Stoppen und Status Entlüftung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA061 | RES_0xA061 |
| DSC_KLEMMEN | 0xDBE7 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE7 |
| DSC_PUMPE | 0xDBE8 | - | Auslesen und Vorgeben Ansteuerung Pumpe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDBE8 | RES_0xDBE8 |
| DSC_PUMPENFUNKTIONSPRUEFUNG | 0xA066 | - | Starten, Stoppen und Status Funktionsprüfung Pumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA066 | RES_0xA066 |
| DSC_VAKUUMBEFUELLUNG | 0xA06D | - | Starten (Weiterschalten), Stoppen und Status Vakuumbefüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06D | RES_0xA06D |
| DSC_VENTILE | 0xDBE9 | - | Auslesen und Vorgeben Ansteuerung Ventile | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDBE9 | RES_0xDBE9 |
| DSC_VENTILE_PULS | 0xA064 | - | Starten, Stoppen und Status Puls Ventile (max. 6 gleichzeitig) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA064 | RES_0xA064 |
| EMF_EINBREMSPROZEDUR | 0xA802 | - | Starten, Stoppen und Status Einbremsen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA802 |
| FDR_FUNKTION | 0xDC6E | - | Auslesen Status Funktion Fahrzeugstabilisierung (FDR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6E |
| GESCHWINDIGKEIT_RAD | 0xDBE4 | - | Auslesen Raddrehzahlfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE4 |
| HDC_FUNKTION | 0xDC70 | - | Auslesen Status Funktion Bergabfahrassistent (HDC) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC70 |
| LMV_FUNKTION | 0xDBE1 | - | Auslesen und Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE1 | RES_0xDBE1 |
| PBRK_FUNKTION | 0xDC6F | - | Auslesen Status Funktion Parkbremse (PBRK) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6F |
| RADDREHZAHLSENSORPRUEFUNG | 0xA065 | - | Starten, Stoppen und Status Funktionsprüfung Raddrehzahlsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA065 | RES_0xA065 |
| REKU_FUNKTION | 0xDBE2 | - | Auslesen und Vorgeben Aktivierung Funktion Rekuperation (Bremsenergierückgewinnung) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE2 | RES_0xDBE2 |
| RPA_LERNDATEN_FASTA | 0xDBE0 | - | Auslesen diverser Lerndaten für FASTA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE0 |
| RPA_RESET_FASTA | 0xA069 | - | Reset RPA Lerndaten FASTA | - | - | - | - | - | - | - | - | - | 31 | - | - |
| VAKUUMSENSOR | 0xDBF4 | - | Auslesen Vakuumsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF4 |
| DSC_DIGITALEINGAENGE | 0x4002 | - | Auslesen Digital Eingänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002 |
| VIN | 0xF190 | STAT_FAHRGESTELLNUMMER_WERT | Fahrgestellnummer | - | - | high | string[17] | - | 1 | 1 | 0 | - | 22 | - | - |
| _BUILDINFO | 0x400E | - | Auslesen Build Information | - | - | - | - | - | - | - | - | 0x29 | 22 | - | RES_0x400E |
| _DSC_FASTA | 0x5010 | STAT_DATEN_WERT | Daten | - | - | - | data[63] | - | - | - | - | - | 22 | - | - |
| _DSC_KLEMMEN | 0xEBE7 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xEBE7 |
| _DSC_SERIENNUMMER_BOSCH | 0x400D | - | Auslesen Bosch Seriennummer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400D |
| _DSC_WERKSZUSTAND | 0xF015 | - | Löschen aller EEPROM Daten | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _REIFENPANNENANZEIGE | 0x4005 | - | Auslesen Reifenpannenanzeige | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005 |
| _RPA_INITIALISIERUNG | 0xF010 | - | Starten Initialisierung(Standardisierung) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _RPA_LERNDATEN_STD_RB | 0x4007 | - | Auslesen Lerndaten Standardisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007 |
| _RPA_RESET_PANNE | 0xF011 | - | Starten Reset Panne (Standardisierung bleibt erhalten) | - | - | - | - | - | - | - | - | - | 31 | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x4806A7 | Codierung - Variantencodierung - Anhängerschlingerlogik deaktiviert | 0 |
| 0x4806A9 | Steuergerät intern - Bosch - Ecu - Robert Bosch Fehlerspeicher: Warteschlange voll | 0 |
| 0x4806E4 | Codierung - Variantencodierung - Anhängerschlingerlogik deaktiviert | 0 |
| 0x480933 | Codierung - Variantencodierung - Zusatzfunktionen deaktiviert | 0 |
| 0x480A18 | Fahrleistungsreduzierung - Fahrleistungsreduzierung durch DSC-Befehl abgeschaltet - Infoeintrag - | 0 |
| 0x480ABD | Entwicklung Diagnoseschnittstelle HW-Error | 0 |
| 0x480ABE | Entwicklung SW-Konfigurationsfehler | 0 |
| 0x480AC7 | Raddrehzahlsensor Allgemein Verdacht Luftspalt | 0 |
| 0xD36400 | Busfehler (Flexray) - Initialisierung fehlgeschlagen | 0 |
| 0xD36401 | Busfehler (Flexray) - Synchronisierung verloren | 0 |
| 0xD36402 | Busfehler (Flexray) - POC Status Halt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### RES_0X4005

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B_0x4005_1 | - | - | - | BIT | high | BITFIELD | - | B_0x4005_1 | - | - | - | - | - | - |
| B_0x4005_2 | - | - | - | BIT | high | BITFIELD | - | B_0x4005_2 | - | - | - | - | - | - |
| STAT_NAEHERUNG_WARNGRENZE_S_WERT | - | - | - | % | high | unsigned char | - | - | 1 | 1 | 0 | - | - | aktueller Wert in % bis Erreichung der eingestellten S-Warngrenze |
| STAT_DSC_SIGNAL_VR_WERT | - | - | - | km/h | high | unsigned char | - | - | 1 | 1 | 0 | - | - | Radgeschwindigkeit |
| STAT_DSC_SIGNAL_VL_WERT | - | - | - | km/h | high | unsigned char | - | - | 1 | 1 | 0 | - | - | Radgeschwindigkeit |
| STAT_DSC_SIGNAL_HR_WERT | - | - | - | km/h | high | unsigned char | - | - | 1 | 1 | 0 | - | - | Radgeschwindigkeit |
| STAT_DSC_SIGNAL_HL_WERT | - | - | - | km/h | high | unsigned char | - | - | 1 | 1 | 0 | - | - | Radgeschwindigkeit |
| STAT_DEFLATION_POSITON | - | - | - | 0-n | high | unsigned char | - | TAB_DSC_RADPOSITION | - | - | - | - | - | Position des druckreduzierten Rades |

### RES_0X400D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_WERT | - | - | + | - | high | data[5] | - | - | 1 | 1 | 0 | - |

### RES_0X4002

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B_0x4002 | - | - | - | BIT | high | BITFIELD | - | B_0x4002 | - | - | - | - | - | - |

### B_0X4002

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSLICHT_SCHALTER_EIN | - | - | - | 0/1 | high | int | 0x0002 | - | - | - | - | - | - | 1 = ein; 0 = aus |
| STAT_BREMSFLUESSIGKEIT_NIVEAU_SCHALTER_EIN | - | - | - | 0/1 | high | int | 0x0004 | - | - | - | - | - | - | 1 = ein; 0 = aus |
| STAT_AUTOHOLD_TASTER_EIN | - | - | - | 0/1 | high | int | 0x1000 | - | - | - | - | - | - | 1 = ein; 0 = aus |

### B_0X4005_1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARNUNG_AKTIV | - | - | - | 0/1 | high | char | 0x01 | - | - | - | - | - | - | Anzeige ob Warnung anliegt; keine Warnung = 0; Warnung = 1 |
| STAT_REJECTION_PHASE | - | - | - | 0/1 | high | char | 0x02 | - | - | - | - | - | - | Zurückweisung aktiv; nicht aktiv = 0; aktiv = 1 |
| STAT_SYSTEMFUNKTION_AKTIV | - | - | - | 0/1 | high | char | 0x04 | - | - | - | - | - | - | RPA-System aktiv; nicht aktiv = 0; aktiv = 1 |
| STAT_STANDARDISIERUNG_AKTIV | - | - | - | 0/1 | high | char | 0x08 | - | - | - | - | - | - | Standardisierung aktiv; nicht aktiv  = 0; aktiv = 1 |
| STAT_BLINDPHASE_AKTIV | - | - | - | 0/1 | high | char | 0x10 | - | - | - | - | - | - | Blindphase zu Beginn einer Standardisierung (bis erste Warnung möglich ist); nicht aktiv = 0; aktiv = 1 |
| STAT_BREMSLICHTSCHALTER_AKTIV | - | - | - | 0/1 | high | char | 0x20 | - | - | - | - | - | - | Bremslichtschalter; nicht aktiv = 0; aktiv = 1 |

### B_0X4005_2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLATTROLLEN_ERKANNT | - | - | - | 0/1 | high | char | 0x10 | - | - | - | - | - | - | Wurde ein platter Reifen erkannt (für Schiefstellung der EHC); nicht erkannt = 0; erkannt = 1 |
| STAT_3PLUS1_ERKANNT | - | - | - | 0/1 | high | char | 0x20 | - | - | - | - | - | - | Anzeige ob 3Plus1-Konstellation erkannt wurde; nicht erkannt = 0; erkannt = 1 |
| STAT_NEUREIFEN_ERKANNT | - | - | - | 0/1 | high | char | 0x40 | - | - | - | - | - | - | Anzeige ob Neureifen-Konstellation erkannt wurde; nicht erkannt = 0; erkannt = 1 |

### RES_0X4007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIGMAX2_R_WERT | Nm2 | high | unsigned long | - | - | 1 | 1 | 0 | - |
| STAT_SIGMAXY_R_WERT | Nm*DEL | high | unsigned long | - | - | 1 | 1000 | 0 | - |
| STAT_SIGMAX_R_WERT | Nm | high | unsigned long | - | - | 1 | 1 | 0 | - |
| STAT_SIGMAY_R_WERT | DEL | high | unsigned long | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R0_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R1_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R2_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R3_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R4_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R5_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL1_R6_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R0_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R1_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R2_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R3_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R4_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R5_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_SPEEDWINSTDDEL3_R6_WERT | DEL | high | unsigned int | - | - | 1 | 1000 | 0 | - |
| STAT_D1NSVL_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 0 |
| STAT_D1NSVH1_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 1 |
| STAT_D1NSVH2_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 2 |
| STAT_D1NSVH3_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 3 |
| STAT_D1NSVH4_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 4 |
| STAT_D1NSVH5_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 5 |
| STAT_D1NSVH6_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | Lernfortschritt Geschwindigkeitsbereich 6 |
| STAT_D2TT_R0_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R1_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R2_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R3_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R4_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R5_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R6_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R7_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R8_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R9_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R10_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R11_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R12_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_D2TT_R13_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASHSIGMAX2_R_WERT | Nm2 | high | unsigned long | - | - | 1 | 1 | 0 | - |
| STAT_DASHSIGMAXY_R_WERT | Nm*DEL | high | unsigned long | - | - | 1 | 1000 | 0 | - |
| STAT_DASHSIGMAX_R_WERT | Nm | high | unsigned long | - | - | 1 | 1 | 0 | - |
| STAT_DASHSIGMAY_R_WERT | DEL | high | unsigned long | - | - | 1 | 1000 | 0 | - |
| STAT_STDSTARTODM_WERT | km | high | unsigned int | - | - | 10 | 1 | 0 | - |
| STAT_DASH2TT_R0_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R1_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R2_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R3_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R4_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R5_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R6_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R7_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R8_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R9_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R10_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R11_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R12_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_DASH2TT_R13_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_SMOOTHCHANGEFLG_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_NEWTYREFLG_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_SIGMADEL1LATGRIGHTHIGH_R_WERT | DEL/g | high | unsigned int | - | - | 1 | 100 | 0 | - |
| STAT_SIGMADEL1LATGLEFTHIGH_R_WERT | DEL/g | high | unsigned int | - | - | 1 | 100 | 0 | - |
| STAT_SIGMADEL1LATGRIGHTLOW_R_WERT | DEL/g | high | unsigned int | - | - | 1 | 100 | 0 | - |
| STAT_SIGMADEL1LATGLEFTLOW_R_WERT | DEL/g | high | unsigned int | - | - | 1 | 100 | 0 | - |
| STAT_SIGMANRIGHTHIGH_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_SIGMANLEFTHIGH_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_SIGMANRIGHTLOW_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_SIGMANLEFTLOW_R_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R0_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R1_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R2_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R3_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R0_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R1_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R2_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R3_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R0_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R1_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R2_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R3_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R0_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R1_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R2_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R3_WERT | DEL/g | high | unsigned char | - | - | 1 | 1 | 0 | - |
| STAT_CHECKSUM_WERT | - | high | unsigned char | - | - | 1 | 1 | 0 | - |

### RES_0XEBE7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Elektronikversorgung |
| STAT_SPANNUNG_PUMPE_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Pumpenversorgung |
| STAT_SPANNUNG_VENTILE_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Ventilversorgung |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | high | unsigned int | - | - | 1 | 1000 | 0 | Spannung Weckleitung |

### RES_0X400E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BBNUMMER_WERT | - | - | string[5] | - | - | - | - | - | BB Nummer |
| STAT_VERSION_TYPE_WERT | - | - | string[1] | - | - | - | - | - | Version Type |
| STAT_BASE_VERSION_WERT | - | - | string[4] | - | - | - | - | - | Base Version |
| STAT_BRANCH_WERT | - | - | string[4] | - | - | - | - | - | Branch |
| STAT_DATUM_WERT | - | - | string[10] | - | - | - | - | - | Datum |
| STAT_ZEIT_WERT | - | - | string[8] | - | - | - | - | - | Zeit |
| STAT_ENTWICKLER_WERT | - | - | string[8] | - | - | - | - | - | Entwickler |

### RES_0XDBDF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PILLE_VA | 0-n | - | unsigned char | - | TAB_BBV_SENSOR | - | - | - | Bremsbelagspille Vorderachse |
| STAT_PILLE_HA | 0-n | - | unsigned char | - | TAB_BBV_SENSOR | - | - | - | Bremsbelagspille Hinterachse |

### TAB_BBV_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | 1. Stufe erreicht |
| 0x02 | 2. Stufe erreicht |
| 0xFF | nicht verfügbar |

### RES_0XDBE0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RPA_VEH_NUM_ACTUAL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Variante RPA-Software |
| STAT_RPA_MAJOR_NUM_ACTUAL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion  RPA-Software |
| STAT_RPA_REV_NUM_ACTUAL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion der RPA-Software |
| STAT_RPA_VEH_NUM_LASTCODING_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Variante RPA-Software letzte Codierung |
| STAT_RPA_MAJOR_NUM_LASTCODING_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion  RPA-Software letzte Codierung |
| STAT_RPA_REV_NUM_LASTCODING_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion RPA-Software letzte Codierung |
| STAT_KM_LETZTE_STANDARDISIERUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte Standardisierung |
| STAT_KM_VORLETZTE_STANDARDISIERUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte Standardisierung |
| STAT_WEG_SEIT_STANDARDISIERUNG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke seit letzter Standardisierung |
| STAT_TAGE_SEIT_STANDARDISIERUNG_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit letzter Standardisierung |
| STAT_KM_LETZTE_PANNE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte Erkennung Panne |
| STAT_WEG_MIT_LETZTER_PANNE_WERT | km | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Wegstrecke seit letzter Erkennung Panne |
| STAT_TAGE_SEIT_LETZTER_PANNE_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit letzter Erkennung Panne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit während letzter Erkennung Panne |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | max Geschwindigkeit während letzter Erkennung Panne |
| STAT_KM_VORLETZTE_PANNE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte Erkennung Panne |
| STAT_WEG_MIT_VORLETZTER_PANNE_WERT | km | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Wegstrecke seit vorletzer Erkennung Panne |
| STAT_TAGE_SEIT_VORLETZTER_PANNE_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit vorletzter Erkennung Panne |
| STAT_GESCHWINDIGKEIT_VORLETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit während letzter Erkennung Panne |
| STAT_GESCHWINDIGKEIT_MAX_VORLETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | max Geschwindigkeit während letzter Erkennung Panne |
| STAT_NEUREIFEN_POSITON | 0-n | - | unsigned char | - | TAB_DSC_RADPOSITION | 1.0 | 1.0 | 0.0 | Position Neureifen |
| STAT_WEG_3PLUS1_ERKENNUNG_NACH_STANDARDISIERUNG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke Erkennung 3PLUS1 seit Standardisierung |
| STAT_WEG_NEUREIFEN_ERKENNUNG_NACH_STANDARDISIERUNG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke Erkennung Neureifen seit Standardisierung |
| STAT_WGFLG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnung Typ |
| STAT_WEG_LETZTE_PANNE_STUFE_2_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wegstrecke seit letzer Erkennung Panne Stufe 2 |
| STAT_MAX_DELAV_S_SEIT_STANDARDISIERUNG_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | max Näherung Warngrenze seit letzter Standardisierung |
| STAT_RESERVE1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | nicht verwendet |
| STAT_RESERVE2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | nicht verwendet |
| STAT_RESERVE3_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | nicht verwendet |

### TAB_DSC_RADPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | keine |
| 0x01 | vorn links |
| 0x02 | vorn rechts |
| 0x03 | hinten links |
| 0x04 | hinten rechts |
| 0xFF | nicht definiert |

### RES_0XDBE1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### ARG_0XDBE1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### RES_0XDBE2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### ARG_0XDBE2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### RES_0XDBE4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_RAD_VL_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne links |
| STAT_GESCHWINDIGKEIT_RAD_VR_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne rechts |
| STAT_GESCHWINDIGKEIT_RAD_HL_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten links |
| STAT_GESCHWINDIGKEIT_RAD_HR_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten rechts |
| STAT_GESCHWINDIGKEIT_FZG_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Fahrzeuggeschwindigkeit |
| STAT_DREHRICHTUNG_VL | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | - | - | - | Raddrehrichtung vorne links |
| STAT_DREHRICHTUNG_VR | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | - | - | - | Raddrehrichtung vorne rechts |
| STAT_DREHRICHTUNG_HL | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | - | - | - | Raddrehrichtung hinten links |
| STAT_DREHRICHTUNG_HR | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | - | - | - | Raddrehrichtung hinten rechts |
| STAT_DREHRICHTUNG_REF | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | - | - | - | Fahrrichtung |
| STAT_SIGNALQUALITAET_VL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität vorne links x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |
| STAT_SIGNALQUALITAET_VR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität vorne rechts x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |
| STAT_SIGNALQUALITAET_HL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität hinten links x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |
| STAT_SIGNALQUALITAET_HR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität hinten rechts x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |

### TAB_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stand |
| 0x01 | Vorwaerts |
| 0x02 | Rueckwaerts |
| 0x03 | nicht definiert |

### RES_0XDBE5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_KREIS1_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck Kreis 1 |
| STAT_DRUCK_KREIS2_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck Kreis 2 |
| STAT_DRUCK_VL_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck vorne links |
| STAT_DRUCK_VR_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck vorne rechts |
| STAT_DRUCK_HL_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck hinten links |
| STAT_DRUCK_HR_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck hinten rechts |

### RES_0XDBE7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Elektronikversorgung |
| STAT_SPANNUNG_PUMPE_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Pumpenversorgung |
| STAT_SPANNUNG_VENTILE_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Ventilversorgung |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Weckleitung |

### RES_0XDBE8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMPE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1 = ein; 0 = aus |

### ARG_0XDBE8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PUMPE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = ein; 0 = aus |

### RES_0XDBE9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLASSVENTIL_VL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil vorne links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_EINLASSVENTIL_VR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil vorne rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_EINLASSVENTIL_HL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil hinten links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_EINLASSVENTIL_HR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil hinten rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_VL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil vorne links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_VR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil vorne rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_HL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil hinten links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_HR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil hinten rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_VORLADEVENTIL_VA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorladeventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_VORLADEVENTIL_HA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorladeventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_TRENNVENTIL_VA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Trennventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_TRENNVENTIL_HA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Trennventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |

### ARG_0XDBE9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLASSVENTIL_VL | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einlassventil vorne links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| EINLASSVENTIL_VR | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einlassventil vorne rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| EINLASSVENTIL_HL | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einlassventil hinten links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| EINLASSVENTIL_HR | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Einlassventil hinten rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| AUSLASSVENTIL_VL | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auslassventil vorne links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| AUSLASSVENTIL_VR | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auslassventil vorne rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| AUSLASSVENTIL_HL | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auslassventil hinten links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| AUSLASSVENTIL_HR | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auslassventil hinten rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| VORLADEVENTIL_VA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorladeventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| VORLADEVENTIL_HA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorladeventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| TRENNVENTIL_VA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Trennventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| TRENNVENTIL_HA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Trennventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |

### RES_0XDBF4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_IST_WERT | bar | - | int | - | - | - | 1000.0 | - | aktueller Druck |
| STAT_SPANNUNG_IST_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | aktuelle Spannung |

### RES_0XDBF5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WEG_IST_WERT | mm | - | int | - | - | - | 100.0 | - | aktueller Pedalweg (bezogen auf WEG_NULLPUNKT_IST) |
| STAT_WEG_NULLPUNKT_INIT_WERT | mm | - | int | - | - | - | 100.0 | - | Initialisierung Pedal Nullpunkt |
| STAT_WEG_NULLPUNKT_IST_WERT | mm | - | int | - | - | - | 100.0 | - | aktueller Pedal Nullpunkt |
| STAT_WEG_LEERWEG_IST_WERT | mm | - | int | - | - | - | 100.0 | - | aktueller Pedal Leerweg (Einsatz Hydraulik bezogen auf WEG_NULLPUNKT_IST) |

### RES_0XDBF6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_SOLL_WERT | Nm | - | int | - | - | - | - | - | Sollwert Bremsrekuperation |
| STAT_MOMENT_IST_WERT | Nm | - | int | - | - | - | - | - | Istwert Bremsrekuperation |

### RES_0XDC1D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOHOLD_LED_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1 = LED ein 0 = LED aus |

### ARG_0XDC1D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOHOLDLED_EIN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = LED ein  0 = LED aus |

### RES_0XDC6C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_FUNKTION | 0-n | high | unsigned char | - | TAB_ABS_FUNKTION | - | - | - | Status Funktion Antiblockiersystem (ABS) |
| STAT_ABS_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | - | - | - | Basis Qualifier Funktion Antiblockiersystem (ABS) |
| STAT_ABS_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | - | - | - | Erweiterter Qualifier Funktion Antiblockiersystem (ABS) |

### TAB_ABS_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 2 | verfügbar Rückfallebene |
| 0xFF | ungültig |

### RES_0XDC6D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASC_FUNKTION | 0-n | high | unsigned char | - | TAB_ASC_FUNKTION | - | - | - | Status Funktion Antriebsschlupfregelung (ASC) |
| STAT_ASC_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | - | - | - | Basis Qualifier Funktion Antriebsschlupfregelung (ASC) |
| STAT_ASC_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | - | - | - | Erweiterter Qualifier Funktion Antriebsschlupfregelung (ASC) |

### TAB_ASC_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 2 | verfügbar Rückfallebene |
| 3 | verfügbar Schlupf aufgeweitet |
| 4 | verfügbar Rückfallebene Schlupf aufgeweitet |
| 0xFF | ungültig |

### RES_0XDC6E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FDR_FUNKTION | 0-n | high | unsigned char | - | TAB_FDR_FUNKTION | - | - | - | Status Funktion Fahrzeugstabilisierung (FDR) |
| STAT_FDR_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | - | - | - | Basis Qualifier Funktion Fahrzeugstabilisierung (FDR) |
| STAT_FDR_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | - | - | - | Erweiterter Qualifier Funktion Fahrzeugstabilisierung (FDR) |

### TAB_FDR_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 3 | verfügbar Schlupf aufgeweitet |
| 0xFF | ungültig |

### RES_0XDC6F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PBRK_FUNKTION | 0-n | high | unsigned char | - | TAB_HDC_FUNKTION | - | - | - | Status Funktion Parkbremse (PBRK) |
| STAT_PBRK_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | - | - | - | Basis Qualifier Funktion Parkbremse (PBRK) |
| STAT_PBRK_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | - | - | - | Erweiterter Qualifier Funktion Parkbremse (PBRK) |

### RES_0XDC70

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HDC_FUNKTION | 0-n | high | unsigned char | - | TAB_HDC_FUNKTION | - | - | - | Status Funktion Bergabfahrassistent (HDC) |
| STAT_HDC_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | - | - | - | Basis Qualifier Funktion Bergabfahrassistent (HDC) |
| STAT_HDC_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | - | - | - | Erweiterter Qualifier Funktion Bergabfahrassistent (HDC) |

### TAB_HDC_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 0xFF | ungültig |

### RES_0XA060

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### ARG_0XA060

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | max. Ausführungsdauer |
| ZEIT_PUMPE_EIN | + | - | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Verzögerung Start Pumpe |

### RES_0XA061

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### ARG_0XA061

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_ENTLUEFTUNG | - | - | - | - | - | Phase |
| WIEDERHOLUNG | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Wiederholungen |

### TAB_DSC_PHASE_ENTLUEFTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine |
| 0x01 | VL |
| 0x02 | VR |
| 0x03 | HL |
| 0x04 | HR |
| 0x05 | KREIS1 |
| 0x06 | KREIS2 |
| 0x07 | VORBEREITUNG |
| 0x08 | NACHBEREITUNG |

### RES_0XA064

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### ARG_0XA064

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | max. Ausführungsdauer |
| VENTIL_1 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_1 | + | - | % | - | unsigned char | - | - | - | - | - | - | - | Ventil Ansteuerung |
| VENTIL_2 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_2 | + | - | % | - | unsigned char | - | - | - | - | - | - | - | Ventil Ansteuerung |
| VENTIL_3 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_3 | + | - | % | - | unsigned char | - | - | - | - | - | - | - | Ventil Ansteuerung |
| VENTIL_4 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_4 | + | - | % | - | unsigned char | - | - | - | - | - | - | - | Ventil Ansteuerung |
| VENTIL_5 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_5 | + | - | % | - | unsigned char | - | - | - | - | - | - | - | Ventil Ansteuerung |
| VENTIL_6 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_6 | + | - | % | - | unsigned char | - | - | - | - | - | - | - | Ventil Ansteuerung |

### TAB_DSC_VENTILE

| WERT | TEXT |
| --- | --- |
| 0 | nv |
| 1 | Pumpe |
| 2 | EVVL |
| 3 | EVVR |
| 4 | EVHL |
| 5 | EVHR |
| 7 | AVVL |
| 8 | AVVR |
| 9 | AVHL |
| 10 | AVHR |
| 11 | VLV1 |
| 12 | VLV2 |
| 13 | TV1 |
| 14 | TV2 |

### RES_0XA065

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_GESCHW_RAD_VL_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne links |
| STAT_GESCHW_RAD_VL_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne links |
| STAT_GESCHW_RAD_VR_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne rechts |
| STAT_GESCHW_RAD_VR_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne rechts |
| STAT_GESCHW_RAD_HL_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten rechts |
| STAT_GESCHW_RAD_HL_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten links |
| STAT_GESCHW_RAD_HR_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten rechts |
| STAT_GESCHW_RAD_HR_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten rechts |

### ARG_0XA065

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | max. Ausführungsdauer |

### RES_0XA066

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_ABFALL_ZEIT_1_WERT | - | - | + | ms | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Druckabfall Bremskreis 1 (Vorderachse) |
| STAT_ABFALL_ZEIT_2_WERT | - | - | + | ms | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Druckabfall Bremskreis 2 (Hinterachse) |
| STAT_ABFALL_ZEIT_3_WERT | - | - | + | ms | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Druckabfall Bremskreis 1 und 2 (Vorderachse und Hinterachse) |

### ARG_0XA066

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_TV_EIN | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Verzögerung Schliessen Trennventil |
| ZEIT_PUMPE_AUS | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Verzögerung Stop Pumpe (> ZEIT_TV_EIN) |

### RES_0XA067

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_FEHLER_DETAIL | - | - | + | 0-n | - | unsigned char | - | TAB_BPWS_DETAIL_INITIALISIERUNG | - | - | - | Fehler Detail |

### ARG_0XA067

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | + | - | s | - | unsigned char | - | - | - | - | - | - | - | max. Ausführungsdauer |

### TAB_BPWS_DETAIL_INITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler - Bremspedal während NP1-Messung betätigt |
| 0x02 | Fehler - Bremspedal während NP2-Messung betätigt |
| 0x03 | Fehler - NP1 und NP2 weichen voneinander ab ( \|NP1 - NP2\| > Delta_NP ) |
| 0x04 | Fehler - Druckaufbau zu kurz (< t_Betätigung) |
| 0x05 | Fehler - Druckaufbau zu gering (< p_min) |
| 0x06 | Fehler - Messwert schwankt innerhalb der NP1 - Messung |
| 0x07 | Fehler - Messwert schwankt innerhalb der NP2 - Messung |
| 0x08 | Fehler - t_max überschritten (Betätigung zu spät oder zu lang) |
| 0x09 | Fehler - ermittelter Wert für Nullstellung zu groß |
| 0x0A | Fehler - ermittelter Wert für Nullstellung zu klein |
| 0x0B | Fehler - Fahrzeug steht nicht |
| 0x0C | Fehler - Verbrennungsmotor läuft nicht bzw. Unterdruck im Bremskraftverstärker zu gering |
| 0x0D | Fehler - Bremslichtschalter oder Vordruck nicht unbetätigt bei Start der Routine |
| 0x0E | Fehler - elektrischer Fehler des Bremspedalwegsensors ist aktiv |
| 0xFF | nicht definiert |

### RES_0XA06D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### ARG_0XA06D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | - | unsigned char | - | - | - | - | - | - | - | max. Ausführungsdauer |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_VAKUUMBEFUELLUNG | - | - | - | - | - | Phase |

### TAB_DSC_PHASE_VAKUUMBEFUELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nv |
| 0x01 | evakuieren |
| 0x02 | fuellen |
| 0x03 | nivellieren |

### RES_0XA802

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

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
