# D73V8RCA.PRG

## General

|  |  |
| --- | --- |
| File | D73V8RCA.PRG |
| Type | PRG |
| Jobs | 163 |
| Tables | 70 |
| Origin | BMW ZM-E-34 Fuchs |
| Revision | 7.003 |
| Author | BMW ZM-E-34 Fuchs, BMW ZM-E-34 Langeder |
| ECU Comment | SGBD für N57 (DDE7.3) verwendet in F01, F10 (UDS) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SGBD für N57 (DDE7.3) verwendet in F01, F10 |  |  |
| ORIGIN | string | BMW ZM-E-34 Fuchs |  |  |
| REVISION | string | 7.003 |  |  |
| AUTHOR | string | BMW ZM-E-34 Fuchs, BMW ZM-E-34 Langeder |  |  |
| COMMENT | string | SGBD für N57 (DDE7.3) verwendet in F01, F10 (UDS) |  |  |
| PACKAGE | string | 1.05 |  |  |
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

### TEL_ROH

Ausführen eines Telegramms nur mit Übergabe der Daten ignoriert Leerzeichen Format 001122 ....

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMMEINGABE | binary | Daten ohne Header Format 00 11 22 .... |

### START_SYSTEMCHECK_LLERH

[$2E $5FF1]     Ansteuern Diagnosefunktion Leerlauf-Drehzahl-Absolutwertvorgabe

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | unsigned long | LL-Sollwert 0 bis 4000 1/min 0 ... Testvorgabe LL beenden |

### STOP_SYSTEMCHECK_LLERH

[$2E $5FF1] Beenden von "Ansteuern Diagnosefunktion Leerlauf-Erhöhung (absolut)"

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

$31 01 F0F6 Die Größe St_pmi_nv.B_fapmmess wird in der Layer-Schnittstelle (zurück)gesetzt.

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

$32 F6 Systemdiagnose Batteriesensor reset beenden

_No arguments._

### START_SYSTEMCHECK_ZYL

Starten der Drehungleichförmigkeitsmessung LLR_AUS Starten der Laufruhe - Mengen Messung

| Name | Type | Description |
| --- | --- | --- |
| SWITCH_MENGEN_DREHZAHL | string | LLR_AUS |

### STOP_SYSTEMCHECK_ZYL

Beenden der Drehungleichförmigkeitsmessung

_No arguments._

### STATUS_SYSTEMCHECK_ZYL

Status der Drehungleichförmigleitsmessung LLR_AUS Ausgegeben wird der Status des FBC-Reglers FBC_stActive (0: Steuern, 1:Regeln)

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

$31 03 F0F6 Ausgabe der Größe St_pmi_nv.B_fapmmess

_No arguments._

### STEUERN_OFFSETLERNEN

Starten der Offsetlernfunktionen für AGR-Ventil und Drallklappe StartRoutineByLocalIdentifier $31 - 01 F0 56 + 10bytes

| Name | Type | Description |
| --- | --- | --- |
| STELLER | string | Auswahl eines Stellers (Pflicht) "AGRO" ... AGR-Ventil Offset "DRAO" ... Drallklappen-Offset "NDAGRO" ... ND-AGR-Ventil Offset |
| AUTOMATISCHES_LERNEN | int | Angabe, ob die Position des Stellers neu angelernt werden soll (Pflcht) Die Selbst-Lernfunktion läuft vollautomatisch in der DDE ab 0 ... kein automatisches Lernen anstossen 1 ... automatisches Lernen anstossen |
| OFFSETWERT11 | real | Erster Offsetwert bei Ventilstellung 1 (optional) Dieser Wert muß nur dann angegeben werden, wenn kein automatisches Lernen ausgewählt wurde (AUTOMATISCHES_LERNEN = 0) |
| OFFSETWERT12 | real | Erster Offsetwert bei Ventilstellung 2 (optional) Dieser Wert muß nur dann angegeben werden, wenn kein automatisches Lernen ausgewählt wurde (AUTOMATISCHES_LERNEN = 0) |
| OFFSETWERT21 | real | Letzter Offsetwert bei Ventilstellung 1 (optional) Dieser Wert muß nur dann angegeben werden, wenn kein automatisches Lernen ausgewählt wurde (AUTOMATISCHES_LERNEN = 0) |
| OFFSETWERT22 | real | Letzter Offsetwert bei Ventilstellung 1 (optional) Dieser Wert muß nur dann angegeben werden, wenn kein automatisches Lernen ausgewählt wurde (AUTOMATISCHES_LERNEN = 0) |
| STARTZAEHLER | int | Anzahl der Starts seit letztem Offset-Lernen (optional) Dieser Wert muß nur dann angegeben werden, wenn kein automatisches Lernen ausgewählt wurde (AUTOMATISCHES_LERNEN = 0) |

### STATUS_OFFSETLERNEN

Status der Offsetlernfunktionen für AGR-Ventil und Drallklappe auslesen InputOutputControlByLocalIdentifier $30

| Name | Type | Description |
| --- | --- | --- |
| STELLER | string | Auswahl eines Stellers (Pflicht) "AGRO"   ... AGR-Ventil Offset "DRAO"   ... Drallklappen-Offset "NDAGRO" ... ND-AGR-Ventil Offset |

### ABGLEICHWERTE_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichrequest

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichrequest in folgendem Format |

### ABGLEICHWERTE_LESEN

Lesen der Motorabgleichwerte Letze Änderung: Funktion auf 7-stelligen IMA - Wert erweitert

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | String der Abgleichrequest vom COD-File (dient der Selektion des Ausgabeformats) Argument ist Pflicht, sonst ERROR_ARGUMENT_request |

### LERNWERTE_RUECKSETZEN

RUECKSETZEN gelernter Werte vom EEPROM mit LABEL Verwendete Tabelle: LERNWERTE_RUECK UDS: $2E InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH_RUECK |
| LERNWERT_RUECKSETZEN_WERT | int | ID für zylinderspezifische LABEL (z.B. Einzelinjektoren wechseln) |

### SELBSTERKENNUNG_RUECKSETZEN

(De)aktivieren der Selbsterkennung Verwendete Tabellen: DIG_BLOCKx (1 bis 4) UDS: $2E InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_NAME | string | Spalte NAME aus Tabelle DIG_BLOCKx (1 bis 4) |
| AKTIVIERUNGSSTATUS_WERT | int | Gewünschter Status der Aktivierung (0 = aus/1 = ein) |

### STATUS_KILOMETERSTAND

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_ABGASTEMPERATUR_CSF

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_ABGASTEMPERATUR_KAT

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_ANSAUGLUFTTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_ATMOSPHAERENDRUCK

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_DIFFERENZDRUCK_CSF

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_KRAFTSTOFFTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_KUEHLMITTELTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LADEDRUCK_IST

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LADEDRUCK_SOLL

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LADELUFTTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LMM_MASSE

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LUFTMASSE_IST

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LUFTMASSE_SOLL

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_MOTORDREHZAHL

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_MOTORTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_RAILDRUCK_IST

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_RAILDRUCK_SOLL

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_UBATT

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_UMGEBUNGSTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_LUFTEMPERATUR

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_PEDALWERTGEBER_POTI_1

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_PEDALWERTGEBER_POTI_2

Messwert selectiv lesen UDS: $2C DynamicallyDefineDataIdentifier 

_No arguments._

### STATUS_INJEKTORTAUSCH

Messwert selectiv lesen UDS: $22 InputOutputControlByLocalIdentifier 

_No arguments._

### STATUS_MESSWERTE_IBS

0x22402B STATUS_MESSWERTE_IBS Messwerte IBS auslesen

_No arguments._

### STATUS_LAUFUNRUHE_DREHZAHL

Auslesen der zylinderspezifischen Drehzahlen

_No arguments._

### STATUS_LAUFUNRUHE_LLR_MENGE

Auslesen selektive Mengenkorrektur

_No arguments._

### DATENSATZ_NAME

Auslesen des Datensatznamens aus dem Steuergerät UDS  : $22   ReadDataByIdentifier UDS  : $4034 Sub-Parameter

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

$2E 5F F5 04 Loeschen von pminfo1 index 23-30

_No arguments._

### ABGLEICH_IMA_LESEN

Alle IMA Abgleichwerte im Injektor Beschriftungsformat auslesen UDS: $22 WriteDataByIdentifier request SID: 0x2E

_No arguments._

### ABGLEICH_PROGRAMMIEREN_IMA

Programmieren der IMA Abgleichwerte  - alle Zylinder Eingabe im Injektor Beschriftungsformat ACHTUNG: Anzahl der Argumente ist Anzahl der Zylinder UDS: $22 ReadDataByIdentifier LID: 0x5F90

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_IMA_ZYL1 | string | Injektorcode von Zylinder 1 (im Format, wie auf Injektor abgedruckt) |
| ABGLEICH_VERSTELLEN_IMA_ZYL2 | string | Injektorcode von Zylinder 2 (im Format, wie auf Injektor abgedruckt) |
| ABGLEICH_VERSTELLEN_IMA_ZYL3 | string | Injektorcode von Zylinder 3 (im Format, wie auf Injektor abgedruckt) |
| ABGLEICH_VERSTELLEN_IMA_ZYL4 | string | Injektorcode von Zylinder 4 (im Format, wie auf Injektor abgedruckt) |
| ABGLEICH_VERSTELLEN_IMA_ZYL5 | string | ACHTUNG: Nur für 6 Zylinder Motoren eingeben Injektorcode von Zylinder 5 (im Format, wie auf Injektor abgedruckt) |
| ABGLEICH_VERSTELLEN_IMA_ZYL6 | string | ACHTUNG: Nur für 6 Zylinder Motoren eingeben Injektorcode von Zylinder 6 (im Format, wie auf Injektor abgedruckt) |

### ABGLEICH_PROGRAMMIEREN_IMA_ZYL

IMA Abgleichwert Programmieren im am Injektor aufgedruckten Format Verstellen eines Injektors mit LID Verwendete Tabelle: ABGLEICH UDS: $2E WriteDataByIdentifier LID: IMA1 - IMA6

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_IMA_IDENT | string | Identifier zylinderspezifisch IMA1 - IMA6 |
| ABGLEICH_VERSTELLEN_IMA_ZYL | string | IMA - Wert für selektierten Zylinder |

### STEUERN_SELECTIV

Verstellen eines Stellerwertes mit LABEL Verwendete Tabelle: STELLER UDS: $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | string | LABEL aus Tabelle STELLER |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_ENDE_SELECTIV

Beenden von STELLER Stellen mit LABEL Verwendete Tabelle: STELLER UDS: $2F InputOutputControlByIdentifier request SID

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | string | LABEL aus Tabelle STELLER |

### STEUERN_WERT_LESEN

Lesen von STELLER Stellen Wert mit LABEL Verwendete Tabelle: STELLER UDS: $22 ReadDataByIdentifier request SID

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | string | LABEL aus Tabelle STELLER |

### ABGLEICH_CSF_LESEN

Auslesen der CSF-Tabelle, Berechnung des Korrekturfaktors und Offset

| Name | Type | Description |
| --- | --- | --- |
| LABEL_ECU | string | gewählter Service Bibliothekeintrag (OPTIONAL) dient nur zur Prüfung mit ECU-TEST |

### ABGLEICH_CSF_PROG

Auslesen der CSF-Tabelle, Berechnung des Korrekturfaktrors und Offset

| Name | Type | Description |
| --- | --- | --- |
| SERVICE | string | gewählter Service aus Bibliothekeintrag |
| LABEL | string | gewähltes Label aus Bibiliothekeintrag |
| VALUE | long | Wert der in den gewaehlten Service Bibiliothekeintrag gespeichert werden soll |
| DATASTRING | string | Gesamter CSF DATEN Werte in einer stringwurscht |

### ABGLEICH_NMK_LESEN

Auslesen der NMK-Werte aus EEPROM InputOutputControlByLocalIdentifier $22 IOLI 0x57 mit IOCP 0x01 (reportCurrentState)

_No arguments._

### ABGLEICH_NMK_SCHREIBEN

Schreiben der NMK-Werte ins EEPROM InputOutputControlByLocalIdentifier $30 IOLI 0x57 mit IOCP 0x08 (longTermAdjustment)

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHDATEN_NMK_SCHALTER | string | String zur Unterscheidung, welcher Modus eingestellt werden soll Verwendung der Tabelle NMK_Switch (Selektion nach Spalte "LABEL" EEPDEF    ... Bei SG-Tausch wegen def. EEPROM (keine Lernwerte auslesbar) INJSINGLE ... Tausch eines einzelnen Injektors (es muss (!) auch das Argument NUM_ZYL übergeben werden INJALL    ... Tausch aller Injektoren NMKALL    ... Kopieren aller NMK-Werte aus dem EEPROM |
| NUM_ZYL | int | Pflicht bei Ausführen eines Einzelinjektortausches ("INJSINGLE"), sonst optional Nummer des betroffenen Zylinders als Integer (1 bis 6) übergeben |
| ABGLEICHDATEN_NMK | string | Datenstring mit den NMK-Werten (24 Werte) Inhalt: Zylindernummer, Schnelllernbit, Freigabebits, Lernzykluszähler und NMK-Lernwerte |

### ABGLEICH_LESEN_NVC

Alle NVC Abgleichwerte auslesen (Nominal Voltage Calibration) UDS $22 InputOutputControlByLocalIdentifier LID: 0x5FB3 und 0x52

_No arguments._

### ABGLEICH_PROGRAMMIEREN_NVC

Programmieren der NVC Integratorwerte und Lernzykluszähler Behandlung von einem Einzelinjektor oder alle Injektoren UDS $30 InputOutputControlByLocalIdentifier LID: 0x51 und 0x52

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_INJ | string | Angabe eines Einzelinjektors oder aller Injektoren Folgende Nomenklatur gilt: INJ1    ... NVC - Integratorwert von Injektor 1 wird ins SG programmiert INJ2    ... NVC - Integratorwert von Injektor 2 wird ins SG programmiert INJ3    ... NVC - Integratorwert von Injektor 3 wird ins SG programmiert INJ4    ... NVC - Integratorwert von Injektor 4 wird ins SG programmiert INJ5    ... NVC - Integratorwert von Injektor 5 wird ins SG programmiert INJ6    ... NVC - Integratorwert von Injektor 6 wird ins SG programmiert INJALL  ... NVC - Integratorwerte aller Injektoren werden ins SG programmiert Dieses Argument ist Pflicht ! |
| ABGLEICH_NVCINT_WERT | real | Integratorwert, der für einen selektiven Injektor oder für alle Injektoren prog. wird. Wenn bei IDENTIFIER_INJ das Arg "INJALLE" verwendet wird, so wird dieser Wert für alle Injektoren programmiert. Ansonsten nur für jenen Injektor, welcher expilzit ausgewählt wird Wertebereich: -1 ... +1 Initwert:   0.0 (entspricht RESET bzw. neuer Injektor) Dieses Argument ist Pflicht ! |
| IDENTIFIER_LZZ | int | Schalter mit dem festgelegt wird, ob der (die) Lernzykluszähler für das NVC - Lernen auch programmiert werden sollen. Folgende Zuordnung gilt: 0  ... Werte der Lernzykluszähler werden nicht programmiert (Default) 1  ... Werte der Lernzykluszähler werden programmiert (mit ABGLEICH_NVCCNT_WERT) Dieses Argument ist optional |
| ABGLEICH_NVCCNT_WERT | int | Neuer Wert für den (die) Lernzykluszähler in Abhängigkeit von IDENTIFIER_INJ Wertebereich: 0 ... 65535 Dieses Argument ist optional |

### ABGLEICH_VERSTELLEN

Verstellen eines EEPROM Abgleichwertes mit LABEL Verwendete Tabelle: ABGLEICH UDS*: $22 lesen, $2E schreiben InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH |
| ABGLEICH_VERSTELLEN_WERT | real | Neuer Verstellwert an SG |

### ABGLEICH_LESEN

Lesen eines EEPROM Abgleichwertes mit LABEL Verwendete Tabelle: ABGLEICH UDS: $22 lesen, $2E schreiben InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH |

### ABGLEICH_PROG

Programmieren eines EEPROM Abgleichwertes mit LABEL Verwendete Tabelle: ABGLEICH UDS: $22 lesen, $2E schreiben InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH |
| ABGLEICH_PROG_WERT | real | neuer Programmierwert an SG |

### ABGLEICH_LESEN_KF48

Lesen der EEPROM Abgleichwerte für MEN48 und CSMEN48 Verwendete Tabelle: ABGLEICH UDS: $22 ReadDataByIdentifier

_No arguments._

### ABGLEICH_VERSTELLEN_KF48

Verstellen des 48 Punkte Kennfeldes mit LABEL Verwendete Tabelle: ABGLEICH UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_PROG_WERT_KF48 | string | Neuer Programmierwert für 48Pkte KF Format der Eingabe: Mengen in real, durch Blank getrennte 48 Punkte Format der Eingabe zB: 1.0 1.1 1.5 .... 1.5 Achtung: Es müssen alle Programmierwerte eingegeben werden ! |

### ABGLEICH_PROG_KF48

Programmieren des 48 Punkte Kennfeldes mit LABEL Verwendete Tabelle: ABGLEICH UDS: $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_PROG_WERT_KF48 | string | Neuer Programmierwert für 48Pkte KF Format der Eingabe: Mengen in real, durch Blank getrennte 48 Punkte Format der Eingabe zB: 1.0 1.1 1.5 .... 1.5 Achtung: Es müssen alle Programmierwerte eingegeben werden ! |

### ECU_CONFIG

Ausgabe der Erkennungsstati von verbauten Komponenten im Fzg. wenn kein Argument übergeben wird, werden alle Tabellen DIG_BLOCKx ausgegeben

| Name | Type | Description |
| --- | --- | --- |
| TABELLE | string | Ausgabe mit/ohne Text |

### ECU_CONFIG_RESET

Rücksetzen der Erkennungsstati von verbauten Komponenten im Fzg. es werden alle Selbsterkennungen resetiert !

_No arguments._

### ECU_CONFIG_ENABLE

Aktivieren/Deaktivieren der Selbsterkennung von verbauten Komponenten im Fzg. es werden alle Selbsterkennungen aktiviert/deaktiviert !

| Name | Type | Description |
| --- | --- | --- |
| SWITCH | int | 0 ... alle Selbsterkennungen deaktiviert 1 ... alle Selbsterkennungen aktiviert |

### ECU_CONFIG_KOMPONENTENRESET

Rück-/Setzen des Erkennungsstatus einer verbauten Komponente im Fzg.

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_NAME | string | Bezeichnung der Komponente aus DIG_BLOCKx |
| IDENTIFIER_STATUS | int | Gewünschter Status der Komponente aus DIG_BLOCKx (0 = nicht erkannt (default))/ 1 = erkannt) |

### STEUERN_E_LUEFTER

Vorgeben eines Stellerwertes fuer E - Lüfter UDS: $2F InputOutputControlByIdentifier Verstellwert 5 - 90 %

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_E_LUEFTER_AUS

Beenden von Vorgeben von E-Lüfter ansteuern UDS: $2F InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_SYSTEMCHECK_LMS

Starten des Luftmassensystemtests RoutineControl $31 mit Subparameter 0x01

| Name | Type | Description |
| --- | --- | --- |
| SGBD_ID | long | Variantenindex |

### _LP_STEUERN_SYSTEMCHECK_LMS

Starten des Luftmassensystemtests RoutineControl $31 mit Subparameter 0x01 Nur für den Leistungsprüfstand-Steyr zu verwenden!

_No arguments._

### STEUERN_SYSTEMCHECK_LMS_ENDE

Stoppen des Luftmassensystemtests RoutineControl $31 mit Subparameter 0x02

_No arguments._

### STATUS_SYSTEMCHECK_LMS

Aktueller Status des Luftmassensystemtests RoutineControl $31 mit Subparameter 0x03

| Name | Type | Description |
| --- | --- | --- |
| TEXTDIGITAL | string | Ausgabe mit/ohne Text |

### STATUS_IGRINFO_AEP

0x224016 STATUS_IGRINFO_AEP Infospeicher Intelligente Generator Regelung (IGR) auslesen

_No arguments._

### STATUS_LEMINFO_AEP

0x224017 STATUS_LEMINFO_AEP Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

_No arguments._

### _STATUS_MSAINFO_AEP

0x224018 _STATUS_MSAINFO_AEP Infospeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### STATUS_VERBREDINFO

0x22401D STATUS_VERBREDINFO Verbraucherreduzierungsspeicher auslesen

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_1

0x224022 STATUS_SYSTEMCHECK_AEP_INFO_1 Intelligenter Batteriesensor Bitfeld Pminfo1 lesen

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_2

0x224023 STATUS_SYSTEMCHECK_AEP_INFO_2 Intelligenter Batteriesensor Bitfeld Pminfo2 lesen

_No arguments._

### RESET_RUNTIME_STACK

SG-interne Resourcengrößen resetieren

_No arguments._

### READ_RUNTIME_STACK

SG-interne Resourcengrößen lesen

_No arguments._

### STATUS_REGENERATION_CSF

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_FASTA10

0x224015 STATUS_FASTA10 FASTA-Messwertblock 10 lesen

_No arguments._

### STEUERN_GLUEHKERZENTAUSCH

RÜCKSETZEN gelernter Werte der Glühkerzen im Glüh-SG UDS: $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_GLU | string | Einzelkerze rücksetzen: GLU1 ... GLU6 (... GLU8) alle Kerzen rücksetzen: GLUALLE andere Argumente sind nicht erlaubt! |

### STATUS_GLUEHKERZENTAUSCH

Auslesen des Status rückgesetzter Glühkerzen im Glüh-SG UDS: $31 RoutineControl

_No arguments._

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

_No arguments._

### STATUS_EWS4_SK

Lesen des SecretKey des Server sowie Client für EWS4 UDS   : $22   ReadDataByIdentifier UDS   : $C002 Sub-Parameter

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

### ABGLEICH_LESEN_AGRKUEHLER

Auslesen der Korrekturwerte der ND/HD-AGR Kühlerüberwachung  UDS: $22 InputOutputControlByLocalIdentifier LID: 0x5C/5D

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_AGRKUEHLER | string | NDAGR oder HDAGR |

### ABGLEICH_PROGRAMMIEREN_AGRKUEHLER

Programmieren der Korrekturwerte der ND/HD-AGR Kühlerüberwachung  UDS: $2E InputOutputControlByLocalIdentifier LID: 0x5C/5D

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_AGRKUEHLER | string | NDAGR oder HDAGR |
| ABGLEICH_VERSTELLEN_WERT1 | real | Abgleichwert 1 |
| ABGLEICH_VERSTELLEN_WERT2 | real | Abgleichwert 2 |
| ABGLEICH_VERSTELLEN_WERT3 | real | Abgleichwert 3 |
| ABGLEICH_VERSTELLEN_WERT4 | real | Abgleichwert 4 |

### ABGLEICH_RESET_AGRKUEHLER

Resetieren der Korrekturwerte der ND- und HD-AGR Kühlerüberwachung (Alle vier Werte werden auf Null rückgesetzt) UDS: $2E InputOutputControlByLocalIdentifier LID: 0x5C/5D

_No arguments._

### STATUS_OFFSETWERTE

Offsetwerte für Abgasdifferenzdruck über Partikelfilter und Sensordruck vor Turbine auslesen InputOutputControlByLocalIdentifier $22

| Name | Type | Description |
| --- | --- | --- |
| STELLER | string | Auswahl eines Stellers (Pflicht) "OTUR" ... Offsetwerte für den Sensordruck vor Turbine "ODPF" ... Offsetwerte für Abgasdifferenzdruck über Partikelfilter |

### STEUERN_OFFSETWERTE

Offsetwerte für Abgasdifferenzdruck über Partikelfilter und Sensordruck vor Turbine vorgeben InputOutputControlByLocalIdentifier $2E

| Name | Type | Description |
| --- | --- | --- |
| STELLER | string | Auswahl eines Stellers (Pflicht) "OTUR" ... Offsetwerte für den Sensordruck vor Turbine "ODPF" ... Offsetwerte für Abgasdifferenzdruck über Partikelfilter |
| OFFSETWERT_IST | real | Istwert des Offsets |
| OFFSETWERT_ALT | real | Alter Wert des Offsets |

### STEUERN_HYDRAULIKTEST_DDE

Starten der Hydrauliktestfunktionen der DDE StartRoutineByLocalIdentifier $31

| Name | Type | Description |
| --- | --- | --- |
| TEST_ID | string | Auswahl eines Tests (Pflicht) "HD" ... Hochdrucktest "HL" ... Hochlauftest |
| SOURCE | string | Quelle der Testrequest (optional) "SGBD" ... Daten aus den SGBD-Tabellen Defaulteinstellung: Daten aus DS verwenden |
| NUMSHOFFZYL | int | Nummer des abzuschaltenden Zylinders (NUR für HL-Test!!) Wertebereich für HL-Test: 0 bis 6 Defaulteinstellung für HL-Test: es wird kein Zylinder abgeschaltet (0) Testschritt 5 aktiv (1) oder nicht aktiv (0) (NUR für HD-Test!!) Wertebereich für HD-Test: 0 oder 1 Defaulteinstellung für HD-Test: Testschritt 5 ist aktiv (1) |
| CRS17UPDATE | int | Hochlauftest Telegrammaufbau (optional) 0 ... Telegrammaufbau vor Update auf CRS17.14 (default) 1 ... Telegrammaufbau nach Update auf CRS17.14 |

### STEUERN_HYDRAULIKTEST_DDE_ENDE

Stoppen der DDE-Hydrauliktests StopRoutineByLocalIdentifier $32

| Name | Type | Description |
| --- | --- | --- |
| TEST_ID | string | Auswahl eines Tests HD ... Hochdrucktest HL ... Hochlauftest |

### START_SYSTEMCHECK_GLF

0x3101F0D5 START_SYSTEMCHECK_GLF Ansteuern Gesteuerte Luftfuehrung Systemcheck

_No arguments._

### STATUS_SYSTEMCHECK_GLF

0x3103F0D5 STATUS_SYSTEMCHECK_GLF Auslesen Gesteuerte Luftfuehrung Systemcheck

_No arguments._

### STOP_SYSTEMCHECK_GLF

0x3102F0D5 STOP_SYSTEMCHECK_GLF Ende Gesteuerte Luftfuehrung Systemcheck

_No arguments._

### STEUERN_GLF

0x2F60C303 STEUERN_GLF Gesteuerte Luftfuehrung ansteuern

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | unsigned long | Sollwert Gesteuerte Luftführung Min: 0 Max: 1 |

### STEUERN_ENDE_GLF

0x2F60C300 STEUERN_ENDE_GLF Gesteuerte Luftfuehrung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_NULLGANG_ERKENNUNG

0x22402E STATUS_NULLGANG_ERKENNUNG     Nullgang Erkennung auslesen

_No arguments._

### STEUERN_NULLGANG_LERNEN

0x3101F02E STEUERN_NULLGANG_LERNEN Ansteuern Nullgang lernen (Der Nullgang-Lernwert ist nichtflüchtig so abzulegen, dass er bei Reprogrammierung nicht überschrieben wird.)

_No arguments._

### STEUERN_NULLGANG_SCHREIBEN

0x2E5F8A STEUERN_NULLGANG_SCHREIBEN Schreiben Nullgang Lernwert

| Name | Type | Description |
| --- | --- | --- |
| STAT_NGS_WERT | real | Nullgang Lernwert Tvneutrin   Einheit: %   Min: 0 Max: 655.35 |

### FLASH_DATEN_LESEN

Alle Abgleichwerte lesen

_No arguments._

### FLASH_DATEN_SCHREIBEN

Alle Abgleichwerte schreiben

| Name | Type | Description |
| --- | --- | --- |
| FLASH_DATEN_SCHREIBEN_WERT | string | Ergbnis aus job FLASH_DATEN_LESEN |

### START_SYSTEMCHECK_IGR_AUS

0x3101F0F7 START_SYSTEMCHECK_IGR_AUS Ansteuerung Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

0x3103F0F7 STATUS_SYSTEMCHECK_IGR_AUS Auslesen Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

0x3102F0F7 STOP_SYSTEMCHECK_IGR_AUS Ende Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### FASTA_MESSWERTBLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| STATUS | string | Es muss mindestens ein Argument übergeben werden z.B. INMOT IUBAT für Motordrehzahl und Batteriespannung Bezeichner ARG aus Tabelle SG_Funktionen |

### _STATUS_FAHRZEUGZUSTAND

Messwert selectiv lesen VehV_v, Epm_nEng und T15_stRaw werden ausgelesen UDS: $2C DynamicallyDefineDataIdentifier

_No arguments._

### STATUS_BZEINFO

0x22401A STATUS_BZEINFO Infospeicher Batterie Zustands Erkennung (BZE) auslesen

_No arguments._

### STATUS_DIGITAL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| TABELLE | string | Ausgabe mit/ohne Text |
| TEXTDIGITAL | string | Ausgabe mit/ohne Text |

### STATUS_CALCVN

Lesen der CAL-ID und CVN

_No arguments._

### LESEN_CODIERWERTE

Ausgabe der Codierwerte mit und ohne Zeitlimit.

_No arguments._

### STATUS_BZEDIAG

0x22403B STATUS_BZEDIAG BZE Infospeicher

_No arguments._

### STATUS_SGR

Messwert selectiv lesen UDS: $22 ReadDataByIdentifier 

_No arguments._

### IDENT_GEN

Messwert selectiv lesen UDS: $22 ReadDataByIdentifier 

_No arguments._

### IDENT_IBS

$22 40 21 BMW Nr, Seriennummer, SW/HW Index

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

Löschen von Adaptionen und gelernte Varianten UDS $31 01 F0 30 xx xx xx Löschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht, Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht, Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht, Bit=0 behält alten Wert |

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

UDS $31 01 F030 Batterietausch registrieren

_No arguments._

### STEUERN_RUHESTROMMESSUNG

0x312C STEUERN_RUHESTROMMESSUNG Ansteuern Ruhestrompruefung mit IBS Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Eco_max_i   Einheit: A   Min: 0 Max: 0.3187 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Eco_msb   Einheit: s   Min: 0 Max: 12.75 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Eco_mz   Einheit: s   Min: 0 Max: 12.75 |
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: s   Min: 0 Max: 255 |

### STATUS_RUHESTROMMESSUNG

0x332C STATUS_RUHESTROMMESSUNG Auslesen Ruhestromprüfung mit IBS Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | MSA deaktiviert, IGR deaktiviert, LLDZ-Anhebung aktiviert, Ladespannungsanhebung aktiviert |
| 0x01 | Spezieller Energiesparmode | MSA deaktiviert, IGR deaktiviert, LLDZ-Anhebung aktiviert, Ladespannungsanhebung aktiviert |
| 0x02 | ECOS-Mode | MSA deaktiviert, IGR deaktiviert, LLDZ-Anhebung aktiviert, Ladespannungsanhebung aktiviert |
| 0x03 | MOST-Mode | MSA deaktiviert, IGR deaktiviert, LLDZ-Anhebung aktiviert, Ladespannungsanhebung aktiviert |
| 0x04 | Betriebsmode 4 | MSA deaktiviert, IGR deaktiviert, LLDZ-Anhebung aktiviert, Ladespannungsanhebung aktiviert |
| 0x05 | Betriebsmode 5 | MSA deaktiviert, IGR deaktiviert, LLDZ-Anhebung aktiviert, Ladespannungsanhebung aktiviert |
| 0x06 | Rollenmode | IGR deaktiviert, Ladespannungsanhebung aktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | 021200 Energiesparmode aktiv: Fahrzeug ist auf Fertigungs-, Transport- oder Flashmodus eingestellt | 0 |
| 0x02FF12 | 02FF12 Diagnosemaster Test, I14229_ROETst_Appl: Applikations-Dummy-Fehlerspeichereintrag mit Diagnosejob erzeugt | 0 |
| 0x240000 | 240000 Drehmomentüberwachung DCC: Drehmomentanforderung nicht plausibel | 0 |
| 0x240100 | 240100 Drehmomentüberwachung DCC: unerlaubte Drehmomentanforderung bei betätigter Bremse | 0 |
| 0x240400 | 240400 Abgasrückführ-Regelung, Regelabweichung: Luftmasse zu niedrig/positive Regelabweichung | 0 |
| 0x240500 | 240500 Abgasrückführ-Regelung, Regelabweichung: Luftmasse zu hoch/negative Regelabweichung | 0 |
| 0x240600 | 240600 Generator: keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x240700 | 240700 Generator: Kommunikation über BSD-Schnittstelle gestört (falsches Register) | 0 |
| 0x240800 | 240800 Bremsunterdrucksensor, Plausibilität: Unterdruckabbau während Bremsvorgang zu gering | 0 |
| 0x240900 | 240900 DDE-Steuergerät intern (CoVMErrL2): Kontinuierliche Momentenüberwachung, Vortriebssollmoment zu hoch | 0 |
| 0x240A00 | 240A00 DDE-Steuergerät intern (CY320): CY320 SPI-Kommunikation fehlerhaft | 0 |
| 0x240F00 | 240F00 Motorabstellzeit: Motorabstellzeitermittlung fehlerhaft | 0 |
| 0x241000 | 241000 Laufruheregler: Korrekturmenge zu hoch | 0 |
| 0x241100 | 241100 Laufruheregler: Korrekturmenge zu niedrig | 0 |
| 0x241200 | 241200 FMO Einspritzmengen-Beobachter: Mengenfehlerkorrektur über zulässigem Bereich | 0 |
| 0x241300 | 241300 FMO Einspritzmengen-Beobachter: Mengenfehlerkorrektur unter zulässigem Bereich | 0 |
| 0x241400 | 241400 Elektrolüfter: mechanisch blockiert | 0 |
| 0x241500 | 241500 Elektrolüfter: Elektrolüfter Fenster 2 | 0 |
| 0x241600 | 241600 Elektrolüfter: Elektrolüfter Fenster 3 | 0 |
| 0x241700 | 241700 Elektrolüfter: Elektrolüfter Fenster 4 | 0 |
| 0x241800 | 241800 Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x241900 | 241900 Kraftstofffilter: Restlaufleistung niedrig | 0 |
| 0x241A00 | 241A00 Glühsteuergerät, Diagnoserückmeldung: Motorkonfiguration oder Glühstifttyp passt nicht zum Glühsteuergerät | 0 |
| 0x241B00 | 241B00 Glühsteuergerät, Diagnoserückmeldung: interner EEPROM Fehler | 0 |
| 0x241C00 | 241C00 Glühsteuergerät, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x241D00 | 241D00 Botschaft (Fehler_Status_GSG_LIN, 0x17, LIN): Botschaft von Glühsteuergerät GSG ausgefallen | 0 |
| 0x241E00 | 241E00 Botschaft (Status_GSG_LIN, 0x18, LIN): Botschaft von Glühsteuergerät GSG ausgefallen | 0 |
| 0x241F00 | 241F00 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 1 defekt | 0 |
| 0x242000 | 242000 Glühstift Zylinder 1, Ansteuerung: Unterbrechung | 0 |
| 0x242100 | 242100 Glühstift Zylinder 1, Ansteuerung: Kurzschluss | 0 |
| 0x242200 | 242200 Glühstift Zylinder 1, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242300 | 242300 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 2 defekt | 0 |
| 0x242400 | 242400 Glühstift Zylinder 2, Ansteuerung: Unterbrechung | 0 |
| 0x242500 | 242500 Glühstift Zylinder 2, Ansteuerung: Kurzschluss | 0 |
| 0x242600 | 242600 Glühstift Zylinder 2, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242700 | 242700 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 3 defekt | 0 |
| 0x242800 | 242800 Glühstift Zylinder 3, Ansteuerung: Unterbrechung | 0 |
| 0x242900 | 242900 Glühstift Zylinder 3, Ansteuerung: Kurzschluss | 0 |
| 0x242A00 | 242A00 Glühstift Zylinder 3, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242B00 | 242B00 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 4 defekt | 0 |
| 0x242C00 | 242C00 Glühstift Zylinder 4, Ansteuerung: Unterbrechung | 0 |
| 0x242D00 | 242D00 Glühstift Zylinder 4, Ansteuerung: Kurzschluss | 0 |
| 0x242E00 | 242E00 Glühstift Zylinder 4, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242F00 | 242F00 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 5 defekt | 0 |
| 0x243000 | 243000 Glühstift Zylinder 5, Ansteuerung: Unterbrechung | 0 |
| 0x243100 | 243100 Glühstift Zylinder 5, Ansteuerung: Kurzschluss | 0 |
| 0x243200 | 243200 Glühstift Zylinder 5, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x243300 | 243300 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 6 defekt | 0 |
| 0x243400 | 243400 Glühstift Zylinder 6, Ansteuerung: Unterbrechung | 0 |
| 0x243500 | 243500 Glühstift Zylinder 6, Ansteuerung: Kurzschluss | 0 |
| 0x243600 | 243600 Glühstift Zylinder 6, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x243700 | 243700 Glühsteuergerät, Diagnoserückmeldung: Masseversatz zwischen Glühsteuergerät und Glühstifte | 0 |
| 0x243800 | 243800 Glühsteuergerät, Diagnoserückmeldung: interner Hardware Fehler | 0 |
| 0x243900 | 243900 Glühsteuergerät, Diagnoserückmeldung: keine Kommunikation | 0 |
| 0x243A00 | 243A00 Glühsteuergerät, Diagnoserückmeldung: Spannung Kl. 30 am Glühsteuergerät fehlt | 0 |
| 0x243B00 | 243B00 Glühsteuergerät, Diagnoserückmeldung: interne Temperatur zu hoch | 0 |
| 0x243C00 | 243C00 Glühsteuergerät, Diagnoserückmeldung: Spannungsdifferenz Glühsteuergerät Kl. 30 zu DDE Versorgungsspannung zu hoch | 0 |
| 0x243D00 | 243D00 Leerlaufdrehzahl, Plausibilität: Ist-Leerlaufdrehzahl zu hoch | 0 |
| 0x243E00 | 243E00 Leerlaufdrehzahl, Plausibilität: Ist-Leerlaufdrehzahl zu niedrig | 0 |
| 0x243F00 | 243F00 Intelligenter Batterie Sensor: keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x244000 | 244000 Motoröl, kritische Ölviskosität: Anteil Dieseleintrag im Motoröl durch häufige Regenerationen zu hoch | 0 |
| 0x244100 | 244100 Motoröl, kritische Ölviskosität: Anteil Dieseleintrag im Motoröl durch häufige Regenerationen zu hoch bei minimaler Ölbefüllung | 0 |
| 0x244200 | 244200 Motoröl, kritische Ölmasse: Dieseleintrag im Motoröl durch häufige Regenerationen zu hoch | 0 |
| 0x244300 | 244300 Motoröl, kritische Ölmasse: Min Error | 0 |
| 0x244400 | 244400 Motoröl, Zustand: kritische Ölviskosität oder kritische Ölmasse durch Dieseleintrag im Motoröl erreicht | 0 |
| 0x244500 | 244500 DDE-Steuergerät intern (MonUMaxSupply1): DDE interne Spannung zu hoch | 0 |
| 0x244600 | 244600 DDE-Steuergerät intern (MonUMinSupply1): DDE interne Spannung zu niedrig | 0 |
| 0x244700 | 244700 Ölzustandssensor: Kommunikation über BSD-Schnittstelle gestört (falsches Register) | 0 |
| 0x244800 | 244800 Info - Partikelfiltersystem: Begrenzte Restlaufstrecke des Partikelfilter verfuegbar | 0 |
| 0x244900 | 244900 Partikelfiltersystem: Maximale Laufstrecke des Partikelfilters überschritten | 0 |
| 0x244A00 | 244A00 Ladedruckregelung Niederdruckstufe, Regelabweichung: Ladedruck zu niedrig/positive Regelabweichung | 0 |
| 0x244B00 | 244B00 Ladedruckregelung Niederdruckstufe, Regelabweichung: Ladedruck zu hoch/negative Regelabweichung | 0 |
| 0x244C00 | 244C00 Ladedruckregelung, Regelabweichung: Ladedruck zu niedrig/positive Regelabweichung | 0 |
| 0x244D00 | 244D00 Ladedruckregelung, Regelabweichung: Ladedruck zu hoch/negative Regelabweichung | 0 |
| 0x244E00 | 244E00 Umgebungsdrucksensor (im Steuergerät verbaut): Umgebungsdruck zu hoch (nicht plausibel zu Druck vor Partikelfilter und Ladedruck) | 0 |
| 0x244F00 | 244F00 Umgebungsdrucksensor (im Steuergerät verbaut): Umgebungsdruck zu niedrig (nicht plausibel zu Druck vor Partikelfilter und Ladedruck) | 0 |
| 0x245000 | 245000 Partikelfiltersystem: Aschevolumen im Partikelfilter über Maximum | 0 |
| 0x245100 | 245100 Ladedrucksensor: Ladedruck zu hoch (nicht plausibel zu Druck vor Partikelfilter und Umgebungsdruck) | 0 |
| 0x245200 | 245200 Ladedrucksensor: Ladedruck zu niedrig (nicht plausibel zu Druck vor Partikelfilter und Umgebungsdruck) | 0 |
| 0x245300 | 245300 Partikelfiltersystem: maximaler Differenzdruck überschritten (Filter verstopft) | 0 |
| 0x245400 | 245400 Partikelfiltersystem: minimaler Differenzdruck unterschritten | 0 |
| 0x245500 | 245500 Partikelfiltersystem: minimaler Differenzdruck nach Regeneration unterschritten | 0 |
| 0x245600 | 245600 Partikelfiltersystem: Motorschutzregeneration wurde aktiviert (Partikelfilter stark beladen) | 0 |
| 0x245700 | 245700 Partikelfiltersystem: Partikelfilter stark beladen (Abgasgegendruck hoch) | 0 |
| 0x245800 | 245800 Partikelfiltersystem: Partikelfilter stark beladen (Abgasgegendruck über Maximum) | 0 |
| 0x245900 | 245900 Abgasgegendrucksensor: Druck vor Partikelfilter zu hoch (nicht plausibel zu Ladedruck und Umgebungsdruck) | 0 |
| 0x245A00 | 245A00 Abgasgegendrucksensor: Druck vor Partikelfilter zu niedrig (nicht plausibel zu Ladedruck und Umgebungsdruck) | 0 |
| 0x245B00 | 245B00 Partikelfiltersystem: maximale Regenerationsdauer überschritten | 0 |
| 0x245C00 | 245C00 Partikelfiltersystem: Strömungswiderstand zu hoch (Filter verstopft) | 0 |
| 0x245D00 | 245D00 Partikelfiltersystem: Strömungswiderstand zu niedrig (Filter defekt oder nicht verbaut) | 0 |
| 0x245E00 | 245E00 Partikelfiltersystem, Plausibilität: Differenz zwischen simulierter und korrelierter Rußmasse zu hoch | 0 |
| 0x245F00 | 245F00 Partikelfiltersystem, Plausibilität: Differenz zwischen simulierter und korrelierter Rußmasse zu niedrig | 0 |
| 0x246000 | 246000 Partikelfiltersystem: Berechnete Rußmasse im Partikelfilter über Maximum | 0 |
| 0x246100 | 246100 Abgasgegendruck nach Turbine, Plausibilität: Abgasgegendruck nicht plausibel | 0 |
| 0x246200 | 246200 Abgastemperatur vor Kat, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246300 | 246300 Abgastemperatur vor Kat während Regeneration, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246400 | 246400 Abgastemperatur vor Kat, Plausibilität: Temperatur unplausibel hoch | 0 |
| 0x246500 | 246500 Abgastemperatur vor Partikelfilter, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246600 | 246600 Abgastemperatur vor Partikelfilter während Regeneration, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246700 | 246700 Abgastemperatur vor Partikelfilter, Plausibilität: Temperatur unplausibel hoch | 0 |
| 0x246800 | 246800 Partikelfiltersystem: Filter ist noch regenerierbar | 0 |
| 0x246900 | 246900 Partikelfiltersystem: Filter ist nicht mehr regenerierbar | 0 |
| 0x246A00 | 246A00 Partikelfiltersystem: zu häufige Regenerationen | 0 |
| 0x246B00 | 246B00 Ladedrucksensor, Signal: Plausibilität mit Umgebungsdrucksensor im Leerlauf | 0 |
| 0x246C00 | 246C00 Plausibilität Drucksensoren: Druck vor Partikelfilter, Ladedruck und Umgebungsdruck nicht plausibel zueinander | 0 |
| 0x246D00 | 246D00 DDE-Steuergerät intern (R2S2_MscComm1): R2S2 Baustein 1 MSC-Kommunikation fehlerhaft | 0 |
| 0x246E00 | 246E00 DDE-Steuergerät intern (R2S2_MscComm2): R2S2 Baustein 2 MSC-Kommunikation fehlerhaft | 0 |
| 0x246F00 | 246F00 Raildruck-Plausibilität CPC (gekoppelte Druck/Mengen-Regelung): Stellgröße von Druckregelventil nicht plausibel | 0 |
| 0x247000 | 247000 Raildruck-Plausibilität CPC (gekoppelte Druck/Mengen-Regelung): Minimaldruck unterschritten | 0 |
| 0x247100 | 247100 Raildruck-Plausibilität CPC (gekoppelte Druck/Mengen-Regelung): Maximaldruck überschritten | 0 |
| 0x247500 | 247500 Raildruck-Plausibilität mengengeregelt: Raildruck zu niedrig/positive Regelabweichung | 0 |
| 0x247600 | 247600 Raildruck-Plausibilität mengengeregelt: Raildruck zu niedrig/positive Regelabweichung und Stellgröße zu hoch | 0 |
| 0x247700 | 247700 Raildruck-Plausibilität mengengeregelt: Raildruck zu hoch bei Maximalansteuerung Mengenregelventil (RA negativ) | 0 |
| 0x247900 | 247900 Raildruck-Plausibilität mengengeregelt: Minimaldruck unterschritten | 0 |
| 0x247A00 | 247A00 Raildruck-Plausibilität mengengeregelt: Maximaldruck überschritten | 0 |
| 0x248500 | 248500 Raildruck-Plausibilität druckgeregelt: Raildruck zu niedrig/positive Regelabweichung | 0 |
| 0x248600 | 248600 Raildruck-Plausibilität druckgeregelt: Raildruck zu niedrig/positive Regelabweichung und Ansteuerung Druckregelventil zu hoch | 0 |
| 0x248700 | 248700 Raildruck-Plausibilität druckgeregelt: Raildruck zu hoch/negative Regelabweichung bei Minimalansteuerung Druckregelventil | 0 |
| 0x248900 | 248900 Raildruck-Plausibilität druckgeregelt: Minimaldruck unterschritten | 0 |
| 0x248A00 | 248A00 Raildruck-Plausibilität druckgeregelt: Maximaldruck überschritten | 0 |
| 0x249300 | 249300 Raildrucküberwachung bei Motorstart: Raildruck bei Motorstart zu niedrig | 0 |
| 0x249400 | 249400 Speisespannung 1: Kurzschluss nach Plus oder Masse | 0 |
| 0x249500 | 249500 Speisespannung 2: Kurzschluss nach Plus oder Masse | 0 |
| 0x249600 | 249600 Speisespannung 3: Kurzschluss nach Plus oder Masse | 0 |
| 0x249700 | 249700 Drosselklappensteller: mechanisch defekt (Regelabweichung nahe geschlossener Position) | 0 |
| 0x249800 | 249800 Drosselklappensteller: elektrisch oder mechanisch defekt (Lagesensorfehler, Regelabweichung, Motorüberstrom) | 0 |
| 0x249900 | 249900 Drosselklappensteller: Ansteuersignal unplausibel, Versorgungsspannung ungültig, Übertemperatur | 0 |
| 0x249A00 | 249A00 Drosselklappensteller: elektrisch defekt (EEPROM) | 0 |
| 0x249B00 | 249B00 Ladedrucksteller: Ladedrucksteller elektrisch oder mechanisch defekt oder Übertemperatur | 0 |
| 0x249C00 | 249C00 Ladedrucksteller: Positionssensor im Ladedrucksteller defekt | 0 |
| 0x249D00 | 249D00 Ladedrucksteller, Ansteuerung: Ansteuersignal Ladedrucksteller unplausibel | 0 |
| 0x249E00 | 249E00 Ladedrucksteller: Übertemperaturerkennung im Ladedrucksteller | 0 |
| 0x249F00 | 249F00 Ladedrucksteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24A000 | 24A000 Ladedrucksteller, Statusleitung: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x24A100 | 24A100 Ladedrucksteller, Statusleitung: Kurzschluss nach Masse oder Signal fehlerhaft | 0 |
| 0x24A500 | 24A500 Drallklappensteller: mechanisch defekt (Regelabweichung nahe geschlossener Position) | 0 |
| 0x24A600 | 24A600 Drallklappensteller: elektrisch oder mechanisch defekt (Lagesensorfehler, Regelabweichung, Motorüberstrom) | 0 |
| 0x24A700 | 24A700 Drallklappensteller: Ansteuersignal unplausibel, Versorgungsspannung ungültig, Übertemperatur | 0 |
| 0x24A800 | 24A800 Drallklappensteller: elektrisch defekt (EEPROM) | 0 |
| 0x24A900 | 24A900 Elektrischer Zuheizer: Übertemperaturerkennung im Zuheizer | 0 |
| 0x24AA00 | 24AA00 Elektrischer Zuheizer 2 (nv): Fehler Zuheizer 2 | 0 |
| 0x24AB00 | 24AB00 Elektrischer Zuheizer 3 (nv): Fehler Zuheizer 3 | 0 |
| 0x24AC00 | 24AC00 Elektrischer Zuheizer 4 (nv): Fehler Zuheizer 4 | 0 |
| 0x24AD00 | 24AD00 Elektrischer Zuheizer, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24AE00 | 24AE00 Laufruheregler: Korrekturmenge mehrerer Zylinder ausserhalb zulässigem Bereich | 0 |
| 0x24AF00 | 24AF00 Laufruheregler Zylinder 1: Korrekturmenge zu niedrig | 0 |
| 0x24B000 | 24B000 Laufruheregler Zylinder 5: Korrekturmenge zu niedrig | 0 |
| 0x24B100 | 24B100 Laufruheregler Zylinder 3: Korrekturmenge zu niedrig | 0 |
| 0x24B200 | 24B200 Laufruheregler Zylinder 6: Korrekturmenge zu niedrig | 0 |
| 0x24B300 | 24B300 Laufruheregler Zylinder 2: Korrekturmenge zu niedrig | 0 |
| 0x24B400 | 24B400 Laufruheregler Zylinder 4: Korrekturmenge zu niedrig | 0 |
| 0x24B500 | 24B500 Laufruheregler Zylinder 1: Korrekturmenge zu hoch | 0 |
| 0x24B600 | 24B600 Laufruheregler Zylinder 5: Korrekturmenge zu hoch | 0 |
| 0x24B700 | 24B700 Laufruheregler Zylinder 3: Korrekturmenge zu hoch | 0 |
| 0x24B800 | 24B800 Laufruheregler Zylinder 6: Korrekturmenge zu hoch | 0 |
| 0x24B900 | 24B900 Laufruheregler Zylinder 2: Korrekturmenge zu hoch | 0 |
| 0x24BA00 | 24BA00 Laufruheregler Zylinder 4: Korrekturmenge zu hoch | 0 |
| 0x24BB00 | 24BB00 Nullmengenadaption Injektor Zylinder 1: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BC00 | 24BC00 Nullmengenadaption Injektor Zylinder 5: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BD00 | 24BD00 Nullmengenadaption Injektor Zylinder 3: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BE00 | 24BE00 Nullmengenadaption Injektor Zylinder 6: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BF00 | 24BF00 Nullmengenadaption Injektor Zylinder 2: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24C000 | 24C000 Nullmengenadaption Injektor Zylinder 4: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24C100 | 24C100 Nullmengenadaption Injektor Zylinder 1: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C200 | 24C200 Nullmengenadaption Injektor Zylinder 5: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C300 | 24C300 Nullmengenadaption Injektor Zylinder 3: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C400 | 24C400 Nullmengenadaption Injektor Zylinder 6: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C500 | 24C500 Nullmengenadaption Injektor Zylinder 2: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C600 | 24C600 Nullmengenadaption Injektor Zylinder 4: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C700 | 24C700 Anzahl gewünschter Einspritzungen begrenzt: durch Ladungsbilanz des Booster-Kondensators | 0 |
| 0x24C800 | 24C800 Anzahl gewünschter Einspritzungen begrenzt: durch Mengenbilanz der Hochdruckpumpe | 0 |
| 0x24C900 | 24C900 Anzahl gewünschter Einspritzungen begrenzt: durch Steuergeräte Software | 0 |
| 0x24CA00 | 24CA00 Anzahl gewünschter Einspritzungen begrenzt: durch Laufzeit | 0 |
| 0x24CE00 | 24CE00 Luftmassenmesser: Verhältnis berechnete zu gemessener Luftmasse zu groß | 0 |
| 0x24CF00 | 24CF00 Luftmassenmesser: Verhältnis berechnete zu gemessener Luftmasse zu klein | 0 |
| 0x24D000 | 24D000 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Unterbrechung | 0 |
| 0x24D100 | 24D100 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24D200 | 24D200 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24D300 | 24D300 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24D400 | 24D400 Klimaleistungsausgang, Ansteuerung: Unterbrechung | 0 |
| 0x24D500 | 24D500 Klimaleistungsausgang, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24D600 | 24D600 Klimaleistungsausgang, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24D700 | 24D700 Klimaleistungsausgang, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24DA00 | 24DA00 Verdichter-Bypassklappe, Ansteuerung: Unterbrechung | 0 |
| 0x24DB00 | 24DB00 Verdichter-Bypassklappe, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24DC00 | 24DC00 Verdichter-Bypassklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24DD00 | 24DD00 Verdichter-Bypassklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24E200 | 24E200 Kühlmittelthermostat, Plausibilität: Gemessene Temperatur zu niedrig im Vergleich zu modellierter Temperatur | 0 |
| 0x24E400 | 24E400 E-Boxlüfter, Ansteuerung: Unterbrechung | 0 |
| 0x24E500 | 24E500 E-Boxlüfter, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24E600 | 24E600 E-Boxlüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24E700 | 24E700 E-Boxlüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24E800 | 24E800 AGR-Kühler Bypassventil, Ansteuerung: Unterbrechung | 0 |
| 0x24E900 | 24E900 AGR-Kühler Bypassventil, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24EA00 | 24EA00 AGR-Kühler Bypassventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24EB00 | 24EB00 AGR-Kühler Bypassventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24EC00 | 24EC00 Motorlager, Ansteuerung: Unterbrechung | 0 |
| 0x24ED00 | 24ED00 Motorlager, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24EE00 | 24EE00 Motorlager, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24EF00 | 24EF00 Motorlager, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24F000 | 24F000 Freigabeleitung zum CAS, Ansteuerung: Unterbrechung | 0 |
| 0x24F100 | 24F100 Freigabeleitung zum CAS, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24F200 | 24F200 Freigabeleitung zum CAS, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24F300 | 24F300 Freigabeleitung zum CAS, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24F400 | 24F400 Elektrolüfter, Ansteuerung: Unterbrechung | 0 |
| 0x24F500 | 24F500 Elektrolüfter, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24F600 | 24F600 Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24F700 | 24F700 Kraftstofffilterheizung, Ansteuerung: Unterbrechung | 0 |
| 0x24F800 | 24F800 Kraftstofffilterheizung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24F900 | 24F900 Kraftstofffilterheizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24FA00 | 24FA00 Kraftstofffilterheizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x250100 | 250100 Mengenregelventil, Ansteuerung: Unterbrechung | 0 |
| 0x250200 | 250200 Mengenregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x250300 | 250300 Mengenregelventil Stromregelung: ADC signal range check high error of metering unit AD-channel | 0 |
| 0x250400 | 250400 Mengenregelventil Stromregelung: ADC signal range check low error of metering unit AD-channel | 0 |
| 0x250500 | 250500 Raildruckregelventil, Ansteuerung: Unterbrechung | 0 |
| 0x250600 | 250600 Raildruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x250700 | 250700 Stromregelung für Raildruckregelventil: nicht verwendet | 0 |
| 0x250800 | 250800 Stromregelung für Raildruckregelventil: nicht verwendet | 0 |
| 0x250900 | 250900 Raildrucksensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x250A00 | 250A00 Raildrucksensor, Signal: Kurzschluss nach Masse | 0 |
| 0x250F00 | 250F00 Anlasssperr-Relais, Ansteuerung: Unterbrechung | 0 |
| 0x251000 | 251000 Anlasssperr-Relais, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x251100 | 251100 Anlasssperr-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x251200 | 251200 Anlasssperr-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x251300 | 251300 Drosselklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x251400 | 251400 Drosselklappensteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x251500 | 251500 Drosselklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x251600 | 251600 Drosselklappensteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x251700 | 251700 Drosselklappensteller Ausgang 2 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x251800 | 251800 Drosselklappensteller Ausgang 1 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x251900 | 251900 Drosselklappensteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x251A00 | 251A00 Drosselklappensteller, Ansteuerung: Überlastung | 0 |
| 0x251B00 | 251B00 Drosselklappensteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x251C00 | 251C00 Drosselklappensteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x251D00 | 251D00 Drosselklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x251E00 | 251E00 Drosselklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x251F00 | 251F00 Drosselklappensteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252000 | 252000 Drosselklappensteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x252100 | 252100 Wastegate-Ventil, Ansteuerung: Unterbrechung | 0 |
| 0x252200 | 252200 Wastegate-Ventil, Ansteuerung: Endstufe Uebertemperatur | 0 |
| 0x252300 | 252300 Wastegate-Ventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252400 | 252400 Wastegate-Ventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x252500 | 252500 Ladedrucksteller, Ansteuerung: Unterbrechung | 0 |
| 0x252600 | 252600 Ladedrucksteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x252700 | 252700 Ladedrucksteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252800 | 252800 Ladedrucksteller VNT, Ansteuerung: Unterbrechung | 0 |
| 0x252900 | 252900 Ladedrucksteller VNT, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x252A00 | 252A00 Ladedrucksteller VNT, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252B00 | 252B00 Ladedrucksteller VNT, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x253400 | 253400 Drallklappensteller, Positionsregelung: Drallklappen zu weit offen/positive Regelabweichung | 0 |
| 0x253500 | 253500 Drallklappensteller, Positionsregelung: Drallklappen zu weit offen/positive Regelabweichung nahe geschlossen Position | 0 |
| 0x253600 | 253600 Drallklappensteller, Positionsregelung: Drallklappen zu weit geschlossen/negative Regelabweichung | 0 |
| 0x253700 | 253700 Drallklappensteller, Positionsregelung: Drallklappen zu weit geschlossen/negative Regelabweichung nahe geschlossen Position | 0 |
| 0x253800 | 253800 Elektrischer Zuheizer, Ansteuerung: Unterbrechung | 0 |
| 0x253900 | 253900 Elektrischer Zuheizer, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x253A00 | 253A00 Elektrischer Zuheizer, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x253D00 | 253D00 Injektoren, Spannungsmessung: Spannungsrohwert der Aktorspannungsmessung zu hoch | 0 |
| 0x253E00 | 253E00 Injektoren, Spannungsmessung: Spannungsrohwert der Aktorspannungsmessung zu niedrig | 0 |
| 0x253F00 | 253F00 Injektoren, Ansteuerung: Ansteuerdauer wurde extern verlängert | 0 |
| 0x254A00 | 254A00 Luftmassenmesser: Luftmasse zu niedrig (Signalfrequenz zu niedrig) | 0 |
| 0x254B00 | 254B00 Luftmassenmesser: Luftmasse zu hoch (Signalfrequenz zu hoch) | 0 |
| 0x254C00 | 254C00 Info - Sicherheitsfall: Fahrpedal und Bremse gleichzeitig aktiv | 0 |
| 0x254D00 | 254D00 Versorgungsspannung: Versorgungsspannung DDE überschritten | 0 |
| 0x254E00 | 254E00 Versorgungsspannung: Versorgungsspannung DDE unterschritten | 0 |
| 0x255000 | 255000 Bremsunterdrucksensor, Signal: Kurzschluss nach Plus | 0 |
| 0x255100 | 255100 Bremsunterdrucksensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x255200 | 255200 Kühlmitteltemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x255300 | 255300 Kühlmitteltemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x255400 | 255400 Kühlmitteltemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x255500 | 255500 Kühlmitteltemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x255600 | 255600 AGR-Kühler Bypassventil Positionssensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x255700 | 255700 AGR-Kühler Bypassventil Positionssensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x255800 | 255800 AGR-Kühler Bypassventil Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x255900 | 255900 AGR-Kühler Bypassventil Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x255A00 | 255A00 Steuergerätetemperatur: Temperatur zu hoch | 0 |
| 0x255B00 | 255B00 Abgasrückführsteller, Positionsregelung: Ventil zu weit geschlossen/positive Regelabweichung | 0 |
| 0x255C00 | 255C00 Abgasrückführsteller, Positionsregelung: Ventil zu weit offen/negative Regelabweichung | 0 |
| 0x255D00 | 255D00 Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x255E00 | 255E00 Abgasrückführsteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x255F00 | 255F00 Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x256000 | 256000 Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256100 | 256100 Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256200 | 256200 Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x256300 | 256300 Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x256400 | 256400 Abgasrückführsteller, Ansteuerung: Überlastung | 0 |
| 0x256500 | 256500 Abgasrückführsteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x256600 | 256600 Abgasrückführsteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x256700 | 256700 Niederdruck Abgasrückführsteller Positionsregelung: Ventil zu weit geschlossen/positive Regelabweichung | 0 |
| 0x256800 | 256800 Niederdruck Abgasrückführsteller Positionsregelung: Ventil zu weit offen/negative Regelabweichung | 0 |
| 0x256900 | 256900 Niederdruck Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x256A00 | 256A00 Niederdruck Abgasrückführsteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x256B00 | 256B00 Niederdruck Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x256C00 | 256C00 Niederdruck Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256D00 | 256D00 Niederdruck Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256E00 | 256E00 Niederdruck Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x256F00 | 256F00 Niederdruck Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x257000 | 257000 Niederdruck Abgasrückführsteller, Ansteuerung: Überlastung | 0 |
| 0x257100 | 257100 Niederdruck Abgasrückführsteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x257200 | 257200 Niederdruck Abgasrückführsteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x257300 | 257300 Niederdruck Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x257400 | 257400 Niederdruck Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x257500 | 257500 Niederdruck Abgasrückführsteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x257600 | 257600 Niederdruck Abgasrückführsteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x257700 | 257700 Niederdruck Abgasrückführsteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x257800 | 257800 Niederdruck Abgasrückführsteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x257900 | 257900 Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x257A00 | 257A00 Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x257B00 | 257B00 Abgasrückführsteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x257C00 | 257C00 Abgasrückführsteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x257D00 | 257D00 Abgasrückführsteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x257E00 | 257E00 Abgasrückführsteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x257F00 | 257F00 Überdrehzahlerkennung: Motordrehzahl mechanisch zu hoch | 0 |
| 0x258000 | 258000 TD-Drehzahlsignal, Ansteuerung: Unterbrechung | 0 |
| 0x258100 | 258100 TD-Drehzahlsignal, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x258200 | 258200 TD-Drehzahlsignal, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x258300 | 258300 Abgasgegendrucksensor, Signal: Signal zu hoch | 0 |
| 0x258400 | 258400 Abgastemperatursensor vor Kat, Signal: Signal zu hoch | 0 |
| 0x258500 | 258500 Abgastemperatursensor vor Partikelfilter, Signal: Signal zu hoch | 0 |
| 0x258600 | 258600 xDFC_EnhSRCMaxT3ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of third exhaust gas temperature | 0 |
| 0x258700 | 258700 Abgasgegendrucksensor: Signal zu niedrig | 0 |
| 0x258800 | 258800 Abgastemperatursensor vor Kat, Signal: Signal zu niedrig | 0 |
| 0x258900 | 258900 Abgastemperatursensor vor Partikelfilter, Signal: Signal zu niedrig | 0 |
| 0x258A00 | 258A00 xDFC_EnhSRCMinT3ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of third exhaust gas temperature | 0 |
| 0x258B00 | 258B00 Umgebungsdrucksensor (im Steuergerät verbaut), Bereich: obere physikalische Grenze überschritten | 0 |
| 0x258C00 | 258C00 Umgebungsdrucksensor (im Steuergerät verbaut), Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x258D00 | 258D00 Umgebungsdrucksensor (im Steuergerät verbaut), Signal: Kurzschluss nach Plus | 0 |
| 0x258E00 | 258E00 Umgebungsdrucksensor (im Steuergerät verbaut), Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x258F00 | 258F00 Umgebungstemperatursensor, Plausibilität: Umgebungstemperatur nicht plausibel | 0 |
| 0x259100 | 259100 Abgastemperatursensor vor Kat, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur vor Kat zu hoch | 0 |
| 0x259200 | 259200 Abgastemperatursensor vor Partikelfilter, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur vor Partikelfilter zu hoch | 0 |
| 0x259300 | 259300 Abgastemperatursensor vor SCR-Kat, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur vor SCR-Kat zu hoch | 0 |
| 0x259700 | 259700 Vorförderdrucksensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x259800 | 259800 Vorförderdrucksensor, Signal: Kurzschluss nach Masse | 0 |
| 0x259900 | 259900 Kraftstofffilter: Filter verstopft | 0 |
| 0x259A00 | 259A00 Vorföderdrucksensor vor Kraftstofffilter, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x259B00 | 259B00 Vorföderdrucksensor vor Kraftstofffilter, Signal: Kurzschluss nach Masse | 0 |
| 0x259C00 | 259C00 Kraftstofftemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x259D00 | 259D00 Kraftstofftemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x259E00 | 259E00 Kraftstofftemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x259F00 | 259F00 Kraftstofftemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25A000 | 25A000 Nullgangsensor, Signal: Periodendauer zu hoch | 0 |
| 0x25A100 | 25A100 Nullgangsensor, Signal: Periodendauer zu niedrig | 0 |
| 0x25A200 | 25A200 Nullgangsensor, Signal: Tastverhältnis zu hoch | 0 |
| 0x25A300 | 25A300 Nullgangsensor, Signal: Tastverhältnis zu niedrig | 0 |
| 0x25A400 | 25A400 Raildruck, Plausibiliät: Raildruck während Raildruckregelung für Injektoransteuerung zu niedrig | 0 |
| 0x25AD00 | 25AD00 Mengenregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x25AE00 | 25AE00 NOx-Sensor vor DeNOx-Kat, Plausibilität: Lambda-Signal im Vergleich zu anderen Sensoren unplausibel | 0 |
| 0x25AF00 | 25AF00 NOx-Sensor vor DeNOx-Kat, Bereich binäres Lambda: obere physikalische Grenze überschritten | 0 |
| 0x25B000 | 25B000 NOx-Sensor vor DeNOx-Kat, Bereich binäres Lambda: untere physikalische Grenze unterschritten | 0 |
| 0x25B100 | 25B100 NOx-Sensor vor DeNOx-Kat, Bereich lineares Lambda: obere physikalische Grenze überschritten | 0 |
| 0x25B200 | 25B200 NOx-Sensor vor DeNOx-Kat, Bereich lineares Lambda: untere physikalische Grenze unterschritten | 0 |
| 0x25B300 | 25B300 NOx-Sensor vor DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu hoch im Schub | 0 |
| 0x25B400 | 25B400 NOx-Sensor vor DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu niedrig im Nachlauf | 0 |
| 0x25B500 | 25B500 NOx-Sensor vor DeNOx-Kat, Bereich NOx: obere physikalische Grenze überschritten | 0 |
| 0x25B600 | 25B600 NOx-Sensor vor DeNOx-Kat, Bereich NOx: untere physikalische Grenze unterschritten | 0 |
| 0x25B700 | 25B700 NOx-Sensor vor DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Unterbrechung | 0 |
| 0x25B800 | 25B800 NOx-Sensor vor DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Kurzschluss | 0 |
| 0x25B900 | 25B900 NOx-Sensor nach DeNOx-Kat, Plausibilität: Lambda-Signal im Vergleich zu anderen Sensoren unplausibel | 0 |
| 0x25BE00 | 25BE00 NOx-Sensor nach DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu hoch im Schub | 0 |
| 0x25BF00 | 25BF00 NOx-Sensor nach DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu niedrig im Nachlauf | 0 |
| 0x25C000 | 25C000 NOx-Sensor nach DeNOx-Kat, Bereich NOx: obere physikalische Grenze überschritten | 0 |
| 0x25C100 | 25C100 NOx-Sensor nach DeNOx-Kat, Bereich NOx: untere physikalische Grenze unterschritten | 0 |
| 0x25C200 | 25C200 NOx-Sensor nach DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Unterbrechung | 0 |
| 0x25C300 | 25C300 NOx-Sensor nach DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Kurzschluss | 0 |
| 0x25C400 | 25C400 Abgasgegendrucksensor, Signal: dynamisch unplausibel | 0 |
| 0x25C500 | 25C500 Umgebungsdrucksensor (im Steuergerät verbaut): Umgebungsdruck nicht plausibel zu Druck vor Partikelfilter | 0 |
| 0x25C600 | 25C600 Abgasdifferenzdrucksensor Partikelfilter, Plausibilität: Schlauchleitungen vertauscht angeschlossen | 0 |
| 0x25C700 | 25C700 Partikelfiltersystem: Schlauchleitung zum Abgasgegendrucksensor vor Partikelfilter abgefallen | 0 |
| 0x25C800 | 25C800 Abgasgegendrucksensor: Sensordrift außerhalb Toleranz | 0 |
| 0x25C900 | 25C900 Abgastemperatursensor vor Partikelfilter, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur zu hoch | 0 |
| 0x25CB00 | 25CB00 Öldrucksensor, Signal: Kurzschluss nach Plus | 0 |
| 0x25CC00 | 25CC00 Öldrucksensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25CD00 | 25CD00 Raildruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x25CE00 | 25CE00 Ladedrucksensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25CF00 | 25CF00 Ladedrucksensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25D000 | 25D000 Ladedrucksensor, Signal: Kurzschluss nach Plus | 0 |
| 0x25D100 | 25D100 Ladedrucksensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25D200 | 25D200 Abgasgegendrucksensor vor Partikelfilter, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25D300 | 25D300 Abgasgegendrucksensor vor Partikelfilter, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25D400 | 25D400 Abgasdrucksensor vor Turbine, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25D500 | 25D500 Abgasdrucksensor vor Turbine, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25D600 | 25D600 Fahrpedalmodul Sensor 1, Signal: Kurzschluss nach Plus | 0 |
| 0x25D700 | 25D700 Fahrpedalmodul Sensor 2, Signal: Kurzschluss nach Plus | 0 |
| 0x25D800 | 25D800 Fahrpedalmodul Sensor 1, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25D900 | 25D900 Fahrpedalmodul Sensor 2, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25DA00 | 25DA00 Abgasdifferenzdrucksensor Partikelfilter, Signal: Kurzschluss nach Plus | 0 |
| 0x25DB00 | 25DB00 Abgasgegendrucksensor vor Partikelfilter, Signal: Kurzschluss nach Plus | 0 |
| 0x25DC00 | 25DC00 Abgasdrucksensor vor Turbine, Signal: Kurzschluss nach Plus | 0 |
| 0x25DE00 | 25DE00 Abgastemperatursensor vor Partikelfilter, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x25E200 | 25E200 Abgasdifferenzdrucksensor Partikelfilter, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25E300 | 25E300 Abgasgegendrucksensor vor Partikelfilter, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25E400 | 25E400 Abgasdrucksensor vor Turbine, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25E600 | 25E600 Abgastemperatursensor vor Partikelfilter, Signal: Kurzschluss nach Masse | 0 |
| 0x25EC00 | 25EC00 Abgasdifferenzdrucksensor Partikelfilter, Plausibilität: Schlauchleitung vor Partikelfilter zum Abgasdifferenzdrucksensor verstopft | 0 |
| 0x25ED00 | 25ED00 Fahrpedalmodul, Plausibilität: Plausibilität zwischen Sensor 1 und 2 verletzt | 0 |
| 0x25EE00 | 25EE00 WakeUp-Leitung (BN 12h) bzw. Klemme 15 (BN 11h): Klemme 15 Kurzschluss nach Masse | 0 |
| 0x25EF00 | 25EF00 Ansauglufttemperatursensor: Temperatur zu hoch (Tastverhältnis zu hoch) | 0 |
| 0x25F000 | 25F000 Ansauglufttemperatursensor: Temperatur zu niedrig (Tastverhältnis zu niedrig) | 0 |
| 0x25F100 | 25F100 Ansauglufttemperatursensor  (Referenzsignal für Luftmassenmesser): Frequenz zu niedrig | 0 |
| 0x25F200 | 25F200 Ansauglufttemperatursensor  (Referenzsignal für Luftmassenmesser): Frequenz zu hoch | 0 |
| 0x25F300 | 25F300 Ansauglufttemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus/Masse oder Temperatur zu hoch | 0 |
| 0x25F400 | 25F400 Ansauglufttemperatursensor, Signal: Temperatur zu niedrig | 0 |
| 0x25F500 | 25F500 Ansauglufttemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x25F600 | 25F600 Ansauglufttemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25F700 | 25F700 Ladelufttemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25F800 | 25F800 Ladelufttemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25F900 | 25F900 Ladelufttemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x25FA00 | 25FA00 Ladelufttemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25FB00 | 25FB00 Steuergerätetemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25FC00 | 25FC00 Steuergerätetemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25FD00 | 25FD00 Steuergerätetemperatursensor, Signal: Kurzschluss nach Plus | 0 |
| 0x25FE00 | 25FE00 Steuergerätetemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25FF00 | 25FF00 Abgastemperatursensor nach Abgasrückführkühler, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x260000 | 260000 Abgastemperatursensor nach Abgasrückführkühler, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260100 | 260100 Abgastemperatursensor nach Abgasrückführkühler, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x260200 | 260200 Abgastemperatursensor nach Abgasrückführkühler, Signal: Kurzschluss nach Masse | 0 |
| 0x260300 | 260300 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x260400 | 260400 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Signal: Kurzschluss nach Masse | 0 |
| 0x260500 | 260500 Ladelufttemperatursensor im Luftsammler, Bereich : obere physikalische Grenze überschritten | 0 |
| 0x260600 | 260600 Ladelufttemperatursensor im Luftsammler, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260700 | 260700 Ladelufttemperatursensor im Luftsammler, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x260800 | 260800 Ladelufttemperatursensor im Luftsammler, Signal: Kurzschluss nach Masse | 0 |
| 0x260900 | 260900 Abgastemperatursensor vor Katalysator, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x260A00 | 260A00 Abgastemperatursensor vor Katalysator, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260B00 | 260B00 Abgastemperatursensor vor Partikelfilter, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x260C00 | 260C00 Abgastemperatursensor vor Partikelfilter, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260F00 | 260F00 Drosselklappensteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x261000 | 261000 Drosselklappensteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x263200 | 263200 Drallklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x263300 | 263300 Drallklappensteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x263400 | 263400 Drallklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x263500 | 263500 Drallklappensteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x263600 | 263600 Drallklappensteller Ausgang 2 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x263700 | 263700 Drallklappensteller Ausgang 1 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x263800 | 263800 Drallklappensteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x263900 | 263900 Drallklappensteller, Ansteuerung: Überlastung | 0 |
| 0x263A00 | 263A00 Drallklappensteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x263B00 | 263B00 Drallklappensteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x263C00 | 263C00 Drallklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x263D00 | 263D00 Drallklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x263E00 | 263E00 Drallklappensteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x263F00 | 263F00 Drallklappensteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x264000 | 264000 Drallklappensteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x264100 | 264100 Drallklappensteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x264200 | 264200 Fahrgeschwindigkeitssignal: Geschwindigkeitssignal zu hoch | 0 |
| 0x264300 | 264300 Fahrgeschwindigkeitssignal: Plausibilität mit Einspritzmenge und Motordrehzahl | 0 |
| 0x264400 | 264400 Fahrgeschwindigkeitssignal über CAN: Signal fehlerhaft | 0 |
| 0x264500 | 264500 Kupplungsschalter, Signal: nicht plausibel mit Gangwechsel | 0 |
| 0x264600 | 264600 Niederdruck Abgasrückführ-Kühler, Plausibilität: Gemessene Temperatur nach Kühler zu hoch | 0 |
| 0x264700 | 264700 Abgasrückführ-Kühler, Plausibilität: Gemessene Temperatur nach Kühler zu hoch | 0 |
| 0x266000 | 266000 DDE-Steuergerät intern (Injektor Zylinder 1, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266100 | 266100 DDE-Steuergerät intern (Injektor Zylinder 5, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266200 | 266200 DDE-Steuergerät intern (Injektor Zylinder 3, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266300 | 266300 DDE-Steuergerät intern (Injektor Zylinder 6, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266400 | 266400 DDE-Steuergerät intern (Injektor Zylinder 2, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266500 | 266500 DDE-Steuergerät intern (Injektor Zylinder 4, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266600 | 266600 DDE-Steuergerät intern (Injektor Zylinder 1, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266700 | 266700 DDE-Steuergerät intern (Injektor Zylinder 5, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266800 | 266800 DDE-Steuergerät intern (Injektor Zylinder 3, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266900 | 266900 DDE-Steuergerät intern (Injektor Zylinder 6, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266A00 | 266A00 DDE-Steuergerät intern (Injektor Zylinder 2, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266B00 | 266B00 DDE-Steuergerät intern (Injektor Zylinder 4, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266C00 | 266C00 DDE-Steuergerät intern (Injektor Zylinder 1, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x266D00 | 266D00 DDE-Steuergerät intern (Injektor Zylinder 5, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x266E00 | 266E00 DDE-Steuergerät intern (Injektor Zylinder 3, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x266F00 | 266F00 DDE-Steuergerät intern (Injektor Zylinder 6, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x267000 | 267000 DDE-Steuergerät intern (Injektor Zylinder 2, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x267100 | 267100 DDE-Steuergerät intern (Injektor Zylinder 4, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x267200 | 267200 Injektoren Bank 1, Ansteuerung: Kurzschluss | 0 |
| 0x267300 | 267300 Injektoren Bank 2, Ansteuerung: Kurzschluss | 0 |
| 0x267400 | 267400 Injektoren Bank 1, Ladeschalter: Kurzschluss | 0 |
| 0x267500 | 267500 Injektoren Bank 2, Ladeschalter: Kurzschluss | 0 |
| 0x267800 | 267800 Injektor Zylinder 1, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267900 | 267900 Injektor Zylinder 5, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267A00 | 267A00 Injektor Zylinder 3, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267B00 | 267B00 Injektor Zylinder 6, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267C00 | 267C00 Injektor Zylinder 2, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267D00 | 267D00 Injektor Zylinder 4, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267E00 | 267E00 Injektor Zylinder 1, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x267F00 | 267F00 Injektor Zylinder 5, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268000 | 268000 Injektor Zylinder 3, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268100 | 268100 Injektor Zylinder 6, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268200 | 268200 Injektor Zylinder 2, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268300 | 268300 Injektor Zylinder 4, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268400 | 268400 Injektor Zylinder 1, Ansteuerung: Kurzschluss | 0 |
| 0x268500 | 268500 Injektor Zylinder 5, Ansteuerung: Kurzschluss | 0 |
| 0x268600 | 268600 Injektor Zylinder 3, Ansteuerung: Kurzschluss | 0 |
| 0x268700 | 268700 Injektor Zylinder 6, Ansteuerung: Kurzschluss | 0 |
| 0x268800 | 268800 Injektor Zylinder 2, Ansteuerung: Kurzschluss | 0 |
| 0x268900 | 268900 Injektor Zylinder 4, Ansteuerung: Kurzschluss | 0 |
| 0x268A00 | 268A00 Injektor Zylinder 1, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268B00 | 268B00 Injektor Zylinder 5, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268C00 | 268C00 Injektor Zylinder 3, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268D00 | 268D00 Injektor Zylinder 6, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268E00 | 268E00 Injektor Zylinder 2, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268F00 | 268F00 Injektor Zylinder 4, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x269000 | 269000 Injektor Zylinder 1, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269100 | 269100 Injektor Zylinder 5, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269200 | 269200 Injektor Zylinder 3, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269300 | 269300 Injektor Zylinder 6, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269400 | 269400 Injektor Zylinder 2, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269500 | 269500 Injektor Zylinder 4, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x26A600 | 26A600 Generator (Layer_BSD): Kommunikation über BSD-Schnittstelle nicht plausibel | 0 |
| 0x26A700 | 26A700 Generator (Layer_BSD): keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x26A800 | 26A800 Dummyfehler (Layer_FltMngTst): Maximum | 0 |
| 0x26A900 | 26A900 Dummyfehler (Layer_FltMngTst): Minimum | 0 |
| 0x26AA00 | 26AA00 Dummyfehler (Layer_FltMngTst): Not plausible | 0 |
| 0x26AB00 | 26AB00 Dummyfehler (Layer_FltMngTst): Signal | 0 |
| 0x26AC00 | 26AC00 Generator (Layer_GENELB): Bordnetzspannung im Vergleich zu Generatorsollspannung zu niedrig | 0 |
| 0x26AD00 | 26AD00 xGenerator (Layer_GENELB): Minimum | 0 |
| 0x26AE00 | 26AE00 xGenerator (Layer_GENELB): Not plausible | 0 |
| 0x26AF00 | 26AF00 xGenerator (Layer_GENELB): Signal | 0 |
| 0x26B000 | 26B000 Generator (Layer_GENEL): elektrischer Fehler | 0 |
| 0x26B100 | 26B100 Generator (Layer_GENHTB): Überhitzung (von DDE ermittelt) | 0 |
| 0x26B200 | 26B200 Generator (Layer_GENHT): Überhitzung (durch Generatorregler gemeldet) | 0 |
| 0x26B300 | 26B300 Generator (Layer_GENKOMM): keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x26B400 | 26B400 Generator (Layer_GENMECH): mechanischer Fehler | 0 |
| 0x26B500 | 26B500 Generator (Layer_GEN): Überhitzung | 0 |
| 0x26B600 | 26B600 Generator (Layer_GEN): mechanischer Fehler | 0 |
| 0x26B700 | 26B700 Generator (Layer_GENREGUPL):  falscher Generatorregler verbaut | 0 |
| 0x26B800 | 26B800 Generator (Layer_GEN): elektrischer Fehler | 0 |
| 0x26B900 | 26B900 Generator (Layer_GENUPL): falscher Generatortyp verbaut | 0 |
| 0x26BA00 | 26BA00 Intelligenter Batterie Sensor (Layer_DIBS1): Kommunikation erweitertes BSD Protokoll gestört | 0 |
| 0x26BB00 | 26BB00 Intelligenter Batterie Sensor (Layer_DIBS1): falsche Versionsnummer | 0 |
| 0x26BC00 | 26BC00 Intelligenter Batterie Sensor (Layer_DIBS1): keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x26BD00 | 26BD00 Intelligenter Batterie Sensor (Layer_DIBS2): interne Temperaturmessung defekt | 0 |
| 0x26BE00 | 26BE00 Intelligenter Batterie Sensor (Layer_DIBS2): interne Strommessung defekt | 0 |
| 0x26BF00 | 26BF00 Intelligenter Batterie Sensor (Layer_DIBS2): interne Spannungsmessung defekt | 0 |
| 0x26C000 | 26C000 Intelligenter Batterie Sensor (Layer_DIBS3): Kl15 WakeUp Kurzschluss nach Masse | 0 |
| 0x26C100 | 26C100 Intelligenter Batterie Sensor (Layer_DIBS3): Kl15 WakeUp Plausibilität | 0 |
| 0x26C200 | 26C200 Intelligenter Batterie Sensor (Layer_DIBS3): Systemfehler | 0 |
| 0x26CF00 | 26CF00 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Kraftstoffvorförderdruck zu niedrig/positive Regelabweichung | 0 |
| 0x26D000 | 26D000 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Kraftstoffvorförderdruck zu hoch/negative Regelabweichung | 0 |
| 0x26D100 | 26D100 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Leistungsaufnahme Kraftstoffpumpe für aktuellen Vorförderdruck zu niedrig | 0 |
| 0x26D200 | 26D200 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Leistungsaufnahme Kraftstoffpumpe für aktuellen Vorförderdruck zu hoch | 0 |
| 0x26D300 | 26D300 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Kraftstofffilterheizung PTC-Heizelement defekt | 0 |
| 0x26D400 | 26D400 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Kraftstofffilterheizung zu häufig aktiviert/Heizleistung zu gering | 0 |
| 0x26D500 | 26D500 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Kraftstoffdruck für aktuelle Kraftstoffpumpen-Ansteuerung zu hoch | 0 |
| 0x26D600 | 26D600 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Sig | 0 |
| 0x26DB00 | 26DB00 Powermanagement Batterie (Layer_PMBATT): Tiefentladung | 0 |
| 0x26DC00 | 26DC00 Powermanagement Batterie (Layer_PMBATT): Powermanagement defekt | 0 |
| 0x26DD00 | 26DD00 Powermanagement Bordnetz (Layer_PMBN): Überspannung | 0 |
| 0x26DE00 | 26DE00 Powermanagement Bordnetz (Layer_PMBN): Unterspannung | 0 |
| 0x26DF00 | 26DF00 Powermanagement Bordnetz (Layer_PMBN): Ruhestrom | 0 |
| 0x26E000 | 26E000 Powermanagement Bordnetz (Layer_PMBN): Batterieloser Betrieb | 0 |
| 0x26E100 | 26E100 Powermanagement Ruhestrom (Layer_PMRUHVERL): Ruhestromverletzung | 0 |
| 0x26E600 | 26E600 Ölniveau: Ölniveau zu niedrig | 0 |
| 0x26E700 | 26E700 Thermischer Ölniveausensor (Layer_TOENS): Signal fehlerhaft | 0 |
| 0x26E800 | 26E800 Thermischer Ölniveausensor (Layer_TOENS): Unterbrechung oder Kurzschluss nach Plus/Masse (Signalfrequenz zu niedrig) | 0 |
| 0x26EC00 | 26EC00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu hoch im Schub | 0 |
| 0x26ED00 | 26ED00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu niedrig | 0 |
| 0x26EE00 | 26EE00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Status während der Betriebsmodusumschaltung von fett zu mager zu lange ungültig | 0 |
| 0x26EF00 | 26EF00 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu hoch im Schub | 0 |
| 0x26F000 | 26F000 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu niedrig | 0 |
| 0x26F100 | 26F100 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Status während der Betriebsmodusumschaltung von fett zu mager zu lange ungültig | 0 |
| 0x26F200 | 26F200 Raildruckregelventil, Ansteuerung: Stromerhöhung bei verzögertem Start aktiv | 0 |
| 0x26F300 | 26F300 Raildrucksensor, Plausibilität: Raildrucksignalgradient zu hoch | 0 |
| 0x26FF00 | 26FF00 Luftmassenmesser: Signalabweichung zu hoch im Leerlauf | 0 |
| 0x270000 | 270000 Luftmassenmesser: Signalabweichung zu hoch in Vollast | 0 |
| 0x270100 | 270100 DDE-Steuergerät intern (ADC): Analog-/Digital-Wandler Einschaltkalibrierung dauert zu lang | 0 |
| 0x270200 | 270200 DDE-Steuergerät intern (ADC): Analog-/Digital-Wandler Spannungswandlung dauert zu lang | 0 |
| 0x270300 | 270300 DDE-Steuergerät intern (ADC2): Analog-/Digital-Wandler Einschaltkalibrierung dauert zu lang | 0 |
| 0x270400 | 270400 DDE-Steuergerät intern (ADC2): Analog-/Digital-Wandler Spannungswandlung dauert zu lang | 0 |
| 0x270500 | 270500 Mengendriftkompensation zurücksetzen: Mengendriftkompensation nach Injektor-Tausch nicht zurückgesetzt | 0 |
| 0x270600 | 270600 Tankfüllstand: sehr niedriger Tankfüllstand erkannt | 0 |
| 0x270700 | 270700 Nullgangsensor, Plausibilität: Nullgangsensor defekt | 0 |
| 0x270A00 | 270A00 Diagnosemaster Test, I14229_ROE_BufFull: Sendequeue voll bei ResponseOnEvent | 0 |
| 0x270C00 | 270C00 Injektor Zylinder 1, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x270D00 | 270D00 Injektor Zylinder 5, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x270E00 | 270E00 Injektor Zylinder 3, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x270F00 | 270F00 Injektor Zylinder 6, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x271000 | 271000 Injektor Zylinder 2, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x271100 | 271100 Injektor Zylinder 4, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x271200 | 271200 DDE-Steuergerät intern (IVPSplyDCDCOff_0): DC/DC-Wandler defekt, Bufferkondensator 1 kann nicht geladen werden | 0 |
| 0x271300 | 271300 DDE-Steuergerät intern (IVPSplyDCDCOff_1): DC/DC-Wandler defekt, Bufferkondensator 2 kann nicht geladen werden | 0 |
| 0x271600 | 271600 DDE-Steuergerät intern (Mengenabgleich): Checksumme falsch | 0 |
| 0x271700 | 271700 DDE-Steuergerät intern (Mengendriftkompensation): Checksumme falsch | 0 |
| 0x271900 | 271900 Dummyfehler 1: nicht verwendet | 0 |
| 0x271A00 | 271A00 Thermischer Ölniveausensor: Signal fehlerhaft | 0 |
| 0x271B00 | 271B00 Ölniveausensor: keine Kommunikation | 0 |
| 0x271C00 | 271C00 Raildruckregelventil, Adaption: Adaptionswert zu hoch | 0 |
| 0x271D00 | 271D00 Raildruckregelventil, Adaption: Adaptionswert zu niedrig | 0 |
| 0x271E00 | 271E00 Umschaltung Raildruckregelung MeUn: Raildruckregelung wurde durch Diagnose auf Mengenregelung umgeschaltet MeUn | 0 |
| 0x271F00 | 271F00 Umschaltung Raildruckregelung PCV: Raildruckregelung wurde durch Diagnose auf Druckregelung umgeschaltet PCV | 0 |
| 0x272100 | 272100 Partikelfiltersystem: Schlauchleitung oder Abgasgegendrucksensor vor Partikelfilter eingefroren | 0 |
| 0x272500 | 272500 WakeUp-Leitung (BN 12h) bzw. Klemme 15 (BN 11h): interner Steuergeräte-Fehler (Klemme 15 Auswerteschaltung defekt) | 0 |
| 0x272800 | 272800 Kühlmitteltemperatursensor, Plausibilität: Absolute plausibility test | 0 |
| 0x272900 | 272900 Kühlmitteltemperatursensor, Plausibilität: kein Temperaturanstieg | 0 |
| 0x272A00 | 272A00 Kühlmitteltemperatursensor, Plausibilität: Temperatur permanent zu hoch | 0 |
| 0x272B00 | 272B00 DDE-Steuergerät intern (EEP): EEP Fehler beim Löschen | 0 |
| 0x272C00 | 272C00 DDE-Steuergerät intern (EEP): EEP Fehler beim Lesen | 0 |
| 0x272D00 | 272D00 DDE-Steuergerät intern (EEP): EEP Fehler beim Schreiben | 0 |
| 0x272E00 | 272E00 Abgasrückführventil, Plausibilität: mechanisch defekt nahe geschlossener Position | 0 |
| 0x272F00 | 272F00 Abgasrückführventil, Plausibilität: mechanisch defekt nahe offener Position | 0 |
| 0x273000 | 273000 Niederdruck Abgasrückführventil, Plausibilität: mechanisch defekt nahe geschlossener Position | 0 |
| 0x273100 | 273100 Niederdruck Abgasrückführventil, Plausibilität: mechanisch defekt nahe offener Position | 0 |
| 0x273200 | 273200 Niederdruck Abgasrückführsteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x273300 | 273300 Niederdruck Abgasrückführventil, Plausibilität: mechanisch defekt während Offset-lernen | 0 |
| 0x273400 | 273400 Niederdruck Abgasrückführventil, Plausibilität: EEPROM Initwerte gesetzt | 0 |
| 0x273500 | 273500 Niederdruck Abgasrückführsteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x273600 | 273600 Abgasrückführsteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x273700 | 273700 Abgasrückführventil, Plausibilität: mechanisch defekt während Offset-lernen | 0 |
| 0x273800 | 273800 Abgasrückführventil, Plausibilität: EEPROM Initwerte gesetzt | 0 |
| 0x273900 | 273900 Abgasrückführsteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x273A00 | 273A00 DDE-Steuergerät intern (EngICO): Injektorabschaltung bei hoher Drehzahl während Momentenbegrenzung aus Ebene2 | 0 |
| 0x273B00 | 273B00 Nockenwellensensor, Signal: falsches Signal | 0 |
| 0x273C00 | 273C00 Nockenwellensensor, Signal: kein Signal | 0 |
| 0x273D00 | 273D00 Drehzahlüberwachung: Differenz zwischen Kurbelwellen- und Nockenwellen-Position zu hoch | 0 |
| 0x273E00 | 273E00 Kurbelwellensensor, Signal: falsches Signal | 0 |
| 0x273F00 | 273F00 Kurbelwellensensor, Signal: kein Signal | 0 |
| 0x274000 | 274000 Kraftstofftemperatursensor, Plausibilität: Differenz Kraftstofftemperatur zu Referenztemperatur zu hoch | 0 |
| 0x274300 | 274300 Diagnosemodus Kompressionstest: Kompressionstest aktiviert | 0 |
| 0x274900 | 274900 DDE-Hauptrelais: Relais schaltet zu früh ab oder Unterspannung | 0 |
| 0x274C00 | 274C00 Aussetzererkennung Zylinder 1: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x274D00 | 274D00 Aussetzererkennung Zylinder 5: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x274E00 | 274E00 Aussetzererkennung Zylinder 3: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x274F00 | 274F00 Aussetzererkennung Zylinder 6: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275000 | 275000 Aussetzererkennung Zylinder 2: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275100 | 275100 Aussetzererkennung Zylinder 4: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275200 | 275200 Aussetzererkennung in mehreren Zylindern: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275300 | 275300 DDE-Steuergerät intern (MoCADCNTP): Hardware Fehler, Analog-/Digital-Wandler NTP fehlerhaft | 0 |
| 0x275400 | 275400 DDE-Steuergerät intern (MoCADCTst): Hardware Fehler, Analog-/Digital-Wandler Spannung zu hoch | 0 |
| 0x275500 | 275500 DDE-Steuergerät intern (MoCADCVltgRatio): Hardware Fehler, Analog-/Digital-Wandler Spannungsverhältnis unplausibel | 0 |
| 0x275600 | 275600 DDE-Steuergerät intern (MoCComErrCnt): Hardware Fehler, Plausibilisierung von Funktionsrechner und Überwachungsmodul | 0 |
| 0x275700 | 275700 DDE-Steuergerät intern (MoCComSPI): Hardware Fehler, SPI-Kommunikation gestört | 0 |
| 0x275800 | 275800 DDE-Steuergerät intern (MoCROMErrXPg): Hardware Fehler, ROM defekt | 0 |
| 0x275900 | 275900 DDE-Steuergerät intern (MoCSOPHwNoRdy): Hardware Fehler, Hardware Initialisierung dauert zu lange | 0 |
| 0x275A00 | 275A00 DDE-Steuergerät intern (MoCSOPLoLi): Hardware Fehler, interne Spannung zu niedrig während Abschaltpfadtest | 0 |
| 0x275B00 | 275B00 DDE-Steuergerät intern (MoCSOPMM): Hardware Fehler, Watchdog Überwachungsmodul | 0 |
| 0x275C00 | 275C00 DDE-Steuergerät intern (MoCSOPTimeOut): Hardware Fehler, Abschaltpfadtest dauert zu lange | 0 |
| 0x275D00 | 275D00 DDE-Steuergerät intern (MoCSOPUpLi): Hardware Fehler, interne Spannung zu hoch während Abschaltpfadtest | 0 |
| 0x275E00 | 275E00 Funktionale Steuergeräteüberwachung, Fahrpedalmodul: Plausibilitaet zwischen Sensor 1 und 2 verletzt | 0 |
| 0x275F00 | 275F00 DDE-Steuergerät intern (MoFESpd): Kontinuierliche Momentenüberwachung, Motordrehzahlfehler | 0 |
| 0x276000 | 276000 DDE-Steuergerät intern (MoFInjDatPhi): Kontinuierliche Momentenüberwachung, Plausibilität zwischen Ansteuerbeginn und Einspritzart | 0 |
| 0x276200 | 276200 DDE-Steuergerät intern (MoFOvR): Kontinuierliche Momentenüberwachung, Schubüberwachung | 0 |
| 0x276300 | 276300 DDE-Steuergerät intern (MoFVehAccET): Beschleunigungsgeführte Momentenüberwachung, Ansteuerdauer nicht plausibel | 0 |
| 0x276400 | 276400 DDE-Steuergerät intern (MoFVehAccErrDiff): Beschleunigungsgeführte Momentenüberwachung, Ist-Beschleunigung größer Soll-Beschleunigung | 0 |
| 0x276500 | 276500 NOx-Sensor vor DeNOx-Kat, Heizung: Temperatur nach Aufheizphase zu niedrig | 0 |
| 0x276600 | 276600 NOx-Sensor nach DeNOx-Kat, Heizung: Temperatur nach Aufheizphase zu niedrig | 0 |
| 0x276900 | 276900 Kennfelder PhyMod_trq2qBasX_MAP falsch appliziert: Kennfeldwerte nicht plausibel | 0 |
| 0x276B00 | 276B00 Raildrucksensor Offset-Test: Offset Maximum überschritten | 0 |
| 0x276C00 | 276C00 Raildrucksensor Offset-Test: Offset Minimum unterschritten | 0 |
| 0x276D00 | 276D00 EWS-Manipulationsschutz: Check of maximum for DFP_SIA_E1 | 0 |
| 0x276E00 | 276E00 EWS-Manipulationsschutz: Noch kein Secret Key programmiert | 0 |
| 0x276F00 | 276F00 EWS-Manipulationsschutz: Kein authentisches Response erhalten | 0 |
| 0x277000 | 277000 EWS-Manipulationsschutz: Signal check for DFP_SIA_E1 | 0 |
| 0x277100 | 277100 Schnittstelle EWS-DDE: CAS-Bus HW-Fehler | 0 |
| 0x277200 | 277200 Schnittstelle EWS-DDE: Empfangsfehler der CAS-Schnittstelle, Frame-Fehler | 0 |
| 0x277300 | 277300 Schnittstelle EWS-DDE: Empfangsfehler der CAS-Schnittstelle, CRC-Fehler | 0 |
| 0x277400 | 277400 Schnittstelle EWS-DDE: Timeout EWS4 Telegramm | 0 |
| 0x277500 | 277500 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, kein freier Secret Key verfügbar | 0 |
| 0x277600 | 277600 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, Schreibfehler FSC | 0 |
| 0x277700 | 277700 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, Checksummenfehler | 0 |
| 0x277800 | 277800 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, Schreibfehler Secret Key | 0 |
| 0x277900 | 277900 Botschaft EWS-DDE fehlerhaft: Check of maximum for DFP_SIA_E4 | 0 |
| 0x277A00 | 277A00 Botschaft EWS-DDE fehlerhaft: Empfangsfehler CAN-Bus | 0 |
| 0x277B00 | 277B00 Botschaft EWS-DDE fehlerhaft: Plausibility check for DFP_SIA_E4 | 0 |
| 0x277C00 | 277C00 Botschaft EWS-DDE fehlerhaft: Timeout EWS4-Telegramm | 0 |
| 0x277D00 | 277D00 DDE-Steuergerät intern (Recovery visible): Recovery aufgetreten | 0 |
| 0x277E00 | 277E00 DDE-Steuergerät intern (Recovery locked): Recovery aufgetreten | 0 |
| 0x277F00 | 277F00 DDE-Steuergerät intern (Recovery suppressed): Recovery aufgetreten | 0 |
| 0x278500 | 278500 Motorabstellzeit, Plausibilität: Ermittlung Motorabstellzeit nicht plausibel | 0 |
| 0x278600 | 278600 Ansauglufttemperatursensor, Plausibilität: Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x278700 | 278700 Ladelufttemperatursensor, Plausibilität: Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x278800 | 278800 Abgastemperatursensor nach Abgasrückführkühler, Plausibilität: Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x278900 | 278900 Drosselklappensteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x278A00 | 278A00 Drosselklappensteller: elektrisch oder mechanisch defekt | 0 |
| 0x278B00 | 278B00 Drosselklappe, Plausibilität: Drosselklappe mechanisch defekt während Offset-lernen | 0 |
| 0x278C00 | 278C00 Drosselklappe, Positionsregelung : Drosselklappe zu weit geschlossen/positive Regelabweichung | 0 |
| 0x278D00 | 278D00 Drosselklappe, Positionsregelung : Drosselklappe zu weit offen/negative Regelabweichung | 0 |
| 0x278E00 | 278E00 Drosselklappensteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x278F00 | 278F00 Drallklappe, Plausibilität: mechanisch defekt | 0 |
| 0x279000 | 279000 Drallklappensteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x279100 | 279100 Drallklappe, Plausibilität: Drallklappe mechanisch defekt während Offset-lernen | 0 |
| 0x279200 | 279200 Drallklappe, Plausibilität: EEPROM Initwerte gesetzt | 0 |
| 0x279300 | 279300 Drallklappensteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x279400 | 279400 Drallklappe, Plausibilität: Feder gebrochen | 0 |
| 0x279700 | 279700 Aktive-Kühlluftklappe, Diagnoserückmeldung: Anschlag geschlossen wurde nicht erkannt | 0 |
| 0x279800 | 279800 Aktive-Kühlluftklappe, Diagnoserückmeldung: Anschlag offen wurde zu früh erkannt | 0 |
| 0x279900 | 279900 Aktive-Kühlluftklappe, Diagnoserückmeldung: Anschlag offen wurde nicht erkannt | 0 |
| 0x279A00 | 279A00 Aktive-Kühlluftklappe, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x279B00 | 279B00 Aktive-Kühlluftklappe, Diagnoserückmeldung: elektrischer Fehler | 0 |
| 0x279C00 | 279C00 Aktive-Kühlluftklappe, Diagnoserückmeldung: Temperaturfehler | 0 |
| 0x279D00 | 279D00 Aktive-Kühlluftklappe, Diagnoserückmeldung: Spannungsfehler | 0 |
| 0x279E00 | 279E00 Elektrolüfter-Spannungsversorgung, Ansteuerung: Unterbrechung | 0 |
| 0x279F00 | 279F00 Elektrolüfter-Spannungsversorgung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x27A000 | 27A000 Elektrolüfter-Spannungsversorgung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x27A100 | 27A100 Elektrolüfter-Spannungsversorgung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x27A600 | 27A600 DDE-Steuergerät, Varianten-Codierung: Vergleich Codierprüfstempel zu VIN fehlerhaft | 0 |
| 0x27A700 | 27A700 DDE-Steuergerät, Varianten-Codierung: empfangene Codierdaten unplausibel | 0 |
| 0x27A800 | 27A800 DDE-Steuergerät, Varianten-Codierung: Varianten-Codierung fehlt oder Neutraldaten verwendet | 0 |
| 0x27A900 | 27A900 DDE-Steuergerät, Varianten-Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x27AA00 | 27AA00 DDE-Steuergerät, Varianten-Codierung: Abbruch während Codierdaten oder Codierprüfstempel schreiben | 0 |
| 0x27AB00 | 27AB00 DDE-Steuergerät intern (Zyklische Authentisierung): Datensatzprüfung nicht in Ordnung | 0 |
| 0x27AC00 | 27AC00 DDE-Steuergerät intern (Zyklische Authentisierung): Programmstandsprüfung nicht in Ordnung | 0 |
| 0x27AF00 | 27AF00 DDE-Steuergerät intern (MoFBrk): Beschleunigungsgeführte Momentenüberwachung, Ebene 2 Bremssignal nicht plausibel | 0 |
| 0x27B200 | 27B200 Niederdruck Abgasrückführ-Kühler, Plausibilität: Kühlerwirkungsgrad zu niedrig | 0 |
| 0x27B300 | 27B300 xDFC_ASModPIndVolDvtMax: Dfc for TwinTrbn observer | 0 |
| 0x27B400 | 27B400 xDFC_ASModPIndVolDvtMaxLP: Dfc for TwinTrbn observer | 0 |
| 0x27B500 | 27B500 xDFC_ASModPIndVolDvtMin: Dfc for TwinTrbn observer | 0 |
| 0x27B600 | 27B600 xDFC_ASModPIndVolDvtMinLP: Dfc for TwinTrbn observer | 0 |
| 0x27B700 | 27B700 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu hoch | 0 |
| 0x27B800 | 27B800 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu hoch während Ladedruckregelung Niederdruckstufe | 0 |
| 0x27B900 | 27B900 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu niedrig | 0 |
| 0x27BA00 | 27BA00 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu niedrig während Ladedruckregelung Niederdruckstufe | 0 |
| 0x27BB00 | 27BB00 Botschaft (Ladedrucksteller-Diagnoserückmeldung, 0xXX): Signal(e) in Botschaft nicht gültig | 0 |
| 0x27BC00 | 27BC00 Botschaft (Ladedrucksteller-Diagnoserückmeldung, 0xXX): Botschaft von Ladedrucksteller ausgefallen | 0 |
| 0x27BD00 | 27BD00 Bitserielle Datenschnittstelle BSD: Kurzschluss | 0 |
| 0x27BE00 | 27BE00 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu hoch (aktuelle Stellgröße des inneren Regelkreises am Maximalwert) | 0 |
| 0x27BF00 | 27BF00 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu niedrig (aktuelle Stellgröße des inneren Regelkreises am Minimalwert) | 0 |
| 0x27C000 | 27C000 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu hoch (aktuelle Stellgröße des äußeren Regelkreises am Maximalwert) | 0 |
| 0x27C100 | 27C100 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu niedrig (aktuelle Stellgröße des äußeren Regelkreises am Minimalwert) | 0 |
| 0x27C200 | 27C200 Partikelfiltersystem: zu häufige Motorschutzregenerationen | 0 |
| 0x27C700 | 27C700 Umgebungstemperatursensor, Plausibilität: Umgebungstemperatur nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27C800 | 27C800 Reduktionsmittel-AktivtankTemperatursensor, Plausibilität: Reduktionsmittel-Aktivtank Temperatur nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27C900 | 27C900 Ladelufttemperatursensor, Plausibilität: Ladelufttemperatur nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27CA00 | 27CA00 Abgastemperatursensor nach Abgasrückführkühler, Plausibilität: Temperatur nach Abgasrückführkühler nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27CB00 | 27CB00 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Plausibilität: Temperatur nach Niederdruck-Abgasrückführkühler nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27CC00 | 27CC00 Temperatursensoren, Plausibilität: Mehrere Temperatursignale zueinander nicht plausibel | 0 |
| 0x27D000 | 27D000 Luftmassenmesser, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27D100 | 27D100 Luftmassenmesser, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27D200 | 27D200 Niederdruck Abgasrückführsteller Positionssensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27D500 | 27D500 Niederdruck Abgasrückführsteller Positionssensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27D800 | 27D800 Abgasrückführsteller Positionssensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27D900 | 27D900 Abgasrückführsteller Positionssensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27DA00 | 27DA00 Umgebungstemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27DB00 | 27DB00 Umgebungstemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27DC00 | 27DC00 xDFC_ExhFlpLPGovDvtMax: DFC for Governor deviation crossing max threshold | 0 |
| 0x27DD00 | 27DD00 xDFC_ExhFlpLPGovDvtMin: DFC for Governor deviation crossing min threshold | 0 |
| 0x27DE00 | 27DE00 xDFC_ExhFlpLPOL: No load error | 0 |
| 0x27DF00 | 27DF00 xDFC_ExhFlpLPSCB: Short circuit to battery error | 0 |
| 0x27E000 | 27E000 xDFC_ExhFlpLPSCG: Short circuit to ground error | 0 |
| 0x27E100 | 27E100 xDFC_ExhFlpLPSRCMax: DFC for signal range check high error | 0 |
| 0x27E200 | 27E200 xDFC_ExhFlpLPSRCMin: DFC for signal range check low error | 0 |
| 0x27E300 | 27E300 Vorförderdrucksensor, Offset-Test: Offset ausserhalb zulässigem Bereich | 0 |
| 0x27ED00 | 27ED00 Abgastemperaturregler, Plausibilität: Ansprechzeit des inneren Regelkreises zu hoch | 0 |
| 0x27EE00 | 27EE00 Abgastemperaturregler, Plausibilität: Ansprechzeit des äußeren Regelkreises zu hoch | 0 |
| 0x27EF00 | 27EF00 Partikelfiltersystem: erhöhte Regenerationsdauer | 0 |
| 0x27F000 | 27F000 Ladeluftschlauch-Überwachung im Leerlauf: Ladeluftschlauch abgefallen | 0 |
| 0x27F100 | 27F100 Ladeluftschlauch-Überwachung: Ladeluftschlauch abgefallen | 0 |
| 0x27F200 | 27F200 Motorschutz: Motorabschaltung bei Überdrehzahl wegen Ölansaugung | 0 |
| 0x27F300 | 27F300 Kraftstofftemperatursensor, Plausibilität: Temperatursignalgradient zu hoch | 0 |
| 0x27F400 | 27F400 Injektor Zylinder 1, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F500 | 27F500 Injektor Zylinder 5, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F600 | 27F600 Injektor Zylinder 3, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F700 | 27F700 Injektor Zylinder 6, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F800 | 27F800 Injektor Zylinder 2, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F900 | 27F900 Injektor Zylinder 4, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27FA00 | 27FA00 Umgebungstemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x27FB00 | 27FB00 Umgebungstemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x27FC00 | 27FC00 DDE-Steuergerät intern (IVHFreeInjPlcErr): Kollision bei der Programmierung der Einspritzplätze | 0 |
| 0x27FD00 | 27FD00 DDE-Steuergerät intern (MoCSOPErrMMRespByte): Hardware Fehler, Synchronisationsverlust vom Watchdog zur CPU | 0 |
| 0x27FE00 | 27FE00 DDE-Steuergerät intern (MoCSOPErrRespTime): Hardware Fehler, Antwortzeitumschaltung für den Watchdog funktioniert nicht | 0 |
| 0x27FF00 | 27FF00 DDE-Steuergerät intern (MoCSOPErrSPI): Hardware Fehler, SPI Kommunikationsfehler während des Abschaltpfadtests | 0 |
| 0x280000 | 280000 DDE-Steuergerät intern (MoCSOPOSTimeOut): Hardware Fehler, Betriebssystemzeitüberschreitung für Abschaltpfadtestprozess ist überschritten | 0 |
| 0x280100 | 280100 DDE-Steuergerät intern (MoCSOPPSIniTimeOut): Hardware Fehler, keine Einspritzungen möglich | 0 |
| 0x280200 | 280200 Partikelfiltersystem, Plausibilität: Partikelfilter-Effizienz zu niedrig | 0 |
| 0x280300 | 280300 Partikelfiltersystem: Regeneration unvollständig | 0 |
| 0x280400 | 280400 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x280500 | 280500 Abgasrückführ-Kühler, Plausibilität: Kühlerwirkungsgrad zu niedrig | 0 |
| 0x280C00 | 280C00 NOx-Sensor vor DeNOx-Kat, Versorgungsspannung: Versorgungsspannung am Nox-Sensor zu niedrig | 0 |
| 0x280D00 | 280D00 NOx-Sensor vor DeNOx-Kat, Signal NOx: NOx-Signal zu lange ungültig | 0 |
| 0x280E00 | 280E00 NOx-Sensor nach DeNOx-Kat, Versorgungsspannung: Versorgungsspannung am Nox-Sensor zu niedrig | 0 |
| 0x280F00 | 280F00 NOx-Sensor nach DeNOx-Kat, Signal NOx: NOx-Signal zu lange ungültig | 0 |
| 0x281600 | 281600 Abgasrückführ-Regelung, Funktion: Maximale Zeitdauer bis Abgasrückführ-Regelung aktiv überschritten | 0 |
| 0x281700 | 281700 Öldruckschalter, Plausibilität: Öldruckstatus nicht plausibel zu Motorbetriebszustand | 0 |
| 0x281800 | 281800 Ladedruckregelung, Plausibilität: Maximal zulässiger Ladedruck überschritten | 0 |
| 0x281900 | 281900 Partikelfiltersystem: Unplausibler Abgasgegedrucksprung (ResFlow-Sprung) erkannt | 0 |
| 0x281A00 | 281A00 Lambdasonde: unplausible Sauerstoffkonzentration (Signal durch Heizung beeinflusst) | 0 |
| 0x281B00 | 281B00 Lambdasonde nach Kat: unplausible Sauerstoffkonzentration (Signal durch Heizung beeinflusst) | 0 |
| 0x281C00 | 281C00 Lambdaregelung, Regelabweichung: Lambda zu hoch/negative Regelabweichung (im Fettbetrieb während DeNOx-Kat-Regeneration) | 0 |
| 0x281D00 | 281D00 Lambdaregelung, Regelabweichung: Lambda zu niedrig/positive Regelabweichung (im Fettbetrieb während DeNOx-Kat-Regeneration) | 0 |
| 0x281E00 | 281E00 Lambdaregelung, Plausibilität: Einregeldauer nach Regelungsbeginn zu lang (instabile Lambdavorsteuerung) | 0 |
| 0x281F00 | 281F00 xDFC_NSCLamBinDynMax: Lambda signal error during new lean mode (Lambda is still rich Down Stream of NSC) | 0 |
| 0x282000 | 282000 xDFC_NSCLamBinSlpMax: Lambda signal error at the start of Rich Mode operation (Lambda is rich immediately Down Stream of NSC) | 0 |
| 0x282100 | 282100 xDFC_NSCLamBinStkRMMin: Lambda signal error at the end of Rich Mode Operation (Lambda is still lean Down Stream of NSC) | 0 |
| 0x282200 | 282200 xDFC_NSCLamDynNSCDsNegMax: Fault check Path for the derivative lambda value downstream NSC | 0 |
| 0x282300 | 282300 xDFC_NSCLamDynNSCDsPosMin: Fault check Path for the derivative lambda value downstream NSC | 0 |
| 0x282400 | 282400 xDFC_NSCLamDynTrbnDsNegMax: Fault check Path for the derivative lambda value upstream NSC | 0 |
| 0x282500 | 282500 xDFC_NSCLamDynTrbnDsPosMin: Fault check Path for the derivative lambda value upstream NSC | 0 |
| 0x282600 | 282600 xDFC_NSCNOxDyn: Fault check Path for the dynamic NOx signal | 0 |
| 0x282700 | 282700 xDFC_NSCNOxSlipMax: Fault check Path for the NSC NOx slip | 0 |
| 0x282800 | 282800 xDFC_NSCNOxStkRM: Fault check Path for the static NOx signal during rich-mixture operation | 0 |
| 0x282900 | 282900 NOx-Speicherkat, Plausibilität: NOx Regenerationswirkungsgrad zu niedrig | 0 |
| 0x282A00 | 282A00 NOx Speicherkat, Plausibilität: NSC-Speicherfähigkeit zu niedrig (Reduktionsmittelschlupf zu hoch) | 0 |
| 0x282B00 | 282B00 Abgasrückführraten-Regelung, Regelabweichung: Abgasrückführrate zu niedrig/positive Regelabweichung | 0 |
| 0x282C00 | 282C00 Abgasrückführraten-Regelung, Regelabweichung: Abgasrückführrate zu hoch/negative Regelabweichung | 0 |
| 0x282D00 | 282D00 Lambdasonde, Ansteuerung Heizung: Kurzschluss nach Plus | 0 |
| 0x282E00 | 282E00 Lambdasonde nach Kat, Ansteuerung Heizung: Kurzschluss nach Plus | 0 |
| 0x282F00 | 282F00 Lambdasonde, Ansteuerung Heizung: Kurzschluss nach Masse | 0 |
| 0x283000 | 283000 Lambdasonde nach Kat, Ansteuerung Heizung: Kurzschluss nach Masse | 0 |
| 0x283100 | 283100 Lambdasonde, Ansteuerung Heizung: Endstufe Übertemperatur | 0 |
| 0x283200 | 283200 Lambdasonde nach Kat, Ansteuerung Heizung: Endstufe Übertemperatur | 0 |
| 0x283300 | 283300 Lambdasonde, Ansteuerung Heizung: Unterbrechung | 0 |
| 0x283400 | 283400 Lambdasonde nach Kat, Ansteuerung Heizung: Unterbrechung | 0 |
| 0x283500 | 283500 Lambdasonde, Heizung: Temperatur zu hoch | 0 |
| 0x283600 | 283600 Lambdasonde nach Kat, Heizung: Temperatur zu hoch | 0 |
| 0x283700 | 283700 Lambdasonde, Heizung: Temperatur zu niedrig | 0 |
| 0x283800 | 283800 Lambdasonde nach Kat, Heizung: Temperatur zu niedrig | 0 |
| 0x283900 | 283900 Mengenregelventil, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x283A00 | 283A00 Raildruckregelventil, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x283B00 | 283B00 xDFC_NSCChar: Diagnostic fault check for characteristic of NSC | 0 |
| 0x283C00 | 283C00 Kühlmitteltemperatursensor, Signal: CAN Wert nicht plausibel | 0 |
| 0x283D00 | 283D00 xDFC_EnhSRCMaxT4ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of Fourth exhaust gas temperature | 0 |
| 0x283E00 | 283E00 xDFC_EnhSRCMaxT5ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of fifth exhaust gas temperature | 0 |
| 0x283F00 | 283F00 xDFC_EnhSRCMaxT6ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of sixth exhaust gas temperature | 0 |
| 0x284000 | 284000 xDFC_EnhSRCMinT4ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of Fourth exhaust gas temperature | 0 |
| 0x284100 | 284100 xDFC_EnhSRCMinT5ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of fifth exhaust gas temperature | 0 |
| 0x284200 | 284200 xDFC_EnhSRCMinT6ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of sixth exhaust gas temperature | 0 |
| 0x284300 | 284300 Abgastemperatursensor vor Kat, Plausibilität: Abgastemperatur vor Kat nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284400 | 284400 Abgastemperatursensor vor Partikelfilter, Plausibilität: Abgastemperatur vor Partikelfilter nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284500 | 284500 Abgastemperatursensor vor SCR-Kat, Plausibilität: Abgastemperatur vor SCR-Kat nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284600 | 284600 Abgastemperatursensor 4, Plausibilität: Abgastemperatur 4 nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284700 | 284700 Abgastemperatursensor 5, Plausibilität: Abgastemperatur 5 nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284800 | 284800 Abgastemperatursensor 6, Plausibilität: Abgastemperatur 6 nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284900 | 284900 Abgastemperatursensoren, Plausibilität: Mehrere Abgastemperatursignale zueinander nicht plausibel | 0 |
| 0x284A00 | 284A00 Abgastemperatursensor 4, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur 4 zu hoch | 0 |
| 0x284B00 | 284B00 Abgastemperatursensor 5, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur 5 zu hoch | 0 |
| 0x284C00 | 284C00 Abgastemperatursensor 6, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur 6 zu hoch | 0 |
| 0x284D00 | 284D00 Lambdasonde, Signal Nernstspannung: Unterbrechung | 0 |
| 0x284E00 | 284E00 Lambdasonde nach Kat, Signal Nernstspannung: Unterbrechung | 0 |
| 0x284F00 | 284F00 Lambdasonde, Signal Pumpstrom: Unterbrechung | 0 |
| 0x285000 | 285000 Lambdasonde nach Kat, Signal Pumpstrom: Unterbrechung | 0 |
| 0x285100 | 285100 Lambdasonde, Signal virtuelle Masse: Unterbrechung | 0 |
| 0x285200 | 285200 Lambdasonde nach Kat, Signal virtuelle Masse: Unterbrechung | 0 |
| 0x285300 | 285300 Lambdasonde: Signalspannung zu hoch oder Signal Abgleichstrom Unterbrechung | 0 |
| 0x285400 | 285400 Lambdasonde nach Kat: Signalspannung zu hoch oder Signal Abgleichstrom Unterbrechung | 0 |
| 0x285500 | 285500 Lambdasonde: Signalspannung zu niedrig | 0 |
| 0x285600 | 285600 Lambdasonde nach Kat: Signalspannung zu niedrig | 0 |
| 0x285700 | 285700 DDE-Steuergerät intern (LSU SPI): Spannungsversorgung am SPI Chip zu niedrig (Lambda-Signalauswertung) | 0 |
| 0x285800 | 285800 DDE-Steuergerät intern (LSU nach Kat SPI): Spannungsversorgung am SPI Chip zu niedrig (Lambda-Signalauswertung) | 0 |
| 0x285900 | 285900 Lambdasonde, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Plus | 0 |
| 0x285A00 | 285A00 Lambdasonde nach Kat, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Plus | 0 |
| 0x285B00 | 285B00 Lambdasonde, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Masse | 0 |
| 0x285C00 | 285C00 Lambdasonde nach Kat, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Masse | 0 |
| 0x285D00 | 285D00 DDE-Steuergerät intern (MoFDCS): Kontinuierliche Momentenüberwachung, MSR-Begrenzung nur in Ebene 2 aktiv und in Ebene 1 inaktiv | 0 |
| 0x285E00 | 285E00 DDE-Steuergerät intern (MoFVSS): Beschleunigungsgeführte Momentenüberwachung, Ebene 2 Fahrgeschwindigkeitssignal nicht plausibel | 0 |
| 0x285F00 | 285F00 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x286000 | 286000 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x286100 | 286100 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x286200 | 286200 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x286300 | 286300 DDE-Steuergerät intern (IVDiaChp): Injektoren Bank 1, Fehler im Ansteuerbaustein | 0 |
| 0x286400 | 286400 Lambdasonden, Plausibilität: Differenz der Sauerstoffkonzentrationen zwischen Lambdasonde und Lambdasonde nach Kat zu hoch | 0 |
| 0x286500 | 286500 Lambdasonde: Dynamik des Sondensignals unplausibel | 0 |
| 0x286600 | 286600 Lambdasonde nach Kat: Dynamik des Sondensignals unplausibel | 0 |
| 0x286700 | 286700 Lambdasonde: Dynamik des Sondensignals beim Last-Schub-Übergang unplausibel (Aktualisierung von OBD-DIUMPR) | 0 |
| 0x286800 | 286800 Lambdasonde nach Kat: Dynamik des Sondensignals beim Last-Schub-Übergang unplausibel (Aktualisierung von OBD-DIUMPR) | 0 |
| 0x286900 | 286900 DDE-Steuergerät intern (LSU Kalibrierung): Offset der Lambda-Signalauswertung zu hoch (Nullpunktkorrektur) | 0 |
| 0x286A00 | 286A00 DDE-Steuergerät intern (LSU nach Kat Kalibrierung): Offset der Lambda-Signalauswertung zu hoch (Nullpunktkorrektur) | 0 |
| 0x286B00 | 286B00 DDE-Steuergerät intern (LSU Kalibrierung): Offset der Lambda-Signalauswertung zu niedrig (Nullpunktkorrektur) | 0 |
| 0x286C00 | 286C00 DDE-Steuergerät intern (LSU nach Kat Kalibrierung): Offset der Lambda-Signalauswertung zu niedrig (Nullpunktkorrektur) | 0 |
| 0x286D00 | 286D00 Lambdasonde: Sauerstoffkonzentration unplausibel hoch (bei Volllast) | 0 |
| 0x286E00 | 286E00 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel hoch (bei Volllast) | 0 |
| 0x286F00 | 286F00 Lambdasonde: Sauerstoffkonzentration unplausibel hoch (im Schubbetrieb) | 0 |
| 0x287000 | 287000 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel hoch (im Schubbetrieb) | 0 |
| 0x287100 | 287100 Lambdasonde: Sauerstoffkonzentration unplausibel hoch (bei Teillast) | 0 |
| 0x287200 | 287200 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel hoch (bei Teillast) | 0 |
| 0x287300 | 287300 Lambdasonde: Sauerstoffkonzentration unplausibel niedrig (bei Volllast) | 0 |
| 0x287400 | 287400 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel niedrig (bei Volllast) | 0 |
| 0x287500 | 287500 Lambdasonde: Sauerstoffkonzentration unplausibel niedrig (im Schubbetrieb) | 0 |
| 0x287600 | 287600 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel niedrig (im Schubbetrieb) | 0 |
| 0x287700 | 287700 Lambdasonde: Sauerstoffkonzentration unplausibel niedrig (bei Teillast) | 0 |
| 0x287800 | 287800 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel niedrig (bei Teillast) | 0 |
| 0x287900 | 287900 Lambdasonde, Druckkompensation: Kompensationsfaktor zu hoch | 0 |
| 0x287A00 | 287A00 Lambdasonde nach Kat, Druckkompensation: Kompensationsfaktor zu hoch | 0 |
| 0x287B00 | 287B00 Lambdasonde, Druckkompensation: Kompensationsfaktor zu niedrig | 0 |
| 0x287C00 | 287C00 Lambdasonde nach Kat, Druckkompensation: Kompensationsfaktor zu niedrig | 0 |
| 0x287D00 | 287D00 DDE-Steuergerät intern (LSU Referenzwiderstand): Referenzwiderstand zu hoch (Lambda-Temperaturauswertung) | 0 |
| 0x287E00 | 287E00 DDE-Steuergerät intern (LSU nach Kat Referenzwiderstand): Referenzwiderstand zu hoch (Lambda-Temperaturauswertung) | 0 |
| 0x287F00 | 287F00 DDE-Steuergerät intern (LSU Referenzwiderstand): Referenzwiderstand zu niedrig (Lambda-Temperaturauswertung) | 0 |
| 0x288000 | 288000 DDE-Steuergerät intern (LSU nach Kat Referenzwiderstand): Referenzwiderstand zu niedrig (Lambda-Temperaturauswertung) | 0 |
| 0x288500 | 288500 Lambdasonde, Nebenschlusserkennung: Pumpstrom bei kalter Sonde zu niedrig | 0 |
| 0x288600 | 288600 Lambdasonde nach Kat, Nebenschlusserkennung: Pumpstrom bei kalter Sonde zu niedrig | 0 |
| 0x288700 | 288700 Kupplungsschalter, Plausibilität: Kupplungssignale Triebstrang offen und leichte Betätigung zueinander nicht plausibel | 0 |
| 0x288800 | 288800 Powermanagement (Layer_AEPBATTDEF): Batterie auf Transport geschädigt | 0 |
| 0x288900 | 288900 Powermanagement (Layer_AEPBATTENTL): Batterie auf Transport entladen | 0 |
| 0x288A00 | 288A00 Powermanagement (Layer_AEPBNS): Batterieloser Betrieb | 0 |
| 0x288B00 | 288B00 Powermanagement, Ruhestromüberwachung (Layer_AEPRUHVERL): Ruhestromverletzung | 0 |
| 0x288C00 | 288C00 Powermanagement, Batterieüberwachung (Layer_AEPTIEFENTL): Tiefentladung | 0 |
| 0x288D00 | 288D00 Powermanagement (Layer_AEPUESPG): Überspannung | 0 |
| 0x288E00 | 288E00 Powermanagement (Layer_AEPUSPG): Unterspannung | 0 |
| 0x288F00 | 288F00 Powermanagement (Layer_AEPVERBRED): Verbraucherreduzierung | 0 |
| 0x289000 | 289000 Intelligenter Batterie Sensor (Layer_IBSELIN): Kommunikation erweitertes LIN Protokoll gestört | 0 |
| 0x289100 | 289100 Intelligenter Batterie Sensor (Layer_IBSI): interne Strommessung defekt | 0 |
| 0x289200 | 289200 Intelligenter Batterie Sensor (Layer_IBSSYS): Systemfehler | 0 |
| 0x289300 | 289300 Intelligenter Batterie Sensor (Layer_IBST): interne Temperaturmessung defekt | 0 |
| 0x289400 | 289400 Intelligenter Batterie Sensor (Layer_IBSU): interne Spannungsmessung defekt | 0 |
| 0x289500 | 289500 Intelligenter Batterie Sensor (Layer_IBSWK30): Kl15-WakeUp-Leitung Kurzschluss nach Plus | 0 |
| 0x289600 | 289600 Intelligenter Batterie Sensor (Layer_IBSWK31): Kl15-WakeUp-Leitung Kurzschluss nach Masse | 0 |
| 0x289700 | 289700 Intelligenter Batterie Sensor (Layer_IBSWOP): Kl15-WakeUp-Leitung Unterbrechung | 0 |
| 0x289800 | 289800 Motorprozessgrößen: Abweichung  zu hoch | 0 |
| 0x289900 | 289900 Nullgangstellung, Abgleich: Position noch nicht mit Diagnose angelernt | 0 |
| 0x289A00 | 289A00 Starter-Generator im Riemen (Layer_SGREL): elektronische Brückenschaltung defekt | 0 |
| 0x289B00 | 289B00 Starter-Generator im Riemen (Layer_SGRKL50MSA): keine Ansteuerung der Kl50 MSA | 0 |
| 0x289C00 | 289C00 Starter-Generator im Riemen (Layer_SGRMECH): mechanischer Fehler | 0 |
| 0x289D00 | 289D00 Starter-Generator im Riemen (Layer_SGRMSA): FI_SGRMSA | 0 |
| 0x289E00 | 289E00 Starter-Generator im Riemen (Layer_SGRSTABB): Startabbruch | 0 |
| 0x289F00 | 289F00 Starter-Generator im Riemen (Layer_SGRTEMP): Übertemperatur | 0 |
| 0x28A000 | 28A000 Starter-Generator im Riemen (Layer_SGRUEBVOLT): Überspannung | 0 |
| 0x28A100 | 28A100 Starter-Generator im Riemen (Layer_SGRUVOLT): Unterspannung | 0 |
| 0x28A200 | 28A200 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x28A300 | 28A300 Diagnosemaster Test, I14229_ROE_TxFailed: Erkennung Senden von ResponseOnEvent fehlgeschlagen | 0 |
| 0x28A400 | 28A400 DDE-Steuergerät intern (IVPSplyStopDCDC_0): DC/DC-Wandler Bank 1 kann nicht abgeschaltet werden | 0 |
| 0x28A500 | 28A500 DDE-Steuergerät intern (IVPSplyStopDCDC_1): DC/DC-Wandler Bank 2 kann nicht abgeschaltet werden | 0 |
| 0x28A600 | 28A600 DDE-Steuergerät intern (LSU SPI): unplausible Werte im SPI Chip (Lambda-Signalauswertung) | 0 |
| 0x28A700 | 28A700 DDE-Steuergerät intern (LSU nach Kat SPI): unplausible Werte im SPI Chip (Lambda-Signalauswertung) | 0 |
| 0x28A800 | 28A800 xDFC_NSCSDet: Fault check Path for the NSC Sulphur Over Load Detection | 0 |
| 0x28AF00 | 28AF00 Niederdruck-Abgasrückführ-Regelung: Soll-Position Niederdruck Abgasrückführventil zu stark begrenzt | 0 |
| 0x28B200 | 28B200 Intelligenter Batterie Sensor, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x28B300 | 28B300 Botschaft (Ladezustand_Status_IBS_LIN, 0xA, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B400 | 28B400 Botschaft (Daten_lesen_IBS_LIN, 0xF, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B500 | 28B500 Botschaft (Fehler_Status_IBS_LIN, 0xB, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B600 | 28B600 Botschaft (Sicherheit_Speicher_lesezugriff_IBS_LIN, 0x10, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B700 | 28B700 Botschaft (Status_Messung_IBS_LIN, 0x11, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B800 | 28B800 Botschaft (Werte_IBS_LIN, 0x9, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B900 | 28B900 Intelligenter Batterie Sensor, Diagnoserückmeldung: Knotenfehler aktiv | 0 |
| 0x28BA00 | 28BA00 Intelligenter Batterie Sensor, Diagnoserückmeldung: Knotenfehler Statusänderung | 0 |
| 0x28BB00 | 28BB00 Starter-Generator im Riemen, Diagnoserückmeldung: Rotor blockiert | 0 |
| 0x28BC00 | 28BC00 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x28BD00 | 28BD00 Starter-Generator im Riemen, Diagnoserückmeldung: elektronische Brückenschaltung defekt | 0 |
| 0x28BE00 | 28BE00 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler Erregerstrom | 0 |
| 0x28BF00 | 28BF00 Starter-Generator im Riemen, Diagnoserückmeldung: durch Lastabwurf hervorgerufene Überspannung | 0 |
| 0x28C000 | 28C000 Botschaft (Status_SGR_LIN, 0x2D, LIN): Botschaft von Starter-Generator im Riemen SGR ausgefallen | 0 |
| 0x28C100 | 28C100 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler beim Entmagnetisierungsvorgang | 0 |
| 0x28C200 | 28C200 Starter-Generator im Riemen, Diagnoserückmeldung: Übertemperatur | 0 |
| 0x28C300 | 28C300 Starter-Generator im Riemen, Diagnoserückmeldung: Überspannung | 0 |
| 0x28C400 | 28C400 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler Positionssensor | 0 |
| 0x28C500 | 28C500 Starter-Generator im Riemen, Diagnoserückmeldung: Startabbruch | 0 |
| 0x28C600 | 28C600 Starter-Generator im Riemen, Diagnoserückmeldung: Fehlerstatus für die gesamten Maschinenzustände | 0 |
| 0x28C700 | 28C700 Starter-Generator im Riemen, Diagnoserückmeldung: keine Kommunikation | 0 |
| 0x28C800 | 28C800 Starter-Generator im Riemen, Diagnoserückmeldung: Unterspannung | 0 |
| 0x28C900 | 28C900 Botschaft (Status_AKKS_LIN, 0x33, LIN): Botschaft von Aktive-Kühlluftklappe AKKS ausgefallen | 0 |
| 0x28CA00 | 28CA00 Versorgungsspannung: Fehlererkennungen  teilweise durch Überspannung deaktiviert | 0 |
| 0x28CB00 | 28CB00 Versorgungsspannung: Fehlererkennungen  teilweise durch Unterspannung deaktiviert | 0 |
| 0x28CC00 | 28CC00 LIN Bus, Kommunikation: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0x28CD00 | 28CD00 LIN Bus, Kommunikation: keine Botschaften von Aktive-Kühlluftklappe AKKS empfangen | 0 |
| 0x28CE00 | 28CE00 LIN Bus, Kommunikation: keine Botschaften von Glühsteuergerät GSG empfangen | 0 |
| 0x28CF00 | 28CF00 LIN Bus, Kommunikation: keine Botschaften von Intelligenter Batterie Sensor IBS empfangen | 0 |
| 0x28D000 | 28D000 LIN Bus, Kommunikation: keine Botschaften von Starter-Generator im Riemen SGR empfangen | 0 |
| 0x28D100 | 28D100 Oxidationskatalysator, Plausibilität: HC-Konvertierung während exothermer Reaktion zu niedrig | 0 |
| 0x28D400 | 28D400 Lambdasonde: Versorgungsspannung zu niedrig | 0 |
| 0x28D500 | 28D500 Lambdasonde nach Kat: Versorgungsspannung zu niedrig | 0 |
| 0x28D600 | 28D600 Luftmassenmesser : Signal Unterbrechung oder Kurzschluss nach Plus/Masse | 0 |
| 0x28D700 | 28D700 Blow By -Heizung, Ansteuerung: Unterbrechung | 0 |
| 0x28D800 | 28D800 Blow By -Heizung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x28D900 | 28D900 Blow By -Heizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x28DA00 | 28DA00 Blow By -Heizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x28DB00 | 28DB00 Drehzahlsensor Getriebe, Signal: kein Signal | 0 |
| 0x28DC00 | 28DC00 Drehzahlsensor Getriebe, Signal: Signal fehlerhaft | 0 |
| 0x28DD00 | 28DD00 Drehzahlsensor Getriebe, Plausibilität: maximale Drehzahl überschritten | 0 |
| 0x28DE00 | 28DE00 Abgasdrucksensor vor Turbine, Plausibilität: Abgasdruck vor Turbine dynamisch nicht plausibel | 0 |
| 0x28DF00 | 28DF00 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x28E000 | 28E000 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x28E100 | 28E100 Abgastemperatursensor vor Kat, Plausibilität: Differenz gemessene zu simulierter Abgastemperatur vor Kat zu hoch | 0 |
| 0x28E200 | 28E200 Abgastemperatursensor vor Katalysator, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x28E300 | 28E300 Abgastemperatursensor vor Katalysator, Signal: Kurzschluss nach Masse | 0 |
| 0x28E400 | 28E400 Elektrolüfter: Lüfter antwortet nicht auf Testanfrage | 0 |
| 0x28E500 | 28E500 Elektrolüfter: Lüfterfehler mit Funktionseinschränkung | 0 |
| 0x28E600 | 28E600 Elektrolüfter: kein Lüfterbetrieb möglich | 0 |
| 0x28E700 | 28E700 NOx-Sensor nach DeNOx-Kat, Signal binäres Lambda: Kurzschluss nach Plus | 0 |
| 0x28E800 | 28E800 NOx-Sensor nach DeNOx-Kat, Signal binäres Lambda: Kurzschluss nach Masse | 0 |
| 0x28E900 | 28E900 NOx-Sensor nach DeNOx-Kat, Signal lineares Lambda: Kurzschluss nach Plus | 0 |
| 0x28EA00 | 28EA00 NOx-Sensor nach DeNOx-Kat, Signal lineares Lambda: Kurzschluss nach Masse | 0 |
| 0x28EB00 | 28EB00 NOx-Sensor vor DeNOx-Kat, Plausibilität: NOx-Signal dynamisch zu langsam bei Zug-Schub-Übergang | 0 |
| 0x28EC00 | 28EC00 Abgasdrucksensor vor Turbine, Plausibilität: Abgasdruck vor Turbine nicht plausibel zu Umgebungsdruck im Nachlauf | 0 |
| 0x28ED00 | 28ED00 Abgasdrucksensor vor Turbine, Plausibilität: Abgasdruck vor Turbine nicht plausibel zu Ladedruck im Nachlauf | 0 |
| 0x28EE00 | 28EE00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu hoch | 0 |
| 0x28EF00 | 28EF00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu niedrig | 0 |
| 0x28F000 | 28F000 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu hoch | 0 |
| 0x28F100 | 28F100 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu niedrig | 0 |
| 0x28F200 | 28F200 Kupplung, Plausibilität (Layer_CLTPRTS1): übertragbares Moment zu niedrig, Kupplung leicht geschädigt | 0 |
| 0x28F300 | 28F300 Kupplung, Plausibilität (Layer_CLTPRTS2): übertragbares Moment zu niedrig, Kupplung geschädigt | 0 |
| 0x28F400 | 28F400 Kupplung, Plausibilität (Layer_CLTPRTS3): übertragbares Moment zu niedrig, Kupplung stark geschädigt | 0 |
| 0x28F500 | 28F500 DDE-Steuergerät intern (MoCSOPErrNoChk): Hardware Fehler, Abschaltpfadtest oder Injektoransteuerung nicht plausibel | 0 |
| 0x28F600 | 28F600 DDE-Steuergerät intern (MoFTraDXCCpl): Beschleunigungsgeführte Momentenüberwachung, Allrad Erkennung im EEPROM fehlerhaft | 0 |
| 0x28F700 | 28F700 DDE-Steuergerät intern (MoFTraTypVehCpl): Beschleunigungsgeführte Momentenüberwachung, Fahrzeugtyp Erkennung im EEPROM fehlerhaft | 0 |
| 0x28F800 | 28F800 DDE-Steuergerät intern (CAN Bus): CAN-Controller defekt | 0 |
| 0x28F900 | 28F900 DDE-Steuergerät intern (FlexRay): FlexRay-Controller defekt | 0 |
| 0x28FA00 | 28FA00 Ölniveausensor, Signal: elektrisch defekt | 0 |
| 0x28FB00 | 28FB00 Ölniveausensor, Plausibilität: Ölniveau | 0 |
| 0x28FC00 | 28FC00 Ölniveausensor, Plausibilität: Öltemperatur | 0 |
| 0x28FD00 | 28FD00 Öltemperatursensor, Signal: elektrisch defekt | 0 |
| 0x28FE00 | 28FE00 Öltemperatursensor, Plausibilität: Öltemperatur | 0 |
| 0x28FF00 | 28FF00 Ölzustandssensor, Signal: Ölniveau defekt | 0 |
| 0x290000 | 290000 Ölzustandssensor, Plausibilität: Ölniveau | 0 |
| 0x290100 | 290100 Ölzustandssensor, Signal: Ölqualität defekt | 0 |
| 0x290200 | 290200 Ölzustandssensor, Plausibilität: Ölqualität | 0 |
| 0x290300 | 290300 Ölzustandssensor, Signal: Öltemperatur defekt | 0 |
| 0x290400 | 290400 Ölzustandssensor, Plausibilität: Öltemperatur | 0 |
| 0x290500 | 290500 Klemme 15.3, Signal: Kurzschluss nach Plus (Status Klemme 15.3 ein während Klemme 15 aus) | 0 |
| 0x290600 | 290600 Klemme 15.3, Signal: Unterbrechung oder Kurzschluss nach Masse (Status Klemme 15.3 aus während Klemme 15 ein) | 0 |
| 0x290700 | 290700 Drehzahlsensor Getriebe, Plausibilität: Differenz zu Motordrehzahl zu hoch | 0 |
| 0x290800 | 290800 Raildruckregelungsmodus, Plausibilität: Unerwünschte Umschaltung von CPC (gekoppelte Druck/Mengen-Regelung) auf Mengenregelung erkannt | 0 |
| 0x290900 | 290900 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu niedrig | 0 |
| 0x290A00 | 290A00 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu niedrig  und hohe Ladedruckabweichung | 0 |
| 0x290B00 | 290B00 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu hoch | 0 |
| 0x290C00 | 290C00 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu hoch  und hohe Ladedruckabweichung | 0 |
| 0x290D00 | 290D00 Ölzustandssensor: keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x290E00 | 290E00 DDE-Steuergerät intern (MonUMaxSupply2): DDE interne Spannung zu hoch | 0 |
| 0x290F00 | 290F00 DDE-Steuergerät intern (MonUMinSupply2): DDE interne Spannung zu niedrig | 0 |
| 0x296700 | 296700 DDE-Steuergerät intern (AvlWmom): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296800 | 296800 DDE-Steuergerät intern (DiffGear): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296900 | 296900 DDE-Steuergerät intern (GbxFrc): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296A00 | 296A00 DDE-Steuergerät intern (PtSumCootd): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296B00 | 296B00 DDE-Steuergerät intern (PtSumIls): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296C00 | 296C00 DDE-Steuergerät intern (StDrvVeh): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296D00 | 296D00 DDE-Steuergerät intern (StIntfDrasy): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296E00 | 296E00 DDE-Steuergerät intern (StPengPt): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296F00 | 296F00 DDE-Steuergerät intern (SumDtorq): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x297000 | 297000 DDE-Steuergerät intern (stphiStWhlAgQl1): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0xCD840A | CD840A FA-CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8420 | CD8420 FlexRay: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8486 | CD8486 A-CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8487 | CD8487 DDE-Steuergerät intern (FlexRay): Aufstarten des FlexRay fehlgeschlagen | 0 |
| 0xCD8BFF | CD8BFF Diagnosemaster Test, I14229_ROETst_Netw: Netzwerk-Dummy-Fehlerspeichereintrag mit Diagnosejob erzeugt | 0 |
| 0xCD8D01 | CD8D01 CCP CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8E01 | CD8E01 Sensor CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD9400 | CD9400 Botschaft (RQ_AIC, 0x2F9, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9401 | CD9401 Botschaft (RQ_AIC, 0x2F9, FA): Botschaft von IHKA ausgefallen | 1 |
| 0xCD9402 | CD9402 Botschaft (A_TEMP, 0x2CA, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9403 | CD9403 Botschaft (A_TEMP, 0x2CA, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCD9406 | CD9406 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9407 | CD9407 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9408 | CD9408 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9409 | CD9409 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD9410 | CD9410 Botschaft (CODIERUNG_PM, 0x395, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9416 | CD9416 Botschaft (CTR_CRASH_SWO_EKP, 0x135, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9417 | CD9417 Botschaft (CTR_CRASH_SWO_EKP, 0x135, FA): Botschaft von ACSM ausgefallen | 1 |
| 0xCD9418 | CD9418 SG-Systemzeit: Botschaft (RELATIVZEIT, 0x328, FA) von Kombi während Bus aktiv nicht empfangen | 1 |
| 0xCD941D | CD941D Botschaft (DIAG_OBD_GRB, 0x396, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD941E | CD941E Botschaft (DIAG_OBD_GRB, 0x396, A): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD9422 | CD9422 Botschaft (FAHRZEUGTYP, 0x388, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9423 | CD9423 Botschaft (FLLUPT_GPWSUP, 0x3BE, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9424 | CD9424 Botschaft (FLLUPT_GPWSUP, 0x3BE, FA): Botschaft von CAS ausgefallen | 1 |
| 0xCD9425 | CD9425 Botschaft (DT_GRDT, 0x1AF, A):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9426 | CD9426 Botschaft (DT_GRDT, 0x1AF, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9427 | CD9427 Botschaft (DT_GRDT, 0x1AF, A):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9428 | CD9428 Botschaft (DT_GRDT, 0x1AF, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9429 | CD9429 Botschaft (DT_GRDT, 0x1AF, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD942A | CD942A Botschaft (DT_GRDT, 0x1AF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD942B | CD942B Botschaft (DT_GRDT, 0x1AF, A): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD942C | CD942C Botschaft (DT_GRDT, 0x1AF, FA): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD942D | CD942D Botschaft (KLEMMEN, 0x12F, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD942E | CD942E Botschaft (KLEMMEN, 0x12F, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD942F | CD942F Botschaft (KLEMMEN, 0x12F, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9430 | CD9430 Botschaft (KLEMMEN, 0x12F, FA):  Botschaft von CAS ausgefallen | 1 |
| 0xCD9433 | CD9433 Botschaft (KILOMETERSTAND, 0x330, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9434 | CD9434 Botschaft (KILOMETERSTAND, 0x330, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCD9437 | CD9437 Botschaft (RELATIVZEIT, 0x328, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9438 | CD9438 Botschaft (RELATIVZEIT, 0x328, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCD943D | CD943D Botschaft (AVL_RPM_WHL, 46.1.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD943E | CD943E Botschaft (AVL_RPM_WHL, 46.1.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD943F | CD943F Botschaft (AVL_RPM_WHL, 46.1.2, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD9444 | CD9444 Botschaft (NOx-Sensor vor DeNOx-Kat, 0x135, Sensor-CAN): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9445 | CD9445 Botschaft (NOx-Sensor vor DeNOx-Kat, 0x135, Sensor-CAN): Botschaft von NOx-Sensor vor DeNOx-Kat ausgefallen | 1 |
| 0xCD9446 | CD9446 NOx-Sensoren, Anfragemodus: Anfrage Nummern unplausibel | 1 |
| 0xCD9447 | CD9447 Botschaft (NOx-Sensor nach DeNOx-Kat, 0x130, Sensor-CAN): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9448 | CD9448 Botschaft (NOx-Sensor nach DeNOx-Kat, 0x130, Sensor-CAN): Botschaft von NOx-Sensor nach DeNOx-Kat ausgefallen | 1 |
| 0xCD944D | CD944D Botschaft (SLRDI_GLB_FZM, 0x3A5, FA):  Botschaft von ZGW ausgefallen | 1 |
| 0xCD944F | CD944F Botschaft (V_VEH, 55.3.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9450 | CD9450 Botschaft (V_VEH, 55.3.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9451 | CD9451 Botschaft (V_VEH, 55.3.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9452 | CD9452 Botschaft (V_VEH, 55.3.4, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD9453 | CD9453 Botschaft (ST_STAB_DSC, 47.1.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9454 | CD9454 Botschaft (ST_STAB_DSC, 47.1.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9455 | CD9455 Botschaft (ST_STAB_DSC, 47.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9456 | CD9456 Botschaft (ST_STAB_DSC, 47.1.2, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD9459 | CD9459 Botschaft (STAT_EKP, 0x335, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD945A | CD945A Botschaft (STAT_EKP, 0x335, A): Botschaft von EKP ausgefallen | 1 |
| 0xCD945B | CD945B Botschaft (STAT_GANG_RUECKWAERTS, 0x3B0, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD945C | CD945C Botschaft (STAT_GANG_RUECKWAERTS, 0x3B0, FA):  Botschaft von FRMFA ausgefallen | 1 |
| 0xCD945D | CD945D Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD945E | CD945E Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA):  Botschaft von CAS ausgefallen | 1 |
| 0xCD9465 | CD9465 Botschaft (ST_BLT_CT_SOCCU, 0x297, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9467 | CD9467 Botschaft (ST_BLT_CT_SOCCU, 0x297, FA):  Botschaft von ACSM ausgefallen | 1 |
| 0xCD9468 | CD9468 Botschaft (ST_GRB_ECU, 0x39A, A):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9469 | CD9469 Botschaft (ST_GRB_ECU, 0x39A, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD946A | CD946A Botschaft (ST_GRB_ECU, 0x39A, A):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD946B | CD946B Botschaft (ST_GRB_ECU, 0x39A, FA):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD9472 | CD9472 Botschaft (AVL_STEA_DV, 59.0.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9473 | CD9473 Botschaft (AVL_STEA_DV, 59.0.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9474 | CD9474 Botschaft (AVL_STEA_DV, 59.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9475 | CD9475 Botschaft (AVL_STEA_DV, 59.0.2, FX): Botschaft von SZL_LWS  ausgefallen | 1 |
| 0xCD947A | CD947A Botschaft (UHRZEIT_DATUM, 0x2F8, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD947B | CD947B Botschaft (UHRZEIT_DATUM, 0x2F8, FA):  Botschaft von Kombi ausgefallen | 1 |
| 0xCD947D | CD947D Botschaft (STAT_ANHAENGER, 0x2E4, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD947F | CD947F Botschaft (STAT_ANHAENGER, 0x2E4, FA):  Botschaft von AHM ausgefallen | 1 |
| 0xCD9480 | CD9480 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9481 | CD9481 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9482 | CD9482 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9483 | CD9483 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD9484 | CD9484 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9485 | CD9485 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9486 | CD9486 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9487 | CD9487 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD948E | CD948E Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD948F | CD948F Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9490 | CD9490 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9491 | CD9491 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD9496 | CD9496 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9497 | CD9497 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9498 | CD9498 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9499 | CD9499 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94A5 | CD94A5 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94A6 | CD94A6 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94A7 | CD94A7 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94A8 | CD94A8 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD94AD | CD94AD Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94AE | CD94AE Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94AF | CD94AF Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94B0 | CD94B0 Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94B1 | CD94B1 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94B2 | CD94B2 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94B3 | CD94B3 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94B4 | CD94B4 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94B5 | CD94B5 Botschaft (SU_SW_DRDY, 272.4.8, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94B6 | CD94B6 Botschaft (SU_SW_DRDY, 272.4.8, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94B7 | CD94B7 Botschaft (SU_SW_DRDY, 272.4.8, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94B8 | CD94B8 Botschaft (DISP_RPM_ENG_DYNS, 0xF8, A): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94B9 | CD94B9 Botschaft (DISP_RPM_ENG_DYNS, 0xF8, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94BA | CD94BA Botschaft (DISP_RPM_ENG_DYNS, 0xF8, A): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD94BB | CD94BB Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94BD | CD94BD Botschaft (SU_SW_DRDY, 272.4.8, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94BE | CD94BE Botschaft (FZZSTD, 0x3A0, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94BF | CD94BF Botschaft (FZZSTD, 0x3A0, FA): Botschaft von JBBF ausgefallen | 1 |
| 0xCD94C1 | CD94C1 Botschaft (V_VEH, 55.3.4, FX): Signalqualität V_VEH_COG unzureichend | 1 |
| 0xCD94C2 | CD94C2 Botschaft (DIAG_OBD_GRB, 0x396, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C3 | CD94C3 Botschaft (DIAG_OBD_GRB, 0x396, FA): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD94C4 | CD94C4 Botschaft (DISP_LDM_1, 135.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C5 | CD94C5 Botschaft (DISP_LDM_1, 135.0.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94C6 | CD94C6 Botschaft (RQ_PWR_EL_EPS, 234.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C7 | CD94C7 Botschaft (RQ_PWR_EL_EPS, 234.0.2, FX): Botschaft von EPS ausgefallen | 1 |
| 0xCD94C8 | CD94C8 Botschaft (RQ_PWR_EL_PCU, 0x33F, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C9 | CD94C9 Botschaft (RQ_PWR_EL_PCU, 0x33F, A): Botschaft von PCU ausgefallen | 1 |
| 0xCD94CA | CD94CA Botschaft (ST_ENERG_GEN_BN2, 0x2FA, A):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94CB | CD94CB Botschaft (ST_ENERG_GEN_BN2, 0x2FA, A):  Botschaft von PCU ausgefallen | 1 |
| 0xCD94CC | CD94CC Botschaft (ST_PMA, 231.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94CD | CD94CD Botschaft (ST_PMA, 231.1.2, FX): Botschaft von PMA ausgefallen | 1 |
| 0xCD94CE | CD94CE Botschaft (ST_VHSS, 263.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94CF | CD94CF Botschaft (ST_VHSS, 263.1.4, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD94D0 | CD94D0 Botschaft (ST_VHSS, 263.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94D1 | CD94D1 Botschaft (ST_VHSS, 263.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94D2 | CD94D2 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94D3 | CD94D3 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94D4 | CD94D4 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94D5 | CD94D5 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Botschaft von EMF ausgefallen | 1 |
| 0xCD94D9 | CD94D9 Botschaft (DIENSTE-ID2=68 Elektrische Anforderung Verbraucher, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94DA | CD94DA Botschaft (DIENSTE-ID2=68 Elektrische Anforderung Verbraucher, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (DSC, ICM, ...) ausgefallen | 1 |
| 0xCD94DB | CD94DB Botschaft (FAHRGESTELLNUMMER, 0x380, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94DC | CD94DC Getriebesteuergerät, Kommunikation: Getriebekommunikation über A-CAN und FA-CAN gestört | 1 |
| 0xCD94DD | CD94DD Botschaft (DIENSTE-ID2=140 OBD Sensor Diagnosestatus, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94DE | CD94DE Botschaft (DIENSTE-ID2=140 OBD Sensor Diagnosestatus, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (Kombi, ...) ausgefallen | 1 |
| 0xCD94DF | CD94DF Botschaft (DIENSTE-ID2=8 Powermanagement Standverbraucher, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E0 | CD94E0 Botschaft (DIENSTE-ID2=8 Powermanagement Standverbraucher, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (FRMFA, ZGW, AHM,  ...) ausgefallen | 1 |
| 0xCD94E1 | CD94E1 Botschaft (DIENSTE-ID2=21 Anforderung Stufe Elektrolüfter, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E2 | CD94E2 Botschaft (DIENSTE-ID2=21 Anforderung Stufe Elektrolüfter, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (EPS, ICM, ...) ausgefallen | 1 |
| 0xCD94E3 | CD94E3 Botschaft (DIENSTE-ID2=19 Anforderung MSA Funktion, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E4 | CD94E4 Botschaft (DIENSTE-ID2=19 Anforderung MSA Funktion, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (DSC, CAS, EGS, SEC1, IHKA, ...) ausgefallen | 1 |
| 0xCD94E5 | CD94E5 Botschaft (DIENSTE-ID2=110 Verbraucherstatus, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E6 | CD94E6 Botschaft (DIENSTE-ID2=110 Verbraucherstatus, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (DSC, FRMFA, JBBF, AHM, IHKA, SM, ...) ausgefallen | 1 |
| 0xCD94E7 | CD94E7 Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94E8 | CD94E8 Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94E9 | CD94E9 Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94EA | CD94EA Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94EB | CD94EB Botschaft (SLRDI_GLB_FZM, 0x3A5, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94EC | CD94EC Botschaft (DT_DISP_GRDT, 0x3FD, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94ED | CD94ED Botschaft (DT_DISP_GRDT, 0x3FD, FA): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD94EE | CD94EE Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_VL  unzureichend | 1 |
| 0xCD94EF | CD94EF Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_VR  unzureichend | 1 |
| 0xCD94F0 | CD94F0 Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_HL  unzureichend | 1 |
| 0xCD94F1 | CD94F1 Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_HR  unzureichend | 1 |
| 0xCD94F7 | CD94F7 NOx-Sensor nach DeNOx-Kat, Plausibilität: falscher Sensor verbaut | 0 |
| 0xCD94F8 | CD94F8 NOx-Sensor vor DeNOx-Kat, Plausibilität: falscher Sensor verbaut | 0 |
| 0xCD94FC | CD94FC Botschaft (ST_BLT_CT_SOCCU, 0x297, FA): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94FD | CD94FD Botschaft (ST_BLT_CT_SOCCU, 0x297, FA): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94FF | CD94FF NOx-Sensor nach DeNOx-Kat, Plausibilität: Kennlinien-Korrekturfaktor im Sensor (Steigung oder Offset) ausserhalb gültigem Bereich | 0 |
| 0xCD9500 | CD9500 NOx-Sensor vor DeNOx-Kat, Plausibilität: Kennlinien-Korrekturfaktor im Sensor (Steigung oder Offset) ausserhalb gültigem Bereich | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | DATENTYP | L/H | EINHEIT | NAME | MUL | DIV | ADD | LABEL | INFO | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACCI_stInActv | 0x526C | STAT_ACCI_stInActv_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ACCI_stInActv | Status - ACC ist nicht aktiv (für Überwachung) | 12 | 22,2C | - | - |
| ISKLI | 0x489A | STAT_KLIMA_EIN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ACCtl_stOut | Status der Klimaanlage (ein/aus) | 12 | 22,2C | - | - |
| ILMKG | 0x47DC | STAT_LUFTMASSE_WERT | unsigned int | - | kg/h | - | 0.100000 | - | 0.000000 | AFS_dm | gesamter HFM-Luftmassenstrom | 12 | 22,2C | - | - |
| AFS_dmSensCorr_mp | 0x47DF | STAT_AFS_dmSensCorr_mp_WERT | unsigned int | - | kg/h | - | 0.100000 | - | 0.000000 | AFS_dmSensCorr_mp | korrigiertes Luftstromsignal | 12 | 22,2C | - | - |
| AFS_facIdlAdjValUnLim_mp | 0x47E5 | STAT_AFS_facIdlAdjValUnLim_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | AFS_facIdlAdjValUnLim_mp | Luftmassenkorrekturfaktor im Leerlaufbereich vor Schrittbegrenzung | 12 | 22,2C | - | - |
| AFS_facIdlAdjVal_mp | 0x47E0 | STAT_AFS_facIdlAdjVal_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | AFS_facIdlAdjVal_mp | Leerlaufkorrekturfaktor der Driftkompensation | 12 | 22,2C | - | - |
| AFS_facLdAdjValUnLim_mp | 0x47E6 | STAT_AFS_facLdAdjValUnLim_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | AFS_facLdAdjValUnLim_mp | Luftmassenkorrekturfaktor im Lastbereich vor Schrittbegrenzung | 12 | 22,2C | - | - |
| AFS_facLdAdjVal_mp | 0x47E1 | STAT_AFS_facLdAdjVal_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | AFS_facLdAdjVal_mp | Lastkorrekturfaktor der Driftkompensation | 12 | 22,2C | - | - |
| ILMMG | 0x47DD | STAT_LUFTMASSE_PRO_HUB_WERT | unsigned int | - | mg/hub | - | 0.024414 | - | 0.000000 | AFS_mAirPerCyl | Luftmasse pro Zylinder | 12 | 22,2C | - | - |
| AFS_rNorm_mp | 0x47DE | STAT_AFS_rNorm_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | AFS_rNorm_mp | Normiertes Luftstromverhältnis | 12 | 22,2C | - | - |
| AFS_stPsShOff | 0x47E7 | STAT_AFS_stPsShOff_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AFS_stPsShOff | AFS_stPsShOff | 12 | 22,2C | - | - |
| AFS_stRstLoDrftThres_mp | 0x5954 | STAT_AFS_stRstLoDrftThres_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AFS_stRstLoDrftThres_mp | Status HFM-Erkennung | 12 | 22,2C | - | - |
| AFS_tiRaw | 0x47E3 | STAT_AFS_tiRaw_WERT | unsigned long | - | us | - | 0.050000 | - | 0.000000 | AFS_tiRaw | Rohwert der Luftmassenperiode | 12 | 22,2C | - | - |
| APP_r | 0x4236 | STAT_APP_r_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | APP_r | Pedalwertgeberposition | 12 | 22,2C | - | - |
| IFPWG | 0x4232 | STAT_FAHRERWUNSCH_PEDAL_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | APP_rFlt_mp | gefiltertes Pedalwertgebersignal | 12 | 22,2C | - | - |
| APP_stKD | 0x4238 | STAT_APP_stKD_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | APP_stKD | Status Kickdown (Gaspedal) | 12 | 22,2C | - | - |
| APP_stSigSrc | 0x4237 | STAT_APP_stSigSrc_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | APP_stSigSrc | Status des Führungssignals zur weiteren Berechnung des Fahrerwunsches | 12 | 22,2C | - | - |
| IUPW1 | 0x4233 | STAT_PWG1_SPANNUNG_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | APP_uRaw1 | Pedalwertgebersignal 1 - Spannungsrohwert | 12 | 22,2C | - | - |
| IUPW2 | 0x4234 | STAT_PWG2_SPANNUNG_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | APP_uRaw2 | Pedalwertgebersignal 2 - Spannungsrohwert | 12 | 22,2C | - | - |
| ASDdc_stSelSt | 0x4C29 | STAT_ASDdc_stSelSt_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ASDdc_stSelSt | Ausgewählter Primärzustand (dezimal codiert) | 12 | 22,2C | - | - |
| IMARD | 0x4C28 | STAT_MOMENTFORDERUNG_ARD_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | ASDdc_trq | ASD Störungsregler Ausgangsmoment | 12 | 22,2C | - | - |
| ASDrf_stSelSt | 0x4C5A | STAT_ASDrf_stSelSt_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ASDrf_stSelSt | Ausgewählter Primärzustand (dezimal codiert) | 12 | 22,2C | - | - |
| ASMod_dmEGFld_0 | 0x4D5A | STAT_ASMod_dmEGFld0_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_0 | Feld der Abgasmassenströme 0 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_1 | 0x4D5B | STAT_ASMod_dmEGFld1_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_1 | Feld der Abgasmassenströme 1 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_2 | 0x4D5C | STAT_ASMod_dmEGFld2_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_2 | Feld der Abgasmassenströme 2 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_3 | 0x4D5D | STAT_ASMod_dmEGFld3_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_3 | Feld der Abgasmassenströme 3 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_4 | 0x4D5E | STAT_ASMod_dmEGFld4_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_4 | Feld der Abgasmassenströme 4 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_5 | 0x4D5F | STAT_ASMod_dmEGFld5_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_5 | Feld der Abgasmassenströme 5 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_6 | 0x4D60 | STAT_ASMod_dmEGFld6_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_6 | Feld der Abgasmassenströme 6 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_7 | 0x4D61 | STAT_ASMod_dmEGFld7_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_7 | Feld der Abgasmassenströme 7 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_8 | 0x4D62 | STAT_ASMod_dmEGFld8_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_8 | Feld der Abgasmassenströme 8 | 12 | 22,2C | - | - |
| ASMod_dmEGFld_9 | 0x4D63 | STAT_ASMod_dmEGFld9_WERT | unsigned int | - | kg/h | - | 0.022889 | - | 0.000000 | ASMod_dmEGFld_9 | Feld der Abgasmassenströme 9 | 12 | 22,2C | - | - |
| ASMod_dmEGRDs | 0x4D6A | STAT_ASMod_dmEGRDs_WERT | unsigned int | - | kg/h | - | 0.009155 | - | -100.000000 | ASMod_dmEGRDs | rückgeführter Abgasmassenstrom nach AGR-Kühler (aus AsMod) | 12 | 22,2C | - | - |
| ASMod_dmEGRLPDs | 0x4D7E | STAT_ASMod_dmEGRLPDs_WERT | unsigned int | - | kg/h | - | 0.100000 | - | 0.000000 | ASMod_dmEGRLPDs | rückgeführter Abgasmassenstrom nach Niederdruck-AGR | 12 | 22,2C | - | - |
| ASMod_dmEGRLPDs_r32 | 0x4D74 | STAT_ASMod_dmEGRLPDs_r32_WERT | unsigned long | - | kg/h | - | 1.000000 | - | 0.000000 | ASMod_dmEGRLPDs_r32 | Gefilterter Abgasmassenstrom nach ND-AGR | 12 | 22,2C | - | - |
| ASMod_dmIndAirRef | 0x4D54 | STAT_ASMod_dmIndAirRef_WERT | unsigned int | - | kg/h | - | 0.048829 | - | -1600.000000 | ASMod_dmIndAirRef | Referenzgasmassenstrom in den Motor | 12 | 22,2C | - | - |
| ASMod_dmIntMnfDs | 0x4D6E | STAT_ASMod_dmIntMnfDs_WERT | unsigned int | - | kg/h | - | 0.076295 | - | 0.000000 | ASMod_dmIntMnfDs | Ladungsmassenstrom (aus AsMod) | 12 | 22,2C | - | - |
| ASMod_dmIntMnfDsRef | 0x4D7B | STAT_ASMod_dmIntMnfDsRef_WERT | unsigned int | - | kg/h | - | 0.076295 | - | 0.000000 | ASMod_dmIntMnfDsRef | Referenz des Gasmassenstroms nach Einlasskrümmer (2 Byte) | 12 | 22,2C | - | - |
| ASMod_dmIntMnfUs | 0x4D6C | STAT_ASMod_dmIntMnfUs_WERT | unsigned int | - | kg/h | - | 0.076295 | - | 0.000000 | ASMod_dmIntMnfUs | Gasmassenstrom vor AGR-Einleitung (aus AsMod) | 12 | 22,2C | - | - |
| ASMod_dmNOxEG | 0x4D64 | STAT_ASMod_dmNOxEG_WERT | unsigned long | - | mg/s | - | 0.010000 | - | 0.000000 | ASMod_dmNOxEG | NOx-Massenstrom im Abgas nach Verbrennung | 12 | 22,2C | - | - |
| ASMod_dvolPFltEG | 0x4D57 | STAT_ASMod_dvolPFltEG_WERT | unsigned long | - | m^3/h | - | 0.100000 | - | 0.000000 | ASMod_dvolPFltEG | berechneter Abgasvolumenstrom im Partikelfilter | 12 | 22,2C | - | - |
| ASMod_facEGRClgDvtHi_mp | 0x4D76 | STAT_ASMod_facEGRClgDvtHi_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRClgDvtHi_mp | akt. Steigung der Adaptionsgeraden für große HDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRClgDvtLo_mp | 0x4D77 | STAT_ASMod_facEGRClgDvtLo_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRClgDvtLo_mp | akt. Steigung der Adaptionsgeraden für kleine HDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRClgHiDev_mp | 0x4D7F | STAT_ASMod_facEGRClgHiDev_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRClgHiDev_mp | Referenzsteigung - akt. Steigung der Adaptionsgeraden für große HDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRClgLoDev_mp | 0x4D80 | STAT_ASMod_facEGRClgLoDev_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRClgLoDev_mp | Referenzsteigung - akt. Steigung der Adaptionsgeraden für kleine HDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRLPClgDvtHi_mp | 0x4D78 | STAT_ASMod_facEGRLPClgDvtHi_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRLPClgDvtHi_mp | akt. Steigung der Adaptionsgeraden für große NDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRLPClgDvtLo_mp | 0x4D79 | STAT_ASMod_facEGRLPClgDvtLo_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRLPClgDvtLo_mp | akt. Steigung der Adaptionsgeraden für kleine NDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRLPClgHiDev_mp | 0x4D82 | STAT_ASMod_facEGRLPClgHiDev_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRLPClgHiDev_mp | Referenzsteigung - akt. Steigung der Adaptionsgeraden für kleine NDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEGRLPClgLoDev_mp | 0x4D81 | STAT_ASMod_facEGRLPClgLoDev_mp_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEGRLPClgLoDev_mp | Referenzsteigung - akt. Steigung der Adaptionsgeraden für große NDAGR-Massenströme | 12 | 22,2C | - | - |
| ASMod_facEtaEGRClgObsvCor | 0x4D7A | STAT_ASMod_facEtaEGRClgObsvCor_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | ASMod_facEtaEGRClgObsvCor | Korrekturfaktor aus HDAGR-Kühler-Adaption | 12 | 22,2C | - | - |
| ASMod_mAirPerCylCor | 0x4D59 | STAT_ASMod_mAirPerCylCor_WERT | unsigned int | - | mg/Hub | - | 0.100000 | - | 0.000000 | ASMod_mAirPerCylCor | dynamisch korrigierte Luftmasse pro Zylinder vor Mischstelle im Einlasskrümmer | 12 | 22,2C | - | - |
| ASMod_nTrbCh | 0x4D67 | STAT_ASMod_nTrbCh_WERT | unsigned int | - | rpm | - | 3.814755 | - | 0.000000 | ASMod_nTrbCh | aktuelle Drehzahl des Turboladers (aus AsMod) | 12 | 22,2C | - | - |
| ASMod_pHPTrbnUs | 0x4D7D | STAT_ASMod_pHPTrbnUs_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | ASMod_pHPTrbnUs | Druck vor Turbine der Hochdruckstufe | 12 | 22,2C | - | - |
| ASMod_pPFltSimDs | 0x4D55 | STAT_ASMod_pPFltSimDs_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | ASMod_pPFltSimDs | simulierter Druck nach Partikelfilter | 12 | 22,2C | - | - |
| ASMod_pTrbnUs | 0x4D75 | STAT_ASMod_pTrbnUs_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | ASMod_pTrbnUs | berechneter Wert von ASMOD | 12 | 22,2C | - | - |
| ASMod_rEGR | 0x4D88 | STAT_ASMod_rEGR_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | ASMod_rEGR | Abgasrückführrate in den Motor | 12 | 22,2C | - | - |
| ASMod_rEGRHP | 0x4D83 | STAT_ASMod_rEGRHP_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | ASMod_rEGRHP | Abgasrückführrate über das HD-AGR Ventil in den Motor | 12 | 22,2C | - | - |
| ASMod_rNOxEG | 0x4D65 | STAT_ASMod_rNOxEG_WERT | unsigned int | - | - | - | 0.000015 | - | 0.000000 | ASMod_rNOxEG | Anteil der NOx-Emission im Abgassmassenstrom nach Verbrennung | 12 | 22,2C | - | - |
| ASMod_tCmprDs | 0x4D68 | STAT_ASMod_tCmprDs_WERT | unsigned int | - | degC | - | 0.009155 | - | -100.000000 | ASMod_tCmprDs | Lufttemperatur vor Verdichter (aus AsMod) | 12 | 22,2C | - | - |
| ASMod_tEGRDsSim_mp | 0x4D84 | STAT_ASMod_tEGRDsSim_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | ASMod_tEGRDsSim_mp | Modell-Temperatur nach HDAGR-Kühler | 12 | 22,2C | - | - |
| ASMod_tEGRLPDsSim_mp | 0x4D85 | STAT_ASMod_tEGRLPDsSim_mp_WERT | unsigned long | - | degC | - | 1.000000 | - | -273.140000 | ASMod_tEGRLPDsSim_mp | Modell-Temperatur nach NDAGR-Kühler | 12 | 22,2C | - | - |
| ASMod_tExhMnfLP | 0x4D86 | STAT_ASMod_tExhMnfLP_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | ASMod_tExhMnfLP | Modell-Temperatur bei NDAGR Entnahme | 12 | 22,2C | - | - |
| ASMod_tIntMnfDs | 0x4D72 | STAT_ASMod_tIntMnfDs_WERT | unsigned int | - | degC | - | 0.009155 | - | -100.000000 | ASMod_tIntMnfDs | Temperatur vor Einlasskrümmer (T22 aus AsMod) | 12 | 22,2C | - | - |
| ASMod_tIntMnfUs | 0x4D70 | STAT_ASMod_tIntMnfUs_WERT | unsigned int | - | degC | - | 0.009155 | - | -100.000000 | ASMod_tIntMnfUs | Temperatur vor Einlasskrümmer (T21 aus AsMod) | 12 | 22,2C | - | - |
| ASMod_tPFltSurfSim | 0x4D87 | STAT_ASMod_tPFltSurfSim_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | ASMod_tPFltSurfSim | simulierte Oberflächentemperatur Partikelfilter | 12 | 22,2C | - | - |
| Absch_korr | 0x4284 | STAT_Absch_korr_WERT | unsigned int | - | - | - | 0.001526 | - | 0.000000 | Absch_korr | Korrekturwert Abschaltung | 12 | 22,2C | - | - |
| AccMon_stLim | 0x526D | STAT_AccMon_stLim_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AccMon_stLim | Status des Reglereingriffs - inaktiv/aktiv | 12 | 22,2C | - | - |
| AccMon_trqDesSel | 0x526E | STAT_AccMon_trqDesSel_WERT | unsigned long | - | Nm | - | 0.000015 | - | 0.000000 | AccMon_trqDesSel | Zulässiges Sollmoment der Ebene-1 Beschleunigungsüberwachung | 12 | 22,2C | - | - |
| AccPed_trqDes | 0x423C | STAT_AccPed_trqDes_WERT | unsigned long | - | Nm | - | 0.100000 | - | 0.000000 | AccPed_trqDes | Fahrerwunschmoment Sollpfad | 12 | 22,2C | - | - |
| IMOAK | 0x48A5 | STAT_MOTORMOMENT_AKTUELL_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | ActMod_trq | aktuelles Motormoment | 12 | 22,2C | - | - |
| ActMod_trqClth | 0x48A6 | STAT_ActMod_trqClth_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | ActMod_trqClth | aktuelles Kupplungsmoment | 12 | 22,2C | - | - |
| SMOMO | 0x48A4 | STAT_MOTORMOMENT_SOLL_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | ActMod_trqInr | aktuelles rückgerechnetes inneres Motormoment | 12 | 22,2C | - | - |
| AirC_stPsCmpr | 0x4862 | STAT_AirC_stPsCmpr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AirC_stPsCmpr | Endgültiger Digitalausgang zur Endstufe des Klimaanlagen-Kompressorstellers | 12 | 22,2C | - | - |
| AirCtl_arEGRDes | 0x487F | STAT_AirCtl_arEGRDes_WERT | unsigned int | - | cm^2 | - | 0.004000 | - | 0.000000 | AirCtl_arEGRDes | Sollfläche des Abgasrückführventils | 12 | 22,2C | - | - |
| AirCtl_arEGREst | 0x4881 | STAT_AirCtl_arEGREst_WERT | unsigned int | - | cm^2 | - | 0.004000 | - | 0.000000 | AirCtl_arEGREst | geschätzte Istfläche des Abgasrückführventils | 12 | 22,2C | - | - |
| AirCtl_arTVADes | 0x4880 | STAT_AirCtl_arTVADes_WERT | unsigned int | - | cm^2 | - | 0.004000 | - | 0.000000 | AirCtl_arTVADes | Sollfläche der Drosselklappe | 12 | 22,2C | - | - |
| AirCtl_arTVAEst | 0x4882 | STAT_AirCtl_arTVAEst_WERT | unsigned int | - | cm^2 | - | 0.004000 | - | 0.000000 | AirCtl_arTVAEst | geschätzte Istfläche der Drosselklappe | 12 | 22,2C | - | - |
| AirCtl_dmAirDesDyn_r32 | 0x4887 | STAT_AirCtl_dmAirDesDyn_r32_WERT | unsigned long | - | kg/h | - | 1.000000 | - | 0.000000 | AirCtl_dmAirDesDyn_r32 | dynamisch adaptierter Sollluftmassenstrom in den Motor | 12 | 22,2C | - | - |
| AirCtl_dmEGRDes_r32 | 0x4883 | STAT_AirCtl_dmEGRDes_r32_WERT | unsigned long | - | kg/h | - | 1.000000 | - | 0.000000 | AirCtl_dmEGRDes_r32 | Sollmassenstrom über Abgasrückführventil | 12 | 22,2C | - | - |
| AirCtl_dmTVADes_r32 | 0x4884 | STAT_AirCtl_dmTVADes_r32_WERT | unsigned long | - | kg/h | - | 1.000000 | - | 0.000000 | AirCtl_dmTVADes_r32 | Sollmassenstrom über Drosselklappe | 12 | 22,2C | - | - |
| AirCtl_mAirPerCylDesDyn | 0x4889 | STAT_AirCtl_mAirPerCylDesDyn_WERT | unsigned int | - | mg/hub | - | 0.100000 | - | 0.000000 | AirCtl_mAirPerCylDesDyn | dynamisch adaptierte Luftmasse | 12 | 22,2C | - | - |
| AirCtl_mDesBasEOM0 | 0x487B | STAT_AirCtl_mDesBasEOM0_WERT | unsigned int | - | mg/hub | - | 0.100000 | - | 0.000000 | AirCtl_mDesBasEOM0 | Luftmasse - Basiswert aus Kennfeld (MCC) | 12 | 22,2C | - | - |
| SLMMG | 0x4872 | STAT_LUFTMASSE_SOLL_WERT | unsigned int | - | mg/hub | - | 0.030518 | - | 0.000000 | AirCtl_mDesVal | Sollluftmasse | 12 | 22,2C | - | - |
| AirCtl_mGovDvt | 0x4876 | STAT_AirCtl_mGovDvt_WERT | unsigned int | - | mg/hub | - | 0.100000 | - | 0.000000 | AirCtl_mGovDvt | Luftmasse - Regelabweichung | 12 | 22,2C | - | - |
| AirCtl_pTrbnUs_r32 | 0x4888 | STAT_AirCtl_pTrbnUs_r32_WERT | unsigned long | - | hPa | - | 1.000000 | - | 0.000000 | AirCtl_pTrbnUs_r32 | geschätzter Druck stromaufwärts des Abgasrückführventils | 12 | 22,2C | - | - |
| AirCtl_rDesVal | 0x487E | STAT_AirCtl_rDesVal_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | AirCtl_rDesVal | Gesamtsollabgasrückführrate | 12 | 22,2C | - | - |
| AirCtl_rEGREst_r32 | 0x488A | STAT_AirCtl_rEGREst_r32_WERT | unsigned long | - | % | - | 1.000000 | - | 0.000000 | AirCtl_rEGREst_r32 | geschätzte Gesamtistabgasrückführrate | 12 | 22,2C | - | - |
| AirCtl_rGovDvtNrm | 0x487A | STAT_AirCtl_rGovDvtNrm_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | AirCtl_rGovDvtNrm | Abgasrückführregelung - Regelabweichung | 12 | 22,2C | - | - |
| AirCtl_rRatDesDyn | 0x488B | STAT_AirCtl_rRatDesDyn_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | AirCtl_rRatDesDyn | dynamisch adaptierte Gesamtsollabgasrückführrate im Motor | 12 | 22,2C | - | - |
| AirCtl_rRatDesDyn_r32 | 0x4886 | STAT_AirCtl_rRatDesDyn_r32_WERT | unsigned long | - | % | - | 1.000000 | - | 0.000000 | AirCtl_rRatDesDyn_r32 | dynamisch adaptierte Gesamtsollabgasrückführrate im Motor | 12 | 22,2C | - | - |
| AirCtl_rRatGovDvt | 0x488C | STAT_AirCtl_rRatGovDvt_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | AirCtl_rRatGovDvt | Regelabweichung der AGR-Rate | 12 | 22,2C | - | - |
| AirCtl_stAirCtlBits | 0x4874 | STAT_AirCtl_stAirCtlBits_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | AirCtl_stAirCtlBits | aktive Abschaltfälle der Luftmassenregelung | 12 | 22,2C | - | - |
| AirCtl_stDesMax | 0x4885 | STAT_AirCtl_stDesMax_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AirCtl_stDesMax | Status, ob einer der Sollwerte AGR-Rate oder Luftmasse in Max-Begrenzung | 12 | 22,2C | - | - |
| AirCtl_stMon | 0x4875 | STAT_AirCtl_stMon_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AirCtl_stMon | ursächlicher Abschaltfall der Luftmassenregelung | 12 | 22,2C | - | - |
| AirCtl_stMonBitsRaw_mp | 0x488D | STAT_AirCtl_stMonBitsRaw_mp_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | AirCtl_stMonBitsRaw_mp | Bits vor TimeToClosedLoop-Function | 12 | 22,2C | - | - |
| AirCtl_stPrioRat | 0x487D | STAT_AirCtl_stPrioRat_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AirCtl_stPrioRat | Status, der anzeigt, ob die Gesamtabgasrückführrate die priorisierte Sollgrösse ist | 12 | 22,2C | - | - |
| AirSys_dRED1_mp | 0x54F7 | STAT_AirSys_dRED1_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_dRED1_mp | Ergebnis der LMS-Test Berechnung für dRED1 | 12 | 22,2C | - | - |
| AirSys_dRED2_mp | 0x54F8 | STAT_AirSys_dRED2_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_dRED2_mp | Ergebnis der LMS-Test Berechnung für dRED2 | 12 | 22,2C | - | - |
| AirSys_mLBer1_mp | 0x5508 | STAT_AirSys_mLBer1_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLBer1_mp | Ergebnis der LMS-Test-Berechnung für Referenzluftmassenstrom in den Motor bei hoher Drehzahl | 12 | 22,2C | - | - |
| AirSys_mLBer2_mp | 0x5509 | STAT_AirSys_mLBer2_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLBer2_mp | Ergebnis der LMS-Test-Berechnung für Referenzluftmassenstrom in den Motor im Leerlauf | 12 | 22,2C | - | - |
| AirSys_mLHFM1_mp | 0x5506 | STAT_AirSys_mLHFM1_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLHFM1_mp | Ergebnis der LMS-Test-Berechnung für Mittelwert des Luftmassenstroms bei hoher Drehzahl | 12 | 22,2C | - | - |
| AirSys_mLHFM2_mp | 0x5507 | STAT_AirSys_mLHFM2_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLHFM2_mp | Ergebnis der LMS-Test-Berechnung für Mittelwert des Luftmassenstroms im Leerlauf | 12 | 22,2C | - | - |
| AirSys_mLM10_mp | 0x54FB | STAT_AirSys_mLM10_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM10_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenbasismittelwert LM10 bei <LDS aus> | 12 | 22,2C | - | - |
| AirSys_mLM11_mp | 0x54FC | STAT_AirSys_mLM11_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM11_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenmittelwert LM11 bei <LDS aus> | 12 | 22,2C | - | - |
| AirSys_mLM12_mp | 0x54FD | STAT_AirSys_mLM12_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM12_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenmittelwert LM12 bei <LDS aus> | 12 | 22,2C | - | - |
| AirSys_mLM13_mp | 0x54FE | STAT_AirSys_mLM13_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM13_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenmittelwert LM13 bei <LDS aus> | 12 | 22,2C | - | - |
| AirSys_mLM20_mp | 0x54FF | STAT_AirSys_mLM20_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM20_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenbasismittelwert LM20 bei <LDS ein> | 12 | 22,2C | - | - |
| AirSys_mLM21_mp | 0x5500 | STAT_AirSys_mLM21_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM21_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenmittelwert LM21 bei <LDS ein> | 12 | 22,2C | - | - |
| AirSys_mLM22_mp | 0x5501 | STAT_AirSys_mLM22_mp_WERT | unsigned long | - | kg/h | - | 0.100000 | - | 0.000000 | AirSys_mLM22_mp | Ergebnis der LMS-Test-Berechnung für Luftmassenmittelwert LM22 bei <LDS ein> | 12 | 22,2C | - | - |
| AirSys_p21max1_mp | 0x5504 | STAT_AirSys_p21max1_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | AirSys_p21max1_mp | Ergebnis der LMS-Test-Berechnung für Ladedruck nach Wartezeit T_WAIT_1 | 12 | 22,2C | - | - |
| AirSys_p21max2_mp | 0x5505 | STAT_AirSys_p21max2_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | AirSys_p21max2_mp | Ergebnis der LMS-Test-Berechnung für Ladedruck nach Wartezeit T_WAIT_2 | 12 | 22,2C | - | - |
| AirSys_rDIFF1_mp | 0x54F9 | STAT_AirSys_rDIFF1_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rDIFF1_mp | Ergebnis der LMS-Test für Berechnung DIFF1 | 12 | 22,2C | - | - |
| AirSys_rDIFF2_mp | 0x54FA | STAT_AirSys_rDIFF2_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rDIFF2_mp | Ergebnis der LMS-Test für Berechnung DIFF2 | 12 | 22,2C | - | - |
| AirSys_rLverh1_mp | 0x550A | STAT_AirSys_rLverh1_mp_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | AirSys_rLverh1_mp | Ergebnis der LMS-Test für HFM Wert im oberen Luftmassenbereich | 12 | 22,2C | - | - |
| AirSys_rLverh2_mp | 0x550B | STAT_AirSys_rLverh2_mp_WERT | unsigned int | - | - | - | 0.010000 | - | 0.000000 | AirSys_rLverh2_mp | Ergebnis der LMS-Test für HFM Wert im Leerlauf-Luftmassenbereich | 12 | 22,2C | - | - |
| AirSys_rRED11_mp | 0x54F2 | STAT_AirSys_rRED11_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rRED11_mp | Ergebnis der LMS-Test für Berechnung RED11 | 12 | 22,2C | - | - |
| AirSys_rRED12_mp | 0x54F3 | STAT_AirSys_rRED12_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rRED12_mp | Ergebnis der LMS-Test für Berechnung RED12 | 12 | 22,2C | - | - |
| AirSys_rRED13_mp | 0x54F4 | STAT_AirSys_rRED13_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rRED13_mp | Ergebnis der LMS-Test für Berechnung RED13 | 12 | 22,2C | - | - |
| AirSys_rRED21_mp | 0x54F5 | STAT_AirSys_rRED21_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rRED21_mp | Ergebnis der LMS-Test für Berechnung RED21 | 12 | 22,2C | - | - |
| AirSys_rRED22_mp | 0x54F6 | STAT_AirSys_rRED22_mp_WERT | unsigned int | - | - | - | 0.012512 | - | -410.000000 | AirSys_rRED22_mp | Ergebnis der LMS-Test für Berechnung RED22 | 12 | 22,2C | - | - |
| AirSys_ststateSysTst_mp | 0x5502 | STAT_AirSys_ststateSysTst_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AirSys_ststateSysTst_mp | Status des LMS-Tests (interne Größe) | 12 | 22,2C | - | - |
| AirSys_stsubstateSysTst_mp | 0x5503 | STAT_AirSys_stsubstateSysTst_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | AirSys_stsubstateSysTst_mp | Sub-Status des LMS-Tests (interne Größe) | 12 | 22,2C | - | - |
| Air_pCACDs | 0x484F | STAT_Air_pCACDs_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | Air_pCACDs | PT1-gefilterter Wert des Luftdrucks nach Ladeluftkühler | 12 | 22,2C | - | - |
| IPLAD | 0x4841 | STAT_LADEDRUCK_WERT | unsigned int | - | hPa | - | 0.091554 | - | 0.000000 | Air_pIntkVUs | Luftdruck vor Einlassventil | 12 | 22,2C | - | - |
| ITTAN | 0x4840 | STAT_ANSAUGLUFTTEMPERATUR_TASTVERHAELTNIS_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | Air_rRawTAFS | Tastverhältnis - Ansauglufttemperatursensor | 12 | 22,2C | - | - |
| ITANS | 0x4846 | STAT_ANSAUGLUFTTEMPERATUR_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | Air_tAFS | Lufttemperatur an der HFM-Position | 12 | 22,2C | - | - |
| ITLAL | 0x4843 | STAT_LADELUFTTEMPERATUR_WERT | unsigned int | - | degC | - | 0.010000 | - | -100.000000 | Air_tCACDs | Temperatur nach dem Ladeluftkühler | 12 | 22,2C | - | - |
| Air_tEGRClrDs | 0x484B | STAT_Air_tEGRClrDs_WERT | unsigned int | - | degC | - | 0.016022 | - | -50.000000 | Air_tEGRClrDs | EGR cooler down stream temperature | 12 | 22,2C | - | - |
| Air_tEGRClrLPDs | 0x484C | STAT_Air_tEGRClrLPDs_WERT | unsigned int | - | degC | - | 0.016022 | - | -50.000000 | Air_tEGRClrLPDs | Temperatur nach Niederdruck-Abgaskühler | 12 | 22,2C | - | - |
| Air_tSensTAFS | 0x4845 | STAT_Air_tSensTAFS_WERT | unsigned int | - | degC | - | 0.010000 | - | -50.000000 | Air_tSensTAFS | Erfasster Wert der Lufttemperatur an der HFM-Position | 12 | 22,2C | - | - |
| Air_tSensTEGRClrDs | 0x484D | STAT_Air_tSensTEGRClrDs_WERT | unsigned int | - | degC | - | 0.016022 | - | -50.000000 | Air_tSensTEGRClrDs | Erfasster Wert der Abgastemperatur nach dem AGR-Kühler | 12 | 22,2C | - | - |
| Air_tSensTEGRClrLPDs | 0x484E | STAT_Air_tSensTEGRClrLPDs_WERT | unsigned int | - | degC | - | 0.016022 | - | -50.000000 | Air_tSensTEGRClrLPDs | Erfasste Temperatur nach Abgaskühler | 12 | 22,2C | - | - |
| IULDF | 0x4842 | STAT_LADEDRUCK_SPANNUNG_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Air_uRawPIntkVUs | Spannungsrohwert aus ADC | 12 | 22,2C | - | - |
| Air_uRawTCACDs | 0x4844 | STAT_Air_uRawTCACDs_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Air_uRawTCACDs | Spannungsrohwert aus ADC für CACDsT | 12 | 22,2C | - | - |
| Air_uRawTEGRClrDs | 0x4849 | STAT_Air_uRawTEGRClrDs_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Air_uRawTEGRClrDs | Spannungsrohwert aus dem Temperatursensor nach dem AGR-Kuehler | 12 | 22,2C | - | - |
| Air_uRawTEGRClrLPDs | 0x484A | STAT_Air_uRawTEGRClrLPDs_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Air_uRawTEGRClrLPDs | Temperatur-Rohsignal nach Abgaskühler | 12 | 22,2C | - | - |
| IGENL | 0x425A | STAT_GENERATORLAST_WERT | unsigned int | - | % | - | 0.003052 | - | 0.000000 | AltIO_rAltLoad | Rohlast an den Generator | 12 | 22,2C | - | - |
| IUBAT2 | 0x4200 | STAT_UBATT2_WERT | unsigned int | - | mV | - | 0.389105 | - | 0.000000 | BattU_u | Batteriespannung | 12 | 22,2C | - | - |
| BattU_uSens | 0x4201 | STAT_BattU_uSens_WERT | unsigned int | - | mV | - | 0.389105 | - | 0.000000 | BattU_uSens | Erfasste Batteriespannung | 12 | 22,2C | - | - |
| IPBUS2 | 0x513D | STAT_BREMSUNTERDRUCK2_WERT | unsigned int | - | bar | - | 1.000000 | - | 0.000000 | BrkP_p | Bremsunterdruck | 12 | 22,2C | - | - |
| BrkP_pSens | 0x513C | STAT_BrkP_pSens_WERT | unsigned int | - | bar | - | 1.000000 | - | 0.000000 | BrkP_pSens | Bremsunterdruck - linearisierter Sensorwert | 12 | 22,2C | - | - |
| IUBUS | 0x513E | STAT_BREMSUNTERDRUCK_SPANNUNG_WERT | unsigned int | - | mV | - | 0.200000 | - | 0.000000 | BrkP_uRaw | Bremsunterdruck - Spannungsrohwert des Sensors | 12 | 22,2C | - | - |
| ISBLS | 0x513F | STAT_BREMSLICHTSCHALTER_EIN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Brk_st | Meldung Bremse betätigt | 12 | 22,2C | - | - |
| ISBLT | 0x513B | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Brk_stRed | Status der redundanten Bremse | 12 | 22,2C | - | - |
| Bszsi | 0x469C | STAT_Bszsi_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Bszsi | Betriebsstundenzähler | 12 | 22,2C | - | - |
| CByVlv_st | 0x4E1C | STAT_CByVlv_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CByVlv_st | Status vom Kompressorbypassventil | 12 | 22,2C | - | - |
| ITKUM | 0x461B | STAT_KUEHLMITTELTEMPERATUR_WERT | unsigned int | - | degC | - | 0.010000 | - | -100.000000 | CEngDsT_t | Kühlmitteltemperatur | 12 | 22,2C | - | - |
| CEngDsT_tStrt_mp | 0x461D | STAT_CEngDsT_tStrt_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | CEngDsT_tStrt_mp | Eingefrorene Kühlmitteltemperatur beim Start der Plausibilitätsfunktion | 12 | 22,2C | - | - |
| CEngDsT_tiDynTst_mp | 0x461C | STAT_CEngDsT_tiDynTst_mp_WERT | unsigned long | - | s | - | 0.010000 | - | 0.000000 | CEngDsT_tiDynTst_mp | dynamische Plausibilitätsprüfungszeit für die Kühlmitteltemperatur | 12 | 22,2C | - | - |
| RUTKU | 0x461A | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_ROH_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | CEngDsT_uRaw | Kühlmitteltemperatur - Spannungsrohwert des Sensors | 12 | 22,2C | - | - |
| ISKUP | 0x4FDE | STAT_KUP_EIN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Clth_st | Kupplungsstatusinformation | 12 | 22,2C | - | - |
| CoEOM_stOpModeAct | 0x467E | STAT_CoEOM_stOpModeAct_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | CoEOM_stOpModeAct | Regenerationsstatus | 12 | 22,2C | - | - |
| IAMMM | 0x464C | STAT_VERHAELTNIS_AKTUELLES_MOMENT_MAXIMALMOMENT_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | CoETS_rTrq | Verhältnis aktuelles Moment zu Maximalmoment | 12 | 22,2C | - | - |
| CoETS_stCurrLimActive | 0x464E | STAT_CoETS_stCurrLimActive_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CoETS_stCurrLimActive | Statuswort zur Markierung der wirksamen niedrigsten Begrenzungsmomente | 12 | 22,2C | - | - |
| SMIBA | 0x464D | STAT_MOTORMOMENT_SOLL_NACH_BEGRENZUNG_VOR_ARD_WERT | unsigned int | - | Nm | - | 0.100000 | - | 0.000000 | CoETS_trqInrLim | Begrenzungsmoment (als inneres Motormoment) | 12 | 22,2C | - | - |
| IMBEG | 0x464F | STAT_MOTORMOMENT_BEGRENZUNG_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | CoETS_trqInrSetSlow | Sollwert-inneres Moment | 12 | 22,2C | - | - |
| CoEng_st | 0x45E8 | STAT_CoEng_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CoEng_st | aktueller Motorstatus | 12 | 22,2C | - | - |
| CoEng_stIRevShutOff | 0x45EB | STAT_CoEng_stIRevShutOff_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | CoEng_stIRevShutOff | irreversible Abschaltursachen (nach Maskierung) | 12 | 22,2C | - | - |
| CoEng_stRevShutOff | 0x45EA | STAT_CoEng_stRevShutOff_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | CoEng_stRevShutOff | reversible Abschaltursachen (nach Maskierung) | 12 | 22,2C | - | - |
| ISABU | 0x45E9 | STAT_TYP_WIRKSAME_ABSCHALTURSACHE_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | CoEng_stShutOffPath | aktive Abstellpfade resultierend aus aktiven reversiblen, irreversiblen und Nachlauf-Abstellpfaden | 12 | 22,2C | - | - |
| CoEng_stState_mp | 0x45EC | STAT_CoEng_stState_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CoEng_stState_mp | aktueller Motorstatus | 12 | 22,2C | - | - |
| CoEng_stTst | 0x45ED | STAT_CoEng_stTst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CoEng_stTst | aktueller Status der Testeranforderung | 12 | 22,2C | - | - |
| CoPT_trqDes | 0x46A6 | STAT_CoPT_trqDes_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | CoPT_trqDes | Summenmomentenauftrag an Momentensteller (Kupplungsmoment) | 12 | 22,2C | - | - |
| CoVM_trqDes | 0x5270 | STAT_CoVM_trqDes_WERT | unsigned long | - | Nm | - | 0.000015 | - | 0.000000 | CoVM_trqDes | Vortriebssollmoment nach Koordination mit ESP-Eingriffen (Radmoment) | 12 | 22,2C | - | - |
| CodVar_stBlk0_mp | 0x4E84 | STAT_CodVar_stBlk0_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CodVar_stBlk0_mp | Status von Selbsterkennungsblock 0 | 12 | 22,2C | - | - |
| CodVar_stBlk1_mp | 0x4E85 | STAT_CodVar_stBlk1_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CodVar_stBlk1_mp | Status von Selbsterkennungsblock 1 | 12 | 22,2C | - | - |
| CodVar_stBlk2_mp | 0x4E86 | STAT_CodVar_stBlk2_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CodVar_stBlk2_mp | Status von Selbsterkennungsblock 2 | 12 | 22,2C | - | - |
| CodVar_stBlk3_mp | 0x4E87 | STAT_CodVar_stBlk3_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CodVar_stBlk3_mp | Status von Selbsterkennungsblock 3 | 12 | 22,2C | - | - |
| Com_ctrDay | 0x46C5 | STAT_Com_ctrDay_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Com_ctrDay | Tag Zähler absolut | 12 | 22,2C | - | - |
| Com_ctrSec | 0x46AE | STAT_Com_ctrSec_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Com_ctrSec | Sekundenzähler relativ | 12 | 22,2C | - | - |
| Com_ctrSecInt | 0x46AF | STAT_Com_ctrSecInt_WERT | unsigned long | - | s | - | 1.000000 | - | 0.000000 | Com_ctrSecInt | Betriebsstundenzähler (für UW gerechnet ab 01.01.2000) | 12 | 22,2C | - | - |
| Com_dDay | 0x46C6 | STAT_Com_dDay_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_dDay | Anzeige Wochentag | 12 | 22,2C | - | - |
| Com_dMonth | 0x46C7 | STAT_Com_dMonth_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_dMonth | Anzeige Monat | 12 | 22,2C | - | - |
| Com_dYear | 0x46C8 | STAT_Com_dYear_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Com_dYear | Anzeige Jahr | 12 | 22,2C | - | - |
| ISKME | 0x46B1 | STAT_KILOMETERSTAND_WERT | unsigned long | - | km | - | 1.000000 | - | 0.000000 | Com_lSum | Kilometerstand | 12 | 22,2C | - | - |
| Com_lSum_8km | 0x46B0 | STAT_Com_lSum_WERT | unsigned int | - | km | - | 8.000000 | - | 0.000000 | Com_lSum_8km | Kilometerstand (Auflösung 8 km) | 12 | 22,2C | - | - |
| Com_nPsp | 0x46B2 | STAT_Com_nPsp_WERT | unsigned int | - | rpm | - | 1.000000 | - | 0.000000 | Com_nPsp | Drehzahl der Vorförderpumpe | 12 | 22,2C | - | - |
| Com_rLamLinRecCat2Ds | 0x46BE | STAT_Com_rLamLinRecCat2Ds_WERT | unsigned int | - | - | - | 0.000100 | - | -3.267800 | Com_rLamLinRecCat2Ds | Sauerstoff linear des 2.Downstream NOx Sensors | 12 | 22,2C | - | - |
| Com_rLamLinRecDs | 0x46BF | STAT_Com_rLamLinRecDs_WERT | unsigned int | - | - | - | 0.000100 | - | -3.267800 | Com_rLamLinRecDs | Sauerstoff linear | 12 | 22,2C | - | - |
| Com_rNOxCat2Ds | 0x46C0 | STAT_Com_rNOxCat2Ds_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Com_rNOxCat2Ds | ermittelte NOx - Konzentration | 12 | 22,2C | - | - |
| Com_rNOxDs | 0x46C1 | STAT_Com_rNOxDs_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Com_rNOxDs | ermittelte NOx - Konzentration | 12 | 22,2C | - | - |
| Com_rPspSetPoint | 0x46B3 | STAT_Com_rPspSetPoint_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | Com_rPspSetPoint | Ausgangstastverhältnis - Vorförderpumpe | 12 | 22,2C | - | - |
| Com_rawByte6SensNOxGnd | 0x46AD | STAT_Com_rawByte6SensNOxGnd_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_rawByte6SensNOxGnd | Com_rawByte6SensNOxGnd | 12 | 22,2C | - | - |
| Com_rawByte6SensNOxUbatt | 0x46AC | STAT_Com_rawByte6SensNOxUbatt_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_rawByte6SensNOxUbatt | Com_rawByte6SensNOxUbatt | 12 | 22,2C | - | - |
| Com_rawByte7SensNOxGnd | 0x46AB | STAT_CoSCR_stSub_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_rawByte7SensNOxGnd | Com_rawByte7SensNOxGnd | 12 | 22,2C | - | - |
| Com_rawByte7SensNOxUbatt | 0x46AA | STAT_CoSCR_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_rawByte7SensNOxUbatt | Com_rawByte7SensNOxUbatt | 12 | 22,2C | - | - |
| Com_stAvlStAgFrontQl_FX | 0x46C4 | STAT_Com_stAvlStAgFrontQl_FX_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stAvlStAgFrontQl_FX | Status - Ist-Lenkwinkel der Vorderachse | 12 | 22,2C | - | - |
| Com_stCrCtlLvr | 0x4EBA | STAT_Com_stCrCtlLvr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stCrCtlLvr | Tempomat - Status des Bedienteils | 12 | 22,2C | - | - |
| Com_stDisblNwDTCs | 0x46B7 | STAT_Com_stDisblNwDTCs_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stDisblNwDTCs | Status Fehlerspeichersperre Netzwerkfehler | 12 | 22,2C | - | - |
| Com_stDrvDyn | 0x46BB | STAT_Com_stDrvDyn_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stDrvDyn | Com_stDrvDyn | 12 | 22,2C | - | - |
| Com_stECUBrkTrq | 0x46B9 | STAT_Com_stECUBrkTrq_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stECUBrkTrq | Com_stECUBrkTrq | 12 | 22,2C | - | - |
| Com_stECUStStb | 0x46BA | STAT_Com_stECUStStb_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stECUStStb | Com_stECUStStb | 12 | 22,2C | - | - |
| Com_stECUTrqStb | 0x46B8 | STAT_Com_stECUTrqStb_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stECUTrqStb | Com_stECUTrqStb | 12 | 22,2C | - | - |
| Com_stLmpPrkBrk | 0x46B4 | STAT_Com_stLmpPrkBrk_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stLmpPrkBrk | Lampenstatus der Parkbremse im Kombi | 12 | 22,2C | - | - |
| Com_stSTEQl | 0x46BD | STAT_Com_stSTEQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stSTEQl | Com_stSTEQl | 12 | 22,2C | - | - |
| Com_stTrqWhlDemFASQl | 0x46BC | STAT_Com_stTrqWhlDemFASQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stTrqWhlDemFASQl | Com_stTrqWhlDemFASQl | 12 | 22,2C | - | - |
| Com_stnWhlFLQl | 0x46CE | STAT_Com_stnWhlFLQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlFLQl | Com_stnWhlFLQl | 12 | 22,2C | - | - |
| Com_stnWhlFLQl_FX | 0x46CD | STAT_Com_stnWhlFLQl_FX_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlFLQl_FX | Com_stnWhlFLQl_FX | 12 | 22,2C | - | - |
| Com_stnWhlFRQl | 0x46D0 | STAT_Com_stnWhlFRQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlFRQl | Com_stnWhlFRQl | 12 | 22,2C | - | - |
| Com_stnWhlFRQl_FX | 0x46CF | STAT_Com_stnWhlFRQl_FX_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlFRQl_FX | Com_stnWhlFRQl_FX | 12 | 22,2C | - | - |
| Com_stnWhlRLQl | 0x46CA | STAT_Com_stnWhlRLQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlRLQl | Com_stnWhlRLQl | 12 | 22,2C | - | - |
| Com_stnWhlRLQl_FX | 0x46C9 | STAT_Com_stnWhlRLQl_FX_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlRLQl_FX | Com_stnWhlRLQl_FX | 12 | 22,2C | - | - |
| Com_stnWhlRRQl | 0x46CC | STAT_Com_stnWhlRRQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlRRQl | Com_stnWhlRRQl | 12 | 22,2C | - | - |
| Com_stnWhlRRQl_FX | 0x46CB | STAT_Com_stnWhlRRQl_FX_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stnWhlRRQl_FX | Com_stnWhlRRQl_FX | 12 | 22,2C | - | - |
| Com_stvVehQl | 0x46D2 | STAT_Com_stvVehQl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stvVehQl | Com_stvVehQl | 12 | 22,2C | - | - |
| Com_stvVehQl_FX | 0x46D1 | STAT_Com_stvVehQl_FX_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Com_stvVehQl_FX | Com_stvVehQl_FX | 12 | 22,2C | - | - |
| Com_uLamBinCat2Ds | 0x46C2 | STAT_Com_uLamBinCat2Ds_WERT | unsigned int | - | mV | - | 0.033570 | - | -200.000000 | Com_uLamBinCat2Ds | Sauerstoff binär des 2.Downstream NOx Sensors | 12 | 22,2C | - | - |
| Com_uLamBinDs | 0x46C3 | STAT_Com_uLamBinDs_WERT | unsigned int | - | mV | - | 0.033570 | - | -200.000000 | Com_uLamBinDs | Sauerstoff binär | 12 | 22,2C | - | - |
| Conv_nTrbn | 0x46EC | STAT_Conv_nTrbn_WERT | unsigned int | - | rpm | - | 0.500000 | - | 0.000000 | Conv_nTrbn | Turbinendrehzahl | 12 | 22,2C | - | - |
| CrCUI_stBtn | 0x4EB9 | STAT_CrCUI_stBtn_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CrCUI_stBtn | Zustand Tempomatbedienteil-Betätigung | 12 | 22,2C | - | - |
| CrC_stKey | 0x4EB8 | STAT_CrC_stKey_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | CrC_stKey | Status-Tempomatbedienteil | 12 | 22,2C | - | - |
| CrCtl_aReq | 0x4EB5 | STAT_CrCtl_aReq_WERT | unsigned int | - | m/s^2 | - | 0.001000 | - | -32.767000 | CrCtl_aReq | Beschleunigungsanforderung des Fahrgeschwindigkeitsreglers | 12 | 22,2C | - | - |
| CrCtl_st | 0x4EB7 | STAT_CrCtl_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CrCtl_st | Zustand der Fahrgeschwindigkeitsregelung | 12 | 22,2C | - | - |
| CrCtl_stReq | 0x5271 | STAT_CrCtl_stReq_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CrCtl_stReq | Cruise Control ist aktiv | 12 | 22,2C | - | - |
| CrCtl_stShOff | 0x4EB3 | STAT_CrCtl_stShOff_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | CrCtl_stShOff | Tempomat-Abschaltbedingungen | 12 | 22,2C | - | - |
| CrCtl_stShOffConRvActv_mp | 0x4EB2 | STAT_CrCtl_stShOffConRvActv_mp_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | CrCtl_stShOffConRvActv_mp | Tempomat-aktuelle Abschaltbedingungen (reversibel) | 12 | 22,2C | - | - |
| CrCtl_vDes | 0x4EB6 | STAT_CrCtl_vDes_WERT | unsigned int | - | km/h | - | 0.010000 | - | 0.000000 | CrCtl_vDes | Wunschgeschwindigkeit der Fahrgeschwindigkeitsregelung | 12 | 22,2C | - | - |
| CtT_tClntEngMod | 0x4628 | STAT_CtT_tClntEngMod_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | CtT_tClntEngMod | modellierte Kühlmitteltemperatur | 12 | 22,2C | - | - |
| DFC_ctLDF_mp | 0x457E | STAT_DFC_ctLDF_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFC_ctLDF_mp | Anzahl defekter Fehlerprüfungen, LDF (last debouced error flag) gesetzt | 12 | 22,2C | - | - |
| DFES_ctDef | 0x457A | STAT_DFES_ctDef_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DFES_ctDef | Fehlerzähler (FLC) aller Fehlerspeichereinträge | 12 | 22,2C | - | - |
| DFES_ctEntry | 0x457B | STAT_DFES_ctEntry_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DFES_ctEntry | Anzahl der belegten Fehlerspeichereinträge | 12 | 22,2C | - | - |
| DFES_ctMIL | 0x457F | STAT_DFES_ctMIL_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DFES_ctMIL | Anzahl der MIL ansteuernden Fehlerspeichereinträge | 12 | 22,2C | - | - |
| DFES_ctOBD | 0x457C | STAT_DFES_ctOBD_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DFES_ctOBD | Anzahl der in Mode 3 sichtbaren Fehlerspeichereinträge | 12 | 22,2C | - | - |
| DFES_ctOBDPend | 0x457D | STAT_DFES_ctOBDPend_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DFES_ctOBDPend | Anzahl der in Mode 7 (pending) sichtbaren Fehlerspeichereinträge | 12 | 22,2C | - | - |
| DFES_numDFC_0 | 0x452E | STAT_DFES_numDFC_0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_0 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 0 | 12 | 22,2C | - | - |
| DFES_numDFC_1 | 0x452F | STAT_DFES_numDFC_1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_1 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 1 | 12 | 22,2C | - | - |
| DFES_numDFC_10 | 0x4538 | STAT_DFES_numDFC_10_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_10 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 10 | 12 | 22,2C | - | - |
| DFES_numDFC_11 | 0x4539 | STAT_DFES_numDFC_11_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_11 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 11 | 12 | 22,2C | - | - |
| DFES_numDFC_12 | 0x453A | STAT_DFES_numDFC_12_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_12 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 12 | 12 | 22,2C | - | - |
| DFES_numDFC_13 | 0x453B | STAT_DFES_numDFC_13_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_13 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 13 | 12 | 22,2C | - | - |
| DFES_numDFC_14 | 0x453C | STAT_DFES_numDFC_14_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_14 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 14 | 12 | 22,2C | - | - |
| DFES_numDFC_15 | 0x453D | STAT_DFES_numDFC_15_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_15 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 15 | 12 | 22,2C | - | - |
| DFES_numDFC_16 | 0x453E | STAT_DFES_numDFC_16_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_16 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 16 | 12 | 22,2C | - | - |
| DFES_numDFC_17 | 0x453F | STAT_DFES_numDFC_17_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_17 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 17 | 12 | 22,2C | - | - |
| DFES_numDFC_18 | 0x4540 | STAT_DFES_numDFC_18_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_18 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 18 | 12 | 22,2C | - | - |
| DFES_numDFC_19 | 0x4541 | STAT_DFES_numDFC_19_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_19 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 19 | 12 | 22,2C | - | - |
| DFES_numDFC_2 | 0x4530 | STAT_DFES_numDFC_2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_2 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 2 | 12 | 22,2C | - | - |
| DFES_numDFC_3 | 0x4531 | STAT_DFES_numDFC_3_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_3 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 3 | 12 | 22,2C | - | - |
| DFES_numDFC_4 | 0x4532 | STAT_DFES_numDFC_4_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_4 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 4 | 12 | 22,2C | - | - |
| DFES_numDFC_5 | 0x4533 | STAT_DFES_numDFC_5_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_5 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 5 | 12 | 22,2C | - | - |
| DFES_numDFC_6 | 0x4534 | STAT_DFES_numDFC_6_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_6 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 6 | 12 | 22,2C | - | - |
| DFES_numDFC_7 | 0x4535 | STAT_DFES_numDFC_7_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_7 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 7 | 12 | 22,2C | - | - |
| DFES_numDFC_8 | 0x4536 | STAT_DFES_numDFC_8_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_8 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 8 | 12 | 22,2C | - | - |
| DFES_numDFC_9 | 0x4537 | STAT_DFES_numDFC_9_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DFES_numDFC_9 | Namen der im Fehlerspeicher eingetragenen Fehlerprüfungen 9 | 12 | 22,2C | - | - |
| DSMAUX_ctWUC | 0x455C | STAT_DSMAUX_ctWUC_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DSMAUX_ctWUC | Anzahl an Warm up Zyklen seit Fehlerspeicher löschen | 12 | 22,2C | - | - |
| DSMRdy_Why_CyclCmplComprCmpnt_mp | 0x4559 | STAT_DSMRdy_Why_CyclCmplComprCmpnt_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSMRdy_Why_CyclCmplComprCmpnt_mp | Ursache (Name der Fehlerprüfung)/Comprehensive component monitoring nicht getestet im aktuellen DC | 12 | 22,2C | - | - |
| DSMRdy_Why_CyclCmplEGR_mp | 0x455A | STAT_DSMRdy_Why_CyclCmplEGR_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSMRdy_Why_CyclCmplEGR_mp | Ursache (Name der Fehlerprüfung)/EGR system monitoring nicht getestet im aktuellen DC | 12 | 22,2C | - | - |
| DSMRdy_Why_CyclCmplFlSys_mp | 0x455B | STAT_DSMRdy_Why_CyclCmplFlSys_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSMRdy_Why_CyclCmplFlSys_mp | Ursache (Name der Fehlerprüfung)/Fuel system monitoring nicht getestet im aktuellen DC | 12 | 22,2C | - | - |
| DSMRdy_Why_RdyComprCmpnt_mp | 0x4556 | STAT_DSMRdy_Why_RdyComprCmpnt_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSMRdy_Why_RdyComprCmpnt_mp | Ursache (Name der Fehlerprüfung)/Comprehensive component monitoring nicht ready | 12 | 22,2C | - | - |
| DSMRdy_Why_RdyEGR_mp | 0x4557 | STAT_DSMRdy_Why_RdyEGR_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSMRdy_Why_RdyEGR_mp | Ursache (Name der Fehlerprüfung)/EGR system monitoring nicht ready | 12 | 22,2C | - | - |
| DSMRdy_Why_RdyFlSys_mp | 0x4558 | STAT_DSMRdy_Why_RdyFlSys_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSMRdy_Why_RdyFlSys_mp | Ursache (Name der Fehlerprüfung)/Fuel system monitoring nicht ready | 12 | 22,2C | - | - |
| DSM_DisblMode_mp | 0x4552 | STAT_DSM_DisblMode_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | DSM_DisblMode_mp | aktuelle Abschaltbedingungen der Fehlerspeicherverwaltung (bereitgestellt durch DSM Konfiguration) | 12 | 22,2C | - | - |
| DSM_stMIL | 0x4551 | STAT_DSM_stMIL_WERT | unsigned int | - | - | - | 1.600000 | - | 0.000000 | DSM_stMIL | MIL-Anforderungsstatus von DSM | 12 | 22,2C | - | - |
| DSM_stPostDrive | 0x4553 | STAT_DSM_stPostDrive_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DSM_stPostDrive | Status der DSM Nachlaufsteuerung | 12 | 22,2C | - | - |
| DSM_stRdyAB | 0x4554 | STAT_DSM_stRdyAB_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DSM_stRdyAB | Readinesserkennung AB | 12 | 22,2C | - | - |
| DSM_stRdyCD | 0x4555 | STAT_DSM_stRdyCD_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DSM_stRdyCD | Readinesserkennung CD | 12 | 22,2C | - | - |
| D_soc | 0x4285 | STAT_D_soc_WERT | unsigned int | - | - | - | 0.003052 | - | 0.000000 | D_soc | Abstand zur Startfähigkeitsgrenze | 12 | 22,2C | - | - |
| DewDet_stShOff_mp | 0x42A4 | STAT_DewDet_stShOff_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | DewDet_stShOff_mp | Status Zurücknahme der Freigabebedingung der Sendenheizung | 12 | 22,2C | - | - |
| Dffgen | 0x4F16 | STAT_Dffgen_WERT | unsigned char | - | % | - | 0.390625 | - | 0.000000 | Dffgen | Generatorregelung - Ableitung des Signals Dffgen | 12 | 22,2C | - | - |
| Dfh_lerncnt | 0x43F5 | STAT_Dfh_lerncnt_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Dfh_lerncnt | Zähler für die Lernfunktion Dieselfilterheizung | 12 | 22,2C | - | - |
| Dfh_lernpw | 0x43F6 | STAT_Dfh_lernpw_WERT | unsigned int | - | W | - | 0.100000 | - | 0.000000 | Dfh_lernpw | Gelernte Leistung für Dieselfilterheizung | 12 | 22,2C | - | - |
| Dfh_pekpf | 0x43F4 | STAT_Dfh_pekpf_WERT | unsigned int | - | W | - | 0.100000 | - | 0.000000 | Dfh_pekpf | Leistung EKP (U*I) filtriert | 12 | 22,2C | - | - |
| Dspl_volFlTnkQnt | 0x4DEA | STAT_Dspl_volFlTnkQnt_WERT | unsigned int | - | l | - | 0.010000 | - | 0.000000 | Dspl_volFlTnkQnt | Tankfüllstand | 12 | 22,2C | - | - |
| EBxFan_stPs | 0x4E02 | STAT_EBxFan_stPs_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EBxFan_stPs | Endstufenausgang für SG-Gehäuse Lüfter | 12 | 22,2C | - | - |
| ECBVlv_r | 0x5076 | STAT_ECBVlv_r_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | ECBVlv_r | Solltastverhältnis - AGR-Kühlerbypass | 12 | 22,2C | - | - |
| ECBVlv_rAct | 0x5074 | STAT_ECBVlv_rAct_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | ECBVlv_rAct | Tastverhältnis - AGR-Kühlerbypass | 12 | 22,2C | - | - |
| ECBVlv_rPs | 0x5075 | STAT_ECBVlv_rPs_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | ECBVlv_rPs | Ausgangstastverhältnis - AGR-Kühlerbypass | 12 | 22,2C | - | - |
| EGRClgLP_tSens_mp | 0x4D26 | STAT_EGRClgLP_tSens_mp_WERT | unsigned int | - | degC | - | 0.016022 | - | -50.000000 | EGRClgLP_tSens_mp | Temperatur des Sensors | 12 | 22,2C | - | - |
| EGRClg_tSens_mp | 0x4CFE | STAT_EGRClg_tSens_mp_WERT | unsigned int | - | degC | - | 0.016022 | - | -50.000000 | EGRClg_tSens_mp | Temperatur des Sensors | 12 | 22,2C | - | - |
| EGRVlvLP_r | 0x4C6A | STAT_EGRVlvLP_r_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlvLP_r | Solltastverhältnis - Niederdruckabgasrückführregelung | 12 | 22,2C | - | - |
| EGRVlvLP_rAct | 0x4C6C | STAT_EGRVlvLP_rAct_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlvLP_rAct | Isttastverhältnis - Niederdruckabgasrückführregelung | 12 | 22,2C | - | - |
| EGRVlvLP_rOfsLrnFrst | 0x4C70 | STAT_EGRVlvLP_rOfsLrnFrst_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlvLP_rOfsLrnFrst | Erster gelernter Offset-Wert | 12 | 22,2C | - | - |
| EGRVlvLP_rOfsLrnLst | 0x4C71 | STAT_EGRVlvLP_rOfsLrnLst_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlvLP_rOfsLrnLst | Letzter gelernter Offset-Wert | 12 | 22,2C | - | - |
| EGRVlvLP_rOfsLrnNew | 0x4C72 | STAT_EGRVlvLP_rOfsLrnNew_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlvLP_rOfsLrnNew | Gelernter Offset-Wert im vorhandenen Fahrzyklus | 12 | 22,2C | - | - |
| EGRVlvLP_rPs | 0x4C68 | STAT_EGRVlvLP_rPs_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlvLP_rPs | Ausgangstastverhältnis - Niederdruckabgasrückführregelung | 12 | 22,2C | - | - |
| EGRVlvLP_rSens | 0x4C73 | STAT_EGRVlvLP_rSens_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlvLP_rSens | Niederdruck-AGR - Stellgliedposition | 12 | 22,2C | - | - |
| EGRVlvLP_stMon | 0x4C6F | STAT_EGRVlvLP_stMon_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EGRVlvLP_stMon | Status der Systemüberwachung vom ND-AGR-Ventil | 12 | 22,2C | - | - |
| EGRVlvLP_uRaw | 0x4C6E | STAT_EGRVlvLP_uRaw_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | EGRVlvLP_uRaw | Rohspannungswert - Niederdruckabgasrückführregelventil | 12 | 22,2C | - | - |
| EGRVlv_r | 0x4C8F | STAT_EGRVlv_r_WERT | unsigned int | - | % | - | 0.003052 | - | 0.000000 | EGRVlv_r | Solltastverhältnis - Abgasrückführregelventil | 12 | 22,2C | - | - |
| EGRVlv_rAct | 0x4C8C | STAT_EGRVlv_rAct_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | EGRVlv_rAct | Tastverhältnis - Abgasrückführregelventil | 12 | 22,2C | - | - |
| EGRVlv_rDesEGR | 0x4C93 | STAT_EGRVlv_rDesEGR_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlv_rDesEGR | Ausgang der Sollwertkennlinie für AGR-Tastverhältnis | 12 | 22,2C | - | - |
| EGRVlv_rEGR | 0x4C95 | STAT_EGRVlv_rEGR_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlv_rEGR | Steuerwert des AGR-Ventils | 12 | 22,2C | - | - |
| EGRVlv_rOfsLrnFrst | 0x4C90 | STAT_EGRVlv_rOfsLrnFrst_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlv_rOfsLrnFrst | Erster gelernter Offset-Wert | 12 | 22,2C | - | - |
| EGRVlv_rOfsLrnLst | 0x4C91 | STAT_EGRVlv_rOfsLrnLst_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlv_rOfsLrnLst | Letzter gelernter Offset-Wert | 12 | 22,2C | - | - |
| EGRVlv_rOfsLrnNew | 0x4C92 | STAT_EGRVlv_rOfsLrnNew_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | EGRVlv_rOfsLrnNew | Gelernter Offset-Wert im aktuellen Fahrzyklus | 12 | 22,2C | - | - |
| IAAGR | 0x4C8D | STAT_ABGASRUECKFUEHRSTELLER_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlv_rPs | Ausgangstastverhältnis - Abgasrückführregelventil | 12 | 22,2C | - | - |
| EGRVlv_rSens | 0x4C97 | STAT_EGRVlv_rSens_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | EGRVlv_rSens | AGR - Stellgliedposition | 12 | 22,2C | - | - |
| EGRVlv_stMon | 0x4C8B | STAT_EGRVlv_stMon_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EGRVlv_stMon | Status der Systemüberwachung vom AGR-Ventil | 12 | 22,2C | - | - |
| EMDmp_rPs_0 | 0x4DB8 | STAT_EMDmp_rPs_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | EMDmp_rPs_0 | Ausgangstastverhältnis - Motorschwingungsdämpfer | 12 | 22,2C | - | - |
| INMKL0 | 0x5532 | STAT_NMK_LERNZYKLUSZAEHLER_0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_ctLrn_mp_0 | Lernzykluszähler der Ansteuerdauerkalibrierung für Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMKL1 | 0x5533 | STAT_NMK_LERNZYKLUSZAEHLER_1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_ctLrn_mp_1 | Lernzykluszähler der Ansteuerdauerkalibrierung für Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMKL2 | 0x5534 | STAT_NMK_LERNZYKLUSZAEHLER_2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_ctLrn_mp_2 | Lernzykluszähler der Ansteuerdauerkalibrierung für Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMK00 | 0x5535 | STAT_ANSTEUERDAUER_KORR_PIL0_ZYL1_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt0_mp_0 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 1 beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMK01 | 0x5536 | STAT_ANSTEUERDAUER_KORR_PIL0_ZYL2_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt0_mp_1 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 2 beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMK02 | 0x5537 | STAT_ANSTEUERDAUER_KORR_PIL0_ZYL3_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt0_mp_2 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 3 beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMK03 | 0x5538 | STAT_ANSTEUERDAUER_KORR_PIL0_ZYL4_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt0_mp_3 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 4 beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMK04 | 0x5539 | STAT_ANSTEUERDAUER_KORR_PIL0_ZYL5_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt0_mp_4 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 5 beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMK05 | 0x553A | STAT_ANSTEUERDAUER_KORR_PIL0_ZYL6_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt0_mp_5 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 6 beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMK10 | 0x553B | STAT_ANSTEUERDAUER_KORR_PIL1_ZYL1_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt1_mp_0 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 1 beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMK11 | 0x553C | STAT_ANSTEUERDAUER_KORR_PIL1_ZYL2_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt1_mp_1 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 2 beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMK12 | 0x553D | STAT_ANSTEUERDAUER_KORR_PIL1_ZYL3_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt1_mp_2 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 3 beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMK13 | 0x553E | STAT_ANSTEUERDAUER_KORR_PIL1_ZYL4_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt1_mp_3 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 4 beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMK14 | 0x553F | STAT_ANSTEUERDAUER_KORR_PIL1_ZYL5_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt1_mp_4 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 5 beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMK15 | 0x5540 | STAT_ANSTEUERDAUER_KORR_PIL1_ZYL6_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt1_mp_5 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 6 beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMK20 | 0x5541 | STAT_ANSTEUERDAUER_KORR_PIL2_ZYL1_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt2_mp_0 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 1 beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMK21 | 0x5542 | STAT_ANSTEUERDAUER_KORR_PIL2_ZYL2_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt2_mp_1 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 2 beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMK22 | 0x5543 | STAT_ANSTEUERDAUER_KORR_PIL2_ZYL3_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt2_mp_2 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 3 beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMK23 | 0x5544 | STAT_ANSTEUERDAUER_KORR_PIL2_ZYL4_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt2_mp_3 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 4 beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMK24 | 0x5545 | STAT_ANSTEUERDAUER_KORR_PIL2_ZYL5_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt2_mp_4 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 5 beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMK25 | 0x5546 | STAT_ANSTEUERDAUER_KORR_PIL2_ZYL6_WERT | unsigned int | - | us | - | 0.152590 | - | -5000.000000 | ETClb_dtiETFlt2_mp_5 | Ansteuerdauerdifferenz der Ansteuerdauerkalibrierung für Zylinder 6 beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| ETClb_pRailSet_0 | 0x5524 | STAT_ETClb_pRailSet_0_WERT | unsigned int | - | - | - | 0.100000 | - | 0.000000 | ETClb_pRailSet_0 | Zustand der Ansteuerdauerkalibrierung 0 | 12 | 22,2C | - | - |
| ETClb_pRailSet_1 | 0x5525 | STAT_ETClb_pRailSet_1_WERT | unsigned int | - | - | - | 0.100000 | - | 0.000000 | ETClb_pRailSet_1 | Zustand der Ansteuerdauerkalibrierung 1 | 12 | 22,2C | - | - |
| ETClb_pRailSet_2 | 0x5526 | STAT_ETClb_pRailSet_2_WERT | unsigned int | - | - | - | 0.100000 | - | 0.000000 | ETClb_pRailSet_2 | Zustand der Ansteuerdauerkalibrierung 2 | 12 | 22,2C | - | - |
| ISNFR | 0x5530 | STAT_NULLMENGENADAPTION_STATUS_FREIGABEN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ETClb_stCor | Statusanzeige der Freigaben für die Ansteuerdauerkalibrierung (1 Byte) | 12 | 22,2C | - | - |
| ISNFZ | 0x5531 | STAT_NULLMENGENADAPTION_STATUS_FREIGABEN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ETClb_stRlsCylCor_mp | Zylinderspezifische Freigabe für die Ansteuerdauerkalibrierung (1 Byte) | 12 | 22,2C | - | - |
| ETClb_tiETAvrg_0 | 0x552D | STAT_ETClb_tiETAvrg0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETAvrg_0 | Durchschnittliche Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| ETClb_tiETAvrg_1 | 0x552E | STAT_ETClb_tiETAvrg1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETAvrg_1 | Durchschnittliche Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| ETClb_tiETAvrg_2 | 0x552F | STAT_ETClb_tiETAvrg2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETAvrg_2 | Durchschnittliche Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| ETClb_tiETCor0_mp_0 | 0x5547 | STAT_ETClb_tiETCor0_mp_0_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor0_mp_0 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 0 0 | 12 | 22,2C | - | - |
| ETClb_tiETCor0_mp_1 | 0x5548 | STAT_ETClb_tiETCor0_mp_1_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor0_mp_1 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 0 1 | 12 | 22,2C | - | - |
| ETClb_tiETCor0_mp_2 | 0x5549 | STAT_ETClb_tiETCor0_mp_2_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor0_mp_2 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 0 2 | 12 | 22,2C | - | - |
| ETClb_tiETCor0_mp_3 | 0x554A | STAT_ETClb_tiETCor0_mp_3_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor0_mp_3 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 0 3 | 12 | 22,2C | - | - |
| ETClb_tiETCor0_mp_4 | 0x554B | STAT_ETClb_tiETCor0_mp_4_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor0_mp_4 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 0 4 | 12 | 22,2C | - | - |
| ETClb_tiETCor0_mp_5 | 0x554C | STAT_ETClb_tiETCor0_mp_5_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor0_mp_5 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 0 5 | 12 | 22,2C | - | - |
| ETClb_tiETCor1_mp_0 | 0x554D | STAT_ETClb_tiETCor1_mp_0_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor1_mp_0 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 1 0 | 12 | 22,2C | - | - |
| ETClb_tiETCor1_mp_1 | 0x554E | STAT_ETClb_tiETCor1_mp_1_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor1_mp_1 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 1 1 | 12 | 22,2C | - | - |
| ETClb_tiETCor1_mp_2 | 0x554F | STAT_ETClb_tiETCor1_mp_2_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor1_mp_2 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 1 2 | 12 | 22,2C | - | - |
| ETClb_tiETCor1_mp_3 | 0x5550 | STAT_ETClb_tiETCor1_mp_3_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor1_mp_3 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 1 3 | 12 | 22,2C | - | - |
| ETClb_tiETCor1_mp_4 | 0x5551 | STAT_ETClb_tiETCor1_mp_4_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor1_mp_4 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 1 4 | 12 | 22,2C | - | - |
| ETClb_tiETCor1_mp_5 | 0x5552 | STAT_ETClb_tiETCor1_mp_5_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor1_mp_5 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 1 5 | 12 | 22,2C | - | - |
| ETClb_tiETCor2_mp_0 | 0x5553 | STAT_ETClb_tiETCor2_mp_0_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor2_mp_0 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 2 0 | 12 | 22,2C | - | - |
| ETClb_tiETCor2_mp_1 | 0x5554 | STAT_ETClb_tiETCor2_mp_1_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor2_mp_1 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 2 1 | 12 | 22,2C | - | - |
| ETClb_tiETCor2_mp_2 | 0x5555 | STAT_ETClb_tiETCor2_mp_2_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor2_mp_2 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 2 2 | 12 | 22,2C | - | - |
| ETClb_tiETCor2_mp_3 | 0x5556 | STAT_ETClb_tiETCor2_mp_3_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor2_mp_3 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 2 3 | 12 | 22,2C | - | - |
| ETClb_tiETCor2_mp_4 | 0x5557 | STAT_ETClb_tiETCor2_mp_4_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor2_mp_4 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 2 4 | 12 | 22,2C | - | - |
| ETClb_tiETCor2_mp_5 | 0x5558 | STAT_ETClb_tiETCor2_mp_5_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | ETClb_tiETCor2_mp_5 | Ansteuerdauerkorrekturwert der Ansteuerdauer-Kalibrierung für den Raildruck-Kalibrierpunkt 2 5 | 12 | 22,2C | - | - |
| ETClb_tiETMax_0 | 0x5527 | STAT_ETClb_tiETMax0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETMax_0 | Maximale Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| ETClb_tiETMax_1 | 0x5528 | STAT_ETClb_tiETMax1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETMax_1 | Maximale Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| ETClb_tiETMax_2 | 0x5529 | STAT_ETClb_tiETMax2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETMax_2 | Maximale Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| INMKZ400 | 0x552A | STAT_ANSTEUERDAUER_AKTUELLER_ZYLINDER_400BAR_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETMin_0 | Minimale Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 0 | 12 | 22,2C | - | - |
| INMKZ700 | 0x552B | STAT_ANSTEUERDAUER_AKTUELLER_ZYLINDER_700BAR_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETMin_1 | Minimale Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 1 | 12 | 22,2C | - | - |
| INMKZ1000 | 0x552C | STAT_ANSTEUERDAUER_AKTUELLER_ZYLINDER_1000BAR_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ETClb_tiETMin_2 | Minimale Ansteuerdauer der Ansteuerdauerkalibrierung beim Raildruckkalibrierpunkt 2 | 12 | 22,2C | - | - |
| ETCtl_tDvtDwnOLopThres_mp | 0x5564 | STAT_ETCtl_tDvtDwnOLopThres_mp_WERT | unsigned int | - | K | - | 0.100000 | - | 0.000000 | ETCtl_tDvtDwnOLopThres_mp | Temperaturschwellwert zu Überwachung des maximalen Reglereingriffs | 12 | 22,2C | - | - |
| ETCtl_tDvtOutr | 0x5565 | STAT_ETCtl_tDvtOutr_WERT | unsigned int | - | K | - | 0.016022 | - | -50.000000 | ETCtl_tDvtOutr | Regelabweichung des äußeren Regelkreises | 12 | 22,2C | - | - |
| ETCtl_tDvtUpOLopThres_mp | 0x5566 | STAT_ETCtl_tDvtUpOLopThres_mp_WERT | unsigned int | - | K | - | 0.100000 | - | 0.000000 | ETCtl_tDvtUpOLopThres_mp | Temperaturschwellwert zu Überwachung des minimalen Reglereingriffs | 12 | 22,2C | - | - |
| ETCtl_tOutrDes | 0x5568 | STAT_ETCtl_tOutrDes_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | ETCtl_tOutrDes | Temperatursollwert des äußeren Regelkreises | 12 | 22,2C | - | - |
| ETCtl_tiEOMOLopOn_mp | 0x5567 | STAT_ETCtl_tiEOMOLopOn_mp_WERT | unsigned long | - | s | - | 0.000015 | - | 0.000000 | ETCtl_tiEOMOLopOn_mp | Aktivierungszeit des äußerern Regelkreises | 12 | 22,2C | - | - |
| Eep_EnvRamCheckInfo | 0x52CB | STAT_Eep_EnvRamCheckInfo_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Eep_EnvRamCheckInfo | Info zum Envram Check | 12 | 22,2C | - | - |
| EngDa_ctrSecLst | 0x4BC1 | STAT_EngDa_ctrSecLst_WERT | unsigned long | - | s | - | 1.000000 | - | 0.000000 | EngDa_ctrSecLst | Beim Abstellen des Motors als Zeitstempel abgespeicherte Relativzeit vom CAN Com_ctrSec | 12 | 22,2C | - | - |
| EngDa_stEngOffRst_mp | 0x4BC2 | STAT_EngDa_stEngOffRst_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EngDa_stEngOffRst_mp | Status des Rücksetzens der Engine-Off-Time falls eine korrekte Berechnung nicht mehr garantiert werden kann (0 bei Fehlerfreiheit) | 12 | 22,2C | - | - |
| ITMOT | 0x4BC3 | STAT_MOTORTEMPERATUR_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | EngDa_tEng | Motortemperatur | 12 | 22,2C | - | - |
| EngDa_tFld_0 | 0x4BCD | STAT_EngDa_tFld0_WERT | unsigned int | - | degC | - | 0.100000 | - | 0.000000 | EngDa_tFld_0 | Motortemperatur-Feld 0 | 12 | 22,2C | - | - |
| EngDa_tFld_1 | 0x4BCE | STAT_EngDa_tFld1_WERT | unsigned int | - | degC | - | 0.100000 | - | 0.000000 | EngDa_tFld_1 | Motortemperatur-Feld 1 | 12 | 22,2C | - | - |
| EngDa_tFld_2 | 0x4BCF | STAT_EngDa_tFld2_WERT | unsigned int | - | degC | - | 0.100000 | - | 0.000000 | EngDa_tFld_2 | Motortemperatur-Feld 2 | 12 | 22,2C | - | - |
| EngDa_tFld_3 | 0x4BD0 | STAT_EngDa_tFld3_WERT | unsigned int | - | degC | - | 0.100000 | - | 0.000000 | EngDa_tFld_3 | Motortemperatur-Feld 3 | 12 | 22,2C | - | - |
| EngDa_tiEngOff | 0x4BC9 | STAT_EngDa_tFld3_WERT | unsigned long | - | s | - | 1.000000 | - | 0.000000 | EngDa_tiEngOff | aktuelle Motorabstellzeit | 12 | 22,2C | - | - |
| IZBST | 0x4BC4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | unsigned long | - | s | - | 1.000000 | - | 0.000000 | EngDa_tiEngOn | Betriebsstundenzähler | 12 | 22,2C | - | - |
| EngDa_tiEngOn_Cod | 0x4BCB | STAT_EngDa_tiEngOn_WERT | unsigned long | - | s | - | 0.100000 | - | 0.000000 | EngDa_tiEngOn_Cod | Engine on time (skaliert mit 0,1 sec. für Codierung) | 12 | 22,2C | - | - |
| EngDem_trqLimErr | 0x46A9 | STAT_EngDem_trqLimErr_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | EngDem_trqLimErr | Begrenzungsmoment im Fehlerfall | 12 | 22,2C | - | - |
| EngPrt_trqLim | 0x46A7 | STAT_EngPrt_trqLim_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | EngPrt_trqLim | Begrenzungsmoment zum Schutz vor zu hohem Drehmoment (als inneres Motormoment) | 12 | 22,2C | - | - |
| EngReq_trqLim | 0x46A8 | STAT_EngReq_trqLim_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | EngReq_trqLim | resultierendes Begrenzungsmoment aus Motorvorgaben | 12 | 22,2C | - | - |
| EngStA_stPs | 0x4BC7 | STAT_EngDa_tFld1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EngStA_stPs | EngStA_stPs | 12 | 22,2C | - | - |
| EngTrqPtd_stPthLim | 0x53FA | STAT_EngTrqPtd_stPthLim_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EngTrqPtd_stPthLim | Status der motorseitigen Momentenbegrenzung aus der Überwachung | 12 | 22,2C | - | - |
| EngTrqPtd_trqLim | 0x53FD | STAT_EngTrqPtd_trqLim_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | EngTrqPtd_trqLim | Begrenzungsmoment der Sollwertpfade aus der Überwachung | 12 | 22,2C | - | - |
| EngTrqPtd_trqSpdG | 0x53FC | STAT_EngTrqPtd_trqSpdG_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | EngTrqPtd_trqSpdG | zulässiges Moment des Drehzahlreglers | 12 | 22,2C | - | - |
| IPUMG | 0x4CF0 | STAT_UMGEBUNGSDRUCK_WERT | unsigned int | - | hPa | - | 0.030518 | - | 0.000000 | EnvP_p | Umgebungsdruck | 12 | 22,2C | - | - |
| IUUMG | 0x4CF1 | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | EnvP_uRaw | Umgebungsdruck - Spannungsrohwert vom Sensor | 12 | 22,2C | - | - |
| ITUMG | 0x50A6 | STAT_UMGEBUNGSTEMPERATUR_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | EnvT_t | Umgebungstemperatur | 12 | 22,2C | - | - |
| EpmCaS_phiOfsCorr | 0x56B9 | STAT_EpmCaS_phiOfsCorr_WERT | unsigned int | - | degCrS | - | 0.003052 | - | -100.000000 | EpmCaS_phiOfsCorr | Offsetwinkel für Nockenwelle (Rohwert) | 12 | 22,2C | - | - |
| EpmCrS_stSigMode | 0x5272 | STAT_EpmCrS_stSigMode_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EpmCrS_stSigMode | Status Kurbelwellensignalauswertung | 12 | 22,2C | - | - |
| EpmHCrS_stSigMode | 0x56B8 | STAT_EpmHCrS_stSigMode_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EpmHCrS_stSigMode | Zustand der Kurbelwellensignalauswertung | 12 | 22,2C | - | - |
| EpmSyn_stCasEval | 0x5273 | STAT_EpmSyn_stCasEval_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | EpmSyn_stCasEval | Zustand der Nockenwellenauswertung | 12 | 22,2C | - | - |
| INMOT | 0x5955 | STAT_MOTORDREHZAHL_WERT | unsigned int | - | rpm | - | 0.500000 | - | 0.000000 | Epm_nEng | Motordrehzahl | 12 | 22,2C | - | - |
| Epm_stOpMode | 0x56B7 | STAT_Epm_stOpMode_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Epm_stOpMode | Zustand Betriebsmodus | 12 | 22,2C | - | - |
| Epm_stSpd | 0x56BA | STAT_Epm_stSpd_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Epm_stSpd | Auswahl der Motordrehzahl | 12 | 22,2C | - | - |
| ISSYN | 0x56B6 | STAT_SYNCHRONISATION_KW_NW_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Epm_stSync | Zustand Synchronisation | 12 | 22,2C | - | - |
| ISMIL | 0x50D8 | STAT_MIL_EIN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ErrLmp_stMILReq | Anforderungsstatus - MIL | 12 | 22,2C | - | - |
| ISSLA | 0x50D9 | STAT_ANFORDERUNGSSTATUS_SYSTEMLAMPE_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ErrLmp_stSVSReq | Anforderungsstatus - Systemlampe | 12 | 22,2C | - | - |
| ExhFlpLP_r | 0x4524 | STAT_ExhFlpLP_r_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | ExhFlpLP_r | Tastverhältnis der Abgas-Drosselklappe (Sollwert) | 12 | 22,2C | - | - |
| ExhFlpLP_rPs | 0x4526 | STAT_ExhFlpLP_rPs_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | ExhFlpLP_rPs | Tastverhältnis der Abgas-Drosselklappe (Istwert) | 12 | 22,2C | - | - |
| Exh_dpModPTrbnUs_mp | 0x4515 | STAT_Exh_dpModPTrbnUs_mp_WERT | unsigned int | - | hPa/s | - | 0.100000 | - | -3276.800000 | Exh_dpModPTrbnUs_mp | Exh_dpModPTrbnUs_mp | 12 | 22,2C | - | - |
| Exh_dpSensPTrbnUs_mp | 0x4516 | STAT_Exh_dpSensPTrbnUs_mp_WERT | unsigned int | - | hPa/s | - | 0.100000 | - | -3276.800000 | Exh_dpSensPTrbnUs_mp | Exh_dpSensPTrbnUs_mp | 12 | 22,2C | - | - |
| Exh_mAirAftOvrRunNSCDs | 0x446B | STAT_Exh_mAirAftOvrRunNSCDs_WERT | unsigned int | - | g | - | 0.100000 | - | 0.000000 | Exh_mAirAftOvrRunNSCDs | Min. integrierter Luftmassenstrom | 12 | 22,2C | - | - |
| Exh_mAirAftOvrRunNoCat2Ds | 0x446A | STAT_Exh_mAirAftOvrRunNoCat2Ds_WERT | unsigned int | - | g | - | 0.100000 | - | 0.000000 | Exh_mAirAftOvrRunNoCat2Ds | Min. integrierter Luftmassenstrom | 12 | 22,2C | - | - |
| IPDIP | 0x44F8 | STAT_DIFFERENZDRUCK_UEBER_PARTIKELFILTER_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | Exh_pAdapPPFltDiff | korrigierter Differenzdruck | 12 | 22,2C | - | - |
| Exh_pAdapPPFltUs | 0x4504 | STAT_Exh_pAdapPPFltUs_WERT | unsigned int | - | hPa | - | 0.100000 | - | 0.000000 | Exh_pAdapPPFltUs | korrigierter Absolutgegendruck des Partikelfilters | 12 | 22,2C | - | - |
| Exh_pDiffOfsValAct | 0x44FC | STAT_Exh_pDiffOfsValAct_WERT | unsigned int | - | hPa | - | 0.030518 | - | -1000.000000 | Exh_pDiffOfsValAct | Offset fuer Partikelfilter-Differenzdruck | 12 | 22,2C | - | - |
| Exh_pDiffOfsValOld | 0x44DA | STAT_Exh_pDiffOfsValOld_WERT | unsigned int | - | hPa | - | 0.030518 | - | -1000.000000 | Exh_pDiffOfsValOld | Exh_pDiffOfsValOld | 12 | 22,2C | - | - |
| Exh_pDiffTrbnUsIntkVUs | 0x44DD | STAT_Exh_pDiffTrbnUsIntkVUs_WERT | unsigned int | - | hPa | - | 0.030518 | - | -1000.000000 | Exh_pDiffTrbnUsIntkVUs | neu gelernte relative Abweichung vom Druck vor Turbine zu Ladedruck | 12 | 22,2C | - | - |
| Exh_pDiffTrbnUsIntkVUsAct | 0x44E2 | STAT_Exh_pDiffTrbnUsIntkVUsAct_WERT | unsigned int | - | hPa | - | 0.030518 | - | -1000.000000 | Exh_pDiffTrbnUsIntkVUsAct | relative Abweichung vom Druck vor Turbine zu Ladedruck | 12 | 22,2C | - | - |
| Exh_pDiffTrbnUsIntkVUsOld | 0x44DC | STAT_Exh_pDiffTrbnUsIntkVUsOld_WERT | unsigned int | - | hPa | - | 0.030518 | - | -1000.000000 | Exh_pDiffTrbnUsIntkVUsOld | alte gelernte relative Abweichung vom Druck vor Turbine zu Ladedruck | 12 | 22,2C | - | - |
| Exh_pFltPPFltDiff | 0x44FA | STAT_Exh_pFltPPFltDiff_WERT | unsigned int | - | hPa | - | 0.045777 | - | -1000.000000 | Exh_pFltPPFltDiff | gefilterter Differenzdruck des Partikelfilters | 12 | 22,2C | - | - |
| IPABG1 | 0x4506 | STAT_ABGASDRUCK_VOR_PARTIKELFILTER_1_WERT | unsigned int | - | hPa | - | 0.100000 | - | 0.000000 | Exh_pFltPPFltUs | Absolutdruck vor Partikelfilter | 12 | 22,2C | - | - |
| Exh_pOfsValActMidPPFltDiff | 0x4466 | STAT_Exh_pOfsValActMidPPFltDiff_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | Exh_pOfsValActMidPPFltDiff | Mittelwert des Differenzdruckoffsets | 12 | 22,2C | - | - |
| Exh_pPFltDiff | 0x44ED | STAT_Exh_pPFltDiff_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pPFltDiff | Differenzdruck am Partikelfilter | 12 | 22,2C | - | - |
| Exh_pPFltUs | 0x44F4 | STAT_Exh_pPFltUs_WERT | unsigned int | - | hPa | - | 0.091554 | - | 0.000000 | Exh_pPFltUs | Abgasdruck vor Partikelfilter | 12 | 22,2C | - | - |
| Exh_pRawAdapPPFltDiff | 0x44FE | STAT_Exh_pRawAdapPPFltDiff_WERT | unsigned int | - | hPa | - | 0.045777 | - | -1000.000000 | Exh_pRawAdapPPFltDiff | Rohwert des korrigierten Absolutgegendruckes | 12 | 22,2C | - | - |
| Exh_pSensFieldPTrbnUs_0 | 0x44E4 | STAT_Exh_pSensFieldPTrbnUs0_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensFieldPTrbnUs_0 | Ringpuffer der gespeicherten Sensorwertenach Freigabe der Plausibilisierungen 0 | 12 | 22,2C | - | - |
| Exh_pSensFieldPTrbnUs_1 | 0x44E5 | STAT_Exh_pSensFieldPTrbnUs1_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensFieldPTrbnUs_1 | Ringpuffer der gespeicherten Sensorwertenach Freigabe der Plausibilisierungen 1 | 12 | 22,2C | - | - |
| Exh_pSensFieldPTrbnUs_2 | 0x44E6 | STAT_Exh_pSensFieldPTrbnUs2_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensFieldPTrbnUs_2 | Ringpuffer der gespeicherten Sensorwertenach Freigabe der Plausibilisierungen 2 | 12 | 22,2C | - | - |
| Exh_pSensFieldPTrbnUs_3 | 0x44E7 | STAT_Exh_pSensFieldPTrbnUs3_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensFieldPTrbnUs_3 | Ringpuffer der gespeicherten Sensorwertenach Freigabe der Plausibilisierungen 3 | 12 | 22,2C | - | - |
| Exh_pSensFieldPTrbnUs_4 | 0x44E8 | STAT_Exh_pSensFieldPTrbnUs4_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensFieldPTrbnUs_4 | Ringpuffer der gespeicherten Sensorwertenach Freigabe der Plausibilisierungen 4 | 12 | 22,2C | - | - |
| Exh_pSensFieldPTrbnUs_5 | 0x44E9 | STAT_Exh_pSensFieldPTrbnUs5_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensFieldPTrbnUs_5 | Ringpuffer der gespeicherten Sensorwertenach Freigabe der Plausibilisierungen 5 | 12 | 22,2C | - | - |
| Exh_pSensMeanPTrbnUs | 0x44DE | STAT_Exh_pSensMeanPTrbnUs_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensMeanPTrbnUs | Mittelwert der Sensorwerte des Ringpuffers nach Freigabe-Delay | 12 | 22,2C | - | - |
| Exh_pSensPPFltDiff | 0x44EC | STAT_Exh_pSensPPFltDiff_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensPPFltDiff | gemessener Differenzdruck nach dem Partikelfilter | 12 | 22,2C | - | - |
| Exh_pSensPPFltUs | 0x44EB | STAT_Exh_pSensPPFltUs_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pSensPPFltUs | gemessener Druck vor dem Partikelfilter | 12 | 22,2C | - | - |
| Exh_pSensPTrbnUs | 0x4514 | STAT_Exh_pSensPTrbnUs_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | Exh_pSensPTrbnUs | Erfasster Wert des Drucks bei TrbnUs | 12 | 22,2C | - | - |
| Exh_pTrbnUs | 0x44E3 | STAT_Exh_pTrbnUs_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pTrbnUs | Druck vor Turbine | 12 | 22,2C | - | - |
| Exh_pUnFltPTrbnUs | 0x44AA | STAT_Exh_pUnFltPTrbnUs_WERT | unsigned int | - | hPa | - | 0.038148 | - | 500.000000 | Exh_pUnFltPTrbnUs | Absolutdruck vor Turbine | 12 | 22,2C | - | - |
| Exh_qStrtNSCDs_mp | 0x446C | STAT_Exh_qStrtNSCDs_mp_WERT | unsigned int | - | mg/Hub | - | 0.010000 | - | 0.000000 | Exh_qStrtNSCDs_mp | Referenzwert der Einspritzmenge im Pruefbereich des Betriebspunktes | 12 | 22,2C | - | - |
| Exh_rNOxNSCDs | 0x450A | STAT_Exh_rNOxNSCDs_WERT | unsigned int | - | ppm | - | 0.032044 | - | -100.000000 | Exh_rNOxNSCDs | Signal von NOx-Sensor 1 (Offset-korrigiert) | 12 | 22,2C | - | - |
| Exh_rNOxNoCat2Ds | 0x4508 | STAT_Exh_rNOxNoCat2Ds_WERT | unsigned int | - | ppm | - | 0.032044 | - | -100.000000 | Exh_rNOxNoCat2Ds | Signal von NOx-Sensor 2 (Offset-korrigiert) | 12 | 22,2C | - | - |
| Exh_rNOxOfsAvrgNSCDs | 0x4513 | STAT_Exh_rNOxOfsAvrgNSCDs_WERT | unsigned int | - | ppm | - | 0.032044 | - | -100.000000 | Exh_rNOxOfsAvrgNSCDs | Durchschnittliches NOx-Offset-Signal (Sensor 1) | 12 | 22,2C | - | - |
| Exh_rNOxOfsAvrgNoCat2Ds | 0x4512 | STAT_Exh_rNOxOfsAvrgNoCat2Ds_WERT | unsigned int | - | ppm | - | 0.032044 | - | -100.000000 | Exh_rNOxOfsAvrgNoCat2Ds | Durchschnittliches NOx-Offset-Signal (Sensor 2) | 12 | 22,2C | - | - |
| Exh_rNOxOfsMaxNSCDs_mp | 0x446E | STAT_Exh_rNOxOfsMaxNSCDs_mp_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Exh_rNOxOfsMaxNSCDs_mp | Maximalwert des NOx-Offsets während des Offset-Lernens | 12 | 22,2C | - | - |
| Exh_rNOxOfsMaxNoCat2Ds_mp | 0x446D | STAT_Exh_rNOxOfsMaxNoCat2Ds_mp_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Exh_rNOxOfsMaxNoCat2Ds_mp | Maximalwert des NOx-Offsets während des Offset-Lernens | 12 | 22,2C | - | - |
| Exh_rNOxOfsMinNSCDs_mp | 0x4470 | STAT_Exh_rNOxOfsMinNSCDs_mp_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Exh_rNOxOfsMinNSCDs_mp | Minimalwert des NOx-Offsets während des Offset-Lernens | 12 | 22,2C | - | - |
| Exh_rNOxOfsMinNoCat2Ds_mp | 0x446F | STAT_Exh_rNOxOfsMinNoCat2Ds_mp_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Exh_rNOxOfsMinNoCat2Ds_mp | Minimalwert des NOx-Offsets während des Offset-Lernens | 12 | 22,2C | - | - |
| Exh_rNOxOfsNSCDs | 0x450D | STAT_Exh_rNOxOfsNSCDs_WERT | unsigned int | - | ppm | - | 0.032044 | - | -100.000000 | Exh_rNOxOfsNSCDs | Sensoroffset durch Schubkalibrierung (Upstream) | 12 | 22,2C | - | - |
| Exh_rNOxOfsNoCat2Ds | 0x450C | STAT_Exh_rNOxOfsNoCat2Ds_WERT | unsigned int | - | ppm | - | 0.032044 | - | -100.000000 | Exh_rNOxOfsNoCat2Ds | Sensoroffset durch Schubkalibrierung (Downstream) | 12 | 22,2C | - | - |
| Exh_rNOxPresCompNSCDs | 0x4472 | STAT_Exh_rNOxPresCompNSCDs_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Exh_rNOxPresCompNSCDs | druckkompensiertes NOx-Signal | 12 | 22,2C | - | - |
| Exh_rNOxPresCompNoCat2Ds | 0x4471 | STAT_Exh_rNOxPresCompNoCat2Ds_WERT | unsigned int | - | ppm | - | 0.025940 | - | -50.000000 | Exh_rNOxPresCompNoCat2Ds | druckkompensiertes NOx-Signal | 12 | 22,2C | - | - |
| Exh_rO2LinNSCDs | 0x4474 | STAT_Exh_rO2LinNSCDs_WERT | unsigned int | - | - | - | 0.000100 | - | -3.267800 | Exh_rO2LinNSCDs | O2-Konzentration im Abgas nach Hauptkatalysator | 12 | 22,2C | - | - |
| Exh_rO2LinNoCat2Ds | 0x4473 | STAT_Exh_rO2LinNoCat2Ds_WERT | unsigned int | - | - | - | 0.000100 | - | -3.267800 | Exh_rO2LinNoCat2Ds | O2-Konzentration im Abgas nach Sekundärkatalysator | 12 | 22,2C | - | - |
| Exh_stAftRunRlsPTrbnUs_mp | 0x44E1 | STAT_Exh_stAftRunRlsPTrbnUs_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stAftRunRlsPTrbnUs_mp | Status Freigabe-Delay im Nachlauf der Plausibilisierungen | 12 | 22,2C | - | - |
| Exh_stDynNplPTrbnUs_mp | 0x44DB | STAT_Exh_stDynNplPTrbnUs_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stDynNplPTrbnUs_mp | Exh_stDynNplPTrbnUs_mp | 12 | 22,2C | - | - |
| Exh_stLamLeanNSCDs | 0x4476 | STAT_Exh_stLamLeanNSCDs_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stLamLeanNSCDs | Lambdasignal aus NOx-Sensor nach dem NOx-Speicherkatalysator | 12 | 22,2C | - | - |
| Exh_stLamLeanNoCat2Ds | 0x4475 | STAT_Exh_stLamLeanNoCat2Ds_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stLamLeanNoCat2Ds | Lambdasignal aus NOx-Sensor nach dem NOx-Speicherkatalysator | 12 | 22,2C | - | - |
| Exh_stNOxNSCDs | 0x4478 | STAT_Exh_stNOxNSCDs_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stNOxNSCDs | NOx-Statussignal nach NOx-Speicherkatalysator | 12 | 22,2C | - | - |
| Exh_stNOxNoCat2Ds | 0x4477 | STAT_Exh_stNOxNoCat2Ds_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stNOxNoCat2Ds | Status des NOx-Signals des Sekundär-NOx-Nachsensors | 12 | 22,2C | - | - |
| Exh_stNOxSensDiaEnaNSCDs | 0x447A | STAT_Exh_stNOxSensDiaEnaNSCDs_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stNOxSensDiaEnaNSCDs | Diagnosestatus des Nach-NOx-Sensors | 12 | 22,2C | - | - |
| Exh_stNOxSensDiaEnaNoCat2Ds | 0x4479 | STAT_Exh_stNOxSensDiaEnaNoCat2Ds_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stNOxSensDiaEnaNoCat2Ds | Diagnosestatus des Nach-NOx-Sensors | 12 | 22,2C | - | - |
| Exh_stOffLrnRlsPTrbnUs_mp | 0x44E0 | STAT_Exh_stOffLrnRlsPTrbnUs_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stOffLrnRlsPTrbnUs_mp | Status Freigabe der Plausibilisierung mit Ladedruck und Offsetlernen | 12 | 22,2C | - | - |
| Exh_stPlsTstRlsPTrbnUs_mp | 0x44DF | STAT_Exh_stPlsTstRlsPTrbnUs_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Exh_stPlsTstRlsPTrbnUs_mp | Status Freigabe der Plausibilisierung mit Umgebungsdruck | 12 | 22,2C | - | - |
| Exh_tAdapTPFltUs | 0x4510 | STAT_Exh_tAdapTPFltUs_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | Exh_tAdapTPFltUs | angepasste Temperatur vor Partikelfilter | 12 | 22,2C | - | - |
| ITAVO | 0x44F2 | STAT_ABGASTEMPERATUR_VOR_KATALYSATOR_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | Exh_tOxiCatUs | Abgastemperatur vor Katalysator - korrigierter Wert | 12 | 22,2C | - | - |
| ITAVP1 | 0x44EF | STAT_ABGASTEMPERATUR_VOR_PARTIKELFILTER_1_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | Exh_tPFltUs | Abgastemperatur vor Partikelfilter - korrigierter Wert | 12 | 22,2C | - | - |
| Exh_tSensTOxiCatUs | 0x4500 | STAT_Exh_tSensTOxiCatUs_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | Exh_tSensTOxiCatUs | Abgastemperatur vor Katalysator | 12 | 22,2C | - | - |
| Exh_tSensTPFltUs | 0x4502 | STAT_Exh_tSensTPFltUs_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | Exh_tSensTPFltUs | Abgastemperatur vor Partikelfilter | 12 | 22,2C | - | - |
| Exh_tSim1Fld_mp | 0x4467 | STAT_Exh_tSim1Fld_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | Exh_tSim1Fld_mp | simulierte Temperatur des ersten Sensors | 12 | 22,2C | - | - |
| Exh_tSim2Fld_mp | 0x4468 | STAT_Exh_tSim2Fld_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | Exh_tSim2Fld_mp | simulierte Temperatur des zweiten Sensors | 12 | 22,2C | - | - |
| Exh_tSim3Fld_mp | 0x4469 | STAT_Exh_tSim3Fld_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | Exh_tSim3Fld_mp | simulierte Temperatur des dritten Sensors | 12 | 22,2C | - | - |
| Exh_tiState2NSCDs_mp | 0x447B | STAT_Exh_tiState2NSCDs_mp_WERT | unsigned int | - | s | - | 0.010000 | - | 0.000000 | Exh_tiState2NSCDs_mp | Timer, der eine 30%-ige Änderung in der NOx-Konzentration darstellt | 12 | 22,2C | - | - |
| Exh_tiState3NSCDs_mp | 0x447C | STAT_Exh_tiState3NSCDs_mp_WERT | unsigned int | - | s | - | 0.010000 | - | 0.000000 | Exh_tiState3NSCDs_mp | Timer, der eine 60%-ige Änderung in der NOx-Konzentration darstellt | 12 | 22,2C | - | - |
| Exh_uRawPPFltDiff | 0x44EE | STAT_Exh_uRawPPFltDiff_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Exh_uRawPPFltDiff | Rohspannungswert des pDiff-Sensors (aus dem ADC) | 12 | 22,2C | - | - |
| RUPVP | 0x44F0 | STAT_ABGASDRUCK_VOR_PARTIKELFILTER_SPANNUNG_ROH_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Exh_uRawPPFltUs | Spannungsrohwert - Abgasdruck vor Partikelfilter | 12 | 22,2C | - | - |
| Exh_uRawPTrbnUs | 0x44EA | STAT_Exh_uRawPTrbnUs_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Exh_uRawPTrbnUs | Rohspannungswert für Druck vor Verdichter (aus dem ADC) | 12 | 22,2C | - | - |
| Exh_uRawTOxiCatUs | 0x44F3 | STAT_Exh_uRawTOxiCatUs_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Exh_uRawTOxiCatUs | Spannungsrohwert - Abgasdruck vor Katalysator | 12 | 22,2C | - | - |
| RUTVP | 0x44F1 | STAT_ABGASTEMPERATUR_VOR_PARTIKELFILTER_SPANNUNG_ROH_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | Exh_uRawTPFltUs | Spannungsrohwert - Abgastemperatur vor Partikelfilter | 12 | 22,2C | - | - |
| FBC_qDvtCylPhys_0 | 0x5591 | STAT_FBC_qDvtCylPhys0_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | FBC_qDvtCylPhys_0 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 1 (in geometrischer Reihenfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCylPhys_1 | 0x5592 | STAT_FBC_qDvtCylPhys1_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | FBC_qDvtCylPhys_1 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 2 (in geometrischer Reihenfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCylPhys_2 | 0x5593 | STAT_FBC_qDvtCylPhys2_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | FBC_qDvtCylPhys_2 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 3 (in geometrischer Reihenfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCylPhys_3 | 0x5594 | STAT_FBC_qDvtCylPhys3_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | FBC_qDvtCylPhys_3 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 4 (in geometrischer Reihenfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCylPhys_4 | 0x5595 | STAT_FBC_qDvtCylPhys4_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | FBC_qDvtCylPhys_4 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 5 (in geometrischer Reihenfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCylPhys_5 | 0x5596 | STAT_FBC_qDvtCylPhys5_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | FBC_qDvtCylPhys_5 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 6 (in geometrischer Reihenfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCyl_0 | 0x5598 | STAT_FBC_qDvtCyl0_WERT | unsigned int | - | mg/hub | - | 0.001526 | - | -50.000000 | FBC_qDvtCyl_0 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 1 (in Zündfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCyl_1 | 0x5599 | STAT_FBC_qDvtCyl1_WERT | unsigned int | - | mg/hub | - | 0.001526 | - | -50.000000 | FBC_qDvtCyl_1 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 2 (in Zündfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCyl_2 | 0x559A | STAT_FBC_qDvtCyl2_WERT | unsigned int | - | mg/hub | - | 0.001526 | - | -50.000000 | FBC_qDvtCyl_2 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 3 (in Zündfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCyl_3 | 0x559B | STAT_FBC_qDvtCyl3_WERT | unsigned int | - | mg/hub | - | 0.001526 | - | -50.000000 | FBC_qDvtCyl_3 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 4 (in Zündfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCyl_4 | 0x559C | STAT_FBC_qDvtCyl4_WERT | unsigned int | - | mg/hub | - | 0.001526 | - | -50.000000 | FBC_qDvtCyl_4 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 5 (in Zündfolge) | 12 | 22,2C | - | - |
| FBC_qDvtCyl_5 | 0x559D | STAT_FBC_qDvtCyl5_WERT | unsigned int | - | mg/hub | - | 0.001526 | - | -50.000000 | FBC_qDvtCyl_5 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 6 (in Zündfolge) | 12 | 22,2C | - | - |
| IFMATIFO | 0x55B0 | STAT_MMA_FEHLERMODELL_BETRIEBSZEIT_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | FMO_ctLrnEvt_mp | Anzahl Lernereignisse seit dem letzten Rücksetzen des Lernkennfeldes | 12 | 22,2C | - | - |
| FMO_qEmiCtlCor | 0x55A5 | STAT_FMO_qEmiCtlCor_WERT | unsigned int | - | mg/Hub | - | 0.010000 | - | 0.000000 | FMO_qEmiCtlCor | Korrekturmenge der FMO für abgasrelevante Regelkreise | 12 | 22,2C | - | - |
| FMO_qMapOut_mp | 0x55A6 | STAT_FMO_qMapOut_mp_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapOut_mp | Einspritzmenge aus Lernkennfeld für aktuellen Betriebspunkt | 12 | 22,2C | - | - |
| IFMA00 | 0x5601 | STAT_MENGENMITTELWERTADAPTION_ROW0_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_0 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA01 | 0x5602 | STAT_MENGENMITTELWERTADAPTION_ROW0_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_1 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA02 | 0x5603 | STAT_MENGENMITTELWERTADAPTION_ROW0_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_2 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA03 | 0x5604 | STAT_MENGENMITTELWERTADAPTION_ROW0_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_3 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA04 | 0x5605 | STAT_MENGENMITTELWERTADAPTION_ROW0_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_4 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA05 | 0x5606 | STAT_MENGENMITTELWERTADAPTION_ROW0_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_5 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA06 | 0x5607 | STAT_MENGENMITTELWERTADAPTION_ROW0_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_6 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA07 | 0x5608 | STAT_MENGENMITTELWERTADAPTION_ROW0_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt0NPnt_mp_7 | Kennfeldwerte für erste Mengenstützstelle (erste Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA10 | 0x560B | STAT_MENGENMITTELWERTADAPTION_ROW1_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_0 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA11 | 0x560C | STAT_MENGENMITTELWERTADAPTION_ROW1_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_1 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA12 | 0x560D | STAT_MENGENMITTELWERTADAPTION_ROW1_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_2 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA13 | 0x560E | STAT_MENGENMITTELWERTADAPTION_ROW1_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_3 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA14 | 0x560F | STAT_MENGENMITTELWERTADAPTION_ROW1_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_4 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA15 | 0x5610 | STAT_MENGENMITTELWERTADAPTION_ROW1_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_5 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA16 | 0x5611 | STAT_MENGENMITTELWERTADAPTION_ROW1_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_6 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA17 | 0x5612 | STAT_MENGENMITTELWERTADAPTION_ROW1_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt1NPnt_mp_7 | Kennfeldwerte für zweite Mengenstützstelle (zweite Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA20 | 0x5615 | STAT_MENGENMITTELWERTADAPTION_ROW2_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_0 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA21 | 0x5616 | STAT_MENGENMITTELWERTADAPTION_ROW2_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_1 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA22 | 0x5617 | STAT_MENGENMITTELWERTADAPTION_ROW2_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_2 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA23 | 0x5618 | STAT_MENGENMITTELWERTADAPTION_ROW2_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_3 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA24 | 0x5619 | STAT_MENGENMITTELWERTADAPTION_ROW2_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_4 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA25 | 0x561A | STAT_MENGENMITTELWERTADAPTION_ROW2_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_5 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA26 | 0x561B | STAT_MENGENMITTELWERTADAPTION_ROW2_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_6 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA27 | 0x561C | STAT_MENGENMITTELWERTADAPTION_ROW2_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt2NPnt_mp_7 | Kennfeldwerte für dritte Mengenstützstelle (dritte Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA30 | 0x561F | STAT_MENGENMITTELWERTADAPTION_ROW3_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_0 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA31 | 0x5620 | STAT_MENGENMITTELWERTADAPTION_ROW3_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_1 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA32 | 0x5621 | STAT_MENGENMITTELWERTADAPTION_ROW3_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_2 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA33 | 0x5622 | STAT_MENGENMITTELWERTADAPTION_ROW3_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_3 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA34 | 0x5623 | STAT_MENGENMITTELWERTADAPTION_ROW3_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_4 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA35 | 0x5624 | STAT_MENGENMITTELWERTADAPTION_ROW3_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_5 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA36 | 0x5625 | STAT_MENGENMITTELWERTADAPTION_ROW3_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_6 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA37 | 0x5626 | STAT_MENGENMITTELWERTADAPTION_ROW3_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt3NPnt_mp_7 | Kennfeldwerte für vierte Mengenstützstelle (vierte Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA40 | 0x5629 | STAT_MENGENMITTELWERTADAPTION_ROW4_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_0 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA41 | 0x562A | STAT_MENGENMITTELWERTADAPTION_ROW4_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_1 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA42 | 0x562B | STAT_MENGENMITTELWERTADAPTION_ROW4_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_2 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA43 | 0x562C | STAT_MENGENMITTELWERTADAPTION_ROW4_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_3 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA44 | 0x562D | STAT_MENGENMITTELWERTADAPTION_ROW4_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_4 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA45 | 0x562E | STAT_MENGENMITTELWERTADAPTION_ROW4_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_5 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA46 | 0x562F | STAT_MENGENMITTELWERTADAPTION_ROW4_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_6 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA47 | 0x5630 | STAT_MENGENMITTELWERTADAPTION_ROW4_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt4NPnt_mp_7 | Kennfeldwerte für fünfte Mengenstützstelle (fünfte Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA50 | 0x5633 | STAT_MENGENMITTELWERTADAPTION_ROW5_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_0 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA51 | 0x5634 | STAT_MENGENMITTELWERTADAPTION_ROW5_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_1 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA52 | 0x5635 | STAT_MENGENMITTELWERTADAPTION_ROW5_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_2 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA53 | 0x5636 | STAT_MENGENMITTELWERTADAPTION_ROW5_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_3 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA54 | 0x5637 | STAT_MENGENMITTELWERTADAPTION_ROW5_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_4 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA55 | 0x5638 | STAT_MENGENMITTELWERTADAPTION_ROW5_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_5 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA56 | 0x5639 | STAT_MENGENMITTELWERTADAPTION_ROW5_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_6 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA57 | 0x563A | STAT_MENGENMITTELWERTADAPTION_ROW5_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt5NPnt_mp_7 | Kennfeldwerte für sechste Mengenstützstelle (sechste Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA60 | 0x563D | STAT_MENGENMITTELWERTADAPTION_ROW6_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_0 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA61 | 0x563E | STAT_MENGENMITTELWERTADAPTION_ROW6_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_1 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA62 | 0x563F | STAT_MENGENMITTELWERTADAPTION_ROW6_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_2 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA63 | 0x5640 | STAT_MENGENMITTELWERTADAPTION_ROW6_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_3 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA64 | 0x5641 | STAT_MENGENMITTELWERTADAPTION_ROW6_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_4 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA65 | 0x5642 | STAT_MENGENMITTELWERTADAPTION_ROW6_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_5 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA66 | 0x5643 | STAT_MENGENMITTELWERTADAPTION_ROW6_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_6 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA67 | 0x5644 | STAT_MENGENMITTELWERTADAPTION_ROW6_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt6NPnt_mp_7 | Kennfeldwerte für siebte Mengenstützstelle (siebte Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| IFMA70 | 0x5647 | STAT_MENGENMITTELWERTADAPTION_ROW7_0_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_0 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 0 | 12 | 22,2C | - | - |
| IFMA71 | 0x5648 | STAT_MENGENMITTELWERTADAPTION_ROW7_1_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_1 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 1 | 12 | 22,2C | - | - |
| IFMA72 | 0x5649 | STAT_MENGENMITTELWERTADAPTION_ROW7_2_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_2 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 2 | 12 | 22,2C | - | - |
| IFMA73 | 0x564A | STAT_MENGENMITTELWERTADAPTION_ROW7_3_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_3 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 3 | 12 | 22,2C | - | - |
| IFMA74 | 0x564B | STAT_MENGENMITTELWERTADAPTION_ROW7_4_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_4 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 4 | 12 | 22,2C | - | - |
| IFMA75 | 0x564C | STAT_MENGENMITTELWERTADAPTION_ROW7_5_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_5 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 5 | 12 | 22,2C | - | - |
| IFMA76 | 0x564D | STAT_MENGENMITTELWERTADAPTION_ROW7_6_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_6 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 6 | 12 | 22,2C | - | - |
| IFMA77 | 0x564E | STAT_MENGENMITTELWERTADAPTION_ROW7_7_WERT | unsigned int | - | mg/hub | - | 0.010000 | - | -327.670000 | FMO_qMapQntPnt7NPnt_mp_7 | Kennfeldwerte für achte Mengenstützstelle (achte Zeile im Korrekturkennfeld) 7 | 12 | 22,2C | - | - |
| FMO_stSwtOff | 0x55AF | STAT_FMO_stSwtOff_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | FMO_stSwtOff | Abschaltzustand der Adaption | 12 | 22,2C | - | - |
| Fan_rPs | 0x4A98 | STAT_Fan_rPs_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | Fan_rPs | Ausgangstastverhältnis - Elektrolüfter | 12 | 22,2C | - | - |
| FlFltDsP_p | 0x43B0 | STAT_FlFltDsP_p_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | FlFltDsP_p | Kraftstoffvorförderdruck - gefiltert | 12 | 22,2C | - | - |
| FlFltDsP_pSens | 0x43AE | STAT_FlFltDsP_pSens_WERT | unsigned int | - | hPa | - | 0.100000 | - | 0.000000 | FlFltDsP_pSens | Kraftstoffvorförderdruck - Sensorwert | 12 | 22,2C | - | - |
| FlFltDsP_uRaw | 0x43AF | STAT_FlFltDsP_uRaw_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | FlFltDsP_uRaw | Kraftstoffvorförderdruck - Spannungsrohwert vom Sensor | 12 | 22,2C | - | - |
| FlFltHt_stPs | 0x43CC | STAT_FlFltHt_stPs_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | FlFltHt_stPs | Status der Dieselfilterheizung | 12 | 22,2C | - | - |
| FlFlt_stRaw | 0x4390 | STAT_FlFlt_stRaw_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | FlFlt_stRaw | Status - Dieselfilterheizung und Vorförderdruck (unentprellt) | 12 | 22,2C | - | - |
| FlSys_qFlTotInj | 0x43F8 | STAT_FlSys_qFlTotInj_WERT | unsigned int | - | l | - | 1.000000 | - | 0.000000 | FlSys_qFlTotInj | Gesamtdurchflußmenge durch den Injektor | 12 | 22,2C | - | - |
| FlSys_volTotFlCons | 0x55A0 | STAT_FlSys_volTotFlCons_WERT | unsigned long | - | l | - | 0.500000 | - | 0.000000 | FlSys_volTotFlCons | Aufsummierte Kraftstoffmenge | 12 | 22,2C | - | - |
| IVABS | 0x4458 | STAT_KRAFTSTOFFVERBRAUCH_ABSOLUT_WERT | unsigned int | - | l | - | 0.001907 | - | 0.000000 | FuelLvl_vol | Kraftstoffvolumen | 12 | 22,2C | - | - |
| ITKRS | 0x4459 | STAT_KRAFTSTOFFTEMPERATUR_WERT | unsigned int | - | degC | - | 0.010000 | - | -50.000000 | FuelT_t | Kraftstofftemperatur | 12 | 22,2C | - | - |
| ISKRS | 0x445A | STAT_KRAFTSTOFFTEMPERATUR_SPANNUNG_ROH_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | FuelT_uRaw | Spannungsrohwert - Kraftstofftemperaturfühler | 12 | 22,2C | - | - |
| Gangi | 0x4ACA | STAT_Gangi_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Gangi | Aktueller Gang intern | 12 | 22,2C | - | - |
| GbxNPos_rRawNPos | 0x4ACE | STAT_GbxNPos_rRawNPos_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | GbxNPos_rRawNPos | GbxNPos_rRawNPos | 12 | 22,2C | - | - |
| GbxNPos_tiPer_mp | 0x4ACF | STAT_GbxNPos_tiPer_mp_WERT | unsigned long | - | us | - | 0.050000 | - | 0.000000 | GbxNPos_tiPer_mp | GbxNPos_tiPer_mp | 12 | 22,2C | - | - |
| Gbx_ctGbxNPosUnPls | 0x5902 | STAT_Gbx_ctGbxNPosUnPls_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Gbx_ctGbxNPosUnPls | Gesamtfehlerzähler der Nullgangsensor-Plausibilisierung | 12 | 22,2C | - | - |
| Gbx_dNPos | 0x4ACD | STAT_Gbx_dNPos_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | Gbx_dNPos | Gbx_dNPos | 12 | 22,2C | - | - |
| IGABE | 0x4ACB | STAT_BERECHNETER_GANG_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Gbx_numGear | eingelegter Gang | 12 | 22,2C | - | - |
| Gen_awnumm | 0x4787 | STAT_Gen_awnumm_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Gen_awnumm | Generatorkennfeldnummer | 12 | 22,2C | - | - |
| GlbDa_lTotDst | 0x4BCC | STAT_GlbDa_lTotDst_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | GlbDa_lTotDst | zurückgelegte Gesamtstrecke seit erstem Start | 12 | 22,2C | - | - |
| GlwCtl_stGlw | 0x56D2 | STAT_GlwCtl_stGlw_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | GlwCtl_stGlw | Glühzustand (aus Zustandsautomat) | 12 | 22,2C | - | - |
| GlwEcu_lSum_mp | 0x56E1 | STAT_GlwEcu_lSum_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_lSum_mp | Kilometerzähler für verbautes Glühsteuergerät | 12 | 22,2C | - | - |
| IAGLU | 0x56DD | STAT_GLUEHSYSTEM_ANSTEUERUNG_WERT | unsigned int | - | W | - | 1.000000 | - | 0.000000 | GlwEcu_pwrGlow | Leistungsaufnahme vom Glühsteuergerät | 12 | 22,2C | - | - |
| GlwEcu_stGPCMConfig_mp | 0x56DA | STAT_GlwEcu_stGPCMConfig_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stGPCMConfig_mp | Status der abgespeicherten Konfiguration des Glühsteuergeräts | 12 | 22,2C | - | - |
| GlwEcu_stGPCMDiag | 0x56DB | STAT_GlwEcu_stGPCMDiag_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stGPCMDiag | Status der Diagnose vom Glühsteuergerät | 12 | 22,2C | - | - |
| GlwEcu_stGPType_mp | 0x56DC | STAT_GlwEcu_stGPType_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stGPType_mp | Glühkerzentyp | 12 | 22,2C | - | - |
| GlwEcu_stHSSOpen | 0x56D8 | STAT_GlwEcu_stHSSOpen_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stHSSOpen | Status - Halbleiterschaltstufe unterbrochen (bitmaskiert) | 12 | 22,2C | - | - |
| GlwEcu_stHSSShort | 0x56D9 | STAT_GlwEcu_stHSSShort_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stHSSShort | Status - Halbleiterschaltstufe permanent angesteuert (bitmaskiert) | 12 | 22,2C | - | - |
| GlwEcu_stHighresCold | 0x56D4 | STAT_GlwEcu_stHighresCold_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stHighresCold | Status - Kaltwiderstand der Glühkerzen zu hoch (bitmaskiert) | 12 | 22,2C | - | - |
| GlwEcu_stHighresHot | 0x56D5 | STAT_GlwEcu_stHighresHot_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stHighresHot | Status - Heißwiderstand der Glühkerzen zu hoch (bitmaskiert) | 12 | 22,2C | - | - |
| GlwEcu_stLowresCold | 0x56D6 | STAT_GlwEcu_stLowresCold_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stLowresCold | Status - Kaltwiderstand der Glühkerzen zu niedrig (bitmaskiert) | 12 | 22,2C | - | - |
| GlwEcu_stLowresHot | 0x56D7 | STAT_GlwEcu_stLowresHot_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwEcu_stLowresHot | Status - Heißwiderstand der Glühkerzen zu niedrig (bitmaskiert) | 12 | 22,2C | - | - |
| GlwEcu_tGlwPlg_mp | 0x56DF | STAT_GlwEcu_tGlwPlg_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | GlwEcu_tGlwPlg_mp | aktuelle Glühtemperatur | 12 | 22,2C | - | - |
| IAGLL | 0x56D3 | STAT_GLUEHANZEIGE_ANSTEUERUNG_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | GlwLmp_st | Glühlampenansteuerung | 12 | 22,2C | - | - |
| ISC_nSetPLo_0 | 0x49D0 | STAT_ISC_nSetPLo0_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | ISC_nSetPLo_0 | Untergrenze Drehzahlintervall (Solldrehzahl) des ISC für Zylinder 1 | 12 | 22,2C | - | - |
| ISC_nSetPLo_1 | 0x49D1 | STAT_ISC_nSetPLo1_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | ISC_nSetPLo_1 | Untergrenze Drehzahlintervall (Solldrehzahl) des ISC für Zylinder 2 | 12 | 22,2C | - | - |
| ISC_nSetPLo_2 | 0x49D2 | STAT_ISC_nSetPLo2_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | ISC_nSetPLo_2 | Untergrenze Drehzahlintervall (Solldrehzahl) des ISC für Zylinder 3 | 12 | 22,2C | - | - |
| ISC_nSetPLo_3 | 0x49D3 | STAT_ISC_nSetPLo3_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | ISC_nSetPLo_3 | Untergrenze Drehzahlintervall (Solldrehzahl) des ISC für Zylinder 4 | 12 | 22,2C | - | - |
| ISC_nSetPLo_4 | 0x49D4 | STAT_ISC_nSetPLo4_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | ISC_nSetPLo_4 | Untergrenze Drehzahlintervall (Solldrehzahl) des ISC für Zylinder 5 | 12 | 22,2C | - | - |
| ISC_nSetPLo_5 | 0x49D5 | STAT_ISC_nSetPLo5_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | ISC_nSetPLo_5 | Untergrenze Drehzahlintervall (Solldrehzahl) des ISC für Zylinder 6 | 12 | 22,2C | - | - |
| ISC_st_0 | 0x496E | STAT_ISC_st0_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | ISC_st_0 | Statusinformation des ISC und seiner Clients für Zylinder 1 | 12 | 22,2C | - | - |
| ISC_st_1 | 0x496F | STAT_ISC_st1_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | ISC_st_1 | Statusinformation des ISC und seiner Clients für Zylinder 2 | 12 | 22,2C | - | - |
| ISC_st_2 | 0x4970 | STAT_ISC_st2_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | ISC_st_2 | Statusinformation des ISC und seiner Clients für Zylinder 3 | 12 | 22,2C | - | - |
| ISC_st_3 | 0x4971 | STAT_ISC_st3_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | ISC_st_3 | Statusinformation des ISC und seiner Clients für Zylinder 4 | 12 | 22,2C | - | - |
| ISC_st_4 | 0x4972 | STAT_ISC_st4_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | ISC_st_4 | Statusinformation des ISC und seiner Clients für Zylinder 5 | 12 | 22,2C | - | - |
| ISC_st_5 | 0x4973 | STAT_ISC_st5_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | ISC_st_5 | Statusinformation des ISC und seiner Clients für Zylinder 6 | 12 | 22,2C | - | - |
| ISC_trq | 0x496D | STAT_ISC_trq_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | ISC_trq | Stellgröße des ISC-Moments | 12 | 22,2C | - | - |
| IVActr_uChrgUp_0 | 0x49FC | STAT_IVActr_uChrgUp0_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uChrgUp_0 | Aktorspannung nach dem Laden 0 | 12 | 22,2C | - | - |
| IVActr_uChrgUp_1 | 0x49FD | STAT_IVActr_uChrgUp1_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uChrgUp_1 | Aktorspannung nach dem Laden 1 | 12 | 22,2C | - | - |
| IVActr_uChrgUp_2 | 0x49FE | STAT_IVActr_uChrgUp2_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uChrgUp_2 | Aktorspannung nach dem Laden 2 | 12 | 22,2C | - | - |
| IVActr_uChrgUp_3 | 0x49FF | STAT_IVActr_uChrgUp3_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uChrgUp_3 | Aktorspannung nach dem Laden 3 | 12 | 22,2C | - | - |
| IVActr_uChrgUp_4 | 0x4A00 | STAT_IVActr_uChrgUp4_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uChrgUp_4 | Aktorspannung nach dem Laden 4 | 12 | 22,2C | - | - |
| IVActr_uChrgUp_5 | 0x4A01 | STAT_IVActr_uChrgUp5_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uChrgUp_5 | Aktorspannung nach dem Laden 5 | 12 | 22,2C | - | - |
| IVActr_uUp_0 | 0x4A06 | STAT_IVActr_uUp0_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uUp_0 | Aktorspannung Up-Niveau 0 | 12 | 22,2C | - | - |
| IVActr_uUp_1 | 0x4A07 | STAT_IVActr_uUp1_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uUp_1 | Aktorspannung Up-Niveau 1 | 12 | 22,2C | - | - |
| IVActr_uUp_2 | 0x4A08 | STAT_IVActr_uUp2_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uUp_2 | Aktorspannung Up-Niveau 2 | 12 | 22,2C | - | - |
| IVActr_uUp_3 | 0x4A09 | STAT_IVActr_uUp3_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uUp_3 | Aktorspannung Up-Niveau 3 | 12 | 22,2C | - | - |
| IVActr_uUp_4 | 0x4A0A | STAT_IVActr_uUp4_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uUp_4 | Aktorspannung Up-Niveau 4 | 12 | 22,2C | - | - |
| IVActr_uUp_5 | 0x4A0B | STAT_IVActr_uUp5_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVActr_uUp_5 | Aktorspannung Up-Niveau 5 | 12 | 22,2C | - | - |
| IVAdj_clsIVA_0 | 0x4A36 | STAT_IVAdj_clsIVA0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_clsIVA_0 | InjektorSpannungsAbgeich-Klasse des Piezo-Aktors 0 | 12 | 22,2C | - | - |
| IVAdj_clsIVA_1 | 0x4A37 | STAT_IVAdj_clsIVA1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_clsIVA_1 | InjektorSpannungsAbgeich-Klasse des Piezo-Aktors 1 | 12 | 22,2C | - | - |
| IVAdj_clsIVA_2 | 0x4A38 | STAT_IVAdj_clsIVA2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_clsIVA_2 | InjektorSpannungsAbgeich-Klasse des Piezo-Aktors 2 | 12 | 22,2C | - | - |
| IVAdj_clsIVA_3 | 0x4A39 | STAT_IVAdj_clsIVA3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_clsIVA_3 | InjektorSpannungsAbgeich-Klasse des Piezo-Aktors 3 | 12 | 22,2C | - | - |
| IVAdj_clsIVA_4 | 0x4A3A | STAT_IVAdj_clsIVA4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_clsIVA_4 | InjektorSpannungsAbgeich-Klasse des Piezo-Aktors 4 | 12 | 22,2C | - | - |
| IVAdj_clsIVA_5 | 0x4A3B | STAT_IVAdj_clsIVA5_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_clsIVA_5 | InjektorSpannungsAbgeich-Klasse des Piezo-Aktors 5 | 12 | 22,2C | - | - |
| IVAdj_ctImaProg_mp | 0x4A10 | STAT_IVAdj_ctImaProg_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVAdj_ctImaProg_mp | Counter für die Injektorprogrammierung zum Rücksetzen der Injektormenge | 12 | 22,2C | - | - |
| IVAdj_facNVCEepWrI_mp_0 | 0x4A74 | STAT_IVAdj_facNVCEepWrI_mp0_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCEepWrI_mp_0 | Im EEPROM gespeicherter Wert des NVC-I-Reglers 0 | 12 | 22,2C | - | - |
| IVAdj_facNVCEepWrI_mp_1 | 0x4A75 | STAT_IVAdj_facNVCEepWrI_mp1_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCEepWrI_mp_1 | Im EEPROM gespeicherter Wert des NVC-I-Reglers 1 | 12 | 22,2C | - | - |
| IVAdj_facNVCEepWrI_mp_2 | 0x4A76 | STAT_IVAdj_facNVCEepWrI_mp2_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCEepWrI_mp_2 | Im EEPROM gespeicherter Wert des NVC-I-Reglers 2 | 12 | 22,2C | - | - |
| IVAdj_facNVCEepWrI_mp_3 | 0x4A77 | STAT_IVAdj_facNVCEepWrI_mp3_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCEepWrI_mp_3 | Im EEPROM gespeicherter Wert des NVC-I-Reglers 3 | 12 | 22,2C | - | - |
| IVAdj_facNVCEepWrI_mp_4 | 0x4A78 | STAT_IVAdj_facNVCEepWrI_mp4_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCEepWrI_mp_4 | Im EEPROM gespeicherter Wert des NVC-I-Reglers 4 | 12 | 22,2C | - | - |
| IVAdj_facNVCEepWrI_mp_5 | 0x4A79 | STAT_IVAdj_facNVCEepWrI_mp5_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCEepWrI_mp_5 | Im EEPROM gespeicherter Wert des NVC-I-Reglers 5 | 12 | 22,2C | - | - |
| IVAdj_facNVCInitI_mp_0 | 0x4A7C | STAT_IVAdj_facNVCInitI_mp0_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCInitI_mp_0 | Initialisierungswert des NVC-I-Reglers 0 | 12 | 22,2C | - | - |
| IVAdj_facNVCInitI_mp_1 | 0x4A7D | STAT_IVAdj_facNVCInitI_mp1_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCInitI_mp_1 | Initialisierungswert des NVC-I-Reglers 1 | 12 | 22,2C | - | - |
| IVAdj_facNVCInitI_mp_2 | 0x4A7E | STAT_IVAdj_facNVCInitI_mp2_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCInitI_mp_2 | Initialisierungswert des NVC-I-Reglers 2 | 12 | 22,2C | - | - |
| IVAdj_facNVCInitI_mp_3 | 0x4A7F | STAT_IVAdj_facNVCInitI_mp3_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCInitI_mp_3 | Initialisierungswert des NVC-I-Reglers 3 | 12 | 22,2C | - | - |
| IVAdj_facNVCInitI_mp_4 | 0x4A80 | STAT_IVAdj_facNVCInitI_mp4_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCInitI_mp_4 | Initialisierungswert des NVC-I-Reglers 4 | 12 | 22,2C | - | - |
| IVAdj_facNVCInitI_mp_5 | 0x4A81 | STAT_IVAdj_facNVCInitI_mp5_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVCInitI_mp_5 | Initialisierungswert des NVC-I-Reglers 5 | 12 | 22,2C | - | - |
| IVAdj_facNVC_0 | 0x4A3E | STAT_IVAdj_facNVC0_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVC_0 | NVC Korrekturfaktor 0 | 12 | 22,2C | - | - |
| IVAdj_facNVC_1 | 0x4A3F | STAT_IVAdj_facNVC1_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVC_1 | NVC Korrekturfaktor 1 | 12 | 22,2C | - | - |
| IVAdj_facNVC_2 | 0x4A40 | STAT_IVAdj_facNVC2_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVC_2 | NVC Korrekturfaktor 2 | 12 | 22,2C | - | - |
| IVAdj_facNVC_3 | 0x4A41 | STAT_IVAdj_facNVC3_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVC_3 | NVC Korrekturfaktor 3 | 12 | 22,2C | - | - |
| IVAdj_facNVC_4 | 0x4A42 | STAT_IVAdj_facNVC4_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVC_4 | NVC Korrekturfaktor 4 | 12 | 22,2C | - | - |
| IVAdj_facNVC_5 | 0x4A43 | STAT_IVAdj_facNVC5_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | IVAdj_facNVC_5 | NVC Korrekturfaktor 5 | 12 | 22,2C | - | - |
| IVAdj_lTotDst_mp | 0x4A35 | STAT_IVAdj_lTotDst_mp_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | IVAdj_lTotDst_mp | IVAdj_lTotDst_mp | 12 | 22,2C | - | - |
| IVCtl_iChrg_0 | 0x4A24 | STAT_IVCtl_iChrg0_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | IVCtl_iChrg_0 | Ladestrom-Grenze 0 | 12 | 22,2C | - | - |
| IVCtl_iChrg_1 | 0x4A25 | STAT_IVCtl_iChrg1_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | IVCtl_iChrg_1 | Ladestrom-Grenze 1 | 12 | 22,2C | - | - |
| IVCtl_iChrg_2 | 0x4A26 | STAT_IVCtl_iChrg2_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | IVCtl_iChrg_2 | Ladestrom-Grenze 2 | 12 | 22,2C | - | - |
| IVCtl_iChrg_3 | 0x4A27 | STAT_IVCtl_iChrg3_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | IVCtl_iChrg_3 | Ladestrom-Grenze 3 | 12 | 22,2C | - | - |
| IVCtl_iChrg_4 | 0x4A28 | STAT_IVCtl_iChrg4_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | IVCtl_iChrg_4 | Ladestrom-Grenze 4 | 12 | 22,2C | - | - |
| IVCtl_iChrg_5 | 0x4A29 | STAT_IVCtl_iChrg5_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | IVCtl_iChrg_5 | Ladestrom-Grenze 5 | 12 | 22,2C | - | - |
| IVCtl_tiChrg | 0x4A21 | STAT_IVCtl_tiChrg_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | IVCtl_tiChrg | Ladezeitsollwert | 12 | 22,2C | - | - |
| IVCtl_uUp_0 | 0x4A1A | STAT_IVCtl_uUp0_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVCtl_uUp_0 | Spannungssollwert Up-Niveau 0 | 12 | 22,2C | - | - |
| IVCtl_uUp_1 | 0x4A1B | STAT_IVCtl_uUp1_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVCtl_uUp_1 | Spannungssollwert Up-Niveau 1 | 12 | 22,2C | - | - |
| IVCtl_uUp_2 | 0x4A1C | STAT_IVCtl_uUp2_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVCtl_uUp_2 | Spannungssollwert Up-Niveau 2 | 12 | 22,2C | - | - |
| IVCtl_uUp_3 | 0x4A1D | STAT_IVCtl_uUp3_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVCtl_uUp_3 | Spannungssollwert Up-Niveau 3 | 12 | 22,2C | - | - |
| IVCtl_uUp_4 | 0x4A1E | STAT_IVCtl_uUp4_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVCtl_uUp_4 | Spannungssollwert Up-Niveau 4 | 12 | 22,2C | - | - |
| IVCtl_uUp_5 | 0x4A1F | STAT_IVCtl_uUp5_WERT | unsigned int | - | V | - | 0.010000 | - | 0.000000 | IVCtl_uUp_5 | Spannungssollwert Up-Niveau 5 | 12 | 22,2C | - | - |
| IVDia_stErrClctChp_mp_0 | 0x4A56 | STAT_IVDia_stErrClctChp_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctChp_mp_0 | Chipfehler (Sammelbyte) 0 | 12 | 22,2C | - | - |
| IVDia_stErrClctComplCyl_mp_0 | 0x4A58 | STAT_IVDia_stErrClctComplCyl_mp0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctComplCyl_mp_0 | Vollständige lowlevel Fehlermeldung für CY33x vorverarbeitet pro Zylinder 0 | 12 | 22,2C | - | - |
| IVDia_stErrClctComplCyl_mp_1 | 0x4A59 | STAT_IVDia_stErrClctComplCyl_mp1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctComplCyl_mp_1 | Vollständige lowlevel Fehlermeldung für CY33x vorverarbeitet pro Zylinder 1 | 12 | 22,2C | - | - |
| IVDia_stErrClctComplCyl_mp_2 | 0x4A5A | STAT_IVDia_stErrClctComplCyl_mp2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctComplCyl_mp_2 | Vollständige lowlevel Fehlermeldung für CY33x vorverarbeitet pro Zylinder 2 | 12 | 22,2C | - | - |
| IVDia_stErrClctComplCyl_mp_3 | 0x4A5B | STAT_IVDia_stErrClctComplCyl_mp3_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctComplCyl_mp_3 | Vollständige lowlevel Fehlermeldung für CY33x vorverarbeitet pro Zylinder 3 | 12 | 22,2C | - | - |
| IVDia_stErrClctComplCyl_mp_4 | 0x4A5C | STAT_IVDia_stErrClctComplCyl_mp4_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctComplCyl_mp_4 | Vollständige lowlevel Fehlermeldung für CY33x vorverarbeitet pro Zylinder 4 | 12 | 22,2C | - | - |
| IVDia_stErrClctComplCyl_mp_5 | 0x4A5D | STAT_IVDia_stErrClctComplCyl_mp5_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctComplCyl_mp_5 | Vollständige lowlevel Fehlermeldung für CY33x vorverarbeitet pro Zylinder 5 | 12 | 22,2C | - | - |
| IVDia_stErrClctPsIcCyl_mp_0 | 0x4A5E | STAT_IVDia_stErrClctPsIcCyl_mp0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctPsIcCyl_mp_0 | Sammelfehlermesspunkt aus Diagnoseregister für CY33x 0 | 12 | 22,2C | - | - |
| IVDia_stErrClctPsIcCyl_mp_1 | 0x4A5F | STAT_IVDia_stErrClctPsIcCyl_mp1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctPsIcCyl_mp_1 | Sammelfehlermesspunkt aus Diagnoseregister für CY33x 1 | 12 | 22,2C | - | - |
| IVDia_stErrClctPsIcCyl_mp_2 | 0x4A60 | STAT_IVDia_stErrClctPsIcCyl_mp2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctPsIcCyl_mp_2 | Sammelfehlermesspunkt aus Diagnoseregister für CY33x 2 | 12 | 22,2C | - | - |
| IVDia_stErrClctPsIcCyl_mp_3 | 0x4A61 | STAT_IVDia_stErrClctPsIcCyl_mp3_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctPsIcCyl_mp_3 | Sammelfehlermesspunkt aus Diagnoseregister für CY33x 3 | 12 | 22,2C | - | - |
| IVDia_stErrClctPsIcCyl_mp_4 | 0x4A62 | STAT_IVDia_stErrClctPsIcCyl_mp4_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctPsIcCyl_mp_4 | Sammelfehlermesspunkt aus Diagnoseregister für CY33x 4 | 12 | 22,2C | - | - |
| IVDia_stErrClctPsIcCyl_mp_5 | 0x4A63 | STAT_IVDia_stErrClctPsIcCyl_mp5_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrClctPsIcCyl_mp_5 | Sammelfehlermesspunkt aus Diagnoseregister für CY33x 5 | 12 | 22,2C | - | - |
| IVDia_stErrCyl_mp_0 | 0x4A4E | STAT_IVDia_stErrCyl_mp0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrCyl_mp_0 | Zylinderspezifische Diagnoseinformation 0 | 12 | 22,2C | - | - |
| IVDia_stErrCyl_mp_1 | 0x4A4F | STAT_IVDia_stErrCyl_mp1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrCyl_mp_1 | Zylinderspezifische Diagnoseinformation 1 | 12 | 22,2C | - | - |
| IVDia_stErrCyl_mp_2 | 0x4A50 | STAT_IVDia_stErrCyl_mp2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrCyl_mp_2 | Zylinderspezifische Diagnoseinformation 2 | 12 | 22,2C | - | - |
| IVDia_stErrCyl_mp_3 | 0x4A51 | STAT_IVDia_stErrCyl_mp3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrCyl_mp_3 | Zylinderspezifische Diagnoseinformation 3 | 12 | 22,2C | - | - |
| IVDia_stErrCyl_mp_4 | 0x4A52 | STAT_IVDia_stErrCyl_mp4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrCyl_mp_4 | Zylinderspezifische Diagnoseinformation 4 | 12 | 22,2C | - | - |
| IVDia_stErrCyl_mp_5 | 0x4A53 | STAT_IVDia_stErrCyl_mp5_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVDia_stErrCyl_mp_5 | Zylinderspezifische Diagnoseinformation 5 | 12 | 22,2C | - | - |
| IVDia_stPsIcChp_0 | 0x4A64 | STAT_IVDia_stPsIcChp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | IVDia_stPsIcChp_0 | chipspezifische Diagnose-Information der SPI-Übertragung und SPI Control-Byte 0 | 12 | 22,2C | - | - |
| IVPSply_stBufErr | 0x5582 | STAT_IVPSply_stBufErr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVPSply_stBufErr | IVPSply_stBufErrE | 12 | 22,2C | - | - |
| IVPSply_stDCDCCo | 0x5583 | STAT_IVPSply_stDCDCCo_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | IVPSply_stDCDCCo | IVPSply_stDCDCCoE | 12 | 22,2C | - | - |
| INZZ1 | 0x556A | STAT_MOTORDREHZAHL_ZYLINDERSPEZIFISCH_ZYL1_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | IVPlaus_nCyl_0 | Zylinderspezifische Drehzahl für Zylinder 1 (Zündreihenfolge) | 12 | 22,2C | - | - |
| INZZ2 | 0x556B | STAT_MOTORDREHZAHL_ZYLINDERSPEZIFISCH_ZYL2_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | IVPlaus_nCyl_1 | Zylinderspezifische Drehzahl für Zylinder 2 (Zündreihenfolge) | 12 | 22,2C | - | - |
| INZZ3 | 0x556C | STAT_MOTORDREHZAHL_ZYLINDERSPEZIFISCH_ZYL3_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | IVPlaus_nCyl_2 | Zylinderspezifische Drehzahl für Zylinder 3 (Zündreihenfolge) | 12 | 22,2C | - | - |
| INZZ4 | 0x556D | STAT_MOTORDREHZAHL_ZYLINDERSPEZIFISCH_ZYL4_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | IVPlaus_nCyl_3 | Zylinderspezifische Drehzahl für Zylinder 4 (Zündreihenfolge) | 12 | 22,2C | - | - |
| INZZ5 | 0x556E | STAT_MOTORDREHZAHL_ZYLINDERSPEZIFISCH_ZYL5_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | IVPlaus_nCyl_4 | Zylinderspezifische Drehzahl für Zylinder 5 (Zündreihenfolge) | 12 | 22,2C | - | - |
| INZZ6 | 0x556F | STAT_MOTORDREHZAHL_ZYLINDERSPEZIFISCH_ZYL6_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | IVPlaus_nCyl_5 | Zylinderspezifische Drehzahl für Zylinder 6 (Zündreihenfolge) | 12 | 22,2C | - | - |
| INHDR | 0x59D4 | STAT_RUNUP_DREHZAHL_HIGH_DOWN_WERT | unsigned int | - | rpm | - | 0.500000 | - | 0.000000 | IVPlaus_nHiDwnRunUpTst | Drehzahl zu Beginn der Herablaufphase des Hochlauftests | 12 | 22,2C | - | - |
| INHUR | 0x59D5 | STAT_RUNUP_DREHZAHL_HIGH_UP_WERT | unsigned int | - | rpm | - | 0.500000 | - | 0.000000 | IVPlaus_nHiUpRunUpTst | Drehzahl am Ende der Hochlaufphase des Hochlauftests | 12 | 22,2C | - | - |
| INLDR | 0x59D6 | STAT_RUNUP_DREHZAHL_LOW_DOWN_WERT | unsigned int | - | rpm | - | 0.500000 | - | 0.000000 | IVPlaus_nLoDwnRunUpTst | Drehzahl am Ende der Herablaufphase des Hochlauftests | 12 | 22,2C | - | - |
| INLUR | 0x59D7 | STAT_RUNUP_DREHZAHL_LOW_UP_WERT | unsigned int | - | rpm | - | 0.500000 | - | 0.000000 | IVPlaus_nLoUpRunUpTst | Drehzahl zu Beginn der Hochlaufphase des Hochlauftests | 12 | 22,2C | - | - |
| IMKZ1 | 0x5570 | STAT_MENGENKORREKTUR_ZYLINDERSPEZIFISCH_ZYL1_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | IVPlaus_qFBCCyl_0 | Zylinderspezifische FBC-Ausgleichsmenge für Zylinder 1 (Zündreihenfolge) | 12 | 22,2C | - | - |
| IMKZ2 | 0x5571 | STAT_MENGENKORREKTUR_ZYLINDERSPEZIFISCH_ZYL2_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | IVPlaus_qFBCCyl_1 | Zylinderspezifische FBC-Ausgleichsmenge für Zylinder 2 (Zündreihenfolge) | 12 | 22,2C | - | - |
| IMKZ3 | 0x5572 | STAT_MENGENKORREKTUR_ZYLINDERSPEZIFISCH_ZYL3_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | IVPlaus_qFBCCyl_2 | Zylinderspezifische FBC-Ausgleichsmenge für Zylinder 3 (Zündreihenfolge) | 12 | 22,2C | - | - |
| IMKZ4 | 0x5573 | STAT_MENGENKORREKTUR_ZYLINDERSPEZIFISCH_ZYL4_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | IVPlaus_qFBCCyl_3 | Zylinderspezifische FBC-Ausgleichsmenge für Zylinder 4 (Zündreihenfolge) | 12 | 22,2C | - | - |
| IMKZ5 | 0x5574 | STAT_MENGENKORREKTUR_ZYLINDERSPEZIFISCH_ZYL5_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | IVPlaus_qFBCCyl_4 | Zylinderspezifische FBC-Ausgleichsmenge für Zylinder 5 (Zündreihenfolge) | 12 | 22,2C | - | - |
| IMKZ6 | 0x5575 | STAT_MENGENKORREKTUR_ZYLINDERSPEZIFISCH_ZYL6_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | IVPlaus_qFBCCyl_5 | Zylinderspezifische FBC-Ausgleichsmenge für Zylinder 6 (Zündreihenfolge) | 12 | 22,2C | - | - |
| ISRRU | 0x59D8 | STAT_RUNUP_STATUS_REFUSED_RUNUP | unsigned int | - | 0/1 | - | 1.000000 | - | 0.000000 | IVPlaus_stRefRunUpTst | Status bei Abbruch des Hochlauftests | 12 | 22,2C | - | - |
| ITDRU | 0x59D9 | STAT_RUNUP_ZEIT_DOWN_WERT | unsigned long | - | us | - | 0.400000 | - | 0.000000 | IVPlaus_tiDwnRunUpTst | Zeit für die Herablaufphase des Hochlauftests | 12 | 22,2C | - | - |
| ITURU | 0x59DA | STAT_RUNUP_ZEIT_UP_WERT | unsigned long | - | us | - | 0.400000 | - | 0.000000 | IVPlaus_tiUpRunUpTst | Zeit für die Hochlaufphase des Hochlauftests | 12 | 22,2C | - | - |
| IIBAT | 0x4286 | STAT_BATTERIESTROM_IBS_WERT | unsigned int | - | A | - | 0.080000 | - | -200.000000 | I_batt | Batteriestrom von IBS gemessen | 12 | 22,2C | - | - |
| IIGEN | 0x4290 | STAT_GENERATOR_STROM_WERT | unsigned char | - | A | - | 1.000000 | - | 0.000000 | I_gen | Generatorstrom | 12 | 22,2C | - | - |
| Iekp | 0x429D | STAT_Iekp_WERT | unsigned char | - | A | - | 0.100000 | - | 0.000000 | Iekp | Strom EKP | 12 | 22,2C | - | - |
| IWHE1 | 0x45A2 | STAT_BEZUGSWINKEL_BEGINN_HAUPTEINSPRITZUNG1_WERT | unsigned int | - | degCrs | - | 0.003052 | - | -100.000000 | InjCrv_phiMI1Des | Sollwert des Bezugswinkels für Ansteuerbeginn der Haupteinspritzung 1 | 12 | 22,2C | - | - |
| IWVE1 | 0x45A6 | STAT_WINKELKOMPONENTE_BEGINN_VOREINSPRITZUNG1_WERT | unsigned int | - | degCrS | - | 0.003052 | - | -100.000000 | InjCrv_phiPiI1Des | Sollwert des Bezugswinkels für Ansteuerbeginn der Voreinspritzung 1 | 12 | 22,2C | - | - |
| IWVE2 | 0x45A7 | STAT_WINKELKOMPONENTE_BEGINN_VOREINSPRITZUNG2_WERT | unsigned int | - | degCrS | - | 0.003052 | - | -100.000000 | InjCrv_phiPiI2Des | Sollwert des Bezugswinkels für Ansteuerbeginn der Voreinspritzung 2 | 12 | 22,2C | - | - |
| IWNE1 | 0x45A9 | STAT_BEZUGSWINKEL_BEGINN_NACHEINSPRITZUNG1_WERT | unsigned int | - | degCrS | - | 0.003052 | - | -100.000000 | InjCrv_phiPoI1Des | Sollwert des Bezugswinkels für Ansteuerbeginn der Nacheinspritzung 1 | 12 | 22,2C | - | - |
| IWNE2 | 0x45A8 | STAT_BEZUGSWINKEL_BEGINN_NACHEINSPRITZUNG2_WERT | unsigned int | - | degCrS | - | 0.003052 | - | -100.000000 | InjCrv_phiPoI2Des | Sollwert des Bezugswinkels für Ansteuerbeginn der Nacheinspritzung 2 | 12 | 22,2C | - | - |
| InjCrv_qMI1Des | 0x5274 | STAT_InjCrv_qMI1Des_WERT | unsigned int | - | mg/Hub | - | 0.003891 | - | 0.000000 | InjCrv_qMI1Des | Wunschmenge Haupteinspritzung | 12 | 22,2C | - | - |
| InjCrv_qPiI1Des | 0x5275 | STAT_InjCrv_qPiI1Des_WERT | unsigned int | - | mg/Hub | - | 0.003891 | - | 0.000000 | InjCrv_qPiI1Des | Wunschmenge Voreinspritzung 1 | 12 | 22,2C | - | - |
| IMVE1 | 0x45A4 | STAT_MENGE_VOREINSPRITZUNG1_WERT | unsigned int | - | mg/Hub | - | 0.003052 | - | -100.000000 | InjCrv_qPiI1Des_mp | Sollwert der Einspritzmenge für Voreinspritzung 1 | 12 | 22,2C | - | - |
| InjCrv_qPiI2Des | 0x5276 | STAT_InjCrv_qPiI2Des_WERT | unsigned int | - | mg/Hub | - | 0.003891 | - | 0.000000 | InjCrv_qPiI2Des | Wunschmenge Voreinspritzung 2 | 12 | 22,2C | - | - |
| IMVE2 | 0x45A5 | STAT_MENGE_VOREINSPRITZUNG2_WERT | unsigned int | - | mg/Hub | - | 0.003052 | - | -100.000000 | InjCrv_qPiI2Des_mp | Sollwert der Einspritzmenge für Voreinspritzung 1 | 12 | 22,2C | - | - |
| InjCrv_qPiI3Des | 0x5277 | STAT_InjCrv_qPiI3Des_WERT | unsigned int | - | mg/Hub | - | 0.003891 | - | 0.000000 | InjCrv_qPiI3Des | Wunschmenge Voreinspritzung 3 | 12 | 22,2C | - | - |
| InjCrv_qPoI2Des | 0x5278 | STAT_InjCrv_qPoI2Des_WERT | unsigned int | - | mg/Hub | - | 0.003891 | - | 0.000000 | InjCrv_qPoI2Des | Sollmenge Nacheinspritzung 2 | 12 | 22,2C | - | - |
| InjCrv_qPoI3Des | 0x5279 | STAT_InjCrv_qPoI3Des_WERT | unsigned int | - | mg/Hub | - | 0.003891 | - | 0.000000 | InjCrv_qPoI3Des | Sollmenge Nacheinspritzung 3 | 12 | 22,2C | - | - |
| InjCrv_stInjCharActVal | 0x4A57 | STAT_InjCrv_stInjCharActVal_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | InjCrv_stInjCharActVal | Einspritzfreigabestatus | 12 | 22,2C | - | - |
| ITVE1 | 0x45A3 | STAT_BEZUGSZEITKOMPONENTE_BEGINN_VOREINSPRITZUNG1_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | InjCrv_tiPiI1Des | Sollwert des Ansteuerbeginns der Voreinspritzung 1 | 12 | 22,2C | - | - |
| IMEIA | 0x45D4 | STAT_EINSPRITZMENGE_AKTUELL_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | InjCtl_qCurr | Einspritzmenge - aktueller Wert | 12 | 22,2C | - | - |
| InjCtl_qDriftMax1_mp | 0x45D2 | STAT_InjCtl_qDriftMax1_mp_WERT | unsigned int | - | mg/cyc | - | 0.000305 | - | -10.000000 | InjCtl_qDriftMax1_mp | maximale Mengendriftkompensationsbegrenzung (im EEPROM abgelegt) | 12 | 22,2C | - | - |
| InjCtl_qDriftMin1_mp | 0x45D1 | STAT_InjCtl_qDriftMin1_mp_WERT | unsigned int | - | mg/cyc | - | 0.000305 | - | -10.000000 | InjCtl_qDriftMin1_mp | minimale Mengendriftkompensationsbegrenzung (im EEPROM abgelegt) | 12 | 22,2C | - | - |
| SMEIN | 0x45D6 | STAT_EINSPRITZMENGE_SOLL_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | InjCtl_qRaw | Einspritzmenge - Rohwert | 12 | 22,2C | - | - |
| SMEIO | 0x45D5 | STAT_EINSPRITZMENGE_SOLL_OHNE_MENGENAUSGLEICH_WERT | unsigned int | - | mg/hub | - | 0.003052 | - | -100.000000 | InjCtl_qSetUnBal | Einspritzmenge - Sollwert ohne Mengenausgleichsregelung | 12 | 22,2C | - | - |
| InjUn_stStrt | 0x45B6 | STAT_InjUn_stStrt_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | InjUn_stStrt | Status - Information zu Motorstartproblemen | 12 | 22,2C | - | - |
| InjVlv_stInjCoE | 0x4590 | STAT_InjVlv_stInjCoE_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | InjVlv_stInjCoE | InjVlv_stInjCoE | 12 | 22,2C | - | - |
| InjVlv_stPsIcTra_0 | 0x4591 | STAT_InjVlv_stPsIcTra_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | InjVlv_stPsIcTra_0 | InjVlv_stPsIcTra 0 | 12 | 22,2C | - | - |
| InjVlv_stPsIcTra_1 | 0x4592 | STAT_InjVlv_stPsIcTra_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | InjVlv_stPsIcTra_1 | InjVlv_stPsIcTra 1 | 12 | 22,2C | - | - |
| Km_st | 0x4AE2 | STAT_Km_st_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | Km_st | Kilometerstand (Layer) | 12 | 22,2C | - | - |
| LSU_facO2Cor_mp_0 | 0x4AEC | STAT_LSU_facO2Cor_mp_0_WERT | unsigned int | - | - | - | 0.001526 | - | -50.000000 | LSU_facO2Cor_mp_0 | Korrekturfaktor der Anpassung 0 | 12 | 22,2C | - | - |
| LSU_facO2Cor_mp_1 | 0x4AED | STAT_LSU_facO2Cor_mp_1_WERT | unsigned int | - | - | - | 0.001526 | - | -50.000000 | LSU_facO2Cor_mp_1 | Korrekturfaktor der Anpassung 1 | 12 | 22,2C | - | - |
| LSU_rLam_0 | 0x4AF4 | STAT_LSU_rLam_0_WERT | unsigned int | - | - | - | 0.001000 | - | 0.000000 | LSU_rLam_0 | Der aus LSU gemessene Lambdawert 0 | 12 | 22,2C | - | - |
| LSU_rLam_1 | 0x4AF5 | STAT_LSU_rLam_1_WERT | unsigned int | - | - | - | 0.001000 | - | 0.000000 | LSU_rLam_1 | Der aus LSU gemessene Lambdawert 1 | 12 | 22,2C | - | - |
| IKSAB | 0x4AF8 | STAT_SAUERSTOFFGEHALT_BERECHNET_WERT | unsigned int | - | - | - | 0.000381 | - | 0.000000 | LSU_rO2Adap_0 | Adaptierte Sauerstoffkonzentration | 12 | 22,2C | - | - |
| LSU_rO2Adap_1 | 0x4AF9 | STAT_LSU_rO2Adap_1_WERT | unsigned int | - | - | - | 0.000381 | - | 0.000000 | LSU_rO2Adap_1 | Adaptierte Sauerstoffkonzentration 1 | 12 | 22,2C | - | - |
| LSU_rO2Raw_0 | 0x4AFC | STAT_LSU_rO2Raw_0_WERT | unsigned int | - | - | - | 0.000010 | - | 0.000000 | LSU_rO2Raw_0 | Sauerstoffrohwert, nur Offset-kompensiert 0 | 12 | 22,2C | - | - |
| ILMBD | 0x4AFD | STAT_LAMBDA_WERT | unsigned int | - | - | - | 0.000010 | - | 0.000000 | LSU_rO2Raw_1 | Sauerstoffrohwert, nur Offset-kompensiert 1 | 12 | 22,2C | - | - |
| LSU_stAdap_0 | 0x4AFE | STAT_LSU_rLam_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | LSU_stAdap_0 | Gefilterter Sauerstoffwert 0 | 12 | 22,2C | - | - |
| LSU_stAdap_1 | 0x4AFF | STAT_LSU_rO2Adap_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | LSU_stAdap_1 | Gefilterter Sauerstoffwert 1 | 12 | 22,2C | - | - |
| ISOSV | 0x4B00 | STAT_LAMBDASONDENSIGNAL_VALID | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | LSU_stO2IntValid_0 | O2-Signal gültig (Intern) 0 | 12 | 22,2C | - | - |
| LSU_stO2IntValid_1 | 0x4B01 | STAT_LSU_rO2Raw_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | LSU_stO2IntValid_1 | O2-Signal gültig (Intern) 1 | 12 | 22,2C | - | - |
| LSU_tiState1_mp_0 | 0x4AEE | STAT_LSU_tiState1_mp_WERT | unsigned int | - | s | - | 0.100000 | - | 0.000000 | LSU_tiState1_mp_0 | Timervariable: Kraftstoffmenge liegt innerhalb Toleranzband 0 | 12 | 22,2C | - | - |
| LSU_tiState1_mp_1 | 0x4AEF | STAT_LSU_tiState1_mp_1_WERT | unsigned int | - | s | - | 0.100000 | - | 0.000000 | LSU_tiState1_mp_1 | Timervariable: Kraftstoffmenge liegt innerhalb Toleranzband 1 | 12 | 22,2C | - | - |
| LSU_tiState2_mp_0 | 0x4AF0 | STAT_LSU_tiState2_mp_WERT | unsigned int | - | s | - | 0.100000 | - | 0.000000 | LSU_tiState2_mp_0 | Anstiegszeit O2-Signal beim Übergang Last-Schub 0 | 12 | 22,2C | - | - |
| LSU_tiState2_mp_1 | 0x4AF1 | STAT_LSU_tiState2_mp_1_WERT | unsigned int | - | s | - | 0.100000 | - | 0.000000 | LSU_tiState2_mp_1 | Anstiegszeit O2-Signal beim Übergang Last-Schub 1 | 12 | 22,2C | - | - |
| LSU_tiState3_mp_0 | 0x4AF2 | STAT_LSU_tiState3_mp_WERT | unsigned int | - | s | - | 0.100000 | - | 0.000000 | LSU_tiState3_mp_0 | Zeitdauer bis zum Erreichen des Schubs (Kraftstoffmenge kleiner als Schwellwert) 0 | 12 | 22,2C | - | - |
| LSU_tiState3_mp_1 | 0x4AF3 | STAT_LSU_tiState3_mp_1_WERT | unsigned int | - | s | - | 0.100000 | - | 0.000000 | LSU_tiState3_mp_1 | Zeitdauer bis zum Erreichen des Schubs (Kraftstoffmenge kleiner als Schwellwert) 1 | 12 | 22,2C | - | - |
| LamCtl_qLamDynDesCor_mp | 0x4B08 | STAT_LamCtl_qLamDynDesCor_mp_WERT | unsigned int | - | mg/Hub | - | 0.001000 | - | -32.657000 | LamCtl_qLamDynDesCor_mp | fraction fuel injection quantity from the lambda governor | 12 | 22,2C | - | - |
| LamCtl_stGov | 0x4B09 | STAT_LamCtl_stGov_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | LamCtl_stGov | Status - Lamdaregler aktiv | 12 | 22,2C | - | - |
| Layer_stLPCOff | 0x428F | STAT_Layer_stLPCOff_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Layer_stLPCOff | Status - Abschaltung der Niederdruckregelung | 12 | 22,2C | - | - |
| ManDet_HistKm_0 | 0x5734 | STAT_ManDet_HistKm0_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_0 | Ringspeicher Kilometerstand 0 | 12 | 22,2C | - | - |
| ManDet_HistKm_1 | 0x5735 | STAT_ManDet_HistKm1_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_1 | Ringspeicher Kilometerstand 1 | 12 | 22,2C | - | - |
| ManDet_HistKm_10 | 0x573E | STAT_ManDet_HistKm10_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_10 | Ringspeicher Kilometerstand 10 | 12 | 22,2C | - | - |
| ManDet_HistKm_11 | 0x573F | STAT_ManDet_HistKm11_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_11 | Ringspeicher Kilometerstand 11 | 12 | 22,2C | - | - |
| ManDet_HistKm_12 | 0x5740 | STAT_ManDet_HistKm12_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_12 | Ringspeicher Kilometerstand 12 | 12 | 22,2C | - | - |
| ManDet_HistKm_13 | 0x5741 | STAT_ManDet_HistKm13_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_13 | Ringspeicher Kilometerstand 13 | 12 | 22,2C | - | - |
| ManDet_HistKm_14 | 0x5742 | STAT_ManDet_HistKm14_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_14 | Ringspeicher Kilometerstand 14 | 12 | 22,2C | - | - |
| ManDet_HistKm_15 | 0x5743 | STAT_ManDet_HistKm15_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_15 | Ringspeicher Kilometerstand 15 | 12 | 22,2C | - | - |
| ManDet_HistKm_16 | 0x5744 | STAT_ManDet_HistKm16_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_16 | Ringspeicher Kilometerstand 16 | 12 | 22,2C | - | - |
| ManDet_HistKm_17 | 0x5745 | STAT_ManDet_HistKm17_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_17 | Ringspeicher Kilometerstand 17 | 12 | 22,2C | - | - |
| ManDet_HistKm_18 | 0x5746 | STAT_ManDet_HistKm18_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_18 | Ringspeicher Kilometerstand 18 | 12 | 22,2C | - | - |
| ManDet_HistKm_19 | 0x5747 | STAT_ManDet_HistKm19_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_19 | Ringspeicher Kilometerstand 19 | 12 | 22,2C | - | - |
| ManDet_HistKm_2 | 0x5736 | STAT_ManDet_HistKm2_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_2 | Ringspeicher Kilometerstand 2 | 12 | 22,2C | - | - |
| ManDet_HistKm_3 | 0x5737 | STAT_ManDet_HistKm3_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_3 | Ringspeicher Kilometerstand 3 | 12 | 22,2C | - | - |
| ManDet_HistKm_4 | 0x5738 | STAT_ManDet_HistKm4_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_4 | Ringspeicher Kilometerstand 4 | 12 | 22,2C | - | - |
| ManDet_HistKm_5 | 0x5739 | STAT_ManDet_HistKm5_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_5 | Ringspeicher Kilometerstand 5 | 12 | 22,2C | - | - |
| ManDet_HistKm_6 | 0x573A | STAT_ManDet_HistKm6_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_6 | Ringspeicher Kilometerstand 6 | 12 | 22,2C | - | - |
| ManDet_HistKm_7 | 0x573B | STAT_ManDet_HistKm7_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_7 | Ringspeicher Kilometerstand 7 | 12 | 22,2C | - | - |
| ManDet_HistKm_8 | 0x573C | STAT_ManDet_HistKm8_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_8 | Ringspeicher Kilometerstand 8 | 12 | 22,2C | - | - |
| ManDet_HistKm_9 | 0x573D | STAT_ManDet_HistKm9_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | ManDet_HistKm_9 | Ringspeicher Kilometerstand 9 | 12 | 22,2C | - | - |
| ManDet_HistTw_0 | 0x5720 | STAT_ManDet_HistTw0_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_0 | Ringspeicher der Manipulationswahrscheinlichkeit 0 | 12 | 22,2C | - | - |
| ManDet_HistTw_1 | 0x5721 | STAT_ManDet_HistTw1_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_1 | Ringspeicher der Manipulationswahrscheinlichkeit 1 | 12 | 22,2C | - | - |
| ManDet_HistTw_10 | 0x572A | STAT_ManDet_HistTw10_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_10 | Ringspeicher der Manipulationswahrscheinlichkeit 10 | 12 | 22,2C | - | - |
| ManDet_HistTw_11 | 0x572B | STAT_ManDet_HistTw11_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_11 | Ringspeicher der Manipulationswahrscheinlichkeit 11 | 12 | 22,2C | - | - |
| ManDet_HistTw_12 | 0x572C | STAT_ManDet_HistTw12_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_12 | Ringspeicher der Manipulationswahrscheinlichkeit 12 | 12 | 22,2C | - | - |
| ManDet_HistTw_13 | 0x572D | STAT_ManDet_HistTw13_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_13 | Ringspeicher der Manipulationswahrscheinlichkeit 13 | 12 | 22,2C | - | - |
| ManDet_HistTw_14 | 0x572E | STAT_ManDet_HistTw14_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_14 | Ringspeicher der Manipulationswahrscheinlichkeit 14 | 12 | 22,2C | - | - |
| ManDet_HistTw_15 | 0x572F | STAT_ManDet_HistTw15_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_15 | Ringspeicher der Manipulationswahrscheinlichkeit 15 | 12 | 22,2C | - | - |
| ManDet_HistTw_16 | 0x5730 | STAT_ManDet_HistTw16_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_16 | Ringspeicher der Manipulationswahrscheinlichkeit 16 | 12 | 22,2C | - | - |
| ManDet_HistTw_17 | 0x5731 | STAT_ManDet_HistTw17_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_17 | Ringspeicher der Manipulationswahrscheinlichkeit 17 | 12 | 22,2C | - | - |
| ManDet_HistTw_18 | 0x5732 | STAT_ManDet_HistTw18_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_18 | Ringspeicher der Manipulationswahrscheinlichkeit 18 | 12 | 22,2C | - | - |
| ManDet_HistTw_19 | 0x5733 | STAT_ManDet_HistTw19_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_19 | Ringspeicher der Manipulationswahrscheinlichkeit 19 | 12 | 22,2C | - | - |
| ManDet_HistTw_2 | 0x5722 | STAT_ManDet_HistTw2_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_2 | Ringspeicher der Manipulationswahrscheinlichkeit 2 | 12 | 22,2C | - | - |
| ManDet_HistTw_3 | 0x5723 | STAT_ManDet_HistTw3_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_3 | Ringspeicher der Manipulationswahrscheinlichkeit 3 | 12 | 22,2C | - | - |
| ManDet_HistTw_4 | 0x5724 | STAT_ManDet_HistTw4_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_4 | Ringspeicher der Manipulationswahrscheinlichkeit 4 | 12 | 22,2C | - | - |
| ManDet_HistTw_5 | 0x5725 | STAT_ManDet_HistTw5_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_5 | Ringspeicher der Manipulationswahrscheinlichkeit 5 | 12 | 22,2C | - | - |
| ManDet_HistTw_6 | 0x5726 | STAT_ManDet_HistTw6_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_6 | Ringspeicher der Manipulationswahrscheinlichkeit 6 | 12 | 22,2C | - | - |
| ManDet_HistTw_7 | 0x5727 | STAT_ManDet_HistTw7_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_7 | Ringspeicher der Manipulationswahrscheinlichkeit 7 | 12 | 22,2C | - | - |
| ManDet_HistTw_8 | 0x5728 | STAT_ManDet_HistTw8_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_8 | Ringspeicher der Manipulationswahrscheinlichkeit 8 | 12 | 22,2C | - | - |
| ManDet_HistTw_9 | 0x5729 | STAT_ManDet_HistTw9_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | ManDet_HistTw_9 | Ringspeicher der Manipulationswahrscheinlichkeit 9 | 12 | 22,2C | - | - |
| ManDet_rO2AdapFaultMean | 0x571F | STAT_ManDet_rO2AdapFaultMean_WERT | unsigned int | - | - | - | 1.000000 | - | -32768.000000 | ManDet_rO2AdapFaultMean | mittlere Abweichung der Sauerstoffkonzentration | 12 | 22,2C | - | - |
| Md_gennm | 0x4EE4 | STAT_Md_gennm_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | Md_gennm | gefiltertes Generatormoment (absolut am Ausgang) | 12 | 22,2C | - | - |
| SVRDR | 0x4299 | STAT_VOLUMENSTROM_RAILDRUCKREGELUNG_SOLL_WERT | unsigned int | - | mm3/s | - | 0.003052 | - | -100.000000 | MeUn_dvolSet | Mengenregelventil - Volumenstromsollwert der Raildruckregelung | 12 | 22,2C | - | - |
| IIMRV | 0x4296 | STAT_STROM_MENGENREGELVENTIL_WERT | unsigned int | - | mA | - | 0.100000 | - | 0.000000 | MeUn_iActFlt_mp | Mengenregelventil - gefilterter Istwert des Ansteuerstromes | 12 | 22,2C | - | - |
| MeUn_iActVal | 0x429E | STAT_MeUn_iActVal_WERT | unsigned int | - | mA | - | 0.100000 | - | 0.000000 | MeUn_iActVal | Analogeingang Strom-Istwert der Zumesseinheit | 12 | 22,2C | - | - |
| SIMRV | 0x4297 | STAT_STROM_MENGENREGELVENTIL_SOLL_WERT | unsigned int | - | mA | - | 0.100000 | - | 0.000000 | MeUn_iSet | Mengenregelventil - Sollwert des Ansteuerstromes | 12 | 22,2C | - | - |
| IAMRV | 0x4298 | STAT_MENGENREGELVENTIL_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | MeUn_rPs_mp | Mengenregelventil - Ausgangstastverhältnis | 12 | 22,2C | - | - |
| MeUn_stActrCtl_mp | 0x429C | STAT_MeUn_stActrCtl_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MeUn_stActrCtl_mp | Mengenregelventil - Zustand der Stellwertsteuerung | 12 | 22,2C | - | - |
| MeUn_uRaw_mp | 0x429A | STAT_MeUn_uRaw_mp_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | MeUn_uRaw_mp | Mengenregelventil - Spannungsrohwert | 12 | 22,2C | - | - |
| MisfDet_ctMifDrivCyc_0 | 0x442A | STAT_MisfDet_ctMifDrivCyc0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifDrivCyc_0 | Zähler für die Aussetzer im aktuellen Fahrzyklus, Vektor mit ein Element pro Zylinder 0 | 12 | 22,2C | - | - |
| MisfDet_ctMifDrivCyc_1 | 0x442B | STAT_MisfDet_ctMifDrivCyc1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifDrivCyc_1 | Zähler für die Aussetzer im aktuellen Fahrzyklus, Vektor mit ein Element pro Zylinder 1 | 12 | 22,2C | - | - |
| MisfDet_ctMifDrivCyc_2 | 0x442C | STAT_MisfDet_ctMifDrivCyc2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifDrivCyc_2 | Zähler für die Aussetzer im aktuellen Fahrzyklus, Vektor mit ein Element pro Zylinder 2 | 12 | 22,2C | - | - |
| MisfDet_ctMifDrivCyc_3 | 0x442D | STAT_MisfDet_ctMifDrivCyc3_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifDrivCyc_3 | Zähler für die Aussetzer im aktuellen Fahrzyklus, Vektor mit ein Element pro Zylinder 3 | 12 | 22,2C | - | - |
| MisfDet_ctMifDrivCyc_4 | 0x442E | STAT_MisfDet_ctMifDrivCyc4_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifDrivCyc_4 | Zähler für die Aussetzer im aktuellen Fahrzyklus, Vektor mit ein Element pro Zylinder 4 | 12 | 22,2C | - | - |
| MisfDet_ctMifDrivCyc_5 | 0x442F | STAT_MisfDet_ctMifDrivCyc5_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifDrivCyc_5 | Zähler für die Aussetzer im aktuellen Fahrzyklus, Vektor mit ein Element pro Zylinder 5 | 12 | 22,2C | - | - |
| MisfDet_ctMifEWMA_mp_0 | 0x4432 | STAT_MisfDet_ctMifEWMA_mp0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifEWMA_mp_0 | Zähler für die Durchschnitts-(EWMA-)Werte für die letzten zehn Fahrzyklen, ein Messpunkt für jeden Zylinder 0 | 12 | 22,2C | - | - |
| MisfDet_ctMifEWMA_mp_1 | 0x4433 | STAT_MisfDet_ctMifEWMA_mp1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifEWMA_mp_1 | Zähler für die Durchschnitts-(EWMA-)Werte für die letzten zehn Fahrzyklen, ein Messpunkt für jeden Zylinder 1 | 12 | 22,2C | - | - |
| MisfDet_ctMifEWMA_mp_2 | 0x4434 | STAT_MisfDet_ctMifEWMA_mp2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifEWMA_mp_2 | Zähler für die Durchschnitts-(EWMA-)Werte für die letzten zehn Fahrzyklen, ein Messpunkt für jeden Zylinder 2 | 12 | 22,2C | - | - |
| MisfDet_ctMifEWMA_mp_3 | 0x4435 | STAT_MisfDet_ctMifEWMA_mp3_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifEWMA_mp_3 | Zähler für die Durchschnitts-(EWMA-)Werte für die letzten zehn Fahrzyklen, ein Messpunkt für jeden Zylinder 3 | 12 | 22,2C | - | - |
| MisfDet_ctMifEWMA_mp_4 | 0x4436 | STAT_MisfDet_ctMifEWMA_mp4_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifEWMA_mp_4 | Zähler für die Durchschnitts-(EWMA-)Werte für die letzten zehn Fahrzyklen, ein Messpunkt für jeden Zylinder 4 | 12 | 22,2C | - | - |
| MisfDet_ctMifEWMA_mp_5 | 0x4437 | STAT_MisfDet_ctMifEWMA_mp5_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MisfDet_ctMifEWMA_mp_5 | Zähler für die Durchschnitts-(EWMA-)Werte für die letzten zehn Fahrzyklen, ein Messpunkt für jeden Zylinder 5 | 12 | 22,2C | - | - |
| MoCADC_ctDebTst | 0x582D | STAT_MoCADC_ctDebTst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCADC_ctDebTst | Fehlerzähler für Prüfung der Testspannung | 12 | 22,2C | - | - |
| MoCADC_facVltgRatio | 0x582E | STAT_MoCADC_facVltgRatio_WERT | unsigned int | - | 1/1 | - | 0.000977 | - | 0.000000 | MoCADC_facVltgRatio | Ratiometriekorrekturfaktor in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoCADC_st | 0x582C | STAT_MoCADC_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCADC_st | Status Info der ADC-Überwachung | 12 | 22,2C | - | - |
| MoCADC_stIrvErrNTP | 0x527F | STAT_MoCADC_stIrvErrNTP_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCADC_stIrvErrNTP | Irreversibles Fehlerbit aus Prüfung mit Leerlauftestimpulsverfahren | 12 | 22,2C | - | - |
| MoCADC_stIrvErrTst | 0x5280 | STAT_MoCADC_stIrvErrTst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCADC_stIrvErrTst | Irreversibles Fehlerbit aus Prüfung der Testspannung in der ADC Überwachung | 12 | 22,2C | - | - |
| MoCADC_uNTP_mp | 0x5281 | STAT_MoCADC_uNTP_mp_WERT | unsigned int | - | mV | - | 1.000000 | - | 0.000000 | MoCADC_uNTP_mp | Spannung am ADC für Fahrpedalsignal 2 | 12 | 22,2C | - | - |
| MoCADC_uTst_mp | 0x5282 | STAT_MoCADC_uTst_mp_WERT | unsigned int | - | mV | - | 1.000000 | - | 0.000000 | MoCADC_uTst_mp | Spannung am ADC Testspannungs-Eingang | 12 | 22,2C | - | - |
| MoCCom_Query | 0x5833 | STAT_MoCCom_Query_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCCom_Query | Erweiterte Frage von Überwachungsmodul | 12 | 22,2C | - | - |
| MoCCom_Response | 0x5834 | STAT_MoCCom_Response_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCCom_Response | Antwort auf Frage vom Überwachungsmodul | 12 | 22,2C | - | - |
| MoCCom_ctCorRespCnt | 0x5285 | STAT_MoCCom_ctCorRespCnt_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCCom_ctCorRespCnt | Zähler, um die Anzahl der Korrekturen des Antwortzählers zu zählen | 12 | 22,2C | - | - |
| MoCCom_ctErrFC | 0x5830 | STAT_MoCCom_ctErrFC_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCCom_ctErrFC | Fehlerzähler im Funktionsrechner für Fehler vom Überwachungsmodul | 12 | 22,2C | - | - |
| MoCCom_ctErrMM | 0x582F | STAT_MoCCom_ctErrMM_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCCom_ctErrMM | Fehlerzählerrückmeldung von Überwachungsmodul | 12 | 22,2C | - | - |
| MoCCom_ctErrSPI | 0x5832 | STAT_MoCCom_ctErrSPI_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCCom_ctErrSPI | Fehlerzähler für SPI-Übertragungen in Kommunikation mit Überwachungsmodul | 12 | 22,2C | - | - |
| MoCCom_ctSOPTstActv | 0x583E | STAT_MoCCom_ctSOPTstActv_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCCom_ctSOPTstActv | Zähler für die Anzahl der Aufrufe an aktiven Abschaltpfad -Test | 12 | 22,2C | - | - |
| MoCCom_st | 0x5831 | STAT_MoCCom_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCCom_st | Status Bitleiste für Kommunikation mit Überwachungsmodul | 12 | 22,2C | - | - |
| MoCCom_stWDAActvMsg | 0x5286 | STAT_MoCCom_stWDAActvMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCCom_stWDAActvMsg | Info an Ebene 1: Watchdogabschaltung aktiv | 12 | 22,2C | - | - |
| MoCMem_adCurrent | 0x5287 | STAT_MoCMem_adCurrent_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCMem_adCurrent | Aktueller Adresszeiger für den zyklischen ROM-check | 12 | 22,2C | - | - |
| MoCMem_adRamOffset | 0x5288 | STAT_MoCMem_adRamOffset_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCMem_adRamOffset | Aktueller Offset für den zyklischen RAM-check | 12 | 22,2C | - | - |
| MoCMem_ctDebErrChkRAM | 0x5289 | STAT_MoCMem_ctDebErrChkRAM_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCMem_ctDebErrChkRAM | Fehlerzähler für Doppelablagefehler und zykischen RAM-Test | 12 | 22,2C | - | - |
| MoCMem_ctDebErrChkROM | 0x528A | STAT_MoCMem_ctDebErrChkROM_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCMem_ctDebErrChkROM | Fehlerzähler für zykischen ROM-Test | 12 | 22,2C | - | - |
| MoCMem_ctDebHealChkRAM | 0x528B | STAT_MoCMem_ctDebHealChkRAM_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCMem_ctDebHealChkRAM | Heilungszähler für Doppelablagefehler und zykischen RAM-Test | 12 | 22,2C | - | - |
| MoCMem_ctDebHealChkROM | 0x528C | STAT_MoCMem_ctDebHealChkROM_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCMem_ctDebHealChkROM | Heilungszähler für zyklischen ROM-Test | 12 | 22,2C | - | - |
| MoCMem_numCurrent | 0x528D | STAT_MoCMem_numCurrent_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCMem_numCurrent | Aktuelle Prüfsumme für den zyklischen ROM-check | 12 | 22,2C | - | - |
| MoCMem_st | 0x5835 | STAT_MoCMem_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCMem_st | Anforderung eines kompletten Speichertests in der Initialisierung und Status des kompletten ROM-Speichertests | 12 | 22,2C | - | - |
| MoCMem_stFunctionSwitch | 0x528E | STAT_MoCMem_stFunctionSwitch_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCMem_stFunctionSwitch | Variable schaltet zwischen überwachtem ROM-Code und ROM-Daten-Bereich um | 12 | 22,2C | - | - |
| MoCPCP_adCurrent | 0x528F | STAT_MoCPCP_adCurrent_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCPCP_adCurrent | Aktueller Adresszeiger für die PCP-Code-Prüfung | 12 | 22,2C | - | - |
| MoCPCP_ctErr | 0x5290 | STAT_MoCPCP_ctErr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCPCP_ctErr | Fehlerzähler für die CRC-Prüfsummenberechnung | 12 | 22,2C | - | - |
| MoCPCP_ctHeal | 0x5291 | STAT_MoCPCP_ctHeal_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCPCP_ctHeal | Heilungszähler für CRC-Prüfsummenfehler | 12 | 22,2C | - | - |
| MoCPCP_numCurrentCSum | 0x5292 | STAT_MoCPCP_numCurrentCSum_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCPCP_numCurrentCSum | Aktuelle Prüfsumme für die PCP-Code-Prüfung | 12 | 22,2C | - | - |
| MoCRam_ctMain1RamChk | 0x5293 | STAT_MoCRam_ctMain1RamChk_WERT | unsigned long | - | us | - | 1.000000 | - | 0.000000 | MoCRam_ctMain1RamChk | Diagnosezähler für die Zeit des RAM-Checks über die Bereiche in MAIN 1 | 12 | 22,2C | - | - |
| MoCRam_ctMain2RamChk | 0x5294 | STAT_MoCRam_ctMain2RamChk_WERT | unsigned long | - | us | - | 1.000000 | - | 0.000000 | MoCRam_ctMain2RamChk | Diagnosezähler für die Zeit des RAM-Checks über die Bereiche in MAIN 2 (excl. Protected-RAM-Umfang) | 12 | 22,2C | - | - |
| MoCRam_ctMainProtRam | 0x5295 | STAT_MoCRam_ctMainProtRam_WERT | unsigned long | - | us | - | 1.000000 | - | 0.000000 | MoCRam_ctMainProtRam | Diagnosezähler für die Zeit des RAM-Checks über die Bereiche des Protected-RAMs | 12 | 22,2C | - | - |
| MoCRam_ctRepEx | 0x5296 | STAT_MoCRam_ctRepEx_WERT | unsigned long | - | us | - | 1.000000 | - | 0.000000 | MoCRam_ctRepEx | Diagnosezähler für die Zeit des RAM-Checks über die Bereiche der Wiederholungsprüfung | 12 | 22,2C | - | - |
| MoCRam_numAreasChecked | 0x5297 | STAT_MoCRam_numAreasChecked_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRam_numAreasChecked | Diagnosegröße für die Anzahl der aktuell geprüften Bereiche | 12 | 22,2C | - | - |
| MoCRam_numReset | 0x5298 | STAT_MoCRam_numReset_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRam_numReset | Diagnosegröße für ausgelöste Resets während des Hochlaufes | 12 | 22,2C | - | - |
| MoCRam_stEEPInit | 0x5299 | STAT_MoCRam_stEEPInit_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRam_stEEPInit | Diagnosegröße für in der Init übergebenen Werte für MoCMem_st aus dem EEPROM | 12 | 22,2C | - | - |
| MoCRam_stProtRAMCleared | 0x529A | STAT_MoCRam_stProtRAMCleared_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRam_stProtRAMCleared | Statusvariable für Zustand Protected-RAM | 12 | 22,2C | - | - |
| MoCRam_stRepExRam | 0x529B | STAT_MoCRam_stRepExRam_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRam_stRepExRam | Statusvariable ob Wiederholungsprüfung durchgeführt wurde | 12 | 22,2C | - | - |
| MoCRom_KeyCode | 0x529D | STAT_MoCRom_KeyCode_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRom_KeyCode | Variable zur Deaktivierung des kompletten ROM-Checks über Code | 12 | 22,2C | - | - |
| MoCRom_KeyData | 0x529E | STAT_MoCRom_KeyData_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRom_KeyData | Variable zur Deaktivierung des kompletten ROM-Checks über Daten | 12 | 22,2C | - | - |
| MoCRom_ctRepEx_mp | 0x529C | STAT_MoCRom_ctRepEx_mp_WERT | unsigned long | - | us | - | 1.000000 | - | 0.000000 | MoCRom_ctRepEx_mp | Diagnosezähler für die Zeit des ROM-Checks über die Bereiche der Wiederholungsprüfung | 12 | 22,2C | - | - |
| MoCRom_numRomPageErr | 0x5836 | STAT_MoCRom_numRomPageErr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRom_numRomPageErr | Fehlerhafte ROM-Page für Einfachfehler im kompletten ROM-Check | 12 | 22,2C | - | - |
| MoCRom_ptrTabIndexAct | 0x5837 | STAT_MoCRom_ptrTabIndexAct_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRom_ptrTabIndexAct | Pointer für aktuell zu prüfende Page des kompletten ROM-Checks | 12 | 22,2C | - | - |
| MoCRom_stXPostDrv_mp | 0x529F | STAT_MoCRom_stXPostDrv_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCRom_stXPostDrv_mp | Anforderung für die Erkennung einer Verlängerung des Nachlaufs | 12 | 22,2C | - | - |
| MoCSOP_ctDebHwNoRdy | 0x52A0 | STAT_MoCSOP_ctDebHwNoRdy_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctDebHwNoRdy | Anzahl der Wiederholungen bis die Hardware bereit ist um den Abschaltpfadtest durchzuführen | 12 | 22,2C | - | - |
| MoCSOP_ctDebPSDia | 0x583F | STAT_MoCSOP_ctDebPSDia_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctDebPSDia | Anzahl Wiederholungen eines Endstufentests | 12 | 22,2C | - | - |
| MoCSOP_ctDebPSIni | 0x52A1 | STAT_MoCSOP_ctDebPSIni_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctDebPSIni | Anzahl von Versuchen um eine Einspritzung abzusetzen | 12 | 22,2C | - | - |
| MoCSOP_ctDebSOPTst | 0x5840 | STAT_MoCSOP_ctDebSOPTst_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctDebSOPTst | Anzahl der Wiederholungen des Abschaltpfadtests (Realisierung einer Zeitüberwachung) | 12 | 22,2C | - | - |
| MoCSOP_ctErrMMRespByte | 0x52A2 | STAT_MoCSOP_ctErrMMRespByte_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrMMRespByte | Bytezähler für die Antwort zum Überwachungsmodul | 12 | 22,2C | - | - |
| MoCSOP_ctErrMM_mp_0 | 0x5841 | STAT_MoCSOP_ctErrMM_mp0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrMM_mp_0 | Kopie des Fehlerzählers aus dem Überwachungsmodul im Funktionsrechner 0 | 12 | 22,2C | - | - |
| MoCSOP_ctErrMM_mp_1 | 0x5842 | STAT_MoCSOP_ctErrMM_mp1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrMM_mp_1 | Kopie des Fehlerzählers aus dem Überwachungsmodul im Funktionsrechner 1 | 12 | 22,2C | - | - |
| MoCSOP_ctErrMM_mp_2 | 0x5843 | STAT_MoCSOP_ctErrMM_mp2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrMM_mp_2 | Kopie des Fehlerzählers aus dem Überwachungsmodul im Funktionsrechner 2 | 12 | 22,2C | - | - |
| MoCSOP_ctErrMM_mp_3 | 0x5844 | STAT_MoCSOP_ctErrMM_mp3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrMM_mp_3 | Kopie des Fehlerzählers aus dem Überwachungsmodul im Funktionsrechner 3 | 12 | 22,2C | - | - |
| MoCSOP_ctErrMM_mp_4 | 0x5845 | STAT_MoCSOP_ctErrMM_mp4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrMM_mp_4 | Kopie des Fehlerzählers aus dem Überwachungsmodul im Funktionsrechner 4 | 12 | 22,2C | - | - |
| MoCSOP_ctErrRespTime | 0x52A3 | STAT_MoCSOP_ctErrRespTime_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrRespTime | Fehlerzähler beim Setzen der Antwortzeit (response time) | 12 | 22,2C | - | - |
| MoCSOP_ctErrSPI | 0x5846 | STAT_MoCSOP_ctErrSPI_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctErrSPI | Fehlerzähler für SPI-Übertragungen zum Überwachungsmodul oder zum CJ945/R2S2 | 12 | 22,2C | - | - |
| MoCSOP_ctIdx_mp | 0x5847 | STAT_MoCSOP_ctIdx_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctIdx_mp | Index für 2,2ms-Raster Ringpuffermesspunkte | 12 | 22,2C | - | - |
| MoCSOP_ctRst | 0x52A4 | STAT_MoCSOP_ctRst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_ctRst | Anzahl der ausgelösten Resets im Abschaltpfadtest | 12 | 22,2C | - | - |
| MoCSOP_debugInfo_0 | 0x5848 | STAT_MoCSOP_debugInfo0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_debugInfo_0 | Debuginfo des Abschaltpfad-Tests 0 | 12 | 22,2C | - | - |
| MoCSOP_debugInfo_1 | 0x5849 | STAT_MoCSOP_debugInfo1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_debugInfo_1 | Debuginfo des Abschaltpfad-Tests 1 | 12 | 22,2C | - | - |
| MoCSOP_debugInfo_2 | 0x584A | STAT_MoCSOP_debugInfo2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_debugInfo_2 | Debuginfo des Abschaltpfad-Tests 2 | 12 | 22,2C | - | - |
| MoCSOP_debugInfo_3 | 0x584B | STAT_MoCSOP_debugInfo3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_debugInfo_3 | Debuginfo des Abschaltpfad-Tests 3 | 12 | 22,2C | - | - |
| MoCSOP_debugInfo_4 | 0x584C | STAT_MoCSOP_debugInfo4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_debugInfo_4 | Debuginfo des Abschaltpfad-Tests 4 | 12 | 22,2C | - | - |
| MoCSOP_debugInfo_5 | 0x584D | STAT_MoCSOP_debugInfo5_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_debugInfo_5 | Debuginfo des Abschaltpfad-Tests 5 | 12 | 22,2C | - | - |
| MoCSOP_st | 0x583D | STAT_MoCSOP_st_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_st | Statusvariable des Abschaltpfad-Tests | 12 | 22,2C | - | - |
| MoCSOP_stAct | 0x583A | STAT_MoCSOP_stAct_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stAct | Statusvariable zur Synchronisierung von Abschaltpfadtest und Frage-/Antwort-Kommunikation | 12 | 22,2C | - | - |
| MoCSOP_stActvMsg | 0x5839 | STAT_MoCSOP_stActvMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stActvMsg | Information für Ebene 1,2: Abschaltpfadtest ist aktiv oder WDA-Leitung ist aktiv (Einspritzungen abgeschalten) | 12 | 22,2C | - | - |
| MoCSOP_stErr | 0x583B | STAT_MoCSOP_stErr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stErr | Status der Kommunikation via SPI-Bus zum Überwachungsmodul | 12 | 22,2C | - | - |
| MoCSOP_stExtSM_mp_0 | 0x584E | STAT_MoCSOP_stExtSM_mp0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stExtSM_mp_0 | MoCSOP_stCurrSt Arraykopies (in 2,2ms Raster) 0 | 12 | 22,2C | - | - |
| MoCSOP_stExtSM_mp_1 | 0x584F | STAT_MoCSOP_stExtSM_mp1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stExtSM_mp_1 | MoCSOP_stCurrSt Arraykopies (in 2,2ms Raster) 1 | 12 | 22,2C | - | - |
| MoCSOP_stExtSM_mp_2 | 0x5850 | STAT_MoCSOP_stExtSM_mp2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stExtSM_mp_2 | MoCSOP_stCurrSt Arraykopies (in 2,2ms Raster) 2 | 12 | 22,2C | - | - |
| MoCSOP_stExtSM_mp_3 | 0x5851 | STAT_MoCSOP_stExtSM_mp3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stExtSM_mp_3 | MoCSOP_stCurrSt Arraykopies (in 2,2ms Raster) 3 | 12 | 22,2C | - | - |
| MoCSOP_stExtSM_mp_4 | 0x5852 | STAT_MoCSOP_stExtSM_mp4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stExtSM_mp_4 | MoCSOP_stCurrSt Arraykopies (in 2,2ms Raster) 4 | 12 | 22,2C | - | - |
| MoCSOP_stIVHSOPTst_mp | 0x52A5 | STAT_MoCSOP_stIVHSOPTst_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stIVHSOPTst_mp | Rückgabewert von IVHSOPTst als Array | 12 | 22,2C | - | - |
| MoCSOP_stInnerSM_mp_0 | 0x5853 | STAT_MoCSOP_stInnerSM_mp0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stInnerSM_mp_0 | Arraykopien (2,2ms-Raster Werte) von MoCSOP_stPrevCheckState 0 | 12 | 22,2C | - | - |
| MoCSOP_stInnerSM_mp_1 | 0x5854 | STAT_MoCSOP_stInnerSM_mp1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stInnerSM_mp_1 | Arraykopien (2,2ms-Raster Werte) von MoCSOP_stPrevCheckState 1 | 12 | 22,2C | - | - |
| MoCSOP_stInnerSM_mp_2 | 0x5855 | STAT_MoCSOP_stInnerSM_mp2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stInnerSM_mp_2 | Arraykopien (2,2ms-Raster Werte) von MoCSOP_stPrevCheckState 2 | 12 | 22,2C | - | - |
| MoCSOP_stInnerSM_mp_3 | 0x5856 | STAT_MoCSOP_stInnerSM_mp3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stInnerSM_mp_3 | Arraykopien (2,2ms-Raster Werte) von MoCSOP_stPrevCheckState 3 | 12 | 22,2C | - | - |
| MoCSOP_stInnerSM_mp_4 | 0x5857 | STAT_MoCSOP_stInnerSM_mp4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stInnerSM_mp_4 | Arraykopien (2,2ms-Raster Werte) von MoCSOP_stPrevCheckState 4 | 12 | 22,2C | - | - |
| MoCSOP_stLdRespTab | 0x583C | STAT_MoCSOP_stLdRespTab_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stLdRespTab | Statusvariable - Antwortentabelle geladen | 12 | 22,2C | - | - |
| MoCSOP_stMm_mp_0 | 0x5858 | STAT_MoCSOP_stMm_mp0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stMm_mp_0 | Arraykopien (2,2ms-Raster Werte) von Überwachungsmodul Zustandsbyte 0 | 12 | 22,2C | - | - |
| MoCSOP_stMm_mp_1 | 0x5859 | STAT_MoCSOP_stMm_mp1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stMm_mp_1 | Arraykopien (2,2ms-Raster Werte) von Überwachungsmodul Zustandsbyte 1 | 12 | 22,2C | - | - |
| MoCSOP_stMm_mp_2 | 0x585A | STAT_MoCSOP_stMm_mp2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stMm_mp_2 | Arraykopien (2,2ms-Raster Werte) von Überwachungsmodul Zustandsbyte 2 | 12 | 22,2C | - | - |
| MoCSOP_stMm_mp_3 | 0x585B | STAT_MoCSOP_stMm_mp3_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stMm_mp_3 | Arraykopien (2,2ms-Raster Werte) von Überwachungsmodul Zustandsbyte 3 | 12 | 22,2C | - | - |
| MoCSOP_stMm_mp_4 | 0x585C | STAT_MoCSOP_stMm_mp4_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stMm_mp_4 | Arraykopien (2,2ms-Raster Werte) von Überwachungsmodul Zustandsbyte 4 | 12 | 22,2C | - | - |
| MoCSOP_stOvl | 0x52A6 | STAT_MoCSOP_stOvl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stOvl | Statusvariable des CJ945 Überspannung-Erkennungs-latch | 12 | 22,2C | - | - |
| MoCSOP_stRdy | 0x5838 | STAT_MoCSOP_stRdy_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stRdy | Statusvariable zur Synchronisation von Abschaltpfadtest und Frage-/Antwort-Kommunikation (Test ist abgeschlossen) | 12 | 22,2C | - | - |
| MoCSOP_stRdyMsg | 0x5826 | STAT_MoCSOP_stRdyMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_stRdyMsg | Informationen für Ebene 1, 2 zum Status der Synchronisation des Abschatpfadtests und der Frage-Antwort-Kommunikation | 12 | 22,2C | - | - |
| MoCSOP_tiResp | 0x52A7 | STAT_MoCSOP_tiResp_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_tiResp | Überwachungsmodul-Antwortzeit (response time) | 12 | 22,2C | - | - |
| MoCSOP_tiRespMM_mp_0 | 0x585D | STAT_MoCSOP_tiRespMM_mp0_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_tiRespMM_mp_0 | Arraykopie (2,2ms Raster Werte) für die in Überwachungsmodul gesetzte response time 0 | 12 | 22,2C | - | - |
| MoCSOP_tiRespMM_mp_1 | 0x585E | STAT_MoCSOP_tiRespMM_mp1_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_tiRespMM_mp_1 | Arraykopie (2,2ms Raster Werte) für die in Überwachungsmodul gesetzte response time 1 | 12 | 22,2C | - | - |
| MoCSOP_tiRespMM_mp_2 | 0x585F | STAT_MoCSOP_tiRespMM_mp2_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_tiRespMM_mp_2 | Arraykopie (2,2ms Raster Werte) für die in Überwachungsmodul gesetzte response time 2 | 12 | 22,2C | - | - |
| MoCSOP_tiRespMM_mp_3 | 0x5860 | STAT_MoCSOP_tiRespMM_mp3_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_tiRespMM_mp_3 | Arraykopie (2,2ms Raster Werte) für die in Überwachungsmodul gesetzte response time 3 | 12 | 22,2C | - | - |
| MoCSOP_tiRespMM_mp_4 | 0x5861 | STAT_MoCSOP_tiRespMM_mp4_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoCSOP_tiRespMM_mp_4 | Arraykopie (2,2ms Raster Werte) für die in Überwachungsmodul gesetzte response time 4 | 12 | 22,2C | - | - |
| MoFAPP_stDiff_mp | 0x52A8 | STAT_MoFAPP_stDiff_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFAPP_stDiff_mp | Unplausibilität bei Vergleich der beiden Fahrpedalsignale | 12 | 22,2C | - | - |
| MoFAPP_stLimpMsg | 0x52A9 | STAT_MoFAPP_stLimpMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFAPP_stLimpMsg | Info für Ebene 1: Fehlerreaktion aus Ebene 2 angefordert | 12 | 22,2C | - | - |
| MoFAPP_stTst | 0x57E2 | STAT_MoFAPP_stTst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFAPP_stTst | Kennung für Freigabebedingung der Fehlerprüfung für die Diagnose | 12 | 22,2C | - | - |
| MoFAPP_u | 0x57E1 | STAT_MoFAPP_u_WERT | unsigned char | - | mV | - | 19.531250 | - | 0.000000 | MoFAPP_u | Position des Fahrpedals für die Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFAPP_uRaw1_mp | 0x52AA | STAT_MoFAPP_uRaw1_mp_WERT | unsigned char | - | mV | - | 19.531250 | - | 0.000000 | MoFAPP_uRaw1_mp | Aktueller Wert für Fahrpedalsignal 1 | 12 | 22,2C | - | - |
| MoFAPP_uRaw2_mp | 0x52AB | STAT_MoFAPP_uRaw2_mp_WERT | unsigned char | - | mV | - | 9.765625 | - | 0.000000 | MoFAPP_uRaw2_mp | Aktueller Wert für Fahrpedalsignal 2 | 12 | 22,2C | - | - |
| MoFBrk_st | 0x5140 | STAT_MoFBrk_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFBrk_st | Status des Bremslichtschalters | 12 | 22,2C | - | - |
| MoFClth_st | 0x52AC | STAT_MoFClth_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFClth_st | Kupplungszustand | 12 | 22,2C | - | - |
| MoFCoVeh_trqVehPtd | 0x5812 | STAT_MoFCoVeh_trqVehPtd_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | MoFCoVeh_trqVehPtd | zulässiges Moment der Fahrzeugfunktionen | 12 | 22,2C | - | - |
| MoFDCS_stDem | 0x5816 | STAT_MoFDCS_stDem_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFDCS_stDem | Statusinfo der MSR-Eingriffüberwachung | 12 | 22,2C | - | - |
| MoFDCS_stErr | 0x5817 | STAT_MoFDCS_stErr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFDCS_stErr | Status - Fehler redundanter DSC-Eingriff | 12 | 22,2C | - | - |
| MoFDCS_stFrz_mp | 0x52AD | STAT_MoFDCS_stFrz_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFDCS_stFrz_mp | Status der temporären Defekterkennung der DSC-Botschaft | 12 | 22,2C | - | - |
| MoFDCS_stTCSDem | 0x52AE | STAT_MoFDCS_stTCSDem_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFDCS_stTCSDem | Status des ASR-Eingriffes in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFDCS_trqDem | 0x52AF | STAT_MoFDCS_trqDem_WERT | unsigned int | - | Nm | - | 1.000000 | - | 0.000000 | MoFDCS_trqDem | angefordertes Motormoment von MSR-Steuerung | 12 | 22,2C | - | - |
| MoFDCS_trqRaw_mp | 0x52B0 | STAT_MoFDCS_trqRaw_mp_WERT | unsigned long | - | Nm | - | 0.000015 | - | 0.000000 | MoFDCS_trqRaw_mp | Rohwert der Momentenanforderung der DCS CAN Botschaft | 12 | 22,2C | - | - |
| MoFDrAs_trqPtd | 0x580E | STAT_MoFDrAs_trqPtd_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | MoFDrAs_trqPtd | Zulässiges Radmoment der Fahrerassistenzsysteme | 12 | 22,2C | - | - |
| MoFDrDem_rAPP | 0x57FE | STAT_MoFDrDem_rAPP_WERT | unsigned char | - | % | - | 0.390625 | - | 0.000000 | MoFDrDem_rAPP | Fahrpedalwert der Überwachungsfunktionen | 12 | 22,2C | - | - |
| MoFDrDem_trqPtd | 0x580F | STAT_MoFDrDem_trqPtd_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | MoFDrDem_trqPtd | zulässiges Fahrerwunschmoment auf Basis Radmoment | 12 | 22,2C | - | - |
| MoFESpd_nEng | 0x57E4 | STAT_MoFESpd_nEng_WERT | unsigned char | - | rpm | - | 40.000000 | - | 0.000000 | MoFESpd_nEng | Motordrehzahl in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFESpd_nEngL2_mp | 0x52B1 | STAT_MoFESpd_nEngL2_mp_WERT | unsigned char | - | rpm | - | 40.000000 | - | 0.000000 | MoFESpd_nEngL2_mp | In Funktionsüberwachung berechnete Motordrehzahl | 12 | 22,2C | - | - |
| MoFESpd_phiGT1Last | 0x57E6 | STAT_MoFESpd_phiGT1Last_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | MoFESpd_phiGT1Last | Winkeluhrstand aus vorhergehendem Aufruf der Motordrehzahlüberwachung | 12 | 22,2C | - | - |
| MoFESpd_stSync | 0x57E5 | STAT_MoFESpd_stSync_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFESpd_stSync | Synchronisationsstatus der Drehzahlüberwachung | 12 | 22,2C | - | - |
| MoFESpd_stSync1 | 0x52B2 | STAT_MoFESpd_stSync1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFESpd_stSync1 | Kennung 1 für Synchronisation in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFESpd_stSync2 | 0x52B3 | STAT_MoFESpd_stSync2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFESpd_stSync2 | Kennung 2 für Synchronisation in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFETC_stTst | 0x57EE | STAT_MoFETC_stTst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFETC_stTst | Plausibilisierter Motorteststatus der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFExtInt_stDCSPtdMsg | 0x52B4 | STAT_MoFExtInt_stDCSPtdMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFExtInt_stDCSPtdMsg | Status der Zulässigkeit des MSR-Eingriffs aus der Ebene 2 an die Ebene 1 | 12 | 22,2C | - | - |
| MoFExtInt_trqPtd | 0x580D | STAT_MoFExtInt_trqPtd_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | MoFExtInt_trqPtd | zulässiges Moment der externen Eingriffe in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFInjDat_numCylActr_mp | 0x52B5 | STAT_MoFInjDat_numCylActr_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFInjDat_numCylActr_mp | Zylindernummer einspritzplatzspezifisch | 12 | 22,2C | - | - |
| MoFInjDat_numInjType_mp | 0x52B6 | STAT_MoFInjDat_numInjType_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFInjDat_numInjType_mp | Einspritztyp einspritzplatzspezifisch | 12 | 22,2C | - | - |
| MoFInjDat_stInjState | 0x57EC | STAT_MoFInjDat_stInjState_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFInjDat_stInjState | Statusinformation über laufende Einspritzungen | 12 | 22,2C | - | - |
| MoFInjDat_tiTDCAvrg | 0x5808 | STAT_MoFInjDat_tiTDCAvrg_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | MoFInjDat_tiTDCAvrg | Mittelwert der durchschnittlichen momentenwirksamen Ansteuerdauer pro Zylinder | 12 | 22,2C | - | - |
| MoFOvR_stRls | 0x57F6 | STAT_MoFOvR_stRls_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | MoFOvR_stRls | Status aller Freigabe Bits für die Schubüberwachung | 12 | 22,2C | - | - |
| MoFSpdG_stDem | 0x52B7 | STAT_MoFSpdG_stDem_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFSpdG_stDem | Status allgemeiner Drehzahlanforderungen | 12 | 22,2C | - | - |
| MoFTra_stDem | 0x52B8 | STAT_MoFTra_stDem_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFTra_stDem | Status der Zulässigkeit des Getriebeeingriffs in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFVSS_a | 0x52BA | STAT_MoFVSS_a_WERT | unsigned int | - | m/s^2 | - | 0.001000 | - | 0.000000 | MoFVSS_a | Fahrzeugbeschleunigung für die Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFVSS_stErr | 0x52BB | STAT_MoFVSS_stErr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFVSS_stErr | MoFVSS_stErrVSS | 12 | 22,2C | - | - |
| MoFVSS_stFrz | 0x52CA | STAT_MoFVSS_stFrz_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFVSS_stFrz | MoFVSS_stFrzVSS | 12 | 22,2C | - | - |
| MoFVSS_stQualifierDes | 0x52CC | STAT_MoFVSS_stQualifierDes_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFVSS_stQualifierDes | MoFVSS_stQualifierDes | 12 | 22,2C | - | - |
| MoFVSS_vAccMon | 0x52BC | STAT_MoFVSS_vAccMon_WERT | unsigned int | - | km/h | - | 0.010000 | - | 0.000000 | MoFVSS_vAccMon | Fahrzeuggeschwindigkeit mit berechnetem Ersatzwert bei Fehler in der Funktionsüberwachung | 12 | 22,2C | - | - |
| MoFVehAcc_st | 0x52B9 | STAT_MoFVehAcc_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | MoFVehAcc_st | Bitcodierter Status der Beschleunigungsüberwachung in der Funktionsüberwachung | 12 | 22,2C | - | - |
| Mo_ctRst | 0x527A | STAT_Mo_ctRst_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Mo_ctRst | Reset Zähler für den Pre-ICO Reset | 12 | 22,2C | - | - |
| Mo_stICOMsg | 0x527B | STAT_Mo_stICOMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Mo_stICOMsg | Einspritzmengenbegrenzungs-Anforderung der Steuergeräte Überwachung | 12 | 22,2C | - | - |
| Mo_stIrvErrReacMsg | 0x527C | STAT_Mo_stIrvErrReacMsg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Mo_stIrvErrReacMsg | Status ob EMB oder irrev. CAN-Fehler vorliegt | 12 | 22,2C | - | - |
| Mo_stMoC | 0x527D | STAT_Mo_stMoC_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Mo_stMoC | Statusbit für Anfrage einer Fehlerreaktion der Funktionsrechnerüberwachung | 12 | 22,2C | - | - |
| Mo_stMoF | 0x527E | STAT_Mo_stMoF_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Mo_stMoF | Statusbit für Anfrage einer Fehlerreaktion der Funktionsüberwachung | 12 | 22,2C | - | - |
| Msa_prailstz1 | 0x58AC | STAT_Msa_prailstz1_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Msa_prailstz1 | Zähler MSA-Start beim Raildruck im 1. Bereich | 12 | 22,2C | - | - |
| Msa_prailstz2 | 0x58AD | STAT_Msa_prailstz2_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Msa_prailstz2 | Zähler MSA-Start beim Raildruck im 2. Bereich | 12 | 22,2C | - | - |
| Msa_prailstz3 | 0x58AE | STAT_Msa_prailstz3_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Msa_prailstz3 | Zähler MSA-Start beim Raildruck im 3. Bereich | 12 | 22,2C | - | - |
| NSCDs_rLam | 0x4B64 | STAT_NSCDs_rLam_WERT | unsigned int | - | - | - | 0.000488 | - | 0.000000 | NSCDs_rLam | Lambdawert nach NSC | 12 | 22,2C | - | - |
| NSCLd_mNOxFld_0 | 0x4B73 | STAT_NSCLd_mNOxFld_0_WERT | unsigned long | - | g | - | 0.000015 | - | 0.000000 | NSCLd_mNOxFld_0 | NOx-Beladung des NSC (aus Modell) 0 | 12 | 22,2C | - | - |
| NSCLd_mNOxFld_1 | 0x4B74 | STAT_NSCLd_mNOxFld_1_WERT | unsigned long | - | g | - | 0.000015 | - | 0.000000 | NSCLd_mNOxFld_1 | NOx-Beladung des NSC (aus Modell) 1 | 12 | 22,2C | - | - |
| NSCLd_mNOxFld_2 | 0x4B75 | STAT_NSCLd_mNOxFld_2_WERT | unsigned long | - | g | - | 0.000015 | - | 0.000000 | NSCLd_mNOxFld_2 | NOx-Beladung des NSC (aus Modell) 2 | 12 | 22,2C | - | - |
| NSCLd_mSOxFld_0 | 0x4B76 | STAT_NSCLd_mSOxFld_0_WERT | unsigned long | - | g | - | 0.000015 | - | 0.000000 | NSCLd_mSOxFld_0 | SOx-Beladung des NSC (aus Modell) 0 | 12 | 22,2C | - | - |
| NSCLd_mSOxFld_1 | 0x4B77 | STAT_NSCLd_mSOxFld_1_WERT | unsigned long | - | g | - | 0.000015 | - | 0.000000 | NSCLd_mSOxFld_1 | SOx-Beladung des NSC (aus Modell) 1 | 12 | 22,2C | - | - |
| NSCLd_mSOxFld_2 | 0x4B78 | STAT_NSCLd_mSOxFld_2_WERT | unsigned long | - | g | - | 0.000015 | - | 0.000000 | NSCLd_mSOxFld_2 | SOx-Beladung des NSC (aus Modell) 2 | 12 | 22,2C | - | - |
| NSCLd_mSOxTot_mp | 0x4B66 | STAT_NSCLd_mSOxTot_mp_WERT | unsigned int | - | g | - | 0.001000 | - | 0.000000 | NSCLd_mSOxTot_mp | Gesamte Schwefelmasse | 12 | 22,2C | - | - |
| NSCMon_mRdcCons_mp | 0x4B69 | STAT_NSCMon_mRdcCons_mp_WERT | unsigned int | - | g | - | 0.001000 | - | 0.000000 | NSCMon_mRdcCons_mp | Reduktionsmittelverbrauch seit der letzten NSC Regeneration | 12 | 22,2C | - | - |
| NSCMon_mRdcSlip_mp | 0x4B68 | STAT_NSCMon_mRdcSlip_mp_WERT | unsigned int | - | g | - | 0.001000 | - | 0.000000 | NSCMon_mRdcSlip_mp | Reduktionsmittel-Schlupf seit der letzten NSC Regeneration | 12 | 22,2C | - | - |
| NSCRgn_mNOxTot_mp | 0x4B6B | STAT_NSCRgn_mNOxTot_mp_WERT | unsigned long | - | g | - | 0.000010 | - | 0.000000 | NSCRgn_mNOxTot_mp | gesamte NOx-Beladungsmasse des NSC | 12 | 22,2C | - | - |
| NSCRgn_tiDNOx | 0x4B71 | STAT_NSCRgn_tiDNOx_WERT | unsigned long | - | s | - | 0.000100 | - | 0.000000 | NSCRgn_tiDNOx | Betriebszeit im DeNOx-Betrieb | 12 | 22,2C | - | - |
| NSCRgn_tiDSOx | 0x4B6F | STAT_NSCRgn_tiDSOx_WERT | unsigned long | - | s | - | 0.000100 | - | 0.000000 | NSCRgn_tiDSOx | Zeit im DSOx-Betrieb | 12 | 22,2C | - | - |
| NSCRgn_tiHtg | 0x4B6D | STAT_NSCRgn_tiHtg_WERT | unsigned long | - | s | - | 0.000100 | - | 0.000000 | NSCRgn_tiHtg | Zeit des Heizbetriebes | 12 | 22,2C | - | - |
| NSCUs_rLam | 0x4B65 | STAT_NSCUs_rLam_WERT | unsigned int | - | - | - | 0.000488 | - | 0.000000 | NSCUs_rLam | Lambdawert vor NSC | 12 | 22,2C | - | - |
| Nkw | 0x427F | STAT_Nkw_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | Nkw | Motordrehzahl an der Kurbelwelle | 12 | 22,2C | - | - |
| OBD_PID01_DSMRdy_xPId1 | 0x5201 | STAT_DSMRdy_xPId1_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | OBD_PID01_DSMRdy_xPId1 | Anzahl bestätigter DTCs und MIL Status | 12 | 22,2C | - | - |
| OBD_PID04_CoETS_rTrq | 0x5204 | STAT_CoETS_rTrq_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | OBD_PID04_CoETS_rTrq | berechneter Lastwert | 12 | 22,2C | - | - |
| OBD_PID05_CEngDsT_tSens | 0x5205 | STAT_CEngDsT_tSens_WERT | unsigned char | - | degC | - | 1.000000 | - | -40.000000 | OBD_PID05_CEngDsT_tSens | Kühlmitteltemperatur (Sensorwert vor der Korrektur) | 12 | 22,2C | - | - |
| OBD_PID0B_Air_pSensPIntkVUs | 0x520B | STAT_Air_pSensPIntkVUs_WERT | unsigned char | - | kPa | - | 1.000000 | - | 0.000000 | OBD_PID0B_Air_pSensPIntkVUs | Ladedruck (Sensorwert vor der Korrektur) | 12 | 22,2C | - | - |
| OBD_PID0C_Epm_nEngRaw | 0x520C | STAT_Epm_nEngRaw_WERT | unsigned int | - | rpm | - | 0.250000 | - | 0.000000 | OBD_PID0C_Epm_nEngRaw | Motordrehzahl - Rohwert vor der Korrektur für OBD Tester | 12 | 22,2C | - | - |
| OBD_PID0D_VehV_vSens | 0x520D | STAT_VehV_v_WERT | unsigned char | - | km/h | - | 1.000000 | - | 0.000000 | OBD_PID0D_VehV_vSens | Fahrzeuggeschwindigkeit | 12 | 22,2C | - | - |
| OBD_PID0F_Air_tSensTAFS | 0x520F | STAT_Air_tSensTCACDs_WERT | unsigned char | - | degC | - | 1.000000 | - | -40.000000 | OBD_PID0F_Air_tSensTAFS | Ansauglufttemperatur | 12 | 22,2C | - | - |
| OBD_PID10_AFS_dmSens | 0x5210 | STAT_AFS_dmSens_WERT | unsigned int | - | g/s | - | 0.010000 | - | 0.000000 | OBD_PID10_AFS_dmSens | Luftmasse von HFM | 12 | 22,2C | - | - |
| OBD_PID11_ThrVlv_rNrm | 0x5211 | STAT_ThrVlv_rNrm_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | OBD_PID11_ThrVlv_rNrm | absolute throttle position | 12 | 22,2C | - | - |
| OBD_PID1C_I15031_PID1C | 0x521C | STAT_I15031_PID1C_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | OBD_PID1C_I15031_PID1C | OBD Zulassung des Fahrzeugs | 12 | 22,2C | - | - |
| OBD_PID1D_I15031_PID1D | 0x521D | STAT_I15031_PID1D_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | OBD_PID1D_I15031_PID1D | Position der Lambdasonde(n) | 12 | 22,2C | - | - |
| OBD_PID1F_CoEng_tiNormal | 0x521F | STAT_CoEng_tiNormal_WERT | unsigned int | - | s | - | 1.000000 | - | 0.000000 | OBD_PID1F_CoEng_tiNormal | Betriebsdauer seit letztem Motorstart | 12 | 22,2C | - | - |
| OBD_PID23_RailP_pLin | 0x5223 | STAT_RailP_pLin_WERT | unsigned int | - | bar | - | 0.100000 | - | 0.000000 | OBD_PID23_RailP_pLin | Raildruck (linearisiert) | 12 | 22,2C | - | - |
| OBD_PID24_LSU_rLamPID_uO2Raw_AB | 0x5224 | STAT_LSU_rLam_WERT | unsigned int | - | - | - | 0.000031 | - | 0.000000 | OBD_PID24_LSU_rLamPID_uO2Raw_AB | Lambdasensor Signal - Equivalence Ratio Bank 1 - Sensor 1 | 12 | 22,2C | - | - |
| OBD_PID2C_EGRVlv_r | 0x522C | STAT_EGRVlv_r_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | OBD_PID2C_EGRVlv_r | Ausgangstastverhältnis - Abgasrückführregelventil | 12 | 22,2C | - | - |
| OBD_PID2D_EGRVlv_rGovDvtRel | 0x522D | STAT_AirCtl_rGovDvtNrm_WERT | unsigned char | - | % | - | 0.781255 | - | -100.000000 | OBD_PID2D_EGRVlv_rGovDvtRel | Abgasrückführregler - Regelabweichung | 12 | 22,2C | - | - |
| OBD_PID30_DSMAUX_ctWUC | 0x5230 | STAT_DSMAUX_ctWUC_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | OBD_PID30_DSMAUX_ctWUC | Anzahl der Warm-ups seit Löschen der DTCs | 12 | 22,2C | - | - |
| OBD_PID33_EnvP_pSens | 0x5233 | STAT_EnvP_pSens_WERT | unsigned char | - | kPa | - | 1.000000 | - | 0.000000 | OBD_PID33_EnvP_pSens | Umgebungsdruck (Sensorwert vor der Korrektur) | 12 | 22,2C | - | - |
| OBD_PID3C_Exh_tSensTOxiCatUs | 0x523C | STAT_Exh_tSensTPFltUs_WERT | unsigned int | - | degC | - | 0.100000 | - | -40.000000 | OBD_PID3C_Exh_tSensTOxiCatUs | Catalyst Temperature Bank 1, Sensor 1 | 12 | 22,2C | - | - |
| OBD_PID3E_Exh_tSensTPFltUs | 0x523E | STAT_Exh_tSensTPFltUs_WERT | unsigned int | - | degC | - | 0.100000 | - | -40.000000 | OBD_PID3E_Exh_tSensTPFltUs | Catalyst Temperature Bank 1, Sensor 2 | 12 | 22,2C | - | - |
| OBD_PID41_DSMRdy_xPId41 | 0x5241 | STAT_DSMRdy_xPId41_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | OBD_PID41_DSMRdy_xPId41 | monitor status since last engine shut off | 12 | 22,2C | - | - |
| IUBAT | 0x5242 | STAT_UBATT_WERT | unsigned int | - | Volt | - | 0.001000 | - | 0.000000 | OBD_PID42_BattU_uSens | Batteriespannung (Sensorwert vor der Korrektur) | 12 | 22,2C | - | - |
| OBD_PID45_ThrVlv_rAct | 0x5245 | STAT_ThrVlv_rAct_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | OBD_PID45_ThrVlv_rAct | Tastverhältnis - Drosselklappe | 12 | 22,2C | - | - |
| OBD_PID46_EnvT_tSens | 0x5246 | STAT_EnvT_tSens_WERT | unsigned char | - | degC | - | 1.000000 | - | -40.000000 | OBD_PID46_EnvT_tSens | Umgebungstemperatur | 12 | 22,2C | - | - |
| OBD_PID49_APP_rUnFlt | 0x5249 | STAT_APP_rUnFlt_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | OBD_PID49_APP_rUnFlt | Pedalwertgeber - ungefiltertes Signal | 12 | 22,2C | - | - |
| OBD_PID4A_APP_uRaw2 | 0x524A | STAT_APP_uRaw2_WERT | unsigned char | - | Volt | - | 0.392157 | - | 0.000000 | OBD_PID4A_APP_uRaw2 | Pedalwertgeber - Rohspannung von Sensor 2 | 12 | 22,2C | - | - |
| OBD_PID4C_ThrVlv_r | 0x524C | STAT_ThrVlv_r_WERT | unsigned char | - | % | - | 0.392157 | - | 0.000000 | OBD_PID4C_ThrVlv_r | Solltastverhältnis - Drosselklappe | 12 | 22,2C | - | - |
| ISOED | 0x4B61 | STAT_OELDRUCKSCHALTER_EIN_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | OilPLmp_st | Digitalausgang zum Öllampensteller nach der Diagnose | 12 | 22,2C | - | - |
| Oil_stPSwmp | 0x4B62 | STAT_Oil_stPSwmp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Oil_stPSwmp | Status des Öldrucks | 12 | 22,2C | - | - |
| ITOEL | 0x4B60 | STAT_MOTOROEL_TEMPERATUR_WERT | unsigned int | - | degC | - | 0.010000 | - | -100.000000 | Oil_tSwmp | Öltemperatur | 12 | 22,2C | - | - |
| OxiCat_facHCCnvRat | 0x448E | STAT_OxiCat_facHCCnvRat_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | OxiCat_facHCCnvRat | HC-Konvertierungsrate | 12 | 22,2C | - | - |
| Oz_kvbmw | 0x4518 | STAT_Oz_kvbmw_WERT | unsigned long | - | ul | - | 0.000122 | - | 0.000000 | Oz_kvbmw | Mittelwert des Kraftstoffverbrauchs | 12 | 22,2C | - | - |
| Oz_kvbog | 0x4519 | STAT_Oz_kvbog_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Oz_kvbog | zugeteilte Bonuskraftstoffmenge | 12 | 22,2C | - | - |
| Oz_kvbsm | 0x451A | STAT_Oz_kvbsm_WERT | unsigned long | - | ul | - | 0.000122 | - | 0.000000 | Oz_kvbsm | Verbrauchte Kraftstoffmenge | 12 | 22,2C | - | - |
| Oz_kvbsm_ul | 0x451B | STAT_Oz_kvbsm_ul_WERT | unsigned long | - | ul | - | 0.000122 | - | 0.000000 | Oz_kvbsm_ul | Aufsummierte Kraftstoffmenge | 12 | 22,2C | - | - |
| Oz_lf1c | 0x451C | STAT_Oz_lf1c_WERT | unsigned char | - | - | - | 0.010000 | - | 0.000000 | Oz_lf1c | Länderfaktor 1 codiert | 12 | 22,2C | - | - |
| Oz_lf2c | 0x451D | STAT_Oz_lf2c_WERT | unsigned char | - | - | - | 0.010000 | - | 0.000000 | Oz_lf2c | Länderfaktor 2 codiert | 12 | 22,2C | - | - |
| Oz_lp | 0x451E | STAT_Oz_lp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Oz_lp | Bild Ölstandsanzeige | 12 | 22,2C | - | - |
| Oz_lv | 0x451F | STAT_Oz_lv_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Oz_lv | Oz Niveauwert | 12 | 22,2C | - | - |
| IFSOE | 0x4523 | STAT_FUELLSTAND_MOTOROEL_KURZZEIT_WERT | unsigned char | - | - | - | 0.292969 | - | 0.000000 | Oz_nivkrzt | Kurzmittelwert-Niveau für den Tester | 12 | 22,2C | - | - |
| Oz_nivlangt | 0x4521 | STAT_Oz_nivlangt_WERT | unsigned char | - | - | - | 0.292969 | - | 0.000000 | Oz_nivlangt | Langmittelwert-Niveau für den Tester | 12 | 22,2C | - | - |
| Oz_oelkm | 0x4520 | STAT_Oz_oelkm_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | Oz_oelkm | Ölkilometer | 12 | 22,2C | - | - |
| Oz_orikor | 0x4522 | STAT_Oz_orikor_WERT | unsigned char | - | - | - | 0.292969 | - | 0.000000 | Oz_orikor | OriMw korrigiert | 12 | 22,2C | - | - |
| Oz_tempf | 0x4517 | STAT_Oz_tempf_WERT | unsigned int | - | degC | - | 0.010000 | - | -100.000000 | Oz_tempf | gefilterte Öltemperatur | 12 | 22,2C | - | - |
| PCBS_lDistanceOut | 0x4C78 | STAT_PCBS_lDistanceOut_WERT | unsigned int | - | km | - | 10.000000 | - | 0.000000 | PCBS_lDistanceOut | Restlaufstrecke für Partikelfilter (von CBS berechnet) | 12 | 22,2C | - | - |
| PCBS_lSumDPFChng | 0x4C79 | STAT_PCBS_lSumDPFChng_WERT | unsigned long | - | km | - | 10.000000 | - | 0.000000 | PCBS_lSumDPFChng | zurückgelegte Wegstrecke seit letztem Partikelfiltertausch (von CBS berechnet) | 12 | 22,2C | - | - |
| PCR_pDesBasLP_mp | 0x42CC | STAT_PCR_pDesBasLP_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PCR_pDesBasLP_mp | Basis-Ladedruck-Sollwert (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_pDesBas_mp | 0x42CB | STAT_PCR_pDesBas_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PCR_pDesBas_mp | Basis-Ladedruck-Sollwert | 12 | 22,2C | - | - |
| SPLAD | 0x42C8 | STAT_LADEDRUCK_SOLL_WERT | unsigned int | - | hPa | - | 0.091554 | - | 0.000000 | PCR_pDesVal | Ladedruck-Sollwert | 12 | 22,2C | - | - |
| PCR_pDesValLP | 0x42CA | STAT_PCR_pDesValLP_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PCR_pDesValLP | Ladedruck-Sollwert (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_pGovDvt | 0x42CD | STAT_PCR_pGovDvt_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PCR_pGovDvt | Regelabweichung des Ladedruckreglers | 12 | 22,2C | - | - |
| PCR_pGovDvtLP | 0x42CE | STAT_PCR_pGovDvtLP_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PCR_pGovDvtLP | Regelabweichung des Ladedruckreglers (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_rCtlVal | 0x42D7 | STAT_PCR_rCtlVal_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | PCR_rCtlVal | Ladedruck-Steueranteil der Stellgrösse | 12 | 22,2C | - | - |
| ISLDR | 0x42CF | STAT_STATUS_ABSCHALTUNG_LADEDRUCKREGELUNG_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCR_stMon | aktiver Abschaltfall der Ladedrucküberwachung | 12 | 22,2C | - | - |
| PCR_stMonLP | 0x42D0 | STAT_PCR_stMonLP_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCR_stMonLP | aktiver Abschaltfall der Ladedrucküberwachung (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_stNrmOpLP_mp | 0x42D2 | STAT_PCR_stNrmOpLP_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCR_stNrmOpLP_mp | normaler Betrieb der Ladedruckregelung (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_stNrmOp_mp | 0x42D1 | STAT_PCR_stNrmOp_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCR_stNrmOp_mp | normaler Betrieb der Ladedruckregelung | 12 | 22,2C | - | - |
| PCR_stPCRBits | 0x42D5 | STAT_PCR_stPCRBits_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | PCR_stPCRBits | Abschaltfälle der Ladedruckregelung | 12 | 22,2C | - | - |
| PCR_stPCRBitsLP | 0x42D6 | STAT_PCR_stPCRBitsLP_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | PCR_stPCRBitsLP | Abschaltfälle der Ladedruckregelung (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_stWrkSphLP_mp | 0x42D4 | STAT_PCR_stWrkSphLP_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCR_stWrkSphLP_mp | aktueller Arbeitsbereich der Ladedruckregelung (Niederdruckstufe) | 12 | 22,2C | - | - |
| PCR_stWrkSph_mp | 0x42D3 | STAT_PCR_stWrkSph_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCR_stWrkSph_mp | aktueller Arbeitsbereich der Ladedruckregelung | 12 | 22,2C | - | - |
| PCV_ctAdaptSum_mp | 0x433B | STAT_PCV_ctAdaptSum_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | PCV_ctAdaptSum_mp | Zähler für die Anzahl der Funktionsaufrufe der PCV-Adaption im Zustand PCV_ADAPT_SUM_UP | 12 | 22,2C | - | - |
| PCV_facAdapt | 0x432C | STAT_PCV_facAdapt_WERT | unsigned int | - | - | - | 0.000031 | - | 0.000000 | PCV_facAdapt | Raildruckregelventil-Adaptionsfaktor für die Kennlinie | 12 | 22,2C | - | - |
| PCV_facAdaptFlow | 0x433C | STAT_PCV_facAdaptFlow_WERT | unsigned int | - | - | - | 0.000122 | - | 0.000000 | PCV_facAdaptFlow | Faktor zur Abschaetzung des Durchflusses durch das PCV | 12 | 22,2C | - | - |
| PCV_iActFlt_mp | 0x432D | STAT_PCV_iActFlt_mp_WERT | unsigned int | - | mA | - | 0.061036 | - | 0.000000 | PCV_iActFlt_mp | Raildruckregelventil-Stromsollwert von der Raildruckregelung | 12 | 22,2C | - | - |
| PCV_iActVal | 0x4338 | STAT_PCV_iActVal_WERT | unsigned int | - | mA | - | 0.061036 | - | 0.000000 | PCV_iActVal | Analogeingang Strom-Istwert des Raildruckregelventils | 12 | 22,2C | - | - |
| PCV_iSet | 0x4330 | STAT_PCV_iSet_WERT | unsigned int | - | mA | - | 1.000000 | - | 0.000000 | PCV_iSet | Raildruckregelventil-Sollstrom | 12 | 22,2C | - | - |
| PCV_pAdaptThres_mp | 0x433A | STAT_PCV_pAdaptThres_mp_WERT | unsigned int | - | bar | - | 0.045777 | - | 0.000000 | PCV_pAdaptThres_mp | Raildruckschwelle fuer die Berechnung des Adaptionsfaktors | 12 | 22,2C | - | - |
| PCV_pSet | 0x4331 | STAT_PCV_pSet_WERT | unsigned int | - | bar | - | 0.045777 | - | 0.000000 | PCV_pSet | Raildruckregelventil-Drucksollwert von der Raildruckregelung | 12 | 22,2C | - | - |
| IARDS | 0x432F | STAT_RAILDRUCKREGELVENTIL_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | PCV_rPs | Raildruckregelventil-Ausgangstastverhältnis | 12 | 22,2C | - | - |
| PCV_stActrCtl | 0x4336 | STAT_PCV_stActrCtl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCV_stActrCtl | Raildruckregelventil-Zustand der Stellwertsteuerung | 12 | 22,2C | - | - |
| PCV_stAdapt | 0x4337 | STAT_PCV_stAdapt_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PCV_stAdapt | Status des Statusautomaten der Adaptionsfunktion | 12 | 22,2C | - | - |
| PCV_uRaw_mp | 0x432E | STAT_PCV_uRaw_mp_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | PCV_uRaw_mp | Raildruckregelventil-Solltastverhältnis | 12 | 22,2C | - | - |
| PFltLd_mAshCorOld | 0x44D9 | STAT_PFltLd_mAshCorOld_WERT | unsigned int | - | g | - | 0.015259 | - | 0.000000 | PFltLd_mAshCorOld | Aschekorrekturwert vom vorherigen Zyklus | 12 | 22,2C | - | - |
| IMASOEL | 0x44BD | STAT_OELASCHENMASSE_WERT | unsigned int | - | g | - | 0.015259 | - | 0.000000 | PFltLd_mAshOilEG | Ölaschemasse | 12 | 22,2C | - | - |
| IMRUP | 0x44BE | STAT_RUSSMASSE_IM_PARTIKELFILTER_WERT | unsigned int | - | g | - | 0.015259 | - | 0.000000 | PFltLd_mSot | Rußmasse | 12 | 22,2C | - | - |
| PFltLd_mSotMeas | 0x44B9 | STAT_PFltLd_mSotMeas_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFltLd_mSotMeas | Partikelmasse additiv korrigiert | 12 | 22,2C | - | - |
| IMPAS | 0x44C1 | STAT_PARTIKELMASSE_SIMULIERT_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFltLd_mSotSim | simulierte Rußmasse | 12 | 22,2C | - | - |
| PFltLd_mSotSimCont | 0x44BA | STAT_PFltLd_mSotSimCont_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFltLd_mSotSimCont | kontinuierlich simulierte Partikelmasse | 12 | 22,2C | - | - |
| IWSTG | 0x44C5 | STAT_STROEMUNGSWIDERSTAND_GEFILTERT_WERT | unsigned int | - | hPa/(m^3/h) | - | 0.000100 | - | 0.000000 | PFltLd_resFlwFlt | Gefilterter Strömungswiderstand des Partikelfilters | 12 | 22,2C | - | - |
| PFltRgn_ctRgnSucEEP_mp | 0x44B8 | STAT_PFltRgn_ctRgnSucEEP_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | PFltRgn_ctRgnSucEEP_mp | Anzahl erfolgreicher Partikelfilterregenerationen | 12 | 22,2C | - | - |
| IDSVP | 0x44D6 | STAT_DURCHSCHNITT_VERBRAUCH_PRO100KM_WERT | unsigned int | - | l/100km | - | 0.050000 | - | 0.000000 | PFltRgn_dqFlAvrg_mp | durchschnittlicher Verbrauch des Fahrzeuges seit letztem DPF Tausch | 12 | 22,2C | - | - |
| IDSLRE | 0x44BF | STAT_STRECKE_SEIT_ERFOLGREICHER_REGENERATION_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | PFltRgn_lSnceRgn | gefahrene Strecke seit der letzten erfolgreichen Regeneration | 12 | 22,2C | - | - |
| IKMRE0 | 0x44D1 | STAT_KM_STAND_SEIT_1_ERFOLGREICHEN_REGENERATIONEN_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | PFltRgn_lSumRgnBck0_mp | Fahrzeugkilometerstand bei der letzten Regeneration | 12 | 22,2C | - | - |
| IKMRE1 | 0x44D2 | STAT_KM_STAND_SEIT_2_ERFOLGREICHEN_REGENERATIONEN_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | PFltRgn_lSumRgnBck1_mp | Fahrzeugkilometerstand bei der vorletzten Regeneration | 12 | 22,2C | - | - |
| IKMRE2 | 0x44D3 | STAT_KM_STAND_SEIT_3_ERFOLGREICHEN_REGENERATIONEN_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | PFltRgn_lSumRgnBck2_mp | Fahrzeugkilometerstand bei der drittletzten Regeneration | 12 | 22,2C | - | - |
| IKMRE3 | 0x44D4 | STAT_KM_STAND_SEIT_4_ERFOLGREICHEN_REGENERATIONEN_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | PFltRgn_lSumRgnBck3_mp | Fahrzeugkilometerstand bei der viertletzten Regeneration | 12 | 22,2C | - | - |
| IKMRE4 | 0x44D5 | STAT_KM_STAND_SEIT_5_ERFOLGREICHEN_REGENERATIONEN_WERT | unsigned long | - | m | - | 1.000000 | - | 0.000000 | PFltRgn_lSumRgnBck4_mp | Fahrzeugkilometerstand bei der fünftletzten Regeneration | 12 | 22,2C | - | - |
| PFltRgn_numRgn | 0x44BB | STAT_PFltRgn_numRgn_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFltRgn_numRgn | Status - Regenerationsanforderung | 12 | 22,2C | - | - |
| IVTLR | 0x44BC | STAT_KRAFTSTOFFVERBRAUCH_SEIT_ERFOLGREICHER_REGENER_WERT | unsigned int | - | l | - | 0.010000 | - | 0.000000 | PFltRgn_qFl_mp | verbrauchte Kraftstoffmenge seit letzter erfolgreicher Regeneration | 12 | 22,2C | - | - |
| ISREU | 0x44C0 | STAT_STATUS_REGENERATION_UNTERBROCHEN_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | PFltRgn_stIntr | Status - Regenerationsunterbrechung | 12 | 22,2C | - | - |
| ISRBF | 0x44C2 | STAT_REGENERATION_BLOCKIERUNG_UND_FREIGABE_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFltRgn_stLck | Status - Regenerationssperre | 12 | 22,2C | - | - |
| PFltRgn_tiSnceRgn | 0x44B7 | STAT_PFltRgn_tiSnceRgn_WERT | unsigned long | - | s | - | 1.000000 | - | 0.000000 | PFltRgn_tiSnceRgn | Betriebsdauer seit der letzten erfolgreichen Regeneration | 12 | 22,2C | - | - |
| PFltRgn_vAvrgSnceRgn_mp | 0x452D | STAT_PFltRgn_vAvrgSnceRgn_mp_WERT | unsigned int | - | km/h | - | 0.003815 | - | 0.000000 | PFltRgn_vAvrgSnceRgn_mp | Durchschnittsgeschwindigkeit seit der letzten erfolgreichen Regeneration | 12 | 22,2C | - | - |
| PFlt_ctRgnStep1_mp | 0x44C9 | STAT_PFlt_ctRgnStep1_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep1_mp | Regenerationszähler Typ 1 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep2_mp | 0x44CA | STAT_PFlt_ctRgnStep2_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep2_mp | Regenerationszähler Typ 2 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep3_mp | 0x44CB | STAT_PFlt_ctRgnStep3_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep3_mp | Regenerationszähler Typ 3 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep4_mp | 0x44CC | STAT_PFlt_ctRgnStep4_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep4_mp | Regenerationszähler Typ 4 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep5_mp | 0x44CD | STAT_PFlt_ctRgnStep5_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep5_mp | Regenerationszähler Typ 5 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep6_mp | 0x44CE | STAT_PFlt_ctRgnStep6_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep6_mp | Regenerationszähler Typ 6 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep7_mp | 0x44CF | STAT_PFlt_ctRgnStep7_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep7_mp | Regenerationszähler Typ 7 | 12 | 22,2C | - | - |
| PFlt_ctRgnStep8_mp | 0x44D0 | STAT_PFlt_ctRgnStep8_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_ctRgnStep8_mp | Regenerationszähler Typ 8 | 12 | 22,2C | - | - |
| PFlt_dvolMaxSty_mp | 0x44B6 | STAT_PFlt_dvolMaxSty_mp_WERT | unsigned int | - | m^3/h | - | 0.100000 | - | 0.000000 | PFlt_dvolMaxSty_mp | Maximaler stationärer Abgasvolumenstrom zur Überprüfung des maximalen Differenzdrucks im Nachlauf | 12 | 22,2C | - | - |
| IKMZWREG | 0x44C7 | STAT_DURCHSCHNITT_KILOMETER_ZWISCHEN_REGENERATIONEN_WERT | unsigned int | - | km | - | 20.000000 | - | 0.000000 | PFlt_lAvrgRgn | durchschnittliches Regenerationsintervall | 12 | 22,2C | - | - |
| PFlt_mSotMeasNoCompl_mp | 0x44AC | STAT_PFlt_mSotMeasNoCompl_mp_WERT | unsigned int | - | g | - | 0.100000 | - | 0.000000 | PFlt_mSotMeasNoCompl_mp | gemessene Rußmasse | 12 | 22,2C | - | - |
| PFlt_mSotNoComplMax_mp | 0x44B5 | STAT_PFlt_mSotNoComplMax_mp_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFlt_mSotNoComplMax_mp | Kennfeld zur Bestimmung Überwachungsgrenze | 12 | 22,2C | - | - |
| PFlt_mSotSumMeasActEffFlt_mp | 0x44B3 | STAT_PFlt_mSotSumMeasActEffFlt_mp_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFlt_mSotSumMeasActEffFlt_mp | Rußmassenintegral des gemessen Werts | 12 | 22,2C | - | - |
| PFlt_mSotSumMeasActEff_mp | 0x44B4 | STAT_PFlt_mSotSumMeasActEff_mp_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFlt_mSotSumMeasActEff_mp | Rußmassenintegral des gemessen Werts (gefiltert) | 12 | 22,2C | - | - |
| PFlt_mSotSumMeasFlt_mp | 0x44D8 | STAT_PFlt_mSotSumMeasFlt_mp_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFlt_mSotSumMeasFlt_mp | digital gefilterter Wert der gemessenen Rußmasse | 12 | 22,2C | - | - |
| PFlt_mSotSumSimActEff_mp | 0x44B2 | STAT_PFlt_mSotSumSimActEff_mp_WERT | unsigned int | - | g | - | 0.010000 | - | 0.000000 | PFlt_mSotSumSimActEff_mp | Ergebnis der Summation des simulierten Wertes | 12 | 22,2C | - | - |
| PFlt_pDiffCharMonMin_mp | 0x44B1 | STAT_PFlt_pDiffCharMonMin_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PFlt_pDiffCharMonMin_mp | Untere Grenze der Überwachung der DPF-Charakteristik mit Hilfe des Differenzdruck | 12 | 22,2C | - | - |
| PFlt_pDiffMaxStyOfsCor_mp | 0x44AB | STAT_PFlt_pDiffMaxStyOfsCor_mp_WERT | unsigned int | - | hPa | - | 0.039673 | - | -600.000000 | PFlt_pDiffMaxStyOfsCor_mp | Stationäre Maximalwerte des Differenzdrucks nach Offset-Korrektur | 12 | 22,2C | - | - |
| PFlt_pDiffMaxSty_mp | 0x44B0 | STAT_PFlt_pDiffMaxSty_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PFlt_pDiffMaxSty_mp | Stationäre Maximalwerte des Differenzdrucks | 12 | 22,2C | - | - |
| PFlt_pDiffNoDstrMin_mp | 0x44AF | STAT_PFlt_pDiffNoDstrMin_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PFlt_pDiffNoDstrMin_mp | Von stationärem Abgasvolumenstrom abhängiger minimaler Differenzdruck in Nachlauf zur Unterstellung eines zerstörten Partikelfilters | 12 | 22,2C | - | - |
| PFlt_pPreCorr_mp | 0x44C4 | STAT_PFlt_pPreCorr_mp_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | PFlt_pPreCorr_mp | Abgasgegendruck vor Partikelfilter - korrigiert | 12 | 22,2C | - | - |
| PFlt_rEngPrtRgn_mp | 0x44AE | STAT_PFlt_rEngPrtRgn_mp_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | PFlt_rEngPrtRgn_mp | Motorschutz Regenerationsverhältnis der Aufgabezeit und letzter Regenerationszeit | 12 | 22,2C | - | - |
| PFlt_stPresPlaus_mp | 0x44C3 | STAT_PFlt_stPresPlaus_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PFlt_stPresPlaus_mp | Status - Betriebsbereich für die Partikelfilterdruckplausibilisierung | 12 | 22,2C | - | - |
| PFlt_tPFltUsEff_mp | 0x44AD | STAT_PFlt_tPFltUsEff_mp_WERT | unsigned int | - | degC | - | 0.100000 | - | -273.140000 | PFlt_tPFltUsEff_mp | Für die Bedingungsabfrage notwendigen Temperaturen vor Partikelfilter | 12 | 22,2C | - | - |
| PSP_dvolOut | 0x43E4 | STAT_PSP_dvolOut_WERT | unsigned int | - | l/h | - | 0.003891 | - | 0.000000 | PSP_dvolOut | Vorfördermenge | 12 | 22,2C | - | - |
| IGETT | 0x4ACC | STAT_GETRIEBETYP_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | PT_stTraType | Aktueller Getriebetyp | 12 | 22,2C | - | - |
| IPBUS | 0x516E | STAT_BREMSUNTERDRUCK_WERT | unsigned int | - | hPa | - | 1.000000 | - | 0.000000 | Pbremsu | Bremskraftverstärkerunterdruck | 12 | 22,2C | - | - |
| Pr_bn_soll | 0x4293 | STAT_Pr_bn_soll_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Pr_bn_soll | Sollpriorität | 12 | 22,2C | - | - |
| Ptc_pwr | 0x4F48 | STAT_Ptc_pwr_WERT | unsigned char | - | % | - | 0.500000 | - | 0.000000 | Ptc_pwr | Maximal erlaubte Zuheizerleistung | 12 | 22,2C | - | - |
| PthSet_trqInrSet | 0x47A1 | STAT_PthSet_trqInrSet_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | PthSet_trqInrSet | Inneres Moment für den Set-Pfad nach der Überwachungsbegrenzung | 12 | 22,2C | - | - |
| QWC_tiPiI1MI1_mp | 0x4598 | STAT_QWC_tiPiI1MI1_mp_WERT | unsigned int | - | us | - | 0.400000 | - | 0.000000 | QWC_tiPiI1MI1_mp | Zeitabstand Ende PiI1 bis Beginn MI1 | 12 | 22,2C | - | - |
| Q_iruhe2 | 0x427D | STAT_Q_iruhe2_WERT | unsigned int | - | Ah | - | 0.018200 | - | 0.000000 | Q_iruhe2 | Entlademenge während Zeit mit erhöhtem Ruhestrom | 12 | 22,2C | - | - |
| Qv_h2o_zg | 0x4614 | STAT_QV_H2O_ZG_WERT | unsigned long | - | g/Ah | - | 0.000000 | - | 0.000000 | Qv_h2o_zg | Layergrösse Qv_h2o_zg | 12 | 22,2C | - | - |
| RailP_ctGradExcd_mp | 0x474C | STAT_RailP_ctGradExcd_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | RailP_ctGradExcd_mp | Anzahl detektierter Drucksprünge | 12 | 22,2C | - | - |
| RailP_pCurr | 0x4748 | STAT_RailP_pCurr_mp_WERT | unsigned int | - | bar | - | 0.045777 | - | 0.000000 | RailP_pCurr | Raildruck - Istwert | 12 | 22,2C | - | - |
| IPRDR | 0x4746 | STAT_RAILDRUCK_WERT | unsigned int | - | bar | - | 0.045777 | - | 0.000000 | RailP_pFlt | maximaler Raildruck der letzten 10ms | 12 | 22,2C | - | - |
| RailP_pLin | 0x4749 | STAT_RailP_pLin_WERT | unsigned int | - | bar | - | 0.100000 | - | 0.000000 | RailP_pLin | linearisierter Wert des Kraftstoffdrucksensors | 12 | 22,2C | - | - |
| RailP_stGrad | 0x474B | STAT_RailP_stGrad_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | RailP_stGrad | Status des Gradiententests | 12 | 22,2C | - | - |
| IURDR | 0x4747 | STAT_RAILDRUCK_SPANNUNG_ROH_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | RailP_uRaw | Raildruck - Spannungsrohwert von Sensor | 12 | 22,2C | - | - |
| Rail_dvolPreCtl | 0x4716 | STAT_Rail_dvolPreCtl_WERT | unsigned int | - | mm3/s | - | 10.000000 | - | 0.000000 | Rail_dvolPreCtl | Mengenregelventil-Vorsteuerwert für die Druckregelung | 12 | 22,2C | - | - |
| Rail_pDvt | 0x4718 | STAT_Rail_pDvt_WERT | unsigned int | - | bar | - | 0.100000 | - | 0.000000 | Rail_pDvt | Raildruckregler-Regelabweichung | 12 | 22,2C | - | - |
| SPRDR | 0x4715 | STAT_RAILDRUCK_SOLL_WERT | unsigned int | - | bar | - | 0.045777 | - | 0.000000 | Rail_pSetPoint | Raildruck - Sollwert | 12 | 22,2C | - | - |
| Rail_stCPC | 0x4719 | STAT_Rail_stCPC_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Rail_stCPC | Raildruckregelung-Status des Zustandsautomaten | 12 | 22,2C | - | - |
| ISRDR | 0x4714 | STAT_STATUS_RAILDRUCKREGLER_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Rail_stCtlLoop | Status - Raildruckregelmodus | 12 | 22,2C | - | - |
| Rail_stDwn1HpTst | 0x5970 | STAT_Rail_stDwn1HpTst_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Rail_stDwn1HpTst | Erster Status der Druckabbauphase des Hochdrucktest | 12 | 22,2C | - | - |
| Rail_stDwn2HpTst | 0x5971 | STAT_Rail_stDwn2HpTst_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Rail_stDwn2HpTst | Zweiter Status der Druckabbauphase des Hochdrucktest | 12 | 22,2C | - | - |
| Rail_stDwn3HpTst | 0x5972 | STAT_Rail_stDwn3HpTst_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Rail_stDwn3HpTst | Dritter Status der Druckabbauphase des Hochdrucktest | 12 | 22,2C | - | - |
| ISDH1 | 0x5973 | STAT_STATUS_HPTEST_DRUCKABBAU1 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stDwnHpTst_0 | Status der aktuellen Druckabfallphase des Hochdrucktest für Schritt 1 | 12 | 22,2C | - | - |
| ISDH2 | 0x5974 | STAT_STATUS_HPTEST_DRUCKABBAU2 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stDwnHpTst_1 | Status der aktuellen Druckabfallphase des Hochdrucktest für Schritt 2 | 12 | 22,2C | - | - |
| ISDH3 | 0x5975 | STAT_STATUS_HPTEST_DRUCKABBAU3 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stDwnHpTst_2 | Status der aktuellen Druckabfallphase des Hochdrucktest für Schritt 3 | 12 | 22,2C | - | - |
| ISDH4 | 0x5976 | STAT_STATUS_HPTEST_DRUCKABBAU4 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stDwnHpTst_3 | Status der aktuellen Druckabfallphase des Hochdrucktest für Schritt 4 | 12 | 22,2C | - | - |
| ISDH5 | 0x5977 | STAT_STATUS_HPTEST_DRUCKABBAU5 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stDwnHpTst_4 | Status der aktuellen Druckabfallphase des Hochdrucktest für Schritt 5 | 12 | 22,2C | - | - |
| ISRHT | 0x5978 | STAT_STATUS_BEDINGUNGEN_HPTEST | unsigned int | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stRefHpTst | Status der Betriebsbedingungen des Hochdrucktest | 12 | 22,2C | - | - |
| ISSM0 | 0x5979 | STAT_STATUS_HPTEST0 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stStMHpTst | Status des Hochdrucktest | 12 | 22,2C | - | - |
| ISUH1 | 0x597A | STAT_STATUS_HPTEST_DRUCKAUFBAU1 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stUpHpTst_0 | Array von Status der Druckaufbauphasen des Hochdrucktest für Schritt 1 | 12 | 22,2C | - | - |
| ISUH2 | 0x597B | STAT_STATUS_HPTEST_DRUCKAUFBAU2 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stUpHpTst_1 | Array von Status der Druckaufbauphasen des Hochdrucktest für Schritt 2 | 12 | 22,2C | - | - |
| ISUH3 | 0x597C | STAT_STATUS_HPTEST_DRUCKAUFBAU3 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stUpHpTst_2 | Array von Status der Druckaufbauphasen des Hochdrucktest für Schritt 3 | 12 | 22,2C | - | - |
| ISUH4 | 0x597D | STAT_STATUS_HPTEST_DRUCKAUFBAU4 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stUpHpTst_3 | Array von Status der Druckaufbauphasen des Hochdrucktest für Schritt 4 | 12 | 22,2C | - | - |
| ISUH5 | 0x597E | STAT_STATUS_HPTEST_DRUCKAUFBAU5 | unsigned char | - | 0/1 | - | 1.000000 | - | 0.000000 | Rail_stUpHpTst_4 | Array von Status der Druckaufbauphasen des Hochdrucktest für Schritt 5 | 12 | 22,2C | - | - |
| ITDH1 | 0x597F | STAT_ZEIT_HPTEST_DRUCKABBAU1_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_0 | Array der Druckabbauzeiten des HpTst 0 | 12 | 22,2C | - | - |
| ITDH2 | 0x5980 | STAT_ZEIT_HPTEST_DRUCKABBAU2_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_1 | Array der Druckabbauzeiten des HpTst 1 | 12 | 22,2C | - | - |
| ITDH3 | 0x5981 | STAT_ZEIT_HPTEST_DRUCKABBAU3_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_2 | Array der Druckabbauzeiten des HpTst 2 | 12 | 22,2C | - | - |
| ITDH4 | 0x5982 | STAT_ZEIT_HPTEST_DRUCKABBAU4_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_3 | Array der Druckabbauzeiten des HpTst 3 | 12 | 22,2C | - | - |
| ITDH5 | 0x5983 | STAT_ZEIT_HPTEST_DRUCKABBAU5_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_4 | Array der Druckabbauzeiten des HpTst 4 | 12 | 22,2C | - | - |
| ITDH6 | 0x5984 | STAT_ZEIT_HPTEST_DRUCKABBAU6_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_5 | Array der Druckabbauzeiten des HpTst 5 | 12 | 22,2C | - | - |
| ITDH7 | 0x5985 | STAT_ZEIT_HPTEST_DRUCKABBAU7_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiDwnHpTst_6 | Array der Druckabbauzeiten des HpTst 6 | 12 | 22,2C | - | - |
| ITUH1 | 0x5986 | STAT_ZEIT_HPTEST_DRUCKAUFBAU1_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiUpHpTst_0 | Array von Dauern der Druckaufbauphasen des HpTst 0 | 12 | 22,2C | - | - |
| ITUH2 | 0x5987 | STAT_ZEIT_HPTEST_DRUCKAUFBAU2_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiUpHpTst_1 | Array von Dauern der Druckaufbauphasen des HpTst 1 | 12 | 22,2C | - | - |
| ITUH3 | 0x5988 | STAT_ZEIT_HPTEST_DRUCKAUFBAU3_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiUpHpTst_2 | Array von Dauern der Druckaufbauphasen des HpTst 2 | 12 | 22,2C | - | - |
| ITUH4 | 0x5989 | STAT_ZEIT_HPTEST_DRUCKAUFBAU4_WERT | unsigned int | - | ms | - | 10.000000 | - | 0.000000 | Rail_tiUpHpTst_3 | Array von Dauern der Druckaufbauphasen des HpTst 3 | 12 | 22,2C | - | - |
| Reset_Env_adLoc_mp | 0x577D | STAT_Reset_Env_adLoc_mp_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Reset_Env_adLoc_mp | Reset Information/Adresse an der der letzte Reset ausgelöst wurde | 12 | 22,2C | - | - |
| Reset_Env_xId_mp | 0x577C | STAT_Reset_Env_xId_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_Env_xId_mp | Reset Information/Reset-ID der letzten Resetursache | 12 | 22,2C | - | - |
| Reset_Env_xUserValue | 0x577F | STAT_Reset_Env_xUserValue_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Reset_Env_xUserValue | Env_xUserValue (Recovery - Messgrösse) | 12 | 22,2C | - | - |
| Reset_lSum_1km | 0x5780 | STAT_Reset_lSum_1km_WERT | unsigned long | - | km | - | 1.000000 | - | 0.000000 | Reset_lSum_1km | Kilometerstand (Recovery - Messgrösse mit 1 km normiert) | 12 | 22,2C | - | - |
| Reset_lSum_8km | 0x577B | STAT_Reset_lSum_WERT | unsigned int | - | km | - | 8.000000 | - | 0.000000 | Reset_lSum_8km | Kilometerstand (Auflösung 8 km) | 12 | 22,2C | - | - |
| Reset_mAirPerCyl | 0x577A | STAT_Reset_mAirPerCyl_WERT | unsigned char | - | mg/Hub | - | 6.274510 | - | 0.000000 | Reset_mAirPerCyl | Luftmasse pro Zylinder (Recovery - Messgroesse) | 12 | 22,2C | - | - |
| Reset_nEng | 0x5779 | STAT_Reset_nEng_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | Reset_nEng | Motordrehzahl | 12 | 22,2C | - | - |
| Reset_pFlt | 0x5778 | STAT_Reset_pFlt_WERT | unsigned char | - | bar | - | 7.843137 | - | 0.000000 | Reset_pFlt | maximaler Raildruck (Recovery - Messgroesse) | 12 | 22,2C | - | - |
| Reset_qSetUnBal | 0x5777 | STAT_InjCtl_qSetUnBal_WERT | unsigned char | - | mg/hub | - | 0.392157 | - | 0.000000 | Reset_qSetUnBal | aktuelle Einspritzmenge (Recovery - Messgröße) | 12 | 22,2C | - | - |
| Reset_tEng | 0x5776 | STAT_Reset_tEng_WERT | unsigned char | - | degC | - | 1.000000 | - | -50.000000 | Reset_tEng | Motortemperatur (Recovery - Messgroesse) | 12 | 22,2C | - | - |
| Reset_uBatt | 0x577E | STAT_Reset_uBatt_WERT | unsigned char | - | mV | - | 100.000000 | - | 0.000000 | Reset_uBatt | Batteriespannung (Recovery - Messgroesse) | 12 | 22,2C | - | - |
| Reset_xHistBuf_0 | 0x52BD | STAT_Reset_xHistBuf0_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_0 | Ringspeicher mit den letzten 8 Reset-ID s 0 | 12 | 22,2C | - | - |
| Reset_xHistBuf_1 | 0x52BE | STAT_Reset_xHistBuf1_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_1 | Ringspeicher mit den letzten 8 Reset-ID s 1 | 12 | 22,2C | - | - |
| Reset_xHistBuf_2 | 0x52BF | STAT_Reset_xHistBuf2_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_2 | Ringspeicher mit den letzten 8 Reset-ID s 2 | 12 | 22,2C | - | - |
| Reset_xHistBuf_3 | 0x52C0 | STAT_Reset_xHistBuf3_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_3 | Ringspeicher mit den letzten 8 Reset-ID s 3 | 12 | 22,2C | - | - |
| Reset_xHistBuf_4 | 0x52C1 | STAT_Reset_xHistBuf4_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_4 | Ringspeicher mit den letzten 8 Reset-ID s 4 | 12 | 22,2C | - | - |
| Reset_xHistBuf_5 | 0x52C2 | STAT_Reset_xHistBuf5_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_5 | Ringspeicher mit den letzten 8 Reset-ID s 5 | 12 | 22,2C | - | - |
| Reset_xHistBuf_6 | 0x52C3 | STAT_Reset_xHistBuf6_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_6 | Ringspeicher mit den letzten 8 Reset-ID s 6 | 12 | 22,2C | - | - |
| Reset_xHistBuf_7 | 0x52C4 | STAT_Reset_xHistBuf7_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Reset_xHistBuf_7 | Ringspeicher mit den letzten 8 Reset-ID s 7 | 12 | 22,2C | - | - |
| Rf | 0x4291 | STAT_Rf_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | Rf | relative Füllung | 12 | 22,2C | - | - |
| RngMod_trqFrc | 0x510A | STAT_RngMod_trqFrc_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | RngMod_trqFrc | aktuelles Reibmoment | 12 | 22,2C | - | - |
| SCRT_tAvrg | 0x532E | STAT_SCRT_tAvrg_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | SCRT_tAvrg | Gewichtete mittlere Temperatur des SCR Katalysators | 12 | 22,2C | - | - |
| SCR_tUCatUsT | 0x5308 | STAT_SCR_tUCatUsT_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | SCR_tUCatUsT | Temperatur vor SCR-Katalysator | 12 | 22,2C | - | - |
| SCR_tUTnkT | 0x530A | STAT_SCR_tUTnkT_WERT | unsigned int | - | degC | - | 0.031281 | - | -50.000000 | SCR_tUTnkT | Temperatur der Harnstoff-Wasser-Lösung | 12 | 22,2C | - | - |
| SmkLim_qLimSmk | 0x4796 | STAT_SmkLim_qLimSmk_WERT | unsigned int | - | mg/Hub | - | 0.010000 | - | 0.000000 | SmkLim_qLimSmk | Begrenzungsmenge zur Rauchbegrenzung | 12 | 22,2C | - | - |
| Soc_quali | 0x427B | STAT_Soc_quali_WERT | unsigned int | - | Ah | - | 0.018200 | - | 0.000000 | Soc_quali | Zähler Genauigkeit Ladezustandsbestimmung | 12 | 22,2C | - | - |
| SpdGov_trqSet | 0x4E80 | STAT_SpdGov_trqSet_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | SpdGov_trqSet | Solldrehmoment des SpdGov auf dem Kraftstoffpfad | 12 | 22,2C | - | - |
| StSys_nStrtCutOutMSA_mp | 0x5461 | STAT_StSys_nStrtCutOutMSA_mp_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | StSys_nStrtCutOutMSA_mp | Startabwurfsdrehzahl - abhängig von der Kühlmitteltemperatur und dem Luftdruck | 12 | 22,2C | - | - |
| StSys_nStrtCutOut_mp | 0x5460 | STAT_StSys_nStrtCutOut_mp_WERT | unsigned int | - | rpm | - | 0.091554 | - | 0.000000 | StSys_nStrtCutOut_mp | Startabwurfsdrehzahl - abhängig von der Kühlmitteltemperatur und dem Luftdruck | 12 | 22,2C | - | - |
| StSys_trqStrt | 0x5462 | STAT_StSys_trqStrt_WERT | unsigned int | - | Nm | - | 0.114443 | - | -2500.000000 | StSys_trqStrt | inneres Moment Startwert | 12 | 22,2C | - | - |
| St_dfh0 | 0x4778 | STAT_St_dfh0_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | St_dfh0 | Statuswort - Dieselfilterheizung | 12 | 22,2C | - | - |
| St_dgen1 | 0x427A | STAT_St_dgen1_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | St_dgen1 | Statuswort | 12 | 22,2C | - | - |
| St_gen | 0x4784 | STAT_St_gen_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | St_gen | Generatorstatus | 12 | 22,2C | - | - |
| St_genallg | 0x4786 | STAT_St_genallg_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | St_genallg | Statusbyte Generator allgemein | 12 | 22,2C | - | - |
| St_msaanz | 0x4781 | STAT_St_msaanz_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | St_msaanz | Statuswort - MSA-Anzeige | 12 | 22,2C | - | - |
| St_msaav | 0x477A | STAT_St_msaav_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | St_msaav | Statuswort - AV | 12 | 22,2C | - | - |
| St_msaavd | 0x477D | STAT_St_msaavd_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | St_msaavd | Statuswort - AV | 12 | 22,2C | - | - |
| St_ngang | 0x4782 | STAT_St_ngang_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | St_ngang | Status Nullgangerkennung | 12 | 22,2C | - | - |
| Stat_entl | 0x4292 | STAT_Stat_entl_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Stat_entl | Status - Entladung | 12 | 22,2C | - | - |
| Stat_sv_reg2 | 0x4288 | STAT_Stat_sv_reg2_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Stat_sv_reg2 | Status Standverbraucher 2 registriert | 12 | 22,2C | - | - |
| StbIntv_bDCSIntv | 0x52C5 | STAT_StbIntv_bDCSIntv_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | StbIntv_bDCSIntv | Freigabe für Momentenanforderungen aus der Schleppmomentenregelung (MSR) | 12 | 22,2C | - | - |
| StbIntv_bDCSNeutr | 0x52C6 | STAT_StbIntv_bDCSNeutr_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | StbIntv_bDCSNeutr | Neutralwert für Momentenanforderungen aus der Schleppmomentenregelung (MSR) empfangen | 12 | 22,2C | - | - |
| StbIntv_trqDCSDes | 0x542B | STAT_StbIntv_trqDCSDes_WERT | unsigned long | - | Nm | - | 0.100000 | - | 0.000000 | StbIntv_trqDCSDes | MSR Eingriffsmoment (Radmoment) | 12 | 22,2C | - | - |
| SyC_stMn | 0x542C | STAT_SyC_stMn_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | SyC_stMn | Aktueller System/ECU-Zustand | 12 | 22,2C | - | - |
| SyC_stPostDrv | 0x542D | STAT_SyC_stPostDrv_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | SyC_stPostDrv | Zustand der PostDrive-Steuerung | 12 | 22,2C | - | - |
| SyC_stPreDrv | 0x542E | STAT_SyC_stPreDrv_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | SyC_stPreDrv | Zustand der PreDrive-Steuerung | 12 | 22,2C | - | - |
| SyC_stSub | 0x542A | STAT_SyC_stSub_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | SyC_stSub | Aktueller System/ECU-Unterzustand | 12 | 22,2C | - | - |
| SyC_tiPostDrv | 0x542F | STAT_SyC_tiPostDrv_WERT | unsigned long | - | ms | - | 10.000000 | - | 0.000000 | SyC_tiPostDrv | Zeit seit Erreichen des Zustands SYC_POSTDRIVE | 12 | 22,2C | - | - |
| SyC_tiPreDrv | 0x5430 | STAT_SyC_tiPreDrv_WERT | unsigned long | - | ms | - | 10.000000 | - | 0.000000 | SyC_tiPreDrv | Zeit seit Erreichen des Zustands SYC_PREDRIVE | 12 | 22,2C | - | - |
| RWKUP | 0x4FAC | STAT_WAKEUP_ROH_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | T15_st | entprellter Wert der Klemme 15 | 12 | 22,2C | - | - |
| T15_stRaw | 0x4FAD | STAT_T15_stRaw_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | T15_stRaw | Rohstatus der Klemme 15 nach Entprellung | 12 | 22,2C | - | - |
| T1histiruh | 0x4276 | STAT_T1histiruh_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | T1histiruh | Ruhestromhistogramm Klasse 1 | 12 | 22,2C | - | - |
| T2histiruh | 0x4277 | STAT_T2histiruh_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | T2histiruh | Ruhestromhistogramm Klasse 2 | 12 | 22,2C | - | - |
| T2histshort | 0x4289 | STAT_T2histshort_WERT | unsigned char | - | min | - | 14.933333 | - | 0.000000 | T2histshort | Ruhestromzeit - History 2 | 12 | 22,2C | - | - |
| T3histiruh | 0x4278 | STAT_T3histiruh_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | T3histiruh | Ruhestromhistogramm Klasse 3 | 12 | 22,2C | - | - |
| T3histshort | 0x428A | STAT_T3histshort_WERT | unsigned char | - | min | - | 14.933333 | - | 0.000000 | T3histshort | Ruhestromzeit - History 3 | 12 | 22,2C | - | - |
| T4histiruh | 0x4279 | STAT_T4histiruh_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | T4histiruh | Ruhestromhistogramm Klasse 4 | 12 | 22,2C | - | - |
| T4histshort | 0x428B | STAT_T4histshort_WERT | unsigned char | - | min | - | 14.933333 | - | 0.000000 | T4histshort | Ruhestromzeit - History 4 | 12 | 22,2C | - | - |
| T50_st | 0x4FAE | STAT_T50_st_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | T50_st | Status der Klemme 50 | 12 | 22,2C | - | - |
| TECU_t | 0x490C | STAT_TECU_t_WERT | unsigned int | - | degC | - | 0.007782 | - | -255.000000 | TECU_t | SG-interne Temperatur | 12 | 22,2C | - | - |
| TECU_tSens | 0x490D | STAT_TECU_tSens_WERT | unsigned int | - | degC | - | 0.007782 | - | -255.000000 | TECU_tSens | SG-interne Temperatur (Signal-Rohwert) | 12 | 22,2C | - | - |
| TECU_uRaw | 0x490E | STAT_TECU_uRaw_WERT | unsigned int | - | mV | - | 0.076295 | - | 0.000000 | TECU_uRaw | Spannungsrohwert der SG-internen Temperatur | 12 | 22,2C | - | - |
| ITBAT | 0x428C | STAT_BATTERIETEMPERATUR_IBS_WERT | unsigned int | - | °C | - | 0.009237 | - | -50.000000 | T_batt | Batterietemperatur | 12 | 22,2C | - | - |
| T_saison | 0x427E | STAT_T_saison_WERT | unsigned int | - | °C | - | 0.009237 | - | -50.000000 | T_saison | Saison-Temperatur | 12 | 22,2C | - | - |
| ITGEE | 0x4F17 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | unsigned int | - | degC | - | 0.100000 | - | 0.000000 | Tchip | Chiptemperatur - Generator | 12 | 22,2C | - | - |
| ThrVlv_r | 0x4BF9 | STAT_ThrVlv_r_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | ThrVlv_r | Sollwert Drosselklappe aus ASW | 12 | 22,2C | - | - |
| ThrVlv_rAct | 0x4BF8 | STAT_ThrVlv_rAct_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | ThrVlv_rAct | Isttastverhältnis - Drosselklappe | 12 | 22,2C | - | - |
| ThrVlv_rDesVal | 0x4BFB | STAT_ThrVlv_rDesVal_WERT | unsigned int | - | % | - | 0.003052 | - | -100.000000 | ThrVlv_rDesVal | Sollwert aus dem Koordinator für Drosselklappe | 12 | 22,2C | - | - |
| IADRK | 0x4BF6 | STAT_DROSSELKLAPPENSTELLER_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | ThrVlv_rPs | Ausgangstastverhältnis - Drosselklappensteller | 12 | 22,2C | - | - |
| ThrVlv_rSens | 0x4BF4 | STAT_ThrVlv_rSens_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | ThrVlv_rSens | Drosselklappe - Stellgliedposition | 12 | 22,2C | - | - |
| ThrVlv_stMon | 0x4BFA | STAT_ThrVlv_stMon_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | ThrVlv_stMon | Status der Systemüberwachung der Drosselklappe | 12 | 22,2C | - | - |
| Tn_abstell | 0x4282 | STAT_Tn_abstell_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Tn_abstell | Abstellzeit | 12 | 22,2C | - | - |
| Tn_abstellm | 0x427C | STAT_Tn_abstellm_WERT | unsigned int | - | min | - | 1.000000 | - | 0.000000 | Tn_abstellm | Abstellzeit in Minuten | 12 | 22,2C | - | - |
| Toel | 0x428E | STAT_Toel_WERT | unsigned int | - | °C | - | 0.005417 | - | -100.000000 | Toel | Ausgabewert Motoröltemperatur für LoCAN | 12 | 22,2C | - | - |
| Tra_numGear | 0x4F7A | STAT_Tra_numGear_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | Tra_numGear | Aktueller Gang | 12 | 22,2C | - | - |
| TrbChLP_r | 0x4CDC | STAT_TrbChLP_r_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | TrbChLP_r | Solltastverhältnis - Ladedrucksteller (ND) | 12 | 22,2C | - | - |
| TrbChLP_rPs | 0x4CDD | STAT_TrbChLP_rPs_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | TrbChLP_rPs | Ausgangstastverhältnis - Ladedrucksteller (ND) | 12 | 22,2C | - | - |
| TrbCh_r | 0x4CBE | STAT_TrbCh_r_WERT | unsigned int | - | % | - | 0.003052 | - | 0.000000 | TrbCh_r | Solltastverhältnis - Ladedrucksteller | 12 | 22,2C | - | - |
| TrbCh_rAct | 0x4CC4 | STAT_TrbCh_rAct_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | TrbCh_rAct | aktuelle ATL-Stellgliedposition | 12 | 22,2C | - | - |
| TrbCh_rActB1 | 0x4CC2 | STAT_TrbCh_rActB1_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | TrbCh_rActB1 | Isttastverhältnis - Ladedrucksteller (für Bank1 in zweiflutigem System) | 12 | 22,2C | - | - |
| TrbCh_rActB2 | 0x4CC3 | STAT_TrbCh_rActB2_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | TrbCh_rActB2 | Isttastverhältnis - Ladedrucksteller (für Bank2 in zweiflutigem System) | 12 | 22,2C | - | - |
| IALDS | 0x4CBF | STAT_LADEDRUCKSTELLER_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | TrbCh_rPs | Ausgangstastverhältnis - Ladedrucksteller | 12 | 22,2C | - | - |
| TrbCh_rRaw | 0x4CC0 | STAT_TrbCh_rRaw_WERT | unsigned int | - | % | - | 0.010000 | - | 0.000000 | TrbCh_rRaw | Rohtastverhältnis - Ladedrucksteller (vor der Transformation) | 12 | 22,2C | - | - |
| TrbCh_rSens | 0x4CC6 | STAT_TrbCh_rSens_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | TrbCh_rSens | Linearisierte fehlerunbehandelte ATL-Stellgliedposition | 12 | 22,2C | - | - |
| TrbnDsRLam_rLamRec | 0x56C8 | STAT_TrbnDsRLam_rLamRec_WERT | unsigned int | - | - | - | 0.001000 | - | 0.000000 | TrbnDsRLam_rLamRec | Schittstellenbotschaft | 12 | 22,2C | - | - |
| Tw_noagr | 0x571B | STAT_Tw_noagr_WERT | unsigned int | - | - | - | 0.001526 | - | 0.000000 | Tw_noagr | Tuningwahrscheinlichkeit Nicht-AGR-Fall | 12 | 22,2C | - | - |
| Tw_noagrcntg | 0x5719 | STAT_Tw_noagrcntg_WERT | unsigned long | - | - | - | 1.000000 | - | 0.000000 | Tw_noagrcntg | Zähler Tuningwahrscheinlichkeit Nicht-AGR-Fall gesamt | 12 | 22,2C | - | - |
| Tw_noagrmax | 0x571D | STAT_Tw_noagrmax_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | Tw_noagrmax | max. Tuningwahrscheinlichkeit im Nicht-AGR-Fall | 12 | 22,2C | - | - |
| IIUBAT | 0x428D | STAT_BATTERIESPANNUNG_IBS_WERT | unsigned int | - | V | - | 0.000250 | - | 6.000000 | U_batt | Batteriespannung von IBS gemessen | 12 | 22,2C | - | - |
| U_bn_soll | 0x4281 | STAT_U_bn_soll_WERT | unsigned char | - | V | - | 0.100000 | - | 0.000000 | U_bn_soll | Bordnetzspannung - Sollwert | 12 | 22,2C | - | - |
| SUGEN | 0x4283 | STAT_SOLLWERT_GENERATORSPANNUNG_WERT | unsigned int | - | V | - | 0.100000 | - | 0.000000 | U_gen | Vorgabe Generator-Sollspannung (Ausgabewert) | 12 | 22,2C | - | - |
| Uekp | 0x4280 | STAT_Uekp_WERT | unsigned char | - | V | - | 0.100000 | - | 0.000000 | Uekp | Spannung EKP | 12 | 22,2C | - | - |
| VMSI_stDCS | 0x52C8 | STAT_VMSI_stDCS_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | VMSI_stDCS | Status MSR Eingriff | 12 | 22,2C | - | - |
| VMSI_stDCSPtd | 0x52C9 | STAT_VMSI_stDCSPtd_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | VMSI_stDCSPtd | Erhöhender Stabilitätseingriff von Ebene 1 verboten | 12 | 22,2C | - | - |
| VSwVlv_r | 0x48D9 | STAT_VSwVlv_r_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | VSwVlv_r | Solltastverhältnis - Drallklappe | 12 | 22,2C | - | - |
| VSwVlv_rAct | 0x48D7 | STAT_VSwVlv_rAct_WERT | unsigned int | - | % | - | 0.012207 | - | 0.000000 | VSwVlv_rAct | Isttastverhältnis - Drallklappe (von Sensor) | 12 | 22,2C | - | - |
| IADRA | 0x48D6 | STAT_DRALLKLAPPENSTELLER_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | VSwVlv_rPs | Ausgangstastverhältnis - Drallklappe | 12 | 22,2C | - | - |
| VSwVlv_rSens | 0x48DA | STAT_VSwVlv_rSens_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | VSwVlv_rSens | Drallklappe - Stellgliedposition | 12 | 22,2C | - | - |
| VehMot_trqDCS | 0x52C7 | STAT_VehMot_trqDCS_WERT | unsigned long | - | Nm | - | 0.000015 | - | 0.000000 | VehMot_trqDCS | MSR-Eingriffsmoment (Getriebeausgangsmoment) | 12 | 22,2C | - | - |
| IAFZG | 0x4C15 | STAT_FAHRZEUGBESCHLEUNIGUNG_WERT | unsigned int | - | m/s^2 | - | 0.001000 | - | -32.767000 | VehV_a | Fahrzeugbeschleunigung | 12 | 22,2C | - | - |
| IVKMH | 0x4C14 | STAT_GESCHWINDIGKEIT_WERT | unsigned int | - | km/h | - | 0.004578 | - | 0.000000 | VehV_v | Fahrzeuggeschwindigkeit | 12 | 22,2C | - | - |
| ITZUH | 0x421E | STAT_ZUHEIZER_ANSTEUERUNG_WERT | unsigned int | - | % | - | 0.001526 | - | 0.000000 | WaHtEl_rPs | Ausgangstastverhältnis - Zuheizer | 12 | 22,2C | - | - |
| WaHt_stShutOff_mp | 0x4220 | STAT_WaHt_stShutOff_mp_WERT | unsigned int | - | - | - | 1.000000 | - | 0.000000 | WaHt_stShutOff_mp | Status Abschaltbedingungen für Zuheizer | 12 | 22,2C | - | - |
| ZFC_st_mp | 0x4362 | STAT_ZFC_st_mp_WERT | unsigned char | - | - | - | 1.000000 | - | 0.000000 | ZFC_st_mp | Status der Nullmengenkalibrierung | 12 | 22,2C | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4202 | Erfasste Batteriespannung (1 Byte) | mV | - | unsigned char | - | 100.009156 | 1 | 0.000000 |
| 0x4233 | Pedalwertgebersignal 1 - Spannungsrohwert | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x4234 | Pedalwertgebersignal 2 - Spannungsrohwert | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x4235 | gefiltertes Pedalwertgebersignal (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x4236 | Pedalwertgeberposition | % | - | unsigned int | - | 0.012207 | 1 | 0.000000 |
| 0x4237 | Status des Führungssignals zur weiteren Berechnung des Fahrerwunsches | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x427A | Statuswort | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x427C | Abstellzeit in Minuten | min | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x427D | Entlademenge während Zeit mit erhöhtem Ruhestrom | Ah | - | unsigned int | - | 0.018200 | 1 | 0.000000 |
| 0x4280 | Spannung EKP | V | - | unsigned char | - | 0.100000 | 1 | 0.000000 |
| 0x4281 | Bordnetzspannung - Sollwert | V | - | unsigned char | - | 0.100000 | 1 | 0.000000 |
| 0x4282 | Abstellzeit | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x4283 | Vorgabe Generator-Sollspannung (Ausgabewert) | V | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x4284 | Korrekturwert Abschaltung | - | - | unsigned int | - | 0.001526 | 1 | 0.000000 |
| 0x4285 | Abstand zur Startfähigkeitsgrenze | - | - | unsigned int | - | 0.003052 | 1 | 0.000000 |
| 0x4286 | Batteriestrom von IBS gemessen | A | - | unsigned int | - | 0.080000 | 1 | -200.000000 |
| 0x4288 | Status Standverbraucher 2 registriert | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4289 | Ruhestromzeit - History 2 | min | - | unsigned char | - | 14.933333 | 1 | 0.000000 |
| 0x428A | Ruhestromzeit - History 3 | min | - | unsigned char | - | 14.933333 | 1 | 0.000000 |
| 0x428B | Ruhestromzeit - History 4 | min | - | unsigned char | - | 14.933333 | 1 | 0.000000 |
| 0x428C | Batterietemperatur | °C | - | unsigned int | - | 0.009237 | 1 | -50.000047 |
| 0x428D | Batteriespannung von IBS gemessen | V | - | unsigned int | - | 0.000250 | 1 | 6.000000 |
| 0x4290 | Generatorstrom | A | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4292 | Status - Entladung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4294 | Mengenregelventil - Sollwert des Ansteuerstromes (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4295 | Mengenregelventil - gefilterter Stromistwert der Stromregelung (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4296 | Mengenregelventil - gefilterter Istwert des Ansteuerstromes | mA | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x4299 | Mengenregelventil - Volumenstromsollwert der Raildruckregelung | mm3/s | - | unsigned int | - | 0.003052 | 1 | -100.000000 |
| 0x429C | Mengenregelventil - Zustand der Stellwertsteuerung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x42CB | Basis-Ladedruck-Sollwert | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x42CC | Basis-Ladedruck-Sollwert (Niederdruckstufe) | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x42CD | Regelabweichung des Ladedruckreglers | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x42CE | Regelabweichung des Ladedruckreglers (Niederdruckstufe) | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x432D | Raildruckregelventil-Stromsollwert von der Raildruckregelung | mA | - | unsigned int | - | 0.061036 | 1 | 0.000000 |
| 0x4331 | Raildruckregelventil-Drucksollwert von der Raildruckregelung | bar | - | unsigned int | - | 0.045778 | 1 | 0.000000 |
| 0x4333 | Raildruckregelventil-Adaptionsfaktor für die Kennlinie (1 Byte) | - | - | unsigned char | - | 0.003922 | 1 | 0.500000 |
| 0x4334 | Raildruckregelventil-Stromsollwert von der Raildruckregelung (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4335 | Raildruckregelventil-Sollstrom (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4336 | Raildruckregelventil-Zustand der Stellwertsteuerung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x43AD | Kraftstoffvorförderdruck - gefiltert (1 Byte) | hPa | - | unsigned char | - | 23.540230 | 1 | 0.000000 |
| 0x43B2 | Kraftstoffvorförderdruck - Spannungsrohwert vom Sensor (1 Byte) | mV | - | unsigned char | - | 13.739203 | 1 | 0.000000 |
| 0x43CC | Status der Dieselfilterheizung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x43E5 | Vorfördermenge (1 Byte) | l/h | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x43F5 | Zähler für die Lernfunktion Dieselfilterheizung | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x43F6 | Gelernte Leistung für Dieselfilterheizung | W | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x43F7 | Leistung EKP (U*I) gefiltert (1 Byte) | W | - | unsigned char | - | 1.000244 | 1 | 0.000000 |
| 0x445B | Kraftstoffvolumen (1 Byte) | l | - | unsigned char | - | 0.490539 | 1 | 0.000000 |
| 0x445C | Kraftstofftemperatur (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -49.945509 |
| 0x44AA | Absolutdruck vor Turbine | hPa | - | unsigned int | - | 0.038148 | 1 | 500.000205 |
| 0x44B9 | Partikelmasse additiv korrigiert | g | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x44BA | kontinuierlich simulierte Partikelmasse | g | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x44BD | Ölaschemasse | g | - | unsigned int | - | 0.015259 | 1 | 0.000000 |
| 0x44BE | Rußmasse | g | - | unsigned int | - | 0.015259 | 1 | 0.000000 |
| 0x44BF | gefahrene Strecke seit der letzten erfolgreichen Regeneration | m | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x44C3 | Status - Betriebsbereich für die Partikelfilterdruckplausibilisierung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x44C4 | Abgasgegendruck vor Partikelfilter - korrigiert | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x44C5 | Gefilterter Strömungswiderstand des Partikelfilters | hPa/(m^3/h) | - | unsigned int | - | 0.000100 | 1 | 0.000000 |
| 0x44C6 | Gefilterter Strömungswiderstand des Partikelfilters (1 Byte) | hPa/(m^3/h) | - | unsigned char | - | 0.005498 | 1 | -0.200284 |
| 0x44F0 | Spannungsrohwert - Abgasdruck vor Partikelfilter | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x44F3 | Spannungsrohwert - Abgasdruck vor Katalysator | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x44F4 | Abgasdruck vor Partikelfilter | hPa | - | unsigned int | - | 0.091554 | 1 | 0.000000 |
| 0x44F6 | Abgastemperatur vor Katalysator - korrigierter Wert (1 Byte) | degC | - | unsigned char | - | 3.727873 | 1 | -49.857306 |
| 0x44F7 | Abgastemperatur vor Partikelfilter - korrigierter Wert (1 Byte) | degC | - | unsigned char | - | 3.333469 | 1 | -49.990920 |
| 0x44F9 | korrigierter Differenzdruck (1 Byte) | hPa | - | unsigned char | - | 4.118135 | 1 | -50.005925 |
| 0x44FB | gefilterter Differenzdruck des Partikelfilters (1 Byte) | hPa | - | unsigned char | - | 4.118135 | 1 | -50.005925 |
| 0x44FD | Offset fuer Partikelfilter-Differenzdruck (1 Byte) | hPa | - | unsigned char | - | 0.784317 | 1 | -100.000479 |
| 0x44FF | Rohwert des korrigierten Absolutgegendruckes (1 Byte) | hPa | - | unsigned char | - | 4.118135 | 1 | -50.005925 |
| 0x45D7 | Einspritzmenge - Sollwert ohne Mengenausgleichsregelung (1 Byte) | mg/hub | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x45EC | aktueller Motorstatus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x467E | Regenerationsstatus | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x46AF | Betriebsstundenzähler (für UW gerechnet ab 01.01.2000) | s | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x46B1 | Kilometerstand | km | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x46C5 | Tag Zähler absolut | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x46C9 | Com_stnWhlRLQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CA | Com_stnWhlRLQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CB | Com_stnWhlRRQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CC | Com_stnWhlRRQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CD | Com_stnWhlFLQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CE | Com_stnWhlFLQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CF | Com_stnWhlFRQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46D0 | Com_stnWhlFRQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46D1 | Com_stvVehQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46D2 | Com_stvVehQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4714 | Status - Raildruckregelmodus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4715 | Raildruck - Sollwert | bar | - | unsigned int | - | 0.045778 | 1 | 0.000000 |
| 0x4717 | Raildruck - Sollwert (1 Byte) | bar | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x4719 | Raildruckregelung-Status des Zustandsautomaten | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4749 | linearisierter Wert des Kraftstoffdrucksensors | bar | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x474A | maximaler Raildruck der letzten 10ms (1 Byte) | bar | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x477D | Statuswort - AV | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x4784 | Generatorstatus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4786 | Statusbyte Generator allgemein | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4787 | Generatorkennfeldnummer | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x47A1 | Inneres Moment für den Set-Pfad nach der Überwachungsbegrenzung | Nm | - | unsigned int | - | 0.114445 | 1 | -2500.059234 |
| 0x47DC | gesamter HFM-Luftmassenstrom | kg/h | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x47DE | Normiertes Luftstromverhältnis | - | - | unsigned int | - | 0.000122 | 1 | 0.000000 |
| 0x47E2 | Luftmasse pro Zylinder (1 Byte) | mg/hub | - | unsigned char | - | 6.277395 | 1 | 0.000000 |
| 0x47E3 | Rohwert der Luftmassenperiode | us | - | unsigned long | - | 0.050000 | 1 | 0.000000 |
| 0x4843 | Temperatur nach dem Ladeluftkühler | degC | - | unsigned int | - | 0.010000 | 1 | -100.000000 |
| 0x4846 | Lufttemperatur an der HFM-Position | degC | - | unsigned int | - | 0.100000 | 1 | -273.140000 |
| 0x4847 | Luftdruck vor Einlassventil (1 Byte) | hPa | - | unsigned char | - | 15.693487 | 1 | 0.000000 |
| 0x4848 | Erfasster Wert der Lufttemperatur an der HFM-Position (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -49.945509 |
| 0x4850 | Temperature at the down stream of the charged air cooler (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -39.943067 |
| 0x4873 | Sollluftmasse (1 Byte) | mg/hub | - | unsigned char | - | 6.277395 | 1 | 0.000000 |
| 0x487E | Gesamtsollabgasrückführrate | - | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x4889 | dynamisch adaptierte Luftmasse | mg/hub | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x488A | geschätzte Gesamtistabgasrückführrate | % | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x48A6 | aktuelles Kupplungsmoment | Nm | - | unsigned int | - | 0.114445 | 1 | -2500.059234 |
| 0x48D8 | Ausgangstastverhältnis - Drallklappe (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x48D9 | Solltastverhältnis - Drallklappe | % | - | unsigned int | - | 0.001526 | 1 | 0.000000 |
| 0x48DB | Drallklappe - Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x49EC | Aktorspannung Up-Niveau (1 Byte) 0 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49ED | Aktorspannung Up-Niveau (1 Byte) 1 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49EE | Aktorspannung Up-Niveau (1 Byte) 2 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49EF | Aktorspannung Up-Niveau (1 Byte) 3 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49F0 | Aktorspannung Up-Niveau (1 Byte) 4 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49F1 | Aktorspannung Up-Niveau (1 Byte) 5 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x4A4E | Zylinderspezifische Diagnoseinformation 0 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A4F | Zylinderspezifische Diagnoseinformation 1 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A50 | Zylinderspezifische Diagnoseinformation 2 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A51 | Zylinderspezifische Diagnoseinformation 3 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A52 | Zylinderspezifische Diagnoseinformation 4 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A53 | Zylinderspezifische Diagnoseinformation 5 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A57 | Einspritzfreigabestatus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4ACA | Aktueller Gang intern | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4AF4 | Der aus LSU gemessene Lambdawert 0 | - | - | unsigned int | - | 0.001000 | 1 | 0.000000 |
| 0x4BCA | aktuelle Motorabstellzeit | s | - | unsigned int | - | 10.002442 | 1 | 0.000000 |
| 0x4BF5 | Drosselklappe - Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4BF7 | Ausgangstastverhältnis - Drosselklappensteller (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4BFC | Sollwert aus dem Koordinator für Drosselklappe (1 Byte) | % | - | unsigned char | - | 0.002500 | 1 | -81.920000 |
| 0x4C14 | Fahrzeuggeschwindigkeit | km/h | - | unsigned int | - | 0.004578 | 1 | 0.000000 |
| 0x4C8E | Ausgangstastverhältnis - Abgasrückführregelventil (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4C94 | Ausgang der Sollwertkennlinie für AGR-Tastverhältnis (1 Byte) | % | - | unsigned char | - | 0.003052 | 1 | -100.000000 |
| 0x4C98 | AGR - Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x4CBE | Solltastverhältnis - Ladedrucksteller | % | - | unsigned int | - | 0.003052 | 1 | 0.000000 |
| 0x4CC1 | Ausgangstastverhältnis - Ladedrucksteller (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4CC7 | Linearisierte fehlerunbehandelte ATL-Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x4CDE | Ausgangstastverhältnis - Ladedrucksteller (ND) (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4CF2 | Umgebungsdruck (1 Byte) | hPa | - | unsigned char | - | 2.353009 | 1 | 600.017234 |
| 0x4D54 | Referenzgasmassenstrom in den Motor | kg/h | - | unsigned int | - | 0.048829 | 1 | -1600.020028 |
| 0x4D58 | berechneter Abgasvolumenstrom im Partikelfilter (1 Byte) | m^3/h | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x4D6B | rückgeführter Abgasmassenstrom nach AGR-Kühler (1 Byte aus AsMod) | kg/h | - | unsigned char | - | 0.588294 | 1 | -50.005027 |
| 0x4D88 | Abgasrückführrate in den Motor | - | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x4E1C | Status vom Kompressorbypassventil | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4F16 | Generatorregelung - Ableitung des Signals Dffgen | % | - | unsigned char | - | 0.390625 | 1 | 0.000000 |
| 0x4F17 | Chiptemperatur - Generator | degC | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x4FDE | Kupplungsstatusinformation | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x50A7 | Umgebungstemperatur (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -39.943067 |
| 0x513D | Bremsunterdruck | bar | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x513E | Bremsunterdruck - Spannungsrohwert des Sensors | mV | - | unsigned int | - | 0.200000 | 1 | 0.000000 |
| 0x513F | Meldung Bremse betätigt | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5140 | Status des Bremslichtschalters | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5205 | Kühlmitteltemperatur (Sensorwert vor der Korrektur) | degC | - | unsigned char | - | 1.000244 | 1 | -39.943067 |
| 0x520D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x5249 | Pedalwertgeber - ungefiltertes Signal | % | - | unsigned char |  | 0.392157 | 1 | 0.000000 |
| 0x526C | Status - ACC ist nicht aktiv (für Überwachung) | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x526D | Status des Reglereingriffs - inaktiv/aktiv | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x526E | Zulässiges Sollmoment der Ebene-1 Beschleunigungsüberwachung | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x5270 | Vortriebssollmoment nach Koordination mit ESP-Eingriffen (Radmoment) | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x5271 | Cruise Control ist aktiv | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5272 | Status Kurbelwellensignalauswertung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5273 | Zustand der Nockenwellenauswertung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5274 | Wunschmenge Haupteinspritzung | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x5275 | Wunschmenge Voreinspritzung 1 | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x5276 | Wunschmenge Voreinspritzung 2 | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x5278 | Sollmenge Nacheinspritzung 2 | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x527B | Einspritzmengenbegrenzungs-Anforderung der Steuergeräte Überwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x527D | Statusbit für Anfrage einer Fehlerreaktion der Funktionsrechnerüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x527E | Statusbit für Anfrage einer Fehlerreaktion der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x527F | Irreversibles Fehlerbit aus Prüfung mit Leerlauftestimpulsverfahren | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5280 | Irreversibles Fehlerbit aus Prüfung der Testspannung in der ADC Überwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5281 | Spannung am ADC für Fahrpedalsignal 2 | mV | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5282 | Spannung am ADC Testspannungs-Eingang | mV | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5285 | Zähler, um die Anzahl der Korrekturen des Antwortzählers zu zählen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5286 | Info an Ebene 1: Watchdogabschaltung aktiv | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x529C | Diagnosezähler für die Zeit des ROM-Checks über die Bereiche der Wiederholungsprüfung | us | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x529D | Variable zur Deaktivierung des kompletten ROM-Checks über Code | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x529E | Variable zur Deaktivierung des kompletten ROM-Checks über Daten | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x529F | Anforderung für die Erkennung einer Verlängerung des Nachlaufs | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A0 | Anzahl der Wiederholungen bis die Hardware bereit ist um den Abschaltpfadtest durchzuführen | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52A1 | Anzahl von Versuchen um eine Einspritzung abzusetzen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A2 | Bytezähler für die Antwort zum Überwachungsmodul | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52A3 | Fehlerzähler beim Setzen der Antwortzeit (response time) | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52A4 | Anzahl der ausgelösten Resets im Abschaltpfadtest | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A5 | Rückgabewert von IVHSOPTst als Array | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A6 | Statusvariable des CJ945 Überspannung-Erkennungs-latch | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A7 | Überwachungsmodul-Antwortzeit (response time) | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x52A8 | Unplausibilität bei Vergleich der beiden Fahrpedalsignale | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A9 | Info für Ebene 1: Fehlerreaktion aus Ebene 2 angefordert | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AA | Aktueller Wert für Fahrpedalsignal 1 | mV | - | unsigned char | - | 19.531250 | 1 | 0.000000 |
| 0x52AB | Aktueller Wert für Fahrpedalsignal 2 | mV | - | unsigned char | - | 9.765625 | 1 | 0.000000 |
| 0x52AC | Kupplungszustand | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AD | Status der temporären Defekterkennung der DSC-Botschaft | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AE | Status des ASR-Eingriffes in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AF | angefordertes Motormoment von MSR-Steuerung | Nm | - | unsigned int | - | 1.000244 | 1 | 0.000000 |
| 0x52B0 | Rohwert der Momentenanforderung der DCS CAN Botschaft | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x52B1 | In Funktionsüberwachung berechnete Motordrehzahl | rpm | - | unsigned char | - | 40.000000 | 1 | 0.000000 |
| 0x52B2 | Kennung 1 für Synchronisation in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B3 | Kennung 2 für Synchronisation in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B4 | Status der Zulässigkeit des MSR-Eingriffs aus der Ebene 2 an die Ebene 1 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B5 | Zylindernummer einspritzplatzspezifisch | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B6 | Einspritztyp einspritzplatzspezifisch | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B7 | Status allgemeiner Drehzahlanforderungen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B8 | Status der Zulässigkeit des Getriebeeingriffs in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B9 | Bitcodierter Status der Beschleunigungsüberwachung in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52BA | Fahrzeugbeschleunigung für die Funktionsüberwachung | m/s^2 | - | unsigned int | - | 0.001000 | 1 | 0.000000 |
| 0x52BB | MoFVSS_stErrVSS | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52BC | Fahrzeuggeschwindigkeit mit berechnetem Ersatzwert bei Fehler in der Funktionsüberwachung | km/h | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x52BE | Ringspeicher mit den letzten 8 Reset-ID s 1 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52BF | Ringspeicher mit den letzten 8 Reset-ID s 2 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C0 | Ringspeicher mit den letzten 8 Reset-ID s 3 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C1 | Ringspeicher mit den letzten 8 Reset-ID s 4 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C5 | Freigabe für Momentenanforderungen aus der Schleppmomentenregelung (MSR) | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52C6 | Neutralwert für Momentenanforderungen aus der Schleppmomentenregelung (MSR) empfangen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52C7 | MSR-Eingriffsmoment (Getriebeausgangsmoment) | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x52C8 | Status MSR Eingriff | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C9 | Erhöhender Stabilitätseingriff von Ebene 1 verboten | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52CA | MoFVSS_stFrzVSS | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52CB | Info zum Envram Check | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x542B | MSR Eingriffsmoment (Radmoment) | Nm | - | unsigned long | - | 0.100000 | 1 | 0.000000 |
| 0x5598 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 1 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x5599 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 2 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559A | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 3 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559B | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 4 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559C | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 5 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559D | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 6 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x55A5 | Korrekturmenge der FMO für abgasrelevante Regelkreise | mg/Hub | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x56B6 | Zustand Synchronisation | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x56B7 | Zustand Betriebsmodus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x56BA | Auswahl der Motordrehzahl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5719 | Zähler Tuningwahrscheinlichkeit Nicht-AGR-Fall gesamt | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x571B | Tuningwahrscheinlichkeit Nicht-AGR-Fall | - | - | unsigned int | - | 0.001526 | 1 | 0.000000 |
| 0x571D | max. Tuningwahrscheinlichkeit im Nicht-AGR-Fall | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x571F | mittlere Abweichung der Sauerstoffkonzentration | - | - | unsigned int | - | 1.024000 | 1 | -33554.432000 |
| 0x5720 | Ringspeicher der Manipulationswahrscheinlichkeit 0 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5721 | Ringspeicher der Manipulationswahrscheinlichkeit 1 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5722 | Ringspeicher der Manipulationswahrscheinlichkeit 2 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5723 | Ringspeicher der Manipulationswahrscheinlichkeit 3 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5724 | Ringspeicher der Manipulationswahrscheinlichkeit 4 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5734 | Ringspeicher Kilometerstand 0 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5735 | Ringspeicher Kilometerstand 1 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5736 | Ringspeicher Kilometerstand 2 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5737 | Ringspeicher Kilometerstand 3 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5738 | Ringspeicher Kilometerstand 4 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5776 | Motortemperatur (Recovery - Messgroesse) | degC | - | unsigned char | - | 1.000244 | 1 | -49.945509 |
| 0x5778 | maximaler Raildruck (Recovery - Messgroesse) | bar | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x5779 | Motordrehzahl | rpm | - | unsigned int | - | 0.091554 | 1 | 0.000000 |
| 0x577A | Luftmasse pro Zylinder (Recovery - Messgroesse) | mg/Hub | - | unsigned char | - | 6.277395 | 1 | 0.000000 |
| 0x577B | Kilometerstand (Auflösung 8 km) | km | - | unsigned int | - | 8.000000 | 1 | 0.000000 |
| 0x577C | Reset Information/Reset-ID der letzten Resetursache | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x577D | Reset Information/Adresse an der der letzte Reset ausgelöst wurde | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x577E | Batteriespannung (Recovery - Messgroesse) | mV | - | unsigned char | - | 100.009156 | 1 | 0.000000 |
| 0x577F | Env_xUserValue (Recovery - Messgrösse) | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x57E1 | Position des Fahrpedals für die Funktionsüberwachung | mV | - | unsigned char | - | 19.531250 | 1 | 0.000000 |
| 0x57E2 | Kennung für Freigabebedingung der Fehlerprüfung für die Diagnose | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57E4 | Motordrehzahl in der Funktionsüberwachung | rpm | - | unsigned char | - | 40.000000 | 1 | 0.000000 |
| 0x57E5 | Synchronisationsstatus der Drehzahlüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57E6 | Winkeluhrstand aus vorhergehendem Aufruf der Motordrehzahlüberwachung | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x57EC | Statusinformation über laufende Einspritzungen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57EE | Plausibilisierter Motorteststatus der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57F6 | Status aller Freigabe Bits für die Schubüberwachung | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x57FE | Fahrpedalwert der Überwachungsfunktionen | % | - | unsigned char | - | 0.390625 | 1 | 0.000000 |
| 0x5808 | Mittelwert der durchschnittlichen momentenwirksamen Ansteuerdauer pro Zylinder | us | - | unsigned int | - | 0.400000 | 1 | 0.000000 |
| 0x580D | zulässiges Moment der externen Eingriffe in der Funktionsüberwachung | Nm | - | unsigned int | - | 0.114445 | 1 | -2500.059234 |
| 0x5812 | zulässiges Moment der Fahrzeugfunktionen | Nm | - | unsigned int | - | 1.831126 | 1 | -40000.947751 |
| 0x5816 | Statusinfo der MSR-Eingriffüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5817 | Status - Fehler redundanter DSC-Eingriff | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5824 | Anzahl der Wiederholungen des Abschaltpfadtests (Realisierung einer Zeitüberwachung) | - | - | unsigned char | - | 8.000000 | 1 | 0.000000 |
| 0x5825 | Zähler für die Anzahl der Aufrufe an aktiven Abschaltpfad-Test | - | - | unsigned char | - | 20.004884 | 1 | 0.000000 |
| 0x5826 | Informationen für Ebene 1, 2 zum Status der Synchronisation des Abschatpfadtests und der Frage-Antwort-Kommunikation | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x582C | Status Info der ADC-Überwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x582E | Ratiometriekorrekturfaktor in der Funktionsüberwachung | 1/1 | - | unsigned int | - | 0.000977 | 1 | 0.000000 |
| 0x582F | Fehlerzählerrückmeldung von Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5830 | Fehlerzähler im Funktionsrechner für Fehler vom Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5831 | Status Bitleiste für Kommunikation mit Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5832 | Fehlerzähler für SPI-Übertragungen in Kommunikation mit Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5833 | Erweiterte Frage von Überwachungsmodul | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x5834 | Antwort auf Frage vom Überwachungsmodul | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x5836 | Fehlerhafte ROM-Page für Einfachfehler im kompletten ROM-Check | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5837 | Pointer für aktuell zu prüfende Page des kompletten ROM-Checks | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5838 | Statusvariable zur Synchronisation von Abschaltpfadtest und Frage-/Antwort-Kommunikation (Test ist abgeschlossen) | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x583B | Status der Kommunikation via SPI-Bus zum Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x583D | Statusvariable des Abschaltpfad-Tests | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5846 | Fehlerzähler für SPI-Übertragungen zum Überwachungsmodul oder zum CJ945/R2S2 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5848 | Debuginfo des Abschaltpfad-Tests 0 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5955 | Motordrehzahl | rpm | - | unsigned int | - | 0.500000 | 1 | 0.000000 |
| 0xXY | Unbekannte Umweltbedingung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xFFFF | Unbenutzte Umweltbedingung | - | - | xxx | - | 1 | 1 | 0 |

### STELLER

| LABEL | TEXT | LID | BYTES | FACT_A | FACT_B | VGR_TU | VGR_TO | JOB_LESEN | JOB_EIN | JOB_AUS | AUSGNR | DIMENSION | MESSAGE | MASTER/SLAVE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DRO | Drosselklappe | 0x602A | 2 | 0,01 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 7 | %Tastverhältnis | ThrVlv_rPs#10 | Master |
| ALK | Abluftklappe | 0x6088 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 18 | - | NA | Master |
| ZLK | Zuluftklappe | 0x60C3 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 21 | - | RadSht_stTstActv#0 | Master |
| MSA | Motorstartautomatik | 0x608A | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 11 | - | EngStA_stPs#0 | Master |
| HFM | HFM Abschaltung | 0x608B | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | - | - | AFS_stPsShOff#0 | Master |
| GLU | Glührelais | 0x60AF | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 14 | - | GlwEcu_tGlwPlg_mp#10 | Master |
| MLA | Motorlager | 0x60B2 | 2 | 0,012207031 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 2 | %Tastverhältnis | EMDmp_rPs_[0]#10 | Master |
| DRV | Kraftstoffdruck-Regelventil | 0x60B3 | 2 | 0,01 | 0 | 6 | 76 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 9 | %Tastverhältnis | PCV_rPs#10 | Master |
| ZUH | Zusatzheizer | 0x60B4 | 2 | 0,012207031 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 11 | - | WaHtEl_rPs#10 | Master |
| LDS | Ladedrucksteller | 0x60B6 | 2 | 0,012207031 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 1 | %Tastverhältnis | TrbCh_rPs#10 | Master |
| LDSND | LadedruckstellerNiederdruck | 0x60B7 | 2 | 0,012207031 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 1 | %Tastverhältnis | TrbChLP_rPs#10 | Master |
| DRA | Drallklappe | 0x60BC | 2 | 0,012207031 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 6 | %Tastverhältnis | VSwVlv_rPs#10 | Master |
| MRV | Zumesseinheit | 0x60BD | 2 | 0,01 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 10 | %Tastverhältnis | MeUn_rPs_mp#10 | Master |
| AGR | Abgasrückführung | 0x60BE | 2 | 0,012207031 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 3 | %Tastverhältnis | EGRVlv_rPs#10 | Master |
| STA | Starter | 0x60C4 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 11 | - | Strt_stPs#0 | Master |
| KLI | Klimakompressor | 0x60C7 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 12 | - | AirC_stPsCmpr#0 | Master |
| EBX | E-BoxLüfter | 0x60D3 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 15 | - | NA | Master |
| MILA | MIL-Lampe | 0x60D4 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 17 | - | NA | Master |
| OILA | Öldrucklampe | 0x60D5 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 11 | - | NA | Master |
| SYSLA | Systemlampe | 0x60D6 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 11 | - | NA | Master |
| VFP | Vorförderpumpe | 0x60D8 | 2 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 19 | FlConsum_l_h | NA | Master |
| ELU | Motorlüfter | 0x60DA | 2 | 0,012207031 | 0 | 8 | 93 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 5 | %Tastverhältnis | Fan_rPs#10 | Master |
| ELUR | Motorlüfter Relais | 0x60DB | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 22 | - | Fan_stPsSSp#0 | Master |
| KBV | Kompressor Bypassventil | 0x60DC | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | - | - | CByVlv_stPs#0 | Master |
| KFH | Kraftstofffilterheizung | 0x60DD | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 11 | - | FlFltHt_stPs#0 | Master |
| AGRKBP | AGR-KühlerBypassklappe | 0x60DE | 2 | 0,01220703125 | 0 | 5 | 95 | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 20 | - | ECBVlv_rPs#10 | Master |
| NSK | Nachschalldämpferklappe = nicht verbaut | 0x9999 | 1 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 13 | - | NA | Master |
| KPC | Vorförderpumpe EKP über CAN | 0x60D8 | 2 | 1 | 0 | 0...AUS | 1...EIN | STEUERN_WERT_LESEN | STEUERN_SELECTIV | STEUERN_ENDE_SELECTIV | 19 | FlConsum_l_h | NA | Master |
| -- | - | 0xFFFF | 0 | 1 | 0 | 0 | 0 | -- | -- | -- | 0 | -- | -- | -- |

### ABGLEICH

| LABEL | TEXT | LID | BYTES | FACT_A | FACT_B | VGR_TU | VGR_TO | JOB_LESEN | JOB_VERST | JOB_PROG | AUSGNR | DIMENSION | TEXT_ACC | FELDANZ_ACC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IMAALLE | IMA - alle Injektoren | 0x5F90 | 48 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA | 101 | - | Abgleichwerte wie auf Injektor aufgedruckt | 32 |
| IMA1 | IMA - Injektor 1 | 0xB5 | 8 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA_ZYL | 102 | - | Abgleichwerte wie auf Injektor 1 | 8 |
| IMA2 | IMA - Injektor 2 | 0xB6 | 8 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA_ZYL | 103 | - | Abgleichwerte wie auf Injektor 2 | 8 |
| IMA3 | IMA - Injektor 3 | 0xB7 | 8 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA_ZYL | 104 | - | Abgleichwerte wie auf Injektor 3 | 8 |
| IMA4 | IMA - Injektor 4 | 0xB8 | 8 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA_ZYL | 105 | - | Abgleichwerte wie auf Injektor 4 | 8 |
| IMA5 | IMA - Injektor 5 | 0xB9 | 8 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA_ZYL | 106 | - | Abgleichwerte wie auf Injektor 5 | 8 |
| IMA6 | IMA - Injektor 6 | 0xBA | 8 | 0 | 0 | - | - | ABGLEICH_IMA_LESEN | - | ABGLEICH_PROGRAMMIEREN_IMA_ZYL | 107 | - | Abgleichwerte wie auf Injektor 6 | 8 |
| AGR | Abgasrückführung - Normalbetrieb | 0x5FC2 | 2 | 0,1 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 5 | mg/HubLuft | Abgleich für Abgasrückführung | 1 |
| BEG | Begrenzungsmoment | 0x5FD3 | 4 | 0,012207 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 1 | % | Abgleich für Begrenzungsmoment-Korrektur | 1 |
| COD_AENDID | Änderungsindex im EEPROM | 0x3FFF | 2 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 250 | - | Änderungsindex im EEPROM | 1 |
| COD_IGR | Codierung - iGR | 0x3210 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 23 | - | Codierung von iGR | 1 |
| COD_MIL | Codierung - MIL Applikation | 0x3000 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 20 | - | MIL - Applikation | 1 |
| COD_PWRINR | Codierung - Leistungsvariante inneres Moment | 0x3003 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 23 | - | Codierung-Leistungsvariante inneres Moment | 1 |
| COD_PWRKUP | Codierung - Leistungsvariante Kupplungsmoment | 0x3004 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 24 | - | Codierung-Leistungsvariante Kupplungsmoment | 1 |
| COD_SERV | Codierung - Servicezeit-Faktor | 0x3200 | 2 | 0,01 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 21 | - | Servicezeit-Faktor | 1 |
| COD_VMAX | Codierung - max. Geschwindigkeit | 0x3002 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 25 | - | v-max Codierung | 1 |
| COD_XENON | Codierung - Xenon | 0x3211 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 22 | - | Codierung von Xenon | 1 |
| COD_SPA | Codierung - Schaltpunktanzeige | 0x3220 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | 25 | - | Codierung-Schaltpunktanzeige | 1 |
| CSFDRUCKSENSOR | Abgleich für Differenzdruckoffset (Sensorabgleich) | 0x5FAE | 4 | 1 | 0 | - | - | - | - | ABGLEICH_PROG | 505 | - | Abgleich für Differenzdruckoffset (Sensorabgleich) | 2 |
| CSFREGAGR | Abgleich für Abgasrückführung in der Regeneration | 0x5FC3 | 2 | 0,000122 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 8 | - | Abgleich für Abgasrückführung in der Regeneration | 1 |
| CSFREGLSNCE | Abgleich der max. Strecke seit letzter Regeneration | 0x5FB8 | 2 | 0,000122 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 9 | km | Abgleich der max. Strecke seit letzter Regeneration | 1 |
| CSFREGMKF | verbrauchte Kraftstoffmasse seit letzter Regernation | 0x5FB7 | 2 | 0,000122 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 10 | l | verbrauchte Kraftstoffmasse seit letzter Reg. | 1 |
| CSFRESTLL | Abgleichwert zur Berechnung der Restlaufleistung | 0x5FB6 | 2 | 0,000122 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 7 | km | Abgleichwert zur Berechnung der Restlaufleistung | 1 |
| CSMEN48 | Checksumme für Mengenabgleich 48 Punkte | 0x5FC9 | 1 | 1 | 0 | 0 | 255 | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 201 | - | Checksumme für Mengenabgleich 48 Punkte | 1 |
| KUP | Kupplungsschalter auslesen | 0x04 | 1 | 1 | 0 | 0 | 1 | ABGLEICH_LESEN | - | - | 11 | % | Kupplungsschalter auslesen | 1 |
| HFMLL | HFM-Leerlaufabgleich | 0x5FC5 | 2 | 0,000122 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 108 | - | HFM-Leerlaufabgleich | 1 |
| HFMLAST | HFM-Lastabgleich | 0x5FC6 | 2 | 0,000122 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 109 | - | HFM-Lastabgleich | 1 |
| LLA | Leerlaufdrehzahl | 0x5FF0 | 2 | 0,5 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 3 | U/min | Abgleich für die Leerlaufdrehzahl | 1 |
| LLABS | Leerlaufdrehzahl | 0x5FF1 | 2 | 0,5 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 3 | U/min | Abgleich für die Leerlaufdrehzahl - absolut | 1 |
| MEN48 | Mengenabgleich 48 Punkte | 0x5FC8 | 96 | 0,01 | 0 | -2,5 | 2,5 | ABGLEICH_LESEN_KF48 | ABGLEICH_VERSTELLEN_KF48 | ABGLEICH_PROG_KF48 | 200 | - | Mengenabgleich 48 Punkte | 48 |
| RDR | Hochdruckregelungs - Modus | 0x5FC7 | 1 | 1 | 0 | 0 | 2 | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 12 | - | Hochdruckregelungs-Modus | 1 |
| STA | Abgleich für Startmoment | 0x5FC0 | 2 | 0,1 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 4 | Nm | Abgleich für Startmoment | 1 |
| VER | Abgleich für Verbrauchskennlinie | 0x5FC1 | 2 | 0,012207 | 0 | - | - | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | ABGLEICH_PROG | 2 | % | Abgleich für Verbrauchskennlinie | 1 |
| NVCINT | Integratorwerteder NVC - Lernfunktion | 0x5FB2 | 8 | 0,000122 | 0 | -4 | 4 | ABGLEICH_LESEN_NVC | - | ABGLEICH_PROGRAMMIEREN_NVC | 300 | - | Integratorwerte der NVC-Lernfunktion | 4 |
| NVCCNT | Lernzykluszähler der NVC - Lernfunktion | 0x5FB3 | 8 | 1 | 0 | -4,00, | 65535 | ABGLEICH_LESEN_NVC | - | ABGLEICH_PROGRAMMIEREN_NVC | 301 | - | Lernzykluszähler der NVC-Lernfunktion | 4 |
| ADD | Abgasdifferenzdruck | 0x5FB9 | 2 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | - | mbar | Abgleichwert für Abgasdifferenzdruck | 2 |
| KMS | Kilometerstand | 0x5FD0 | 2 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | - | km | Abgleichwert - Kilometerstand bei Fehlerspeicherlöschung auslesen | 2 |
| OILQ | Ölzustandssensorwerte | 0x5FD1 | 1 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | - | - | Abgleichwert - Ölzustandssensorwerte | 1 |
| OILN | Abgleich - Ölniveau | 0x5FD2 | 37 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | - | - | Abgleichwert - Ölniveaumessung | 37 |
| LLO | Leerlaufdrehzahl - Offset | 0x5FF0 | 2 | 0,5 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | - | U/min | Leerlaufdrehzahl-Offsetwert auslesen | 1 |
| LASTKOLL | Lesen der Daten des Fahrzeugbenutzungsprofils (48 Werte) | 0x5FCA | 48 | 1 | 0 | 0 | 255 | ABGLEICH_LESEN | - | - | 501 | - | Lesen der Daten des Fahrzeugbenutzungsprofils (48 Werte) | 48 |
| LASTZEIT | Lesen der Betriebsstunden des Fahrzeugbenutzungsprofils | 0x5FCB | 4 | 1 | 0 | - | - | ABGLEICH_LESEN | - | - | 502 | - | Lesen der Betriebsstunden des Fahrzeugbenutzungsprofils | 1 |
| MENDRIFT | Mengendriftgenzen | 0x5FA6 | 4 | 1 | 0 | 0 | 2 | ABGLEICH_LESEN | - | ABGLEICH_PROG | 503 | mg/Hub | Mengendriftgenzen | 4 |
| CSMENDRIFT | Checksumme - Mengendriftgenzen | 0x5FA7 | 1 | 1 | 0 | 0 | 255 | ABGLEICH_LESEN | - | ABGLEICH_PROG | 504 | - | Checksumme - Mengendriftgenzen | 1 |
| QFLRESET | Rücksetzen des Kraftstoffverbrauchs nach IMA-Programmierung | 0x5FD4 | 4 | 1,0 | 0 | 0,0 | 0,0 | ABGLEICH_LESEN | ABGLEICH_VERSTELLEN | - | 500 | - | Rücksetzen des Kraftstoffverbrauchs nach IMA-Programmierung | 1 |
| EKP | Rücksetzen der Lernzähler der Vorförderpumpe (EKP) | 0x5FFA | 4 | 1 | 0 | - | - | - | - | ABGLEICH_PROG | 506 | - | Rücksetzen der Lernzähler der Vorförderpumpe (EKP) | 2 |
| KRM | Faktor zur Berechnung einer Korrektur des Ruß-Massenstroms im Magerbetrieb | 0x5FBD | 2 | 1 | 0 | - | - | ABGLEICH_LESEN | - | ABGLEICH_PROG | - | - | Faktor zur Berechnung einer Korrektur des Ruß-Massenstroms im Magerbetrieb | 2 |
| -- | - | 0x00 | 0 | 1 | 0 | 0 | 0 | -- | -- | -- | 0 | -- | -- | -- |

### CSF_WERTE

| LABEL | TEXT | POS | BYTES | FACT_A | FACT_B | UNIT | RESULTNAME | ABID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NUMID | SERVICE Fall - high byte, Abgleich ID - low byte | 4 | 2 | 1,00 | 0,0 | - | STAT_NUMID | - |
| LSUMGES | zurückgerlegte Strecke seit letztem Partikelfiltertausch | 6 | 2 | 1,00 | 0,0 | km | STAT_LSUMGES | - |
| LSUM | Streckenpunkt letzter erfolgreicher Regeneration | 12 | 4 | 1,00 | 0,0 | m | STAT_LSUM | 04 |
| TLRG | Restzeit Regenerationsanforderung nach Zähler | 16 | 4 | 0,01 | 0,0 | s | STAT_TLRG | 07 |
| TEPR | Restzeit Regenerationsanforderung aufgrund Motorschutz | 20 | 4 | 0,01 | 0,0 | s | STAT_TEPR | 08 |
| TMRG | Restzeit Wirkungsgradaghängige Rgdauer letzter Fahrzyklus | 24 | 4 | 1,00 | 0,0 | s | STAT_TMRG | 15 |
| TIRGN | Zeitpunkt letzter erfolgreicher Regeneration | 28 | 4 | 1,00 | 0,0 | s | STAT_TIRGN | 03 |
| TILCK | verbleibende Verriegelungszeit | 40 | 4 | 1,00 | 0,0 | s | STAT_TILCK | 06 |
| MSOT_NK | nichtkontinuierliche Rußmasse | 44 | 2 | 0,01 | 0,0 | g | STAT_MSOT_NK | 01 |
| MSOT_K | kontinuierliche Rußmasse | 46 | 2 | 0,01 | 0,0 | g | STAT_MSOT_K | 02 |
| QFL | verbrauchte Kraftstoffmenge seit letzter Regeneration | 48 | 2 | 0,01 | 0,0 | l | STAT_QFL | 05 |
| ERFREG | Anzahl erfolgreicher Regenerationen | 50 | 2 | 1,00 | 0,0 | - | STAT_ERFREG | 0D |
| ANFREG | Anzahl angeforderter Regenerationen | 52 | 2 | 1,00 | 0,0 | - | STAT_ANFREG | 0E |
| ABREG | Status unvollendete Regeneration | 54 | 2 | 1,00 | 0,0 | - | STAT_ABREG | 0C |
| QFLTOT | verbrauchte Kraftstoffmenge seit letztem Filtertausch | 56 | 4 | 0,01 | 0,0 | l | STAT_QFLTOT | 10 |
| TOXIPREMAX | Schleppzeiger für die Abgastemperatur vor Oxikat | 60 | 2 | 1,00 | 0,0 | °C | STAT_TOXIPREMAX | 11 |
| TPREMAX | Schleppzeiger für die Abgastemperatur vor CSF | 62 | 2 | 1,00 | 0,0 | °C | STAT_TPREMAX | 12 |
| TOXIPRERGNMAX | Schleppzeiger für die Abgastemperatur vor Oxikat bei Regeneration | 64 | 2 | 1,00 | 0,0 | °C | STAT_TOXIPRERGNMAX | 13 |
| TPRERGNMAX | Schleppzeiger für die Abgastemperatur vor CSF bei Regeneration | 66 | 2 | 1,00 | 0,0 | °C | STAT_TPRERGNMAX | 14 |
| -- | - | 0 | 0 | 1,00 | 0,0 | - | STAT_ | - |

### CSF_SERVICEFALL

| SERVICEFALL | BEFEHL | SERVICEFALLNR |
| --- | --- | --- |
| Steuergerätetausch ohne Werteübernahme | SGDEFEKT | 1 |
| Steuergerätetausch mit Werteübernahme | SGTAUSCH | 2 |
| Tausch eines Partikelfilters | FILTERTAUSCH | 3 |
| Rücksetzen des Verriegelungstimers | RESETLOCK | 4 |
| Initialisierung einzelner EEPROM-Werte | EEPROM | 6 |
| -- | -- | - |

### NMK_SWITCH

| LABEL | FUNCID | TEXT |
| --- | --- | --- |
| EEPDEF | 0x02 | Austausch des SG bei defektem EEPROM |
| INJALL | 0x05 | Austausch aller Injektoren |
| INJSINGLE | 0x04 | Austausch eines einzelnen Injektors |
| NMKALL | 0x06 | Kopieren aller Lernwerte |
| NOK | 0xFF | Es wurde kein gültiges LABEL übergeben |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwertprogrammierung bzw. -ruecksetzen war erfolgreich |
| 0x01 | falscher Startwert beim Ruecksetzen (EWS u. DDE passen ni. zusammen) |
| 0x02 | Telegramminhalt war kein Startwert (event. Wechselcode) |
| 0x03 | Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout) |
| 0x04 | Prozess laeuft |
| 0x05 | Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt |
| 0x06 | gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung |
| 0x07 | noch kein Startwert programmiert |
| 0x10 | Startwert nicht korrekt in Flash programmiert |
| 0x11 | Wechselcode nicht korrekt in EEPROM-Spiegel programmiert |
| 0x21 | 2-aus-3-Startwertablage im Flash nicht in Ordnung |
| 0xXY | Fehlerhafter Status |

### LERNWERTE_RUECK

| LABEL | TEXT | LID | BYTES | FACT_A | FACT_B | VGR_TU | VGR_TO | JOB_LESEN | JOB_VERST | JOB_PROG | AUSGNR | DIMENSION | TEXT_ACC | VALUE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARSRE | Rücksetzen ARS-Status- Erkennung | 0xA0BF | - | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | - | - | - | 0x00 |
| IBSRE | Rücksetzen IBS-Erkennung | 0xA0F7 | - | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | - | - | - | 0x00 |
| BBHE | Rücksetzen BBHE-Erkennung | 0xA3DF | - | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | - | - | - | 0x00 |
| LASTKOLL | Rücksetzen Fahrzeugbenutzungsprofil | 0xCA | 48 | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | 200 | - | Fahrzeugnutzungsprofil-Reset | 0x00 |
| LASTZEIT | Rücksetzen Fahrzeugbenutzungsprofil-Betriebsstunde | 0xCB | 4 | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | 201 | - | Betriebsstunden-Reset | 0x00 |
| LSUADAP | Lambda Sonden Adaption | 0xF8 | - | - | - | - | - | - | - | - | - | - | - | 0x00 |
| LSUKALT | Lambda Sonden Kaltstartzähler | 0xF9 | - | - | - | - | - | - | - | - | - | - | - | - |
| MMALSUR | Rücksetzen der MMA und Lambdasonde | 0xD302 | - | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | - | - | - | - |
| MMAR | Rücksetzen der MMA | 0xD304 | - | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | - | - | - | - |
| NMKINJALT | NMK-Tausch alter Injektoren | 0xF7 | - | - | - | - | - | - | - | - | - | - | - | 0x0300 |
| NMKINJEIN | NMK-Tausch einzelner Injektoren | 0xF7 | - | - | - | - | - | - | - | - | 111 | - | NMK-Einzelinjektor | 0x0400 |
| NMKINJTAU | NMK-Tausch aller Injektoren | 0xF7 | - | - | - | - | - | - | - | - | 110 | - | NMK-alle Injektoren | 0x0500 |
| NMKSGD | NMK-SG defekt | 0xF7 | - | - | - | - | - | - | - | - | 114 | - | NMK - Rueck | 0x0200 |
| NMKSGT | NMK-SG Tausch | 0xF7 | - | - | - | - | - | - | - | - | 112 | - | NMK - SG-OK Tausch | 0x0100 |
| PWRHISTRES | Powermangement Start Steuern Histogramm Reset | 0xF504 | - | - | - | - | - | - | - | LERNWERTE_RUECKSETZEN | - | - | - | - |
| -- | - | 0x00 | 0 | 1,0 | 0,0 | 0,0 | 0,0 | -- | -- | -- | 0 | -- | -- | -- |

### HDTEST

| LABEL | TEXT | POS | BYTES | FACT_A | FACT_B | WERT |
| --- | --- | --- | --- | --- | --- | --- |
| RDR_DP | Parameter für RDR beim Test (0, 1 oder 2) | 06 | 1 | 1,0 | 0,0 | 2 |
| RD_MAX | max. Raildruck während HD-Test | 07 | 2 | 10,0 | 0,0 | 1600 |
| RD_MIN | min. Raildruck während HD-Test | 09 | 2 | 10,0 | 0,0 | 300 |
| RD_NULL | Nulllast-Raildruck für HD-Test | 11 | 2 | 10,0 | 0,0 | 600 |
| P_RAMP_DT | Schrittweite für Solldruckrampe | 13 | 2 | 10,0 | 0,0 | 300 |
| DP_AUFBAU | Deltadruckschwelle für Druckaufbau-Zeitmessung | 15 | 2 | 10,0 | 0,0 | 30 |
| DP_ABBAU1 | Druckschwelle für Druckabbau-Zeitmessung 1 | 17 | 2 | 10,0 | 0,0 | 1500 |
| DP_ABBAU2 | Druckschwelle für Druckabbau-Zeitmessung 2 | 19 | 2 | 10,0 | 0,0 | 1000 |
| I_MeUn_CLOSE | Stromvorgabe zum Schliessen der MeUn beim HD-Test | 21 | 2 | 1,0 | 0,0 | 1700 |
| N_HD0 | Drehzahlvorgabe 0 für HD-Test | 23 | 2 | 1,0 | 0,0 | 800 |
| N_HD1 | Drehzahlvorgabe 1 für HD-Test | 25 | 2 | 1,0 | 0,0 | 1200 |
| N_HD2 | Drehzahlvorgabe 2 für HD-Test | 27 | 2 | 1,0 | 0,0 | 1500 |
| N_HD3 | Drehzahlvorgabe 3 für HD-Test | 29 | 2 | 1,0 | 0,0 | 1800 |
| -- | -- | - | - | - | - | - |

### HLTEST

| LABEL | TEXT | POS | BYTES | FACT_A | FACT_B | WERT |
| --- | --- | --- | --- | --- | --- | --- |
| N_LOW | untere Drehzahlschwelle | 06 | 2 | 1,0 | 0,0 | 800 |
| N_START | Startdrehzahl | 08 | 2 | 1,0 | 0,0 | 850 |
| MAXSEGUP | max. Segmentzählimpulse für RunUp-Test | 10 | 2 | 1,0 | 0,0 | 168 |
| MAXSEGDWN | max. Segmentzählimpulse für RunDwn-Test | 12 | 2 | 1,0 | 0,0 | 36 |
| P_HLTST | Istdruck HL-Test | 14 | 2 | 10,0 | 0,0 | 800 |
| Q_HLTST | Injektormenge HL-Test | 16 | 2 | 100,0 | 0,0 | 20 |
| Q_VE1 | gewünschte Injektormenge für VE1 | 18 | 2 | 100,0 | 0,0 | 1,46 |
| T_VE1 | gewünschte Zeit für VE1 | 20 | 2 | 1,0 | 0,0 | 1200 |
| PHI_VE1 | gewünschter Winkel für VE1 | 22 | 2 | 42,667 | 0,0 | 0 |
| Q_VE2 | gewünschte Injektormenge für VE2 | 24 | 2 | 100,0 | 0,0 | 1,2 |
| T_VE2 | gewünschte Zeit für VE2 | 26 | 2 | 1,0 | 0,0 | 2200 |
| PHI_VE2 | gewünschter Winkel für VE2 | 28 | 2 | 42,667 | 0,0 | 0 |
| PHI_HE | gewünschter Winkel für HE | 30 | 2 | 42,667 | 0,0 | 2 |
| ST_INJCHAR | gewünschter Einspritzverlauf | 32 | 1 | 1,0 | 0,0 | 4 |
| TV_AGR | Tastverhältnis für AGR-Ventil | 33 | 2 | 100,0 | 0,0 | 5 |
| TV_LDS | Tastverhältnis für Ladedrucksteller | 35 | 2 | 100,0 | 0,0 | 90 |
| TV_TVA | Tastverhältnis für Drosselklappe | 37 | 2 | 100,0 | 0,0 | 5 |
| TV_DRA | Tastverhältnis für Drallklappe (ab CRS17.14) | 39 | 2 | 100,0 | 0,0 | 5 |
| -- | -- | - | - | - | - | - |

### HLTEST_LIMITS

| LIMIT | VALUE |
| --- | --- |
| MIN | -79 |
| MAX | 49 |

### HDTEST_LIMITS

| LIMIT | VALUE |
| --- | --- |
| AUF1MAX | 570 |
| AUF1MIN | 0 |
| AUF2MAX | 530 |
| AUF2MIN | 0 |
| AUF3MAX | 470 |
| AUF3MIN | 0 |
| AUF4MAX | 370 |
| AUF4MIN | 0 |
| AB1MAX | 4000 |
| AB1MIN | 1000 |
| AB2MAX | 4000 |
| AB2MIN | 1000 |
| AB3MAX | 3500 |
| AB3MIN | 1000 |
| AB4MAX | 3000 |
| AB4MIN | 1000 |
| AB5MAX | 1 |
| AB5MIN | 0 |
| AB6MAX | 1 |
| AB6MIN | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | 021200 Energiesparmode aktiv: Fahrzeug ist auf Fertigungs-, Transport- oder Flashmodus eingestellt | 0 |
| 0x240000 | 240000 Drehmomentüberwachung DCC: Drehmomentanforderung nicht plausibel | 0 |
| 0x240100 | 240100 Drehmomentüberwachung DCC: unerlaubte Drehmomentanforderung bei betätigter Bremse | 0 |
| 0x240400 | 240400 Abgasrückführ-Regelung, Regelabweichung: Luftmasse zu niedrig/positive Regelabweichung | 0 |
| 0x240500 | 240500 Abgasrückführ-Regelung, Regelabweichung: Luftmasse zu hoch/negative Regelabweichung | 0 |
| 0x240600 | 240600 Generator: keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x240700 | 240700 Generator: Kommunikation über BSD-Schnittstelle gestört (falsches Register) | 0 |
| 0x240800 | 240800 Bremsunterdrucksensor, Plausibilität: Unterdruckabbau während Bremsvorgang zu gering | 0 |
| 0x240900 | 240900 DDE-Steuergerät intern (CoVMErrL2): Kontinuierliche Momentenüberwachung, Vortriebssollmoment zu hoch | 0 |
| 0x240A00 | 240A00 DDE-Steuergerät intern (CY320): CY320 SPI-Kommunikation fehlerhaft | 0 |
| 0x240F00 | 240F00 Motorabstellzeit: Motorabstellzeitermittlung fehlerhaft | 0 |
| 0x241000 | 241000 Laufruheregler: Korrekturmenge zu hoch | 0 |
| 0x241100 | 241100 Laufruheregler: Korrekturmenge zu niedrig | 0 |
| 0x241200 | 241200 FMO Einspritzmengen-Beobachter: Mengenfehlerkorrektur über zulässigem Bereich | 0 |
| 0x241300 | 241300 FMO Einspritzmengen-Beobachter: Mengenfehlerkorrektur unter zulässigem Bereich | 0 |
| 0x241400 | 241400 Elektrolüfter: mechanisch blockiert | 0 |
| 0x241500 | 241500 Elektrolüfter: Elektrolüfter Fenster 2 | 0 |
| 0x241600 | 241600 Elektrolüfter: Elektrolüfter Fenster 3 | 0 |
| 0x241700 | 241700 Elektrolüfter: Elektrolüfter Fenster 4 | 0 |
| 0x241800 | 241800 Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x241900 | 241900 Kraftstofffilter: Restlaufleistung niedrig | 0 |
| 0x241A00 | 241A00 Glühsteuergerät, Diagnoserückmeldung: Motorkonfiguration oder Glühstifttyp passt nicht zum Glühsteuergerät | 0 |
| 0x241B00 | 241B00 Glühsteuergerät, Diagnoserückmeldung: interner EEPROM Fehler | 0 |
| 0x241C00 | 241C00 Glühsteuergerät, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x241D00 | 241D00 Botschaft (Fehler_Status_GSG_LIN, 0x17, LIN): Botschaft von Glühsteuergerät GSG ausgefallen | 0 |
| 0x241E00 | 241E00 Botschaft (Status_GSG_LIN, 0x18, LIN): Botschaft von Glühsteuergerät GSG ausgefallen | 0 |
| 0x241F00 | 241F00 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 1 defekt | 0 |
| 0x242000 | 242000 Glühstift Zylinder 1, Ansteuerung: Unterbrechung | 0 |
| 0x242100 | 242100 Glühstift Zylinder 1, Ansteuerung: Kurzschluss | 0 |
| 0x242200 | 242200 Glühstift Zylinder 1, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242300 | 242300 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 2 defekt | 0 |
| 0x242400 | 242400 Glühstift Zylinder 2, Ansteuerung: Unterbrechung | 0 |
| 0x242500 | 242500 Glühstift Zylinder 2, Ansteuerung: Kurzschluss | 0 |
| 0x242600 | 242600 Glühstift Zylinder 2, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242700 | 242700 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 3 defekt | 0 |
| 0x242800 | 242800 Glühstift Zylinder 3, Ansteuerung: Unterbrechung | 0 |
| 0x242900 | 242900 Glühstift Zylinder 3, Ansteuerung: Kurzschluss | 0 |
| 0x242A00 | 242A00 Glühstift Zylinder 3, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242B00 | 242B00 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 4 defekt | 0 |
| 0x242C00 | 242C00 Glühstift Zylinder 4, Ansteuerung: Unterbrechung | 0 |
| 0x242D00 | 242D00 Glühstift Zylinder 4, Ansteuerung: Kurzschluss | 0 |
| 0x242E00 | 242E00 Glühstift Zylinder 4, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x242F00 | 242F00 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 5 defekt | 0 |
| 0x243000 | 243000 Glühstift Zylinder 5, Ansteuerung: Unterbrechung | 0 |
| 0x243100 | 243100 Glühstift Zylinder 5, Ansteuerung: Kurzschluss | 0 |
| 0x243200 | 243200 Glühstift Zylinder 5, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x243300 | 243300 Glühsteuergerät: Glühsteuergerät Endstufe Zylinder 6 defekt | 0 |
| 0x243400 | 243400 Glühstift Zylinder 6, Ansteuerung: Unterbrechung | 0 |
| 0x243500 | 243500 Glühstift Zylinder 6, Ansteuerung: Kurzschluss | 0 |
| 0x243600 | 243600 Glühstift Zylinder 6, Ansteuerung: Glühstiftwiderstand ausserhalb Spezifikation | 0 |
| 0x243700 | 243700 Glühsteuergerät, Diagnoserückmeldung: Masseversatz zwischen Glühsteuergerät und Glühstifte | 0 |
| 0x243800 | 243800 Glühsteuergerät, Diagnoserückmeldung: interner Hardware Fehler | 0 |
| 0x243900 | 243900 Glühsteuergerät, Diagnoserückmeldung: keine Kommunikation | 0 |
| 0x243A00 | 243A00 Glühsteuergerät, Diagnoserückmeldung: Spannung Kl. 30 am Glühsteuergerät fehlt | 0 |
| 0x243B00 | 243B00 Glühsteuergerät, Diagnoserückmeldung: interne Temperatur zu hoch | 0 |
| 0x243C00 | 243C00 Glühsteuergerät, Diagnoserückmeldung: Spannungsdifferenz Glühsteuergerät Kl. 30 zu DDE Versorgungsspannung zu hoch | 0 |
| 0x243D00 | 243D00 Leerlaufdrehzahl, Plausibilität: Ist-Leerlaufdrehzahl zu hoch | 0 |
| 0x243E00 | 243E00 Leerlaufdrehzahl, Plausibilität: Ist-Leerlaufdrehzahl zu niedrig | 0 |
| 0x243F00 | 243F00 Intelligenter Batterie Sensor: keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x244000 | 244000 Motoröl, kritische Ölviskosität: Anteil Dieseleintrag im Motoröl durch häufige Regenerationen zu hoch | 0 |
| 0x244100 | 244100 Motoröl, kritische Ölviskosität: Anteil Dieseleintrag im Motoröl durch häufige Regenerationen zu hoch bei minimaler Ölbefüllung | 0 |
| 0x244200 | 244200 Motoröl, kritische Ölmasse: Dieseleintrag im Motoröl durch häufige Regenerationen zu hoch | 0 |
| 0x244300 | 244300 Motoröl, kritische Ölmasse: Min Error | 0 |
| 0x244400 | 244400 Motoröl, Zustand: kritische Ölviskosität oder kritische Ölmasse durch Dieseleintrag im Motoröl erreicht | 0 |
| 0x244500 | 244500 DDE-Steuergerät intern (MonUMaxSupply1): DDE interne Spannung zu hoch | 0 |
| 0x244600 | 244600 DDE-Steuergerät intern (MonUMinSupply1): DDE interne Spannung zu niedrig | 0 |
| 0x244700 | 244700 Ölzustandssensor: Kommunikation über BSD-Schnittstelle gestört (falsches Register) | 0 |
| 0x244800 | 244800 Info - Partikelfiltersystem: Begrenzte Restlaufstrecke des Partikelfilter verfuegbar | 0 |
| 0x244900 | 244900 Partikelfiltersystem: Maximale Laufstrecke des Partikelfilters überschritten | 0 |
| 0x244A00 | 244A00 Ladedruckregelung Niederdruckstufe, Regelabweichung: Ladedruck zu niedrig/positive Regelabweichung | 0 |
| 0x244B00 | 244B00 Ladedruckregelung Niederdruckstufe, Regelabweichung: Ladedruck zu hoch/negative Regelabweichung | 0 |
| 0x244C00 | 244C00 Ladedruckregelung, Regelabweichung: Ladedruck zu niedrig/positive Regelabweichung | 0 |
| 0x244D00 | 244D00 Ladedruckregelung, Regelabweichung: Ladedruck zu hoch/negative Regelabweichung | 0 |
| 0x244E00 | 244E00 Umgebungsdrucksensor (im Steuergerät verbaut): Umgebungsdruck zu hoch (nicht plausibel zu Druck vor Partikelfilter und Ladedruck) | 0 |
| 0x244F00 | 244F00 Umgebungsdrucksensor (im Steuergerät verbaut): Umgebungsdruck zu niedrig (nicht plausibel zu Druck vor Partikelfilter und Ladedruck) | 0 |
| 0x245000 | 245000 Partikelfiltersystem: Aschevolumen im Partikelfilter über Maximum | 0 |
| 0x245100 | 245100 Ladedrucksensor: Ladedruck zu hoch (nicht plausibel zu Druck vor Partikelfilter und Umgebungsdruck) | 0 |
| 0x245200 | 245200 Ladedrucksensor: Ladedruck zu niedrig (nicht plausibel zu Druck vor Partikelfilter und Umgebungsdruck) | 0 |
| 0x245300 | 245300 Partikelfiltersystem: maximaler Differenzdruck überschritten (Filter verstopft) | 0 |
| 0x245400 | 245400 Partikelfiltersystem: minimaler Differenzdruck unterschritten | 0 |
| 0x245500 | 245500 Partikelfiltersystem: minimaler Differenzdruck nach Regeneration unterschritten | 0 |
| 0x245600 | 245600 Partikelfiltersystem: Motorschutzregeneration wurde aktiviert (Partikelfilter stark beladen) | 0 |
| 0x245700 | 245700 Partikelfiltersystem: Partikelfilter stark beladen (Abgasgegendruck hoch) | 0 |
| 0x245800 | 245800 Partikelfiltersystem: Partikelfilter stark beladen (Abgasgegendruck über Maximum) | 0 |
| 0x245900 | 245900 Abgasgegendrucksensor: Druck vor Partikelfilter zu hoch (nicht plausibel zu Ladedruck und Umgebungsdruck) | 0 |
| 0x245A00 | 245A00 Abgasgegendrucksensor: Druck vor Partikelfilter zu niedrig (nicht plausibel zu Ladedruck und Umgebungsdruck) | 0 |
| 0x245B00 | 245B00 Partikelfiltersystem: maximale Regenerationsdauer überschritten | 0 |
| 0x245C00 | 245C00 Partikelfiltersystem: Strömungswiderstand zu hoch (Filter verstopft) | 0 |
| 0x245D00 | 245D00 Partikelfiltersystem: Strömungswiderstand zu niedrig (Filter defekt oder nicht verbaut) | 0 |
| 0x245E00 | 245E00 Partikelfiltersystem, Plausibilität: Differenz zwischen simulierter und korrelierter Rußmasse zu hoch | 0 |
| 0x245F00 | 245F00 Partikelfiltersystem, Plausibilität: Differenz zwischen simulierter und korrelierter Rußmasse zu niedrig | 0 |
| 0x246000 | 246000 Partikelfiltersystem: Berechnete Rußmasse im Partikelfilter über Maximum | 0 |
| 0x246100 | 246100 Abgasgegendruck nach Turbine, Plausibilität: Abgasgegendruck nicht plausibel | 0 |
| 0x246200 | 246200 Abgastemperatur vor Kat, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246300 | 246300 Abgastemperatur vor Kat während Regeneration, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246400 | 246400 Abgastemperatur vor Kat, Plausibilität: Temperatur unplausibel hoch | 0 |
| 0x246500 | 246500 Abgastemperatur vor Partikelfilter, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246600 | 246600 Abgastemperatur vor Partikelfilter während Regeneration, Plausibilität: zulässige Temperatur überschritten | 0 |
| 0x246700 | 246700 Abgastemperatur vor Partikelfilter, Plausibilität: Temperatur unplausibel hoch | 0 |
| 0x246800 | 246800 Partikelfiltersystem: Filter ist noch regenerierbar | 0 |
| 0x246900 | 246900 Partikelfiltersystem: Filter ist nicht mehr regenerierbar | 0 |
| 0x246A00 | 246A00 Partikelfiltersystem: zu häufige Regenerationen | 0 |
| 0x246B00 | 246B00 Ladedrucksensor, Signal: Plausibilität mit Umgebungsdrucksensor im Leerlauf | 0 |
| 0x246C00 | 246C00 Plausibilität Drucksensoren: Druck vor Partikelfilter, Ladedruck und Umgebungsdruck nicht plausibel zueinander | 0 |
| 0x246D00 | 246D00 DDE-Steuergerät intern (R2S2_MscComm1): R2S2 Baustein 1 MSC-Kommunikation fehlerhaft | 0 |
| 0x246E00 | 246E00 DDE-Steuergerät intern (R2S2_MscComm2): R2S2 Baustein 2 MSC-Kommunikation fehlerhaft | 0 |
| 0x246F00 | 246F00 Raildruck-Plausibilität CPC (gekoppelte Druck/Mengen-Regelung): Stellgröße von Druckregelventil nicht plausibel | 0 |
| 0x247000 | 247000 Raildruck-Plausibilität CPC (gekoppelte Druck/Mengen-Regelung): Minimaldruck unterschritten | 0 |
| 0x247100 | 247100 Raildruck-Plausibilität CPC (gekoppelte Druck/Mengen-Regelung): Maximaldruck überschritten | 0 |
| 0x247500 | 247500 Raildruck-Plausibilität mengengeregelt: Raildruck zu niedrig/positive Regelabweichung | 0 |
| 0x247600 | 247600 Raildruck-Plausibilität mengengeregelt: Raildruck zu niedrig/positive Regelabweichung und Stellgröße zu hoch | 0 |
| 0x247700 | 247700 Raildruck-Plausibilität mengengeregelt: Raildruck zu hoch bei Maximalansteuerung Mengenregelventil (RA negativ) | 0 |
| 0x247900 | 247900 Raildruck-Plausibilität mengengeregelt: Minimaldruck unterschritten | 0 |
| 0x247A00 | 247A00 Raildruck-Plausibilität mengengeregelt: Maximaldruck überschritten | 0 |
| 0x248500 | 248500 Raildruck-Plausibilität druckgeregelt: Raildruck zu niedrig/positive Regelabweichung | 0 |
| 0x248600 | 248600 Raildruck-Plausibilität druckgeregelt: Raildruck zu niedrig/positive Regelabweichung und Ansteuerung Druckregelventil zu hoch | 0 |
| 0x248700 | 248700 Raildruck-Plausibilität druckgeregelt: Raildruck zu hoch/negative Regelabweichung bei Minimalansteuerung Druckregelventil | 0 |
| 0x248900 | 248900 Raildruck-Plausibilität druckgeregelt: Minimaldruck unterschritten | 0 |
| 0x248A00 | 248A00 Raildruck-Plausibilität druckgeregelt: Maximaldruck überschritten | 0 |
| 0x249300 | 249300 Raildrucküberwachung bei Motorstart: Raildruck bei Motorstart zu niedrig | 0 |
| 0x249400 | 249400 Speisespannung 1: Kurzschluss nach Plus oder Masse | 0 |
| 0x249500 | 249500 Speisespannung 2: Kurzschluss nach Plus oder Masse | 0 |
| 0x249600 | 249600 Speisespannung 3: Kurzschluss nach Plus oder Masse | 0 |
| 0x249700 | 249700 Drosselklappensteller: mechanisch defekt (Regelabweichung nahe geschlossener Position) | 0 |
| 0x249800 | 249800 Drosselklappensteller: elektrisch oder mechanisch defekt (Lagesensorfehler, Regelabweichung, Motorüberstrom) | 0 |
| 0x249900 | 249900 Drosselklappensteller: Ansteuersignal unplausibel, Versorgungsspannung ungültig, Übertemperatur | 0 |
| 0x249A00 | 249A00 Drosselklappensteller: elektrisch defekt (EEPROM) | 0 |
| 0x249B00 | 249B00 Ladedrucksteller: Ladedrucksteller elektrisch oder mechanisch defekt oder Übertemperatur | 0 |
| 0x249C00 | 249C00 Ladedrucksteller: Positionssensor im Ladedrucksteller defekt | 0 |
| 0x249D00 | 249D00 Ladedrucksteller, Ansteuerung: Ansteuersignal Ladedrucksteller unplausibel | 0 |
| 0x249E00 | 249E00 Ladedrucksteller: Übertemperaturerkennung im Ladedrucksteller | 0 |
| 0x249F00 | 249F00 Ladedrucksteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24A000 | 24A000 Ladedrucksteller, Statusleitung: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x24A100 | 24A100 Ladedrucksteller, Statusleitung: Kurzschluss nach Masse oder Signal fehlerhaft | 0 |
| 0x24A500 | 24A500 Drallklappensteller: mechanisch defekt (Regelabweichung nahe geschlossener Position) | 0 |
| 0x24A600 | 24A600 Drallklappensteller: elektrisch oder mechanisch defekt (Lagesensorfehler, Regelabweichung, Motorüberstrom) | 0 |
| 0x24A700 | 24A700 Drallklappensteller: Ansteuersignal unplausibel, Versorgungsspannung ungültig, Übertemperatur | 0 |
| 0x24A800 | 24A800 Drallklappensteller: elektrisch defekt (EEPROM) | 0 |
| 0x24A900 | 24A900 Elektrischer Zuheizer: Übertemperaturerkennung im Zuheizer | 0 |
| 0x24AA00 | 24AA00 Elektrischer Zuheizer 2 (nv): Fehler Zuheizer 2 | 0 |
| 0x24AB00 | 24AB00 Elektrischer Zuheizer 3 (nv): Fehler Zuheizer 3 | 0 |
| 0x24AC00 | 24AC00 Elektrischer Zuheizer 4 (nv): Fehler Zuheizer 4 | 0 |
| 0x24AD00 | 24AD00 Elektrischer Zuheizer, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24AE00 | 24AE00 Laufruheregler: Korrekturmenge mehrerer Zylinder ausserhalb zulässigem Bereich | 0 |
| 0x24AF00 | 24AF00 Laufruheregler Zylinder 1: Korrekturmenge zu niedrig | 0 |
| 0x24B000 | 24B000 Laufruheregler Zylinder 5: Korrekturmenge zu niedrig | 0 |
| 0x24B100 | 24B100 Laufruheregler Zylinder 3: Korrekturmenge zu niedrig | 0 |
| 0x24B200 | 24B200 Laufruheregler Zylinder 6: Korrekturmenge zu niedrig | 0 |
| 0x24B300 | 24B300 Laufruheregler Zylinder 2: Korrekturmenge zu niedrig | 0 |
| 0x24B400 | 24B400 Laufruheregler Zylinder 4: Korrekturmenge zu niedrig | 0 |
| 0x24B500 | 24B500 Laufruheregler Zylinder 1: Korrekturmenge zu hoch | 0 |
| 0x24B600 | 24B600 Laufruheregler Zylinder 5: Korrekturmenge zu hoch | 0 |
| 0x24B700 | 24B700 Laufruheregler Zylinder 3: Korrekturmenge zu hoch | 0 |
| 0x24B800 | 24B800 Laufruheregler Zylinder 6: Korrekturmenge zu hoch | 0 |
| 0x24B900 | 24B900 Laufruheregler Zylinder 2: Korrekturmenge zu hoch | 0 |
| 0x24BA00 | 24BA00 Laufruheregler Zylinder 4: Korrekturmenge zu hoch | 0 |
| 0x24BB00 | 24BB00 Nullmengenadaption Injektor Zylinder 1: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BC00 | 24BC00 Nullmengenadaption Injektor Zylinder 5: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BD00 | 24BD00 Nullmengenadaption Injektor Zylinder 3: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BE00 | 24BE00 Nullmengenadaption Injektor Zylinder 6: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24BF00 | 24BF00 Nullmengenadaption Injektor Zylinder 2: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24C000 | 24C000 Nullmengenadaption Injektor Zylinder 4: zulässige gefilterte Ansteuerdauerkorrektur zu hoch | 0 |
| 0x24C100 | 24C100 Nullmengenadaption Injektor Zylinder 1: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C200 | 24C200 Nullmengenadaption Injektor Zylinder 5: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C300 | 24C300 Nullmengenadaption Injektor Zylinder 3: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C400 | 24C400 Nullmengenadaption Injektor Zylinder 6: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C500 | 24C500 Nullmengenadaption Injektor Zylinder 2: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C600 | 24C600 Nullmengenadaption Injektor Zylinder 4: zulässige gefilterte Ansteuerdauerkorrektur zu niedrig | 0 |
| 0x24C700 | 24C700 Anzahl gewünschter Einspritzungen begrenzt: durch Ladungsbilanz des Booster-Kondensators | 0 |
| 0x24C800 | 24C800 Anzahl gewünschter Einspritzungen begrenzt: durch Mengenbilanz der Hochdruckpumpe | 0 |
| 0x24C900 | 24C900 Anzahl gewünschter Einspritzungen begrenzt: durch Steuergeräte Software | 0 |
| 0x24CA00 | 24CA00 Anzahl gewünschter Einspritzungen begrenzt: durch Laufzeit | 0 |
| 0x24CE00 | 24CE00 Luftmassenmesser: Verhältnis berechnete zu gemessener Luftmasse zu groß | 0 |
| 0x24CF00 | 24CF00 Luftmassenmesser: Verhältnis berechnete zu gemessener Luftmasse zu klein | 0 |
| 0x24D000 | 24D000 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Unterbrechung | 0 |
| 0x24D100 | 24D100 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24D200 | 24D200 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24D300 | 24D300 Schaltbare Luftmassenmesser-Versorgung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24D400 | 24D400 Klimaleistungsausgang, Ansteuerung: Unterbrechung | 0 |
| 0x24D500 | 24D500 Klimaleistungsausgang, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24D600 | 24D600 Klimaleistungsausgang, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24D700 | 24D700 Klimaleistungsausgang, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24DA00 | 24DA00 Verdichter-Bypassklappe, Ansteuerung: Unterbrechung | 0 |
| 0x24DB00 | 24DB00 Verdichter-Bypassklappe, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24DC00 | 24DC00 Verdichter-Bypassklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24DD00 | 24DD00 Verdichter-Bypassklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24E200 | 24E200 Kühlmittelthermostat, Plausibilität: Gemessene Temperatur zu niedrig im Vergleich zu modellierter Temperatur | 0 |
| 0x24E400 | 24E400 E-Boxlüfter, Ansteuerung: Unterbrechung | 0 |
| 0x24E500 | 24E500 E-Boxlüfter, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24E600 | 24E600 E-Boxlüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24E700 | 24E700 E-Boxlüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24E800 | 24E800 AGR-Kühler Bypassventil, Ansteuerung: Unterbrechung | 0 |
| 0x24E900 | 24E900 AGR-Kühler Bypassventil, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24EA00 | 24EA00 AGR-Kühler Bypassventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24EB00 | 24EB00 AGR-Kühler Bypassventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24EC00 | 24EC00 Motorlager, Ansteuerung: Unterbrechung | 0 |
| 0x24ED00 | 24ED00 Motorlager, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24EE00 | 24EE00 Motorlager, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24EF00 | 24EF00 Motorlager, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24F000 | 24F000 Freigabeleitung zum CAS, Ansteuerung: Unterbrechung | 0 |
| 0x24F100 | 24F100 Freigabeleitung zum CAS, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24F200 | 24F200 Freigabeleitung zum CAS, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24F300 | 24F300 Freigabeleitung zum CAS, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x24F400 | 24F400 Elektrolüfter, Ansteuerung: Unterbrechung | 0 |
| 0x24F500 | 24F500 Elektrolüfter, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24F600 | 24F600 Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24F700 | 24F700 Kraftstofffilterheizung, Ansteuerung: Unterbrechung | 0 |
| 0x24F800 | 24F800 Kraftstofffilterheizung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x24F900 | 24F900 Kraftstofffilterheizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x24FA00 | 24FA00 Kraftstofffilterheizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x250100 | 250100 Mengenregelventil, Ansteuerung: Unterbrechung | 0 |
| 0x250200 | 250200 Mengenregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x250300 | 250300 Mengenregelventil Stromregelung: ADC signal range check high error of metering unit AD-channel | 0 |
| 0x250400 | 250400 Mengenregelventil Stromregelung: ADC signal range check low error of metering unit AD-channel | 0 |
| 0x250500 | 250500 Raildruckregelventil, Ansteuerung: Unterbrechung | 0 |
| 0x250600 | 250600 Raildruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x250700 | 250700 Stromregelung für Raildruckregelventil: nicht verwendet | 0 |
| 0x250800 | 250800 Stromregelung für Raildruckregelventil: nicht verwendet | 0 |
| 0x250900 | 250900 Raildrucksensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x250A00 | 250A00 Raildrucksensor, Signal: Kurzschluss nach Masse | 0 |
| 0x250F00 | 250F00 Anlasssperr-Relais, Ansteuerung: Unterbrechung | 0 |
| 0x251000 | 251000 Anlasssperr-Relais, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x251100 | 251100 Anlasssperr-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x251200 | 251200 Anlasssperr-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x251300 | 251300 Drosselklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x251400 | 251400 Drosselklappensteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x251500 | 251500 Drosselklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x251600 | 251600 Drosselklappensteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x251700 | 251700 Drosselklappensteller Ausgang 2 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x251800 | 251800 Drosselklappensteller Ausgang 1 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x251900 | 251900 Drosselklappensteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x251A00 | 251A00 Drosselklappensteller, Ansteuerung: Überlastung | 0 |
| 0x251B00 | 251B00 Drosselklappensteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x251C00 | 251C00 Drosselklappensteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x251D00 | 251D00 Drosselklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x251E00 | 251E00 Drosselklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x251F00 | 251F00 Drosselklappensteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252000 | 252000 Drosselklappensteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x252100 | 252100 Wastegate-Ventil, Ansteuerung: Unterbrechung | 0 |
| 0x252200 | 252200 Wastegate-Ventil, Ansteuerung: Endstufe Uebertemperatur | 0 |
| 0x252300 | 252300 Wastegate-Ventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252400 | 252400 Wastegate-Ventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x252500 | 252500 Ladedrucksteller, Ansteuerung: Unterbrechung | 0 |
| 0x252600 | 252600 Ladedrucksteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x252700 | 252700 Ladedrucksteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252800 | 252800 Ladedrucksteller VNT, Ansteuerung: Unterbrechung | 0 |
| 0x252900 | 252900 Ladedrucksteller VNT, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x252A00 | 252A00 Ladedrucksteller VNT, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x252B00 | 252B00 Ladedrucksteller VNT, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x253400 | 253400 Drallklappensteller, Positionsregelung: Drallklappen zu weit offen/positive Regelabweichung | 0 |
| 0x253500 | 253500 Drallklappensteller, Positionsregelung: Drallklappen zu weit offen/positive Regelabweichung nahe geschlossen Position | 0 |
| 0x253600 | 253600 Drallklappensteller, Positionsregelung: Drallklappen zu weit geschlossen/negative Regelabweichung | 0 |
| 0x253700 | 253700 Drallklappensteller, Positionsregelung: Drallklappen zu weit geschlossen/negative Regelabweichung nahe geschlossen Position | 0 |
| 0x253800 | 253800 Elektrischer Zuheizer, Ansteuerung: Unterbrechung | 0 |
| 0x253900 | 253900 Elektrischer Zuheizer, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x253A00 | 253A00 Elektrischer Zuheizer, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x253D00 | 253D00 Injektoren, Spannungsmessung: Spannungsrohwert der Aktorspannungsmessung zu hoch | 0 |
| 0x253E00 | 253E00 Injektoren, Spannungsmessung: Spannungsrohwert der Aktorspannungsmessung zu niedrig | 0 |
| 0x253F00 | 253F00 Injektoren, Ansteuerung: Ansteuerdauer wurde extern verlängert | 0 |
| 0x254A00 | 254A00 Luftmassenmesser: Luftmasse zu niedrig (Signalfrequenz zu niedrig) | 0 |
| 0x254B00 | 254B00 Luftmassenmesser: Luftmasse zu hoch (Signalfrequenz zu hoch) | 0 |
| 0x254C00 | 254C00 Info - Sicherheitsfall: Fahrpedal und Bremse gleichzeitig aktiv | 0 |
| 0x254D00 | 254D00 Versorgungsspannung: Versorgungsspannung DDE überschritten | 0 |
| 0x254E00 | 254E00 Versorgungsspannung: Versorgungsspannung DDE unterschritten | 0 |
| 0x255000 | 255000 Bremsunterdrucksensor, Signal: Kurzschluss nach Plus | 0 |
| 0x255100 | 255100 Bremsunterdrucksensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x255200 | 255200 Kühlmitteltemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x255300 | 255300 Kühlmitteltemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x255400 | 255400 Kühlmitteltemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x255500 | 255500 Kühlmitteltemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x255600 | 255600 AGR-Kühler Bypassventil Positionssensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x255700 | 255700 AGR-Kühler Bypassventil Positionssensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x255800 | 255800 AGR-Kühler Bypassventil Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x255900 | 255900 AGR-Kühler Bypassventil Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x255A00 | 255A00 Steuergerätetemperatur: Temperatur zu hoch | 0 |
| 0x255B00 | 255B00 Abgasrückführsteller, Positionsregelung: Ventil zu weit geschlossen/positive Regelabweichung | 0 |
| 0x255C00 | 255C00 Abgasrückführsteller, Positionsregelung: Ventil zu weit offen/negative Regelabweichung | 0 |
| 0x255D00 | 255D00 Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x255E00 | 255E00 Abgasrückführsteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x255F00 | 255F00 Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x256000 | 256000 Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256100 | 256100 Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256200 | 256200 Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x256300 | 256300 Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x256400 | 256400 Abgasrückführsteller, Ansteuerung: Überlastung | 0 |
| 0x256500 | 256500 Abgasrückführsteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x256600 | 256600 Abgasrückführsteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x256700 | 256700 Niederdruck Abgasrückführsteller Positionsregelung: Ventil zu weit geschlossen/positive Regelabweichung | 0 |
| 0x256800 | 256800 Niederdruck Abgasrückführsteller Positionsregelung: Ventil zu weit offen/negative Regelabweichung | 0 |
| 0x256900 | 256900 Niederdruck Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x256A00 | 256A00 Niederdruck Abgasrückführsteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x256B00 | 256B00 Niederdruck Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x256C00 | 256C00 Niederdruck Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256D00 | 256D00 Niederdruck Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x256E00 | 256E00 Niederdruck Abgasrückführsteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x256F00 | 256F00 Niederdruck Abgasrückführsteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x257000 | 257000 Niederdruck Abgasrückführsteller, Ansteuerung: Überlastung | 0 |
| 0x257100 | 257100 Niederdruck Abgasrückführsteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x257200 | 257200 Niederdruck Abgasrückführsteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x257300 | 257300 Niederdruck Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x257400 | 257400 Niederdruck Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x257500 | 257500 Niederdruck Abgasrückführsteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x257600 | 257600 Niederdruck Abgasrückführsteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x257700 | 257700 Niederdruck Abgasrückführsteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x257800 | 257800 Niederdruck Abgasrückführsteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x257900 | 257900 Abgasrückführsteller, Ansteuerung: Unterbrechung | 0 |
| 0x257A00 | 257A00 Abgasrückführsteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x257B00 | 257B00 Abgasrückführsteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x257C00 | 257C00 Abgasrückführsteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x257D00 | 257D00 Abgasrückführsteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x257E00 | 257E00 Abgasrückführsteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x257F00 | 257F00 Überdrehzahlerkennung: Motordrehzahl mechanisch zu hoch | 0 |
| 0x258000 | 258000 TD-Drehzahlsignal, Ansteuerung: Unterbrechung | 0 |
| 0x258100 | 258100 TD-Drehzahlsignal, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x258200 | 258200 TD-Drehzahlsignal, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x258300 | 258300 Abgasgegendrucksensor, Signal: Signal zu hoch | 0 |
| 0x258400 | 258400 Abgastemperatursensor vor Kat, Signal: Signal zu hoch | 0 |
| 0x258500 | 258500 Abgastemperatursensor vor Partikelfilter, Signal: Signal zu hoch | 0 |
| 0x258600 | 258600 xDFC_EnhSRCMaxT3ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of third exhaust gas temperature | 0 |
| 0x258700 | 258700 Abgasgegendrucksensor: Signal zu niedrig | 0 |
| 0x258800 | 258800 Abgastemperatursensor vor Kat, Signal: Signal zu niedrig | 0 |
| 0x258900 | 258900 Abgastemperatursensor vor Partikelfilter, Signal: Signal zu niedrig | 0 |
| 0x258A00 | 258A00 xDFC_EnhSRCMinT3ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of third exhaust gas temperature | 0 |
| 0x258B00 | 258B00 Umgebungsdrucksensor (im Steuergerät verbaut), Bereich: obere physikalische Grenze überschritten | 0 |
| 0x258C00 | 258C00 Umgebungsdrucksensor (im Steuergerät verbaut), Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x258D00 | 258D00 Umgebungsdrucksensor (im Steuergerät verbaut), Signal: Kurzschluss nach Plus | 0 |
| 0x258E00 | 258E00 Umgebungsdrucksensor (im Steuergerät verbaut), Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x258F00 | 258F00 Umgebungstemperatursensor, Plausibilität: Umgebungstemperatur nicht plausibel | 0 |
| 0x259100 | 259100 Abgastemperatursensor vor Kat, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur vor Kat zu hoch | 0 |
| 0x259200 | 259200 Abgastemperatursensor vor Partikelfilter, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur vor Partikelfilter zu hoch | 0 |
| 0x259300 | 259300 Abgastemperatursensor vor SCR-Kat, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur vor SCR-Kat zu hoch | 0 |
| 0x259700 | 259700 Vorförderdrucksensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x259800 | 259800 Vorförderdrucksensor, Signal: Kurzschluss nach Masse | 0 |
| 0x259900 | 259900 Kraftstofffilter: Filter verstopft | 0 |
| 0x259A00 | 259A00 Vorföderdrucksensor vor Kraftstofffilter, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x259B00 | 259B00 Vorföderdrucksensor vor Kraftstofffilter, Signal: Kurzschluss nach Masse | 0 |
| 0x259C00 | 259C00 Kraftstofftemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x259D00 | 259D00 Kraftstofftemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x259E00 | 259E00 Kraftstofftemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x259F00 | 259F00 Kraftstofftemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25A000 | 25A000 Nullgangsensor, Signal: Periodendauer zu hoch | 0 |
| 0x25A100 | 25A100 Nullgangsensor, Signal: Periodendauer zu niedrig | 0 |
| 0x25A200 | 25A200 Nullgangsensor, Signal: Tastverhältnis zu hoch | 0 |
| 0x25A300 | 25A300 Nullgangsensor, Signal: Tastverhältnis zu niedrig | 0 |
| 0x25A400 | 25A400 Raildruck, Plausibiliät: Raildruck während Raildruckregelung für Injektoransteuerung zu niedrig | 0 |
| 0x25AD00 | 25AD00 Mengenregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x25AE00 | 25AE00 NOx-Sensor vor DeNOx-Kat, Plausibilität: Lambda-Signal im Vergleich zu anderen Sensoren unplausibel | 0 |
| 0x25AF00 | 25AF00 NOx-Sensor vor DeNOx-Kat, Bereich binäres Lambda: obere physikalische Grenze überschritten | 0 |
| 0x25B000 | 25B000 NOx-Sensor vor DeNOx-Kat, Bereich binäres Lambda: untere physikalische Grenze unterschritten | 0 |
| 0x25B100 | 25B100 NOx-Sensor vor DeNOx-Kat, Bereich lineares Lambda: obere physikalische Grenze überschritten | 0 |
| 0x25B200 | 25B200 NOx-Sensor vor DeNOx-Kat, Bereich lineares Lambda: untere physikalische Grenze unterschritten | 0 |
| 0x25B300 | 25B300 NOx-Sensor vor DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu hoch im Schub | 0 |
| 0x25B400 | 25B400 NOx-Sensor vor DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu niedrig im Nachlauf | 0 |
| 0x25B500 | 25B500 NOx-Sensor vor DeNOx-Kat, Bereich NOx: obere physikalische Grenze überschritten | 0 |
| 0x25B600 | 25B600 NOx-Sensor vor DeNOx-Kat, Bereich NOx: untere physikalische Grenze unterschritten | 0 |
| 0x25B700 | 25B700 NOx-Sensor vor DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Unterbrechung | 0 |
| 0x25B800 | 25B800 NOx-Sensor vor DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Kurzschluss | 0 |
| 0x25B900 | 25B900 NOx-Sensor nach DeNOx-Kat, Plausibilität: Lambda-Signal im Vergleich zu anderen Sensoren unplausibel | 0 |
| 0x25BE00 | 25BE00 NOx-Sensor nach DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu hoch im Schub | 0 |
| 0x25BF00 | 25BF00 NOx-Sensor nach DeNOx-Kat, Plausibilität Lambda: Sauerstoffkonzentration zu niedrig im Nachlauf | 0 |
| 0x25C000 | 25C000 NOx-Sensor nach DeNOx-Kat, Bereich NOx: obere physikalische Grenze überschritten | 0 |
| 0x25C100 | 25C100 NOx-Sensor nach DeNOx-Kat, Bereich NOx: untere physikalische Grenze unterschritten | 0 |
| 0x25C200 | 25C200 NOx-Sensor nach DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Unterbrechung | 0 |
| 0x25C300 | 25C300 NOx-Sensor nach DeNOx-Kat, Signal NOx, binäres Lambda, lineares Lambda oder Heizung: Kurzschluss | 0 |
| 0x25C400 | 25C400 Abgasgegendrucksensor, Signal: dynamisch unplausibel | 0 |
| 0x25C500 | 25C500 Umgebungsdrucksensor (im Steuergerät verbaut): Umgebungsdruck nicht plausibel zu Druck vor Partikelfilter | 0 |
| 0x25C600 | 25C600 Abgasdifferenzdrucksensor Partikelfilter, Plausibilität: Schlauchleitungen vertauscht angeschlossen | 0 |
| 0x25C700 | 25C700 Partikelfiltersystem: Schlauchleitung zum Abgasgegendrucksensor vor Partikelfilter abgefallen | 0 |
| 0x25C800 | 25C800 Abgasgegendrucksensor: Sensordrift außerhalb Toleranz | 0 |
| 0x25C900 | 25C900 Abgastemperatursensor vor Partikelfilter, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur zu hoch | 0 |
| 0x25CB00 | 25CB00 Öldrucksensor, Signal: Kurzschluss nach Plus | 0 |
| 0x25CC00 | 25CC00 Öldrucksensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25CD00 | 25CD00 Raildruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x25CE00 | 25CE00 Ladedrucksensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25CF00 | 25CF00 Ladedrucksensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25D000 | 25D000 Ladedrucksensor, Signal: Kurzschluss nach Plus | 0 |
| 0x25D100 | 25D100 Ladedrucksensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25D200 | 25D200 Abgasgegendrucksensor vor Partikelfilter, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25D300 | 25D300 Abgasgegendrucksensor vor Partikelfilter, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25D400 | 25D400 Abgasdrucksensor vor Turbine, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25D500 | 25D500 Abgasdrucksensor vor Turbine, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25D600 | 25D600 Fahrpedalmodul Sensor 1, Signal: Kurzschluss nach Plus | 0 |
| 0x25D700 | 25D700 Fahrpedalmodul Sensor 2, Signal: Kurzschluss nach Plus | 0 |
| 0x25D800 | 25D800 Fahrpedalmodul Sensor 1, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25D900 | 25D900 Fahrpedalmodul Sensor 2, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25DA00 | 25DA00 Abgasdifferenzdrucksensor Partikelfilter, Signal: Kurzschluss nach Plus | 0 |
| 0x25DB00 | 25DB00 Abgasgegendrucksensor vor Partikelfilter, Signal: Kurzschluss nach Plus | 0 |
| 0x25DC00 | 25DC00 Abgasdrucksensor vor Turbine, Signal: Kurzschluss nach Plus | 0 |
| 0x25DE00 | 25DE00 Abgastemperatursensor vor Partikelfilter, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x25E200 | 25E200 Abgasdifferenzdrucksensor Partikelfilter, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25E300 | 25E300 Abgasgegendrucksensor vor Partikelfilter, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25E400 | 25E400 Abgasdrucksensor vor Turbine, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25E600 | 25E600 Abgastemperatursensor vor Partikelfilter, Signal: Kurzschluss nach Masse | 0 |
| 0x25EC00 | 25EC00 Abgasdifferenzdrucksensor Partikelfilter, Plausibilität: Schlauchleitung vor Partikelfilter zum Abgasdifferenzdrucksensor verstopft | 0 |
| 0x25ED00 | 25ED00 Fahrpedalmodul, Plausibilität: Plausibilität zwischen Sensor 1 und 2 verletzt | 0 |
| 0x25EE00 | 25EE00 WakeUp-Leitung (BN 12h) bzw. Klemme 15 (BN 11h): Klemme 15 Kurzschluss nach Masse | 0 |
| 0x25EF00 | 25EF00 Ansauglufttemperatursensor: Temperatur zu hoch (Tastverhältnis zu hoch) | 0 |
| 0x25F000 | 25F000 Ansauglufttemperatursensor: Temperatur zu niedrig (Tastverhältnis zu niedrig) | 0 |
| 0x25F100 | 25F100 Ansauglufttemperatursensor  (Referenzsignal für Luftmassenmesser): Frequenz zu niedrig | 0 |
| 0x25F200 | 25F200 Ansauglufttemperatursensor  (Referenzsignal für Luftmassenmesser): Frequenz zu hoch | 0 |
| 0x25F300 | 25F300 Ansauglufttemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus/Masse oder Temperatur zu hoch | 0 |
| 0x25F400 | 25F400 Ansauglufttemperatursensor, Signal: Temperatur zu niedrig | 0 |
| 0x25F500 | 25F500 Ansauglufttemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x25F600 | 25F600 Ansauglufttemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25F700 | 25F700 Ladelufttemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25F800 | 25F800 Ladelufttemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25F900 | 25F900 Ladelufttemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x25FA00 | 25FA00 Ladelufttemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x25FB00 | 25FB00 Steuergerätetemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x25FC00 | 25FC00 Steuergerätetemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x25FD00 | 25FD00 Steuergerätetemperatursensor, Signal: Kurzschluss nach Plus | 0 |
| 0x25FE00 | 25FE00 Steuergerätetemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x25FF00 | 25FF00 Abgastemperatursensor nach Abgasrückführkühler, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x260000 | 260000 Abgastemperatursensor nach Abgasrückführkühler, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260100 | 260100 Abgastemperatursensor nach Abgasrückführkühler, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x260200 | 260200 Abgastemperatursensor nach Abgasrückführkühler, Signal: Kurzschluss nach Masse | 0 |
| 0x260300 | 260300 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x260400 | 260400 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Signal: Kurzschluss nach Masse | 0 |
| 0x260500 | 260500 Ladelufttemperatursensor im Luftsammler, Bereich : obere physikalische Grenze überschritten | 0 |
| 0x260600 | 260600 Ladelufttemperatursensor im Luftsammler, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260700 | 260700 Ladelufttemperatursensor im Luftsammler, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x260800 | 260800 Ladelufttemperatursensor im Luftsammler, Signal: Kurzschluss nach Masse | 0 |
| 0x260900 | 260900 Abgastemperatursensor vor Katalysator, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x260A00 | 260A00 Abgastemperatursensor vor Katalysator, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260B00 | 260B00 Abgastemperatursensor vor Partikelfilter, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x260C00 | 260C00 Abgastemperatursensor vor Partikelfilter, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x260F00 | 260F00 Drosselklappensteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x261000 | 261000 Drosselklappensteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x263200 | 263200 Drallklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x263300 | 263300 Drallklappensteller, Ansteuerung: maximaler Strom überschritten | 0 |
| 0x263400 | 263400 Drallklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x263500 | 263500 Drallklappensteller Ausgang 1 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x263600 | 263600 Drallklappensteller Ausgang 2 (DC+), Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x263700 | 263700 Drallklappensteller Ausgang 1 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x263800 | 263800 Drallklappensteller Ausgang 2 (DC-), Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x263900 | 263900 Drallklappensteller, Ansteuerung: Überlastung | 0 |
| 0x263A00 | 263A00 Drallklappensteller, Ansteuerung: temperaturabhängiger maximaler Strom überschritten | 0 |
| 0x263B00 | 263B00 Drallklappensteller, Ansteuerung: Versorgungsspannung zu niedrig | 0 |
| 0x263C00 | 263C00 Drallklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x263D00 | 263D00 Drallklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x263E00 | 263E00 Drallklappensteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x263F00 | 263F00 Drallklappensteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x264000 | 264000 Drallklappensteller Positionssensor, Signal: Kurzschluss nach Plus | 0 |
| 0x264100 | 264100 Drallklappensteller Positionssensor, Signal: Unterbrechung oder Kurzschluss nach Masse | 0 |
| 0x264200 | 264200 Fahrgeschwindigkeitssignal: Geschwindigkeitssignal zu hoch | 0 |
| 0x264300 | 264300 Fahrgeschwindigkeitssignal: Plausibilität mit Einspritzmenge und Motordrehzahl | 0 |
| 0x264400 | 264400 Fahrgeschwindigkeitssignal über CAN: Signal fehlerhaft | 0 |
| 0x264500 | 264500 Kupplungsschalter, Signal: nicht plausibel mit Gangwechsel | 0 |
| 0x264600 | 264600 Niederdruck Abgasrückführ-Kühler, Plausibilität: Gemessene Temperatur nach Kühler zu hoch | 0 |
| 0x264700 | 264700 Abgasrückführ-Kühler, Plausibilität: Gemessene Temperatur nach Kühler zu hoch | 0 |
| 0x266000 | 266000 DDE-Steuergerät intern (Injektor Zylinder 1, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266100 | 266100 DDE-Steuergerät intern (Injektor Zylinder 5, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266200 | 266200 DDE-Steuergerät intern (Injektor Zylinder 3, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266300 | 266300 DDE-Steuergerät intern (Injektor Zylinder 6, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266400 | 266400 DDE-Steuergerät intern (Injektor Zylinder 2, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266500 | 266500 DDE-Steuergerät intern (Injektor Zylinder 4, Entladezeitregelung): Entladezeitabweichung zu hoch | 0 |
| 0x266600 | 266600 DDE-Steuergerät intern (Injektor Zylinder 1, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266700 | 266700 DDE-Steuergerät intern (Injektor Zylinder 5, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266800 | 266800 DDE-Steuergerät intern (Injektor Zylinder 3, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266900 | 266900 DDE-Steuergerät intern (Injektor Zylinder 6, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266A00 | 266A00 DDE-Steuergerät intern (Injektor Zylinder 2, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266B00 | 266B00 DDE-Steuergerät intern (Injektor Zylinder 4, Spannungsregelung): Reglereingang unplausibel | 0 |
| 0x266C00 | 266C00 DDE-Steuergerät intern (Injektor Zylinder 1, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x266D00 | 266D00 DDE-Steuergerät intern (Injektor Zylinder 5, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x266E00 | 266E00 DDE-Steuergerät intern (Injektor Zylinder 3, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x266F00 | 266F00 DDE-Steuergerät intern (Injektor Zylinder 6, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x267000 | 267000 DDE-Steuergerät intern (Injektor Zylinder 2, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x267100 | 267100 DDE-Steuergerät intern (Injektor Zylinder 4, Ansteuerspannung): korrigierte Sollansteuerspannung ausserhalb zulässigem Bereich | 0 |
| 0x267200 | 267200 Injektoren Bank 1, Ansteuerung: Kurzschluss | 0 |
| 0x267300 | 267300 Injektoren Bank 2, Ansteuerung: Kurzschluss | 0 |
| 0x267400 | 267400 Injektoren Bank 1, Ladeschalter: Kurzschluss | 0 |
| 0x267500 | 267500 Injektoren Bank 2, Ladeschalter: Kurzschluss | 0 |
| 0x267800 | 267800 Injektor Zylinder 1, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267900 | 267900 Injektor Zylinder 5, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267A00 | 267A00 Injektor Zylinder 3, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267B00 | 267B00 Injektor Zylinder 6, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267C00 | 267C00 Injektor Zylinder 2, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267D00 | 267D00 Injektor Zylinder 4, Ansteuerung: nicht klassifizierbarer Fehler | 0 |
| 0x267E00 | 267E00 Injektor Zylinder 1, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x267F00 | 267F00 Injektor Zylinder 5, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268000 | 268000 Injektor Zylinder 3, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268100 | 268100 Injektor Zylinder 6, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268200 | 268200 Injektor Zylinder 2, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268300 | 268300 Injektor Zylinder 4, Ansteuerung: Minusseite Unterbrechung | 0 |
| 0x268400 | 268400 Injektor Zylinder 1, Ansteuerung: Kurzschluss | 0 |
| 0x268500 | 268500 Injektor Zylinder 5, Ansteuerung: Kurzschluss | 0 |
| 0x268600 | 268600 Injektor Zylinder 3, Ansteuerung: Kurzschluss | 0 |
| 0x268700 | 268700 Injektor Zylinder 6, Ansteuerung: Kurzschluss | 0 |
| 0x268800 | 268800 Injektor Zylinder 2, Ansteuerung: Kurzschluss | 0 |
| 0x268900 | 268900 Injektor Zylinder 4, Ansteuerung: Kurzschluss | 0 |
| 0x268A00 | 268A00 Injektor Zylinder 1, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268B00 | 268B00 Injektor Zylinder 5, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268C00 | 268C00 Injektor Zylinder 3, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268D00 | 268D00 Injektor Zylinder 6, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268E00 | 268E00 Injektor Zylinder 2, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x268F00 | 268F00 Injektor Zylinder 4, Ansteuerung: Minusseite Kurzschluss zur Plusseite | 0 |
| 0x269000 | 269000 Injektor Zylinder 1, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269100 | 269100 Injektor Zylinder 5, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269200 | 269200 Injektor Zylinder 3, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269300 | 269300 Injektor Zylinder 6, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269400 | 269400 Injektor Zylinder 2, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x269500 | 269500 Injektor Zylinder 4, Ansteuerung: Minusseite hochohmiger Kurzschluss zur Plusseite | 0 |
| 0x26A600 | 26A600 Generator (Layer_BSD): Kommunikation über BSD-Schnittstelle nicht plausibel | 0 |
| 0x26A700 | 26A700 Generator (Layer_BSD): keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x26A800 | 26A800 Dummyfehler (Layer_FltMngTst): Maximum | 0 |
| 0x26A900 | 26A900 Dummyfehler (Layer_FltMngTst): Minimum | 0 |
| 0x26AA00 | 26AA00 Dummyfehler (Layer_FltMngTst): Not plausible | 0 |
| 0x26AB00 | 26AB00 Dummyfehler (Layer_FltMngTst): Signal | 0 |
| 0x26AC00 | 26AC00 Generator (Layer_GENELB): Bordnetzspannung im Vergleich zu Generatorsollspannung zu niedrig | 0 |
| 0x26AD00 | 26AD00 xGenerator (Layer_GENELB): Minimum | 0 |
| 0x26AE00 | 26AE00 xGenerator (Layer_GENELB): Not plausible | 0 |
| 0x26AF00 | 26AF00 xGenerator (Layer_GENELB): Signal | 0 |
| 0x26B000 | 26B000 Generator (Layer_GENEL): elektrischer Fehler | 0 |
| 0x26B100 | 26B100 Generator (Layer_GENHTB): Überhitzung (von DDE ermittelt) | 0 |
| 0x26B200 | 26B200 Generator (Layer_GENHT): Überhitzung (durch Generatorregler gemeldet) | 0 |
| 0x26B300 | 26B300 Generator (Layer_GENKOMM): keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x26B400 | 26B400 Generator (Layer_GENMECH): mechanischer Fehler | 0 |
| 0x26B500 | 26B500 Generator (Layer_GEN): Überhitzung | 0 |
| 0x26B600 | 26B600 Generator (Layer_GEN): mechanischer Fehler | 0 |
| 0x26B700 | 26B700 Generator (Layer_GENREGUPL):  falscher Generatorregler verbaut | 0 |
| 0x26B800 | 26B800 Generator (Layer_GEN): elektrischer Fehler | 0 |
| 0x26B900 | 26B900 Generator (Layer_GENUPL): falscher Generatortyp verbaut | 0 |
| 0x26BA00 | 26BA00 Intelligenter Batterie Sensor (Layer_DIBS1): Kommunikation erweitertes BSD Protokoll gestört | 0 |
| 0x26BB00 | 26BB00 Intelligenter Batterie Sensor (Layer_DIBS1): falsche Versionsnummer | 0 |
| 0x26BC00 | 26BC00 Intelligenter Batterie Sensor (Layer_DIBS1): keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x26BD00 | 26BD00 Intelligenter Batterie Sensor (Layer_DIBS2): interne Temperaturmessung defekt | 0 |
| 0x26BE00 | 26BE00 Intelligenter Batterie Sensor (Layer_DIBS2): interne Strommessung defekt | 0 |
| 0x26BF00 | 26BF00 Intelligenter Batterie Sensor (Layer_DIBS2): interne Spannungsmessung defekt | 0 |
| 0x26C000 | 26C000 Intelligenter Batterie Sensor (Layer_DIBS3): Kl15 WakeUp Kurzschluss nach Masse | 0 |
| 0x26C100 | 26C100 Intelligenter Batterie Sensor (Layer_DIBS3): Kl15 WakeUp Plausibilität | 0 |
| 0x26C200 | 26C200 Intelligenter Batterie Sensor (Layer_DIBS3): Systemfehler | 0 |
| 0x26CF00 | 26CF00 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Kraftstoffvorförderdruck zu niedrig/positive Regelabweichung | 0 |
| 0x26D000 | 26D000 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Kraftstoffvorförderdruck zu hoch/negative Regelabweichung | 0 |
| 0x26D100 | 26D100 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Leistungsaufnahme Kraftstoffpumpe für aktuellen Vorförderdruck zu niedrig | 0 |
| 0x26D200 | 26D200 Kraftstoff-Vorförderdruckregelung (Layer_NDR1): Leistungsaufnahme Kraftstoffpumpe für aktuellen Vorförderdruck zu hoch | 0 |
| 0x26D300 | 26D300 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Kraftstofffilterheizung PTC-Heizelement defekt | 0 |
| 0x26D400 | 26D400 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Kraftstofffilterheizung zu häufig aktiviert/Heizleistung zu gering | 0 |
| 0x26D500 | 26D500 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Kraftstoffdruck für aktuelle Kraftstoffpumpen-Ansteuerung zu hoch | 0 |
| 0x26D600 | 26D600 Kraftstoff-Vorförderdruckregelung (Layer_NDR2): Sig | 0 |
| 0x26DB00 | 26DB00 Powermanagement Batterie (Layer_PMBATT): Tiefentladung | 0 |
| 0x26DC00 | 26DC00 Powermanagement Batterie (Layer_PMBATT): Powermanagement defekt | 0 |
| 0x26DD00 | 26DD00 Powermanagement Bordnetz (Layer_PMBN): Überspannung | 0 |
| 0x26DE00 | 26DE00 Powermanagement Bordnetz (Layer_PMBN): Unterspannung | 0 |
| 0x26DF00 | 26DF00 Powermanagement Bordnetz (Layer_PMBN): Ruhestrom | 0 |
| 0x26E000 | 26E000 Powermanagement Bordnetz (Layer_PMBN): Batterieloser Betrieb | 0 |
| 0x26E100 | 26E100 Powermanagement Ruhestrom (Layer_PMRUHVERL): Ruhestromverletzung | 0 |
| 0x26E600 | 26E600 Ölniveau: Ölniveau zu niedrig | 0 |
| 0x26E700 | 26E700 Thermischer Ölniveausensor (Layer_TOENS): Signal fehlerhaft | 0 |
| 0x26E800 | 26E800 Thermischer Ölniveausensor (Layer_TOENS): Unterbrechung oder Kurzschluss nach Plus/Masse (Signalfrequenz zu niedrig) | 0 |
| 0x26EC00 | 26EC00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu hoch im Schub | 0 |
| 0x26ED00 | 26ED00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu niedrig | 0 |
| 0x26EE00 | 26EE00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Status während der Betriebsmodusumschaltung von fett zu mager zu lange ungültig | 0 |
| 0x26EF00 | 26EF00 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu hoch im Schub | 0 |
| 0x26F000 | 26F000 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset zu niedrig | 0 |
| 0x26F100 | 26F100 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Status während der Betriebsmodusumschaltung von fett zu mager zu lange ungültig | 0 |
| 0x26F200 | 26F200 Raildruckregelventil, Ansteuerung: Stromerhöhung bei verzögertem Start aktiv | 0 |
| 0x26F300 | 26F300 Raildrucksensor, Plausibilität: Raildrucksignalgradient zu hoch | 0 |
| 0x26FF00 | 26FF00 Luftmassenmesser: Signalabweichung zu hoch im Leerlauf | 0 |
| 0x270000 | 270000 Luftmassenmesser: Signalabweichung zu hoch in Vollast | 0 |
| 0x270100 | 270100 DDE-Steuergerät intern (ADC): Analog-/Digital-Wandler Einschaltkalibrierung dauert zu lang | 0 |
| 0x270200 | 270200 DDE-Steuergerät intern (ADC): Analog-/Digital-Wandler Spannungswandlung dauert zu lang | 0 |
| 0x270300 | 270300 DDE-Steuergerät intern (ADC2): Analog-/Digital-Wandler Einschaltkalibrierung dauert zu lang | 0 |
| 0x270400 | 270400 DDE-Steuergerät intern (ADC2): Analog-/Digital-Wandler Spannungswandlung dauert zu lang | 0 |
| 0x270500 | 270500 Mengendriftkompensation zurücksetzen: Mengendriftkompensation nach Injektor-Tausch nicht zurückgesetzt | 0 |
| 0x270600 | 270600 Tankfüllstand: sehr niedriger Tankfüllstand erkannt | 0 |
| 0x270700 | 270700 Nullgangsensor, Plausibilität: Nullgangsensor defekt | 0 |
| 0x270A00 | 270A00 Diagnosemaster Test, I14229_ROE_BufFull: Sendequeue voll bei ResponseOnEvent | 0 |
| 0x270C00 | 270C00 Injektor Zylinder 1, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x270D00 | 270D00 Injektor Zylinder 5, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x270E00 | 270E00 Injektor Zylinder 3, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x270F00 | 270F00 Injektor Zylinder 6, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x271000 | 271000 Injektor Zylinder 2, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x271100 | 271100 Injektor Zylinder 4, Injektormengenabgleich: EEPROM-Wert ist 0 oder Checksumme fehlerhaft | 0 |
| 0x271200 | 271200 DDE-Steuergerät intern (IVPSplyDCDCOff_0): DC/DC-Wandler defekt, Bufferkondensator 1 kann nicht geladen werden | 0 |
| 0x271300 | 271300 DDE-Steuergerät intern (IVPSplyDCDCOff_1): DC/DC-Wandler defekt, Bufferkondensator 2 kann nicht geladen werden | 0 |
| 0x271600 | 271600 DDE-Steuergerät intern (Mengenabgleich): Checksumme falsch | 0 |
| 0x271700 | 271700 DDE-Steuergerät intern (Mengendriftkompensation): Checksumme falsch | 0 |
| 0x271900 | 271900 Dummyfehler 1: nicht verwendet | 0 |
| 0x271A00 | 271A00 Thermischer Ölniveausensor: Signal fehlerhaft | 0 |
| 0x271B00 | 271B00 Ölniveausensor: keine Kommunikation | 0 |
| 0x271C00 | 271C00 Raildruckregelventil, Adaption: Adaptionswert zu hoch | 0 |
| 0x271D00 | 271D00 Raildruckregelventil, Adaption: Adaptionswert zu niedrig | 0 |
| 0x271E00 | 271E00 Umschaltung Raildruckregelung MeUn: Raildruckregelung wurde durch Diagnose auf Mengenregelung umgeschaltet MeUn | 0 |
| 0x271F00 | 271F00 Umschaltung Raildruckregelung PCV: Raildruckregelung wurde durch Diagnose auf Druckregelung umgeschaltet PCV | 0 |
| 0x272100 | 272100 Partikelfiltersystem: Schlauchleitung oder Abgasgegendrucksensor vor Partikelfilter eingefroren | 0 |
| 0x272500 | 272500 WakeUp-Leitung (BN 12h) bzw. Klemme 15 (BN 11h): interner Steuergeräte-Fehler (Klemme 15 Auswerteschaltung defekt) | 0 |
| 0x272800 | 272800 Kühlmitteltemperatursensor, Plausibilität: Absolute plausibility test | 0 |
| 0x272900 | 272900 Kühlmitteltemperatursensor, Plausibilität: kein Temperaturanstieg | 0 |
| 0x272A00 | 272A00 Kühlmitteltemperatursensor, Plausibilität: Temperatur permanent zu hoch | 0 |
| 0x272B00 | 272B00 DDE-Steuergerät intern (EEP): EEP Fehler beim Löschen | 0 |
| 0x272C00 | 272C00 DDE-Steuergerät intern (EEP): EEP Fehler beim Lesen | 0 |
| 0x272D00 | 272D00 DDE-Steuergerät intern (EEP): EEP Fehler beim Schreiben | 0 |
| 0x272E00 | 272E00 Abgasrückführventil, Plausibilität: mechanisch defekt nahe geschlossener Position | 0 |
| 0x272F00 | 272F00 Abgasrückführventil, Plausibilität: mechanisch defekt nahe offener Position | 0 |
| 0x273000 | 273000 Niederdruck Abgasrückführventil, Plausibilität: mechanisch defekt nahe geschlossener Position | 0 |
| 0x273100 | 273100 Niederdruck Abgasrückführventil, Plausibilität: mechanisch defekt nahe offener Position | 0 |
| 0x273200 | 273200 Niederdruck Abgasrückführsteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x273300 | 273300 Niederdruck Abgasrückführventil, Plausibilität: mechanisch defekt während Offset-lernen | 0 |
| 0x273400 | 273400 Niederdruck Abgasrückführventil, Plausibilität: EEPROM Initwerte gesetzt | 0 |
| 0x273500 | 273500 Niederdruck Abgasrückführsteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x273600 | 273600 Abgasrückführsteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x273700 | 273700 Abgasrückführventil, Plausibilität: mechanisch defekt während Offset-lernen | 0 |
| 0x273800 | 273800 Abgasrückführventil, Plausibilität: EEPROM Initwerte gesetzt | 0 |
| 0x273900 | 273900 Abgasrückführsteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x273A00 | 273A00 DDE-Steuergerät intern (EngICO): Injektorabschaltung bei hoher Drehzahl während Momentenbegrenzung aus Ebene2 | 0 |
| 0x273B00 | 273B00 Nockenwellensensor, Signal: falsches Signal | 0 |
| 0x273C00 | 273C00 Nockenwellensensor, Signal: kein Signal | 0 |
| 0x273D00 | 273D00 Drehzahlüberwachung: Differenz zwischen Kurbelwellen- und Nockenwellen-Position zu hoch | 0 |
| 0x273E00 | 273E00 Kurbelwellensensor, Signal: falsches Signal | 0 |
| 0x273F00 | 273F00 Kurbelwellensensor, Signal: kein Signal | 0 |
| 0x274000 | 274000 Kraftstofftemperatursensor, Plausibilität: Differenz Kraftstofftemperatur zu Referenztemperatur zu hoch | 0 |
| 0x274300 | 274300 Diagnosemodus Kompressionstest: Kompressionstest aktiviert | 0 |
| 0x274900 | 274900 DDE-Hauptrelais: Relais schaltet zu früh ab oder Unterspannung | 0 |
| 0x274C00 | 274C00 Aussetzererkennung Zylinder 1: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x274D00 | 274D00 Aussetzererkennung Zylinder 5: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x274E00 | 274E00 Aussetzererkennung Zylinder 3: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x274F00 | 274F00 Aussetzererkennung Zylinder 6: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275000 | 275000 Aussetzererkennung Zylinder 2: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275100 | 275100 Aussetzererkennung Zylinder 4: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275200 | 275200 Aussetzererkennung in mehreren Zylindern: Anzahl erkannter Aussetzer zu hoch | 0 |
| 0x275300 | 275300 DDE-Steuergerät intern (MoCADCNTP): Hardware Fehler, Analog-/Digital-Wandler NTP fehlerhaft | 0 |
| 0x275400 | 275400 DDE-Steuergerät intern (MoCADCTst): Hardware Fehler, Analog-/Digital-Wandler Spannung zu hoch | 0 |
| 0x275500 | 275500 DDE-Steuergerät intern (MoCADCVltgRatio): Hardware Fehler, Analog-/Digital-Wandler Spannungsverhältnis unplausibel | 0 |
| 0x275600 | 275600 DDE-Steuergerät intern (MoCComErrCnt): Hardware Fehler, Plausibilisierung von Funktionsrechner und Überwachungsmodul | 0 |
| 0x275700 | 275700 DDE-Steuergerät intern (MoCComSPI): Hardware Fehler, SPI-Kommunikation gestört | 0 |
| 0x275800 | 275800 DDE-Steuergerät intern (MoCROMErrXPg): Hardware Fehler, ROM defekt | 0 |
| 0x275900 | 275900 DDE-Steuergerät intern (MoCSOPHwNoRdy): Hardware Fehler, Hardware Initialisierung dauert zu lange | 0 |
| 0x275A00 | 275A00 DDE-Steuergerät intern (MoCSOPLoLi): Hardware Fehler, interne Spannung zu niedrig während Abschaltpfadtest | 0 |
| 0x275B00 | 275B00 DDE-Steuergerät intern (MoCSOPMM): Hardware Fehler, Watchdog Überwachungsmodul | 0 |
| 0x275C00 | 275C00 DDE-Steuergerät intern (MoCSOPTimeOut): Hardware Fehler, Abschaltpfadtest dauert zu lange | 0 |
| 0x275D00 | 275D00 DDE-Steuergerät intern (MoCSOPUpLi): Hardware Fehler, interne Spannung zu hoch während Abschaltpfadtest | 0 |
| 0x275E00 | 275E00 Funktionale Steuergeräteüberwachung, Fahrpedalmodul: Plausibilitaet zwischen Sensor 1 und 2 verletzt | 0 |
| 0x275F00 | 275F00 DDE-Steuergerät intern (MoFESpd): Kontinuierliche Momentenüberwachung, Motordrehzahlfehler | 0 |
| 0x276000 | 276000 DDE-Steuergerät intern (MoFInjDatPhi): Kontinuierliche Momentenüberwachung, Plausibilität zwischen Ansteuerbeginn und Einspritzart | 0 |
| 0x276200 | 276200 DDE-Steuergerät intern (MoFOvR): Kontinuierliche Momentenüberwachung, Schubüberwachung | 0 |
| 0x276300 | 276300 DDE-Steuergerät intern (MoFVehAccET): Beschleunigungsgeführte Momentenüberwachung, Ansteuerdauer nicht plausibel | 0 |
| 0x276400 | 276400 DDE-Steuergerät intern (MoFVehAccErrDiff): Beschleunigungsgeführte Momentenüberwachung, Ist-Beschleunigung größer Soll-Beschleunigung | 0 |
| 0x276500 | 276500 NOx-Sensor vor DeNOx-Kat, Heizung: Temperatur nach Aufheizphase zu niedrig | 0 |
| 0x276600 | 276600 NOx-Sensor nach DeNOx-Kat, Heizung: Temperatur nach Aufheizphase zu niedrig | 0 |
| 0x276900 | 276900 Kennfelder PhyMod_trq2qBasX_MAP falsch appliziert: Kennfeldwerte nicht plausibel | 0 |
| 0x276B00 | 276B00 Raildrucksensor Offset-Test: Offset Maximum überschritten | 0 |
| 0x276C00 | 276C00 Raildrucksensor Offset-Test: Offset Minimum unterschritten | 0 |
| 0x276D00 | 276D00 EWS-Manipulationsschutz: Check of maximum for DFP_SIA_E1 | 0 |
| 0x276E00 | 276E00 EWS-Manipulationsschutz: Noch kein Secret Key programmiert | 0 |
| 0x276F00 | 276F00 EWS-Manipulationsschutz: Kein authentisches Response erhalten | 0 |
| 0x277000 | 277000 EWS-Manipulationsschutz: Signal check for DFP_SIA_E1 | 0 |
| 0x277100 | 277100 Schnittstelle EWS-DDE: CAS-Bus HW-Fehler | 0 |
| 0x277200 | 277200 Schnittstelle EWS-DDE: Empfangsfehler der CAS-Schnittstelle, Frame-Fehler | 0 |
| 0x277300 | 277300 Schnittstelle EWS-DDE: Empfangsfehler der CAS-Schnittstelle, CRC-Fehler | 0 |
| 0x277400 | 277400 Schnittstelle EWS-DDE: Timeout EWS4 Telegramm | 0 |
| 0x277500 | 277500 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, kein freier Secret Key verfügbar | 0 |
| 0x277600 | 277600 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, Schreibfehler FSC | 0 |
| 0x277700 | 277700 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, Checksummenfehler | 0 |
| 0x277800 | 277800 DDE-Steuergerät intern (EWS-Daten): EWS-Daten, Schreibfehler Secret Key | 0 |
| 0x277900 | 277900 Botschaft EWS-DDE fehlerhaft: Check of maximum for DFP_SIA_E4 | 0 |
| 0x277A00 | 277A00 Botschaft EWS-DDE fehlerhaft: Empfangsfehler CAN-Bus | 0 |
| 0x277B00 | 277B00 Botschaft EWS-DDE fehlerhaft: Plausibility check for DFP_SIA_E4 | 0 |
| 0x277C00 | 277C00 Botschaft EWS-DDE fehlerhaft: Timeout EWS4-Telegramm | 0 |
| 0x277D00 | 277D00 DDE-Steuergerät intern (Recovery visible): Recovery aufgetreten | 0 |
| 0x277E00 | 277E00 DDE-Steuergerät intern (Recovery locked): Recovery aufgetreten | 0 |
| 0x277F00 | 277F00 DDE-Steuergerät intern (Recovery suppressed): Recovery aufgetreten | 0 |
| 0x278500 | 278500 Motorabstellzeit, Plausibilität: Ermittlung Motorabstellzeit nicht plausibel | 0 |
| 0x278600 | 278600 Ansauglufttemperatursensor, Plausibilität: Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x278700 | 278700 Ladelufttemperatursensor, Plausibilität: Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x278800 | 278800 Abgastemperatursensor nach Abgasrückführkühler, Plausibilität: Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x278900 | 278900 Drosselklappensteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x278A00 | 278A00 Drosselklappensteller: elektrisch oder mechanisch defekt | 0 |
| 0x278B00 | 278B00 Drosselklappe, Plausibilität: Drosselklappe mechanisch defekt während Offset-lernen | 0 |
| 0x278C00 | 278C00 Drosselklappe, Positionsregelung : Drosselklappe zu weit geschlossen/positive Regelabweichung | 0 |
| 0x278D00 | 278D00 Drosselklappe, Positionsregelung : Drosselklappe zu weit offen/negative Regelabweichung | 0 |
| 0x278E00 | 278E00 Drosselklappensteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x278F00 | 278F00 Drallklappe, Plausibilität: mechanisch defekt | 0 |
| 0x279000 | 279000 Drallklappensteller Position, Langzeit-Drift: Positionsabweichung zu hoch (Aktuell/Neuzustand) | 0 |
| 0x279100 | 279100 Drallklappe, Plausibilität: Drallklappe mechanisch defekt während Offset-lernen | 0 |
| 0x279200 | 279200 Drallklappe, Plausibilität: EEPROM Initwerte gesetzt | 0 |
| 0x279300 | 279300 Drallklappensteller Position, Kurzzeit-Drift: Positionsabweichung zu hoch (Aktuell/letzter Fahrzyklus) | 0 |
| 0x279400 | 279400 Drallklappe, Plausibilität: Feder gebrochen | 0 |
| 0x279700 | 279700 Aktive-Kühlluftklappe, Diagnoserückmeldung: Anschlag geschlossen wurde nicht erkannt | 0 |
| 0x279800 | 279800 Aktive-Kühlluftklappe, Diagnoserückmeldung: Anschlag offen wurde zu früh erkannt | 0 |
| 0x279900 | 279900 Aktive-Kühlluftklappe, Diagnoserückmeldung: Anschlag offen wurde nicht erkannt | 0 |
| 0x279A00 | 279A00 Aktive-Kühlluftklappe, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x279B00 | 279B00 Aktive-Kühlluftklappe, Diagnoserückmeldung: elektrischer Fehler | 0 |
| 0x279C00 | 279C00 Aktive-Kühlluftklappe, Diagnoserückmeldung: Temperaturfehler | 0 |
| 0x279D00 | 279D00 Aktive-Kühlluftklappe, Diagnoserückmeldung: Spannungsfehler | 0 |
| 0x279E00 | 279E00 Elektrolüfter-Spannungsversorgung, Ansteuerung: Unterbrechung | 0 |
| 0x279F00 | 279F00 Elektrolüfter-Spannungsversorgung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x27A000 | 27A000 Elektrolüfter-Spannungsversorgung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x27A100 | 27A100 Elektrolüfter-Spannungsversorgung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x27A600 | 27A600 DDE-Steuergerät, Varianten-Codierung: Vergleich Codierprüfstempel zu VIN fehlerhaft | 0 |
| 0x27A700 | 27A700 DDE-Steuergerät, Varianten-Codierung: empfangene Codierdaten unplausibel | 0 |
| 0x27A800 | 27A800 DDE-Steuergerät, Varianten-Codierung: Varianten-Codierung fehlt oder Neutraldaten verwendet | 0 |
| 0x27A900 | 27A900 DDE-Steuergerät, Varianten-Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x27AA00 | 27AA00 DDE-Steuergerät, Varianten-Codierung: Abbruch während Codierdaten oder Codierprüfstempel schreiben | 0 |
| 0x27AB00 | 27AB00 DDE-Steuergerät intern (Zyklische Authentisierung): Datensatzprüfung nicht in Ordnung | 0 |
| 0x27AC00 | 27AC00 DDE-Steuergerät intern (Zyklische Authentisierung): Programmstandsprüfung nicht in Ordnung | 0 |
| 0x27AF00 | 27AF00 DDE-Steuergerät intern (MoFBrk): Beschleunigungsgeführte Momentenüberwachung, Ebene 2 Bremssignal nicht plausibel | 0 |
| 0x27B200 | 27B200 Niederdruck Abgasrückführ-Kühler, Plausibilität: Kühlerwirkungsgrad zu niedrig | 0 |
| 0x27B300 | 27B300 xDFC_ASModPIndVolDvtMax: Dfc for TwinTrbn observer | 0 |
| 0x27B400 | 27B400 xDFC_ASModPIndVolDvtMaxLP: Dfc for TwinTrbn observer | 0 |
| 0x27B500 | 27B500 xDFC_ASModPIndVolDvtMin: Dfc for TwinTrbn observer | 0 |
| 0x27B600 | 27B600 xDFC_ASModPIndVolDvtMinLP: Dfc for TwinTrbn observer | 0 |
| 0x27B700 | 27B700 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu hoch | 0 |
| 0x27B800 | 27B800 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu hoch während Ladedruckregelung Niederdruckstufe | 0 |
| 0x27B900 | 27B900 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu niedrig | 0 |
| 0x27BA00 | 27BA00 Abgasdruck vor Turbine, Plausibilität: Differenz gemessener zu berechnetem Abgasdruck zu niedrig während Ladedruckregelung Niederdruckstufe | 0 |
| 0x27BB00 | 27BB00 Botschaft (Ladedrucksteller-Diagnoserückmeldung, 0xXX): Signal(e) in Botschaft nicht gültig | 0 |
| 0x27BC00 | 27BC00 Botschaft (Ladedrucksteller-Diagnoserückmeldung, 0xXX): Botschaft von Ladedrucksteller ausgefallen | 0 |
| 0x27BD00 | 27BD00 Bitserielle Datenschnittstelle BSD: Kurzschluss | 0 |
| 0x27BE00 | 27BE00 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu hoch (aktuelle Stellgröße des inneren Regelkreises am Maximalwert) | 0 |
| 0x27BF00 | 27BF00 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu niedrig (aktuelle Stellgröße des inneren Regelkreises am Minimalwert) | 0 |
| 0x27C000 | 27C000 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu hoch (aktuelle Stellgröße des äußeren Regelkreises am Maximalwert) | 0 |
| 0x27C100 | 27C100 Abgastemperaturregler, Regelabweichung: Abweichung zum Temperatursollwert zu niedrig (aktuelle Stellgröße des äußeren Regelkreises am Minimalwert) | 0 |
| 0x27C200 | 27C200 Partikelfiltersystem: zu häufige Motorschutzregenerationen | 0 |
| 0x27C700 | 27C700 Umgebungstemperatursensor, Plausibilität: Umgebungstemperatur nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27C800 | 27C800 Reduktionsmittel-AktivtankTemperatursensor, Plausibilität: Reduktionsmittel-Aktivtank Temperatur nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27C900 | 27C900 Ladelufttemperatursensor, Plausibilität: Ladelufttemperatur nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27CA00 | 27CA00 Abgastemperatursensor nach Abgasrückführkühler, Plausibilität: Temperatur nach Abgasrückführkühler nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27CB00 | 27CB00 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Plausibilität: Temperatur nach Niederdruck-Abgasrückführkühler nicht plausibel zu den restlichen Temperatursignalen | 0 |
| 0x27CC00 | 27CC00 Temperatursensoren, Plausibilität: Mehrere Temperatursignale zueinander nicht plausibel | 0 |
| 0x27D000 | 27D000 Luftmassenmesser, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27D100 | 27D100 Luftmassenmesser, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27D200 | 27D200 Niederdruck Abgasrückführsteller Positionssensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27D500 | 27D500 Niederdruck Abgasrückführsteller Positionssensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27D800 | 27D800 Abgasrückführsteller Positionssensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27D900 | 27D900 Abgasrückführsteller Positionssensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27DA00 | 27DA00 Umgebungstemperatursensor, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x27DB00 | 27DB00 Umgebungstemperatursensor, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x27DC00 | 27DC00 xDFC_ExhFlpLPGovDvtMax: DFC for Governor deviation crossing max threshold | 0 |
| 0x27DD00 | 27DD00 xDFC_ExhFlpLPGovDvtMin: DFC for Governor deviation crossing min threshold | 0 |
| 0x27DE00 | 27DE00 xDFC_ExhFlpLPOL: No load error | 0 |
| 0x27DF00 | 27DF00 xDFC_ExhFlpLPSCB: Short circuit to battery error | 0 |
| 0x27E000 | 27E000 xDFC_ExhFlpLPSCG: Short circuit to ground error | 0 |
| 0x27E100 | 27E100 xDFC_ExhFlpLPSRCMax: DFC for signal range check high error | 0 |
| 0x27E200 | 27E200 xDFC_ExhFlpLPSRCMin: DFC for signal range check low error | 0 |
| 0x27E300 | 27E300 Vorförderdrucksensor, Offset-Test: Offset ausserhalb zulässigem Bereich | 0 |
| 0x27ED00 | 27ED00 Abgastemperaturregler, Plausibilität: Ansprechzeit des inneren Regelkreises zu hoch | 0 |
| 0x27EE00 | 27EE00 Abgastemperaturregler, Plausibilität: Ansprechzeit des äußeren Regelkreises zu hoch | 0 |
| 0x27EF00 | 27EF00 Partikelfiltersystem: erhöhte Regenerationsdauer | 0 |
| 0x27F000 | 27F000 Ladeluftschlauch-Überwachung im Leerlauf: Ladeluftschlauch abgefallen | 0 |
| 0x27F100 | 27F100 Ladeluftschlauch-Überwachung: Ladeluftschlauch abgefallen | 0 |
| 0x27F200 | 27F200 Motorschutz: Motorabschaltung bei Überdrehzahl wegen Ölansaugung | 0 |
| 0x27F300 | 27F300 Kraftstofftemperatursensor, Plausibilität: Temperatursignalgradient zu hoch | 0 |
| 0x27F400 | 27F400 Injektor Zylinder 1, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F500 | 27F500 Injektor Zylinder 5, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F600 | 27F600 Injektor Zylinder 3, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F700 | 27F700 Injektor Zylinder 6, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F800 | 27F800 Injektor Zylinder 2, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27F900 | 27F900 Injektor Zylinder 4, Injektormengenabgleich: IMA-Programmierung fehlt | 0 |
| 0x27FA00 | 27FA00 Umgebungstemperatursensor, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x27FB00 | 27FB00 Umgebungstemperatursensor, Signal: Kurzschluss nach Masse | 0 |
| 0x27FC00 | 27FC00 DDE-Steuergerät intern (IVHFreeInjPlcErr): Kollision bei der Programmierung der Einspritzplätze | 0 |
| 0x27FD00 | 27FD00 DDE-Steuergerät intern (MoCSOPErrMMRespByte): Hardware Fehler, Synchronisationsverlust vom Watchdog zur CPU | 0 |
| 0x27FE00 | 27FE00 DDE-Steuergerät intern (MoCSOPErrRespTime): Hardware Fehler, Antwortzeitumschaltung für den Watchdog funktioniert nicht | 0 |
| 0x27FF00 | 27FF00 DDE-Steuergerät intern (MoCSOPErrSPI): Hardware Fehler, SPI Kommunikationsfehler während des Abschaltpfadtests | 0 |
| 0x280000 | 280000 DDE-Steuergerät intern (MoCSOPOSTimeOut): Hardware Fehler, Betriebssystemzeitüberschreitung für Abschaltpfadtestprozess ist überschritten | 0 |
| 0x280100 | 280100 DDE-Steuergerät intern (MoCSOPPSIniTimeOut): Hardware Fehler, keine Einspritzungen möglich | 0 |
| 0x280200 | 280200 Partikelfiltersystem, Plausibilität: Partikelfilter-Effizienz zu niedrig | 0 |
| 0x280300 | 280300 Partikelfiltersystem: Regeneration unvollständig | 0 |
| 0x280400 | 280400 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Differenz Startwert zu Referenztemperatur zu hoch | 0 |
| 0x280500 | 280500 Abgasrückführ-Kühler, Plausibilität: Kühlerwirkungsgrad zu niedrig | 0 |
| 0x280C00 | 280C00 NOx-Sensor vor DeNOx-Kat, Versorgungsspannung: Versorgungsspannung am Nox-Sensor zu niedrig | 0 |
| 0x280D00 | 280D00 NOx-Sensor vor DeNOx-Kat, Signal NOx: NOx-Signal zu lange ungültig | 0 |
| 0x280E00 | 280E00 NOx-Sensor nach DeNOx-Kat, Versorgungsspannung: Versorgungsspannung am Nox-Sensor zu niedrig | 0 |
| 0x280F00 | 280F00 NOx-Sensor nach DeNOx-Kat, Signal NOx: NOx-Signal zu lange ungültig | 0 |
| 0x281600 | 281600 Abgasrückführ-Regelung, Funktion: Maximale Zeitdauer bis Abgasrückführ-Regelung aktiv überschritten | 0 |
| 0x281700 | 281700 Öldruckschalter, Plausibilität: Öldruckstatus nicht plausibel zu Motorbetriebszustand | 0 |
| 0x281800 | 281800 Ladedruckregelung, Plausibilität: Maximal zulässiger Ladedruck überschritten | 0 |
| 0x281900 | 281900 Partikelfiltersystem: Unplausibler Abgasgegedrucksprung (ResFlow-Sprung) erkannt | 0 |
| 0x281A00 | 281A00 Lambdasonde: unplausible Sauerstoffkonzentration (Signal durch Heizung beeinflusst) | 0 |
| 0x281B00 | 281B00 Lambdasonde nach Kat: unplausible Sauerstoffkonzentration (Signal durch Heizung beeinflusst) | 0 |
| 0x281C00 | 281C00 Lambdaregelung, Regelabweichung: Lambda zu hoch/negative Regelabweichung (im Fettbetrieb während DeNOx-Kat-Regeneration) | 0 |
| 0x281D00 | 281D00 Lambdaregelung, Regelabweichung: Lambda zu niedrig/positive Regelabweichung (im Fettbetrieb während DeNOx-Kat-Regeneration) | 0 |
| 0x281E00 | 281E00 Lambdaregelung, Plausibilität: Einregeldauer nach Regelungsbeginn zu lang (instabile Lambdavorsteuerung) | 0 |
| 0x281F00 | 281F00 xDFC_NSCLamBinDynMax: Lambda signal error during new lean mode (Lambda is still rich Down Stream of NSC) | 0 |
| 0x282000 | 282000 xDFC_NSCLamBinSlpMax: Lambda signal error at the start of Rich Mode operation (Lambda is rich immediately Down Stream of NSC) | 0 |
| 0x282100 | 282100 xDFC_NSCLamBinStkRMMin: Lambda signal error at the end of Rich Mode Operation (Lambda is still lean Down Stream of NSC) | 0 |
| 0x282200 | 282200 xDFC_NSCLamDynNSCDsNegMax: Fault check Path for the derivative lambda value downstream NSC | 0 |
| 0x282300 | 282300 xDFC_NSCLamDynNSCDsPosMin: Fault check Path for the derivative lambda value downstream NSC | 0 |
| 0x282400 | 282400 xDFC_NSCLamDynTrbnDsNegMax: Fault check Path for the derivative lambda value upstream NSC | 0 |
| 0x282500 | 282500 xDFC_NSCLamDynTrbnDsPosMin: Fault check Path for the derivative lambda value upstream NSC | 0 |
| 0x282600 | 282600 xDFC_NSCNOxDyn: Fault check Path for the dynamic NOx signal | 0 |
| 0x282700 | 282700 xDFC_NSCNOxSlipMax: Fault check Path for the NSC NOx slip | 0 |
| 0x282800 | 282800 xDFC_NSCNOxStkRM: Fault check Path for the static NOx signal during rich-mixture operation | 0 |
| 0x282900 | 282900 NOx-Speicherkat, Plausibilität: NOx Regenerationswirkungsgrad zu niedrig | 0 |
| 0x282A00 | 282A00 NOx Speicherkat, Plausibilität: NSC-Speicherfähigkeit zu niedrig (Reduktionsmittelschlupf zu hoch) | 0 |
| 0x282B00 | 282B00 Abgasrückführraten-Regelung, Regelabweichung: Abgasrückführrate zu niedrig/positive Regelabweichung | 0 |
| 0x282C00 | 282C00 Abgasrückführraten-Regelung, Regelabweichung: Abgasrückführrate zu hoch/negative Regelabweichung | 0 |
| 0x282D00 | 282D00 Lambdasonde, Ansteuerung Heizung: Kurzschluss nach Plus | 0 |
| 0x282E00 | 282E00 Lambdasonde nach Kat, Ansteuerung Heizung: Kurzschluss nach Plus | 0 |
| 0x282F00 | 282F00 Lambdasonde, Ansteuerung Heizung: Kurzschluss nach Masse | 0 |
| 0x283000 | 283000 Lambdasonde nach Kat, Ansteuerung Heizung: Kurzschluss nach Masse | 0 |
| 0x283100 | 283100 Lambdasonde, Ansteuerung Heizung: Endstufe Übertemperatur | 0 |
| 0x283200 | 283200 Lambdasonde nach Kat, Ansteuerung Heizung: Endstufe Übertemperatur | 0 |
| 0x283300 | 283300 Lambdasonde, Ansteuerung Heizung: Unterbrechung | 0 |
| 0x283400 | 283400 Lambdasonde nach Kat, Ansteuerung Heizung: Unterbrechung | 0 |
| 0x283500 | 283500 Lambdasonde, Heizung: Temperatur zu hoch | 0 |
| 0x283600 | 283600 Lambdasonde nach Kat, Heizung: Temperatur zu hoch | 0 |
| 0x283700 | 283700 Lambdasonde, Heizung: Temperatur zu niedrig | 0 |
| 0x283800 | 283800 Lambdasonde nach Kat, Heizung: Temperatur zu niedrig | 0 |
| 0x283900 | 283900 Mengenregelventil, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x283A00 | 283A00 Raildruckregelventil, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x283B00 | 283B00 xDFC_NSCChar: Diagnostic fault check for characteristic of NSC | 0 |
| 0x283C00 | 283C00 Kühlmitteltemperatursensor, Signal: CAN Wert nicht plausibel | 0 |
| 0x283D00 | 283D00 xDFC_EnhSRCMaxT4ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of Fourth exhaust gas temperature | 0 |
| 0x283E00 | 283E00 xDFC_EnhSRCMaxT5ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of fifth exhaust gas temperature | 0 |
| 0x283F00 | 283F00 xDFC_EnhSRCMaxT6ExhTMon: Diagnostic Fault Check for enhanced SRC-Max of sixth exhaust gas temperature | 0 |
| 0x284000 | 284000 xDFC_EnhSRCMinT4ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of Fourth exhaust gas temperature | 0 |
| 0x284100 | 284100 xDFC_EnhSRCMinT5ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of fifth exhaust gas temperature | 0 |
| 0x284200 | 284200 xDFC_EnhSRCMinT6ExhTMon: Diagnostic Fault Check for enhanced SRC-Min of sixth exhaust gas temperature | 0 |
| 0x284300 | 284300 Abgastemperatursensor vor Kat, Plausibilität: Abgastemperatur vor Kat nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284400 | 284400 Abgastemperatursensor vor Partikelfilter, Plausibilität: Abgastemperatur vor Partikelfilter nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284500 | 284500 Abgastemperatursensor vor SCR-Kat, Plausibilität: Abgastemperatur vor SCR-Kat nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284600 | 284600 Abgastemperatursensor 4, Plausibilität: Abgastemperatur 4 nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284700 | 284700 Abgastemperatursensor 5, Plausibilität: Abgastemperatur 5 nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284800 | 284800 Abgastemperatursensor 6, Plausibilität: Abgastemperatur 6 nicht plausibel zu den restlichen Abgastemperatursignalen | 0 |
| 0x284900 | 284900 Abgastemperatursensoren, Plausibilität: Mehrere Abgastemperatursignale zueinander nicht plausibel | 0 |
| 0x284A00 | 284A00 Abgastemperatursensor 4, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur 4 zu hoch | 0 |
| 0x284B00 | 284B00 Abgastemperatursensor 5, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur 5 zu hoch | 0 |
| 0x284C00 | 284C00 Abgastemperatursensor 6, Plausibilität: Differenz gemessene zu berechneter Abgastemperatur 6 zu hoch | 0 |
| 0x284D00 | 284D00 Lambdasonde, Signal Nernstspannung: Unterbrechung | 0 |
| 0x284E00 | 284E00 Lambdasonde nach Kat, Signal Nernstspannung: Unterbrechung | 0 |
| 0x284F00 | 284F00 Lambdasonde, Signal Pumpstrom: Unterbrechung | 0 |
| 0x285000 | 285000 Lambdasonde nach Kat, Signal Pumpstrom: Unterbrechung | 0 |
| 0x285100 | 285100 Lambdasonde, Signal virtuelle Masse: Unterbrechung | 0 |
| 0x285200 | 285200 Lambdasonde nach Kat, Signal virtuelle Masse: Unterbrechung | 0 |
| 0x285300 | 285300 Lambdasonde: Signalspannung zu hoch oder Signal Abgleichstrom Unterbrechung | 0 |
| 0x285400 | 285400 Lambdasonde nach Kat: Signalspannung zu hoch oder Signal Abgleichstrom Unterbrechung | 0 |
| 0x285500 | 285500 Lambdasonde: Signalspannung zu niedrig | 0 |
| 0x285600 | 285600 Lambdasonde nach Kat: Signalspannung zu niedrig | 0 |
| 0x285700 | 285700 DDE-Steuergerät intern (LSU SPI): Spannungsversorgung am SPI Chip zu niedrig (Lambda-Signalauswertung) | 0 |
| 0x285800 | 285800 DDE-Steuergerät intern (LSU nach Kat SPI): Spannungsversorgung am SPI Chip zu niedrig (Lambda-Signalauswertung) | 0 |
| 0x285900 | 285900 Lambdasonde, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Plus | 0 |
| 0x285A00 | 285A00 Lambdasonde nach Kat, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Plus | 0 |
| 0x285B00 | 285B00 Lambdasonde, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Masse | 0 |
| 0x285C00 | 285C00 Lambdasonde nach Kat, Signal Pumpstrom, Nernstspannung oder virtuelle Masse: Kurzschluss nach Masse | 0 |
| 0x285D00 | 285D00 DDE-Steuergerät intern (MoFDCS): Kontinuierliche Momentenüberwachung, MSR-Begrenzung nur in Ebene 2 aktiv und in Ebene 1 inaktiv | 0 |
| 0x285E00 | 285E00 DDE-Steuergerät intern (MoFVSS): Beschleunigungsgeführte Momentenüberwachung, Ebene 2 Fahrgeschwindigkeitssignal nicht plausibel | 0 |
| 0x285F00 | 285F00 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Unterbrechung | 0 |
| 0x286000 | 286000 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x286100 | 286100 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x286200 | 286200 Ladedruckunterstützter Regelklappensteller, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x286300 | 286300 DDE-Steuergerät intern (IVDiaChp): Injektoren Bank 1, Fehler im Ansteuerbaustein | 0 |
| 0x286400 | 286400 Lambdasonden, Plausibilität: Differenz der Sauerstoffkonzentrationen zwischen Lambdasonde und Lambdasonde nach Kat zu hoch | 0 |
| 0x286500 | 286500 Lambdasonde: Dynamik des Sondensignals unplausibel | 0 |
| 0x286600 | 286600 Lambdasonde nach Kat: Dynamik des Sondensignals unplausibel | 0 |
| 0x286700 | 286700 Lambdasonde: Dynamik des Sondensignals beim Last-Schub-Übergang unplausibel (Aktualisierung von OBD-DIUMPR) | 0 |
| 0x286800 | 286800 Lambdasonde nach Kat: Dynamik des Sondensignals beim Last-Schub-Übergang unplausibel (Aktualisierung von OBD-DIUMPR) | 0 |
| 0x286900 | 286900 DDE-Steuergerät intern (LSU Kalibrierung): Offset der Lambda-Signalauswertung zu hoch (Nullpunktkorrektur) | 0 |
| 0x286A00 | 286A00 DDE-Steuergerät intern (LSU nach Kat Kalibrierung): Offset der Lambda-Signalauswertung zu hoch (Nullpunktkorrektur) | 0 |
| 0x286B00 | 286B00 DDE-Steuergerät intern (LSU Kalibrierung): Offset der Lambda-Signalauswertung zu niedrig (Nullpunktkorrektur) | 0 |
| 0x286C00 | 286C00 DDE-Steuergerät intern (LSU nach Kat Kalibrierung): Offset der Lambda-Signalauswertung zu niedrig (Nullpunktkorrektur) | 0 |
| 0x286D00 | 286D00 Lambdasonde: Sauerstoffkonzentration unplausibel hoch (bei Volllast) | 0 |
| 0x286E00 | 286E00 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel hoch (bei Volllast) | 0 |
| 0x286F00 | 286F00 Lambdasonde: Sauerstoffkonzentration unplausibel hoch (im Schubbetrieb) | 0 |
| 0x287000 | 287000 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel hoch (im Schubbetrieb) | 0 |
| 0x287100 | 287100 Lambdasonde: Sauerstoffkonzentration unplausibel hoch (bei Teillast) | 0 |
| 0x287200 | 287200 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel hoch (bei Teillast) | 0 |
| 0x287300 | 287300 Lambdasonde: Sauerstoffkonzentration unplausibel niedrig (bei Volllast) | 0 |
| 0x287400 | 287400 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel niedrig (bei Volllast) | 0 |
| 0x287500 | 287500 Lambdasonde: Sauerstoffkonzentration unplausibel niedrig (im Schubbetrieb) | 0 |
| 0x287600 | 287600 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel niedrig (im Schubbetrieb) | 0 |
| 0x287700 | 287700 Lambdasonde: Sauerstoffkonzentration unplausibel niedrig (bei Teillast) | 0 |
| 0x287800 | 287800 Lambdasonde nach Kat: Sauerstoffkonzentration unplausibel niedrig (bei Teillast) | 0 |
| 0x287900 | 287900 Lambdasonde, Druckkompensation: Kompensationsfaktor zu hoch | 0 |
| 0x287A00 | 287A00 Lambdasonde nach Kat, Druckkompensation: Kompensationsfaktor zu hoch | 0 |
| 0x287B00 | 287B00 Lambdasonde, Druckkompensation: Kompensationsfaktor zu niedrig | 0 |
| 0x287C00 | 287C00 Lambdasonde nach Kat, Druckkompensation: Kompensationsfaktor zu niedrig | 0 |
| 0x287D00 | 287D00 DDE-Steuergerät intern (LSU Referenzwiderstand): Referenzwiderstand zu hoch (Lambda-Temperaturauswertung) | 0 |
| 0x287E00 | 287E00 DDE-Steuergerät intern (LSU nach Kat Referenzwiderstand): Referenzwiderstand zu hoch (Lambda-Temperaturauswertung) | 0 |
| 0x287F00 | 287F00 DDE-Steuergerät intern (LSU Referenzwiderstand): Referenzwiderstand zu niedrig (Lambda-Temperaturauswertung) | 0 |
| 0x288000 | 288000 DDE-Steuergerät intern (LSU nach Kat Referenzwiderstand): Referenzwiderstand zu niedrig (Lambda-Temperaturauswertung) | 0 |
| 0x288500 | 288500 Lambdasonde, Nebenschlusserkennung: Pumpstrom bei kalter Sonde zu niedrig | 0 |
| 0x288600 | 288600 Lambdasonde nach Kat, Nebenschlusserkennung: Pumpstrom bei kalter Sonde zu niedrig | 0 |
| 0x288700 | 288700 Kupplungsschalter, Plausibilität: Kupplungssignale Triebstrang offen und leichte Betätigung zueinander nicht plausibel | 0 |
| 0x288800 | 288800 Powermanagement (Layer_AEPBATTDEF): Batterie auf Transport geschädigt | 0 |
| 0x288900 | 288900 Powermanagement (Layer_AEPBATTENTL): Batterie auf Transport entladen | 0 |
| 0x288A00 | 288A00 Powermanagement (Layer_AEPBNS): Batterieloser Betrieb | 0 |
| 0x288B00 | 288B00 Powermanagement, Ruhestromüberwachung (Layer_AEPRUHVERL): Ruhestromverletzung | 0 |
| 0x288C00 | 288C00 Powermanagement, Batterieüberwachung (Layer_AEPTIEFENTL): Tiefentladung | 0 |
| 0x288D00 | 288D00 Powermanagement (Layer_AEPUESPG): Überspannung | 0 |
| 0x288E00 | 288E00 Powermanagement (Layer_AEPUSPG): Unterspannung | 0 |
| 0x288F00 | 288F00 Powermanagement (Layer_AEPVERBRED): Verbraucherreduzierung | 0 |
| 0x289000 | 289000 Intelligenter Batterie Sensor (Layer_IBSELIN): Kommunikation erweitertes LIN Protokoll gestört | 0 |
| 0x289100 | 289100 Intelligenter Batterie Sensor (Layer_IBSI): interne Strommessung defekt | 0 |
| 0x289200 | 289200 Intelligenter Batterie Sensor (Layer_IBSSYS): Systemfehler | 0 |
| 0x289300 | 289300 Intelligenter Batterie Sensor (Layer_IBST): interne Temperaturmessung defekt | 0 |
| 0x289400 | 289400 Intelligenter Batterie Sensor (Layer_IBSU): interne Spannungsmessung defekt | 0 |
| 0x289500 | 289500 Intelligenter Batterie Sensor (Layer_IBSWK30): Kl15-WakeUp-Leitung Kurzschluss nach Plus | 0 |
| 0x289600 | 289600 Intelligenter Batterie Sensor (Layer_IBSWK31): Kl15-WakeUp-Leitung Kurzschluss nach Masse | 0 |
| 0x289700 | 289700 Intelligenter Batterie Sensor (Layer_IBSWK31): Kl15-WakeUp-Leitung Unterbrechung | 0 |
| 0x289800 | 289800 Motorprozessgrößen: Abweichung  zu hoch | 0 |
| 0x289900 | 289900 Nullgangstellung, Abgleich: Position noch nicht mit Diagnose angelernt | 0 |
| 0x289A00 | 289A00 Starter-Generator im Riemen (Layer_SGREL): elektronische Brückenschaltung defekt | 0 |
| 0x289B00 | 289B00 Starter-Generator im Riemen (Layer_SGRKL50MSA): keine Ansteuerung der Kl50 MSA | 0 |
| 0x289C00 | 289C00 Starter-Generator im Riemen (Layer_SGRMECH): mechanischer Fehler | 0 |
| 0x289D00 | 289D00 Starter-Generator im Riemen (Layer_SGRMSA): FI_SGRMSA | 0 |
| 0x289E00 | 289E00 Starter-Generator im Riemen (Layer_SGRSTABB): Startabbruch | 0 |
| 0x289F00 | 289F00 Starter-Generator im Riemen (Layer_SGRTEMP): Übertemperatur | 0 |
| 0x28A000 | 28A000 Starter-Generator im Riemen (Layer_SGRUEBVOLT): Überspannung | 0 |
| 0x28A100 | 28A100 Starter-Generator im Riemen (Layer_SGRUVOLT): Unterspannung | 0 |
| 0x28A200 | 28A200 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x28A300 | 28A300 Diagnosemaster Test, I14229_ROE_TxFailed: Erkennung Senden von ResponseOnEvent fehlgeschlagen | 0 |
| 0x28A400 | 28A400 DDE-Steuergerät intern (IVPSplyStopDCDC_0): DC/DC-Wandler Bank 1 kann nicht abgeschaltet werden | 0 |
| 0x28A500 | 28A500 DDE-Steuergerät intern (IVPSplyStopDCDC_1): DC/DC-Wandler Bank 2 kann nicht abgeschaltet werden | 0 |
| 0x28A600 | 28A600 DDE-Steuergerät intern (LSU SPI): unplausible Werte im SPI Chip (Lambda-Signalauswertung) | 0 |
| 0x28A700 | 28A700 DDE-Steuergerät intern (LSU nach Kat SPI): unplausible Werte im SPI Chip (Lambda-Signalauswertung) | 0 |
| 0x28A800 | 28A800 xDFC_NSCSDet: Fault check Path for the NSC Sulphur Over Load Detection | 0 |
| 0x28AF00 | 28AF00 Niederdruck-Abgasrückführ-Regelung: Soll-Position Niederdruck Abgasrückführventil zu stark begrenzt | 0 |
| 0x28B200 | 28B200 Intelligenter Batterie Sensor, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x28B300 | 28B300 Botschaft (Ladezustand_Status_IBS_LIN, 0xA, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B400 | 28B400 Botschaft (Daten_lesen_IBS_LIN, 0xF, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B500 | 28B500 Botschaft (Fehler_Status_IBS_LIN, 0xB, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B600 | 28B600 Botschaft (Sicherheit_Speicher_lesezugriff_IBS_LIN, 0x10, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B700 | 28B700 Botschaft (Status_Messung_IBS_LIN, 0x11, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B800 | 28B800 Botschaft (Werte_IBS_LIN, 0x9, LIN): Botschaft von Intelligenter Batterie Sensor IBS ausgefallen | 0 |
| 0x28B900 | 28B900 Intelligenter Batterie Sensor, Diagnoserückmeldung: Knotenfehler aktiv | 0 |
| 0x28BA00 | 28BA00 Intelligenter Batterie Sensor, Diagnoserückmeldung: Knotenfehler Statusänderung | 0 |
| 0x28BB00 | 28BB00 Starter-Generator im Riemen, Diagnoserückmeldung: Rotor blockiert | 0 |
| 0x28BC00 | 28BC00 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler Kommunikation | 0 |
| 0x28BD00 | 28BD00 Starter-Generator im Riemen, Diagnoserückmeldung: elektronische Brückenschaltung defekt | 0 |
| 0x28BE00 | 28BE00 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler Erregerstrom | 0 |
| 0x28BF00 | 28BF00 Starter-Generator im Riemen, Diagnoserückmeldung: durch Lastabwurf hervorgerufene Überspannung | 0 |
| 0x28C000 | 28C000 Botschaft (Status_SGR_LIN, 0x2D, LIN): Botschaft von Starter-Generator im Riemen SGR ausgefallen | 0 |
| 0x28C100 | 28C100 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler beim Entmagnetisierungsvorgang | 0 |
| 0x28C200 | 28C200 Starter-Generator im Riemen, Diagnoserückmeldung: Übertemperatur | 0 |
| 0x28C300 | 28C300 Starter-Generator im Riemen, Diagnoserückmeldung: Überspannung | 0 |
| 0x28C400 | 28C400 Starter-Generator im Riemen, Diagnoserückmeldung: Fehler Positionssensor | 0 |
| 0x28C500 | 28C500 Starter-Generator im Riemen, Diagnoserückmeldung: Startabbruch | 0 |
| 0x28C600 | 28C600 Starter-Generator im Riemen, Diagnoserückmeldung: Fehlerstatus für die gesamten Maschinenzustände | 0 |
| 0x28C700 | 28C700 Starter-Generator im Riemen, Diagnoserückmeldung: keine Kommunikation | 0 |
| 0x28C800 | 28C800 Starter-Generator im Riemen, Diagnoserückmeldung: Unterspannung | 0 |
| 0x28C900 | 28C900 Botschaft (Status_AKKS_LIN, 0x33, LIN): Botschaft von Aktive-Kühlluftklappe AKKS ausgefallen | 0 |
| 0x28CA00 | 28CA00 Versorgungsspannung: Fehlererkennungen  teilweise durch Überspannung deaktiviert | 0 |
| 0x28CB00 | 28CB00 Versorgungsspannung: Fehlererkennungen  teilweise durch Unterspannung deaktiviert | 0 |
| 0x28CC00 | 28CC00 LIN Bus, Kommunikation: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0x28CD00 | 28CD00 LIN Bus, Kommunikation: keine Botschaften von Aktive-Kühlluftklappe AKKS empfangen | 0 |
| 0x28CE00 | 28CE00 LIN Bus, Kommunikation: keine Botschaften von Glühsteuergerät GSG empfangen | 0 |
| 0x28CF00 | 28CF00 LIN Bus, Kommunikation: keine Botschaften von Intelligenter Batterie Sensor IBS empfangen | 0 |
| 0x28D000 | 28D000 LIN Bus, Kommunikation: keine Botschaften von Starter-Generator im Riemen SGR empfangen | 0 |
| 0x28D100 | 28D100 Oxidationskatalysator, Plausibilität: HC-Konvertierung während exothermer Reaktion zu niedrig | 0 |
| 0x28D400 | 28D400 Lambdasonde: Versorgungsspannung zu niedrig | 0 |
| 0x28D500 | 28D500 Lambdasonde nach Kat: Versorgungsspannung zu niedrig | 0 |
| 0x28D600 | 28D600 Luftmassenmesser : Signal Unterbrechung oder Kurzschluss nach Plus/Masse | 0 |
| 0x28D700 | 28D700 Blow By -Heizung, Ansteuerung: Unterbrechung | 0 |
| 0x28D800 | 28D800 Blow By -Heizung, Ansteuerung: Endstufe Übertemperatur | 0 |
| 0x28D900 | 28D900 Blow By -Heizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x28DA00 | 28DA00 Blow By -Heizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x28DB00 | 28DB00 Drehzahlsensor Getriebe, Signal: kein Signal | 0 |
| 0x28DC00 | 28DC00 Drehzahlsensor Getriebe, Signal: Signal fehlerhaft | 0 |
| 0x28DD00 | 28DD00 Drehzahlsensor Getriebe, Plausibilität: maximale Drehzahl überschritten | 0 |
| 0x28DE00 | 28DE00 Abgasdrucksensor vor Turbine, Plausibilität: Abgasdruck vor Turbine dynamisch nicht plausibel | 0 |
| 0x28DF00 | 28DF00 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Bereich: obere physikalische Grenze überschritten | 0 |
| 0x28E000 | 28E000 Abgastemperatursensor nach Niederdruck-Abgasrückführkühler, Bereich: untere physikalische Grenze unterschritten | 0 |
| 0x28E100 | 28E100 Abgastemperatursensor vor Kat, Plausibilität: Differenz gemessene zu simulierter Abgastemperatur vor Kat zu hoch | 0 |
| 0x28E200 | 28E200 Abgastemperatursensor vor Katalysator, Signal: Unterbrechung oder Kurzschluss nach Plus | 0 |
| 0x28E300 | 28E300 Abgastemperatursensor vor Katalysator, Signal: Kurzschluss nach Masse | 0 |
| 0x28E400 | 28E400 Elektrolüfter: Lüfter antwortet nicht auf Testanfrage | 0 |
| 0x28E500 | 28E500 Elektrolüfter: Lüfterfehler mit Funktionseinschränkung | 0 |
| 0x28E600 | 28E600 Elektrolüfter: kein Lüfterbetrieb möglich | 0 |
| 0x28E700 | 28E700 NOx-Sensor nach DeNOx-Kat, Signal binäres Lambda: Kurzschluss nach Plus | 0 |
| 0x28E800 | 28E800 NOx-Sensor nach DeNOx-Kat, Signal binäres Lambda: Kurzschluss nach Masse | 0 |
| 0x28E900 | 28E900 NOx-Sensor nach DeNOx-Kat, Signal lineares Lambda: Kurzschluss nach Plus | 0 |
| 0x28EA00 | 28EA00 NOx-Sensor nach DeNOx-Kat, Signal lineares Lambda: Kurzschluss nach Masse | 0 |
| 0x28EB00 | 28EB00 NOx-Sensor vor DeNOx-Kat, Plausibilität: NOx-Signal dynamisch zu langsam bei Zug-Schub-Übergang | 0 |
| 0x28EC00 | 28EC00 Abgasdrucksensor vor Turbine, Plausibilität: Abgasdruck vor Turbine nicht plausibel zu Umgebungsdruck im Nachlauf | 0 |
| 0x28ED00 | 28ED00 Abgasdrucksensor vor Turbine, Plausibilität: Abgasdruck vor Turbine nicht plausibel zu Ladedruck im Nachlauf | 0 |
| 0x28EE00 | 28EE00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu hoch | 0 |
| 0x28EF00 | 28EF00 NOx-Sensor vor DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu niedrig | 0 |
| 0x28F000 | 28F000 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu hoch | 0 |
| 0x28F100 | 28F100 NOx-Sensor nach DeNOx-Kat, Plausibilität NOx: NOx-Signal Offset Lernwert zu niedrig | 0 |
| 0x28F200 | 28F200 Kupplung, Plausibilität (Layer_CLTPRTS1): übertragbares Moment zu niedrig, Kupplung leicht geschädigt | 0 |
| 0x28F300 | 28F300 Kupplung, Plausibilität (Layer_CLTPRTS2): übertragbares Moment zu niedrig, Kupplung geschädigt | 0 |
| 0x28F400 | 28F400 Kupplung, Plausibilität (Layer_CLTPRTS3): übertragbares Moment zu niedrig, Kupplung stark geschädigt | 0 |
| 0x28F500 | 28F500 DDE-Steuergerät intern (MoCSOPErrNoChk): Hardware Fehler, Abschaltpfadtest oder Injektoransteuerung nicht plausibel | 0 |
| 0x28F600 | 28F600 DDE-Steuergerät intern (MoFTraDXCCpl): Beschleunigungsgeführte Momentenüberwachung, Allrad Erkennung im EEPROM fehlerhaft | 0 |
| 0x28F700 | 28F700 DDE-Steuergerät intern (MoFTraTypVehCpl): Beschleunigungsgeführte Momentenüberwachung, Fahrzeugtyp Erkennung im EEPROM fehlerhaft | 0 |
| 0x28F800 | 28F800 DDE-Steuergerät intern (CAN Bus): CAN-Controller defekt | 0 |
| 0x28F900 | 28F900 DDE-Steuergerät intern (FlexRay): FlexRay-Controller defekt | 0 |
| 0x28FA00 | 28FA00 Ölniveausensor, Signal: elektrisch defekt | 0 |
| 0x28FB00 | 28FB00 Ölniveausensor, Plausibilität: Ölniveau | 0 |
| 0x28FC00 | 28FC00 Ölniveausensor, Plausibilität: Öltemperatur | 0 |
| 0x28FD00 | 28FD00 Öltemperatursensor, Signal: elektrisch defekt | 0 |
| 0x28FE00 | 28FE00 Öltemperatursensor, Plausibilität: Öltemperatur | 0 |
| 0x28FF00 | 28FF00 Ölzustandssensor, Signal: Ölniveau defekt | 0 |
| 0x290000 | 290000 Ölzustandssensor, Plausibilität: Ölniveau | 0 |
| 0x290100 | 290100 Ölzustandssensor, Signal: Ölqualität defekt | 0 |
| 0x290200 | 290200 Ölzustandssensor, Plausibilität: Ölqualität | 0 |
| 0x290300 | 290300 Ölzustandssensor, Signal: Öltemperatur defekt | 0 |
| 0x290400 | 290400 Ölzustandssensor, Plausibilität: Öltemperatur | 0 |
| 0x290500 | 290500 Klemme 15.3, Signal: Kurzschluss nach Plus (Status Klemme 15.3 ein während Klemme 15 aus) | 0 |
| 0x290600 | 290600 Klemme 15.3, Signal: Unterbrechung oder Kurzschluss nach Masse (Status Klemme 15.3 aus während Klemme 15 ein) | 0 |
| 0x290700 | 290700 Drehzahlsensor Getriebe, Plausibilität: Differenz zu Motordrehzahl zu hoch | 0 |
| 0x290800 | 290800 Raildruckregelungsmodus, Plausibilität: Unerwünschte Umschaltung von CPC (gekoppelte Druck/Mengen-Regelung) auf Mengenregelung erkannt | 0 |
| 0x290900 | 290900 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu niedrig | 0 |
| 0x290A00 | 290A00 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu niedrig  und hohe Ladedruckabweichung | 0 |
| 0x290B00 | 290B00 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu hoch | 0 |
| 0x290C00 | 290C00 Luftsystem, Luft- zu AGR-Massenstrom Plausibilität: gemessene Luftmasse im Vergleich zu berechneter Luftmasse zu hoch  und hohe Ladedruckabweichung | 0 |
| 0x290D00 | 290D00 Ölzustandssensor: keine Kommunikation über BSD-Schnittstelle | 0 |
| 0x290E00 | 290E00 DDE-Steuergerät intern (MonUMaxSupply2): DDE interne Spannung zu hoch | 0 |
| 0x290F00 | 290F00 DDE-Steuergerät intern (MonUMinSupply2): DDE interne Spannung zu niedrig | 0 |
| 0x296700 | 296700 DDE-Steuergerät intern (AvlWmom): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296800 | 296800 DDE-Steuergerät intern (DiffGear): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296900 | 296900 DDE-Steuergerät intern (GbxFrc): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296A00 | 296A00 DDE-Steuergerät intern (PtSumCootd): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296B00 | 296B00 DDE-Steuergerät intern (PtSumIls): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296C00 | 296C00 DDE-Steuergerät intern (StDrvVeh): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296D00 | 296D00 DDE-Steuergerät intern (StIntfDrasy): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296E00 | 296E00 DDE-Steuergerät intern (StPengPt): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x296F00 | 296F00 DDE-Steuergerät intern (SumDtorq): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x297000 | 297000 DDE-Steuergerät intern (stphiStWhlAgQl1): FlexRay-Sendesignal fehlerhaft berechnet | 0 |
| 0x2FF12 | 2FF12 Diagnosemaster Test, I14229_ROETst_Appl: Applikations-Dummy-Fehlerspeichereintrag mit Diagnosejob erzeugt | 0 |
| 0xCD840A | CD840A FA-CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8420 | CD8420 FlexRay: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8486 | CD8486 A-CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8487 | CD8487 DDE-Steuergerät intern (FlexRay): Aufstarten des FlexRay fehlgeschlagen | 0 |
| 0xCD8BFF | CD8BFF Diagnosemaster Test, I14229_ROETst_Netw: Netzwerk-Dummy-Fehlerspeichereintrag mit Diagnosejob erzeugt | 0 |
| 0xCD8D01 | CD8D01 CCP CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD8E01 | CD8E01 Sensor CAN Bus: Steuergerät hat sich vom Bus abgeschaltet (Bus off) | 0 |
| 0xCD9400 | CD9400 Botschaft (RQ_AIC, 0x2F9, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9401 | CD9401 Botschaft (RQ_AIC, 0x2F9, FA): Botschaft von IHKA ausgefallen | 1 |
| 0xCD9402 | CD9402 Botschaft (A_TEMP, 0x2CA, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9403 | CD9403 Botschaft (A_TEMP, 0x2CA, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCD9406 | CD9406 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9407 | CD9407 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9408 | CD9408 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9409 | CD9409 Botschaft (AVL_BRTORQ_WHL, 44.3.4, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD9410 | CD9410 Botschaft (CODIERUNG_PM, 0x395, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9416 | CD9416 Botschaft (CTR_CRASH_SWO_EKP, 0x135, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9417 | CD9417 Botschaft (CTR_CRASH_SWO_EKP, 0x135, FA): Botschaft von ACSM ausgefallen | 1 |
| 0xCD9418 | CD9418 SG-Systemzeit: Botschaft (RELATIVZEIT, 0x328, FA) von Kombi während Bus aktiv nicht empfangen | 1 |
| 0xCD941D | CD941D Botschaft (DIAG_OBD_GRB, 0x396, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD941E | CD941E Botschaft (DIAG_OBD_GRB, 0x396, A): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD9422 | CD9422 Botschaft (FAHRZEUGTYP, 0x388, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9423 | CD9423 Botschaft (FLLUPT_GPWSUP, 0x3BE, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9424 | CD9424 Botschaft (FLLUPT_GPWSUP, 0x3BE, FA): Botschaft von CAS ausgefallen | 1 |
| 0xCD9425 | CD9425 Botschaft (DT_GRDT, 0x1AF, A):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9426 | CD9426 Botschaft (DT_GRDT, 0x1AF, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9427 | CD9427 Botschaft (DT_GRDT, 0x1AF, A):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9428 | CD9428 Botschaft (DT_GRDT, 0x1AF, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9429 | CD9429 Botschaft (DT_GRDT, 0x1AF, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD942A | CD942A Botschaft (DT_GRDT, 0x1AF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD942B | CD942B Botschaft (DT_GRDT, 0x1AF, A): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD942C | CD942C Botschaft (DT_GRDT, 0x1AF, FA): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD942D | CD942D Botschaft (KLEMMEN, 0x12F, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD942E | CD942E Botschaft (KLEMMEN, 0x12F, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD942F | CD942F Botschaft (KLEMMEN, 0x12F, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9430 | CD9430 Botschaft (KLEMMEN, 0x12F, FA):  Botschaft von CAS ausgefallen | 1 |
| 0xCD9433 | CD9433 Botschaft (KILOMETERSTAND, 0x330, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9434 | CD9434 Botschaft (KILOMETERSTAND, 0x330, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCD9437 | CD9437 Botschaft (RELATIVZEIT, 0x328, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9438 | CD9438 Botschaft (RELATIVZEIT, 0x328, FA): Botschaft von Kombi ausgefallen | 1 |
| 0xCD943D | CD943D Botschaft (AVL_RPM_WHL, 46.1.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD943E | CD943E Botschaft (AVL_RPM_WHL, 46.1.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD943F | CD943F Botschaft (AVL_RPM_WHL, 46.1.2, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD9444 | CD9444 Botschaft (NOx-Sensor vor DeNOx-Kat, 0x135, Sensor-CAN): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9445 | CD9445 Botschaft (NOx-Sensor vor DeNOx-Kat, 0x135, Sensor-CAN): Botschaft von NOx-Sensor vor DeNOx-Kat ausgefallen | 1 |
| 0xCD9446 | CD9446 NOx-Sensoren, Anfragemodus: Anfrage Nummern unplausibel | 1 |
| 0xCD9447 | CD9447 Botschaft (NOx-Sensor nach DeNOx-Kat, 0x130, Sensor-CAN): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9448 | CD9448 Botschaft (NOx-Sensor nach DeNOx-Kat, 0x130, Sensor-CAN): Botschaft von NOx-Sensor nach DeNOx-Kat ausgefallen | 1 |
| 0xCD944D | CD944D Botschaft (SLRDI_GLB_FZM, 0x3A5, FA):  Botschaft von ZGW ausgefallen | 1 |
| 0xCD944F | CD944F Botschaft (V_VEH, 55.3.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9450 | CD9450 Botschaft (V_VEH, 55.3.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9451 | CD9451 Botschaft (V_VEH, 55.3.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9452 | CD9452 Botschaft (V_VEH, 55.3.4, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD9453 | CD9453 Botschaft (ST_STAB_DSC, 47.1.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9454 | CD9454 Botschaft (ST_STAB_DSC, 47.1.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9455 | CD9455 Botschaft (ST_STAB_DSC, 47.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9456 | CD9456 Botschaft (ST_STAB_DSC, 47.1.2, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD9459 | CD9459 Botschaft (STAT_EKP, 0x335, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD945A | CD945A Botschaft (STAT_EKP, 0x335, A): Botschaft von EKP ausgefallen | 1 |
| 0xCD945B | CD945B Botschaft (STAT_GANG_RUECKWAERTS, 0x3B0, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD945C | CD945C Botschaft (STAT_GANG_RUECKWAERTS, 0x3B0, FA):  Botschaft von FRMFA ausgefallen | 1 |
| 0xCD945D | CD945D Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD945E | CD945E Botschaft (STAT_ZV_KLAPPEN, 0x2FC, FA):  Botschaft von CAS ausgefallen | 1 |
| 0xCD9465 | CD9465 Botschaft (ST_BLT_CT_SOCCU, 0x297, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9467 | CD9467 Botschaft (ST_BLT_CT_SOCCU, 0x297, FA):  Botschaft von ACSM ausgefallen | 1 |
| 0xCD9468 | CD9468 Botschaft (ST_GRB_ECU, 0x39A, A):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9469 | CD9469 Botschaft (ST_GRB_ECU, 0x39A, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD946A | CD946A Botschaft (ST_GRB_ECU, 0x39A, A):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD946B | CD946B Botschaft (ST_GRB_ECU, 0x39A, FA):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD9472 | CD9472 Botschaft (AVL_STEA_DV, 59.0.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9473 | CD9473 Botschaft (AVL_STEA_DV, 59.0.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9474 | CD9474 Botschaft (AVL_STEA_DV, 59.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9475 | CD9475 Botschaft (AVL_STEA_DV, 59.0.2, FX): Botschaft von SZL_LWS  ausgefallen | 1 |
| 0xCD947A | CD947A Botschaft (UHRZEIT_DATUM, 0x2F8, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD947B | CD947B Botschaft (UHRZEIT_DATUM, 0x2F8, FA):  Botschaft von Kombi ausgefallen | 1 |
| 0xCD947D | CD947D Botschaft (STAT_ANHAENGER, 0x2E4, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD947F | CD947F Botschaft (STAT_ANHAENGER, 0x2E4, FA):  Botschaft von AHM ausgefallen | 1 |
| 0xCD9480 | CD9480 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9481 | CD9481 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9482 | CD9482 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9483 | CD9483 Botschaft (RQ_TORQ_CRSH_DRDY, 58.1.4, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD9484 | CD9484 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9485 | CD9485 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9486 | CD9486 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9487 | CD9487 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, A):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD948E | CD948E Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD948F | CD948F Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9490 | CD9490 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9491 | CD9491 Botschaft (RQ_TORQ_CRSH_GRB, 0xB0, FA):  Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD9496 | CD9496 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD9497 | CD9497 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD9498 | CD9498 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD9499 | CD9499 Botschaft (RQ_WMOM_PT_SUM_DRS, 33.1.4, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94A5 | CD94A5 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94A6 | CD94A6 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94A7 | CD94A7 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94A8 | CD94A8 Botschaft (RQ_WMOM_PT_SUM_STAB, 43.1.4, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD94AD | CD94AD Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94AE | CD94AE Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94AF | CD94AF Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94B0 | CD94B0 Botschaft (ACLNX_MASSCNTR, 55.0.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94B1 | CD94B1 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94B2 | CD94B2 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94B3 | CD94B3 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94B4 | CD94B4 Botschaft (ACLNY_MASSCNTR, 55.0.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94B5 | CD94B5 Botschaft (SU_SW_DRDY, 272.4.8, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94B6 | CD94B6 Botschaft (SU_SW_DRDY, 272.4.8, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94B7 | CD94B7 Botschaft (SU_SW_DRDY, 272.4.8, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94B8 | CD94B8 Botschaft (DISP_RPM_ENG_DYNS, 0xF8, A): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94B9 | CD94B9 Botschaft (DISP_RPM_ENG_DYNS, 0xF8, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94BA | CD94BA Botschaft (DISP_RPM_ENG_DYNS, 0xF8, A): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD94BB | CD94BB Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94BD | CD94BD Botschaft (SU_SW_DRDY, 272.4.8, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94BE | CD94BE Botschaft (FZZSTD, 0x3A0, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94BF | CD94BF Botschaft (FZZSTD, 0x3A0, FA): Botschaft von JBBF ausgefallen | 1 |
| 0xCD94C1 | CD94C1 Botschaft (V_VEH, 55.3.4, FX): Signalqualität V_VEH_COG unzureichend | 1 |
| 0xCD94C2 | CD94C2 Botschaft (DIAG_OBD_GRB, 0x396, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C3 | CD94C3 Botschaft (DIAG_OBD_GRB, 0x396, FA): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD94C4 | CD94C4 Botschaft (DISP_LDM_1, 135.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C5 | CD94C5 Botschaft (DISP_LDM_1, 135.0.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94C6 | CD94C6 Botschaft (RQ_PWR_EL_EPS, 234.0.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C7 | CD94C7 Botschaft (RQ_PWR_EL_EPS, 234.0.2, FX): Botschaft von EPS ausgefallen | 1 |
| 0xCD94C8 | CD94C8 Botschaft (RQ_PWR_EL_PCU, 0x33F, A): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94C9 | CD94C9 Botschaft (RQ_PWR_EL_PCU, 0x33F, A): Botschaft von PCU ausgefallen | 1 |
| 0xCD94CA | CD94CA Botschaft (ST_ENERG_GEN_BN2, 0x2FA, A):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94CB | CD94CB Botschaft (ST_ENERG_GEN_BN2, 0x2FA, A):  Botschaft von PCU ausgefallen | 1 |
| 0xCD94CC | CD94CC Botschaft (ST_PMA, 231.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94CD | CD94CD Botschaft (ST_PMA, 231.1.2, FX): Botschaft von PMA ausgefallen | 1 |
| 0xCD94CE | CD94CE Botschaft (ST_VHSS, 263.1.4, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94CF | CD94CF Botschaft (ST_VHSS, 263.1.4, FX): Botschaft von DSC ausgefallen | 1 |
| 0xCD94D0 | CD94D0 Botschaft (ST_VHSS, 263.1.4, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94D1 | CD94D1 Botschaft (ST_VHSS, 263.1.4, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94D2 | CD94D2 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94D3 | CD94D3 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94D4 | CD94D4 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94D5 | CD94D5 Botschaft (ST_VEHSS_PBRK, 0x2DC, FA):  Botschaft von EMF ausgefallen | 1 |
| 0xCD94D9 | CD94D9 Botschaft (DIENSTE-ID2=68 Elektrische Anforderung Verbraucher, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94DA | CD94DA Botschaft (DIENSTE-ID2=68 Elektrische Anforderung Verbraucher, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (DSC, ICM, ...) ausgefallen | 1 |
| 0xCD94DB | CD94DB Botschaft (FAHRGESTELLNUMMER, 0x380, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94DC | CD94DC Getriebesteuergerät, Kommunikation: Getriebekommunikation über A-CAN und FA-CAN gestört | 1 |
| 0xCD94DD | CD94DD Botschaft (DIENSTE-ID2=140 OBD Sensor Diagnosestatus, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94DE | CD94DE Botschaft (DIENSTE-ID2=140 OBD Sensor Diagnosestatus, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (Kombi, ...) ausgefallen | 1 |
| 0xCD94DF | CD94DF Botschaft (DIENSTE-ID2=8 Powermanagement Standverbraucher, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E0 | CD94E0 Botschaft (DIENSTE-ID2=8 Powermanagement Standverbraucher, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (FRMFA, ZGW, AHM,  ...) ausgefallen | 1 |
| 0xCD94E1 | CD94E1 Botschaft (DIENSTE-ID2=21 Anforderung Stufe Elektrolüfter, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E2 | CD94E2 Botschaft (DIENSTE-ID2=21 Anforderung Stufe Elektrolüfter, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (EPS, ICM, ...) ausgefallen | 1 |
| 0xCD94E3 | CD94E3 Botschaft (DIENSTE-ID2=19 Anforderung MSA Funktion, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E4 | CD94E4 Botschaft (DIENSTE-ID2=19 Anforderung MSA Funktion, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (DSC, CAS, EGS, SEC1, IHKA, ...) ausgefallen | 1 |
| 0xCD94E5 | CD94E5 Botschaft (DIENSTE-ID2=110 Verbraucherstatus, 0x580-0x5FF, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94E6 | CD94E6 Botschaft (DIENSTE-ID2=110 Verbraucherstatus, 0x580-0x5FF, FA): Botschaft von diversen Sende-Steuergeräten (DSC, FRMFA, JBBF, AHM, IHKA, SM, ...) ausgefallen | 1 |
| 0xCD94E7 | CD94E7 Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94E8 | CD94E8 Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94E9 | CD94E9 Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94EA | CD94EA Botschaft (AVL_STEA_FTAX, 57.1.2, FX): Botschaft von ICM_QL ausgefallen | 1 |
| 0xCD94EB | CD94EB Botschaft (SLRDI_GLB_FZM, 0x3A5, FA):  Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94EC | CD94EC Botschaft (DT_DISP_GRDT, 0x3FD, FA): Signal(e) in Botschaft nicht gültig | 1 |
| 0xCD94ED | CD94ED Botschaft (DT_DISP_GRDT, 0x3FD, FA): Botschaft von Getriebesteuergerät ausgefallen | 1 |
| 0xCD94EE | CD94EE Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_VL  unzureichend | 1 |
| 0xCD94EF | CD94EF Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_VR  unzureichend | 1 |
| 0xCD94F0 | CD94F0 Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_HL  unzureichend | 1 |
| 0xCD94F1 | CD94F1 Botschaft (AVL_RPM_WHL, 46.1.2, FX): Signalqualität Ist_Drehzahl_Rad_HR  unzureichend | 1 |
| 0xCD94F7 | CD94F7 NOx-Sensor nach DeNOx-Kat, Plausibilität: falscher Sensor verbaut | 0 |
| 0xCD94F8 | CD94F8 NOx-Sensor vor DeNOx-Kat, Plausibilität: falscher Sensor verbaut | 0 |
| 0xCD94FC | CD94FC Botschaft (ST_BLT_CT_SOCCU, 0x297, FA): Fehler in der Botschaft (Checksummenfehler) | 1 |
| 0xCD94FD | CD94FD Botschaft (ST_BLT_CT_SOCCU, 0x297, FA): Botschaft von Sende-Steuergerät nicht aktuell (Alivecounter) | 1 |
| 0xCD94FF | CD94FF NOx-Sensor nach DeNOx-Kat, Plausibilität: Kennlinien-Korrekturfaktor im Sensor (Steigung oder Offset) ausserhalb gültigem Bereich | 0 |
| 0xCD9500 | CD9500 NOx-Sensor vor DeNOx-Kat, Plausibilität: Kennlinien-Korrekturfaktor im Sensor (Steigung oder Offset) ausserhalb gültigem Bereich | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4202 | Erfasste Batteriespannung (1 Byte) | mV | - | unsigned char | - | 100.009156 | 1 | 0.000000 |
| 0x4233 | Pedalwertgebersignal 1 - Spannungsrohwert | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x4234 | Pedalwertgebersignal 2 - Spannungsrohwert | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x4235 | gefiltertes Pedalwertgebersignal (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x4236 | Pedalwertgeberposition | % | - | unsigned int | - | 0.012207 | 1 | 0.000000 |
| 0x4237 | Status des Führungssignals zur weiteren Berechnung des Fahrerwunsches | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x427A | Statuswort | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x427C | Abstellzeit in Minuten | min | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x427D | Entlademenge während Zeit mit erhöhtem Ruhestrom | Ah | - | unsigned int | - | 0.018200 | 1 | 0.000000 |
| 0x4280 | Spannung EKP | V | - | unsigned char | - | 0.100000 | 1 | 0.000000 |
| 0x4281 | Bordnetzspannung - Sollwert | V | - | unsigned char | - | 0.100000 | 1 | 0.000000 |
| 0x4282 | Abstellzeit | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x4283 | Vorgabe Generator-Sollspannung (Ausgabewert) | V | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x4284 | Korrekturwert Abschaltung | - | - | unsigned int | - | 0.001526 | 1 | 0.000000 |
| 0x4285 | Abstand zur Startfähigkeitsgrenze | - | - | unsigned int | - | 0.003052 | 1 | 0.000000 |
| 0x4286 | Batteriestrom von IBS gemessen | A | - | unsigned int | - | 0.080000 | 1 | -200.000000 |
| 0x4288 | Status Standverbraucher 2 registriert | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4289 | Ruhestromzeit - History 2 | min | - | unsigned char | - | 14.933333 | 1 | 0.000000 |
| 0x428A | Ruhestromzeit - History 3 | min | - | unsigned char | - | 14.933333 | 1 | 0.000000 |
| 0x428B | Ruhestromzeit - History 4 | min | - | unsigned char | - | 14.933333 | 1 | 0.000000 |
| 0x428C | Batterietemperatur | °C | - | unsigned int | - | 0.009237 | 1 | -50.000047 |
| 0x428D | Batteriespannung von IBS gemessen | V | - | unsigned int | - | 0.000250 | 1 | 6.000000 |
| 0x4290 | Generatorstrom | A | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4292 | Status - Entladung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4294 | Mengenregelventil - Sollwert des Ansteuerstromes (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4295 | Mengenregelventil - gefilterter Stromistwert der Stromregelung (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4296 | Mengenregelventil - gefilterter Istwert des Ansteuerstromes | mA | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x4299 | Mengenregelventil - Volumenstromsollwert der Raildruckregelung | mm3/s | - | unsigned int | - | 0.003052 | 1 | -100.000000 |
| 0x429C | Mengenregelventil - Zustand der Stellwertsteuerung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x42CB | Basis-Ladedruck-Sollwert | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x42CC | Basis-Ladedruck-Sollwert (Niederdruckstufe) | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x42CD | Regelabweichung des Ladedruckreglers | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x42CE | Regelabweichung des Ladedruckreglers (Niederdruckstufe) | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x432D | Raildruckregelventil-Stromsollwert von der Raildruckregelung | mA | - | unsigned int | - | 0.061036 | 1 | 0.000000 |
| 0x4331 | Raildruckregelventil-Drucksollwert von der Raildruckregelung | bar | - | unsigned int | - | 0.045778 | 1 | 0.000000 |
| 0x4333 | Raildruckregelventil-Adaptionsfaktor für die Kennlinie (1 Byte) | - | - | unsigned char | - | 0.003922 | 1 | 0.500000 |
| 0x4334 | Raildruckregelventil-Stromsollwert von der Raildruckregelung (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4335 | Raildruckregelventil-Sollstrom (1 Byte) | mA | - | unsigned char | - | 7.844865 | 1 | 0.000000 |
| 0x4336 | Raildruckregelventil-Zustand der Stellwertsteuerung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x43AD | Kraftstoffvorförderdruck - gefiltert (1 Byte) | hPa | - | unsigned char | - | 23.540230 | 1 | 0.000000 |
| 0x43B2 | Kraftstoffvorförderdruck - Spannungsrohwert vom Sensor (1 Byte) | mV | - | unsigned char | - | 13.739203 | 1 | 0.000000 |
| 0x43CC | Status der Dieselfilterheizung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x43E5 | Vorfördermenge (1 Byte) | l/h | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x43F5 | Zähler für die Lernfunktion Dieselfilterheizung | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x43F6 | Gelernte Leistung für Dieselfilterheizung | W | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x43F7 | Leistung EKP (U*I) gefiltert (1 Byte) | W | - | unsigned char | - | 1.000244 | 1 | 0.000000 |
| 0x445B | Kraftstoffvolumen (1 Byte) | l | - | unsigned char | - | 0.490539 | 1 | 0.000000 |
| 0x445C | Kraftstofftemperatur (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -49.945509 |
| 0x44AA | Absolutdruck vor Turbine | hPa | - | unsigned int | - | 0.038148 | 1 | 500.000205 |
| 0x44B9 | Partikelmasse additiv korrigiert | g | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x44BA | kontinuierlich simulierte Partikelmasse | g | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x44BD | Ölaschemasse | g | - | unsigned int | - | 0.015259 | 1 | 0.000000 |
| 0x44BE | Rußmasse | g | - | unsigned int | - | 0.015259 | 1 | 0.000000 |
| 0x44BF | gefahrene Strecke seit der letzten erfolgreichen Regeneration | m | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x44C3 | Status - Betriebsbereich für die Partikelfilterdruckplausibilisierung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x44C4 | Abgasgegendruck vor Partikelfilter - korrigiert | hPa | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x44C5 | Gefilterter Strömungswiderstand des Partikelfilters | hPa/(m^3/h) | - | unsigned int | - | 0.000100 | 1 | 0.000000 |
| 0x44C6 | Gefilterter Strömungswiderstand des Partikelfilters (1 Byte) | hPa/(m^3/h) | - | unsigned char | - | 0.005498 | 1 | -0.200284 |
| 0x44F0 | Spannungsrohwert - Abgasdruck vor Partikelfilter | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x44F3 | Spannungsrohwert - Abgasdruck vor Katalysator | mV | - | unsigned int | - | 0.076295 | 1 | 0.000000 |
| 0x44F4 | Abgasdruck vor Partikelfilter | hPa | - | unsigned int | - | 0.091554 | 1 | 0.000000 |
| 0x44F6 | Abgastemperatur vor Katalysator - korrigierter Wert (1 Byte) | degC | - | unsigned char | - | 3.727873 | 1 | -49.857306 |
| 0x44F7 | Abgastemperatur vor Partikelfilter - korrigierter Wert (1 Byte) | degC | - | unsigned char | - | 3.333469 | 1 | -49.990920 |
| 0x44F9 | korrigierter Differenzdruck (1 Byte) | hPa | - | unsigned char | - | 4.118135 | 1 | -50.005925 |
| 0x44FB | gefilterter Differenzdruck des Partikelfilters (1 Byte) | hPa | - | unsigned char | - | 4.118135 | 1 | -50.005925 |
| 0x44FD | Offset fuer Partikelfilter-Differenzdruck (1 Byte) | hPa | - | unsigned char | - | 0.784317 | 1 | -100.000479 |
| 0x44FF | Rohwert des korrigierten Absolutgegendruckes (1 Byte) | hPa | - | unsigned char | - | 4.118135 | 1 | -50.005925 |
| 0x45D7 | Einspritzmenge - Sollwert ohne Mengenausgleichsregelung (1 Byte) | mg/hub | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x45EC | aktueller Motorstatus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x467E | Regenerationsstatus | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x46AF | Betriebsstundenzähler (für UW gerechnet ab 01.01.2000) | s | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x46B1 | Kilometerstand | km | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x46C5 | Tag Zähler absolut | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x46C9 | Com_stnWhlRLQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CA | Com_stnWhlRLQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CB | Com_stnWhlRRQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CC | Com_stnWhlRRQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CD | Com_stnWhlFLQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CE | Com_stnWhlFLQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46CF | Com_stnWhlFRQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46D0 | Com_stnWhlFRQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46D1 | Com_stvVehQl_FX | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x46D2 | Com_stvVehQl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4714 | Status - Raildruckregelmodus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4715 | Raildruck - Sollwert | bar | - | unsigned int | - | 0.045778 | 1 | 0.000000 |
| 0x4717 | Raildruck - Sollwert (1 Byte) | bar | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x4719 | Raildruckregelung-Status des Zustandsautomaten | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4749 | linearisierter Wert des Kraftstoffdrucksensors | bar | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x474A | maximaler Raildruck der letzten 10ms (1 Byte) | bar | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x477D | Statuswort - AV | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x4784 | Generatorstatus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4786 | Statusbyte Generator allgemein | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4787 | Generatorkennfeldnummer | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x47A1 | Inneres Moment für den Set-Pfad nach der Überwachungsbegrenzung | Nm | - | unsigned int | - | 0.114445 | 1 | -2500.059234 |
| 0x47DC | gesamter HFM-Luftmassenstrom | kg/h | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x47DE | Normiertes Luftstromverhältnis | - | - | unsigned int | - | 0.000122 | 1 | 0.000000 |
| 0x47E2 | Luftmasse pro Zylinder (1 Byte) | mg/hub | - | unsigned char | - | 6.277395 | 1 | 0.000000 |
| 0x47E3 | Rohwert der Luftmassenperiode | us | - | unsigned long | - | 0.050000 | 1 | 0.000000 |
| 0x4843 | Temperatur nach dem Ladeluftkühler | degC | - | unsigned int | - | 0.010000 | 1 | -100.000000 |
| 0x4846 | Lufttemperatur an der HFM-Position | degC | - | unsigned int | - | 0.100000 | 1 | -273.140000 |
| 0x4847 | Luftdruck vor Einlassventil (1 Byte) | hPa | - | unsigned char | - | 15.693487 | 1 | 0.000000 |
| 0x4848 | Erfasster Wert der Lufttemperatur an der HFM-Position (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -49.945509 |
| 0x4850 | Temperature at the down stream of the charged air cooler (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -39.943067 |
| 0x4873 | Sollluftmasse (1 Byte) | mg/hub | - | unsigned char | - | 6.277395 | 1 | 0.000000 |
| 0x487E | Gesamtsollabgasrückführrate | - | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x4889 | dynamisch adaptierte Luftmasse | mg/hub | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x488A | geschätzte Gesamtistabgasrückführrate | % | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x48A6 | aktuelles Kupplungsmoment | Nm | - | unsigned int | - | 0.114445 | 1 | -2500.059234 |
| 0x48D8 | Ausgangstastverhältnis - Drallklappe (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x48D9 | Solltastverhältnis - Drallklappe | % | - | unsigned int | - | 0.001526 | 1 | 0.000000 |
| 0x48DB | Drallklappe - Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x49EC | Aktorspannung Up-Niveau (1 Byte) 0 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49ED | Aktorspannung Up-Niveau (1 Byte) 1 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49EE | Aktorspannung Up-Niveau (1 Byte) 2 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49EF | Aktorspannung Up-Niveau (1 Byte) 3 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49F0 | Aktorspannung Up-Niveau (1 Byte) 4 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x49F1 | Aktorspannung Up-Niveau (1 Byte) 5 | V | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x4A4E | Zylinderspezifische Diagnoseinformation 0 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A4F | Zylinderspezifische Diagnoseinformation 1 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A50 | Zylinderspezifische Diagnoseinformation 2 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A51 | Zylinderspezifische Diagnoseinformation 3 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A52 | Zylinderspezifische Diagnoseinformation 4 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A53 | Zylinderspezifische Diagnoseinformation 5 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4A57 | Einspritzfreigabestatus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4ACA | Aktueller Gang intern | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4AF4 | Der aus LSU gemessene Lambdawert 0 | - | - | unsigned int | - | 0.001000 | 1 | 0.000000 |
| 0x4BCA | aktuelle Motorabstellzeit | s | - | unsigned int | - | 10.002442 | 1 | 0.000000 |
| 0x4BF5 | Drosselklappe - Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4BF7 | Ausgangstastverhältnis - Drosselklappensteller (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4BFC | Sollwert aus dem Koordinator für Drosselklappe (1 Byte) | % | - | unsigned char | - | 0.002500 | 1 | -81.920000 |
| 0x4C14 | Fahrzeuggeschwindigkeit | km/h | - | unsigned int | - | 0.004578 | 1 | 0.000000 |
| 0x4C8E | Ausgangstastverhältnis - Abgasrückführregelventil (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4C94 | Ausgang der Sollwertkennlinie für AGR-Tastverhältnis (1 Byte) | % | - | unsigned char | - | 0.003052 | 1 | -100.000000 |
| 0x4C98 | AGR - Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x4CBE | Solltastverhältnis - Ladedrucksteller | % | - | unsigned int | - | 0.003052 | 1 | 0.000000 |
| 0x4CC1 | Ausgangstastverhältnis - Ladedrucksteller (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4CC7 | Linearisierte fehlerunbehandelte ATL-Stellgliedposition (1 Byte) | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x4CDE | Ausgangstastverhältnis - Ladedrucksteller (ND) (1 Byte) | % | - | unsigned char | - | 0.392431 | 1 | 0.000000 |
| 0x4CF2 | Umgebungsdruck (1 Byte) | hPa | - | unsigned char | - | 2.353009 | 1 | 600.017234 |
| 0x4D54 | Referenzgasmassenstrom in den Motor | kg/h | - | unsigned int | - | 0.048829 | 1 | -1600.020028 |
| 0x4D58 | berechneter Abgasvolumenstrom im Partikelfilter (1 Byte) | m^3/h | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x4D6B | rückgeführter Abgasmassenstrom nach AGR-Kühler (1 Byte aus AsMod) | kg/h | - | unsigned char | - | 0.588294 | 1 | -50.005027 |
| 0x4D88 | Abgasrückführrate in den Motor | - | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x4E1C | Status vom Kompressorbypassventil | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x4F16 | Generatorregelung - Ableitung des Signals Dffgen | % | - | unsigned char | - | 0.390625 | 1 | 0.000000 |
| 0x4F17 | Chiptemperatur - Generator | degC | - | unsigned int | - | 0.100000 | 1 | 0.000000 |
| 0x4FDE | Kupplungsstatusinformation | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x50A7 | Umgebungstemperatur (1 Byte) | degC | - | unsigned char | - | 1.000244 | 1 | -39.943067 |
| 0x513D | Bremsunterdruck | bar | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x513E | Bremsunterdruck - Spannungsrohwert des Sensors | mV | - | unsigned int | - | 0.200000 | 1 | 0.000000 |
| 0x513F | Meldung Bremse betätigt | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5140 | Status des Bremslichtschalters | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5205 | Kühlmitteltemperatur (Sensorwert vor der Korrektur) | degC | - | unsigned char | - | 1.000244 | 1 | -39.943067 |
| 0x520D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1.002080 | 1 | 0.000000 |
| 0x5249 | Pedalwertgeber - ungefiltertes Signal | % | - | unsigned char |  | 0.392157 | 1 | 0.000000 |
| 0x526C | Status - ACC ist nicht aktiv (für Überwachung) | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x526D | Status des Reglereingriffs - inaktiv/aktiv | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x526E | Zulässiges Sollmoment der Ebene-1 Beschleunigungsüberwachung | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x5270 | Vortriebssollmoment nach Koordination mit ESP-Eingriffen (Radmoment) | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x5271 | Cruise Control ist aktiv | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5272 | Status Kurbelwellensignalauswertung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5273 | Zustand der Nockenwellenauswertung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5274 | Wunschmenge Haupteinspritzung | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x5275 | Wunschmenge Voreinspritzung 1 | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x5276 | Wunschmenge Voreinspritzung 2 | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x5278 | Sollmenge Nacheinspritzung 2 | mg/Hub | - | unsigned int | - | 0.003891 | 1 | 0.000000 |
| 0x527B | Einspritzmengenbegrenzungs-Anforderung der Steuergeräte Überwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x527D | Statusbit für Anfrage einer Fehlerreaktion der Funktionsrechnerüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x527E | Statusbit für Anfrage einer Fehlerreaktion der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x527F | Irreversibles Fehlerbit aus Prüfung mit Leerlauftestimpulsverfahren | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5280 | Irreversibles Fehlerbit aus Prüfung der Testspannung in der ADC Überwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5281 | Spannung am ADC für Fahrpedalsignal 2 | mV | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5282 | Spannung am ADC Testspannungs-Eingang | mV | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5285 | Zähler, um die Anzahl der Korrekturen des Antwortzählers zu zählen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5286 | Info an Ebene 1: Watchdogabschaltung aktiv | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x529C | Diagnosezähler für die Zeit des ROM-Checks über die Bereiche der Wiederholungsprüfung | us | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x529D | Variable zur Deaktivierung des kompletten ROM-Checks über Code | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x529E | Variable zur Deaktivierung des kompletten ROM-Checks über Daten | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x529F | Anforderung für die Erkennung einer Verlängerung des Nachlaufs | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A0 | Anzahl der Wiederholungen bis die Hardware bereit ist um den Abschaltpfadtest durchzuführen | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52A1 | Anzahl von Versuchen um eine Einspritzung abzusetzen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A2 | Bytezähler für die Antwort zum Überwachungsmodul | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52A3 | Fehlerzähler beim Setzen der Antwortzeit (response time) | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52A4 | Anzahl der ausgelösten Resets im Abschaltpfadtest | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A5 | Rückgabewert von IVHSOPTst als Array | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A6 | Statusvariable des CJ945 Überspannung-Erkennungs-latch | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A7 | Überwachungsmodul-Antwortzeit (response time) | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x52A8 | Unplausibilität bei Vergleich der beiden Fahrpedalsignale | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52A9 | Info für Ebene 1: Fehlerreaktion aus Ebene 2 angefordert | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AA | Aktueller Wert für Fahrpedalsignal 1 | mV | - | unsigned char | - | 19.531250 | 1 | 0.000000 |
| 0x52AB | Aktueller Wert für Fahrpedalsignal 2 | mV | - | unsigned char | - | 9.765625 | 1 | 0.000000 |
| 0x52AC | Kupplungszustand | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AD | Status der temporären Defekterkennung der DSC-Botschaft | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AE | Status des ASR-Eingriffes in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52AF | angefordertes Motormoment von MSR-Steuerung | Nm | - | unsigned int | - | 1.000244 | 1 | 0.000000 |
| 0x52B0 | Rohwert der Momentenanforderung der DCS CAN Botschaft | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x52B1 | In Funktionsüberwachung berechnete Motordrehzahl | rpm | - | unsigned char | - | 40.000000 | 1 | 0.000000 |
| 0x52B2 | Kennung 1 für Synchronisation in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B3 | Kennung 2 für Synchronisation in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B4 | Status der Zulässigkeit des MSR-Eingriffs aus der Ebene 2 an die Ebene 1 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B5 | Zylindernummer einspritzplatzspezifisch | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B6 | Einspritztyp einspritzplatzspezifisch | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B7 | Status allgemeiner Drehzahlanforderungen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B8 | Status der Zulässigkeit des Getriebeeingriffs in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52B9 | Bitcodierter Status der Beschleunigungsüberwachung in der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52BA | Fahrzeugbeschleunigung für die Funktionsüberwachung | m/s^2 | - | unsigned int | - | 0.001000 | 1 | 0.000000 |
| 0x52BB | MoFVSS_stErrVSS | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52BC | Fahrzeuggeschwindigkeit mit berechnetem Ersatzwert bei Fehler in der Funktionsüberwachung | km/h | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x52BE | Ringspeicher mit den letzten 8 Reset-ID s 1 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52BF | Ringspeicher mit den letzten 8 Reset-ID s 2 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C0 | Ringspeicher mit den letzten 8 Reset-ID s 3 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C1 | Ringspeicher mit den letzten 8 Reset-ID s 4 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C5 | Freigabe für Momentenanforderungen aus der Schleppmomentenregelung (MSR) | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52C6 | Neutralwert für Momentenanforderungen aus der Schleppmomentenregelung (MSR) empfangen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52C7 | MSR-Eingriffsmoment (Getriebeausgangsmoment) | Nm | - | unsigned long | - | 0.000015 | 1 | 0.000000 |
| 0x52C8 | Status MSR Eingriff | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x52C9 | Erhöhender Stabilitätseingriff von Ebene 1 verboten | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52CA | MoFVSS_stFrzVSS | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x52CB | Info zum Envram Check | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x542B | MSR Eingriffsmoment (Radmoment) | Nm | - | unsigned long | - | 0.100000 | 1 | 0.000000 |
| 0x5598 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 1 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x5599 | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 2 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559A | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 3 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559B | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 4 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559C | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 5 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x559D | I-Anteil der aktuellen zylinderindividuellen Korrekturmenge für Zylinder 6 (in Zündfolge) | mg/hub | - | unsigned int | - | 0.001526 | 1 | -50.000020 |
| 0x55A5 | Korrekturmenge der FMO für abgasrelevante Regelkreise | mg/Hub | - | unsigned int | - | 0.010000 | 1 | 0.000000 |
| 0x56B6 | Zustand Synchronisation | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x56B7 | Zustand Betriebsmodus | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x56BA | Auswahl der Motordrehzahl | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5719 | Zähler Tuningwahrscheinlichkeit Nicht-AGR-Fall gesamt | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x571B | Tuningwahrscheinlichkeit Nicht-AGR-Fall | - | - | unsigned int | - | 0.001526 | 1 | 0.000000 |
| 0x571D | max. Tuningwahrscheinlichkeit im Nicht-AGR-Fall | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x571F | mittlere Abweichung der Sauerstoffkonzentration | - | - | unsigned int | - | 1.024000 | 1 | -33554.432000 |
| 0x5720 | Ringspeicher der Manipulationswahrscheinlichkeit 0 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5721 | Ringspeicher der Manipulationswahrscheinlichkeit 1 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5722 | Ringspeicher der Manipulationswahrscheinlichkeit 2 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5723 | Ringspeicher der Manipulationswahrscheinlichkeit 3 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5724 | Ringspeicher der Manipulationswahrscheinlichkeit 4 | % | - | unsigned char | - | 0.392157 | 1 | 0.000000 |
| 0x5734 | Ringspeicher Kilometerstand 0 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5735 | Ringspeicher Kilometerstand 1 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5736 | Ringspeicher Kilometerstand 2 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5737 | Ringspeicher Kilometerstand 3 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5738 | Ringspeicher Kilometerstand 4 | km | - | unsigned int | - | 10.000000 | 1 | 0.000000 |
| 0x5776 | Motortemperatur (Recovery - Messgroesse) | degC | - | unsigned char | - | 1.000244 | 1 | -49.945509 |
| 0x5778 | maximaler Raildruck (Recovery - Messgroesse) | bar | - | unsigned char | - | 7.858034 | 1 | 0.000000 |
| 0x5779 | Motordrehzahl | rpm | - | unsigned int | - | 0.091554 | 1 | 0.000000 |
| 0x577A | Luftmasse pro Zylinder (Recovery - Messgroesse) | mg/Hub | - | unsigned char | - | 6.277395 | 1 | 0.000000 |
| 0x577B | Kilometerstand (Auflösung 8 km) | km | - | unsigned int | - | 8.000000 | 1 | 0.000000 |
| 0x577C | Reset Information/Reset-ID der letzten Resetursache | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x577D | Reset Information/Adresse an der der letzte Reset ausgelöst wurde | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x577E | Batteriespannung (Recovery - Messgroesse) | mV | - | unsigned char | - | 100.009156 | 1 | 0.000000 |
| 0x577F | Env_xUserValue (Recovery - Messgrösse) | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x57E1 | Position des Fahrpedals für die Funktionsüberwachung | mV | - | unsigned char | - | 19.531250 | 1 | 0.000000 |
| 0x57E2 | Kennung für Freigabebedingung der Fehlerprüfung für die Diagnose | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57E4 | Motordrehzahl in der Funktionsüberwachung | rpm | - | unsigned char | - | 40.000000 | 1 | 0.000000 |
| 0x57E5 | Synchronisationsstatus der Drehzahlüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57E6 | Winkeluhrstand aus vorhergehendem Aufruf der Motordrehzahlüberwachung | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x57EC | Statusinformation über laufende Einspritzungen | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57EE | Plausibilisierter Motorteststatus der Funktionsüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x57F6 | Status aller Freigabe Bits für die Schubüberwachung | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x57FE | Fahrpedalwert der Überwachungsfunktionen | % | - | unsigned char | - | 0.390625 | 1 | 0.000000 |
| 0x5808 | Mittelwert der durchschnittlichen momentenwirksamen Ansteuerdauer pro Zylinder | us | - | unsigned int | - | 0.400000 | 1 | 0.000000 |
| 0x580D | zulässiges Moment der externen Eingriffe in der Funktionsüberwachung | Nm | - | unsigned int | - | 0.114445 | 1 | -2500.059234 |
| 0x5812 | zulässiges Moment der Fahrzeugfunktionen | Nm | - | unsigned int | - | 1.831126 | 1 | -40000.947751 |
| 0x5816 | Statusinfo der MSR-Eingriffüberwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5817 | Status - Fehler redundanter DSC-Eingriff | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5824 | Anzahl der Wiederholungen des Abschaltpfadtests (Realisierung einer Zeitüberwachung) | - | - | unsigned char | - | 8.000000 | 1 | 0.000000 |
| 0x5825 | Zähler für die Anzahl der Aufrufe an aktiven Abschaltpfad-Test | - | - | unsigned char | - | 20.004884 | 1 | 0.000000 |
| 0x5826 | Informationen für Ebene 1, 2 zum Status der Synchronisation des Abschatpfadtests und der Frage-Antwort-Kommunikation | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x582C | Status Info der ADC-Überwachung | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x582E | Ratiometriekorrekturfaktor in der Funktionsüberwachung | 1/1 | - | unsigned int | - | 0.000977 | 1 | 0.000000 |
| 0x582F | Fehlerzählerrückmeldung von Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5830 | Fehlerzähler im Funktionsrechner für Fehler vom Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5831 | Status Bitleiste für Kommunikation mit Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5832 | Fehlerzähler für SPI-Übertragungen in Kommunikation mit Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5833 | Erweiterte Frage von Überwachungsmodul | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x5834 | Antwort auf Frage vom Überwachungsmodul | - | - | unsigned long | - | 1.000000 | 1 | 0.000000 |
| 0x5836 | Fehlerhafte ROM-Page für Einfachfehler im kompletten ROM-Check | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5837 | Pointer für aktuell zu prüfende Page des kompletten ROM-Checks | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5838 | Statusvariable zur Synchronisation von Abschaltpfadtest und Frage-/Antwort-Kommunikation (Test ist abgeschlossen) | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x583B | Status der Kommunikation via SPI-Bus zum Überwachungsmodul | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x583D | Statusvariable des Abschaltpfad-Tests | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5846 | Fehlerzähler für SPI-Übertragungen zum Überwachungsmodul oder zum CJ945/R2S2 | - | - | unsigned int | - | 1.000000 | 1 | 0.000000 |
| 0x5848 | Debuginfo des Abschaltpfad-Tests 0 | - | - | unsigned char | - | 1.000000 | 1 | 0.000000 |
| 0x5955 | Motordrehzahl | rpm | - | unsigned int | - | 0.500000 | 1 | 0.000000 |
| 0xXY | Unbekannte Umweltbedingung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xFFFF | Unbenutzte Umweltbedingung | - | - | xxx | - | 1 | 1 | 0 |

### TAB_SYSTEMCHECK_LMS

| LABEL | TEXT | POS | BYTES | FACT_A | FACT_B | 987296 |
| --- | --- | --- | --- | --- | --- | --- |
| DIFF1_MAX | DIFF1_MAX | 04 | 1 | 1,00 | 0,00 | 25,0 |
| DIFF1_MIN | DIFF1_MIN | 05 | 1 | 1,00 | 0,00 | 0,0 |
| DIFF2_MAX | DIFF2_MAX | 06 | 1 | 1,00 | 0,00 | 40,0 |
| DIFF2_MIN | DIFF2_MIN | 07 | 1 | 1,00 | 0,00 | 15,0 |
| FAKTOR_1 | FAKTOR_1 | 08 | 1 | 0,01 | 0,00 | 0,8 |
| FAKTOR_2 | FAKTOR_2 | 09 | 1 | 0,01 | 0,00 | 0,8 |
| ML_TEST_1 | ML_TEST_1 | 10 | 1 | 0,01 | 0,00 | 1,0 |
| ML_TEST_2 | ML_TEST_2 | 11 | 1 | 0,01 | 0,00 | 1,2 |
| ML_TEST_3 | ML_TEST_3 | 12 | 1 | 0,01 | 0,00 | 1,1 |
| ML_TEST_4 | ML_TEST_4 | 13 | 1 | 0,01 | 0,00 | 1,3 |
| N_SOLL_1 | N_SOLL_1 | 14 | 2 | 1,00 | 0,00 | 3700,0 |
| N_SOLL_2 | N_SOLL_2 | 16 | 2 | 1,00 | 0,00 | 2000,0 |
| N_TEST_1 | N_TEST_1 | 18 | 2 | 1,00 | 0,00 | 3600,0 |
| N_TEST_2 | N_TEST_2 | 20 | 2 | 1,00 | 0,00 | 3800,0 |
| N_TEST_3 | N_TEST_3 | 22 | 2 | 1,00 | 0,00 | 1900,0 |
| N_TEST_4 | N_TEST_4 | 24 | 2 | 1,00 | 0,00 | 2100,0 |
| P21_SOLL_1 | P21_SOLL_1 | 26 | 2 | 1,00 | 0,00 | 1300,0 |
| P21_TEST_1 | P21_TEST_1 | 28 | 2 | 1,00 | 0,00 | 1100,0 |
| P21_TEST_2 | P21_TEST_2 | 30 | 2 | 1,00 | 0,00 | 1800,0 |
| P21_TEST_3 | P21_TEST_3 | 32 | 2 | 1,00 | 0,00 | 1450,0 |
| P21_TEST_4 | P21_TEST_4 | 34 | 2 | 1,00 | 0,00 | 2100,0 |
| P21_TEST_5 | P21_TEST_5 | 36 | 2 | 1,00 | 0,00 | 1150,0 |
| P21_TEST_6 | P21_TEST_6 | 38 | 2 | 1,00 | 0,00 | 1400,0 |
| T_WAIT_1 | T_WAIT_1 | 40 | 1 | 0,10 | 0,00 | 0,7 |
| T_WAIT_2 | T_WAIT_2 | 41 | 1 | 0,10 | 0,00 | 10,0 |
| T_WAIT_3 | T_WAIT_3 | 42 | 1 | 0,10 | 0,00 | 10,0 |
| T_WAIT_4 | T_WAIT_4 | 43 | 1 | 0,10 | 0,00 | 3,0 |
| T_WAIT_5 | T_WAIT_5 | 44 | 1 | 0,10 | 0,00 | 9,0 |
| T_WAIT_6 | T_WAIT_6 | 45 | 1 | 0,10 | 0,00 | 4,0 |
| T_WAIT_7 | T_WAIT_7 | 46 | 1 | 0,10 | 0,00 | 5,0 |
| T_WAIT_8 | T_WAIT_8 | 47 | 1 | 0,10 | 0,00 | 8,0 |
| T_WAIT_9 | T_WAIT_9 | 48 | 1 | 0,10 | 0,00 | 8,0 |
| T_WAIT_N1 | T_WAIT_N1 | 49 | 1 | 0,10 | 0,00 | 10,0 |
| TV_AGR_1 | TV_AGR_1 | 50 | 2 | 0,01220703125 | 0,00 | -10,0 |
| TV_AGR_2 | TV_AGR_2 | 52 | 2 | 0,01220703125 | 0,00 | -10,0 |
| TV_AGR_3 | TV_AGR_3 | 54 | 2 | 0,01220703125 | 0,00 | 15,0 |
| TV_AGR_4 | TV_AGR_4 | 56 | 2 | 0,01220703125 | 0,00 | -10,0 |
| TV_AGR_5 | TV_AGR_5 | 58 | 2 | 0,01220703125 | 0,00 | 15,0 |
| TV_AGR_DELTA_1 | TV_AGR_DELTA_1 | 60 | 2 | 0,01220703125 | 0,00 | 30,0 |
| TV_AGR_DELTA_2 | TV_AGR_DELTA_2 | 62 | 2 | 0,01220703125 | 0,00 | 30,0 |
| TV_DRO_1 | TV_DRO_1 | 64 | 2 | 0,01220703125 | 0,00 | 6,5 |
| TV_LDS_1 | TV_LDS_1 | 66 | 2 | 0,01220703125 | 0,00 | 6,5 |
| TV_LDS_2 | TV_LDS_2 | 68 | 2 | 0,01220703125 | 0,00 | 80,0 |
| TV_LDS_3 | TV_LDS_3 | 70 | 2 | 0,01220703125 | 0,00 | 5,0 |
| TV_LDS_4 | TV_LDS_4 | 72 | 2 | 0,01220703125 | 0,00 | 95,0 |
| DRED1_MAX | DRED1_MAX | 74 | 1 | 1,00 | 0,00 | 20,0 |
| DRED1_MIN | DRED1_MIN | 75 | 1 | 1,00 | 0,00 | 4,0 |
| DRED2_MAX | DRED2_MAX | 76 | 1 | 1,00 | 0,00 | 15,0 |
| DRED2_MIN | DRED2_MIN | 77 | 1 | 1,00 | 0,00 | 0,0 |
| RED11_MAX | RED11_MAX | 78 | 1 | 1,00 | 0,00 | 15,0 |
| RED11_MIN | RED11_MIN | 79 | 1 | 1,00 | 0,00 | 0,0 |
| RED12_MAX | RED12_MAX | 80 | 1 | 1,00 | 0,00 | 30,0 |
| RED12_MIN | RED12_MIN | 81 | 1 | 1,00 | 0,00 | 10,0 |
| RED13_MAX | RED13_MAX | 82 | 1 | 1,00 | 0,00 | 35,0 |
| RED13_MIN | RED13_MIN | 83 | 1 | 1,00 | 0,00 | 15,0 |
| -- | -- | - | - | - | - | - |

### DIG_BLOCK0

| NAME | TELEGRAMM | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MFL | 225FA0 | STAT_MFL | 3 | 0x01 | 0x01 | MFL-Status | erkannt | nicht erkannt |
| STAT_KLIMA | 225FA0 | STAT_KLIMA | 3 | 0x02 | 0x02 | Klimaanlagen-Status | erkannt | nicht erkannt |
| STAT_ACC | 225FA0 | STAT_ACC | 3 | 0x04 | 0x04 | ACC-Status | erkannt | nicht erkannt |
| STAT_IBS | 225FA0 | STAT_IBS | 3 | 0x08 | 0x08 | IBS-Status | erkannt | nicht erkannt |
| STAT_AFS | 225FA0 | STAT_AFS | 3 | 0x10 | 0x10 | AFS-Status | erkannt | nicht erkannt |
| STAT_STE | 225FA0 | STAT_STE | 3 | 0x20 | 0x20 | STE-Status | erkannt | nicht erkannt |
| STAT_ARS | 225FA0 | STAT_ARS | 3 | 0x40 | 0x40 | ARS-Status | erkannt | nicht erkannt |
| STAT_EMF | 225FA0 | STAT_EMF | 3 | 0x80 | 0x80 | EMF-Status | erkannt | nicht erkannt |
| -- | - | - | - | - | - | - | - | - |

### DIG_BLOCK1

| NAME | TELEGRAMM | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FGR | 225FA1 | STAT_FGR | 3 | 0x01 | 0x01 | FGR-Status | erkannt | nicht erkannt |
| STAT_QLT | 225FA1 | STAT_QLT | 3 | 0x02 | 0x02 | QLT-Status | erkannt | nicht erkannt |
| STAT_FDC | 225FA1 | STAT_FDC | 3 | 0x04 | 0x04 | FDC-Status | erkannt | nicht erkannt |
| STAT_MSA | 225FA1 | STAT_MSA | 3 | 0x08 | 0x08 | MSA-Status | erkannt | nicht erkannt |
| STAT_DRO | 225FA1 | STAT_DRO | 3 | 0x10 | 0x10 | Drosselklappen-Status | erkannt | nicht erkannt |
| STAT_VFD | 225FA1 | STAT_VFD | 3 | 0x20 | 0x20 | Vorförderdrucksensor-Status | erkannt | nicht erkannt |
| STAT_KFH | 225FA1 | STAT_KFH | 3 | 0x40 | 0x40 | Kraftstofffilterheizung-Status | erkannt | nicht erkannt |
| STAT_ZUH | 225FA1 | STAT_ZUH | 3 | 0x80 | 0x80 | Zuheizer-Status | erkannt | nicht erkannt |
| -- | - | - | - | - | - | - | - | - |

### DIG_BLOCK2

| NAME | TELEGRAMM | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TCSF | 225FA2 | STAT_TCSF | 3 | 0x01 | 0x01 | Abgastemperatur vor Partikelfilter-Status | erkannt | nicht erkannt |
| STAT_PCSF | 225FA2 | STAT_PCSF | 3 | 0x02 | 0x02 | Drucksensor über Partikelfilter -Status | erkannt | nicht erkannt |
| STAT_TOXI | 225FA2 | STAT_TOXI | 3 | 0x04 | 0x04 | Abgastemperatursensor vor OxiCat-Status | erkannt | nicht erkannt |
| STAT_BUS | 225FA2 | STAT_BUS | 3 | 0x08 | 0x08 | Bremsunterdrucksensor-Status | erkannt | nicht erkannt |
| STAT_NGS | 225FA2 | STAT_NGS | 3 | 0x10 | 0x10 | Nullgangsensor-Status | erkannt | nicht erkannt |
| STAT_VFPFLT | 225FA2 | STAT_VFPFLT | 3 | - | - | - | - | - |
| STAT_GBXDAT3 | 225FA2 | STAT_GBXDAT3 | 3 | - | - | - | - | - |
| STAT_DXC | 225FA2 | STAT_DXC | 3 | - | - | - | - | - |
| -- | - | - | - | - | - | - | - | - |

### DIG_BLOCK3

| NAME | TELEGRAMM | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MLA | 225FA3 | STAT_MLA | 3 | 0x01 | 0x01 | Motorlager - Status | erkannt | nicht erkannt |
| STAT_AKKS | 225FA3 | STAT_AKKS | 3 | 0x02 | 0x02 | AKKS - Status | erkannt | nicht erkannt |
| STAT_GSG | 225FA3 | STAT_GSG | 3 | 0x04 | 0x04 | GSG - Status | erkannt | nicht erkannt |
| STAT_SGR | 225FA3 | STAT_SGR | 3 | 0x08 | 0x08 | SgrEcu - Status | erkannt | nicht erkannt |
| STAT_PCU | 225FA3 | STAT_PCU | 3 | 0x10 | 0x10 | PCU/DCDC Wandler - Status | erkannt | nicht erkannt |
| STAT_BBHE | 225FA3 | STAT_BBHE | 3 | 0x20 | 0x20 | BlowBy-Heizelement Status | erkannt | nicht erkannt |
| STAT_TRAIL | 225FA3 | STAT_TRAIL | 3 | 0x40 | 0x40 | Trailer - Status | erkannt | nicht erkannt |
| -- | - | - | - | - | - | - | - | - |

### DIG_OFFSET_LERNFUNKTIONEN

| NAME | ERGEBNIS | BYTE | MASK | VALUE | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- |
| S_ADAPACTIVE | STAT_ADAPTION_AKTIV | 1 | 0x01 | 0x01 | aktiv | nicht aktiv |
| S_JAMMEDVLV | STAT_KLEMMENDES_VENTIL | 1 | 0x02 | 0x02 | aktiv | nicht aktiv |
| S_LNGTDRFTERR | STAT_LANGZEITDRIFT_FEHLER | 1 | 0x04 | 0x04 | aktiv | nicht aktiv |
| S_SHRTTDRFTERR | STAT_KURZZEITDRIFT_FEHLER | 1 | 0x08 | 0x08 | aktiv | nicht aktiv |
| S_ADAPFIN | STAT_ADAPTION_BEENDET | 1 | 0x10 | 0x10 | aktiv | nicht aktiv |
| S_LSTVALWRIT | STAT_LETZTE_WERTE_GESPEICHERT | 1 | 0x20 | 0x20 | aktiv | nicht aktiv |
| S_FRSTVALWRIT | STAT_ERSTE_WERTE_GESPEICHERT | 1 | 0x40 | 0x40 | aktiv | nicht aktiv |
| S_BRKAFTRUN | STAT_ABGEBROCHENER_NACHLAUF | 1 | 0x80 | 0x80 | aktiv | nicht aktiv |
| S_HWERR | STAT_KOMPONENTE_HARDWAREFEHLER | 0 | 0x01 | 0x01 | aktiv | nicht aktiv |
| S_OPENLOAD | STAT_LEITUNG_UNTERBROCHEN | 0 | 0x02 | 0x02 | aktiv | nicht aktiv |

### TAB_STATUS_SYSTEMCHECK_LMS

| TELNAME | TELEGRAMM | NAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LMS_TEST_GESTARTET | 55 | LMS_TEST_GESTARTET | STAT_LMS_TEST_GESTARTET | 7 | 0x01 | 0x01 | LMS-Test gestartet | aktiv | nicht aktiv |
| LMS_TEST_BEENDET | 55 | LMS_TEST_BEENDET | STAT_LMS_TEST_BEENDET | 7 | 0x02 | 0x02 | LMS-Test beendet | aktiv | nicht aktiv |
| RED_UEBER_MAX | 55 | RED_UEBER_MAX | STAT_RED_UEBER_MAX | 7 | 0x04 | 0x04 | Bewertung Reduzierung über MAX | aktiv | nicht aktiv |
| RED_UNTER_MIN | 55 | RED_UNTER_MIN | STAT_RED_UNTER_MIN | 7 | 0x08 | 0x08 | Bewertung Reduzierung unter MIN | aktiv | nicht aktiv |
| DRED_UEBER_MAX | 55 | DRED_UEBER_MAX | STAT_DRED_UEBER_MAX | 7 | 0x10 | 0x10 | Bewertung Steigung Reduzierung über MAX | aktiv | nicht aktiv |
| DRED_UNTER_MIN | 55 | DRED_UNTER_MIN | STAT_DRED_UNTER_MIN | 7 | 0x20 | 0x20 | Bewertung Steigung Reduzierung unter MIN | aktiv | nicht aktiv |
| DIFF_UNTER_MIN | 55 | DIFF_UNTER_MIN | STAT_DIFF_UNTER_MIN | 7 | 0x40 | 0x40 | Bewertung Differenz unter MIN | aktiv | nicht aktiv |
| DIFF_UEBER_MAX | 55 | DIFF_UEBER_MAX | STAT_DIFF_UEBER_MAX | 7 | 0x80 | 0x80 | Bewertung Differenz über MAX | aktiv | nicht aktiv |
| DREHZAHLGRENZE_1_2_NIO | 55 | DREHZAHLGRENZE_1_2_NIO | STAT_DREHZAHLGRENZE_1_2_NIO | 6 | 0x01 | 0x01 | Drehzahlgrenzen 1 oder 2 verletzt | aktiv | nicht aktiv |
| DREHZAHLGRENZE_3_4_NIO | 55 | DREHZAHLGRENZE_3_4_NIO | STAT_DREHZAHLGRENZE_3_4_NIO | 6 | 0x02 | 0x02 | Drehzahlgrenzen 3 oder 4 verletzt | aktiv | nicht aktiv |
| P21_T_WAIT_1_MESSEN | 55 | P21_T_WAIT_1_MESSEN | STAT_P21_T_WAIT_1_MESSEN | 6 | 0x04 | 0x04 | Ladedruck nach T_WAIT_1 messen | aktiv | nicht aktiv |
| P21_T_WAIT_2_MESSEN | 55 | P21_T_WAIT_2_MESSEN | STAT_P21_T_WAIT_2_MESSEN | 6 | 0x08 | 0x08 | Ladedruck nach T_WAIT_2 messen | aktiv | nicht aktiv |
| P21_T_WAIT_1_UNTER_MIN | 55 | P21_T_WAIT_1_UNTER_MIN | STAT_P21_T_WAIT_1_UNTER_MIN | 6 | 0x10 | 0x10 | Bewertung Ladedruck nach T_WAIT_1 unter MIN | aktiv | nicht aktiv |
| P21_T_WAIT_1_UEBER_MAX | 55 | P21_T_WAIT_1_UEBER_MAX | STAT_P21_T_WAIT_1_UEBER_MAX | 6 | 0x20 | 0x20 | Bewertung Ladedruck nach T_WAIT_1 über MAX | aktiv | nicht aktiv |
| P21_T_WAIT_2_UNTER_MIN | 55 | P21_T_WAIT_2_UNTER_MIN | STAT_P21_T_WAIT_2_UNTER_MIN | 6 | 0x40 | 0x40 | Bewertung Ladedruck nach T_WAIT_2 unter MIN | aktiv | nicht aktiv |
| P21_T_WAIT_2_UEBER_MAX | 55 | P21_T_WAIT_2_UEBER_MAX | STAT_P21_T_WAIT_2_UEBER_MAX | 6 | 0x80 | 0x80 | Bewertung Ladedruck nach T_WAIT_2 über MAX | aktiv | nicht aktiv |
| P21_SOLL_1_EINSTELLEN | 55 | P21_SOLL_1_EINSTELLEN | STAT_P21_SOLL_1_EINSTELLEN | 5 | 0x01 | 0x01 | Ladedruck P21_SOLL_1 einstellen | aktiv | nicht aktiv |
| P21_NICHT_EINREGELBAR | 55 | P21_NICHT_EINREGELBAR | STAT_P21_NICHT_EINREGELBAR | 5 | 0x02 | 0x02 | Ladedruck kann nicht eingeregelt werden | aktiv | nicht aktiv |
| LM_HOHE_DREHZAHL_MESSEN | 55 | LM_HOHE_DREHZAHL_MESSEN | STAT_LM_HOHE_DREHZAHL_MESSEN | 5 | 0x04 | 0x04 | Luftmasse bei hoher Drehzahl gemessen | aktiv | nicht aktiv |
| LM_LEERLAUF_MESSEN | 55 | LM_LEERLAUF_MESSEN | STAT_LM_LEERLAUF_MESSEN | 5 | 0x08 | 0x08 | Luftmasse im Leerlauf gemessen | aktiv | nicht aktiv |
| LM_HOHE_DREHZAHL_NIO | 55 | LM_HOHE_DREHZAHL_NIO | STAT_LM_HOHE_DREHZAHL_NIO | 5 | 0x10 | 0x10 | HFM-Wert bei hoher Drehzahl n.i.O. | aktiv | nicht aktiv |
| LM_LEERLAUF_NIO | 55 | LM_LEERLAUF_NIO | STAT_LM_LEERLAUF_NIO | 5 | 0x20 | 0x20 | HFM-Wert im Leerlauf n.i.O. | aktiv | nicht aktiv |
| LM_AGR_BASIS_1_MESSEN | 55 | LM_AGR_BASIS_1_MESSEN | STAT_LM_AGR_BASIS_1_MESSEN | 5 | 0x40 | 0x40 | Luftmasse im Leerlauf messen, Basiswert 1 für AGR-Prüfung | aktiv | nicht aktiv |
| LM_AGR_BASIS_2_MESSEN | 55 | LM_AGR_BASIS_2_MESSEN | STAT_LM_AGR_BASIS_2_MESSEN | 5 | 0x80 | 0x80 | Luftmasse im Leerlauf messen, Basiswert 2 für AGR-Prüfung | aktiv | nicht aktiv |
| LM_LDS_AUS_GEMESSEN | 55 | LM_LDS_AUS_GEMESSEN | STAT_LM_LDS_AUS_GEMESSEN | 4 | 0x01 | 0x01 | Luftmasse bei TV_LDS_3 gemessen | aktiv | nicht aktiv |
| LM_LDS_EIN_GEMESSEN | 55 | LM_LDS_EIN_GEMESSEN | STAT_LM_LDS_EIN_GEMESSEN | 4 | 0x02 | 0x02 | Luftmasse bei TV_LDS_4 gemessen | aktiv | nicht aktiv |
| SICHERHEITSGRENZE_VERLETZT | 55 | SICHERHEITSGRENZE_VERLETZT | STAT_SICHERHEITSGRENZE_VERLETZT | 4 | 0x04 | 0x04 | Sicherheitsgrenze(n) verletzt | aktiv | nicht aktiv |
| LM_LDR_AKTIV | 55 | LM_LDR_AKTIV | STAT_LM_LDR_AKTIV | 4 | 0x08 | 0x08 | Zustand der Ladedruckregelung | aktiv | nicht aktiv |
| STELLERTEST_NIO | 55 | STELLERTEST_NIO | STAT_STELLERTEST_NIO | 4 | 0x10 | 0x10 | Stellertests (EGR, TVA oder BPA) fehlgeschlagen | aktiv | nicht aktiv |
| ABBRUCH_PARTIKELFILTER | 55 | ABBRUCH_PARTIKELFILTER | STAT_ABBRUCH_PARTIKELFILTER | 4 | 0x20 | 0x20 | Abbruch wegen Partikelfilter (FunctionID) | aktiv | nicht aktiv |
| LMS_TIME_OUT | 55 | LMS_TIME_OUT | STAT_LMS_TIME_OUT | 4 | 0x40 | 0x40 | LMS-Test Time-Out | aktiv | nicht aktiv |
| LMS_TEST_ABGEBROCHEN | 55 | LMS_TEST_ABGEBROCHEN | STAT_LMS_TEST_ABGEBROCHEN | 4 | 0x80 | 0x80 | LMS-Test abgebrochen | aktiv | nicht aktiv |

### SWTSTATUSTAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT_VORHANDEN |
| 0x01 | EINGESPIELT |
| 0x02 | AKZEPTIERT |
| 0x03 | ABGELEHNT |
| 0x04 | STORNIERT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUS_RESPONSE |

### SWTFEHLER_TAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x31 | UNZULAESSIGER_WERTEBEREICH |
| 0xCC | SCHLUESSELABLEITUNG_NICHT_AKTIVIERT |
| 0xCD | KEYFAKTOR_NICHT_VORHANDEN |
| 0xCE | FSC_NICHT_MASKIERT |
| 0xCF | FSC_MASKIERT |
| 0xD0 | FSC_ERWEITERUNG_PRUEFUNG_SCHLUG_FEHL |
| 0xD1 | FSC_UNGUELTIG |
| 0xD2 | SW_ID_NICHT_VORHANDEN |
| 0xD3 | KEIN_SPEICHERPLATZ_MEHR_VORHANDEN |
| 0xD4 | FALSCHER_ZERTIFIKATSINHALT_UNBEKANNTES_CRIT-ELEMENT |
| 0xD5 | FALSCHER_FSC_INHALT |
| 0xD6 | FALSCHE_PARAMETER |
| 0xD7 | FSCS_ZERTIFIKAT_ABGELEHNT |
| 0xD8 | KEINE_DATEN_ZU_ANGEGEBENEM_SG_VORHANDEN |
| 0xD9 | KEINE_AUTHENTISIERUNG |
| 0xDA | FINGER_PRINT_MECHANISMUS_NOT_OK |
| 0xDB | SIGS_ID_UND_ZERTIFIKAT_PASSEN_NICHT_ZUSAMMEN |
| 0xDC | GUELTIGKEITS_PRUEFUNG_SCHLUG_FEHL |
| 0xDD | FAHRGESTELLNUMMER_FEHLERHAFT |
| 0xDE | FGN_PRUEFUNG_SCHLUG_FEHL |
| 0xDF | FLASH_LESEFEHLER |
| 0xE0 | FLASH_SCHREIBFEHLER |
| 0xE1 | FALSCHER_ZERTIFIKATSINHALT_KEY_USAGE |
| 0xE2 | FALSCHER_ZERTIFIKATSINHALT_ISSUER |
| 0xE3 | FALSCHER_ZERTIFIKATSINHALT_VALIDITY |
| 0xE4 | FSCS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE5 | FSCS_ZERTIFIKAT_UNGUELTIG |
| 0xE6 | FSCS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xE7 | FSCS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xE8 | SIGS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE9 | SIGS_ZERTIFIKAT_UNGUELTIG |
| 0xEA | SIGS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xEB | SIGS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xEC | ROOT_ZERTIFIKAT_UNGUELTIG |
| 0xED | ROOT_ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xEE | ROOT_ZERTIFIKAT_FEHLERHAFT |
| 0xEF | ROOT_ZERTIFIKAT_NICHT_LESBAR |
| 0xF0 | ROOT_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF1 | ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xF2 | ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF3 | FSC_PRUEFUNG_SCHLUG_FEHL |
| 0xF4 | FSC_STORNIERT |
| 0xF5 | FSC_STATUS_ABGELEHNT |
| 0xF6 | FSC_NICHT_VORHANDEN |
| 0xF7 | FALSCHE_FSCS_ID_IM_FSC |
| 0xF8 | UNGUELTIGES_FSC_ERSTELLUNGSDDATUM |
| 0xF9 | SIGNATUR_PRUEFUNG_SCHLUG_FEHL |
| 0xFA | SW_SIGNATURPRUEFUNG_SCHLUG_FEHL |
| 0xFB | SW_SIG_STATUS_ABGELEHNT |
| 0xFC | SW_ID_PRUEFUNG_SCHLUG_FEHL |
| 0xFD | SW_NICHT_AKTIVIERT |
| 0xFE | SW_NICHT_EINGESPIELT |
| 0xFF | UNBEKANNTER_FEHLER |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe von Zuendung und Einspritzung (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört, Motorlauf gesperrt) |
| 0x01 | Freigabe von Zuendung und Einspritzung erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe von Zuendung und Einspritzung abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |

### IBS_DEAK

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 8 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |

### STAT_RUHESTROM

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 keine Ruhestromverletzung, keine Standverbraucher aktiv |
| 0x01 | 1 Ruhestrom 80 bis 200mA aktiv, keine Standverbraucher aktiv |
| 0x02 | 2 Ruhestrom 200 bis 1000mA aktiv, keine Standverbraucher aktiv |
| 0x03 | 3 Ruhestrom über 1000mA aktiv, keine Standverbraucher aktiv |
| 0x04 | 4 keine Ruhestromverletzung, Standverbraucher Licht aktiv |
| 0x05 | 5 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Licht aktiv |
| 0x06 | 6 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Licht aktiv |
| 0x07 | 7 Ruhestrom über 1000mA aktiv, Standverbraucher Licht aktiv |
| 0x08 | 8 keine Ruhestromverletzung, Standverbraucher Standheizung aktiv |
| 0x09 | 9 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0A | 10 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0B | 11 Ruhestrom über 1000mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0C | 12 keine Ruhestromverletzung, Standverbraucher Sonstige aktiv |
| 0x0D | 13 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Sonstige aktiv |
| 0x0E | 14 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Sonstige aktiv |
| 0x0F | 15 Ruhestrom über 1000mA aktiv, Standverbraucher Sonstige aktiv |
| 0xFF | 255 Status unbekannt |

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0xFF | 01 | 12 | 02 | 000F | 01 | 00 | 00 | - | 00 | - | 00 | - | 00 | - | PM.Recovery |

### _MOTORSG_TABLE_FS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Übergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion läuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 8 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 9 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 255 | ungültiger Wert |

### _MOTORUDS_TABLE_MSA_URSACHE_AV

| NR | TEXT |
| --- | --- |
| 0 | Ursache AV ausserhalb PM |
| 1 | Batterieladezustand-Erkennung nicht plausibel und FIT-Korrektur |
| 2 | Batterieladezustand-Erkennung nicht plausibel |
| 3 | FIT-Korrektur |
| 4 | Batterieladezustand zu niedrig |
| 5 | Batterieladezustand zu niedrig und (Startspannung zu niedrig ODER Bordnetzstrom zu hoch ODER T_batt zu hoch) |
| 6 | T_batt zu hoch |
| 7 | T_batt zu hoch und (Startspannung zu niedrig ODER Bordnetzstrom zu hoch) |
| 8 | Startspannung zu niedrig |
| 9 | Startspannung zu niedrig und Bordnetzstrom zu hoch |
| 10 | Bordnetzstrom zu hoch |
| 11 | Reserve-Prio 1 |
| 12 | Reserve-Prio 2 |
| 13 | Reserve-Prio 3 |
| 14 | Reserve-Prio 4 |
| 15 | ungueltig |

### _MOTORUDS_TABLE_MSA_URSACHE_EA

| NR | TEXT |
| --- | --- |
| 0 | kein EA |
| 1 | EA infolge I_BN |
| 2 | EA infolge D_SoC |
| 3 | nicht definiert |

### _MOTORUDSCODIERUNG_RUHESTROM

| NR | TEXT |
| --- | --- |
| 0 | Ruhestrom kleiner 80mA, keine Aktion des IBS |
| 1 | Ruhestrom = 80...200mA, keine Aktion da Entladung kleiner 1Ah |
| 2 | Ruhestrom = 200...1000mA, keine Aktion da Entladung kleiner 1Ah |
| 3 | Ruhestrom groesser 1000mA, keine Aktion da Entladung kleiner 1Ah |
| 4 | Ruhestrom kleiner 80mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 5 | Ruhestrom = 80...200mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 6 | Ruhestrom = 200...1000mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 7 | Ruhestrom groesser 1000mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 8 | Ruhestrom kleiner 80mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 9 | Ruhestrom = 80...200mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 16 | Ruhestrom = 200...1000mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 17 | Ruhestrom groesser 1000mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 18 | Ruhestrom kleiner 80mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 19 | Ruhestrom = 80...200mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 20 | Ruhestrom = 200...1000mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 21 | Ruhestrom groesser 1000mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |

### TAB_OFFSET

| LABEL | OTEXT | LID | REQUEST |
| --- | --- | --- | --- |
| AGRO | Offset AGR | 0x57 | 3101F057000000000000 |
| DRAO | Offset Drallklappe | 0x56 | 3101F05600000000000000000000 |
| NDAGRO | Offset ND-AGR | 0x60 | 3101F06000000000000000000000 |
| -- | -- | 0x00 | 0x00 |

### AGRKUEHLERUEBERWACHUNGTAB

| ARG | DATENTYP | L/H | EINHEIT | MUL | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- |
| ABGLEICH_VERSTELLEN_WERT1 | real | - | - | 8192.00 | 0.000000 | ASMod_facEGRLPClgHiRef_mp |
| ABGLEICH_VERSTELLEN_WERT2 | real | - | - | 8192.00 | 0.000000 | ASMod_facEGRLPClgLoRef_mp |
| ABGLEICH_VERSTELLEN_WERT3 | real | - | - | 8192.00 | 0.000000 | ASMod_facEGRLPClgHi_mp |
| ABGLEICH_VERSTELLEN_WERT4 | real | - | - | 8192.00 | 0.000000 | ASMod_facEGRLPClgLo_mp |

### DATENRETTUNG

| LABEL | TEXT | LID | BYTES | CO-SHORT | CO-LONG |
| --- | --- | --- | --- | --- | --- |
| IMAALLE | IMA alle Injektoren | 0x5F90 | 48 | - | 04 |
| AGR | Abgasrückfuehrung | 0x5FC2 | 2 | 03 | 04 |
| LLA | Leerlaufdrehzahl | 0x5FF0 | 2 | 03 | 04 |
| MENDRIFT | Mengendriftkompensation | 0x5FA6 | 4 | 03 | 04 |
| CSMENDRIFT | Checksum Mengendriftkompensation | 0x5FA7 | 1 | 03 | 04 |
| STA | Startmoment | 0x5FC0 | 2 | 03 | 04 |
| VER | Verbrauchskennlinie | 0x5FC1 | 2 | 03 | 04 |
| HFMLAST | HFM-Lastabgleich | 0x5FC6 | 2 | 03 | 04 |
| HFMLL | HFM Leerlaufabgleich | 0x5FC5 | 2 | 03 | 04 |
| NMKEEP | NMK EEPROM Werte | 0x5FB1 | 46 | - | 04 |
| AGRRAT | AGR-Ratenregelung | 0x5FBA | 2 | 03 | 04 |
| CSFREGAGRRAT | AGR-Ratenregelung während Regeneration | 0x5FBB | 2 | 03 | 04 |
| HDAGR | Gelernte Korrekturfaktoren HD-AGR-Kühlerüberwachung | 0x5F5C | 8 | - | 04 |
| CSF | Partikelfilterwerte | 0x5FB4 | 96 | - | 04 |

### RESULTNAMEN

| LABEL | RES_AUFTRAG | RES_ANTWORT | RES_AUFTRAG_2 | RES_ANTWORT_2 |
| --- | --- | --- | --- | --- |
| IMAALLE | _REQUEST_IMAALLE | _RESPONSE_IMAALLE | _REQUEST_2_IMAALLE | _RESPONSE_2_IMAALLE |
| AGR | _REQUEST_AGR | _RESPONSE_AGR | _REQUEST_2_AGR | _RESPONSE_2_AGR |
| LLA | _REQUEST_LLA | _RESPONSE_LLA | _REQUEST_2_LLA | _RESPONSE_2_LLA |
| MENDRIFT | _REQUEST_MENDRIFT | _RESPONSE_MENDRIFT | _REQUEST_2_MENDRIFT | _RESPONSE_2_MENDRIFT |
| CSMENDRIFT | _REQUEST_CSMENDRIFT | _RESPONSE_CSMENDRIFT | _REQUEST_2_CSMENDRIFT | _RESPONSE_2_CSMENDRIFT |
| STA | _REQUEST_STA | _RESPONSE_STA | _REQUEST_2_STA | _RESPONSE_2_STA |
| VER | _REQUEST_VER | _RESPONSE_VER | _REQUEST_2_VER | _RESPONSE_2_VER |
| CSMEN48 | _REQUEST_CSMEN48 | _RESPONSE_CSMEN48 | _REQUEST_2_CSMEN48 | _RESPONSE_2_CSMEN48 |
| HFMLAST | _REQUEST_HFMLAST | _RESPONSE_HFMLAST | _REQUEST_2_HFMLAST | _RESPONSE_2_HFMLAST |
| HFMLL | _REQUEST_HFMLL | _RESPONSE_HFMLL | _REQUEST_2_HFMLL | _RESPONSE_2_HFMLL |
| MEN48 | _REQUEST_MEN48 | _RESPONSE_MEN48 | _REQUEST_2_MEN48 | _RESPONSE_2_MEN48 |
| CSF | _REQUEST_CSF | _RESPONSE_CSF | _REQUEST_2_CSF | _RESPONSE_2_CSF |
| CSFDRUCKSENS | _REQUEST_CSFDRUCKSENS | _RESPONSE_CSFDRUCKSENS | _REQUEST_2_CSFDRUCKSENS | _RESPONSE_2_CSFDRUCKSENS |
| CSFREGAGR | _REQUEST_CSFREGAGR | _RESPONSE_CSFREGAGR | _REQUEST_2_CSFREGAGR | _RESPONSE_2_CSFREGAGR |
| NMKEEP | _REQUEST_NMKEEP | _RESPONSE_NMKEEP | _REQUEST_2_NMKEEP | _RESPONSE_2_NMKEEP |
| AGRRAT | _REQUEST_AGRRAT | _RESPONSE_AGRRAT | _REQUEST_2_AGRRAT | _RESPONSE_2_AGRRAT |
| CSFREGAGRRAT | _REQUEST_CSFREGAGRRAT | _RESPONSE_CSFREGAGRRAT | _REQUEST_2_CSFREGAGRRAT | _RESPONSE_2_CSFREGAGRRAT |
| GESMEN | _REQUEST_GESMEN | _RESPONSE_GESMEN | _REQUEST_2_GESMEN | _RESPONSE_2_GESMEN |
| HDAGR | _REQUEST_HDAGR | _RESPONSE_HDAGR | _REQUEST_2_HDAGR | _RESPONSE_2_HDAGR |
| LASTKOLL | _REQUEST_LASTKOLL | _RESPONSE_LASTKOLL | _REQUEST_2_LASTKOLL | _RESPONSE_2_LASTKOLL |
| LASTZEIT | _REQUEST_LASTZEIT | _RESPONSE_LASTZEIT | _REQUEST_2_LASTZEIT | _RESPONSE_2_LASTZEIT |

### _MSD85UDS_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### DIG_MFL

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_MFLAUS | 4EB90102 | CrCUI_stBtn | STAT_MFLAUS_WERT | 4 | 0x01 | 0x01 | MFL Bedienteil Taste AUS | betätigt | nicht betätigt |
| S_MFLCNCL | 4EB90102 | CrCUI_stBtn | STAT_MFLCNCL_WERT | 4 | 0x02 | 0x02 | MFL Bedienteil Taste Abbruch | betätigt | nicht betätigt |
| S_MFLSET | 4EB90102 | CrCUI_stBtn | STAT_MFLSET_WERT | 4 | 0x04 | 0x04 | MFL Bedienteil Taste Set | betätigt | nicht betätigt |
| S_MFLEINP | 4EB90102 | CrCUI_stBtn | STAT_MFLEINP_WERT | 4 | 0x08 | 0x08 | MFL Bedienteil Taste + | betätigt | nicht betätigt |
| S_MFLEINM | 4EB90102 | CrCUI_stBtn | STAT_MFLEINM_WERT | 4 | 0x10 | 0x10 | MFL Bedienteil Taste - | betätigt | nicht betätigt |
| S_MFLACCL | 4EB90102 | CrCUI_stBtn | STAT_MFLACCL_WERT | 4 | 0x20 | 0x20 | MFL Bedienteil Taste Beschleunigung | betätigt | nicht betätigt |
| S_MFLDECL | 4EB90102 | CrCUI_stBtn | STAT_MFLDECL_WERT | 4 | 0x40 | 0x40 | MFL Bedienteil Taste Verzögerung | betätigt | nicht betätigt |
| S_MFLWA | 4EB90102 | CrCUI_stBtn | STAT_MFLWA_WERT | 4 | 0x80 | 0x80 | MFL Bedienteil Taste Wiederaufnahme | betätigt | nicht betätigt |

### DIG_FGR_AUS

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_RFGR_BTNCNCL | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_BTNCNCL_WERT | 6 | 0x01 | 0x01 | Cancel - Taste betätigt  (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_BRK | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_BRK_WERT | 6 | 0x02 | 0x02 | Bremse betätigt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_PRKBRK | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_PRKBRK_WERT | 6 | 0x04 | 0x04 | Feststellbremse betätigt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_LOSPD | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_LOSPD_WERT | 6 | 0x08 | 0x08 | Geschwindigkeit unter Limit (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_HISPD | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_HISPD_WERT | 6 | 0x10 | 0x10 | Geschwindigkeit über Limit (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_CLTH | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_CLTH_WERT | 6 | 0x20 | 0x20 | Kupplung betätigt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_INVLDGEAR | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_INVLDGEAR_WERT | 6 | 0x40 | 0x40 | Unerlaubter Gang (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_DSCDEF | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_DSCDEF_WERT | 6 | 0x80 | 0x80 | DSC defekt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_DSCINTV | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_DSCINTV_WERT | 5 | 0x01 | 0x01 | DSC - Eingriff (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_HDC | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_HDC_WERT | 5 | 0x02 | 0x02 | HDC aktiv (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_USRIRV | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_USRIRV_WERT | 5 | 0x04 | 0x04 | Reversibler Bedienfehler (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_USRIIRV | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_USRIIRV_WERT | 5 | 0x08 | 0x08 | Irreversibler Bedienfehler (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_ENGST | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_ENGST_WERT | 5 | 0x10 | 0x10 | Falscher Motorzustand oder DDE-Fehler (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_KOMBI | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_KOMBI_WERT | 5 | 0x20 | 0x20 | Falsch codiertes Kombi-Instrument (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_ASC | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_ASC_WERT | 5 | 0x40 | 0x40 | ASC - Eingriff (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_MOFDRAS | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_MOFDRAS_WERT | 4 | 0x02 | 0x02 | Abschaltung durch Ebene2 - Momentenüberwachung  (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_CAN | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_CAN_WERT | 4 | 0x10 | 0x10 | Fehler in CAN-Empfangsbotschaften (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_IPMNOUI | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_IPMNOUI_WERT | 4 | 0x40 | 0x40 | IPM detektiert oder kein Bedienteil erkannt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_DVTNV2N | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_DVTNV2N_WERT | 4 | 0x80 | 0x80 | Abweichung des v/n-Verhältnis zu groß (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_T15 | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_DVTNV2N_WERT | 3 | 0x01 | 0x01 | Klemme 15 (T15_st) ist aus (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| S_RFGR_ECU | 4EB20104 | CrCtl_stShOffConRvActv_mp | STAT_RFGR_DVTNV2N_WERT | 3 | 0x02 | 0x02 | Fehler in DDE (Reversible Abschaltbdg) | aktiv | nicht aktiv |

### DIG_KWH_AUS

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_PTC_ABAKT | 42200102 | WaHt_stShutOff_mp | STAT_PTC_ABAKT_WERT | 4 | 0x01 | 0x01 | Abschaltbedingung | aktiv | nicht aktiv |
| S_PTC_STURZ | 42200102 | WaHt_stShutOff_mp | STAT_PTC_STURZ_WERT | 4 | 0x02 | 0x02 | Sturzgas | aktiv | nicht aktiv |
| S_PTC_SENSDEF | 42200102 | WaHt_stShutOff_mp | STAT_PTC_SENSDEF_WERT | 4 | 0x04 | 0x04 | WTF, LTF, Endstufe defekt | aktiv | nicht aktiv |
| S_PTC_START | 42200102 | WaHt_stShutOff_mp | STAT_PTC_START_WERT | 4 | 0x08 | 0x08 | Startverzoegerung | aktiv | nicht aktiv |
| S_PTC_ANF | 42200102 | WaHt_stShutOff_mp | STAT_PTC_ANF_WERT | 4 | 0x10 | 0x10 | Anfahren | aktiv | nicht aktiv |
| S_PTC_N | 42200102 | WaHt_stShutOff_mp | STAT_PTC_N_WERT | 4 | 0x20 | 0x20 | Motordrehzahl zu niedrig | aktiv | nicht aktiv |
| S_PTC_VMIN | 42200102 | WaHt_stShutOff_mp | STAT_PTC_VMIN_WERT | 4 | 0x40 | 0x40 | Geschwindigkeit zu niedrig | aktiv | nicht aktiv |
| S_PTC_TRQ | 42200102 | WaHt_stShutOff_mp | STAT_PTC_TRQ_WERT | 4 | 0x80 | 0x80 | Drehmomentüberwachung | aktiv | nicht aktiv |

### DIG_AGR_AUS

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_AGR_UKN | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_UKN_WERT | 6 | 0x01 | 0x01 | Normalbetrieb | aktiv | nicht aktiv |
| S_AGR_SUB | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_SUB_WERT | 6 | 0x02 | 0x02 | Schubbetrieb | aktiv | nicht aktiv |
| S_AGR_SAL | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_SAL_WERT | 6 | 0x04 | 0x04 | Schaltvorgang | aktiv | nicht aktiv |
| S_AGR_LL | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_LL_WERT | 6 | 0x08 | 0x08 | langer Leerlauf | aktiv | nicht aktiv |
| S_AGR_RA | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_RA_WERT | 6 | 0x10 | 0x10 | bleibende Regelabweichung | aktiv | nicht aktiv |
| S_AGR_DRFTKOMP | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_DRFTKOMP_WERT | 6 | 0x20 | 0x20 | Anforderung der Driftkompensation | aktiv | nicht aktiv |
| S_AGR_SYS | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_SYS_WERT | 6 | 0x40 | 0x40 | Systemfehler | aktiv | nicht aktiv |
| S_AGR_ERRAGR | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_ERRAGR_WERT | 6 | 0x80 | 0x80 | Fehler AGR-Ventil | aktiv | nicht aktiv |
| S_AGR_ERRDRO | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_ERRDRO_WERT | 5 | 0x01 | 0x01 | Fehler Drosselklappe | aktiv | nicht aktiv |
| S_AGR_STEL | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_STEL_WERT | 5 | 0x02 | 0x02 | Eingeschränkte Stellerfunktionalität | aktiv | nicht aktiv |
| S_AGR_PUMGMIN | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_PUMGMIN_WERT | 5 | 0x04 | 0x04 | zu niedriger Atmosphärendruck | aktiv | nicht aktiv |
| S_AGR_UBATTMIN | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_UBATTMIN_WERT | 5 | 0x08 | 0x08 | zu niedrige Batteriespannung | aktiv | nicht aktiv |
| S_AGR_ABSCHKOORD | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_ABSCHKOORD_WERT | 5 | 0x10 | 0x10 | Abschaltkoordinator | aktiv | nicht aktiv |
| S_AGR_TUMGMIN | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_TUMGMIN_WERT | 5 | 0x20 | 0x20 | zu niedrige Umgebungstemperatur | aktiv | nicht aktiv |
| S_AGR_TUMGMAX | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_TUMGMAX_WERT | 5 | 0x40 | 0x40 | zu hohe Umgebungstemperatur | aktiv | nicht aktiv |
| S_AGR_TMOTMIN | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_TMOTMIN_WERT | 5 | 0x80 | 0x80 | zu niedrige Motortemperatur | aktiv | nicht aktiv |
| S_AGR_TMOTMAX | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_TMOTMAX_WERT | 4 | 0x01 | 0x01 | zu hohe Motortemperatur | aktiv | nicht aktiv |
| S_AGR_KALT | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_KALT_WERT | 4 | 0x02 | 0x02 | Kaltstart | aktiv | nicht aktiv |
| S_AGR_QINJMAX | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_QINJMAX_WERT | 4 | 0x04 | 0x04 | zu große Einspritzmenge | aktiv | nicht aktiv |
| S_AGR_BETRIEB | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_BETRIEB_WERT | 4 | 0x08 | 0x08 | Betriebskoordinator | aktiv | nicht aktiv |
| S_AGR_DREMOMAX | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_DREMOMAX_WERT | 4 | 0x10 | 0x10 | zu großes inneres Drehmoment | aktiv | nicht aktiv |
| S_AGR_EXTSTEL | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_EXTSTEL_WERT | 4 | 0x20 | 0x20 | externer Stellereingriff | aktiv | nicht aktiv |
| S_AGR_ASRG | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_ASRG_WERT | 3 | 0x04 | 0x04 | AntiSurge | aktiv | nicht aktiv |
| S_AGR_SPGEF | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_SPGEF_WERT | 3 | 0x08 | 0x08 | zu hohe Spülgefälle | aktiv | nicht aktiv |
| S_AGR_OVRUN | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_OVRUN_WERT | 3 | 0x10 | 0x10 | OverRun und Temp_SCR | aktiv | nicht aktiv |
| S_AGR_DEAK | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_DEAK_WERT | 3 | 0x20 | 0x20 | AGR - Regler inaktiv | aktiv | nicht aktiv |
| S_AGR_OEL | 48740104 | AirCtl_stAirCtlBits | STAT_AGR_OEL_WERT | 3 | 0x40 | 0x40 | Motorabschaltung bei Ölansaugung | aktiv | nicht aktiv |

### DIG_ALLG

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_BRL | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | Brk_st | STAT_BLS_EIN | 3 | 0x01 | 0x01 | Eingang Bremslichtschalter | Pedal betätigt (Ubatt) | Pedal nicht betätigt (Masse) |
| S_BRT | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | MoFBrk_st | STAT_BLTS_EIN | 4 | 0x01 | 0x01 | Eingang Bremslichttestschalter | Pedal betätigt (Ubatt) | Pedal nicht betätigt (Masse) |
| S_KUP | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | Clth_st | STAT_KUP_EIN | 5 | 0x01 | 0x01 | Eingang Kupplungsschalter | Pedal betätigt (Ubatt) | Pedal nicht betätigt (Masse) |
| S_MFLEINP | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | CrCUI_stBtn | STAT_MFLEINP_EIN | 6 | 0x08 | 0x08 | MFL Bedienteil Taste + | betätigt | nicht betätigt |
| S_MFLEINM | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | CrCUI_stBtn | STAT_MFLEINM_EIN | 6 | 0x10 | 0x10 | MFL Bedienteil Taste - | betätigt | nicht betätigt |
| S_MFLWA | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | CrCUI_stBtn | STAT_MFLWA_EIN | 6 | 0x80 | 0x80 | MFL Bedienteil Taste Wiederaufnahme | betätigt | nicht betätigt |
| S_MFLAUS | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | CrCUI_stBtn | STAT_MFLAUS_EIN | 6 | 0x01 | 0x01 | MFL Bedienteil Taste AUS | betätigt | nicht betätigt |
| S_AC | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | ACCtl_stOut | STAT_AC_EIN | 8 | 0x01 | 0x01 | Schalter Klimabereitschaft AC | betätigt | nicht betätigt |
| S_EGS | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | PT_stTraType | STAT_GETRIEBEART_HAND_EIN | 9 | 0x01 | 0x01 | Getriebe | Automatik | Handschalter |
| S_ODS | 513F0101514001014FDE01014EB90102489A01014ACC01014B610101 | OilPLmp_st | STAT_ODS_EIN | 10 | 0x01 | 0x01 | Eingang Öldruckschalter | Öldruck zu niedrig (Masse) | Öldruck io (Ubatt) |

### DIG_READINESS

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_STATCATALYST | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATCATALYST_WERT | 6 | 0x01 | 0x01 | Status Catalyst Monitoring | not ready | ready |
| S_STATOXYHEAT | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATOXYHEAT_WERT | 6 | 0x02 | 0x02 | Status heated Oxygen Catalyst Monitoring | not ready | ready |
| S_STATEVAPSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATEVAPSYS_WERT | 6 | 0x04 | 0x04 | Status Evaporative System Monitoring | not ready | ready |
| S_STATSECAIRSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATSECAIRSYS_WERT | 6 | 0x08 | 0x08 | Status secondary Airsystem Monitoring | not ready | ready |
| S_STATACSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATACSYS_WERT | 6 | 0x10 | 0x10 | Status A/C system refrigerant Monitoring | not ready | ready |
| S_STATOXYSENS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATOXYSENS_WERT | 6 | 0x20 | 0x20 | Status Oxygen sensor Monitoring | not ready | ready |
| S_STATOXYSENSHTG | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATOXYSENSHTG_WERT | 6 | 0x40 | 0x40 | Status Oxygen sensor heater Monitoring | not ready | ready |
| S_STATEGRSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATEGRSYS_WERT | 6 | 0x80 | 0x80 | Status EGR system Monitoring | not ready | ready |
| S_SUPCATALYST | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPCATALYST_WERT | 5 | 0x01 | 0x01 | Catalyst Monitoring | supported | not supported |
| S_SUPOXYHEAT | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPOXYHEAT_WERT | 5 | 0x02 | 0x02 | Heated Oxygen Catalyst Monitoring | supported | not supported |
| S_SUPEVAPSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPEVAPSYS_WERT | 5 | 0x04 | 0x04 | Evaporative System Monitoring | supported | not supported |
| S_UPSECAIRSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPSECAIRSYS_WERT | 5 | 0x08 | 0x08 | Secondary Airsystem Monitoring | supported | not supported |
| S_SUPACSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPACSYS_WERT | 5 | 0x10 | 0x10 | A/C system refrigerant Monitoring | supported | not supported |
| S_SUPOXYSENS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPOXYSENS_WERT | 5 | 0x20 | 0x20 | Oxygen sensor Monitoring | supported | not supported |
| S_SUPOXYSENSHTG | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPOXYSENSHTG_WERT | 5 | 0x40 | 0x40 | Oxygen sensor heater Monitoring | supported | not supported |
| S_SUPEGRSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPEGRSYS_WERT | 5 | 0x80 | 0x80 | EGR system Monitoring | supported | not supported |
| S_SUPMISFIRE | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPMISFIRE_WERT | 4 | 0x01 | 0x01 | Misfire Monitoring | supported | not supported |
| S_SUPFUELSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPFUELSYS_WERT | 4 | 0x02 | 0x02 | Fuel System Monitoring | supported | not supported |
| S_SUPCOMPRCOMP | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_SUPCOMPRCOMP_WERT | 4 | 0x04 | 0x04 | Comprehensive components Monitoring | supported | not supported |
| S_STATMISFIRE | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATMISFIRE_WERT | 4 | 0x10 | 0x10 | Status Misfire Monitoring | not ready | ready |
| S_STATFUELSYS | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATFUELSYS_WERT | 4 | 0x20 | 0x20 | Status Fuel System Monitoring | not ready | ready |
| S_STATCOMPRCOMP | 52010104 | OBD_PID01_DSMRdy_xPId1 | STAT_STATCOMPRCOMP_WERT | 4 | 0x40 | 0x40 | Status Comprehensive components Monitoring | not ready | ready |

### DIG_DDE_KOMBI

| NAME | TELEGRAMM | TELNAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S_CRLAMP | 4EB9010250D8010150D9010156D301014B61010146B40101 | CrCUI_stBtn | STAT_CRLAMP_EIN | 4 | 0x01 | 0x01 | Zustand Tempomat-Lampe | aktiv | nicht aktiv |
| S_MILLAMP | 4EB9010250D8010150D9010156D301014B61010146B40101 | ErrLmp_stMILReq | STAT_MILLAMP_EIN | 5 | 0x01 | 0x01 | Zustand MIL-Lampe | aktiv | nicht aktiv |
| S_SYSLAMP | 4EB9010250D8010150D9010156D301014B61010146B40101 | ErrLmp_stSVSReq | STAT_SYSLAMP_EIN | 6 | 0x01 | 0x01 | Zustand System-Lampe | aktiv | nicht aktiv |
| S_GLWLAMP | 4EB9010250D8010150D9010156D301014B61010146B40101 | GlwLmp_st | STAT_GLWLAMP_EIN | 7 | 0x01 | 0x01 | Zustand Glüh-Lampe | aktiv | nicht aktiv |
| S_OILLAMP | 4EB9010250D8010150D9010156D301014B61010146B40101 | OilPLmp_st | STAT_OILLAMP_EIN | 8 | 0x01 | 0x01 | Zustand Öl-Lampe | aktiv | nicht aktiv |
| S_PARKLAMP | 4EB9010250D8010150D9010156D301014B61010146B40101 | Com_stLmpPrkBrk | STAT_PARKLAMP_EIN | 9 | 0x01 | 0x01 | Zustand Park-Lampe | aktiv | nicht aktiv |

### CODIERWERTE

| LABEL | TEXT | POS | BYTES | FACT_A | FACT_B | UNIT | RESULTNAME | ZEITLIMIT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIL | MIL - Malfunction Indicator Lamp | 4 | 1 | 1,0 | 0,0 | - | STAT_COD_MIL | JA |
| MKUP | Kupplungsmoment | 5 | 1 | 1,0 | 0,0 | - | STAT_COD_MKUP | JA |
| INM | Inneres Moment | 6 | 1 | 1,0 | 0,0 | - | STAT_COD_INM | JA |
| VMAX | VMax - Höchstgeschwindigkeitsbegrenzung | 7 | 1 | 1,0 | 0,0 | - | STAT_COD_VMAX | JA |
| OEL | ÖWI - Ölwartungsintervall (Länderfaktor) | 4 | 2 | 1,0 | 0,0 | - | STAT_COD_OEL | NEIN |
| IGR | IGR - Intelligente Generatorregelung | 6 | 1 | 1,0 | 0,0 | - | STAT_COD_IGR | NEIN |
| SPA | SPA - Schaltpunktanzeige | 7 | 1 | 1,0 | 0,0 | - | STAT_COD_SPA | NEIN |
| MSA | MSA - Motor-Start-Stop-Automatik | 8 | 1 | 1,0 | 0,0 | - | STAT_COD_MSA | NEIN |
| - | - | - | - | - | - | - | - | - |

### _MSD87_6_TABLE_STATUS_LETZTER_BATTERIEWECHSEL

| NR | TEXT |
| --- | --- |
| 0 | Wasserverbrauch i.O. |
| 1 | Wasserverbrauch n.i.O. |

### _MSD87_6_TABLE_STATUS_BATTERIEZUSTAND

| NR | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie pruefen |
| 2 | Batterie nicht i.O. |
| 3 | ungueltig |

### _MSD87_6_TABLE_STATUS_WASSERVERLUST

| NR | TEXT |
| --- | --- |
| 0 | Wasserverbrauch i.O. |
| 1 | Wasserverbrauch nicht i.O. |

### _MSD87_6_TABLE_STATUS_TIEFENTLADEN

| NR | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie tiefentladen |

### _MSD87_6_TABLE_STATUS_IBS_BZE

| NR | TEXT |
| --- | --- |
| 0 | keine BZE3 |
| 1 | BZE3 |
