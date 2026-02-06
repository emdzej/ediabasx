# BDC_G11.prg

## General

|  |  |
| --- | --- |
| File | BDC_G11.prg |
| Type | PRG |
| Jobs | 134 |
| Tables | 757 |
| Origin | BMW EI-640 Michael.Roesler |
| Revision | 12.002 |
| Author | ContinentalAutomotiveGmbH I_BS Oliver.Siegmund, ContinentalAuto |
| ECU Comment | generation with ZEDIS export Bdc2015SwlData-006_046_020 from 27.07.2017 valid for S15A-18-03-430 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Body Domain Controller |  |  |
| ORIGIN | string | BMW EI-640 Michael.Roesler |  |  |
| REVISION | string | 12.002 |  |  |
| AUTHOR | string | ContinentalAutomotiveGmbH I_BS Oliver.Siegmund, ContinentalAuto |  |  |
| COMMENT | string | generation with ZEDIS export Bdc2015SwlData-006_046_020 from 27.07.2017 valid for S15A-18-03-430 |  |  |
| PACKAGE | string | 1.80 |  |  |
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

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### STATUS_ANF_ZUSTAND_FZG

Der Job dient zum Auslesen des Historiespeichers für Fahrzeug-Zustandsanforderungen über die Dienstenachricht "Dynamische PDU Switch=157 (Anforderung Zustand Fahrzeug)". Die Dienstenachricht wird u.a. von der RCP-Funktion verwendet. JobHeaderFormat 0x170F STATUS_ANF_ZUSTAND_FZG

_No arguments._

### STATUS_BATTERIEVORSCHAEDIGUNGSHISTORIE

Der Job dient zum Auslesen des Historienspeichers für die Batterievorschädigunshistorie. JobHeaderFormat 0xD2DE BATTERIEVORSCHAEDIGUNGSHISTORIE_LESEN

_No arguments._

### STATUS_CAS_INIT_LOC_DATE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

_No arguments._

### STATUS_CA_BEDIENSTELLEN

Dieser Job dient zum Auslesen des Zustands aller Comfort-Access-Bedienstellen. Dies sind alle diskreten Taster und Schalter (z.B. CA-Toggletaster), nicht jedoch über LIN/Subbus angebundene Komponenten (TAGE-Datenleitung). Hinweise: Der Verbau einzelner Tasters im Fahrzeug ist per Codierung im ZSG festgelegt. 0xDA8A CA_BEDIENSTELLEN

_No arguments._

### STATUS_ECUMA_AWAKE

EcuMA-Awake-Status (Liste alles "RUN"- und "POST_RUN"-Requests und Einschlafverhinde  0x5102 _ECUMA_AWAKE

_No arguments._

### STATUS_ECUMA_HISTORIE

EcuMA-History-Ringspeicher mit Liste aller letzten Weck-Quellen, Weckhäufigkeit, Betriebssekundenzähler und letzter empfangenem km-Status  0x5100 _ECUMA_HISTORIE

_No arguments._

### STATUS_ELSV

Status ELSV UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_ELSV_STATISTIK

Status ELSV Statistikzaehler UDS: $22 (0xD087) ReadDataByIdentifier

_No arguments._

### STATUS_EM_FE_MODE

Auslesen der Aktivierungsliste für den Fe-Mode.  0x5106 _EM_FE_MODE

_No arguments._

### STATUS_EM_SPIELSCHUTZ

0x5107 _EM_SPIELSCHUTZ

_No arguments._

### STATUS_FAHRGESTELLNUMMER

Lesen der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

_No arguments._

### STATUS_FAHRPROFIL

(0xD0F2)

_No arguments._

### STATUS_FBD_EMPFAENGER

Dieser Job dient zum Auslesen des Status des FBD-Empfängers 0xDAC9 FBD_EMPFAENGER

_No arguments._

### STATUS_FBD_FEHLER

0xAC5E FBD_FEHLER

_No arguments._

### STATUS_FBD_TELEGRAMM

0xAC59 STATUS_FBD_TELEGRAMM Status des letzten Empfangenes Funk-Telegramms Hinweis: innerhalb der letzten 10 Sekunden.

| Name | Type | Description |
| --- | --- | --- |
| FBD_EMPFAENGER_EMPFANGSMODUS | string | Das Argument enthält den Empfangsmodus, der aktiviert werden soll. Hinweise: - Explizites Zurückschalten in den Normal-Betrieb durch Argument NORMALMODUS. - Beim Einschlafen des ZSG wird automatisch ein Update des Modus durchgeführt. - Zuordnung erfolgt gemäß Tabelle TAB_FBD_POWERMODE_ARG |

### STATUS_FH_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F020,F021,F022,F023,F030,F031,F032,F033,F034,F036,F015,F016,I001,F056,F057,F045,I012,G011,G012,G030,G031 |
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

### STATUS_FH_THERMOMONITOR_AKTIV

STATUS_FH_THERMOMONITOR_AKTIV

_No arguments._

### STATUS_HW_OPTIONEN_VARIANTE

Der Job dient zum Auslesen der BDC HW Variante und zeigt damit die Optionen der mit der HW verfügbaren Funktionen.  0x5112 HW_OPTIONEN_VARIANTE

_No arguments._

### STATUS_IM

0xD260 IM

_No arguments._

### STATUS_IM_ADEV_DATA

0xA260 IM_ADEV_DATA

| Name | Type | Description |
| --- | --- | --- |
| TAB_POS | string | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle. |

### STATUS_IM_ANLIEFERZUSTAND

0xD265 IM_ANLIEFERZUSTAND

_No arguments._

### STATUS_IM_CURRENT_TRSP

0xD263 IM_CURRENT_TRSP

_No arguments._

### STATUS_IM_FREQ_CONF

0xD266 IM_FREQ_CONF

_No arguments._

### STATUS_IM_WUP

0xD267 IM_WUP

_No arguments._

### STATUS_INNENLICHT_AUTOADRESSIERUNGSFEHLER

Der Job dient zur Bestimmung des Verbauortes eines LED LIN Teilnehmer nach Autoadressierungsfehler Modus: Default

_No arguments._

### STATUS_JBR_STATISTIK

Status JBR Statistikzaehler UDS: $22 (0xDB42) ReadDataByIdentifier Dieser Job liefert den Zustand der Statistikzähler: - Relaiszustandswidersprüche: 30F1-Relais, 30F2-Relais, 30B1-Relais, 30B2-Relais, HHS-Relais, 30B5-Relais, 30B6-Relais, 30B7-Relais - Kurzschlusszähler Lastklemmentreiber: KL30B_DxE, KL30B_ACSM, KL15N

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

Status ELSV Spannung Der Aufruf gibt die aktuelle Klemmenspannung des ELSV SG in mV zurück. UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_KLEMMEN_HISTORIE

Der Job dient zum Auslesen des Klemmen-Historiespeichers des CAS. Der Historienspeicher gibt den eingenommenen Klemmenzustand, das Transitions-Ereignis (d.h. Anforderer bzw. Ursache für einen Klemmenwechsel) sowie den Zeitpunkt des Klemmenwechsels wieder. JobHeaderFormat 0xDC5C STATUS_KLEMMEN_HISTORIE

_No arguments._

### STATUS_KURZSCHLUSSABSCHALTUNG

Kurzschluss-Status aller angeschlossenen Lampenausgänge STATUS_KURZSCHLUSSABSCHALTUNG (0x4503)

_No arguments._

### STATUS_KURZSCHLUSSCOUNTER_ABS

Kurzschluss-Counter des angegebenen Leuchtenausgangs STATUS_KURZSCHLUSSCOUNTER_ABS (0x4514)

_No arguments._

### STATUS_LEUCHTENAUSGANG_DIGITAL

Digitaler Status (ein / aus) aller angeschlossenen Leuchtenausgänge Documented in STATUS_LEUCHTENAUSGANG_DIGITAL (0x4500)

_No arguments._

### STATUS_LEUCHTEN_BETRIEBSDAUER

Betriebsminuten der Leuchten pro Ausgang (Solange die angeschlossene Lampe IO ist und angesteuert wird, muss die Betriebsdauer gemessen werden) STATUS_LEUCHTEN_BETRIEBSDAUER (0x4505)

_No arguments._

### STATUS_LIMP_HOME_ANALYSE

Status der LimpHomeAnalyse STATUS_LIMP_HOME_ANALYSE (0x4517)

_No arguments._

### STATUS_NFC_READER_STATUS

0xA263 NFC_READER_STATUS Der Job dient zum Auslesen des Status eines NFC-Readers. Der anzusprechende Reader wird per Argument NFC_READER_SELECT ausgewählt. Wird kein Argument angegeben, so wird per Default der Reader Innen Vorne ausgewählt.

| Name | Type | Description |
| --- | --- | --- |
| NFC_READER_SELECT | string | Auswahl des abzufragenden NFC-Readers. Wird kein Argument angegeben, so wird per Default der Reader Innen Vorne ausgewählt. Zuordnung erfolgt gemäß Tabelle TAB_NFC_READER_ID |

### STATUS_RCS_BATTERIESTATUS

0xDACB RCS_BATTERIESTATUS Batteriestatus aller angelernten ID-Geber und Telestarthandsender. Hinweis: Jeder IDG/THS hat ein intern nichtflüchtig gespeichertes Batterie-Status-Byte das mittels dieses Jobs ausgegeben wird.

_No arguments._

### STATUS_RDU_RDL_INFO

Dieser Job dient dazu die Daten aller im Infospeicher des CAS abgespeicherten RDU- und RDL-Anforderungen auszulesen. Hinweise: RDU/RDL-Anforderungen  sowohl erfolgreiche als auch fehlgeschlagene - werden als einzelne Einträge im Infospeicher des CAS abgelegt. JobHeaderFormat STATUS_RDU_RDL_INFO

_No arguments._

### STATUS_SCHLUESSELSUCHEN_HISTORIE

Der Job dient zum Auslesen des Historienspeichers für Schlüsselsuchen. Hinweise: - Der Job gibt für jeden Historieneintrag einen eigenen EDIABAS-Ergebnissatz zurück. - Anzahl der Einträge: 20 - Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste  0xD2DD STATUS_SCHLUESSELSUCHEN_HISTORIE

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
| TAB_INDEX | unsigned char | Das Argument zur Auswahl des Schlüssels (Position) gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION |

### STATUS_STANDNUTZUNG_HISTORIE_10

Der Job dient zum Auslesen des Standnutzungshistorienspeichers. Es werden die 10 jüngsten (= aktuellsten) Historienspeicher-Datensätze von insgesamt 40 maximal verfügbaren zurückgegeben. Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. Es werden immer 10 vollständige Datensätze ausgegeben. D.h. wurde ein Datensatz noch nicht geschrieben (z.B. neues Fahrzeug oder Historie per Diagnosejob gelöscht), dann werden in allen Results eines Historiendatensatzes die Defaultbelegung 0xFF ... 0xFF eingetragen (z.B. STAT_KILOMETERSTAND_WERT = FF FF FF FF). 0x2534 STATUS_STANDNUTZUNG_HISTORIE_10

_No arguments._

### STATUS_STANDNUTZUNG_HISTORIE_40

Der Job dient zum Auslesen des Standnutzungshistorienspeichers. Es werden alle 40 Historienspeicher-Datensätze zurückgegeben. Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. Es werden immer 40 vollständige Datensätze ausgegeben. D.h. wurde ein Datensatz noch nicht geschrieben (z.B. neues Fahrzeug oder Historie per Diagnosejob gelöscht), dann werden in allen Results eines Historiendatensatzes die Defaultbelegung 0xFF ... 0xFF eingetragen (z.B. STAT_KILOMETERSTAND_WERT = FF FF FF FF). 0x2535 STATUS_STANDNUTZUNG_HISTORIE_40

_No arguments._

### STATUS_SW_COMPONENTS

Ausgabe der SW-Komponenten mit Versionsinfo soweit unterstützt.  0x5110 _SW_COMPONENTS

_No arguments._

### STATUS_THS_FFB_DATEN

0xAC62 THS_FFB_DATEN

| Name | Type | Description |
| --- | --- | --- |
| INDEX | unsigned char | Das Argument enthält die Kennzahl für die Auswahl des zu lesenden Telestart-Handsenders oder Fond-Fernbedienung. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_THS_FFB_POSITION |

### STATUS_WCA_STATUS

0xD26B WCA_STATUS Der Job dient zum Auslesen des aktuellen Status der Wireless Charging Ablage.

_No arguments._

### STATUS_ZV_AKTUELL

Auslesen des aktuellen Status des Zentralverriegelungsmasters. STATUS_ZV (0xDAC7)

_No arguments._

### STATUS_ZV_BEDIENSTELLEN

Dieser Job dient zum Auslesen des Zustands aller Zentralverriegelungsbedienstellen. Dies sind alle diskreten Taster und Schalter (z.B. Centerlocktaster), nicht jedoch über LIN/Subbus angebundene Komponenten (z.B, IDG). Hinweise: Der Verbau einzelner Tasters im Fahrzeug ist per Codierung im ZSG festgelegt. 0xDA51 STATUS_ZV_BEDIENSTELLEN

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

### STEUERN_CAS_INIT_LOC_DATE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

| Name | Type | Description |
| --- | --- | --- |
| INIT_DAY | unsigned char | Argument Tag CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-31. |
| INIT_MONTH | unsigned char | Argument Monat CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-12. |
| INIT_YEAR | unsigned int | Argument Jahr CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 2000-9999. |
| INIT_LOCATION | string | Das Argument enthält den Ort der Schlüssel-Initialisierung. Hinweise: - Format: 4 Zeichen ASCII - Beispiele: 0240 = Werk 2.4, 0220 = Werk 2.2, 0100 = Werk München, EDGF = Ersatzteilplatz Dingolfing |
| INIT_STATION | string | Das Argument enthält die BMW-spezifische Kennung der Anlernstation (4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit, ...). Hinweise: - Format: 4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit - Beispiele: DC22, DA21, DN01, ... |

### STEUERN_ECUMA_HISTORIE

Clear the Wakeup history memory (EcuMA-History-Ringspeicher).  0x5100 _ECUMA_HISTORIE

_No arguments._

### STEUERN_ELSV_DENORMIEREN

ELSV_Denormierung_START UDS: $31 01 StartRoutine

_No arguments._

### STEUERN_ELSV_NORMIERUNG

ELSV_Normierung_start UDS: $31 01 StartRoutine UDS: $31 02 StopRoutine UDS: $31 03 RequestRoutineResults

| Name | Type | Description |
| --- | --- | --- |
| STEUERPARAMETER | string | Normierungs-Subfunktion 'STR' = Start 'STPR' = Stop 'RRR' = ReadRoutineResults |

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

Löscht den Denormierlogger STEUERN_FH_DENORMIERUNGS_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FH_MOTORSTOP_LOGGER_LOESCHEN

Löscht den Logger für Abbruch Motorlauf. Der DID muss aus dem SG-Spezifischen Bereich kommen. FH_MOTORSTOP_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FH_REVERSIER_LOGGER_LOESCHEN

Löscht den Reversierlogger FH_REVERSIER_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FH_THERMOMONITOR_AKTIV

STEUERN_FH_THERMOMONITOR_AKTIV

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL HEX format (0xXX) |
| AKTION | string | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle: Zuordnung siehe Tabelle TAB_THERMOMONITOR_SETZEN |

### STEUERN_IM_ADEV_DATA

0xD264 IM_ADEV_DATA

| Name | Type | Description |
| --- | --- | --- |
| TAB_POS | string | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle. |
| ID | string | Das Argument enthält die ID des Authentisierungs-Devices. Hinweis: Die TRSP-ID wird ggf. mit führenden  Nullen auf 6-Byte Länge ergänzt. Beispiel: '00 00 12 34 56 78' 6-byte binary Hinweise: Alle Werte ausser 'FF FF FF FF FF FF' = Gültige Authentisierungs-Device-ID. 'FF FF FF FF FF FF'= unbekannt Beispiel '12 34 AB EF 98 76' Ausgabe als 6-Byte hex-Wert. |
| TYPE | string | Das Argument enthält den Typ des Authentisierungs-Devices. |
| DISABLED | string | Das Argument enthält den Status, ob das Authentisierungs-Device gesperrt (disabled) ist. |

### STEUERN_IM_ANLIEFERZUSTAND_START

0xA262 IM_ANLIEFERZUSTAND_START

| Name | Type | Description |
| --- | --- | --- |
| RESET_MODE | string | Das Argument legt fest welche Inhalte im ZSG in den Anlieferzustand versetzt werden sollen. Die Wegfahrsperre-Daten werden immer gelöscht. |
| AUTH_DATA | string | Das (optionale) Argument enthält einen Authentisierungscode. |

### STEUERN_IM_DATA

0xD261 IM_DATA

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Das Argument dient zur Auswahl der auszuführenden Aktion. |
| DATA1 | string | Das Argument  enthält die zu schreibenden Daten (Teil 1). |
| DATA2 | string | Das Argument  enthält die zu schreibenden Daten (Teil 2). |

### STEUERN_IM_FREQ_CONF

0xD266 IM_FREQ_CONF

| Name | Type | Description |
| --- | --- | --- |
| INIT_FREQ | string | Das Argument enthält die Kennzahl für Funkfrequenz. |
| TRSP_GEN | string | Das Argument (optional) enthält die Art der verwendeten Transponder. Default ist HTPro Gen2 (35UP). Alle Werte ausser 2 und 8 werden wie 8 interpretiert (DEFAULT immer 35UP). Hinweis: Werte sind vorzusehen. In erster Implementierung wird intern fest mit den Default-Werten für 35UP gearbeitet. |
| HASHMODE | string | Das Argument (optional) enthält den Hashmode. Default ist 35UP_HASH. Alle Werte ausser 2 und 8 werden wie 8 interpretiert (DEFAULT immer 35UP). Werte sind vorzusehen. In erster Implementierung wird fest mit den Default-Werten für 35UP gearbeitet. |

### STEUERN_IM_OP

0xD262 IM_OP

| Name | Type | Description |
| --- | --- | --- |
| MODE1 | string | Das Argument dient zur Auswahl der auszuführenden Aktion. |
| MODE2 | string | Das Argument dient zur Bestätigung der auszuführenden Aktion. |

### STEUERN_IM_TRSP_INIT

0xA261 IM_TRSP_INIT

| Name | Type | Description |
| --- | --- | --- |
| TAB_POS | string | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle. |
| ID | string | Das Argument enthält die ID des Authentisierungs-Devices. Hinweis: Die TRSP-ID wird ggf. mit führenden  Nullen auf 6-Byte Länge ergänzt. Beispiel: '00 00 12 34 56 78' Hinweise: Alle Werte ausser 'FF FF FF FF FF FF' = Gültige Authentisierungs-Device-ID. 'FF FF FF FF FF FF'= unbekannt Beispiel '12 34 AB EF 98 76' Ausgabe als 6-Byte hex-Wert. |
| INIT_MODE | string | Festlegen des Anlernmodus (optional). |

### STEUERN_IM_WUP

0xD267 IM_WUP

| Name | Type | Description |
| --- | --- | --- |
| FBD_WAKEUP | string | Das Argument enthält das zu schreibende FBD-Wakeup-Pattern |

### STEUERN_INIT_KURZSCHLUSSCOUNTER_ABS

Der Job dient zum Rücksetzen der Kurzschlusscounter. _INIT_KURZSCHLUSSCOUNTER_ABS (0x4513)

_No arguments._

### STEUERN_JBR_STATISTIK_RESET

ELSV_Denormierung_START UDS: $2E WriteDataByIdentifier

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

### STEUERN_LEUCHTENAUSGANG_DIGITAL

Setzen des Leuchtenausgang auf vorgegebenen Wert Mögliche Elemente siehe Tabelle TAB_AUSGANG_LEUCHTEN Documented in STEUERN_LEUCHTENAUSGANG_DIGITAL (0x4501)

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

### STEUERN_RESET_LICHT_UEBERSPANNUNGSCOUNTER

Der Job dient zum Rücksetzen des Überspannungsschutz-Zählers. STEUERN_RESET_LICHT_UEBERSPANNUNGSCOUNTER (0x4523)

_No arguments._

### STEUERN_SCHLUESSEL_SPERRE

Job zum Sperren und wieder freigeben von Schlüsseln. Der Job ist nur zulässig, wenn sich gerade ein gültiger Schlüssel an der Transponder-Spule befindet. Der aktuelle Schlüssel an der Transponder-Spule kann nicht gesperrt oder freigegeben werden. JobHeaderFormat 0xDC73 STEUERN_SCHLUESSEL_SPERRE

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Auswahl des Schlüssels in der Transponder-Tabelle. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION |
| SCHL_SPERRE | unsigned char | Auswahl der Aktion Sperren oder Freigeben des gewählten Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE - Es sind nur die Werte 0 oder 1 zulässig. |
| SCHL_LOESCHEN | unsigned char | Das Argument dient zur Auswahl der Aktion Löschen eines zuvor gesperrten Schlüssels. 0 = Schlüssel nicht aus Tabelle löschen. 1 = Schlüssel aus Tabelle löschen (Voraussetzung: Schlüssel ist zuvor erfolgreich gesperrt worden). |

### STEUERN_THS_FFB_INIT

Dieser Job dient zum Anstoßen der Initialisierung des Telestart-Handsender(THS) und der Fond-Fernbedienung(FFB).  0xAC61 THS_FFB_INIT

| Name | Type | Description |
| --- | --- | --- |
| INDEX | string | Das Argument zur Auswahl der Position an der der Telestarthandsender oder die Fond-Fernbedienung angelernt werden soll. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_THS_FFB_POSITION |
| ID | string | Das Argument enthält die zu schreibende ID des THS/FFB. Zum Löschen eines angelernten THS/FFB wird der Wert "FF FF FF FF" verwendet. Unterstützte Eingabeformate: "0x01,0x02,0x03,0x04" oder "01,02,03,04" oder "0x01 0x02 0x03 0x04" oder "01 02 03 04" |

### STEUERN_ZUSTAND_FAHRZEUG

Ändert den aktuellen PWF Zustand im BDC2-BODY. Auch Ausschalten des Motors möglich! Nur im Werkstatt- oder Fertigungsmodus. JobHeaderFormat 0x1031 STEUERN_ZUSTAND_FAHRZEUG

| Name | Type | Description |
| --- | --- | --- |
| ARG_ZUSTAND_FAHRZEUG | string | Das Argument gibt an in welchen PWF Zustand geschaltet werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle PWF_ZUSTAND_FAHRZEUG_ARG TEXT - PARKEN_BN_NIO - PARKEN_BN_IO - STANDFUNKTIONEN_KUNDE_NICHT_IM_FZG - WOHNEN - PRUEFEN_ANALYSE_DIAGNOSE - PARKEN_BN_IO_VERK - FAHRBEREITSCHAFT_BEENDEN |

### _STATUS_FUSI_SAFEMECH_INTERVENTION

Der Entwicklerjob dient dazu, ein vergangenes Eingreifen des FuSi Safe-Mechanismus anzuzeigen. Zweck: Support zum Test/Validierung der Safety Mechanismen  0x5121 _FUSI_SAFEMECH_INTERVENTION

_No arguments._

### _STATUS_JTAG_ENCRYPTED

Liest das 64 Byte lange verschlüsselte JTAG Passwort aus.  0x510C _JTAG_ENCRYPTED

_No arguments._

### _STEUERN_JTAG_ENCRYPTED

Nur im BTLD-Mode und bei JTAG nicht gesperrt. Nur einmalig ( kein Wiederholung )  0x510C _JTAG_ENCRYPTED

| Name | Type | Description |
| --- | --- | --- |
| INDEX | unsigned char | Steuert den Index des verschlüsselten Passworts |
| JTAG_PASSWORD_ENCRYPTED | string | 64 Bytes langes verschlüsseltes Passwort (Elliptic Curve Cryptography) |

### _STEUERN_JTAG_RANDOM

Für Testzwecke, falls JTAG offen. Nur im BTLD wenn JTAG nicht gesperrt, EwsSk unlock und gelöscht ist  0x510D _JTAG_RANDOM

| Name | Type | Description |
| --- | --- | --- |
| JTAG_PASSWORD_RANDOM | binary | Das Passwort muss 16 Bytes lang sein. Individueller Schlüssel (0xAA.... AA = Permanent Lock) |

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
| 0x570C | Satellit Upfront mitte | 0 |
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
| 0x7680 | Durchreiche Partition Wall | 1 |
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

### AGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Neueste ERROR_INFO |
| 0x01 | Vorletzte ERROR_INFO |
| 0x02 | Älteste ERROR_INFO |

### ARG_0X1006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLOCK_NR | + | - | 0-n | - | unsigned char | - | TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt die Blocknummer des auszulesenen Blocks an. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR. |

### ARG_0X100A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_ID | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle VerbauortTabelle |

### ARG_0X102F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSEMODUS | + | - | 0-n | high | unsigned char | - | PWF_MESSEMODUS | - | - | - | - | - | Das Argument gibt an in welchen Fahrzeugzustand  geschaltet werden soll. |

### ARG_0X1032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_STATE | + | - | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | - | - | Steuerung der TAS-Nutzung |

### ARG_0X1033_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_REQUEST | + | - | 0-n | high | unsigned int | - | TASU_REQUEST_TAB | - | - | - | - | - | auszuführendes Kommando |

### ARG_0X2304_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Kein Reset Counter Spiegelheizung Aktivierungen wegen NSC 0x01: Reset Counter Spiegelheizung Aktivierungen wegen NSC |

### ARG_0X4005_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UPDATE_MODUS | + | - | 0-n | - | unsigned char | - | TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS | 1.0 | 1.0 | 0.0 | - | - | Festlegen des Update-Modus (welche Daten werden vom CAS aus dem Fahrzeug aktualisiert und wie werden sie übertragen). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS. |

### ARG_0X4506_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_AUSGANG_LEUCHTEN | - | - | - | - | - | Element aus Lampenmapping. Übergeben werden kann sowohl die Ausgangs-ID (hex) als auch die Kurzbezeichnung des Ausgangs, (wie in ZSG_LC_35539 definiert), für den die Betriebsstundendauer zurückgesetzt werden soll. Bsp: 0x01 o. AL_L für Abblendlicht links 0x02 o. AL_R für Abblendlicht rechts ... 0x1C o. NSL_L für Nebelschlusslicht licht Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN_RESET |

### ARG_0X4509_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12H_TIMER | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | 12h Timer |

### ARG_0X450A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAGCTRBLCAFSHOM_CURVERAD | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -2000.0 | 2000.0 | Vorgabe virtueller Kurvenradius |
| DIAGCTRBLCAFSHOM_VEL | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 250.0 | Vorgabe virtueller Ego-Geschwindigkeit |
| DIAGCTRBLCAFSHOM_STEA | ° | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -90.0 | 90.0 | Vorgabe virtueller effektiver Lenkwinkel Vorderachse |

### ARG_0X4530_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_WERT_1 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Das Argument enthält den ersten PWM Wert |
| PWM_WERT_2 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Das Argument enthält den zweiten PWM Wert |
| ZYKLUS_ZEIT | 0-n | high | unsigned char | - | TAB_ZYKLUS_ZEIT | - | - | - | - | - | Das Argument enthält die Zykluszeit, also die Zeit zwischen dem Wechsel zwischen den beiden PWM Werten |
| MODUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Das Argument enthält den Modus für das gleichzeitige Wechseln des PWM Wertes. 0 = Alle Lampen wechseln gleichzeitig den PWM Wert 1 = Die Lampen wechseln nicht gleichzeitig den PWM Wert |
| ZEIT | ms | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65536.0 | Das Argument enthält die Zeitdauer in der die Licht Disco aktiv ist |
| BYTE_7 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserviert für zusätzliche Informationen |
| BYTE_8 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserviert für zusätzliche Informationen |

### ARG_0X4532_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_AUSGANG_LEUCHTEN | - | - | - | - | - | Das Argument enthält die ID des diskreten Leuchtenausgangs |

### ARG_0X4800_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_INNENLICHT | 1.0 | 1.0 | 0.0 | - | - | Element aus Tabelle TAB_INNENLICHT |
| AKTION | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Leuchtkraft in %, Wertebereich 0 - 100% |

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
| ECUMA_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | - | - | - | - | - | ECUMA_ID |

### ARG_0X5121_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument zum Löschen der FuSi Safe-Mechanismus Eingriff Flags. |

### ARG_0X5200_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLL_PARAMETER_SET_DATA | DATA | high | data[43] | - | - | 1.0 | 1.0 | 0.0 | - | - | This argument reads a LF parameter set |

### ARG_0X5201_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLL_PARAMETER_INDEX_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | this argument is used to write the index number of a LF parameter set. |

### ARG_0X5209_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLL_CONFIG_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | This argument is used to read the PASE LL configuration |

### ARG_0X5210_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLL_ANTENNA_ERROR_CONFIGURATION_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | This argument is used to determine the PASE-LL behaviour when antenna defects are recognized |

### ARG_0X5211_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | this argument is used to write the index number of a ICM request. |

### ARG_0X5212_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the status of the current control out of the ICM. |

### ARG_0X5213_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[54] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the parameters for the antenna currents calculation. |

### ARG_0X5214_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[33] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the parameters for the IPSense. |

### ARG_0X5217_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the configuration of the manchester coding. (inverted, not inverted) |

### ARG_0X5218_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[18] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the antenna configuration for the extended paramter sets. |

### ARG_0X5219_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the configuration for sequential LF sending on up to 4 LF antennas. |

### ARG_0X5220_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | DATA | high | data[56] | - | - | 1.0 | 1.0 | 0.0 | - | - | Writes the ATIC164 configuration register. |

### ARG_0X5222_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Simuliert den LHZ Taster  0: 500ms LHZ-Taste aus  1: 500ms LHZ-Taste betätigt |

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

### ARG_0XA182_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SERVICEPOSITION | 1.0 | 1.0 | 0.0 | - | - | Angabe der Position |

### ARG_0XA2DD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | - | - | - | - | - | Das Argument gibt an welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen |

### ARG_0XA532_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABGLEICHWERT_C0_VO_WERT_1 | + | - | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -255.0 | 255.0 | Messewert C0_vo |
| STAT_ABGLEICHWERT_C0_HI_WERT_1 | + | - | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -255.0 | 255.0 | Messewert C0_hi |

### ARG_0XA533_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_AUSGANG_LEUCHTEN | 1.0 | 1.0 | 0.0 | - | - | Auswahl des Ausgangs |

### ARG_0XAC51_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEAKTIVIERUNGSGESCHWINDIGKEIT | + | - | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 50.0 | Das Argument gibt an bei welcher Geschindigkeit die Funktion KL15-Abschaltung wieder aktiviert werden soll. Hinweise: - Mit Argument = 0 soll die KL-15-Abschaltung sofort wieder aktiviert werden können. - Mit Argument = 1 - 50 wird die KL15-Abschaltung unterdrücken bis nächstes Mal Fahrzeuggeschwindigkeit über xx Kmh. |

### ARG_0XAC53_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHL_NUM | + | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | - | - | Das Argument dient zur Auswahl des Schlüssels mit dem kommuniziert werden soll. Hinweise: - 0-19 = Schlüsselposition Transponder-Tabelle - 255 = Beliebiger Schlüssel |
| CA_ANTENNE | + | - | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_ARG | - | - | - | - | - | Das Argument dient zur Auswahl der CA-Antenne über welche die Kommunikation in Richtung Schlüssel stattfinden soll. Hinweise: - 1= IRV (Innenraum vorn)  - 2= IRH (Innenraum hinten) - 3= FT (Fahrertür/-seite) - 4= BFT (Beifahrertür/-seite) - 5= KR (Kofferraum) - 6= Reserve, Vorhalt - 7= SF (Stoßfänger) - 9= IR (Innenraum IRV+IRH) |

### ARG_0XAC57_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_ZSG_ZV_AKTION_MASTER | - | - | - | - | - | Das Argument enthält die auszuführende ZV-Aktion.  Mögliche Argumente sind:  0=keine Aktion 1=Entriegeln 2=Verriegeln 4=Selektiv Entriegeln Fahrertür 5=Selektiv Entriegeln Heckklappe (ab L7) 6=Selektiv Entriegeln Heckscheibe (ab L7) |

### ARG_0XAC5B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | unsigned char | - | TAB_TRSP_AKTIVIERUNG | 1.0 | 1.0 | 0.0 | - | - | Das (optionale) Argument dient dazu die Transponderspule zu aktivieren oder deaktivieren. 0 = Transponderspule für 10 Sekunden aktivieren (default) 1 = Transponderspule sofort deaktivieren Hinweis: Wird das Argument nicht angegeben, so wird der Defaultwert 0 verwendet. |

### ARG_0XAC60_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWF_ZUSTAND_VOR_EINSCHLAFEN | + | - | 0-n | high | unsigned char | - | TAB_PWF_ZUSTAND_VOR_WARTEZEIT | - | - | - | - | - | Das Argument gibt an, in welchen PWF Zustand vor Beginn der Wartezeit geschaltet werden soll. |

### ARG_0XD071_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | - | - | - | - | - | 0: LED AUS 1: LED EIN für 1 Sekunde |

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
| LAENGE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 %: Vollständig eingefahren (bis Softstop) 100 %: Vollständig ausgefahren (bis Softstop) |
| HOEHE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 %: oberer Anschlag (Softstop)   100 %: unterer Anschlag (Softstop) |

### ARG_0XD18C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD18F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Kurzhubfunktion sperren 1: Kurzhub freischalten |

### ARG_0XD1CC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SITZEXT_ORT | 0-n | high | unsigned char | - | TAB_SITZEXT_ORT | - | - | - | - | - | Verbauort: welcher LIN slave ist betroffen |
| LED_TYP | 0-n | high | unsigned char | - | TAB_SITZEXT_LED | - | - | - | - | - | Welche LED soll angesteuert werden. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED aus   1: LED ein  |

### ARG_0XD220_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Simulation Taster 0: Taster nicht betätigt 1: Taster bettätigt |

### ARG_0XD25D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0...Deaktivierung der Lichtsperre (Lichtfunktion freigegeben) 1...Aktivierung der Lichtsperre (Lichtunterdrückung ein) |

### ARG_0XD298_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | ZEIT= 1-2000 in ms für Hupe ein; 0= Hupe aus |

### ARG_0XD30A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_AKTION_ROLLO_HECK | - | - | - | - | - | 0: keine Aktion;  1: Ansteuerung Heckrollo einschalten (Heckrollo verfährt bis Block. Erneute Ansteuerung führt zu Richtungswechsel);  2: Heckrollo ausfahren (Heckrollo verfährt bis Block);  3: Heckrollo einfahren (Heckrollo verfährt bis Block) |

### ARG_0XD30B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD312_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ansteuerung Fahrerseite hinten ausschalten;  1: Ansteuerung Fahrerseite hinten einschalten |

### ARG_0XD315_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ansteuerung Beifahrerseite hinten ausschalten; 1: Ansteuerung Beifahrerseite hinten einschalten |

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
| MEM_POS | 0-n | - | signed int | - | TAB_SPIEGELMEM_POS | - | - | - | - | - | Angabe der Memoryposition 1-3: - Werte 1 und 2 entsprechen Taste 1 und 2; -Wert 0x3 'Schlüssel' wird als 'aktuelle Position' interpretiert: Wird dieser Wert ausgewählt, so wird i. a. nichts passieren, da die Spiegel schon in dieser Position stehen. |
| KEY | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter KEY ist überflüssig (wird nicht ausgewertet). Es kann von der Exmi Applikation keine Profil- bzw. Schlüsselumschaltung ausgelöst werden.  |

### ARG_0XD338_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | signed int | - | TAB_SPIEGELMEM_POS | - | - | - | - | - | Angabe der Memoryposition 1-3. Wert 0x3 'Schlüssel' wird als 'aktuelle Position' interpretiert |
| KEY | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter KEY ist überflüssig (wird nicht ausgewertet). Es kann von der Exmi Applikation keine Profil- bzw. Schlüsselumschaltung ausgelöst werden. |
| POS_LI_HORIZONTAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel links horizontale Position |
| POS_LI_VERTIKAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel links vertikale Position |
| POS_RE_HORIZONTAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel rechts horizontale Position |
| POS_RE_VERTIKAL | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel rechts vertikale Position |

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

### ARG_0XD3E9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25.0 | Ansteuerdauer in Sekunden (0=AUS) |
| MUSTER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vibrationsmuster:  0 = keine Vibrationsausgabe 1 = Vibrationsausgabe |

### ARG_0XD3EF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CARGO_ANTIRUTSCHMATTE_MODE_ARG | - | - | - | - | - | Dieser Diagnosejob dient zum Steuern der Antirutschmatte. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Für die Dauer der Diagnose soll eine Ansteuerzeit (Timeout) implementiert werden. Die Dauer des Timeouts soll vom Anwender einstellbar zwischen 1 und 30 Sekunden betragen. Der Timeout soll mit der Ansteuerung der Diagnose zurückgesetzt werden. Der Job wechselt nach dem Timeout automatisch wieder zur Kundenfunktion/Automatik |

### ARG_0XD3F3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNGSZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | - | - | '1' = Aktivierung der HOD-Elektronik (Überschreiben der Bus-Anforderung) '0' = Durchschleifen der Bus-Anforderung (keine Aktivierung per Diagnose) |

### ARG_0XD500_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1: Setzen der Winkelposition 0: Keine Aktion |

### ARG_0XD519_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Berechnung: akt.MMI-Offset =(( x-(((maxHelligkeit - MinHelligkeit - MaxOffset) / 100) * Rändel)-MinHelligkeit)*255)/maxOffset  x = gewünschter optischer Helligkeitswert  |

### ARG_0XD542_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | signed int | - | TAB_LAMPEN_FUNKTION | - | - | - | - | - | Mögliche Elemente siehe Tabelle |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Angabe der Zeit in 10ms  0: aus  max. 32767: 327sec sofern für die Lampe zugelassen |

### ARG_0XD57C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUERAUS | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Daueraus nicht aktiv 1: Daueraus aktiv |

### ARG_0XD592_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_FBM_TASTEN | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Berührung simulieren |

### ARG_0XD593_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_FBM_TASTEN | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SGBD-Autor durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

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
| FAHRLICHTSITUATION_LINKS | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_ARG | - | - | - | - | - | Vorgabe der Fahrlichtsituation links |
| FAHRLICHTSITUATION_RECHTS | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_ARG | - | - | - | - | - | Vorgabe der Fahrlichtsituation rechts |

### ARG_0XD613_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FES_MODUS | HEX | high | unsigned char | - | - | - | - | - | - | - | Steuern des FES Modus |

### ARG_0XD62A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED aus 1: LED ein |

### ARG_0XD642_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Ende Ansteuerung 1: Heckscheibenwischer in Service-Position |

### ARG_0XD6C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_TYP | 0-n | high | unsigned char | - | TAB_LED_TYP | - | - | - | - | - | Welche LED soll angesteuert werden. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED aus, 1: LED ein  |

### ARG_0XD6C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_TASTER | HEX | high | unsigned char | - | - | - | - | - | - | - | Zu steuernder Taster (1 bis 12) entsprechend LIN signale ST_FN_BUT_1...12_MIKO_LIN (ohne Wert 5 = ST_FN_BUT_6, der ungültigen Wert liefert) |
| AKTION | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | - | - | Aktion |

### ARG_0XD72A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | - | - | Angabe Stufe 0-3 |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Zeit in Sekunden |

### ARG_0XD72F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | - | - | - | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD732_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_ORT | 1.0 | 1.0 | 0.0 | - | - | Ausgang Heizung |
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
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
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
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
| TEMP | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 85.0 | Temperatur von 1 bis 85 (Grad Celsius) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in Sekunden |

### ARG_0XD83A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Auswahl Stufe 0-3 |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung (0-255 Sekunden) |

### ARG_0XD83B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Auswahl Stufe 0-3 |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung (0-255 Sekunden) |

### ARG_0XD83C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Auswahl Stufe 0-3 |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung (0-255 Sekunden) |

### ARG_0XD83D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | - | - | Auswahl Stufe 0-3 |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung (0-255 Sekunden) |

### ARG_0XD89E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VENTIL_FAHRER | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert für die Ansteuerung des Wasserventils Fahrer(0-100%) |
| PWM_VENTIL_BEIFAHRER | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM-Wert für die Ansteuerung des Wasserventils Beifahrer (0-100%) |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe Ansteuerzeit in Sekunden |

### ARG_0XD8B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | unsigned char | - | TAB_TASTEN_AUDIO | - | - | - | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: EIN_AUS, MODE, TP, EJECT, SUCHLAUF_LI, SUCHLAUF_RE; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Gedrückt simulieren |

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
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 240.0 | Ansteuerzeit in Sekunden |

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

### ARG_0XDA4C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA4E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CAS_HISTORIENSPEICHER_SPERRE | 1.0 | 1.0 | 0.0 | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen 0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### ARG_0XDA5E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 31.0 | ID des RGB-LIN-Slaves |
| EIN_AUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Deaktivieren: AUS= 0; Aktivieren: EIN=1 |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Helligkeit aller Grundfarben |
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
| CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS_ARG | - | - | - | - | - | Das Argument ermöglicht die KL50-Sperre/Fahrbereitschafts-Sperre (NO_START) oder den Präsentations-Modus (PRESENTATION) zu aktivieren oder alle Sperren zu deaktivieren (NORMAL). Hinweise: 1. Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS_ARG.  2. Bei allen Werten ungleich 0,1,3 wird keine Aktion ausgeführt, d.h. der aktuell aktivierte Modus bleibt weiterhin bestehen. Ab SP2015 wird der Modus 2 (ELV-Sperre) nicht mehr unterstützt, der aktuell aktivierte Modus bleibt bestehen. |

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

### ARG_0XDAF7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABBRUCH_LIN_VAR | 0-n | high | unsigned char | - | TAB_ABBRUCH_LIN_VARIANTENUEBERPRUEFUNG | - | - | - | - | - | Abbruch von LIN Variantenüberprüfung |

### ARG_0XDB13_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KURZSCHLUSSCOUNTER_AUSGANG | 0-n | high | unsigned char | - | TAB_KOMFORTKURZSCHLUSSCOUNTER_AUSGANG | - | - | - | - | - | Das Argument enthält den Ausgang für den der Comfort Kurzschlußcounter zurückgesetzt werden soll. Das Argument enthält den Ausgang für den der Comfort Kurzschlußcounter  zurückgesetzt werden soll. Anmerkung: Wasserventil_Fahrer wurde durch ein Absperrventil ersetzt. Wasserventil_Beifahrer wird nicht mehr verwendet. |

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
| AUFFAHRWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT | - | - | - | - | - | Konfiguration Auffahrwarnzeitpunkt  (siehe Tabelle TAB_WARNZEITPUNKT) |
| PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Personenwarnung (1 - ausgewählt; 0 - abgewählt) |
| GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Gezieltes Anleuchten (1 - ausgewählt; 0 - abgewählt) |
| SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Spurverlassenswarnung (1 - ausgewählt; 0 - abgewählt) |
| SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Konfiguration Spurwechselwarnung (1 - ausgewählt; 0 - abgewählt) |
| UEBERNAHME_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Übernahme der erkannten Höchstgeschwindigkeit als neue Setzgeschwindigkeit für Tempomat und Limiter.  (1 - ausgewählt; 0 - abgewählt) |
| OFFSET_GESCHWINDIGKEIT | km/h | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Offset zur Höchstgeschwindigkeit bei Übernahme als neue Setzgeschwindigkeit für Tempomat und Limiter. |
| SEITENKOLLISIONSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Seitenkollisionswarnung (1 - ausgewählt; 0 - abgewählt) |
| SPURVERLASSENSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT2 | - | - | - | - | - | Konfiguration Spurverlassenswarnzeitpunkt  (siehe Tabelle TAB_WARNZEITPUNKT2) |
| SPURWECHSELWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT | - | - | - | - | - | Konfiguration Spurwechselwarnzeitpunkt  (siehe Tabelle TAB_WARNZEITPUNKT) |
| VIBRATIONSSTAERKE | 0-n | high | unsigned char | - | TAB_VIBRATIONSSTAERKE | - | - | - | - | - | Konfiguration Vibrationsstärke des Lenkrades (siehe Tabelle TAB_VIBRATIONSSTAERKE) |
| SPURVERLASSENSLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurverlassenslenkeingriff (1 - ausgewählt; 0 - abgewählt) |
| SPURWECHSELLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurwechsellenkeingriff (1 - ausgewählt; 0 - abgewählt) |
| VORFAHRTSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Vorfahrtswarnung (1 - ausgewählt; 0 - abgewählt) |
| VORFAHRTSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT | - | - | - | - | - | Konfiguration Vorwarnzeitpunkt (siehe Tabelle TAB_WARNZEITPUNKT) |
| RESERVE_1 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_2 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_3 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_4 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_5 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_6 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_7 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |

### ARG_0XDC84_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulation des Tasters 0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XDC85_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed char | - | TAB_SARAH_LED | - | - | - | - | - | 0 = LED aus 1 = LED gruen 2 = LED defekt 3 = LED orange |

### ARG_0XE442_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerung des Heizungs/Kühlmittel-Absperrventil:   0=nicht bestromt; 1=bestromt. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit in Sekunden |

### ARG_0XF100_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_AUSGANG_LEUCHTEN | - | - | - | - | - | Auswahl des Ausgangs Werttabelle Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN |

### ARG_0XF101_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG | + | - | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | The argument triggers an I-sense calibration telegram |

### ARG_0XF204_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_FH_AUSWAHL | - | - | - | - | - | Zuordnung siehe TAB_FH_AUSWAHL |
| FUNKTION | + | - | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_SFK1 | - | - | - | - | - | Welche Funktion soll angefahren werden |
| RICHTUNG | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Nicht verwendet 1: Position anfahren |

### ARG_0XF300_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLL_TRIGGER_DATA | + | - | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | - | - | to trigger a PASE function |

### ARG_0XF301_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLL_KEY_DIAGNOSTIC_DATA | + | - | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | - | - | start a Key Diagnostic telegram |

### ARG_0XF307_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Request data (max 4 Byte);  format is described in project specific documentation |

### ARG_0XF308_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DATA | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Request data (max 4 Byte);  format is described in project specific documentation |

### ARG_0XF30A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATE | + | - | 0-n | high | unsigned char | - | STATE_RTE_BUFFER | - | - | - | - | - | Das Argument enthält den gewünschten Zustand des Tracing-Verhaltens |

### ARG_0XF30B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Das Argument enthält den Typ der abzufragenden Aufstartzeit.  00 = Reset time; 01 = Wakeup time |

### ARG_0XF30C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOGGER_PROTOCOL_PAYLOAD | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | A variable length payload that represents the various commands accepted by the Logger. The valid values are Logger protocol specific |

### ARG_0XF30D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGE | + | - | 0-n | high | unsigned char | - | AGE | - | - | - | - | - | Legt fest, welche ERROR_INFO zurückgeliefert werden soll |

### ARG_0XF30F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATE | + | - | 0-n | high | unsigned char | - | STATE_RTE_BUFFER | - | - | - | - | - | Das Argument enthält den gewünschten Zustand des Tracing-Verhaltens |
| MIRROR | + | - | 0-n | high | unsigned char | - | TAB_MIRROR_RTE_BUFFER | - | - | - | - | - | Das Argument enthält den gewünschten Wert des Mirroring-Ausgabeziels |

### ARG_0XF400_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| START_LIN_TRACING | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Enable Lin Tracing, 1 = Start, 0 = Stop |

### BE_AUDIO_TASTE

| WERT | TEXT |
| --- | --- |
| 0 | FBM_1 |
| 1 | FBM_2 |
| 2 | FBM_3 |
| 3 | FBM_4 |
| 4 | FBM_5 |
| 5 | FBM_6 |
| 6 | FBM_7 |
| 7 | FBM_8 |
| 8 | BUT_MOD |
| 9 | BUT_AM_FM_TRIF |
| 10 | BUT_Eject_DVD |
| 11 | BUT_SKP |
| 12 | ROCO_DIRRT |
| 13 | BUT_ON_OFF_ENTAI |
| 14 | ROCO_INCR |

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
| F_HLZ | nein |
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
| 0x024000 | Energiesparmode aktiv | 0 |
| 0x024008 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x024009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02400A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02400B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02400C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF40 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030031 | FH FA Hardware-Fehler der IFE Fahrertür | 1 |
| 0x030032 | FH FA Fensterheber-Initialisierungsfehler | 1 |
| 0x030033 | FH FA interner Fehler | 1 |
| 0x030034 | IFE FAT unerwarteter LIN-Slave | 0 |
| 0x030035 | IFE FAT fehlender LIN-Slave | 0 |
| 0x0300B0 | FH BF Fehler lokaler Fensterheber-Taster Beifahrer | 1 |
| 0x0300B1 | FH BF Hardware-Fehler der IFE Beifahrertür | 1 |
| 0x0300B2 | FH BF Fensterheber-Initialisierungsfehler | 1 |
| 0x0300B3 | FH BF interner Fehler | 1 |
| 0x0300B4 | IFE BFT unerwarteter LIN-Slave | 0 |
| 0x0300B5 | IFE BFT fehlender LIN-Slave | 0 |
| 0x030130 | FH FAH Fehler lokaler Fensterheber-Taster Fahrer hinten | 1 |
| 0x030131 | FH FAH Hardware-Fehler der IFE Fahrertür hinten | 1 |
| 0x030132 | FH FAH Fensterheber-Initialisierungsfehler | 1 |
| 0x030133 | FH FAH interner Fehler | 1 |
| 0x030134 | IFE FATH unerwarteter LIN-Slave | 0 |
| 0x030135 | IFE FATH fehlender LIN-Slave | 0 |
| 0x0301B0 | FH BFH Fehler lokaler Fensterheber-Taster Beifahrer hinten | 1 |
| 0x0301B1 | FH BFH Hardware-Fehler der IFE Beifahrertür hinten | 1 |
| 0x0301B2 | FH BFH Fensterheber-Initialisierungsfehler | 1 |
| 0x0301B3 | FH BFH interner Fehler | 1 |
| 0x0301B4 | IFE BFTH unerwarteter LIN-Slave | 0 |
| 0x0301B5 | IFE BFTH fehlender LIN-Slave | 0 |
| 0x030340 | Schaltzentrum Lenksaeule (SZL) (LIN): Interner Hardware-Fehler | 0 |
| 0x030341 | Schaltzentrum Lenksaeule (SZL) Lenkstock Blinker: Funktionsfehler | 0 |
| 0x030344 | Schaltzentrum Lenksaeule (SZL) Lenkstock Wischer: Funktionsfehler | 0 |
| 0x030349 | Schaltzentrum Lenksaeule (SZL) oder Lenkradelektronik (LRE), Lenkradheizung: Taster hängt | 0 |
| 0x03034A | Schaltzentrum Lenksaeule (SZL) oder Lenkradelektronik (LRE), Lenkradheizung: Taster nicht verbaut, LED Leitungsunterbrechung oder LHZ-Taster überbestückt | 0 |
| 0x03034B | Schaltzentrum Lenksaeule (SZL), Lenkradheizung: LED Kurzschluss nach Masse | 0 |
| 0x03034C | Schaltzentrum Lenksaeule (SZL), Hupe: Taster haengt | 0 |
| 0x03034D | Schaltzentrum Lenksaeule (SZL) (LIN): Kommunikationsfehler | 0 |
| 0x030350 | Schaltzentrum Lenksaeule (SZL) (LIN): fehlender LIN-Slave | 0 |
| 0x030351 | Schaltzentrum Lenksaeule (SZL) (LIN): falsche Variante | 0 |
| 0x030352 | Schaltzentrum Lenksaeule (SZL) (LIN): Alive-Zaehler-Fehler | 0 |
| 0x03035A | Schaltzentrum Lenksäule (LIN), elektrische Lenksäulenverstellung (eLSV): Leitung zum Taster, Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x03035B | Schaltzentrum Lenksäule (LIN), elektrische Lenksäulenverstellung (eLSV): Taster hängt | 0 |
| 0x03035C | Schaltzentrum Lenksäule (LIN), elektrische Lenksäulenverstellung (eLSV): Leitung zum Taster: Kurzschluss nach Masse | 0 |
| 0x030360 | Hands OFF Detection (HOD) (LIN ) Versorgungsspannung | 0 |
| 0x030361 | Hands OFF Detection (HOD) (LIN ) Steuergerät defekt | 0 |
| 0x030362 | Hands OFF Detection (HOD) (LIN ) Sensormatte defekt | 0 |
| 0x030363 | Hands OFF Detection (HOD) (LIN ) Sensor falsche Variante | 0 |
| 0x030364 | Hands OFF Detection (HOD) (LIN ) Sensor fehlender LIN-Slave | 0 |
| 0x030365 | Hands OFF Detection (HOD) (LIN ) Sensor unerwarteter LIN-Slave | 0 |
| 0x030401 | Multifunktions-Lenkrad (MFL): interner Fehler | 0 |
| 0x030409 | Botschaft (ST_STW_LIN): Alive-Zaehler-Fehler | 0 |
| 0x030410 | Multifunktions-Lenkrad (MFL): fehlender LIN-Slave | 0 |
| 0x030411 | Multifunktions-Lenkrad (MFL): falsche Variante | 0 |
| 0x030412 | Multifunktions-Lenkrad (MFL): unerwarteter LIN-Slave | 0 |
| 0x030480 | Lenkradelektronik (LRE), Lenkradheizung Last: interner Fehler | 0 |
| 0x030481 | Lenkradelektronik (LRE), Lenkradheizung NTC-Kontakt: interner Fehler | 0 |
| 0x030482 | Lenkradelektronik (LRE), Lenkradheizung: Kurzschluss | 0 |
| 0x030483 | Lenkradelektronik (LRE), Lenkradheizung: interner Fehler | 0 |
| 0x030484 | Lenkradelektronik (LRE), Lenkradvibration: Spannung ausserhalb gueltigem Bereich | 0 |
| 0x030487 | Lenkradelektronik (LRE) Aktuator: Leitungsunterbrechung | 0 |
| 0x030488 | Lenkradelektronik (LRE) Aktuator: Kurzschluss nach Masse | 0 |
| 0x030489 | Lenkradelektronik (LRE) Aktuator: Blockiert | 0 |
| 0x030490 | Lenkradelektronik (LRE) (LIN): fehlender LIN-Slave | 0 |
| 0x030491 | Lenkradelektronik (LRE) (LIN): falsche Variante | 0 |
| 0x030492 | Lenkradelektronik (LRE) (LIN): unerwarteter LIN-Slave | 0 |
| 0x030496 | Lenkradelektronik (LRE), M-Taster: Fehler M1 | 0 |
| 0x030497 | Lenkradelektronik (LRE), M-Taster: Fehler M2 | 0 |
| 0x0304C0 | ELSV (LIN): Motor axial Kurzschluss nach GND | 0 |
| 0x0304C1 | ELSV (LIN): Motor axial Kurzschluss nach Ubatt | 0 |
| 0x0304C2 | ELSV (LIN): Motor axial Kurzschluss im Motor oder in Zuleitung | 0 |
| 0x0304C3 | ELSV (LIN): Motor axial Unterbrechung im Motoranschluss | 0 |
| 0x0304C4 | ELSV (LIN): ELSV nicht normiert | 0 |
| 0x0304C5 | ELSV (LIN): interner Steuergeräte Fehler | 0 |
| 0x0304C7 | ELSV (LIN): ELSV maximale Anzahl an Blockfahrteb erreicht | 0 |
| 0x0304C8 | ELSV (LIN): Spannungsversorgung außerhalb des gültigen Bereichs | 0 |
| 0x0304CA | ELSV (LIN): Motor vertikal Kurzschluss nach GND | 0 |
| 0x0304CB | ELSV (LIN): Motor vertikal Kurzschluss nach Ubatt | 0 |
| 0x0304CC | ELSV (LIN): Motor vertikal Kurzschluss im Motor oder in Zuleitung | 0 |
| 0x0304CD | ELSV (LIN): Motor vertikal Unterbrechung im Motoranschluss | 0 |
| 0x0304D1 | ELSV (LIN): Fehlender LIN Slave | 0 |
| 0x0304D2 | ELSV (LIN): Nicht erwarteter LIN Slave | 0 |
| 0x0304D3 | ELSV (LIN): Hallsensor axial Kurzschluss nach Plus oder Masse | 0 |
| 0x0304D5 | ELSV (LIN): Hallsensor axial Kurzschluss im Sensor oder Leitungsunterbrechung | 0 |
| 0x0304D6 | ELSV (LIN): Hallsensor axial Thermoschutz | 0 |
| 0x0304D7 | ELSV (LIN): Hallsensor vertikal Kurzschluss nach Plus oder Masse | 0 |
| 0x0304D9 | ELSV (LIN): Hallsensor vertikal Kurzschluss im Sensor oder Leitungsunterbrechung | 0 |
| 0x0304DA | ELSV (LIN): Hallsensor vertikal Thermoschutz | 0 |
| 0x804011 | Versorgungsunterspannung 8V5 | 0 |
| 0x804012 | Versorgungsüberspannung 16V5 | 0 |
| 0x804013 | Versorgungsspannung Klemme 30L1 fehlt | 0 |
| 0x804014 | Versorgungsspannung Klemme 30L2 fehlt | 0 |
| 0x80402F | Batterie Tiefentladen | 1 |
| 0x804033 | ZSG Spielschutz: weckfähige Eingänge gesperrt | 1 |
| 0x804047 | Treiber KL15-Analysestecker: Kurzschluss Masse | 0 |
| 0x804060 | JBR_LIN: Ansteuerleitung 30B5: Kurzschluss | 0 |
| 0x804062 | JBR_LIN: Versorgungsspannung Relais hinten: möglicher Kurzschluss | 0 |
| 0x804063 | JBR_LIN: Ansteuerleitung 30B5: Leitungsunterbrechung | 0 |
| 0x804064 | JBR_LIN: Ansteuerleitung Ein-/Abschalten 30B6, 30B7: Leitungsunterbrechung | 0 |
| 0x804065 | JBR_LIN: Ansteuerleitung Ein-/Abschalten 30B6, 30B7: Kurzschluss | 0 |
| 0x804066 | JBR_LIN: Dauerhafte Deaktiverung aufgrund maximaler Anzahl Kurzschlüsse gegen Masse Lastklemmentreiber 30B_DxE/30B_ACSM/15N1_6 | 0 |
| 0x804067 | JBR_LIN: Fehlendes/falsches Relaiskonfigurationsignal | 0 |
| 0x804068 | JBR_LIN: Interner SG-Fehler | 0 |
| 0x804069 | JBR_LIN: Kommunikationsfehler: CRC/Alive-Signal falsch oder Steuersignal unplausibel | 0 |
| 0x80406C | JBR_LIN: Kurzschluss/Leitungsunterbrechung der Diagnoseleitung DIAG_SV2-SV4(30B5, 30B6, 30B7) | 0 |
| 0x80406D | JBR_LIN: Kurzschluss/Leitungsunterbrechung der Notbetriebleitung | 0 |
| 0x80406E | JBR_LIN: Relais 15N-Zustandswiderspruch | 0 |
| 0x80406F | JBR_LIN: Relais 30B1-Zustandswiderspruch | 0 |
| 0x804070 | JBR_LIN: Relais 30B2-Zustandswiderspruch | 0 |
| 0x804071 | JBR_LIN: Relais Heckscheibenheizung-Zustandswiderspruch | 0 |
| 0x804072 | JBR_LIN: Relais 30B5-Zustandswiderspruch | 0 |
| 0x804073 | JBR_LIN: Relais 30B6-Zustandswiderspruch | 0 |
| 0x804074 | JBR_LIN: Relais 30B7-Zustandswiderspruch | 0 |
| 0x804075 | JBR_LIN: Relais 30F1-Zustandswiderspruch | 0 |
| 0x804076 | JBR_LIN: Relais 30F2-Zustandswiderspruch | 0 |
| 0x804077 | JBR_LIN: Überspannung erkannt | 0 |
| 0x804078 | JBR_LIN: Übertemperatur erkannt | 0 |
| 0x804079 | JBR_LIN: Unterspannung erkannt | 0 |
| 0x80407A | JBR_LIN: Versorgungsspannung 30B_ACSM Kurzschluss/Leitungsunterbechung Masse | 0 |
| 0x80407B | JBR_LIN: Versorgungsspannung 30B_DxE Kurzschluss/Leitungsunterbechung Masse | 0 |
| 0x804081 | Herstellung Fahrbereitschaft fehlerhaft | 0 |
| 0x804083 | Kupplungssignal KUPPL: Kurzschluss Batteriespannung | 0 |
| 0x804084 | Kupplungssignal KUPPL: Plausibilisierungsfehler gegenüber CAN-Signal | 0 |
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
| 0x8040A4 | Start-Stopp-Taster Sensor SSTA: Unplausibler Zustand | 0 |
| 0x8040A5 | Start-Stopp-Taster Sensor SSTB: Unplausibler Zustand | 0 |
| 0x8040A6 | Ansteuerung Einschalten KL30F-Hinten: Kurzschluss Masse | 0 |
| 0x8040A7 | Ansteuerung Einschalten KL30F-Hinten: Kurzschluss Batteriespannung oder Leitungsunterbrechung | 0 |
| 0x8040A8 | Ansteuerung Ausschalten KL30F-Hinten: Kurzschluss Masse | 0 |
| 0x8040A9 | Start-Stopp-Taster SST: Fehlbetätigung (Schrägdruck) | 1 |
| 0x8040AA | KL30F-Relais-Vorne: Interne Sicherung 3 defekt | 0 |
| 0x8040AB | KL30F-Relais-Vorne: Interne Sicherung 4 defekt | 0 |
| 0x8040AC | Ansteuerung Ausschalten KL30F-Hinten: Kurzschluss Batteriespannung oder Leitungsunterbrechung | 0 |
| 0x8040AD | LED Suchbeleuchtung Start-Stopp-Taster: Kurzschluss Masse | 0 |
| 0x8040AE | LED Suchbeleuchtung Start-Stopp-Taster: Kurzschluss Batteriespannung | 0 |
| 0x8040B0 | IBS Wakeup: Kurzschluss nach Masse | 0 |
| 0x8040B1 | IBS Wakeup: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x8040B2 | LED Funktionsbeleuchtung MSA: Kurzschluss Masse | 0 |
| 0x8040B3 | LED Funktionsbeleuchtung MSA: Kurzschluss Batteriespannung | 0 |
| 0x8040B4 | Fehler Motorstart bei Anlasserbetrieb: Anlasserrelais defekt | 0 |
| 0x8040B6 | Fehler Motorstart bei Anlasserbetrieb: Open Load oder Kurzschluss gegen Batteriespannung | 0 |
| 0x8040B8 | Maximale Anzahl Kurzschlüsse eines Ausgangs Treibers erreicht | 1 |
| 0x8040C3 | KL30F: Anforderung Abschaltung wegen Ruhestromverletzung | 1 |
| 0x8040C6 | KL30F: Anforderung Reset wegen Ruhestromverletzung | 1 |
| 0x8040D0 | PWF Messemodus aktiv | 0 |
| 0x8040D2 | Aktivierung Zustand Parken BN niO | 1 |
| 0x8040E0 | EWS: DME oder DDE Secret Key nicht geschrieben bzw. nicht verriegelt | 1 |
| 0x8040F0 | Transponderspule: Fehler Basestation | 0 |
| 0x8040F1 | Kryptodaten in einem Schlüssel | 1 |
| 0x8040F2 | Transponderspule: Fehler Ersatzschlüsselanlernen | 1 |
| 0x8040F3 | Transponderspule: Gesperrter Schlüssel gefunden | 1 |
| 0x8040F4 | Transponderspule: Fremdschlüssel nicht dem Fahrzeug zugehörig | 1 |
| 0x8040F5 | Transponderspule: Fehler Antenne | 0 |
| 0x8040F7 | The Jtag of the BDC-Body is NOT locked | 0 |
| 0x804101 | Antenne Stoßfänger hinten (SFH): Kurzschluss | 0 |
| 0x804103 | Antenne Stoßfänger hinten (SFH): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804105 | Antenne Innenraum vorn (IRV): Kurzschluss | 0 |
| 0x804107 | Antenne Innenraum vorn (IRV): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804109 | Antenne Tür links: Kurzschluss | 0 |
| 0x80410B | Antenne Tür links: Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x80410D | Antenne Tür rechts: Kurzschluss | 0 |
| 0x80410F | Antenne Tür rechts: Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804111 | Antenne Innenraum hinten (IRH): Kurzschluss | 0 |
| 0x804113 | Antenne Innenraum hinten (IRH): Antennenfehler Leitungsunterbrechung | 0 |
| 0x804117 | Antenne Außenraum vorne (ARV): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804119 | Antenne Kofferraum links (KRLI): Kurzschluss | 0 |
| 0x80411B | Antenne Kofferraum links (KRLI): Antennenfehler oder Leitungsunterbrechung | 0 |
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
| 0x804133 | Antenne Außenraum vorne (ARV): Kurzschluss | 0 |
| 0x804135 | Centerlock-Wippe Beifahrertür: defekt oder Leitungsfehler | 1 |
| 0x804138 | Centerlock-Wippe Beifahrertür: Dauerbetätigung | 1 |
| 0x804139 | ZV-Antrieb Heckklappe oder Splitdoor rechts: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80413A | ZV-Antrieb Heckklappe, untere Heckklappe, Heckscheibe, Splitdoors oder Frontklappe: Dauerhafte Deaktiverung aufgrund maximaler Anzahl Kurzschlüsse gegen Masse | 0 |
| 0x80413B | ZV-Antrieb untere Heckklappe, Heckscheibe, Splitdoor links oder Frontklappe: Klappenkontakt defekt oder Klappe klemmt | 0 |
| 0x80413C | ZV-Antrieb untere Heckklappe, Heckscheibe, Splitdoor links oder Frontklappe: Kurzschluss nach Masse | 0 |
| 0x80413D | ZV-Antrieb untere Heckklappe, Heckscheibe, Splitdoor links oder Frontklappe: Leitungsunterbrechung oder Kurzschluss nach Batteriespannung | 0 |
| 0x80413E | ZV-Antrieb Heckklappe oder Splitdoor rechts: Klappenkontakt defekt oder Klappe klemmt | 0 |
| 0x80413F | ZV-Antrieb Heckklappe oder Splitdoor rechts: Kurzschluss nach Masse | 0 |
| 0x804140 | Taster Center Lock (CLT): Dauerbetätigung | 0 |
| 0x804143 | Funkfernbedienung (FBD): Dauerbetätigung | 1 |
| 0x804146 | Taster Entriegeln Heckklappe Innen (TOEHKI): Dauerbetätigung | 0 |
| 0x804153 | Centerlock-Wippe Fahrertür: defekt oder Leitungsfehler | 1 |
| 0x804156 | Centerlock-Wippe Fahrertür: Dauerbetätigung | 1 |
| 0x80415B | Motorhaubenkontakt (MHK): defekt oder Leitungsfehler | 0 |
| 0x80415C | ZV-Relais Entriegeln (ZV_MER): Relaiskleber gegen Batteriespannung | 0 |
| 0x80415D | ZV-Relais Entriegeln (ZV_MER): Relaiskleber gegen Masse oder Sicherung defekt | 0 |
| 0x80415E | ZV-Relais Selektives Verriegeln Fahrer (ZV_MVR_FA): Relaiskleber gegen Batteriespannung | 0 |
| 0x80415F | ZV-Relais Selektives Verriegeln Fahrer (ZV_MVR_FA): Relaiskleber gegen Masse oder Sicherung defekt | 0 |
| 0x804160 | ZV-Relais Sichern (ZV_MVS): Relaiskleber gegen Batteriespannung | 0 |
| 0x804161 | ZV-Relais Sichern (ZV_MVS): Relaiskleber gegen Masse oder Sicherung defekt | 0 |
| 0x804162 | ZV-Relais Verriegeln (ZV_MVR): Relaiskleber gegen Batteriespannung | 0 |
| 0x804163 | ZV-Relais Verriegeln (ZV_MVR): Relaiskleber gegen Masse oder Sicherung defekt | 0 |
| 0x804164 | Türkontakt Beifahrertür: Leitungsunterbrechung oder defekt | 0 |
| 0x804166 | Türkontakt Beifahrertür hinten/unten: Leitungsunterbrechung oderdefekt | 0 |
| 0x804168 | Türkontakt Fahrertür: Leitungsunterbrechung oder defekt | 0 |
| 0x80416A | Türkontakt Fahrertür hinten/unten: Leitungsunterbrechung oder defekt | 0 |
| 0x80416D | Motorhaubenkontakt (MHK): Offen bei Fahrt | 1 |
| 0x804176 | SMO Interner Fehler | 0 |
| 0x804177 | SMO Energiebordnetzfehler | 1 |
| 0x804178 | SMO: Parametrierung fehlerhaft | 0 |
| 0x804179 | SMO, Spielschutz: Aktiv bis zum naechsten Motorstart oder Fahrtende | 1 |
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
| 0x8041AA | Tiefentladungsschutz der Batterie: Abschaltung Parklicht | 1 |
| 0x8041AB | Tiefentladungsschutz der Batterie: Abschaltung Standlicht | 1 |
| 0x8041AE | Ausgang BiXenonklappe R defekt | 0 |
| 0x8041AF | Ausgang BiXenonklappe R hat Kurzschluss | 0 |
| 0x8041B2 | Licht aktiv: Startfaehigkeitsgrenze erreicht | 1 |
| 0x8041B6 | Leuchtweitenregulierung (LWR): System ausgefallen | 0 |
| 0x8041BA | Adaptive Headlight (AHL): System defekt | 0 |
| 0x8041BF | Signal vom Regenlichtsensor unplausibel | 1 |
| 0x8041C3 | Kodierung: Lampenmapping fehlgeschlagen | 0 |
| 0x8041C9 | Bedieneinheit Fahrerassistenzsysteme (LIN): Schalter hängt | 1 |
| 0x8041CB | Bedieneinheit Fahrerassistenzsysteme (LIN): Funktionsbeleuchtung SARAH defekt | 0 |
| 0x8041D4 | Hoehenstandssensor: Hinten links oder rechts Signal Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8041D5 | Hoehenstandssensor: Vorne links oder rechts Signal Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8041D8 | Höhenstandssensoren - Abgleich, Werte unplausibel | 0 |
| 0x8041D9 | Rückwärtsgang-Information unplausibel, Rückfahrlicht deaktiviert | 0 |
| 0x8041E0 | Taster Warnblinken: Taster hängt | 0 |
| 0x8041E1 | FuSi Außenlicht deaktiviert per Codierung | 0 |
| 0x8041E2 | Lichtsperre Montage aktiv | 0 |
| 0x8041E3 | Leuchten Spannungsschutz Aktiv | 1 |
| 0x804229 | Bedieneinheit Mittelkonsole (LIN): HW-Fehler | 0 |
| 0x804230 | Bedieneinheit Mittelkonsole (LIN): Fehler Status Berührungen | 0 |
| 0x804231 | Bedieneinheit Mittelkonsole (LIN): Fehler Status Anzeige | 0 |
| 0x804232 | Bedieneinheit Mittelkonsole (LIN): Taster hängt | 0 |
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
| 0x804281 | Frontwischer, Leitung Wischer 1 (langsam): Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804282 | Frontwischer, Leitung Wischer schnell: Kurzschluss nach Masse | 0 |
| 0x804283 | Frontwischer, Leitung Wischer 2 (schnell): Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804286 | Scheinwerferreinigungsanlage (SRA): Relais defekt oder Leitung von Relais zu SRA unterbrochen oder Kurzschluss nach Plus | 0 |
| 0x804287 | Waschwasser-Pumpe hinten: Kurzschluss nach Masse | 0 |
| 0x804288 | Waschwasser-Pumpe hinten: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804289 | Waschwasser-Pumpe vorne: Kurzschluss nach Masse | 0 |
| 0x80428A | Waschwasser-Pumpe vorne: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80428B | Scheinwerferreinigungsanlage (SRA): Kurzschluss nach Masse | 0 |
| 0x80428D | FuSi Wischer deaktiviert per Codierung | 0 |
| 0x80428E | Frontwischer: Fehler Motorstromüberwachung oder Wischer schwergängig | 0 |
| 0x80428F | Frontwischer, Leitung Rückstellkontakt: Kurzschluss nach Masse | 0 |
| 0x804290 | Frontwischer, Leitung Rückstellkontakt: Kurzschluss nach Plus  oder Leitungsunterbrechung | 0 |
| 0x804291 | Frontwischer: Notbetrieb | 0 |
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
| 0x8042CE | Innenlichteinheit 2 (ILE2) oder Innenlichteinheit 3 (ILE3): Taster hängt oder Kurzschluss nach Masse | 0 |
| 0x8042CF | Innenlichteinheit 1 (ILE1): Taster hängt oder Kurzschluss nach Masse | 0 |
| 0x8042D2 | Ausgang Innenbeleuchtung 8 hat Kurzschluss | 0 |
| 0x8042D7 | Innenlichteinheit 1 (ILE1): Taster Leselicht links hängt | 0 |
| 0x8042D8 | Innenlichteinheit 1 (ILE1): Taster Leselicht rechts hängt | 0 |
| 0x8042DC | Innenlichteinheit 1 (ILE1): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E1 | Ausgang Innenbeleuchtung 0 defekt | 0 |
| 0x8042E2 | Ausgang Innenbeleuchtung 6 defekt | 0 |
| 0x8042E3 | Ausgang Innenbeleuchtung 7 defekt | 0 |
| 0x8042E4 | Ausgang Innenbeleuchtung 8 defekt | 0 |
| 0x8042E5 | Innenlichteinheit 2 (ILE2): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E6 | Innenlichteinheit 2 (ILE2): Taster Leselicht links hängt | 0 |
| 0x8042E7 | Innenlichteinheit 2 (ILE2): Taster Leselicht rechts hängt | 0 |
| 0x8042E8 | Innenlichteinheit 3 (ILE3): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E9 | Innenlichteinheit 3 (ILE3): Taster Leselicht links hängt | 0 |
| 0x8042EA | Innenlichteinheit 3 (ILE3): Taster Leselicht rechts hängt | 0 |
| 0x804340 | Außenspiegel links oder rechts, Heizung: Kurzschluss nach Masse | 0 |
| 0x804341 | Außenspiegel links oder rechts, Heizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804342 | Waschdüsenheizung: Kurzschluss nach Masse | 0 |
| 0x804343 | Waschdüsenheizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804349 | Heckscheibenheizung, Relais: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x80434A | Heckscheibenheizung, Relais: Leitung zum Relais unterbrochen oder Kurzschluss nach Plus | 0 |
| 0x80435E | Heizungsabsperrventil: Kurzschluss nach Masse | 0 |
| 0x80435F | Heizungsabsperrventil: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804360 | Wasserventil Fahrer: Kurzschluss nach Masse | 0 |
| 0x804361 | Wasserventil Fahrer: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804363 | Drucksensor: Kurzschluss nach Masse | 0 |
| 0x804364 | Drucksensor: Leitungsbruch oder Kurzschluss nach Plus | 0 |
| 0x804365 | Fondschichtungspotentiometer: Kurzschluss nach Masse oder Leitungsunterbrechnung | 0 |
| 0x804366 | Fondschichtungspotentiometer: Kurzschluss nach Plus | 0 |
| 0x80436B | Zusatzwasserpumpe: Kurzschluss nach Masse | 0 |
| 0x80436C | Zusatzwasserpumpe: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x80436E | Magnetkupplung oder Umschaltventil: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x80436F | Magnetkupplung oder Umschaltventil: Kurzschluss nach Masse | 0 |
| 0x804370 | Kompressorventil: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804371 | Kompressorventil: Kurzschluss nach Masse | 0 |
| 0x804372 | Wasserventil Beifahrer: Kurzschluss nach Masse | 0 |
| 0x804373 | Wasserventil Beifahrer: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804397 | AUC-Sensor: Kurzschluss nach Masse | 0 |
| 0x804398 | AUC-Sensor: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804399 | AUC-Sensor: Ungültiges PWM-Signal | 0 |
| 0x80439A | AUC-Sensor: Kurzschluss, Unterbrechung oder fehlerhaftes PWM-Signal | 0 |
| 0x804414 | Fond-Fernbedienung (FFB):Unterspannung Batterie | 0 |
| 0x804415 | ID-Geber (IDG): Unterspannung Batterie | 0 |
| 0x804417 | Bewegungssensor im Schlüssel: Defekt | 1 |
| 0x804426 | Armauflagenheizung FA (LIN): Interner Steuergerätefehler | 0 |
| 0x804427 | Armauflagenheizung FAH (LIN): Interner Steuergerätefehler | 0 |
| 0x80442A | Bedieneinheit Licht (BEL), (LIN): Drehschalter defekt | 0 |
| 0x80442B | Bedieneinheit Licht (BEL), (LIN): Taster Parklicht oder Funktionstaste hängt | 0 |
| 0x80442C | Bedieneinheit Licht (BEL), (LIN): Taster NSW oder NSL hängt | 0 |
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
| 0x804470 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Interner Elektronikfehler | 0 |
| 0x804471 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Spiegel-Taster hängt | 0 |
| 0x804472 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Signal Fenster-Taster ungültig | 0 |
| 0x804473 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Signal Spiegel-Taster ungültig | 0 |
| 0x804474 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): Fenster-Taster hängt | 0 |
| 0x804475 | Bedieneinheit Schaltzentrum Tür (SZT), (LIN): HK-Wippe hängt | 0 |
| 0x804483 | RLS (LIN-Slave): Fehler Beschlagsensor | 0 |
| 0x804484 | RLS (LIN-Slave): Hardwarefehler Regensensor | 0 |
| 0x804485 | RLS (LIN-Slave): Hardwarefehler der Solarsensorik | 0 |
| 0x804486 | RLS (LIN-Slave): Hardwarefehler Lichtsensor | 0 |
| 0x804487 | RLS (LIN-Slave): Regensensor nicht auf Scheibe eingemessen | 0 |
| 0x804488 | RLS (LIN-Slave): Scheibentyp für Lichtsensor nicht festgelegt | 0 |
| 0x804489 | RLS (LIN-Slave): Überspannung | 1 |
| 0x80448A | RLS (LIN-Slave): Übertemperatur | 1 |
| 0x80448B | Regenschließen RLS: Keine Deaktivierung im erwarteten Zeitfenster | 1 |
| 0x80448C | Regenschließen BDC: Keine Deaktivierung vom FZD im erwarteten Zeitfenster | 1 |
| 0x8044A3 | Leitung Hupe (C_HORN): Kurzschluss nach Masse oder Relais defekt | 0 |
| 0x8044A4 | Leitung Hupe (C_HORN): Kurzschluss nach Plus oder Relaiskleber oder Leitungsunterbrechung | 0 |
| 0x8044A5 | Leitung Hupe (C_HORN): Sicherung Hupe | 0 |
| 0x8044B0 | Schaltpaddles: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8044B1 | Schaltpaddles: Überlast oder Kurzschluss nach Masse | 0 |
| 0x8044B3 | Schaltpaddles: Dauerbetätigung | 1 |
| 0x8044B5 | Schaltpaddles: Mehrfachbetätigung | 1 |
| 0x8044B8 | Frontlicht-Steuergerät links: Unplausibler Zustand Blinkfunktion | 0 |
| 0x8044B9 | Frontlicht-Steuergerät rechts: Unplausibler Zustand Blinkfunktion | 0 |
| 0x8044BA | Frontlicht-Steuergerät links: Unplausibler Zustand Abblendlichtfunktion | 0 |
| 0x8044BB | Frontlicht-Steuergerät rechts: Unplausibler Zustand Abblendlichtfunktion | 0 |
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
| 0x80482E | Falsche HW-Variante | 0 |
| 0x804843 | Heckklappensensor defekt | 0 |
| 0x804844 | Türkontakt Fahrertür hinten oben: Leitungsunterbrechung oder defekt | 0 |
| 0x804847 | Türkontakt Beifahrertür hinten oben: Leitungsunterbrechung oder defekt | 0 |
| 0x80484A | Taster Heckklappe Aussen (T_HKL_S): Dauerbetätigung | 0 |
| 0x80484B | Taster Heckscheibe (TOEHS), Frontklappe (TOEFKI) oder Untere Heckklappe (TOEHKU): Dauerbetätigung | 0 |
| 0x80484C | Vorrastkontakt (VRK) der Soft-Close-Automatik(SCA): Kurzschluss oder Leitungsunterbrechung oder Soft-Close-Automatik klemmt oder Heckklappenkontakt defekt | 0 |
| 0x80484D | Öffnen Heckklappe blockiert, wegen fehlendem Status des Anhänger-Anschluss-Geräts (AAG) | 1 |
| 0x804850 | FBD-Empfänger: Initialisierung fehlgeschlagen (Auto-Init) | 0 |
| 0x804851 | NFC-Reader innen vorne: Antenne defekt oder falsche Variante verbaut | 0 |
| 0x804852 | NFC-Reader innen vorne: Antenne nicht gesteckt | 0 |
| 0x804853 | NFC-Reader innen vorne: Falschverbau | 0 |
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
| 0x804887 | Ausgang LC_R0 defekt | 0 |
| 0x804888 | Ausgang LC_R0 hat Kurzschluss | 0 |
| 0x804889 | Ausgang LC_R1 defekt | 0 |
| 0x804890 | Ausgang LC_R1 hat Kurzschluss | 0 |
| 0x804891 | Ausgang LC_R2 defekt | 0 |
| 0x804892 | Ausgang LC_R2 hat Kurzschluss | 0 |
| 0x804893 | Ausgang LC_R3 defekt | 0 |
| 0x804894 | Ausgang LC_R3 hat Kurzschluss | 0 |
| 0x8048A0 | Heckwischer: Kurzschluss nach Masse | 0 |
| 0x8048A1 | Heckwischer, Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8048A3 | Heckwischer defekt oder Wischer Rücksetzkontakt schaltet nicht ein  (Heckwischer Blockiert) | 0 |
| 0x8048D2 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): EEPROM Fehler | 0 |
| 0x8048D4 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Überlastung PWM | 0 |
| 0x8048D5 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Taster hängt | 0 |
| 0x8048DA | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): EEPROM Fehler | 0 |
| 0x8048DC | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Überlastung PWM | 0 |
| 0x8048DD | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Taster hängt | 0 |
| 0x8048E0 | Sitzheizung BFH (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048E2 | Sitzheizung BFH (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048E4 | Sitzheizung BFH (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x8048E5 | Sitzheizung BFH (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048E7 | Sitzheizung BFH (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x8048E8 | Sitzheizung BFH (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048EA | Sitzheizung BFH (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x8048EB | Sitzheizung BFH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x8048ED | Sitzheizung BFH  (LIN): Interner Steuergerätefehler | 0 |
| 0x8048EE | Sitzheizung BFH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x8048F0 | Sitzheizung FAH (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048F2 | Sitzheizung FAH (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048F4 | Sitzheizung FAH (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x8048F5 | Sitzheizung FAH (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048F7 | Sitzheizung FAH (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x8048F8 | Sitzheizung FAH (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048FA | Sitzheizung FAH (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x8048FB | Sitzheizung FAH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x8048FD | Sitzheizung FAH  (LIN): Interner Steuergerätefehler | 0 |
| 0x8048FE | Sitzheizung FAH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804900 | Sitzheizung BF (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804902 | Sitzheizung BF (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804904 | Sitzheizung BF (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x804905 | Sitzheizung BF (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804907 | Sitzheizung BF (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x804908 | Sitzheizung BF (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x80490A | Sitzheizung BF (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x80490B | Sitzheizung BF (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x80490D | Sitzheizung BF  (LIN): Interner Steuergerätefehler | 0 |
| 0x80490E | Sitzheizung BF (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804910 | Sitzheizung FA (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804912 | Sitzheizung FA (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804914 | Sitzheizung FA (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x804915 | Sitzheizung FA (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804917 | Sitzheizung FA (LIN), Temperatursensor Kissen unplausibles Signal | 0 |
| 0x804918 | Sitzheizung FA (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x80491A | Sitzheizung FA (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x80491B | Sitzheizung FA (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x80491D | Sitzheizung FA  (LIN): Interner Steuergerätefehler | 0 |
| 0x80491E | Sitzheizung FA (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804920 | Sensorversorgungsspannung: Kurzschluss gegen Minus | 0 |
| 0x804921 | Sensorversorgungsspannung: Kurzschluss gegen Plus oder Unterbrechung | 0 |
| 0x804922 | Sensorversorgungsspannung: Signal unplausibel | 0 |
| 0x804943 | Sonnenrollo Heck: Leitungsunterbrechung | 0 |
| 0x804947 | Sonnenrollo Heck, Leitung öffnen: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x804948 | Sonnenrollo Heck, Leitung schließen: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x804949 | Sonnenrollo Heck, Leitung öffnen: Überlast | 0 |
| 0x80494A | Sonnenrollo Heck, Leitung schließen: Überlast | 0 |
| 0x80494B | Sonnenrollo Heck, Leitung öffnen: Kurzschluss nach Plus | 0 |
| 0x80494C | Sonnenrollo Heck, Leitung schließen: Kurzschluss nach Plus | 0 |
| 0x804950 | Tanksensor links: Kurzschluss nach Masse | 0 |
| 0x804951 | Tanksensor links: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804953 | Tanksensor rechts: Kurzschluss nach Masse | 0 |
| 0x804954 | Tanksensor rechts: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804956 | Tanksensor links: ausserhalb zulässiger Bereich unten | 0 |
| 0x804957 | Tanksensor links: ausserhalb zulässiger Bereich oben | 0 |
| 0x804958 | Tanksensor rechts: ausserhalb zulässiger Bereich unten | 0 |
| 0x804959 | Tanksensor rechts: ausserhalb zulässiger Bereich oben | 0 |
| 0x804961 | Cargo-SG: Interner Hardware-Fehler | 0 |
| 0x804962 | Cargo-SG: Fehler Aktuator Links | 0 |
| 0x804963 | Cargo-SG: Fehler Aktuator Rechts | 0 |
| 0x8049A0 | Schalterblock Sitz Extensions Fahrer: interner Fehler | 0 |
| 0x8049A1 | Schalterblock Sitz Extensions Fahrer: Taster hängt | 0 |
| 0x8049A2 | Schalterblock Sitz Extensions Fahrerseite hinten: interner Fehler | 0 |
| 0x8049A3 | Schalterblock Sitz Extensions Fahrerseite hinten: Taster hängt | 0 |
| 0x8049A4 | Schalterblock Sitz Extensions Beifahrer: interner Fehler | 0 |
| 0x8049A5 | Schalterblock Sitz Extensions Beifahrer: Taster hängt | 0 |
| 0x8049A6 | Schalterblock Sitz Extensions Beifahrer hinten: interner Fehler | 0 |
| 0x8049A7 | Schalterblock Sitz Extensions Beifahrer hinten: Taster hängt | 0 |
| 0x8049B0 | Sonnenrollo FA hinten (LIN): Interner Elektronikfehler | 0 |
| 0x8049B1 | Sonnenrollo FA hinten (LIN): Kurzschluss | 0 |
| 0x8049B2 | Sonnenrollo FA hinten (LIN): Leitungsunterbrechung | 0 |
| 0x8049B3 | Sonnenrollo FA hinten (LIN): Schalter hängt | 0 |
| 0x8049B4 | Sonnenrollo BF hinten (LIN): Interner Elektronikfehler | 0 |
| 0x8049B5 | Sonnenrollo BF hinten (LIN): Kurzschluss | 0 |
| 0x8049B6 | Sonnenrollo BF hinten (LIN): Leitungsunterbrechung | 0 |
| 0x8049B7 | Sonnenrollo BF hinten (LIN): Schalter hängt | 0 |
| 0x804A00 | Armauflagenheizung BF (LIN), Heizfeld Beifahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A01 | Armauflagenheizung BF (LIN), Heizfeld Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A02 | Armauflagenheizung BF (LIN), Temperatursensor Beifahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A03 | Armauflagenheizung BF (LIN), Temperatursensor Beifahrertür: Unplausibles Signal | 0 |
| 0x804A04 | Armauflagenheizung BF (LIN), Temperatursensor Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A05 | Armauflagenheizung BF (LIN), Temperatursensor Mittelarmlehne: Unplausibles Signal | 0 |
| 0x804A06 | Armauflagenheizung BF (LIN): Interner Steuergerätefehler | 0 |
| 0x804A07 | Armauflagenheizung BF (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A08 | Armauflagenheizung BF (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A09 | Armauflagenheizung BF (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A0A | Armauflagenheizung BFH (LIN), Heizfeld Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0B | Armauflagenheizung BFH (LIN), Heizfeld Tür Beifahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0C | Armauflagenheizung BFH (LIN), Temperatursensor Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0D | Armauflagenheizung BFH (LIN), Temperatursensor Mittelarmlehne Fond: Unplausibles Signal | 0 |
| 0x804A0E | Armauflagenheizung BFH (LIN), Temperatursensor Tür Beifahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0F | Armauflagenheizung BFH (LIN), Temperatursensor Tür Beifahrerseite hinten: Unplausibles Signal | 0 |
| 0x804A10 | Armauflagenheizung BFH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A11 | Armauflagenheizung BFH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A12 | Armauflagenheizung FA (LIN), Heizfeld Fahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A13 | Armauflagenheizung FA (LIN), Heizfeld Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A14 | Armauflagenheizung FA (LIN), Temperatursensor Fahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A15 | Armauflagenheizung FA (LIN), Temperatursensor Fahrertür: Unplausibles Signal | 0 |
| 0x804A16 | Armauflagenheizung FA (LIN), Temperatursensor Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A17 | Armauflagenheizung FA (LIN), Temperatursensor Mittelarmlehne: Unplausibles Signal | 0 |
| 0x804A18 | Armauflagenheizung FA (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A19 | Armauflagenheizung BFH (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A1A | Armauflagenheizung FA (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A1B | Armauflagenheizung FA (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A1C | Armauflagenheizung FAH (LIN), Heizfeld Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A1D | Armauflagenheizung FAH (LIN), Heizfeld Tür Fahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A1E | Armauflagenheizung FAH (LIN), Temperatursensor Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A1F | Armauflagenheizung FAH (LIN), Temperatursensor Mittelarmlehne Fond: Unplausibles Signal | 0 |
| 0x804A20 | Armauflagenheizung FAH (LIN), Temperatursensor Tür Fahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A21 | Armauflagenheizung FAH (LIN), Temperatursensor Tür Fahrerseite hinten: Unplausibles Signal | 0 |
| 0x804A22 | Armauflagenheizung FAH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A23 | Armauflagenheizung FAH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A24 | Armauflagenheizung FAH (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A25 | Armauflagenheizung BFH (LIN): Interner Steuergerätefehler | 0 |
| 0x804A79 | Antennenleitung Antennenverstärker - WCA: Leitungsfehler | 0 |
| 0x804A7A | WCA: temporäre Funktionseinschränkung | 0 |
| 0x804A7B | WCA: HW-Fehler | 0 |
| 0x804A7C | WCA: Falschverbau | 0 |
| 0x804A7D | Antennenverstärker: Fehler Spannungsversorgung | 0 |
| 0x804A7E | Antennenleitung Antennenverstärker - Dachantenne: Leitungsfehler | 0 |
| 0x804A7F | Antennenverstärker: HW-Fehler | 0 |
| 0xD9040A | FA-CAN Control Module Bus OFF | 0 |
| 0xD9050A | ZSG-CAN Control Module Bus OFF | 0 |
| 0xD9060A | CAS-CAN Control Module Bus OFF | 0 |
| 0xD90BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD90C00 | LIN Master A: Kurzschluss | 0 |
| 0xD90C01 | LIN Master A: Keine Kommunikation | 0 |
| 0xD90C02 | LIN Master A: Kommunikation gestört | 0 |
| 0xD90C03 | LIN Master B: Kurzschluss | 0 |
| 0xD90C04 | LIN Master B: Keine Kommunikation | 0 |
| 0xD90C05 | LIN Master B: Kommunikation gestört | 0 |
| 0xD90C06 | LIN Master C: Kurzschluss | 0 |
| 0xD90C07 | LIN Master C: Keine Kommunikation | 0 |
| 0xD90C08 | LIN Master C: Kommunikation gestört | 0 |
| 0xD90C09 | LIN Master D: Kurzschluss | 0 |
| 0xD90C0A | LIN Master D: Keine Kommunikation | 0 |
| 0xD90C0B | LIN Master D: Kommunikation gestört | 0 |
| 0xD90C0C | LIN Master E: Kurzschluss | 0 |
| 0xD90C0D | LIN Master E: Keine Kommunikation | 0 |
| 0xD90C0E | LIN Master E: Kommunikation gestört | 0 |
| 0xD90C0F | LIN Master F: Kurzschluss | 0 |
| 0xD90C10 | LIN Master F: Keine Kommunikation | 0 |
| 0xD90C11 | LIN Master F: Kommunikation gestört | 0 |
| 0xD90C12 | LIN Master G: Kurzschluss | 0 |
| 0xD90C13 | LIN Master G: Keine Kommunikation | 0 |
| 0xD90C14 | LIN Master G: Kommunikation gestört | 0 |
| 0xD90C15 | LIN Master H: Kurzschluss | 0 |
| 0xD90C16 | LIN Master H: Keine Kommunikation | 0 |
| 0xD90C17 | LIN Master H: Kommunikation gestört | 0 |
| 0xD90C18 | LIN Master I: Kurzschluss | 0 |
| 0xD90C19 | LIN Master I: Keine Kommunikation | 0 |
| 0xD90C1A | LIN Master I: Kommunikation gestört | 0 |
| 0xD90C1B | LIN Master J: Kurzschluss | 0 |
| 0xD90C1C | LIN Master J: Keine Kommunikation | 0 |
| 0xD90C1D | LIN Master J: Kommunikation gestört | 0 |
| 0xD90C1E | LIN Master W: Kurzschluss | 0 |
| 0xD90C1F | LIN Master W: Keine Kommunikation | 0 |
| 0xD90C20 | LIN Master W: Kommunikation gestört | 0 |
| 0xD90C21 | Armauflagenheizung BF (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C23 | Armauflagenheizung BFH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C25 | Armauflagenheizung FA (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C27 | Armauflagenheizung FAH (LIN): Fehlender LIN-Slave | 0 |
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
| 0xD90D2C | UGDO: Fehlender LIN-Slave | 0 |
| 0xD90D2D | UGDO: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D37 | Innenlichteinheit 1 (ILE1): Falsche Variante verbaut | 0 |
| 0xD90D38 | Innenlichteinheit 1 (ILE1): Fehlender LIN-Slave | 0 |
| 0xD90D39 | Innenlichteinheit 1 (ILE1): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D3B | Sitzheizung FA (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D3C | Sitzheizung FA (LIN) oder Armauflagenheizung FA (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D3E | Sitzheizung BF (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D3F | Sitzheizung BF (LIN) oder Armauflagenheizung BF (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D41 | Sitzheizung FAH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D42 | Sitzheizung FAH (LIN) oder Armauflagenheizung FAH (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D44 | Sitzheizung BFH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D45 | Sitzheizung BFH (LIN) oder Armauflagenheizung BFH (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D47 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D48 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D4A | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D4B | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D50 | Fehlender NFC-Reader innen vorne | 0 |
| 0xD90D51 | WCA: Fehlende WCA | 0 |
| 0xD90D59 | BE_Audio unerwarteter LIN-slave | 0 |
| 0xD90D60 | BE_Audio fehlender LIN-slave | 0 |
| 0xD90D61 | BE_Audio falsche Variante verbaut | 0 |
| 0xD90D62 | BE_Audio Taster hängt | 0 |
| 0xD90D63 | Innenlichteinheit 3 (ILE3):  Falsche Variante verbaut | 0 |
| 0xD90D64 | Innenlichteinheit 3 (ILE3): Fehlender LIN-Slave | 0 |
| 0xD90D65 | Innenlichteinheit 3 (ILE3): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D66 | Innenlichteinheit 2 (ILE2): Falsche Variante verbaut | 0 |
| 0xD90D67 | Innenlichteinheit 2 (ILE2): Fehlender LIN-Slave | 0 |
| 0xD90D68 | Innenlichteinheit 2 (ILE2): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D69 | Stromverteiler LIN-Modul (JBR_LIN): Falsche Variante verbaut | 1 |
| 0xD90D70 | Schalterblock Sitz Extensions Fahrer: Falsche Variante verbaut | 0 |
| 0xD90D71 | Schalterblock Sitz Extensions Fahrer: Fehlender LIN-Slave | 0 |
| 0xD90D72 | Schalterblock Sitz Extensions Fahrer: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D73 | Schalterblock Sitz Extensions Fahrerseite hinten: Falsche Variante verbaut | 0 |
| 0xD90D74 | Schalterblock Sitz Extensions Fahrerseite hinten: Fehlender LIN-Slave | 0 |
| 0xD90D75 | Schalterblock Sitz Extensions Fahrerseite hinten: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D76 | Schalterblock Sitz Extensions Beifahrer: Falsche Variante verbaut | 0 |
| 0xD90D77 | Schalterblock Sitz Extensions Beifahrer: Fehlender LIN-Slave | 0 |
| 0xD90D78 | Schalterblock Sitz Extensions Beifahrer: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D79 | Schalterblock Sitz Extensions Beifahrer hinten: Falsche Variante verbaut | 0 |
| 0xD90D7A | Schalterblock Sitz Extensions Beifahrer hinten: Fehlender LIN-Slave | 0 |
| 0xD90D7B | Schalterblock Sitz Extensions Beifahrer hinten: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D81 | Sonnenrollo FA hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D82 | Sonnenrollo FA hinten (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D84 | Sonnenrollo BF hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D85 | Sonnenrollo BF hinten (LIN): Nicht erwarteter LIN-Slave | 0 |
| 0xD90D8A | Cargo-SG: Nicht erwarteter LIN-Slave | 0 |
| 0xD90D8B | Cargo-SG: Fehlender LIN-Slave | 0 |
| 0xD90D90 | Bedieneinheit Mittelkonsole (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D91 | Bedieneinheit Mittelkonsole (LIN): nicht erwarteter LIN-slave | 0 |
| 0xD90D95 | Stromverteiler LIN-Modul (JBR_LIN): Unerwarteter LIN-Slave | 1 |
| 0xD90D96 | Stromverteiler LIN-Modul (JBR_LIN): Fehlender LIN-Slave | 1 |
| 0xD91495 | CAN-Botschaft, Objektdaten Blendfreier Fernlicht-Assistent (OBJDT_NGL_MAB_ASST): Timeout | 1 |
| 0xD914A5 | CAN-Botschaft, Drehmoment Kurbelwelle 1 (TORQ_CRSH_1): Timeout | 1 |
| 0xD91573 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): Timeout | 1 |
| 0xD91599 | CAN-Botschaft, Längsbeschleunigung Schwerpunkt (ACLNX_MASSCNTR): Timeout | 1 |
| 0xD9159F | CAN-Botschaft, Giergeschwindigkeit Fahrzeug (VYAW_VEH): Timeout | 1 |
| 0xD915A1 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Timeout | 1 |
| 0xD915B9 | CAN-Botschaft, Wärmemanagement Motorsteuerung (HT_MGT_ENG_CTR): Timeout | 1 |
| 0xD915C0 | CAN-Botschaft, Status Anzeige Fahrerassistenzsystem (ST_DISP_DRASY): Timeout | 1 |
| 0xD9161E | CAN-Botschaft, Status Night-Vision  (STAT_NIVI): Timeout | 1 |
| 0xD91681 | CAN-Botschaft, Bordnetz Spannungswert (BN_UVL): Timeout | 1 |
| 0xD91692 | CAN-Botschaft, Steuerung Fernlicht-Assistent (CTR_MAB_ASST): Timeout | 1 |
| 0xD91697 | CAN-Botschaft, Status Gurt Kontakt Sitzbelegung (ST_BLT_CT_SOCCU): Timeout | 1 |
| 0xD916C3 | CAN-Botschaft, Status Notruf (ST_ECAL): Timeout | 1 |
| 0xD916CA | CAN-Botschaft, Außentemperatur (A_TEMP): Timeout | 1 |
| 0xD916E4 | CAN-Botschaft, Status Anhänger (STAT_ANHAENGER): Timeout | 1 |
| 0xD916F8 | CAN-Botschaft, Uhrzeit-Datum (UHRZEIT_DATUM): Timeout | 1 |
| 0xD91701 | CAN-Botschaft, Ist Lenkwinkel Fahrer (AVL_STEA_DV): Timeout | 1 |
| 0xD91702 | CAN-Botschaft, Lenkwinkel Vorderachse Effektiv (STEA_FTAX_EFFV): Timeout | 1 |
| 0xD9170B | CAN-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): Timeout | 1 |
| 0xD9171C | CAN-Botschaft, Anzeige Fahrerassistenzsystem (DISP_DRASY): Timeout | 1 |
| 0xD91728 | CAN-Botschaft, Relativzeit (RELATIVZEIT): Timeout | 1 |
| 0xD91730 | CAN-Botschaft, Kilometerstand-Reichweite (KILOMETERSTAND): Timeout | 1 |
| 0xD91742 | CAN-Botschaft, Status Cabrio Dach (ST_CABRF): Timeout oder CRC-Fehler | 1 |
| 0xD9176C | CAN-Botschaft, Coach-Tür Begrenzung Geschwindigkeit (CODO_LIM_V): Timeout | 1 |
| 0xD91793 | CAN-Botschaft, LCD Helligkeit Regelung (LCD_BRIG_CLCTR): Timeout | 1 |
| 0xD917A0 | CAN-Botschaft, Fahrzeugzustand (FZZSTD): Timeout | 1 |
| 0xD917B3 | CAN-Botschaft, Powermanagement Verbrauchersteuerung (POWERMGMT_CTR_COS): Timeout | 1 |
| 0xD917F9 | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Timeout | 1 |
| 0xD91837 | CAN-Botschaft, Status Kamera Kalibrierung (ST_CAM_CAL): Timeout | 1 |
| 0xD91C83 | CAN-Botschaft, Höhenstand Fahrzeug gefiltert (HGLV_VEH_1): Timeout | 1 |
| 0xD91C93 | CAN-Botschaft, IPC Gateway (IPC_GW): Timeout | 1 |
| 0xD91CCD | CAN-Botschaft, Kamera Frontraumueberwachung 2 (CAM_HDWOBS_2): Timeout | 1 |
| 0xD91D3D | CAN-Botschaft, Radar Frontraumueberwachung 1 (RADA_HDWOBS_1): Timeout | 1 |
| 0xD91D98 | CAN-Botschaft, Kamera Frontraumueberwachung (CAM_HDWOBS): Timeout | 1 |
| 0xD91D9E | CAN-Botschaft, Steuerung Vibration Lenkrad Anzeige Aussenspiegel 2015 (CTR_VIB_STW_DISP_EXMI_SP2015): Timeout | 1 |
| 0xD91DE0 | CAN-Botschaft, Status Licht Außen Frontelektronik_1 Links (ST_LP_EX_FE_1_LH): Timeout | 1 |
| 0xD91DE6 | CAN-Botschaft, Status Licht Außen Frontelektronik_1 Rechts (ST_LP_EX_FE_1_RH): Timeout | 1 |
| 0xD91DFB | CAN-Botschaft, Status Licht Außen Frontelektronik_2 Links (ST_LP_EX_FE_2_LH): Timeout | 1 |
| 0xD91DFC | CAN-Botschaft, Soll Anzeige Vibration Warnung Fahrspurwechsel (TAR_DISP_VIB_WARN_LNCH): Timeout | 1 |
| 0xD91DFD | CAN-Botschaft, Status Licht Außen Frontelektronik_2 Rechts (ST_LP_EX_FE_2_RH): Timeout | 1 |
| 0xD91E2A | CAN-Botschaft, Status BFS (STAT_BFS): Timeout | 1 |
| 0xD91E31 | CAN-Botschaft, Status Gentleman FAS (STAT_GENT_FAS): Timeout | 1 |
| 0xD91E32 | CAN-Botschaft, Status FAS (STAT_FAS): Timeout | 1 |
| 0xD91E3F | CAN-Botschaft, Soll Haptik Warnung Fahrspurverlassen (TAR_FEEL_WARN_LNDP): Timeout | 1 |
| 0xD91E40 | CAN-Botschaft, Soll Haptik Warnung Querführungsassistenz (TAR_FEEL_WARN_LGA): Timeout | 1 |
| 0xD91E42 | CAN-Botschaft, Status Klima Front (STAT_KLIMA_FRONT): Timeout | 1 |
| 0xD91E46 | CAN-Botschaft, Status Klima Front Bedienteil (STAT_KLIMA_BEDIENTEIL): Timeout | 1 |
| 0xD91EBF | CAN-Botschaft, Steuerung Wasserventile (CTR_HVEH): Timeout | 1 |
| 0xD91EDA | CAN-Botschaft, Status Heckklappenlift (STAT_HKL): Timeout | 1 |
| 0xD91EF0 | CAN-Botschaft, Status Klima Standfunktionen (STAT_KLIMA_STAND): Timeout | 1 |
| 0xD91F0B | Flexray-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): Timeout | 1 |
| 0xD91F44 | CAN-Botschaft, Steuerung Cabrio Dach (CTR_CABRF): Timeout | 1 |
| 0xD91F69 | CAN-Botschaft, Status Reifen (ST_TYR): Timeout | 1 |
| 0xD91FF9 | Flexray-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Timeout | 1 |
| 0xD9201E | CAN-Botschaft, Status Powermanagement Gateway (ST_PWMG_GW): Timeout | 1 |
| 0xD94001 | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): CRC-Fehler oder Alive | 1 |
| 0xD94002 | CAN-Botschaft, Drehmoment Kurbelwelle 1 (TORQ_CRSH_1): CRC-Fehler oder Alive | 1 |
| 0xD94003 | CAN-Botschaft, Coach-Tür Begrenzung Geschwindigkeit (CODO_LIM_V): CRC-Fehler oder Alive | 1 |
| 0xD94006 | CAN-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): CRC-Fehler oder Alive | 1 |
| 0xD94007 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): CRC-Fehler oder Alive | 1 |
| 0xD94013 | CAN-Botschaft, Steuerung CAS Sicherheitsfahrzeug (CTR_CAS_SFYC): CRC-Fehler oder Alive | 1 |
| 0xD94015 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): CRC-Fehler oder Alive | 1 |
| 0xD94016 | CAN-Botschaft, Höhenstand Fahrzeug gefiltert (HGLV_VEH_1): Alive | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUSI_KLEMMEN_DEAKTIVIERUNGS_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | PWF Fahren |
| 0x02 | PWF Fahrbereitschaft beenden |
| 0x03 | PWF Unbekannt und Geschwindihkeit |
| 0x04 | PWF Unbekannt und Geschwindihkeit Unbekannt |
| 0x05 | PWF Unbekannt und Geschwindihkeit nicht empfangen |
| 0x06 | PWF Unbekannt und Geschwindihkeit CRC Alive Fehler |
| 0x07 | StatusKlemme groessergleich KL30F |
| 0x08 | StatusKlemme groessergleich KL30B |
| 0x09 | StatusKlemme groessergleich KL15 |
| 0x0A | Interner Integritätsfehler |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4001 | ART DER ABSCHALTUNG BZW NICHTABSCHALTUNG KL30F | 0-n | High | 0xFF | TAB_CAS_ART_ABSCHALTUNG_KL30F | - | - | - |
| 0x4002 | BATTERIESPANNUNGSPANNUNG ENDE BEI FEHLERSPEICHEREINTRAG | mV | High | unsigned int | - | 15.0 | 1.0 | 0.0 |
| 0x4005 | GRUND_ABSCHALTUNG_KL30F | 0-n | High | 0xFF | TAB_UW_GRUND_ABSCHALTUNG_KL30F | - | - | - |
| 0x4030 | INTERNER_FEHLER | 0-n | High | 0xFF | TAB_INTERNER_FEHLER | - | - | - |
| 0x4031 | STATUS_UNTERBRECHUNG | 0-n | High | 0xFF | TAB_STATUS_UNTERBRECHUNG | - | - | - |
| 0x4032 | TAB_STATUS_KURZSCHLUSS | 0-n | High | 0xFF | TAB_STATUS_UNTERBRECHUNG | - | - | - |
| 0x4033 | VERBAUORTTABELLE_LIN_SLAVES | 0-n | High | 0xFF | TAB_VERBAUORTTABELLE | - | - | - |
| 0x4034 | LIN_VERBAUORT_ANZAHL | Byte | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4036 | FEHLERSTATUS_HANDSOFFDETECTION | 0-n | High | 0xFF | TAB_HOD_ERROR | - | - | - |
| 0x4037 | FEHLERART_KURZSCHLUSS | 0-n | High | 0xFF | TAB_FEHLERART_HW | - | - | - |
| 0x4040 | SPANNUNG_BORDNETZ | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4041 | KLEMMEN_STATUS | 0-n | High | 0xFF | TAB_UW_KLEMMEN_STATUS | - | - | - |
| 0x4042 | LICHTSCHALTER_STELLUNG | 0-n | High | 0xFF | TAB_UW_LICHTSCHALTER | - | - | - |
| 0x4043 | GRUND_UNTERSPANNUNGS_ABSCHALTUNG | 0-n | High | 0xFF | TAB_UW_GRUND_UNTERSPG_ABSCHALTUNG | - | - | - |
| 0x4044 | LAMPENMAPPING_FEHLER_TYPE | 0-n | High | 0xFF | TAB_UW_LAMPENMAPPING_FEHLER_TYPE | - | - | - |
| 0x4045 | LAMPENMAPPING_INDEX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4048 | SPANNUNG_TMS | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4050 | STAT_M_TASTER_FEHLER | 0-n | High | 0xFF | TAB_M_TASTER_FEHLER | - | - | - |
| 0x4051 | TAB_HECKKLAPPENSENSOR_DEFEKT | 0-n | High | 0xFF | TAB_HECKKLAPPENSENSOR_DEFEKT | - | - | - |
| 0x4070 | FEHLERART_ILE | 0-n | High | 0xFF | TAB_FEHLERART_ILE | - | - | - |
| 0x4080 | SPANNUNG_KL30L1 | V | High | unsigned char | - | 1.0 | 1000.0 | 0.0 |
| 0x4081 | SPANNUNG_KL30L2 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x40AC | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40AD | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40AE | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40AF | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40B0 | SHORTCUT_INFO | 0-n | High | 0xFF | TAB_UW_SHORTCUT_INFO | - | - | - |
| 0x40B1 | FRAME_ERROR_INFO | 0-n | High | 0xFF | TAB_UW_FRAME_ERROR_INFO | - | - | - |
| 0x40B2 | EXPECTED NODE VARIANT | HEX | High | unsigned char | - | - | - | - |
| 0x40B3 | NODE VARIANT OF LIN SLAVE | HEX | High | unsigned char | - | - | - | - |
| 0x40B4 | LIN NODE ACCESS | HEX | High | unsigned char | - | - | - | - |
| 0x40BE | LIN_EXPECTED_NODE_VARIANT2 | HEX | High | unsigned char | - | - | - | - |
| 0x40C0 | CRC_OR_ALIVE_FAILURE | 0-n | High | 0xFF | TAB_UW_CRC_OR_ALIVE_FAILURE | - | - | - |
| 0x40C1 | BE_AUDIO_TASTE | 0-n | High | 0xFF | BE_AUDIO_TASTE | - | - | - |
| 0x40C2 | FEHLERART_MULTIFUNKTIONS_LENKRAD | 0-n | High | 0xFF | TAB_MULTIFUNKTIONS_LENKRAD | - | - | - |
| 0x40C3 | FEHLERART_SZL_LENKSTOCK_BLINKER | 0-n | High | 0xFF | TAB_SZL_LENKSTOCK_BLINKER | - | - | - |
| 0x40C4 | FEHLERART_SZL_LENKSTOCK_WISCHER | 0-n | High | 0xFF | TAB_SZL_LENKSTOCK_WISCHER | - | - | - |
| 0x40C5 | KURZSCHLUSS_ODER_LEITUNGSABBRUCH | hexadezimale | High | unsigned char | - | - | - | - |
| 0x40C6 | SPANNUNG_GUELTIGEN_BEREICH | hexadezimale | High | unsigned char | - | - | - | - |
| 0x40C7 | INT_FEHLER_SITZHEIZUNG | hexadezimale | High | unsigned char | - | - | - | - |
| 0x40C8 | SONNENROLLO_SCHALTER_HAENGT | 0-n | High | 0xFF | TAB_SONNENROLLO_SCHALTER_HAENGT | - | - | - |
| 0x40D0 | FH_FEHLER_URSACHE | 0-n | High | 0xFF | TAB_FH_FEHLER | - | - | - |
| 0x40D1 | WwSafeMech | 0-n | High | 0xFF | TAB_WWSAFEMECH | - | - | - |
| 0x40F6 | VERBAUORT_TAGE | 0-n | High | 0xFF | TAB_UW_VERBAUORT_TAGE | - | - | - |
| 0x40FA | UW_SCHLUESSELPOSITION | 0-n | High | 0xFF | TAB_UW_SCHLUESSEL_POSITION | - | - | - |
| 0x4102 | TYP_FEHLER_HERSTELLUNG_FB | 0-n | High | 0xFF | TAB_TYP_FEHLER_HERSTELLUNG_FB | - | - | - |
| 0x4107 | LAMPENMAPPING_INDEX_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4120 | _CARGO_LEITUNG_ZUSTAND | 0-n | High | 0xFF | TAB_CARGO_LEITUNGSZUSTAND | - | - | - |
| 0x4121 | LICHT_FUSI_KODIERPARAMETER | 0-n | High | 0xFF | TAB_LICHT_FUSI_KODIERPARAMETER | - | - | - |
| 0xD6C0 | Taste | 0-n | High | 0xFF | TAB_TASTEN | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GRUND_NICHT_ERKENNUNG_ID_GEBER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Timeout versendeter LF Ping BDC |
| 0x02 | Timeout Antwort ID Geber |
| 0x03 | Fehlerhafte Antwort ID Geber |
| 0x04 | Interner Integritätsfehler im Sicherheitsrelevanten Speicherbereich erkannt |

### HOD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Handsoff erkannt, QU_HOFF_RCOG_SEN_LIN = 0x9 |
| 0x01 | Handsoff funktionsbereit, QU_HOFF_RCOG_SEN_LIN = 0x1 |
| 0x02 | Handsoff nicht funktionsbereit oder Energiesparmode, QU_HOFF_RCOG_SEN_LIN = 0x5 oder 0xD oder 0xE oder 0xF |
| 0xFF | ungültiger Wert |

### HSS_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Höhenstandssensoren |
| 0x01 | Höhenstandssensoren durch CAN |
| 0x02 | Höhenstandssensoren an BDC |
| 0xFF | Wert ungültig |

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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x03001A | FH FA: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03001B | FH FA: Reversierung im Emergency-Modus | 1 |
| 0x03009A | FH BF: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03009B | FH BF: Reversierung im Emergency-Modus | 1 |
| 0x03009F | Fensterheber: Notbetrieb (Interner Fehler) | 0 |
| 0x03011A | FH FAH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03011B | FH FAH: Reversierung im Emergency-Modus | 1 |
| 0x03019A | FH BFH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03019B | FH BFH: Reversierung im Emergency-Modus | 1 |
| 0x030760 | FES Koordinator Innenraum Softwarefehler | 0 |
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
| 0x400099 | DTC_ECC_FAILURE | 0 |
| 0x4002FF | Too frequent writing on the same EEPROM block | 1 |
| 0x400700 | Secondary App Dummy DTC | 1 |
| 0x400701 | Secondary Network Dummy DTC | 1 |
| 0x400F00 | Application Startup Error | 0 |
| 0x804001 | Reset wegen Aufstart | 0 |
| 0x804002 | Reset durch Extern | 0 |
| 0x804003 | Reset wegen Loss Of Clock | 0 |
| 0x804004 | Reset durch PLL Überwachung | 0 |
| 0x804005 | Reset durch COP Watchdog | 0 |
| 0x804006 | ECUMA_RESET_CHKSTOP | 0 |
| 0x804007 | Reset wegen internem SW-Fehler | 0 |
| 0x804008 | Reset Low Voltage | 0 |
| 0x804009 | Reset wegen SW-Fehler | 0 |
| 0x80400C | Versorgungspannung kleiner 4,75V | 0 |
| 0x80400F | Ungültiger Board-ISR | 0 |
| 0x804010 | RCP FuSi: Plausibilisierung der Nahfelderkennung des ID-Gebers nicht ok | 0 |
| 0x804018 | ECUMA_STACK_OVERFLOW | 0 |
| 0x804019 | CANTP_E_COMM | 0 |
| 0x80401A | Übertemperatur in ECU erkannt | 0 |
| 0x80401B | CANIF_E_STOPPED | 0 |
| 0x80401C | PDUR_E_PDU_INSTANCE_LOST | 0 |
| 0x80401D | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x80401E | NVM_E_INTEGRITY_FAILED | 0 |
| 0x804020 | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x804022 | WDGM_E_SET_MODE | 0 |
| 0x804024 | PDUR_E_INIT_FAILED | 0 |
| 0x804025 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x804026 | MCU_E_CLOCK_FAILURE | 0 |
| 0x804027 | NVM_E_REQ_FAILED | 0 |
| 0x804028 | COMM_E_NET_START_IND_CHANNEL_1 | 0 |
| 0x804029 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x80402A | CANIF_TRCV_E_TRANSCEIVER | 0 |
| 0x80402B | LINIF_E_NC_NO_RESPONSE | 1 |
| 0x80402C | WDG_E_DISABLE_REJECTED | 0 |
| 0x804030 | Allgemeiner FuSi Fehler | 0 |
| 0x804035 | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x804036 | LINIF_E_RESPONSE | 1 |
| 0x804037 | FLS_E_WRITE_FAILED | 0 |
| 0x804039 | FLS_E_READ_FAILED | 0 |
| 0x80403D | PIA_E_IO_ERROR | 0 |
| 0x804040 | Interface VAM-CLI: Timeout Crash-Entriegeln nach Rollover-Crash | 1 |
| 0x804044 | Interrupts deaktiviert aufgrund zu häufigem Aufruf | 0 |
| 0x804045 | ZV FUSI: Entsichern der Türen von FuSi Komponente ausgeführt | 1 |
| 0x804046 | ZV FUSI: Sichern der Türen nicht ausgeführt da anschließendes Entsichern nicht möglich | 1 |
| 0x804048 | CA-HW-Treiber: Temperaturüberlast | 0 |
| 0x804049 | CA-HW-Treiber: Vorwarnung Temperaturüberlast | 0 |
| 0x80404A | CA: Antennenstatus niO | 1 |
| 0x804051 | LINSM_CODING_ACCESS_FAILED | 0 |
| 0x804052 | LINSM_CODING_WRONG_DATA | 0 |
| 0x804057 | JBR_LIN: Ansteuerleitung Abschalten 15N1 - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x804058 | JBR_LIN: Ansteuerleitung Abschalten 30B1,30B2 - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x804059 | JBR_LIN: Ansteuerleitung Abschalten HHS - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x80405A | JBR_LIN: Ansteuerleitung Abschalten 30F1,30F2 - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x80405B | JBR_LIN: Ansteuerleitung Einschalten 15N1 - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x80405C | JBR_LIN: Ansteuerleitung Einschalten 30B1,30B2 - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x80405D | JBR_LIN: Ansteuerleitung Einschalten HHS - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x80405E | JBR_LIN: Ansteuerleitung Einschalten 30F1,30F2 - Kurzschluss/Leitungsunterbrechung | 0 |
| 0x80405F | JBR_LIN: Versorgungsspannung Relais hinten Kurzschluss Masse | 0 |
| 0x8040BC | IBS Wakeup: Wecksignal unplausibel | 1 |
| 0x8040BD | BMW Applikation: Fehlerhafter interner Software Status | 0 |
| 0x8040BE | BMW Applikation: Runtime Assert Fehler | 0 |
| 0x8040C1 | KL30F: Anforderung  Abschaltung  wegen Buswecker | 1 |
| 0x8040C2 | KL30F: Anforderung  Abschaltung  wegen Einschlafverhinderer | 1 |
| 0x8040C4 | KL30F: Anforderung Reset wegen Buswecker | 1 |
| 0x8040C5 | KL30F: Anforderung Reset wegen Einschlafverhinderer | 1 |
| 0x8040C7 | Intelligenter Batteriesensor (IBS): Nachladegrenze erreicht | 1 |
| 0x8040C8 | Intelligenter Batteriesensor (IBS): Obere Startfähigkeitsgrenze erreicht | 1 |
| 0x8040C9 | Intelligenter Batteriesensor (IBS): Ruhestromverletzung  erkannt | 1 |
| 0x8040CA | Intelligenter Batteriesensor (IBS): Untere Startfähigkeitsgrenze erreicht | 1 |
| 0x8040D1 | Fehlerspeicher Erreichen Startfähigkeitsgrenze | 1 |
| 0x8040D3 | Signal QU_ST_CON_VEH hat die Codierung: Signalwert eingeschränkt gültig. | 0 |
| 0x8040D4 | Fahrbereitschaft bei ZV sichern | 1 |
| 0x8040D7 | Intelligenter Batteriesensor (IBS): Fremdladeerkennung 48V aktiv | 1 |
| 0x8040EA | LIN_E_TIMEOUT | 0 |
| 0x8040EB | CAN_E_TIMEOUT | 0 |
| 0x8040ED | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x8040EE | CANNM_E_INIT_FAILED | 0 |
| 0x8040EF | FLS_E_ERASE_FAILED | 0 |
| 0x8040F6 | Transponderspule: Notstart | 1 |
| 0x804141 | RTE Buffer Tracer Running | 0 |
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
| 0x804165 | BDC_HW_not_equipped_for_antenna_A6 | 0 |
| 0x804167 | BDC_HW_not_equipped_for_antenna_A7 | 0 |
| 0x804169 | BDC_HW_not_equipped_for_LF_antennas_A3_to_A5 | 0 |
| 0x80416C | CarSharing-Mode (CSM) | 0 |
| 0x804171 | KL50-Anforderung (Primärstart oder MSA-/Zustart): DME-Requests fehlerhaft | 1 |
| 0x804173 | KM: RESULT_WRONG_PARAMETER | 1 |
| 0x804174 | KM: RESULT_BUFFER_FULL | 1 |
| 0x804175 | Codierung VAM_LID_VARIANT: Ungültig | 1 |
| 0x804188 | Notlauf FuSi Abblendlicht aktiv | 0 |
| 0x804189 | Notlauf Fusi Fahrtrichtungsanzeiger aktiv | 0 |
| 0x8041A6 | SPI Fehler Body - SPOC | 0 |
| 0x8041C4 | Notlauf FuSi Bremslicht aktiv | 0 |
| 0x8041C5 | Kodierung: Lampenmapping unplausibel | 0 |
| 0x8041C6 | Außenlicht, Rollenmodus aktiv | 0 |
| 0x8044E0 | Schlüsseldaten-Service: Kein Schlüssel am Transponder erkannt | 1 |
| 0x804800 | CA_KM_request_invalid | 0 |
| 0x804801 | CA_PASEsrv_not_available | 0 |
| 0x804802 | CA_LF_telegram_not_sent | 0 |
| 0x804803 | CA_E5_session_key_crypto_timeout | 0 |
| 0x804804 | CA_session_key_crypto_nok | 0 |
| 0x804805 | CA_challenge_crypto_timeout | 0 |
| 0x804806 | CA_challenge_crypto_nok | 0 |
| 0x804807 | CA_response_RCI_timeout | 0 |
| 0x804808 | CA_response_crypto_timeout | 0 |
| 0x804809 | CA_response_check_nok | 0 |
| 0x80480A | CA_response_crypto_nok | 0 |
| 0x80480B | CA_LF_key_crypto_nok | 0 |
| 0x80480C | CA_keysearch_without_parameter | 0 |
| 0x80480D | CA: Schlüsselsuche abgebrochen wegen Unter- oder Überspannung | 1 |
| 0x80480E | CG: Schlüsselsuche abgebrochen wegen Unter- oder Überspannung | 1 |
| 0x80480F | WCA: Deaktiviert | 0 |
| 0x804810 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x804811 | PWF: Zustandsrestaurierung | 0 |
| 0x804812 | PWF: KL15 Aktivierung durch Hardware | 0 |
| 0x804814 | PWF lange Wohndauer | 0 |
| 0x804815 | PWF 30B-Abschaltung bei aktivem Bus | 0 |
| 0x804816 | PWF 30F-Abschaltung bei aktivem Bus | 0 |
| 0x804817 | PWF Fahrbereitschaft ausserhalb von Fahren | 0 |
| 0x804818 | PWF häufige Zustandswechsel | 0 |
| 0x804819 | PWF kein Motorstillstand in Wohnen | 0 |
| 0x80481A | PWF Übergang Abschaltung_durch_Kunden | 0 |
| 0x80481B | PWF Übergang Fahrbereitschaft_beenden nach Pruefen_Analyse_Diagnose | 0 |
| 0x80481C | PWF Übergang FB_herstellen nach FB_beenden | 0 |
| 0x80481D | PWF Übergang FB_herstellen nach Wohnen | 0 |
| 0x80481E | PWF Übergang OSFG erreicht | 0 |
| 0x80481F | PWF Übergang Pruefen_Analyse_Diagnose nach Fahren | 0 |
| 0x804820 | PWF Übergang Virtuelle_Batterie_entleert | 0 |
| 0x804821 | PWF Übergang Wohnen nach Pruefen_Analyse_Diagnose | 0 |
| 0x804824 | DM_Queue_FULL | 0 |
| 0x804825 | DM_Queue_DELETED | 0 |
| 0x804826 | PWF: Ping Pong fehlerhaft, Ersatzreaktion | 0 |
| 0x804827 | PWF: CAS Montagemodus gesetzt, Anlassersperre aktiv | 0 |
| 0x804828 | PWF: Anforderung Standfunktion nicht durchgeführt | 0 |
| 0x80482A | PWF: Battery Guard Call ausgelöst | 0 |
| 0x804930 | Deaktivierung der KL30B wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804931 | Deaktivierung der KL30F wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804932 | Versenden der Fahrbereitschaftsanforderung wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804933 | Deaktivierung der KL15 wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804934 | Aktivierung der KL50 wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x8049FB | WDG_E_MISS_TRIGGER | 0 |
| 0x8049FC | IOHWAB_E_IO_SEQUENCE | 0 |
| 0xE89400 | VSM_EVENT_VEHICLESTATE | 0 |
| 0xF00384 | CANIF_E_INVALID_DLC | 0 |
| 0xF00385 | NM_E_INIT_FAILED | 0 |
| 0xF00386 | ADC_E_TIMEOUT | 0 |
| 0xF00388 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0xF0038A | SPI_E_TIMEOUT | 0 |
| 0xF0038B | PWM_E_UNEXPECTED_IRQ | 0 |
| 0xF0038C | EEP_E_COM_FAILURE | 0 |
| 0xF0038E | NM_E_NETWORK_TIMEOUT | 0 |
| 0xF0042D | FLS_E_COMPARE_FAILED | 0 |
| 0xF0042E | FLS_E_HW_FAILED | 0 |
| 0xF0042F | FLS_E_TIMEOUT | 0 |
| 0xF00430 | GPT_E_TIMEOUT_TRANSITION | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4002 | BATTERIESPANNUNGSPANNUNG ENDE BEI FEHLERSPEICHEREINTRAG | mV | High | unsigned int | - | 15.0 | 1.0 | 0.0 |
| 0x400B | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x400C | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x400D | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x400E | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x4010 | KeySearchMode | 0-n | High | 0xFF | TAB_KEYSEARCHMODE | - | - | - |
| 0x4011 | AuthType | 0-n | High | 0xFF | TAB_AUTHTYPE | - | - | - |
| 0x4012 | CheckAllIdg | 0-n | High | 0xFF | TAB_CHECKALLIDG | - | - | - |
| 0x4013 | CfResultType | 0-n | High | 0xFF | TAB_CFRESULTTYPE | - | - | - |
| 0x4014 | IdgNumbersToBeExcluded | hexadezimale | High | unsigned long | - | - | - | - |
| 0x4015 | NumberOfHFM | HEX | High | unsigned char | - | - | - | - |
| 0x4016 | RfChannel | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4017 | GRUND_NICHTERKENNUNG_ID_GEBER | 0-n | High | 0xFF | GRUND_NICHT_ERKENNUNG_ID_GEBER | - | - | - |
| 0x4018 | SwcStatusPart1 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x4019 | SwcStatusPart2 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x401A | SwcStatusPart3 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x401B | SwcStatusPart4 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x4039 | PWF_ZUSTAND_NV_RAM | 0-n | High | 0xFF | PWF_ZUSTAND_FAHRZEUG_STATUS | - | - | - |
| 0x403A | PWF_ZUSTAND_RESTAURIERUNG | 0-n | High | 0xFF | PWF_ZUSTAND_FAHRZEUG_STATUS | - | - | - |
| 0x403B | PWF_SF_FUNKTION_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x403C | PWF_SF_GRUND | 0-n | High | 0xFF | TAB_PWF_SF_GRUND | - | - | - |
| 0x4040 | SPANNUNG_BORDNETZ | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4044 | LAMPENMAPPING_FEHLER_TYPE | 0-n | High | 0xFF | TAB_UW_LAMPENMAPPING_FEHLER_TYPE | - | - | - |
| 0x4045 | LAMPENMAPPING_INDEX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x404D | ERROR_SPI | 0-n | High | 0xFF | TAB_UW_ERROR_SPI | - | - | - |
| 0x404F | DEVICE_ID | 0-n | High | 0xFF | TAB_UW_DEVICE_ID | - | - | - |
| 0x4053 | CARSHARING_MODE | 0-n | High | 0xFF | TAB_CARSHARING_MODE | - | - | - |
| 0x4060 | CAN_AUSSENTEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4082 | Zustandswechsel_Verhinderer | 0-n | High | 0xFF | TAB_ZUSTANDSWECHSEL_VERHINDERER | - | - | - |
| 0x4083 | ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_ZUSTANDSWECHSEL | - | - | - |
| 0x4090 | UW_BLOCK_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4098 | ECC_FAILURE_TYPE | 0-n | High | 0xFF | TAB_ECC_FAILURE_TYPE | - | - | - |
| 0x40AA | UW_TASK_OR_ISR_ID | HEX | High | unsigned int | - | - | - | - |
| 0x40AB | UW_APP_STARTUP_FUNC_INDEX | HEX | High | unsigned int | - | - | - | - |
| 0x40B5 | LIN_VERBAUORT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x40B6 | LIN_CODING_ERRORTYPE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40B8 | INTERRUPTSOURCENUMBER | HEX | High | unsigned char | - | - | - | - |
| 0x40B9 | FUSISHELL 2 | HEX | High | signed long | - | - | - | - |
| 0x40D2 | ZV_SAFE_MECH | 0-n | High | 0xFF | TAB_ZV_SAFE_MECH | - | - | - |
| 0x40FB | UW_TRANSPONDERAUTHENTISIERUNGEN | HEX | High | unsigned char | - | - | - | - |
| 0x40FC | FusiShell 3 | HEX | High | signed long | - | - | - | - |
| 0x40FD | FUSI_SHELL 1 | HEX | High | signed long | - | - | - | - |
| 0x4101 | FEHLERART_TC_FUSI_KL50_MSA | 0-n | High | 0xFF | TAB_ZSG_UW_TC_FUSI_KL50_MSA | - | - | - |
| 0x4103 | FUSI_FEHLERGRUND_PWF | 0-n | High | 0xFF | TAB_FUSI_FEHLERGRUND_PWF | - | - | - |
| 0x4104 | FUSI_FAHRBEREITSCHAFT_VERHINDERER | 0-n | High | 0xFF | TAB_FUSI_FAHRBEREITSCHAFT_VERHINDERER | - | - | - |
| 0x4105 | FUSI_KLEMMEN_AKTIVIERUNGS_VERHINDERER | 0-n | High | 0xFF | TAB_FUSI_KLEMMEN_AKTIVIERUNGS_VERHINDERER | - | - | - |
| 0x4106 | FUSI_KLEMMEN_DEAKTIVIERUNGS_VERHINDERER | 0-n | High | 0xFF | FUSI_KLEMMEN_DEAKTIVIERUNGS_VERHINDERER | - | - | - |
| 0x4107 | LAMPENMAPPING_INDEX_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4108 | LAMP_PWM_CAF_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4109 | COLUMN_TURN_BLINKEN_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x410A | DRIVING_FAILSAFE_STATE | - | Low | intel double | - | 1.0 | 1.0 | 0.0 |
| 0x410B | PWM_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x410C | PWF_BATTERY_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x410D | LAMP_DIAGNOSIS_SPOC_FAILURE_CAF_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x410E | ANTENNENSTATUS_1_2 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x410F | ANTENNENSTATUS_3_4 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x4110 | PWF_INDICATION_KL15_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4111 | PWF_STEERING_ANGLE_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4112 | FUNC_LAMP_VEHICLE_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4113 | DRIVER_FAS_RECUP_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4114 | PWM_PWF_CAF_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4115 | PWF_KL15_BATTERY_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4116 | LAST_MOTORSTART | 0-n | High | 0xFF | TAB_UW_LAST_MOTORSTART | - | - | - |
| 0x4117 | STAT_FAHRBEREITSCHAFT | HEX | High | unsigned char | - | - | - | - |
| 0x4118 | ZEITDIFFENRENZ_MOTORSTART | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x411E | ANTENNENSTATUS_5_6 | hexadezimale | High | unsigned long | - | - | - | - |
| 0x411F | ANTENNENSTATUS_7_8 | hexadezimale | High | unsigned long | - | - | - | - |
| 0xD62D | FES_MASTER_SW_FEHLER_INFO | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xD62E | FES_COORDINT_SW_FEHLER_INFO | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 01 | ERROR |
| 02 | ERROR_RANGE_ARGUMENT |
| 03 | ERROR_MISSING_ARGUMENT |
| 04 | ERROR_SELECTED_TMS |
| 05 | ERROR_RESPONSE |
| 06 | ERROR_BLOCK |
| 07 | ERROR_BAUREIHE |
| 08 | ERROR_ELEMENT |
| 09 | ERROR_BEWERTUNG |
| 10 | ERROR_RANGE_ELEMENT |
| 11 | ERROR_LENGHT |
| 12 | SERVICE ERROR |
| 13 | DID ERROR |
| 14 | ERROR_POS |
| 15 | ERROR_LEN |
| 16 | SERVICE_ERROR |
| 0xXY | ERROR_UNKNOWN |

### LICHTSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Lichtsperre nicht aktiv |
| 0x01 | Lichtsperre aktiv |
| 0xFF | ungültig |

### PWF_MESSEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | MESSEMODUS_NICHT_AKTIV |
| 0xFF | Wert ungültig |
| 1 | MESSEMODUS_AKTIV |

### PWF_ZUSTAND_FAHRZEUG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | PARKEN_BN_NIO |
| 0x02 | PARKEN_BN_IO |
| 0x03 | STANDFUNKTIONEN_KUNDE_NICHT_IM_FZG |
| 0x05 | WOHNEN |
| 0x07 | PRUEFEN_ANALYSE_DIAGNOSE |
| 0x0C | FAHRBEREITSCHAFT_BEENDEN |
| 0x10 | PARKEN_BN_IO_VERK |

### PWF_ZUSTAND_FAHRZEUG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0 | reserviert |
| 0x1 | Parken_BN_niO |
| 0x2 | Parken_BN_iO |
| 0x3 | Standfunktionen_Kunde_nicht_im_FZG |
| 0x4 | reserviert |
| 0x5 | Wohnen |
| 0x6 | reserviert |
| 0x7 | Pruefen_Analyse_Diagnose |
| 0x8 | Fahrbereitschaft_herstellen |
| 0x9 | reserviert |
| 0xA | Fahren |
| 0xB | reserviert |
| 0xC | Fahrbereitschaft_beenden |
| 0xD | reserviert |
| 0xE | nicht verfügbar |
| 0xF | ungültig |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ECUMehrmalsProgrammierbar |
| 1 | ECUMindestensEinmalVollstaendigProgrammierbar |
| 2 | ECUNichtMehrProgrammierbar |

### RES_0X1006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATEN_BLOCK_WERT_DATA | + | - | - | DATA | - | data[32] | - | - | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den ausgelesen Datenblock mit den Schlüsseldaten des Service. Hinweise: - 32-Byte hex-Werte. |

### RES_0X100A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIN_ROUTINE_IFE | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Das Ergebnis liefert zurück, ob die Routine erfolgreich durchgeführt wurde. Es überprüft insbesonders die Integrierte Fensterheberelektronik und die Kodierparameter. |
| STAT_RESERVE_0 | - | - | + | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | - | - | + | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | - | - | + | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0X1032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASU_STATE | - | - | + | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | Steuerung der TAS-Nutzung |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2533_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRIGGER_ZUSTANDSWECHSEL_1 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_2 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_3 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_4 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_5 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_6 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_7 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_8 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_9 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_10 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_11 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_12 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_13 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_14 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_15 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_16 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_17 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_17_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_18 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_18_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_19 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_19_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_20 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_20_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |

### RES_0X2536_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_01_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 01 Entertainmentfunktion |
| STAT_ANFORDERER_02_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 02 Remote Services.  |
| STAT_ANFORDERER_03_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 03 Restwärmefunktion / Ausbrennen der Standheizung.  |
| STAT_ANFORDERER_04_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 04 Standheizung / Standlüften.  |
| STAT_ANFORDERER_05_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 05 Verlängerung N-Haltephase, Getriebe nicht in Pos. P   |
| STAT_ANFORDERER_06_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:  0x00 06 Betätigung Feststellbremse    |
| STAT_ANFORDERER_07_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:  0x00 07 Nachlauf / Zuschaltung RSE    |
| STAT_ANFORDERER_08_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 08 Remote Hupen    |
| STAT_ANFORDERER_09_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 19 Einschalten / Verlängerung Klemme 30B CarSharing    |
| STAT_ANFORDERER_10_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2B Diebstahlwarnanlage  |
| STAT_ANFORDERER_11_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2C EMF-Taster     |
| STAT_ANFORDERER_12_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2D Rollüberwachung    |
| STAT_ANFORDERER_13_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2E Anforderung Außenbeleuchtung    |
| STAT_ANFORDERER_14_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2F Umladefunktion    |
| STAT_ANFORDERER_15_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 33 KL15Wup-Signal   |
| STAT_ANFORDERER_16_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 35 Kühlmitteltemperaturabfrage durch Kombi    |
| STAT_ANFORDERER_17_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 36 Kombi-Anzeige |
| STAT_ANFORDERER_18_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 01 Einschlafverhinderer    |
| STAT_ANFORDERER_19_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 02 Weckerproblem |
| STAT_ANFORDERER_20_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 03 Abschaltung KL30F Standzeit    |
| STAT_ANFORDERER_21_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 04 Abschaltung KL30F CarSharing  |
| STAT_ANFORDERER_22_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 10 OBD-Diagnose    |
| STAT_ANFORDERER_23_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 11 Nachlauf elektrische Wasserpumpe Motor    |
| STAT_ANFORDERER_24_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 13 Nachlauf E-Lüfter    |
| STAT_ANFORDERER_25_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 14 Nachlauf elektrische Zusatzwasserpumpe Lagerstuhlkühlung Turbo   |
| STAT_ANFORDERER_26_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 15 Nachlauf elektr. Wasserpumpe Hybrid (HEWP)    |
| STAT_ANFORDERER_27_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 16 Standlüften    |
| STAT_ANFORDERER_28_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 18 Fremdladeerkennung Hybrid / Ladefunktion HVPM / Ladefunktion LIM    |
| STAT_ANFORDERER_29_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 19 Batteriewächter TSR    |
| STAT_ANFORDERER_30_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 20 Niveauregulierung    |
| STAT_ANFORDERER_31_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 21 Nachlauf Lüftung/Kühlung    |
| STAT_ANFORDERER_32_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 30 Anhängeranschluß AAG    |
| STAT_ANFORDERER_33_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:  0x 01 31 Anforderung Industriekunde    |
| STAT_ANFORDERER_34_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 32 Anforderung Industriekunde OSFG    |
| STAT_ANFORDERER_35_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 02 01 Domänenmaster Verbrennungsmotor    |
| STAT_ANFORDERER_36_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 02 02 Domänenmaster Elektromotor    |
| STAT_ANFORDERER_37_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 02 03 Domänenmaster Unterhaltung    |
| STAT_ANFORDERER_38_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 02 04    |
| STAT_ANFORDERER_39_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 02 05    |
| STAT_ANFORDERER_40_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_41_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:Reserviert, immer 0   |
| STAT_ANFORDERER_42_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_43_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_44_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_45_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_46_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_47_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_48_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_PWF_ZUSTANDWECHSEL_FAHREN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Zustandswechsel von beliebigen PWF-Zustand in den PWF-Zustand Fahren.   |

### RES_0X4005_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UPDATE | - | - | + | 0-n | high | unsigned char | - | TAB_ZSG_STATUS_SERVICE_SCHLUESSELDATEN_UPDATE | 1.0 | 1.0 | 0.0 | Das Result gibt den Status des Updatevorgangs der Schlüsseldaten wieder. |

### RES_0X4509_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_12H_TIMER_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12h Timer |

### RES_0X4532_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_STATE | 0-n | high | unsigned char | - | TAB_ERROR_STATE | - | - | - | Fehlerstatus der Leuchte |
| STAT_DIGITAL_DIAGNOSE_VALUE | 0-n | high | unsigned char | - | TAB_DIGITAL_DIAGNOSE_VALUE | - | - | - | Ergebnis der Digital Diagnose |
| STAT_OPEN_LOAD_DEBOUNCE_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller wert des OpenLoad Entrpellungszähler (debounce counter) |
| STAT_FORCED_SWITCH_OFF_SHORTCUT | 0/1 | high | unsigned char | - | - | - | - | - | Flag ob die Leuchte wegen Kurzschluss abgeschaltet werden muss. Hinweis: 0 = NotActive; 1 = Active |
| STAT_FORCED_SWITCH_OFF_XENON_WIEDERZUENDEN | 0-n | high | unsigned char | - | TAB_FORCED_SWITCH_OFF_XENON | - | - | - | Flag ob die Leuchte wegen Xenon Wiederzünden abgeschaltet werden muss |
| STAT_REACTIVATION_TIMER_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Zeit bis zum Reaktivieren eines wegen Kurzschluss abegeschalteten Leuchtenausgangs |
| STAT_NVM_RESTARTS_IN_CURRENT_CL15_CYCLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Restarts wegen Kurzschluss innerhalb des aktuellen Klemme 15 Zyklus |
| STAT_NVM_CL15_REACTIVATION_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Klenme 15 Zyklen in denen der RestartsInCurrentCl15Cycle Zähler zurückgesetzt wurde |
| STAT_COLD_MONITORING_INHIBIT_DELAY_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Aktueller Wert des ColdMonitoringInhibitDelay |
| STAT_ACTIVATION_DELAY_TIMEOUT_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Aktueller Wert des ActivationDelayTimeout |
| STAT_CURRENT_STATE_OF_OP_STM | 0-n | high | unsigned char | - | TAB_CURRENT_STATE_OF_OP_STM | - | - | - | Aktueller Zustand der OutputProtection Statemachine |
| STAT_ANALOG_DIAGNOSE_VALUE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gemessener Stromwert |
| STAT_DRIVE_DUTY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle vom Treiber angesteuerte Duty |
| STAT_RESERVED_BYTE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |

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
| STAT_SARAH_LANGDRUCK_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl SARAH Tasten Langdrücke |
| STAT_RESERVE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0X5101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECUMA_LAST_HW_WAKEUP_ID_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ECUMA_LAST_HW_WAKEUP_ID |
| STAT_ECUMA_LAST_SW_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_SW_WAKEUP_ID |
| STAT_ECUMA_LAST_BUS_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_BUS_WAKEUP_ID |
| STAT_ECUMA_LAST_RESET_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | 1.0 | 1.0 | 0.0 | ECUMA_LAST_RESET_ID |
| STAT_ECUMA_CAN_WAKEUP_ID_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ECUMA_CAN_WAKEUP_ID |
| STAT_RESERVED_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RESERVED |

### RES_0X5120_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAC_ADRESS_BYTE_0_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 0 |
| STAT_MAC_ADRESS_BYTE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 1 |
| STAT_MAC_ADRESS_BYTE_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 2 |
| STAT_MAC_ADRESS_BYTE_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 3 |
| STAT_MAC_ADRESS_BYTE_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 4 |
| STAT_MAC_ADRESS_BYTE_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 5 |

### RES_0X5200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLL_PARAMETER_SET_DATA | DATA | high | data[43] | - | - | 1.0 | 1.0 | 0.0 | this result contains the LF antenna parameters. |

### RES_0X5201_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLL_PARAMETER_INDEX_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Reads the index number of a LF parameter set. |

### RES_0X5209_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLL_CONFIG_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | This result reads the PASE LL configuration. |

### RES_0X5210_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLL_ANTENNA_ERROR_CONFIGURATION_DATA | DATA | high | data[7] | - | - | 1.0 | 1.0 | 0.0 | This result is used to read the PASE-LL behaviour when antenna defects are recognized. |

### RES_0X5211_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | This result is used to read the index number of a ICM request. |

### RES_0X5212_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Reads the status of the current control out of the ICM. |

### RES_0X5213_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[54] | - | - | 1.0 | 1.0 | 0.0 | Reads the parameters for the antenna currents calculation. |

### RES_0X5214_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[33] | - | - | 1.0 | 1.0 | 0.0 | Reads the parameters for the IPSense. |

### RES_0X5217_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Reads the configuration of the manchester coding. (inverted, not inverted) |

### RES_0X5218_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[18] | - | - | 1.0 | 1.0 | 0.0 | Reads the antenna configuration for the extended paramter sets. |

### RES_0X5219_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Reads the configuration for sequential LF sending on up to 4 LF antennas. |

### RES_0X5220_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_DATA | DATA | high | data[56] | - | - | 1.0 | 1.0 | 0.0 | Reads the ATIC164 configuration register. |

### RES_0X522A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_SAMPLE_VERSION_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält Version der HW. |
| STAT_CA_HW_VARIANT | 0-n | high | unsigned char | - | TAB_CA_HW_VARIANT | - | - | - | Das Result enthält die HW-Variante für CA/CG. |
| STAT_CA_CAR_CONFIG | 0-n | high | unsigned char | - | TAB_CA_CAR_CONFIG | - | - | - | Das Result enthält den codierte CA-Fahrzeugtyp. |
| STAT_ANTENNA1_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 1. |
| STAT_ANTENNA2_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 2. |
| STAT_ANTENNA3_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 3. |
| STAT_ANTENNA4_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 4. |
| STAT_ANTENNA5_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 5. |
| STAT_ANTENNA6_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 6. |
| STAT_ANTENNA7_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 7. |
| STAT_ANTENNA8_LOCATION | 0-n | high | unsigned char | - | TAB_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 8. |

### RES_0X522B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LF_ADJ_FACT1_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 1. |
| STAT_LF_ADJ_FACT2_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 2. |
| STAT_LF_ADJ_FACT3_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 3. |
| STAT_LF_ADJ_FACT4_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 4. |
| STAT_LF_ADJ_FACT5_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 5. |
| STAT_LF_ADJ_FACT6_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 6. |
| STAT_LF_ADJ_FACT7_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 7. |
| STAT_LF_ADJ_FACT8_SINE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 8. |
| STAT_LF_ADJ_FACT1_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 1. |
| STAT_LF_ADJ_FACT2_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 2. |
| STAT_LF_ADJ_FACT3_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 3. |
| STAT_LF_ADJ_FACT4_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 4. |
| STAT_LF_ADJ_FACT5_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 5. |
| STAT_LF_ADJ_FACT6_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 6. |
| STAT_LF_ADJ_FACT7_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 7. |
| STAT_LF_ADJ_FACT8_SQUARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Multiplikationsfaktor für die Antenne 8. |

### RES_0X522C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSENSE_VOLTAGE1_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 1 |
| STAT_IPSENSE_VOLTAGE2_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 2 |
| STAT_IPSENSE_VOLTAGE3_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 3 |
| STAT_IPSENSE_VOLTAGE4_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 4 |
| STAT_IPSENSE_VOLTAGE5_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 5 |
| STAT_IPSENSE_VOLTAGE6_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 6 |
| STAT_IPSENSE_VOLTAGE7_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 7 |
| STAT_IPSENSE_VOLTAGE8_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die gemessenen Spannungswerte für die Antenne 8 |

### RES_0X522D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LF_ANTENNEN_KONFIG_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Antennenkonfiguration  der letzten LF-Übertragung Bit Bedeutung 0-1 AntConfig1 2-3 Antconfig2 .. 28-29 AntConfig15 30-31 AntConfig16 |
| STAT_LF_FACTORS_GAIN_DATA | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Spannungswerte pro Antennenkonfiguration: Byte Bedeutung 1 VoltageIndex1_main 2 VoltageIndex1_secondary 3 VoltageIndex2_main 4 VoltageIndex2_secondary .. 29 VoltageIndex15_main 30 VoltageIndex15_secondary 31 VoltageIndex16_main 32 VoltageIndex16_secondary |

### RES_0X522E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LF_VOLTAGE_CONDITIONS_BEFORE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Spannungswerte vor dem Senden. |
| STAT_LF_VOLTAGE_CONDITIONS_AFTER_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Spannungswerte nach dem Senden. |
| STAT_LF_VOLTAGE_CONDITIONS_DCDC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Spannungswerte am DC/DC-Wandler. |

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

### RES_0X6AB1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHERSTROM_HW_TREIBER_WERT | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktueller Stromwert in mA, wie er vom Wischer HW Treiber gemeldet und vom SafeIO zum WW-Aktuator weitergeleitet wird. 0xFFFFFFFF = ungültig. |
| STAT_WISCHERSTROM_KORRIEGIERT_WERT | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktueller offsetkompensierter Wischerstrom in mA, wie er vom WW-Aktuator berechnet wird.  0xFFFFFFFF = ungültig. |
| STAT_WISCHERSTROM_OFFSET_WERT | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuell vom WW-Aktuator berechneter Offsetwert in mA.  0xFFFFFFFF = ungültig. |
| STAT_RESERVE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |

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
| STAT_ROUTINE | + | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA17F_R

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

### RES_0XA533_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_RESET_NR | + | - | - | 0-n | high | unsigned char | - | TAB_LEUCHTEN_KURZSCHLUSSABSCHLATUNG_RESET_STATUS | 1.0 | 1.0 | 0.0 | Ergebniss des Status des Rücksetzvorgangs |

### RES_0XA5AF_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_FA | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Fahrerseite Vorne codiert oder nicht.  Siehe table TAB_LIN_CODIERUNG. |
| STAT_IFE_FAH | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Fahrerseite Hinten codiert oder nicht. Siehe table TAB_LIN_CODIERUNG. |
| STAT_IFE_BF | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Beifahrerseite Vorne codiert oder nicht.  Siehe table TAB_LIN_CODIERUNG. |
| STAT_IFE_BFH | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Beifahrerseite Hinten codiert oder nicht.  Siehe table TAB_LIN_CODIERUNG. |
| STAT_RESERVE_0 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Bytes für zusätzliche IFE. |
| STAT_RESERVE_1 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Bytes für zusätzliche IFE. |
| STAT_RESERVE_2 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Bytes für zusätzliche IFE. |

### RES_0XAA80_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSFUEHRUNGSSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_SMO_AUSFUEHRUNGSSTATUS | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob die angeforderte Aktion erfolgreich durchgeführt wurde oder ein Fehler aufgetreten ist |

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
| STAT_CA_ANTENNEN_VERBAUORT_1 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 1. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_2 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 2. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_3 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 3. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_4 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 4. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_5 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 5. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_6 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 6. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_7 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 7. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_8 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 8. Antenne der Tabelle. |
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

### RES_0XAC60_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSFUEHRUNGSSTATUS | + | - | - | 0-n | high | unsigned char | - | TAB_AUSFUEHRUNGSSTATUS | - | - | - | Das Result enthält den Ausführungsstatus des Jobs: Siehe Tabelle TAB_AUSFUEHRUNGSSTATUS |

### RES_0XD070_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_ELSV_HINTEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach hinten nicht betätigt 1: Taster eLSV nach hinten betätigt |
| STAT_TASTER_ELSV_OBEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach oben nicht betätigt 1: Taster eLSV nach oben betätigt |
| STAT_TASTER_ELSV_UNTEN_EIN | 0/1 | - | signed char | - | - | - | - | - | 0: Taster eLSV nach unten nicht betätigt 1: Taster eLSV nach unten betätigt |
| STAT_TASTER_ELSV_VORNE_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nach vorne nicht betätigt 1: Taster eLSV nach vorne betätigt |
| STAT_TASTER_ELSV_NR | 0-n | - | signed char | - | TAB_ELSV_TASTER | 1.0 | 1.0 | 0.0 | 0: Taster eLSV nicht betätigt 1: Taster eLSV nach hinten betätigt 2: Taster eLSV nach oben betätigt 3: Taster eLSV nach vorne betätigt 4: Taster eLSV nach unten betätigt 5: Signal ungültig |

### RES_0XD074_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADHEIZUNG_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Lenkradheizung ist AUS; 1: Lenkradheizung ist EIN |
| STAT_LENKRADHEIZUNG_LED_EIN | 0-n | - | signed char | - | TAB_LENKRADHEIZUNG_LED | - | - | - | 0: Lenkradheizung Status LED ist AUS; 1: Lenkradheizung Status LED ist EIN; 3: Keine LED verbaut |
| STAT_LENKRADHEIZUNG_STROM_WERT | A | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromaufnahme Lenkradheizung. Bereich: 0 - 25,4 Ampere |
| STAT_LENKRADHEIZUNG_AKTUATOR_STATUS_NR | 0-n | - | signed char | - | TAB_LIMIT | 1.0 | 1.0 | 0.0 | Zustand Aktuator Lenkradheizung |
| STAT_VORHANDEN_LENKRADHEIZUNG_EIN | 0/1 | - | signed char | - | - | - | - | - | 0: Lenkradheizung nicht codiert;  1: Lenkradheizung codiert |

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

### RES_0XD0F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_STAND_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_ENBN_AEP_STATUS_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Energie Powermanagement |
| STAT_U_BATT_ANFANG_1_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Versorgungsspannung 3 Minuten nach Klemme 15 aus. Nach Umrechnung 1=100mV. |
| STAT_DAUER_1_WERT | min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der Lichtaktivität im Stand |
| STAT_LICHT_1_NR | 0-n | - | unsigned char | - | TAB_ENERGIE_BETEILIGTE_BEL | 1.0 | 1.0 | 0.0 | Beteiligte Beleuchtung |
| STAT_ABSCHALTUNG_LICHT_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung Licht bei SFG (fand eine Abschaltung nach Ablauf 12h und Erreichen der Startfähigkeitsgrenze statt). |
| STAT_ABSCHALTVERHINDERER_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltverhinderergrund Licht (Erreichen obere Startfähigkeitsgrenze und 12h Timer nicht abgelaufen, kein Öffnen der Fahrertür, weitere tbd). |
| STAT_KLEMMENSTATUS_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Klemmenstatus (zum Zeitpunkt des Eintrags/Snapshots). |
| STAT_KM_STAND_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_ENBN_AEP_STATUS_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Energie Powermanagement |
| STAT_U_BATT_ANFANG_2_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Versorgungsspannung 3 Minuten nach Klemme 15 aus. Nach Umrechnung 1=100mV. |
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
| STAT_FH_FA_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FA_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_FA_POSITION | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_FA_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FA_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FA_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FA_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FA_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FA_LAGE | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | - | - | - | 0xFF: Wert von Fensterheber nicht belegt! |
| STAT_FH_FA_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | - | - | - | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FA_PANIKMODUS_AKTIV | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | - | - | - | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_FA_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BF_BEWEGUNG | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_BF_POSITION | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_BF_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BF_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BF_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BF_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BF_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BF_LAGE | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | - | - | - | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BF_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BF_PANIKMODUS_AKTIV | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | - | - | - | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_BF_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FAH_BEWEGUNG | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_FAH_POSITION | 0-n | - | unsigned char | - | TAB_FH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_FAH_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FAH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FAH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FAH_LAGE | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | - | - | - | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_FAH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FAH_PANIKMODUS_AKTIV | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | - | - | - | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_FAH_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BFH_BEWEGUNG | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_BFH_POSITION | 0-n | - | unsigned char | - | TAB_FH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_BFH_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BFH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BFH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BFH_LAGE | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | - | - | - | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BFH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BFH_PANIKMODUS_AKTIV | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | - | - | - | Status Verknüpfung Freigabe Panikmodus |
| STAT_FH_BFH_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | - | - | - | Status Motortemperatur |
| STAT_FH_FA_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_FA_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | - | - | - | Lieferant MT |
| STAT_FH_FA_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_FA_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_FA_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_FA_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_FA_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung |
| STAT_FH_FA_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_FA_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_FA_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_FA_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_FA_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_FA_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | - | - | - | Status Motortemperatur |
| STAT_FH_BF_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_BF_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | - | - | - | Lieferant MT |
| STAT_FH_BF_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_BF_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_BF_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_BF_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_BF_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung |
| STAT_FH_BF_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_BF_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_BF_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_BF_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_BF_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_BF_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_FAH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_FAH_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_FAH_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_FAH_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_FAH_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_FAH_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_FAH_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung |
| STAT_FH_FAH_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_FAH_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_FAH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_FAH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_FAH_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_FAH_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_BFH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_BFH_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_BFH_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_BFH_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_BFH_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_BFH_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_BFH_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | 1.0 | 1.0 | 0.0 | Status Einschlaf-Verhinderung |
| STAT_FH_BFH_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_BFH_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_BFH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_BFH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_BFH_SYSTEMTYP | 0-n | high | unsigned char | - | TAB_FH_SYSTEMTYP | 1.0 | 1.0 | 0.0 | Platzhalter für Stromgeführtes System |
| STAT_FH_BFH_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

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
| STAT_VORHANDEN_SITZEXT_HINTEN | 0-n | high | unsigned char | - | TAB_SITZEXT_HINTEN_VORHANDEN | - | - | - | SB_SitzExt vorhanden für FAH, BFH |

### RES_0XD1F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_FA_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FA_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FA_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FA_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_FA_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD1F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_BF_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BF_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BF_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BF_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_BF_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD1F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_FAH_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FAH_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FAH_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FAH_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_FAH_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD1F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_BFH_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BFH_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BFH_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BFH_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_BFH_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD220_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSPOILER_TASTER | 0-n | high | unsigned char | - | TAB_ROLLO_VERFAHREN | - | - | - | Status Taster Heckspoiler |

### RES_0XD25D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LICHTSPERRE_AKTIV | 0-n | high | unsigned char | - | LICHTSPERRE | - | - | - | Rückgabewert, ob die Lichtsperre aktiv ist |

### RES_0XD26D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_M1_EIN | 0-n | high | unsigned char | - | TAB_M_TASTER_STATUS | - | - | - | Zustand der M-spezifischen Taste M1.  Siehe Table TAB_M_TASTER_STATUS |
| STAT_TASTER_M2_EIN | 0-n | high | unsigned char | - | TAB_M_TASTER_STATUS | - | - | - | Zustand der M-spezifischen Taste M2: Siehe Table TAB_M_TASTER_STATUS |

### RES_0XD298_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0: Hupe nicht aktiv 1: Hupe aktiv |

### RES_0XD30A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_BLOCK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Heckscheibe: Sonnenrollo Heckscheibe komplett ausgefahren;  0= Endpostion nicht erreicht;  1= Endposition erreicht |
| STAT_ROLLO_HECK_MOTOR_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo Heckscheibe inaktiv;  1= Motor Sonnenrollo Heckscheibe aktiv |
| STAT_ROLLO_HECK_LETZTE_MOTORLAUFZEIT_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer des letzten Motorlaufes von Start des Motors bis Verfahren in Block;  0: Ungültiger Wert;  1 - 65535: Gültige Laufzeiten [msec] |

### RES_0XD30B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_TASTER_NR | 0-n | - | unsigned char | - | TAB_ROLLO_VERFAHREN | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |

### RES_0XD311_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_TASTERFAH_BFH_EIN | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster FAH für Seitenrollo Beifahrerseite; 0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |
| STAT_ROLLO_TASTERFAH_FAH_EIN | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster FAH für Seitenrollo Fahrerseite;  0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |
| STAT_ROLLO_TASTERFAH_HECK_EIN | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster FAH für Heckrollo;  0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |
| STAT_ABSCHATTUNG_PANORAMADACH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster FAH für Abschattung Panoramadach; 0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |

### RES_0XD312_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_MOTOR_FAH_BLOCK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo nicht im Block;  1= Motor Sonnenrollo im Block |
| STAT_ROLLO_MOTOR_FAH_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo Fahrer hinten inaktiv;  1= Motor Sonnenrollo Fahrer hinten aktiv |
| STAT_ROLLO_MOTOR_FAH_ERROR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Sonnenrollo Fahrerseite nicht im Fehlerbetrieb bei offener Scheibe;  1= Sonnenrollo Fahrerseite im Fehlerbetrieb bei offener Scheibe |

### RES_0XD314_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_TASTERBFH_BFH_EIN | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster BFH für Seitenrollo Beifahrerseite;  0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |
| STAT_ROLLO_TASTERBFH_FAH_EIN | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster BFH für Seitenrollo Fahrerseite; 0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |
| STAT_ROLLO_TASTERBFH_HECK_EIN | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster BFH für Heckrollo; 0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |
| STAT_ABSCHATTUNG_PANORAMADACH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | lokaler Taster BFH für Abschattung Panoramadach; 0= Taster nicht gedrückt;  1= Taster gedrückt; 3= ungültig |

### RES_0XD315_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_MOTOR_BFH_BLOCK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo nicht im Block;  1= Motor Sonnenrollo im Block |
| STAT_ROLLO_MOTOR_BFH_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Motor Sonnenrollo Fahrer hinten inaktiv;  1= Motor Sonnenrollo Fahrer hinten aktiv |
| STAT_ROLLO_MOTOR_BFH_ERROR | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Sonnenrollo Fahrer nicht im Fehlerbetrieb bei offener Scheibe;  1= Sonnenrollo Fahrer im Fehlerbetrieb bei offener Scheibe |

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

### RES_0XD34F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHER_POS_AKTUELL_FAHRER_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die aktuelle Winkelposition des fahrerseiten Frontwischers. 255=Ungültig |
| STAT_WISCHER_POS_AKTUELL_BEIFAHRER_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die aktuelle Winkelposition des beifahrerseiten Frontwischers.  Dieser Wert gilt für den zweiten Wischermotor, z.B. Schmetterlingswischer.   255=Ungültig |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

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
| STAT_HECKWISCHER_RSK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt an, ob der Heckscheibenwischer in Park-Position ist:  0= Heckscheibenwischer nicht in Park-Position;  1= Heckscheibenwischer in Park-Position  Falls 2 Heckscheibenwischer verbaut sind, wird '1' zurückgegeben, falls BEIDE Wischer in Park-Position sind |

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
| STAT_LENKSTOCK_WISCHER_NULLSTELLUNG | 0/1 | - | signed char | - | - | - | - | - | 0= Lenkstock Wischer nicht Nullstellung;  1= Lenkstock Wischer Nullstellung;  Hinweis: Bei einem Schalter entspricht die Nullstellung der Stufe Aus, bei einem Taster entspricht die Nullstellung der Mittelstellung |
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

### RES_0XD376_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGEN_INT_WERT | % | - | signed int | - | - | 1.0 | 2.0 | 0.0 | Regenintensität in 0 .. 75 % |
| STAT_RESERVE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Änderungen |

### RES_0XD3BE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTLICHT_WERT | mW/m² | - | unsigned int | - | - | 6.7 | 1.0 | 0.0 | ungefilterter Frontlichtwert. Liegt zwischen 0 und 1701,8 mW/m² |
| STAT_FRONTLICHT_GEMITTELT_WERT | mW/m² | - | unsigned int | - | - | 6.7 | 1.0 | 0.0 | gemittelter Frontlichtwert. Liegt zwischen 0 und 1701,7  mW/m² |
| STAT_UMGEBUNGSLICHT_WERT | Lux | - | signed int | - | - | 100.0 | 1.0 | 0.0 | ungefiltetes Umgebungslicht. Bereich 0 bis 25500 Lux |
| STAT_UMGEBUNGSLICHT_GEMITTELT_WERT | Lux | - | signed int | - | - | 100.0 | 1.0 | 0.0 | gemittelter Wert Umgebungslicht. Bereich 0 bis 25500 Lux |
| STAT_HUD_WERT | Digit | - | signed int | - | - | 1.0 | 1.0 | 0.0 | ungefilterter Wert Hintergrund-Helligkeit. Bereich 0 bis 255 |
| STAT_RESERVE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve für zukünftige Änderungen |

### RES_0XD3E9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_AKTUATOR_STATUS_NR | 0-n | - | unsigned char | - | TAB_TLC_STATUS | - | - | - | aktueller Zustand TLC |
| STAT_TLC_AKTUATOR_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 0: TLC nicht aktiv 1: TLC aktiv |

### RES_0XD3EF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTIRUSCHMATTE | 0-n | high | unsigned char | - | TAB_CARGO_SG_ANTIRUTSCHMATTE | - | - | - | Gibt den Status der Antirutschmatte zurück: 0=Eingefahren (ST_SRMT_CSG_LIN=0);  1=Ausgefahren (ST_SRMT_CSG_LIN=1);  0xFF wenn nicht kodiert |
| STAT_ANTIRUTSCHMATTE_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Liefert ob den Cargo-Funktion aktiv kodiert ist |

### RES_0XD3F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALC_THO_HOD_LIN_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Berechneter Wert des aktuellen imaginären Schwellwerts |
| STAT_CAPE_IMAG_HOD_LIN_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Imaginärteil des aktuell gemessenen komplexen Leitwerts |
| STAT_CAPE_REAL_HOD_LIN_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Realteil des aktuell gemessenen komplexen Leitwerts  |

### RES_0XD500_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHEREINLERNVORGANG | 0-n | high | unsigned char | - | TAB_WISCHEREINLERNVORGANG | - | - | - | Status des Wischereinlernvorgangs |

### RES_0XD505_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_WISCHZYKLEN_WERT | - | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | Anzahl der Wischzyklen in 100er Schritten |
| STAT_CARCODE | 0-n | high | unsigned char | - | TAB_CARCODE_WISCHERMOTOR | - | - | - | Liefert den Carcode des Wischermotors |

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
| STAT_SOURCE_HSS | 0-n | high | unsigned char | - | HSS_TYPE | - | - | - | HSS über CAN oder diskret |
| STAT_QU_HSS_FRONT_REAR | 0-n | high | unsigned char | - | TAB_LA_QUALIFIER | - | - | - | RTE_Qualifier HSS Front and Rear |
| STAT_PITCH_ANGLE_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | statischer Nickwinkel |
| STAT_10MHDG_WERT | cm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Position unterhalb der Hell-Dunkelgrenze |
| STAT_VERT_POS_LEFT_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vertikale Scheinwerferpos. Links vom LaMaster |
| STAT_VERT_POS_RIGHT_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vertikale Scheinwerferpos. Rechts vom LaMaster |

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

### RES_0XD55E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_MIND_ANZAHL_BLINKZYKLEN_BEI_TIPP_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mind.-Anzahl Blinkzyklen bei Tippblinken momentan |
| STAT_PIA_QUITT_BLINK_ENTRIEGELN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quittierungsblinken bei Entriegeln momentan  0: Aus  1: Ein |
| STAT_PIA_QUITT_BLINK_SICHERN_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quittierungsblinken bei Sichern momentan  0: Aus   1: Ein |

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
| STAT_DLS_VERBAUT | 0/1 | high | signed char | - | - | - | - | - | Aktivierung DLS Funktion, 0 inaktiv, 1 aktiv |
| STAT_ST_CLC_ENA | 0/1 | - | signed char | - | - | - | - | - | Aktivierung Abbiegelicht Funktion,  0 inaktiv, 1 aktiv |
| STAT_ST_FLC_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der LWR-Funktion: 0...inaktiv 1...aktiv |
| STAT_ST_AFS_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der AFS-Funktion 0...inaktiv 1...aktiv |
| STAT_ST_BLC_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der Kurvenlicht-Funktion 0...inaktiv 1...aktiv |
| STAT_ST_GFHBA_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivieren des blendfreien Fernlicht Assistenten  0...inaktiv 1...aktiv |
| STAT_ST_HBA_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der HBA-Funktion 0...inaktiv 1...aktiv |
| STAT_ST_ERRORINFORNATION | 0-n | high | signed char | - | TAB_LA_ERRORINFORMATION | - | - | - | Status der Checkcontrolmeldungen und Fehlerspeichereinträge |
| STAT_ST_ERRORCODE_FLC | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer FLC Fehler |
| STAT_ST_ERRORCODE_BLC | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer BLC Fehler |
| STAT_ST_ERRORCODE_CLC | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer CLC Fehler |
| STAT_ST_ERRORCODE_HBA | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer HBA Fehler |
| STAT_ST_ERRORCODE_GFHBA | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer GFHBA Fehler |
| STAT_ST_ERRORCODE_DLS | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer DLS Fehler |
| STAT_ST_ERRORCODE_DIM | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode fuer DIM Fehler |
| STAT_ST_STATE_FLC | 0-n | high | signed char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der FLC-Funktion: gibt den Zustand der Leutchweitenregulierung seitenselectiv an   |
| STAT_ST_STATE_BLC | 0-n | high | signed char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der BLC-Funktion gibt den Zustand des Kurvenlichts seitenselectiv an   |
| STAT_ST_STATE_CLC | 0-n | high | signed char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der CLC-Funktion: gibt den Zustand des Abbigelichts seitenselectiv an    |
| STAT_ST_STATE_MLC | 0-n | high | signed char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der MLC-Funktion: gibt den Zustand der manuellenLeutchweitenregulierung seitenselectiv an     |
| STAT_ST_STATE_HBA | 0-n | high | signed char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der HBA-Funktion gibt den Zustand des Fernlichtsassistenten seitenselectiv an      |
| STAT_BLS | 0/1 | high | signed char | - | - | - | - | - | Bremslichtschalter , 0 inaktiv, 1 aktiv |
| STAT_ST_STATE_GFHBA | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der GFHBA-Funktion gibt den Zustand des Funktion blendfreies Fernlicht an  |
| STAT_ST_STATE_DLS | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der DLS-Funktion gibt den Zustand des Dynamic Light Spot seitenselectiv an  |
| STAT_ST_STATE_DIM | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der DIM-Funktion gibt den Zustand des Fernlicht-Dimmings  an |

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

### RES_0XD592_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_2_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_3_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_4_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_5_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_6_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_7_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |
| STAT_TASTER_FBM_8_SENS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht berührt, 1 = Taste berührt |

### RES_0XD593_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_2_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_3_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_4_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_5_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_6_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_7_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |
| STAT_TASTER_FBM_8_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0 = Taste nicht betätigt, 1 = Taste betätigt |

### RES_0XD5D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMBIENTE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Ambiente AUS; 1= Ambiente EIN |
| STAT_AMBIENTE_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angabe der Leuchtkraft in % Wertebereich 0-100% |

### RES_0XD5DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BELEGUNG_LCI_0 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | - | - | - | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | - | - | - | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |
| STAT_BELEGUNG_LCI_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_MAPPING | 1.0 | 1.0 | 0.0 | Zuordnung PIN zu Funktion |

### RES_0XD5E6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRLICHTSITUATION_LINKS_NR | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_2 | - | - | - | Aktuelle Fahrlichtsituation links auslesen |
| STAT_FAHRLICHTSITUATION_RECHTS_NR | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_2 | 1.0 | 1.0 | 0.0 | Aktuelle Fahrlichtsituation rechts auslesen |

### RES_0XD601_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 |  Ausgabe Höhenstand  vorne links (mm) |
| STAT_HOEHENSTAND_HL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 |  Ausgabe Höhenstand  hinten links (mm) |
| STAT_HOEHENSTAND_ROHWERT_VL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Sensor vorne links (V) |
| STAT_HOEHENSTAND_ROHWERT_HL_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Sensor hinten links (V) |
| STAT_HOEHENSTAND_SENSOR_VL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Zustand Kalibrierung Sensor vorne links |
| STAT_HOEHENSTAND_SENSOR_HL_NR | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Zustand Kalibrierung Sensor hinten links |
| STAT_HOEHENSTAND_VL_NR | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Sensorspannung vorne links |
| STAT_HOEHENSTAND_HL_NR | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Sensorspannung hinten links |
| STAT_HOEHENSTAND_VL_NR_1 | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Versorgungsspannung vorne links |
| STAT_HOEHENSTAND_HL_NR_1 | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Versorgungsspannung hinten links |
| STAT_ERROR_SENSOR_VL | 0-n | high | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Sensor Fehler vorne links |
| STAT_ERROR_SENSOR_HL | 0-n | high | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Sensor Fehler hinten links |

### RES_0XD604_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VL_WERT | mV/mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung Gradient C0 vorne links (mV/mm) |
| STAT_GRADIENT_C0_HL_WERT | mV/mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung Gradient C0 hinten links  (mV/mm) |
| STAT_GRADIENT_S0_VL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung Offset S0 vorne links |
| STAT_GRADIENT_S0_HL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung Offset S0 hinten links |
| STAT_ABGLEICHWERT_VDP_VL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Abgleichwert VDP vorne links (mm) |
| STAT_ABGLEICHWERT_VDP_HL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Abgleichwert VDP hinten links (mm) |
| STAT_OFFSET_VL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Offset  Licht vorne links (mm) |
| STAT_OFFSET_HL_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Offset  Licht hinten links (mm) |

### RES_0XD60C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SMO_VORHANDEN | 0-n | high | unsigned char | - | TAB_SMO_VERBAU | - | - | - | Verbau- und Codierzustand Smart Opener: 0x00 = nicht codiert, nicht verbaut 0x01 = codiert, verbaut |
| STAT_SMART_CLOSER_VORHANDEN | 0-n | high | unsigned char | - | TAB_SMO_VERBAU | - | - | - | Das Result gibt an ob die Funktion Smart Closer im Fahrzeug vorhanden ist.  Implementierungshinweise: Auswertung der Codierung VAM_ENABLE_SMART_CLOSE: - Aktiv -> 1 - Nicht aktiv -> 0 |

### RES_0XD612_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPORT_DYNAMIC_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Sport Dynamik Modus |
| STAT_SPORT_EXPERT_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Sport Expert Modus |
| STAT_SPORT_INDIVIDUAL_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Sport Individual Modus |
| STAT_COMFORT_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Comfort Modus |
| STAT_COMFORT_PLUS_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Comfort Plus Modus |
| STAT_COMFORT_INDIVIDUAL_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Comfort Individual Modus |
| STAT_ECO_PRO_EFFICIENT_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Eco Pro Efficient Modus |
| STAT_ECO_PRO_PLUS_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Eco Pro Plus Modus |
| STAT_ECO_PRO_INDIVIDUAL_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Eco Pro Individual Modus |
| STAT_ADAPTIVE_WERT | HEX | high | unsigned long | - | - | - | - | - | Status des Adaptive Modus |

### RES_0XD625_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPORT_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of Sport world |
| STAT_COMFORT_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of Comfort world |
| STAT_ECOPRO_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of ECOPRO world |
| STAT_ADAPTIVE_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of Adaptive world |
| STAT_FES_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last selected mode |
| STAT_FES_SLEEPTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Solange der FESMaster nicht aktiv ist liefert der Diag Job die erwartete Relativzeit. Diese ist nur relevant, wenn der FESMaster noch nicht aktiv ist, da sie zur Überprüfung des Verhaltens bei Aktivierung des FesMaster notwendig ist (Default FES-Modus oder LastUserMode). Ist der FESMaster aktiv, werden die Werte jeweils durch die aktuellen Werte (Modus und Zeitstempel) ersetzt. |

### RES_0XD62A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORONA_LED_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0= Corona LED AUS; 1=Corona LED EIN |

### RES_0XD642_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKWISCHER_SERVICE_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Heckscheibenwischer nicht in Service-Position  1: Heckscheibenwischer in Service-Position |

### RES_0XD672_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLMITTELSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Kühlmittelbehaelter nicht ausreichend befüllt; 1= Kühlmittelbehällter ausreichend befüllt |
| STAT_KUEHLMITTELSTAND_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Pegelwerts in mv. 0xFFFF: ungültiger Wert oder Wert nicht unterstützt |

### RES_0XD6C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_1 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 1 (siehe LIN NK) |
| STAT_TASTE_2 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 2 (siehe LIN NK) |
| STAT_TASTE_3 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 3 (siehe LIN NK) |
| STAT_TASTE_4 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 4 (siehe LIN NK) |
| STAT_TASTE_5 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 5 (siehe LIN NK) |
| STAT_TASTE_6 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 6 (siehe LIN NK) |
| STAT_TASTE_7 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 7 (siehe LIN NK) |
| STAT_TASTE_8 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 8 (siehe LIN NK) |
| STAT_TASTE_9 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 9 (siehe LIN NK) |
| STAT_TASTE_10 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 10 (siehe LIN NK) |
| STAT_TASTE_11 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 11 (siehe LIN NK) |
| STAT_TASTE_12 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 12 (siehe LIN NK) |

### RES_0XD72A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZ_STUFE_NR | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | 1.0 | 1.0 | 0.0 | Status Heizungs Stufe der Sitzheizung auf der Beifahrerseite |

### RES_0XD72F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_BF_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |

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
| STAT_SITZHEIZUNG_FA_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_FA_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |

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
| STAT_SITZHEIZUNG_BFH_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_BFH_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |

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
| STAT_SITZHEIZUNG_FAH_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_FAH_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |

### RES_0XD83A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Armauflagenheizung: 0..3, 255 = ungültig |
| STAT_TEMP_ARMAUFLAGE_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Tür: -40..85, 87 = ungültig |
| STAT_TEMP_ARMAUFLAGE_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD83B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Armauflagenheizung: 0..3, 255 = ungültig |
| STAT_TEMP_ARMAUFLAGE_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Tür: -40..85, 87 = ungültig |
| STAT_TEMP_ARMAUFLAGE_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD83C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Armauflagenheizung: 0..3, 255 = ungültig |
| STAT_TEMP_ARMAUFLAGE_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Tür: -40..85, 87 = ungültig |
| STAT_TEMP_ARMAUFLAGE_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD83D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUFE_WERT | Stufe | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stufe Armauflagenheizung: 0..3, 255 = ungültig |
| STAT_TEMP_ARMAUFLAGE_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Tür: -40..85, 87 = ungültig |
| STAT_TEMP_ARMAUFLAGE_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD842_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_VORNE | 0/1 | high | unsigned char | - | - | - | - | - | Codierstatus Armauflagenheizung vorne:  0 = nicht vorhanden  1 = vorhanden |
| STAT_VORHANDEN_HINTEN | 0-n | high | unsigned char | - | TAB_ARMAUFLAGEHEIZUNG_VORH | - | - | - | Codierstatus Armauflagenheizung hinten (siehe TAB_ARMAUFLAGEHEIZUNG_VORH) |

### RES_0XD89E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASSERVENTIL_FAHRER_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Wasserventil Fahrer in Prozent. Wasserventile werden ab 17-07 nicht mehr verwendet. Die Rückgabewert ist daher REQUEST_OUT_OF_RANGE |
| STAT_WASSERVENTIL_BEIFAHRER_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Wasserventil Beifahrer in Prozent.  Wasserventile werden ab 17-07 nicht mehr verwendet. Die Rückgabewert ist daher REQUEST_OUT_OF_RANGE |

### RES_0XD8B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_ON_OFF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status ON/OFF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_MODE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status MODE-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_EJECT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status EJECT-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_TASTE_TP_AM_FM_TRF_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status TP/AM/FM/TRF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_LINKS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste links: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste rechts: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |

### RES_0XD8DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UMSCHALTVENTIL_EIN | 0/1 | - | signed char | - | - | - | - | - | 0: Umschaltventil offen 1: Umschaltventil geschlossen |

### RES_0XD8DC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZ_ANZAHL_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Sitzheizung über IKF. |
| STAT_SBL_ANZAHL_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Sitzlüftung über IKF. |
| STAT_LHZ_ANZAHL_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Lenkradheizung über IKF. |
| STAT_TEMP_SCHWELLE_SHZ_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Letzter eingestellter Temperaturschwellwert für die Aktivierung der Sitzheizung über IKF. 0-254, 255= ungültig, Einheit °C oder °F siehe STAT_TEMP_EINHEIT |
| STAT_TEMP_SCHWELLE_SBL_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Letzter eingestellter Temperaturschwellwert für die Aktivierung der Sitzlüftung über IKF. 0-254, 255= ungültig, Einheit °C oder °F siehe STAT_TEMP_EINHEIT |
| STAT_TEMP_SCHWELLE_LHZ_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Letzter eingestellter Temperaturschwellwert für die Aktivierung der Lenkradheizung über IKF. 0-254, 255= ungültig, Einheit °C oder °F siehe STAT_TEMP_EINHEIT |
| STAT_TEMP_EINHEIT | 0-n | high | unsigned char | - | TAB_IFK_TEMP_EINHEIT | - | - | - | Gibt die eingestellte Temperatureinheit für die Temperaturschwellwerte aus. Siehe Tabelle TAB_IFK_TEMP_EINHEIT |

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
| STAT_VORHANDEN_WASSERVENTIL_MONO | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden.  Wasserventile werden ab 17-07 nicht mehr  wervendet. Die Rückgabewert ist daher REQUEST_OUT_OF_RANGE. |
| STAT_VORHANDEN_WASSERVENTIL_DUO | 0/1 | - | unsigned char | - | - | - | - | - | 0=nicht vorhanden, 1=vorhanden.  Wasserventile werden ab 17-07 nicht mehr wervendet. Die Rückgabewert ist daher REQUEST_OUT_OF_RANGE. |

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

### RES_0XDA24_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRAD_SCHALTPADDLE_NR | 0-n | - | unsigned char | - | TAB_SCHALTWIPPE | - | - | - | Status Schaltpaddles |
| STAT_SCHALTPADDLES_AD_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AD-Wert Schaltpaddles |

### RES_0XDA5F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE_NAME_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 1 = Status_LRL_1_LIN = RGB_LIN_SLAVE_1_FKT |
| STAT_LED_BLUE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 2 = Status_LRL_2_LIN = RGB_LIN_SLAVE_2_FKT |
| STAT_LED_BLUE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 3 = Status_LRL_3_LIN = RGB_LIN_SLAVE_3_FKT |
| STAT_LED_BLUE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 4 = Status_LRL_4_LIN = RGB_LIN_SLAVE_4_FKT |
| STAT_LED_BLUE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 5 = Status_LRL_5_LIN = RGB_LIN_SLAVE_5_FKT |
| STAT_LED_BLUE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 6 = Status_LRL_6_LIN = RGB_LIN_SLAVE_6_FKT |
| STAT_LED_BLUE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 7 = Status_LRL_7_LIN = RGB_LIN_SLAVE_7_FKT |
| STAT_LED_BLUE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 8 = Status_LRL_8_LIN = RGB_LIN_SLAVE_8_FKT |
| STAT_LED_BLUE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 9 = Status_LRL_9_LIN = RGB_LIN_SLAVE_9_FKT |
| STAT_LED_BLUE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 10 = Status_LRL_10_LIN = RGB_LIN_SLAVE_10_FKT |
| STAT_LED_BLUE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 11 = Status_LRL_11_LIN = RGB_LIN_SLAVE_11_FKT |
| STAT_LED_BLUE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 12 = Status_LRL_12_LIN = RGB_LIN_SLAVE_12_FKT |
| STAT_LED_BLUE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 13 = Status_LRL_13_LIN = RGB_LIN_SLAVE_13_FKT |
| STAT_LED_BLUE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 14 = Status_LRL_14_LIN = RGB_LIN_SLAVE_14_FKT |
| STAT_LED_BLUE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 15 = Status_LRL_15_LIN = RGB_LIN_SLAVE_15_FKT |
| STAT_LED_BLUE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 16 = Status_LRL_16_LIN = RGB_LIN_SLAVE_16_FKT |
| STAT_LED_BLUE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 17 = Status_LRL_17_LIN = RGB_LIN_SLAVE_17_FKT |
| STAT_LED_BLUE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 18 = Status_LRL_18_LIN = RGB_LIN_SLAVE_18_FKT |
| STAT_LED_BLUE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 19 = Status_LRL_19_LIN = RGB_LIN_SLAVE_19_FKT |
| STAT_LED_BLUE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 20 = Status_LRL_20_LIN = RGB_LIN_SLAVE_20_FKT |
| STAT_LED_BLUE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 21 = Status_LRL_21_LIN = RGB_LIN_SLAVE_21_FKT |
| STAT_LED_BLUE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 22 = Status_LRL_22_LIN = RGB_LIN_SLAVE_22_FKT |
| STAT_LED_BLUE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 23 = Status_LRL_23_LIN = RGB_LIN_SLAVE_23_FKT |
| STAT_LED_BLUE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 24 = Status_LRL_24_LIN = RGB_LIN_SLAVE_24_FKT |
| STAT_LED_BLUE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 25 = Status_LRL_25_LIN = RGB_LIN_SLAVE_25_FKT |
| STAT_LED_BLUE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_NAME_26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Name aus der Kodierung ausgelesen. Slave 26 = Status_LRL_26_LIN = RGB_LIN_SLAVE_26_FKT |
| STAT_LED_BLUE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_METHODE_AUTOADRESSIERUNG | 0-n | high | unsigned char | - | TAB_LIN_METHODE_ADRESSIERUNG | - | - | - | Liefert den aktuellen Wert der verwendeten Autoadressierung.  Entspricht dem BDC Kodierparameter  METHODE_AUTOADRESSIERUNG |

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
| STAT_TUERKONTAKT_BF | 0-n | high | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür vorne |

### RES_0XDA78_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_BFH | 0-n | high | unsigned char | - | TAB_CAS_HW_KONTAKT | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür hinten |

### RES_0XDA79_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_FA | 0-n | high | unsigned char | - | TAB_CAS_HW_KONTAKT | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür |

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
| STAT_ZV_FA_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Fahrertüre. |
| STAT_ZV_BF_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Beifahrertüre. |
| STAT_ZV_FAH_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Fahrertüre hinten. |
| STAT_ZV_BFH_NR | 0-n | - | unsigned char | - | TAB_ZSG_ZV_STATUS | - | - | - | Das Result enthält den aktuellen ZV-Zustand der Beifahrertüre hinten. |

### RES_0XDA89_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FRONTKLAPPE_NR | 0-n | high | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA92_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKKLAPPE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Heckklappen-Kontakt         0 = Offen  1 = Geschlossen  2 = nicht verbaut/nicht vorhanden (Open Load)  255 = Signal ungültig / unplausibel |

### RES_0XDA93_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDA94_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_VORRAST_NR | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDAB3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KLEMME_30B_1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_1 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_SPANNUNG_KLEMME_30B_2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_2 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_SPANNUNG_KLEMME_30B_3_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_3 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_SPANNUNG_KLEMME_15WUP | 0/1 | - | unsigned int | - | - | - | - | - | Das Result enthält die Information ob der ZSG-Ausgang 15WUP aktiv (=1) oder nicht aktiv (=0) ist. |
| STAT_SPANNUNG_KLEMME_15N1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15_N1 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_SPANNUNG_KLEMME_15N2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15_N2 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_SPANNUNG_KLEMME_15_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15 am ZSG-Ausgang. |
| STAT_STROM_KLEMME_15_50_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Stromwert an Klemme 15 und 50 am ZSG-Ausgang. |
| STAT_SPANNUNG_KLEMME_50_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 50  am ZSG-Ausgang. |

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
| STAT_CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | - | - | - | Das Result enthält den Status der CAS Montagesperren KL50-Sperre/Fahrbereitschafts-Sperre und Präsentations-Modus. Hinweise: - Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS |

### RES_0XDABA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL15_EIN_VERHINDERER | 0-n | - | unsigned char | - | TAB_ZSG_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Einschalten der KL15 verhindert, wenn eine Klemmenänderung zu KL15 über StartStop-Taster (SST) oder über Diagnose angefordert würde. In KL15-Ein wird immer  0 = Kein Hinderungsgrund vorliegend  ausgegeben Hinweis: 0 = Kein Hinderungsgrund vorliegend  1 = Aktueller Schlüssel nicht gültig [1]  |
| STAT_KL15_AUS_VERHINDERER | 0-n | - | unsigned char | - | TAB_ZSG_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Ausschalten der KL15 verhindert, wenn eine Klemmenänderung über StartStop-Taster (SST-Normaldruck, kein Notaus) oder über Diagnose angefordert würde. In KL15-Aus  wird immer  0 = Kein Hinderungsgrund vorliegend  ausgegeben  Hinweise: 0 = Kein Hinderungsgrund vorliegend  2 = Fahrzeug-Stillstand nicht erkannt (Signal DVCO_VEH) und kein Fe-Mode Für use-case Diagnose. [1] 3 = Geschwindigkeit <10km/h nicht erkannt (Signal V_VEH_COG). Für use-case SST. [2] 4 = Geschwindigkeit <10km/h ungültig (Signale V_VEH_COG/QU_V_VEH_COG). Für use-case SST. [3]  |
| STAT_FAHRBEREITSCHAFT_VERHINDERER | 0-n | - | unsigned char | - | TAB_ZSG_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Versenden des Signals   RQ_FN_DRV:  0x1   an die DME verhindert, wenn die Herstellung der Fahrbereitschaft  über StartStop-Taster (SST) angefordert würde. Wenn RQ_FN_DRV:  0x1    versendet  wird,  wird immer  0 = Kein Hinderungsgrund vorliegend  ausgegeben Hinweis: 0 = Kein Hinderungsgrund vorliegend  1 = Aktueller Schlüssel nicht gültig [2] 5 = Bremse nicht gedrückt [3] 7 = Kupplung nicht gedrückt [4] 9 = Keine Freigabe durch DME (ST_DRVG_RDI_DRV ungleich  Keine Fahrbereitschaft  in KL15-Ein) [5] 13 = Montagmodus aktiv [1]  |
| STAT_KL30F_AUS_VERHINDERER | 0-n | high | unsigned char | - | TAB_ZSG_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Ausschalten der KL30F verhindert, wenn eine Abschaltgrund vorliegen würde oder über eine Abschaltung über Diagnose (STEUERN_KL30F oder STEUERN_ZUSTAND_FAHRZEUG) angefordert würde  Hinweise: - Zuordnung erfolgt gemäß Tabelle   0 = Kein Hinderungsgrund vorliegend  16 = KL30B ein (ST_KL:  0x6...0xD) 17 = Parklicht ein (ST_PLI_LH:  0x1, Ein  oder ST_PLI_RH:  0x1, Ein ) 18 = Standlicht ein (ST_POLI:  0x1, Ein ) 19 = Warnblinken ein (ST_IDC:  0x3, Beide Blinker ein ) 20 = Aktiver Notruf (ECAL_ACV:  0x1, Notruf aktiv ) oder Notruf im Standby (ECAL_STDBY:  0x1, Standby ein ) 21 = KL30F über Dienstenachricht mit Attribut  gesetzlich  angefordert - wird im BDC2015 nicht verwendet  |

### RES_0XDABB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ZEIT_STUNDEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunden: 0 - 23; 253 entspricht '--'; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_ZEIT_MINUTEN_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minuten: 0 - 59; 253 entspricht '--'; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag: 0 - 31; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat: 1 - 12; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr: 2000 - 9999; 65535 Signal ungültig |
| STAT_BUS_IN_ZEIT_RELATIV_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relative Zeit in Sekunden seit 01.01.2000, Sekunden: 0 - 4,2 Millarden, 4294967295 ungültig |
| STAT_BUS_IN_ZEIT_TAGE_RELATIV_WERT | d | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relative Zeit in Tagen seit 01.01.2000; Tage: 1 entspricht 01.01.2000, 65535 entspricht ungültig. |

### RES_0XDABC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GANG | 0-n | - | unsigned char | - | TAB_CAS_GANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert für den Gang (über CAN empfangen). Hinweise:  - Der Wert wird aus CAN-Signal ST_GRSEL_DRV ermittelt. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_GANG. |
| STAT_BUS_IN_MOTOR_LAEUFT | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für Motor läuft. Hinweise: - Der Wert wird ermittelt aus Bit 0 & 1 des CAN-Signals ST_DRV_VEH. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTOR_STATUS |
| STAT_BUS_IN_KUPPLUNG | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Kupplung. Hinweise: - Der Wert wird ermittelt aus CAN-Signal ST_SW_CLT_DRV. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. Nur die Werte 0, 1 und 255 werden zurückgeliefert. |
| STAT_BUS_IN_ST_CENG_DRV | 0-n | high | unsigned char | - | TAB_ST_CENG_DRV | - | - | - | Status des Verbrennungsmotor Antrieb |
| STAT_BUS_IN_ST_DRVG_RDI_DRV | 0-n | high | unsigned char | - | TAB_ST_DRVG_RDI_DRV | - | - | - | Status Fahren Bereitschaft Antrieb |
| STAT_BUS_IN_DISP_PO_GRB | 0-n | high | unsigned char | - | TAB_DISP_PO_GRB | - | - | - | Status Anzeige Position Getriebe |

### RES_0XDABD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GESCHW_WERT | km/h | - | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Geschwindigkeit. Hinweise: - Der Wert wird ermittelt aus dem Signal V_VEH_COG. - Wertebereich 0-350, Ungültig 1023 - Der Rohwert wird von der SGBD durch 64 geteilt, da das Signal V_VEH_COG 64-tel-genau ist. |
| STAT_BUS_IN_GESCHW_STATUS | 0-n | - | unsigned char | - | TAB_CAS_GESCHW_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Geschwindigkeit als Status Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_GESCHW_STATUS - Der Wert wird ermittelt aus dem Signal DVCO_VEH. |
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

### RES_0XDB14_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGANG_FRONTWISCHER_DISKRET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Frontwischer (Wischer Stufe 1 und 2). |
| STAT_AUSGANG_HECKWISCHER_DISKRET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer. |
| STAT_AUSGANG_HECKWISCHER2_DISKRET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer_2 oder nach Codierung Heckscheibenheizung_2. |
| STAT_AUSGANG_WASCHPUMPE_VORNE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Scheibenwaschpumpe vorne (bei Dualer Wascherpumpe Ansteuerung vorne). |
| STAT_AUSGANG_WASCHPUMPE_HINTEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Scheibenwaschpumpe hinten (bei Dualer Wascherpumpe Ansteuerung hinten). |
| STAT_AUSGANG_SRA_PUMPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Scheinwerferreinigungspumpe. |
| STAT_AUSGANG_KL50_ANLASSER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den Anlasser. |
| STAT_AUSGANG_KL30B_RELAY_VORNE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Relais KL30_B_RELAY_FRONT. |
| STAT_AUSGANG_KL30B_RELAY_HINTEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Relais KL30_B_RELAY_REAR. |
| STAT_AUSGANG_KL15N_RELAY_VORNE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Relais KL15_N_RELAY_FRONT. |
| STAT_AUSGANG_KL15N_RELAY_HINTEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Relais KL15_N_RELAY_REAR. |
| STAT_AUSGANG_KL30F_RELAY_HINTEN_ON_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Relais KL30_F_RELAY_REAR_ON. |
| STAT_AUSGANG_KL30F_RELAY_HINTEN_OFF_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Relais KL30_F_RELAY_REAR_OFF. |
| STAT_AUSGANG_KL30B_AIRBAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für KL30B_AIRBAG. |
| STAT_AUSGANG_MAGNETKUPPLUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Klimakompressor Magnetkupplung. |
| STAT_AUSGANG_KOMPRESSORVENTIL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Klima Kompressorventil. |
| STAT_AUSGANG_WASSERVENTIL1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Wasserventil 1 wurd durch ein Absperrventil (Heizungsventil) ersetzt. Das Result enthält den aktuellen  Status des Komfort Kurzschlusscounters für das Absperrventil (Heizungsventil). |
| STAT_AUSGANG_WASSERVENTIL2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Wasserventil 2 wurde in Verbindung mit dem BDC-CT02 nicht verwendet, die Ansteuerung entfällt mit 17-07. Rückgabewert nicht beachten. Das Ergebnis entspricht dem default-Wert. |
| STAT_AUSGANG_ZUSATZWASSERPUMPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Zusatzwasserpumpe. |
| STAT_AUSGANG_HECKSCHEIBENSCHLOSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Heckscheibenschloss. |
| STAT_AUSGANG_HECKKLAPPENSCHLOSS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Heckklappenschloss. |
| STAT_AUSGANG_AUSSENSPIEGELHEIZUNG_DISKRET_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die diskrete Aussenspiegelheizung. |
| STAT_AUSGANG_WASCHDUESENHEIZUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Waschdüsenheizung. |
| STAT_AUSGANG_HECKSCHEIBENHEIZUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Heckscheibenheizung. |
| STAT_AUSGANG_SONNENROLLO_OEFFNEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die öffnen Ansteuerung des hinteren Sonnenrollos. |
| STAT_AUSGANG_SONNENROLLO_SCHLIESSEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für schliessen Ansteuerung des hinteren Sonnenrollos. |
| STAT_AUSGANG_5V0_SENSOR_OUTPUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die 5V0 Sensorausgänge. |
| STAT_AUSGANG_RESERVE1_OUTPUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Reserve1 Sensorausgänge. Das Result muss mit dem Wert 0 belegt werden. |
| STAT_AUSGANG_RESERVE2_OUTPUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Reserve2 Sensorausgänge. Das Result muss mit dem Wert 0 belegt werden. |
| STAT_AUSGANG_RESERVE3_OUTPUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Reserve3 Sensorausgänge. Das Result muss mit dem Wert 0 belegt werden. |
| STAT_AUSGANG_RESERVE4_OUTPUT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Reserve4 Sensorausgänge. Das Result muss mit dem Wert 0 belegt werden. |

### RES_0XDB15_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSGANG_FRONTWISCHER_DISKRET_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für den diskreten Frontwischer (Wischer Stufe 1 und 2). |
| STAT_AUSGANG_HECKWISCHER_DISKRET_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für den diskreten Heckwischer_1. |
| STAT_AUSGANG_HECKWISCHER2_DISKRET_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für den diskreten Heckwischer_2 oder nach Codierung Heckscheibenheizung_2. |
| STAT_AUSGANG_WASCHPUMPE_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Scheibenwaschpumpe vorne (bei Dualer Wascherpumpe Ansteuerung vorne). |
| STAT_AUSGANG_WASCHPUMPE_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Scheibenwaschpumpe hinten (bei Dualer Wascherpumpe Ansteuerung hinten). |
| STAT_AUSGANG_SRA_PUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Scheinwerferreinigungspumpe. |
| STAT_AUSGANG_KL50_ANLASSER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für den Anlasser. |
| STAT_AUSGANG_KL30B_RELAY_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Relais KL30_B_RELAY_FRONT. |
| STAT_AUSGANG_KL30B_RELAY_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Relais KL30_B_RELAY_REAR. |
| STAT_AUSGANG_KL15N_RELAY_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Relais KL15_N_RELAY_FRONT. |
| STAT_AUSGANG_KL15N_RELAY_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Relais KL15_N_RELAY_REAR. |
| STAT_AUSGANG_KL30F_RELAY_HINTEN_ON_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Relais KL30_F_RELAY_REAR_ON. |
| STAT_AUSGANG_KL30F_RELAY_HINTEN_OFF_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Relais KL30_F_RELAY_REAR_OFF. |
| STAT_AUSGANG_KL30B_AIRBAG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für KL30B_AIRBAG. |
| STAT_AUSGANG_MAGNETKUPPLUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Klimakompressor Magnetkupplung. |
| STAT_AUSGANG_KOMPRESSORVENTIL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Klima Kompressorventil. |
| STAT_AUSGANG_WASSERVENTIL1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Wasserventil 1 wurde durch ein Absperrventil (Heizungsventil) ersetzt.  Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Absperrventil (Heizungsventil). |
| STAT_AUSGANG_WASSERVENTIL2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Wasserventil 2 wurde in Verbindung mit dem BDC-CT02 nicht verwendet, die Ansteuerung entfällt mit 17-07. Rückgabewert nicht beachten. Das Ergebnis entspricht dem default-Wert. |
| STAT_AUSGANG_ZUSATZWASSERPUMPE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Zusatzwasserpumpe. |
| STAT_AUSGANG_HECKSCHEIBENSCHLOSS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Heckscheibenschloss. |
| STAT_AUSGANG_HECKKLAPPENSCHLOSS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für das Heckklappenschloss. |
| STAT_AUSGANG_AUSSENSPIEGELHEIZUNG_DISKRET_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die diskrete Aussenspiegelheizung. |
| STAT_AUSGANG_WASCHDUESENHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Waschdüsenheizung. |
| STAT_AUSGANG_HECKSCHEIBENHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Heckscheibenheizung. |
| STAT_AUSGANG_SONNENROLLO_OEFFNEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die öffnen Ansteuerung des hinteren Sonnenrollos. |
| STAT_AUSGANG_SONNENROLLO_SCHLIESSEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die schliessen Ansteuerung des hinteren Sonnenrollos. |
| STAT_AUSGANG_5V0_SENSOR_OUTPUT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die 5V0 Sensorausgänge. |
| STAT_AUSGANG_RESERVE1_OUTPUT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Reserve1 Sensorausgänge. |
| STAT_AUSGANG_RESERVE2_OUTPUT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Reserve2 Sensorausgänge. |
| STAT_AUSGANG_RESERVE3_OUTPUT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Reserve3 Sensorausgänge. |
| STAT_AUSGANG_RESERVE4_OUTPUT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Zählerstand des maximalen Kurzschlusscounters für die Reserve4 Sensorausgänge. |

### RES_0XDB41_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_JBR_30F1_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30F1-Relais |
| STAT_JBR_30F2_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30F2-Relais |
| STAT_JBR_30B1_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30B1-Relais |
| STAT_JBR_30B2_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30B2-Relais |
| STAT_JBR_HHS_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand Hintere Heckscheibenheizung-Relais |
| STAT_JBR_30B5_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30B5-Relais |
| STAT_JBR_30B6_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30B6-Relais |
| STAT_JBR_30B7_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 30B7-Relais |
| STAT_JBR_15N1_RELAY | 0-n | high | unsigned char | - | TAB_JBR_STATUS_RELAY | - | - | - | Relaiszustand 15N1-Relais |

### RES_0XDC54_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAENDLER_NUMMER_TEXT | TEXT | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die 5-stellige Händlernummer. Im Werk wird dieser Wert auf 00000. |
| STAT_ERSTZULASSUNGSDATUM_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Tag des Erstzulassungsdatums. Im Werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Monat des Erstzulassungsdatums.  Im Werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Jahr des Erstzulassungsdatums.  Im Werk wird dieser Wert auf das Jahr der Schlüssel-Initialisierung gesetzt. Wertebereich: 2000-9999. |

### RES_0XDC57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_KL15_ABSCHALTUNG | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob Abschaltung per Codierung freigeschaltet ist. Hinweise: - 0=nicht aktiv, 1=aktiv - ODER-Verknüpfung der einzelnen Codierungen für die KL15-Abschaltung (OSFG erreicht, Klappenwechsel, Gurt...) |
| STAT_ABSCHALTVERHINDERER_OBDKOMMUNIKATION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer OBD-Kommunikation (OBD-relevante Diagnosekommunikation über D-CAN) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_BREMSE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Bremspedal betätigt ist gerade aktiv. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_MOTORLAUF_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer Fahrbereitschaft (Motorlauf, MSA-Betrieb oder elektr. Fahrbereitschaft) gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |
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
| STAT_ABSCHALTVERHINDERER_FREMDLADUNG_HYBRID_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer Fremdladung bei Hybridfahrzeugen gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv Hinweis: Im SP2015 nicht verwendet und wird daher defaultmäßig mit 0 befüllt; Nur Vorhalt für RüKo. |
| STAT_ABSCHALTVERHINDERER_GURT_FAHRER_GESTECKT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Gurt Fahrer gesteckt gerade aktiv ist. Hinweise: - 0=keine Abschaltung durchgeführt, 1=Abschaltung durchgeführt. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_GURT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Öffnen Fahrergurt per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_KLAPPENWECHSEL_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Tür auf/zu per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_OSFG_ERREICHT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Erreichen der OSFG (Obere Startfähigkeitsgrenze) per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_TIMEOUT_OSFG_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 wegen OSFG mit oder ohne Timeout per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_ZV_SICHERN_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch ZV Sichern per Codierung freigeschaltet ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_FAT_GESCHLOSSEN_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer Fahrertür geschlossen gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_PWF_ZUSTAND_FBH_PAD_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer PWF-Zustand  Fahrbereitschaft herstellen  oder  Prüfen-Analyse-Diagnose  gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |

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
| STAT_AUFFAHRWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Auffahrwarnzeitpunkt  (siehe Tabelle TAB_WARNZEITPUNKT) |
| STAT_PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Personenwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Gezieltes Anleuchten (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenswarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Benutzerdefinierte gespeicherte Konfiguration Spurwechselwarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_UEBERNAHME_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | Übernahme der erkannten Höchstgeschwindigkeit als neue Setzgeschwindigkeit für Tempomat und Limiter.  (1 - ausgewählt; 0 - abgewählt) |
| STAT_OFFSET_GESCHWINDIGKEIT_WERT | km/h | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset zur Höchstgeschwindigkeit bei Übernahme als neue Setzgeschwindigkeit für Tempomat und Limiter. |
| STAT_SEITENKOLLISIONSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Seitenkollisionswarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURVERLASSENSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT2 | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenswarnzeitpunkt  (siehe Tabelle TAB_WARNZEITPUNKT2) |
| STAT_SPURWECHSELWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurwechselwarnzeitpunkt  (siehe Tabelle TAB_WARNZEITPUNKT) |
| STAT_VIBRATIONSSTAERKE | 0-n | high | unsigned char | - | TAB_VIBRATIONSSTAERKE | - | - | - | Konfiguration Vibrationsstärke des Lenkrades (siehe Tabelle TAB_VIBRATIONSSTAERKE) |
| STAT_SPURVERLASSENSLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenslenkeingriff (1 - ausgewählt; 0 - abgewählt) |
| STAT_SPURWECHSELLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurwechsellenkeingriff (1 - ausgewählt; 0 - abgewählt) |
| STAT_VORFAHRTSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Vorfahrtswarnung (1 - ausgewählt; 0 - abgewählt) |
| STAT_VORFAHRTSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_WARNZEITPUNKT | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Vorwarnzeitpunkt (siehe Tabelle TAB_WARNZEITPUNKT) |
| STAT_RESERVE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_5_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_6_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_7_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |

### RES_0XDC84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0 = nicht gedrückt 1 = gedrückt |

### RES_0XDC85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_LED_NR | 0-n | - | signed char | - | TAB_SARAH_LED | - | - | - | 0 = LED aus 1 = LED gruen 2 = LED defekt 3 = LED orange |

### RES_0XE442_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSPERRVENTIL | 0/1 | high | unsigned char | - | - | - | - | - | Gibt zurück ob die Heizungs- bzw. Külmittelsabsperrventil bestromt oder nicht. 0=Nicht bestromt;  1=Bestromt.  Derivatspezifische Ventiltypen beachten!  (Normally-Open- und Normally-Close-Ventile werden verbaut.) |

### RES_0XF100_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSE_WERT | + | - | - | mA | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SENSE-Wert des Ausgangs |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RES_0XF204_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XF300_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLL_TRIGGER_DATA | + | - | + | DATA | high | data[11] | - | - | 1.0 | 1.0 | 0.0 | result of a PASE function |

### RES_0XF301_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PLL_KEY_DIAGNOSTIC_DATA | + | - | + | DATA | high | data[14] | - | - | 1.0 | 1.0 | 0.0 | Result of a key Diagnostic telegram |

### RES_0XF307_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Return data (max 4 bytes); format is described in project specific documentation |

### RES_0XF308_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Return data (max 4 bytes); format is described in project specific documentation |

### RES_0XF30B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STARTUP_TIME_WERT | + | - | - | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufstartzeit in Millisekunden (0 ¿ FFFFFFFF) |

### RES_0XF30C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_RETURN_CODE_OK_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Same value returned always.  Feedback about the status of the processing is communicated via other channels. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIA_NR_AKTUELL | 0x0F27 | STAT_PIA_NR_AKTUELL | Das Result aktuell vom CAS auf dem Bus gesendeten PIA Nummer. Hinweise: - Zuordnung gemäß Tabelle TAB_CAS_PIA_NUMMER. | 0-n | - | - | unsigned char | TAB_CAS_PIA_NUMMER | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SCHLUESSELDATEN_SERVICE | 0x1006 | - | ServiceSchluesseldaten Dient dem blockweisen Auslesen der im CAS gespeicherten Service Schluesseldaten. Für diesen Diagnoseauftrag ist die physikalische Adressierung verpflichtend. Die funktionale Adressierungsart ist optional und zusätzlich erlaubt, aber im BMW-Umfeld so nicht sinnvoll | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1006_R | RES_0x1006_R |
| STEUERN_LIN_CODIERUNG | 0x100A | - | Codierung der LIN-Slaves | - | - | - | - | - | - | - | - | - | 31 | ARG_0x100A_R | RES_0x100A_R |
| STEUERN_PWF_MESSEMODUS | 0x102F | - | Dieser RID wird zum Setzden des Messemodus im PWF-Master verwendet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x102F_R | - |
| TASU_STEUERN_STATUS | 0x1032 | - | RID zum Steuern des TASU bzw. Abfragen von dessen Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1032_R | RES_0x1032_R |
| TAS_REQUEST | 0x1033 | - | Der RID wird verwendet, um ein Steuergerät zu veranlassen, einen Auftrag an den TAS zu schicken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1033_R | - |
| LOESCHEN_HISTORIENSPEICHER_FZG_ZUSTANDSANFORDERUNGEN | 0x1034 | - | Der Job dient zum Löschen des Historienspeichers für die Fahrzeugzustansanforderungen.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LOESCHEN_STANDNUTZUNG_HISTORIE | 0x1035 | - | Der Job dient zum Löschen des nicht-persistenten Datensatzes und des Häufigkeitszähler des Historienspeichers für die Standnutzungshistorie.  Spec: BDC2015 - Diagnosejob Standverbraucherhistorie V1.4 31102013.docx | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_STANDNUTZUNG_ZAEHLER_LOESCHEN | 0x1037 | - | Der RID dient zum Löschen des Standnutzungs-Nachlaufzeitenanforderungen-Histogramms. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ZUSTAND_FAHRZEUG | 0x2531 | STAT_ZUSTAND_FAHRZEUG | PWF-Zustand des Fahrzeugs. | 0-n | - | high | unsigned char | PWF_ZUSTAND_FAHRZEUG_STATUS | - | - | - | - | 22 | - | - |
| STATUS_PWF_MESSEMODUS | 0x2532 | STAT_PWF_MESSEMODUS | Das Result enthält den aktuellen PWF_Messemodus | 0-n | - | high | unsigned char | PWF_MESSEMODUS | - | - | - | - | 22 | - | - |
| STATUS_PWF_HISTORIE | 0x2533 | - | Diese DID dient zum Auslesen der PWF Historiendaten. Der Historienspeicher gibt den eingenommenen Fahrzeugzustand, das Transitionsereignise (d.h. anforderer bzw. Ursache für einen Zustandswechsel) sowie den Zeitpunkt des Zustandswechsels wieder. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2533_D |
| STATUS_STANDNUTZUNG_ZAEHLER | 0x2536 | - | Der DID dient zum Auslesen des Zählers für die Standnutzungs-Nachlaufzeitenanforderungen-Histogramm. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2536_D |
| SERVICE_SCHLUESSELDATEN_UPDATE | 0x4005 | - | Dieser Job ermoeglicht es einem folgende Aktionen einzeln oder gesamthaft anzustossen: * Ermitteln der aktuellen Daten aus dem Fahrzeug, * Uebertragen der Daten in alle aktuell erkannten Schluessel (inkrementell oder komplett; immer inkl. dem SekretKey fuer den drahtlosen Fahrzeugzugang, SK DFZ. Für diesen Diagnoseauftrag ist die physikalische Adressierung verpflichtend. Die funktionale Adressierungsart ist optional und zusätzlich erlaubt, aber im BMW-Umfeld so nicht sinnvoll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x4005_R | RES_0x4005_R |
| HOD_KALIBRIERUNG | 0xA093 | - | Kalibrierung Hands Off Detection | - | - | - | - | - | - | - | - | - | 31 | - | - |
| BATTERIEVORSCHAEDIGUNGSHISTORIE | 0xA099 | - | Der Job dient zum Löschen des nicht-persistenten Datensatzes und des Häufigkeitszähler des Historienspeichers für die Batterievorschädigunshistorie. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| WISCHER_LIN_EINLERNVORGANG | 0xA118 | - | Steuert den Einlernvorgang Schmetterlingswischer | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA118_R |
| FH_EINLERNEN | 0xA17B | - | Steuernaufruf zum Einlernen der Fensterheber 0x11: FH Fahrer  0x12: FH Beifahrer   0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x15: FH Heckscheibe 0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: FH Fahrer, Beifahrer, FH Fahrer Beifahrer und FH Beifahrer hinten  0x50: FH Fahrer, Beifahrer, FH Fahrer Beifahrer, FH Beifahrer hinten und FH Heckscheibe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17B_R | RES_0xA17B_R |
| FH_VERFAHREN_HALL | 0xA17E | - | Verfahren auf Hallposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17E_R | RES_0xA17E_R |
| FH_VERFAHREN_PROZENT | 0xA17F | - | Verfahren der Fensterheber auf bestimmten Prozentwert 0: geschlossen 100: offen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17F_R | RES_0xA17F_R |
| FH_VERFAHREN_SERVICE_POSITION | 0xA182 | - | Verfährt das Fenster auf eine Serviceposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA182_R | RES_0xA182_R |
| SCHLUESSELSUCHEN_HISTORIE | 0xA2DD | - | Aktionen und Auswertung der Schlüsselsuchen Historie | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA2DD_R | - |
| AUSSENSPIEGEL_SELBSTTEST | 0xA322 | - | Automatische Spiegelprüfung wird angestoßen. Wenn ein Fehler beim Selbsttest auftritt, dann erfolgt ein FS-Eintrag. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA322_R |
| REGENSENSOR_INITIALISIERUNG | 0xA3B7 | - | Startet Neuadaption des RLS an der Windschutzscheibe. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA3B7_R |
| LEUCHTEN_KALTUEBERWACHUNG | 0xA530 | - | Kaltlichtüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA530_R |
| LEUCHTEN_WARMUEBERWACHUNG | 0xA531 | - | Warmlichüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA531_R |
| HOEHENSTAENDE_OFFSET_RESET | 0xA532 | - | Starten Reset Höhenstand Offset | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA532_R | - |
| LEUCHTEN_KURZSCHLUSSABSCHALTUNG_RESET | 0xA533 | - | KURZSCHLUSSABSCHALTUNG_RESET_LAMPEN_AUSGANG | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA533_R | RES_0xA533_R |
| IFE_CODIERUNG | 0xA5AF | - | Routine Job um all IFEs zu kodieren. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA5AF_R |
| LIN_AUTOADRESSIERUNG | 0xA838 | - | Es wird die Autoadressierung der LIN-Layering-Slaves durchgeführt. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SMO_SIMULATION_BEDIENUNG | 0xAA80 | - | Dieser Job dient zur Simulation einer Bedienungsanforderung (Öffnen der Heckklappe) durch das SmartOpener-Steuergerät. Hierbei soll die gesamte Wirkkette vom Eingang der Bedienungsanforderung beim ZSG bis zum physikalischen Öffnen der Heckklappe ausgelöst werden. Bei dieser Simulation erfolgt keine Kommunikation zwischen ZSG und SMO-SG, d.h. der Job kann auch bei nicht verbautem SMO-SG durchgeführt werden | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA80_R |
| STEUERN_KL15_ABSCHALTUNG | 0xAC51 | - | Dieser Job dient dazu per Diagnose die Schwelle festzulegen, bei welcher Geschindigkeit die Funktion automatische KL15-Abschaltung wieder aktiviert (default) werden soll. Die KL-15-Abschaltung wird bis zur Überschreitung dieser Geschwindigkeits-Schwelle verhindert. Diese Abschalt-Verhinderung bleibt auch über RESET und Spannungs-Reset hinaus bestehen (Ablage im EEPROM). Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_KL15_ABSCHALTUNG,STR,Argumente | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC51_R | - |
| STEUERN_CA_KOMM_TEST | 0xAC53 | - | Steuern der Kommunikation mit bestimmtem Schlüssel über bestimmte Antenne (IRV, IRH, FT, BFT, HA, KRLI, KRRE, SF) zum Testen der CA-Kommunikation (LF). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC53_R | RES_0xAC53_R |
| STEUERN_CA_BROADCAST | 0xAC54 | - | Steuern der Schlüsselsuche per Broadcast Innenraum (Antennen Innenraum Vorne + Hinten). Alle im Innenraum befindlichen bereits bekannten Schlüssel werden ermittelt (max. 8). Hinweis: Die Results STAT_CA_SCHL_...x werden beginnend mit x=1 bis x=n (bei n gefunden Schlüsseln) aufgefüllt. Die Results STAT_CA_SCHL_...x für x > n werden mit 15 belegt (kein Schlüssel gefunden). | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC54_R |
| STEUERN_CA_ANTENNEN_TEST | 0xAC55 | - | Ansteuern des CA-Antennen-Test. Dabei wird die interne Antennendiagnose angestossen und erkannte Fehler werden entsprechend in Fehlerspeicher eintragen. Hinweise:  - Trotz erkannter Fehler in der internen Diagnose kann u.U. kein Fehlerspeichereintrag aufgrund nichterfüllter Randbedingungen (z.B. Unterspannung) vorhanden sein. - Es werden nur Antennen getestet die codiert sind. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC55_R |
| STEUERN_ZV_MASTER | 0xAC57 | - | Ansteuerung der Zentralverriegelung per Diagnose Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_ZV_MASTER,STR,Argumente. - Ein Wechsel aus oder in den Zustand 'gesichert' ist nicht möglich. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC57_R | RES_0xAC57_R |
| STEUERN_FBD_EMPFAENGER_INIT | 0xAC58 | - | Dieser Job dient zum Ansteuern der FBD-Initialisierung. Dabei werden folgende Aktivitäten durch das ZSG angesteuert: 1) Prüfen Nachrichtenkatalog- und SW-Version 2) WUP im FBD-Empfänger prüfen und ggf. schreiben  Hinweise:  -Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG;STEUERN_FBD_EMPFAENGER_INIT;STR -Normalerweise erfolgt die FBD-Initialisierung vollautomatisch. Dieser Job erlaubt es aber eine Initialisierung gezielt nochmals zu triggern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC58_R |
| STEUERN_TRANSPONDERSPULE | 0xAC5B | - | Dieser Job dient Job zum Aktivieren der Transponderspule (für Schlüsselkommunikation) für 10 Sekunden oder sofortigem Deaktivieren der Transponderspule. Hinweis: Aktivieren der Transponderspule: Nach Ablauf der 10 Sekunden wird die Transponderspule automatisch wieder deaktiviert. Erfolgt ein erneuter Jobaufruf zur Aktivierung während der 10 Sekunden, dann wird der Timer wieder auf 10 Sekunden hochgesetzt ohne die Transponderspule dabei zu deaktivieren. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC5B_R | - |
| FBD_REICHWEITENMESSUNG | 0xAC5D | - | Dieser Job dient zum Aktiveren und Deaktivieren der FBD-Reichweitenmessung für (maximal) 30 Minuten.  Nach dem Start der Reichweitenmessung wird ein Timer gestartet und nach 30 Minuten automatisch der Reichweitenmess-Modus des FBD wieder verlassen. Alternativ lässt sich die Reichweitenmessung auch per Diagnosejob stoppen.  Bei aktivierter Reichweitenmessung wird jede Betätigung einer beliebigen IDG-Taste durch 2-maliges Quittierungblinken aller Blinkerleuchten des Fahrzeugs - unabhängig vom Klemmenzustand - bestätigt.  Hinweise:  - Start der Reichweitenmessung: Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG; STEUERN_FBD_REICHWEITENMESSUNG;STR' - Stoppen der Reichweitenmessung: Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument 'ARG; STEUERN_FBD_REICHWEITENMESSUNG;STPR' | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC5D_R |
| STEUERN_FAHRZEUGNEUSTART_PWF | 0xAC60 | - | Fahrzeugneustart Parken, Wohnen, Fahren. Warten bis Busse eingeschlafen sind, maximal aber 30s. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC60_R | RES_0xAC60_R |
| ELSV_TASTER | 0xD070 | - | Status Taster elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD070_D |
| LENKRADHEIZUNG_LED | 0xD071 | - | 0: LED AUS  1: LED EIN | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD071_D | - |
| ELSV | 0xD072 | - | Status / Steuern elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD072_D | - |
| LENKRADHEIZUNG_TASTER | 0xD073 | STAT_TASTER_LENKRADHEIZUNG_EIN | 0: Lenkradheizung Taster nicht betätigt; 1: Lenkradheizung Taster betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRADHEIZUNG | 0xD074 | - | Status / Steuern Lenkradheizung (Aktiv, LED und analoger Wert) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD074_D | RES_0xD074_D |
| ELSV_VORHANDEN | 0xD07F | STAT_VORHANDEN_ELSV_EIN | Elektrische Lenksäulenverstellung 0: nicht vorhanden 1: vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRAD_MFL | 0xD081 | - | Status der MFL-Tasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD081_D |
| ELSV_POS | 0xD084 | - | Ansteuerung einer bestimmten ELSV-Position | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD084_D | - |
| ELSV_POS_STATUS | 0xD089 | - | Aktuelle Position und Bewegung der ELSV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD089_D |
| SMO_SPIELSCHUTZZAEHLER | 0xD096 | STAT_SPIELSCHUTZZAEHLER_WERT | Das Result gibt an, wie oft der SMO-Sensor eine Auslösung erkannt hat, ohne das ein gültiger Schlüssel im Heck-Aussenraum erkannt wurde | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SMO_VARIANTE | 0xD098 | STAT_FAHRZEUGTYP | Das Result gibt an, welchen Fahrzeugtyp das SMO gerade eingestellt hat | 0-n | - | high | unsigned char | TAB_SMO_FAHRZEUGTYP | - | - | - | - | 22 | - | - |
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
| FH_KURZHUB_AKTIV | 0xD18F | - | Kurzhub rahmenlose Scheibe aktiv | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD18F_D | RES_0xD18F_D |
| FH_FA_BEWEGUNG | 0xD1A7 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A7_D |
| FH_BF_BEWEGUNG | 0xD1A8 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A8_D |
| FH_FAH_BEWEGUNG | 0xD1A9 | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A9_D |
| FH_BFH_BEWEGUNG | 0xD1AA | - | Status der Fensterheberbewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AA_D |
| FH_FA_STATUS_DETAIL | 0xD1B5 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B5_D |
| FH_BF_STATUS_DETAIL | 0xD1B6 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B6_D |
| FH_FAH_STATUS_DETAIL | 0xD1B7 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B7_D |
| FH_BFH_STATUS_DETAIL | 0xD1B8 | - | Auslesen der Detailinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B8_D |
| FH_TASTER_ALLE_FH | 0xD1C2 | STAT_TASTER_ALLE_FH_NR | Fahrerseite (Tastenblock): Taster alle FH siehe Tabelle | 0-n | - | high | unsigned char | TAB_FH_VERFAHREN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SITZEXT_TASTEN | 0xD1CA | - | Auslesen status sitzmemory Fahrerseite Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1CA_D |
| STATUS_SITZEXT_VORHANDEN | 0xD1CB | - | Auslesen ob SitzExt-SB vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1CB_D |
| STEUERN_SITZEXT_LED | 0xD1CC | - | Steuert die LEDs in den Sitzext lin slaves | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1CC_D | - |
| IFE_FA_LOGISTIKDATEN_LESEN | 0xD1F1 | - | Liest die Logostikdaten der IFE aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F1_D |
| IFE_BF_LOGISTIKDATEN_LESEN | 0xD1F2 | - | Liest die Logistikdaten der IFE aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F2_D |
| IFE_FAH_LOGISTIKDATEN_LESEN | 0xD1F3 | - | Liest die Logistikdaten der IFE aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F3_D |
| IFE_BFH_LOGISTIKDATEN_LESEN | 0xD1F4 | - | Liest die Logistikdaten der IFE aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F4_D |
| HECKSPOILER_TASTER | 0xD220 | - | DID für Heckspoilertaster | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD220_D | RES_0xD220_D |
| TANK_FUELLSTAND_LINKS | 0xD258 | STAT_FUELLSTAND_TANK_LI_WERT | Rückgabe des Füllstandwerts des linken Tanksensor. Arbeitsbereich und IO-Bereich muss vom Entwickler befüllt werden. | Ohm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TANK_FUELLSTAND_RECHTS | 0xD259 | STAT_FUELLSTAND_TANK_RE_WERT | Rückgabe des Füllstands des rechten Tanksensors. Arbeitsbereich und IO-Bereich muss vom Entwickler befüllt werden. | Ohm | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSPERRE_MONTAGE | 0xD25D | - | Aktivierung/Deaktivierung der Aussenlichtfunktionen für die Montageprozesse. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD25D_D | RES_0xD25D_D |
| LENKRAD_LRE_M_TASTER | 0xD26D | - | Status der M-spezifischen Lenkradtasten  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD26D_D |
| HUPE_TASTER | 0xD297 | STAT_TASTER_HUPE_EIN | 0= Taster Hupe nicht betätigt  1= Taster Hupe betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HUPE | 0xD298 | - | Status / Steuern Hupe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD298_D | RES_0xD298_D |
| ROLLO_HECK_MOTOR | 0xD30A | - | Status / Steuern Heckrollo | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30A_D | RES_0xD30A_D |
| ROLLO_HECK_TASTER | 0xD30B | - | Status / Simulation Taster Sonnenrollo Heckscheibe  0: Taster nicht gedrückt 1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30B_D | RES_0xD30B_D |
| ROLLO_HECK_VORHANDEN | 0xD310 | STAT_VORHANDEN_HECKROLLO_EIN | 0: Heckrollo nicht vorhanden  1: Heckrollo über BDC 2: Heckrollo über HKFM | 0-n | - | - | unsigned char | TAB_HECKROLLO_VORHANDEN | - | - | - | - | 22 | - | - |
| ROLLO_FAH_TASTER | 0xD311 | - | Status lokaler Taster Fahrertür für die seitlichen Sonnenrollos bzw. Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD311_D |
| ROLLO_FAH_MOTOR | 0xD312 | - | Status / Steuern Seitenrollo Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD312_D | RES_0xD312_D |
| ROLLO_BFH_TASTER | 0xD314 | - | Status lokaler Taster Beifahrertür für die seitlichen Sonnenrollos bzw. Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD314_D |
| ROLLO_BFH_MOTOR | 0xD315 | - | Status / Steuern Seitenrollo Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD315_D | RES_0xD315_D |
| ROLLO_TUEREN_VORHANDEN | 0xD317 | STAT_VORHANDEN_SEITENROLLO_EIN | 0: Seitenrollo nicht vorhanden;  1: Seitenrollo vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_ABBLENDEN | 0xD320 | - | Status / Steuern Abblenden Aussenspiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD320_D | RES_0xD320_D |
| AUSSENSPIEGEL_THERMOSCHUTZ | 0xD321 | STAT_SPIEGEL_THERMOSCHUTZ_AKTIV | 0: nicht aktiv 1: aktiv | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_RECHTS_RICHTUNG | 0xD322 | - | Status / Steuern Bewegung Spiegel rechts (Richtung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD322_D | RES_0xD322_D |
| AUSSENSPIEGEL_KLAPPEN | 0xD324 | - | Status / Steuern Aussenspiegel beiklappen / abklappen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD324_D | RES_0xD324_D |
| AUSSENSPIEGEL_LINKS_RICHTUNG | 0xD327 | - | Status / Steuern Bewegung Spiegel links (Richtung) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD327_D | RES_0xD327_D |
| AUSSENSPIEGEL_LINKS_POS | 0xD328 | - | Status / Steuern Position links Spiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD328_D | RES_0xD328_D |
| AUSSENSPIEGEL_LIN | 0xD329 | STAT_VORHANDEN_LIN_SPIEGEL_EIN | 0: Kein LIN-Aussenspiegel  1: LIN-Aussenspiegel | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_MEM_VORHANDEN | 0xD32B | STAT_VORHANDEN_SPIEGEL_MEMORY_EIN | 0: Keine Memoryfunktion  1: Memoryfunktion | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_HEIZUNG | 0xD32D | - | Status / Steuern Heizung Aussenspiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32D_D | RES_0xD32D_D |
| AUSSENSPIEGEL_HEIZUNG_VERBAUT | 0xD32E | STAT_VORHANDEN_SPIEGEL_HEIZUNG_EIN | 0: Keine Spiegelheizung  1: Spiegelheizung | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EC_SPIEGEL_ABBLENDEN | 0xD32F | - | Status / Steuern Innenspiegel (EC-Spiegel) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32F_D | RES_0xD32F_D |
| EC_SPIEGEL_VORHANDEN | 0xD330 | STAT_VORHANDEN_EC_SPIEGEL | 0: EC-Spiegel nicht vorhanden; 1: EC-Spiegel vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_TASTER | 0xD331 | - | Status Schalter / Taster Spiegelverstellung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD331_D |
| AUSSENSPIEGEL_KLAPPEN_VORHANDEN | 0xD332 | STAT_VORHANDEN_SPIEGEL_BEIKLAPPEN_EIN | 0: Kein Beiklappen möglich  1: Beiklappne möglich | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_RECHTS_POS | 0xD333 | - | Status / Steuern Position rechts Spiegel | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD333_D | RES_0xD333_D |
| AUSSENSPIEGEL_MEM_POS_STEUERN | 0xD336 | - | Aussenspiegel in gewählte Memoryposition verfahren | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD336_D | - |
| AUSSENSPIEGEL_MEM_POS_SCHREIBEN | 0xD338 | - | Beschreiben eines Memoryplatzes mit den horizontalen und vertikalen Positionswerten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD338_D | - |
| UGDO_VORHANDEN | 0xD33A | STAT_VORHANDEN_UGDO | 0: UGDO nicht vorhanden;  1: UGDO vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_ABBLENDEN_VORHANDEN | 0xD33C | STAT_VORHANDEN_SPIEGEL_ABBLENDEN_EIN | Liefert zurück ob die Außenspiegel abblendbar sind und welche. Siehe Table TAB_AUSSENSPIEGEL_ABBLENDEN | 0-n | - | - | signed int | TAB_AUSSENSPIEGEL_ABBLENDEN | - | - | - | - | 22 | - | - |
| UGDO_LAND | 0xD33D | STAT_UGDO_LAND_NR | Eingestelltes Land | 0-n | - | - | unsigned char | TAB_UGDO_LAND | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_VORHANDEN | 0xD343 | STAT_KOMPASS_SPIEGEL_VORHANDEN_EIN | 0: Kompass-Spiegel nicht verbaut  1: Kompass-Spiegel verbaut | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_MAGNET | 0xD344 | STAT_KOMPASS_SPIEGEL_MAGNET_ZONE_NR | Ausgabe Magnetzone (aus Slave)  Auflistung siehe Tabelle TAB_MAGNETZONE | 0-n | - | - | unsigned char | TAB_MAGNETZONE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_SPRACHE | 0xD345 | STAT_KOMPASS_SPIEGEL_SPRACHE_NR | Codierparameter aus dem Master Spracheinstellung Auflistung siehe Tabelle TAB_KOMPASS_SPRACHE | 0-n | - | - | unsigned char | TAB_KOMPASS_SPRACHE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMPASS_SPIEGEL_LENKUNG | 0xD346 | STAT_KOMPASS_SPIEGEL_LENKUNG_NR | Codierparameter aus dem Master 0: Rechtslenker  1: Linkslenker | 0-n | - | - | unsigned char | TAB_KOMPASS_LENKUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENSPIEGEL_HC2 | 0xD347 | - | Status / Steuern HC2-Anzeige | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD347_D | RES_0xD347_D |
| WISCHER_LIN_INFOS | 0xD34F | - | Auslesen weitere Informationen der Frontwischer. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD34F_D |
| WASCHDUESENHEIZUNG | 0xD350 | - | Waschdüsenheizung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD350_D | RES_0xD350_D |
| WISCHER_FRONT_MOTOR | 0xD351 | STAT_MOTOR_FRONTWISCHER_EIN | Liefert den Zustand der Ansteuerung des Frontscheibenwischers:  0= Ansteuerung Frontscheibenwischer nicht aktiv; 1= Ansteuerung Frontscheibenwischer aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WASCHERPUMPE_HINTEN | 0xD352 | - | Status / Steuern Waschwasserpumpe hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD352_D | RES_0xD352_D |
| WISCHER_HECK_MOTOR | 0xD353 | STAT_MOTOR_HECKWISCHER_EIN | Liefert den Zustand der Ansteuerung des Heckscheibenwischers:  0= Ansteuerung Heckscheibenwischer nicht aktiv; 1= Ansteuerung Heckscheibenwischer aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SRA_RELAIS | 0xD354 | STAT_RELAIS_SRA_EIN | Liefert den Zustand des Relais der Scheinwerferreinigungsanlage:  0= Relais Scheinwerferreinigungsanlage nicht aktiv;  1= Relais Scheinwerferreinigungsanlage aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_FRONT_RSK | 0xD355 | - | Status / Steuern Park-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD355_D | RES_0xD355_D |
| WISCHER_HECK_RSK | 0xD356 | - | Status / Steuern Park-Position Heckscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD356_D | RES_0xD356_D |
| WASCHWASSERSTAND | 0xD357 | - | _EIN: 1 Waschwasserbehälter ausreichend befüllt _WERT: Pegel in mV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD357_D |
| WISCHER_HECK_VORHANDEN | 0xD358 | STAT_VORHANDEN_HECKWISCHER_EIN | 0: Heckwischer nicht codiert;  1: Heckwischer codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SRA_VORHANDEN | 0xD359 | STAT_VORHANDEN_SRA | Gibt an, ob die Scheinwerferreinigungsanlage codiert ist:  0= Scheinwerferreinigungsanlage nicht codiert;  1= Scheinwerferreinigungsanlage codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKSTOCK_WISCHER | 0xD35B | - | Liefert den Zustand der einzelnen Wischerschalter am Lenkstock | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD35B_D |
| WASCHWASSER_VORNE | 0xD35C | - | Status / Steuern Waschwasserpumpe vorne | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD35C_D | RES_0xD35C_D |
| WISCHER_FRONT | 0xD35D | - | Ansteuerung Scheibenwischer vorne | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35D_D | - |
| WISCHER_FRONT_LIN | 0xD35E | STAT_VORHANDEN_LIN_FRONTWISCHER | Gibt an, ob der Frontwischer als LIN-Modul verbaut ist:  0= kein LIN-Frontwischer;  1= LIN-Frontwischer | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_HECK | 0xD35F | - | Ansteuerung Scheibenwischers hinten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD35F_D | - |
| SRA | 0xD360 | - | Ansteuerung Scheinwerferreinigungsanlage | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD360_D | - |
| LENKSTOCK_WISCHER_RLS_LED | 0xD361 | - | Status / Steuern LED Regensensor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD361_D | - |
| WISCHER_FRONT_MONTAGE | 0xD362 | - | Status / Steuern Montage-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD362_D | RES_0xD362_D |
| WISCHER_FRONT_SERVICE | 0xD363 | - | Status / Steuern Service-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD363_D | RES_0xD363_D |
| REGENSENSOR_VORHANDEN | 0xD373 | STAT_VORHANDEN_REGENSENSOR_EIN | 0: Regensensor nicht vorhanden / codiert; 1: Regensensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REGENSENSOR_INIT | 0xD375 | STAT_REGENSENSOR_INIT | 0x00 Regensensor nicht eingemessen 0x01 Regensensor eingemessen | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REGENSENSOR_INT_WERT | 0xD376 | - | Rückgabe Regenintensität | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD376_D |
| FAHRLICHTSENSOR | 0xD3BE | - | Auslesen der Werte des Fahrlichtsensors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3BE_D |
| FAHRLICHTSENSOR_VORHANDEN | 0xD3BF | STAT_VORHANDEN_FAHRLICHTSENSOR | 1:Fahrlichtsensor vorhanden/codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TLC | 0xD3E9 | - | Timo to line crossing | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3E9_D | RES_0xD3E9_D |
| CARGO_SG_ANTIRUTSCHMATTE | 0xD3EF | - | Zur Funktionsprüfung der Antirutschmatte | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3EF_D | RES_0xD3EF_D |
| HOD_LENKRAD | 0xD3F0 | STAT_HOD_STATUS_NR | Liefert den Status des HOD Sensors | 0-n | - | high | unsigned char | HOD_STATUS | - | - | - | - | 22 | - | - |
| HOD_ZUSTAND_GAP | 0xD3F1 | - | Abstand bzw. Berührungsfläche zwischen Hand und Lenkrad (gemessener Wert am A/D-Wandler) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3F1_D |
| HOD_AKTIVIERUNG | 0xD3F3 | - | Aktivierung der HOD-Elektronik per Diagnose | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3F3_D | - |
| WISCHER_LIN_WINKELPOSITION | 0xD500 | - | Status/Steuern LIN-Wischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD500_D | RES_0xD500_D |
| WISCHER_LIN_DATEN_LESEN | 0xD505 | - | WISCHER_LIN_DATEN_LESEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD505_D |
| TASTER_PARKLICHT | 0xD517 | STAT_TASTER_PL | Das Result enthält den aktuellen Zustand der Parklichttasten der BEL. | 0-n | - | high | unsigned char | TAB_STATUS_TASTER | - | - | - | - | 22 | - | - |
| TASTER_FUNKTIONSTASTER | 0xD518 | STAT_TASTER_FN | Das Result enthält den aktuellen Zustand des Funktionstasters der BEL. | 0-n | - | high | unsigned char | TAB_ZUSTAND_TASTER | - | - | - | - | 22 | - | - |
| INNENLICHT_HELLIGKEIT | 0xD519 | - | Offset der Helligkeit des Ambientlicht | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD519_D | - |
| INNENLICHTEINHEIT_DRITTE_SITZREIHE | 0xD52C | - | Aktueller Status der ILE 3. Sitzreihe Statusrückmeldungen auf dem LIN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD52C_D |
| LESELICHT_VORNE | 0xD53A | - | Status Leselicht vorne | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD53A_D |
| LICHTSCHALTER_WBL_TASTER_BEL | 0xD53D | STAT_TASTER_WBL_BEL_EIN | 0: Bel. Taster Warnblinkanlage aus  1: Bel. Taster Warnblinkanlage ein | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| RUECKWAERTSGANG_SCHALTER | 0xD540 | STAT_SCHALTER_RUECK_EIN | 0: nicht aktiv 1: aktiv | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LEUCHTEN_FUNKTION | 0xD542 | - | Steuern der Lampenfunktion  Mögliche Elemente siehe Tabelle TAB_LAMPEN_FUNKTION | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD542_D | RES_0xD542_D |
| LESELICHT_VORNE_VORHANDEN | 0xD544 | STAT_VORHANDEN_LESELICHT_VORNE | 0= Leselicht vorn nicht vorhanden, 1= Leselicht vorne vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LESELICHT_HINTEN_VORHANDEN | 0xD545 | STAT_VORHANDEN_LESELICHT_HINTEN | 0= Leselicht hinten nicht vorhanden, 1= Leselicht hinten vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
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
| PIA_ABBIEGELICHT | 0xD559 | STAT_PIA_ABBIEGELICHT_PIA_EIN | 0: PIA: Abbiegelicht momentan nicht aktiv 1: PIA: Abbiegelicht momentan aktiv | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PIA_TIPPBLINKEN | 0xD55E | - | Status PIA-Einstellung Tippblinken | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD55E_D |
| PIA_TAGFAHRLICHT | 0xD573 | STAT_PIA_TAGFAHRLICHT_EIN | Tagfahrlicht momentan: 0= AUS; 1= EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_HINTEN | 0xD57B | - | Status Innenlicht hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57B_D |
| INNENLICHT_VORNE | 0xD57C | - | Status Innenlicht vorne / Steuern Innenlicht Daueraus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD57C_D | RES_0xD57C_D |
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
| LICHTSCHALTER_NSW_TASTER | 0xD58B | STAT_TASTER_NSW_EIN | 0: Taster Nebelscheinwerfer nicht betätigt; 1: Taster Nebelscheinwerfer betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LICHTSCHALTER_NSL_TASTER | 0xD58C | STAT_TASTER_NSL_EIN | 0: Taster Nebelschlussleuchte nicht betätigt 1: Taster Nebelschlussleuchte betätigt | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FBM_SENS_TASTEN | 0xD592 | - | FBM-Sensorik | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD592_D | RES_0xD592_D |
| FBM_TASTEN | 0xD593 | - | FBM-Tasten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD593_D | RES_0xD593_D |
| FBM_TASTEN_VORHANDEN_WERT | 0xD599 | STAT_FBM_TASTEN_VORHANDEN_WERT | Gibt aus, wieviele FBM-Tasten verbaut sind: 0 = keine FBM-Tasten verbaut, 1 = 1 Taste verbaut, 2 = 2 Tasten verbaut, N = n Tasten verbaut | Tasten | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AMBIENTE_BELEUCHTUNG | 0xD5D3 | - | Status Ambiente-Beleuchtung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5D3_D |
| SMO_LOESCHEN_SPIELSCHUTZZAEHLER | 0xD5D5 | - | SMO Spielschutzzählers | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5D5_D | - |
| SMO_RESET | 0xD5D7 | - | SMO Reset | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5D7_D | - |
| INNENLICHT_MAPPING | 0xD5DE | - | Ausgabe der Zuordnung Pin zu Funktion | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5DE_D |
| AHL_LWR_FAHRSITUATION | 0xD5E6 | - | Status / Steuern aktuelle Fahrlichtsituation | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD5E6_D | RES_0xD5E6_D |
| HOEHENSTAENDE_SENSOREN | 0xD601 | - | Auswertung / Zustandserkennung der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD601_D |
| HOEHENSTAENDE_KALIBRIERUNG_LESEN | 0xD604 | - | Auslesen Nullpunkt Hoehenstandssensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD604_D |
| SMO_VORHANDEN | 0xD60C | - | Verbau- und Codierzustand Smart Opener: 0 = nicht codiert, nicht verbaut, 1 = codiert, verbaut | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD60C_D |
| SMO_ANFORDERUNG | 0xD60F | STAT_SMO_ANFORDERUNG | Vom Zentralsteuergerät empfangene Anforderung Smart Opener/Closer zum Öffnen/Schliessen der Heckklappe | 0-n | - | high | unsigned char | TAB_SMO_ANFORDERUNG | - | - | - | - | 22 | - | - |
| STATUS_FES_MODUS | 0xD611 | STAT_FES_MODUS_WERT | aktueller FES Modus | HEX | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_FES_STATISTIK | 0xD612 | - | STATUS_FES_STATISTIK | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD612_D |
| STEUERN_FES_MODUS | 0xD613 | - | Steuern des FES Modus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD613_D | - |
| STATUS_FES_DATEN | 0xD625 | - | Status FES Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD625_D |
| CORONA_LED | 0xD62A | - | DID for Corona LED | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD62A_D | RES_0xD62A_D |
| AUSSTATTUNG_CORONA_LED | 0xD62B | STAT_VORHANDEN_CORONA_LED | 0: CORONA LED nicht vorhanden;  1: CORONA LED vorhanden | 0/1 | - | - | signed char | - | - | - | - | - | 22 | - | - |
| FES_MASTER_SW_FEHLER_INFO | 0xD62D | STAT_FES_MASTER_SW_FEHLER_INFO_WERT | FES Master SW Fehler | - | - | high | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FES_COORDINT_SW_FEHLER_INFO | 0xD62E | STAT_FES_COORDINT_SW_FEHLER_INFO_WERT | FES COORDINT SW Fehler | - | - | high | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WISCHER_HECK_SERVICE | 0xD642 | - | Status / Steuern Service-Position Heckscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD642_D | RES_0xD642_D |
| KUEHLMITTELSTAND | 0xD672 | - | _EIN: 1 Kühlmittelbehälter ausreichend befüllt _WERT: Pegel in mV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD672_D |
| BEMIKO_LIN_TASTEN | 0xD6C0 | - | Auslesen Taster der Bemiko | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C0_D |
| BEMIKO_LIN_VORHANDEN | 0xD6C1 | STAT_VORHANDEN_BEMIKO | LIN Bemiko kodiert (0: nicht kodiert, 1: kodiert) | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| BEMIKO_LIN_LED | 0xD6C2 | - | Steuert die LEDs im LIN slave Bemiko | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6C2_D | - |
| BEMIKO_LIN_VARIANT_ID | 0xD6C3 | STAT_VARIANT_ID_WERT | Varianten ID der Bemiko (gültige Werte: 0x00 - 0xFF) | HEX | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| BEMIKO_LIN_TASTEN_SCHREIBEN | 0xD6C4 | - | Job zum Steuern der LIN-Tasten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6C4_D | - |
| SITZHEIZUNG_FA_VORHANDEN | 0xD726 | STAT_SITZHEIZUNG_FA_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_VORHANDEN | 0xD727 | STAT_SITZHEIZUNG_BF_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FAH_VORHANDEN | 0xD728 | STAT_SITZHEIZUNG_FAH_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BFH_VORHANDEN | 0xD729 | STAT_SITZHEIZUNG_BFH_VORHANDEN | 0: Sitzheizung nicht vorhanden 1: Sitzheizung vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_BF_STUFE | 0xD72A | - | Status / Steuern Stufe Sitzheizung Beifahrerseite | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD72A_D | RES_0xD72A_D |
| SITZHEIZUNG_BF_TEMP | 0xD72F | - | Status / Steuern Temperatur Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD72F_D | RES_0xD72F_D |
| SITZHEIZUNG_BF | 0xD730 | - | Betriebszustand Sitzheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD730_D |
| SITZHEIZUNG_FA_TEMP | 0xD732 | - | Status / Steuern Temperatur Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD732_D | RES_0xD732_D |
| SITZHEIZUNG_FA_STUFE | 0xD737 | - | Status / Steuern Stufe Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD737_D | RES_0xD737_D |
| VORHANDEN_DRITTE_SITZREIHE_EIN | 0xD762 | STAT_VORHANDEN_DRITTE_SITZREIHE_EIN | Gibt an, ob die 3. Sitzreihe vorhanden ist: 0= Dritte Sitzreihe nicht codiert; 1= Dritte Sitzreihe codiert | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VERRIEGELUNG_ZWEITE_SITZREIHE | 0xD763 | STAT_VERRIEGELUNG_ZWEITE_SITZREIHE_EIN | 0: Zweite Sitzreihe nicht verriegelt; 1: Zweite Sitzreihe verriegelt | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_FA | 0xD771 | - | Betriebszustand Sitzheizung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD771_D |
| SITZHEIZUNG_BFH_STUFE | 0xD7AA | - | Status / Steuern Stufe Sitzheizung Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7AA_D | RES_0xD7AA_D |
| SITZHEIZUNG_BFH_TEMP | 0xD7B0 | - | Status / Steuern Temperatur Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7B0_D | RES_0xD7B0_D |
| SITZHEIZUNG_FAH | 0xD7EA | - | Betriebszustand Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EA_D |
| SITZHEIZUNG_FAH_STUFE | 0xD7EB | - | Status / Steuern Stufe Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7EB_D | RES_0xD7EB_D |
| SITZHEIZUNG_BFH | 0xD7EC | - | Betriebszustand Sitzheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD7EC_D |
| SITZHEIZUNG_FAH_TEMP | 0xD7F1 | - | Status / Steuern Temperatur Sitzheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD7F1_D | RES_0xD7F1_D |
| ARMAUFLAGENHEIZUNG_BF | 0xD83A | - | Betriebszustand Armauflagenheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83A_D | RES_0xD83A_D |
| ARMAUFLAGENHEIZUNG_BFH | 0xD83B | - | Betriebszustand Armauflagenheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83B_D | RES_0xD83B_D |
| ARMAUFLAGENHEIZUNG_FA | 0xD83C | - | Betriebszustand Armauflagenheizung Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83C_D | RES_0xD83C_D |
| ARMAUFLAGENHEIZUNG_FAH | 0xD83D | - | Betriebszustand Armauflagenheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83D_D | RES_0xD83D_D |
| ARMAUFLAGENHEIZUNG_VORHANDEN | 0xD842 | - | Statusabfrage Armauflagenheizung vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD842_D |
| SITZHEIZUNG_HINTEN_TASTER_VORHANDEN | 0xD86C | STAT_VORHANDEN_SITZHEIZUNG_TASTER_HINTEN | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WASSERVENTIL_DUO_PWM_WERT | 0xD89E | - | Statusabfrage bzw. Ansteuerung der Wasserventil Fahrer- und Beifahrerseite. Wasserventile werden ab 17-07 nicht mehr verwendet. Die Rückgabewert ist daher REQUEST_OUT_OF_RANGE. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD89E_D | RES_0xD89E_D |
| VORHANDEN_FONDSCHICHTUNG | 0xD8AA | STAT_VORHANDEN_FONDSCHICHTUNGSPOTI | 0=Fondschichtungspotentiometer nicht vorhanden 1=Fondschichtungspotentiometer vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | Solarsensor: 0 = nicht vorhanden / codiert; 1 = vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor: 0 = nicht vorhanden; 1 = vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTEN | 0xD8B5 | - | Tasten Audiobedienfeld | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8B5_D | RES_0xD8B5_D |
| UMSCHALTVENTIL | 0xD8DA | - | Statusabfrage bzw. Ansteuerung des Umschaltventils. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8DA_D | RES_0xD8DA_D |
| IKF_STATISTIK | 0xD8DC | - | Anzahl der IKF-Aktivierungen der IKF-Funktionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DC_D |
| HK_WIPPE | 0xD8E0 | - | Heckklappen Wippe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8E0_D | RES_0xD8E0_D |
| FENSTERHEBER_VORHANDEN | 0xD8FE | STAT_ANZAHL_FH_KODIERT | Auslesen der Anzahl von kodierten Fensterheber. | 0-n | - | high | unsigned char | TAB_FH_ANZAHL_VORHANDEN | - | - | - | - | 22 | - | - |
| ZUSATZWASSERPUMPE | 0xD903 | - | Status / Steuern Zusatzwasserpumpe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD903_D | RES_0xD903_D |
| KLIMAKOMPRESSOR | 0xD906 | - | Status Klimakompressor (EIN / AUS und PWM) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD906_D |
| KLIMAKOMPRESSOR_ANSTEUERN | 0xD908 | - | Ansteuerung Klimakompressor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD908_D | - |
| VORHANDEN_KOMPRESSORKUPPLUNG | 0xD916 | - | Kompressorkupplung vorhanden | bit | - | - | BITFIELD | RES_0xD916_D | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | Gibt aus, ob ein Drucksensor für R134A verbaut ist: 0 = nicht vorhanden, 1 = vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | Wasserventil vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A_D |
| SOLARSENSOR | 0xD961 | - | Status Solarsensor Links und Rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD961_D |
| AUC_SENSOR | 0xD963 | STAT_AUC_SENSOR_NR | Gibt aus, welche Schadstoffstufe der AUC-Sensor ermittelt hat. | 0-n | - | - | unsigned char | TAB_AUC_STUFE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR | 0xD967 | STAT_R134A_DRUCK_WERT | Ausgabe Kältemitteldruck in bar : 0 - 125, 126 = Kurzschluss nach Masse, 127 = Kurzschluss nach Plus bzw. Leitungsunterbrechnung oder Signal ungültig | bar | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BESCHLAGSENSOR | 0xD96C | - | Relative Feuchte und Temperatur | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD96C_D |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 0: Beschlagsensor nicht vorhanden / codiert   1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FONDSCHICHTUNGS_POTI | 0xD96E | STAT_FONDSCHICHTUNGS_POTI_WERT | Ausgabe der Einstellung des Fond-Schichtungspotentiometer: 0-100 %, 0xFF: Wert ungültig | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HECKSCHEIBENHEIZUNG | 0xD970 | - | Statusabfrage bzw. Ansteuerung der Heckscheibenheizung. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD970_D | RES_0xD970_D |
| KOMPRESSORKUPPLUNG | 0xD971 | - | Statusabfrage bzw. Ansteuerung der Kompressorkupplung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD971_D | RES_0xD971_D |
| VARIANTE_AUDIOBEDIENTEIL | 0xD9A0 | STAT_VARIANTE_AUDIOBEDIENTEIL | Variante Audiobedienteil 0x00: ohne FBM, TP 0x01: mit FBM, TP 0x02: ohne FBM, FM/AM 0x03: mit FBM, FM/AM | 0-n | - | - | unsigned char | TAB_VARIANTE_AUDIOBEDIENTEIL | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_HEIZUNGSABSPERRVENTIL | 0xD9B7 | STAT_VORHANDEN_HEIZUNGSABSPERRVENTIL | 0 = nicht vorhanden, 1 = vorhanden | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_HOCHAUFLOESEND | 0xD9B8 | STAT_DRUCK_WERT | Wertebereich: 0.00 bar - 40.00 bar; Fehlercodes: 40,90 (0xFFA) = Kurzschluss nach Masse; 40,91 (0xFFB) = Leitungsunterbrechung oder Kurzschluss nach Batterie; 40,92 (0xFFC) = Nicht verbaut; 40,93 (0xFFD) = Funktionsschnittstelle nicht verfügbar; 40,94 (0xFFE) = Funktion melder Fehler; 40,95 (0xFFF) = Signal unbefüllt | bar | - | - | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| LENKRAD_SCHALTPADDLES | 0xDA24 | - | Status Schaltpaddles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA24_D |
| STEUERN_KLEMMEN_HISTORIE | 0xDA4C | - | STEUERN_KLEMMEN_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4C_D | - |
| STEUERN_ZV_HISTORIE | 0xDA4E | - | STEUERN_ZV_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4E_D | - |
| LAYERING_LIN_EIN | 0xDA5E | - | Alle Slaves im Layering LIN-System werden mit voller Helligkeit für die im Argument übergebene Zeit angesteuert | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA5E_D | - |
| STAT_LIN_LAYERING | 0xDA5F | - | Es wird der Status der LIN Slaves im Layering System abgefragt und ausgegeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA5F_D |
| STATUS_CODIERUNG_FAHRZEUGKLAPPEN | 0xDA61 | - | Der Job dient zum Auslesen der kodierten Fahrzeugklappen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA61_D |
| TUERKONTAKT_BF | 0xDA77 | - | Status / Simulation Hardwareeingang Türkontakt Beifahrer | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA77_D | RES_0xDA77_D |
| TUERKONTAKT_BFH | 0xDA78 | - | Status / Simulation Hardwareeingang Türkontakt Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA78_D | RES_0xDA78_D |
| TUERKONTAKT_FA | 0xDA79 | - | Status / Simulation Hardwareeingang Türkontakt Fahrer  Dieser Job wird im Rahmen der FUSI in speziellen Prüfschritten in Werk und HO verwendet. Der Job darf daher nie entfallen und muss im Rahmen der Absicherung als kritischer/hochpriorer Test betrachtet werden. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA79_D | RES_0xDA79_D |
| TUERKONTAKT_FAH | 0xDA7A | - | Status / Simulation Hardwareeingang Türkontakt Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA7A_D | RES_0xDA7A_D |
| TUERKONTAKT_BFH_OBEN | 0xDA7B | STAT_TUERKONTAKT_BFH_OBEN | STAT_TUERKONTAKT_BFH_OBEN | 0-n | - | high | unsigned char | TAB_CAS_HW_KONTAKT | - | - | - | - | 22 | - | - |
| HECKKLAPPE_TASTER_AUSSEN | 0xDA7D | - | Status / Simulation für Taster Heckklappe aussen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA7D_D | RES_0xDA7D_D |
| TUERKONTAKT_FAH_OBEN | 0xDA7E | STAT_TUERKONTAKT_FA_OBEN | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür hinten oben. Hinweis: Für Wert  8 = Kontakt nicht verbaut  muss der Codierwert CLI_REAR_DOOR_CONTACT_TOP_ASSEMBLED ausgewertet werden. | 0-n | - | high | unsigned char | TAB_CAS_HW_KONTAKT | - | - | - | - | 22 | - | - |
| HECKSCHEIBE_TASTER | 0xDA80 | - | Status / Simulation für Taster Heckscheibe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA80_D | RES_0xDA80_D |
| ZV_BEIFAHRER | 0xDA81 | - | Status Zentralverriegelung Beifahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA81_D |
| ZV_BEIFAHRER_HINTEN | 0xDA82 | - | Zentralverriegelung: Status Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA82_D |
| ZV_FAHRER | 0xDA83 | - | Status Zentralverriegelung Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA83_D |
| ZV_FAHRER_HINTEN | 0xDA84 | - | Zentralverriegelung: Status Fahrer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA84_D |
| ZV_HECKKLAPPE | 0xDA85 | - | Status Zentralverriegelung Heckklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA85_D |
| ZV_HECKSCHEIBE | 0xDA86 | - | Status Zentralverriegelung Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA86_D |
| ZV_GESAMT | 0xDA87 | - | Status aller ZV-Antriebe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA87_D |
| FRONTKLAPPE_TASTER | 0xDA89 | - | Taster für Frontklappe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA89_D | RES_0xDA89_D |
| HECKKLAPPE_KONTAKT | 0xDA92 | - | Status / Simulation Heckklappenkontakt 0: Heckklappe geschlossen 1: Heckklappe offen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA92_D | RES_0xDA92_D |
| HECKSCHEIBE_KONTAKT | 0xDA93 | - | Status / Simualtion Heckscheibenkontakt 0: Heckscheine offen 1: Heckscheibe geschlossen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA93_D | RES_0xDA93_D |
| SCA_VORRAST_KONTAKT | 0xDA94 | - | Status / Simulation  HW-Eingang Vorrastkontakt (VRK) der Soft-Close-Automatik (SCA) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDA94_D | RES_0xDA94_D |
| SPANNUNG_KLEMMEN | 0xDAB3 | - | Auslesen analoger Spannungs- und Strom-Werte an den ZSG Ausgängen und Eingängen. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMMEN. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB3_D |
| KEY_VALID_NR_AKTUELL | 0xDAB4 | STAT_KEY_VALID_NR_AKTUELL | Index des Authentisierungs-Devices, mit dem die Wegfahrsperre freigegeben worden ist. | 0-n | - | - | unsigned char | TAB_IM_ADEV_VALID | - | - | - | - | 22 | - | - |
| CA_TAGE_ER_LEITUNG | 0xDAB5 | - | Auslesen der jeweiligen Statuswerte der analogen Entriegeln-Leitungen von den Tür-Aussengriff-Elektroniken (TAGE) in den Türen FT, BFT, FTH, BFTH. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CA_TAGE_ER_LEITUNG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB5_D |
| START_STOP_TASTER | 0xDAB6 | STAT_TASTER_SST_AKTIV | Das Result enthält den aktuellen logischen Zustand des Start-Stopp-Tasters. | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_FAHRPROFIL | 0xDAB8 | - | STEUERN_FAHRPROFIL | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAB8_D | - |
| CAS_MONTAGEMODUS | 0xDAB9 | - | Statusabfrage und Setzen des Montagemodus für ELV-Sperre, KL50-Sperre/Fahrbereitschafts-Sperre und Präsentations-Modus. Die ELV-Sperre (ELV-Montagemodus) ist ab SP2015 im BDC nicht mehr relevant, da die ELV eigensicher über das ELV-Steuergerät realisert ist. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDAB9_D | RES_0xDAB9_D |
| STATUS_KLEMMEN_VERHINDERER | 0xDABA | - | Auslesen der internen Verhinderungsgründe der Klemmensteuerungs-Statemachine für Klemmenwechsel:  Einschalten der KL15, Ausschalten der KL15, Anforderung Hersellung Fahrbereitschaft (RQ_FN_DRV) Hinweise: - Es wird jeweils nur ein Hinderungsgrund ausgegeben, auch wenn mehrere Hinderungsgründe vorliegen. - Abhängig vom betrachteten Klemmen-Wechsel sind jeweils nicht alle Werte aus der Tabelle TAB_ZSG_KLEMMEN_VERHINDERER möglich. Die Priorisierung bei mehreren Verhinderern ist in [] jeweils angegebn. (Prio-1 = höchste Priorität.). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABA_D |
| BUS_IN_DATUM_ZEIT | 0xDABB | - | Der Job dient zum Auslesen des aktuellen vom Kombi empfangenen Zeitstempels (Datum und Zeit). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DATUM_ZEIT - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal in den entsprechenden Results zurückgegeben. - Die Daten stammen aus CAN-Nachricht UHRZEIT_DATUM und RELATIVZEIT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABB_D |
| BUS_IN_DME1 | 0xDABC | - | Der Job dient zum Auslesen der über CAN empfangenen Werte von der Motorsteuerung (DME). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DME1. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. Die Daten stammen aus den CAN-Nachrichten Daten Antriebsstrang 2 (DT_PT_2) und Drehmoment Kurbelwelle 1 (TORQ_CRSH_1) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABC_D |
| BUS_IN_DSC | 0xDABD | - | Der Job dient zum Auslesen der über CAN empfangenen Werte von der Digitalen Stabilitätskontrolle (DSC). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DSC. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. Die Daten stammen aus CAN-Nachrichten Status Stabilisierung DSC (ST_STAB_DSC) und Geschwindigkeit Fahrzeug (V_VEH) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABD_D |
| BUS_IN_FH | 0xDABF | - | Der Job dient zum Auslesen der über CAN empfangenen Werte für den Status der einzelnen Fensterheber (je Tür FT,BFT,FTH,BFTH). Hinweise:  Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_FH. - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. - Die Daten stammen aus CAN-Nachricht POSITION_FH_BFT, POSITION_FH_BFTH, POSITION_FH_FAT und POSITION_FH_FATH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABF_D |
| CA_TAGE_SPERRSTATUS | 0xDAC4 | - | Der Job dient zum Auslesen des (Sperr-)Status der TAGE, der angibt, ob die TAGE gesperrt (z.B. aufgrund Dauerbetätigung oder sporadischer unmotivierter Aktivierung) oder freigegeben sind. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDAC4_D | RES_0xDAC4_D |
| CA_TAGE_STATUS | 0xDACA | - | Auslesen des jeweiligen Sensorstatus der Tür-Aussengriff-Elektroniken (TAGE) in den Türen FT, BFT, FTH, BFTH. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CA_TAGE_STATUS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDACA_D |
| SPANNUNG_KLEMME_30L1 | 0xDAD6 | STAT_SPANNUNG_KLEMME_30L1_WERT | Spannungswert am Steuergerät an Klemme 30L (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30L2 | 0xDAD7 | STAT_SPANNUNG_KLEMME_30L2_WERT | Spannungswert am Steuergerät an Klemme 30L (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ABBRUCH_LIN_VARIANTENUEBERPRUEFUNG | 0xDAF7 | - | Abbruch von LIN Variantenüberprüfung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAF7_D | - |
| KURZSCHLUSSCOUNTER_KOMFORT_RESET | 0xDB13 | - | Kurzschlusscounter zurücksetzen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDB13_D | - |
| KURZSCHLUSSCOUNTER_KOMFORT | 0xDB14 | - | DID zum Lesen des aktuellen Comfort Kurzschlusscounters. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB14_D |
| KURZSCHLUSSCOUNTER_MAX | 0xDB15 | - | DID zum lesen des absoluten Kurzschlusscounters. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB15_D |
| HECKKLAPPENSENSOR | 0xDB16 | STAT_HECKKLAPPENSENSOR | Aktueller Zustand des Heckklappensensors | 0-n | - | high | unsigned char | TAB_CAS_HECKKLAPPENSENSOR | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Das Result enthält die Nachlaufzeit der Klemme 15N in Sekunden.  Hinweis: Wert 0xFFFF = Dauer Ein, 0xFFFE = Nachlauf Fahrt/Motorlauf, 0x00 = Kein Nachlauf aktiv (KL15N aus). | s | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_30B | 0xDB2E | STAT_NACHLAUFZEIT_KLEMME_30B_WERT | Das Result enthält die Nachlaufzeit der Klemme 30B in Sekunden.  Hinweis: Wert 0xFFFF = Dauer Ein, 0xFFFE = Dauer Ein mit unspezifischer Nachlaufzeit, 0x00 = Kein Nachlauf aktiv (KL30B aus). | s | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| JBR_VORHANDEN | 0xDB40 | STAT_VORHANDEN_JBR | LIN Stromverteilermodul 0: nicht vorhanden 1: vorhanden | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| JBR_STATUS_RELAY | 0xDB41 | - | Dieser Job liefert der aktuellen Zustand der bistabilen Relais: - Relaiszustände: ST_RLY_XXXX_LIN = 0x0 -> STAT_JBR_XXXX_RELAY = 0: Relais abgeschaltet ST_RLY_XXXX_LIN = 0x1 -> STAT_JBR_XXXX_RELAY = 1: Relais abgeschaltet ST_RLY_XXXX_LIN = 0x2 -> STAT_JBR_XXXX_RELAY = 2: Relais abgeschaltet ST_RLY_XXXX_LIN = 0x3 -> STAT_JBR_XXXX_RELAY = 3: ungültig | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB41_D |
| HO_INFO | 0xDC54 | - | Auslesen und Setzen der folgenden im CAS gespeicherten Daten für die Handelsorganisation: - Händlernummer - Erstzulassungsdatum Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN mit Argument HO_INFO. - Die Händlernummer wird vom Werk mit '00000' und das Erstzulasungsdatum mit dem Datum der Schlüssel-Initialisierung belegt. Diese Informationen sind Teil der CBS-Daten und werden auch in den Schlüssel übertragen. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC54_D | RES_0xDC54_D |
| STATUS_KLEMMEN | 0xDC56 | STAT_KLEMMENSTATUS | Das Result enthält den Status der Klemmen im ZSG-Steuergerät. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KLEMMENSTATUS. | 0-n | - | high | unsigned char | TAB_CAS_KLEMMENSTATUS | - | - | - | - | 22 | - | - |
| STATUS_KL15_ABSCHALTUNG | 0xDC57 | - | Dieser Job dient zum Auslesen des Status der Funktion automatische KL15-Abschaltung (Tür auf/zu, ZV sichern, OSFG). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC57_D |
| ANSTEUERUNG_KL30F_HINTEN | 0xDC5A | - | Dieser Job dient zum Auslesen des Zustands der ZSG-Ausgänge zum Ansteuern der KL30F Hinten. Hinweise: 1. Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument ANSTEUERUNG_KL30F_HINTEN 2. Der Job gibt nur sinnvolle Werte zurück, falls kein LIN-Stromverteiler verbaut ist (BDC-Codierung TCI_LIN_SV_ACTIVE = 0x00 = Inaktiv). Ist der LIN-Stromverteiler verbaut, so enthalten beide Results immer den Wert 0xFF. 3. HW-Ausgang zum Einschalten KL30F: 30F_EIN  im Connector  3 -Pin 4  - (PwrTerm30fRelayRearOn) 4. HW-Ausgang zum Ausschalten KL30F: 30F_AUS  im Connector  3 -Pin 5  - (PwrTerm30fRelayRearOff)  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC5A_D |
| START_STOP_TASTER_SENSOREN | 0xDC60 | - | Dieser Job dient zum Auslesen und Setzen der Zustände der beiden Sensoren des Start-Stopp-Tasters.  Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument START_STOP_TASTER_SENSOREN - Signalnamen der digitalen CAS Eingänge sind SSTA und SSTB - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument START_STOP_TASTER_SENSOREN und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuellen Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC60_D | RES_0xDC60_D |
| BREMSLICHT_SCHALTER | 0xDC61 | STAT_SCHALTER_BREMSLICHT_AKTIV | Das Result enthält den aktuellen Zustand des Bremslichtschalters | 0-n | - | - | unsigned char | TAB_CAS_HALL_SENSOR | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KUPPL_PN_SCHALTER | 0xDC63 | STAT_SCHALTER_KUPPL_PN_AKTIV | Das Result enthält den aktuellen Zustand des Kupplungsschalters (Manuelles Getriebe) oder PN-Signal (Automatikgetriebe) vom EGS. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. | 0-n | - | - | unsigned char | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CENTERLOCK_TASTER | 0xDC64 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Centerlock-Taster. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_CENTERLOCK - Signalname des digitalen CAS Eingang ist CLT - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_CENTERLOCK und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC64_D | RES_0xDC64_D |
| MOTORHAUBE_SCHALTER | 0xDC65 | STAT_SCHALTER_MOTORHAUBE_AKTIV | Das Result enthält den aktuellen Zustand des Eingangs Motorhaubenkontakt. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. | 0-n | - | - | unsigned char | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| MSA_TASTER | 0xDC67 | - | Dieser Job dient zum Auslesen des Zustands des ZSG-Eingangs für den Taster der Motor-Start-Automatik (MSA) oder Electric Vehicle (EV). | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC67_D | RES_0xDC67_D |
| TASTER_SICHERN_HECKKL | 0xDC68 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Taster zum Zentralsichern der Heckklappe. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_SICHERN_HECKKL - Signalname des digitalen CAS Eingang ist TZSHK. - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_SICHERN_HECKKL und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC68_D | RES_0xDC68_D |
| HECKKLAPPE_TASTER_OEFFNEN_INNEN | 0xDC69 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_HECKKL_INNEN - Signalname des digitalen CAS Eingang ist TOEHKI - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_HECKKL_INNEN und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU)  RTD: Reset auf Defaultwert (resetToDefault)  FCS: Aktuelle Zustand einfrieren (freezeCurrentState)  STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC69_D | RES_0xDC69_D |
| SARAH | 0xDC83 | - | Detaillierter SARAH Zustand | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC83_D | RES_0xDC83_D |
| SARAH_TASTER | 0xDC84 | - | Status / Simulation Taster SARAH  1: Taster gedrückt | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC84_D | RES_0xDC84_D |
| SARAH_TASTER_LED | 0xDC85 | - | Status / Simulation LED SARAH  1: LED ein | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC85_D | RES_0xDC85_D |
| HEIZUNGSABSPERRVENTIL | 0xE442 | - | Absperrventil für Kühlmittelskreis | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE442_D | RES_0xE442_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| COUNT_NSC_MIRRORHEATING_ACTIVATIONS | 0x2303 | STAT_ANZAHL_AKTIVIERUNGEN_ASP_NSC_WERT | Anzahl der Aktivierungen der ASP-Heizung aufgrund NSC | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RESET_COUNT_NSC_MIRRORHEATING_ACTIVATIONS | 0x2304 | - | RESET Counter Spiegelheizung Aktivierungen wegen NSC | - | - | - | - | - | - | - | - | - | 2E | ARG_0x2304_D | - |
| _RESET_BETRIEBSDAUER | 0x4506 | - | _RESET_BETRIEBSDAUER | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4506_D | - |
| _LICHT_UEBERSPANNUNGSCOUNTER | 0x4508 | STAT_LICHT_UESPANNUNG_COUNTER_WERT | Anzahl Licht Überspannungscounter Aktivierungen insgesamt | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LICHT_12H_TIMER | 0x4509 | - | Lesen - und Schreiben des Licht 12h-Timers | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4509_D | RES_0x4509_D |
| _HOMOLOGATION_DYN_LICHT | 0x450A | - | Mit diesem Diagnosejob kann das Kurvenlicht und die Adaptive Lichtverteilung (AFS) im Stand realitätsgetreu angesteuert werden. Notwendig für Homologation dyn. Lichtfunktionen in China. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x450A_D | - |
| _LICHT_DISCO_PWM | 0x4530 | - | Dieser Job dient dazu per Diagnose all diskreten Lampenausgänge anzuschalten und dabei die PWM laufend zu ändern. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4530_D | - |
| _LEUCHTEN_DIAGNOSE_VALUES | 0x4532 | - | Dieser Job dient dazu per Diagnose detailierte Leuchten Diagnose Werte eines diskreten Leuchtenausganges zu bekommen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4532_D | RES_0x4532_D |
| _INNENBELEUCHTUNG_PWM | 0x4800 | - | _INNENBELEUCHTUNG_PWM | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4800_D | RES_0x4800_D |
| _SARAH_STATISTIK | 0x4910 | - | Informationen zum SARAH Benutzerverhalten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4910_D |
| IBS_WAKEUP_GRUND | 0x4F0E | STAT_IBS_WAKEUP | Das Result enthält den im FEM gespeicherten letzten Wakeupgrund vom IBS. | 0-n | - | high | unsigned char | TAB_IBS_WAKEUP_GRUND | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _STEUERN_FBD_EMPFAENGER | 0x5007 | - | Der Job dient zum Steuern des FBD-Empfängers. Folgende Werte können hierbei gesetzt werden: - HF-Kanal - Datenrate - Sendeleistung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5007_D | - |
| _ECUMA_INTERN | 0x5101 | - | Diagnosejob Status-EcuMA-intern | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5101_D |
| _ECUMA_DISABLE_WAKESRC | 0x5108 | - | Disablen von Weckquellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5108_D | - |
| _ECUMA_SLEEP_MODE_NRC | 0x5109 | STAT_SLEEP_MODE_NRC | beinhaltet den Response auf Sleep Mode | 0-n | - | high | unsigned char | TAB_SLEEP_MODE_NRC | - | - | - | - | 22 | - | - |
| _JTAG_RANDOM | 0x510D | STAT_JTAG_PASSWORD_RANDOM_DATA | Liest das 16 Bytelange JTAG Passwort aus. | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _BSW_VERSION | 0x5111 | STAT_BSW_VERSION_TEXT | String of the Basic Software version | TEXT | - | high | string | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _MAC_LESEN | 0x5120 | - | Mit diesem Diagnosebefehl wird die MAC Adresse geschrieben oder ausgelesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5120_D |
| _FUSI_SAFEMECH_INTERVENTION | 0x5121 | - | Der Entwicklerjob dient dazu, ein vergangenes Eingreifen des FuSi Safe-Mechanismus anzuzeigen. Zweck: Support zum Test/Validierung der Safety Mechanismen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5121_D | - |
| _PLL_PARAMETER_SET | 0x5200 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5200_D | RES_0x5200_D |
| _PLL_PARAMETER_INDEX | 0x5201 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5201_D | RES_0x5201_D |
| _PLL_ANTENNA | 0x5202 | STAT_PLL_ANTENNA_DATA | The LF antenna status is composed of 16 bit fields, one for each of up to 8 LF antennas. The ninth 16-bit field gives a global antenna status, including problems that cannot be attributed to a particular antenna. The global antenna status can also be configured as cumulation of the antenna status 0 to 7. | DATA | - | high | data[18] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_LF_CURRENT | 0x5203 | STAT_PLL_LF_CURRENT_DATA | This result shows the antenna currents measured of the HFMs during the last PASE action (eg. passive entry, lock or start). These values are (completely) overwritten on every new PASE action. The unit is 1 mA. | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_FIELD_STRENGTH | 0x5204 | STAT_PLL_FIELD_STRENGTH_DATA | To calculate nT PkPk out of these values use the formula: (1000 * nT PkPk)^2 = 2^B0 * (1 + B1 / 256) Where B0 is byte 0 and B1 is byte 1. If the field value correction is enabled then the measured values of the key are multiplied with the square of the relation from the measured to the demanded LF current of each antenna. This result is shown here. | DATA | - | high | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_COMPONENT | 0x5205 | STAT_PLL_COMPONENT_DATA | This result shows the overall status of the PASE-LL component, in order to capture and check the reliability of the PASE LF-HF communication. | DATA | - | high | data[21] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_KEY | 0x5206 | STAT_PLL_KEY_DATA | This result shows the status of key authentication and position detection from the last PASE function carried out. | DATA | - | high | data[9] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_EVALUATION | 0x5207 | STAT_PLL_EVALUATION_DATA | this result shows the information about the current PASE LL evaluation | DATA | - | high | data[15] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_RELEASE_VERSION | 0x5208 | STAT_PLL_RELEASE_VERSION_DATA | This result shows the release version of the PASE LL package | DATA | - | high | data[2] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PLL_CONFIG | 0x5209 | - | This service Reads/Writes PASE LL Configuration. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5209_D | RES_0x5209_D |
| _PLL_ANTENNA_ERROR_CONFIGURATION | 0x5210 | - | This configuration is used to determine/read the PASE-LL behaviour when antenna defects are recognized. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5210_D | RES_0x5210_D |
| _READ_REQUEST_DATA_INDEX | 0x5211 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5211_D | RES_0x5211_D |
| _CC_READ_CURRENT_MEASUREMENT_CURRENT_CONTROL | 0x5212 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5212_D | RES_0x5212_D |
| _CC_READ_CURRENT_MEASUREMENT_CALIBRATION_STEP_2 | 0x5213 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5213_D | RES_0x5213_D |
| _CC_READ_CURRENT_MEASUREMENT_CALIBRATION_STEP_1 | 0x5214 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5214_D | RES_0x5214_D |
| _READ_VERSION | 0x5215 | STAT_RESULT_DATA | Reads the release version of PASE LL and ICM. | DATA | - | high | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _READ_ANNTENNA_CONFIGURATION_LIMITS | 0x5216 | STAT_RESULT_DATA | Reads the number of function codes, antenna areas, LF slots and the number of antennas configured to the ECU. | DATA | - | high | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _READ_MANCHESTER_CODING | 0x5217 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5217_D | RES_0x5217_D |
| _READ_LF_ANTENNA_AREA | 0x5218 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. Local | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5218_D | RES_0x5218_D |
| _READ_LF_ANTENNA_FUNCTION_CODE | 0x5219 | - | The LF antenna parameters contain information relevant to the LF transmission, to inside/outside detection for a given function, etc. Local | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5219_D | RES_0x5219_D |
| _PLL_READ_CHIP_CONFIGURATION | 0x5220 | - | Status of key authentication and position detection from the last PASE function carried out. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5220_D | RES_0x5220_D |
| _PLL_READ_ANTENNA_DIAG_RESULT | 0x5221 | STAT_RESULT_DATA | This result reads the status of key authentication and position detection from the last PASE function carried out. | DATA | - | high | data[19] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LHZ_TASTENSIMULATION | 0x5222 | - | Simulation LHZ-Tastendruck (sendet Taste gedrückt für 500ms) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5222_D | - |
| _STATUS_CASS_LF_HW_CONFIG | 0x522A | - | Der Job dient zum Auslesen der CA HW Konfiguration. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x522A_D |
| _STATUS_CASS_LF_ADJUSTMENT_FACTORS | 0x522B | - | Der Job dient zum Auslesen der Faktoren zur Anpassung des LF-Antennenstroms | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x522B_D |
| _STATUS_CASS_LF_IPSENSE_VOLTAGE | 0x522C | - | Auslesen der Spannungen gemessen am ATIC IPSense Pin während HFM. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x522C_D |
| _STATUS_CASS_LF_ANTENNA_GAIN | 0x522D | - | Auslesen der Werte für die Antennenverstärkung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x522D_D |
| _STATUS_CASS_LF_VOLTAGE_CONDITIONS | 0x522E | - | Auslesen der Spannungsbedingungen vor und nach dem Senden  des letzten LF-Telegramms. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x522E_D |
| _FH_FA_THERMOMONITOR_AKTIV | 0x6004 | - | Thermomonitor Fensterheber | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6004_D | RES_0x6004_D |
| _FH_BF_THERMOMONITOR_AKTIV | 0x6005 | - | Thermomonitor Fensterheber | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6005_D | RES_0x6005_D |
| _FH_FAH_THERMOMONITOR_AKTIV | 0x6006 | - | Thermomonitor Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6006_D | RES_0x6006_D |
| _FH_BFH_THERMOMONITOR_AKTIV | 0x6007 | - | Thermomonitor Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6007_D | RES_0x6007_D |
| _FH_FREIGABE_AKTIV | 0x6030 | - | Konfiguriert den Freigabestatus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6030_D | RES_0x6030_D |
| _FRONTWISCHER_STROMWERTE | 0x6AB1 | - | Ausgabe der relevanten Stromwerte des diskreten Frontwischers. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6AB1_D |
| _ECU_HW_RESET | 0xF005 | - | STEUERN__ECU_HW_RESET | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _INIT_EXT_EEPROM | 0xF00A | - | Dieser Entwicklerjob dient dazu per Diagnose das externe EEprom auf dem BDC neu zu initialisieren. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _SENSE_LESEN | 0xF100 | - | _SENSE_LESEN | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF100_R | RES_0xF100_R |
| _ISENSE_CALIBRATION_TRIGGER | 0xF101 | - | Triggers an I-Sense calibration telegram to perform the calibration the ATIC164. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF101_R | - |
| _FH_VERFAHREN_SONDERFUNKTION | 0xF204 | - | Verfahren der Fenster auf eine bestimmte Sonderfunktion | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF204_R | RES_0xF204_R |
| _PLL_TRIGGER | 0xF300 | - | A PASE function may be triggered/stopped/read with this routine. For development purposes only. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF300_R | RES_0xF300_R |
| _PLL_KEY_DIAGNOSTIC | 0xF301 | - | To start/stop/read a key diagnostic telegram. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF301_R | RES_0xF301_R |
| _PLL_RESET_STATUS | 0xF302 | - | To reset the PLL internal status. No payload data needed. The PASE LL will be initialized and the data in PlldReadComponentStatus will be reset. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _GET_STACK_INFO | 0xF307 | - | _GET_STACK_INFO | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF307_R | RES_0xF307_R |
| _GET_SCHEDULER_INFO | 0xF308 | - | Get scheduler Info | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF308_R | RES_0xF308_R |
| _RTE_BUFFER_TRACING | 0xF30A | - | Sub-service RTE_BUFFER_TRACING | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30A_R | - |
| _STARTUP_TIME | 0xF30B | - | Über diesen Job können die Aufstartzeiten des Body ausgelesen werden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30B_R | RES_0xF30B_R |
| _BDC_LOGGER | 0xF30C | - | Using this job the BDC Logger SWC can be controlled. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30C_R | RES_0xF30C_R |
| _GET_ERROR_INFO | 0xF30D | - | Mit diesem Job können Detailinformationen für Abstürze und andere Fehler die im BDC auftreten abgefragt werden. Dieser Job unterstützt die Entwickler bei der Fehlersuche. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30D_R | - |
| _STEUERN_RESET_ERROR_INFO | 0xF30E | - | Mit diesem Job werden die Detailinformationen für Abstürze und andere Fehler im BDC gelöscht. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _RTE_BUFFER_TRACING_EXT | 0xF30F | - | Start dem RTE-Pufferwerte Steuerung. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30F_R | - |
| _STEUERN_LIN_TRACING | 0xF400 | - | Lin Tracing | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF400_R | - |

### STATE_RTE_BUFFER

| WERT | TEXT |
| --- | --- |
| 00 | Disable RTE buffer tracing |
| 01 | Enable RTE buffer tracing |
| 02 | Persistently enable RTE buffer tracing |

### TAB_ABBRUCH_LIN_VARIANTENUEBERPRUEFUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | START_ABBRUCH_LIN_VAR |

### TAB_AKTION_ROLLO_HECK

| WERT | TEXT |
| --- | --- |
| 0x00 | KEINE_AKTION |
| 0x01 | ANSTEUERUNG_HECKROLLO_EINSCHALTEN |
| 0x02 | HECKROLLO_AUSFAHREN |
| 0x03 | HECKROLLO_EINFAHREN |

### TAB_ANFORDERER_PWF_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x01 | Remote Controlled Parking |
| 0x02 | Deaktivierung Wohnen HMI |
| 0x03 | Energiediagnose |
| 0x04 | Telex |
| 0x05 | Remote Software Update |
| 0xFF | Wert ungültig |

### TAB_ANFORDERUNG_NACHLAUFZEIT

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine Anforderung zur Nachlaufzeitverlängerung erfolgt |
| 0x1 | Anforderung zur Nachlaufzeitverlängerung ist erfolgt |

### TAB_ANTENNA_LOCATION

| WERT | TEXT |
| --- | --- |
| 0x01 | Innenraum vorne |
| 0x02 | Innenraum hinten |
| 0x03 | Aussenraum links |
| 0x04 | Aussenraum rechts |
| 0x05 | Kofferraum mittig |
| 0x06 | Stossfänger hinten |
| 0x07 | Kofferraum links |
| 0x08 | Kofferraum rechts |
| 0x09 | Hutablage |
| 0xFF | nicht verbaut |

### TAB_ARMAUFLAGEHEIZUNG_VORH

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden (2 getrennte Heizflächen in der Mittelarmlehne hinten) |
| 0x02 | vorhanden (1 gemeinsame Heizfläche in der Mittelarmlehne hinten) |
| 0x03 | vorhanden (2 gemeinsame Heizflächen in der Mittelarmlehne hinten) |
| 0xFF | ungültig |

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

### TAB_AUFGETRETEN_NICHT_AUFGETRETEN

| WERT | TEXT |
| --- | --- |
| 0x0 |  nicht aufgetreten |
| 0x1 | aufgetreten |

### TAB_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK, kein Wechsel nach Pruefen_Analyse_Diagnose möglich (ELV verriegelt) |
| 0x02 | NOK, Verlassen von Pruefen_Analyse_Diagnose nicht möglich |
| 0x03 | NOK, kein Wechsel nach Parken_BN_niO möglich |
| 0x04 | Pruefen_Analyse_Diagnose ist nicht aktiv |
| 0xFF | Ungültiger Wert |

### TAB_AUSGANG_LEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
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
| 0x36 | LC_R0 |
| 0x37 | LC_R1 |
| 0x38 | LC_R2 |
| 0x39 | LC_R3 |
| 0x40 | PDC_LED |
| 0x41 | HDC_LED |
| 0x42 | SPECIAL_FUNCTION_1_LED |
| 0x43 | MSA_LED |
| 0x44 | SST_LED |
| 0xFE | ALLE |
| 0xFF | UNKNOWN |

### TAB_AUSSENSPIEGEL_ABBLENDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Abblendenfunktion |
| 0x01 | Abblendfunktion beide Außenspiegel vorhanden |
| 0x02 | Abblendfunktion nur Außenspiegel Fahrerseite  vorhanden |
| 0xFF | Wert ungültig |

### TAB_AUTHTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTHTYPE_PING |
| 0x01 | AUTHTYPE_KEYPOS_NO_AUTH |
| 0x02 | AUTHTYPE_CL_AUTH |
| 0x03 | AUTHTYPE_EWS_AUTH |
| 0x0F | AUTHTYPE_INVALID |
| 0x10 | ICM_drv_debug_info |

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
| 0x0D | I12 LL |
| 0x0E | I12 RL |
| 0x0F | F26 |
| 0x10 | G11, G12 |
| 0x11 | G30, G31 |
| 0xFF | ungültig |

### TAB_CARGO_ANTIRUTSCHMATTE_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ANTIRUTSCHMATTE_EINFAHREN |
| 0x01 | ANTIRUTSCHMATTE_AUSFAHREN |
| 0x02 | KUNDENFUNKTION_AUTOMATIK |

### TAB_CARGO_LEITUNGSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss |
| 0x01 | Unterbrechung |
| 0xFF | Wert ungültig |

### TAB_CARGO_SG_ANTIRUTSCHMATTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Antirutschmatte eingefahren |
| 0x01 | Antirutschmatte ausgefahren |
| 0xFF | ungültiger Wert |

### TAB_CARSHARING_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CarSharing-Modus nicht gesetzt |
| 0x01 | CarSharing-Modus gesetzt |
| 0xFD | Funktionsschnittstelle ist nicht verfügbar |
| 0xFE | Funktionsfehler |
| 0xFF | Signal ungültig |

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

### TAB_CAS_CA_KOMM_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Kommunikation nicht möglich |
| 1 | Kommunikation okay, inkl. Authentisierung |
| 2 | Antenne nicht vorhanden (Codierdaten) |
| 3 | Antenne nicht in Ordnung oder nicht gesteckt |
| 255 | ungültig/unbekannt |

### TAB_CAS_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv / nicht betätigt |
| 1 | aktiv / betätigt |
| 2 | nicht verbaut / Status nicht verfügbar |
| 3 | ungültig |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_DIGITAL_EINGANG_PEGEL

| WERT | TEXT |
| --- | --- |
| 0 | Low-Pegel |
| 1 | High-Pegel |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_FBD_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | keine Taste gedrückt |
| 1 | Taste 1 - Entriegeln |
| 2 | Taste 2 - Verriegeln |
| 3 | Taste 3 - Kofferraum |
| 4 | Taste 4 |
| 5 | Taste 1 - Entriegeln Langdruck |
| 6 | Taste 2 - Verriegeln Langdruck |
| 7 | Taste 3 - Kofferraum Langdruck |
| 8 | Taste 4 - Langdruck |
| 20 | CA-Entriegeln |
| 21 | CA-Verriegeln |
| 22 | CA-Kofferraum |
| 23 | CG-Authentisierung |
| 50 | RCP - Aktivieren |
| 51 | RCP - Deaktivieren |
| 52 | RCP - Vorwärts |
| 53 | RCP - Rückwärts |
| 54 | RCP - Aktiv - keine Aktion |
| 55 | RCP - Sicherheitstaste losgelassen |
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
| 2 | Stand Alone Empfänger 2 |
| 3 | Stand Alone Empfänger 3 |
| 4 | Stand Alone Empfänger 4 |
| 255 | unbekannt / nicht ermittelbar |

### TAB_CAS_FH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Zwischenstellung |
| 2 | Offen |
| 255 | ungültig/unbekannt |

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
| 5 | Fahrzeug steht, Zwei-Achs-Rollenbetrieb gesetzt |
| 6 | Fahrzeug steht, Vorderachse auf Rollenprüfstand erkannt |
| 255 | Signal ungültig/unbekannt |

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
| 255 | ungültig |

### TAB_CAS_KLEMMEN_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0 | Start-Stop-Taster (SST) |
| 1 | Anforderung Fahren über Dienst (RCP, RS) |
| 2 | DME-KL50-Anforderung (RQ_MSA_ENG_STA_1/_2) |
| 3 | Obere Startfähigkeitsgrenze (OSFG) erreicht |
| 4 | ZV sichern |
| 5 | Fahrertuer/Fahrergurt auf (KL15-Abschaltung) |
| 6 | Timeout (KL30B-Abschaltung) |
| 7 | Anforderung ueber Diagnosejob (STEUERN_KLEMMEN, STEUERN_KL30F, STEUERN_ZUSTAND_FAHRZEUG) |
| 8 | KL50-Hardwarefehler erkannt (Relaiskleber, Stromueberlast, KS) |
| 9 | Deaktivierung Waschstrasse nach 15/30min Timeout (nicht relevant für BDC2015) |
| 10 | Anforderung PAD über Dienst (ATM) |
| 255 | Ungueltig/Unbekannt |

### TAB_CAS_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb - Alle Montagemodi deaktiviert |
| 1 | KL50-Sperre/Fahrbereitschafts-Sperre  aktiv |
| 2 | ELV_KL50-Montagemodus - Entfällt ab SP2015 |
| 3 | Präsentations-Modus |
| 0xFF | Wert ungültig |

### TAB_CAS_MONTAGEMODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0 | NORMAL |
| 1 | NO_START |
| 3 | PRESENTATION |

### TAB_CAS_MOTOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Motor aus |
| 1 | Motor startet |
| 2 | Motor läuft |
| 3 | Initialisierung / Ungültig / Unbekannt |
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

### TAB_CA_ANTENNEN_ARG

| WERT | TEXT | BESCHREIBUNG |
| --- | --- | --- |
| 1 | IRV | Antenne Innenraum vorn |
| 2 | IRH | Antenne Innenraum hinten |
| 3 | TL | Antenne Tür links |
| 4 | TR | Antenne Tür rechts |
| 5 | KRL | Antenne Kofferraum links |
| 6 | KRR | Antenne Kofferaum rechts |
| 7 | SF | Antenne Stoßfänger |
| 8 | HAL | Antenne Hutablage |
| 9 | IR | Antenne Innenraum IRV+IRH |

### TAB_CA_ANTENNEN_RES

| WERT | TEXT |
| --- | --- |
| 1 | IRV (Antenne Innenraum vorn) |
| 2 | IRH (Antenne Innenraum hinten) |
| 3 | TL (Antenne Tür links) |
| 4 | TR (Antenne Tür rechts) |
| 5 | KRL (Antenne Kofferraum links) |
| 6 | KRR (Antenne Kofferaum rechts) |
| 7 | SF (Antenne Stoßfänger) |
| 8 | HAL (Antenne Hutablage) |
| 255 | ungültig |

### TAB_CA_ANTENNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 1 | Antenne in Ordnung |
| 2 | Kurzschluss Masse |
| 3 | Kurzschluss Batteriespannung |
| 4 | Leitungsunterbrechung |
| 5 | Interner Antennendefekt |
| 6 | Antenne nicht verbaut (Codierung) |

### TAB_CA_CAR_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x01 | CG-only |
| 0x02 | CA - one trunk antenna -  short side antennas |
| 0x22 | CA - one trunk antenna -  long side antennas |
| 0x04 | CA+RCP - one trunk antenna - short side antennas |
| 0x24 | CA+RCP - one trunk antenna -  long side antennas |
| 0x06 | CA-  two trunk antennas - short side antennas |
| 0x26 | CA - two trunk antennas -  long side antennas |
| 0x07 | CA+RCP - two trunk antennas - short side antennas |
| 0x27 | CA+RCP - two trunk antennas -  long side antennas |
| 255 | Ungültig/Unbekannt |

### TAB_CA_HW_VARIANT

| WERT | TEXT |
| --- | --- |
| 0 | CG2 |
| 1 | CA5 |
| 2 | CA56 |
| 3 | CA57 |
| 4 | CA567 |
| 7 | undefined |
| 255 | invalid |

### TAB_CA_HW_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | CA Variante 2 Antennen, HW unterstützt nur Antenne 1 und 2 |
| 0x01 | CA Variante 5 Antennen, HW unterstützt Antenne 1 bis 5 |
| 0x02 | CA Variante 6 Antennen, HW unterstützt Antenne 1 bis 5 und Antenne 6 |
| 0x03 | CA Variante 6 Antennen,  HW unterstützt Antenne  1 bis 5 und Antenne 7 |
| 0x04 | CA Variante 7 Antennen, HW unterstützt Antenne 1 bis 7 (max. Variante) |
| 0xFF | Wert ungültig |

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

### TAB_CFRESULTTYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | OK |
| 0x02 | NOK  (relevant for response check) |
| 0x03 | no authentication started (relevant for response check) |
| 0x04 | wrong authentication mode (relevant for response check) |
| 0x10 | communication error |
| 0x11 | no data |
| 0x12 | timeout |
| 0x30 | busy |
| 0x31 | not ready |
| 0x32 | no random available (relevant for challenge / session key) |

### TAB_CHECKALLIDG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTH_SINGLE_IDG |
| 0x0F | AUTH_ALL_IDG |

### TAB_CURRENT_STATE_OF_OP_STM

| WERT | TEXT |
| --- | --- |
| 0x00 | undefined |
| 0x01 | OutputPermanentlyDisabled |
| 0x02 | MeasurementPending |
| 0x03 | Healthy |
| 0x04 | ShortCircuit |
| 0x05 | Restarting |
| 0x06 | NoRestartBeforCl15 |
| 0x07 | OpenLoadDebouncing |
| 0x08 | LocalHealingOpenLoad |
| 0x09 | OpenLoad |

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

### TAB_DIGITAL_DIAGNOSE_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | ShortcutOvertemperature |
| 0x01 | PreShortcutOvertemperature |
| 0x02 | LampOk |
| 0x03 | OpenLoad |
| 0x04 | DeviceError |

### TAB_DISP_PO_GRB

| WERT | TEXT |
| --- | --- |
| 0x00 | Dunkelschaltung (aus) |
| 0x01 | P |
| 0x02 | R |
| 0x03 | N |
| 0x04 | D |
| 0x0F | Signal ungültig |

### TAB_ECC_FAILURE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | ECC error in Code flash |
| 0x02 | ECC error in RAM |
| 0x04 | Unidentified ECC error |
| 0x10 | Load Instruction ECC error |
| 0x20 | Store Instruction ECC error |
| 0x40 | Fetch Instruction ECC error |
| 0x80 | Unidentified instruction ECC error |

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

### TAB_ELSV_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster nach hinten |
| 0x02 | Taster nach oben |
| 0x03 | Taster nach vorne |
| 0x04 | Taster nach unten |
| 0xFF | ungültiger Wert |

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

### TAB_ERKANNT_NICHT_ERKANNT

| WERT | TEXT |
| --- | --- |
| 0x0 | nicht erkannt / aufgetreten |
| 0x1 | erkannt / aufgetreten |

### TAB_ERROR_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Lamp_Ok |
| 0x01 | Lamp_OpenLoad |
| 0x02 | Lamp_ShortToGndSoft |
| 0x03 | Lamp_ShortToGndHard |
| 0x04 | Lamp_ShortToPlus |
| 0x05 | Lamp_Invalid |
| 0x06 | Lamp_Init |
| 0x07 | Lamp_DebounceOpenLoad |
| 0x08 | Lamp_DebounceShortToGndSoft |
| 0x09 | Lamp_DebounceShortToGndHard |
| 0x010 | Lamp_ShortToGndSoftReenable |
| 0x011 | Lamp_ShortToGndHardReenable |

### TAB_FAHRLICHTSITUATION_2

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Vorgabe |
| 0x01 | Schlechtwetter C1 |
| 0x02 | Schlechtwetter C2 |
| 0x03 | Stadt V |
| 0x04 | Touristenmodus  SAE - Semi-Autonomes Einparkenv |
| 0x05 | H-10 Landstraßenlicht C |
| 0x06 | H-8 Autobahnlicht E3 |
| 0x07 | H-6 Autobahnlicht E2 |
| 0x08 | H-5 Autobahnlicht E1 |
| 0x09 | H-4 Autobahnlicht E |
| 0x0A | Lichtverteilung H-2 |
| 0x0B | Lichtverteilung H-0 |
| 0x0C | Lichtverteilung H+2 |
| 0x0D | Lichtverteilung H+4 |
| 0x0E | Blendfreies Fernlicht |
| 0x0F | Automatisches Volles Fernlicht |
| 0x10 | Manuelles Fernlicht |
| 0x11 | Lichthupe |
| 0x12 | Blendfreies Fernlicht Dimmung 1 |
| 0x13 | Blendfreies Fernlicht Dimmung 2 |
| 0x14 | Automatisches Volles Fernlicht Dimmung 1 |
| 0x15 | Automatisches Volles Fernlicht Dimmung 2 |
| 0x16 | Blendfreies Fernlicht 5 |
| 0x17 | Blendfreies Fernlicht 6 |
| 0x18 | Blendfreies Fernlicht 7 |
| 0x19 | Blendfreies Fernlicht 8 |
| 0x1A | Blendfreies Fernlicht 9 |
| 0x1B | Blendfreies Fernlicht 10 |
| 0x1C | Blendfreies Fernlicht 11 |
| 0x1D | Abblendlicht bei DLS aktiv |
| 0x1E | Teilfernlicht bei DLS aktiv |
| 0xFF | ungültiger Wert |

### TAB_FAHRLICHTSITUATION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_PARAMETER |
| 0x01 | DIRECTIVE_LIGHT_1 |
| 0x02 | DIRECTIVE_LIGHT_2 |
| 0x03 | LIGHT_IN_TOWN |
| 0x04 | SEMI_AUTONOMIOUS_PARK |
| 0x05 | COUNTRYROAD_LIGHT |
| 0x06 | HIGHWAY_LIGHT_E3 |
| 0x07 | HIGHWAY_LIGHT_E2 |
| 0x08 | HIGHWAY_LIGHT_E1 |
| 0x09 | HIGHWAY_LIGHT_E |
| 0x0A | DISPERSION_LIGHT_H_MINUS_2 |
| 0x0B | DISPERSION_LIGHT_H_MINUS_0 |
| 0x0C | DISPERSION_LIGHT_H_PLUS_2 |
| 0x0D | DISPERSION_LIGHT_H_PLUS_4 |
| 0x0E | ANTI_GLARE_BEAM |
| 0x0F | HIGH_BEAM |
| 0x10 | MANUEL_HIGH_BEAM |
| 0x11 | HEADLIGHT_FLASHER |
| 0x12 | GLARE_FREE_BEAM_1 |
| 0x13 | GLARE_FREE_BEAM_2 |
| 0x14 | AUTOMATIC_HIGH_BEAM_DIM_1 |
| 0x15 | AUTOMATIC_HIGH_BEAM_DIM_2 |
| 0x16 | GLARE_FREE_BEAM_5 |
| 0x17 | GLARE_FREE_BEAM_6 |
| 0x18 | GLARE_FREE_BEAM_7 |
| 0x19 | GLARE_FREE_BEAM_8 |
| 0x1A | GLARE_FREE_BEAM_9 |
| 0x1B | GLARE_FREE_BEAM_10 |
| 0x1C | GLARE_FREE_BEAM_11 |
| 0x1D | LOW_BEAM_DLS_ACTIVE |
| 0x1E | PARTIAL_BEAM_DLS_ACTIVE |

### TAB_FBD4_BATTERIEZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | sehr schlecht - leer |
| 1 | niedrig |
| 2 | mittel |
| 3 | sehr gut |
| 255 | ungültig |

### TAB_FBD_POWERMODE

| WERT | TEXT |
| --- | --- |
| 0 | FBD im normalen Sleep |
| 1 | FBD wach - aktiv |
| 2 | FBD wach, aktiv und KL15 aktiv |
| 6 | FBD wach - Anlernmodus- alles durchlassen |
| 7 | FBD im Transportmode |
| 255 | ungültig |

### TAB_FBD_POWERMODE_ARG

| WERT | TEXT |
| --- | --- |
| 1 | NORMALMODUS |
| 6 | INITMODUS |

### TAB_FBM_TASTEN

| WERT | TEXT | BEMERKUNG |
| --- | --- | --- |
| 0x00 | ALLE_TASTEN | Nur in Verbindung mit Aktion 0 |
| 0x01 | FBM_1 | - |
| 0x02 | FBM_2 | - |
| 0x03 | FBM_3 | - |
| 0x04 | FBM_4 | - |
| 0x05 | FBM_5 | - |
| 0x06 | FBM_6 | - |
| 0x07 | FBM_7 | - |
| 0x08 | FBM_8 | - |

### TAB_FEHLERART_HW

| WERT | TEXT |
| --- | --- |
| 1 | Kurzschluss Masse (SIG_AN_SHORT_GND) |
| 2 | Kurzschluss Ubat (SIG_AN_SHORT_VBAT) |
| 3 | Unplausibler Zustand (SIG_AN_INVALID) |
| 4 | Leitungsunterbrechung (SIG_AN_OPEN) |
| 5 | Nicht verbaut (SIG_AN_NOTINSTALLED) |
| 6 | Unterspannung (SIG_AN_UNDERVOLTAGE) |
| 7 | Überspannung (SIG_AN_OVERVOLTAGE) |
| 8 | Fehler (SIG_AN_FAILURE) |
| 9 | Dauerbetätigung |
| 10 | Relaiskleber |
| 255 | Ungültig |

### TAB_FEHLERART_ILE

| WERT | TEXT |
| --- | --- |
| 0x01 | Interner Fehler |
| 0x02 | Leselicht links Leuchtmittel defekt |
| 0x03 | Leselicht rechts Leuchtmittel defekt |
| 0x04 | Innenlicht Leuchtmittel defekt |
| 0x05 | WelcomeLight Leuchtmittel defekt |
| 0x06 | Ambientes Licht Leuchtmittel defekt |
| 0xFF | Ungültig |

### TAB_FES_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Sport Dynamic |
| 0x02 | Sport Expert |
| 0x03 | Sport Individual |
| 0x04 | Comfort |
| 0x05 | Comfort Plus |
| 0x06 | Comfort Individual |
| 0x07 | ECO PRO Efficient |
| 0x08 | ECO PRO Plus |
| 0x09 | ECO PRO Individual |
| 0x0A | Adaptive |
| 0x3F | Signal ungültig |

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
| 0x17 | EM_PWF_TIMEOUT_WOHNEN_SHORT_ACT |
| 0x18 | EM_PWF_NO_WOHNEN_ACT |
| 0x19 | EM_PWF_NO_STANDFKT_ACT |
| 0x20 | EM_CA_DOORHANDLE_INH |
| 0x30 | EM_CL_OPERATION_INH |
| 0x31 | EM_CL_OPEN_LID_IDG_INH |
| 0x40 | EM_RC_RECEIVER_INH |
| 0x51 | EM_LCE_DAYRUNLIGHT_60KM_INH |
| 0x52 | EM_LCE_OVT_INH |
| 0x53 | EM_LCE_MANOUEVERINGLIGHT_INH |
| 0x54 | EM_LCE_POSITIONLIGHT_SWA2_INH |
| 0x55 | EM_LCE_PARKINGLIGHT_INH |
| 0x56 | EM_LCE_FOGLIGHT_INH |
| 0x57 | EM_LCE_FOLLOWMEHOME_INH |
| 0x58 | EM_LCE_WELCOME_INH |
| 0x59 | EM_LCE_HIGHBEAMASSIST_INH |
| 0x60 | EM_LCI_ALLOUTPUTS_INH |
| 0x70 | EM_LA_LIGHTASSIST_INH |
| 0x71 | EM_LA_ADAPTIVEHEADLIGHT_ACT |
| 0x80 | EM_PW_REAR_INH |
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

### TAB_FH_DENORMIER_URSACHE

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
| 0x40 | No init data after reset (Magna) |
| 0x41 | Voltage on motor and relays not activa (Magna) |
| 0x42 | Voltage on motor and relays not activa (Magna) |
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
| 0x51 | Different Software version stored in NvRam (Magna) |
| 0x52 | Different vendor code stored in NvRam (Magna) |
| 0x53 | Signature Interference Occurred (Magna) |
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
| 0x6A | DENORM_DIAG (Brose) |
| 0x80 | NOT_YET_DEFINED (Küster) |
| 0x81 | CODING (Küster) |
| 0x82 | LOWERSTALL_TO_EARLY (Küster) |
| 0x83 | ERROR_MOTOR_RUNTIME (Küster) |
| 0x84 | ERROR PROGRAM (Küster) |
| 0x85 | ERROR MEMORY (Küster) |
| 0x89 | FEHLER_TSG_SEITE (Küster) |
| 0x8C | ErrorInUpperNormalization  (Küster) |
| 0x8E | ERROR_HALLSPEED_UP (Küster) |
| 0x8F | ERROR_HALLSPEED_DOWN (Küster) |
| 0x90 | ERROR_HALLDIR_UP (Küster) |
| 0x91 | ERROR_HALLDIR_DOWN (Küster) |
| 0x92 | ERROR_HIGH_HALLFREQ (Küster) |
| 0xFF | Ungültiger Wert |

### TAB_FH_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Keine Initialisierung möglich |
| 2 | Kennlinie ungültig |
| 3 | Codierung fehlerhaft |
| 4 | Normierung ungültig |
| 5 | Codierversion ungültig |
| 6 | HW-Version ungültig |
| 7 | Thermoschutz 90 |
| 8 | Thermoschutz 100 |
| 9 | Fehler Motoransteuerung |
| 10 | Allgemeiner Fehler |
| 11 | Hallfehler erkannt |
| 12 | Relaisfehler erkannt |
| 13 | Relaiskleber erkannt |
| 14 | Fehler Taster erkannt |
| 15 | Fehler Tasterbeleuchtung erkannt |
| 16 | Überspannung / Unterspannung erkannt |
| 17 | Speicherfehler (RAM/ROM/NVRAM) erkannt |
| 63 | Signal ungültig |

### TAB_FH_FENSTER_GS

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | teilweise geöffnet |
| 0x02 | vollständig geöffnet |
| 0xFF | ungültig |

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
| 0x1F | Brose |
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
| 0x60 | REVERS_AT_TIMEOUT (Brose) |
| 0x61 | REVERS_ATDIAGTIMEOUT (Brose) |
| 0xFF | Ungültiger Wert |

### TAB_FH_SHD_ESH_EINLERNEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Einlernen ohne Kraftbegrenzung |
| 0x02 | Einlernen mit Kraftbegrenzung |
| 0x03 | Einlernen mit Kraftbegrenzung und Not Stop |
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

### TAB_FH_SHD_ESH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor laeuft |
| 0x01 | Position erreicht |
| 0x02 | Bewegung abgebrochen durch Bedienkonzept |
| 0x03 | Normierung gefunden |
| 0x04 | Nachnormierung durchgeführt |
| 0x05 | Einklemmen erkannt |
| 0x06 | Reversierposition erreicht |
| 0x07 | Blockieren erkannt |
| 0x08 | Motor steht |
| 0x09 | Sicherheitszeitueberlauf |
| 0x0A | Drehrichtung passt nicht zur Hallauswertung |
| 0x0B | falsche Zielposition (zu niedrig) |
| 0x0C | falsche Zielposition (zu hoch) |
| 0x0D | Motor zu warm |
| 0x0E | Fehler in Motoransteuerungs-HW |
| 0x0F | Motorkurzschluss |
| 0x10 | Reset während Motorbewegung |
| 0x11 | HALL Puls verloren |
| 0x12 | Motorspannung nicht im Betriebsbereich |
| 0x13 | Fehler in Hallsensor-HW |
| 0x14 | keine OSEK Rechenzeit für Einklemmschutz-Algorithmus zugeteilt |
| 0x15 | AUTOMOVE_CMD_FAIL : Automatic-Kommando abgelehnt; Bedienkonzept Error |
| 0x20 | AUTO_COND_LOST: Wegfall Automatikfreigabe (Conti) |
| 0x21 | CODING_FAIL: Fehler Codierdaten Checksumme (Conti) |
| 0x22 | WAITING_FOR_EE: Warten auf EEPROM (Conti) |
| 0x23 | EE_TIMEOUT: Keine Antwort vom NVRAM Manager (Conti) |
| 0x24 | NOT_POSSIBLE_TO_WRITE_EE: Position kann nicht in EEPROM geschrieben werden (Conti) |
| 0x25 | HALL_DISABLED: Hall ausgeschaltet (Conti) |
| 0x26 | CODING_SESSION: Coding session aktiv (Conti) |
| 0x27 | PANIC_NOT_VALID: Panic Close nicht erlaubt (Conti) |
| 0x28 | DIAGNOSTIC_SESSION_ACTIVE: Für Brose und Conti gleich?? (Conti) |
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
| 0x60 | AUTO_COND_LOST : Wegfall Automatikfreigabe (Brose)  |
| 0x61 | CODING_FAIL (Brose): Fehler Codierdaten Checksumme |
| 0x62 | WAITING_FOR_EE : Warten auf EEPROM (Brose) |
| 0x63 | EE_TIMEOUT : Keine Antwort vom NVRAM Manager (Brose) |
| 0x64 | NOT_POSSIBLE_TO_WRITE_EE : Position kann nicht in EEPROM geschrieben werden (Brose) |
| 0x65 | HALL_DISABLED : Hall ausgeschaltet (Brose) |
| 0x66 | CODING_SESSION : Coding session aktiv (Brose) |
| 0x67 | PANIC_NOT_VALID : Panic Close nicht erlaubt (Brose) |
| 0x68 | DIAGNOSTIC_SESSION_ACTIVE : Verfahren wird durch aktive Diagnosesession abgebrochen (Brose) |
| 0x69 | STALL_PLAY_PROTECTION : Keine Ansteuerung aufgrund von Spielschutz (Brose) |
| 0x6A | CRC_ALIVE_FAIL : Fehler in FuSi Schnittstelle (CRC bzw. AliveCounter) (Brose) |
| 0x6B | LIN_TIMEOUT : Stop wegen LIN-TimeOut (Brose) |
| 0x6C | NO_DRVG_MODE : LIN Driving Mode ungültig (Brose) |
| 0x6D | LIN_SLEEP_CMD : Sleep während Motorlauf angefordert (Brose) |
| 0x6E | WRONG_MOVE_MODE : Positionierfahrt wird im manuellen Modus angefordert (Brose) |
| 0x80 | STOP_NOT_YET_DEFINED (Küster) |
| 0x81 | KILL_INITIAL: Abbruch während Initallauf (Küster) |
| 0x82 | STOP_INITIAL: Ende des Initiallaufs (Küster) |
| 0x83 | DIAG_STOP: Stop über Diagnose Routine Control (Küster) |
| 0x84 | STOP_LIN_TIMEOUT: Stop durch LIN-TimeOut (Küster) |
| 0x85 | STOP_SLEEP: Stop vor Sleep (Küster) |
| 0x86 | NOT_STOPPED_INVAL_NVM (Küster) |
| 0x87 | STOP_DENORM: Stop aufgrund Denormierung (Küster) |
| 0x88 | INIT_INVALID_NB_WRG: Randbedingungen für Initalisierungslauf nicht gegeben -> Nachbarfenster (Küster) |
| 0x89 | INIT_INVALID_DOOR: Randbedingungen für Initalisierungslauf nicht gegeben -> Tür offen (Küster) |
| 0x8A | RUNTIME_EXCEEDED (Küster) |
| 0x8B | SOFTSTOP (Küster) |
| 0x8C | LIMP_HOME_UP (Küster) |
| 0x8D | LIMP_HOME_DOWN (Küster) |
| 0x8E | STOP_DIAG_MODE: Umschaltung in Diagnose Modus (Küster) |
| 0x8F | STOP_REVERSE: Zusätzlicher Stop nach Reversieren (Küster) |
| 0x90 | STOP_VOLT: Stop in Start-Stop-Behandlung (Küster) |
| 0x91 | INVALID_CTRL_FRAME: Lin-Abriss, Alive-Counter-Probleme, CRC fehlerhaft, ungültige Werte im CTRL Frame (Küster) |
| 0xFF | Ungültiger Wert |

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
| 0xA0 | Element steht in Demontageposition |
| 0xA1 | Element steht in Serviceposition A |
| 0xA2 | Element steht in Serviceposition B |
| 0xFF | ungültiger Wert |

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

### TAB_FORCED_SWITCH_OFF_XENON

| WERT | TEXT |
| --- | --- |
| 0x00 | NotActive |
| 0x01 | Active |
| 0x02 | NotAvailable |

### TAB_FUSI_FAHRBEREITSCHAFT_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | KL15 nicht aktiv |
| 0x02 | ADC Fehler |
| 0x03 | Interner Integritätsfehler |

### TAB_FUSI_FEHLERGRUND_PWF

| WERT | TEXT |
| --- | --- |
| 0x01 | ST_DRVG_RDI_DRV CRC/Alive-Fehler |
| 0x02 | ST_DRVG_RDI_DRV ungültige Signalcodierung |
| 0x03 | ST_DRVG_RDI_DRV Timeout |
| 0x04 | ST_DRVG_RDI_DRV Safety-Fehler 1 |
| 0x05 | ST_DRVG_RDI_DRV Liveness-Fehler 1 |
| 0x06 | ST_DRVG_RDI_DRV Liveness-Fehler 2 |
| 0x07 | ST_DRVG_RDI_DRV Safety-Fehler 2 |
| 0x08 | Interner Integritätsfehler |

### TAB_FUSI_INTEGRITY

| WERT | TEXT |
| --- | --- |
| 0x00 | RTE_E_OK |
| 0x08 | RTE_E_INTEGRITY_VIOLATED |
| 0xFF | Ungültiger Wert |

### TAB_FUSI_KLEMMEN_AKTIVIERUNGS_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | Anforderung MSA Motorstart1 ungleich Motor starten |
| 0x02 | Anforderung MSA Motorstart2 ungleich Motor starten |
| 0x03 | Status Motorstart Auto CRC/Alive Fehler |
| 0x04 | Aktivierungsanforderung Timeout |
| 0x05 | Interner Integritätsfehler |

### TAB_HECKKLAPPENSENSOR_DEFEKT

| WERT | TEXT |
| --- | --- |
| 1 | Leitungsunterbrechung |
| 2 | Kurzschluss nach Masse |

### TAB_HECKROLLO_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Heckrollo nicht vorhanden |
| 0x01 | Heckrollo über BDC |
| 0x02 | Heckrollo über HKFM |
| 0xFF | Ungültiger Wert |

### TAB_HK_WIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taster gedrückt |
| 0x02 | Taster gezogen |
| 0x03 | Signal ungültig |

### TAB_HOD_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | EEPROM nicht verfügbar |
| 0x02 | ROM-Fehler |
| 0x03 | Watchdog Fehler |
| 0x04 | CPU-Fehler |
| 0x05 | Lenkrad, Unterbrechung Schirm |
| 0x06 | Lenkrad, Unterbrechung Messleitung |
| 0x07 | CPU defekt oder Sensor Kurzschluß |
| 0x08 | Unterspannung |
| 0x09 | Überspannung |
| 0x0A | Kodierfehler |
| 0x0B | Allgemeiner Systemfehler 2 |
| 0x0F | Signal ungültig |
| 0xFF | ungültiger Wert |

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

### TAB_HW_OPTION_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x0 | Funktion wird nicht unterstützt / ist nicht vorhanden |
| 0x1 | Funktion wird unterstützt / ist vorhanden |
| 0xFF | Wert ungültig |

### TAB_IBS_WAKEUP_GRUND

| WERT | TEXT |
| --- | --- |
| 1 | Erreichen der Startfähigkeitsgrenze 1 |
| 2 | Erreichen der Startfähigkeitsgrenze 2 |
| 3 | Ruhestromverletzung |
| 4 | Nachladefunktion |
| 5 | Reserviert für zukünftige Werte |
| 255 | Ungültig/Unbekannt |

### TAB_IFK_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Celsius |
| 0x01 | Fahrenheit |
| 0x03 | Ungültig |
| 0xFF | Ungültiger Wert |

### TAB_IM_ADEV_ANTICOLL

| WERT | TEXT |
| --- | --- |
| 0 | Normale Anticollision |
| 1 | Normale Anticollision |
| 2 | Normale Anticollision |
| 3 | Normale Anticollision |
| 4 | Normale Anticollision |
| 5 | Normale Anticollision |
| 6 | Normale Anticollision |
| 7 | Normale Anticollision |
| 8 | Stochastische bzw. exteded Anticollision |
| 9 | Stochastische bzw. exteded Anticollision |
| 10 | Stochastische bzw. exteded Anticollision |
| 11 | Stochastische bzw. exteded Anticollision |
| 12 | Stochastische bzw. exteded Anticollision |
| 13 | Stochastische bzw. exteded Anticollision |
| 14 | Stochastische bzw. exteded Anticollision |
| 15 | Stochastische bzw. exteded Anticollision |
| 255 | ungültig / keine CAM-Nr zugeordnet (DEFAULT) |

### TAB_IM_ADEV_AUTH

| WERT | TEXT |
| --- | --- |
| 0 | ID unbekannt  / NA (z.B. bei unbekanntem Transponder) |
| 1 | Authentisierung läuft |
| 2 | Authentisierung erfolgreich (KEY_VALID) |
| 16 | Authentisierung nicht möglich (z.B. Kommunikationsfehler) |
| 17 | Authentisierung fehlgeschlagen (z.B. nicht authentisch) |
| 18 | Authentisierungs-Device ist gesperrt |
| 255 | ungültig / unbekannt |

### TAB_IM_ADEV_CONFIG

| WERT | TEXT |
| --- | --- |
| 0 | Unverriegelt, normale Anlieferung - anlernbar |
| 1 | Komplett Verriegelt - nicht mehr anlernbar |
| 2 | Teilweise Verriegelt - nicht mehr anlernbar |
| 4 | Kein normaler Anlieferzustand - trotzdem anlernbar |
| 16 | Fehlerhafte Segment-Konfiguration - nicht anlernbar |
| 17 | Fehlerhafte Rechte - Konfiguration - nicht anlernbar |
| 32 | unbekannter bzw. falscher Transpondertyp |
| 255 | ungültig / kein Transponder erkannt |

### TAB_IM_ADEV_POS

| WERT | TEXT |
| --- | --- |
| 0 | Authentisierungs-Device 0 |
| 1 | Authentisierungs-Device 1 |
| 2 | Authentisierungs-Device 2 |
| 3 | Authentisierungs-Device 3 |
| 4 | Authentisierungs-Device 4 |
| 5 | Authentisierungs-Device 5 |
| 6 | Authentisierungs-Device 6 |
| 7 | Authentisierungs-Device 7 |
| 8 | Authentisierungs-Device 8 |
| 9 | Authentisierungs-Device 9 |
| 10 | Authentisierungs-Device 10 |
| 11 | Authentisierungs-Device 11 |
| 12 | Authentisierungs-Device 12 |
| 13 | Authentisierungs-Device 13 |
| 14 | Authentisierungs-Device 14 |
| 15 | Authentisierungs-Device 15 |
| 16 | Authentisierungs-Device 16 |
| 17 | Authentisierungs-Device 17 |
| 18 | Authentisierungs-Device 18 |
| 19 | Authentisierungs-Device 19 |
| 20 | Authentisierungs-Device 20 |
| 21 | Authentisierungs-Device 21 |
| 22 | Authentisierungs-Device 22 |
| 23 | Authentisierungs-Device 23 |
| 24 | Authentisierungs-Device 24 |
| 25 | Authentisierungs-Device 25 |
| 26 | Authentisierungs-Device 26 |
| 27 | Authentisierungs-Device 27 |
| 28 | Authentisierungs-Device 28 |
| 29 | Authentisierungs-Device 29 |
| 30 | Authentisierungs-Device 30 |
| 31 | Authentisierungs-Device 31 |
| 100 | THS 1 |
| 101 | THS 2 |
| 200 | FFB |
| 255 | ungültig |

### TAB_IM_ADEV_POS_ARG

| WERT | TEXT |
| --- | --- |
| 0 | ADEV_0 |
| 1 | ADEV_1 |
| 2 | ADEV_2 |
| 3 | ADEV_3 |
| 4 | ADEV_4 |
| 5 | ADEV_5 |
| 6 | ADEV_6 |
| 7 | ADEV_7 |
| 8 | ADEV_8 |
| 9 | ADEV_9 |
| 10 | ADEV_10 |
| 11 | ADEV_11 |
| 12 | ADEV_12 |
| 13 | ADEV_13 |
| 14 | ADEV_14 |
| 15 | ADEV_15 |
| 16 | ADEV_16 |
| 17 | ADEV_17 |
| 18 | ADEV_18 |
| 19 | ADEV_19 |
| 20 | ADEV_20 |
| 21 | ADEV_21 |
| 22 | ADEV_22 |
| 23 | ADEV_23 |
| 24 | ADEV_24 |
| 25 | ADEV_25 |
| 26 | ADEV_26 |
| 27 | ADEV_27 |
| 28 | ADEV_28 |
| 29 | ADEV_29 |
| 30 | ADEV_30 |
| 31 | ADEV_31 |

### TAB_IM_ADEV_SPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Authentisierungs-Device nicht gesperrt |
| 1 | Authentisierungs-Device gesperrt |
| 2 | Authentisierungs-Device gelöscht |
| 255 | ungültig |

### TAB_IM_ADEV_SPERRE_ARG

| WERT | TEXT |
| --- | --- |
| 0 | ENABLED |
| 1 | DISABLED |

### TAB_IM_ADEV_TYPE

| WERT | TEXT |
| --- | --- |
| 0 | NOT_SUPPORTED_ANYMORE |
| 1 | Plug-In-Schnittstelle (für reale Kunden-Devices unzulässig) |
| 2 | Geldbörsenschlüssel (für RüKo) |
| 3 | NOT_SUPPORTED_ANYMORE |
| 4 | NOT_SUPPORTED_ANYMORE |
| 5 | ID-Geber (Standard-Schlüssel) |
| 6 | ID-Geber mit Display |
| 32 | NFC-Device |
| 255 | ungültig |

### TAB_IM_ADEV_TYPE_ARG

| WERT | TEXT |
| --- | --- |
| 1 | PLUGIN |
| 2 | WALLET |
| 5 | IDG |
| 6 | DISPIDG |
| 16 | NFC |

### TAB_IM_ADEV_VALID

| WERT | TEXT |
| --- | --- |
| 0 | Authentisierungs-Device 0 |
| 1 | Authentisierungs-Device 1 |
| 2 | Authentisierungs-Device 2 |
| 3 | Authentisierungs-Device 3 |
| 4 | Authentisierungs-Device 4 |
| 5 | Authentisierungs-Device 5 |
| 6 | Authentisierungs-Device 6 |
| 7 | Authentisierungs-Device 7 |
| 8 | Authentisierungs-Device 8 |
| 9 | Authentisierungs-Device 9 |
| 10 | Authentisierungs-Device 10 |
| 11 | Authentisierungs-Device 11 |
| 12 | Authentisierungs-Device 12 |
| 13 | Authentisierungs-Device 13 |
| 14 | Authentisierungs-Device 14 |
| 15 | Authentisierungs-Device 15 |
| 16 | Authentisierungs-Device 16 |
| 17 | Authentisierungs-Device 17 |
| 18 | Authentisierungs-Device 18 |
| 19 | Authentisierungs-Device 19 |
| 255 | unbekannt / ungültig |

### TAB_IM_AKTIV

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv |
| 1 | aktiv |
| 255 | Ungültig |

### TAB_IM_DATA_MODE

| WERT | TEXT |
| --- | --- |
| 10 | WRITE_TRANSPORT_A |
| 11 | WRITE_TRANSPORT_B |
| 20 | WRITE_ADEV_KEYS |
| 30 | WRITE_SERVER_KEYS |
| 31 | WRITE_ISN |
| 50 | WRITE_AC |

### TAB_IM_DATENABLAGE

| WERT | TEXT |
| --- | --- |
| 0 | nicht vorhanden |
| 1 | vorhanden und 100% konsistent und Mehrfachablage in Ordnung |
| 2 | vorhanden und 100% konsistent, aber Mehrfachablage eingeschränkt |
| 3 | vorhanden aber ggf. nicht konsistent |
| 255 | Ungültig |

### TAB_IM_E5_MODE

| WERT | TEXT |
| --- | --- |
| 0 | E5 nicht aktiv |
| 1 | E5 aktiv (DEFAULT) |
| 255 | Ungültig |

### TAB_IM_E6_MODE

| WERT | TEXT |
| --- | --- |
| 0 | E6 nicht aktiv |
| 1 | E6 aktiv  (DEFAULT) |
| 255 | Ungültig |

### TAB_IM_FBD_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Lieferant (Wert unzulässig) |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x003F | Marquardt GmbH |
| 0x0066 | Valeo SA |
| 0x0072 | Huf Hülsbeck & Fürst GmbH&Co KG |
| 0xFF10 | Conti Regensburg |
| 0xFF20 | HUF |
| 0xFF30 | Marquardt |
| 0xFFFF | ungültig / unbekannter Hersteller |

### TAB_IM_FREQ

| WERT | TEXT |
| --- | --- |
| 0 | Keine Frequenz |
| 1 | reserviert |
| 2 | reserviert |
| 3 | 315 MHz LowPower |
| 4 | 315 MHz |
| 5 | 434 MHz |
| 6 | 868 MHz |
| 7 | 434 MHz (KOREA) |
| 8 | reserviert |
| 9 | 434 MHz (US, Nur FBD-Empfänger) |
| 10 | 434 MHz (TAIWAN, Nur FBD-Empfänger) |
| 255 | ungültig |

### TAB_IM_FREQ_ARG

| WERT | TEXT |
| --- | --- |
| 3 | 315_LP |
| 4 | 315 |
| 5 | 434 |
| 6 | 868 |
| 7 | 434_KOREA |

### TAB_IM_HASHMODE

| WERT | TEXT |
| --- | --- |
| 2 | OLD_HASH: Alte Hashfunktionen verwenden (bis einschl. SOP 2013) RüKo |
| 8 | 35UP_HASH: (DEFAULT) Neue 35UP-Hashfunktionen (KeyLaws konform) |
| 255 | ungültig (noch nicht gesetzt) |

### TAB_IM_HASHMODE_ARG

| WERT | TEXT |
| --- | --- |
| 2 | OLD_HASH |
| 8 | 35UP_HASH |

### TAB_IM_INIT_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler |
| 1 | Anlernvorgang Fehler 1 |
| 2 | Anlernvorgang Fehler 2 |
| 3 | Anlernvorgang Fehler 3 |
| 4 | Anlernvorgang Fehler 4 |
| 5 | Anlernvorgang Fehler 5 |
| 6 | Anlernvorgang Fehler 6 |
| 7 | Anlernvorgang Fehler 7 |
| 8 | Anlernvorgang Fehler 8 |
| 9 | Anlernvorgang Fehler 9 |
| 10 | Anlernvorgang Fehler 10 |
| 11 | Anlernvorgang Fehler 11 |
| 12 | Anlernvorgang Fehler 12 |
| 13 | Anlernvorgang Fehler 13 |
| 14 | Anlernvorgang Fehler 14 |
| 15 | Anlernvorgang Fehler 15 |
| 16 | Anlernvorgang Fehler 16 |
| 17 | Anlernvorgang Fehler 17 |
| 18 | Anlernvorgang Fehler 18 |
| 19 | Anlernvorgang Fehler 19 |
| 20 | Anlernvorgang Fehler 20 |
| 21 | Anlernvorgang Fehler 21 |
| 22 | Anlernvorgang Fehler 22 |
| 23 | Anlernvorgang Fehler 23 |
| 24 | Anlernvorgang Fehler 24 |
| 25 | Anlernvorgang Fehler 25 |
| 26 | Anlernvorgang Fehler 26 |
| 27 | Anlernvorgang Fehler 27 |
| 28 | Anlernvorgang Fehler 28 |
| 29 | Anlernvorgang Fehler 29 |
| 30 | Anlernvorgang Fehler 30 |
| 31 | Anlernvorgang Fehler 31 |
| 32 | Anlernvorgang Fehler 32 |
| 33 | Anlernvorgang Fehler 33 |
| 34 | Anlernvorgang Fehler 34 |
| 35 | Anlernvorgang Fehler 35 |
| 36 | Anlernvorgang Fehler 36 |
| 37 | Anlernvorgang Fehler 37 |
| 38 | Anlernvorgang Fehler 38 |
| 39 | Anlernvorgang Fehler 39 |
| 40 | Anlernvorgang Fehler 40 |
| 41 | Anlernvorgang Fehler 41 |
| 42 | Anlernvorgang Fehler 42 |
| 43 | Anlernvorgang Fehler 43 |
| 44 | Anlernvorgang Fehler 44 |
| 45 | Anlernvorgang Fehler 45 |
| 46 | Anlernvorgang Fehler 46 |
| 47 | Anlernvorgang Fehler 47 |
| 48 | Anlernvorgang Fehler 48 |
| 49 | Anlernvorgang Fehler 49 |
| 50 | Anlernvorgang Fehler 50 |
| 51 | Anlernvorgang Fehler 51 |
| 52 | Anlernvorgang Fehler 52 |
| 53 | Anlernvorgang Fehler 53 |
| 54 | Anlernvorgang Fehler 54 |
| 55 | Anlernvorgang Fehler 55 |
| 56 | Anlernvorgang Fehler 56 |
| 57 | Anlernvorgang Fehler 57 |
| 58 | Anlernvorgang Fehler 58 |
| 59 | Anlernvorgang Fehler 59 |
| 60 | ACS Update Fehler 1 |
| 61 | ACS Update Fehler 2 |
| 62 | ACS Update Fehler 3 |
| 63 | ACS Update Fehler 4 |
| 64 | ACS Update Fehler 5 |
| 65 | ACS Update Fehler 6 |
| 66 | ACS Update Fehler 7 |
| 67 | ACS Update Fehler 8 |
| 68 | ACS Update Fehler 9 |
| 69 | ACS Update Fehler 10 |
| 70 | ACS Update Fehler 11 |
| 71 | ACS Update Fehler 12 |
| 72 | ACS Update Fehler 13 |
| 73 | ACS Update Fehler 14 |
| 74 | ACS Update Fehler 15 |
| 75 | ACS Update Fehler 16 |
| 76 | ACS Update Fehler 17 |
| 77 | ACS Update Fehler 18 |
| 78 | ACS Update Fehler 19 |
| 79 | ACS Update Fehler 20 |
| 80 | Fehler Start Anlernvorgang - Job Argument 'tab_pos' ungültig |
| 81 | Fehler Start Anlernvorgang - Job Argument 'mode' ungültig |
| 82 | Fehler Start Anlernvorgang - ADEV SK ist gesperrt |
| 83 | Fehler Start Anlernvorgang - NVM wird gerade gelöscht |
| 84 | Fehler Start Anlernvorgang - Anlernvorgang läuft bereits |
| 85 | Fehler Start Anlernvorgang - Job Argument 'id' ist nicht korrekt |
| 86 | Fehler Start Anlernvorgang - Job Argument 'id' falscher Prefix |
| 87 | Fehler Start Anlernvorgang - Lesevorgang noch nicht abgeschlossen |
| 88 | Fehler Start Anlernvorgang - Position ist bereits benutzt |
| 89 | Fehler Start Anlernvorgang - Transponder ist nicht unverriegelt |
| 90 | Fehler Start Anlernvorgang - Falsche Transpondergeneration |
| 91 | Fehler Start Anlernvorgang - ID wird bereits verwendet |
| 92 | Start Anlernvorgang Fehler 1 |
| 93 | Start Anlernvorgang Fehler 2 |
| 94 | Start Anlernvorgang Fehler 3 |
| 95 | Start Anlernvorgang Fehler 4 |
| 96 | Start Anlernvorgang Fehler 5 |
| 97 | Start Anlernvorgang Fehler 6 |
| 98 | Start Anlernvorgang Fehler 7 |
| 99 | Start Anlernvorgang Fehler 8 |
| 100 | Read Fehler - Falscher Transpondertyp |
| 101 | Read Fehler 1 |
| 102 | Read Fehler 2 |
| 103 | Read Fehler 3 |
| 104 | Read Fehler 4 |
| 105 | Read Fehler 5 |
| 106 | Read Fehler 6 |
| 107 | Read Fehler 7 |
| 108 | Read Fehler 8 |
| 109 | Read Fehler 9 |
| 110 | Read Fehler 10 |
| 111 | Read Fehler 11 |
| 112 | Read Fehler 12 |
| 113 | Read Fehler 13 |
| 114 | Read Fehler 14 |
| 115 | Read Fehler 15 |
| 116 | Read Fehler 16 |
| 117 | Read Fehler 17 |
| 118 | Read Fehler 18 |
| 119 | Read Fehler 19 |
| 120 | Read Fehler 20 |
| 121 | Read Fehler 21 |
| 122 | Read Fehler 22 |
| 123 | Read Fehler 23 |
| 124 | Read Fehler 24 |
| 125 | Read Fehler 25 |
| 126 | Read Fehler 26 |
| 127 | Read Fehler 27 |
| 128 | Read Fehler 28 |
| 129 | Read Fehler 29 |
| 130 | Auth Fehler Basestation |
| 131 | Auth Fehler Antenne |
| 132 | Auth Fehler RND |
| 133 | Auth Fehler 1 |
| 134 | Auth Fehler 2 |
| 135 | Auth Fehler 3 |
| 136 | Auth Fehler 4 |
| 137 | Auth Fehler 5 |
| 138 | Auth Fehler 6 |
| 139 | Auth Fehler 7 |
| 140 | Auth Fehler 8 |
| 141 | Auth Fehler 9 |
| 142 | Auth Fehler 10 |
| 143 | Auth Fehler 11 |
| 144 | Auth Fehler 12 |
| 145 | Auth Fehler 13 |
| 146 | Auth Fehler 14 |
| 147 | Auth Fehler 15 |
| 148 | Auth Fehler 16 |
| 149 | Auth Fehler 17 |
| 150 | Auth Fehler 18 |
| 151 | Auth Fehler 19 |
| 152 | Auth Fehler 20 |
| 153 | Auth Fehler 21 |
| 154 | Auth Fehler 22 |
| 155 | Auth Fehler 23 |
| 156 | Auth Fehler 24 |
| 157 | Auth Fehler 25 |
| 158 | Auth Fehler 26 |
| 159 | Auth Fehler 27 |
| 160 | Ersatzschlüssel Fehler 1 |
| 161 | Ersatzschlüssel Fehler 2 |
| 162 | Ersatzschlüssel Fehler 3 |
| 163 | Ersatzschlüssel Fehler 4 |
| 164 | Ersatzschlüssel Fehler 5 |
| 165 | Ersatzschlüssel Fehler 6 |
| 166 | Ersatzschlüssel Fehler 7 |
| 167 | Ersatzschlüssel Fehler 8 |
| 168 | Ersatzschlüssel Fehler 9 |
| 169 | Ersatzschlüssel Fehler 10 |
| 170 | Ersatzschlüssel Fehler 11 |
| 171 | Ersatzschlüssel Fehler 12 |
| 172 | Ersatzschlüssel Fehler 13 |
| 173 | Ersatzschlüssel Fehler 14 |
| 174 | Ersatzschlüssel Fehler 15 |
| 175 | Ersatzschlüssel Fehler 16 |
| 176 | Ersatzschlüssel Fehler 17 |
| 177 | Ersatzschlüssel Fehler 18 |
| 178 | Ersatzschlüssel Fehler 19 |
| 179 | Ersatzschlüssel Fehler 20 |
| 180 | Ersatzschlüssel Fehler 21 |
| 181 | Ersatzschlüssel Fehler 22 |
| 182 | Ersatzschlüssel Fehler 23 |
| 183 | Ersatzschlüssel Fehler 24 |
| 184 | Ersatzschlüssel Fehler 25 |
| 185 | Ersatzschlüssel Fehler 26 |
| 186 | Ersatzschlüssel Fehler 27 |
| 187 | Ersatzschlüssel Fehler 28 |
| 188 | Ersatzschlüssel Fehler 29 |
| 189 | Ersatzschlüssel Fehler 30 |
| 190 | Ersatzschlüssel Fehler 31 |
| 191 | Ersatzschlüssel Fehler 32 |
| 192 | Ersatzschlüssel Fehler 33 |
| 193 | Ersatzschlüssel Fehler 34 |
| 194 | Ersatzschlüssel Fehler 35 |
| 195 | Ersatzschlüssel Fehler 36 |
| 196 | Ersatzschlüssel Fehler 37 |
| 197 | Ersatzschlüssel Fehler 38 |
| 198 | Ersatzschlüssel Fehler 39 |
| 199 | Ersatzschlüssel Fehler 40 |
| 200 | EOL Update Fehler 1 |
| 201 | EOL Update Fehler 2 |
| 202 | EOL Update Fehler 3 |
| 203 | EOL Update Fehler 4 |
| 204 | EOL Update Fehler 5 |
| 205 | EOL Update Fehler 6 |
| 206 | EOL Update Fehler 7 |
| 207 | EOL Update Fehler 8 |
| 208 | EOL Update Fehler 9 |
| 209 | EOL Update Fehler 10 |
| 210 | EOL Update Fehler 11 |
| 211 | EOL Update Fehler 12 |
| 212 | EOL Update Fehler 13 |
| 213 | EOL Update Fehler 14 |
| 214 | EOL Update Fehler 15 |
| 215 | EOL Update Fehler 16 |
| 216 | EOL Update Fehler 17 |
| 217 | EOL Update Fehler 18 |
| 218 | EOL Update Fehler 19 |
| 219 | EOL Update Fehler 20 |
| 220 | COM Fehler im Anlernvorgang |
| 221 | COM Fehler im Ersatzablauf |
| 222 | COM Fehler im Leseablauf |
| 223 | COM Fehler beim EOL Update |
| 224 | COM Fehler beim ACS Update |
| 225 | COM Fehler Batteriezustand |
| 226 | COM Fehler 1 |
| 227 | COM Fehler 2 |
| 228 | COM Fehler 3 |
| 229 | COM Fehler 4 |
| 230 | SDS Fehler - kein Transponder an der Spule |
| 231 | SDS Fehler 1 |
| 232 | SDS Fehler 2 |
| 233 | SDS Fehler 3 |
| 234 | SDS Fehler 4 |
| 235 | SDS Fehler 5 |
| 236 | SDS Fehler 6 |
| 237 | SDS Fehler 7 |
| 238 | SDS Fehler 8 |
| 239 | SDS Fehler 9 |
| 240 | SDS Fehler 10 |
| 241 | SDS Fehler 11 |
| 242 | SDS Fehler 12 |
| 243 | SDS Fehler 13 |
| 244 | SDS Fehler 14 |
| 245 | SDS Fehler 15 |
| 246 | SDS Fehler 16 |
| 247 | SDS Fehler 17 |
| 248 | SDS Fehler 18 |
| 249 | SDS Fehler 19 |
| 250 | SDS Fehler 20 |
| 251 | SDS Fehler 21 |
| 252 | SDS Fehler 22 |
| 253 | SDS Fehler 23 |
| 254 | SDS Fehler 24 |
| 255 | Ungültiger Fehler |

### TAB_IM_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Ungültiger Wert |
| 1 | Fertig angelernt |
| 2 | Anlernvorgang läuft - Position 2 |
| 3 | Anlernvorgang läuft - Position 3 |
| 4 | Anlernvorgang läuft - Position 4 |
| 5 | Anlernvorgang läuft - Position 5 |
| 6 | Anlernvorgang läuft - Position 6 |
| 7 | Anlernvorgang läuft - Position 7 |
| 8 | Anlernvorgang läuft - Position 8 |
| 9 | Anlernvorgang läuft - Position 9 |
| 10 | Anlernvorgang läuft - Position 10 |
| 11 | Anlernvorgang läuft - Position 11 |
| 12 | Anlernvorgang läuft - Position 12 |
| 13 | Anlernvorgang läuft - Position 13 |
| 14 | Anlernvorgang läuft - Position 14 |
| 15 | Anlernvorgang läuft - Position 15 |
| 16 | Anlernvorgang läuft - Position 16 |
| 17 | Anlernvorgang läuft - Position 17 |
| 18 | Anlernvorgang läuft - Position 18 |
| 19 | Anlernvorgang läuft - Position 19 |
| 20 | Anlernvorgang läuft - Position 20 |
| 21 | Anlernvorgang läuft - Position 21 |
| 22 | Anlernvorgang läuft - Position 22 |
| 23 | Anlernvorgang läuft - Position 23 |
| 24 | Anlernvorgang läuft - Position 24 |
| 25 | Anlernvorgang läuft - Position 25 |
| 26 | Anlernvorgang läuft - Position 26 |
| 27 | Anlernvorgang läuft - Position 27 |
| 28 | Anlernvorgang läuft - Position 28 |
| 29 | Anlernvorgang läuft - Position 29 |
| 30 | Anlernvorgang läuft - Position 30 |
| 31 | Anlernvorgang läuft - Position 31 |
| 32 | Anlernvorgang läuft - Position 32 |
| 33 | Anlernvorgang läuft - Position 33 |
| 34 | Anlernvorgang läuft - Position 34 |
| 35 | Anlernvorgang läuft - Position 35 |
| 36 | Anlernvorgang läuft - Position 36 |
| 37 | Anlernvorgang läuft - Position 37 |
| 38 | Anlernvorgang läuft - Position 38 |
| 39 | Anlernvorgang läuft - Position 39 |
| 40 | Anlernvorgang läuft - Position 40 |
| 41 | Anlernvorgang läuft - Position 41 |
| 42 | Anlernvorgang läuft - Position 42 |
| 43 | Anlernvorgang läuft - Position 43 |
| 44 | Anlernvorgang läuft - Position 44 |
| 45 | Anlernvorgang läuft - Position 45 |
| 46 | Anlernvorgang läuft - Position 46 |
| 47 | Anlernvorgang läuft - Position 47 |
| 48 | Anlernvorgang läuft - Position 48 |
| 49 | Anlernvorgang läuft - Position 49 |
| 50 | Anlernvorgang läuft - Position 50 |
| 51 | Anlernvorgang läuft - Position 51 |
| 52 | Anlernvorgang läuft - Position 52 |
| 53 | Anlernvorgang läuft - Position 53 |
| 54 | Anlernvorgang läuft - Position 54 |
| 55 | Anlernvorgang läuft - Position 55 |
| 56 | Anlernvorgang läuft - Position 56 |
| 57 | Anlernvorgang läuft - Position 57 |
| 58 | Anlernvorgang läuft - Position 58 |
| 59 | Anlernvorgang läuft - Position 59 |
| 60 | Anlernvorgang läuft - Position 60 |
| 61 | Anlernvorgang läuft - Position 61 |
| 62 | Anlernvorgang läuft - Position 62 |
| 63 | Anlernvorgang läuft - Position 63 |
| 64 | Anlernvorgang läuft - Position 64 |
| 65 | Anlernvorgang läuft - Position 65 |
| 66 | Anlernvorgang läuft - Position 66 |
| 67 | Anlernvorgang läuft - Position 67 |
| 68 | Anlernvorgang läuft - Position 68 |
| 69 | Anlernvorgang läuft - Position 69 |
| 70 | Anlernvorgang läuft - Position 70 |
| 71 | Anlernvorgang läuft - Position 71 |
| 72 | Anlernvorgang läuft - Position 72 |
| 73 | Anlernvorgang läuft - Position 73 |
| 74 | Anlernvorgang läuft - Position 74 |
| 75 | Anlernvorgang läuft - Position 75 |
| 76 | Anlernvorgang läuft - Position 76 |
| 77 | Anlernvorgang läuft - Position 77 |
| 78 | Anlernvorgang läuft - Position 78 |
| 79 | Anlernvorgang läuft - Position 79 |
| 80 | Anlernvorgang läuft - Position 80 |
| 81 | Anlernvorgang läuft - Position 81 |
| 82 | Anlernvorgang läuft - Position 82 |
| 83 | Anlernvorgang läuft - Position 83 |
| 84 | Anlernvorgang läuft - Position 84 |
| 85 | Anlernvorgang läuft - Position 85 |
| 86 | Anlernvorgang läuft - Position 86 |
| 87 | Anlernvorgang läuft - Position 87 |
| 88 | Anlernvorgang läuft - Position 88 |
| 89 | Anlernvorgang läuft - Position 89 |
| 90 | Anlernvorgang läuft - Position 90 |
| 91 | Anlernvorgang läuft - Position 91 |
| 92 | Anlernvorgang läuft - Position 92 |
| 93 | Anlernvorgang läuft - Position 93 |
| 94 | Anlernvorgang läuft - Position 94 |
| 95 | Anlernvorgang läuft - Position 95 |
| 96 | Anlernvorgang läuft - Position 96 |
| 97 | Anlernvorgang läuft - Position 97 |
| 98 | Anlernvorgang läuft - Position 98 |
| 99 | Anlernvorgang läuft - Position 99 |
| 100 | Anlernvorgang läuft - Position 100 |
| 101 | Anlernvorgang läuft - Position 101 |
| 102 | Anlernvorgang läuft - Position 102 |
| 103 | Anlernvorgang läuft - Position 103 |
| 104 | Anlernvorgang läuft - Position 104 |
| 105 | Anlernvorgang läuft - Position 105 |
| 106 | Anlernvorgang läuft - Position 106 |
| 107 | Anlernvorgang läuft - Position 107 |
| 108 | Anlernvorgang läuft - Position 108 |
| 109 | Anlernvorgang läuft - Position 109 |
| 110 | Anlernvorgang läuft - Position 110 |
| 111 | Anlernvorgang läuft - Position 111 |
| 112 | Anlernvorgang läuft - Position 112 |
| 113 | Anlernvorgang läuft - Position 113 |
| 114 | Anlernvorgang läuft - Position 114 |
| 115 | Anlernvorgang läuft - Position 115 |
| 116 | Anlernvorgang läuft - Position 116 |
| 117 | Anlernvorgang läuft - Position 117 |
| 118 | Anlernvorgang läuft - Position 118 |
| 119 | Anlernvorgang läuft - Position 119 |
| 120 | Anlernvorgang läuft - Position 120 |
| 121 | Anlernvorgang läuft - Position 121 |
| 122 | Anlernvorgang läuft - Position 122 |
| 123 | Anlernvorgang läuft - Position 123 |
| 124 | Anlernvorgang läuft - Position 124 |
| 125 | Anlernvorgang läuft - Position 125 |
| 126 | Anlernvorgang läuft - Position 126 |
| 127 | Anlernvorgang läuft - Position 127 |
| 128 | Anlernvorgang läuft - Position 128 |
| 129 | Anlernvorgang läuft - Position 129 |
| 130 | Anlernvorgang läuft - Position 130 |
| 131 | Anlernvorgang läuft - Position 131 |
| 132 | Anlernvorgang läuft - Position 132 |
| 133 | Anlernvorgang läuft - Position 133 |
| 134 | Anlernvorgang läuft - Position 134 |
| 135 | Anlernvorgang läuft - Position 135 |
| 136 | Anlernvorgang läuft - Position 136 |
| 137 | Anlernvorgang läuft - Position 137 |
| 138 | Anlernvorgang läuft - Position 138 |
| 139 | Anlernvorgang läuft - Position 139 |
| 140 | Anlernvorgang läuft - Position 140 |
| 141 | Anlernvorgang läuft - Position 141 |
| 142 | Anlernvorgang läuft - Position 142 |
| 143 | Anlernvorgang läuft - Position 143 |
| 144 | Anlernvorgang läuft - Position 144 |
| 145 | Anlernvorgang läuft - Position 145 |
| 146 | Anlernvorgang läuft - Position 146 |
| 147 | Anlernvorgang läuft - Position 147 |
| 148 | Anlernvorgang läuft - Position 148 |
| 149 | Anlernvorgang läuft - Position 149 |
| 150 | Anlernvorgang läuft - Position 150 |
| 151 | Anlernvorgang läuft - Position 151 |
| 152 | Anlernvorgang läuft - Position 152 |
| 153 | Anlernvorgang läuft - Position 153 |
| 154 | Anlernvorgang läuft - Position 154 |
| 155 | Anlernvorgang läuft - Position 155 |
| 156 | Anlernvorgang läuft - Position 156 |
| 157 | Anlernvorgang läuft - Position 157 |
| 158 | Anlernvorgang läuft - Position 158 |
| 159 | Anlernvorgang läuft - Position 159 |
| 160 | Anlernvorgang läuft - Position 160 |
| 161 | Anlernvorgang läuft - Position 161 |
| 162 | Anlernvorgang läuft - Position 162 |
| 163 | Anlernvorgang läuft - Position 163 |
| 164 | Anlernvorgang läuft - Position 164 |
| 165 | Anlernvorgang läuft - Position 165 |
| 166 | Anlernvorgang läuft - Position 166 |
| 167 | Anlernvorgang läuft - Position 167 |
| 168 | Anlernvorgang läuft - Position 168 |
| 169 | Anlernvorgang läuft - Position 169 |
| 170 | Anlernvorgang läuft - Position 170 |
| 171 | Anlernvorgang läuft - Position 171 |
| 172 | Anlernvorgang läuft - Position 172 |
| 173 | Anlernvorgang läuft - Position 173 |
| 174 | Anlernvorgang läuft - Position 174 |
| 175 | Anlernvorgang läuft - Position 175 |
| 176 | Anlernvorgang läuft - Position 176 |
| 177 | Anlernvorgang läuft - Position 177 |
| 178 | Anlernvorgang läuft - Position 178 |
| 179 | Anlernvorgang läuft - Position 179 |
| 180 | Anlernvorgang läuft - Position 180 |
| 181 | Anlernvorgang läuft - Position 181 |
| 182 | Anlernvorgang läuft - Position 182 |
| 183 | Anlernvorgang läuft - Position 183 |
| 184 | Anlernvorgang läuft - Position 184 |
| 185 | Anlernvorgang läuft - Position 185 |
| 186 | Anlernvorgang läuft - Position 186 |
| 187 | Anlernvorgang läuft - Position 187 |
| 188 | Anlernvorgang läuft - Position 188 |
| 189 | Anlernvorgang läuft - Position 189 |
| 190 | Anlernvorgang läuft - Position 190 |
| 191 | Anlernvorgang läuft - Position 191 |
| 192 | Anlernvorgang läuft - Position 192 |
| 193 | Anlernvorgang läuft - Position 193 |
| 194 | Anlernvorgang läuft - Position 194 |
| 195 | Anlernvorgang läuft - Position 195 |
| 196 | Anlernvorgang läuft - Position 196 |
| 197 | Anlernvorgang läuft - Position 197 |
| 198 | Anlernvorgang läuft - Position 198 |
| 199 | Anlernvorgang läuft - Position 199 |
| 200 | Anlernvorgang läuft - Position 200 |
| 201 | Anlernvorgang läuft - Position 201 |
| 202 | Anlernvorgang läuft - Position 202 |
| 203 | Anlernvorgang läuft - Position 203 |
| 204 | Anlernvorgang läuft - Position 204 |
| 205 | Anlernvorgang läuft - Position 205 |
| 206 | Anlernvorgang läuft - Position 206 |
| 207 | Anlernvorgang läuft - Position 207 |
| 208 | Anlernvorgang läuft - Position 208 |
| 209 | Anlernvorgang läuft - Position 209 |
| 210 | Anlernvorgang läuft - Position 210 |
| 211 | Anlernvorgang läuft - Position 211 |
| 212 | Anlernvorgang läuft - Position 212 |
| 213 | Anlernvorgang läuft - Position 213 |
| 214 | Anlernvorgang läuft - Position 214 |
| 215 | Anlernvorgang läuft - Position 215 |
| 216 | Anlernvorgang läuft - Position 216 |
| 217 | Anlernvorgang läuft - Position 217 |
| 218 | Anlernvorgang läuft - Position 218 |
| 219 | Anlernvorgang läuft - Position 219 |
| 220 | Anlernvorgang läuft - Position 220 |
| 221 | Anlernvorgang läuft - Position 221 |
| 222 | Anlernvorgang läuft - Position 222 |
| 223 | Anlernvorgang läuft - Position 223 |
| 224 | Anlernvorgang läuft - Position 224 |
| 225 | Anlernvorgang läuft - Position 225 |
| 226 | Anlernvorgang läuft - Position 226 |
| 227 | Anlernvorgang läuft - Position 227 |
| 228 | Anlernvorgang läuft - Position 228 |
| 229 | Anlernvorgang läuft - Position 229 |
| 230 | Anlernvorgang läuft - Position 230 |
| 231 | Anlernvorgang läuft - Position 231 |
| 232 | Anlernvorgang läuft - Position 232 |
| 233 | Anlernvorgang läuft - Position 233 |
| 234 | Anlernvorgang läuft - Position 234 |
| 235 | Anlernvorgang läuft - Position 235 |
| 236 | Anlernvorgang läuft - Position 236 |
| 237 | Anlernvorgang läuft - Position 237 |
| 238 | Anlernvorgang läuft - Position 238 |
| 239 | Anlernvorgang läuft - Position 239 |
| 240 | Anlernvorgang läuft - Position 240 |
| 241 | Anlernvorgang läuft - Position 241 |
| 242 | Anlernvorgang läuft - Position 242 |
| 243 | Anlernvorgang läuft - Position 243 |
| 244 | Anlernvorgang läuft - Position 244 |
| 245 | Anlernvorgang läuft - Position 245 |
| 246 | Anlernvorgang läuft - Position 246 |
| 247 | Anlernvorgang läuft - Position 247 |
| 248 | Anlernvorgang läuft - Position 248 |
| 249 | Anlernvorgang läuft - Position 249 |
| 250 | Anlernvorgang läuft - Position 250 |
| 251 | Anlernvorgang läuft - Position 251 |
| 252 | Anlernvorgang läuft - Position 252 |
| 253 | Anlernvorgang läuft - Position 253 |
| 254 | Start Anlernvorgang |
| 255 | Default / nicht angelernt |

### TAB_IM_KEYMODE

| WERT | TEXT |
| --- | --- |
| 0 | Default |
| 5 | Pers. |
| 255 | ungültig / nicht angelernt |

### TAB_IM_LOCKED_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | unverriegelt |
| 1 | verriegelt |
| 2 | Effektiv verriegelt, da inkonsistent |
| 255 | Ungültig |

### TAB_IM_OP_MODE1

| WERT | TEXT |
| --- | --- |
| 110 | LOCK_TRANSPORT |
| 120 | LOCK_BASE |
| 130 | LOCK_SERVER |
| 210 | DEACTIVATE_E5 |

### TAB_IM_OP_MODE2

| WERT | TEXT |
| --- | --- |
| 145 | LOCK_TRANSPORT |
| 135 | LOCK_BASE |
| 125 | LOCK_SERVER |
| 45 | DEACTIVATE_E5 |

### TAB_IM_PIA_NUMMER

| WERT | TEXT |
| --- | --- |
| 0 | Personalisierungskonfiguration 0 |
| 1 | Personalisierungskonfiguration 1 |
| 2 | Personalisierungskonfiguration 2 |
| 10 | Gast (nur für einige Status-Jobs) |
| 15 | Keine Personalisierung zugewiesen - unpersonalisiertes Profil |
| 255 | ungültig |

### TAB_IM_PRNG_STATE

| WERT | TEXT |
| --- | --- |
| 0 | PRNG nicht initialisiert |
| 1 | PRNG initialisierung läuft |
| 2 | PRNG initialisiert |
| 3 | ungültig |

### TAB_IM_PROFILE_UPD

| WERT | TEXT |
| --- | --- |
| 0 | Kein Update / NA (z.B. bei unbekanntem Transponder) |
| 1 | Update läuft |
| 2 | Update erfolgreich durchgeführt - Daten erfolgreich übertragen |
| 3 | Update erfolgreich durchgeführt - keine Änderung notwendig |
| 16 | Update nicht möglich (z.B. Kommunikationsfehler) |
| 255 | ungültig/unbekannt |

### TAB_IM_RESET_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 1 | IM |
| 3 | IM_VIN |
| 7 | IM_VIN_CONF |
| 63 | ALL |
| 255 | ALL_EXT |

### TAB_IM_SERVER_LOCK_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Server gesperrt |
| 0x01 | Server entsperrt |
| 0x02 | Schlüsselsuche läuft |
| 0xFF | Ungültiger Wert |

### TAB_IM_TRSP_COM_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | ERR_OK - kein Fehler |
| 1 | ERR_BASESTATION - Kommunikation mit ATIC164 gestört oder Resource anderweitig belegt |
| 2 | ERR_ANTENNA - Antenne Kurzschluss oder Leitungsbruch |
| 3 | ERR_TXINT - Tx Interrupt abgeschaltet, unspezifischer Kommunikationsfehler |
| 4 | ERR_RD_IDE - keine IDE vom Transponder empfangen |
| 5 | ERR_RD_RISC_EN - nicht unterstützt, nur HITAG2 |
| 6 | ERR_HTPRO_CFG - Fehler beim Übergang WAIT => CFG |
| 7 | ERR_HTPRO_PLAIN - Fehler beim Übergang WAIT => PLAIN |
| 8 | ERR_HTP_AUTH_TSI - Fehler beim TSI Empfang |
| 9 | ERR_HTP_AUTH_RESP - Fehler beim Empfang der Response während der Authentisierung |
| 10 | ERR_HTP_RDPG_PLAIN - Fehler beim Lesen einer Page in PLAIN |
| 11 | ERR_HTP_WRPG_PLAIN - Fehler beim Schreiben einer Page in PLAIN |
| 12 | ERR_HTP_RDBY_PLAIN - Fehler beim Lesen eines Bytes in PLAIN |
| 13 | ERR_HTP_WRBY_PLAIN - Fehler beim Schreiben eines Bytes in PLAIN |
| 14 | ERR_HTP_SELB_PLAIN - Fehler Block Select in PLAIN |
| 15 | ERR_HTP_RDPG_CFG - Fehler beim Lesen einer Page in CFG |
| 16 | ERR_HTP_WRPG_CFG - Fehler beim Schreiben einer Page in CFG |
| 17 | ERR_HTP_RDBY_CFG - Fehler beim Lesen eines Bytes in CFG |
| 18 | ERR_HTP_WRBY_CFG - Fehler beim Schreiben eines Bytes in CFG |
| 19 | ERR_HTP_RDPG_CIPHER - Fehler beim Lesen einer Page in CIPHER |
| 20 | ERR_HTP_WRPG_CIPHER - Fehler beim Schreiben einer Page in CIPHER |
| 21 | ERR_HTP_RDBY_CIPHER - Fehler beim Lesen eines Bytes in CIPHER |
| 22 | ERR_HTP_WRBY_CIPHER - Fehler beim Schreiben eines Bytes in CIPHER |
| 23 | ERR_HTP_SELB_CIPHER - Fehler Block Select in CIPHER |
| 255 | ungültig / unbekannter Fehler |

### TAB_IM_TRSP_GEN

| WERT | TEXT |
| --- | --- |
| 0 | reserviert |
| 1 | HT2: HiTag2 (NOT_SUPPORTED_ANYMORE) |
| 2 | HTP1: HTPro Gen 1 (L6 bis einschl. SOP 2013) RüKo |
| 8 | HTP2: (DEFAULT) HTPro Gen 2 (Ab 35UP) |
| 15 | ungültig (noch nicht gesetzt) |

### TAB_IM_TRSP_GEN_ARG

| WERT | TEXT |
| --- | --- |
| 2 | HTP1 |
| 8 | HTP2 |

### TAB_IM_TRSP_INIT_MODE

| WERT | TEXT |
| --- | --- |
| 1 | NORMAL |
| 0 | DEVELOPMENT |
| 100 | FORCE_REREAD |
| 200 | SPECIAL_EMV_ON |
| 201 | SPECIAL_EMV_OFF |

### TAB_IM_TRSP_INTERFACE

| WERT | TEXT |
| --- | --- |
| 0 | CG-Antenne |
| 1 | TRSP-Spule |
| 255 | ungültig |

### TAB_IM_TRSP_READ

| WERT | TEXT |
| --- | --- |
| 0 | NA (z.B. bei unbekannter Transponderkonfiguration oder kein Transponder) |
| 1 | Read läuft |
| 2 | Read erfolgreich durchgeführt |
| 16 | Read nicht möglich (z.B. Kommunikationsfehler) |
| 255 | ungültig/unbekannt |

### TAB_IM_WRITE_MODE

| WERT | TEXT |
| --- | --- |
| 1 | Direktschreiben des SecretKey (L2, L3, L4) |
| 2 | Direktschreiben des SecretKey (L6) |
| 3 | Direktschreiben des SecretKey |
| 10 | 35UP initial |
| 255 | Ungültig |

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

### TAB_INNENLICHT_VERBAUORT_LIN

| WERT | TEXT |
| --- | --- |
| 0x01 | Innenbeleuchtung Fußraum Fahrer vorne |
| 0x02 | Innenbeleuchtung Fußraum Fahrer hinten |
| 0x03 | Innenbeleuchtung Fußraum Beifahrer vorne |
| 0x04 | Innenbeleuchtung Fußraum Beifahrer hinten |
| 0x05 | Innenbeleuchtung Fahrertür vorne oben |
| 0x06 | Innenbeleuchtung Fahrertür vorne Mitte |
| 0x07 | Innenbeleuchtung Fahrertür vorne unten |
| 0x08 | Innenbeleuchtung Fahrertür vorne Kartentasche |
| 0x09 | Innenbeleuchtung Fahrertür hinten oben |
| 0x0A | Innenbeleuchtung Fahrertür hinten unten |
| 0x0B | Innenbeleuchtung Fahrertür hinten Kartentasche |
| 0x0C | Innenbeleuchtung Beifahrertür vorne oben |
| 0x0D | Innenbeleuchtung Beifahrertür vorne Mitte |
| 0x0E | Innenbeleuchtung Beifahrertür vorne unten |
| 0x0F | Innenbeleuchtung Beifahrertür vorne Kartentasche |
| 0x10 | Innenbeleuchtung Beifahrertür hinten oben |
| 0x11 | Innenbeleuchtung Beifahrertür hinten unten |
| 0x12 | Innenbeleuchtung Beifahrertür hinten Kartentasche |
| 0x13 | Innenbeleuchtung I-Tafel Fahrer oben |
| 0x14 | Innenbeleuchtung I-Tafel Fahrer unten |
| 0x15 | Innenbeleuchtung I-Tafel oben Mitte |
| 0x16 | Innenbeleuchtung I-Tafel unten Mitte |
| 0x17 | Innenbeleuchtung I-Tafel oben Beifahrer |
| 0x18 | Innenbeleuchtung I-Tafel unten Beifahrer |
| 0x19 | Innenbeleuchtung B-Säule Fahrer |
| 0x1A | Innenbeleuchtung B-Säule Beifahrer |
| 0x1B | Innenbeleuchtung Lehne Fahrersitz |
| 0x1C | Innenbeleuchtung Lehne Beifahrersitz |
| 0x1D | Innenbeleuchtung Centerstack |
| 0x1E | Innenbeleuchtung Mittelkonsole Ablagefach |
| 0x1F | Innenbeleuchtung Gangwahlschalter links |
| 0x20 | Innenbeleuchtung Gangwahlschalter rechts |
| 0xFF | Wert ungültig |

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

### TAB_JBR_STATUS_RELAY

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais ausgeschaltet |
| 0x01 | Relais eingeschaltet |
| 0x02 | Relais nicht verbaut/diagnostiziert |
| 0x03 | ungültig |

### TAB_KEYSEARCHMODE

| WERT | TEXT |
| --- | --- |
| 0x03 | SEARCHMODE_CE_DRD |
| 0x04 | SEARCHMODE_CE_DRDR |
| 0x05 | SEARCHMODE_CE_PSD |
| 0x06 | SEARCHMODE_CE_PSDR |
| 0x07 | SEARCHMODE_TRUNK_OUTER |
| 0x0D | SEARCHMODE_TRUNK_INNER |
| 0x0E | SEARCHMODE_TRANSPORT_MODE |
| 0x0F | SEARCHMODE_CG_MIDDLE |
| 0x10 | SEARCHMODE_CG_REAR |
| 0x11 | SEARCHMODE_TRUNK_INNER_LEFT (not used in BDC2015) |
| 0x12 | SEARCHMODE_TRUNK_INNER_RIGHT (not used in BDC2015) |
| 0x15 | SEARCHMODE_COMPARTMENT |
| 0x16 | SEARCHMODE_TRUNK_OUTER_INNER |
| 0x18 | SEARCHMODE_FRONT_OUTER_INNER |
| 0x19 | SEARCHMODE_COMPARTMENT_BUMPER |
| 0x1A | SEARCHMODE_BUMPER |
| 0x21 | SEARCHMODE_SLEEP_RESPONSE_PING |
| 0x27 | SEARCHMODE_CAR_LOWERING |
| 0x28 | SEARCHMODE_CKT_MOTION_SENSOR_CONFIG |
| 0x80 | SEARCHMODE_PING (not used in BDC2015) |
| 0x81 | SEARCHMODE_SD |
| 0x82 | SEARCHMODE_DIAG_ANT_CALIB (not used in BDC2015) |
| 0x83 | SEARCHMODE_NEXTIDG (not used in BDC2015) |
| 0x84 | SEARCHMODE_INT_BROADCAST (not used in BDC2015) |
| 0x85 | SEARCHMODE_ANT_TEST (not used in BDC2015) |
| 0x86 | SEARCHMODE_PING_LB (left/bumper) (not used in BDC2015) |
| 0x87 | SEARCHMODE_PING_RB (rear/bumper) (not used in BDC2015) |
| 0x88 | SEARCHMODE_PING LR (left/right) |
| 0x89 | SEARCHMODE_WEL_CKT |
| 0x8A | SEARCHMODE_APU_CKT |
| 0x8B | SEARCHMODE_WAL_CKT |
| 0x8C | SEARCHMODE_PREAUTH_CKT |
| 0x8D | SEARCHMODE_CKT_AUTH |

### TAB_KOMFORTKURZSCHLUSSCOUNTER_AUSGANG

| WERT | TEXT |
| --- | --- |
| 0x01 | Frontwischer diskret |
| 0x02 | Heckwischer |
| 0x03 | Heckwischer_2 / Heckscheibenheizung_2 |
| 0x04 | Scheibenwaschpumpe vorne |
| 0x05 | Schweibenwaschpumpe hinten |
| 0x06 | Scheinwerferreinigungspumpe |
| 0x07 | KL50 Anlasser |
| 0x08 | KL30_B_RELAY_FRONT |
| 0x09 | KL30_B_RELAY_REAR |
| 0x0A | KL15_N_RELAY_FRONT |
| 0x0B | KL15_N_RELAY_REAR |
| 0x0C | KL30_F_RELAY_REAR_ON |
| 0x0D | KL30_F_RELAY_REAR_OFF |
| 0x0E | KL30B_AIRBAG |
| 0x0F | Magnetkupplung |
| 0x10 | Kompressorventil |
| 0x11 | Heizungsabsperrventil - Wasserventil Fahrer |
| 0x12 | Nicht mehr auswählbar - Wasserventil Beifahrer |
| 0x13 | Zusatzwasserpumpe |
| 0x14 | Heckscheibenschloss |
| 0x15 | Heckklappenschloss |
| 0x16 | Aussenspiegelheizung diskret |
| 0x17 | Waschdüsenheizung |
| 0x18 | Heckscheibenheizung |
| 0x19 | Sonnenrollo hinten öffnen |
| 0x1A | Sonnenrollo hinten schliessen |
| 0x1B | 5V0 Sensorausgänge |
| 0x1C | Reserve1 |
| 0x1D | Reserve2 |
| 0x1E | Reserve3 |
| 0x1F | Reserve4 |
| 0xFE | ALLE |
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
| 0x14 | Ambientes Licht |
| 0x15 | Such- und Funktionslicht |
| 0x19 | OVT |
| 0xFF | ungültiger Wert |
| 0xFFFF | Wert ungültig |

### TAB_LA_ERRORBITS

| WERT | TEXT |
| --- | --- |
| 0 | CONST_SM_ERROR_NO_ERROR |
| 1 | CONST_SM_ERROR_LEFT |
| 2 | CONST_SM_ERROR_RIGHT |
| 3 | CONST_SM_ERROR_BOTH_SIDES |
| 4 | CONST_SM_ERROR_HOR |
| 8 | CONST_SM_ERROR_VERT |
| 16 | CONST_SM_ERROR_FRONT |
| 32 | CONST_SM_ERROR_REAR |
| 64 | CONST_SM_ERROR_DEPENDENT |
| 128 | CONST_SM_ERROR_TOTAL |
| 0xFF | Wert ungültig |

### TAB_LA_ERRORINFORMATION

| WERT | TEXT |
| --- | --- |
| 0x01 | dtcHeadlightRangeAdjustment |
| 0x02 | ccmHeadlightRangeAdjustment |
| 0x03 | dtcccmHeadlightRangeAdjustement |
| 0x04 | dtcDynamicLightFunctions |
| 0x08 | ccmDynamicLightFunctions |
| 0x0C | dtcccmDynamicLightFunctions |
| 0x10 | dtcThumbWheel |
| 0x20 | ccmThumbWheel |
| 0x30 | dtcccmThumbWheel |
| 0x40 | dtcLceMainBeamAssistFailed |
| 0x80 | ccmLceMainBeamAssistFailed |
| 0xC0 | dtcccmLceMainBeamAssistFailed |

### TAB_LA_FUNCTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0 | FUNCTIONSTATE_OFF |
| 1 | FUNCTIONSTATE_DISABLED |
| 2 | FUNCTIONSTATE_INIT |
| 3 | FUNCTIONSTATE_STANDBY |
| 4 | FUNCTIONSTATE_ACTIVE |
| 5 | FUNCTIONSTATE_DIAG |
| 6 | FUNCTIONSTATE_ERROR |
| 0xFF | Wert ungültig |

### TAB_LA_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 11 | NOT_ACTIVE_FRONT_REAR |
| 12 | FRONT_ACTIVE_REAR_NOT ACTIVE |
| 13 | FRONT_ERROR_REAR_NOT ACTIVE |
| 21 | FRONT_NOT_ACTIVE_REAR_ACTIVE |
| 22 | FRONT_REAR_ACTIVE |
| 23 | ERROR_FRONT_REAR_ACTIVE |
| 31 | FRONT_NOT_ACTIVE_REAR_ERROR |
| 32 | FRONT_ACTIVE_REAR_ERROR |
| 33 | FRONT_ERROR_REAR_ERROR |
| 0xFF | Wert ungültig |

### TAB_LED_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | alle_LEDs_ausser_FES |
| 0x01 | FES SPORT |
| 0x02 | FES COMFORT |
| 0x03 | FES ECOPRO |
| 0x04 | FES ADAPTIVE |

### TAB_LENKRADHEIZUNG_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkradheizung LED aus |
| 0x01 | Lenkradheizung LED ein |
| 0x03 | Lenkradheizung LED nicht verbaut |
| 0xFF | Wert ungültig |

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

### TAB_LICHTSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Stellung Neutral |
| 0x01 | Stellung Standlicht |
| 0x02 | Stellung Abblendlicht |
| 0x03 | Stellung Fahrlichtkontrolle |
| 0xFF | ungültiges Signal |

### TAB_LICHT_FUSI_KODIERPARAMETER

| WERT | TEXT |
| --- | --- |
| 0x01 | FS_AL |
| 0x02 | FS_FRA_V |
| 0x03 | FS_BL |
| 0xFF | Wert ungültig |

### TAB_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aussage |
| 0x01 | unterhalb Limit |
| 0x02 | normal Zustand |
| 0x03 | oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_LIN_CODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Service nicht angefordert Wird zurückgegeben, wenn ein RequestRoutineResult ohne vorheriges StopRoutine aufgerufen wird |
| 0x01 | Auftrag angenommen, aber noch nicht ausgeführt Auftrag durch BDC angenommen, aber noch nicht an IFE verschickt |
| 0x02 | Routine kann nicht ausgeführt werden Auftrag kann nicht an die IFE verschickt werden |
| 0x03 | Routine wird ausgeführt Auftrag angestossen, aber noch nicht beendet (CAF-ID ist erfolgreich -ungültig- in die IFE geschrieben worden. |
| 0x04 | Routine erfolgreich beendet Auftrag erfolgreich abgeschlossen, CAF-ID ist erfolgreich und gültig aus der IFE zurückgelesen |
| 0x05 | Routine beendet mit Fehler Auftrag fehlerhaft, nach Abarbeitung der LIN-TP-Codierung ist die CAF-ID -ungültig- aus der IFE zurückgelesen |
| 0xFF | Wert ungültig |

### TAB_LIN_METHODE_ADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Busshunt |
| 0x01 | extra wire daisy chain |
| 0xFF | Wert ungültig |

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

### TAB_MIRROR_RTE_BUFFER

| WERT | TEXT |
| --- | --- |
| 0x00 | Explicit mirroring mask 0x01 |
| 0x01 | Explicit mirroring mask 0x02 |
| 0xFE | Explicit mirroring mask 0xFE |
| 0xFF | Automatic mirroring |

### TAB_MULTIFUNKTIONS_LENKRAD

| WERT | TEXT |
| --- | --- |
| 0x01 | Interner Elektronik Fehler |
| 0x02 | Tippraendel Widerspruch |
| 0x04 | Raendel Widerspruch |
| 0x08 | Wippe Widerspruch |

### TAB_M_TASTER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Dauerbetätigung |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Kurzschluss nach Masse |
| 0xFF | ungültig / unplausibel |

### TAB_M_TASTER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gedrückt |
| 0x01 | Gedrückt |
| 0xFF | Wert ungültig |

### TAB_NFC_ANTENNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Antenne defekt |
| 1 | System i.O. |
| 2 | Antenne fehlt |
| 255 | ungültig |

### TAB_NFC_READER_ID

| WERT | TEXT |
| --- | --- |
| 14 | READER_INNER_FRONT |

### TAB_NFC_READER_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Reader nicht aktiv |
| 1 | Reader aktiv |
| 2 | Reader aktiv, Gerät bzw. Gegenstelle erkannt |
| 3 | Reader aktiv, RF-Fehler |
| 255 | ungültig |

### TAB_PWF_SF_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | OSFG |
| 0x01 | Diagnose Timeout |
| 0x02 | Sonstiges |
| 0xFF | Wert ungültig |

### TAB_PWF_TRIGGER_ZUSTANDSWECHSEL

| WERT | TEXT |
| --- | --- |
| 0x01 | Wohnen_durch_Betätigung_Schiebehebedach-Taster_PWF_MASTER_544 |
| 0x02 | Wohnen_durch_Betätigung_des_Innenlichttasters_PWF_MASTER_126 |
| 0x03 | Wohnen_durch_Betätigung_Cabrioverdeck-Taster_PWF_MASTER_553 |
| 0x04 | Wohnen_durch_Betätigung_Lenkstockhebel_links_PWF_MASTER_560 |
| 0x05 | Wohnen_durch_Betätigung_Fernlicht-Assistent-Taste_PWF_MASTER_564 |
| 0x06 | Wohnen_durch_Betätigung_Lenkstockhebel_rechts_PWF_MASTER_565 |
| 0x07 | Wohnen_durch_Betätigung_Drehschalter_Licht_PWF_MASTER_570 |
| 0x08 | Wohnen_durch_Betätigung_Nebelscheinwerfer_PWF_MASTER_571 |
| 0x09 | Wohnen_durch_Betätigung_Nebelschlussleuchte_PWF_MASTER_572 |
| 0x0A | Wohnen_durch_Betätigung_Leuchtweitenregulierung_PWF_MASTER_559 |
| 0x0B | Wohnen_durch_Bedienen_eines_Fensterhebers_PWF_MASTER_500 |
| 0x0C | Wohnen_durch_Betätigung_Rollo-Tasten_PWF_MASTER_573 |
| 0x0D | Wohnen_durch_Betätigung_Spiegelverstellung_PWF_MASTER_574 |
| 0x0E | Wohnen_durch_Betätigung_Spiegel-Beiklappen_PWF_MASTER_575 |
| 0x11 | Wohnen_durch_Bedienen_des_Sarah-Tasters_PWF_MASTER_497 |
| 0x12 | Wohnen_durch_Betätigung_Modus-Taste_PWF_MASTER_379 |
| 0x13 | Wohnen_durch_Betätigung_Eject-Button_PWF_MASTER_377 |
| 0x14 | Wohnen_durch_Betätigung_AM_FM_Verkehrsinformationen-Taste_PWF_MASTER_380 |
| 0x15 | Wohnen_durch_Betätigung_Functional-Bookmark-Taste_PWF_MASTER_381 |
| 0x18 | Wohnen_durch_Betätigung_einer_BE_MIKO-Taste_PWF_MASTER_628 |
| 0x19 | Wohnen_durch_Betätigung_Heckspoiler-Taster_PWF_MASTER_549 |
| 0x1A | Wohnen_durch_Betätigung_MSA-Taster_PWF_MASTER_552 |
| 0x1B | Wohnen_durch_Betätigung_ZBE-Taste_Front_PWF_MASTER_382 |
| 0x1C | Wohnen_durch_Betätigung_ZBE-Taste_Fond_PWF_MASTER_414 |
| 0x1D | Wohnen_durch_Schieben_des_ZBE-Drehstellers_Front_PWF_MASTER_383 |
| 0x1E | Wohnen_durch_Schieben_des_ZBE-Drehstellers_Fond_PWF_MASTER_415 |
| 0x1F | Wohnen_durch_Drehen_des_ZBE-Drehstellers_Front_PWF_MASTER_384 |
| 0x20 | Wohnen_durch_Drehen_des_ZBE-Drehstellers_Fond_PWF_MASTER_416 |
| 0x21 | Wohnen_durch_Betätigung_Lautstärke-Wippe_PWF_MASTER_554 |
| 0x22 | Wohnen_durch_Betätigung_Toggle-Taste_PWF_MASTER_555 |
| 0x23 | Wohnen_durch_Betätigung_Menu-Walze_PWF_MASTER_556 |
| 0x24 | Wohnen_durch_Betätigung_Telefon-Taste_PWF_MASTER_557 |
| 0x25 | Wohnen_durch_Betätigung_Push-to-talk-Taste_PWF_MASTER_558 |
| 0x26 | Wohnen_durch_Betätigung_Start-Stopp-Taster_PWF_MASTER_104 |
| 0x27 | Wohnen_durch_Betätigung_Entertainment-Button_(Kurzdruck)_PWF_MASTER_378 |
| 0x28 | Wohnen_durch_Betätigung_Zentralverriegelungstaster/-wippe_PWF_MASTER_625 |
| 0x29 | Wohnen_durch_Betätigung_Motorhaube_PWF_MASTER_124 |
| 0x2A | Standfunktion_durch_Betätigung_Motorhaube_PWF_MASTER_124 |
| 0x2B | Wohnen_durch_Änderung_des_Heckklappenkontakts_PWF_MASTER_114 |
| 0x2C | Wohnen_durch_Änderung_des_Heckklappenkontakts_PWF_MASTER_114 |
| 0x2D | Wohnen_durch_Betätigung_des_Heckscheibentasters_PWF_MASTER_116 |
| 0x2E | Wohnen_durch_Betätigung_des_Heckklappentasters_PWF_MASTER_117 |
| 0x2F | Wohnen_durch_Betätigung_des_Sichern-Schalters_an_der_Heckklappe_PWF_MASTER_125 |
| 0x30 | Wohnen_durch_Betätigung_Funkschlüssel_PWF_MASTER_118 |
| 0x31 | Wohnen_durch_ZV_entriegeln_PWF_MASTER_221 |
| 0x32 | Wohnen_durch_Öffnen_oder_Schließen_der_Fahrertür_hinten_PWF_MASTER_109 |
| 0x33 | Wohnen_durch_Öffnen_oder_Schließen_der_Beifahrertür_hinten_PWF_MASTER_110 |
| 0x34 | Wohnen_durch_Schließen_der_Fahrertür_PWF_MASTER_650 |
| 0x35 | Wohnen_durch_Schließen_der_Beifahrertür_PWF_MASTER_651 |
| 0x36 | Wohnen_durch_RCP-TasteBedienen_PWF_MASTER_652 |
| 0x37 | Wohnen_durch_Öffnen_der_Fahrertür_PWF_MASTER_107 |
| 0x38 | Wohnen_durch_Öffnen_der_Beifahrertür_PWF_MASTER_108 |
| 0x39 | Parken_durch_ZV_sichern_PWF_MASTER_130 |
| 0x3A | Standfunktion_durch_ZV_sichern_PWF_MASTER_130 |
| 0x3B | Fahren_durch_Fahrbereitschaft_hergestellt_PWF_MASTER_132 |
| 0x3C | Fahrbereitschaft_beenden_durch_Fahrbereitschaft_beendet_PWF_MASTER_275 |
| 0x3D | Pruefen_Analyse_Diagnose_durch_Analyse_starten_PWF_MASTER_134 |
| 0x3E | Wohnen_durch_Analyse_beenden_PWF_MASTER_285 |
| 0x3F | Fahrbereitschaft_herstellen_durch_Fahrwunsch_erkannt_PWF_MASTER_136 |
| 0x40 | Wohnen_durch_Fahrwunsch_zurueckgenommen_PWF_MASTER_278 |
| 0x41 | Fahrbereitschaft_beenden_durch_Fahrwunsch_zurueckgenommen_PWF_MASTER_278 |
| 0x42 | Standfunktion_durch_Timeout_Wohnen_Kunde_anwesend_PWF_MASTER_145 |
| 0x43 | Parken_BN_iO_durch_Timeout_Kunde_abwesend_abgelaufen_PWF_MASTER_146 |
| 0x44 | Standfunktion_durch_Nachladegrenze_erreicht_PWF_MASTER_507 |
| 0x45 | Parken_BN_niO_durch_Bordnetzfehler_erkannt_PWF_MASTER_238 |
| 0x46 | Parken_BN_iO_durch_Pruefung_BN_Fehler_PWF_MASTER_534 |
| 0x47 | Parken_BN_niO_durch_TimeOutTransportModus_PWF_MASTER_412 |
| 0x48 | Wohnen_durch_Erstes_Oeffnen_FAT_nach_Fahrt_PWF_MASTER_493 |
| 0x49 | Standfunktion_durch_Abschaltung_durch_Kunden_PWF_MASTER_517 |
| 0x4A | Standfunktion_durch_Insassenausstieg_PWF_MASTER_629 |
| 0x4B | Standfunktion_durch_OSFG_erreicht_PWF_MASTER_200 |
| 0x4C | Standfunktion_durch_Virtuelle_Batterie_entleert_PWF_MASTER_532 |
| 0x4D | Standfunktion_durch_Standfunktion_aktiv_PWF_MASTER_196 |
| 0x4E | Standfunktion_durch_Änderung_des_Heckklappenkontakts_PWF_MASTER_114 |
| 0x4F | Standfunktion_durch_Änderung_des_Heckscheibenkontakts_PWF_MASTER_115 |
| 0x50 | Standfunktion_durch_Betätigung_des_Heckscheibentasters_PWF_MASTER_116 |
| 0x51 | Standfunktion_durch_Betätigung_des_Heckklappentasters_PWF_MASTER_117 |
| 0x52 | Standfunktion_durch_Betätigung_des_Sichern-Schalters_an_der_Heckklappe_PWF_MASTER_125 |
| 0x53 | Standfunktion_durch_FunkschlüsselBedienen_PWF_MASTER_118 |
| 0x54 | Standfunktion_durch_ZV_entriegeln_PWF_MASTER_221 |
| 0x55 | Standfunktion_durch_Öffnen_oder_Schließen_der_Fahrertür_hinten_PWF_MASTER_109 |
| 0x56 | Standfunktion_durch_Öffnen_oder_Schließen_der_Beifahrertür_hinten_PWF_MASTER_110 |
| 0x57 | Standfunktion_durch_Schließen_der_Fahrertür_PWF_MASTER_650 |
| 0x58 | Standfunktion_durch_Schließen_der_Beifahrertür_PWF_MASTER_651 |
| 0x59 | Standfunktion_durch_RCP-TasteBedienen_PWF_MASTER_652 |
| 0x5A | Parken_BN_niO_durch_Diagnose_PWF_MASTER_403 |
| 0x5B | Parken_BN_iO_durch_Diagnose_PWF_MASTER_403 |
| 0x5C | Standfunktion_durch_Diagnose_PWF_MASTER_403 |
| 0x5D | Wohnen_durch_Diagnose_PWF_MASTER_403 |
| 0x5E | Pruefen_Analyse_Diagnose_durch_Diagnose_PWF_MASTER_403 |
| 0x61 | Fahrbereitschaft_beenden_durch_Diagnose_PWF_MASTER_403 |
| 0x62 | Parken_BN_niO_durch_Dienst_PWF_MASTER_430 |
| 0x63 | Parken_BN_iO_durch_Dienst_PWF_MASTER_430 |
| 0x64 | Standfunktion_durch_Dienst_PWF_MASTER_430 |
| 0x65 | Wohnen_durch_Dienst_PWF_MASTER_430 |
| 0x6A | Wohnen_durch_beenden_Fahrbereitschaft |
| 0x6B | Wohnen_durch_Klemme15HW_PWF_MASTER_750 |
| 0x6C | Wohnen_durch_Betätigung_Heckklappentaster_Fußraum_Fahrer_PWF_MASTER_744 |

### TAB_PWF_ZUSTAND_VOR_WARTEZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Parken_BN_niO |
| 0x01 | Parken_BN_iO |
| 0x02 | Wohnen |

### TAB_RESERVE_0

| WERT | TEXT |
| --- | --- |
| 0x0 | reserviert |

### TAB_RESERVE_RESULT

| WERT | TEXT |
| --- | --- |
| 0xFD | Reserve Byte wegen SGBD-Kompatibilität. |
| 0xFF | Wert ungültig |

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
| 0x03 | Fehler Schaltpaddle |
| 0x05 | Schaltwippe Tip minus betätigt und entprellt |
| 0x06 | Schaltwippe Tip plus betätigt und entprellt |
| 0xFF | Signal ungültig |

### TAB_SENSOR_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht verbaut (per Codierparameter als nicht vorhanden gekennzeichnet) |
| 1 | Verbaut & Antwort auf Statusanfrage erhalten |
| 2 | Keine Antwort auf Statusanfrage erhalten (per Codierparameter aber als vorhanden gekennzeichnet) |
| 3 | Fehlerhaft verbaut (per Codierparameter als nicht vorhanden gekennzeichnet, aber verbaut) |
| 255 | ungültig |

### TAB_SHD_FH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_SITZEXT_HINTEN_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert (FAH und BFH) |
| 0x01 | Kodiert (FAH und BFH) |
| 0x02 | Nur FAH kodiert |
| 0x03 | Nur BFH kodiert |

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
| 0x00 | Nicht kodiert (FA und BF) |
| 0x01 | Kodiert  (FA und BF) |
| 0x02 | Nur FA kodiert |
| 0x03 | Nur BF kodiert |

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

### TAB_SMO_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0 | keine Anforderungsbotschaft von SMO erhalten |
| 1 | Anforderungsbotschaft von SMO erhalten |
| 255 | Ungültig/Unbekannt |

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
| 0x00 | Kein Fahrzeugtyp definiert |
| 0xFE | Dynamische Parametrierung |
| 0xFF | Ungültiger Signal |

### TAB_SMO_VERBAU

| WERT | TEXT |
| --- | --- |
| 0 | kein Smart Opener/Closer vorhanden |
| 1 | Smart Opener/Closer vorhanden |
| 255 | Ungültig/Unbekannt |

### TAB_SONNENROLLO_SCHALTER_HAENGT

| WERT | TEXT |
| --- | --- |
| 0x00 | Schalter HL Sonnenschutzrollo |
| 0x01 | Schalter HR Sonnenschutzrollo |
| 0x02 | Schalter Heckrollo Sonnenschutzrollo |
| 0x03 | Schalter Abschaltung Panoramadach |
| 0xFF | Ungültig |

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

### TAB_STATUS_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster links betätigt |
| 0x02 | Taster rechts betätigt |
| 0xFF | Signal ungültig |

### TAB_STATUS_UNTERBRECHUNG

| WERT | TEXT |
| --- | --- |
| 0 | Fehler Keine Unterbrechung / kein Kurzschluss |
| 1 | Rote LED ausgefallen Keine Beschreibung vorhanden |
| 2 | Grüne LED ausgefallen Keine Beschreibung vorhanden |
| 3 | Blaue LED ausgefallen Keine Beschreibung vorhanden |
| 4 | Weiße LED ausgefallen Keine Beschreibung vorhanden |
| 7 | Signal ungültig Keine Beschreibung vorhanden |

### TAB_STEUERPARAMETER

| WERT | TEXT |
| --- | --- |
| 0x01 | STR |
| 0x02 | STPR |
| 0x03 | RRR |

### TAB_ST_CENG_DRV

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor steht sicher |
| 0x01 | Motor startet |
| 0x02 | Motor läuft selbstständig |
| 0x03 | Motor im Auslauf |
| 0x0D | Funktionsschnittstelle ist nicht vorhanden |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |

### TAB_ST_DRVG_RDI_DRV

| WERT | TEXT |
| --- | --- |
| 0x01 | Keine Fahrbereitschaft |
| 0x02 | Fahrbereitschaft |
| 0x0D | Funktionsschnittstelle nicht vorhanden |
| 0x0E | Reserviert |
| 0x0F | Signal unbefüllt |

### TAB_SUBFUNCTION_31

| WERT | TEXT |
| --- | --- |
| 0x01 | StartRoutine |
| 0x02 | StopRoutine |
| 0x03 | RequestRoutineResults |

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

### TAB_SW_COMPONENTS

| WERT | TEXT |
| --- | --- |
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
| 0x16 | SwcFesMaster |
| 0x17 | SwcPwClientRear |
| 0x18 | BdcBuild |
| 0x19 | SwcLightIntensityController |
| 0x20 | SwcFesCoordInt |
| 0xFF | unknown |

### TAB_SZL_LENKSTOCK_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x01 | Unzulaessiger Code |
| 0x02 | Unplausibles Signal BC/FLA-Taster |
| 0x03 | Taster haengt (FAS/ BC/FLA) |

### TAB_SZL_LENKSTOCK_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Unzulaessiger Code |
| 0x01 | Intervall-Raendel defekt |
| 0x02 | Taster Regensensor unplausibles Signal |
| 0x03 | LED-Taster Regensensor hat Kurzschluss nach Masse |
| 0x04 | Taster haengt (SWS, AIC) |

### TAB_TAGE_SPERRSTATUS_ARG

| WERT | TEXT |
| --- | --- |
| 0 | Sperren |
| 1 | Freigeben |

### TAB_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | DTC Taste |
| 0x02 | FES Taste |
| 0x03 | SA Taste |
| 0xFE | andere Taste |
| 0xFF | nicht definiert |

### TAB_TASTEN_AUDIO

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE_TASTEN |
| 0x01 | MODE |
| 0x02 | EJECT |
| 0x03 | SUCHLAUF_LI |
| 0x04 | SUCHLAUF_RE |
| 0x05 | EIN_AUS |
| 0x06 | TP |

### TAB_TASTER_BEMIKO

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gedrückt |
| 0x01 | gedrückt |
| 0x02 | berührt |
| 0x03 | Signal ungültig/Fehler/nicht vorhanden |

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

### TAB_TASTER_ROLLO

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht gedrückt |
| 0x01 | Taster gedrückt |
| 0x03 | ungültig |

### TAB_THERMOMONITOR_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (Übersteuert) |
| 0x01 | Thermo 90 aktiv (Übersteuert) |
| 0x02 | Thermo 100 aktiv (Übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |

### TAB_THS_FFB_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | THS1 |
| 0x01 | THS2 |
| 0x03 | FFB |

### TAB_TLC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aussage |
| 0x01 | Unterhalb Limit |
| 0x02 | Normalzustand |
| 0x03 | Oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_TRSP_AKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0 | Transponderspule für 10 Sekunden aktivieren (default) |
| 1 | Transponderspule sofort deaktivieren |

### TAB_TYP_FEHLER_HERSTELLUNG_FB

| WERT | TEXT |
| --- | --- |
| 0x01 | ST_DRVG_RDI_DRV nicht -FB Herstellen- nach 3000ms |
| 0x02 | ST_DRVG_RDI_DRV wechselt nach -Keine Fahrbereitschaft- |
| 0x03 | Schlüsselauthentisierung nicht gegeben |
| 0x04 | Montagemode aktiv |
| 0x05 | TCM_STARTLOCK_BRAKE und TCM_STARTLOCK_CLUTCH auscodiert |
| 0x06 | ST_DRVG_RDI_DRV nicht -Keine Fahrbereitschaft- in KL15-Ein |
| 0x07 | Ladekabel gesteckt (ST_CHGWR_PLGD) |
| 0xFF | Wert ungültig |

### TAB_UGDO_LAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Rest Europa |
| 0x01 | Frankreich |
| 0x02 | U.K. |
| 0x03 | Italien |
| 0x04 | USA |
| 0xFF | ungültiger Wert |

### TAB_UW_CRC_OR_ALIVE_FAILURE

| WERT | TEXT |
| --- | --- |
| 1 | CRC Failure |
| 2 | Alive Failure |
| 255 | Unbekannt/Ungültig |

### TAB_UW_DEVICE_ID

| WERT | TEXT |
| --- | --- |
| 0 | deviceIdIC1101 Interior |
| 1 | deviceIdIC1060 Rear |
| 2 | deviceIdIC1000 Front |
| 3 | deviceIdIC1100 Front |
| 4 | deviceIdIC1102 Front Aux |
| 5 | deviceIdIC1080 Rear |
| 6 | deviceIdIC1020 Front |
| 7 | deviceIdIC1040 Rear |

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
| 15 | PCU500 (Nachladefunktion) aktiv |
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
| 0 | No error |
| 2 | Wrong CAF CRC |
| 3 | Wrong endianess |
| 4 | Initial Values unknown |
| 7 | Input not handled |
| 8 | Input Value not handled (Index: RulePropertyID, Value) |
| 9 | LogLamp Tree not found (Index: LogLampID) |
| 10 | No valid RampId from LogLamp (Index: LogLampID) |
| 11 | Ramp Parameters not found (Index: RampId) |
| 13 | no LogLamp = OutputChannel assignment (Index: LogLampID) |
| 15 | Flash Channel not found(Index: FlashChannelId) |
| 16 | Ramp not allocated in pool (Index: RampID, RampPoolID) |
| 17 | LogLamp ID out of range (Index: LogLampId, RulePropertyID) |
| 18 | Wrong DataSchema Version (Index: expected id, actual id) |
| 19 | Wrong CAF Key Lengths |
| 20 | Missing calprm parameter |
| 255 | ungueltiger Wert |

### TAB_UW_LAST_MOTORSTART

| WERT | TEXT |
| --- | --- |
| 0x00 | Default Wert, Es gab keinen Verbrennungsmotor-Start (E-Fahrzeug) |
| 0x09 | Zustart bei bestehender Elektrischer Fahrbereitschaft |
| 0x81 | SST-Start |
| 0x89 | MSA-Start |
| 0xFF | ungültiger Wert |

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

### TAB_UW_VERBAUORT_TAGE

| WERT | TEXT |
| --- | --- |
| 1 | Fahrertür/-seite (FT) |
| 2 | Beifahrertür/-seite (BFT) |
| 4 | Fahrertür/-seite hinten (FTH) |
| 8 | Beifahrertür/-seite hinten (BFTH) |
| 255 | unbekannt/ungültig |

### TAB_VARIANTE_AUDIOBEDIENTEIL

| WERT | TEXT |
| --- | --- |
| 0x00 | ohne FBM, TP |
| 0x01 | mit FBM, TP |
| 0x02 | ohne FBM, FM/AM |
| 0x03 | mit FBM, FM/AM |

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

### TAB_VERHINDERER_PWF_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Verhinderer |
| 0x01 | PWF-Start-Zustand nicht zulässig. Prio 5 |
| 0x02 | PWF-Start-Zustand ungleich PRUEFEN_ANALYSE_DIAGNOSE. Prio 4 |
| 0x03 | Keine gültige RCP-Schlüsselauthentisierung  im Außenraum. Prio 2 |
| 0x04 | Fahrbereitschaft gegeben. Prio 3 |
| 0x05 | Montagemode aktiv. Prio 1 |
| 0x06 | Timeout. Prio 6 |
| 0x07 | Interaktion oder Startabbruch. Prio 7 |
| 0x08 | Parken_BN_nio-Verhinderer aktiv |
| 0x09 | Keine gültige Schlüsselauthentisierung im Innenraum |
| 0x0A | kein Fahrzeugstillstand |
| 0xFF | Wert ungültig |

### TAB_VIBRATIONSSTAERKE

| WERT | TEXT |
| --- | --- |
| 0x00 | schwach |
| 0x01 | mittel |
| 0x02 | stark |
| 0xFF | Ungültiger Wert |

### TAB_WARNZEITPUNKT

| WERT | TEXT |
| --- | --- |
| 0x00 | spät |
| 0x01 | mittel |
| 0x02 | früh |
| 0xFF | Ungültiger Wert |

### TAB_WARNZEITPUNKT2

| WERT | TEXT |
| --- | --- |
| 0 | Standard |
| 1 | Adaptiv |

### TAB_WASCHDUESENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0 | PWM Wert 0% |
| 1 | PWM Wert 25% |
| 2 | PWM Wert 50% |
| 3 | PWM Wert 75% |
| 4 | PWM Wert 100% |

### TAB_WCA_ANT_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | System in Ordnung |
| 1 | HF-Kabel WCA - Komepensator kurzgeschlossen |
| 2 | HF-Kabel Kompensator - Antenne kurzgeschlossen |
| 3 | HF-Kabel Kompensator - Antenne unterbrochen |
| 4 | Kompensator Defekt |
| 5 | ON Signal fehlt - Klemme KL30 fehlt |
| 9 | HF-Kabel Cradle - Kompensator unterbrochen |
| 15 | ungültig |

### TAB_WCA_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | WCA nicht aktiv |
| 1 | WCA aktiv |
| 2 | WCA aktiv, Handy erkannt, aber keine Ladefunktion |
| 3 | WCA aktiv, Handy erkannt, wird geladen |
| 4 | WCA aktiv, Fremdkörper erkannt, keine Ladefunktion |
| 5 | WCA aktiv, Fremdkörper und Handy erkannt, wird geladen |
| 6 | WCA aktiv, Fremdkörper und Handy erkannt, keine Ladefunktion |
| 7 | WCA nicht aktiv, Fremdkörper oder Handy erkannt |
| 8 | WCA aktiv, Handy erkannt aber kein Laden wegen Übertemperatur |
| 9 | WCA defekt |
| 15 | ungültig |

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

### TAB_WWSAFEMECH

| WERT | TEXT |
| --- | --- |
| 0x01 | SZL failure |
| 0x02 | QM application failure |

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
| 2 | Türkontakt FTH |
| 3 | Türkontakt BFTH |
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
| 0x01 | ECUMA_DIAGSESSION_ACTIVE |
| 0x0F | ECUMA_GW_15_ON |
| 0x10 | ECUMA_GW_15WUP |
| 0x11 | ECUMA_GW_POWER_ON |
| 0x12 | ECUMA_GW_ETHERNET_OBD_ACT |
| 0x13 | ECUMA_GW_ETHERNET_INT_WAKEUP |
| 0x14 | ECUMA_GW_CAN_ZSG |
| 0x15 | ECUMA_GW_CAN_FA |
| 0x16 | ECUMA_GW_CAN_B |
| 0x17 | ECUMA_GW_CAN_B2 |
| 0x18 | ECUMA_GW_CAN_IK |
| 0x1B | ECUMA_GW_CAN_D |
| 0x1C | ECUMA_GW_FLEXRAY |
| 0x1D | ECUMA_BS_CAN_CAS |
| 0x1E | ECUMA_BS_CAN_ZSG |
| 0x1F | ECUMA_BS_CAN_FA |
| 0x20 | ECUMA_BS_LIN_A |
| 0x21 | ECUMA_BS_LIN_B |
| 0x22 | ECUMA_BS_LIN_C |
| 0x23 | ECUMA_BS_LIN_D |
| 0x24 | ECUMA_BS_LIN_E |
| 0x25 | ECUMA_BS_LIN_F |
| 0x26 | ECUMA_BS_LIN_G |
| 0x27 | ECUMA_BS_LIN_H |
| 0x28 | ECUMA_BS_LIN_I |
| 0x29 | ECUMA_BS_LIN_J |
| 0x2F | ECUMA_BS_LIN_P |
| 0x30 | ECUMA_TC_15WUP |
| 0x31 | ECUMA_TC_15_ON |
| 0x34 | ECUMA_TC_30F_REQ |
| 0x35 | ECUMA_TC_SSPA |
| 0x36 | ECUMA_TC_SSPB |
| 0x37 | ECUMA_TC_IBS_WUP |
| 0x39 | ECUMA_TC_CLUTCH |
| 0x3A | ECUMA_TC_BRAKE |
| 0x3C | ECUMA_TC_30B_ON |
| 0x3E | ECUMA_TC_TELEMATIC_ON |
| 0x3F | ECUMA_TC_PWF_STATE_CHANGE |
| 0x40 | ECUMA_TC_PWF_PERM |
| 0x42 | ECUMA_LC_OP_WARNLIGHT |
| 0x43 | ECUMA_LC_WARNLIGHT |
| 0x45 | ECUMA_LC_OP_INDICATOR_LEFT |
| 0x46 | ECUMA_LC_OP_INDICATOR_RIGHT |
| 0x47 | ECUMA_LC_INDICATOR |
| 0x48 | ECUMA_LC_OP_HEADLIGHT_FLASHER |
| 0x49 | ECUMA_LC_HEADLIGHT_FLASHER |
| 0x4A | ECUMA_LC_OP_LIGHT_SW |
| 0x4B | ECUMA_LC_POSITION |
| 0x4C | ECUMA_LC_LOW_BEAM_ACTIVE |
| 0x4D | ECUMA_LC_OP_PARKLIGHT |
| 0x4E | ECUMA_LC_PARKLIGHT |
| 0x50 | ECUMA_LC_FOLLOWMEHOME |
| 0x51 | ECUMA_LC_REMOTELIGHT |
| 0x52 | ECUMA_LC_WELCOME |
| 0x53 | ECUMA_LC_OP_FOG_LIGHT |
| 0x54 | ECUMA_LC_OP_REAR_FOG_LIGHT |
| 0x55 | ECUMA_LC_OP_INTERIORLIGHT_FRONT |
| 0x56 | ECUMA_LC_OP_INTERIORLIGHT_REAR |
| 0x57 | ECUMA_LC_LCI_ACTIVE |
| 0x58 | ECUMA_LC_LCE_ACTIVE |
| 0x5A | ECUMA_CL_OP_CL_BUTTON |
| 0x5B | ECUMA_CL_OP_DRD |
| 0x5C | ECUMA_CL_OP_PSD |
| 0x5D | ECUMA_CL_OP_BOOTLID_INT |
| 0x5E | ECUMA_CL_OP_BOOTLID_EXT |
| 0x5F | ECUMA_CL_OP_BOOTLID_SEC |
| 0x60 | ECUMA_CL_OP_REARSCREEN |
| 0x61 | ECUMA_CL_OP_HOTEL_MODE |
| 0x62 | ECUMA_CL_SWITCH_DOOR_DRD |
| 0x63 | ECUMA_CL_SWITCH_DOOR_PSD |
| 0x64 | ECUMA_CL_SWITCH_DOOR_DRDR |
| 0x65 | ECUMA_CL_SWITCH_DOOR_PSDR |
| 0x66 | ECUMA_CL_SWITCH_BONNET |
| 0x67 | ECUMA_CL_SWITCH_BOOTLID |
| 0x68 | ECUMA_CL_SWITCH_REARSCREEN |
| 0x69 | ECUMA_CL_SWITCH_BOOTLID_PRECATCH |
| 0x6A | ECUMA_CL_PIA_LOCK_AT_TIMEOUT |
| 0x6B | ECUMA_CL_RELAYSTUCK_FAULT |
| 0x6C | ECUMA_CE_CAP_DRD |
| 0x6D | ECUMA_CE_CAP_PSD |
| 0x6E | ECUMA_CE_CAP_DRDR |
| 0x6F | ECUMA_CE_CAP_PSDR |
| 0x70 | ECUMA_CE_PULL_DRD |
| 0x71 | ECUMA_CE_PULL_PSD |
| 0x72 | ECUMA_CE_PULL_DRDR |
| 0x73 | ECUMA_CE_PULL_PSDR |
| 0x74 | ECUMA_CE_SMO_ACTIVE |
| 0x75 | ECUMA_PW_OP_SZT_LIN |
| 0x76 | ECUMA_LC_FOG_LIGHT_FRONT |
| 0x77 | ECUMA_LC_FOG_LIGHT_REAR |
| 0x78 | ECUMA_LC_FSFY_LOW_BEAM |
| 0x79 | ECUMA_LC_FSFY_BRAKE_LIGHT |
| 0x7A | ECUMA_PW_RELAYSTUCK_FAULT |
| 0x7B | ECUMA_LC_ATTACK_ALARM |
| 0x7C | ECUMA_CE_TAGE_HELP |
| 0x81 | ECUMA_TR_ACTIVE |
| 0x82 | ECUMA_RC_ACTIVE |
| 0x83 | ECUMA_EXMI_ACTIVE |
| 0x84 | ECUMA_PF_SZL_ESCA_ACTIVE |
| 0x85 | ECUMA_PF_OP_SARAH |
| 0x86 | ECUMA_PF_OP_FES |
| 0x89 | ECUMA_PF_OP_SPOILER |
| 0x8B | ECUMA_PF_OP_MFL_M_TASTE |
| 0x8C | ECUMA_PF_OP_MFL_VOL |
| 0x8D | ECUMA_PF_OP_MFL_SONDERFUNKTION |
| 0x8E | ECUMA_PF_OP_MFL_RAENDEL |
| 0x8F | ECUMA_PF_OP_MFL_TEL |
| 0x90 | ECUMA_PF_OP_MFL_PTT |
| 0x91 | ECUMA_PF_OP_BEAUDIO |
| 0x94 | ECUMA_PF_OP_SH_FAH |
| 0x95 | ECUMA_PF_OP_SH_BFH |
| 0x96 | ECUMA_PF_OP_SEATMEM_FA |
| 0x98 | ECUMA_PF_OP_SEATMEM_FAH |
| 0x97 | ECUMA_PF_OP_SEATMEM_BF |
| 0x99 | ECUMA_PF_OP_SEATMEM_BFH |
| 0x9A | ECUMA_PF_OP_S_SVBF_FOND |
| 0x9B | ECUMA_PF_OP_RLS_CLOSEAUTOM |
| 0xA0 | ECUMA_CF_ACTIVE |
| 0xA1 | ECUMA_WW_PUMPDRIVER_FAULT |
| 0xA2 | ECUMA_PF_SUNBLIND_RELAYSTUCK |
| 0xA3 | ECUMA_AC_WATERPUMPADD_ACTIVE |
| 0xA4 | ECUMA_AC_WATERVALVE_ACTIVE |
| 0xA5 | ECUMA_PF_HORN |
| 0xA6 | ECUMA_WW_ACTIVE |
| 0xA7 | ECUMA_SH_ACTIVE |
| 0xA8 | ECUMA_HC_EXMI_ACTIVE |
| 0xA9 | ECUMA_PF_BB_ACTIVE |
| 0xAA | ECUMA_PF_SZT_SB |
| 0xAB | ECUMA_PF_SORO_SB |
| 0xAC | ECUMA_PF_SR_SB |
| 0xEC | ECUMA_ACTIVE_DIAG |
| 0xED | ECUMA_SAFEMECH_LIMPMODE |
| 0xEE | ECUMA_INT_UNDERVOLTAGE |
| 0xEF | ECUMA_INT_INVALID_ISR |
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

### TAB_ZSG_FBD_RDC_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler vorhanden |
| 1 | RDC-Empfangs-Funktion aktiviert aber FBD nicht im RDC-Mode |
| 3 | uC EEPROM Fehler |
| 4 | Transceiver Fehler |
| 13 | reserviert |
| 14 | Spannungsreset |
| 15 | DTC vorhanden |
| 255 | Fehlerinformation nicht ermittelbar |

### TAB_ZSG_KLEMMEN_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Hinderungsgrund vorliegend |
| 1 | Aktueller Schlüssel nicht gültig |
| 2 | -Stillstand nicht erkannt (Signal DVCO_VEH) und kein Fe-Mode [für use-case Diagnose] |
| 3 | Geschwindigkeit <10km/h nicht erkannt (Signal V_VEH_COG) [für use-case SST] |
| 4 | Geschwindigkeit <10km/h ungültig (Signale V_VEH_COG/QU_V_VEH_COG) [für use-case SST] |
| 5 | Bremse nicht gedrückt |
| 7 | Kupplung nicht gedrückt |
| 9 | Keine Freigabe durch DME (ST_DRVG_RDI_DRV ungleich  Keine Fahrbereitschaft  in KL15-Ein) |
| 13 | Montagemodus aktiv |
| 16 | KL30B ein (ST_KL:  0x6...0xD) |
| 17 | Parklicht ein (ST_PLI_LH:  0x1, Ein  oder ST_PLI_RH:  0x1, Ein ) |
| 18 | Standlicht ein (ST_POLI:  0x1, Ein ) |
| 19 | Warnblinken ein (ST_IDC:  0x3, Beide Blinker ein ) |
| 20 | Aktiver Notruf (ECAL_ACV:  0x1, Notruf aktiv ) oder Notruf im Standby (ECAL_STDBY:  0x1, Standby ein ) |
| 21 | KL30F über Dienstenachricht mit Attribut  gesetzlich  angefordert - wird im BDC2015 nicht verwendet |
| 22 | Ladekabel gesteckt |
| 255 | Unbekannt/Ungültig |

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
| 0xFF | AUTHTYPE_INVALID - Ungültig |

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
| 0x0E | SEARCHMODE_TRANSPORT_MODE - CG-Schlüsselsuche Transport Mode (verwendet für Diagnose) |
| 0x0F | SEARCHMODE_CG_MIDDLE - CG-Schlüsselsuche MiKo hinten (verwendet für Dignose) |
| 0x10 | SEARCHMODE_CG_REAR - CG-Schlüsselsuche Hutablage (verwendet für Diagnose) |
| 0x11 | SEARCHMODE_TRUNK_INNER_LEFT - Schlüsselsuche Kofferraum linke Antenne (verwendet für Diagnose COM Test) (not used in BDC2015) |
| 0x12 | SEARCHMODE_TRUNK_INNER_RIGHT - Schlüsselsuche Kofferraum rechte Antenne (verwendet für Diagnose COM Test) (not used in BDC2015) |
| 0x15 | SEARCHMODE_COMPARTMENT - CA-Schlüsselsuche Innenraum (Fahrgastraum oder Fahrgastraum/Kofferraum) |
| 0x16 | SEARCHMODE_TRUNK_OUTER_INNER - CA-Schlüsselsuche Schließen HK/HS (Kofferraum oder Kofferraum/Fahrgastraum) |
| 0x18 | SEARCHMODE_FRONT_OUTER_INNER - CA-Schlüsselsuche Schließen FK (Cable storage) |
| 0x19 | SEARCHMODE_COMPARTMENT_BUMPER |
| 0x1A | SEARCHMODE_BUMPER |
| 0x21 | SEARCHMODE_SLEEP_RESPONSE_PING |
| 0x27 | SEARCHMODE_CAR_LOWERING |
| 0x28 | SEARCHMODE_CKT_MOTION_SENSOR_CONFIG |
| 0x80 | SEARCHMODE_PING - LF-Ping-Schlüsselsuche auf CE-Antennen (s. SEARCHMODE_PING_LB/RB/LR) (not used in BDC2015) |
| 0x81 | SEARCHMODE_SD - LF-Ping-Schlüsselsuche auf CG-Antennen |
| 0x82 | SEARCHMODE_DIAG_ANT_CALIB - Schlüsselsuche auf allen Antennen (verwendet für Diagnose) (not used in BDC2015) |
| 0x83 | SEARCHMODE_NEXTIDG - Schlüsselsuche triggert nächste Authentisierung bei Authenitiserung aller IDG (reserviert für CASS-interne Verwendung) (not used in BDC2015) |
| 0x84 | SEARCHMODE_INT_BROADCAST - Schlüsselsuche Innenraum (auf allen Antennen wird gesucht, auch dann, wenn IDG bereits gefunden wurde) (not used in BDC2015) |
| 0x85 | SEARCHMODE_ANT_TEST - Schlüsselsuche auf allen Antennen, auch dann, wenn IDG bereits gefunden wurde (verwendet für Diagnose) (not used in BDC2015) |
| 0x86 | SEARCHMODE_PING_LB - Schlüsselsuche LF-Ping Left/Bumper (reserviert für CASS-interne Verwendung) (not used in BDC2015) |
| 0x87 | SEARCHMODE_PING_RB - Schlüsselsuche LF-Ping Right/Bumper (reserviert für CASS-interne Verwendung) (not used in BDC2015) |
| 0x88 | SEARCHMODE_PING_LR - Schlüsselsuche LF-Ping Left/Right (reserviert für CASS-interne Verwendung) (not used in BDC2015) |
| 0x89 | SEARCHMODE_WEL_CKT |
| 0x8A | SEARCHMODE_APU_CKT |
| 0x8B | SEARCHMODE_WAL_CKT |
| 0x8C | SEARCHMODE_PREAUTH_CKT |
| 0x8D | SEARCHMODE_CKT_AUTH |
| 0xFF | Ungültig/Unbekannt |

### TAB_ZSG_KM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Idle |
| 0x01 | Keysearch active |
| 0x02 | Transpondersearch active |
| 0xFF | Ungültig |

### TAB_ZSG_SENSOR_VERBAUORT

| WERT | TEXT |
| --- | --- |
| 0x5EA0 | Wireless Charging Ablage |
| 0x3200 | Funkempfänger |
| 0x7100 | NFC Leser Innenraum vorne |
| 0xFFFF | unbekannter Verbauort |

### TAB_ZSG_STATUS_SERVICE_SCHLUESSELDATEN_UPDATE

| WERT | TEXT |
| --- | --- |
| 0 | Update noch nicht abgeschlossen |
| 1 | Update fehlerfrei abgeschlossen |
| 2 | Update abgeschlossen, Fehler sind aufgetreten |
| 255 | ungültig / unplausibel |

### TAB_ZSG_STAT_WECKSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Wakeup deaktiviert |
| 0x01 | Wakeup aktiviert |
| 0xFF | Wert ungültig |

### TAB_ZSG_UTC_TYP

| WERT | TEXT |
| --- | --- |
| 0 | Manuell gestellt (Daten von der angezeigten Uhrzeit abgeleitet, keine UTC-basierte Uhrzeit!) |
| 1 | Ortszeit Werk (per Diagnose gesetzt) |
| 2 | Weltzeit UTC (von GPS abgeleitet) |
| 255 | Ungültig/Unbekannt |

### TAB_ZSG_UW_TC_FUSI_KL50_MSA

| WERT | TEXT |
| --- | --- |
| 1 | RQ_MSA_ENG_STA_2 nicht 0x2 |
| 2 | RQ_MSA_ENG_STA_1 nicht 0x2 |
| 3 | STAT_ENG_STA_AUTO_CRC/Alive-Fehler |
| 4 | RQ_MSA_ENG_STA_1/2=0x2 fuer t>64s |

### TAB_ZSG_ZUSTAND_BEDIENSTELLE

| WERT | TEXT |
| --- | --- |
| 0 | Leitungsbruch/Kurzschluss Batteriespannung |
| 2 | Nicht Betätigt |
| 4 | Betätigt |
| 6 | Kurzschluss Masse |
| 8 | Nicht verbaut |
| 255 | Signal ungültig / unplausibel |

### TAB_ZSG_ZUSTAND_BEDIENSTELLE_NICHT_DIAGNOSEFAEHIG

| WERT | TEXT |
| --- | --- |
| 2 | Nicht Betätigt |
| 4 | Betätigt |
| 255 | Signal ungültig / unplausibel |

### TAB_ZSG_ZV_AKTION_MASTER

| WERT | TEXT |
| --- | --- |
| 1 | ENTRIEGELN |
| 2 | VERRIEGELN |
| 4 | SEL_ER_FT |
| 5 | SEL_ER_HKL |
| 6 | SEL_ER_HS |
| 7 | SEL_ER_UNT_HK |

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

### TAB_ZUSTANDSWECHSEL

| WERT | TEXT |
| --- | --- |
| 0 | kein Zustandswechsel wegen Abschaltverhindere |
| 1 | Wechsel von Prüfen_Analyse_Diagnose nach Wohnen |
| 2 | Wechsel von Wohnen nach Standfunktion_Kunde_nicht_im_Fahrzeug |
| 3 | Wechsel von Wohnen nach Parken_BN_iO |
| 4 | Wechsel von Standfunktion_Kunde_nicht_im_Fahrzeug nach Parken_BN_iO |

### TAB_ZUSTANDSWECHSEL_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 1 | Abschaltverhinderer (Parklicht) vorliegend |
| 2 | Abschaltverhinderer (Standlicht) vorliegend |
| 3 | Abschaltverhinderer (Warnblinken) vorliegend |
| 4 | Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 5 | Abschaltverhinderer (Relaiskleber Fensterheber) |
| 6 | Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 7 | Abschaltverhinderer (Interner Fehler FEM) vorliegend (z.B. Bistabiles Relais nicht abschaltbar usw) |
| 8 | Motor läuft |
| 9 | Fahrzeuggeschwindigkeit größer Stillstand |
| 10 | Entertainmentfunktion |
| 11 | Remote Services |
| 12 | Restwärme |
| 13 | Standheizung - Standlüften |
| 14 | Nachlauf RSE |
| 15 | Remote Hupen |
| 16 | Betätigung Feststellbremse,Rollüberwachung |
| 17 | Kühlmitteltemperaturanfrage durch Kombi |
| 18 | Tankleckdiagnose |
| 19 | Batteriewächter |
| 20 | Nachlauf E-Lüfter |
| 21 | elektr. Wasserpumpe für Turbo Lagerstuhl |
| 22 | Standlüften |
| 23 | Fremdladeerkennung Hybrid - Ladefunktion HVPM - Ladefunktion LIM |
| 24 | Außenbeleuchtung (Follow-Me-Home) |
| 25 | Nachlauf der elektrische Wasserpumpe für Hybrid |
| 26 | Nachlauf der elektrische Wasserpumpe |
| 27 | Wechsel_erlaubt nicht erfüllt |
| 254 | Kein Abschaltverhinderer oder Standverbraucher aktiv |
| 255 | Unbekannter Abschaltverhinderer oder Standverbraucher |

### TAB_ZUSTAND_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster betätigt |
| 0xFF | ungültig |

### TAB_ZV_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 1 | Entriegeln |
| 2 | Verriegeln |
| 3 | Sichern |
| 4 | Selektiv Entriegeln |
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
| 169 | ZV-Aktion Sicherheitsfahrzeug nicht durchgeführt, da kein Sicherheitsfahrzeug codiert oder ZV-Master durch Anforderung vom Sicherheitsmodul gesperrt |
| 170 | ZV-Aktion nicht durchgeführt, da Fahrzeug in Crash |
| 171 | ZV-Aktion nicht durchgeführt, da kein Schlüssel gefunden |
| 172 | ZV-Aktion nicht durchgeführt, da Cabrio Verdeck geöffnet |
| 173 | ZV-Aktion nicht durchgeführt, da die Restauration des altes ZV-Zustand intern fehlgeschlagen |
| 174 | ZV-Aktion nicht durchgeführt, da interner Timeout |
| 175 | ZV-Aktion nicht durchgeführt, da ungültige Diagnoseanfrage empfangen |
| 177 | ZV-Aktion nicht durchgeführt, da KeyManager busy |
| 179 | ZV-Aktion nicht durchgeführt, da unerwartete Antwort vom KeyManager |
| 200 | Reserviert (GeÖ-Schlösser) |
| 201 | Elektr. Öffnen untere Heckklappe |
| 202 | Elektr. Öffnen untere Heckklappe nicht zulässig |
| 255 | Ungültig |

### TAB_ZV_SAFE_MECH

| WERT | TEXT |
| --- | --- |
| 1 | ZV Wippe defekt |
| 2 | Relais zur Ansteuerung der Sichern-Motoren defekt |
| 3 | Dauerhafte Ansteuerung der Sichern-Motoren erkannt (Schutz der Motoren vor Zerstörung durch Überhitzung) |
| 4 | Interner Integritätsfehler im sicherheitsrelevanten Speicherbereich erkannt |

### TAB_ZV_URSACHE

| WERT | TEXT |
| --- | --- |
| 0 | Smart Opener |
| 1 | Fernbedienungstaste |
| 2 | ZV-Ansteuerung über Diagnose |
| 3 | Zentralverriegelungstaster - Centerlock |
| 4 | Geschwindigkeitsverriegeln |
| 5 | Entriegeln nach Fahrtende |
| 6 | Wiederverriegeln nach Zeit |
| 7 | CA-Anforderung Entriegeln (Reversieren) |
| 8 | Crash-Entriegeln |
| 9 | RemoteDoorUnlock |
| 10 | RemoteDoorLock |
| 11 | CA-Verriegeln (Reversieren bei IDG-Sichern im Innenraum) |
| 12 | Schließzylinder FAT entriegeln  (nicht relevant BDC 2015, 2018) |
| 13 | Schließzylinder FAT verriegeln (nicht relevant BDC 2015, 2018) |
| 14 | Fernbedienungstaste HK öffnen |
| 15 | Zustandsänd. Türkontakt - Reversieren aufgrund mechanischer Asynchronität |
| 16 | Sicherheitsfahrzeug Entriegeln (nicht relevant BDC 2015, 2018) |
| 17 | Sicherheitsfahrzeug Verriegeln (nicht relevant BDC 2015, 2018) |
| 18 | Sicherheitsfahrzeug Selektiv Entriegeln (nicht relevant BDC 2015, 2018) |
| 19 | Sicherheitsfahrzeug sichern (nicht relevant BDC 2015, 2018) |
| 20 | TAGE FT |
| 21 | TAGE BFT |
| 22 | TAGE FTH |
| 23 | TAGE BFTH |
| 24 | MANTRA - Manipulierter Transponder  (nicht relevant BDC 2015, 2018) |
| 25 | Übergang von Zustand Sichern in Verriegelt durch Fahrbereitschaft |
| 26 | Übergang von Zustand Sichern in Verriegelt durch Schlüssel an der Transponderspule |
| 27 | CA-Anforderung Sichern |
| 28 | CA-Anforderung Heckklappe/Heckscheibe (Reversieren) |
| 29 | Taster Entriegeln Heckklappe Innen (TOEHKI) |
| 30 | Taster Entriegeln Heckklappe Außen (TOEHKA) |
| 31 | CL-Wippe FT |
| 32 | Taster Zentralsichern Heckklappe (TZSHK) |
| 34 | Taster Entriegeln Frontklappe Innen (TOEFKI) |
| 35 | Taster Entriegeln Heckscheibe (TOEHS) |
| 36 | Fernbedienungstaste Frontklappe Öffnen |
| 37 | CA-Anforderung Sichern nicht zulässig |
| 38 | CA-Anforderung Heckklappe/-scheibe reversieren |
| 39 | CA-Anforderung Toggle-Taster  (nicht relevant BDC 2015, 2018) |
| 40 | Öffnen Heckklappe Sicherheitsfahrzeug  (nicht relevant BDC 2015, 2018) |
| 41 | HK-Wippe |
| 42 | Letzte Tür geschlossen |
| 43 | Letzte Klappe geschlossen |
| 44 | Fernbedienungstaster Sichern nicht zulässig |
| 45 | Türen oder Klappen |
| 100 | vorherige ZV-Aktion noch nicht abgeschlossen |
| 200 | Fahrertür FAT |
| 201 | Beifahrertür BFT |
| 202 | Fahrertür hinten FATH |
| 203 | Beifahrertür hinten BFTH |
| 204 | Mehrere Türen |
| 205 | Remote Control Parking (RCP) |
| 206 | Sichern-Anfrage über Dienstenachricht |
| 220 | Coach Door Modul Verriegeln Anfrage |
| 221 | Taster Entriegeln Hecklappe Unten (TOEHKU) |
| 222 | CKT Annäherung Fahrerseite |
| 223 | CKT Annäherung Beifahrerseite |
| 224 | CKT Annäherung Heck |
| 254 | Unbekannte Ursache |
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

### TAB_ZYKLUS_ZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | 10ms   Zykluszeit |
| 0x01 | 20ms   Zykluszeit |
| 0x02 | 30ms   Zykluszeit |
| 0x03 | 50ms   Zykluszeit |
| 0x04 | 100ms   Zykluszeit |

### TASU_REQUEST_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Not used |
| 0x01 | Request CBS data from kombi ecu 31 01 10 06 |
| 0x02 | Read SOC state from SME 22 DD BC |
| 0x03 | Read SOC real from SME 22 DD C4 |
| 0x04 | Read hybrid data from EME 22 DE 1E |
| 0x05 | Read hybrid data part 1 from SME |
| 0x06 | Read hybrid data part 2 from SME |
| 0x07 | Read error memory functional from UDS ecus 19 02 0C |
| 0x08 | Read error memory functional from KWP ecus 18 02 FF FF |

### TASU_STEUERN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Auftraege an den TAS nicht blockiert (Default bei Fehlen des Arguments) |
| 0x01 | Auftraege an den TAS temporaer bis zum naechsten Aufstart blockiert |
| 0x02 | Auftraege an den TAS persistent ueber den Aufstart hinaus blockiert |
| 0xFF | Wert ungültig |

### THS_FFB_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | THS/FFB komplett angelernt |
| 0xFF | Nicht angelernt / Anlernen nicht abgeschlossen |

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
