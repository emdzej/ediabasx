# jbbf3.prg

## General

|  |  |
| --- | --- |
| File | jbbf3.prg |
| Type | PRG |
| Jobs | 90 |
| Tables | 221 |
| Origin | BMW EI-73 Jens_Klingseisen |
| Revision | 3.001 |
| Author | Lear ESD ASanz, Lear ESD JLlovell, Lear ESD SGarriga, Lear ESD |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | JBBF3 |  |  |
| ORIGIN | string | BMW EI-73 Jens_Klingseisen |  |  |
| REVISION | string | 3.001 |  |  |
| AUTHOR | string | Lear ESD ASanz, Lear ESD JLlovell, Lear ESD SGarriga, Lear ESD  |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.72 |  |  |
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

### IS_LOESCHEN

Infospeicher loeschen UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $0F06 ClearSecondaryDTCMemory Modus: Default

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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

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

### _SLEEP_MODE_LEAR

Send ECU to Sleep Mode without waiting the busses to stop UDS  : $11   EcuReset $05 Modus  : Default

_No arguments._

### _LEAR_SW_VERSION

Identdaten UDS   : $22   ReadDataByIdentifier $0E03 Sub-Parameter SGBD-Index

_No arguments._

### STAT_FAHRPROFIL_EES_LESEN

Show the "driving profile" allocated in eeprom UDS   : $22   ReadDataByIdentifier $0E04 Sub-Parameter SGBD-Index

_No arguments._

### STEUERN_FAHRPROFIL_EES_MEM_LOESCHEN

steuern fahrprofil EES mem loeschen UDS   : $2E   WriteDataByIdentifier $0E04 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_WWS_ASCET_INPUT

Auslesen der Stati von den Internen Variablen UDS: $22   ReadDataByIdentifier $0600 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_WWS_ASCET_OUTPUT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $0601 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_WWS_ASCET_COD

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $0602 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_ASCET_INPUT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $0603 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_ASCET_OUTPUT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $0604 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_ASCET_COD

Auslesen der Stati von den Internen Variablen UDS: $22   ReadDataByIdentifier $0605 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_CAN_PWR

Auslesen der Stati von den Fensterheber CAN Variablen UDS: $22   ReadDataByIdentifier $0606 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR

Auslesen der Stati von den Fnesterheber Internal Varablen UDS: $22 ReadDataByIdentifier $0607 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_FZM

Auslesen der Stati von den analogen Ausgaengen UDS: $22 ReadDataByIdentifier $0608 Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_ATMEL

Auslesen der Stati von den analogen Ausgaengen UDS: $22 ReadDataByIdentifier $0609 Sub-Parameter SGBD-Index

_No arguments._

### _LAST_AEP_PWM_DUTY_CYCLE

Identdaten UDS   : $22   ReadDataByIdentifier $0E06 Sub-Parameter

_No arguments._

### RLS_CODING

Identdaten UDS   : $31 RoutineControl UDS   : $01   startRoutine $0E15 Sub-Parameter SGBD-Index

_No arguments._

### DYNAMICAL_ID

Identdaten UDS   : $31 RoutineControl UDS   : $01   startRoutine

| Name | Type | Description |
| --- | --- | --- |
| LIN | string | gewuenschter Diagnose-Modus table TAB_DINAMICAL_ID Defaultwert: DEFAULT |

### _PERFORMANCE_ANALYSIS

Reading the Performing Analysis UDS:  $22 ReadDataByIdentifier Identifier $EF06 Modus  : Default

_No arguments._

### STATUS_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F01, F02, F03, F04, F07, F10, RR4, RR5, F25, F26 |
| ELEMENT | string | FA:  Fenster Fahrerseite BF:  Fenster Beifahrerseite FAH: Fenster Fahrerseite hinten BFH: Fenster Beifahrerseite hinten SHD: Schiebedach ESH: Elektrischer Schiebehimmel |
| KENNLINIE | int | optional: nur für SHD und ESH 1: Schieben 2: Heben bzw. Zwangsspalt |

### STEUERN_DM_FSS_MASTER

Reversierungslogger löschen Loeschen von EE_FH_REV_DATA des jbbfe2 UDS    : $31   RoutineControl $xx   01: StartRoutine, 02: StopRoutine, 03: RequestRoutineResults $0305 RID für FehlerspeicherSperre $xx   Signalvorgabe per argument

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | int | optionales argument, wird nichts übergebenm wird Routine gestoppt Welches Signal soll versendet werden 0: Fehlerspeicherfreigabe 1: Fehlerspeichersperre 2: Reserve 3: Signal ungültig |

### _PERFORMANCE_ANALYSIS_EXTENDED1

Reading the Performing Analysis UDS:  $22 ReadDataByIdentifier Identifier $EF07 Modus  : Default

_No arguments._

### _PERFORMANCE_ANALYSIS_EXTENDED2

Reading the Performing Analysis UDS:  $22 ReadDataByIdentifier Identifier $EF08 Modus  : Default

_No arguments._

### _PERFORMANCE_ANALYSIS_EXTENDED3

Reading the Performing Analysis UDS:  $22 ReadDataByIdentifier Identifier $EF0A Modus  : Default

_No arguments._

### _PERFORMANCE_ANALYSIS_EXTENDED_FREEZE

Reading the Performing Analysis UDS:  $22 ReadDataByIdentifier Identifier $EF09 Modus  : Default

_No arguments._

### _STATUS_FH_ANALYSE

Check, ob FH eingelernt und Abgleich mit Adaptionsdaten

_No arguments._

### _READMEMORYBYADDRESS

ReadMemoryByAddress UDS  : $23   ReadMemoryByIdentifier UDS  : $12   Lenght of Memory address and Size Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x0000 - 0x7FFF |
| ANZAHL | int | 1 - n ( 255 ) |

### STEUERN_FENSTERHEBER_DENORMIEREN

Denormiert gewählten Fensterheber Denormalize selected Window UDS    : $2F InputOutputControlByIdentifier $07 FH WOUT Logik JOBS $00 FH denormieren $03 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection Auswahl des Fensterhebers, der denormiert werden soll: 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STEUERN_FENSTERHEBER_EINLERNEN_OHNE_EKS

Normiert gewählten Fensterheber (ohne EKS) Normalize selected Window (without Apinch) Dauer max. 5 sec UDS    : $2F InputOutputControlByIdentifier $07 FH WOUT Logik JOBS $01 Einlernen der Fensterheber $03 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection Auswahl des Fensters, dass eingelernt werden soll: 0x00: Vorgang abbrechen 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STEUERN_FENSTERHEBER_EINLERNEN

Einlernen der Fensterheber Normiert gewaehlten Fensterheber (mit EKS) Normalize selected Window (with Apinch) Einlernvorgang per Diagnose muss ohne Randbedingungen ausgefuehrt werden koennen Ob Einlernvorgang noch laeuft ist ueber: Job: STATUS_TUER Result: STAT_FH_*_EINLERNENVORGANG_AKTIV abrufbar. Ob ein Fenster eingelernt ist ueber: Result: STAT_FH_*_EINGELERNT UDS    : $2F InputOutputControlByIdentifier $07 FH EKS JOBS $02 Hublaenge zum Einlernen aus $03 ShortTermAdjustment UDS    : $22 ReadDataByIdentifier $07 FH EKS JOBS $02 Hublaenge zum Einlernen aus Codierresponse lesen und Einlernen starten

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) 0x00: Alle stop 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STATUS_FENSTERHEBER_HINTEN

Gibt aktuellen Zustand Fensterheber wieder Status Rear Windows (z.B. Position, Normierung, Verfahrrichtung, etc) UDS    : $22 ReadDataByIdentifier $07 FH WOUT Logik JOBS $03 Stati der Fensterheber fuer JBBFE2

_No arguments._

### STEUERN_FENSTERHEBER_HINTEN

Verfaehrt gewaehlten Fensterheber gemaeß Control Rear Windows angegebener Richtung und Zeit (ms) UDS    : $2F InputOutputControlByIdentifier $07 FH WOUT Logik JOBS $04 Ansteuern FH $03 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG_FH_FAH | string | table FH_RICHTUNG AUSWAHL_RICHTUNG TEXT Driving direction Rear Driver Window Auswahl der Richtung, in der das Fahrertuerfenster verfahren soll: AUS(0), AUF(1), ZU(2) |
| ANSTEUER_ZEIT_FAH | int | Driving Time Rear Driver Door, in steps of 100 ms Zeit in 100ms, die der FH angesteuert werden soll, d.h. 1 = 100ms 15 sek. max. (150) 0: kein FATH Steuern |
| RICHTUNG_FH_BFH | string | table FH_RICHTUNG AUSWAHL_RICHTUNG TEXT Driving direction Rear Passenger Window Auswahl der Richtung, in der das Beiahrertuerfenster verfahren soll: AUS(0), AUF(1), ZU(2) |
| ANSTEUER_ZEIT_BFH | int | Driving Time Rear Driver Door, in steps of 100 ms Zeit in 100ms, die der FH angesteuert werden soll, d.h. 1 = 100ms 15 sek. max. (150) 0: kein BFTH Steuern |
| IM_PANIK_MODUS | int | Control Window in Panic Mode Step 1 Ansteuern den FH im Panikmodus Stufe 1 NORMAL MODUS(0), PANIK MODUS(1) default: NORMAL MODUS |

### STATUS_FH_LOGGER_DENORMIERER

Fensterheber Denormierungslogger auslesen Lesen von EE_FH_LOG_DATA UDS    : $22 ReadDatabyIdentifier $07 FH WOUT Logik JOBS $05 EE_FH_LOG_DATA Status

_No arguments._

### STEUERN_FH_LOGGER_DENORMIERER

Denormierungslogger löschen Loeschen von EE_FH_LOG_DATA des jbbfe2 UDS    : $2F InputOutputControlByIdentifier $07 FH WOUT Logik JOBS $05 EE_FH_LOG_DATA Loeschen $03 ShortTermAdjustment

_No arguments._

### STATUS_FH_LOGGER_REVERSIERER

Fensterheber Reversierlogger auslesen Lesen von EE_FH_REV_DATA UDS    : $22 ReadDatabyIdentifier $07 FH WOUT Logik JOBS $08 EE_FH_REV_DATA Status

_No arguments._

### STEUERN_FH_LOGGER_REVERSIERER

Reversierungslogger löschen Loeschen von EE_FH_REV_DATA des jbbfe2 UDS    : $2F InputOutputControlByIdentifier $07 FH BROSE JOBS $08 EE_FH_REV_DATA Loeschen $03 ShortTermAdjustment

_No arguments._

### STEUERN_FENSTERHEBER_MESSDATEN_AKTIVIEREN

Messdatenausgabe fuer FH starten UDS    : $2F InputOutputControlByIdentifier $07 FH WOUT Logik JOBS $06 MESSDATEN_AKTIVIEREN $03 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection 0x00: Vorgang abbrechen 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STEUERN_FH_ADAPTIONSSPEICHER_LOESCHEN

Adaptionsdaten Fensterheber Loeschen UDS    : $2F InputOutputControlByIdentifier $07 FH WOUT Logik JOBS $0E ECHT_ZEIT_DATEN ZONE 4 Loeschen $03 ShortTermAdjustment

_No arguments._

### _ECHTZEITDATEN_BROSE_LESEN

Echtzeitdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $07   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> Adaptionsdaten FAT 2 -> Statistikdaten FAT 3 -> Prozessdaten FAT 4 -> Position FAT 5 -> Adaptionsdaten BFT 6 -> Statistikdaten BFT 7 -> Prozessdaten BFT 8 -> Position BFT 9 -> Denormierlogger 10 -> Reversierlogger 11 -> Motorstop Reason FAT 12 -> Motorstop Reason BFT 13 -> Initlog FAT 14 -> Initlog BFT |

### _ECHTZEITDATEN_BROSE_LOESCHEN

Echtzeitdaten Brose Applikation loeschen UDS    : $2F InputOutputControlByIdentifier $07 Brose $4X Auswahl der auszulesenden Zone $03 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> Adaptionsdaten FAT 2 -> Statistikdaten FAT 3 -> Prozessdaten FAT 4 -> Position FAT 5 -> Adaptionsdaten BFT 6 -> Statistikdaten BFT 7 -> Prozessdaten BFT 8 -> Position BFT 9 -> Denormierlogger 10 -> Reversierlogger 11 -> Motorstop Reason FAT 12 -> Motorstop Reason BFT 13 -> Initlog FAT 14 -> Initlog BFT |

### _STATUS_MOTORSTOPREASON_LESEN

Motorstopp Grund auslesen und in Klartext darstellen UDS  : $22   ReadDataByIdentifier $07   Brose $4B..4C   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTERHEBER | int | Auswahl der auszulesenden Zone 1 -> Stoppgruende FAT 2 -> Stoppgruende BFT |

### _STATUS_INITLOG_LESEN

Init Log auslesen und in Klartext darstellen UDS  : $22   ReadDataByIdentifier $07   Brose $4D..4E   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTERHEBER | int | Auswahl der auszulesenden Zone 1 -> Initlog FAT 2 -> Initlog BFT |

### _STATUS_STATISTIKDATEN_LESEN

Statistikdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $07   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> FAT 2 -> BFT |

### _STATUS_PROZESSDATEN_LESEN

Prozessdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $07   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> FAT 2 -> BFT |

### _STATUS_POSITION_LESEN

Statistikdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $07   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> FAT 2 -> BFT |

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALVAR_FATH

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $060A Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALVAR_BFTH

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $060B Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALFLG_FATH

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $060C Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALFLG_BFTH

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $060D Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_CONTROL_FATH

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $060E Sub-Parameter SGBD-Index

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_CONTROL_BFTH

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $060F Sub-Parameter SGBD-Index

_No arguments._

### _PROGRAM_COMICRO

Identdaten UDS   : $2E   ReadDataByIdentifier $0E0x Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| COMICRO | int | Selection of the Flash zone 0 -> Flash the Comicro Application (Default) 1 -> Flash the Comicro Bootloader |

### _STATUS_COMICRO

Identdaten UDS   : $22   ReadDataByIdentifier $0E00 Sub-Parameter

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars |
| 0x0008 | Ford Motor Company |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH (formerly Mitsubishi) |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd (formerly Hitachi) |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Group Trucks |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC (formerly Arvinmeritor 2011-03-29) |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007B | Bury GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0091 | Mahle |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x0099 | Thomson Linear Motion |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x009C | Methode Electronics, Inc |
| 0x009D | Danlaw, Inc. |
| 0x009E | Federal-Mogul Corporation |
| 0x009F | Fujikoki Corporation |
| 0x00A0 | MENTOR Gmbh & Co. Praezisions-Bauteile KG |
| 0x00A1 | Toyota Industries Corporation |
| 0x00A2 | Strattec Security Corp. |
| 0x00A3 | TE Connectivity |
| 0x00A4 | Westfalia Automotive GmbH |
| 0x00A5 | Woco Industrietechnik GmbH |
| 0x00A6 | Minebea Co., Ltd |
| 0x00A7 | Magna |
| 0x00A8 | Dong IL Technology |
| 0x00A9 | Wilo SE |
| 0x00AA | Remy International, Inc. |
| 0x00AB | ACCUmotive |
| 0x00AC | Carling Technologies |
| 0x00B0 | Hanon Systems Korea |
| 0x00B1 | Eberspächer Controls Esslingen GmbH & Co. KG |
| 0x00B2 | WABCO Development GmbH |
| 0x00B3 | Sensirion AG |
| 0x00B4 | OSHINO Electronics Estonia OÜ |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0101 | Huber Automotive AG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
| 0x0135 | LG Electronics |
| 0x0136 | Eberspächer Controls GmbH & Co. KG |
| 0x0137 | AISIN Seiki Co., Ltd. |
| 0x0138 | Elektrosil Systeme der Elektronik GmbH |
| 0x0139 | Nidec Corporation |
| 0x013A | ISSI – Integrated Silicon Solution Inc |
| 0x013B | Twin Disc, Incorporated |
| 0x013C | SPAL Automotive Srl |
| 0x013D | OTTO Engineering, Inc. |
| 0xFFFF | unbekannter Hersteller |

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

### AEP_PWM_VALUES

| VALUE | RESULT_NAME |
| --- | --- |
| 0x00 | LINE_SHORT_TO_GND |
| 0xFD | NO_SIGNAL |
| 0xFE | INVALID_SIGNAL |
| 0x64 | LINE_SHORT_TO_VBAT |
| -- | SIGNAL_VALID |

### ARG_0XA177

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_FENSTER | + | - | 0-n | - | char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Beschreibung Argument siehe Tabelle |

### ARG_0XA178

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| AKTION | + | - | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | - | - | 0: Keine Aktion  1: Öffnen  2: Schliessen  3: Maut öffnen  4: Maut schliessen |
| ZEIT | + | - | ms | - | int | - | - | - | - | - | - | - | Angabe der Ansteuerzeit in 100ms-Schritten bei Aktion 1 und 2; Bei Aktionen 3 und 4 (Maut) ist nur eine 0 oder 1 zulässig |

### ARG_0XA179

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_FENSTER | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0XA17E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | Ink | - | unsigned int | - | - | - | - | - | - | - | Position in Hallpulsen |

### ARG_0XD071

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | 0: LED AUS 1: LED EIN | - | 0: LED AUS 1: LED EIN |

### ARG_0XD074

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | unsigned char | - | - | - | - | - | - | - | 0: Lenkradheizung AUS 1-255: Lenkradheizung ein in Sekunden |

### ARG_0XD08B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TLC_MITTEN_FREQUENZ | Hz | - | unsigned char | - | - | 10.0 | - | -373.0 | 43.7 | 56.3 | Zulässiger Wertebereich 43,7...56,3 Hz |

### ARG_0XD19F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | 0: Kurzhub aktivieren 1: Kurzhub deaktivieren |

### ARG_0XD298

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | int | - | - | - | - | - | - | - | ZEIT=  1-2000 in ms für Hupe ein;  0= Hupe aus |

### ARG_0XD30A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Ansteuerung Heckrollo ausschalten;  1: Ansteuerung Heckrollo einschalten |

### ARG_0XD312

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Ansteuerung Fahrerseite hinten ausschalten;  1: Ansteuerung Fahrerseite hinten einschalten |

### ARG_0XD315

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Ansteuerung Beifahrerseite hinten ausschalten;  1: Ansteuerung Beifahrerseite hinten einschalten |

### ARG_0XD32D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERT | 0-n | - | int | - | TAB_SPIEGEL_HEIZUNG | - | - | - | - | - | Heizleistung in Prozent. Auflösung Stufe zu Prozentwerten in Sub-Tabelle |
| ZEIT | s | - | int | - | - | - | - | - | 0 | 240 | Angabe der Zeit in Sekunden. Maximal 240 Sekunden_ |

### ARG_0XD32F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | int | - | - | - | - | - | 0 | - | Ansteuerzeit in Sekunden. Spiegel wird mit 100 % abgeblendet. |

### ARG_0XD33D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LAND | 0-n | - | char | - | TAB_UGDO_LAND | - | - | - | - | - | - |

### ARG_0XD33E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | 0-n | - | char | - | TAB_UGDO_MODE | - | - | - | - | - | Mode des UGDO |

### ARG_0XD344

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZONE | 0-n | - | unsigned int | - | TAB_MAGNETZONE | - | - | - | - | - | Vorgabe Zone  Werte siehe TAB_MAGNETZONE |

### ARG_0XD345

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPRACHE | 0-n | - | unsigned char | - | TAB_KOMPASS_SPRACHE | - | - | - | - | - | Vorgabe Sprache  Werte siehe TAB_KOMPASS_SPRACHE 0: Englisch  1: Deutsch |

### ARG_0XD352

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Waschwasserpumpe hinten aus  1: Waschwasserpumpe hinten ein |
| ZEIT | s | - | int | - | - | - | - | - | 0 | 60 | Ansteuerzeit in Sekunden  0 bedeutet aus |

### ARG_0XD355

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Parkposition |

### ARG_0XD356

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Ende Ansteuerung 1: Heckscheibenwischer in Park-Position |

### ARG_0XD35C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Waschwasserpumpe vorne ausschalten;  1: Waschwasserpumpe vorne einschalten |
| ZEIT | s | - | int | - | - | - | - | - | 0 | 60 | Angabe der Ansteuer-Zeit in Sekunden |

### ARG_0XD35D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_WISCHER | - | - | - | - | - | 0: Scheibenwischer vorne ausschalten;  1:Scheibenwischer vorne auf Stufe 1;  2:Scheibenwischer vorne auf Stufe 2 |
| ZEIT | - | - | int | - | - | - | - | - | 0 | 60 | Angabe der Ansteuer-Zeit in Sekunden |

### ARG_0XD35F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Scheibenwischer hinten ausschalten; 1:Scheibenwischer hinten einschalten |
| ZEIT | s | - | int | - | - | - | - | - | 0 | 60 | Angabe der Ansteuer-Zeit in Sekunden |

### ARG_0XD360

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | int | - | - | - | - | - | - | - | 0: Scheinwerferreinigungsanlage ausschalten;  1:Scheinwerferreinigungsanlage einschalten |
| ZEIT | - | - | int | - | - | - | - | - | 0 | 60 | Angabe der Ansteuer-Zeit in Sekunden |

### ARG_0XD361

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | 0: LED AUS 1: LED EIN | - | 0: LED AUS 1: LED EIN |

### ARG_0XD362

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Montageposition |

### ARG_0XD363

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Service-Position |

### ARG_0XD399

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | - | unsigned char | - | - | - | - | - | 0.0 | 25.0 | Ansteuerdauer in Sekunden  1 - 25 Sekunden  0 = Ansteuerung AUS |
| ANLAUFRAMPE | - | - | unsigned char | - | - | - | - | - | 0.0 | 2.0 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| STOPRAMPE | - | - | unsigned char | - | - | - | - | - | 0.0 | 2.0 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| AMPLITUDE | - | - | unsigned char | - | - | - | - | - | 0.0 | 14.0 | Vibrationsstärke; es sind Amplituden von 0-14 (dezimal) möglich. |
| FREQUENZ | - | - | unsigned char | - | - | - | - | - | 0.0 | 14.0 | Frequenz der Vibration, Frequenzstufen von 0-14 (dezimal) sind möglich. |

### ARG_0XD3A4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | char | - | TAB_LIN_EMBLEM_VERFAHREN | - | - | - | - | - | Verfahren des Emblems |

### ARG_0XD59B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_1 | 0/1 | - | char | - | - | - | - | - | - | - | 0: aus 1: ein |
| LED_2 | 0/1 | - | char | - | - | - | - | - | - | - | 0: aus 1: ein |

### ARG_0XD59D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_1 | 0/1 | - | char | - | - | - | - | - | - | - | 0: aus 1: ein |
| LED_2 | 0/1 | - | char | - | - | - | - | - | - | - | 0: aus 1: ein |

### ARG_0XD72A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned int | - | - | - | - | - | 0 | 60 | Angabe Zeit in Sekunden |

### ARG_0XD72F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Heizungs-Ausgang ( KISSEN ,  LEHNE ,  KISSEN_LEHNE ) |
| TEMP | Grad | - | unsigned char | - | - | - | - | - | 0 | 85 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | int | 0 | - | - | - | - | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD732

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Heizungs-Ausgang ( KISSEN ,  LEHNE ,  KISSEN_LEHNE ) |
| TEMP | Grad | - | unsigned char | - | - | - | - | - | 0 | 85 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | int | 0 | - | - | - | - | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD737

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | 0 | 3 | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned int | - | - | - | - | - | 0 | 60 | Angabe Zeit in Sekunden |

### ARG_0XD794

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Aus 1: Ein |

### ARG_0XD7AA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned int | - | - | - | - | - | - | 60 | Angabe Zeit in Sekunden |

### ARG_0XD7B0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Heizungs-Ausgang ( KISSEN ,  LEHNE ,  KISSEN_LEHNE ) |
| TEMP | Grad | - | unsigned char | - | - | - | - | - | 0 | 85 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | int | 0 | - | - | - | - | - | 60 | Angabe der Zeit in Sekunden |

### ARG_0XD7EB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | int | - | TAB_SITZHEIZUNG_STUFE | - | - | - | 0 | 60 | Angabe Zeit in Sekunden |

### ARG_0XD7F1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Heizungs-Ausgang ( KISSEN ,  LEHNE ,  KISSEN_LEHNE ) |
| TEMP | Grad | - | unsigned char | - | - | - | - | - | 0 | 85 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | int | 0 | - | - | - | - | - | 60 | Angabe der Zeit in Sekunden |

### ARG_0XD89E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VENTIL_LINKS | % | - | int | - | - | - | - | - | 0 | 100 | PWM-Wert für die Ansteuerung des Wasserventils links (0-100%) |
| PWM_VENTIL_RECHTS | % | - | int | - | - | - | - | - | 0 | 100 | PWM-Wert für die Ansteuerung des Wasserventils rechts (0-100%) |
| ZEIT | s | - | int | - | - | - | - | - | - | 254 | Angabe Ansteuerzeit in Sekunden |

### ARG_0XD903

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | 0: Zusatzwasserpumpe aus 1: Zusatzwasserpumpe ein |
| ZEIT | s | - | char | - | - | - | - | - | 0 | 60 | Ansteuerzeit in Sekunden |

### ARG_0XD908

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | int | - | - | - | - | - | 0 | 100 | PWM: 0-100 % |
| ZEIT | s | - | int | - | - | - | - | - | - | - | Ansteuerzeit in Sekunden |

### ARG_0XD965

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | AUC-Sensor enablen:  0 = AUS,  1 = EIN |

### ARG_0XD970

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | 0: Heckscheibenheizung aus 1: Heckscheibenheizung ein |
| ZEIT | s | - | int | - | - | - | - | - | 0 | 60 | Ansteuerzeit in Sekunden |

### ARG_0XD971

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Magnetkupplung:  0 = AUF,  1 = ZU |
| ZEIT | s | - | int | - | - | - | - | - | - | - | Gibt an, wie lange die Ansteuerung erfolgen soll: Angabe in Sekunden |

### ARG_0XD979

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | 0 | 1 | 0: Ventil offen / unbestromt 1: Ventil geschlosssen / bestromt |

### ARG_0XDA53

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | char | - | TAB_POWERMODUL | - | - | - | - | - | 0x00: keine Ansteuerung;  0x01: Relais vorne,   0x02: Relais hinten,  0x03: Relais beide |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | 0: Ausschalten 1: Einschalten |

### ARG_0XDA7D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Simualtion Taster Heckklappe aussen 0: Nicht gedrückt 1: Gedrückt |

### ARG_0XDA80

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | - | - | - | - | - | Simulation Taster Heckscheibe 0: Nicht Gedrückt 1: Gedrückt |

### ARG_0XDA88

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_ZV | - | - | - | - | - | AKTION 0x00 Keine Ansteuerung 0x01 Verriegeln 0x02 Sichern 0x03 Entsichern 0x04 Entriegeln 0x05 Selektiv entriegeln FA 0x06 Selektiv entriegeln Heckklappe |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | SRA, Frontscheibenreinigungsanlage, Sitzheizung low vorne und hinten, Frontwischer, Heckwischer, Waschdüsen- und Spiegelheizung low, Sonnenrollos, Wischernotlauf, Klemme 30F trennen deaktiviert |
| 0x01 | Spezieller Energiesparmode | SRA, Frontscheibenreinigungsanlage, Sitzheizung low vorne und hinten, Frontwischer, Heckwischer, Waschdüsen- und Spiegelheizung low, Sonnenrollos, Wischernotlauf, Klemme 30F trennen deaktiviert |
| 0x02 | ECOS-Mode | SRA, Frontscheibenreinigungsanlage, Frontwischer, Heckwischer, Wischernotlauf deaktiviert |
| 0x03 | MOST-Mode | SRA, Frontscheibenreinigungsanlage, Sitzheizung low vorne und hinten, Frontwischer, Heckwischer, Waschdüsen- und Spiegelheizung low, Sonnenrollos, Wischernotlauf, Klemme 30F trennen, Montageposition Wischer deaktiviert |
| 0x04 | Betriebsmode 4 | SRA, Frontscheibenreinigungsanlage, Sitzheizung low vorne und hinten, Frontwischer, Heckwischer, Waschdüsen- und Spiegelheizung low, Wischernotlauf, Montageposition Wischer deaktiviert |
| 0x05 | Betriebsmode 5 | SRA, Frontscheibenreinigungsanlage, Sitzheizung low vorne und hinten, Frontwischer, Heckwischer, Waschdüsen- und Spiegelheizung low, Wischernotlauf, Montageposition Wischer deaktiviert |
| 0x06 | Rollenmode | @@ |
| 0xFF | ungültiger Betriebsmode | ungültig |

### CSM_ERRORS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | INVALID_ENCODING |
| 0x02 | INVALID_SG_ID |
| 0x03 | INVALID_RND_SIG |
| 0x04 | SWE_INVALID |
| 0xFE | UNEXPECTED_ERROR |
| 0xFF | UNEXPECTED_ANSWER |
| 0xDC | WRONG_SEQUENCE |
| 0xDD | NOT_FINISHED |
| 0xDE | WORKING |
| 0xFD | WRONG_MESSAGE |
| 0xXY | UNKNOW_ERROR |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 5 |
| F_HLZ_VIEW | - |

### FH_AKT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Bedienung_FBD |
| 0x02 | ZVentriegeln / ZVverriegeln |
| 0x03 | Türkontaktänderung |
| 0x04 | SST betätigt |
| 0x05 | Bedienung Heckklappe |
| 0x06 | Erfolgreicher Schlüsselsuche im Außenraum |
| 0x07 | EMF-Taster |
| 0x08 | Telefon |
| 0x09 | Anforderung durch andere Funktion  30B_anf  |
| 0x0A | Unknow |
| 0xXY | Signal ungültig |

### FH_RICHTUNG

| TEXT | AUSWAHL_RICHTUNG | MODE_TEXT |
| --- | --- | --- |
| 0 | 0 | Fensterheber verfährt NICHT |
| 1 | 1 | Fensterheber verfährt AUF |
| 2 | 2 | Fensterheber verfährt ZU |
| 0x00 | 0 | Fensterheber verfährt NICHT |
| 0x01 | 1 | Fensterheber verfährt AUFn |
| 0x02 | 2 | Fensterheber verfährt ZU |
| AUS | 0 | Fensterheber verfährt NICHT |
| AUF | 1 | Fensterheber verfährt AUF |
| ZU | 2 | Fensterheber verfährt ZU |
| -- | 0xXY | unbekannter Diagnose-Mode |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x020000 | Energiesparmode aktiv | 0 |
| 0x02FF00 | DM_Test_APP | 0 |
| 0x030100 | FH FAH, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030101 | FH FAH, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030102 | FH FAH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030103 | FH FAH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030105 | FH FAH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030106 | FH FAH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030107 | FH FAH, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03010A | FH FAH, Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03010B | FH FAH, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03010C | FH FAH, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03010D | FH FAH, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03010E | FH FAH, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03010F | FH FAH, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030110 | FH FAH, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030111 | FH FAH, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030112 | FH FAH: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030114 | FH FAH: Nullposition überfahren, Normierungsverlust | 0 |
| 0x030115 | FH FAH: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030116 | FH FAH: Motortemperatur 90% Schwelle überschritten | 0 |
| 0x030117 | FH FAH: Motorlauf wegen Übertemperatur unterbrochen | 0 |
| 0x030118 | FH FAH: Kein Motorstart wegen Überspannung/ Unterspannung | 0 |
| 0x030119 | FH_FAH: Kodierdaten fehlerhaft | 0 |
| 0x03011C | FH FAH: Keine Initialisierung aufgrund ungültiger Randbedingungen | 0 |
| 0x03011D | FH FAH: Abschaltung Hallvorsorgung wegen Überspannung | 0 |
| 0x03011E | FH FAH: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 0 |
| 0x030180 | FH BFH, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030181 | FH BFH, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030182 | FH BFH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030183 | FH BFH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030185 | FH BFH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030186 | FH BFH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030187 | FH BFH, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03018A | FH BFH, Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03018B | FH BFH, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03018C | FH BFH, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03018D | FH BFH, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03018E | FH BFH, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03018F | FH BFH, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030190 | FH BFH, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030191 | FH BFH, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030192 | FH BFH: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030194 | FH BFH: Nullposition überfahren, Normierungsverlust | 0 |
| 0x030195 | FH BFH: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030196 | FH BFH: Motortemperatur 90% Schwelle überschritten | 0 |
| 0x030197 | FH BFH: Motorlauf wegen Übertemperatur unterbrochen | 0 |
| 0x030198 | FH BFH: Kein Motorstart wegen Überspannung/ Unterspannung | 0 |
| 0x030199 | FH_BFH: Kodierdaten fehlerhaft | 0 |
| 0x03019C | FH BFH: Keine Initialisierung aufgrund ungültiger Randbedingungen | 0 |
| 0x03019D | FH BFH: Abschaltung Hallvorsorgung wegen Überspannung | 0 |
| 0x03019E | FH BFH: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 0 |
| 0x030340 | Schaltzentrum Lenksäule  (SZL): Interner Hardware-Fehler | 0 |
| 0x030341 | Schaltzentrum Lenksäule (SZL), Lenkstock Blinker: Unzulässiger Code  | 0 |
| 0x030342 | Schaltzentrum Lenksäule (SZL), Lenkstock Blinker: Unplausibles Signal BC/FLA-Taster | 0 |
| 0x030343 | Schaltzentrum Lenksäule (SZL), Lenkstock Blinker: Taster hängt (FAS/ BC/ FLA) | 0 |
| 0x030344 | Schaltzentrum Lenksäule (SZL), Lenkstock Wischer: Unzulässiger Code | 0 |
| 0x030345 | Schaltzentrum Lenksäule (SZL), Lenkstock Wischer: Intervall-Rändel defekt | 0 |
| 0x030346 | Schaltzentrum Lenksäule (SZL), Lenkstock Wischer: Taster Regensensor unplausibles Signal | 0 |
| 0x030347 | Schaltzentrum Lenksäule (SZL), Lenkstock Wischer: LED-Taster Regensensor hat Kurzschluss nach Masse | 0 |
| 0x030348 | Schaltzentrum Lenksäule (SZL), Lenkstock Wischer: Taster hängt (SWS,AIC) | 0 |
| 0x030349 | Schaltzentrum Lenksäule (SZL), Lenkradheizung: Taster hängt | 0 |
| 0x03034A | Schaltzentrum Lenksäule (SZL), Lenkradheizung: Taster nicht verbaut oder LED Leitungsunterbrechung | 0 |
| 0x03034B | Schaltzentrum Lenksäule (SZL), Lenkradheizung: LED Kurzschluss nach Masse | 0 |
| 0x03034C | Schaltzentrum Lenksäule (SZL), Hupe: Taster hängt | 0 |
| 0x03034D | K-LIN 16, Schaltzentrum Lenksäule (SZL): Kommunikationsfehler | 0 |
| 0x030350 | K-LIN_16 SZL: Fehlender LIN-Slave | 0 |
| 0x030351 | K-LIN_16 SZL: Falsche Variante | 0 |
| 0x030352 | K_LIN 16, Schaltzentrum Lenksäule (SZL): (ST_SZL_LIN) Alive-Zaehler-Fehler | 0 |
| 0x030401 | Multifunktions-Lenkrad(MFL): interner Fehler | 0 |
| 0x030402 | Multifunktions-Lenkrad(MFL): Schalterblock links defekt | 0 |
| 0x030403 | Multifunktions-Lenkrad(MFL): Schalterblock rechts defekt | 0 |
| 0x030404 | Multifunktions-Lenkrad(MFL): Tipprändel Widerspruch | 0 |
| 0x030405 | Multifunktions-Lenkrad(MFL): Rändel Widerspruch | 0 |
| 0x030406 | Multifunktions-Lenkrad(MFL): Wippe Widerspruch | 0 |
| 0x030410 | K-LIN_11 MFL: Fehlender LIN-Slave | 0 |
| 0x030411 | K-LIN_11 MFL: Falsche Variante | 0 |
| 0x030412 | K-LIN_11 MFL: nicht erwarteter LIN-Slave | 0 |
| 0x030413 | K_LIN_11 Bootschaft(ST_STW_LIN): Alive-Zaehler-Fehler | 0 |
| 0x030414 | K_LIN_11 Bootschaft(ST_STW_LIN): Pruefsummen-Fehler | 0 |
| 0x030480 | Lenkradelektronic (LRE), Lenkradheizung Last: interner Fehler | 0 |
| 0x030481 | Lenkradelektronic (LRE), Lenkradheizung NTC_Kontakt: interner Fehler | 0 |
| 0x030482 | Lenkradelektronic (LRE), Lenkradheizung Kurzschluss | 0 |
| 0x030483 | Lenkradelektronic (LRE), Lenkradheizung: interner Fehler | 0 |
| 0x030484 | Lenkradelektronik (LRE), Lenkradvibration: Spannung außerhalb gültigem Bereich | 0 |
| 0x030485 | Lenkradelektronik (LRE), Lenkradvibration: Zulässige Stromaufnahme überschritten | 0 |
| 0x030486 | Lenkradelektronik (LRE), Lenkradvibration: Übertemperatur | 0 |
| 0x030487 | Lenkradelektronik (LRE) Aktuator: Leitungsunterbrechung | 0 |
| 0x030488 | Lenkradelektronik (LRE) Aktuator:  Kurzschluss nach Masse | 0 |
| 0x030490 | K-LIN_11 LRE: Fehlender LIN-Slave | 0 |
| 0x030491 | K-LIN_11 LRE: Falsche Variante | 0 |
| 0x030492 | K-LIN_11 LRE: nicht erwarteter LIN-Slave | 0 |
| 0x030493 | Botschaft (CTR_VIB_STW): Alive-Zaehler-Fehler | 0 |
| 0x030494 | Botschaft (CTR_VIB_STW): Ausfall | 0 |
| 0x030495 | Botschaft (CTR_VIB_STW): Pruefsummen-Fehler | 0 |
| 0x802080 | Drucksensor: Kurzschluss nach Masse | 0 |
| 0x802081 | Drucksensor: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x802082 | Fondsschichtungspotentiometer: Kurzschluss nach Masse | 0 |
| 0x802083 | Fondsschichtungspotentiometer: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x802084 | Heckscheibenheizung, Relais: Kurzschluss nach Masse | 0 |
| 0x802085 | Heckscheibenheizung, Relais: Leitung zum Relais unterbrochen oder Kurzschluss nach Plus | 0 |
| 0x80208B | Scheinwerferreinigungsanlage (SRA): Kurzschluss nach Plus, Relaiskleber oder Leitung von Relais zur SRA unterbrochen | 0 |
| 0x80208C | Scheinwerferreinigungsanlage (SRA): Relais defekt oder Leitung zum Relais unterbrochen | 0 |
| 0x80208D | Heckwischer: Blockiert | 0 |
| 0x80208E | Heckwischer, Relais: Relais defekt oder Leitung zum Relais unterbrochen | 0 |
| 0x80208F | Heckwischer, Relais: Kurzschluss nach Plus, Relaiskleber oder Leitung vom Relais zum Heckwischer unterbrochen | 0 |
| 0x802090 | AUC-Sensor: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x802091 | AUC-Sensor: Kurzschluss nach Masse | 0 |
| 0x802092 | AUC-Sensor: Ungültiges PWM-Signal | 0 |
| 0x802093 | Kompressorventil: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x802094 | Kompressorventil: Kurzschluss nach Masse | 0 |
| 0x802095 | Zusatzwasserpumpe: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x802096 | Zusatzwasserpumpe: Kurzschluss nach Masse | 0 |
| 0x802097 | Wasserventil Fahrer: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x802098 | Wasserventil Fahrer: Kurzschluss nach Masse | 0 |
| 0x802099 | Waschwasser-Pumpe vorne: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80209A | Waschwasser-Pumpe vorne: Kurzschluss nach Masse | 0 |
| 0x80209B | Zentralverriegelung, Relais Entriegeln: Relais defekt oder Sicherung F14 offen | 0 |
| 0x80209C | Zentralverriegelung, Relais Entriegeln: Kurzschluss nach Plus oder Relaiskleber | 0 |
| 0x80209D | Zentralverriegelung, Relais Verriegeln: Relais defekt oder Sicherung F14 offen | 0 |
| 0x80209E | Zentralverriegelung, Relais Verriegeln: Kurzschluss nach Plus oder Relaiskleber | 0 |
| 0x80209F | Zentralverriegelung, Relais Sichern: Relais defekt oder Sicherung F15 offen | 0 |
| 0x8020A0 | Zentralverriegelung, Relais Sichern: Kurzschluss nach Plus oder Relaiskleber | 0 |
| 0x8020A1 | Zentralverriegelung, Relais Selektives Verriegeln Fahrer: Relais defekt oder Sicherung F15 offen | 0 |
| 0x8020A2 | Zentralverriegelung, Relais Selektives Verriegeln Fahrer: Kurzschluss nach Plus oder Relaiskleber | 0 |
| 0x8020A3 | DC-DC-Wandler_2: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020A4 | DC-DC-Wandler_2: Übertemperatur | 0 |
| 0x8020A5 | DC-DC-Wandler_2: Defekt | 0 |
| 0x8020A7 | Waschwasser-Pumpe hinten: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020A8 | Waschwasser-Pumpe hinten: Kurzschluss nach Masse | 0 |
| 0x8020A9 | Sonnenrollo, Heck: Leitungsunterbrechung | 0 |
| 0x8020AA | Sonnenrollo, Heck: Kurzschluss | 0 |
| 0x8020AB | Aussenspiegel, Heizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020AC | Aussenspiegel, Heizung: Kurzschluss nach Masse | 0 |
| 0x8020B3 | Zentralverriegelung, Antrieb Heckklappe: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020B4 | Zentralverriegelung, Antrieb Heckklappe: Kurzschluss nach Masse | 0 |
| 0x8020B5 | Zentralverriegelung, Antrieb Heckscheibe: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020B6 | Zentralverriegelung, Antrieb Heckscheibe: Kurzschluss nach Masse | 0 |
| 0x8020B7 | Tanksensor links: Kurzschluss nach Masse | 0 |
| 0x8020B8 | Tanksensor links: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8020B9 | Tanksensor links: Signal ungültig | 0 |
| 0x8020BA | Tanksensor rechts:  Kurzschluss nach Masse | 0 |
| 0x8020BB | Tanksensor rechts: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8020BC | Tanksensor rechts: Signal ungültig | 0 |
| 0x8020BD | Fensterheber Beifahrer vorne, Schalter: Kurzschluss nach Masse | 0 |
| 0x8020C1 | Fensterheber Beifahrer hinten, Schalter: Kurzschluss nach Masse | 0 |
| 0x8020C2 | Fensterheber Fahrer hinten, Schalter: Kurzschluss nach Masse | 0 |
| 0x8020C5 | Wasserventil Beifahrer: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8020C6 | Wasserventil Beifahrer: Kurzschluss nach Masse | 0 |
| 0x8020C7 | Kompressorkupplung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020C8 | Kompressorkupplung: Kurzschluss nach Masse | 0 |
| 0x8020C9 | Bistabiles Relais Front: Leitungsunterbrechung, KL30F nicht aktivierbar | 0 |
| 0x8020CA | Bistabiles Relais Front: Leitungsunterbrechung, KL30F nicht abschaltbar | 0 |
| 0x8020CB | Bistabiles Relais Heck, Leitungsunterbrechung, KL30F nicht aktivierbar | 0 |
| 0x8020CC | Bistabiles Relais Heck: Leitungsunterbrechung, KL30F nicht abschaltbar | 0 |
| 0x8020CD | Umschaltventil PHEV: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020CE | Umschaltventil PHEV: Kurzschluss nach Masse | 0 |
| 0x8020D0 | Sensorversorgungsspannung: Kurzschluss gegen Plus oder Unterbrechung | 0 |
| 0x8020D1 | Sensorversorgungsspannung: Kurzschluss gegen Minus | 0 |
| 0x8020D7 | Zentralverriegelung Heckscheibe Kontakt: Heckscheibe klemmt, Schloss defekt oder Kurzschluss nach Masse | 0 |
| 0x8020D8 | Zentralverriegelung Heckklappe Kontakt: Heckklappe klemmt, Schloss defekt oder Kurzschluss nach Masse | 0 |
| 0x8020D9 | Zentralverriegelung SCA Heck Kontakt:SCA und Heckklappe klemmt, Schloss defekt oder Kurzschluss nach Masse | 0 |
| 0x8020DA | Batteriesensor, WakeUp-Leitung (WUP): Kurzschluss Plus | 1 |
| 0x8020DB | Batteriesensor, WakeUp-Leitung (WUP): Kurzschluss nach Masse oder Leitungsunterbrechung | 1 |
| 0x8020DE | Batteriesensor: PWM-Signal ungültig | 1 |
| 0x8020E6 | Zündung ein: Startfähigkeit gefährdet | 1 |
| 0x8020E7 | Klemme 30B aktiv: Startfähigkeitsgrenze erreicht oder Kl. 30B lange Zeit aktiv | 1 |
| 0x8020E8 | Klemme 30F Reset/Abschaltung | 1 |
| 0x8020E9 | DC-DC-Wandler_1: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8020EA | DC-DC-Wandler_1: Übertemperatur | 0 |
| 0x8020EB | DC-DC-Wandler_1: Defekt | 0 |
| 0x802102 | Unterspannung erkannt | 1 |
| 0x802103 | Überspannung erkannt | 1 |
| 0x802104 | Kodierdaten: Modul nicht kodiert | 0 |
| 0x802105 | Kodierdaten: Abbruch der Transaktion | 0 |
| 0x802106 | Kodierdaten: Signaturfehler | 0 |
| 0x802107 | Kodierdaten: Prüfstempel stimmt nicht mit Fahrgestellnummer überein | 0 |
| 0x802108 | Kodierdaten: Abbruch aufgrund ungültiger Daten | 0 |
| 0x8021BD | Fensterheber Beifahrer vorne, Schalter: Schalter hängt | 0 |
| 0x8021C1 | Fensterheber Beifahrer hinten, Schalter: Schalter hängt | 0 |
| 0x8021C2 | Fensterheber Fahrer hinten, Schalter: Schalter hängt | 0 |
| 0x8021D1 | Klima-Abschaltventil Hybrid: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8021D2 | Klima-Abschaltventil Hybrid: Kurzschluss nach Masse | 0 |
| 0x8021D3 | Klemme 30F: kein Reset/Abschaltung da Fehler in Klemme-30B-Eingang | 1 |
| 0x8021D4 | Klemme 30F: kein Reset/Abschaltung da 'Steuerung Stromanforderung KL30_f' ungueltig/Timeout | 1 |
| 0x8021D5 | Koprozessor, falsche SW-Version | 1 |
| 0x8021D6 | Koprozessor, keine SW vorhanden | 1 |
| 0x8021E0 | Deaktivierung der Weckeingänge JBBF durch Wackelkontakt | 0 |
| 0xC90468 | Body-CAN Control Module Bus OFF | 1 |
| 0xC90BFF | DM_Test_COM | 0 |
| 0xC90C7E | K-LIN_3 Wischer: Carcode ungültig | 0 |
| 0xC90C7F | K-LIN_3 Wischer: Carcode nicht definiert | 0 |
| 0xC90C80 | K-LIN_3 Wischer: HW-Fehler erkannt | 0 |
| 0xC90C81 | K-LIN_3 Wischer: Blockierung erkannt | 1 |
| 0xC90C82 | K-LIN_3 Wischer: Überlast erkannt | 1 |
| 0xC90C85 | K-LIN_3 RLS: Hardwarefehler Regensensor | 0 |
| 0xC90C86 | K-LIN_3 RLS: keine opt. Initialisierung möglich | 0 |
| 0xC90C87 | K-LIN_3 RLS: Übertemperatur | 1 |
| 0xC90C89 | K-LIN_3 RLS: Hardwarefehler Lichtsensor | 0 |
| 0xC90C8A | K-LIN_3 RLS: Kalibrierungsfehler Lichtsensor | 0 |
| 0xC90C8B | K-LIN_3 RLS: Plausibilität Lichtsensor | 0 |
| 0xC90C8C | K-LIN_3 RLS: Plausibilität Solarsensor | 0 |
| 0xC90C8D | K-LIN_3 RLS: Fehler Beschlagsensor | 0 |
| 0xC90C93 | K-LIN_3 Innenspiegel: Interner Fehler (nur bis I-450) | 0 |
| 0xC90C94 | K-LIN_3 Innenspiegel: Elektrochrom Kurzschluss nach Plus | 0 |
| 0xC90C95 | K-LIN_3 Innenspiegel: Elektrochrom Kurzschluss nach Masse | 0 |
| 0xC90C96 | K-LIN_3 Innenspiegel: Elektrochrom Fehler | 0 |
| 0xC90C97 | K-LIN_3 Innenspiegel: Fehler in Licht Sensor Elektrochrom 1 | 0 |
| 0xC90C98 | K-LIN_3 Innenspiegel: Fehler in Licht Sensor Elektrochrom 2 | 0 |
| 0xC90C99 | K-LIN_3 Innenspiegel: Fehler in Sensor Magnetfeld | 0 |
| 0xC90C9A | K-LIN_3 Innenspiegel: Fehler in Kompass Anzeige | 0 |
| 0xC90C9B | K-LIN_3 Innenspiegel: ETC Kurzschluss nach Plus | 0 |
| 0xC90C9C | K-LIN_3 Innenspiegel: ETC Kurzschluss nach Masse | 0 |
| 0xC90C9D | K-LIN_3 RLS: Kodierdaten-Fehler, inkonsistenter Kodierindex | 0 |
| 0xC90C9E | K-LIN_3 RLS: Kodierdaten fehlen | 0 |
| 0xC90C9F | K-LIN_3 RLS: Falsche Variante verbaut, Beschlagsensor defekt oder Frontlichtsensor defekt | 0 |
| 0xC90CA0 | K-LIN_3 UGDO: Kodierdaten fehlen | 0 |
| 0xC90CA1 | K-LIN_3 UGDO: Kodierdaten fehlerhaft, JBBFE Checksum | 0 |
| 0xC90CA2 | K-LIN_3 UGDO: Kodierdaten fehlerhaft, UGDO Checksum | 0 |
| 0xC90CA3 | K-LIN_3 UGDO: Kodierung, Zeitueberschreitung | 0 |
| 0xC90CA4 | K-LIN_3 UGDO: Kodierung, ungueltige Adresse | 0 |
| 0xC90CA5 | K-LIN_3 UGDO: Kodierung, nicht durchführbar | 0 |
| 0xC90CA7 | K-LIN_3 Innenspiegel: Falsche Variante verbaut | 0 |
| 0xC90CA8 | K-LIN_3 Innenspiegel: Fehlender LIN-Slave | 0 |
| 0xC90CA9 | K-LIN_3 RLS: Fehlender LIN-Slave | 0 |
| 0xC90CAA | K-LIN_3 UGDO: Fehlender LIN-Slave | 0 |
| 0xC90CAB | K-LIN_3 Wischer: Fehlender LIN-Slave | 0 |
| 0xC90CAC | K-LIN_3 Innenspiegel: nicht erwarteter LIN-Slave | 0 |
| 0xC90CAD | K-LIN_3 RLS: nicht erwarteter LIN-Slave | 0 |
| 0xC90CAF | K-LIN_3 UGDO: nicht erwarteter LIN-Slave | 0 |
| 0xC90CB1 | K-LIN_3 UGDO: Falsche Variante verbaut | 0 |
| 0xC90CB2 | K-LIN_3 UGDO: Kodierung, ungueltiger Kodierindex | 0 |
| 0xC90CBE | K-LIN_5 Schalterblock Sitz-Mem/Massage BFH: Fehler im EEPROM | 0 |
| 0xC90CBF | K-LIN_5 Schalterblock Sitz-Mem/Massage BFH: Fehler Überlastung PWM | 0 |
| 0xC90CC3 | K-LIN_5 Sonnenrollo Beifahrer hinten: Kurzschluss | 0 |
| 0xC90CC4 | K-LIN_5 Sonnenrollo Beifahrer hinten: Leitungsunterbrechung | 0 |
| 0xC90CC5 | K-LIN_5 Sonnenrollo Beifahrer hinten: Interner Elektronikfehler | 0 |
| 0xC90CC7 | K-LIN_5 Schalterblock Sitz-Mem/Massage BFH: Schalter hängt | 0 |
| 0xC90CC8 | K-LIN_5 Sonnenrollo Beifahrer hinten: Schalter hängt | 0 |
| 0xC90CC9 | K-LIN_5 Schalterblock Sitz-Mem/Massage BFH: Falsche Variante verbaut | 0 |
| 0xC90CCA | K-LIN_5 Laderaumabdeckung: Fehlender LIN-Slave | 0 |
| 0xC90CCB | K-LIN_5 Schalterblock Sitz-Mem/Massage BFH: Fehlender LIN-Slave | 0 |
| 0xC90CCC | K-LIN_5 Sonnenrollo Beifahrer hinten: Fehlender LIN-Slave | 0 |
| 0xC90CCD | K-LIN_5 Laderaumabdeckung: nicht erwarteter LIN-Slave | 0 |
| 0xC90CCE | K-LIN_5 Schalterblock Sitz-Mem/Massage BFH: nicht erwarteter LIN-Slave | 0 |
| 0xC90CCF | K-LIN_5 Sonnenrollo Beifahrer hinten: nicht erwarteter LIN-Slave | 0 |
| 0xC90CD1 | K-LIN_5,7 Sonnenrollo Fahrer/Beifahrer hinten: Aussentemperatur zu gering | 0 |
| 0xC90CD2 | K-LIN_16 SZL: Fehlender LIN-Slave (nur bis F25 I250) | 0 |
| 0xC90CD3 | K-LIN_16 SZL: nicht erwarteter LIN-Slave (nur bis F25 I250) | 0 |
| 0xC90CD4 | K-LIN-5: F18 Sitzverstellschalter BF Fond: Fehlender LIN-Slave | 0 |
| 0xC90CD5 | K-LIN-5: F18 Sitzverstellschalter BF Fond: nicht erwarteter LIN-Slave | 0 |
| 0xC90CD6 | K-LIN-5: F18 Sitzverstellschalter BF Fond:  Ein Taster hängt | 1 |
| 0xC90CD7 | K-LIN-5 F18 Sitzverstellschalter BF Fond: EEPROM Fehler | 0 |
| 0xC90CD8 | K-LIN-5 F18 Sitzverstellschalter BF Fond: Überlastung der PWM Pins | 0 |
| 0xC90D3E | K-LIN_6 Schalter Sitzheizung hinten rechts: Fehler im EEPROM | 0 |
| 0xC90D3F | K-LIN_6 Schalter Sitzheizung hinten rechts: Überlastung PWM | 0 |
| 0xC90D41 | K-LIN_6 Sitzheizung BFH: Temperatursensor Lehne, Kurzschluss | 0 |
| 0xC90D42 | K-LIN_6 Sitzheizung BFH: Temperatursensor Lehne, Leitungsbruch | 0 |
| 0xC90D43 | K-LIN_6 Sitzheizung BFH: Temperatursensor Lehne, Unplausibles Signal | 0 |
| 0xC90D44 | K-LIN_6 Sitzheizung BFH: Temperatursensor Kissen, Kurzschluss | 0 |
| 0xC90D45 | K-LIN_6 Sitzheizung BFH: Temperatursensor Kissen, Leitungsbruch | 0 |
| 0xC90D46 | K-LIN_6 Sitzheizung BFH: Temperatursensor Kissen, Unplausibles Signal | 0 |
| 0xC90D47 | K-LIN_6 Sitzheizung BFH: Heizmatte Lehne, Kurzschluss nach Masse | 0 |
| 0xC90D48 | K-LIN_6 Sitzheizung BFH: Heizmatte Lehne, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D49 | K-LIN_6 Sitzheizung BFH: Heizmatte Kissen, Kurzschluss nach Masse | 0 |
| 0xC90D4A | K-LIN_6 Sitzheizung BFH: Heizmatte Kissen, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D4D | K-LIN_6 Sitzheizung BFH: Leiterplatte Temperatur, zu hoch | 0 |
| 0xC90D50 | K-LIN_6 Sitzheizung FAH: Temperatursensor Lehne, Kurzschluss | 0 |
| 0xC90D51 | K-LIN_6 Sitzheizung FAH: Temperatursensor Lehne, Leitungsbruch | 0 |
| 0xC90D52 | K-LIN_6 Sitzheizung FAH: Temperatursensor Lehne, Unplausibles Signal | 0 |
| 0xC90D53 | K-LIN_6 Sitzheizung FAH: Temperatursensor Kissen, Kurzschluss | 0 |
| 0xC90D54 | K-LIN_6 Sitzheizung FAH: Temperatursensor Kissen, Leitungsbruch | 0 |
| 0xC90D55 | K-LIN_6 Sitzheizung FAH: Temperatursensor Kissen, Unplausibles Signal | 0 |
| 0xC90D56 | K-LIN_6 Sitzheizung FAH: Heizmatte Lehne, Kurzschluss nach Masse | 0 |
| 0xC90D57 | K-LIN_6 Sitzheizung FAH: Heizmatte Lehne, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D58 | K-LIN_6 Sitzheizung FAH: Heizmatte Kissen, Kurzschluss nach Masse | 0 |
| 0xC90D59 | K-LIN_6 Sitzheizung FAH: Heizmatte Kissen, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D5C | K-LIN_6 Sitzheizung FAH: Leiterplatte Temperatur, zu hoch | 0 |
| 0xC90D60 | K-LIN_6 xAUC_Sensor: Interner Sensorfehler | 0 |
| 0xC90D71 | K-LIN_6 Sitzheizung BFH: Fehlender LIN-Slave | 0 |
| 0xC90D72 | K-LIN_6 Sitzheizung FAH: Fehlender LIN-Slave | 0 |
| 0xC90D73 | K-LIN_6 Schalter Sitzheizung hinten links: Fehlender LIN-Slave | 0 |
| 0xC90D74 | K-LIN_6 xAUC_Sensor: Fehlender LIN-Slave | 0 |
| 0xC90D76 | K-LIN_6 Sitzheizung BFH: Nicht erwarteter LIN-Slave | 0 |
| 0xC90D77 | K-LIN_6 Sitzheizung FAH: Nicht erwarteter LIN-Slave | 0 |
| 0xC90D78 | K-LIN_6 Schalter Sitzheizung hinten links: Nicht erwarteter LIN-Slave | 0 |
| 0xC90D79 | K-LIN_6 xAUC_Sensor: Nicht erwarteter LIN-Slave | 0 |
| 0xC90D7B | K-LIN_6 Schalter Sitzheizung hinten: Taster linke Seite klemmt | 0 |
| 0xC90D7C | K-LIN_6 Schalter Sitzheizung hinten: Taster rechte Seite klemmt | 0 |
| 0xC90D7F | K-LIN_6 Schalter Sitzheizung hinten links: Fehler im EEPROM | 0 |
| 0xC90D80 | K-LIN_6 Schalter Sitzheizung hinten links: Überlastung PWM | 0 |
| 0xC90D83 | K-LIN_6 Schalter Sitzheizung hinten rechts: Fehlender LIN-Slave | 0 |
| 0xC90D84 | K-LIN_6 Schalter Sitzheizung hinten rechts: Nicht erwarteter LIN-Slave | 0 |
| 0xC90D85 | K-LIN_6 Sitzheizung BF: Temperatursensor Lehne, Kurzschluss | 0 |
| 0xC90D86 | K-LIN_6 Sitzheizung BF: Temperatursensor Lehne, Leitungsbruch | 0 |
| 0xC90D87 | K-LIN_6 Sitzheizung BF: Temperatursensor Lehne, Unplausibles Signal | 0 |
| 0xC90D88 | K-LIN_6 Sitzheizung BF: Temperatursensor Kissen, Kurzschluss | 0 |
| 0xC90D89 | K-LIN_6 Sitzheizung BF: Temperatursensor Kissen, Leitungsbruch | 0 |
| 0xC90D8A | K-LIN_6 Sitzheizung BF: Temperatursensor Kissen, Unplausibles Signal | 0 |
| 0xC90D8B | K-LIN_6 Sitzheizung BF: Heizmatte Lehne, Kurzschluss nach Masse | 0 |
| 0xC90D8C | K-LIN_6 Sitzheizung BF: Heizmatte Lehne, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D8D | K-LIN_6 Sitzheizung BF: Heizmatte Kissen, Kurzschluss nach Masse | 0 |
| 0xC90D8E | K-LIN_6 Sitzheizung BF: Heizmatte Kissen, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D8F | K-LIN_6 Sitzheizung BF: Leiterplatte Temperatur, zu hoch | 0 |
| 0xC90D90 | K-LIN_6 Sitzheizung FA: Temperatursensor Lehne, Kurzschluss | 0 |
| 0xC90D91 | K-LIN_6 Sitzheizung FA: Temperatursensor Lehne, Leitungsbruch | 0 |
| 0xC90D92 | K-LIN_6 Sitzheizung FA: Temperatursensor Lehne, Unplausibles Signal | 0 |
| 0xC90D93 | K-LIN_6 Sitzheizung FA: Temperatursensor Kissen, Kurzschluss | 0 |
| 0xC90D94 | K-LIN_6 Sitzheizung FA: Temperatursensor Kissen, Leitungsbruch | 0 |
| 0xC90D95 | K-LIN_6 Sitzheizung FA: Temperatursensor Kissen, Unplausibles Signal | 0 |
| 0xC90D96 | K-LIN_6 Sitzheizung FA: Heizmatte Lehne, Kurzschluss nach Masse | 0 |
| 0xC90D97 | K-LIN_6 Sitzheizung FA: Heizmatte Lehne, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D98 | K-LIN_6 Sitzheizung FA: Heizmatte Kissen, Kurzschluss nach Masse | 0 |
| 0xC90D99 | K-LIN_6 Sitzheizung FA: Heizmatte Kissen, Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0xC90D9A | K-LIN_6 Sitzheizung FA: Leiterplatte Temperatur, zu hoch | 0 |
| 0xC90D9B | K-LIN_6 Sitzheizung BF: Fehlender LIN-Slave | 0 |
| 0xC90D9C | K-LIN_6 Sitzheizung FA: Fehlender LIN-Slave | 0 |
| 0xC90D9D | K-LIN_6 Sitzheizung BF: Nicht erwarteter LIN-Slave | 0 |
| 0xC90D9E | K-LIN_7 Schalterblock Sitz-Mem/Massage FAH: Fehler im EEPROM | 0 |
| 0xC90D9F | K-LIN_7 Schalterblock Sitz-Mem/Massage FAH: Fehler Überlastung PWM | 0 |
| 0xC90DA1 | K-LIN_7 Sonnenrollo Fahrer hinten: Kurzschluss | 0 |
| 0xC90DA2 | K-LIN_7 Sonnenrollo Fahrer hinten: Leitungsunterbrechung | 0 |
| 0xC90DA3 | K-LIN_7 Sonnenrollo Fahrer hinten: Interner Elektronikfehler | 0 |
| 0xC90DA5 | K-LIN_7 Schalterblock Sitz-Mem/Massage FAH: Schalter hängt | 0 |
| 0xC90DA6 | K-LIN_7 Sonnenrollo Fahrer hinten: Schalter hängt | 0 |
| 0xC90DA7 | K-LIN_7 Schalterblock Sitz-Mem/Massage FAH: Falsche Variante | 0 |
| 0xC90DA8 | K-LIN_7 Schalterblock Sitz-Mem/Massage FAH: Fehlender LIN-Slave | 0 |
| 0xC90DA9 | K-LIN_7 Sonnenrollo Fahrer hinten: Fehlender LIN-Slave | 0 |
| 0xC90DAA | K-LIN_7 Schalterblock Sitz-Mem/Massage FAH: Nicht erwarteter LIN-Slave | 0 |
| 0xC90DAB | K-LIN_7 Sonnenrollo Fahrer hinten: Nicht erwarteter LIN-Slave | 0 |
| 0xC90DAD | K-LIN_6 Sitzheizung FA: Nicht erwarteter LIN-Slave | 0 |
| 0xC90DAE | K-LIN_11 LRE: Fehlender LIN-Slave (nur bis F25 I250) | 0 |
| 0xC90DAF | K-LIN_11 LRE: nicht erwarteter LIN-Slave (nur bis F25 I250) | 0 |
| 0xC90DB0 | K-LIN_11 MFL: Fehlender LIN-Slave (nur bis F25 I250) | 0 |
| 0xC90DB1 | K-LIN_11 MFL: nicht erwarteter LIN-Slave (nur bis F25 I250) | 0 |
| 0xC90DB2 | K-LIN_16 SZL: Falsche Variante (nur bis F25 I250) | 0 |
| 0xC90DB3 | K-LIN_11 LRE: Falsche Variante (nur bis F25 I250) | 0 |
| 0xC90DB4 | K-LIN_6 Sitzheizung FAH: Relaiskleber oder Kurzschluss Ausgang | 0 |
| 0xC90DB5 | K-LIN_6 Sitzheizung FAH: interner Steuergerätefehler | 0 |
| 0xC90DB6 | K-LIN_6 Sitzheizung BFH: Relaiskleber oder Kurzschluss Ausgang | 0 |
| 0xC90DB7 | K-LIN_6 Sitzheizung BFH: interner Steuergerätefehler | 0 |
| 0xC90DB8 | K-LIN_6 Sitzheizung FA: Relaiskleber oder Kurzschluss Ausgang | 0 |
| 0xC90DB9 | K-LIN_6 Sitzheizung FA: interner Steuergerätefehler | 0 |
| 0xC90DBA | K-LIN_6 Sitzheizung BF: Relaiskleber oder Kurzschluss Ausgang | 0 |
| 0xC90DBB | K-LIN_6 Sitzheizung BF: interner Steuergerätefehler | 0 |
| 0xC90DBC | K-LIN_7 EMB: Fehlender LIN-Slave | 0 |
| 0xC90DBD | K-LIN_7 EMB: nicht erwarteter LIN-Slave | 0 |
| 0xC90DBE | K-LIN_7 Emblem: Schalter Endanschlag | 0 |
| 0xC90DBF | K-LIN_7 Emblem: Emblem blockiert | 0 |
| 0xC91402 | ID2BF Wasserventil Timeout | 1 |
| 0xC91404 | ID246 Statusklima Timeout | 1 |
| 0xC91405 | ID246 Kompressorventil Ungueltig | 1 |
| 0xC91406 | ID246 Heckscheizung Ungueltig | 1 |
| 0xC91407 | ID246 Zusatzwasserpumpe Ungueltig | 1 |
| 0xC91408 | ID2A6 Bedienung Wischer Timeout | 1 |
| 0xC9140B | ID1E7 Sitzheizung FA Ungueltig | 1 |
| 0xC9140C | ID1E8 Sitzheizung BF Ungueltig | 1 |
| 0xC9140D | ID12F Klemmen Timeout | 1 |
| 0xC9140E | ID246 Kompressor_Kupplung_Ungletig | 1 |
| 0xC91414 | ID2BF Wasserventil Ungueltig | 1 |
| 0xC91416 | ID26E Steuerung FHSHD Timeout | 1 |
| 0xC91417 | ID2A0 Steuerung Zentralverriegelung Timeout | 1 |
| 0xC91418 | ID24B Status Tursensoren Timeout | 1 |
| 0xC91420 | Koprozessor: Flashen aktiv | 0 |
| 0xC91421 | ID97 Status-Precrash-Master: Checksumme | 1 |
| 0xC91422 | ID97 Status-Precrash-Master: Timeout | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | U_batt_ende | V | - | unsigned int | - | 100 | 3605 | 0 |
| 0x1727 | Temp_Aussen, nur bis 09-03-410 | ºC | - | unsigned char | - | 1 | 2 | -40 |
| 0x4000 | Geschwindigkeit | km/h | - | unsigned int | - | 1 | 10 | 0 |
| 0x4001 | Zeitpunkt Motor aus | s | - | signed long | - | 1 | 1 | 0 |
| 0x4002 | KL15 Status_Energie_Powermanagement_Anfang | 0-n | - | 0xFF | PWMNG_ST | 1 | 1 | 0 |
| 0x4003 | KL30B Status_Energie_Powermanagement_Anfang | 0-n | - | 0xFF | PWMNG_ST | 1 | 1 | 0 |
| 0x4004 | KL30F Status_Energie_Powermanagement_Anfang | 0-n | - | 0xFF | PWMNG_ST | 1 | 1 | 0 |
| 0x4005 | Status_Energie_Powermanagement_Ende | 0-n | - | 0xFF | PWMNG_ST | 1 | 1 | 0 |
| 0x4006 | U_batt_Anfang | V | - | unsigned int | - | 100 | 3605 | 0 |
| 0x4009 | KL15 Dauer | 5 min | - | unsigned char | - | 1 | 1 | 0 |
| 0x400A | KL15 Anteil | % | - | unsigned char | - | 1 | 1 | 0 |
| 0x400B | CC-Meldung  Batterie stark entladen  empfangen | ja/nein | - | unsigned char | - | 1 | 1 | 0 |
| 0x400C | Verriegelungsstatus | 0-n | - | 0xFF | ZV_STATE | 1 | 1 | 0 |
| 0x400D | Schlüssels Im Innenraum erkannt | ja/nein | - | unsigned char | - | 1 | 1 | 0 |
| 0x400E | MSA Motor aus Phase | ja/nein | - | unisgned char | - | 1 | 1 | 0 |
| 0x400F | Dauer Klemme_30B_Aktivitat | 2 min | - | unsigned char | - | 1 | 1 | 0 |
| 0x4010 | Anzahl der Klemme 30B Anforderungen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x4011 | Letzte Fahrerinteraktionen 1 | 0-n | - | 0xFF | FH_AKT | 1 | 1 | 0 |
| 0x4012 | Ausfall des Telegramms Motordaten | ja/nein | - | unsigned char | - | 1 | 1 | 0 |
| 0x4013 | K30F Art der Abschaltung | 0-n | - | 0xFF | K30_D_TYPE | 1 | 1 | 0 |
| 0x4014 | K30F Grund der Abschaltung / Nichtabschaltung | 0-n | - | 0xFF | K30_D_REASON | 1 | 1 | 0 |
| 0x4015 | K30F Dauer Fehlverhalten | s | - | signed long | - | 1 | 1 | 0 |
| 0x4016 | KM bei Reset oder Abschaltung der KL30F | km | - | signed long | - | 1 | 1 | 0 |
| 0x4017 | Zeitpunkt der Abschaltung | s | - | signed long | - | 1 | 1 | 0 |
| 0x4018 | Letzte Fahrerinteraktionen 2 | 0-n | - | 0xFF | FH_AKT | 1 | 1 | 0 |
| 0x4019 | Letzte Fahrerinteraktionen 3 | 0-n | - | 0xFF | FH_AKT | 1 | 1 | 0 |
| 0x401A | Letzte Fahrerinteraktionen 4 | 0-n | - | 0xFF | FH_AKT | 1 | 1 | 0 |
| 0x401C | Temp_Aussen | ºC | - | unsigned char | - | 1 | 2 | -40 |
| 0x401D | SZL Interner HW Fehlerdetail | 0-n | - | 0xFF | SZL_HW_ERROR_LIST | 1 | 1 | 0 |
| 0x401E | SZL Blinker Taster haengt Fehlerdetail | 0-n | - | 0xFF | SZL_BLINKER_TASTER_LIST | 1 | 1 | 0 |
| 0x401F | SZL Wischer Taster haengt Fehlerdetail | 0-n | - | 0xFF | SZL_WISCHER_TASTER_LIST | 1 | 1 | 0 |
| 0x4020 | SZL kommunikationsfehlerdetail  | 0-n | - | 0xFF | SZL_COMMUNICATION_LIST | 1 | 1 | 0 |
| 0xFFFF | unbekannte Umweltbedingung | - | - | 0xFF | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x002001 | EEPROM, write failed | 0 |
| 0x002002 | EEPROM, read failed | 0 |
| 0x002003 | EEPROM, control failed | 0 |
| 0x002004 | EEPROM, erase failed | 0 |
| 0x002006 | EEPROM, write all failed | 0 |
| 0x002007 | EEPROM, read all failed | 0 |
| 0x002010 | EEPROM, wrong config id | 0 |
| 0x002020 | CSM Error | 0 |
| 0x002026 | DiagnoseMaster ResponseOnEvent Queue Full | 0 |
| 0x002027 | DiagnoseMaster ResponseOnEvent Queue Deleted | 0 |
| 0x002030 | DM Zeitbotschafttimeout | 1 |
| 0x002031 | VSM_EVENT_VEHICLESTATE | 0 |
| 0x002040 | PDC: Reset wegen Watchdog-Timeout | 0 |
| 0x002041 | ST30 Reset | 0 |
| 0x002042 | ST7 Reset | 0 |
| 0x002043 | ST7: Watchdog-Reset durch ST30 | 0 |
| 0x002044 | K-LIN_5: LIN Management desynchronization | 0 |
| 0x002045 | K-LIN_7: LIN Management desynchronization | 0 |
| 0x002046 | JBBF interner Fehler (Reset der Versorgung) | 0 |
| 0x002201 | FH FAH: Reversierung im Panik-Modus | 0 |
| 0x002202 | FH FAH: Reversierung im EM-Modus | 0 |
| 0x002204 | FH BFH: Reversierung im Panik-Modus | 0 |
| 0x002205 | FH BFH: Reversierung im EM-Modus | 0 |
| 0x002206 | FH BFH/FAH: Codierung Ungültig | 0 |
| 0x002207 | FH FAH: Motor ausgeschaltet aufgrund von CPU Überlast | 0 |
| 0x002208 | FH BFH: Motor ausgeschaltet aufgrund von CPU Überlast | 0 |
| 0x002210 | K-LIN_3 Innenspiegel: Interner Fehler | 0 |
| 0x002711 | Kodierdaten: Modul nicht kodiert (Nur bis I-450) | 0 |
| 0x002712 | Kodierdaten: Abbruch der Transaktion (Nur bis I-500) | 0 |
| 0x002713 | Kodierdaten: Signaturefehler (Nur bis I-500) | 0 |
| 0x002714 | Kodierdaten: Prüfstempel stimmt nicht mit Fahrgestellnummer überein (Nur bis I-500) | 0 |
| 0x002715 | Kodierdaten: Abbruch aufgrund ungültiger Daten (Nur bis I-500) | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1703 | CSM_ERROR_CODE, nur bis 09-03-410 | 0-n | - | 0xFF | CSM_ERRORS | 1 | 1 | 0 |
| 0x170C | U_batt_ende | V | - | unsigned int | - | 100 | 3605 | 0 |
| 0x1727 | Temp_Aussen, nur bis 09-03-410 | ºC | - | unsigned char | - | 1 | 2 | -40 |
| 0x4000 | Geschwindigkeit | km/h | - | unsigned int | - | 1 | 10 | 0 |
| 0x401B | CSM_ERROR_CODE | 0-n | - | 0xFF | CSM_ERRORS | 1 | 1 | 0 |
| 0x401C | Temp_Aussen | ºC | - | unsigned char | - | 1 | 2 | -40 |
| 0xFFFF | unbekannte Umweltbedingung | 0-n | - | 0xFF | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### K30_D_REASON

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Zuviele Wecker |
| 0x02 | Einschlafverhinderer |
| 0x03 | Erreichen der unteren Startfähigkeitsgrenze |
| 0x04 | Ruhestromproblem |
| 0x05 | Ausschaltverhinderer: Parklicht |
| 0x06 | Ausschaltverhinderer: Standlicht |
| 0x07 | Ausschaltverhinderer: Warnblinken |
| 0x08 | Ausschaltverhinderer: Klemme 30B defect |
| 0x09 | Ausschaltverhinderer: Klemme 30B aktiv |
| 0x0A | Ausschaltverhinderer: Licht an |
| 0x0B | Ausschaltverhinderer: Lichtstatus Timeout oder ungueltig |
| 0x0C | Ausschaltverhinderer: interner Fehler |
| 0x0D | Abschaltung Standzeit |
| 0x0E | Abschaltverhinderer  ECall  vorliegend |
| 0xXY | ungültiger Wert |

### K30_D_TYPE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | KL30F Reset |
| 0x02 | KL30F Off |
| 0x03 | KL30F Already Off |
| 0x04 | KL30F Conditions Not Correct |
| 0xFF | ungültiger Wert |

### PWMNG_ST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Abschalten der Kl30F |
| 0x02 | Keine Standverbraucher zulässig |
| 0x04 | Bordnetzzustand gut |
| 0x08 | Batterieladezustand 100% |
| 0xXY | Signal ungültig |

### RES_0XA179

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_VORGANG_FA_NR | - | - | + | 0-n | - | char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_INIT_VORGANG_BF_NR | - | - | + | 0-n | - | char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_INIT_VORGANG_FAH_NR | - | - | + | 0-n | - | char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_INIT_VORGANG_BFH_NR | - | - | + | 0-n | - | char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### RES_0XA17E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_MOTORSTOP_REASON_NR | - | - | + | 0-n | - | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |
| STAT_FH_BF_MOTORSTOP_REASON_NR | - | - | + | 0-n | - | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |
| STAT_FH_FAH_MOTORSTOP_REASON_NR | - | - | + | 0-n | - | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |
| STAT_FH_BFH_MOTORSTOP_REASON_NR | - | - | + | 0-n | - | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |

### RES_0XD074

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADHEIZUNG_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkradheizung ist AUS; 1: Lenkradheizung ist EIN |
| STAT_LENKRADHEIZUNG_LED_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkradheizung Status LED ist AUS; 1: Lenkradheizung Status LED ist EIN |
| STAT_LENKRADHEIZUNG_STROM_WERT | A | - | unsigned char | - | - | - | 10.0 | - | Stromaufnahme Lenkradheizung. Bereich: 0 - 25,4 Ampere |
| STAT_LENKRADHEIZUNG_AKTUATOR_STATUS_NR | 0-n | - | char | - | TAB_LIMIT | - | - | - | Zustand Aktuator Lenkradheizung |
| STAT_VORHANDEN_LENKRADHEIZUNG_EIN | 0/1 | - | char | - | - | - | - | - | 1: Lenkradheizung codiert |

### RES_0XD081

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LENKRAD_MFL_FGR_SET_EIN | 0/1 | - | char | - | - | - | - | - | 0: FGR-Taste SET nicht betätigt 1: FGR-Taste SET betätigt |
| STAT_TASTER_LENKRAD_MFL_FGR_TIPPRAENDEL_NR | 0-n | - | char | - | TAB_MFL_RAENDEL_FGR | - | - | - | 0: Keine Betätigung  1: Rändel auf Stufe 2 unten 2: Rändel auf Stufe 1 unten 3: Rändel auf Stufe 1 oben 4: Rändel auf Stufe 2 oben 5: ungültige Position |
| STAT_TASTER_LENKRAD_MFL_FGR_RES_EIN | 0/1 | - | char | - | - | - | - | - | 0: FGR-Taste RES (Wiederaufnahme) nicht betätigt  1: FGR-Taste RES (Wiederaufnahme) betätigt |
| STAT_TASTER_LENKRAD_MFL_UMSCHALT_TASTE_EIN | 0/1 | - | char | - | - | - | - | - | 0: Umschalttaste ACC/ DCC nicht betätigt  1: Umschalttaste ACC/ DCC betätigt |
| STAT_TASTER_LENKRAD_MFL_ACC_ABSTAND_EIN | 0/1 | - | char | - | - | - | - | - | 0: FGR-Taste ACC-Abstand nicht betätigt  1: FGR-Taste ACC-Abstand betätigt |
| STAT_TASTER_LENKRAD_MFL_FGR_OFF_EIN | 0/1 | - | char | - | - | - | - | - | 0: FGR-Taste OFF nicht betätigt 1: FGR-Taste OFF betätigt |
| STAT_TASTER_LENKRAD_MFL_PUSH_TO_TALK_EIN | 0/1 | - | char | - | - | - | - | - | 0: Push to talk nicht betätigt  1: Push to talk betätigt |
| STAT_TASTER_LENKRAD_MFL_MODE_TASTE | 0/1 | - | char | - | - | - | - | - | 0: Taste Source / Mode nicht betätigt 1: Taste Source / Mode betätigt |
| STAT_TASTER_LENKRAD_MFL_TIPPRAENDEL_BC_NR | 0-n | - | char | - | TAB_MFL_TIPPRAENDEL | - | - | - | 0: Tipprändel Bordcomputer (BC) nicht betätigt 1: Tipprändel Bordcomputer gedrückt  2: Tipprändel nach unten 3: Tipprändel nach oben 4: ungültige Position |
| STAT_TASTER_LENKRAD_MFL_TEL_EIN | 0/1 | - | char | - | - | - | - | - | 0: Telefontaste nicht betätigt  1: Telefontaste betätigt |
| STAT_TASTER_LENKRAD_MFL_VOL_MINUS_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taste Volume/Lautstärke minus nicht betätigt 1: Taste Volume/Lautstärke minus betätigt |
| STAT_TASTER_LENKRAD_MFL_VOL_PLUS_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taste Volume/Lautstärke plus nicht betätigt 1: Taste Volume/Lautstärke plus betätigt |
| STAT_TASTER_LENKRAD_MFL1_NR | 0-n | - | char | - | TAB_MFL_TASTEN1 | - | - | - | VS-Result 0: keine Aktion 1-n: siehe Sub-Tabelle TAB_MFL_TASTEN1 Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen. |
| STAT_TASTER_LENKRAD_MFL2_NR | 0-n | - | char | - | TAB_MFL_TASTEN2 | - | - | - | VS-Result 0: keine Aktion 1-n: siehe Sub-Tabelle TAB_MFL_TASTEN2 Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen. |

### RES_0XD08B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_ABGLEICH_MITTEN_FREQUENZ_WERT | Hz | - | unsigned char | - | - | 0.1 | - | 37.3 | Gelesene Mittenfrequenz des LRE LIN Slaves. |

### RES_0XD163

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_STUFE1_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | LED:  0 = AUS,  1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_STUFE2_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | LED:  0 = AUS,  1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_STUFE3_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | LED:  0 = AUS,  1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_RECHTS_NR | - | - | - | 0-n | - | int | - | TAB_SITZHEIZUNG_LED | - | - | - | 0 = LEDs aus,  1 = eine LED ein,  2 = zwei LEDs ein,  3 = drei LEDs ein,  255 = LEDs nicht vorhanden |

### RES_0XD164

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_STUFE1_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | LED:  0 = AUS,  1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_STUFE2_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | LED:  0 = AUS,  1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_STUFE3_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | LED:  0 = AUS,  1 = EIN |
| STAT_LED_SITZHEIZUNG_HINTEN_LINKS_NR | - | - | - | 0-n | - | int | - | TAB_SITZHEIZUNG_LED | - | - | - | 0 = LEDs aus,  1 = eine LED ein,  2 = zwei LEDs ein,  3 = drei LEDs ein,  255 = LEDs nicht vorhanden |

### RES_0XD184

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_MAX_POSITION_WERT | Ink | - | int | - | - | - | - | - | Position Fensterheber Fahrer hinten, nur bei eingelerntem FH 0: Fenster ungueltiger Zustand >1: Fenster im gueltigen Zustand (max. Wert bei Fenster geschlossen) Max: <Ist im Kommentar anzugeben> |
| STAT_FH_FAH_POSITION_WERT | Ink | - | int | - | - | - | - | - | Position Fensterheber Fahrer hinten, nur bei eingelerntem FH 0: Fenster ungueltiger Zustand >1: Fenster im gueltigen Zustand (max. Wert bei Fenster geschlossen) Max: <Ist im Kommentar anzugeben> |

### RES_0XD187

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_MAX_POSITION_WERT | Ink | - | int | - | - | - | - | - | Position Fensterheber Beifahrer hinten, nur bei eingelerntem FH 0: Fenster ungueltiger Zustand >1: Fenster im gueltigen Zustand (max. Wert bei Fenster geschlossen) Max: >>Ist im Kommentar anzugeben !!!<< |
| STAT_FH_BFH_POSITION_WERT | Ink | - | int | - | - | - | - | - | Position Fensterheber Beifahrer hinten, nur bei eingelerntem FH 0: Fenster ungueltiger Zustand >1: Fenster im gueltigen Zustand (max. Wert bei Fenster geschlossen) Max: >>Ist im Kommentar anzugeben !!!<< |

### RES_0XD189

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_TASTERBF_BF_AUF | 0/1 | - | char | - | - | - | - | - | Beifahrerseite (lokaler Taster): Fensterheber Beifahrerseite auf (Fenster oeffnen) 0: Taster nicht gedrueckt 1: Taster gedrueckt |
| STAT_FH_TASTERBF_BF_ZU | 0/1 | - | char | - | - | - | - | - | Beifahrerseite (lokaler Taster): Fensterheber Beifahrerseite zu (Fenster schliessen) 0: Taster nicht gezogen 1: Taster gezogen |
| STAT_FH_TASTERBF_BF_MAUT_AUF | 0/1 | - | char | - | - | - | - | - | Beifahrerseite (lokaler Taster): Fensterheber Beifahrerseite Maut auf (Fenster oeffnen) 0: Taster nicht gedrueckt 1: Taster gedrueckt |
| STAT_FH_TASTERBF_BF_MAUT_ZU | 0/1 | - | char | - | - | - | - | - | Beifahrerseite (lokaler Taster): Fensterheber Beifahrerseite Maut zu (Fenster komplett schliessen) 0: Taster nicht gezogen 1: Taster gezogen |
| STAT_FH_TASTERBF_BF_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Beifahrerseite (lokaler Taster):  Fensterheber Beifahrerseite 0: Taster nicht gedrueckt 1: Fenster oeffnen 2: Fenster schliessen 3: Fenster Maut oeffnen 4: Fenster Maut schliessen |

### RES_0XD18A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_TASTERFAH_FAH_AUF | 0/1 | - | char | - | - | - | - | - | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten auf (Fenster oeffnen) 0: Taster nicht gedrueckt 1: Taster gedrueckt |
| STAT_FH_TASTERFAH_FAH_ZU | 0/1 | - | char | - | - | - | - | - | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten zu (Fenster schliessen) 0: Taster nicht gezogen 1: Taster gezogen |
| STAT_FH_TASTERFAH_FAH_MAUT_AUF | 0/1 | - | char | - | - | - | - | - | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten Maut auf (Fenster komplett oeffnen) 0: Taster nicht gedrueckt 1: Taster gedrueckt |
| STAT_FH_TASTERFAH_FAH_MAUT_ZU | 0/1 | - | char | - | - | - | - | - | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten Maut zu (Fenster komplett schliessen) 0: Taster nicht gezogen 1: Taster gezogen |
| STAT_FH_TASTERFAH_FAH_NR | 0-n | - | char | - | - | - | - | - | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten 0: Taster nicht gedrueckt 1: Fenster oeffnen 2: Fenster schliessen 3: Fenster Maut oeffnen 4: Fenster Maut schliessen |

### RES_0XD18B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_TASTERBFH_BFH_AUF | 0/1 | - | char | - | - | - | - | - | Beifahrerseite hinten (lokaler Taster): Fensterheber Beifahrerseite auf (Fenster oeffnen) 0: Taster nicht gedrueckt 1: Taster gedrueckt |
| STAT_FH_TASTERBFH_BFH_ZU | 0/1 | - | char | - | - | - | - | - | Beifahrerseite hinten (lokaler Taster): Fensterheber Beifahrerseite zu (Fenster schliessen) 0: Taster nicht gezogen 1: Taster gezogen |
| STAT_FH_TASTERBFH_BFH_MAUT_AUF | 0/1 | - | char | - | - | - | - | - | Beifahrerseite hinten (lokaler Taster): Fensterheber Beifahrerseite Maut auf (Fenster oeffnen) 0: Taster nicht gedrueckt 1: Taster gedrueckt |
| STAT_FH_TASTERBFH_BFH_MAUT_ZU | 0/1 | - | char | - | - | - | - | - | Beifahrerseite hinten (lokaler Taster): Fensterheber Beifahrerseite Maut zu (Fenster komplett schliessen) 0: Taster nicht gezogen 1: Taster gezogen |
| STAT_FH_TASTERBFH_BFH_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Beifahrerseite hinten (lokaler Taster):  Fensterheber Beifahrerseite 0: Taster nicht gedrueckt 1: Fenster oeffnen 2: Fenster schliessen 3: Fenster Maut oeffnen 4: Fenster Maut schliessen |

### RES_0XD298

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | - | - | - | 0/1 | - | char | - | - | - | - | - | 0: Hupe nicht aktiv 1: Hupe aktiv |

### RES_0XD30A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_BLOCK_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | Heckscheibe: Sonnenrollo Heckscheibe komplett ausgefahren;  0= Endpostion nicht erreicht;  1= Endposition erreicht |
| STAT_ROLLO_HECK_MOTOR_AKTIV | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Motor Sonnenrollo Heckscheibe inaktiv;  1= Motor Sonnenrollo Heckscheibe aktiv |

### RES_0XD311

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_TASTERFAH_BFH_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | lokaler Taster FAH für Seitenrollo Beifahrerseite;  0= Taster nicht gedrückt;  1= Taster gedrückt |
| STAT_ROLLO_TASTERFAH_FAH_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | lokaler Taster FAH für Seitenrollo Fahrerseite;  0= Taster nicht gedrückt;  1= Taster gedrückt |
| STAT_ROLLO_TASTERFAH_HECK_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | lokaler Taster FAH für Heckrollo;  0= Taster nicht gedrückt;  1= Taster gedrückt |

### RES_0XD312

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_MOTOR_FAH_BLOCK_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Motor Sonnenrollo nicht im Block;  1= Motor Sonnenrollo im Block |
| STAT_ROLLO_MOTOR_FAH_AKTIV | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Motor Sonnenrollo Fahrer hinten inaktiv;  1= Motor Sonnenrollo Fahrer hinten aktiv |
| STAT_ROLLO_MOTOR_FAH_ERROR | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Sonnenrollo Fahrer nicht im Fehlerbetrieb bei offener Scheibe;  1= Sonnenrollo Fahrer im Fehlerbetrieb bei offener Scheibe |

### RES_0XD314

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_TASTERBFH_BFH_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | lokaler Taster BFH für Seitenrollo Beifahrerseite;  0= Taster nicht gedrückt;  1= Taster gedrückt |
| STAT_ROLLO_TASTERBFH_FAH_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | lokaler Taster BFH für Seitenrollo Fahrerseite;  0= Taster nicht gedrückt;  1= Taster gedrückt |
| STAT_ROLLO_TASTERBFH_HECK_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | lokaler Taster BFH für Heckrollo;  0= Taster nicht gedrückt;  1= Taster gedrückt |

### RES_0XD315

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_MOTOR_BFH_BLOCK_EIN | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Motor Sonnenrollo nicht im Block;  1= Motor Sonnenrollo im Block |
| STAT_ROLLO_MOTOR_BFH_AKTIV | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Motor Sonnenrollo Fahrer hinten inaktiv;  1= Motor Sonnenrollo Fahrer hinten aktiv |
| STAT_ROLLO_MOTOR_BFH_ERROR | - | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Sonnenrollo Fahrer nicht im Fehlerbetrieb bei offener Scheibe;  1= Sonnenrollo Fahrer im Fehlerbetrieb bei offener Scheibe |

### RES_0XD32D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HEIZUNG_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | 0: Spiegelheizung ausgeschalten 1: Spiegelheizung eingeschalten |
| STAT_SPIEGEL_HEIZUNG_WERT | - | - | - | % | - | int | - | - | - | - | - | Aktueller Wert der Spiegelheizung in % (0 .. 100%) |

### RES_0XD32F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSENSPIEGEL_ABBLEND_WERT | - | - | - | % | - | int | - | - | - | - | - | Angabe des Abblendgrades in % 0 ... 100 % |

### RES_0XD33D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UGDO_LAND_NR | 0-n | - | char | - | TAB_UGDO_LAND | - | - | - | Eingestelltes Land |

### RES_0XD33E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UGDO_MODE_BR | 0-n | - | char | - | TAB_UGDO_MODE | - | - | - | Mode des UGDO |

### RES_0XD344

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMPASS_SPIEGEL_MAGNET_ZONE_NR | 0-n | - | int | - | TAB_MAGNETZONE | - | - | - | Ausgabe Magnetzone  Auflistung siehe Tabelle TAB_MAGNETZONE |

### RES_0XD345

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMPASS_SPIEGEL_SPRACHE_NR | - | - | - | 0-n | - | unsigned char | - | TAB_KOMPASS_SPRACHE | - | - | - | Spracheinstellung Auflistung siehe Tabelle TAB_KOMPASS_SPRACHE 0: Englisch  1: Deutsch |

### RES_0XD352

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHERPUMPE_HINTEN_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | Liefert den Zustand der Ansteuerung der vorderen Wascherpumpe:  0= Ansteuerung hintere Wascherpumpe nicht aktiv;  1= Ansteuerung hintere Wascherpumpe aktiv |

### RES_0XD355

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_RSK_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | Gibt an, ob der Frontscheibenwischer in Park-Position ist.  0= Frontscheibenwischer nicht in Park-Position;  1= Frontscheibenwischer in Park-Position |

### RES_0XD356

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKWISCHER_RSK_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | Gibt an, ob der Heckscheibenwischer in Park-Position ist:  0= Heckscheibenwischer nicht in Park-Position;  1= Heckscheibenwischer in Park-Position |

### RES_0XD35B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_WISCHER_TASTER_AXIAL_EIN | 0-n | - | char | - | TAB_LENKSTOCK_WISCHER_AXIAL_TASTER | - | - | - | 0= Lenkstock Wischer Taster axial nicht betätigt; 1= Lenkstock Wischer Taster axial betätigt |
| STAT_LENKSTOCK_WISCHER_FRONTWASCHEN | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Frontwaschen;  1= Lenkstock Wischer in Stellung Frontwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWASCHEN | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Heckwaschen;  1= Lenkstock Wischer in Stellung Heckwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWISCHEN | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Heckwischen;  1= Lenkstock Wischer in Stellung Heckwischen |
| STAT_LENKSTOCK_WISCHER_POS_INTERVALL | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Intervall; 1= Lenkstock Wischer in Stellung Intervall |
| STAT_LENKSTOCK_WISCHER_NULLSTELLUNG | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht Nullstellung;  1= Lenkstock Wischer Nullstellung;  Hinweis: Bei einem Schalter entspricht die Nullstellung der Stufe Aus, bei einem Taster entspricht die Nullstellung der Mittelstellung |
| STAT_LENKSTOCK_WISCHER_POS_1 | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Position 1;  1= Lenkstock Wischer in Position 1 |
| STAT_LENKSTOCK_WISCHER_POS_2 | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Position 2;  1= Lenkstock Wischer in Position 2 |
| STAT_LENKSTOCK_WISCHER_RAENDEL_NR | 0-n | - | char | - | TAB_WISCHER_RAENDEL | - | - | - | VS-Result Lenkstock Wischer;  0= Wischer Rändelrad Stufe 1;  1= Wischer Rändelrad Stufe 2;  2= Wischer Rändelrad Stufe 3;  3= Wischer Rändelrad Stufe 4;  4= Wischer Rändelrad ungültige Position; Hinweis: Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen |
| STAT_LENKSTOCK_WISCHER_TIPPWISCHEN | 0/1 | - | char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Tippwischen;  1= Lenkstock Wischer in Stellung Tippwischen |
| STAT_LENKSTOCK_WISCHER_NR | 0-n | - | char | - | TAB_LENKSTOCK_WISCHER | - | - | - | VS-Result Lenkstock Wischer; Siehe Sub-Tabelle |

### RES_0XD35C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHERPUMPE_VORNE_AKTIV | - | - | - | 0/1 | - | int | - | - | - | - | - | 0: Wascherpumpe vorne nicht aktiv  1: Wascherpumpe vorne aktiv |

### RES_0XD362

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_MONTAGE_EIN | 0/1 | - | int | - | - | - | - | - | 0: Frontscheibenwischer nicht in Montage-Position  1: Frontscheibenwischer in Montage-Position |

### RES_0XD363

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_MONTAGE_EIN | 0/1 | - | int | - | - | - | - | - | 0: Frontscheibenwischer nicht in Service-Position  1: Frontscheibenwischer in Service-Position |

### RES_0XD376

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGEN1_WERT | Digit | - | int | - | - | - | - | - | Wert Regenstrecke 1: Direkt nach Initialisierung bei trockener, sauberer Scheibe muessen mindestens 2 Regenstrecken den Wert 1200±50 aufweisen. Der Werte für die 3. Regenstrecke muss groesser als 850 sein. |
| STAT_REGEN2_WERT | Digit | - | int | - | - | - | - | - | Wert Regenstrecke 2: Direkt nach Initialisierung bei trockener, sauberer Scheibe muessen mindestens 2 Regenstrecken den Wert 1200±50 aufweisen. Der Werte für die 3. Regenstrecke muss groesser als 850 sein. |
| STAT_REGEN3_WERT | Digit | - | int | - | - | - | - | - | Wert Regenstrecke 3:              Direkt nach Initialisierung bei trockener, sauberer Scheibe muessen mindestens 2 Regenstrecken den Wert 1200±50 aufweisen. Der Werte für die 3. Regenstrecke muss groesser als 850 sein. |

### RES_0XD399

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_AKTUATOR_WERT | mA | - | unsigned char | - | - | - | - | - | Status TLC Aktuator Stromwert |
| STAT_TLC_AKTUATOR_STATUS_NR | 0-n | - | unsigned char | - | TAB_TLC_STATUS | - | - | - | Aktueller Zustand TLC |
| STAT_TLC_AKTUATOR_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 0: TLC nicht aktiv 1: TLC aktiv |
| STAT_TLC_AKTUATOR_HW_LEITUNG_WERT | V | - | unsigned char | - | - | - | 10.0 | - | Status Spannungswert Hardwareleitung |

### RES_0XD3A3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMBLEM_MOTOR_NR | 0-n | - | int | 0x03 | TAB_LIN_EMBLEM_MOTOR | - | - | - | Status Motor des Emblems |
| STAT_EMBLEM_RICHTUNG_NR | 0-n | - | int | 0x0C | TAB_LIN_EMBLEM_RICHTUNG | - | - | - | Status Richtung Motor Emblem |
| STAT_EMBLEM_ENDANSCHLAG | 0-n | - | int | 0x30 | TAB_LIN_EMBLEM_ENDANSCHLAG | - | - | - | Status Endschlag Motor Emblem |
| STAT_EMBLEM_BLOCKIERUNG_NR | 0-n | - | int | 0xC0 | TAB_LIN_EMBLEM_FEHLER | - | - | - | Status Blockierung Emblem |
| STAT_EMBLEM_ENDANSCHLAG_FEHLER_NR | 0-n | - | int | 0x0300 | TAB_LIN_EMBLEM_FEHLER_1 | - | - | - | Status Fehler Endanschlag |
| STAT_EMBLEM_UNTERSPANNUNG_NR | 0-n | - | int | 0x0C00 | TAB_LIN_EMBLEM_FEHLER_2 | - | - | - | Status Unterspannung |
| STAT_EMBLEM_UEBERSPANNUNG_NR | 0-n | - | int | 0x3000 | TAB_LIN_EMBLEM_FEHLER_3 | - | - | - | Status Überspannung |

### RES_0XD3BE

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTLICHT_WERT | - | - | - | Digits | - | int | - | - | - | - | - | ungefilterter Frontlichtwert Liegt zwischen 0 und 255 |
| STAT_FRONTLICHT_GEMITTELT_WERT | - | - | - | Digits | - | int | - | - | - | - | - | gemittelter Frontlichtwert.  Liegt zwischen 0 und 255 |
| STAT_UMGEBUNGSLICHT_WERT | - | - | - | Digits | - | int | - | - | - | - | - | ungefiltetes Umgebungslicht.  Bereich 0 bis 255 |
| STAT_UMGEBUNGSLICHT_GEMITTELT_WERT | - | - | - | Digits | - | int | - | - | - | - | - | gemittelter Wert Umgebungslicht.  Bereich 0 bis 255 |

### RES_0XD582

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_LINKS_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp links; 1: Lenkstock Blinker in Stellung Blinker links |
| STAT_LENKSTOCK_BLINKER_LINKS_DAUER_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer links; 1: Lenkstock Blinker in Stellung Blinker Dauer links |
| STAT_LENKSTOCK_BLINKER_RECHTS_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp rechts; 1: Lenkstock Blinker in Stellung Blinker rechts |
| STAT_LENKSTOCK_BLINKER_RECHTS_DAUER_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer rechts; 1: Lenkstock Blinker in Stellung Blinker Dauer rechts |
| STAT_LENKSTOCK_BLINKER_NULLSTELLUNG_EIN | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Nullstellung; 1: Lenkstock Blinker in Nullstellung |
| STAT_LENKSTOCK_BLINKER_NR | 0-n | - | char | - | TAB_LENKSTOCK_BLINKER | - | - | - | Auflistung siehe Sub-Tabelle |

### RES_0XD583

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_FERNLICHT_BETAETIGT | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker Taster Fernlicht nicht betätigt; 1: Lenkstock Blinker Taster Fernlicht nicht betätigt |
| STAT_LENKSTOCK_BLINKER_LICHTHUPE_BETAETIGT | 0/1 | - | char | - | - | - | - | - | 0: Lenkstock Blinker Taster Lichthupe nicht betätigt; 1: Lenkstock Blinker Taster Lichthupe betätigt |

### RES_0XD59B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMASSAGE_HINTEN_FA_LED_1_EIN | 0/1 | - | char | - | - | - | - | - | 0: LED 1 aus 1: LED 1 ein |
| STAT_SITZMASSAGE_HINTEN_FA_LED_2_EIN | 0/1 | - | char | - | - | - | - | - | 0: LED 2 aus 1: LED 2 ein |

### RES_0XD59D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMASSAGE_HINTEN_BF_LED_1_EIN | 0/1 | - | char | - | - | - | - | - | 0: LED 1 aus 1: LED 1 ein |
| STAT_SITZMASSAGE_HINTEN_BF_LED_2_EIN | 0/1 | - | char | - | - | - | - | - | 0: LED 2 aus 1: LED 2 ein |

### RES_0XD5A7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMEMORY_HINTEN_FA_TASTER_M_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_HINTEN_FA_TASTER_1_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_HINTEN_FA_TASTER_2_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taster nicht betätigt 1: Taster betätigt |

### RES_0XD5A8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMEMORY_HINTEN_BF_TASTER_M_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_HINTEN_BF_TASTER_1_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_HINTEN_BF_TASTER_2_EIN | 0/1 | - | char | - | - | - | - | - | 0: Taster nicht betätigt 1: Taster betätigt |

### RES_0XD72A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe der Sitzheizung auf der Beifahrerseite |

### RES_0XD72F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_TEMP_KISSEN_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_TEMP_BF_LEHNE_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Lehne   GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD730

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_BF_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BF_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BF_TIMEOUT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD732

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_TEMP_KISSEN_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_FA_TEMP_LEHNE_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD737

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | - | - | - | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe auf der Fahrerseite |

### RES_0XD771

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FA_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FA_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FA_TIMEOUT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD793

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZ_FERNB_BF_LAENGE_VORWAERTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Längsverstellung Sitz Beifahrer nach vorne  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_LAENGE_RUECKWAERTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Längsverstellung Sitz Beifahrer nach hinten  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_LEHNENNEIGUNG_VORWAERTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Lehnenneigung Sitz Beifahrer nach vorne  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_LEHNENNEIGUNG_RUECKWAERTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Lehenneigung Sitz Beifahrer nach hinten  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_HOEHE_AUF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Höhenverstellung Sitz Beifahrer nach oben  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_HOEHE_AB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Höhenverstellung Sitz Beifahrer nach unten  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_KOPFSTUETZE_AUF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Verstellung Kopfstütze Sitz Beifahrer nach oben  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_KOPFSTUETZE_AB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Taster Verstellung Kopfstütze Sitz Beifahrer nach unten  0: nicht betätigt  1: betätigt |

### RES_0XD7AA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe auf der Beifahrerseite hinten |

### RES_0XD7B0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_TEMP_KISSEN_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_TEMP_BFH_LEHNE_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD7EA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FAH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FAH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FAH_TIMEOUT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7EB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe auf der Fahrerseite hinten |

### RES_0XD7EC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_BFH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BFH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BFH_TIMEOUT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7F1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_TEMP_KISSEN_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_FAH_TEMP_LEHNE_WERT | °C | - | int | - | - | - | - | - | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD89E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASSERVENTIL_LI_PWM_WERT | % | - | int | - | - | - | - | - | PWM-Wert Wasserventil links in Prozent (0 .. 100%) |
| STAT_WASSERVENTIL_RE_PWM_WERT | % | - | int | - | - | - | - | - | PWM-Wert Wasserventil rechts in Prozent (0 .. 100%) |

### RES_0XD903

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSATZWASSERPUMPE_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | Zusatzwasserpumpenstatus:  0 = AUS,  1 = EIN |

### RES_0XD906

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMAKOMPRESSOR_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | Klimakompressor:  0 = AUS,  1 = EIN |
| STAT_KLIMAKOMPRESSOR_PWM_WERT | - | - | - | % | - | int | - | - | - | - | - | Klimakompressor:  PWM-Signal in Prozent |

### RES_0XD95A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_WASSERVENTIL_MONO | - | - | - | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden,  1=vorhanden |
| STAT_VORHANDEN_WASSERVENTIL_DUO | - | - | - | 0/1 | - | int | - | - | - | - | - | 0=nicht vorhanden,  1=vorhanden |

### RES_0XD961

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLARSENSOR_LINKS_WERT | - | - | - | W/m² | - | int | - | - | - | - | - | Solarsensor, Solarwert.  Bereich 0 bis 1020 W/m2 |
| STAT_SOLARSENSOR_RECHTS_WERT | - | - | - | W/m² | - | int | - | - | - | - | - | Gibt den Wert vom Solarsensor aus. Bereich 0 bis 1020 W/m2 |

### RES_0XD969

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CO2_SENSOR_DRUCK_WERT | - | - | - | bar | - | int | - | - | - | - | - | Gibt den Druck des CO2-Sensors aus. 0 ... 200 bar |
| STAT_CO2_SENSOR_TEMP_WERT | - | - | - | Grad Celsius | - | int | - | - | - | 5 | -10 | Gibt die Temperatur des CO2-Sensors aus. -40 ... 200 °C |

### RES_0XD96C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BESCHLAGSENSOR_WERT | - | - | - | % | - | int | - | - | - | - | - | Angabe der relativen Feuchte in Prozent  0 ... 100 % |
| STAT_BESCHLAGSENSOR_TEMP_WERT | - | - | - | °C | - | char | - | - | - | - | - | Gemessene Temperatur in °C -40 ... 85 °C |

### RES_0XD970

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSCHEIBENHEIZUNG_EIN | - | - | - | 0/1 | - | int | - | - | - | - | - | Heckscheibenheizung:  0 = AUS,  1 = EIN |

### RES_0XD971

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMPRESSOR_KUPPLUNG_EIN | - | - | - | 0/1 | - | char | - | - | - | - | - | 0: Kompressorkupplung offen 1: Kompressorkupplung geschlossen |

### RES_0XD979

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_KAELTEABSPERRVENTIL_EIN | 0/1 | - | char | - | - | - | - | - | 0: Ventil offen / unbestromt 1: Ventil geschlossen / bestromt |

### RES_0XDA50

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_POWERMODUL_HINTEN_TIMER_KLEMME_R_WERT | s | - | int | - | - | - | - | - | Zeit in 10 Sekunden-Schritten bis Abschaltung nach Klemme R |
| STAT_RELAIS_POWERMODUL_HINTEN_EIN | 0/1 | - | char | - | - | - | - | - | 0: Relais Powermodul (Klemme 30F) hinten ausgeschalten; 1: Relais Powermodul (Klemme 30F) hinten eingeschalten; |
| STAT_RELAIS_POWERMODUL_HINTEN_TIMER_STANDVERBRAUCHER_WERT | s | - | int | - | - | - | - | - | Angabe der Zeit in 10 Sekunden-Schritten bis Abschaltung Standverbraucher |

### RES_0XDA52

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_POWERMODUL_VORNE_TIMER_KLEMME_R_WERT | - | - | - | s | - | int | - | - | - | - | - | Zeit in 10 Sekunden-Schritten bis Abschaltung nach Klemme R |
| STAT_RELAIS_POWERMODUL_VORNE_EIN | - | - | - | 0/1 | - | char | - | - | - | - | - | 0: Relais Powermodul (Klemme 30F) vorne ausgeschalten; 1: Relais Powermodul (Klemme 30F) vorne eingeschalten; |
| STAT_RELAIS_POWERMODUL_VORNE_TIMER_STANDVERBRAUCHER_WERT | - | - | - | s | - | int | - | - | - | - | - | Angabe der Zeit in 10 Sekunden-Schritten bis Abschaltung Standverbraucher |

### RES_0XDA7D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_AUSSEN_HECKKLAPPE_EIN | 0/1 | - | int | - | - | - | - | - | Status Taster Heckklappe aussen 0: Nicht gedrückt 1: Gedrückt |

### RES_0XDA80

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKSCHEIBE_EIN | 0/1 | - | int | - | - | - | - | - | Status Taster Heckscheibe 0: Nicht gedrückt 1: Gedrückt |

### RES_0XDA81

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_BF_ENTRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer nicht entriegelt 1: Schloss Beifahrertuer entriegelt |
| STAT_ZV_BF_VERRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer nicht verriegelt 1: Schloss Beifahrertuer verriegelt |
| STAT_ZV_BF_GESICHERT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer nicht gesichert 1: Schloss Beifahrertuer gesichert |
| STAT_ZV_CRASH_MODE_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Crashmode nicht aktiv 1: Crashmode aktiv |

### RES_0XDA82

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_BFH_ENTRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer hinten nicht entriegelt 1: Schloss Beifahrertuer hinten entriegelt |
| STAT_ZV_BFH_VERRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer hinten nicht verriegelt 1: Schloss Beifahrertuer hinten verriegelt |
| STAT_ZV_BFH_GESICHERT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Beifahrertuer hinten nicht gesichert 1: Schloss Beifahrertuer hinten gesichert |
| STAT_ZV_CRASH_MODE_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Crashmode nicht aktiv 1: Crashmode aktiv |

### RES_0XDA83

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FA_ENTRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer nicht entriegelt 1: Schloss Fahrertuer entriegelt |
| STAT_ZV_FA_VERRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer nicht verriegelt 1: Schloss Fahrertuer verriegelt |
| STAT_ZV_FA_GESICHERT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer nicht gesichert 1: Schloss Fahrertuer gesichert |
| STAT_ZV_CRASH_MODE_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Crashmode nicht aktiv 1: Crashmode aktiv |

### RES_0XDA84

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FAH_ENTRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer hinten nicht entriegelt 1: Schloss Fahrertuer hinten entriegelt |
| STAT_ZV_FAH_VERRIEGELT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer hinten nicht verriegelt 1: Schloss Fahrertuer hinten verriegelt |
| STAT_ZV_FAH_GESICHERT | 0/1 | - | char | - | - | - | - | - | 0: Schloss Fahrertuer hinten nicht gesichert 1: Schloss Fahrertuer hinten gesichert |
| STAT_ZV_CRASH_MODE_AKTIV | 0/1 | - | char | - | - | - | - | - | 0: Crashmode nicht aktiv 1: Crashmode aktiv |

### RES_0XDA86

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HECKSCHEIBE_ENTRIEGELT | - | - | - | 0/1 | - | int | - | - | - | - | - | 0: Schloss Heckscheibe nicht entriegelt;  1: Schloss Heckscheibe entriegelt |
| STAT_ZV_HECKSCHEIBE_VERRIEGELT | - | - | - | 0/1 | - | int | - | - | - | - | - | 0: Schloss Heckscheibe nicht verriegelt  1: Schloss Heckscheibe verriegelt |

### RES_0XDA87

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FA_NR | 0-n | - | char | - | TAB_ZV_STATUS | - | - | - | - |
| STAT_ZV_BF_NR | 0-n | - | char | - | TAB_ZV_STATUS | - | - | - | - |
| STAT_ZV_FAH_NR | 0-n | - | char | - | TAB_ZV_STATUS | - | - | - | - |
| STAT_ZV_BFH_NR | 0-n | - | char | - | TAB_ZV_STATUS | - | - | - | - |
| STAT_ZV_HECKKLAPPE_NR | 0-n | - | char | - | TAB_ZV_STATUS | - | - | - | - |
| STAT_ZV_HECKSCHEIBE_NR | 0-n | - | char | - | TAB_ZV_STATUS | - | - | - | - |

### RES_0XDABB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ZEIT_STUNDEN | 0-n | - | unsigned char | - | - | - | - | - | Stunden: 0 - 23; 253 entspricht '--'; 254 Keine Angabe: 255 Signal ungültig |
| STAT_BUS_IN_ZEIT_MINUTEN | 0-n | - | unsigned char | - | - | - | - | - | Minuten: 0 - 59; 253 entspricht '--'; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_TAG | 0-n | - | unsigned char | - | - | - | - | - | Tag: 1 - 31 |
| STAT_BUS_IN_DATUM_MONAT | 0-n | - | unsigned char | - | - | - | - | - | Monat: 1 - 12 |
| STAT_BUS_IN_DATUM_JAHR | 0-n | - | unsigned int | - | - | - | - | - | Jahr: 1 - 65534 |
| STAT_BUS_IN_ZEIT_RELATIV_WERT | - | - | unsigned long | - | - | - | - | - | Aktuelles Relative Zeit in Sekunden seit 01.01.2000, Sekuden: 0 - 4,2 Millarden |
| STAT_BUS_IN_ZEIT_TAGE_RELATIV_WERT | - | - | unsigned int | - | - | - | - | - | Aktuelles Relative gesehene Tage seit 01.01.2000; Tage: 1 entspricht 01.01.2000 |

### RES_0XDABD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_RADDREHZAHL_HL_WERT | U/s | - | long | - | - | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit vom DSC (hinten links). CAN Geschwindigkeit HL |
| STAT_BUS_IN_RADDREHZAHL_HR_WERT | U/s | - | long | - | - | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit vom DSC (hinten rechts). CAN Geschwindigkeit HR |
| STAT_BUS_IN_RADDREHZAHL_VL_WERT | U/s | - | long | - | - | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit vom DSC (vorne links). CAN Geschwindigkeit VL |
| STAT_BUS_IN_RADDREHZAHL_VR_WERT | U/s | - | long | - | - | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit vom DSC (vorne rechts). CAN Geschwindigkeit VR |
| STAT_BUS_IN_GESCHW_WERT | km/h | - | int | - | - | - | 10 | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit vom DSC. CAN-Signal Geschwindigkeit vom DSC |
| STAT_BUS_IN_GESCHW_STATUS | 0-n | - | unsigned char | - | - | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit-Status vom DSC. 0 Fahrzeug steht; 1 Fahrzeug fährt vorwärts; 2 Fahrzeug fährt rückwärts; 3 Fahrzeug fährt; 7 ungültig / kein Signal |
| STAT_BUS_IN_BREMSPEDAL | 0-n | - | unsigned char | - | - | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Status Bremspedal vom DSC. 0 Nicht betätigt; 1 Betätigt; 2 Plausibilitätsfehler (Druck / Bremslichtschalter); 3 Signal ungültig / unplausibel |

### RES_0XDABF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_FH_FT | 0-n | - | unsigned char | - | - | - | - | - | CAN-Signal Status Fensterheber Fahrertür, 0 Geschlossen; 1 Wischenstellung; 2 Offen; 3 Signal ungültig / unplausibel |
| STAT_BUS_IN_FH_BFT | 0-n | - | unsigned char | - | - | - | - | - | CAN-Signal Status Fensterheber Beifahrertür, 0 Geschlossen; 1 Wischenstellung; 2 Offen; 3 Signal ungültig / unplausibel |
| STAT_BUS_IN_FH_FTH | 0-n | - | unsigned char | - | - | - | - | - | CAN-Signal Status Fensterheber fahrertür hinten, 0 Geschlossen; 1 Wischenstellung; 2 Offen; 3 Signal ungültig / unplausibel |
| STAT_BUS_IN_FH_BFTH | 0-n | - | unsigned char | - | - | - | - | - | CAN-Signal Status Fensterheber Beifahrertür hinten, 0 Geschlossen; 1 Wischenstellung; 2 Offen; 3 Signal ungültig / unplausibel |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FH_DENORMIEREN | 0xA177 | - | Denormierung der Fenster ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!!  0x11: FH Fahrer  0x12: FH Beifahrer  0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: Alle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA177 | - |
| FH_VERFAHREN | 0xA178 | - | Ansteuerung der Fensterheber (ELEMENT;AKTION;ZEIT in s) Argumente siehe Tabelle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA178 | - |
| FH_EINLERNEN | 0xA179 | - | Steuernaufruf zum Einlernen der Fensterheber ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!!  0x11: FH Fahrer  0x12: FH Beifahrer   0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: Alle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA179 | RES_0xA179 |
| FH_VERFAHREN_HALL | 0xA17E | - | Verfahren des Fensters auf eine Hall-Position | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17E | RES_0xA17E |
| REGENSENSOR_INITIALISIERUNG | 0xA3B7 | - | Startet Neuadaption des RLS an der Windschutzscheibe. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LENKRADHEIZUNG_LED | 0xD071 | - | 0: LED AUS  1: LED EIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD071 | - |
| LENKRADHEIZUNG_TASTER | 0xD073 | STAT_TASTER_LENKRADHEIZUNG_EIN | 0: Taster Lenkradheizung nicht betätigt 1: Taster Lenkradheizung betätigt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| LENKRADHEIZUNG | 0xD074 | - | Stati Lenkradheizung (Aktiv, LED und analoger Wert) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD074 | RES_0xD074 |
| LENKRAD_MFL | 0xD081 | - | Status der MFL-Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD081 |
| SITZHEIZUNG_HINTEN_TASTER_LINKS | 0xD161 | STAT_TASTER_SITZHEIZUNG_HINTEN_LINKS_EIN | 1: Taster Sitzheizung Hinten links betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_RECHTS | 0xD162 | STAT_TASTER_SITZHEIZUNG_HINTEN_RECHTS_EIN | 1: Taster Sitzheizung Hinten rechts betätigt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_LED_RECHTS | 0xD163 | - | Status LED-Anzeige Sitzheizung hinten rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD163 |
| SITZHEIZUNG_HINTEN_LED_LINKS | 0xD164 | - | Status LED-Anzeige Sitzheizung hinten links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD164 |
| FH_FAH_INIT | 0xD172 | STAT_FH_FAH_INIT | 1: FH Fahrer hinten eingelernt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_BFH_INIT | 0xD173 | STAT_FH_BFH_INIT | 1: FH Beifahrer hinten eingelernt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_BFH_GESCHLOSSEN | 0xD177 | STAT_FH_BFH_GESCHLOSSEN | 1: FH Beifahrer hinten komplett geschlossen | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_BFH_FAEHRT_AUF | 0xD178 | STAT_FH_BFH_FAEHRT_AUF | 1: FH Beifahrer hinten oeffnet | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_FAH_OFFEN | 0xD182 | STAT_FH_FAH_OFFEN_KOMPLETT | 1: Fenster Fahrer hinten komplett offen | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_BFH_FAEHRT_ZU | 0xD183 | STAT_FH_BFH_FAEHRT_ZU | 1: FH Beifahrer hinten schliesst | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_FAH_POSITION | 0xD184 | - | aktuelle und maximale Position des FH (in eingelerntem Zustand) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD184 |
| FH_BFH_OFFEN | 0xD185 | STAT_FH_BFH_OFFEN_KOMPLETT | 1: FH Beifahrer hinten komplett offen | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_BFH_EINLERNENVORGANG | 0xD186 | STAT_FH_BFH_EINLERNENVORGANG_AKTIV | Status FH Beifahrer hinten Einlernvorgang | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_BFH_POSITION | 0xD187 | - | aktuelle und maximale Position des FH (in eingelerntem Zustand) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD187 |
| FH_TASTER_BEIFAHRER | 0xD189 | - | Status: Lokaler Taster Fensterheber Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD189 |
| FH_TASTER_FAHRER_HINTEN | 0xD18A | - | Status: Lokaler Taster Fensterheber  Fahrerhinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD18A |
| FH_TASTER_BEIFAHRER_HINTEN | 0xD18B | - | Status: Lokaler Taster Fensterheber Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD18B |
| FH_KURZHUB_AKTIV | 0xD18F | STAT_KURZHUB_AKTIV | Kurzhub rahmenlose Scheibe aktiv | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_FAH_FAEHRT_AUF | 0xD190 | STAT_FH_FAH_FAEHRT_AUF | 1: FH Fahrer hinten oeffnet | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_FAH_GESCHLOSSEN | 0xD197 | STAT_FH_FAH_GESCHLOSSEN | 1: FH Fahrer komplett geschlossen | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_FAH_FAEHRT_ZU | 0xD198 | STAT_FH_FAH_FAEHRT_ZU | 1: FH Fahrer hinten schliesst | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_FAH_EINLERNENVORGANG | 0xD199 | STAT_FH_FAH_EINLERNENVORGANG_AKTIV | Status FH Fahrer hinten Einlernvorgang | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| FH_KURZHUB_DEAKTIVIEREN | 0xD19F | - | Kurzhub rahmenlose Scheibe aktivieren / deaktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD19F | - |
| TANK_FUELLSTAND_LINKS | 0xD258 | STAT_FUELLSTAND_TANK_LI_WERT | Füllstand des Tanksensors  (50 Ohm ... 1000 Ohm) | - | - | - | int | - | - | - | - | - | 22 | - | - |
| TANK_FUELLSTAND_RECHTS | 0xD259 | STAT_FUELLSTAND_TANK_RE_WERT | Füllstand des Tanksensors  (50 Ohm ... 1000 Ohm) | - | - | - | int | - | - | - | - | - | 22 | - | - |
| HUPE_TASTER | 0xD297 | STAT_TASTER_HUPE_EIN | Liefert den Zustand des Tasters der Hupe | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| HUPE | 0xD298 | - | Status / Steuern Hupe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD298 | RES_0xD298 |
| ROLLO_HECK_MOTOR | 0xD30A | - | Status / Steuern Heckrollo | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30A | RES_0xD30A |
| ROLLO_HECK_VORHANDEN | 0xD310 | STAT_VORHANDEN_HECKROLLO_EIN | 1: Sonnenrollo Heck verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| ROLLO_FAH_TASTER | 0xD311 | - | Status lokaler Taster Fahrertür für die seitlichen Sonnenrollos bzw. Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD311 |
| ROLLO_FAH_MOTOR | 0xD312 | - | Status / Steuern Seitenrollo Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD312 | RES_0xD312 |
| ROLLO_BFH_TASTER | 0xD314 | - | Status lokaler Taster Beifahrertür für die seitlichen Sonnenrollos bzw. Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD314 |
| ROLLO_BFH_MOTOR | 0xD315 | - | Status / Steuern Seitenrollo Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD315 | RES_0xD315 |
| ROLLO_TUEREN_VORHANDEN | 0xD317 | STAT_VORHANDEN_SEITENROLLO_EIN | 1: Seitliche Rollos Fahrer hinten und Beifahrer hinten verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| AUSSENSPIEGEL_HEIZUNG | 0xD32D | - | Status / Steuern Heizung Aussenspiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32D | RES_0xD32D |
| AUSSENSPIEGEL_HEIZUNG_VERBAUT | 0xD32E | STAT_VORHANDEN_SPIEGEL_HEIZUNG_EIN | 1: Beheizbare Aussenspiegel verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| EC_SPIEGEL_ABBLENDEN | 0xD32F | - | Status / Steuern Innenspiegel (EC-Spiegel) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32F | RES_0xD32F |
| EC_SPIEGEL_VORHANDEN | 0xD330 | STAT_VORHANDEN_EC_SPIEGEL | EC-Spiegel verbaut?  1: Ja/ 2: Nein | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| UGDO_VORHANDEN | 0xD33A | STAT_VORHANDEN_UGDO | UGDO verbaut? (UGDO: Universal Garage Door Opener) 1: Ja /  2: Nein. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| UGDO_LAND | 0xD33D | - | Status / Steuern Land im UGDO | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD33D | RES_0xD33D |
| UGDO_MODE | 0xD33E | - | Status / Steuern Mode des UGDO | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD33E | RES_0xD33E |
| KOMPASS_SPIEGEL_VORHANDEN | 0xD343 | STAT_KOMPASS_SPIEGEL_VORHANDEN_EIN | Kompass-Spiegel verbaut?  1:Ja /  2:Nein | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| KOMPASS_SPIEGEL_MAGNET | 0xD344 | - | Status / Steuern Magnetzone Spiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD344 | RES_0xD344 |
| KOMPASS_SPIEGEL_SPRACHE | 0xD345 | - | Status / Steuern Sprache Kompass 0: Englisch  1: Deutsch | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD345 | RES_0xD345 |
| KOMPASS_SPIEGEL_LENKUNG | 0xD346 | STAT_KOMPASS_SPIEGEL_LENKUNG_NR | 0: Rechtslenker  1: Linkslenker | 0-n | - | - | unsigned char | TAB_KOMPASS_LENKUNG | - | - | - | - | 22 | - | - |
| WISCHER_FRONT_MOTOR | 0xD351 | STAT_MOTOR_FRONTWISCHER_EIN | Status Motor Frontscheibenwischers. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| WASCHERPUMPE_HINTEN | 0xD352 | - | Status / Steuern Waschwasserpumpe hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD352 | RES_0xD352 |
| WISCHER_HECK_MOTOR | 0xD353 | STAT_MOTOR_HECKWISCHER_EIN | Liefert den Zustand der Ansteuerung des Heckscheibenwischers. 1:  Heckscheibenwischers ein. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SRA_RELAIS | 0xD354 | STAT_RELAIS_SRA_EIN | Liefert den Zustand des Relais der Scheinwerferreinigungsanlage. 1: SRA aktiv | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| WISCHER_FRONT_RSK | 0xD355 | - | Status / Steuern Park-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD355 | RES_0xD355 |
| WISCHER_HECK_RSK | 0xD356 | - | Status / Steuern Parkposition Heckscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD356 | RES_0xD356 |
| WASCHWASSERSTAND | 0xD357 | STAT_WASCHWASSERSTAND_EIN | 1: Befüllungszustand des Waschwasserbehälters ausreichend. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| WISCHER_HECK_VORHANDEN | 0xD358 | STAT_VORHANDEN_HECKWISCHER_EIN | 1: Gibt an, ob der Heckscheibenwischer codiert ist. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SRA_VORHANDEN | 0xD359 | STAT_VORHANDEN_SRA | 1: Gibt an, ob die Scheinwerferreinigungsanlage codiert ist. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| LENKSTOCK_WISCHER | 0xD35B | - | Liefert den Zustand der einzelnen Wischerschalter am Lenkstock | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD35B |
| WASCHWASSER_VORNE | 0xD35C | - | Status / Steuern Waschwasserpumpe vorne | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD35C | RES_0xD35C |
| WISCHER_FRONT | 0xD35D | - | Ansteuerung Scheibenwischers vorne | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35D | - |
| WISCHER_FRONT_LIN | 0xD35E | STAT_VORHANDEN_LIN_FRONTWISCHER_EIN | 1: Gibt an, ob der Frontwischer ein LIN-Modul ist. | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| WISCHER_HECK | 0xD35F | - | Ansteuerung Scheibenwischers hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35F | - |
| SRA | 0xD360 | - | Ansteuerung Scheinwerferreinigungsanlage | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD360 | - |
| LENKSTOCK_WISCHER_RLS_LED | 0xD361 | - | Steuern LED Regensensor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD361 | - |
| WISCHER_FRONT_MONTAGE | 0xD362 | - | Status / Steuern Montage-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD362 | RES_0xD362 |
| WISCHER_FRONT_SERVICE | 0xD363 | - | Status / Steuern Service-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD363 | RES_0xD363 |
| REGENSENSOR_VORHANDEN | 0xD373 | STAT_VORHANDEN_REGENSENSOR_EIN | 1: Regenlichtsensor verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| REGENSENSOR_WERT_REGENSTRECKE | 0xD376 | - | Gibt den Status der Regenstrecken zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD376 |
| RFK_EMBLEM | 0xD3A3 | - | Status / Steuern Emblem in der Heckklappe | bit | - | - | BITFIELD | RES_0xD3A3 | - | - | - | - | 22 | - | - |
| RFK_EMBLEM_VERFAHREN | 0xD3A4 | - | Verfahren des Emblems | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A4 | - |
| FAHRLICHTSENSOR | 0xD3BE | - | Liest die Werte des Fahrlichtsensors aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3BE |
| LENKSTOCK_BLINKER_TASTER_FLA | 0xD580 | STAT_LENKSTOCK_BLINKER_TASTER_FLA_EIN | 0: Lenkstock Blinker axialer Taster Fernlichtassistent nicht betätigt; 1: Lenkstock Blinker axialer Taster Fernlichtassistent betätigt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| LENKSTOCK_BLINKER_TASTER_BC | 0xD581 | STAT_LENKSTOCK_BLINKER_TASTER_BC_EIN | 0: Lenkstock Blinker axialer Taster Bordcomputer nicht betätigt;  1: Lenkstock Blinker axialer Taster Bordcomputer betätigt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| LENKSTOCK_BLINKER_FRA | 0xD582 | - | Status Taster Fahrrichtungsanzeiger. Resultbeschreibung in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD582 |
| LENKSTOCK_BLINKER_LICHTHUPE_FERNLICHT | 0xD583 | - | Status Lichthupe / Fernlicht. Resultbeschreibung in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD583 |
| SITZMASSAGE_HINTEN_BEDIENEINHEIT | 0xD59A | STAT_MASSAGESITZ_HINTEN_TASTER_VORHANDEN | 1: Bedienschalter Sitzmassage hinten vorhanden | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZMASSAGE_HINTEN_FA_LED | 0xD59B | - | Status / Steuern LED's Sitzmassage hinten Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD59B | RES_0xD59B |
| SITZMASSAGE_HINTEN_FA_TASTER | 0xD59C | STAT_SITZMASSAGE_HINTEN_FA_TASTER_EIN | 1: Taster Sitzmassage hinten Fahrer betätigt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZMASSAGE_HINTEN_BF_LED | 0xD59D | - | Status / Steuern LED's Sitzmassage hinten Beifahrer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD59D | RES_0xD59D |
| SITZMASSAGE_HINTEN_BF_TASTER | 0xD59E | STAT_SITZMASSAGE_HINTEN_BF_TASTER_EIN | 1: Taster Sitzmassagehinten Fahrer betätigt | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZMEMORY_HINTEN_BEDIENEINHEIT | 0xD5A6 | STAT_SITZMEMORY_TASTER_HINTEN_VORHANDEN | 1: Bedieneinheit Sitzmemory vorhanden | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZMEMORY_HINTEN_FA_TASTER | 0xD5A7 | - | Status Taster Sitzmemory hinten Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5A7 |
| SITZMEMORY_HINTEN_BF_TASTER | 0xD5A8 | - | Status Taster Sitzmemory hinten Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5A8 |
| KUEHLMITTELSTAND | 0xD672 | STAT_KUEHLMITTELSTAND_EIN | 1: Kühlmittelbehälter ausreichend befüllt | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_FA_VORHANDEN | 0xD726 | STAT_SITZHEIZUNG_FA_VORHANDEN | 1: Sitzheizung Fahrer codiert | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_BF_VORHANDEN | 0xD727 | STAT_SITZHEIZUNG_BF_VORHANDEN | 1: Sitzheizung Beifahrer codiert | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_FAH_VORHANDEN | 0xD728 | STAT_SITZHEIZUNG_FAH_VORHANDEN | 1: Sitzheizung Fahrer hinten codiert | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_BFH_VORHANDEN | 0xD729 | STAT_SITZHEIZUNG_BFH_VORHANDEN | 1: Sitzheizung Beifahrer hinten codiert | 0/1 | - | - | char | - | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_BF_STUFE | 0xD72A | - | Status / Steuern Stufe Sitzheizung Beifahrerseite | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD72A | RES_0xD72A |
| SITZHEIZUNG_BF_TEMP | 0xD72F | - | Status / Steuern Temperatur Sitzheizung Beifahrer  (0ºC ... 85 °C) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD72F | RES_0xD72F |
| SITZHEIZUNG_BF | 0xD730 | - | Betriebszustand Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD730 |
| SITZHEIZUNG_FA_TEMP | 0xD732 | - | Status / Steuern Temperatur Sitzheizung Fahrer (0ºC ... 85°C) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD732 | RES_0xD732 |
| SITZHEIZUNG_FA_STUFE | 0xD737 | - | Status / Steuern Stufe Sitzheizung Fahrer. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD737 | RES_0xD737 |
| BUS_IN_SITZHEIZUNG_STUFE_FAH | 0xD76F | STAT_BUS_IN_SITZHEIZUNG_FAH_NR | Businformation Stufe Sitzheizung Fahrer | 0-n | - | - | unsigned char | TAB_SITZHEIZUNG_STUFE | - | - | - | - | 22 | - | - |
| BUS_IN_SITZHEIZUNG_STUFE_BFH | 0xD770 | STAT_BUS_IN_SITZHEIZUNG_BFH_NR | Businformation Stufe Sitzheizung Beifahrer hinten | 0-n | - | - | unsigned char | TAB_SITZHEIZUNG_STUFE | - | - | - | - | 22 | - | - |
| SITZHEIZUNG_FA | 0xD771 | - | Betriebszustand Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD771 |
| SITZ_SCHALTER_FERNB_BFS | 0xD793 | - | Status / Steuern Sitzverstellschalter Fernbedienung für Beifahrerseite Nur für F01(F18) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD793 |
| SITZ_SCHALTER_FERNB_BFS_LED | 0xD794 | - | Ansteuerung LED Sitzverstellschalter Fernbedienung für Beifahrerseite Nur für F01(F18) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD794 | - |
| SITZHEIZUNG_BFH_STUFE | 0xD7AA | - | Statusabfrage der Sitzheizung auf der Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7AA | RES_0xD7AA |
| SITZHEIZUNG_BFH_TEMP | 0xD7B0 | - | Status / Steuern Temperatur Sitzheizung Beifahrer hinten (0ºC ... 85°C) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7B0 | RES_0xD7B0 |
| SITZHEIZUNG_FAH | 0xD7EA | - | Betriebszustand Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EA |
| SITZHEIZUNG_FAH_STUFE | 0xD7EB | - | Status / Steuern Stufe Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7EB | RES_0xD7EB |
| SITZHEIZUNG_BFH | 0xD7EC | - | Betriebszustand Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EC |
| SITZHEIZUNG_FAH_TEMP | 0xD7F1 | - | Status / Steuern Temperatur Sitzheizung Fahrer hinten (0ºC ... 85°C) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7F1 | RES_0xD7F1 |
| SITZHEIZUNG_HINTEN_TASTER_VORHANDEN | 0xD86C | STAT_VORHANDEN_SITZHEIZUNG_HINTEN | 1: Taster Sitzheizung hinten codiert | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| WASSERVENTIL_DUO_PWM_WERT | 0xD89E | - | Status / Steuern Wasserventil Duo | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD89E | RES_0xD89E |
| VORHANDEN_FONDSCHICHTUNG | 0xD8AA | STAT_VORHANDEN_FONDSCHICHTUNGSPOTI | 1: Ist ein Fondschichtungspotentiometer vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | 1: Solarsensor vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | 1: AUC-Sensor vorhanden | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| ZUSATZWASSERPUMPE | 0xD903 | - | Status / Steuern Zusatzwasserpumpe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD903 | RES_0xD903 |
| KLIMAKOMPRESSOR | 0xD906 | - | Status Klimakompressor (Ein / Aus und PWM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD906 |
| KLIMAKOMPRESSOR_ANSTEUERN | 0xD908 | - | Ansteuerung Klimakompressor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD908 | - |
| DRUCK_TEMP_SENSOR_VORHANDEN | 0xD956 | STAT_DRUCK_TEMP_SENSOR_VORHANDEN | 1: Kombinierter Druck- und Temperatursensor verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | 1: Drucksensor verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | - | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A |
| SOLARSENSOR | 0xD961 | - | Status Solarsensor Links und Rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD961 |
| AUC_SENSOR | 0xD963 | STAT_AUC_SENSOR_NR | Schadstoffstufe AUC-Sensor | 0-n | - | - | unsigned char | TAB_AUC_STUFE | - | - | - | - | 22 | - | - |
| AUC_SENSOR_FREIGABE | 0xD965 | - | Steuern: AUC-Sensor enablen / disabeln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD965 | - |
| DRUCKSENSOR | 0xD967 | STAT_R134A_DRUCK_WERT | Status: Kältemitteldruck in Bar 0 ... 127 bar | bar | - | - | int | - | - | - | - | - | 22 | - | - |
| DRUCK_TEMP_SENSOR | 0xD969 | - | Status: Druck und Temperaturwerte des Sensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD969 |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Bussignal Aussentempertatur -40 ... 85 °C | °C | - | - | int | - | 1 | 2 | -40 | - | 22 | - | - |
| BESCHLAGSENSOR | 0xD96C | - | Relative Feuchte und Temperatur | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD96C |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 1: Beschlagsensor verbaut | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| FONDSCHICHTUNGS_POTI | 0xD96E | STAT_FONDSCHICHTUNGS_POTI_WERT | %-Wert des Potis (rear compartment air stratification potentiometer) 0 ... 100 % | % | - | - | int | - | - | - | - | - | 22 | - | - |
| HECKSCHEIBENHEIZUNG | 0xD970 | - | Status / Steuern Heckscheibenheizung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD970 | RES_0xD970 |
| KOMPRESSORKUPPLUNG | 0xD971 | - | Status / Steuern: Kompressorkupplung auf/zu | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD971 | RES_0xD971 |
| KLIMA_KAELTEABSPERRVENTIL | 0xD979 | - | Status / Steuern Kälteabsperrventil Klimaanlage Hybrid.  Ventil trennt Fahrzeugkühlung von Kühlung Hochvoltbatterie | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD979 | RES_0xD979 |
| POWERMODUL_HINTEN | 0xDA50 | - | Status Powermodul hinten (Bi-Stabiles Relais bzw. Klemme 30F ) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA50 |
| POWERMODUL_VORNE | 0xDA52 | - | Status Powermodul vorne (Bi-Stabiles Relais bzw. Klemme 30F ) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA52 |
| POWERMODUL_AKTIVIEREN | 0xDA53 | - | Steuern Powermodule (enspricht dem Bi-Stabilem Relais bzw. Klemme 30F) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA53 | - |
| HECKKLAPPE_TASTER_AUSSEN | 0xDA7D | - | Status / Simulation für Taster Heckklappe aussen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDA7D | RES_0xDA7D |
| HECKSCHEIBE_TASTER | 0xDA80 | - | Status / Simulation für Taster Heckscheibe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDA80 | RES_0xDA80 |
| ZV_BEIFAHRER | 0xDA81 | - | Status Zentralverriegelung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA81 |
| ZV_BEIFAHRER_HINTEN | 0xDA82 | - | Status Zentralverriegelung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA82 |
| ZV_FAHRER | 0xDA83 | - | Status Zentralverriegelung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA83 |
| ZV_FAHRER_HINTEN | 0xDA84 | - | Status Zentralverriegelung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA84 |
| ZV_HECKSCHEIBE | 0xDA86 | - | Status Zentralverriegelung Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA86 |
| ZV_GESAMT | 0xDA87 | - | Status aller ZV-Antriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA87 |
| ZV_STEUERN | 0xDA88 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA88 | - |
| KONTAKT_HECKKLAPPE_EIN | 0xDA92 | STAT_KONTAKT_HECKKLAPPE_EIN | 0: Heckklappe offen 1: Heckklappe zu | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| KONTAKT_HECKSCHEIBE_EIN | 0xDA93 | STAT_KONTAKT_HECKSCHEIBE_EIN | 0: Heckscheine offen 1: Heckscheibe geschlossen | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_GESCHW_STATUS | 0xDAAB | STAT_BUS_IN_GESCHW_STATUS | CAN Geschwindigkeits-Status. Nachrichten (1A0h) GESCHWINDIGKEIT 0 ... 320 km/h | 0-n | - | - | int | - | - | 10 | - | - | 22 | - | - |
| BUS_IN_ZV | 0xDAAF | STAT_BUS_IN_ZV | CAN aktuell empfangener ZV-Status Status der ZV von der JBBF  0: verriegelt  1: entriegelt  2: gesichert | 0-n | - | - | int | - | - | - | - | - | 22 | - | - |
| BUS_IN_DATUM_ZEIT | 0xDABB | - | CAS: Aktuelles vom Kombi empfangenes Datum/Zeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABB |
| BUS_IN_DSC | 0xDABD | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal vom DSC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABD |
| BUS_IN_FH | 0xDABF | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Status Fensterheber (je Tür FT,BFT,FTH,BFTH). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABF |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Job liefert den Status der Klemme(n) im Steuergerät:  0=AUS;  1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Job liefert den Status der Klemme(n) im Steuergerät:  0=AUS;  1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_30_EIN | 0xDB05 | STAT_STATUS_KLEMME_30_EIN | Job liefert den Status der Klemme(n) im Steuergerät:  0=AUS;  1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_30B_EIN | 0xDB06 | STAT_STATUS_KLEMME_30B_EIN | Job liefert den Status der Klemme(n) im Steuergerät:  0=AUS;  1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_30F_EIN | 0xDB08 | STAT_STATUS_KLEMME_30F_EIN | Job liefert den Status der Klemme(n) im Steuergerät:  0=AUS;  1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Job liefert den Status der Klemme(n) im Steuergerät:  0=AUS,  1=EIN | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemmen 58G in Prozent | % | - | - | int | - | - | - | - | - | 22 | - | - |
| TLC_ABGLEICH_MITTEN_FREQUENZ | 0xD08B | - | Liest bzw. schreibt die Mittenfrequenz des LRE LIN Slave. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD08B | RES_0xD08B |
| TLC_AKTUATOR | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD399 | RES_0xD399 |

### SZL_BLINKER_TASTER_LIST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | FAS-Taster hängt |
| 0x02 | BC-Taster hängt |
| 0x03 | FLA-Taster hängt |
| 0xXY | UNKNOW_ERROR |

### SZL_COMMUNICATION_LIST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Unplausibles Signal oder Timeout der Klemmenbotschaft (Defaultwert angenommen) |
| 0x02 | Unplausibles Signal oder Timeout der Dimmungsbotschaft (Defaultwert angenommen) |
| 0xXY | UNKNOW_ERROR |

### SZL_HW_ERROR_LIST

| WERT | UWTEXT |
| --- | --- |
| 0x00 | EEPROM nicht verfügbar |
| 0x01 | ROM-Test fehlerhaft |
| 0x02 | RAM-Test fehlerhaft |
| 0x03 | Watchdog-Test fehlerhaft |
| 0x04 | CPU-Test fehlerhaft |
| 0xXY | UNKNOW_ERROR |

### SZL_WISCHER_TASTER_LIST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | SWS-Schalter hängt |
| 0x02 | AIC-Taster hängt |
| 0xXY | UNKNOW_ERROR |

### TAB_AUC_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Saubere Luft |
| 0x01 | Normaler Arbeitsbereich |
| 0x02 | Stark verschmutzte Luft |
| 0xFF | ungültiger Wert |

### TAB_DYNAMICAL_ID

| LIN | WERT_0 | WERT_1 |
| --- | --- | --- |
| LIN3 | 0x0E | 0x16 |
| LIN5 | 0x0E | 0x17 |
| LIN6 | 0x0E | 0x18 |
| LIN7 | 0x0E | 0x19 |
| ungültiger Wert | 0xFF | 0xFF |

### TAB_FH_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Auswahl |
| 0x11 | Fenster Fahrer |
| 0x12 | Fenster Beifahrer |
| 0x13 | Fenster Fahrer hinten |
| 0x14 | Fenster Beifahrer hinten |
| 0x21 | Fenster Fahrer und Beifahrer |
| 0x22 | Fenster Fahrer hinten und Beifahrer hinten |
| 0x40 | Alle |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung abgeschlossen |
| 0x03 | Fehler: nicht bereit |
| 0x04 | Fehler: Abbruch durch Benutzer |
| 0x05 | Fehler: Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_FH_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Öffnen |
| 0x02 | Schliessen |
| 0x03 | Maut öffnen |
| 0x04 | Maut schliessen |
| 0xFF | ungültiger Wert |

### TAB_KOMPASS_LENKUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Rechtslenker |
| 0x01 | Linkslenker |
| 0xFF | ungültiger Wert |

### TAB_KOMPASS_SPRACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprache Englisch |
| 0x01 | Sprache Deutsch |

### TAB_LENKSTOCK_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkstock in Nullstellung |
| 0x01 | Blinker rechts tipp |
| 0x02 | Blinker rechts Dauer |
| 0x03 | Blinker links tipp |
| 0x04 | Blinker links Dauer |
| 0x05 | Fernlicht |
| 0x06 | Lichthupe |
| 0x07 | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_LENKSTOCK_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nullstellung |
| 0x01 | Tippwischen |
| 0x02 | Wischer Stufe 1 |
| 0x03 | Wischer Stufe 2 |
| 0x04 | Frontwaschen |
| 0x05 | Intervall |
| 0x06 | Heckwischen |
| 0x07 | Heckwaschen |
| 0x08 | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_LENKSTOCK_WISCHER_AXIAL_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht betätigt |
| 0x01 | Betätigt |
| 0xFF | Element nicht unterstützt |

### TAB_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | unterhalb Limit |
| 0x02 | normal Zustand |
| 0x03 | oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_LIN_EMBLEM_ENDANSCHLAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Emblem geschlossen |
| 0x10 | Emblem offen |
| 0x30 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_LIN_EMBLEM_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x40 | Fehler liegt an |
| 0xC0 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_LIN_EMBLEM_FEHLER_1

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Fehler |
| 0x0100 | Fehler liegt an |
| 0x0300 | Signal ungültig |
| 0xFFFF | ungültiger Wert |

### TAB_LIN_EMBLEM_FEHLER_2

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Fehler |
| 0x0400 | Fehler liegt an |
| 0x0C00 | Signal ungültig |
| 0xFFFF | ungültiger Wert |

### TAB_LIN_EMBLEM_FEHLER_3

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Fehler |
| 0x1000 | Fehler liegt an |
| 0x3000 | Signal ungültig |
| 0xFFFF | ungültiger Wert |

### TAB_LIN_EMBLEM_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor läuft |
| 0x01 | Motor steht |
| 0x03 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_LIN_EMBLEM_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Emblem öffnen |
| 0x04 | Emblem schliessen |
| 0x0C | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_LIN_EMBLEM_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Emblem öffnen |
| 0x10 | Emblem schliessen |

### TAB_MAGNETZONE

| WERT | TEXT |
| --- | --- |
| 0x00 | Zone 0 |
| 0x01 | Zone 1 |
| 0x02 | Zone 2 |
| 0x03 | Zone 3 |
| 0x04 | Zone 4 |
| 0x05 | Zone 5 |
| 0x06 | Zone 6 |
| 0x07 | Zone 7 |
| 0x08 | Zone 8 |
| 0x09 | Zone 9 |
| 0x0A | Zone 10 |
| 0x0B | Zone  11 |
| 0x0C | Zone 12 |
| 0x0D | Zone 13 |
| 0x0E | Zone 14 |
| 0x0F | Zone 15 |
| 0xFF | ungültiger Wert |

### TAB_MFL_RAENDEL_FGR

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Rändel auf Stufe 2 unten |
| 0x02 | Rändel auf Stufe 1 unten |
| 0x03 | Rändel auf Stufe 1 oben |
| 0x04 | Rändel auf Stufe 2 oben |
| 0x05 | ungültige Position |

### TAB_MFL_TASTEN1

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taste FGR SET betätigt |
| 0x02 | Umschalttaste ACC / DCC betätigt |
| 0x03 | Taste FGR RES betätigt |
| 0x04 | Taste ACC-Abstand betätigt |
| 0x05 | Rändel FGR Stufe 2 unten betätigt |
| 0x06 | Rändel FGR Stufe 1 unten betätigt |
| 0x07 | Rändel FGR Stufe 1 oben betätigt |
| 0x08 | Rändel FGR Stufe 2 oben betätigt |
| 0x09 | Taste FGR OFF betätigt |
| 0x0A | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_MFL_TASTEN2

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taste Source / Mode betätigt |
| 0x02 | BC-Rändel gedrückt |
| 0x03 | BC-Rändel nach unten |
| 0x04 | BC-Rändel nach oben |
| 0x05 | Taste Telefon betätigt |
| 0x06 | Taste Volume Minus betätigt |
| 0x07 | Taste Volume Plus betätigt |
| 0x08 | Taste Push-To-talk betätigt |
| 0x09 | Mehrfachbetätigung |
| 0xFF | ungültiger Wert |

### TAB_MFL_TIPPRAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Tipprändel BC nicht betätigt |
| 0x01 | Tipprändel BC gedrückt |
| 0x02 | Tipprändel nach unten |
| 0x03 | Tipprändel nach oben |
| 0xFF | ungültiger Wert |

### TAB_MOTORSTOP_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | SR_NOT_MOVED |
| 0x01 | SR_STOP_MOVE |
| 0x02 | SR_POSITION_REACHED |
| 0x03 | SR_BLOCKED |
| 0x04 | SR_STOP_MOVE_HIGH_TEMP |
| 0x05 | SR_MOTOR_VOLTAGE_RANGE |
| 0x06 | SR_DRIVER_ERROR |
| 0x07 | SR_SAFETY_TIMER |
| 0x08 | SR_AUTO_COND_LOST |
| 0x09 | SR_PINCHING |
| 0x10 | SR_RESET |
| 0x11 | SR_NORM |
| 0x12 | SR_RENORM |
| 0x13 | SR_REV_POS_REACHED |
| 0x14 | SR_NOT_STOPPED |
| 0x15 | SR_HALL_FAIL |
| 0x16 | SR_CODING_FAIL |
| 0x17 | SR_CPU_OVERLOAD |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_POWERMODUL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ansteuerung |
| 0x01 | Powermodul vorne |
| 0x02 | Powermodul hinten |
| 0x03 | Beide Powermodule |
| 0xFF | ungültiger Wert |

### TAB_SITZHEIZUNG_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED an |
| 0x01 | Eine LED an |
| 0x02 | Zwei LED's an |
| 0x03 | Drei LED's an |
| 0xFF | Keine LED's angeschlossen |

### TAB_SITZHEIZUNG_ORT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x01 | Kissen |
| 0x02 | Lehne |
| 0x03 | Kissen und Lehne |
| 0xFF | ungültiger Wert |

### TAB_SITZHEIZUNG_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Stufe 1 |
| 0x02 | Stufe 2 |
| 0x03 | Stufe 3 |
| 0xFF | ungültiger Wert |

### TAB_SPIEGEL_HEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | 25 % |
| 0x02 | 50 % |
| 0x03 | 75 % |
| 0x04 | 100 % |
| 0x05 | 125 % |
| 0xFF | ungültiger Wert |

### TAB_TLC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aussage |
| 0x01 | Unterhalb Limit |
| 0x02 | Normalzustand |
| 0x03 | Oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_UGDO_LAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Rest Europa |
| 0x01 | Frankreich |
| 0x02 | U.K. |
| 0x03 | Italien |
| 0x04 | USA |
| 0xFF | ungültiger Wert |

### TAB_UGDO_MODE

| WERT | TEXT |
| --- | --- |
| 0x01 | ChamberlainMode |
| 0x02 | Default |
| 0x03 | LearnMode |
| 0xFF | ungültiger Wert |

### TAB_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Wischer aus |
| 0x01 | Wischer in Stufe 1 |
| 0x02 | Wischer in Stufe 2 |

### TAB_WISCHER_RAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Rändel in Stufe 1 |
| 0x01 | Rändel in Stufe 2 |
| 0x02 | Rändel in Stufe 3 |
| 0x03 | Rändel in Stufe 4 |
| 0xFF | ungültiger Wert |

### TAB_ZV

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x01 | Verriegeln |
| 0x02 | Sichern |
| 0x03 | Entsichern |
| 0x04 | Entriegeln |
| 0x05 | Selektiv entriegeln FA |
| 0x06 | Selektiv entriegeln Heckklappe |

### TAB_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | Gesichert |
| 0x03 | Crash-Mode aktiv |
| 0xFF | ungültiger Wert |

### ZV_STATE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Elektrisch geöffnet |
| 0x01 | Entriegelt |
| 0x02 | Verriegelt |
| 0x03 | Gesichert |
| 0xXY | Signal ungültig |

### FH_DENORM_FEHLERTEXTE

| NUMMER | TEXT |
| --- | --- |
| 0 | KEIN FEHLEREINTRAG |
| 1 | FAHRERSEITE - EEPROMFEHLER BEIM STARTUP |
| 2 | FAHRERSEITE - INTERFACE WURDE BEIM STARTUP NICHT BEDIENT |
| 3 | FAHRERSEITE - ÜBERFAHREN DER POSITION AF |
| 4 | FAHRERSEITE - ÜBERFAHREN DER POSITION GF |
| 5 | FAHRERSEITE - NICHT PLAUSIBLER ZUSTAND |
| 6 | FAHRERSEITE - DEFIZITCOUNTER ÜBERSCHRITTEN |
| 7 | FAHRERSEITE - RELAISKLEBER_1 |
| 8 | FAHRERSEITE - RELAISKLEBER_2 |
| 9 | FAHRERSEITE - HALLFEHLER |
| 10 | FAHRERSEITE - EXPLIZITES DENORMIEREN |
| 11 | FAHRERSEITE - TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN |
| 12 | FAHRERSEITE - HALLUNTERABTASTUNG |
| 13 | FAHRERSEITE - START INITIALISIERUNGSLAUF |
| 14 | FAHRERSEITE - INITIALSIERUNGSLAUF ABGEBROCHEN |
| 101 | BEIFAHRERSEITE - EEPROMFEHLER BEIM STARTUP |
| 102 | BEIFAHRERSEITE - INTERFACE WURDE BEIM STARTUP NICHT BEDIENT |
| 103 | BEIFAHRERSEITE - ÜBERFAHREN DER POSITION AF |
| 104 | BEIFAHRERSEITE - ÜBERFAHREN DER POSITION GF |
| 105 | BEIFAHRERSEITE - NICHT PLAUSIBLER ZUSTAND |
| 106 | BEIFAHRERSEITE - DEFIZITCOUNTER ÜBERSCHRITTEN |
| 107 | BEIFAHRERSEITE - RELAISKLEBER_1 |
| 108 | BEIFAHRERSEITE - RELAISKLEBER_2 |
| 109 | BEIFAHRERSEITE - HALLFEHLER |
| 110 | BEIFAHRERSEITE - EXPLIZITES DENORMIEREN |
| 111 | BEIFAHRERSEITE - TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN |
| 112 | BEIFAHRERSEITE - HALLUNTERABTASTUNG |
| 113 | BEIFAHRERSEITE - START INITIALISIERUNGSLAUF |
| 114 | BEIFAHRERSEITE - INITIALSIERUNGSLAUF ABGEBROCHEN |
| 0xXY | undefiniert |

### ARM_FH_DENORM_FEHLERTEXTE

| NUMMER | TEXT |
| --- | --- |
| 0 | None |
| 1 | Exceed upper stop |
| 2 | Exceed lower stop |
| 3 | Invalid lower stop |
| 4 | Parameters changed |
| 5 | INT mode entered |
| 6 | NVM param corrupted |
| 7 | Max reversal |
| 8 | Max motion |
| 9 | Invalid HES |
| 10 | Too many HES |
| 11 | Supply off/reset in motion |
| 12 | Stuck relay |
| 13 | Open relay |
| 14 | Hot reset |
| 15 | WD Motion |
| 16 | Hot Stack Ovf Motion |
| 17 | Hot ECU Reset Motion |
| 18 | HES ambiguity counter exceeded |
| 19 | AS Param Out Of Range |
| 20 | NVM Not Saved |
| 40 | Bad coding |
| 41 | NVM Pos corrupted |
| 42 | NVM Ada corrupted |
| 43 | ASCET request |
| 44 | Diag request |
| 45 | Auto init |
| 46 | Hall off in motion |
| 47 | Clear Position block |
| 48 | Clear Adaptation block |
| 49 | NVM Adaptation Bad Coding |
| 50 | NVM Adaptation Bad Null Coding |
| 0xXY | undefined |

### ARM_DENORM_SIDE

| NUMMER | TEXT |
| --- | --- |
| 0 | Driver side |
| 128 | Passenger side |
| 0xXY | undefined |

### ARM_DENORM_MOTOR_MOTION

| NUMMER | TEXT |
| --- | --- |
| 1 | Motor stopped |
| 2 | Motor in motion, UP direction |
| 4 | Motor in motion, DOWN direction |
| 0xXY | undefined |

### FH_REVERSIER_FEHLERTEXTE

| NUMMER | TEXT |
| --- | --- |
| 0 | KEIN FEHLEREINTRAG |
| 1 | FAHRERSEITE - REVERS_ISR |
| 2 | FAHRERSEITE - REVERS_BLOCK |
| 3 | FAHRERSEITE - REVERS_ISRDIAG |
| 4 | FAHRERSEITE - REVERS_AT |
| 5 | FAHRERSEITE - REVERS_AT_DIAG |
| 101 | BEIFAHRERSEITE - REVERS_ISR |
| 102 | BEIFAHRERSEITE - REVERS_BLOCK |
| 103 | BEIFAHRERSEITE - REVERS_ISRDIAG |
| 104 | BEIFAHRERSEITE - REVERS_AT |
| 105 | BEIFAHRERSEITE - REVERS_AT_DIAG |
| 0xXY | undefiniert |

### FH_DENORM_HALLSTATUS

| NUMMER | TEXT |
| --- | --- |
| 0 | HALLSENSOREN OK |
| 1 | HALLSENSOREN VERDREHT |
| 2 | HALLSENSOR 1 DEFEKT |
| 3 | HALLSENSOR 2 DEFEKT |
| 0xXY | undefiniert |

### MOTORSTOP_REASON_TEXT

| NUMMER | TEXT |
| --- | --- |
| 0 | SR_NOT_MOVED |
| 1 | SR_STOP_MOVE |
| 2 | SR_POSITION_REACHED |
| 3 | SR_BLOCKED |
| 4 | SR_STOP_MOVE_HIGH_TEMP |
| 5 | SR_MOTOR_VOLTAGE_RANGE |
| 6 | SR_DRIVER_ERROR |
| 7 | SR_SAFETY_TIMER |
| 8 | SR_AUTO_COND_LOST |
| 9 | SR_PINCHING |
| 10 | SR_RESET |
| 11 | SR_NORM |
| 12 | SR_RENORM |
| 13 | SR_REV_POS_REACHED |
| 14 | SR_NOT_STOPPED |
| 15 | SR_HALL_FAIL |
| 16 | SR_CODING_FAIL |
| 17 | SR_CPU_OVERLOAD |
| 32 | SR_EXCEED_UPPER_MECH_STOP |
| 33 | SR_EXCEED_LOWER_MECH_STOP |
| 34 | SR_PRE_INIT_STOP |
| 35 | SR_DESINIT_BY_DIAG_STOP |
| 36 | SR_NVM_ERROR |
| 37 | SR_NVM_TIMEOUT |
| 0xXY | UNGUELTIG |

### ARM_MOTORSTOP_DIRECTION_INFORMATION

| NUMMER | TEXT |
| --- | --- |
| 0 | DOWN direction |
| 1 | UP direction |
| 0xXY | undefined |

### ARM_MOTORSTOP_INIT_INFORMATION

| NUMMER | TEXT |
| --- | --- |
| 0 | WL des-initialized |
| 2 | WL initialized |
| 0xXY | undefined |

### ARM_MOTORSTOP_EKS_INFORMATION

| NUMMER | TEXT |
| --- | --- |
| 0 | No EKS |
| 4 | EKS |
| 0xXY | undefined |

### ARM_MOTORSTOP_PANIC_INFORMATION

| NUMMER | TEXT |
| --- | --- |
| 0 | No Panic |
| 8 | Panic |
| 0xXY | undefined |

### ARM_REVERSE_OBSTACLE_TYPE

| NUMMER | TEXT |
| --- | --- |
| 0 | Soft obstacle |
| 1 | Hard obstacle |
| 0xXY | undefined |

### ARM_REVERSE_INIT_STATE

| NUMMER | TEXT |
| --- | --- |
| 0 | WL des-initialized |
| 2 | WL initialized |
| 0xXY | undefined |

### ARM_REVERSE_SIDE

| NUMMER | TEXT |
| --- | --- |
| 0 | Driver side |
| 128 | Passenger side |
| 0xXY | undefined |

### STATEMACHINE_TEXT

| NUMMER | TEXT |
| --- | --- |
| 1 | REVERSIEREN |
| 2 | RUHE |
| 3 | SENKEN |
| 4 | HEBEN |
| 5 | SENKENSTOP |
| 6 | HEBENSTOP |
| 7 | REVERSIERENSTOP |
| 9 | REVERSIEREN_START |
| 0xXY | UNGÜLTIG |

### MOTORZUSTAND_TEXT

| NUMMER | TEXT |
| --- | --- |
| 1 | REVERSIEREN |
| 2 | RUHE |
| 3 | SENKEN |
| 4 | HEBEN |
| 0xXY | UNGÜLTIG |

### BOOTTYPE_TEXT

| NUMMER | TEXT |
| --- | --- |
| 0 | POWER_ON_RESET |
| 1 | RAM_INVALID |
| 2 | RAM_VALID |
| 0xXY | UNGÜLTIG |

### FH_DENORM_FH_POSITION_KUESTER

| NUMMER | TEXT |
| --- | --- |
| 0 | FT steht |
| 1 | FT faehrt |
| 2 | BFT steht |
| 3 | BFT faehrt |
| 0xXY | undefiniert |

### DENORMIERUNGS_GRUND_KUESTER

| NUMMER | TEXT |
| --- | --- |
| 0 | kein Fehlereintrag |
| 1 | ascet |
| 2 | initiallaf |
| 3 | Block oben zu frueh |
| 4 | Block oben zu spaet |
| 5 | Block unten zu frueh |
| 6 | Block unten zu spaet |
| 7 | Hallsensor A defekt |
| 8 | Hallsensor B defekt |
| 9 | Hall Frequenz n.i.o |
| 10 | Hall-Masse |
| 11 | Korrumpierter Parameter |
| 12 | Relais defekt |
| 13 | Hallpulse ohne Ansteuerung |
| 14 | Korrumpiertes EEPROM |
| 15 | Halldrehrichtung unplausiebel |
| 16 | EEPROMFEHLER Position |
| 17 | Diagnose Denormierung |
| 18 | Timeout |
| 19 | Thermo90 – Schwelle |
| 20 | Thermo100 - Schwelle |
| 21 | Initialisierungslauf abgebrochen |
| 22 | Emergancy reversierer |
| 23 | Panic Block |
| 24 | Hallbuffer overrun |
| 25 | Ueberspannung no drive |
| 26 | Relais open Gnd |
| 27 | Relais close Gnd |
| 28 | Relais open Ubat |
| 29 | Relais close Ubat |
| 30 | Relais open Sicherung |
| 31 | Relais close Sicherung |
| 32 | Hall peak |
| 0xXY | undefiniert |
