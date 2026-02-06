# frm3.prg

## General

|  |  |
| --- | --- |
| File | frm3.prg |
| Type | PRG |
| Jobs | 135 |
| Tables | 210 |
| Origin | BMW EI-642 Johnke_Dieter |
| Revision | 3.005 |
| Author | BMW EI-402 Wagener_Roland, Continental-Temic EI-402 Weber_Ulric |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Fussraummodul III |  |  |
| ORIGIN | string | BMW EI-642 Johnke_Dieter |  |  |
| REVISION | string | 3.005 |  |  |
| AUTHOR | string | BMW EI-402 Wagener_Roland, Continental-Temic EI-402 Weber_Ulric |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.43 |  |  |
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

### STATUS_SW_VERSION

SW Version auslesen UDS  : $22   ReadDataByIdentifier $40   Continental Temic $00   Identifier

_No arguments._

### STEUERN_BETRIEBSMODUS

Betriebsmodussteuerung UDS  : $31       Routine Control $010F0C   startRoutine 0F0C Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SUB_PARA_4 | int | 0 default(andere Modis deaktivieren) 1 Fertigungsmodus 2 Transportmodus 3 Flashmodus |

### STATUS_SENSE_LESEN

Liest die Sense-Werte aus $22 38 20          Codierblock 1 lesen $2F 01 XX 03 64    Leuchte einschalten (XX Ausgang Leuchte) $31 01 41 20 00 XX Messung starten (XX Kanal Leuchte) waitex(200)        !!! 300ms !!! Warten nach dem Start der Messung $31 03 41 20 00 XX Messwert auslesen (XX Kanal Leuchte) $31 02 41 20 00 XX Messung stoppen (XX Kanal Leuchte) $2F 01 XX 00       Leuchte ausschalten (XX Ausgang Leuchte)

| Name | Type | Description |
| --- | --- | --- |
| LEUCHTE | string | ausgewählte Leuchte Spalte name aus table LAMPEN_AUSGANG |

### STEUERN_DIGITAL_LICHT

Liest die Sense-Werte aus $22 38 20          Codierblock 1 lesen $2F 01 XX 03 64    Leuchte einschalten (XX Ausgang Leuchte) oder $2F 01 XX 00       Leuchte ausschalten (XX Ausgang Leuchte)

| Name | Type | Description |
| --- | --- | --- |
| LEUCHTE | string | ausgewählte Leuchte Spalte name aus table LAMPEN_AUSGANG |
| AKTION | string | ausgewählte Aktion Spalte TEXT aus table TAB_AKTION_STEUERN_LICHT |

### STATUS_DIGITAL_LICHT

Liest den Status der Leuchten aus $22 30 80  Codierblock 1 lesen $22 D5 30  Status-Abfrage der Leuchten AUS: Ausgang Licht aus EIN: Ausgang Licht ein

_No arguments._

### STATUS_FENSTERHEBER

Gibt aktuellen Zustand Fensterheber wieder Status Rear Windows (z.B. Position, Normierung, Verfahrrichtung, etc) UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $20 Stati der Fensterheber fuer FRM3

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALVAR_FAT

Auslesen der Stati von internen FH Variablen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $21 Stati der Fensterheber fuer FRM3

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALVAR_BFT

Auslesen der Stati von internen FH Variablen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $22 Stati der Fensterheber fuer FRM3

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALFLG_FAT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $23 Stati der Fensterheber fuer FRM3

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_GLOBALFLG_BFT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $24 Stati der Fensterheber fuer FRM3

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_CONTROL_FAT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $25 Stati der Fensterheber fuer FRM3

_No arguments._

### _STATUS_VAR_IAP_PWR_BROSE_CONTROL_BFT

Auslesen der Stati von den Internen Variablen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $26 Stati der Fensterheber fuer FRM3

_No arguments._

### STEUERN_FH_ADAPTIONSSPEICHER_LOESCHEN

Adaptionsspeicher der Fensterheber loeschen UDS  : $31   RoutineControl UDS  : $01   StartRoutine Modus: Default

_No arguments._

### STATUS_FH_LOGGER_DENORMIERER

Fensterheber Denormierloggers auslesen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $36 Identifier

_No arguments._

### STATUS_FH_LOGGER_REVERSIERER

Fensterheber Reversierlogger auslesen UDS: $22 ReadDataByIdentifier $45 FH BROSE JOBS $37 Identifier

_No arguments._

### STEUERN_FH_LOGGER_DENORMIERER_LOESCHEN

Fensterheber Denormierlogger loeschen UDS  : $22   ReadDataByIdentifier $45   Brose $38   Identifier

_No arguments._

### STEUERN_FH_LOGGER_REVERSIERER_LOESCHEN

Fensterheber Reversierlogger loeschen UDS  : $22   ReadDataByIdentifier $45   Brose $39   Identifier

_No arguments._

### _READ_EKS_SUPPLIER

Fensterheber Lieferant UDS  : $22   ReadDataByIdentifier $45   Brose $28   Identifier

_No arguments._

### _ECHTZEITDATEN_BROSE_LESEN

Echtzeitdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $45   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> Adaptionsdaten FAT 2 -> Statistikdaten FAT 3 -> Prozessdaten FAT 4 -> Position FAT 5 -> Adaptionsdaten BFT 6 -> Statistikdaten BFT 7 -> Prozessdaten BFT 8 -> Position BFT 9 -> Denormierlogger 10 -> Reversierlogger 11 -> Motorstopreasons FAT 12 -> Motorstopreasons BFT 13 -> Initlog FAT 14 -> Initlog BFT |

### _ECHTZEITDATEN_BROSE_LOESCHEN

Echtzeitdaten Brose loeschen UDS  : $2E   Write Data By Identifier UDS  : $45   ID Echtzeitdaten Brose loeschen UDS  : $50   ID Echtzeitdaten Brose loeschen UDS  : $00-0D Bereich Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> Adaptionsdaten FAT 2 -> Statistikdaten FAT 3 -> Prozessdaten FAT 4 -> Position FAT 5 -> Adaptionsdaten BFT 6 -> Statistikdaten BFT 7 -> Prozessdaten BFT 8 -> Position BFT 9 -> Denormierlogger 10 -> Reversierlogger 11 -> Motorstopreasons FAT 12 -> Motorstopreasons BFT 13 -> Initlog FAT 14 -> Initlog BFT |

### STATUS_FH_ADAPTIONSSPEICHER_LESEN

Adaptionsspeicher der Fensterheber lesen UDS  : $22   ReadDataByIdentifier $45   Brose $41..45   Identifier

_No arguments._

### _STEUERN_FENSTERHEBER_MESSDATEN_AKTIVIEREN

Fensterheber Messdaten aktivieren UDS  : $31   RoutineControl $01   StartRoutine $45   ID $31   ID $00   Window $xx   Window

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection Auswahl des Fensters, dass eingelernt werden soll: 0x00: Vorgang abbrechen 0x11: Fahrerseite 0x12: Beifahrerseite 0x21: Fahrerseite und Beifahrerseite 0x40: Alle |

### _STATUS_MOTORSTOPREASON_LESEN

Motorstopp Grund auslesen und in Klartext darstellen UDS  : $22   ReadDataByIdentifier $45   Brose $4B..4C   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTERHEBER | int | Auswahl der auszulesenden Zone 1 -> Stoppgruende FAT 2 -> Stoppgruende BFT |

### _STATUS_INITLOG_LESEN

Init Log auslesen und in Klartext darstellen UDS  : $22   ReadDataByIdentifier $45   Brose $4D..4E   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTERHEBER | int | Auswahl der auszulesenden Zone 1 -> Initlog FAT 2 -> Initlog BFT |

### _STATUS_STATISTIKDATEN_LESEN

Statistikdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $45   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> FAT 2 -> BFT |

### _STATUS_PROZESSDATEN_LESEN

Prozessdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $45   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> FAT 2 -> BFT |

### _STATUS_POSITION_LESEN

Statistikdaten Brose Applikation lesen UDS  : $22   ReadDataByIdentifier $45   Brose $41..4A   Identifier

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der auszulesenden Zone 1 -> FAT 2 -> BFT |

### TMS_IDENTDATEN_LESEN_LEAR

TMS-Identifikationsdaten lesen UDS: $22 ReadDataByIdentifier

_No arguments._

### TMS_RESET_LEAR

TMS Reset ausfuehren UDS: $11 EcuReset

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### IS_LESEN_TMS_L_LEAR

Fehlerspeicher des linken TMS auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### IS_LESEN_TMS_R_LEAR

Fehlerspeicher des rechten TMS auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### IS_LOESCHEN_TMS_L_LEAR

Fehlerspeicher des linken TMS loeschen UDS: $14 ClearDiagnosticInformation

_No arguments._

### IS_LOESCHEN_TMS_R_LEAR

Fehlerspeicher des rechten TMS loeschen UDS: $14 ClearDiagnosticInformation

_No arguments._

### STATUS_LWR_POSITION_LEAR

LWR-Position vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_LWR_POSITION_LEAR

LWR-Positionssteuerung UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| POS_LWR | long | Winkel fuer LWR je nach Scheinwerfer max. von 0 bis 1000 entspricht 0 Grad bis 10 Grad |
| GESCHW_LWR | unsigned char | Geschwindigkeit fuer LWR je nach Scheinwerfer max. von 0 bis 7 |

### STATUS_AHL_POSITION_LEAR

AHL-Position vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_AHL_POSITION_LEAR

AHL-Positionssteuerung UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| POS_KURVENLICHT | long | Winkel fuer Kurvenlicht je nach Scheinwerfer max. von -170 bis 170 entspricht -17 Grad bis 17 Grad |
| GESCHW_KURVENLICHT | unsigned char | Geschwindigkeit fuer Kurvenlicht je nach Scheinwerfer max. von 0 bis 31 |

### STEUERN_LWR_REFERENZLAUF_LEAR

LWR-Referenzlauf aktivieren UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_AHL_REFERENZLAUF_LEAR

AHL-Referenzlauf aktivieren UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| TYPE | string | table REF_TYPE SYMBOL |

### STATUS_HW_EINGAENGE_TMS_LEAR

Hardware-Signale vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_STROEME_TMS_LEAR

LED-Stroeme und PWM-Tastverhaeltnisse vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_AUSGAENGE_TMS_LEAR

Status der LED-Ausgaenge vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_LED_AUSGAENGE_TMS_LEAR

LED-Ausgaenge vom TMS ansteuern UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| LED | string | table TMS_LED_FUNCTIONS SHORT |

### STATUS_BETR_H_TMS_LEAR

Betriebsstunden vom TMS auslesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_BETR_H_TMS_LOESCHEN_LEAR

Betriebsstunden vom TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_VERTEILUNG_WINKEL_ANSTEUERUNG_TMS_LEAR

Verteilung der Winkelansteuerung aus TMS lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_VERTEILUNG_WINKEL_ANSTEUERUNG_LOESCHEN_TMS_LEAR

Verteilung der Winkelansteuerung in TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_TEMPERATURVERTEILUNG_TMS_LEAR

Temperaturverteilung aus TMS lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_TEMPERATURVERTEILUNG_LOESCHEN_TMS_LEAR

Temperaturverteilung in TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_AHL_SCHRITTVERLUSTE_LEAR

Schrittverluste aus TMS lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STEUERN_AHL_SCHRITTVERLUSTE_LOESCHEN_LEAR

Schrittverluste in TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### TMS_ID_LESEN_LEAR

TMS-ID auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### TMS_ID_LINKS_SCHREIBEN_LEAR

TMS-ID in linkes TMS schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS_ID | string | in das TMS zu schreibende TMS-ID |

### TMS_ID_RECHTS_SCHREIBEN_LEAR

TMS-ID in rechtes TMS schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS_ID | string | in das TMS zu schreibende TMS-ID |

### TMS_SPEICHER_LESEN_LEAR

TMS-Speicher lesen UDS: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| ADRESSE | unsigned long | Adresse von der gelesen werden soll |
| ANZAHL | unsigned long | Anzahl von Bytes die gelesen werden sollen |

### TMS_SPEICHER_SCHREIBEN_LEAR

TMS-Speicher schreiben UDS: $3D WriteDataByAddress

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| ADRESSE | unsigned long | Adresse ab der geschrieben werden soll |
| DATEN | string | Daten die geschrieben werden sollen in hexadezimaler Form |

### SCHEINWERFERHERSTELLERDATEN_LESEN_LEAR

Scheinwerferherstellerdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### SCHEINWERFERHERSTELLERDATEN_SCHREIBEN_LEAR

Scheinwerferherstellerdaten schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| HERSTELLERDATEN_SCHEINWERFER | string | Scheinwerfer-Herstellerdaten |

### TMS_HERSTELLERDATEN_LESEN_LEAR

TMS-Herstellerdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### TMS_HERSTELLERDATEN_SCHREIBEN_LEAR

TMS-Herstellerdaten schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| HERSTELLERDATEN_TMS | string | TMS-Herstellerdaten |

### CODIERDATEN_TMS_BLOCK_LESEN_LEAR

einzelnen Block TMS-Codierdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Blocknummer: 32xx Codierdaten TMS links 33xx Codierdaten TMS rechts 35xx Codierdaten TMS links und rechts, in diesem Fall optionale Seitenauswahl ueber Parameter TMS |
| TMS | string | table TMS SYMBOL |

### CODIERDATEN_TMS_BLOCK_SCHREIBEN_LEAR

einzelnen Block TMS-Codierdaten schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN | string | Blocknummer und Codierdaten: 32xx Codierdaten TMS links 33xx Codierdaten TMS rechts 35xx Codierdaten TMS links und rechts, in diesem Fall optionale Seitenauswahl ueber Parameter TMS |
| TMS | string | table TMS SYMBOL |

### CODIERDATEN_TMS_LESEN_KOMPLETT_LEAR

komplette TMS-Codierdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### CODIERDATEN_TMS_SCHREIBEN_LEAR

TMS-Codierdaten aus Datei schreiben Datei muss Blocknummer und Codierdaten enthalten: 32xx Codierdaten TMS links 33xx Codierdaten TMS rechts 35xx Codierdaten TMS links und rechts UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Datei mit Codierdaten letztes Zeichen muss ein LF sein |

### LED_EINLERNVORGANG_AKTIVIEREN_LEAR

Einlernvorgang der LEDs wird gestartet UDS: $22 ReadDataByIdentifier (vor Software x.46.00) UDS: $2E WriteDataByIdentifier (vor Software x.46.00) UDS: $11 EcuReset (vor Software x.46.00) UDS: $2F IoControlById (ab Software x.46.00)

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_EINLERNVORGANG_LEAR

Status des LED-Einlernvorgangs vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### TMS_EEPROM_UPDATE_LEAR

Update des TMS internen EEPROMs UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_TIEFTEMPERATURMODUS_LEAR

Kenngroessen des Tieftemperaturmodus im Motortreiber des TMS auslesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### _WARTEZEIT_LEAR

Wartezeit

| Name | Type | Description |
| --- | --- | --- |
| WARTEZEIT | unsigned char | Wartezeit in Sekunden |

### STATUS_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F01, F02, F03, F04, F07, F10, RR4, RR5, F25, F26 |
| ELEMENT | string | FA:  Fenster Fahrerseite BF:  Fenster Beifahrerseite FAH: Fenster Fahrerseite hinten BFH: Fenster Beifahrerseite hinten SHD: Schiebedach ESH: Elektrischer Schiebehimmel |
| KENNLINIE | int | optional: nur für SHD und ESH 1: Schieben 2: Heben bzw. Zwangsspalt |

### STATUS_SENSOREN_TEILENUMMER

Teilenummer eines intelligenten Subbussensoren lesen job nur ausführen, wenn Teilennummer geliefert wird !!! UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| VERBAUORT | long | Verbauort des Sensors table VerbauortTabelle ORT |

### STATUS_ZUSATZINFOS_ENERGIE_LICHT

Detailinformationen (Umweltbedingungen) zu den DTC 0x800E89, LH Energiebordnetzdiagnose SAP-Nr.10005208-000-05 Kap. 5.3.2.4.1.1.5. 0x4100 ZUSATZINFOS_ENERGIE_LICHT

_No arguments._

### _STATUS_FH_ANALYSE

Check, ob FH eingelernt und Abgleich mit Adaptionsdaten

_No arguments._

### IS_LESEN_TMS2_L_LEAR

Fehlerspeicher des linken TMS2 auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### IS_LESEN_TMS2_R_LEAR

Fehlerspeicher des rechten TMS2 auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_LED_SOLL_STROEME_TMS2_LEAR

LED-Sollstroeme fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_DERATING_STROEME_TMS2_LEAR

LED-Sollstroeme unter Beruecksichtigung des Deratings fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_SPITZEN_STROEME_TMS2_LEAR

LED-Spitzenstroeme fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_PWM_TMS2_LEAR

PWM-Tastverhaeltnisse fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_LED_AUSGAENGE_TMS2_LEAR

Status der LED-Ausgaenge vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_SPANNUNGEN_TMS2_LEAR

Vom TMS intern gemessene Spannungen auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### STATUS_TEMPERATURSENSOREN_TMS2_LEAR

Auslesen des internen und externen Temperatursensors vom TMS UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |

### TMS2_SPEICHER_LESEN_LEAR

TMS2-Speicher lesen UDS: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| ADRESSE | unsigned long | Adresse von der gelesen werden soll |
| ANZAHL | unsigned long | Anzahl von Bytes die gelesen werden sollen |

### TMS2_SPEICHER_SCHREIBEN_LEAR

TMS2-Speicher schreiben UDS: $3D WriteDataByAddress

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TMS SYMBOL |
| ADRESSE | unsigned long | Adresse ab der geschrieben werden soll |
| DATEN | string | Daten die geschrieben werden sollen in hexadezimaler Form |

### STEUERN_SMO_LOESCHEN_SPIELSCHUTZZAEHLER

Loescht den Spielschutz des SMO UDS  : $2E   WriteDataByIdentifier $D5 $D5   Identifier

_No arguments._

### STEUERN_SMO_LOESCHEN_STOERSCHUTZZAEHLER

Loescht den Stoerschutzzaehler des SMO UDS  : $2E   WriteDataByIdentifier $D5 $D6   Identifier

_No arguments._

### STEUERN_SMO_RESET

Loest Reset im SMO aus UDS  : $2E   WriteDataByIdentifier $D5 $D7   Identifier

_No arguments._

### LEUCHTEN_AUSSENLICHT_TEMP

Temperaturen der LED Hauptlicht Module (LHM) UDS  : $22   ReadDataByIdentifier $D5 $3F   Identifier

_No arguments._

### _LESEN_RESETCOUNTER

Auslesen des Resetcounters UDS  : $22   ReadDataByIdentifier $4D $00   Identifier  z.B. ausgelesen: 62 4D 00 68 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  Byte 1, 2 und 3 -> Diagnose Response vom SG Byte 4 und 5  : POR oder Diagnose Reset Byte 4 -> Zusatzliche Info zum letzten Reset FF für Diagnosereset 68 für Power on Reset 28 für Low Voltage Reset Byte 5 -> Gesamtanzahl der Resets Byte 6        : not used Byte 7        : illegal Interrupt -> nicht erlaubter Interrupt Byte 7 -> Gesamtanzahl der Resets Byte 8 und 9  : stack overflow -> OSEK Stack Overflow generiert Reset Byte 8 -> Osek-Stack ID des letzten Reset Byte 9 -> Gesamtanzahl der Resets Byte 10 und 11: stack underflow -> OSEK Stack Underflow generiert Reset Byte 10 -> Osek-Stack ID des letzten Reset Byte 11 -> Gesamtanzahl der Resets Byte 12 und 13: unbekannter OSEK-Shutdown Byte 12 -> Osek-Shutdown ID des letzten Reset Byte 13 -> Gesamtanzahl der Resets Byte 14       : not used Byte 15       : illegal Address -> Prozessor zeigt Illegal Address-Fehler an Byte 16 und 17: Watchdog-Manager des SC erzwingt Reset Byte 16 -> Task-Trigger-ID des letzten Reset Byte 17 -> Gesamtanzahl der Resets Byte 18       : not used Byte 19       : not used Byte 20       : not used Byte 21       : all others -> Reset die nicht in eine vorherige Kategorie einzuordnen sind Byte 21 -> Gesamtanzahl der Resets

_No arguments._

### _LOESCHEN_RESETCOUNTER

Löschen des Resetcounters UDS  : $2E   ReadDataByIdentifier $4D $00   Identifier

_No arguments._

### _IDLETIME_LOGGING_EIN

Aktivieren des Idletime-Logging UDS  : $2E   ReadDataByIdentifier $4F $E0   Identifier $01

_No arguments._

### _IDLETIME_LOGGING_AUS

Aktivieren des Idletime-Logging UDS  : $2E   ReadDataByIdentifier $4F $E0   Identifier $01

_No arguments._

### EED_LOESCHEN

EED Löschen UDS  : $2E   WriteDataByIdentifier $DD $45   Identifier

_No arguments._

### STATUS_EED

Status of  EED Write Test UDS  : $22   ReadDataByIdentifier $DD $45   Identifier

_No arguments._

### STOP_TRANSIT_TMS_SUBSYSTEMS

Abbau Diagnosetunnel LM-LIN/TMS UDS  : $31 Routine Control $02 $10 Identifier $09 Identifier

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
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
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
| 0x2300 | Aussenspiegel Beifahrer | - |
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
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
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
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
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
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
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
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
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
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
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
| 0x005B | VOLVO Technology Schweden |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC |
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
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
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
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
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

### ARG_0XA071

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | char | - | TAB_ELSV_NORMIERUNG | 1.0 | 1.0 | 0.0 | - | - | 1: Vollständige Normierung  2: Teilnormierung oben und ausgefahren |

### ARG_0XA073

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | char | - | TAB_ELSV_BLOCKFAHRTEN_RESET | 1.0 | 1.0 | 0.0 | - | - | Welcher Zähler zurückgesetzt werden soll |

### ARG_0XA177

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_FENSTER | + | - | 0-n | - | char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Beschreibung Argument siehe Tabelle |

### ARG_0XA178

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| AKTION | + | - | 0-n | - | char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | 0: Keine Aktion  1: Öffnen  2: Schliessen  3: Maut öffnen  4: Maut schliessen |
| ZEIT | + | - | ms | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit in 100ms-Schritten bei Aktion 1 und 2; Bei Aktionen 3 und 4 (Maut) ist nur eine 0 oder 1 zulässig |

### ARG_0XA179

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_FENSTER | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0XA17E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Position in Hallpulsen |

### ARG_0XD072

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACHSE | 0-n | - | char | - | TAB_ELSV_ACHSE | 1.0 | 1.0 | 0.0 | - | - | 0: Keine Bewegung  1: Länge 2: Höhe |
| RICHTUNG | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: PLUS (ausfahren (hinten) / unten) 1: MINUS (einfahren (vorne) / oben) |

### ARG_0XD084

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LAENGE | % | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 %: Vollständig eingefahren (bis Softstop) 100 %: Vollständig ausgefahren (bis Softstop) |
| HOEHE | % | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 %: oberer Anschlag (Softstop)   100 %: unterer Anschlag (Softstop) |

### ARG_0XD18C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD19F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Kurzhub aktivieren 1: Kurzhub deaktivieren |

### ARG_0XD30B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD320

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1: Aktivieren Spiegel wird für 8s mit 60 % abgeblendet |

### ARG_0XD322

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | int | - | TAB_SPIEGEL_VERFAHREN | - | - | - | - | - | Ansteuerung Spiegel Beifahrer  0x01: links  0x02: oben  0x03: rechts  0x04: unten |
| ZEIT | ms | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in 100ms-Schritten |

### ARG_0XD324

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_SPIEGEL_KLAPPEN | 1.0 | 1.0 | 0.0 | - | - | 0: Spiegel ausklappen und Bordstein-Position verlassen  1: Spiegel einklappen  2: Spiegel ausklappen  3: Bordstein-Position anfahren  4: Bordstein-Position verlassen |

### ARG_0XD327

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | int | - | TAB_SPIEGEL_VERFAHREN | - | - | - | - | - | Ansteuerung Spiegel Fahrer  0x01: links  0x02: oben  0x03: rechts  0x04: unten |
| ZEIT | ms | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in 100ms-Schritten |

### ARG_0XD328

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_HOR | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Horizontale Position  Angabe in Inkrementen |
| POS_VER | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Vertikale Position  Angabe in Inkrementen |

### ARG_0XD32D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERT | 0-n | - | int | - | TAB_SPIEGEL_HEIZUNG | 1.0 | 1.0 | 0.0 | - | - | Heizleistung in Prozent. Auflösung Stufe zu Prozentwerten in Tabelle TAB_SPIEGEL_HEIZUNG |
| ZEIT | s | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 240.0 | Angabe der Zeit in Sekunden. Maximal 240 Sekunden |

### ARG_0XD333

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_HOR | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Horizontale Position  Angabe in Inkrementen |
| POS_VER | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Vertikale Position  Angabe in Inkrementen |

### ARG_0XD336

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | int | - | TAB_SPIEGELMEM_POS | 1.0 | 1.0 | 0.0 | - | - | Angabe der Memoryposition 1-3 1 und 2 entsprechen Taste 1 und 2  3 entspricht Schlüsselposition |
| KEY | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Welcher Schlüssel 0-3 |

### ARG_0XD338

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | int | - | TAB_SPIEGELMEM_POS | 1.0 | 1.0 | 0.0 | - | - | Angabe der Memoryposition 1-3 |
| KEY | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Welcher Schlüssel 0-3 |
| POS_FA_HORIZONTAL | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Spiegel Fahrerseite horizontale Position |
| POS_FA_VERTIKAL | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Spiegel Fahrerseite vertikale Position |
| POS_BF_HORIZONTAL | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Spiegel Beifahrer horizontale Position |
| POS_BF_VERTIKAL | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Spiegel Beifahrerseite vertikale Position |

### ARG_0XD347

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPIEGEL | 0-n | - | char | - | TAB_SPIEGEL_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Spiegel |
| DIMMUNG | % | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 - 100 % |
| AKTION | 0-n | - | char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | - | - | Art der Ansteuerung |

### ARG_0XD369

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster nicht betätigt |

### ARG_0XD36A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus 1: LED ein |

### ARG_0XD389

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD39A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD39B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus   1: LED ein |

### ARG_0XD531

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TMS_LINKS | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Aus 1: Ein |
| TMS_RECHTS | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Aus 1: Ein |

### ARG_0XD535

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 1: Überwachung starten |

### ARG_0XD536

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 1: Überwachung starten |

### ARG_0XD537

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | - | - | - | - | - | Tagfahrlichtsperre: 0...Sperre loeschen 1...Sperre setzen |

### ARG_0XD538

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | int | - | TAB_SCHEINWERFER_AUSWAHL_1 | - | - | - | - | - | Auswahl über Tabelle |

### ARG_0XD542

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | int | - | TAB_LAMPEN_FUNKTION | 1.0 | 1.0 | 0.0 | - | - | Mögliche Elemente siehe Tabelle |
| ZEIT | ms | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Angabe der Zeit in 100ms  0: aus  255: 5min, sofern für die Lampe zugelassen |

### ARG_0XD547

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LWR_AHL | 0-n | - | char | - | TAB_AHL_LWR_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Umfang 0: AHL  1: LWR 2: AHL + LWR |
| SCHEINWERFER | 0-n | - | char | - | TAB_SCHEINWERFER_AUSWAHL | - | - | - | - | - | Auswahl Scheinwerfer |

### ARG_0XD558

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | char | - | TAB_AHL_LWR_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Umfang  0: AHL  1: LWR 2: AHL + LWR |
| SCHEINWERFER | 0-n | - | char | - | TAB_SCHEINWERFER_AUSWAHL_1 | - | - | - | - | - | Auswahl Scheinwerfer |
| HOR_POSITION | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | -25.0 | 25.0 | Horizontale Position |
| HOR_GESCHW | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Horizontale Geschwindigkeit |
| VER_POSITION | Grad | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 10.0 | Vertikale Position |
| VER_GESCHW | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vertikale Geschwindigkeit |

### ARG_0XD57C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUERAUS | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Daueraus nicht aktiv 1: Daueraus aktiv |

### ARG_0XD58E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Scheinwerfer reagiert auf  normalen  Mechanismus (manuelle LWR: Reaktion auf Rädchen automatische / dynamische LWR: Reaktion auf die Höhenstndssenoren  1: Scheinwerfer bleiben in Grundstellung (aufheben nur per Diagnose oder Klemmenwechsel möglich) |

### ARG_0XD5BC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_MEMORY | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus   1: LED ein |
| LED_GENTLEMEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus   1: LED ein |

### ARG_0XD5BD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_MEMORY | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus   1: LED ein |

### ARG_0XD5E0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ansteuerung deaktivieren  1: geringste Helligkeit  254: maximale Helligkeit |

### ARG_0XD5E2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1: Betriebsstunden löschen |

### ARG_0XD5E6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRLICHTSITUATION | 0-n | - | char | - | TAB_FAHRLICHTSITUATION | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der Fahrlichtsituation |

### ARG_0XDA0D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDBEA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDBEB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus 1: LED ein |

### ARG_0XDC83

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SARAH | 0-n | high | unsigned char | - | TAB_SARAH_ZUSTAND | 1.0 | 1.0 | 0.0 | - | - | Zustand SARAH (siehe Tabelle TAB_SARAH_ZUSTAND) |
| AUFFAHRWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Auffahrwarnung (1 - ausgewählt; 0 - abgewählt) |
| VORWARNUNG | 0-n | high | unsigned char | - | TAB_VORWARNUNG | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Vorwarnung  (siehe Tabelle TAB_VORWARNUNG) |
| PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Personenwarnung (1 - ausgewählt; 0 - abgewählt) |
| GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Gezieltes Anleuchten (1 - ausgewählt; 0 - abgewählt) |
| SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Spurverlassenswarnung (1 - ausgewählt; 0 - abgewählt) |
| SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Spurwechselwarnung (1 - ausgewählt; 0 - abgewählt) |
| RESERVE_1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_3 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_4 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_5 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_6 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_7 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_8 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_9 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |
| RESERVE_10 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserve |

### ARG_0XDC84

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDC85

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus   1: LED ein |

### ARG_0XDD40

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster nicht betätigt |

### ARG_0XDD41

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_1 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: aus 1: ein |
| LED_2 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: aus 1: ein |
| LED_3 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: aus 1: ein |

### ARG_0XDD42

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster nicht betätigt |

### ARG_0XDD43

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_1 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: aus 1: ein |
| LED_2 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: aus 1: ein |
| LED_3 | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: aus 1: ein |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | 1.Spiegelheizung bei ASP high  (Fa + Bf); 2. Follow-me-home -Beleuchtung; 3. Welcome Light -Beleuchtung; 4.Tagesfahrlicht, gedimmtes Fernlicht, z.B. Canada und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 5.Tagesfahrlicht, Abblendlicht, z.B. Norwegen, CarKey oder SA 896 und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 6.Tagesfahrlicht, Standlichtringe und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 7.Parklicht (bei KL0); 8.Abbiegelicht; 9.AHL, Kurvenlicht; 10.Fernlichtassistent (FLA) ; 11.Innenlicht und Klemme VA (manuelle und automatische Innenbeleuchtung wird deaktiviert, inkl. OVT - Eingeschränkt |
| 0x01 | Spezieller Energiesparmode | 1.Spiegelheizung bei ASP high  (Fa + Bf); 2. Follow-me-home -Beleuchtung; 3. Welcome Light -Beleuchtung; 4.Tagesfahrlicht, gedimmtes Fernlicht, z.B. Canada und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 5.Tagesfahrlicht, Abblendlicht, z.B. Norwegen, CarKey oder SA 896 und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 6.Tagesfahrlicht, Standlichtringe und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 7.Parklicht (bei KL0); 8.Abbiegelicht; 9.AHL, Kurvenlicht; 10.Fernlichtassistent (FLA) ; 11.Innenlicht und Klemme VA (manuelle und automatische Innenbeleuchtung wird deaktiviert, inkl. OVT)  - Eingeschränkt |
| 0x02 | ECOS-Mode | 1.Tagesfahrlicht, gedimmtes Fernlicht, z.B. Canada und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 2.Tagesfahrlicht, Abblendlicht, z.B. Norwegen, CarKey oder SA 896 und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 3.Tagesfahrlicht, Standlichtringe und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind  - Eingeschränkt |
| 0x03 | MOST-Mode | 1.Spiegelheizung bei ASP high  (Fa + Bf); 2. Follow-me-home -Beleuchtung; 3. Welcome Light -Beleuchtung; 4.Tagesfahrlicht, gedimmtes Fernlicht, z.B. Canada und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 5.Tagesfahrlicht, Abblendlicht, z.B. Norwegen, CarKey oder SA 896 und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 6.Tagesfahrlicht, Standlichtringe und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 7.Parklicht (bei KL0); 8.Abbiegelicht; 9.AHL, Kurvenlicht; 10.Fernlichtassistent (FLA) ; 11.Innenlicht und Klemme VA (manuelle und automatische Innenbeleuchtung wird deaktiviert, inkl. OVT)  - Eingeschränkt |
| 0x04 | Betriebsmode 4 | 1.Tagesfahrlicht, gedimmtes Fernlicht, z.B. Canada und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 2.Tagesfahrlicht, Abblendlicht, z.B. Norwegen, CarKey oder SA 896 und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 3.Tagesfahrlicht, Standlichtringe und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind; 4.Nebelschlußleuchten, NSL bei geöffneten Heckdeckel; 5.Innenlicht und Klemme VA (manuelle und automatische Innenbeleuchtung wird deaktiviert, inkl. OVT); 6.Spiegelheizung bei ASP high  (Fa + Bf)  - Eingeschränkt |
| 0x05 | Betriebsmode 5 | 1.Tagesfahrlicht, gedimmtes Fernlicht, z.B. Canada und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 2.Tagesfahrlicht, Abblendlicht, z.B. Norwegen, CarKey oder SA 896 und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind.; 3.Tagesfahrlicht, Standlichtringe und gefahrene Strecke < 60km. Keine Aktivierung der Sperre mehr möglich wenn mehr als 60 km mit Fzg. zurückgelegt worden sind; 4.Spiegelheizung bei ASP high  (Fa + Bf)  - Eingeschränkt |
| 0x06 | Rollenmode | Keine Einschränkung der Funktionen |
| 0x07 | Fertigungsmode Untermodus 7 | Keine Einschränkung der Funktionen |
| 0x08 | Fertigungsmode Untermodus 8 | Keine Einschränkung der Funktionen |
| 0x09 | Fertigungsmode Untermodus 9 | Keine Einschränkung der Funktionen |
| 0x10 | Fertigungsmode Untermodus 10 | Keine Einschränkung der Funktionen |
| 0x11 | Fertigungsmode Untermodus 11 | Keine Einschränkung der Funktionen |
| 0x12 | Fertigungsmode Untermodus 12 | Keine Einschränkung der Funktionen |
| 0x13 | Fertigungsmode Untermodus 13 | Keine Einschränkung der Funktionen |
| 0x14 | Fertigungsmode Untermodus 14 | Keine Einschränkung der Funktionen |
| 0x15 | Fertigungsmode Untermodus 15 | Keine Einschränkung der Funktionen |
| 0xFF | ungültiger Betriebsmode | ungültig |

### DENORMIERUNGS_GRUND_KUESTER

| NUMMER | TEXT |
| --- | --- |
| 0 | Kein Fehlereintrag |
| 1 | ASCET |
| 2 | Initiallauf |
| 3 | Block oben zu frueh |
| 4 | Block oben zu spaet |
| 5 | Block unten zu frueh |
| 6 | Block unten zu spaet |
| 7 | Hallsensor A defekt |
| 8 | Hallsensor B defekt |
| 9 | Hallfrequenz n.i.O |
| 10 | Hall-Masse |
| 11 | Korrumpierter Parameter |
| 12 | Relais defekt |
| 13 | Hallpulse ohne Ansteuerung |
| 14 | Korrumpiertes EEPROM |
| 15 | Halldrehrichtung unplausibel |
| 16 | EEPROM-Fehler Position |
| 17 | Diagnose Denormierung |
| 18 | Timeout |
| 19 | Thermo 90 Schwelle |
| 20 | Thermo 100 Schwelle |
| 21 | Initialisierungslauf abgebrochen |
| 22 | Emergency-Reversierer |
| 23 | Panik Block |
| 24 | Hallbuffer overrun |
| 25 | Ueberspannung - No drive |
| 26 | Relais open GND |
| 27 | Relais close GND |
| 28 | Relais open Ubat |
| 29 | Relais close Ubat |
| 30 | Relais open Sicherung |
| 31 | Relais close Sicherung |
| 32 | Hall peak |
| 0xXY | undefiniert |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FH_DENORM_FH_POSITION_KUESTER

| NUMMER | TEXT |
| --- | --- |
| 0 | FT steht |
| 1 | FT faehrt |
| 2 | BFT steht |
| 3 | BFT faehrt |
| 0xXY | undefiniert |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027200 | Energiesparmode aktiv | 1 |
| 0x02FF72 | DM_TEST_APPL | 0 |
| 0x030000 | FH FA, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030001 | FH FA, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030002 | FH FA, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030003 | FH FA, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030005 | FH FA, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030006 | FH FA, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030007 | FH FA, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03000A | FH FA: Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03000B | FH FA, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03000E | FH FA, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03000F | FH FA, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030010 | FH FA, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030011 | FH FA, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030012 | FH FA: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030014 | FH FA: Nullposition überfahren, Normierungsverlust | 0 |
| 0x030015 | FH FA: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030016 | FH FA: Kein Motorstart wegen Übertemperatur | 0 |
| 0x030017 | FH FA: Motorlauf wegen Übertemperatur unterbrochen | 0 |
| 0x030018 | FH FA: Kein Motorstart wegen Überspannung | 0 |
| 0x030019 | FH FA: Kodierdaten sind ungültig | 0 |
| 0x03001C | FH FA: Keine Initialisierung aufgrund ungültiger Randbedingungen | 0 |
| 0x03001D | FH FA: Abschaltung Hallversorgung wegen Überspannung | 0 |
| 0x03001E | FH FA: Fehlende Eingangsspannung am Relais: Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030080 | FH BF, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030081 | FH BF, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030082 | FH BF, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030083 | FH BF, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030085 | FH BF, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030086 | FH BF, Hallelement B: Hallelement defekt oder Leitungsunterbrechungj | 0 |
| 0x030087 | FH BF, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03008A | FH BF: Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03008B | FH BF, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03008E | FH BF, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03008F | FH BF, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030090 | FH BF, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030091 | FH BF, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030092 | FH BF: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030094 | FH BF: Nullposition überfahren, Normierungsverlust | 0 |
| 0x030095 | FH BF: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030096 | FH BF: Kein Motorstart wegen Übertemperatur | 0 |
| 0x030097 | FH BF: Motorlauf wegen Übertemperatur unterbrochen | 0 |
| 0x030098 | FH BF: Kein Motorstart wegen Überspannung | 0 |
| 0x030099 | FH BF: Kodierdaten sind ungültig | 0 |
| 0x03009C | FH BF: Keine Initialisierung aufgrund ungültiger Randbedingungen | 0 |
| 0x03009D | FH BF: Abschaltung Hallvorsorgung wegen Überspannung | 0 |
| 0x03009E | FH BF: fehlende Eingangsspannung am Relais: Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x800E81 | Interner Steuergeraetefehler Software | 0 |
| 0x800E82 | Inkonsistenz: Softwareversion und Kodierindex | 0 |
| 0x800E83 | Kodierdaten: Modul nicht kodiert | 0 |
| 0x800E84 | Kodierdaten: Abbruch der Transaktion | 0 |
| 0x800E85 | Kodierdaten: Signaturfehler | 0 |
| 0x800E86 | Kodierdaten: Prüfstempel stimmt nicht mit Fahrgestellnummer überein | 0 |
| 0x800E87 | Kodierdaten: Abbruch aufgrund ungültiger Daten | 0 |
| 0x800E88 | Inkonsistenz: HW-Kodierung und SW-Kodierung unplausibel @@ | 0 |
| 0x800E89 | Energiediagnose | 0 |
| 0x800E8B | Klemme 30A Anschluss fehlerhaft | 0 |
| 0x800E8C | Klemme 30B Anschluss fehlerhaft | 0 |
| 0x800E8D | Klemme 30A Fensterheber ausgefallen | 0 |
| 0x800E8E | Klemme 30B Fensterheber ausgefallen | 0 |
| 0x800E8F | Versorgung ELSV ausgefallen | 0 |
| 0x800E90 | Gestützte Versorgung MSA ausgefallen | 0 |
| 0x800E91 | Kommunikation zu CoProzessor gestört | 0 |
| 0x800E92 | Tiefentladungsschutz der Batterie: Abschaltung Standlicht | 0 |
| 0x800E93 | Tiefentladungsschutz der Batterie: Abschaltung Parklicht | 0 |
| 0x800E96 | Powermanagement: Verbraucherabschaltung Außenspiegelheizung | 1 |
| 0x800E9A | Steuergraetefehler Hardware, Uebertemperatur SCLS 1 | 0 |
| 0x800E9B | Steuergraetefehler Hardware, Uebertemperatur SCLS 2 | 0 |
| 0x800E9C | Steuergraetefehler Hardware, Uebertemperatur SCLS 3 | 0 |
| 0x800E9D | Steuergraetefehler Hardware, Uebertemperatur SCLS 4 | 0 |
| 0x800E9E | Kommunikation zu SCLS gestört | 0 |
| 0x800E9F | SCLS Lampendiagnose eingeschränkt | 0 |
| 0x800EA0 | Klemme 15 fehlt | 0 |
| 0x800EA1 | Bremslichtschalter liefert unplausible Signalwerte | 0 |
| 0x800EA3 | Bedieneinheit Schaltzentrum Tür (SZT): Taster hängt oder Taster Signal ist ungültig | 0 |
| 0x800EA4 | Bedieneinheit Schaltzentrum Tür (SZT): Taster hängt | 1 |
| 0x800EA5 | Bedieneinheit Schaltzentrum Tür (SZT): Taster Signal ist ungültig | 0 |
| 0x800EAB | WBL: Wackelkontakt Warnblinkertaster | 1 |
| 0x800EAC | Warnblinkschalter hängt | 0 |
| 0x800EAD | Schalter Rückwärtsgang defekt | 0 |
| 0x800EB0 | Taster Innenlicht Front hängt oder hat Kurzschluss nach Masse | 0 |
| 0x800EB1 | Taster Innenlicht Fond hängt oder hat Kurzschluss nach Masse | 0 |
| 0x800EB2 | Taster Nebelscheinwerfer oder Nebelschlusslicht hängt | 0 |
| 0x800EB3 | Taster Innenlicht Front Wackelkontakt | 1 |
| 0x800EB6 | Bedieneinheit Licht (BEL): Drehschalter defekt | 0 |
| 0x800EBC | Bedieneinheit Schaltzentrum Tür (SZT): Interner Elektronikfehler | 0 |
| 0x800EBD | Falsche Variante Schaltzentrum Tür (SZT) | 0 |
| 0x800EBF | Schloßnuß 1 hat Kurzschluss nach Ub oder Leitungsbruch | 0 |
| 0x800EC0 | Schloßnuß 1 hat Kurzschluss nach Masse | 0 |
| 0x800EC1 | Schloßnuß (Fahrertür): Mehrfaches Wecken | 1 |
| 0x800EC2 | Schloßnuß 1 hängt | 0 |
| 0x800EC3 | Schloßnuß 1 unplausibles Signal | 0 |
| 0x800EC4 | Schloßnuß 2 hat Kurzschluss nach Ub oder Leitungsbruch | 0 |
| 0x800EC5 | Schloßnuß 2 hat Kurzschluss nach Masse | 0 |
| 0x800EC7 | Schloßnuß 2 hängt | 0 |
| 0x800EC8 | Schloßnuß 2 unplausibles Signal | 0 |
| 0x800ECA | Türkontakt FAT hat Kurzschluss nach Masse | 0 |
| 0x800ECB | Türkontakt FAT Leitungsbruch Kurzschluss nach Ub | 0 |
| 0x800ECC | Türkontakt FAT unplausibles Signal | 0 |
| 0x800ECD | Kontakt Fahrertür: Mehrfaches Wecken | 1 |
| 0x800ECE | Türkontakt BFT hat Kurzschluss nach Masse | 0 |
| 0x800ECF | Türkontakt BFT Leitungsbruch Kurzschluss nach Ub | 0 |
| 0x800ED0 | Türkontakt BFT unplausibles Signal | 0 |
| 0x800ED1 | Kontakt Beifahrertür: Mehrfaches Wecken | 1 |
| 0x800ED2 | Türkontakt FAT_H hat Kurzschluss nach Masse | 0 |
| 0x800ED3 | Türkontakt FAT_H Leitungsbruch Kurzschluss nach Ub | 0 |
| 0x800ED4 | Türkontakt FAT_H unplausibles Signal | 0 |
| 0x800ED5 | Kontakt Fahrertür hinten: Mehrfaches Wecken | 1 |
| 0x800ED6 | Türkontakt BFT_H hat Kurzschluss nach Masse | 0 |
| 0x800ED7 | Türkontakt BFT_H Leitungsbruch oder Kurzschluss nach Ub | 0 |
| 0x800ED8 | Türkontakt BFT_H unplausibles Signal | 0 |
| 0x800ED9 | Kontakt Beifahrertür hinten: Mehrfaches Wecken | 1 |
| 0x800EDB | Signal Redundante FAS-Leitung Open Load | 0 |
| 0x800EDC | Signal Redundante FAS-Leitung Kurzschluss | 0 |
| 0x800EE0 | Bedieneinheit Fahrerassistenzsysteme (BEFAS) Schalter hängt | 0 |
| 0x800EE5 | Bedieneinheit Fahrerassistenzsysteme (BEFAS) (LIN): Funktionsbeleuchtung iBrake defekt | 0 |
| 0x800EE6 | Bedieneinheit Fahrerassistenzsysteme (BEFAS) (LIN): Funktionsbeleuchtung Fahrspurwechselassistent defekt | 0 |
| 0x800EE7 | Falsche Variante Bedieneinheit Fahrerassitenzsysteme (BEFAS), | 0 |
| 0x800EE8 | Bedieneinheit Fahrerassistenzsysteme (BEFAS) Funktionsbeleuchtung TLC defekt | 0 |
| 0x800EE9 | Bedieneinheit Fahrerassistenzsysteme (BEFAS) Funktionsbeleuchtung SARAH defekt | 0 |
| 0x800EF0 | Bedieneinheit Sitzmemory Fahrer: Schalter hängt | 0 |
| 0x800EF4 | Bedieneinheit Sitzmemory Beifahrer: Schalter hängt | 0 |
| 0x800EF8 | Bedieneinheit Sitzmemory Fahrer: Interner Elektronikfehler | 0 |
| 0x800EFA | Bedieneinheit Sitzmemory Beifahrer: Interner Elektronikfehler | 0 |
| 0x800EFC | Falsche Variante Bedieneinheit Sitzmemoryzusatzfunktionen Fahrer | 0 |
| 0x800EFD | Falsche Variante Bedieneinheit Sitzmemoryzusatzfunktionen Beifahrer | 0 |
| 0x800F00 | Leuchtweitenregulierung (LWR): Unterbrechung der Spule im LWR-Motor links oder rechts | 0 |
| 0x800F01 | LWR Überspannung | 0 |
| 0x800F02 | LWR Unterspannung | 0 |
| 0x800F03 | LWR-Treiberfehler | 0 |
| 0x800F04 | Leuchtweitenregulierung (LWR): Kurzschluss an einem oder beiden Schrittmotoren | 0 |
| 0x800F05 | LWR Umgebungsfehler oder Übertemperatur | 0 |
| 0x800F0A | Bremslicht 2 links defekt | 0 |
| 0x800F0B | Bremslicht 2 rechts defekt | 0 |
| 0x800F0C | Ausgang Bremslicht 2 links hat Kurzschluss | 0 |
| 0x800F0D | Ausgang Bremslicht 2 rechts hat Kurzschluss | 0 |
| 0x800F11 | LED-Hauptlicht-Modul (LHM) links: Fehler Steuergeräteintern | 0 |
| 0x800F12 | LED-Hauptlicht-Modul (LHM) rechts: Fehler Steuergeräteintern | 0 |
| 0x800F13 | LED-Hauptlicht-Modul (LHM) links: Defekt LED Abblendlicht | 0 |
| 0x800F14 | LED-Hauptlicht-Modul (LHM) rechts: Defekt LED Abblendlicht | 0 |
| 0x800F15 | LED-Hauptlicht-Modul (LHM) links: Defekt LED Fernlicht | 0 |
| 0x800F16 | LED-Hauptlicht-Modul (LHM) rechts: Defekt LED Fernlicht | 0 |
| 0x800F17 | LED-Hauptlicht-Modul (LHM) links: Fehler Hardwarekodierung LED-Binnings | 0 |
| 0x800F18 | LED-Hauptlicht-Modul (LHM) rechts: Fehler Hardwarekodierung LED-Binnings | 0 |
| 0x800F19 | LED-Hauptlicht-Modul (LHM) links: Kommunikationsfehler Thermomanagement | 0 |
| 0x800F1A | LED-Hauptlicht-Modul (LHM) rechts: Kommunikationsfehler Thermomanagement | 0 |
| 0x800F1B | LED-Hauptlicht-Modul (LHM) links: Übertemperatur Scheinwerfer links | 0 |
| 0x800F1C | LED-Hauptlicht-Modul (LHM) rechts: Übertemperatur Scheinwerfer rechts | 0 |
| 0x800F1D | LED-Hauptlicht-Modul (LHM) links: Defekt Lüfter 1 | 0 |
| 0x800F1E | LED-Hauptlicht-Modul (LHM) rechts: Defekt Lüfter 1 | 0 |
| 0x800F1F | LED-Hauptlicht-Modul (LHM) links: Defekt Lüfter 2 | 0 |
| 0x800F20 | LED-Hauptlicht-Modul (LHM) rechts: Defekt Lüfter 2 | 0 |
| 0x800F21 | LED-Hauptlicht-Modul (LHM) links: Defekt Temperatursensor | 0 |
| 0x800F22 | LED-Hauptlicht-Modul (LHM) rechts: Defekt Temperatursensor | 0 |
| 0x800F23 | LED-Hauptlicht-Modul (LHM) links: Unterspannung LHM links | 0 |
| 0x800F24 | LED-Hauptlicht-Modul (LHM) rechts: Unterspannung LHM rechts | 0 |
| 0x800F25 | LED-Hauptlicht-Modul (LHM) links: Fehler Kl. 30b am LHM links | 0 |
| 0x800F26 | LED-Hauptlicht-Modul (LHM) rechts: Fehler Kl. 30b am LHM rechts | 0 |
| 0x800F28 | Fernlicht links defekt | 0 |
| 0x800F29 | Fernlicht rechts defekt | 0 |
| 0x800F2A | Ausgang Fernlicht links hat Kurzschluss | 0 |
| 0x800F2B | Ausgang Fernlicht rechts hat Kurzschluss | 0 |
| 0x800F2E | Abblendlicht links defekt oder Wiederzündung für Bi-Xenon fehlgeschlagen | 0 |
| 0x800F2F | Abblendlicht rechts defekt oder Wiederzündung für Bi-Xenon fehlgeschlagen | 0 |
| 0x800F30 | Ausgang Abblendlicht links hat Kurzschluss | 0 |
| 0x800F31 | Ausgang Abblendlicht rechts hat Kurzschluss | 0 |
| 0x800F32 | Ein oder mehrere Ausgänge haben Anzahl zulässiger Kurzschlusszyklen ( Kodierbar ) überschritten | 0 |
| 0x800F34 | Positionslicht links defekt | 0 |
| 0x800F35 | Positionslicht rechts defekt | 0 |
| 0x800F36 | Ausgang Positionslicht links hat Kurzschluss | 0 |
| 0x800F37 | Ausgang Positionslicht rechts hat Kurzschluss | 0 |
| 0x800F3A | Nebelscheinwerfer links defekt | 0 |
| 0x800F3B | Nebelscheinwerfer rechts defekt | 0 |
| 0x800F3C | Ausgang Nebelscheinwerfer links hat Kurzschluss | 0 |
| 0x800F3D | Ausgang Nebelscheinwerfer rechts hat Kurzschluss | 0 |
| 0x800F40 | Fahrtrichtungsanzeiger vorne links defekt | 0 |
| 0x800F41 | Fahrtrichtungsanzeiger vorne rechts defekt | 0 |
| 0x800F42 | Ausgang Fahrtrichtungsanzeiger vorne links hat Kurzschluss | 0 |
| 0x800F43 | Ausgang Fahrtrichtungsanzeiger vorne rechts hat Kurzschluss | 0 |
| 0x800F44 | Ausgang Fahrtrichtungsanzeiger Zusatz links hat Kurzschluss | 0 |
| 0x800F45 | Ausgang Fahrtrichtungsanzeiger Zusatz rechts hat Kurzschluss | 0 |
| 0x800F46 | Fahrtrichtungsanzeiger hinten links defekt | 0 |
| 0x800F47 | Fahrtrichtungsanzeiger hinten rechts defekt | 0 |
| 0x800F48 | Ausgang Fahrtrichtungsanzeiger hinten/ Zusatz links hat Kurzschluss | 0 |
| 0x800F49 | Ausgang Fahrtrichtungsanzeiger hinten/ Zusatz rechts hat Kurzschluss | 0 |
| 0x800F4A | Fahrtrichtungsanzeiger 2 vorne links defekt | 0 |
| 0x800F4B | Fahrtrichtungsanzeiger 2 vorne rechts defekt | 0 |
| 0x800F4C | Ausgang Fahrtrichtungsanzeiger 2 vorne links hat Kurzschluß | 0 |
| 0x800F4D | Ausgang Fahrtrichtungsanzeiger 2 vorne rechts hat Kurzschluß | 0 |
| 0x800F50 | Kurzschluss an Bi-Xenon-Klappe | 0 |
| 0x800F56 | Bremslicht links defekt | 0 |
| 0x800F57 | Bremslicht rechts defekt | 0 |
| 0x800F58 | Ausgang Bremslicht links hat Kurzschluss | 0 |
| 0x800F59 | Ausgang Bremslicht rechts hat Kurzschluss | 0 |
| 0x800F5C | Bremslicht Mitte defekt | 0 |
| 0x800F5D | Ausgang Bremslicht Mitte hat Kurzschluss | 0 |
| 0x800F5F | Schlusslicht links innen defekt | 0 |
| 0x800F60 | Schlusslicht rechts innen defekt | 0 |
| 0x800F61 | Ausgang Schlusslicht links innen hat Kurzschluss | 0 |
| 0x800F62 | Ausgang Schlusslicht rechts innen hat Kurzschluss | 0 |
| 0x800F65 | Schlusslicht links außen defekt | 0 |
| 0x800F66 | Schlusslicht rechts außen defekt | 0 |
| 0x800F67 | Ausgang Schlusslicht links außen hat Kurzschluss | 0 |
| 0x800F68 | Ausgang Schlusslicht rechts außen hat Kurzschluss | 0 |
| 0x800F6B | Kennzeichenlicht defekt | 0 |
| 0x800F6C | Ausgang Kennzeichenlicht hat Kurzschluss | 0 |
| 0x800F6E | Ausgang Innenbeleuchtung Front IB_IL hat Kurzschluss | 0 |
| 0x800F6F | Ausgang Innenbeleuchtung Fond IB_IL_2 hat Kurzschluss | 0 |
| 0x800F70 | Ausgang Color Switch KL58g Amb1 hat Kurzschluss | 0 |
| 0x800F71 | Ausgang Color Switch KL58g Amb2 hat Kurzschluss | 0 |
| 0x800F72 | Ausgang Klemme VA hat Kurzschluss | 0 |
| 0x800F74 | Nebelschlusslicht links defekt | 0 |
| 0x800F75 | Nebelschlusslicht rechts defekt | 0 |
| 0x800F76 | Ausgang Nebelschlusslicht links hat Kurzschluss | 0 |
| 0x800F77 | Ausgang Nebelschlusslicht rechts hat Kurzschluss | 0 |
| 0x800F7A | Rueckfahrlicht links defekt | 0 |
| 0x800F7B | Rueckfahrlicht rechts defekt | 0 |
| 0x800F7C | Ausgang Rückfahrlicht links hat Kurzschluss | 0 |
| 0x800F7D | Ausgang Rückfahrlicht rechts hat Kurzschluss | 0 |
| 0x800F80 | BFD links defekt | 0 |
| 0x800F81 | BFD rechts defekt | 0 |
| 0x800F82 | Ausgang BFD links hat Kurzschluss | 0 |
| 0x800F83 | Ausgang BFD rechts hat Kurzschluss | 0 |
| 0x800F86 | Tagfahrlicht / Positionslicht links defekt | 0 |
| 0x800F87 | Tagfahrlicht / Positionslicht rechts defekt | 0 |
| 0x800F88 | Ausgang Tagfahrlicht / Positionslicht links hat Kurzschluss | 0 |
| 0x800F89 | Ausgang Tagfahrlicht / Positionslicht rechts hat Kurzschluss | 0 |
| 0x800F8A | Tagfahrlicht Sperre Aktiv | 0 |
| 0x800F8C | Abbiegelicht links defekt | 0 |
| 0x800F8D | Abbiegelicht rechts defekt | 0 |
| 0x800F8E | Ausgang Abbiegelicht links hat Kurzschluss | 0 |
| 0x800F8F | Ausgang Abbiegelicht rechts hat Kurzschluss | 0 |
| 0x800F92 | Welcome Light Wiederholsperre aktiv | 0 |
| 0x800F93 | Heimleuchten Wiederholsperre aktiv | 0 |
| 0x800F94 | Ausgang Klemme 58g hat Kurzschluss | 0 |
| 0x800F96 | Ausgang Türwarnleuchten / Einstiegsleuchten Kurzschluss | 0 |
| 0x800F98 | Ausgang Vorfeldbeleuchtung (OVT) hat Kurzschluss | 0 |
| 0x800F9A | Vorfeldbeleuchtung (OVT) Thermoschutz hat ausgelöst | 0 |
| 0x800F9B | ELSV Plausibilisierung Leitungsbruch Hallsensor Länge | 0 |
| 0x800F9C | ELSV Hallsensor Vertikalverstellung Kurzschluss nach Masse | 0 |
| 0x800F9D | ELSV Leitungsunterbrechung Motor Länge | 0 |
| 0x800F9F | ELSV Plausibilisierung Leitungsbruch Hallsensor Neigung | 0 |
| 0x800FA0 | ELSV Hallsensor Horizontalverstellung Kurzschluss nach Masse | 0 |
| 0x800FA1 | ELSV Leitungsunterbrechung Motor Neigung | 0 |
| 0x800FA3 | ELSV Relaiskleber | 0 |
| 0x800FA5 | ELSV maximale Anzahl Blockfahrten überschritten | 0 |
| 0x800FA7 | ELSV Überspannung | 0 |
| 0x800FA8 | ELSV Unterspannung | 0 |
| 0x800FA9 | ELSV Horizontalverstellung Thermoschutz hat ausgelöst | 0 |
| 0x800FAA | ELSV Vertikalverstellung Thermoschutz hat ausgelöst | 0 |
| 0x800FAB | ELSV Geringer Widerstand zwischen den Zuleitungen Motor Länge | 0 |
| 0x800FAC | ELSV Geringer Widerstand zwischen den Zuleitungen Motor Neigung | 0 |
| 0x800FAE | Außenspiegel links, Antrieb: Endanschlag nicht erreicht | 0 |
| 0x800FAF | Außenspiegel rechts, Antrieb: Endanschlag nicht erreicht | 0 |
| 0x800FB0 | Antrieb Außenspiegel links defekt | 0 |
| 0x800FB1 | Antrieb Außenspiegel rechts defekt | 0 |
| 0x800FB2 | Antrieb Beiklappen Außenspiegel links defekt | 0 |
| 0x800FB3 | Antrieb Beiklappen Außenpiegel rechts defekt | 0 |
| 0x800FB4 | Außenspiegel links Poti defekt | 0 |
| 0x800FB5 | Außenspiegel rechts Poti defekt | 0 |
| 0x800FB6 | Außenspiegelheizung oder Elektro.-Crome links defekt | 0 |
| 0x800FB7 | Außenspiegelheizung oder Elektro.-Crome rechts defekt | 0 |
| 0x800FB8 | Außenspiegel Überspannung | 0 |
| 0x800FB9 | Außenspiegel Unterspannung | 0 |
| 0x800FBA | Außenspiegelheizung links/rechts Unterspannung | 0 |
| 0x800FBB | Außenspiegel links/rechts Übertemperatur | 0 |
| 0x800FBC | Außenspiegel-Beiklappen Wiederholsperre aktiv | 0 |
| 0x800FBD | Aussenspiegel rechts: Fahrspurwechselwarnung meldet Defekt im Spiegel | 0 |
| 0x800FBE | Außenspiegel links, Spurwechselwarnung (HC2): Funktion nicht verfügbar | 0 |
| 0x800FBF | Außenspiegel rechts, Spurwechselwarnung (HC2): Funktion nicht verfügbar | 0 |
| 0x800FC0 | TMS links: LWR Fehler | 0 |
| 0x800FC1 | TMS rechts: LWR Fehler | 0 |
| 0x800FC2 | Treiber-Modul Scheinwerfer (TMS) rechts: Kodierfehler oder timeout | 0 |
| 0x800FC3 | Treiber-Modul Scheinwerfer (TMS) links: Kodierfehler oder timeout | 0 |
| 0x800FC4 | Treiber-Modul Scheinwerfer (TMS) rechts: Umgebungsfehler (Über-/Unterspannung, Übertemperatur | 0 |
| 0x800FC5 | Treiber-Modul Scheinwerfer (TMS) links: Umgebungsfehler (Über-/Unterspannung, Übertemperatur | 0 |
| 0x800FC6 | Treiber-Modul Scheinwerfer (TMS) rechts: Interner Fehler | 0 |
| 0x800FC7 | Treiber-Modul Scheinwerfer (TMS) links: Interner Fehler | 0 |
| 0x800FC8 | LM_LIN Busfehler TMS links | 0 |
| 0x800FC9 | LM_LIN Busfehler TMS rechts | 0 |
| 0x800FCA | LWR-Potenziometer: Werte unplausibel | 0 |
| 0x800FCB | Scheinwerfer (TMS) links defekt | 0 |
| 0x800FCD | Ausgang Treiber-Modul Scheinwerfer (TMS) links hat Kurzschluss | 0 |
| 0x800FCE | Scheinwerfer (TMS) rechts defekt | 0 |
| 0x800FCF | Ausgang Treiber-Modul Scheinwerfer (TMS) rechts hat Kurzschluss | 0 |
| 0x800FD0 | Design-/Seitenmarkierungsleuchte links defekt | 0 |
| 0x800FD1 | Design-/Seitenmarkierungsleuchte links hat Kurzschluss | 0 |
| 0x800FD2 | Design-/Seitenmarkierungsleuchte rechts defekt | 0 |
| 0x800FD3 | Design-/Seitenmarkierungsleuchte rechts hat Kurzschluss | 0 |
| 0x800FD6 | LED-Hauptlicht-Modul (LHM2) links: Unplausibler Zustand Abblendlichtfunktion | 0 |
| 0x800FD7 | LED-Hauptlicht-Modul (LHM2) rechts: Unplausibler Zustand Abblendlichtfunktion | 0 |
| 0x800FD8 | Treibermodul Scheinwerfer (TMS3) links: Unplausibles Verhalten Blinkfunktion | 0 |
| 0x800FD9 | Treibermodul Scheinwerfer (TMS3) rechts: Unplausibles Verhalten Blinkfunktion | 0 |
| 0x800FDA | Night Vision Personen meldet Fehler | 1 |
| 0x800FDB | iBrake meldet Fehler | 1 |
| 0x800FDC | TLC meldet Fehler | 1 |
| 0x800FE0 | Parklichtabschaltung 12h | 0 |
| 0x800FE1 | Standlichtabschaltung 12h | 0 |
| 0x800FE2 | Lichtnotlauf mit Klemme 15 aktiv | 0 |
| 0x800FE3 | Lichtnotlauf mit Geschwindigkeit aktiv | 0 |
| 0x800FF0 | SMO Überspannung, Unterspannung oder Stromverbrauch zu hoch | 1 |
| 0x800FF1 | SMO Fehler Sensorelektrode oben | 0 |
| 0x800FF2 | SMO Fehler Sensorelektrode unten | 0 |
| 0x800FF3 | SMO Peripheriefehler 3 | 0 |
| 0x800FF4 | SMO Interner Fehler | 0 |
| 0x800FF5 | SMO Stoerschutz dauerhaft aktiv | 0 |
| 0x800FF6 | SMO Stoerschutz temporaer aktiv | 0 |
| 0x800FF7 | SMO Spielschutz bis zum naechsten Motorstart war aktiv | 1 |
| 0x800FF8 | SMO Spielschutz temporär aktiv | 1 |
| 0x800FF9 | SMO: Parametrierung fehlerhaft | 0 |
| 0xE5845F | Body-CAN: Physikalischer Busfehler | 0 |
| 0xE58460 | Telegramm Anzeige Warnung Fahrspurwechsel Timeout  CTR_DISP_WARN_LNCH (901/385h) | 1 |
| 0xE58461 | Telegramm Abschaltung Klemme Abblendlicht timeout SWO_KL_DIPB(456/1C8h) | 1 |
| 0xE58462 | Ungültiges Telegramm Abschaltung_Klemmme_Abblendicht SWO_KL_DIPB(456/1C8h) | 1 |
| 0xE58463 | Ungültiges Telegramm Bedienung_Lenkstocktaster BEDIENUNG_LENKSTOCK (494/1EEh) | 1 |
| 0xE58468 | Body-CAN: Hardwarefehler, Protokollfehler oder Bus-OFF | 0 |
| 0xE58500 | Telegramm Status DSC Timeout ST_STAB_DSC(371/173h) | 1 |
| 0xE58501 | Telegramm Bedienung Lenkstock Timeout BEDIENUNG_LENKSTOCK(494/1EEh) | 0 |
| 0xE58502 | Telegramm Höhenstand Fahrzeug gefiltert Timeout HGLV_VEH_FILT (228/E4h) | 0 |
| 0xE58503 | Telegramm Bedienung Lenksäulenverstellung Timeout BEDIENUNG_LENKSAEULE(490/1EA) | 0 |
| 0xE58504 | Telegramm Steuerung Elektrochrom Abblenden Timeout CTR_EC_ABBLENDEN(646/286h) | 0 |
| 0xE58505 | Telegramm Steuerung Fernlicht-Assistent Timeout CTR_MAB_ASST (658 / 292h) | 0 |
| 0xE58506 | Telegramm Status-AHM Timeout STAT_ANHAENGER(740/2E4h) | 0 |
| 0xE58507 | Ungültiges CAN-Signal Geschwindigkeit_Fahrzeug_Schwerpunkt (V_VEH_COG) | 0 |
| 0xE58508 | Telegramm Status Fahrlicht Timeout STAT_FAHRLICHT(788/314h) | 0 |
| 0xE58509 | Telegramm Geschwindigkeit Timeout V_VEH(417/1A1h) | 0 |
| 0xE5850A | Telegramm Gierrate Timeout VYAW_VEH(415/19Fh) | 0 |
| 0xE5850B | Telegramm Klemmenstatus Timeout KLEMMEN(303/12Fh) | 0 |
| 0xE5850C | Ungültige Telegramm Status Fahrlicht STAT_FAHRLICHT(788/314) | 0 |
| 0xE5850D | Ungültige Telegram Klemmen KLEMMEN(303/12F) | 0 |
| 0xE5850E | Telegramm Crash Timeout CRASH (510 / 1FEh) | 0 |
| 0xE5850F | Ungültige Telegramm Daten Antriebsstrang 2 DT_PT_2(1017/3F9h) | 0 |
| 0xE58510 | Telegramm Daten Antriebsstrang 2 Timeout DT_PT_2(1017/3F9h) | 0 |
| 0xE58511 | Telegramm Powermanagement Verbrauchersteuerung Timeout POWERMGMT_CTR_COS(947 / 3B3h) | 0 |
| 0xE58512 | Telegramm Lenkwinkel Vorderachse Effektiv Timeout STEA_FTAX_EFFV(770/302h) | 0 |
| 0xE58513 | Ungültiges CAN-Signal Lenkwinkel_Vorderachse_effektiv (STEA_FTAX_EFFV) | 0 |
| 0xE58514 | Ungültiges CAN-Signal Giergeschwindigkeit_Fahrzeug (VYAW_VEH) | 0 |
| 0xE58515 | Ungültige CAN-Signale Höhenstand_Fahrzeug_gefiltert vorn / hinten (HGLV_VEH_FILT_RLH, HGLV_VEH_FILT_RRH, HGLV_VEH_FILT_FLH, HGLV_VEH_FILT_FRH) | 1 |
| 0xE58516 | Precrash CRC Fehler | 0 |
| 0xE58517 | Telegramm Precrash Timeout | 0 |
| 0xE58518 | Telegramm Objektdaten stufenloser Fernlicht-Assistent Timeout (149/95h) | 1 |
| 0xE58520 | LED-Hauptlicht-Modul (LHM2) links: Timeout Statusbotschaft ST_LP_EX_FE_2_LH (1FBh) | 1 |
| 0xE58521 | LED-Hauptlicht-Modul (LHM2) rechts: Timeout Statusbotschaft ST_LP_EX_FE_2_RH (1FDh) | 1 |
| 0xE58522 | Treibermodul Scheinwerfer (TMS3) links: Timeout Statusbotschaft ST_LP_EX_FE_1_LH (1E0h) | 1 |
| 0xE58523 | Treibermodul Scheinwerfer (TMS3) rechts: Timeout Statusbotschaft ST_LP_EX_FE_1_RH (1E0h) | 1 |
| 0xE58524 | Telegramm Status NiVI Timeout STA_NIVI(545/21Eh) | 1 |
| 0xE58526 | Telegramm Anzeige_LDM_2 Timeout DISP_LDM_2(827/33Bh) | 1 |
| 0xE58528 | Telegramm Status Spurverlassenswarnsystem Timeout ST_TLC(807/327h) | 1 |
| 0xE58530 | Ungültige Signale LED-Hauptlicht-Modul (LHM2) links: Statusbotschaft ST_LP_EX_FE_2_LH (1FBh) | 1 |
| 0xE58531 | Ungültige Signale LED-Hauptlicht-Modul (LHM2) rechts Statusbotschaft ST_LP_EX_FE_2_RH (1FDh) | 1 |
| 0xE58532 | Ungültige Signale Treibermodul Scheinwerfer (TMS3) links: Statusbotschaft ST_LP_EX_FE_1_LH (1E0h) | 1 |
| 0xE58533 | Ungültige Signale Treibermodul Scheinwerfer (TMS3) rechts: Statusbotschaft ST_LP_EX_FE_1_RH (1E6h) | 1 |
| 0xE58534 | Telegramm Anzeige_Fahrerasistenzsystem Timeout DISP_DRASY(796/31Ch) | 1 |
| 0xE58BFF | DM_TEST_COM | 1 |
| 0xE58C3D | Aussenspiegel ( ASP): Nicht erwarteter LIN Slave | 0 |
| 0xE58C3E | K_LIN_1 Bus Error Außenspiegel links | 0 |
| 0xE58C3F | K_LIN_1 Bus Error Außenspiegel rechts | 0 |
| 0xE58C42 | K_LIN_1 Bus Error Bedieneinheit Schaltzentrum Tür ( SZT ) | 0 |
| 0xE58C43 | K_LIN_1 Bus Error Bedieneinheit Sitzmemory Beifahrer | 0 |
| 0xE58C44 | K_LIN_1 Bus Error Bedieneinheit Sitzmemory Fahrer | 0 |
| 0xE58C4A | Bedienteil Sitzmemoryzusatzfunktionen Fahrer: Nicht erwarteter LIN Slave | 0 |
| 0xE58C4B | Bedienteil Sitzmemoryzusatzfunktionen Fahrer: Nicht erwarteter LIN Slave | 0 |
| 0xE58D5D | Bedieneinheit Fahrerassitenzsysteme (BEFAS/SARAH): Nicht erwarteter LIN Slave | 0 |
| 0xE58D5E | K_LIN_8 Bus Error Bedieneinheit Licht (BEL) | 0 |
| 0xE58D5F | K_LIN_8 Bus Error Bedieneinheit Fahrerasistentsysteme (BE_FAS) | 0 |
| 0xE58D60 | K_LIN_8 Bus Anzahl unberechtigtes Aufstarten überschritten | 0 |
| 0xE58D62 | K_LIN_8 Bus Error Smart-Opener(SMO) | 0 |
| 0xE58D63 | Smart-Opener (SMO): Nicht erwarteter LIN Slave | 0 |
| 0xE58E7E | Timeout LIN-Statusbotschaft LED-Hauptlicht-Modul (LHM) links | 0 |
| 0xE58E7F | Timeout LIN-Statusbotschaft LED-Hauptlicht-Modul (LHM) rechts | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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
| 0x02FF72 | DM_TEST_APPL | 0 |
| 0x721001 | Botschaftsausfall Zeitbotschaft | 0 |
| 0x722001 | NvM: Write failed | 0 |
| 0x722002 | NvM: Read failed | 0 |
| 0x722003 | NvM: Control failed | 0 |
| 0x722004 | NvM: Erase failed | 0 |
| 0x722006 | NvM: Write alle failed | 0 |
| 0x722007 | NvM: Read alle failed | 0 |
| 0x722010 | NvM: Wrong config ID | 0 |
| 0x722847 | Pia: IO error | 0 |
| 0x723000 | Kommunikation zu CoProzessor gestört | 0 |
| 0x723001 | Inkompatible Coproz SW Version | 0 |
| 0x723002 | Kommunikation zu SCLS gestört | 0 |
| 0x723003 | Überlauf vom Reset-Zähler des CoPs | 0 |
| 0x723004 | Signal vom Regenlichtsensor unplausibel | 0 |
| 0x723005 | Reset Steuergerät aufgrund von Fehlerereignissen | 0 |
| 0x723006 | Interner Fehler Blinkermodell bei Blinken links | 0 |
| 0x723007 | Interner Fehler Blinkermodell bei Blinken rechts | 0 |
| 0x723010 | Kodierung: DualSpannung Parameter unplausibel | 0 |
| 0x723011 | Kodierung: LoadDump Parameter unplausibel | 0 |
| 0x723012 | Kodierung: Lampenmapping unplausibel | 0 |
| 0x723013 | Kodierung: Ueff Parameter unplausibel | 0 |
| 0x723020 | Referenzlaufdurchführung ungültig oder nicht erfolgreich aufgrund von Falschkodierung | 0 |
| 0x723030 | Interner Steuergeraetefehler ROM defekt | 0 |
| 0x723031 | Interner Steuergeraetefehler RAM defekt | 0 |
| 0x723032 | Interner Steuergeraetefehler Abschaltung Türkontakt Hallsensor Versorgung | 0 |
| 0x723033 | Interner Steuergeraetefehler Abschaltung Schlossnuss Hallsensor Versorgung | 0 |
| 0x723034 | Interner Steuergeraetefehler Abschaltung ELSV Hallsensor Versorgung | 0 |
| 0x723035 | Interner Steuergeraetefehler Abschaltung Fensterheber Hallsensor FA  Versorgung | 0 |
| 0x723036 | Interner Steuergeraetefehler Abschaltung Fensterheber Hallsensor BF  Versorgung | 0 |
| 0x723037 | Interner Steuergeraetefehler SCLS HW KL15 Ueberpruefung fehlgeschlagen | 0 |
| 0x723050 | RfR Externer WD | 0 |
| 0x723052 | RfR SC WD-Manager | 0 |
| 0x723053 | RfR Illegal Address Access | 0 |
| 0x723054 | RfR OSEK Shutdown | 0 |
| 0x723055 | RfR Stack Underflow | 0 |
| 0x723056 | RfR Stack Overflow | 0 |
| 0x723057 | RfR Invalid Interrupt | 0 |
| 0x723060 | Modell Light Assistance Master konnte nicht vollständig abgearbeitet werden | 0 |
| 0x723080 | Kommunikation zum Coprozessor : Hardwarefehler | 0 |
| 0x723081 | Kommunikation zum Coprozessor  Softwarefehler | 0 |
| 0x723082 | Kommunikation zum Coprozessor  Paritätsfehler bei der Antwort | 0 |
| 0x723083 | Kommunikation zum Coprozessor  Falscher Botschaftszähler bei der Antwort | 0 |
| 0x723084 | Kommunikation zum Coprozessor  Falsche Antwort-ID | 0 |
| 0x723085 | Kommunikation zum Coprozessor  Übertragung der Codierdaten fehlgeschlagen | 0 |
| 0x723086 | Kommunikation zum Coprozessor  Mode-Umschaltung fehlgeschlagen | 0 |
| 0x723087 | Kommunikation zum Coprozessor  Paritätsfehler des Kommandos | 0 |
| 0x723088 | Kommunikation zum Coprozessor  Angeforderter Modus nicht im gültigen Bereich | 0 |
| 0x723089 | Kommunikation zum Coprozessor  Angefordertes Input Package nicht im gültigen Bereich | 0 |
| 0x72308A | Kommunikation zum Coprozessor  Dieser Befehl ist nicht erlaubt. | 0 |
| 0x72308B | Kommunikation zum Coprozessor gestört: Unerwarteter WriteFlow-Befehl | 0 |
| 0x72308C | Kommunikation zum Coprozessor gestört: Zu viele WriteFlow-Befehle | 0 |
| 0x72308D | Kommunikation zum Coprozessor gestört: Falsche CRC über Codierdaten | 0 |
| 0x72308E | Kommunikation zum Coprozessor gestört: Ungültige Lese-Adresse | 0 |
| 0x72308F | Kommunikation zum Coprozessor gestört: Falscher Botschaftszähler der Master-Message | 0 |
| 0x723090 | Kommunikation zum Coprozessor gestört: Falsche Adresse beim WriteStart-Befehl | 0 |
| 0x723091 | Kommunikation zum Coprozessor gestört: Zu viele SwitchMode DELAY | 0 |
| 0x723100 | TMS-SG links Fehlerdetails: Watchdog defekt | 0 |
| 0x723101 | TMS-SG links Fehlerdetails: LWR-Motor defekt | 0 |
| 0x723102 | TMS-SG links Fehlerdetails: AHL-Motor defekt | 0 |
| 0x723103 | TMS-SG links Fehlerdetails: Treiber FRAZ defekt | 0 |
| 0x723104 | TMS-SG links Fehlerdetails: Treiber DL defekt | 0 |
| 0x723105 | TMS-SG links Fehlerdetails: Treiber SML defekt | 0 |
| 0x723106 | TMS-SG links Fehlerdetails: Treiber Lichtring meldet defekt (im F01 POL) | 0 |
| 0x723107 | TMS-SG links Fehlerdetails: DC-DC-Wandler defekt | 0 |
| 0x723108 | TMS-SG links Fehlerdetails: Flashspeicherfehlerwarnung | 0 |
| 0x723109 | TMS-SG links Fehlerdetails: Blinkerplausibilisierungsfehler | 0 |
| 0x72310A | TMS-SG links Fehlerdetails: Fehlerspeicher löschen nicht möglich | 0 |
| 0x72310B | TMS-SG links Fehlerdetails: Lichtsteuer Timeout (Blinker, Lichtring, Designleuchte, Seitenmarkierungsleuchte) | 0 |
| 0x723110 | TMS-SG rechts Fehlerdetails: Watchdog defekt | 0 |
| 0x723111 | TMS-SG rechts Fehlerdetails: LWR-Motor defekt | 0 |
| 0x723112 | TMS-SG rechts Fehlerdetails: AHL-Motor defekt | 0 |
| 0x723113 | TMS-SG rechts Fehlerdetails: Treiber FRAZ defekt | 0 |
| 0x723114 | TMS-SG rechts Fehlerdetails: Treiber DL defekt | 0 |
| 0x723115 | TMS-SG rechts Fehlerdetails: Treiber SML defekt | 0 |
| 0x723116 | TMS-SG rechts Fehlerdetails: Treiber Lichtring meldet defekt (im F01 POL) | 0 |
| 0x723117 | TMS-SG rechts Fehlerdetails: DC-DC-Wandler defekt | 0 |
| 0x723118 | TMS-SG rechts Fehlerdetails: Flashspeicherfehlerwarnung | 0 |
| 0x723119 | TMS-SG rechts Fehlerdetails: Blinkerplausibilisierungsfehler | 0 |
| 0x72311A | TMS-SG rechts Fehlerdetails: Fehlerspeicher löschen nicht möglich | 0 |
| 0x72311B | TMS-SG rechts Fehlerdetails: Lichtsteuer Timeout (Blinker, Lichtring, Designleuchte, Seitenmarkierungsleuchte) | 0 |
| 0x724000 | FH FA: Relais Öffnen/Schliessen Ausgangsspannung am falschen Relais | 0 |
| 0x724001 | FH FA: Reversierung im Panik-Modus | 0 |
| 0x724002 | FH FA: Reversierung im EM-Modus | 0 |
| 0x724003 | FH FA: Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt. | 0 |
| 0x724080 | FH BF: Relais Öffnen/Schliessen Ausgangsspannung am falschen Relais | 0 |
| 0x724081 | FH BF: Reversierung im Panik-Modus | 0 |
| 0x724082 | FH BF: Reversierung im EM-Modus | 0 |
| 0x724083 | FH BF: Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt. | 0 |
| 0x800E9E | Kommunikation zu SCLS gestört | 0 |
| 0xC90401 | DM: Queue full | 0 |
| 0xC90402 | DM: Queue deleted | 0 |
| 0xE89400 | Telegramm Fahrzeugzustand Timeout FZZSTD(928/3A0h) | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xCC | ERROR_SELECTED_LIGHT |
| 0xXT | ERROR_ARGUMENT_LAMPE |
| 0xXU | ERROR_MISSING_ARGUMENT |
| 0xXV | ERROR_BAUREIHE |
| 0xXW | ERROR_KENNLINIE |
| 0xXX | ERROR_ELEMENT |
| 0xXZ | ERROR_BEWERTUNG |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4910

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRDAUER_WERT | h | high | unsigned int | - | - | 10.0 | 60.0 | 0.0 | Akkumulierte Fahrzeit (Fahrten < 10 min werden verworfen) |
| STAT_FAHRZYKLEN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrzyklen > 10 min |
| STAT_SARAH_TASTER_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl SARAH Tastendrücke |
| STAT_SARAH_CONFIG_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Konfigurationen |
| STAT_SARAH_CONFIG_DIREKT_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Konfigurationen über Einstellungsmenu (letzte Tastenbedienung mehr als 5 min zurückliegend) |
| STAT_RESERVE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XA071

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_NORMIERUNG_GESTARTET_NR | - | - | + | 0-n | - | char | - | TAB_ELSV_NORMIERVORGANG | 1.0 | 1.0 | 0.0 | Aktueller Zustand der Initialisierung |

### RES_0XA179

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INIT_VORGANG_FA_NR | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_INIT_VORGANG_BF_NR | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_INIT_VORGANG_FAH_NR | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_INIT_VORGANG_BFH_NR | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_EINLERNVORGANG | - | - | - | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### RES_0XA17E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_MOTORSTOP_REASON_NR | - | - | + | 0-n | high | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |
| STAT_FH_BF_MOTORSTOP_REASON_NR | - | - | + | 0-n | high | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |
| STAT_FH_FAH_MOTORSTOP_REASON_NR | - | - | + | 0-n | high | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |
| STAT_FH_BFH_MOTORSTOP_REASON_NR | - | - | + | 0-n | high | unsigned char | - | TAB_MOTORSTOP_REASON | - | - | - | Zustand des Motors |

### RES_0XA322

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_NR | - | - | + | 0-n | - | char | - | TAB_SPIEGELSELBSTTEST | 1.0 | 1.0 | 0.0 | Status Spiegeltest |
| STAT_SELBSTTEST_FC_NR | - | - | + | 0-n | - | char | - | TAB_SPIEGELSELBSTTEST_INTERN | 1.0 | 1.0 | 0.0 | Ausgabe interner Fehler |

### RES_0XD072

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_MOTOR_HOEHE_NR | 0-n | - | char | - | TAB_ELSV_MOTOR | 1.0 | 1.0 | 0.0 | Zustand des Motors |
| STAT_ELSV_MOTOR_LAENGE_NR | 0-n | - | char | - | TAB_ELSV_MOTOR | 1.0 | 1.0 | 0.0 | Zustand des Motors |
| STAT_ELSV_MOTORSTROM_HOEHE_WERT | A | - | char | - | - | 1.0 | 1.0 | 0.0 | Motorstrom |
| STAT_ELSV_MOTORSTROM_LAENGE_WERT | A | - | char | - | - | 1.0 | 1.0 | 0.0 | Motorstrom |
| STAT_ELSV_IO_HALL_MOTOR_HOEHE_NR | 0-n | - | char | - | TAB_ELSV_HALL | 1.0 | 1.0 | 0.0 | Zustand des Hall-Elements |
| STAT_ELSV_IO_HALL_MOTOR_LAENGE_NR | 0-n | - | char | - | TAB_ELSV_HALL | 1.0 | 1.0 | 0.0 | Zustand des Hall-Elements |

### RES_0XD087

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZ_NORMIERUNGEN_WERT | Ink | - | char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Normierungen |
| STAT_ELSV_ANZ_BLOCKFAHRTEN_EINGEFAHREN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Block |
| STAT_ELSV_ANZ_BLOCKFAHRTEN_AUSGEFAHREN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Block |
| STAT_ELSV_ANZ_BLOCKFAHRTEN_OBEN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Block |
| STAT_ELSV_ANZ_BLOCKFAHRTEN_UNTEN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Block |
| STAT_ELSV_ANZ_SOFTSTOPP_EINGEFAHREN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Softstop |
| STAT_ELSV_ANZ_SOFTSTOPP_AUSGEFAHREN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Softstop |
| STAT_ELSV_ANZ_SOFTSTOPP_OBEN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Softstop |
| STAT_ELSV_ANZ_SOFTSTOPP_UNTEN_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Softstop |
| STAT_ELSV_BETRIEBSSEKUNDEN_WERT | s | - | int | - | - | 1.0 | 1.0 | 0.0 | Betriebssekunden |

### RES_0XD088

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_NORMIERUNG_OBEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Softstop ELSV oben  0: nicht normiert  1: normiert |
| STAT_ELSV_NORMIERUNG_UNTEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Softstop ELSV unten  0: nicht normiert  1: normiert |
| STAT_ELSV_NORMIERUNG_EINGEFAHREN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Softstop ELSV eingefahren  0: nicht normiert  1: normiert |
| STAT_ELSV_NORMIERUNG_AUSGEFAHREN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Softstop ELSV ausgefahren  0: nicht normiert  1: normiert |

### RES_0XD089

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_POS_HOEHE_WERT | Digit | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Realtivwert vertikale Achse |
| STAT_ELSV_POS_LAENGE_WERT | Digit | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Realtivwert horizontale Achse |
| STAT_ELSV_BEWEGUNG_OBEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht nach oben  1: ELSV fährt nach oben |
| STAT_ELSV_BEWEGUNG_UNTEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht nach unten  1: ELSV fährt nach unten |
| STAT_ELSV_BEWEGUNG_EINGEFAHREN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht ein (vorne)  1: ELSV fährt ein (vorne) |
| STAT_ELSV_BEWEGUNG_AUSGEFAHREN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht aus (hinten)  1: ELSV fährt nach aus (hinten) |
| STAT_ELSV_SOFTSTOP_OBEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop oben erreicht |
| STAT_ELSV_SOFTSTOP_UNTEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop unten erreicht |
| STAT_ELSV_SOFTSTOP_EINGEFAHREN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop eingefahren erreicht |
| STAT_ELSV_SOFTSTOP_AUSGEFAHREN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop ausgefahren erreicht |

### RES_0XD181

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_MAX_POSITION_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Position Fensterheber Beifahrer (NUR bei  eingelerntem FH)  0: Fenster ungueltiger Zustand  >1: Fenster im gueltigen Zustand (max. Wert bei Fenster geschlossen) Max: >>Ist vom Lieferanten im Kommentar anzugeben !!!<< |
| STAT_FH_BF_POSITION_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Fensterheber Beifahrer (NUR bei eingelerntem FH Max: >>Ist vom Lieferanten im Kommentar anzugeben !!!<< |

### RES_0XD188

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_TASTERFA_FA_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer 0: Taster nicht in Stellung AUF 1: Taster in Stellung AUF |
| STAT_FH_TASTERFA_FA_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer 0: Taster nicht in Stellung ZU 1: Taster in Stellung ZU |
| STAT_FH_TASTERFA_FA_MAUT_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer 0: Taster nicht in Stellung MAUT AUF 1: Taster in Stellung MAUT AUF |
| STAT_FH_TASTERFA_FA_MAUT_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock: Taster Fahrer 0: Taster nicht in Stellung MAUT ZU 1: Taster in Stellung MAUT ZU |
| STAT_FH_TASTERFA_FA_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Tastenblock Fahrerseite: VS-Result Taster Fahrer siehe Tabelle |
| STAT_FH_TASTERFA_BF_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer 0: Taster nicht in Stellung AUF 1: Taster in Stellung AUF |
| STAT_FH_TASTERFA_BF_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer 0: Taster nicht in Stellung ZU 1: Taster in Stellung ZU |
| STAT_FH_TASTERFA_BF_MAUT_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer 0: Taster nicht in Stellung MAUT AUF 1: Taster in Stellung MAUT AUF |
| STAT_FH_TASTERFA_BF_MAUT_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer 0: Taster nicht in Stellung MAUT ZU 1: Taster in Stellung MAUT ZU |
| STAT_FH_TASTERFA_BF_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Fahrerseite (Tastenblock): VS- Result Taster Beifahrer siehe Tabelle |
| STAT_FH_TASTERFA_FAH_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer hinten 0: Taster nicht in Stellung AUF 1: Taster in Stellung AUF |
| STAT_FH_TASTERFA_FAH_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer hinten 0: Taster nicht in Stellung ZU 1: Taster in Stellung ZU |
| STAT_FH_TASTERFA_FAH_MAUT_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer hinten 0: Taster nicht in Stellung MAUT AUF 1: Taster in Stellung MAUT AUF |
| STAT_FH_TASTERFA_FAH_MAUT_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer hinten 0: Taster nicht in Stellung MAUT ZU 1: Taster in Stellung MAUT ZU |
| STAT_FH_TASTERFA_FAH_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Fahrerseite (Tastenblock: VS-Result Taster Fahrer hinten siehe Tabelle |
| STAT_FH_TASTERFA_BFH_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer hinten 0: Taster nicht in Stellung AUF 1: Taster in Stellung AUF |
| STAT_FH_TASTERFA_BFH_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer hinten 0: Taster nicht in Stellung ZU 1: Taster in Stellung ZU |
| STAT_FH_TASTERFA_BFH_MAUT_AUF | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer hinten 0: Taster nicht in Stellung MAUT AUF 1: Taster in Stellung MAUT AUF |
| STAT_FH_TASTERFA_BFH_MAUT_ZU | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer hinten 0: Taster nicht in Stellung MAUT ZU 1: Taster in Stellung MAUT ZU |
| STAT_FH_TASTERFA_BFH_NR | 0-n | - | char | - | TAB_FH_VERFAHREN | - | - | - | Fahrerseite (Tastenblock): VS-Result Taster Beifahrer hinten siehe Tabelle |

### RES_0XD18C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KISI_TASTER_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster Kindersicherung nicht gedrückt 1: Taster Kindersicherung gedrückt |

### RES_0XD18E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_MAX_POSITION_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Position Fensterheber Fahrer (NUR bei  eingelerntem FH)  0: Fenster ungueltiger Zustand  >1: Fenster im gueltigen Zustand (max. Wert bei Fenster geschlossen) Max: >>Ist vom Lieferanten im Kommentar anzugeben !!!<< |
| STAT_FH_FA_POSITION_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Fensterheber Fahrer (NUR bei eingelerntem FH Max: >>Ist vom Lieferanten im Kommentar anzugeben !!!<< |

### RES_0XD30B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_TASTER_NR | 0-n | - | unsigned char | - | TAB_ROLLO_VERFAHREN | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |

### RES_0XD320

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_ABBLEND_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: nicht abgeblendet  1: abgeblendet |
| STAT_AUSSENSPIEGEL_ABBLEND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Wert der Abblendstufe in % |
| STAT_AUSSENSPIEGEL_ABBLEND_ZEIT_WERT | ms | - | int | - | - | 10.0 | 1.0 | 0.0 | Restliche Zeit in der der Spiegel noch abgeblendet ist |

### RES_0XD322

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_BF_FAEHRT_LINKS | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Beifahrer fährt nach links |
| STAT_SPIEGEL_BF_FAEHRT_OBEN | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Beifahrer fährt nach oben |
| STAT_SPIEGEL_BF_FAEHRT_RECHTS | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Beifahrer fährt nach rechts |
| STAT_SPIEGEL_BF_FAEHRT_UNTEN | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Beifahrer fährt nach unten |
| STAT_SPIEGEL_BF_FAEHRT_NR | 0-n | - | int | - | TAB_SPIEGEL_VERFAHREN | - | - | - | VS-Result, siehe Tabelle |

### RES_0XD324

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_ABGEKLAPPT | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Spiegel nicht in abgeklappter Bordsteinposition  1: Spiegel in abgeklappter Bordsteinposition |
| STAT_SPIEGEL_BEIGEKLAPPT | 0/1 | - | int | - | - | - | - | - | 0: Spiegel ausgeklappt  1: Spiegel beigeklappt |
| STAT_SPIEGEL_BEIKLAPPEN_MOEGLICH | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Spiegel kann nicht beigeklappt werden  1: Spiegel kann beigeklappt werden |

### RES_0XD327

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_FA_FAEHRT_LINKS | 0/1 | - | int | - | - | - | - | - | 0:-  1: Spiegel Fahrer fährt nach links |
| STAT_SPIEGEL_FA_FAEHRT_OBEN | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Fahrer fährt nach oben |
| STAT_SPIEGEL_FA_FAEHRT_RECHTS | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Fahrer fährt nach rechts |
| STAT_SPIEGEL_FA_FAEHRT_UNTEN | 0/1 | - | int | - | - | - | - | - | 0: -  1: Spiegel Fahrer fährt nach unten |
| STAT_SPIEGEL_FA_FAEHRT_NR | 0-n | - | int | - | TAB_SPIEGEL_VERFAHREN | - | - | - | VS-Result, siehe Tabelle |

### RES_0XD328

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_FA_POSHOR_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition Spiegel Fahrer horizontal Bereich: 0-255 Inkremente |
| STAT_SPIEGEL_FA_POSVERT_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition Spiegel Fahrer vertikal. Bereich: 0-255 Inkremente |

### RES_0XD32D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HEIZUNG_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Spiegelheizung ausgeschalten 1: Spiegelheizung eingeschalten |
| STAT_SPIEGEL_HEIZUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Wert der Spiegelheizung in % |

### RES_0XD331

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_BEIKLAPPEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster Spiegel Beiklappen nicht gedrückt  1: Taster Spiegel Beiklappen gedrückt |
| STAT_SPIEGEL_SCHALTER_FA_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Spiegelauswahl Fahrer / Beifahrer  0: Beifahrerspiegel  1: Fahrerspiegel |
| STAT_SPIEGEL_TASTER_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_OBEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_UNTEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_NR | 0-n | - | int | - | TAB_SPIEGEL_VERFAHREN | 1.0 | 1.0 | 0.0 | VS-Result, siehe Tabelle |

### RES_0XD333

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_BF_POSHOR_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Position Spiegel Beifahrer horizontal Bereich: 0-255 Inkremente |
| STAT_SPIEGEL_BF_POSVERT_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition Spiegel Beifahrer vertikal Bereich: 0-255 Inkremente |

### RES_0XD347

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HC2_LINKS_NR | 0-n | - | char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | Status HC2-Anzeige linker Spiegel |
| STAT_SPIEGEL_HC2_RECHTS_NR | 0-n | - | char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | Status HC2-Anzeige rechter Spiegel |

### RES_0XD369

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HC2_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Spurwechsel-Assistent 0 = nicht gerückt 1 = gedrückt |

### RES_0XD36A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HC2_TASTER_LED_NR | 0-n | - | char | - | TAB_LED | 1.0 | 1.0 | 0.0 | LED für den Spurwechsel-Assistent |

### RES_0XD389

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIVI_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XD39A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XD39B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_TASTER_LED_NR | 0-n | - | char | - | TAB_LED | 1.0 | 1.0 | 0.0 | 0 = LED aus 1 = LED ein 2 = LED defekt |

### RES_0XD531

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMS_BESTROMT_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Linkes TMS nicht bestromt 1: Linkes TMS bestromt |
| STAT_TMS_BESTROMT_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Rechtes TMS nicht bestromt 1: Rechtes TMS bestromt |

### RES_0XD533

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSSTUNDEN_FRA_LINKS_WERT | Stunden | - | int | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden Fahrtrichtungsanzeiger links |
| STAT_BETRIEBSSTUNDEN_FRA_RECHTS_WERT | Stunden | - | int | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden Fahrtrichtungsanzeiger rechts |

### RES_0XD537

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGFAHRLICHT_DEAKTIVIERT | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | Bedeutung  1: Tagfahrlicht deaktiviert |

### RES_0XD547

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AHL_REFERENZLAUF_NR | 0-n | - | char | - | TAB_AHL_LWR_REFERENZLAUF | 1.0 | 1.0 | 0.0 | Status LWR-Referenzlauf  0: nicht gestartet  1: aktiv  2: ohne Fehler abgeschlossen 3: mit Fehler abgebrochen |
| STAT_LWR_REFERENZLAUF_NR | 0-n | - | char | - | TAB_AHL_LWR_REFERENZLAUF | 1.0 | 1.0 | 0.0 | Status LWR-Referenzlauf  0: nicht gestartet  1: aktiv  2: ohne Fehler abgeschlossen 3: mit Fehler abgebrochen |

### RES_0XD54C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_TASTER_VORNE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betaetigt |
| STAT_INNENLICHT_VORNE_DAUER_AUS_AKTIV | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Daueraus nicht aktiv 1: Daueraus aktiv |

### RES_0XD54D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_BELADUNGSSENSOR_VORNE_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Busnachricht Beladungssensor vorne in mm |
| STAT_BUS_IN_BELADUNGSSENSOR_HINTEN_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Busnachricht Beladungssensor hinten in mm |

### RES_0XD550

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LICHTSCHALTEREINHEIT_AL_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Abblendlicht 1: Schalter in Stellung Abblendlicht |
| STAT_LICHTSCHALTEREINHEIT_FLC_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Fahrlichtkontrolle (FLC) 1: Schalter in Stellung Fahrlichtkontrolle (FLC) |
| STAT_LICHTSCHALTEREINHEIT_NEUTRAL_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Neutral 1: Schalter in Stellung Neutral |
| STAT_LICHTSCHALTEREINHEIT_STL_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Standlicht 1: Schalter in Stellung Standlicht |
| STAT_LICHTSCHALTEREINHEIT_NR | 0-n | - | int | - | TAB_LICHTSCHALTER | 1.0 | 1.0 | 0.0 | VS-Result, Bedeutung siehe Tabelle |

### RES_0XD555

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_FLA_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | PIA Fernlichtassistent  0: Aus  1: Ein |
| STAT_PIA_FOLLOW_ME_HOME_ZEIT_WERT | s | - | int | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Zeit für Follow Me Home |
| STAT_PIA_WELCOMELIGHT_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | PIA Welcomelight  0: Aus  1: Ein |

### RES_0XD558

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POS_HOR_LINKS_WERT | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | Horizontale Position linker Scheinwerfer |
| STAT_POS_VER_LINKS_WERT | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | Vertikale Position linker Scheinwerfer |
| STAT_POS_HOR_RECHTS_WERT | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | Horizontale Position rechter Scheinwerfer |
| STAT_POS_VER_RECHTS_WERT | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | Vertikale Position rechter Scheinwerfer |

### RES_0XD55E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_MIND_ANZAHL_BLINKZYKLEN_BEI_TIPP_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Mind.-Anzahl Blinkzyklen bei Tippblinken momentan |
| STAT_PIA_QUITT_BLINK_ENTRIEGELN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Quittierungsblinken bei Entriegeln momentan  0: Aus  1: Ein |
| STAT_PIA_QUITT_BLINK_SICHERN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Quittierungsblinken bei Sichern momentan  0: Aus   1: Ein |

### RES_0XD55F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAN_LWR_MAXPOS_WERT | ° | - | int | - | - | 1.0 | 1.0 | 0.0 | Angesteuerter Winkelwert bei MAX-Stellung des LWR-Rändelrads |
| STAT_MAN_LWR_MINPOS_WERT | ° | - | int | - | - | 1.0 | 1.0 | 0.0 | Angesteuerter Winkelwert bei MIN-Stellung des LWR-Rändelrads |
| STAT_MAN_LWR_LINKS_WERT | ° | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Winkelwert LWR links |
| STAT_MAN_LWR_RECHTS_WERT | ° | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Winkelwert LWR rechts |

### RES_0XD566

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSSTUNDEN_SMC_LINKS_WERT | Stunden | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsstunden links |
| STAT_BETRIEBSSTUNDEN_SMC_RECHTS_WERT | Stunden | - | int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsstunden rechts |

### RES_0XD577

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREMSLICHTSCHALTER_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Bremslichtschalter nicht betätigt 1: Bremslichtschalter betätigt |
| STAT_BREMSLICHTTESTSCHALTER_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Bremslichttestschalter nicht betätigt 1: Bremslichttestschalter betätigt |

### RES_0XD57B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_HINTEN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Aus  1: Ein |
| STAT_INNENLICHT_HINTEN_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Leuchtkraft in % Wertebereich 0-100% |

### RES_0XD57C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_VORNE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Aus  1: Ein |
| STAT_INNENLICHT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Leuchtkraft in % Wertebereich 0-100 % |

### RES_0XD57E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEINE_LWR_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LWR codiert  1: keine LWR codiert |
| STAT_MAN_LWR_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: manuelle LWR nicht codiert  1: manuelle LWR codiert |
| STAT_AUT_LWR_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: automatische LWR nicht codiert  1: automatische LWR codiert |
| STAT_DYN_LWR_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: dynamische LWR nicht codiert  1: dynamische LWR codiert |

### RES_0XD57F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_KLEMME_VA_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Klemme VA:   0: Aus  1: Ein |
| STAT_INNENLICHT_KLEMME_VA_NACHLAUFZEIT_WERT | s | - | int | - | - | 1.0 | 10.0 | 0.0 | Nachlaufzeit in Sekunden Wertebereich 0-1800 Sekunden (entspricht 30 Minuten) |

### RES_0XD58A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWR_POSITION_MAX_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Rändelrad nicht in Stellung MAX  1: Rändelrad in Stellung MAX |
| STAT_LWR_POSITION_MIN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Rändelrad nicht in Stellung MIN 1: Rändelrad in Stellung MIN |

### RES_0XD5BA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMEMORY_VORNE_FA_TASTER_M_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_VORNE_FA_TASTER_1_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_VORNE_FA_TASTER_2_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_VORNE_FA_TASTER_GENTLEMEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |

### RES_0XD5BB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMEMORY_VORNE_BF_TASTER_M_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_VORNE_BF_TASTER_1_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |
| STAT_SITZMEMORY_VORNE_BF_TASTER_2_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betätigt |

### RES_0XD5E5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMS_ID_LINKS_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Codierkennung TMS links  <<< Details sind vom Lieferanten zu befüllen !!! >>> |
| STAT_TMS_ID_RECHTS_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Codierkennung TMS rechts <<< Details sind vom Lieferanten zu befüllen !!! >>> |

### RES_0XD5E6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRLICHTSITUATION_NR | 0-n | - | char | - | TAB_FAHRLICHTSITUATION | 1.0 | 1.0 | 0.0 | Aktuelle Fahrlichtsituation auslesen |

### RES_0XDA0D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | HeadUp-Display  0 = nicht gedrückt  1 = gedrückt |

### RES_0XDA9A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTNUSS_STELLUNG_ENTRIEGELN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schaltnuss nicht in Stellung Entriegeln 1: Schaltnuss in Stellung Entriegeln |
| STAT_SCHALTNUSS_STELLUNG_NULL_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schaltnuss nicht in Stellung Neutral 1: Schaltnuss in Stellung Neutral |
| STAT_SCHALTNUSS_STELLUNG_SICHERN_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schaltnuss nicht in Stellung Sichern 1: Schaltnuss in Stellung Sichern |
| STAT_SCHALTNUSS_STELLUNG_UNGUELTIG_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0: Schaltnuss nicht in Stellung Ungültig 1: Schaltnuss in Stellung Ungültig |
| STAT_SCHALTNUSS_STELLUNG_NR | 0-n | - | int | - | TAB_SCHALTNUSS_STELLUNG | 1.0 | 1.0 | 0.0 | 0: Schaltnuss in Stellung Neutral 1: Schaltnuss in Stellung Entriegeln 2: Schaltnuss in Stellung Sichern 3: Schaltnuss in Stellung Ungültig |

### RES_0XDA9B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL1_AKTIV | 0-n | - | int | - | TAB_SCHALTNUSS_HALL | 1.0 | 1.0 | 0.0 | Hallsensor 1  2: Hallsensor nicht aktiv 4: Hallsensor aktiv |
| STAT_HALL2_AKTIV | 0-n | - | int | - | TAB_SCHALTNUSS_HALL | 1.0 | 1.0 | 0.0 | Hallsensor 2  2: Hallsensor nicht aktiv 4: Hallsensor aktiv |

### RES_0XDBEA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACC_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt  1 = gedrückt |

### RES_0XDBEB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACC_TASTER_LED_NR | 0-n | - | char | - | TAB_LED | 1.0 | 1.0 | 0.0 | LED für den ACC-Taster |

### RES_0XDC83

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH | 0-n | high | unsigned char | - | TAB_SARAH_ZUSTAND | 1.0 | 1.0 | 0.0 | Zustand SARAH (siehe Tabelle TAB_SARAH_ZUSTAND) |
| STAT_AUFFAHRWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Auffahrwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_VORWARNUNG | 0-n | high | unsigned char | - | TAB_VORWARNUNG | 1.0 | 1.0 | 0.0 | Konfiguration Vorwarnung  (siehe Tabelle TAB_VORWARNUNG) |
| STAT_PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Personenwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Konfiguration Gezieltes Anleuchten (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenswarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Spurwechselwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_RESERVE_1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_3 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_4 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_5 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_6 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_7 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_8 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_9 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE_10 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XDC84

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XDC85

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_LED_NR | 0-n | - | char | - | TAB_LED | 1.0 | 1.0 | 0.0 | 0 = LED aus 1 = LED ein 2 = LED defekt |

### RES_0XDD40

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMASSAGE_VORNE_FA_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt 1: Taster gedrückt |

### RES_0XDD41

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMASSAGE_VORNE_FA_LED_1_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED 1 aus 1: LED 1 ein |
| STAT_SITZMASSAGE_VORNE_FA_LED_2_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED 2 aus 1: LED 2 ein |
| STAT_SITZMASSAGE_VORNE_FA_LED_3_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED 3 aus 1: LED 3 ein |

### RES_0XDD42

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMASSAGE_VORNE_BF_TASTER_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt 1: Taster gedrückt |

### RES_0XDD43

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMASSAGE_VORNE_BF_LED_1_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED 1 aus 1: LED 1 ein |
| STAT_SITZMASSAGE_VORNE_BF_LED_2_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED 2 aus 1: LED 2 ein |
| STAT_SITZMASSAGE_VORNE_BF_LED_3_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0: LED 3 aus 1: LED 3 ein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _SARAH_STATISTIK | 0x4910 | - | Informationen zum SARAH Benutzerverhalten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4910 |
| ELSV_NORMIEREN | 0xA071 | - | Normierung ELSV elektrischen Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA071 | RES_0xA071 |
| ELSV_DENORMIEREN | 0xA072 | - | Denormierung elektrischen Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ELSV_BLOCKFAHRTEN_RESET | 0xA073 | - | Setzt den Zähler der Blockfahrten zurück | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA073 | - |
| FH_DENORMIEREN | 0xA177 | - | Denormierung der Fenster ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!!  0x11: FH Fahrer  0x12: FH Beifahrer  0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: Alle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA177 | - |
| FH_VERFAHREN | 0xA178 | - | Ansteuerung der Fensterheber (ELEMENT;AKTION;ZEIT in s) Argumente siehe Tabelle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA178 | - |
| FH_EINLERNEN | 0xA179 | - | Steuernaufruf zum Einlernen der Fensterheber ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!!  0x11: FH Fahrer  0x12: FH Beifahrer   0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: Alle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA179 | RES_0xA179 |
| FH_VERFAHREN_HALL | 0xA17E | - | Verfahren auf Hallposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17E | RES_0xA17E |
| AUSSENSPIEGEL_SELBSTTEST | 0xA322 | - | Automatische Spiegelprüfung wird angestoßen. Wenn ein Fehler beim Selbsttest auftritt, dann erfolgt ein FS-Eintrag. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA322 |
| ELSV | 0xD072 | - | Status / Steuern elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD072 | RES_0xD072 |
| ELSV_STATEMACHINE | 0xD07B | STAT_STATEMACHINE | <<< vom Lieferanren zu befüllen !!! >>> | 0-n | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELSV_VORHANDEN | 0xD07F | STAT_VORHANDEN_ELSV_EIN | Elektrische Lenksäulenverstellung 0: nicht vorhanden 1: vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELSV_POS | 0xD084 | - | Ansteuerung einer bestimmten ELSV-Position | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD084 | - |
| ELSV_KLEMMENSPANNUNG | 0xD086 | STAT_SPANNUNG_KLEMME_30_ELSV_WERT | Aktueller Spannungswert | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ELSV_STATISTIK | 0xD087 | - | Statistik über die ELSV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD087 |
| ELSV_INIT | 0xD088 | - | Status Initialisierung ELSV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD088 |
| ELSV_POS_STATUS | 0xD089 | - | Aktuelle Position und Bewegung der ELSV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD089 |
| ELSV_STATEMACHINE_HAL | 0xD08A | STAT_STATEMACHINE_HAL_WERT | Status internen Statemachine | - | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SMO_SPIELSCHUTZZAEHLER | 0xD096 | STAT_SPIELSCHUTZZAEHLER_WERT | Das Result gibt an wie oft der Spielschutz im SMO - SG ausgelöst wurde | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SMO_STOERSCHUTZZAEHLER | 0xD097 | STAT_STOERSCHUTZZAEHLER_WERT | Das Result gibt an wie oft der Störschutz im SMO - SG ausgelöst wurde | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SMO_VARIANTE | 0xD098 | STAT_FAHRZEUGTYP | Das Result gibt an, welchen Fahrzeugtyp das SMO gerade eingestellt hat | 0-n | - | high | unsigned char | TAB_SMO_FAHRZEUGTYP | - | - | - | - | 22 | - | - |
| FH_FA_INIT | 0xD170 | STAT_FH_FA_INIT | 0: nicht eingelernt 1: eingelernt | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BF_INIT | 0xD171 | STAT_FH_BF_INIT | 0: nicht eingelernt 1: eingelernt Info: Wird zu Beginn des Einlernvorgangs auf 0 gesetzt | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_OFFEN | 0xD176 | STAT_FH_FA_OFFEN_KOMPLETT | 0: geschlossen oder halb offen 1: komplett offen | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BF_EINLERNENVORGANG | 0xD179 | STAT_FH_BF_EINLERNENVORGANG_AKTIV | 0: nicht aktiv 1: aktiv | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BF_POSITION | 0xD181 | - | Aktuelle und maximale Position  Fensterheber Beifahrer (in eingelerntem Zustand) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD181 |
| FH_TASTER_FAHRER | 0xD188 | - | Status / Simulation FH-Taster Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD188 |
| FH_KISI_TASTER | 0xD18C | - | Status / Simualtion Taster Kindersicherung  1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD18C | RES_0xD18C |
| FH_FA_POSITION | 0xD18E | - | Aktuelle und maximale Position  Fensterheber Fahrer (in eingelerntem Zustand) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD18E |
| FH_KURZHUB_AKTIV | 0xD18F | STAT_KURZHUB_AKTIV | 0: Kurzhub nicht aktiv 1: Kurzhub aktiv | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_GESCHLOSSEN | 0xD19A | STAT_FH_FA_GESCHLOSSEN_KOMPLETT | 0: halb oder komplett offen  1: komplett geschlossen | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_FAEHRT_AUF | 0xD19B | STAT_FH_FA_FAEHRT_AUF | 0: -   1: Fensterheber Fahrer fährt auf | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_FAEHRT_ZU | 0xD19C | STAT_FH_FA_FAEHRT_ZU | 0: -  1: Fensterheber Fahrer fährt zu | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_EINLERNENVORGANG | 0xD19D | STAT_FH_FA_EINLERNENVORGANG_AKTIV | 0: nicht aktiv  1: aktiv | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_KURZHUB_DEAKTIVIEREN | 0xD19F | - | Kurzhub rahmenlose Scheibe aktivieren / deaktivieren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD19F | - |
| FH_BF_GESCHLOSSEN | 0xD1A0 | STAT_FH_BF_GESCHLOSSEN_KOMPLETT | 0: halb oder komplett offen  1: komplett geschlossen | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BF_FAEHRT_AUF | 0xD1A1 | STAT_FH_BF_FAEHRT_AUF | 0: -  1: Fensterheber Beifahrer fährt auf | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BF_FAEHRT_ZU | 0xD1A2 | STAT_FH_BF_FAEHRT_ZU | 0: -   1: Fensterheber Beifahrer fährt zu | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BF_OFFEN | 0xD1A3 | STAT_FH_BF_OFFEN_KOMPLETT | 0: geschlossen oder halb offen 1: komplett offen | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_KLEMMENSPANNUNG_30A | 0xD1A4 | STAT_SPANNUNG_KLEMME_30_FH_A_WERT | Aktueller Spannungswert | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| FH_KLEMMENSPANNUNG_30B | 0xD1A5 | STAT_SPANNUNG_KLEMME_30_FH_B_WERT | Aktueller Spannungswert | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| FH_TASTER_ALLE_FH | 0xD1C2 | STAT_TASTER_ALLE_FH_NR | Fahrerseite (Tastenblock): Taster alle FH siehe Tabelle | 0-n | - | high | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_HECKSCHEIBE_CABRIO | 0xD1C4 | STAT_HECKSCHEIBE_CABRIO | Status Taster für versenkbare Heckscheibe bei Cabrio | 0-n | - | high | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ROLLO_HECK_TASTER | 0xD30B | - | Status / Simulation Taster Sonnenrollo Heckscheibe  0: Taster nicht gedrückt 1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30B | RES_0xD30B |
| AUSSENSPIEGEL_ABBLENDEN | 0xD320 | - | Status / Steuern Abblenden Aussenspiegel | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD320 | RES_0xD320 |
| AUSSENSPIEGEL_THERMOSCHUTZ | 0xD321 | STAT_SPIEGEL_THERMOSCHUTZ_AKTIV | 0: nicht aktiv 1: aktiv | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_BF_RICHTUNG | 0xD322 | - | Status / Steuern Bewegung Spiegel Beifahrer (Richtung) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD322 | RES_0xD322 |
| AUSSENSPIEGEL_KLAPPEN | 0xD324 | - | Status / Steuern Aussenspiegel beiklappen / abklappen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD324 | RES_0xD324 |
| AUSSENSPIEGEL_FA_RICHTUNG | 0xD327 | - | Status / Steuern Bewegung Spiegel Fahrer (Richtung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD327 | RES_0xD327 |
| AUSSENSPIEGEL_FA_POS | 0xD328 | - | Status / Steuern Position Fahrer Spiegel | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD328 | RES_0xD328 |
| AUSSENSPIEGEL_LIN | 0xD329 | STAT_VORHANDEN_LIN_SPIEGEL_EIN | 0: Kein LIN-Aussenspiegel  1: LIN-Aussenspiegel | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_MEM_VORHANDEN | 0xD32B | STAT_VORHANDEN_SPIEGEL_MEMORY_EIN | 0: Keine Memoryfunktion  1: Memoryfunktion | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_HEIZUNG | 0xD32D | - | Status / Steuern Heizung Aussenspiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32D | RES_0xD32D |
| AUSSENSPIEGEL_HEIZUNG_VERBAUT | 0xD32E | STAT_VORHANDEN_SPIEGEL_HEIZUNG_EIN | 0: Keine Spiegelheizung  1: Spiegelheizung | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_TASTER | 0xD331 | - | Status Schalter / Taster Spiegelverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD331 |
| AUSSENSPIEGEL_KLAPPEN_VORHANDEN | 0xD332 | STAT_VORHANDEN_SPIEGEL_BEIKLAPPEN_EIN | 0: Kein Beiklappen möglich  1: Beiklappne möglich | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_BF_POS | 0xD333 | - | Status / Steuern Position Beifahrer Spiegel | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD333 | RES_0xD333 |
| BUS_IN_SPIEGEL_ABBLEND_WERT | 0xD334 | STAT_BUS_IN_SPIEGEL_ABBLEND_WERT | Abblendwert Innenspiegel in % | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_MEM_POS_STEUERN | 0xD336 | - | Aussenspiegel in gewählte Memoryposition verfahren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD336 | - |
| AUSSENSPIEGEL_MEM_POS_SCHREIBEN | 0xD338 | - | Beschreiben eines Memoryplatzes mit den horizontalen und vertikalen Positionswerten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD338 | - |
| AUSSENSPIEGEL_ABBLENDEN_VORHANDEN | 0xD33C | STAT_VORHANDEN_SPIEGEL_ABBLENDEN_EIN | 0: Keine Abblendfunktion  1: Abblendfunktion vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_HC2 | 0xD347 | - | Status / Steuern HC2-Anzeige | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD347 | RES_0xD347 |
| SPURWECHSELASSITENT_TASTER | 0xD369 | - | Status / Simulation Taster Spurwechsel-Assistent   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD369 | RES_0xD369 |
| SPURWECHSELASSITENT_TASTER_LED | 0xD36A | - | Status /Steuern des Taster-LED Spurwechsel-Assistent   1: LED ein | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD36A | RES_0xD36A |
| NIGHTVISION_TASTER | 0xD389 | - | Status / Simulation Taster Nightvision-Tasters   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD389 | RES_0xD389 |
| TLC_TASTER | 0xD39A | - | Status / Simulation Taster TimetoLineCrossing (TLC)-Tasters   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD39A | RES_0xD39A |
| TLC_TASTER_LED | 0xD39B | - | Status / Steuern LED TimetoLineCrossing (TLC)   1: LED ein | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD39B | RES_0xD39B |
| AHL_LWR_TMS_BESTROMEN | 0xD531 | - | Status / Steuern Bestromung TMS (ein/aus) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD531 | RES_0xD531 |
| BETRIEBSSTUNDEN_FRA | 0xD533 | - | Status Betriebsstunden Fahrtrichtungsanzeiger links und rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD533 |
| STEUERN_KALTLICHTUEBERWACHUNG_PER_DIAGNOSE | 0xD535 | - | Kaltlichtüberwachung per Diagnose starten. Gefunde Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD535 | - |
| STEUERN_WARMLICHTUEBERWACHUNG | 0xD536 | - | Warmlichtüberwachung per Diagnose starten. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD536 | - |
| TAGFAHRLICHT_DEAKTIVIEREN | 0xD537 | - | Status / Steuern Tagfahrlichtsperre aktiv/inaktiv | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD537 | RES_0xD537 |
| LWR_REFERENZLAUF | 0xD538 | - | Referenzlauf der LWR | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD538 | - |
| LICHTSCHALTER_FLC_LED | 0xD539 | STAT_LED_FLC_EIN | 0: LED Fahrlichtkontrolle ausgeschalten; 1: LED Fahrlichtkontrolle eingeschalten | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTER_WBL_TASTER_BEL | 0xD53D | STAT_TASTER_WBL_BEL_EIN | 0: Bel. Taster Warnblinkanlage aus  1: Bel. Taster Warnblinkanlage ein | 0/1 | - | - | int | - | - | - | - | - | 22 | - | - |
| RUECKWAERTSGANG_SCHALTER | 0xD540 | STAT_SCHALTER_RUECK_EIN | 0: nicht aktiv 1: aktiv | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHEINWERFER_GRUNDSTELLUNG_STATUS | 0xD541 | STAT_GRUNDSTELLUNG_SCHEINWERFER_EIN | 0: Scheinwerfer reagiert auf  normalen  Mechanismus (manuelle LWR: Reaktion auf Rädchen automatische / dynamische LWR: Reaktion auf die Höhenstndssenoren  1: Scheinwerfer bleiben in Grundstellung (aufheben nur per Diagnose oder Klemmenwechsel möglich) | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEUCHTEN_FUNKTION | 0xD542 | - | Steuern der Lampenfunktion  Mögliche Elemente siehe Tabelle TAB_LAMPEN_FUNKTION | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD542 | - |
| AHL_LWR_REFERENZLAUF | 0xD547 | - | Status AHL- und LWR-Referenzlauf | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD547 | RES_0xD547 |
| LWR_DYNAMISCH_SCHRITTE_REFLAUF | 0xD548 | STAT_VORHANDEN_LWR_SCHRITTE_REF_LAUF_WERT | Schrittanzahl fuer den Referenzlauf der Leuchtweitenregelung | Ink | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_HINTEN_TASTER | 0xD54B | STAT_INNENLICHT_TASTER_HINTEN_EIN | 0: Taster nicht betätigt 1: Taster betaetigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_VORNE_TASTER | 0xD54C | - | Status Taster Innenlicht / Innenlicht Daueraus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD54C |
| BUS_IN_BELADUNGSSENSOR | 0xD54D | - | Busnachricht für die Beladungssensoren in mm | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD54D |
| LWR_MANUELL_POTI | 0xD54F | STAT_POTI_MAN_LWR_WERT | Wert des Rändelsrads der manuellen LWR 0 - 254 gültiger Wertebereich  255 ungültig | Ink | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTEREINHEIT | 0xD550 | - | Status Lichtschaltereinheit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD550 |
| EINGANG_R_GANG_EIN | 0xD551 | STAT_EINGANG_R_GANG_EIN | 0: Aus  1: Ein | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTER_WBL_TASTER | 0xD552 | STAT_TASTER_WBL_EIN | 0: Taster nicht betätigt  1: Taster betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHALTERBELEUCHTUNG | 0xD554 | STAT_SCHALTERBELEUCHTUNG_VORNE_WERT | PWM-Wert der Schalterbeleuchtung (KL 58g) vorne in Prozent  0 % = maximale Dimmung  100 % = max. Helligkeit | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PIA_FLA_FOLLOW | 0xD555 | - | Status PIA (FollowMeHome) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD555 |
| SCHALTERBELEUCHTUNG_RAENDELRAD | 0xD557 | STAT_POTI_DIMMUNG_WERT | 0 - 254: gültiger Wertebereich  255 ungültig | Digit | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AHL_LWR_POSITION | 0xD558 | - | Status / Steuern Scheinwerfer Positon | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD558 | RES_0xD558 |
| PIA_ABBIEGELICHT | 0xD559 | STAT_PIA_ABBIEGELICHT_PIA_EIN | 0: PIA: Abbiegelicht momentan nicht aktiv 1: PIA: Abbiegelicht momentan aktiv | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_ABBLENDLICHT | 0xD55B | STAT_BETRIEBSSTUNDEN_AL_WERT | Anzahl Betriebsstunden Abblendlicht | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_BEGRENZUNGSLICHT | 0xD55D | STAT_BETRIEBSSTUNDEN_BEGRL_WERT | Anzahl der Betriebsstunden Standlicht | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PIA_TIPPBLINKEN | 0xD55E | - | Status PIA-Einstellung Tippblinken | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD55E |
| LWR_MANUELL | 0xD55F | - | Positionsangaben manuelle Leuchtweitenregulierung (MIN, MAX, aktuell) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD55F |
| BETRIEBSSTUNDEN_BFD | 0xD561 | STAT_BETRIEBSSTUNDEN_BFD_WERT | Anzahl Betriebsstunden Break Force Display | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_BL | 0xD562 | STAT_BETRIEBSSTUNDEN_BL_WERT | Anzahl Betriebsstunden Bremslichtes | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_FL | 0xD563 | STAT_BETRIEBSSTUNDEN_FL_WERT | Anzahl Betriebsstunden Fernlicht | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_TMS | 0xD566 | - | Anzahl Betriebsstunden Treibermodul Scheinwerfer (TMS) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD566 |
| BETRIEBSSTUNDEN_NSW | 0xD568 | STAT_BETRIEBSSTUNDEN_NSW_WERT | Anzahl Betriebsstunden Nebelscheinwerfer | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_NSL | 0xD56A | STAT_BETRIEBSSTUNDEN_NSL_WERT | Anzahl Betiebsstunden Nebelschlussleuchte | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BETRIEBSSTUNDEN_RFL | 0xD56C | STAT_BETRIEBSSTUNDEN_RFL_WERT | Anzahl Betriebsstunden Rückfahrlicht | Stunden | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PIA_TAGFAHRLICHT | 0xD573 | STAT_PIA_TAGFAHRLICHT_EIN | Tagfahrlicht momentan: 0= AUS; 1= EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WARNBLINKEN | 0xD575 | STAT_WARNBLINKEN_EIN | 0: Funktion Warnblinken nicht aktiv  1: Funktion Warnblinken aktiv | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BREMSLICHTSCHALTER | 0xD577 | - | Status Bremslichtschalter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD577 |
| INNENLICHT_HINTEN | 0xD57B | - | Status Innenlicht hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57B |
| INNENLICHT_VORNE | 0xD57C | - | Status Innenlicht vorne / Steuern Innenlicht Daueraus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD57C | RES_0xD57C |
| LWR_MODUS | 0xD57E | - | Welche Leuchtweitenregulierung (LWR) ist aktiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57E |
| INNENLICHT_KLEMME_VA | 0xD57F | - | Status Klemme VA (Verbraucherabschaltung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57F |
| LENKSTOCK_BLINKER_FAS_RED_EINGANG | 0xD586 | STAT_FAS_RED_NR | Redundante Leitung für SZL | 0-n | - | - | unsigned char | TAB_FAS_RED | - | - | - | - | 22 | - | - |
| LWR_POSITION_MIN_MAX | 0xD58A | - | Status Endanschlag Rändelrad manuelle LWR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD58A |
| LICHTSCHALTER_NSW_TASTER | 0xD58B | STAT_TASTER_NSW_EIN | 0: Taster Nebelscheinwerfer nicht betätigt; 1: Taster Nebelscheinwerfer betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTER_NSL_TASTER | 0xD58C | STAT_TASTER_NSL_EIN | 0: Taster Nebelschlussleuchte nicht betätigt 1: Taster Nebelschlussleuchte betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHEINWERFER_GRUNDSTELLUNG | 0xD58E | - | Reaktion der Scheinwerfer auf LWR-Anforderungen kann aktiviert und deaktiviert werden | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD58E | - |
| BUS_IN_LENKSTOCK_BLINKER | 0xD594 | STAT_BUS_IN_LENKSTOCK_BLINKER_NR | Auswertung des Signals | 0-n | - | - | unsigned char | TAB_BUS_LENKSTOCK_BLINKER | - | - | - | - | 22 | - | - |
| SITZMEMORY_FA_TASTER | 0xD5BA | - | Status Taster Sitzmemory vorne Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5BA |
| SITZMEMORY_BF_TASTER | 0xD5BB | - | Status Taster Sitzmemory vorne Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5BB |
| SITZMEMORY_FA_TASTER_LED | 0xD5BC | - | LEDs Sitzmemory Fahrer 1: LED ein | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5BC | - |
| SITZMEMORY_BF_TASTER_LED | 0xD5BD | - | LEDs Sitzmemory Beifahrer 1: LED ein | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5BD | - |
| SITZMEMORY_FRONT_BEDIENEINHEIT | 0xD5BE | STAT_SITZMEMORY_FRONT_VORHANDEN | 0: Bedieneinheit Sitzmemory vorne nicht vorhanden 1: Bedieneinheit Sitzmemory vorne vorhanden | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHALTERBELEUCHTUNG_STEUERN | 0xD5E0 | - | Steuert die Dimmung der Schalterbeleuchtung ohne Berücksichtigung von Randbedingungen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5E0 | - |
| BETRIEBSSTUNDEN_LEUCHTEN_LOESCHEN | 0xD5E2 | - | Alle erfassten Betriebsstunden löschen 1: Betriebsstunden löschen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5E2 | - |
| AHL_LWR_TMS_ID_LESEN | 0xD5E5 | - | Codierkennung der TMS lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5E5 |
| AHL_LWR_FAHRSITUATION | 0xD5E6 | - | Status / Steuern aktuelle Fahrlichtsituation | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD5E6 | RES_0xD5E6 |
| HUD_TASTER | 0xDA0D | - | Status / Simulation Taster HeadUp-Display   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDA0D | RES_0xDA0D |
| BUS_OUT_TUERKONTAKT_FA | 0xDA73 | STAT_BUS_OUT_TUERKONTAKT_FA_NR | 0: geschlossen  1: offen | 0-n | - | - | int | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_TUERKONTAKT_BF | 0xDA74 | STAT_BUS_OUT_TUERKONTAKT_BF_NR | 0: geschlossen  1: offen | 0-n | - | - | int | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_TUERKONTAKT_FAH | 0xDA75 | STAT_BUS_OUT_TUERKONTAKT_FAH_NR | 0: geschlossen  1: offen | 0-n | - | - | int | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_TUERKONTAKT_BFH | 0xDA76 | STAT_BUS_OUT_TUERKONTAKT_BFH_NR | 0: geschlossen 1: offen | 0-n | - | - | int | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUERKONTAKT_BF | 0xDA77 | STAT_TUERKONTAKT_BF_NR | 2: geschlossen  4: offen | 0-n | - | - | int | TAB_TUERKONTAKTE | - | - | - | - | 22 | - | - |
| TUERKONTAKT_BFH | 0xDA78 | STAT_TUERKONTAKT_BFH_NR | 2: geschlossen  4: offen | 0-n | - | - | int | TAB_TUERKONTAKTE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TUERKONTAKT_FA | 0xDA79 | STAT_TUERKONTAKT_FA_NR | 2: geschlossen  4: offen | 0-n | - | - | int | TAB_CAS_HW_KONTAKT | - | - | - | - | 22 | - | - |
| TUERKONTAKT_FAH | 0xDA7A | STAT_TUERKONTAKT_FAH_NR | 2: geschlossen  4: offen | 0-n | - | - | int | TAB_CAS_HW_KONTAKT | - | - | - | - | 22 | - | - |
| SCHALTNUSS_STELLUNG | 0xDA9A | - | Status erkannte Schaltnuss (Schlossnuss)-Stellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA9A |
| SCHALTNUSS_HALLSENSOREN | 0xDA9B | - | Status Hallsensoren aktiv / nicht aktiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA9B |
| BUS_IN_TUERKONTAKT_BFH | 0xDAA3 | STAT_BUS_IN_TUERKONTAKT_BFH_NR | 0: geschlossen  1: offen | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_BF | 0xDAA4 | STAT_BUS_IN_TUERKONTAKT_BF_NR | 0: geschlossen  1: offen | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_FAH | 0xDAA5 | STAT_BUS_IN_TUERKONTAKT_FAH_NR | 0: geschlossen  1: offen | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TUERKONTAKT_FA | 0xDAA6 | STAT_BUS_IN_TUERKONTAKT_FA_NR | 0: geschlossen  1: offen | 0-n | - | - | char | TAB_BUS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_GESCHW_STATUS | 0xDAAB | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Geschwindigkeits-Status:  0 - 350 Km/h | km/h | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_15_WERT | 0xDAD1 | STAT_SPANNUNG_KLEMME_15_WERT | Spannungswert am Steuergerät an Klemme 15 (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30F_A_WERT | 0xDADE | STAT_SPANNUNG_KLEMME_30F_A_WERT | Spannungswert am Steuergerät an Klemme 30F A (auf eine Nachkommastelle genau) | Volt | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30F_B_WERT | 0xDADF | STAT_SPANNUNG_KLEMME_30F_B_WERT | Spannungswert am Steuergerät an Klemme 30F B(auf eine Nachkommastelle genau) | Volt | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30F_MSA_WERT | 0xDAE0 | STAT_SPANNUNG_KLEMME_30F_MSA_WERT | Spannungswert am Steuergerät an Klemme 30F MSA (auf eine Nachkommastelle genau) | Volt | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Status Klemme R im Steuergerät: 0=AUS, 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Status Klemme 15 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Status Klemme 50 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemme 58G:  0% max. Dimmung - 100% max. Helligkeit,  0xFF bedeutet ungültig und  0xFE bedeutet Tag: so keine Information über die Helligkeit! | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ACC_TASTER | 0xDBEA | - | Status / Simulation Taster ACC (iBrake)   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBEA | RES_0xDBEA |
| ACC_TASTER_LED | 0xDBEB | - | Status / Steuern der LED ACC-Taster (iBrake-Taster)   1: LED ein | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDBEB | RES_0xDBEB |
| SARAH | 0xDC83 | - | Detaillierter SARAH Zustand | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDC83 | RES_0xDC83 |
| SARAH_TASTER | 0xDC84 | - | Status / Simulation Taster SARAH  1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC84 | RES_0xDC84 |
| SARAH_TASTER_LED | 0xDC85 | - | Status / Simulation LED SARAH  1: LED ein | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC85 | RES_0xDC85 |
| SITZMASSAGE_FA_TASTER | 0xDD40 | - | Status / Simulation Taster Sitzmassage Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD40 | RES_0xDD40 |
| SITZMASSAGE_FA_LED | 0xDD41 | - | Status / Steuern LEDs Sitzmassage vorne Fahrer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD41 | RES_0xDD41 |
| SITZMASSAGE_BF_TASTER | 0xDD42 | - | Status / Simulation Taster Sitzmassage Beifahrer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDD42 | RES_0xDD42 |
| SITZMASSAGE_BF_LED | 0xDD43 | - | Status / Steuern LEDs Sitzmassage vorne Beifahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD43 | RES_0xDD43 |

### TAB_AHL_LWR_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | AHL |
| 0x01 | LWR |
| 0x02 | AHL + LWR |

### TAB_AHL_LWR_REFERENZLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Referenzlauf nicht gestartet |
| 0x01 | Referenzlauf aktiv |
| 0x02 | Referenzlauf ohne Fehler abgeschlossen |
| 0x03 | Referenzlauf mit Fehler abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_BUS_LENKSTOCK_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nullstellung |
| 0x01 | Tippblinken rechts |
| 0x02 | Dauerblinken rechts |
| 0x04 | Tippblinken links |
| 0x08 | Dauerblinken links |
| 0x10 | Fernlicht |
| 0x20 | Lichthupe |
| 0x40 | BC-Taste |
| 0x80 | FLA-Taste |
| 0xFE | Mehrfachbetätigung |
| 0xFF | ungültiges Signal |

### TAB_BUS_TUERKONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Signal unplausibel |
| 0x03 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_CAS_HW_KONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Leitungsbruch |
| 0x02 | Tür geschlossen |
| 0x04 | Tür offen |
| 0x06 | Kurzschluss |
| 0xFF | ungültiger Wert |

### TAB_ELSV_ACHSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ansteuerung (Stopp) |
| 0x01 | Länge |
| 0x02 | Höhe |

### TAB_ELSV_BLOCKFAHRTEN_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Zurücksetzen von allen Blockfahrtenzählern  |
| 0x01 | Zurücksetzen Blockfahrtenzähler Eingefahren |
| 0x02 | Zurücksetzen Blockfahrtenzähler Ausgefahren |
| 0x03 | Zurücksetzen Blockfahrtenzähler Oben |
| 0x04 | Zurücksetzen Blockfahrtenzähler Unten |

### TAB_ELSV_HALL

| WERT | TEXT |
| --- | --- |
| 0x00 | IO |
| 0x01 | Unterbrechung |
| 0x02 | Kurzschluss |
| 0xFF | ungültiger Wert |

### TAB_ELSV_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor IO und nicht aktiv |
| 0x01 | Motor IO und aktiv |
| 0x02 | OpenLoad |
| 0x03 | Kurzschluss |
| 0x04 | Überstrom |
| 0xFF | ungültiger Wert |

### TAB_ELSV_NORMIERUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | Vollständige Normierung |
| 0x02 | Teilnormierung oben und ausgefahren |

### TAB_ELSV_NORMIERVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Normierung nicht aktiv |
| 0x01 | Normierung aktiv |
| 0x02 | Normierung abgebrochen durch User |
| 0x03 | Normierung abgebrochen durch System |
| 0x04 | Normierung konnte nicht gestartet werden |
| 0x05 | Normierung erfolgreich beendet |
| 0xFF | ungültiger Wert |

### TAB_FAHRLICHTSITUATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein |
| 0x01 | Landstraßenlicht |
| 0x02 | Führungslicht 1 |
| 0x03 | Führungslicht 2 |
| 0x04 | Stadtlicht |
| 0x05 | max. Autobahnlicht |
| 0x06 | größeres Autobahnlicht |
| 0x07 | mittleres Autobahnlicht |
| 0x08 | minimales Autobahnlicht |
| 0x09 | H-4 Autobahn E |
| 0x0A | H-2 |
| 0x0B | H-0 |
| 0x0C | H+2 |
| 0x0D | H+4 |
| 0x0E | Blendfreies Fernlicht |
| 0x0F | Volles Fernlicht, Lichthupe |
| 0xFF | ungültiger Wert |

### TAB_FAS_RED

| WERT | TEXT |
| --- | --- |
| 0x00 | Nullstellung |
| 0x01 | Dauerblinken links |
| 0x02 | Tippblinken links |
| 0x03 | Dauerblinken rechts |
| 0x04 | Tippblinken rechts |
| 0x05 | Lichthupe |
| 0xFE | Openload oder Kurzschluss |
| 0xFF | ungültiger Wert |

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
| 0x05 | Heben / Ausstellen |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_LAMPEN_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Leuchte |
| 0x01 | Abblendlicht |
| 0x02 | Standlicht |
| 0x03 | Fernlicht |
| 0x04 | Nebelscheinwerfer |
| 0x05 | Tagfahrlicht |
| 0x06 | Blinker links |
| 0x07 | Blinker rechts |
| 0x08 | Warnblinken |
| 0x09 | Schlusslicht |
| 0x0A | Bremslicht |
| 0x0B | Break-Force Display Stufe 1 |
| 0x0C | Break-Force Display Stufe 2 |
| 0x0D | Nebelschlusslicht |
| 0x0E | Rückfahrlicht |
| 0x0F | Seitenmarkierungsleuchten |
| 0x10 | Innenlicht |
| 0x11 | Innenlicht vorne |
| 0x12 | Innenlicht hinten |
| 0xFF | ungültiger Wert |

### TAB_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0x02 | Defekt |
| 0x03 | Signal ungültig |

### TAB_LICHTSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Stellung Neutral |
| 0x01 | Stellung Standlicht |
| 0x02 | Stellung Abblendlicht |
| 0x03 | Stellung Fahrlichtkontrolle |
| 0xFF | ungültiges Signal |

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

### TAB_ROLLO_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Betätigt |
| 0x07 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_SARAH_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Funktionen aus |
| 0x01 | Benutzerdefiniert |
| 0x02 | Alle Funktionen an |

### TAB_SCHALTNUSS_HALL

| WERT | TEXT |
| --- | --- |
| 0x00 | Open Load |
| 0x02 | Hall nicht aktiv |
| 0x04 | Hall aktiv |
| 0x06 | Kurzschluss |
| 0xFF | ungültiger Wert |

### TAB_SCHALTNUSS_STELLUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Neutral |
| 0x01 | Entriegeln |
| 0x02 | Sichen |
| 0x03 | Ungültig |
| 0xFF | ungültiger Wert |

### TAB_SCHEINWERFER_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | links |
| 0x01 | rechts |
| 0x02 | beide |

### TAB_SCHEINWERFER_AUSWAHL_1

| WERT | TEXT |
| --- | --- |
| 0x00 | keiner |
| 0x01 | links |
| 0x02 | rechts |
| 0x03 | beide |

### TAB_SMO_FAHRZEUGTYP

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fahrzeugtyp definiert |
| 1 | F01, F02, F04: SA 322 UND US UND NICHT 12-Zylinder |
| 2 | F01, F02, F04: SA 322 UND ECE UND NICHT 12-Zylinder |
| 3 | F01, F02, F04: SA 322 UND (SA 3AC OR SA 8SL) UND NICHT 12-Zylinder |
| 4 | F01, F02, F04: SA 322 UND US UND SA 337 UND NICHT 12-Zylinder |
| 5 | F01, F02, F04: SA 322 UND ECE UND SA 337 UND NICHT 12-Zylinder |
| 6 | F01, F02, F04: SA 322 UND (SA 3AC OR SA 8SL) UND SA 337 UND NICHT 12-Zylinder |
| 7 | F01, F02, F04: SA 322 UND US UND 12-Zylinder |
| 8 | F01, F02, F04: SA 322 UND ECE UND 12-Zylinder |
| 9 | F01, F02, F04: SA 322 UND (SA 3AC OR SA 8SL) UND 12-Zylinder |
| 10 | F07: SA 322 UND SA 316 UND US |
| 11 | F07: SA 322 UND SA 316 UND ECE |
| 12 | F07: SA 322 UND SA 316 UND (SA 3AC OR SA 8SL) |
| 13 | F07: SA 322 UND SA 316 UND US UND SA 337 |
| 14 | F07: SA 322 UND SA 316 UND ECE UND SA 337 |
| 15 | F07: SA 322 UND SA 316 UND (SA 3AC OR SA 8SL) UND SA 337 |
| 16 | F10,F18: SA 322 UND US |
| 17 | F10,F18: SA 322 UND ECE |
| 18 | F10,F18: SA 322 UND (SA 3AC OR SA 8SL) |
| 19 | F10,F18: SA 322 UND US UND SA 337 |
| 20 | F10,F18: SA 322 UND ECE UND SA 337 |
| 21 | F10,F18: SA 322 UND (SA 3AC OR SA 8SL) UND SA 337 |
| 22 | F11: SA 322 UND ECE |
| 23 | F11: SA 322 UND (SA 3AC OR SA 8SL) |
| 24 | F11: SA 322 UND ECE UND SA 337 |
| 25 | F11: SA 322 UND (SA 3AC OR SA 8SL) UND SA 337 |
| 26 | F30: SA 322 UND US |
| 27 | F30: SA 322 UND ECE |
| 28 | F30: SA 322 UND (SA 3AC OR SA 8SL) |
| 29 | F30: SA 322 UND US UND Chromzierleisten |
| 30 | F30: SA 322 UND ECE UND Chromzierleisten |
| 31 | F30: SA 322 UND (SA 3AC OR SA 8SL) UND Chromzierleisten |
| 32 | F30: SA 322 UND US UND SA 337 |
| 33 | F30: SA 322 UND ECE UND SA 337 |
| 34 | F30: SA 322 UND (SA 3AC OR SA 8SL) UND SA 337 |
| 35 | F31: SA 322 UND SA 316 UND ECE |
| 36 | F31: SA 322  UND SA 316 UND (SA 3AC OR SA 8SL) |
| 37 | F31: SA 322 UND SA 316 UND ECE UND Chromzierleisten |
| 38 | F31: SA 322 UND SA 316 UND (SA 3AC OR SA 8SL) UND Chromzierleisten |
| 39 | F31: SA 322 UND SA 316 UND ECE UND SA 337 |
| 40 | F31: SA 322 UND SA 316 UND (SA 3AC OR SA 8SL) UND SA 337 |
| 59 | RR04 |
| 60 | F10M: US |
| 61 | F10M:  ECE |
| 255 | ungültig |

### TAB_SPIEGELMEM_POS

| WERT | TEXT |
| --- | --- |
| 0x01 | Taste 1 |
| 0x02 | Taste 2 |
| 0x03 | Schlüssel |

### TAB_SPIEGELSELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Spiegeltest nicht gestartet (seit letztem Klemmenwechsel) |
| 0x01 | Spiegeltest aktiv |
| 0x02 | Spiegeltest erfolgreich abgeschlossen |
| 0x03 | Spiegeltest mit Fehlern abgeschlossen |
| 0x04 | Spiegeltest mit internen Fehlern abgeschlossen |
| 0x05 | Spiegeltest abgebrochen durch Benutzer |
| 0x06 | Spiegeltest nicht gestartet aufgrund ungültiger Randbedingungen |
| 0xFF | ungültiger Wert |

### TAB_SPIEGELSELBSTTEST_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein interner Fehler aufgetreten |
| 0x01 | Zentrieren linker Spiegel fehlerhaft |
| 0x02 | Nach oben fahren linker Spiegel fehlerhaft |
| 0x03 | Nach rechts fahren linker Spiegel fehlerhaft |
| 0x04 | Nach unten fahren linker Spiegel fehlerhaft |
| 0x05 | Nach links fahren linker Spiegel fehlerhaft |
| 0x06 | Zentrieren rechter Spiegel fehlerhaft |
| 0x07 | Nach oben fahren rechter Spiegel fehlerhaft |
| 0x08 | Nach rechts fahren rechter Spiegel fehlerhaft |
| 0x09 | Nach unten fahren rechter Spiegel fehlerhaft |
| 0x0A | Nach links fahren rechter Spiegel fehlerhaft |
| 0x0B | Memorystellung anfahren linker Spiegel fehlerhaft |
| 0x0C | Memorystellung anfahren rechter Spiegel fehlerhaft |
| 0xFF | ungültiger Wert |
| 0xFE | Es sind mehrere Fehler aufgetreten. Fehlerspeicher überprüfen |

### TAB_SPIEGEL_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Spiegel |
| 0x01 | linker Spiegel |
| 0x02 | rechter Spiegel |
| 0x03 | beide Spiegel |

### TAB_SPIEGEL_HC2

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | An Kein Blinken |
| 0x02 | An Blinken Stufe 1 |
| 0x03 | An Blinken Stufe 2 |
| 0x04 | An Blinken Stufe 3 |
| 0x0D | Anzeigefehler |
| 0xFF | Signal ungültig |

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

### TAB_SPIEGEL_KLAPPEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Spiegel ausklappen und Bordstein-Position zurücknehmen |
| 0x01 | Spiegel einklappen |
| 0x02 | Spiegel ausklappen |
| 0x03 | Bordstein-Position anfahren |
| 0x04 | Bordstein-Position zurücknehmen |
| 0xFF | ungültiger Wert |

### TAB_SPIEGEL_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ansteuerung |
| 0x01 | links |
| 0x02 | oben |
| 0x03 | rechts |
| 0x04 | unten |
| 0xFF | ungültiger Wert |

### TAB_TUERKONTAKTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Leitungsbruch |
| 0x01 | ungültiger Wert |
| 0x02 | Tür geschlossen |
| 0x03 | ungültiger Wert |
| 0x04 | Tür offen |
| 0x05 | ungültiger Wert |
| 0x06 | Kurzschluss |
| 0x07 | ungültiger Wert |
| 0xFF | ungültiger Wert |

### TAB_VORWARNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | früh |
| 0x02 | spät |

### LAMPEN_AUSGANG

| ZEILE | ID | FID | AID | DIAINDEX | NAME | PRIO | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0x00 | 0x11 | 06 | 24 | SL_I_L | 150 | 1. Schlusslicht links (innen) |
| 1 | 0x01 | 0x12 | 0F | 25 | SL_I_R | 150 | 1. Schlusslicht rechts (innen) |
| 2 | 0x02 | 0x13 | 07 | 0 | SL_A_L | 150 | 2. Schlusslicht links (aussen) |
| 3 | 0x03 | 0x14 | 08 | 1 | SL_A_R | 150 | 2. Schlusslicht rechts (aussen) |
| 4 | 0x04 | 0xFF | FF | 2 | AL_L | 0 | Abblendlicht links |
| 5 | 0x05 | 0xFF | FF | 3 | AL_R | 0 | Abblendlicht rechts |
| 6 | 0x06 | 0x0F | 10 | 4 | BL_L | 130 | Bremslicht links |
| 7 | 0x07 | 0xFF | FF | 26 | BL_M | 0 | Bremslicht mitte (CHMSL) |
| 8 | 0x08 | 0x10 | 0C | 5 | BL_R | 130 | Bremslicht rechts |
| 9 | 0x09 | 0xFF | FF | 27 | KL_VA | 0 | Klemme VA |
| 10 | 0x0A | 0xFF | FF | 28 | IB_IL_2 | 0 | Innenbeleuchtung/Innenleuchte hinten |
| 11 | 0x0B | 0x0B | 0A | 6 | FL_L | 150 | Fernlicht links (Halogen)/ Abbiegelicht (Xenon) |
| 12 | 0x0C | 0x0C | 02 | 7 | FL_R | 150 | Fernlicht rechts (Halogen)/ Abbiegelicht (Xenon) |
| 13 | 0x0D | 0xFF | FF | 29 | BI_XENON_L_R | 0 | Bi-Xenon-Klappe L+R |
| 14 | 0x0E | 0xFF | FF | 23 | KZL | 0 | Kennzeichenleuchte |
| 15 | 0x0F | 0xFF | 12 | 8 | NSL_L | 150 | Nebelschlusslicht links |
| 16 | 0x10 | 0xFF | 05 | 9 | NSL_R | 150 | Nebelschlusslicht rechts |
| 17 | 0x11 | 0x09 | 0E | 10 | NSW_L | 150 | Nebelscheinwerfer links |
| 18 | 0x12 | 0x0A | 01 | 11 | NSW_R | 150 | Nebelscheinwerfer rechts |
| 19 | 0x13 | 0x05 | 11 | 12 | TFL_L | 180 | Positionslicht links (Halogen) / Tagfahrlicht (Xenon) |
| 20 | 0x14 | 0x06 | 04 | 13 | TFL_R | 180 | Positionslicht rechts (Halogen) / Tagfahrlicht (Xenon) |
| 21 | 0x13 | 0x01 | 11 | 12 | POS_L | 150 | Positionslicht links |
| 22 | 0x14 | 0x02 | 04 | 13 | POS_R | 150 | Positionslicht rechts |
| 23 | 0x15 | 0xFF | FF | 14 | RFL_L | 0 | Rückfahrscheinwerfer links |
| 24 | 0x16 | 0xFF | FF | 15 | RFL_R | 0 | Rückfahrscheinwerfer rechts |
| 25 | 0x17 | 0x15 | 0B | 30 | SML_V_L | 150 | Sidemarker vorne links |
| 26 | 0x18 | 0x16 | 0D | 31 | SML_V_R | 150 | Sidemarker vorne rechts |
| 27 | 0x1A | 0xFF | FF | 16 | FRA_H_L | 0 | Fahrtrichtungsanzeiger hinten links |
| 28 | 0x1B | 0xFF | FF | 17 | FRA_H_R | 0 | Fahrtrichtungsanzeiger hinten rechts |
| 29 | 0x1C | 0xFF | FF | 18 | FRA_V_L | 0 | Fahrtrichtungsanzeiger vorne links |
| 30 | 0x1D | 0xFF | FF | 19 | FRA_V_R | 0 | Fahrtrichtungsanzeiger vorne rechts |
| 31 | 0x1E | 0xFF | FF | 34 | LED_WBL | 0 | LED Warnblinken |
| 32 | 0x1F | 0xFF | FF | 20 | IB_IL | 0 | Innenbeleuchtung/Innenleuchte |
| 33 | 0x20 | 0xFF | FF | 21 | KL_58G | 0 | Kl. 58G |
| 34 | 0x22 | 0xFF | FF | 22 | VFB | 0 | Vorfeldleuchte(n) |
| 35 | 0x26 | 0xFF | FF | 38 | AMB1 | 0 | Colorswitch Ambiente 1 |
| 36 | 0x27 | 0xFF | FF | 39 | AMB2 | 0 | Colourswitch Ambiente 2 |
| 37 | 0x31 | 0xFF | FF | 35 | UBATT_TMS_R | 0 | Versorgung TMS R |
| 38 | 0x32 | 0xFF | FF | 37 | TWL | 0 | Türwarnleuchte |
| 39 | 0xCC | 0x17 | FF | 255 | BL_L_2 | 150 | 2. Bremslicht links |
| 40 | 0xCC | 0x18 | FF | 255 | BL_R_2 | 150 | 2. Bremslicht rechts |
| 41 | 0x3B | 0xFF | FF | 36 | UBATT_TMS_L | 0 | Versorgung TMS L |
| 42 | 0x36 | 0xFF | 03 | 32 | FRA_V_L_2 | 0 | 2. Blinkerausgang F12/13 vorne links |
| 43 | 0x37 | 0xFF | 09 | 33 | FRA_V_R_2 | 0 | 2. Blinkerausgang F12/13 vorne rechts |
| 44 | 0xCC | 0x07 | FF | 255 | ABBL_L | 150 | Abbiegelicht links (LED F12/13) |
| 45 | 0xCC | 0x08 | FF | 255 | ABBL_R | 150 | Abbiegelicht rechts (LED F12/13) |
| 255 | 0xCC | 0xFF | AA | 255 | XX | 0 | unbekannte Leuchte |

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
| 5 | ARM mode entered |
| 6 | NVM param corrupted |
| 7 | Max reversal |
| 8 | Max motion |
| 9 | Invalid HES |
| 10 | Too many HES |
| 11 | Supply off/reset in motion |
| 12 | Stuck relay |
| 13 | Open relay |
| 14 | Hot reset |
| 20 | Bad coding |
| 21 | NVM Pos corrupted |
| 22 | NVM Ada corrupted |
| 23 | ASCET request |
| 24 | Diag request |
| 25 | Auto init |
| 26 | Hall off in motion |
| 27 | Clear Position block |
| 28 | Clear Adaptation block |
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

### EKS_HERSTELLER

| NUMMER | TEXT |
| --- | --- |
| 0x00 | KEIN HERSTELLER |
| 0x01 | BROSE |
| 0x02 | KUESTER |
| 0x06 | ARVINMERITOR_EKS |
| 0x03 | UNGÜLTIG |

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
| 18 | SR_WAITING_FOR_EE |
| 19 | SR_EE_TIMEOUT |
| 20 | SR_NOT_POSSIBLE_TO_WRITE_EE |
| 118 | INVALID_TARGET_POS_LOW |
| 119 | INVALID_TARGET_POS_HIGH |
| 120 | MOTOR_SHORT |
| 121 | STOP_NIX |
| 0xXY | UNGUELTIG |

### ARM_MOTORSTOP_REASON_TEXT

| NUMMER | TEXT |
| --- | --- |
| 0 | None |
| 1 | Blocked up |
| 2 | Blocked down |
| 3 | Init (upper mechanical stop) |
| 4 | Re-init (upper mechanical stop) |
| 5 | Upper soft stop |
| 6 | Exceed upper mechanical stop |
| 7 | Lower mechanical stop |
| 8 | Lower soft stop |
| 9 | Exceed lower mechanical stop |
| 10 | Pre-init (lower mechanical stop) |
| 20 | Step by step |
| 21 | Shortdrop position |
| 30 | Motor timeout |
| 31 | Under/overvoltage |
| 32 | Shutdown or reset during motion |
| 33 | Too many HES pulses |
| 34 | Invalid HES direction |
| 40 | Desinit via ASCET |
| 41 | Desinit via diagnostic |
| 42 | Thermal protection |
| 43 | Hall off in motion |
| 0xXY | undefined |

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
| 0 | WL not initialized, Reversal during Auto Initialization with Force Limited |
| 2 | WL initialized |
| 0xXY | undefined |

### ARM_REVERSE_SIDE

| NUMMER | TEXT |
| --- | --- |
| 0 | Driver side |
| 128 | Passenger side |
| 0xXY | undefined |

### STATEMACHINE_TEXT

| WERT | TEXT |
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

### FH_EESTATUS_TEXT

| NUMMER | TEXT |
| --- | --- |
| 0 | EE_OK |
| 1 | EE_PENDING |
| 2 | EE_NOT_OK |
| 3 | EE_ROM_LOADED |
| 0xXY | UNGÜLTIG |

### TMS

| NR | SYMBOL | TEXT | TEXT_GR |
| --- | --- | --- | --- |
| 1 | left | linkes TMS | TMS links |
| 2 | right | rechtes TMS | TMS rechts |
| 3 | both | beide TMS | Beide TMS |
| 4 | error | Fehler! | Fehler! |

### TMS_F_ORT_TEXTE

| NR | TEXT |
| --- | --- |
| 0 | LWR-Treiber meldet Leitungsunterbrechung |
| 1 | LWR-Treiber meldet Kurzschluß |
| 2 | LWR-Treiber meldet Defekt |
| 3 | LWR-Treiber meldet Übertemperatur |
| 4 | LWR-Treiber meldet Überspannung |
| 5 | LWR-Treiber meldet Unterspannung |
| 10 | Kurvenlicht-Treiber meldet Leitungsunterbrechung |
| 11 | Kurvenlicht-Treiber meldet Kurzschluß |
| 12 | Kurvenlicht-Treiber meldet Defekt |
| 13 | Kurvenlicht-Treiber meldet Übertemperatur |
| 14 | Kurvenlicht-Treiber meldet Überspannung |
| 15 | Kurvenlicht-Treiber meldet Unterspannung |
| 16 | Kurvenlicht: Schrittverlustgrenze 1 überschritten |
| 17 | Kurvenlicht: Schrittverlustgrenze 2 überschritten |
| 18 | Kurvenlicht: Schrittverlustgrenze 3 überschritten |
| 19 | Kurvenlicht: Schrittverlustgrenze 4 überschritten |
| 20 | Kurvenlicht: Schrittverlustgrenze 5 überschritten |
| 21 | Kurvenlicht: Schrittverlustgrenze 6 überschritten |
| 22 | Kurvenlicht-Sensor: keine Flanke erkannt |
| 23 | Kurvenlicht-Sensor: kein Signal erkannt |
| 30 | LED-Blinker: Leitungsunterbrechung |
| 31 | LED-Blinker: Überstrom |
| 32 | LED-Blinker: Treiberfehler |
| 33 | LED-Blinker: Übertemperatur |
| 34 | LED-Blinker: Einlernfehler |
| 35 | LED-Lichtring: Leitungsunterbrechung |
| 36 | LED-Lichtring: Überstrom |
| 37 | LED-Lichtring: Treiberfehler |
| 38 | LED-Lichtring: Übertemperatur |
| 39 | LED-Lichtring: Einlernfehler |
| 40 | LED-Seitenmarkierungsleuchte: Leitungsunterbrechung |
| 41 | LED-Seitenmarkierungsleuchte: Überstrom |
| 42 | LED-Seitenmarkierungsleuchte: Treiberfehler |
| 43 | LED-Seitenmarkierungsleuchte: Übertemperatur |
| 44 | LED-Seitenmarkierungsleuchte: Einlernfehler |
| 45 | LED-Designleuchte: Leitungsunterbrechung |
| 46 | LED-Designleuchte: Überstrom |
| 47 | LED-Designleuchte: Treiberfehler |
| 48 | LED-Designleuchte: Übertemperatur |
| 49 | LED-Designleuchte: Einlernfehler |
| 50 | LIN defekt |
| 51 | EEPROM-Prüfsumme falsch |
| 52 | EEPROM-Prüfsumme (Programmcode) falsch |
| 53 | Versorgungsspannung für Kurvenlicht-Sensor: außerhalb Normalbereich |
| 54 | Versorgungsspannung für Kurvenlicht-Sensor: Spikes erkannt |
| 55 | Notprogramm aktiv |
| 56 | Unerwartete Spannungsabschaltung |
| 57 | Übertemperatur |
| 58 | Watchdog defekt |
| 59 | DC/DC-Wandler defekt |
| 60 | Codierindex falsch |
| 61 | DC/DC-Wandler für Tagfahrlicht defekt |
| 62 | Data-Flash defekt oder nicht codiert |
| 63 | unbekannter Fehlerort |

### TMS_F_UMWELT_TAB_0

| NR | U1_TEXT | MUL1 | DIV1 | ADD1 | EINH1 | U2_TEXT | MUL2 | DIV2 | ADD2 | EINH2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 1 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 2 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 3 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 4 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 5 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 10 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 11 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 12 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 13 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 14 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 15 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 16 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 17 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 18 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 19 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 20 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 21 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 22 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 23 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 24 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 30 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 31 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 32 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 33 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 34 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 35 | LED-Strom | 1890 | 255 | 0 | mA | LED-Spannung | 46.567 | 255 | 0 | V |
| 36 | LED-Strom | 1890 | 255 | 0 | mA | LED-Spannung | 46.567 | 255 | 0 | V |
| 37 | LED-Strom | 1890 | 255 | 0 | mA | LED-Spannung | 46.567 | 255 | 0 | V |
| 38 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 39 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 40 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 41 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 42 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 43 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 44 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 45 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 46 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 47 | LED-Strom | 1301 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 48 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 49 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 50 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 51 | Fehlerklasse | 1 | 1 | 0 | (1 = korrigiert / 2 = nicht korrigierbar) |  |  |  |  |  |
| 52 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 53 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 54 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 55 | Ursache | 1 | 1 | 0 | (bitcodiert) | TMS-Versorgungsspannung | 18.06 | 255 | 0 | Volt |
| 56 |  |  |  |  |  |  |  |  |  |  |
| 57 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 58 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 59 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | LED-Spannung | 10 | 255 | 0 | V |
| 60 |  |  |  |  |  |  |  |  |  |  |
| 61 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | LED-Spannung | 46.567 | 255 | 0 | V |
| 62 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 63 |  |  |  |  |  |  |  |  |  |  |

### TMS_F_UMWELT_TAB_2

| NR | U1_TEXT | MUL1 | DIV1 | ADD1 | EINH1 | U2_TEXT | MUL2 | DIV2 | ADD2 | EINH2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 1 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 2 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 3 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 4 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 5 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 10 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 11 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 12 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 13 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 14 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 15 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 16 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 17 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 18 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 19 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 20 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 21 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 22 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 23 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 24 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 30 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 31 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 32 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 33 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 34 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 35 | LED-Strom | 1890 | 255 | 0 | mA | LED-Spannung | 46.567 | 255 | 0 | V |
| 36 | LED-Strom | 1890 | 255 | 0 | mA | LED-Spannung | 46.567 | 255 | 0 | V |
| 37 | LED-Strom | 1890 | 255 | 0 | mA | LED-Spannung | 46.567 | 255 | 0 | V |
| 38 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 39 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 40 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 41 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 42 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 43 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 44 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 45 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 46 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 47 | LED-Strom | 1224 | 255 | 0 | mA | LED-Spannung | 10 | 255 | 0 | V |
| 48 | TMS-Temperatur | 1 | 1 | -40 | °C |  |  |  |  |  |
| 49 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 50 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 51 | Fehlerklasse | 1 | 1 | 0 | (1 = korrigiert / 2 = nicht korrigierbar) |  |  |  |  |  |
| 52 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 53 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 54 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 55 | Ursache | 1 | 1 | 0 | (bitcodiert) | TMS-Versorgungsspannung | 18.06 | 255 | 0 | Volt |
| 56 |  |  |  |  |  |  |  |  |  |  |
| 57 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 58 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 59 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | LED-Spannung | 10 | 255 | 0 | V |
| 60 |  |  |  |  |  |  |  |  |  |  |
| 61 | TMS-Versorgungsspannung | 18.06 | 255 | 0 | V | LED-Spannung | 46.567 | 255 | 0 | V |
| 62 | Ursache | 1 | 1 | 0 |  |  |  |  |  |  |
| 63 |  |  |  |  |  |  |  |  |  |  |

### TMS_F_ART_TEXTE

| NR | TEXT |
| --- | --- |
| 0 | momentan nicht vorhanden |
| 1 | momentan vorhanden |
| 2 | Fehler! |

### TMS_F_WDH_TEXTE

| NR | TEXT |
| --- | --- |
| 0 | Fehler einmalig aufgetreten |
| 1 | Fehler wiederholt aufgetreten |
| 2 | Fehler! |

### TMS_LED_CH_CURRENT

| CH_TYPE | CH_IDX | MUL | DIV |
| --- | --- | --- | --- |
| FRA_1_00 | 0 | 1301 | 255 |
| FRA_2_00 | 1 | 1301 | 255 |
| FRA_3_00 | 2 | 1301 | 255 |
| FRA_4_00 | 3 | 1301 | 255 |
| SML_00 | 4 | 1301 | 255 |
| DL_00 | 5 | 1301 | 255 |
| FRA_1_01 | 0 | 1301 | 255 |
| FRA_2_01 | 1 | 1301 | 255 |
| FRA_3_01 | 2 | 1301 | 255 |
| FRA_4_01 | 3 | 1301 | 255 |
| SML_01 | 4 | 1301 | 255 |
| DL_01 | 5 | 1301 | 255 |
| FRA_1_02 | 0 | 1224 | 255 |
| FRA_2_02 | 1 | 1224 | 255 |
| FRA_3_02 | 2 | 1224 | 255 |
| FRA_4_02 | 3 | 1224 | 255 |
| FRA_5_02 | 4 | 1224 | 255 |
| SML_02 | 5 | 1224 | 255 |
| DL_02 | 6 | 1224 | 255 |
| PL_02 | 7 | 1890 | 255 |
| SML_03 | 0 | 0 | 1 |
| DL_03 | 1 | 0 | 1 |
| PL_03 | 2 | 0 | 1 |
| ERROR | error | 0 | 1 |

### TMS_PWM_MUL

| TMS_TYPE | MUL |
| --- | --- |
| 00 | 1 |
| 01 | 2 |
| 02 | 1 |
| 03 | 2 |
| ERROR | error |

### REF_TYPE

| NR | SYMBOL | TEXT |
| --- | --- | --- |
| 0 | standard | Standard AHL-Referenzlauf |
| 1 | hard | AHL-Referenzlauf ohne Sensor gegen harten Anschlag |
| 2 | error | Fehler! |

### TMS_LED_FUNCTIONS

| NR | TEXT | SHORT |
| --- | --- | --- |
| 0 | alle LEDs aus | OFF |
| 1 | Blinker (nur Entwicklung) | IDC |
| 2 | Blinker dauernd ein | IDC_PERM |
| 4 | Designleuchte | DL |
| 8 | Seitenmarkierungsleuchte | SML |
| 16 | Positionsleuchte | PL |
| 255 | Fehler oder keine Auswahl laut Tabelle! | ERR |

### TAB_AKTION_STEUERN_LICHT

| ZNR | WERT | TEXT |
| --- | --- | --- |
| 0 | 0 | AUS |
| 1 | 0 | Aus |
| 2 | 0 | aus |
| 3 | 0 | 0 |
| 4 | 1 | EIN |
| 5 | 1 | Ein |
| 6 | 1 | ein |
| 7 | 1 | 1 |
| 8 | 2 | RETURN_CTRL_TO_ECU |
| 9 | 255 | ungültig / Fehler erkannt |

### TMS2_F_ORT_TEXTE

| NR | TEXT |
| --- | --- |
| 0 | LWR-Treiber meldet Leitungsunterbrechung |
| 1 | LWR-Treiber meldet Kurzschluß |
| 2 | LWR-Treiber meldet Defekt |
| 3 | LWR-Treiber meldet Übertemperatur |
| 4 | LWR-Treiber meldet Überspannung |
| 5 | LWR-Treiber meldet Unterspannung |
| 10 | Kurvenlicht-Treiber meldet Leitungsunterbrechung |
| 11 | Kurvenlicht-Treiber meldet Kurzschluß |
| 12 | Kurvenlicht-Treiber meldet Defekt |
| 13 | Kurvenlicht-Treiber meldet Übertemperatur |
| 14 | Kurvenlicht-Treiber meldet Überspannung |
| 15 | Kurvenlicht-Treiber meldet Unterspannung |
| 16 | Kurvenlicht: Schrittverlustgrenze 1 überschritten |
| 17 | Kurvenlicht: Schrittverlustgrenze 2 überschritten |
| 18 | Kurvenlicht: Schrittverlustgrenze 3 überschritten |
| 19 | Kurvenlicht: Schrittverlustgrenze 4 überschritten |
| 20 | Kurvenlicht: Schrittverlustgrenze 5 überschritten |
| 21 | Kurvenlicht: Schrittverlustgrenze 6 überschritten |
| 22 | Kurvenlicht-Sensor: keine Flanke erkannt |
| 23 | Kurvenlicht-Sensor: kein Signal erkannt |
| 30 | LED-Blinker: Leitungsunterbrechung |
| 31 | LED-Blinker: Überstrom |
| 32 | LED-Blinker: Treiberfehler |
| 33 | LED-Blinker: Übertemperatur |
| 34 | LED-Blinker: Einlernfehler |
| 35 | LED-Lichtring: Leitungsunterbrechung |
| 36 | LED-Lichtring: Überstrom |
| 37 | LED-Lichtring: Treiberfehler |
| 38 | LED-Lichtring: Übertemperatur |
| 39 | LED-Lichtring: Einlernfehler |
| 40 | LED-Seitenmarkierungsleuchte: Leitungsunterbrechung |
| 41 | LED-Seitenmarkierungsleuchte: Überstrom |
| 42 | LED-Seitenmarkierungsleuchte: Treiberfehler |
| 43 | LED-Seitenmarkierungsleuchte: Übertemperatur |
| 44 | LED-Seitenmarkierungsleuchte: Einlernfehler |
| 45 | LED-Designleuchte: Leitungsunterbrechung |
| 46 | LED-Designleuchte: Überstrom |
| 47 | LED-Designleuchte: Treiberfehler |
| 48 | LED-Designleuchte: Übertemperatur |
| 49 | LED-Designleuchte: Einlernfehler |
| 50 | LIN defekt |
| 51 | EEPROM-Prüfsumme falsch |
| 52 | EEPROM-Prüfsumme (Programmcode) falsch |
| 53 | Versorgungsspannung für Kurvenlicht-Sensor: außerhalb Normalbereich |
| 54 | Versorgungsspannung für Kurvenlicht-Sensor: Spikes erkannt |
| 55 | Notprogramm aktiv |
| 56 | Unerwartete Spannungsabschaltung |
| 57 | Übertemperatur |
| 58 | Watchdog defekt |
| 59 | DC/DC-Wandler defekt |
| 60 | Codierindex falsch |
| 61 | DC/DC-Wandler für Tagfahrlicht defekt |
| 62 | Data-Flash defekt oder nicht codiert |
| 70 | LED-Lichtring: Abschaltung wegen Überspannung |
| 71 | LED-Lichtring: Hardwareschutzschaltung meldet Fehler |
| 80 | LEDs nicht eingelernt |
| 81 | Modul nicht codiert |
| 82 | Defaultcodierdaten geladen |
| 83 | CRC-Fehler in Codierung |
| 84 | TMS-Variantenkennung falsch |
| 255 | unbekannter Fehlerort |

### TMS2_F_UMWELT_TAB

| NR | U1_TEXT | MUL1 | DIV1 | ADD1 | EINH1 | U2_TEXT | MUL2 | DIV2 | ADD2 | EINH2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 1 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 2 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 3 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 4 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 5 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 10 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 11 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 12 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 13 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 14 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 15 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 16 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 17 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 18 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 19 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 20 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 21 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C |
| 22 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V |
| 23 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V |
| 30 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 31 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 32 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 33 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C |
| 34 | Ursache #1 | 1 | 1 | 0 |  | Ursache #2 | 1 | 1 | 0 |  |
| 35 | LED-Spannungsschwelle | 1 | 1 | 0 | V | LED-Spannung | 1 | 1 | 0 | V |
| 36 | LED-Spannungsschwelle | 1 | 1 | 0 | V | LED-Spannung | 1 | 1 | 0 | V |
| 37 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 38 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C |
| 39 | Ursache #1 | 1 | 1 | 0 |  | Ursache #2 | 1 | 1 | 0 |  |
| 40 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 41 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 42 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 43 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C |
| 44 | Ursache #1 | 1 | 1 | 0 |  | Ursache #2 | 1 | 1 | 0 |  |
| 45 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 46 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 47 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V |
| 48 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C |
| 49 | Ursache #1 | 1 | 1 | 0 |  | Ursache #2 | 1 | 1 | 0 |  |
| 50 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 51 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 52 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 53 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V |
| 54 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V |
| 55 | Ursache | 1 | 1 | 0 | (bitcodiert) | TMS-Versorgungsspannung | 1 | 10 | 0 | V |
| 56 |  |  |  |  |  |  |  |  |  |  |
| 57 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 58 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 59 | Vorgabe LED-Spannung | 1 | 10 | 0 | V | LED-Spannung | 1 | 10 | 0 | V |
| 60 |  |  |  |  |  |  |  |  |  |  |
| 61 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 62 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 70 | Spannungsschwelle | 1 | 10 | 0 | V | TFL-Versorgungsspannung | 1 | 10 | 0 | V |
| 71 | TFL-Versorgungsspannung | 1 | 1 | 0 | V | TFL-Betriebsart | 1 | 1 | 0 |  |
| 80 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 81 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 82 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 83 | Ursache | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 84 |  | 1 | 1 | 0 |  |  | 1 | 1 | 0 |  |
| 255 |  |  |  |  |  |  |  |  |  |  |
