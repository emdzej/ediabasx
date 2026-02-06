# bdc.prg

## General

|  |  |
| --- | --- |
| File | bdc.prg |
| Type | PRG |
| Jobs | 189 |
| Tables | 722 |
| Origin | BMW EI-640 Jens.Klingseisen |
| Revision | 22.094 |
| Author | BMW EI-640 JKlingseisen, LEAR EED AGalindo, ALTRAN EI-640 BRudo |
| ECU Comment | BDC R62 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Body Domain Controler |  |  |
| ORIGIN | string | BMW EI-640 Jens.Klingseisen |  |  |
| REVISION | string | 22.094 |  |  |
| AUTHOR | string | BMW EI-640 JKlingseisen, LEAR EED AGalindo, ALTRAN EI-640 BRudo |  |  |
| COMMENT | string | BDC R62 |  |  |
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

### IS_LESEN_TMS_LINKS

Fehlerspeicher des linken TMS auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### IS_LESEN_TMS_RECHTS

Fehlerspeicher des rechten TMS auslesen UDS: $22 ReadDataByIdentifier

_No arguments._

### IS_LOESCHEN_TMS

Fehlerspeicher des linken TMS loeschen UDS: $14 ClearDiagnosticInformation

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TAB_TMS_AUSWAHL TEXT |

### STATUS_AHL_POSITION_ERWEITERT

AHL-Position vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TAB_TMS_AUSWAHL TEXT |

### STATUS_BATTERIEVORSCHAEDIGUNGSHISTORIE

Der Job dient zum Auslesen des Historienspeichers für die Batterievorschädigunshistorie. JobHeaderFormat 0xD2DE BATTERIEVORSCHAEDIGUNGSHISTORIE_LESEN

_No arguments._

### STATUS_BETR_H_FUNKTIONEN

Betriebsstunden vom TMS auslesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | table TAB_TMS_AUSWAHL TEXT |

### STATUS_CAS_ANLIEFERZUSTAND

Dieser Job liefert den aktuellen Fortschritt des Rücksetzen nach STEUERN_ANLIEFERZUSTAND. JobHeaderFormat 0xDC7D STATUS_CAS_ANLIEFERZUSTAND

_No arguments._

### STATUS_CAS_FREQ_TYPE

Dieser Job dient zum Auslesen der Konfiguration des CAS bzgl. Schlüssel-Initialisierung für Frequenz und Transpondertyp JobHeaderFormat 0xDC79 CAS_FREQ_TYPE

_No arguments._

### STATUS_CAS_INIT_LOC_DATE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

_No arguments._

### STATUS_CAS_WUP

4-Byte FBD-Wakeup-Pattern lesen. JobHeaderFormat 0xDC78 CAS_WUP

_No arguments._

### STATUS_CA_BEDIENSTELLEN

Dieser Job dient zum Auslesen des Zustands aller im Fahrzeug verbauten CA-Bedienstellen. Dies sind alle diskreten Taster und Schalter (z.B. CA-Toggletaster), nicht jedoch über LIN/Subbus angebundene Komponenten (Tage Datenleitung). Hinweise zur Implementierung: 1. Die Gesamtanzahl der verbauten Klappen wird anhand der ZSG-Codierwerte ermittelt. 2. Die Results STAT_ART_X und STAT_ZUSTAND_X des Jobs werden dynamisch generiert anhand der ZSG-Codierwerte. 3. Die Sortierung erfolgt gemäß TAB_ZSG_ART_BEDIENSTELLE_CA aufsteigend von 0 ... 255.

_No arguments._

### STATUS_CODIERDATEN_TMS_BLOCK_LESEN

einzelnen Block TMS-Codierdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Blocknummer: 32xx Codierdaten TMS links 33xx Codierdaten TMS rechts 35xx Codierdaten TMS links und rechts, in diesem Fall optionale Seitenauswahl ueber Parameter TMS |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_CODIERDATEN_TMS_LESEN_KOMPLETT

komplette TMS-Codierdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_ECUMA_AWAKE

EcuMA-Awake-Status (Liste alles "RUN"- und "POST_RUN"-Requests und Einschlafverhinde  0x5102 _ECUMA_AWAKE

_No arguments._

### STATUS_ECUMA_HISTORIE

EcuMA-History-Ringspeicher mit Liste aller letzten Weck-Quellen, Weckhäufigkeit, Betriebssekundenzähler und letzter empfangenem km-Status  0x5100 _ECUMA_HISTORIE

_No arguments._

### STATUS_EGS_ISN

Verriegelungs-Status für EGS-ISN im CAS lesen (wird für Getriebe-EWS genutzt) JobHeaderFormat 0xDC76 EGS_ISN

_No arguments._

### STATUS_ELSV

Status ELSV UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_ELSV_STATISTIK

Status ELSV Statistikzaehler UDS: $22 (0xD087) ReadDataByIdentifier

_No arguments._

### STATUS_ELV

Dieser Job dient zum Auslesen des Status der Elektrischen Lenkradverriegelung (ELV). Hinweise: Es werden nur die im CAS gespeicherten Werte zurückgeliefert und damit auch keine Statusabfrage des ELV-SG durchgeführt. STATUS_ELV (0xDAC3)

_No arguments._

### STATUS_ELV_FEHLERSPEICHER

JobHeaderFormat (0xAA72)

_No arguments._

### STATUS_ELV_HISTORIE

Dieser Job dient zum Auslesen des Historiespeicher für Aktivierungen der elektrischen Lenkaäulenverriegelung (ELV). STATUS_ELV_HISTORIE (0xD09E)

_No arguments._

### STATUS_EM_FE_MODE

Auslesen der Aktivierungsliste für den Fe-Mode.  0x5106 _EM_FE_MODE

_No arguments._

### STATUS_EM_SPIELSCHUTZ

0x5107 _EM_SPIELSCHUTZ

_No arguments._

### STATUS_EWS

Liefert den aktuellen Status der EWS-SecretKeys ISNs und den Status bzgl. KeyID KeyPIN JobHeaderFormat 0xC000 STATUS_EWS

_No arguments._

### STATUS_EWS4_SK

Dieser Job dient zum (Gegen-)Lesen der Secretkeys / ISNs (vor einem anschließenden Verriegeln Kommando) JobHeaderFormat 0xC002 STATUS_EWS4_SK_CAS

_No arguments._

### STATUS_FAHRGESTELLNUMMER

Lesen der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

_No arguments._

### STATUS_FAHRPROFIL

(0xD0F2)

_No arguments._

### STATUS_FBD_EMPFAENGER

Dieser Job dient zum Auslesen des Status der LIN-FBD-Empfänger (1 bis max. 2 im CAS unterstützt). STATUS_FBD_EMPFAENGER (0xDAC9)

_No arguments._

### STATUS_FBD_TELEGRAMM

JobHeaderFormat 0xAC59 STATUS_FBD_TELEGRAMM

| Name | Type | Description |
| --- | --- | --- |
| FBD_EMPFAENGER_EMPFANGSMODUS | string | Das Argument enthält den Empfangsmodus, der für die nächsten 10 Sekunden aktiviert werden soll. Hinweise: - 0= FBD-Empfänger in Empfangsmodus zum Durchlassen aller Telegramme (WUP inaktiv, d.h. alle Tastenbetätigung IDG, THS und FFB - auch fremde WUP werden durchgelassen, nur über Low-Speed 5kbit). Anmerkung: Sollte eine Anforderung z.B. zur Umschaltung auf High-Speed durch CA erfolgen, so wird der normale CA-Ablauf gestartet und dieser Modus automatisch durch das CAS beendet. - 1= FBD-Empfänger in Empfangsmodus normal (WUP aktiv, d.h. nur bekannte Telegramme durchlassen) und FBD-Empfänger ist dauerhaft an - 2= FBD-Empfänger in Empfangsmodus normal (WUP aktiv) und zusätzlich beliebige Init-Telegramme von THS und FFB werden durchlassen - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FBD_EMPFAENGER_EMPFANGSMODUS |

### STATUS_FH_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F020,F021,F022,F023,F030,F031,F032,F033,F034,F036,F015,F016,I001,F056,F057,F045,I012,G011,G012,G030,G031,I015,F039,F052,F060,F046,F048,F049,M013,F054,F055,G001,G002,G005,G006,G007,G020,G038 |
| ELEMENT | string | FA:  Fenster Fahrerseite BF:  Fenster Beifahrerseite FAH: Fenster Fahrerseite hinten BFH: Fenster Beifahrerseite hinten |

### STATUS_FH_DENORMIERUNGS_LOGGER_LESEN

Liest die aufgezeichneten Daten des Denormierungsloggers. Nicht unterstütze Elemente müßen entfernt werden  STATUS_FH_DENORMIERUNGS_LOGGER_LESEN

_No arguments._

### STATUS_FH_MOTORSTOP_LOGGER_LESEN

Liest die aufgezeichneten Daten des Loggers für Abbruch Motorlauf Die letzten 10 Ereignisse werden für jeden Ort gespeichert.  STATUS_FH_MOTORSTOP_LOGGER_LESEN

_No arguments._

### STATUS_FH_REVERSIER_LOGGER_LESEN

Auslesen der Reversierlogger pro Scheibe. Nicht unterstütze Elemente müßen entfernt werden  STATUS_FH_REVERSIER_LOGGER_LESEN

_No arguments._

### STATUS_FH_SCHLIESSZEIT_HINTEN

Liest die Schliesszeit aus $22 60 0A          Liest die Kennline der Fahreseite hinten $22 60 0B          Liest die Kennline der Beifahreseite hinten

_No arguments._

### STATUS_FH_SCHLIESSZEIT_VORNE

Liest die Schliesszeit aus $22 60 08          Liest die Kennline der Fahreseite $22 60 09          Liest die Kennline der Beifahreseite

_No arguments._

### STATUS_FH_STATISTIKZAEHLER_LESEN

Lesen Statistikzähler Fensterheber  STATUS_FH_STATISTIKZAEHLER_LESEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL HEX format (0xXX) |

### STATUS_FH_THERMOMONITOR_AKTIV

STATUS_FH_THERMOMONITOR_AKTIV

_No arguments._

### STATUS_HERSTELLERDATEN_TMS_LESEN

TMS-Herstellerdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_HISTORIE_30F_ABSCHALTUNG

(0xDC5D)

_No arguments._

### STATUS_HISTORIE_KL30B_AKTIV

Der Job dient zum Auslesen des Historienspeichers für die Überwachung der KL30B Aktivität des FEM. Der Historienspeicher gibt u.a. Abschaltverhinderer sowie relevante Umweltbedingungen wieder. Hinweise: - Triggerbedingung für einen Eintrag im Historienspeicher ist das Setzen des Ereignisfehlerspeicher KL30B aktiv: Startfähigkeit gefährdet (d.h. sobald der Status des Ereignisfehlerspeicher von nicht vorhanden auf vorhanden wechselt und der DTC in den Fehlerspeicher eingetragen wird, dann wird auch der Historienspeichereintrag erstellt). Die Werte für Relativzeit und KM-Stand eines Historieneintrags müssen dabei exakt den Werten der Umweltbedingungen des DTCs entsprechen. - Der Job gibt für jeden Historieneintrag einen eigenen EDIABAS-Ergebnissatz zurück. - Anzahl Einträge: 5 - Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste.  0xDC5E HISTORIE_KL30B_AKTIV

_No arguments._

### STATUS_HISTORIE_ZUENDUNG_EIN

Der Job dient zum Auslesen des Historienspeichers für die Überwachung der KL15 Aktivität. Der Historienspeicher gibt u.a. Abschaltverhinderer sowie relevante Umweltbedingungen wieder. Hinweise: - Triggerbedingung für einen Eintrag im Historienspeicher ist das Setzen des Ereignisfehlerspeicher 'Zündung ein: Startfähigkeit gefährdet' (d.h. sobald der Status des Ereignisfehlerspeicher von 'nicht vorhanden' auf 'vorhanden' wechselt - Der Job gibt für jeden Historieneintrag einen eigenen EDIABAS-Ergebnissatz zurück. - Anzahl Einträge: 5 - Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. (0xDC5F)

_No arguments._

### STATUS_HW_OPTIONEN_CODIERUNG

Codierung der HW-Varianten

_No arguments._

### STATUS_KEYINFO_DATEN

Auslesen der KeyInfo-Daten Alle Pages werden auf einmal ausgelesen JobHeaderFormat 0xDC86 STATUS_KEYINFO_DATEN

_No arguments._

### STATUS_KILOMETERSTAND

Dieser Job dient zum Auslesen des im CAS gespeicherten aktuellen Kilometerstands. Hinweise: Der Kilometerstand wird im CAS als redundante Datenablage zum Kombi gespeichert. STATUS_MILEAGE (0x1700)

_No arguments._

### STATUS_KL15_KURZSCHLUSS_WIEDERAKTIVIERUNG_COUNTER

Moegliche Anzahl der Wiederaktivierungen durch Klemme 15 Ein fuer jeden Lampenausgang. STATUS_KL15_KURZSCHLUSS_WIEDERAKTIVIERUNG_COUNTER (0x4516)

_No arguments._

### STATUS_KLEMMENSPANNUNG_LESEN

Status ELSV Spannung UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_KLEMMEN_HISTORIE

Der Job dient zum Auslesen des Klemmen-Historiespeichers des CAS. Der Historienspeicher gibt den eingenommenen Klemmenzustand, das Transitions-Ereignis (d.h. Anforderer bzw. Ursache für einen Klemmenwechsel) sowie den Zeitpunkt des Klemmenwechsels wieder. JobHeaderFormat 0xDC5C STATUS_KLEMMEN_HISTORIE

_No arguments._

### STATUS_KURVENLICHT_SCHRITTVERLUSTE

Schrittverluststatistik aus TMS lesen UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_KURZSCHLUSSABSCHALTUNG

Kurzschluss-Status aller angeschlossenen Lampenausgänge STATUS_KURZSCHLUSSABSCHALTUNG (0x4503)

_No arguments._

### STATUS_KURZSCHLUSSCOUNTER_ABS

Kurzschluss-Counter des angegebenen Leuchtenausgangs STATUS_KURZSCHLUSSCOUNTER_ABS (0x4514)

_No arguments._

### STATUS_LED_AUSGAENGE_TMS

Status der LED-Ausgaenge vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_LED_DERATING_STROEME_TMS

LED-Sollstroeme unter Beruecksichtigung des Deratings fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_LED_PWM_TMS

PWM-Tastverhaeltnisse fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_LED_SOLL_STROEME_TMS

LED-Sollstroeme fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_LED_SPITZEN_STROEME_TMS

LED-Spitzenstroeme fuer jeden LED-Kanal vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_LEUCHTENAUSGANG_DIGITAL

Digitaler Status (ein / aus) aller angeschlossenen Leuchtenausgänge STATUS_LEUCHTENAUSGANG_DIGITAL (0x4500)

_No arguments._

### STATUS_LEUCHTEN_BETRIEBSDAUER

Betriebsminuten der Leuchten pro Ausgang (Solange die angeschlossene Lampe IO ist und angesteuert wird, muss die Betriebsdauer gemessen werden) STATUS_LEUCHTEN_BETRIEBSDAUER (0x4505)

_No arguments._

### STATUS_LICHT_UEBERSPANNUNGSCOUNTER

Status des Licht Überspannungscounters auslesen (Bei jeder Aktivierung des Licht Überspannungsschutzes wird der Counter inkrementiert) STATUS_LICHT_UEBERSPANNUNGSCOUNTER (0x4508)

_No arguments._

### STATUS_LIMP_HOME_ANALYSE

Status der LimpHomeAnalyse STATUS_LIMP_HOME_ANALYSE (0x4517)

_No arguments._

### STATUS_LWR_POSITION

LWR-Position vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_RCS_BATTERIESTATUS

JobHeaderFormat (0xDACB)

_No arguments._

### STATUS_RDU_RDL_INFO

Dieser Job dient dazu die Daten aller im Infospeicher des CAS abgespeicherten RDU- und RDL-Anforderungen auszulesen. Hinweise: RDU/RDL-Anforderungen  sowohl erfolgreiche als auch fehlgeschlagene - werden als einzelne Einträge im Infospeicher des CAS abgelegt. JobHeaderFormat STATUS_RDU_RDL_INFO

_No arguments._

### STATUS_SCHEINWERFERHERSTELLERDATEN_LESEN

Scheinwerferherstellerdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_SCHLUESSELDATEN

Den Status eines Schlüssel laut Transpondertabelle ausgeben. Anmerkung: Die Informationen sind unabhängig von einem evtl. gerade vorhandenen Transponder in der Ringspule bzw. einem erkannten ID-Geber. JobHeaderFormat 0xAC5A STATUS_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument enthält die Kennzahl für die Auswahl des zu lesenden Schlüssels, Telestart-Handsender oder der Fond-Fernbedienung. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION WERT |

### STATUS_SCHLUESSELSUCHEN_HISTORIE

Der Job dient zum Auslesen des Historienspeichers für Schlüsselsuchen. Hinweise: - Der Job gibt für jeden Historieneintrag einen eigenen EDIABAS-Ergebnissatz zurück. - Anzahl der Einträge: 20 - Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. (0xD2DD)

_No arguments._

### STATUS_SCHLUESSEL_TRSP

Liefert den Status des momentan in der Ringspule befindlichen Schlüssels. Der Job liefert den Status des zuletzt gefundenen Transponders in der Ringspule. Die Daten sind max. 300 ms alt und entprellt (bei dauerhaft vorhandenem Transponder, keine flackernden Results). Ist der Schlüssel unbekannt und bereits gelocked, so werden nur die immer lesbaren Informationen ausgegeben. JobHeaderFormat 0xDC7E STATUS_SCHLUESSEL_TRSP

_No arguments._

### STATUS_SENSE_LESEN

Auslesen der Sensewertes eines spezifischen Lampenausgangs STATUS_SENSE_LESEN (0xF100)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Auswahl des Ausgangs Werttabelle Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |

### STATUS_SERVICESCHLUESSELDATEN_AKTUALISIERUNGSSTATUSBYTES

0xF001 STATUS_SERVICESCHLUESSELDATEN_AKTUALISIERUNGSSTATUSBYTES

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument zur Auswahl des Schlüssels (Position) gemäß Transponder-Tabelle. 0-9 = Position Transponder-Tabelle |

### STATUS_SPANNUNGEN_TMS

Vom TMS intern gemessene Spannungen auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_STANDVERBRAUCHER_AKTUELL

Der Job dient zum Auslesen des aktuellen Status, ob aktive KL30B -Nachlaufzeitverlängerungsanforderungen durch Standverbraucher im aktuellen Ruhezyklus (Beginn: KL15 aus Ende: Motorstart) vorliegen. Hinweise: Aus Speicherplatz gründen wer STATUS_STANDVERBRAUCHER_AKTUELL (0xDC81)

_No arguments._

### STATUS_STANDVERBRAUCHER_HISTORIE

Der Job dient zum Auslesen des Historienspeichers für KL30B-Nachlaufzeitverlängerungsanforderungen durch Standverbraucher. JobHeaderFormat 0xDC82 STATUS_STANDVERBRAUCHER_HISTORIE

_No arguments._

### STATUS_SW_COMPONENTS

Ausgabe der SW-Komponenten mit Versionsinfo soweit unterstützt.  0x5110 _SW_COMPONENTS

_No arguments._

### STATUS_TEMPERATURSENSOREN_TMS

Auslesen des internen und externen Temperatursensors vom TMS UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_TEMPERATURVERTEILUNG_TMS

Temperaturverteilung aus TMS lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_TMS_EINLERNVORGANG

Status des LED-Einlernvorgangs vom TMS auslesen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_TMS_IDENTDATEN_LESEN

TMS-Identifikationsdaten lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_TMS_ID_LESEN

TMS-ID auslesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_TMS_SPEICHER_LESEN

TMS2-Speicher lesen UDS: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| ADRESSE | unsigned long | Adresse von der gelesen werden soll |
| ANZAHL | unsigned long | Anzahl von Bytes die gelesen werden sollen |

### STATUS_VERTEILUNG_WINKEL_ANSTEUERUNG_TMS

Verteilung der Winkelansteuerung aus TMS lesen UDS: $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STATUS_ZV_AKTUELL

Auslesen des aktuellen Status des Zentralverriegelungsmasters. STATUS_ZV (0xDAC7)

_No arguments._

### STATUS_ZV_BEDIENSTELLEN

Dieser Job dient zum Auslesen des Zustands aller im Fahrzeug verbauten ZV-Bedienstellen. Dies sind alle diskreten Taster und Schalter (z.B. Centerlocktaster), nicht jedoch über LIN/Subbus angebundene Komponenten (IDG). Hinweise zur Implementierung: 1. Die Gesamtanzahl der verbauten Klappen wird anhand der ZSG-Codierwerte ermittelt. 2. Die Results STAT_ART_X und STAT_ZUSTAND_X des Jobs werden dynamisch generiert anhand der ZSG-Codierwerte. 3. Die Sortierung erfolgt gemäß TAB_ZSG_ART_BEDIENSTELLE_ZV aufsteigend von 0 ... 255.

_No arguments._

### STATUS_ZV_HISTORIE

Historienspeicher für Zustandsänderungen und Aktionen des Zentralverriegelungs-Masters. JobHeaderFormat 0xDAC6 ZV_HISTORIE

_No arguments._

### STATUS_ZV_KLAPPEN

0xDA4A STATUS_ZV_KLAPPEN

_No arguments._

### STATUS_ZV_KONTAKTE

0xDA48 ZV_KONTAKTE

_No arguments._

### STEUERGERAETE_RESET_FAST

STEUERGERAETE_RESET_FAST

_No arguments._

### STEUERN_AHL_POSITION_ERWEITERT

AHL-Positionssteuerung UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| POS_KURVENLICHT | long | Winkel fuer Kurvenlicht je nach Scheinwerfer max. von -170 bis 170 entspricht -17 Grad bis 17 Grad |
| GESCHW_KURVENLICHT | unsigned char | Geschwindigkeit fuer Kurvenlicht je nach Scheinwerfer max. von 0 bis 31 |

### STEUERN_AHL_REFERENZLAUF_ERWEITERT

AHL-Referenzlauf aktivieren UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| TYPE | string | Tabelle TAB_TMS_REF_TYPE TEXT |

### STEUERN_BETR_H_FUNKTIONEN

Betriebsstunden vom ausgewaehlten TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_CAS_ANLIEFERZUSTAND

Versetzt das CAS in den Anlieferzustand (Montage-Modi, Codierung, VIN, Tansponder-Tabelle, EWS4_CLIENT_SK, ...) Falls Rücksetzen unzulässig: ERROR_ECU_CONDITIONS_NOT_CORRECT. Anmerkung: Nach dem Rücksetzen müssen alle im verriegelten Zustand geschützten W JobHeaderFormat 0xAC50 STEUERN_ANLIEFERZUSTAND

| Name | Type | Description |
| --- | --- | --- |
| EWS4_TRSP_SK | string | Das (optionale) Argument enthält den geheimen EWS4_TRSP_SK. Die Jobdauer ist immer die gleiche (kleiner 5 Sekunden). Hinweise: - Wenn das CAS nicht verriegelt ist, so kann der Aufruf auch ohne Parameter erfolgen. - 16-Byte hex-Wert als String in dem folgenden Format: '0x01,0x02,0x03' oder '01,02,03' oder '0x01 0x02 0x03' oder '01 02 03'. |

### STEUERN_CAS_FREQ_TYPE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat 0xDC79 CAS_FREQ_TYPE

| Name | Type | Description |
| --- | --- | --- |
| INIT_FREQ | unsigned char | Das Argument enthält die Kennzahl für Schlüssel-Frequenz. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FREQ |
| TRSP_TYPE | unsigned char | Das Argument (optional) enthält die Art des verwendeten Transponder. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_TRSP_TYPE - Wird dieses Argument nicht übergeben, so wird mit dem Wert 2 (=HTPro) gearbeitet. |

### STEUERN_CAS_INIT_LOC_DATE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

| Name | Type | Description |
| --- | --- | --- |
| INIT_DAY | unsigned char | Argument Tag CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-31. |
| INIT_MONTH | unsigned char | Argument Monat CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-12. |
| INIT_YEAR | unsigned int | Argument Jahr CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 2000-9999. |
| INIT_LOCATION | string | Das Argument enthält den Ort der Schlüssel-Initialisierung. Hinweise: - Format: 4 Zeichen ASCII - Beispiele: 0240 = Werk 2.4, 0220 = Werk 2.2, 0100 = Werk München, EDGF = Ersatzteilplatz Dingolfing |
| INIT_STATION | string | Das Argument enthält die BMW-spezifische Kennung der Anlernstation (4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit, ...). Hinweise: - Format: 4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit - Beispiele: DC22, DA21, DN01, ... |

### STEUERN_CAS_WUP

4-Byte FBD-Wakeup-Pattern schreiben. JobHeaderFormat 0xDC78 CAS_WUP

| Name | Type | Description |
| --- | --- | --- |
| FBD_WAKEUP | string | Das Argument enthält das zu schreibende FBD-Wakeup-Pattern. Hinweise: - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01,0x23,0x45,0x67' der Schluessel. |

### STEUERN_CODIERDATEN_TMS_BLOCK_SCHREIBEN

einzelnen Block TMS-Codierdaten schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN | string | Blocknummer und Codierdaten: 32xx Codierdaten TMS links 33xx Codierdaten TMS rechts 35xx Codierdaten TMS links und rechts, in diesem Fall optionale Seitenauswahl ueber Parameter TMS |
| TMS | string | table TAB_TMS_AUSWAHL TEXT |

### STEUERN_CODIERDATEN_TMS_SCHREIBEN

TMS-Codierdaten aus Datei schreiben Datei muss Blocknummer und Codierdaten enthalten: 32xx Codierdaten TMS links 33xx Codierdaten TMS rechts 35xx Codierdaten TMS links und rechts UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Datei mit Codierdaten letztes Zeichen muss ein LF sein |

### STEUERN_ECUMA_HISTORIE

Clear the Wakeup history memory (EcuMA-History-Ringspeicher).  0x5100 _ECUMA_HISTORIE

_No arguments._

### STEUERN_EGS_ISN

EGS-ISN im CAS setzen (wird für Getriebe-EWS genutzt) JobHeaderFormat 0xDC76 EGS_ISN

| Name | Type | Description |
| --- | --- | --- |
| EGS_ISN | string | Das Argument enthält die zu schreibende EGS-ISN. Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01, 0x23, 0x45, 0x67'. |

### STEUERN_ELSV_DENORMIEREN

ELSV_Denormierung_START UDS: $31 01 StartRoutine

_No arguments._

### STEUERN_ELSV_NORMIERUNG

ELSV_Normierung_start UDS: $31 01 StartRoutine UDS: $31 02 StopRoutine UDS: $31 03 RequestRoutineResults

| Name | Type | Description |
| --- | --- | --- |
| STEUERPARAMETER | string | Normierungs-Subfunktion 'STR' = Start 'STRP' = Stop 'RRR' = ReadRoutineResults |

### STEUERN_ELSV_RESET_ZAEHLER

Reset ELSV Zähler UDS: $31 01 StartRoutine

| Name | Type | Description |
| --- | --- | --- |
| AKTION | char | Normierungsaktion aus Tabelle TAB_ELSV_RESET_ZAEHLER 0x00 = axial eingefahren 0x01 = axial ausgefahren 0x02 = vertikal oben 0x03 = vertikal unten 0x04 = axial beide 0x05 = vertikal beide 0x06 = alle Bloecke 0x07 = alle Statistikzaehler 0x08 = Bloecke und Statistik |

### STEUERN_EM_FE_MODE

Schreiben der Aktivierungsliste für den Fe-Mode. Die FeTraFla ID (hex) kann über die Spalte "WERT" in der Tabelle TAB_FeTraFla_ID ausgewählt werden Danach muss das Argument "WERT" durch den entsprechenden FE_MODE (0 oder 1) ersetzt werden

| Name | Type | Description |
| --- | --- | --- |
| FE_MODE | unsigned char | FE_MODE_INACTIVE = 0x00 FE_MODE_ACTIVE = 0x01 |
| ARGUMENT_FETRAFLA_ID_1 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_2 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_3 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_4 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_5 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |

### STEUERN_EWS4

Dieser Job dient zum Setzen der Secretkeys und zum anschließenden Verriegeln. JobHeaderFormat 0xC001 STEUERN_EWS4_CAS

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Das Argument dient zur Auswahl der auszuführenden Aktion. Tabelle TAB_STEUERN_EWS4_MODE Hinweise: - 'WRITE_DMEDDE_SK' SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE soll geschrieben werden. Argument ist der DMEDDE-SecretKey. - 'LOCK_DMEDDE_SK' EGS_ISN und EWS4_DMEDDE_SK soll verriegelt werden. Kein Argument. - 'WRITE_TRSP_SK' SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll geschrieben werden. Argument ist der TRSP-SecretKey. - 'LOCK_TRSP_SK' SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll verriegelt werden. Kein Argument. - 'LOCK_EWS4' SecretKeys der EWS4-Clients zur Anbindung der Transponder-Schlüssel und SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE sollen beide verriegelt werden. Argument DATA enthält 0x00. - 'UNLOCK_DMEDDE_SK' NUR ENTWICKLUNG! Argument DATA muss EWS4_DMEDDE_SK enthalten, der bereits im CAS gespeichert ist! - 'UNLOCK_TRSP_SK' NUR ENTWICKLUNG! Argument DATA muss TRSP_SK  enthalten, der bereits im CAS gespeichert ist! - 'WRITE_E5_KEY'EWS5-Key Satz, Argument DATEN muß E5_KEY enthalten (Modus = 0x11) |
| DATA | string | SDas Argument enthält den zu schreibenden SecretKey - 16-Byte Daten (SecretKey), falls MODE = WRITE_DMEDDE_SK/WRITE_TRSP_SK oder UNLOCK_DMEDDE_SK/UNLOCK_TRSP_SK - 8-Byte Daten (SecretKey), falls MODE = WRITE_E5_KEY - Keine Daten nötig, falls MODE = LOCK_TRSP_SK/LOCK_DMEDDE_SK/LOCK_EWS4 - Folgende Formate müssen unterstützt werden: "01 23 45 67 89 AB CD EF 01 23 45 67 89 AB CD EF" und "0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF,0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF". |

### STEUERN_FAHRGESTELLNUMMER

Schreiben der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

| Name | Type | Description |
| --- | --- | --- |
| FGNR17 | string | 17-stellige Fahrgestellnummer. Zum Zurücksetzenim Steuergerät wird das Argument '00000000000000000' verwendet. Hinweis: Der Argumentwert '00000000000000000' wird SGBD-intern in 0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF gewandelt, bevor er an das CAS gesendet wird. |

### STEUERN_FENSTERHEBER

STEUERN_FENSTERHEBER

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Auswahl siehe Tabelle TAB_FH_AUSWAHL |
| RICHTUNG | unsigned char | 0: Öffnen 1: Schliessen |
| ZEIT | unsigned int | Übergebener Wert (in ms) wird auf 100ms Schritte abgerundet |

### STEUERN_FENSTERHEBER_DENORMIEREN

STEUERN_FENSTERHEBER_DENORMIEREN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL |

### STEUERN_FENSTERHEBER_KENNLINIE_LOESCHEN

STEUERN_FENSTERHEBER_KENNLINIE_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL |

### STEUERN_FH_DENORMIERUNGS_LOGGER_LOESCHEN

Löscht den Denormierlogger STEUERN_FH_DENORMIERUNGS_LOGGER_LOESCHEN (0x6049)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FH_MOTORSTOP_LOGGER_LOESCHEN

Löscht den Logger für Abbruch Motorlauf. Der DID muss aus dem SG-Spezifischen Bereich kommen. FH_MOTORSTOP_LOGGER_LOESCHEN (0x6045)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FH_REVERSIER_LOGGER_LOESCHEN

Löscht den Reversierlogger FH_REVERSIER_LOGGER_LOESCHEN (0x6047)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FH_THERMOMONITOR_AKTIV

STEUERN_FH_THERMOMONITOR_AKTIV

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL HEX format (0xXX) |
| AKTION | string | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle: Zuordnung siehe Tabelle TAB_THERMOMONITOR_SETZEN |

### STEUERN_HERSTELLERDATEN_TMS_SCHREIBEN

TMS-Herstellerdaten schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| HERSTELLERDATEN_TMS | string | TMS-Herstellerdaten |

### STEUERN_HW_OPTIONEN_CODIERUNG

Codierung der HW-Varianten

| Name | Type | Description |
| --- | --- | --- |
| HW_OPTION_BODY_PW_REAR | unsigned char | Bestückoption BODY_PW_REAR |
| HW_OPTION_BODY_ECL_STEERINGCOLUMNLOCK | unsigned char | Bestückoption BODY_ECL_STEERINGCOLUMNLOCK |
| HW_OPTION_BODY_CA_COMFORTENTRY | unsigned char | Bestückoption BODY_CA_COMFORTENTRY |
| HW_OPTION_BODY_CL_SECURE | unsigned char | Bestückoption BODY_CL_SECURE |
| HW_OPTION_BODY_LC_FOGLIGHT_SIDEMARK | unsigned char | Bestückoption BODY_LC_FOGLIGHT_SIDEMARK |
| HW_OPTION_BODY_LC_XENON_FLAP | unsigned char | Bestückoption BODY_LC_XENON_FLAP |
| HW_OPTION_BODY_LC_WELCOME | unsigned char | Bestückoption BODY_LC_WELCOME |
| HW_OPTION_BODY_WW_FRONT | unsigned char | Bestückoption BODY_WW_FRONT |
| HW_OPTION_BODY_WW_REARWIPER | unsigned char | Bestückoption BODY_WW_REARWIPER |
| HW_OPTION_BODY_WW_SRA | unsigned char | Bestückoption BODY_WW_SRA |
| HW_OPTION_BODY_HC_MIRRORHEATING | unsigned char | Bestückoption BODY_HC_MIRRORHEATING |
| HW_OPTION_BODY_LC_WBL_BLSH | unsigned char | Bestückoption BODY_LC_WBL_BLSH |
| HW_OPTION_BODY_PF_SUNBLIND | unsigned char | Bestückoption BODY_PF_SUNBLIND |
| HW_OPTION_BODY_PF_LIN_IJ | unsigned char | Bestückoption BODY_PF_LIN_IJ |
| HW_OPTION_BODY_TC_TERM30FREAR | unsigned char | Bestückoption BODY_TC_TERM30FREAR |
| HW_OPTION_BODY_WW_REARWIPER_2 | unsigned char | Bestückoption BODY_WW_REARWIPER_2 |
| HW_OPTION_BODY_AC_PUMPADD_VALVE2 | unsigned char | Bestückoption BODY_AC_PUMPADD_VALVE2 |
| HW_OPTION_BODY_LC_LWR | unsigned char | Bestückoption BODY_LC_LWR |
| HW_OPTION_BODY_LC_CORONA | unsigned char | Bestückoption BODY_LC_CORONA |
| HW_OPTION_BODY_CA_TAGE_INPUT | unsigned char | Bestückoption BODY_CA_TAGE_INPUT |

### STEUERN_INIT_KURZSCHLUSSCOUNTER_ABS

Der Job dient zum Rücksetzen der Kurzschlusscounter. _INIT_KURZSCHLUSSCOUNTER_ABS (0x4513)

_No arguments._

### STEUERN_KEYINFO_DATEN_UPDATE

Ansteuerng eines Updates der KeyInfo-Daten

| Name | Type | Description |
| --- | --- | --- |
| UPDATE_PART | unsigned char | Auswahl welche Page oder Pages upgedatet werden sollen default alle 0x01 - ZV (Index 0000) 0x02 - Kodierung (Index 0001) 0x04 - Reichweite (Index 0010) 0x07 - Reifendruck (Index 0011) und Reifendruck Zeit (Index 0100) 0x80 - alle |

### STEUERN_KL30F

JobHeaderFormat 0xAC5C STEUERN_KL30F

| Name | Type | Description |
| --- | --- | --- |
| KL30F | unsigned char | Das Argument gibt an in welchen Zustand die KL30F geschaltet werden soll. 0 = KL30F aus 1 = KL30F ein |

### STEUERN_KLEMMEN

Ändert den aktuellen Klemmen-Zustand im CAS. Auch Ausschalten des Motors möglich! Nur im Werkstatt- oder Fertigungsmodus. JobHeaderFormat 0x1001 STEUERN_KLEMMEN

| Name | Type | Description |
| --- | --- | --- |
| CAS_KLEMMEN_STATUS_NEU | string | Das Argument gibt an in welchen Klemmenzustand geschaltet werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KLEMMENSTATUS_ARG TEXT - KL30F_EIN = Nur KL30F Ein, Alle anderen Klemmen aus - KL30B_EIN = KL30B Ein - KL30B_EIN_VERK = KL30B Ein mit verkürzter Nachlaufzeit von 15 sek - KLR_EIN = KLR Ein - KL15_EIN = KL15 Ein |

### STEUERN_KURVENLICHT_SCHRITTVERLUSTE_LOESCHEN

Schrittverluststatistik im TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_LED_AUSGAENGE_TMS

LED-Ausgaenge vom TMS ansteuern UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| LED | string | Tabelle TAB_TMS_LED_FUNCTIONS TEXT |

### STEUERN_LEUCHTENAUSGANG_DIGITAL

Setzen des Leuchtenausgang auf vorgegebenen Wert Mögliche Elemente siehe Tabelle TAB_LEUCHTEN_AUSGANG STEUERN_LEUCHTENAUSGANG_DIGITAL (0x4501)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Mögliche Elemente siehe Tabelle Werttabelle Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |
| AKTION | unsigned char | 0     = Leuchte aus, shortTermAdjustment 1     = Leuchte ein, shortTermAdjustment 0x40 = returnControlToECU 0x80 = freezeCurrentState |

### STEUERN_LIN_QUERY

0x1009 STEUERN_LIN_QUERY

| Name | Type | Description |
| --- | --- | --- |
| VERBAUORT_ID | unsigned int | Auswahl siehe Tabelle VerbauortTabelle |
| LEN_UDS_REQUEST_LINSLAVE | unsigned int | Länge des UDS-Anfrage-Telegramms an den LIN-Slave |
| UDS_REQUEST_LINSLAVE | binary | Anfragetelegramm an LIN-Slave Folgende Übergabe-Formate müssen unterstützt werden: '0x01,0x02,0x03...' oder '01,02,03...' oder '0x01 0x02 0x03...' oder '01 02 03...' |

### STEUERN_LWR_POSITION

LWR-Positionssteuerung UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| POS_LWR | long | Winkel fuer LWR je nach Scheinwerfer max. von 0 bis 1000 entspricht 0 Grad bis 10 Grad |
| GESCHW_LWR | unsigned char | Geschwindigkeit fuer LWR je nach Scheinwerfer max. von 0 bis 7 |

### STEUERN_LWR_REFERENZLAUF

LWR-Referenzlauf fuer ausgewaehltes TMS aktivieren UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_PIA_NR

Dieser Job dient zum Umdefinieren der PIA-Nummer eines Schlüssels in der CAS Transpondertabelle. STEUERN_PIA_NR (0xDC5B)

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | string | Auswahl des Schlüssels in der Transponder-Tabelle. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITON. - Es sind nur die Werte 0 - 9 zulässig. Werttabelle Zugelassene Werte siehe Tabelle TAB_CAS_SCHLUESSEL_POSITION |
| PIA_NR | string | Die zu setzende PIA-Nummer. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_PIA_NUMMER. Werttabelle Zugelassene Werte siehe Tabelle TAB_CAS_PIA_NUMMER |

### STEUERN_RCS_BATTERIESTATUS

Rücksetzen des gespeicherten Batteriestatus für den angegebenen ID-Geber oder Telestart-Handsender. Es wird das entsprechende Batterie-Status-Byte auf den Wert 0b11111111 = Anlieferzustand (ungültig) gesetzt. STEUERN_RCS_BATTERIESTATUS (0xDACB)

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Position des IDG/THS für den der Batteriestatus zurückgesetzt werden soll. siehe Tabelle TAB_CAS_SCHLUESSEL_POSITION |

### STEUERN_RESET_BETRIEBSDAUER

Alle erfassten Betriebsstunden loeschen 1: Betriebsstunden loeschen STEUERN_RESET_BETRIEBSDAUER (0x4506)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Element aus Lampenmapping. Übergeben werden kann sowohl die Ausgangs-ID (hex) als auch die Kurzbezeichnung des Ausgangs, (wie in ZSG_LC_35539 definiert), für den die Betriebsstundendauer zurückgesetzt werden soll. Bsp: 0x01 o. AL_L für Abblendlicht links 0x02 o. AL_R für Abblendlicht rechts ... 0x1C o. NSL_L für Nebelschlusslicht licht In Abst. Werttabelle Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |

### STEUERN_RESET_KURZSCHLUSSABSCHALTUNG

Der Job dient zum Rücksetzen der Kurzschlussabschaltung. Der Job kann nur ausgeführt werden, solange die codierte Anzahl an Rücksetzvorgängen noch nicht überschritten wurde STEUERN_RESET_KURZSCHLUSSABSCHALTUNG (0x4504)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Auswahl des Ausgangs Werttabelle Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |

### STEUERN_RESET_LICHT_UEBERSPANNUNGSCOUNTER

Der Job dient zum Rücksetzen des Überspannungsschutz-Zählers. STEUERN_RESET_LICHT_UEBERSPANNUNGSCOUNTER (0x4523)

_No arguments._

### STEUERN_SCHEINWERFERHERSTELLERDATEN_SCHREIBEN

Scheinwerferherstellerdaten schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| HERSTELLERDATEN_SCHEINWERFER | string | Scheinwerfer-Herstellerdaten |

### STEUERN_SCHLUESSELDATEN

Schlüssel-Daten in CAS schreiben (z.B. für Ersatz-Steuergerät oder Nacharbeit). Nur zulässig solange EWS4_TRSP_SK nicht verriegelt. JobHeaderFormat 0xDC80 STEUERN_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument zur Auswahl der Position in der Transponder-Tabelle an der der Schlüssel oder der Telestart-Handsender oder die Fond-Fernbedienung angelernt werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION |
| KEY_ID | string | Das Argument enthält die zu schreibende ID des Schlüssels. Hinweise: - 4-Byte hex-Wert. - Alle Werte ausser 'FF FF FF FF' - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01, 0x23, 0x45, 0x67'. |
| KEY_TYPE | unsigned char | Das Argument enthält den zu schreibenden Typ des Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KEYTYPE |
| KEY_DISABLED | unsigned char | Zum Schlüssel sperren/entsperren. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE - Es sind nur die Werte 0 und 1 zulässig. |

### STEUERN_SCHLUESSEL_INIT

Job zum Anstoßen der Schlüssel-Initialisierung. Nur zulässig, solange EWS4_TRSP_SK noch nicht verriegelt. JobHeaderFormat 0xAC52 STEUERN_SCHLUESSEL_INIT

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Argument zur Auswahl der Schlüssel-Position in der Transponder-Tabelle an der der Schlüssel oder der Telestarthandsender oder die FFB angelernt werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION |
| KEY_ID | string | Das Argument enthält die zu schreibende ID des Schlüssels. Hinweise: - 4-Byte hex-Wert. - Alle Werte ausser 'FF FF FF FF' - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01, 0x23, 0x45, 0x67'. |
| KEY_TYPE | unsigned char | Das Argument enthält den zu schreibenden Typ des Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KEYTYPE |
| INIT_MODE | unsigned char | Festlegen des Anlernmodus (optional). Hinweise: - 1= Normal anlernen und Schlüssel verriegeln (default). - 0= Normal anlernen, aber Schlüssel nicht verriegeln. |

### STEUERN_SCHLUESSEL_SPERRE

Job zum Sperren und wieder freigeben von Schlüsseln. Der Job ist nur zulässig, wenn sich gerade ein gültiger Schlüssel an der Transponder-Spule befindet. Der aktuelle Schlüssel an der Transponder-Spule kann nicht gesperrt oder freigegeben werden. JobHeaderFormat 0xDC73 STEUERN_SCHLUESSEL_SPERRE

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Auswahl des Schlüssels in der Transponder-Tabelle. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION |
| SCHL_SPERRE | unsigned char | Auswahl der Aktion Sperren oder Freigeben des gewählten Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE - Es sind nur die Werte 0 oder 1 zulässig. |
| SCHL_LOESCHEN | unsigned char | Das Argument dient zur Auswahl der Aktion Löschen eines zuvor gesperrten Schlüssels. 0 = Schlüssel nicht aus Tabelle löschen. 1 = Schlüssel aus Tabelle löschen (Voraussetzung: Schlüssel ist zuvor erfolgreich gesperrt worden). |

### STEUERN_TEMPERATURVERTEILUNG_LOESCHEN_TMS

Temperaturverteilung in TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_TMS_EEPROM_UPDATE

Update des TMS internen EEPROMs UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_TMS_EINLERNVORGANG_AKTIVIEREN

Einlernvorgang der LEDs wird gestartet UDS: $2F IoControlById

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_TMS_ID_SCHREIBEN

TMS-ID in ausgewaehltes TMS schreiben UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| TMS_ID | string | in das TMS zu schreibende TMS-ID |

### STEUERN_TMS_RESET

TMS Reset ausfuehren UDS: $11 EcuReset

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### STEUERN_TMS_SPEICHER_SCHREIBEN

TMS2-Speicher schreiben UDS: $3D WriteDataByAddress

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |
| ADRESSE | unsigned long | Adresse ab der geschrieben werden soll |
| DATEN | string | Daten die geschrieben werden sollen in hexadezimaler Form |

### STEUERN_VERTEILUNG_WINKEL_ANSTEUERUNG_LOESCHEN_TMS

Verteilung der Winkelansteuerung in TMS loeschen UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TMS | string | Tabelle TAB_TMS_AUSWAHL TEXT |

### _STATUS_ANTENNA_CALIBRATION

This job returns the calibration data for a given measurement  0xF040 _ANTENNA_CALIBRATION

| Name | Type | Description |
| --- | --- | --- |
| ANTENNA_NUMMER | unsigned char | Selection of antenna. See tabelle TAB_ANTENNA_POSITION |

### _STATUS_FH_FREIGABE_AKTIV

_STATUS_FH_FREIGABE_AKTIV

_No arguments._

### _STATUS_KURZHUB

_STATUS_KURZHUB

_No arguments._

### _STEUERN_FENSTERHEBER

_STEUERN_FENSTERHEBER

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Auswahl siehe Tabelle TAB_DEV_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | unsigned char | Wert 0 für FH ist die Geschlossen-Position |

### _STEUERN_FENSTERHEBER_EINLERNEN

_STEUERN_FENSTERHEBER_EINLERNEN

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL |
| MODUS | string | Einlernmodus |

### _STEUERN_FENSTERHEBER_PROZENT

_STEUERN_FENSTERHEBER_PROZENT

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL |
| POSITION | unsigned char | Angabe Position 0: geschlossen 100: offen |

### _STEUERN_FENSTERHEBER_SERVICEPOSITION

_STEUERN_FENSTERHEBER_SERVICEPOSITION

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Auswahl siehe Tabelle TAB_DEV_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | string | Auswahl siehe Tabelle TAB_DEV_FH_SHD_ESH_SERVICEPOSITION Angabe der Position |

### _STEUERN_FENSTERHEBER_SFK_1

_STEUERN_FENSTERHEBER_SFK_1

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL |
| FUNKTION | string | Welche Funktion soll angefahren werden Zuordnung siehe Tabelle TAB_DEV_FH_SHD_ESH_SFK1 |
| RICHTUNG | unsigned char | 0: Ursprungsposition anfahren 1: Position anfahren |

### _STEUERN_FH_FREIGABE_AKTIV

_STEUERN_FH_FREIGABE_AKTIV

| Name | Type | Description |
| --- | --- | --- |
| FREIGABE_GLOBAL | unsigned char | Parameter für das Setzen der generellen Freigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| FREIGABE_PANIK | unsigned char | Parameter für das Setzen des Panikmodus Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### _STEUERN_FH_STATISTIKZAEHLER_LOESCHEN

_STEUERN_FH_STATISTIKZAEHLER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL |

### _STEUERN_JTAG_LOCK

This JOB is used to temporary/permanently lock the JTag. positive response 6E,51,0B does not mean that jtag is locked! It only means that software will try to lock jtag For the permanent lock options, no password is needed

| Name | Type | Description |
| --- | --- | --- |
| LOCK_TYPE | string | Requested type of lock Tabelle TAB_JTAG_LOCK_TYPE JTag Lock Options: - 'TEMPORARY_LOCK' Temporary Lock. - 'PERMANENT_LOCK_FROM_UNLOCK' Permanent lock is requested from JTAG unlocked state. - 'PERMANENT_LOCK_FROM_LOCK' Temporary Lock. |
| PASSWORD | string | password must have at least ten 0-bits and at least ten 1-bits |

### _STEUERN_KURZHUB

_STEUERN_KURZHUB

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL |
| AKTION | unsigned char | 0: Kurzhubfunktion sperren 1: Kurzhub freischalten |

### _STEUERN_KURZSCHLUSSCOUNTER_ABS

Setzen der Kurzschlusscounter auf vorgegebenen Wert Mögliche Elemente siehe Tabelle TAB_LEUCHTEN_AUSGANG STEUERN_KURZSCHLUSSCOUNTER_ABS (0x4514)

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Mögliche Elemente siehe Tabelle Werttabelle Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |
| ABS_COUNTER_WERT | unsigned int | Angabe des absoluten Kurzschlusscounter von 0 ... 65535 In Abst. |

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

### ARG_0X1006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLOCK_NR | + | - | 0-n | - | unsigned char | - | TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt die Blocknummer des auszulesenen Blocks an. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR. |

### ARG_0X100A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_ID | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle VerbauortTabelle |

### ARG_0X4005_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UPDATE_MODUS | + | - | 0-n | - | unsigned char | - | TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS | 1.0 | 1.0 | 0.0 | - | - | Festlegen des Update-Modus (welche Daten werden vom CAS aus dem Fahrzeug aktualisiert und wie werden sie übertragen). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS. |

### ARG_0X4501_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_AUSGANG_LEUCHTEN | - | - | - | - | - | Mögliche Elemente siehe Tabelle Werttabelle Zugelassene Werte siehe Tabelle T_TAB_AUSGANG_LEUCHTEN |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = Leuchte aus 1 = Leuchte ein In Abst. |

### ARG_0X4506_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_AUSGANG_LEUCHTEN | 1.0 | 1.0 | 0.0 | - | - | Element aus Lampenmapping. Übergeben werden kann sowohl die Ausgangs-ID (hex) als auch die Kurzbezeichnung des Ausgangs, (wie in ZSG_LC_35539 definiert), für den die Betriebsstundendauer zurückgesetzt werden soll. Bsp: 0x01 o. AL_L für Abblendlicht links 0x02 o. AL_R für Abblendlicht rechts ... 0x1C o. NSL_L für Nebelschlusslicht licht Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN_RESET |

### ARG_0X4509_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12H_TIMER | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | 12h Timer |

### ARG_0X4523_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DUMMY | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Dummyargument um Fehlermeldung beim UDS-Check zu vermeinden! |

### ARG_0X4800_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_INNENLICHT | 1.0 | 1.0 | 0.0 | - | - | Element aus Tabelle TAB_INNENLICHT |
| AKTION | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Leuchtkraft in %, Wertebereich 0 - 100% |

### ARG_0X5002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DFZ_MODUS | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den zu setzenden Aktivierungsstatus für den DFZ Modus. 0 = DFZ Modus deaktivieren. 1 = DFZ Modus aktivieren. |

### ARG_0X5007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FBD_HF_KANAL | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den einzustellenden Sende- und Empfangs-HF-Kanal: Kanal 1 oder Kanal 2. 0 = Vorherigen Kanal beibehalten 1 = Kanal 1 einstellen 2 = Kanal 2 einstellen |
| FBD_DATENRATE_HF | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die einzustellende gewünschte HF-Datenrate ein. Hinweis: Für CA-Funk-Telegramme i.d.R. 19,2 kBit/s, für Standard-Funktelegramme i.d.R. 5 kBit/s, für Werkstattdiagnose werden beide Datenraten verwendet. 0 = Vorherige Datenrate beibehalten 1 = Datenrate auf 10,2 kBit/s einstellen 2 = Datenrate auf 5 kBit/s einstellen |
| FBD_SENDELEISTUNG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument legt die zu verwendende Sendeleistung des FBD-Transceivers fest. 0 = Vorherige Sendeleistung beibehalten 1 = Niedrige Sendeleistung verwenden 2 = Standard Sendeleistung verwenden 3 = Hohe Sendeleistung verwenden. |

### ARG_0X5108_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_OFF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | [0] = 1 (ON) / 0 (OFF) |
| ECUMA_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | - | - | ECUMA_ID |

### ARG_0X6000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X6004_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der generellen Freigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen des Panikmodus Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### ARG_0X6038_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X6039_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X603C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X603D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X6040_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_FH_AUSWAHL |

### ARG_0X6041_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X604A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X604B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X604C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0X604D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |

### ARG_0XA084_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | high | unsigned char | - | TAB_CAS_KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG_KOMPONENTE | 1.0 | 1.0 | 0.0 | - | - | Das Argument dient zur Auswahl der zu deaktiverenden Kurzschlussabschaltung |

### ARG_0XA17B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| MODUS | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNEN | - | - | - | - | - | Einlernmodus |

### ARG_0XA17E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert 0 für FH ist die Geschlossen-Position |

### ARG_0XA17F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| POSITION | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Angabe Position 0: geschlossen 100: offen |

### ARG_0XA180_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| FUNKTION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SFK1 | 1.0 | 1.0 | 0.0 | - | - | Welche Funktion soll angefahren werden |
| RICHTUNG | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ursprungsposition anfahren 1: Position anfahren |

### ARG_0XA181_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_TASTER_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_TASTER_RICHTUNG |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in 10 ms 0xFFFF: (max. 65s) |

### ARG_0XA182_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SERVICEPOSITION | 1.0 | 1.0 | 0.0 | - | - | Angabe der Position |

### ARG_0XA2DD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | - | - | - | - | - | Das Argument gibt an welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen |

### ARG_0XAA7C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_CAS_ELV_AKTION | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die durchzuführende ELV-Aktion. Hinweis: Bei Anstossen eines Herstelldaten-Updates werden nur die im CAS gespeicherten Werte aktualisiert. Das eigentliche Auslesen der Herstelldaten erfolgt über den Standardjob SENSOREN_IDENT. |

### ARG_0XAA95_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | high | unsigned char | - | TAB_CAS_KURZSCHLUSSABSCHALTUNG_KOMPONENTE | 1.0 | 1.0 | 0.0 | - | - | Das Argument dient zur Auswahl der zu deaktiverenden Kurzschlussabschaltung |

### ARG_0XAC51_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEAKTIVIERUNGSGESCHWINDIGKEIT | + | - | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 50.0 | Das Argument gibt an bei welcher Geschindigkeit die Funktion KL15-Abschaltung wieder aktiviert werden soll. Hinweise: - Mit Argument = 0 soll die KL-15-Abschaltung sofort wieder aktiviert werden können. - Mit Argument = 1 - 50 wird die KL15-Abschaltung unterdrücken bis nächstes Mal Fahrzeuggeschwindigkeit über xx Kmh. |

### ARG_0XAC53_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHL_NUM | + | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | - | - | Das Argument dient zur Auswahl des Schlüssels mit dem kommuniziert werden soll. Hinweise: - 0-19 = Schlüsselposition Transponder-Tabelle - 255 = Beliebiger Schlüssel |
| CA_ANTENNE | + | - | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | - | - | Das Argument dient zur Auswahl der CA-Antenne über welche die Kommunikation in Richtung Schlüssel stattfinden soll. Hinweise: - 1= IRV (Innenraum vorn)  - 2= IRH (Innenraum hinten) - 3= FT (Fahrertür/-seite) - 4= BFT (Beifahrertür/-seite) - 5= HA (Hut-Ablage) - 6= KRFT (Kofferraum Fahrerseite) - 7= KRBFT (Kofferraum Beifahrerseite) - 8= SF (Stoßfänger) - 9= IR (Innenraum IRV+IRH) |

### ARG_0XAC57_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_ZSG_ZV_AKTION_MASTER | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die auszuführende ZV-Aktion.  Mögliche Argumente sind:  0=keine Aktion 1=Entriegeln 2=Verriegeln 4=Selektiv Entriegeln Fahrertür 5=Selektiv Entriegeln Heckklappe (ab L7) 6=Selektiv Entriegeln Heckscheibe (ab L7) |

### ARG_0XAC5B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | unsigned char | - | TAB_TRSP_AKTIVIERUNG | 1.0 | 1.0 | 0.0 | - | - | Das (optionale) Argument dient dazu die Transponderspule zu aktivieren oder deaktivieren. 0 = Transponderspule für 10 Sekunden aktivieren (default) 1 = Transponderspule sofort deaktivieren Hinweis: Wird das Argument nicht angegeben, so wird der Defaultwert 0 verwendet. |

### ARG_0XAC5F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KANAL | + | - | 0-n | high | unsigned char | - | TAB_FBD_EMPFAENGER_KANAL | - | - | - | - | - | Das Argument gibt an welcher Sendekanal (max 3 Kanäle) aktiviert werden soll. Werte 8 bis 255 nicht zulässig.  Hinweis: Wird im LIN-Signal INIT_CHN_FBD_LIN übertragen. |
| SENDELEISTUNG | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an welcher Sendeleistung aktiviert werden soll.   Hinweis: Wird im LIN-Signal INIT_HF_RSSI_FBD_LIN übertragen. 0 - 254 Sendeleistung 255 Ungültig |

### ARG_0XD071_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: LED AUS 1: LED EIN |

### ARG_0XD072_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACHSE | 0-n | - | signed char | - | TAB_ELSV_ACHSE | 1.0 | 1.0 | 0.0 | - | - | 0: Keine Bewegung  1: Länge 2: Höhe |
| RICHTUNG | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: PLUS (ausfahren (hinten) / unten) 1: MINUS (einfahren (vorne) / oben) |

### ARG_0XD074_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Lenkradheizung aus 1-255: Lenkradheizung ein in Sekunden |

### ARG_0XD084_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LAENGE | % | - | unsigned char | - | - | 2.55 | 1.0 | 0.0 | 0.0 | 100.0 | 0 %: Vollständig eingefahren (bis Softstop) 100 %: Vollständig ausgefahren (bis Softstop) |
| HOEHE | % | - | unsigned char | - | - | 2.55 | 1.0 | 0.0 | 0.0 | 100.0 | 0 %: oberer Anschlag (Softstop)   100 %: unterer Anschlag (Softstop) |

### ARG_0XD08B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TLC_MITTEN_FREQUENZ | Hz | - | unsigned char | - | - | 10.0 | 1.0 | -373.0 | 43.7 | 56.3 | Zulässiger Wertebereich 43,7...56,3 Hz |

### ARG_0XD18C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD18F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Kurzhubfunktion sperren 1: Kurzhub freischalten |

### ARG_0XD1AB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| AKTION | 0-n | - | unsigned char | - | TAB_RELAIS_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Das Relais wird mit Schutzfunktion Timeout 4s direkt angesteuert. |
| RELAIS_NUMBER | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_RELAIS_NUMBER | 1.0 | 1.0 | 0.0 | - | - | Angabe Relais |

### ARG_0XD1AC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Abschalten 1: Einschalten |

### ARG_0XD1C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters: Fahrerseite (Tastenblock): Taster alle FH siehe Tabelle |

### ARG_0XD1CC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SITZEXT_ORT | 0-n | high | unsigned char | - | TAB_SITZEXT_ORT | - | - | - | - | - | Verbauort: welcher LIN slave ist betroffen |
| LED_TYP | 0-n | high | unsigned char | - | TAB_SITZEXT_LED | - | - | - | - | - | Welche LED soll angesteuert werden. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED aus   1: LED ein |

### ARG_0XD220_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Simulation Taster 0: Taster nicht betätigt 1: Taster bettätigt |

### ARG_0XD298_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | ZEIT= 1-2000 in ms für Hupe ein; 0= Hupe aus |

### ARG_0XD30A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: keine Aktion;  1: Ansteuerung Heckrollo einschalten (Heckrollo verfährt bis Block. Erneute Ansteuerung führt zu Richtungswechsel) |

### ARG_0XD30B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD320_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1: Aktivieren Spiegel wird für 8s mit 60 % abgeblendet |

### ARG_0XD322_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | signed int | - | TAB_SPIEGEL_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung Spiegel rechts  0x01: links  0x02: oben  0x03: rechts  0x04: unten |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in 100ms-Schritten |

### ARG_0XD324_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed int | - | TAB_SPIEGEL_KLAPPEN | 1.0 | 1.0 | 0.0 | - | - | 0: Spiegel ausklappen und Bordstein-Position verlassen  1: Spiegel einklappen  2: Spiegel ausklappen  3: Bordstein-Position anfahren  4: Bordstein-Position verlassen |

### ARG_0XD327_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | - | signed int | - | TAB_SPIEGEL_VERFAHREN | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung Spiegel Beifahrer  0x01: links  0x02: oben  0x03: rechts  0x04: unten |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in 100ms-Schritten |

### ARG_0XD328_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_HOR | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Horizontale Position  Angabe in Inkrementen |
| POS_VER | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Vertikale Position  Angabe in Inkrementen |

### ARG_0XD32D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERT | 0-n | - | signed int | - | TAB_SPIEGEL_HEIZUNG | 1.0 | 1.0 | 0.0 | - | - | Heizleistung in Prozent. Auflösung Stufe zu Prozentwerten in Tabelle TAB_SPIEGEL_HEIZUNG |
| ZEIT | s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 240.0 | Angabe der Zeit in Sekunden. Maximal 240 Sekunden |

### ARG_0XD32F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Ansteuerzeit in Sekunden. Spiegel wird mit 100 % abgeblendet. |

### ARG_0XD333_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_HOR | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Horizontale Position  Angabe in Inkrementen |
| POS_VER | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Vertikale Position  Angabe in Inkrementen |

### ARG_0XD336_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | signed int | - | TAB_SPIEGELMEM_POS | 1.0 | 1.0 | 0.0 | - | - | Angabe der Memoryposition 1-3 1 und 2 entsprechen Taste 1 und 2  3 entspricht Schlüsselposition |
| KEY | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Welcher Schlüssel 0-3 |

### ARG_0XD338_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | signed int | - | TAB_SPIEGELMEM_POS | - | - | - | - | - | Angabe der Memoryposition 1-3. Wert 0x3 Schlüssel wird als aktuelle Position interpretiert |
| KEY | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter KEY ist überflüssig (wird nicht ausgewertet). Es kann von der Exmi Applikation keine Profil- bzw. Schlüsselumschaltung ausgelöst werden. |
| POS_LI_HORIZONTAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Spiegel links horizontale Position |
| POS_LI_VERTIKAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Spiegel links vertikale Position |
| POS_RE_HORIZONTAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Spiegel rechts horizontale Position |
| POS_RE_VERTIKAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Spiegel rechts vertikale Position |

### ARG_0XD347_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPIEGEL | 0-n | - | signed char | - | TAB_SPIEGEL_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Spiegel |
| DIMMUNG | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 - 100 % |
| AKTION | 0-n | - | signed char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | - | - | Art der Ansteuerung |

### ARG_0XD350_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WASCHDUESENHEIZUNG_WERT | 0-n | high | unsigned char | - | TAB_WASCHDUESENHEIZUNG | 1.0 | 1.0 | 0.0 | - | - | PWM-Wert: 0 = 0% 1 = 25% 2 = 50% 3 = 75% 4 = 100% |
| WASCHDUESENHEIZUNG_ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit (0-240s) |

### ARG_0XD352_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Waschwasserpumpe hinten AUS 1: Waschwasserpumpe hinten EIN |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit in Sekunden  0 bedeutet AUS |

### ARG_0XD355_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Park-Position |

### ARG_0XD356_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ende Ansteuerung 1: Heckscheibenwischer in Park-Position |

### ARG_0XD35C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ausschalten Waschwasserpumpe vorne;  1: Einschalten Waschwasserpumpe vorne |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Ansteuer-Zeit in Sekunden |

### ARG_0XD35D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_WISCHER | 1.0 | 1.0 | 0.0 | - | - | 0: Scheibenwischer vorne ausschalten;  1: Scheibenwischer vorne auf Stufe 1; 2: Scheibenwischer vorne auf Stufe 2 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Ansteuer-Zeit in Sekunden |

### ARG_0XD35F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ausschalten Scheibenwischer hinten;  1: Einschalten Scheibenwischer hinten |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Ansteuer-Zeit in Sekunden |

### ARG_0XD360_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Scheinwerferreinigungsanlage ausschalten;  1: Scheinwerferreinigungsanlage einschalten |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Ansteuer-Zeit in Sekunden |

### ARG_0XD361_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: LED AUS 1: LED EIN |

### ARG_0XD362_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Montage-Position |

### ARG_0XD363_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Service-Position |

### ARG_0XD369_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD36A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus 1: LED ein |

### ARG_0XD389_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD399_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25.0 | Ansteuerdauer in Sekunden  1 - 25 Sekunden  0 = Ansteuerung AUS |
| ANLAUFRAMPE | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| STOPRAMPE | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 2.0 | Werte von 0, 1 und 2 sind möglich;   0  entspricht steilster Rampe,   2  entspricht der flachsten Rampe; Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| AMPLITUDE | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 14.0 | Vibrationsstärke; es sind Amplituden von 0-14 (dezimal) möglich. |
| FREQUENZ | Hz | - | unsigned char | - | - | 10.0 | 1.0 | -373.0 | 43.7 | 56.3 | Frequenz der Vibration, Frequenzstufen von 43,7 bis 56,3 Hertz sind möglich. |

### ARG_0XD39A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD39B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus   1: LED ein |

### ARG_0XD3F3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Aktivierung der HOD-Elektronik (Überschreiben der Bus-Anforderung) 0 = Durchschleifen der Bus-Anforderung (keine Aktivierung per Diagnose) |

### ARG_0XD500_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1: Setzen der Winkelposition 0: Keine Aktion |

### ARG_0XD531_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TMS_LINKS | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Aus 1: Ein |
| TMS_RECHTS | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Aus 1: Ein |

### ARG_0XD537_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | - | - | - | - | - | Tagfahrlichtsperre: 0...Sperre loeschen 1...Sperre setzen |

### ARG_0XD538_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | signed char | - | TAB_SCHEINWERFER_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | 0x00: Linker Scheinwerfer   0x01: Rechter Scheinwerfer   0x02: Beide Scheinwerfer |

### ARG_0XD542_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | signed int | - | TAB_LAMPEN_FUNKTION | 1.0 | 1.0 | 0.0 | - | - | Mögliche Elemente siehe Tabelle |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 32767.0 | Angabe der Zeit in 10ms  0: aus  max. 32767: 327sec sofern für die Lampe zugelassen |

### ARG_0XD547_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LWR_AHL | 0-n | - | signed char | - | TAB_AHL_LWR_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Umfang 0: AHL  1: LWR 2: AHL + LWR |
| SCHEINWERFER | 0-n | - | signed char | - | TAB_SCHEINWERFER_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Scheinwerfer |

### ARG_0XD558_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | signed char | - | TAB_AHL_LWR_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Umfang  0: AHL  1: LWR 2: AHL + LWR |
| SCHEINWERFER | 0-n | - | signed char | - | TAB_SCHEINWERFER_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl Scheinwerfer |
| HOR_POSITION | ° | - | signed int | - | - | 10.0 | 1.0 | 0.0 | -25.0 | 25.0 | Horizontale Position |
| HOR_GESCHW | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Horizontale Geschwindigkeit |
| VER_POSITION | ° | - | signed int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 10.0 | Vertikale Position |
| VER_GESCHW | °/s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vertikale Geschwindigkeit |

### ARG_0XD57C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUERAUS | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Daueraus nicht aktiv 1: Daueraus aktiv |

### ARG_0XD58E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Scheinwerfer reagiert auf  normalen  Mechanismus (manuelle LWR: Reaktion auf Rädchen automatische / dynamische LWR: Reaktion auf die Höhenstndssenoren  1: Scheinwerfer bleiben in Grundstellung (aufheben nur per Diagnose oder Klemmenwechsel möglich) |

### ARG_0XD5A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | high | unsigned char | - | TAB_SH_TASTEN | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD5D5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOESCHEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Spielschutzzähler im SMO nicht löschen 1 = Spielschutzzähler im SMO löschen |

### ARG_0XD5D7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = kein Reset im SMO durchführen 1 = Software-Reset im SMO durchführen |

### ARG_0XD5E6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRLICHTSITUATION | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_2 | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der Fahrlichtsituation |

### ARG_0XD613_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FES_MODUS | 0-n | high | unsigned char | - | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | - | - | Steuern des FES Modus |

### ARG_0XD626_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_FES_LASTMODE | 0-n | high | unsigned char | - | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | - | - | Aufstart Modus |
| STEUERN_FES_SLEEPTIME_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit bei Kl15 aus |

### ARG_0XD629_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE_SWITCHBOARD | 0-n | high | unsigned char | - | TAB_SWITCHBOARD | - | - | - | - | - | Auswahl der anzusteuernden Taste. Zuordnung siehe TAB_SWITCHBOARD |
| ZEIT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer Ansteuerung der Taste in ms |

### ARG_0XD62A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED aus 1: LED ein |

### ARG_0XD642_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Ende Ansteuerung 1: Heckscheibenwischer in Service-Position |

### ARG_0XD71C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POS_FA | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Position Fahrer MIN-/MAX-Werte vom Lieferanten |
| POS_BF | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Position Beifahrer MIN-/MAX-Werte vom Lieferanten |

### ARG_0XD71D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG_FA | 0-n | - | unsigned char | - | TAB_GZB_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Richtung Gurtzubringer Fahrer 0x00: Stop 0x01: ausfahren 0x02: einfahren |
| RICHTUNG_BF | 0-n | - | unsigned char | - | TAB_GZB_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Richtung Gurtzubringer Beifahrer 0x00: Stop 0x01: ausfahren 0x02: einfahren |

### ARG_0XD72A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD72F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD732_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD737_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD7AA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD7B0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD7EB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD7F1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD89E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VENTIL_FAHRER | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert für die Ansteuerung des Wasserventils Fahrer(0-100%) |
| PWM_VENTIL_BEIFAHRER | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert für die Ansteuerung des Wasserventils Beifahrer (0-100%) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 240.0 | Angabe Ansteuerzeit in Sekunden |

### ARG_0XD8DA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Umschaltventil: 0 = AUF, 1 = ZU |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie lange die Ansteuerung erfolgen soll: Angabe in Sekunden |

### ARG_0XD8E0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_HK_WIPPE | - | - | - | - | - | Richtung |
| ZEIT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit |

### ARG_0XD903_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Zusatzwasserpumpe aus 1: Zusatzwasserpumpe ein |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 240.0 | Ansteuerzeit in Sekunden |

### ARG_0XD908_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM: 0-100 % |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit in Sekunden |

### ARG_0XD970_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Heckscheibenheizung aus 1: Heckscheibenheizung ein |
| ZEIT | s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Ansteuerzeit in Sekunden |

### ARG_0XD971_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Magnetkupplung: 0 = AUF, 1 = ZU |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, wie lange die Ansteuerung erfolgen soll: Angabe in Sekunden |

### ARG_0XDA0D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDA49_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEDIENSTELLE | 0-n | high | unsigned char | - | TAB_ZSG_ART_BEDIENSTELLE_ZV | - | - | - | - | - | Das Argument enthält die Bedienstelle |
| AKTION | 0-n | high | unsigned char | - | TAB_ZSG_ZUSTAND_BEDIENSTELLE_AKTION | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für die Bedienstelle. Es sind nur die Werte 2 und 4 zulässig. |

### ARG_0XDA4B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA4C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA4D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA4E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA4F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA5E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Aktivierungszeit in Sekunden 0...254s |

### ARG_0XDA62_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 31.0 | ID des RGB-LIN-Slaves |
| EIN_AUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Deaktivieren: AUS= 0; Aktivieren: EIN=1 |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit aller Grundfarben |
| HELLIGKEIT_ROT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Rot |
| HELLIGKEIT_GRUEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Grün |
| HELLIGKEIT_BLAU | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Blau |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Aktivierungszeit in Sekunden 0...254s |

### ARG_0XDA77_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | - | - | Simulation des Kontakts 0: nicht aktiv 1: aktiv 2: Tür geschlossen 4: Tür offen |

### ARG_0XDA78_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | - | - | Simulation des Kontakts 0: nicht aktiv 1: aktiv 2: Tür geschlossen 4: Tür offen |

### ARG_0XDA79_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | - | - | Simulation des Kontakts 0: nicht aktiv 1: aktiv 2: Tür geschlossen 4: Tür offen |

### ARG_0XDA7A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | - | - | Simulation des Kontakts 0: nicht aktiv 1: aktiv 2: Tür geschlossen 4: Tür offen |

### ARG_0XDA7D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKKLAPPE_AUSSEN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA80_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA89_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_FRONTKLAPPE | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA8A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEDIENSTELLE | 0-n | high | unsigned char | - | TAB_ZSG_ART_BEDIENSTELLE_CA | - | - | - | - | - | Das Argument enthält die Bedienstelle. Zuordnung erfolgt gemäß Tabelle TAB_ZSG_ART_BEDIENSTELLE |
| AKTION | 0-n | high | unsigned char | - | TAB_ZSG_ZUSTAND_BEDIENSTELLE_AKTION | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für die Bedienstelle Zuordnung erfolgt gemäß Tabelle TAB_ZSG_ZUSTAND_BEDIENSTELLE_AKTION |

### ARG_0XDA92_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_HECKKLAPPE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA93_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDA94_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_VORRAST | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDAB8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDAB9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | 1.0 | 1.0 | 0.0 | - | - | Das Argument ermöglicht die ELV-Sperre, KL50-Sperre oder den Präsentations-Modus zu aktivieren oder alle Sperren zu deaktivieren. Hinweise: - Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS. |

### ARG_0XDABE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDAC0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDAC4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAGE_FT_ER_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Fahrerseite vorne entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_FT_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Fahrerseite vorne entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_BFT_ER_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Beifahrerseite vorne entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_BFT_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Beifahrerseite vorne entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_FTH_ER_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Fahrerseite hinten entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_FTH_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Fahrerseite hinten entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_BFTH_ER_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Beifahrerseite hinten entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |
| TAGE_BFTH_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Beifahrerseite hinten entsperrt oder gesperrt werden sollen. 0 = Sperren; 1= Entsperren |

### ARG_0XDBEA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDBEB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: LED aus 1: LED ein |

### ARG_0XDC54_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAENDLER_NUMMER | TEXT | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die 5-stellige Händlernummer. Im Werk ist dieser Wert = 00000. |
| ERSTZULASSUNGSDATUM_TAG | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Das Argument enthält den Tag des Erstzulassungsdatums. Im Werk: dieser Wert = Tag der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_MONAT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Das Argument enthält den Monat des Erstzulassungsdatums.  Im Werk: dieser Wert = Monat der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_JAHR | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2000.0 | 9999.0 | Das Argument enthält das Jahr des Erstzulassungsdatums.  Im Werk ist dieser Wert = Jahr der Schlüssel-Initialisierung. Wertebereich 2000 - 9999. |

### ARG_0XDC60_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SST | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den vorzugebenden Zustand des Sensors SST A und B. |

### ARG_0XDC64_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_CENTERLOCK | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Centerlock-Taster. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC67_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_MSA | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster der Motor-Start-Automatik. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC68_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_SICHERN_HECKKL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster zum Zentralsichern der Heckklappe. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC69_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_OEFFNEN_HECKKLAPPE_INNEN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC83_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SARAH | 0-n | high | unsigned char | - | TAB_SARAH_ZUSTAND | 1.0 | 1.0 | 0.0 | - | - | Zustand SARAH (siehe Tabelle TAB_SARAH_ZUSTAND) |
| AUFFAHRWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Auffahrwarnung (1 - ausgewählt; 0 - abgewählt) |
| VORWARNUNG | 0-n | high | unsigned char | - | TAB_VORWARNUNG | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Vorwarnung  (siehe Tabelle TAB_VORWARNUNG) |
| PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Personenwarnung (1 - ausgewählt; 0 - abgewählt) |
| GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Gezieltes Anleuchten (1 - ausgewählt; 0 - abgewählt) |
| SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Spurverlassenswarnung (1 - ausgewählt; 0 - abgewählt) |
| SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Spurwechselwarnung (1 - ausgewählt; 0 - abgewählt) |
| UEBERNAHME_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Übernahme der erkannten Höchstgeschwindigkeit als neue Setzgeschwindigkeit für Tempomat und Limiter.  (1 - ausgewählt; 0 - abgewählt) |
| OFFSET_GESCHWINDIGKEIT | km/h | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Offset zur Höchstgeschwindigkeit bei Übernahme als neue Setzgeschwindigkeit für Tempomat und Limiter. |
| RESERVE_3 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_4 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_5 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_6 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_7 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_8 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_9 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_10 | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reserve |

### ARG_0XDC84_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDC85_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed char | - | TAB_SARAH_LED | - | - | - | - | - | 0 = LED aus 1 = LED gruen 2 = LED defekt 3 = LED orange |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DFZ_ALARM_TYP | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die Art des zu sendenden Alarms. 0 = kein Alarm 1 - 254 = Alarmtelegramm |

### ARG_0XF100_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_DEV_AUSGANG_LEUCHTEN | 1.0 | 1.0 | 0.0 | - | - | Auswahl des Ausgangs Werttabelle Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |

### ARG_0XF200_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | + | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |
| CONF_CAN_DEBUG_CH_1 | + | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe linker FH deaktiviert 1: Ausgabe linker FH aktiviert |
| CONF_CAN_DEBUG_CH_2 | + | + | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe rechter FH deaktiviert 1: Ausgabe rechter FH aktiviert |

### ARG_0XF206_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Auswahl siehe Tabelle TAB_DEV_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| RICHTUNG | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Öffnen 1: Schliessen |
| ZEIT | + | - | ms | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 0.0 | 65535.0 | Übergebener Wert (in ms) wird auf 100ms Schritte abgerundet |

### ARG_0XF207_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Auswahl siehe Tabelle TAB_DEV_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| RICHTUNG | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Öffnen 1: Schliessen |
| ZEIT | + | - | ms | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 0.0 | 65535.0 | Übergebener Wert (in ms) wird auf 100ms Schritte abgerundet |

### ARG_0XF208_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |
| CONF_CAN_DEBUG_CH_1 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe linker FH vorne deaktiviert 1: Ausgabe linker FH vorne aktiviert |
| CONF_CAN_DEBUG_CH_2 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe rechter FH vorne deaktiviert 1: Ausgabe rechter FH vorne aktiviert |

### ARG_0XF209_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_DEV_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_DEV_FH_AUSWAHL |
| CONF_CAN_DEBUG_CH_1 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe linker FH hinten deaktiviert 1: Ausgabe linker FH hinten aktiviert |
| CONF_CAN_DEBUG_CH_2 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ein-/Ausschalten der Debug-Ausgabe über den CAN Bus über reservierte IDs. 0: Ausgabe rechter FH hinten deaktiviert 1: Ausgabe rechter FH hinten aktiviert |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

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
| F_SEVERITY | ja |
| F_UWB_SATZ | 4 |
| F_HLZ_VIEW | ja |

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
| 0x024000 | Energiesparmode aktiv | 0 |
| 0x024008 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x024009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02400A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02400B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02400C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF40 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030000 | FH FA, Relais Öffnen, fehlende Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030001 | FH FA, Relais Schliessen, keine Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030002 | FH FA, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030003 | FH FA, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030005 | FH FA, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030006 | FH FA, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030007 | FH FA, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03000A | FH FA: Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03000B | FH FA, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03000C | FH FA, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03000D | FH FA, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03000E | FH FA, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03000F | FH FA, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030010 | FH FA, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030012 | FH FA: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030014 | FH FA: Position fehlerhaft, Normierungsverlust | 0 |
| 0x030015 | FH FA: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030016 | FH FA: Motortemperatur 90 Prozent Schwelle überschritten | 1 |
| 0x030017 | FH FA: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030018 | FH FA: Kein Motorstart wegen Überspannung/Unterspannung | 1 |
| 0x030019 | FH FA: Codierung ungültig | 0 |
| 0x03001C | FH FA: Keine Initialisierung aufgrund ungültiger Randbedingungen | 1 |
| 0x03001D | FH FA: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03001E | FH FA: fehlende Eingangsspannung am Relais: Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030020 | FH FA: System ist nicht normiert | 0 |
| 0x030080 | FH BF, Relais Öffnen, fehlende Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030081 | FH BF, Relais Schliessen, fehlende Ausgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030082 | FH BF, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030083 | FH BF, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030085 | FH BF, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030086 | FH BF, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030087 | FH BF, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x03008A | FH BF: Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03008B | FH BF: Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03008C | FH BF, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03008D | FH BF, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03008E | FH BF, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03008F | FH BF, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030090 | FH BF, Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030092 | FH BF: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030094 | FH BF: Position fehlerhaft, Normierungsverlust | 0 |
| 0x030095 | FH BF: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030096 | FH BF: Motortemperatur 90 Prozent Schwelle überschritten | 1 |
| 0x030097 | FH BF: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030098 | FH BF: Kein Motorstart wegen Überspannung/Unterspannung | 1 |
| 0x030099 | FH BF: Codierung ungültig | 0 |
| 0x03009C | FH BF: Keine Initialisierung aufgrund ungültiger Randbedingungen | 1 |
| 0x03009D | FH BF: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03009E | FH BF: fehlende Eingangsspannung am Relais: Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x0300A0 | FH BF: System ist nicht normiert | 0 |
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
| 0x030340 | Schaltzentrum Lenksaeule (SZL) (LIN): Interner Hardware-Fehler | 0 |
| 0x030341 | Schaltzentrum Lenksaeule (SZL) Lenkstock Blinker: Unzulaessiger Code | 0 |
| 0x030342 | Schaltzentrum Lenksaeule (SZL) Lenkstock Blinker: Unplausibles Signal BC/FLA-Taster | 0 |
| 0x030343 | Schaltzentrum Lenksaeule (SZL) Lenkstock Blinker: Taster haengt (FAS/ BC/FLA) | 0 |
| 0x030344 | Schaltzentrum Lenksaeule (SZL) Lenkstock Wischer: Unzulaessiger Code | 0 |
| 0x030345 | Schaltzentrum Lenksaeule (SZL) Lenkstock Wischer:  Intervall-Raendel defekt | 0 |
| 0x030346 | Schaltzentrum Lenksaeule (SZL) Lenkstock Wischer: Taster Regensensor unplausibles Signal | 0 |
| 0x030347 | Schaltzentrum Lenksaeule (SZL) Lenkstock Wischer: LED-Taster Regensensor hat Kurzschluss nach Masse | 0 |
| 0x030348 | Schaltzentrum Lenksaeule (SZL), Lenkstock Wischer: Taster haengt (SWS, AIC) | 0 |
| 0x030349 | Schaltzentrum Lenksaeule (SZL) Lenkradheizung: Taster haengt | 0 |
| 0x03034A | Schaltzentrum Lenksaeule (SZL), Lenkradheizung: Taster nicht verbaut oder LED Leitungsunterbrechung | 0 |
| 0x03034B | Schaltzentrum Lenksaeule (SZL): Lenkradheizung: LED Kurzschluss nach Masse | 0 |
| 0x03034C | Schaltzentrum Lenksaeule (SZL), Hupe: Taster haengt | 0 |
| 0x03034D | Schaltzentrum Lenksaeule (SZL) (LIN): Kommunikationsfehler | 0 |
| 0x030350 | Schaltzentrum Lenksaeule (SZL) (LIN): fehlender LIN-Slave | 0 |
| 0x030351 | Schaltzentrum Lenksaeule (SZL) (LIN): falsche Variante | 0 |
| 0x030352 | Schaltzentrum Lenksaeule (SZL) (LIN): Alive-Zaehler-Fehler | 0 |
| 0x03035A | Schaltzentrum Lenksaeule (LIN): Leitung zum Taster: Kurzschluss nach Plus oder Leitungsbruch | 0 |
| 0x03035B | Schaltzentrum Lenksaeule (LIN): Taster hängt | 0 |
| 0x03035C | Schaltzentrum Lenksaeule (LIN):  Leitung zum Taster: Kurzschluss nach Masse | 0 |
| 0x030360 | Hands OFF Detection (HOD) (LIN ) Versorgungsspannung | 0 |
| 0x030361 | Hands OFF Detection (HOD) (LIN ) Steuergerät defekt | 0 |
| 0x030362 | Hands OFF Detection (HOD) (LIN ) Sensormatte defekt | 0 |
| 0x030364 | Hands OFF Detection (HOD) (LIN ) Sensor fehlender LIN-Slave | 0 |
| 0x030365 | Hands OFF Detection (HOD) (LIN ) Sensor unerwarteter LIN-Slave | 0 |
| 0x030401 | Multifunktions-Lenkrad (MFL): interner Fehler | 0 |
| 0x030402 | Multifunktions-Lenkrad (MFL): Schalterblock links defekt | 0 |
| 0x030403 | Multifunktions-Lenkrad (MFL): Schalterblock rechts defekt | 0 |
| 0x030404 | Multifunktions-Lenkrad (MFL): Tippraendel Widerspruch | 0 |
| 0x030405 | Multifunktions-Lenkrad (MFL): Raendel Widerspruch | 0 |
| 0x030406 | Multifunktions-Lenkrad (MFL): Wippe Widerspruch | 0 |
| 0x030409 | Botschaft (ST_STW_LIN): Alive-Zaehler-Fehler | 0 |
| 0x03040A | Botschaft (ST_STW_LIN): Pruefsummenfehler | 0 |
| 0x030410 | Multifunktions-Lenkrad (MFL): fehlender LIN-Slave | 0 |
| 0x030411 | Multifunktions-Lenkrad (MFL): falsche Variante | 0 |
| 0x030412 | Multifunktions-Lenkrad (MFL): unerwarteter LIN-Slave | 0 |
| 0x030480 | Lenkradelektronik (LRE), Lenkradheizung Last: interner Fehler | 0 |
| 0x030481 | Lenkradelektronik (LRE), Lenkradheizung NTC-Kontakt: interner Fehler | 0 |
| 0x030482 | Lenkradelektronik (LRE), Lenkradheizung: Kurzschluss | 0 |
| 0x030483 | Lenkradelektronik (LRE), Lenkradheizung: interner Fehler | 0 |
| 0x030484 | Lenkradelektronik (LRE), Lenkradvibration: Spannung ausserhalb gueltigem Bereich | 0 |
| 0x030485 | Lenkradelektronik (LRE), Lenkradvibration: Zulaessige Stromaufnahme ueberschritten | 0 |
| 0x030486 | Lenkradelektronik (LRE), Lenkradvibration: Uebertemperatur | 0 |
| 0x030487 | Lenkradelektronik (LRE) Aktuator: Leitungsunterbrechung | 0 |
| 0x030488 | Lenkradelektronik (LRE) Aktuator: Kurzschluss nach Masse | 0 |
| 0x030490 | Lenkradelektronik (LRE) (LIN): fehlender LIN-Slave | 0 |
| 0x030491 | Lenkradelektronik (LRE) (LIN): falsche Variante | 0 |
| 0x030492 | Lenkradelektronik (LRE) (LIN): unerwarteter LIN-Slave | 0 |
| 0x0304C0 | ELSV (LIN): Motor axial Kurzschluss nach GND | 0 |
| 0x0304C1 | ELSV (LIN): Motor axial Kurzschluss nach Ubatt | 0 |
| 0x0304C2 | ELSV (LIN): Motor axial Kurzschluss im Motor oder in Zuleitung | 0 |
| 0x0304C3 | ELSV (LIN): Motor axial Unterbrechung im Motoranschluss | 0 |
| 0x0304C4 | ELSV (LIN): ELSV nicht normiert | 0 |
| 0x0304C5 | ELSV (LIN): interner Steuergeräte Fehler | 0 |
| 0x0304C6 | ELSV (LIN): interner Relais Fehler | 0 |
| 0x0304C7 | ELSV (LIN): ELSV maximale Anzahl an Blockfahrteb erreicht | 0 |
| 0x0304C8 | ELSV (LIN): Überspannung | 0 |
| 0x0304C9 | ELSV (LIN): Unterspannung | 0 |
| 0x0304CA | ELSV (LIN): Motor vertikal Kurzschluss nach GND | 0 |
| 0x0304CB | ELSV (LIN): Motor vertikal Kurzschluss nach Ubatt | 0 |
| 0x0304CC | ELSV (LIN): Motor vertikal Kurzschluss im Motor oder in Zuleitung | 0 |
| 0x0304CD | ELSV (LIN): Motor vertikal Unterbrechung im Motoranschluss | 0 |
| 0x0304D1 | ELSV (LIN): Fehlender LIN Slave | 0 |
| 0x0304D2 | ELSV (LIN): Nicht erwarteter LIN Slave | 0 |
| 0x0304D4 | ELSV (LIN): Hallsensor axial Kurzschluss nach Ubatt | 0 |
| 0x0304D5 | ELSV (LIN): Hallsensor axial Kurzschluss im Sensor | 0 |
| 0x0304D6 | ELSV (LIN): Thermoschutz axial | 0 |
| 0x0304D8 | ELSV (LIN): Hallsensor vertikal Kurzschluss nach Ubatt | 0 |
| 0x0304D9 | ELSV (LIN): Hallsensor vertikal Kurzschluss im Sensor | 0 |
| 0x0304DA | ELSV (LIN): Thermoschutz vertikal | 0 |
| 0x030740 | Signalleitung 1 Switchboard Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x030741 | Signalleitung 1 Switchboard Kurzschluss nach Minus | 0 |
| 0x030743 | Signalleitung 2 Switchboard Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x030744 | Signalleitung 2 Switchboard Kurzschluss nach Minus | 0 |
| 0x030746 | Signalleitung 3 Switchboard Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x030747 | Signalleitung 3 Switchboard Kurzschluss nach Minus | 0 |
| 0x03074A | Switchboard: PDC LED Fehler HW-Leitung | 0 |
| 0x03074B | Switchboard: HDC LED Fehler HW-Leitung | 0 |
| 0x03074D | Signalleitung 4 Switchboard Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x03074E | Signalleitung 4 Switchboard Kurzschluss nach Minus | 0 |
| 0x030750 | FES Wippe Dauerbetätigung vorne | 0 |
| 0x030751 | FES Wippe Dauerbetätigung hinten | 0 |
| 0x030752 | DSC Taster Dauerbetätigung | 0 |
| 0x804011 | Versorgungsunterspannung 8V5 | 0 |
| 0x804012 | Versorgungsüberspannung 16V5 | 0 |
| 0x804013 | Versorgungsspannung Klemme 30L1 fehlt | 0 |
| 0x804014 | Versorgungsspannung Klemme 30L2 fehlt | 0 |
| 0x80401A | Übertemperatur in ECU erkannt | 0 |
| 0x80402D | Autosar Softwarefehler: Fehlerhafte Speicher-Konfiguration | 0 |
| 0x80402F | Batterie Tiefentladen | 1 |
| 0x804033 | ZSG Spielschutz: weckfähige Eingänge gesperrt | 1 |
| 0x804034 | The Jtag of the BDC-Body is not Set | 0 |
| 0x804080 | Zündung ein: Startfähigkeit gefährdet | 1 |
| 0x804083 | Kupplungssignal PN_KUPPL: Kurzschluss Batteriespannung | 0 |
| 0x804084 | Kupplungssignal PN_KUPPL: Plausibilisierungsfehler gegenüber CAN-Signal | 0 |
| 0x804086 | Treiber KL15WUP: Kurzschluss Batteriespannung | 0 |
| 0x804087 | Start-Stopp-Taster Sensor SSTB: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804088 | Start-Stopp-Taster Sensor SSTA: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804089 | Start-Stopp-Taster Sensor SSTA: Kurzschluss Masse | 0 |
| 0x80408A | Start-Stopp-Taster Sensor SSTB: Kurzschluss Masse | 0 |
| 0x80408B | Treiber KL15WUP: Kurzschluss Masse | 0 |
| 0x80408C | KL30F-Relais-Vorne: Interne Sicherung 1 defekt | 0 |
| 0x80408D | Treiber KL30B1: Kurzschluss Masse | 0 |
| 0x80408E | Treiber KL30B2: Kurzschluss Masse | 0 |
| 0x80408F | Treiber KL30B-ACSM: Kurzschluss Masse | 0 |
| 0x804090 | Treiber KL15: Kurzschluss Masse | 0 |
| 0x804091 | Treiber KL15: Kurzschluss Batteriespannung | 0 |
| 0x804092 | Treiber KL15N1: Kurzschluss Masse | 0 |
| 0x804093 | Treiber KL15N2: Kurzschluss Masse | 0 |
| 0x804094 | KL30F-Relais-Vorne: Interne Sicherung 2 defekt | 0 |
| 0x804095 | Fehler Motorstart bei Anlasserbetrieb: Stromüberlast Treiber KL50L | 0 |
| 0x804096 | Treiber KL30B1: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804097 | Treiber KL30B2: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804098 | Start-Stopp-Taster Sensor SSTA: Dauerbetätigung | 0 |
| 0x804099 | Start-Stopp-Taster Sensor SSTB: Dauerbetätigung | 0 |
| 0x80409A | Treiber KL15N1: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80409B | Treiber KL15N2: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80409C | Bremslichtschalter BLS: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80409D | Bremslichtschalter BLS: Kurzschluss nach Masse | 0 |
| 0x80409E | Bremslichtschalter BLS: Dauerbetätigung | 0 |
| 0x80409F | Bremslichtschalter BLS: Unplausibler Zustand | 0 |
| 0x8040A0 | KL30F-Vorne: KL30F nicht aktivierbar (Kurzschluss Masse) | 0 |
| 0x8040A2 | KL30F-Vorne: KL30F nicht abschaltbar (Kurzschluss Batteriespannung, Relaiskleber) | 0 |
| 0x8040A4 | Start-Stopp-Taster Sensor SSTA: Unplausibler Zustand | 0 |
| 0x8040A5 | Start-Stopp-Taster Sensor SSTB: Unplausibler Zustand | 0 |
| 0x8040A6 | Ansteuerung Einschalten KL30F-Hinten: Kurzschluss Masse | 0 |
| 0x8040A7 | Ansteuerung Einschalten KL30F-Hinten: Kurzschluss Batteriespannung | 0 |
| 0x8040A8 | Ansteuerung Ausschalten KL30F-Hinten: Kurzschluss Masse | 0 |
| 0x8040A9 | Start-Stopp-Taster SST: Fehlbetätigung (Schrägdruck) | 1 |
| 0x8040AA | KL30F-Relais-Vorne: Interne Sicherung 3 defekt | 0 |
| 0x8040AB | KL30F-Relais-Vorne: Interne Sicherung 4 defekt | 0 |
| 0x8040AC | Ansteuerung Ausschalten KL30F-Hinten: Kurzschluss Batteriespannung | 0 |
| 0x8040AD | LED Suchbeleuchtung Start-Stop-Taster: Kurzschluss Masse | 0 |
| 0x8040AE | LED Suchbeleuchtung Start-Stop-Taster: Kurzschluss Batteriespannung | 0 |
| 0x8040B0 | IBS Wakeup: Kurzschluss nach Masse | 0 |
| 0x8040B1 | IBS Wakeup: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x8040B2 | LED Funktionsbeleuchtung MSA/EV: Kurzschluss Masse | 0 |
| 0x8040B3 | LED Funktionsbeleuchtung MSA/EV: Kurzschluss Batteriespannung | 0 |
| 0x8040B4 | Fehler Motorstart bei Anlasserbetrieb: Anlasserrelais defekt | 0 |
| 0x8040B5 | Fehler Motorstart bei Anlasserbetrieb: Keine Drehzahl bei Ansteuerung | 1 |
| 0x8040B6 | Fehler Motorstart bei Anlasserbetrieb: Relaiskleber undoder Kurzschluss gegen Batteriespannung | 0 |
| 0x8040B7 | Deaktiverung Klemme 15: OSFG erreicht | 1 |
| 0x8040B8 | Treiber KL30BKL15N: Dauerhafte Deaktiverung aufgrund maximaler Anzahl Kurzschlüsse gegen Masse | 1 |
| 0x8040B9 | Deaktiverung Klemme 30B: OSFG erreicht | 1 |
| 0x8040BB | Kl30B aktiv: Startfähigkeitsgrenze erreicht oder Kl. 30B lange Zeit aktiv | 1 |
| 0x8040BD | Klemme 30F Reset oder Abschaltung | 1 |
| 0x8040CD | Klemme 15 aktiv: fehlerhaftes Abstellen | 1 |
| 0x8040CF | Klemme 15 Abschaltung über Timeout nach el. Fahrbereitschaft | 1 |
| 0x8040E0 | EWS: DME oder DDE Secret Key nicht geschrieben bzw. nicht verriegelt | 1 |
| 0x8040E1 | EWS: ELV nicht angelernt | 0 |
| 0x8040F0 | Transponderspule: Fehler Basestation | 0 |
| 0x8040F1 | Kryptodaten in einem Schlüssel | 1 |
| 0x8040F2 | Transponderspule: Fehler Ersatzschlüsselanlernen | 1 |
| 0x8040F3 | Transponderspule: Gesperrter Schlüssel gefunden | 1 |
| 0x8040F4 | Transponderspule: Fremdschlüssel nicht dem Fahrzeug zugehörig | 1 |
| 0x8040F5 | Transponderspule: Fehler Antenne | 0 |
| 0x804100 | Antenne Stoßfänger (SF): interner Defekt | 0 |
| 0x804101 | Antenne Stoßfänger hinten (SFH) oder Antenne Frontklappe (FK): Kurzschluss nach Masse | 0 |
| 0x804102 | Antenne Stoßfänger hinten (SFH) oder Antenne Frontklappe (FK): Kurzschluss nach Ubatt | 0 |
| 0x804103 | Antenne Stoßfänger hinten (SFH): Leitungsunterbrechung | 0 |
| 0x804104 | Antenne Innenraum vorn (IRV): interner Defekt | 0 |
| 0x804105 | Antenne Innenraum vorn (IRV): Kurzschluss nach Masse | 0 |
| 0x804106 | Antenne Innenraum vorn (IRV): Kurzschluss nach Ubatt | 0 |
| 0x804107 | Antenne Innenraum vorn (IRV): Leitungsunterbrechung | 0 |
| 0x804108 | Antenne Fahrertür oder -seite (FT): interner Defekt | 0 |
| 0x804109 | Antenne Fahrertür oder -seite (FT): Kurzschluss nach Masse | 0 |
| 0x80410A | Antenne Fahrertür oder -seite (FT): Kurzschluss nach Ubatt | 0 |
| 0x80410B | Antenne Fahrertür oder -seite (FT): Leitungsunterbrechung | 0 |
| 0x80410C | Antenne Beifahrertür oder -seite (BFT): interner Defekt | 0 |
| 0x80410D | Antenne Beifahrertür oder -seite (BFT): Kurzschluss nach Masse | 0 |
| 0x80410E | Antenne Beifahrertür oder -seite (BFT): Kurzschluss nach Ubatt | 0 |
| 0x80410F | Antenne Beifahrertür oder -seite (BFT): Leitungsunterbrechung | 0 |
| 0x804110 | Antenne Innenraum hinten (IRH): interner Defekt | 0 |
| 0x804111 | Antenne Innenraum hinten (IRH): Kurzschluss nach Masse | 0 |
| 0x804112 | Antenne Innenraum hinten (IRH): Kurzschluss nach Ubatt | 0 |
| 0x804113 | Antenne Innenraum hinten (IRH): Leitungsunterbrechung | 0 |
| 0x804114 | Antenne Hut-Ablage (HA): interner Defekt | 0 |
| 0x804117 | Antenne Frontklappe (FK): Leitungsunterbrechung | 0 |
| 0x804118 | Antenne Kofferraum links (KRLI): interner Defekt | 0 |
| 0x804119 | Antenne Kofferraum links (KRLI) oder Antenne Kofferraum rechts (KRRE): Kurzschluss nach Masse | 0 |
| 0x80411A | Antenne Kofferraum links (KRLI) oder Antenne Kofferraum rechts (KRRE): Kurzschluss nach Ubatt | 0 |
| 0x80411B | Antenne Kofferraum links (KRLI): Leitungsunterbrechung | 0 |
| 0x80411C | Antenne Kofferraum rechts (KRRE): interner Defekt | 0 |
| 0x80411F | Antenne Kofferraum rechts (KRRE): Leitungsunterbrechung | 0 |
| 0x804120 | TAGE Fahrertür/-seite (FT): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x804121 | CA-Taster oder TAGE Fahrertür/-seite (FT): Unzulässiger Stromwert | 0 |
| 0x804122 | TAGE Fahrertür/-seite (FT): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x804123 | CA-Taster oder TAGE Fahrertür/-seite (FT): Dauerbetätigung | 0 |
| 0x804124 | TAGE Beifahrertür/-seite (BFT): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x804125 | CA-Taster oder TAGE Beifahrertür/-seite (BFT): Unzulässiger Stromwert | 0 |
| 0x804126 | TAGE Beifahrertür/-seite (BFT): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x804127 | CA-Taster oder TAGE Beifahrertür/-seite (BFT): Dauerbetätigung | 0 |
| 0x804128 | TAGE Fahrertür/-seite hinten (FTH): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x804129 | CA-Taster oder TAGE Fahrertür/-seite hinten (FTH): Unzulässiger Stromwert auf Entriegeln-Leitung | 0 |
| 0x80412A | TAGE Fahrertür/-seite hinten (FTH): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x80412B | CA-Taster oder TAGE Fahrertür/-seite hinten (FTH): Dauerbetätigung | 0 |
| 0x80412C | TAGE Beifahrertür/-seite hinten (BFTH): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x80412D | CA-Taster oder TAGE Beifahrertür/-seite hinten (BFTH): Unzulässiger Stromwert | 0 |
| 0x80412E | TAGE Beifahrertür/-seite hinten (BFTH): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x80412F | CA-Taster oder TAGE Beifahrertür/-seite hinten (BFTH): Dauerbetätigung | 0 |
| 0x804130 | TAGE: Eine oder mehrere gesperrt, da Spielschutz aktiv | 1 |
| 0x804131 | Taster Zentralsichern Heckklappe (TZSHK): Dauerbetätigung | 0 |
| 0x804135 | Centerlock-Wippe Beifahrertür: Leitungsunterbrechung/Kurzschluss nach Batteriespannung | 1 |
| 0x804136 | Centerlock-Wippe Beifahrertür: Kurzschluss nach Masse | 1 |
| 0x804137 | Centerlock-Wippe Beifahrertür: Unplausibler Zustand | 1 |
| 0x804138 | Centerlock-Wippe Beifahrertür: Dauerbetätigung | 1 |
| 0x804139 | ZV-Antrieb Heckklappe oder Splitdoor rechts: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80413A | ZV-Antrieb Heckklappe, Heckscheibe, Splitdoors oder Frontklappe: Dauerhafte Deaktiverung aufgrund maximaler Anzahl Kurzschlüsse gegen Masse | 0 |
| 0x80413B | ZV-Antrieb Heckscheibe, Splitdoor links oder Frontklappe: Klappenkontakt defekt oder Klappe klemmt | 0 |
| 0x80413C | ZV-Antrieb Heckscheibe, Splitdoor links oder Frontklappe: Kurzschluss nach Masse | 0 |
| 0x80413D | ZV-Antrieb Heckscheibe, Splitdoor links oder Frontklappe: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80413E | ZV-Antrieb Heckklappe oder Splitdoor rechts: Klappenkontakt defekt oder Klappe klemmt | 0 |
| 0x80413F | ZV-Antrieb Heckklappe oder Splitdoor rechts: Kurzschluss nach Masse | 0 |
| 0x804140 | Taster Center Lock (CLT): Dauerbetätigung | 0 |
| 0x804143 | Funkfernbedienung (FBD): Dauerbetätigung | 1 |
| 0x804146 | Taster Entriegeln Heckklappe Innen (TOEHKI): Dauerbetätigung | 0 |
| 0x804153 | Centerlock-Wippe Fahrertür: Leitungsunterbrechung/Kurzschluss nach Batteriespannung | 1 |
| 0x804154 | Centerlock-Wippe Fahrertür: Kurzschluss nach Masse | 1 |
| 0x804155 | Centerlock-Wippe Fahrertür: Unplausibler Zustand | 1 |
| 0x804156 | Centerlock-Wippe Fahrertür: Dauerbetätigung | 1 |
| 0x804157 | Türkontakt Fahrertür: Kurzschluss nach Masse | 0 |
| 0x804158 | Türkontakt Beifahrertür: Kurzschluss nach Masse | 0 |
| 0x804159 | Türkontakt Fahrertür hinten/unten: Kurzschluss nach Masse | 0 |
| 0x80415A | Türkontakt Beifahrertür hinten/unten: Kurzschluss nach Masse | 0 |
| 0x80415B | Motorhaubenkontakt (MHK): Kurzschluss nach Batteriespannung | 0 |
| 0x80415C | ZV-Relais Entriegeln (ZV_MER): Kurzschluss nach Batteriespannung oder Relaiskleber | 0 |
| 0x80415D | ZV-Relais Entriegeln (ZV_MER): Relais oder Sicherung (F3) defekt | 0 |
| 0x80415E | ZV-Relais Selektives Verriegeln Fahrer (ZV_MVR_FA): Kurzschluss nach Batteriespannung oder Relaiskleber | 0 |
| 0x80415F | ZV-Relais Selektives Verriegeln Fahrer (ZV_MVR_FA): Relais oder Sicherung (F7) defekt | 0 |
| 0x804160 | ZV-Relais Sichern (ZV_MVS): Kurzschluss nach Batteriespannung  oder Relaiskleber | 0 |
| 0x804161 | ZV-Relais Sichern (ZV_MVS): Relais oder Sicherung (F7) defekt | 0 |
| 0x804162 | ZV-Relais Verriegeln (ZV_MVR): Kurzschluss nach Batteriespannung oder Relaiskleber | 0 |
| 0x804163 | ZV-Relais Verriegeln (ZV_MVR): Relais oder Sicherung (F3) defekt | 0 |
| 0x804164 | Türkontakt Beifahrertür: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804165 | Türkontakt Beifahrertür: Unplausibler Zustand | 0 |
| 0x804166 | Türkontakt Beifahrertür hinten/unten: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804167 | Türkontakt Beifahrertür hinten/unten: Unplausibler Zustand | 0 |
| 0x804168 | Türkontakt Fahrertür: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x804169 | Türkontakt Fahrertür: Unplausibler Zustand | 0 |
| 0x80416A | Türkontakt Fahrertür hinten/unten: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80416B | Türkontakt Fahrertür hinten/unten: Unplausibler Zustand | 0 |
| 0x80416D | Motorhaubenkontakt (MHK): Offen bei Fahrt | 1 |
| 0x80416E | Motorhaubenkontakt (MHK): Kurzschluss nach Masse | 0 |
| 0x80416F | Motorhaubenkontakt (MHK): Unplausibler Zustand | 0 |
| 0x804176 | SMO Interner Fehler | 0 |
| 0x804177 | SMO Energiebordnetzfehler | 1 |
| 0x804178 | SMO: Parametrierung fehlerhaft | 0 |
| 0x804179 | SMO Spielschutz bis zum naechsten Motorstart war aktiv | 1 |
| 0x80417A | SMO Spielschutz temporär aktiv | 1 |
| 0x80417B | SMO Fehler Sensorelektrode oben | 0 |
| 0x80417C | SMO Fehler Sensorelektrode unten | 0 |
| 0x804180 | Ausgang POL_L defekt | 0 |
| 0x804181 | Ausgang POL_R defekt | 0 |
| 0x804182 | Ausgang AL_L defekt oder Wiederzündung für Bi-Xenon fehlgeschlagen | 0 |
| 0x804183 | Ausgang AL_R defekt oder Wiederzündung für Bi-Xenon fehlgeschlagen | 0 |
| 0x804184 | Ausgang TFL_L defekt | 0 |
| 0x804185 | Ausgang TFL_R defekt | 0 |
| 0x804186 | Ausgang FL_L defekt | 0 |
| 0x804187 | Ausgang FL_R defekt | 0 |
| 0x80418A | Ausgang FRA_V_L defekt | 0 |
| 0x80418B | Ausgang FRA_V_R defekt | 0 |
| 0x80418C | Ausgang FRA_Z_L defekt | 0 |
| 0x80418D | Ausgang FRA_Z_R defekt | 0 |
| 0x80418E | Ausgang SML_L defekt | 0 |
| 0x80418F | Ausgang SML_R defekt | 0 |
| 0x804190 | Ausgang NSW_L defekt | 0 |
| 0x804191 | Ausgang NSW_R defekt | 0 |
| 0x804192 | Ausgang POL_L hat Kurzschluss | 0 |
| 0x804193 | Ausgang POL_R hat Kurzschluss | 0 |
| 0x804194 | Ausgang AL_L  hat Kurzschluss | 0 |
| 0x804195 | Ausgang AL_R hat Kurzschluss | 0 |
| 0x804196 | Ausgang TFL_L hat Kurzschluss | 0 |
| 0x804197 | Ausgang TFL_R hat Kurzschluss | 0 |
| 0x804199 | Ausgang BiXenonklappe L defekt | 0 |
| 0x80419A | Ausgang FL_L hat Kurzschluss | 0 |
| 0x80419B | Ausgang FL_R hat Kurzschluss | 0 |
| 0x80419C | Ausgang FRA_V_L hat Kurzschluss | 0 |
| 0x80419D | Ausgang FRA_V_R hat Kurzschluss | 0 |
| 0x80419E | Ausgang FRA_Z_L hat Kurzschluss | 0 |
| 0x80419F | Ausgang FRA_Z_R hat Kurzschluss | 0 |
| 0x8041A0 | Ausgang SML_L hat Kurzschluss | 0 |
| 0x8041A1 | Ausgang SML_R hat Kurzschluss | 0 |
| 0x8041A2 | Ausgang NSW_L hat Kurzschluss | 0 |
| 0x8041A3 | Ausgang NSW_R hat Kurzschluss | 0 |
| 0x8041A4 | Ausgang BiXenonklappe L hat Kurzschluss | 0 |
| 0x8041A5 | Ein oder mehrere Ausgänge haben Anzahl zulässiger Kurzschlusszyklen (Codierbar) überschritten | 0 |
| 0x8041A7 | Follow Me Home Wiederholsperre aktiv | 1 |
| 0x8041A9 | Tagfahrlicht Sperre Aktiv | 0 |
| 0x8041AA | Tiefentladungsschutz der Batterie: Abschaltung Parklicht | 1 |
| 0x8041AB | Tiefentladungsschutz der Batterie: Abschaltung Standlicht | 1 |
| 0x8041AD | Lichtnotlauf aktiv durch Abfall Klemme 15 bei fehlerhaftem Geschwindigkeitssignal | 1 |
| 0x8041AE | Ausgang BiXenonklappe R defekt | 0 |
| 0x8041AF | Ausgang BiXenonklappe R hat Kurzschluss | 0 |
| 0x8041B2 | Licht aktiv: Startfaehigkeitsgrenze erreicht | 1 |
| 0x8041B4 | Leuchtweitenregulierung (LWR): Anhängererkennung ausgefallen | 1 |
| 0x8041B5 | Leuchtweitenregulierung (LWR): Gurtschlosserkennung ausgefallen | 1 |
| 0x8041B6 | Leuchtweitenregulierung (LWR): System ausgefallen | 0 |
| 0x8041B7 | Leuchtweitenregulierung (LWR): Spulenabriss an einem oder beiden Schrittmotoren | 0 |
| 0x8041B8 | Leuchtweitenregulierung (LWR): Kurzschluss innerhalb eines oder beider LWR-Motoren | 0 |
| 0x8041B9 | Leuchtweitenregulierung (LWR): Treiberfehler | 0 |
| 0x8041BA | Adaptive Headlight (AHL): System defekt | 0 |
| 0x8041BF | Signal vom Regenlichtsensor unplausibel | 1 |
| 0x8041C2 | Kodierung: Lampenmapping unplausibel | 0 |
| 0x8041C3 | Kodierung: Lampenmapping fehlgeschlagen | 0 |
| 0x8041C4 | Kodierung: Parameter Lampenausgänge unplausibel | 0 |
| 0x8041C6 | Kodierung: Parameter Überspannungsschutz unplausibel | 0 |
| 0x8041C9 | Bedieneinheit Fahrerassistenzsysteme (LIN): Schalter hängt | 1 |
| 0x8041CB | Bedieneinheit Fahrerassistenzsysteme (LIN): Funktionsbeleuchtung SARAH defekt | 0 |
| 0x8041D4 | Hoehenstandssensor: Hinten links Signal Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8041D5 | Hoehenstandssensor: Vorne links Signal Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8041D8 | Höhenstandssensoren - Abgleich, Werte unplausibel | 0 |
| 0x8041D9 | Rückwärtsgang-Information unplausibel, Rückfahrlicht deaktiviert | 0 |
| 0x8041DF | Lichtschaltereinheit, Taster Nebelscheinwerfer oder Taster Nebelschlusslicht: Taster hängt | 0 |
| 0x8041E0 | Taster Warnblinken: Taster hängt | 0 |
| 0x8041E2 | LWR-Rändelrad: Werte unplausibel oder ungültig | 0 |
| 0x8041E3 | Leuchten Spannungsschutz Aktiv | 1 |
| 0x8041E4 | LED Special_Function_1  Fehler HW-Leitung | 0 |
| 0x8041F0 | Treiber-Modul Scheinwerfer (TMS) rechts: Codierfehler | 0 |
| 0x8041F1 | Treiber-Modul Scheinwerfer (TMS) links: Design- oder Seitenmarkierungsleuchte links hat Kurzschluss | 0 |
| 0x8041F2 | Treiber-Modul Scheinwerfer (TMS) rechts: Design- oder Seitenmarkierungsleuchte rechts defekt | 0 |
| 0x8041F3 | Treiber-Modul Scheinwerfer (TMS) links: Umgebungsfehler (Über- oder Unterspannung, Übertemperatur) | 0 |
| 0x8041F4 | Treiber-Modul Scheinwerfer (TMS) links: Tagfahrlicht- oder Positionslichtleuchte links hat Kurzschluss | 0 |
| 0x8041F5 | Treiber-Modul Scheinwerfer (TMS) links: Leuchtweitenregulierung (LWR) Fehler | 0 |
| 0x8041F6 | Treiber-Modul Scheinwerfer (TMS) links: Interner Fehler | 0 |
| 0x8041F7 | Treiber-Modul Scheinwerfer (TMS) links: Tagfahrlicht- oder Positionslichtleuchte links defekt | 0 |
| 0x8041F8 | Treiber-Modul Scheinwerfer (TMS) rechts: AHL-Fehler | 0 |
| 0x8041F9 | Treiber-Modul Scheinwerfer (TMS) rechts: Leuchtweitenregulierung (LWR) Fehler | 0 |
| 0x8041FA | Treiber-Modul Scheinwerfer (TMS) rechts: Tagfahrlicht- oder Positionslichtleuchte rechts defekt | 0 |
| 0x8041FB | Treiber-Modul Scheinwerfer (TMS) links: AHL-Fehler | 0 |
| 0x8041FC | Treiber-Modul Scheinwerfer (TMS) links: Design- oder Seitenmarkierungsleuchte links defekt | 0 |
| 0x8041FD | Treiber-Modul Scheinwerfer (TMS) rechts: Interner Fehler | 0 |
| 0x8041FE | Treiber-Modul Scheinwerfer (TMS) rechts: Umgebungsfehler (Über- oder Unterspannung, Übertemperatur) | 0 |
| 0x8041FF | Treiber-Modul Scheinwerfer (TMS) links: Codierfehler | 0 |
| 0x804200 | Treiber-Modul Scheinwerfer (TMS) rechts: Design- oder Seitenmarkierungsleuchte rechts hat Kurzschluss | 0 |
| 0x804201 | Treiber-Modul Scheinwerfer (TMS) rechts: Tagfahrlicht- oder Positionslichtleuchte rechts hat Kurzschluss | 0 |
| 0x804243 | Außenspiegel links (LIN): Antrieb: defekt | 0 |
| 0x804244 | Außenspiegel links (LIN): Antrieb Beiklappen: defekt | 0 |
| 0x804245 | Außenspiegel links (LIN): Poti: defekt | 0 |
| 0x804246 | Außenspiegel links (LIN): Heizung oder Elektro-Chrome: defekt | 0 |
| 0x804247 | Außenspiegel links (LIN): Antrieb: Endanschlag nicht erreicht | 0 |
| 0x804248 | Außenspiegel links (LIN): Fahrspurwechselwarnung meldet Defekt im Spiegel | 0 |
| 0x804253 | Außenspiegel rechts (LIN): Antrieb: defekt | 0 |
| 0x804254 | Außenspiegel rechts (LIN): Antrieb Beiklappen: defekt | 0 |
| 0x804255 | Außenspiegel rechts (LIN): Poti: defekt | 0 |
| 0x804256 | Außenspiegel rechts (LIN): Heizung oder Elektro-Chrome: defekt | 0 |
| 0x804257 | Außenspiegel rechts (LIN): Antrieb: Endanschlag nicht erreicht | 0 |
| 0x804258 | Außenspiegel rechts (LIN): Fahrspurwechselwarnung meldet Defekt im Spiegel | 0 |
| 0x804260 | Außenspiegel Überspannung | 1 |
| 0x804261 | Außenspiegel Unterspannung | 1 |
| 0x804262 | Außenspiegel (LIN): Beiklappen Wiederholsperre aktiv | 1 |
| 0x804265 | Außenspiegel links, rechts Übertemperatur | 1 |
| 0x804280 | Frontwischer, Leitung Wischer langsam: Kurzschluss nach Masse | 0 |
| 0x804281 | Frontwischer, Leitung Wischer langsam | 0 |
| 0x804282 | Frontwischer, Leitung Wischer schnell: Kurzschluss nach Masse | 0 |
| 0x804283 | Frontwischer, Leitung Wischer schnell | 0 |
| 0x804285 | Scheinwerferreinigungsanlage (SRA): Leitung von Relais zu SRA unterbrochen | 0 |
| 0x804286 | Scheinwerferreinigungsanlage (SRA): Relais defekt oder Leitung zum Relais unterbrochen oder Kurzschluss nach plus | 0 |
| 0x804287 | Waschwasser-Pumpe hinten: Kurzschluss nach Masse | 0 |
| 0x804288 | Waschwasser-Pumpe hinten: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804289 | Waschwasser-Pumpe vorne: Kurzschluss nach Masse | 0 |
| 0x80428A | Waschwasser-Pumpe vorne: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80428B | Scheinwerferreinigungsanlage (SRA): Kurzschluss nach Masse | 0 |
| 0x80428E | Frontwischer: Fehler Motorstromüberwachung oder Wischer schwergängig | 0 |
| 0x80428F | Frontwischer, Leitung Rückstellkontakt: Kurzschluss nach Masse | 0 |
| 0x804290 | Frontwischer, Leitung Rückstellkontakt: Kurzschluss nach Plus  oder Leitungsunterbrechung | 0 |
| 0x804292 | Frontwischer Leitung 1,2, KS nach Plus | 0 |
| 0x804293 | Frontwischer: Blockiert | 1 |
| 0x8042A0 | Frontwischer (LIN): Codierung ungültig | 0 |
| 0x8042A1 | Frontwischer (LIN): Hardwarefehler Beifahrerseite | 0 |
| 0x8042A2 | Frontwischer (LIN): Überlast Wischermotor Beifahrerseite | 0 |
| 0x8042A3 | Frontwischer (LIN): Nicht codiert | 0 |
| 0x8042A4 | Frontwischer (LIN): Hardwarefehler Fahrerseite | 0 |
| 0x8042A5 | Frontwischer (LIN): Alive-Zaehler-Fehler | 0 |
| 0x8042A6 | Frontwischer (LIN): Blockierung Fahrerseite | 0 |
| 0x8042A7 | Frontwischer (LIN): Unterspannung | 1 |
| 0x8042A8 | Frontwischer (LIN): Überlast Wischermotor Fahrerseite | 0 |
| 0x8042A9 | Frontwischer (LIN): Blockierung Beifahrerseite | 0 |
| 0x8042AA | Frontwischer (LIN): Überspannung | 1 |
| 0x8042AB | Frontwischer (LIN): Noch nicht initialisiert oder Initialisierung fehlgeschlagen | 0 |
| 0x8042AC | Frontwischer (LIN): Kommunikationsfehler zwischen den Motoren Fahrerseite und Beifahrerseite | 0 |
| 0x8042C0 | Ausgang Innenbeleuchtung 1 hat Kurzschluss | 0 |
| 0x8042C1 | Ausgang Innenbeleuchtung 2 hat Kurzschluss | 0 |
| 0x8042C2 | Ausgang Innenbeleuchtung 3 hat Kurzschluss | 0 |
| 0x8042C3 | Ausgang Innenbeleuchtung 4 hat Kurzschluss | 0 |
| 0x8042C4 | Ausgang Innenbeleuchtung 5 hat Kurzschluss | 0 |
| 0x8042C5 | Ausgang Innenbeleuchtung 0 hat Kurzschluss | 0 |
| 0x8042C6 | Ausgang Innenbeleuchtung 6 hat Kurzschluss | 0 |
| 0x8042C7 | Ausgang Innenbeleuchtung 7 hat Kurzschluss | 0 |
| 0x8042C8 | Ausgang Innenbeleuchtung 1 defekt | 0 |
| 0x8042C9 | Ausgang Innenbeleuchtung 2 defekt | 0 |
| 0x8042CA | Ausgang Innenbeleuchtung 3 defekt | 0 |
| 0x8042CB | Ausgang Innenbeleuchtung 4 defekt | 0 |
| 0x8042CC | Ausgang Innenbeleuchtung 5 defekt | 0 |
| 0x8042CE | Taster Innenlicht hinten: Taster hängt oder Kurzschluss nach Masse | 0 |
| 0x8042CF | Taster Innenlicht vorne: Taster hängt oder Kurzschluss nach Masse | 0 |
| 0x8042D2 | Ausgang Innenbeleuchtung 8 hat Kurzschluss | 0 |
| 0x8042D3 | Taster Leselicht hinten links: Kurzschluss | 0 |
| 0x8042D4 | Taster Leselicht hinten rechts: Kurzschluss | 0 |
| 0x8042D5 | Taster Leselicht hinten links: Taster hängt | 0 |
| 0x8042D6 | Taster Leselicht hinten rechts: Taster hängt | 0 |
| 0x8042D7 | Taster Leselicht vorne links: Taster hängt | 0 |
| 0x8042D8 | Taster Leselicht vorne rechts: Taster hängt | 0 |
| 0x8042DA | Leselicht hinten links: Leitungsbruch oder Leuchtmittel defekt | 0 |
| 0x8042DB | Leselicht hinten rechts: Leitungsbruch oder Leuchtmittel defekt | 0 |
| 0x8042DC | Innenlichteinheit (ILE): Interner Fehler | 0 |
| 0x8042DD | Leseleuchten vorne: Ein Leuchtmittel defekt oder Leitungsunterbrechung | 0 |
| 0x8042DE | Innenlichteinheit (ILE): Innenlicht vorne Leuchtmittel defekt oder Leitungsbruch | 0 |
| 0x8042DF | Innenlichteinheit (ILE): Innenlicht hinten Leuchtmittel defekt oder Leitungsbruch | 0 |
| 0x8042E0 | Innenlichteinheit (ILE): Übertemperatur | 0 |
| 0x8042E1 | Ausgang Innenbeleuchtung 0 defekt | 0 |
| 0x8042E2 | Ausgang Innenbeleuchtung 6 defekt | 0 |
| 0x8042E3 | Ausgang Innenbeleuchtung 7 defekt | 0 |
| 0x8042E4 | Ausgang Innenbeleuchtung 8 defekt | 0 |
| 0x8042E8 | Innenlichteinheit 3 (ILE3): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E9 | Innenlichteinheit 3 (ILE3): Taster Leselicht links hängt | 0 |
| 0x8042EA | Innenlichteinheit 3 (ILE3): Taster Leselicht rechts hängt | 0 |
| 0x804340 | Außenspiegel links oder rechts, Heizung: Kurzschluss nach Masse | 0 |
| 0x804341 | Außenspiegel links oder rechts, Heizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804342 | Waschdüsenheizung: Kurzschluss nach Masse | 0 |
| 0x804343 | Waschdüsenheizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804349 | Heckscheibenheizung, Relais: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x80434A | Heckscheibenheizung, Relais: Leitung zum Relais unterbrochen oder Kurzschluss nach Plus | 0 |
| 0x804360 | Wasserventil Fahrer: Kurzschluss nach Masse | 0 |
| 0x804361 | Wasserventil Fahrer: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804363 | Drucksensor: Kurzschluss nach Masse | 0 |
| 0x804364 | Drucksensor: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x804365 | Fondsschichtungspotentiometer: Kurzschluss nach Masse | 0 |
| 0x804366 | Fondsschichtungspotentiometer: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x80436A | Zusatzwasserpumpe: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x80436B | Zusatzwasserpumpe: Kurzschluss nach Masse | 0 |
| 0x80436E | Kompressorkupplung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80436F | Kompressorkupplung: Kurzschluss nach Masse | 0 |
| 0x804370 | Kompressorventil: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804371 | Kompressorventil: Kurzschluss nach Masse | 0 |
| 0x804372 | Wasserventil Beifahrer: Kurzschluss nach Masse | 0 |
| 0x804373 | Wasserventil Beifahrer: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804374 | Umschaltventil: Kurzschluss nach Masse | 0 |
| 0x804375 | Umschaltventil: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804397 | AUC-Sensor: Kurzschluss nach Masse | 0 |
| 0x804398 | AUC-Sensor: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804399 | AUC-Sensor: Ungültiges PWM-Signal | 0 |
| 0x8043A0 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Schwerer HW-Fehler Mikrocontroller | 0 |
| 0x8043A1 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Kurzschluss KL31_ELV_VR gegen Masse | 0 |
| 0x8043A2 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Sensorstatus nicht vertrauenswürdig | 0 |
| 0x8043A3 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Fehler H-Brücke | 0 |
| 0x8043A4 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - HW-Fehler Sensor | 0 |
| 0x8043A5 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - ELV Spannungsversorgung | 0 |
| 0x8043A6 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Fehler EEPROM | 0 |
| 0x8043A7 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Authentisierungsfehler | 0 |
| 0x8043A8 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Keine Motoraktivierung | 0 |
| 0x8043A9 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - ELV-Master-Request abgelehnt (Timeout oder doppelte Anfrage) | 0 |
| 0x8043AA | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Timeout bei Motorverriegelung | 0 |
| 0x8043AB | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Timeout bei Motorentriegelung (Verspannte Lenksäule) | 0 |
| 0x8043AC | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Fehlerhafte Request-Botschaft vom ELV-Master | 0 |
| 0x8043AD | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Überlast Motorbrücke | 0 |
| 0x8043B0 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL31_ELV_VR gegen Batteriespannung | 0 |
| 0x8043B1 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL31_ELV_VR gegen Masse | 0 |
| 0x8043B2 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL30_ELV gegen Batteriespannung | 0 |
| 0x8043B3 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL30_ELV gegen Masse | 0 |
| 0x8043B4 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach PowerOn des ELV-SG | 0 |
| 0x8043B5 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - ungültige CRC in der Status-Nachricht vom ELV-SG | 0 |
| 0x8043B6 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach Request (Entriegeln) vom ELV-Master | 0 |
| 0x8043B7 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach Request (Verriegeln) vom ELV-Master | 0 |
| 0x8043B8 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach Anfrage-Abschaltung vom ELV-Master | 0 |
| 0x8043B9 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Fehlerhafter Zykluszähler in der Status-Botschaft vom ELV-SG | 0 |
| 0x8043BA | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - ungültiger oder unerwarteter ELV-Status vom ELV-SG | 0 |
| 0x8043BB | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Leitungsunterbrechung KL30_ELV | 0 |
| 0x8043BC | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Leitungsunterbrechung KL31_ELV_VR | 0 |
| 0x804413 | Telestarthandsender (THS): Unterspannung Batterie | 0 |
| 0x804414 | Fond-Fernbedienung (FFB):Unterspannung Batterie | 0 |
| 0x804415 | ID-Geber (IDG): Unterspannung Batterie | 0 |
| 0x804416 | Telestarthandsender (THS): Spielschutz für Timeranforderungen/Direktstart | 1 |
| 0x804417 | Bewegungssensor im Schlüssel: Defekt | 1 |
| 0x80442A | Bedieneinheit Licht (BEL), (LIN): Drehschalter defekt | 0 |
| 0x804443 | Innenspiegel: Fehler in Blendsensor | 0 |
| 0x804444 | Innenspiegel: Fehler in Umlichtsensor | 0 |
| 0x804445 | Innenspiegel, Kompass, Fehler in Kompass-Anzeige | 0 |
| 0x804446 | Innenspiegel: Fehler in Sensor Magnetfeld | 0 |
| 0x804447 | Innenspiegel: interner Fehler | 0 |
| 0x804448 | Innenspiegel, Elektrochrom: Kurzschluss nach Plus | 0 |
| 0x804449 | Innenspiegel, Elektrochrom: Kurzschluss nach Masse | 0 |
| 0x80444A | Innenspiegel, Elektrochrom: interner Fehler | 0 |
| 0x80444B | Innenspiegel, ETC: Kurzschluss nach Plus | 0 |
| 0x80444C | Innenspiegel, ETC: Kurzschluss nach Masse | 0 |
| 0x80444D | Innenspiegel: Unterspannung erkannt | 1 |
| 0x80444E | Innenspiegel: Überspannung erkannt | 1 |
| 0x80444F | Innenspiegel: Kodierungsfehler | 0 |
| 0x804464 | UGDO: Kodierdaten fehlerhaft, UGDO Checksum | 0 |
| 0x804465 | UGDO: Kodierdaten fehlerhaft, FEM Checksum | 0 |
| 0x804466 | UGDO: Kodierung, Zeitueberschreitung | 0 |
| 0x804467 | UGDO: Kodierung nicht durchführbar | 0 |
| 0x804468 | UGDO: Kodierung, ungueltige Adresse | 0 |
| 0x804470 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Interner Elektronikfehler | 0 |
| 0x804471 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Spiegel-Taster hängt | 0 |
| 0x804472 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Signal Fenster-Taster ungültig | 0 |
| 0x804473 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Signal Spiegel-Taster ungültig | 0 |
| 0x804474 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Fenster-Taster hängt | 0 |
| 0x804475 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): HK-Wippe hängt | 0 |
| 0x804477 | Fensterheber Beifahrer vorne, Taster: Taster hängt | 0 |
| 0x804478 | Fensterheber Beifahrer vorne, Taster: Kurzschluss nach Masse | 0 |
| 0x804479 | Fensterheber Beifahrer hinten, Taster: Kurzschluss nach Masse | 0 |
| 0x80447A | Fensterheber Beifahrer hinten, Taster: Taster hängt | 0 |
| 0x80447B | Fensterheber Fahrer hinten, Taster: Kurzschluss nach Masse | 0 |
| 0x80447C | Fensterheber Fahrer hinten, Taster: Taster hängt | 0 |
| 0x80447D | ABW-Türschloss Fahrer: Peripheriefehler | 1 |
| 0x80447E | ABW-Türschloss Fahrer: Hardwarefehler | 1 |
| 0x804480 | ABW-Türschloss Beifahrer: Peripheriefehler | 1 |
| 0x804481 | ABW-Türschloss Beifahrer: Hardwarefehler | 1 |
| 0x804483 | RLS (LIN-Slave): Fehler Beschlagsensor | 0 |
| 0x804484 | RLS (LIN-Slave): Hardwarefehler Regensensor | 0 |
| 0x804485 | RLS (LIN-Slave): Hardwarefehler der Solarsensorik | 0 |
| 0x804486 | RLS (LIN-Slave): Hardwarefehler Lichtsensor | 0 |
| 0x804487 | RLS (LIN-Slave): Regensensor nicht auf Scheibe eingemessen | 0 |
| 0x804488 | RLS (LIN-Slave): Scheibentyp für Lichtsensor nicht festgelegt | 0 |
| 0x804489 | RLS (LIN-Slave): Überspannung | 1 |
| 0x80448A | RLS (LIN-Slave): Übertemperatur | 1 |
| 0x8044A0 | DC-DC-Wandler: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung oder interner Defekt | 0 |
| 0x8044A1 | DC-DC-Wandler: Übertemperatur | 0 |
| 0x8044A3 | Leitung Hupe (C_HORN): Kurzschluss nach Masse oder Sicherung offen | 0 |
| 0x8044A4 | Leitung Hupe (C_HORN): Kurzschluss nach Plus oder Relaiskleber oder Leitungsunterbrechung | 0 |
| 0x8044A5 | Leitung Hupe (C_HORN): Hupe Relais defekt mit NC (normally closed) Kontakt | 0 |
| 0x8044B0 | Schaltpaddles: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8044B1 | Schaltpaddles: Überlast oder Kurzschluss nach Masse | 0 |
| 0x8044B3 | Schaltpaddles: Dauerbetätigung | 1 |
| 0x8044B5 | Schaltpaddles: Mehrfachbetätigung | 1 |
| 0x8044B8 | Treibermodul Scheinwerfer (TMS3) links: Unplausibles Verhalten Blinkfunktion | 0 |
| 0x8044B9 | Treibermodul Scheinwerfer (TMS3) rechts: Unplausibles Verhalten Blinkfunktion | 0 |
| 0x8044BA | LED-Hauptlicht-Modul (LHM2) links: Unplausibler Zustand Abblendlichtfunktion | 0 |
| 0x8044BB | LED-Hauptlicht-Modul (LHM2) rechts: Unplausibler Zustand Abblendlichtfunktion | 0 |
| 0x8044BC | Layering LIN-Slave 1 hat Fehler erkannt | 0 |
| 0x8044BD | Layering LIN-Slave 2 hat Fehler erkannt | 0 |
| 0x8044BE | Layering LIN-Slave 3 hat Fehler erkannt | 0 |
| 0x8044BF | Layering LIN-Slave 4 hat Fehler erkannt | 0 |
| 0x8044C0 | Layering LIN-Slave 5 hat Fehler erkannt | 0 |
| 0x8044C1 | Layering LIN-Slave 6 hat Fehler erkannt | 0 |
| 0x8044C2 | Layering LIN-Slave 7 hat Fehler erkannt | 0 |
| 0x8044C3 | Layering LIN-Slave 8 hat Fehler erkannt | 0 |
| 0x8044C4 | Layering LIN-Slave 9 hat Fehler erkannt | 0 |
| 0x8044C5 | Layering LIN-Slave 10 hat Fehler erkannt | 0 |
| 0x8044C6 | Layering LIN-Slave 11 hat Fehler erkannt | 0 |
| 0x8044C7 | Layering LIN-Slave 12 hat Fehler erkannt | 0 |
| 0x8044C8 | Layering LIN-Slave 13 hat Fehler erkannt | 0 |
| 0x8044C9 | Layering LIN-Slave 14 hat Fehler erkannt | 0 |
| 0x8044CA | Layering LIN-Slave 15 hat Fehler erkannt | 0 |
| 0x8044CB | Layering LIN-Slave 16 hat Fehler erkannt | 0 |
| 0x8044CC | Layering LIN-Slave 17 hat Fehler erkannt | 0 |
| 0x8044CD | Layering LIN-Slave 18 hat Fehler erkannt | 0 |
| 0x8044CE | Layering LIN-Slave 19 hat Fehler erkannt | 0 |
| 0x8044CF | Layering LIN-Slave 20 hat Fehler erkannt | 0 |
| 0x8044D0 | Layering LIN-Slave 21 hat Fehler erkannt | 0 |
| 0x8044D1 | Layering LIN-Slave 22 hat Fehler erkannt | 0 |
| 0x8044D2 | Layering LIN-Slave 23 hat Fehler erkannt | 0 |
| 0x8044D3 | Layering LIN-Slave 24 hat Fehler erkannt | 0 |
| 0x8044D4 | Layering LIN-Slave 25 hat Fehler erkannt | 0 |
| 0x8044D5 | Layering LIN-Slave 26 hat Fehler erkannt | 0 |
| 0x8044D6 | Innenlicht Layering LIN: Fehler bei Autoadressierung aufgetreten | 0 |
| 0x8044D7 | Innenlicht Layering LIN: Anzahl Layering Slaves nicht korrekt | 0 |
| 0x804842 | Vorrastkontakt (VRK) der Soft-Close-Automatik(SCA): Kurzschluss Batteriespannung oder Leitungsunterbrechung oder Soft-Close-Automatik klemmt oder Heckklappenkontakt defekt | 0 |
| 0x804843 | Heckklappensensor defekt | 0 |
| 0x804844 | Türkontakt Fahrertür Hinten Oben: Leitungsunterbrechung/Kurzschluss nach Batteriespannung | 0 |
| 0x804845 | Türkontakt Fahrertür Hinten Oben: Unplausibler Zustand | 0 |
| 0x804846 | Türkontakt Fahrertür Hinten Oben: Kurzschluss nach Masse | 0 |
| 0x804847 | Türkontakt Beifahrertür Hinten Oben: Kurzschluss nach Masse | 0 |
| 0x804848 | Türkontakt Beifahrertür Hinten Oben: Unplausibler Zustand | 0 |
| 0x804849 | Türkontakt Beifahrertür Hinten Oben: Leitungsunterbrechung/Kurzschluss nach Batteriespannung | 0 |
| 0x80484A | Taster Heckklappe Aussen (T_HKL_S): Dauerbetätigung | 0 |
| 0x80484B | Taster Heckscheibe (TOEHS)/ Frontklappe (TOEFKI): Dauerbetätigung | 0 |
| 0x80484C | Vorrastkontakt (VRK) der Soft-Close-Automatik(SCA): Kurzschluss Masse oder Soft-Close-Automatik klemmt oder Heckklappenkontakt defekt | 0 |
| 0x80484D | Öffnen Heckklappe blockiert, wegen fehlendem Status des Anhänger-Anschluss-Geräts (AAG) | 1 |
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
| 0x8048A0 | Heckwischer: Kurzschluss nach Masse | 0 |
| 0x8048A1 | Heckwischer, Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8048A3 | Heckwischer defekt oder Wischer Rücksetzkontakt schaltet nicht ein  (Heckwischer Blockiert) | 0 |
| 0x8048A4 | Heckwischer_2: Relais defekt | 0 |
| 0x8048A5 | Heckwischer_2: Kurzschluss nach Plus oder Relaiskleber | 0 |
| 0x8048A6 | Heckwischer_2: Kurzschluss nach Masse oder Sicherung defekt | 0 |
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
| 0x8049A0 | Schalterblock Sitz Extensions Fahrer: interner Fehler | 0 |
| 0x8049A1 | Schalterblock Sitz Extensions Fahrer: Taster hängt | 0 |
| 0x8049A4 | Schalterblock Sitz Extensions Beifahrer: interner Fehler | 0 |
| 0x8049A5 | Schalterblock Sitz Extensions Beifahrer: Taster hängt | 0 |
| 0xD9040A | FA-CAN Control Module Bus OFF | 0 |
| 0xD9050A | ZSG-CAN Control Module Bus OFF | 0 |
| 0xD90BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD90C00 | LIN Master A: Kurzschluss | 0 |
| 0xD90C02 | LIN Master A: Kommunikation gestört | 0 |
| 0xD90C03 | LIN Master B: Kurzschluss | 0 |
| 0xD90C05 | LIN Master B: Kommunikation gestört | 0 |
| 0xD90C06 | LIN Master C: Kurzschluss | 0 |
| 0xD90C08 | LIN Master C: Kommunikation gestört | 0 |
| 0xD90C09 | LIN Master D: Kurzschluss | 0 |
| 0xD90C0B | LIN Master D: Kommunikation gestört | 0 |
| 0xD90C0C | LIN Master E: Kurzschluss | 0 |
| 0xD90C0E | LIN Master E: Kommunikation gestört | 0 |
| 0xD90C0F | LIN Master F: Kurzschluss | 0 |
| 0xD90C11 | LIN Master F: Kommunikation gestört | 0 |
| 0xD90C12 | LIN Master G: Kurzschluss | 0 |
| 0xD90C14 | LIN Master G: Kommunikation gestört | 0 |
| 0xD90C15 | LIN Master H: Kurzschluss | 0 |
| 0xD90C17 | LIN Master H: Frame Error | 0 |
| 0xD90C18 | LIN Master I: Kurzschluss | 0 |
| 0xD90C1A | LIN Master I: Kommunikation gestört | 0 |
| 0xD90C1B | LIN Master J: Kurzschluss | 0 |
| 0xD90C1D | LIN Master J: Kommunikation gestört | 0 |
| 0xD90D00 | Sender-Empfänger Funk (1. FBD II) (LIN): Falsche Variante verbaut | 0 |
| 0xD90D01 | Sender-Empfänger Funk (1. FBD II) (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D06 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): falsche Variante verbaut | 0 |
| 0xD90D07 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D0A | Außenspiegel links (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D0B | Außenspiegel links (LIN): nicht erwarteter LIN-Slave | 0 |
| 0xD90D0D | Außenspiegel rechts (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D0F | Außenspiegel rechts (LIN): nicht erwarteter LIN-Slave | 0 |
| 0xD90D11 | SMO: Fehlender LIN-Slave | 0 |
| 0xD90D12 | SMO: nicht erwarteter LIN-Slave | 0 |
| 0xD90D16 | Bedieneinheit Licht (BEL), (LIN): falsche Variante verbaut | 0 |
| 0xD90D17 | Bedieneinheit Licht (BEL), (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D19 | Bedieneinheit Fahrerassistenzsysteme (LIN): Falsche Variante verbaut | 0 |
| 0xD90D1A | Bedieneinheit Fahrerassistenzsysteme (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D1B | Bedieneinheit Fahrerassistenzsysteme (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D20 | Frontwischer (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D21 | Frontwischer (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D25 | Innenspiegel: Falsche Variante verbaut | 0 |
| 0xD90D26 | Innenspiegel: Fehlender LIN-Slave | 0 |
| 0xD90D27 | Innenspiegel: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D28 | RLS (LIN-Slave): falsche Variante verbaut | 0 |
| 0xD90D29 | RLS (LIN-Slave): Fehlender LIN-Slave | 0 |
| 0xD90D2A | RLS (LIN-Slave): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D2B | UGDO: Falsche Variante verbaut | 0 |
| 0xD90D2C | UGDO: Fehlender LIN-Slave | 0 |
| 0xD90D2D | UGDO: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D2E | Treiber-Modul Scheinwerfer (TMS) links: Falsche Variante verbaut | 0 |
| 0xD90D2F | Treiber-Modul Scheinwerfer (TMS) links: Fehlender LIN-Slave | 0 |
| 0xD90D30 | Treiber-Modul Scheinwerfer (TMS) links: nicht erwarteter LIN-Slave | 0 |
| 0xD90D31 | Treiber-Modul Scheinwerfer (TMS) rechts: Falsche Variante verbaut | 0 |
| 0xD90D32 | Treiber-Modul Scheinwerfer (TMS) rechts: Fehlender LIN-Slave | 0 |
| 0xD90D33 | Treiber-Modul Scheinwerfer (TMS) rechts: nicht erwarteter LIN-Slave | 0 |
| 0xD90D37 | Innenlichteinheit (ILE): Falsche Variante verbaut | 0 |
| 0xD90D38 | Innenlichteinheit (ILE): Fehlender LIN-Slave | 0 |
| 0xD90D39 | Innenlichteinheit (ILE): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D3B | Sitzheizung FA (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D3C | Sitzheizung FA (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D3E | Sitzheizung BF (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D3F | Sitzheizung BF (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D41 | Sitzheizung FA hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D42 | Sitzheizung FA hinten (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D44 | Sitzheizung BF hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D45 | Sitzheizung BF hinten (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D47 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D48 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D4A | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D4B | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D4D | Gurtzubringer (LIN), FA: Fehlender LIN-Slave | 0 |
| 0xD90D4E | Gurtzubringer (LIN), FA: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D50 | Gurtzubringer (LIN), BF: Fehlender LIN-Slave | 0 |
| 0xD90D51 | Gurtzubringer (LIN), BF: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D63 | Innenlichteinheit 3 (ILE3):  Falsche Variante verbaut | 0 |
| 0xD90D64 | Innenlichteinheit 3 (ILE3): Fehlender LIN-Slave | 0 |
| 0xD90D65 | Innenlichteinheit 3 (ILE3): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D71 | Schalterblock Sitz Extensions Fahrer: Fehlender LIN-Slave | 0 |
| 0xD90D72 | Schalterblock Sitz Extensions Fahrer: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D77 | Schalterblock Sitz Extensions Beifahrer: Fehlender LIN-Slave | 0 |
| 0xD90D78 | Schalterblock Sitz Extensions Beifahrer: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D8C | ABW-Türschloss Fahrer: Fehlender LIN-Slave | 0 |
| 0xD90D8D | ABW-Türschloss Beifahrer: Fehlender LIN-Slave | 0 |
| 0xD91495 | CAN-Botschaft, Objektdaten stufenloser Fernlicht-Assistent (OBJDT_GMAB_ASST): Timeout | 1 |
| 0xD91497 | CAN-Botschaft, Status Precrash Master (ST_PCSH_MST): Timeout | 1 |
| 0xD914A5 | CAN-Botschaft, Drehmoment Kurbelwelle 1 (TORQ_CRSH_1): Timeout | 1 |
| 0xD91573 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): Timeout | 1 |
| 0xD91599 | CAN-Botschaft, Längsbeschleunigung Schwerpunkt (ACLNX_MASSCNTR): Timeout | 1 |
| 0xD9159B | CAN-Botschaft, Steuerung Crash (CTR_CR): Timeout | 1 |
| 0xD9159F | CAN-Botschaft, Giergeschwindigkeit Fahrzeug (VYAW_VEH): Timeout | 1 |
| 0xD915A1 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Timeout | 1 |
| 0xD915B9 | CAN-Botschaft, Wärmemanagement Motorsteuerung (HT_MGT_ENG_CTR): Timeout | 1 |
| 0xD915D0 | CAN-Botschaft, Absicherung Antriebsstrang (SAFG_PT): Timeout | 1 |
| 0xD9161E | CAN-Botschaft, Status Night-Vision  (STAT_NIVI): Timeout | 1 |
| 0xD91654 | CAN-Botschaft, Ist Drehzahl Rad ungesichert (AVL_RPM_WHL_UPRT): Timeout | 1 |
| 0xD91681 | CAN-Botschaft, Bordnetz Spannungswert (BN_UVL): Timeout | 1 |
| 0xD91692 | CAN-Botschaft, Steuerung Fernlicht-Assistent (CTR_MAB_ASST): Timeout | 1 |
| 0xD91697 | CAN-Botschaft, Status Gurt Kontakt Sitzbelegung (ST_BLT_CT_SOCCU): Timeout | 1 |
| 0xD916C3 | CAN-Botschaft, Status Notruf (ST_ECAL): Timeout | 1 |
| 0xD916CA | CAN-Botschaft, Außentemperatur (A_TEMP): Timeout | 1 |
| 0xD916E4 | CAN-Botschaft, Status Anhänger (STAT_ANHAENGER): Timeout | 1 |
| 0xD916ED | CAN-Botschaft, Status Fahrzeugstillstand (ST_VHSS): Timeout | 1 |
| 0xD916F8 | CAN-Botschaft, Uhrzeit-Datum (UHRZEIT_DATUM): Timeout | 1 |
| 0xD91701 | CAN-Botschaft, Ist Lenkwinkel Fahrer (AVL_STEA_DV): Timeout | 1 |
| 0xD91702 | CAN-Botschaft, Lenkwinkel Vorderachse Effektiv (STEA_FTAX_EFFV): Timeout | 1 |
| 0xD9170B | CAN-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): Timeout | 1 |
| 0xD9171C | CAN-Botschaft, Anzeige Fahrerassistenzsystem (DISP_DRASY): Timeout | 1 |
| 0xD91727 | CAN-Botschaft, Status Spurverlassenswarnsystem (ST_TLC): Timeout | 1 |
| 0xD91728 | CAN-Botschaft, Relativzeit (RELATIVZEIT): Timeout | 1 |
| 0xD91730 | CAN-Botschaft, Kilometerstand-Reichweite (KILOMETERSTAND): Timeout | 1 |
| 0xD9173B | CAN-Botschaft, Anzeige LDM 2 (DISP_LDM_2): Timeout | 1 |
| 0xD91742 | CAN-Botschaft, Status Cabrio Dach (ST_CABRF): Timeout oder CRC-Fehler | 1 |
| 0xD9174A | CAN-Botschaft, Navigation GPS 1 (NAV_GPS1): Timeout | 1 |
| 0xD9174C | CAN-Botschaft, Navigation GPS 2 (NAV_GPS2): Timeout | 1 |
| 0xD9174E | CAN-Botschaft, Navigation System Information (NAV_SYS_INF): Timeout | 1 |
| 0xD91793 | CAN-Botschaft, LCD Helligkeit Regelung (LCD_BRIG_CLCTR): Timeout | 1 |
| 0xD917A0 | CAN-Botschaft, Fahrzeugzustand (FZZSTD): Timeout | 1 |
| 0xD917A7 | CAN-Botschaft, Konfiguration Schalter Fahrdynamik (SU_SW_DRDY): Timeout | 1 |
| 0xD917B3 | CAN-Botschaft, Powermanagement Verbrauchersteuerung (POWERMGMT_CTR_COS): Timeout | 1 |
| 0xD917F9 | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Timeout | 1 |
| 0xD91837 | CAN-Botschaft, Status Kamera Kalibrierung (ST_CAM_CAL): Timeout | 1 |
| 0xD91C86 | CAN-Botschaft, Status Funktionssicherheit (ST_FSFY): Timeout | 1 |
| 0xD91C89 | CAN-Botschaft, Status Überwachung Funktionssicherheit (ST_MONI_FSFY ): Timeout | 1 |
| 0xD91C93 | CAN-Botschaft, IPC Gateway (IPC_GW): Timeout | 1 |
| 0xD91CE4 | CAN-Botschaft, Höhenstand Fahrzeug gefiltert (HGLV_VEH_FILT): Timeout | 1 |
| 0xD91D8A | CAN-Botschaft, Steuerung Vibration Lenkrad (CTR_VIB_STW): Timeout | 1 |
| 0xD91DE0 | CAN-Botschaft, Status Licht Außen Frontelektronik_1 Links (ST_LP_EX_FE_1_LH): Timeout | 1 |
| 0xD91DE6 | CAN-Botschaft, Status Licht Außen Frontelektronik_1 Rechts (ST_LP_EX_FE_1_RH): Timeout | 1 |
| 0xD91DFB | CAN-Botschaft, Status Licht Außen Frontelektronik_2 Links (ST_LP_EX_FE_2_LH): Timeout | 1 |
| 0xD91DFD | CAN-Botschaft, Status Licht Außen Frontelektronik_2 Rechts (ST_LP_EX_FE_2_RH): Timeout | 1 |
| 0xD91E2A | CAN-Botschaft, Status BFS (STAT_BFS): Timeout | 1 |
| 0xD91E31 | CAN-Botschaft, Status Gentleman FAS (STAT_GENT_FAS): Timeout | 1 |
| 0xD91E32 | CAN-Botschaft, Status FAS (STAT_FAS): Timeout | 1 |
| 0xD91E42 | CAN-Botschaft, Status Klima Front (STAT_KLIMA_FRONT): Timeout | 1 |
| 0xD91E46 | CAN-Botschaft, Status Klima Front Bedienteil (STAT_KLIMA_BEDIENTEIL): Timeout | 1 |
| 0xD91EA3 | CAN-Botschaft, Steuerung CAS Sicherheitsfahrzeug (CTR_CAS_SFYC): Timeout | 1 |
| 0xD91EBF | CAN-Botschaft, Steuerung Wasserventile (CTR_HVEH): Timeout | 1 |
| 0xD91EDA | CAN-Botschaft, Status Heckklappenlift (STAT_HKL): Timeout | 1 |
| 0xD91EF0 | CAN-Botschaft, Status Klima Standfunktionen (STAT_KLIMA_STAND): Timeout | 1 |
| 0xD91F0B | Flexray-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): Timeout | 1 |
| 0xD91F44 | CAN-Botschaft, Steuerung Cabrio Dach (CTR_CABRF): Timeout | 1 |
| 0xD91F69 | CAN-Botschaft, Status Reifen (ST_TYR): Timeout | 1 |
| 0xD91F85 | CAN-Botschaft, Steuerung Anzeige Warnung Fahrspurwechsel (CTR_DISP_WARN_LNCH): Timeout | 1 |
| 0xD91FF9 | Flexray-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Timeout | 1 |
| 0xD9201E | CAN-Botschaft, Status Powermanagement Gateway (ST_PWMG_GW): Timeout | 1 |
| 0xD94001 | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): CRC-Fehler oder Alive | 1 |
| 0xD94002 | CAN-Botschaft, Drehmoment Kurbelwelle 1 (TORQ_CRSH_1): CRC-Fehler oder Alive | 1 |
| 0xD94005 | CAN-Botschaft, Status Funktionssicherheit (ST_FSFY): CRC-Fehler oder Alive | 1 |
| 0xD94006 | CAN-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): CRC-Fehler oder Alive | 1 |
| 0xD94007 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): CRC-Fehler oder Alive | 1 |
| 0xD94010 | CAN-Botschaft, Absicherung Antriebsstrang (SAFG_PT): CRC-Fehler oder Alive | 1 |
| 0xD94013 | CAN-Botschaft, Steuerung CAS Sicherheitsfahrzeug (CTR_CAS_SFYC): CRC-Fehler oder Alive | 1 |
| 0xD94014 | CAN-Botschaft, Steuerung Vibration Lenkrad (CTR_VIB_STW): CRC-Fehler oder Alive | 1 |
| 0xD94015 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): CRC-Fehler oder Alive | 1 |
| 0xD94016 | CAN-Botschaft, Höhenstand Fahrzeug gefiltert (HGLV_VEH_FILT): CRC-Fehler oder Alive | 1 |
| 0xD94025 | CAN-Botschaft, Status Precrash Master (ST_PCSH_MST): CRC-Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | TMS_CODIERFEHLER_LIN | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | TMS_CODIERFEHLER_IDENT | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | STAT_KURZSCHLUSS_NACH_MASSE | 0/1 | High | 0x01 | - | - | - | - |
| 0x0004 | STAT_KURZSCHLUSS_NACH_PLUS | 0/1 | High | 0x02 | - | - | - | - |
| 0x0005 | STAT_LEITUNGSUNTERBRECHUNG_LED | 0/1 | High | 0x04 | - | - | - | - |
| 0x4000 | Anzahl der Klemme 30B Anforderungen und Verlaengerungen | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | Art der Abschaltung bzw Nichtabschaltung KL30F | 0-n | High | 0xFF | TAB_CAS_ART_ABSCHALTUNG_KL30F | - | - | - |
| 0x4002 | Batteriespannung Ende (bei Fehlerspeichereintrag) | mV | High | unsigned int | - | 15.0 | 1.0 | 0.0 |
| 0x4003 | Dauer KL15 ein | min | High | unsigned char | - | 5.0 | 1.0 | 0.0 |
| 0x4004 | Dauer KL30B ein | min | High | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x4005 | Grund der Abschaltung/Nichtabschaltung KL30F | 0-n | High | 0xFF | TAB_UW_GRUND_ABSCHALTUNG_KL30F | - | - | - |
| 0x4006 | KL15 Anteil | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4007 | Abschaltverhinderer Klemme 30B | 0-n | High | 0xFFFF | TAB_UW_ABSCHALTVERHINDERER_KL30B | - | - | - |
| 0x4008 | HW_DIGITAL_CLUTCH | 0/1 | High | 0xFF | - | - | - | - |
| 0x4009 | SW_COM_SIGNAL_CLUTCH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4020 | ELV Fehlerspeicher | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4021 | ELV-Fehlerzähler (Escape-Counter) ELV-Master | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4022 | ELV-Fehlerzähler (Escape-Counter) ELV-SG | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | ELV Status Fehler | 0-n | High | 0xFF | TAB_UW_ELV_STATUS_FEHLER | - | - | - |
| 0x4024 | Spannung KL30_ELV | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4025 | Spannung KL31_ELV_VR | V | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4027 | ELV Timeout-Ursache nach PowerOn | 0-n | High | 0xFF | TAB_UW_ZSG_ELV_URSACHE_TIMEOUT_POWER_ON | - | - | - |
| 0x4030 | INTERNER_FEHLER | 0-n | High | 0xFF | TAB_INTERNER_FEHLER | - | - | - |
| 0x4031 | STATUS_UNTERBRECHUNG | 0-n | High | 0xFF | TAB_STATUS_UNTERBRECHUNG | - | - | - |
| 0x4032 | TAB_STATUS_KURZSCHLUSS | 0-n | High | 0xFF | TAB_STATUS_UNTERBRECHUNG | - | - | - |
| 0x4033 | VERBAUORTTABELLE_LIN_SLAVES | 0-n | High | 0xFF | TAB_VERBAUORTTABELLE | - | - | - |
| 0x4034 | LIN_VERBAUORT_ANZAHL | Byte | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4036 | FEHLERART_HOD_SENSOR | 0-n | High | 0xFF | TAB_FEHLERART_HOD_SENSOR | - | - | - |
| 0x4040 | SPANNUNG_BORDNETZ | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4041 | KLEMMEN_STATUS | 0-n | High | 0xFF | TAB_UW_KLEMMEN_STATUS | - | - | - |
| 0x4042 | LICHTSCHALTER_STELLUNG | 0-n | High | 0xFF | TAB_UW_LICHTSCHALTER | - | - | - |
| 0x4043 | GRUND_UNTERSPANNUNGS_ABSCHALTUNG | 0-n | High | 0xFF | TAB_UW_GRUND_UNTERSPG_ABSCHALTUNG | - | - | - |
| 0x4044 | LAMPENMAPPING_FEHLER_TYPE | 0-n | High | 0xFF | TAB_UW_LAMPENMAPPING_FEHLER_TYPE | - | - | - |
| 0x4045 | LAMPENMAPPING_INDEX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4046 | LAMPENAUSGANG | 0-n | High | 0xFF | TAB_UW_AUSGANG_LEUCHTEN | - | - | - |
| 0x4047 | TEMP_EX_TMS | °C | High | signed char | - | 1.0 | 1.0 | -40.0 |
| 0x4048 | SPANNUNG_TMS | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x404E | LWR_SPG_SPUL_PRUEF | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4050 | LWR_ERROR_REASON | 0-n | High | 0xFF | TAB_UW_LWR_ERROR_REASON | - | - | - |
| 0x4051 | TAB_HECKKLAPPENSENSOR_DEFEKT | 0-n | High | 0xFF | TAB_HECKKLAPPENSENSOR_DEFEKT | - | - | - |
| 0x4060 | Außentemperatur über CAN | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4070 | FEHLERART_ILE | 0-n | High | 0xFF | TAB_FEHLERART_ILE | - | - | - |
| 0x4080 | Spannung KL30L1 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4081 | Spannung KL30L2 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4082 | LAST Motorstart | 0-n | High | 0xFF | TAB_UW_LAST_MOTORSTART | - | - | - |
| 0x4090 | UW_BLOCK_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40AC | Umweltdaten Spielschutz | 0-n | High | 0xFF | TAB_WAKEUP_SOURCES | - | - | - |
| 0x40AD | Umweltdaten Spielschutz | 0-n | High | 0xFF | TAB_WAKEUP_SOURCES | - | - | - |
| 0x40AE | Umweltdaten Spielschutz | 0-n | High | 0xFF | TAB_WAKEUP_SOURCES | - | - | - |
| 0x40AF | Umweltdaten Spielschutz | 0-n | High | 0xFF | TAB_WAKEUP_SOURCES | - | - | - |
| 0x40B0 | SHORTCUT_INFO | 0-n | High | 0xFF | TAB_UW_SHORTCUT_INFO | - | - | - |
| 0x40B1 | FRAME_ERROR_INFO | 0-n | High | 0xFF | TAB_UW_FRAME_ERROR_INFO | - | - | - |
| 0x40B2 | Expected Node Variant | HEX | High | unsigned char | - | - | - | - |
| 0x40B3 | Node Variant of LIN slave | HEX | High | unsigned char | - | - | - | - |
| 0x40B4 | LIN node Access | HEX | High | unsigned char | - | - | - | - |
| 0x40BE | LIN_EXPECTED_NODE_VARIANT2 | HEX | High | unsigned char | - | - | - | - |
| 0x40C0 | CRC_OR_ALIVE_FAILURE | 0-n | High | 0xFF | TAB_UW_CRC_OR_ALIVE_FAILURE | - | - | - |
| 0x40F6 | VERBAUORT_TAGE | 0-n | High | 0xFF | TAB_UW_VERBAUORT_TAGE | - | - | - |
| 0x40FA | UW_SCHLUESSELPOSITION | 0-n | High | 0xFF | TAB_UW_SCHLUESSEL_POSITION | - | - | - |
| 0x4100 | STATUS_GETRIEBE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xD52D | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0xD62C | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HOD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Handsoff erkannt, QU_HOFF_RCOG_SEN_LIN  = 0x9 |
| 0x01 | Handsoff funktionsbereit, QU_HOFF_RCOG_SEN_LIN  = 0x1 |
| 0x02 | Handsoff nicht funtkionsbereit oder Energiesparmode, QU_HOFF_RCOG_SEN_LIN   = 0x5 oder 0xD oder 0xE oder 0xF |
| 0xFF | ungültiger Wert |

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
| F_HLZ | ja |
| F_SEVERITY | ja |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x030004 | FH FA, Relais Öffnen/Schliessen: Ausgangsspannung am falschen Relais | 0 |
| 0x03001A | FH FA: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03001B | FH FA: Reversierung im Emergency-Modus | 1 |
| 0x03001F | FH FA: keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt. | 0 |
| 0x030021 | FH FA: Manueller Initialisierungsvorgang | 1 |
| 0x030022 | FH FA: Automatischer Initialisierungsvorgang | 1 |
| 0x030084 | FH BF, Relais Öffnen/Schliessen: Ausgangsspannung am falschen Relais | 0 |
| 0x03009A | FH BF: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03009B | FH BF: Reversierung im Emergency-Modus | 1 |
| 0x03009F | FH BF: keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt. | 0 |
| 0x0300A1 | FH BF: Manueller Initialisierungsvorgang | 1 |
| 0x0300A2 | FH BF: Automatischer Initialisierungsvorgang | 1 |
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
| 0x030761 | FES Master Softwarefehler | 0 |
| 0x400000 | DTC Inhibition Error 1 | 0 |
| 0x400001 | DTC Inhibition Error 2 | 0 |
| 0x400002 | DTC Inhibition Error 3 | 0 |
| 0x400003 | DTC Inhibition Error 4 | 0 |
| 0x400004 | DTC Inhibition Error 5 | 0 |
| 0x400005 | DTC Inhibition Error 6 | 0 |
| 0x400006 | DTC Inhibition Error 7 | 0 |
| 0x400007 | DTC Inhibition Error 8 | 0 |
| 0x400008 | DTC Inhibition Error 9 | 0 |
| 0x400009 | DTC Inhibition Error 10 | 0 |
| 0x40000A | DTC Inhibition Error 11 | 0 |
| 0x40000B | DTC Inhibition Error 12 | 0 |
| 0x40000C | DTC Inhibition Error 13 | 0 |
| 0x40000D | DTC Inhibition Error 14 | 0 |
| 0x40000E | DTC Inhibition Error 15 | 0 |
| 0x40000F | DTC Inhibition Error 16 | 0 |
| 0x400010 | DTC Inhibition Error 17 | 0 |
| 0x400011 | DTC Inhibition Error 18 | 0 |
| 0x400012 | DTC Inhibition Error 19 | 0 |
| 0x400013 | DTC Inhibition Error 20 | 0 |
| 0x400030 | EWS Kommunikation Primär: Timeout Redundanz | 0 |
| 0x400031 | EWS Kommunikation Sekundär: Timeout Redundanz | 0 |
| 0x4001FF | FZM Logger Fehlerspeichereintrag | 0 |
| 0x4002FF | Too frequent writing on the same EEPROM block | 1 |
| 0x400500 | SIF error trigger pin | 0 |
| 0x400510 | ECL_FUSI_SPI_ERROR | 0 |
| 0x400700 | Secondary App Dummy DTC | 1 |
| 0x400701 | Secondary Network Dummy DTC | 1 |
| 0x400710 | UNEXPECTED_DIAGNOSTIC_RESPONSE | 0 |
| 0x400711 | UNEXPECTED_DIAGNOSTIC_REQUEST | 0 |
| 0x400712 | UNRESPONSIVE_DIAGNOSTIC_JOB | 0 |
| 0x4007FF | DEM Logger Fehlerspeichereintrag | 0 |
| 0x400CFF | CAN Logger Fehlerspeichereintrag | 0 |
| 0x400DFF | Diagnose Logger Fehlerspeichereintrag | 0 |
| 0x400EFF | Lifecycle Logger Fehlerspeichereintrag | 0 |
| 0x400F00 | Application Startup Error | 0 |
| 0x400FFF | EEPROM Manager Logger Fehlerspeichereintrag | 0 |
| 0x4011FF | SysTimeClient Logger Fehlerspeichereintrag | 0 |
| 0x804000 | Reset aus unbekanntem Grund | 0 |
| 0x804001 | Reset wegen Aufstart | 0 |
| 0x804002 | Reset durch Extern | 0 |
| 0x804003 | Reset wegen Loss Of Clock | 0 |
| 0x804004 | Reset durch PLL Überwachung | 0 |
| 0x804005 | Reset durch COP Watchdog | 0 |
| 0x804006 | ECUMA_RESET_CHKSTOP | 0 |
| 0x804007 | Reset wegen internem SW-Fehler | 0 |
| 0x804008 | Reset Low Voltage | 0 |
| 0x804009 | Reset caused by multi-bit error in Non Volatile Memory | 0 |
| 0x80400E | ECUMA_RESET_LIFECYCLE | 0 |
| 0x80400F | Ungültiger Board-ISR | 0 |
| 0x804010 | Spannungsregulator: Unterspannung | 0 |
| 0x804015 | ECUMA_ASSERT | 0 |
| 0x804016 | ECUMA_EXCEPTION | 0 |
| 0x804017 | ECUMA_ERROR_HOOK | 0 |
| 0x804018 | ECUMA_STACK_OVERFLOW | 0 |
| 0x804019 | Interrupts deaktiviert aufgrund zu häufigem Aufruf | 0 |
| 0x804027 | NVM_FLASH_DRV_ERROR | 0 |
| 0x804028 | NVM_QUEUE_FLASH | 0 |
| 0x804029 | NVM_QUEUE_EEPROM | 0 |
| 0x80402A | NVM_CONFIG_READ | 0 |
| 0x80402B | NVM_CRC_DEFAULT | 0 |
| 0x80402C | NVM EEPROM Driver Fehler | 0 |
| 0x804030 | Allgemeiner FuSi Fehler | 0 |
| 0x804031 | KL50 Not allowed - FUSI Error | 0 |
| 0x804040 | Interface VAM-CLI: Timeout Crash-Entriegeln nach Rollover-Crash | 1 |
| 0x804041 | Interface CLI-VAM: Timeout Ermittlung aktuelle PIA-Einstellungen | 1 |
| 0x804051 | LINSM_CODING_ACCESS_FAILED | 0 |
| 0x804052 | LINSM_CODING_WRONG_DATA | 0 |
| 0x8040BA | TC-Master: Interner SW-Fehler | 1 |
| 0x8040BC | IBS Wakeup: Wecksignal unplausibel | 1 |
| 0x8040BE | Fahrbereitschaft bei ZV sichern | 1 |
| 0x8040C1 | KL30F: Anforderung Abschaltung wegen Buswecker | 1 |
| 0x8040C2 | KL30F: Anforderung  Abschaltung  wegen Einschlafverhinderer | 1 |
| 0x8040C3 | KL30F: Anforderung Abschaltung wegen Ruhestromverletzung | 1 |
| 0x8040C4 | KL30F: Anforderung Reset wegen Buswecker | 1 |
| 0x8040C5 | KL30F: Anforderung Reset wegen Einschlafverhinderer | 1 |
| 0x8040C6 | KL30F: Anforderung Reset wegen Ruhestromverletzung | 1 |
| 0x8040C7 | Intelligenter Batteriesensor (IBS): Nachladegrenze erreicht | 1 |
| 0x8040C8 | Intelligenter Batteriesensor (IBS): Obere Startfähigkeitsgrenze erreicht | 1 |
| 0x8040C9 | Intelligenter Batteriesensor (IBS): Ruhestromverletzung  erkannt | 1 |
| 0x8040CA | Intelligenter Batteriesensor (IBS): Untere Startfähigkeitsgrenze erreicht | 1 |
| 0x8040CB | Klemme 15 Abschaltung über Timeout | 1 |
| 0x8040CC | Klemme 15 aktiv: fehlerhaftes Abstellen Ende | 1 |
| 0x8040F6 | Transponderspule: Notstart | 1 |
| 0x804145 | Konfiguration FBD3 fehlgeschlagen: RDCi HeartBeat fehlt | 0 |
| 0x804148 | Remote Door Unlock (RDU): Erfolgreich durchgeführt | 1 |
| 0x804149 | Remote Door Unlock (RDU): Abbruch aufgrund von Kodieroption die RDU verhindert | 1 |
| 0x80414A | Remote Door Unlock (RDU): Abbruch aufgrund Motorstart | 1 |
| 0x80414B | Remote Door Unlock (RDU): Abbruch, da Fahrzeug fährt | 1 |
| 0x80414C | Remote Door Unlock (RDU): Ungültige Anforderung über CAN | 1 |
| 0x80414D | Remote Door Lock (RDL): Erfolgreich durchgeführt | 1 |
| 0x80414E | Remote Door Lock (RDL): Abbruch aufgrund von Kodieroption die RDL verhindert | 1 |
| 0x80414F | Remote Door Lock (RDL): Abbruch aufgrund Motorstart oder Fahrertüre offen | 1 |
| 0x804150 | Remote Door Lock (RDL): Abbruch, da Fahrzeug fährt | 1 |
| 0x804151 | Remote Door Lock (RDL): Ungültige Anforderung über CAN | 1 |
| 0x804152 | PLOCK: Status Schalter Interlock-Klinke GWH unplausibel | 0 |
| 0x80416C | CarSharing-Mode (CSM) | 0 |
| 0x804170 | Primärstart KL50 (Nicht-Hybrid): Keine DME-Fusi-Freigabe | 1 |
| 0x804171 | MSA-Start KL50 (MSA/Zustart oder Primärstart-Hybrid): DME-Requests fehlerhaft | 1 |
| 0x804173 | KM: RESULT_WRONG_PARAMETER | 1 |
| 0x804174 | KM: RESULT_BUFFER_FULL | 1 |
| 0x804175 | Codierung VAM_LID_VARIANT: Ungültig | 1 |
| 0x804188 | Notlauf FuSi Abblendlicht aktiv | 0 |
| 0x804189 | Funktion Fahrtrichtungsanzeiger oder Bremslicht im FuSi Notlauf | 0 |
| 0x8041A6 | SPI Fehler Body - SPOC | 0 |
| 0x8041A8 | Welcome Light Wiederholsperre aktiv | 1 |
| 0x8041AC | Lichtnotlauf aktiv durch Abfall Klemme 15 | 1 |
| 0x8041B0 | Außenlicht, Rollenmodus aktiv | 0 |
| 0x8041BE | Notlauf FuSi Bremslicht und-oder SIF aktiv | 0 |
| 0x804264 | Powermanagement: Verbraucherabschaltung Außenspiegelheizung, Spritzdüsenheizung | 1 |
| 0x804291 | Frontwischer: Notbetrieb (Interner Fehler FEM) | 0 |
| 0x8043D0 | Elektrische Lenksäulenverriegelung (ELV): Timeout bei Warten auf ELV-Herstellerdaten nach Request (Herstellerdatenanfrage) vom ELV-Master | 0 |
| 0x8043D1 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - PowerOff-Bit in der Status-Botschaft vom ELV-SG nicht gesetzt | 0 |
| 0x8043D2 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie (Escape) erfolgreich | 0 |
| 0x8043D3 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie (Full-Cycle) erfolgreich | 0 |
| 0x8043D4 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie (Sequenzwiederholung) erfolgreich | 0 |
| 0x8043D5 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie (Botschaft-Erneut-Senden) erfolgreich | 0 |
| 0x8043D6 | Elektrische Lenksäulenverriegelung (ELV): Maximalwert ESCAPE-Counter ELV-SG erreicht | 0 |
| 0x8043D7 | Elektrische Lenksäulenverriegelung (ELV): Maximalwert ESCAPE-Counter ELV-Master erreicht | 0 |
| 0x8043D8 | ELV: Manipulation Codierung | 1 |
| 0x80447F | ABW-Türschloss Fahrer: Temperaturefehler | 1 |
| 0x804482 | ABW-Türschloss Beifahrer: Temperaturefehler | 1 |
| 0x8044E0 | Schlüsseldaten-Service: Kein Schlüssel am Transponder erkannt | 1 |
| 0x8044F0 | Drahtloser Fahrzeugzugang DFZ: Authentisierung fehlgeschlagen, Secret Key ungültig | 1 |
| 0x8044F7 | Powermanagement: Reduzierung oder Abschaltung der Lenkradheizung | 1 |
| 0x80496E | Rücksitz nicht verriegelt | 0 |
| 0x93070C | Fehler konnte nach maximaler Anzahl von Versuchen nicht gesendet werden | 1 |
| 0x93071F | Puffer für ausgehende Fehlermeldungen ist voll | 1 |
| 0xD91405 | CAN-Botschaft, Bedienung Schichtung Sitzheizung (BEDIENUNG_SCHICHT_SITZ): Ungueltige Signale | 1 |
| 0xD915E7 | CAN-Botschaft, Bedienung Sitzheizung Sitzklima FA (BEDIENUNG_SITZHEIZUNG_FA): Ungueltige Signale | 1 |
| 0xD915E8 | CAN-Botschaft, Bedienung Sitzheizung Sitzklima BF (BEDIENUNG_SITZHEIZUNG_BF): Ungueltige Signale | 1 |
| 0xD94300 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Ungültige Bussignale erkannt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | FEHLERART KLEMMENSTATUS | 0-n | High | 0xFF | TAB_ZSG_UW_FEHLERART_KLEMMENSTATUS | - | - | - |
| 0x0002 | ear | HEX | High | signed long | - | - | - | - |
| 0x4002 | Batteriespannung Ende (bei Fehlerspeichereintrag) | mV | High | unsigned int | - | 15.0 | 1.0 | 0.0 |
| 0x4003 | Dauer KL15 ein | min | High | unsigned char | - | 5.0 | 1.0 | 0.0 |
| 0x400A | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4026 | ELV Bussignale | 0-n | High | 0xFF | TAB_UW_ELV_BUSSIGNALE | - | - | - |
| 0x4028 | SPI_COMM_ERROR_REASON | HEX | High | signed char | - | - | - | - |
| 0x4040 | SPANNUNG_BORDNETZ | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4041 | KLEMMEN_STATUS | 0-n | High | 0xFF | TAB_UW_KLEMMEN_STATUS | - | - | - |
| 0x4042 | LICHTSCHALTER_STELLUNG | 0-n | High | 0xFF | TAB_UW_LICHTSCHALTER | - | - | - |
| 0x4049 | GESCHW_KODIERT | 0-n | High | 0xFF | TAB_UW_GESCHW_KODIERT | - | - | - |
| 0x404A | BEL_UND_KLEMME | 0-n | High | 0xFF | TAB_UW_BEL_UND_KLEMME | - | - | - |
| 0x404B | STAT_LAMP_UND_SPG | 0-n | High | 0xFF | TAB_UW_STAT_LAMP_UND_SPG | - | - | - |
| 0x404C | CTR_SIG_UND_ST_FSFY | 0-n | High | 0xFF | TAB_UW_CTR_SIG_UND_ST_FSFY | - | - | - |
| 0x404D | ERROR_SPI | 0-n | High | 0xFF | TAB_UW_ERROR_SPI | - | - | - |
| 0x404F | DEVICE_ID | 0-n | High | 0xFF | TAB_UW_DEVICE_ID | - | - | - |
| 0x4053 | CARSHARING_MODE | 0-n | High | 0xFF | TAB_CARSHARING_MODE | - | - | - |
| 0x4060 | Außentemperatur über CAN | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4082 | LAST Motorstart | 0-n | High | 0xFF | TAB_UW_LAST_MOTORSTART | - | - | - |
| 0x4083 | STAT_FAHRBEREITSCHAFT | HEX | High | unsigned char | - | - | - | - |
| 0x4084 | Zeitdifferenz_Motorstart | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4090 | UW_BLOCK_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4091 | UW_DRV_FLASH_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4092 | UW_DRV_FLASH_READ_OR_WRITE | 0-n | High | 0xFF | TAB_UW_NVM_READ_OR_WRITE | - | - | - |
| 0x4093 | UW_DRV_FLASH_FAILURE_LENGTH | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4094 | UW_DRV_FLASH_FAILURE_ERROR_CODE | 0-n | High | 0xFFFF | TAB_UW_DRV_FLASH_FAILURE_ERROR_CODE | - | - | - |
| 0x4095 | UW_DRV_EEPROM_READ_OR_WRITE | 0-n | High | 0xFF | TAB_UW_NVM_READ_OR_WRITE | - | - | - |
| 0x4096 | UW_DRV_EEPROM_FAILURE_LENGTH | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4097 | UW_DRV_EEPROM_FAILURE_ADRESS | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4098 | NVM_RateEepromWriting | HEX | High | unsigned int | - | - | - | - |
| 0x409D | sramFlash | HEX | High | unsigned char | - | - | - | - |
| 0x409E | Sub-Tabelle | HEX | - | signed long | - | - | - | - |
| 0x409F | emr | HEX | High | unsigned char | - | - | - | - |
| 0x40A0 | eat | HEX | High | unsigned char | - | - | - | - |
| 0x40A1 | UW_ECUMA_RST_LIFECYCLE_RUNLEVEL | HEX | High | unsigned char | - | - | - | - |
| 0x40A2 | UW_ECUMA_RST_LIFECYCLE_INDEX | HEX | High | unsigned char | - | - | - | - |
| 0x40A3 | UW_ECUMA_RST_LIFECYCLE_STATE | HEX | High | unsigned char | - | - | - | - |
| 0x40A4 | UW_ASSERT_RETURN_ADDRESS_1 | HEX | High | signed long | - | - | - | - |
| 0x40A5 | ECUMA_RST_TASK_ID_OR_ERROR_STATUS_OR_SERVICE_ID | HEX | High | signed long | - | - | - | - |
| 0x40A6 | UW_EXCLUDED_DTC | HEX | High | signed long | - | - | - | - |
| 0x40A7 | UW_ADDRESS_LOGGER_MSG | HEX | High | signed long | - | - | - | - |
| 0x40A8 | UW_EXCEPTION_ADDRESS | HEX | High | signed long | - | - | - | - |
| 0x40A9 | ECUMA_RST_EXCEPTION_NUMBER | HEX | High | signed long | - | - | - | - |
| 0x40AA | UW_TASK_OR_ISR_ID | HEX | High | unsigned int | - | - | - | - |
| 0x40AB | UW_APP_STARTUP_FUNC_INDEX | HEX | High | unsigned int | - | - | - | - |
| 0x40B5 | LIN_VERBAUORT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x40B6 | LIN_CODING_ERRORTYPE | HEX | High | unsigned char | - | - | - | - |
| 0x40B7 | UW_ASSERT_RETURN_ADDRESS_2 | HEX | High | signed long | - | - | - | - |
| 0x40B8 | InterruptSourceNumber | HEX | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40B9 | FusiShell 1 | HEX | High | signed long | - | - | - | - |
| 0x40BA | UW_UNEXPECTED_SENDER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40BB | UW_EXPECTED_SENDER | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40BC | UW_ACTIVE_REQUEST | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40BD | UW_INCOMING_REQUEST | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x40C1 | CANCELED_SERVICE_ID | HEX | High | signed long | - | - | - | - |
| 0x40C3 | FUSI_TRIGGER_PIN_HIGH | HEX | High | signed long | - | - | - | - |
| 0x40C4 | FUSI_TRIGGER_PIN_MIDDLE | HEX | High | signed long | - | - | - | - |
| 0x40C5 | FUSI_TRIGGER_PIN_LOW | HEX | High | signed long | - | - | - | - |
| 0x40D0 | UWB_DREHZAHL | 1/min | High | unsigned int | - | 0.25 | 1.0 | 0.0 |
| 0x40FC | FusiShell 2 | HEX | High | signed long | - | - | - | - |
| 0x40FD | FusiShell 3 | HEX | High | signed long | - | - | - | - |
| 0x4100 | STATUS_GETRIEBE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4101 | FEHLERART_TC_FUSI_KL50_MSA | 0-n | High | 0xFF | TAB_ZSG_UW_TC_FUSI_KL50_MSA | - | - | - |
| 0x4105 | STAT_FUSI_BL_1 | HEX | High | signed long | - | - | - | - |
| 0x4106 | STAT_FUSI_BL_2 | HEX | High | signed long | - | - | - | - |
| 0x4107 | Bit 0-7 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4108 | Bit 0-7 | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0xD62D | FES_MASTER_SW_FEHLER_INFO | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xD0 | ERROR_BLOCK |
| 0xD1 | ERROR_RESPONSE |
| 0xD2 | ERROR |
| 0xD3 | ERROR_RANGE_ARGUMENT |
| 0xD4 | ERROR_BAUREIHE |
| 0xD5 | ERROR_ELEMENT |
| 0xD6 | ERROR_BEWERTUNG |
| 0xD7 | temp0 |
| 0xD8 | SERVICE ERROR |
| 0xD9 | DID ERROR |
| 0xDA | ERROR_RANGE_ELEMENT |
| 0xDB | ERROR_LENGHT |
| 0xDC | temp |
| 0xDD | ERROR_MISSING_ARGUMENT |
| 0xDE | ERROR_SELECTED_TMS |
| 0xDF | SERVICE_ERROR |
| 0xFC | OKAY_SUBFUNCTION_NOT_SUPPORTED_DUMMY_PWDRIVER_ACTIVE |
| 0xXY | ERROR_UNKNOWN |

### RES_0X1006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATEN_BLOCK_WERT_DATA | + | - | - | DATA | - | data[32] | - | - | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den ausgelesen Datenblock mit den Schlüsseldaten des Service. Hinweise: - 32-Byte hex-Werte. |

### RES_0X2302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSMINUTEN_AL_AKTIV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtsystemzeit mit aktivem Abblendlicht |
| STAT_BETRIEBSMINUTEN_0000_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Nur Fahrer + Ablendlicht |
| STAT_BETRIEBSMINUTEN_0001_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer mit Anhänger + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1000_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer und Beifahrer + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1001_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer und Beifahrer mit Anhänger + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1010_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, Beifahrer, 1 Pers in Fond + Ablentlicht |
| STAT_BETRIEBSMINUTEN_1100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, Beifahrer, 2 Pers in Fond + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1110_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, Beifahrer, 3 Pers in Fond + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1011_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, Beifahrer, 1 Pers in Fond mit Anhänger + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1101_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, Beifahrer, 2 Pers in Fond mit Anhänger + Ablendlicht |
| STAT_BETRIEBSMINUTEN_1111_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, Beifahrer, 3 Pers in Fond mit Anhänger + Ablendlicht |
| STAT_BETRIEBSMINUTEN_0010_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, 1 Pers in Fond + Ablentlicht |
| STAT_BETRIEBSMINUTEN_0100_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, 2 Pers in Fond + Ablendlicht |
| STAT_BETRIEBSMINUTEN_0110_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, 3 Pers in Fond + Ablendlicht |
| STAT_BETRIEBSMINUTEN_0011_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, 1 Pers in Fond mit Anhänger + Ablentlicht |
| STAT_BETRIEBSMINUTEN_0101_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, 2 Pers in Fond mit Anhänger + Ablendlicht |
| STAT_BETRIEBSMINUTEN_0111_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrer, 3 Pers in Fond mit Anhänger + Ablendlicht |
| STAT_ANZAHL_GES_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamt Situationszähler |
| STAT_ANZAHL_GES_KL_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite egal oder unter -20m |
| STAT_ANZAHL_GES_KL_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite zwischen -20m und -10m (inklusive) |
| STAT_ANZAHL_GES_GR_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite zwischen 10m (inklusive) und 20m. |
| STAT_ANZAHL_GES_GR_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite höher oder egal als 20m. |
| STAT_ANZAHL_AL_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Nacht Situationszähler |
| STAT_ANZAHL_AL_KL_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite egal oder unter -20m |
| STAT_ANZAHL_AL_KL_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite zwischen -20m und -10m (inklusive) |
| STAT_ANZAHL_AL_GR_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite zwischen 10m (inklusive) und 20m. |
| STAT_ANZAHL_AL_GR_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Leuchtweite höher oder egal als 20m. |

### RES_0X4005_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UPDATE | - | - | + | 0-n | high | unsigned char | - | TAB_ZSG_STATUS_SERVICE_SCHLUESSELDATEN_UPDATE | 1.0 | 1.0 | 0.0 | Das Result gibt den Status des Updatevorgangs der Schlüsseldaten wieder. |

### RES_0X4507_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWR_ENABLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LWR aktiviert / deaktiviert |
| STAT_LWR_SPUL_ERR_STOP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | kein Motorstop bei Problemen mit der Spulenprüfung |
| STAT_LWR_SPUL_EINTR | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | kein Fehlereintrag bei Problemen mit der Spulenprüfung |
| STAT_SP_PRUEF_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spulenprüfung aktiviert |
| STAT_LWR_DIAGNOSE_PARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spulenprüfung: Grenzwertkennlinie  Offset  |
| STAT_LWR_DIAGNOSE_PARAM_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spulenprüfung: Grenzwertkennlinie  Steigung  |
| STAT_LWR_CHECKGRENZE_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | LWR-Prüfgrenze |
| STAT_LWR_PRUEF_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Diagnose LWR Spulenprüfung: Messwert Spannung |
| STAT_LWR_DIAG_HEAT_TIME_WERT | s | high | unsigned char | - | - | 512.0 | 1.0 | 0.0 | Lwr-Diag-Heat-Time |
| STAT_LWR_DIAG_COOL_TIME_WERT | s | high | unsigned char | - | - | 512.0 | 1.0 | 0.0 | Lwr-Diag-Cool-Time |
| STAT_LWR_FRONT_LIGHT_HOT | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustandserkennung Scheinwerfer: hot = 1, cold  = 0 |
| STAT_LWR_FRONT_LIGHT_THERMO_TIMER_WERT | s | high | unsigned int | - | - | 1.0 | 2.0 | 0.0 | Timer Scheinwerfer Thermomodell |

### RES_0X4509_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_12H_TIMER_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12h Timer |

### RES_0X4700_D

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

### RES_0X4800_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_WBL_LED_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_0_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_1_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_2_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_3_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_4_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_5_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_6_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_7_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_8_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |

### RES_0X4910_D

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

### RES_0X5002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DFZ_MODUS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den Aktivierungsstatus des DFZ Modus. 0 = DFZ Modus nicht aktiviert 1 = DFZ Modus aktiviert |

### RES_0X5020_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TREIBER_15N1_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die  bisher erkannten Kurzschlüsse gegen Masse des Treibers KL15N1. Hinweis:  ¿   Startwert ist 100000 und wird pro SW- oder HW-mäßigem erkanntem Kurzschluss um 1 dekrementiert (Siehe hierzu auch Anforderung ZSG_BF_13075).Wird der Wert 0 erreicht, so wird der Ausgang dauerhaft deaktiviert kann weder mittels Klemmenschalten noch per Diagnosejob zurückgesetzt werden. -> SG-Tausch nötig.  0 - 100000 =Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_TREIBER_15N1_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus des Treibers KL15N1.  Hinweis:  Nach erkanntem Kurzschluss (SW- oder HW-seitig) wird der Treiber so oft wieder aktiviert, wie maximal per Codierung definiert. Danach ist ein Klemmenwechsel KL15 aus -> KL15 ein nötig, um die Wiedereinschaltversuche erneut zu starten (Siehe hierzu Anfoderungen ZSG_BF_13096 und ZSG_BF_13097) 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_15N1_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein des Treibers KL15N1.  Hinweis:  Per Kodierung ist festgelegt wie oft die Kurzschlussabschaltung durch Schalten der Klemme 15 zurückgesetzt werden kann. (Siehe hierzu Anfoderungen ZSG_BF_13098) 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_15N2_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die  bisher erkannten Kurzschlüsse gegen Masse des Treibers KL15N2. Hinweis:   Startwert ist 100000 und wird pro SW- oder HW-mäßigem erkanntem Kurzschluss um 1 dekrementiert (Siehe hierzu auch Anforderung ZSG_BF_13075).Wird der Wert 0 erreicht, so wird der Ausgang dauerhaft deaktiviert kann weder mittels Klemmenschalten noch per Diagnosejob zurückgesetzt werden. -> SG-Tausch nötig. 0 - 100000 =Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_TREIBER_15N2_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus des Treibers KL15N2.  Hinweis:  Nach erkanntem Kurzschluss (SW- oder HW-seitig) wird der Treiber so oft wieder aktiviert, wie maximal per Codierung definiert. Danach ist ein Klemmenwechsel KL15 aus -> KL15 ein nötig, um die Wiedereinschaltversuche erneut zu starten (Siehe hierzu Anfoderungen ZSG_BF_13096 und ZSG_BF_13097) 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_15N2_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein des Treibers KL15N2.  Hinweis:  Per Kodierung ist festgelegt wie oft die Kurzschlussabschaltung durch Schalten der Klemme 15 zurückgesetzt werden kann. (Siehe hierzu Anfoderungen ZSG_BF_13098) 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30BACSM_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die bisher erkannten Kurzschlüsse gegen Masse des Treibers KL30B-ACSM. Hinweis:  ¿   Startwert ist 100000 und wird pro SW- oder HW-mäßigem erkanntem Kurzschluss um 1 dekrementiert (Siehe hierzu auch Anforderung ZSG_BF_13075).Wird der Wert 0 erreicht, so wird der Ausgang dauerhaft deaktiviert kann weder mittels Klemmenschalten noch per Diagnosejob zurückgesetzt werden. -> SG-Tausch nötig. 0 - 100000 =Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30BACSM_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus des Treibers KL30B-ACSM.  Hinweis:  Nach erkanntem Kurzschluss (SW- oder HW-seitig) wird der Treiber so oft wieder aktiviert, wie maximal per Codierung definiert. Danach ist ein Klemmenwechsel KL15 aus -> KL15 ein nötig, um die Wiedereinschaltversuche erneut zu starten (Siehe hierzu Anfoderungen ZSG_BF_13096 und ZSG_BF_13097). 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30BACSM_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein des Treibers KL30B-ACSM.  Hinweis:  Per Kodierung ist festgelegt wie oft die Kurzschlussabschaltung durch Schalten der Klemme 15 zurückgesetzt werden kann. (Siehe hierzu Anfoderungen ZSG_BF_13098) 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30B1_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die  bisher erkannten Kurzschlüsse gegen Masse des Treibers KL30B-1. Hinweis:   Startwert ist 100000 und wird pro SW- oder HW-mäßigem erkanntem Kurzschluss um 1 dekrementiert (Siehe hierzu auch Anforderung ZSG_BF_13075).Wird der Wert 0 erreicht, so wird der Ausgang dauerhaft deaktiviert kann weder mittels Klemmenschalten noch per Diagnosejob zurückgesetzt werden. -> SG-Tausch nötig. 0 - 100000 =Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30B1_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus des Treibers KL30B-1.  Hinweis:  Nach erkanntem Kurzschluss (SW- oder HW-seitig) wird der Treiber so oft wieder aktiviert, wie maximal per Codierung definiert. Danach ist ein Klemmenwechsel KL15 aus -> KL15 ein nötig, um die Wiedereinschaltversuche erneut zu starten (Siehe hierzu Anfoderungen ZSG_BF_13096 und ZSG_BF_13097) 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30B1_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein des Treibers KL30B-1.  Hinweis:  Per Kodierung ist festgelegt wie oft die Kurzschlussabschaltung durch Schalten der Klemme 15 zurückgesetzt werden kann. (Siehe hierzu Anfoderungen ZSG_BF_13098) 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30B2_ZAEHLER_COUNT_MAX_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand für die  bisher erkannten Kurzschlüsse gegen Masse des Treibers KL30B-2. Hinweis:   Startwert ist 100000 und wird pro SW- oder HW-mäßigem erkanntem Kurzschluss um 1 dekrementiert (Siehe hierzu auch Anforderung ZSG_BF_13075).Wird der Wert 0 erreicht, so wird der Ausgang dauerhaft deaktiviert kann weder mittels Klemmenschalten noch per Diagnosejob zurückgesetzt werden. -> SG-Tausch nötig. 0 - 100000 =Aktueller Zählerwert für die Wiedereinschaltversuche FFFFFFFFh = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30B2_ZAEHLER_KS_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der bisher durchgeführten Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus des Treibers KL30B-2.  Hinweis:  Nach erkanntem Kurzschluss (SW- oder HW-seitig) wird der Treiber so oft wieder aktiviert, wie maximal per Codierung definiert. Danach ist ein Klemmenwechsel KL15 aus -> KL15 ein nötig, um die Wiedereinschaltversuche erneut zu starten (Siehe hierzu Anfoderungen ZSG_BF_13096 und ZSG_BF_13097) 0 - 254 = Aktueller Zählerwert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_TREIBER_KL30B2_ZAEHLER_KS_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuelle Anzahl an bereits durchgeführten Resets des Kurzschlussabschaltung durch KL15 ein des Treibers KL30B-2.  Hinweis:  Per Kodierung ist festgelegt wie oft die Kurzschlussabschaltung durch Schalten der Klemme 15 zurückgesetzt werden kann. (Siehe hierzu Anfoderungen ZSG_BF_13098) 0 - 254 = Aktueller Zählerwert für die Anzahl an bereits durchgeführten Resets der Kurzschlussabschaltung 255 = Signal ungültig / unplausibel |
| STAT_KODIERUNG_RESTARTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den codierbaren maximalen Wert an Wiedereinschaltversuche im Zyklus KL15 ein -> KL15 aus -> KL15 ein.  Hinweis: Inhalt entspricht der Codierung SCD_RESTART (Siehe hierzu Anfoderungen ZSG_BF_13073) 0 - 254 = maximaler Wert für die Wiedereinschaltversuche 255 = Signal ungültig / unplausibel |
| STAT_KODIERUNG_KL15_CYCLES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den codierbaren maximalen Wert an Resets des Kurzschlussabschaltung durch KL15 ein.  Hinweis: Inhalt entspricht der Codierung SCD_KL15_CYCLES (Siehe hierzu Anfoderungen ZSG_BF_13073) 0 - 254 = maximaler Wert für die Resets der Kurzschlussabschaltung 255 = Ungültig / unplausibel |

### RES_0X5101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECUMA_LAST_HW_WAKEUP_ID_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ECUMA_LAST_HW_WAKEUP_ID |
| STAT_ECUMA_LAST_SW_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_SW_WAKEUP_ID |
| STAT_ECUMA_LAST_BUS_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_BUS_WAKEUP_ID |
| STAT_ECUMA_LAST_RESET_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_RESET_ID |
| STAT_ECUMA_CAN_WAKEUP_ID_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ECUMA_CAN_WAKEUP_ID |
| STAT_RESERVED_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RESERVED |

### RES_0X510B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NORMAL_LOCK_STATE | 0/1 | high | unsigned char | - | - | - | - | - | Jtag normal lock status. (0x00 ¿ jtag is unlocked; 0x01 ¿ jtag is locked) |
| STAT_PERMANENT_LOCK_STATE | 0/1 | high | unsigned char | - | - | - | - | - | Jtag permanent lock status. (0x00 ¿ permanent lock not done; 0x01 ¿ permanent lock done) |

### RES_0X6004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest aktuellen Status der Fensterheberfreigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| STAT_FH_PANIKFREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest aktuellen Status der Panikfreigabe Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### RES_0X603A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_DENORM_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierh¿ufigkeit wird bei jeder Denormierung inkrementiert |
| STAT_FA_DENORM_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FA_DENORM_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_1_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FA_DENORM_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_2_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FA_DENORM_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_3_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FA_DENORM_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_4_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FA_DENORM_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FA_DENORM_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FA_DENORM_5_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FA_RESERVED_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierh¿ufigkeit wird bei jeder Denormierung inkrementiert |
| STAT_BF_DENORM_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BF_DENORM_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_1_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BF_DENORM_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_2_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BF_DENORM_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_3_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BF_DENORM_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_4_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BF_DENORM_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BF_DENORM_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BF_DENORM_5_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BF_RESERVED_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |

### RES_0X603B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAH_DENORM_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierh¿ufigkeit wird bei jeder Denormierung inkrementiert |
| STAT_FAH_DENORM_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FAH_DENORM_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FAH_DENORM_1_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FAH_RESERVED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FAH_DENORM_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FAH_DENORM_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FAH_DENORM_2_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FAH_RESERVED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FAH_DENORM_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FAH_DENORM_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FAH_DENORM_3_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FAH_RESERVED_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FAH_DENORM_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FAH_DENORM_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FAH_DENORM_4_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FAH_RESERVED_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_FAH_DENORM_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_FAH_DENORM_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_FAH_DENORM_5_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_FAH_RESERVED_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BFH_DENORM_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierh¿ufigkeit wird bei jeder Denormierung inkrementiert |
| STAT_BFH_DENORM_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BFH_DENORM_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BFH_DENORM_1_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BFH_RESERVED_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BFH_DENORM_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BFH_DENORM_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BFH_DENORM_2_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BFH_RESERVED_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BFH_DENORM_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BFH_DENORM_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BFH_DENORM_3_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BFH_RESERVED_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BFH_DENORM_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BFH_DENORM_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BFH_DENORM_4_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BFH_RESERVED_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |
| STAT_BFH_DENORM_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_DENORMIER_URSACHE | - | - | - | Ursache der Denormierung. |
| STAT_BFH_DENORM_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_BFH_DENORM_5_KM_WERT | Ink | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_BFH_RESERVED_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umsetzung in der SW-C MT |

### RES_0X603E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_REVERSIEREN_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierhaeufigkeit wird bei jedem Reversier inkrementiert |
| STAT_FA_REVERSIEREN_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_1_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_1_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_1_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_2_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_2_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_3_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_3_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_3_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_4_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_4_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_4_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FA_REVERSIEREN_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FA_REVERSIEREN_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FA_REVERSIEREN_5_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FA_REVERSIEREN_5_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FA_REVERSIEREN_5_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FA_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierhaeufigkeit wird bei jedem Reversier inkrementiert |
| STAT_BF_REVERSIEREN_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_1_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_1_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_1_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_2_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_2_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_3_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_3_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_3_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_4_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_4_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_4_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BF_REVERSIEREN_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BF_REVERSIEREN_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BF_REVERSIEREN_5_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BF_REVERSIEREN_5_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BF_REVERSIEREN_5_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BF_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |

### RES_0X603F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAH_REVERSIEREN_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierhaeufigkeit wird bei jedem Reversier inkrementiert |
| STAT_FAH_REVERSIEREN_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FAH_REVERSIEREN_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FAH_REVERSIEREN_1_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FAH_REVERSIEREN_1_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FAH_REVERSIEREN_1_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FAH_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FAH_REVERSIEREN_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FAH_REVERSIEREN_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FAH_REVERSIEREN_2_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FAH_REVERSIEREN_2_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FAH_REVERSIEREN_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FAH_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FAH_REVERSIEREN_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FAH_REVERSIEREN_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FAH_REVERSIEREN_3_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FAH_REVERSIEREN_3_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FAH_REVERSIEREN_3_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FAH_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FAH_REVERSIEREN_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FAH_REVERSIEREN_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FAH_REVERSIEREN_4_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FAH_REVERSIEREN_4_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FAH_REVERSIEREN_4_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FAH_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_FAH_REVERSIEREN_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_FAH_REVERSIEREN_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_FAH_REVERSIEREN_5_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_FAH_REVERSIEREN_5_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_FAH_REVERSIEREN_5_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_FAH_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BFH_REVERSIEREN_ZAEHLER_WERT | Ink | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierhaeufigkeit wird bei jedem Reversier inkrementiert |
| STAT_BFH_REVERSIEREN_1_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BFH_REVERSIEREN_1_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BFH_REVERSIEREN_1_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BFH_REVERSIEREN_1_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BFH_REVERSIEREN_1_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BFH_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BFH_REVERSIEREN_2_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BFH_REVERSIEREN_2_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BFH_REVERSIEREN_2_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BFH_REVERSIEREN_2_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BFH_REVERSIEREN_2_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BFH_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BFH_REVERSIEREN_3_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BFH_REVERSIEREN_3_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BFH_REVERSIEREN_3_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BFH_REVERSIEREN_3_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BFH_REVERSIEREN_3_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BFH_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BFH_REVERSIEREN_4_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BFH_REVERSIEREN_4_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BFH_REVERSIEREN_4_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BFH_REVERSIEREN_4_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BFH_REVERSIEREN_4_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BFH_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_BFH_REVERSIEREN_5_URSACHE_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_REVERSIER_URSACHE | - | - | - | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. |
| STAT_BFH_REVERSIEREN_5_POS_HALL_WERT | Ink | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_BFH_REVERSIEREN_5_KM_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_BFH_REVERSIEREN_5_ATEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (aus CAN-Signal) |
| STAT_BFH_REVERSIEREN_5_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsspannung (Ausgang zu FH-Antrieb) |
| STAT_BFH_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |

### RES_0X6042_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FA_STOPREASON_1_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_2_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_3_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_4_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_5_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_6_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_7_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_8_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_9_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FA_STOPREASON_10_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_1_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_2_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_3_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_4_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_5_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_6_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_7_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_8_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_9_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BF_STOPREASON_10_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |

### RES_0X6043_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAH_STOPREASON_1_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_2_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_3_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_4_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_5_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_6_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_7_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_8_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_9_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_FAH_STOPREASON_10_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_1 | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_2 | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_3_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_4_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_5_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_6_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_7_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_8_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_9_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |
| STAT_BFH_STOPREASON_10_NR | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON | - | - | - | Grund des Motorstops |

### RES_0XA084_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR | + | - | - | 0-n | high | unsigned char | - | TAB_CAS_KURZSCHLUSSABSCHALTUNG_RESET_STATUS | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den Status des Rücksetzvorgangs. |

### RES_0XA118_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_ROUTINE | - | - | - | Ausführungsstatus der Routine |
| STAT_WISCHER_LIN_EINLERNVORGANG | + | + | + | 0-n | high | unsigned char | - | TAB_WISCHER_LIN_EINLERNVORGANG | - | - | - | Gibt den Status des Einlernvorgangs an |

### RES_0XA17B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |
| STAT_FA_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_BF_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_FAH_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_BFH_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### RES_0XA17E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA17F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA180_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA181_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA182_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA322_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_SPIEGELSELBSTTEST | 1.0 | 1.0 | 0.0 | Status Spiegeltest |
| STAT_SELBSTTEST_FC_NR | - | - | + | 0-n | - | signed char | - | TAB_SPIEGELSELBSTTEST_INTERN | 1.0 | 1.0 | 0.0 | Ausgabe interner Fehler |

### RES_0XA3B7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGENSENSOR_INIT_VORGANG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_RLS_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierungsvorgang Regensensor |

### RES_0XA530_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALTUEBERWACHUNG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_LEUCHTEN_ROUTINE | 1.0 | 1.0 | 0.0 | Ergebnis der Routine |

### RES_0XA531_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARMUEBERWACHUNG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_LEUCHTEN_ROUTINE | 1.0 | 1.0 | 0.0 | Ergebnis der Routine |

### RES_0XA532_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VR_WERT | - | - | + | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 vorne rechts (mV/mm) |
| STAT_GRADIENT_C0_HR_WERT | - | - | + | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 hinten rechts (mV/mm) |
| STAT_GRADIENT_C1_VR_WERT | - | - | + | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 vorne rechts (mV/mm) |
| STAT_GRADIENT_C1_HR_WERT | - | - | + | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 hinten rechts (mV/mm) |
| STAT_OFFSET_S0_VR_WERT | - | - | + | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne rechts (mm) |
| STAT_OFFSET_S0_HR_WERT | - | - | + | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten rechts (mm) |
| STAT_OFFSET_S1_VR_WERT | - | - | + | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 vorne rechts (mm) |
| STAT_OFFSET_S1_HR_WERT | - | - | + | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 hinten rechts (mm) |

### RES_0XA71A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_FA_NR | - | - | + | 0-n | - | unsigned char | - | TAB_GZB_RRR_INIT | 1.0 | 1.0 | 0.0 | Aktueller Zustand der Routine Fahrer |
| STAT_ROUTINE_BF_NR | - | - | + | 0-n | - | unsigned char | - | TAB_GZB_RRR_INIT | 1.0 | 1.0 | 0.0 | Aktueller Zustand der Routine Beifahrer |

### RES_0XAA73_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_ANLIEFERZUSTAND | + | - | - | 0-n | high | unsigned char | - | TAB_ELV_ANLIEFERZUSTAND | 1.0 | 1.0 | 0.0 | Das Result gibt an ob das Rücksetzen der ELV in den Anlieferzustand erfolgreich war oder nicht 0: erfolgreich 1: nicht erfolgreich |

### RES_0XAA7C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_AUSFUEHRUNGSSTATUS | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_ELV_AUSFUEHRUNGSSTATUS | 1.0 | 1.0 | 0.0 | Das Ergebnis liefert bei der  Ausführung der angeforderten Aktion u.U. aufgetretene Fehler. Hinweis:  Es wird nur der erste aufgetretene Fehler zurückgeliefert. Zuordnung erfolgt gemäß Tabelle TAB_CAS_ELV_AUSFUEHRUNGSSTATUS |
| STAT_ELV_ZUSTAND | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_ELV_ZUSTAND | 1.0 | 1.0 | 0.0 | Das Ergebnis liefert den aktuellen Verriegelungs-/Entriegelungszustand der ELV. |
| STAT_FEHLERZAEHLER_ELV_MASTER_WERT | + | - | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Ergebnis liefert den aktuellen Wert des ELV-Master-Escape-Fehlerzählers (Escape-Counter ELV-Master) 0 ... 254 = Wert des Fehlerzählers 255 = Ungültig/Unbekannt |
| STAT_FEHLERZAEHLER_ELV_SG_WERT | + | - | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Ergebnis liefert den aktuellen Wert des ELV-SG-Escape-Fehlerzählers (Escape-Counter ELV-SG). 0 ... 254 = Wert des Fehlerzählers 255 = Ungültig/Unbekannt |
| STAT_FULLCYCLE_MERKER | + | - | - | 0-n | - | unsigned char | - | TAB_ELV_FULL_CYCLE_MERKER | 1.0 | 1.0 | 0.0 | Das Ergebnis gibt an, ob der Full-Cycle Merker (Flag) im CAS gesetzt ist oder nicht. 0 = Kein Full-Cycle-Merker gesetzt 1 = Full-Cycle-Merker gesetzt 255 = Ungültig/Unbekannt |
| STAT_ELV_VORHANDEN | + | - | - | 0-n | high | unsigned char | - | TAB_ELV_ANGESTECKT | 1.0 | 1.0 | 0.0 | Das Ergebnis liefert den Status der Verbauerekennung des ELV-Steuergerätes (ELV angesteckt, bzw. nicht angesteckt) |
| STAT_ELV_HW_CODIERUNG | + | - | - | 0-n | high | unsigned char | - | TAB_ELV_HW_CODIERUNG | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den Wert des Codierparameter HW_VARIANT_BODY_STEERINGCOLUMNLOCK |

### RES_0XAA80_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSFUEHRUNGSSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_SMO_AUSFUEHRUNGSSTATUS | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob die angeforderte Aktion erfolgreich durchgeführt wurde oder ein Fehler aufgetreten ist |

### RES_0XAA95_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR | + | - | - | 0-n | high | unsigned char | - | TAB_CAS_KURZSCHLUSSABSCHALTUNG_RESET_STATUS | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den Status des Rücksetzvorgangs. |

### RES_0XAC53_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMM_TEST_OKAY | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_CA_KOMM_TEST | 1.0 | 1.0 | 0.0 | Das Result enthält das Ergebnis des Kommunikationstests. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_CA_KOMM_TEST. |

### RES_0XAC54_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_SCHL_NUM1 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 1. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM2 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 2. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM3 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 3. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM4 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 4. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM5 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 5. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM6 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 6. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM7 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 7. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM8 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 8. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |

### RES_0XAC55_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_ANTENNEN_TEST_OKAY | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_CA_ANTENNEN_TEST | 1.0 | 1.0 | 0.0 | Das Result enthält das Ergebnis des Antennentests. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_CA_ANTENNEN_TEST. |
| STAT_CA_ANTENNEN_VERBAUORT_1 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 1. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_2 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 2. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_3 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 3. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_4 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 4. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_5 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 5. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_6 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 6. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_7 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 7. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_8 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN | - | - | - | Das Result enthält das Verbauort der 8. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_STATUS_1 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_2 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_3 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_4 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_5 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_6 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_7 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_8 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |

### RES_0XAC57_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_STATUS | + | - | - | 0-n | - | unsigned char | - | TAB_ZV_ZUSTAND | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den aktuell auf den Bus gesendeten Zentralverriegelungsstatus.  Hinweise: - Dieser wird als globaler ZV-Zustand auf den CAN-Bus gesendet (Signal ST_CLSY). - Die Zuordnung erfolgt gemäß Tabelle TAB_ZV_ZUSTAND. |

### RES_0XAC58_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FBD_EMPFAENGER_INIT | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_FBD_EMPFAENGER_INIT_STATUS | - | - | - | Initialiserungsstatus des FBD Empfängers. Hinweise: - Die Zuordnung erfolgt gemäß Tabelle TAB_CAS_FBD_EMPFAENGER_INIT_STATUS. |

### RES_0XAC5D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REICHWEITENMESSUNG_AKTIV | + | - | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Status, ob der FBD-Empfänger im Reichweitenmessmodus ist: 0 = Reichweitenmessung aktiviert 1 = Reichweitenmessung deaktiviert |

### RES_0XAC5E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FEHLER_X | + | - | - | 0-n | high | unsigned char | - | TAB_ZSG_FBD_RDC_FEHLER | - | - | - | Das Result enthält die aktuell erkannten Fehler  im FBD-Empfänger.  Hinweis: Pro Fehler wird ein Result dynamisch aus dem bitcodiertem Signal des FBD-Empfängers generiert.  |
| STAT_ANZAHL_RESETS_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl an FBD-Empfänger Resets. 0-254 = Anzahl Resets 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL1_PHASE1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 1 im entsprechenden Zeitraum.  Phase 1 = 1 sek bis 10 sek 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL1_PHASE2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 1 im entsprechenden Zeitraum.  Phase 2 = 10 sek bis 1 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL1_PHASE3_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 1 im entsprechenden Zeitraum.  Phase 3 = 1 min bis 10 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL1_PHASE4_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 1 im entsprechenden Zeitraum.  Phase 4 = grösser 10 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL2_PHASE1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 2 im entsprechenden Zeitraum.  Phase 1 = 1 sek bis 10 sek 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL2_PHASE2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 2 im entsprechenden Zeitraum.  Phase 2 = 10 sek bis 1 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL2_PHASE3_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 2 im entsprechenden Zeitraum.  Phase 3 = 1 min bis 10 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL2_PHASE4_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 2 im entsprechenden Zeitraum.  Phase 4 = grösser 10 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL3_PHASE1_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 3 im entsprechenden Zeitraum.  Phase 1 = 1 sek bis 10 sek 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL3_PHASE2_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 3 im entsprechenden Zeitraum.  Phase 2 = 10 sek bis 1 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL3_PHASE3_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 3 im entsprechenden Zeitraum.  Phase 3 = 1 min bis 10 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |
| STAT_ANZAHL_STOERUNGEN_KANAL3_PHASE4_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Funkstörung auf Kanal 3 im entsprechenden Zeitraum.  Phase 4 = grösser 10 min 0 - 6 = Anzahl der Funkstörungen 7 ... 255 = Ungültig/Unbekannt |

### RES_0XD070_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_ELSV_HINTEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach hinten nicht betätigt 1: Taster eLSV nach hinten betätigt |
| STAT_TASTER_ELSV_OBEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach oben nicht betätigt 1: Taster eLSV nach oben betätigt |
| STAT_TASTER_ELSV_UNTEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach unten nicht betätigt 1: Taster eLSV nach unten betätigt |
| STAT_TASTER_ELSV_VORNE_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach vorne nicht betätigt 1: Taster eLSV nach vorne betätigt |
| STAT_TASTER_ELSV_NR | 0-n | - | signed char | - | TAB_ELSV_TASTER | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nicht betätigt 1: Taster eLSV nach hinten betätigt 2: Taster eLSV nach oben betätigt 3: Taster eLSV nach vorne betätigt 4: Taster eLSV nach unten betätigt 5: Signal ungültig |

### RES_0XD074_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADHEIZUNG_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkradheizung ist AUS; 1: Lenkradheizung ist EIN |
| STAT_LENKRADHEIZUNG_LED_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkradheizung Status LED ist AUS; 1: Lenkradheizung Status LED ist EIN |
| STAT_LENKRADHEIZUNG_STROM_WERT | A | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromaufnahme Lenkradheizung. Bereich: 0 - 25,4 Ampere |
| STAT_LENKRADHEIZUNG_AKTUATOR_STATUS_NR | 0-n | - | signed char | - | TAB_LIMIT | 1.0 | 1.0 | 0.0 | Zustand Aktuator Lenkradheizung |
| STAT_VORHANDEN_LENKRADHEIZUNG_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 1: Lenkradheizung codiert |

### RES_0XD081_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_LENKRAD_MFL_FGR_SET_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_2 | - | - | - | 0: FGR-Taste SET nicht betätigt 1: FGR-Taste SET betätigt |
| STAT_TASTER_LENKRAD_MFL_FGR_TIPPRAENDEL_NR | 0-n | - | signed char | - | TAB_MFL_RAENDEL_FGR | 1.0 | 1.0 | 0.0 | 0: Keine Betätigung  1: Rändel auf Stufe 2 unten 2: Rändel auf Stufe 1 unten 3: Rändel auf Stufe 1 oben 4: Rändel auf Stufe 2 oben 5: ungültige Position |
| STAT_TASTER_LENKRAD_MFL_FGR_RES_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_2 | - | - | - | 0: FGR-Taste RES (Wiederaufnahme) nicht betätigt  1: FGR-Taste RES (Wiederaufnahme) betätigt |
| STAT_TASTER_LENKRAD_MFL_UMSCHALT_TASTE_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Umschalttaste ACC/ DCC nicht betätigt  1: Umschalttaste ACC/ DCC betätigt |
| STAT_TASTER_LENKRAD_MFL_ACC_ABSTAND_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_3 | - | - | - | 0: FGR-Taste ACC-Abstand nicht betätigt  1: FGR-Taste ACC-Abstand betätigt |
| STAT_TASTER_LENKRAD_MFL_FGR_OFF_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_2 | - | - | - | 0: FGR-Taste OFF nicht betätigt 1: FGR-Taste OFF betätigt |
| STAT_TASTER_LENKRAD_MFL_PUSH_TO_TALK_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Push to talk nicht betätigt  1: Push to talk betätigt |
| STAT_TASTER_LENKRAD_MFL_MODE_TASTE | 0-n | - | signed char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Taste Source / Mode nicht betätigt 1: Taste Source / Mode betätigt |
| STAT_TASTER_LENKRAD_MFL_TIPPRAENDEL_BC_NR | 0-n | - | signed char | - | TAB_MFL_TIPPRAENDEL | 1.0 | 1.0 | 0.0 | 0: Tipprändel Bordcomputer (BC) nicht betätigt 1: Tipprändel Bordcomputer gedrückt  2: Tipprändel nach unten 3: Tipprändel nach oben 4: ungültige Position |
| STAT_TASTER_LENKRAD_MFL_TEL_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_1 | - | - | - | 0: Telefontaste nicht betätigt  1: Telefontaste betätigt |
| STAT_TASTER_LENKRAD_MFL_VOL_MINUS_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Taste Volume/Lautstärke minus nicht betätigt 1: Taste Volume/Lautstärke minus betätigt |
| STAT_TASTER_LENKRAD_MFL_VOL_PLUS_EIN | 0-n | - | signed char | - | TAB_TASTER_MFL_1 | 1.0 | 1.0 | 0.0 | 0: Taste Volume/Lautstärke plus nicht betätigt 1: Taste Volume/Lautstärke plus betätigt |
| STAT_TASTER_LENKRAD_MFL1_NR | 0-n | - | signed char | - | TAB_MFL_TASTEN1 | 1.0 | 1.0 | 0.0 | VS-Result 0: keine Aktion 1-n: siehe Sub-Tabelle TAB_MFL_TASTEN1 Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen. |
| STAT_TASTER_LENKRAD_MFL2_NR | 0-n | - | signed char | - | TAB_MFL_TASTEN2 | 1.0 | 1.0 | 0.0 | VS-Result 0: keine Aktion 1-n: siehe Sub-Tabelle TAB_MFL_TASTEN2 Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen. |

### RES_0XD089_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_POS_HOEHE_WERT | Digit | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Realtivwert vertikale Achse |
| STAT_ELSV_POS_LAENGE_WERT | Digit | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Realtivwert horizontale Achse |
| STAT_ELSV_BEWEGUNG_OBEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht nach oben  1: ELSV fährt nach oben |
| STAT_ELSV_BEWEGUNG_UNTEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht nach unten  1: ELSV fährt nach unten |
| STAT_ELSV_BEWEGUNG_EINGEFAHREN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht ein (vorne)  1: ELSV fährt ein (vorne) |
| STAT_ELSV_BEWEGUNG_AUSGEFAHREN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV fährt nicht aus (hinten)  1: ELSV fährt nach aus (hinten) |
| STAT_ELSV_SOFTSTOP_OBEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop oben erreicht |
| STAT_ELSV_SOFTSTOP_UNTEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop unten erreicht |
| STAT_ELSV_SOFTSTOP_EINGEFAHREN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop eingefahren erreicht |
| STAT_ELSV_SOFTSTOP_AUSGEFAHREN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: ELSV im Verfahrbereichsfenster  1: Softstop ausgefahren erreicht |
| STAT_ELSV_NORMIERUNG | 0-n | high | signed char | - | TAB_ELSV_NORMIERUNG_STATUS | - | - | - | Status ELSV Normierung siehe TAB_ELSV_NORMIERUNG_STATUS |

### RES_0XD08B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_ABGLEICH_MITTEN_FREQUENZ_WERT | Hz | - | unsigned char | - | - | 0.1 | 1.0 | 37.3 | Gelesene Mittenfrequenz des LRE LIN Slaves. |

### RES_0XD0F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_STAND_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_ENBN_AEP_STATUS_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Energie Powermanagement |
| STAT_U_BATT_ANFANG_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannung 3 Minuten nach Klemme 15 aus |
| STAT_DAUER_1_WERT | min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der Lichtaktivität im Stand |
| STAT_LICHT_1_NR | 0-n | - | unsigned char | - | TAB_ENERGIE_BETEILIGTE_BEL | 1.0 | 1.0 | 0.0 | Beteiligte Beleuchtung |
| STAT_ABSCHALTUNG_LICHT_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung Licht bei SFG (fand eine Abschaltung nach Ablauf 12h und Erreichen der Startfähigkeitsgrenze statt). |
| STAT_ABSCHALTVERHINDERER_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltverhinderergrund Licht (Erreichen obere Startfähigkeitsgrenze und 12h Timer nicht abgelaufen, kein Öffnen der Fahrertür, weitere tbd). |
| STAT_KLEMMENSTATUS_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Klemmenstatus (zum Zeitpunkt des Eintrags/Snapshots). |
| STAT_KM_STAND_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_ENBN_AEP_STATUS_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Energie Powermanagement |
| STAT_U_BATT_ANFANG_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannung 3 Minuten nach Klemme 15 aus |
| STAT_DAUER_2_WERT | min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der Lichtaktivität im Stand |
| STAT_LICHT_2_NR | 0-n | - | unsigned char | - | TAB_ENERGIE_BETEILIGTE_BEL | 1.0 | 1.0 | 0.0 | Beteiligte Beleuchtung |
| STAT_ABSCHALTUNG_LICHT_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung Licht bei SFG (fand eine Abschaltung nach Ablauf 12h und Erreichen der Startfähigkeitsgrenze statt). |
| STAT_ABSCHALTVERHINDERER_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltverhinderergrund Licht (Erreichen obere Startfähigkeitsgrenze und 12h Timer nicht abgelaufen, kein Öffnen der Fahrertür, weitere tbd). |
| STAT_KLEMMENSTATUS_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Klemmenstatus (zum Zeitpunkt des Eintrags/Snapshots). |

### RES_0XD188_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FA_FA_NR | 0-n | - | unsigned char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer siehe Tabelle |
| STAT_TASTER_FA_BF_NR | 0-n | - | unsigned char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer siehe Tabelle |
| STAT_TASTER_FA_FAH_NR | 0-n | - | unsigned char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Fahrer hinten siehe Tabelle |
| STAT_TASTER_FA_BFH_NR | 0-n | - | unsigned char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster Beifahrer hinten siehe Tabelle |
| STAT_TASTER_FA_HS_NR | 0-n | - | unsigned char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster HEckscheibe siehe Tabelle |
| STAT_TASTER_FA_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD18C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KISI_TASTER_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster Kindersicherung nicht gedrückt 1: Taster Kindersicherung gedrückt |

### RES_0XD18F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_KURZHUB_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Kurzhubfunktion gesperrt 1= Kurzhubfunktion freigeschaltet |

### RES_0XD1A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_INIT | 1.0 | 1.0 | 0.0 | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FA_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Aktuelle Bewegungsrichtung |
| STAT_FH_FA_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_FA_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FA_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FA_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FA_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FA_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FA_LAGE_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | 1.0 | 1.0 | 0.0 | 0xFF: Wert von Fensterheber nicht belegt! |
| STAT_FH_FA_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FA_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_FREIGABE | 1.0 | 1.0 | 0.0 | Aktueller Zustand Freigabe vom ZV-Master |
| STAT_FH_FA_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_FA_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_INIT | 1.0 | 1.0 | 0.0 | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BF_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Aktuelle Bewegungsrichtung |
| STAT_FH_BF_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_BF_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BF_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BF_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BF_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BF_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BF_LAGE_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | 1.0 | 1.0 | 0.0 | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BF_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BF_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_FREIGABE | 1.0 | 1.0 | 0.0 | Aktueller Zustand Freigabe vom ZV-Master |
| STAT_FH_BF_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_BF_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_INIT | 1.0 | 1.0 | 0.0 | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FAH_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Aktuelle Bewegungsrichtung |
| STAT_FH_FAH_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Fensterhebers |
| STAT_FH_FAH_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FAH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FAH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FAH_LAGE_NR | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | 1.0 | 1.0 | 0.0 | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_FAH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FAH_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_FREIGABE | 1.0 | 1.0 | 0.0 | Aktueller Zustand Freigabe vom ZV-Master |
| STAT_FH_FAH_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_FAH_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_INIT | 1.0 | 1.0 | 0.0 | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BFH_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Aktuelle Bewegungsrichtung |
| STAT_FH_BFH_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Fensterhebers |
| STAT_FH_BFH_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BFH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BFH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BFH_LAGE_NR | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | 1.0 | 1.0 | 0.0 | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BFH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BFH_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_FREIGABE | 1.0 | 1.0 | 0.0 | Aktueller Zustand Freigabe vom ZV-Master |
| STAT_FH_BFH_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_BFH_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1AD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0: aus 1: ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0: aus 1: ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0: aus 1: ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0: aus 1: ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |
| STAT_RELAIS_B_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |

### RES_0XD1AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement A Versorgung |
| STAT_HALL_A_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement A |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement B Versorgung |
| STAT_HALL_B_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement B |

### RES_0XD1AF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0: aus 1: ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0: aus 1: ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0: aus 1: ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0: aus 1: ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |
| STAT_RELAIS_B_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |

### RES_0XD1B0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement A Versorgung |
| STAT_HALL_A_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement A |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_B_VERSORGUNG_EIN_1 | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement B Versorgung |
| STAT_HALL_B_FEHLERZUSZTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement B |

### RES_0XD1B1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0: aus 1: ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0: aus 1: ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0: aus 1: ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0: aus 1: ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |
| STAT_RELAIS_B_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |

### RES_0XD1B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement A Versorgung |
| STAT_HALL_A_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement A |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement B Versorgung |
| STAT_HALL_B_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement B |

### RES_0XD1B3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0: aus 1: ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0: aus 1: ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0: aus 1: ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0: aus 1: ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |
| STAT_RELAIS_B_VERSORGUNG_WERT | mV | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Es wird die Eingangsspannung am Relais gemessen. Dies ist dann letztendlich auch die Klemmenspannung des Motors, wenn man Kontaktwiderstände an Relais und Stecker sowie Leitungswiderstände vernachlässigt. Die Funktion wird von der BSW ausgeführt. |

### RES_0XD1B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement A Versorgung |
| STAT_HALL_A_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement A |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Funktion wird von der BSW ausgeführt. 0: aus 1: ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schaltzustand Hallelement B Versorgung |
| STAT_HALL_B_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallelement B |

### RES_0XD1B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_KURZHUB_VORHANDEN | 0-n | - | unsigned char | - | TAB_FH_KURZHUB_KODIEROPTION | 1.0 | 1.0 | 0.0 | Status der Kodieroption |
| STAT_FH_FA_MOTORTEMPERATUR_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_FA_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_FA_MT_LIEFERANT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_FA_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_FA_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_FA_EEPROM_PRUEFSUMME_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STAT_EEPROM | 1.0 | 1.0 | 0.0 | Status EEPROM Checksumme |
| STAT_FH_FA_STATUS_VON_FAH | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | 1.0 | 1.0 | 0.0 | Status anderes Fenster gleiche Seite |
| STAT_FH_FA_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_WACHHALTEN | 1.0 | 1.0 | 0.0 | Status Einschlaf-Verhinderung |
| STAT_FH_FA_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_FA_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_FA_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_FA_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_FA_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_FA_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_KURZHUB_VORHANDEN | 0-n | - | unsigned char | - | TAB_FH_KURZHUB_KODIEROPTION | 1.0 | 1.0 | 0.0 | Status der Kodieroption |
| STAT_FH_BF_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_BF_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_BF_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_BF_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_BF_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_BF_EEPROM_PRUEFSUMME_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STAT_EEPROM | 1.0 | 1.0 | 0.0 | Status EEPROM Checksumme |
| STAT_FH_BF_STATUS_VON_BFH | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | 1.0 | 1.0 | 0.0 | Status anderes Fenster gleiche Seite |
| STAT_FH_BF_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_WACHHALTEN | 1.0 | 1.0 | 0.0 | Status Einschlaf-Verhinderung |
| STAT_FH_BF_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_BF_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_BF_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_BF_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_BF_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_BF_RESERVE_WERT_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B7_D

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
| STAT_FH_FAH_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B8_D

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
| STAT_FH_BFH_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1C2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_ALLE_FH_NR | 0-n | high | unsigned char | - | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | Fahrerseite (Tastenblock): Taster alle FH siehe Tabelle |

### RES_0XD1CA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMEMORY_FA | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_SITZMEMORY_BF | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_SITZMEMORY_FAH | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_SITZMEMORY_BFH | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_MASSAGE_FA | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_MASSAGE_BF | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_MASSAGE_FAH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_MASSAGE_BFH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_FERNBEDIENUNG_FA | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert für Fernbedienungstaste-Taste an der Fahrertür |
| STAT_RESET_TASTE_BF | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert für Reset-Taste an BFT |
| STAT_SCHLAFPOSITION_TASTE_BFTH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert der Taste Schlafposition an der Beifahrertür Fond |
| STAT_SITZPOSITION_TASTE_BFTH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert für Fernbedienungstaste-Taste an der Fahrertür |

### RES_0XD1CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_SITZEXT_VORNE | 0-n | high | unsigned char | - | TAB_SITZEXT_VORHANDEN | - | - | - | SB_SitzExt vorhanden für FA,BF  |
| STAT_VORHANDEN_SITZEXT_HINTEN | 0-n | high | unsigned char | - | TAB_SITZEXT_VORHANDEN | - | - | - | SB_SitzExt vorhanden für FA,BF  |

### RES_0XD220_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSPOILER_TASTER | 0-n | high | unsigned char | - | TAB_ROLLO_VERFAHREN | - | - | - | Status Taster Heckspoiler |

### RES_0XD298_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Hupe nicht aktiv 1: Hupe aktiv |

### RES_0XD30A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_BLOCK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Heckscheibe: Sonnenrollo Heckscheibe komplett ausgefahren;  0= Endpostion nicht erreicht;  1= Endposition erreicht |
| STAT_ROLLO_HECK_MOTOR_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo Heckscheibe inaktiv;  1= Motor Sonnenrollo Heckscheibe aktiv |

### RES_0XD30B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_TASTER_NR | 0-n | - | unsigned char | - | TAB_ROLLO_VERFAHREN | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |

### RES_0XD320_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_ABBLEND_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: nicht abgeblendet  1: abgeblendet |
| STAT_AUSSENSPIEGEL_ABBLEND_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Wert der Abblendstufe in % |
| STAT_AUSSENSPIEGEL_ABBLEND_ZEIT_WERT | ms | - | signed int | - | - | 10.0 | 1.0 | 0.0 | Restliche Zeit in der der Spiegel noch abgeblendet ist |

### RES_0XD322_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_RE_FAEHRT_LINKS | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel rechts fährt nach links |
| STAT_SPIEGEL_RE_FAEHRT_OBEN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel rechts fährt nach oben |
| STAT_SPIEGEL_RE_FAEHRT_RECHTS | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel rechts fährt nach rechts |
| STAT_SPIEGEL_RE_FAEHRT_UNTEN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel rechts fährt nach unten |
| STAT_SPIEGEL_RE_FAEHRT_NR | 0-n | - | signed int | - | TAB_SPIEGEL_VERFAHREN | 1.0 | 1.0 | 0.0 | VS-Result, siehe Tabelle |

### RES_0XD324_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_ABGEKLAPPT | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Spiegel nicht in abgeklappter Bordsteinposition  1: Spiegel in abgeklappter Bordsteinposition |
| STAT_SPIEGEL_BEIGEKLAPPT | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Spiegel ausgeklappt  1: Spiegel beigeklappt |

### RES_0XD327_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_LI_FAEHRT_LINKS | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0:-  1: Spiegel links fährt nach links |
| STAT_SPIEGEL_LI_FAEHRT_OBEN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel links fährt nach oben |
| STAT_SPIEGEL_LI_FAEHRT_RECHTS | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel links fährt nach rechts |
| STAT_SPIEGEL_LI_FAEHRT_UNTEN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: -  1: Spiegel links fährt nach unten |
| STAT_SPIEGEL_LI_FAEHRT_NR | 0-n | - | signed int | - | TAB_SPIEGEL_VERFAHREN | 1.0 | 1.0 | 0.0 | VS-Result, siehe Tabelle |

### RES_0XD328_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_LI_POSHOR_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition Spiegel links horizontal Bereich: 0-255 Inkremente |
| STAT_SPIEGEL_LI_POSVERT_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition Spiegel links vertikal. Bereich: 0-255 Inkremente |

### RES_0XD32D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HEIZUNG_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Spiegelheizung ausgeschalten 1: Spiegelheizung eingeschalten |
| STAT_SPIEGEL_HEIZUNG_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Wert der Spiegelheizung in % |

### RES_0XD32F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENSPIEGEL_ABBLEND_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angabe Abblendgrad in % |

### RES_0XD331_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_BEIKLAPPEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster Spiegel Beiklappen nicht gedrückt  1: Taster Spiegel Beiklappen gedrückt |
| STAT_SPIEGEL_SCHALTER_FA_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spiegelauswahl Fahrer / Beifahrer  0: Beifahrerspiegel  1: Fahrerspiegel |
| STAT_SPIEGEL_TASTER_LINKS_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_OBEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_RECHTS_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_UNTEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_NR | 0-n | - | signed int | - | TAB_SPIEGEL_VERFAHREN | 1.0 | 1.0 | 0.0 | VS-Result, siehe Tabelle |

### RES_0XD333_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_RE_POSHOR_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Position Spiegel rechts horizontal Bereich: 0-255 Inkremente |
| STAT_SPIEGEL_RE_POSVERT_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition Spiegel rechts vertikal Bereich: 0-255 Inkremente |

### RES_0XD347_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HC2_LINKS_NR | 0-n | - | signed char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | Status HC2-Anzeige linker Spiegel |
| STAT_SPIEGEL_HC2_RECHTS_NR | 0-n | - | signed char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | Status HC2-Anzeige rechter Spiegel |

### RES_0XD350_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHDUESENHEIZUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert: 0 = 0% 1 = 25% 2 = 50% 3 = 75% 4 = 100% |

### RES_0XD352_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHERPUMPE_HINTEN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert den Zustand der Ansteuerung der vorderen Wascherpumpe:  0= Ansteuerung hintere Wascherpumpe nicht aktiv;  1= Ansteuerung hintere Wascherpumpe aktiv |

### RES_0XD355_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_RSK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob der Frontscheibenwischer in Park-Position ist.  0= Frontscheibenwischer nicht in Park-Position;  1= Frontscheibenwischer in Park-Position |

### RES_0XD356_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKWISCHER_RSK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt an, ob der Heckscheibenwischer in Park-Position ist:  0= Heckscheibenwischer nicht in Park-Position;  1= Heckscheibenwischer in Park-Position  Falls 2 Heckscheibenwischer verbaut sind, wird 1 zurückgegeben, falls BEIDE Wischer in Park-Position sind |

### RES_0XD357_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHWASSERSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Befüllungszustand des  Waschwasserbehälters:  0= Waschwasserbehälter nicht ausreichend befüllt; 1= Waschwasserbehälter ausreichend befüllt |
| STAT_WASCHWASSERSTAND_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Pegelwerts in mv. 0xFFFF: ungültiger Wert oder Wert nicht unterstützt |

### RES_0XD35B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_WISCHER_TASTER_AXIAL_EIN | 0-n | - | signed char | - | TAB_LENKSTOCK_WISCHER_AXIAL_TASTER | - | - | - | Ergebnis nicht relevant |
| STAT_LENKSTOCK_WISCHER_FRONTWASCHEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Frontwaschen;  1= Lenkstock Wischer in Stellung Frontwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWASCHEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Heckwaschen;  1= Lenkstock Wischer in Stellung Heckwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWISCHEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Heckwischen;  1= Lenkstock Wischer in Stellung Heckwischen |
| STAT_LENKSTOCK_WISCHER_POS_INTERVALL | 0/1 | - | signed char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Intervall oder Automatik; 1= Lenkstock Wischer in Stellung Intervall oder Automatik |
| STAT_LENKSTOCK_WISCHER_NULLSTELLUNG | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht Nullstellung;  1= Lenkstock Wischer Nullstellung;  Hinweis: Bei einem Schalter entspricht die Nullstellung der Stufe Aus, bei einem Taster entspricht die Nullstellung der Mittelstellung |
| STAT_LENKSTOCK_WISCHER_POS_1 | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Position 1;  1= Lenkstock Wischer in Position 1 |
| STAT_LENKSTOCK_WISCHER_POS_2 | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Position 2;  1= Lenkstock Wischer in Position 2 |
| STAT_LENKSTOCK_WISCHER_RAENDEL_NR | 0-n | - | signed char | - | TAB_WISCHER_RAENDEL | 1.0 | 1.0 | 0.0 | VS-Result Lenkstock Wischer;  0= Wischer Rändelrad Stufe 1;  1= Wischer Rändelrad Stufe 2;  2= Wischer Rändelrad Stufe 3;  3= Wischer Rändelrad Stufe 4;  4= Wischer Rändelrad ungültige Position; Hinweis: Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen |
| STAT_LENKSTOCK_WISCHER_TIPPWISCHEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Tippwischen;  1= Lenkstock Wischer in Stellung Tippwischen |
| STAT_LENKSTOCK_WISCHER_NR | 0-n | - | signed char | - | TAB_LENKSTOCK_WISCHER | 1.0 | 1.0 | 0.0 | VS-Result Lenkstock Wischer; Siehe Sub-Tabelle |

### RES_0XD35C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHERPUMPE_VORNE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Wascherpumpe vorne nicht aktiv  1: Wascherpumpe vorne aktiv |

### RES_0XD362_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_MONTAGE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Frontscheibenwischer nicht in Montage-Position  1: Frontscheibenwischer in Montage-Position |

### RES_0XD363_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_SERVICE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Frontscheibenwischer nicht in Service-Position  1: Frontscheibenwischer in Service-Position |

### RES_0XD369_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HC2_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Spurwechsel-Assistent 0 = nicht gerückt 1 = gedrückt |

### RES_0XD36A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HC2_TASTER_LED_NR | 0-n | - | signed char | - | TAB_LED | 1.0 | 1.0 | 0.0 | LED für den Spurwechsel-Assistent |

### RES_0XD376_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGEN_INT_WERT | % | - | signed int | - | - | 1.0 | 2.0 | 0.0 | Regenintensität in 0 .. 75 % |
| STAT_RESERVE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Änderungen |

### RES_0XD389_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NIVI_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XD399_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_AKTUATOR_WERT | mA | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status TLC Aktuator Stromwert |
| STAT_TLC_AKTUATOR_STATUS_NR | 0-n | - | unsigned char | - | TAB_TLC_STATUS | 1.0 | 1.0 | 0.0 | Aktueller Zustand TLC |
| STAT_TLC_AKTUATOR_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: TLC nicht aktiv 1: TLC aktiv |
| STAT_TLC_AKTUATOR_HW_LEITUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Status Spannungswert Hardwareleitung |

### RES_0XD39A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XD39B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_TASTER_LED_NR | 0-n | - | signed char | - | TAB_LED | 1.0 | 1.0 | 0.0 | 0 = LED aus 1 = LED ein 2 = LED defekt |

### RES_0XD3BE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTLICHT_WERT | mW/m² | - | unsigned int | - | - | 6.7 | 1.0 | 0.0 | ungefilterter Frontlichtwert. Liegt zwischen 0 und 1701,8 mW/m² |
| STAT_FRONTLICHT_GEMITTELT_WERT | mW/m² | - | unsigned int | - | - | 6.7 | 1.0 | 0.0 | gemittelter Frontlichtwert. Liegt zwischen 0 und 1701,7  mW/m² |
| STAT_UMGEBUNGSLICHT_WERT | Lux | - | signed int | - | - | 100.0 | 1.0 | 0.0 | ungefiltetes Umgebungslicht. Bereich 0 bis 25500 Lux |
| STAT_UMGEBUNGSLICHT_GEMITTELT_WERT | Lux | - | signed int | - | - | 100.0 | 1.0 | 0.0 | gemittelter Wert Umgebungslicht. Bereich 0 bis 25500 Lux |
| STAT_HUD_WERT | Digit | - | signed int | - | - | 1.0 | 1.0 | 0.0 | ungefilterter Wert Hintergrund-Helligkeit. Bereich 0 bis 255 |
| STAT_RESERVE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Änderungen |

### RES_0XD500_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHEREINLERNVORGANG | 0-n | high | unsigned char | - | TAB_WISCHEREINLERNVORGANG | - | - | - | Status des Wischereinlernvorgangs |

### RES_0XD505_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_WISCHZYKLEN_WERT | - | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | Anzahl der Wischzyklen in 100er Schritten |
| STAT_CARCODE | 0-n | high | unsigned char | - | TAB_CARCODE_WISCHERMOTOR | 1.0 | 1.0 | 0.0 | Liefert den Carcode des Wischermotors |

### RES_0XD52C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Innenlicht Werte: 0 - Aus, 1 - Ein |
| STAT_LESELICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Leselicht links Werte: 0 - Aus, 1 - Ein |
| STAT_LESELICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Leselicht rechts Werte: 0 - Aus, 1 - Ein |
| STAT_WELCOMELIGHT | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Welcomelight Werte: 0 - Aus, 1 - Ein |
| STAT_AMBIENTELICHT | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Ambientelicht Werte: 0 - Aus, 1 - Ein |
| STAT_TASTER_LESELICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Taster Leselicht links Werte: 0 - nicht betätigt, 1 - betätigt |
| STAT_TASTER_LESELICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE ¿ Status Taster Leselicht rechts Werte: 0 - nicht betätigt, 1 - betätigt |

### RES_0XD531_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMS_BESTROMT_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Linkes TMS nicht bestromt 1: Linkes TMS bestromt |
| STAT_TMS_BESTROMT_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Rechtes TMS nicht bestromt 1: Rechtes TMS bestromt |

### RES_0XD537_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGFAHRLICHT_DEAKTIVIERT | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Bedeutung  1: Tagfahrlicht deaktiviert |

### RES_0XD53A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LESELICHT_LINKS_VORNE | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 1: Leselicht links vorne ein |
| STAT_LESELICHT_RECHTS_VORNE | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 1: Leselicht rechts vorne ein |

### RES_0XD542_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNBELEGT_EIN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unbelegt, nur um Reihenfolge zur Tabelle einzuhalten |
| STAT_FUNKTION_STANDLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Standlicht aus    1: Standlicht ein |
| STAT_FUNKTION_STANDLICHT_ES_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Standlicht EnergySave aus   1: Standlicht EnergySave ein |
| STAT_FUNKTION_ABBLENDLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Abblendlicht  aus   1: Abblendlicht  ein |
| STAT_FUNKTION_TAGFAHRLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Tagfahrlicht aus    1: Tagfahrlicht ein |
| STAT_FUNKTION_FERNLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Fernlicht/Lichthupe  aus   1: Fernlicht/Lichthupe ein |
| STAT_FUNKTION_BLINKER_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Blinker links aus    1: Blinker links ein |
| STAT_FUNKTION_BLINKER_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Blinker rechts aus    1: Blinker rechts ein |
| STAT_FUNKTION_NEBELLICHT_VORNE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Nebellicht vorne aus    1: Nebellicht vorne ein |
| STAT_FUNKTION_ABBIEGELICHT_VORNE_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Abbiegelicht vorne links aus    1: Abbiegelicht vorne links ein |
| STAT_FUNKTION_ABBIEGELICHT_VORNE_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Abbiegelicht vorne rechts aus    1: Abbiegelicht vorne rechts ein |
| STAT_FUNKTION_RESERVE_1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_FUNKTION_BREMSLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Bremslicht aus    1: Bremslicht ein |
| STAT_FUNKTION_BFD_ESS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Bremslicht Flächenerweiterung / Emergency Stop Signal aus    1: Bremslicht Flächenerweiterung / Emergency Stop Signal ein |
| STAT_FUNKTION_NEBELSCHLUSSLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Nebelschlusslicht aus    1: Nebelschlusslicht ein |
| STAT_FUNKTION_RUECKFAHRLICHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Rückfahrlicht aus    1: Rückfahrlicht ein |
| STAT_FUNKTION_PARKLICHT_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Parklicht links aus    1: Parklicht links ein |
| STAT_FUNKTION_PARKLICHT_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Parklicht rechts aus    1: Parklicht rechts ein |
| STAT_FUNKTION_WARNBLINKEN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Standlicht aus    1: Standlicht ein |
| STAT_FUNKTION_INNENBELEUCHTUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Innenbeleuchtung aus,1: Innenbeleuchtung ein,Job liefert bei LI, LU, XNF, LK kein Ergebnis zurück. |

### RES_0XD547_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AHL_REFERENZLAUF_NR | 0-n | - | unsigned char | - | TAB_LWR_REFERENZLAUF | 1.0 | 1.0 | 0.0 | Status LWR-Referenzlauf  0: nicht gestartet  1: aktiv  2: ohne Fehler abgeschlossen 3: mit Fehler abgebrochen |
| STAT_LWR_REFERENZLAUF_NR | 0-n | - | unsigned char | - | TAB_LWR_REFERENZLAUF | 1.0 | 1.0 | 0.0 | Status LWR-Referenzlauf  0: nicht gestartet  1: aktiv  2: ohne Fehler abgeschlossen 3: mit Fehler abgebrochen |

### RES_0XD54C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_TASTER_VORNE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht betätigt 1: Taster betaetigt |
| STAT_INNENLICHT_VORNE_DAUER_AUS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Daueraus nicht aktiv 1: Daueraus aktiv |

### RES_0XD54D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_BELADUNGSSENSOR_VORNE_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Busnachricht Beladungssensor vorne in mm |
| STAT_BUS_IN_BELADUNGSSENSOR_HINTEN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Busnachricht Beladungssensor hinten in mm |

### RES_0XD550_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LICHTSCHALTEREINHEIT_AL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Abblendlicht 1: Schalter in Stellung Abblendlicht |
| STAT_LICHTSCHALTEREINHEIT_FLC_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Fahrlichtkontrolle (FLC) 1: Schalter in Stellung Fahrlichtkontrolle (FLC) |
| STAT_LICHTSCHALTEREINHEIT_NEUTRAL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Neutral 1: Schalter in Stellung Neutral |
| STAT_LICHTSCHALTEREINHEIT_STL_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Schalter nicht in Stellung Standlicht 1: Schalter in Stellung Standlicht |
| STAT_LICHTSCHALTEREINHEIT_NR | 0-n | - | unsigned char | - | TAB_LICHTSCHALTER | 1.0 | 1.0 | 0.0 | VS-Result, Bedeutung siehe Tabelle |

### RES_0XD553_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LESELICHT_LINKS_HINTEN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 1= Leselicht links hinten ein |
| STAT_LESELICHT_RECHTS_HINTEN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 1: Leselicht rechts hinten ein |

### RES_0XD555_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_FLA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PIA Fernlichtassistent  0: Aus  1: Ein |
| STAT_PIA_FOLLOW_ME_HOME_ZEIT_WERT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Zeit für Follow Me Home |
| STAT_PIA_WELCOMELIGHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PIA Welcomelight  0: Aus  1: Ein |

### RES_0XD558_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POS_HOR_LINKS_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Horizontale Position linker Scheinwerfer |
| STAT_POS_VER_LINKS_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Vertikale Position linker Scheinwerfer |
| STAT_POS_HOR_RECHTS_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Horizontale Position rechter Scheinwerfer |
| STAT_POS_VER_RECHTS_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Vertikale Position rechter Scheinwerfer |

### RES_0XD55E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_MIND_ANZAHL_BLINKZYKLEN_BEI_TIPP_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mind.-Anzahl Blinkzyklen bei Tippblinken momentan |
| STAT_PIA_QUITT_BLINK_ENTRIEGELN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quittierungsblinken bei Entriegeln momentan  0: Aus  1: Ein |
| STAT_PIA_QUITT_BLINK_SICHERN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quittierungsblinken bei Sichern momentan  0: Aus   1: Ein |

### RES_0XD55F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAN_LWR_MAXPOS_WERT | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angesteuerter Winkelwert bei MAX-Stellung des LWR-Rändelrads |
| STAT_MAN_LWR_MINPOS_WERT | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angesteuerter Winkelwert bei MIN-Stellung des LWR-Rändelrads |
| STAT_MAN_LWR_LINKS_WERT | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Winkelwert LWR links |
| STAT_MAN_LWR_RECHTS_WERT | ° | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Winkelwert LWR rechts |

### RES_0XD57B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_HINTEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Aus  1: Ein |
| STAT_INNENLICHT_HINTEN_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe Leuchtkraft in % Wertebereich 0-100% |

### RES_0XD57C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_VORNE_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Aus  1: Ein |
| STAT_INNENLICHT_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Leuchtkraft in % Wertebereich 0-100 % |

### RES_0XD57E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEINE_LWR_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: LWR codiert  1: keine LWR codiert |
| STAT_MAN_LWR_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: manuelle LWR nicht codiert  1: manuelle LWR codiert |
| STAT_AUT_LWR_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: automatische LWR nicht codiert  1: automatische LWR codiert |
| STAT_DYN_LWR_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: dynamische LWR nicht codiert  1: dynamische LWR codiert |

### RES_0XD57F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_KLEMME_VA_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Klemme VA:   0: Aus  1: Ein |
| STAT_INNENLICHT_KLEMME_VA_NACHLAUFZEIT_WERT | s | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Nachlaufzeit in Sekunden Wertebereich 0-1800 Sekunden (entspricht 30 Minuten) |

### RES_0XD582_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_LINKS_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp links; 1: Lenkstock Blinker in Stellung Blinker links |
| STAT_LENKSTOCK_BLINKER_LINKS_DAUER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer links; 1: Lenkstock Blinker in Stellung Blinker Dauer links |
| STAT_LENKSTOCK_BLINKER_RECHTS_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp rechts; 1: Lenkstock Blinker in Stellung Blinker rechts |
| STAT_LENKSTOCK_BLINKER_RECHTS_DAUER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer rechts; 1: Lenkstock Blinker in Stellung Blinker Dauer rechts |
| STAT_LENKSTOCK_BLINKER_NULLSTELLUNG_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker nicht in Nullstellung; 1: Lenkstock Blinker in Nullstellung |
| STAT_LENKSTOCK_BLINKER_NR | 0-n | - | signed char | - | TAB_LENKSTOCK_BLINKER | 1.0 | 1.0 | 0.0 | Auflistung siehe Sub-Tabelle |

### RES_0XD583_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_FERNLICHT_BETAETIGT | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Taster Fernlicht nicht betätigt; 1: Lenkstock Blinker Taster Fernlicht nicht betätigt |
| STAT_LENKSTOCK_BLINKER_LICHTHUPE_BETAETIGT | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Taster Lichthupe nicht betätigt; 1: Lenkstock Blinker Taster Lichthupe betätigt |

### RES_0XD585_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_BLINKER_WIPPE_NACH_OBEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Wippe nach oben nicht betätigt; 1: Lenkstock Blinker Wippe nach oben betätigt |
| STAT_LENKSTOCK_BLINKER_WIPPE_NACH_UNTEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Wippe nach unten nicht betätigt; 1: Lenkstock Blinker Wippe nach unten betätigt |
| STAT_LENKSTOCK_BLINKER_WIPPE_NULLSTELLUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkstock Blinker Wippe nicht in Nullstellung; 1: Lenkstock Blinker Wippe in Nullstellung |
| STAT_LENKSTOCK_BLINKER_TASTER_WIPPE_NR | 0-n | - | unsigned char | - | TAB_LENKSTOCK_BLINKER_WIPPE | 1.0 | 1.0 | 0.0 | VS-Result 0: Lenkstock Blinker Wippe nicht betätigt; 1: Lenkstock Blinker Wippe nach oben betätigt;  2: Lenkstock Blinker Wippe nach unten betätigt |

### RES_0XD58A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LWR_POSITION_MAX_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Rändelrad nicht in Stellung MAX  1: Rändelrad in Stellung MAX |
| STAT_LWR_POSITION_MIN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Rändelrad nicht in Stellung MIN 1: Rändelrad in Stellung MIN |

### RES_0XD5D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMBIENTE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Ambiente AUS; 1= Ambiente EIN |
| STAT_AMBIENTE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angabe der Leuchtkraft in % Wertebereich 0-100% |

### RES_0XD5DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BELEGUNG_LCI_0 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | - | - | - | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |

### RES_0XD5E5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TMS_ID_LINKS_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Codierkennung TMS links  <<< Details sind vom Lieferanten zu befüllen !!! >>> |
| STAT_TMS_ID_RECHTS_WERT | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Codierkennung TMS rechts <<< Details sind vom Lieferanten zu befüllen !!! >>> |

### RES_0XD5E6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRLICHTSITUATION_LINKS_NR | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_2 | 1.0 | 1.0 | 0.0 | Aktuelle Fahrlichtsituation links auslesen |
| STAT_FAHRLICHTSITUATION_RECHTS_NR | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_2 | 1.0 | 1.0 | 0.0 | Aktuelle Fahrlichtsituation rechts auslesen |

### RES_0XD601_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VR_WERT | mm | high | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes vorn in mm. |
| STAT_HOEHENSTAND_HR_WERT | mm | high | motorola float | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe des Höhenstandes hinten in mm. |
| STAT_HOEHENSTAND_ROHWERT_VR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand vorn. |
| STAT_HOEHENSTAND_ROHWERT_HR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Rohsignal Sensor Höhenstand hinten. |
| STAT_HOEHENSTAND_SENSOR_VR_NR | 0-n | - | signed int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor vorn. |
| STAT_HOEHENSTAND_SENSOR_HR_NR | 0-n | - | signed int | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustandsabfrage Höhenstandssensor hinten. |
| STAT_HOEHENSTAND_VR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset. |
| STAT_HOEHENSTAND_HR_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandsoffset. |
| STAT_HOEHENSTAND_VR_NR_1 | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandssteigung |
| STAT_HOEHENSTAND_HR_NR_1 | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Plausiblilisierung Höhenstandssteigung |
| STAT_OFFSET_S0_VR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne (mm) |
| STAT_OFFSET_S0_HR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten (mm) |

### RES_0XD603_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VERSORGUNG_VR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand vorn  in mV. |
| STAT_HOEHENSTAND_VERSORGUNG_HR_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Ausgabe der Versorgungsspannung des Sensor Höhenstand hinten in mV. |

### RES_0XD604_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 vorne rechts (mV/mm) |
| STAT_GRADIENT_C0_HR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C0 hinten rechts (mV/mm) |
| STAT_GRADIENT_C1_VR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 vorne rechts (mV/mm) |
| STAT_GRADIENT_C1_HR_WERT | mV/mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Gradient_C1 hinten rechts (mV/mm) |
| STAT_OFFSET_S0_VR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 vorne rechts (mm) |
| STAT_OFFSET_S0_HR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S0 hinten rechts (mm) |
| STAT_OFFSET_S1_VR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 vorne rechts (mm) |
| STAT_OFFSET_S1_HR_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Werksjustage-Offset_S1 hinten rechts (mm) |

### RES_0XD612_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_GRUPPE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ECO und ECO+ |
| STAT_COMFORT_GRUPPE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Basis und Komfort |
| STAT_SONSTIGE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sonstige Modi |

### RES_0XD622_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HDC_TASTE | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Status der HDC Taste |
| STAT_PDC_TASTE | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Status der PDC Taste |
| STAT_SV_TASTE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Status der SV Taste |
| STAT_FES_WIPPE_VORNE | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Status der FES Wippe vorne |
| STAT_SV_FES_WIPPE_HINTEN | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Status der FES Wippe hinten |
| STAT_DSC_TASTE | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Status der DSC Taste |
| STAT_HUD_TASTE | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Status der HUD Taste |
| STAT_EV_TASTE | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Status der EV Taste Hinweise nur für doppelte Tasten: Der Job liefert immer 1 wenn der Taster gedrückt ist, gleichgültig in welche Richtung. |
| STAT_EV_DEKREMENT_TASTE | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Status der EV-Dekrement/-Minus Taste |
| STAT_EV_INKREMENT_TASTE | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Status der EV-Inkrement/-Plus Taste |
| STAT_RESERVE | 0/1 | high | unsigned int | 0xFC00 | - | - | - | - | Status zukünftiger Tasten (Vorbelegung 0=nicht gedrückt) |

### RES_0XD625_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FES_LASTMODE | 0-n | high | unsigned char | - | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | Aufstart Modus |
| STAT_FES_SLEEPTIME_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit bei Kl15 aus |

### RES_0XD627_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_HDC_TASTE | 0/1 | - | unsigned char | - | - | - | - | - | Angabe Verbauzustand Taste: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_VERBAU_PDC_TASTE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Verbau PDC Taste |
| STAT_VERBAU_SV_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Status Verbau SV Taste |
| STAT_VERBAU_DSC_TASTE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Verbau DSC Taste |
| STAT_VERBAU_FES_WIPPE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an ob die FES Wippe verbaut ist |
| STAT_VERBAU_HUD_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an ob die HUD Taste verbaut ist |

### RES_0XD629_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HDC_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der HDC Taste (0=nicht gedrueckt; 1= gedrueckt) |
| STAT_PDC_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der PDC Taste (0=nicht gedrueckt; 1= gedrueckt) |
| STAT_SV_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der SV Taste (0=nicht gedrueckt; 1= gedrueckt) |
| STAT_FES_WIPPE_VORNE | 0/1 | high | unsigned char | - | - | - | - | - | Status der FES Wippe vorne (0=nicht gedrueckt; 1= gedrueckt) |
| STAT_SV_FES_WIPPE_HINTEN | 0/1 | high | unsigned char | - | - | - | - | - | Status der FES WIPPE hinten (0=nicht gedrueckt; 1= gedrueckt) |
| STAT_DSC_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der DSC Taste (0=nicht gedrueckt; 1= gedrueckt) |
| STAT_HUD_TASTE | 0/1 | high | unsigned char | - | - | - | - | - | Status der HUD Taste (0=nicht gedrueckt; 1= gedrueckt) |

### RES_0XD62A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORONA_LED_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0= Corona LED AUS; 1=Corona LED EIN |

### RES_0XD642_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKWISCHER_SERVICE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Heckscheibenwischer nicht in Service-Position  1: Heckscheibenwischer in Service-Position |

### RES_0XD669_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_HDC_TASTE | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Status Verbau HDC Taste |
| STAT_VERBAU_PDC_TASTE | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Status Verbau PDC Taste |
| STAT_VERBAU_SV_TASTE | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Status Verbau SV Taste |
| STAT_VERBAU_DSC_TASTE | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Status Verbau DSC Taste |
| STAT_VERBAU_FES_WIPPE | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Status Verbau FES Wippe |
| STAT_VERBAU_HUD_TASTE | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Status Verbau HUD Taste |
| STAT_VERBAU_EV_TASTE | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Status Verbau EV Taste |
| STAT_VERBAU_RESERVE | 0/1 | high | unsigned int | 0xFF80 | - | - | - | - | Status Verbau zukünfigter Tasten (Vorbelegung 0=nicht verbaut) |

### RES_0XD672_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLMITTELSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Kühlmittelbehaelter nicht ausreichend befüllt; 1= Kühlmittelbehällter ausreichend befüllt |
| STAT_KUEHLMITTELSTAND_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Pegelwerts in mv. 0xFFFF: ungültiger Wert oder Wert nicht unterstützt |

### RES_0XD71A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GZB_FA_POS_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Gurtzubringer Fahrer |
| STAT_GZB_FA_ENDLAGE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gurtzubringer Fahrer Endlage erreicht |

### RES_0XD71B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GZB_BF_POS_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position Gurtzubringer Beifahrer |
| STAT_GZB_BF_ENDLAGE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gurtzubringer Beifahrer Endlage erreicht |

### RES_0XD72A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe der Sitzheizung auf der Beifahrerseite |

### RES_0XD72F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_BF_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne   GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD730_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_BF_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BF_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BF_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD732_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_FA_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD737_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe auf der Fahrerseite |

### RES_0XD771_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FA_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FA_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FA_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe auf der Beifahrerseite hinten |

### RES_0XD7B0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_BFH_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne  GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD7EA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FAH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv 1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FAH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb 1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FAH_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7EB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe auf der Fahrerseite hinten |

### RES_0XD7EC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung AUS  1: Sitzheizung EIN |
| STAT_SITZHEIZUNG_BFH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Verbrauchsreduzierung nicht aktiv 1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BFH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BFH_TIMEOUT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |

### RES_0XD7F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Sitz  GRENZEN DURCH ENTWICKLER ANZUGEBEN |
| STAT_SITZHEIZUNG_FAH_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Gemessene Temperatur Lehne GRENZEN DURCH ENTWICKLER ANZUGEBEN |

### RES_0XD89E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASSERVENTIL_FAHRER_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Wasserventil Fahrer in Prozent |
| STAT_WASSERVENTIL_BEIFAHRER_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Wasserventil Beifahrer in Prozent |

### RES_0XD8DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UMSCHALTVENTIL_EIN | 0/1 | - | signed char | - | - | - | - | - | 0: Umschaltventil offen 1: Umschaltventil geschlossen |

### RES_0XD8E0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKKLAPPEN_WIPPE | 0-n | high | unsigned char | - | TAB_HK_WIPPE | - | - | - | Status Heckklappen Wippe |

### RES_0XD903_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSATZWASSERPUMPE_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Zusatzwasserpumpenstatus: 0 = AUS, 1 = EIN |

### RES_0XD906_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMAKOMPRESSOR_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Klimakompressor: 0 = AUS, 1 = EIN |
| STAT_KLIMAKOMPRESSOR_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Klimakompressor: PWM-Signal in Prozent |

### RES_0XD916_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0/1 | - | unsigned char | 0x01 | - | - | - | - | 0=Kompressorkupplung nicht vorhanden 1=Kompressorkupplung vorhanden |
| STAT_VORHANDEN_UMSCHALTVENTIL | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0=Umschaltventil nicht vorhanden; 1=Umschaltventil vorhanden |

### RES_0XD95A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_WASSERVENTIL_MONO | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_WASSERVENTIL_DUO | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD961_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLARSENSOR_FA_WERT | W/m² | - | unsigned int | - | - | 4.0158 | 1.0 | 0.0 | Solarsensor, Solarwert FA. Bereich 0 bis 1020 W/m2 |
| STAT_SOLARSENSOR_BF_WERT | W/m² | - | unsigned int | - | - | 4.0158 | 1.0 | 0.0 | Solarsensor, Solarwert BF. Bereich 0 bis 1020 W/m2 |

### RES_0XD96C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BESCHLAGSENSOR_WERT | % | - | signed int | - | - | 1.0 | 2.0 | 0.0 | Angabe relative Feuchte in Prozent 0 ... 100 % |
| STAT_BESCHLAGSENSOR_TEMP_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Gemessene Temperatur in °C -40 ... 85 °C |

### RES_0XD970_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSCHEIBENHEIZUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Heckscheibenheizung: 0 = AUS, 1 = EIN |

### RES_0XD971_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMPRESSOR_KUPPLUNG_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Kompressorkupplung offen 1: Kompressorkupplung geschlossen |

### RES_0XDA0D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | HeadUp-Display  0 = nicht gedrückt  1 = gedrückt |

### RES_0XDA24_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRAD_SCHALTPADDLE_NR | 0-n | - | unsigned char | - | TAB_SCHALTWIPPE | - | - | - | Status Schaltpaddles |
| STAT_SCHALTPADDLES_AD_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AD-Wert Schaltpaddles |

### RES_0XDA49_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND | 0-n | high | unsigned char | - | TAB_ZSG_ZUSTAND_BEDIENSTELLE | - | - | - | Das Result enthält den aktuellen Zustand der Bedienstelle im ZSG. |

### RES_0XDA54_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DC_DC_WANDLER_1_VORHANDEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: DC/DC-Wandler 1 nicht vorhanden 1: DC/DC-Wandler 1 vorhanden |
| STAT_DC_DC_WANDLER_2_VORHANDEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0: DC/DC-Wandler 2 nicht vorhanden 1: DC/DC-Wandler 2 vorhanden |

### RES_0XDA5F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE_NAME_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |

### RES_0XDA61_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_FRONTKLAPPE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Frontklappe in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_HECKKLAPPE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Heckklappe in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_HECKSCHEIBE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Heckscheibe in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_MOTORHAUBE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Motorhaube in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_SPLITDOORS | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Split Doors in den Codierung aktiviert sind. 0 = Nicht aktiv 1 = Aktiv |

### RES_0XDA77_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_BF | 0-n | high | unsigned char | - | TAB_CAS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür vorne |

### RES_0XDA78_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_BFH | 0-n | high | unsigned char | - | TAB_CAS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür hinten |

### RES_0XDA79_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_FA | 0-n | high | unsigned char | - | TAB_CAS_TUERKONTAKT | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür |

### RES_0XDA7A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_FAH | 0-n | high | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür hinten |

### RES_0XDA7D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKLAPPE_AUSSEN_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA80_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA81_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_BF_ENTRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Beifahrertuer nicht entriegelt 1: Schloss Beifahrertuer entriegelt |
| STAT_ZV_BF_VERRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Beifahrertuer nicht verriegelt 1: Schloss Beifahrertuer verriegelt |
| STAT_ZV_BF_GESICHERT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Beifahrertuer nicht gesichert 1: Schloss Beifahrertuer gesichert |

### RES_0XDA82_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_BFH_ENTRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Beifahrertuer hinten nicht entriegelt 1: Schloss Beifahrertuer hinten entriegelt |
| STAT_ZV_BFH_VERRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Beifahrertuer hinten nicht verriegelt 1: Schloss Beifahrertuer hinten verriegelt |
| STAT_ZV_BFH_GESICHERT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Beifahrertuer hinten nicht gesichert 1: Schloss Beifahrertuer hinten gesichert |

### RES_0XDA83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FA_ENTRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Fahrertuer nicht entriegelt 1: Schloss Fahrertuer entriegelt |
| STAT_ZV_FA_VERRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Fahrertuer nicht verriegelt 1: Schloss Fahrertuer verriegelt |
| STAT_ZV_FA_GESICHERT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Fahrertuer nicht gesichert 1: Schloss Fahrertuer gesichert |

### RES_0XDA84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FAH_ENTRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Fahrertuer hinten nicht entriegelt 1: Schloss Fahrertuer hinten entriegelt |
| STAT_ZV_FAH_VERRIEGELT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Fahrertuer hinten nicht verriegelt 1: Schloss Fahrertuer hinten verriegelt |
| STAT_ZV_FAH_GESICHERT | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | 0: Schloss Fahrertuer hinten nicht gesichert 1: Schloss Fahrertuer hinten gesichert |

### RES_0XDA85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HECKKLAPPE_ENTRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_ENTRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss ist nicht entriegelt (nicht aktiv ); 1: Schloss ist entriegelt (aktiv); 255: Signal ungültig / unplausibel |
| STAT_ZV_HECKKLAPPE_VERRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_VERRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss ist nicht verriegelt (nicht aktiv ); 1: Schloss ist verriegelt (aktiv); 255: Signal ungültig / unplausibel |

### RES_0XDA86_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_HECKSCHEIBE_ENTRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_ENTRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss Heckscheibe nicht entriegelt 1: Schloss Heckscheibe entriegelt |
| STAT_ZV_HECKSCHEIBE_VERRIEGELT_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_VERRIEGELT | 1.0 | 1.0 | 0.0 | 0: Schloss Heckscheibe nicht verriegelt  1: Schloss Heckscheibe verriegelt |

### RES_0XDA87_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FA_NR | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Fahrertüre. |
| STAT_ZV_BF_NR | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Beifahrertüre. |
| STAT_ZV_FAH_NR | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Fahrertüre hinten. |
| STAT_ZV_BFH_NR | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Beifahrertüre hinten. |

### RES_0XDA89_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FRONTKLAPPE_NR | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA8A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND | 0-n | high | unsigned char | - | TAB_ZSG_ZUSTAND_BEDIENSTELLE | - | - | - | Das Result enthält den aktuellen Zustand der Bedienstelle im ZSG. Zuordnung erfolgt gemäß Tabelle TAB_ZSG_ZUSTAND_BEDIENSTELLE |

### RES_0XDA92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKKLAPPE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Heckklappen-Kontakt 0 = Nicht betätigt  1 = Betätigt  2 = nicht verbaut/nicht vorhanden (Open Load)  255 = Signal ungültig / unplausibel  |

### RES_0XDA93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA94_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_VORRAST_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA95_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKKLAPPE_KURZSCHLUSSABSCHALTUNG_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung der Heckklappe. |
| STAT_HECKSCHEIBE_KURZSCHLUSSABSCHALTUNG_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung der Heckscheibe. |

### RES_0XDAB3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KLEMME_30B_1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_1. |
| STAT_SPANNUNG_KLEMME_30B_2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_2. |
| STAT_SPANNUNG_KLEMME_30B_3_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_3. |
| STAT_SPANNUNG_KLEMME_15WUP | 0/1 | - | unsigned int | - | - | - | - | - | Das Result enthält den Spannungswert Klemme 15_WUP am FEM Ausgang. Mögliche Werte: 1 = Aktiv, 0 = nicht aktiv |
| STAT_SPANNUNG_KLEMME_15N1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15_N1 am FEM Ausgang. |
| STAT_SPANNUNG_KLEMME_15N2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15_N2 am FEM Ausgang. |
| STAT_SPANNUNG_KLEMME_15_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15 am FEM Ausgang. |
| STAT_STROM_KLEMME_15_50_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Stromwert an Klemme 15 und 50 am FEM Ausgang. |
| STAT_SPANNUNG_KLEMME_50_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 50  am FEM Ausgang. |
| STAT_SPANNUNG_KLEMME_50MSA_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 50_MSA am FEM Ausgang. |
| STAT_STROM_LF_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Stromwert an LF (CA-Antennen) am FEM Ausgang. |
| STAT_DIAG_LF_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert an LF (CA-Antennen) am FEM Ausgang. |
| STAT_SPANNUNG_KLEMME_31ELV_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 31ELV am FEM Ausgang. |
| STAT_SPANNUNG_KLEMME_30ELV_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30ELV am FEM Ausgang. |
| STAT_SPANNUNG_INNENTEMPERATUR_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert am PTC/NTC im Steuergerät zur Ermittlung der Innentemperatur. |

### RES_0XDAB5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_ER_FT | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Fahrertür. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |
| STAT_TAGE_ER_BFT | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Beifahrertür.. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |
| STAT_TAGE_ER_FTH | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Fahrertür hinten. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |
| STAT_TAGE_ER_BFTH | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Beifahrertür hinten. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |

### RES_0XDAB9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | 1.0 | 1.0 | 0.0 | Das Result enthält den Status der CAS Montagesperren ELV-Sperre, KL50-Sperre und Präsentations-Modus. Hinweise: - Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS |

### RES_0XDABA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL15_EIN_VERHINDERER | 0-n | - | unsigned char | - | TAB_CAS_KLEMMEN_VERHINDERER | 1.0 | 1.0 | 0.0 | Das Result enthält die Ursache, die momentan ein Einschalten der KL15 verhindert, wenn eine Klemmenänderung zu KL15 über StartStop-Taster (SST) oder über Diagnose angefordert würde. Hinweise: - Zuordnung erfolgt gemäß Tabelle 0 = Kein Hinderungsgrund vorliegend  1 = Aktueller Schlüssel nicht gültig 14 = ELV verriegelt   |
| STAT_KL15_AUS_VERHINDERER | 0-n | - | unsigned char | - | TAB_CAS_KLEMMEN_VERHINDERER | 1.0 | 1.0 | 0.0 | Das Result enthält die Ursache, die momentan ein Ausschalten der KL15 verhindert, wenn eine Klemmenänderung über StartStop-Taster (SST) oder über Diagnose angefordert würde. Hinweise: - Zuordnung erfolgt gemäß Tabelle 0 = Kein Hinderungsgrund vorliegend  3 = Geschwindigkeit Fahrt erkannt  4 = Geschwindigkeitsignal ungültig  |
| STAT_KL50_EIN_VERHINDERER | 0-n | - | unsigned char | - | TAB_CAS_KLEMMEN_VERHINDERER | 1.0 | 1.0 | 0.0 | Das Result enthält die Ursache, die momentan ein Ansteuern der KL50 verhindert, wenn eine Klemmenänderung über StartStop-Taster (SST), Telestarthandsender oder über Diagnose angefordert würde. Hinweise: - Zuordnung erfolgt gemäß Tabelle 0 = Kein Hinderungsgrund vorliegend  1 = Kein gültiger Schlüssel  5 = Bremse nicht gedrückt  6 = Bremse unplausibel 7 = Kupplung nicht gedrückt  8 = Kupplung unplausibel  9 = Abbruch DME/DDE (Motorlauf erkannt/Kein Motorstart erlaubt über CAN) 10 = Kraftschluss erkannt (P oder N nicht eingelegt) 13 = Montagmodus KL50  14 = ELV verriegelt   |

### RES_0XDABB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ZEIT_STUNDEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunden: 0 - 23; 253 entspricht --; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_ZEIT_MINUTEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minuten: 0 - 59; 253 entspricht --; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag: 0 - 31; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat: 1 - 12; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr: 2000 - 9999; 65535 Signal ungültig |
| STAT_BUS_IN_ZEIT_RELATIV_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relative Zeit in Sekunden seit 01.01.2000, Sekunden: 0 - 4,2 Millarden, 4294967295 ungültig |
| STAT_BUS_IN_ZEIT_TAGE_RELATIV_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relative Zeit in Tagen seit 01.01.2000; Tage: 1 entspricht 01.01.2000, 65535 entspricht ungültig. |

### RES_0XDABC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GANG | 0-n | - | unsigned char | - | TAB_CAS_GANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert für den Gang (über CAN empfangen). Hinweise:  - Der Wert wird aus CAN-Signal ST_GRSEL_DRV ermittelt. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_GANG. |
| STAT_BUS_IN_MOTOR_LAEUFT | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_STATUS | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für Motor läuft. Hinweise: - Der Wert wird ermittelt aus Bit 0 & 1 des CAN-Signals ST_DRV_VEH. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTOR_STATUS |
| STAT_BUS_IN_MOTOR_FREIGABE | 0-n | - | unsigned char | - | TAB_CAS_MOTORSTART_FREIGABE | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Motor Freigabe. Hinweis: - Der Wert wird ermittelt aus CAN-Signal RLS_ENGSTA. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTORSTART_FREIGABE |
| STAT_BUS_IN_ANLASSER_SPERRE | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_ANLASSERSPERRE | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Anlassersperre. Hinweis: - Der Wert wird ermittelt aus CAN-Signal ST_ILK_STRT_DRV. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTOR_ANLASSERSPERRE |
| STAT_BUS_IN_KUPPLUNG | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Kupplung. Hinweise: - Der Wert wird ermittelt aus CAN-Signal ST_SW_CLT_DRV. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. Nur die Werte 0, 1 und 255 werden zurückgeliefert. |
| STAT_BUS_IN_DREHZAHL_WERT | 1/min | - | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Drehzahl. Hinweise: - Der Wert wird ermittelt aus CAN-Signal AVL_RPM_ENG_CRSH. - Der Wert aus dem Telegramm wird von der SGBD durch 4 geteilt, da das Signal AVL_RPM_ENG_CRSH Viertel-Umdrehungs-genau ist. |

### RES_0XDABD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GESCHW_WERT | km/h | - | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Geschwindigkeit. Hinweise: - Der Wert wird ermittelt aus dem Signal V_VEH_COG. - Wertebereich 0-350, Ungültig 1023 - Der Rohwert wird von der SGBD durch 64 geteilt, da das Signal V_VEH_COG 64-tel-genau ist. |
| STAT_BUS_IN_GESCHW_STATUS | 0-n | - | unsigned char | - | TAB_CAS_GESCHW_STATUS | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Geschwindigkeit als Status Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_GESCHW_STATUS - Der Wert wird ermittelt aus dem Signal DVCO_VEH. |
| STAT_BUS_IN_BREMSPEDAL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Stellung des Bremspedals. Hinweise: - CAN-Signal Status_Bremsung_Fahrer (ST_BRG_DV), Auswertung der Bit-Kodierung Betätigung_Bremssystem_Fahrer + Gesamtsignal ungültig muss im CAS erfolgen. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDABF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_FH_FT | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | 1.0 | 1.0 | 0.0 | CAN-Signal Status Fensterheber Fahrertür. Hinweise:  - Inhalt stammt aus CAN-Signal ST_PO_WRG_DRD. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |
| STAT_BUS_IN_FH_BFT | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | 1.0 | 1.0 | 0.0 | CAN-Signal Status Fensterheber Beifahrertür. Hinweise:  - Inhalt aus dem CAN-Signal ST_PO_WRG_PSD. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |
| STAT_BUS_IN_FH_FTH | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | 1.0 | 1.0 | 0.0 | CAN-Signal Status Fensterheber Fahrertür hinten. Hinweise:  - Inhalt aus dem CAN-Signal ST_PO_WRG_DVDR. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |
| STAT_BUS_IN_FH_BFTH | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | 1.0 | 1.0 | 0.0 | CAN-Signal Status Fensterheber Beifahrertür hinten. Hinweise: - Inhalt aus dem CAN-Signal ST_PO_WRG_PSDR. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |

### RES_0XDAC4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_FT_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Fahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_FT_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Fahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFT_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Beifahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFT_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Beifahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_FTH_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Fahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_FTH_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Fahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFTH_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Beifahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFTH_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Beifahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |

### RES_0XDACA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_FT | 0-n | - | unsigned char | - | TAB_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Fahrertüre.. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |
| STAT_TAGE_BFT | 0-n | - | unsigned char | - | TAB_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Beifahrertüre.. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |
| STAT_TAGE_FTH | 0-n | - | unsigned char | - | TAB_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Hintertüre Fahrerseite.. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |
| STAT_TAGE_BFTH | 0-n | - | unsigned char | - | TAB_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Hintertüre Beifahrerseite. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |

### RES_0XDB12_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_TREIBER_15N1_AKTIV | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung des HW-Treiber KL15N1. |
| STAT_KURZSCHLUSSABSCHALTUNG_TREIBER_15N2_AKTIV | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung des HW-Treiber KL15N2. |
| STAT_KURZSCHLUSSABSCHALTUNG_TREIBER_KL30BACSM_AKTIV | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung des HW-Treiber KL30B-ACSM. |
| STAT_KURZSCHLUSSABSCHALTUNG_TREIBER_KL301_AKTIV | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung des HW-Treiber KL30B1. |
| STAT_KURZSCHLUSSABSCHALTUNG_TREIBER_KL302_AKTIV | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den Aktivierungsstatus der Kurzschlussabschaltung des HW-Treiber KL30B2. |

### RES_0XDBEA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACC_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt  1 = gedrückt |

### RES_0XDBEB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACC_TASTER_LED_NR | 0-n | - | signed char | - | TAB_LED | 1.0 | 1.0 | 0.0 | LED für den ACC-Taster |

### RES_0XDC54_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAENDLER_NUMMER_WERT | - | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die 5-stellige Händlernummer. Im Werk wird dieser Wert auf 00000. |
| STAT_ERSTZULASSUNGSDATUM_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Tag des Erstzulassungsdatums. Im Werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Monat des Erstzulassungsdatums.  Im Werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Jahr des Erstzulassungsdatums.  Im Werk wird dieser Wert auf das Jahr der Schlüssel-Initialisierung gesetzt. Wertebereich: 2000-9999. |

### RES_0XDC57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_KL15_ABSCHALTUNG | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob Abschaltung per Codierung freigeschaltet ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_OBDKOMMUNIKATION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer OBD-Kommunikation (OBD-relevante Diagnosekommunikation über D-CAN) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_BREMSE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Bremspedal betätigt ist gerade aktiv. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_MOTORLAUF_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Motorlauf gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_KUPPLUNG_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Kupplungspedal betätigt gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_ENERGIESPARMODE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Energiemode aktiv(FETRAFLA) gerade aktiv ist. Hinweis: Die KL15-Abschaltung ist hier aufgrund des Energymanager im FEM deaktiviert. |
| STAT_ABSCHALTVERHINDERER_GESCHWINDIGKEIT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Geschwindigkeit gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_MSA_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MSA ist aktuell (L6,L7) kein Abschaltverhinderer für die KL15. Dieses Result ist nur als Vorhalt vorhanden und wird immer mit ¿0¿ befüllt. |
| STAT_ABSCHALTVERHINDERER_ABBLENDLICHT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Abblendlicht gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_WAEHLHEBEL_IN_N_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Wählhebel in N gerade aktiv ist (Waschstrassen-Funktion). Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_DIAGNOSE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Diagnose (Geschwindigkeitsschwelle gesetzt) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_FLA_MODE | 0/1 | - | unsigned char | - | - | - | - | - | Dieses Result ist nur als Vorhalt vorhanden und wird immer mit 0 befüllt. |
| STAT_ABSCHALTVERHINDERER_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob mindestens ein Abschaltverhinderer gerade aktiv ist. Hinweise: - 0=kein Abschaltverhinderer aktiv - 1=mindestens ein Abschaltverhinderer aktiv |
| STAT_AUTOMATISCHE_ABSCHALTUNG_DURCHGEFUEHRT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob die letzte KL15-Abschaltung  eine automatische KL15-Abschaltung war oder nicht. Hinweise: - Der Wert wird auf aktiv gesetzt, sobald eine autom. KL15-Abschaltung durchgeführt wurde. - Der Wert wird auf nicht aktiv rückgesetzt, sobald eine nicht-automatische KL15-Abschaltung (z.B. per SST) durchgeführt wurde. 0 = automatische KL15-Abschaltung wurde nicht durchgeführt 1 = automatische KL15-Abschaltung wurde durchgeführt |
| STAT_ABSCHALTVERHINDERER_PRAESENTATIONSMODUS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Präsentationsmodus(CAS-Montagemodus) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_GESCHWINDIGKEIT_UNPLAUSIBEL_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Geschwindigkeit unplausibel (CAS hat sowohl über HW-Eingang als auch CAN einen unplausiblen Geschwindigkeitswert erhalten) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_FREMDLADUNG_HYBRID_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Fremdladung bei Hybridfahrzeugen gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_GURT_FAHRER_GESTECKT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Gurt Fahrer gesteckt gerade aktiv ist. Hinweise: - 0=keine Abschaltung durchgeführt, 1=Abschaltung durchgeführt. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_GURT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Öffnen Fahrergurt per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_KLAPPENWECHSEL_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Tür auf/zu per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_OSFG_ERREICHT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Erreichen der OSFG (Obere Startfähigkeitsgrenze) per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_TIMEOUT_OSFG_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 wegen OSFG mit oder ohne Timeout per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_ZV_SICHERN_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch ZV Sichern per Codierung freigeschaltet ist. Hinweise: - 0=nicht aktiv, 1=aktiv |

### RES_0XDC5A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL30F_HINTEN_AN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG_PEGEL | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Ausgangs zum Einschalten der KL30F hinten. |
| STAT_KL30F_HINTEN_AUS | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG_PEGEL | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Ausgangs zum Ausschalten der KL30F hinten. |

### RES_0XDC60_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SSTA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_HALL_SENSOR | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des Sensors SST A. |
| STAT_SSTB_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_HALL_SENSOR | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des Sensors SST B. |

### RES_0XDC64_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CENTERLOCK_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des Eingangs Centerlock-Taster. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC67_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_MSA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand für den Eingang Taster der Motor-Start-Automatik. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC68_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SICHERN_HECKKL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des Eingangs für den Taster zum Zentralsichern der Heckklappe. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC69_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKLAPPE_OEFFNEN_INNEN_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des Eingangs für den Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH | 0-n | high | unsigned char | - | TAB_SARAH_ZUSTAND | 1.0 | 1.0 | 0.0 | Zustand SARAH (siehe Tabelle TAB_SARAH_ZUSTAND) |
| STAT_AUFFAHRWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Auffahrwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_VORWARNUNG | 0-n | high | unsigned char | - | TAB_VORWARNUNG | 1.0 | 1.0 | 0.0 | Konfiguration Vorwarnung  (siehe Tabelle TAB_VORWARNUNG) |
| STAT_PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Personenwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Konfiguration Gezieltes Anleuchten (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenswarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Spurwechselwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_UEBERNAHME_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | Übernahme der erkannten Höchstgeschwindigkeit als neue Setzgeschwindigkeit für Tempomat und Limiter.  (1 - ausgewählt; 0 - abgewählt) |
| STAT_OFFSET_GESCHWINDIGKEIT_WERT | km/h | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset zur Höchstgeschwindigkeit bei Übernahme als neue Setzgeschwindigkeit für Tempomat und Limiter. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_8 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_9 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_10 | 0-n | high | unsigned char | - | - | - | - | - | Reserve |

### RES_0XDC84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XDC85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_LED_NR | 0-n | - | signed char | - | TAB_SARAH_LED | - | - | - | 0 = LED aus 1 = LED gruen 2 = LED defekt 3 = LED orange |

### RES_0XF100_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSE_WERT | + | - | - | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SENSE-Wert des Ausgangs |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RES_0XF200_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | - | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XF206_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XF207_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XF208_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XF209_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIA_NR_AKTUELL | 0x0F27 | STAT_PIA_NR_AKTUELL | Das Result aktuell vom CAS auf dem Bus gesendeten PIA Nummer. Hinweise: - Zuordnung gemäß Tabelle TAB_CAS_PIA_NUMMER. | 0-n | - | - | unsigned char | TAB_CAS_PIA_NUMMER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHLUESSELDATEN_SERVICE | 0x1006 | - | ServiceSchluesseldaten Dient dem blockweisen Auslesen der im CAS gespeicherten Service Schluesseldaten. Für diesen Diagnoseauftrag ist die physikalische Adressierung verpflichtend. Die funktionale Adressierungsart ist optional und zusätzlich erlaubt, aber im BMW-Umfeld so nicht sinnvoll | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1006_R | RES_0x1006_R |
| STEUERN_LIN_CODIERUNG | 0x100A | - | Codierung der LIN-Slaves | - | - | - | - | - | - | - | - | - | 31 | ARG_0x100A_R | - |
| SERVICE_SCHLUESSELDATEN_UPDATE | 0x4005 | - | Dieser Job ermoeglicht es einem folgende Aktionen einzeln oder gesamthaft anzustossen: * Ermitteln der aktuellen Daten aus dem Fahrzeug, * Uebertragen der Daten in alle aktuell erkannten Schluessel (inkrementell oder komplett; immer inkl. dem SekretKey fuer den drahtlosen Fahrzeugzugang, SK DFZ. Für diesen Diagnoseauftrag ist die physikalische Adressierung verpflichtend. Die funktionale Adressierungsart ist optional und zusätzlich erlaubt, aber im BMW-Umfeld so nicht sinnvoll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x4005_R | RES_0x4005_R |
| KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG_RESET | 0xA084 | - | Dieser Job dient dazu die dauerhaften Kurzschlussabschaltung des Treiber KL30B/KL15N wieder zurückzusetzen. Durch den Job werden die internen Zähler für die Anzahl der Wiedereinschaltversuche zurückgesetzt.   Hinweise:  -Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ¿ARG;KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG_RESET;STR;[Argumente]¿ -Das Rücksetzen der interne Zähler für die Anzahl der Wiedereinschaltversuche wird nur durchgeführt wenn der Zählerstand für die maximale Anzahl an erkannten Kurzschlüssen (KS_COUNT_MAX) größer '0' ist. Hat der Zähler bei Aufruf des Jobs bereits den Wert '0' so wird im Result STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR dies zurückgemeldet (Wert '1') und kein Rücksetzvorgang gestartet. Siehe hierzu auch ZSG_BF_13075. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA084_R | RES_0xA084_R |
| HOD_KALIBRIERUNG | 0xA093 | - | Kalibrierung Hands Off Detection | - | - | - | - | - | - | - | - | - | 31 | - | - |
| BATTERIEVORSCHAEDIGUNGSHISTORIE | 0xA099 | - | Der Job dient zum Löschen des nicht-persistenten Datensatzes und des Häufigkeitszähler des Historienspeichers für die Batterievorschädigunshistorie. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| WISCHER_LIN_EINLERNVORGANG | 0xA118 | - | Steuert den Einlernvorgang Schmetterlingswischer | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA118_R |
| FH_EINLERNEN | 0xA17B | - | Steuernaufruf zum Einlernen der Fensterheber 0x11: FH Fahrer  0x12: FH Beifahrer   0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x15: FH Heckscheibe 0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: FH Fahrer, Beifahrer, FH Fahrer Beifahrer und FH Beifahrer hinten  0x50: FH Fahrer, Beifahrer, FH Fahrer Beifahrer, FH Beifahrer hinten und FH Heckscheibe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17B_R | RES_0xA17B_R |
| FH_VERFAHREN_HALL | 0xA17E | - | Verfahren auf Hallposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17E_R | RES_0xA17E_R |
| FH_VERFAHREN_PROZENT | 0xA17F | - | Verfahren der Fensterheber auf bestimmten Prozentwert 0: geschlossen 100: offen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17F_R | RES_0xA17F_R |
| FH_VERFAHREN_SONDERFUNKTION | 0xA180 | - | Verfahren der Fenster auf eine bestimmte Sonderfunktion | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA180_R | RES_0xA180_R |
| FH_TASTER_STEUERN | 0xA181 | - | Übersteuerung des Tasters per Diagnose | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA181_R | RES_0xA181_R |
| FH_VERFAHREN_SERVICE_POSITION | 0xA182 | - | Verfährt das Fenster auf eine Serviceposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA182_R | RES_0xA182_R |
| SCHLUESSELSUCHEN_HISTORIE | 0xA2DD | - | Aktionen und Auswertung der Schlüsselsuchen Historie | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA2DD_R | - |
| AUSSENSPIEGEL_SELBSTTEST | 0xA322 | - | Automatische Spiegelprüfung wird angestoßen. Wenn ein Fehler beim Selbsttest auftritt, dann erfolgt ein FS-Eintrag. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA322_R |
| REGENSENSOR_INITIALISIERUNG | 0xA3B7 | - | Startet Neuadaption des RLS an der Windschutzscheibe. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA3B7_R |
| LEUCHTEN_KALTUEBERWACHUNG | 0xA530 | - | Kaltlichtüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA530_R |
| LEUCHTEN_WARMUEBERWACHUNG | 0xA531 | - | Warmlichüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA531_R |
| HOEHENSTAENDE_OFFSET_RESET | 0xA532 | - | Starten Reset Höhenstand Offset | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA532_R |
| GURTZUBRINGER_INIT | 0xA71A | - | Initlauf Gurtzubringer | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA71A_R |
| LIN_AUTOADRESSIERUNG | 0xA838 | - | Es wird die Autoadressierung der LIN-Layering-Slaves durchgeführt. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ELV_ANLIEFERZUSTAND | 0xAA73 | - | setzt die ELV zurück auf den Anlieferzustand. (ab FEM umgesetzt) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA73_R |
| ELV_AKTION | 0xAA7C | - | Verriegelung, Entriegelung oder Full-Cycle Ansteuerung der ELV oder Statusabfrage (ELV-Status, Herstelldaten, Fehlerzähler) aktivieren. Desweiteren ELV-Fehlerzähler und FullCycle-Merker zurücksetzen sowie Verbauerkennung durchführen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA7C_R | RES_0xAA7C_R |
| SMO_SIMULATION_BEDIENUNG | 0xAA80 | - | Dieser Job dient zur Simulation einer Bedienungsanforderung (Öffnen der Heckklappe) durch das SmartOpener-Steuergerät. Hierbei soll die gesamte Wirkkette vom Eingang der Bedienungsanforderung beim ZSG bis zum physikalischen Öffnen der Heckklappe ausgelöst werden. Bei dieser Simulation erfolgt keine Kommunikation zwischen ZSG und SMO-SG, d.h. der Job kann auch bei nicht verbautem SMO-SG durchgeführt werden | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA80_R |
| ZV_KURZSCHLUSSABSCHALTUNG_RESET | 0xAA95 | - | Dieser Job dient dazu die dauerhaften Kurzschlussabschaltung des ZV-Antriebs der Heckklappe und,oder Heckscheibe wieder zurückzusetzen. Durch den Job werden die internen Zähler für die Anzahl der Wiedereinschaltversuche zurückgesetzt.   Hinweise:  Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG;ZV_KURZSCHLUSSABSCHALTUNG_RESET;STR;[Argumente]'  oder 'ARG;ZV_KURZSCHLUSSABSCHALTUNG_RESET;RRR' - Das Rücksetzen der interne Zähler für die Anzahl der Wiedereinschaltversuche wird nur durchgeführt wenn der Zählerstand für die maximale Anzahl an erkannten Kurzschlüssen (KS_COUNT_MAX) größer '0' ist. Hat der Zähler bei Aufruf des Jobs bereits den Wert '0' so wird im Result STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR dies zurückgemeldet (Wert '1') und kein Rücksetzvorgang gestartet. Siehe hierzu auch ZSG_BF_13075. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA95_R | RES_0xAA95_R |
| STEUERN_KL15_ABSCHALTUNG | 0xAC51 | - | Dieser Job dient dazu per Diagnose die Schwelle festzulegen, bei welcher Geschindigkeit die Funktion automatische KL15-Abschaltung wieder aktiviert (default) werden soll. Die KL-15-Abschaltung wird bis zur Überschreitung dieser Geschwindigkeits-Schwelle verhindert. Diese Abschalt-Verhinderung bleibt auch über RESET und Spannungs-Reset hinaus bestehen (Ablage im EEPROM). Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_KL15_ABSCHALTUNG,STR,Argumente | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC51_R | - |
| STEUERN_CA_KOMM_TEST | 0xAC53 | - | Steuern der Kommunikation mit bestimmtem Schlüssel über bestimmte Antenne (IRV, IRH, FT, BFT, HA, KRLI, KRRE, SF) zum Testen der CA-Kommunikation (LF). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC53_R | RES_0xAC53_R |
| STEUERN_CA_BROADCAST | 0xAC54 | - | Steuern der Schlüsselsuche per Broadcast Innenraum (Antennen Innenraum Vorne + Hinten). Alle im Innenraum befindlichen bereits bekannten Schlüssel werden ermittelt (max. 8). Hinweis: Die Results STAT_CA_SCHL_...x werden beginnend mit x=1 bis x=n (bei n gefunden Schlüsseln) aufgefüllt. Die Results STAT_CA_SCHL_...x für x > n werden mit 15 belegt (kein Schlüssel gefunden). | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC54_R |
| STEUERN_CA_ANTENNEN_TEST | 0xAC55 | - | Ansteuern des CA-Antennen-Test. Dabei wird die interne Antennendiagnose angestossen und erkannte Fehler werden entsprechend in Fehlerspeicher eintragen. Hinweise:  - Trotz erkannter Fehler in der internen Diagnose kann u.U. kein Fehlerspeichereintrag aufgrund nichterfüllter Randbedingungen (z.B. Unterspannung) vorhanden sein. - Es werden nur Antennen getestet die codiert sind. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC55_R |
| STEUERN_ZV_MASTER | 0xAC57 | - | Ansteuerung der Zentralverriegelung per Diagnose Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_ZV_MASTER,STR,Argumente. - Ein Wechsel aus oder in den Zustand 'gesichert' ist nicht möglich. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC57_R | RES_0xAC57_R |
| STEUERN_FBD_EMPFAENGER_INIT | 0xAC58 | - | Dieser Job dient zum Ansteuern der FBD-Initialisierung. Dabei werden folgende Aktivitäten durch das FEM angesteuert: 1) Prüfen LIN-Nachrichtenkatalog und SW-Version 2) WUP im FBD-Empfänger prüfen und ggf. schreiben  Hinweise:  -Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG; STEUERN_FBD_EMPFAENGER_INIT;STR;[Argumente]' -Prüfung der LIN-Nachrichtenkatalog wie folgt:  Version vom FBD-Empfänger  >= Codierparameter RC_LIN_NK_VERSION | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC58_R |
| STEUERN_TRANSPONDERSPULE | 0xAC5B | - | Dieser Job dient Job zum Aktivieren der Transponderspule (für Schlüsselkommunikation) für 10 Sekunden oder sofortigem Deaktivieren der Transponderspule. Hinweis: Aktivieren der Transponderspule: Nach Ablauf der 10 Sekunden wird die Transponderspule automatisch wieder deaktiviert. Erfolgt ein erneuter Jobaufruf zur Aktivierung während der 10 Sekunden, dann wird der Timer wieder auf 10 Sekunden hochgesetzt ohne die Transponderspule dabei zu deaktivieren. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC5B_R | - |
| FBD_REICHWEITENMESSUNG | 0xAC5D | - | Dieser Job dient zum Aktiveren und Deaktivieren der FBD-Reichweitenmessung für (maximal) 30 Minuten.  Nach dem Start der Reichweitenmessung wird ein Timer gestartet und nach 30 Minuten automatisch der Reichweitenmess-Modus des FBD wieder verlassen. Alternativ lässt sich die Reichweitenmessung auch per Diagnosejob stoppen.  Bei aktivierter Reichweitenmessung wird jede Betätigung einer beliebigen IDG-Taste durch 2-maliges Quittierungblinken aller Blinkerleuchten des Fahrzeugs - unabhängig vom Klemmenzustand - bestätigt.  Hinweise:  - Start der Reichweitenmessung: Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG; STEUERN_FBD_REICHWEITENMESSUNG;STR' - Stoppen der Reichweitenmessung: Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG; STEUERN_FBD_REICHWEITENMESSUNG;STPR' | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC5D_R |
| FBD_FEHLER | 0xAC5E | - | Dieser Job dient zum Auslesen der diagnostizierten Fehler, Resets und des Störprofils des FBD-Empfängers (Welcher Kanal wurde wie lange gestört). | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC5E_R |
| FBD_KANALEINSTELLUNG | 0xAC5F | - | Dieser Job dient zum Einstellen von Kanal und Sendeleistung im FBD-Empfänger | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC5F_R | - |
| ELSV_TASTER | 0xD070 | - | Status Taster elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD070_D |
| LENKRADHEIZUNG_LED | 0xD071 | - | 0: LED AUS  1: LED EIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD071_D | - |
| ELSV | 0xD072 | - | Status / Steuern elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD072_D | - |
| LENKRADHEIZUNG_TASTER | 0xD073 | STAT_TASTER_LENKRADHEIZUNG_EIN | 0: Lenkradheizung Taster nicht betätigt; 1: Lenkradheizung Taster betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRADHEIZUNG | 0xD074 | - | Status / Steuern Lenkradheizung (Aktiv, LED und analoger Wert) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD074_D | RES_0xD074_D |
| ELSV_STATEMACHINE | 0xD07B | STAT_STATEMACHINE | <<< vom Lieferanren zu befüllen !!! >>> | 0-n | - | - | signed int | TAB_ELSV_STATEMACHINE | - | - | - | - | 22 | - | - |
| ELSV_VORHANDEN | 0xD07F | STAT_VORHANDEN_ELSV_EIN | Elektrische Lenksäulenverstellung 0: nicht vorhanden 1: vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRAD_MFL | 0xD081 | - | Status der MFL-Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD081_D |
| ELSV_POS | 0xD084 | - | Ansteuerung einer bestimmten ELSV-Position | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD084_D | - |
| ELSV_POS_STATUS | 0xD089 | - | Aktuelle Position und Bewegung der ELSV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD089_D |
| TLC_ABGLEICH_MITTEN_FREQUENZ | 0xD08B | - | Liest bzw. schreibt die Mittenfrequenz des LRE LIN Slave. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD08B_D | RES_0xD08B_D |
| SMO_SPIELSCHUTZZAEHLER | 0xD096 | STAT_SPIELSCHUTZZAEHLER_WERT | Das Result gibt an, wie oft der SMO-Sensor eine Auslösung erkannt hat, ohne das ein gültiger Schlüssel im Heck-Aussenraum erkannt wurde | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SMO_VARIANTE | 0xD098 | STAT_FAHRZEUGTYP | Das Result gibt an, welchen Fahrzeugtyp das SMO gerade eingestellt hat | 0-n | - | high | unsigned char | TAB_SMO_FAHRZEUGTYP | - | - | - | - | 22 | - | - |
| PLOCK | 0xD09D | STAT_PLOCK_AKTIV | Das Result enthält den aktuellen Zustand des HW-Eingangs PLOCK | 0-n | - | high | unsigned char | TAB_ZSG_DIGITAL_EINGANG_PEGEL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ZUSATZINFO_LICHT | 0xD0F1 | - | Detailinformation zum Energiebedarf für Licht | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0F1_D |
| HANDBREMSE_KONTAKT | 0xD130 | STAT_HANDBREMSE_KONTAKT_EIN | 0: Handbremse gelöst; 1: Handbremse angezogen | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_LINKS | 0xD161 | STAT_TASTER_SITZHEIZUNG_HINTEN_LINKS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_HINTEN_TASTER_RECHTS | 0xD162 | STAT_TASTER_SITZHEIZUNG_HINTEN_RECHTS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_TASTER | 0xD188 | - | Status FH-Taster Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD188_D |
| FH_BF_TASTER | 0xD189 | STAT_TASTER_BF_BF_NR | Beifahrerseite (lokaler Taster):  Fensterheber Beifahrerseite 0: Taster nicht gedrueckt 1: Fenster oeffnen 2: Fenster schliessen 3: Fenster Maut oeffnen 4: Fenster Maut schliessen | 0-n | - | - | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FAH_TASTER | 0xD18A | STAT_TASTER_FAH_FAH_NR | Fahrerseite hinten (lokaler Taster): Fensterheber Fahrerseite hinten 0: Taster nicht gedrueckt 1: Fenster oeffnen 2: Fenster schliessen 3: Fenster Maut oeffnen 4: Fenster Maut schliessen | 0-n | - | - | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_BFH_TASTER | 0xD18B | STAT_TASTER_BFH_BFH_NR | Beifahrerseite hinten (lokaler Taster):  Fensterheber Beifahrerseite 0: Taster nicht gedrueckt 1: oeffnen Fenster  2: schliessen Fenster  3: oeffnen Fenster Maut  4: schliessen Fenster Maut | 0-n | - | - | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_KISI_TASTER | 0xD18C | - | Status / Simualtion Taster Kindersicherung  1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD18C_D | RES_0xD18C_D |
| FH_KISI_LED | 0xD18D | STAT_KISI_LED_EIN | 0: Status LED Kindersicherung aus 1: Status LED Kindersicherung ein | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_KURZHUB_AKTIV | 0xD18F | - | Kurzhub rahmenlose Scheibe aktiv | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD18F_D | RES_0xD18F_D |
| FH_FA_BEWEGUNG | 0xD1A7 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A7_D |
| FH_BF_BEWEGUNG | 0xD1A8 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A8_D |
| FH_FAH_BEWEGUNG | 0xD1A9 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A9_D |
| FH_BFH_BEWEGUNG | 0xD1AA | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AA_D |
| FH_RELAIS_STEUERN | 0xD1AB | - | Steuert das/die Relais zum Verfahren einer Scheibe an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1AB_D | - |
| FH_HALL_VERSORGUNG | 0xD1AC | - | Die Funktion wird von der BSW ausgeführt. Die BSW muss ggf. den MT denormieren. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD1AC_D | - |
| FH_BFH_RELAIS | 0xD1AD | - | Liest den aktuellen Status der Ansteuer- und Rückleseleitungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AD_D |
| FH_BFH_HALLSENSOREN | 0xD1AE | - | Liest den aktuellen Status beider Hallsensoren aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AE_D |
| FH_FAH_RELAIS | 0xD1AF | - | Liest den aktuellen Status der Ansteuer- und Rückleseleitungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AF_D |
| FH_FAH_HALLSENSOREN | 0xD1B0 | - | Status Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B0_D |
| FH_FA_RELAIS | 0xD1B1 | - | Liest den aktuellen Status der Ansteuer- und Rückleseleitungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B1_D |
| FH_FA_HALLSENSOREN | 0xD1B2 | - | Status Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B2_D |
| FH_BF_RELAIS | 0xD1B3 | - | Liest den aktuellen Status der Ansteuer- und Rückleseleitungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B3_D |
| FH_BF_HALLSENSOREN | 0xD1B4 | - | Status Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B4_D |
| FH_FA_STATUS_DETAIL | 0xD1B5 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B5_D |
| FH_BF_STATUS_DETAIL | 0xD1B6 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B6_D |
| FH_FAH_STATUS_DETAIL | 0xD1B7 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B7_D |
| FH_BFH_STATUS_DETAIL | 0xD1B8 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B8_D |
| FH_TASTER_ALLE_FH | 0xD1C2 | - | Status / Simulation Taster alle Fensterheber | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1C2_D | RES_0xD1C2_D |
| STATUS_SITZEXT_TASTEN | 0xD1CA | - | Auslesen status sitzmemory Fahrerseite Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1CA_D |
| STATUS_SITZEXT_VORHANDEN | 0xD1CB | - | Auslesen ob SitzExt-SB vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1CB_D |
| STEUERN_SITZEXT_LED | 0xD1CC | - | Steuert die LEDs in den Sitzext lin slaves | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1CC_D | - |
| HECKSPOILER_TASTER | 0xD220 | - | DID für Heckspoilertaster | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD220_D | RES_0xD220_D |
| TANK_FUELLSTAND_LINKS | 0xD258 | STAT_FUELLSTAND_TANK_LI_WERT | Rückgabe des Füllstandwerts des linken Tanksensor. Arbeitsbereich und IO-Bereich muss vom Entwickler befüllt werden. | Ohm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TANK_FUELLSTAND_RECHTS | 0xD259 | STAT_FUELLSTAND_TANK_RE_WERT | Rückgabe des Füllstands des rechten Tanksensors. Arbeitsbereich und IO-Bereich muss vom Entwickler befüllt werden. | Ohm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HUPE_TASTER | 0xD297 | STAT_TASTER_HUPE_EIN | 0= Taster Hupe nicht betätigt  1= Taster Hupe betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HUPE | 0xD298 | - | Status / Steuern Hupe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD298_D | RES_0xD298_D |
| ROLLO_HECK_MOTOR | 0xD30A | - | Status / Steuern Heckrollo | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30A_D | RES_0xD30A_D |
| ROLLO_HECK_TASTER | 0xD30B | - | Status / Simulation Taster Sonnenrollo Heckscheibe  0: Taster nicht gedrückt 1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30B_D | RES_0xD30B_D |
| AUSSENSPIEGEL_ABBLENDEN | 0xD320 | - | Status / Steuern Abblenden Aussenspiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD320_D | RES_0xD320_D |
| AUSSENSPIEGEL_THERMOSCHUTZ | 0xD321 | STAT_SPIEGEL_THERMOSCHUTZ_AKTIV | 0: nicht aktiv 1: aktiv | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_RECHTS_RICHTUNG | 0xD322 | - | Status / Steuern Bewegung Spiegel rechts (Richtung) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD322_D | RES_0xD322_D |
| AUSSENSPIEGEL_KLAPPEN | 0xD324 | - | Status / Steuern Aussenspiegel beiklappen / abklappen | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD324_D | RES_0xD324_D |
| AUSSENSPIEGEL_LINKS_RICHTUNG | 0xD327 | - | Status / Steuern Bewegung Spiegel links (Richtung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD327_D | RES_0xD327_D |
| AUSSENSPIEGEL_LINKS_POS | 0xD328 | - | Status / Steuern Position links Spiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD328_D | RES_0xD328_D |
| AUSSENSPIEGEL_LIN | 0xD329 | STAT_VORHANDEN_LIN_SPIEGEL_EIN | 0: Kein LIN-Aussenspiegel  1: LIN-Aussenspiegel | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_MEM_VORHANDEN | 0xD32B | STAT_VORHANDEN_SPIEGEL_MEMORY_EIN | 0: Keine Memoryfunktion  1: Memoryfunktion | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_HEIZUNG | 0xD32D | - | Status / Steuern Heizung Aussenspiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32D_D | RES_0xD32D_D |
| AUSSENSPIEGEL_HEIZUNG_VERBAUT | 0xD32E | STAT_VORHANDEN_SPIEGEL_HEIZUNG_EIN | 0: Keine Spiegelheizung  1: Spiegelheizung | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EC_SPIEGEL_ABBLENDEN | 0xD32F | - | Status / Steuern Innenspiegel (EC-Spiegel) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD32F_D | RES_0xD32F_D |
| EC_SPIEGEL_VORHANDEN | 0xD330 | STAT_VORHANDEN_EC_SPIEGEL | 0: EC-Spiegel nicht vorhanden; 1: EC-Spiegel vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_TASTER | 0xD331 | - | Status Schalter / Taster Spiegelverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD331_D |
| AUSSENSPIEGEL_KLAPPEN_VORHANDEN | 0xD332 | STAT_VORHANDEN_SPIEGEL_BEIKLAPPEN_EIN | 0: Kein Beiklappen möglich  1: Beiklappne möglich | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_RECHTS_POS | 0xD333 | - | Status / Steuern Position rechts Spiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD333_D | RES_0xD333_D |
| AUSSENSPIEGEL_MEM_POS_STEUERN | 0xD336 | - | Aussenspiegel in gewählte Memoryposition verfahren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD336_D | - |
| AUSSENSPIEGEL_MEM_POS_SCHREIBEN | 0xD338 | - | Beschreiben eines Memoryplatzes mit den horizontalen und vertikalen Positionswerten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD338_D | - |
| UGDO_VORHANDEN | 0xD33A | STAT_VORHANDEN_UGDO | 0: UGDO nicht vorhanden;  1: UGDO vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_ABBLENDEN_VORHANDEN | 0xD33C | STAT_VORHANDEN_SPIEGEL_ABBLENDEN_EIN | Liefert zurück ob die Außenspiegel abblendbar sind und welche. Siehe Table TAB_AUSSENSPIEGEL_ABBLENDEN | 0-n | - | - | signed int | TAB_AUSSENSPIEGEL_ABBLENDEN | - | - | - | - | 22 | - | - |
| UGDO_LAND | 0xD33D | STAT_UGDO_LAND_NR | Eingestelltes Land | 0-n | - | - | unsigned char | TAB_UGDO_LAND | - | - | - | - | 22 | - | - |
| UGDO_MODE | 0xD33E | STAT_UGDO_MODE_NR | Mode des UGDO | 0-n | - | - | unsigned char | TAB_UGDO_MODE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_VORHANDEN | 0xD343 | STAT_KOMPASS_SPIEGEL_VORHANDEN_EIN | 0: Kompass-Spiegel nicht verbaut  1: Kompass-Spiegel verbaut | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_MAGNET | 0xD344 | STAT_KOMPASS_SPIEGEL_MAGNET_ZONE_NR | Ausgabe Magnetzone (aus Slave)  Auflistung siehe Tabelle TAB_MAGNETZONE | 0-n | - | - | unsigned char | TAB_MAGNETZONE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_SPRACHE | 0xD345 | STAT_KOMPASS_SPIEGEL_SPRACHE_NR | Codierparameter aus dem Master Spracheinstellung Auflistung siehe Tabelle TAB_KOMPASS_SPRACHE | 0-n | - | - | unsigned char | TAB_KOMPASS_SPRACHE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_LENKUNG | 0xD346 | STAT_KOMPASS_SPIEGEL_LENKUNG_NR | Codierparameter aus dem Master 0: Rechtslenker  1: Linkslenker | 0-n | - | - | unsigned char | TAB_KOMPASS_LENKUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_HC2 | 0xD347 | - | Status / Steuern HC2-Anzeige | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD347_D | RES_0xD347_D |
| WASCHDUESENHEIZUNG | 0xD350 | - | Waschdüsenheizung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD350_D | RES_0xD350_D |
| WISCHER_FRONT_MOTOR | 0xD351 | STAT_MOTOR_FRONTWISCHER_EIN | Liefert den Zustand der Ansteuerung des Frontscheibenwischers:  0= Ansteuerung Frontscheibenwischer nicht aktiv; 1= Ansteuerung Frontscheibenwischer aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WASCHERPUMPE_HINTEN | 0xD352 | - | Status / Steuern Waschwasserpumpe hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD352_D | RES_0xD352_D |
| WISCHER_HECK_MOTOR | 0xD353 | STAT_MOTOR_HECKWISCHER_EIN | Liefert den Zustand der Ansteuerung des Heckscheibenwischers:  0= Ansteuerung Heckscheibenwischer nicht aktiv; 1= Ansteuerung Heckscheibenwischer aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SRA_RELAIS | 0xD354 | STAT_RELAIS_SRA_EIN | Liefert den Zustand des Relais der Scheinwerferreinigungsanlage:  0= Relais Scheinwerferreinigungsanlage nicht aktiv;  1= Relais Scheinwerferreinigungsanlage aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_FRONT_RSK | 0xD355 | - | Status / Steuern Park-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD355_D | RES_0xD355_D |
| WISCHER_HECK_RSK | 0xD356 | - | Status / Steuern Park-Position Heckscheibenwischer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD356_D | RES_0xD356_D |
| WASCHWASSERSTAND | 0xD357 | - | _EIN: 1 Waschwasserbehälter ausreichend befüllt _WERT: Pegel in mV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD357_D |
| WISCHER_HECK_VORHANDEN | 0xD358 | STAT_VORHANDEN_HECKWISCHER_EIN | 0: Heckwischer nicht codiert;  1: Heckwischer codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SRA_VORHANDEN | 0xD359 | STAT_VORHANDEN_SRA | Gibt an, ob die Scheinwerferreinigungsanlage codiert ist:  0= Scheinwerferreinigungsanlage nicht codiert;  1= Scheinwerferreinigungsanlage codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_WISCHER | 0xD35B | - | Liefert den Zustand der einzelnen Wischerschalter am Lenkstock | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD35B_D |
| WASCHWASSER_VORNE | 0xD35C | - | Status / Steuern Waschwasserpumpe vorne | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD35C_D | RES_0xD35C_D |
| WISCHER_FRONT | 0xD35D | - | Ansteuerung Scheibenwischer vorne | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35D_D | - |
| WISCHER_FRONT_LIN | 0xD35E | STAT_VORHANDEN_LIN_FRONTWISCHER | Gibt an, ob der Frontwischer als LIN-Modul verbaut ist:  0= kein LIN-Frontwischer;  1= LIN-Frontwischer | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_HECK | 0xD35F | - | Ansteuerung Scheibenwischers hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35F_D | - |
| SRA | 0xD360 | - | Ansteuerung Scheinwerferreinigungsanlage | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD360_D | - |
| LENKSTOCK_WISCHER_RLS_LED | 0xD361 | - | Status / Steuern LED Regensensor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD361_D | - |
| WISCHER_FRONT_MONTAGE | 0xD362 | - | Status / Steuern Montage-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD362_D | RES_0xD362_D |
| WISCHER_FRONT_SERVICE | 0xD363 | - | Status / Steuern Service-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD363_D | RES_0xD363_D |
| SPURWECHSELASSISTENT_TASTER | 0xD369 | - | Status / Simulation Taster Spurwechsel-Assistent   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD369_D | RES_0xD369_D |
| SPURWECHSELASSISTENT_TASTER_LED | 0xD36A | - | Status /Steuern des Taster-LED Spurwechsel-Assistent   1: LED ein | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD36A_D | RES_0xD36A_D |
| REGENSENSOR_VORHANDEN | 0xD373 | STAT_VORHANDEN_REGENSENSOR_EIN | 0: Regensensor nicht vorhanden / codiert; 1: Regensensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REGENSENSOR_INIT | 0xD375 | STAT_REGENSENSOR_INIT | 0x00 Regensensor nicht eingemessen 0x01 Regensensor eingemessen | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REGENSENSOR_INT_WERT | 0xD376 | - | Rückgabe Regenintensität | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD376_D |
| NIGHTVISION_TASTER | 0xD389 | - | Status / Simulation Taster Nightvision-Tasters   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD389_D | RES_0xD389_D |
| TLC_AKTUATOR | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD399_D | RES_0xD399_D |
| TLC_TASTER | 0xD39A | - | Status / Simulation Taster TimetoLineCrossing (TLC)-Tasters   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD39A_D | RES_0xD39A_D |
| TLC_TASTER_LED | 0xD39B | - | Status / Steuern LED TimetoLineCrossing (TLC)   1: LED ein | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD39B_D | RES_0xD39B_D |
| FAHRLICHTSENSOR | 0xD3BE | - | Auslesen der Werte des Fahrlichtsensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3BE_D |
| FAHRLICHTSENSOR_VORHANDEN | 0xD3BF | STAT_VORHANDEN_FAHRLICHTSENSOR | 1:Fahrlichtsensor vorhanden/codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HOD_LENKRAD | 0xD3F0 | STAT_HOD_STATUS_NR | Liefert den Status des HOD Sensors | 0-n | - | high | unsigned char | HOD_STATUS | - | - | - | - | 22 | - | - |
| HOD_ZUSTAND_GAP | 0xD3F1 | STAT_ADC_ROHWERT_WERT | Vom A/D-Wandler gemessener Rohwert des Abstands bzw. der Berührungsfläche zwischen Hand und Lenkrad | - | - | high | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HOD_AKTIVIERUNG | 0xD3F3 | - | Aktivierung der HOD-Elektronik per Diagnose | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3F3_D | - |
| WISCHER_LIN_WINKELPOSITION | 0xD500 | - | Status/Steuern LIN-Wischer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD500_D | RES_0xD500_D |
| WISCHER_LIN_DATEN_LESEN | 0xD505 | - | WISCHER_LIN_DATEN_LESEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD505_D |
| WISCHER_HECK_MOTOR_2 | 0xD507 | STAT_MOTOR_HECKWISCHER_2_EIN | Liefert den Zustand der Ansteuerung des 2. Heckscheibenwischers:  0= Ansteuerung 2. Heckscheibenwischer nicht aktiv; 1= Ansteuerung 2. Heckscheibenwischer aktiv | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| INNENLICHTEINHEIT_DRITTE_SITZREIHE | 0xD52C | - | Aktueller Status der ILE 3. Sitzreihe Statusrückmeldungen auf dem LIN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD52C_D |
| AHL_LWR_TMS_BESTROMEN | 0xD531 | - | Status / Steuern Bestromung TMS (ein/aus) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD531_D | RES_0xD531_D |
| TAGFAHRLICHT_DEAKTIVIEREN | 0xD537 | - | Status / Steuern Tagfahrlichtsperre aktiv/inaktiv | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD537_D | RES_0xD537_D |
| LWR_REFERENZLAUF | 0xD538 | - | Referenzlauf der LWR | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD538_D | - |
| LESELICHT_VORNE | 0xD53A | - | Status Leselicht vorne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD53A_D |
| LICHTSCHALTER_WBL_TASTER_BEL | 0xD53D | STAT_TASTER_WBL_BEL_EIN | 0: Bel. Taster Warnblinkanlage aus  1: Bel. Taster Warnblinkanlage ein | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| RUECKWAERTSGANG_SCHALTER | 0xD540 | STAT_SCHALTER_RUECK_EIN | 0: nicht aktiv 1: aktiv | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHEINWERFER_GRUNDSTELLUNG_STATUS | 0xD541 | STAT_GRUNDSTELLUNG_SCHEINWERFER_EIN | 0: Scheinwerfer reagiert auf  normalen  Mechanismus (manuelle LWR: Reaktion auf Rädchen automatische / dynamische LWR: Reaktion auf die Höhenstndssenoren  1: Scheinwerfer bleiben in Grundstellung (aufheben nur per Diagnose oder Klemmenwechsel möglich) | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEUCHTEN_FUNKTION | 0xD542 | - | Steuern der Lampenfunktion  Mögliche Elemente siehe Tabelle TAB_LAMPEN_FUNKTION | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD542_D | RES_0xD542_D |
| LESELICHT_VORNE_VORHANDEN | 0xD544 | STAT_VORHANDEN_LESELICHT_VORNE | 0= Leselicht vorn nicht vorhanden, 1= Leselicht vorne vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LESELICHT_HINTEN_VORHANDEN | 0xD545 | STAT_VORHANDEN_LESELICHT_HINTEN | 0= Leselicht hinten nicht vorhanden, 1= Leselicht hinten vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AHL_LWR_REFERENZLAUF | 0xD547 | - | Status AHL- und LWR-Referenzlauf | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD547_D | RES_0xD547_D |
| LWR_DYNAMISCH_SCHRITTE_REFLAUF | 0xD548 | STAT_VORHANDEN_LWR_SCHRITTE_REF_LAUF_WERT | Schrittanzahl fuer den Referenzlauf der Leuchtweitenregelung | Ink | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_HINTEN_TASTER | 0xD54B | STAT_INNENLICHT_TASTER_HINTEN_EIN | 0: Taster nicht betätigt 1: Taster betaetigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_VORNE_TASTER | 0xD54C | - | Status Taster Innenlicht / Innenlicht Daueraus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD54C_D |
| BUS_IN_BELADUNGSSENSOR | 0xD54D | - | Busnachricht für die Beladungssensoren in mm | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD54D_D |
| LESELICHT_HINTEN_RECHTS_TASTER | 0xD54E | STAT_TASTER_LESELICHT_HINTEN_RECHTS_EIN | 0: Taster nicht betätigt 1: Taster betätigt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LWR_MANUELL_POTI | 0xD54F | STAT_POTI_MAN_LWR_WERT | Wert des Rändelsrads der manuellen LWR 0 - 254 gültiger Wertebereich  255 ungültig | Ink | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTEREINHEIT | 0xD550 | - | Status Lichtschaltereinheit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD550_D |
| LICHTSCHALTER_WBL_TASTER | 0xD552 | STAT_TASTER_WBL_EIN | 0: Taster nicht betätigt  1: Taster betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LESELICHT_HINTEN | 0xD553 | - | Status Leselicht hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD553_D |
| PIA_FLA_FOLLOW | 0xD555 | - | Status PIA (FollowMeHome) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD555_D |
| SCHALTERBELEUCHTUNG_RAENDELRAD | 0xD557 | STAT_POTI_DIMMUNG_WERT | 0 - 254: gültiger Wertebereich  255 ungültig | Ink | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AHL_LWR_POSITION | 0xD558 | - | Status / Steuern Scheinwerfer Positon | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD558_D | RES_0xD558_D |
| PIA_ABBIEGELICHT | 0xD559 | STAT_PIA_ABBIEGELICHT_PIA_EIN | 0: PIA: Abbiegelicht momentan nicht aktiv 1: PIA: Abbiegelicht momentan aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PIA_TIPPBLINKEN | 0xD55E | - | Status PIA-Einstellung Tippblinken | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD55E_D |
| LWR_MANUELL | 0xD55F | - | Positionsangaben manuelle Leuchtweitenregulierung (MIN, MAX, aktuell) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD55F_D |
| PIA_TAGFAHRLICHT | 0xD573 | STAT_PIA_TAGFAHRLICHT_EIN | Tagfahrlicht momentan: 0= AUS; 1= EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_HINTEN | 0xD57B | - | Status Innenlicht hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57B_D |
| INNENLICHT_VORNE | 0xD57C | - | Status Innenlicht vorne / Steuern Innenlicht Daueraus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD57C_D | RES_0xD57C_D |
| LWR_MODUS | 0xD57E | - | Welche Leuchtweitenregulierung (LWR) ist aktiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57E_D |
| INNENLICHT_KLEMME_VA | 0xD57F | - | Status Klemme VA (Verbraucherabschaltung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57F_D |
| LENKSTOCK_BLINKER_TASTER_FLA | 0xD580 | STAT_LENKSTOCK_BLINKER_TASTER_FLA_EIN | 0: Lenkstock Blinker axialer Taster Fernlichtassistent nicht betätigt; 1: Lenkstock Blinker axialer Taster Fernlichtassistent betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_BLINKER_TASTER_BC | 0xD581 | STAT_LENKSTOCK_BLINKER_TASTER_BC_EIN | 0: Lenkstock Blinker axialer Taster Bordcomputer nicht betätigt; 1: Lenkstock Blinker axialer Taster Bordcomputer betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_BLINKER_FRA | 0xD582 | - | Status Taster Fahrrichtungsanzeiger. Resultbeschreibung in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD582_D |
| LENKSTOCK_BLINKER_LICHTHUPE_FERNLICHT | 0xD583 | - | Status Lichthupe / Fernlicht. Resultbeschreibung in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD583_D |
| LENKSTOCK_BLINKER_WIPPE | 0xD585 | - | Status der Blinkerswippe am Lenkstock. Details in der Sub-Tabelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD585_D |
| LESELICHT_HINTEN_LINKS_TASTER | 0xD587 | STAT_TASTER_LESELICHT_HINTEN_LINKS_EIN | 0: Taster nicht betätigt 1: Taster betätigt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LESELICHT_VORNE_RECHTS_TASTER | 0xD588 | STAT_TASTER_LESELICHT_VORNE_RECHTS_EIN | 0: Taster nicht betätigt 1: Taster betätigt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LESELICHT_VORNE_LINKS_TASTER | 0xD589 | STAT_TASTER_LESELICHT_VORNE_LINKS_EIN | 0: Taster nicht betätigt 1: Taster betätigt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LWR_POSITION_MIN_MAX | 0xD58A | - | Status Endanschlag Rändelrad manuelle LWR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD58A_D |
| LICHTSCHALTER_NSW_TASTER | 0xD58B | STAT_TASTER_NSW_EIN | 0: Taster Nebelscheinwerfer nicht betätigt; 1: Taster Nebelscheinwerfer betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTER_NSL_TASTER | 0xD58C | STAT_TASTER_NSL_EIN | 0: Taster Nebelschlussleuchte nicht betätigt 1: Taster Nebelschlussleuchte betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHEINWERFER_GRUNDSTELLUNG | 0xD58E | - | Reaktion der Scheinwerfer auf LWR-Anforderungen kann aktiviert und deaktiviert werden | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD58E_D | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0_D | - |
| AMBIENTE_BELEUCHTUNG | 0xD5D3 | - | Status Ambiente-Beleuchtung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5D3_D |
| SMO_LOESCHEN_SPIELSCHUTZZAEHLER | 0xD5D5 | - | SMO Spielschutzzählers | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5D5_D | - |
| SMO_RESET | 0xD5D7 | - | SMO Reset | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5D7_D | - |
| INNENLICHT_MAPPING | 0xD5DE | - | Ausgabe der Zuordnung Pin zu Funktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5DE_D |
| AHL_LWR_TMS_ID_LESEN | 0xD5E5 | - | Codierkennung der TMS lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5E5_D |
| AHL_LWR_FAHRSITUATION | 0xD5E6 | - | Status / Steuern aktuelle Fahrlichtsituation | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD5E6_D | RES_0xD5E6_D |
| HOEHENSTAENDE_SENSOREN | 0xD601 | - | Auswertung / Zustandserkennung der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD601_D |
| HOEHENSTAENDE_VERSORGUNG | 0xD603 | - | Versorgungsspannung Höhenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD603_D |
| HOEHENSTAENDE_KALIBRIERUNG_LESEN | 0xD604 | - | Auslesen Nullpunkt Hoehenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD604_D |
| STATUS_FES_MODUS | 0xD611 | STAT_FES_MODUS | aktueller FES Modus | 0-n | - | high | unsigned char | TAB_MODUS_FAHRERLEBNIS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_FES_STATISTIK | 0xD612 | - | STATUS_FES_STATISTIK | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD612_D |
| STEUERN_FES_MODUS | 0xD613 | - | Steuern des FES Modus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD613_D | - |
| SWITCH_BOARD_TASTEN | 0xD622 | - | DID zum Auslesen und Ansteuern der Switchboard-Tasten | bit | - | - | BITFIELD | RES_0xD622_D | - | - | - | - | 22 | - | - |
| STATUS_FES_DATEN | 0xD625 | - | Status FES Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD625_D |
| STEUERN_FES_DATEN | 0xD626 | - | Steuern FES Daten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD626_D | - |
| SWITCHBOARD_TASTE_VERBAU | 0xD627 | - | SWITCHBOARD_TASTE_VERBAU | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD627_D |
| SWITCHBOARD_TASTE | 0xD629 | - | DID zum Auslesen und Ansteuern der Tasten Switchboard | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD629_D | RES_0xD629_D |
| CORONA_LED | 0xD62A | - | DID for Corona LED | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD62A_D | RES_0xD62A_D |
| AUSSTATTUNG_CORONA_LED | 0xD62B | STAT_VORHANDEN_CORONA_LED | 0: CORONA LED nicht vorhanden;  1: CORONA LED vorhanden | 0/1 | - | - | signed char | - | - | - | - | - | 22 | - | - |
| FES_MASTER_SW_FEHLER_INFO | 0xD62D | STAT_FES_MASTER_SW_FEHLER_INFO_WERT | FES Master SW Fehler | - | - | high | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_HECK_SERVICE | 0xD642 | - | Status / Steuern Service-Position Heckscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD642_D | RES_0xD642_D |
| SWITCH_BOARD_TASTEN_VERBAU | 0xD669 | - | DID zum Auslesen des Verbaus einzelner Switchboard-Tasten | bit | - | - | BITFIELD | RES_0xD669_D | - | - | - | - | 22 | - | - |
| KUEHLMITTELSTAND | 0xD672 | - | _EIN: 1 Kühlmittelbehälter ausreichend befüllt _WERT: Pegel in mV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD672_D |
| GURTZUBRINGER_FA | 0xD71A | - | Status Gurtzubringer Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD71A_D |
| GURTZUBRINGER_BF | 0xD71B | - | Status Gurtzubringer Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD71B_D |
| GURTZUBRINGER_POSITION | 0xD71C | - | Fahren der Gurtzubringer auf eine bestimmte Position | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD71C_D | - |
| GURTZUBRINGER_RICHTUNG | 0xD71D | - | Fahren der Gurtzubringer in eine bestimmte Richtung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD71D_D | - |
| SITZHEIZUNG_FA_VORHANDEN | 0xD726 | STAT_SITZHEIZUNG_FA_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_VORHANDEN | 0xD727 | STAT_SITZHEIZUNG_BF_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FAH_VORHANDEN | 0xD728 | STAT_SITZHEIZUNG_FAH_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BFH_VORHANDEN | 0xD729 | STAT_SITZHEIZUNG_BFH_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_STUFE | 0xD72A | - | Status / Steuern Stufe Sitzheizung Beifahrerseite | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD72A_D | RES_0xD72A_D |
| BUS_IN_SITZHEIZUNG_STUFE_BF | 0xD72D | STAT_BUS_IN_SITZHEIZUNG_BF_NR | Busnachricht Stufe Sitzheizung Beifahrerseite, 0: AUS; 1: Stufe 1; 2: Stufe 2;  3: Stufe 3 | 0-n | - | - | unsigned char | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_TEMP | 0xD72F | - | Status / Steuern Temperatur Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD72F_D | RES_0xD72F_D |
| SITZHEIZUNG_BF | 0xD730 | - | Betriebszustand Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD730_D |
| BUS_IN_SITZHEIZUNG_STUFE_FA | 0xD731 | STAT_BUS_IN_SITZHEIZUNG_FA_NR | Busnachricht Stufe Sitzheizung Fahrerseite, 0: AUS; 1: Stufe 1; 2: Stufe 2;  3: Stufe 3 | 0-n | - | - | unsigned char | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FA_TEMP | 0xD732 | - | Status / Steuern Temperatur Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD732_D | RES_0xD732_D |
| SITZHEIZUNG_FA_STUFE | 0xD737 | - | Status / Steuern Stufe Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD737_D | RES_0xD737_D |
| VORHANDEN_DRITTE_SITZREIHE_EIN | 0xD762 | STAT_VORHANDEN_DRITTE_SITZREIHE_EIN | Gibt an, ob die 3. Sitzreihe vorhanden ist: 0= Dritte Sitzreihe nicht codiert; 1= Dritte Sitzreihe codiert | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VERRIEGELUNG_ZWEITE_SITZREIHE | 0xD763 | STAT_VERRIEGELUNG_ZWEITE_SITZREIHE_EIN | 0: Zweite Sitzreihe nicht verriegelt; 1: Zweite Sitzreihe verriegelt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FA | 0xD771 | - | Betriebszustand Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD771_D |
| SITZHEIZUNG_BFH_STUFE | 0xD7AA | - | Status / Steuern Stufe Sitzheizung Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7AA_D | RES_0xD7AA_D |
| SITZHEIZUNG_BFH_TEMP | 0xD7B0 | - | Status / Steuern Temperatur Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7B0_D | RES_0xD7B0_D |
| SITZHEIZUNG_FAH | 0xD7EA | - | Betriebszustand Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EA_D |
| SITZHEIZUNG_FAH_STUFE | 0xD7EB | - | Status / Steuern Stufe Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7EB_D | RES_0xD7EB_D |
| SITZHEIZUNG_BFH | 0xD7EC | - | Betriebszustand Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EC_D |
| SITZHEIZUNG_FAH_TEMP | 0xD7F1 | - | Status / Steuern Temperatur Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD7F1_D | RES_0xD7F1_D |
| SITZHEIZUNG_HINTEN_TASTER_VORHANDEN | 0xD86C | STAT_VORHANDEN_SITZHEIZUNG_TASTER_HINTEN | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WASSERVENTIL_DUO_PWM_WERT | 0xD89E | - | Statusabfrage bzw. Ansteuerung der Wasserventil Fahrer- und Beifahrerseite. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD89E_D | RES_0xD89E_D |
| VORHANDEN_FONDSCHICHTUNG | 0xD8AA | STAT_VORHANDEN_FONDSCHICHTUNGSPOTI | 0=Fondschichtungspotentiometer nicht vorhanden 1=Fondschichtungspotentiometer vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | Solarsensor: 0 = nicht vorhanden / codiert; 1 = vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor: 0 = nicht vorhanden; 1 = vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UMSCHALTVENTIL | 0xD8DA | - | Statusabfrage bzw. Ansteuerung des Umschaltventils. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8DA_D | RES_0xD8DA_D |
| HK_WIPPE | 0xD8E0 | - | Heckklappen Wippe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8E0_D | RES_0xD8E0_D |
| FENSTERHEBER_VORHANDEN | 0xD8FE | STAT_ANZAHL_FH_KODIERT | Auslesen der Anzahl von kodierten Fensterheber. | 0-n | - | high | unsigned char | TAB_FH_ANZAHL_VORHANDEN | - | - | - | - | 22 | - | - |
| ZUSATZWASSERPUMPE | 0xD903 | - | Status / Steuern Zusatzwasserpumpe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD903_D | RES_0xD903_D |
| KLIMAKOMPRESSOR | 0xD906 | - | Status Klimakompressor (EIN / AUS und PWM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD906_D |
| KLIMAKOMPRESSOR_ANSTEUERN | 0xD908 | - | Ansteuerung Klimakompressor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD908_D | - |
| VORHANDEN_KOMPRESSORKUPPLUNG | 0xD916 | - | Auslesen ob eine Kompressorkupplung vorhanden ist. Bei PHEV-Fahrzeugen gibt der Job zurück, ob ein Umschaltventil vorhanden ist.  | bit | - | - | BITFIELD | RES_0xD916_D | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | Gibt aus, ob ein Drucksensor für R134A verbaut ist: 0 = nicht vorhanden, 1 = vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | Wasserventil vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A_D |
| SOLARSENSOR | 0xD961 | - | Status Solarsensor Links und Rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD961_D |
| AUC_SENSOR | 0xD963 | STAT_AUC_SENSOR_NR | Gibt aus, welche Schadstoffstufe der AUC-Sensor ermittelt hat. | 0-n | - | - | unsigned char | TAB_AUC_STUFE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR | 0xD967 | STAT_R134A_DRUCK_WERT | Ausgabe Kältemitteldruck in bar. | bar | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BESCHLAGSENSOR | 0xD96C | - | Relative Feuchte und Temperatur | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD96C_D |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 0: Beschlagsensor nicht vorhanden / codiert   1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FONDSCHICHTUNGS_POTI | 0xD96E | STAT_FONDSCHICHTUNGS_POTI_WERT | Ausgabe der Einstellung des Fond-Schichtungspotentiometer: 0-100 %, 0xFF: Wert ungültig | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HECKSCHEIBENHEIZUNG | 0xD970 | - | Statusabfrage bzw. Ansteuerung der Heckscheibenheizung. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD970_D | RES_0xD970_D |
| KOMPRESSORKUPPLUNG | 0xD971 | - | Statusabfrage bzw. Ansteuerung der Kompressorkupplung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD971_D | RES_0xD971_D |
| DRUCKSENSOR_HOCHAUFLOESEND | 0xD9B8 | STAT_DRUCK_WERT | Ausgabe Kältemitteldruck hochauflösend: 0,00 - 40,89 bar ;  40,90 = Kurzschluss nach Masse;  40,91 = Leitungsunterbrechung oder Kurzschluss nach Batterie;  40,92 = Nicht verbaut;  40,93 = Funktionsschnittstelle nicht verfügbar;  40,94 = Funktion melder Fehler;  40,95 = Signal unbefüllt | bar | - | - | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| HUD_TASTER | 0xDA0D | - | Status / Simulation Taster HeadUp-Display   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDA0D_D | RES_0xDA0D_D |
| LENKRAD_SCHALTPADDLES | 0xDA24 | - | Status Schaltpaddles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA24_D |
| ZV_BEDIENSTELLEN | 0xDA49 | - | Dieser Job dient dazu per Diagnose die Werte für den Zustand der jeweiligen ZV-Bedienstelle vorzugeben. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDA49_D | RES_0xDA49_D |
| STEUERN_HISTORIE_ZUENDUNG_EIN | 0xDA4B | - | STEUERN_HISTORIE_ZUENDUNG_EIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4B_D | - |
| STEUERN_KLEMMEN_HISTORIE | 0xDA4C | - | STEUERN_KLEMMEN_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4C_D | - |
| STEUERN_STANDVERBRAUCHER_HISTORIE | 0xDA4D | - | STEUERN_STANDVERBRAUCHER_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4D_D | - |
| STEUERN_ZV_HISTORIE | 0xDA4E | - | STEUERN_ZV_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4E_D | - |
| STEUERN_ELV_HISTORIE | 0xDA4F | - | STEUERN_ELV_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4F_D | - |
| DC_DC_WANDLER_VORHANDEN | 0xDA54 | - | 1: DC/DC-Wandler verbaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA54_D |
| LAYERING_LIN_EIN | 0xDA5E | - | Alle Slaves im Layering LIN-System werden mit voller Helligkeit für die im Argument übergebene Zeit angesteuert | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA5E_D | - |
| STAT_LIN_LAYERING | 0xDA5F | - | Es wird der Status der LIN Slaves im Layering System abgefragt und ausgegeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA5F_D |
| STATUS_CODIERUNG_FAHRZEUGKLAPPEN | 0xDA61 | - | Der Job dient zum Auslesen der kodierten Fahrzeugklappen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA61_D |
| LAYERING_LIN_EINZELN | 0xDA62 | - | Aktivieren von Leuchtmitteln | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA62_D | - |
| TUERKONTAKT_BF | 0xDA77 | - | Status / Simulation Hardwareeingang Türkontakt Beifahrer | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA77_D | RES_0xDA77_D |
| TUERKONTAKT_BFH | 0xDA78 | - | Status / Simulation Hardwareeingang Türkontakt Beifahrer hinten | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA78_D | RES_0xDA78_D |
| TUERKONTAKT_FA | 0xDA79 | - | Status / Simulation Hardwareeingang Türkontakt Fahrer  Dieser Job wird im Rahmen der FUSI in speziellen Prüfschritten in Werk und HO verwendet. Der Job darf daher nie entfallen und muss im Rahmen der Absicherung als kritischer/hochpriorer Test betrachtet werden. | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA79_D | RES_0xDA79_D |
| TUERKONTAKT_FAH | 0xDA7A | - | Status / Simulation Hardwareeingang Türkontakt Fahrer hinten | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA7A_D | RES_0xDA7A_D |
| TUERKONTAKT_BFH_OBEN | 0xDA7B | STAT_TUERKONTAKT_BFH_OBEN | STAT_TUERKONTAKT_BFH_OBEN | 0-n | - | high | unsigned char | TAB_CAS_HW_KONTAKT | - | - | - | - | 22 | - | - |
| HECKKLAPPE_TASTER_AUSSEN | 0xDA7D | - | Status / Simulation für Taster Heckklappe aussen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA7D_D | RES_0xDA7D_D |
| TUERKONTAKT_FAH_OBEN | 0xDA7E | STAT_TUERKONTAKT_FA_OBEN | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür hinten oben. Hinweis: Für Wert  8 = Kontakt nicht verbaut  muss der Codierwert CLI_REAR_DOOR_CONTACT_TOP_ASSEMBLED ausgewertet werden. | 0-n | - | high | unsigned char | TAB_CAS_HW_KONTAKT | - | - | - | - | 22 | - | - |
| HECKSCHEIBE_TASTER | 0xDA80 | - | Status / Simulation für Taster Heckscheibe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA80_D | RES_0xDA80_D |
| ZV_BEIFAHRER | 0xDA81 | - | Status Zentralverriegelung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA81_D |
| ZV_BEIFAHRER_HINTEN | 0xDA82 | - | Zentralverriegelung: Status Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA82_D |
| ZV_FAHRER | 0xDA83 | - | Status Zentralverriegelung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA83_D |
| ZV_FAHRER_HINTEN | 0xDA84 | - | Zentralverriegelung: Status Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA84_D |
| ZV_HECKKLAPPE | 0xDA85 | - | Status Zentralverriegelung Heckklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA85_D |
| ZV_HECKSCHEIBE | 0xDA86 | - | Status Zentralverriegelung Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA86_D |
| ZV_GESAMT | 0xDA87 | - | Status aller ZV-Antriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA87_D |
| FRONTKLAPPE_TASTER | 0xDA89 | - | Taster für Frontklappe | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA89_D | RES_0xDA89_D |
| CA_BEDIENSTELLEN | 0xDA8A | - | Dieser Job dient dazu per Diagnose die Werte für den Zustand der jeweiligen CA-Bedienstelle vorzugeben. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDA8A_D | RES_0xDA8A_D |
| HECKKLAPPE_KONTAKT | 0xDA92 | - | Status / Simulation Heckklappenkontakt 0: Heckklappe geschlossen 1: Heckklappe offen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA92_D | RES_0xDA92_D |
| HECKSCHEIBE_KONTAKT | 0xDA93 | - | Status / Simualtion Heckscheibenkontakt 0: Heckscheine offen 1: Heckscheibe geschlossen | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA93_D | RES_0xDA93_D |
| SCA_VORRAST_KONTAKT | 0xDA94 | - | Status / Simulation  HW-Eingang Vorrastkontakt (VRK) der Soft-Close-Automatik (SCA) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDA94_D | RES_0xDA94_D |
| ZV_KURZSCHLUSSABSCHALTUNG | 0xDA95 | - | Dieser Job dient zum Auslesen des Status der dauerhaften Kurzschlussabschaltung der ZV-Antriebe der Heckklappe und Heckscheibe. Die Kurzschlussabschaltung dient zum Überlastschutz des HW-Treiber.  Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument ZV_KURZSCHLUSSABSCHALTUNG - Details zum Ablauf der Kurzschlussabschaltung siehe ZSG_BF_13070 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA95_D |
| SPANNUNG_KLEMMEN | 0xDAB3 | - | Auslesen analoger Spannungs- und Strom-Werte an den CAS Ausgängen und Eingängen. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMMEN. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB3_D |
| KEY_VALID_NR_AKTUELL | 0xDAB4 | STAT_KEY_VAILD_NR_AKTUELL | Das Result enthält die Nummer (gemäß Transpondertabelle) des aktuell gültigen Schlüssel. Werte: 0-19 Schlüsselnummer, 255 momentan kein gültiger Schlüssel. | 0-n | - | - | unsigned char | TAB_CAS_SCHLUESSEL_POSITION | - | - | - | - | 22 | - | - |
| CA_TAGE_ER_LEITUNG | 0xDAB5 | - | Auslesen der jeweiligen Statuswerte der analogen Entriegeln-Leitungen von den Tür-Aussengriff-Elektroniken (TAGE) in den Türen FT, BFT, FTH, BFTH. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CA_TAGE_ER_LEITUNG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB5_D |
| START_STOP_TASTER | 0xDAB6 | STAT_TASTER_SST_AKTIV | Das Result enthält den aktuellen logischen Zustand des Start-Stopp-Tasters. | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_FAHRPROFIL | 0xDAB8 | - | STEUERN_FAHRPROFIL | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAB8_D | - |
| CAS_MONTAGEMODUS | 0xDAB9 | - | Statusabfrage und Setzen des Montagemodus für ELV-Sperre, KL50-Sperre und Präsentations-Modus. Die ELV-Sperre (ELV-Montagemodus) verhindert die Ansteuerung (Verriegeln/Entriegeln) der ELV während des Montage-Prozesses. Die ELV-Diagnosen (z.B. Status-Abfragen, ELV-Ident) sind zulässig.  Die KL50-Sperre verhindert die Ansteuerung des Anlassers während des Montage-Prozesses. Der Präsentations-Modus dient zum Messen und deaktiviert einige Funktionen in der Klemmen-Steuerung (z.B. KL15-Abschaltung). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CAS_MONTAGEMODUS. - Im CAS Anlieferzustand sind immer alle Sperren Aktiv.  - Die ELV-Sperre wird mit gültigem Geschwindigkeitssignal automatisch deaktiviert. - Die KL50-Sperre muss explizit per Diagnose aufgehoben werden. - Wenn die ELV-Sperre aktiv ist, so ist auch zwingend die KL50-Sperre aktiv. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDAB9_D | RES_0xDAB9_D |
| STATUS_KLEMMEN_VERHINDERER | 0xDABA | - | Auslesen der internen Verhinderungsgründe der Klemmensteuerungs-Statemachine für Klemmenwechsel:  Einschalten der KL15, Ausschalten der KL15, Einschalten der KL50 Hinweise: - Es wird jeweils nur ein Hinderungsgrund ausgegeben, auch wenn mehrere Hinderungsgründe vorliegen. - Abhängig vom betrachteten Klemmen-Wechsel sind jeweils nicht alle Werte aus der Tabelle TAB_CAS_KLEMMEN_VERHINDERER möglich. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABA_D |
| BUS_IN_DATUM_ZEIT | 0xDABB | - | Der Job dient zum Auslesen des aktuellen vom Kombi empfangenen Zeitstempels (Datum und Zeit). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DATUM_ZEIT - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal in den entsprechenden Results zurückgegeben. - Die Daten stammen aus CAN-Nachricht UHRZEIT_DATUM und RELATIVZEIT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABB_D |
| BUS_IN_DME1 | 0xDABC | - | Der Job dient zum Auslesen der über CAN empfangenen Werte von der Motorsteuerung (DME). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DME1. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. Die Daten stammen aus den CAN-Nachrichten Daten Antriebsstrang 2 (DT_PT_2) und Drehmoment Kurbelwelle 1 (TORQ_CRSH_1) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABC_D |
| BUS_IN_DSC | 0xDABD | - | Der Job dient zum Auslesen der über CAN empfangenen Werte von der Digitalen Stabilitätskontrolle (DSC). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DSC. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. Die Daten stammen aus CAN-Nachrichten Status Stabilisierung DSC (ST_STAB_DSC) und Geschwindigkeit Fahrzeug (V_VEH) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABD_D |
| STEUERN_HISTORIE_30F_ABSCHALTUNG | 0xDABE | - | STEUERN_HISTORIE_30F_ABSCHALTUNG | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDABE_D | - |
| BUS_IN_FH | 0xDABF | - | Der Job dient zum Auslesen der über CAN empfangenen Werte für den Status der einzelnen Fensterheber (je Tür FT,BFT,FTH,BFTH). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_FH. - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. - Die Daten stammen aus CAN-Nachricht POSITION_FH_BFT, POSITION_FH_BFTH, POSITION_FH_FAT und POSITION_FH_FATH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABF_D |
| STEUERN_HISTORIE_KL30B_AKTIV | 0xDAC0 | - | STEUERN_HISTORIE_KL30B_AKTIV | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAC0_D | - |
| CA_TAGE_SPERRSTATUS | 0xDAC4 | - | Der Job dient zum Auslesen des (Sperr-)Status der TAGE, der angibt, ob die TAGE gesperrt (z.B. aufgrund Dauerbetätigung oder sporadischer unmotivierter Aktivierung) oder freigegeben sind. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDAC4_D | RES_0xDAC4_D |
| CA_TAGE_STATUS | 0xDACA | - | Auslesen des jeweiligen Sensorstatus der Tür-Aussengriff-Elektroniken (TAGE) in den Türen FT, BFT, FTH, BFTH. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CA_TAGE_STATUS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDACA_D |
| SPANNUNG_KLEMME_30L1 | 0xDAD6 | STAT_SPANNUNG_KLEMME_30L1_WERT | Spannungswert am Steuergerät an Klemme 30L (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30L2 | 0xDAD7 | STAT_SPANNUNG_KLEMME_30L2_WERT | Spannungswert am Steuergerät an Klemme 30L (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG | 0xDB12 | - | Dieser Job dient zum Auslesen des Status der dauerhaften Kurzschlussabschaltung der HW-Treiber KL30B/KL15N und KL30B-ACSM. Die Kurzschlussabschaltung dient zum Überlastschutz der HW-Treiber.  Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG - Details zum Ablauf der Kurzschlussabschaltung siehe ZSG_BF_13070 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB12_D |
| HECKKLAPPENSENSOR | 0xDB16 | STAT_HECKKLAPPENSENSOR | Aktueller Zustand des Heckklappensensors | 0-n | - | high | unsigned char | TAB_CAS_HECKKLAPPENSENSOR | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Das Result enthält die Nachlaufzeit der Klemme 15N in Sekunden. | s | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_30B | 0xDB2E | STAT_NACHLAUFZEIT_KLEMME_30B_WERT | Das Result enthält die Nachlaufzeit der Klemme 30B in Sekunden. | s | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ACC_TASTER | 0xDBEA | - | Status / Simulation Taster ACC (iBrake)   1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDBEA_D | RES_0xDBEA_D |
| ACC_TASTER_LED | 0xDBEB | - | Status / Steuern der LED ACC-Taster (iBrake-Taster)   1: LED ein | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDBEB_D | RES_0xDBEB_D |
| HO_INFO | 0xDC54 | - | Auslesen und Setzen der folgenden im CAS gespeicherten Daten für die Handelsorganisation: - Händlernummer - Erstzulassungsdatum Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN mit Argument HO_INFO. - Die Händlernummer wird vom Werk mit '00000' und das Erstzulasungsdatum mit dem Datum der Schlüssel-Initialisierung belegt. Diese Informationen sind Teil der CBS-Daten und werden auch in den Schlüssel übertragen. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC54_D | RES_0xDC54_D |
| STATUS_KLEMMEN | 0xDC56 | STAT_KLEMMENSTATUS | Das Result enthält den Status der Klemmen im CAS-Steuergerät. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KLEMMENSTATUS. | 0-n | - | high | unsigned char | TAB_CAS_KLEMMENSTATUS | - | - | - | - | 22 | - | - |
| STATUS_KL15_ABSCHALTUNG | 0xDC57 | - | Dieser Job dient zum Auslesen des Status der Funktion automatische KL15-Abschaltung (Tür auf/zu, ZV sichern, OSFG). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC57_D |
| ANSTEUERUNG_KL30F_HINTEN | 0xDC5A | - | Dieser Job dient zum Auslesen des Zustands der FEM-Ausgänge zum Ansteuern der KL30F Hinten. Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument ANSTEUERUNG_KL30F_HINTEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC5A_D |
| START_STOP_TASTER_SENSOREN | 0xDC60 | - | Dieser Job dient zum Auslesen und Setzen der Zustände der beiden Sensoren des Start-Stopp-Tasters.  Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument START_STOP_TASTER_SENSOREN - Signalnamen der digitalen CAS Eingänge sind SSTA und SSTB - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument START_STOP_TASTER_SENSOREN und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuellen Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC60_D | RES_0xDC60_D |
| BREMSLICHT_SCHALTER | 0xDC61 | STAT_SCHALTER_BREMSLICHT_AKTIV | Das Result enthält den aktuellen Zustand des Bremslichtschalters | 0-n | - | - | unsigned char | TAB_CAS_HALL_SENSOR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KUPPL_PN_SCHALTER | 0xDC63 | STAT_SCHALTER_KUPPL_PN_AKTIV | Das Result enthält den aktuellen Zustand des Kupplungsschalters (Manuelles Getriebe) oder PN-Signal (Automatikgetriebe) vom EGS. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. | 0-n | - | - | unsigned char | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CENTERLOCK_TASTER | 0xDC64 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Centerlock-Taster. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_CENTERLOCK - Signalname des digitalen CAS Eingang ist CLT - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_CENTERLOCK und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC64_D | RES_0xDC64_D |
| MOTORHAUBE_SCHALTER | 0xDC65 | STAT_SCHALTER_MOTORHAUBE_AKTIV | Das Result enthält den aktuellen Zustand des Eingangs Motorhaubenkontakt. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. | 0-n | - | - | unsigned char | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HOTEL_SCHALTER | 0xDC66 | STAT_SCHALTER_HOTEL_AKTIV | Das Result enthält den aktuellen Zustand des Eingangs HOTEL-Schalters. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. | 0-n | - | - | unsigned char | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MSA_TASTER | 0xDC67 | - | Dieser Job dient zum Auslesen des Zustands des FEM-Eingangs für den Taster der Motor-Start-Automatik (MSA) oder Electric Vehicle (EV). | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC67_D | RES_0xDC67_D |
| TASTER_SICHERN_HECKKL | 0xDC68 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Taster zum Zentralsichern der Heckklappe. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_SICHERN_HECKKL - Signalname des digitalen CAS Eingang ist TZSHK. - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_SICHERN_HECKKL und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC68_D | RES_0xDC68_D |
| HECKKLAPPE_TASTER_OEFFNEN_INNEN | 0xDC69 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_HECKKL_INNEN - Signalname des digitalen CAS Eingang ist TOEHKI - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_HECKKL_INNEN und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU)  RTD: Reset auf Defaultwert (resetToDefault)  FCS: Aktuelle Zustand einfrieren (freezeCurrentState)  STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC69_D | RES_0xDC69_D |
| SARAH | 0xDC83 | - | Detaillierter SARAH Zustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC83_D | RES_0xDC83_D |
| SARAH_TASTER | 0xDC84 | - | Status / Simulation Taster SARAH  1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC84_D | RES_0xDC84_D |
| SARAH_TASTER_LED | 0xDC85 | - | Status / Simulation LED SARAH  1: LED ein | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC85_D | RES_0xDC85_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| LWR_STATISTIK | 0x2302 | - | Auslesen der Statistik über die Dauer des jeweiligen Beladungszustandes in Abhängigkeit der Gesamtsystemzeit mit aktivem Ablendlicht und gleicht die Werte zwischen den Varianten 1 HSS und 2 HSS ab | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2302_D |
| _HOD | 0x4015 | - | Das Werk benötigt eine Möglichkeit zur Aktivierung der HOD per Diagnose-Job im Fertigungsmodus. | - | - | - | - | - | - | - | - | - | 2E | - | - |
| _STEUERN_LEUCHTENAUSGANG_DIGITAL | 0x4501 | - | Ansteuerung eines spezifischen Lampensausgangs (ein/aus) | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4501_D | - |
| _RESET_BETRIEBSDAUER | 0x4506 | - | _RESET_BETRIEBSDAUER | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4506_D | - |
| _LWR_DIAG | 0x4507 | - | Diagnose der LWR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4507_D |
| _LICHT_UEBERSPANNUNGSCOUNTER | 0x4508 | STAT_LICHT_UESPANNUNG_COUNTER_WERT | Anzahl Licht Überspannungscounter Aktivierungen insgesamt | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LICHT_12H_TIMER | 0x4509 | - | Lesen - und Schreiben des Licht 12h-Timers | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4509_D | RES_0x4509_D |
| _RESET_LICHT_UEBERSPANNUNGSCOUNTER | 0x4523 | - | _RESET_LICHT_UEBERSPANNUNGSCOUNTER | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4523_D | - |
| _ZV_KURZSCHLUSSABSCHALTUNG_ZAEHLER | 0x4700 | - | DID zum Auslesen der Zähler der dauerhaften Kurzschlussabschaltung der ZV-Antriebe Heckklappe und Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4700_D |
| _INNENBELEUCHTUNG_PWM | 0x4800 | - | _INNENBELEUCHTUNG_PWM | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0x4800_D | RES_0x4800_D |
| _INNENBELEUCHTUNG_DAUERAUS | 0x4801 | STAT_INNENLICHT_IB_1_DAUER_AUS | STAT_INNENLICHT_IB_1_DAUER_AUS | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SARAH_STATISTIK | 0x4910 | - | Informationen zum SARAH Benutzerverhalten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4910_D |
| _STATUS_BASESTATION | 0x4E07 | STAT_BASESTATION_RAW_WERT_DATA | Das Ergebnis enthält die 6 Byte Rohdaten der Basestation-Register. | DATA | - | high | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| IBS_WAKEUP_GRUND | 0x4F0E | STAT_IBS_WAKEUP | Das Result enthält den im FEM gespeicherten letzten Wakeupgrund vom IBS. | 0-n | - | high | unsigned char | TAB_IBS_WAKEUP_GRUND | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _STATUS_DFZ_SK | 0x5001 | STAT_DFZ_SK_WERT | Das Ergebnis enthält die Secret Key des DFZ. 16 Byte Hexadezimaler Wert | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _DFZ_MODUS | 0x5002 | - | Der Job dient zum Setzen des Aktivierungsstatus für den DFZ Modus. Hinweis: Bei aktiviertem DFZ Modus verhindert das CAS ein Neugenerierung des DFZ Secret Key, z.B. während einer laufenden DFZ Session. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x5002_D | RES_0x5002_D |
| _STATUS_DFZ_GUELTIGKEIT | 0x5003 | STAT_DFZ_GUELTIGKEITSZAEHLER_WERT | Das Result enthält den Wert des DFZ Gültigkeitszählers. 0-255 | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _STEUERN_FBD_EMPFAENGER | 0x5007 | - | Der Job dient zum Steuern des FBD-Empfängers. Folgende Werte können hierbei gesetzt werden: - HF-Kanal - Datenrate - Sendeleistung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5007_D | - |
| _KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG_ZAEHLER | 0x5020 | - | Dieser Job dient zum Auslesen der Zählerwerte und Kodierparameter der dauerhaften Kurzschlussabschaltung der Treiber KL30B/KL15N und KL30B-ACSM. Die Kurzschlussabschaltung dient zum Überlastschutz des HW-Treiber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5020_D |
| _ECUMA_INTERN | 0x5101 | - | Diagnosejob Status-EcuMA-intern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5101_D |
| _ECUMA_DISABLE_WAKESRC | 0x5108 | - | Disablen von Weckquellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5108_D | - |
| _ECUMA_SLEEP_MODE_NRC | 0x5109 | STAT_SLEEP_MODE_NRC | beinhaltet den Response auf Sleep Mode | 0-n | - | high | unsigned char | TAB_SLEEP_MODE_NRC | - | - | - | - | 22 | - | - |
| HW_INFO_PROVIDER | 0x510A | STAT_HW_VERSION | Hardware Code | 0-n | - | high | unsigned int | TAB_HW_VERSION | - | - | - | - | 22 | - | - |
| _JTAGLOCK | 0x510B | - | use diagnosis job ReadJtagLockStatus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x510B_D |
| READ_PULLUP_REF_RESFUEL_TANK_0 | 0x5DBE | STAT_PULLUP_REF_RESFUEL_TANK_LEFT_WERT | represents resistance value for tank left | Ohm | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| READ_PULLUP_REF_RESFUEL_TANK_1 | 0x5DBF | STAT_PULLUP_REF_RESFUEL_TANK_RIGHT_WERT | represents resistance value for tank right | Ohm | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_STATISTIKZAEHLER_LOESCHEN | 0x6000 | - | Konfiguriert den Statistikzähler | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6000_D | - |
| _FH_FA_THERMOMONITOR_AKTIV | 0x6004 | - | Thermomonitor Fensterheber | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x6004_D | RES_0x6004_D |
| _FH_BF_THERMOMONITOR_AKTIV | 0x6005 | - | Thermomonitor Fensterheber | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x6005_D | RES_0x6005_D |
| _FH_FAH_THERMOMONITOR_AKTIV | 0x6006 | - | Thermomonitor Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6006_D | RES_0x6006_D |
| _FH_BFH_THERMOMONITOR_AKTIV | 0x6007 | - | Thermomonitor Beifahrer hinten | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x6007_D | RES_0x6007_D |
| _FH_FA_STATISTIKZAEHLER_LESEN | 0x6020 | STAT_STATISTIKZAEHLER_FH_FA_DATA | Daten Statistikzaehler Fahrerseite. STAT_FA_NACHNORMIERUNG_AUTOMATISCH_WERT; STAT_FA_NACHNORMIERUNG_MANUELL_UNBEWUSST_WERT; STAT_FA_NACHNORMIERUNG_DIAGNOSE_WERT; STAT_FA_DENORMIERUNG_MANUELL_WERT; STAT_FA_VERFAHREN_EMERGENCY_CLOSE_WERT; STAT_FA_VERFAHREN_PANIC_CLOSE_WERT; STAT_FA_REVERSIERER_NORMAL_MODUS_WERT; STAT_FA_REVERSIERER_EMERGENCY_MODUS_WERT; STAT_FA_ABBRUCH_MOTORLAUF_BK_WERT; STAT_FA_MANUAL_OPEN_DURING_LOW_SPEED_WERT; STAT_FA_MANUAL_CLOSE_DURING_LOW_SPEED_WERT; STAT_FA_AUTOMATIC_OPEN_DURING_LOW_SPEED_WERT; STAT_FA_AUTOMATIC_CLOSE_DURING_LOW_SPEED_WERT; STAT_FA_MANUAL_OPEN_DURING_HIGH_SPEED_WERT; STAT_FA_MANUAL_CLOSE_DURING_HIGH_SPEED_WERT; STAT_FA_AUTOMATIC_OPEN_DURING_HIGH_SPEED_WERT; STAT_FA_AUTOMATIC_CLOSE_DURING_HIGH_SPEED_WERT; STAT_FA_SHORT_DROP_WERT; STAT_FA_LONG_STROKE_WERT; STAT_FA_OPERATIONS_LOW_TEMP_WERT; STAT_FA_REVERSALS_LOW_TEMP_WERT; STAT_FA_SHORT_DROP_BELOW_MINUS_TEN_DEGREES_WERT; STAT_FA_SHORT_DROP_BELOW_ZERO_DEGREES_WERT; | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_BF_STATISTIKZAEHLER_LESEN | 0x6021 | STAT_STATISTIKZAEHLER_FH_BF_DATA | Daten Statistikzaehler Beifahrerseite. STAT_BF_NACHNORMIERUNG_AUTOMATISCH_WERT; STAT_BF_NACHNORMIERUNG_MANUELL_UNBEWUSST_WERT; STAT_BF_NACHNORMIERUNG_DIAGNOSE_WERT; STAT_BF_DENORMIERUNG_MANUELL_WERT; STAT_BF_VERFAHREN_EMERGENCY_CLOSE_WERT; STAT_BF_VERFAHREN_PANIC_CLOSE_WERT; STAT_BF_REVERSIERER_NORMAL_MODUS_WERT; STAT_BF_REVERSIERER_EMERGENCY_MODUS_WERT; STAT_BF_ABBRUCH_MOTORLAUF_BK_WERT; STAT_BF_MANUAL_OPEN_DURING_LOW_SPEED_WERT; STAT_BF_MANUAL_CLOSE_DURING_LOW_SPEED_WERT; STAT_BF_AUTOMATIC_OPEN_DURING_LOW_SPEED_WERT; STAT_BF_AUTOMATIC_CLOSE_DURING_LOW_SPEED_WERT; STAT_BF_MANUAL_OPEN_DURING_HIGH_SPEED_WERT; STAT_BF_MANUAL_CLOSE_DURING_HIGH_SPEED_WERT; STAT_BF_AUTOMATIC_OPEN_DURING_HIGH_SPEED_WERT; STAT_BF_AUTOMATIC_CLOSE_DURING_HIGH_SPEED_WERT; STAT_BF_SHORT_DROP_WERT; STAT_BF_LONG_STROKE_WERT; STAT_BF_OPERATIONS_LOW_TEMP_WERT; STAT_BF_REVERSALS_LOW_TEMP_WERT; STAT_BF_SHORT_DROP_BELOW_MINUS_TEN_DEGREES_WERT; STAT_BF_SHORT_DROP_BELOW_ZERO_DEGREES_WERT; | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_FAH_STATISTIKZAEHLER_LESEN | 0x6022 | STAT_STATISTIKZAEHLER_FH_FAH_DATA | Fahrerseite Hinten STAT_FAH_NACHNORMIERUNG_AUTOMATISCH_WERT STAT_FAH_NACHNORMIERUNG_MANUELL_UNBEWUSST_WERT STAT_FAH_NACHNORMIERUNG_DIAGNOSE_WERT STAT_FAH_DENORMIERUNG_MANUELL_WERT STAT_FAH_VERFAHREN_EMERGENCY_CLOSE_WERT STAT_FAH_VERFAHREN_PANIC_CLOSE_WERT STAT_FAH_REVERSIERER_NORMAL_MODUS_WERT STAT_FAH_REVERSIERER_EMERGENCY_MODUS_WERT STAT_FAH_ABBRUCH_MOTORLAUF_BK_WERT STAT_FAH_MANUAL_OPEN_DURING_LOW_SPEED_WERT STAT_FAH_MANUAL_CLOSE_DURING_LOW_SPEED_WERT STAT_FAH_AUTOMATIC_OPEN_DURING_LOW_SPEED_WERT STAT_FAH_AUTOMATIC_CLOSE_DURING_LOW_SPEED_WERT STAT_FAH_MANUAL_OPEN_DURING_HIGH_SPEED_WERT STAT_FAH_MANUAL_CLOSE_DURING_HIGH_SPEED_WERT STAT_FAH_AUTOMATIC_OPEN_DURING_HIGH_SPEED_WERT STAT_FAH_AUTOMATIC_CLOSE_DURING_HIGH_SPEED_WERT STAT_FAH_SHORT_DROP_WERT STAT_FAH_LONG_STROKE_WERT STAT_FAH_OPERATIONS_LOW_TEMP_WERT STAT_FAH_REVERSALS_LOW_TEMP_WERT STAT_FAH_SHORT_DROP_BELOW_MINUS_TEN_DEGREES_WERT STAT_FAH_SHORT_DROP_BELOW_ZERO_DEGREES_WERT STAT_FAH_RESERVE_WERT | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_BFH_STATISTIKZAEHLER_LESEN | 0x6023 | STAT_STATISTIKZAEHLER_FH_BFH_DATA | Beifahrerseite hinten STAT_BFH_NACHNORMIERUNG_AUTOMATISCH_WERT STAT_BFH_NACHNORMIERUNG_MANUELL_UNBEWUSST_WERT STAT_BFH_NACHNORMIERUNG_DIAGNOSE_WERT STAT_BFH_DENORMIERUNG_MANUELL_WERT STAT_BFH_VERFAHREN_EMERGENCY_CLOSE_WERT STAT_BFH_VERFAHREN_PANIC_CLOSE_WERT STAT_BFH_REVERSIERER_NORMAL_MODUS_WERT STAT_BFH_REVERSIERER_EMERGENCY_MODUS_WERT STAT_BFH_ABBRUCH_MOTORLAUF_BK_WERT STAT_BFH_MANUAL_OPEN_DURING_LOW_SPEED_WERT STAT_BFH_MANUAL_CLOSE_DURING_LOW_SPEED_WERT STAT_BFH_AUTOMATIC_OPEN_DURING_LOW_SPEED_WERT STAT_BFH_AUTOMATIC_CLOSE_DURING_LOW_SPEED_WERT STAT_BFH_MANUAL_OPEN_DURING_HIGH_SPEED_WERT STAT_BFH_MANUAL_CLOSE_DURING_HIGH_SPEED_WERT STAT_BFH_AUTOMATIC_OPEN_DURING_HIGH_SPEED_WERT STAT_BFH_AUTOMATIC_CLOSE_DURING_HIGH_SPEED_WERT STAT_BFH_SHORT_DROP_WERT STAT_BFH_LONG_STROKE_WERT STAT_BFH_OPERATIONS_LOW_TEMP_WERT STAT_BFH_REVERSALS_LOW_TEMP_WERT STAT_BFH_SHORT_DROP_BELOW_MINUS_TEN_DEGREES_WERT STAT_BFH_SHORT_DROP_BELOW_ZERO_DEGREES_WERT STAT_BFH_RESERVE_WERT | DATA | - | high | data[64] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FH_FREIGABE_AKTIV | 0x6030 | - | Konfiguriert den Freigabestatus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6030_D | RES_0x6030_D |
| _FH_DENORMIERUNGS_LOGGER_LOESCHEN_FRONT | 0x6038 | - | DID für die Implementierung des gleichnamigen Jobheaders für die vorderen Fenster. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6038_D | - |
| _FH_DENORMIERUNGS_LOGGER_LOESCHEN_REAR | 0x6039 | - | DID für die Implementierung des gleichnamigen Jobheaders für die hinteren Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6039_D | - |
| _FH_DENORMIERUNGS_LOGGER_LESEN_FRONT | 0x603A | - | DID für die Implementierung des gleichnamigen Jobheaders für die vorderen Fenster. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x603A_D |
| _FH_DENORMIERUNGS_LOGGER_LESEN_REAR | 0x603B | - | DID für die Implementierung des gleichnamigen Jobheaders für die hinteren Fenster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x603B_D |
| _FH_REVERSIER_LOGGER_LOESCHEN_FRONT | 0x603C | - | DID für die Implementierung des gleichnamigen Jobheaders für die vorderen Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x603C_D | - |
| _FH_REVERSIER_LOGGER_LOESCHEN_REAR | 0x603D | - | DID für die Implementierung des gleichnamigen Jobheaders für die hinteren Fenster. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x603D_D | - |
| _FH_REVERSIER_LOGGER_LESEN_FRONT | 0x603E | - | DID für die Implementierung des gleichnamigen Jobheaders für die vorderen Fenster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x603E_D |
| _FH_REVERSIER_LOGGER_LESEN_REAR | 0x603F | - | DID für die Implementierung des gleichnamigen Jobheaders für die hinteren Fenster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x603F_D |
| _FH_MOTORSTOP_LOGGER_LOESCHEN_FRONT | 0x6040 | - | DID für die Implementierung des Jobheaders für die vorderen Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6040_D | - |
| _FH_MOTORSTOP_LOGGER_LOESCHEN_REAR | 0x6041 | - | DID für die Implementierung des Jobheaders für die hinteren Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6041_D | - |
| _FH_MOTORSTOP_LOGGER_LESEN_FRONT | 0x6042 | - | DID zur Umsetzung des Jobheaders _FH_MOTORSTOP_LOGGER_LESEN für die vorderen Fenster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6042_D |
| _FH_MOTORSTOP_LOGGER_LESEN_REAR | 0x6043 | - | DID zur Umsetzung des Jobheaders _FH_MOTORSTOP_LOGGER_LESEN für die hinteren Fenster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6043_D |
| _FH_NORMIERUNG_LOESCHEN_FRONT | 0x604A | - | Denormiert die vorderen Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x604A_D | - |
| _FH_NORMIERUNG_LOESCHEN_REAR | 0x604B | - | Denormiert die hinteren Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x604B_D | - |
| _FH_KENNLINIE_LOESCHEN_FRONT | 0x604C | - | Löscht die Kennlinie der vorderen Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x604C_D | - |
| _FH_KENNLINIE_LOESCHEN_REAR | 0x604D | - | Löscht die Kennlinie der hinteren Fenster | - | - | - | - | - | - | - | - | - | 2E | ARG_0x604D_D | - |
| _STEUERN_DFZ_ALARM | 0xF002 | - | Der Job dient zum Aktivieren eines Alarmtelegramms. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | - |
| _STEUERN_DFZ_VERBINDUNGSENDE | 0xF003 | - | Der Job zum Beenden einer HDLC-Verbindung (Disconnect). Hinweis: Der FBD-Empfänger wird wieder auf niedrige Datenrate zurückgesetzt. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _ECU_HW_RESET | 0xF005 | - | STEUERN__ECU_HW_RESET | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _SENSE_LESEN | 0xF100 | - | _SENSE_LESEN | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF100_R | RES_0xF100_R |
| _LWR_STATISTIK_RESET | 0xF105 | - | Zurücksetzen im NV-RAM abgelegten Daten bezüglich LWR Statistik. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _FH_DEBUG_OUTPUT_KONF | 0xF200 | - | Steuert die Debug-Ausgabe über den CAN Bus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF200_R | RES_0xF200_R |
| _FH_VERFAHREN_ZEIT_FRONT | 0xF206 | - | Ansteuerung der vorderen Fensterheber (ELEMENT;ZEIT in 100ms- Schritten) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF206_R | RES_0xF206_R |
| _FH_VERFAHREN_ZEIT_REAR | 0xF207 | - | Ansteuerung der Fensterheber hinten (ELEMENT;ZEIT in 100ms- Schritten) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF207_R | RES_0xF207_R |
| _FH_DEBUG_OUTPUT_KONF_FRONT | 0xF208 | - | Steuert die Debug-Ausgabe der vorderen Fenster über den CAN Bus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF208_R | RES_0xF208_R |
| _FH_DEBUG_OUTPUT_KONF_REAR | 0xF209 | - | Steuert die Debug-Ausgabe der hinteren Fenster über den CAN Bus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF209_R | RES_0xF209_R |

### TAB_0X400A

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0001 |

### TAB_0X409E

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0002 |

### TAB_0XD52D

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0001 | 0x0002 |

### TAB_0XD62C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0003 | 0x0004 | 0x0005 |

### TAB_AHL_LWR_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | AHL |
| 0x01 | LWR |
| 0x02 | AHL + LWR |

### TAB_AUC_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Luftgütestufe 0 |
| 0x01 | Luftgütestufe 1 |
| 0x02 | Luftgütestufe 2 |
| 0x03 | Luftgütestufe 3 |
| 0x04 | Luftgütestufe 4 |
| 0x05 | Luftgütestufe 5 |
| 0x06 | Luftgütestufe 6 |
| 0xFF | ungültiger Wert |

### TAB_AUSGANG_LEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | AL_L |
| 0x02 | AL_R |
| 0x03 | TFL_L |
| 0x04 | TFL_R |
| 0x05 | SML_L |
| 0x06 | SML_R |
| 0x07 | FL_L |
| 0x08 | FL_R |
| 0x09 | POL_L |
| 0x0A | POL_R |
| 0x0B | NSW_L |
| 0x0C | NSW_R |
| 0x0D | FRA_V_L |
| 0x0E | FRA_V_R |
| 0x10 | FRA_Z_L |
| 0x11 | FRA_Z_R |
| 0x12 | BIX_L |
| 0x13 | BIX_R |
| 0x14 | SL_L |
| 0x15 | SL_R |
| 0x16 | SL_2_L |
| 0x17 | SL_2_R |
| 0x18 | BL_L |
| 0x19 | BL_R |
| 0x1A | BFD_L |
| 0x1B | BFD_R |
| 0x1C | NSL_L |
| 0x1D | NSL_R |
| 0x1E | RFS_L |
| 0x1F | RFS_R |
| 0x20 | FRA_H_L |
| 0x21 | FRA_H_R |
| 0x22 | KZL |
| 0x23 | BL_M |
| 0x26 | WBL_LED |
| 0x27 | LCI_0 |
| 0x28 | LCI_1 |
| 0x29 | LCI_2 |
| 0x2A | LCI_3 |
| 0x2B | LCI_4 |
| 0x2C | LCI_5 |
| 0x2D | LCI_6 |
| 0x2E | LCI_7 |
| 0x2F | LCI_8 |
| 0x30 | TMS_LEUCHTRING_L |
| 0x31 | TMS_LEUCHTRING_R |
| 0x32 | TMS_SML_L |
| 0x33 | TMS_SML_R |
| 0x34 | TMS_DESIGN_L |
| 0x35 | TMS_DESIGN_R |
| 0x40 | PDC_LED |
| 0x41 | HDC_LED |
| 0x42 | SPECIAL_FUNKTION_1_LED |
| 0xFE | ALLE |
| 0xFF | UNKNOWN |

### TAB_AUSSENSPIEGEL_ABBLENDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Abblendenfunktion |
| 0x01 | Abblendfunktion beide Außenspiegel vorhanden |
| 0x02 | Abblendfunktion nur Außenspiegel Fahrerseite  vorhanden |
| 0xFF | Wert ungültig |

### TAB_CARCODE_WISCHERMOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | F01 |
| 0x01 | F02 |
| 0x02 | F07 |
| 0x03 | F10 |
| 0x04 | F11 |
| 0x05 | F12 |
| 0x06 | F13 |
| 0x07 | RR4 |
| 0x08 | F03 |
| 0x09 | F04 |
| 0x0A | F25 |
| 0x0B | I01 LL |
| 0x0C | I01 RL |
| 0xFF | ungültig |

### TAB_CARSHARING_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CarSharing-Modus nicht gesetzt |
| 0x01 | CarSharing-Modus gesetzt |
| 0xFD | Funktionsschnittstelle ist nicht verfügbar |
| 0xFE | Funktionsfehler |
| 0xFF | Signal ungültig |

### TAB_CAS_ABSCHALTVERHINDERER_KL15

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeuggeschwindigkeit größer Stillstand |
| 1 | Getriebeposition N (Waschstrassenmodus) |
| 2 | Abblendlicht ein |
| 3 | Geschwindigkeit unplausibel (HW-Eingang und CAN-Signal liefern unplausible Geschwindigkeit) |
| 100 | Motor läuft (nur für autom. KL15-Abschaltung) |
| 101 | Fertigungsmode aktiv (nur für autom. KL15-Abschaltung) |
| 102 | Präsentationsmodus (Montagemode) aktiv (nur für autom. KL15-Abschaltung) |
| 103 | Autom. KL15-Abschaltung per Diagnose deaktiviert (nur für autom. KL15-Abschaltung) |
| 104 | Bremse betätigt (nur für autom. KL15-Abschaltung) |
| 105 | Kupplung betätigt (nur für autom. KL15-Abschaltung) |
| 106 | OBD-Kommunikation aktiv (nur für autom. KL15-Abschaltung) |
| 107 | Flashmodus (Energiesparmode) aktiv (nur für autom. KL15-Abschaltung) |
| 108 | Fremdladung Hybrid (nur für autom. KL15-Abschaltung) |
| 109 | Gurt Fahrer gesteckt (nur für autom. KL15-Abschaltung) |
| 254 | Kein Abschaltverhinderer aktiv |
| 255 | unbekannter Abschaltverhinderer |

### TAB_CAS_ABSCHALTVERHINDERER_KL30B

| WERT | TEXT |
| --- | --- |
| 0 | Motor läuft |
| 1 | Fahrzeuggeschwindigkeit größer Stillstand |
| 2 | Zündung ein - KL15 ein |
| 100 | Entertainmentfunktion (Teilnetz 0x1) |
| 101 | Remote Services (Teilnetz 0x2) |
| 102 | Restwärme (Teilnetz 0x3) |
| 103 | Standheizung /Standlüfter (Teilnetz 0x4) |
| 104 | Nachlauf RSE (Teilnetz 0x7) |
| 105 | Remote Hupen (Teilnetz 0x8) |
| 106 | Diebstahlwarnanlage DWA (Teilnetz 0x2B) |
| 107 | Rollüberwachung (Teilnetz 0x2D) |
| 108 | Kühlmitteltemperaturanfrage durch Kombi (Teilnetz 0x35) |
| 109 | Einschlafverhinderer (Teilnetz 0x101) |
| 110 | Weckerproblem (Teilnetz 0x102) |
| 111 | OBD-Diagnose (z.B. Tankleckdiagnose) (Teilnetz 0x110) |
| 112 | Batteriewächter (Teilnetz 0x119) |
| 113 | Nachlauf E-Lüfter (Teilnetz 0x113) |
| 114 | elektr. Wasserpumpe für Turbo Lagerstuhl (Teilnetz 0x114) |
| 115 | Standlüften (Teilnetz 0x116) |
| 116 | Fremdladeerkennung Hybrid (Teilnetz 0x118) |
| 117 | Außenbeleuchtung/Follow-Me-Home (ZSG intern) |
| 118 | Nachlauf der elektrische Wasserpumpe für Hybrid (Teilnetz 0x115) |
| 119 | Nachlauf der elektrische Wasserpumpe (Teilnetz 0x111) |
| 120 | Anhänger-Anschluss-Gerät AAG (Teilnetz 0x130) |
| 254 | Kein Abschaltverhinderer/Standverbraucher aktiv |
| 255 | Unbekannter Abschaltverhinderer/Standverbraucher |

### TAB_CAS_ART_ABSCHALTUNG_KL30F

| WERT | TEXT |
| --- | --- |
| 1 | KL30F Reset |
| 2 | KL30F dauerhafte Abschaltung |
| 3 | Befehl erhalten KL30F auszuschalten oder einen Reset durchzuführen, aber KL30F ist schon ausgeschaltet |
| 4 | Durchführung eines Resets oder Ausschalten ist nicht möglich ist, weil die Bedingungen nicht zutreffen |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_CAS_CA_ANTENNEN_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Fehler sind aufgetreten (einer oder mehrere) |
| 1 | Alle Antennen okay |
| 2 | CAS besitzt keine CA-Funktion |
| 255 | ungültig/unbekannt |

### TAB_CAS_CA_ANTICOLLISION

| WERT | TEXT |
| --- | --- |
| 0x00 | Key Found and Low Battery |
| 0x01 | Key Found and Battery OK |
| 0x02 | Key not Found |
| 0x03 | Signal ungültig |

### TAB_CAS_CA_KOMM_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Kommunikation nicht möglich |
| 1 | Kommunikation okay, inkl. Authentisierung |
| 2 | Antenne nicht vorhanden (Codierdaten) |
| 3 | Antenne nicht in Ordnung oder nicht gesteckt |
| 255 | ungültig/unbekannt |

### TAB_CAS_CA_SUCH_ORT

| WERT | TEXT |
| --- | --- |
| 0 | unbekannter Suchort/Empfangsort |
| 3 | Aussen Fahrertür |
| 4 | Aussen Beifahrertür |
| 5 | Aussen Kofferraum |
| 6 | Innenraum Kofferraum |
| 7 | Innernraum Vorne |
| 8 | Innenraum Hinten |
| 255 | ungültig bzw. es hat keine Erregung über LF stattgefunden |

### TAB_CAS_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv / nicht betätigt |
| 1 | aktiv / betätigt |
| 2 | nicht verbaut / Status nicht verfügbar |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_DIGITAL_EINGANG_PEGEL

| WERT | TEXT |
| --- | --- |
| 0 | Low-Pegel |
| 1 | High-Pegel |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_ELV_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | Entriegeln |
| 1 | Verriegeln |
| 2 | Nur für Entwicklungszwecke: Full-Cycle (Kompletter Zyklus Verriegeln + Entriegeln) |
| 4 | Herstellerdaten-Update |
| 5 | Fehlerzähler löschen |
| 6 | FullCycle-Merker löschen |
| 7 | Vorbereitung Fehlerzähler (Escape-Counter) löschen - ELV-Master + ELV-SG |
| 8 | Verbauerkennung ELV durchführen(OpenLoad-Leitungsdiagnose) |

### TAB_CAS_ELV_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler aufgetreten |
| 1 | Keine ELV vorhanden |
| 2 | Kein gültiges Geschwindigkeitssignal |
| 3 | Fahrt erkannt |
| 4 | Motorsignal ungültig |
| 5 | Motorlauf (auch MSA-Betrieb) |
| 6 | KL15 aktiv |
| 7 | Kein gültiger Schlüssel |
| 8 | Keine Kommunikation mit ELV-SG, evtl. ELV-SG nicht angesteckt  |
| 9 | ELV Spielschutz aktiv |
| 10 | Unterspannung KL30L |
| 11 | Escape-Fehlerzähler Maxwert erreicht (CAS oder ELV) |
| 12 | Kurzschluss oder Leitungsunterbrechung ELV Spannungsversorgung (KL30_ELV / KL31_ELV_VR) |
| 13 | Treiberfehler (Permanenten Aktivierung oder Ausfall der Ansteuerung von KL30_ELV / KL31_ELV_VR oder HW-Logikfehler) |
| 14 | Fehlerhafter ELV-Status |
| 15 | Fehlerhafter ELV-Roll-Counter |
| 16 | Interner HW-Fehler CAS (RAM/ROM/CPU usw.) erkannt |
| 17 | Ansteuerung ELV aktuell aktiv |
| 18 | Löschen der Escape-Fehlerzähler aufgrund Timeout abgebrochen |
| 19 | ELV-Montagemodus aktiv   |
| 20 | Falsche CRC der ELV-Statusnachricht |
| 100 | ELV-SG - Schwerer HW-Fehler in Mikrocontroller |
| 101 | ELV-SG - Kurzschluss KL31_ELV_VR gegen Masse |
| 102 | ELV-SG - Sensorstatus nicht vertrauenswürdig |
| 103 | ELV-SG: Fehler H-Brücke |
| 104 | ELV-SG: Überlast Motorbrücke |
| 105 | ELV-SG: HW-Fehler Sensor |
| 106 | ELV-SG: Spannungversorgung |
| 107 | ELV-SG: Fehler EEPROM |
| 108 | ELV-SG: Authentisierungsfehler |
| 109 | ELV-SG: Keine Motoraktivierung |
| 110 | ELV-SG: Timeout bei Warten auf einen Request vom ELV-Master |
| 111 | ELV-SG: Timeout bei Motorentriegelung (Verspannte Lenksäule) |
| 112 | ELV-SG: Timeout bei Motorverriegelung |
| 113 | ELV-SG: Fehlerhafte Requestbotschaft vom ELV-Master |
| 255 | Unbekannter Fehler |

### TAB_CAS_ELV_INTERNE_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | CPU defekt |
| 1 | RAM defekt |
| 2 | ROM defekt |
| 3 | Lock Ground defekt |
| 4 | Motor Brücken Fehler |
| 7 | Unbeabsichtigtes Verriegeln |
| 8 | Unbeabsichtigtes Entriegeln |
| 10 | Sensor mismatch |
| 12 | Sensor defekt |
| 18 | Motorbrücke überlastet |
| 19 | Überspannung ECU Versorgung |
| 20 | Unterspannung ECU Versorgung |
| 21 | EEPROM Fehler |
| 22 | Ungültiges Kommando |
| 23 | Authentisierungsfehler |
| 24 | Keine Motoransteuerung |
| 25 | Kommando Timeout |
| 26 | Verriegeln unzulässig |
| 27 | Timeout bei Entriegelung (Verspannte Lenkung) |
| 28 | Timeout bei Verriegelung |
| 29 | Empfangsfehler |
| 30 | Sendefehler |
| 255 | Unbekannter Fehler |

### TAB_CAS_ELV_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0 | ELV-SG gesteckt |
| 1 | ELV-SG nicht gesteckt |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_ELV_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelt |
| 2 | Unbekannter ELV-Zustand (nach Wakeup FEM oder Fehler liegt vor) |
| 16 | Entriegelt, nicht initialisiert |
| 17 | Verriegelt, nicht initialisiert |
| 32 | Entriegelt, falsche Initialisierung |
| 33 | Verriegelt, falsche Initialisierung |
| 255 | Unbekannter ELV-Zustand (nach Reset FEM oder Reset FullCycle-Merker) |

### TAB_CAS_FBD_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | keine Taste gedrückt |
| 1 | Entriegeln |
| 2 | Verriegeln |
| 3 | Kofferraum |
| 4 | Panik |
| 5 | Entriegeln Langdruck |
| 6 | Verriegeln Langdruck |
| 7 | Kofferraum Langdruck |
| 8 | Panik Langdruck |
| 20 | CA-Entriegeln |
| 21 | CA-Verriegeln |
| 22 | CA-Kofferraum |
| 23 | CG-Authentisierung |
| 100 | THS-Init |
| 101 | Standheizung An |
| 102 | Standheizung Aus |
| 103 | Fernstart An |
| 104 | Fernstart Aus |
| 200 | FFB-Init |
| 203 | FFB Links Taste Lautstärke Runterregeln |
| 204 | FFB Links Taste Lautstärke Hochregeln |
| 205 | FFB Links Taste Suchlauf abwärts |
| 206 | FFB Links Taste Suchlauf aufwärts |
| 207 | FFB Links Taste Option |
| 208 | FFB Links Taste Zurück |
| 209 | FFB Links Taste Menü |
| 210 | FFB Links Taste Bordmonitor System Pfeil oben |
| 211 | FFB Links Taste Bordmonitor System Pfeil rechts |
| 212 | FFB Links Taste Bordmonitor System Pfeil unten |
| 213 | FFB Links Taste Bordmonitor System Pfeil links |
| 214 | FFB Links Taste Drehrad nach oben (in Gegenuhrzeigerrichtung) |
| 215 | FFB Links Taste Drehrad nach unten (in Uhrzeigerrichtung) |
| 216 | FFB Links Taste Drucktaste in Drehrad |
| 223 | FFB Rechts Taste Lautstärke Runterregeln |
| 224 | FFB Rechts Taste Lautstärke Hochregeln |
| 225 | FFB Rechts Taste Suchlauf abwärts |
| 226 | FFB Rechts Taste Suchlauf aufwärts |
| 227 | FFB Rechts Taste Option |
| 228 | FFB Rechts Taste Zurück |
| 229 | FFB Rechts Taste Menü |
| 230 | FFB Rechts Taste Bordmonitor System Pfeil oben |
| 231 | FFB Rechts Taste Bordmonitor System Pfeil rechts |
| 232 | FFB Rechts Taste Bordmonitor System Pfeil unten |
| 233 | FFB Rechts Taste Bordmonitor System Pfeil links |
| 234 | FFB Rechts Taste Drehrad nach oben (in Gegenuhrzeigerrichtung) |
| 235 | FFB Rechts Taste Drehrad nach unten (in Uhrzeigerrichtung) |
| 236 | FFB Rechts Taste Drucktaste in Drehrad |
| 255 | ungültig/unbekannt |

### TAB_CAS_FBD_DATENRATE

| WERT | TEXT |
| --- | --- |
| 0 | Niedrige Datenrate: 5 kBit/s |
| 1 | Hohe Datenrate: 19.2 kBit/s |

### TAB_CAS_FBD_EMPFAENGER_EMPFANGSMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Alle Telegramme durchlassen |
| 1 | Nur bekannte Telegramme durchlassen |
| 2 | Nur bekannte und Init-Telegramme THS/FFB durchlassen |
| 255 | ungültig/unbekannt |

### TAB_CAS_FBD_EMPFAENGER_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung erfolgreich |
| 1 | LIN-Nachrichtenkatalog oder SW-Version falsch |
| 3 | WUP Aktualisierung im FBD-Empfänger fehlgeschlagen |
| 4 | WUP Aktualisierung der Fond-Fernbedienung fehlgeschlagen |
| 5 | WUP Aktualisierung im FBD-Empfänger und der Fond-Fernbedienung fehlgeschlagen |
| 255 | unbekannter Status |

### TAB_CAS_FBD_EMPFAENGER_TYP

| WERT | TEXT |
| --- | --- |
| 1 | Diversity |
| 2 | Stand Alone Empfänger |
| 3 | Zweiter Stand Alone Empfänger |
| 255 | unbekannt / nicht ermittelbar |

### TAB_CAS_FBD_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 16 | SIEMENS |
| 32 | HUF |
| 255 | unbekannter Zulieferer |

### TAB_CAS_FH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Zwischenstellung |
| 2 | Offen |
| 255 | ungültig/unbekannt |

### TAB_CAS_FREQ

| WERT | TEXT |
| --- | --- |
| 0 | Keine Frequenz |
| 1 | Reserviert |
| 2 | Reserviert |
| 3 | 315 MHz LowPower |
| 4 | 315 MHz |
| 5 | 433 MHz |
| 6 | 868 MHz |
| 7 | 433 MHz (KOREA) |
| 8 | Reserviert (GHZ) |
| 15 | Ungültige Frequenz |
| 255 | Ungültige Frequenz / Kein zweiter Empfänger |

### TAB_CAS_GANG

| WERT | TEXT |
| --- | --- |
| 1 | N - Kein Kraftschluss |
| 2 | R - Rückwärtsgang |
| 3 | P - Parkposition |
| 5 | 1. Gang |
| 6 | 2. Gang |
| 7 | 3. Gang |
| 8 | 4. Gang |
| 9 | 5. Gang |
| 10 | 6. Gang |
| 11 | 7. Gang |
| 12 | 8. Gang |
| 13 | 9. Gang |
| 15 | ungültig |
| 255 | ungültig |

### TAB_CAS_GESCHW_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt |
| 4 | Fahrzeug steht, Hinterachse auf Rollenprüfstand erkannt |
| 7 | Signal ungültig |

### TAB_CAS_HALL_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor nicht verbaut/ nicht vorhanden (Open Load) |
| 2 | Sensor nicht aktiv |
| 4 | Sensor aktiv |
| 6 | Kurzschluss |
| 255 | ungültig / unplausibel / unbekannt |

### TAB_CAS_HECKKLAPPENSENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Geöffnet |
| 2 | Fehler |
| 255 | Ungültig |

### TAB_CAS_HISTORIENSPEICHER_SPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Historienspeicher freigegeben |
| 1 | Historienspeicher  sperren |
| 2 | Löschen/Neu initialisieren |
| 255 | ungültig/unbekannt |

### TAB_CAS_HW_KONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Leitungsbruch / Kurzschluss nach Batteriespannung |
| 0x02 | Tür geschlossen |
| 0x04 | Tür offen |
| 0x06 | Kurzschluss nach Masse |
| 0x08 | Kontakt nicht verbaut |
| 0xFF | ungültig / unplausibel / unbekannt |

### TAB_CAS_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | Ja |
| 1 | Nein |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_CAS_KEYTYPE

| WERT | TEXT |
| --- | --- |
| 0 | Umlaufschlüssel |
| 1 | Virtueller Schlüssel |
| 2 | Geldbörsen-Schlüssel |
| 3 | Drivers-Key |
| 4 | Funk-Schlüssel |
| 5 | ID-Geber |
| 15 | Zukünftiger Ersatz-Schlüssel / Position nicht belegt / THS / FFB |

### TAB_CAS_KEYVARIANT

| WERT | TEXT |
| --- | --- |
| 1 | F01,F02,F03,F04,F06,F12,F13 (Nicht US) |
| 2 | F01,F02,F03,F04,F06,F12,F13 (Nicht US) |
| 3 | F07,F10,F11,F18,F25 (Nicht US) |
| 4 | F07,F10,F11,F18,F25,F30HY (Nicht US) |
| 5 | RR04 |
| 6 | RR04 |
| 7 | RR04 Zweitschlüssel |
| 8 | RR04 Zweitschlüssel mit Anpassung CRC |
| 9 | F07,F10,F11,F18,F25  (US) |
| 10 | F01,F02,F03,F04,F06,F12,F13 (US) |
| 11 | F07,F10,F11,F18,F22,F23,F25,F30,F31,F32,F33 (US) |
| 12 | F01,F02,F03,F04,F06,F12,F13,F30,F31,F32,F33 (US + SA 7S2) |
| 15 | Ungültig/Unbekannt |
| 33 | F20,F21,F22,F23,F25 (ab 03-12),F30,F31,F32,F33 (Nicht US) |
| 34 | F20,F21,F22,F23,F30,F31,F32,F33 (Nicht US + SA 7AC) |
| 35 | F22,F23,F30,F31,F32,F33 (Nicht US + SA 7S1) |
| 36 | F30,F31,F32,F33 (Nicht US + SA 7S2) |
| 37 | F20,F21 (Nicht US + SA 7AD) |
| 38 | F20,F21,F22,F23,F30,F31,F32,F33,F80,F82,F83 (Nicht US + PA 337) |
| 39 | F22,F23,F30,F31,F32,F33 (US + SA 7AC) |
| 40 | F22,F23,F30,F31,F32,F33 (US + SA 7S1) |
| 41 | F22,F23,F30,F31,F32,F33,F80,F82,F83 (US + PA 337) |
| 42 | F22,F23 (US + SA 7AD) |
| 255 | Ungültig/Unbekannt |

### TAB_CAS_KEY_POSITION_FOUND

| WERT | TEXT |
| --- | --- |
| 0x00 | CA KEYPOS UNDEF |
| 0x01 | CA KEYPOS NOT FOUND |
| 0x02 | CA KEYPOS NOT CHECKED |
| 0x03 | CA KEYPOS EXTERIOR DRIVER |
| 0x04 | CA KEYPOS EXTERIOR PASSANGER |
| 0x05 | CA KEYPOS EXTERIOR TRUNK |
| 0x06 | CA KEYPOS INTERIOR TRUNK |
| 0x07 | CA KEYPOS INTERIOR FRONT |
| 0x08 | CA KEYPOS INTERIOR REAR |
| 0xFF | CA UNDEF |

### TAB_CAS_KLEMMENSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | INIT |
| 1 | Reserve |
| 2 | KL30 alle Klemmen aus |
| 3 | KL30F-Änderung |
| 4 | KL30F |
| 5 | KL30B-Änderung |
| 6 | KL30B |
| 7 | KLR-Änderung |
| 8 | KLR |
| 9 | KL15-Änderung |
| 10 | KL15 |
| 11 | KL50-Verzögerung |
| 12 | KL50-Änderung |
| 13 | KL50 |
| 14 | Fehler |
| 15 | Ungültig |

### TAB_CAS_KLEMMENSTATUS_ARG

| WERT | TEXT |
| --- | --- |
| 4 | KL30F_EIN |
| 6 | KL30B_EIN |
| 8 | KLR_EIN |
| 10 | KL15_EIN |
| 16 | KL30B_EIN_VERK |
| 255 | Ungültig |

### TAB_CAS_KLEMMENSTEUERUNG_KURZSCHLUSSABSCHALTUNG_KOMPONENTE

| WERT | TEXT |
| --- | --- |
| 0 | Treiber KL15N1 |
| 1 | Treiber KL15N2 |
| 2 | Treiber KL30B-ACSM |
| 3 | Treiber KL30N1 |
| 4 | Treiber KL30N2 |

### TAB_CAS_KLEMMEN_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0 | Start-Stop-Taster (SST) |
| 1 | Telestart-Handsender (THS) |
| 2 | Motor-Start-Automatik (MSA) |
| 3 | Obere Startfähigkeitsgrenze (OSFG) erreicht |
| 4 | ZV sichern |
| 5 | Fahrertür auf/zu (KL15-Abschaltung) |
| 6 | Timeout |
| 7 | Diagnoseanforderung |
| 8 | Relais-Kleber KL50 |
| 9 | Waschstrassen-Modus Timeout 30min/15min |
| 10 | KL15-Abschaltung über 10-min-Timeout auch bei Fahrlicht ein |
| 11 | Komfortausstieg (KLR-Abschaltung) |
| 255 | ungültig/unbekannt |

### TAB_CAS_KLEMMEN_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Hinderungsgrund vorhanden |
| 1 | Aktuell kein gültiger Schlüssel erkannt |
| 2 | Kurzschluss HW-Ausgänge erkannt |
| 3 | Geschwindigkeit Fahren erkannt |
| 4 | Geschwindigkeit unplausibel erkannt: HW <-> CAN |
| 5 | Bremse nicht gedrückt |
| 6 | Bremssignal unplausibel: Low-Schaltend <-> High-Schaltend |
| 7 | Kupplung nicht gedrückt |
| 8 | Kupplungssignal unplausibel: HW <-> CAN |
| 9 | Einschaltverhinderung durch Motorsteuerung: Motorlauf erkannt/Kein Motorstart erlaubt über CAN |
| 10 | Kraftschluss erkannt (P oder N nicht eingelegt) |
| 13 | Montagemodus KL50 ist aktiv: Anlasseransteuerung deaktiviert |
| 14 | Keine ELV-Freigabe vorhanden |
| 15 | Keine Startfreigabe durch Klimasteuergerät: Motorfernstart nicht möglich |
| 255 | Unbekannt/Ungültig |

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

### TAB_CAS_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb - Alle Montagemodi deaktiviert |
| 1 | KL50-Montagemodus - Anlassersperre aktiv |
| 2 | ELV_KL50-Montagemodus - Anlassersperre und keine Ansteuerung ELV |
| 3 | Präsentations-Modus |
| 255 | unbekannter Zustand |

### TAB_CAS_MOTORSTART_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Motorstart |
| 1 | Motorstart/-stop verzögert |
| 2 | Motorstart zulassen |
| 3 | ungültig |
| 255 | ungültig/unbekannt |

### TAB_CAS_MOTOR_ANLASSERSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Motorstart, Pos. D/R |
| 1 | Motorstart zulassen - Getriebe in N |
| 2 | Motorstart zulassen, Motorstop zulassen - Getriebe in P |
| 3 | ungültig |
| 255 | ungültig/unbekannt |

### TAB_CAS_MOTOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Motor aus |
| 1 | Motor startet |
| 2 | Motor läuft |
| 255 | ungültig/unbekannt |

### TAB_CAS_PIA_NUMMER

| WERT | TEXT |
| --- | --- |
| 0 | Personalisierungskonfiguration 0 |
| 1 | Personalisierungskonfiguration 1 |
| 2 | Personalisierungskonfiguration 2 |
| 10 | Gast |
| 15 | Keine Personalisierung zugewiesen - unpersonalisiertes Profil |
| 255 | ungültig |

### TAB_CAS_RDU_RDL_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | RDU: Erfolgreich durchgeführt |
| 1 | RDU: Ungültige Anforderung über CAN |
| 2 | RDU:  Abbruch, da Fahrzeug fährt |
| 3 | RDU: Abbbruch aufgrund Motorstart oder Wiederholsperre |
| 4 | RDU: Abbruch aufgrund von Kodieroption die RDU/RDL verhindert |
| 100 | RDL: Erfolgreich durchgeführt |
| 101 | RDL: Ungültige Anforderung über CAN |
| 102 | RDL:  Abbruch, da Fahrzeug fährt |
| 103 | RDL: Abbbruch aufgrund Motorstart oder Wiederholsperre oder FT offen |
| 104 | RDL: Abbruch aufgrund von Kodieroption die RDU/RDL verhindert |
| 255 | unbekannt/ungültig |

### TAB_CAS_SCHLUESSELSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Schlüssel nicht gesperrt oder unbekannt |
| 1 | Schlüssel gesperrt |
| 2 | Schlüssel temporär gesperrt wegen CA-Funktion |
| 255 | ungültig |

### TAB_CAS_SCHLUESSEL_POSITION

| WERT | TEXT |
| --- | --- |
| 0 | Schlüssel 0 |
| 1 | Schlüssel 1 |
| 2 | Schlüssel 2 |
| 3 | Schlüssel 3 |
| 4 | Schlüssel 4 |
| 5 | Schlüssel 5 |
| 6 | Schlüssel 6 |
| 7 | Schlüssel 7 |
| 8 | Schlüssel 8 |
| 9 | Schlüssel 9 |
| 10 | Schlüssel 10 |
| 11 | Schlüssel 11 |
| 12 | Schlüssel 12 |
| 13 | Schlüssel 13 |
| 14 | Schlüssel 14 |
| 15 | Schlüssel 15 |
| 16 | Schlüssel 16 |
| 17 | Schlüssel 17 |
| 18 | Schlüssel 18 |
| 19 | Schlüssel 19 |
| 100 | Telestart-Handsender der THS 1 |
| 101 | Telestart-Handsender der THS 2 |
| 200 | Fond-Fernbedienung |
| 252 | EMV-Testmodus - Verhindert die Schlüsselsuche und schaltet das LF-Feld ein |
| 253 | EMV-Testmodus - Verhindert die Schlüsselsuche und schaltet das LF-Feld aus |
| 254 | Sonderfunktion SG wach halten |
| 255 | unbekannt/ungültig |

### TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR

| WERT | TEXT |
| --- | --- |
| 0 | Datenblock 0 |
| 1 | Datenblock 1 |
| 2 | Datenblock 2 |
| 3 | Datenblock 3 |
| 4 | Datenblock 4 |
| 5 | Datenblock 5 |
| 6 | Datenblock 6 |
| 7 | Datenblock 7 |
| 8 | Datenblock 8 |
| 9 | Datenblock 9 |
| 10 | Datenblock 10 |
| 11 | Datenblock 11 |
| 12 | Datenblock 12 |
| 13 | Datenblock 13 |
| 14 | Datenblock 14 |
| 15 | Datenblock 15 |
| 16 | Datenblock 16 |
| 255 | unbekannt |

### TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Vollständiges Update im CAS-Speicher / Vollständige Übertragung in Schlüssel |
| 1 | Vollständiges Update im CAS-Speicher / Inkrementelle Übertragung in Schlüssel |
| 2 | Kein Update im CAS-Speicher / Vollständige Übertragung in Schlüssel |
| 3 | Kein Update im CAS-Speicher / Inkrementelle Übertragung in Schlüssel |
| 14 | Update nur der CBS/CC-Umfänge im CAS/FEM-Speicher/Keine Übertragung in Schlüssel |
| 15 | Vollständiges Update im CAS-Speicher / Keine Übertragung in Schlüssel |

### TAB_CAS_STANDVERBRAUCHER

| WERT | TEXT |
| --- | --- |
| 0 | Keine Anforderung zur Nachlaufzeitverlängerung erfolgt |
| 1 | Anforderung zur Nachlaufzeitverlängerung ist erfolgt |
| 255 | ungültig/unbekannt |

### TAB_CAS_STATUS_ENERGIE_POWERMANAGEMENT

| WERT | TEXT |
| --- | --- |
| 1 | Abschalten der  Kl 30F |
| 2 | Keine Standverbraucher zulässig |
| 4 | Bordnetzzustand gut |
| 8 | Batterieladezustand 100 % |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_CAS_STATUS_KL30F

| WERT | TEXT |
| --- | --- |
| 0 | KL30F vorne aus |
| 1 | KL30F vorne ein |
| 255 | Status ungültig/unbekannt |

### TAB_CAS_STATUS_KL30F_HINTEN

| WERT | TEXT |
| --- | --- |
| 0 | KL30F hinten aus |
| 1 | KL30F hinten ein |
| 255 | Status ungültig/unbekannt |

### TAB_CAS_TAGE_SPERRSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Gesperrt |
| 0x01 | Freigegeben |
| 0xFF | Ungültig/Unbekannt |

### TAB_CAS_TRSP_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | IERR_OK - Kein Fehler |
| 1 | IERR_NO_TRSP - Kein Transponder erkannt |
| 2 | IERR_TRSP_COM - Fehler Trsp-Kommunikation |
| 3 | IERR_POS_USED - Initialisierung: Trsp-Position ist bereits benutzt |
| 4 | IERR_DEFAULT_AUTH - Authentisierung mit Default-Daten fehlerhaft: nur HT2 |
| 5 | IERR_ID_INVALID - Initialisierung: Schluessel-ID falsch: Unterschiedlich zum Job-Parameter |
| 6 | IERR_ID_BUSY - ID ist bereits im CAS auf einer anderen Position abgespeichert |
| 7 | IERR_TRSP_CFG - Trsp-Konfiguration ist gesperrt |
| 8 | IERR_KEY_TYP - Initialisierung: Schluessel-Typ falsch |
| 9 | IERR_KEY_FREQ - Initialisierung: Schluessel-Frequenz falsch |
| 10 | IERR_CALC_ISK - fehlerhafte Berechnung des Transponder - Secret Keys |
| 11 | IERR_RAMUPDATE_CMD - Fehler beim RAM_UPDATE-Kommando am Ende der HtPro-Initsequenz |
| 12 | IERR_ISTATE_UNEXP - unerwarteter Zustand der Initialisierungssequenz |
| 13 | IERR_BS_ANT - Defekte Basestationantenne: Ringspule |
| 14 | IERR_REPAIR - Teilinitialisierter Schl. konnte nicht zurueckgesetzt werden |
| 15 | IERR_CFG_MODE - fehlerhafte Konfiguration im CFG-Mode |
| 16 | IERR_WR_SEG5_0 - Schreibfehler Seg. 5, Block 0: BMW EOL Daten 0 |
| 17 | IERR_WR_SEG5_1 - Schreibfehler Seg. 5, Block 1:  BMW EOL Daten 1 |
| 18 | IERR_WR_SEG6_0 - Schreibfehler Seg. 6, Block 0: dynamische Daten |
| 19 | IERR_WR_SEG6_1 - Schreibfehler Seg. 6, Block 1 |
| 20 | IERR_WR_WUP - Schreibfehler Wakeup-Pattern |
| 21 | IERR_WR_FBD_CA - Schreibfehler FBD- oder CA-Daten: Segment 4 |
| 22 | IERR_CALC_TSI - Initialisierung des Transponder Sequence Increment TSI fehlerhaft |
| 23 | IERR_WR_TSI - Schreibfehler TSI |
| 24 | IERR_WR_ISK - Schreibfehler ISK |
| 25 | IERR_CHECK_CFG - fehlerhafte Validierung der Transponderkonfiguration - CM |
| 26 | IERR_LOCK_CFG - fehlerhaftes Sperren der Trsp-Daten |
| 27 | IERR_AUTH_INIT - fehlerhafte erste Authentisierung nach der Initialisierung |
| 28 | IERR_KEY_VALID - ein gültiger Schlüssel steckt, Initialisierung nicht möglich |
| 29 | IERR_JOB_PARAM - ungueltiger Parameter des Jobs STEUERN_SCHLUESSEL_INIT |
| 30 | IERR_WR_CHIPCD - Schreibfehler Chipcarddaten |
| 31 | IERR_AUTH_RAND - fehlerhafte Authent. denn der Zufallswert x_ews4  ist noch nicht generiert |
| 32 | IERR_TRSP_TYP - Initialisierung: Trsp-Typ falsch, HtPro/Ht2 entspricht nicht CAS-EEPROM |
| 33 | Ersatzschlüssel: fehlerhafte Schlüsseldaten - Config, Seg.5, Page 00 |
| 34 | Ersatzschlüssel: CAS Schlüsselposition wird bereits benutzt |
| 35 | Ersatzschlüssel: Schlüssel ist nicht authentisierbar |
| 36 | Fehlerhaftes Update von Sequence Counter |
| 37 | Fehlerhaftes Update des Wertes Ersatz_Init |
| 38 | IERR_READ_BATT_VOLT - fehlerhaftes Lesen der Batteriespannung |
| 255 | Unbekannter Fehlerstatus |

### TAB_CAS_TRSP_INITSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | IS_INVALID: Ungültiger Wert |
| 1 | IS_CPLT: Schlüssel komplett angelernt |
| 20 | IS_INITST_VERIFY: Seg. 5, Block 0, Page 0 verifizieren |
| 24 | IS_INITST_WR: nur HitagPro; Schreiben CAS-Init = 1 ind den Schlüssel (Seg. 5, Block 0, Page 0) |
| 28 | IS_KEYAUTH: Schlüsselauthentisierung mit den neuen Kryptodaten |
| 44 | IS_KEYCFG_VERIFY: Schlüsselkonfiguration verifizieren |
| 48 | IS_KEYCFG_RD: Schlüsselkonfiguration aus Trsp lesen |
| 52 | IS_KEYCFG_VALID: Prüfen der Schlüsselkonfiguration (ob gesperrt und richtig konfiguriert) |
| 56 | IS_KEYCFG_LOCK: Schreiben und Sperren der neuen Konfiguration |
| 60 | IS_KEYCFG_CHECK: Prüfen der Schlüsselkonfiguration |
| 64 | IS_KEYCFG_RESTART:Restart bei einem Abbruch des CFG- Schreibens |
| 84 | IS_ISK_VERIFY: Secret Key und Sequence increment im Schlüssel verifizieren (nur HitagPro) |
| 88 | IS_ISK: Generierung und Schreiben  Secret Key und Sequence increment in den Schlüssel (nur HitagPro) |
| 92 | IS_ISK_SS: nur HitagPro; Select Segment 0 |
| 112 | IS_PW_WR: nur Hitag2; Generierung und Schreiben Passwort  - Page 3 -  in den Schlüssel |
| 116 | IS_SKH_WR: nur Hitag2; Generierung und Schreiben SercetKey high in den Schlüssel |
| 120 | IS_SKL_WR: nur Hitag2; Generierung und Schreiben SercetKey low in den Schlüssel |
| 124 | IS_SK_AUTH: nur Hitag2; Authentisierung mit default SecretKeys |
| 136 | IS_FCNT: Initialisierung Fahrzykluszähler |
| 140 | IS_FC_SCNT: Initialisierung  FBD- und CA- Sequence counter |
| 156 | IS_FBD_DATA: Initialisierung von FBD- Daten im Schlüssel: bei Hitag 2: FBD-SecretKeys, WUP-Nummer; bei HitagPro: WUP-Nummer |
| 216 | IS_BMWEOL_1: Schreiben von BMW-EOL-Daten, Block 1 in den Schlüssel |
| 220 | IS_BMWEOL_0: Schreiben von BMW-EOL-Daten, Block 0 in den Schlüssel |
| 240 | IS_KEYCFG_PREP: Schlüsseldaten sind vorbereitet, Transponder Reset |
| 244 | IS_CLEAR_KEYPOS: Vorbereitung der initialisierten Position im CAS: Löschen CAM-Nr, PIA-Nr, BLOCKED |
| 248 | IS_CHECK_KEYDATA: Prüfen der Schlüsseldaten: Frequenz, Typ |
| 252 | IS_CHECK_KEYCFG: Prüfen der Schlüsselkonfiguration |
| 255 | IS_CHECK_JOBPAR: Default Wert, Reserviert für Ersatzschlüssel. |

### TAB_CAS_TRSP_KEY_AUTH_DEFAULT

| WERT | TEXT |
| --- | --- |
| 0 | mit default-Daten ist fehlgeschlagen, Schlüssel ist nicht anlernbar |
| 1 | Autentisierung mit default-Daten war erfolgreich, Schlüssel ist anlernbar |
| 2 | Kein Hitag2-Schlüssel |
| 255 | unbekannt/ungültig |

### TAB_CAS_TRSP_KEY_CONFIG_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 0 | Schlüsselkonfiguration ist nicht ok, Schlüssel ist nicht anlernbar |
| 1 | Schlüsselkonfiguration ist ok, Schlüssel ist anlernbar |
| 2 | kein HitagPro-Schlüssel |
| 255 | unbekannt/ungültig |

### TAB_CAS_TRSP_TYPE

| WERT | TEXT |
| --- | --- |
| 1 | HT2 |
| 2 | HTPro |
| 255 | unbekannt |

### TAB_CAS_TRSP_VERRIEGELUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Anlieferzustand |
| 1 | Verriegelt |
| 2 | Teilweise Verriegelt - Zwischenzustand |
| 3 | Fehlerhafte Konfiguration- Initialisierung nicht möglich |
| 4 | Kein normaler Anlieferzustand - Komplett unverriegelt |
| 255 | unbekannter Transpondertyp |

### TAB_CAS_TUERKONTAKT

| WERT | TEXT |
| --- | --- |
| 0 | Leitungsbruch/Kurzschluss Batteriespannung |
| 2 | Tür geschlossen |
| 4 | Tür offen |
| 6 | Kurzschluss Masse |
| 255 | Ungültig / Unplausibel |

### TAB_CAS_ZSG_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 1 | Entriegelt |
| 2 | Verriegelt |
| 3 | Gesichert |
| 128 | Klappe / Scheibe geschlossen |
| 129 | Klappe / Scheibe geöffnet |
| 200 | Klappe in Vorraststellung |
| 201 | Klappe nicht in Vorraststellung |
| 254 | Nicht verbaut |
| 255 | Ungültig |

### TAB_CAS_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelt |
| 2 | Gesichert |
| 128 | Klappe / Scheibe geschlossen |
| 129 | Klappe / Scheibe geöffnet |
| 255 | Ungültig/Unplausibel/Nicht verbaut |

### TAB_CA_ANTENNEN

| WERT | TEXT |
| --- | --- |
| 1 | IRV (Innenraum vorn) |
| 2 | IRH (Innenraum hinten) |
| 3 | FT (Fahrertür/-seite) |
| 4 | BFT (Beifahrertür/-seite) |
| 5 | FK (Frontklappe) |
| 6 | KRLI (Kofferraum links) |
| 7 | KRRE (Kofferraum rechts) |
| 8 | SFH (Stoßfänger hinten) |
| 9 | IR (Innenraum IRV+IRH) |

### TAB_CA_ANTENNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 1 | Antenne in Ordnung |
| 2 | Kurzschluss Masse |
| 3 | Kurzschluss Batteriespannung |
| 4 | Leitungsunterbrechung |
| 5 | Interner Antennendefekt |
| 6 | Antenne nicht verbaut (Codierung) |

### TAB_CA_SCHLUESSEL_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Schlüssel 0 |
| 0x01 | Schlüssel 1 |
| 0x02 | Schlüssel 2 |
| 0x03 | Schlüssel 3 |
| 0x04 | Schlüssel 4 |
| 0x05 | Schlüssel 5 |
| 0x06 | Schlüssel 6 |
| 0x07 | Schlüssel 7 |
| 0x08 | Schlüssel 8 |
| 0x09 | Schlüssel 9 |
| 0x0A | Schlüssel 10 |
| 0x0B | Schlüssel 11 |
| 0x0C | Schlüssel 12 |
| 0x0D | Schlüssel 13 |
| 0x0E | Schlüssel 14 |
| 0x0F | Schlüssel 15 |
| 0x10 | Schlüssel 16 |
| 0x11 | Schlüssel 17 |
| 0x12 | Schlüssel 18 |
| 0x13 | Schlüssel 19 |
| 0xFF | keine Kommunikation möglich oder kein weiterer Schlüssel |

### TAB_CA_TAGE_ER_LEITUNG

| WERT | TEXT |
| --- | --- |
| 0 | CA-Taster und TAGE nicht verbaut  |
| 1 | CA-Taster oder TAGE betätigt  |
| 2 | CA-Taster oder TAGE nicht betätigt |
| 3 | CA-Taster oder TAGE Kurzschluss |
| 255 | CA-Taster oder TAGE ausserhalb Wertebereich |

### TAB_CA_TAGE_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Kein Status (keine Betätigung) |
| 1 | CA-Taster oder TAGE-Zugsensor (Hall) betätigt |
| 2 | TAGE-Sichern Sensor betätigt (VR-Kap-Sensor) |
| 3 | TAGE-Entriegeln Sensor betätigt (ER-Kap-Sensor) |
| 4 | CA-Taster oder TAGE nicht verbaut |

### TAB_DEV_AUSGANG_LEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | AL_L |
| 0x02 | AL_R |
| 0x03 | TFL_L |
| 0x04 | TFL_R |
| 0x05 | SML_L |
| 0x06 | SML_R |
| 0x07 | FL_L |
| 0x08 | FL_R |
| 0x09 | POL_L |
| 0x0A | POL_R |
| 0x0B | NSW_L |
| 0x0C | NSW_R |
| 0x0D | FRA_V_L |
| 0x0E | FRA_V_R |
| 0x10 | FRA_Z_L |
| 0x11 | FRA_Z_R |
| 0x12 | BIX_L |
| 0x13 | BIX_R |
| 0x14 | SL_L |
| 0x15 | SL_R |
| 0x16 | SL_2_L |
| 0x17 | SL_2_R |
| 0x18 | BL_L |
| 0x19 | BL_R |
| 0x1A | BFD_L |
| 0x1B | BFD_R |
| 0x1C | NSL_L |
| 0x1D | NSL_R |
| 0x1E | RFS_L |
| 0x1F | RFS_R |
| 0x20 | FRA_H_L |
| 0x21 | FRA_H_R |
| 0x22 | KZL |
| 0x23 | BL_M |
| 0x26 | WBL_LED |
| 0x27 | LCI_0 |
| 0x28 | LCI_1 |
| 0x29 | LCI_2 |
| 0x2A | LCI_3 |
| 0x2B | LCI_4 |
| 0x2C | LCI_5 |
| 0x2D | LCI_6 |
| 0x2E | LCI_7 |
| 0x2F | LCI_8 |
| 0x30 | TMS_LEUCHTRING_L |
| 0x31 | TMS_LEUCHTRING_R |
| 0x32 | TMS_SML_L |
| 0x33 | TMS_SML_R |
| 0x34 | TMS_DESIGN_L |
| 0x35 | TMS_DESIGN_R |
| 0x40 | PDC_LED |
| 0x41 | HDC_LED |
| 0x42 | SPECIAL_FUNCTION_1_LED |
| 0xFE | ALLE |
| 0xFF | UNKNOWN |

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

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN FEHLEREINTRAG / NORMIERT |
| 0x01 | EEPROMFEHLER BEIM STARTUP |
| 0x02 | INTERFACE WURDE BEIM STARTUP NICHT BEDIENT |
| 0x03 | ÜBERFAHREN DES OBEREN BLOCKS |
| 0x04 | ÜBERFAHREN DES UNTEREN BLOCKS |
| 0x05 | NICHT PLAUSIBLER ZUSTAND |
| 0x06 | FALSCHE POSITION ERKANNT |
| 0x07 | RELAISKLEBER_1 |
| 0x08 | RELAISKLEBER_2 |
| 0x09 | HALLFEHLER |
| 0x0A | EXPLIZITES DENORMIEREN (ASCET) |
| 0x0B | TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN |
| 0x0C | HALLUNTERABTASTUNG |
| 0x0D | START INITIALISIERUNGSLAUF |
| 0x0E | INITIALSIERUNGSLAUF ABGEBROCHEN |
| 0x0F | KEINE POSITION NACH RESET |
| 0x20 | SIF_ERROR (Conti) |
| 0x21 | SIGNATURE_ERROR (Conti) |
| 0x22 | HALL_SWITCHED_OFF (Conti) |
| 0x23 | HALL_QUEUE_ERROR (Conti) |
| 0x24 | NEW_SW_CODING_APPLIED (Conti) |
| 0x25 | DENORM_RTE_LOST_DATA (Conti) |
| 0x40 | No init data after reset (Magna) |
| 0x41 | Voltage on motor and relays not active, closing (Magna) |
| 0x42 | Voltage on motor and relays not active, opening (Magna) |
| 0x43 | no pulses from Hall A but pulses from Hall element B (Magna) |
| 0x44 | no pulses from Hall B but pulses from Hall element A (Magna) |
| 0x45 | Motor actuated; no pulses from Hall elements A+B (Magna) |
| 0x46 | Hall pulses not plausible (Magna) |
| 0x47 | Wrong motor direction (Magna) |
| 0x48 | Wrong motor unit (Magna) |
| 0x49 | Timeout Motor actuat (Magna) |
| 0x4A | Invalid MRC Logical failure: the MRC is invalid (Magna) |
| 0x4B | CPU Overload (Magna) |
| 0x4C | start of manual init (Magna) |
| 0x4D | Halls Not Ready Voltage Shut Down (Magna) |
| 0x4E | Halls Not Ready Open Load (Magna) |
| 0x4F | Halls Not Ready Short to ground (Magna) |
| 0x50 | Halls Not Ready Short to ubatt (Magna) |
| 0x51 | different Software version stored in NvRam (Magna) |
| 0x52 | different vendor code stored in NvRam (Magna) |
| 0x53 | signature Interference Occurred (Magna) |
| 0x54 | No valid position CRC after reset (Magna) |
| 0x55 | Hall counters A and B value different (Magna) |
| 0x56 | Hall pulses and no motor actuation (Magna) |
| 0x57 | FUSI SIF state error (Magna) |
| 0x58 | Profile and norming erased by RTERunnable_SwcPwDriverMagna01_diag_diagJobWriteFhKennlinieLoeschen (Magna) |
| 0x59 | error saving NVRam after motor stop (Magna) |
| 0x5A | coding changed (Magna) |
| 0x5B | error in NvRam Block A (Magna) |
| 0x5C | error Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) |
| 0x60 | SIF_ERROR (Brose) |
| 0x61 | SIGNATURE_ERROR (Brose) |
| 0x62 | HALL_SWITCHED_OFF (Brose) |
| 0x63 | DENORM_QUEUE_OVERFLOW (Brose) |
| 0x64 | DENORM_SIF_PFM_NOK (Brose) |
| 0x65 | DENORM_SIF_TM_NOK (Brose) |
| 0x66 | DENORM_SIF_CRM_NOK (Brose) |
| 0x67 | DENORM_SIF_VMM_NOK (Brose) |
| 0x68 | DENORM_SIF_NVMM_NOK (Brose) |
| 0x69 | DENORM_RTE_LOST_DATA (Brose) |
| 0xFF | Ungültiger Wert |

### TAB_DEV_FH_REVERSIER_URSACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN FEHLEREINTRAG |
| 0x01 | REVERS_ISR |
| 0x02 | REVERS_BLOCK |
| 0x03 | REVERS_ISRDIAG |
| 0x04 | REVERS_AT |
| 0x05 | REVERS_AT_DIAG |
| 0x20 | REVERS_AT_TIMEOUT (Conti) |
| 0x21 | REVERS_ATDIAGTIMEOUT (Conti) |
| 0x40 | Reversal in Emergency Mode (Magna) |
| 0x41 | Reversed in Timeout (Magna) |
| 0x60 | REVERS_AT_TIMEOUT (Brose) |
| 0x61 | REVERS_ATDIAGTIMEOUT (Brose) |
| 0xFF | Ungültiger Wert |

### TAB_DEV_FH_SHD_ESH_EINLERNEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Einlernen ohne Kraftbegrenzung |
| 0x02 | Einlernen mit Kraftbegrenzung |
| 0x03 | Einlernen mit Kraftbegrenzung und Not-Stopp |
| 0x04 | Reserviert für Manuelles Einlernen |
| 0x05 | Normieren |

### TAB_DEV_FH_SHD_ESH_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung erfolgreich abgeschlossen |
| 0x03 | Abbruch durch Benutzer, Notstop |
| 0x04 | Abbruch durch Benutzer, Diagnose |
| 0x05 | Abbruch durch Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0x07 | Fehler: keine FH Freigabe |
| 0x08 | Fehler: Vorgang kann nicht gestartet werden,weil Tür offen |
| 0x09 | Fehler: Vorgang kann nicht gestartet werden, weil Verdeck/VHT offen |
| 0x0A | Fehler: Vorgang kann nicht gestartet werden, weil SG nicht codiert |
| 0xF0 | Fehler: allgemeiner Fehler |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT |
| --- | --- |
| 0x00 | NOT_STOPPED |
| 0x01 | POSITION_REACHED |
| 0x02 | STOP_MOVE |
| 0x03 | NORM |
| 0x04 | RENORM |
| 0x05 | PINCHING |
| 0x06 | REV_POS_REACHED |
| 0x07 | BLOCKED |
| 0x08 | NOT_MOVED |
| 0x09 | SAFETY_TIMER |
| 0x0A | OPPOSITE_DIRECTION |
| 0x0B | INVALID_TARGET_POS_LOW |
| 0x0C | INVALID_TARGET_POS_HIGH |
| 0x0D | STOP_MOVE_HIGH_TEMP |
| 0x0E | DRIVER_ERROR |
| 0x0F | MOTOR_SHORT |
| 0x10 | RESET |
| 0x11 | PULSE_LOST |
| 0x12 | MOTOR_VOLTAGE_RANGE |
| 0x13 | HALL_ERROR |
| 0x14 | ERR_MOTOR_OFF_CPU_OVERLOAD |
| 0x20 | AUTO_COND_LOST (Conti) |
| 0x21 | CODING_FAIL (Conti) |
| 0x22 | WAITING_FOR_EE (Conti) |
| 0x23 | EE_TIMEOUT (Conti) |
| 0x24 | NOT_POSSIBLE_TO_WRITE_EE (Conti) |
| 0x25 | HALL_DISABLED (Conti) |
| 0x26 | CODING_SESSION (Conti) |
| 0x27 | PANIC_NOT_VALID (Conti) |
| 0x28 | DIAGNOSTIC_SESSION_ACTIVE (Conti) |
| 0x29 | SYSTEM_SIF_ERROR (Conti) |
| 0x2A | SYSTEM_SHUTDOWN (Conti) |
| 0x2B | HALL_QUEUE_ERROR (Conti) |
| 0x40 | soft stop on bottom (Magna) |
| 0x41 | soft stop on top (Magna) |
| 0x42 | short drop position (Magna) |
| 0x43 | Hall Sensor Period FUSI Error (Magna) |
| 0x44 | Relay state FUSI Error (Magna) |
| 0x45 | SIF STATE FUSI Error (Magna) |
| 0x46 | Vehicle Speed FUSI Error (Magna) |
| 0x47 | Vehicle Speed Timeout (Magna) |
| 0x48 | stopped for safety in fully closed state (Magna) |
| 0x49 | stopped for safety in fully open state (Magna) |
| 0x4A | stopped for safety in short drop pos state (Magna) |
| 0x4B | stopped in window failure state (Magna) |
| 0x4C | stopped before sleep (Magna) |
| 0x4D | stopped while opening found not in opening (Magna) |
| 0x4E | Motor unit (Magna) |
| 0x4F | signature Interference Occurred (Magna) |
| 0x50 | position out of validity tolerances (Magna) |
| 0x51 | Motor voltage FuSi error (Magna) |
| 0x52 | stopped for safety in mid open state (Magna) |
| 0x53 | stopped in closing state because moving direction down (Magna) |
| 0x54 | stopped for stall up while closing (Magna) |
| 0x55 | stopped for stall down while opening (Magna) |
| 0x56 | stopped for diagnostic denorm (Magna) |
| 0x57 | stopped for hall puls counters different (Magna) |
| 0x58 | Stopped for hall A timeout (Magna) |
| 0x59 | Stopped for hall B timeout (Magna) |
| 0x5A | Stopped for hall A & B timeout (Magna) |
| 0x5B | Redundant Stop for Error in writingNvRam at end of movement (Magna) |
| 0x5C | Redundant motor stop for NvRam Block A Error (Magna) |
| 0x5D | Redundant stop for coding changed (Magna) |
| 0x5E | coding stated (Magna) |
| 0x5F | Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) |
| 0x60 | AUTO_COND_LOST (Brose) |
| 0x61 | CODING_FAIL (Brose) |
| 0x62 | WAITING_FOR_EE (Brose) |
| 0x63 | EE_TIMEOUT (Brose) |
| 0x64 | NOT_POSSIBLE_TO_WRITE_EE (Brose) |
| 0x65 | HALL_DISABLED (Brose) |
| 0x66 | CODING_SESSION (Brose) |
| 0x67 | PANIC_NOT_VALID (Brose) |
| 0x68 | DIAGNOSTIC_SESSION_ACTIVE (Brose) |
| 0xFF | Ungültiger Wert |

### TAB_DEV_FH_SHD_ESH_SERVICEPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Montageposition |
| 0x01 | Demontageposition |
| 0x02 | Serviceposition A |
| 0x03 | Serviceposition B |

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

### TAB_ELSV_ACHSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ansteuerung (Stopp) |
| 0x01 | Länge |
| 0x02 | Höhe |

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

### TAB_ELSV_NORMIERUNG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initalisierung |
| 0x01 | ELSV normiert |
| 0x02 | ELSV teilnormiert Länge |
| 0x03 | ELSV teilnormiert Neigung |
| 0x04 | ELSV denormiert |
| 0x0F | Signal ungültig |

### TAB_ELSV_NORMIERVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Normierung nicht aktiv |
| 0x01 | Normierung aktiv |
| 0x02 | Normierung abgebrochen durch Befehl  manuelles Verfahren der Lenksäule  |
| 0x03 | Normierung abgebrochen durch  STEUERN_ELSV_NORMIERUNG - Stopp  |
| 0x04 | Normierung konnte nicht gestartet werden |
| 0x05 | Normierung erfolgreich beendet |
| 0x06 | Normierung unplausibel |
| 0xFF | Signal ungültig |

### TAB_ELSV_RESET_ZAEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | axial eingefahren |
| 0x01 | axial ausgefahren |
| 0x02 | vertikal oben |
| 0x03 | vertikal unten |
| 0x04 | axial beide |
| 0x05 | vertikal beide |
| 0x06 | alle Blöcke |
| 0x07 | alle Statisikzähler |
| 0x08 | Blöcke und Statistik |

### TAB_ELSV_STATEMACHINE

| WERT | TEXT |
| --- | --- |
| 0 | DRIVING_POSITION |
| 1 | START_ENTRY_DRIVE |
| 2 | ENTRY_POSITION |
| 3 | START_RETURN_DRIVE |
| 4 | MANUAL_ADJ_DRIVE |
| 5 | POWER_ON |
| 6 | KL50_STATE |
| 7 | START_MEMORY_DRIVE |
| 8 | STORE_MEM_POSITION |
| 9 | HAND_SHAKE |
| 10 | STORE_CUR_POS |
| 11 | STOP_ADJUSTMENT |
| 12 | SAVE_CURRENT_POSITION |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_ELSV_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster nach hinten |
| 0x02 | Taster nach oben |
| 0x03 | Taster nach vorne |
| 0x04 | Taster nach unten |
| 0xFF | ungültiger Wert |

### TAB_ELV_ANGESTECKT

| WERT | TEXT |
| --- | --- |
| 0 | ELV-SG ist angesteckt |
| 1 | ELV-SG ist nicht angesteckt |
| 255 | ungültig |

### TAB_ELV_ANLIEFERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Rücksetzen der ELV in Anlieferzustand erfolgreich |
| 0x01 | Rücksetzen der ELV in Anlieferzustand fehlgeschlagen |
| 0xFF | Ungültig / Unbekannt |

### TAB_ELV_ART_AKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Entriegeln |
| 1 | Verriegeln |
| 2 | Full-Cycle |
| 3 | Identdaten-Anfrage |
| 4 | ELV Fehlerspeicherabfrage |

### TAB_ELV_CODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | ELV ist aktiv codiert |
| 0x01 | ELV ist nicht aktiv codiert |
| 0xFF | Ungültiger Codierwert |

### TAB_ELV_FULL_CYCLE_MERKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Full-Cycle-Merker gesetzt |
| 0x01 | Full-Cycle-Merker gesetzt |
| 0xFF | Ungültig/Unbekannt |

### TAB_ELV_HW_CODIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | ELV ist aktiv codiert |
| 1 | ELV ist nicht aktiv codiert |
| 255 | ungültig |

### TAB_ELV_SPIELSCHUTZ

| WERT | TEXT |
| --- | --- |
| 0 | Kein Spielschutz aktiv |
| 1 | Spielschutz aktiv |

### TAB_ELV_TESTPUNKTE

| WERT | TEXT |
| --- | --- |
| 0 | REQ_HW_DIAG |
| 1 | REQ_KL30_ELV_ON |
| 2 | REQ_STATUS_1_STARTED |
| 3 | REQ_STATUS_1_FINISHED |
| 4 | REQ_STATUS_1_TIMEOUT |
| 5 | REQ_NO_COMMAND_NEEDED |
| 6 | REQ_LOCK_COMMAND |
| 7 | REQ_KL31_ELV_VR_ON |
| 8 | REQ_KL31_ELV_VR_OFF |
| 9 | REQ_LIN_AUTHEN |
| 10 | REQ_LIN_AUTHEN_REPEATED |
| 11 | REQ_LIN_UNLOCK_COMMAND |
| 12 | REQ_LIN_KEY_RELEASE |
| 13 | REQ_LIN_HERSTELLERDATEN |
| 14 | REQ_LIN_DTC_READING |
| 15 | REQ_STATUS_2_STARTED |
| 16 | REQ_STATUS_2_FINISHED |
| 17 | REQ_STATUS_2_TIMEOUT_MESSAGE |
| 18 | REQ_STATUS_2_TIMEOUT_READY_TO_SLEEP |
| 19 | ST_LIN_KILOMETERS |
| 20 | SHUTDOWN_WITH_READY_TO_SLEEP |
| 21 | SHUTDOWN_WITHOUT_READY_TO_SLEEP |
| 22 | SHUTDOWN_TIMEOUT_MESSAGE |
| 23 | REQ_KL30_ELV_OFF |
| 255 | ungültig / unbekannt |

### TAB_ELV_URSACHE_AKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Gültiger Schlüssel im Innenraum |
| 1 | Klappenwechsel Fahrertüre |
| 2 | ZV Sichern |
| 3 | Diagnose |
| 4 | Wiederholstrategie aufgrund vorherigem Fehler in der Aktiverung |
| 5 | Wakeup oder Reset |
| 6 | Lenkwinkeländerung |
| 7 | Start-Stopp-Taster |
| 255 | ungültig |

### TAB_ELV_WIEDERHOLSTRATEGIE

| WERT | TEXT |
| --- | --- |
| 0 | Keine Wiederholungsstrategie (Kein Fehler bei der Ansteuerung aufgetreten) |
| 1 | ESCAPE-Wiederholstrategie |
| 2 | FullCycle-Wiederholstrategie |
| 3 | Sequenz-Wiederholstrategie |
| 255 | ungültig |

### TAB_ENERGIE_BETEILIGTE_BEL

| WERT | TEXT |
| --- | --- |
| 0x01 | Standlicht |
| 0x02 | Parklicht |
| 0x03 | Parklicht und Standlicht |
| 0x04 | Warnblinken |
| 0x05 | Warnblinken und Standlicht |
| 0x06 | Warnblinken und Parklicht |
| 0x07 | Warnblinken, Standlicht und Parklicht |
| 0x0FF | Ungültig |

### TAB_EWS5_STATE

| WERT | TEXT |
| --- | --- |
| 0 | EWS5 steht nicht zur Verfügung |
| 1 | EWS5 aktiv,Normalbetrieb |
| 2 | EWS5 aktiv, E5_KEY ist in EEPROM abgelegt |
| 255 | EWS5 nicht aktiv |

### TAB_FAHRLICHTSITUATION_2

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Vorgabe |
| 0x01 | Führungslicht 1 |
| 0x02 | Führungslicht 2 |
| 0x03 | Stadtlicht |
| 0x04 | SAE |
| 0x05 | Landstraßenlicht |
| 0x06 | Autobahnlicht E3 |
| 0x07 | Autobahnlicht E2 |
| 0x08 | Autobahnlicht E1 |
| 0x09 | Autobahnlicht E |
| 0x0A | Lichtverteilung H-2 |
| 0x0B | Lichtverteilung H-0 |
| 0x0C | Lichtverteilung H+2 |
| 0x0D | Lichtverteilung H+4 |
| 0x0E | Blendfreies Fernlicht |
| 0x0F | Volles Fernlicht |
| 0xFF | ungültiger Wert |

### TAB_FBD_BATTERIEZUSTAND_TRSP

| WERT | TEXT |
| --- | --- |
| 0 | Batteriespannung sehr niedrig |
| 1 | Batteriespannung sehr niedrig |
| 2 | Batteriespannung sehr niedrig |
| 3 | Batteriespannung sehr niedrig |
| 4 | Batteriespannung sehr niedrig |
| 5 | Batteriespannung niedrig |
| 6 | Batteriespannung niedrig/mittel |
| 7 | Batteriespannung mittel |
| 8 | Batteriespannung mittel - gut |
| 9 | Batteriespannung gut |
| 10 | Batteriespannung sehr gut |
| 11 | Batteriespannung sehr gut |
| 12 | Batteriespannung sehr gut |
| 13 | Batteriespannung sehr gut |
| 14 | Batteriespannung sehr gut |
| 15 | Batteriespannung sehr gut |
| 255 | Ungültig/Unbekannt |

### TAB_FBD_EMPFAENGER_KANAL

| WERT | TEXT |
| --- | --- |
| 0 | Keine Änderung der Kanaleinstellung |
| 1 | Kanal 1 aktiv |
| 2 | Kanal 2 aktiv |
| 3 | Kanal 1 und 2 aktiv |
| 4 | Kanal 3 aktiv |
| 5 | Kanal 1 und 3 aktiv |
| 6 | Kanal 2 und 3 aktiv |
| 7 | Kanal 1,2 und 3 aktiv |
| 255 | Ungültig |

### TAB_FEHLERART_HOD_SENSOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | EEPROM Fehler |
| 0x02 | ROM Fehler |
| 0x03 | Watchdog Fehler |
| 0x04 | CPU Fehler |
| 0x05 | Lenkrad, Unterbrechung Schirm |
| 0x06 | Lenkrad, Unterbrechung Messleitung |
| 0x07 | CPU Defekt oder Sensor Kurzschluss |
| 0x08 | Unterspannung |
| 0x09 | Überspannung |
| 0x0A | Kodierfehler |
| 0x0B | Allgemeiner Systemfehler 2 |
| 0x0F | Signal ungültig |

### TAB_FEHLERART_ILE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Interner Fehler |
| 0x02 | Leselicht links Leuchtmittel defekt |
| 0x03 | Leselicht rechts Leuchtmittel defekt |
| 0x04 | Innenlicht Leuchtmittel defekt |
| 0x05 | WelcomeLight Leuchtmittel defekt |
| 0x06 | Ambientes Licht Leuchtmittel defekt |
| 0xFF | Ungültig |

### TAB_FETRAFLA_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | EM_DEFAULT |
| 0x01 | EM_CCM_0x0430_ACT |
| 0x02 | EM_ECUMA_REDUCED_FCT_ACT |
| 0x10 | EM_TC_FLLUPTSHORT_R_ACT |
| 0x11 | EM_TC_FLLUPTSHORT_30B_ACT |
| 0x12 | EM_TC_FLLUPTSHORT_30F_ACT |
| 0x13 | EM_TC_LOGIC_15OFF_INH |
| 0x14 | EM_TC_LOGIC_ENGINESTOP30B_ACT |
| 0x15 | EM_TC_LOCIC_15ON_NOKEY_ACT |
| 0x16 | EM_TC_LOGIC_15OFF_DIAG_ACT |
| 0x20 | EM_CA_DOORHANDLE_INH |
| 0x30 | EM_CL_OPERATION_INH |
| 0x31 | EM_CL_OPEN_LID_IDG_INH |
| 0x40 | EM_RC_RECEIVER_INH |
| 0x51 | EM_LCE_DAYRUNLIGHT_60KM_INH |
| 0x54 | EM_LCE_POSITIONLIGHT_SWA2_INH |
| 0x55 | EM_LCE_PARKINGLIGHT_INH |
| 0x56 | EM_LCE_FOGLIGHT_INH |
| 0x57 | EM_LCE_FOLLOWMEHOME_INH |
| 0x58 | EM_LCE_WELLCOME_INH |
| 0x59 | EM_LCE_HIGHBEAMASSIST_INH |
| 0x60 | EM_LCI_ALLOUTPUTS_INH |
| 0x70 | EM_LA_LIGHTASSIST_INH |
| 0x71 | EM_LA_ADAPTIVEHEADLIGHT_ACT |
| 0x80 | EM_PW_REAR_INH |
| 0x81 | EM_PW_SHORTDROP_INH |
| 0x90 | EM_WW_WIPERFRONT_20KMH_INH |
| 0x91 | EM_WW_ASSEMBLYPOSITION_ACT |
| 0x92 | EM_WW_EMERGENCY_INH |
| 0x93 | EM_WW_WIPERREAR_INH |
| 0x94 | EM_WW_PUMPFRONT_INH |
| 0x95 | EM_WW_PUMPREAR_INH |
| 0x96 | EM_WW_PUMPHEADLIGHT_INH |
| 0xA0 | EM_AC_PUMPVALVESCLUTCH_INH |
| 0xB0 | EM_EXMI_MIRRORJET_INH |
| 0xB1 | EM_HC_DEFROSTER_INH |
| 0xB2 | EM_HC_SEATSTEERING_INH |
| 0xC0 | EM_PF_SUNBLIND_INH |

### TAB_FE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | FE_MODE_INACTIVE |
| 0x01 | FE_MODE_ACTIVE |

### TAB_FH_ANZAHL_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Fensterheber vorhanden/kodiert |
| 0x01 | Fensterheber für FA und BF vorhanden/kodiert |
| 0x02 | Fensterheber für FA, BF und FAH, BFH vorhanden/kodiert |
| 0x03 | Fensterheber für FAH und BFH vorhanden/kodiert |

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

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN FEHLEREINTRAG |
| 0x01 | REVERS_ISR |
| 0x02 | REVERS_BLOCK |
| 0x03 | REVERS_ISRDIAG |
| 0x04 | REVERS_AT |
| 0x05 | REVERS_AT_DIAG |
| 0x20 | REVERS_AT_TIMEOUT (Conti) |
| 0x21 | REVERS_ATDIAGTIMEOUT (Conti) |
| 0x40 | Reversal in Emergency Mode (Magna) |
| 0x41 | Reversed in Timeout (Magna) |
| 0x60 | REVERS_AT_TIMEOUT (Brose) |
| 0x61 | REVERS_ATDIAGTIMEOUT (Brose) |
| 0xFF | Ungültiger Wert |

### TAB_FH_SHD_ESH_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Element steht |
| 0x01 | Element fährt auf |
| 0x02 | Reversieren Mautlauf |
| 0x03 | Reversieren Emergency-Mode |
| 0x04 | Element fährt zu |
| 0x05 | Element fährt zu Emergency-Mode |
| 0x06 | Element fährt zu Panic-Mode |
| 0x07 | Einlernvorgang aktiv |
| 0x08 | stellt aus |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_EINLERNEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Einlernen ohne Kraftbegrenzung |
| 0x02 | Einlernen mit Kraftbegrenzung |
| 0x03 | Einlernen mit Kraftbegrenzung und Not Stop |
| 0x04 | Reserviert für Manuelles Einlernen |
| 0x05 | Normieren (nur für FH) |

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

### TAB_FH_SHD_ESH_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Freigabe |
| 0x01 | Freigabe vorhanden |
| 0x03 | Freigabe ungültig |
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

### TAB_FH_SHD_ESH_INIT

| WERT | TEXT |
| --- | --- |
| 0x01 | Element normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x02 | Element denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x03 | Element normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x04 | Element denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x05 | Element normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x06 | Element denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x07 | Element normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0x08 | Element denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT |
| --- | --- |
| 0x00 | NOT_STOPPED |
| 0x01 | POSITION_REACHED |
| 0x02 | STOP_MOVE |
| 0x03 | NORM |
| 0x04 | RENORM |
| 0x05 | PINCHING |
| 0x06 | REV_POS_REACHED |
| 0x07 | BLOCKED |
| 0x08 | NOT_MOVED |
| 0x09 | SAFETY_TIMER |
| 0x0A | OPPOSITE_DIRECTION |
| 0x0B | INVALID_TARGET_POS_LOW |
| 0x0C | INVALID_TARGET_POS_HIGH |
| 0x0D | STOP_MOVE_HIGH_TEMP |
| 0x0E | DRIVER_ERROR |
| 0x0F | MOTOR_SHORT |
| 0x10 | RESET |
| 0x11 | PULSE_LOST |
| 0x12 | MOTOR_VOLTAGE_RANGE |
| 0x13 | HALL_ERROR |
| 0x14 | ERR_MOTOR_OFF_CPU_OVERLOAD |
| 0x20 | AUTO_COND_LOST (Conti) |
| 0x21 | CODING_FAIL (Conti) |
| 0x22 | WAITING_FOR_EE (Conti) |
| 0x23 | EE_TIMEOUT (Conti) |
| 0x24 | NOT_POSSIBLE_TO_WRITE_EE (Conti) |
| 0x25 | HALL_DISABLED (Conti) |
| 0x26 | CODING_SESSION (Conti) |
| 0x27 | PANIC_NOT_VALID (Conti) |
| 0x28 | DIAGNOSTIC_SESSION_ACTIVE (Conti) |
| 0x29 | SYSTEM_SIF_ERROR (Conti) |
| 0x2A | SYSTEM_SHUTDOWN (Conti) |
| 0x2B | HALL_QUEUE_ERROR (Conti) |
| 0x40 | soft stop on bottom (Magna) |
| 0x41 | soft stop on top (Magna) |
| 0x42 | short drop position (Magna) |
| 0x43 | Hall Sensor Period FUSI Error (Magna) |
| 0x44 | Relay state FUSI Error (Magna) |
| 0x45 | SIF STATE FUSI Error (Magna) |
| 0x46 | Vehicle Speed FUSI Error (Magna) |
| 0x47 | Vehicle Speed Timeout (Magna) |
| 0x48 | stopped for safety in fully closed state (Magna) |
| 0x49 | stopped for safety in fully open state (Magna) |
| 0x4A | stopped for safety in short drop pos state (Magna) |
| 0x4B | stopped in window failure state (Magna) |
| 0x4C | stopped before sleep (Magna) |
| 0x4D | stopped while opening found not in opening (Magna) |
| 0x4E | Motor unit (Magna) |
| 0x4F | signature Interference Occurred (Magna) |
| 0x50 | position out of validity tolerances (Magna) |
| 0x51 | Motor voltage FuSi error (Magna) |
| 0x52 | stopped for safety in mid open state (Magna) |
| 0x53 | stopped in closing state because moving direction down (Magna) |
| 0x54 | stopped for stall up while closing (Magna) |
| 0x55 | stopped for stall down while opening (Magna) |
| 0x56 | stopped for diagnostic denorm (Magna) |
| 0x57 | stopped for hall puls counters different (Magna) |
| 0x58 | Stopped for hall A timeout (Magna) |
| 0x59 | Stopped for hall B timeout (Magna) |
| 0x5A | Stopped for hall A & B timeout (Magna) |
| 0x5B | Redundant Stop for Error in writingNvRam at end of movement (Magna) |
| 0x5C | Redundant motor Stop for NVRAM block A error (Magna) |
| 0x5D | Redundant Stop for coding changed (Magna) |
| 0x5E | coding stated (Magna) |
| 0x5F | Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) |
| 0x60 | AUTO_COND_LOST (Brose) |
| 0x61 | CODING_FAIL (Brose) |
| 0x62 | WAITING_FOR_EE (Brose) |
| 0x63 | EE_TIMEOUT (Brose) |
| 0x64 | NOT_POSSIBLE_TO_WRITE_EE (Brose) |
| 0x65 | HALL_DISABLED (Brose) |
| 0x66 | CODING_SESSION (Brose) |
| 0x67 | PANIC_NOT_VALID (Brose) |
| 0x68 | DIAGNOSTIC_SESSION_ACTIVE (Brose) |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_MOTORTEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x01 | Motortemperatur OK |
| 0x02 | Motortemperatur 90% des maximal zulässigen Wertes erreicht |
| 0x03 | Motortemperatur 100% des maximal zulässigen Wertes erreicht |
| 0xFF | Motortemperatur ungültig |

### TAB_FH_SHD_ESH_MT_LIEFERANT

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

### TAB_FH_SHD_ESH_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Element in Bewegung |
| 0x01 | Element komplett geschlossen |
| 0x02 | Element komplett offen |
| 0x03 | Element steht in Zwischenpositon |
| 0x04 | Element steht auf Position Kurzhub  nur FH |
| 0x05 | Element steht auf Position Langhub  nur FH |
| 0x06 | Element steht auf Position Cabrio nur FH |
| 0x07 | Element steht in Ausstellage nur SHD/PDK |
| 0x08 | Element steht in Komfortposition nur PDK |
| 0x09 | Element steht in Anti-Wummer Position nur SHD |
| 0x0A | Element steht in Crash-Position |
| 0x0B | Position_nr_relative_movement_to_short_drop |
| 0x0C | Position_nr_intermediate_position_above_short_drop  |
| 0xA0 | Element steht in Demontageposition |
| 0xA1 | Element steht in Serviceposition A |
| 0xA2 | Element steht in Serviceposition B |
| 0xFF | ungültiger Wert |

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

### TAB_FH_SHD_ESH_STAT_EEPROM

| WERT | TEXT |
| --- | --- |
| 0x01 | Checksumme IO |
| 0x02 | Checksumme NIO |
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

### TAB_FH_SHD_ESH_VERFAHREN

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

### TAB_FH_SHD_ESH_WACHHALTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0xFF | ungültig |

### TAB_FH_SHD_ESH_ZUSTAND_TUER

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Tür in Vorraste |
| 0x03 | Türstatus ungültig |
| 0xFF | Signal ungültig |

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

### TAB_HECKKLAPPENSENSOR_DEFEKT

| WERT | TEXT |
| --- | --- |
| 1 | Leitungsunterbrechung |
| 2 | Kurzschluss nach Masse |

### TAB_HK_WIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taster gedrückt |
| 0x02 | Taster gezogen |
| 0x03 | Signal ungültig |

### TAB_HOEHENSTAND_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierung Offset nicht erfolgreich |
| 1 | Kalibrierung Offset erfolgreich |
| 2 | Sensor ausstattungsbedingt (Codierung) nicht verbaut |
| 255 | unbekannter Zustand |

### TAB_HOHENSTAND_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor in Ordnung |
| 1 | Sensor fehlerhaft |
| 255 | Sensor fehlerhaft |

### TAB_HW_VERSION

| WERT | TEXT |
| --- | --- |
| 0 | B1.X (HWEL 1.1.1 to 1.4.1) |
| 1 | C1.X (HWEL 1.5.1 to 1.5.3) |
| 2 | C2.0 (HWEL 1.6.1) |
| 3 | C2.1, C2.2 and C2.1 FastPrototype (HWEL 1.6.2 to 1.6.4) |
| 4 | D1.X, D1 (HWEL 1.7.1 to 1.7.3) |
| 5 | D2, D3 (HWEL 1.7.3 to 1.7.6) |
| 6 | D3.X (HWEL 1.7.7 to 1.7.10) |
| 7 | D4 (HWEL 1.8.0) |
| 8 | D4.1 (HWEL 1.8.0) |
| 9 | D4.3 (HWEL 1.8.1) |
| 10 | D4.4 (HWEL 1.8.2) |

### TAB_IBS_WAKEUP_GRUND

| WERT | TEXT |
| --- | --- |
| 1 | Erreichen der Startfähigkeitsgrenze 1 |
| 2 | Erreichen der Startfähigkeitsgrenze 2 |
| 3 | Ruhestromverletzung |
| 4 | Nachladefunktion |
| 5 | Reserviert für zukünftige Werte |
| 255 | Ungültig/Unbekannt |

### TAB_INNENLICHT

| WERT | TEXT |
| --- | --- |
| 38 | INNENLICHT_WBL_LED |
| 39 | INNENLICHT_LCI_0 |
| 40 | INNENLICHT_LCI_1 |
| 41 | INNENLICHT_LCI_2 |
| 42 | INNENLICHT_LCI_3 |
| 43 | INNENLICHT_LCI_4 |
| 44 | INNENLICHT_LCI_5 |
| 45 | INNENLICHT_LCI_6 |
| 46 | INNENLICHT_LCI_7 |
| 47 | INNENLICHT_LCI_8 |

### TAB_INNENLICHT_MAPPING

| WERT | TEXT |
| --- | --- |
| 0x15 | Suchbeleuchtung |
| 0x16 | Innenbeleuchtung Front |
| 0x17 | Innenbeleuchtung Fond |
| 0x18 | Optische Vorfeld Beleuchtung (OVT) |
| 0x19 | Fußraumleuchte Front |
| 0x1A | Fußraumleuchte Fond |
| 0x1B | Colourswitch 1 |
| 0x1C | Colourswitch 2 |
| 0x1D | Colourswitch 3 |
| 0x1E | separate Welcomeleuchte |
| 0x1F | CORONA_1_LED |
| 0x20 | CORONA_2_LED |
| 0xFF | ungültig |

### TAB_INTERNER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler Keine Beschreibung vorhanden |
| 1 | RAM-Fehler Keine Beschreibung vorhanden |
| 2 | ROM-Fehler Keine Beschreibung vorhanden |
| 3 | Flash-Fehler Keine Beschreibung vorhanden |
| 4 | Fehler 4 aktiv Keine Beschreibung vorhanden |
| 5 | Fehler 5 aktiv Keine Beschreibung vorhanden |
| 6 | Fehler 6 aktiv Keine Beschreibung vorhanden |
| 7 | Signal ungültig Keine Beschreibung vorhanden |

### TAB_JTAG_LOCK_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | TEMPORARY_LOCK |
| 0x02 | PERMANENT_LOCK_FROM_UNLOCK |
| 0x03 | PERMANENT_LOCK_FROM_LOCK |

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

### TAB_LAMPEN_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Leuchte |
| 0x01 | Standlicht |
| 0x02 | Standlicht ES |
| 0x03 | Abblendlicht |
| 0x04 | Tagfahrlicht |
| 0x05 | Fernlicht |
| 0x06 | Blinker links |
| 0x07 | Blinker rechts |
| 0x08 | Nebellicht vorne |
| 0x09 | Abbiegelicht vorne links |
| 0x0A | Abbiegelicht vorne rechts |
| 0x0C | Bremslicht |
| 0x0D | BFD / ESS |
| 0x0E | Nebelschlusslicht |
| 0x0F | Rückfahrlicht |
| 0x10 | Parklicht links |
| 0x11 | Parklicht rechts |
| 0x12 | Warnblinken |
| 0x13 | Innenbeleuchtung |
| 0xFF | ungültiger Wert |

### TAB_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0x02 | Defekt |
| 0x03 | Signal ungültig |

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

### TAB_LENKSTOCK_BLINKER_WIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht betätigt |
| 0x01 | nach oben |
| 0x02 | nach unten |
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

### TAB_LICHTSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Stellung Neutral |
| 0x01 | Stellung Standlicht |
| 0x02 | Stellung Abblendlicht |
| 0x03 | Stellung Fahrlichtkontrolle |
| 0xFF | ungültiges Signal |

### TAB_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | unterhalb Limit |
| 0x02 | normal Zustand |
| 0x03 | oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_LWR_REFERENZLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Referenzlauf nicht gestartet |
| 0x01 | Referenzlauf aktiv |
| 0x02 | Referenzlauf ohne Fehler abgeschlossen |
| 0x03 | Referenzlauf mit Fehler abgebrochen |
| 0xFF | ungültiger Wert |

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

### TAB_MODUS_FAHRERLEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initalisierung |
| 0x01 | Modus Traction gesetzt |
| 0x02 | Modus Komfort gesetzt |
| 0x03 | Modus Basis gesetzt |
| 0x04 | Modus Sport gesetzt |
| 0x05 | Modus Sport + gesetzt |
| 0x06 | Modus Race gesetzt |
| 0x07 | Modus ECO gesetzt |
| 0x08 | Modus ECO + gesetzt |
| 0xFF | ungültig |

### TAB_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais auf Ubatt |
| 0x01 | Relais auf Masse |

### TAB_RLS_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Regensensor eingemessen |
| 0x01 | Regensensor nicht eingemessen |
| 0x02 | Regensensor im Einmessvorgang |
| 0x03 | Vorgang nicht gestartet |
| 0x04 | Kommunikation unterbrochen |

### TAB_ROLLO_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Betätigt |
| 0x07 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommern, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_SARAH_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Gruen |
| 0x02 | Defekt |
| 0x03 | Orange |
| 0xFF | ungueltig |

### TAB_SARAH_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Funktionen aus |
| 0x01 | Benutzerdefiniert |
| 0x02 | Alle Funktionen an |

### TAB_SCHALTWIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schaltpaddles nicht betätigt |
| 0x01 | Schaltwippe Tip minus betätigt |
| 0x02 | Schaltwippe Tip plus betätigt |
| 0x03 | Fehler Schaltpaddle |
| 0x05 | Schaltwippe Tip minus betätigt und entprellt |
| 0x06 | Schaltwippe Tip plus betätigt und entprellt |
| 0xFF | Signal ungültig |

### TAB_SCHEINWERFER_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | links |
| 0x01 | rechts |
| 0x02 | beide |

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
| 0x03 | SH_L_HINTEN |
| 0x04 | SH_R_HINTEN |

### TAB_SITZEXT_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | LED_SEAT_MEMORY |
| 0x01 | LED_1_Aktivsitz_ALBV |
| 0x02 | LED_2_Aktivsitz_ALBV |
| 0x03 | LED_3_Aktivsitz_ALBV |
| 0x04 | LED_Fernbedienung_Gent |

### TAB_SITZEXT_ORT

| WERT | TEXT |
| --- | --- |
| 0x00 | SitzExt FA |
| 0x01 | SitzExt BF |
| 0x02 | SitzExt FAH |
| 0x03 | SitzExt BFH |

### TAB_SITZEXT_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | Gedrückt / Betätigt |
| 0x03 | Ungültig |

### TAB_SITZEXT_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht kodiert |
| 0x01 | kodiert |

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

### TAB_SITZMEMORY_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gedrückt |
| 0x01 | Taster 1 |
| 0x02 | Taster 2 |
| 0x03 | Taster 3 |
| 0x04 | Taster M |
| 0x15 | Signal Ungültig/ Fehler / nicht vorhanden |

### TAB_SLEEP_MODE_NRC

| WERT | TEXT |
| --- | --- |
| 0x00 | Positive Response |
| 0x01 | Light Switch in Position 2 |
| 0x02 | Relay Stuck Hw Failure |
| 0x03 | Power Window Activated |
| 0xFF | Invalid |

### TAB_SMO_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolgreich durchgeführt |
| 0x01 | Fahrzeuggeschwindigkeit größer Stillstand erkannt |
| 0x02 | Kein gültiger Schlüssel (im Heckbereich) erkannt |
| 0x03 | Codierung SmartOpener ist nicht aktiv |
| 0xFF | ungültig |

### TAB_SMO_FAHRZEUGTYP

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fahrzeugtyp definiert |
| 1 | (F001, F002, F004) + Zylinderzahl<12 + US + Std |
| 2 | (F001, F002, F004) + Zylinderzahl<12 + ECE + Std |
| 3 | (F001, F002, F004) + Zylinderzahl<12 + AHV + Std |
| 4 | (F001, F002, F004) + US + M-Paket |
| 5 | (F001, F002, F004) + ECE + M-Paket |
| 6 | (F001, F002, F004) + AHV + M-Paket |
| 7 | (F001, F002, F004) + Zylinderzahl=12 + US + Std |
| 8 | (F001, F002, F004) + Zylinderzahl=12 + ECE + Std |
| 9 | (F001, F002, F004) + Zylinderzahl=12 + AHV + Std |
| 10 | F007 + Baustand <1307 + US + Std |
| 11 | F007 + Baustand <1307 + ECE + Std |
| 12 | (F030, F035, F031) + US + Chrom + WSB |
| 13 | (F030, F035, F031) + US + M-Paket + WSB |
| 14 | (F030, F035, F031) + ECE + Std + WSB |
| 15 | (F032, F036) + US + M-Paket + WSB |
| 16 | F010 + US + Std oder F018 + US + Std |
| 17 | F010 + ECE + Std oder F018 + ECE + Std |
| 18 | (F010, F018) + AHV + Std |
| 19 | F010 + US + M-Paket oder F018 + US + M-Paket |
| 20 | F010 + ECE + M-Paket oder F018 + ECE + M-Paket |
| 21 | (F010, F018) + AHV + M-Paket |
| 22 | F011 + ECE + Std |
| 23 | F011 + AHV + Std |
| 24 | F011 + ECE + M-Paket |
| 25 | F011 + AHK + M-Paket |
| 26 | (F030, F035) + US + Std |
| 27 | (F030, F035) + ECE + Std - WSB |
| 28 | (F030, F035) + AHV + Std |
| 29 | (F030, F035) + US + Chrom - WSB |
| 30 | (F030, F035) + ECE + Chrom |
| 31 | (F030, F035) + AHV + Chrom |
| 32 | (F030, F035) + US + M-Paket - WSB |
| 33 | (F030, F035) + ECE + M-Paket |
| 34 | (F030, F035) + AHV + M-Paket |
| 35 | F031 + ECE + Std - WSB |
| 36 | F031 + AHV + Std |
| 37 | F031 + ECE + Chrom |
| 38 | F031 + AHV + Chrom |
| 39 | F031 + ECE + M-Paket |
| 40 | F031 + AHV + M-Paket |
| 41 | (F032, F036) + US + Std |
| 42 | (F032, F036) + ECE + Std |
| 43 | (F032, F036) + AHV + Std |
| 44 | (F032, F036) + US + Chrom |
| 45 | (F032, F036) + ECE + Chrom |
| 46 | (F032, F036) + AHV + Chrom |
| 47 | (F032, F036) + US + M-Paket - WSB |
| 48 | (F032, F036) + ECE + M-Paket |
| 49 | (F032, F036) + AHV + M-Paket |
| 50 | F034 + US + Std - WSB |
| 51 | F034 + ECE + Std - WSB |
| 52 | F034 + AHV + Std |
| 53 | F034 + US + Chrom - WSB |
| 54 | F034 + ECE + Chrom - WSB |
| 55 | F034 + AHV + Chrom |
| 56 | F034 + US + M-Paket |
| 57 | F034 + ECE + M-Paket |
| 58 | F034 + AHV + M-Paket |
| 59 | RR04 |
| 60 | F010 + (S63B44) + US |
| 61 | F010 + (S63B44) + ECE |
| 62 | F031 + US + Std |
| 63 | F031 + US + Chrom - WSB |
| 64 | F031 + US + M-Paket - WSB |
| 65 | F080 |
| 66 | F082 + ECE, US bis 1503 |
| 67 | F086 + US + ECE |
| 68 | F086 + AHK |
| 69 | F082 + US ab 1503 |
| 70 | F007 + Baustand>=1307 + US + Std |
| 71 | F007 + Baustand>=1307 + ECE + Std |
| 72 | F007 + Baustand>=1307 + AHK + Std |
| 73 | F007 + Baustand>=1307 + US + M-Paket |
| 74 | F007 + Baustand>=1307 + ECE + M-Paket |
| 75 | F007 + Baustand>=1307 + AHK + M-Paket |
| 76 | RR05 |
| 77 | RR06 |
| 78 | F025 + Baustand>=1404 + US + Std |
| 79 | F025 + Baustand>=1404 + ECE + Std |
| 80 | F025 + Baustand>=1404 + AHV + Std |
| 81 | F025 + Baustand>=1404 + Click on AHV + Std |
| 82 | F034 + US + Chrom + WSB |
| 83 | F026 + US + Std |
| 84 | F026 + ECE + Std |
| 85 | F026 + AHV + Std |
| 86 | F026 + Click on AHV + Std |
| 87 | F034 + US + Std + WSB |
| 88 | F026 + US + M-Paket |
| 89 | F026 + ECE + M-Paket |
| 90 | F026 + AHV + M-Paket |
| 91 | F026 + Click on AHV + M-Paket |
| 92 | F034 + ECE + Std + WSB |
| 93 | F016 + US + Std |
| 94 | F016 + ECE + Std |
| 95 | F016 + AHV + Std |
| 96 | F016 + Click on AHV + Std |
| 97 | F034 + ECE + Chrom + WSB |
| 98 | F016 + US + M-Paket |
| 99 | F016 + ECE + M-Paket |
| 100 | F016 + AHV + M-Paket |
| 101 | F016 + Click on AHV + M-Paket |
| 103 | (F045, F045CN) + US + ECE + Std - WSB |
| 104 | (F045, F045CN) + AHK + Std |
| 105 | (F045, F045CN) + US + ECE + M-Paket - WSB |
| 106 | (F045, F045CN) + AHK + M-Paket |
| 107 | (F045, F045CN) + US + ECE + Std + WSB |
| 108 | (F045, F045CN) + US + ECE + M-Paket + WSB |
| 109 | (F045, F045CN) + US + ECE + M-Paket + WSB |
| 110 | CAD Parametersatz |
| 111 | Messzwecke und Q-Wall Tests |
| 112 | F¿r Tests an TSP usw. |
| 114 | F048 + US + ECE + Std - WSB |
| 115 | F048 + AHK + Std |
| 116 | F048 + US + ECE + Std + WSB |
| 117 | F048 + US + ECE + M-Paket - WSB |
| 118 | F048 + AHK + M-Paket |
| 119 | F048 + US + ECE + M-Paket + WSB |
| 120 | F039 + ECE + Std |
| 121 | F039 + US + Std |
| 122 | F039 + AHV + Std |
| 123 | F039 + ECE + M-Paket |
| 124 | F039 + US + M-Paket |
| 125 | F039 + AHV + M-Paket |
| 126 | Im SMO: hinterlegte Param. ident. zu ID 127 (dez): F054 + US + ECE (one, cooper, JCW oder JCW-Pack) + N + J (JCW Pack) - WSB |
| 127 | F054 + US + ECE (one, cooper, JCW oder JCW-Pack) + N + J (JCW Pack) - WSB |
| 128 | F054 + US + ECE (cooper S, ohne JCW Pack) + N - WSB |
| 129 | Im SMO: hinterlegte Param. Ident. zu ID 130 (dez): F054 + US + ECE (one, cooper, JCW oder JCW-Pack) + N + J (JCW Pack) + WSB |
| 130 | F054 + US + ECE (one, cooper, JCW oder JCW-Pack) + N + J (JCW Pack) + WSB |
| 131 | F054 + US + ECE (cooper S, ohne JCW Pack) + N + WSB |
| 132 | F060 + US + ECE + N + WSB |
| 133 | F060 + US + ECE + J (JCW Pack) + WSB |
| 134 | F046 + US + ECE + Std - WSB |
| 135 | F046 + AHK + Std |
| 136 | F046 + US + ECE + M-Paket - WSB |
| 137 | F046 + AHK + M-Paket |
| 138 | F046 + US + ECE + Std + WSB |
| 139 | F046 + US + ECE + M-Paket + WSB |
| 140 | F049   - WSB |
| 141 | F049   + WSB |
| 142 | F052 |
| 143 | F060 + PHEV + N |
| 144 | F060 + US + ECE + N - WSB |
| 145 | F060 + US + ECE + J (JCW Pack) - WSB |
| 151 | F40 |
| 254 | Dynamische Parametrierung ¿ber LIN |
| 255 | Signal ung¿ltig |

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

### TAB_SPIELSCHUTZ_FUNCTIONS

| WERT | TEXT |
| --- | --- |
| 0x20 | EM_WAKESRC_BFCAN |
| 0x22 | EM_WAKESRC_BFLIN_A |
| 0x23 | EM_WAKESRC_BFLIN_B |
| 0x24 | EM_WAKESRC_BFLIN_C |
| 0x25 | EM_WAKESRC_BFLIN_D |
| 0x30 | EM_WAKESRC_0x36_TC_15WUP |
| 0x34 | EM_WAKESRC_0x20_TC_SSPA |
| 0x35 | EM_WAKESRC_0x21_TC_SSPB |
| 0x37 | EM_WAKESRC_0x31_TC_PLOCK |
| 0x36 | EM_WAKESRC_0x33_TC_IBSWUP |
| 0x39 | EM_WAKESRC_0x3D_TC_BRAKE |
| 0x38 | EM_WAKESRC_0x3E_TC_CLUTCH |
| 0x48 | EM_WAKESRC_0x25_LCE_LIGHTSWITCH |
| 0x42 | EM_WAKESRC_0x26_LCE_OPWARNLIGHT |
| 0x43 | EM_WAKESRC_0x27_LCE_INDICATORLEFT |
| 0x44 | EM_WAKESRC_0x28_LCE_INDICATORRIGHT |
| 0x46 | EM_WAKESRC_0x2A_LCI_OPLIGHT |
| 0x47 | EM_WAKESRC_0x2A_LCI_OPLIGHTREAR |
| 0x50 | EM_WAKESRC_0x23_CL_OPCLBUTTON |
| 0x51 | EM_WAKESRC_0x1C_CL_OPDRIVERDOOR |
| 0x52 | EM_WAKESRC_0x1D_CL_OPPASSENGERDOOR |
| 0x53 | EM_WAKESRC_0x16_CL_OPBOOTLIDINT |
| 0x54 | EM_WAKESRC_0x17_CL_OPBOOTLIDEXT |
| 0x56 | EM_WAKESRC_0x18_CL_OPREARSCREEN |
| 0x55 | EM_WAKESRC_0x24_CL_OPBOOTLIDSEC |
| 0x57 | EM_WAKESRC_0x32_CL_OPHOTELMODE |
| 0x58 | EM_WAKESRC_0x10_CL_SWITCHDRD |
| 0x59 | EM_WAKESRC_0x11_CL_SWITCHPSD |
| 0x5A | EM_WAKESRC_0x12_CL_SWITCHDRDR |
| 0x5B | EM_WAKESRC_0x13_CL_SWITCHPSDR |
| 0x5D | EM_WAKESRC_0x19_CL_SWITCHBOOTLID |
| 0x5E | EM_WAKESRC_0x1A_CL_SWITCHREARSCREEN |
| 0x5C | EM_WAKESRC_0x1B_CL_SWITCHBONNET |
| 0x80 | EM_WAKESRC_0x39_CA_CAPSENSORDRD |
| 0x81 | EM_WAKESRC_0x3A_CA-CAPSENSORPSD |
| 0x82 | EM_WAKESRC_0x3B_CA_CAPSENSORDRDR |
| 0x83 | EM_WAKESRC_0x3C_CA_CAPSENSORPSDR |
| 0x84 | EM_WAKESRC_0x15_CA_PULLSENSORDRD |
| 0x85 | EM_WAKESRC_0x16_CA_PULLSENSORPSD |
| 0x86 | EM_WAKESRC_0x37_CA_PULLSENSORDRDR |
| 0x87 | EM_WAKESRC_0x38_CA_PULLSENSORPSDR |
| 0x88 | EM_WAKESRC_0x0B_CA_SMOACTIVE |
| 0x92 | EM_WAKESRC_0x30_RC_ACTIVE |
| 0x93 | EM_WAKESRC_0x06_EXMI_ACTIVE |
| 0x94 | EM_WAKESRC_0x2E_PFSZL_ESCAACTIVE |
| 0xFF | INVALID _VALUE |

### TAB_STATUS_UNTERBRECHUNG

| WERT | TEXT |
| --- | --- |
| 0 | Fehler Keine Unterbrechung / kein Kurzschluss |
| 1 | Rote LED ausgefallen Keine Beschreibung vorhanden |
| 2 | Grüne LED ausgefallen Keine Beschreibung vorhanden |
| 3 | Blaue LED ausgefallen Keine Beschreibung vorhanden |
| 4 | Weiße LED ausgefallen Keine Beschreibung vorhanden |
| 7 | Signal ungültig Keine Beschreibung vorhanden |

### TAB_STEUERN_EWS4_MODE

| WERT | TEXT |
| --- | --- |
| 0x01 | LOCK_EWS4 |
| 0x02 | WRITE_DMEDDE_SK |
| 0x03 | WRITE_TRSP_SK |
| 0x04 | LOCK_DMEDDE_SK |
| 0x05 | LOCK_TRSP_SK |
| 0x06 | UNLOCK_DMEDDE_SK |
| 0x07 | UNLOCK_TRSP_SK |
| 0x11 | WRITE_E5_KEY |
| 0x20 | UNLOCK_FEM |
| 0xFF | UNKNOWN_MODE |

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

### TAB_SWITCHBOARD

| WERT | TEXT |
| --- | --- |
| 0x01 | HDC Taste |
| 0x02 | PDC Taste |
| 0x03 | SV Taste |
| 0x04 | FES Wippe vorne |
| 0x05 | FES Wippe hinten |
| 0x06 | DSC Taste |
| 0x07 | HUD Taste |

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
| 0x15 | SwcSarahMaster |
| 0x20 | SwcFesMaster |
| 0x21 | SwcPwDriverRear |
| 0x22 | SwcVaMaster |
| 0x23 | SwcKeyManager |
| 0x24 | SwcPwBroseLib |
| 0x25 | SwcPwContiLib |
| 0x26 | SwcPwDummyLib |
| 0xFF | unknown |

### TAB_TAGE_SPERRSTATUS_ARG

| WERT | TEXT |
| --- | --- |
| 0 | Sperren |
| 1 | Freigeben |

### TAB_TASTER_MFL_1

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Taster gedrückt |
| 0x03 | ungültig |

### TAB_TASTER_MFL_2

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Taste gedrückt |
| 0x0F | ungültig |

### TAB_TASTER_MFL_3

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Taster/Wippe oben gedrückt |
| 0x05 | Taster/Wippe unter gedrückt |
| 0x0F | ungültig |

### TAB_THERMOMONITOR_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (Übersteuert) |
| 0x01 | Thermo 90 aktiv (Übersteuert) |
| 0x02 | Thermo 100 aktiv (Übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |

### TAB_TLC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aussage |
| 0x01 | Unterhalb Limit |
| 0x02 | Normalzustand |
| 0x03 | Oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_TMS_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein TMS |
| 0x01 | TMS links |
| 0x02 | TMS rechts |
| 0x03 | TMS links und rechts |
| 0xFF | ungültiger Wert |

### TAB_TMS_F_ART_TEXTE

| WERT | TEXT |
| --- | --- |
| 0 | momentan nicht vorhanden |
| 1 | momentan vorhanden |
| 2 | Fehler! |

### TAB_TMS_F_ORT_TEXTE

| WERT | TEXT |
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

### TAB_TMS_F_UMWELT_TEXTE

| WERT | U1_TEXT | MUL1 | DIV1 | ADD1 | EINH1 | U2_TEXT | MUL2 | DIV2 | ADD2 | EINH2 | TEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 1 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 2 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 3 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 4 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 5 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 10 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 11 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 12 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 13 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 14 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 15 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 16 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 17 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 18 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 19 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 20 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 21 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | TMS-Temperatur | 1 | 1 | -40 | °C | - |
| 22 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V | - |
| 23 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V | - |
| 30 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 31 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 32 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 33 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C | - |
| 34 | Ursache #1 | 1 | 1 | 0 | - | Ursache #2 | 1 | 1 | 0 | - | - |
| 35 | LED-Spannungsschwelle | 1 | 1 | 0 | V | LED-Spannung | 1 | 1 | 0 | V | - |
| 36 | LED-Spannungsschwelle | 1 | 1 | 0 | V | LED-Spannung | 1 | 1 | 0 | V | - |
| 37 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 38 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C | - |
| 39 | Ursache #1 | 1 | 1 | 0 | - | Ursache #2 | 1 | 1 | 0 | - | - |
| 40 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 41 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 42 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 43 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C | - |
| 44 | Ursache #1 | 1 | 1 | 0 | - | Ursache #2 | 1 | 1 | 0 | - | - |
| 45 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 46 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 47 | LED-Strom | 10 | 1 | 0 | mA | LED-Spannung | 1 | 10 | 0 | V | - |
| 48 | Temperaturschwelle | 1 | 1 | -40 | °C | Gemessene Temperatur | 1 | 1 | -40 | °C | - |
| 49 | Ursache #1 | 1 | 1 | 0 | - | Ursache #2 | 1 | 1 | 0 | - | - |
| 50 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 51 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 52 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 53 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V | - |
| 54 | TMS-Versorgungsspannung | 1 | 10 | 0 | V | Sensor-Versorgungsspannung | 1 | 10 | 0 | V | - |
| 55 | Ursache | 1 | 1 | 0 | (bitcodiert) | TMS-Versorgungsspannung | 1 | 10 | 0 | V | - |
| 56 | - | - | - | - | - | - | - | - | - | - | - |
| 57 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 58 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 59 | Vorgabe LED-Spannung | 1 | 10 | 0 | V | LED-Spannung | 1 | 10 | 0 | V | - |
| 60 | - | - | - | - | - | - | - | - | - | - | - |
| 61 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 62 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 70 | Spannungsschwelle | 1 | 10 | 0 | V | TFL-Versorgungsspannung | 1 | 10 | 0 | V | - |
| 71 | TFL-Versorgungsspannung | 1 | 1 | 0 | V | TFL-Betriebsart | 1 | 1 | 0 | - | - |
| 80 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 81 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 82 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 83 | Ursache | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 84 | - | 1 | 1 | 0 | - | - | 1 | 1 | 0 | - | - |
| 255 | - | - | - | - | - | - | - | - | - | - | - |

### TAB_TMS_LED_FUNCTIONS

| WERT | TEXT |
| --- | --- |
| 0 | alle LEDs aus |
| 1 | Blinker (nur Entwicklung) |
| 2 | Blinker dauernd ein |
| 4 | Designleuchte |
| 8 | Seitenmarkierungsleuchte |
| 16 | Positionsleuchte |
| 255 | Fehler oder keine Auswahl laut Tabelle! |

### TAB_TMS_REF_TYPE

| WERT | TEXT | SYMBOL |
| --- | --- | --- |
| 0 | Standard AHL-Referenzlauf | standard |
| 1 | AHL-Referenzlauf ohne Sensor gegen harten Anschlag | hard |
| 2 | Fehler | error |

### TAB_TRSP_AKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Transponderspule für 10 Sekunden aktivieren (default) |
| 1 | Transponderspule sofort deaktivieren |

### TAB_TRSP_KEY_DATA_CONSISTENT

| WERT | TEXT |
| --- | --- |
| 0 | Schlüsseldaten sind nicht konsistent - nur teilweise ausgelesen |
| 1 | Schlüsseldaten sind konsistent - Vollständig ausgelesen |
| 255 | Unbekannt/Ungültig |

### TAB_UGDO_LAND

| WERT | TEXT |
| --- | --- |
| 0x00 | RestOfEurope_HL24 |
| 0x01 | Frankreich_HL24__RestOfEurope_HLV |
| 0x02 | UK_HL24__Kuwait_HLV |
| 0x03 | Italien_HL24__UK_HLV |
| 0x04 | USA_HL24 |
| 0x05 | USA_HLV |
| 0x08 | Global_HLV |
| 0x09 | Australia_HLV |
| 0x0F | keine_Aenderung |
| 0xFF | ungültiger Wert |

### TAB_UGDO_MODE

| WERT | TEXT |
| --- | --- |
| 0x01 | ChamberlainMode |
| 0x02 | Default |
| 0x03 | LearnMode |
| 0xFF | ungültiger Wert |

### TAB_UW_ABSCHALTVERHINDERER_KL30B

| WERT | TEXT |
| --- | --- |
| 0 | Motor läuft |
| 1 | Fahrzeuggeschwindigkeit größer Stillstand |
| 100 | Entertainmentfunktion |
| 101 | Remote Services |
| 102 | Restwärme |
| 103 | Standheizung - Standlüften |
| 104 | Nachlauf RSE |
| 105 | Remote Hupen |
| 107 | Betätigung Feststellbremse,Rollüberwachung |
| 108 | Kühlmitteltemperaturanfrage durch Kombi |
| 111 | Tankleckdiagnose |
| 112 | Batteriewächter |
| 113 | Nachlauf E-Lüfter |
| 114 | elektr. Wasserpumpe für Turbo Lagerstuhl |
| 115 | Standlüften |
| 116 | Fremdladeerkennung Hybrid - Ladefunktion HVPM - Ladefunktion LIM |
| 117 | Außenbeleuchtung (Follow-Me-Home) |
| 118 | Nachlauf der elektrische Wasserpumpe für Hybrid |
| 119 | Nachlauf der elektrische Wasserpumpe |
| 254 | Kein Abschaltverhinderer oder Standverbraucher aktiv |
| 0xFFFF | Unbekannter Abschaltverhinderer oder Standverbraucher |

### TAB_UW_AUSGANG_LEUCHTEN

| WERT | TEXT |
| --- | --- |
| 1 | AUSGANG_AL_L |
| 2 | AUSGANG_AL_R |
| 3 | AUSGANG_TFL_L |
| 4 | AUSGANG_TFL_R |
| 5 | AUSGANG_SML_L |
| 6 | AUSGANG_SML_R |
| 7 | AUSGANG_FL_L |
| 8 | AUSGANG_FL_R |
| 9 | AUSGANG_POL_L |
| 10 | AUSGANG_POL_R |
| 11 | AUSGANG_NSW_L |
| 12 | AUSGANG_NSW_R |
| 13 | AUSGANG_FRA_V_L |
| 14 | AUSGANG_FRA_V_R |
| 16 | AUSGANG_FRA_Z_L |
| 17 | AUSGANG_FRA_Z_R |
| 18 | AUSGANG_BIX_L |
| 19 | AUSGANG_BIX_R |
| 20 | AUSGANG_SL_L |
| 21 | AUSGANG_SL_R |
| 22 | AUSGANG_SL_2_L |
| 23 | AUSGANG_SL_2_R |
| 24 | AUSGANG_BL_L |
| 25 | AUSGANG_BL_R |
| 26 | AUSGANG_BFD_L |
| 27 | AUSGANG_BFD_R |
| 28 | AUSGANG_NSL_L |
| 29 | AUSGANG_NSL_R |
| 30 | AUSGANG_RFS_L |
| 31 | AUSGANG_RFS_R |
| 32 | AUSGANG_FRA_H_L |
| 33 | AUSGANG_FRA_H_R |
| 34 | AUSGANG_KZL |
| 35 | AUSGANG_BL_M |
| 38 | AUSGANG_WBL_LED |
| 39 | AUSGANG_LCI_0 |
| 40 | AUSGANG_LCI_1 |
| 41 | AUSGANG_LCI_2 |
| 42 | AUSGANG_LCI_3 |
| 43 | AUSGANG_LCI_4 |
| 44 | AUSGANG_LCI_5 |
| 45 | AUSGANG_LCI_6 |
| 46 | AUSGANG_LCI_7 |
| 47 | AUSGANG_LCI_8 |
| 48 | AUSGANG_TMS_LEUCHTRING_L |
| 49 | AUSGANG_TMS_LEUCHTRING_R |
| 50 | AUSGANG_TMS_SML_L |
| 51 | AUSGANG_TMS_SML_R |
| 52 | AUSGANG_TMS_DESIGN_L |
| 53 | AUSGANG_TMS_DESIGN_R |
| 254 | AUSGANG_ALLE |
| 255 | UNGUELTIG |

### TAB_UW_BEL_UND_KLEMME

| WERT | TEXT |
| --- | --- |
| 0x00 | LS_POS = 0 und Klemme < Klemme 15 |
| 0x10 | LS_POS = 0 und Klemme = Klemme 15 |
| 0x20 | LS_POS = 0 und Klemme > Klemme 15 |
| 0x90 | LS_POS = 0 und Klemme = Timeout |
| 0xA0 | LS_POS = 0 und Klemme = CRC_ERR |
| 0xB0 | LS_POS = 0 und Klemme = ALIVE_ERR |
| 0xC0 | LS_POS = 0 und Klemme = PDAT_ERR |
| 0xD0 | LS_POS = 0 und Klemme = LENG_ERR |
| 0xE0 | LS_POS = 0 und Klemme = SIGN_ERR |
| 0x01 | LS_POS = 1 und Klemme < Klemme 15 |
| 0x11 | LS_POS = 1 und Klemme = Klemme 15 |
| 0x21 | LS_POS = 1 und Klemme > Klemme 15 |
| 0x91 | LS_POS = 1 und Klemme = Timeout |
| 0xA1 | LS_POS = 1 und Klemme = CRC_ERR |
| 0xB1 | LS_POS = 1 und Klemme = ALIVE_ERR |
| 0xC1 | LS_POS = 1 und Klemme = PDAT_ERR |
| 0xD1 | LS_POS = 1 und Klemme = LENG_ERR |
| 0xE1 | LS_POS = 1 und Klemme = SIGN_ERR |
| 0x02 | LS_POS = 2 und Klemme < Klemme 15 |
| 0x12 | LS_POS = 2 und Klemme = Klemme 15 |
| 0x22 | LS_POS = 2 und Klemme > Klemme 15 |
| 0x92 | LS_POS = 2 und Klemme = Timeout |
| 0xA2 | LS_POS = 2 und Klemme = CRC_ERR |
| 0xB2 | LS_POS = 2 und Klemme = ALIVE_ERR |
| 0xC2 | LS_POS = 2 und Klemme = PDAT_ERR |
| 0xD2 | LS_POS = 2 und Klemme = LENG_ERR |
| 0xE2 | LS_POS = 2 und Klemme = SIGN_ERR |
| 0x03 | LS_POS = 3 und Klemme < Klemme 15 |
| 0x13 | LS_POS = 3 und Klemme = Klemme 15 |
| 0x23 | LS_POS = 3 und Klemme > Klemme 15 |
| 0x93 | LS_POS = 3 und Klemme = Timeout |
| 0xA3 | LS_POS = 3 und Klemme = CRC_ERR |
| 0xB3 | LS_POS = 3 und Klemme = ALIVE_ERR |
| 0xC3 | LS_POS = 3 und Klemme = PDAT_ERR |
| 0xD3 | LS_POS = 3 und Klemme = LENG_ERR |
| 0xE3 | LS_POS = 3 und Klemme = SIGN_ERR |
| 0x09 | LS_POS = Timeout und Klemme < Klemme 15 |
| 0x19 | LS_POS = Timeout und Klemme = Klemme 15 |
| 0x29 | LS_POS = Timeout und Klemme > Klemme 15 |
| 0x99 | LS_POS = Timeout und Klemme = Timeout |
| 0xA9 | LS_POS = Timeout und Klemme = CRC_ERR |
| 0xB9 | LS_POS = Timeout und Klemme = ALIVE_ERR |
| 0xC9 | LS_POS = Timeout und Klemme = PDAT_ERR |
| 0xD9 | LS_POS = Timeout und Klemme = LENG_ERR |
| 0xE9 | LS_POS = Timeout und Klemme = SIGN_ERR |
| 0x0A | LS_POS = CRC_ERR und Klemme < Klemme 15 |
| 0x1A | LS_POS = CRC_ERR und Klemme = Klemme 15 |
| 0x2A | LS_POS = CRC_ERR und Klemme > Klemme 15 |
| 0x9A | LS_POS = CRC_ERR und Klemme = Timeout |
| 0xAA | LS_POS = CRC_ERR und Klemme = CRC_ERR |
| 0xBA | LS_POS = CRC_ERR und Klemme = ALIVE_ERR |
| 0xCA | LS_POS = CRC_ERR und Klemme = PDAT_ERR |
| 0xDA | LS_POS = CRC_ERR und Klemme = LENG_ERR |
| 0xEA | LS_POS = CRC_ERR und Klemme = SIGN_ERR |
| 0x0B | LS_POS = ALIVE_ERR und Klemme < Klemme 15 |
| 0x1B | LS_POS = ALIVE_ERR und Klemme = Klemme 15 |
| 0x2B | LS_POS = ALIVE_ERR und Klemme > Klemme 15 |
| 0x9B | LS_POS = ALIVE_ERR und Klemme = Timeout |
| 0xAB | LS_POS = ALIVE_ERR und Klemme = CRC_ERR |
| 0xBB | LS_POS = ALIVE_ERR und Klemme = ALIVE_ERR |
| 0xCB | LS_POS = ALIVE_ERR und Klemme = PDAT_ERR |
| 0xDB | LS_POS = ALIVE_ERR und Klemme = LENG_ERR |
| 0xEB | LS_POS = ALIVE_ERR und Klemme = SIGN_ERR |
| 0x0C | LS_POS = PDAT_ERR und Klemme < Klemme 15 |
| 0x1C | LS_POS = PDAT_ERR und Klemme = Klemme 15 |
| 0x2C | LS_POS = PDAT_ERR und Klemme > Klemme 15 |
| 0x9C | LS_POS = PDAT_ERR und Klemme = Timeout |
| 0xAC | LS_POS = PDAT_ERR und Klemme = CRC_ERR |
| 0xBC | LS_POS = PDAT_ERR und Klemme = ALIVE_ERR |
| 0xCC | LS_POS = PDAT_ERR und Klemme = PDAT_ERR |
| 0xDC | LS_POS = PDAT_ERR und Klemme = LENG_ERR |
| 0xEC | LS_POS = PDAT_ERR und Klemme = SIGN_ERR |
| 0x0D | LS_POS = LENG_ERR und Klemme < Klemme 15 |
| 0x1D | LS_POS = LENG_ERR und Klemme = Klemme 15 |
| 0x2D | LS_POS = LENG_ERR und Klemme > Klemme 15 |
| 0x9D | LS_POS = LENG_ERR und Klemme = Timeout |
| 0xAD | LS_POS = LENG_ERR und Klemme = CRC_ERR |
| 0xBD | LS_POS = LENG_ERR und Klemme = ALIVE_ERR |
| 0xCD | LS_POS = LENG_ERR und Klemme = PDAT_ERR |
| 0xDD | LS_POS = LENG_ERR und Klemme = LENG_ERR |
| 0xED | LS_POS = LENG_ERR und Klemme = SIGN_ERR |
| 0x0E | LS_POS = SIGN_ERR und Klemme < Klemme 15 |
| 0x1E | LS_POS = SIGN_ERR und Klemme = Klemme 15 |
| 0x2E | LS_POS = SIGN_ERR und Klemme > Klemme 15 |
| 0x9E | LS_POS = SIGN_ERR und Klemme = Timeout |
| 0xAE | LS_POS = SIGN_ERR und Klemme = CRC_ERR |
| 0xBE | LS_POS = SIGN_ERR und Klemme = ALIVE_ERR |
| 0xCE | LS_POS = SIGN_ERR und Klemme = PDAT_ERR |
| 0xDE | LS_POS = SIGN_ERR und Klemme = LENG_ERR |
| 0xEE | LS_POS = SIGN_ERR und Klemme = SIGN_ERR |

### TAB_UW_CRC_OR_ALIVE_FAILURE

| WERT | TEXT |
| --- | --- |
| 1 | CRC Failure |
| 2 | Alive Failure |
| 255 | Unbekannt/Ungültig |

### TAB_UW_CTR_SIG_UND_ST_FSFY

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Limphome |
| 0x10 | AL_R ein |
| 0x20 | AL_L ein |
| 0x30 | AL_L + AL_R ein |
| 0x40 | LimpHome Licht angefordert |
| 0x50 | LimpHome Licht angefordert + AL_R ein |
| 0x60 | LimpHome Licht angefordert + AL_L ein |
| 0x70 | LimpHome Licht angefordert + AL_L + AL_R ein |
| 0x90 | TEL_TOUT_ERR |
| 0xA0 | TEL_CRC_ERR |
| 0xB0 | TEL_ALIVE_ERR |
| 0xC0 | TEL_PDAT_ERR |
| 0xD0 | TEL_LENG_ERR |
| 0xE0 | TEL_SIGN_ERR |
| 0x01 | Limphome intern SIF angefordert |
| 0x11 | AL_R ein + Limphome intern SIF angefordert |
| 0x21 | AL_L ein + Limphome intern SIF angefordert |
| 0x31 | AL_L + AL_R ein + Limphome intern SIF angefordert |
| 0x41 | LimpHome Licht angefordert + Limphome intern SIF angefordert |
| 0x51 | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert |
| 0x61 | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert |
| 0x71 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert |
| 0x91 | TEL_TOUT_ERR + Limphome intern SIF angefordert |
| 0xA1 | TEL_CRC_ERR + Limphome intern SIF angefordert |
| 0xB1 | TEL_ALIVE_ERR + Limphome intern SIF angefordert |
| 0xC1 | TEL_PDAT_ERR + Limphome intern SIF angefordert |
| 0xD1 | TEL_LENG_ERR + Limphome intern SIF angefordert |
| 0xE1 | TEL_SIGN_ERR + Limphome intern SIF angefordert |
| 0x02 | Limphome lokal SIF angefordert |
| 0x12 | AL_R ein + Limphome lokal SIF angefordert |
| 0x22 | AL_L ein + Limphome lokal SIF angefordert |
| 0x32 | AL_L + AL_R ein + Limphome lokal SIF angefordert |
| 0x42 | LimpHome Licht angefordert + Limphome lokal SIF angefordert |
| 0x52 | LimpHome Licht angefordert + AL_R ein + Limphome lokal SIF angefordert |
| 0x62 | LimpHome Licht angefordert + AL_L ein + Limphome lokal SIF angefordert |
| 0x72 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome lokal SIF angefordert |
| 0x92 | TEL_TOUT_ERR + Limphome lokal SIF angefordert |
| 0xA2 | TEL_CRC_ERR + Limphome lokal SIF angefordert |
| 0xB2 | TEL_ALIVE_ERR + Limphome lokal SIF angefordert |
| 0xC2 | TEL_PDAT_ERR + Limphome lokal SIF angefordert |
| 0xD2 | TEL_LENG_ERR + Limphome lokal SIF angefordert |
| 0xE2 | TEL_SIGN_ERR + Limphome lokal SIF angefordert |
| 0x03 | Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x13 | AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x23 | AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x33 | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x43 | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x53 | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x63 | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x73 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x93 | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0xA3 | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0xB3 | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0xC3 | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0xD3 | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0xE3 | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert |
| 0x04 | Limphome Global SIF angefordert |
| 0x14 | AL_R ein + Limphome Global SIF angefordert |
| 0x24 | AL_L ein + Limphome Global SIF angefordert |
| 0x34 | AL_L + AL_R ein + Limphome Global SIF angefordert |
| 0x44 | LimpHome Licht angefordert + Limphome Global SIF angefordert |
| 0x54 | LimpHome Licht angefordert + AL_R ein + Limphome Global SIF angefordert |
| 0x64 | LimpHome Licht angefordert + AL_L ein + Limphome Global SIF angefordert |
| 0x74 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome Global SIF angefordert |
| 0x94 | TEL_TOUT_ERR + Limphome Global SIF angefordert |
| 0xA4 | TEL_CRC_ERR + Limphome Global SIF angefordert |
| 0xB4 | TEL_ALIVE_ERR + Limphome Global SIF angefordert |
| 0xC4 | TEL_PDAT_ERR + Limphome Global SIF angefordert |
| 0xD4 | TEL_LENG_ERR + Limphome Global SIF angefordert |
| 0xE4 | TEL_SIGN_ERR + Limphome Global SIF angefordert |
| 0x05 | Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x15 | AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x25 | AL_L ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x35 | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x45 | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x55 | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x65 | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x75 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x95 | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0xA5 | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0xB5 | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0xC5 | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0xD5 | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0xE5 | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert |
| 0x06 | Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x16 | AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x26 | AL_L ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x36 | AL_L + AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x46 | LimpHome Licht angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x56 | LimpHome Licht angefordert + AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x66 | LimpHome Licht angefordert + AL_L ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x76 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x96 | TEL_TOUT_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome Global SIF angefordert |
| 0xA6 | TEL_CRC_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xB6 | TEL_ALIVE_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xC6 | TEL_PDAT_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xD6 | TEL_LENG_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xE6 | TEL_SIGN_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x07 | Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x17 | AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x27 | AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x37 | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x47 | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x57 | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x67 | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x77 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x97 | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xA7 | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xB7 | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xC7 | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xD7 | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0xE7 | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert |
| 0x08 | Limphome entprellt SIF angefordert |
| 0x18 | AL_R ein + Limphome entprellt SIF angefordert |
| 0x28 | AL_L ein + Limphome entprellt SIF angefordert |
| 0x38 | AL_L + AL_R ein + Limphome entprellt SIF angefordert |
| 0x48 | LimpHome Licht angefordert + Limphome entprellt SIF angefordert |
| 0x58 | LimpHome Licht angefordert + AL_R ein + Limphome entprellt SIF angefordert |
| 0x68 | LimpHome Licht angefordert + AL_L ein + Limphome entprellt SIF angefordert |
| 0x78 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome entprellt SIF angefordert |
| 0x98 | TEL_TOUT_ERR + Limphome entprellt SIF angefordert |
| 0xA8 | TEL_CRC_ERR + Limphome entprellt SIF angefordert |
| 0xB8 | TEL_ALIVE_ERR + Limphome entprellt SIF angefordert |
| 0xC8 | TEL_PDAT_ERR + Limphome entprellt SIF angefordert |
| 0xD8 | TEL_LENG_ERR + Limphome entprellt SIF angefordert |
| 0xE8 | TEL_SIGN_ERR + Limphome entprellt SIF angefordert |
| 0x09 | Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x19 | AL_R ein + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x29 | AL_L ein + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x39 | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x49 | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x59 | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x69 | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x79 | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x99 | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0xA9 | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0xB9 | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0xC9 | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0xD9 | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0xE9 | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome entprellt SIF angefordert |
| 0x0A | Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x1A | AL_R ein + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x2A | AL_L ein + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x3A | AL_L + AL_R ein + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x4A | LimpHome Licht angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x5A | LimpHome Licht angefordert + AL_R ein + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x6A | LimpHome Licht angefordert + AL_L ein + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x7A | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x9A | TEL_TOUT_ERR + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xAA | TEL_CRC_ERR + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xBA | TEL_ALIVE_ERR + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xCA | TEL_PDAT_ERR + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xDA | TEL_LENG_ERR + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xEA | TEL_SIGN_ERR + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x0B | Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x1B | AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x2B | AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x3B | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x4B | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x5B | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x6B | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x7B | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x9B | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xAB | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xBB | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xCB | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xDB | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0xEB | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome entprellt SIF angefordert |
| 0x0C | Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x1C | AL_R ein + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x2C | AL_L ein + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x3C | AL_L + AL_R ein + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x4C | LimpHome Licht angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x5C | LimpHome Licht angefordert + AL_R ein + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x6C | LimpHome Licht angefordert + AL_L ein + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x7C | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x9C | TEL_TOUT_ERR + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xAC | TEL_CRC_ERR + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xBC | TEL_ALIVE_ERR + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xCC | TEL_PDAT_ERR + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xDC | TEL_LENG_ERR + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xEC | TEL_SIGN_ERR + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x0D | Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x1D | AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x2D | AL_L ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x3D | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x4D | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x5D | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x6D | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x7D | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x9D | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xAD | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xBD | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xCD | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xDD | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xED | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x0E | Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x1E | AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x2E | AL_L ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x3E | AL_L + AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x4E | LimpHome Licht angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x5E | LimpHome Licht angefordert + AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x6E | LimpHome Licht angefordert + AL_L ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x7E | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x9E | TEL_TOUT_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xAE | TEL_CRC_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xBE | TEL_ALIVE_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xCE | TEL_PDAT_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xDE | TEL_LENG_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xEE | TEL_SIGN_ERR + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x0F | Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x1F | AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x2F | AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x3F | AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x4F | LimpHome Licht angefordert + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x5F | LimpHome Licht angefordert + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x6F | LimpHome Licht angefordert + AL_L ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x7F | LimpHome Licht angefordert + AL_L + AL_R ein + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0x9F | TEL_TOUT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xAF | TEL_CRC_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xBF | TEL_ALIVE_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xCF | TEL_PDAT_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xDF | TEL_LENG_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |
| 0xEF | TEL_SIGN_ERR + Limphome intern SIF angefordert + Limphome lokal SIF angefordert + Limphome Global SIF angefordert + Limphome entprellt SIF angefordert |

### TAB_UW_DEVICE_ID

| WERT | TEXT |
| --- | --- |
| 0 | deviceIdU77 Interior |
| 1 | deviceIdU79 Rear |
| 2 | deviceIdU88 Front |
| 3 | deviceIdU6 Front |
| 4 | deviceIdU78 Front Aux |
| 5 | deviceIdU7 Rear |
| 6 | deviceIdU87 Front |
| 7 | deviceIdU80 Rear |

### TAB_UW_DRV_FLASH_FAILURE_ERROR_CODE

| WERT | TEXT |
| --- | --- |
| 0x0000 | EE_OK |
| 0x0001 | EE_FIRST_TIME_INITIALIZATION |
| 0x0002 | EE_INFO_HVOP_INPROGRESS |
| 0x0004 | EE_INFO_PROGRAM_SUSPEND |
| 0x0010 | EE_INFO_ERASE_SUSPEND |
| 0x0020 | EE_ERROR_WRITE_IN_PROGRESS |
| 0x0040 | EE_ERROR_PE_OPT |
| 0x0080 | EE_ERROR_MISMATCH |
| 0x0100 | EE_ERROR_BLOCK_STATUS |
| 0x0200 | EE_ERROR_RECORD_STATUS |
| 0x0400 | EE_ERROR_BLOCK_CONFIG |
| 0x0800 | EE_ERROR_DATA_NOT_FOUND |
| 0x1000 | EE_ERROR_NOT_IN_CACHE |
| 0x2000 | EE_ERROR_NO_ENOUGH_SPACE |

### TAB_UW_ELV_BUSSIGNALE

| WERT | TEXT |
| --- | --- |
| 1 | Status_Geschwindigkeit_Fahrzeug_Stillstandsnah ST_V_VEH_NSS |
| 2 | Status_Antrieb_Fahrzeug ST_DRV_VEH |
| 3 | Status_Geschwindigkeit_Fahrzeug_Stillstandsnah ST_V_VEH_NSS und Status_Antrieb_Fahrzeug ST_DRV_VEH |
| 255 | Ungültig / Unbekannt |

### TAB_UW_ELV_STATUS_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Die letzten beiden Statusbotschaften einer ELV-Aktivierung sind ungleich |
| 1 | Empfangener ELV-Status ungleich dem erwarteten Status |
| 2 | Signale 'Status_Zustand_ELV_LIN (ST_CON_ELV_LIN)' und/oder 'Status_Zustand_Redundant_ELV_LIN (ST_CON_RED_ELV_LIN)' ungültig |
| 3 | Unterschiedliche Werte in den Signalen 'Status_Zustand_ELV_LIN (ST_CON_ELV_LIN)' und 'Status_Zustand_Redundant_ELV_LIN (ST_CON_RED_ELV_LIN)' |
| 4 | Timeout nach Senden des Entriegeln- oder Verriegelnbefehls EM_ER/VR |
| 255 | Ungültig / Unbekannt |

### TAB_UW_ERROR_SPI

| WERT | TEXT |
| --- | --- |
| 0 | Ok |
| 1 | Timeout |
| 2 | Kommunikationsfehler |
| 3 | Unterspannung |
| 4 | Reset |
| 5 | Nicht initialisiert |

### TAB_UW_FRAME_ERROR_INFO

| WERT | TEXT |
| --- | --- |
| 1 | Physical Bus Error |
| 2 | Bit Error |
| 3 | Checksum Error |

### TAB_UW_GESCHW_KODIERT

| WERT | TEXT |
| --- | --- |
| 0 | 0 km/h |
| 1 | 1 km/h |
| 2 | 2 km/h |
| 3 | 3 km/h |
| 4 | 4 km/h |
| 5 | 5 km/h |
| 6 | 6 km/h |
| 7 | 7 km/h |
| 8 | 8 km/h |
| 9 | 9 km/h |
| 10 | 10 km/h |
| 11 | 11 km/h |
| 12 | 12 km/h |
| 13 | 13 km/h |
| 14 | 14 km/h |
| 15 | 15 km/h |
| 16 | 16 km/h |
| 17 | 17 km/h |
| 18 | 18 km/h |
| 19 | 19 km/h |
| 20 | 20 km/h |
| 21 | 21 km/h |
| 22 | 22 km/h |
| 23 | 23 km/h |
| 24 | 24 km/h |
| 25 | 25 km/h |
| 26 | 26 km/h |
| 27 | 27 km/h |
| 28 | 28 km/h |
| 29 | 29 km/h |
| 30 | 30 km/h |
| 31 | 31 km/h |
| 32 | 32 km/h |
| 33 | 33 km/h |
| 34 | 34 km/h |
| 35 | 35 km/h |
| 36 | 36 km/h |
| 37 | 37 km/h |
| 38 | 38 km/h |
| 39 | 39 km/h |
| 40 | 40 km/h |
| 41 | 41 km/h |
| 42 | 42 km/h |
| 43 | 43 km/h |
| 44 | 44 km/h |
| 45 | 45 km/h |
| 46 | 46 km/h |
| 47 | 47 km/h |
| 48 | 48 km/h |
| 49 | 49 km/h |
| 50 | 50 km/h |
| 51 | 51 km/h |
| 52 | 52 km/h |
| 53 | 53 km/h |
| 54 | 54 km/h |
| 55 | 55 km/h |
| 56 | 56 km/h |
| 57 | 57 km/h |
| 58 | 58 km/h |
| 59 | 59 km/h |
| 60 | 60 km/h |
| 61 | 61 km/h |
| 62 | 62 km/h |
| 63 | 63 km/h |
| 64 | 64 km/h |
| 65 | 65 km/h |
| 66 | 66 km/h |
| 67 | 67 km/h |
| 68 | 68 km/h |
| 69 | 69 km/h |
| 70 | 70 km/h |
| 71 | 71 km/h |
| 72 | 72 km/h |
| 73 | 73 km/h |
| 74 | 74 km/h |
| 75 | 75 km/h |
| 76 | 76 km/h |
| 77 | 77 km/h |
| 78 | 78 km/h |
| 79 | 79 km/h |
| 80 | 80 km/h |
| 81 | 81 km/h |
| 82 | 82 km/h |
| 83 | 83 km/h |
| 84 | 84 km/h |
| 85 | 85 km/h |
| 86 | 86 km/h |
| 87 | 87 km/h |
| 88 | 88 km/h |
| 89 | 89 km/h |
| 90 | 90 km/h |
| 91 | 91 km/h |
| 92 | 92 km/h |
| 93 | 93 km/h |
| 94 | 94 km/h |
| 95 | 95 km/h |
| 96 | 96 km/h |
| 97 | 97 km/h |
| 98 | 98 km/h |
| 99 | 99 km/h |
| 100 | 100 km/h |
| 101 | 101 km/h |
| 102 | 102 km/h |
| 103 | 103 km/h |
| 104 | 104 km/h |
| 105 | 105 km/h |
| 106 | 106 km/h |
| 107 | 107 km/h |
| 108 | 108 km/h |
| 109 | 109 km/h |
| 110 | 110 km/h |
| 111 | 111 km/h |
| 112 | 112 km/h |
| 113 | 113 km/h |
| 114 | 114 km/h |
| 115 | 115 km/h |
| 116 | 116 km/h |
| 117 | 117 km/h |
| 118 | 118 km/h |
| 119 | 119 km/h |
| 120 | 12 km/h |
| 121 | > 120 km/h |
| 137 | TEL_TOUT_ERR |
| 138 | TEL_CRC_ERR |
| 139 | TEL_ALIVE_ERR |
| 140 | TEL_PDAT_ERR |
| 141 | TEL_LENG_ERR |
| 142 | TEL_SIGN_ERR |

### TAB_UW_GRUND_ABSCHALTUNG_KL30F

| WERT | TEXT |
| --- | --- |
| 1 | Zu viele Wecker |
| 2 | Einschlafverhinderer |
| 3 | Erreichen der unteren Startfähigkeitsgrenze |
| 4 | Ruhestromproblem |
| 5 | Abschaltverhinderer (Parklicht) vorliegend |
| 6 | Abschaltverhinderer (Standlicht) vorliegend |
| 7 | Abschaltverhinderer (Warnblinken) vorliegend |
| 9 | Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 10 | Abschaltverhinderer (Relaiskleber Fensterheber) |
| 11 | Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 12 | Abschaltverhinderer (Interner Fehler FEM) vorliegend (z.B. Bistabiles Relais nicht abschaltbar usw) |
| 13 | Standzeit erreicht (Kombi) |
| 14 | Abschaltverhinderer (ECall) vorliegend |
| 15 | Abschaltverhinderer (Umladefunktion, PCU500) vorliegend |
| 30 | Zu viele Wecker, jedoch Abschaltverhinderer (Parklicht) vorliegend |
| 31 | Zu viele Wecker, jedoch Abschaltverhinderer (Standlicht) vorliegend |
| 32 | Zu viele Wecker, jedoch Abschaltverhinderer (Warnblinken) vorliegend |
| 33 | Zu viele Wecker, jedoch Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 34 | Zu viele Wecker, jedoch Abschaltverhinderer (Relaiskleber Fensterheber) |
| 35 | Zu viele Wecker, jedoch Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 36 | Zu viele Wecker, jedoch Abschaltverhinderer (Rollüberwachung, EMF) vorliegend |
| 37 | Zu viele Wecker, jedoch Abschaltverhinderer (DWA) vorliegend |
| 38 | Zu viele Wecker, jedoch Abschaltverhinderer (ECall) vorliegend |
| 39 | Zu viele Wecker, jedoch Abschaltverhinderer (Umladefunktion, PCU500) vorliegend |
| 50 | Einschlafverhinderer, jedoch Abschaltverhinderer (Parklicht) vorliegend |
| 51 | Einschlafverhinderer, jedoch Abschaltverhinderer (Standlicht) vorliegend |
| 52 | Einschlafverhinderer, jedoch Abschaltverhinderer (Warnblinken) vorliegend |
| 53 | Einschlafverhinderer, jedoch Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 54 | Einschlafverhinderer, jedoch Abschaltverhinderer (Relaiskleber Fensterheber) |
| 55 | Einschlafverhinderer, jedoch Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 56 | Einschlafverhinderer, jedoch Abschaltverhinderer (Rollüberwachung, EMF) vorliegend |
| 57 | Einschlafverhinderer, jedoch Abschaltverhinderer (DWA) vorliegend |
| 58 | Einschlafverhinderer, jedoch Abschaltverhinderer (ECall) vorliegend |
| 59 | Einschlafverhinderer, jedoch Abschaltverhinderer (Umladefunktion, PCU500) vorliegend |
| 70 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Parklicht) vorliegend |
| 71 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Standlicht) vorliegend |
| 72 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Warnblinken) vorliegend |
| 73 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 74 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Relaiskleber Fensterheber) |
| 75 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 76 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Rollüberwachung, EMF) vorliegend |
| 77 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (DWA) vorliegend |
| 78 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (ECall) vorliegend |
| 79 | Erreichen der unteren Startfähigkeitsgrenze, jedoch Abschaltverhinderer (Umladefunktion, PCU500) vorliegend |
| 90 | Ruhestromproblem, jedoch Abschaltverhinderer (Parklicht) vorliegend |
| 91 | Ruhestromproblem, jedoch Abschaltverhinderer (Standlicht) vorliegend |
| 92 | Ruhestromproblem, jedoch Abschaltverhinderer (Warnblinken) vorliegend |
| 93 | Ruhestromproblem, jedoch Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 94 | Ruhestromproblem, jedoch Abschaltverhinderer (Relaiskleber Fensterheber) |
| 95 | Ruhestromproblem, jedoch Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 96 | Ruhestromproblem, jedoch Abschaltverhinderer (Rollüberwachung, EMF) vorliegend |
| 97 | Ruhestromproblem, jedoch Abschaltverhinderer (DWA) vorliegend |
| 98 | Ruhestromproblem, jedoch Abschaltverhinderer (ECall) vorliegend |
| 99 | Ruhestromproblem, jedoch Abschaltverhinderer (Umladefunktion, PCU500) vorliegend |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_UW_GRUND_UNTERSPG_ABSCHALTUNG

| WERT | TEXT |
| --- | --- |
| 0 | Batterietiefentladen |
| 1 | 12h-Abschaltung |
| 255 | ungültiges Signal |

### TAB_UW_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | INIT |
| 1 | Reserve |
| 2 | KL30 (alle Klemmen aus) |
| 3 | KL30F-Änderung (d.h. Änderung zur KL30Fhin) |
| 4 | KL30F-Ein |
| 5 | KL30B-Änderung (d.h. Änderung zur KL30B hin) |
| 6 | KL30B-Ein |
| 7 | KL30B-Ein |
| 8 | KLR-Ein |
| 9 | KL15-Änderung (d.h. Änderung zur KL15 hin) |
| 10 | KL15-Ein |
| 11 | KL50-Verzögerung (d.h. verzögertes Einschalten der KL50, bei z.B. Anlasserschutz) |
| 12 | KL50-Änderung (d.h. Änderung zur KL50 hin) |
| 13 | KL50-Ein |
| 14 | Fehler |
| 15 | Ungültig |

### TAB_UW_LAMPENMAPPING_FEHLER_TYPE

| WERT | TEXT |
| --- | --- |
| 0 | unknown |
| 1 | AlL |
| 2 | AlR |
| 3 | FraVL |
| 4 | FraVR |
| 5 | FraHL |
| 6 | FraHR |
| 7 | BlM |
| 8 | CheckControl |
| 9 | Output |
| 10 | Priority |
| 11 | Function |
| 12 | reserved |
| 13 | DependencyFunc |
| 14 | DependencyPwm |
| 15 | OffModePwm |
| 16 | VoltagePeakPwm |
| 17 | SpareOutput |
| 18 | SparePwm |
| 19 | PwmLevel1 |
| 20 | PwmLevel2 |
| 21 | PwmLevel3 |
| 22 | PwmLevel4 |
| 23 | PwmLevel5 |
| 24 | missing_HW_driver |
| 255 | ungueltiger Wert |

### TAB_UW_LAST_MOTORSTART

| WERT | TEXT |
| --- | --- |
| 0x00 | Default Wert. Es gab keinen Verbrennungsmotor-Start (E-Fahrzeug) |
| 0x09 | Zustart bei bestehender Elektrischer Fahrbereitschaft |
| 0x81 | SST-Start |
| 0x89 | MSA-Start |
| 0xFF | Invalid value |

### TAB_UW_LICHTSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x03 | Stellung Automatik |
| 0x07 | Stellung Automatik |
| 0x09 | Stellung 1 |
| 0x0B | Stellung 0 |
| 0x0C | Stellung 2 |
| 0x0D | Stellung 1 |
| 0x0E | Stellung 2 |
| 0x0F | Signal ungültig |
| 0xFF | ungültiges Signal |

### TAB_UW_LWR_ERROR_REASON

| WERT | TEXT |
| --- | --- |
| 2 | LWR_DEFECT |
| 3 | LWR_OVER_TEMP |
| 4 | LWR_OVER_VOLT |
| 5 | LWR_UNDER_VOLT |
| 6 | LWR_SPI_DEFECT |

### TAB_UW_NVM_READ_OR_WRITE

| WERT | TEXT |
| --- | --- |
| 0x01 | READ |
| 0x02 | WRITE |

### TAB_UW_SCHLUESSEL_POSITION

| WERT | TEXT |
| --- | --- |
| 0 | Schlüssel 0 |
| 1 | Schlüssel 1 |
| 2 | Schlüssel 2 |
| 3 | Schlüssel 3 |
| 4 | Schlüssel 4 |
| 5 | Schlüssel 5 |
| 6 | Schlüssel 6 |
| 7 | Schlüssel 7 |
| 8 | Schlüssel 8 |
| 9 | Schlüssel 9 |
| 10 | Schlüssel 10 |
| 11 | Schlüssel 11 |
| 12 | Schlüssel 12 |
| 13 | Schlüssel 13 |
| 14 | Schlüssel 14 |
| 15 | Schlüssel 15 |
| 16 | Schlüssel 16 |
| 17 | Schlüssel 17 |
| 18 | Schlüssel 18 |
| 19 | Schlüssel 19 |

### TAB_UW_SHORTCUT_INFO

| WERT | TEXT |
| --- | --- |
| 1 | SC to Ground |
| 2 | SC to Battery |
| 3 | Floating SC |

### TAB_UW_STAT_LAMP_UND_SPG

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 Volt |
| 0x10 | 1 Volt |
| 0x20 | 2 Volt |
| 0x30 | 3 Volt |
| 0x40 | 4 Volt |
| 0x50 | 5 Volt |
| 0x60 | 6 Volt |
| 0x70 | 7 Volt |
| 0x80 | 8 Volt |
| 0x90 | 9 Volt |
| 0xA0 | 10 Volt |
| 0xB0 | 11 Volt |
| 0xC0 | 12 Volt |
| 0xD0 | 13 Volt |
| 0xE0 | 14 Volt |
| 0xF0 | 15 Volt |
| 0x01 | 0 Volt + AL_R ein |
| 0x11 | 1 Volt + AL_R ein |
| 0x21 | 2 Volt + AL_R ein |
| 0x31 | 3 Volt + AL_R ein |
| 0x41 | 4 Volt + AL_R ein |
| 0x51 | 5 Volt + AL_R ein |
| 0x61 | 6 Volt + AL_R ein |
| 0x71 | 7 Volt + AL_R ein |
| 0x81 | 8 Volt + AL_R ein |
| 0x91 | 9 Volt + AL_R ein |
| 0xA1 | 10 Volt + AL_R ein |
| 0xB1 | 11 Volt + AL_R ein |
| 0xC1 | 12 Volt + AL_R ein |
| 0xD1 | 13 Volt + AL_R ein |
| 0xE1 | 14 Volt + AL_R ein |
| 0xF1 | 15 Volt + AL_R ein |
| 0x02 | 0 Volt + AL_L ein |
| 0x12 | 1 Volt + AL_L ein |
| 0x22 | 2 Volt + AL_L ein |
| 0x32 | 3 Volt + AL_L ein |
| 0x42 | 4 Volt + AL_L ein |
| 0x52 | 5 Volt + AL_L ein |
| 0x62 | 6 Volt + AL_L ein |
| 0x72 | 7 Volt + AL_L ein |
| 0x82 | 8 Volt + AL_L ein |
| 0x92 | 9 Volt + AL_L ein |
| 0xA2 | 10 Volt + AL_L ein |
| 0xB2 | 11 Volt + AL_L ein |
| 0xC2 | 12 Volt + AL_L ein |
| 0xD2 | 13 Volt + AL_L ein |
| 0xE2 | 14 Volt + AL_L ein |
| 0xF2 | 15 Volt + AL_L ein |
| 0x03 | 0 Volt + AL_L + AL_R ein |
| 0x13 | 1 Volt + AL_L + AL_R ein |
| 0x23 | 2 Volt + AL_L + AL_R ein |
| 0x33 | 3 Volt + AL_L + AL_R ein |
| 0x43 | 4 Volt + AL_L + AL_R ein |
| 0x53 | 5 Volt + AL_L + AL_R ein |
| 0x63 | 6 Volt + AL_L + AL_R ein |
| 0x73 | 7 Volt + AL_L + AL_R ein |
| 0x83 | 8 Volt + AL_L + AL_R ein |
| 0x93 | 9 Volt + AL_L + AL_R ein |
| 0xA3 | 10 Volt + AL_L + AL_R ein |
| 0xB3 | 11 Volt + AL_L + AL_R ein |
| 0xC3 | 12 Volt + AL_L + AL_R ein |
| 0xD3 | 13 Volt + AL_L + AL_R ein |
| 0xE3 | 14 Volt + AL_L + AL_R ein |
| 0xF3 | 15 Volt + AL_L + AL_R ein |
| 0x04 | 0 Volt + BLK_R ein |
| 0x14 | 1 Volt + BLK_R ein |
| 0x24 | 2 Volt + BLK_R ein |
| 0x34 | 3 Volt + BLK_R ein |
| 0x44 | 4 Volt + BLK_R ein |
| 0x54 | 5 Volt + BLK_R ein |
| 0x64 | 6 Volt + BLK_R ein |
| 0x74 | 7 Volt + BLK_R ein |
| 0x84 | 8 Volt + BLK_R ein |
| 0x94 | 9 Volt + BLK_R ein |
| 0xA4 | 10 Volt + BLK_R ein |
| 0xB4 | 11 Volt + BLK_R ein |
| 0xC4 | 12 Volt + BLK_R ein |
| 0xD4 | 13 Volt + BLK_R ein |
| 0xE4 | 14 Volt + BLK_R ein |
| 0xF4 | 15 Volt + BLK_R ein |
| 0x05 | 0 Volt + AL_R + BLK_R ein |
| 0x15 | 1 Volt + AL_R + BLK_R ein |
| 0x25 | 2 Volt + AL_R + BLK_R ein |
| 0x35 | 3 Volt + AL_R + BLK_R ein |
| 0x45 | 4 Volt + AL_R + BLK_R ein |
| 0x55 | 5 Volt + AL_R + BLK_R ein |
| 0x65 | 6 Volt + AL_R + BLK_R ein |
| 0x75 | 7 Volt + AL_R + BLK_R ein |
| 0x85 | 8 Volt + AL_R + BLK_R ein |
| 0x95 | 9 Volt + AL_R + BLK_R ein |
| 0xA5 | 10 Volt + AL_R + BLK_R ein |
| 0xB5 | 11 Volt + AL_R + BLK_R ein |
| 0xC5 | 12 Volt + AL_R + BLK_R ein |
| 0xD5 | 13 Volt + AL_R + BLK_R ein |
| 0xE5 | 14 Volt + AL_R + BLK_R ein |
| 0xF5 | 15 Volt + AL_R + BLK_R ein |
| 0x06 | 0 Volt + AL_L + BLK_R ein |
| 0x16 | 1 Volt + AL_L + BLK_R ein |
| 0x26 | 2 Volt + AL_L + BLK_R ein |
| 0x36 | 3 Volt + AL_L + BLK_R ein |
| 0x46 | 4 Volt + AL_L + BLK_R ein |
| 0x56 | 5 Volt + AL_L + BLK_R ein |
| 0x66 | 6 Volt + AL_L + BLK_R ein |
| 0x76 | 7 Volt + AL_L + BLK_R ein |
| 0x86 | 8 Volt + AL_L + BLK_R ein |
| 0x96 | 9 Volt + AL_L + BLK_R ein |
| 0xA6 | 10 Volt + AL_L + BLK_R ein |
| 0xB6 | 11 Volt + AL_L + BLK_R ein |
| 0xC6 | 12 Volt + AL_L + BLK_R ein |
| 0xD6 | 13 Volt + AL_L + BLK_R ein |
| 0xE6 | 14 Volt + AL_L + BLK_R ein |
| 0xF6 | 15 Volt + AL_L + BLK_R ein |
| 0x07 | 0 Volt + AL_L + AL_R + BLK_R ein |
| 0x17 | 1 Volt + AL_L + AL_R + BLK_R ein |
| 0x27 | 2 Volt + AL_L + AL_R + BLK_R ein |
| 0x37 | 3 Volt + AL_L + AL_R + BLK_R ein |
| 0x47 | 4 Volt + AL_L + AL_R + BLK_R ein |
| 0x57 | 5 Volt + AL_L + AL_R + BLK_R ein |
| 0x67 | 6 Volt + AL_L + AL_R + BLK_R ein |
| 0x77 | 7 Volt + AL_L + AL_R + BLK_R ein |
| 0x87 | 8 Volt + AL_L + AL_R + BLK_R ein |
| 0x97 | 9 Volt + AL_L + AL_R + BLK_R ein |
| 0xA7 | 10 Volt + AL_L + AL_R + BLK_R ein |
| 0xB7 | 11 Volt + AL_L + AL_R + BLK_R ein |
| 0xC7 | 12 Volt + AL_L + AL_R + BLK_R ein |
| 0xD7 | 13 Volt + AL_L + AL_R + BLK_R ein |
| 0xE7 | 14 Volt + AL_L + AL_R + BLK_R ein |
| 0xF7 | 15 Volt + AL_L + AL_R + BLK_R ein |
| 0x08 | 0 Volt + BLK_L ein |
| 0x18 | 1 Volt + BLK_L ein |
| 0x28 | 2 Volt + BLK_L ein |
| 0x38 | 3 Volt + BLK_L ein |
| 0x48 | 4 Volt + BLK_L ein |
| 0x58 | 5 Volt + BLK_L ein |
| 0x68 | 6 Volt + BLK_L ein |
| 0x78 | 7 Volt + BLK_L ein |
| 0x88 | 8 Volt + BLK_L ein |
| 0x98 | 9 Volt + BLK_L ein |
| 0xA8 | 10 Volt + BLK_L ein |
| 0xB8 | 11 Volt + BLK_L ein |
| 0xC8 | 12 Volt + BLK_L ein |
| 0xD8 | 13 Volt + BLK_L ein |
| 0xE8 | 14 Volt + BLK_L ein |
| 0xF8 | 15 Volt + BLK_L ein |
| 0x09 | 0 Volt + AL_R + BLK_L ein |
| 0x19 | 1 Volt + AL_R + BLK_L ein |
| 0x29 | 2 Volt + AL_R + BLK_L ein |
| 0x39 | 3 Volt + AL_R + BLK_L ein |
| 0x49 | 4 Volt + AL_R + BLK_L ein |
| 0x59 | 5 Volt + AL_R + BLK_L ein |
| 0x69 | 6 Volt + AL_R + BLK_L ein |
| 0x79 | 7 Volt + AL_R + BLK_L ein |
| 0x89 | 8 Volt + AL_R + BLK_L ein |
| 0x99 | 9 Volt + AL_R + BLK_L ein |
| 0xA9 | 10 Volt + AL_R + BLK_L ein |
| 0xB9 | 11 Volt + AL_R + BLK_L ein |
| 0xC9 | 12 Volt + AL_R + BLK_L ein |
| 0xD9 | 13 Volt + AL_R + BLK_L ein |
| 0xE9 | 14 Volt + AL_R + BLK_L ein |
| 0xF9 | 15 Volt + AL_R + BLK_L ein |
| 0x0A | 0 Volt + AL_L + BLK_L ein |
| 0x1A | 1 Volt + AL_L + BLK_L ein |
| 0x2A | 2 Volt + AL_L + BLK_L ein |
| 0x3A | 3 Volt + AL_L + BLK_L ein |
| 0x4A | 4 Volt + AL_L + BLK_L ein |
| 0x5A | 5 Volt + AL_L + BLK_L ein |
| 0x6A | 6 Volt + AL_L + BLK_L ein |
| 0x7A | 7 Volt + AL_L + BLK_L ein |
| 0x8A | 8 Volt + AL_L + BLK_L ein |
| 0x9A | 9 Volt + AL_L + BLK_L ein |
| 0xAA | 10 Volt + AL_L + BLK_L ein |
| 0xBA | 11 Volt + AL_L + BLK_L ein |
| 0xCA | 12 Volt + AL_L + BLK_L ein |
| 0xDA | 13 Volt + AL_L + BLK_L ein |
| 0xEA | 14 Volt + AL_L + BLK_L ein |
| 0xFA | 15 Volt + AL_L + BLK_L ein |
| 0x0B | 0 Volt + AL_L + AL_R + BLK_L ein |
| 0x1B | 1 Volt + AL_L + AL_R + BLK_L ein |
| 0x2B | 2 Volt + AL_L + AL_R + BLK_L ein |
| 0x3B | 3 Volt + AL_L + AL_R + BLK_L ein |
| 0x4B | 4 Volt + AL_L + AL_R + BLK_L ein |
| 0x5B | 5 Volt + AL_L + AL_R + BLK_L ein |
| 0x6B | 6 Volt + AL_L + AL_R + BLK_L ein |
| 0x7B | 7 Volt + AL_L + AL_R + BLK_L ein |
| 0x8B | 8 Volt + AL_L + AL_R + BLK_L ein |
| 0x9B | 9 Volt + AL_L + AL_R + BLK_L ein |
| 0xAB | 10 Volt + AL_L + AL_R + BLK_L ein |
| 0xBB | 11 Volt + AL_L + AL_R + BLK_L ein |
| 0xCB | 12 Volt + AL_L + AL_R + BLK_L ein |
| 0xDB | 13 Volt + AL_L + AL_R + BLK_L ein |
| 0xEB | 14 Volt + AL_L + AL_R + BLK_L ein |
| 0xFB | 15 Volt + AL_L + AL_R + BLK_L ein |
| 0x0C | 0 Volt + BLK_L + BLK_R ein |
| 0x1C | 1 Volt + BLK_L + BLK_R ein |
| 0x2C | 2 Volt + BLK_L + BLK_R ein |
| 0x3C | 3 Volt + BLK_L + BLK_R ein |
| 0x4C | 4 Volt + BLK_L + BLK_R ein |
| 0x5C | 5 Volt + BLK_L + BLK_R ein |
| 0x6C | 6 Volt + BLK_L + BLK_R ein |
| 0x7C | 7 Volt + BLK_L + BLK_R ein |
| 0x8C | 8 Volt + BLK_L + BLK_R ein |
| 0x9C | 9 Volt + BLK_L + BLK_R ein |
| 0xAC | 10 Volt + BLK_L + BLK_R ein |
| 0xBC | 11 Volt + BLK_L + BLK_R ein |
| 0xCC | 12 Volt + BLK_L + BLK_R ein |
| 0xDC | 13 Volt + BLK_L + BLK_R ein |
| 0xEC | 14 Volt + BLK_L + BLK_R ein |
| 0xFC | 15 Volt + BLK_L + BLK_R ein |
| 0x0D | 0 Volt + BLK_L + BLK_R + AL_R ein |
| 0x1D | 1 Volt + BLK_L + BLK_R + AL_R ein |
| 0x2D | 2 Volt + BLK_L + BLK_R + AL_R ein |
| 0x3D | 3 Volt + BLK_L + BLK_R + AL_R ein |
| 0x4D | 4 Volt + BLK_L + BLK_R + AL_R ein |
| 0x5D | 5 Volt + BLK_L + BLK_R + AL_R ein |
| 0x6D | 6 Volt + BLK_L + BLK_R + AL_R ein |
| 0x7D | 7 Volt + BLK_L + BLK_R + AL_R ein |
| 0x8D | 8 Volt + BLK_L + BLK_R + AL_R ein |
| 0x9D | 9 Volt + BLK_L + BLK_R + AL_R ein |
| 0xAD | 10 Volt + BLK_L + BLK_R + AL_R ein |
| 0xBD | 11 Volt + BLK_L + BLK_R + AL_R ein |
| 0xCD | 12 Volt + BLK_L + BLK_R + AL_R ein |
| 0xDD | 13 Volt + BLK_L + BLK_R + AL_R ein |
| 0xED | 14 Volt + BLK_L + BLK_R + AL_R ein |
| 0xFD | 15 Volt + BLK_L + BLK_R + AL_R ein |
| 0x0E | 0 Volt + BLK_L + BLK_R + AL_L ein |
| 0x1E | 1 Volt + BLK_L + BLK_R + AL_L ein |
| 0x2E | 2 Volt + BLK_L + BLK_R + AL_L ein |
| 0x3E | 3 Volt + BLK_L + BLK_R + AL_L ein |
| 0x4E | 4 Volt + BLK_L + BLK_R + AL_L ein |
| 0x5E | 5 Volt + BLK_L + BLK_R + AL_L ein |
| 0x6E | 6 Volt + BLK_L + BLK_R + AL_L ein |
| 0x7E | 7 Volt + BLK_L + BLK_R + AL_L ein |
| 0x8E | 8 Volt + BLK_L + BLK_R + AL_L ein |
| 0x9E | 9 Volt + BLK_L + BLK_R + AL_L ein |
| 0xAE | 10 Volt + BLK_L + BLK_R + AL_L ein |
| 0xBE | 11 Volt + BLK_L + BLK_R + AL_L ein |
| 0xCE | 12 Volt + BLK_L + BLK_R + AL_L ein |
| 0xDE | 13 Volt + BLK_L + BLK_R + AL_L ein |
| 0xEE | 14 Volt + BLK_L + BLK_R + AL_L ein |
| 0xFE | 15 Volt + BLK_L + BLK_R + AL_L ein |
| 0x0F | 0 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x1F | 1 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x2F | 2 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x3F | 3 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x4F | 4 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x5F | 5 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x6F | 6 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x7F | 7 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x8F | 8 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0x9F | 9 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0xAF | 10 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0xBF | 11 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0xCF | 12 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0xDF | 13 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0xEF | 14 Volt + BLK_L + BLK_R + AL_L + AL_R ein |
| 0xFF | 15 Volt + BLK_L + BLK_R + AL_L + AL_R ein |

### TAB_UW_VERBAUORT_TAGE

| WERT | TEXT |
| --- | --- |
| 1 | Fahrertür/-seite (FT) |
| 2 | Beifahrertür/-seite (BFT) |
| 4 | Fahrertür/-seite hinten (FTH) |
| 8 | Beifahrertür/-seite hinten (BFTH) |
| 255 | unbekannt/ungültig |

### TAB_UW_ZSG_ELV_URSACHE_TIMEOUT_POWER_ON

| WERT | TEXT |
| --- | --- |
| 0 | Kein Status empfangen (Timeout EM_ELV_CMD) |
| 1 | Fehler-Status '0x1F' empfangen |
| 255 | Ungültig / Unbekannt |

### TAB_VERBAUORTTABELLE

| WERT | TEXT |
| --- | --- |
| 1 | Innenbeleuchtung Fußraum Fahrer vorne |
| 2 | Innenbeleuchtung Fußraum Fahrer hinten |
| 3 | Innenbeleuchtung Fußraum Beifahrer vorne |
| 4 | Innenbeleuchtung Fußraum Beifahrer hinten |
| 5 | Innenbeleuchtung Fahrertür vorne oben |
| 6 | Innenbeleuchtung Fahrertür vorne Mitte |
| 7 | Innenbeleuchtung Fahrertür vorne unten |
| 8 | Innenbeleuchtung Fahrertür vorne Kartentasche |
| 9 | Innenbeleuchtung Fahrertür hinten oben |
| 10 | Innenbeleuchtung Fahrertür hinten unten |
| 11 | Innenbeleuchtung Fahrertür hinten Kartentasche |
| 12 | Innenbeleuchtung Beifahrertür vorne oben |
| 13 | Innenbeleuchtung Beifahrertür vorne Mitte |
| 14 | Innenbeleuchtung Beifahrertür vorne unten |
| 15 | Innenbeleuchtung Beifahrertür vorne Kartentasche |
| 16 | Innenbeleuchtung Beifahrertür hinten oben |
| 17 | Innenbeleuchtung Beifahrertür hinten unten |
| 18 | Innenbeleuchtung Beifahrertür hinten Kartentasche |
| 19 | Innenbeleuchtung I-Tafel Fahrer oben |
| 20 | Innenbeleuchtung I-Tafel Fahrer unten |
| 21 | Innenbeleuchtung I-Tafel oben Mitte |
| 22 | Innenbeleuchtung I-Tafel unten Mitte |
| 23 | Innenbeleuchtung I-Tafel oben Beifahrer |
| 24 | Innenbeleuchtung I-Tafel unten Beifahrer |
| 25 | Innenbeleuchtung B-Säule Fahrer |
| 26 | Innenbeleuchtung B-Säule Beifahrer |
| 27 | Innenbeleuchtung Lehne Fahrersitz |
| 28 | Innenbeleuchtung Lehne Beifahrersitz |
| 29 | Innenbeleuchtung Centerstack |
| 30 | Innenbeleuchtung Mittelkonsole Ablagefach |
| 31 | Innenbeleuchtung Gangwahlschalter links |
| 32 | Innenbeleuchtung Gangwahlschalter rechts |

### TAB_VORWARNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | früh |
| 0x02 | spät |

### TAB_WAKEUP_SOURCES

| WERT | TEXT |
| --- | --- |
| 0x00 | ECUMA_DEFAULT |
| 0x01 | ECUMA_INIT |
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
| 0x1C | ECUMA_GW_FR |
| 0x20 | ECUMA_BS_CAN_ZSG |
| 0x21 | ECUMA_BS_CAN_FA |
| 0x22 | ECUMA_BS_LIN_A_R |
| 0x23 | ECUMA_BS_LIN_B_SB |
| 0x24 | ECUMA_BS_LIN_C_BEL |
| 0x25 | ECUMA_BS_LIN_D_SZL |
| 0x26 | ECUMA_BS_LIN_I_ABW_LATCH |
| 0x30 | ECUMA_TC_15WUP |
| 0x31 | ECUMA_TC_15_ON |
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
| 0x48 | ECUMA_LC_LIGHT_SW |
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
| 0xF0 | ECUMA_RESET_RESERVED0 |
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

### TAB_WASCHDUESENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0 | PWM Wert 0% |
| 1 | PWM Wert 25% |
| 2 | PWM Wert 50% |
| 3 | PWM Wert 75% |
| 4 | PWM Wert 100% |

### TAB_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Wischer aus |
| 0x01 | Wischer in Stufe 1 |
| 0x02 | Wischer in Stufe 2 |

### TAB_WISCHEREINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Einlernvorgang erfolgreich abgeschlossen |
| 0x01 | Einlernvorgang nicht erfolgreich abgeschlossen |
| 0x02 | Einlernvorgang noch nicht erfolgt |
| 0xFF | ungültig |

### TAB_WISCHER_LIN_EINLERNVORGANG

| WERT | TEXT |
| --- | --- |
| 0x01 | Initalisierung gestartet |
| 0x02 | Initalisierung läuft |
| 0x04 | Abbruch |

### TAB_WISCHER_RAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Rändel in Stufe 1 |
| 0x01 | Rändel in Stufe 2 |
| 0x02 | Rändel in Stufe 3 |
| 0x03 | Rändel in Stufe 4 |
| 0xFF | ungültiger Wert |

### TAB_ZSG_ART_BEDIENSTELLE_CA

| WERT | TEXT |
| --- | --- |
| 5 | CA-Toggletaster FT |
| 6 | CA-Toggletaster BFT |
| 7 | CA-Toggletaster FTH |
| 8 | CA-Toggletaster BFTH |
| 9 | TAGE FT - Entriegeln Leitung |
| 10 | TAGE BFT - Entriegeln Leitung |
| 11 | TAGE FTH - Entriegeln Leitung |
| 12 | TAGE BFTH - Entriegeln Leitung |
| 17 | Taster Zentralsichern Heckklappe (TZSHK) |
| 255 | Unbekannt |

### TAB_ZSG_ART_BEDIENSTELLE_ZV

| WERT | TEXT |
| --- | --- |
| 0 | Centerlock-Taster |
| 1 | CL-Wippe FT Entriegeln |
| 2 | CL-Wippe BFT Entriegeln |
| 3 | CL-Wippe FT Verriegeln |
| 4 | CL-Wippe BFT Verriegeln |
| 13 | Taster Entriegeln Heckklappe Innen(TOEHKI) |
| 14 | Taster Entriegeln Heckklappe Aussen(TOEHKA) |
| 15 | Taster Entriegeln Heckscheibe (TOEHS) |
| 16 | Taster Entriegeln Frontklappe Innen(TOEFKI) |
| 18 | Hotelschalter |
| 255 | Unbekannt |

### TAB_ZSG_ART_KLAPPE

| WERT | TEXT |
| --- | --- |
| 0 | Fahrertür |
| 1 | Beifahrertür |
| 2 | Fahrertür hinten |
| 3 | Beifahrertür hinten |
| 4 | Heckklappe |
| 5 | Heckscheibe |
| 6 | Frontklappe |
| 7 | Split-Door rechts |
| 8 | Split-Door links |
| 9 | Club-Door Fahrerseite |
| 10 | Club-Door Beifahrerseite |
| 255 | Unbekannt |

### TAB_ZSG_ART_KONTAKTE

| WERT | TEXT |
| --- | --- |
| 0 | Türkontakt FT |
| 1 | Türkontakt BFT |
| 2 | Türkontakt FTH/unten |
| 3 | Türkontakt BFTH/unten |
| 4 | Heckklappenkontakt |
| 5 | Heckscheibenkontakt |
| 6 | Motorhaubenkontakt |
| 7 | Frontklappenkontakt |
| 8 | Kontakt Splitdoor rechts |
| 9 | Kontakt Splitdoor links |
| 10 | Kontakt Clubdoor Fahrerseite oben |
| 11 | Kontakt Clubdoor Fahrerseite unten |
| 12 | Kontakt Clubdoor Beifahrerseite oben |
| 13 | Kontakt Clubdoor Beifahrerseite unten |
| 14 | Vorrastkontakt Soft-Close-Automatik |
| 15 | Fanghakenverriegelung (über Bus von LIM) |
| 16 | Türkontakt FT hinten oben |
| 17 | Türkontakt BFT hinten oben |
| 255 | Unbekannt |

### TAB_ZSG_BF_WECK_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | ECUMA_DEFAULT |
| 0x01 | ECUMA_IM_NOTINITIALIZED |
| 0x0F | ECUMA_DIAGSESSION_ACTIVE |
| 0x10 | ECUMA_GW_15_ON |
| 0x11 | ECUMA_GW_15WUP |
| 0x12 | ECUMA_GW_POWER_ON |
| 0x13 | ECUMA_GW_ETHERNET_OBD_ACT |
| 0x15 | ECUMA_GW_CAN_ZSG |
| 0x16 | ECUMA_GW_CAN_FA |
| 0x17 | ECUMA_GW_CAN_B |
| 0x18 | ECUMA_GW_CAN_B2 |
| 0x19 | ECUMA_GW_CAN_IK |
| 0x1B | ECUMA_GW_CAN_D |
| 0x1C | ECUMA_GW_FLEXRAY |
| 0x1D | ECUMA_GW_ETHERNET_INT_WAKEUP |
| 0x1F | ECUMA_BS_CAN_CAS |
| 0x21 | ECUMA_BS_CAN_FA |
| 0x22 | ECUMA_BS_LIN_A |
| 0x23 | ECUMA_BS_LIN_B |
| 0x24 | ECUMA_BS_LIN_C |
| 0x25 | ECUMA_BS_LIN_D |
| 0x26 | ECUMA_BS_LIN_I |
| 0x27 | ECUMA_BS_LIN_E |
| 0x28 | ECUMA_BS_LIN_F |
| 0x29 | ECUMA_BS_LIN_G |
| 0x2A | ECUMA_BS_LIN_H |
| 0x2E | ECUMA_TC_PWF_STATE_CHANGE |
| 0x2F | ECUMA_TC_PWF_PERM |
| 0x30 | ECUMA_TC_15WUP |
| 0x31 | ECUMA_TC_15_ON |
| 0x32 | ECUMA_TC_15N_ON |
| 0x34 | ECUMA_TC_SSPA |
| 0x35 | ECUMA_TC_SSPB |
| 0x36 | ECUMA_TC_IBS_WUP |
| 0x37 | ECUMA_TC_PLOCK |
| 0x38 | ECUMA_TC_CLUTCH |
| 0x39 | ECUMA_TC_BRAKE |
| 0x3A | ECUMA_TC_30B_SCD |
| 0x3B | ECUMA_TC_30B_ON |
| 0x3C | ECUMA_TC_R_ON |
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
| 0x51 | ECUMA_CL_OP_DRD |
| 0x52 | ECUMA_CL_OP_PSD |
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
| 0x62 | ECUMA_LC_LOW_BEAM_ACTIVE |
| 0x63 | ECUMA_LC_OP_PARKLIGHT |
| 0x64 | ECUMA_LC_PARKLIGHT |
| 0x65 | ECUMA_LC_INDICATOR |
| 0x66 | ECUMA_LC_HEADLIGHT_FLASHER |
| 0x70 | ECUMA_PW_OP_SZT_LIN |
| 0x71 | ECUMA_PW_OP_PSD_LIN |
| 0x72 | ECUMA_PW_OP_DRDR_LIN |
| 0x73 | ECUMA_PW_OP_PSDR_LIN |
| 0x74 | ECUMA_PW_OP_RSCR_CAB_LIN |
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
| 0x98 | ECUMA_AC_WATERPUMPADD_ACTIVE |
| 0x99 | ECUMA_AC_WATERVALVE_ACTIVE |
| 0x9A | ECUMA_PF_HORN |
| 0x9B | ECUMA_WW_ACTIVE |
| 0x9C | ECUMA_SH_ACTIVE |
| 0x9D | ECUMA_HC_EXMI_ACTIVE |
| 0x9E | ECUMA_PF_BB_ACTIVE |
| 0x9F | ECUMA_LC_OP_FOG_LIGHT |
| 0xA0 | ECUMA_LC_OP_REAR_FOG_LIGHT |
| 0xA1 | ECUMA_PF_OP_SARAH |
| 0xA2 | ECUMA_PF_OP_FES |
| 0xA3 | ECUMA_PF_OP_PDC |
| 0xA4 | ECUMA_PF_OP_SV |
| 0xA5 | ECUMA_PF_OP_SPOILER |
| 0xA6 | ECUMA_PF_OP_NIVEAU |
| 0xA7 | ECUMA_TC_OP_MSA |
| 0xA8 | ECUMA_PF_OP_MFL_VOL |
| 0xA9 | ECUMA_PF_OP_MFL_SONDERFUNKTION |
| 0xAA | ECUMA_PF_OP_MFL_RAENDEL |
| 0xAB | ECUMA_PF_OP_MFL_TEL |
| 0xAC | ECUMA_PF_OP_MFL_PTT |
| 0xAD | ECUMA_PF_OP_BEAUDIO |
| 0xB3 | ECUMA_PF_OP_SH_FAH |
| 0xB4 | ECUMA_PF_OP_SH_BFH |
| 0xB5 | ECUMA_PF_OP_SEATMEM_FA |
| 0xB6 | ECUMA_PF_OP_SEATMEM_FAH |
| 0xB7 | ECUMA_PF_OP_SEATMEM_BF |
| 0xB8 | ECUMA_PF_OP_SEATMEM_BFH |
| 0xB9 | ECUMA_PF_OP_S_SVBF_FOND |
| 0xE8 | ECUMA_INT_UNDERVOLTAGE |
| 0xE9 | ECUMA_INT_INVALID_ISR |
| 0xF0 | ECUMA_RESET_RESERVED0 |
| 0xF1 | ECUMA_RESET_RESERVED1 |
| 0xF2 | ECUMA_RESET_RESERVED2 |
| 0xF3 | ECUMA_RESET_RESERVED3 |
| 0xF4 | ECUMA_RESET_ILEGADR |
| 0xF5 | ECUMA_RESET_CODETRAP |
| 0xF6 | ECUMA_RESET_LVT |
| 0xF7 | ECUMA_RESET_SW |
| 0xF8 | ECUMA_RESET_CHKSTOP |
| 0xF9 | ECUMA_RESET_INT_WDG |
| 0xFA | ECUMA_RESET_LOSSOFPLL |
| 0xFB | ECUMA_RESET_OSCILLATOR |
| 0xFC | ECUMA_RESET_EXT |
| 0xFD | ECUMA_RESET_POWERON |
| 0xFE | ECUMA_RESET_UNKOWN |
| 0xFF | ECUMA_INVALID |

### TAB_ZSG_DIGITAL_EINGANG_PEGEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Low-Pegel |
| 0x01 | High-Pegel |
| 0xFF | Signal ungültig / unplausibel |

### TAB_ZSG_FBD_BATTERIEZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Batteriespannung sehr niedrig |
| 1 | Batteriespannung niedrig |
| 2 | Batteriespannung niedrig/mittel |
| 3 | Batteriespannung mittel |
| 4 | Batteriespannung mittel/gut |
| 5 | Batteriespannung gut |
| 6 | Batteriespannung gut/sehr gut |
| 7 | Batteriespannung sehr gut |
| 10 | Batterie schwach - Kommunikation ohne Authentisierung |
| 11 | Batterie gut - Kommunikation ohne Authentisierung |
| 255 | nicht definiert |

### TAB_ZSG_FBD_BATTERIEZUSTAND_CA_RKE

| WERT | TEXT |
| --- | --- |
| 0 | Batteriespannung niedrig |
| 1 | Batteriespannung ok |
| 255 | nicht definiert |

### TAB_ZSG_FBD_RDC_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler vorhanden |
| 1 | RDC-Empfangs-Funktion aktiviert aber FBD nicht im RDC-Mode |
| 2 | FBD_Spannung zu gering |
| 3 | uC EEPROM Fehler |
| 4 | Transceiver Fehler |
| 5 | Transceiver Konfiguration Fehler |
| 6 | Kanal 1 Empfang nicht möglich |
| 7 | Kanal 1 Senden nicht möglich |
| 8 | Kanal 2 Empfang nicht möglich |
| 9 | Kanal 2 Senden nicht möglich |
| 10 | Kanal 3 Empfang nicht möglich |
| 11 | Kanal 3 Senden nicht möglich |
| 12 | Antenne am Transceiver nicht  |
| 13 | Drahtloser Fahrzeugangriff detektiert |
| 14 | RF Security Key ungültig |
| 15 | DTC vorhanden |
| 255 | Fehlerinformation nicht ermittelbar |

### TAB_ZSG_GRUND_ABSCHALTUNG_KL30F

| WERT | TEXT |
| --- | --- |
| 1 | Zu viele Wecker |
| 2 | Einschlafverhinderer |
| 3 | Erreichen der unteren Startfähigkeitsgrenze |
| 4 | Ruhestromproblem |
| 5 | Abschaltverhinderer 'Parklicht' vorliegend |
| 6 | Abschaltverhinderer 'Standlicht' vorliegend |
| 7 | Abschaltverhinderer 'Warnblinken' vorliegend |
| 8 | Abschaltverhinderer  Klemme 30B defekt  vorliegend |
| 9 | Abschaltverhinderer 'Klemme 30B aktiv' vorliegend |
| 10 | Abschaltverhinderer 'Relaiskleber Fensterheber' |
| 11 | Abschaltverhinderer 'Nachricht Steuerung Stromanforderung KL30F ausgefallen'(Licht ausgefallen) |
| 12 | Abschaltverhinderer 'Interner Fehler FEM' vorliegend z.B. Bistabiles Relais nicht abschaltbar |
| 13 | Standzeit erreicht |
| 14 | Abschaltverhinderer 'ECall' vorliegend |
| 15 | PCU500 (Nachladefunktion) aktiv |
| 254 | Kein Ein- oder Abschaltverhinderer vorliegend |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_ZSG_KM_AUTH_PATH

| WERT | TEXT |
| --- | --- |
| 0x01 | AUTH_PATH_CA - Schlüsselsuche nur über CA (HFM-Suche) |
| 0x02 | AUTH_PATH_TR_NFC - Schlüsselsuche nur über induktive Kopplung (Transponderspule, NFC) |
| 0x04 | AUTH_PATH_OTHER - Schlüsselsuche über sonstige Pfade (unscharf z.B. Teleservice/CarSharing) |
| 0x08 | AUTH_PATH_RESERVED - reserviert |
| 0xFF | AUTH_PATH_INVALID - Ungültig |

### TAB_ZSG_KM_AUTH_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTHTYPE_PING - IDG-Suche ohne Keyposition und ohne Authentisierung (nur AC) |
| 0x01 | AUTHTYPE_NO_AUTH - IDG-Suche ohne Authentisierung |
| 0x02 | AUTHTYPE_CL_AUTH - ZV-Authentisierung mit Chall/Resp |
| 0x03 | AUTHTYPE_EWS_AUTH - Authentisierung über EWS |
| 0xFF | AUTHTYPE_INVALID ¿ Ungültig |

### TAB_ZSG_KM_IMMEDIATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Antwort erst nach erfolgter Schlüsselsuche |
| 0x01 | Sofortige Antwort |
| 0xFF | Ungültig |

### TAB_ZSG_KM_PWF_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schlüssel sicher in Innenraum |
| 0x01 | Schlüssel sehr wahrscheinlich im Innenraum |
| 0x02 | Schlüsselanwesenheit unbekannt |
| 0x03 | Schlüssel nicht gefunden |
| 0x04 | Nachlauf aktiv |
| 0x05 | Nachlauf nicht aktiv |
| 0xFF | Ungültig |

### TAB_ZSG_KM_QOS

| WERT | TEXT |
| --- | --- |
| 0x00 | QOS_EXPLICIT - Schlüsselsuche wird über alle verfügbaren Resourcen ausgeführt |
| 0x01 | QOS_IMPLICIT_RELIABLE - Schlüsselsuche wird über alle verfügbare Resourcen ausgeführt, falls Position nicht bereits zuverlässig vorliegt |
| 0x02 | QOS_IMPLICIT_PROBABLE - Schlüsselsuche wird über alle verfügbaren Resourcen ausgeführt, falls Position nicht bereits zuverlässig oder wahrscheinlich vorliegt |
| 0xFF | QOS_INVALID ¿ Ungültig |

### TAB_ZSG_KM_REQUESTER

| WERT | TEXT |
| --- | --- |
| 0x01 | ID_VAM - Keystatus Request durch VaMaster |
| 0x02 | ID_TCM - Keystatus Request durch TcMaster |
| 0x03 | ID_EWS - Keystatus Request durch IM/EWS |
| 0x04 | ID_DIAG - Keystatus Request durch Diagnosejob |
| 0x05 | ID_PWM - Keystatus Request durch PwMaster |
| 0x06 | ID_RCS - Keystatus Request durch RCS für LF-Ping |
| 0x07 | ID_DFZ - Keystatus Request durch DFZ |
| 0x08 | ID_SD - Keystatus Request durch SD |
| 0x80 | ID_DIENSTE - Keystatus Request durch Dienstebotschaft Service-Handler |
| 0xF0 | ID_INTERN -  Keystatus Request wurde durch KM selbst gestartet |
| 0xFF | Ungültig/Unbekannt |

### TAB_ZSG_KM_SEARCHMODE

| WERT | TEXT |
| --- | --- |
| 0x03 | SEARCHMODE_CE_DRD - Schlüsselsuche FAT |
| 0x04 | SEARCHMODE_CE_DRDR - Schlüsselsuche FATH |
| 0x05 | SEARCHMODE_CE_PSD - Schlüsselsuche BFT |
| 0x06 | SEARCHMODE_CE_PSDR - Schlüsselsuche BFTH |
| 0x07 | SEARCHMODE_TRUNK_OUTER - Schlüsselsuche Elektrisch Öffnen/Schließen HK/HS |
| 0x0D | SEARCHMODE_TRUNK_INNER - Schlüsselsuche Kofferraum (verwendet für Diagnose COM Test) |
| 0x0E | SEARCHMODE_CG_FRONT - CG-Schlüsselsuche MiKo vorne (verwendet für Diagnose) |
| 0x0F | SEARCHMODE_CG_MIDDLE - CG-Schlüsselsuche MiKo hinten (verwendet für Dignose) |
| 0x10 | SEARCHMODE_CG_REAR - CG-Schlüsselsuche Hutablage (verwendet für Diagnose) |
| 0x11 | SEARCHMODE_TRUNK_INNER_LEFT - Schlüsselsuche Kofferraum linke Antenne (verwendet für Diagnose COM Test) |
| 0x12 | SEARCHMODE_TRUNK_INNER_RIGHT - Schlüsselsuche Kofferraum rechte Antenne (verwendet für Diagnose COM Test) |
| 0x15 | SEARCHMODE_COMPARTMENT  - CA-Schlüsselsuche Innenraum (Fahrgastraum oder Fahrgastraum/Kofferraum) |
| 0x16 | SEARCHMODE_TRUNK_OUTER_INNER - CA-Schlüsselsuche Schließen HK/HS (Kofferraum oder Kofferraum/Fahrgastraum) |
| 0x18 | SEARCHMODE_FRONT_OUTER_INNER - CA-Schlüsselsuche Schließen FK (Cable storage) |
| 0x80 | SEARCHMODE_PING - LF-Ping-Schlüsselsuche auf CE-Antennen (s. SEARCHMODE_PING_LB/RB/LR) |
| 0x81 | SEARCHMODE_SD - LF-Ping-Schlüsselsuche auf CG-Antennen |
| 0x82 | SEARCHMODE_DIAG_ANT_CALIB - Schlüsselsuche auf allen Antennen (verwendet für Diagnose) |
| 0x83 | SEARCHMODE_NEXTIDG - Schlüsselsuche triggert nächste Authentisierung bei Authenitiserung aller IDG (reserviert für CASS-interne Verwendung) |
| 0x84 | SEARCHMODE_INT_BROADCAST - Schlüsselsuche Innenraum (auf allen Antennen wird gesucht, auch dann, wenn IDG bereits gefunden wurde) |
| 0x85 | SEARCHMODE_ANT_TEST - Schlüsselsuche auf allen Antennen, auch dann, wenn IDG bereits gefunden wurde (verwendet für Diagnose) |
| 0x86 | SEARCHMODE_PING_LB - Schlüsselsuche LF-Ping Left/Bumper (reserviert für CASS-interne Verwendung) |
| 0x87 | SEARCHMODE_PING_RB - Schlüsselsuche LF-Ping Right/Bumper (reserviert für CASS-interne Verwendung) |
| 0x88 | SEARCHMODE_PING_LR - Schlüsselsuche LF-Ping Left/Right (reserviert für CASS-interne Verwendung) |
| 0x89 | SEARCHMODE_NEXT_ANTCHANNEL - Schlüsselsuche wechselt Antenne bzw. RF-Kanal für Wiederholungen (Robustheitsstrategie, reserviert für CASS-interne Verwendung) |
| 0xFF | Ungültig/Unbekannt |

### TAB_ZSG_KM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Idle |
| 0x01 | Keysearch active |
| 0x02 | Transpondersearch active |
| 0xFF | Ungültig |

### TAB_ZSG_STATUS_SERVICE_SCHLUESSELDATEN_UPDATE

| WERT | TEXT |
| --- | --- |
| 0 | Update noch nicht abgeschlossen |
| 1 | Update fehlerfrei abgeschlossen |
| 2 | Update abgeschlossen, Fehler sind aufgetreten |
| 255 | ungültig / unplausibel |

### TAB_ZSG_UW_FEHLERART_KLEMMENSTATUS

| WERT | TEXT |
| --- | --- |
| 1 | Inkonsistenter ALIVE-Wert |
| 2 | Inkonsistentes invers redundantes Klemmensignal |

### TAB_ZSG_UW_TC_FUSI_KL50_MSA

| WERT | TEXT |
| --- | --- |
| 1 | RQ_MSA_ENG_STA_2 nicht 0x2 |
| 2 | RQ_MSA_ENG_STA_1 nicht 0x2 |
| 3 | CRC_ST_ENG_STA_AUTO - CRC-Fehler |
| 4 | ALIV_ST_ENG_STA_AUTO - Alive-Fehler |

### TAB_ZSG_ZUSTAND_BEDIENSTELLE

| WERT | TEXT |
| --- | --- |
| 0 | Leitungsbruch/Kurzschluss Batteriespannung |
| 2 | Nicht Betätigt |
| 4 | Betätigt |
| 6 | Kurzschluss Masse |
| 8 | Nicht verbaut |
| 255 | Signal ungültig / unplausibel |

### TAB_ZSG_ZUSTAND_BEDIENSTELLE_AKTION

| WERT | TEXT |
| --- | --- |
| 2 | Nicht Betätigt |
| 4 | Betätigt |

### TAB_ZSG_ZV_AKTION_MASTER

| WERT | TEXT |
| --- | --- |
| 1 | ENTRIEGELN |
| 2 | VERRIEGELN |
| 4 | SEL_ER_FT |
| 5 | SEL_ER_HKL |
| 6 | SEL_ER_HS |

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

### TAB_ZV_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 1 | Entriegeln |
| 2 | Verriegeln |
| 3 | Sichern |
| 4 | Selektiv Entriegeln |
| 5 | logisch Entriegeln |
| 6 | elektr. Öffnen (Heckklappenlift) |
| 100 | elektr. Öffnen (Heckklappenlift) |
| 101 | Heckscheibe öffnen |
| 102 | Kofferraum schließen |
| 150 | ZV-Aktion nicht durchgeführt, aufgrund offener Tür |
| 151 | ZV-Aktion nicht durchgeführt, da Waschstraßenmodus aktiv |
| 152 | Heckklappe Öffnen/Schließen nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 153 | Heckscheibe Öffnen nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 154 | Frontklappe Öffnen nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 155 | ZV-Aktion nicht durchgeführt, da Vorbedingung Remote Door Lock nicht erfüllt |
| 156 | ZV-Aktion nicht durchgeführt, da Vorbedingung Remote Door Unlock nicht erfüllt |
| 157 | ZV-Aktion nicht durchgeführt, da Wiederholsperre aktiv |
| 158 | ZV-Aktion nicht durchgeführt, da Vorbedingung zum Entsichern per Center Lock Taster nicht erfüllt |
| 159 | Diagnose nicht durchgeführt, da Vorbedingung für Diagnoseansteuerung nicht erfüllt |
| 160 | Entriegeln während Crash nicht durchgeführt, da Fahrzeug gesichert |
| 161 | ZV-Aktion nicht durchgeführt, da Kofferraum nicht entriegelt |
| 162 | ZV-Aktion nicht durchgeführt, da falscher ZV-Zustand |
| 163 | Wiederverriegeln nach Zeit nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 164 | Tür Ent-/Verriegeltrigger wurde verworfen |
| 165 | Trigger Klappe Öffnen/Schließen wurde verworfen |
| 166 | ZV-Aktion nicht durchgeführt, da Codierdatenfehler |
| 167 | ZV-Aktion gespeichert, wird später durchgeführt |
| 168 | ZV-Aktion nicht durchgeführt, da FeTraFla-Modus aktiv |
| 169 | ZV-Aktion Sicherheitsfahrzeug verworfen, da kein Sicherheitsfahrzeug |
| 170 | ZV-Aktion nicht durchgeführt, da Fahrzeug in Crash |
| 171 | ZV-Aktion nicht durchgeführt, da kein Schlüssel gefunden |
| 172 | ZV-Aktion nicht durchgeführt, da Dach geöffnet |
| 173 | ZV-Aktion nicht durchgeführt, da Herstellung Türsignale nach Reset/Aufwachen fehlgeschlagen |
| 174 | ZV-Aktion nicht durchgeführt, da maximale Anzahl Fehlversuche erreicht |
| 175 | ZV-Aktion nicht durchgeführt, da Parameter Diagnose-Antwort ungültig |
| 176 | ZV-Aktion nicht durchgeführt, da Sekundärcrash geblockt |
| 177 | ZV-Aktion nicht durchgeführt, da Schlüsselanfrage abgelehnt (busy) |
| 178 | ZV-Aktion nicht durchgeführt, da Sicherheitsfahrzeug |
| 255 | ungültig |

### TAB_ZV_URSACHE

| WERT | TEXT |
| --- | --- |
| 0 | Smart Opener |
| 1 | Fernbedienungstaste |
| 2 | ZV-Ansteuerung über Diagnose |
| 3 | Zentralverriegelungstaster - Centerlock |
| 4 | Geschwindigkeit grösser 16 kmh |
| 5 | Entriegeln bei KL15 aus |
| 6 | Verriegeln nach Timeout ohne Klappenkontaktänderung |
| 7 | CA-Anforderung Entriegeln (Reversieren) |
| 8 | Crash-Entriegeln |
| 9 | RemoteDoorUnlock |
| 10 | RemoteDoorLock |
| 11 | CA-Verriegeln (Reversieren bei IDG-Sichern im Innenraum) |
| 12 | Schließzylinder FAT entriegeln |
| 13 | Schließzylinder FAT verriegeln |
| 14 | Fernbedienungstaste HKL öffnen |
| 15 | Zustandsänd. Türkontakt - Reversieren aufgrund mechanischer Asynchronität |
| 16 | Sicherheitsfahrzeug Entriegeln |
| 17 | Sicherheitsfahrzeug Verriegeln |
| 18 | Sicherheitsfahrzeug Selektiv Entriegeln |
| 19 | Sicherheitsfahrzeug sichern |
| 20 | TAGE FT |
| 21 | TAGE BFT |
| 22 | TAGE FTH |
| 23 | TAGE BFTH |
| 24 | MANTRA - Manipulierter Transponder |
| 25 | Übergang von Zustand Sichern in Verriegelt durch KL15 ein |
| 26 | Übergang von Zustand Sichern in Verriegelt durch Schlüssel an der Transponderspule |
| 27 | CA-Anforderung Sichern |
| 28 | CA-Anforderung Heckklappe/Heckscheibe (Reversieren) |
| 29 | Taster Entriegeln Heckklappe Innen (TOEHKI) |
| 30 | Taster Entriegeln Heckklappe Außen (TOEHKA) |
| 31 | CL-Wippe FT |
| 32 | Taster Zentralsichern Heckklappe (TZSHK) |
| 33 | Taster Entriegeln Frontklappe Außen (TOEFKA) |
| 34 | Taster Entriegeln Frontklappe Innen (TOEFKI) |
| 35 | Taster Entriegeln Heckscheibe (TOEHS) |
| 36 | Fernbedienungstaste Frontklappe Öffnen |
| 37 | CA-Anforderung Sichern nicht zulässig |
| 38 | CA-Anforderung Heckklappe/-scheibe reversieren |
| 39 | CA-Anforderung Toggle-Taster |
| 40 | Öffnen Heckklappe Sicherheitsfahrzeug |
| 41 | HK-Wippe |
| 42 | Letzte Tür geschlossen |
| 43 | Letzte Klappe geschlossen |
| 44 | Fernbedienungstaster Sichern nicht zulässig |
| 100 | vorherige ZV-Aktion noch nicht abgeschlossen |
| 255 | Ungültig/Unbekannt |

### TAB_ZV_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Status noch unbekannt |
| 1 | mindestens eine Tür entriegelt - keine Tür verriegelt oder gesichert |
| 2 | mindestens eine Tür verriegelt - keine Tür entriegelt |
| 3 | mindestens eine Tür entriegelt - mindestens eine Tür verriegelt |
| 4 | alle Türen gesichert |
| 5 | gesichert - mindestens eine Tür entriegelt |
| 6 | teilweise gesichert - Zwischenzustand oder Fehlerzustand |
| 7 | teilweise gesichert - Zwischenzustand oder Fehlerzustand |
| 255 | ungültig |

### EINH_WEGSTRECKE

| WERT | TEXT |
| --- | --- |
| 0 | Default |
| 1 | Kilometer |
| 2 | Meilen |
| 3 | Signal ungültig |
| FF | ungültiger Wert |

### EINH_SPRACHE

| WERT | TEXT |
| --- | --- |
| 0 | Keine Sprache |
| 1 | Deutsch |
| 2 | Englisch (UK) |
| 3 | Englisch (US) |
| 4 | Spanisch |
| 5 | Italienisch |
| 6 | Französisch |
| 7 | Flämisch |
| 8 | Niederländisch |
| 9 | Arabisch |
| 10 | Chinesisch Traditionell |
| 11 | Chinesisch Simple |
| 12 | Koreanisch |
| 13 | Japanisch |
| 14 | Russisch |
| 15 | Französisch (CA) |
| 16 | Spanisch (US) |
| 17 | Portugiesisch |
| 18 | Polnisch |
| 19 | Griechisch |
| 20 | Türkisch |
| 21 | Ungarisch |
| 22 | Rumänisch |
| 23 | Schwedisch |
| 24 | Portugiesisch (BR) |
| 25 | Kantonesisch Traditionell |
| 26 | Kantonesisch Simple |
| 27 | Slowakisch |
| 28 | Tschechisch |
| 29 | Slowenisch |
| 30 | Dänisch |
| 31 | Norwegisch |
| 32 | Finnisch |
| 255 | Signal ungültig |

### EINH_LUFTDRUCK

| WERT | TEXT |
| --- | --- |
| 0 | Default / Signal ungültig |
| 1 | Bar |
| 2 | kPa |
| 3 | Psi |
| FF | ungültiger Wert |

### EINH_TEMP

| WERT | TEXT |
| --- | --- |
| 0 | Default |
| 1 | Grad C |
| 2 | Grad K |
| 3 | Signal ungültig |
| FF | ungültiger Wert |

### EINH_ZEITFORMAT

| WERT | TEXT |
| --- | --- |
| 0 | Default |
| 1 | 12 h |
| 2 | 24 h |
| 3 | Signal ungültig |
| FF | ungültiger Wert |

### EINH_KRAFTSTOFFART

| WERT | TEXT |
| --- | --- |
| 0 | Default / Signal ungültig |
| 1 | Liter |
| 2 | Gallonen (UK) |
| 3 | Gallonen (US) |
| FF | ungültiger Wert |

### EINH_DATUMSFORMAT

| WERT | TEXT |
| --- | --- |
| 0 | Default |
| 1 | Tag.Monat.Jahr |
| 2 | Monat/Tag/Jahr |
| 3 | Tag/Monat/Jahr |
| 4 | Tag-Monat-Jahr |
| 5 | Jahr.Monat.Tag |
| 6 | Jahr/Monat/Tag |
| 7 | Jahr-Monat-Tag |
| 8 | Signal ungültig |
| FF | ungültiger Wert |
