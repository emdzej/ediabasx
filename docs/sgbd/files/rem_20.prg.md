# rem_20.prg

## General

|  |  |
| --- | --- |
| File | rem_20.prg |
| Type | PRG |
| Jobs | 78 |
| Tables | 219 |
| Origin | BMW EI-422 Florian_Fecht |
| Revision | 6.002 |
| Author | BMW EI-640 Christof_Struck, Continental_Automotive_GmbH IBS Con |
| ECU Comment | Abgestimmt mit Plata Kamila, F020_DKT_REM__CT01_REM__CT02.017_024_013.pdx |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Rear Electronic Module |  |  |
| ORIGIN | string | BMW EI-422 Florian_Fecht |  |  |
| REVISION | string | 6.002 |  |  |
| AUTHOR | string | BMW EI-640 Christof_Struck, Continental_Automotive_GmbH IBS Con |  |  |
| COMMENT | string | Abgestimmt mit Plata Kamila, F020_DKT_REM__CT01_REM__CT02.017_024_013.pdx |  |  |
| PACKAGE | string | 1.56 |  |  |
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

### _STEUERN_FH_FAH_THERMOMONITOR_AKTIV

Konfiguriert die Thermomonitorfunktion $2E 60 06          Setzen des Fahreseiteverfahrmodus $2E 60 07          Setzen des Beifahreseiteverfahrmodus

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Zuordnung siehe TAB_FH_THERMOMONITOR Werttabelle Zugelassene Werte siehe Tabelle TAB_FH_THERMOMONITOR |

### _STEUERN_FH_BFH_THERMOMONITOR_AKTIV

Konfiguriert die Thermomonitorfunktion $2E 60 06          Setzen des Fahreseiteverfahrmodus $2E 60 07          Setzen des Beifahreseiteverfahrmodus

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Zuordnung siehe TAB_FH_THERMOMONITOR Werttabelle Zugelassene Werte siehe Tabelle TAB_FH_THERMOMONITOR |

### _STATUS_FH_FAH_BEWERTUNG_KENNLINIEN

$22 60 0A          Liest die Kennline der Fahreseite hinten

_No arguments._

### _STATUS_FH_BFH_BEWERTUNG_KENNLINIEN

$22 60 0B          Liest die Kennline der Fahreseite hinten

_No arguments._

### STEUERN_VCM_VIN

UDS  : $2E   WriteDataByIdentifier UDS  : $F190 Sub-Parameter Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_VIN | string | VIN Fahrgestellnummer |

### _STEUERN_ISTUFE

UDS  : $2E   WriteDataByIdentifier UDS  : $100B Sub-Parameter Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| I_STUFE_WERK_WERT | string | Das Argument enthält die I-Stufe Werk. ?????-??-??-???? ? = ASCII-Zeichen A - Z, 0 - 9 |
| I_STUFE_HO_WERT | string | Das Argument enthält die I-Stufe Handelsorganisation (HO). ?????-??-??-???? ? = ASCII-Zeichen A - Z, 0 - 9 |
| I_STUFE_HO_BACKUP_WERT | string | Das Argument enthält die I-Stufe HO Backup. ?????-??-??-???? ? = ASCII-Zeichen A - Z, 0 - 9 |

### STEUERN_RESET_LICHT_UEBERSPANNUNGSCOUNTER

Der Job dient zum Rücksetzen des Überspannungsschutz-Zählers STEUERN_RESET_LICHT_UEBERSPANNUNGSCOUNTER(0x4523)

_No arguments._

### STEUERN_RESET_BETRIEBSDAUER

Gibt den Status der Betriebsdauer aller REM-Spezifischen Lampenausgnge zurucck. Als RESULT werden je Kanal 4 Byte mit den aktuellen Betriebsminuten zurukgegeben. STEUERN_RESET_BETRIEBSDAUER(0x4506)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | ausgewählte Leuchte Spalte SHORT_LABEL oder ID aus Tabelle LAMPEN_AUSGANG |

### STEUERN_LEUCHTENAUSGANG_DIGITAL

Controls the output $2E 0x4501 00     Leuchte ausschalten (XX Ausgang Leuchte) $2E 0x4501 01     Leuchte einschalten (XX Ausgang Leuchte)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | ausgewählte Leuchte Spalte SHORT_LABEL oder ID aus Tabelle LAMPEN_AUSGANG |
| AKTION | unsigned char |  |

### STEUERN_FH_THERMOMONITOR_AKTIV

Konfiguriert die Thermomonitorfunktion $2E 60 06          Setzen des Fahreseiteverfahrmodus $2E 60 07          Setzen des Beifahreseiteverfahrmodus

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe TAB_DEV_FH_AUSWAHL Werttabelle Zugelassene Werte siehe Tabelle TAB_FH_AUSWAHL |
| AKTION | string | Zuordnung siehe TAB_THERMOMONITOR_SETZEN Werttabelle Zugelassene Werte siehe Tabelle TAB_THERMOMONITOR_SETZEN |

### STEUERN_FH_REVERSIER_LOGGER_LOESCHEN

Löscht den Reversierlogger FH_REVERSIER_LOGGER_LOESCHEN (0x6047)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe TAB_FH_AUSWAHL Werttabelle Zugelassene Werte siehe Tabelle TAB_FH_AUSWAHL |

### STEUERN_FH_MOTORSTOP_LOGGER_LOESCHEN

Löscht den Logger für Abbruch Motorlauf. Der DID muss aus dem SG-Spezifischen Bereich kommen. FH_MOTORSTOP_LOGGER_LOESCHEN (0x6045)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe TAB_FH_AUSWAHL Werttabelle Zugelassene Werte siehe Tabelle TAB_FH_AUSWAHL |

### STEUERN_FH_DENORMIERUNGS_LOGGER_LOESCHEN

Löscht den Denormierlogger FH_DENORMIERUNGS_LOGGER_LOESCHEN (0x6049)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe TAB_FH_AUSWAHL Werttabelle Zugelassene Werte siehe Tabelle TAB_FH_AUSWAHL |

### STEUERN_EM_FE_MODE

Schreiben der Aktivierungsliste für den Fe-Mode.  

| Name | Type | Description |
| --- | --- | --- |
| FE_MODE | unsigned char | FE_MODE_INACTIVE = 0x00 FE_MODE_ACTIVE = 0x01 |
| ARGUMENT_FETRAFLA_ID_1 | unsigned char | table TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_2 | unsigned char | table TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_3 | unsigned char | table TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_4 | unsigned char | table TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_5 | unsigned char | table TAB_FETRAFLA_ID WERT |

### STATUS_VCM_VIN

VIN auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F190 Sub-Parameter Modus: Default

_No arguments._

### STATUS_VCM_I_STUFE_LESEN

I-Stufe auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100B Sub-Parameter Modus: Default

_No arguments._

### STATUS_SENSE_LESEN

Liest die Sense-Werte aus $2E 45 01 XX 64    Leuchte einschalten (XX Ausgang Leuchte) $31 01 45 20 00 XX Messung starten   (XX Kanal Leuchte) waitex(300)        !!! 300ms !!! Warten nach dem Start der Messung $31 03 45 20 00 XX Messwert auslesen (XX Kanal Leuchte) $31 02 45 20 00 XX Messung stoppen   (XX Kanal Leuchte) $2E 45 01 XX 00    Leuchte ausschalten (XX Ausgang Leuchte)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | ausgewählte Leuchte Spalte SHORT_LABEL oder ID aus Tabelle LAMPEN_AUSGANG |

### STATUS_LICHT_UEBERSPANNUNGSCOUNTER

Status des Licht Überspannungscounters auslesen (Bei jeder Aktivierung des Licht Überspannungsschutzes wird der Counter inkrementiert) STATUS_LICHT_UEBERSPANNUNGSCOUNTER (0x4508)

_No arguments._

### STATUS_LEUCHTEN_BETRIEBSDAUER

Gibt den Status der Betriebsdauer aller REM-Spezifischen Lampenausgänge zurück. Als RESULT werden je Kanal 4 Byte mit den aktuellen Betriebsminuten zurückgegeben. STATUS_LEUCHTEN_BETRIEBSDAUER (0x4505)

_No arguments._

### STATUS_LEUCHTENAUSGANG_DIGITAL

This job returns the current status of a lamp output i.e whether it is on or off STATUS_LEUCHTENAUSGANG_DIGITAL (0x4500)

_No arguments._

### STATUS_KURZSCHLUSSABSCHALTUNG

Gibt den Status der Kurzschlussabschaltung aller REM-Spezifischen Lampenausgänge zurück. Als RESULT wird je Kanal 1 Byte mit den gültigen Stati 0/1 zurückgegeben: 0: Kurzschlussabschaltung inaktiv 1: Kurzschlussabschaltung aktiv STATUS_KURZSCHLUSSABSCHALTUNG (0x4503)

_No arguments._

### STATUS_FUELLSTAND_TANK_RE_LESEN

Ausgabe des Tankfüllstandes in Ohm UDS  : $22   ReadDataByIdentifier UDS  : $D259 Sub-Parameter

_No arguments._

### STATUS_FUELLSTAND_TANK_LI_LESEN

Ausgabe des Tankfüllstandes in Ohm UDS  : $22   ReadDataByIdentifier UDS  : $D258 Sub-Parameter

_No arguments._

### STATUS_FH_THERMOMONITOR_AKTIV

Liest den Status der Thermomonitorfunktion zurück $22 60 06          Liest den Status des Fahreseiteverfahrmodus $22 60 07          Liest den Status des Beifahreseiteverfahrmodus

_No arguments._

### STATUS_FH_STATISTIKZAEHLER_LESEN

Lesen Statistikzähler Fensterheber  STATUS_FH_STATISTIKZAEHLER_LESEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe TAB_DEV_FH_AUSWAHL HEX format (0xXX) |

### STATUS_FH_SCHLIESSZEIT

Liest die Schliesszeit aus $22 60 0A          Liest die Kennline der Fahreseite hinten $22 60 0B          Liest die Kennline der Beifahreseite hinten

_No arguments._

### STATUS_FH_REVERSIER_LOGGER_LESEN

Liest die aufgezeichneten Daten des Reversierloggers. Datenstruktur: Ein Ereignis umfasst 8 Byte. Die 5 letzten Ereignisse werden pro Ort nichtflüchtig abgespeichert (im Result Namen ist X durch 1-5 zu ersetzen). FH_REVERSIER_LOGGER_LESEN (0x6046)

_No arguments._

### STATUS_FH_MOTORSTOP_LOGGER_LESEN

Liest die aufgezeichneten Daten des Loggers für Abbruch Motorlauf Die letzten 10 Ereignisse werden für jeden Ort gespeichert. FH_MOTORSTOP_LOGGER_LESEN (0x6044)

_No arguments._

### STATUS_FH_DENORMIERUNGS_LOGGER_LESEN

Liest die aufgezeichneten Daten des Denormierungsloggers. Datenstruktur: Ein Ereignis umfasst 8 Byte. Die 5 letzten Ereignisse pro Scheibe werden nichtflüchtig abgespeichert (Im Result Namen ist X durch 1-5 zu ersetzen). _FH_DENORMIERUNGS_LOGGER_LESEN (0x6048)

_No arguments._

### STATUS_EM_FE_MODE

Auslesen der Aktivierungsliste für den Fe-Mode.  0x5106 _ECUMA_FEMODE

_No arguments._

### STATUS_ECUMA_HISTORIE

ECUMA ID STATUS_ECUMA_HISTORIE (0x5100)

_No arguments._

### STATUS_ECUMA_AWAKE

result ID STATUS_ECUMA_AWAKE (0x5102)

_No arguments._

### STATUS_BF_SBC_CAN1_FAILURE

Reads out the cause of the DTC

_No arguments._

### STATUS_BF_INVALID_ISR_ENV_DATA

Reads out the invalid ISR ID

_No arguments._

### STATUS_BF_ECU_CODETRAP_ADDR_ENV_DATA

Reads out the address when invalid code is executed

_No arguments._

### STATUS_FH_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F20,F21,F22,F23,F30,F31,F32,F33 |
| ELEMENT | string | FA:  Fenster Fahrerseite BF:  Fenster Beifahrerseite FAH: Fenster Fahrerseite hinten BFH: Fenster Beifahrerseite hinten |

### STATUS_SW_COMPONENTS

Ausgabe der SW-Komponenten mit Versionsinfo soweit unterstützt. STATUS_SW_COMPONENTS (0x5110)

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
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
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
| 0x5A01 | Innenbeleuchtung – Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung – Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung – Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung – Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung – Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung – Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung – Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung – Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung – Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung – Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung – Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung – Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung – Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung – Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung – Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung – Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung – Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung – Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung – Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter – Mittelkonsole Fond | 1 |
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
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
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

### ARG_0X100A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_ID | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle VerbauortTabelle |

### ARG_0X3F1C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRZEUGAUFTRAG_TEIL_1 | - | high | string[160] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Result enthält die ersten 160 Byte (uninterpretierte Rohdaten) des Fahrzeugsauftrags aus dem CAS. 160 Byte hexdezimale Daten |

### ARG_0X3F1D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRZEUGAUFTRAG_TEIL_2 | - | high | string[160] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Result enthält die zweiten 160 Byte (uninterpretierte Rohdaten) des Fahrzeugsauftrags aus dem CAS. 160 Byte hexdezimale Daten |

### ARG_0X5106

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_FE_MODE_ANZAHL_ERGEBNISSAETZE_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gesamtzahl der Ergebnissätze. |
| STAT_EM_COUNT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zähler des aktuell übergebenen Satzes |
| STAT_EM_ID_WERT | 0-n | high | unsigned char | - | TAB_FE_FUNCTIONS_REM | 1.0 | 1.0 | 0.0 | - | - | EM_ID (ID siehe Tabelle ZSG_BF_3545) |
| STAT_FE_MODE | 0-n | high | unsigned char | - | TAB_FE_MODE | 1.0 | 1.0 | 0.0 | - | - | FE_MODE_ACTIVE = 0x01 FE_MODE_INACTIVE = 0x00 |

### ARG_0X5108

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_OFF | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_DEACT | 1.0 | 1.0 | 0.0 | - | - | [0] = 1 (ON) / 0 (OFF) [0] = 0xFD (deaktiviert alle Wachhalte-Quellen) [0] = 0xFE (aktiviert alle Wachhalte-Quellen) |
| ECUMA_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | - | - | ECUMA_ID |

### ARG_0X6000

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X6006

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6007

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6030

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der generellen Freigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen des Panikmodus Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### ARG_0X6045

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0X6047

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0X6049

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0XA178

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| RICHTUNG | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Öffnen 1: Schliessen |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 0.0 | 65535.0 | Übergebener Wert (in ms) wird auf 100ms Schritte abgerundet |

### ARG_0XA17B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| MODUS | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNEN | 1.0 | 1.0 | 0.0 | - | - | Einlernmodus |

### ARG_0XA17E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert 0 für FH ist die Geschlossen-Position |

### ARG_0XA17F

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| POSITION | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Angabe Position 0: geschlossen 100: offen |

### ARG_0XA180

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| FUNKTION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SFK1 | 1.0 | 1.0 | 0.0 | - | - | Welche Funktion soll angefahren werden |
| RICHTUNG | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ursprungsposition anfahren 1: Position anfahren |

### ARG_0XA181

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_TASTER_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_TASTER_RICHTUNG |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in 10 ms 0xFFFF: (max. 65s) |

### ARG_0XA182

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SERVICEPOSITION | 1.0 | 1.0 | 0.0 | - | - | Angabe der Position |

### ARG_0XA533

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_AUSGANG_LEUCHTEN | - | - | - | - | - | Auswahl des Ausgangs |

### ARG_0XAA94

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_ZSG_ZV_AKTION_CLIENT | 1.0 | 1.0 | 0.0 | - | - | Auszuführende ZV-Aktion 5 = Selektiv entriegeln Heckklappe 6 = Selektiv entriegeln Heckscheibe |

### ARG_0XAA95

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | high | unsigned char | - | TAB_CAS_KURZSCHLUSSABSCHALTUNG_KOMPONENTE | 1.0 | 1.0 | 0.0 | - | - | Das Argument dient zur Auswahl der zu deaktiverenden Kurzschlussabschaltung |

### ARG_0XD17A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0XD17B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0XD18F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Kurzhubfunktion sperren 1: Kurzhub freischalten |

### ARG_0XD1AB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| AKTION | 0-n | - | unsigned char | - | TAB_RELAIS_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Das Relais wird mit Schutzfunktion Timeout 4s direkt angesteuert. |
| RELAIS_NUMBER | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_RELAIS_NUMBER | 1.0 | 1.0 | 0.0 | - | - | Angabe Relais |

### ARG_0XD1AC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Abschalten 1: Einschalten |

### ARG_0XD30A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: keine Aktion;  1: Ansteuerung Heckrollo einschalten (Heckrollo verfährt bis Block. Erneute Ansteuerung führt zu Richtungswechsel) |

### ARG_0XD34A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Deaktivierung 1: Aktivierung |

### ARG_0XD356

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ende Ansteuerung 1: Heckscheibenwischer in Park-Position |

### ARG_0XD35F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ausschalten Scheibenwischer hinten;  1: Einschalten Scheibenwischer hinten |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Ansteuer-Zeit in Sekunden |

### ARG_0XD388

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSSIGNAL_PDC | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für PDC simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_TV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für TV simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_RV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für Rückfahrkamera simuliert  werden soll:  0 = AUS 1 = EIN |
| AKTIVIERUNGSSIGNAL_PMA | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie das Aktivierungssignal für PMA simuliert  werden soll:  0 = AUS 1 = EIN |

### ARG_0XD5A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_SH_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD673

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Startet den Sensortest für die Ultraschallsensoren. 1 = Start |

### ARG_0XD676

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schaltet das PDC-System an oder aus:  0 = AUS = PDC nicht aktiv,  1 = EIN = PDC aktiv |

### ARG_0XD71C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_FA | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4000.0 | Angabe Position Fahrer MIN-/MAX-Werte vom Lieferanten |
| POS_BF | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 4000.0 | Angabe Position Beifahrer MIN-/MAX-Werte vom Lieferanten |

### ARG_0XD71D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG_FA | 0-n | - | unsigned char | - | TAB_GZB_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Richtung Gurtzubringer Fahrer 0x00: Stop 0x01: ausfahren 0x02: einfahren |
| RICHTUNG_BF | 0-n | - | unsigned char | - | TAB_GZB_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Richtung Gurtzubringer Beifahrer 0x00: Stop 0x01: ausfahren 0x02: einfahren |

### ARG_0XD72A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD72F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD732

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD737

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD794

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Aus 1: Ein |

### ARG_0XD7AA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD7B0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD7EB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD7F1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 0 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD970

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Heckscheibenheizung aus 1: Heckscheibenheizung ein |
| ZEIT | s | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Ansteuerzeit in Sekunden |

### ARG_0XDA7D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKKLAPPE_AUSSEN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA80

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA92

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_HECKKLAPPE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA93

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA94

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_VORRAST | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XF200

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |
| CONF_CAN_DEBUG_CH_1 | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe linker FH deaktiviert 1: Ausgabe linker FH aktiviert |
| CONF_CAN_DEBUG_CH_2 | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe rechter FH deaktiviert 1: Ausgabe rechter FH aktiviert |

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
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FH_THERMOMONITOR_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (übersteuert) |
| 0x01 | Thermo 90 aktiv (übersteuert) |
| 0x02 | Thermo 100 aktiv (übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |
| 0x04 | Thermo 90 aktiv, nicht übersteuert |
| 0x05 | Thermo 100 aktiv, nicht übersteuert |
| 0xFF | Ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027200 | Energiesparmode aktiv | 0 |
| 0x02FF72 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030100 | FH FAH, Relais Öffnen, fehlende Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030101 | FH FAH, Relais Schliessen, keine Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030102 | FH FAH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030103 | FH FAH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030105 | FH FAH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030106 | FH FAH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030107 | FH FAH, Hallelement A und Hallelement B : Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x03010A | FH FAH: Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03010B | FH FAH, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03010C | FH FAH, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03010D | FH FAH, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03010E | FH FAH, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03010F | FH FAH, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030110 | FH FAH, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030112 | FH FAH: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030114 | FH FAH: Position fehlerhaft, Normierungsverlust | 0 |
| 0x030115 | FH FAH: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030116 | FH FAH: Motortemperatur 90 Prozent Schwelle überschritten | 1 |
| 0x030117 | FH FAH: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030118 | FH FAH: Kein Motorstart wegen Überspannung/Unterspannung | 1 |
| 0x030119 | FH FAH: ungültige Codierung | 0 |
| 0x03011C | FH FAH: Keine Initialisierung aufgrund ungültiger Randbedingungen | 1 |
| 0x03011D | FH FAH: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03011E | FH FAH: fehlende Eingangsspannung am Relais: Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030120 | FH FAH: System ist nicht normiert | 0 |
| 0x030130 | Fensterheber Fahrer hinten, Taster: Kurzschluss nach Masse | 0 |
| 0x030131 | Fensterheber Fahrer hinten, Taster: Taster hängt | 0 |
| 0x030180 | FH BFH, Relais Öffnen, fehlende Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030181 | FH BFH, Relais Schliessen, keine Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030182 | FH BFH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030183 | FH BFH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030185 | FH BFH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030186 | FH BFH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030187 | FH BFH, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03018A | FH BFH: Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03018B | FH BFH, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03018C | FH BFH, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03018D | FH BFH, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03018E | FH BFH, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03018F | FH BFH, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030190 | FH BFH, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030192 | FH BFH: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030194 | FH BFH: Position fehlerhaft, Normierungsverlust | 0 |
| 0x030195 | FH BFH: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030196 | FH BFH: Motortemperatur 90 Prozent Schwelle überschritten | 1 |
| 0x030197 | FH BFH: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030198 | FH BFH: Kein Motorstart wegen Überspannung/Unterspannung | 1 |
| 0x030199 | FH BFH: ungültige Codierung | 0 |
| 0x03019C | FH BFH: Keine Initialisierung aufgrund ungültiger Randbedingungen | 1 |
| 0x03019D | FH BFH: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03019E | FH BFH: fehlende Eingangsspannung am Relais: Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x0301A0 | FH BFH: System ist nicht normiert | 0 |
| 0x0301B0 | Fensterheber Beifahrer hinten, Taster: Kurzschluss nach Masse | 0 |
| 0x0301B1 | Fensterheber Beifahrer hinten, Taster: Taster hängt | 0 |
| 0x803190 | Interner Steuergerätefehler: ASIC-Fehler | 0 |
| 0x8031D2 | Sensorversorgungsspannung zu niedrig | 0 |
| 0x8031D3 | Sensorversorgungsspannung zu hoch | 0 |
| 0x8031D4 | Sensorversorgungsspannung: Kurzschluss nach Minus | 0 |
| 0x8031D5 | Sensorversorgungsspannung: Kurzschluss nach Plus | 0 |
| 0x8031D6 | Interner Steuergerätefehler: SPI Kommunikation zu ASIC fehlerhaft | 0 |
| 0x8031D7 | Interner Steuergerätefehler SPI-Kommunikation ASIC Prozessor fehlerhaft | 0 |
| 0x8031D8 | Interner REM-Fehler (zyklische Aufruf nicht im definierten Zeitraster) | 0 |
| 0x8031D9 | Bordspannung zu niedrig | 1 |
| 0x8031DA | Bordspannung zu hoch | 1 |
| 0x803209 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80320B | Ultraschallsensor hinten Außen links: Ausschwingzeit zu kurz | 0 |
| 0x80320D | Ultraschallsensor hinten Außen links: Sensor antwortet nicht | 0 |
| 0x80320E | Ultraschallsensor hinten Außen links: Programmierung fehlerhaft | 0 |
| 0x80320F | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803211 | Ultraschallsensor hinten Mitte links: Ausschwingzeit zu kurz | 0 |
| 0x803213 | Ultraschallsensor hinten Mitte links: Sensor antwortet nicht | 0 |
| 0x803214 | Ultraschallsensor hinten Mitte links: Programmierung fehlerhaft | 0 |
| 0x803215 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803217 | Ultraschallsensor hinten Mitte rechts: Ausschwingzeit zu kurz | 0 |
| 0x803219 | Ultraschallsensor hinten Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80321A | Ultraschallsensor hinten Mitte rechts: Programmierung fehlerhaft | 0 |
| 0x80321B | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80321D | Ultraschallsensor hinten Außen rechts: Ausschwingzeit zu kurz | 0 |
| 0x80321F | Ultraschallsensor hinten Außen rechts: Sensor antwortet nicht | 0 |
| 0x803220 | Ultraschallsensor hinten Außen rechts: Programmierung fehlerhaft | 0 |
| 0x80322D | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80322F | Ultraschallsensor vorn Außen links: Ausschwingzeit zu kurz | 0 |
| 0x803231 | Ultraschallsensor vorn Außen links: Sensor antwortet nicht | 0 |
| 0x803232 | Ultraschallsensor vorn Außen links: Programmierung fehlerhaft | 0 |
| 0x803233 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803235 | Ultraschallsensor vorn Mitte links: Ausschwingzeit zu kurz | 0 |
| 0x803237 | Ultraschallsensor vorn Mitte links: Sensor antwortet nicht | 0 |
| 0x803238 | Ultraschallsensor vorn Mitte links: Programmierung fehlerhaft | 0 |
| 0x803239 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x80323B | Ultraschallsensor vorn Mitte rechts: Ausschwingzeit zu kurz | 0 |
| 0x80323D | Ultraschallsensor vorn Mitte rechts: Sensor antwortet nicht | 0 |
| 0x80323E | Ultraschallsensor vorn Mitte rechts: Programmierung fehlerhaft | 0 |
| 0x80323F | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Plus | 0 |
| 0x803241 | Ultraschallsensor vorn Außen rechts: Ausschwingzeit zu kurz | 0 |
| 0x803243 | Ultraschallsensor vorn Außen rechts: Sensor antwortet nicht | 0 |
| 0x803244 | Ultraschallsensor vorn Außen rechts: Programmierung fehlerhaft | 0 |
| 0x803271 | Akustische Abstandswarnung nicht möglich | 1 |
| 0x803280 | PDC nicht aktivierbar | 0 |
| 0x803281 | TVC nicht aktivierbar | 0 |
| 0x803282 | RVC nicht aktivierbar | 0 |
| 0x803283 | PMA nicht aktivierbar | 0 |
| 0x803294 | PDC aktiv ohne Aktivierung | 0 |
| 0x803295 | TVC aktiv ohne Aktivierung | 0 |
| 0x803296 | RVC aktiv ohne Aktivierung | 0 |
| 0x803297 | PMA aktiv ohne Aktivierung | 0 |
| 0x8032B0 | Ultraschallsensor hinten Außen links, Leitung: Unterbrechung | 0 |
| 0x8032B1 | Ultraschallsensor hinten Außen links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032B2 | Ultraschallsensor hinten Außen links: Ausschwingzeit zu lang | 0 |
| 0x8032B3 | Ultraschallsensor hinten Außen links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032B4 | Ultraschallsensor hinten Außen links: Falscher Sensortyp verbaut | 0 |
| 0x8032B5 | Ultraschallsensor hinten Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032B6 | Ultraschallsensor hinten Außen links: Nebenschluss Datenleitung (Signalpegel n,i.O.) | 0 |
| 0x8032B8 | Ultraschallsensor hinten Mitte links, Leitung: Unterbrechung | 0 |
| 0x8032B9 | Ultraschallsensor hinten Mitte links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032BA | Ultraschallsensor hinten Mitte links: Ausschwingzeit zu lang | 0 |
| 0x8032BB | Ultraschallsensor hinten Mitte links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032BC | Ultraschallsensor hinten Mitte links: Falscher Sensortyp verbaut | 0 |
| 0x8032BD | Ultraschallsensor hinten Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032BE | Ultraschallsensor hinten Mitte links: Nebenschluss Datenleitung  (Signalpegel n.i.O.) | 0 |
| 0x8032C0 | Ultraschallsensor hinten Mitte rechts, Leitung: Unterbrechung | 0 |
| 0x8032C1 | Ultraschallsensor hinten Mitte rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032C2 | Ultraschallsensor hinten Mitte rechts: Ausschwingzeit zu lang | 0 |
| 0x8032C3 | Ultraschallsensor hinten Mitte rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032C4 | Ultraschallsensor hinten Mitte rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032C5 | Ultraschallsensor hinten Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032C6 | Ultraschallsensor hinten Mitte rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032C8 | Ultraschallsensor hinten Außen rechts, Leitung: Unterbrechung | 0 |
| 0x8032C9 | Ultraschallsensor hinten Außen rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032CA | Ultraschallsensor hinten Außen rechts: Ausschwingzeit zu lang | 0 |
| 0x8032CB | Ultraschallsensor hinten Außen rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032CC | Ultraschallsensor hinten Außen rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032CD | Ultraschallsensor hinten Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032CE | Ultraschallsensor hinten Außen rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032D0 | Ultraschallsensor vorn Außen links, Leitung: Unterbrechung | 0 |
| 0x8032D1 | Ultraschallsensor vorn Außen links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032D2 | Ultraschallsensor vorn Außen links: Ausschwingzeit zu lang | 0 |
| 0x8032D3 | Ultraschallsensor vorn Außen links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032D4 | Ultraschallsensor vorn Außen links: Falscher Sensortyp verbaut | 0 |
| 0x8032D5 | Ultraschallsensor vorn Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032D6 | Ultraschallsensor vorn Außen links: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032D8 | Ultraschallsensor vorn Mitte links, Leitung: Unterbrechung | 0 |
| 0x8032D9 | Ultraschallsensor vorn Mitte links, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032DA | Ultraschallsensor vorn Mitte links: Ausschwingzeit zu lang | 0 |
| 0x8032DB | Ultraschallsensor vorn Mitte links: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032DC | Ultraschallsensor vorn Mitte links: Falscher Sensortyp verbaut | 0 |
| 0x8032DD | Ultraschallsensor vorn Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032DE | Ultraschallsensor vorn Mitte links: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032E0 | Ultraschallsensor vorn Mitte rechts, Leitung: Unterbrechung | 0 |
| 0x8032E1 | Ultraschallsensor vorn Mitte rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032E2 | Ultraschallsensor vorn Mitte rechts: Ausschwingzeit zu lang | 0 |
| 0x8032E3 | Ultraschallsensor vorn Mitte rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032E4 | Ultraschallsensor vorn Mitte rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032E5 | Ultraschallsensor vorn Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032E6 | Ultraschallsensor vorn Mitte rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x8032E8 | Ultraschallsensor vorn Außen rechts, Leitung: Unterbrechung | 0 |
| 0x8032E9 | Ultraschallsensor vorn Außen rechts, Signalleitung: Kurzschluss nach Minus | 0 |
| 0x8032EA | Ultraschallsensor vorn Außen rechts: Ausschwingzeit zu lang | 0 |
| 0x8032EB | Ultraschallsensor vorn Außen rechts: Interner Sensorabgleich nicht möglich | 0 |
| 0x8032EC | Ultraschallsensor vorn Außen rechts: Falscher Sensortyp verbaut | 0 |
| 0x8032ED | Ultraschallsensor vorn Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032EE | Ultraschallsensor vorn Außen rechts: Nebenschluss Datenleitung (Signalpegel n.i.O.) | 0 |
| 0x804805 | Interner Steuergeraetefehler Software | 0 |
| 0x804811 | Versorgungsunterspannung 8V5 | 0 |
| 0x804812 | Versorgungsüberspannung 16V5 | 0 |
| 0x804813 | Versorgungsspannung Klemme 30L1 fehlt | 0 |
| 0x804814 | Versorgungsspannung Klemme 30L2 fehlt | 0 |
| 0x804815 | SBC Resetleitung Kurschluss nach GND bzw. Vcc | 0 |
| 0x804816 | SBC Temperatur-Vorwarnung | 0 |
| 0x804817 | SBC Spannungsversorgung VCC2 Übertemperatur | 0 |
| 0x804819 | SBC Spannungsversorgung VCC3 Überlast | 0 |
| 0x80481B | LIN1 Kurzschluss nach Vbat oder GND oder Timeout | 0 |
| 0x80481C | LIN2 Kurzschluss nach Vbat oder GND oder Timeout | 0 |
| 0x804820 | CPU Main defekt | 0 |
| 0x80482E | Falsche HW-Variante | 0 |
| 0x804833 | ZSG Spielschutz: weckfähige Eingänge gesperrt | 1 |
| 0x804840 | ZV-Antrieb Heckklappe (MERHK): Heckklappenkontakt defekt | 0 |
| 0x804841 | ZV-Antrieb Heckscheibe (MERHS): Heckscheibenkontakt defekt | 0 |
| 0x804842 | Vorrastkontakt (VRK) der Soft-Close-Automatik(SCA): Kurzschluss Batteriespannung oder Leitungsunterbrechung oder Soft-Close-Automatik klemmt oder Heckklappenkontakt defekt | 0 |
| 0x804843 | ZV-Antrieb Heckklappe (MERHK): Kurzschluss nach Masse | 0 |
| 0x804844 | ZV-Antrieb Heckklappe (MERHK): Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804845 | ZV-Antrieb Heckscheibe (MERHS): Kurzschluss nach Masse | 0 |
| 0x804846 | ZV-Antrieb Heckscheibe (MERHS): Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804849 | ZV-Antrieb Heckklappe (MERHK) oder Heckscheibe (MERHS): Dauerhafte Deaktiverung aufgrund maximaler Anzahl Kurzschlüsse gegen Masse | 1 |
| 0x80484A | Taster Heckklappe Aussen (T_HKL_S): Dauerbetätigung | 0 |
| 0x80484B | Taster Heckscheibe (TOEHS): Dauerbetätigung | 0 |
| 0x80484C | Vorrastkontakt (VRK) der Soft-Close-Automatik(SCA): Kurzschluss Masse oder Soft-Close-Automatik klemmt oder Heckklappenkontakt defekt | 0 |
| 0x804860 | Ausgang BFD_L hat Kurzschluss | 0 |
| 0x804861 | Ausgang BFD_R hat Kurzschluss | 0 |
| 0x804862 | Ausgang BL_L hat Kurzschluss | 0 |
| 0x804863 | Ausgang BL_M hat Kurzschluss | 0 |
| 0x804864 | Ausgang BL_R hat Kurzschluss | 0 |
| 0x804865 | Ausgang FRA_H_L hat Kurzschluss | 0 |
| 0x804866 | Ausgang FRA_H_R hat Kurzschluss | 0 |
| 0x804867 | Ausgang KZL hat Kurzschluss | 0 |
| 0x804868 | Ausgang NSL_L hat Kurzschluss | 0 |
| 0x804869 | Ausgang NSL_R hat Kurzschluss | 0 |
| 0x80486A | Ausgang RFS_L hat Kurzschluss | 0 |
| 0x80486B | Ausgang RFS_R hat Kurzschluss | 0 |
| 0x80486C | Ausgang SL_L hat Kurzschluss | 0 |
| 0x80486D | Ausgang SL_2_L hat Kurzschluss | 0 |
| 0x80486E | Ausgang SL_R hat Kurzschluss | 0 |
| 0x80486F | Ausgang SL_2_R hat Kurzschluss | 0 |
| 0x804870 | Ausgang BFD_L defekt | 0 |
| 0x804871 | Ausgang BFD_R defekt | 0 |
| 0x804872 | Ausgang BL_L defekt | 0 |
| 0x804873 | Ausgang BL_M defekt | 0 |
| 0x804874 | Ausgang BL_R defekt | 0 |
| 0x804875 | Ein oder mehrere Ausgänge haben Anzahl zulässiger Kurzschlusszyklen (Codierbar) überschritten | 0 |
| 0x804876 | Ausgang FRA_H_L defekt | 0 |
| 0x804877 | Ausgang FRA_H_R defekt | 0 |
| 0x804878 | Ausgang KZL defekt | 0 |
| 0x80487F | Ausgang NSL_L defekt | 0 |
| 0x804880 | Ausgang NSL_R defekt | 0 |
| 0x804881 | Ausgang RFS_L defekt | 0 |
| 0x804882 | Ausgang RFS_R defekt | 0 |
| 0x804883 | Ausgang SL_L defekt | 0 |
| 0x804884 | Ausgang SL_2_L defekt | 0 |
| 0x804885 | Ausgang SL_R defekt | 0 |
| 0x804886 | Ausgang SL_2_R defekt | 0 |
| 0x804887 | Leuchten Spannungsschutz Aktiv | 1 |
| 0x804890 | Blinkerplausibilisierung fehlgeschlagen: Funktion deaktiviert | 1 |
| 0x804892 | Bremslichtschalter-Information unplausibel | 1 |
| 0x80489B | Kodierung: Parameter Überspannungsschutz unplausibel | 0 |
| 0x80489C | Kodierung: Parameter DualSpannung unplausibel | 0 |
| 0x80489D | Kodierung: Lampenmapping unplausibel | 0 |
| 0x80489E | Kodierung: Parameter Lampenausgänge unplausibel | 0 |
| 0x80489F | Kodierung: Lampenmapping fehlgeschlagen | 0 |
| 0x8048A0 | Heckwischer, Relais: Kurzschluss nach Masse oder Relais schaltet nicht | 0 |
| 0x8048A1 | Heckwischer, Relais: Relaiskleber | 0 |
| 0x8048A3 | Heckwischer defekt oder Wischer Rücksetzkontakt schaltet nicht ein  (Heckwischer Blockiert) | 0 |
| 0x8048C0 | Heckscheibenheizung, Relais: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x8048C1 | Heckscheibenheizung, Relais: Leitung zum Relais unterbrochen oder Kurzschluss nach Plus | 0 |
| 0x8048C2 | Heckscheibenheizung: Verbrauchsreduzierung oder Abschaltung wegen Übertemperatur | 0 |
| 0x8048D2 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): EEPROM Fehler | 0 |
| 0x8048D4 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Überlastung PWM | 0 |
| 0x8048D5 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Taster hängt | 0 |
| 0x8048DA | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): EEPROM Fehler | 0 |
| 0x8048DC | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Überlastung PWM | 0 |
| 0x8048DD | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Taster hängt | 0 |
| 0x8048E0 | Sitzheizung BF hinten (LIN), Heizmatte Kissen: Kurzschluss nach Masse | 0 |
| 0x8048E1 | Sitzheizung BF hinten (LIN), Heizmatte Kissen: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x8048E2 | Sitzheizung BF hinten (LIN), Heizmatte Lehne: Kurzschluss nach Masse | 0 |
| 0x8048E3 | Sitzheizung BF hinten (LIN), Heizmatte Lehne: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x8048E4 | Sitzheizung BF hinten (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x8048E5 | Sitzheizung BF hinten (LIN), Temperatursensor Kissen Kurzschluss | 0 |
| 0x8048E6 | Sitzheizung BF hinten (LIN), Temperatursensor Kissen Leitungsbruch | 0 |
| 0x8048E7 | Sitzheizung BF hinten (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x8048E8 | Sitzheizung BF hinten (LIN), Temperatursensor Lehne Kurzschluss | 0 |
| 0x8048E9 | Sitzheizung BF hinten (LIN), Temperatursensor Lehne Leitungsbruch | 0 |
| 0x8048EA | Sitzheizung BF hinten (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x8048EB | Sitzheizung BF hinten (LIN): Überspannung erkannt | 1 |
| 0x8048EC | Sitzheizung BF hinten (LIN): Unterspannung erkannt | 1 |
| 0x8048ED | Sitzheizung BF hinten (LIN): Interner Steuergerätefehler | 0 |
| 0x8048EE | Sitzheizung BF hinten (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x8048EF | Sitzheizung BF hinten (LIN): Leiterplatte Temperatur: Messung defekt | 0 |
| 0x8048F0 | Sitzheizung FA hinten (LIN), Heizmatte Kissen: Kurzschluss nach Masse | 0 |
| 0x8048F1 | Sitzheizung FA hinten (LIN), Heizmatte Kissen: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x8048F2 | Sitzheizung FA hinten (LIN), Heizmatte Lehne: Kurzschluss nach Masse | 0 |
| 0x8048F3 | Sitzheizung FA hinten (LIN), Heizmatte Lehne: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x8048F4 | Sitzheizung FA hinten (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x8048F5 | Sitzheizung FA hinten (LIN), Temperatursensor Kissen Kurzschluss | 0 |
| 0x8048F6 | Sitzheizung FA hinten (LIN), Temperatursensor Kissen Leitungsbruch | 0 |
| 0x8048F7 | Sitzheizung FA hinten (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x8048F8 | Sitzheizung FA hinten (LIN), Temperatursensor Lehne Kurzschluss | 0 |
| 0x8048F9 | Sitzheizung FA hinten (LIN), Temperatursensor Lehne Leitungsbruch | 0 |
| 0x8048FA | Sitzheizung FA hinten (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x8048FB | Sitzheizung FA hinten (LIN): Überspannung erkannt | 1 |
| 0x8048FC | Sitzheizung FA hinten (LIN): Unterspannung erkannt | 1 |
| 0x8048FD | Sitzheizung FA hinten (LIN): Interner Steuergerätefehler | 0 |
| 0x8048FE | Sitzheizung FA hinten (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x8048FF | Sitzheizung FA hinten (LIN): Leiterplatte Temperatur: Messung defekt | 0 |
| 0x804900 | Sitzheizung BF (LIN), Heizmatte Kissen: Kurzschluss nach Masse | 0 |
| 0x804901 | Sitzheizung BF (LIN), Heizmatte Kissen: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x804902 | Sitzheizung BF (LIN), Heizmatte Lehne: Kurzschluss nach Masse | 0 |
| 0x804903 | Sitzheizung BF (LIN), Heizmatte Lehne: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x804904 | Sitzheizung BF (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x804905 | Sitzheizung BF (LIN), Temperatursensor Kissen Kurzschluss | 0 |
| 0x804906 | Sitzheizung BF (LIN), Temperatursensor Kissen Leitungsbruch | 0 |
| 0x804907 | Sitzheizung BF (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x804908 | Sitzheizung BF (LIN), Temperatursensor Lehne Kurzschluss | 0 |
| 0x804909 | Sitzheizung BF (LIN), Temperatursensor Lehne Leitungsbruch | 0 |
| 0x80490A | Sitzheizung BF (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x80490B | Sitzheizung BF (LIN): Überspannung erkannt | 1 |
| 0x80490C | Sitzheizung BF (LIN): Unterspannung erkannt | 1 |
| 0x80490D | Sitzheizung BF  (LIN): Interner Steuergerätefehler | 0 |
| 0x80490E | Sitzheizung BF (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x80490F | Sitzheizung BF (LIN): Leiterplatte Temperatur: Messung defekt | 0 |
| 0x804910 | Sitzheizung FA (LIN), Heizmatte Kissen: Kurzschluss nach Masse | 0 |
| 0x804911 | Sitzheizung FA (LIN), Heizmatte Kissen: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x804912 | Sitzheizung FA (LIN), Heizmatte Lehne: Kurzschluss nach Masse | 0 |
| 0x804913 | Sitzheizung FA (LIN), Heizmatte Lehne: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x804914 | Sitzheizung FA (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x804915 | Sitzheizung FA (LIN), Temperatursensor Kissen Kurzschluss | 0 |
| 0x804916 | Sitzheizung FA (LIN), Temperatursensor Kissen Leitungsbruch | 0 |
| 0x804917 | Sitzheizung FA (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x804918 | Sitzheizung FA (LIN), Temperatursensor Lehne Kurzschluss | 0 |
| 0x804919 | Sitzheizung FA (LIN), Temperatursensor Lehne Leitungsbruch | 0 |
| 0x80491A | Sitzheizung FA (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x80491B | Sitzheizung FA (LIN): Überspannung erkannt | 1 |
| 0x80491C | Sitzheizung FA (LIN): Unterspannung erkannt | 1 |
| 0x80491D | Sitzheizung FA (LIN): Interner Steuergerätefehler | 0 |
| 0x80491E | Sitzheizung FA (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x80491F | Sitzheizung FA (LIN): Leiterplatte Temperatur: Messung defekt | 0 |
| 0x804943 | Sonnenrollo, Heck: Leitungsunterbrechung | 0 |
| 0x804945 | Sonnenrollo Heck Relais: Relais angeklebt | 0 |
| 0x804947 | Sonnenrollo, Heck Leitung auf: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x804948 | Sonnenrollo, Heck Leitung zu: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x804949 | Sonnenrollo, Heck Leitung auf: Überlast | 0 |
| 0x80494A | Sonnenrollo, Heck Leitung zu: Überlast | 0 |
| 0x804950 | Tanksensor links: Kurzschluss nach Masse | 0 |
| 0x804951 | Tanksensor links: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804952 | Tanksensor links: Signal ungültig | 0 |
| 0x804953 | Tanksensor rechts: Kurzschluss nach Masse | 0 |
| 0x804954 | Tanksensor rechts: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804955 | Tanksensor rechts: Signal ungültig | 0 |
| 0x804970 | Gurtzubringer (LIN), FA: Unterspannung erkannt | 1 |
| 0x804971 | Gurtzubringer (LIN), FA: Überspannung erkannt | 1 |
| 0x804972 | Gurtzubringer (LIN), FA: Motor defekt | 0 |
| 0x804973 | Gurtzubringer (LIN), FA: Kraftbegrenzung deaktiviert | 0 |
| 0x804974 | Gurtzubringer (LIN), FA: EEPROM Fehler | 0 |
| 0x804980 | Gurtzubringer (LIN), BF: Unterspannung erkannt | 1 |
| 0x804981 | Gurtzubringer (LIN), BF: Überspannung erkannt | 1 |
| 0x804982 | Gurtzubringer (LIN), BF: Motor defekt | 0 |
| 0x804983 | Gurtzubringer (LIN), BF: Kraftbegrenzung deaktiviert | 0 |
| 0x804984 | Gurtzubringer (LIN), BF: EEPROM Fehler | 0 |
| 0x804988 | Gurtzubringer (LIN), BF: Hallsensor defekt | 0 |
| 0x804989 | Gurtzubringer (LIN), FA: Hallsensor defekt | 0 |
| 0x80498A | Gurtzubringer (LIN), BF: Endlagenschalter defekt | 0 |
| 0x80498B | Gurtzubringer (LIN), FA: Endlagenschalter defekt | 0 |
| 0x8049E0 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x8049E1 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x8049E2 | Codierung: Signatur für Daten ungültig | 0 |
| 0x8049E3 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x8049E4 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0xE58468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xE58BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE58C0C | Gurtzubringer (LIN), BF: Nicht erwarteter LIN-Slave | 0 |
| 0xE58C0E | Gurtzubringer (LIN), FA: Nicht erwarteter LIN-Slave | 0 |
| 0xE58C10 | Gurtzubringer (LIN), BF: Fehlender LIN-Slave | 0 |
| 0xE58C13 | Gurtzubringer (LIN), FA: Fehlender LIN-Slave | 0 |
| 0xE58C15 | Sitzverstellschalter Fernbedienung BFS (LIN): Interner Fehler | 0 |
| 0xE58C17 | Sitzverstellschalter Fernbedienung BFS (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C18 | Sitzverstellschalter Fernbedienung BFS (LIN): nicht erwarteter LIN-Slave | 0 |
| 0xE58C19 | Sitzverstellschalter Fernbedienung BFS (LIN): Taster hängt | 0 |
| 0xE58C1E | LIN Master A: Kurzschluss | 0 |
| 0xE58C3E | LIN Master B: Kurzschluss | 0 |
| 0xE58C43 | Sitzheizung BF hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C44 | Sitzheizung BF hinten (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xE58C45 | Sitzheizung FA hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C46 | Sitzheizung FA hinten (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xE58C47 | Sitzheizung BF (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C48 | Sitzheizung BF (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xE58C49 | Sitzheizung FA (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C4A | Sitzheizung FA (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xE58C4C | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C4D | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xE58C4F | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Fehlender LIN-Slave | 0 |
| 0xE58C50 | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xE59402 | CAN-Botschaft, Aussentemperatur (A_TEMP): Fehlt | 1 |
| 0xE59406 | CAN-Botschaft, Bedienung Taster Parken (OP_PUBU_PKG): Fehlt | 1 |
| 0xE59408 | CAN-Botschaft, Blinken (BLINKEN): Fehlt | 1 |
| 0xE5940A | CAN-Botschaft, Blinkrichtung (FLSDIR): Fehlt oder CRC-Fehler | 1 |
| 0xE5940E | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Fehlt | 1 |
| 0xE59410 | CAN-Botschaft, Blinkrichtung (FLSDIR): Alive | 1 |
| 0xE59411 | CAN-Botschaft, Dimmung (DIMMUNG): Fehlt | 1 |
| 0xE59419 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Fehlt oder CRC-Fehler | 1 |
| 0xE5941B | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Alive | 1 |
| 0xE5941C | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Qualifierwert | 1 |
| 0xE5941D | CAN-Botschaft, Kilometerstand Reichweite (KILOMETERSTAND): Fehlt | 1 |
| 0xE5941F | CAN-Botschaft, Klemmen (KLEMMEN): Fehlt oder CRC-Fehler | 1 |
| 0xE59420 | CAN-Botschaft, Klemmen (KLEMMEN): Alive | 1 |
| 0xE59435 | CAN-Botschaft, Powermanagement Verbrauchersteuerung (POWERMGMT_CTR_COS): Fehlt | 1 |
| 0xE59437 | CAN-Botschaft, Relativzeit (RELATIVZEIT): Fehlt | 1 |
| 0xE59439 | CAN-Botschaft, Status Anhaenger (STAT_ANHAENGER): Fehlt | 1 |
| 0xE5943D | CAN-Botschaft, Status Gang Rueckwaerts (STAT_GANG_RUECKWAERTS): Fehlt | 1 |
| 0xE5943F | CAN-Botschaft, Status Gurt Kontakt Sitzbelegung (ST_BLT_CT_SOCCU): Fehlt | 1 |
| 0xE59441 | CAN-Botschaft, Status Klima Front Bedienteil (STAT_KLIMA_BEDIENTEIL): Fehlt | 1 |
| 0xE59445 | CAN-Botschaft, Status Parkassistent (ST_PMA): Fehlt | 1 |
| 0xE59449 | CAN-Botschaft, Status Qualifier Rear-View (ST_QU_RV): Fehlt | 1 |
| 0xE5944D | CAN-Botschaft, Status Qualifier Top-View (ST_QU_TVIEW): Fehlt | 1 |
| 0xE59451 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): Fehlt oder CRC-Fehler | 1 |
| 0xE59453 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): Alive | 1 |
| 0xE59458 | CAN-Botschaft, Steuerung FH SHD Zentrale (Komfort) (CTR_FH_SHD_ZENTRALE): Fehlt | 1 |
| 0xE5945A | CAN-Botschaft, Steuerung Licht Außen (CTR_LP_EX): Fehlt oder CRC-Fehler | 1 |
| 0xE5945C | CAN-Botschaft, Steuerung Licht Aussen (CTR_LP_EX): Alive | 1 |
| 0xE5945D | CAN-Botschaft, Steuerung Wischer Heck (CTR_WI_REAR): Fehlt | 1 |
| 0xE59460 | CAN-Botschaft, Steuerung Zentralverriegelung (CTR_ZV): Fehlt | 1 |
| 0xE59464 | CAN-Botschaft, Wegstrecke Fahrzeug (MILE_VEH): Fehlt | 1 |
| 0xE59466 | CAN-Botschaft, ZV und Klappenzustand (STAT_ZV_KLAPPEN): Fehlt | 1 |
| 0xE59469 | CAN-Botschaft, Status Cabrio Dach (ST_CABRF): Fehlt | 1 |
| 0xE59470 | CAN-Botschaft, Status Qualifier Rear-View (ST_QU_RV); Alive | 1 |
| 0xE59471 | CAN-Botschaft, Status Qualifier Rear-View (ST_QU_RV); CRC-Fehler | 1 |
| 0xE59473 | CAN-Botschaft, Status Qualifier Top-View (ST_QU_TVIEW); Alive | 1 |
| 0xE59474 | CAN-Botschaft, Status Qualifier Top-View (ST_QU_TVIEW); CRC-Fehler | 1 |
| 0xE59497 | CAN-Botschaft, Status Precrash Master (ST_PCSH_MST): Timeout | 1 |
| 0xE59598 | CAN-Botschaft, Status Precrash Master (ST_PCSH_MST): CRC-Fehler | 1 |
| 0xE5959B | CAN-Botschaft, Steuerung Crash (CTR_CR): Fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x401D | SPIELSCHUTZ_ID | 0-n | High | 0xFF | TAB_SPIELSCHUTZ_FUNCTIONS | 1.0 | 1.0 | 0.0 |
| 0x4050 | LC_MAPPING_SET_ID | 0-n | High | 0xFF | TAB_LCE_MAPPINGSET_IDS | 1.0 | 1.0 | 0.0 |
| 0x4051 | LC_MAPPING_ERROR_TYPE | 0-n | High | 0xFF | TAB_LAMP_MAPPING_ERROR_TYPE | 1.0 | 1.0 | 0.0 |
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
| 0x030104 | FH FAH, Relais Öffnen/Schliessen: Ausgangsspannung am falschen Relais | 0 |
| 0x03011A | FH FAH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03011B | FH FAH: Reversierung im Emergency-Modus | 1 |
| 0x03011F | FH FAH: keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt. | 0 |
| 0x030121 | FH FAH: Manueller Initialisierungsvorgang | 1 |
| 0x030122 | FH FAH: Automatischer Initialisierungsvorgang | 1 |
| 0x030184 | FH BFH, Relais Öffnen/Schliessen: Ausgangsspannung am falschen Relais | 0 |
| 0x03019A | FH BFH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03019B | FH BFH: Reversierung im Emergency-Modus | 1 |
| 0x03019F | FH BFH: keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt. | 0 |
| 0x0301A1 | FH BFH: Manueller Initialisierungsvorgang | 1 |
| 0x0301A2 | FH BFH: Automatischer Initialisierungsvorgang | 1 |
| 0x8031DF | LimpHome: aktiv | 1 |
| 0x803280 | PDC nicht aktivierbar | 0 |
| 0x803281 | TVC nicht aktivierbar | 0 |
| 0x803282 | RVC nicht aktivierbar | 0 |
| 0x803283 | PMA nicht aktivierbar | 0 |
| 0x803294 | PDC aktiv ohne Aktivierung | 0 |
| 0x803295 | TVC aktiv ohne Aktivierung | 0 |
| 0x803296 | RVC aktiv ohne Aktivierung | 0 |
| 0x803297 | PMA aktiv ohne Aktivierung | 0 |
| 0x8032B5 | Ultraschallsensor hinten Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032BD | Ultraschallsensor hinten Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032C5 | Ultraschallsensor hinten Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032CD | Ultraschallsensor hinten Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032D5 | Ultraschallsensor vorn Außen links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032DD | Ultraschallsensor vorn Mitte links: Akustische oder elektromagnetische Störung | 1 |
| 0x8032E5 | Ultraschallsensor vorn Mitte rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x8032ED | Ultraschallsensor vorn Außen rechts: Akustische oder elektromagnetische Störung | 1 |
| 0x804006 | ECUMA_RESET_CHKSTOP | 0 |
| 0x804018 | ECUMA_STACK_OVERFLOW | 0 |
| 0x804800 | Reset aus unbekanntem Grund | 0 |
| 0x804802 | Reset durch Extern | 0 |
| 0x804803 | Reset wegen Loss Of Clock | 0 |
| 0x804804 | Reset durch PLL Überwachung | 0 |
| 0x804807 | Reset wegen internem SW-Fehler | 0 |
| 0x804809 | ECUMA_RESET_CODETRAP | 0 |
| 0x80480A | ECUMA_RESET_ILEGADR | 0 |
| 0x80480B | ECUMA_RESET_ECC_EXEPTION | 0 |
| 0x80480F | Ungültiger Board-ISR | 0 |
| 0x804810 | Versorgungspannung kleiner 4,75V | 0 |
| 0x804818 | ADC_E_STATUS_FAILURE | 0 |
| 0x80481D | SBC_E_SPI_FAIL_ERR | 0 |
| 0x80481F | SPI_E_DATA_FAILURE | 0 |
| 0x804823 | PIA_E_IO_ERROR | 0 |
| 0x804824 | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0x804825 | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x804826 | SWSEC_REGMON_SYS_REG | 0 |
| 0x804827 | SWSEC_REGMON_IO_REG | 0 |
| 0x804832 | Reset durch COP Watchdog | 0 |
| 0x804852 | PDUR_E_INIT_FAILED | 0 |
| 0x804853 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x804854 | WDGM_E_SET_MODE | 0 |
| 0x804855 | CAN_E_TIMEOUT | 0 |
| 0x804858 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x80485A | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x80485C | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x80485D | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x80485E | DMA_INCORRECT_HANDLING | 0 |
| 0x80489A | Kodierung: Lampenmapping CRC error | 0 |
| 0x8049E5 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x8049E6 | NVM_E_REQ_FAILED | 0 |
| 0x8049E7 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x8049E8 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x8049EA | CANNM_E_INIT_FAILED | 0 |
| 0x8049EB | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x8049EC | CANTP_E_COMM | 0 |
| 0x8049EE | FLS_E_ERASE_FAILED | 0 |
| 0x8049EF | FLS_E_WRITE_FAILED | 0 |
| 0x8049F0 | FLS_E_READ_FAILED | 0 |
| 0x8049F1 | FLS_E_COMPARE_FAILED | 0 |
| 0x8049F2 | MCU_E_CLOCK_FAILURE | 0 |
| 0x8049F3 | MCU_E_LOCK_FAILURE | 0 |
| 0x8049F4 | WDG_E_DISABLE_REJECTED | 0 |
| 0x8049F5 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x8049F7 | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x8049FB | WDG_E_MISS_TRIGGER | 0 |
| 0x8049FC | IOHWAB_E_IO_SEQUENCE | 0 |
| 0x8049FF | CANIF_E_STOPPED | 0 |
| 0xE59401 | CAN-Botschaft, Anfrage Aktivierung Funktion Parken  (RQ_ACTVN_FN_PKG): Ungueltige Signale | 1 |
| 0xE59403 | CAN-Botschaft, Aussentemperatur (A_TEMP): Ungueltige Signale | 1 |
| 0xE59405 | CAN-Botschaft, Bedienung Schichtung Sitzheizung (BEDIENUNG_SCHICHT_SITZ): Ungueltige Signale | 1 |
| 0xE59407 | CAN-Botschaft, Bedienung Taster Parken (OP_PUBU_PKG): Ungueltige Signale | 1 |
| 0xE59409 | CAN-Botschaft, Blinken (BLINKEN): Ungueltige Signale | 1 |
| 0xE5940B | CAN-Botschaft, Blinkrichtung (FLSDIR): Ungueltige Signale | 1 |
| 0xE5940C | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Ungueltige Signale | 1 |
| 0xE5940D | CAN-Botschaft, Steuerung Crash (CTR_CR): Ungueltige Signale | 1 |
| 0xE5940F | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Ungueltige Signale (PDC) | 1 |
| 0xE59412 | CAN-Botschaft, Dimmung (DIMMUNG): Ungueltige Signale | 1 |
| 0xE59414 | CAN-Botschaft, Fahrgestellnummer (FAHRGESTELLNUMMER): Ungueltige Signale | 1 |
| 0xE59418 | CAN-Botschaft, Fahrzeugzustand (FZZSTD): Ungueltige Signale | 1 |
| 0xE5941A | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Ungueltige Signale | 1 |
| 0xE5941E | CAN-Botschaft, Kilometerstand Reichweite (KILOMETERSTAND): Ungueltige Signale | 1 |
| 0xE59421 | CAN-Botschaft, Klemmen (KLEMMEN): Ungueltige Signale | 1 |
| 0xE5942A | CAN-Botschaft, PIA Daten Anfrage (PIA_DT_INQY): Ungueltige Signale | 1 |
| 0xE5942C | CAN-Botschaft, PIA Daten Setzen (PIA_DT_SET): Ungueltige Signale | 1 |
| 0xE5942E | CAN-Botschaft, PIA Konfiguration (PIA_SU): Ungueltige Signale | 1 |
| 0xE59430 | CAN-Botschaft, PIA Transaktion (PIA_TRANA): Ungueltige Signale | 1 |
| 0xE59432 | CAN-Botschaft, Position Fensterheber BFT (POSITION_FH_BFT): Ungueltige Signale | 1 |
| 0xE59434 | CAN-Botschaft, Position Fensterheber FAT (POSITION_FH_FAT): Ungueltige Signale | 1 |
| 0xE59436 | CAN-Botschaft, Powermanagement Verbrauchersteuerung (POWERMGMT_CTR_COS): Ungueltige Signale | 1 |
| 0xE59438 | CAN-Botschaft, Relativzeit (RELATIVZEIT): Ungueltige Signale | 1 |
| 0xE5943A | CAN-Botschaft, Status Anhaenger (STAT_ANHAENGER): Ungueltige Signale | 1 |
| 0xE5943C | CAN-Botschaft, Status Funkschluessel (STAT_FUNKSCHLUESSEL): Ungueltige Signale | 1 |
| 0xE5943E | CAN-Botschaft, Status Gang Rueckwaerts (STAT_GANG_RUECKWAERTS): Ungueltige Signale | 1 |
| 0xE59440 | CAN-Botschaft, Status Gurt Kontakt Sitzbelegung (ST_BLT_CT_SOCCU): Ungueltige Signale | 1 |
| 0xE59442 | CAN-Botschaft, Status Klima Front Bedienteil (STAT_KLIMA_BEDIENTEIL): Ungueltige Signale | 1 |
| 0xE59444 | CAN-Botschaft, Status MMI Funktion PDC (ST_MMI_FN_PDC): Ungueltige Signale | 1 |
| 0xE59452 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): Ungueltige Signale | 1 |
| 0xE59457 | CAN-Botschaft, Steuerung Fensterheber FAT (CTR_FH_FAT): Ungültige Signale | 1 |
| 0xE59459 | CAN-Botschaft, Steuerung FH SHD Zentrale (Komfort) (CTR_FH_SHD_ZENTRALE): Ungueltige Signale | 1 |
| 0xE5945B | CAN-Botschaft, Steuerung Licht Außen (CTR_LP_EX): Ungueltige Signale | 1 |
| 0xE5945E | CAN-Botschaft, Steuerung Wischer Heck (CTR_WI_REAR): Ungueltige Signale | 1 |
| 0xE59461 | CAN-Botschaft, Steuerung Zentralverriegelung (CTR_ZV): Ungueltige Signale | 1 |
| 0xE59465 | CAN-Botschaft, Wegstrecke Fahrzeug (MILE_VEH): Ungueltige Signale | 1 |
| 0xE59467 | CAN-Botschaft, ZV und Klappenzustand (STAT_ZV_KLAPPEN): Ungueltige Signale | 1 |
| 0xE59468 | CAN-Botschaft, Bedienung Rollos FA (BEDIENUNG_ROLLOS_FA): Ungueltige Signale | 1 |
| 0xE5946A | CAN-Botschaft, Status Cabrio Dach (ST_CABRF): Ungueltige Signale | 1 |
| 0xE59472 | CAN-Botschaft, Status Qualifier Rear-View (ST_QU_RV); Ungueltige Signale | 1 |
| 0xE59475 | CAN-Botschaft, Status Qualifier Top-View (ST_QU_TVIEW); Ungueltige Signale | 1 |
| 0xE595E7 | CAN-Botschaft, Bedienung Sitzheizung Sitzklima FA (BEDIENUNG_SITZHEIZUNG_FA): Ungueltige Signale | 1 |
| 0xE595E8 | CAN-Botschaft, Bedienung Sitzheizung Sitzklima BF (BEDIENUNG_SITZHEIZUNG_BF): Ungueltige Signale | 1 |
| 0xE597A0 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x401C | BF_ECU_CODETRAP_ADDR_ENV_DATA | 0-n | Low | 0xFFFFFFFF | - | - | - | - |
| 0x4040 | FUSI_FEHLERURSACHE | 0-n | High | 0xFF | TAB_FUSI_FEHLERURSACHE | - | - | - |
| 0x4041 | FUSI_EXCEPTION_ADRESSE | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4042 | FUSI_SNAPSHOT_DATA | - | High | motorola double | - | 1.0 | 1.0 | 0.0 |
| 0x4043 | FUSI_ZUSATZINFO | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X3F1C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUGAUFTRAG_TEIL_1_WERT | - | high | data[160] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die ersten 160 Byte (uninterpretierte Rohdaten) des Fahrzeugsauftrags aus dem CAS. 160 Byte hexdezimale Daten |

### RES_0X3F1D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUGAUFTRAG_TEIL_2_WERT | - | high | data[160] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die zweiten 160 Byte (uninterpretierte Rohdaten) des Fahrzeugsauftrags aus dem CAS. 160 Byte hexdezimale Daten |

### RES_0X404E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAPPING | 0-n | high | unsigned char | - | TAB_LCE_MAPPINGSET_IDS | 1.0 | 1.0 | 0.0 | STAT_MAPPING |
| STAT_LAMP_MAPPING_ERROR_TYPE | 0-n | high | unsigned char | - | TAB_LAMP_MAPPING_ERROR_TYPE | 1.0 | 1.0 | 0.0 | STAT_LAMP_MAPPING_ERROR_TYPE |

### RES_0X4700

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKKLAPPE_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die  bisher erkannten Kurzschlüsse gegen Masse. Gültige Werte: 0 - 100000 = Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_HECKKLAPPE_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus Gültige Werte: 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_HECKKLAPPE_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein. Gültige Werte: 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_HECKSCHEIBE_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die  bisher erkannten Kurzschlüsse gegen Masse. Gültige Werte: ¿  0 - 100000 =Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_HECKSCHEIBE_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus Gültige Werte: 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_HECKSCHEIBE_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein. Gültige Werte: 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_KODIERUNG_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den codierbaren maximalen Wert an Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus -> KL15 ein. Gültige Werte: 0 - 254 = maximaler Wert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_KODIERUNG_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den codierbaren maximalen Wert an Resets des Kurzschlussabschaltung durch KL15 ein. Gültige Werte: 0 - 254 = maximaler Wert für die Resets der Kurzschlussabschaltung 255 = Ungültig / unplausibel |

### RES_0X5101

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECUMA_LAST_HW_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_HW_WAKEUP_ID |
| STAT_ECUMA_LAST_SW_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_SW_WAKEUP_ID |
| STAT_ECUMA_LAST_BUS_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_BUS_WAKEUP_ID |
| STAT_ECUMA_LAST_RESET_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_RESET_ID |
| STAT_ECUMA_CAN_WAKEUP_ID_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ECUMA_CAN_WAKEUP_ID |
| STAT_ECUMA_INVALID_BOARD_ADDRESS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RESERVED |
| STAT_RESERVED_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RESERVED |

### RES_0X5106

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_FE_MODE_ANZAHL_ERGEBNISSAETZE_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gesamtanzahl der Ergebnisssätze entsprechend der Anzahl der IDs in der Liste der Fe-Funktionen |
| STAT_EM_COUNT_ID_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nummer des aktuellen Ergebnissatzes |
| STAT_EM_ID | 0-n | high | unsigned char | - | TAB_FE_FUNCTIONS_REM | 1.0 | 1.0 | 0.0 | ID einer Funktion laut FeTrFla-Liste |
| STAT_FEM_MODE | 0-n | high | unsigned char | - | TAB_FE_MODE | 1.0 | 1.0 | 0.0 | FE_MODE_ACTIVE = 0x01 FE_MODE_INACTIVE = 0x00 |

### RES_0X587A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HW_VERSION |
| STAT_SW_VERSION_WERT | - | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | SW_VERSION |
| STAT_MCV_VERSION_WERT | - | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | MCV_VERSION |
| STAT_CODIER_INDEX_WERT | - | high | char | - | - | 1.0 | 1.0 | 0.0 | CODIER_INDEX |

### RES_0X587B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HW_VERSION |
| STAT_SW_VERSION_WERT | - | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | SW_VERSION |
| STAT_MCV_VERSION_WERT | - | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | MCV_VERSION |
| STAT_CODIER_INDEX_WERT | - | high | char | - | - | 1.0 | 1.0 | 0.0 | CODIER_INDEX |

### RES_0X6006

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X600A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENDATEN_WERT | - | high | data[256] | - | - | 1.0 | 1.0 | 0.0 | Liefert die Daten für die Kennlinie |
| STAT_SCHLIESSZEIT_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Liefert die Schliesszeit des Fensters |
| STAT_SPIEL_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Liefert das Spiel des Seilzugs Einheit Hall-Inkremente |
| STAT_HERSTELLERDATEN_WERT | - | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Herstellerdaten |

### RES_0X600B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENDATEN_WERT | - | high | data[256] | - | - | 1.0 | 1.0 | 0.0 | Liefert die Daten für die Kennlinie. |
| STAT_SCHLIESSZEIT_WERT | s | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Liefert die Schliesszeit des Fensters |
| STAT_SPIEL_WERT | Inkremente | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Liefert das Spiel des Seilzugs Einheit Hall-Inkremente |
| STAT_HERSTELLERDATEN_WERT | - | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Herstellerdaten |

### RES_0X6030

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest aktuellen Status der Fensterheberfreigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| STAT_FH_PANIKFREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest aktuellen Status der Panikfreigabe Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### RES_0X6044

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_STOPREASON_1_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_2_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_3_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_4_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_5_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_6_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_7_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_8_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_9_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_FA_STOPREASON_10_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_1_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_2_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_3_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_4_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_5_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_6_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_7_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_8_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_9_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |
| STAT_BF_STOPREASON_10_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops |

### RES_0X6046

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_REVERSIEREN_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierh¿ufigkeit wird bei jedem Reversier inkrementiert |
| STAT_FA_REVERSIEREN_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_1_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_1_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_1_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_1_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_2_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_2_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_2_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_3_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_3_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_3_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_3_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_4_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_4_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_4_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_4_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_5_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_5_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_5_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_5_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierh¿ufigkeit wird bei jedem Reversier inkrementiert |
| STAT_BF_REVERSIEREN_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_1_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_1_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_1_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_1_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BFrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_2_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_2_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_2_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_3_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_3_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_3_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_3_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_4_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_4_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_4_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_4_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_5_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_5_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_5_ATEMP_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_5_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |

### RES_0X6048

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_DENORM_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierh¿ufigkeit wird bei jeder Denormierung inkrementiert |
| STAT_FA_DENORM_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_FA_DENORM_1_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_1_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_FA_DENORM_2_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_2_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_FA_DENORM_3_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_3_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_FA_DENORM_4_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_4_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_FA_DENORM_5_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_5_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierh¿ufigkeit wird bei jeder Denormierung inkrementiert |
| STAT_BF_DENORM_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_BF_DENORM_1_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_1_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_BF_DENORM_2_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_2_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_BF_DENORM_3_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_3_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_BF_DENORM_4_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_4_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | 1.0 | 1.0 | 0.0 | Ursache der Denormierung. Der Tabellenname und die Tabelle muss vom Lieferanten bef¿llt werden |
| STAT_BF_DENORM_5_POS_HALL_WERT | Ink | high | int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_5_KM_WERT | Ink | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |

### RES_0X6D4B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_VERS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW-Version Byte 1 |
| STAT_SW_VERS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW-Version Byte 2 |
| STAT_SW_VERS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW-Version Byte 3 |
| STAT_SW_DATE_Y_WERT | y | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW-Date Year |
| STAT_SW_DATE_M_WERT | mth | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW-Date Month |
| STAT_SW_DATE_D_WERT | d | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW-Date Day |

### RES_0XA178

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA17B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_FA_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_BF_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_FAH_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_BFH_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### RES_0XA17E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA17F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA180

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA181

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA182

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA530

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALTUEBERWACHUNG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_LEUCHTEN_ROUTINE | 1.0 | 1.0 | 0.0 | Ergebnis der Routine |

### RES_0XA531

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARMUEBERWACHUNG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_LEUCHTEN_ROUTINE | 1.0 | 1.0 | 0.0 | Ergebnis der Routine |

### RES_0XA533

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR | + | - | - | 0-n | high | unsigned char | - | TAB_LEUCHTEN_KURZSCHLUSSABSCHLATUNG_RESET_STATUS | 1.0 | 1.0 | 0.0 | Ergebniss des Status des Rücksetzvorgangs |

### RES_0XA71A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_FA_NR | - | - | + | 0-n | - | unsigned char | - | TAB_GZB_RRR_INIT | 1.0 | 1.0 | 0.0 | Aktueller Zustand der Routine Fahrer |
| STAT_ROUTINE_BF_NR | - | - | + | 0-n | - | unsigned char | - | TAB_GZB_RRR_INIT | 1.0 | 1.0 | 0.0 | Aktueller Zustand der Routine Beifahrer |

### RES_0XAA94

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HECKKLAPPENKONTAKT_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | 1.0 | 1.0 | 0.0 | ZV-Status Heckklappenkontakt |
| STAT_ZV_HECKSCHEIBENKONTAKT_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | 1.0 | 1.0 | 0.0 | ZV-Status Heckscheibenkontakt |
| STAT_ZV_VORRASTKONTAKT_NR | + | - | + | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | 1.0 | 1.0 | 0.0 | ZV-Status SCA Vorrastkontakt |

### RES_0XAA95

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR | + | - | - | 0-n | high | unsigned char | - | TAB_CAS_KURZSCHLUSSABSCHALTUNG_RESET_STATUS | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den Status des Rücksetzvorgangs. |

### RES_0XD18F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_KURZHUB_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kurzhub nicht aktiv 1: Kurzhub aktiv |

### RES_0XD1A9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_INIT | 1.0 | 1.0 | 0.0 | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FAH_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Aktuelle Bewegungsrichtung |
| STAT_FH_FAH_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Fensterhebers |
| STAT_FH_FAH_POSITION_HALL_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_HALL_MAX_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FAH_POSITION_MM_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_MM_MAX_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FAH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FAH_LAGE_NR | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | 1.0 | 1.0 | 0.0 | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_FAH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FAH_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_FREIGABE | 1.0 | 1.0 | 0.0 | Aktueller Zustand Freigabe vom ZV-Master |
| STAT_FH_FAH_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_FAH_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1AA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_INIT | 1.0 | 1.0 | 0.0 | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BFH_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Aktuelle Bewegungsrichtung |
| STAT_FH_BFH_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Fensterhebers |
| STAT_FH_BFH_POSITION_HALL_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_HALL_MAX_WERT | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BFH_POSITION_MM_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_MM_MAX_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BFH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BFH_LAGE_NR | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | 1.0 | 1.0 | 0.0 | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BFH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BFH_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_FREIGABE | 1.0 | 1.0 | 0.0 | Aktueller Zustand Freigabe vom ZV-Master |
| STAT_FH_BFH_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_BFH_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1AD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0: aus 1: ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0: aus 1: ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0: aus 1: ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0: aus 1: ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |
| STAT_RELAIS_B_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |

### RES_0XD1AE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement A Versorgung |
| STAT_HALL_A_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement A |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement B Versorgung |
| STAT_HALL_B_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement B |

### RES_0XD1AF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0: aus 1: ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0: aus 1: ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0: aus 1: ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0: aus 1: ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |
| STAT_RELAIS_B_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |

### RES_0XD1B0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement A Versorgung |
| STAT_HALL_A_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement A |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_B_VERSORGUNG_EIN_1 | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement B Versorgung |
| STAT_HALL_B_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement B |

### RES_0XD1B7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_KURZHUB_VORHANDEN | 0-n | - | unsigned char | - | TAB_FH_KURZHUB_KODIEROPTION | 1.0 | 1.0 | 0.0 | Status der Kodieroption |
| STAT_FH_FAH_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_FAH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_FAH_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_FAH_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_FAH_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_FAH_EEPROM_PRUEFSUMME_NR | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | 1.0 | 1.0 | 0.0 | Status EEPROM Checksumme |
| STAT_FH_FAH_STATUS_VON_FA | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | 1.0 | 1.0 | 0.0 | Status anderes Fenster gleiche Seite |
| STAT_FH_FAH_WACHHALTEN | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Einschlaf-Verhinderung |
| STAT_FH_FAH_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_FAH_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_FAH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_FAH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_FAH_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_FAH_RESERVE_WERT | - | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_KURZHUB_VORHANDEN | 0-n | - | unsigned char | - | TAB_FH_KURZHUB_KODIEROPTION | 1.0 | 1.0 | 0.0 | Status der Kodieroption |
| STAT_FH_BFH_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_BFH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_BFH_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_BFH_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_BFH_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_BFH_EEPROM_PRUEFSUMME_NR | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | 1.0 | 1.0 | 0.0 | Status EEPROM Checksumme |
| STAT_FH_BFH_STATUS_VON_BF | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | 1.0 | 1.0 | 0.0 | Status anderes Fenster gleiche Seite |
| STAT_FH_BFH_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | 1.0 | 1.0 | 0.0 | Status Einschlaf-Verhinderung |
| STAT_FH_BFH_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_BFH_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_BFH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_BFH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_BFH_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_BFH_RESERVE_WERT | - | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD30A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_BLOCK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Heckscheibe: Sonnenrollo Heckscheibe komplett ausgefahren;  0= Endpostion nicht erreicht;  1= Endposition erreicht |
| STAT_ROLLO_HECK_MOTOR_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo Heckscheibe inaktiv;  1= Motor Sonnenrollo Heckscheibe aktiv |

### RES_0XD34A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BROSE_TREIBER_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 0: nicht aktiv 1: aktiv |

### RES_0XD356

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKWISCHER_RSK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob der Heckscheibenwischer in Park-Position ist:  0= Heckscheibenwischer nicht in Park-Position;  1= Heckscheibenwischer in Park-Position |

### RES_0XD388

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_PDC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung PDC über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_TV_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung TV über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_RV_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung Rückfahrkamera über BUS:  0 = nicht aktiviert,  1 = aktiviert |
| STAT_BUS_IN_PMA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signal für De-/ Aktivierung PMA über BUS:  0 = nicht aktiviert,  1 = aktiviert |

### RES_0XD66D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ANHAENGER_VORHANDEN | 0/1 | - | unsigned char | 0x01 | - | 1.0 | 1.0 | 0.0 | Status des Anhängers:  0 = Anhänger nicht vorhanden 1 = Anhänger vorhanden |
| STAT_BUS_IN_STATUS_KUPPLUNG | 0/1 | - | unsigned char | 0x02 | - | 1.0 | 1.0 | 0.0 | Status Anhängervorrichtung: 0 = Anhängerkupplung eingefahren 1 = Anhängerkupplung ausgefahren |

### RES_0XD66F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PDC_ANZAHL_LAUTSPRECHER_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der direkt am Steuergerät angeschlossenen Lautsprecher |
| STAT_PDC_ANZAHL_SENSOREN_VORN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren vorn. |
| STAT_PDC_ANZAHL_SENSOREN_HINTEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der angeschlossenen PDC Sensoren hinten. |

### RES_0XD675

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_FUNCTION_PDC_EIN | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Zustand PDC: 0 = aus 1 = ein |
| STAT_LAST_FUNCTION_TVC_EIN | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Zustand TVC: 0 = aus 1 = ein |
| STAT_LAST_FUNCTION_RVC_EIN | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Zustand RVC: 0 = aus 1 = ein |
| STAT_LAST_FUNCTION_PMA_EIN | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Zustand PMA: 0 = aus 1 = ein |

### RES_0XD67C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSL_HSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HSL_HAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAL_HSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAL_HAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAL_HML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HML_HAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HML_HML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HML_HMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HMR_HML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HMR_HMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HMR_HAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAR_HMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAR_HAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HAR_HSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HSR_HAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_HSR_HSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSL_VSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSL_VAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAL_VSL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAL_VAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAL_VML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VML_VAL_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VML_VML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VML_VMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VMR_VML_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VMR_VMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VMR_VAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAR_VMR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAR_VAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VAR_VSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSR_VAR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |
| STAT_VSR_VSR_WERT | cm | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Signalwege der Wandlerpaare: 20 - 250cm 253 = kein Objekt im Messbereich |

### RES_0XD71A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GZB_FA_POS_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Gurtzubringer Fahrer |
| STAT_GZB_FA_ENDLAGE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gurtzubringer Fahrer Endlage erreicht |

### RES_0XD71B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GZB_BF_POS_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Gurtzubringer Beifahrer |
| STAT_GZB_BF_ENDLAGE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gurtzubringer Beifahrer Endlage erreicht |

### RES_0XD72A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe der Sitzheizung auf der Beifahrerseite |

### RES_0XD72F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_TEMP_KISSEN_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_BF_TEMP_LEHNE_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne   GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD730

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_BF_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BF_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BF_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD732

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_TEMP_KISSEN_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_FA_TEMP_LEHNE_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD737

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe auf der Fahrerseite |

### RES_0XD771

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FA_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FA_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FA_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD793

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZ_FERNB_BF_LAENGE_VORWAERTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Längsverstellung Sitz Beifahrer nach vorne  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_LAENGE_RUECKWAERTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Längsverstellung Sitz Beifahrer nach hinten  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_LEHNENNEIGUNG_VORWAERTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Lehnenneigung Sitz Beifahrer nach vorne  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_LEHNENNEIGUNG_RUECKWAERTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Lehenneigung Sitz Beifahrer nach hinten  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_HOEHE_AUF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Höhenverstellung Sitz Beifahrer nach oben  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_HOEHE_AB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Höhenverstellung Sitz Beifahrer nach unten  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_KOPFSTUETZE_AUF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Verstellung Kopfstütze Sitz Beifahrer nach oben  0: nicht betätigt  1: betätigt |
| STAT_SITZ_FERNB_BF_KOPFSTUETZE_AB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Taster Verstellung Kopfstütze Sitz Beifahrer nach unten  0: nicht betätigt  1: betätigt |

### RES_0XD7AA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe auf der Beifahrerseite hinten |

### RES_0XD7B0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_TEMP_KISSEN_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_BFH_TEMP_LEHNE_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD7EA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FAH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv 1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FAH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb 1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FAH_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7EB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe auf der Fahrerseite hinten |

### RES_0XD7EC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung AUS  1: Sitzheizung EIN |
| STAT_SITZHEIZUNG_BFH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv 1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BFH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BFH_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7F1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_TEMP_KISSEN_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_FAH_TEMP_LEHNE_WERT | °C | - | char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD970

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSCHEIBENHEIZUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Heckscheibenheizung: 0 = AUS, 1 = EIN |

### RES_0XDA7D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKLAPPE_AUSSEN_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA80

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA85

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HECKKLAPPE_ENTRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_ENTRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss ist nicht entriegelt (nicht aktiv ); 1: Schloss ist entriegelt (aktiv); 255: Signal ungültig / unplausibel |
| STAT_ZV_HECKKLAPPE_VERRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_VERRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss ist nicht verriegelt (nicht aktiv ); 1: Schloss ist verriegelt (aktiv); 255: Signal ungültig / unplausibel |

### RES_0XDA86

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HECKSCHEIBE_ENTRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_ENTRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss Heckscheibe nicht entriegelt 1: Schloss Heckscheibe entriegelt |
| STAT_ZV_HECKSCHEIBE_VERRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_VERRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss Heckscheibe nicht verriegelt  1: Schloss Heckscheibe verriegelt |

### RES_0XDA92

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKKLAPPE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Heckklappen-Kontakt 0 = Nicht betätigt  1 = Betätigt  2 = nicht verbaut/nicht vorhanden (Open Load)  255 = Signal ungültig / unplausibel  |

### RES_0XDA93

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA94

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_VORRAST_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA95

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKKLAPPE_KURZSCHLUSSABSCHALTUNG_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung der Heckklappe. |
| STAT_HECKSCHEIBE_KURZSCHLUSSABSCHALTUNG_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung der Heckscheibe. |

### RES_0XF004

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_XCP_SLAVE | + | + | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | XCP slave running or not |

### RES_0XF200

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_LIN_CODIERUNG | 0x100A | - | Codierung der LIN-Slaves | - | - | - | - | - | - | - | - | - | 31 | ARG_0x100A | - |
| FH_VERFAHREN_ZEIT | 0xA178 | - | Ansteuerung der Fensterheber (ELEMENT;ZEIT in 100ms- Schritten) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA178 | RES_0xA178 |
| FH_EINLERNEN | 0xA17B | - | Steuernaufruf zum Einlernen der Fensterheber 0x11: FH Fahrer  0x12: FH Beifahrer   0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x15: FH Heckscheibe 0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: FH Fahrer, Beifahrer, FH Fahrer Beifahrer und FH Beifahrer hinten  0x50: FH Fahrer, Beifahrer, FH Fahrer Beifahrer, FH Beifahrer hinten und FH Heckscheibe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17B | RES_0xA17B |
| FH_VERFAHREN_HALL | 0xA17E | - | Verfahren auf Hallposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17E | RES_0xA17E |
| FH_VERFAHREN_PROZENT | 0xA17F | - | Verfahren der Fensterheber auf bestimmten Prozentwert 0: geschlossen 100: offen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17F | RES_0xA17F |
| FH_VERFAHREN_SONDERFUNKTION | 0xA180 | - | Verfahren der Fenster auf eine bestimmte Sonderfunktion | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA180 | RES_0xA180 |
| FH_TASTER_STEUERN | 0xA181 | - | Übersteuerung des Tasters per Diagnose | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA181 | RES_0xA181 |
| FH_VERFAHREN_SERVICE_POSITION | 0xA182 | - | Verfährt das Fenster auf eine Serviceposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA182 | RES_0xA182 |
| LEUCHTEN_KALTUEBERWACHUNG | 0xA530 | - | Kaltlichtüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA530 |
| LEUCHTEN_WARMUEBERWACHUNG | 0xA531 | - | Warmlichüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA531 |
| LEUCHTEN_KURZSCHLUSSABSCHALTUNG_RESET | 0xA533 | - | KURZSCHLUSSABSCHALTUNG_RESET_LAMPEN_AUSGANG | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA533 | RES_0xA533 |
| GURTZUBRINGER_INIT | 0xA71A | - | Initlauf Gurtzubringer | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA71A |
| ZV_CLIENT_STEUERN | 0xAA94 | - | Dieser Job dient dazu per Diagnose die Zentralverriegelung der Heckklappe oder Heckscheibe anzusteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA94 | RES_0xAA94 |
| ZV_KURZSCHLUSSABSCHALTUNG_RESET | 0xAA95 | - | Dieser Job dient dazu die dauerhaften Kurzschlussabschaltung des ZV-Antriebs der Heckklappe und,oder Heckscheibe wieder zurückzusetzen. Durch den Job werden die internen Zähler für die Anzahl der Wiedereinschaltversuche zurückgesetzt.   Hinweise:  Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG;ZV_KURZSCHLUSSABSCHALTUNG_RESET;STR;[Argumente]'  oder 'ARG;ZV_KURZSCHLUSSABSCHALTUNG_RESET;RRR' - Das Rücksetzen der interne Zähler für die Anzahl der Wiedereinschaltversuche wird nur durchgeführt wenn der Zählerstand für die maximale Anzahl an erkannten Kurzschlüssen (KS_COUNT_MAX) größer '0' ist. Hat der Zähler bei Aufruf des Jobs bereits den Wert '0' so wird im Result STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR dies zurückgemeldet (Wert '1') und kein Rücksetzvorgang gestartet. Siehe hierzu auch ZSG_BF_13075. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA95 | RES_0xAA95 |
| SITZHEIZUNG_HINTEN_TASTER_LINKS | 0xD161 | STAT_TASTER_SITZHEIZUNG_HINTEN_LINKS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_RECHTS | 0xD162 | STAT_TASTER_SITZHEIZUNG_HINTEN_RECHTS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_NORMIERUNG_LOESCHEN | 0xD17A | - | Denormiert die Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17A | - |
| FH_KENNLINIE_LOESCHEN | 0xD17B | - | Löscht die Kennlinie | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17B | - |
| FH_FAH_TASTER | 0xD18A | STAT_TASTER_FAH_FAH_NR | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten 0: Taster nicht gedrueckt 1: Fenster oeffnen 2: Fenster schliessen 3: Fenster Maut oeffnen 4: Fenster Maut schliessen | 0-n | - | - | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BFH_TASTER | 0xD18B | STAT_TASTER_BFH_BFH_NR | Beifahrerseite hinten (lokaler Taster):  Fensterheber Beifahrerseite 0: Taster nicht gedrueckt 1: oeffnen Fenster  2: schliessen Fenster  3: oeffnen Fenster Maut  4: schliessen Fenster Maut | 0-n | - | - | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_KURZHUB_AKTIV | 0xD18F | - | Kurzhub rahmenlose Scheibe aktiv | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD18F | RES_0xD18F |
| FH_FAH_BEWEGUNG | 0xD1A9 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A9 |
| FH_BFH_BEWEGUNG | 0xD1AA | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AA |
| FH_RELAIS_STEUERN | 0xD1AB | - | Steuert das/die Relais zum Verfahren einer Scheibe an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1AB | - |
| FH_HALL_VERSORGUNG | 0xD1AC | - | Die Funktion wird von der BSW ausgeführt. Die BSW muss ggf. den MT denormieren. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD1AC | - |
| FH_BFH_RELAIS | 0xD1AD | - | Liest den aktuellen Status der Ansteuer- und Rückleseleitungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AD |
| FH_BFH_HALLSENSOREN | 0xD1AE | - | Liest den aktuellen Status beider Hallsensoren aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AE |
| FH_FAH_RELAIS | 0xD1AF | - | Liest den aktuellen Status der Ansteuer- und Rückleseleitungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AF |
| FH_FAH_HALLSENSOREN | 0xD1B0 | - | Status Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B0 |
| FH_FAH_STATUS_DETAIL | 0xD1B7 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B7 |
| FH_BFH_STATUS_DETAIL | 0xD1B8 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B8 |
| BUS_IN_GESCHWINDIGKEIT_WERT | 0xD240 | STAT_BUS_IN_GESCHWINDIGKEIT_WERT | Signal Geschwindigkeit des Fahrzeugs über BUS | km/h | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TANK_FUELLSTAND_LINKS | 0xD258 | STAT_FUELLSTAND_TANK_LI_WERT | Rückgabe des Füllstandwerts des linken Tanksensor. Arbeitsbereich und IO-Bereich muss vom Entwickler befüllt werden. | mV | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TANK_FUELLSTAND_RECHTS | 0xD259 | STAT_FUELLSTAND_TANK_RE_WERT | Rückgabe des Füllstands des rechten Tanksensors. Arbeitsbereich und IO-Bereich muss vom Entwickler befüllt werden. | mV | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ROLLO_HECK_MOTOR | 0xD30A | - | Status / Steuern Heckrollo | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD30A | RES_0xD30A |
| ROLLO_HECK_VORHANDEN | 0xD310 | STAT_VORHANDEN_HECKROLLO_EIN | 0: Heckrollo nicht vorhanden;  1: Heckrollo vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_AKTIVIERE_BROSE_TREIBER | 0xD34A | - | Aktivierung des FH Broseteibers ohne SG Codierung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD34A | RES_0xD34A |
| WISCHER_HECK_MOTOR | 0xD353 | STAT_MOTOR_HECKWISCHER_EIN | Liefert den Zustand der Ansteuerung des Heckscheibenwischers:  0= Ansteuerung Heckscheibenwischer nicht aktiv; 1= Ansteuerung Heckscheibenwischer aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_HECK_RSK | 0xD356 | - | Status / Steuern Park-Position Heckscheibenwischer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD356 | RES_0xD356 |
| WISCHER_HECK_VORHANDEN | 0xD358 | STAT_VORHANDEN_HECKWISCHER_EIN | 0: Heckwischer nicht codiert;  1: Heckwischer codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_HECK | 0xD35F | - | Ansteuerung Scheibenwischers hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35F | - |
| PDC_AKTIVIERUNGSIGNAL | 0xD388 | - | Liefert oder simuliert die Signale der Aktivierung  von PDC, TV, RV und PMA, wie sie über BUS empfangen wird. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD388 | RES_0xD388 |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0 | - |
| PDC_FUNKTIONSANZEIGE | 0xD640 | STAT_FUNKTIONSANZEIGE_PDC | Status der Funktionsanzeige:  0= AUS; 1= EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ABSTAND_WERT | 0xD645 | STAT_PDC_VAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ABSTAND_WERT | 0xD646 | STAT_PDC_VML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ABSTAND_WERT | 0xD647 | STAT_PDC_VAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ABSTAND_WERT | 0xD648 | STAT_PDC_VMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ABSTAND_WERT | 0xD64B | STAT_PDC_HAL_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ABSTAND_WERT | 0xD64C | STAT_PDC_HML_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ABSTAND_WERT | 0xD64D | STAT_PDC_HAR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ABSTAND_WERT | 0xD64E | STAT_PDC_HMR_ABSTAND_WERT | Berechneter Abstand: 20 - 250,   253 = kein Objekt im Meßbereich 254 = kein Sensor verbaut 255 = ungültig Angezeigter Abstand ist Direktecho des Sensors | cm | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAL_ASZ_WERT | 0xD651 | STAT_PDC_VAL_ASZ_WERT | Ausschwingzeit Sensor vorn außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VML_ASZ_WERT | 0xD652 | STAT_PDC_VML_ASZ_WERT | Ausschwingzeit Sensor vorn mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VAR_ASZ_WERT | 0xD653 | STAT_PDC_VAR_ASZ_WERT | Ausschwingzeit Sensor vorn außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_VMR_ASZ_WERT | 0xD654 | STAT_PDC_VMR_ASZ_WERT | Ausschwingzeit Sensor vorn mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAL_ASZ_WERT | 0xD657 | STAT_PDC_HAL_ASZ_WERT | Ausschwingzeit Sensor hinten außen links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HML_ASZ_WERT | 0xD658 | STAT_PDC_HML_ASZ_WERT | Ausschwingzeit Sensor hinten mitte links | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HAR_ASZ_WERT | 0xD659 | STAT_PDC_HAR_ASZ_WERT | Ausschwingzeit Sensor hinten außen rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_HMR_ASZ_WERT | 0xD66A | STAT_PDC_HMR_ASZ_WERT | Ausschwingzeit Sensor hinten mitte rechts | µs | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_ANHAENGER_VORHANDEN | 0xD66D | - | Liefert den Status des Anhängers über Bus. | bit | - | - | BITFIELD | RES_0xD66D | - | - | - | - | 22 | - | - |
| BUS_IN_PDC_TASTE_EIN | 0xD66E | STAT_BUS_IN_PDC_TASTE_EIN | Auslesen Status der PDC-Taste über Bus : 0 = AUS, 1 = EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_KONFIGURATION | 0xD66F | - | Liefert die (zuvor) codierte Konfiguration des Systems | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD66F |
| BUS_IN_KILOMETERSTAND_WERT | 0xD670 | STAT_BUS_IN_KILOMETERSTAND_WERT | Signal Kilometerstand des Fahrzeugs über BUS | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_STAT_SYSTEM | 0xD671 | STAT_PDC_SYSTEM | Status des Systems:  0 = PDC nicht aktiv,  1 = PDC aktiv,  2 = PDC hat Fehler erkannt | 0-n | - | - | unsigned char | TAB_PDC_STATUS | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SENSORTEST | 0xD673 | - | Startet die Eigendiagnose der Sensoren, Ergebnisse werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD673 | - |
| PDC_SENSORTEST | 0xD674 | STAT_PDC_SENSORTEST_NR | Ausgabe des Status des Sensortests:  Siehe Tabelle TAB_PDC_SENSORTEST | 0-n | - | - | unsigned char | TAB_PDC_SENSORTEST | - | - | - | - | 22 | - | - |
| PDC_LAST_FUNCTION | 0xD675 | - | Last Function Einstellung | bit | - | - | BITFIELD | RES_0xD675 | - | - | - | - | 22 | - | - |
| PDC_STEUERN_SYSTEM | 0xD676 | - | Aufruf aktiviert oder deaktiviert das PDC-System. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD676 | - |
| BUS_IN_STATUS_ROLLEN | 0xD679 | STAT_BUS_IN_STATUS_ROLLEN | Status der Fahrzeugbewegung:  0 = Fahrzeug steht,  1 = Fahrzeug fährt vorwärts, 2 = Fahrzeug fährt rückwärts, 3 = Fahrzeug fährt,  255 ungültig | 0-n | - | - | unsigned char | TAB_PDC_ROLLEN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_WEGSTRECKE_WERT | 0xD67A | STAT_BUS_IN_WEGSTRECKE_WERT | Signal Wegstrecke des Fahrzeugs über BUS | cm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_RUECKWAERTSGANG | 0xD67B | STAT_BUS_IN_RUECKWAERTSGANG_EIN | Status des Rückwärtsgang:  0 = Rückwärtsgang nicht eingelegt;  1 = Rückwärtsgang eingelegt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PDC_SIGNALWEGE_SENSOREN | 0xD67C | - | Gibt die Signalwege der Ultraschallsensoren der PDC aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD67C |
| GURTZUBRINGER_FA | 0xD71A | - | Status Gurtzubringer Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD71A |
| GURTZUBRINGER_BF | 0xD71B | - | Status Gurtzubringer Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD71B |
| GURTZUBRINGER_POSITION | 0xD71C | - | Fahren der Gurtzubringer auf eine bestimmte Position | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD71C | - |
| GURTZUBRINGER_RICHTUNG | 0xD71D | - | Fahren der Gurtzubringer in eine bestimmte Richtung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD71D | - |
| SITZHEIZUNG_FA_VORHANDEN | 0xD726 | STAT_SITZHEIZUNG_FA_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_VORHANDEN | 0xD727 | STAT_SITZHEIZUNG_BF_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FAH_VORHANDEN | 0xD728 | STAT_SITZHEIZUNG_FAH_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BFH_VORHANDEN | 0xD729 | STAT_SITZHEIZUNG_BFH_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_STUFE | 0xD72A | - | Status / Steuern Stufe Sitzheizung Beifahrerseite | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD72A | RES_0xD72A |
| BUS_IN_SITZHEIZUNG_STUFE_BF | 0xD72D | STAT_BUS_IN_SITZHEIZUNG_BF_NR | Busnachricht Stufe Sitzheizung Beifahrerseite, 0: AUS; 1: Stufe 1; 2: Stufe 2;  3: Stufe 3 | 0-n | - | - | unsigned char | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_TEMP | 0xD72F | - | Status / Steuern Temperatur Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD72F | RES_0xD72F |
| SITZHEIZUNG_BF | 0xD730 | - | Betriebszustand Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD730 |
| BUS_IN_SITZHEIZUNG_STUFE_FA | 0xD731 | STAT_BUS_IN_SITZHEIZUNG_FA_NR | Busnachricht Stufe Sitzheizung Fahrerseite, 0: AUS; 1: Stufe 1; 2: Stufe 2;  3: Stufe 3 | 0-n | - | - | unsigned char | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FA_TEMP | 0xD732 | - | Status / Steuern Temperatur Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD732 | RES_0xD732 |
| SITZHEIZUNG_FA_STUFE | 0xD737 | - | Status / Steuern Stufe Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD737 | RES_0xD737 |
| SITZHEIZUNG_FA | 0xD771 | - | Betriebszustand Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD771 |
| SITZ_SCHALTER_FERNB_BFS | 0xD793 | - | Status / Steuern Sitzverstellschalter Fernbedienung für Beifahrerseite | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD793 |
| SITZ_SCHALTER_FERNB_BFS_LED | 0xD794 | - | Ansteuerung LED Sitzverstellschalter Fernbedienung für Beifahrerseite | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD794 | - |
| SITZHEIZUNG_BFH_STUFE | 0xD7AA | - | Status / Steuern Stufe Sitzheizung Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7AA | RES_0xD7AA |
| SITZHEIZUNG_BFH_TEMP | 0xD7B0 | - | Status / Steuern Temperatur Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7B0 | RES_0xD7B0 |
| SITZHEIZUNG_FAH | 0xD7EA | - | Betriebszustand Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EA |
| SITZHEIZUNG_FAH_STUFE | 0xD7EB | - | Status / Steuern Stufe Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7EB | RES_0xD7EB |
| SITZHEIZUNG_BFH | 0xD7EC | - | Betriebszustand Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EC |
| SITZHEIZUNG_FAH_TEMP | 0xD7F1 | - | Status / Steuern Temperatur Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7F1 | RES_0xD7F1 |
| SITZHEIZUNG_HINTEN_TASTER_VORHANDEN | 0xD86C | STAT_VORHANDEN_SITZHEIZUNG_TASTER_HINTEN | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | unsigned int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| HECKSCHEIBENHEIZUNG | 0xD970 | - | Status / Steuern Heckscheibenheizung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD970 | RES_0xD970 |
| HECKKLAPPE_TASTER_AUSSEN | 0xDA7D | - | Status / Simulation für Taster Heckklappe aussen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA7D | RES_0xDA7D |
| HECKSCHEIBE_TASTER | 0xDA80 | - | Status / Simulation für Taster Heckscheibe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA80 | RES_0xDA80 |
| ZV_HECKKLAPPE | 0xDA85 | - | Status Zentralverriegelung Heckklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA85 |
| ZV_HECKSCHEIBE | 0xDA86 | - | Status Zentralverriegelung Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA86 |
| HECKKLAPPE_KONTAKT | 0xDA92 | - | Status / Simulation Heckklappenkontakt 0: Heckklappe offen 1: Heckklappe geschlossen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA92 | RES_0xDA92 |
| HECKSCHEIBE_KONTAKT | 0xDA93 | - | Status / Simualtion Heckscheibenkontakt 0: Heckscheine offen 1: Heckscheibe geschlossen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA93 | RES_0xDA93 |
| SCA_VORRAST_KONTAKT | 0xDA94 | - | Status / Simulation  HW-Eingang Vorrastkontakt (VRK) der Soft-Close-Automatik (SCA) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA94 | RES_0xDA94 |
| ZV_KURZSCHLUSSABSCHALTUNG | 0xDA95 | - | Dieser Job dient zum Auslesen des Status der dauerhaften Kurzschlussabschaltung der ZV-Antriebe der Heckklappe und Heckscheibe. Die Kurzschlussabschaltung dient zum Überlastschutz des HW-Treiber.  Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument ZV_KURZSCHLUSSABSCHALTUNG - Details zum Ablauf der Kurzschlussabschaltung siehe ZSG_BF_13070 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA95 |
| SPANNUNG_KLEMME_15_WERT | 0xDAD1 | STAT_SPANNUNG_KLEMME_15_WERT | Spannungswert am Steuergerät an Klemme 15 (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30L1 | 0xDAD6 | STAT_SPANNUNG_KLEMME_30L1_WERT | Spannungswert am Steuergerät an Klemme 30L (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30L2 | 0xDAD7 | STAT_SPANNUNG_KLEMME_30L2_WERT | Spannungswert am Steuergerät an Klemme 30L (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30F_WERT | 0xDADB | STAT_SPANNUNG_KLEMME_30F_WERT | Spannungswert am Steuergerät an Klemme 30F (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| VCM_DID_FA1 | 0x3F1C | - | Fahrzeugauftrag Teil 1 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x3F1C | RES_0x3F1C |
| VCM_DID_FA2 | 0x3F1D | - | Fahrzeugauftrag Teil 2 | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x3F1D | RES_0x3F1D |
| LC_KODIERUNG_ENV_DATA | 0x404E | - | LC_KODIERUNG_ENV_DATA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404E |
| _ZV_KURZSCHLUSSABSCHALTUNG_ZAEHLER | 0x4700 | - | DID zum Auslesen der Zähler der dauerhaften Kurzschlussabschaltung der ZV-Antriebe Heckklappe und Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4700 |
| _ECUMA_INTERN | 0x5101 | - | Diagnosejob Status-EcuMA-intern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5101 |
| _HWAP_SGBM_NR | 0x5104 | STAT_HWAP_WERT | Hardwareausprägung im  SGBM | - | - | high | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _ECUMA_FEMODE | 0x5106 | - | Weckereignis | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x5106 | RES_0x5106 |
| ECUMA_DISABLE_WAKESRC | 0x5108 | - | STEUERN_ECUMA_DISABLE_WAKESRC | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5108 | - |
| STATUS_GZB_IDENT_DATA_FA | 0x587A | - | STATUS_GZB_IDENT_DATA_FA | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x587A |
| STATUS_GZB_IDENT_DATA_BF | 0x587B | - | STATUS_GZB_IDENT_DATA_BF | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x587B |
| _FH_STATISTIKZAEHLER_LOESCHEN | 0x6000 | - | Konfiguriert den Statistikzähler | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6000 | - |
| _FH_FAH_THERMOMONITOR_AKTIV | 0x6006 | - | Thermomonitor Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6006 | RES_0x6006 |
| _FH_BFH_THERMOMONITOR_AKTIV | 0x6007 | - | Thermomonitor Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6007 | RES_0x6007 |
| _FH_FAH_BEWERTUNG_KENNLINIEN | 0x600A | - | Status Bewertung Kennlinien Fensterheber Fahrerseite hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x600A |
| _FH_BFH_BEWERTUNG_KENNLINIEN | 0x600B | - | Status Bewertung Kennlinien Fensterheber Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x600B |
| _FH_FAH_STATISTIKZAEHLER_LESEN | 0x6022 | STAT_STATISTIKZAEHLER_FH_FAH_DATA | Fahrerseite Hinten STAT_FAH_NACHNORMIERUNG_AUTOMATISCH_WERT STAT_FAH_NACHNORMIERUNG_MANUELL_UNBEWUSST_WERT STAT_FAH_NACHNORMIERUNG_DIAGNOSE_WERT STAT_FAH_DENORMIERUNG_MANUELL_WERT STAT_FAH_VERFAHREN_EMERGENCY_CLOSE_WERT STAT_FAH_VERFAHREN_PANIC_CLOSE_WERT STAT_FAH_REVERSIERER_NORMAL_MODUS_WERT STAT_FAH_REVERSIERER_EMERGENCY_MODUS_WERT STAT_FAH_ABBRUCH_MOTORLAUF_BK_WERT STAT_FAH_MANUAL_OPEN_DURING_LOW_SPEED_WERT STAT_FAH_MANUAL_CLOSE_DURING_LOW_SPEED_WERT STAT_FAH_AUTOMATIC_OPEN_DURING_LOW_SPEED_WERT STAT_FAH_AUTOMATIC_CLOSE_DURING_LOW_SPEED_WERT STAT_FAH_MANUAL_OPEN_DURING_HIGH_SPEED_WERT STAT_FAH_MANUAL_CLOSE_DURING_HIGH_SPEED_WERT STAT_FAH_AUTOMATIC_OPEN_DURING_HIGH_SPEED_WERT STAT_FAH_AUTOMATIC_CLOSE_DURING_HIGH_SPEED_WERT STAT_FAH_SHORT_DROP_WERT STAT_FAH_LONG_STROKE_WERT STAT_FAH_OPERATIONS_LOW_TEMP_WERT STAT_FAH_REVERSALS_LOW_TEMP_WERT STAT_FAH_SHORT_DROP_BELOW_MINUS_TEN_DEGREES_WERT STAT_FAH_SHORT_DROP_BELOW_ZERO_DEGREES_WERT STAT_FAH_RESERVE_WERT | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_BFH_STATISTIKZAEHLER_LESEN | 0x6023 | STAT_STATISTIKZAEHLER_FH_BFH_DATA | Beifahrerseite hinten STAT_BFH_NACHNORMIERUNG_AUTOMATISCH_WERT STAT_BFH_NACHNORMIERUNG_MANUELL_UNBEWUSST_WERT STAT_BFH_NACHNORMIERUNG_DIAGNOSE_WERT STAT_BFH_DENORMIERUNG_MANUELL_WERT STAT_BFH_VERFAHREN_EMERGENCY_CLOSE_WERT STAT_BFH_VERFAHREN_PANIC_CLOSE_WERT STAT_BFH_REVERSIERER_NORMAL_MODUS_WERT STAT_BFH_REVERSIERER_EMERGENCY_MODUS_WERT STAT_BFH_ABBRUCH_MOTORLAUF_BK_WERT STAT_BFH_MANUAL_OPEN_DURING_LOW_SPEED_WERT STAT_BFH_MANUAL_CLOSE_DURING_LOW_SPEED_WERT STAT_BFH_AUTOMATIC_OPEN_DURING_LOW_SPEED_WERT STAT_BFH_AUTOMATIC_CLOSE_DURING_LOW_SPEED_WERT STAT_BFH_MANUAL_OPEN_DURING_HIGH_SPEED_WERT STAT_BFH_MANUAL_CLOSE_DURING_HIGH_SPEED_WERT STAT_BFH_AUTOMATIC_OPEN_DURING_HIGH_SPEED_WERT STAT_BFH_AUTOMATIC_CLOSE_DURING_HIGH_SPEED_WERT STAT_BFH_SHORT_DROP_WERT STAT_BFH_LONG_STROKE_WERT STAT_BFH_OPERATIONS_LOW_TEMP_WERT STAT_BFH_REVERSALS_LOW_TEMP_WERT STAT_BFH_SHORT_DROP_BELOW_MINUS_TEN_DEGREES_WERT STAT_BFH_SHORT_DROP_BELOW_ZERO_DEGREES_WERT STAT_BFH_RESERVE_WERT | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_FREIGABE_AKTIV | 0x6030 | - | Konfiguriert den Freigabestatus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6030 | RES_0x6030 |
| _FH_FAH_EMERGENCY_PANIC_AKTIV | 0x6042 | STAT_VERFAHRMODUS_FAH | Status Verfahrmodus Fahrerseite hinten. | 0-n | - | high | unsigned char | TAB_FH_PANIC | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_BFH_EMERGENCY_PANIC_AKTIV | 0x6043 | STAT_VERFAHRMODUS_BFH | Status Verfahrmodus Beifahrerseite hinten. | 0-n | - | high | unsigned char | TAB_FH_PANIC | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_MOTORSTOP_LOGGER_LESEN | 0x6044 | - | DID zur Umsetzung des Jobheaders _FH_MOTORSTOP_LOGGER_LESEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6044 |
| _FH_MOTORSTOP_LOGGER_LOESCHEN | 0x6045 | - | DID für die Implementierung des Jobheaders | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6045 | - |
| _FH_REVERSIER_LOGGER_LESEN | 0x6046 | - | DID für die Implementierung des gleichnamigen Jobheaders | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6046 |
| _FH_REVERSIER_LOGGER_LOESCHEN | 0x6047 | - | DID für die Implementierung des gleichnamigen Jobheaders. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6047 | - |
| _FH_DENORMIERUNGS_LOGGER_LESEN | 0x6048 | - | DID für die Implementierung des gleichnamigen Jobheaders. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6048 |
| _FH_DENORMIERUNGS_LOGGER_LOESCHEN | 0x6049 | - | DID für die Implementierung des gleichnamigen Jobheaders. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6049 | - |
| _PDC_SW_VERSION | 0x6D4B | - | Liefert die PDC SW Version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6D4B |
| _CTRL_XCP_PROTOCOL | 0xF004 | - | Start/Stop/Status of XCP slave on ECU | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF004 |
| _FH_DEBUG_OUTPUT_KONF | 0xF200 | - | Steuert die Debug-Ausgabe über den CAN Bus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF200 | RES_0xF200 |

### TAB_AUSGANG_LEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x14 | Schlusslicht links |
| 0x15 | Schlusslicht rechts |
| 0x16 | Schlusslicht Kofferraumdeckel links |
| 0x17 | Schlusslicht Kofferraumdeckel rechts |
| 0x18 | Bremsleuchte links |
| 0x19 | Bremsleuchte rechts |
| 0x1A | Brake Force Display (BFD) links |
| 0x1B | Brake Force Display (BFD) rechts |
| 0x1C | Nebelschlussleuchte links |
| 0x1D | Nebelschlussleuchte rechts |
| 0x1E | Rückfahrscheinwerfer links |
| 0x1F | Rückfahrscheinwerfer rechts |
| 0x20 | Fahrtrichtungsanzeiger hinten links |
| 0x21 | Fahrtrichtungsanzeiger hinten rechts |
| 0x22 | Kennzeichenleuchte |
| 0x23 | Bremsleuchte mitte |

### TAB_CAS_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv / nicht betätigt |
| 1 | aktiv / betätigt |
| 2 | nicht verbaut / Status nicht verfügbar |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_KURZSCHLUSSABSCHALTUNG_KOMPONENTE

| WERT | TEXT |
| --- | --- |
| 0 | Heckklappe |
| 1 | Heckscheibe |
| 255 | Ungültig/Unbekannt |

### TAB_CAS_KURZSCHLUSSABSCHALTUNG_RESET_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen erfolgreich durchgeführt |
| 1 | Rücksetzen nicht möglich - Maximale Anzahl an Kurzschlüssen erreicht -> SG-Tausch notwendig |
| 255 | Reset nicht durchgeführt, da permanente Kurzschlussabschaltung nicht aktiv ist |

### TAB_DEV_FH_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Auswahl |
| 0x11 | Fenster Fahrer |
| 0x12 | Fenster Beifahrer |
| 0x13 | Fenster Fahrer hinten |
| 0x14 | Fenster Beifahrer hinten |
| 0x15 | Heckscheibe |
| 0x21 | Fenster Fahrer und Beifahrer |
| 0x22 | Fenster Fahrer hinten und Beifahrer hinten |
| 0x40 | Fenster Fahrer, Beifahrer, Fahrer hinten und Beifahrer hinten |
| 0x50 | Fenster Fahrer, Beifahrer, Fahrer hinten, Beifahrer hinten und Heckscheibe |
| 0xFF | ungültiger Wert |

### TAB_DEV_FH_DENORMIER_URSACHE

| WERT | TEXT | TEXT_EN | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x00 | KEIN FEHLEREINTRAG / NORMIERT | - | - |
| 0x01 | EEPROMFEHLER BEIM STARTUP | - | Conti: Checksum of Block A (Position) and C(Reference Field) is not valid |
| 0x02 | INTERFACE WURDE BEIM STARTUP NICHT BEDIENT | - | - |
| 0x03 | ÜBERFAHREN DES OBEREN BLOCKS | - | - |
| 0x04 | ÜBERFAHREN DES UNTEREN BLOCKS | - | - |
| 0x05 | NICHT PLAUSIBLER ZUSTAND | - | Conti: Invalid position during movement |
| 0x06 | FALSCHE POSITION ERKANNT | - | Conti: Invalid position during stop of the motor |
| 0x07 | RELAISKLEBER_1 | - | - |
| 0x08 | RELAISKLEBER_2 | - | - |
| 0x09 | HALLFEHLER | - | Conti: Hall sensor failures |
| 0x0A | EXPLIZITES DENORMIEREN (ASCET) | - | Conti: Denorming by switch and diagnostic job |
| 0x0B | TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN | - | Conti: Too many elements in the queue within 2ms |
| 0x0C | HALLUNTERABTASTUNG | - | - |
| 0x0D | START INITIALISIERUNGSLAUF | - | Conti: Intialisation by switch or diagnostic job |
| 0x0E | INITIALSIERUNGSLAUF ABGEBROCHEN | - | Conti: Intialisation by switch or diagnostic job aborted |
| 0x0F | KEINE POSITION NACH RESET | - | Conti: Reset during motor movement |
| 0x20 | SIF_ERROR (Conti) | - | Conti: Safety integrity function |
| 0x21 | SIGNATURE_ERROR (Conti) | - | Conti: Wrong supplier coded, Signatue does not match, interference occured |
| 0x22 | HALL_SWITCHED_OFF (Conti) | - | Conti: Movement while hall notification tells error |
| 0x23 | HALL_QUEUE_ERROR (Conti) | - | Conti: Inverted status in the queue wrong |
| 0x24 | NEW_SW_CODING_APPLIED (Conti) | - | Conti:  New coding data or software |
| 0x40 | No init data after reset (Magna) | - | - |
| 0x41 | Voltage on motor and relays not active, closing (Magna) | - | - |
| 0x42 | Voltage on motor and relays not active, opening (Magna) | - | - |
| 0x43 | no pulses from Hall A but pulses from Hall element B (Magna) | - | - |
| 0x44 | no pulses from Hall B but pulses from Hall element A (Magna) | - | - |
| 0x45 | Motor actuated; no pulses from Hall elements A+B (Magna) | - | - |
| 0x46 | Hall pulses not plausible (Magna) | - | - |
| 0x47 | Wrong motor direction (Magna) | - | - |
| 0x48 | Wrong motor unit (Magna) | - | - |
| 0x49 | Timeout Motor actuat (Magna) | - | - |
| 0x4A | Invalid MRC Logical failure: the MRC is invalid (Magna) | - | - |
| 0x4B | CPU Overload (Magna) | - | - |
| 0x4C | start of manual init (Magna) | - | - |
| 0x4D | Halls Not Ready Voltage Shut Down (Magna) | - | - |
| 0x4E | Halls Not Ready Open Load (Magna) | - | - |
| 0x4F | Halls Not Ready Short to ground (Magna) | - | - |
| 0x50 | Halls Not Ready Short to ubatt (Magna) | - | - |
| 0x51 | different Software version stored in NvRam (Magna) | - | - |
| 0x52 | different vendor code stored in NvRam (Magna) | - | - |
| 0x53 | signature Interference Occurred (Magna) | - | - |
| 0x54 | No valid position CRC after reset (Magna) | - | - |
| 0x55 | Hall counters A and B value different (Magna) | - | - |
| 0x56 | Hall pulses and no motor actuation (Magna) | - | - |
| 0x57 | FUSI SIF state error (Magna) | - | - |
| 0x58 | Profile and norming erased by RTERunnable_SwcPwDriverMagna01_diag_diagJobWriteFhKennlinieLoeschen (Magna) | - | - |
| 0x59 | error saving NVRam after motor stop (Magna) | - | - |
| 0x5A | coding changed (Magna) | - | - |
| 0x5B | error in NvRam Block A (Magna) | - | - |
| 0x5C | error Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) | - | - |
| 0x5D | Coding data failure (Magna) | - | - |
| 0x5E | Hall shutdown during motor run (Magna) | - | - |
| 0x5F | Wrong position with motor inactive (Magna) | - | - |
| 0x60 | SIF_ERROR (Brose) | - | - |
| 0x61 | SIGNATURE_ERROR (Brose) | - | - |
| 0x62 | HALL_SWITCHED_OFF (Brose) | - | - |
| 0x63 | DENORM_QUEUE_OVERFLOW (Brose) | - | - |
| 0x80 | Wrong position with running motor (Magna) | - | - |
| 0x81 | Hall pulse period FUSI error (Magna) | - | - |
| 0xFF | Ungültiger Wert | - | - |

### TAB_DEV_FH_REVERSIER_URSACHE

| WERT | TEXT | TEXT_EN | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x00 | KEIN FEHLEREINTRAG | - | - |
| 0x01 | REVERS_ISR | - | Reversieren detektiert durch ISR |
| 0x02 | REVERS_BLOCK | - | Reversieren aufgrund eines Blockes |
| 0x03 | REVERS_ISRDIAG | - | Reversieren detektiert durch ISR bei Einlernjob (Initjob) |
| 0x04 | REVERS_AT | - | Reversieren aufgrund eines Einklemmfalls |
| 0x05 | REVERS_AT_DIAG | - | Reversieren aufgrund eines Einklemmfalls im Einlernjob (Initjob) |
| 0x20 | REVERS_AT_TIMEOUT (Conti) | - | Reversieren AT-Algorithmus hat einen Timeout erkannt |
| 0x21 | REVERS_ATDIAGTIMEOUT (Conti) | - | Reversieren AT-Algorithmus hat einen Timeout im Einlernjob (Initjob)  erkannt |
| 0x60 | REVERS_AT_TIMEOUT (Brose) | - | Reversieren AT-Algorithmus hat einen Timeout erkannt |
| 0x61 | REVERS_ATDIAGTIMEOUT (Brose) | - | Reversieren AT-Algorithmus hat einen Timeout im Einlernjob (Initjob)  erkannt |
| 0xFF | Ungültiger Wert | - | - |

### TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT | TEXT_EN | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x00 | NOT_STOPPED | - | Motor laeuft |
| 0x01 | POSITION_REACHED | - | Position erreicht |
| 0x02 | STOP_MOVE | - | Bewegung abgebrochen durch Bedienkonzept |
| 0x03 | NORM | - | Normierung gefunden |
| 0x04 | RENORM | - | Nachnormierung durchgeführt |
| 0x05 | PINCHING | - | Einklemmen erkannt |
| 0x06 | REV_POS_REACHED | - | Reversierposition erreicht |
| 0x07 | BLOCKED | - | Blockieren erkannt |
| 0x08 | NOT_MOVED | - | Motor steht |
| 0x09 | SAFETY_TIMER | - | Sicherheitszeitueberlauf |
| 0x0A | OPPOSITE_DIRECTION | - | Drehrichtung passt nicht zur Hallauswertung |
| 0x0B | INVALID_TARGET_POS_LOW | - | - |
| 0x0C | INVALID_TARGET_POS_HIGH | - | - |
| 0x0D | STOP_MOVE_HIGH_TEMP | - | - |
| 0x0E | DRIVER_ERROR | - | - |
| 0x0F | MOTOR_SHORT | - | - |
| 0x10 | RESET | - | - |
| 0x11 | PULSE_LOST | - | - |
| 0x12 | MOTOR_VOLTAGE_RANGE | - | - |
| 0x13 | HALL_ERROR | - | - |
| 0x14 | ERR_MOTOR_OFF_CPU_OVERLOAD | - | - |
| 0x20 | AUTO_COND_LOST (Conti) | - | - |
| 0x21 | CODING_FAIL (Conti) | - | - |
| 0x22 | WAITING_FOR_EE (Conti) | - | - |
| 0x23 | EE_TIMEOUT (Conti) | - | - |
| 0x24 | NOT_POSSIBLE_TO_WRITE_EE (Conti) | - | - |
| 0x25 | HALL_DISABLED (Conti) | - | - |
| 0x26 | CODING_SESSION (Conti) | - | - |
| 0x27 | PANIC_NOT_VALID (Conti) | - | - |
| 0x28 | DIAGNOSTIC_SESSION_ACTIVE (Conti) | - | - |
| 0x40 | soft stop on bottom (Magna) | - | - |
| 0x41 | soft stop on top (Magna) | - | - |
| 0x42 | short drop position (Magna) | - | - |
| 0x43 | Hall Sensor Period FUSI Error (Magna) | - | - |
| 0x44 | Relay state FUSI Error (Magna) | - | - |
| 0x45 | SIF STATE FUSI Error (Magna) | - | - |
| 0x46 | Vehicle Speed FUSI Error (Magna) | - | - |
| 0x47 | Vehicle Speed Timeout (Magna) | - | - |
| 0x48 | stopped for safety in fully closed state (Magna) | - | - |
| 0x49 | stopped for safety in fully open state (Magna) | - | - |
| 0x4A | stopped for safety in short drop pos state (Magna) | - | - |
| 0x4B | stopped in window failure state (Magna) | - | - |
| 0x4C | stopped before sleep (Magna) | - | - |
| 0x4D | stopped while opening found not in opening (Magna) | - | - |
| 0x4E | Motor unit (Magna) | - | - |
| 0x4F | signature Interference Occurred (Magna) | - | - |
| 0x50 | position out of validity tolerances (Magna) | - | - |
| 0x51 | Motor voltage FuSi error (Magna) | - | - |
| 0x52 | stopped for safety in mid open state (Magna) | - | - |
| 0x53 | stopped in closing state because moving direction down (Magna) | - | - |
| 0x54 | stopped for stall up while closing (Magna) | - | - |
| 0x55 | stopped for stall down while opening (Magna) | - | - |
| 0x56 | stopped for diagnostic denorm (Magna) | - | - |
| 0x57 | stopped for hall puls counters different (Magna) | - | - |
| 0x58 | Stopped for hall A timeout (Magna) | - | - |
| 0x59 | Stopped for hall B timeout (Magna) | - | - |
| 0x5A | Stopped for hall A & B timeout (Magna) | - | - |
| 0x5B | Redundant Stop for Error in writingNvRam at end of movement (Magna) | - | - |
| 0x60 | AUTO_COND_LOST (Brose) | - | - |
| 0x61 | CODING_FAIL (Brose) | - | - |
| 0x62 | WAITING_FOR_EE (Brose) | - | - |
| 0x63 | EE_TIMEOUT (Brose) | - | - |
| 0x64 | NOT_POSSIBLE_TO_WRITE_EE (Brose) | - | - |
| 0x65 | HALL_DISABLED (Brose) | - | - |
| 0x66 | CODING_SESSION (Brose) | - | - |
| 0x67 | PANIC_NOT_VALID (Brose) | - | - |
| 0x68 | DIAGNOSTIC_SESSION_ACTIVE (Brose) | - | - |
| 0x80 | hall error open load (Magna) | - | - |
| 0x81 | hall error short to ground (Magna) | - | - |
| 0x82 | hall error short to V Bat (Magna) | - | - |
| 0x83 | hall voltage shutdown (Magna) | - | - |
| 0x84 | diagnostic (EDIABAS) profile erasing (Magna) | - | - |
| 0x85 | Hall Impulse when stopped (Magna) | - | - |
| 0x86 | found Short drop state in a FRAMED Door (Magna) | - | - |
| 0x87 | found Short lift Position state in a FRAMED Door (Magna) | - | - |
| 0x88 | found Short drop Position state in a FRAMED Door (Magna) | - | - |
| 0x89 | Closing relay, output voltage without activation (Magna) | - | - |
| 0x8A | Openinging relay, output voltage without activation (Magna) | - | - |
| 0xFF | Ungültiger Wert | - | - |

### TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommen, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0x07 | ungültiger Wert |

### TAB_DEV_FH_THERMOMONITOR_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (Übersteuert) |
| 0x01 | Thermo 90 aktiv (Übersteuert) |
| 0x02 | Thermo 100 aktiv (Übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |

### TAB_FE_FUNCTIONS_REM

| WERT | TEXT | BESCHREIBUNG | TEXT_EN |
| --- | --- | --- | --- |
| 0x00 | EM_DEFAULT | - | - |
| 0x02 | EM_ECUMA_REDUCED_FCT_ACT | Pre-Sleep-Mode, d.h. erhöhter Ruhestrom bei ungesicherten Fzg. zur zyklische Abfrage der Lenk-stock , und Lichtwahlschalter, Deaktivierung nach 1 min. nach KLR aus. | - |
| 0x30 | EM_CL_OPERATION_INH | Centerlock | - |
| 0x80 | EM_PW_REAR_INH | Fensterheber hinten deaktivieren | - |
| 0x81 | EM_PW_SHORTDROP_INH | Fensterheber Kurzhub alle T¿ren deaktiveren | - |
| 0xB1 | EM_HC_DEFROSTER_INH | Heckscheibenheizung | - |
| 0xB2 | EM_HC_SEATSTEERING_INH | Sitzheizung low (Fahrer- / Beifahrer), Sitzheizung LIN (hinten Fa+Bf), Lenkradheizung | - |
| 0xC0 | EM_PF_SUNBLIND_INH | elektrische Sonnenrollos (Mitte, li+re) | - |

### TAB_FE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | FE_MODE_INACTIVE |
| 0x01 | FE_MODE_ACTIVE |

### TAB_FH_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Auswahl |
| 0x11 | Fenster Fahrer |
| 0x12 | Fenster Beifahrer |
| 0x13 | Fenster Fahrer hinten |
| 0x14 | Fenster Beifahrer hinten |
| 0x15 | Heckscheibe |
| 0x21 | Fenster Fahrer und Beifahrer |
| 0x22 | Fenster Fahrer hinten und Beifahrer hinten |
| 0x40 | Fenster Fahrer, Beifahrer, Fahrer hinten und Beifahrer hinten |
| 0x50 | Fenster Fahrer, Beifahrer, Fahrer hinten, Beifahrer hinten und Heckscheibe |
| 0xFF | ungültiger Wert |

### TAB_FH_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Fenster steht |
| 0x01 | Fensterheber fährt auf |
| 0x02 | Reversieren Mautlauf |
| 0x03 | Reversieren Emergency-Mode |
| 0x04 | Fenster fährt zu |
| 0x05 | Fenster fährt zu Emergency-Mode |
| 0x06 | Fenster fährt zu Panic-Mode |
| 0x07 | Einlernvorgang aktiv |
| 0x08 | stellt aus |
| 0xFF | ungültiger Wert |

### TAB_FH_DENORMIER_URSACHE

| WERT | TEXT | TEXT_EN | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x00 | KEIN FEHLEREINTRAG / NORMIERT | - | - |
| 0x01 | EEPROMFEHLER BEIM STARTUP | - | Conti: Checksum of Block A (Position) and C(Reference Field) is not valid |
| 0x02 | INTERFACE WURDE BEIM STARTUP NICHT BEDIENT | - | - |
| 0x03 | ÜBERFAHREN DES OBEREN BLOCKS | - | - |
| 0x04 | ÜBERFAHREN DES UNTEREN BLOCKS | - | - |
| 0x05 | NICHT PLAUSIBLER ZUSTAND | - | Conti: Invalid position during movement |
| 0x06 | FALSCHE POSITION ERKANNT | - | Conti: Invalid position during stop of the motor |
| 0x07 | RELAISKLEBER_1 | - | - |
| 0x08 | RELAISKLEBER_2 | - | - |
| 0x09 | HALLFEHLER | - | Conti: Hall sensor failures |
| 0x0A | EXPLIZITES DENORMIEREN (ASCET) | - | Conti: Denorming by switch and diagnostic job |
| 0x0B | TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN | - | Conti: Too many elements in the queue within 2ms |
| 0x0C | HALLUNTERABTASTUNG | - | - |
| 0x0D | START INITIALISIERUNGSLAUF | - | Conti: Intialisation by switch or diagnostic job |
| 0x0E | INITIALSIERUNGSLAUF ABGEBROCHEN | - | Conti: Intialisation by switch or diagnostic job aborted |
| 0x0F | KEINE POSITION NACH RESET | - | Conti: Reset during motor movement |
| 0x20 | SIF_ERROR (Conti) | - | Conti: Safety integrity function |
| 0x21 | SIGNATURE_ERROR (Conti) | - | Conti: Wrong supplier coded, Signatue does not match, interference occured |
| 0x22 | HALL_SWITCHED_OFF (Conti) | - | Conti: Movement while hall notification tells error |
| 0x23 | HALL_QUEUE_ERROR (Conti) | - | Conti: Inverted status in the queue wrong |
| 0x24 | NEW_SW_CODING_APPLIED (Conti) | - | Conti:  New coding data or software |
| 0x40 | No init data after reset (Magna) | - | - |
| 0x41 | Voltage on motor and relays not active, closing (Magna) | - | - |
| 0x42 | Voltage on motor and relays not active, opening (Magna) | - | - |
| 0x43 | no pulses from Hall A but pulses from Hall element B (Magna) | - | - |
| 0x44 | no pulses from Hall B but pulses from Hall element A (Magna) | - | - |
| 0x45 | Motor actuated; no pulses from Hall elements A+B (Magna) | - | - |
| 0x46 | Hall pulses not plausible (Magna) | - | - |
| 0x47 | Wrong motor direction (Magna) | - | - |
| 0x48 | Wrong motor unit (Magna) | - | - |
| 0x49 | Timeout Motor actuat (Magna) | - | - |
| 0x4A | Invalid MRC Logical failure: the MRC is invalid (Magna) | - | - |
| 0x4B | CPU Overload (Magna) | - | - |
| 0x4C | start of manual init (Magna) | - | - |
| 0x4D | Halls Not Ready Voltage Shut Down (Magna) | - | - |
| 0x4E | Halls Not Ready Open Load (Magna) | - | - |
| 0x4F | Halls Not Ready Short to ground (Magna) | - | - |
| 0x50 | Halls Not Ready Short to ubatt (Magna) | - | - |
| 0x51 | different Software version stored in NvRam (Magna) | - | - |
| 0x52 | different vendor code stored in NvRam (Magna) | - | - |
| 0x53 | signature Interference Occurred (Magna) | - | - |
| 0x54 | No valid position CRC after reset (Magna) | - | - |
| 0x55 | Hall counters A and B value different (Magna) | - | - |
| 0x56 | Hall pulses and no motor actuation (Magna) | - | - |
| 0x57 | FUSI SIF state error (Magna) | - | - |
| 0x58 | Profile and norming erased by RTERunnable_SwcPwDriverMagna01_diag_diagJobWriteFhKennlinieLoeschen (Magna) | - | - |
| 0x59 | error saving NVRam after motor stop (Magna) | - | - |
| 0x5A | coding changed (Magna) | - | - |
| 0x5B | error in NvRam Block A (Magna) | - | - |
| 0x5C | error Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) | - | - |
| 0x5D | Coding data failure (Magna) | - | - |
| 0x5E | Hall shutdown during motor run (Magna) | - | - |
| 0x5F | Wrong position with motor inactive (Magna) | - | - |
| 0x60 | SIF_ERROR (Brose) | - | - |
| 0x61 | SIGNATURE_ERROR (Brose) | - | - |
| 0x62 | HALL_SWITCHED_OFF (Brose) | - | - |
| 0x63 | DENORM_QUEUE_OVERFLOW (Brose) | - | - |
| 0x80 | Wrong position with running motor (Magna) | - | - |
| 0x81 | Hall pulse period FUSI error (Magna) | - | - |
| 0xFF | Ungültiger Wert | - | - |

### TAB_FH_FENSTER_GS

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | teilweise geöffnet |
| 0x02 | vollständig geöffnet |
| 0xFF | ungültig |

### TAB_FH_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Freigabe |
| 0x01 | Freigabe vorhanden |
| 0x03 | Freigabe ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_INIT

| WERT | TEXT |
| --- | --- |
| 0x01 | Fensterheber normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x02 | Fensterheber denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x03 | Fensterheber normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x04 | Fensterheber denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x05 | Fensterheber normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x06 | Fensterheber denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x07 | Fensterheber normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0x08 | Fensterheber denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_KURZHUB_KODIEROPTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Kodieroption rahmenlose Tür ist nicht gesetzt |
| 0x01 | Kodieroption rahmenlose Tür ist gesetzt |
| 0x03 | ungültig |

### TAB_FH_MOTORTEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x01 | Motortemperatur OK |
| 0x02 | Motortemperatur 90% des maximal zulässigen Wertes erreicht |
| 0x03 | Motortemperatur 100% des maximal zulässigen Wertes erreicht |
| 0xFF | Motortemperatur ungültig |

### TAB_FH_MT_LIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x01 | Brose |
| 0x02 | Küster |
| 0x03 | Magna |
| 0x04 | Webasto |
| 0x05 | Inalfa |
| 0x06 | Arvin Meritor |
| 0x07 | Lames |
| 0xFE | Dummy Motortreiber |
| 0xFF | ungültiger Hersteller |

### TAB_FH_PANIC

| WERT | TEXT |
| --- | --- |
| 0x00 | Normal verfahren |
| 0x01 | Emergency Modus |
| 0x02 | Panic Modus |
| 0xFF | ungültig |

### TAB_FH_PANIKMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Panikmodus nicht freigeschalten |
| 0x01 | Panikmodus freigeschalten |
| 0x03 | Freigabe Panikmodus ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Fenster in Bewegung |
| 0x01 | Fenster komplett geschlossen |
| 0x02 | Fenster komplett offen |
| 0x03 | Fenster steht in Zwischenpositon |
| 0x04 | Fenster steht auf Position Kurzhub |
| 0x05 | Fenster steht auf Position Langhub |
| 0x06 | Fenster steht auf Position Cabrio |
| 0x07 | Fenster steht in Ausstellage |
| 0x0A | Fenster steht in Crash-Position |
| 0xA0 | Fenster steht in Demontageposition |
| 0xA1 | Fenster steht in Serviceposition A |
| 0xA2 | Fenster steht in Serviceposition B |
| 0xFF | ungültiger Wert |

### TAB_FH_REVERSIER_URSACHE

| WERT | TEXT | TEXT_EN | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x00 | KEIN FEHLEREINTRAG | - | - |
| 0x01 | REVERS_ISR | - | Reversieren detektiert durch ISR |
| 0x02 | REVERS_BLOCK | - | Reversieren aufgrund eines Blockes |
| 0x03 | REVERS_ISRDIAG | - | Reversieren detektiert durch ISR bei Einlernjob (Initjob) |
| 0x04 | REVERS_AT | - | Reversieren aufgrund eines Einklemmfalls |
| 0x05 | REVERS_AT_DIAG | - | Reversieren aufgrund eines Einklemmfalls im Einlernjob (Initjob) |
| 0x20 | REVERS_AT_TIMEOUT (Conti) | - | Reversieren AT-Algorithmus hat einen Timeout erkannt |
| 0x21 | REVERS_ATDIAGTIMEOUT (Conti) | - | Reversieren AT-Algorithmus hat einen Timeout im Einlernjob (Initjob)  erkannt |
| 0x40 | Reversal in Emergency Mode (Magna) | - | - |
| 0x41 | Reversed at Timeout (Magna) | - | - |
| 0x60 | REVERS_AT_TIMEOUT (Brose) | - | Reversieren AT-Algorithmus hat einen Timeout erkannt |
| 0x61 | REVERS_ATDIAGTIMEOUT (Brose) | - | Reversieren AT-Algorithmus hat einen Timeout im Einlernjob (Initjob)  erkannt |
| 0xFF | Ungültiger Wert | - | - |

### TAB_FH_SHD_ESH_EINLERNEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Einlernen ohne Kraftbegrenzung |
| 0x02 | Einlernen mit Kraftbegrenzung |
| 0x03 | Einlernen mit Kraftbegrenzung und Not-Stopp |
| 0x04 | Reserviert für Manuelles Einlernen |
| 0x05 | Normieren |

### TAB_FH_SHD_ESH_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung erfolgreich abgeschlossen |
| 0x03 | Abbruch durch Benutzer, Notstop |
| 0x04 | Abbruch durch Benutzer, Diagnose |
| 0x05 | Abbruch durch Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0x07 | Fehler: keine FH-Freigabe |
| 0x08 | Fehler: Vorgang kann nicht gestartet werden, weil Tür offen |
| 0x09 | Fehler: Vorgang kann nicht gestartet werden, weil Verdeck/VHT offen |
| 0x0A | Fehler: Vorgang kann nicht gestartet werden, weil SG nicht codiert |
| 0xF0 | Fehler: allgemeiner Fehler |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Leitungsunterbrechung |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kurzschluss nach Ubatt |
| 0x04 | Kurzschluss nach Ubatt oder Leitungsunterbrechung |
| 0xFF | ungültiger Zustand |

### TAB_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT | TEXT_EN | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x00 | NOT_STOPPED | - | Motor laeuft |
| 0x01 | POSITION_REACHED | - | Position erreicht |
| 0x02 | STOP_MOVE | - | Bewegung abgebrochen durch Bedienkonzept |
| 0x03 | NORM | - | Normierung gefunden |
| 0x04 | RENORM | - | Nachnormierung durchgeführt |
| 0x05 | PINCHING | - | Einklemmen erkannt |
| 0x06 | REV_POS_REACHED | - | Reversierposition erreicht |
| 0x07 | BLOCKED | - | Blockieren erkannt |
| 0x08 | NOT_MOVED | - | Motor steht |
| 0x09 | SAFETY_TIMER | - | Sicherheitszeitueberlauf |
| 0x0A | OPPOSITE_DIRECTION | - | Drehrichtung passt nicht zur Hallauswertung |
| 0x0B | INVALID_TARGET_POS_LOW | - | falsche Zielposition (zu niedrig) |
| 0x0C | INVALID_TARGET_POS_HIGH | - | falsche Zielposition (zu hoch) |
| 0x0D | STOP_MOVE_HIGH_TEMP | - | Motor zu warm |
| 0x0E | DRIVER_ERROR | - | Fehler in Motoransteuerungs-HW |
| 0x0F | MOTOR_SHORT | - | Motorkurzschluss |
| 0x10 | RESET | - | Reset während Motorbewegung |
| 0x11 | PULSE_LOST | - | HALL Puls verloren |
| 0x12 | MOTOR_VOLTAGE_RANGE | - | Motorspannung nicht im Betriebsbereich |
| 0x13 | HALL_ERROR | - | Fehler in Hallsensor-HW |
| 0x14 | ERR_MOTOR_OFF_CPU_OVERLOAD | - | keine OSEK Rechenzeit für Einklemmschutz-Algorithmus zugeteilt |
| 0x20 | AUTO_COND_LOST (Conti) | - | Wegfall Automatikfreigabe |
| 0x21 | CODING_FAIL (Conti) | - | Fehler Codierdaten Checksumme |
| 0x22 | WAITING_FOR_EE (Conti) | - | Warten auf EEPROM |
| 0x23 | EE_TIMEOUT (Conti) | - | Keine Antwort vom NVRAM Manager |
| 0x24 | NOT_POSSIBLE_TO_WRITE_EE (Conti) | - | Position kann nicht in EEPROM geschrieben werden |
| 0x25 | HALL_DISABLED (Conti) | - | Hall ausgeschaltet |
| 0x26 | CODING_SESSION (Conti) | - | Coding session aktiv |
| 0x27 | PANIC_NOT_VALID (Conti) | - | Panic Close nicht erlaubt |
| 0x28 | DIAGNOSTIC_SESSION_ACTIVE (Conti) | - | Für Brose und Conti gleich?? |
| 0x29 | SYSTEM_SIF_ERROR (Conti) | - | Sif Error vom Sif Modul gemeldet |
| 0x2A | SYSTEM_SHUTDOWN (Conti) | - | Basis SW initiert System Shutdown |
| 0x2B | HALL_QUEUE_ERROR (Conti) | - | Hall Queue Error erkannt |
| 0x40 | soft stop on bottom (Magna) | - | - |
| 0x41 | soft stop on top (Magna) | - | - |
| 0x42 | short drop position (Magna) | - | - |
| 0x43 | Hall Sensor Period FUSI Error (Magna) | - | - |
| 0x44 | Relay state FUSI Error (Magna) | - | - |
| 0x45 | SIF STATE FUSI Error (Magna) | - | - |
| 0x46 | Vehicle Speed FUSI Error (Magna) | - | - |
| 0x47 | Vehicle Speed Timeout (Magna) | - | - |
| 0x48 | stopped for safety in fully closed state (Magna) | - | - |
| 0x49 | stopped for safety in fully open state (Magna) | - | - |
| 0x4A | stopped for safety in short drop pos state (Magna) | - | - |
| 0x4B | stopped in window failure state (Magna) | - | - |
| 0x4C | stopped before sleep (Magna) | - | - |
| 0x4D | stopped while opening found not in opening (Magna) | - | - |
| 0x4E | Motor unit (Magna) | - | - |
| 0x4F | signature Interference Occurred (Magna) | - | - |
| 0x50 | position out of validity tolerances (Magna) | - | - |
| 0x51 | Motor voltage FuSi error (Magna) | - | - |
| 0x52 | stopped for safety in mid open state (Magna) | - | - |
| 0x53 | stopped in closing state because moving direction down (Magna) | - | - |
| 0x54 | stopped for stall up while closing (Magna) | - | - |
| 0x55 | stopped for stall down while opening (Magna) | - | - |
| 0x56 | stopped for diagnostic denorm (Magna) | - | - |
| 0x57 | stopped for hall puls counters different (Magna) | - | - |
| 0x58 | Stopped for hall A timeout (Magna) | - | - |
| 0x59 | Stopped for hall B timeout (Magna) | - | - |
| 0x5A | Stopped for hall A & B timeout (Magna) | - | - |
| 0x5B | Redundant Stop for Error in writingNvRam at end of movement (Magna) | - | - |
| 0x5C | Redundant motor stop for NvRam Block A Error (Magna) | - | - |
| 0x5D | Redundant stop for coding changed (Magna) | - | - |
| 0x5E | coding stated (Magna) | - | - |
| 0x5F | Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) | - | - |
| 0x60 | AUTO_COND_LOST (Brose) | - | Wegfall Automatikfreigabe |
| 0x61 | CODING_FAIL (Brose) | - | Fehler Codierdaten Checksumme |
| 0x62 | WAITING_FOR_EE (Brose) | - | Warten auf EEPROM |
| 0x63 | EE_TIMEOUT (Brose) | - | Keine Antwort vom NVRAM Manager |
| 0x64 | NOT_POSSIBLE_TO_WRITE_EE (Brose) | - | Position kann nicht in EEPROM geschrieben werden |
| 0x65 | HALL_DISABLED (Brose) | - | Hall ausgeschaltet |
| 0x66 | CODING_SESSION (Brose) | - | Coding session aktiv |
| 0x67 | PANIC_NOT_VALID (Brose) | - | Panic Close nicht erlaubt |
| 0x68 | DIAGNOSTIC_SESSION_ACTIVE (Brose) | - | Für Brose und Conti gleich?? |
| 0x80 | hall error open load (Magna) | - | - |
| 0x81 | hall error short to ground (Magna) | - | - |
| 0x82 | hall error short to V Bat (Magna) | - | - |
| 0x83 | hall voltage shutdown (Magna) | - | - |
| 0x84 | diagnostic (EDIABAS) profile erasing (Magna) | - | - |
| 0x85 | Hall Impulse when stopped (Magna) | - | - |
| 0x86 | found Short drop state in a FRAMED Door (Magna) | - | - |
| 0x87 | found Short lift Position state in a FRAMED Door (Magna) | - | - |
| 0x88 | found Short drop Position state in a FRAMED Door (Magna) | - | - |
| 0x89 | Closing relay, output voltage without activation (Magna) | - | - |
| 0x8A | Openinging relay, output voltage without activation (Magna) | - | - |
| 0xFF | Ungültiger Wert | - | - |

### TAB_FH_SHD_ESH_RELAIS_NUMBER

| WERT | TEXT |
| --- | --- |
| 0x01 | Relais 1 |
| 0x02 | Relais 2 |

### TAB_FH_SHD_ESH_SERVICEPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Montageposition |
| 0x01 | Demontageposition |
| 0x02 | Serviceposition A |
| 0x03 | Serviceposition B |

### TAB_FH_SHD_ESH_SFK1

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzhub |
| 0x01 | Langhub/Einstiegshilfe |
| 0x02 | Cabrio Position |
| 0x03 | Crash Position |
| 0x04 | Windabweiser |
| 0x05 | Komfort-Position |
| 0x06 | Anti-Wummer-Position |

### TAB_FH_SHD_ESH_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommen, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_TASTER_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Öffnen |
| 0x02 | Schliessen |
| 0x03 | Maut-Öffnen |
| 0x04 | Maut-Schliessen |
| 0x05 | Heben |

### TAB_FH_STAT_EEPROM

| WERT | TEXT |
| --- | --- |
| 0x01 | Checksumme IO |
| 0x02 | Checksumme NIO |
| 0xFF | ungültiger Wert |

### TAB_FH_SYSTEMTYP

| WERT | TEXT |
| --- | --- |
| 0x00 | EKS mit 2-Hallsensoren |
| 0x01 | Nur Motorschutz mit 1-Hallsensor |
| 0x02 | Nur Motorschutz mit Strommessung |
| 0xFF | ungültig |

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

### TAB_FH_WACHHALTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0x02 | ungültig |

### TAB_FH_ZUSTAND_TUER

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Türstatus unplausiebel |
| 0x03 | Türstatus ungültig |
| 0xFF | Signal ungültig |

### TAB_FUSI_FEHLERURSACHE

| WERT | TEXT |
| --- | --- |
| 0x01 | FuSi_ECC_ROM |
| 0x03 | FuSi_ECC_RAM |
| 0x04 | FuSi_OS_STACKFAULT |
| 0x05 | FuSi_OS_UNUSED_IT |
| 0x06 | FuSi_OS_LIMIT |
| 0x07 | FuSi_Reset_Counter |
| 0x08 | FuSi_OpCodeTest |
| 0x09 | FuSi_LimpRequest |
| 0x0A | FuSi_DiagLimpRequest |
| 0x0B | FuSi_SysRegister |
| 0x0C | FuSi_IO_Register |
| 0x0D | FuSi_ECUMA_CODETRAP |
| 0x0E | FuSi_ECUMA_ILEGADR |
| 0x0F | FuSi_AdcCheck |
| 0xFF | Wert ungültig |

### TAB_GZB_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Stop |
| 0x01 | ausfahren |
| 0x02 | einfahren |

### TAB_GZB_RRR_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Initlauf nicht gestartet |
| 0x01 | Initlauf IO abgeschlossen |
| 0x02 | Initlauf NIO |
| 0x03 | Initlauf läuft |
| 0x04 | Initlauf abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_LAMP_MAPPING_ERROR_TYPE

| WERT | TEXT |
| --- | --- |
| 0 | Unknown |
| 1 | AIL |
| 2 | AIR |
| 3 | FraVL |
| 4 | FraVR |
| 5 | FraHL |
| 6 | FraHR |
| 7 | BIM |
| 8 | CheckControl für Ausgang |
| 9 | Output |
| 10 | Priority |
| 11 | Function |
| 12 | PwmLevel1 |
| 13 | DependencyFunc |
| 14 | DependencyPwm |
| 15 | OffModePWM |
| 16 | VoltagePeakPwm |
| 17 | SpareOutput |

### TAB_LCE_MAPPINGSET_IDS

| WERT | TEXT |
| --- | --- |
| 0 | keine Angabe |
| 1 | MAPPING_STANDL_H1_L |
| 2 | MAPPING_STANDL_H1_R |
| 3 | MAPPING_STANDL_H2_L |
| 4 | MAPPING_STANDL_H2_R |
| 5 | MAPPING_STANDL_H3_L |
| 6 | MAPPING_STANDL_H3_R |
| 7 | MAPPING_BREMSL_L |
| 8 | MAPPING_BREMSL_R |
| 9 | MAPPING_BREMSL_2_L |
| 10 | MAPPING_BREMSL_2_R |
| 11 | MAPPING_BREMSL_M |
| 12 | MAPPING_BRAKEFORCED_L |
| 13 | MAPPING_BRAKEFORCED_R |
| 14 | MAPPING_BRAKEFORCED_2_L |
| 15 | MAPPING_BRAKEFORCED_2_R |
| 16 | MAPPING_BRAKEFORCED_M |
| 17 | MAPPING_BLINKER_H_L |
| 18 | MAPPING_BLINKER_H_R |
| 19 | MAPPING_PARKL_H_L |
| 20 | MAPPING_PARKL_H_R oder Ausgang SL_L |
| 21 | MAPPING_TAGFAHRL_H_L oder Ausgang SL_R |
| 22 | MAPPING_TAGFAHRL_H_R oder Ausgang SL_2_L |
| 23 | MAPPING_TAGFAHRL_H2_L oder Ausgang SL_2_R |
| 24 | MAPPING_TAGFAHRL_H2_R oder Ausgang BL_L |
| 25 | MAPPING_KENNZEICHENL oder Ausgang BL_R |
| 26 | MAPPING_SMALL_SL_L oder Ausgang BFD_L |
| 27 | MAPPING_SMALL_SL_R oder Ausgang BFD_R |
| 28 | MAPPING_RUECKFAHRL_L oder Ausgang NSL_L |
| 29 | MAPPING_RUECKFAHRL_R oder Ausgang NSL_R |
| 30 | MAPPING_NEBELSCHLUSSL_L oder Ausgang RFS_L |
| 31 | MAPPING_NEBELSCHLUSSL_R oder Ausgang RFS_R |
| 32 | MAPPING_UNIVERSAL_1 oder Ausgang FRA_H_L |
| 33 | MAPPING_UNIVERSAL_2 oder Ausgang FRA_H_R |
| 34 | MAPPING_UNIVERSAL_3 oder Ausgang KZL |
| 35 | MAPPING_UNIVERSAL_4 oder Ausgang BL_M |
| 36 | MAPPING_UNIVERSAL_5 |
| 37 | MAPPING_UNIVERSAL_6 |
| 38 | MAPPING_UNIVERSAL_7 |
| 39 | MAPPING_UNIVERSAL_8 |
| 40 | MAPPING_UNIVERSAL_9 |
| 255 | kein Fehler |

### TAB_LEUCHTEN_KURZSCHLUSSABSCHLATUNG_RESET_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Rücksetzen erfolgreich durchgeführt |
| 1 | Rücksetzen nicht möglich -  Maximale Anzahl an Kurzschlüssen erreicht -> SG-Tausch notwendig |
| 255 | ungültig |

### TAB_LEUCHTEN_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Überwachung nicht gestartet |
| 0x01 | Überwachung läuft |
| 0x02 | Überwachung ohne Fehler abgeschlossen |
| 0x03 | Überwachung mit Lampendefekten abgeschlossen |
| 0x04 | Fehler: nicht bereit |
| 0x05 | Fehler: Abbruch durch Benutzer |
| 0xFF | Ungültiger Wert |

### TAB_PDC_ROLLEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrzeug steht |
| 0x01 | Fahrzeug fährt vorwärts |
| 0x02 | Fahrzeug fährt rückwärts |
| 0x03 | Fahrzeug fährt |
| 0xFF | ungültiger Wert |

### TAB_PDC_SENSORTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht angefordert |
| 0x01 | Test läuft |
| 0x02 | Test Ergebnis OK |
| 0x03 | Test Ergebnis nicht OK |
| 0x04 | Test Stopp. System aktuell nicht bereit den Test zu starten oder Test abgebrochen. |
| 0xFF | Ungültiger Wert |

### TAB_PDC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDC nicht aktiv |
| 0x01 | PDC aktiv |
| 0x02 | PDC hat Fehler erkannt |

### TAB_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais auf Ubatt |
| 0x01 | Relais auf Masse |

### TAB_SBC_CAN1_FAILURE_GRUND

| WERT | TEXT |
| --- | --- |
| 1 | SBC_CAN1_FAILURE_TXD_SC_GND_OR BUS_DOMINANT_CLAMPED |
| 2 | SBC_CAN1_FAILURE_RXD_SC_VCC |
| 3 | SBC_CAN_FAILURE_TXD_SC_RXD |
| 255 | SBC_CAN1_FAILURE_INVALID |

### TAB_SHD_FH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | SH_L_VORN |
| 0x02 | SH_R_VORN |

### TAB_SITZHEIZUNG_ORT

| WERT | TEXT |
| --- | --- |
| 0x00 | SHZ aus |
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

### TAB_SPIELSCHUTZ_FUNCTIONS

| WERT | TEXT |
| --- | --- |
| 1 | EM_WAKESRC_BFCAN |
| 2 | EM_WAKESRC_BFLIN |
| 3 | EM_WAKESRC_0x36_TC_15WUP |
| 4 | EM_WAKESRC_0x20_TC_SSPA |
| 5 | EM_WAKESRC_0x21_TC_SSPB |
| 6 | EM_WAKESRC_0x31_TC_PLOCK |
| 7 | EM_WAKESRC_0x33_TC_IBSWUP |
| 8 | EM_WAKESRC_0x3D_TC_BRAKE |
| 9 | EM_WAKESRC_0x3E_TC_CLUTCH |
| 11 | EM_WAKESRC_0x25_LCE_LIGHTSWITCH |
| 12 | EM_WAKESRC_0x26_LCE_OPWARNLIGHT |
| 13 | EM_WAKESRC_0x27_LCE_INDICATORLEFT |
| 14 | EM_WAKESRC_0x28_LCE_INDICATORRIGHT |
| 15 | EM_WAKESRC_0x2A_LCI_OPLIGHT |
| 16 | EM_WAKESRC_0x2A_LCI_OPLIGHTREAR |
| 18 | EM_WAKESRC_0x23_CL_OPCLBUTTON |
| 19 | EM_WAKESRC_0x1C_CL_OPDRDUNLOCK |
| 20 | EM_WAKESRC_0x1D_CL_OPDRDLOCK |
| 21 | EM_WAKESRC_0x16_CL_OPBOOTLIDINT |
| 22 | EM_WAKESRC_0x17_CL_OPBOOTLIDEXT |
| 23 | EM_WAKESRC_0x18_CL_OPREARSCREEN |
| 24 | EM_WAKESRC_0x24_CL_OPBOOTLIDSEC |
| 25 | EM_WAKESRC_0x32_CL_OPHOTELMODE |
| 26 | EM_WAKESRC_0x10_CL_SWITCHDRD |
| 27 | EM_WAKESRC_0x11_CL_SWITCHPSD |
| 28 | EM_WAKESRC_0x12_CL_SWITCHDRDR |
| 29 | EM_WAKESRC_0x13_CL_SWITCHPSDR |
| 30 | EM_WAKESRC_0x19_CL_SWITCHBOOTLID |
| 31 | EM_WAKESRC_0x1A_CL_SWITCHREARSCREEN |
| 32 | EM_WAKESRC_0x1B_CL_SWITCHBONNET |
| 33 | EM_WAKESRC_0x39_CA_CAPSENSORDRD |
| 34 | EM_WAKESRC_0x3A_CA-CAPSENSORPSD |
| 35 | EM_WAKESRC_0x3B_CA_CAPSENSORDRDR |
| 36 | EM_WAKESRC_0x3C_CA_CAPSENSORPSDR |
| 37 | EM_WAKESRC_0x15_CA_PULLSENSORDRD |
| 38 | EM_WAKESRC_0x16_CA_PULLSENSORPSD |
| 39 | EM_WAKESRC_0x37_CA_PULLSENSORDRDR |
| 40 | EM_WAKESRC_0x38_CA_PULLSENSORPSDR |
| 41 | EM_WAKESRC_0x30_RC_ACTIVE |
| 42 | EM_WAKESRC_0x06_EXMI_OPERATION |
| 43 | EM_WAKESRC_0x2E_PFSZL_ESCA_OPERATION |

### TAB_SW_COMPONENTS

| WERT | TEXT |
| --- | --- |
| 0x00 | SwcTcMaster |
| 0x01 | SwcTcMaster30f |
| 0x02 | SwcTcIntegration |
| 0x03 | SwcClMaster |
| 0x04 | SwcClIntegration |
| 0x05 | SwcCaMaster |
| 0x06 | SwcCaIntegration |
| 0x07 | SwcWwMaster |
| 0x08 | SwcWwIntegration |
| 0x09 | SwcExmiMaster |
| 0x0a | SwcExmiIntegration |
| 0x0b | SwcLceMaster |
| 0x0c | SwcLceIntegration |
| 0x0d | SwcLciMaster |
| 0x0e | SwcLciIntegration |
| 0x0f | SwcLaMaster |
| 0x10 | SwcLaIntegration |
| 0x11 | SwcPwMaster |
| 0x12 | SwcPwClient |
| 0x13 | SwcPwDriver |
| 0x14 | SwcPwIntegration |
| 0xFF | unknown |

### TAB_THERMOMONITOR_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (Übersteuert) |
| 0x01 | Thermo 90 aktiv (Übersteuert) |
| 0x02 | Thermo 100 aktiv (Übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |

### TAB_ZSG_BF_WECK_DEACT

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON |
| 0xFD | deaktiviert alle Wachhaltequellen |
| 0xFE | aktiviert alle Wachhaltequellen |
| 0xFF | ungültig |

### TAB_ZSG_BF_WECK_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | ECUMA_DEFAULT |
| 0x01 | ECUMA_IM_NOTINITIALIZED |
| 0x0F | ECUMA_DIAGSESSION_ACTIVE |
| 0x10 | ECUMA_GW_15_ON |
| 0x11 | ECUMA_GW_15WUP |
| 0x12 | ECUMA_GW_POWER_ON |
| 0x13 | ECUMA_GW_ETHERNET_ACT |
| 0x14 | ECUMA_GW_POWER_ON_BODY |
| 0x15 | ECUMA_GW_CAN_ZSG |
| 0x16 | ECUMA_GW_CAN_FA |
| 0x17 | ECUMA_GW_CAN_B |
| 0x18 | ECUMA_GW_CAN_B2 |
| 0x19 | ECUMA_GW_CAN_K |
| 0x1A | ECUMA_GW_CAN_A |
| 0x1B | ECUMA_GW_CAN_D |
| 0x1C | ECUMA_GW_CAN_FR |
| 0x20 | ECUMA_BS_CAN_ZSG |
| 0x21 | ECUMA_BS_CAN_FA |
| 0x22 | ECUMA_BS_LIN_A_R |
| 0x23 | ECUMA_BS_LIN_B_SB |
| 0x24 | ECUMA_BS_LIN_C_BEL |
| 0x25 | ECUMA_BS_LIN_D_SZL |
| 0x30 | ECUMA_TC_15WUP |
| 0x31 | ECUMA_TC_15_ON |
| 0x32 | ECUMA_TC_15N_ON |
| 0x33 | ECUMA_TC_30F_REQ |
| 0x34 | ECUMA_TC_SSPA |
| 0x35 | ECUMA_TC_SSPB |
| 0x36 | ECUMA_TC_IBS_WUP |
| 0x37 | ECUMA_TC_PLOCK |
| 0x38 | ECUMA_TC_CLUTCH |
| 0x39 | ECUMA_TC_BRAKE |
| 0x3A | ECUMA_TC_30B_SCD |
| 0x3B | ECUMA_TC_30B_ON |
| 0x3C | ECUMA_TC_R_ON |
| 0x3D | ECUMA_TC_TELEMATIC_ACTIVE |
| 0x3E | ECUMA_TC_IBS_ACTIVE |
| 0x40 | ECUMA_LC_LCE_ACTIVE |
| 0x41 | ECUMA_LC_LCI_ACTIVE |
| 0x42 | ECUMA_LC_OP_WARNLIGHT |
| 0x43 | ECUMA_LC_OP_INDICATOR_LEFT |
| 0x44 | ECUMA_LC_OP_INDICATOR_RIGHT |
| 0x45 | ECUMA_LC_OP_HEADLIGHT_FLASHER |
| 0x46 | ECUMA_LC_OP_INTERIORLIGHT_FRONT |
| 0x47 | ECUMA_LC_OP_INTERIORLIGHT_REAR |
| 0x48 | ECUMA_LC_OP_LIGHT_SW |
| 0x49 | ECUMA_LC_POSITIONLIGHT_OFF |
| 0x4A | ECUMA_LC_INDICATOR_KLR |
| 0x4B | ECUMA_LC_WARNLIGHT_KLR |
| 0x4C | ECUMA_LC_FOLLOWMEHOME |
| 0x4D | ECUMA_LC_WELCOME |
| 0x4E | ECUMA_LC_REMOTELIGHT |
| 0x4F | ECUMA_LC_DISABLE_DIAGSLEEP |
| 0x50 | ECUMA_CL_OP_CL_BUTTON |
| 0x53 | ECUMA_CL_OP_BOOTLID_INT |
| 0x54 | ECUMA_CL_OP_BOOTLID_EXT |
| 0x55 | ECUMA_CL_OP_BOOTLID_SEC |
| 0x56 | ECUMA_CL_OP_REARSCREEN |
| 0x57 | ECUMA_CL_OP_HOTEL_MODE |
| 0x58 | ECUMA_CL_SWITCH_DOOR_DRD |
| 0x59 | ECUMA_CL_SWITCH_DOOR_PSD |
| 0x5A | ECUMA_CL_SWITCH_DOOR_DRDR |
| 0x5B | ECUMA_CL_SWITCH_DOOR_PSDR |
| 0x5C | ECUMA_CL_SWITCH_BONNET |
| 0x5D | ECUMA_CL_SWITCH_BOOTLID |
| 0x5E | ECUMA_CL_SWITCH_REARSCREEN |
| 0x5F | ECUMA_CL_SWITCH_BOOTLID_PRECATCH |
| 0x60 | ECUMA_CL_PIA_LOCK_AT_TIMEOUT |
| 0x61 | ECUMA_CL_RELAYSTUCK_FAULT |
| 0x70 | ECUMA_PW_OP_DRD_LIN |
| 0x71 | ECUMA_PW_OP_PSD_LIN |
| 0x72 | ECUMA_PW_OP_DRDR_LIN |
| 0x73 | ECUMA_PW_OP_PSDR_LIN |
| 0x74 | ECUMA_PW_OP_RSCR_CAB_LIN |
| 0x75 | ECUMA_PW_OP_DRD_DISC |
| 0x76 | ECUMA_PW_OP_PSD_DISC |
| 0x77 | ECUMA_PW_OP_DRDR_DISC |
| 0x78 | ECUMA_PW_OP_PSDR_DISC |
| 0x79 | ECUMA_PW_DRIVER_ACTIVE |
| 0x7A | ECUMA_PW_RELAYSTUCK_FAULT |
| 0x80 | ECUMA_CE_CAP_DRD |
| 0x81 | ECUMA_CE_CAP_PSD |
| 0x82 | ECUMA_CE_CAP_DRDR |
| 0x83 | ECUMA_CE_CAP_PSDR |
| 0x84 | ECUMA_CE_PULL_DRD |
| 0x85 | ECUMA_CE_PULL_PSD |
| 0x86 | ECUMA_CE_PULL_DRDR |
| 0x87 | ECUMA_CE_PULL_PSDR |
| 0x88 | ECUMA_CE_SMO_ACTIVE |
| 0x90 | ECUMA_ECL_ACTIVE |
| 0x91 | ECUMA_TR_ACTIVE |
| 0x92 | ECUMA_RC_ACTIVE |
| 0x93 | ECUMA_EXMI_ACTIVE |
| 0x94 | ECUMA_PF_SZL_ESCA_ACTIVE |
| 0x95 | ECUMA_ESCA_RELAYSTUCK_FAULT |
| 0x96 | ECUMA_WW_PUMPDRIVER_FAULT |
| 0x97 | ECUMA_PF_SUNBLIND_RELAYSTUCK_FAULT |
| 0x98 | ECUMA_AC_WATERPUMPADD_ACTIVE |
| 0x99 | ECUMA_AC_WATERVALVE_ACTIVE |
| 0x9A | ECUMA_PF_HORN |
| 0x9B | ECUMA_WW_ACTIVE |
| 0x9C | ECUMA_SH_ACTIVE |
| 0x9D | ECUMA_HC_EXMI_ACTIVE |
| 0xE0 | ECUMA_INT_WKPSEL0 |
| 0xE1 | ECUMA_INT_WKPSEL1 |
| 0xE2 | ECUMA_INT_WKPSEL2 |
| 0xE3 | ECUMA_INT_WKPSEL3 |
| 0xE4 | ECUMA_INT_WKPSEL4 |
| 0xE5 | ECUMA_INT_WKPSEL5 |
| 0xE6 | ECUMA_INT_WKPSEL6 |
| 0xE7 | ECUMA_INT_WKPSEL7 |
| 0xE8 | ECUMA_INT_UNDERVOLTAGE |
| 0xE9 | ECUMA_INT_INVALID_ISR |
| 0xF0 | ECUMA_RESET_NVM_TIMEOUT |
| 0xF1 | ECUMA_RESET_RESERVED1 |
| 0xF2 | ECUMA_RESET_RESERVED2 |
| 0xF3 | ECUMA_RESET_RESERVED3 |
| 0xF4 | ECUMA_RESET_ILEGADR |
| 0xF5 | ECUMA_RESET_CODETRAP |
| 0xF6 | ECUMA_RESET_LVT |
| 0xF7 | ECUMA_RESET_SW |
| 0xF8 | ECUMA_RESET_CHKSTOP |
| 0xF9 | ECUMA_RESET_COP |
| 0xFA | ECUMA_RESET_LOSSOFPLL |
| 0xFB | ECUMA_RESET_LOSSOFCLK |
| 0xFC | ECUMA_RESET_EXT |
| 0xFD | ECUMA_RESET_POWERON |
| 0xFE | ECUMA_RESET_UNKOWN |
| 0xFF | ECUMA_INVALID |

### TAB_ZSG_ZV_AKTION_CLIENT

| WERT | TEXT |
| --- | --- |
| 0x05 | Heckklappe selektiv entriegeln |
| 0x06 | Heckscheibe selektiv entriegeln |

### TAB_ZSG_ZV_ENTRIEGELT

| WERT | TEXT |
| --- | --- |
| 0x00 | Schloss nicht entriegelt / nicht aktiv |
| 0x01 | Schloss entriegelt / aktiv |
| 0xFF | Signal ungültig/unplausibel |

### TAB_ZSG_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | Gesichert |
| 0x03 | Crash-Mode aktiv |
| 0x80 | Klappe/Scheibe geschlossen |
| 0x81 | Klappe/Scheibe geöffnet |
| 0xC8 | Klappe in Vorraststellung |
| 0xC9 | Klappe nicht in Vorraststellung |
| 0xFF | ungültig/unplausibel/nicht verbaut |

### TAB_ZSG_ZV_VERRIEGELT

| WERT | TEXT |
| --- | --- |
| 0x00 | Schloss nicht verriegelt / nicht aktiv |
| 0x01 | Schloss verriegelt / aktiv |
| 0xFF | Signal ungültig/unplausibel |

### LAMPEN_AUSGANG

| ID | SHORT_LABEL | BESCHREIBUNG |
| --- | --- | --- |
| 0x14 | SL_L | Schlusslicht 1 links |
| 0x15 | SL_R | Schlusslicht 1 rechts |
| 0x16 | SL_2_L | Schlusslicht 2 links |
| 0x17 | SL_2_R | Schlusslicht 2 rechts |
| 0x18 | BL_L | Bremslicht links |
| 0x19 | BL_R | Bremslicht rechts |
| 0x1A | BFD_L | Break force Display links |
| 0x1B | BFD_R | Break force Display rechts |
| 0x1C | NSL_L | Nebelschlussleuchte links |
| 0x1D | NSL_R | Nebelschlussleuchte rechts |
| 0x1E | RFS_L | Rueckfahrscheinwerfer links |
| 0x1F | RFS_R | Rueckfahrscheinwerfer rechts |
| 0x20 | FRA_H_L | Fahrtrichtungsanzeiger hinten links |
| 0x21 | FRA_H_R | Fahrtrichtungsanzeiger hinten rechts |
| 0x22 | KZL | Kennzeichenlicht |
| 0x23 | BL_M | Bremslicht mitte |
| 0xFF | INV | invalid |

### T_TAB_ZSG_BF_WECK_GRUND

| WERT | TEXT |
| --- | --- |
| 0 | ECUMA_DEFAULT |
| 1 | ECUMA_INIT |
| 15 | ECUMA_DIAGSESSION_ACTIVE |
| 16 | ECUMA_GW_15_ON |
| 17 | ECUMA_GW_15WUP |
| 18 | ECUMA_GW_POWER_ON |
| 19 | ECUMA_GW_ETHERNET_ACT |
| 20 | ECUMA_GW_MOST_PICKTAIL |
| 21 | ECUMA_GW_PWMG_BC |
| 22 | ECUMA_GW_CAN_ZSG |
| 23 | ECUMA_GW_CAN_FA |
| 24 | ECUMA_GW_CAN_B |
| 25 | ECUMA_GW_CAN_K |
| 26 | ECUMA_GW_CAN_A |
| 27 | ECUMA_GW_CAN_D |
| 28 | ECUMA_GW_FR |
| 32 | ECUMA_BS_CAN_ZSG |
| 33 | ECUMA_BS_CAN_FA |
| 34 | ECUMA_BS_LIN_A_R |
| 35 | ECUMA_BS_LIN_B_SB |
| 36 | ECUMA_BS_LIN_C_BEL |
| 37 | ECUMA_BS_LIN_D_SZL |
| 48 | ECUMA_TC_15WUP |
| 49 | ECUMA_TC_15_ON |
| 50 | ECUMA_TC_30B_ON |
| 51 | ECUMA_TC_30F_REQ |
| 52 | ECUMA_TC_SSPA |
| 53 | ECUMA_TC_SSPB |
| 54 | ECUMA_TC_IBS_WUP |
| 55 | ECUMA_TC_MOST_WUP |
| 56 | ECUMA_TC_CLUTCH |
| 57 | ECUMA_TC_BRAKE |
| 58 | ECUMA_TC_30B_SCT |
| 64 | ECUMA_LC_LCE_ACTIVE |
| 65 | ECUMA_LC_LCI_ACTIVE |
| 66 | ECUMA_LC_WARNLIGHT |
| 67 | ECUMA_LC_INDICATOR_LEFT |
| 68 | ECUMA_LC_INDICATOR_RIGHT |
| 69 | ECUMA_LC_HEADLIGHT_FLASHER |
| 70 | ECUMA_LC_OP_INTERIOR_LIGHT |
| 71 | ECUMA_LC_OP_INTERIORLIGHT_REAR |
| 72 | ECUMA_LC_LIGHT_SW |
| 73 | ECUMA_LC_SWITCHOFFVA |
| 80 | ECUMA_CL_OP_CL_BUTTON |
| 81 | ECUMA_CL_OP_DRD_LOCK |
| 82 | ECUMA_CL_OP_DRD_UNLOCK |
| 83 | ECUMA_CL_OP_BOOTLID_INT |
| 84 | ECUMA_CL_OP_BOOTLID_EXT |
| 85 | ECUMA_CL_OP_BOOTLID_SEC |
| 86 | ECUMA_CL_OP_REARSCREEN |
| 87 | ECUMA_CL_OP_HOTEL_MODE |
| 88 | ECUMA_CL_SWITCH_DOOR_DRD |
| 89 | ECUMA_CL_SWITCH_DOOR_PSD |
| 90 | ECUMA_CL_SWITCH_DOOR_DRDR |
| 91 | ECUMA_CL_SWITCH_DOOR_PSDR |
| 92 | ECUMA_CL_SWITCH_BONNET |
| 93 | ECUMA_CL_SWITCH_BOOTLID |
| 94 | ECUMA_CL_SWITCH_REARSCREEN |
| 95 | ECUMA_CL_SWITCH_BOOTLID_PRECATCH |
| 96 | ECUMA_CL_PIA_LOCK_AT_TIMEOUT |
| 97 | ECUMA_CL_RELAYSTUCK_FAULT |
| 112 | ECUMA_PW_OP_DRD_LIN |
| 113 | ECUMA_PW_OP_PSD_LIN |
| 114 | ECUMA_PW_OP_DRDR_LIN |
| 115 | ECUMA_PW_OP_PSDR_LIN |
| 116 | ECUMA_PW_OP_RSCR_CAB_LIN |
| 117 | ECUMA_PW_OP_DRD_DISC |
| 118 | ECUMA_PW_OP_PSD_DISC |
| 119 | ECUMA_PW_RELAYSTUCK_FAULT |
| 128 | ECUMA_CE_CAP_DRD |
| 129 | ECUMA_CE_CAP_PSD |
| 130 | ECUMA_CE_CAP_DRDR |
| 131 | ECUMA_CE_CAP_PSDR |
| 132 | ECUMA_CE_PULL_DRD |
| 133 | ECUMA_CE_PULL_PSD |
| 134 | ECUMA_CE_PULL_DRDR |
| 135 | ECUMA_CE_PULL_PSDR |
| 144 | ECUMA_ECL_ACTIVE |
| 145 | ECUMA_TR_ACTIVE |
| 146 | ECUMA_RC_ACTIVE |
| 147 | ECUMA_EXMI_ACTIVE |
| 148 | ECUMA_PF_SZL_ESCA_ACTIVE |
| 149 | ECUMA_ESCA_RELAYSTUCK_FAULT |
| 150 | ECUMA_WW_PUMPDRIVER_FAULT |
| 151 | ECUMA_PF_SUNBLIND_RELAYSTUCK_FAULT |
| 224 | ECUMA_INT_WKPSEL0 |
| 225 | ECUMA_INT_WKPSEL1 |
| 226 | ECUMA_INT_WKPSEL2 |
| 227 | ECUMA_INT_WKPSEL3 |
| 228 | ECUMA_INT_WKPSEL4 |
| 229 | ECUMA_INT_WKPSEL5 |
| 230 | ECUMA_INT_WKPSEL6 |
| 231 | ECUMA_INT_WKPSEL7 |
| 232 | ECUMA_INT_UNDERVOLTAGE |
| 233 | ECUMA_INT_INVALID_ISR |
| 240 | ECUMA_RESET_NVM_TIMEOUT |
| 241 | ECUMA_RESET_RESERVED1 |
| 242 | ECUMA_RESET_RESERVED2 |
| 243 | ECUMA_RESET_RESERVED3 |
| 244 | ECUMA_RESET_ILEGADR |
| 245 | ECUMA_RESET_CODETRAP |
| 246 | ECUMA_RESET_LVT |
| 247 | ECUMA_RESET_SW |
| 248 | ECUMA_RESET_CHKSTOP |
| 249 | ECUMA_RESET_COP |
| 250 | ECUMA_RESET_LOSSOFPLL |
| 251 | ECUMA_RESET_LOSSOFCLK |
| 252 | ECUMA_RESET_EXT |
| 253 | ECUMA_RESET_POWERON |
| 254 | ECUMA_RESET_UNKNOWN |
| 255 | ECUMA_INVALID |

### TAB_FH_THERMOMONITOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Thermo 90 aktiv |
| 0x02 | Thermo 100 aktiv |
| 0xFF | Ungültig |

### TAB_FH_DENORMIERUNGS_URSACHE_MAGNA

| WERT | TEXT |
| --- | --- |
| 0 | No error, normed state |
| 1 | Start Initializing |
| 2 | Init. bit deleted by diagnostic |
| 3 | Coding data failure |
| 4 | Hall shutdown during motor run |
| 5 | Wrong position with motor inactive |
| 6 | Wrong position with running motor |
| 7 | No position data after reset |
| 8 | 1 hall sensor failure |
| 9 | No init data after reset |
| 10 | Voltage on motor and relays not activa |
| 11 | Voltage on motor and relays not activa |
| 12 | no pulses from Hall A but pulses from Hall element B |
| 13 | no pulses from Hall B but pulses from Hall element A |
| 14 | Motor actuated; no pulses from Hall elements A+B |
| 15 | Hall pulses not plausible |
| 16 | Wrong motor direction |
| 17 | Wrong motor unit |
| 18 | Timeout Motor actuat |
| 19 | Invalid MRC Logical failure: the MRC is invalid |
| 20 | CPU Overload |
| 21 | start of manual init |
| 22 | Halls Not Ready Voltage Shut Down |
| 23 | Halls Not Ready Open Load |
| 24 | Halls Not Ready Short to ground |
| 25 | Halls Not Ready Short to ubatt |
| 26 | different Software version stored in NvRam |
| 27 | different vendor code stored in NvRam |
| 28 | signature Interference Occurred |
| 29 | No valid position CRC after reset |
| 30 | Hall counters A and B value different |
| 31 | Hall pulses and no motor actuation |
| 32 | FUSI SIF state error |
| 33 | Profile and norming erased by RTERunnable_SwcPwDriverMagna01_diag_diagJobWriteFhKennlinieLoeschen |
| 34 | error saving NVRam after motor stop |
| 255 | invalid value |
