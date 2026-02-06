# dsc_25.prg

## General

|  |  |
| --- | --- |
| File | dsc_25.prg |
| Type | PRG |
| Jobs | 44 |
| Tables | 117 |
| Origin | BMW EF-512 Odziomek_Florian |
| Revision | 9.002 |
| Author | BMW EF-601 Jurthe_Stefan, BMW EF_520 Alexander_Muennich, BMW EF |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitätskontrolle |  |  |
| ORIGIN | string | BMW EF-512 Odziomek_Florian |  |  |
| REVISION | string | 9.002 |  |  |
| AUTHOR | string | BMW EF-601 Jurthe_Stefan, BMW EF_520 Alexander_Muennich, BMW EF |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.47 |  |  |
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

### DEBUG_DMCLIENT_SYSTIME

Systemzeit UDS  : $22   ReadDataByIdentifier UDS  : $1701 Sub-Parameter Systemzeit Modus: Default

_No arguments._

### STATUS_VIN

HW_NR UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter VIN Modus: Default

_No arguments._

### FLM_LESEN_BMW

Auslesen der FASTA Daten und der Debug Codierung UDS: $22 $5011 ReadDataByID FASTA_DATEN UDS: $22 $3000 ReadDataByID Codierdaten Allgemein Modus   : Default

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
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 255 Defaultwert: 100 |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 8000h Defaultwert: 8000h |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0hex -> % 1hex -> km*10 Fhex -> d.c. Defaultwert: Fh |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0h Schalter, keine Aenderung: FFh Defaultwert: FFh |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 0-254 Monate Schalter, keine Aenderung: FFh Defaultwert: FFh |
| RES_BYTE | int | Reserve Byte (noch unbenutzt) Defaultwert: 00h |

### STEUERN_HYDRO_SPUELEN

DSC Hydraulikblock spuelen

_No arguments._

### _SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

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
| 0x0000BE | Schaeffler Technologies |
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

### ARG_0XA061_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_ENTLUEFTUNG | 1.0 | 1.0 | 0.0 | - | - | Phase |
| WIEDERHOLUNG | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Anzahl Wiederholungen |

### ARG_0XA064_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | max. Ausführungsdauer |
| VENTIL_1 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | - | - | - | - | - | Ventil Auswahl |
| WERT_1 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ventil Ansteuerung |
| VENTIL_2 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_2 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ventil Ansteuerung |
| VENTIL_3 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_3 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ventil Ansteuerung |
| VENTIL_4 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_4 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ventil Ansteuerung |
| VENTIL_5 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_5 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ventil Ansteuerung |
| VENTIL_6 | + | - | 0-n | - | unsigned char | - | TAB_DSC_VENTILE | 1.0 | 1.0 | 0.0 | - | - | Ventil Auswahl |
| WERT_6 | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ventil Ansteuerung |

### ARG_0XA065_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | - | - | max. Ausführungsdauer |

### ARG_0XA066_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_TV_EIN | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Verzögerung Schliessen Trennventil |
| ZEIT_PUMPE_AUS | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Verzögerung Stop Pumpe (> ZEIT_TV_EIN) |

### ARG_0XA067_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | + | - | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | max. Ausführungsdauer |

### ARG_0XA06D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT_ROUTINE | + | - | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | max. Ausführungsdauer |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_VAKUUMBEFUELLUNG | 1.0 | 1.0 | 0.0 | - | - | Phase |

### ARG_0XA06E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_VENTILE_KALIBRIERUNG | 1.0 | 1.0 | 0.0 | - | - | Phase |

### ARG_0XA08F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | + | 0-n | - | unsigned char | - | TAB_DSC_PHASE_VENTILE_KALIBRIERUNG | 1.0 | 1.0 | 0.0 | - | - | Phase |

### ARG_0XD7D7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FBS_RESET | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | FBS Reset - 0x0000 Angeben zum löschen der FBS Daten |

### ARG_0XDB98_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | char | - | TAB_ROLLENMODUS | 1.0 | 1.0 | 0.0 | - | - | Setzen / Rücksetzen Rollenmodus (1 = Setzen; 0 =  Rücksetzen) |

### ARG_0XDBE1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = aktiv;  0 = inaktiv |

### ARG_0XDBE2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = aktiv;  0 = inaktiv |

### ARG_0XDBE8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PUMPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = ein; 0 = aus |

### ARG_0XDBE9_D

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
| VORLADEVENTIL_HA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorladeventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) ESPPremium: Vorladeventil HA (HSV 2) ESPhev: Seperationsventil HA (SV) |
| TRENNVENTIL_VA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Trennventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| TRENNVENTIL_HA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Trennventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) ESPPremium: Trennventil VA (USV 2) ESPhev: Druckregelventil VA (PCR) |

### ARG_0XDC1D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOHOLDLED_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = LED ein  0 = LED aus |

### ARG_0XDCC0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RE_ID | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | ID der Radelektronik |
| RE_POS | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | - | - | Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts, 4 = Reserverad(nur RDC Gen2), 5, 6, 7, 8, 9 = Radposition nicht bekannt |

### ARG_0XDCC6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSNR | 0-n | - | unsigned char | - | TAB_RDC_STEUERFUNKTIONEN | 1.0 | 1.0 | 0.0 | - | - | 1 = BANDMODE - Bandmode; 2 = ER_FAHRT - Eigenraderkennung bei Fahrt; 3 = ER_STAND - Eigenraderkennung im Stand (Gen2); 4 = TEST_ER_FAHRT - Empfang der Eigenraeder bei Fahrt pruefen; 5 = TEST_ER_STAND - Empfang der Eigenraeder im Stand pruefen (Gen2); 6 = RDCBUS_DIAG - Stromdiagnose LIN-Teilnehmer (Gen2); 7 = SOLLDRUCK_SCHREIBEN - aktuelle Reifendruckwerte als Sollwert; 8 = CAL_REQUEST - Kalibrieranforderung; 9 = ER_FAHRT_OHNE_TRIGGER - Eigenraderkennung bei Fahrt ohne Auswertung Triggerbit (Gen3); 10 = TEST_ER_FAHRT_OHNE_TRIGGER = Empfang der Eigenraeder bei Fahrt pruefen ohne Auswertung Triggerbit (Gen3) |
| AKTIONSNR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - SET; 0 - RESET |

### ARG_0XDCEE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLDRUCK | bar | low | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 3.0 | 4.8 | Sollwert Raddruck für Radelektronik |
| RADPOS | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | - | - | Position Rad |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

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
| 0x022900 | Energiesparmode aktiv | 0 |
| 0x02FF29 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x480681 | Weckleitung aktiv - Bus Sleep registriert bei aktiver Weckleitung | 0 |
| 0x480682 | Verteilergetriebe - Kupplungsposition unbekannt | 1 |
| 0x480684 | Codierung - Notlaufregler aktiv oder LMV inaktiv | 0 |
| 0x480685 | EMF - Unter- oder Überspannung, anziehen und lösen nicht möglich | 1 |
| 0x480686 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft | 0 |
| 0x480689 | ICM  - Plausi: Initialisierung ICM SG dauert zu lange | 1 |
| 0x48068A | Fahrzeugregler - Längsbeschleunigung - Phase 2: Fehleramplitude zu groß | 1 |
| 0x48068B | Fahrzeugregler - Querbeschleunigung - Phase 2: Fehleramplitude zu groß | 1 |
| 0x48068C | Verteilergetriebe - Kupplung voruebergehend stillgelegt, evtl. Überhitzung | 1 |
| 0x48068E | Automatik Hold - Anzeige Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x480693 | Automatik Hold/ACC - Bremsdruckbedarf zu hoch | 0 |
| 0x48069B | RDCi Funkverbindung durch Fremdeinfluss gestoert | 1 |
| 0x48069D | Fahrzeugregler - Ist Lenkwinkel VA Rad - Phase 1: Fehleramplitude zu groß | 1 |
| 0x48069E | RDCi  Kalibrierung Raderkennung nicht moeglich | 0 |
| 0x4806A1 | RDCi Alle Radelektroniken bedingt kompatibel keine Positionsanzeige | 0 |
| 0x4806A6 | RDCi Radelektronik Position unbekannt Mischverbau | 0 |
| 0x4806B1 | Fahrzeugregler - Längsbeschleunigung - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B2 | Fahrzeugregler - Querbeschleunigung - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B4 | Steuergerät intern - Main Treiber Fehler | 0 |
| 0x4806B8 | RDCi Radelektronik vorn links kein Empfang | 0 |
| 0x4806BA | Vacuumsensor - Plausi: mit Hauptzylinderbremsdruck | 0 |
| 0x4806D9 | Steuergerät intern - EEPROM Fehler | 0 |
| 0x4806DA | RDCi Radelektronik vorn rechts kein Empfang | 0 |
| 0x4806F0 | RDCi Radelektronik hinten links kein Empfang | 0 |
| 0x4806F1 | Drucksensor - Vorn Rechts - Federkontakt oder Sensor defekt | 0 |
| 0x4806F2 | Drucksensor - Vorn Rechts - Unplausibler Druckunterschied | 0 |
| 0x4806F3 | Drucksensor - Vorn Rechts - Temperaturfehler | 0 |
| 0x4806F4 | RDCi Radelektronik hinten rechts kein Empfang | 0 |
| 0x4806F5 | Drucksensor - Vorn Rechts - Offsetfehler | 0 |
| 0x4806F6 | Drucksensor - Vorn Rechts - Hydraulisches Bremssystem undicht | 0 |
| 0x4806F7 | Drucksensor - Hinten Links - Federkontakt oder Sensor defekt | 0 |
| 0x4806F8 | Drucksensor - Hinten Links - Unplausibler Druckunterschied | 0 |
| 0x4806F9 | Drucksensor - Hinten Links - Temperaturfehler | 0 |
| 0x4806FA | RDCi Radelektronik vorn links defekt | 0 |
| 0x4806FB | Drucksensor - Hinten Links - Hydraulisches Bremssystem undicht | 0 |
| 0x4806FC | Drucksensor - Hinten Links - Offsetfehler | 0 |
| 0x480702 | RDCi Radelektronik vorn rechts defekt | 0 |
| 0x480703 | Steuergerät intern - Ventile Fehler | 0 |
| 0x480704 | Steuergerät intern - Laufzeitfehler | 0 |
| 0x480705 | Steuergerät intern - HW Fehler ASG intern, System ASIC | 0 |
| 0x480706 | Steuergerät intern - HW Fehler ASG intern | 0 |
| 0x480707 | Steuergerät intern - RAM Fehler | 0 |
| 0x480708 | Steuergerät intern - Fehler bei NM-Shutdown-Anforderung | 0 |
| 0x480709 | Steuergerät intern - Unplausibler Ventilstrom | 0 |
| 0x48070B | Steuergerät intern - Conti - EEPROM Fehler - Ventildaten | 0 |
| 0x48070C | Steuergerät intern - Conti - EEPROM Fehler - RPA-Daten | 0 |
| 0x48070D | Steuergerät intern - Conti - EEPROM Fehler - Einlassventildaten | 0 |
| 0x48070E | Bremslichtschalter - Plausibilitätsfehler | 0 |
| 0x48070F | RDCi Radelektronik hinten links defekt | 0 |
| 0x480710 | Raddrehzahlsensor - Vorn Links - Plausi: Drehrichtung | 0 |
| 0x480711 | Raddrehzahlsensor - Vorn Links - Unplausibilität bei ABS-Regelung | 0 |
| 0x480712 | Raddrehzahlsensor - Vorn Links - Elektrischer Fehler | 0 |
| 0x480713 | Raddrehzahlsensor - Vorn Rechts - Plausi: Drehrichtung | 0 |
| 0x480714 | Raddrehzahlsensor - Vorn Rechts - Unplausibilität bei ABS-Regelung | 0 |
| 0x480715 | Raddrehzahlsensor - Vorn Rechts - Elektrischer Fehler | 0 |
| 0x480716 | Raddrehzahlsensor - Hinten Links - Plausi: Drehrichtung | 0 |
| 0x480717 | Raddrehzahlsensor - Hinten Links - Unplausibilität bei ABS-Regelung | 0 |
| 0x480718 | Raddrehzahlsensor - Hinten Links - Elektrischer Fehler | 0 |
| 0x480719 | Raddrehzahlsensor - Hinten Rechts - Plausi: Drehrichtung | 0 |
| 0x48071A | Raddrehzahlsensor - Hinten Rechts - Unplausibilität bei ABS-Regelung | 0 |
| 0x48071B | Raddrehzahlsensor - Hinten Rechts - Elektrischer Fehler | 0 |
| 0x48071C | DSC Pumpe - Versorgungsspannung | 0 |
| 0x48071E | Steuergerät intern - Hardware Fehler | 0 |
| 0x48071F | RDCi Radelektronik Position unbekannt | 0 |
| 0x480728 | RDCi Radelektronik hinten rechts defekt | 0 |
| 0x48072F | Codierung - Funktionen auscodiert | 0 |
| 0x48077C | RDCi Radelektronik vorn links Batterie Unterspannung | 1 |
| 0x48077D | RDCi Radelektronik vorn rechts Batterie Unterspannung | 1 |
| 0x48077E | RDCi Radelektronik hinten links Batterie Unterspannung | 1 |
| 0x48077F | RDCi Radelektronik hinten rechts Batterie Unterspannung | 1 |
| 0x480780 | RDCi Radelektronik Bandmode | 0 |
| 0x480781 | Steuergerät intern - Falsche Zuordnung von Hydraulikeinheit zu Anbausteuergerät | 0 |
| 0x480811 | Vakuumsensor - Gradient fehlerhaft | 0 |
| 0x480820 | Schnittstelle Anforderung Aktive Gefahrenbremsung zu lang | 0 |
| 0x480829 | Raddrehzahlsensor - Hinten Links - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x48082A | Raddrehzahlsensor - Hinten Rechts - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x48082B | Raddrehzahlsensor - Vorn Links - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x48082C | Raddrehzahlsensor - Vorn Rechts - Versorgung - Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x48082F | Steuergerät intern - ROM / Flash Fehler | 0 |
| 0x480840 | Raddrehzahlsensor - Hinten Links - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x48084F | Raddrehzahlsensor - Vorn Links - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x480875 | Raddrehzahlsensor - Hinten Rechts - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x48087B | Raddrehzahlsensor - Vorn Rechts - Versorgung - Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x480928 | Raddrehzahlsensor - Vorn Links - Fehlender Zahn | 0 |
| 0x48092B | Fahrzeugregler - Querbeschleunigung - Phase 3: Fehleramplitude zu groß | 1 |
| 0x480932 | Bremsflüssigkeitssensor - Bremsflüssigkeitsstand zu niedrig | 0 |
| 0x480934 | Hydraulik Boost - Unterdruck des Booster zu niedrig | 1 |
| 0x48093C | Fahrzeugregler - Ist Lenkwinkel VA Rad - Phase 3: Fehleramplitude zu groß | 1 |
| 0x480964 | Lokale Spannungsversorgung - schwere Unterspannung | 1 |
| 0x480965 | Lokale Spannungsversorgung - Überspannung | 1 |
| 0x48096F | Fahrzeugregler - Längsbeschleunigung - Phase 3: Fehleramplitude zu groß | 1 |
| 0x48097D | Verteilergetriebe - Kupplungsposition offen, nur Heckantrieb | 1 |
| 0x4809AB | Globale Spannungsversorgung - Unterspannung extern | 1 |
| 0x4809AC | Globale Spannungsversorgung - Überspannung extern | 1 |
| 0x4809B0 | Raddrehzahlsensor - Vorn Links - Anfahrerkennung fehlerhaft | 0 |
| 0x4809B7 | Raddrehzahlsensor - Hinten Links - Fehlender Zahn | 0 |
| 0x4809B9 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft | 0 |
| 0x4809C1 | EMF - Uebernahme nicht möglich | 1 |
| 0x4809C2 | Raddrehzahlsensor - Hinten Rechts - Fehlender Zahn | 0 |
| 0x4809CB | Raddrehzahlsensor - Vorn Rechts - Fehlender Zahn | 0 |
| 0x4809CD | Raddrehzahlsensor - Vorn Rechts - Anfahrerkennung fehlerhaft | 0 |
| 0x4809D4 | Bremslichtschalter - permanent getretenes Bremspedal (Verdacht) | 0 |
| 0x4809D7 | Steuergerät intern - Busfehler - Fehler Failsafe Schaltung | 0 |
| 0x4809D8 | Steuergerät intern - Busfehler - Fehler Memory Access | 0 |
| 0x4809D9 | Steuergerät intern - Temperatursensor - Elektrischer Fehler | 0 |
| 0x4809DC | ECBA - Drehmoment angefordert, aber Release-Bit nicht gesetzt | 1 |
| 0x4809DF | Fahrzeugregler - Giergeschwindigkeit - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4809E0 | Fahrzeugregler - Giergeschwindigkeit - Phase 2: Fehleramplitude zu groß | 1 |
| 0x4809E1 | Fahrzeugregler - Giergeschwindigkeit - Phase 3: Fehleramplitude zu groß | 1 |
| 0x4809E2 | Drucksensor - Hauptzylinder - Fehler in Spannungsversorgung | 0 |
| 0x4809EA | RDCi Radelektronik Position unbekannt defekt | 0 |
| 0x4809EB | RDCi Radelektronik (Position unbekannt) kein Empfang | 0 |
| 0x480A02 | Fahrzeugregler - Ist Lenkwinkel VA Rad - Phase 2: Fehleramplitude zu groß | 1 |
| 0x480A08 | Drucksensor - Hauptzylinder - Leitungsfehler | 0 |
| 0x480A11 | Bremsbelagsensor - Vorderachse - Verschleissgrenze erreicht | 0 |
| 0x480A12 | Bremsbelagsensor - Hinterachse - Verschleissgrenze erreicht | 0 |
| 0x480A13 | Bremsbelagsensor - Vorderachse - Plausibilität | 0 |
| 0x480A14 | Bremsbelagsensor - Hinterachse - Plausibilität | 0 |
| 0x480A22 | Drucksensor - nicht kalibriert | 0 |
| 0x480A23 | Codierung - Falsches Fahrzeug | 0 |
| 0x480A46 | RDCi Gateway oder Antennen Fehler | 1 |
| 0x480A5B | DSC Pumpe - gemessene Drehzahl trotz Ansteuerung zu gering - RFP laeuft nicht | 0 |
| 0x480A65 | Automatik Hold - Taster Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x480A69 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 0 |
| 0x480A7A | EMF - Stellvorgang nicht umgesetzt | 1 |
| 0x480A7E | EMF - Zeitverzug EGS - während Anforderung Getriebe-P, während Elektrohydraulischen Modus | 1 |
| 0x480A7F | Codierung - Steuergeraet nicht codiert | 0 |
| 0x480A83 | Codierung - Signatur fehlerhaft | 0 |
| 0x480A84 | Codierung - ungueltige Daten | 0 |
| 0x480A85 | Bremspedalwegsensor -  Nullstellung nicht initialisiert | 0 |
| 0x480A86 | Bremspedalwegsensor -  Plausibilisierung Signalleitung 1 Unterbrechung oder auf Masse unteres Fehlerband | 0 |
| 0x480A87 | Bremspedalwegsensor -  Plausibilisierung Signalleitung 2 Unterbrechung oder auf Masse unteres Fehlerband | 0 |
| 0x480A88 | Bremspedalwegsensor -  Plausibilisierung Signalleitung 1 Kurzschluss nach Plus | 0 |
| 0x480A8B | Drucksensor - Interne Plausibilisierung fehlgeschlagen | 0 |
| 0x480A8C | Drucksensor - Rauschüberwachung | 0 |
| 0x480A8D | Drucksensor - Plausibilisierung Temperatur intern | 0 |
| 0x480A8F | Drucksensor - Plausibilisierung zwischen Hauptzylinder und Kreisdrucksensor | 0 |
| 0x480A90 | Raddrehzahlsensor - Allgemein - Rollenmodus aktiv | 0 |
| 0x480A91 | Drucksensor - Hauptzylinder - Offsetfehler | 0 |
| 0x480A92 | Raddrehzahlsensor - Allgemein - Unterspannung bei aktiven Anfahrassistenten | 0 |
| 0x480A93 | Codierung - Transaktion gescheitert | 0 |
| 0x480A9B | Fahrzeugregler Dauerregelung | 0 |
| 0x480A9C | Raddrehzahlsensor - Vorn Links - Falscher Sensortyp | 0 |
| 0x480A9D | Raddrehzahlsensor - Vorn Links - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480A9E | Raddrehzahlsensor - Vorn Links - unerwarteter Signalsprung | 0 |
| 0x480A9F | Raddrehzahlsensor - Vorn Links - Rauschüberwachung | 0 |
| 0x480AA0 | Steuergerät intern - Falscher HW Musterstand oder nicht freigegebene Software | 0 |
| 0x480AA1 | ECBA - Plausi Fahrzeugverzögerung | 1 |
| 0x480AA2 | Bremspedalwegsensor -  Plausibilisierung Signalleitung 2 Kurzschluss nach Plus | 0 |
| 0x480AA3 | Raddrehzahlsensor - Vorn Rechts - Falscher Sensortyp | 0 |
| 0x480AA4 | Raddrehzahlsensor - Vorn Rechts - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480AA5 | Raddrehzahlsensor - Vorn Rechts - unerwarteter Signalsprung | 0 |
| 0x480AA6 | Raddrehzahlsensor - Vorn Rechts - Rauschüberwachung | 0 |
| 0x480AA8 | Bremspedalwegsensor -  Plausibilisierung Signalleitung 1 zu Signalleitung 2 fehlgeschlagen | 0 |
| 0x480AA9 | Bremspedalwegsensor -  Plausibilisierung Nullpunkt Offset zu groß | 0 |
| 0x480AAA | Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 0 |
| 0x480AAB | Raddrehzahlsensor - Hinten Links - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480AAC | Raddrehzahlsensor - Hinten Links - unerwarteter Signalsprung | 0 |
| 0x480AAD | Raddrehzahlsensor - Hinten Links - Rauschüberwachung | 0 |
| 0x480AB1 | Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 0 |
| 0x480AB2 | Raddrehzahlsensor - Hinten Rechts - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480AB3 | Raddrehzahlsensor - Hinten Rechts - unerwarteter Signalsprung | 0 |
| 0x480AB4 | Raddrehzahlsensor - Hinten Rechts - Rauschüberwachung | 0 |
| 0x480AB5 | Verteilergetriebe: temporäre Störung, Schutzfunktion | 1 |
| 0x480AB7 | Spannungsversorgung Unterspannung in  spezieller Betriebssituation | 1 |
| 0x480AB8 | Internes Zustandsmanagement Kompletter Überwachungsumfang | 1 |
| 0x480ABF | Bremspedalwegsensor -  Nullpunktabgleich Checksummenfehler | 0 |
| 0x480AC0 | Codierung - Falsche Antriebsvariante Allrad | 0 |
| 0x480AC2 | Betriebsbereitschaft Schalter Gurtschloß nicht verbaut | 1 |
| 0x480AC3 | Betriebsbereitschaft Türkontakt Sender meldet unplausibel | 1 |
| 0x480AC4 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Masse | 0 |
| 0x480AC5 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Plus | 0 |
| 0xD3441F | FLEXRAY Bus 1 | 0 |
| 0xD34420 | FLEXRAY Controller Error Bus 1 | 0 |
| 0xD34BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD35418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Timeout | 1 |
| 0xD35419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Checksumme | 1 |
| 0xD3541A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Alive | 1 |
| 0xD3541B | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Timeout | 1 |
| 0xD3541C | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Checksumme | 1 |
| 0xD3541D | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Alive | 1 |
| 0xD35420 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Timeout | 1 |
| 0xD35421 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Checksumme | 1 |
| 0xD35422 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Alive | 1 |
| 0xD35426 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Ungültig | 1 |
| 0xD35427 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Undefiniert | 1 |
| 0xD35428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD3542C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD3542E | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Qualifier | 1 |
| 0xD3542F | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Qualifier | 1 |
| 0xD35432 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Timeout | 1 |
| 0xD35433 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Checksumme | 1 |
| 0xD35434 | Schnittstelle ICM (Anforderung Differenz Bremsmoment Giermomentverteilung, 66.1.2): Signal ungültig | 1 |
| 0xD35435 | Signal (Anforderung Differenz Bremsmoment Giermomentverteilung, 66.1.2) undefiniert, Sender ICM | 1 |
| 0xD35436 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Alive | 1 |
| 0xD35437 | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Ungültig | 1 |
| 0xD35438 | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Undefiniert | 1 |
| 0xD35442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) - Ungültig | 1 |
| 0xD35443 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) - Undefiniert | 1 |
| 0xD35444 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Timeout | 1 |
| 0xD35445 | Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8) Prüfsumme falsch, Empfänger DSC (FlexRay), Sender ACSM (PT-CAN) | 1 |
| 0xD35448 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Ungültig | 1 |
| 0xD3544E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xD35452 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Timeout | 1 |
| 0xD35454 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Alive | 1 |
| 0xD35456 | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Ungültig | 1 |
| 0xD35457 | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Undefiniert | 1 |
| 0xD3545D | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Timeout | 1 |
| 0xD3545E | Botschaftsfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) - Timeout | 1 |
| 0xD3545F | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Checksumme | 1 |
| 0xD35460 | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Alive | 1 |
| 0xD35461 | Signalfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Ungültig | 1 |
| 0xD35462 | Botschaft (Anforderung Differenz Bremsmoment Giermomentverteilung, 66.1.2) fehlt, Empfänger DSC (FlexRay), Sender ICM (FlexRay) | 1 |
| 0xD35463 | Signalfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Undefiniert | 1 |
| 0xD35466 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) - Ungültig | 1 |
| 0xD35467 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) - Undefiniert | 1 |
| 0xD3546E | Botschaftsfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) - Timeout | 1 |
| 0xD3546F | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) - Ungültig | 1 |
| 0xD35470 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) - Undefiniert | 1 |
| 0xD35476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Ungültig | 1 |
| 0xD35478 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Timeout | 1 |
| 0xD35479 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Checksumme | 1 |
| 0xD3547A | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) - Alive | 1 |
| 0xD35482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xD3549C | Signalfehler (Klemmen, ID: KLEMMEN) - Qualifier | 1 |
| 0xD3549F | Signalfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Qualifier | 1 |
| 0xD354A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Timeout | 1 |
| 0xD354AA | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Ungültig | 1 |
| 0xD354AB | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Undefiniert | 1 |
| 0xD354AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD354B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Ungültig | 1 |
| 0xD354B7 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Undefiniert | 1 |
| 0xD354B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD354B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD354BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD354BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD354C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD354C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 |
| 0xD354C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xD354C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xD354C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Undefiniert | 1 |
| 0xD354CC | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Timeout | 1 |
| 0xD354CD | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Checksumme | 1 |
| 0xD354CE | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Alive | 1 |
| 0xD354D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Timeout | 1 |
| 0xD354D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Checksumme | 1 |
| 0xD354D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) - Alive | 1 |
| 0xD354E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Checksumme | 1 |
| 0xD354E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xD354E9 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Checksumme | 1 |
| 0xD354EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Alive | 1 |
| 0xD354EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 |
| 0xD354EF | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Undefiniert | 1 |
| 0xD354F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD354F3 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) - Checksumme | 1 |
| 0xD354F4 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) - Alive | 1 |
| 0xD354F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD354F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD354F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Checksumme | 1 |
| 0xD354FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xD354FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xD354FD | Signalfehler (Klemmen, ID: KLEMMEN) - Undefiniert | 1 |
| 0xD3550A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Timeout | 1 |
| 0xD35510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Ungültig | 1 |
| 0xD35511 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Undefiniert | 1 |
| 0xD35513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Alive | 1 |
| 0xD3551A | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Ungültig | 1 |
| 0xD3551C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xD3551D | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Undefiniert | 1 |
| 0xD35528 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Timeout | 1 |
| 0xD35529 | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Checksumme | 1 |
| 0xD3552A | Botschaftsfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) - Alive | 1 |
| 0xD35538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Timeout | 1 |
| 0xD35539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Checksumme | 1 |
| 0xD3553A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Alive | 1 |
| 0xD3553E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) - Ungültig | 1 |
| 0xD35542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 |
| 0xD35543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 |
| 0xD35544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xD35548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xD35549 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Undefiniert | 1 |
| 0xD35552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Ungültig | 1 |
| 0xD35553 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Undefiniert | 1 |
| 0xD35557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Timeout | 1 |
| 0xD35558 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Timeout | 1 |
| 0xD35559 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Checksumme | 1 |
| 0xD3555A | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Alive | 1 |
| 0xD3556C | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Ungültig | 1 |
| 0xD3556D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Timeout | 1 |
| 0xD35570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD35571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Checksumme | 1 |
| 0xD35572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Alive | 1 |
| 0xD35577 | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Qualifier | 1 |
| 0xD3557A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD3557B | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Undefiniert | 1 |
| 0xD35584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Ungültig | 1 |
| 0xD35585 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Undefiniert | 1 |
| 0xD35586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Timeout | 1 |
| 0xD3558A | Signalfehler (Regensensor-Wischergeschwindigkeit,  ID: WISCHERGESCHWINDIGKEIT) - Ungültig | 1 |
| 0xD3558C | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD35598 | Botschaft (Soll Anteil Steuerung Lenkung, 39.1.2) fehlt, Empfänger DSC, Sender ICM | 1 |
| 0xD35599 | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Checksumme | 1 |
| 0xD3559A | Botschaftsfehler (Soll Anteil Steuerung Lenkung, ID: TAR_QTA_CTR_STE) - Alive | 1 |
| 0xD355A0 | Botschaft (Status Anhänger, 275.0.8) fehlt, Empfänger DSC (FlexRay), Sender AHM (K-CAN) | 1 |
| 0xD355AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Timeout | 1 |
| 0xD355B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Timeout | 1 |
| 0xD355F2 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) - Timeout | 1 |
| 0xD355F3 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) - Checksumme | 1 |
| 0xD355F4 | Botschaftsfehler  (Steuerung Crash, ID: CTR_CR ) -  Alive | 1 |
| 0xD355F8 | Signalfehler (xDrive Stellglied Information, ID: XDRV_AVT_INFO) - Ungültig | 1 |
| 0xD355F9 | Signalfehler (xDrive Stellglied Information, ID: XDRV_AVT_INFO) - Undefiniert | 1 |
| 0xD3561C | Botschaftsfehler (Toleranzabgleich Rad, ID: TOMA_WHL) - Timeout | 1 |
| 0xD35646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Timeout | 1 |
| 0xD35647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Checksumme | 1 |
| 0xD35648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Alive | 1 |
| 0xD3564C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Ungültig | 1 |
| 0xD3564D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Undefiniert | 1 |
| 0xD35677 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Qualifier | 1 |
| 0xD3567D | Botschaftsfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Timeout | 1 |
| 0xD35693 | Botschaftsfehler (Daten Antriebsstrang 1, ID: DT_PT_1) Timeout | 1 |
| 0xD35694 | Botschaftsfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Timeout | 1 |
| 0xD3569A | Botschaftsfehle (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Timeout | 1 |
| 0xD356A1 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) - Alive | 1 |
| 0xD356A2 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) - Checksumme | 1 |
| 0xD356D3 | Botschaftsfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Checksumme | 1 |
| 0xD356D4 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Timeout | 1 |
| 0xD356D5 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Alive | 1 |
| 0xD356D8 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Checksumme | 1 |
| 0xD356E4 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4) fehlt, Empfänger DSC (FlexRay), Sender VTG (FlexRay) | 1 |
| 0xD356E5 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4) Prüfsumme falsch, Empfänger DSC (FlexRay), Sender VTG | 1 |
| 0xD356E6 | Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4) nicht aktuell, Empfänger DSC (FlexRay), Sender VTG | 1 |
| 0xD356F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Timeout | 1 |
| 0xD356F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Alive | 1 |
| 0xD3570D | Botschaftsfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Alive | 1 |
| 0xD35713 | Signalfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Ungültig | 1 |
| 0xD35720 | Botschaftsfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Alive | 1 |
| 0xD3572E | Botschaftsfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Alive | 1 |
| 0xD35744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD35745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 |
| 0xD35746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xD3574D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Checksumme | 1 |
| 0xD3574E | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Alive | 1 |
| 0xD35751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Checksumme | 1 |
| 0xD35752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Alive | 1 |
| 0xD35755 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Timeout | 1 |
| 0xD35757 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Checksumme | 1 |
| 0xD35758 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Alive | 1 |
| 0xD35775 | Signalfehler (Daten Antriebsstrang 1, ID: DT_PT_1) Ungültig | 1 |
| 0xD35780 | Signalfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Ungültig | 1 |
| 0xD357E1 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Qualifier | 1 |
| 0xD357EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Timeout | 1 |
| 0xD3583C | Signalfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Undefiniert | 1 |
| 0xD358E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Timeout | 1 |
| 0xD358F8 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Ungültig | 1 |
| 0xD358F9 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Undefiniert | 1 |
| 0xD35907 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) - Timeout | 1 |
| 0xD35932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 |
| 0xD35936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 |
| 0xD35937 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Undefiniert | 1 |
| 0xD3593C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Timeout | 1 |
| 0xD3593E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Alive | 1 |
| 0xD35948 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Ungültig | 1 |
| 0xD35949 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Undefiniert | 1 |
| 0xD359AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD359CA | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Qualifier | 1 |
| 0xD359FC | Botschaftsfehler (Rad Last, ID: WHL_LD) - Timeout | 1 |
| 0xD35A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Timeout | 1 |
| 0xD35A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Ungültig | 1 |
| 0xD35A0D | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Undefiniert | 1 |
| 0xD35A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Qualifier | 1 |
| 0xD35A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Qualifier | 1 |
| 0xD35A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Qualifier | 1 |
| 0xD35A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Qualifier | 1 |
| 0xD35A9C | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Qualifier | 1 |
| 0xD35B00 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Timeout | 1 |
| 0xD35B01 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Checksumme | 1 |
| 0xD35B02 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Alive | 1 |
| 0xD35B04 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Ungültig | 1 |
| 0xD35B05 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Undefiniert | 1 |
| 0xD35B21 | Botschaftsfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) - Timeout | 1 |
| 0xD35B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xD35B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Checksumme | 1 |
| 0xD35B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xD35B30 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) - Timeout | 1 |
| 0xD35B31 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) - Checksumme | 1 |
| 0xD35B32 | Botschaftsfehler (Lenkwinkel Offset, ID: STEA_OFFS) - Alive | 1 |
| 0xD35B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Timeout | 1 |
| 0xD35B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Checksumme | 1 |
| 0xD35B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 1 |
| 0xD35B43 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Timeout | 1 |
| 0xD35B44 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Checksumme | 1 |
| 0xD35B45 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Alive | 1 |
| 0xD35B47 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Ungültig | 1 |
| 0xD35B48 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Undefiniert | 1 |
| 0xD35C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) - Timeout | 1 |
| 0xD35C1D | Botschaftsfehler (Status Kontakt Handbremse, ID: STAT_CT_HABR) - Timeout | 1 |
| 0xD36500 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_AVT_INFO) - Timeout | 1 |
| 0xD36501 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_AVT_INFO) - Checksumme | 1 |
| 0xD36502 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_AVT_INFO) - Alive | 1 |
| 0xD36505 | Signalfehler (xDrive Stellglied Information, ID: XDRV_AVT_INFO) - Qualifier | 1 |
| 0xD36C05 | Signalfehler (Außentemperatur, ID: A_TEMP) - Undefiniert | 1 |
| 0xD36C09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Undefiniert | 1 |
| 0xD36C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Undefiniert | 1 |
| 0xD36C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Undefiniert | 1 |
| 0xD36C3B | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Undefiniert | 1 |
| 0xD36C81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Ungültig | 1 |
| 0xD36C82 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Undefiniert | 1 |
| 0xD36C8C | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Qualifier | 1 |
| 0xD36D01 | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Qualifier | 1 |
| 0xD36D44 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Qualifier | 1 |
| 0xD36D54 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Qualifier | 1 |
| 0xD36D58 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Qualifier | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | SPANNUNG | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4000 | MSA STATUS BYTE | HEX | high | unsigned char | - | 1 | 1 | 0 |
| 0x4001 | _STATUS_STEUERGERAET | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4002 | DTC CONTI INTERN USP | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8000 | GESCHWINDIGKEIT REFERENZ | kmh | high | unsigned char | - | 1 | 1 | 0 |
| 0x8001 | STATUS BYTE | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x8002 | BETRIEBSMODUS | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8003 | DTC CONTI INTERN | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8004 | ST_DRV_VEH | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x8005 | STATUS VEHICLE | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x480708 | Steuergerät intern - Fehler bei NM-Shutdown-Anforderung | 0 |
| 0x480975 | Steuergerät intern - Transceiver - VIO Fehler | 0 |
| 0x480976 | Steuergerät intern - Transceiver - Übertemperatur | 0 |
| 0x4809AD | Steuergerät intern - Transceiver - Bubbling Idiot | 0 |
| 0x4809C0 | Lokale Spannungsversorgung - Steuergeräte Reset | 0 |
| 0x4809DA | Steuergerät intern - Transceiver - Status Fehler | 0 |
| 0x4809DB | Steuergerät intern - Transceiver - VCC Fehler | 0 |
| 0x480A17 | Fahrleistungsreduzierung - Fahrleistungsreduzierung durch DSC-Befehl aktiv - Infoeintrag - | 0 |
| 0x480A19 | Allradkupplung LMV Schutzfunktion aktiv | 0 |
| 0x480AB5 | Verteilergetriebe Langzeitschutzfunktion vom LMV angefordert | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | SPANNUNG | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x1727 | TEMPERATUR_AUSSEN | °C | high | unsigned char | - | 5 | 10 | -40 |
| 0x4000 | MSA STATUS BYTE | HEX | high | unsigned char | - | 1 | 1 | 0 |
| 0x4001 | _STATUS_STEUERGERAET | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x4002 | DTC CONTI INTERN USP | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8000 | GESCHWINDIGKEIT REFERENZ | kmh | high | unsigned char | - | 1 | 1 | 0 |
| 0x8001 | STATUS BYTE | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x8002 | BETRIEBSMODUS | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8003 | DTC CONTI INTERN | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8004 | ST_DRV_VEH | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x8005 | STATUS VEHICLE | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XA061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA064_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA065_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_GESCHW_RAD_VL_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne links |
| STAT_GESCHW_RAD_VL_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne links |
| STAT_GESCHW_RAD_VR_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne rechts |
| STAT_GESCHW_RAD_VR_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne rechts |
| STAT_GESCHW_RAD_HL_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten rechts |
| STAT_GESCHW_RAD_HL_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten links |
| STAT_GESCHW_RAD_HR_MIN_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten rechts |
| STAT_GESCHW_RAD_HR_MAX_WERT | - | - | + | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten rechts |

### RES_0XA066_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_ABFALL_ZEIT_1_WERT | - | - | + | ms | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Druckabfall Bremskreis 1 (Vorderachse) |
| STAT_ABFALL_ZEIT_2_WERT | - | - | + | ms | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Druckabfall Bremskreis 2 (Hinterachse) |
| STAT_ABFALL_ZEIT_3_WERT | - | - | + | ms | - | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Druckabfall Bremskreis 1 und 2 (Vorderachse und Hinterachse) |

### RES_0XA067_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_FEHLER_DETAIL | - | - | + | 0-n | - | unsigned char | - | TAB_BPWS_DETAIL_INITIALISIERUNG | - | - | - | Fehler Detail |

### RES_0XA06D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA06E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_DETAIL_VENTIL_KALIBRIERUNG | - | - | + | 0-n | - | unsigned char | - | TAB_DSC_DETAIL_VENTIL_KALIBRIERUNG | 1.0 | 1.0 | 0.0 | Ausführungsstatus Detail |

### RES_0XA070_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA08F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_VENTILE_KALIBRIERUNG_1 | - | - | + | 0-n | high | unsigned char | - | TAB_VENTILE_KALIBRIERUNG_1 | - | - | - | STAT_VENTILE_KALIBRIERUNG_1 |
| STAT_VENTILE_KALIBRIERUNG_2 | - | - | + | 0-n | high | unsigned char | - | TAB_VENTILE_KALIBRIERUNG_2 | - | - | - | STAT_VENTILE_KALIBRIERUNG_2 |
| STAT_VENTILE_KALIBRIERUNG_3 | - | - | + | 0-n | high | unsigned char | - | TAB_VENTILE_KALIBRIERUNG_3 | - | - | - | STAT_VENTILE_KALIBRIERUNG_3 |

### RES_0XD7D7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der  Funktionsaufrufe |
| STAT_ZEITSTEMPEL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeitstempel der letzten Funktionsaktivierung |
| STAT_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Km Stand der letzten Funktionsaktivierung |

### RES_0XDBDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PILLE_VA | 0-n | - | unsigned char | - | TAB_BBV_SENSOR | 1.0 | 1.0 | 0.0 | Bremsbelagspille Vorderachse |
| STAT_PILLE_HA | 0-n | - | unsigned char | - | TAB_BBV_SENSOR | 1.0 | 1.0 | 0.0 | Bremsbelagspille Hinterachse |

### RES_0XDBE1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = aktiv;  0 = inaktiv |

### RES_0XDBE2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = aktiv;  0 = inaktiv |

### RES_0XDBE3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARNUNG_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnung (0= inaktiv; 1= aktiv) |
| STAT_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RPA-System (0= inaktiv; 1= aktiv) |
| STAT_PLATTROLLEN_ERKANNT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Platte Reifen (0= nicht erkannt; 1= erkannt) |
| STAT_3PLUS1_ERKANNT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 3Plus1 Konstellation (0= nicht erkannt; 1= erkannt) |
| STAT_NEUREIFEN_ERKANNT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Neureifen Konstellation (0= nicht erkannt; 1= erkannt) |
| STAT_NAEHERUNG_WARNGRENZE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert Näherung Warngrenze |
| STAT_PANNEN_POSITION | 0-n | - | unsigned char | - | TAB_POSITION_RAD | - | - | - | Position druckreduziertes Rad |
| STAT_LERNSTATUS_BEREICH_0_100_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 0..100 km/h |
| STAT_LERNSTATUS_BEREICH_100_190_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 100..190 km/h |
| STAT_LERNSTATUS_BEREICH_UEBER_190_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich > 190 km/h |

### RES_0XDBE4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_RAD_VL_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne links |
| STAT_GESCHWINDIGKEIT_RAD_VR_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne rechts |
| STAT_GESCHWINDIGKEIT_RAD_HL_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten links |
| STAT_GESCHWINDIGKEIT_RAD_HR_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten rechts |
| STAT_GESCHWINDIGKEIT_FZG_WERT | km/h | - | int | - | - | 1.0 | 100.0 | 0.0 | Fahrzeuggeschwindigkeit |
| STAT_DREHRICHTUNG_VL | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Raddrehrichtung vorne links |
| STAT_DREHRICHTUNG_VR | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Raddrehrichtung vorne rechts |
| STAT_DREHRICHTUNG_HL | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Raddrehrichtung hinten links |
| STAT_DREHRICHTUNG_HR | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Raddrehrichtung hinten rechts |
| STAT_DREHRICHTUNG_REF | 0-n | - | unsigned char | - | TAB_DREHRICHTUNG | 1.0 | 1.0 | 0.0 | Fahrrichtung |
| STAT_SIGNALQUALITAET_VL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität vorne links x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |
| STAT_SIGNALQUALITAET_VR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität vorne rechts x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |
| STAT_SIGNALQUALITAET_HL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität hinten links x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |
| STAT_SIGNALQUALITAET_HR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalqualität hinten rechts x < 10 % = kein Signal;  10 % <= x <= 50 % schwaches Signal;  x > 50 % Signal in Ordnung |

### RES_0XDBE5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_KREIS1_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck Kreis 1 |
| STAT_DRUCK_KREIS2_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck Kreis 2 |
| STAT_DRUCK_VL_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck vorne links |
| STAT_DRUCK_VR_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck vorne rechts |
| STAT_DRUCK_HL_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck hinten links |
| STAT_DRUCK_HR_WERT | bar | - | int | - | - | 1.0 | 10.0 | 0.0 | Druck hinten rechts |

### RES_0XDBE7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Elektronikversorgung |
| STAT_SPANNUNG_PUMPE_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Pumpenversorgung |
| STAT_SPANNUNG_VENTILE_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Ventilversorgung |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Weckleitung |

### RES_0XDBE8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PUMPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = ein; 0 = aus |

### RES_0XDBE9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLASSVENTIL_VL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil vorne links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_EINLASSVENTIL_VR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil vorne rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) ESPPremium: Vorladeventil HA (HSV 2) ESPhev: Seperationsventil HA (SV) |
| STAT_EINLASSVENTIL_HL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil hinten links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_EINLASSVENTIL_HR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Einlassventil hinten rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) ESPPremium: Trennventil VA (USV 2) ESPhev: Druckregelventil VA (PCR) |
| STAT_AUSLASSVENTIL_VL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil vorne links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_VR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil vorne rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_HL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil hinten links (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_AUSLASSVENTIL_HR_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslassventil hinten rechts (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_VORLADEVENTIL_VA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorladeventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_VORLADEVENTIL_HA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorladeventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_TRENNVENTIL_VA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Trennventil Vorderachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |
| STAT_TRENNVENTIL_HA_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Trennventil Hinterachse (0 % = nicht angesteuert; 100 % = voll angesteuert) |

### RES_0XDBF4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_IST_WERT | bar | - | int | - | - | 1.0 | 1000.0 | 0.0 | aktueller Druck |
| STAT_SPANNUNG_IST_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | aktuelle Spannung |

### RES_0XDBF5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WEG_IST_WERT | mm | - | int | - | - | 1.0 | 100.0 | 0.0 | aktueller Pedalweg (bezogen auf WEG_NULLPUNKT_IST) |
| STAT_WEG_NULLPUNKT_INIT_WERT | mm | - | int | - | - | 1.0 | 100.0 | 0.0 | Initialisierung Pedal Nullpunkt |
| STAT_WEG_NULLPUNKT_IST_WERT | mm | - | int | - | - | 1.0 | 100.0 | 0.0 | aktueller Pedal Nullpunkt |
| STAT_WEG_LEERWEG_IST_WERT | mm | - | int | - | - | 1.0 | 100.0 | 0.0 | aktueller Pedal Leerweg (Einsatz Hydraulik bezogen auf WEG_NULLPUNKT_IST) |

### RES_0XDBF6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_SOLL_WERT | Nm | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Bremsrekuperation |
| STAT_MOMENT_IST_WERT | Nm | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Bremsrekuperation |

### RES_0XDC14_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RPA_VERSION_NR_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversionsnummer RPA-Software |
| STAT_RPA_VERSION_NR_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversionsnummer RPA-Software |
| STAT_KM_LETZTE_STANDARDISIERUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte Initialisierung |
| STAT_KM_LETZTE_STANDARDISIERUNG_MINUS_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte Initialisierung |
| STAT_KM_LETZTE_STANDARDISIERUNG_MINUS_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vor-vorletzten Initialisierung |
| STAT_TAGE_SEIT_LETZTER_STANDARDISIERUNG_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Tage seit der letzten Initialisierung |
| STAT_TAGE_SEIT_LETZTER_STANDARDISIERUNG_MINUS_1_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Tage seit der vorletzten Initialisierung |
| STAT_TAGE_SEIT_LETZTER_STANDARDISIERUNG_MINUS_2_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Tage seit der vor-vorletzten Initialisierung |
| STAT_KM_LETZTE_PANNE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte erkannten Reifenpanne |
| STAT_KM_LETZTE_PANNE_MINUS_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte erkannten Reifenpanne |
| STAT_KM_LETZTE_PANNE_MINUS_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vor-vorletzte erkannten Reifenpanne |
| STAT_TAGE_SEIT_LETZTER_PANNE_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit der letzten erkannten Reifenpanne |
| STAT_TAGE_SEIT_LETZTER_PANNE_MINUS_1_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit der vorletzten erkannten Reifenpanne |
| STAT_TAGE_SEIT_LETZTER_PANNE_MINUS_2_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit der vor-vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der letzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_MINUS_1_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_MINUS_2_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vor-vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | max. Fahrzeuggeschwindigkeit nach der letzten erkannten Reifenpanne (erster wert wird frühestens 30 Sekunden nach der Pannenerkennung eingetragen) |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_MINUS_1_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_MINUS_2_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vor-vorletzten erkannten Reifenpanne |
| STAT_KM_LETZTE_3PLUS1_ERKENNUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte erkannte 3plus-Konstellation |
| STAT_KM_LETZTE_NEUREIFEN_ERKENNUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  letzte erkannte Neureifen-Konstellation |
| STAT_NEUREIFEN_POSITON | 0-n | - | unsigned char | - | TAB_POSITION_RAD | - | - | - | Position des Neureifens bei der letzten Erkennung |
| STAT_URSACHE_WARNUNG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Typ der Warnmeldung (z.B. schnelle Luftfruckverlust etc.) |
| STAT_MAX_NAEHERUNG_WARNGRENZE_SEIT_LETZTER_STD_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale Näherung zur applizierten Warngrenze siet der letzte Initialisierung |

### RES_0XDC15_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNSTATUS_BEREICH_0_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 0 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_1_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 1 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_2_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 2 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_3_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 3 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_4_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 4 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_5_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 5 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_6_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 6 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_7_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 7 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_0_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 0 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_1_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 1 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_2_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 2 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_3_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 3 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_4_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 4 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_5_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 5 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_6_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 6 (100 % = vollständig eingelernt) |
| STAT_KURVENKOMPENSATION_7_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Kurvenkompensation Geschwindigkeitsbereich 7 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_0_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 0 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_1_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 1 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_2_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 2 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_3_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 3 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_4_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 4 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_5_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 5 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_6_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 6 (100 % = vollständig eingelernt) |
| STAT_MOMENTENKOMPENSATION_7_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernstatus Momentenkompensation Momentenbereich 7 (100 % = vollständig eingelernt) |

### RES_0XDC1D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOHOLD_LED_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = LED ein 0 = LED aus |

### RES_0XDC95_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EIGENRAEDER_BEKANNT | 0-n | low | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | - | - | - | Alle Eigenraeder sind bekannt: 0 = nicht bekannt; 1 = bekannt |
| STAT_RADPOS_ER_BEKANNT | 0-n | low | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | - | - | - | Radpositionen aller Eigenraeder sind bekannt: 0 = nicht bekannt; 1 = bekannt |
| STAT_RADPOS_UEBERPRUEFT_BESTAETIGT | 0-n | low | unsigned char | - | TAB_RDC_CONFIRMED | - | - | - | Alle Radpositionen sind ueberprueft und bestaetigt: 0 = nicht bestätigt; 1 = bestätigt |
| STAT_DTC_INACTIVE | 0-n | low | unsigned char | - | TAB_RDC_DTC_ACTIVE | - | - | - | Aktiver DTC Fehler mit Warnlampe im Fehlerspeicher vorhanden: 0 = DTC inaktiv; 1 = DTC aktiv |
| STAT_KAL_ANFORDERUNG_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_CAL_ACTIVE | - | - | - | Kalibrieranforderung steht an: 0 = Kalibrieranforderung inaktiv; 1 = Kalibrieranforderung aktiv |
| STAT_RAD_ZUORDNUNG_TIMEOUT | 0-n | low | unsigned char | - | TAB_RDC_TIMEOUT | - | - | - | Radzuordnung konnte nicht abgeschlossen werden: 0 = kein Timeout; 1 = Timeout |
| STAT_BANDMODE_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_BANDMODE_ACTIVE | - | - | - | Abfrage ob Bandmode im RDC aktiviert ist: 0 = Bandmode inaktiv ; 1 = Bandmode aktiv |
| STAT_ER_ERKENNUNG_FAHRT | 0-n | low | unsigned char | - | TAB_RDC_STARTED | - | - | - | Eigenraderkennung waehrend der Fahrt wurde gestartet: 0 = nicht gestartet 1 = gestartet |
| STAT_TEST_EIGENRAD_FAHRT | 0-n | low | unsigned char | - | TAB_RDC_STARTED | - | - | - | Test-Eigenraderkennung in Fahrt wurde gestartet: 0 = nicht gestartet , 1 = gestartet |
| STAT_TEST_EIGENRAD_STAND | 0-n | low | unsigned char | - | TAB_RDC_STARTED | - | - | - | Test-Eigenraderkennung im Stand wurde gestartet: 0 = nicht gestartet, 1 = gestartet |
| STAT_ER_FAHRT_VTHRS_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Geschwindigkeitsschwelle fuer Eigenraderkennung bei Fahrt aktiviert : 0 = inaktiv , 1 = aktiv |
| STAT_BM_TIMEOUT_ACTIVE | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Bandmode Timeout laeuft : 0 = inaktiv , 1 = aktiv |
| STAT_HARTE_WARNUNG_UNSPEZIFISCH_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung unspezifisch, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_VL_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung vorne links, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_VR_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung vorne rechts, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_HL_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung hinten links, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_HARTE_WARNUNG_HR_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Harte Warnung hinten rechts, aktiv: 0 = inaktiv ; 1 = aktiv |
| STAT_KL_15_EIN | 0-n | low | unsigned char | - | TAB_RDC_ON_OFF | - | - | - | Klemme 15 EIN : 0 = AUS, 1 = EIN |
| STAT_MOTOR_LAEUFT_EIN | 0-n | low | unsigned char | - | TAB_RDC_ON_OFF | - | - | - | Motor läuft : 0 = Aus ; 1 = EIN |
| STAT_FZG_FAEHRT | 0-n | low | unsigned char | - | TAB_RDC_VEHICLE_RUNNING | - | - | - | Signal Fahrzeug fährt : 0 = steht , 1 = fährt |
| STAT_ERKENNUNG_ALLE_RE | 0-n | low | unsigned char | - | TAB_RDC_DETECTED | - | - | - | Alle Radelektroniken erkannt : 0 = nicht erkannt 1 = erkannt |
| STAT_ERKENNUNG_ZUVIELE_RE | 0-n | low | unsigned char | - | TAB_RDC_DETECTED | - | - | - | Zu viele Radelektroniken erkannt : 0 = nicht erkannt , 1 = erkannt |
| STAT_STOERSENDER | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Funkstoerung vorhanden : 0 = inaktiv , 1 = aktiv |
| STAT_FREQUENZ_WERT | MHz | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gibt die aktuelle RF-Frequenz zurück. Die Frequenz ist abhaengig von der Codierung. (315 oder 433). Angabe in MHz |

### RES_0XDC96_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_1_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_1_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_1_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_1_INTERNER_FEHLERCODE_WERT | HEX | low | unsigned int | - | - | - | - | - | SG-interner Fehlercode |
| STAT_1_ZAEHLER_INAKTIV | 0-n | low | unsigned char | - | - | - | - | - | Zähler für Inaktiv-Ereignisse |
| STAT_2_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_2_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_2_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_2_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_2_INTERNER_FEHLERCODE_WERT | HEX | low | unsigned int | - | - | - | - | - | SG-interner Fehlercode |
| STAT_2_ZAEHLER_INAKTIV | 0-n | low | unsigned char | - | - | - | - | - | Zähler für Inaktiv-Ereignisse |
| STAT_3_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_3_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_3_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_3_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_3_INTERNER_FEHLERCODE_WERT | HEX | low | unsigned int | - | - | - | - | - | SG-interner Fehlercode |
| STAT_3_ZAEHLER_INAKTIV | 0-n | low | unsigned char | - | - | - | - | - | Zähler für Inaktiv-Ereignisse |

### RES_0XDC97_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_PLAUSI_DRUCK | 0-n | low | unsigned char | - | TAB_PLAUSI_DRUCK | - | - | - | Eingefüllte Drücke bestanden ja oder nein |
| STAT_1_KALIBRIERUNG | 0-n | low | unsigned char | - | TAB_KALIBRIERUNG | - | - | - | Statusbyte über Erfolg- Misserfolg der Kalibrierung |
| STAT_1_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_1_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_1_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_1_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_1_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_1_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_1_RADPOSITION_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE0 |
| STAT_1_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE0 (-99 °C => ungueltig) |
| STAT_1_RADPOSITION_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE1 |
| STAT_1_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE1 (-9.999 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE1 (-99 °C => ungueltig) |
| STAT_1_RADPOSITION_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE2 |
| STAT_1_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE2 (-99 °C => ungueltig) |
| STAT_1_RADPOSITION_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE3 |
| STAT_1_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE3 (-99 °C => ungueltig) |
| STAT_1_ZAEHLER_KALIBRIERUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Zähler für Kalibrierereignisse |
| STAT_2_PLAUSI_DRUCK | 0-n | low | unsigned char | - | TAB_PLAUSI_DRUCK | - | - | - | Eingefüllte Drücke bestanden ja oder nein |
| STAT_2_KALIBRIERUNG | 0-n | low | unsigned char | - | TAB_KALIBRIERUNG | - | - | - | Statusbyte über Erfolg- Misserfolg der Kalibrierung |
| STAT_2_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_2_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_2_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_2_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_2_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_2_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_2_RADPOSITION_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE0 |
| STAT_2_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE0 (-99 °C => ungueltig) |
| STAT_2_RADPOSITION_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE1 |
| STAT_2_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE1 (-9.999 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE1 (-99 °C => ungueltig) |
| STAT_2_RADPOSITION_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE2 |
| STAT_2_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE2 (-99 °C => ungueltig) |
| STAT_2_RADPOSITION_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE3 |
| STAT_2_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE3 (-99 °C => ungueltig) |
| STAT_2_ZAEHLER_KALIBRIERUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Zähler für Kalibrierereignisse |
| STAT_3_PLAUSI_DRUCK | 0-n | low | unsigned char | - | TAB_PLAUSI_DRUCK | - | - | - | Eingefüllte Drücke bestanden ja oder nein |
| STAT_3_KALIBRIERUNG | 0-n | low | unsigned char | - | TAB_KALIBRIERUNG | - | - | - | Statusbyte über Erfolg- Misserfolg der Kalibrierung |
| STAT_3_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_3_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_3_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_3_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_3_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_3_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_3_RADPOSITION_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE0 |
| STAT_3_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE0 (-99 °C => ungueltig) |
| STAT_3_RADPOSITION_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE1 |
| STAT_3_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE1 (-9.999 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE1 (-99 °C => ungueltig) |
| STAT_3_RADPOSITION_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE2 |
| STAT_3_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE2 (-99 °C => ungueltig) |
| STAT_3_RADPOSITION_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE3 |
| STAT_3_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert Radelektronik RE3 (-99 °C => ungueltig) |
| STAT_3_ZAEHLER_KALIBRIERUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Zähler für Kalibrierereignisse |

### RES_0XDC98_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | low | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | low | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | low | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | low | unsigned char | - | TAB_RE_SENDEMODE | - | - | - | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | low | unsigned int | - | - | - | - | - | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | low | unsigned char | - | TAB_RE_ROLLSWITCH | - | - | - | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | low | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | low | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | low | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | low | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | low | unsigned char | - | TAB_RE_SENDEMODE | - | - | - | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | low | unsigned int | - | - | - | - | - | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | low | unsigned char | - | TAB_RE_ROLLSWITCH | - | - | - | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | low | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC9A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | low | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | low | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | low | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | low | unsigned char | - | TAB_RE_SENDEMODE | - | - | - | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | low | unsigned int | - | - | - | - | - | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | low | unsigned char | - | TAB_RE_ROLLSWITCH | - | - | - | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | low | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC9B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER | 0-n | low | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock) wurde vom SG der jeweiligen Position zugewiesen. Position der Radelektronik: 0 = vorne links,  1 = vorne rechts, 2 = hinten links, 3 = hinten rechts |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | RSSI - Pegel der ID [Einheit: AD Wandler-Einheiten] |
| STAT_RESTLEBENSDAUER | 0-n | low | unsigned int | - | TAB_RDC_RAD_POSITION_NR_UINT | - | - | - | Verbleibende Restlebensdauer der Batterie am Radsensor in Monaten |
| STAT_RADELEKTRONIK_STATUS | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad, 0= Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_POS_CHANGED | 0-n | low | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert, 0 = nicht geändert, 1 = geändert, FF= Signal unbekannt |
| STAT_RE_OVERHEAT_AKTIV | 0-n | low | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Überhitzungsmeldung der Radelektronik vom angewählten Rad, 0 = Inaktiv, 1 = aktiv, FF = Signal unbekannt |
| STAT_DREHRICHTUNG | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Drehrichtung des Rades  0=Stillstand 1=rechts 2=links 3=unbekannt 255=nicht definiert |
| STAT_FOLGEAUSFALL | 0-n | low | unsigned char | - | TAB_RDC_RAD_DREHRICHTUNG | - | - | - | Anzahl Zeitintervalle (typ. 60s) seit letztem Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | low | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | low | unsigned char | - | TAB_RE_SENDEMODE | - | - | - | Sendemode der Radelektronik |
| STAT_RADELEKTRONIK_FEHLER_WERT | HEX | low | unsigned int | - | - | - | - | - | Fehlercode Radelektronik |
| STAT_ROLLSWITCH | 0-n | low | unsigned char | - | TAB_RE_ROLLSWITCH | - | - | - | Status Rollswitch |
| STAT_TELEGRAMMTYP | 0-n | low | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC9C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler Warnereignisse |

### RES_0XDC9D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler Warnereignisse |

### RES_0XDC9E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler Warnereignisse |

### RES_0XDC9F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARN_RUECKNAHME | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Zähler für Warnungsrücknahmen durch Luftnachfüllen oder Radtausch. |

### RES_0XDCD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_RE0_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE0 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE0 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE0_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE0 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE1_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE1 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE1 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE1_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE1 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE2_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE2 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE2 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE2_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE2 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE3_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE3 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE3 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE3_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE3 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE4_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE4 |
| STAT_REIFENDRUCK_RE4_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE4 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE4_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE4 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE4_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE4 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE5_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE5 |
| STAT_REIFENDRUCK_RE5_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE5 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE5_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE5 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE5_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE5 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE6_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE6 |
| STAT_REIFENDRUCK_RE6_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE6 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE6_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE6 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE6_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE6 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE7_WERT | HEX | low | unsigned long | - | - | - | - | - | Identifier Radelektronik RE7 |
| STAT_REIFENDRUCK_RE7_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE7 (-9.999 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE7_WERT | - | low | int | - | - | 1.0 | 1.0 | 0.0 | Restlebensdauer Radelektronik RE7 in Monaten (-999 Monate => ungueltig) |
| STAT_EMPFANGSZAEHLER_RE7_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE7 (255 => ungueltig) |

### RES_0XDCF1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler Warnereignisse |

### RES_0XDCF2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler Warnereignisse |

### RES_0XDCF3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnereignis. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | low | string[9] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnereignis. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | low | long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (-999999 km => ungueltig) |
| STAT_SYSTEMFLAGS_WERT | HEX | low | unsigned long | - | - | - | - | - | Systemflags |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur beim Befüllen |
| STAT_BEFUELL_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur bei Warnereignis |
| STAT_AUSSENDRUCK_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnereignis |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD_WERT | HEX | low | unsigned char | - | - | - | - | - | Radelektronik-Status des Pannenauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Pannenauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE0 |
| STAT_BEFUELLTEMPERATUR_RE0_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE0 |
| STAT_REIFENTEMPERATUR_RE0_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE0 |
| STAT_RADPOSITON_RE1 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE1 |
| STAT_BEFUELLTEMPERATUR_RE1_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE1 |
| STAT_REIFENTEMPERATUR_RE1_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE1 |
| STAT_RADPOSITON_RE2 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE2 |
| STAT_BEFUELLTEMPERATUR_RE2_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE2 |
| STAT_REIFENTEMPERATUR_RE2_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE2 |
| STAT_RADPOSITON_RE3 | 0-n | low | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert RE3 |
| STAT_BEFUELLTEMPERATUR_RE3_WERT | °C | low | char | - | - | 1.0 | 1.0 | 0.0 | Befuelltemperaturwert RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | low | int | - | - | 1.0 | 1000.0 | 0.0 | Reifenddruck RE3 |
| STAT_REIFENTEMPERATUR_RE3_WERT | ° | low | char | - | - | 1.0 | 1.0 | 0.0 | Reifentemperatur RE3 |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | low | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zaehler Warnereignisse |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DSC_ENTLUEFTUNG | 0xA061 | - | Starten, Stoppen und Status Entlüftung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA061_R | RES_0xA061_R |
| DSC_VENTILE_PULS | 0xA064 | - | Starten, Stoppen und Status Puls Ventile (max. 6 gleichzeitig) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA064_R | RES_0xA064_R |
| RADDREHZAHLSENSORPRUEFUNG | 0xA065 | - | Starten, Stoppen und Status Funktionsprüfung Raddrehzahlsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA065_R | RES_0xA065_R |
| DSC_PUMPENFUNKTIONSPRUEFUNG | 0xA066 | - | Starten, Stoppen und Status Funktionsprüfung Pumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA066_R | RES_0xA066_R |
| BPWS_INITIALISIERUNG | 0xA067 | - | Starten, Stoppen und Status Initialisierung Nullstellung Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA067_R | RES_0xA067_R |
| RPA_RESET_STATISTIK | 0xA068 | - | Reset RPA Lerndaten Statistik | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DSC_VAKUUMBEFUELLUNG | 0xA06D | - | Starten (Weiterschalten), Stoppen und Status Vakuumbefüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06D_R | RES_0xA06D_R |
| DSC_VENTILE_KALIBRIERUNG | 0xA06E | - | Starten, Stoppen und Status Kalibrierung DSC Ventile | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06E_R | RES_0xA06E_R |
| DSC_DRUCKSENSOREN_KALIBRIERUNG | 0xA070 | - | Starten, Stoppen und Status Kalibrierung DSC Ventile | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA070_R |
| RPA_RESET_STANDARDISIERUNG | 0xA074 | - | Reset RPA Standardisierung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| VENTILE_KALIBRIERUNG | 0xA08F | - | VENTILE_KALIBRIERUNG | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA08F_R | RES_0xA08F_R |
| DCM_ID | 0xD0D0 | STAT_DCM_NAME_TEXT | Dateiname DCM Länge 64Byte | TEXT | - | high | string[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FBS | 0xD7D7 | - | Fading Funktion (Bremsunterstützung bei überhitzter Bremse) Der 0x22 Job liefert die Daten des letzten Funktionseingriffs. Mit dem 0x2E Job werden die FBS Daten gelöscht. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7D7_D | RES_0xD7D7_D |
| STATUS_MODUS_ROLLENPRUEFSTAND | 0xDB5B | STAT_ROLLENMODUS_NR | Statusabfrage Rollenmodus aktiv im ICM | 0-n | - | - | char | TAB_STATUS_ROLLENMODUS | - | - | - | - | 22 | - | - |
| STEUERN_MODUS_ROLLENPRUEFSTAND | 0xDB98 | - | Vorgeben Rollenmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB98_D | - |
| AUTOHOLDTASTER | 0xDBDE | STAT_AUTOHOLD_TASTER_EIN | Auslesen Zustand AutoHold Taster 1= Taster gedrückt;  0= Taster nicht betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BREMSBELAGSSENSOR | 0xDBDF | - | Auslesen Bremsbelagssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDF_D |
| LMV_FUNKTION | 0xDBE1 | - | Auslesen und Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE1_D | RES_0xDBE1_D |
| REKU_FUNKTION | 0xDBE2 | - | Auslesen und Vorgeben Aktivierung Funktion Rekuperation (Bremsenergierückgewinnung) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE2_D | RES_0xDBE2_D |
| REIFENPANNENANZEIGE | 0xDBE3 | - | Reifenpannenanzeige | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE3_D |
| GESCHWINDIGKEIT_RAD | 0xDBE4 | - | Auslesen Raddrehzahlfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE4_D |
| DSC_DRUCKSENSOREN | 0xDBE5 | - | Auslesen Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE5_D |
| DSC_KLEMMEN | 0xDBE7 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE7_D |
| DSC_PUMPE | 0xDBE8 | - | Auslesen und Vorgeben Ansteuerung Pumpe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDBE8_D | RES_0xDBE8_D |
| DSC_VENTILE | 0xDBE9 | - | Auslesen und Vorgeben Ansteuerung Ventile | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDBE9_D | RES_0xDBE9_D |
| VAKUUMSENSOR | 0xDBF4 | - | Auslesen Vakuumsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF4_D |
| BREMSPEDALWEGSENSOR | 0xDBF5 | - | Auslesen Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF5_D |
| BREMSREKUPERATIONSMOMENT | 0xDBF6 | - | Auslesen Radmoment Bremsrekuperation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF6_D |
| RPA_LERNDATEN_STATISTIK | 0xDC14 | - | Auslesen Lerndaten Statisik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC14_D |
| RPA_LERNDATEN_STD | 0xDC15 | - | Auslesen Lerndaten Standardisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC15_D |
| AUTOHOLDLED | 0xDC1D | - | Auslesen und Vorgeben AutoHold LED | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC1D_D | RES_0xDC1D_D |
| BREMSFLUESSIGKEITSSCHALTER | 0xDC1F | STAT_BREMSFLUESSIGKEIT_NIVEAU_SCHALTER_EIN | Auslesen Niveau Bremsflüssigkeit 1 = ein (leuchtet);  0 = aus oder Unterbrechung | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_RDC_VERSION | 0xDC94 | STAT_RDC_VERSION_WERT | Zeigt die aktuelle Softwareversion vom RDC an. | - | - | low | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_RDC_LESEN | 0xDC95 | - | STATUS_RDC_LESEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC95_D |
| RDC_HS_INAKTIVEREIGNIS | 0xDC96 | - | RDC_HS_INAKTIVEREIGNIS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC96_D |
| RDC_HS_KALIBRIEREREIGNIS | 0xDC97 | - | RDC_HS_KALIBRIEREREIGNIS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC97_D |
| RDC_MESSDATENBLOCK_1 | 0xDC98 | - | RDC_MESSDATENBLOCK_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC98_D |
| RDC_MESSDATENBLOCK_2 | 0xDC99 | - | RDC_MESSDATENBLOCK_2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC99_D |
| RDC_MESSDATENBLOCK_3 | 0xDC9A | - | RDC_MESSDATENBLOCK_3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9A_D |
| RDC_MESSDATENBLOCK_4 | 0xDC9B | - | RDC_MESSDATENBLOCK_4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9B_D |
| RDC_HS_WARNEREIGNIS_1 | 0xDC9C | - | RDC_HS_WARNEREIGNIS_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9C_D |
| RDC_HS_WARNEREIGNIS_2 | 0xDC9D | - | RDC_HS_WARNEREIGNIS_2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9D_D |
| RDC_HS_WARNEREIGNIS_3 | 0xDC9E | - | RDC_HS_WARNEREIGNIS_3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9E_D |
| RDC_HS_WARNEREIGNIS_RUECKNAHME | 0xDC9F | - | RDC_HS_WARNEREIGNIS_RUECKNAHME | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9F_D |
| STEUERN_RADELEKTRONIK_VORGEBEN | 0xDCC0 | - | Radelektronik vorgeben. Der Job weist der Radelektronik die durch das 1.Argument angewählt wurde, ihre Position am Fahrzeug zu (z.B. vorn rechts). Die Radelektronik kennt sonst ihre Position im Fahrzeug nicht. Sie kennt nur ihre ID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC0_D | - |
| STEUERN_DIGITAL_RDC | 0xDCC6 | - | Setzen diverser Bandmodi Achtung: Busdiagnose und Tests im Stand nur mit RDC Generation2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC6_D | - |
| STATUS_RE_LESEN_DRUCKCODIERUNG | 0xDCD9 | - | Auslesen Druckcodierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD9_D |
| STEUERN_SOLLDRUCK_VORGEBEN | 0xDCEE | - | Vorgabe Sollwert Reifendruck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCEE_D | - |
| RDC_HS_WARNEREIGNIS_WEICH_1 | 0xDCF1 | - | RDC_WARNEREIGNIS_WEICH_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF1_D |
| RDC_HS_WARNEREIGNIS_WEICH_2 | 0xDCF2 | - | RDC_HS_WARNEREIGNIS_WEICH_2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF2_D |
| RDC_HS_WARNEREIGNIS_WEICH_3 | 0xDCF3 | - | RDC_HS_WARNEREIGNIS_WEICH_3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF3_D |

### TAB_BBV_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | 1. Stufe erreicht |
| 0x02 | 2. Stufe erreicht |
| 0xFF | nicht verfügbar |

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
| 0x09 | Fehler - Abweichung zur Soll-Nullstellung zu groAY |
| 0x0A | Fehler - Bremspedal zu gering betätigt |
| 0x0B | Fehler - Fahrzeug steht nicht |
| 0x0C | Fehler - Verbrennungsmotor läuft nicht bzw. Unterdruck im Bremskraftverstärker zu gering |
| 0x0D | Fehler - Bremslichtschalter oder Vordruck nicht unbetätigt bei Start der Routine |
| 0x0E | Fehler - elektrischer Fehler des Bremspedalwegsensors ist aktiv |
| 0xFF | nicht definiert |

### TAB_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stand |
| 0x01 | Vorwaerts |
| 0x02 | Rueckwaerts |
| 0x03 | nicht definiert |

### TAB_DSC_DETAIL_VENTIL_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Raeder nicht im Stillstand |
| 0x02 | Bremspedal wurde betätigt |
| 0x03 | Ueberspannung oder Unterspannung |
| 0x04 | Betriebstemperatur zu niedrig |
| 0x05 | Betriebstemperatur zu hoch |
| 0x06 | Motor aus |
| 0xFF | ungueltig |

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

### TAB_DSC_PHASE_VAKUUMBEFUELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nv |
| 0x01 | evakuieren |
| 0x02 | fuellen |
| 0x03 | nivellieren |

### TAB_DSC_PHASE_VENTILE_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nv |
| 0x01 | Einlassventile |
| 0x02 | Auslassventile |
| 0x03 | Vorladeventile |
| 0x04 | Trennventile |

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

### TAB_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | RDCi stopped with Failed |
| 0x01 | RDCi finished with Success |
| 0xFF | RDCi is Ongoing |

### TAB_PLAUSI_DRUCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Failed |
| 0x01 | Passed |
| 0xFF | Ongoing |

### TAB_POSITION_RAD

| WERT | TEXT |
| --- | --- |
| 0 | keine |
| 1 | vorn links |
| 2 | vorn rechts |
| 3 | hinten links |
| 4 | hinten rechts |

### TAB_RDC_AKTIV_INAKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv |
| 0x02 | Tankstop |
| 0x03 | Gateway oder Antennenfehler |
| 0xFF | Signal unbekannt |

### TAB_RDC_BANDMODE_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Bandmode inaktiv |
| 1 | Bandmode aktiv |
| 255 | nicht definiert |

### TAB_RDC_BEKANNT_NICHT_BEKANNT

| WERT | TEXT |
| --- | --- |
| 0 | nicht bekannt |
| 1 | bekannt |
| 255 | nicht definiert |

### TAB_RDC_CAL_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrieranforderung inaktiv |
| 1 | Kalibrieranforderung aktiv |
| 2 | Kalibrierung abgewiesen |
| 255 | nicht definiert |

### TAB_RDC_CHANGED

| WERT | TEXT |
| --- | --- |
| 0 | nicht geändert |
| 1 | geändert |
| 255 | Signal unbekannt |

### TAB_RDC_CONFIRMED

| WERT | TEXT |
| --- | --- |
| 0 | nicht bestätigt |
| 1 | bestätigt |
| 255 | nicht definiert |

### TAB_RDC_DETECTED

| WERT | TEXT |
| --- | --- |
| 0 | nicht erkannt |
| 1 | erkannt |
| 255 | nicht definiert |

### TAB_RDC_DTC_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | DTC inaktiv |
| 1 | DTC aktiv |
| 255 | nicht definiert |

### TAB_RDC_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | ein |
| 9 | nicht bedient |
| 255 | nicht definiert |

### TAB_RDC_RAD_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0 | Stillstand |
| 1 | rechts |
| 2 | links |
| 3 | unbekannt |
| 255 | nicht definiert |

### TAB_RDC_RAD_POSITION_NR

| WERT | TEXT |
| --- | --- |
| 0 | vorne links |
| 1 | vorne rechts |
| 2 | hinten links |
| 3 | hinten rechts |
| 5 | unbekannt 1 |
| 4 | Reserverad (nur RDC Gen2) |
| 6 | unbekannt 2 |
| 7 | unbekannt 3 |
| 8 | unbekannt 4 |
| 9 | unbekannt 5 (nur RDC Gen2) |

### TAB_RDC_RAD_POSITION_NR_UINT

| WERT | TEXT |
| --- | --- |
| 0 | vorne links |
| 1 | vorne rechts |
| 2 | hinten links |
| 3 | hinten rechts |
| 5 | unbekannt 1 |
| 4 | Reserverad (nur RDC Gen2) |
| 6 | unbekannt 2 |
| 7 | unbekannt 3 |
| 8 | unbekannt 4 |
| 9 | unbekannt  (nur RDC Gen2) |

### TAB_RDC_STARTED

| WERT | TEXT |
| --- | --- |
| 0 | nicht gestartet |
| 1 | gestartet |
| 255 | nciht definiert |

### TAB_RDC_STEUERFUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 1 | BANDMODE |
| 2 | ER_FAHRT |
| 3 | ER_STAND |
| 4 | TEST_ER_FAHRT |
| 5 | TEST_ER_STAND |
| 6 | RDCBUS_DIAG |
| 7 | SOLLDRUCK_SCHREIBEN |
| 8 | CAL_REQUEST |
| 9 | ER_FAHRT_OHNE_TRIGGER |
| 10 | TEST_ER_FAHRT_OHNE_TRIGGER |
| 11 | EINSCHALTEN_APPLIKATIONSBOTSCHAFT |

### TAB_RDC_TIMEOUT

| WERT | TEXT |
| --- | --- |
| 0 | kein Timeout |
| 1 | Timeout |
| 255 | nicht definiert |

### TAB_RDC_VEHICLE_RUNNING

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt |
| 255 | nicht definiert |

### TAB_RE_HERSTELLER

| WERT | TEXT |
| --- | --- |
| 0 | nicht bedient |
| 1 | Autonet |
| 2 | BERU |
| 3 | Conti |
| 4 | TRW |
| 5 | Schrader |
| 15 | Hersteller unbekannt |

### TAB_RE_ROLLSWITCH

| WERT | TEXT |
| --- | --- |
| 0 | Rollswitch nicht gesetzt |
| 1 | Rollswitch gesetzt |
| 16 | Rollswitch Toggle |

### TAB_RE_SENDEMODE

| WERT | TEXT |
| --- | --- |
| 0 | Mode 0a/0b |
| 1 | Mode 1a/b/c/d |
| 2 | Mode 2 |
| 3 | Mode 3 |
| 4 | Mode 4 |
| 8 | Mode 0a/0b  LF triggered telegram |
| 9 | Mode 1a/b/c/d  LF triggered telegram |
| 10 | Mode 2  LF triggered telegram |
| 11 | Mode 3  LF triggered telegram |
| 12 | Mode 4  LF triggered telegram |

### TAB_RE_TELEGRAMMTYP

| WERT | TEXT |
| --- | --- |
| 0 | AK35 default |
| 130 | BERU G3 only |
| 136 | AK35 BERU long |
| 160 | AK35 BERU medium |
| 193 | AK35 BERU short |

### TAB_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen Werksrollenmodus |
| 2 | Setzen Rollenmodus Innenraum |

### TAB_STATUS_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Rolle |
| 0x01 | 1-Achsrolle Vorderachse (Fzg mit Kombi-Menue) oder Bandenderolle |
| 0x02 | 1-Achsrolle Hinterachse |
| 0x03 | 2-Achsrolle |
| 0x04 | Bandenderolle (Werk) |
| 0x0E | ungueltig |

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

### TAB_VENTILE_KALIBRIERUNG_1

| WERT | TEXT |
| --- | --- |
| 1 | Fehler Spannungswert außerhalb des definierten Bereichs (< 11 V oder > 16 V) |
| 2 | Aktuelle Daten über erlaubtem Max-Wert |
| 4 | Aktuelle Daten unter erlaubtem Min-Wert |
| 8 | TMC-Druck größer 0 bar |
| 10 | Fahrzeug nicht im Stillstand |
| 20 | Drucksensor nicht kalibriert |
| 40 | Drucksensor ist defekt |
| 80 | Pumpe läuft während Kalibrierung |

### TAB_VENTILE_KALIBRIERUNG_2

| WERT | TEXT |
| --- | --- |
| 1 | Interner Kommunikationsfehler: Daten der BFU inkorrekt |
| 2 | Kommunikationsfehler: Anfrage abgelehnt |
| 4 | Kalibrierungszeit überschritten |
| 8 | Diagnoseverbindung gestört |
| 10 | HCU Temperatur zu hoch (> 70 °C) |
| 20 | Kalibrierung abgebrochen |
| 40 | HCU Temperatur zu gering (< 10 °C) |
| 80 | Benötigte Komponente(n) nicht verfügbar |

### TAB_VENTILE_KALIBRIERUNG_3

| WERT | TEXT |
| --- | --- |
| 1 | Fahrzeuggeschwindigkeit unter den erlaubten Min-Wert gefallen |
| 2 | Aktive Diagnose-Session wurde während der Kalibrierung erkannt |
| 4 | Kalibrierung wurde von anderer (aktiver, nicht autorisierter) Komponente unterbrochen |
| 8 | Keine gültige Kalibrierung gefunden |
| 10 | Bremslichtschaltung wurde nicht bestätigt |
| 20 | Kalibrierungsergebnis kann nicht in den EEPROM geschrieben werden |
| 40 | Kalibrierung durch den Komponenten-Service-Handler (SVC) abgebrochen |
| 80 | Temperatursignal nicht verfügbar |
