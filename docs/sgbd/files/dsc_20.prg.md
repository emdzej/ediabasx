# dsc_20.prg

## General

|  |  |
| --- | --- |
| File | dsc_20.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 69 |
| Origin | BMW EF-510 Thomas_Maier |
| Revision | 0.901 |
| Author | BMW EF-601 Stefan_Jurthe, BMW EF-601 Magdalena_Keil |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitätskontrolle |  |  |
| ORIGIN | string | BMW EF-510 Thomas_Maier |  |  |
| REVISION | string | 0.901 |  |  |
| AUTHOR | string | BMW EF-601 Stefan_Jurthe, BMW EF-601 Magdalena_Keil |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.12 |  |  |
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
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 255 Defaultwert: 100 |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter, keine Aenderung: 255 Defaultwert: 255 |
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

### DEBUG_DMCLIENT_SYSTIME

Systemzeit UDS  : $22   ReadDataByIdentifier UDS  : $1701 Sub-Parameter Systemzeit Modus: Default

_No arguments._

### STATUS_VIN

HW_NR UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter VIN Modus: Default

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
| 0x480681 | Weckleitung aktiv - Bus Sleep registriert bei aktiver Weckleitung | 0 |
| 0x480685 | EMF - Unter- oder Überspannung, anziehen und lösen nicht möglich | 1 |
| 0x480686 | Raddrehzahlsensor - Hinten Rechts - Anfahrerkennung fehlerhaft | 0 |
| 0x480689 | ICM  - Plausi: Initialisierung ICM SG dauert zu lange | 1 |
| 0x48068A | ICM  - Längsbeschleunigung  - Phase 2: Fehleramplitude zu groß | 1 |
| 0x48068B | ICM  - Querbeschleunigung  - Phase 2: Fehleramplitude zu groß | 1 |
| 0x48068E | Automatikhold - Anzeige Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x48069D | ICM  - Ist Lenkwinkel VA Rad - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B1 | ICM  - Längsbeschleunigung  - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B2 | ICM  - Querbeschleunigung  - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4806B4 | Steuergerät intern - Conti - Steuergerät intern - Main Treiber Fehler | 0 |
| 0x4806D9 | Steuergerät intern - Conti - Steuergerät intern - EEPROM Fehler | 0 |
| 0x4806E3 | Automatikhold - Temporäre Deaktivierung zur Überhitzungsvermeidung | 0 |
| 0x4806F1 | Drucksensor - Vorne Rechts - Federkontakt oder Sensor defekt | 0 |
| 0x4806F2 | Drucksensor - Vorne Rechts - Unplausibler Druckunterschied | 0 |
| 0x4806F3 | Drucksensor - Vorne Rechts - Temperaturfehler | 0 |
| 0x4806F4 | Drucksensor - Vorne Rechts - Unplausibel gegen Hauptdruck | 0 |
| 0x4806F5 | Drucksensor - Vorne Rechts - Offsetfehler | 0 |
| 0x4806F6 | Drucksensor - Vorne Rechts - Hydraulisches Bremssystem undicht | 0 |
| 0x4806F7 | Drucksensor - Hinten Links - Federkontakt oder Sensor defekt | 0 |
| 0x4806F8 | Drucksensor - Hinten Links - Unplausibler Druckunterschied | 0 |
| 0x4806F9 | Drucksensor - Hinten Links - Temperaturfehler | 0 |
| 0x4806FA | Drucksensor - Hinten Links - Unplausibel gegen Hauptdruck | 0 |
| 0x4806FB | Drucksensor - Hinten Links - Hydraulisches Bremssystem undicht | 0 |
| 0x4806FC | Drucksensor - Hinten Links - Offsetfehler | 0 |
| 0x480703 | Steuergerät intern - Conti - Steuergerät intern - Ventile Fehler | 0 |
| 0x480704 | Steuergerät intern - Conti - Steuergerät intern - Laufzeitfehler | 0 |
| 0x480705 | Steuergerät intern - Conti - Steuergerät intern - HW Fehler ASG intern, System ASIC | 0 |
| 0x480706 | Steuergerät intern - Conti - Steuergerät intern - HW Fehler ASG intern | 0 |
| 0x480707 | Steuergerät intern - Conti - Steuergerät intern - RAM/ROM Fehler | 0 |
| 0x480708 | Steuergerät intern - Conti - Steuergerät intern - Fehler bei NM-Shutdown-Anforderung | 0 |
| 0x480709 | Steuergerät intern - Conti - Steuergerät intern - Unplausibler Ventilstrom | 0 |
| 0x48070B | Steuergerät intern - Conti - EEPROM Fehler - Ventildaten | 0 |
| 0x48070C | Steuergerät intern - Conti - EEPROM Fehler - RPA-Daten | 0 |
| 0x48070D | Steuergerät intern - Conti - EEPROM Fehler - Einlassventildaten | 0 |
| 0x48070E | Bremslichtschalter - Plausibilitätsfehler | 0 |
| 0x480710 | Raddrehzahlsensor - Vorne Links - Plausi: Drehrichtung | 0 |
| 0x480711 | Raddrehzahlsensor - Vorne Links - Unplausibilität bei ABS-Regelung | 0 |
| 0x480712 | Raddrehzahlsensor - Vorne Links - Elektrischer Fehler | 0 |
| 0x480713 | Raddrehzahlsensor - Vorne Rechts - Plausi: Drehrichtung | 0 |
| 0x480714 | Raddrehzahlsensor - Vorne Rechts - Unplausibilität bei ABS-Regelung | 0 |
| 0x480715 | Raddrehzahlsensor - Vorne Rechts - Elektrischer Fehler | 0 |
| 0x480716 | Raddrehzahlsensor - Hinten Links - Plausi: Drehrichtung | 0 |
| 0x480717 | Raddrehzahlsensor - Hinten Links - Unplausibilität bei ABS-Regelung | 0 |
| 0x480718 | Raddrehzahlsensor - Hinten Links - Elektrischer Fehler | 0 |
| 0x480719 | Raddrehzahlsensor - Hinten Rechts - Plausi: Drehrichtung | 0 |
| 0x48071A | Raddrehzahlsensor - Hinten Rechts - Unplausibilität bei ABS-Regelung | 0 |
| 0x48071B | Raddrehzahlsensor - Hinten Rechts - Elektrischer Fehler | 0 |
| 0x48071C | DSC Pumpe - Versorgungsspannung | 0 |
| 0x48071E | Steuergerät intern - Conti - Steuergerät intern - Hardware Fehler | 0 |
| 0x480928 | Raddrehzahlsensor - Vorne Links - Fehlender Zahn | 0 |
| 0x48092B | ICM  - Querbeschleunigung  - Phase 3: Fehleramplitude zu groß | 1 |
| 0x480932 | Bremsflüssigkeitssensor - Bremsflüssigkeitsstand zu niedrig | 0 |
| 0x48093C | ICM  - Ist Lenkwinkel VA Rad - Phase 3: Fehleramplitude zu groß | 1 |
| 0x480964 | Lokale Spannungsversorgung - schwere Unterspannung | 1 |
| 0x480965 | Lokale Spannungsversorgung - Überspannung | 1 |
| 0x48096F | ICM  - Längsbeschleunigung  - Phase 3: Fehleramplitude zu groß | 1 |
| 0x4809B0 | Raddrehzahlsensor - Vorne Links - Anfahrerkennung fehlerhaft | 0 |
| 0x4809B7 | Raddrehzahlsensor - Hinten Links - Fehlender Zahn | 0 |
| 0x4809B9 | Raddrehzahlsensor - Hinten Links - Anfahrerkennung fehlerhaft | 0 |
| 0x4809C0 | Lokale Spannungsversorgung - Unexpected Shutdown | 1 |
| 0x4809C1 | EMF - Uebernahme nicht möglich | 1 |
| 0x4809C2 | Raddrehzahlsensor - Hinten Rechts - Fehlender Zahn | 0 |
| 0x4809CB | Raddrehzahlsensor - Vorne Rechts - Fehlender Zahn | 0 |
| 0x4809CD | Raddrehzahlsensor - Vorne Rechts - Anfahrerkennung fehlerhaft | 0 |
| 0x4809D4 | Bremslichtschalter - permanent getretenes Bremspedal (Verdacht) | 0 |
| 0x4809D7 | Steuergerät intern - Conti - Steuergerät intern - Busfehler - Fehler Failsafe Schaltung | 0 |
| 0x4809D8 | Steuergerät intern - Conti - Steuergerät intern - Busfehler - Fehler Memory Access | 0 |
| 0x4809D9 | Steuergerät intern - Conti - Steuergerät intern - Temperatursensor - Elektrischer Fehler | 0 |
| 0x4809DC | ECBA - Drehmoment angefordert, aber Release-Bit nicht gesetzt | 1 |
| 0x4809DF | ICM  - Giergeschwindigkeit - Phase 1: Fehleramplitude zu groß | 1 |
| 0x4809E0 | ICM  - Giergeschwindigkeit - Phase 2: Fehleramplitude zu groß | 1 |
| 0x4809E1 | ICM  - Giergeschwindigkeit - Phase 3: Fehleramplitude zu groß | 1 |
| 0x4809E2 | Drucksensor - Hauptzylinder - Fehler in Spannungsversorgung | 0 |
| 0x480A02 | ICM  - Ist Lenkwinkel VA Rad - Phase 2: Fehleramplitude zu groß | 1 |
| 0x480A08 | Drucksensor - Hauptzylinder - Leitungsfehler | 0 |
| 0x480A11 | Bremsbelagsensor - Vorderachse - Verschleissgrenze erreicht | 0 |
| 0x480A12 | Bremsbelagsensor - Hinterachse - Verschleissgrenze erreicht | 0 |
| 0x480A13 | Bremsbelagsensor - Vorderachse - Plausibilität | 0 |
| 0x480A14 | Bremsbelagsensor - Hinterachse - Plausibilität | 0 |
| 0x480A22 | Drucksensor - nicht kalibriert | 0 |
| 0x480A23 | Codierung - Falsches Fahrzeug | 0 |
| 0x480A5B | DSC Pumpe - gemessene Drehzahl trotz Ansteuerung zu gering - RFP laeuft nicht | 0 |
| 0x480A65 | Automatikhold - Taster Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x480A69 | Drucksensor - Hauptzylinder - Impulstest fehlgeschlagen | 0 |
| 0x480A7A | EMF - Stellvorgang nicht umgesetzt | 1 |
| 0x480A7E | EMF - Zeitverzug EGS - während Anforderung Getriebe-P, während Elektrohydraulischen Modus | 1 |
| 0x480A7F | Codierung - Steuergeraet nicht codiert | 0 |
| 0x480A83 | Codierung - Signatur fehlerhaft | 0 |
| 0x480A84 | Codierung - ungueltige Daten | 0 |
| 0x480A8B | Drucksensor - Interne Plausibilisierung fehlgeschlagen | 0 |
| 0x480A8C | Drucksensor - Rauschüberwachung | 0 |
| 0x480A8D | Drucksensor - Plausibilisierung Temperatur intern | 0 |
| 0x480A8F | Drucksensor - Plausibilisierung zwischen Hauptzylinder und Kreisdrucksensor | 0 |
| 0x480A90 | Raddrehzahlsensor - Allgemein - Rollenmodus aktiv | 0 |
| 0x480A91 | Drucksensor - Hauptzylinder - Offsetfehler | 0 |
| 0x480A92 | Raddrehzahlsensor - Allgemein - Unterspannung bei aktiven Anfahrassistenten | 0 |
| 0x480A93 | Codierung - Transaktion gescheitert | 0 |
| 0x480A9B | Fahrzeugregler Dauerregelung | 0 |
| 0x480A9C | Raddrehzahlsensor - Vorne Links - Falscher Sensortyp | 0 |
| 0x480A9D | Raddrehzahlsensor - Vorne Links - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480A9E | Raddrehzahlsensor - Vorne Links - unerwarteter Signalsprung | 0 |
| 0x480A9F | Raddrehzahlsensor - Vorne Links - Rauschüberwachung | 0 |
| 0x480AA0 | Steuergerät intern - Falscher HW Musterstand oder nicht freigegebene Software | 0 |
| 0x480AA1 | ECBA - Plausi Anforderung gegen Fahrzeugverzögerung | 1 |
| 0x480AA3 | Raddrehzahlsensor - Vorne Rechts - Falscher Sensortyp | 0 |
| 0x480AA4 | Raddrehzahlsensor - Vorne Rechts - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480AA5 | Raddrehzahlsensor - Vorne Rechts - unerwarteter Signalsprung | 0 |
| 0x480AA6 | Raddrehzahlsensor - Vorne Rechts - Rauschüberwachung | 0 |
| 0x480AAA | Raddrehzahlsensor - Hinten Links - Falscher Sensortyp | 0 |
| 0x480AAB | Raddrehzahlsensor - Hinten Links - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480AAC | Raddrehzahlsensor - Hinten Links - unerwarteter Signalsprung | 0 |
| 0x480AAD | Raddrehzahlsensor - Hinten Links - Rauschüberwachung | 0 |
| 0x480AB1 | Raddrehzahlsensor - Hinten Rechts - Falscher Sensortyp | 0 |
| 0x480AB2 | Raddrehzahlsensor - Hinten Rechts - Plausi gegen Radgeschwindigkeit | 0 |
| 0x480AB3 | Raddrehzahlsensor - Hinten Rechts - unerwarteter Signalsprung | 0 |
| 0x480AB4 | Raddrehzahlsensor - Hinten Rechts - Rauschüberwachung | 0 |
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
| 0xD35426 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Ungültig | 1 |
| 0xD35427 | Signalfehler (Anforderung Bremsmoment Summe, ID: RQ_BRTORQ_SUM) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35428 | Botschaftsfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Timeout | 1 |
| 0xD3542C | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Ungültig | 1 |
| 0xD3542E | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Qualifier | 1 |
| 0xD35434 | Signalfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Ungültig | 1 |
| 0xD35435 | Signalfehler (Anforderung Differenz Bremsmoment Giermomentverteilung, ID: RQ_DIFF_BRTORQ_YMR) Sender: ICM_QL - Undefiniert | 1 |
| 0xD35442 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: RAD1_2 - Ungültig | 1 |
| 0xD35443 | Signalfehler (Bedienung Fahrwerk, ID: BEDIENUNG_FAHRWERK) Sender: RAD1_2 - Undefiniert | 1 |
| 0xD35444 | Botschaftsfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Timeout | 1 |
| 0xD35445 | Botschaftsfehler (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Sender: ACSM - Checksumme | 1 |
| 0xD35448 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Ungültig | 1 |
| 0xD3544E | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Ungültig | 1 |
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
| 0xD35476 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Ungültig | 1 |
| 0xD35478 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD35479 | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD3547A | Botschaftsfehler (Eigenlenkverhalten Fahrzeug, ID: RSB_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD35482 | Botschaftsfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Timeout | 1 |
| 0xD3549C | Signalfehler (Klemmen, ID: KLEMMEN) Sender: CAS, FEM - Qualifier | 1 |
| 0xD354A0 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Qualifier | 1 |
| 0xD354A9 | Botschaftsfehler (Fehlerspeicher Bordnetz Spannung, ID: CTR_ERRM_BN_U) Sender: DME1 - Timeout | 1 |
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
| 0xD354C2 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Timeout | 1 |
| 0xD354C3 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Checksumme | 1 |
| 0xD354C4 | Botschaftsfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Alive | 1 |
| 0xD354C8 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Ungültig | 1 |
| 0xD354C9 | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Undefiniert | 1 |
| 0xD354CC | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Timeout | 1 |
| 0xD354CD | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Checksumme | 1 |
| 0xD354CE | Botschaftsfehler (Höhenstand Fahrzeug gefiltert, ID: HGLV_VEH_FILT) Sender: ICM_QL - Alive | 1 |
| 0xD354D6 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Timeout | 1 |
| 0xD354D7 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Checksumme | 1 |
| 0xD354D8 | Botschaftsfehler (Ist Lenkwinkel Fahrer, ID: AVL_STEA_DV) Sender: ICM_QL, SZL_LWS - Alive | 1 |
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
| 0xD355A0 | Botschaftsfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Timeout | 1 |
| 0xD355A4 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Ungültig | 1 |
| 0xD355A5 | Signalfehler (Status Anhänger, ID: STAT_ANHAENGER) Sender: AHM - Undefiniert | 1 |
| 0xD355AC | Botschaftsfehler (Status Bedienelement Bremsassistent, ID: ST_OPEL_BRAS) Sender: FEM, FRMFA - Timeout | 1 |
| 0xD355B4 | Botschaftsfehler (Status Bedienelement HDC, ID: ST_OPEL_HDC) Sender: ICM_QL, ZBE - Timeout | 1 |
| 0xD355F2 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) Sender: ACSM - Timeout | 1 |
| 0xD355F3 | Botschaftsfehler (Steuerung Crash, ID: CTR_CR ) Sender: ACSM - Checksumme | 1 |
| 0xD355F4 | Botschaftsfehler  (Steuerung Crash, ID: CTR_CR ) Sender: ACSM -  Alive | 1 |
| 0xD3561C | Botschaftsfehler (Toleranzabgleich Rad, ID: TOMA_WHL) Sender: ICM_QL - Timeout | 1 |
| 0xD35646 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Timeout | 1 |
| 0xD35647 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Checksumme | 1 |
| 0xD35648 | Botschaftsfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Alive | 1 |
| 0xD3564C | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Ungültig | 1 |
| 0xD3564D | Signalfehler (Winkel Fahrpedal, ID: ANG_ACPD) Sender: DME1 - Undefiniert | 1 |
| 0xD35672 | Signalfehler (Masse/Gewicht Fahrzeug, ID: MASS_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35677 | Signalfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Qualifier | 1 |
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
| 0xD3593C | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Timeout | 1 |
| 0xD3593E | Botschaftsfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Alive | 1 |
| 0xD35940 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Ungültig | 1 |
| 0xD35941 | Signalfehler (Vorgabe Dämpfer Anteil passiv, ID: SPEC_DMP_QTA_PSV) Sender: ICM_V, VDC1 - Undefiniert | 1 |
| 0xD35948 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Ungültig | 1 |
| 0xD35949 | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Undefiniert | 1 |
| 0xD359AB | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Ungültig | 1 |
| 0xD359CA | Signalfehler (Daten Antriebsstrang 3, ID: DT_PT_3) Sender: DME1 - Qualifier | 1 |
| 0xD35A08 | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Timeout | 1 |
| 0xD35A0A | Botschaftsfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Alive | 1 |
| 0xD35A0C | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Ungültig | 1 |
| 0xD35A0D | Signalfehler (Radmoment Antrieb 6, ID: WMOM_DRV_6) Sender: DME1 - Undefiniert | 1 |
| 0xD35A3E | Signalfehler (Geschwindigkeit Fahrzeug, ID: V_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A3F | Signalfehler (Giergeschwindigkeit Fahrzeug, ID: VYAW_VEH) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A53 | Signalfehler (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A57 | Signalfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A62 | Signalfehler (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Sender: ICM_QL - Qualifier | 1 |
| 0xD35A9C | Signalfehler (Vorgabe Parametrisierung I-Brake/HDC, ID: SPEC_PRMSN_IBRK_HDC) Sender: ICM_QL - Qualifier | 1 |
| 0xD35B00 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Timeout | 1 |
| 0xD35B01 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Checksumme | 1 |
| 0xD35B02 | Botschaftsfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Alive | 1 |
| 0xD35B04 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Ungültig | 1 |
| 0xD35B05 | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Undefiniert | 1 |
| 0xD35B21 | Botschaftsfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) Sender: EME15, EME20 - Timeout | 1 |
| 0xD35B22 | Signalfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) Sender: EME15, EME20 - Ungültig | 1 |
| 0xD35B23 | Signalfehler (Diagnose OBD Motorsteuerung Elektrisch, ID: DIAG_OBD_ENGMG_EL) Sender: EME15, EME20 - Undefiniert | 1 |
| 0xD35B2C | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Timeout | 1 |
| 0xD35B2E | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Checksumme | 1 |
| 0xD35B2F | Botschaftsfehler (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Sender: ICM_QL - Alive | 1 |
| 0xD35B3F | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Timeout | 1 |
| 0xD35B40 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Checksumme | 1 |
| 0xD35B41 | Botschaftsfehler (Radmoment Antrieb 5, ID: WMOM_DRV_5) Sender: DME1 - Alive | 1 |
| 0xD35B43 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Timeout | 1 |
| 0xD35B44 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Checksumme | 1 |
| 0xD35B45 | Botschaftsfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Alive | 1 |
| 0xD35B47 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Ungültig | 1 |
| 0xD35B48 | Signalfehler (Radmoment Antrieb 7, ID: WMOM_DRV_7) Sender: DME1 - Undefiniert | 1 |
| 0xD35C1B | Botschaftsfehler (Status Energieerzeugung, ID: ST_ENERG_GEN) Sender: DME1 - Timeout | 1 |
| 0xD35C1D | Botschaftsfehler (Status Kontakt Handbremse, ID: STAT_CT_HABR) Sender: FEM - Timeout | 1 |
| 0xD36C05 | Signalfehler (Außentemperatur, ID: A_TEMP) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD36C09 | Signalfehler (Bedienung Wischertaster, ID: BEDIENUNG_WISCHER) Sender: SZL_LWS - Undefiniert | 1 |
| 0xD36C0D | Signalfehler (Daten Antriebsstrang 2, ID: DT_PT_2) Sender: DME1 - Undefiniert | 1 |
| 0xD36C19 | Signalfehler (Drehmoment Kurbelwelle 1, ID: TORQ_CRSH_1) Sender: DME1 - Undefiniert | 1 |
| 0xD36C1A | Signalfehler (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) Sender: CAS, FEM - Undefiniert | 1 |
| 0xD36C2A | Signalfehler (Kilometerstand/Reichweite, ID: KILOMETERSTAND) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD36C2C | Signalfehler (LCD Helligkeit Regelung, ID: LCD_BRIG_CLCTR) Sender: Kombi, Kombi_Basis - Undefiniert | 1 |
| 0xD36C3A | Signalfehler (Radmoment Antrieb 2, ID: WMOM_DRV_2) Sender: DME1 - Undefiniert | 1 |
| 0xD36C3B | Signalfehler (Radmoment Antrieb 3, ID: WMOM_DRV_3) Sender: DME1 - Undefiniert | 1 |
| 0xD36C4C | Signalfehler (Status Kontakt Handbremse, ID: STAT_CT_HABR) Sender: FEM - Ungültig | 1 |
| 0xD36C4D | Signalfehler (Status Kontakt Handbremse, ID: STAT_CT_HABR) Sender: FEM - Undefiniert | 1 |
| 0xD36C81 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Ungültig | 1 |
| 0xD36C82 | Signalfehler (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Sender: FRMFA, FEM - Undefiniert | 1 |
| 0xD36C8C | Signalfehler (Anforderung Hydraulikfunktion, ID: RQ_HYDFN) Sender: EMF - Qualifier | 1 |
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
| 0x170C | SPANNUNG | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x8000 | GESCHWINDIGKEIT REFERENZ | kmh | high | unsigned char | - | 1 | 1 | 0 |
| 0x8001 | STATUS BYTE | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x8002 | BETRIEBSMODUS | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8003 | DTC CONTI INTERN | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8004 | ST_DRV_VEH | Hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x8005 | STATUS VEHICLE | Hex | high | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x480975 | Steuergerät intern - Conti - Steuergerät intern - Transceiver - VIO Fehler | 0 |
| 0x480976 | Steuergerät intern - Conti - Steuergerät intern - Transceiver - Übertemperatur | 0 |
| 0x4809AD | Steuergerät intern - Conti - Steuergerät intern - Transceiver - Bubbling Idiot | 0 |
| 0x4809DA | Steuergerät intern - Conti - Steuergerät intern - Transceiver - Status Fehler | 0 |
| 0x4809DB | Steuergerät intern - Conti - Steuergerät intern - Transceiver - VCC Fehler | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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
| 0x170C | SPANNUNG | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x8000 | GESCHWINDIGKEIT REFERENZ | kmh | high | unsigned char | - | 1 | 1 | 0 |
| 0x8001 | STATUS BYTE | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x8002 | BETRIEBSMODUS | - | high | unsigned int | - | 1 | 1 | 0 |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOHOLDLED | 0xDC1D | - | Auslesen und Vorgeben AutoHold LED | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC1D | RES_0xDC1D |
| AUTOHOLDTASTER | 0xDBDE | STAT_AUTOHOLD_TASTER_EIN | Auslesen Zustand AutoHold Taster | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BPWS_INITIALISIERUNG | 0xA067 | - | Starten, Stoppen und Status Initialisierung Nullstellung Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA067 | RES_0xA067 |
| BREMSBELAGSSENSOR | 0xDBDF | - | Auslesen Bremsbelagssensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBDF |
| BREMSFLUESSIGKEITSSCHALTER | 0xDC1F | STAT_BREMSFLUESSIGKEIT_NIVEAU_SCHALTER_EIN | Auslesen Niveau Bremsflüssigkeit | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| BREMSPEDALWEGSENSOR | 0xDBF5 | - | Auslesen Bremspedalwegsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF5 |
| BREMSREKUPERATIONSMOMENT | 0xDBF6 | - | Auslesen Radmoment Bremsrekuperation | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF6 |
| DSC_DRUCKSENSOREN | 0xDBE5 | - | Auslesen Drucksensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE5 |
| DSC_DRUCKSENSOREN_KALIBRIERUNG | 0xA070 | - | Starten, Stoppen und Status Kalibrierung DSC Ventile | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA070 |
| DSC_ENTLUEFTUNG | 0xA061 | - | Starten, Stoppen und Status Entlüftung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA061 | RES_0xA061 |
| DSC_KLEMMEN | 0xDBE7 | - | Auslesen Spannung Steuergerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE7 |
| DSC_PUMPE | 0xDBE8 | - | Auslesen und Vorgeben Ansteuerung Pumpe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDBE8 | RES_0xDBE8 |
| DSC_PUMPENFUNKTIONSPRUEFUNG | 0xA066 | - | Starten, Stoppen und Status Funktionsprüfung Pumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA066 | RES_0xA066 |
| DSC_VAKUUMBEFUELLUNG | 0xA06D | - | Starten (Weiterschalten), Stoppen und Status Vakuumbefüllung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06D | RES_0xA06D |
| DSC_VENTILE | 0xDBE9 | - | Auslesen und Vorgeben Ansteuerung Ventile | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDBE9 | RES_0xDBE9 |
| DSC_VENTILE_KALIBRIERUNG | 0xA06E | - | Starten, Stoppen und Status Kalibrierung DSC Ventile | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA06E | RES_0xA06E |
| DSC_VENTILE_PULS | 0xA064 | - | Starten, Stoppen und Status Puls Ventile (max. 6 gleichzeitig) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA064 | RES_0xA064 |
| GESCHWINDIGKEIT_RAD | 0xDBE4 | - | Auslesen Raddrehzahlfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE4 |
| LMV_FUNKTION | 0xDBE1 | - | Auslesen und Vorgeben Aktivierung Funktion Längsantriebsmomentenverteilung (Ansteuerung Verteilergetriebe) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE1 | RES_0xDBE1 |
| RADDREHZAHLSENSORPRUEFUNG | 0xA065 | - | Starten, Stoppen und Status Funktionsprüfung Raddrehzahlsensor | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA065 | RES_0xA065 |
| REIFENPANNENANZEIGE | 0xDBE3 | - | Reifenpannenanzeige | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBE3 |
| REKU_FUNKTION | 0xDBE2 | - | Auslesen und Vorgeben Aktivierung Funktion Rekuperation (Bremsenergierückgewinnung) aktueller Klemme15 Zyklus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBE2 | RES_0xDBE2 |
| RPA_LERNDATEN_STATISTIK | 0xDC14 | - | Auslesen Lerndaten Statisik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC14 |
| RPA_LERNDATEN_STD | 0xDC15 | - | Auslesen Lerndaten Standardisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC15 |
| RPA_RESET_STANDARDISIERUNG | 0xA074 | - | Reset RPA Standardisierung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RPA_RESET_STATISTIK | 0xA068 | - | Reset RPA Lerndaten Statistik | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_MODUS_ROLLENPRUEFSTAND | 0xDB5B | STAT_ROLLENMODUS_NR | Auslesen Status Rollenmodus | 0-n | - | - | char | TAB_AKTIV | - | - | - | - | 22 | - | - |
| STEUERN_MODUS_ROLLENPRUEFSTAND | 0xDB98 | - | Vorgeben Rollenmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB98 | - |
| VAKUUMSENSOR | 0xDBF4 | - | Auslesen Vakuumsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDBF4 |
| _RPA_RESET_PANNE | 0xF011 | - | Starten Reset Panne | - | - | - | - | - | - | - | - | - | 31 | - | - |

### RES_0XDBE2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### ARG_0XDBE2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REKU_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

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

### RES_0XA067

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_FEHLER_DETAIL | - | - | + | 0-n | - | unsigned char | - | TAB_BPWS_DETAIL_INITIALISIERUNG | - | - | - | Fehler Detail  |

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
| 0x0C | Fehler - Verbrennungsmotor läuft nicht |
| 0x0D | Fehler - Bremslichtschalter oder Vordruck nicht unbetätigt bei Start der Routine |
| 0x0E | Fehler - elektrischer Fehler des Bremspedalwegsensors ist aktiv |
| 0xFF | nicht definiert |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0xFF | unbekannt |

### ARG_0XDB98

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | Setzen / Rücksetzen Rollenmodus (1 = Setzen; 0 =  Rücksetzen)  |

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

### RES_0XDBE1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### ARG_0XDBE1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMV_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = aktiv;  0 = inaktiv |

### RES_0XDBE3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARNUNG_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Warnung (0= inaktiv; 1= aktiv) |
| STAT_FUNKTION_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | RPA-System (0= inaktiv; 1= aktiv) |
| STAT_PLATTROLLEN_ERKANNT | 0/1 | - | unsigned char | - | - | - | - | - | Platte Reifen (0= nicht erkannt; 1= erkannt) |
| STAT_3PLUS1_ERKANNT | 0/1 | - | unsigned char | - | - | - | - | - | 3Plus1 Konstellation (0= nicht erkannt; 1= erkannt) |
| STAT_NEUREIFEN_ERKANNT | 0/1 | - | unsigned char | - | - | - | - | - | Neureifen Konstellation (0= nicht erkannt; 1= erkannt) |
| STAT_NAEHERUNG_WARNGRENZE_WERT | % | - | unsigned char | - | - | - | - | - | aktueller Wert Näherung Warngrenze  |
| STAT_PANNEN_POSITION | 0-n | - | unsigned char | - | TAB_POSITION_RAD | - | - | - | Position druckreduziertes Rad  |
| STAT_LERNSTATUS_BEREICH_0_ 100_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 0..100 km/h  |
| STAT_LERNSTATUS_BEREICH_100_190_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 100..190 km/h |
| STAT_LERNSTATUS_BEREICH_UEBER_190_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich > 190 km/h |

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

### RES_0XDC14

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RPA_VERSION_NR_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversionsnummer RPA-Software |
| STAT_RPA_VERSION_NR_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversionsnummer RPA-Software |
| STAT_KM_LETZTE_STANDARDISIERUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte Initialisierung |
| STAT_KM_LETZTE_STANDARDISIERUNG_MINUS_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte Initialisierung |
| STAT_KM_LETZTE_STANDARDISIERUNG_MINUS_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vor-vorletzten Initialisierung |
| STAT_TAGE_SEIT_LETZTER_STANDARDISIERUNG_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Tage seit der letzten Initialisierung |
| STAT_TAGE_SEIT_LETZTER_STANDARDISIERUNG_MINUS_1_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Tage seit der vorletzten Initialisierung |
| STAT_TAGE_SEIT_LETZTER_STANDARDISIERUNG_MINUS_2_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Tage seit der vor-vorletzten Initialisierung |
| STAT_KM_LETZTE_PANNE_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte erkannten Reifenpanne |
| STAT_KM_LETZTE_PANNE_MINUS_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vorletzte erkannten Reifenpanne |
| STAT_KM_LETZTE_PANNE_MINUS_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand vor-vorletzte erkannten Reifenpanne |
| STAT_TAGE_SEIT_LETZTER_PANNE_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit der letzten erkannten Reifenpanne |
| STAT_TAGE_SEIT_LETZTER_PANNE_MINUS_1_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit der vorletzten erkannten Reifenpanne |
| STAT_TAGE_SEIT_LETZTER_PANNE_MINUS_2_WERT | Tage | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tage seit der vor-vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der letzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_MINUS_1_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_LETZTE_PANNE_MINUS_2_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vor-vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | max. Fahrzeuggeschwindigkeit nach der letzten erkannten Reifenpanne (erster wert wird frühestens 30 Sekunden nach der Pannenerkennung eingetragen) |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_MINUS_1_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vorletzten erkannten Reifenpanne |
| STAT_GESCHWINDIGKEIT_MAX_LETZTE_PANNE_MINUS_2_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit während der vor-vorletzten erkannten Reifenpanne |
| STAT_KM_LETZTE_3PLUS1_ERKENNUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand letzte erkannte 3plus-Konstellation |
| STAT_KM_LETZTE_NEUREIFEN_ERKENNUNG_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand  letzte erkannte Neureifen-Konstellation |
| STAT_NEUREIFEN_POSITON | 0-n | - | unsigned char | - | TAB_POSITION_RAD | 1.0 | 1.0 | 0.0 | Position des Neureifens bei der letzten Erkennung |
| STAT_URSACHE_WARNUNG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Typ der Warnmeldung (z.B. schnelle Luftfruckverlust etc.) |
| STAT_MAX_NAEHERUNG_WARNGRENZE_SEIT_LETZTER_STD_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximale Näherung zur applizierten Warngrenze siet der letzte Initialisierung |

### TAB_POSITION_RAD

| WERT | TEXT |
| --- | --- |
| 1 | vorn links |
| 2 | vorn rechts |
| 3 | hinten links |
| 4 | hinten rechts |

### RES_0XDC15

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNSTATUS_BEREICH_0_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 0 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_1_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 1 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_2_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 2 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_3_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 3 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_4_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 4 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_5_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 5 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_6_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 6 (100 % = vollständig eingelernt) |
| STAT_LERNSTATUS_BEREICH_7_WERT | % | - | unsigned char | - | - | - | - | - | Lernfortschritt Geschwindigkeitsbereich 7 (100 % = vollständig eingelernt) |
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

### RES_0XDC1D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOHOLD_LED_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 1 = LED ein 0 = LED aus |

### ARG_0XDC1D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOHOLDLED_EIN | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 1 = LED ein  0 = LED aus   |

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
| ZEIT_PUMPE_AUS | + | - | ms | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | - | - | Verzögerung Stop Pumpe (> ZEIT_TV_EIN)  |

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

### RES_0XA06E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | - | - | + | 0-n | - | unsigned char | - | TAB_STATUS_ROUTINE | - | - | - | Ausführungsstatus |
| STAT_DETAIL_VENTIL_KALIBRIERUNG | - | - | + | 0-n | - | unsigned char | - | TAB_DSC_DETAIL_VENTIL_KALIBRIERUNG | - | - | - | Ausführungsstatus Detail |

### ARG_0XA06E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PHASE | + | - | 0-n | - | unsigned char | - | TAB_DSC_PHASE_VENTILE_KALIBRIERUNG | - | - | - | - | - | Phase |

### TAB_DSC_PHASE_VENTILE_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nv |
| 0x01 | Einlassventile |
| 0x02 | Auslassventile |
| 0x03 | Vorladeventile |
| 0x04 | Trennventile |

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

### RES_0XA070

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
