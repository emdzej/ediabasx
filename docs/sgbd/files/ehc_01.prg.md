# ehc_01.prg

## General

|  |  |
| --- | --- |
| File | ehc_01.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 63 |
| Origin | BMW EF-631 H.Thasler |
| Revision | 1.013 |
| Author | WABCO CAR-PD Dittrich |
| ECU Comment | 14.07.11: F15/L6: neue DTCs für BODY_CAN und Ub-Betriebsspannung ergänzt |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 1-Achs-Luftfeder |  |  |
| ORIGIN | string | BMW EF-631 H.Thasler |  |  |
| REVISION | string | 1.013 |  |  |
| AUTHOR | string | WABCO CAR-PD Dittrich |  |  |
| COMMENT | string | 14.07.11: F15/L6: neue DTCs für BODY_CAN und Ub-Betriebsspannung ergänzt |  |  |
| PACKAGE | string | 1.19 |  |  |
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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
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
| 0x04 | GWTB | Gateway-Tabelle |
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
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x023800 | Energiesparmode aktiv | 1 |
| 0x02FF38 | DM_TEST_APPL | 1 |
| 0x380DD4 | Steuergerät interner Fehler , Checksummenfehler EEPROM | 0 |
| 0x380DD5 | Steuergerät interner Fehler , Checksummenfehler FLASH | 0 |
| 0x380DD6 | Steuergerät interner Fehler , Checksummenfehler RAM | 0 |
| 0x382001 | NVM_E_Write_failed | 0 |
| 0x382002 | NVM_E_Read_failed | 0 |
| 0x382003 | NVM_E_Control_failed | 0 |
| 0x382004 | NVM_E_Erase_failed | 0 |
| 0x382006 | NVM_E_Write_All_failed | 0 |
| 0x382007 | NVM_E_Read_All_failed | 0 |
| 0x382010 | NVM_E_Wrong_Config_failed | 0 |
| 0x383000 | FLS_E_ERASE_FAILED | 0 |
| 0x383001 | FLS_E_WRITE_FAILED | 0 |
| 0x383002 | FLS_E_READ_FAILED | 0 |
| 0x383003 | FLS_E_COMPARE_FAILED | 0 |
| 0x38D700 | DM_EVENT_Zeitbotschaft_Timeout | 1 |
| 0x38D701 | DM_Queue_DELETED | 1 |
| 0x38D702 | DM_Queue_FULL | 1 |
| 0x38D703 | Timeout, Bus Botschaft Fahrzeugzustand | 1 |
| 0x480D80 | Sensor hinten links, Sensorspannung größer als Betriebsbereich, Kurzschluss zu UBat | 0 |
| 0x480D81 | Sensor hinten links, Sensorspannung kleiner als Betriebsbereich, Kurzschluss gegen GND oder Leitungsbruch | 1 |
| 0x480D82 | Sensor hinten rechts, Sensorspannung größer als Betriebsbereich, Kurzschluss zu UBat | 0 |
| 0x480D83 | Sensor hinten rechts, Sensorspannung kleiner als Betriebsbereich, Kurzschluss gegen GND oder Leitungsbruch | 0 |
| 0x480D84 | Sensorversorgungsspannung hinten links  größer als Betriebsbereich, Kurzschluss zu UBat | 0 |
| 0x480D85 | Sensorversorgungsspannung hinten links, kleiner als Betriebsbereich, Kurzschluss gegen GND oder Leitungsbruch | 0 |
| 0x480D86 | SensorVersorgungsspannung hinten rechts größer als Betriebsbereich, Kurzschluss zu UBat | 0 |
| 0x480D87 | Sensorversorgungsspannung hinten rechts, kleiner als Betriebsbereich, Kurzschluss gegen GND oder Leitungsbruch | 0 |
| 0x480D88 | Sensoraktivität hinten links, ungültiges Signal | 0 |
| 0x480D89 | Sensoraktivität hinten rechts, ungültiges Signal | 0 |
| 0x480D90 | Magnetventil hinten links, Kurzsschluss zu UBat oder Leitungsbruch | 0 |
| 0x480D91 | Magnetventil hinten links, Kurzschluss gegen GND | 0 |
| 0x480D92 | Magnetventil hinten rechts, Kurzsschluss zu UBat  oder Leitungsbruch | 0 |
| 0x480D93 | Magnetventil hinten rechts, Kurzschluss gegen GND | 0 |
| 0x480DA0 | Ablassventilventi, Kurzsschluss zu UBat  oder Leitungsbruch | 0 |
| 0x480DA1 | Ablassventilventil , Kurzschluss gegen GND | 0 |
| 0x480DA5 | Kompressorrelais, Kurzsschluss zu UBat oder Leitungsbruch | 0 |
| 0x480DA6 | Kompressorrelais, Kurzschluss gegen GND | 0 |
| 0x480DB0 | Regelzeit heben | 0 |
| 0x480DB1 | Regelzeit senken | 0 |
| 0x480DB2 | Regelzeit heben einseitig hinten links | 0 |
| 0x480DB3 | Regelzeit heben einseitig hinten rechts | 0 |
| 0x480DB4 | Regelzeit senken einseitig hinten links | 0 |
| 0x480DB5 | Regelzeit senken einseitig hinten rechts | 0 |
| 0x480DC0 | Steuergerät interner Fehler | 0 |
| 0x480DC6 | Ub-Unterspannung | 1 |
| 0x480DC7 | Ub-Überspannung | 1 |
| 0x480DC8 | Ub-Betriebsspannung unterhalb zulässigem Bereich | 1 |
| 0x480DD1 | Steuergerät ist nicht Codiert oder arbeitet mit Default Codierdaten | 1 |
| 0x480DD2 | Fehler während der Codierdaten Transaktion aufgetreten | 1 |
| 0x480DD3 | Signatur über Nettocodierdaten ungültig. Default Codierdaten verwendet | 1 |
| 0x480DD4 | Steuergerät ist nicht für das Fahrzeug codiert, imn dem es verbaut ist. Vergleich CPS<--> VIN negativ | 1 |
| 0x480DD5 | Die während der Codiertransaktion gesendeten Daten sind nicht plausibel | 1 |
| 0xD7040B | K-CAN Bus | 1 |
| 0xD70414 | K-CAN Control Module Bus OFF | 0 |
| 0xD70468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD70BFF | DM_TEST_COM | 1 |
| 0xD70DA0 | Timeout , Bus Botschaft STAT_ZV_KLAPPEN | 1 |
| 0xD70DA1 | Ungültiges Signal , Bus Botschaft STAT_ZV_KLAPPEN | 1 |
| 0xD70DA2 | Timeout , Bus Botschaft ENGINE_1 | 1 |
| 0xD70DA3 | Ungültiges Signal , Bus Botschaft ENGINE_1 | 1 |
| 0xD70DA4 | Timeout , Bus Botschaft Geschwindigkeit | 1 |
| 0xD70DA5 | Ungültiges Signal , Bus Botschaft Geschwindigkeit | 1 |
| 0xD70DA6 | Timeout , Bus Botschaft Klemmenstatus | 1 |
| 0xD70DA7 | Ungültiges Signal , Bus Botschaft Klemmenstatus | 1 |
| 0xD70DB0 | Timeout , Bus Botschaft Querbeschleunigung | 1 |
| 0xD70DB1 | Ungültiges Signal  , Bus Botschaft Querbeschleunigung | 1 |
| 0xD71400 | Timeout , Bus Botschaft HöhenstandsSensoren | 1 |
| 0xD71401 | Ungültiges Signal , Bus Botschaft HöhenstandsSensoren | 1 |
| 0xD71402 | Ungültiges Signal , Bus Botschaft Sensor hinten links | 1 |
| 0xD71403 | Ungültiges Signal , Bus Botschaft Sensor hinten rechts | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x380DD4 | Steuergerät interner Fehler , Checksummenfehler EEPROM | 0 |
| 0x380DD5 | Steuergerät interner Fehler , Checksummenfehler FLASH | 0 |
| 0x380DD6 | Steuergerät interner Fehler , Checksummenfehler RAM | 0 |
| 0x382001 | NVM_E_Write_failed | 0 |
| 0x382002 | NVM_E_Read_failed | 0 |
| 0x382003 | NVM_E_Control_failed | 0 |
| 0x382004 | NVM_E_Erase_failed | 0 |
| 0x382006 | NVM_E_Write_All_failed | 0 |
| 0x382007 | NVM_E_Read_All_failed | 0 |
| 0x382010 | NVM_E_Wrong_Config_failed | 0 |
| 0x383000 | FLS_E_ERASE_FAILED | 0 |
| 0x383001 | FLS_E_WRITE_FAILED | 0 |
| 0x383002 | FLS_E_READ_FAILED | 0 |
| 0x383003 | FLS_E_COMPARE_FAILED | 0 |
| 0x38D700 | DM_EVENT_Zeitbotschaft_Timeout | 0 |
| 0x38D701 | DM_Queue_DELETED | 0 |
| 0x38D702 | DM_Queue_FULL | 0 |
| 0x38D703 | Timeout, Bus Botschaft Fahrzeugzustand | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_LOWTOL_MODE | 0xAB79 | - | Schreiben/Setzen des Low Tol Modus. (temp. Verkleinerung des Regelbandes - z.B. für Scheinwerfereinstellung (0 Höhe) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_ANALOGWERTE | 0xDB65 | - | EHC Höhenstandssensoren - Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB65 |
| STATUS_SIGNALE_NUMERISCH | 0xDB67 | - | Abfrage wie das Bauteil angesteuert ist. Liefert als Status ein Digitales Result (0/1) z.B. Kompressor  1 (also Kompressor ist eingeschaltet) | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB67 | RES_0xDB67 |
| STATUS_REGLERWERTE | 0xDB6B | - | Zustandsanzeige des EHC Regler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6B |
| STATUS_PLAUSIWERTE | 0xDB6C | - | Plausibilitätsprüfung des EHC Reglers. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6C |
| STATUS_GROBLECK | 0xDB6D | - | Auslesen der Grobleckdaten. Gibt die aktuell abgespeicherten Grobleckdaten zurück (gefilterter Höhenstand). Die Grobleckdaten werden zur Dichtheitsprüfung des EHC Systems benötigt. In den Results liegen die Werte der Fastfiler links, rechts und eine Prüfsumme. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB6D |
| STATUS_LEVELUP_CODIERUNG_LESEN | 0xDB6F | STAT_C_NIV_LEVELUP_WERT | Codierdaten der Level Up Niveauregulierung lesen | HEX | - | - | int | - | - | - | - | - | 22 | - | - |
| LEVELUP_LESEN | 0xDB70 | - | Gibt den Status des LEVEL UP Funktion aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB70 |
| STATUS_FILTERWERTE | 0xDB71 | - | Gibt die gefilterten Werte der angeschlossenen Sensorik(EHC Höhensensor) aus. Diese Werte werden der Regelung zur Verfügung gestellt werden. Der Filter dient der Signalaufbereitung für die Regelung Fahrdynamische Prozesse. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB71 |
| STEUERN_GROBLECK | 0xDB74 | - | Schreiben der Grobleckdaten (gefilterter Höhenstand). Die aktuell gespeicherten Grobleckdaten werden mit den Werten aus den Argumenten überschrieben. Die Grobleckdaten werden zur Dichtheitsprüfung des EHC Systems benötigt. In den Argumenten liegen die Werte der Fastfiler links, rechts und eine Prüfsumme. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB74 | - |
| STEUERN_ABGLEICH_HOEHENSTAND | 0xDB75 | - | Fahrzeug mit neuen Offsetwerten abgleichen. Dazu muss als Parameter die gemessene Abweichung zur Soll-Fahrzeughoehe links und rechts uebergeben werden. Dann wird der Abgleich automatisch durchgefahren. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB75 | RES_0xDB75 |
| STEUERN_SG_MODUS | 0xDB76 | - | Schreiben/ Setzen des SG Modus. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDB76 | RES_0xDB76 |
| STEUERN_DIGITALSIGNALE | 0xDB77 | - | Das durch LOCAL_ID spezifizierte Bauteil wird für die Zeit ADJUSTMENT_TIME auf den Wert DIGITALWERT gesetzt. Mit diesem Job können die einzelnen Komponenten des EHC angesteuert werden. Es werden 3 Results benötigt(die Komponente,die Ansteuergröße (0/1) und die Dauer der Ansteuerung in s) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB77 | - |
| STEUERN_FASTFILTER_WERTE_LESEN_SCHREIBEN | 0xDB78 | - | Der Job liest den Fastfilter (gefilterter Höhenstand links, rechts und Prüfbyte) und speichert diese.  Anschliessend werden die abgespeicherten Werte in den Results ausgegeben. Die Grobleckprüfung greift unter anderem auf diese gespeicherten Wert zu. | - | - | - | - | - | - | - | - | - | 2F | - | RES_0xDB78 |
| STEUERN_LEVELUP_FUNKTION_AKTIVIEREN | 0xDB79 | - | LEVELUP (Hochniveau) Modus aktivieren In der Parkposition erfolgt eine Erhöhung des Fahrzeughecks. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB79 | - |
| STEUERN_FREIGABE_ANSTEUERSIGNAL | 0xDB7A | - | Das durch LOCAL_ID spezifizierte Bauteil wird zur Ansteuerung fregegeben. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB7A | - |
| STATUS_ADC_H_RL | 0x4001 | STAT_ADC_H_RL_WERT | ADC Wandlerwert Höhe hinten links | count | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_ADC_H_RR | 0x4002 | STAT_ADC_H_RR_WERT | ADC Wandlerwert Höhe Hinten rechts | count | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_ADC_U_UKL30 | 0x4003 | STAT_ADC_U_KL30_WERT | ADC  Wandlerwert  UKL30 | count | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_ADC_USEN1_RR | 0x4004 | STAT_ADC_USENS1_RR_WERT | ADC Wandlerwert Spannungsversorgung Höhensensor RR | count | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_ADC_USENS2_RL | 0x4005 | STAT_ADC_USENS2_RL_WERT | ADC Wandlerwert Spannungsversorgung Höhensensor RL | count | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_RL | 0x4011 | STAT_ACTUATOR_VALVE_RL | Status der Ansteuerung RL | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_RR | 0x4012 | STAT_ACTUATOR_VALVE_RR | Status der Ansteuerung RR | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_VALVE_EX | 0x4013 | STAT_ACTUATOR_VALVE_EX | Status der Ansteuerung EX | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_COMPRESSOR | 0x4014 | STAT_ACTUATOR_COMPRESSOR | Status der Ansteuerung Kompressor | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_SWITCH_USENS2_RL | 0x4015 | STAT_ACTUATOR_SWITCH_USENS2_RL | Status der Ansteuerung Usens2_RL | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_SWITCH_USENS1_RR | 0x4016 | STAT_ACTUATOR_SWITCH_USENS1_RR | Status der Ansteuerung Usens1_RR | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_ACTUATOR_SWITCH_INHIBIT | 0x4017 | STAT_ACTUATOR_SWITCH_INHIBIT | Status der Ansteuerung Inhibit-Pin | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_MODECONTROL_SG | 0x4039 | STAT_E_MODECONTROL_WERT | SG-Modus | - | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_H_ZEROADJ_RL | 0x4042 | STAT_H_ZEROADJ_RL_WERT | Höhenoffset hinten links | mm | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_H_ZEROADJ_RR | 0x4043 | STAT_H_ZEROADJ_RR_WERT | Höhenoffset hinten rechts | mm | - | high | int | - | - | - | - | - | 22 | - | - |
| STEUERN_H_ZERODAJ_RL | 0x4044 | - | Schreiben EEPROM Wert Offset des Höhenabgleich Hinten Links | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4044 | - |
| STEUERN_H_ZEROADJ_RR | 0x4045 | - | Schreiben EEPROM Wert Offset des Höhenabgleich Hinten Rechts | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4045 | - |
| STATUS_DEVELOP_PRECALIB | 0x4046 | - | Auslesen der aktiven Pre_CalibWerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4046 |
| STEUERN_DEVELOP_PRECALIB | 0x4047 | - | Setzen des hs_select auf $AA mit anschließenden Reset | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_DEVELOP_TILT_HISTORY | 0x4048 | - | Liest die History Eintraege der Schiefstellung im Plattlauffall | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4048 |
| STATUS_DEVELOP_TILT_STATE | 0x4049 | - | E70 _Lesen_TILT Status :  SIP_OPTION: Lesen, ob SIP Funktion aktiviert ist SIP_STATE : Lesen des aktuellen SIP Zustandes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4049 |
| STEUERN_DEVELOP_TILT_FUNKTION | 0x404A | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x404A | - |
| STATUS_LOWTOLERANCE_MODUS | 0x4090 | STAT_LOTOLERANCEMODE | Status des Lowtolerance Mode  1:aktiv 0:inaktiv | 0/1 | - | high | int | - | - | - | - | - | 22 | - | - |
| STATUS_DEVELOP_GET_INFO_DEBUG1 | 0x40A1 | - | Debug Infos T2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A1 |
| STATUS_DEVELOP_GET_INFO_DEBUG2 | 0x40A2 | - | Debug Werte T2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A2 |
| STEUERN_DEVELOP_SET_PORTS_DEBUG1 | 0x40A3 | - | Microprocessor Port activation | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40A3 | - |
| STEUERN_DEVELOP_CONTROL_DEBUG4Testpulsabschaltung | 0x40A4 | - | Control of Testfunctions | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40A4 | - |

### ARGUMENT_HOEHE_ABGLEICHEN

| ARGUMENT | EINHEIT | L/H | DATENTYP | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DELTA_HÖHE_LINKS_WERT | mm | high | int | - | 1 | 1 | 0 | -127 | 128 | Differenz IST /SOLL-Höhe RL |
| DELTA_HÖHE_RECHTS_WERT | mm | high | int | - | 1 | 1 | 0 | -127 | 128 | Differenz IST /SOLL-Höhe RR |
| DELTA_HÖHE_MIN_DELTA_WERT | mm | high | int | - | 1 | 1 | 0 | -127 | 128 | Mindestwert zwischen Ist und Neu berechneten Wert für Apeicherung |

### RESULT_HOEHE_ABGLEICHEN

| ARGUMENT | EINHEIT | L/H | DATENTYP | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALTER_OFFSET_HÖHE_RL_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| ALTER_OFFSET_HÖHE_RR_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| NEUER_OFFSET_HÖHE_RL_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| NEUER_OFFSET_HÖHE_RR_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| SG_HÖHE_RL_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| SG_HÖHE_RR_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| ADC_AUFLÖSUNG_RL_WERT | DIGIT | - | int | - | 1 | 1 | 0 | 0 | 65535 | - |
| ADC_AUFLÖSUNG_RR_WERT | DIGIT | - | int | - | 1 | 1 | 0 | 0 | 63535 | - |
| SENSOR_AUFLÖSUNG_RL_WERT | DIGIT | - | int | - | 1 | 1 | 0 | 0 | 63535 | - |
| SENSOR_AUFLÖSUNG_RR_WERT | DIGIT | - | int | - | 1 | 1 | 0 | 0 | 65535 | - |
| DEVIATION_RL_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |
| DEVIATION_RR_WERT | mm | - | int | - | 1 | 1 | 0 | -127 | 127 | - |

### RESULT_GET_SSECUSN

| ARGUMENT | EINHEIT | L/H | DATENTYP | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BYTE_5_SSECUSN_WERT | - | high | unsigned char | - | - | - | - | 0 | FF | Byte 5 |
| STAT_BYTE_4_SSECUSN_WERT | - | high | unsigned char | - | - | - | - | 0 | FF | Byte 4 |
| STAT_BYTE_3_SSECUSN_WERT | - | high | unsigned char | - | - | - | - | 0 | FF | Byte 3 |
| STAT_BYTE_2_SSECUSN_WERT | - | high | unsigned char | - | - | - | - | 0 | FF | Byte 2 |
| STAT_BYTE_1_SSECUSN_WERT | - | high | unsigned char | - | - | - | - | 0 | FF | Byte 1 |

### ARGUMENT_SET_SSECUSN

| ARGUMENT | EINHEIT | L/H | DATENTYP | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE_5_SSECUSN_WERT | - | - | unsigned char | - | 1 | 1 | 0 | 0 | FF | - |
| BYTE_4_SSECUSN_WERT | - | - | unsigned char | - | 1 | 1 | 0 | 0 | FF | - |
| BYTE_3_SSECUSN_WERT | - | - | unsigned char | - | 1 | 1 | 0 | 0 | FF | - |
| BYTE_2_SSECUSN_WERT | - | - | unsigned char | - | 1 | 1 | 0 | 0 | FF | - |
| BYTE_1_SSECUSN_WERT | - | - | unsigned char | - | 1 | 1 | 0 | 0 | FF | - |

### RES_0X4B66

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| eins_wert | mm | high | - | - | - | - | - | - | - |
| zwei | - | - | - | - | - | - | - | - | - |

### ARG_0X4B66

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| wert | - | - | - | - | - | - | - | - | - | - | - |

### ARG_0X4042

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_H_ZEROADJ_RL_WERT | mm | high | int | - | - | - | - | - | -127 | 128 | Höhenoffset hinten links EEPROM Wert |

### ARG_0X4043

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_H_ZEROADJUST_H_RR_WERT | mm | high | int | - | - | - | - | - | -127 | 128 | Höhenoffset hinten rechts EEPROM Wert |

### RES_0X4090

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ | 0/1 | high | - | - | - | - | - | - | Status des Lowtolerance Mode  1:aktiv 0:inaktiv |

### ARG_0X4044

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_H_ZEROADJ_RL_WERT | mm | high | int | - | - | - | - | - | - | - | Schreiben EEPROM Wert Offset des Höhenabgleich Hinten Links |

### ARG_0X4045

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_H_ZEROADJ_RR_WERT | mm | high | int | - | - | - | - | - | - | - | Schreiben EEPROM Wert Offset des Höhenabgleich Hinten Links |

### RES_0X4046

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_H_ZEROADJ_RL_WERT | mm | high | int | - | - | - | - | - | Zero Adjustment Wert hinten links |
| STAT_H_ZEROADJ_RR_WERT | mm | high | int | - | - | - | - | - | Zero Adjustment Wert hinten rechts |
| STAT_HS_SELECT_NR | 0-n | high | int | - | - | - | - | - | HS Selct-Wert |

### RES_0X4048

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HIS01_REASON_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Reason      HISTORY_01 |
| STAT_HIS01_STATUS_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Status       HISTORY_01 |
| STAT_HIS01_WEGSKM_WERT | km | low | unsigned int | - | - | 8 | - | - | TILT_WegSKM   HISTORY_01 |
| STAT_HIS02_REASON_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Reason      HISTORY_02 |
| STAT_HIS02_STATUS_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Status       HISTORY_02 |
| STAT_HIS02_WEGSKM_WERT | km | low | unsigned int | - | - | 8 | - | - | TILT_WegSKM   HISTORY_02 |
| STAT_HIS03_REASON_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Reason      HISTORY_03 |
| STAT_HIS03_STATUS_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Status       HISTORY_03 |
| STAT_HIS03_WEGSKM_WERT | km | low | unsigned int | - | - | 8 | - | - | TILT_WegSKM   HISTORY_03 |
| STAT_HIS04_REASON_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Reason      HISTORY_04 |
| STAT_HIS04_STATUS_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Status       HISTORY_04 |
| STAT_HIS04_WEGSKM_WERT | km | low | unsigned int | - | - | 8 | - | - | TILT_WegSKM   HISTORY_04 |
| STAT_HIS05_REASON_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Reason      HISTORY_05 |
| STAT_HIS05_STATUS_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Status       HISTORY_05 |
| STAT_HIS05_WEGSKM_WERT | km | low | unsigned int | - | - | 8 | - | - | TILT_WegSKM   HISTORY_05 |
| STAT_HIS06_REASON_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Reason      HISTORY_06 |
| STAT_HIS06_STATUS_WERT | count | - | unsigned char | - | - | - | - | - | TILT_Status       HISTORY_06 |
| STAT_HIS06_WEGSKM_WERT | km | low | unsigned int | - | - | 8 | - | - | TILT_WegSKM   HISTORY_06 |

### RES_0X4049

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIP_OPTION_WERT | ENUM | high | unsigned char | - | - | - | - | - | TILT_CODIERT  --> 0= FKt ist nicht codiert /  !=0 = Fkt activ /                                          =1 Reaction bei Panne an Rad VL                                                                               =2 Reaction bei Panne an Rad VR                                                                            =3  Reaction bei Panne an Rad HL                                                                              =4  Reaction bei Panne an Rad HR                                                                           =8  Reaction bei Panne an Rad Hinter Achse                                                               =12 Reaction bei Panne an Rad Vorder Achse                                                            =15 Reaction bei Panne an Rad Alle Achsen |
| STAT_SIP_STATE_WERT | ENUM | high | unsigned char | - | - | - | - | - | TILT_Zustand  --> 0= Keine Panne /  !=0 Panne aktiv /                                                 =1 Reaktion bei Panne an Rad VL                                                                               =2 Reaktion bei Panne an Rad VR                                                                            =4  Reaktion bei Panne an Rad HL                                                                              =8  Reaktion bei Panne an Rad HR |

### ARG_0X404A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CONTROLOPTION_SIP_FUNC_WERT | - | high | int | - | - | - | - | - | - | - | 0= Clear SIP-function;1=Set SIP function HL up;2=Set SIP function HR up |

### RES_0X4012

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTUATOR_VALVE_RR | 0/1 | high | int | - | - | - | - | - | Status der Ansteuerung RR |

### RES_0X4013

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTUATOR_VALVE_RR | 0/1 | high | int | - | - | - | - | - | Status der Ansteuerung EX |

### RES_0X4014

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTUATOR_VALVE_COMP | 0/1 | high | int | - | - | - | - | - | Status der Ansteuerung Kompressor |

### RES_0X4016

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | - | - | - | - | - | - | Status der Ansteuerung Usens1_RR |

### RES_0X4017

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACTUATOR_VALVE_INHIBIT_PIN | 0/1 | high | int | - | - | - | - | - | - |

### ARG_40A4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CONTROLOPTION_WERT | - | high | int | - | - | - | - | - | - | - | 1=on 0=off Testroutine EEPROM |
| ARG | - | - | - | - | - | - | - | - | - | - | - |

### ARG_0X40A4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CONTROLOPTION_WERT | - | high | int | - | - | - | - | - | - | - | 1=on 0=off |
| ARG_LocalID_WERT | - | high | int | - | - | - | - | - | - | - | LID: 23= Testpulsabschaltung ; 24 EEPROM _EMV Test :25 Faultdetection |

### RES_0X40A1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_U_AB_TEMP1_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_U_AB_TEMP2_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_H_RL_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_H_RR_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_USENS1_RR_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_USENS2_RL_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_U_KL30_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_U_TEMP_NTC_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_CAN_INHIBIT_WERT | count | high | int | - | - | - | - | - | - |
| STAT_ADC_U_VA_PULSE_WERT | count | high | int | - | - | - | - | - | - |
| STAT_PORT_P1H_WERT | count | - | unsigned char | - | - | - | - | - | - |
| STAT_PORT_P1L_WERT | count | - | unsigned char | - | - | - | - | - | - |
| STAT_PORT_P2_WERT | count | high | int | - | - | - | - | - | - |
| STAT_PORT_P8_WERT | count | high | int | - | - | - | - | - | - |

### RES_0X40A2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADC_H_RL_WERT | count | high | int | - | - | - | - | - | ADC Wert Höhe hinten links |
| STAT_ADC_H_RR_WERT | count | high | int | - | - | - | - | - | ADC Wert Höhe hinten rechts |
| STAT_ADC_U_KL30_WERT | count | high | int | - | - | - | - | - | ADC Wert Spannung KLemme 30 |
| STAT_ADC_USENS1_RR_WERT | count | high | int | - | - | - | - | - | ADC Wert Höhenversorgung hinten rechts |
| STAT_ADC_USENS2_RL_WERT | count | high | int | - | - | - | - | - | ADC Wert Höhenversorgung hinten links |

### ARG_0X40A3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CONTROLOPTION_WERT | - | high | int | - | - | - | - | - | - | - | ControlOption of choosen microprocessor-port   0= Port of µC inactiv  /  1=  Prot of µC = activ |
| ARD_LID_PORT8_2_WERT | - | high | int | - | - | - | - | - | - | - | A3 = P8_2 (ODP and DP  are  set by µC to open drain and output) |

### RES_0XDB75

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFFSET_LINKS_ALT_WERT | mm | - | int | - | - | - | - | - | Alter Höhenoffset zur Soll Fahrzeughöhe links |
| STAT_OFFSET_RECHTS_ALT_WERT | mm | - | int | - | - | - | - | - | Alter Höhenoffset zur Soll Fahrzeughöhe rechts |
| STAT_OFFSET_LINKS_NEU_WERT | mm | - | int | - | - | - | - | - | Neuer Höhenoffset zur Soll Fahrzeughöhe links |
| STAT_OFFSET_RECHTS_NEU_WERT | mm | - | int | - | - | - | - | - | Neuer Höhenoffset zur Soll Fahrzeughöhe rechts |
| STAT_SG_HOEHE_LINKS_WERT | mm | - | int | - | - | - | - | - | aktuelle Fahrzeughöhe links (Ausgelesen aus Fastfilter) |
| STAT_SG_HOEHE_RECHTS_WERT | mm | - | int | - | - | - | - | - | aktuelle Fahrzeughöhe rechts (Ausgelesen aus Fastfilter) |
| STAT_ADC_AUFLOESUNG_LINKS_WERT | Digit | - | int | - | - | - | - | - | AD Wandleraufloesung links laut Kodierdaten |
| STAT_ADC_AUFLOESUNG_RECHTS_WERT | Digit | - | int | - | - | - | - | - | AD Wandleraufloesung rechts laut Kodierdaten |
| STAT_AUFLOESUNG_LINKS_WERT | Digit | - | int | - | - | - | - | - | Sensoraufloesung links laut Kodierdaten |
| STAT_AUFLOESUNG_RECHTS_WERT | Digit | - | int | - | - | - | - | - | Sensoraufloesung rechts laut Kodierdaten |
| STAT_ABWEICHUNG_LINKS_WERT | mm | - | int | - | - | - | - | - | aktueller Offset links |
| STAT_ABWEICHUNG_RECHTS_WERT | mm | - | int | - | - | - | - | - | aktueller Offset rechts |

### ARG_0XDB75

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DELTA_HOEHE_LINKS_WERT | mm | - | int | - | - | - | - | - | -128 | 127 | Differenz zwischen gemessener Ist-Fahrzeughöhe und Sollhöhe (linke Fahrzeugseite). Die Ist Fahrzeughöhe ist manuell zu ermitteln. |
| DELTA_HOEHE_RECHTS_WERT | mm | - | int | - | - | - | - | - | -128 | 127 | Differenz zwischen gemessener Ist-Fahrzeughöhe und Sollhöhe (rechte Fahrzeugseite). Die Ist Fahrzeughöhe ist manuell zu ermitteln. |
| MINDEST_DELTA_WERT | mm | - | int | - | - | - | - | - | -128 | 127 | Mindestdifferenz zwischen aktuellen und neu berechneten Abgleichwert für Speicherung |

### ARG_0XDB7A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOCAL_ID_WERT | - | - | int | - | CTRL_BY_LOCAL_ID | - | - | - | - | - | Local - ID / Bauteilauswahl - Table CTRL_BY_LOCAL_ID :  0x11 = Balgventil hinten links; 0x12 = Balgventil hinten rechts; 0x13 = Ablassventil; 0x14 = Kompressoransteuerung; 0x15 = Sensorspannungsversorgung hinten links; 0x16 = Sensorspannungsversorgung hinten rechts; 0x17 = Selbsthaltung vom uController; |

### ARG_0XDB79

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE1 | 0/1 | - | int | - | - | - | - | - | 0 | 1 | LEVELUP (Hochniveau) Modus aktivieren: 0 = Levelup deaktivieren; 1 = Levelup aktivieren |

### RES_0XDB6B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATE_MODE_NR | 0-n | - | unsigned char | - | - | - | - | - | Anzeige des aktiven Reglermodus. Je nach Zustand des Fahrzeuges wird ein anderer Regelmodus benutzt. 1 = sleep; 2 = pre; 3 = normal; 4 = drive; 5 = curve; 8 = lift; 9 = post |
| STAT_POW_STATE_NR | 0-n | - | unsigned char | - | - | - | - | - | Anzeige des aktiven Modus des Power Down Reglers. Je nach Zustand des Fahrzeuges wird ein anderer Regelmodus benutzt. 1 = sleep; 2 = pre; 3 = normal; 4 = drive; 5 = curve; 8 = lift; 9 = post |
| STAT_PREVIOUS_STATE_NR | 0-n | - | unsigned char | - | - | - | - | - | Anzeige des zuletzt aktiven Modus des Reglers. Je nach Zustand des Fahrzeuges wird ein anderer Regelmodus benutzt. 1 = sleep; 2 = pre; 3 = normal; 4 = drive; 5 = curve; 8 = lift; 9 = post |
| STAT_STATE_WAKEUP_NR | 0-n | - | unsigned char | - | - | - | - | - | Anzeige des aktiven Modus des Wake Up Reglers. Je nach Zustand des Fahrzeuges wird ein anderer Regelmodus benutzt. 1 = sleep; 2 = pre; 3 = normal; 4 = drive; 5 = curve; 8 = lift; 9 = post |
| STAT_STATE_IGN_NR | 0-n | - | unsigned char | - | - | - | - | - | Zündungssignal |
| STAT_STATE_ENGINE_NR | 0-n | - | unsigned char | - | - | - | - | - | Motorsignal |
| STAT_STATE_DOOR_NR | 0-n | - | unsigned char | - | - | - | - | - | Status der Türen |
| STAT_STATE_SPEED_NR | 0-n | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkeit |
| STAT_STATE_KERB_NR | 0-n | - | unsigned char | - | - | - | - | - | Zustand des Kerb-Bit (Ein Rad steht auf Bordsteinkante): 0 = nicht gesetzt; 1 = gesetzt |
| STAT_STATE_DO_POST_NR | 0-n | - | unsigned char | - | - | - | - | - | Kennzeichnung, ob Post-Mode des Reglers eingenommen werden soll. Status POST: 0 = nicht gesetzt; 1 = gesetzt |
| STAT_STATE_LATERAL_ACL_NR | 0-n | - | unsigned char | - | - | - | - | - | Querbeschleunigung |
| STAT_STATE_USE_LATERAL_ACL_NR | 0-n | - | unsigned char | - | - | - | - | - | Kennzeichnung ob das Querbeschleunigungssignal im Regler zur Kurvenerkennung benutzt wird: 0 = nein ; 1 = ja |
| STAT_STATE_CMD_LEFT_NR | 0-n | - | unsigned char | - | - | - | - | - | Zustand der Ventil/Kompressor Ansteuerung/ Reglersignal hinten links |
| STAT_STATE_CMD_RIGHT_NR | 0-n | - | unsigned char | - | - | - | - | - | Zustand der Ventil/Kompressor Ansteuerung/ Reglersignal hinten rechts |

### ARG_0XDB77

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIGITALWERT_WERT | - | - | int | - | - | - | - | - | - | - | Digitalargument - EIN/AUS |
| ADJUSTMENT_TIME_WERT | s | - | int | - | - | - | - | - | - | - | Dauer der Ansteuerung |
| LOCAL_ID_WERT | 0-n | - | int | - | CTRL_BY_LOCAL_ID | - | - | - | - | - | Local-ID/Bauteilauswahl siehe Tabelle CTRL_BY_LOCAL_ID |

### CTRL_BY_LOCAL_ID

| WERT | TEXT |
| --- | --- |
| 0x11 | Balgventil hinten links |
| 0x12 | Balgventil hinten rechts |
| 0x13 | Ablassventil |
| 0x14 | Kompressoransteuerung |
| 0x15 | Sensorspannungsversorgung hinten links |
| 0x16 | Sensorsspannungsversorgung hinten rechts |
| 0x17 | Selbsthaltung vom uController |
| 0xC1 | Heben/SenkenSequenz hinten rechts |
| 0xC2 | Heben/SenkenSequenz hinten links |
| 0xC3 | Heben/SenkenSequenz hinten |
| 0x41 | Betriebsmodus |
| 0xFF | nicht definiert |

### RES_0XDB71

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ORGFASTFILTER_RL_WERT | mm | - | char | - | - | - | - | - | Ausgabe der ungefilterten Höhenstandswerte. Die Rohwerte des FASTFILTER des linken hinteren Sensors werden angezeigt. |
| STAT_ORGFASTFILTER_RR_WERT | mm | - | char | - | - | - | - | - | Ausgabe der ungefilterten Höhenstandswerte. Die Rohwerte des FASTFILTER des rechten hinteren Sensors werden angezeigt. |
| STAT_FASTFILTER_RL_WERT | mm | - | int | - | - | - | - | - | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des linken hinteren Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten. |
| STAT_FASTFILTER_RR_WERT | mm | - | int | - | - | - | - | - | Ausgabe der schnell gefilterten Höhenstandswerte. Die Filterwerte aus dem FASTFILTER des rechten hinteren Sensors werden angezeigt. Wenn das Fahrzeug steht oder langsam fährt, arbeitet die EHC Regelung mit den FASTFILTER Werten |
| STAT_SLOWFILTER_RL_WERT | mm | - | char | - | - | - | - | - | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des linken hinteren Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_SLOWFILTER_RR_WERT | mm | - | char | - | - | - | - | - | Ausgabe der langsam gefilterten Höhenstandswerte. Die Filterwerte aus dem SLOWFILTER des rechten hinteren Sensors werden angezeigt. Wenn das Fahrzeug fährt arbeitet die EHC Regelung mit den SLOWFILTER Werten. Der Slowfilter sorgt dafür das Fahrdynamische Prozesse (Strassenschäden etc.) nicht das EHC Regelverhalten beeinflussen |
| STAT_LATACCFILTER_WERT | m/s² | - | int | - | - | - | 8 | - | Ausgabe der gefilterten Querbeschleunigung |

### RES_0XDB78

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAST_FILTER_HL_WERT | mm | - | int | - | - | - | - | - | Auslesen des Fastfilter hinten links. schnell gefilterte Werte des Höhensensor. |
| STAT_BYTE_2_NR | 0-n | - | int | - | - | - | - | - | Enthält ein Prüfbyte vom Achsmessstand |
| STAT_FAST_FILTER_HR_WERT | mm | - | int | - | - | - | - | - | Auslesen des Fastfilter hinten rechts. Schnell gefilterte Werte des Höhensensor. |

### RES_0XDB65

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANALOG_RL_WERT | V | - | int | - | - | - | 100 | - | EHC Sensorspannung hinten links |
| STAT_ANALOG_RR_WERT | V | - | int | - | - | - | 100 | - | EHC Sensorspannung hinten rechts |
| STAT_ANALOG_UKL30_WERT | V | - | int | - | - | - | 100 | - | Versorgungsspannung Steuergerät Klemme30 (vom SGgemessen) |
| STAT_ANALOG_USENS1_WERT | V | - | int | - | - | - | 100 | - | Versorgungsspannung des Höhenstandssensor hinten links (vom SG gemessen) |
| STAT_ANALOG_USENS2_WERT | V | - | int | - | - | - | 100 | - | Versorgungsspannung des Höhenstandssensor hinten rechts (vom SG gemessen) |

### RES_0XDB67

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANSTEUERUNG_AKTIV | 0/1 | - | int | - | - | - | - | - | Liefert die Information über den Ansteuerungszustand des Bauteils 0 - keine Ansteuerung 1 - Ansteuerung aktiv |

### ARG_0XDB67

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOCAL_ID_WERT | - | - | int | - | CTRL_BY_LOCAL_ID | - | - | - | - | - | Local - ID / Bauteilauswahl - Table CTRL_BY_LOCAL_ID :  0x11 = Balgventil hinten links; 0x12 = Balgventil hinten rechts; 0x13 = Ablassventil; 0x14 = Kompressoransteuerung; 0x15 = Sensorspannungsversorgung hinten links; 0x16 = Sensorspannungsversorgung hinten rechts; 0x17 = Selbsthaltung vom uController; |

### ARG_0XDB74

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BYTE_1_WERT | mm | - | int | - | - | - | - | - | -128 | 127 | Enthält die Daten des Fastfilter hinten links (gefilterter Höhenstand) |
| BYTE_2_WERT | - | - | int | - | - | - | - | - | 0 | 255 | Enthält ein Prüfbyte vom Achsenmesstand |
| BYTE_3_WERT | mm | - | int | - | - | - | - | - | -128 | 127 | Enthält die Daten des Fastfilter hinten rechts. (gefilterter Höhenstand) |

### RES_0XDB6D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_H_RL_FASTFILTER_WERT | mm | - | int | - | - | - | - | - | Enthält die Daten des Fastfilter hinten links (gefilterter Höhenstand) |
| STAT_PRUEFBYTE_WERT | - | - | int | - | - | - | - | - | Enthält ein Prüfbyte vom Achsenmesstand |
| STAT_H_RR_FASTFILTER_WERT | mm | - | int | - | - | - | - | - | Enthält die Daten des Fastfilter hinten rechts. (gefilterter Höhenstand) |

### RES_0XDB70

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKTION_LEVELUP_AKTIV | 0/1 | - | int | - | - | - | - | - | Zeigt an, ob die Funktionalitaet LEVELUP grundsaetzlich aktiviert ist |
| STAT_ZUSTAND_LEVELUP_AKTIV | 0/1 | - | int | - | - | - | - | - | Zeigt an, ob der Zustand LEVELUP(Hochniveau) gerade eingenommen ist |

### RES_0XDB76

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSMODE_NR | 0-n | - | int | - | - | - | - | - | Aktueller Betriebsmodus |

### ARG_0XDB76

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODECTRL_WERT | - | - | int | - | - | - | - | - | 0 | 3 | einzunehmender Betriebsmodus |

### RES_0XDB6C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLAUS_BA_MV_NR | 0-n | - | unsigned char | - | - | - | - | - | in discussion |
| STAT_PLAUS_BA_MV_DRIVE_NR | 0-n | - | unsigned char | - | - | - | - | - | in discussion |
| STAT_PLAUS_CTRLACTIVITY_TIME_WERT | s | - | int | - | - | - | - | - | Zeitschwelle Sensor - Aktivität |
| STAT_PLAUS_CTRL1SIDE_TIME_WERT | s | - | int | - | - | - | - | - | Zeitschwelle Sensor - Aktivität (einseitig) |
| STAT_PLAUS_HL_DELTA_WERT | mm | - | unsigned char | - | - | - | - | - | Höhenstansdelta der Sensoraktivität hinten links |
| STAT_PLAUS_HR_DELTA_WERT | mm | - | unsigned char | - | - | - | - | - | Höhenstandsdelta der Sensoraktivität hinten rechts |
| STAT_PLAUS_SENSORACTIVITY_CNT_NR | 0-n | - | int | - | - | - | - | - | aktueller Zustand des Aktivitätszählers |
| STAT_REACT_BA_ACTUATOR_NR | 0-n | - | unsigned char | - | - | - | - | - | Fehlerstatus der Aktuatoren |
| STAT_REACT_BA_U_SENS_NR | 0-n | - | unsigned char | - | - | - | - | - | in discussion |
| STAT_REACT_BA_COMMAND_NR | 0-n | - | unsigned char | - | - | - | - | - | Fehlerstatus des Reglers |
