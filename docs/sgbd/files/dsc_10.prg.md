# dsc_10.prg

## General

|  |  |
| --- | --- |
| File | dsc_10.prg |
| Type | PRG |
| Jobs | 54 |
| Tables | 131 |
| Origin | BMW EF-511 Robert_Heinrich |
| Revision | 3.001 |
| Author | BMW EF-513 KarlStürzer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitäts Control - Generation 9 |  |  |
| ORIGIN | string | BMW EF-511 Robert_Heinrich |  |  |
| REVISION | string | 3.001 |  |  |
| AUTHOR | string | BMW EF-513 KarlStürzer |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.49 |  |  |
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

### _FLM_LESEN_BMW

Auslesen der FASTA Daten und der Debug Codierung UDS: $22 $5011 ReadDataByID FASTA_DATEN UDS: $22 $3000 ReadDataByID Codierdaten Allgemein Modus   : Default

_No arguments._

### _FLM_LESEN_BOSCH

Auslesen der FASTA Daten des Boschbereichs UDS: $22 $5013 ReadDataByID FASTA_DATEN_BOSCH Modus   : Default

_No arguments._

### _STEUERN_DSC_PDMID

Beschreibung UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $F018 PDM By ID Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| PDMID | int | 0x0000 - 0xFFFF |
| ID | int | 0x00 - 0xFF |
| DATEN | string | Daten in Hex mit Komma getrennt (Beispiel: 01, 1F, ...) |

### _STATUS_DSC_PDMID

Beschreibung UDS  : $31   RoutineControl UDS  : $03   statRoutine UDS  : $F018 PDMID Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| PDMID | int | 0x0000 - 0xFFFF |
| ID | int | 0x00 - 0xFF |

### STATUS_REIFENPANNENANZEIGE

Auslesen Reifenpannenanzeige UDS SID : $22   ReadDataByIdentifier UDS DID : $4005 _REIFENPANNENANZEIGE UDS DID : $4007 _RPA_LERNDATEN_STD_RB wird ersetzt durch DID : $DBE3 Modus: Default

_No arguments._

### _DID_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $22 ReadDataByID Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DID | unsigned int | 0x0000 - 0xFFFF |

### DSC_BELAGDICKE_NEUFAHRZEUG

Auslesen der Bremsbelagsdicke eines Neufahrzeugs (Vorne und Hinten) UDS: $22 $3005 ReadDataByID Codierdaten BBV Modus   : Default

_No arguments._

### _BYTE_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |

### STATUS_DEBUG_DMCLIENT_SYSTIME

Systemzeit UDS  : $22   ReadDataByIdentifier UDS  : $1701 Sub-Parameter Systemzeit Modus: Default

_No arguments._

### DSC_VARIANTE_HYBRID

Auslesen der Hybridvariante UDS: $22 $3000 ReadDataByID Codierdaten Allgemein Modus   : Default

_No arguments._

### STATUS_VIN_LESEN

Fahrgestellnummer UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter VIN Modus: Default

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

### ARG_0XDC74_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CBC_FUNKTION_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Status der CBC Funktion (0=aus, 1=ein) |

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

### BF_4005_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARNUNG_AKTIV | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Anzeige ob Warnung anliegt; keine Warnung = 0; Warnung = 1 |
| STAT_REJECTION_PHASE | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Zurückweisung aktiv; nicht aktiv = 0; aktiv = 1 |
| STAT_SYSTEMFUNKTION_AKTIV | 0/1 | high | unsigned char | 0x04 | - | - | - | - | RPA-System aktiv; nicht aktiv = 0; aktiv = 1 |
| STAT_STANDARDISIERUNG_AKTIV | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Standardisierung aktiv; nicht aktiv  = 0; aktiv = 1 |
| STAT_BLINDPHASE_AKTIV | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Blindphase zu Beginn einer Standardisierung (bis erste Warnung möglich ist); nicht aktiv = 0; aktiv = 1 |
| STAT_BREMSLICHTSCHALTER_AKTIV | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Bremslichtschalter; nicht aktiv = 0; aktiv = 1 |

### BF_4005_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLATTROLLEN_ERKANNT | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Wurde ein platter Reifen erkannt (für Schiefstellung der EHC); nicht erkannt = 0; erkannt = 1 |
| STAT_3PLUS1_ERKANNT | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Anzeige ob 3Plus1-Konstellation erkannt wurde; nicht erkannt = 0; erkannt = 1 |
| STAT_NEUREIFEN_ERKANNT | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Anzeige ob Neureifen-Konstellation erkannt wurde; nicht erkannt = 0; erkannt = 1 |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CBS_ECU_NAME_DOP

| WERT | TEXT |
| --- | --- |
| 15 | QSG |
| 18 | DME/DDE |
| 19 | DME/DDE_Slave |
| 25 | VGSG |
| 41 | DSC |
| 67 | POW |
| 96 | Kombi |
| 120 | IHKA |
| 254 | DKG |
| 255 | nicht erlaubt |

### CBS_INFO_SGBD_ECU_NAMEN

| WERT | TEXT |
| --- | --- |
| 0x12 | DME/DDE |
| 0x29 | DSC |
| 0x60 | Kombi |
| 0x13 | DME/DDE_Slave |

### CBS_KENNUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | Motoroel |
| 0x02 | Bremsbelag vorne |
| 0x03 | Bremsfluessigkeit |
| 0x06 | Bremsbelag hinten |
| 0x11 | Sichtpruefung/Fahrzeug-Check |
| 0x14 | Uebergabedurchsicht |
| 0x15 | Einfahrkontrolle |
| 0x20 | §Fahrzeuguntersuchung |
| 0x21 | §Abgasuntersuchung |
| 0x0D | NOx-Additiv |
| 0x64 | Sichtpruefung / Fahrzeug-Check verknuepft |

### DM_TAB_ROE_ACTIVATED_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Aktive Fehlermeldung deaktiviert |
| 1 | Aktive Fehlermeldung aktiviert |

### ENERGIESPARMODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normalmode |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | Flashmode |

### EXTENDED_ENERGY_MODE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Erweiterter Betriebsmodus nicht gesetzt |
| 1 | Erweiterter Betriebsmodus 1 |
| 2 | Erweiterter Betriebsmodus 2 |
| 3 | Erweiterter Betriebsmodus 3 |
| 4 | Erweiterter Betriebsmodus 4 |
| 5 | Erweiterter Betriebsmodus 5 |
| 6 | Erweiterter Betriebsmodus 6 |
| 7 | Erweiterter Betriebsmodus 7 |
| 8 | Erweiterter Betriebsmodus 8 |
| 9 | Erweiterter Betriebsmodus 9 |
| 10 | Erweiterter Betriebsmodus 10 |
| 11 | Erweiterter Betriebsmodus 11 |
| 12 | Erweiterter Betriebsmodus 12 |
| 13 | Erweiterter Betriebsmodus 13 |
| 14 | Erweiterter Betriebsmodus 14 |
| 15 | Erweiterter Betriebsmodus 15 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FEHLERKLASSE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Fehlerklasse verfuegbar |
| 1 | Ueberpruefung beim naechsten Werkstattbesuch |
| 2 | Ueberpruefung beim naechsten Halt |
| 4 | Ueberpruefung sofort erforderlich |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022900 | Energiesparmode aktiv | 0 |
| 0x022908 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022909 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02290A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02290B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02290C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF29 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x480681 | Weckleitung aktiv - Bus Sleep registriert bei aktiver Weckleitung | 0 |
| 0x480682 | Verteilergetriebe - Kupplungsposition unbekannt | 1 |
| 0x480683 | EMF - Montagemodus aktiv | 0 |
| 0x480684 | Codierung - Notlaufregler aktiv oder LMV inaktiv | 0 |
| 0x480685 | EMF - Unter- oder Überspannung, anziehen und lösen nicht möglich | 1 |
| 0x48068A | Fahrzeugregler - Längsbeschleunigung - Phase 2: Fehleramplitude zu groß | 1 |
| 0x48068B | Fahrzeugregler - Querbeschleunigung - Phase 2: Fehleramplitude zu groß | 1 |
| 0x48068C | Verteilergetriebe - Kupplung voruebergehend stillgelegt, evtl. Überhitzung | 1 |
| 0x48069B | RDCi Funkverbindung durch Fremdeinfluss gestoert | 1 |
| 0x48069C | Rollenbetrieb - Aktiviert | 0 |
| 0x48069E | RDCi  Kalibrierung Raderkennung nicht moeglich | 0 |
| 0x48069F | Raddrehzahlsensor - Vorn Links - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4806A1 | RDCi Alle Radelektroniken bedingt kompatibel keine Positionsanzeige | 0 |
| 0x4806A3 | Raddrehzahlsensor - Vorn Rechts - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4806A6 | RDCi Radelektronik Position unbekannt Mischverbau | 0 |
| 0x4806AA | Elektrohydraulischer Bremsaktuator - Rückförderpume aufgrund zu langer Pumpenmotor- und Ventilansteuerung überhitzt | 0 |
| 0x4806AB | Steuergerät intern - Bosch keine Unterstützung HW Variante durch SW | 0 |
| 0x4806AC | Lenkwinkelsensor - Fehleramplitude des Lenkwinkel-Signals übersteigt zulaessigen Schwellwert (Phase 2) | 1 |
| 0x4806AD | Lenkwinkelsensor - Fehleramplitude des Lenkwinkel-Signals übersteigt zulaessigen Schwellwert (Phase 1) | 1 |
| 0x4806AE | Drucksensor - Hinten Links - Analog Digital Wandler: Selbsttest fehlgeschlagen | 0 |
| 0x4806AF | Drucksensor - Hinten Links - Leitungsfehler | 0 |
| 0x4806B0 | Drucksensor - Hauptzylinder - Leitungsfehler | 0 |
| 0x4806B1 | Fahrzeugregler - Längsbeschleunigung - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B2 | Fahrzeugregler - Querbeschleunigung - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B3 | Drucksensor - Vorn Links - Analog Digital Wandler: Selbsttest fehlgeschlagen | 0 |
| 0x4806B5 | Drucksensor - Vorn Links - Leitungsfehler | 0 |
| 0x4806B8 | RDCi Radelektronik vorn links kein Empfang | 0 |
| 0x4806BA | Vacuumsensor - Plausi: mit Hauptzylinderbremsdruck | 0 |
| 0x4806BC | Vacuumsensor - Analog/DigitalConverter - fehlerhafter Selbsttest | 0 |
| 0x4806BD | Lokale Spannungsversorgung - Unterhalb 6,6 Volt für Vacuumsensor - Drucksensor | 0 |
| 0x4806C0 | Elektrohydraulischer Bremsaktuator - Hydraulische Leakage festgestellt | 0 |
| 0x4806C3 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 1 Kurzschluss nach Plus | 0 |
| 0x4806C4 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 2 Kurzschluss nach Plus | 0 |
| 0x4806C5 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Masse | 0 |
| 0x4806C6 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung Kurzschluss nach Plus | 0 |
| 0x4806C7 | Bremspedalwegsensor - Plausibilisierung - Wegsignal zu groß | 0 |
| 0x4806C8 | Bremspedalwegsensor - Plausibilisierung - Wegsignal zu klein | 0 |
| 0x4806C9 | Bremspedalwegsensor - Plausibilisierung - Null - Punkt Offset zu groß | 0 |
| 0x4806CC | Fahrzeugregler - Gierrate - Soll - Fehleramplitude des Ackermann-Sollgierraten-Signals übersteigt zulässigen Schwellwert - Phase 1 | 1 |
| 0x4806CD | Fahrzeugregler - Gierrate - Soll - Fehleramplitude des Ackermann-Sollgierraten-Signals übersteigt zulässigen Schwellwert - Phase 2 und 3 | 1 |
| 0x4806CE | EMF - Schnittstelle inaktiv | 1 |
| 0x4806D4 | Reifenpannenanzeige - FASTA-Daten unplausibel. | 0 |
| 0x4806D5 | Reifenpannenanzeige - Standartisierungsdaten unplausibel | 0 |
| 0x4806D7 | Reifenpannenanzeige - Inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Vorderachse. | 1 |
| 0x4806D8 | Reifenpannenanzeige - Inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Hinterachse. | 1 |
| 0x4806DA | RDCi Radelektronik vorn rechts kein Empfang | 0 |
| 0x4806DE |  Fading Control - laenger als 500ms aktiv und Bremsscheibentemp. oberhalb Grenzwert 600 Grad - Infoeintrag - | 0 |
| 0x4806DF |  Fading Control - aktiv und Bremsscheibentemperatur oberhalb Grenzwert 700 Grad - Infoeintrag - | 0 |
| 0x4806E0 | LDM - ACC Stop&Go oder DCC deaktiviert wegen Bremsenüberhitzung, Überhitzung während ECBA-Bremsung | 0 |
| 0x4806E1 | Ventile allgemein - Ventile überhitzt | 0 |
| 0x4806E6 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4806ED | Fahrzeugregler - Gierrate - Ist - Fehleramplitude des Gierraten-Signals übersteigt zulässigen Schwellwert - Phase 1 | 1 |
| 0x4806EE | Fahrzeugregler - Gierrate - Ist - Fehleramplitude des Gierraten-Signals übersteigt zulässigen Schwellwert - Phase 2 und 3 | 1 |
| 0x4806F0 | RDCi Radelektronik hinten links kein Empfang | 0 |
| 0x4806F4 | RDCi Radelektronik hinten rechts kein Empfang | 0 |
| 0x4806FA | RDCi Radelektronik vorn links defekt | 0 |
| 0x4806FD | Bremspedalwegsensor - Nullstellung Sensor 1 - nicht initialisiert | 0 |
| 0x480702 | RDCi Radelektronik vorn rechts defekt | 0 |
| 0x48070F | RDCi Radelektronik hinten links defekt | 0 |
| 0x480710 | Raddrehzahlsensor - Vorn Links - Plausi: Drehrichtung | 0 |
| 0x480713 | Raddrehzahlsensor - Vorn Rechts - Plausi: Drehrichtung | 0 |
| 0x480716 | Raddrehzahlsensor - Hinten Links - Plausi: Drehrichtung | 0 |
| 0x480719 | Raddrehzahlsensor - Hinten Rechts - Plausi: Drehrichtung | 0 |
| 0x48071D | Entwicklungsphase Codierung XCP Parameter ungültig | 0 |
| 0x48071F | RDCi Radelektronik Position unbekannt | 0 |
| 0x480728 | RDCi Radelektronik hinten rechts defekt | 0 |
| 0x480729 | Bremspedalwegsensor - Elektrischer Fehler Versorgungsleitung Unterspannung | 0 |
| 0x48072A | Drucksensor - Druckaufbau im Hinterachskreis zu hoch | 0 |
| 0x48072B | Drucksensor - Druckaufbau im Hinterachskreis zu niedrig | 0 |
| 0x48072C | Bremspedalwegsensor - Plausibilisierung Bremsdruck zu hoch | 0 |
| 0x48072D | Ventile allgemein - Druckaufbau im Hinterachskreis zu hoch | 0 |
| 0x48072E | Ventile allgemein - Druckaufbau im Hinterachskreis zu niedrig | 0 |
| 0x480778 | Steuergerät intern - Bosch - EEPROM - Defragementierungsfehler | 0 |
| 0x48077C | RDCi Radelektronik vorn links Batterie Unterspannung | 1 |
| 0x48077D | RDCi Radelektronik vorn rechts Batterie Unterspannung | 1 |
| 0x48077E | RDCi Radelektronik hinten links Batterie Unterspannung | 1 |
| 0x48077F | RDCi Radelektronik hinten rechts Batterie Unterspannung | 1 |
| 0x480780 | RDCi Radelektronik Bandmode | 0 |
| 0x480782 | RDCi SW-Integration Ausnahmefehler | 0 |
| 0x480788 | Seperationsventil HA - Allgemeiner Fehler | 0 |
| 0x480789 | Druckregelventil - Allgemeiner Fehler | 0 |
| 0x48078B | Vorderachslenkwinkel Lenkwinkelsignal oberhalb VFUSI nicht initialisiert | 1 |
| 0x48078D | Bremspedalwegsensor - Plausibilisierung - Offsetfehler Sensor 1 | 0 |
| 0x48078E | Bremspedalwegsensor - Plausibilisierung - Offsetfehler Sensor 2 | 0 |
| 0x48078F | Bremspedalwegsensor - Plausibilisierung - Vergleich Sensor 1 zu Sensor 2 | 0 |
| 0x480791 | Elektrohydraulischer Bremsaktuator - Systemdruck zu hoch | 0 |
| 0x480792 | Rekuperation - Plausibilität - Bremsmoment | 0 |
| 0x48079D | Bremslichtschalter - nie getretenes Bremspedal (Verdacht) | 0 |
| 0x48079E | Seperationsventil HA - Plausifehler - OBD | 0 |
| 0x4807B2 | Bremspedalwegsensor - Plausibilisierung Bremsdruck zu niedrig | 0 |
| 0x4807B6 | Steuergerät intern - Bosch - ECU - Betriebssystem Ausnahmefehler - OBD | 0 |
| 0x4807B7 | Steuergerät intern - Bosch - ECU - Allgemeiner Fehler - OBD | 0 |
| 0x4807B8 | Steuergerät intern - Bosch - ECU - Allgemeiner Fehler - RAM - OBD | 0 |
| 0x4807BA | Steuergerät intern - Bosch - ECU - Allgemeiner Fehler - ASIC - OBD | 0 |
| 0x4807BB | Elektrohydraulischer Bremsaktuator - Bosch - Versorgungsspannung - OBD-Unterspannung | 0 |
| 0x4807BC | Ventil Relais - Allgemein - OBD | 0 |
| 0x4807BD | Steuergerät intern - Bosch EEPROM Allgemeiner Fehler - OBD | 0 |
| 0x4807C3 | Botschaft (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Timeout | 0 |
| 0x4807C4 | Botschaft (Radmoment Antrieb 3, ID: WMOM_DRV_3) Timeout | 0 |
| 0x4807C5 | Botschaft (Radmoment Antrieb 7, ID: WMOM_DRV_7) Timeout | 0 |
| 0x4807C6 | Signal (Radmoment Antrieb 7, ID: WMOM_DRV_7) ungültig | 0 |
| 0x4807C7 | Bremspedalwegsensor - Hybrid - Plausibilisierung - Wegsignal zu groß | 0 |
| 0x4807C8 | Bremspedalwegsensor - Hybrid - Plausibilisierung - Wegsignal zu klein | 0 |
| 0x4807C9 | FlexRay Hardware - OBD Allgemeiner Fehler | 0 |
| 0x4807CA | Lokale Spannungsversorgung - OBD Überspannung | 0 |
| 0x4807CB | Bremspedalwegsensor - Nullstellung Sensor 2 - nicht initialisiert | 0 |
| 0x4807F5 | Hydraulik Boost - HBC oder HBB Funktion aktiv - Bremspedalgefühl verändert - Infoeintrag | 1 |
| 0x4807F6 | Seperationsventil HA - Plausifehler | 0 |
| 0x48084A | Raddrehzahlsensor - Hinten Links - Fehler-Modus wegen dauerhaftem Fehlerverdacht Plausibilität | 0 |
| 0x480871 | Raddrehzahlsensor - Vorn Rechts - Fehler-Modus wegen dauerhaftem Fehlerverdacht Plausibilität | 0 |
| 0x480879 | Raddrehzahlsensor - Vorn Links - Fehler-Modus wegen dauerhaftem Fehlerverdacht Plausibilität | 0 |
| 0x48087A | Raddrehzahlsensor - Hinten Rechts - Fehler-Modus wegen dauerhaftem Fehlerverdacht Plausibilität | 0 |
| 0x480929 | Bremspedalwegsensor - Plausibilisierung - Sensor 1/2 Leitungen vertauscht | 0 |
| 0x48092D | Rollenbetrieb - Missbrauch | 0 |
| 0x480931 | Bremspedalwegsensor - Plausibilisierung Signalleitung 1 | 0 |
| 0x480932 | Bremsflüssigkeitssensor - Bremsflüssigkeitsstand zu niedrig | 0 |
| 0x480934 | Hydraulik Boost - Unterdruck des Booster zu niedrig | 1 |
| 0x480935 | Bremspedalwegsensor - Plausibilisierung Signalleitung 2 | 0 |
| 0x480936 | Hydraulik Boost - Vakuum zu niedrig - HBC-Funktion degradiert | 0 |
| 0x48093A | EMF - Rücksprung auf Init erkannt oder Init zu lang | 0 |
| 0x480942 | Ventil Relais - Startuptest: Spannungsversorgung VR zu niedrig | 0 |
| 0x480946 | Einlassventil - vorn links - Allgemeiner Fehler | 0 |
| 0x480949 | Auslassventil - vorn links  - Allgemeiner Fehler | 0 |
| 0x48094B | Einlassventil - vorn rechts - Allgemeiner Fehler | 0 |
| 0x48094D | Auslassventil - vorn rechts - Allgemeiner Fehler | 0 |
| 0x48094F | Einlassventil - hinten links - Allgemeiner Fehler | 0 |
| 0x480952 | Auslassventil - hinten links - Allgemeiner Fehler | 0 |
| 0x480954 | Einlassventil - hinten rechts - Allgemeiner Fehler | 0 |
| 0x480956 | Auslassventil - hinten rechts - Allgemeiner Fehler | 0 |
| 0x480958 | Trennventil - Kreis 1 - Allgemeiner Fehler | 0 |
| 0x48095A | Trennventil - Kreis 2 - Allgemeiner Fehler | 0 |
| 0x48095C | Vorladeventil - Kreis 1 - Allgemeiner Fehler | 0 |
| 0x48095D | Lokale Spannungsversorgung - Unterspannung | 0 |
| 0x48095E | Globale Spannungsversorgung - Unterspannung intern | 0 |
| 0x480960 | Vorladeventil - Kreis 2 - Allgemeiner Fehler | 0 |
| 0x480961 | Lokale Spannungsversorgung - Überspannung | 0 |
| 0x480962 | Elektrohydraulischer Bremsaktuator - Intern ADC oder ASIC Fehler | 0 |
| 0x480963 | Lokale Spannungsversorgung - leichte Unterspannung | 0 |
| 0x480964 | Lokale Spannungsversorgung - schwere Unterspannung | 1 |
| 0x480966 | Raddrehzahlsensor - Allgemein - Kurzschluss einer Raddrehzahlfuehler-Spannungsleitung auf UBatt | 0 |
| 0x480968 | Steuergerät intern - Bosch - Ecu - Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler) | 0 |
| 0x48096D | ECBA - Momentenanforderung zu hoch | 0 |
| 0x480970 | Steuergerät intern - Bosch - Ecu - Watchdog-Ueberwachung meldet: Datenfehler aufgetreten | 0 |
| 0x480978 | Allradkupplung Kupplungsmoment voruebergehend reduziert | 0 |
| 0x480979 | Steuergerät intern - Bosch - Ecu - ROM Checksummentest fehlgeschlagen | 0 |
| 0x48097A | Steuergerät intern - Bosch - Ecu - RAM Adressierungstest fehlgeschlagen | 0 |
| 0x48097D | Verteilergetriebe - Kupplungsposition offen, nur Heckantrieb | 1 |
| 0x480981 | Steuergerät intern - Bosch - Ecu - Betriebssystem Ausnahmefehler. | 0 |
| 0x480989 | Steuergerät intern - Bosch - Ecu - Aufstarttest: Enable dauerhaft aus | 0 |
| 0x48099D | Codierung - Falsches Steuergerät (Anzahl Drucksensoren) | 0 |
| 0x4809A2 | Steuergerät intern - Bosch - Ecu - Analog Digital Wandler: Start-Fehler | 0 |
| 0x4809A3 | Steuergerät intern - Bosch - Ecu - Allgemeiner Fehler | 0 |
| 0x4809A5 | Raddrehzahlsensor - Vorn Links - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809A6 | Raddrehzahlsensor - Vorn Links - Signalflanke fehlt | 0 |
| 0x4809A8 | Raddrehzahlsensor - Vorn Links - Luftspalt zu groß | 0 |
| 0x4809AB | Globale Spannungsversorgung - Unterspannung extern | 1 |
| 0x4809AC | Globale Spannungsversorgung - Überspannung extern | 1 |
| 0x4809AE | EMF Tasterleitung unterbrochen | 1 |
| 0x4809AF | EMF Rollüberwachungsfehler | 0 |
| 0x4809B1 | Raddrehzahlsensor - Hinten Links - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809B2 | Raddrehzahlsensor - Hinten Links - Signalflanke fehlt | 0 |
| 0x4809B4 | Raddrehzahlsensor - Hinten Links - Luftspalt zu groß | 0 |
| 0x4809BA | Raddrehzahlsensor - Hinten Rechts - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809BB | Raddrehzahlsensor - Hinten Rechts - Signalflanke fehlt | 0 |
| 0x4809BD | Raddrehzahlsensor - Hinten Rechts - Luftspalt zu groß | 0 |
| 0x4809C1 | EMF - Uebernahme nicht möglich | 1 |
| 0x4809C4 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft in Fahrt | 0 |
| 0x4809C5 | Raddrehzahlsensor - Vorn Rechts - Fehler-Modus wegen dauerhaftem Fehlerverdacht | 0 |
| 0x4809C6 | Raddrehzahlsensor - Vorn Rechts - Signalflanke fehlt | 0 |
| 0x4809C8 | Raddrehzahlsensor - Vorn Rechts - Luftspalt zu groß | 0 |
| 0x4809CE | Codierung - Falsche Software (Allrad/Heckantieb) | 0 |
| 0x4809D0 | Raddrehzahlsensor - Allgemein - Drehrichtung unplausibel | 0 |
| 0x4809D1 | Raddrehzahlsensor - Allgemein - Unplausibilitaet bei ABS-Regelung. | 0 |
| 0x4809D4 | Bremslichtschalter - permanent getretenes Bremspedal (Verdacht) | 0 |
| 0x4809DD | Globale Spannungsversorgung - Überspannung intern | 0 |
| 0x4809DE | Elektrohydraulischer Bremsaktuator - Generatorspannung zu hoch | 0 |
| 0x4809EA | RDCi Radelektronik Position unbekannt defekt | 0 |
| 0x4809EB | RDCi Radelektronik (Position unbekannt) kein Empfang | 0 |
| 0x480A00 | Fahrzeugregler - Unplausibilitaet bei Gierratenregelung - FZR-Controlling - | 1 |
| 0x480A01 | Notbremse - Wegen unplausibler Regelung: Blockieren der Raeder wird moeglich gemacht, Notbremse ausgelöst | 0 |
| 0x480A03 | Status Rückwärtsgang - Plausi: Geschwindigkeit zu hoch im Rückwärtsgang | 0 |
| 0x480A04 | Status Rückwärtsgang - Plausi: Gangwahlschalter passt nicht zu Fahrtrichtung | 0 |
| 0x480A05 | Codierung - Variantencodierung - Ungültig | 0 |
| 0x480A07 | FlexRay Hardware - Allgemeiner Fehler | 0 |
| 0x480A0D | EMF Geschwindigkeitserkennung fehlerhaft | 0 |
| 0x480A0F | Raddrehzahlsensor - Allgemein - Fehlerverdacht bei RDF SAE | 0 |
| 0x480A11 | Bremsbelagsensor - Vorderachse - Verschleissgrenze erreicht | 0 |
| 0x480A12 | Bremsbelagsensor - Hinterachse - Verschleissgrenze erreicht | 0 |
| 0x480A13 | Bremsbelagsensor - Vorderachse - Plausibilität | 0 |
| 0x480A14 | Bremsbelagsensor - Hinterachse - Plausibilität | 0 |
| 0x480A16 | Steuergerät intern - Bosch - Ecu - HET-Modul: Exception | 0 |
| 0x480A17 | Fahrleistungsreduzierung - Fahrleistungsreduzierung durch DSC-Befehl aktiv - Infoeintrag - | 0 |
| 0x480A1F | Ventile allgemein - Überhitzung | 0 |
| 0x480A34 | Elektrohydraulischer Bremsaktuator - Motorrelais Ueberlast erkannt | 0 |
| 0x480A36 | Steuergerät intern - Bosch - Ecu - Analog Digital Wandler: Selbsttest | 0 |
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
| 0x480A45 | Elektrohydraulischer Bremsaktuator Bosch Spannungsversorgung Signalverarbeitungsregler | 0 |
| 0x480A46 | RDCi Gateway oder Antennen Fehler | 1 |
| 0x480A47 | FUSI - Übergang aktiv | 1 |
| 0x480A48 | Elektrohydraulischer Bremsaktuator Bosch Versorgungsspannung | 0 |
| 0x480A51 | EMF - Anziehen nicht möglich | 0 |
| 0x480A52 | EMF - Parkbremse ueberhitzt | 0 |
| 0x480A53 | EMF - Tasterfehler - Taster defekt | 0 |
| 0x480A54 | EMF - Schnittstelle degradiert | 0 |
| 0x480A55 | EMF - Notentriegelt | 0 |
| 0x480A5D | Elektrohydraulischer Bremsaktuator - MRD Versorungsspannung falsch | 0 |
| 0x480A61 | EMF - Schnittstelle ungültig | 0 |
| 0x480A62 | EMF - Lösen nicht möglich | 0 |
| 0x480A65 | Automatik Hold - Taster Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x480A66 | Drucksensor - Drucksensor gegenüber Bremslichtschalter unplausibel | 0 |
| 0x480A67 | Drucksensor - alle Drucksensoren gegenüber Bremslichtschalter unplausibel | 0 |
| 0x480A68 | Drucksensor - Hauptzylinder - Offsetfehler | 0 |
| 0x480A69 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 0 |
| 0x480A6A | Drucksensor - Vorn Links - Offsetfehler | 0 |
| 0x480A6B | Drucksensor - Hinten Links - Offsetfehler | 0 |
| 0x480A6C | Drucksensor - Vorn Links - Impulstest fehlgeschlagen | 0 |
| 0x480A6D | Drucksensor - Hinten Links - Impulstest fehlgeschlagen | 0 |
| 0x480A76 | EMF - Tasterfehler - Richtung anziehen | 0 |
| 0x480A77 | EMF - Tasterfehler - Richtung lösen | 0 |
| 0x480A7A | EMF - Stellvorgang nicht umgesetzt | 1 |
| 0x480A7B | EMF - Stellvorgang nicht rechtzeitig abgeschlossen | 1 |
| 0x480A7C | EMF - Einbremsen aktiv (Infoeintrag) | 0 |
| 0x480A7E | EMF - Zeitverzug EGS - während Anforderung Getriebe-P, während Elektrohydraulischen Modus | 1 |
| 0x480A80 | Codierung - ABS Rückfallebene mit EMF Funktion aktiv | 0 |
| 0x480A81 | Codierung - ABS Rückfallebene ohne EMF Funktion aktiv | 0 |
| 0x480A96 | Steuergerät intern - Bosch - Hardware Raddrehzahlsensor allgemein | 0 |
| 0x480A97 | Ventil Relais - Allgemein | 0 |
| 0x480A98 | Raddrehzahlsensor - Allgemein - Fehlerverdacht bei RDF | 0 |
| 0x480A99 | Ansteuerung Bremse Druckunterschied VA/HA zu hoch | 0 |
| 0x480A9A | Elektrohydraulischer Bremsaktuator Motorrelais Kurzschluss | 0 |
| 0x480A9C | Raddrehzahlsensor - Vorn Links - Falscher Sensortyp | 0 |
| 0x480A9F | Raddrehzahlsensor - Vorn Links - Rauschüberwachung | 0 |
| 0x480AA3 | Raddrehzahlsensor - Vorn Rechts - Falscher Sensortyp | 0 |
| 0x480AA6 | Raddrehzahlsensor - Vorn Rechts - Rauschüberwachung | 0 |
| 0x480AAA | Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 0 |
| 0x480AAD | Raddrehzahlsensor - Hinten Links - Rauschüberwachung | 0 |
| 0x480AB0 | Raddrehzahlsensor Unterspannung | 0 |
| 0x480AB1 | Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 0 |
| 0x480AB4 | Raddrehzahlsensor - Hinten Rechts - Rauschüberwachung | 0 |
| 0x480AB6 | Elektrohydraulischer Bremsaktuator - Rückföderpumpe schwergängig | 0 |
| 0x480AB9 | Steuergerät intern - Bosch EEPROM Allgemeiner Fehler | 0 |
| 0x480ABA | Steuergerät intern - Bosch EEPROM Allgemeiner Fehler Codierbereich | 0 |
| 0x480ABB | Steuergerät intern - Bosch - Hardware System ASIC | 0 |
| 0x480ABC | Steuergerät intern - Bosch - Hardware Ventiltreiber | 0 |
| 0x480AC1 | Codierung - Falsche Antriebsvariante Hybrid | 0 |
| 0x480AC6 | Elektrohydraulischer Bremsaktuator - Generatorspannung zu niedrig | 0 |
| 0x480AC8 | Entwicklungsphase Allgemeiner Fehler | 0 |
| 0xD3441F | FLEXRAY Bus 1 | 0 |
| 0xD34420 | FLEXRAY Controller Error Bus 1 | 0 |
| 0xD34422 | FLEXRAY Controller Error Bus 2 | 0 |
| 0xD34BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD35418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Timeout | 1 |
| 0xD35419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Checksumme | 1 |
| 0xD3541A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Alive | 1 |
| 0xD3541B | Botschaftsfehler (Daten Fahrdynamiksensor Erweitert, ID: DT_DRDYSEN_EXT) - Timeout | 1 |
| 0xD35420 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Timeout | 1 |
| 0xD35421 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Checksumme | 1 |
| 0xD35422 | Botschaftsfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Alive | 1 |
| 0xD35424 | Signalfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) - Ungültig | 1 |
| 0xD35426 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) - Ungültig | 1 |
| 0xD35428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 |
| 0xD3542C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 |
| 0xD35432 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Timeout | 1 |
| 0xD35433 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Checksumme | 1 |
| 0xD35434 | Signalfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) - Ungültig | 1 |
| 0xD35436 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Alive | 1 |
| 0xD35437 | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) - Ungültig | 1 |
| 0xD3543A | Signalfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Ungültig | 1 |
| 0xD35442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) - Ungültig | 1 |
| 0xD35444 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Timeout | 1 |
| 0xD35445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Checksumme | 1 |
| 0xD35448 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) - Ungültig | 1 |
| 0xD3544A | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) - Timeout | 1 |
| 0xD3544B | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V)  - Checksumme | 1 |
| 0xD3544C | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) - Alive | 1 |
| 0xD3544D | Signalfehler (Steuerung Crash, ID: CTR_CR) - Ungültig | 1 |
| 0xD3544E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 |
| 0xD35452 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Timeout | 1 |
| 0xD35454 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Alive | 1 |
| 0xD35456 | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Ungültig | 1 |
| 0xD3545D | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Timeout | 1 |
| 0xD3545F | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Checksumme | 1 |
| 0xD35460 | Botschaftsfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Alive | 1 |
| 0xD35461 | Signalfehler (Daten Bremssystem Motorsteuerung, ID: DT_BRKSYS_ENGMG) - Ungültig | 1 |
| 0xD35462 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) - Timeout | 1 |
| 0xD35466 | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung, ID: BOS_RUECKSTELLUNG) - Ungültig | 1 |
| 0xD3546F | Signalfehler (Dienste - Bedarfsorientierten Service Rückstellung 2, ID: BOS_RUECKSTELLUNG_2) - Ungültig | 1 |
| 0xD35476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Ungültig | 1 |
| 0xD35482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 |
| 0xD354A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Timeout | 1 |
| 0xD354AA | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Ungültig | 1 |
| 0xD354AC | Botschaftsfehler (Fahrzeugzustand, ID: FZZSTD) - Timeout | 1 |
| 0xD354B2 | Signalfehler (Fahrzeugzustand, ID: FZZSTD) - Ungültig | 1 |
| 0xD354B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Ungültig | 1 |
| 0xD354B8 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Timeout | 1 |
| 0xD354B9 | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Checksumme | 1 |
| 0xD354BA | Botschaftsfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Alive | 1 |
| 0xD354BE | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) - Ungültig | 1 |
| 0xD354C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Timeout | 1 |
| 0xD354C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Checksumme | 1 |
| 0xD354C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Alive | 1 |
| 0xD354C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) - Ungültig | 1 |
| 0xD354CC | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Timeout | 1 |
| 0xD354CD | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Checksumme | 1 |
| 0xD354CE | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Alive | 1 |
| 0xD354D0 | Signalfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) - Ungültig | 1 |
| 0xD354E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Checksumme | 1 |
| 0xD354E8 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Timeout | 1 |
| 0xD354E9 | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Checksumme | 1 |
| 0xD354EA | Botschaftsfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Alive | 1 |
| 0xD354EE | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) - Ungültig | 1 |
| 0xD354F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 |
| 0xD354F3 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) - Checksumme | 1 |
| 0xD354F4 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) - Alive | 1 |
| 0xD354F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 |
| 0xD354F8 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Timeout | 1 |
| 0xD354F9 | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Checksumme | 1 |
| 0xD354FA | Botschaftsfehler (Klemmen, ID: KLEMMEN) - Alive | 1 |
| 0xD354FC | Signalfehler (Klemmen, ID: KLEMMEN) - Ungültig | 1 |
| 0xD3550A | Botschaftsfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Timeout | 1 |
| 0xD35510 | Signalfehler (Konfiguration Schalter Fahrdynamik, ID: SU_SW_DRDY) - Ungültig | 1 |
| 0xD35513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Alive | 1 |
| 0xD3551C | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Ungültig | 1 |
| 0xD35538 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Timeout | 1 |
| 0xD35539 | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Checksumme | 1 |
| 0xD3553A | Botschaftsfehler (Neigung Fahrbahn, ID: TLT_RW) - Alive | 1 |
| 0xD3553E | Signalfehler (Neigung Fahrbahn, ID: TLT_RW) - Ungültig | 1 |
| 0xD35542 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Timeout | 1 |
| 0xD35543 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Checksumme | 1 |
| 0xD35544 | Botschaftsfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Alive | 1 |
| 0xD35548 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) - Ungültig | 1 |
| 0xD35552 | Signalfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Ungültig | 1 |
| 0xD35557 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Timeout | 1 |
| 0xD35558 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Timeout | 1 |
| 0xD35559 | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Checksumme | 1 |
| 0xD3555A | Botschaftsfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Alive | 1 |
| 0xD3555E | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) - Ungültig | 1 |
| 0xD3556C | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Ungültig | 1 |
| 0xD3556D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Timeout | 1 |
| 0xD35570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 |
| 0xD35571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Checksumme | 1 |
| 0xD35572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Alive | 1 |
| 0xD3557A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 |
| 0xD35584 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Ungültig | 1 |
| 0xD35586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Timeout | 1 |
| 0xD3558A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Ungültig | 1 |
| 0xD3558C | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 |
| 0xD355A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 |
| 0xD355A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 |
| 0xD355A6 | Botschaftsfehler (Status ARS, ID: ST_ARS) - Timeout | 1 |
| 0xD355AA | Signalfehler (Status ARS, ID: ST_ARS) - Ungültig | 1 |
| 0xD355CA | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Timeout | 1 |
| 0xD355CB | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Checksumme | 1 |
| 0xD355CC | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Alive | 1 |
| 0xD355D0 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Ungültig | 1 |
| 0xD355E2 | Botschaftsfehler (Status Parkbremse, ID: ST_PBRK) - Timeout | 1 |
| 0xD355E3 | Botschaftsfehler (Status Parkbremse, ID: ST_PBRK) - Checksumme | 1 |
| 0xD355E4 | Botschaftsfehler (Status Parkbremse, ID: ST_PBRK) - Alive | 1 |
| 0xD355E6 | Signalfehler (Status Parkbremse, ID: ST_PBRK) - Ungültig | 1 |
| 0xD355EA | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD) - Timeout | 1 |
| 0xD355EB | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD) - Checksumme | 1 |
| 0xD355EC | Botschaftsfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD) - Alive | 1 |
| 0xD355F0 | Signalfehler (Fahrzeug Dynamik Daten Geschätzt Abgesichert, ID:VEH_DYNMC_DT_ESTI_VRFD) - Ungültig | 1 |
| 0xD355F2 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) - Timeout | 1 |
| 0xD355F3 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) - Checksumme | 1 |
| 0xD355F4 | Botschaftsfehler  (Steuerung Crash, ID: CTR_CR ) -  Alive | 1 |
| 0xD355F8 | Signalfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Ungültig | 1 |
| 0xD35646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Timeout | 1 |
| 0xD35647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Checksumme | 1 |
| 0xD35648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Alive | 1 |
| 0xD3564C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Ungültig | 1 |
| 0xD3567D | Botschaftsfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Timeout | 1 |
| 0xD3568C | Botschaftsfehler (Soll Quermomentenverteilung Hinterachse, ID: TAR_LTRQD_BAX) - Timeout | 1 |
| 0xD35693 | Botschaftsfehler (Daten Antriebsstrang 1, ID: DT_PT_1) Timeout | 1 |
| 0xD35694 | Botschaftsfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Timeout | 1 |
| 0xD35695 | Botschaftsfehler (RDC Daten Paket 2, ID: RDC_DT_PCKG_2) - Timeout | 1 |
| 0xD3569A | Botschaftsfehle (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Timeout | 1 |
| 0xD3569B | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Timeout | 1 |
| 0xD356A1 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) - Alive | 1 |
| 0xD356A2 | Botschaftsfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) - Checksumme | 1 |
| 0xD356A4 | Botschaftsfehler (Status Diagnose OBD 3 Fahrdynamik, ID: ST_DIAG_OBD_3_DRDY) - Timeout | 1 |
| 0xD356A8 | Botschaftsfehler (Status Diagnose OBD 1 Fahrdynamik, ID: ST_DIAG_OBD_1_DRDY) - Timeout | 1 |
| 0xD356B3 | Botschaftsfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Timeout | 1 |
| 0xD356C8 | Botschaftsfehler (Soll Quermomentenverteilung Hinterachse, ID: TAR_LTRQD_BAX) - Checksumme | 1 |
| 0xD356D4 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Timeout | 1 |
| 0xD356D5 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Alive | 1 |
| 0xD356D8 | Botschaftsfehler (Daten Einspurmodell Fahrdynamik, ID: DT_STMD_DRDY) - Checksumme | 1 |
| 0xD356E4 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Timeout | 1 |
| 0xD356E5 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Checksumme | 1 |
| 0xD356E6 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Alive | 1 |
| 0xD356F1 | Botschaftsfehler (Status Diagnose OBD 2 Fahrdynamik; ST_DIAG_OBD_2_DRDY) Timeout | 1 |
| 0xD356F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Timeout | 1 |
| 0xD356F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Alive | 1 |
| 0xD35713 | Signalfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Ungültig | 1 |
| 0xD35720 | Botschaftsfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Alive | 1 |
| 0xD35721 | Botschaftsfehler (RDC Daten Paket 2, ID: RDC_DT_PCKG_2) - Alive | 1 |
| 0xD3572E | Botschaftsfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Alive | 1 |
| 0xD35742 | Botschaftsfehler (Status Diagnose OBD 3 Fahrdynamik, ID: ST_DIAG_OBD_3_DRDY) - Alive | 1 |
| 0xD35743 | Botschaftsfehler (Status Diagnose OBD 1 Fahrdynamik, ID: ST_DIAG_OBD_1_DRDY) - Alive | 1 |
| 0xD35744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 |
| 0xD35745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 |
| 0xD35746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 |
| 0xD3574D | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Checksumme | 1 |
| 0xD3574E | Botschaftsfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) - Alive | 1 |
| 0xD35750 | Botschaftsfehler (Status Diagnose OBD 2 Fahrdynamik; ST_DIAG_OBD_2_DRDY) Alive | 1 |
| 0xD35751 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Checksumme | 1 |
| 0xD35752 | Botschaftsfehler (Radmoment Antrieb 1, ID: WMOM_DRV_1) - Alive | 1 |
| 0xD35755 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Timeout | 1 |
| 0xD35757 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Checksumme | 1 |
| 0xD35758 | Botschaftsfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Alive | 1 |
| 0xD35770 | Botschaftsfehler (Soll Quermomentenverteilung Hinterachse, ID: TAR_LTRQD_BAX) - Alive | 1 |
| 0xD35774 | Signalfehler (Soll Quermomentenverteilung Hinterachse, ID: TAR_LTRQD_BAX) - Ungültig | 1 |
| 0xD35775 | Signalfehler (Daten Antriebsstrang 1, ID: DT_PT_1) Ungültig | 1 |
| 0xD35780 | Signalfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Ungültig | 1 |
| 0xD35789 | Signalfehler (Status Diagnose OBD 3 Fahrdynamik, ID: ST_DIAG_OBD_3_DRDY) - Ungültig | 1 |
| 0xD3578A | Signalfehler (Status Diagnose OBD 1 Fahrdynamik, ID: ST_DIAG_OBD_1_DRDY) - Ungültig | 1 |
| 0xD35793 | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Ungültig | 1 |
| 0xD35799 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Ungültig | 1 |
| 0xD3579C | Signalfehler (Status Diagnose OBD 2 Fahrdynamik; ST_DIAG_OBD_2_DRDY) Ungültig | 1 |
| 0xD3583A | Signalfehler (Steuerung Diagnose OBD Fahrdynamik, ID: CTR_DIAG_OBD_DRDY) - Undefiniert | 1 |
| 0xD358E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Timeout | 1 |
| 0xD358F8 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Ungültig | 1 |
| 0xD35907 | Botschaftsfehler (Status ZFM, ID: ST_ZFM) - Timeout | 1 |
| 0xD35909 | Signalfehler (Status ZFM, ID: ST_ZFM) - Ungültig | 1 |
| 0xD35932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 |
| 0xD35936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 |
| 0xD35937 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Undefiniert | 1 |
| 0xD3593C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Timeout | 1 |
| 0xD3593E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Alive | 1 |
| 0xD35940 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Ungültig | 1 |
| 0xD35948 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) - Ungültig | 1 |
| 0xD3594E | Botschaftsfehler (Wankmoment Fahrzeug, ID: MX_VEH) - Timeout | 1 |
| 0xD35952 | Signalfehler (Wankmoment Fahrzeug, ID: MX_VEH) - Ungültig | 1 |
| 0xD359AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 |
| 0xD35A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Timeout | 1 |
| 0xD35A09 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Checksumme | 1 |
| 0xD35A0A | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Alive | 1 |
| 0xD35A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) - Ungültig | 1 |
| 0xD35A74 | Botschaftsfehler (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) - Timeout | 1 |
| 0xD35A78 | Signalfehler (Status Motor Start Auto, ID: STAT_ENG_STA_AUTO) - Ungültig | 1 |
| 0xD35B00 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Timeout | 1 |
| 0xD35B01 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Checksumme | 1 |
| 0xD35B02 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Alive | 1 |
| 0xD35B04 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) - Ungültig | 1 |
| 0xD35B1C | Signalfehler (Höhenstand Fahrzeug, ID: HGLV_VEH) - Ungültig | 1 |
| 0xD35B21 | Botschaftsfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) - Timeout | 1 |
| 0xD35B22 | Signalfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) - Ungültig | 1 |
| 0xD35B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Timeout | 1 |
| 0xD35B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Checksumme | 1 |
| 0xD35B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) - Alive | 1 |
| 0xD35B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Timeout | 1 |
| 0xD35B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Checksumme | 1 |
| 0xD35B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) - Alive | 1 |
| 0xD35B43 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Timeout | 1 |
| 0xD35B44 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Checksumme | 1 |
| 0xD35B45 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Alive | 1 |
| 0xD35B47 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) - Ungültig | 1 |
| 0xD35C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) - Timeout | 1 |
| 0xD36500 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Timeout | 1 |
| 0xD36501 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Checksumme | 1 |
| 0xD36502 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Alive | 1 |
| 0xD36C81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x5002 | FAHRZEUGZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5004 | ANTRIEBSZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5006 | BETRIEBSSPANNUNG_MIN | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x5007 | BETRIEBSSPANNUNG_MAX | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x5008 | SPANNUNGSMASTER | HEX | High | unsigned char | - | - | - | - |
| 0x500A | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x500B | FUNKTIONSZUSTAND | HEX | High | unsigned int | - | - | - | - |
| 0x500C | INT_FUNKTIONSZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x500E | INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x500F | FEHLERSPEICHERSPERRE_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0x5014 | BLS_PLAUSIDATEN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
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
| 0x030900 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 1 | 1 |
| 0x030901 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 2 | 1 |
| 0x030902 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 3 | 1 |
| 0x030903 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 4 | 1 |
| 0x030904 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 5 | 1 |
| 0x030905 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 6 | 1 |
| 0x030906 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 7 | 1 |
| 0x030907 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 8 | 1 |
| 0x030908 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 9 | 1 |
| 0x030909 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 10 | 1 |
| 0x03090A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 11 | 1 |
| 0x03090B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 12 | 1 |
| 0x03090C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 13 | 1 |
| 0x03090D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 14 | 1 |
| 0x03090E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 15 | 1 |
| 0x03090F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 16 | 1 |
| 0x030910 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 17 | 1 |
| 0x030911 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 18 | 1 |
| 0x030912 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 19 | 1 |
| 0x030913 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 20 | 1 |
| 0x030914 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 21 | 1 |
| 0x030915 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 22 | 1 |
| 0x030916 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 23 | 1 |
| 0x030917 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 24 | 1 |
| 0x030918 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 25 | 1 |
| 0x030919 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 26 | 1 |
| 0x03091A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 27 | 1 |
| 0x03091B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 28 | 1 |
| 0x03091C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 29 | 1 |
| 0x03091D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 30 | 1 |
| 0x03091E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 31 | 1 |
| 0x03091F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 32 | 1 |
| 0x030920 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 33 | 1 |
| 0x030921 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 34 | 1 |
| 0x030922 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 35 | 1 |
| 0x030923 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 36 | 1 |
| 0x030924 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 37 | 1 |
| 0x030925 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 38 | 1 |
| 0x030926 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 39 | 1 |
| 0x030927 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 40 | 1 |
| 0x030928 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 41 | 1 |
| 0x030929 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 42 | 1 |
| 0x03092A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 43 | 1 |
| 0x03092B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 44 | 1 |
| 0x03092C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 45 | 1 |
| 0x03092D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 46 | 1 |
| 0x03092E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 47 | 1 |
| 0x03092F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 48 | 1 |
| 0x030930 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 49 | 1 |
| 0x030931 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 50 | 1 |
| 0x030932 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 51 | 1 |
| 0x030933 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 52 | 1 |
| 0x030934 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 53 | 1 |
| 0x030935 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 54 | 1 |
| 0x030936 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 55 | 1 |
| 0x030937 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 56 | 1 |
| 0x030938 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 57 | 1 |
| 0x030939 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 58 | 1 |
| 0x03093A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 59 | 1 |
| 0x03093B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 60 | 1 |
| 0x03093C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 61 | 1 |
| 0x03093D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 62 | 1 |
| 0x03093E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 63 | 1 |
| 0x03093F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 64 | 1 |
| 0x030940 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 65 | 1 |
| 0x030941 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 66 | 1 |
| 0x030942 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 67 | 1 |
| 0x030943 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 68 | 1 |
| 0x030944 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 69 | 1 |
| 0x030945 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 70 | 1 |
| 0x030946 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 71 | 1 |
| 0x030947 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 72 | 1 |
| 0x030948 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 73 | 1 |
| 0x030949 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 74 | 1 |
| 0x03094A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 75 | 1 |
| 0x03094B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 76 | 1 |
| 0x03094C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 77 | 1 |
| 0x03094D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 78 | 1 |
| 0x03094E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 79 | 1 |
| 0x03094F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 80 | 1 |
| 0x030950 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 81 | 1 |
| 0x030951 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 82 | 1 |
| 0x030952 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 83 | 1 |
| 0x030953 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 84 | 1 |
| 0x030954 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 85 | 1 |
| 0x030955 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 86 | 1 |
| 0x030956 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 87 | 1 |
| 0x030957 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 88 | 1 |
| 0x030958 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 89 | 1 |
| 0x030959 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 90 | 1 |
| 0x03095A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 91 | 1 |
| 0x03095B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 92 | 1 |
| 0x03095C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 93 | 1 |
| 0x03095D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 94 | 1 |
| 0x03095E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 95 | 1 |
| 0x03095F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 96 | 1 |
| 0x030960 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 97 | 1 |
| 0x030961 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 98 | 1 |
| 0x030962 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 99 | 1 |
| 0x030963 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 100 | 1 |
| 0x030964 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 101 | 1 |
| 0x030965 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 102 | 1 |
| 0x030966 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 103 | 1 |
| 0x030967 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 104 | 1 |
| 0x030968 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 105 | 1 |
| 0x030969 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 106 | 1 |
| 0x03096A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 107 | 1 |
| 0x03096B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 108 | 1 |
| 0x03096C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 109 | 1 |
| 0x03096D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 110 | 1 |
| 0x03096E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 111 | 1 |
| 0x03096F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 112 | 1 |
| 0x030970 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 113 | 1 |
| 0x030971 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 114 | 1 |
| 0x030972 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 115 | 1 |
| 0x030973 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 116 | 1 |
| 0x030974 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 117 | 1 |
| 0x030975 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 118 | 1 |
| 0x030976 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 119 | 1 |
| 0x030977 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 120 | 1 |
| 0x030978 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 121 | 1 |
| 0x030979 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 122 | 1 |
| 0x03097A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 123 | 1 |
| 0x03097B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 124 | 1 |
| 0x03097C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 125 | 1 |
| 0x03097D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 126 | 1 |
| 0x03097E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 127 | 1 |
| 0x03097F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 128 | 1 |
| 0x030980 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 129 | 1 |
| 0x030981 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 130 | 1 |
| 0x030982 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 131 | 1 |
| 0x030983 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 132 | 1 |
| 0x030984 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 133 | 1 |
| 0x030985 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 134 | 1 |
| 0x030986 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 135 | 1 |
| 0x030987 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 136 | 1 |
| 0x030988 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 137 | 1 |
| 0x030989 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 138 | 1 |
| 0x03098A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 139 | 1 |
| 0x03098B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 140 | 1 |
| 0x03098C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 141 | 1 |
| 0x03098D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 142 | 1 |
| 0x03098E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 143 | 1 |
| 0x03098F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 144 | 1 |
| 0x030990 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 145 | 1 |
| 0x030991 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 146 | 1 |
| 0x030992 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 147 | 1 |
| 0x030993 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 148 | 1 |
| 0x030994 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 149 | 1 |
| 0x030995 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 150 | 1 |
| 0x030996 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 151 | 1 |
| 0x030997 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 152 | 1 |
| 0x030998 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 153 | 1 |
| 0x030999 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 154 | 1 |
| 0x03099A | D-OBD 1 - ICM oder ACSM - Diagnosestatus 155 | 1 |
| 0x03099B | D-OBD 1 - ICM oder ACSM - Diagnosestatus 156 | 1 |
| 0x03099C | D-OBD 1 - ICM oder ACSM - Diagnosestatus 157 | 1 |
| 0x03099D | D-OBD 1 - ICM oder ACSM - Diagnosestatus 158 | 1 |
| 0x03099E | D-OBD 1 - ICM oder ACSM - Diagnosestatus 159 | 1 |
| 0x03099F | D-OBD 1 - ICM oder ACSM - Diagnosestatus 160 | 1 |
| 0x0309A0 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 161 | 1 |
| 0x0309A1 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 162 | 1 |
| 0x0309A2 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 163 | 1 |
| 0x0309A3 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 164 | 1 |
| 0x0309A4 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 165 | 1 |
| 0x0309A5 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 166 | 1 |
| 0x0309A6 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 167 | 1 |
| 0x0309A7 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 168 | 1 |
| 0x0309A8 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 169 | 1 |
| 0x0309A9 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 170 | 1 |
| 0x0309AA | D-OBD 1 - ICM oder ACSM - Diagnosestatus 171 | 1 |
| 0x0309AB | D-OBD 1 - ICM oder ACSM - Diagnosestatus 172 | 1 |
| 0x0309AC | D-OBD 1 - ICM oder ACSM - Diagnosestatus 173 | 1 |
| 0x0309AD | D-OBD 1 - ICM oder ACSM - Diagnosestatus 174 | 1 |
| 0x0309AE | D-OBD 1 - ICM oder ACSM - Diagnosestatus 175 | 1 |
| 0x0309AF | D-OBD 1 - ICM oder ACSM - Diagnosestatus 176 | 1 |
| 0x0309B0 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 177 | 1 |
| 0x0309B1 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 178 | 1 |
| 0x0309B2 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 179 | 1 |
| 0x0309B3 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 180 | 1 |
| 0x0309B4 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 181 | 1 |
| 0x0309B5 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 182 | 1 |
| 0x0309B6 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 183 | 1 |
| 0x0309B7 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 184 | 1 |
| 0x0309B8 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 185 | 1 |
| 0x0309B9 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 186 | 1 |
| 0x0309BA | D-OBD 1 - ICM oder ACSM - Diagnosestatus 187 | 1 |
| 0x0309BB | D-OBD 1 - ICM oder ACSM - Diagnosestatus 188 | 1 |
| 0x0309BC | D-OBD 1 - ICM oder ACSM - Diagnosestatus 189 | 1 |
| 0x0309BD | D-OBD 1 - ICM oder ACSM - Diagnosestatus 190 | 1 |
| 0x0309BE | D-OBD 1 - ICM oder ACSM - Diagnosestatus 191 | 1 |
| 0x0309BF | D-OBD 1 - ICM oder ACSM - Diagnosestatus 192 | 1 |
| 0x030A40 | D-OBD 2 - LMV - Diagnosestatus 1 - Klemme 30: Unterspannung | 1 |
| 0x030A41 | D-OBD 2 - LMV - Diagnosestatus 2 - Klemme 30: Überspannung | 1 |
| 0x030A42 | D-OBD 2 - LMV - Diagnosestatus 3 - Klemme 30: Leitungsunterbrechung | 1 |
| 0x030A43 | D-OBD 2 - LMV - Diagnosestatus 4 - Klemme 30b: Leitungsunterbrechung | 1 |
| 0x030A44 | D-OBD 2 - LMV - Diagnosestatus 5 - Steuergerät: interner Fehler (Watchdog, deaktiviert) | 1 |
| 0x030A45 | D-OBD 2 - LMV - Diagnosestatus 6 - Steuergerät: interner Fehler | 1 |
| 0x030A46 | D-OBD 2 - LMV - Diagnosestatus 7 - Steuergerät: interner Fehler (Watchdog) | 1 |
| 0x030A47 | D-OBD 2 - LMV - Diagnosestatus 8 - Steuergerät: interner Fehler (Watchdog, unerwarteter Reset) | 1 |
| 0x030A48 | D-OBD 2 - LMV - Diagnosestatus 9 - Codierung: Steuergerät ist nicht codiert | 1 |
| 0x030A49 | D-OBD 2 - LMV - Diagnosestatus 10 - Codierung: Fehler bei Codierdatentransaktion aufgetreten | 1 |
| 0x030A4A | D-OBD 2 - LMV - Diagnosestatus 11 - Codierung: Signatur der Codierdaten ungültig | 1 |
| 0x030A4B | D-OBD 2 - LMV - Diagnosestatus 12 - Codierung: Codierdaten passen nicht zum Fahrzeug | 1 |
| 0x030A4C | D-OBD 2 - LMV - Diagnosestatus 13 - Codierung: Unplausible Daten während Codierdatentransaktion | 1 |
| 0x030A4D | D-OBD 2 - LMV - Diagnosestatus 14 - Codierung: Codierdaten nicht qualifiziert | 1 |
| 0x030A4E | D-OBD 2 - LMV - Diagnosestatus 15 - LMV, FlexRay: Logischer Busfehler | 1 |
| 0x030A4F | D-OBD 2 - LMV - Diagnosestatus 16 - Allradverteilergetriebe temporär stillgelegt | 1 |
| 0x030A50 | D-OBD 2 - LMV - Diagnosestatus 17 - Botschaft (Klemmen, 116.0.2) fehlt, Empfänger LMV (A-FlexRay), Sender CAS (Body-CAN) | 1 |
| 0x030A51 | D-OBD 2 - LMV - Diagnosestatus 18 - Botschaft (Klemmen, 116.0.2) fehlerhaft, Empfänger LMV (A-FlexRay), Sender CAS (Body-CAN) | 1 |
| 0x030A52 | D-OBD 2 - LMV - Diagnosestatus 19 - Schnittstelle CAS (Klemmen, 116.0.2): Signal ungültig | 1 |
| 0x030A53 | D-OBD 2 - LMV - Diagnosestatus 20 - Steuergerät: EEPROM Schreib-Lese-Fehler | 1 |
| 0x030A54 | D-OBD 2 - LMV - Diagnosestatus 21 - Steuergerät: EEPROM End of Life | 1 |
| 0x030A55 | D-OBD 2 - LMV - Diagnosestatus 22 - Klassierung: fehlt | 1 |
| 0x030A56 | D-OBD 2 - LMV - Diagnosestatus 23 - Erstkalibrierung: fehlt | 1 |
| 0x030A57 | D-OBD 2 - LMV - Diagnosestatus 24 - Kalibrierung: fehlerhaft | 1 |
| 0x030A58 | D-OBD 2 - LMV - Diagnosestatus 25 - Steuergerät: Fehler Gesamtsystem | 1 |
| 0x030A59 | D-OBD 2 - LMV - Diagnosestatus 26 - Gestelltes Moment ausserhalb Momentenkennlinie | 1 |
| 0x030A5A | D-OBD 2 - LMV - Diagnosestatus 27 - Anschlagsuche: unplausibel | 1 |
| 0x030A5B | D-OBD 2 - LMV - Diagnosestatus 28 - Ende Lebensdauer Getriebe erreicht | 1 |
| 0x030A5C | D-OBD 2 - LMV - Diagnosestatus 29 - VTG: Klassierungsplausibilisierung fehlgeschlagen oder nicht durchführbar | 1 |
| 0x030A5D | D-OBD 2 - LMV - Diagnosestatus 30 - Unerwartete Deaktivierung PWM | 1 |
| 0x030A5E | D-OBD 2 - LMV - Diagnosestatus 31 - Offset-Kompensation: fehlerhaft | 1 |
| 0x030A5F | D-OBD 2 - LMV - Diagnosestatus 32 -  - | 1 |
| 0x030A60 | D-OBD 2 - LMV - Diagnosestatus 33 - Motorlagesensor: fehlerhaft | 1 |
| 0x030A61 | D-OBD 2 - LMV - Diagnosestatus 34 - Stellmotor: Fehler Lastkreis | 1 |
| 0x030A62 | D-OBD 2 - LMV - Diagnosestatus 35 - Elektrischer Lastkreis: fehlerhaft | 1 |
| 0x030A63 | D-OBD 2 - LMV - Diagnosestatus 36 - Steuergerät: Übertemperatur | 1 |
| 0x030A64 | D-OBD 2 - LMV - Diagnosestatus 37 | 1 |
| 0x030A65 | D-OBD 2 - LMV - Diagnosestatus 38 | 1 |
| 0x030A66 | D-OBD 2 - LMV - Diagnosestatus 39 | 1 |
| 0x030A67 | D-OBD 2 - LMV - Diagnosestatus 40 | 1 |
| 0x030A68 | D-OBD 2 - LMV - Diagnosestatus 41 | 1 |
| 0x030A69 | D-OBD 2 - LMV - Diagnosestatus 42 | 1 |
| 0x030A6A | D-OBD 2 - LMV - Diagnosestatus 43 | 1 |
| 0x030A6B | D-OBD 2 - LMV - Diagnosestatus 44 | 1 |
| 0x030A6C | D-OBD 2 - LMV - Diagnosestatus 45 | 1 |
| 0x030A6D | D-OBD 2 - LMV - Diagnosestatus 46 | 1 |
| 0x030A6E | D-OBD 2 - LMV - Diagnosestatus 47 | 1 |
| 0x030A6F | D-OBD 2 - LMV - Diagnosestatus 48 | 1 |
| 0x030A70 | D-OBD 2 - LMV - Diagnosestatus 49 | 1 |
| 0x030A71 | D-OBD 2 - LMV - Diagnosestatus 50 | 1 |
| 0x030A72 | D-OBD 2 - LMV - Diagnosestatus 51 | 1 |
| 0x030A73 | D-OBD 2 - LMV - Diagnosestatus 52 | 1 |
| 0x030A74 | D-OBD 2 - LMV - Diagnosestatus 53 | 1 |
| 0x030A75 | D-OBD 2 - LMV - Diagnosestatus 54 | 1 |
| 0x030A76 | D-OBD 2 - LMV - Diagnosestatus 55 | 1 |
| 0x030A77 | D-OBD 2 - LMV - Diagnosestatus 56 | 1 |
| 0x030A78 | D-OBD 2 - LMV - Diagnosestatus 57 | 1 |
| 0x030A79 | D-OBD 2 - LMV - Diagnosestatus 58 | 1 |
| 0x030A7A | D-OBD 2 - LMV - Diagnosestatus 59 | 1 |
| 0x030A7B | D-OBD 2 - LMV - Diagnosestatus 60 | 1 |
| 0x030A7C | D-OBD 2 - LMV - Diagnosestatus 61 | 1 |
| 0x030A7D | D-OBD 2 - LMV - Diagnosestatus 62 | 1 |
| 0x030A7E | D-OBD 2 - LMV - Diagnosestatus 63 | 1 |
| 0x030A7F | D-OBD 2 - LMV - Diagnosestatus 64 | 1 |
| 0x030A80 | D-OBD 2 - LMV - Diagnosestatus 65 | 1 |
| 0x030A81 | D-OBD 2 - LMV - Diagnosestatus 66 | 1 |
| 0x030A82 | D-OBD 2 - LMV - Diagnosestatus 67 | 1 |
| 0x030A83 | D-OBD 2 - LMV - Diagnosestatus 68 | 1 |
| 0x030A84 | D-OBD 2 - LMV - Diagnosestatus 69 | 1 |
| 0x030A85 | D-OBD 2 - LMV - Diagnosestatus 70 | 1 |
| 0x030A86 | D-OBD 2 - LMV - Diagnosestatus 71 | 1 |
| 0x030A87 | D-OBD 2 - LMV - Diagnosestatus 72 | 1 |
| 0x030A88 | D-OBD 2 - LMV - Diagnosestatus 73 | 1 |
| 0x030A89 | D-OBD 2 - LMV - Diagnosestatus 74 | 1 |
| 0x030A8A | D-OBD 2 - LMV - Diagnosestatus 75 | 1 |
| 0x030A8B | D-OBD 2 - LMV - Diagnosestatus 76 | 1 |
| 0x030A8C | D-OBD 2 - LMV - Diagnosestatus 77 | 1 |
| 0x030A8D | D-OBD 2 - LMV - Diagnosestatus 78 | 1 |
| 0x030A8E | D-OBD 2 - LMV - Diagnosestatus 79 | 1 |
| 0x030A8F | D-OBD 2 - LMV - Diagnosestatus 80 | 1 |
| 0x030A90 | D-OBD 2 - LMV - Diagnosestatus 81 | 1 |
| 0x030A91 | D-OBD 2 - LMV - Diagnosestatus 82 | 1 |
| 0x030A92 | D-OBD 2 - LMV - Diagnosestatus 83 | 1 |
| 0x030A93 | D-OBD 2 - LMV - Diagnosestatus 84 | 1 |
| 0x030A94 | D-OBD 2 - LMV - Diagnosestatus 85 | 1 |
| 0x030A95 | D-OBD 2 - LMV - Diagnosestatus 86 | 1 |
| 0x030A96 | D-OBD 2 - LMV - Diagnosestatus 87 | 1 |
| 0x030A97 | D-OBD 2 - LMV - Diagnosestatus 88 | 1 |
| 0x030A98 | D-OBD 2 - LMV - Diagnosestatus 89 | 1 |
| 0x030A99 | D-OBD 2 - LMV - Diagnosestatus 90 | 1 |
| 0x030A9A | D-OBD 2 - LMV - Diagnosestatus 91 | 1 |
| 0x030A9B | D-OBD 2 - LMV - Diagnosestatus 92 | 1 |
| 0x030A9C | D-OBD 2 - LMV - Diagnosestatus 93 | 1 |
| 0x030A9D | D-OBD 2 - LMV - Diagnosestatus 94 | 1 |
| 0x030A9E | D-OBD 2 - LMV - Diagnosestatus 95 | 1 |
| 0x030A9F | D-OBD 2 - LMV - Diagnosestatus 96 | 1 |
| 0x030AA0 | D-OBD 2 - LMV - Diagnosestatus 97 | 1 |
| 0x030AA1 | D-OBD 2 - LMV - Diagnosestatus 98 | 1 |
| 0x030AA2 | D-OBD 2 - LMV - Diagnosestatus 99 | 1 |
| 0x030AA3 | D-OBD 2 - LMV - Diagnosestatus 100 | 1 |
| 0x030AA4 | D-OBD 2 - LMV - Diagnosestatus 101 | 1 |
| 0x030AA5 | D-OBD 2 - LMV - Diagnosestatus 102 | 1 |
| 0x030AA6 | D-OBD 2 - LMV - Diagnosestatus 103 | 1 |
| 0x030AA7 | D-OBD 2 - LMV - Diagnosestatus 104 | 1 |
| 0x030AA8 | D-OBD 2 - LMV - Diagnosestatus 105 | 1 |
| 0x030AA9 | D-OBD 2 - LMV - Diagnosestatus 106 | 1 |
| 0x030AAA | D-OBD 2 - LMV - Diagnosestatus 107 | 1 |
| 0x030AAB | D-OBD 2 - LMV - Diagnosestatus 108 | 1 |
| 0x030AAC | D-OBD 2 - LMV - Diagnosestatus 109 | 1 |
| 0x030AAD | D-OBD 2 - LMV - Diagnosestatus 110 | 1 |
| 0x030AAE | D-OBD 2 - LMV - Diagnosestatus 111 | 1 |
| 0x030AAF | D-OBD 2 - LMV - Diagnosestatus 112 | 1 |
| 0x030AB0 | D-OBD 2 - LMV - Diagnosestatus 113 | 1 |
| 0x030AB1 | D-OBD 2 - LMV - Diagnosestatus 114 | 1 |
| 0x030AB2 | D-OBD 2 - LMV - Diagnosestatus 115 | 1 |
| 0x030AB3 | D-OBD 2 - LMV - Diagnosestatus 116 | 1 |
| 0x030AB4 | D-OBD 2 - LMV - Diagnosestatus 117 | 1 |
| 0x030AB5 | D-OBD 2 - LMV - Diagnosestatus 118 | 1 |
| 0x030AB6 | D-OBD 2 - LMV - Diagnosestatus 119 | 1 |
| 0x030AB7 | D-OBD 2 - LMV - Diagnosestatus 120 | 1 |
| 0x030AB8 | D-OBD 2 - LMV - Diagnosestatus 121 | 1 |
| 0x030AB9 | D-OBD 2 - LMV - Diagnosestatus 122 | 1 |
| 0x030ABA | D-OBD 2 - LMV - Diagnosestatus 123 | 1 |
| 0x030ABB | D-OBD 2 - LMV - Diagnosestatus 124 | 1 |
| 0x030ABC | D-OBD 2 - LMV - Diagnosestatus 125 | 1 |
| 0x030ABD | D-OBD 2 - LMV - Diagnosestatus 126 | 1 |
| 0x030ABE | D-OBD 2 - LMV - Diagnosestatus 127 | 1 |
| 0x030ABF | D-OBD 2 - LMV - Diagnosestatus 128 | 1 |
| 0x030B40 | D-OBD 3 - EPS - Diagnosestatus 1 | 1 |
| 0x030B41 | D-OBD 3 - EPS - Diagnosestatus 2 | 1 |
| 0x030B42 | D-OBD 3 - EPS - Diagnosestatus 3 | 1 |
| 0x030B43 | D-OBD 3 - EPS - Diagnosestatus 4 | 1 |
| 0x030B44 | D-OBD 3 - EPS - Diagnosestatus 5 | 1 |
| 0x030B45 | D-OBD 3 - EPS - Diagnosestatus 6 | 1 |
| 0x030B46 | D-OBD 3 - EPS - Diagnosestatus 7 | 1 |
| 0x030B47 | D-OBD 3 - EPS - Diagnosestatus 8 | 1 |
| 0x030B48 | D-OBD 3 - EPS - Diagnosestatus 9 | 1 |
| 0x030B49 | D-OBD 3 - EPS - Diagnosestatus 10 | 1 |
| 0x030B4A | D-OBD 3 - EPS - Diagnosestatus 11 | 1 |
| 0x030B4B | D-OBD 3 - EPS - Diagnosestatus 12 | 1 |
| 0x030B4C | D-OBD 3 - EPS - Diagnosestatus 13 | 1 |
| 0x030B4D | D-OBD 3 - EPS - Diagnosestatus 14 | 1 |
| 0x030B4E | D-OBD 3 - EPS - Diagnosestatus 15 | 1 |
| 0x030B4F | D-OBD 3 - EPS - Diagnosestatus 16 | 1 |
| 0x030B50 | D-OBD 3 - EPS - Diagnosestatus 17 | 1 |
| 0x030B51 | D-OBD 3 - EPS - Diagnosestatus 18 | 1 |
| 0x030B52 | D-OBD 3 - EPS - Diagnosestatus 19 | 1 |
| 0x030B53 | D-OBD 3 - EPS - Diagnosestatus 20 | 1 |
| 0x030B54 | D-OBD 3 - EPS - Diagnosestatus 21 | 1 |
| 0x030B55 | D-OBD 3 - EPS - Diagnosestatus 22 | 1 |
| 0x030B56 | D-OBD 3 - EPS - Diagnosestatus 23 | 1 |
| 0x030B57 | D-OBD 3 - EPS - Diagnosestatus 24 | 1 |
| 0x030B58 | D-OBD 3 - EPS - Diagnosestatus 25 | 1 |
| 0x030B59 | D-OBD 3 - EPS - Diagnosestatus 26 | 1 |
| 0x030B5A | D-OBD 3 - EPS - Diagnosestatus 27 | 1 |
| 0x030B5B | D-OBD 3 - EPS - Diagnosestatus 28 | 1 |
| 0x030B5C | D-OBD 3 - EPS - Diagnosestatus 29 | 1 |
| 0x030B5D | D-OBD 3 - EPS - Diagnosestatus 30 | 1 |
| 0x030B5E | D-OBD 3 - EPS - Diagnosestatus 31 | 1 |
| 0x030B5F | D-OBD 3 - EPS - Diagnosestatus 32 | 1 |
| 0x030B60 | D-OBD 3 - EPS - Diagnosestatus 33 | 1 |
| 0x030B61 | D-OBD 3 - EPS - Diagnosestatus 34 | 1 |
| 0x030B62 | D-OBD 3 - EPS - Diagnosestatus 35 | 1 |
| 0x030B63 | D-OBD 3 - EPS - Diagnosestatus 36 | 1 |
| 0x030B64 | D-OBD 3 - EPS - Diagnosestatus 37 | 1 |
| 0x030B65 | D-OBD 3 - EPS - Diagnosestatus 38 | 1 |
| 0x030B66 | D-OBD 3 - EPS - Diagnosestatus 39 | 1 |
| 0x030B67 | D-OBD 3 - EPS - Diagnosestatus 40 | 1 |
| 0x030B68 | D-OBD 3 - EPS - Diagnosestatus 41 | 1 |
| 0x030B69 | D-OBD 3 - EPS - Diagnosestatus 42 | 1 |
| 0x030B6A | D-OBD 3 - EPS - Diagnosestatus 43 | 1 |
| 0x030B6B | D-OBD 3 - EPS - Diagnosestatus 44 | 1 |
| 0x030B6C | D-OBD 3 - EPS - Diagnosestatus 45 | 1 |
| 0x030B6D | D-OBD 3 - EPS - Diagnosestatus 46 | 1 |
| 0x030B6E | D-OBD 3 - EPS - Diagnosestatus 47 | 1 |
| 0x030B6F | D-OBD 3 - EPS - Diagnosestatus 48 | 1 |
| 0x030B70 | D-OBD 3 - EPS - Diagnosestatus 49 | 1 |
| 0x030B71 | D-OBD 3 - EPS - Diagnosestatus 50 | 1 |
| 0x030B72 | D-OBD 3 - EPS - Diagnosestatus 51 | 1 |
| 0x030B73 | D-OBD 3 - EPS - Diagnosestatus 52 | 1 |
| 0x030B74 | D-OBD 3 - EPS - Diagnosestatus 53 | 1 |
| 0x030B75 | D-OBD 3 - EPS - Diagnosestatus 54 | 1 |
| 0x030B76 | D-OBD 3 - EPS - Diagnosestatus 55 | 1 |
| 0x030B77 | D-OBD 3 - EPS - Diagnosestatus 56 | 1 |
| 0x030B78 | D-OBD 3 - EPS - Diagnosestatus 57 | 1 |
| 0x030B79 | D-OBD 3 - EPS - Diagnosestatus 58 | 1 |
| 0x030B7A | D-OBD 3 - EPS - Diagnosestatus 59 | 1 |
| 0x030B7B | D-OBD 3 - EPS - Diagnosestatus 60 | 1 |
| 0x030B7C | D-OBD 3 - EPS - Diagnosestatus 61 | 1 |
| 0x030B7D | D-OBD 3 - EPS - Diagnosestatus 62 | 1 |
| 0x030B7E | D-OBD 3 - EPS - Diagnosestatus 63 | 1 |
| 0x030B7F | D-OBD 3 - EPS - Diagnosestatus 64 | 1 |
| 0x030B80 | D-OBD 3 - EPS - Diagnosestatus 65 | 1 |
| 0x030B81 | D-OBD 3 - EPS - Diagnosestatus 66 | 1 |
| 0x030B82 | D-OBD 3 - EPS - Diagnosestatus 67 | 1 |
| 0x030B83 | D-OBD 3 - EPS - Diagnosestatus 68 | 1 |
| 0x030B84 | D-OBD 3 - EPS - Diagnosestatus 69 | 1 |
| 0x030B85 | D-OBD 3 - EPS - Diagnosestatus 70 | 1 |
| 0x030B86 | D-OBD 3 - EPS - Diagnosestatus 71 | 1 |
| 0x030B87 | D-OBD 3 - EPS - Diagnosestatus 72 | 1 |
| 0x030B88 | D-OBD 3 - EPS - Diagnosestatus 73 | 1 |
| 0x030B89 | D-OBD 3 - EPS - Diagnosestatus 74 | 1 |
| 0x030B8A | D-OBD 3 - EPS - Diagnosestatus 75 | 1 |
| 0x030B8B | D-OBD 3 - EPS - Diagnosestatus 76 | 1 |
| 0x030B8C | D-OBD 3 - EPS - Diagnosestatus 77 | 1 |
| 0x030B8D | D-OBD 3 - EPS - Diagnosestatus 78 | 1 |
| 0x030B8E | D-OBD 3 - EPS - Diagnosestatus 79 | 1 |
| 0x030B8F | D-OBD 3 - EPS - Diagnosestatus 80 | 1 |
| 0x030B90 | D-OBD 3 - EPS - Diagnosestatus 81 | 1 |
| 0x030B91 | D-OBD 3 - EPS - Diagnosestatus 82 | 1 |
| 0x030B92 | D-OBD 3 - EPS - Diagnosestatus 83 | 1 |
| 0x030B93 | D-OBD 3 - EPS - Diagnosestatus 84 | 1 |
| 0x030B94 | D-OBD 3 - EPS - Diagnosestatus 85 | 1 |
| 0x030B95 | D-OBD 3 - EPS - Diagnosestatus 86 | 1 |
| 0x030B96 | D-OBD 3 - EPS - Diagnosestatus 87 | 1 |
| 0x030B97 | D-OBD 3 - EPS - Diagnosestatus 88 | 1 |
| 0x030B98 | D-OBD 3 - EPS - Diagnosestatus 89 | 1 |
| 0x030B99 | D-OBD 3 - EPS - Diagnosestatus 90 | 1 |
| 0x030B9A | D-OBD 3 - EPS - Diagnosestatus 91 | 1 |
| 0x030B9B | D-OBD 3 - EPS - Diagnosestatus 92 | 1 |
| 0x030B9C | D-OBD 3 - EPS - Diagnosestatus 93 | 1 |
| 0x030B9D | D-OBD 3 - EPS - Diagnosestatus 94 | 1 |
| 0x030B9E | D-OBD 3 - EPS - Diagnosestatus 95 | 1 |
| 0x030B9F | D-OBD 3 - EPS - Diagnosestatus 96 | 1 |
| 0x030BA0 | D-OBD 3 - EPS - Diagnosestatus 97 | 1 |
| 0x030BA1 | D-OBD 3 - EPS - Diagnosestatus 98 | 1 |
| 0x030BA2 | D-OBD 3 - EPS - Diagnosestatus 99 | 1 |
| 0x030BA3 | D-OBD 3 - EPS - Diagnosestatus 100 | 1 |
| 0x030BA4 | D-OBD 3 - EPS - Diagnosestatus 101 | 1 |
| 0x030BA5 | D-OBD 3 - EPS - Diagnosestatus 102 | 1 |
| 0x030BA6 | D-OBD 3 - EPS - Diagnosestatus 103 | 1 |
| 0x030BA7 | D-OBD 3 - EPS - Diagnosestatus 104 | 1 |
| 0x030BA8 | D-OBD 3 - EPS - Diagnosestatus 105 | 1 |
| 0x030BA9 | D-OBD 3 - EPS - Diagnosestatus 106 | 1 |
| 0x030BAA | D-OBD 3 - EPS - Diagnosestatus 107 | 1 |
| 0x030BAB | D-OBD 3 - EPS - Diagnosestatus 108 | 1 |
| 0x030BAC | D-OBD 3 - EPS - Diagnosestatus 109 | 1 |
| 0x030BAD | D-OBD 3 - EPS - Diagnosestatus 110 | 1 |
| 0x030BAE | D-OBD 3 - EPS - Diagnosestatus 111 | 1 |
| 0x030BAF | D-OBD 3 - EPS - Diagnosestatus 112 | 1 |
| 0x030BB0 | D-OBD 3 - EPS - Diagnosestatus 113 | 1 |
| 0x030BB1 | D-OBD 3 - EPS - Diagnosestatus 114 | 1 |
| 0x030BB2 | D-OBD 3 - EPS - Diagnosestatus 115 | 1 |
| 0x030BB3 | D-OBD 3 - EPS - Diagnosestatus 116 | 1 |
| 0x030BB4 | D-OBD 3 - EPS - Diagnosestatus 117 | 1 |
| 0x030BB5 | D-OBD 3 - EPS - Diagnosestatus 118 | 1 |
| 0x030BB6 | D-OBD 3 - EPS - Diagnosestatus 119 | 1 |
| 0x030BB7 | D-OBD 3 - EPS - Diagnosestatus 120 | 1 |
| 0x030BB8 | D-OBD 3 - EPS - Diagnosestatus 121 | 1 |
| 0x030BB9 | D-OBD 3 - EPS - Diagnosestatus 122 | 1 |
| 0x030BBA | D-OBD 3 - EPS - Diagnosestatus 123 | 1 |
| 0x030BBB | D-OBD 3 - EPS - Diagnosestatus 124 | 1 |
| 0x030BBC | D-OBD 3 - EPS - Diagnosestatus 125 | 1 |
| 0x030BBD | D-OBD 3 - EPS - Diagnosestatus 126 | 1 |
| 0x030BBE | D-OBD 3 - EPS - Diagnosestatus 127 | 1 |
| 0x030BBF | D-OBD 3 - EPS - Diagnosestatus 128 | 1 |
| 0x480777 | FUSI-Anforderung Motorkaltstart V-FUSI oberhalb Geschwindigkeitsschwelle | 0 |
| 0x48077A | Raddrehzahlsensor - Allgemein - Rollenmodus aktiv | 0 |
| 0x480790 | Steuergerät intern - Bosch - CBS_Reset Conditions Not Correct - Vorne | 0 |
| 0x480796 | Steuergerät intern - Bosch - CBS_Reset Conditions Not Correct - Hinten | 0 |
| 0x48081E | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Timeout | 0 |
| 0x48081F | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) - Ungültig | 0 |
| 0x48092C | Notbremse - Wegen unplausibler Regelung: Blockieren der Raeder wird moeglich gemacht, Notbremse ausgelöst | 0 |
| 0x480A10 | Steuergerät intern - Bosch EEPROM defragmentiert | 0 |
| 0x480A19 | Allradkupplung LMV Schutzfunktion aktiv | 0 |
| 0x480A1C | Steuergerät intern Reglersystem AFS/ARS/HSR/VDC ausgefallen | 0 |
| 0x480A94 | Raddrehzahlsensor Vorn Rechts Allgemein Verdacht Luftspalt | 0 |
| 0x480A95 | Raddrehzahlsensor Hinten Links Allgemein Verdacht Luftspalt | 0 |
| 0x480AA7 | Raddrehzahlsensor Hinten Rechts Allgemein Verdacht Luftspalt | 0 |
| 0x480ABD | Entwicklung Diagnoseschnittstelle HW-Error | 0 |
| 0x480AC7 | Raddrehzahlsensor Vorn Links Allgemein Verdacht Luftspalt | 0 |
| 0x480AD9 | Sperrfilter ST_VEH_CON aktiv | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x5002 | FAHRZEUGZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5004 | ANTRIEBSZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x5006 | BETRIEBSSPANNUNG_MIN | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x5007 | BETRIEBSSPANNUNG_MAX | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x5008 | SPANNUNGSMASTER | HEX | High | unsigned char | - | - | - | - |
| 0x500A | FAHRZEUGGESCHWINDIGKEIT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x500B | FUNKTIONSZUSTAND | HEX | High | unsigned int | - | - | - | - |
| 0x500C | INT_FUNKTIONSZUSTAND | HEX | High | unsigned char | - | - | - | - |
| 0x500E | INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x500F | FEHLERSPEICHERSPERRE_AKTIV | 0/1 | High | 0x01 | - | - | - | - |
| 0x5014 | BLS_PLAUSIDATEN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

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

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_4005_1 | - | - | - | B_0x4005_1 |
| - | Bit | high | BITFIELD | - | BF_4005_2 | - | - | - | B_0x4005_2 |
| STAT_NAEHERUNG_WARNGRENZE_S_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert in % bis Erreichung der eingestellten S-Warngrenze |
| STAT_DSC_SIGNAL_VR_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radgeschwindigkeit |
| STAT_DSC_SIGNAL_VL_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radgeschwindigkeit |
| STAT_DSC_SIGNAL_HR_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radgeschwindigkeit |
| STAT_DSC_SIGNAL_HL_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Radgeschwindigkeit |
| STAT_DEFLATION_POSITON | 0-n | high | unsigned char | - | TAB_DSC_RADPOSITION | - | - | - | Position des druckreduzierten Rades |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIGMAX2_R_WERT | N/m² | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_SIGMAX2_R_WERT |
| STAT_SIGMAXY_R_WERT | Nm | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | STAT_SIGMAXY_R_WERT |
| STAT_SIGMAX_R_WERT | Nm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_SIGMAX_R_WERT |
| STAT_SIGMAY_R_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | STAT_SIGMAY_R_WERT |
| STAT_SPEEDWINSTDDEL1_R0_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R0_WERT |
| STAT_SPEEDWINSTDDEL1_R1_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R1_WERT |
| STAT_SPEEDWINSTDDEL1_R2_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R2_WERT |
| STAT_SPEEDWINSTDDEL1_R3_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R3_WERT |
| STAT_SPEEDWINSTDDEL1_R4_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R4_WERT |
| STAT_SPEEDWINSTDDEL1_R5_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R5_WERT |
| STAT_SPEEDWINSTDDEL1_R6_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL1_R6_WERT |
| STAT_SPEEDWINSTDDEL3_R0_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R0_WERT |
| STAT_SPEEDWINSTDDEL3_R1_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R1_WERT |
| STAT_SPEEDWINSTDDEL3_R2_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R2_WERT |
| STAT_SPEEDWINSTDDEL3_R3_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R3_WERT |
| STAT_SPEEDWINSTDDEL3_R4_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R4_WERT |
| STAT_SPEEDWINSTDDEL3_R5_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R5_WERT |
| STAT_SPEEDWINSTDDEL3_R6_WERT | - | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_SPEEDWINSTDDEL3_R6_WERT |
| STAT_D1NSVL_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 0 |
| STAT_D1NSVH1_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 1 |
| STAT_D1NSVH2_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 2 |
| STAT_D1NSVH3_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 3 |
| STAT_D1NSVH4_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 4 |
| STAT_D1NSVH5_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 5 |
| STAT_D1NSVH6_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lernfortschritt Geschwindigkeitsbereich 6 |
| STAT_D2TT_R0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R0_WERT |
| STAT_D2TT_R1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R1_WERT |
| STAT_D2TT_R2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R2_WERT |
| STAT_D2TT_R3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R3_WERT |
| STAT_D2TT_R4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R4_WERT |
| STAT_D2TT_R5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R5_WERT |
| STAT_D2TT_R6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R6_WERT |
| STAT_D2TT_R7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R7_WERT |
| STAT_D2TT_R8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R8_WERT |
| STAT_D2TT_R9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R9_WERT |
| STAT_D2TT_R10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R10_WERT |
| STAT_D2TT_R11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R11_WERT |
| STAT_D2TT_R12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R12_WERT |
| STAT_D2TT_R13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_D2TT_R13_WERT |
| STAT_DASHSIGMAX2_R_WERT | N/m² | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_DASHSIGMAX2_R_WERT |
| STAT_DASHSIGMAXY_R_WERT | Nm | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | STAT_DASHSIGMAXY_R_WERT |
| STAT_DASHSIGMAX_R_WERT | Nm | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_DASHSIGMAX_R_WERT |
| STAT_DASHSIGMAY_R_WERT | - | high | unsigned long | - | - | 1.0 | 1000.0 | 0.0 | STAT_DASHSIGMAY_R_WERT |
| STAT_STDSTARTODM_WERT | km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | STAT_STDSTARTODM_WERT |
| STAT_DASH2TT_R0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R0_WERT |
| STAT_DASH2TT_R1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R1_WERT |
| STAT_DASH2TT_R2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R2_WERT |
| STAT_DASH2TT_R3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R3_WERT |
| STAT_DASH2TT_R4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R4_WERT |
| STAT_DASH2TT_R5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R5_WERT |
| STAT_DASH2TT_R6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R6_WERT |
| STAT_DASH2TT_R7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R7_WERT |
| STAT_DASH2TT_R8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R8_WERT |
| STAT_DASH2TT_R9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R9_WERT |
| STAT_DASH2TT_R10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R10_WERT |
| STAT_DASH2TT_R11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R11_WERT |
| STAT_DASH2TT_R12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R12_WERT |
| STAT_DASH2TT_R13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_DASH2TT_R13_WERT |
| STAT_SMOOTHCHANGEFLG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SMOOTHCHANGEFLG_WERT |
| STAT_NEWTYREFLG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_NEWTYREFLG_WERT |
| STAT_SIGMADEL1LATGRIGHTHIGH_R_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | STAT_SIGMADEL1LATGRIGHTHIGH_R_WERT |
| STAT_SIGMADEL1LATGLEFTHIGH_R_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | STAT_SIGMADEL1LATGLEFTHIGH_R_WERT |
| STAT_SIGMADEL1LATGRIGHTLOW_R_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | STAT_SIGMADEL1LATGRIGHTLOW_R_WERT |
| STAT_SIGMADEL1LATGLEFTLOW_R_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | STAT_SIGMADEL1LATGLEFTLOW_R_WERT |
| STAT_SIGMANRIGHTHIGH_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SIGMANRIGHTHIGH_R_WERT |
| STAT_SIGMANLEFTHIGH_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SIGMANLEFTHIGH_R_WERT |
| STAT_SIGMANRIGHTLOW_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SIGMANRIGHTLOW_R_WERT |
| STAT_SIGMANLEFTLOW_R_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_SIGMANLEFTLOW_R_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTHIGH_R0_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTHIGH_R1_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTHIGH_R2_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTHIGH_R3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTHIGH_R3_WERT |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTHIGH_R0_WERT |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTHIGH_R1_WERT |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTHIGH_R2_WERT |
| STAT_MEDIAN-DEL3LATGLEFTHIGH_R3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTHIGH_R3_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTLOW_R0_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTLOW_R1_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTLOW_R2_WERT |
| STAT_MEDIAN-DEL3LATGRIGHTLOW_R3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGRIGHTLOW_R3_WERT |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTLOW_R0_WERT |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTLOW_R1_WERT |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTLOW_R2_WERT |
| STAT_MEDIAN-DEL3LATGLEFTLOW_R3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_MEDIAN-DEL3LATGLEFTLOW_R3_WERT |
| STAT_CHECKSUM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | STAT_CHECKSUM_WERT |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BBNUMMER_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | Bosch BB Nummer |
| STAT_VERSION_TYPE_TEXT | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | Bosch Version Type |
| STAT_BASE_VERSION_TEXT | TEXT | high | string[4] | - | - | 1.0 | 1.0 | 0.0 | Bosch Base Version |
| STAT_BRANCH_TEXT | TEXT | high | string[4] | - | - | 1.0 | 1.0 | 0.0 | Bosch Branch |
| STAT_DATUM_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Datum |
| STAT_ZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Zeit |
| STAT_ENTWICKLER_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Bosch Entwicklerkurzzeichen |

### RES_0X5012_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_START1_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Start 1 Snapshot time |
| STAT_START1_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s \| bit |
| STAT_START1_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_START_STATE | 1.0 | 1.0 | 0.0 | Start 1 Snapshot state 0 = kein Eintrag 1 = Bremse genutzt |
| STAT_STOP1_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stop 1 Snapshot time |
| STAT_STOP1_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s \| bit |
| STAT_STOP1_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_STOP_STATE | 1.0 | 1.0 | 0.0 | State bei Stop: 0 = kein Eintrag 1 = Ziel Anhaltegeschwindigkeit erreicht 2 = übersteuert durch Gaspedal Betätigung 3 = übersteuert durch Bremspedal Betätigung 4 = optional: Verbindung zu Gas- und Bremspedal verloren 5 = Abwürgverhinderung (engine stall prevention) (nur bei manuellem Getriebe) |
| STAT_START2_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Start 2 Snapshot time |
| STAT_START2_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s \| bit |
| STAT_START2_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_START_STATE | 1.0 | 1.0 | 0.0 | Start 2 Snapshot state 0 = kein Eintrag 1 = Bremse genutzt |
| STAT_STOP2_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stop 2 Snapshot time |
| STAT_STOP2_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s \| bit |
| STAT_STOP2_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_STOP_STATE | 1.0 | 1.0 | 0.0 | State bei Stop: 0 = kein Eintrag 1 = Ziel Anhaltegeschwindigkeit erreicht 2 = übersteuert durch Gaspedal Betätigung 3 = übersteuert durch Bremspedal Betätigung 4 = optional: Verbindung zu Gas- und Bremspedal verloren 5 = Abwürgverhinderung (engine stall prevention) (nur bei manuellem Getriebe) |
| STAT_ZAEHLER_GESAMT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtzähler |
| STAT_ZAEHLER_ZUENDUNGSZUEKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Zündungszüklus |

### RES_0X5016_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CBS_INTCORR_VA_WERT | - | high | unsigned char | - | - | 1.0 | 32.0 | 0.0 | Interner CBS-Korrekturfaktor Vorderachse |
| STAT_CBS_INTCORR_HA_WERT | - | high | unsigned char | - | - | 1.0 | 32.0 | 0.0 | Interner CBS-Korrekturfaktor Hinterachse |

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

### RES_0XA802_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XDBDF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PILLE_VA | 0-n | - | unsigned char | - | TAB_BBV_SENSOR | 1.0 | 1.0 | 0.0 | Bremsbelagspille Vorderachse |
| STAT_PILLE_HA | 0-n | - | unsigned char | - | TAB_BBV_SENSOR | 1.0 | 1.0 | 0.0 | Bremsbelagspille Hinterachse |

### RES_0XDBE0_D

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
| STAT_TAGE_SEIT_STANDARDISIERUNG_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit letzter Standardisierung |
| STAT_KM_LETZTE_PANNE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte Erkennung Panne |
| STAT_WEG_MIT_LETZTER_PANNE_WERT | km | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Wegstrecke seit letzter Erkennung Panne |
| STAT_TAGE_SEIT_LETZTER_PANNE_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit letzter Erkennung Panne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit während letzter Erkennung Panne |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | max Geschwindigkeit während letzter Erkennung Panne |
| STAT_KM_VORLETZTE_PANNE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte Erkennung Panne |
| STAT_WEG_MIT_VORLETZTER_PANNE_WERT | km | - | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Wegstrecke seit vorletzer Erkennung Panne |
| STAT_TAGE_SEIT_VORLETZTER_PANNE_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit vorletzter Erkennung Panne |
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

### RES_0XDBE1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = aktiv;  0 = inaktiv |

### RES_0XDBE2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = aktiv;  0 = inaktiv |

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

### RES_0XDC1D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOHOLD_LED_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = LED ein 0 = LED aus |

### RES_0XDC6D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASC_FUNKTION | 0-n | high | unsigned char | - | TAB_ASC_FUNKTION | 1.0 | 1.0 | 0.0 | Status Funktion Antriebsschlupfregelung (ASC) |
| STAT_ASC_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Basis Qualifier Funktion Antriebsschlupfregelung (ASC) |
| STAT_ASC_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erweiterter Qualifier Funktion Antriebsschlupfregelung (ASC) |

### RES_0XDC74_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CBC_FUNKTION | 0/1 | high | unsigned char | - | - | - | - | - | Status der CBC Funktion (0=aus, 1=ein) |

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

### RES_0XF019_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DSC_DEFRAG_EEPROM | - | - | + | 0-n | high | unsigned char | - | TAB_DSC_DEFRAG_EEPROM | - | - | - | Result |

### ROE_EWT_DOP

| WERT | TEXT |
| --- | --- |
| 101 | 101 |
| 102 | 102 |
| 103 | 103 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DSC_ENTLUEFTUNG | 0xA061 | - | Starten, Stoppen und Status Entlüftung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA061_R | RES_0xA061_R |
| DSC_VENTILE_PULS | 0xA064 | - | Starten, Stoppen und Status Puls Ventile (max. 6 gleichzeitig) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA064_R | RES_0xA064_R |
| RADDREHZAHLSENSORPRUEFUNG | 0xA065 | - | Starten, Stoppen und Status Funktionsprüfung Raddrehzahlsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA065_R | RES_0xA065_R |
| DSC_PUMPENFUNKTIONSPRUEFUNG | 0xA066 | - | Starten, Stoppen und Status Funktionsprüfung Pumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA066_R | RES_0xA066_R |
| BPWS_INITIALISIERUNG | 0xA067 | - | Starten, Stoppen und Status Initialisierung Nullstellung Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA067_R | RES_0xA067_R |
| RPA_RESET_FASTA | 0xA069 | - | Reset RPA Lerndaten FASTA | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DSC_VAKUUMBEFUELLUNG | 0xA06D | - | Starten (Weiterschalten), Stoppen und Status Vakuumbefüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06D_R | RES_0xA06D_R |
| EMF_EINBREMSPROZEDUR | 0xA802 | - | Starten, Stoppen und Status Einbremsen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA802_R |
| AUTOHOLDTASTER | 0xDBDE | STAT_AUTOHOLD_TASTER_EIN | Auslesen Zustand AutoHold Taster 1= Taster gedrückt;  0= Taster nicht betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BREMSBELAGSSENSOR | 0xDBDF | - | Auslesen Bremsbelagssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDF_D |
| RPA_LERNDATEN_FASTA | 0xDBE0 | - | Auslesen diverser Lerndaten für FASTA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE0_D |
| LMV_FUNKTION | 0xDBE1 | - | Auslesen und Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE1_D | RES_0xDBE1_D |
| REKU_FUNKTION | 0xDBE2 | - | Auslesen und Vorgeben Aktivierung Funktion Rekuperation (Bremsenergierückgewinnung) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE2_D | RES_0xDBE2_D |
| GESCHWINDIGKEIT_RAD | 0xDBE4 | - | Auslesen Raddrehzahlfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE4_D |
| DSC_DRUCKSENSOREN | 0xDBE5 | - | Auslesen Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE5_D |
| DSC_KLEMMEN | 0xDBE7 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE7_D |
| DSC_PUMPE | 0xDBE8 | - | Auslesen und Vorgeben Ansteuerung Pumpe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDBE8_D | RES_0xDBE8_D |
| DSC_VENTILE | 0xDBE9 | - | Auslesen und Vorgeben Ansteuerung Ventile | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDBE9_D | RES_0xDBE9_D |
| BREMSPEDALWEGSENSOR | 0xDBF5 | - | Auslesen Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF5_D |
| BREMSREKUPERATIONSMOMENT | 0xDBF6 | - | Auslesen Radmoment Bremsrekuperation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF6_D |
| AUTOHOLDLED | 0xDC1D | - | Auslesen und Vorgeben AutoHold LED | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC1D_D | RES_0xDC1D_D |
| BREMSFLUESSIGKEITSSCHALTER | 0xDC1F | STAT_BREMSFLUESSIGKEIT_NIVEAU_SCHALTER_EIN | Auslesen Niveau Bremsflüssigkeit 1 = ein (leuchtet);  0 = aus oder Unterbrechung | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ASC_FUNKTION | 0xDC6D | - | Auslesen Status Funktion Antriebsschlupfregelung (ASC) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6D_D |
| CBC_FUNKTION | 0xDC74 | - | Auslesen/Setzen Status Funktion CBC (Corner Braking Control) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC74_D | RES_0xDC74_D |
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
| _REIFENPANNENANZEIGE | 0x4005 | - | Auslesen Reifenpannenanzeige | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4005_D |
| _RPA_LERNDATEN_STD_RB | 0x4007 | - | Auslesen Lerndaten Standardisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007_D |
| _DSC_SERIENNUMMER_BOSCH | 0x400D | STAT_SERIENNUMMER_DATA | Bosch-Seriennummer | DATA | - | high | data[5] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _BUILDINFO | 0x400E | - | Auslesen Buildinfo | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| _DSC_PCIB_LESEN | 0x5012 | - | Auslesen der Postcrash-IBrake Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5012_D |
| DSC_CBS_INTCORR | 0x5016 | - | Auslesen des internen Korrekturfaktors des CBS-Moduls (VA/HA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5016_D |
| _RPA_INITIALISIERUNG | 0xF010 | - | Starten Initialisierung(Standardisierung) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _RPA_RESET_PANNE | 0xF011 | - | Starten Reset Panne (Standardisierung bleibt erhalten) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _DSC_DEFRAG_EEPROM | 0xF019 | - | EEProm-Defragmentierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF019_R |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_ASC_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 2 | verfügbar Rückfallebene |
| 3 | verfügbar Schlupf aufgeweitet |
| 4 | verfügbar Rückfallebene Schlupf aufgeweitet |
| 0xFF | ungültig |

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

### TAB_DEFRAG_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Init (Routine wurde noch nicht gestartet) |
| 0x01 | Aktiv (Routine wird gerade ausgeführt) |
| 0x02 | Erfolg (Routine ohne Fehler beendet) |
| 0x03 | Fehler (Routine mit Fehler beendet) |

### TAB_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stand |
| 0x01 | Vorwaerts |
| 0x02 | Rueckwaerts |
| 0x03 | nicht definiert |

### TAB_DSC_DEFRAG_EEPROM

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Aktiv |
| 0x02 | Erfolg |
| 0x03 | Fehler |

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

### TAB_DSC_RADPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | keine |
| 0x01 | vorn links |
| 0x02 | vorn rechts |
| 0x03 | hinten links |
| 0x04 | hinten rechts |
| 0xFF | nicht definiert |

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

### TAB_ENTLASTUNG_GENERATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Entlastungsfkt. Aktiv / Rücknahme |
| 0x01 | iGR-High |
| 0x02 | SULEV-Fkt |
| 0x03 | Entlastung nach Motorstart |
| 0x04 | Rennstart mit oder ohne AGM Batterie |
| 0x05 | ELMOTENTL Hitze |
| 0x06 | ELMOTENTL Kälte |
| 0x07 | Entlastung Anfahrschwäche wie P66,P85 |
| 0x08 | Übertemperatur Generator |
| 0x09 | Entlastung aus Sicherheitsgründen |
| 0x0A | Entlastung Begrenzung Lagerkräfte |
| 0x0B | Entlastung aus Komfortgründen |
| 0x0C | Entlastung aus funktionalen Gründen |
| 0x0D | Keine Entlastungsfkt. Aktiv / Rücknahme |
| 0x0E | Vorhalt |
| 0x0F | Signal ungültig |

### TAB_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | RDCi stopped with Failed |
| 0x01 | RDCi finished with Success |
| 0xFF | RDCi is Ongoing |

### TAB_PCIB_START_STATE

| WERT | TEXT |
| --- | --- |
| 0 | kein Eintrag |
| 1 | Bremse genutzt |

### TAB_PCIB_STOP_STATE

| WERT | TEXT |
| --- | --- |
| 0 | kein Eintrag |
| 1 | Ziel Anhaltegeschwindigkeit erreicht |
| 2 | übersteuert durch Gaspedal Betätigung |
| 3 | übersteuert durch Bremspedal Betätigung |
| 4 | Verbindung zu Gas- und Bremspedal verloren |
| 5 | Abwürgverhinderung |

### TAB_PLAUSI_DRUCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Failed |
| 0x01 | Passed |
| 0xFF | Ongoing |

### TAB_RDC_AKTIV_INAKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv |
| 0x02 | Tankstop |
| 0x03 | Gateway oder Antennenfehler |
| 0x04 | Weiche Warnung aktiv |
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

### TAB_STATUS_DEFRAG_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Init (Routine wurde noch nicht gestartet) |
| 0x01 | Aktiv (Routine wird aktuell ausgeführt) |
| 0x02 | Erfolg (Routine ohne Fehler beendet) |
| 0x03 | Fehler (Routine mit Fehler beendet) |

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
