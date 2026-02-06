# DSC_G11.prg

## General

|  |  |
| --- | --- |
| File | DSC_G11.prg |
| Type | PRG |
| Jobs | 50 |
| Tables | 290 |
| Origin | BMW EF-511 Peter_Wanner |
| Revision | 11.007 |
| Author | BMW EF-511 Karl_Stuerzer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitätskontrolle |  |  |
| ORIGIN | string | BMW EF-511 Peter_Wanner |  |  |
| REVISION | string | 11.007 |  |  |
| AUTHOR | string | BMW EF-511 Karl_Stuerzer |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.992 |  |  |
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

### FS_LESEN_OBD_ANZAHL

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $12 reportNumberOfEmmissionsOBDDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

### FS_LESEN_OBD_DTC

Fehlerspeicher lesen (alle OBD-Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $13 ReportEmmissionsOBDDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

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

| Name | Type | Description |
| --- | --- | --- |
| CBS_K | string | Filter über CBS_K Identifier |

### CBS_INTERNE_DATEN_LESEN

CBS Daten auslesen (fuer CBS-Version 5) UDS  : $22   ReadDataByIdentifier UDS  : $1003 Data Identifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS-Version 6) Fahrzeug muss in einem der folgenden Zustaende sein:) - Pruefen_Analyse_Diagnose - Fahrbereitschaft_herstellen - Wohnen, ab CBS 6.2 - Fahren - Fahrbereitschaft_beenden UDS: $2E WriteDataByIdentifier Modus  : Default Musterparametersatz fuer Bremsbelagverschleiss Vorder/Hinterachse br_v,100,1,0,0,0,1,0,0 br_h,100,1,0,0,0,1,0,0 jedoch mit 'Strich_Punkt' getrennt (nicht mit Komma!)

| Name | Type | Description |
| --- | --- | --- |
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, Sic, Sic_v, TUV, AU, Ueb, Efk Werte externe Umfaenge: Oel, NOx_a, Br_v, Br_h Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 0xFFh (255 dez) Defaultwert: 100 (0x64h) Bremsflüssigkeit: 150 (0x96h) erlaubt |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 0x0F Defaultwert: 0x0F |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2062: 0-62 Schalter, keine Aenderung: 0x3F (63 dez) Defaultwert: 0x3F (63 dez) |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 0x8000 Defaultwert: 0x8000 |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0x00 -> % 0x01 -> km*10 0x0F -> d.c. Defaultwert: 0x0F |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0x00 Schalter, keine Aenderung: 0xFF Defaultwert: 0xFF |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 1-254 Monate 0 zurücksetzen Schalter, keine Aenderung: 0xFF Defaultwert: 0xFF |
| CHOV_CBS_CBR_VIEW | int | Sichtbarkeit CBx Umfang) Defaultwert 0, Service anzeigen: 0x00 |
| RES_BYTE | int | Reserve Byte (noch unbenutzt) Defaultwert: 0x00 |

### CBS_RESET_DETAIL_LESEN

Lesen der CBx-Daten aus einem CBx-Steuergerät UDS: $22 ReadDataByIdentifier Modus  : Default

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

### STATUS_FLM_LESEN_BMW

Auslesen der FASTA Daten und der Debug Codierung UDS: $22 $4000 ReadDataByID FLM_Rohdatenzaehler UDS: $22 $4001 ReadDataByID FLM_Snapshot_Fotos UDS: $22 $4002 ReadDataByID FLM_Rainflow_Matrizen_Rad UDS: $22 $4004 ReadDataByID FLM_Rainflow_Matrizen_Bauteile UDS: $22 $300D ReadDataByID Codierdaten FLM_BMW UDS: $22 $3001 ReadDataByID Codierdaten Physik UDS: $22 $3000 ReadDataByID Codierdaten Allgemein Modus   : Default

_No arguments._

### STATUS_FLM_LESEN_TRW

Auslesen der FASTA Daten des TRW-Bereichs UDS: $22 $4005 ReadDataByID STATUS_FLM_LESEN_TRW Modus   : Default

_No arguments._

### STATUS_VIN_LESEN

Fahrgestellnummer UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter VIN Modus: Default

_No arguments._

### DSC_SWE_DEVELOPMENT_INFO

Standardjob zum Auslesen der Entwickler-Informationen, Entwickler Name, Kompilierdatum,... Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| PROZESSKLASSE | char | 0x00 |
| LOGISTISCHER_IDENTIFIER | long | 0x00000000 - 0xFFFFFFFF |
| VERSION | long | 0x000000 - 0xFFFFFF |

### DSC_STEUERGERAETE_TYP

Diagnosejob zum Auslesen des Steuergeratetyps Modus: Default

_No arguments._

### _DSC_BYTE_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |

### _DSC_SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes UDS: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### STATUS_RBM_DETAIL_INFO

Auslesen der Detailinfos zu IUMPR Ueberwachungen UDS: $22 ReadDataByIdentifier Modus   : Default

_No arguments._

### STATUS_RDC_ERFS_TABELLE_LESEN

Elektronischer Reifenfülldruckschild Codierte Reifen Tabelle Lesen UDS  : $22   ReadDataByIdentifier Modus: Default

_No arguments._

### STATUS_RDC_ERFS_ECO_TABELLE_LESEN

Elektronischer Reifenfuelldruckschild Codierte ECO Reifen Tabelle Lesen UDS  : $22   ReadDataByIdentifier Modus: Default

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
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

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

### CBSNRTEXT

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelaege vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x05 | Bsi | Service Inclusive |
| 0x06 | Br_h | Bremsbelaege hinten |
| 0x07 | Pf | Partikelfilter |
| 0x08 | Soh | State of Health |
| 0x0A | Zuend | Zuendkerzen/Gluehkerzen |
| 0x0D | NOx_a | NOx-Additiv |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x15 | Efk | Einfahrkontrolle |
| 0x17 | Wf | Wasserfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
| 0x23 | Goel | Getriebeoel |
| 0x31 | Reif | Reifenalter |
| 0x32 | Kup | Kupplung |
| 0x33 | Gdf | Gasdruckdämpfer Frontklappe bei aktivem Fußgängerschutz |
| 0x34 | Verb | Verbandskasten |
| 0x35 | Tir_f | Tire Fit |
| 0x36 | Kat | Katalysator |
| 0x37 | Sto | Stossdaempfer |
| 0x64 | Sic_v | Sichtpruefung/Fahrzeug-Check verknuepft |
| 0xE0 | Cbs_e | CBS Evalboard |
| 0xE1 | Cbr_e | CBR Evalboard |
| 0xFF | rda | Anlieferzustand |

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelaege vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x05 | Bsi | Service Inclusive |
| 0x06 | Br_h | Bremsbelaege hinten |
| 0x07 | Pf | Partikelfilter |
| 0x07 | Dpf | Partikelfilter |
| 0x07 | Opf | Partikelfilter |
| 0x08 | Soh | State of Health |
| 0x0A | Zuend | Zuendkerzen/Gluehkerzen |
| 0x0D | NOx_a | NOx-Additiv |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x15 | Efk | Einfahrkontrolle |
| 0x17 | Wf | Wasserfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
| 0x23 | Goel | Getriebeoel |
| 0x23 | Oel_a | Getriebeoel (Automatik) |
| 0x31 | Reif | Reifenalter |
| 0x32 | Kup | Kupplung |
| 0x33 | Gdf | Gasdruckdämpfer Frontklappe bei aktivem Fußgängerschutz |
| 0x34 | Verb | Verbandskasten |
| 0x35 | Tir_f | Tire Fit |
| 0x36 | Kat | Katalysator |
| 0x37 | Sto | Stossdaempfer |
| 0x64 | Sic_v | Sichtpruefung/Fahrzeug-Check verknuepft |
| 0xE0 | Cbs_e | CBS Evalboard |
| 0xE1 | Cbr_e | CBR Evalboard |
| 0xFF | rda | Anlieferzustand |

### TAB_ECU_NAME

| ADR | NAME |
| --- | --- |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE_Slave |
| 0x18 | EGS |
| 0x29 | DSC/IB |
| 0x60 | KOMBI |
| 0xFF | unbekannt |

### TAB_CBS_EINHEITEN

| WERT | TEXT |
| --- | --- |
| 0x00 | % |
| 0x01 | Weg |
| 0x02 | Tage |
| 0x0F | Signal ungültig |
| 0xFF | nicht erlaubt |

### TAB_CBS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Status ok |
| 0x10 | Messung basiert auf Ersatzwerten |
| 0x20 | Status ok und Baukasten Client |
| 0x30 | Baukasten Client und Messung basiert auf Ersatzwerten |
| 0x40 | CBS Daten manipuliert |
| 0x50 | CBS Daten manipuliert und Messung basiert auf Ersatzwerten |
| 0x60 | CBS Daten manipuliert und Baukasten Client |
| 0x70 | CBS Daten manipuliert, Messung basiert auf Ersatzwerten und Baukasten Client |
| 0x80 | Signal ungültig |
| 0x90 | Signal ungültig |
| 0xA0 | Signal ungültig |
| 0xB0 | Signal ungültig |
| 0xC0 | Signal ungültig |
| 0xD0 | Signal ungültig |
| 0xE0 | Signal ungültig |
| 0xF0 | Signal ungültig |
| 0xFF | nicht erlaubt |

### TAB_CBS_MONAT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht relevant |
| 0x01 | Januar |
| 0x02 | Februar |
| 0x03 | März |
| 0x04 | April |
| 0x05 | Mai |
| 0x06 | Juni |
| 0x07 | Juli |
| 0x08 | August |
| 0x09 | September |
| 0x0A | Oktober |
| 0x0B | November |
| 0x0C | Dezember |
| 0x0E | Neues Steuergerät |
| 0x0F | Wert ungültig, Datum nicht verfügbar |
| 0xFF | nicht erlaubt |

### TAB_RUECK_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Verhinderungsgründe |
| 0x01 | ungültiger km-Stand |
| 0x02 | ungültiges Borddatum |
| 0x03 | ungültige Codierung |
| 0x04 | SG nicht initialisiert oder im falschen Zustand |
| 0x05 | Fahrzeug im fahrenden Zustand |
| 0x06 | Reset beim CBR nicht erlaubt |
| 0x07 | Reset bei aktivem Ersatzwert nicht erlaubt |
| 0x08 | Fahrzeug im Zustand Wohnen |
| 0xFE | keine Angabe |
| 0xFF | ungültig |

### ARG_0X400A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLZUSTAND | 0-n | high | unsigned char | - | TAB_ZUSTAND | - | - | - | - | - | 0 = Pumpe aus 1 = Pumpe vollangesteuert 2 = Pumpe teilangesteuert für EMV-Tests  |

### ARG_0X4700_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTION | 0-n | high | unsigned char | - | TAB_ZFM_FUNKTIONEN | - | - | - | - | - | Angeforderte Funktion |
| WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Zusätzliches Argument abhängig von gewünschter Funktion (z.B. für Soll-Moment), wird nicht immer ausgewertet. |

### ARG_0X5000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RDC_COMMAND | HEX | high | unsigned char | - | - | - | - | - | - | - | Test Befehl Nummer. |
| RDC_TEST_DATA | DATA | high | data[50] | - | - | 1.0 | 1.0 | 0.0 | - | - | Test Daten. |

### ARG_0X5001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERFS_COMMAND | HEX | high | unsigned char | - | - | - | - | - | - | - | Befehl Nummer. |
| ERFS_TEST_DATA | DATA | high | data[15] | - | - | 1.0 | 1.0 | 0.0 | - | - | Test Daten. |

### ARG_0X6660_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERROR_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Error number that shall be sent to the navigation (signal ST_ERR_NO_RCVR_NAVI), Range 0-255 |
| RESYNC_RATE | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Specifies the time (in seconds) between two consecutive resync requests. A value of zero leads to exactly one resync request. |

### ARG_0XA061_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_ENTLUEFTUNG | - | - | - | - | - | Phase |
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

### ARG_0XA155_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLL_VERTEILUNG_LAENGSMOMENT | + | - | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Soll-Verteilung-Längsmoment  |

### ARG_0XA156_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | 0-n | high | unsigned char | - | TAB_HYDRAULISCHE_FUNKTIONSPRUEFUNG_MODE | - | - | - | - | - | Test mode |

### ARG_0XA803_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | unsigned char | - | TAB_EMF_VERFAHREN | - | - | - | - | - | Gewählte Position |

### ARG_0XD6B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMZFF | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XD6B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMSKR | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XD6B9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_QDMWS | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XD80F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = aktiv; 0 = nicht aktiv |

### ARG_0XD8E9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TSA_DATA | DATA | high | data[104] | - | - | 1.0 | 1.0 | 0.0 | - | - | Tyre Sales Assistant Händler Daten |

### ARG_0XD8EA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKT_REIFEN_POSITION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 49.0 | Reifen Position in die Reifentabelle: 0 bis 59. |
| AKT_REIFEN_DATEN | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | Codierte Reifen Dimensionen wie im CAF Datei |

### ARG_0XD8F3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECO_AKT_REIFEN_POSITION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 19.0 | ECO Reifen Position in die Reifentabelle: 0 bis 19. |
| ECO_AKT_REIFEN_DATEN | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | Codierte Reifen Dimensionen wie im CAF Datei |

### ARG_0XD8F4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REIFEN_POSITION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 19.0 | Neue Reifen Position in die Reifentabelle: 0 bis 19. |
| REIFEN_DATEN | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | Neue codierte Reifen Dimensionen wie im CAF Datei |

### ARG_0XD8F5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NEUE_REIFEN_TABELLE | DATA | high | data[162] | - | - | 1.0 | 1.0 | 0.0 | - | - | Neue Codierte Reifen Tabelle |

### ARG_0XDA9C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PUB_ECU | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | - | - | Öffentlicher Schlüssel des Steuergeräts |
| DHSEC_ECU | DATA | - | data[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Geheimnis des Steuergeräts |

### ARG_0XDAE9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DHSEC_ECU | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | Geheimnis des Steuergeräts aus ASBC |

### ARG_0XDB2F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv  0 = inaktiv |

### ARG_0XDB38_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_FASCWBAS | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDB98_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed char | - | TAB_ROLLENMODUS | - | - | - | - | - | Setzen / Rücksetzen Rollenmodus (2=Setzen Rollenmodus Innenraum; 1 = Setzen Werksrollenmodus; 0 =  Rücksetzen) |

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
| VORLADEVENTIL_VA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schwarz-Weiß: Vorladeventil Vorderachse;  Diagonal: Vorladeventil Kreis 1 (VL/HR) (0 % = nicht angesteuert; 100 % = voll angesteuert)  |
| VORLADEVENTIL_HA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schwarz-Weiß: Vorladeventil Hinterachse;  Diagonal: Vorladeventil Kreis 2 (VR/HL) (0 % = nicht angesteuert; 100 % = voll angesteuert); ESPPremium: Vorladeventil HA (HSV 2); ESPhev: Seperationsventil HA (SV)  ESPPremium: Vorladeventil HA (HSV 2) ESPhev: Seperationsventil HA (SV) |
| TRENNVENTIL_VA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schwarz-Weiß: Trennventil Vorderachse; Diagonal: Trennventil Kreis 1 (VL/HR) (0 % = nicht angesteuert; 100 % = voll angesteuert)  |
| TRENNVENTIL_HA | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schwarz-Weiß: Trennventil Hinterachse; Diagonal: Trennventil Kreis 2 (VR/HL) (0 % = nicht angesteuert; 100 % = voll angesteuert); ESPPremium: Trennventil VA (USV 2); ESPhev: Druckregelventil VA (PCR) |

### ARG_0XDC1D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOHOLDLED_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = LED ein  0 = LED aus |

### ARG_0XDC89_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_SBS | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDC8A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_AAEPS | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDC8B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_EV | 1.0 | 1.0 | 0.0 | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDC8D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INDEX | 0-n | high | signed int | - | TAB_ADAPTIVDATEN_ZFM | - | - | - | - | - | Auswahl Adaptivdatum |
| WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Übergebener Wert |

### ARG_0XDCC0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RE_ID | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | ID der Radelektronik |
| RE_POS | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | - | - | Position der Radelektronik |

### ARG_0XDCC6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSNR | 0-n | high | unsigned char | - | TAB_RDC_STEUERFUNKTIONEN | - | - | - | - | - | 1 = BANDMODE - Bandmode; 4 = TEST_ER_FAHRT - Empfang der Eigenraeder bei Fahrt pruefen; 8 = CAL_REQUEST - Kalibrieranforderung; |
| AKTIONSNR | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 - SET; 0 - RESET |

### ARG_0XDCEE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SOLLDRUCK | bar | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | 3.0 | 4.8 | Sollwert Reifendruck für Radelektronik |
| RADPOS | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | - | - | Position Rad |

### ARG_0XDD0B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OBERGRENZE_SPANNUNG | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 409.5 | OBERGRENZE_SPANNUNG, Default: 16V |
| UNTERGRENZE_SPANNUNG | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 409.5 | UNTERGRENZE_SPANNUNG, Default: 11V |
| WUNSCH_SPANNUNG | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 409.5 | WunschSPANNUNG, Default: 14V |
| SPANNUNG_WUNSCH_RTG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | SPANNUNG_WUNSCH_RTG; Default: 0 |
| SPANNUNG_STG_WUNSCH | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | SPANNUNG_STG_WUNSCH; Default: 0 |
| ANF_LL_DREHZAHL_STG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | ANF_LL_DREHZAHL_STG; Default: 0 |
| ID_EN_BN_VER_SPANNUNG | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4095.0 | ID_EN_BN_VER_SPANNUNG; Default: 100 |

### ARG_0XDD0D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MANIPULATION_MAX_ST_VORGABE_EPS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_MAX_ST_VORGABE_EPS; Default: False |
| MANIPULATION_MAX_ST_VORGABE_ASA | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_MAX_ST_VORGABE_ASA; Default: False |
| MANIPULATION_MAX_ST_VORGABE_HINTERACHS_LKG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_MAX_ST_VORGABE_HINTERACHS_LKG; Default: false |
| MANIPULATION_MAX_ST_VORGABE_DSC | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_MAX_ST_VORGABE_DSC; Default: false |
| MANIPULATION_QU_DEG_LUFTFEDER_EN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_QU_DEG_LUFTFEDER_EN; Default: false |
| MAX_ST_VORGABE_EPS | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_ST_VORGABE_EPS; Default: 120A |
| MAX_ST_VORGABE_ASA | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_ST_VORGABE_ASA; Default: 40A |
| MAX_ST_VORGABE_HINTERACHS_LKG | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_ST_VORGABE_HINTERACHS_LKG; Default: 70A |
| MAX_ST_VORGABE_DSC | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_ST_VORGABE_DSC; Default: 100A |
| QU_DEG_LUFTFEDER_EN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 15.0 | QU_DEG_LUFTFEDER_EN; Default: 0 |

### ARG_0XDD0E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OBERGRENZE_SPANNUNG_EXT | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 409.5 | OBERGRENZE_SPANNUNG_EXT; Default: 16V  |
| UNTERGRENZE_SPANNUNG_EXT | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 409.5 | UNTERGRENZE_SPANNUNG_EXT; Default: 11V  |
| WUNSCH_SPANNUNG_EXT | V | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 409.5 | WUNSCH_SPANNUNG_EXT; Default: 14V  |
| SPANNUNG_WUNSCH_RTG_EXT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | SPANNUNG_WUNSCH_RTG_EXT; Default: 0  |
| SPANNUNG_STG_WUNSCH_EXT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 7.0 | SPANNUNG_STG_WUNSCH_EXT; Default: 0 |
| ANF_LL_DREHZAHL_STG_EXT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | ANF_LL_DREHZAHL_STG_EXT; Default: 0 |
| ID_EN_BN_VER_SPANNUNG_EXT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4095.0 | ID_EN_BN_VER_SPANNUNG_ext; Default: 101 |

### ARG_0XDD0F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MANIPULATION_MAX_ST_LAST_VORGABE_ARS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_MAX_ST_LAST_VORGABE_ARS; Default: false |
| MANIPULATION_MAX_ST_REK_VORGABE_ARS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_MAX_ST_REK_VORGABE_ARS (bool), Default: false |
| MANIPULATION_EN_VERFUEGB_ARS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | MANIPULATION_EN_VERFUEGB_ARS; Default: false |
| MAX_ST_LAST_VORGABE_ARS | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | MAX_ST_LAST_VORGABE_ARS; Default: 240A |
| MAX_ST_REK_VORGABE_ARS | A | high | unsigned char | - | - | 1.0 | 1.0 | 252.0 | -252.0 | 3.0 | MAX_ST_REK_VORGABE_ARS; Default: -240A |
| EN_VERFUEGB_ARS | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 100.0 | EN_VERFUEGB_ARS; Default: 100% |

### ARG_0XDD3E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID_EN_BN_VER_SPANNUNG | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4095.0 | ID_EN_BN_VER_SPANNUNG; Default: 100 |
| IST_ST_KL_1_VER | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_1_VER; Default: 0A |
| IST_ST_KL_2_VER | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_2_VER; Default: 0A |
| IST_ST_KL_3_VER | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_3_VER; Default: 0A |
| IST_ST_KL_4_VER | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_4_VER; Default: 0A |
| VER_ST_VORAUSSAGE | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | VER_ST_VORAUSSAGE; Default: 0A |
| VER_ST_BEDARF | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | VER_ST_BEDARF (A, 0...765); Default: 0A |

### ARG_0XDD3F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID_EN_BN_VER_SPANNUNG_EXT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4095.0 | ID_EN_BN_VER_SPANNUNG_ext; Default: 0 |
| IST_ST_KL_1_VER_EXT | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_1_VER_EXT; Default: 0A |
| IST_ST_KL_2_VER_EXT | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_2_VER_EXT; Default: 0A |
| IST_ST_KL_3_VER_EXT | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_3_VER_EXT; Default: 0A |
| IST_ST_KL_4_VER_EXT | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | IST_ST_KL_4_VER_EXT; Default: 0A |
| VER_ST_VORAUSSAGE_EXT | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | VER_ST_VORAUSSAGE_EXT; Default: 0A |
| VER_ST_BEDARF_EXT | A | high | unsigned char | - | - | 1.0 | 3.0 | 0.0 | 0.0 | 765.0 | VER_ST_BEDARF_EXT; Default: 0A |

### ARG_0XDD46_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = ein; 0 = aus |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_HA_FLAG_BVA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HA_FLAG_BVA | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Zustand BVA-Sensor: 0 = BVA-Sersor nicht durchgeschliffen, 1 = BVA-Sersor durchgeschliffen |

### BF_HA_RESET_VERHINDERER_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HA_DATUM_UHRZEIT_GUELTIG_BEI_RESET | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Datum_Uhrzeit_gueltig_bei_reset 1. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_KM_STAND_GUELTIG_BEI_RESET | 0/1 | high | unsigned char | 0x02 | - | - | - | - | KM_Stand_gueltig_bei_reset 2. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_VIN_GUELTIG_BEI_RESET | 0/1 | high | unsigned char | 0x04 | - | - | - | - | VIN_gueltig_bei_reset 3. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |

### BF_HA_RESET_VERHINDERER_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HA_BBV_SENSOR_NICHT_GEST_BEI_RESET | 0/1 | high | unsigned char | 0x01 | - | - | - | - | BBV_Sensor_nicht_angesteckt_bei_reset 4. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_BBV_SENSOR_FEHLER_BEI_RESET | 0/1 | high | unsigned char | 0x02 | - | - | - | - | BBV_Sensor_Fehler_bei_reset 5. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_VORDRUCK_BEI_RESET | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Vordruck_bei_reset 6. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_EMF_ANGEZ_BEI_RESET | 0/1 | high | unsigned char | 0x08 | - | - | - | - | EMF_angezogen_bei_reset 7. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_KOMM_FEHLER_EMF_BEI_RESET | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Kommunikationsfehler_mit_EMF_bei_reset 8. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_GESCHW_BEI_RESET | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Geschwindigkeit_bei_reset 9. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_HA_AKTIVER_DRUCKAUFBAU_BEI_RESET | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Aktiver_Druckaufbau_bei_reset 10. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |

### BF_VA_FLAG_BVA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VA_FLAG_BVA | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Zustand BVA-Sensor: 0 = BVA-Sersor nicht durchgeschliffen, 1 = BVA-Sersor durchgeschliffen |

### BF_VA_RESET_VERHINDERER_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VA_DATUM_UHRZEIT_GUELTIG_BEI_RESET | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Datum_Uhrzeit_gueltig_bei_reset 1. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_KM_STAND_GUELTIG_BEI_RESET | 0/1 | high | unsigned char | 0x02 | - | - | - | - | KM_Stand_gueltig_bei_reset 2. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_VIN_GUELTIG_BEI_RESET | 0/1 | high | unsigned char | 0x04 | - | - | - | - | VIN_gueltig_bei_reset 3. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |

### BF_VA_RESET_VERHINDERER_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VA_BBV_SENSOR_NICHT_GEST_BEI_RESET | 0/1 | high | unsigned char | 0x01 | - | - | - | - | BBV_Sensor_nicht_angesteckt_bei_reset 4. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_BBV_SENSOR_FEHLER_BEI_RESET | 0/1 | high | unsigned char | 0x02 | - | - | - | - | BBV_Sensor_Fehler_bei_reset 5. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_VORDRUCK_BEI_RESET | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Vordruck_bei_reset 6. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu  |
| STAT_VA_EMF_ANGEZ_BEI_RESET | 0/1 | high | unsigned char | 0x08 | - | - | - | - | EMF_angezogen_bei_reset 7. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_KOMM_FEHLER_EMF_BEI_RESET | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Kommunikationsfehler_mit_EMF_bei_reset 8. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_GESCHW_BEI_RESET | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Geschwindigkeit_bei_reset 9. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |
| STAT_VA_AKTIVER_DRUCKAUFBAU_BEI_RESET | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Aktiver_Druckaufbau_bei_reset 10. Resetverhinderer: 0 = Aussage trifft nicht zu, 1 = Aussage trifft zu |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### EINZELFEHLER_BIT

| WERT | TEXT |
| --- | --- |
| 0 | Nein |
| 1 | Ja |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x022900 | Energiesparmode aktiv | 0 | - |
| 0x022908 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022909 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02290A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02290B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02290C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02290D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x022921 | EEPROM-Fehler (Sammelfehler) | 0 | - |
| 0x022924 | Flexray, externe Ursache (Sammelfehler) | 1 | - |
| 0x022925 | Flexray, interne Ursache (Sammelfehler) | 0 | - |
| 0x022928 | LIN, interne Ursache (Sammelfehler) | 0 | - |
| 0x022929 | Softwarefehler (Sammelfehler) | 0 | - |
| 0x02FF29 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030540 | QDM-SBS - Gierratensensor Redundanzfehler | 0 | - |
| 0x030541 | QDM-SBS - Gierratensensor Modellfehler Sensor 1 | 0 | - |
| 0x030542 | QDM-SBS - Gierratensensor Modellfehler Sensor 2 | 0 | - |
| 0x030543 | QDM-SBS - Gierratensensor Signalqualität Sensor 1 | 0 | - |
| 0x030544 | QDM-SBS - Gierratensensor Signalqualität Sensor 2 | 0 | - |
| 0x03054A | QDM-SBS - Lenkwinkel effektiv Modellfehler | 0 | - |
| 0x03054B | QDM-SBS - Lenkwinkel effektiv Randueberwachung | 0 | - |
| 0x030555 | QDM-SBS - Lenkwinkel Fahrer Modellfehler | 0 | - |
| 0x030557 | QDM-SBS - Lenkwinkel Fahrer Adaptivdaten fuer Lenkwinkeltoleranz auf Maximalwert | 0 | - |
| 0x03055A | QDM-SBS - Laengsbeschleunigungssensor Modellfehler | 0 | - |
| 0x03055B | QDM-SBS - Laengsbeschleunigungssensor Signalqualitaet | 0 | - |
| 0x030566 | QDM-SBS - Nickrate Modellfehler | 0 | - |
| 0x030567 | QDM-SBS - Nickrate Signalqualitaet ungenuegend | 0 | - |
| 0x03056A | QDM-SBS - Querbeschleunigungssensor Redundanzfehler | 0 | - |
| 0x03056B | QDM-SBS - Querbeschleunigungssensor Modellfehler Sensor 1 | 0 | - |
| 0x03056C | QDM-SBS - Querbeschleunigungssensor Modellfehler Sensor 2 | 0 | - |
| 0x03056D | QDM-SBS - Querbeschleunigungssensor Signalqualitaet Sensor 1 | 0 | - |
| 0x03056E | QDM-SBS - Querbeschleunigungssensor Signalqualitaet Sensor 2 | 0 | - |
| 0x030576 | QDM-SBS - Rollrate Modellfehler | 0 | - |
| 0x030577 | QDM-SBS - Rollrate Signalqualitaet ungenuegend | 0 | - |
| 0x030581 | QDM-SBS - Vertikalbeschleunigungssensor Modellfehler | 0 | - |
| 0x030582 | QDM-SBS - Vertikalbeschleunigungssensor Signalqualitaet ungenuegend | 0 | - |
| 0x03058A | QDM-SBS - Inkorrekter Rollenbetrieb erkannt | 0 | - |
| 0x03058C | QDM-SBS - Schwellen Querbeschleunigungsueberwachung aufgeweitet | 0 | - |
| 0x03058D | QDM-SBS - Schwerpunktsgeschwindigkeit Diversitaeres Rechnen HL-Software | 0 | - |
| 0x03058E | QDM-SBS - Beschleunigungssensoren Adaptivdaten Sensortoleranz auf Maximalwert | 0 | - |
| 0x03058F | QDM-SBS - Sensorcluster Seriennummer geändert oder fehlerhaft | 0 | - |
| 0x03064D | QDM-ELMAFW - Fahrdynamikregelung im Basis-Bordnetz durch globales Power Management eingeschränkt | 1 | - |
| 0x03064E | QDM-ELMAFW - Fahrdynamikregelung im Extended-Bordnetz durch globales Power Management eingeschränkt | 1 | - |
| 0x03065C | QDM-ZFM - HSR  deaktiviert Qualität Fahrzeugsensorik ungenügend | 0 | - |
| 0x030661 | QDM-ZFM - HSR langsame Lenkwinkelsynchronisation überschreitet fahrsituationsbedingt Warngrenze | 1 | - |
| 0x030665 | QDM-ZFM - HSR - Aktuator AGB meldet Dynamikproblem - Fehleramplitude | 1 | - |
| 0x030666 | QDM-ZFM - HSR schnelle Lenkwinkelsynchronisation überschreitet fahrsituationsbedingt Warngrenze | 1 | - |
| 0x03066D | QDM-ZFM - Abschaltung Differentialsperre aufgrund Anforderung der DSC-Stabilisierungsfunktion | 0 | - |
| 0x03066E | QDM-ZFM - Abschaltung Mittenkupplung aufgrund Anforderung der DSC-Stabilisierungsfunktion | 0 | - |
| 0x030800 | FAS - Globale Sicherheitsabschaltung | 0 | - |
| 0x030801 | FAS - ACC/DCC - Sicherheitsabschaltung | 0 | - |
| 0x030802 | FAS - SpeedLimiter - Sicherheitsabschaltung | 0 | - |
| 0x030804 | FAS - Frontschutz - Sicherheitsabschaltung | 0 | - |
| 0x030820 | FAS - Abschaltung - Unerwartete Reaktion eines Kommunikationspartners | 1 | - |
| 0x03082F | FAS - Unerwartete Reaktion vom Seitenradar | 0 | - |
| 0x480692 | Bremsbelagsensor - Vorderachse - Leitungsfehler | 0 | - |
| 0x480696 | Bremsbelagsensor - Hinterachse - Leitungsfehler | 0 | - |
| 0x48069B | RDCi Funkverbindung durch Fremdeinfluss gestoert | 1 | - |
| 0x48069C | Rollenbetrieb - Aktiviert | 0 | - |
| 0x48069E | RDCi Kalibrierung Raderkennung nicht moeglich | 0 | - |
| 0x4806A1 | RDCi Alle Radelektroniken bedingt kompatibel keine Positionsanzeige | 0 | - |
| 0x4806A6 | RDCi Radelektronik Position unbekannt Mischverbau | 0 | - |
| 0x4806B8 | RDCi Radelektronik vorn links kein Empfang | 0 | - |
| 0x4806C3 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 1 Kurzschluss nach Plus | 0 | - |
| 0x4806C4 | Bremspedalwegsensor - Plausibilisierung - Signalleitung 2 Kurzschluss nach Plus | 0 | - |
| 0x4806C5 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung - Versorgungsspannung zu niedrig | 0 | - |
| 0x4806C6 | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung - Versorgungsspannung zu hoch | 0 | - |
| 0x4806C9 | Bremspedalwegsensor - Plausibilisierung - Null - Punkt Offset zu groß | 0 | - |
| 0x4806DA | RDCi Radelektronik vorn rechts kein Empfang | 0 | - |
| 0x4806F0 | RDCi Radelektronik hinten links kein Empfang | 0 | - |
| 0x4806F4 | RDCi Radelektronik hinten rechts kein Empfang | 0 | - |
| 0x4806FA | RDCi Radelektronik vorn links defekt | 0 | - |
| 0x4806FD | Bremspedalwegsensor - Nullstellung Sensor 1 - nicht initialisiert | 0 | - |
| 0x480702 | RDCi Radelektronik vorn rechts defekt | 0 | - |
| 0x48070F | RDCi Radelektronik hinten links defekt | 0 | - |
| 0x480710 | Raddrehzahlsensor - Vorn Links - Plausi: Drehrichtung | 0 | - |
| 0x480713 | Raddrehzahlsensor - Vorn Rechts - Plausi: Drehrichtung | 0 | - |
| 0x480716 | Raddrehzahlsensor - Hinten Links - Plausi: Drehrichtung | 0 | - |
| 0x480719 | Raddrehzahlsensor - Hinten Rechts - Plausi: Drehrichtung | 0 | - |
| 0x48071C | Elektrohydraulischer Bremsaktuator  - Versorgungsspannung | 0 | - |
| 0x48071F | RDCi Radelektronik Position unbekannt | 0 | - |
| 0x480720 | Funktion ElektronischeBremskraftverteilung_HA über Codierung deaktiviert | 0 | - |
| 0x480721 | Funktion CorneringBrakeControl über Codierung deaktiviert | 0 | - |
| 0x480722 | Ventile Spule - Schalter Spulenmasse defekt | 1 | - |
| 0x480724 | LMV-Funktion über Diagnose deaktiviert | 1 | - |
| 0x480728 | RDCi Radelektronik hinten rechts defekt | 0 | - |
| 0x480732 | EPBi Aktuator Stromversorgung Links defekt | 0 | - |
| 0x480733 | EPBi Aktuator Stromversorgung Rechts defekt | 0 | - |
| 0x480736 | Vakuumsensor - Spannungsversorgung zu niedrig | 0 | - |
| 0x480737 | Vakuumsensor - Spannungsversorgung zu hoch | 0 | - |
| 0x480738 | Steuergerät intern - 5V Spannungsversorgung zu niedrig | 0 | - |
| 0x480739 | Steuergerät intern - 5V Spannungsversorgung zu hoch | 0 | - |
| 0x48073A | Raddrehzahlsensor - Vorn Links - Luftspalt zu groß | 0 | - |
| 0x48073B | Raddrehzahlsensor - Vorn Rechts - Luftspalt zu groß | 0 | - |
| 0x48073C | Raddrehzahlsensor - Hinten Links - Luftspalt zu groß | 0 | - |
| 0x48073D | Raddrehzahlsensor - Hinten Rechts - Luftspalt zu groß | 0 | - |
| 0x48073E | Softwareintegration - MPU-Ausnahmefehler | 0 | - |
| 0x480758 | EPBi Taster dauerhaft betätigt | 0 | - |
| 0x480760 | EPBi - Montagemodus ist aktiv | 0 | - |
| 0x480762 | EPBi Links - Elektrischer Kurzschluss | 0 | - |
| 0x480763 | EPBi Rechts - Elektrischer Kurzschluss | 0 | - |
| 0x480764 | EPBi Aktuator Links - Elektrischer Fehler Offene Leitung | 0 | - |
| 0x480765 | EPBi Aktuator Rechts - Elektrischer Fehler Offene Leitung | 0 | - |
| 0x480766 | EPBi Aktuator Links - Elektrischer Kurzschluss GND oder KL30 | 0 | - |
| 0x480767 | EPBi Aktuator Rechts - Elektrischer Kurzschluss GND oder KL30 | 0 | - |
| 0x480768 | EPBi H-Brücke - Defekt | 0 | - |
| 0x48077C | RDCi Radelektronik vorn links Batterie Unterspannung | 1 | - |
| 0x48077D | RDCi Radelektronik vorn rechts Batterie Unterspannung | 1 | - |
| 0x48077E | RDCi Radelektronik hinten links Batterie Unterspannung | 1 | - |
| 0x48077F | RDCi Radelektronik hinten rechts Batterie Unterspannung | 1 | - |
| 0x480780 | RDCi Radelektronik Bandmode | 0 | - |
| 0x48078B | Vorderachslenkwinkel Lenkwinkelsignal oberhalb VFUSI nicht initialisiert | 1 | - |
| 0x48078F | Bremspedalwegsensor - Plausibilisierung - Vergleich Sensor 1 zu Sensor 2 | 0 | - |
| 0x480792 | Rekuperation - Plausibilität - Bremsmoment | 0 | - |
| 0x4807BF | EPBi Initialisierung nicht durchgeführt | 0 | - |
| 0x4807C7 | Bremspedalwegsensor - Hybrid - Plausibilisierung - Wegsignal zu groß | 0 | - |
| 0x4807C8 | Bremspedalwegsensor - Hybrid - Plausibilisierung - Wegsignal zu klein | 0 | - |
| 0x4807CC | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x4807CE | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x4807D0 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x4807D1 | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x4807D2 | Ventile - Sicherheitsschalter - Spulen offen | 0 | - |
| 0x4807D3 | Ventile - Sicherheitsschalter - Spulen kurzgeschlossen | 0 | - |
| 0x4807D4 | Steuergerät intern - System ASIC - Sammelfehler | 0 | - |
| 0x4807D5 | Steuergerät intern - Park Brake - Micro - Sammelfehler | 0 | - |
| 0x4807D7 | Steuergerät intern - CPU defekt - RAM - Sammelfehler | 0 | - |
| 0x4807D8 | Steuergerät intern - CPU defekt - Peripherie - Sammelfehler | 0 | - |
| 0x4807D9 | Steuergerät intern - externer Watchdog - Sammelfehler | 0 | - |
| 0x4807DA | Steuergerät intern - CPU defekt - CPU - Sammelfehler | 0 | - |
| 0x4807DB | Steuergerät intern - Temperatursensor - Fehler - Sammelfehler | 0 | - |
| 0x4807DC | Steuergerät intern Hydraulikeinheit defekt | 0 | - |
| 0x4807DD | Steuergerät intern - Softwarefehler - Sammelfehler | 0 | - |
| 0x4807DE | Elektrohydraulischer Bremsaktuator - Motor - Treiber offen | 0 | - |
| 0x4807DF | Raddrehzahlsensoren - Allgemein - falscher Umfang Rad | 0 | - |
| 0x4807E0 | Raddrehzahlsensor - Hinten Links - Leitungsunterbrechung | 0 | - |
| 0x4807E1 | Raddrehzahlsensor - Hinten Links - Versorgung Kurzschluss nach Masse | 0 | - |
| 0x4807E2 | Raddrehzahlsensor - Hinten Links - Versorgung - Kurzschluss nach Plus | 0 | - |
| 0x4807E3 | Raddrehzahlsensor - Hinten Links - Sensormasse - Kurzschluss nach Plus | 0 | - |
| 0x4807E4 | Raddrehzahlsensor - Hinten Links - Sensormasse - Kurzschluss nach Masse | 0 | - |
| 0x4807E5 | Raddrehzahlsensor - Hinten Links - Geschwindigkeit unplausibel | 0 | - |
| 0x4807E6 | Raddrehzahlsensor - Hinten Links - Signal ausbleibend | 0 | - |
| 0x4807E7 | Raddrehzahlsensor - Hinten Links - Signalaussetzer | 0 | - |
| 0x4807E8 | Raddrehzahlsensor - Hinten Links - Spannungsbereich ungültig | 0 | - |
| 0x4807E9 | Raddrehzahlsensor - Hinten Rechts - Leitungsunterbrechung | 0 | - |
| 0x4807EA | Raddrehzahlsensor - Hinten Rechts - Versorgung - Kurzschluss nach Masse | 0 | - |
| 0x4807EB | Raddrehzahlsensor - Hinten Rechts - Versorgung - Kurzschluss nach Plus | 0 | - |
| 0x4807EC | Raddrehzahlsensor - Hinten Rechts - Sensormasse - Kurzschluss nach Plus | 0 | - |
| 0x4807ED | Raddrehzahlsensor - Hinten Rechts - Sensormasse - Kurzschluss nach Masse | 0 | - |
| 0x4807EE | Raddrehzahlsensor - Hinten Rechts - Geschwindigkeit unplausibel | 0 | - |
| 0x4807EF | Raddrehzahlsensor - Hinten Rechts - Signal ausbleibend | 0 | - |
| 0x4807F0 | Raddrehzahlsensor - Hinten Rechts - Signalaussetzer | 0 | - |
| 0x4807F1 | Raddrehzahlsensor - Hinten Rechts - Spannungsbereich ungültig | 0 | - |
| 0x4807F2 | Raddrehzahlsensor - Vorn Links - Leitungsunterbrechung | 0 | - |
| 0x4807F3 | Raddrehzahlsensor - Vorn Links - Versorgung - Kurzschluss nach Masse | 0 | - |
| 0x4807F4 | Raddrehzahlsensor - Vorn Links - Versorgung - Kurzschluss nach Plus | 0 | - |
| 0x4807F5 | Hydraulik Boost - HBC oder HBB Funktion aktiv - Bremspedalgefühl verändert - Infoeintrag | 1 | - |
| 0x4807F7 | Raddrehzahlsensor - Vorn Links - Sensormasse - Kurzschluss nach Plus | 0 | - |
| 0x4807F8 | Raddrehzahlsensor - Vorn Links - Sensormasse - Kurzschluss nach Masse | 0 | - |
| 0x4807F9 | Raddrehzahlsensor - Vorn Links - Geschwindigkeit unplausibel | 0 | - |
| 0x4807FA | Raddrehzahlsensor - Vorn Links - Signal ausbleibend | 0 | - |
| 0x4807FB | Raddrehzahlsensor - Vorn Links - Signalaussetzer | 0 | - |
| 0x4807FC | Raddrehzahlsensor - Vorn Links - Spannungsbereich ungültig | 0 | - |
| 0x4807FD | Raddrehzahlsensor - Vorn Rechts - Leitungsunterbrechung | 0 | - |
| 0x4807FE | Raddrehzahlsensor - Vorn Rechts - Versorgung - Kurzschluss nach Masse | 0 | - |
| 0x4807FF | Raddrehzahlsensor - Vorn Rechts - Versorgung - Kurzschluss nach Plus | 0 | - |
| 0x480800 | Raddrehzahlsensor - Vorn Rechts - Sensormasse - Kurzschluss nach Plus | 0 | - |
| 0x480801 | Raddrehzahlsensor - Vorn Rechts - Sensormasse - Kurzschluss nach Masse | 0 | - |
| 0x480802 | Raddrehzahlsensor - Vorn Rechts - Geschwindigkeit unplausibel | 0 | - |
| 0x480803 | Raddrehzahlsensor - Vorn Rechts - Signal ausbleibend | 0 | - |
| 0x480804 | Raddrehzahlsensor - Vorn Rechts - Signalaussetzer | 0 | - |
| 0x480805 | Raddrehzahlsensor - Vorn Rechts - Spannungsbereich ungültig | 0 | - |
| 0x480806 | Peripherial/Funktional error Schnittstelle QDM Initialisierung | 0 | - |
| 0x480809 | Ventile Spule Kurzschluss | 0 | - |
| 0x48080A | Ventile Spule offen | 0 | - |
| 0x48080B | Ventile Spulentreiber Kurzschluss | 0 | - |
| 0x48080C | Ventile Spulentreiber Leckstrom | 0 | - |
| 0x48080D | Ventile Leckstrom auf unbekannter Spule | 0 | - |
| 0x48080E | Ventile Spule Übertemperatur | 0 | - |
| 0x480810 | Ventile Masseanschluss fehlt | 0 | - |
| 0x480813 | EPBi - PBC - Links Mechanischer Fehler | 0 | - |
| 0x480814 | EPBi - PBC - Links Spannkraft nicht erreicht | 0 | - |
| 0x480816 | EPBi - PBC - Links schwergängig | 0 | - |
| 0x480818 | EPBi - PBC - Rechts Mechanischer Fehler | 0 | - |
| 0x480819 | EPBi - PBC - Rechts Spannkraft nicht erreicht | 0 | - |
| 0x48081B | EPBi - PBC - Rechts schwergängig | 0 | - |
| 0x480821 | EPBi LIN-Taster - Kommunikationsfehler | 0 | - |
| 0x480822 | EPBi LIN-Taster - Tasterfehler | 0 | - |
| 0x480823 | Steuergerät intern - Spannungsregler - Sammelfehler | 0 | - |
| 0x480825 | EPBi Allgemein - Fehler Freigabeleitung lösen | 0 | - |
| 0x480826 | EPBi - PBC - Master Unbekannter Bremsenzustand | 0 | - |
| 0x480827 | EPBi - PBC - Intern Unbekannter Bremsenzustand | 0 | - |
| 0x480828 | EPBi Allgemein - Fehler Freigabeleitung zuspannen | 0 | - |
| 0x48082D | Drucksensor - elektrischer Fehler | 0 | - |
| 0x480839 | Vakuumsensor - Spannungsversorgung Kurzschluss nach Masse | 0 | - |
| 0x48083C | Vakuumsensor Plausibilisierung | 0 | - |
| 0x48083D | Vakuumsensor Kurzschluss nach Plus | 0 | - |
| 0x48083E | EPBi Spannungsversorgung Überspannung Funktionseinschränkung EPBi | 0 | - |
| 0x48083F | Raddrehzahlsensor - Vorn Links - Signal unplausibel | 0 | - |
| 0x480841 | Vakuumsensor Booster Plausibilisierung | 0 | - |
| 0x480844 | Kreisdrucksensor - Vorderachse - Plausibilisierung | 0 | - |
| 0x480845 | Kreisdrucksensor - Hinterachse - elektrischer Fehler | 0 | - |
| 0x480849 | Fahrzeugregler - Giergerschwindigkeit Fahrzeug - Fehleramplitude ueberschreitet Grenzwert | 1 | - |
| 0x48084C | EPBi Spannungsversorgung Unterspannung Funktionseinschränkung EPBi | 0 | - |
| 0x48084D | Raddrehzahlsensor - Hinten Rechts - Signal unplausibel | 0 | - |
| 0x480850 | Raddrehzahlsensor - Vorn Rechts - Signal unplausibel | 0 | - |
| 0x480851 | Softwareintegration Datenstand unplausibel | 0 | - |
| 0x480852 | EPBi - PBC - Hydraulische Druckunterstützung nicht umsetzbar | 0 | - |
| 0x480853 | Vakuumsensor - Spannungsversorgung Kurzschluss nach Plus | 0 | - |
| 0x480855 | Steuergerät intern - EEPROM Allgemeiner Fehler | 0 | - |
| 0x480859 | Vakuumsensor Offen oder Kurzschluss nach Masse | 0 | - |
| 0x48085A | Vakuumsensor - Spannungsversorgung außerhalb Toleranz | 0 | - |
| 0x48085C | Kreisdrucksensor - Hinterachse - Plausibilisierung | 0 | - |
| 0x48085E | Elektrohydraulischer Bremsaktuator - Motor - Masse offen | 0 | - |
| 0x480861 | Elektrohydraulischer Bremsaktuator - Motor - offen oder Treiber kurzgeschlossen | 0 | - |
| 0x480862 | Bremspedalwegsensor - Bereichsgrenze überschritten | 0 | - |
| 0x480863 | EPBi Aktuator - fehlerhafte Kalibrierung | 0 | - |
| 0x480864 | BEGU - Datenstand unplausibel | 0 | - |
| 0x480865 | Automatik Hold LIN Tasterfehler | 0 | - |
| 0x480866 | EPBi LIN LED-Fehler | 0 | - |
| 0x48086B | Hinterachslenkwinkel Lenkwinkelsignal oberhalb VFUSI nicht initialisiert | 1 | - |
| 0x48086C | Fahrzeugregler - Querbeschleunigung - Fehleramplitude ueberschreitet Grenzwert | 1 | - |
| 0x480872 | Bremspedalwegsensor - Bereichsgrenze unterschritten | 0 | - |
| 0x480873 | Vakuumsensor Rauschüberwachung | 0 | - |
| 0x480874 | Raddrehzahlsensor - Hinten Links - Signal unplausibel | 0 | - |
| 0x480876 | Ventile Spulentreiber defekt | 0 | - |
| 0x480877 | Drucksensor - Plausibilisierung | 0 | - |
| 0x480878 | Fahrzeugregler - Ackermann Sollgierrate - Fehleramplitude ueberschreitet Grenzwert | 1 | - |
| 0x48087C | Fahrzeugregler - Ist Lenkwinkel Vorderachse - Fehleramplitude ueberschreitet Grenzwert | 1 | - |
| 0x48087D | ECBA - Bremsscheibentemperatur überschreitet den erlaubten Schwellwert | 0 | - |
| 0x48087E | Hydraulische Funktionsprüfung noch nicht durchgeführt - Info | 0 | - |
| 0x480880 | Kreisdrucksensor - Vorderachse - elektrischer Fehler | 0 | - |
| 0x480882 | AutoH/SSM Übergabe an EPB nicht möglich | 0 | - |
| 0x480885 | Bremspedalwegsensor - Rauschüberwachung - Versorgungsspannung | 0 | - |
| 0x480887 | Bremspedalwegsensor - Rauschüberwachung - Signalleitung 2 | 0 | - |
| 0x480888 | Bremspedalwegsensor - Rauschüberwachung - Signalleitung 1 | 0 | - |
| 0x480890 | Steuergerät intern - Software Laufzeitfehler - Versenden von Daten fehlgeschlagen | 0 | - |
| 0x480891 | Steuergerät intern - Software Laufzeitfehler - Versenden von Daten wiederholt fehlgeschlagen | 0 | - |
| 0x480898 | Ventile Spule Übertemperatur (Traktionskontrolle) | 0 | - |
| 0x480899 | Ventile Spule Übertemperatur (Auto Hold) | 0 | - |
| 0x48089A | Steuergerät intern - EEPROM Allgemeiner Fehler (Kalibrierdaten) | 0 | - |
| 0x48089B | Ventile Spule offen / Kurzschluss (Traktionskontrolle SUPPLY) | 0 | - |
| 0x48089C | Ventile Spule offen / Kurzschluss (Traktionskontrolle ISO) | 0 | - |
| 0x4808E4 | Steuergerät intern - Temperatursensor - ASIC - Wert außerhalb Toleranz | 0 | - |
| 0x4808E5 | Steuergerät intern - Temperatursensor - PCB Diode - Wert außerhalb Toleranz | 0 | - |
| 0x4808E6 | Steuergerät intern - Temperatursensor - ASIC / PCB Diode - Plausibilisierung fehlgeschlagen | 0 | - |
| 0x4808E7 | Steuergerät intern - Temperatursensor - ASIC - Kalibrierung fehlerhaft | 0 | - |
| 0x4808E8 | Steuergerät intern - Temperatursensor - PCB Diode - Kalibrierung fehlerhaft | 0 | - |
| 0x4808EB | Vakuumsensor - Offset-Plausibilisierung | 0 | - |
| 0x480906 | Schnittstellenüberwachung - PWF-Zustand unplausibel | 0 | - |
| 0x48092F | EPBi Aktuator Inkohärenter Aktuatorzustand | 0 | - |
| 0x480931 | Bremspedalwegsensor - Plausibilisierung Signalleitung 1 | 0 | - |
| 0x480932 | Bremsflüssigkeitssensor - Bremsflüssigkeitsstand zu niedrig | 0 | - |
| 0x480934 | Hydraulik Boost - Unterdruck des Booster zu niedrig | 1 | - |
| 0x480935 | Bremspedalwegsensor - Plausibilisierung Signalleitung 2 | 0 | - |
| 0x480936 | Hydraulik Boost - Vakuum zu niedrig - HBC-Funktion degradiert | 0 | - |
| 0x48097D | Verteilergetriebe - Kupplungsposition offen, nur Heckantrieb | 1 | - |
| 0x48099D | Codierung - Falsches Steuergerät (Anzahl Drucksensoren) | 0 | - |
| 0x4809EA | RDCi Radelektronik Position unbekannt defekt | 0 | - |
| 0x4809EB | RDCi Radelektronik (Position unbekannt) kein Empfang | 0 | - |
| 0x480A01 | Notbremse - Wegen unplausibler Regelung: Blockieren der Raeder wird moeglich gemacht, Notbremse ausgelöst | 0 | - |
| 0x480A11 | Bremsbelagsensor - Vorderachse - Verschleissgrenze erreicht | 0 | - |
| 0x480A12 | Bremsbelagsensor - Hinterachse - Verschleissgrenze erreicht | 0 | - |
| 0x480A17 | Fahrleistungsreduzierung - Fahrleistungsreduzierung durch DSC-Befehl aktiv - Infoeintrag - | 0 | - |
| 0x480A46 | RDCi Gateway oder Antennen Fehler | 1 | - |
| 0x480A47 | FUSI - Übergang aktiv | 1 | - |
| 0x480A5B | Elektrohydraulischer Bremsaktuator - gemessene Drehzahl trotz Ansteuerung zu gering - RFP laeuft nicht | 0 | - |
| 0x480A80 | Codierung - ABS Rückfallebene mit EMF Funktion aktiv | 0 | - |
| 0x480A81 | Codierung - ABS Rückfallebene ohne EMF Funktion aktiv | 0 | - |
| 0x480A99 | Ansteuerung Bremse Druckunterschied VA/HA zu hoch | 0 | - |
| 0x480A9B | Fahrzeugregler Dauerregelung | 0 | - |
| 0x480A9C | Raddrehzahlsensor - Vorn Links - Falscher Sensortyp | 0 | - |
| 0x480AA1 | ECBA - Plausi Fahrzeugverzögerung | 1 | - |
| 0x480AA3 | Raddrehzahlsensor - Vorn Rechts - Falscher Sensortyp | 0 | - |
| 0x480AAA | Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 0 | - |
| 0x480AB1 | Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 0 | - |
| 0x480AC0 | Codierung - Falsche Antriebsvariante Allrad | 0 | - |
| 0x480AC1 | Codierung - Falsche Antriebsvariante Hybrid | 0 | - |
| 0x480AC8 | Entwicklungsphase Allgemeiner Fehler | 0 | - |
| 0x480ACA | EPBi Initialisierung nach Montagemodus nicht durchgeführt | 0 | - |
| 0x480ACE | eRFS Codierdaten inkonsistent | 1 | - |
| 0x480AD7 | Funktion Rekuperation über Codierung deaktiviert | 0 | - |
| 0x480AD8 | Funktion LMV über Codierung deaktiviert | 0 | - |
| 0x480ADA | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung - Kurzschluss nach Plus | 0 | - |
| 0x480ADB | Bremspedalwegsensor - Plausibilisierung - Versorgungsleitung - Kurzschluss nach Masse | 0 | - |
| 0x480ADC | Automatik Hold/SSM - Rollüberwachung | 0 | - |
| 0x480ADD | Systemlastzähler - Verschleißgrenze erreicht | 0 | - |
| 0x480ADE | Systemlastzähler - Verschleißwarngrenze erreicht | 0 | - |
| 0x480ADF | Steuergerät intern - Division-durch-Null Exception | 0 | - |
| 0x480AE0 | Steuergerät intern - Floating-Point-Unit Exception | 0 | - |
| 0x480AF4 | Bremskraftverstärker - Leckage | 0 | - |
| 0x480AFF | Steuergerät intern - Security Zugriff geöffnet | 0 | - |
| 0x480B2C | FUSI - Funktions-Kontrollalgorithmus ausgelöst | 0 | - |
| 0x480B2E | Codierung - Unplausible PBC-Daten | 0 | - |
| 0xD3441F | Flexray:  Physikalischer Busfehler | 0 | - |
| 0xD34420 | FLEXRAY Controller Error | 0 | - |
| 0xD34487 | FLEXRAY StartUpFailed | 0 | - |
| 0xD34BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD35418 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Timeout | 1 | - |
| 0xD35419 | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Checksumme | 1 | - |
| 0xD3541A | Botschaftsfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Alive | 1 | - |
| 0xD35428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) - Timeout | 1 | - |
| 0xD3542C | Signalfehler (Außentemperatur, ID: A_TEMP) - Ungültig | 1 | - |
| 0xD35442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) - Ungültig | 1 | - |
| 0xD35445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Checksumme | 1 | - |
| 0xD3544E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Ungültig | 1 | - |
| 0xD35450 | Signalfehler (Blinken, ID: BLINKEN) - Ungültig | 1 | - |
| 0xD35451 | Botschaftsfehler (Blinken, ID: BLINKEN) - Timeout | 1 | - |
| 0xD35452 | Botschaftsfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Timeout | 1 | - |
| 0xD35456 | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) - Ungültig | 1 | - |
| 0xD35476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Ungültig | 1 | - |
| 0xD35482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) - Timeout | 1 | - |
| 0xD35483 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Checksumme | 1 | - |
| 0xD35484 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Alive | 1 | - |
| 0xD35495 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Checksumme | 1 | - |
| 0xD35496 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Alive | 1 | - |
| 0xD354AA | Signalfehler (Fehlerspeicher Bordnetz Spannung, ID: ERRM_BN_U) - Ungültig | 1 | - |
| 0xD354B6 | Signalfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Ungültig | 1 | - |
| 0xD354E5 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Checksumme | 1 | - |
| 0xD354F2 | Botschaftsfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Timeout | 1 | - |
| 0xD354F6 | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) - Ungültig | 1 | - |
| 0xD354FF | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Checksumme | 1 | - |
| 0xD35512 | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Ungültig | 1 | - |
| 0xD35513 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Alive | 1 | - |
| 0xD35532 | Botschaftsfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Timeout | 1 | - |
| 0xD35536 | Signalfehler (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) - Ungültig | 1 | - |
| 0xD35565 | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Alive | 1 | - |
| 0xD35570 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Timeout | 1 | - |
| 0xD35571 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Checksumme | 1 | - |
| 0xD35572 | Botschaftsfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Alive | 1 | - |
| 0xD3557A | Signalfehler (Radmoment Antrieb 4, ID: WMOM_DRV_4) - Ungültig | 1 | - |
| 0xD35586 | Botschaftsfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Timeout | 1 | - |
| 0xD3558A | Signalfehler (Regensensor-Wischergeschwindigkeit, ID: WISCHERGESCHWINDIGKEIT) - Ungültig | 1 | - |
| 0xD355A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) - Timeout | 1 | - |
| 0xD355A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) - Ungültig | 1 | - |
| 0xD355AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Timeout | 1 | - |
| 0xD355B0 | Signalfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) - Ungültig | 1 | - |
| 0xD355B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Timeout | 1 | - |
| 0xD355B8 | Signalfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) - Ungültig | 1 | - |
| 0xD355C4 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Timeout | 1 | - |
| 0xD355C5 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Checksumme | 1 | - |
| 0xD355C6 | Botschaftsfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Alive | 1 | - |
| 0xD355C8 | Signalfehler (Status Elektrische-Lenkung Vorderachse, ID: ST_EST) - Ungültig | 1 | - |
| 0xD355CA | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Timeout | 1 | - |
| 0xD355CB | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Checksumme | 1 | - |
| 0xD355CC | Botschaftsfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Alive | 1 | - |
| 0xD355D0 | Signalfehler (Status Lenkung Hinterachse, ID: ST_STE_BAX) - Ungültig | 1 | - |
| 0xD355D5 | Botschaftsfehler (Höhenstand Fahrzeug 1, ID: HGLV_VEH_1) Alive | 1 | - |
| 0xD355F8 | Signalfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Ungültig | 1 | - |
| 0xD35607 | Botschaftsfehler (Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) Alive | 1 | - |
| 0xD3560C | Botschaftsfehler (Zustand Fahrzeug, ID: CON_VEH) Timeout | 1 | - |
| 0xD3562B | Botschaftsfehler (Energie Lenkung Hinterachse, ID: ENERG_STE_BAX) Timeout | 1 | - |
| 0xD3562C | Botschaftsfehler (Energie Vertikal Dynamik EHC, ID: ENERG_VE_DYNMC_EHC) Timeout | 1 | - |
| 0xD3562D | Botschaftsfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Timeout | 1 | - |
| 0xD3562F | Botschaftsfehler (Höhenstand Fahrzeug 1, ID: HGLV_VEH_1) Timeout | 1 | - |
| 0xD35646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Timeout | 1 | - |
| 0xD35647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Checksumme | 1 | - |
| 0xD35648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Alive | 1 | - |
| 0xD3564C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) - Ungültig | 1 | - |
| 0xD3565E | Signalfehler (Zustand Fahrzeug, ID: CON_VEH) Ungültig | 1 | - |
| 0xD35664 | Botschaftsfehler (Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) Checksumme | 1 | - |
| 0xD35675 | Botschaftsfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Checksumme | 1 | - |
| 0xD35676 | Botschaftsfehler (Soll Fahrvektor, ID: TAR_DVE) Checksumme | 1 | - |
| 0xD3567D | Botschaftsfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Timeout | 1 | - |
| 0xD3567E | Botschaftsfehler (Fahrerlebnis Modus, ID: DXP_MOD) - Timeout | 1 | - |
| 0xD3567F | Botschaftsfehler (Daten Elektrische-Lenkung, ID: DT_EST) Timeout | 1 | - |
| 0xD35683 | Botschaftsfehler (Konfiguration EPS, ID: SU_EPS) - Timeout | 1 | - |
| 0xD35693 | Botschaftsfehler (Daten Antriebsstrang 1, ID: DT_PT_1) Timeout | 1 | - |
| 0xD35694 | Botschaftsfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Timeout | 1 | - |
| 0xD35697 | Botschaftsfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Timeout | 1 | - |
| 0xD3569A | Botschaftsfehle (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Timeout | 1 | - |
| 0xD3569B | Botschaftsfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Timeout | 1 | - |
| 0xD356A0 | Botschaftsfehler (Status Crash, ID: ST_CR) Checksumme | 1 | - |
| 0xD356AA | Botschaftsfehler (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) - Timeout | 1 | - |
| 0xD356B4 | Botschaftsfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Timeout | 1 | - |
| 0xD356BF | Botschaftsfehler (Konfiguration EPS, ID: SU_EPS) - Checksumme | 1 | - |
| 0xD356D3 | Botschaftsfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Checksumme | 1 | - |
| 0xD356E4 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Timeout | 1 | - |
| 0xD356E5 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Checksumme | 1 | - |
| 0xD356E6 | Botschaftsfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Alive | 1 | - |
| 0xD356F5 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Timeout | 1 | - |
| 0xD356F6 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) - Alive | 1 | - |
| 0xD356FC | Botschaftsfehler (Daten Elektrische-Lenkung, ID: DT_EST) Checksumme | 1 | - |
| 0xD356FD | Botschaftsfehler (Status Kühlklappe Bremse Vorderachse, ID: ST_COOL_FLAP_BRK_FTAX) Timeout | 1 | - |
| 0xD35713 | Signalfehler (Einheiten BN2020, ID: EINHEITEN_BN2020) Ungültig | 1 | - |
| 0xD35714 | Signalfehler (Fahrerlebnis Modus, ID: DXP_MOD) - Ungültig | 1 | - |
| 0xD35719 | Signalfehler (Konfiguration EPS, ID: SU_EPS) - Ungültig | 1 | - |
| 0xD35720 | Botschaftsfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Alive | 1 | - |
| 0xD3572E | Botschaftsfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Alive | 1 | - |
| 0xD35732 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Timeout | 1 | - |
| 0xD35733 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Checksumme | 1 | - |
| 0xD35734 | Botschaftsfehler (Bedienung Tempomat, ID: OP_CCTR) - Alive | 1 | - |
| 0xD35736 | Signalfehler (Bedienung Tempomat, ID: OP_CCTR) - Ungültig | 1 | - |
| 0xD35744 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Timeout | 1 | - |
| 0xD35745 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Checksumme | 1 | - |
| 0xD35746 | Botschaftsfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Alive | 1 | - |
| 0xD3575B | Botschaftsfehler (Daten Elektrische-Lenkung, ID: DT_EST) Alive | 1 | - |
| 0xD35767 | Botschaftsfehler (Konfiguration EPS, ID: SU_EPS) - Alive | 1 | - |
| 0xD35775 | Signalfehler (Daten Antriebsstrang 1, ID: DT_PT_1) Ungültig | 1 | - |
| 0xD35777 | Signalfehler (RDC Daten Paket 1, ID: RDC_DT_PCKG_1) - Ungültig | 1 | - |
| 0xD3577A | Signalfehler (Status System Parken 2, ID: ST_SY_PKG_2) - Ungültig | 1 | - |
| 0xD35780 | Signalfehler (Daten Getriebestrang Antrieb, ID: DT_GRDT_DRV) - Ungültig | 1 | - |
| 0xD3578B | Signalfehler (Navigationsgraph Karten Daten, ID: NAV_GRAPH_MAPDATA) - Ungültig | 1 | - |
| 0xD3578F | Signalfehler (Status Start Leistung Antrieb, ID: ST_STA_PWR_DRV) - Ungültig | 1 | - |
| 0xD35799 | Signalfehler (Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Ungültig | 1 | - |
| 0xD3579A | Signalfehler (Systemstatus Elektrisches Fahrzeug Antrieb, ID: SYS_ST_EVEH_DRV) - Ungültig | 1 | - |
| 0xD3579B | Signalfehler (Navigationsgraph Fahrspur, ID: NAV_GRAPH_LNE) - Ungültig | 1 | - |
| 0xD3579E | Signalfehler (Daten Elektrische-Lenkung, ID: DT_EST) Ungültig | 1 | - |
| 0xD357A5 | Signalfehler (Status Kühlklappe Bremse Vorderachse, ID: ST_COOL_FLAP_BRK_FTAX) Ungültig | 1 | - |
| 0xD357EA | Botschaftsfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) - Timeout | 1 | - |
| 0xD35811 | Botschaftsfehler (Navigation System Information, ID: NAV_SYS_INF) - Timeout | 1 | - |
| 0xD35815 | Signalfehler (Navigation System Information, ID: NAV_SYS_INF) - Ungültig | 1 | - |
| 0xD3581F | Signalfehler (Navigationsgraph, ID: NAV_GRAPH) - Ungültig | 1 | - |
| 0xD3583F | Signalfehler (Navigationsgraph Geschwindigkeit, ID: NAV_GRAPH_V) - Ungültig | 1 | - |
| 0xD3586B | Botschaftsfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Timeout | 1 | - |
| 0xD3586D | Botschaftsfehler (Soll Fahrvektor, ID: TAR_DVE) Timeout | 1 | - |
| 0xD35874 | Signalfehler (Energie Lenkung Hinterachse, ID: ENERG_STE_BAX) Ungültig | 1 | - |
| 0xD35875 | Signalfehler (Energie Vertikal Dynamik EHC, ID: ENERG_VE_DYNMC_EHC) Ungültig | 1 | - |
| 0xD35876 | Signalfehler (Erkennung Verkehrszeichen, ID: RCOG_TRSG) Ungültig | 1 | - |
| 0xD35878 | Signalfehler (Höhenstand Fahrzeug 1, ID: HGLV_VEH_1) Ungültig | 1 | - |
| 0xD358B5 | Botschaftsfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Timeout | 1 | - |
| 0xD358B8 | Botschaftsfehler (Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) Timeout | 1 | - |
| 0xD358B9 | Signalfehler (Status Anzeige Kombi, ID: ST_DISP_KI) - Ungültig | 1 | - |
| 0xD358BB | Botschaftsfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) - Timeout | 1 | - |
| 0xD358BE | Botschaftsfehler (Status Crash, ID: ST_CR) Timeout | 1 | - |
| 0xD358BF | Signalfehler (Status Anzeige Warnung Fahrspurwechsel, ID: ST_DISP_WARN_LNCH) - Ungültig | 1 | - |
| 0xD358E1 | Botschaftsfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) - Timeout | 1 | - |
| 0xD358E6 | Botschaftsfehler (Status Parkassistent, ID: ST_PMA) - Timeout | 1 | - |
| 0xD358F8 | Signalfehler (Status Verteilung Längsmoment Vorderachse Hinterachse, ID: ST_REPAT_XTRQ_FTAX_BAX) - Ungültig | 1 | - |
| 0xD35901 | Botschaftsfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Timeout | 1 | - |
| 0xD35903 | Signalfehler (Status Vibration Lenkrad, ID: ST_VIB_STW) - Ungültig | 1 | - |
| 0xD35914 | Signalfehler (Synchronisation Navigationsgraph, ID: NAV_GRAPH_SYNC) - Ungültig | 1 | - |
| 0xD35922 | Botschaftsfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Timeout | 1 | - |
| 0xD35926 | Signalfehler (Übereinstimmung Navigationsgraph, ID: NAV_GRAPH_MATCH) - Ungültig | 1 | - |
| 0xD3592E | Signalfehler (Sensorclusterdaten Rohwerte 2, ID: SEN_CLU_DT_RAW_2) Ungültig | 1 | - |
| 0xD35931 | Signalfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Ungültig | 1 | - |
| 0xD35932 | Botschaftsfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Timeout | 1 | - |
| 0xD35933 | Signalfehler (Soll Fahrvektor, ID: TAR_DVE) Ungültig | 1 | - |
| 0xD35936 | Signalfehler (Uhrzeit/Datum, ID: UHRZEIT_DATUM) - Ungültig | 1 | - |
| 0xD35938 | Signalfehler (Status Crash, ID: ST_CR) Ungültig | 1 | - |
| 0xD3593C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Timeout | 1 | - |
| 0xD3593D | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Checksumme | 1 | - |
| 0xD3593E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Alive | 1 | - |
| 0xD35940 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) - Ungültig | 1 | - |
| 0xD3594C | Signalfehler (Status Bordnetz Verbraucher Steuerung, ID: ST_BN_COS_CTR) Ungültig | 1 | - |
| 0xD35959 | Signalfehler (Status RCP, ID: ST_RCP) Ungültig | 1 | - |
| 0xD35966 | Signalfehler (Status Verbrennungsmotor, ID: ST_CENG) Ungültig | 1 | - |
| 0xD3596F | Botschaftsfehler (Soll Fahrvektor Parkassistent, ID: TAR_DVE_PMA) Alive | 1 | - |
| 0xD35970 | Botschaftsfehler (Soll Fahrvektor, ID: TAR_DVE) Alive | 1 | - |
| 0xD35973 | Botschaftsfehler (Status Crash, ID: ST_CR) Alive | 1 | - |
| 0xD3598E | Botschaftsfehler (Status RCP, ID: ST_RCP) Alive | 1 | - |
| 0xD35996 | Signalfehler (Status Parkassistent, ID: ST_PMA) - Ungültig | 1 | - |
| 0xD359A6 | Botschaftsfehler (Status RCP, ID: ST_RCP) Checksumme | 1 | - |
| 0xD359AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) - Ungültig | 1 | - |
| 0xD359B5 | Botschaftsfehler (Status Bordnetz Verbraucher Steuerung, ID: ST_BN_COS_CTR) Timeout | 1 | - |
| 0xD359B7 | Botschaftsfehler (Dimmung, ID: DIMMUNG) - Timeout | 1 | - |
| 0xD359B9 | Signalfehler (Dimmung, ID: DIMMUNG) - Ungültig | 1 | - |
| 0xD359BF | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Timeout | 1 | - |
| 0xD359C0 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Checksumme | 1 | - |
| 0xD359C1 | Botschaftsfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Alive | 1 | - |
| 0xD359C3 | Signalfehler (Ist Lenkmoment Fahrer Stellglied, ID: AVL_STMOM_DV_ACT) - Ungültig | 1 | - |
| 0xD359C8 | Botschaftsfehler (Status RCP, ID: ST_RCP) Timeout | 1 | - |
| 0xD359CC | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Timeout | 1 | - |
| 0xD359DF | Botschaftsfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Timeout | 1 | - |
| 0xD35A4B | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Alive | 1 | - |
| 0xD35A80 | Botschaftsfehler (Status Verbrennungsmotor, ID: ST_CENG) Checksumme | 1 | - |
| 0xD35AE9 | Signalfehler (Relativzeit BN2020, ID: RELATIVZEIT) - Ungültig | 1 | - |
| 0xD35B26 | Botschaftsfehler (Ist Position EPS, ID: AVL_PO_EPS) - Timeout | 1 | - |
| 0xD35B27 | Botschaftsfehler (Ist Position EPS, ID: AVL_PO_EPS) - Checksumme | 1 | - |
| 0xD35B28 | Botschaftsfehler (Ist Position EPS, ID: AVL_PO_EPS) - Alive | 1 | - |
| 0xD35B2A | Signalfehler (Ist Position EPS, ID: AVL_PO_EPS) - Ungültig | 1 | - |
| 0xD35C0C | Botschaftsfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Timeout | 1 | - |
| 0xD35C0D | Botschaftsfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Checksumme | 1 | - |
| 0xD35C0E | Botschaftsfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Alive | 1 | - |
| 0xD35C60 | Botschaftsfehler (Anforderung Bremsmoment FAS SP2015, ID: RQ_BRTORQ_DRS_SP2015) Timeout | 1 | - |
| 0xD35C62 | Botschaftsfehler (Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) Timeout | 1 | - |
| 0xD35C66 | Botschaftsfehler (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) Timeout | 1 | - |
| 0xD35C69 | Botschaftsfehler (Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) Timeout | 1 | - |
| 0xD35C6A | Botschaftsfehler (Konfiguration Stellhebel Anzeige Fahrerlebnis, ID: SU_CLE_DISP_DXP) Timeout | 1 | - |
| 0xD35C6B | Botschaftsfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Timeout | 1 | - |
| 0xD35C6E | Botschaftsfehler (Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) Timeout | 1 | - |
| 0xD35C70 | Botschaftsfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Timeout | 1 | - |
| 0xD35C71 | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Timeout | 1 | - |
| 0xD35C72 | Botschaftsfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Timeout | 1 | - |
| 0xD35C74 | Botschaftsfehler (Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) Timeout | 1 | - |
| 0xD35C78 | Botschaftsfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Timeout | 1 | - |
| 0xD35C7D | Botschaftsfehler (Steuerung Licht Außen, ID: CTR_LP_EX) Timeout | 1 | - |
| 0xD35C7E | Botschaftsfehler (Vorgabe Parametrisierung FAS SP2015, ID: SPEC_PRMSN_DRS_SP2015) Timeout | 1 | - |
| 0xD35C7F | Botschaftsfehler (Wankmoment Fahrzeug SP2015, ID: MX_VEH_SP2015) Timeout | 1 | - |
| 0xD35C98 | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Timeout | 1 | - |
| 0xD35C99 | Botschaftsfehler (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) Timeout | 1 | - |
| 0xD35CA5 | Botschaftsfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Timeout | 1 | - |
| 0xD35CA8 | Botschaftsfehler (Status Schlüssel Position, ID: ST_KEY_PO) - Timeout | 1 | - |
| 0xD35CAE | Botschaftsfehler (Daten Funktion, ID: DT_FN_DAC) Timeout | 1 | - |
| 0xD35CB4 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Timeout | 1 | - |
| 0xD35CB6 | Botschaftsfehler (Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) Timeout | 1 | - |
| 0xD35CBA | Botschaftsfehler (Status_EPB_LIN, ID: ST_EPB_LIN) Timeout | 1 | - |
| 0xD35CBD | Botschaftsfehler (Status M-Drive 2, ID: ST_MDRV_2) Timeout | 1 | - |
| 0xD35CBF | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Timeout | 1 | - |
| 0xD35CC8 | Botschaftsfehler (Energie Vertikal Dynamik ARS, ID: ENERG_VE_DYNMC_ARS) Timeout | 1 | - |
| 0xD35CCA | Botschaftsfehler (Fehler_Status_LIN, ID: ERR_ST_EPB_LIN) Timeout | 1 | - |
| 0xD35CD0 | Botschaftsfehler (Status Akustikanforderungen, ID: ST_AURQ) Timeout | 1 | - |
| 0xD35CD7 | Botschaftsfehler (Radar Frontraumüberwachung 1, ID: RADA_HDWOBS_1) Timeout | 1 | - |
| 0xD35CD8 | Botschaftsfehler (Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) Timeout | 1 | - |
| 0xD35CDC | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) Timeout | 1 | - |
| 0xD35CDD | Botschaftsfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Timeout | 1 | - |
| 0xD35CE0 | Botschaftsfehler (Anforderung Bremsmoment FAS SP2015, ID: RQ_BRTORQ_DRS_SP2015) Alive | 1 | - |
| 0xD35CE6 | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Alive | 1 | - |
| 0xD35CE9 | Botschaftsfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Alive | 1 | - |
| 0xD35CEA | Botschaftsfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Alive | 1 | - |
| 0xD35CF0 | Botschaftsfehler (Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) Alive | 1 | - |
| 0xD35CF6 | Botschaftsfehler (Vorgabe Parametrisierung FAS SP2015, ID: SPEC_PRMSN_DRS_SP2015) Alive | 1 | - |
| 0xD35CFB | Botschaftsfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Alive | 1 | - |
| 0xD35D07 | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Alive | 1 | - |
| 0xD35D08 | Botschaftsfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Alive | 1 | - |
| 0xD35D19 | Botschaftsfehler (Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) Alive | 1 | - |
| 0xD35D1B | Botschaftsfehler (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) Alive | 1 | - |
| 0xD35D1C | Botschaftsfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Alive | 1 | - |
| 0xD35D20 | Botschaftsfehler (Status Schlüssel Position, ID: ST_KEY_PO) - Alive | 1 | - |
| 0xD35D25 | Botschaftsfehler (Fehler_Status_LIN, ID: ERR_ST_EPB_LIN) Alive | 1 | - |
| 0xD35D2E | Botschaftsfehler (Status M-Drive 2, ID: ST_MDRV_2) Alive | 1 | - |
| 0xD35D2F | Botschaftsfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Alive | 1 | - |
| 0xD35D34 | Botschaftsfehler (Radar Frontraumüberwachung 2, ID: RADA_HDWOBS_2) Alive | 1 | - |
| 0xD35D37 | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) Alive | 1 | - |
| 0xD35D40 | Botschaftsfehler (Radar Frontraumüberwachung 1, ID: RADA_HDWOBS_1) Alive | 1 | - |
| 0xD35D43 | Botschaftsfehler (Status_EPB_LIN, ID: ST_EPB_LIN) Alive | 1 | - |
| 0xD35D44 | Botschaftsfehler (Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) Alive | 1 | - |
| 0xD35D45 | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Alive | 1 | - |
| 0xD35D4A | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Alive | 1 | - |
| 0xD35D9C | Signalfehler (Anforderung Bremsmoment FAS SP2015, ID: RQ_BRTORQ_DRS_SP2015) Ungültig | 1 | - |
| 0xD35DA4 | Signalfehler (Konfiguration Stellhebel Antrieb Fahrerlebnis, ID: SU_CLE_DRV_DXP) Ungültig | 1 | - |
| 0xD35DA7 | Signalfehler (Vorgabe Parametrisierung FAS SP2015, ID: SPEC_PRMSN_DRS_SP2015) Ungültig | 1 | - |
| 0xD35DA9 | Signalfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Ungültig | 1 | - |
| 0xD35DBC | Signalfehler (Night-Vision Frontraumüberwachung, ID: NIVI_HDWOBS) Ungültig | 1 | - |
| 0xD35DC0 | Signalfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Ungültig | 1 | - |
| 0xD35DC1 | Signalfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Ungültig | 1 | - |
| 0xD35DC3 | Signalfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Ungültig | 1 | - |
| 0xD35DC7 | Signalfehler (Fehler_Status_LIN, ID: ERR_ST_EPB_LIN) Ungültig | 1 | - |
| 0xD35DC8 | Signalfehler (Radar Frontraumüberwachung 2, ID: RADA_HDWOBS_2) Ungültig | 1 | - |
| 0xD35DCA | Signalfehler (Konfiguration Stellhebel Anzeige Fahrerlebnis, ID: SU_CLE_DISP_DXP) Ungültig | 1 | - |
| 0xD35DCE | Signalfehler (Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) Ungültig | 1 | - |
| 0xD35DCF | Signalfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Ungültig | 1 | - |
| 0xD35DD0 | Signalfehler (Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) Ungültig | 1 | - |
| 0xD35DD2 | Signalfehler (Daten Funktion, ID: DT_FN_DAC) Ungültig | 1 | - |
| 0xD35DD5 | Signalfehler (Steuerung Licht Außen, ID: CTR_LP_EX) Ungültig | 1 | - |
| 0xD35DD8 | Signalfehler (Nav-Graph 2 Route Offset, ID: NAVGRPH_2_RT_OFFS) Ungültig | 1 | - |
| 0xD35DDD | Signalfehler (Wankmoment Fahrzeug SP2015, ID: MX_VEH_SP2015) Ungültig | 1 | - |
| 0xD35DDE | Signalfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Ungültig | 1 | - |
| 0xD35DDF | Signalfehler (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) Ungültig | 1 | - |
| 0xD35DE0 | Signalfehler (Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) Ungültig | 1 | - |
| 0xD35DE2 | Signalfehler (Radar Frontraumüberwachung 1, ID: RADA_HDWOBS_1) Ungültig | 1 | - |
| 0xD35DE8 | Signalfehler (Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) Ungültig | 1 | - |
| 0xD35E2C | Botschaftsfehler (Anforderung Bremsmoment FAS SP2015, ID: RQ_BRTORQ_DRS_SP2015) Checksumme | 1 | - |
| 0xD35E32 | Botschaftsfehler (Momentenpotential Antriebsstrang, ID: TPO_PT) Checksumme | 1 | - |
| 0xD35E36 | Botschaftsfehler (Radmoment Antriebsstrang Ist, ID: WMOM_PT_AVL) Checksumme | 1 | - |
| 0xD35E43 | Botschaftsfehler (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) Checksumme | 1 | - |
| 0xD35E4D | Botschaftsfehler (Radmoment Antrieb 9, ID: WMOM_DRV_9) Checksumme | 1 | - |
| 0xD35E4F | Botschaftsfehler (Radmoment Elektrisch Fahren, ID: WMOM_EL_DRVG) Checksumme | 1 | - |
| 0xD35E52 | Botschaftsfehler (Soll Änderung Fahrvektor Parkassistent, ID: TAR_CHNG_DVE_PMA) Checksumme | 1 | - |
| 0xD35E56 | Botschaftsfehler (Anteil Wankmoment Stabilisierung SP2015, ID: QTA_MX_STAB_SP2015) Checksumme | 1 | - |
| 0xD35E5A | Botschaftsfehler (Vorgabe Parametrisierung FAS SP2015, ID: SPEC_PRMSN_DRS_SP2015) Checksumme | 1 | - |
| 0xD35E5C | Botschaftsfehler (Status_EPB_LIN, ID: ST_EPB_LIN) Checksumme | 1 | - |
| 0xD35E5F | Botschaftsfehler (Status Anzeige Fahrerassistenzsystem, ID: ST_DISP_DRASY) Checksumme | 1 | - |
| 0xD35E67 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Checksumme | 1 | - |
| 0xD35E68 | Botschaftsfehler (Fehler_Status_LIN, ID: ERR_ST_EPB_LIN) Checksumme | 1 | - |
| 0xD35E6A | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Checksumme | 1 | - |
| 0xD35E73 | Botschaftsfehler (Radar Frontraumüberwachung 2, ID: RADA_HDWOBS_2) Timeout | 1 | - |
| 0xD35E8D | Botschaftsfehler (Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) Timeout | 1 | - |
| 0xD35E96 | Botschaftsfehler (Soll Haptik Warnung Querführungsassistenz, ID: TAR_FEEL_WARN_LGA) Timeout | 1 | - |
| 0xD35F03 | Signalfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Ungültig | 1 | - |
| 0xD35F05 | Signalfehler (Status Schlüssel Position, ID: ST_KEY_PO) - Ungültig | 1 | - |
| 0xD35F09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Ungültig | 1 | - |
| 0xD35F0B | Signalfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Ungültig | 1 | - |
| 0xD35F0C | Signalfehler (Status Akustikanforderungen, ID: ST_AURQ) Ungültig | 1 | - |
| 0xD35F0D | Signalfehler (Energie Vertikal Dynamik ARS, ID: ENERG_VE_DYNMC_ARS) Ungültig | 1 | - |
| 0xD35F10 | Signalfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) Ungültig | 1 | - |
| 0xD35F14 | Signalfehler (Status M-Drive 2, ID: ST_MDRV_2) Ungültig | 1 | - |
| 0xD35F17 | Signalfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Ungültig | 1 | - |
| 0xD35F2D | Signalfehler (Soll Haptik Warnung Querführungsassistenz, ID: TAR_FEEL_WARN_LGA) Ungültig | 1 | - |
| 0xD35F33 | Signalfehler (Soll Haptik Warnung Fahrspurverlassen, ID: TAR_FEEL_WARN_LNDP) Ungültig | 1 | - |
| 0xD35F3A | D-OBD 1 - ICM oder ACSM - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xD35F3B | D-OBD 1 - ICM oder ACSM - OBD-Diagnosestatusbotschaft Timeout | 1 | - |
| 0xD35F3C | D-OBD 1 - ICM oder ACSM - Zähler Alive | 1 | - |
| 0xD35F3D | D-OBD 2 - LMV - Zähler Alive | 1 | - |
| 0xD35F3E | D-OBD 2 - LMV - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xD35F3F | D-OBD 2 - LMV - OBD-Diagnosestatusbotschaft Timeout | 1 | - |
| 0xD35F40 | D-OBD 3 - EPS - Zähler Alive | 1 | - |
| 0xD35F41 | D-OBD 3 - EPS - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xD35F42 | D-OBD 3 - EPS - OBD-Diagnosestatusbotschaft Timeout | 1 | - |
| 0xD35F47 | D-OBD 1 - ICM oder ACSM - CVN und/oder CALID unplausibel | 1 | - |
| 0xD35F48 | D-OBD 2 - LMV - CVN und/oder CALID unplausibel | 1 | - |
| 0xD35F4D | D-OBD 3 - EPS - CVN und/oder CALID unplausibel | 1 | - |
| 0xD35F5A | D-OBD 5 - HSR - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xD35F5B | D-OBD 5 - HSR - OBD-Diagnosestatusbotschaft Timeout | 1 | - |
| 0xD35F5C | D-OBD 5 - HSR - Zähler Alive | 1 | - |
| 0xD35F5D | D-OBD 5 - HSR - CVN und/oder CALID unplausibel | 1 | - |
| 0xD35F7D | Botschaftsfehler (Status Heckspoiler BN2020, ID: ST_RSP_BN2020) Checksumme | 1 | - |
| 0xD35F80 | Botschaftsfehler (Status Schlüssel Position, ID: ST_KEY_PO) - Checksumme | 1 | - |
| 0xD35F8B | Botschaftsfehler (Radar Frontraumüberwachung 2, ID: RADA_HDWOBS_2) Checksumme | 1 | - |
| 0xD35F8C | Botschaftsfehler (Radar Frontraumüberwachung 1, ID: RADA_HDWOBS_1) Checksumme | 1 | - |
| 0xD35F8D | Botschaftsfehler (Kamera Frontraumüberwachung 2, ID: CAM_HDWOBS_2) Checksumme | 1 | - |
| 0xD35F90 | Botschaftsfehler (Anforderung Fahrerassistenz Komfort, ID: RQ_FAS_CF) Checksumme | 1 | - |
| 0xD35F91 | Botschaftsfehler (Status Niveauregulierung Fahrzeug 2, ID: ST_LCS_VEH_2) Checksumme | 1 | - |
| 0xD35F96 | Botschaftsfehler (Coach-Tür Begrenzung Geschwindigkeit, ID: CODO_LIM_V) Checksumme | 1 | - |
| 0xD35F9A | Botschaftsfehler (Ist Quermomentenverteilung Hinterachse, ID: AVL_LTRQD_BAX) Checksumme | 1 | - |
| 0xD36500 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Timeout | 1 | - |
| 0xD36501 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Checksumme | 1 | - |
| 0xD36502 | Botschaftsfehler (xDrive Stellglied Information, ID: XDRV_ACT_INFO) - Alive | 1 | - |
| 0xD3650C | Botschaftsfehler (Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) - Timeout | 1 | - |
| 0xD3650D | Botschaftsfehler (Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) - Checksumme | 1 | - |
| 0xD3650E | Botschaftsfehler (Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) - Alive | 1 | - |
| 0xD3650F | Signalfehler (Sensorclusterdaten Rohwerte, ID: SEN_CLU_DT_RAW) - Ungültig | 1 | - |
| 0xD3651D | Signalfehler (OBD__Diagnose OBD Motor, ID: DIAG_OBD_ENG) - Ungültig | 1 | - |
| 0xD36C24 | Signalfehler (Ist Kraft Zahnstange, ID: AVL_FORC_GRD) - Ungültig | 1 | - |
| 0xD36C81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) - Ungültig | 1 | - |
| 0xD36D31 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Timeout | 1 | - |
| 0xD36D33 | Botschaftsfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Alive | 1 | - |
| 0xD36D3A | Signalfehler (Kamera Frontraumüberwachung, ID: CAM_HDWOBS) - Ungültig | 1 | - |
| 0xD36D43 | Botschaftsfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Timeout | 1 | - |
| 0xD36D45 | Botschaftsfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Checksumme | 1 | - |
| 0xD36D46 | Botschaftsfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Alive | 1 | - |
| 0xD36D49 | Signalfehler (Sensorclusterdaten Erweitert Rohwerte, ID: SEN_CLU_DT_EXT_RAW ) - Ungültig | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | AX_KORR - Längsbeschleunigung fehlerhaft | 0-n | High | 0x00000001 | EINZELFEHLER_BIT | - | - | - |
| 0x0002 | AX_KORR - Längsneigung fehlerhaft | 0-n | High | 0x00000002 | EINZELFEHLER_BIT | - | - | - |
| 0x0003 | STOP - Geschwindigkeit fehlerhaft | 0-n | High | 0x00000004 | EINZELFEHLER_BIT | - | - | - |
| 0x0004 | STOP - Ritzelwinkel fehlerhaft | 0-n | High | 0x00000008 | EINZELFEHLER_BIT | - | - | - |
| 0x0005 | STOP - Fahrtrichtungswunsch fehlerhaft | 0-n | High | 0x00000010 | EINZELFEHLER_BIT | - | - | - |
| 0x0006 | STOP - Istleistung EPS fehlerhaft | 0-n | High | 0x00000020 | EINZELFEHLER_BIT | - | - | - |
| 0x0007 | RETURN - Geschwindigkeit fehlerhaft | 0-n | High | 0x00000040 | EINZELFEHLER_BIT | - | - | - |
| 0x0008 | RETURN - Ritzelwinkel fehlerhaft | 0-n | High | 0x00000080 | EINZELFEHLER_BIT | - | - | - |
| 0x0009 | RETURN - Winkel Fahrpedal fehlerhaft | 0-n | High | 0x00000100 | EINZELFEHLER_BIT | - | - | - |
| 0x000A | RETURN - Längsbeschleunigung fehlerhaft | 0-n | High | 0x00000200 | EINZELFEHLER_BIT | - | - | - |
| 0x000B | EXTRAP_PEL - Istleistung EPS fehlerhaft | 0-n | High | 0x00000400 | EINZELFEHLER_BIT | - | - | - |
| 0x000C | EXTRAP_FZS - Fahrerhandmoment fehlerhaft | 0-n | High | 0x00000800 | EINZELFEHLER_BIT | - | - | - |
| 0x000D | EXTRAP_FZS - Ritzelwinkel fehlerhaft | 0-n | High | 0x00001000 | EINZELFEHLER_BIT | - | - | - |
| 0x000E | EXTRAP_FZS - Zahnstangenkraft fehlerhaft | 0-n | High | 0x00002000 | EINZELFEHLER_BIT | - | - | - |
| 0x000F | FZSREDUC_BRAKE - Bremsmoment VL fehlerhaft | 0-n | High | 0x00004000 | EINZELFEHLER_BIT | - | - | - |
| 0x0010 | FZSREDUC_BRAKE - Bremsmoment VR fehlerhaft | 0-n | High | 0x00008000 | EINZELFEHLER_BIT | - | - | - |
| 0x0011 | FZSREDUC_BRAKE - Status Bremsung fehlerhaft | 0-n | High | 0x00010000 | EINZELFEHLER_BIT | - | - | - |
| 0x0012 | VX - Geschwindigkeit fehlerhaft | 0-n | High | 0x00020000 | EINZELFEHLER_BIT | - | - | - |
| 0x0013 | EXTRAP_FZS - Hub fehlerhaft | 0-n | High | 0x00040000 | EINZELFEHLER_BIT | - | - | - |
| 0x0014 | EXTRAP_FZS - Einheit Position EPS fehlerhaft | 0-n | High | 0x00080000 | EINZELFEHLER_BIT | - | - | - |
| 0x0015 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0016 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0017 | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0018 | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x0019 | Ausfall DSC | 0/1 | High | 0x0001 | - | - | - | - |
| 0x001A | Regeleingriff DSC | 0/1 | High | 0x0002 | - | - | - | - |
| 0x001B | Ausfall emARS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x001C | Ausfall VDC | 0/1 | High | 0x0008 | - | - | - | - |
| 0x001D | Ausfall/Schutz LMV | 0/1 | High | 0x0010 | - | - | - | - |
| 0x001E | Reifendruckverlust | 0/1 | High | 0x0020 | - | - | - | - |
| 0x001F | Ausfall Heckspoiler | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0020 | FAS Wechsel Betriebsart | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0021 | FAS Sperrung Bedienung | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0022 | Bedarf Stabilisierung | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0023 | State of Charge low | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0024 | Care Key Ausschluss DSC-OFF | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0025 | Care Key TRACTION nur bei Anfahren | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0026 | Ausfall EHC | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0027 | Ausfall GSD-Ansteuerung | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0028 | Ausfall LMV-Ansteuerung | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0029 | iBrake | 0/1 | High | 0x01 | - | - | - | - |
| 0x002A | Kamerabasierte Auffahrwarnung (FCW_CCM) | 0/1 | High | 0x02 | - | - | - | - |
| 0x002B | Querverkehrsassistent (QVA) | 0/1 | High | 0x04 | - | - | - | - |
| 0x002C | Präventiver Fußgängerschutz (pFGS) | 0/1 | High | 0x08 | - | - | - | - |
| 0x002D | Night-Vision (NiVi) | 0/1 | High | 0x10 | - | - | - | - |
| 0x002E | Vorfahrtswarner (VFW) | 0/1 | High | 0x20 | - | - | - | - |
| 0x002F | Dummy_Bit_6 | 0/1 | High | 0x40 | - | - | - | - |
| 0x0030 | Dummy_Bit_7 | 0/1 | High | 0x80 | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2801 | STAT_GESCHWINDIGKEIT_SCHWERPUNKT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2802 | STAT_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x2803 | STAT_GIERRATE_SCHWERPUNKT_WERT | °/s | High | signed char | - | 1.0 | 0.77 | 0.0 |
| 0x2804 | STAT_EINGANG_SENSOR_FAHRERLENKWINKEL_WERT | ° | High | unsigned int | - | 1.0 | 23.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2806 | STAT_QUERBESCHLEUNIGUNGSNUTZSIGNAL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2807 | STAT_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2808 | STAT_GIERRATENNUTZSIGNAL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2809 | STAT_SENSOR_GIERRATE_1_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280A | STAT_SENSOR_LAENGSBESCHLEUNIGUNG_1_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280B | STAT_FAHRERLENKWINKEL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280C | STAT_RADLENKWINKEL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280D | STAT_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x280E | STAT_IST_LENKWINKEL_FAHRER_WERT | ° | High | signed char | - | 1.0 | 15.0 | 0.0 |
| 0x280F | STAT_LENKWINKEL_VA_EFFEKTIV_WERT | rad | High | signed char | - | 1.0 | 75.0 | 0.0 |
| 0x2811 | STAT_LAENGSGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2812 | STAT_FAHRZUSTAND_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2813 | STAT_TOLERANZ_AUS_AX_ABGLEICH_WERT | m/s² | High | unsigned int | - | 1.0 | 50.0 | 0.0 |
| 0x2814 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x2815 | STAT_EINGANG_SENSOR_GIERRATE_1_WERT | rad/s | High | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x2816 | STAT_EINGANG_SENSOR_LAENGSBESCHLEUNIGUNG_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x2817 | STAT_LENKWINKEL_FAHRER_TEILAUFBEREITET_WERT | rad | High | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x2818 | STAT_REFERNZGESCHWINDIGKEIT_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2819 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x281A | STAT_EINGANG_SENSOR_GIERRATE_2_WERT | rad/s | High | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x281B | STAT_LENKWINKEL_VA_AKTUATOR_TEILAUFBEREITET_WERT | rad | High | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x281C | STAT_LENKWINKEL_HA_AKTUATOR_TEILAUFBEREITET_WERT | rad | High | signed char | - | 1.0 | 1200.0 | 0.0 |
| 0x281D | STAT_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x281E | STAT_SENSOR_ROLLRATE_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x281F | STAT_EINGANG_SENSOR_ROLLRATE_WERT | rad/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2823 | STAT_EINGANG_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2824 | STAT_KALMANFILTER_SCHWIMMWINKELSCHAETZERR_WERT | HEX | High | signed long | - | - | - | - |
| 0x2825 | STAT_GESAMTSTATUS_SCHWIMMWINKELSCHAETZER_WERT | HEX | High | signed long | - | - | - | - |
| 0x2826 | STAT_INFORMATION_SCHWIMMWINKELSCHAETZER_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2827 | STAT_SCHWIMMWINKEL_WERT | ° | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2828 | STAT_SCHWIMMWINKEL_SIGNALTOLERANZ_WERT | ° | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2829 | STAT_QUERGESCHWINDIGKEIT_WERT | km/h | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x282A | STAT_QUERGESCHWINDIGKEIT_SIGNALTOLERANZ_WERT | km/h | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x282B | STAT_SCHWIMMWINKELGESCHWINDIGKEIT_WERT | °/s | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x282C | STAT_SCHWIMMWINKELGESCHWINDIGKEIT_SIGNALTOLERANZ_WERT | °/s | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x282D | STAT_LERNWERT_BEIDE_KURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x282E | STAT_LERNWERT_LINKSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x282F | STAT_LERNWERT_RECHTSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2830 | STAT_LERNINTERVALL_BEIDE_KURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2831 | STAT_LERNINTERVALL_LINKSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2832 | STAT_LERNINTERVALL_RECHTSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2833 | STAT_LERNALGO_WERT | HEX | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x2834 | STAT_LENKWINKELOFFSET_WERT | rad | High | signed char | - | 1.0 | 500.0 | 0.0 |
| 0x2835 | STAT_LENKWINKELOFFSET_TOLERANZ_WERT | rad | High | unsigned char | - | 1.0 | 500.0 | 0.0 |
| 0x2836 | STAT_ZAHNSTANGENKRAFT_WERT | kN | High | unsigned char | - | 1.0 | 5.0 | -20.0 |
| 0x2837 | STAT_ZAHNSTANGENGESCHWINDIGKEIT_WERT | m/s | High | unsigned char | - | 1.0 | 200.0 | -0.5 |
| 0x2838 | STAT_ISTLEISTUNG_EPS_WERT | kW | High | unsigned char | - | 1.0 | 10.0 | -12.0 |
| 0x2839 | STAT_PRAEDIZIERTE_LEISTUNG_EPS_WERT | kW | High | unsigned char | - | 1.0 | 10.0 | -12.0 |
| 0x283A | STAT_SIGNALTOLERANZ_QUERBESCHLEUNIGUNG_WERT | m/s² | High | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x283B | STAT_SIGNALTOLERANZ_LAENGSBESCHLEUNIGUNG_WERT | m/s² | High | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x283C | STAT_SIGNALTOLERANZ_GIERRATE_WERT | rad/s | High | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x283D | STAT_SIGNALTOLERANZ_LENKWINKEL_WERT | rad | High | unsigned char | - | 1.0 | 1000.0 | 0.0 |
| 0x283E | STAT_SIGNALTOLERANZ_ROLLRATE_WERT | rad/s | High | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x283F | STAT_SIGNALTOLERANZ_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | High | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x2840 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x2841 | STAT_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2842 | STAT_SENSOR_GIERRATE_2_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x284A | STAT_SOLL_LENKWINKEL_HA_WERT | rad | High | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x284B | STAT_SOLL_LENKWINKEL_HA_QUALIFIER_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x284C | STAT_IST_LENKWINKEL_HA_WERT | rad | High | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x284D | STAT_IST_LENKWINKEL_HA_FEHLERAMPLITUDE_WERT | rad | High | unsigned char | - | 1.0 | 1300.0 | 0.0 |
| 0x284E | STAT_HSR_QUALIFIER_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x284F | STAT_IST_LENKWINKEL_HA_NUTZSIGQUALIFIER_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2853 | STAT_EINGANG_SENSOR_NICKRATE_WERT | rad/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2854 | STAT_SIGNALTOLERANZ_NICKRATE_WERT | rad/s | High | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x2855 | STAT_SENSOR_NICKRATE_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2868 | STAT_GESCHWINDIGKEIT_BEI_GROBOFFSET_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2869 | STAT_MAX_GESCHWINDIGKEIT_AUFSETZVORGANG_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x286A | STAT_MAX_QUERBESCHLEUNIGUNG_AUFSETZVORGANG_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x286B | STAT_KORREKTUR_MULTITURNS_WERT | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x286C | STAT_BELADUNGSINDEX_FINAL_WERT | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x286D | STAT_BELADUNGSINDEX_HOEHENSTAND_VL | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x286E | STAT_BELADUNGSINDEX_HOEHENSTAENDE_HL_WERT | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x286F | STAT_BELADUNGSINDEX_HOEHENSTAND_HR_WERT | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x2870 | SENSOR_VL_STATT_HR_VERWENDET | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x2877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2879 | WUNSCH_BREMSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | signed long | - | - | - | - |
| 0x288F | CC_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2890 | BUFFER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x2891 | BUFFER_SIZE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2892 | FILL_LEVEL_BUFFER_0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2893 | FILL_LEVEL_BUFFER_1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2894 | FILL_LEVEL_BUFFER_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2895 | FILL_LEVEL_BUFFER_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2896 | FILL_LEVEL_BUFFER_4 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2897 | FILL_LEVEL_BUFFER_5 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x28A6 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x28AD | ERROR_ID_EMSLCONDITIONEVALUATOR | 0-n | High | 0xFF | TAB_ERRID_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x28AE | ERROR_DUMP_1_EMSLCONDITIONEVALUATOR | HEX | High | signed long | - | - | - | - |
| 0x28AF | ERROR_DUMP_2_EMSLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28B0 | ERROR_ID_EMELECTRONICHORIZON | 0-n | High | 0xFF | TAB_ERRID_EMELECTRONICHORIZON | - | - | - |
| 0x28B1 | ERROR_DUMP_1_EMELECTRONICHORIZON | HEX | High | signed long | - | - | - | - |
| 0x28B2 | ERROR_DUMP_2_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28C4 | FUNCTION_ID_ANFORDERER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C5 | STATUS_ANFORDERER | 0-n | High | 0xFF | TAB_STATUS_ANFORDERER | - | - | - |
| 0x28C6 | I_SBS_2VX_DRIVE_STAT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C7 | SBS_CONTROL_VX_MAX | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x28C8 | SBS_CONTROL_VX_MIN | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x28C9 | SBS_CONTROL_VX_STAT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x28CA | R_SBS_3AX_beta | rad | High | signed char | - | 1.0 | 100.0 | 0.0 |
| 0x28CB | DREHZAHL_RAD_VL | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28CC | DREHZAHL_RAD_VR | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28CD | DREHZAHL_RAD_HL | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28CE | DREHZAHL_RAD_HR | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28F1 | Sub-Tabelle | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x28F2 | SERVICE_ID | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28F3 | CLIENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x28F4 | SVC_PARAMETER | HEX | High | unsigned long | - | - | - | - |
| 0x28FA | ERROR_DUMP_DTC030800 | HEX | High | signed long | - | - | - | - |
| 0x28FB | ERROR_DUMP_DTC030801 | HEX | High | signed long | - | - | - | - |
| 0x28FC | ERROR_DUMP_DTC030802 | HEX | High | signed long | - | - | - | - |
| 0x28FD | ERROR_DUMP_DTC030804 | HEX | High | signed long | - | - | - | - |
| 0x28FF | ERROR_DUMP_DTC030807 | HEX | High | signed long | - | - | - | - |
| 0x2900 | ERROR_DUMP_DTC030808 | HEX | High | signed long | - | - | - | - |
| 0x2901 | ERROR_DUMP_DTC030809 | HEX | High | signed long | - | - | - | - |
| 0x2902 | ERROR_DUMP_DTC03080C | HEX | High | signed long | - | - | - | - |
| 0x2903 | ERROR_DUMP_DTC03080D | HEX | High | signed long | - | - | - | - |
| 0x2904 | ERROR_DUMP_DTC03080E | HEX | High | signed long | - | - | - | - |
| 0x2905 | ERROR_DUMP_DTC03080F | HEX | High | signed long | - | - | - | - |
| 0x2908 | ERROR_DUMP_DTC030812 | HEX | High | signed long | - | - | - | - |
| 0x2909 | ERROR_DUMP_DTC030813 | HEX | High | signed long | - | - | - | - |
| 0x290A | ERROR_DUMP_DTC030814 | HEX | High | signed long | - | - | - | - |
| 0x290B | ERROR_DUMP_DTC030815 | HEX | High | signed long | - | - | - | - |
| 0x290C | ERROR_DUMP_DTC030818 | HEX | High | signed long | - | - | - | - |
| 0x290E | ERROR_DUMP_DTC03081B | HEX | High | signed long | - | - | - | - |
| 0x290F | ERROR_DUMP_DTC03081C | HEX | High | signed long | - | - | - | - |
| 0x2910 | ERROR_DUMP_DTC03081E | HEX | High | signed long | - | - | - | - |
| 0x2911 | ERROR_DUMP_DTC03081F | HEX | High | signed long | - | - | - | - |
| 0x2912 | ERROR_DUMP_DTC030820 | HEX | High | signed long | - | - | - | - |
| 0x2913 | ERROR_DUMP_DTC030850 | HEX | High | signed long | - | - | - | - |
| 0x2914 | ERROR_DUMP_DTC030851 | HEX | High | signed long | - | - | - | - |
| 0x2916 | ZEITPUNKT_BREMSPEDALBETAETIGUNG | s | High | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x2917 | ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF | s | High | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x2918 | DAUER_AKUTWARNUNG | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x2919 | DAUER_ANBREMSEN_STUFE_1 | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x291A | DAUER_ANBREMSEN_STUFE_2 | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x291B | DAUER_AKTIVE_GEFAHRENBREMSUNG | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x291C | ABSTAND_ZO_BEGINN_AKUTWARNUNG | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x291D | ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1 | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x291E | ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2 | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x291F | ABSTAND_ZO_BEGINN_AGB | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x2920 | EGO_LAENGSBESCHLEUNIGUNG | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x2921 | EGO_GESCHWINDIGKEIT_ANBREMSBEGINN | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2922 | EGO_GESCHWINDIGKEIT_ANBREMSENDE | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2923 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x2926 | ERROR_DUMP_DTC03082F | HEX | High | unsigned long | - | - | - | - |
| 0x2927 | CTR_12V_BN_FACT_ENERG_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x2928 | CTR_12V_BN_FACT_PWR_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x2929 | OBD_MUX_FEHLER | HEX | High | unsigned char | - | - | - | - |
| 0x292A | CTR_BN_FACT_ENERG_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x292B | CTR_BN_FACT_PWR_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x292E | RQRED_GESAMT_DAUER_FAHRZYKLUS | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x292F | RQRED_GESAMT_ANTEIL_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 10000.0 | 0.0 |
| 0x2930 | RQRED_ZAEHLER_1_RQ_SQ_HSR_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2931 | RQRED_ZAEHLER_2_RQ_SQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2932 | RQRED_ZAEHLER_3_RQ_SQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2933 | RQRED_ZAEHLER_1_RQ_HSR_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2934 | RQRED_ZAEHLER_2_RQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2935 | RQRED_ZAEHLER_3_RQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2936 | RQRED_ZAEHLER_1_RQ_GMVH_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2937 | RQRED_ZAEHLER_2_RQ_GMVH_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2938 | RQRED_ZAEHLER_3_RQ_GMVH_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2939 | RQRED_ZAEHLER_1_RQ_ARS_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x293A | RQRED_ZAEHLER_2_RQ_ARS_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x293B | RQRED_ZAEHLER_3_RQ_ARS_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x293C | UEBERSETZUNG_EPS | - | High | unsigned int | - | 50.0 | 4096.0 | 0.0 |
| 0x2943 | RGRED_GESAMT_ANTEIL_LIN_FAHRBEREITSCHAFT_REGLEREINGRIFF | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2944 | MAX_I_SPEC_BAX_STE | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2945 | AVL_I_BAX_STE | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2946 | SOLL_LENKWINKEL_HA_ZFM | rad | High | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x2947 | QU_FN_HSR | HEX | High | unsigned char | - | - | - | - |
| 0x294C | ZAEHLER_SCHNEEKETTENMODUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x296A | EEPROM_EINZELWERTE_PRUEFERGEBNIS | HEX | High | unsigned long | - | - | - | - |
| 0x4100 | RDC_RE_HERSTELLER | 0-n | High | 0xFF | TAB_RDC_RE_HERSTELLER | - | - | - |
| 0x5004 | ANTRIEBSNETZ | HEX | High | unsigned char | - | - | - | - |
| 0x5006 | BETRIEBSSPANNUNG_PUMPE | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x500B | FUNKTIONSZUSTAND | HEX | High | unsigned int | - | - | - | - |
| 0x500E | DSC_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x500F | DEM_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x5021 | SPANNUNG_MOTOR_L | V | High | signed int | - | 1.0 | 1000.0 | 0.0 |
| 0x5022 | SPANNUNG_MOTOR_R | V | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5023 | STROM_MOTOR_L | A | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5024 | STROM_MOTOR_R | A | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5026 | BREMSENSTATUS_LINKS | 0-n | High | 0xF0 | TAB_BREMSENSTATUS_LINKS | - | - | - |
| 0x5027 | BREMSENSTATUS_RECHTS | 0-n | High | 0x0F | TAB_BREMSENSTATUS_RECHTS | - | - | - |
| 0x5028 | SCHALTERSTATUS | 0-n | High | 0xFF | TAB_SCHALTERSTATUS | - | - | - |
| 0x502E | STATUS_HOST_SAFETY_BARRIER | 0-n | High | 0xFF | TAB_STATUS_HOST_SAFETY_BARRIER | - | - | - |
| 0x5033 | LetztesBremsenEvent | 0-n | High | 0xFF | TAB_LETZTESBREMSENEVENT | - | - | - |
| 0x5102 | DEBUGINFO | HEX | High | unsigned int | - | - | - | - |
| 0x5103 | INTERNER_FUNKTIONSSTATUS | HEX | High | unsigned int | - | - | - | - |
| 0x5104 | DEBUGINFO_BAC | HEX | High | unsigned int | - | - | - | - |
| 0x5105 | DEBUGINFO_EXT1 | HEX | High | unsigned long | - | - | - | - |
| 0x5106 | DEBUGINFO_EXT2 | HEX | High | unsigned long | - | - | - | - |
| 0x5107 | ATMOSPHAERENDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x5108 | ISTDREHZAHL_MOTORKURBELWELLE | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x5109 | TANDEMHAUPTBREMSZYLINDER_DRUCK | bar | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x510A | TANDEMHAUPTBREMSZYLINDER_WEG | mm | High | signed int | - | 1.0 | 256.0 | 0.0 |
| 0x510B | UNTERDRUCK_VAKUUMSENSOR | bar | High | signed int | - | 1.0 | 16384.0 | 0.0 |
| 0x510C | TIMER_DICHTHEIT_BKV | s | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x510D | Unterdruck_BKV_Eintritt_MAS | bar | High | signed int | - | 1.0 | 16384.0 | 0.0 |
| 0x510F | DRUCKSENSOR_ROHDATEN1 | HEX | High | unsigned long | - | - | - | - |
| 0x5110 | DRUCKSENSOR_ROHDATEN2 | HEX | High | unsigned long | - | - | - | - |
| 0x5111 | DRUCKSENSOR_ROHDATEN3 | HEX | High | unsigned long | - | - | - | - |
| 0x5112 | DRUCKSENSOR_ROHDATEN4 | HEX | High | unsigned long | - | - | - | - |
| 0xF402 | DTC that caused required freeze frame data storage | HEX | High | unsigned int | - | - | - | - |
| 0xF404 | Calculated LOAD Value | - | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0xF405 | Engine Coolant Temperature | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0xF40C | Engine RPM | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0xF40D | Vehicle Speed Sensor | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xF411 | Absolute Throttle Position | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0xF442 | Control module voltage | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
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
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x030546 | QDM-SBS - Gierratensensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x03054C | QDM-SBS - Lenkwinkel effektiv Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x03054D | QDM-SBS - Lenkwinkel effektiv Signaltoleranz aufgrund Abgleichstoleranz | 0 | - |
| 0x03054F | QDM-Aaeps - Lenkwinkel aufgesetzt mittels Lenkwinkelsensor | 1 | - |
| 0x03055D | QDM-SBS - Laengsbeschleunigungssensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x03055F | QDM-SBS - Laengsbeschleunigungssensor Signaltoleranz aufgrund nicht ausgeführtem Werksmodus | 0 | - |
| 0x030568 | QDM-SBS - Nickrate Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030570 | QDM-SBS - Querbeschleunigungssensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030578 | QDM-SBS - Rollrate Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030583 | QDM-SBS - Vertikalbeschleunigungssensor Signaltoleranz aufgrund Fehlerverdacht | 0 | - |
| 0x030589 | QDM-SBS - Inkorrekter Rollenbetrieb erkannt | 0 | - |
| 0x03058B | QDM-SBS - Aktiver Rollenmodus | 0 | - |
| 0x030591 | QDM-SBS - Diversitäres Rechnen VX Info | 0 | - |
| 0x03059A | QDM-Aaeps - Aufgesetzt mittels Modellvergleich | 1 | - |
| 0x03059B | QDM-Aaeps - Aufgesetzt mittels Indexsignal | 1 | - |
| 0x03059C | QDM-Aaeps - Korrektur der Ist-Position EPS | 0 | - |
| 0x03059D | QDM-EV - VCH an oberer Lerngrenze | 0 | - |
| 0x03059E | QDM-EV - VCH an unterer Lerngrenze | 0 | - |
| 0x03059F | QDM-Aaeps - Aufgesetzt mittels Anschlag lenken | 1 | - |
| 0x0305A5 | QDM-QEI - Fehlertoleranz SBS zu hoch | 1 | - |
| 0x0305A6 | QDM-QEI - Fehlertoleranz FZB zu hoch | 1 | - |
| 0x0305A7 | QDM-QEI - Inputs nicht gültig SBS | 1 | - |
| 0x0305A8 | QDM-QEI - Inputs nicht gültig FZB | 1 | - |
| 0x0305A9 | QDM-QEI - eingeschränkte Modellgültigkeit | 1 | - |
| 0x0305AA | QDM-QEI - Plausibilisierungsfehler | 1 | - |
| 0x0305AB | QDM-QEI - Funktion oder Applikation nicht vorhanden | 1 | - |
| 0x0305AC | QDM-QEI - interne Degradation wegen SBS | 1 | - |
| 0x0305B0 | QDM-BS -  Beladungsschätzer Höhenstände zueinander unplausibel | 0 | - |
| 0x030640 | QDM-ZFM - Fahrtrichtung unsicher bei vx größer 2m/s | 0 | - |
| 0x030646 | QDM-LAEPS - Berechnung korregierte Längsbeschleunigung nicht möglich | 1 | - |
| 0x030647 | QDM-LAEPS - Berechnung Algorithmus Parken nicht möglich | 1 | - |
| 0x030648 | QDM-LAEPS - Berechnung Algorithmus Wenden nicht möglich | 1 | - |
| 0x030649 | QDM-LAEPS - Berechnung Extrapolation elektrische Leistung EPS nicht möglich | 1 | - |
| 0x03064A | QDM-LAEPS - Berechnung Extrapolation mechanische Leistung EPS nicht möglich | 1 | - |
| 0x03064B | QDM-LAEPS - Berechnung maximale Leistung EPS nicht möglich | 1 | - |
| 0x03064C | QDM-LAEPS - Berechnung LLP wegen fehlerhafter Geschwindigkeit nicht möglich | 1 | - |
| 0x03065B | QDM-ZFM - ARS Funktionsqualifier - Funktion fehlerhaft - defekt | 1 | - |
| 0x03065D | QDM-ZFM - Statistik Anteil linearer Fahrbereich | 0 | - |
| 0x03065E | QDM-ZFM - Reglerbegrenzung im linearen Fahrbereich | 0 | - |
| 0x030660 | QDM-ZFM - HSR - Aktuator meldet ungültigen Motorlagewinkel | 1 | - |
| 0x030662 | QDM-ZFM - HSR - inaktiv und Fahrzeug rollt | 1 | - |
| 0x030663 | QDM-ZFM - HSR - Aktuator meldet Errormodus | 1 | - |
| 0x030664 | QDM-ZFM - HSR - Aktuator meldet undefinierten Zustand | 1 | - |
| 0x030667 | QDM-ZFM - HSR - Aktuator meldet Pausenmodus und Fahrzeug rollt | 1 | - |
| 0x030668 | QDM-ZFM - HSR - Aktuator wechselt nicht in den aktiven Modus | 0 | - |
| 0x030669 | QDM_ZFM - HSR - Zwangsaktivierung im Schneeketten-Modus - Geschwindigkeit überschritten | 1 | - |
| 0x03066A | QDM-ZFM - HSR - Schneeketten-Modus aktiviert | 1 | - |
| 0x03066B | QDM-ZFM - HSR - Erinnerung Schneeketten-Modus aktiv | 1 | - |
| 0x03066C | QDM-STCLUGBU - Zwangsaktivierung DSC | 1 | - |
| 0x030807 | FAS - Funktionale Deaktivierung | 0 | - |
| 0x030808 | FAS - Antrieb - Betriebsbereitschaft | 1 | - |
| 0x030809 | FAS - Bremse - Betriebsbereitschaft | 1 | - |
| 0x03080A | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x03080B | FAS - EM-SLCONDITIONEVALUATOR - Umfeldmodell - Logikfehler | 1 | - |
| 0x03080C | FAS - Bedienfeld - HDC - fehlerhaft | 1 | - |
| 0x03080D | FAS - Inkorrekte Codierung Fahrfunktion | 1 | - |
| 0x03080E | FAS - KAFAS - Betriebsbereitschaft | 1 | - |
| 0x03080F | FAS - Abweichung VKombi gegen V-Ist zu groß | 1 | - |
| 0x030812 | FAS - Fahrzeugsensorik Betriebsbereitschaft | 1 | - |
| 0x030813 | FAS - Frontschutz - Aktive Gefahrenbremsung ausgelöst | 1 | - |
| 0x030814 | FAS - pFGS - Verzögerungsanforderung | 0 | - |
| 0x030815 | FAS - CCM - Verzögerungsanforderung | 0 | - |
| 0x030818 | FAS - Bedienung Lenkrad - Betriebsbereitschaft | 1 | - |
| 0x03081B | FAS - Kombi - Betriebsbereitschaft | 1 | - |
| 0x03081C | FAS - Fehler Navigationsdaten | 1 | - |
| 0x03081E | FAS Signalfehler - Undefinierter Inhalt oder unzureichende Qualität | 1 | - |
| 0x03081F | FAS - Frontschutz - Akutwarnung ausgelöst | 0 | - |
| 0x030821 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Eingangssignalfehler | 1 | - |
| 0x030822 | FAS - EM-ELECTRONICHORIZON - Umfeldmodell - Logikfehler | 0 | - |
| 0x030830 | FAS - EM-ELECTRONICHORIZON - Zeitbasis unsynchronisiert | 1 | - |
| 0x030850 | FAS - Frontschutz - Anbremsen Stufe 1 ausgelöst | 0 | - |
| 0x030851 | FAS - Frontschutz - Anbremsen Stufe 2 ausgelöst | 0 | - |
| 0x030900 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 1 | 1 | - |
| 0x030902 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 3 | 1 | - |
| 0x030903 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 4 | 1 | - |
| 0x030904 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 5 | 1 | - |
| 0x030905 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 6 | 1 | - |
| 0x030906 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 7 | 1 | - |
| 0x030907 | D-OBD 1 - ICM oder ACSM - Diagnosestatus 8 | 1 | - |
| 0x030A40 | D-OBD 2 - LMV - Diagnosestatus 1 | 1 | - |
| 0x030A41 | D-OBD 2 - LMV - Diagnosestatus 2 | 1 | - |
| 0x030A42 | D-OBD 2 - LMV - Diagnosestatus 3 | 1 | - |
| 0x030A43 | D-OBD 2 - LMV - Diagnosestatus 4 | 1 | - |
| 0x030A44 | D-OBD 2 - LMV - Diagnosestatus 5 | 1 | - |
| 0x030A45 | D-OBD 2 - LMV - Diagnosestatus 6 | 1 | - |
| 0x030A46 | D-OBD 2 - LMV - Diagnosestatus 7 | 1 | - |
| 0x030A47 | D-OBD 2 - LMV - Diagnosestatus 8 | 1 | - |
| 0x030A48 | D-OBD 2 - LMV - Diagnosestatus 9 | 1 | - |
| 0x030A49 | D-OBD 2 - LMV - Diagnosestatus 10 | 1 | - |
| 0x030A4A | D-OBD 2 - LMV - Diagnosestatus 11 | 1 | - |
| 0x030A4B | D-OBD 2 - LMV - Diagnosestatus 12 | 1 | - |
| 0x030A4C | D-OBD 2 - LMV - Diagnosestatus 13 | 1 | - |
| 0x030A4D | D-OBD 2 - LMV - Diagnosestatus 14 | 1 | - |
| 0x030A4E | D-OBD 2 - LMV - Diagnosestatus 15 | 1 | - |
| 0x030A4F | D-OBD 2 - LMV - Diagnosestatus 16 | 1 | - |
| 0x030A50 | D-OBD 2 - LMV - Diagnosestatus 17 | 1 | - |
| 0x030A51 | D-OBD 2 - LMV - Diagnosestatus 18 | 1 | - |
| 0x030A52 | D-OBD 2 - LMV - Diagnosestatus 19 | 1 | - |
| 0x030A53 | D-OBD 2 - LMV - Diagnosestatus 20 | 1 | - |
| 0x030A54 | D-OBD 2 - LMV - Diagnosestatus 21 | 1 | - |
| 0x030A55 | D-OBD 2 - LMV - Diagnosestatus 22 | 1 | - |
| 0x030A56 | D-OBD 2 - LMV - Diagnosestatus 23 | 1 | - |
| 0x030A57 | D-OBD 2 - LMV - Diagnosestatus 24 | 1 | - |
| 0x030A58 | D-OBD 2 - LMV - Diagnosestatus 25 | 1 | - |
| 0x030A59 | D-OBD 2 - LMV - Diagnosestatus 26 | 1 | - |
| 0x030A5A | D-OBD 2 - LMV - Diagnosestatus 27 | 1 | - |
| 0x030A5B | D-OBD 2 - LMV - Diagnosestatus 28 | 1 | - |
| 0x030B40 | D-OBD 3 - EPS - Diagnosestatus 1 | 1 | - |
| 0x030B41 | D-OBD 3 - EPS - Diagnosestatus 2 | 1 | - |
| 0x030B42 | D-OBD 3 - EPS - Diagnosestatus 3 | 1 | - |
| 0x030B43 | D-OBD 3 - EPS - Diagnosestatus 4 | 1 | - |
| 0x030B44 | D-OBD 3 - EPS - Diagnosestatus 5 | 1 | - |
| 0x030B45 | D-OBD 3 - EPS - Diagnosestatus 6 | 1 | - |
| 0x030B46 | D-OBD 3 - EPS - Diagnosestatus 7 | 1 | - |
| 0x030B47 | D-OBD 3 - EPS - Diagnosestatus 8 | 1 | - |
| 0x030B48 | D-OBD 3 - EPS - Diagnosestatus 9 | 1 | - |
| 0x030B49 | D-OBD 3 - EPS - Diagnosestatus 10 | 1 | - |
| 0x030B4A | D-OBD 3 - EPS - Diagnosestatus 11 | 1 | - |
| 0x030B4B | D-OBD 3 - EPS - Diagnosestatus 12 | 1 | - |
| 0x030B4C | D-OBD 3 - EPS - Diagnosestatus 13 | 1 | - |
| 0x030B4D | D-OBD 3 - EPS - Diagnosestatus 14 | 1 | - |
| 0x030B4E | D-OBD 3 - EPS - Diagnosestatus 15 | 1 | - |
| 0x030B4F | D-OBD 3 - EPS - Diagnosestatus 16 | 1 | - |
| 0x030B50 | D-OBD 3 - EPS - Diagnosestatus 17 | 1 | - |
| 0x030B51 | D-OBD 3 - EPS - Diagnosestatus 18 | 1 | - |
| 0x030B52 | D-OBD 3 - EPS - Diagnosestatus 19 | 1 | - |
| 0x030B53 | D-OBD 3 - EPS - Diagnosestatus 20 | 1 | - |
| 0x030B54 | D-OBD 3 - EPS - Diagnosestatus 21 | 1 | - |
| 0x030B55 | D-OBD 3 - EPS - Diagnosestatus 22 | 1 | - |
| 0x030B56 | D-OBD 3 - EPS - Diagnosestatus 23 | 1 | - |
| 0x030B57 | D-OBD 3 - EPS - Diagnosestatus 24 | 1 | - |
| 0x030B58 | D-OBD 3 - EPS - Diagnosestatus 25 | 1 | - |
| 0x030B5E | D-OBD 3 - EPS - Diagnosestatus 31 | 1 | - |
| 0x030B5F | D-OBD 3 - EPS - Diagnosestatus 32 | 1 | - |
| 0x030B60 | D-OBD 3 - EPS - Diagnosestatus 33 | 1 | - |
| 0x030B61 | D-OBD 3 - EPS - Diagnosestatus 34 | 1 | - |
| 0x030C50 | INT-CCHDL Überlauf Checkcontrol Buffer | 0 | - |
| 0x030C51 | INT-CCHDL Undefinierte CC-ID angefordert | 0 | - |
| 0x030C52 | INT-CCHDL Info Buffer Füllgrad | 0 | - |
| 0x030C58 | INT-CCHDL Anforderung abgelehnt Task läuft bereits | 0 | - |
| 0x030C62 | INT-SVCHDL Anforderung abgelehnt Task läuft bereits | 0 | - |
| 0x030CC0 | D-OBD 5 - HSR - Diagnosestatus 1 | 1 | - |
| 0x030CC1 | D-OBD 5 - HSR - Diagnosestatus 2 | 1 | - |
| 0x030CC8 | D-OBD 5 - HSR - Diagnosestatus 9 | 1 | - |
| 0x030CC9 | D-OBD 5 - HSR - Diagnosestatus 10 | 1 | - |
| 0x030CCA | D-OBD 5 - HSR - Diagnosestatus 11 | 1 | - |
| 0x030CCC | D-OBD 5 - HSR - Diagnosestatus 13 | 1 | - |
| 0x030CCD | D-OBD 5 - HSR - Diagnosestatus 14 | 1 | - |
| 0x030CD0 | D-OBD 5 - HSR - Diagnosestatus 17 | 1 | - |
| 0x030CD1 | D-OBD 5 - HSR - Diagnosestatus 18 | 1 | - |
| 0x030CD2 | D-OBD 5 - HSR - Diagnosestatus 19 | 1 | - |
| 0x030CD8 | D-OBD 5 - HSR - Diagnosestatus 25 | 1 | - |
| 0x030CD9 | D-OBD 5 - HSR - Diagnosestatus 26 | 1 | - |
| 0x030CDB | D-OBD 5 - HSR - Diagnosestatus 28 | 1 | - |
| 0x030CDC | D-OBD 5 - HSR - Diagnosestatus 29 | 1 | - |
| 0x030CE0 | D-OBD 5 - HSR - Diagnosestatus 33 | 1 | - |
| 0x030CE1 | D-OBD 5 - HSR - Diagnosestatus 34 | 1 | - |
| 0x030CE2 | D-OBD 5 - HSR - Diagnosestatus 35 | 1 | - |
| 0x030CE3 | D-OBD 5 - HSR - Diagnosestatus 36 | 1 | - |
| 0x030CE4 | D-OBD 5 - HSR - Diagnosestatus 37 | 1 | - |
| 0x480694 | Peripherial/Funktional error Schnittstelle QDM Ist Lenkwinkel Vorderachse Signal ungültig | 0 | - |
| 0x480695 | Peripherial/Funktional error Schnittstelle QDM Giergeschwindigkeit Fahrzeug Signal ungültig | 0 | - |
| 0x480699 | Peripherial/Funktional error Schnittstelle QDM Querbeschleunigung Schwerpunkt Signal ungültig | 0 | - |
| 0x48069A | Peripherial/Funktional error Schnittstelle QDM Längsbeschleunigung Schwerpunkt Signal ungültig | 0 | - |
| 0x4806FE | Fading Unterstützung - Aktiv und Bremsscheibentemperatur oberhalb Grenzwert | 0 | - |
| 0x48073F | Bremslichtschalter - permanent getretenes Bremspedal (Verdacht) - Info | 0 | - |
| 0x480740 | Bremslichtschalter - nie getretenes Bremspedal (Verdacht) - Info | 0 | - |
| 0x480824 | Elektrohydraulischer Bremsaktuator - Hydraulikleistung eingeschränkt | 0 | - |
| 0x48082E | Peripherial/Funktional error Schnittstelle QDM Ackermann Sollgierrate Signal ungültig | 0 | - |
| 0x480848 | Peripherial/Funktional error Schnittstelle QDM Ackermann Sollgierrate Fehleramplitude Ueberschreitet Grenzwert | 0 | - |
| 0x48084E | Hinterachslenkwinkel Lenkwinkelsignal unterhalb VFUSI nicht initialisiert | 1 | - |
| 0x480857 | Vorderachslenkwinkel Lenkwinkelsignal unterhalb VFUSI nicht initialisiert | 1 | - |
| 0x480867 | DSC Failsafe Bedatung durch Partnersystemausfall aktiv - Regelverhalten verändert | 1 | - |
| 0x48087F | Peripherial/Funktional error Schnittstelle QDM Ist Lenkwinkel Vorderachse Fehleramplitude Ueberschreitet Grenzwert | 0 | - |
| 0x480886 | EPBi Allgemein Übergabe an Getriebe nicht möglich | 0 | - |
| 0x480893 | Steuergerät intern - Ruhestromreset aktiviert | 0 | - |
| 0x4808E2 | Steuergerät intern - Unbekannter Interrupt | 0 | - |
| 0x480ACC | Hydraulische Funktionsprüfung aktiv | 0 | - |
| 0x480ACD | RDCi Radelektronik anderer Typ | 0 | - |
| 0x480AD0 | Peripherial/Funktional error Schnittstelle QDM Soll Bremsmoment Summe Signal ungültig | 0 | - |
| 0x480AD1 | Peripherial/Funktional error Schnittstelle QDM Differenzbremsmoment GMV Signal ungültig | 0 | - |
| 0x480AD2 | Peripherial/Funktional error Schnittstelle QDM Sollgeschwindigkeit HDC Signal ungültig | 0 | - |
| 0x480AD3 | Peripherial/Funktional error Schnittstelle QDM Funktionsqualifier HSR Signal ungültig | 0 | - |
| 0x480AD4 | Peripherial/Funktional error Schnittstelle QDM Ist Längsneigung Fahrbahn schnell Signal ungültig | 0 | - |
| 0x480AEB | Steuergerät intern - Security Zugriff geöffnet | 0 | - |
| 0x480AEC | Steuergerät intern - Security DiagnoseRequest in verriegeltem Zustand erhalten | 0 | - |
| 0x480B2D | FUSI - Funktions-Kontrollalgorithmus ausgelöst - Info | 0 | - |
| 0xD35D0C | D-OBD 1 - ICM oder ACSM - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xD35D1F | D-OBD 3 - EPS - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xD35D29 | D-OBD 5 - HSR - Kommunikationsfehler Diagnosestatusnachricht Sammelfehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | AX_KORR - Längsbeschleunigung fehlerhaft | 0-n | High | 0x00000001 | EINZELFEHLER_BIT | - | - | - |
| 0x0002 | AX_KORR - Längsneigung fehlerhaft | 0-n | High | 0x00000002 | EINZELFEHLER_BIT | - | - | - |
| 0x0003 | STOP - Geschwindigkeit fehlerhaft | 0-n | High | 0x00000004 | EINZELFEHLER_BIT | - | - | - |
| 0x0004 | STOP - Ritzelwinkel fehlerhaft | 0-n | High | 0x00000008 | EINZELFEHLER_BIT | - | - | - |
| 0x0005 | STOP - Fahrtrichtungswunsch fehlerhaft | 0-n | High | 0x00000010 | EINZELFEHLER_BIT | - | - | - |
| 0x0006 | STOP - Istleistung EPS fehlerhaft | 0-n | High | 0x00000020 | EINZELFEHLER_BIT | - | - | - |
| 0x0007 | RETURN - Geschwindigkeit fehlerhaft | 0-n | High | 0x00000040 | EINZELFEHLER_BIT | - | - | - |
| 0x0008 | RETURN - Ritzelwinkel fehlerhaft | 0-n | High | 0x00000080 | EINZELFEHLER_BIT | - | - | - |
| 0x0009 | RETURN - Winkel Fahrpedal fehlerhaft | 0-n | High | 0x00000100 | EINZELFEHLER_BIT | - | - | - |
| 0x000A | RETURN - Längsbeschleunigung fehlerhaft | 0-n | High | 0x00000200 | EINZELFEHLER_BIT | - | - | - |
| 0x000B | EXTRAP_PEL - Istleistung EPS fehlerhaft | 0-n | High | 0x00000400 | EINZELFEHLER_BIT | - | - | - |
| 0x000C | EXTRAP_FZS - Fahrerhandmoment fehlerhaft | 0-n | High | 0x00000800 | EINZELFEHLER_BIT | - | - | - |
| 0x000D | EXTRAP_FZS - Ritzelwinkel fehlerhaft | 0-n | High | 0x00001000 | EINZELFEHLER_BIT | - | - | - |
| 0x000E | EXTRAP_FZS - Zahnstangenkraft fehlerhaft | 0-n | High | 0x00002000 | EINZELFEHLER_BIT | - | - | - |
| 0x000F | FZSREDUC_BRAKE - Bremsmoment VL fehlerhaft | 0-n | High | 0x00004000 | EINZELFEHLER_BIT | - | - | - |
| 0x0010 | FZSREDUC_BRAKE - Bremsmoment VR fehlerhaft | 0-n | High | 0x00008000 | EINZELFEHLER_BIT | - | - | - |
| 0x0011 | FZSREDUC_BRAKE - Status Bremsung fehlerhaft | 0-n | High | 0x00010000 | EINZELFEHLER_BIT | - | - | - |
| 0x0012 | VX - Geschwindigkeit fehlerhaft | 0-n | High | 0x00020000 | EINZELFEHLER_BIT | - | - | - |
| 0x0013 | EXTRAP_FZS - Hub fehlerhaft | 0-n | High | 0x00040000 | EINZELFEHLER_BIT | - | - | - |
| 0x0014 | EXTRAP_FZS - Einheit Position EPS fehlerhaft | 0-n | High | 0x00080000 | EINZELFEHLER_BIT | - | - | - |
| 0x0015 | KALTSTART_VORHANDEN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0016 | MSA_START_VORHANDEN | 0/1 | High | 0x02 | - | - | - | - |
| 0x0017 | MOTOR_LAEUFT | 0/1 | High | 0x04 | - | - | - | - |
| 0x0018 | GLOBALE_BITS_VORHANDEN | 0/1 | High | 0x08 | - | - | - | - |
| 0x0019 | Ausfall DSC | 0/1 | High | 0x0001 | - | - | - | - |
| 0x001A | Regeleingriff DSC | 0/1 | High | 0x0002 | - | - | - | - |
| 0x001B | Ausfall emARS | 0/1 | High | 0x0004 | - | - | - | - |
| 0x001C | Ausfall VDC | 0/1 | High | 0x0008 | - | - | - | - |
| 0x001D | Ausfall/Schutz LMV | 0/1 | High | 0x0010 | - | - | - | - |
| 0x001E | Reifendruckverlust | 0/1 | High | 0x0020 | - | - | - | - |
| 0x001F | Ausfall Heckspoiler | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0020 | FAS Wechsel Betriebsart | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0021 | FAS Sperrung Bedienung | 0/1 | High | 0x0100 | - | - | - | - |
| 0x0022 | Bedarf Stabilisierung | 0/1 | High | 0x0200 | - | - | - | - |
| 0x0023 | State of Charge low | 0/1 | High | 0x0400 | - | - | - | - |
| 0x0024 | Care Key Ausschluss DSC-OFF | 0/1 | High | 0x0800 | - | - | - | - |
| 0x0025 | Care Key TRACTION nur bei Anfahren | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0026 | Ausfall EHC | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0027 | Ausfall GSD-Ansteuerung | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0028 | Ausfall LMV-Ansteuerung | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0029 | iBrake | 0/1 | High | 0x01 | - | - | - | - |
| 0x002A | Kamerabasierte Auffahrwarnung (FCW_CCM) | 0/1 | High | 0x02 | - | - | - | - |
| 0x002B | Querverkehrsassistent (QVA) | 0/1 | High | 0x04 | - | - | - | - |
| 0x002C | Präventiver Fußgängerschutz (pFGS) | 0/1 | High | 0x08 | - | - | - | - |
| 0x002D | Night-Vision (NiVi) | 0/1 | High | 0x10 | - | - | - | - |
| 0x002E | Vorfahrtswarner (VFW) | 0/1 | High | 0x20 | - | - | - | - |
| 0x002F | Dummy_Bit_6 | 0/1 | High | 0x40 | - | - | - | - |
| 0x0030 | Dummy_Bit_7 | 0/1 | High | 0x80 | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x2801 | STAT_GESCHWINDIGKEIT_SCHWERPUNKT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2802 | STAT_QUERBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x2803 | STAT_GIERRATE_SCHWERPUNKT_WERT | °/s | High | signed char | - | 1.0 | 0.77 | 0.0 |
| 0x2804 | STAT_EINGANG_SENSOR_FAHRERLENKWINKEL_WERT | ° | High | unsigned int | - | 1.0 | 23.0 | 0.0 |
| 0x2805 | STAT_AUSSENTEMPERATUR_WERT | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x2806 | STAT_QUERBESCHLEUNIGUNGSNUTZSIGNAL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2807 | STAT_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2808 | STAT_GIERRATENNUTZSIGNAL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2809 | STAT_SENSOR_GIERRATE_1_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280A | STAT_SENSOR_LAENGSBESCHLEUNIGUNG_1_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280B | STAT_FAHRERLENKWINKEL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280C | STAT_RADLENKWINKEL_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x280D | STAT_LAENGSBESCHLEUNIGUNG_SCHWERPUNKT_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x280E | STAT_IST_LENKWINKEL_FAHRER_WERT | ° | High | signed char | - | 1.0 | 15.0 | 0.0 |
| 0x280F | STAT_LENKWINKEL_VA_EFFEKTIV_WERT | rad | High | signed char | - | 1.0 | 75.0 | 0.0 |
| 0x2811 | STAT_LAENGSGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2812 | STAT_FAHRZUSTAND_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2813 | STAT_TOLERANZ_AUS_AX_ABGLEICH_WERT | m/s² | High | unsigned int | - | 1.0 | 50.0 | 0.0 |
| 0x2814 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_1_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x2815 | STAT_EINGANG_SENSOR_GIERRATE_1_WERT | rad/s | High | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x2816 | STAT_EINGANG_SENSOR_LAENGSBESCHLEUNIGUNG_WERT | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x2817 | STAT_LENKWINKEL_FAHRER_TEILAUFBEREITET_WERT | rad | High | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x2818 | STAT_REFERNZGESCHWINDIGKEIT_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2819 | STAT_EINGANG_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x281A | STAT_EINGANG_SENSOR_GIERRATE_2_WERT | rad/s | High | signed char | - | 1.0 | 44.0 | 0.0 |
| 0x281B | STAT_LENKWINKEL_VA_AKTUATOR_TEILAUFBEREITET_WERT | rad | High | signed char | - | 1.0 | 8.0 | 0.0 |
| 0x281C | STAT_LENKWINKEL_HA_AKTUATOR_TEILAUFBEREITET_WERT | rad | High | signed char | - | 1.0 | 1200.0 | 0.0 |
| 0x281D | STAT_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x281E | STAT_SENSOR_ROLLRATE_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x281F | STAT_EINGANG_SENSOR_ROLLRATE_WERT | rad/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2823 | STAT_EINGANG_SENSOR_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2824 | STAT_KALMANFILTER_SCHWIMMWINKELSCHAETZERR_WERT | HEX | High | signed long | - | - | - | - |
| 0x2825 | STAT_GESAMTSTATUS_SCHWIMMWINKELSCHAETZER_WERT | HEX | High | signed long | - | - | - | - |
| 0x2826 | STAT_INFORMATION_SCHWIMMWINKELSCHAETZER_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2827 | STAT_SCHWIMMWINKEL_WERT | ° | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2828 | STAT_SCHWIMMWINKEL_SIGNALTOLERANZ_WERT | ° | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2829 | STAT_QUERGESCHWINDIGKEIT_WERT | km/h | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x282A | STAT_QUERGESCHWINDIGKEIT_SIGNALTOLERANZ_WERT | km/h | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x282B | STAT_SCHWIMMWINKELGESCHWINDIGKEIT_WERT | °/s | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x282C | STAT_SCHWIMMWINKELGESCHWINDIGKEIT_SIGNALTOLERANZ_WERT | °/s | High | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x282D | STAT_LERNWERT_BEIDE_KURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x282E | STAT_LERNWERT_LINKSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x282F | STAT_LERNWERT_RECHTSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2830 | STAT_LERNINTERVALL_BEIDE_KURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2831 | STAT_LERNINTERVALL_LINKSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2832 | STAT_LERNINTERVALL_RECHTSKURVEN_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2833 | STAT_LERNALGO_WERT | HEX | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x2834 | STAT_LENKWINKELOFFSET_WERT | rad | High | signed char | - | 1.0 | 500.0 | 0.0 |
| 0x2835 | STAT_LENKWINKELOFFSET_TOLERANZ_WERT | rad | High | unsigned char | - | 1.0 | 500.0 | 0.0 |
| 0x2836 | STAT_ZAHNSTANGENKRAFT_WERT | kN | High | unsigned char | - | 1.0 | 5.0 | -20.0 |
| 0x2837 | STAT_ZAHNSTANGENGESCHWINDIGKEIT_WERT | m/s | High | unsigned char | - | 1.0 | 200.0 | -0.5 |
| 0x2838 | STAT_ISTLEISTUNG_EPS_WERT | kW | High | unsigned char | - | 1.0 | 10.0 | -12.0 |
| 0x2839 | STAT_PRAEDIZIERTE_LEISTUNG_EPS_WERT | kW | High | unsigned char | - | 1.0 | 10.0 | -12.0 |
| 0x283A | STAT_SIGNALTOLERANZ_QUERBESCHLEUNIGUNG_WERT | m/s² | High | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x283B | STAT_SIGNALTOLERANZ_LAENGSBESCHLEUNIGUNG_WERT | m/s² | High | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x283C | STAT_SIGNALTOLERANZ_GIERRATE_WERT | rad/s | High | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x283D | STAT_SIGNALTOLERANZ_LENKWINKEL_WERT | rad | High | unsigned char | - | 1.0 | 1000.0 | 0.0 |
| 0x283E | STAT_SIGNALTOLERANZ_ROLLRATE_WERT | rad/s | High | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x283F | STAT_SIGNALTOLERANZ_VERTIKALBESCHLEUNIGUNG_WERT | m/s² | High | unsigned char | - | 1.0 | 12.0 | 0.0 |
| 0x2840 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x2841 | STAT_SENSOR_QUERBESCHLEUNIGUNG_2_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2842 | STAT_SENSOR_GIERRATE_2_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x284A | STAT_SOLL_LENKWINKEL_HA_WERT | rad | High | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x284B | STAT_SOLL_LENKWINKEL_HA_QUALIFIER_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x284C | STAT_IST_LENKWINKEL_HA_WERT | rad | High | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x284D | STAT_IST_LENKWINKEL_HA_FEHLERAMPLITUDE_WERT | rad | High | unsigned char | - | 1.0 | 1300.0 | 0.0 |
| 0x284E | STAT_HSR_QUALIFIER_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x284F | STAT_IST_LENKWINKEL_HA_NUTZSIGQUALIFIER_WERT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2853 | STAT_EINGANG_SENSOR_NICKRATE_WERT | rad/s | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2854 | STAT_SIGNALTOLERANZ_NICKRATE_WERT | rad/s | High | unsigned char | - | 1.0 | 300.0 | 0.0 |
| 0x2855 | STAT_SENSOR_NICKRATE_WERT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2863 | USP_STATUS_GENERATORENTLASTUNG | 0-n | High | 0xFF | TAB_ENTLASTUNG_GENERATOR | - | - | - |
| 0x2866 | STAT_BETRIEBSSPANNUNG_WERT | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x2867 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2868 | STAT_GESCHWINDIGKEIT_BEI_GROBOFFSET_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x2869 | STAT_MAX_GESCHWINDIGKEIT_AUFSETZVORGANG_WERT | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x286A | STAT_MAX_QUERBESCHLEUNIGUNG_AUFSETZVORGANG_WERT | m/s² | High | signed char | - | 1.0 | 2.0 | 0.0 |
| 0x286B | STAT_KORREKTUR_MULTITURNS_WERT | - | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x286C | STAT_BELADUNGSINDEX_FINAL_WERT | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x286D | STAT_BELADUNGSINDEX_HOEHENSTAND_VL | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x286E | STAT_BELADUNGSINDEX_HOEHENSTAENDE_HL_WERT | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x286F | STAT_BELADUNGSINDEX_HOEHENSTAND_HR_WERT | - | High | unsigned char | - | 1.0 | 100.0 | -0.2 |
| 0x2870 | SENSOR_VL_STATT_HR_VERWENDET | 0-n | High | 0xFF | TAB_JA_NEIN | - | - | - |
| 0x2876 | FAHRZEUGGESCHWINDIGKEIT_16BIT | m/s | High | signed int | - | 1.0 | 10.0 | 0.0 |
| 0x2877 | WUNSCH_GESCHWINDIGKEIT_FAS_KMPH_ODER_MPH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2878 | WUNSCH_ANTRIEBSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x2879 | WUNSCH_BREMSMOMENT_FAS | Nm | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x288A | STATUS_NETZWERK_ROHDATEN | HEX | High | signed long | - | - | - | - |
| 0x288F | CC_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2890 | BUFFER_ID | HEX | High | unsigned char | - | - | - | - |
| 0x2891 | BUFFER_SIZE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2892 | FILL_LEVEL_BUFFER_0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2893 | FILL_LEVEL_BUFFER_1 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2894 | FILL_LEVEL_BUFFER_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2895 | FILL_LEVEL_BUFFER_3 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2896 | FILL_LEVEL_BUFFER_4 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2897 | FILL_LEVEL_BUFFER_5 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2898 | USP_DTC_URSAECHLICHER_FEHLER_4BYTE | HEX | High | signed long | - | - | - | - |
| 0x28A6 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x28AD | ERROR_ID_EMSLCONDITIONEVALUATOR | 0-n | High | 0xFF | TAB_ERRID_EMSLCONDITIONEVALUATOR | - | - | - |
| 0x28AE | ERROR_DUMP_1_EMSLCONDITIONEVALUATOR | HEX | High | signed long | - | - | - | - |
| 0x28AF | ERROR_DUMP_2_EMSLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28B0 | ERROR_ID_EMELECTRONICHORIZON | 0-n | High | 0xFF | TAB_ERRID_EMELECTRONICHORIZON | - | - | - |
| 0x28B1 | ERROR_DUMP_1_EMELECTRONICHORIZON | HEX | High | signed long | - | - | - | - |
| 0x28B2 | ERROR_DUMP_2_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x28C4 | FUNCTION_ID_ANFORDERER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C5 | STATUS_ANFORDERER | 0-n | High | 0xFF | TAB_STATUS_ANFORDERER | - | - | - |
| 0x28C6 | I_SBS_2VX_DRIVE_STAT | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28C7 | SBS_CONTROL_VX_MAX | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x28C8 | SBS_CONTROL_VX_MIN | km/h | High | unsigned char | - | 2.0 | 1.0 | -100.0 |
| 0x28C9 | SBS_CONTROL_VX_STAT | HEX | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x28CA | R_SBS_3AX_beta | rad | High | signed char | - | 1.0 | 100.0 | 0.0 |
| 0x28CB | DREHZAHL_RAD_VL | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28CC | DREHZAHL_RAD_VR | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28CD | DREHZAHL_RAD_HL | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28CE | DREHZAHL_RAD_HR | rad/s | High | unsigned int | - | 1.0 | 64.0 | -512.0 |
| 0x28F1 | Sub-Tabelle | 0/1 | - | 0xFFFF | - | - | - | - |
| 0x28F2 | SERVICE_ID | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x28F3 | CLIENT_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x28F4 | SVC_PARAMETER | HEX | High | unsigned long | - | - | - | - |
| 0x28FA | ERROR_DUMP_DTC030800 | HEX | High | signed long | - | - | - | - |
| 0x28FB | ERROR_DUMP_DTC030801 | HEX | High | signed long | - | - | - | - |
| 0x28FC | ERROR_DUMP_DTC030802 | HEX | High | signed long | - | - | - | - |
| 0x28FD | ERROR_DUMP_DTC030804 | HEX | High | signed long | - | - | - | - |
| 0x28FF | ERROR_DUMP_DTC030807 | HEX | High | signed long | - | - | - | - |
| 0x2900 | ERROR_DUMP_DTC030808 | HEX | High | signed long | - | - | - | - |
| 0x2901 | ERROR_DUMP_DTC030809 | HEX | High | signed long | - | - | - | - |
| 0x2902 | ERROR_DUMP_DTC03080C | HEX | High | signed long | - | - | - | - |
| 0x2903 | ERROR_DUMP_DTC03080D | HEX | High | signed long | - | - | - | - |
| 0x2904 | ERROR_DUMP_DTC03080E | HEX | High | signed long | - | - | - | - |
| 0x2905 | ERROR_DUMP_DTC03080F | HEX | High | signed long | - | - | - | - |
| 0x2908 | ERROR_DUMP_DTC030812 | HEX | High | signed long | - | - | - | - |
| 0x2909 | ERROR_DUMP_DTC030813 | HEX | High | signed long | - | - | - | - |
| 0x290A | ERROR_DUMP_DTC030814 | HEX | High | signed long | - | - | - | - |
| 0x290B | ERROR_DUMP_DTC030815 | HEX | High | signed long | - | - | - | - |
| 0x290C | ERROR_DUMP_DTC030818 | HEX | High | signed long | - | - | - | - |
| 0x290E | ERROR_DUMP_DTC03081B | HEX | High | signed long | - | - | - | - |
| 0x290F | ERROR_DUMP_DTC03081C | HEX | High | signed long | - | - | - | - |
| 0x2910 | ERROR_DUMP_DTC03081E | HEX | High | signed long | - | - | - | - |
| 0x2911 | ERROR_DUMP_DTC03081F | HEX | High | signed long | - | - | - | - |
| 0x2912 | ERROR_DUMP_DTC030820 | HEX | High | signed long | - | - | - | - |
| 0x2913 | ERROR_DUMP_DTC030850 | HEX | High | signed long | - | - | - | - |
| 0x2914 | ERROR_DUMP_DTC030851 | HEX | High | signed long | - | - | - | - |
| 0x2916 | ZEITPUNKT_BREMSPEDALBETAETIGUNG | s | High | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x2917 | ZEITPUNKT_FAHRPEDAL_RUNTER_ODER_RAUF | s | High | unsigned char | - | 1.0 | 25.0 | 0.0 |
| 0x2918 | DAUER_AKUTWARNUNG | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x2919 | DAUER_ANBREMSEN_STUFE_1 | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x291A | DAUER_ANBREMSEN_STUFE_2 | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x291B | DAUER_AKTIVE_GEFAHRENBREMSUNG | s | High | unsigned char | - | 1.0 | 50.0 | 0.0 |
| 0x291C | ABSTAND_ZO_BEGINN_AKUTWARNUNG | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x291D | ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_1 | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x291E | ABSTAND_ZO_BEGINN_ANBREMSEN_STUFE_2 | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x291F | ABSTAND_ZO_BEGINN_AGB | m | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x2920 | EGO_LAENGSBESCHLEUNIGUNG | m/s² | High | signed char | - | 1.0 | 10.0 | 0.0 |
| 0x2921 | EGO_GESCHWINDIGKEIT_ANBREMSBEGINN | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2922 | EGO_GESCHWINDIGKEIT_ANBREMSENDE | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2923 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x2926 | ERROR_DUMP_DTC03082F | HEX | High | unsigned long | - | - | - | - |
| 0x2927 | CTR_12V_BN_FACT_ENERG_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x2928 | CTR_12V_BN_FACT_PWR_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x2929 | OBD_MUX_FEHLER | HEX | High | unsigned char | - | - | - | - |
| 0x292A | CTR_BN_FACT_ENERG_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x292B | CTR_BN_FACT_PWR_AVAI | % | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x292E | RQRED_GESAMT_DAUER_FAHRZYKLUS | min | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x292F | RQRED_GESAMT_ANTEIL_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 10000.0 | 0.0 |
| 0x2930 | RQRED_ZAEHLER_1_RQ_SQ_HSR_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2931 | RQRED_ZAEHLER_2_RQ_SQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2932 | RQRED_ZAEHLER_3_RQ_SQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2933 | RQRED_ZAEHLER_1_RQ_HSR_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2934 | RQRED_ZAEHLER_2_RQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2935 | RQRED_ZAEHLER_3_RQ_HSR_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2936 | RQRED_ZAEHLER_1_RQ_GMVH_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2937 | RQRED_ZAEHLER_2_RQ_GMVH_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2938 | RQRED_ZAEHLER_3_RQ_GMVH_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2939 | RQRED_ZAEHLER_1_RQ_ARS_LIN_FAHRBEREICH | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x293A | RQRED_ZAEHLER_2_RQ_ARS_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x293B | RQRED_ZAEHLER_3_RQ_ARS_LIN_FAHRBEREICH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x293C | UEBERSETZUNG_EPS | - | High | unsigned int | - | 50.0 | 4096.0 | 0.0 |
| 0x2943 | RGRED_GESAMT_ANTEIL_LIN_FAHRBEREITSCHAFT_REGLEREINGRIFF | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x2944 | MAX_I_SPEC_BAX_STE | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2945 | AVL_I_BAX_STE | A | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x2946 | SOLL_LENKWINKEL_HA_ZFM | rad | High | signed char | - | 1.0 | 2400.0 | 0.0 |
| 0x2947 | QU_FN_HSR | HEX | High | unsigned char | - | - | - | - |
| 0x294C | ZAEHLER_SCHNEEKETTENMODUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x296A | EEPROM_EINZELWERTE_PRUEFERGEBNIS | HEX | High | unsigned long | - | - | - | - |
| 0x4100 | RDC_RE_HERSTELLER | 0-n | High | 0xFF | TAB_RDC_RE_HERSTELLER | - | - | - |
| 0x5004 | ANTRIEBSNETZ | HEX | High | unsigned char | - | - | - | - |
| 0x5006 | BETRIEBSSPANNUNG_PUMPE | V | High | unsigned char | - | 8.0 | 100.0 | 0.0 |
| 0x500B | FUNKTIONSZUSTAND | HEX | High | unsigned int | - | - | - | - |
| 0x500E | DSC_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x500F | DEM_INTERNE_FEHLERNUMMER | HEX | High | unsigned int | - | - | - | - |
| 0x5021 | SPANNUNG_MOTOR_L | V | High | signed int | - | 1.0 | 1000.0 | 0.0 |
| 0x5022 | SPANNUNG_MOTOR_R | V | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5023 | STROM_MOTOR_L | A | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5024 | STROM_MOTOR_R | A | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x5026 | BREMSENSTATUS_LINKS | 0-n | High | 0xF0 | TAB_BREMSENSTATUS_LINKS | - | - | - |
| 0x5027 | BREMSENSTATUS_RECHTS | 0-n | High | 0x0F | TAB_BREMSENSTATUS_RECHTS | - | - | - |
| 0x5028 | SCHALTERSTATUS | 0-n | High | 0xFF | TAB_SCHALTERSTATUS | - | - | - |
| 0x502E | STATUS_HOST_SAFETY_BARRIER | 0-n | High | 0xFF | TAB_STATUS_HOST_SAFETY_BARRIER | - | - | - |
| 0x5033 | LetztesBremsenEvent | 0-n | High | 0xFF | TAB_LETZTESBREMSENEVENT | - | - | - |
| 0x5102 | DEBUGINFO | HEX | High | unsigned int | - | - | - | - |
| 0x5103 | INTERNER_FUNKTIONSSTATUS | HEX | High | unsigned int | - | - | - | - |
| 0x5104 | DEBUGINFO_BAC | HEX | High | unsigned int | - | - | - | - |
| 0x5105 | DEBUGINFO_EXT1 | HEX | High | unsigned long | - | - | - | - |
| 0x5106 | DEBUGINFO_EXT2 | HEX | High | unsigned long | - | - | - | - |
| 0x5107 | ATMOSPHAERENDRUCK | hPa | High | unsigned char | - | 2.0 | 1.0 | 598.0 |
| 0x5108 | ISTDREHZAHL_MOTORKURBELWELLE | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0x5109 | TANDEMHAUPTBREMSZYLINDER_DRUCK | bar | High | signed int | - | 1.0 | 16.0 | 0.0 |
| 0x510A | TANDEMHAUPTBREMSZYLINDER_WEG | mm | High | signed int | - | 1.0 | 256.0 | 0.0 |
| 0x510B | UNTERDRUCK_VAKUUMSENSOR | bar | High | signed int | - | 1.0 | 16384.0 | 0.0 |
| 0x510C | TIMER_DICHTHEIT_BKV | s | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x510D | Unterdruck_BKV_Eintritt_MAS | bar | High | signed int | - | 1.0 | 16384.0 | 0.0 |
| 0x510F | DRUCKSENSOR_ROHDATEN1 | HEX | High | unsigned long | - | - | - | - |
| 0x5110 | DRUCKSENSOR_ROHDATEN2 | HEX | High | unsigned long | - | - | - | - |
| 0x5111 | DRUCKSENSOR_ROHDATEN3 | HEX | High | unsigned long | - | - | - | - |
| 0x5112 | DRUCKSENSOR_ROHDATEN4 | HEX | High | unsigned long | - | - | - | - |
| 0xF402 | DTC that caused required freeze frame data storage | HEX | High | unsigned int | - | - | - | - |
| 0xF404 | Calculated LOAD Value | - | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0xF405 | Engine Coolant Temperature | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0xF40C | Engine RPM | 1/min | High | unsigned int | - | 1.0 | 4.0 | 0.0 |
| 0xF40D | Vehicle Speed Sensor | km/h | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xF411 | Absolute Throttle Position | % | High | unsigned char | - | 100.0 | 255.0 | 0.0 |
| 0xF442 | Control module voltage | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
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

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OS_CPU_LOAD_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Rückgabe der maximalen Systemlast in Prozent |
| STAT_OS_CPU_LOAD_100MS_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Rückgabe der maximalen Systemlast in Prozent |
| STAT_OS_CPU_LOAD_1000MS_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Rückgabe der maximalen Systemlast in Prozent |
| STAT_OS_STATISTIK_KILOMETER_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand bei Auftreten des Sequenz Überlaufs |
| STAT_OS_STATISTIK_RELATIVZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Relativzeit bei Auftreten des Sequenz Überlaufs |
| STAT_OS_STATISTIK_BRAKE_ARBITRATOR_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Status des TRW internen Brake Arbitrators  (U16[4]) |
| STAT_OS_STATISTIK_ANZAHL_SEQUENZUEBERLAEUFE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der maximal aufeinanderfolgenden Sequenzüberläufe |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND | 0-n | high | unsigned char | - | TAB_ZUSTAND | - | - | - | 0 = Pumpe aus 1 = Pumpe vollangesteuert 2 = Pumpe teilangesteuert für EMV-Tests |

### RES_0X4701_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFM_LMV_STATUS | 0-n | high | unsigned char | - | TAB_ZFM_FUNKTIONSSTATUS | - | - | - | Status der Längsmomentenverteilung |
| STAT_ZFM_LMV_MOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Eingestelles Moment der Längsmomentenverteilung |
| STAT_ZFM_GSD_STATUS | 0-n | high | unsigned char | - | TAB_ZFM_FUNKTIONSSTATUS | - | - | - | Status vom geregelten Sperr-Differential |
| STAT_ZFM_GSD_MOMENT_WERT | Nm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Eingestelles Moment vom  geregelten Sperr-Differential |

### RES_0X4707_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RISE_01_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_02_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_03_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_04_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_05_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_06_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_07_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_08_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_09_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_10_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_11_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_12_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_13_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_14_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_15_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_16_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_17_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_18_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_RISE_19_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_01_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_02_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_03_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_04_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_05_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_06_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |
| STAT_FALL_07_TEMP_OFFSET_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Byte 0: Temperatur bei Offsetbestimmung, Byte 1-3: Offset |

### RES_0X5002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RDC_DEVELOPER_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Übergibt einen Multiplex Index Nummer der anhand einer Entwickler Tabelle die Daten entschlüsselt. |
| STAT_RDC_DEVELOPER_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | Entwickler Daten. |

### RES_0X5034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTUATIONCOUNTERLEFT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterLeft |
| STAT_ACTUATIONCOUNTERRIGHT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterRight |
| STAT_ACTUATIONCOUNTERPARKAPPLYDISKTEMPBELOW200_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplyDiskTempBelow200 |
| STAT_ACTUATIONCOUNTERPARKAPPLYDISKTEMP200TO300_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplyDiskTemp200To300 |
| STAT_ACTUATIONCOUNTERPARKAPPLYDISKTEMP300TO400_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplyDiskTemp300To400 |
| STAT_ACTUATIONCOUNTERPARKAPPLYDISKTEMP400TO500_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplyDiskTemp400To500 |
| STAT_ACTUATIONCOUNTERPARKAPPLYDISKTEMP500ANDABOVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplyDiskTemp500AndAbove |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPE00TO05_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlope00to05 |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPE05TO12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlope05to12 |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPE12TO20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlope12to20 |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPE20TO25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlope20to25 |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPE25TO30_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlope25to30 |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPE30ANDABOVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlope30AndAbove |
| STAT_ACTUATIONCOUNTERPARKAPPLYSLOPEINVALID_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApplySlopeInvalid |
| STAT_ACTUATIONCOUNTERPARKAPPLY_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterParkApply |
| STAT_ACTUATIONCOUNTERGEARBOXREQUESTAPPLY_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterGearboxRequestApply |
| STAT_DYNAMICDECELERATIONRWUCOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DynamicDecelerationRwuCounter |
| STAT_DYNAMICDECELERATIONDSDCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DynamicDecelerationDsdCounter |
| STAT_HIGHTEMPERATURERECLAMPCOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | HighTemperatureReclampCounter |
| STAT_ROLLAWAYRECLAMPCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | RollAwayReclampCounter |
| STAT_HYDRAULICPRESSURESUPPORTCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | HydraulicPressureSupportCounter |
| STAT_PROGRESSIVERELEASECOUNTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ProgressiveReleaseCounter |
| STAT_PADWEARADJUSTMENTCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PadWearAdjustmentCounter |
| STAT_MAINTENANCEPOSITIONENTEREDCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MaintenancePositionEnteredCounter |
| STAT_UNEXPECTEDPOWERDOWNCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | UnexpectedPowerDownCounter |
| STAT_ACTUATIONCOUNTEROUTOFSPECAPPLY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActuationCounterOutOfSpecApply |
| STAT_STATISTICDATASWITCHAPPLYCOUNTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | StatisticDataSwitchApplyCounter |
| STAT_STATISTICDATASWITCHRELEASECOUNTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | StatisticDataSwitchReleaseCounter |
| STAT_STATISTICDATAAUTOMATICAPPLYCOUNTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | StatisticDataAutomaticApplyCounter |
| STAT_STATISTICDATAAUTOMATICRELEASECOUNTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | StatisticDataAutomaticReleaseCounter |
| STAT_STATISTICDATAEXTERNALAPPLYCOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatisticDataExternalApplyCounter |
| STAT_STATISTICDATAEXTERNALRELEASECOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatisticDataExternalReleaseCounter |
| STAT_STATISTICDATAROLLERBENCHAPPLYCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatisticDataRollerBenchApplyCounter |
| STAT_STATISTICDATAECDCOUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | StatisticDataEcdCounter |
| STAT_STATISTICDATADYNDECELCOUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | StatisticDataDynDecelCounter |

### RES_0XA051_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA052_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA053_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA05B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_DATEN_SCHREIBEN_AKTIV_NR | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Information ob der Schreibvorgang der Adaptivdaten läuft. |

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
| STAT_GESCHW_RAD_VL_MIN_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne links |
| STAT_GESCHW_RAD_VL_MAX_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne links |
| STAT_GESCHW_RAD_VR_MIN_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit vorne rechts |
| STAT_GESCHW_RAD_VR_MAX_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit vorne rechts |
| STAT_GESCHW_RAD_HL_MIN_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten rechts |
| STAT_GESCHW_RAD_HL_MAX_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten links |
| STAT_GESCHW_RAD_HR_MIN_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | min. Radgeschwindigkeit hinten rechts |
| STAT_GESCHW_RAD_HR_MAX_WERT | - | - | + | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | max. Radgeschwindigkeit hinten rechts |

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

### RES_0XA130_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLM_RESET | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA140_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |
| STAT_DRUCKSENSORKALIBRIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_DRUCKSENSORKALIBRIERUNG | - | - | - | Status Drucksensorkalibrierung |

### RES_0XA155_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |
| STAT_IST_VERTEILUNG_LAENGSMOMENT_WERT | - | - | + | Nm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | IST-Verteilung-Längsmoment  |

### RES_0XA156_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Status Routine |
| STAT_ROUTINE_DETAIL | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE_DETAILS | - | - | - | Detaillierter Status |
| STAT_ANZAHL_DER_VERSUCHE_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Funktionsprüfungsversuche |
| STAT_ANZAHL_DER_ERFOLGREICHEN_TESTS_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erfolgreich durchfeführte Tests |
| STAT_DAUER_DES_LETZTEN_TESTS_WERT | - | - | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dauer des letzten Tests in Sekunden |

### RES_0XA803_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XAB5B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_EEPROM_SICHERN_NR | - | - | + | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der EEPROM Sicherung  0=Sicherung erfolgreich 1= Sicherung läuft |

### RES_0XABA3_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | - | + | 0-n | high | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XD09A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_IST_GMK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GMK-Funktion (abhängig von Qualifiern der Eingänge) |
| STAT_ZUSTAND_SOLL_GMK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Soll-Zustand der GMK-Funktion |
| STAT_MMOTOR_OFFSET_EPS_WERT | Nm | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GMK_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GMK-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_MMOTOR_OFFSET_GMK_EPS_WERT | Nm | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, welches die EPS aufgrund der GMK Funktion zu stellen hat |
| STAT_LENKUNG_VERBAUT_FAHRZEUG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Datensatz EPS ohne IAS (1..ja,0..nein) |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |

### RES_0XD272_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VA_IDENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Identifikation als VA -> Wert = 0x02 |
| STAT_VA_S_SIGNAL_WERT | km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | km-Stand bei Sensorsignal |
| STAT_VA_S_WECHSEL_WERT | km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | km-Stand bei letztem Belagwechsel |
| STAT_VA_S_REST_ORIG_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Restlaufstrecke ohne min- u. max-Beschränkung |
| STAT_VA_S_MIN_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | minimale Restlaufstrecke |
| STAT_VA_S_MAX_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | maximale Restlaufstrecke |
| STAT_VA_S_REST_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Restlaufstrecke |
| STAT_VA_S_GESAMT_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1. Hochrechnung Gesamtlaufstrecke |
| STAT_VA_S_GESAMT_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2. Hochrechnung Gesamtlaufstrecke |
| STAT_VA_S_GESAMT_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3. Hochrechnung Gesamtlaufstrecke |
| STAT_VA_SZ_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Servicezähler |
| - | Bit | high | BITFIELD | - | BF_VA_FLAG_BVA | - | - | - | Bitfield Zustand BVA-Sensor |
| - | Bit | high | BITFIELD | - | BF_VA_RESET_VERHINDERER_1 | - | - | - | Bitfield Resetverhinderer |
| - | Bit | high | BITFIELD | - | BF_VA_RESET_VERHINDERER_2 | - | - | - | Bitfield Resetverhinderer |
| STAT_HA_IDENT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Identifikation als HA -> Wert = 0x06 |
| STAT_HA_S_SIGNAL_WERT | km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | km-Stand bei Sensorsignal |
| STAT_HA_S_WECHSEL_WERT | km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | km-Stand bei letztem Belagwechsel |
| STAT_HA_S_REST_ORIG_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Restlaufstrecke ohne min- u. max-Beschränkung |
| STAT_HA_S_MIN_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | minimale Restlaufstrecke |
| STAT_HA_S_MAX_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | maximale Restlaufstrecke |
| STAT_HA_S_REST_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Restlaufstrecke |
| STAT_HA_S_GESAMT_1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 1. Hochrechnung Gesamtlaufstrecke |
| STAT_HA_S_GESAMT_2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 2. Hochrechnung Gesamtlaufstrecke |
| STAT_HA_S_GESAMT_3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 3. Hochrechnung Gesamtlaufstrecke |
| STAT_HA_SZ_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Servicezähler |
| - | Bit | high | BITFIELD | - | BF_HA_FLAG_BVA | - | - | - | Bitfield Zustand BVA-Sensor |
| - | Bit | high | BITFIELD | - | BF_HA_RESET_VERHINDERER_1 | - | - | - | Bitfield Resetverhinderer |
| - | Bit | high | BITFIELD | - | BF_HA_RESET_VERHINDERER_2 | - | - | - | Bitfield Resetverhinderer |

### RES_0XD6B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GELERNTE_REIBUNG_LENKUNG_1_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 1 |
| STAT_GELERNTE_REIBUNG_LENKUNG_2_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 2 |
| STAT_GELERNTE_REIBUNG_LENKUNG_3_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 3 |
| STAT_GELERNTE_REIBUNG_LENKUNG_4_WERT | Nm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 4 |

### RES_0XD6B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_R0_PLAUSIBILISIERT_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Statischer Radradius |
| STAT_R2_PLAUSIBILISIERT_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dynamischer Radradius |
| STAT_R0_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Klemmenzyklen für gelernten statischer Radradius |
| STAT_R2_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Klemmenzyklen für gelernten dynamischer Radradius |
| STAT_R0_MEAN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlischer statischer Radradius |
| STAT_R2_MEAN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Durchschnittlischer dynamischer Radradius |
| STAT_R0_PLAUSIZEIT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Plausibilisierungszeit für Berechnung statischer Radradius |
| STAT_R2_PLAUSIZEIT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Plausibilisierungszeit für Berechnung dynamischer Radradius |
| STAT_R0_VAR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable statischer Radradius |
| STAT_R2_VAR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Variable dynamischer Radradius |

### RES_0XD6BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RADRADIUS_AUS_GPS_SCHAETZ_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gelernter Radradius aus GPS-Schaetzer |
| STAT_AUFWEITKOEFF_RADRADIUS_AUS_GPS_SCHAETZ_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aufweitkoeffizient für Radradius aus GPS-Schaetzer |
| STAT_GPS_KORREKTUR_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl der nicht gelernten Klemmenzyklen |

### RES_0XD804_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_FESTELLEN_STEIGUNG20_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Feststellen Steigung > 20 % |
| STAT_ZAEHLER_NACHSPANNEN_ROLLUEBERWACHUNG_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachspannen wegen Rollen erkannt |
| STAT_ZAEHLER_NACHSPANNEN_TEMPERATUR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachspannen wegen Temperatur Bremsscheibe |
| STAT_ZAEHLER_AUTO_ADJUST_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl automatische Justage |
| STAT_ZAEHLER_NACHSPANNEN_PRAEVENTIV_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachspannen vorbeugend |
| STAT_RESERVE5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE6_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE7_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE8_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |
| STAT_RESERVE9_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | unbenutzt |

### RES_0XD805_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MOTOR_HL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Motor hinten links |
| STAT_STROM_MOTOR_HL_WERT | A | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Strom Motor hinten links |
| STAT_TEMPERATUR_MOTOR_HL_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur Motor hinten links |
| STAT_SPANNUNG_MOTOR_HR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Motor hinten rechts |
| STAT_STROM_MOTOR_HR_WERT | A | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Strom Motor hinten rechts |
| STAT_TEMPERATUR_MOTOR_HR_WERT | °C | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Temperatur Motor hinten rechts |
| STAT_AKTUATOR_R | 0-n | - | unsigned char | - | TAB_EMF_POSITION | 1.0 | 1.0 | 0.0 | Position Bremsbacken hinten rechts |
| STAT_AKTUATOR_L | 0-n | - | unsigned char | - | TAB_EMF_POSITION | 1.0 | 1.0 | 0.0 | Position Bremsbacken hinten rechts |
| STAT_HU_MODE_STATUS | 0-n | - | unsigned char | - | TAB_EMF_HU_MODE | - | - | - | Status Modus Hauptuntersuchung |

### RES_0XD808_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_TASTER_FESTSTELLEN_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bedienung Feststellen |
| STAT_ZAEHLER_TASTER_LOESEN_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Bedienungen Lösen |

### RES_0XD80A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_AKTUATOR_FESTSTELLEN_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Feststellen |
| STAT_ZAEHLER_AKTUATOR_NOTENTRIEGELN_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Notentriegelung |
| STAT_ZAEHLER_AKTUATOR_BOOST_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nachstellen |
| STAT_ZAEHLER_AKTUATOR_UEBERLAST_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Überlast |

### RES_0XD80B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FESTSTELLKRAFT_IST_HL_WERT | N | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Feststellkraft hinten links |
| STAT_FESTSTELLKRAFT_SOLL_HL_WERT | N | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Feststellkraft Soll hinten links |
| STAT_FESTSTELLKRAFT_LETZTE_HL_WERT | N | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | letzte Feststellkraft hinten links |
| STAT_FESTSTELLKRAFT_IST_HR_WERT | N | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Feststellkraft hinten rechts |
| STAT_FESTSTELLKRAFT_SOLL_HR_WERT | N | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Feststellkraft Soll hinten rechts |
| STAT_FESTSTELLKRAFT_LETZTE_HR_WERT | N | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | letzte Feststellkraft hinten rechts |

### RES_0XD80C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_ELEKTRONIK_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Steuergerät |
| STAT_SPANNUNG_AKUATOR_HL_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Aktuator hinten links |
| STAT_SPANNUNG_AKUATOR_HR_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Aktuator hinten rechts |
| STAT_SPANNUNG_WECKLEITUNG_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Weckleitung |

### RES_0XD80D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_EMF | 0-n | - | unsigned char | - | TAB_EMF_TASTER | - | - | - | Bedienzustand |
| STAT_TASTER_EMF_DIGITAL_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | digitaler Status Taster |
| STAT_TASTER_EMF_1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 1 |
| STAT_TASTER_EMF_2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 2 |
| STAT_TASTER_EMF_3_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 3 |
| STAT_TASTER_EMF_4_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 4 |
| STAT_TASTER_EMF_5_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Taster Leitung 5 |

### RES_0XD80F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1 = aktiv; 0 = nicht aktiv |

### RES_0XD8E5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VENTIL_KORREKTURSTROM_TCISO_KREIS_1_WERT | mA | high | signed int | - | - | 1.0 | 16.777 | 0.0 | Offsetkorrektur der Ventilströme in mA |
| STAT_VENTIL_KORREKTURSTROM_TCISO_KREIS_2_WERT | mA | high | signed int | - | - | 1.0 | 16.777 | 0.0 | Offsetkorrektur der Ventilströme in mA |
| STAT_VENTIL_KORREKTURSTROM_ABSISO_VL_WERT | mA | high | signed int | - | - | 1.0 | 16.777 | 0.0 | Offsetkorrektur der Ventilströme in mA |
| STAT_VENTIL_KORREKTURSTROM_ABSISO_VR_WERT | mA | high | signed int | - | - | 1.0 | 16.777 | 0.0 | Offsetkorrektur der Ventilströme in mA |
| STAT_VENTIL_KORREKTURSTROM_ABSISO_HL_WERT | mA | high | signed int | - | - | 1.0 | 16.777 | 0.0 | Offsetkorrektur der Ventilströme in mA |
| STAT_VENTIL_KORREKTURSTROM_ABSISO_HR_WERT | mA | high | signed int | - | - | 1.0 | 16.777 | 0.0 | Offsetkorrektur der Ventilströme in mA |

### RES_0XD8E7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKT_VERBAUT_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_AKT_VERBAUT | - | - | - | Aktuell verbaut - ja, nein |
| STAT_AKT_POSITION_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position in der codierte Reifentabelle |
| STAT_AKT_BREITE_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 95.0 | Reifen Breite |
| STAT_AKT_QUER_VERH_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 5.0 | 1.0 | 10.0 | Reifen Querschnittsverhältnis |
| STAT_AKT_DURCHMESSER_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 12.0 | Reifen Durchmesser |
| STAT_AKT_TRAGFAEHIGKEIT_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 75.0 | Reifen Tragfähigkeit |
| STAT_AKT_GESCHW_IDX_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_GESCHW_IDX | - | - | - | Reifen Geschwindigkeitsindex |
| STAT_AKT_SAISON_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_SAISON | - | - | - | Reifen Saison |
| STAT_AKT_KARKASSE_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_KARKASSE | - | - | - | Reifen Karkasse |
| STAT_AKT_RUNFLAT_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_RSC | - | - | - | Reifen Technologie |
| STAT_AKT_WERK_VERBAUT_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_WERKSAUSLIEFERUNG | - | - | - | Reifen ab Werksauslieferung: Ja/Nein |
| STAT_AKT_RCP_VA_TB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_AKT_RCP_HA_TB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_AKT_RCP_VA_VB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Vollbeladen oder Geschw. > 160 km/h |
| STAT_AKT_RCP_HA_VB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Vollbeladen oder Geschw. > 160 km/h |
| STAT_AKT_VERBAUT_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_AKT_VERBAUT | - | - | - | Aktuell verbaut |
| STAT_AKT_POSITION_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position in der codierte Reifentabelle |
| STAT_AKT_BREITE_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 95.0 | Reifen Breite |
| STAT_AKT_QUER_VERH_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 5.0 | 1.0 | 10.0 | Reifen Querschnittsverhältnis |
| STAT_AKT_DURCHMESSER_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 12.0 | Reifen Durchmesser |
| STAT_AKT_TRAGFAEHIGKEIT_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 75.0 | Reifen Tragfähigkeit |
| STAT_AKT_GESCHW_IDX_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_GESCHW_IDX | - | - | - | Reifen Geschwindigkeitsindex |
| STAT_AKT_SAISON_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_SAISON | - | - | - | Reifen Saison |
| STAT_AKT_KARKASSE_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_KARKASSE | - | - | - | Reifen Karkasse |
| STAT_AKT_RUNFLAT_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_RSC | - | - | - | Reifen Technologie |
| STAT_AKT_WERK_VERBAUT_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_WERKSAUSLIEFERUNG | - | - | - | Reifen ab Werksauslieferung: Ja/Nein |
| STAT_AKT_RCP_VA_TB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_AKT_RCP_HA_TB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_AKT_RCP_VA_VB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Vollbeladen oder Geschw. > 160 km/h |
| STAT_AKT_RCP_HA_VB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Vollbeladen oder Geschw. > 160 km/h |

### RES_0XD8F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_AKT_VERBAUT_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_AKT_VERBAUT | - | - | - | Aktuell verbaut - ja, nein |
| STAT_ECO_AKT_POSITION_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position in der codierte Reifentabelle |
| STAT_ECO_AKT_BREITE_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 95.0 | Reifen Breite |
| STAT_ECO_AKT_QUER_VERH_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 5.0 | 1.0 | 10.0 | Reifen Querschnittsverhältnis |
| STAT_ECO_AKT_DURCHMESSER_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 12.0 | Reifen Durchmesser |
| STAT_ECO_AKT_TRAGFAEHIGKEIT_SOMMERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 75.0 | Reifen Tragfähigkeit |
| STAT_ECO_AKT_GESCHW_IDX_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_GESCHW_IDX | - | - | - | Reifen Geschwindigkeitsindex |
| STAT_ECO_AKT_SAISON_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_SAISON | - | - | - | Reifen Saison |
| STAT_ECO_AKT_KARKASSE_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_KARKASSE | - | - | - | Reifen Karkasse |
| STAT_ECO_AKT_RUNFLAT_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_RSC | - | - | - | Reifen Technologie |
| STAT_ECO_AKT_WERK_VERBAUT_SOMMERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_WERKSAUSLIEFERUNG | - | - | - | Reifen ab Werksauslieferung: Ja/Nein |
| STAT_ECO_AKT_RCP_VA_TB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Teilbeladen Eco oder Geschwindigkeit kleiner oder = 160 km/h |
| STAT_ECO_AKT_RCP_HA_TB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Teilbeladen Eco oder Geschwindigkeit  kleiner oder = 160 km/h |
| STAT_ECO_AKT_RCP_VA_TB_ECO_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_ECO_AKT_RCP_HA_TB_ECO_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_ECO_AKT_RCP_VA_VB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Vollbeladen oder Geschw. > 160 km/h |
| STAT_ECO_AKT_RCP_HA_VB_SOMMERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Vollbeladen oder Geschw. > 160 km/h |
| STAT_ECO_AKT_VERBAUT_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_AKT_VERBAUT | - | - | - | Aktuell verbaut |
| STAT_ECO_AKT_POSITION_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Position in der codierte Reifentabelle |
| STAT_ECO_AKT_BREITE_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 10.0 | 1.0 | 95.0 | Reifen Breite |
| STAT_ECO_AKT_QUER_VERH_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 5.0 | 1.0 | 10.0 | Reifen Querschnittsverhältnis |
| STAT_ECO_AKT_DURCHMESSER_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 12.0 | Reifen Durchmesser |
| STAT_ECO_AKT_TRAGFAEHIGKEIT_WINTERREIFEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 75.0 | Reifen Tragfähigkeit |
| STAT_ECO_AKT_GESCHW_IDX_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_GESCHW_IDX | - | - | - | Reifen Geschwindigkeitsindex |
| STAT_ECO_AKT_SAISON_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_SAISON | - | - | - | Reifen Saison |
| STAT_ECO_AKT_KARKASSE_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_KARKASSE | - | - | - | Reifen Karkasse |
| STAT_ECO_AKT_RUNFLAT_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_RSC | - | - | - | Reifen Technologie |
| STAT_ECO_AKT_WERK_VERBAUT_WINTERREIFEN | 0-n | high | unsigned char | - | TAB_ERFS_WERKSAUSLIEFERUNG | - | - | - | Reifen ab Werksauslieferung: Ja/Nein |
| STAT_ECO_AKT_RCP_VA_TB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_ECO_AKT_RCP_HA_TB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Teilbeladen oder Geschw. <= 160 km/h |
| STAT_ECO_AKT_RCP_VA_TB_ECO_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Teilbeladen Eco oder Geschwindigkeit kleiner oder = 160 km/h |
| STAT_ECO_AKT_RCP_HA_TB_ECO_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Teilbeladen Eco oder Geschwindigkeit  kleiner oder = 160 km/h |
| STAT_ECO_AKT_RCP_VA_VB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Vorderachse Vollbeladen oder Geschw. > 160 km/h |
| STAT_ECO_AKT_RCP_HA_VB_WINTERREIFEN_WERT | bar | high | unsigned char | - | - | 1.0 | 10.0 | 2.0 | Solldruck Hinterachse Vollbeladen oder Geschw. > 160 km/h |

### RES_0XD9D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KMAIN_WERT | HEX | high | unsigned int | - | - | - | - | - | Kmain |
| STAT_KSUB_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | KSub |
| STAT_KCONFIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | KConfig |
| STAT_KCCID_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | KCcId |
| STAT_KEXT_WERT | HEX | high | unsigned int | - | - | - | - | - | KExt |
| STAT_VMAIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VMain |
| STAT_VSUB_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VSub  |
| STAT_VRELEASE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VRelease |
| STAT_VPATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | VPatch |

### RES_0XDAF0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PAL_AKTUELL | 0-n | high | unsigned char | - | TAB_PAL_STATUS | - | - | - | Aktuelle PAL Status |
| STAT_PAL_ACHSE_LETZTER_ZYKLUS | 0-n | high | unsigned char | - | TAB_AXLE_RESULT | - | - | - | Achse Status letzter PAL Zyklus |
| STAT_PAL_ANZAHL_NOK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl PAL n.i.O. Zyklen. Beim PAL i.O. auf 0 gesetzt. |
| STAT_PAL_ANZAHL_LOCATE_FAIL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl PAL nicht lokalisiert Zyklen. Beim PAL i.O. auf 0 gesetzt. |
| STAT_PAL_HISTORIE_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | FIFO Puffer PAL n.i.O Historie mit 10 Einträge. 0x00  Success - located by merit 0x01  Success - located with 1 WU placed 0x02  Success - located by best fit 0x03  Learn fail - Zero Learnt 0x04  Learn fail - One Learnt 0x05  Learn fail - Two Learnt 0x06  Learn fail - Three Learnt 0x07  Locate fail - ABS Error 0x08  Locate fail - Max Speed Exceeded 0x09  Locate fail - Locate Data 0xFF  Undefined |
| STAT_PAL_RE1_IDENTIFIER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RE Seriennummer |
| STAT_PAL_RE1_PACKET_ID_WERT | HEX | high | unsigned char | - | - | - | - | - | RE AK-RDK Packet ID |
| STAT_PAL_RE1_LETZTER_RF_FUNCTION_CODE_BASIS_STATE | 0-n | high | unsigned char | - | TAB_RF_BASIS_STATE | - | - | - | Letzter RF Function Code Basis State |
| STAT_PAL_RE1_LETZTER_RF_FUNCTION_CODE_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter RF Function Code Block Anzahl |
| STAT_PAL_RE1_LETZTER_RF_FUNCTION_CODE_TX_TRIGGER | 0-n | high | unsigned char | - | TAB_RF_TX_TRIGGER | - | - | - | Letzter RF Function Code Sendungstrigger |
| STAT_PAL_RE1_LETZTER_RF_FUNCTION_CODE_BATTERIE_STATUS | 0-n | high | unsigned char | - | TAB_RF_BATTERIE_STATUS | - | - | - | Letzter RF Function Code Batterie Status |
| STAT_PAL_RE1_LETZTER_RF_FUNCTION_CODE_LTS | 0-n | high | unsigned char | - | TAB_RF_LTS | - | - | - | Letzter RF Function Code Parkdauer |
| STAT_PAL_RE1_ANZAHL_EMPFANGENE_RF_FRAMES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl empfangene RF Frames in letzte Sendung |
| STAT_PAL_RE1_RSSI_MITTELWERT_WERT | dBm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | RSSI Mittelwert |
| STAT_PAL_RE1_BATTERIE_UNTERSPANNUNG_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Km Stand beim Batterie Uterspannung Warnung |
| STAT_PAL_RE1_BATTERIE_UNTERSPANNUNG_AUSSENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Aussentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE1_BATTERIE_UNTERSPANNUNG_REIFENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Reifentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE1_AKTUELLE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Aktuelle RE Position |
| STAT_PAL_RE1_LETZTE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Letzte RE Position |
| STAT_PAL_RE1_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_WU_STATUS | - | - | - | Aktuelle RE Status |
| STAT_PAL_RE1_WARNUNGEN | 0-n | high | unsigned char | - | TAB_WU_PREWARN_WARN_STATUS | - | - | - | Aktuelle Warnungen für RE |
| STAT_PAL_RE1_PROZENT_CORR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl RF Blocks mit gueltige Korrelation bit seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE1_PROZENT_NOK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl PAL Zyklen n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE1_ANZAHL_NOK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Lokalisierung n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE1_NOK_HISTORIE_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | FIFO Puffer PAL n.i.O Historie mit 10 Einträge. 0x00 RE Plaziert 0x01 Null Angelernt 0x02 Einz Angelernt 0x03 Zwei Angelernt 0x04 Drei Angelernt 0x05 ABS Fehler 0x06 Max. Geschw. Ueberschritten 0x07 Lokalisierungsdaten 0xFF Undefiniert |
| STAT_PAL_RE1_LLA_STATUS_LETZTER_ZYKLUS | 0-n | high | unsigned char | - | TAB_LLA_STATUS | - | - | - | LLA Staus letzter PAL Zyklus |
| STAT_PAL_RE1_LEARN_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anlernblöcke bei der PAL Ende im letzten Zyklus |
| STAT_PAL_RE1_ANZAHL_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit gueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE1_ANZAHL_NO_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit ungueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE1_ANZAHL_ANDERE_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE1_COIN_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert letzter PAL Zyklus |
| STAT_PAL_RE1_COIN_VL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE1_COIN_VR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE1_COIN_HR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE1_COIN_HL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_IDENTIFIER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RE Seriennummer |
| STAT_PAL_RE2_PACKET_ID_WERT | HEX | high | unsigned char | - | - | - | - | - | RE AK-RDK Packet ID |
| STAT_PAL_RE2_LETZTER_RF_FUNCTION_CODE_BASIS_STATE | 0-n | high | unsigned char | - | TAB_RF_BASIS_STATE | - | - | - | Letzter RF Function Code Basis State |
| STAT_PAL_RE2_LETZTER_RF_FUNCTION_CODE_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter RF Function Code Block Anzahl |
| STAT_PAL_RE2_LETZTER_RF_FUNCTION_CODE_TX_TRIGGER | 0-n | high | unsigned char | - | TAB_RF_TX_TRIGGER | - | - | - | Letzter RF Function Code Sendungstrigger |
| STAT_PAL_RE2_LETZTER_RF_FUNCTION_CODE_BATTERIE_STATUS | 0-n | high | unsigned char | - | TAB_RF_BATTERIE_STATUS | - | - | - | Letzter RF Function Code Batterie Status |
| STAT_PAL_RE2_LETZTER_RF_FUNCTION_CODE_LTS | 0-n | high | unsigned char | - | TAB_RF_LTS | - | - | - | Letzter RF Function Code Parkdauer |
| STAT_PAL_RE2_ANZAHL_EMPFANGENE_RF_FRAMES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl empfangene RF Frames in letzte Sendung |
| STAT_PAL_RE2_RSSI_MITTELWERT_WERT | dBm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | RSSI Mittelwert |
| STAT_PAL_RE2_BATTERIE_UNTERSPANNUNG_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Km Stand beim Batterie Uterspannung Warnung |
| STAT_PAL_RE2_BATTERIE_UNTERSPANNUNG_AUSSENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Aussentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE2_BATTERIE_UNTERSPANNUNG_REIFENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Reifentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE2_AKTUELLE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Aktuelle RE Position |
| STAT_PAL_RE2_LETZTE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Letzte RE Position |
| STAT_PAL_RE2_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_WU_STATUS | - | - | - | Aktuelle RE Status |
| STAT_PAL_RE2_WARNUNGEN | 0-n | high | unsigned char | - | TAB_WU_PREWARN_WARN_STATUS | - | - | - | Aktuelle Warnungen für RE |
| STAT_PAL_RE2_PROZENT_CORR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl RF Blocks mit gueltige Korrelation bit seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE2_PROZENT_NOK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl PAL Zyklen n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE2_ANZAHL_NOK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Lokalisierung n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE2_NOK_HISTORIE_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | FIFO Puffer PAL n.i.O Historie mit 10 Einträge. 0x00 RE Plaziert 0x01 Null Angelernt 0x02 Einz Angelernt 0x03 Zwei Angelernt 0x04 Drei Angelernt 0x05 ABS Fehler 0x06 Max. Geschw. Ueberschritten 0x07 Lokalisierungsdaten 0xFF Undefiniert |
| STAT_PAL_RE2_LLA_STATUS_LETZTER_ZYKLUS | 0-n | high | unsigned char | - | TAB_LLA_STATUS | - | - | - | LLA Staus letzter PAL Zyklus |
| STAT_PAL_RE2_LEARN_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anlernblöcke bei der PAL Ende im letzten Zyklus |
| STAT_PAL_RE2_ANZAHL_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit gueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_ANZAHL_NO_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit ungueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_ANZAHL_ANDERE_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_COIN_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert letzter PAL Zyklus |
| STAT_PAL_RE2_COIN_VL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_COIN_VR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_COIN_HR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE2_COIN_HL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_IDENTIFIER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RE Seriennummer |
| STAT_PAL_RE3_PACKET_ID_WERT | HEX | high | unsigned char | - | - | - | - | - | RE AK-RDK Packet ID |
| STAT_PAL_RE3_LETZTER_RF_FUNCTION_CODE_BASIS_STATE | 0-n | high | unsigned char | - | TAB_RF_BASIS_STATE | - | - | - | Letzter RF Function Code Basis State |
| STAT_PAL_RE3_LETZTER_RF_FUNCTION_CODE_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter RF Function Code Block Anzahl |
| STAT_PAL_RE3_LETZTER_RF_FUNCTION_CODE_TX_TRIGGER | 0-n | high | unsigned char | - | TAB_RF_TX_TRIGGER | - | - | - | Letzter RF Function Code Sendungstrigger |
| STAT_PAL_RE3_LETZTER_RF_FUNCTION_CODE_BATTERIE_STATUS | 0-n | high | unsigned char | - | TAB_RF_BATTERIE_STATUS | - | - | - | Letzter RF Function Code Batterie Status |
| STAT_PAL_RE3_LETZTER_RF_FUNCTION_CODE_LTS | 0-n | high | unsigned char | - | TAB_RF_LTS | - | - | - | Letzter RF Function Code Parkdauer |
| STAT_PAL_RE3_ANZAHL_EMPFANGENE_RF_FRAMES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl empfangene RF Frames in letzte Sendung |
| STAT_PAL_RE3_RSSI_MITTELWERT_WERT | dBm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | RSSI Mittelwert |
| STAT_PAL_RE3_BATTERIE_UNTERSPANNUNG_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Km Stand beim Batterie Uterspannung Warnung |
| STAT_PAL_RE3_BATTERIE_UNTERSPANNUNG_AUSSENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Aussentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE3_BATTERIE_UNTERSPANNUNG_REIFENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Reifentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE3_AKTUELLE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Aktuelle RE Position |
| STAT_PAL_RE3_LETZTE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Letzte RE Position |
| STAT_PAL_RE3_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_WU_STATUS | - | - | - | Aktuelle RE Status |
| STAT_PAL_RE3_WARNUNGEN | 0-n | high | unsigned char | - | TAB_WU_PREWARN_WARN_STATUS | - | - | - | Aktuelle Warnungen für RE |
| STAT_PAL_RE3_PROZENT_CORR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl RF Blocks mit gueltige Korrelation bit seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE3_PROZENT_NOK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl PAL Zyklen n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE3_ANZAHL_NOK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Lokalisierung n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE3_NOK_HISTORIE_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | FIFO Puffer PAL n.i.O Historie mit 10 Einträge. 0x00 RE Plaziert 0x01 Null Angelernt 0x02 Einz Angelernt 0x03 Zwei Angelernt 0x04 Drei Angelernt 0x05 ABS Fehler 0x06 Max. Geschw. Ueberschritten 0x07 Lokalisierungsdaten 0xFF Undefiniert |
| STAT_PAL_RE3_LLA_STATUS_LETZTER_ZYKLUS | 0-n | high | unsigned char | - | TAB_LLA_STATUS | - | - | - | LLA Staus letzter PAL Zyklus |
| STAT_PAL_RE3_LEARN_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anlernblöcke bei der PAL Ende im letzten Zyklus |
| STAT_PAL_RE3_ANZAHL_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit gueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_ANZAHL_NO_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit ungueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_ANZAHL_ANDERE_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_COIN_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert letzter PAL Zyklus |
| STAT_PAL_RE3_COIN_VL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_COIN_VR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_COIN_HR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE3_COIN_HL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_IDENTIFIER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RE Seriennummer |
| STAT_PAL_RE4_PACKET_ID_WERT | HEX | high | unsigned char | - | - | - | - | - | RE AK-RDK Packet ID |
| STAT_PAL_RE4_LETZTER_RF_FUNCTION_CODE_BASIS_STATE | 0-n | high | unsigned char | - | TAB_RF_BASIS_STATE | - | - | - | Letzter RF Function Code Basis State |
| STAT_PAL_RE4_LETZTER_RF_FUNCTION_CODE_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter RF Function Code Block Anzahl |
| STAT_PAL_RE4_LETZTER_RF_FUNCTION_CODE_TX_TRIGGER | 0-n | high | unsigned char | - | TAB_RF_TX_TRIGGER | - | - | - | Letzter RF Function Code Sendungstrigger |
| STAT_PAL_RE4_LETZTER_RF_FUNCTION_CODE_BATTERIE_STATUS | 0-n | high | unsigned char | - | TAB_RF_BATTERIE_STATUS | - | - | - | Letzter RF Function Code Batterie Status |
| STAT_PAL_RE4_LETZTER_RF_FUNCTION_CODE_LTS | 0-n | high | unsigned char | - | TAB_RF_LTS | - | - | - | Letzter RF Function Code Parkdauer |
| STAT_PAL_RE4_ANZAHL_EMPFANGENE_RF_FRAMES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl empfangene RF Frames in letzte Sendung |
| STAT_PAL_RE4_RSSI_MITTELWERT_WERT | dBm | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | RSSI Mittelwert |
| STAT_PAL_RE4_BATTERIE_UNTERSPANNUNG_KM_STAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Km Stand beim Batterie Uterspannung Warnung |
| STAT_PAL_RE4_BATTERIE_UNTERSPANNUNG_AUSSENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Aussentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE4_BATTERIE_UNTERSPANNUNG_REIFENTEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Reifentemperatur beim Batterie Uterspannung Warnung |
| STAT_PAL_RE4_AKTUELLE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Aktuelle RE Position |
| STAT_PAL_RE4_LETZTE_POSITION | 0-n | high | unsigned char | - | TAB_WU_POSITION | - | - | - | Letzte RE Position |
| STAT_PAL_RE4_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_WU_STATUS | - | - | - | Aktuelle RE Status |
| STAT_PAL_RE4_WARNUNGEN | 0-n | high | unsigned char | - | TAB_WU_PREWARN_WARN_STATUS | - | - | - | Aktuelle Warnungen für RE |
| STAT_PAL_RE4_PROZENT_CORR_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl RF Blocks mit gueltige Korrelation bit seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE4_PROZENT_NOK_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Prozentzahl PAL Zyklen n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE4_ANZAHL_NOK_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Lokalisierung n.i.O. seit RE auf aktuelle Position plaziert |
| STAT_PAL_RE4_NOK_HISTORIE_DATA | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | FIFO Puffer PAL n.i.O Historie mit 10 Einträge. 0x00 RE Plaziert 0x01 Null Angelernt 0x02 Einz Angelernt 0x03 Zwei Angelernt 0x04 Drei Angelernt 0x05 ABS Fehler 0x06 Max. Geschw. Ueberschritten 0x07 Lokalisierungsdaten 0xFF Undefiniert |
| STAT_PAL_RE4_LLA_STATUS_LETZTER_ZYKLUS | 0-n | high | unsigned char | - | TAB_LLA_STATUS | - | - | - | LLA Staus letzter PAL Zyklus |
| STAT_PAL_RE4_LEARN_BLOCK_COUNT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Anlernblöcke bei der PAL Ende im letzten Zyklus |
| STAT_PAL_RE4_ANZAHL_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit gueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_ANZAHL_NO_CORR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks mit ungueltige Korrelation bit in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_ANZAHL_ANDERE_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl RF Blocks in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_COIN_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert letzter PAL Zyklus |
| STAT_PAL_RE4_COIN_VL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VL in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_COIN_VR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert VR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_COIN_HR_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HR in den letzten abgeschlossenen PAL Zyklus |
| STAT_PAL_RE4_COIN_HL_LETZTER_ZYKLUS_WERT | - | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | COIN Wert HL in den letzten abgeschlossenen PAL Zyklus |

### RES_0XDB39_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASCWBAS_ANZAHL_AGB_AUSLOESUNGEN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anzahl Ausloesungen Gefahrenbremsung |
| STAT_FASCWBAS_KILOMETERSTAND_BEI_AGB_ZAEHLERRESET_WERT | km | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Reset der 'Anzahl AGB Ausloesungen' |

### RES_0XDB4C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_START1_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Start 1 Snapshot time |
| STAT_START1_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s  /bit |
| STAT_START1_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_START_STATE | - | - | - | Start 1 Snapshot state 0 = kein Eintrag 1 = Bremse genutzt |
| STAT_STOP1_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stop 1 Snapshot time |
| STAT_STOP1_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s  /bit |
| STAT_STOP1_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_STOP_STATE | - | - | - | Start 1 Snapshot state 0 = kein Eintrag 1 = Bremse genutzt |
| STAT_START2_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Start 2 Snapshot time |
| STAT_START2_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s  /bit |
| STAT_START2_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_START_STATE | - | - | - | Start 2 Snapshot state 0 = kein Eintrag 1 = Bremse genutzt |
| STAT_STOP2_SNAPSHOT_TIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Stop 2 Snapshot time |
| STAT_STOP2_SNAPSHOT_SPEED_WERT | m/s | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | speed: 1/128 m/s = 0.0078125 m/s  /bit |
| STAT_STOP2_SNAPSHOT_STATE | 0-n | high | unsigned char | - | TAB_PCIB_STOP_STATE | - | - | - | Start 2 Snapshot state 0 = kein Eintrag 1 = Bremse genutzt |
| STAT_ZAEHLER_GESAMT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtzähler |
| STAT_ZAEHLER_ZUENDUNGSZUEKLUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler Zündungszüklus |

### RES_0XDBD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GIERRATE_SENSOR_WERT | °/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Gierrate. Gemittelter Wert aus SBS für Sensor 1 und 2. |
| STAT_GIERRATE_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Querbeschleunigung (Gemittelter Wert Sensor 1 und 2) |
| STAT_QUERBESCHLEUNIGUNG_SENSOR_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor |

### RES_0XDBDB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Längsbeschleunigung Sensor 1 |
| STAT_LAENGSBESCHLEUNIGUNG_SENSOR1_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung Sensor 1 |

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
| STAT_GESCHWINDIGKEIT_RAD_VL_WERT | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne links |
| STAT_GESCHWINDIGKEIT_RAD_VR_WERT | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit vorne rechts |
| STAT_GESCHWINDIGKEIT_RAD_HL_WERT | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten links |
| STAT_GESCHWINDIGKEIT_RAD_HR_WERT | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Radgeschwindigkeit hinten rechts |
| STAT_GESCHWINDIGKEIT_FZG_WERT | km/h | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Fahrzeuggeschwindigkeit |
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
| STAT_DRUCK_KREIS1_WERT | bar | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Druck Kreis 1 LG, 35up, LG-X: Bremsvordruck;  LU/LI: Bremsvordruck (THZ-Tandem-Hauptbremszylinder) |
| STAT_DRUCK_KREIS2_WERT | bar | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Druck Kreis 2 |
| STAT_DRUCK_HL_WERT | bar | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Druck hinten links LG, 35up, LG-X: Kreis2 (HA);  I12/F4xPHEV Kreis2 (VR/HL);  UKL/I01 unbelegt |
| STAT_DRUCK_VR_WERT | bar | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Druck vorne rechts LG, 35up, LG-X, LU/LI: unbelegt |
| STAT_DRUCK_VL_WERT | bar | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Druck vorne links LG, 35up, LG-X: Kreis1 (VA);  I12/F4xPHEV Kreis1 (VL/HR);  UKL/I01 unbelegt |
| STAT_DRUCK_HR_WERT | bar | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Druck hinten rechts LG, 35up, LG-X, LU/LI: unbelegt |

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
| STAT_DRUCK_IST_WERT | bar | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | aktueller Druck |
| STAT_SPANNUNG_IST_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | aktuelle Spannung |

### RES_0XDBF5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WEG_IST_WERT | mm | - | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller Pedalweg (bezogen auf WEG_NULLPUNKT_IST) |
| STAT_WEG_NULLPUNKT_INIT_WERT | mm | - | signed int | - | - | 1.0 | 100.0 | 0.0 | Initialisierung Pedal Nullpunkt |
| STAT_WEG_NULLPUNKT_IST_WERT | mm | - | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller Pedal Nullpunkt |
| STAT_WEG_LEERWEG_IST_WERT | mm | - | signed int | - | - | 1.0 | 100.0 | 0.0 | aktueller Pedal Leerweg (Einsatz Hydraulik bezogen auf WEG_NULLPUNKT_IST) |

### RES_0XDBF6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOMENT_SOLL_WERT | Nm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Bremsrekuperation |
| STAT_MOMENT_IST_WERT | Nm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Istwert Bremsrekuperation |

### RES_0XDBFE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORLAGEWINKEL_ISTWERT_HSR_GRAD_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Istwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_ISTWERT_SR_QUALIFIER_NR | 0-n | - | signed char | - | TAB_SBS_GUELTIGKEIT_CHAR | - | - | - | Beurteilung des HSR Motorlagewinkel Istwert 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig |
| STAT_HSR_SERVICEQUALIFIER_NR | 0-n | - | signed char | - | TAB_OPERATINGSYSTEM_ICM_HSR | - | - | - | Beurteilung des HSR Service qualifier: 33 -- > Drive Standby  34 -- > Drive 49 -- > Drive Standby, USW1 53 -- > Drive Standby, USW2  57 -- > Drive Standby, USW3 54 -- > Drive, USW1 50 -- > Drive, USW2 58 -- > Drive, USW3 104 -- > Error 128 -- > Initialisierung 224 -- > Postrun 225 -- > ReadyforDrive 227 -- > Drive_RampZero 228 -- > WaitForRLWSet 233 -- > ReadyForDrive Unterspannung 235 -- > Drive_RampZero Unterspannung 255 -- > Invalid |
| STAT_HSR_SERVICEQUALIFIER_MLW_IST_NR | 0-n | - | signed char | - | TAB_SBS_GUELTIGKEIT_CHAR | - | - | - | Beurteilung des MLW Istwert Service qualifier: 0 -- > Initialisierung 1 -- > Signalwert ist gueltig und abgesichert 2 -- > Signal ist gueltig 3 -- > Signal ist nicht vertrauenswuerdig 4 -- > Ersatzwert ist im Nutzsignal gesetzt 5 -- > Signal zu oft entprellt 6 -- > Signalwert ist ungueltig 7 -- > Sensor nicht vorhanden oder Signal ungueltig |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_GRAD_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Motorlagewinkel Absoult Sollwert in Grad Quantisierung: ( (PH) = 0,04395 * (HEX) [rad] ) Skalierungsfaktor: ( (PH)[grad] = 180 / 3.141592 * (HEX) ) Wertebereich: ( -1440 grad...+1440 grad ) |
| STAT_MOTORLAGEWINKEL_SOLLWERT_HSR_QUALIFIER_NR | 0-n | - | signed char | - | TAB_HSR_QUAL | - | - | - | Qualifier für MLW von HSR |
| STAT_ZFMDKVQ_I_ZS_HSRGIERKOMP_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_I_ZS_HSRFKT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKRQ_I_ZS_RQ_HSR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKSQ_I_ZS_SQ_HSR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMDKVQ_B_LWHA_STG_UMG_FMP_S2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_I_HSR_AKT_ZST_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC13_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTIVDATEN_RUECKSETZEN_AJ_DATA | DATA | - | data[2] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten Grundeinstellung gesetzt |
| STAT_ADAPTIVDATEN_RUECKSETZEN_NR | 0-n | - | signed int | - | TAB_ADAPTIVDATEN_RESET | - | - | - | Adaptivdaten Grundeinstellung gesetzt |
| STAT_AX_AY_ABGLEICH_AJ_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_AX_AY_ABGLEICH_NR | 0-n | - | signed char | - | TAB_AX_AY_ABGLEICH | - | - | - | Ablgeich Beschleunigungssensoren erfolgt |
| STAT_ADAPTIVDATEN_WERKSMODUS_AJ_DATA | DATA | - | data[2] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_WERKSMODUS_NR | 0-n | - | signed char | - | TAB_ADAPTIVDATEN_WERK | - | - | - | Adaptivdaten Werkseinstellung gesetzt |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_AJ_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Adaptivdaten im Lernbereich |
| STAT_ADAPTIVDATEN_LERNWERTE_AKTIV_NR | 0-n | - | signed char | - | TAB_ADAPTIVDATEN_LERNEN | - | - | - | Adaptivdaten im Lernbereich |

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

### RES_0XDC24_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VX_FS_QUAL | 0-n | - | signed char | - | - | 1.0 | 1.0 | 0.0 | VX Qualifier |
| STAT_REFERENZGESCHWINDIGKEIT_VX_WERT | km/h | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VX - Fahrzeugreferenzgeschwindigkeit |
| STAT_ZFMFS_I_FAHRZUSTAND | 0-n | - | signed char | - | TAB_FAHRZUSTAND | - | - | - | Fahrzustand |
| STAT_ZFMABLEN_HSR_STAT_ASG_AKTIV | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_HSR_STAT_ZSTACTDIAG_AKTIV | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ZFMABLEN_HSR_ACTDIAG_FREIGABE_AKTIV | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0XDC2A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NICKRATE_WERT | °/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Nickrate |
| STAT_NICKRATE_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung |

### RES_0XDC33_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WANKRATE_WERT | °/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Wankrate |
| STAT_WANKRATE_NR | 0-n | - | unsigned int | - | TAB_SBS_GUELTIGKEIT_UINT | - | - | - | Plausibilisierung |

### RES_0XDC3A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAKTORU_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Lenkunterstützung der EPS beeinflusst |
| STAT_FAKTORARD_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR die Dämpfung der EPS beinflusst |
| STAT_FAKTORARZ_EPS_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | Faktor, über den die GBR den aktiven Rücklauf der EPS beeinflusst |
| STAT_MMOTOR_OFFSET_EPS_WERT | - | high | signed char | - | - | 1.0 | 100.0 | 0.0 | Offset-Motormoment, das die EPS dem eigenen Motormoment additiv überlagert |
| STAT_FAKTOR_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zu den 3 Faktoren (2 = umsetzen, 14 = nicht umsetzen) |
| STAT_OFFSET_EPS_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sollwert-Qualifier zum OffsetMotormoment (2 = umsetzen; 14 = nicht umsetzen) |
| STAT_FUNKTION_GBR_CODIERUNG_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | GBR-Funktion (1 = eincodiert; 0 = auscodiert) |
| STAT_FUNKTION_GBR_KENNLINIE_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktiver GBR Kennliniensatz |
| STAT_EPS_FAKT_MOM_SERVICE_QUALIFIER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Service-Qualifier der EPS für Umsetzung der Faktoren und des Offset-Motormoments (alles i.O wenn 32 od 33) |
| STAT_ZUSTAND_GRENZBEREICHSREUCKMELDUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ist-Zustand der GBR-Funktion (abhängig von Qualifiern der Eingänge) |

### RES_0XDC6C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABS_FUNKTION | 0-n | high | unsigned char | - | TAB_ABS_FUNKTION | 1.0 | 1.0 | 0.0 | Status Funktion Antiblockiersystem (ABS) |
| STAT_ABS_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Basis Qualifier Funktion Antiblockiersystem (ABS) |
| STAT_ABS_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erweiterter Qualifier Funktion Antiblockiersystem (ABS) |

### RES_0XDC6D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASC_FUNKTION | 0-n | high | unsigned char | - | TAB_ASC_FUNKTION | 1.0 | 1.0 | 0.0 | Status Funktion Antriebsschlupfregelung (ASC) |
| STAT_ASC_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Basis Qualifier Funktion Antriebsschlupfregelung (ASC) |
| STAT_ASC_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erweiterter Qualifier Funktion Antriebsschlupfregelung (ASC) |

### RES_0XDC6E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FDR_FUNKTION | 0-n | high | unsigned char | - | TAB_FDR_FUNKTION | 1.0 | 1.0 | 0.0 | Status Funktion Fahrzeugstabilisierung (FDR) |
| STAT_FDR_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Basis Qualifier Funktion Fahrzeugstabilisierung (FDR) |
| STAT_FDR_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erweiterter Qualifier Funktion Fahrzeugstabilisierung (FDR) |

### RES_0XDC70_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HDC_FUNKTION | 0-n | high | unsigned char | - | TAB_HDC_FUNKTION | 1.0 | 1.0 | 0.0 | Status Funktion Bergabfahrassistent (HDC) |
| STAT_HDC_FUNKTION_QUALIFIER_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Basis Qualifier Funktion Bergabfahrassistent (HDC) |
| STAT_HDC_FUNKTION_QUALIFIER_ERW_WERT | HEX | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Erweiterter Qualifier Funktion Bergabfahrassistent (HDC) |

### RES_0XDC95_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EIGENRAEDER_BEKANNT | 0-n | high | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | - | - | - | Status Eigenräder |
| STAT_RADPOS_ER_BEKANNT | 0-n | high | unsigned char | - | TAB_RDC_BEKANNT_NICHT_BEKANNT | - | - | - | Status Radposition der Eigenräder |
| STAT_DTC_INACTIVE | 0-n | high | unsigned char | - | TAB_RDC_DTC_ACTIVE | - | - | - | Status DTC Fehler mit Warnlampe im Fehlerspeicher. |
| STAT_KAL_ANFORDERUNG_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_CAL_ACTIVE | - | - | - | Status Kalibrieranforderung. |
| STAT_RAD_ZUORDNUNG_TIMEOUT | 0-n | high | unsigned char | - | TAB_RDC_TIMEOUT | - | - | - | Status Radzuordnung Timeout |
| STAT_BANDMODE_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_BANDMODE_ACTIVE | - | - | - | Status Bandmode. |
| STAT_TEST_EIGENRAD_FAHRT | 0-n | high | unsigned char | - | TAB_RDC_STARTED | - | - | - | Status Test-Eigenraderkennung in Fahrt. |
| STAT_ER_FAHRT_VTHRS_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Geschwindigkeitsschwelle fuer Eigenraderkennung bei Fahrt aktiviert. |
| STAT_BM_TIMEOUT_ACTIVE | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Bandmode Timeout laeuft. |
| STAT_HARTE_WARNUNG_UNSPEZIFISCH_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Harte Warnung unspezifisch |
| STAT_HARTE_WARNUNG_VL_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Harte Warnung vorn links |
| STAT_HARTE_WARNUNG_VR_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Harte Warnung vorn rechts |
| STAT_HARTE_WARNUNG_HL_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Harte Warnung hinten links |
| STAT_HARTE_WARNUNG_HR_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_ZUSTAND | - | - | - | Status Harte Warnung hinten rechts |
| STAT_KL_15_EIN | 0-n | high | unsigned char | - | TAB_RDC_ON_OFF | - | - | - | Status Klemme 15 |
| STAT_FZG_FAEHRT | 0-n | high | unsigned char | - | TAB_RDC_VEHICLE_RUNNING | - | - | - | Status Fahrzeug fährt |
| STAT_ERKENNUNG_ALLE_RE | 0-n | high | unsigned char | - | TAB_RDC_DETECTED | - | - | - | Status erkennung Radelektroniken |

### RES_0XDC96_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_1_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_1_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_1_INTERNER_FEHLERCODE | 0-n | high | unsigned char | - | TAB_RDC_INT_FEHLER | - | - | - | SG-interner Fehlercode |
| STAT_1_ZAEHLER_INAKTIV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Inaktiv-Ereignisse |
| STAT_2_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_2_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_2_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_2_INTERNER_FEHLERCODE | 0-n | high | unsigned char | - | TAB_RDC_INT_FEHLER | - | - | - | SG-interner Fehlercode |
| STAT_2_ZAEHLER_INAKTIV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Inaktiv-Ereignisse |
| STAT_3_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_3_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Inaktivereignis. 99.99.99 => ungültig |
| STAT_3_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_3_INTERNER_FEHLERCODE | 0-n | high | unsigned char | - | TAB_RDC_INT_FEHLER | - | - | - | SG-interner Fehlercode |
| STAT_3_ZAEHLER_INAKTIV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Inaktiv-Ereignisse |

### RES_0XDC97_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_PLAUSI_DRUCK | 0-n | high | unsigned char | - | TAB_PLAUSI_DRUCK | - | - | - | Eingefüllte Drücke bestanden ja oder nein |
| STAT_1_KALIBRIERUNG | 0-n | high | unsigned char | - | TAB_KALIBRIERUNG | - | - | - | Statusbyte über Erfolg- Misserfolg der Kalibrierung |
| STAT_1_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_1_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_1_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_1_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierte Aussentemperatur beim Befüllen |
| STAT_1_BEFUELL_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_1_RADPOSITION_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE0 |
| STAT_1_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_1_SOLLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE0 |
| STAT_1_RADPOSITION_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE1 |
| STAT_1_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_1_SOLLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE1 |
| STAT_1_RADPOSITION_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE2 |
| STAT_1_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_1_SOLLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE2 |
| STAT_1_RADPOSITION_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE3 |
| STAT_1_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_1_BEFUELLTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_1_SOLLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE3 |
| STAT_1_ZAEHLER_KALIBRIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Kalibrierereignisse |
| STAT_2_PLAUSI_DRUCK | 0-n | high | unsigned char | - | TAB_PLAUSI_DRUCK | - | - | - | Eingefüllte Drücke bestanden ja oder nein |
| STAT_2_KALIBRIERUNG | 0-n | high | unsigned char | - | TAB_KALIBRIERUNG | - | - | - | Statusbyte über Erfolg- Misserfolg der Kalibrierung |
| STAT_2_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_2_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_2_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_2_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierte Aussentemperatur beim Befüllen |
| STAT_2_BEFUELL_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_2_RADPOSITION_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE0 |
| STAT_2_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_2_SOLLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE0 |
| STAT_2_RADPOSITION_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE1 |
| STAT_2_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_2_SOLLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE1 |
| STAT_2_RADPOSITION_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE2 |
| STAT_2_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_2_SOLLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE2 |
| STAT_2_RADPOSITION_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE3 |
| STAT_2_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_2_BEFUELLTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_2_SOLLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE3 |
| STAT_2_ZAEHLER_KALIBRIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Kalibrierereignisse |
| STAT_3_PLAUSI_DRUCK | 0-n | high | unsigned char | - | TAB_PLAUSI_DRUCK | - | - | - | Eingefüllte Drücke bestanden ja oder nein |
| STAT_3_KALIBRIERUNG | 0-n | high | unsigned char | - | TAB_KALIBRIERUNG | - | - | - | Statusbyte über Erfolg- Misserfolg der Kalibrierung |
| STAT_3_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_3_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Kalibrierereignis. 99.99.99 => ungültig |
| STAT_3_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_3_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierte Aussentemperatur beim Befüllen |
| STAT_3_BEFUELL_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Befüllen |
| STAT_3_RADPOSITION_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE0 |
| STAT_3_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_3_SOLLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE0 |
| STAT_3_RADPOSITION_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE1 |
| STAT_3_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_3_SOLLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE1 |
| STAT_3_RADPOSITION_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE2 |
| STAT_3_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_3_SOLLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE2 |
| STAT_3_RADPOSITION_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition Radelektronik RE3 |
| STAT_3_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Befuelldruckwert  Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_3_BEFUELLTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Befuelltemperaturwert Radelektronik RE0 (215 °C => ungueltig) |
| STAT_3_SOLLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruckwert Radelektronik RE3 |
| STAT_3_ZAEHLER_KALIBRIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Kalibrierereignisse |

### RES_0XDC98_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_WERT | HEX | high | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock). |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL_WERT | dBm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Störpegelabstand |
| STAT_RESTLEBENSDAUER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor. Entweder analoger Wert in 10% - Schritte oder kodierter Wert (11=i.O; 1=n.i.O) |
| STAT_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad |
| STAT_POS_CHANGED | 0-n | high | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert |
| STAT_FOLGEAUSFALL_WERT | s | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Fahrzeit ohne Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RDC_RE_SENDEMODE_AK | - | - | - | Sendemode der Radelektronik |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC99_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_WERT | HEX | high | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock). |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL_WERT | dBm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Störpegelabstand |
| STAT_RESTLEBENSDAUER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor. Entweder analoger Wert in 10% - Schritte oder kodierter Wert (11=i.O; 1=n.i.O) |
| STAT_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad |
| STAT_POS_CHANGED | 0-n | high | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert |
| STAT_FOLGEAUSFALL_WERT | s | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Fahrzeit ohne Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RDC_RE_SENDEMODE_AK | - | - | - | Sendemode der Radelektronik |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC9A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_WERT | HEX | high | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock). |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL_WERT | dBm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Störpegelabstand |
| STAT_RESTLEBENSDAUER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor. Entweder analoger Wert in 10% - Schritte oder kodierter Wert (11=i.O; 1=n.i.O) |
| STAT_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad |
| STAT_POS_CHANGED | 0-n | high | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert |
| STAT_FOLGEAUSFALL_WERT | s | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Fahrzeit ohne Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RDC_RE_SENDEMODE_AK | - | - | - | Sendemode der Radelektronik |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC9B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_WERT | HEX | high | unsigned long | - | - | - | - | - | Radelektronik Identifier |
| STAT_RAD_POSITION_NR | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Ausgelesene Radposition des Identifiers (Messblock). |
| STAT_LETZTER_REIFENDRUCKWERT_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Letzer gültiger Reifendruckwert der vom ausgewählten Rad zurückgeliefert wird |
| STAT_LETZTER_REIFENTEMPERATURWERT_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Letzte gültige Reifentemperatur des ausgewählten Rads |
| STAT_SOLLDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Vorgegebener Solldruck des ausgewählten Rads |
| STAT_GUTEMPFAENGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl korrekt empfangener Telegramme vom ausgewählten Rad |
| STAT_AUSBEUTE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Telegrammausbeute vom ausgewählten Rad in Prozent |
| STAT_RSSI_PEGEL_WERT | dBm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Störpegelabstand |
| STAT_RESTLEBENSDAUER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor. Entweder analoger Wert in 10% - Schritte oder kodierter Wert (11=i.O; 1=n.i.O) |
| STAT_RADELEKTRONIK_STATUS | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Status Meldung der Radelektronik des angewählten Rads. |
| STAT_HARTE_WARNUNG_AKTIV | 0-n | high | unsigned char | - | TAB_RDC_AKTIV_INAKTIV | - | - | - | Pannen Warnung vom angewählten Rad |
| STAT_POS_CHANGED | 0-n | high | unsigned char | - | TAB_RDC_CHANGED | - | - | - | Radelektronik ID vom angewählten Rad hat sich geändert |
| STAT_FOLGEAUSFALL_WERT | s | high | unsigned char | - | - | 5.0 | 1.0 | 0.0 | Fahrzeit ohne Telegrammempfang |
| STAT_RE_HERSTELLER | 0-n | high | unsigned char | - | TAB_RE_HERSTELLER | - | - | - | RE-Hersteller |
| STAT_RADELEKTRONIK_SENDEMODE | 0-n | high | unsigned char | - | TAB_RDC_RE_SENDEMODE_AK | - | - | - | Sendemode der Radelektronik |
| STAT_TELEGRAMMTYP | 0-n | high | unsigned char | - | TAB_RE_TELEGRAMMTYP | - | - | - | Telegrammtyp |

### RES_0XDC9C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnung. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnung. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Warnung. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnung. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Warnungsauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Warnungsauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Warnereignis |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnereignis Anzahl |

### RES_0XDC9D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnung. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnung. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Warnung. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnung. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Warnungsauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Warnungsauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Warnereignis |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnereignis Anzahl |

### RES_0XDC9E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnung. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnung. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Warnung. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnung. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Warnungsauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Warnungsauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Warnereignis |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Warnereignis |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Warnereignis |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Warnereignis Anzahl |

### RES_0XDC9F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Warnung Rücknahme. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Warnung Rücknahme. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Warnung Rücknahme. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Warnung Rücknahme. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Warnungs- Rüchnahmeauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Warnungs- Rüchnahmeauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Warnung Rücknahme. |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Warnung Rücknahme. |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Warnung Rücknahme. |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Warnung Rücknahme. |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Warnung Rücknahme. |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Warnung Rücknahme. |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Warnung Rücknahme. |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Warnung Rücknahme. |
| STAT_ZAEHLER_WARN_RUECKNAHME_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler für Warnungsrücknahmen durch Luftnachfüllen oder Radtausch. |

### RES_0XDCD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RE_IDENTIFIER_RE0_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE0 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE0. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE0 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE1_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE1 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE1. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE1 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE2_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE2 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE2. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE2 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE3_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE3 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE3. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE3 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE4_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE4 |
| STAT_REIFENDRUCK_RE4_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE4 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE4. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE4 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE5_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE5 |
| STAT_REIFENDRUCK_RE5_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE5 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE5. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE5 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE6_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE6 |
| STAT_REIFENDRUCK_RE6_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE6 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE6. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE6 (255 => ungueltig) |
| STAT_RE_IDENTIFIER_RE7_WERT | HEX | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Identifier Radelektronik RE7 |
| STAT_REIFENDRUCK_RE7_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Reifendruckwert Radelektronik RE7 (65.535 bar => ungueltig) |
| STAT_RESTLEBENSDAUER_RE7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Batterie Status der Radsensor RE7. Analog Wert in Prozent oder kodiert (11=i.O; 1=n.i.O) |
| STAT_EMPFANGSZAEHLER_RE7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Empfangszaehler Radelektronik RE7 (255 => ungueltig) |

### RES_0XDCF1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Vorwarnung. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Vorwarnung. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Vorwarnung. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Vorwarnung. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Vorwarnungsauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Vorwarnungsauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorwarnereignis Anzahl |

### RES_0XDCF2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Vorwarnung. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Vorwarnung. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Vorwarnung. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Vorwarnung. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Vorwarnungsauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Vorwarnungsauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorwarnereignis Anzahl |

### RES_0XDCF3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Datum zum Vorwarnung. 99.99.99 => ungültig |
| STAT_UHRZEIT_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Uhrzeit zum Vorwarnung. 99.99.99 => ungültig |
| STAT_KILOMETERSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand. 4.294.967.295 => ungültig |
| STAT_BEFUELL_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Korrigierter Aussentemperatur beim Befüllen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Aussentemperatur beim Vorwarnung. |
| STAT_AUSSENDRUCK_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Aussendruck beim Vorwarnung. |
| STAT_RADELEKTRONIK_STATUS_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RE_STATUS | - | - | - | Radelektronik-Status des Vorwarnungsauslösenden Rades |
| STAT_RADPOSITION_PANNENRAD | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition des Vorwarnungsauslösenden Rades |
| STAT_RADPOSITON_RE0 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE0 |
| STAT_BEFUELLDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE0 |
| STAT_REIFENDRUCK_RE0_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE0 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE0_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE0 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE1 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE1 |
| STAT_BEFUELLDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE1 |
| STAT_REIFENDRUCK_RE1_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE1 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE1 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE2 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE2 |
| STAT_BEFUELLDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE2 |
| STAT_REIFENDRUCK_RE2_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE2 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE2 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_RADPOSITON_RE3 | 0-n | high | unsigned char | - | TAB_RDC_RAD_POSITION_NR | - | - | - | Radposition RE3 |
| STAT_BEFUELLDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Solldruck RE3 |
| STAT_REIFENDRUCK_RE3_WERT | bar | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Von Radelektronik RE3 gesendete Druckwert bei Vorwarnereignis |
| STAT_REIFENTEMPERATUR_RE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Von Radelektronik RE3 gesendete Temperaturwert bei Vorwarnereignis |
| STAT_ZAEHLER_WARNEREIGNIS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Vorwarnereignis Anzahl |

### RES_0XDD31_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIENNUMMER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Seriennummer |
| STAT_BMW_TEILENUMMER_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 |  BMW Teilenummer |
| STAT_PRODUKTIONSDATUM_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 |  Produktionsdatum: Jahr, Monat, Tag |
| STAT_SW_RELEASE_NUMMER_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 |  Software Release Nummer |
| STAT_HW_RELEASE_NUMMER_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Hardware Release Nummer |

### RES_0XDD46_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 1 = ein; 0 = aus |

### RES_0XDD5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWA_EPS_OFFSET_BESTAET_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Bestätigung EPS Positionsoffset |
| STAT_LWA_EPS_OFFS_KORR_ZAEHL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturzählerwert EPS Positionsoffset |

### RES_0XDD5B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBS2EV_R_VCH_INTRO_B_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Beide Kurven) |
| STAT_SBS2EV_R_VCH_INTRO_L_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Linke Kurve) |
| STAT_SBS2EV_R_VCH_INTRO_R_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwerttoleranz (Rechte Kurve) |
| STAT_SBS_2EV_R_VCH_WERT0_B_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Beide Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_L_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Links Kurven) |
| STAT_SBS_2EV_R_VCH_WERT0_R_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | VCH Lernwert (Rechts Kurven) |

### RES_0XDD5C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMP_OFS_AX1_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AX1_TOL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Längsbeschleunigung 1 |
| STAT_COMP_SENS_AX1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Längsbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 1 |
| STAT_COMP_OFS_AY1_TOL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 1 |
| STAT_COMP_OFS_AY2_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Querbeschleunigungssensor 2 |
| STAT_COMP_OFS_AY2_TOL_WERT | m/s² | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Querbeschleunigung 2 |
| STAT_COMP_OFS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_AZ1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Vertikalbeschleunigungssensor 1 |
| STAT_COMP_SENS_AZ1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Vertikalbeschleunigungssensor 1 |
| STAT_COMP_OFS_DELT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Langzeitabgleich Ritzel bezogen |
| STAT_COMP_OFS_DEW_LT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Langzeitabgleich Rad bezogen |
| STAT_COMP_OFS_DEYR_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Abgleich über Gierrate Ritzel bezogen |
| STAT_COMP_OFS_DEW_YR_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeloffset aus Abgleich über Gierrate Rad bezogen |
| STAT_COMP_OFS_DE_TOLLT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeltoleranz Ritzel bezogen |
| STAT_COMP_OFS_DEW_TOLLT_WERT | rad | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lenkwinkeltoleranz Rad bezogen |
| STAT_COMP_SENS_VWHL_HL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten links |
| STAT_COMP_SENS_VWHL_HR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz hinten rechts |
| STAT_COMP_SENS_VWHL_VL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne links |
| STAT_COMP_SENS_VWHL_VR_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Radtoleranz vorne rechts |
| STAT_COMP_OFS_RY1_STST_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Stillstandsabgleich |
| STAT_COMP_OFS_RY1_DRV_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Nickratensensor 1 Fahrtabgleich |
| STAT_COMP_OFS_RY1_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Nickratensensor 1 |
| STAT_COMP_KYR_RY1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Nickrate Kompensation Gierratenübersprechen |
| STAT_COMP_OFS_XR1_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Rollratensensor 1 |
| STAT_COMP_OFS_XR1_TOL_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Rollrate 1 |
| STAT_COMP_SENS_XR1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Rollratensensor 1 |
| STAT_COMP_KYR_XR1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Korrekturfaktor Rollrate (Kompensation Gierratenübersprechen) |
| STAT_COMP_OFS_YR1_DRV_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR1_STST_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 1 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR1_TOL_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 1 |
| STAT_COMP_SENS_YR1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 1 |
| STAT_COMP_OFS_YR2_DRV_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Fahrtabgleich) |
| STAT_COMP_OFS_YR2_STST_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Gierratensensor 2 (aus Stillstandsabgleich) |
| STAT_COMP_OFS_YR2_TOL_WERT | rad/s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Signaltoleranz Gierrate 2 |
| STAT_COMP_SENS_YR2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Empfindlichkeit Gierratensensor 2 |
| STAT_I_SBS_3DE_IDE_CODE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Lenkwinkelkodierüberwachung |
| STAT_I_AY1_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 1 |
| STAT_I_AY2_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Querbeschleunigung 2 |
| STAT_I_YR1_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 1 |
| STAT_I_YR2_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate 2 |
| STAT_I_YR_WH_SGN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert Vorzeichenüberwachung Gierrate (aus Radgeschwindigkeiten) |
| STAT_ID_NUM_SENS_CLUST_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Sensorcluster Seriennummer Teil 1 |
| STAT_ID_NUM_SENS_CLUST_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Sensorcluster Seriennummer Teil 2 |
| STAT_ROLLE_WERK_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Speicherung des Bandenderollenmodus über Klemmenwechsel hinaus |
| STAT_RATIO_FIRST_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Gangübersetzung Vorwärtsgang |
| STAT_RATIO_REVERSE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Gangübersetzung Rückwärtsgang |
| STAT_GEAR_FAILURE_CNT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Lernwert für Speicherung Fehlercounter |
| STAT_DEBUG_COUNTER_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DEBUGCOUNTER, der sich inkrementiert vor jedem EEPROM-schreiben |
| STAT_COMP_OFS_YR1_STST_TEMP_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR2_STST_TEMP_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR1_STST_TEMP_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz für Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| STAT_COMP_OFS_YR2_STST_TEMP_TOL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Toleranz für Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |

### RES_0XDD5E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZFMFS_OFS_AXM_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Offset Längsbeschleunigung Motormoment |
| STAT_STATUS_MLW_WERKSMODE_GELERNT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Reserviert für AFS (MLW Werksmodus gelernt) |
| STAT_MLW_ANSCH_ANSCH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Reserviert für AFS (MLW Anschlag Anschlag) |
| STAT_STATUS_SK_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Status Schneekette |
| STAT_ZAEHLER_SK_M_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler Schneeketten Modus |
| STAT_GESAMT_DAUER_FAHRZYKLUS_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dauer über alle Fahrzyklen |
| STAT_GESAMT_DAUER_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dauer linearer Fahrbereich über alle Fahrzyklen |
| STAT_GESAMT_ANTEIL_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Anteil linearer Fahrbereich in allen Fahrzyklen |
| STAT_ZAEHLER_1_RQ_SQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ SQ HSR Bereich 1 |
| STAT_ZAEHLER_2_RQ_SQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ SQ HSR Bereich 2 |
| STAT_ZAEHLER_3_RQ_SQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ SQ HSR Bereich 3 |
| STAT_ZAEHLER_1_RQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ HSR Bereich 1 |
| STAT_ZAEHLER_2_RQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ HSR Bereich 2 |
| STAT_ZAEHLER_3_RQ_HSR_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ HSR Bereich 3 |
| STAT_ZAEHLER_1_RQ_GMVH_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ GMVH Bereich 1 |
| STAT_ZAEHLER_2_RQ_GMVH_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ GMVH Bereich 2 |
| STAT_ZAEHLER_3_RQ_GMVH_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ GMVH Bereich 3 |
| STAT_ZAEHLER_1_RQ_ARS_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ ARS Bereich 1 |
| STAT_ZAEHLER_2_RQ_ARS_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ ARS Bereich 2 |
| STAT_ZAEHLER_3_RQ_ARS_LIN_FAHRBEREICH_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Zähler RQ ARS Bereich 3 |
| STAT_GESAMT_DAUER_LIN_FAHRBEREICH_REGLEREINGRIFF_WERT | s | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Dauer der Reglereingriffe im linearer Fahrbereich |
| STAT_LMV_M1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 1 |
| STAT_LMV_M1_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 1 |
| STAT_LMV_M1_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 2 |
| STAT_LMV_M1_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 3 |
| STAT_LMV_M1_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 4 |
| STAT_LMV_M2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 2 |
| STAT_LMV_M2_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 1 |
| STAT_LMV_M2_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 2 |
| STAT_LMV_M2_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 3 |
| STAT_LMV_M2_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 4 |
| STAT_LMV_M3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 3 |
| STAT_LMV_M3_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 1 |
| STAT_LMV_M3_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 2 |
| STAT_LMV_M3_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 3 |
| STAT_LMV_M3_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 4 |
| STAT_LMV_M4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 4 |
| STAT_LMV_M4_S1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 1 |
| STAT_LMV_M4_S2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 2 |
| STAT_LMV_M4_S3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 3 |
| STAT_LMV_M4_S4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 4 |
| STAT_LMV_M5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler Allradmodus 5 |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RES_0XFD50_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MCP_PRIMARY_WERT | bar | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Primären Druckwert des Master Cylinder Pressure Sensors. |
| STAT_MCP_REF_WERT | bar | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Referenz-Druckwert des Master Cylinder Pressure Sensors. |
| STAT_MCP_PRIMARY_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Master Cylinder Pressure Sensor gemessene Spannung zur bestimmung des primären Druckwertes. |
| STAT_MCP_REF_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Master Cylinder Pressure Sensor gemessene Spannung zur bestimmung des Referenz-Druckwertes. |
| STAT_MCP | 0/1 | high | unsigned char | - | - | - | - | - | Status der Master Cylinder Pressure Sensor Daten. 0x00: invalid 0x01: valid |
| STAT_CP1_PRIMARY_WERT | bar | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Primären Druckwert des Circuit Pressure 1 Sensors. |
| STAT_CP1_REF_WERT | bar | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Referenz-Druckwert des Circuit Pressure 1 Sensors. |
| STAT_CP1_PRIMARY_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Circuit Pressure 1 Sensor gemessene Spannung zur bestimmung des primären Druckwertes. |
| STAT_CP1_REF_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Circuit Pressure 1 Sensor gemessene Spannung zur bestimmung des Referenz-Druckwertes. |
| STAT_CP1 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Circuit Pressure 1 Sensor Daten. 0x00: invalid 0x01: valid |
| STAT_CP2_PRIMARY_WERT | bar | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Primären Druckwert des Circuit Pressure 2 Sensors. |
| STAT_CP2_REF_WERT | bar | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Referenz-Druckwert des Circuit Pressure 2 Sensors. |
| STAT_CP2_PRIMARY_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Circuit Pressure 2 Sensor gemessene Spannung zur bestimmung des primären Druckwertes. |
| STAT_CP2_REF_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Circuit Pressure 2 Sensor gemessene Spannung zur bestimmung des Referenz-Druckwertes. |
| STAT_CP2 | 0/1 | high | unsigned char | - | - | - | - | - | Status der Circuit Pressure 2 Sensor Daten. 0x00: invalid 0x01: valid |
| STAT_SUPPLY_VOLT_WERT | V | high | unsigned int | - | - | 10.0 | 65535.0 | 0.0 | Interne 5V Spannung, die als Versorgungsspannung für die Drucksensoren dient. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| START_ADAPTIVDATEN_RUECKSETZEN | 0xA051 | - | Start und Status Ruecksetzen Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA051_R |
| STEUERN_AX_AY_ABGLEICH | 0xA052 | - | Starten und Status Abgleich Beschleunigungssensoren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA052_R |
| START_ADAPTIVDATEN_WERKSMODUS | 0xA053 | - | Starten und Status Standardisierung Adaptivdaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA053_R |
| STEUERN_ADAPTIVDATEN_SLW_RESET | 0xA05B | - | Start und Status Summenlenkwinkel Reset | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA05B_R |
| DSC_ENTLUEFTUNG | 0xA061 | - | Starten, Stoppen und Status Entlüftung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA061_R | RES_0xA061_R |
| DSC_VENTILE_PULS | 0xA064 | - | Starten, Stoppen und Status Puls Ventile (max. 6 gleichzeitig) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA064_R | RES_0xA064_R |
| RADDREHZAHLSENSORPRUEFUNG | 0xA065 | - | Starten, Stoppen und Status Funktionsprüfung Raddrehzahlsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA065_R | RES_0xA065_R |
| DSC_PUMPENFUNKTIONSPRUEFUNG | 0xA066 | - | Starten, Stoppen und Status Funktionsprüfung Pumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA066_R | RES_0xA066_R |
| BPWS_INITIALISIERUNG | 0xA067 | - | Starten, Stoppen und Status Initialisierung Nullstellung Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA067_R | RES_0xA067_R |
| RPA_RESET_STATISTIK | 0xA068 | - | Reset RPA Lerndaten Statistik | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DSC_VAKUUMBEFUELLUNG | 0xA06D | - | Starten (Weiterschalten), Stoppen und Status Vakuumbefüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06D_R | RES_0xA06D_R |
| RPA_RESET_STANDARDISIERUNG | 0xA074 | - | Reset RPA Standardisierung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FLM_RESET | 0xA130 | - | Field Load Manager (FLM) Daten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA130_R |
| SEC_ZUGRIFF_DEAKTIVIEREN | 0xA139 | - | Verriegeln des Security Zugriffs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DRUCKSENSORKALIBRIERUNG | 0xA140 | - | Drucksensorkalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA140_R |
| LMV_MOMENT | 0xA155 | - | Längstmomentenverteilung Sollvorgabe  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA155_R | RES_0xA155_R |
| DSC_HYDRAULISCHE_FUNKTIONSPRUEFUNG | 0xA156 | - | Hydraulische Bandende Funktionsprüfung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA156_R | RES_0xA156_R |
| ZFM_RESET_STATISTIK_LINEARER_FAHRBEREICH | 0xA164 | - | Reset der Statistikdaten im Funktionsbaustein QdmZfm | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EMF_VERFAHREN | 0xA803 | - | Anfahren Position | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA803_R | RES_0xA803_R |
| STEUERN_EEPROM_SCHREIBEN | 0xAB5B | - | Start und Status Abspeichern Lerndaten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAB5B_R |
| START_ADAPTIVDATEN_WERKSMODUS_2 | 0xABA3 | - | Initialisierung der Lernwerte der Funktion  Eigenlenkverhalten . | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xABA3_R |
| GMK_DATEN | 0xD09A | - | Auslesen GMK Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD09A_D |
| CBS_BREMSE_DETAILS | 0xD272 | - | CBS-Daten der Bremsen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD272_D |
| ADAPTIVDATEN_QDMZFF | 0xD6B5 | - | Vorgabe Adaptivwert zum Schreiben in den EEPROM. Wert wird erst nach einem Einschlafen in den Arbeitsspeicher übernommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B5_D | - |
| ADAPTIVWERTE_QDMZFF | 0xD6B6 | - | Auslesen der Adaptivwerte aus dem Arbeitsspeicher (nicht EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6B6_D |
| ADAPTIVDATEN_QDMSKR | 0xD6B7 | - | Vorgabe Adaptivwert zum Schreiben in den EEPROM. Wert wird erst nach einem Einschlafen in den Arbeitsspeicher übernommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B7_D | - |
| ADAPTIVWERTE_QDMSKR | 0xD6B8 | - | Auslesen der Adaptivwerte aus dem Arbeitsspeicher (nicht EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6B8_D |
| ADAPTIVDATEN_QDMWS | 0xD6B9 | - | Vorgabe Adaptivwert zum Schreiben in den EEPROM. Wert wird erst nach einem Einschlafen in den Arbeitsspeicher übernommen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6B9_D | - |
| ADAPTIVWERTE_QDMWS | 0xD6BA | - | Auslesen der Adaptivwerte aus dem Arbeitsspeicher (nicht EEPROM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6BA_D |
| EMF_LERNDATEN_STATISTIK | 0xD804 | - | Auslesen Lerndaten Statistik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD804_D |
| EMF_AKTUATOR_KOMBISATTEL | 0xD805 | - | Auslesen Daten Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD805_D |
| EMF_LERNDATEN_TASTER | 0xD808 | - | Auslesen Lerndaten Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD808_D |
| EMF_LERNDATEN_AKTUATOR | 0xD80A | - | Auslesen Lerndaten Aktuator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80A_D |
| EMF_FESTSTELLKRAFT_KOMBISATTEL | 0xD80B | - | Auslesen Feststellkraft | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80B_D |
| EMF_KLEMMEN_KOMBISATTEL | 0xD80C | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80C_D |
| EMF_TASTER | 0xD80D | - | Auslesen Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD80D_D |
| EMF_MONTAGE_MODE | 0xD80F | - | Auslesen und Vorgeben Montagemodus (Sperrung Bedienung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD80F_D | RES_0xD80F_D |
| VENTILE_KALIBRIERUNG_LERNDATEN | 0xD8E5 | - | Ventile Kalibrierung Lerndaten lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8E5_D |
| STATUS_RDC_ERFS_AKT_REIFEN_LESEN | 0xD8E7 | - | Elektronischer Reifenfülldruckschild aktuell verbaute Reifen lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8E7_D |
| STATUS_RDC_ERFS_TSA_DATEN_LESEN | 0xD8E8 | STAT_TSA_DATA | Tyre Sales Assistant Händler Daten | DATA | - | high | data[104] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_RDC_ERFS_TSA_DATEN_VORGEBEN | 0xD8E9 | - | Tyre Sales Assistant Daten Vorgeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8E9_D | - |
| STEUERN_RDC_ERFS_AKT_REIFEN_POS_VORGEBEN | 0xD8EA | - | Elektronischer Reifenfülldruckschild aktuell verbaute Reifen vorgeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8EA_D | - |
| STATUS_RDC_ERFS_AKT_REIFEN_ECO_LESEN | 0xD8F2 | - | Elektronischer Reifenfülldruckschild aktuell verbaute Reifen ECO lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8F2_D |
| STEUERN_RDC_ERFS_ECO_AKT_REIFEN_POS_VORGEBEN | 0xD8F3 | - | Elektronischer Reifenfülldruckschild aktuell verbaute ECO Reifen vorgeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8F3_D | - |
| STEUERN_RDC_ERFS_ECO_NEUE_REIFEN_VORGEBEN | 0xD8F4 | - | Elektronischer Reifenfülldruckschild neue Reifen vorgeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8F4_D | - |
| STEUERN_RDC_ERFS_ECO_REIFENTABELLE_VORGEBEN | 0xD8F5 | - | Reifentabelle Vorgeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8F5_D | - |
| DSC_VERSION_APPLIKATIONSDATEN | 0xD9D9 | - | Auslesen der Version der Applikationsdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9D9_D |
| SEC_ZUGRIFF | 0xDA8C | STAT_SEC_ZUGRIFF | Status des Security Zugriffs (0 = Verriegelt, 1 = Zugriff geöffnet) | 0-n | - | high | unsigned char | TAB_STATUS_SEC_ZUGRIFF | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SEC_ECU_KEYS | 0xDA9C | - | Schreiben des PubECU und DHSecECU | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA9C_D | - |
| PUB_ECU | 0xDAE8 | STAT_PUB_ECU_DATA | Öffentlicher Schlüssel des Steuergeräts | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DHSEC_ASBC | 0xDAE9 | - | Schreiben des Vergleich DHSec in das Steuergerät  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAE9_D | - |
| RDC_PAL_LESEN | 0xDAF0 | - | Reifendruckkontrolle Radzuordnung interner System Status. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAF0_D |
| STEUERN_LMV_FUNKTION_QDM | 0xDB2F | - | Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe). Der Job wird nur durch die QDM-SW-Komponente angesteuert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB2F_D | - |
| ADAPTIVDATEN_FASCWBAS | 0xDB38 | - | Vorgabe Adaptivwert in den EEPROM-Mirror (nur Entwicklung). Das Schreiben erfolgt beim Herunterfahren des Steuergerätes. Der Job wird nur für Entwicklungszwecke benötigt. Er ermöglicht die Manipulation der Bausteinsspezifischen Lernwerte. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB38_D | - |
| ADAPTIVWERTE_FASCWBAS | 0xDB39 | - | Auslesen Adaptivdaten Der Job wird nur für Entwicklungszwecke benötigt. Er ermöglicht das Auslesen der Bausteinsspezifischen Lernwerte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB39_D |
| AUTOHOLDTASTER_DISCRETE | 0xDB3B | STAT_AUTOHOLDTASTER | Auslesen Zustand AutoHold Taster 1= Taster gedrückt;  0= Taster nicht betätigt 2- Taster defekt 3-  = Signalmuster ungültig | 0-n | - | high | unsigned char | TAB_AUTOHOLDTASTER | - | - | - | - | 22 | - | - |
| STATUS_LMV_FUNKTION_QDM | 0xDB44 | STAT_LMV_FUNKTION_AKTIV | 1 = aktiv  0 = inaktiv | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_PCIB_LESEN | 0xDB4C | - | Auslesen der Postcrash-IBrake Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB4C_D |
| STATUS_MODUS_ROLLENPRUEFSTAND | 0xDB5B | STAT_ROLLENMODUS_NR | Statusabfrage Rollenmodus aktiv im ICM | 0-n | - | - | signed char | TAB_STATUS_ROLLENMODUS | - | - | - | - | 22 | - | - |
| STEUERN_MODUS_ROLLENPRUEFSTAND | 0xDB98 | - | Vorgeben Rollenmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB98_D | - |
| STATUS_GIERRATE | 0xDBD9 | - | Auslesen Gierrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBD9_D |
| STATUS_QUERBESCHLEUNIGUNG | 0xDBDA | - | Auslesen Querbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDA_D |
| STATUS_LAENGSBESCHLEUNIGUNG | 0xDBDB | - | Auslesen Laengsbeschleunigung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDB_D |
| BREMSBELAGSSENSOR | 0xDBDF | - | Auslesen Bremsbelagssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDF_D |
| LMV_FUNKTION | 0xDBE1 | - | Auslesen und Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE1_D | RES_0xDBE1_D |
| REKU_FUNKTION | 0xDBE2 | - | Auslesen und Vorgeben Aktivierung Funktion Rekuperation (Bremsenergierückgewinnung) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE2_D | RES_0xDBE2_D |
| REIFENPANNENANZEIGE | 0xDBE3 | - | Reifenpannenanzeige | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE3_D |
| GESCHWINDIGKEIT_RAD | 0xDBE4 | - | Auslesen Raddrehzahlfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE4_D |
| DSC_DRUCKSENSOREN | 0xDBE5 | - | Auslesen Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE5_D |
| DSC_KLEMMEN | 0xDBE7 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE7_D |
| DSC_PUMPE | 0xDBE8 | - | Auslesen und Vorgeben Ansteuerung Pumpe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDBE8_D | RES_0xDBE8_D |
| DSC_VENTILE | 0xDBE9 | - | Auslesen und Vorgeben Ansteuerung Ventile | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDBE9_D | RES_0xDBE9_D |
| VAKUUMSENSOR | 0xDBF4 | - | Auslesen Vakuumsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF4_D |
| BREMSPEDALWEGSENSOR | 0xDBF5 | - | Auslesen Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF5_D |
| BREMSREKUPERATIONSMOMENT | 0xDBF6 | - | Auslesen Radmoment Bremsrekuperation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF6_D |
| STATUS_HSR_ICM_VERBUND | 0xDBFE | - | Auslesen Status HSR ICM Verbund | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBFE_D |
| STATUS_ADAPTIVDATEN_ZUSTAND | 0xDC13 | - | Auslesen Status Adaptivdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC13_D |
| RPA_LERNDATEN_STATISTIK | 0xDC14 | - | Auslesen Lerndaten Statisik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC14_D |
| RPA_LERNDATEN_STD | 0xDC15 | - | Auslesen Lerndaten Standardisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC15_D |
| AUTOHOLDLED | 0xDC1D | - | Auslesen und Vorgeben AutoHold LED | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC1D_D | RES_0xDC1D_D |
| BREMSFLUESSIGKEITSSCHALTER | 0xDC1F | STAT_BREMSFLUESSIGKEIT_NIVEAU_SCHALTER_EIN | Auslesen Niveau Bremsflüssigkeit 1 = Bremsflüssigkeit vorhanden;  0 = Bremsflüssigkeit leer oder Unterbrechung | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_FREIGABE_AKTIVE_DIAGNOSE_HSR | 0xDC24 | - | Freigabe Aktive Diagnose HSR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC24_D |
| STATUS_NICKRATE | 0xDC2A | - | Auslesen Nickrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC2A_D |
| STATUS_WANKRATE | 0xDC33 | - | Auslesen Wankrate | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC33_D |
| STATUS_GBRPLUS | 0xDC3A | - | Auslesen Daten Grenzbereichsrückmeldung (GBR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC3A_D |
| ABS_FUNKTION | 0xDC6C | - | Auslesen Status Funktion Antiblockiersystem (ABS) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6C_D |
| ASC_FUNKTION | 0xDC6D | - | Auslesen Status Funktion Antriebsschlupfregelung (ASC) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6D_D |
| FDR_FUNKTION | 0xDC6E | - | Auslesen Status Funktion Fahrzeugstabilisierung (FDR) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC6E_D |
| HDC_FUNKTION | 0xDC70 | - | Auslesen Status Funktion Bergabfahrassistent (HDC) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC70_D |
| ADAPTIVDATEN_SBS | 0xDC89 | - | ADAPTIVDATEN_SBS | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC89_D | - |
| ADAPTIVDATEN_AAEPS | 0xDC8A | - | Auslesen Adaptivdaten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC8A_D | - |
| ADAPTIVDATEN_EV | 0xDC8B | - | ADAPTIVDATEN_EV | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC8B_D | - |
| ADAPTIVDATEN_ZFM | 0xDC8D | - | ADAPTIVDATEN_ZFM | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC8D_D | - |
| STATUS_RDC_VERSION | 0xDC94 | STAT_RDC_VERSION_WERT | Aktuelle Software Version | HEX | - | high | unsigned int | - | - | - | - | - | 22 | - | - |
| STATUS_RDC_LESEN | 0xDC95 | - | Reifendruckkontrolle Status Abfragen bezüglich Eigenradabfragen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC95_D |
| RDC_HS_INAKTIVEREIGNIS | 0xDC96 | - | Reifendruckkontrolle Systemzustand beim Systemausfall und Ausfallursache. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC96_D |
| RDC_HS_KALIBRIEREREIGNIS | 0xDC97 | - | Reifendruckkontrolle Systemzustand nach Radzuordung (Kalibrierung). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC97_D |
| RDC_MESSDATENBLOCK_1 | 0xDC98 | - | Reifendruckkontrolle System Informationen vom am Fahrzeug erkannten Radelektroniken. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC98_D |
| RDC_MESSDATENBLOCK_2 | 0xDC99 | - | Reifendruckkontrolle System Informationen vom am Fahrzeug erkannten Radelektroniken. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC99_D |
| RDC_MESSDATENBLOCK_3 | 0xDC9A | - | Reifendruckkontrolle System Informationen vom am Fahrzeug erkannten Radelektroniken. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9A_D |
| RDC_MESSDATENBLOCK_4 | 0xDC9B | - | Reifendruckkontrolle System Informationen vom am Fahrzeug erkannten Radelektroniken. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9B_D |
| RDC_HS_WARNEREIGNIS_1 | 0xDC9C | - | Reifendruckkontrolle Systemzustand beim Warnereignis. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9C_D |
| RDC_HS_WARNEREIGNIS_2 | 0xDC9D | - | Reifendruckkontrolle Systemzustand beim Warnereignis. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9D_D |
| RDC_HS_WARNEREIGNIS_3 | 0xDC9E | - | Reifendruckkontrolle Systemzustand beim Warnereignis. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9E_D |
| RDC_HS_WARNEREIGNIS_RUECKNAHME | 0xDC9F | - | Reifendruckkontrolle Systemzustand beim Warnereignis Rücknahme. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC9F_D |
| STEUERN_RADELEKTRONIK_VORGEBEN | 0xDCC0 | - | Radelektronik vorgeben. Der Job weist der Radelektronik die durch das 1.Argument angewählt wurde, ihre Position am Fahrzeug zu (z.B. vorn rechts). Die Radelektronik kennt sonst ihre Position im Fahrzeug nicht. Sie kennt nur ihre ID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC0_D | - |
| STEUERN_DIGITAL_RDC | 0xDCC6 | - | Reifendruckkontrolle steuern diverser Bandmodi | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCC6_D | - |
| STATUS_RE_LESEN_DRUCKCODIERUNG | 0xDCD9 | - | Reifendruckcodierung für RDC-Sensoren (HO) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCD9_D |
| STEUERN_SOLLDRUCK_VORGEBEN | 0xDCEE | - | Vorgabe Sollwert Reifendruck | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCEE_D | - |
| RDC_HS_WARNEREIGNIS_WEICH_1 | 0xDCF1 | - | Reifendruckkontrolle Systemzustand beim Befüll Hinweis Ereignis. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF1_D |
| RDC_HS_WARNEREIGNIS_WEICH_2 | 0xDCF2 | - | Reifendruckkontrolle Systemzustand beim Befüll Hinweis Ereignis. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF2_D |
| RDC_HS_WARNEREIGNIS_WEICH_3 | 0xDCF3 | - | Reifendruckkontrolle Systemzustand beim Befüll Hinweis Ereignis. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCF3_D |
| ENERGIE_ANFORDERUNG_U | 0xDD0B | - | Vorgabe Spannungs- und Stromanforderung an das Motor-Steuergerät | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD0B_D | - |
| ENERGIE_BEGRENZUNG | 0xDD0D | - | Vorgabe Strombegrenzung für die Fahrdynamik-Aktuatoren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD0D_D | - |
| ENERGIE_ANFORDERUNG_U_EXT | 0xDD0E | - | Vorgabe Spannungs- und Stromanforderung an das Motor-Steuergerät; Extended Bordnetz | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD0E_D | - |
| ENERGIE_BEGRENZUNG_EXT | 0xDD0F | - | Vorgabe Strombegrenzung für die Fahrdynamik-Aktuatoren; Extended Bordnetz | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD0F_D | - |
| EPB_TASTER | 0xDD2E | STAT_EPB_TASTER | Status EPB Taster | 0-n | - | high | unsigned char | TAB_EPB_TASTER | - | - | - | - | 22 | - | - |
| EPB_LED | 0xDD2F | STAT_EPB_LED | Status EPB LED | 0-n | - | high | unsigned char | TAB_EPB_LED | - | - | - | - | 22 | - | - |
| EPB_TASTER_FEHLER | 0xDD30 | STAT_EPB_TASTER_FEHLER | EPB TASTER FEHLER | 0-n | - | high | unsigned char | TAB_EPB_TASTER_FEHLER | - | - | - | - | 22 | - | - |
| EPB_TASTER_INFO | 0xDD31 | - | Liefert folgende Informationen: Seriennummer, BMW Teilenummer, Produktionsdatum, Software Release Nummer, Hardware Release Nummer  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD31_D |
| ENERGIE_ANFORDERUNG_I | 0xDD3E | - | Vorgabe Stromanforderung an das Motor-Steuergerät  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD3E_D | - |
| ENERGIE_ANFORDERUNG_I_EXT | 0xDD3F | - | Vorgabe Stromanforderung an das Motor-Steuergerät; Extended Bordnetz | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDD3F_D | - |
| STEUERN_EPB_LED | 0xDD46 | - | Vorgeben  und Auslesen EPB LED | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDD46_D | RES_0xDD46_D |
| RDBI_SYSTEMLASTZAEHLER | 0xDD4A | STAT_ZAEHLERSTAND_WERT | Auktueller Zählerstand | - | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ADAPTIVWERTE_AAEPS | 0xDD5A | - | Auslesen Adaptivwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD5A_D |
| ADAPTIVWERTE_EV | 0xDD5B | - | Auslesen Adaptivwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD5B_D |
| ADAPTIVWERTE_SBS | 0xDD5C | - | Auslesen Adaptivwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD5C_D |
| ADAPTIVWERTE_ZFM | 0xDD5E | - | Auslesen Adaptivwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDD5E_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| STATUS_STATISTIK_MAXIMALE_CPU_AUSLASTUNG | 0x4007 | - | Rückgabe der maximalen Systemlast in Prozent | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007_D |
| _DSC_PUMPE_EMV | 0x400A | - | Ansteuerung der DSC-Pumpe in 2 Stufen für EMV-Versuche | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x400A_D | RES_0x400A_D |
| ZFM_FUNKTION | 0x4700 | - | Entwicklerjob zur Ausführung von Funktionen aus der SW-Komponente 'Zentrales Fahrdynamik Management'. Spätestens durch einen Klemmenwechsel werden alle geänderten Einstellungen zurückgesetzt. Gegebenenfalls können aus Sicherheitsgründen Geschwindigkeitsschwellen eingebaut sein. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4700_D | - |
| ZFM_FUNKTIONSZUSTAND | 0x4701 | - | Entwicklerjob zum Auslesen des Status von Funktionen aus der SW-Komponente 'Zentrales Fahrdynamik Management' | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4701_D |
| STATISTIK_QDMSBS | 0x4707 | - | Statistik der Signalbereitstellungsschicht: Temperaturabhängigkeit des Gierratensensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4707_D |
| _STEUERN_RDC_DEVELOPER_CONFIG | 0x5000 | - | Steuert Software Parameter Änderungen um die automatisierte Tests am HIL zu unterstützen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5000_D | - |
| _STEUERN_RDC_ERFS_DEVELOPER_CONFIG | 0x5001 | - | Entwicklungs Diagnose Job für automatisierte Tests. Ändert Software Parametern. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5001_D | - |
| _STATUS_RDC_DEVELOPER_DATA_LESEN | 0x5002 | - | Liest Entwicklungs spezifische Daten aus dem RDCi Software. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5002_D |
| EPB_ZAEHLER | 0x5034 | - | Spiegelt Zähler (Statistikdaten) der EPB wider. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5034_D |
| _UFM_TRIGGER_RESYNC_REQUEST | 0x6660 | - | This job forces the transmission of an ADAS resync request message which will force the navigation system to resend the ADAS tree. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6660_D | - |
| _FLM_RESET_TRW | 0xF000 | - | Rücksetzen der FLM-Daten des TRW-Bereichs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESET_STATISTIK_MAXIMALE_CPU_AUSLASTUNG | 0xF002 | - | Rücksetzen der statistischen CPU-Lastdaten | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TRW_PRESS_SENS_DATA | 0xFD50 | - | Diagnoseservice für die EOL-Tests bei TRW zum Auslesen der Drucksensordaten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xFD50_D |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Europe |
| 0x01 | China |
| 0xFF | Wert ungültig |

### TAB_0X2840

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 |

### TAB_0X28A6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0015 | 0x0016 | 0x0017 | 0x0018 |

### TAB_0X28F1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 |

### TAB_0X2923

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### TAB_ABS_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 2 | verfügbar Rückfallebene |
| 0xFF | ungültig |

### TAB_ADAPTIVDATEN_AAEPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Bestaetigung EPS Positionsoffset |
| 0x01 | Korrekturzaehlerwert EPS Positionsoffset |
| 0xFF | unbekannt |

### TAB_ADAPTIVDATEN_EV

| WERT | TEXT |
| --- | --- |
| 0x00 | VCH Lernwerttoleranz (Beide Kurven) |
| 0x01 | VCH Lernwerttoleranz (Linke Kurve) |
| 0x02 | VCH Lernwerttoleranz (Rechte Kurve) |
| 0x03 | VCH Lernwert (beide Kurven) |
| 0x04 | VCH Lernwert (Linke Kurve) |
| 0x05 | VCH Lernwert (Rechte Kurve) |
| 0xFF | unbekannt |

### TAB_ADAPTIVDATEN_FASCWBAS

| WERT | TEXT |
| --- | --- |
| 0 | Anzahl AGB-Ausloesungen |
| 1 | Kilometerstand bei Reset 'Anzahl AGB-Ausloesungen' |

### TAB_ADAPTIVDATEN_LERNEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht im Lernbereich |
| 0x01 | Adaptivdaten im Lernbereich |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_QDMSKR

| WERT | TEXT |
| --- | --- |
| 0x00 | Statischer Radradius |
| 0x01 | Dynamischer Radradius |
| 0x02 | Anzahl Klemmenzyklen für gelernten statischer Radradius |
| 0x03 | Anzahl Klemmenzyklen für gelernten dynamischer Radradius |
| 0x04 | Durchschnittlischer statischer Radradius |
| 0x05 | Durchschnittlischer dynamischer Radradius |
| 0x06 | Plausibilisierungszeit für Berechnung statischer Radradius |
| 0x07 | Plausibilisierungszeit für Berechnung dynamischer Radradius |
| 0x08 | Variable statischer Radradius |
| 0x09 | Variable dynamischer Radradius |

### TAB_ADAPTIVDATEN_QDMWS

| WERT | TEXT |
| --- | --- |
| 0x00 | Gelernter Radradius aus GPS-Schaetzer |
| 0x01 | Aufweitkoeffizient für Radradius aus GPS-Schaetzer |
| 0x02 | Anzahl der nicht gelernten Klemmenzyklen |

### TAB_ADAPTIVDATEN_QDMZFF

| WERT | TEXT |
| --- | --- |
| 0x00 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 1 |
| 0x01 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 2 |
| 0x02 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 3 |
| 0x03 | Gelernte Reibung der Lenkung im Geschwindigkeitsbereich 4 |

### TAB_ADAPTIVDATEN_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Defaultwerte gesetzt |
| 0x01 | Adaptivdaten auf Defaultwerte gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_SBS

| WERT | TEXT |
| --- | --- |
| 0x00 | Offsetwert des Laengsbeschleunigungssensors 1 |
| 0x01 | Signaltoleranz des Laengsbeschleunigungsnutzsignals |
| 0x02 | Empfindlichkeit des Laengsbeschleunigungssensors 1 |
| 0x03 | Offsetwert des Querbeschleunigungssensors 1 |
| 0x04 | Signaltoleranz des Querbeschleunigungsnutzsignals 1 |
| 0x05 | Offsetwert des Querbeschleunigungssensors 2 |
| 0x06 | Signaltoleranz des Querbeschleunigungsnutzsignals 2 |
| 0x07 | Offsetwert des Vertikalbeschleunigungssensors 1 |
| 0x08 | Signaltoleranz des Vertikalbeschleunigungssensors 1 |
| 0x09 | Empfindlichkeit Vertikalbeschleunigungssensor 1 |
| 0x0A | Lenkwinkeloffset aus Langzeitabgleich Ritzel bezogen |
| 0x0B | Lenkwinkeloffset aus Langzeitabgleich Rad bezogen |
| 0x0C | Lenkwinkeloffset aus Abgleich über Gierrate Ritzel bezogen |
| 0x0D | Lenkwinkeloffset aus Abgleich über Gierrate Rad bezogen |
| 0x0E | Lenkwinkeltoleranz Ritzel bezogen |
| 0x0F | Lenkwinkeltoleranz Rad bezogen |
| 0x10 | Abgleich Radgeschwindigkeitssensor Hinten Links |
| 0x11 | Abgleich Radgeschwindigkeitssensor Hinten Rechts |
| 0x12 | Abgleich Radgeschwindigkeitssensor Vorne Links |
| 0x13 | Abgleich Radgeschwindigkeitssensor Vorne Rechts |
| 0x14 | Offsetwert des Nickratensensors 1 aus Stillstandsabgleich |
| 0x15 | Offsetwert des Nickratensensors 1 aus Fahrtabgleich |
| 0x16 | Signaltoleranz des Nickratensensors 1 |
| 0x17 | Korrekturfaktor für die Nickrate zur Kompensation des Gierratenuebersprechens |
| 0x18 | Offsetwert des Rollratensensors 1 |
| 0x19 | Signaltoleranz des Rollratennutzsignals 1 |
| 0x1A | Empfindlichkeit Rollratensensor 1 |
| 0x1B | Korrekturfaktor für die Rollrate zur Kompensation des Gierratenuebersprechens |
| 0x1C | Offsetwert des Gierratensensors 1 aus Fahrtabgleich |
| 0x1D | Offsetwert des Gierratensensors 1 aus Stillstandsabgleich |
| 0x1E | Signaltoleranz des Gierratennutzsignals 1 |
| 0x1F | Empfindlichkeit Gierratensensor 1 |
| 0x20 | Offsetwert des Gierratensensors 2 aus Fahrtabgleich |
| 0x21 | Offsetwert des Gierratensensors 2 aus Stillstandsabgleich |
| 0x22 | Signaltoleranz des Gierratennutzsignals 2 |
| 0x23 | Empfindlichkeit Gierratensensor 2 |
| 0x24 | Lernwert für die Lenkwinkelkodierueberwachung |
| 0x25 | Lernwert für die Vorzeichenueberwachung Querbeschleunigung 1 |
| 0x26 | Lernwert für die Vorzeichenueberwachung Querbeschleunigung 2 |
| 0x27 | Lernwert für die Vorzeichenueberwachung Gierrate 1 |
| 0x28 | Lernwert für die Vorzeichenueberwachung Gierrate 2 |
| 0x29 | Lernwert für die Vorzeichenueberwachung Gierrate aus Radgeschwindigkeiten |
| 0x2A | Lernwert für SensorclusterSeriennummer Teil 1 |
| 0x2B | Lernwert für SensorclusterSeriennummer Teil 2 |
| 0x2C | Lernwert für Speicherung des BandendeRollenmodus über Klemmenwechsel hinaus |
| 0x2D | Lernwert fuer Ganguebersetzung Vorwaertsgang |
| 0x2E | Lernwert fuer Ganguebersetzung Rueckwaertsgang |
| 0x2F | Lernwert fuer Speicherung Fehlercounter |
| 0x30 | DEBUGCOUNTER, der sich inkrementiert vor jedem EEPROM-schreiben |
| 0x31 | Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x32 | Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x33 | Toleranz fuer Offsetwert des Gierratensensors 1 aus Stillstandabgleich (Temperatur kompensiert) |
| 0x34 | Toleranz fuer Offsetwert des Gierratensensors 2 aus Stillstandabgleich (Temperatur kompensiert) |

### TAB_ADAPTIVDATEN_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Adaptivdaten nicht auf Werksdaten gesetzt |
| 0x01 | Adaptivdaten auf Werksdaten gesetzt |
| 0xFF | unbekannter Zustand |

### TAB_ADAPTIVDATEN_ZFM

| WERT | TEXT |
| --- | --- |
| 0x00 | Offset der Laengsbeschleunigung aus Motormoment |
| 0x01 | Reserviert für AFS (MLW Werksmodus gelernt) |
| 0x02 | Reserviert für AFS (MLW Anschlag Anschlag) |
| 0x03 | Status Schneekette |
| 0x04 | Zähler Schneeketten Modus |
| 0x05 | Dauer über alle Fahrzyklen |
| 0x06 | Dauer linearer Fahrbereich über alle Fahrzyklen |
| 0x07 | Anteil linearer Fahrbereich in allen Fahrzyklen |
| 0x08 | Zähler RQ SQ HSR Bereich 1 |
| 0x09 | Zähler RQ SQ HSR Bereich 2 |
| 0x0A | Zähler RQ SQ HSR Bereich 3 |
| 0x0B | Zähler RQ HSR Bereich 1 |
| 0x0C | Zähler RQ HSR Bereich 2 |
| 0x0D | Zähler RQ HSR Bereich 3 |
| 0x0E | Zähler RQ GMVH Bereich 1 |
| 0x0F | Zähler RQ GMVH Bereich 2 |
| 0x10 | Zähler RQ GMVH Bereich 3 |
| 0x11 | Zähler RQ ARS Bereich 1 |
| 0x12 | Zähler RQ ARS Bereich 2 |
| 0x13 | Zähler RQ ARS Bereich 3 |
| 0x14 | Dauer der Reglereingriffe im linearer Fahrbereich |
| 0x15 | Sekundenzähler Allradmodus 1 |
| 0x16 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 1 |
| 0x17 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 2 |
| 0x18 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 3 |
| 0x19 | Sekundenzähler der LMV Belastung: Allradmodus 1, Schwelle 4 |
| 0x1A | Sekundenzähler Allradmodus 2 |
| 0x1B | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 1 |
| 0x1C | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 2 |
| 0x1D | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 3 |
| 0x1E | Sekundenzähler der LMV Belastung: Allradmodus 2, Schwelle 4 |
| 0x1F | Sekundenzähler Allradmodus 3 |
| 0x20 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 1 |
| 0x21 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 2 |
| 0x22 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 3 |
| 0x23 | Sekundenzähler der LMV Belastung: Allradmodus 3, Schwelle 4 |
| 0x24 | Sekundenzähler Allradmodus 4 |
| 0x25 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 1 |
| 0x26 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 2 |
| 0x27 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 3 |
| 0x28 | Sekundenzähler der LMV Belastung: Allradmodus 4, Schwelle 4 |
| 0x29 | Sekundenzähler Allradmodus 5 |

### TAB_ASC_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 2 | verfügbar Rückfallebene |
| 3 | verfügbar Schlupf aufgeweitet |
| 4 | verfügbar Rückfallebene Schlupf aufgeweitet |
| 0xFF | ungültig |

### TAB_AUTOHOLDTASTER

| WERT | TEXT |
| --- | --- |
| 0 | Taster nicht betätigt |
| 1 | Taster gedrückt |
| 2 | Taster defekt |
| 3 | Signalmuster ungültig |

### TAB_AXLE_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | false |
| 0x01 | true |
| 0xFF | Undefiniert |

### TAB_AX_AY_ABGLEICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Abgleich ax_ay muss noch erfolgen |
| 0x01 | Abgleich ax_ay erfolgt |
| 0xFF | unbekannter Zustand |

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
| 0x01 | Bremspedal während NP1-Messung betätigt |
| 0x02 | Reserve |
| 0x03 | Reserve |
| 0x04 | Reserve |
| 0x05 | Reserve |
| 0x06 | Messwert schwankt innerhalb der NP1 - Messung |
| 0x07 | Reserve |
| 0x08 | Reserve |
| 0x09 | Ermittelter Wert für Nullstellung zu groß |
| 0x0A | Ermittelter Wert für Nullstellung zu klein |
| 0x0B | Fahrzeug steht nicht |
| 0x0C | Verbrenner läuft nicht bzw. Booster nicht ausreichend evakuiert |
| 0x0D | Bremslichtschalter nicht unbetätigt bei Start der Routine |
| 0x0E | elektrischer Fehler des Bremspedalwegsensors ist aktiv |
| 0xFF | ungültig |

### TAB_BREMSENSTATUS_LINKS

| WERT | TEXT |
| --- | --- |
| 0x00 | Angelegt |
| 0x10 | beim Schließen |
| 0x20 | Geschlossen |
| 0x30 | Geöffnet |
| 0x40 | beim Öffnen |
| 0x50 | unbekannt / fehlerhaft |
| 0x60 | Initialisierung |
| 0x70 | in Montageposition |
| 0x80 | beim Anfahren der Montageposition |
| 0xFF | Wert ungültig |

### TAB_BREMSENSTATUS_RECHTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Angelegt |
| 0x01 | beim Schließen |
| 0x02 | Geschlossen |
| 0x03 | Geöffnet |
| 0x04 | beim Öffnen |
| 0x05 | unbekannt / fehlerhaft |
| 0x06 | Initialisierung |
| 0x07 | in Montageposition |
| 0x08 | beim Anfahren der Montageposition |
| 0xFF | Wert ungültig |

### TAB_DREHRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stand |
| 0x01 | Vorwaerts |
| 0x02 | Rueckwaerts |
| 0x03 | nicht definiert |

### TAB_DSC_PHASE_ENTLUEFTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine |
| 0x01 | VL |
| 0x02 | VR |
| 0x03 | HL |
| 0x04 | HR |
| 0x05 | KREIS1, LU/LI Diagonal: Kreis 1 (VL/HR),  LK(F25, F20, F30) Schwarz-Weiß: Hinterachse |
| 0x06 | KREIS1, LU/LI Diagonal: Kreis 1 (VL/HR),  LK(F25, F20, F30) Schwarz-Weiß: Vorderachse |
| 0x07 | VORBEREITUNG |
| 0x08 | NACHBEREITUNG |
| 0xFF | Wert ungültig |

### TAB_DSC_PHASE_VAKUUMBEFUELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nv |
| 0x01 | evakuieren |
| 0x02 | fuellen |
| 0x03 | nivellieren |

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

### TAB_EMF_HU_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | aktiv |
| 0x01 | Stufe 1 |
| 0x02 | Stufe 2 |
| 0x03 | Stufe 3 |
| 0x04 | Stufe 4 |
| 0x05 | Stufe 5 |
| 0x06 | Stufe 6 |
| 0xFF | nicht aktiv |

### TAB_EMF_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Angelegt |
| 0x01 | beim Schließen |
| 0x02 | Geschlossen |
| 0x03 | Geöffnet |
| 0x04 | beim Öffnen |
| 0x05 | Initialisierung |
| 0x06 | unbekannt / fehlerhaft |
| 0x07 | Montageposition |
| 0x08 | beim Anfahren Montageposition |
| 0xFF | nicht definiert |

### TAB_EMF_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | neutral |
| 0x01 | gezogen |
| 0x02 | gedrueckt |
| 0x03 | Fehler |
| 0xFF | undefinierter Zustand |

### TAB_EMF_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0 | Lösen |
| 1 | Feststellen |
| 2 | Montage |
| 3 | Anlegen |
| 4 | OpenBrakeRearLeft |
| 5 | OpenBrakeRearRight |
| 6 | OpenBrakeBoth |
| 7 | CloseBrakeRearLeft |
| 8 | CloseBrakeRearRight |
| 9 | CloseBrakeBoth |
| 10 | TouchBrakeRearLeft |
| 11 | TouchBrakeRearRight |
| 12 | TouchBrakeBoth |
| 13 | AssemblyCheck |

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

### TAB_EPB_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0x02 | Defekt |
| 0xFF | Signalmuster ungültig |

### TAB_EPB_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster gezogen |
| 0x02 | Taster gedrückt |
| 0x03 | Taster defekt |
| 0xFF | Signalmuster ungültig |

### TAB_EPB_TASTER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Drücken defekt |
| 0x02 | Ziehen defekt |
| 0xFF | Signalmuster ungültig |

### TAB_ERFS_AKT_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0x00 | Nein |
| 0x01 | Ja |
| 0xFF | Ungültig |

### TAB_ERFS_GESCHW_IDX

| WERT | TEXT |
| --- | --- |
| 0x00 | L |
| 0x01 | M |
| 0x02 | N |
| 0x03 | P |
| 0x04 | Q |
| 0x05 | R |
| 0x06 | S |
| 0x07 | T |
| 0x08 | U |
| 0x09 | H |
| 0x0A | V |
| 0x0B | VR |
| 0x0C | W |
| 0x0D | ZR |
| 0x0E | Y |
| 0xFF | Ungültig |

### TAB_ERFS_KARKASSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Normal Last |
| 0x01 | Extra Last |
| 0xFF | Ungültig |

### TAB_ERFS_RSC

| WERT | TEXT |
| --- | --- |
| 0x00 | RSC |
| 0x01 | Standard |
| 0x02 | PAX |
| 0x03 | Seal |
| 0xFF | Ungültig |

### TAB_ERFS_SAISON

| WERT | TEXT |
| --- | --- |
| 0x00 | Sommer |
| 0x01 | Winter |
| 0x02 | Ganzjahres |
| 0xFF | Ungültig |

### TAB_ERFS_WERKSAUSLIEFERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nein |
| 0x01 | Ja |
| 0xFF | Ungültig |

### TAB_ERRID_EMELECTRONICHORIZON

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: ComError_ADASInput |
| 0x02 | 2: ComError_LaneBoundaries |
| 0x03 | 3: Reduced_LaneBoundaries |
| 0x04 | 4: Unavailable_LaneBoundaries |
| 0x05 | 5: ComError_Timestamp |
| 0xFF | Wert ungültig |

### TAB_ERRID_EMSLCONDITIONEVALUATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | 0: unbekannt |
| 0x01 | 1: ComError_BodyInput |
| 0x02 | 2: Reduced_BodyInput |
| 0x03 | 3: Missed_BodyInput |
| 0x04 | 4: ComError_TemperatureInput |
| 0x05 | 5: Reduced_TemperatureInput |
| 0x06 | 6: Missed_TemperatureInput |
| 0x07 | 7: ComError_OdometryInput |
| 0x08 | 8: Reduced_OdometryInput |
| 0x09 | 9: Missed_OdometryInput |
| 0x0A | 10: ComError_ClockInput |
| 0x0B | 11: Reduced_ClockInput |
| 0x0C | 12: Missed_ClockInput |
| 0xFF | Wert ungültig |

### TAB_FAHRZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt (Richtung unsicher) |
| 7 | Signal ungültig |
| 255 | unbekannter Zustand |

### TAB_FDR_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 3 | verfügbar Schlupf aufgeweitet |
| 0xFF | ungültig |

### TAB_HDC_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0 | nicht verfügbar |
| 1 | verfügbar |
| 0xFF | ungültig |

### TAB_HSR_QUAL

| WERT | TEXT |
| --- | --- |
| 4 | Sollwert umsetzen, Diagnosefreigabe |
| 32 | Sollwert umsetzen |
| 96 | Fehler |
| 112 | Sollwert nicht vorhanden |
| 128 | Initialisierung |
| 224 | Sollwert nicht umsetzen |
| 228 | Sollwert nicht umsetzen, Diagnosefreigabe |
| 255 | Signal ungültig |

### TAB_HYDRAULISCHE_FUNKTIONSPRUEFUNG_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Ungültig |
| 0x01 | Hydraulische Funktionstest |
| 0x02 | Auslieferzustand herstellen |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### TAB_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | RDC unterbrochen mit Fehler |
| 0x01 | RDC Reset Erfolgreich abgeschlossen |
| 0x02 | eRFS - Auswahl über ABK |
| 0x03 | eRFS - Auswahl über Diagnose |
| 0x04 | Steuegerät noch nicht kalibriert |
| 0x05 | Automatische Befüllerkennung RE0 |
| 0x06 | Automatische Befüllerkennung RE1 |
| 0x07 | Automatische Befüllerkennung RE2 |
| 0x08 | Automatische Befüllerkennung RE3 |
| 0x09 | NVM beschädigt |
| 0x0A | RID - Erkennung ohne Fortschrittsanzeige |
| 0x0B | RID - Erkennung mit Fortschrittsanzeige |
| 0x81 | RDC Reset abgeschlossen - RE Positionen vermutet |
| 0x82 | eRFS - Auswahl über ABK - RE Positionen vermutet |
| 0x83 | eRFS - Auswahl über Diagnose - RE Positionen vermutet |
| 0x84 | Steuegerät noch nicht kalibriert - RE Positionen vermutet |
| 0x85 | Automatische Befüllerkennung RE0 - RE Positionen vermutet |
| 0x86 | Automatische Befüllerkennung RE1 - RE Positionen vermutet |
| 0x87 | Automatische Befüllerkennung RE2 - RE Positionen vermutet |
| 0x88 | Automatische Befüllerkennung RE3 - RE Positionen vermutet |
| 0x8A | RID - Erkennung ohne Fortschrittsanzeige - RE Positionen vermutet |
| 0x8B | RID - Erkennung with Fortschrittsanzeige - RE Positionen vermutet |
| 0xFE | Kalibrierung läuft |
| 0xFF | Ungültig |

### TAB_LETZTESBREMSENEVENT

| WERT | TEXT |
| --- | --- |
| 0x00 | DiagRequestNone |
| 0x01 | OpenBrakeRearLeft |
| 0x02 | OpenBrakeRearRight |
| 0x03 | OpenBrakeBoth |
| 0x04 | CloseBrakeRearLeft |
| 0x05 | CloseBrakeRearRight |
| 0x06 | CloseBrakeBoth |
| 0x07 | TouchBrakeRearLeft |
| 0x08 | TouchBrakeRearRight |
| 0x09 | TouchBrakeBoth |
| 0x0A | StepCloseRearLeft |
| 0x0B | StepCloseRearRight |
| 0x0C | StepCloseBoth |
| 0x0D | AssemblyCheck |
| 0x0E | EnterMaintenanceMode |
| 0x0F | ExitMaintenanceMode |
| 0xFF | Wert ungültig |

### TAB_LLA_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Andere |
| 0x01 | Anlern Fehler |
| 0x02 | Lokalisierung Fehler |
| 0x03 | Erfolgreich |
| 0xFF | Ungueltig |

### TAB_MEMORY_PROTECTION_UNIT

| WERT | TEXT |
| --- | --- |
| 0x00 | deaktivieren |
| 0x01 | aktivieren |

### TAB_OPERATINGSYSTEM_ICM_HSR

| WERT | TEXT |
| --- | --- |
| 33 | Drive Standby |
| 34 | Drive |
| 49 | Drive Standby, USW1 |
| 50 | Drive, USW2 |
| 53 | Drive Standby, USW2 |
| 54 | Drive, USW1 |
| 57 | Drive Standby, USW3 |
| 58 | Drive, USW3 |
| 104 | Error |
| 128 | Initialisierung |
| 224 | POSTRUN |
| 225 | ReadyforDrive |
| 227 | Drive_RampZero |
| 228 | WaitForRLWSet |
| 233 | ReadyForDrive Unterspannung |
| 235 | Drive_RampZero Unterspannung |
| 255 | ungültiges Signal |

### TAB_PAL_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Warten |
| 0x03 | Laeuft |
| 0x04 | Abgeschlossen i.O. |
| 0x05 | Time Out |
| 0x06 | Aufgehaengt |
| 0xFF | Undefiniert |

### TAB_PCIB_START_STATE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Eintrag |
| 1 | Bremse genutzt |
| 0xFF | Wert ungültig |

### TAB_PCIB_STOP_STATE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Eintrag |
| 1 | Ziel Anhaltegeschwindigkeit erreicht |
| 2 | übersteuert durch Gaspedal Betätigung |
| 3 | übersteuert durch Bremspedal Betätigung |
| 4 | Verbindung zu Gas- und Bremspedal verloren |
| 5 | Abwürgverhinderung |
| 0xFF | Wert ungültig |

### TAB_PLAUSI_DRUCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehlgeschlagen |
| 0x01 | Erfolgreich |
| 0x02 | Manuelle Kalibrierung fehlgeschlagen |
| 0x03 | Manuelle Kalibrierung erfolgreich |
| 0xFE | Läuft |
| 0xFF | Ungültig |

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
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0x03 | Gateway oder Antenne Fehler |
| 0x04 | Weiche Warnung aktiv |
| 0xFF | Ungültig |

### TAB_RDC_BANDMODE_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Bandmode nicht aktiv |
| 1 | Bandmode aktiv |
| 255 | Nicht definiert |

### TAB_RDC_BEKANNT_NICHT_BEKANNT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht bekannt |
| 1 | Bekannt |
| 255 | Nicht definiert |

### TAB_RDC_CAL_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrieranforderung inaktiv |
| 1 | Kalibrieranforderung aktiv |
| 2 | Kalibrierung abgewiesen |
| 255 | Nicht definiert |

### TAB_RDC_CHANGED

| WERT | TEXT |
| --- | --- |
| 0 | Nicht geändert |
| 1 | Geändert |
| 255 | Ungültig |

### TAB_RDC_DETECTED

| WERT | TEXT |
| --- | --- |
| 0 | Nicht erkannt |
| 1 | Erkannt |
| 255 | Nicht definiert |

### TAB_RDC_DTC_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0 | DTC nicht aktiv |
| 1 | DTC aktiv |
| 255 | Nicht definiert |

### TAB_RDC_INT_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Radelektronik 0 mute |
| 1 | Radelektronik 1 mute |
| 2 | Radelektronik 2 mute |
| 3 | Radelektronik 3 mute |
| 4 | nicht benutzt |
| 5 | Radelektronik 0 defekt |
| 6 | Radelektronik 1 defekt |
| 7 | Radelektronik 2 defekt |
| 8 | Radelektronik 3 defekt |
| 9 | RDCi Bandmode aktiv |
| 10 | Eigenrad Einlernfehler |
| 11 | Gateway / Antenne Fehler |
| 12 | Eingangssignal fehlt |
| 13 | Eingangssignal ungültig |
| 14 | Eingangssignal Alive Fehler |
| 15 | Eingangssignal CRC Fehler |
| 16 | HF Überdeckung |
| 17 | Geschwindigkeitssignal Fehler |
| 128 | Geschütztes RAM Bereich Fehler |
| 129 | EEPROM Fehler beim Initialisierung |
| 130 | EEPROM Fehler beim Laufzeit |
| 131 | Betriebssystem Task Fehler |
| 132 | SW Watchdog Fehler |
| 255 | Ungültig |

### TAB_RDC_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Ein |
| 9 | Nicht bedient |
| 255 | Nicht definiert |

### TAB_RDC_RAD_POSITION_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | vorn links |
| 0x01 | vorn rechts |
| 0x02 | hinten links |
| 0x03 | hinten rechts |
| 0x05 | unbekannt 1 |
| 0x04 | Reserverad (nur RDC Gen2) |
| 0x06 | unbekannt 2 |
| 0x07 | unbekannt 3 |
| 0x08 | unbekannt 4 |
| 0x09 | unbekannt 5 (nur RDC Gen2) |
| 0xFF | Ungültig |

### TAB_RDC_RE_HERSTELLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserviert |
| 0x01 | Frei |
| 0x02 | Huf |
| 0x03 | Continental |
| 0x04 | Frei |
| 0x05 | Schrader |
| 0x06 | Frei |
| 0x07 | Frei |
| 0x08 | Frei |
| 0x09 | Frei |
| 0x0A | Frei |
| 0x0B | Frei |
| 0x0C | Frei |
| 0x0D | Frei |
| 0x0E | Frei |
| 0x0F | Andere |
| 0x12 | Huf - RE Positionen vermutet |
| 0x13 | Continental - RE Positionen vermutet |
| 0x15 | Schrader - RE Positionen vermutet |
| 0x1F | Andere - RE Positionen vermutet |
| 0xFF | Ungueltig |

### TAB_RDC_RE_SENDEMODE_AK

| WERT | TEXT |
| --- | --- |
| 0x00 | Stationär |
| 0x01 | Stationär TFA |
| 0x02 | Einlernen Fahren |
| 0x03 | Normal Fahren |
| 0x04 | Einlernen Interim |
| 0x05 | Normal Interim |
| 0x06 | Delta P |
| 0x07 | OFF Modus |
| 0x08 | Über LF angefordert |
| 0xFF | Ungültig |

### TAB_RDC_RE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Radelektronik i.O. |
| 0x01 | Radelektronik mute |
| 0x02 | Radelektronik defekt |
| 0x03 | Radelektronik Daten noch nicht empfangen |
| 0xFF | Ungültig |

### TAB_RDC_STARTED

| WERT | TEXT |
| --- | --- |
| 0 | Nicht gestartet |
| 1 | Gestartet |
| 255 | Nicht definiert |

### TAB_RDC_STEUERFUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 1 | Bandmode |
| 4 | Test Eigenrad in Fahrt |
| 8 | Calibrierung |
| 255 | Ungültig |

### TAB_RDC_TIMEOUT

| WERT | TEXT |
| --- | --- |
| 0 | Kein Timeout |
| 1 | Timeout |
| 255 | Nicht definiert |

### TAB_RDC_VEHICLE_RUNNING

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt |
| 255 | Nicht definiert |

### TAB_RDC_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0x03 | Gateway oder Antenne Fehler |
| 0x04 | Weiche Warnung aktiv |
| 0xFF | Nicht definiert |

### TAB_RE_HERSTELLER

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht bedient |
| 0x01 | Autonet |
| 0x02 | HUF |
| 0x03 | Continental |
| 0x04 | TRW |
| 0x05 | Schrader |
| 0x0F | Hersteller unbekannt |
| 0xFF | Ungültig |

### TAB_RE_TELEGRAMMTYP

| WERT | TEXT |
| --- | --- |
| 0x00 | AK35 default |
| 0x82 | HUF G3  |
| 0x88 | AK35 HUF lang |
| 0xA0 | AK35 HUF mittel |
| 0xC1 | AK35 HUF kurz |
| 0xFF | Ungültig |

### TAB_RF_BASIS_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstützt |
| 0x01 | Aus |
| 0x02 | Stationär |
| 0x03 | Lokalisierung mit Bewegung |
| 0x04 | Lokalisierung ohne Bewegung |
| 0x05 | Fahrt mit Bewegung |
| 0x06 | Fahrt ohne Bewegung |
| 0x07 | Reserviert |
| 0xFF | Ungueltig |

### TAB_RF_BATTERIE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstützt |
| 0x01 | Nicht i.O. <=10% |
| 0x02 | 0.2 |
| 0x03 | 0.3 |
| 0x04 | 0.4 |
| 0x05 | 0.5 |
| 0x06 | 0.6 |
| 0x07 | 0.7 |
| 0x08 | 0.8 |
| 0x09 | 0.9 |
| 0x10 | 1.0 |
| 0x11 | i.O. |
| 0x12 | Reserviert |
| 0x13 | Reserviert |
| 0x14 | Reserviert |
| 0xFF | Ungueltig |

### TAB_RF_LTS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstützt |
| 0x01 | Nicht LTS |
| 0x02 | LTS Parkdauer > 7 Tage |
| 0x03 | LTS Parkdauer > 30 Tage |
| 0xFF | Ungueltig |

### TAB_RF_TX_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht unterstützt |
| 0x01 | Neu messen (Delta P) |
| 0x02 | LF Trigger |
| 0x03 | Geplante Sendung |
| 0xFF | Ungueltig |

### TAB_ROLLENMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen Werksrollenmodus |
| 2 | Setzen Rollenmodus Innenraum |

### TAB_SBS_GUELTIGKEIT_CHAR

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signalwert ist gültig |
| 3 | Signalwert ist nicht vertrauenswürdig |
| 4 | Ersatzwert ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |
| 127 | unbekannter Zustand |

### TAB_SBS_GUELTIGKEIT_UINT

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Signalwert ist gültig und abgesichert |
| 2 | Signalwert ist gültig |
| 3 | Signalwert ist nicht vertrauenswürdig |
| 4 | Ersatzweret ist im Nutzsignal gesetzt |
| 5 | Signal zu oft entprellt |
| 6 | Signalwert ist ungültig |
| 7 | Sensor nicht vorhanden oder Signal ungültig |
| 65535 | unbekannter Zustand |

### TAB_SCHALTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Idle |
| 0x01 | Release |
| 0x02 | Clamp |
| 0x03 | Error |
| 0xFF | undefinierter Zustand |

### TAB_STATUS_ANFORDERER

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen |
| 1 | Setzen |
| 2 | reservier |
| 3 | ungültig |

### TAB_STATUS_DRUCKSENSORKALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | Kalibrierung erfolgreich |
| 0x02 | Abbruch; Wert außerhalb Toleranz |
| 0x03 | Abbruch, Bremspedal betätigt |
| 0x04 | Abbruch, Signal ungültig |
| 0x05 | Abbruch, NV-Ram gesperrt |
| 0xFF | Wert ungültig |

### TAB_STATUS_HOST_SAFETY_BARRIER

| WERT | TEXT |
| --- | --- |
| 0x00 | Zustand 0 |
| 0x01 | Zustand 1 |
| 0x02 | Zustand 2 |
| 0x03 | Zustand 3 |
| 0x04 | Zustand 4 |
| 0x05 | Zustand 5 |
| 0xFF | Wert ungültig |

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

### TAB_STATUS_ROUTINE_DETAILS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gestartet oder aktiv |
| 0x01 | Test erfolgreich beendet |
| 0x02 | Abgebrochen: Pumpenmotor Fehler -> hydraulik Fehler |
| 0x05 | Abgebrochen: erkannte Fahrzeuggeschwindigkeit |
| 0x06 | Abgebrochen: Fehlerhafte Codierung oder Fehlerspeichereintrag |
| 0x07 | Abgebrochen:  Diagnosemodus aktiv |
| 0x08 | Abgebrochen: erkannter aktiver Regler |
| 0x09 | Abgebrochen: Pumpenmotor Drehzahlüberschreitung |
| 0x0A | Abgebrochen: Druckaufbau zu gering -> hydraulik Fehler |
| 0x0B | Abgebrochen: Timeout |
| 0x0D | Abgebrochen: Drucksensoren nicht initialisiert |
| 0x21 | Temporäre Unterbrechung: Versorgungsspannungsbereich |
| 0x22 | Temporäre Unterbrechung: zu hoher Hauptzylinderdruck |
| 0x25 | Temporäre Unterbrechung: Zündungswechsel oder Steuergeräte reset |
| 0xFF | Ungültig |

### TAB_STATUS_SEC_ZUGRIFF

| WERT | TEXT |
| --- | --- |
| 0 | Verriegelt |
| 1 | Geöffnet |

### TAB_STAT_MEMORY_PROTECTION_UNIT

| WERT | TEXT |
| --- | --- |
| 0x00 | deaktiviert |
| 0x01 | aktiviert |
| 0xFF | Wert ungültig |

### TAB_WU_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | vorne links |
| 0x01 | vorne rechts |
| 0x02 | hinten links |
| 0x03 | hinten rechts |
| 0x04 | Position bekannt |
| 0x05 | unbekannt 1 |
| 0x06 | unbekannt 2 |
| 0x07 | unbekannt 3 |
| 0x08 | unbekannt 4 |
| 0xFF | undefiniert |

### TAB_WU_PREWARN_WARN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | Warnung |
| 0x02 | Vorwarnung 1 |
| 0x03 | Vorwarnung 2 |
| 0x04 | Vorwarnung 3 |
| 0x05 | Vorwarnung 4 |
| 0xFF | Ungueltig |

### TAB_WU_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | Fehlt |
| 0x02 | Defekt |
| 0x03 | Unbekannt |
| 0x04 | Gestoert |
| 0xFF | Ungueltig |

### TAB_ZFM_FUNKTIONEN

| WERT | TEXT |
| --- | --- |
| 0x00 | LMV_AKTIV |
| 0x01 | LMV_PASSIV |
| 0x02 | LMV_NOTLAUF |
| 0x03 | LMV_MOMENT |
| 0x04 | GSD_AKTIV |
| 0x05 | GSD_PASSIV |
| 0x06 | GSD_MOMENT |
| 0x07 | FUNKTION_7_RESERVE |
| 0x08 | FUNKTION_8_RESERVE |
| 0x09 | FUNKTION_9_RESERVE |

### TAB_ZFM_FUNKTIONSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | AKTIV |
| 0x01 | PASSIV |
| 0x02 | NOTLAUF |
| 0x03 | FEHLER |
| 0x04 | MOMENT |
| 0x05 | STATUS_5 |
| 0x06 | STATUS_6 |
| 0xFF | Wert ungültig |

### TAB_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Pumpe Vollansteuerung |
| 0x02 | Pumpe EMV-Betrieb (Teilansteuerung) |
