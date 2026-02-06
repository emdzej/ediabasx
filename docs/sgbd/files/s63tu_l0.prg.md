# s63tu_l0.prg

## General

|  |  |
| --- | --- |
| File | s63tu_l0.prg |
| Type | PRG |
| Jobs | 279 |
| Tables | 127 |
| Origin | BMW EA-360 Lorch |
| Revision | 11.001 |
| Author | BMW EA-360 Lorch, P-+-Z-ENGINEERING-GMBH EA-360 Berger, P-+-Z-E |
| ECU Comment | SGBD für MEVD1728 C-Muster zur SW 8BC28BEB |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MEVD1728 für S63TÜ Slave-Steuergerät |  |  |
| ORIGIN | string | BMW EA-360 Lorch |  |  |
| REVISION | string | 11.001 |  |  |
| AUTHOR | string | BMW EA-360 Lorch, P-+-Z-ENGINEERING-GMBH EA-360 Berger, P-+-Z-E |  |  |
| COMMENT | string | SGBD für MEVD1728 C-Muster zur SW 8BC28BEB |  |  |
| PACKAGE | string | 1.62 |  |  |
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

### _SWE_LESEN

0x31010205 SWE_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SWE_EINHEIT | string | auszulesender SWE Satz Eingabe von 0 bis 4 |

### SWE_KOMPLETT_LESEN

0x31010205 SWE_KOMPLETT_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

_No arguments._

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### _STATUS_KLANN

0x3101F0E4 & 0x3103F0E4 _STATUS_KLANN Ansteuern und Auslesen Klann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### ABGLEICHWERTE_LESEN

0x225F90 ABGLEICHWERTE_LESEN Abgleichwerte Injektoren auslesen für CASCADE für Vergleich mit Daten aus COD-Datei Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### ABGLEICHWERTE_SCHREIBEN

0x2E5F90 ABGLEICHWERTE_SCHREIBEN Abgleichwerte Injektoren programmieren für CASCADE mit Übernahme Daten aus COD-Datei Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 es können 40 Messwerte in einem Block zusammengefasst werden

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_TRIPRCRD_LZQ_01

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) -Eventdaten 01 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_01 (0x22 4108)

_No arguments._

### STATUS_TRIPRCRD_LZQ_05

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 05 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_05 (0x22 410C)

_No arguments._

### STATUS_TRIPRCRD_LZQ_04

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 04 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_04 (0x22 410B)

_No arguments._

### STATUS_TRIPRCRD_LZQ_03

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 03 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_03 (0x22 410A)

_No arguments._

### STATUS_TRIPRCRD_LZQ_02

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 02 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_02 (0x22 4109)

_No arguments._

### STATUS_TRIPRCRD_LZQ_09

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 09 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_09 (0x22 4110)

_No arguments._

### STATUS_TRIPRCRD_LZQ_08

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 08 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_08 (0x22 410F)

_No arguments._

### STATUS_TRIPRCRD_LZQ_07

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 07 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_07 (0x22 410E)

_No arguments._

### STATUS_TRIPRCRD_LZQ_06

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 06 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_06 (0x22 410D)

_No arguments._

### OBD_RADAR_UW_DATEN

0x3101F0FA OBD_RADAR_UW_DATEN Auslesen der Umweltdaten für die beim OBD Radar abgeseicherten Blöcke Aktivierung: Klemme 15 = EIN

| Name | Type | Description |
| --- | --- | --- |
| UW_BLOCK_ID | int | Block Nummer des auszulesenden Datensets min:0 max:9 |

### STATUS_TRIPRCRD_LZQ_10

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 10 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_10 (0x22 4111)

_No arguments._

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n (4095) |

### STEUERN_TRIPRCRDRESET_LZQ

TripRecorder: Löschen des LZQ-Datenspeichers. Beim Ausführen dieses Jobs: GlbDa_bTRReqIniFlshLtq_u8=TRUE. Die Löschung der LZQ-Speichersektoren erfolgt im Shutdown. STEUERN_TRIPRCRDRESET_LZQ (0x2E 5FE0)

_No arguments._

### STATUS_TRIPRCRDKONF_LZQ

TripRecorder: Konfiguration, Statuswerte und Errorwerte der Langzeitqualitaet (LZQ)-Größen und des LZQ Triggers auslesen. STATUS_TRIPRCRDKONF_LZQ (0x22 4107)

_No arguments._

### STATUS_CODIERUNG_OEL

0x223320 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

### OBD_RADAR_UW_DATEN_SET

0x3101F0FA OBD_RADAR_UW_DATEN_SET Auslesen der Umweltdaten für die beim OBD Radar abgeseicherten Blöcke im gesamten als Sets in desem Job werden aktuell 10 Blöcke abgefragt, eine Verkleinerung/ Vergrößerung bearf einer SW Anpassung Aktivierung: Klemme 15 = EIN

_No arguments._

### STATUS_FREISCHALTUNG

TPROT Zertifikat lesen STATUS Freischaltung (0x22 FD03)

_No arguments._

### STATUS_FREISCHALTUNG_SWT

Status der Freischaltung für Vmax und Pmax lesen STATUS Freischaltung SWT (0x31010F1F) Achtung: es werden mehrere Saetze von Results angelegt, für jede Freischaltung ein eigener Satz

_No arguments._

### _STATUS_EISYGD

0x3101F0E1 & 0x3103F0E1 _STATUS_EISYGD Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_KRANN

0x3101F0E3 & 0x3103F0E3 _STATUS_KRANN Ansteuern und Auslesen Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STATUS_EWS4_SK

Lesen des SecretKey des Server sowie Client für EWS4 UDS   : $22   ReadDataByIdentifier UDS   : $C002 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### _STATUS_EISYUGD

0x3101F0E0 & 0x3103F0E0 _STATUS_EISYUGD Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STEUERN_DIODOR_LZQ_AUSG

TripRecorder: Setzen der Ausleseart für DIODOR und LZQ. Geschrieben wird auf GlbDa_xTRRdMdSel_C siehe Spezial-Include: UDS_22_2E_TRIP_LZQ.b2s DIODOR_LZQ_AUSG (0x2E 5FE1)

| Name | Type | Description |
| --- | --- | --- |
| SW_AUSL_MODE | unsigned char | Schreiben der Größe für den Auslesemodus für DIODOR und LZQ 0 = Optimiert 1 = Vollstaendig Min: 0.0 Max: 255.0 a2l-Name: GlbDa_xTRRdMdSel_C |

### STATUS_MESSWERTE

Messwerte auslesen MESSWERTE (0x22 4000)

_No arguments._

### STATUS_DFMONITOR

Batterieladezustand auslesen DFMONITOR (0x22 4001)

_No arguments._

### STATUS_DIGITAL_1

Status Schaltzustaende 1 DIGITAL_1 (0x22 4002)

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

Nockenwellenadationswerte auslesen NOCKENWELLE_ADAPTION (0x22 4006)

_No arguments._

### STATUS_DIGITAL_0

Status Schaltzustaende 0 DIGITAL_0 (0x22 4007)

_No arguments._

### STATUS_ADAPTION_DK

Drosselklappenadaptionswerte auslesen ADAPTION_DK (0x22 4008)

_No arguments._

### STATUS_ADAPTION_GEMISCH

Gemischadaptionswerte auslesen ADAPTION_GEMISCH (0x22 400A)

_No arguments._

### STATUS_MESSWERTE_VVT

VVT Messwerte auslesen MESSWERTE_VVT (0x22 400B)

_No arguments._

### FASTA10

FASTA-Messwertblock 10 lesen FASTA10 (0x22 4015)

_No arguments._

### STATUS_DMEREF

BMW/Zulieferer Programmstands-Bezeichnung auslesen. DMEREF (0x22 401F)

_No arguments._

### STATUS_MESSWERTE_EWAP

elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Messwerte auslesen MESSWERTE_EWAP (0x22 4024)

_No arguments._

### STATUS_MESSWERTE_VAD

Variantenadaptionen auslesen MESSWERTE_VAD (0x22 4025)

_No arguments._

### STATUS_RBMMODE9

Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) RBMMODE9 (0x22 4026)

_No arguments._

### STATUS_RBMME1

Rate Based Monitoring Motorsteuerung ME... Block 1 auslesen (Vorhalt) RBMME1 (0x22 4029)

_No arguments._

### STATUS_RBMME2

Rate Based Monitoring Motorsteuerung ME... Block 2 auslesen (Vorhalt) RBMME2 (0x22 402A)

_No arguments._

### STATUS_MESSWERTE_LRP

Messwerte Laufruhepruefung auslesen MESSWERTE_LRP (0x22 402D)

_No arguments._

### STATUS_CALCVN

Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. CALCVN (0x22 403C)

_No arguments._

### STATUS_CYBL_HOM

Injektor Adaptionswerte lesen CYBL_HOM (FASTA GROESSEN) CYBL_HOM (0x22 403D)

_No arguments._

### STATUS_INJAD

Injektor Adaptionswerte lesen INJAD (Kleinstmengen-Adaption RB-Umfaenge) INJAD (0x22 403F)

_No arguments._

### STATUS_ATLDIAG

Turboladerstatus auslesen ATLDIAG (0x22 4044)

_No arguments._

### STATUS_KLANNADAP

KLANN Adaptionen auslesen KLANNADAP (0x22 4046)

_No arguments._

### STATUS_TYPPRUEFNR

Typpruefnummer fuer BN2020 SGs auslesen TYPPRUEFNR (0x22 4047)

_No arguments._

### STATUS_INTEGRITAETDME

Integritaet DME und Codierzaehler Leistungsklasse, Vmax und maximale V_VEH INTEGRITAETDME (0x22 4048)

_No arguments._

### STATUS_ZDKSHDP

Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) auslesen. ZDKSHDP (0x22 404C)

_No arguments._

### STATUS_EWPVRS

Variante der el. Hauptwasserpumpe lesen. EWPVRS (0x22 404D)

_No arguments._

### STATUS_TRIPRCRD0

Auslesen des allgemeinen Zustands des Pannendatenspeichers. TRIPRCRD0 (0x22 4068)

_No arguments._

### STATUS_TRIPRCRD01

Auslesen von Eventdaten 01 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD01 (0x22 4069)

_No arguments._

### STATUS_TRIPRCRD02

Auslesen von Eventdaten 02 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD02 (0x22 406A)

_No arguments._

### STATUS_TRIPRCRD03

Auslesen von Eventdaten 03 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD03 (0x22 406B)

_No arguments._

### STATUS_TRIPRCRD04

Auslesen von Eventdaten 04 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD04 (0x22 406C)

_No arguments._

### STATUS_TRIPRCRD05

Auslesen von Eventdaten 05 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD05 (0x22 406D)

_No arguments._

### STATUS_TRIPRCRD06

Auslesen von Eventdaten 06 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD06 (0x22 406E)

_No arguments._

### STATUS_TRIPRCRD07

Auslesen von Eventdaten 07 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD07 (0x22 406F)

_No arguments._

### STATUS_TRIPRCRD08

Auslesen von Eventdaten 08 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD08 (0x22 4070)

_No arguments._

### STATUS_TRIPRCRD09

Auslesen von Eventdaten 09 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD09 (0x22 4071)

_No arguments._

### STATUS_TRIPRCRD10

Auslesen von Eventdaten 10 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD10 (0x22 4072)

_No arguments._

### STATUS_TRIPRCRD11

Auslesen von Eventdaten 11 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD11 (0x22 4073)

_No arguments._

### STATUS_TRIPRCRD12

Auslesen von Eventdaten 12 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD12 (0x22 4074)

_No arguments._

### STATUS_TRIPRCRD13

Auslesen von Eventdaten 13 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD13 (0x22 4075)

_No arguments._

### STATUS_TRIPRCRD14

Auslesen von Eventdaten 14 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD14 (0x22 4076)

_No arguments._

### STATUS_TRIPRCRD15

Auslesen von Eventdaten 15 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD15 (0x22 4077)

_No arguments._

### STATUS_TRIPRCRD16

Auslesen von Eventdaten 16 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD16 (0x22 4078)

_No arguments._

### STATUS_TRIPRCRD17

Auslesen von Eventdaten 17 (Alle Flash-Sektor aus Event-speicherung). TRIPRCRD17 (0x22 4079)

_No arguments._

### STATUS_DRLTEMPVER1

Entwicklung DAROL Statistiken 1 auslesen (Temperaturverteilung Getriebeoel, Temperaturverteilung Getriebeglocke, Kupplungsreibung) DRLTEMPVER1 (0x22 407A)

_No arguments._

### STATUS_DRLGANGWECHSELHFKT

Auslesen Getriebelastkollektiv: Uebertragung Getriebe-Gangwechsel Haeufigkeit. DRLGANGWECHSELHFKT (0x22 407B)

_No arguments._

### STATUS_DRLSTRECKENPROFIL

Auslesen Getriebelastkollektiv: Uebertragung Geschwindigkeitsverteilung und Fahrstrecke (Streckenprofil). DRLSTRECKENPROFIL (0x22 407C)

_No arguments._

### STATUS_DRLTEMPVER2

Entwicklung DAROL Statistiken 2 auslesen (Temperaturverteilung Getriebeoel, Temperaturverteilung Getriebeglocke, Kupplungsreibung) DRLTEMPVER2 (0x22 407D)

_No arguments._

### STATUS_TRIPRCRDKONF

Konfiguration der Groessen und Trigger auslesen. TRIPRCRDKONF (0x22 407E)

_No arguments._

### STATUS_SUPERKLOPFER

Infospeicher Superklopfer auslesen SUPERKLOPFER (0x22 407F)

_No arguments._

### STATUS_CVO1

Auslesen CVO-Adaptionen Teil 1 (Continuous Valve Operation). CVO1 (0x22 408F)

_No arguments._

### STATUS_READINESS

Monitorfunktionen und Readinessflags aus DME auslesen READINESS (0x22 4105)

_No arguments._

### STATUS_SEGELVERH

Auslesung des grossen und kleinen Segelverhinderers. Dieser Job dient jetzt nur fuer Entwicklungszwecke. Wir fuer Kundenzwecke noch erweitert. SEGELVERH (0x22 4106)

_No arguments._

### STATUS_MOTOR_MSTUFE_BETRIEBSZEIT

Statistik der Betriebszeiten in unterschiedlichen Ladelufttemperaturbereichen auslesen. MOTOR_MSTUFE_BETRIEBSZEIT (0x22 4153)

_No arguments._

### STATUS_LADELUFTTEMP_STAT

Betriebsstatistik des Motors ueber Gang und Geschwindigkeit und des Fahrzeugs in MStufen auslesen. LADELUFTTEMP_STAT (0x22 4154)

_No arguments._

### STATUS_OBDRADAR_DIAGKNLINFO

OBD-Radar: Diagnosekanal-Informationen, gueltig fuer alle im OBD-Radar ausgewerteten Diagnosekanaele, auslesen (FASTA). STATUS_OBDRADAR_DIAGNKNLINFO (0x22 4186)

_No arguments._

### STATUS_OBDRADAR_HISTOGRAMM

OBD-Radar: Histogramm-Informationen, gueltig fuer alle im OBD-Radar ausgewerteten Diagnosekanaele, auslesen (FASTA). STATUS_OBDRADAR_HISTOGRAMM (0x22 4187)

_No arguments._

### STATUS_DKATSPOSC

Vermessener Sauerstoffspeicher (OSC) des ueberwachten Katalysatorvolumens, zugehoerige Kilometerstaende und aktueller Katdiagnose-Messwert. DKATSPOSC (0x22 5F73)

_No arguments._

### STATUS_KATHEIZFUNKTION_DEAKTIVIERUNG

Deaktivierung der Katheizfunktionalitaet (1 = aktiv / 0 = inaktiv) lesen. KATHEIZFUNKTION_DEAKTIVIERUNG (0x22 5F74)

_No arguments._

### STATUS_VVTSCHWERGAENGIGKEIT

Anzahl erkannter VVT Lageregelungsfehler, Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible und Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversible (VVT-Schwergaengigkeit) lesen. VVTSCHWERGAENGIGKEIT (0x22 5F7B)

_No arguments._

### STATUS_DISCODBSR

Verriegelung des betriebsstundenrelevanten Kodierbereichs (Auslesen vom Bit: DIS_COD_BSR) DISCODBSR (0x22 5F7E)

_No arguments._

### STATUS_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE auslesen. GVOBD (0x22 5F80)

_No arguments._

### STATUS_GOEPBSZ

Getrierbeoelpumpe Betriebsstundenzaehler auslesen GOEPBSZ (0x22 5F83)

_No arguments._

### STATUS_PM_BACKUP

Auslesen des PM-Backup PM_BACKUP (0x22 5F8B)

_No arguments._

### STATUS_HUBKORR

Hubkorrektur auslesen START-CONDITION: 8B HUBKORR (0x22 5F8C)

_No arguments._

### STATUS_IMAALLE

Abgleichwerte Injektoren auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. IMAALLE (0x22 5F90)

_No arguments._

### ECU_CONFIG

Variante auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. ECU_CONFIG (0x22 5FF2)

_No arguments._

### STEUERN_DKATSPOSC

Vermessener Sauerstoffspeicher (OSC) des ueberwachten Katalysatorvolumens vorgeben. Beim Aufruf dieses Services wird BasSvrAppl_stMeasOSCCat fuer 1 Sekunde auf 1 gesetzt. DKATSPOSC (0x2E 5F73)

_No arguments._

### STEUERN_KATHEIZFUNKTION_DEAKTIVIERUNG

Deaktivierung der Katheizfunktionalitaet (1 = aktiv / 0 = inaktiv) lesen. Nach 50 Km muss die Deaktivierung der Katheizfunktionalitaet zurueckgenommen werden (0=inaktiv). KATHEIZFUNKTION_DEAKTIVIERUNG (0x2E 5F74)

| Name | Type | Description |
| --- | --- | --- |
| SW_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV | unsigned char | Deaktivierung der Katheizfunktionalitaet aktiv / inaktiv. (1=aktiv, 0=inaktiv). Nach 50 Km muss die Deaktivierung der Katheizfunktionalitaet zurueckgenommen werden. Min: 0.0 Max: 1.0 a2l-Name: BasSvrAppl_stDeactvnCatHeatg |

### STEUERN_TRIPRCRDRESET

Testerjob zum Loeschen des Pannendatenspeichers. Beim Ausfuehren dieses Jobs soll folgendes Label gesetzt werden: GlbDa_bTRReqIniFlsh_u8 = TRUE. Fa-a2l-Name: BasSvrAppl_flgTRReqIniFlsh TRIPRCRDRESET (0x2E 5F78)

_No arguments._

### STEUERN_TRIPRCRDTRIGGER

Testerjob zur manuellen Ausloesung eines Trigger-Event fuer Pannendatenspeicher. TRIPRCRDTRIGGER (0x2E 5F79)

| Name | Type | Description |
| --- | --- | --- |
| STAT_TRIPRCRDTRIGGER | unsigned int | Manuelles Ausloesen eines Trigger-Events Min: 0.0 Max: 65535.0 |

### STEUERN_VVTHIGHCURRENT

Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible (VVT-Schwergaengigkeit) vorgeben. Fa-a2l-Name: B_favvtreliability VVTHIGHCURRENT (0x2E 5F7A)

| Name | Type | Description |
| --- | --- | --- |
| SW_LGRF_IREV | real | Min: 0.0 Max: 65535.0 a2l-Name: vvt_highcurrent_count |

### STEUERN_VVTDEVIATION

Anzahl erkannter VVT Lageregelungsfehler vorgeben. VVTDEVIATION (0x2E 5F7B)

| Name | Type | Description |
| --- | --- | --- |
| SW_VVT_LGRF | real | Min: 0.0 Max: 65535.0 a2l-Name: vvt_deviation_count |

### STEUERN_DAROLRESET

Darol Lastkollektivdaten ruecksetzen (FASTA) Fa-a2l-Name: B_drlrstanf DAROLRESET (0x2E 5F7D)

_No arguments._

### STEUERN_DISCODBSR

Verriegelung des betriebsstundenrelevanten Kodierbereichs vorgeben DISCODBSR (0x2E 5F7E)

_No arguments._

### STEUERN_ZDKSHDPRESET

Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) zuruecksetzen. Beim Aufruf dieses Services soll das Bit B_prail_mon_clr gesetzt werden Fa-a2l-Name: B_prailmonclr ZDKSHDPRESET (0x2E 5F7F)

_No arguments._

### STEUERN_PROGRAMM_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE programmieren. STEUERN_PROGRAMM_GVOBD (0x2E 5F80)

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_5 | real | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_8 | real | Faktor auf Einspritzung Zylinder 7 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_6 | real | Faktor auf Einspritzung Zylinder 8 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_7 | real | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |

### STEUERN_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE vorgeben. Der Korrekturfaktor soll bei Klemmenwechsel auf den Standardwert 1 zurueckgesetzt werden. STEUERN_GVOBD (0x2E 5F80)

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_5 | real | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_8 | real | Faktor auf Einspritzung Zylinder 7 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_6 | real | Faktor auf Einspritzung Zylinder 8 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_7 | real | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |

### STEUERN_GOEPBSZ

Laufzeit fuer Getriebeoelpumpe zuruecksetzen . GOEPBSZ (0x2E 5F83)

| Name | Type | Description |
| --- | --- | --- |
| SW_T_GB_OIL_PUMP_ON_SUM | real | Accumulated run time of gear box oil pump Einheit: s Min: 0.0 Max: 4.294967295E7 a2l-Name: EEP_OILCPMP_OILCPMP_TISUM_S32 |

### STEUERN_PM_RESTORE

Schreiben PM-Restore PM_RESTORE (0x2E 5F8B)

| Name | Type | Description |
| --- | --- | --- |
| SW_PMRESTORE_0 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [0] |
| SW_PMRESTORE_1 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [1] |
| SW_PMRESTORE_2 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [2] |
| SW_PMRESTORE_3 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [3] |
| SW_PMRESTORE_4 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [4] |
| SW_PMRESTORE_5 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [5] |
| SW_PMRESTORE_6 | unsigned char | Codierdaten Powermanagement Backup Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [6] |

### STEUERN_HUBKORR_VERSTELLEN

Hubkorrektur vorgeben START-CONDITION: 8F STEUERN_HUBKORR_VERSTELLEN (0x2E 5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSIN | unsigned char | Codierdaten Hub Korrektur schreiben. Min: 0.0 Max: 255.0 a2l-Name: stvbrvsin |

### STEUERN_HUBKORR_PROGRAMMIEREN

Hubkorrektur programmieren START-CONDITION: 8F STEUERN_HUBKORR_PROGRAMMIEREN (0x2E 5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSNNV | unsigned char | Codierdaten Hub Korrektur programmieren. Min: 0.0 Max: 255.0 a2l-Name: stvbrvsnnv |

### STEUERN_HUBKORR_RESET

Hubkorrektur loeschen START-CONDITION: 8B Fa-a2l-Name: stvbrvsnnv, stvbrvsin STEUERN_HUBKORR_RESET (0x2E 5F8C)

_No arguments._

### STEUERN_IMAALLE

Abgleichwerte Injektoren programmieren IMAALLE (0x2E 5F90)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_5 | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_6 | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_7 | real | IMA Abgleichwert Injektor 07 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_8 | real | IMA Abgleichwert Injektor 08 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_1

Abgleichwert Injektor 1 programmieren IMA_ZYL_1 (0x2E 5F91)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_2

Abgleichwert Injektor 2 programmieren IMA_ZYL_2 (0x2E 5F92)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_3

Abgleichwert Injektor 3 programmieren IMA_ZYL_3 (0x2E 5F93)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_4

Abgleichwert Injektor 4 programmieren IMA_ZYL_4 (0x2E 5F94)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_5

Abgleichwert Injektor 5 programmieren IMA_ZYL_5 (0x2E 5F95)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_5 | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_6

Abgleichwert Injektor 6 programmieren IMA_ZYL_6 (0x2E 5F96)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_6 | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_7

Abgleichwert Injektor 7 programmieren IMA_ZYL_7 (0x2E 5F97)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_7 | real | IMA Abgleichwert Injektor 07 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [6] |

### STEUERN_IMA_ZYL_8

Abgleichwert Injektor 8 programmieren IMA_ZYL_8 (0x2E 5F98)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_8 | real | IMA Abgleichwert Injektor 08 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [3] |

### STEUERN_KVA

KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben KVA (0x2E 5FC1)

| Name | Type | Description |
| --- | --- | --- |
| KVA | real | Codierung Verbrauchsanzeigekorrektur Umrechnung: 0x80 bis 0x7F in -0.128 bis 0.127 Min: -0.128 Max: 0.127 a2l-Name: kva_korr |

### _STEUERN_MSA2_DEAK_DEAKT

Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stopp Automatik) vorgeben Die Umsetzung ist ausschliesslich fuer Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zuruecknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_DEAKT (0x2E 5FDB)

| Name | Type | Description |
| --- | --- | --- |
| SW | unsigned char | Auswahl Parameter fuer unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Deaktivierer vorgeben 0 - MSA2 Selektive Blockierung der Deaktivierer vorgeben beenden Min: 0.0 Max: 7.0 |
| SW_MSA2_DEAK_DEAKT | unsigned long | Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 |

### _STEUERN_MSA2_DEAK_DFSP

Selektieve Blockierung der Deaktivierer aufgrund FSP-Eintraegen MSA2 (Motor Start/Stopp Automatik) vorgeben. Die Umsetzung ist ausschliesslich fuer Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zuruecknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_DFSP (0x2E 5FDC)

| Name | Type | Description |
| --- | --- | --- |
| SW | unsigned char | Auswahl Parameter fuer unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Deaktivierer aufgrund FSP-Eintraegen vorgeben 0 - MSA2 Selektive Blockierung der Deaktivierer aufgrund FSP-Eintraegen vorgeben beenden Min: 0.0 Max: 7.0 |
| SW_MSA2_DEAK_DEAKTFS | unsigned long | Selektive Blockierung der Deaktivierer aufgrund von Fehlerspeichereintraegen MSA2 (Motor Start/Stop Automatik) (A2L-NAME: MSA_swdfspdi) Min: 0.0 Max: 4.294967295E9 |

### _STEUERN_MSA2_DEAK_EA

Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stopp Automatik) vorgeben. Die Umsetzung ist ausschliesslich fuer Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zuruecknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_EA (0x2E 5FDD)

| Name | Type | Description |
| --- | --- | --- |
| SW | unsigned char | Auswahl Parameter fuer unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Einschaltaufforderer vorgeben 0 - MSA2 Selektive Blockierung der Einschaltaufforderer vorgeben beenden Min: 0.0 Max: 7.0 |
| SW_MSA2_DEAK_EINSCHAUFVOR | unsigned long | Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stop Automatik) (A2L-NAME: MSA_sweadi) Min: 0.0 Max: 4.294967295E9 |

### _STEUERN_MSA2_DEAK_FAV

Selektive Blockierung der Fahrerabschaltverhinderer MSA2 (Motor Start/Stopp Automatik) vorgeben Die Umsetzung ist ausschliesslich fuer Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zuruecknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_FAV (0x2E 5FDF)

| Name | Type | Description |
| --- | --- | --- |
| SW | unsigned char | Auswahl Parameter fuer unterschiedliche Servicefunktionen: 7 - MSA2 Selektive Blockierung der Fahrerabschaltverhinderer vorgeben 0 - MSA2 Selektive Blockierung der Fahrerabschaltverhinderer vorgeben beenden Min: 0.0 Max: 7.0 |
| SW_MSA2_DEAK_FAHRABSCHVERH | unsigned long | Selektive Blockierung der Fahrerabschaltverhinderer MSA2 (Motor Start/Stop Automatik) (A2L-NAME: MSA_swfavdi) Min: 0.0 Max: 4.294967295E9 |

### _STEUERN_MSA2_DEAK_EV

Selektive Blockierung der Einschaltverhinderer MSA2 (Motor Start/Stopp Automatik) vorgeben Die Umsetzung ist ausschliesslich fuer Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zuruecknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_EV (0x2E 5FE5)

| Name | Type | Description |
| --- | --- | --- |
| SW | unsigned char | Auswahl Parameter fuer unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Einschaltverhinderer vorgeben 0 - MSA2 Selektive Blockierung der Einschaltverhinderer vorgeben beenden Min: 0.0 Max: 7.0 |
| SW_MSA2_DEAK_EINSCHVERH | unsigned long | Selektive Blockierung der Einschaltverhinderer MSA2 (Motor Start/Stop Automatik). (A2L-Name: Msa_swevdi) Min: 0.0 Max: 4.294967295E9 |

### STEUERN_ENDE_ABLL

Abgleichwert LL (Leerlauf) Vorgeben beenden STEUERN_ENDE_ABLL (0x2E 5FF0)

_No arguments._

### STEUERN_LL_ABGLEICH

Abgleichwert LL (Leerlauf) vorgeben STEUERN_LL_ABGLEICH (0x2E 5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnllmv |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnsacmv |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsmv |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsacmv |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnslbv |

### STEUERN_LLABG_PROG

Abgleichwert LL (Leerlauf) programmieren STEUERN_LLABG_PROG (0x2E 5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnllmv |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnsacmv |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsmv |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsacmv |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnslbv |

### ECU_CONFIG_RESET

Variante loeschen ECU_CONFIG_RESET (0x2E 5FF2)

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### STEUERN_DK

Drosselklappe ansteuern DK (0x2F 03 602A)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK | real | Tastverhaeltniss Drosselklappe Einheit: % DK Min: 0.0 Max: 99.99999999999986 a2l-Name: wdktest_w |
| SW_TO_DK | unsigned long | Timeout Drosselklappe Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DK

Drosselklappe Ansteuerung beenden DK (0x2F 00 602A)

_No arguments._

### STEUERN_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern LDS1 (0x2F 03 60B6)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS1 | real | Tastverhaeltniss Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Einheit: % Min: 0.0 Max: 99.99847412109375 a2l-Name: arqtwgv_w |
| SW_TO_LDS1 | unsigned long | Timeout Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden LDS1 (0x2F 00 60B6)

_No arguments._

### STEUERN_ENDE_MSV

Mengensteuerventil Ansteuerung beenden MSV (0x2F 00 60BD)

_No arguments._

### STEUERN_MSV

Mengensteuerventil ansteuern MSV (0x2F 03 60BD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSV | real | Tastverhaeltniss Mengensteuerventil Einheit: MPa Min: 0.0 Max: 32.7675 a2l-Name: arqtprs_w |
| SW_TO_MSV | unsigned long | Timeout Mengensteuerventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EWAP

elektr. Wasserpumpe Ansteuerung beenden EWAP (0x2F 00 60BF)

_No arguments._

### STEUERN_EWAP

elektr. Wasserpumpe ansteuern EWAP (0x2F 03 60BF)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP | unsigned char | Sollwert elektr. Wasserpumpe (0 bis 255 Upm) Einheit: 1/min Min: 0.0 Max: 255.0 a2l-Name: newpsolltst |
| SW_TO_EWAP | unsigned long | Timeout elektr. Wasserpumpe Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_TEV

Tankentlueftungsventil ansteuern TEV (0x2F 03 60CF)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV | real | Tastverhaeltniss Tankentlueftungsventil Einheit: % Min: 0.0 Max: 100.0 a2l-Name: arqttev_w |
| SW_TO_TEV | unsigned long | Timeout Tankentlueftungsventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_TEV

Tankentlueftungsventil Ansteuerung beenden TEV (0x2F 00 60CF)

_No arguments._

### STEUERN_ENDE_LSH1

Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden LSH1 (0x2F 00 60D0)

_No arguments._

### STEUERN_LSH1

Lambdasondenheizung vor Kat Bank1 ansteuern LSH1 (0x2F 03 60D0)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1 | unsigned char | Tastverhaeltniss Lambdasondenheizung vor Kat 1 Min: 0.0 Max: 255.0 a2l-Name: resdhlsu |
| SW_TO_LSH1 | unsigned long | Timeout Lambdasondenheizung vor Kat 1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_LSH2

Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden LSH2 (0x2F 00 60D1)

_No arguments._

### STEUERN_LSH2

Lambdasondenheizung hinter Kat Bank1 ansteuern LSH2 (0x2F 03 60D1)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2 | unsigned char | Tastverhaeltniss Lambdasondenheizung hinter Kat 1 Min: 0.0 Max: 255.0 a2l-Name: resdhshe |
| SW_TO_LSH2 | unsigned long | Timeout Lambdasondenheizung hinter Kat 1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_MIL

MIL (Malfunction Indicator Lamp) Ansteuerung beenden MIL (0x2F 00 60D4)

_No arguments._

### STEUERN_MIL

MIL (Malfunction Indicator Lamp) ansteuern MIL (0x2F 03 60D4)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL | unsigned char | Komponentenansteuerung: MIL (Malfunction Indicator Lamp) 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 |
| SW_TO_MIL | unsigned long | Timeout MIL (Malfunction Indicator Lamp) Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_EML

EML (Engine Malfunction Lamp) ansteuern EML (0x2F 03 60D6)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML | unsigned char | Komponentenansteuerung: EML (Engine Malfunction Lamp) 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 |
| SW_TO_EML | unsigned long | Timeout EML (Engine Malfunction Lamp) Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EML

EML (Engine Malfunction Lamp) Ansteuerung beenden EML (0x2F 00 60D6)

_No arguments._

### STEUERN_ENDE_VVT

VVT Ansteuerung beenden VVT (0x2F 00 60DD)

_No arguments._

### STEUERN_VVT

VVT ansteuern VVT (0x2F 03 60DD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_VVT | real | Normierter Exzenterwinkel VVT Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: vvtaet |
| SW_TO_VVT | unsigned long | Timeout VVT Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV1

Einspritzventil 1 (physikalisch) Ansteuerung beenden EV1 (0x2F 00 60E1)

_No arguments._

### STEUERN_EV1

Einspritzventil 1 (physikalisch) ansteuern EV1 (0x2F 03 60E1)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1 | unsigned long | Periodendauer Einspritzventil 1 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E1 |
| SW_TV_EV1 | real | Tastverhaeltniss Einspritzventil 1 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E1 |
| SW_TO_EV1 | unsigned long | Timeout Einspritzventil 1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV2

Einspritzventil 2 (physikalisch) Ansteuerung beenden EV2 (0x2F 00 60E2)

_No arguments._

### STEUERN_EV2

Einspritzventil 2 (physikalisch) ansteuern EV2 (0x2F 03 60E2)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2 | unsigned long | Periodendauer Einspritzventil 2 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E2 |
| SW_TV_EV2 | real | Tastverhaeltniss Einspritzventil 2 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E2 |
| SW_TO_EV2 | unsigned long | Timeout Einspritzventil 2 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV3

Einspritzventil 3 (physikalisch) Ansteuerung beenden EV3 (0x2F 00 60E3)

_No arguments._

### STEUERN_EV3

Einspritzventil 3 (physikalisch) ansteuern EV3 (0x2F 03 60E3)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3 | unsigned long | Periodendauer Einspritzventil 3 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E3 |
| SW_TV_EV3 | real | Tastverhaeltniss Einspritzventil 3 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E3 |
| SW_TO_EV3 | unsigned long | Timeout Einspritzventil 3 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV4

Einspritzventil 4 (physikalisch) Ansteuerung beenden EV4 (0x2F 00 60E4)

_No arguments._

### STEUERN_EV4

Einspritzventil 4 (physikalisch) ansteuern EV4 (0x2F 03 60E4)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4 | unsigned long | Periodendauer Einspritzventil 4 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E4 |
| SW_TV_EV4 | real | Tastverhaeltniss Einspritzventil 4 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E4 |
| SW_TO_EV4 | unsigned long | Timeout Einspritzventil 4 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENWS

Vanos Einlass Ventil ansteuern ENWS (0x2F 03 60ED)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS | real | Tastverhaeltniss Vanos Einlassventil Einheit: ° KW Min: -102.4 Max: 101.6 a2l-Name: wnwetst |
| SW_TO_ENWS | unsigned long | Timeout Vanos Einlassventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ENWS

Vanos Einlass Ventil Ansteuerung beenden ENWS (0x2F 00 60ED)

_No arguments._

### STEUERN_ANWS

Vanos Auslass Ventil ansteuern ANWS (0x2F 03 60EE)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS | real | Tastverhaeltniss Vanos Auslassventil Einheit: ° KW Min: -102.4 Max: 101.6 a2l-Name: wnwatst |
| SW_TO_ANWS | unsigned long | Timeout Vanos Auslassventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ANWS

Vanos Auslass Ventil Ansteuerung beenden ANWS (0x2F 00 60EE)

_No arguments._

### STEUERN_GOEPRELAIS

Getriebeoelpumpenrelais Ansteuerung beenden GOEPRELAIS (0x2F 03 60FB)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GOEPRELAIS | unsigned char | _comment_ : Komponentenansteuerung: GOEPRELAIS _comment_ : 1 = Ansteuern _comment_ : 0 = Aussteuern (default) Min: 0.0 Max: 255.0 a2l-Name: B_goepdiag |
| SW_TO_GOEPRELAIS | unsigned long | Timeout GOEPRELAIS Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_GOEPRELAIS

Getriebeoelpumpenrelais Ansteuerung beenden GOEPRELAIS (0x2F 00 60FB)

_No arguments._

### STEUERN_ENDE_EL_AGK

Ansteuerung beenden elektrische Abgasklappe EL_AGK (0x2F 00 60FD)

_No arguments._

### STEUERN_EL_AGK

Ansteuerung elektrische Abgasklappe Achtung nur folgende Bereiche verwenden sonst kann es zu Fehlerspeichereintraegen kommen 8-12%: Auffahren 28-32%: Bauteilerkennung 48-52%: Werkstattposition 88-92%: Zufahren EL_AGK (0x2F 03 60FD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EAGK | real | Tastverhaeltnis elektrische Abgasklappe Einheit: % Min: 0.0 Max: 99.99847412109375 |
| SW_TO_EAGK | unsigned long | Timeout elektrische Abgasklappe Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STATUS_SYSTEMCHECK_TEV

Auslesen Diagnosefunktion Tankentlueftungsventil SYSTEMCHECK_TEV (0x31 03 F022)

_No arguments._

### STOP_SYSTEMCHECK_TEV

Diagnosefunktion Tankentlueftungsventil beenden SYSTEMCHECK_TEV (0x31 02 F022)

_No arguments._

### START_SYSTEMCHECK_TEV

Ansteuern Diagnosefunktion Tankentlueftungsventil SYSTEMCHECK_TEV (0x31 01 F022)

_No arguments._

### STATUS_SYSTEMCHECK_EVAUSBL

Auslesen Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0x31 03 F025)

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

Ende Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0x31 02 F025)

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

Ansteuern Diagnosefunktion Einspritzventilausblendung SYSTEMCHECK_EVAUSBL (0x31 01 F025)

| Name | Type | Description |
| --- | --- | --- |
| STAT_DEVOFF | unsigned char | Ausblendmaske Min: 0.0 Max: 255.0 a2l-Name: devoff |

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

Diagnosefunktion VVT Anschlag lernen beenden SYSTEMCHECK_VVT_ANSCHLAG (0x31 02 F027)

_No arguments._

### START_SYSTEMCHECK_VVT_ANSCHLAG

Ansteuern Diagnosefunktion VVT-Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0x31 01 F027)

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Auslesen VVT Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0x31 03 F027)

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

Ansteuern Adaptionen selektiv loeschen - Batterietausch ausgeblendet. ADAP_SELEKTIV_LOESCHEN (0x31 01 F030)

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | unsigned char | AUSWAHLBYTE_1_BIT_7 -- > NOT USED AUSWAHLBYTE_1_BIT_6 --> Adaption Lambdaregelung klann_clrad AUSWAHLBYTE_1_BIT_5 --> Adaption Drosselklappe B_lrndia AUSWAHLBYTE_1_BIT_4 --> Adaption Saugrohrmodell eisy_clrad AUSWAHLBYTE_1_BIT_3 --> NOT USED AUSWAHLBYTE_1_BIT_2 --> NOT USED AUSWAHLBYTE_1_BIT_1 --> Adaption Klopfregelung kr_clrad() AUSWAHLBYTE_1_BIT_0 --> Adaption Leerlaufabgleich B_clradllr Min: 0.0 Max: 255.0 |
| AUSWAHLBYTE_2 | unsigned char | AUSWAHLBYTE_2_BIT_7 --> Adaption Variabler Ventiltrieb (VVT) B_clradvvt AUSWAHLBYTE_2_BIT_6 --> Adaption gelernte Varianten B_clvar AUSWAHLBYTE_2_BIT_5 --> NOT USED AUSWAHLBYTE_2_BIT_4 --> Batterietausch nur ueber eigenen Job AUSWAHLBYTE_2_BIT_3 --> Adaption Hochdruckpumpe LV_HPP_CTL_AD_CLR_EXT_REQ AUSWAHLBYTE_2_BIT_2 --> NOT USED AUSWAHLBYTE_2_BIT_1 --> NOT USED AUSWAHLBYTE_2_BIT_0 --> Adaption Lastregelung ls_clrad() |
| AUSWAHLBYTE_3 | unsigned char | AUSWAHLBYTE_3_BIT_7 --> NOT USED AUSWAHLBYTE_3_BIT_6 --> Diagnosewerte Abgaskruemmerdruck (EisyDiagPakmx) Reset: BasSvrAppl_stRstrtDgnsVal AUSWAHLBYTE_3_BIT_5 --> NOT USED AUSWAHLBYTE_3_BIT_4 --> NOT USED AUSWAHLBYTE_3_BIT_3 --> NOT USED AUSWAHLBYTE_3_BIT_2 --> NOT USED AUSWAHLBYTE_3_BIT_1 --> Adaption Segmentzeit B_clradfof AUSWAHLBYTE_3_BIT_0 --> Adaption VANOS vns_clrad() Min: 0.0 Max: 255.0 |

### ADAP2_SELEKTIV_LOESCHEN

Ansteuern Adaptionen 2 selektiv loeschen ADAP2_SELEKTIV_LOESCHEN (0x31 01 F031)

| Name | Type | Description |
| --- | --- | --- |
| ADAV2_AUSWAHLBYTE_1 | unsigned char | ADAV2_AUSWAHLBYTE_1_BIT_7 --> Kleinstmengenadaption bedinjadclr ADAV2_AUSWAHLBYTE_1_BIT_6 --> Variante Abgasklappe loeschen (DAKRE_StRstFlpTyp), BasSvrAppl_stVarEgFlapClr ADAV2_AUSWAHLBYTE_1_BIT_5 --> Zaehler VVT Notlauf loeschen (anznlvvtaust) ADAV2_AUSWAHLBYTE_1_BIT_4 --> Neustart der Hinterachslernfunktion (B_hal_reset_adaptionen (Bit 0 von St_hal_diag_adaptionen)). ADAV2_AUSWAHLBYTE_1_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_1 --> Adaption Langzeit fuer Injektoralterung Bank 1 klann_lza_clrad ADAV2_AUSWAHLBYTE_1_BIT_0 --> (NOT USED) Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: - Bit 0x02: - Bit 0x04: - Bit 0x08: - Bit 0x10: BasSvrAppl_flgRstRrAxlAdpn Bit 0x20: - Bit 0x40: BasSvrAppl_stVarEgFlapClr Bit 0x80: bedinjadclr |
| ADAV2_AUSWAHLBYTE_2 | unsigned char | ADAV2_AUSWAHLBYTE_2_BIT_7 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_4 --> Bereichserkennung Benzin im Oel (B_clradbo) ADAV2_AUSWAHLBYTE_2_BIT_3 --> Reset Startabbrueche (B_stabbr_zrreset) ADAV2_AUSWAHLBYTE_2_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_1 --> Kraftstoffqualitaetserfassung Reset (B_clradfuel) ADAV2_AUSWAHLBYTE_2_BIT_0 --> Infospeicher Superklopffunktion loeschen (AVS_SKRKO_CLRSKINFO_U8) Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: BasSvrAppl_stTstrTrg1_RC_B_SKRKO Bit 0x02: B_clradfuel Bit 0x04: - Bit 0x08: - Bit 0x10: B_clradbbo Bit 0x20: - Bit 0x40: - Bit 0x80: - |
| ADAV2_AUSWAHLBYTE_3 | unsigned char | ADAV2_AUSWAHLBYTE_3_BIT_7 --> Zuruecksetzen der Hubkorrekturstatistik per Tester (Bit-Name = B_vbr_stat_reset_ext und Basisvariable = St_vbr_stat) ADAV2_AUSWAHLBYTE_3_BIT_6 --> Anforderung Nockenwellen Referenzadaption durch Tester (Kurbelwelle-Nockenwellenzuordnung). Der Neustart der Adaptation sollte immer nach Arbeit in der Umgebung der Nocken- oder Kurbelwelle ausgefuehrt werden.(B_fanwrad) ADAV2_AUSWAHLBYTE_3_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_0 --> NOT USED Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: - Bit 0x02: - Bit 0x04: - Bit 0x08: - Bit 0x10: - Bit 0x20: - Bit 0x40: B_fanwrad Bit 0x80: B_vbrstatresetext |

### STATUS_ZGH

Auslesen Zylinder Gleichstellung Homogen ZGH (0x31 03 F034)

_No arguments._

### START_ZGH

Ansteuern Zylinder Gleichstellung Homogen Startvoraussetzungen: T_mot > 70 °C, Fahrstuffe P (bei Fzg. mit Automatikgetriebe), Die entsprechenden Adaptionen muessen geloescht sein. ZGH (0x31 01 F034)

_No arguments._

### STOP_ZGH

Ende Zylinder Gleichstellung Homogen ZGH (0x31 02 F034)

_No arguments._

### STATUS_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Status-Routine ZWDIAG (0x31 03 F03A)

_No arguments._

### START_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Start-Routine ZWDIAG (0x31 01 F03A)

| Name | Type | Description |
| --- | --- | --- |
| FAC_CH_DIAG_EXT_ADJ_IS | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen im Leerlauf Min: 0.0 Max: 1.9921875 a2l-Name: fetakhllfa |
| FAC_CH_DIAG_EXT_ADJ_PL | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen in der Teillast Min: 0.0 Max: 1.9921875 a2l-Name: fetakhtlfa |
| LV_CH_DIAG_EXT_REQ | unsigned char | Anforderung an Anpassung der geforderten Momentenreserve durch Katheizen ueber Tester (Leerlauf/Teillastbetrieb) Min: 0.0 Max: 3.0 a2l-Name: B_fetakhll, B_fetakhtl |

### STOP_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Stop-Routine ZWDIAG (0x31 02 F03A)

_No arguments._

### START_DEAK_CVODIAG

Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurueckgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. DEAK_CVODIAG (0x31 01 F03F)

_No arguments._

### STATUS_DEAK_CVODIAG

Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurueckgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. DEAK_CVODIAG (0x31 03 F03F)

_No arguments._

### STOP_DEAK_CVODIAG

Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurueckgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. DEAK_CVODIAG (0x31 02 F03F)

_No arguments._

### STATUS_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x31 03 F042)

_No arguments._

### STOP_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x31 02 F042)

_No arguments._

### START_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x31 01 F042)

| Name | Type | Description |
| --- | --- | --- |
| VANOSSPL_M_MODUS | unsigned char | 1=gleichzeitiges Verstellen von Ein- und Auslass-Vanos. und 2=erst Verstellen Einlass, dann Verstellen Auslass. Default-Wert = 1. (A2L-Name: modenwstcl) Min: 1.0 Max: 2.0 a2l-Name: modenwstcl |
| VANOSSPL_N_AZLVERSTL | unsigned char | Anzahl Verstellungen (von 1 bis 50). Default-Wert = 10 Dez. (A2L-Name: anztvtcl) Min: 1.0 Max: 50.0 a2l-Name: anztvtcl |
| VANOSSPL_T_HLTZVERSTL | real | Haltezeit Verstellung (0 bis 5 s). Default-Wert = 2.0 s. Gesamtzeit Vanosspuelen = N * 2 * T * m. (A2L-Name: takttcl) Einheit: s Min: 0.0 Max: 5.0 a2l-Name: takttcl |
| VANOSSPL_N1_UDZLGRNZ | unsigned long | Untere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min unter LL-Solldrehzahl . Default-Wert = 1000. (A2L-Name: nmotmintcl) Einheit: 1/min Min: 500.0 Max: 2000.0 a2l-Name: nmotmintcl |
| VANOSSPL_N2_ODZLGRNZ | unsigned long | Obere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min ueber LL-Solldrehzahl . Default-Wert = 1200. (A2L-Name: nmotmaxtcl) Einheit: 1/min Min: 500.0 Max: 2000.0 a2l-Name: nmotmaxtcl |
| VANOSSPL_V_MAX | unsigned char | Max. Fahrzeuggeschwindigkeit (0 bis 100 km/h). Default-Wert = 0 (A2L-Name: vfzgmxtcl) Einheit: km/h Min: 0.0 Max: 100.0 a2l-Name: vfzgmxtcl |
| VANOSSPL_T2_ZUBRZ | real | Zulaessige Unterbrechungszeit (0 bis 20 s). Default-Wert = 5s. (A2L-Name: taktumxtcl) Einheit: s Min: 0.0 Max: 20.0 a2l-Name: taktumxtcl |
| VANOSSPL_DVSE1_VO1EV | real | Verstelloffset 1 Einlass-Vanos (von -102,4 bis 101,6°KW). Default-Wert=5.6°Grad. (A2L-Name: ofstclnwe1) Einheit: ° KW Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwe1 |
| VANOSSPL_DVSE2_VO2EV | real | Verstelloffset 2 Einlass-Vanos (von -102,4 bis 101,6°KW). Default-Wert=-5.6°Grad. (A2L-Name: ofstclnwe2) Einheit: ° KW Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwe2 |
| VANOSSPL_DVSA1_VO1AV | real | Verstelloffset 1 Auslas-Vanos (von -102,4 bis 101,6°KW). Default-Wert=-5.6°Grad. (A2L-Name: ofstclnwa1) Einheit: ° KW Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwa1 |
| VANOSSPL_DVSA2_VO1AV | real | Verstelloffset 2 Auslas-Vanos (von -102,4 bis 101,6°KW). Default-Wert=5.6°Grad. (A2L-Name: ofstclnwa2) Einheit: ° KW Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwa2 |

### STEUERN_MONTAGEMODUS

Ansteuern Montage-Modus. MONTAGEMODUS (0x31 01 F043)

_No arguments._

### STATUS_MONTAGEMODUS

Auslesen Montage-Modus MONTAGEMODUS (0x31 03 F043)

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

Ende Montage-Modus MONTAGEMODUS (0x31 02 F043)

_No arguments._

### STATUS_KLACKERTEST

Auslesen der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. KLACKERTEST (0x31 03 F044)

_No arguments._

### STOP_KLACKERTEST

Ende der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. KLACKERTEST (0x31 02 F044)

_No arguments._

### START_KLACKERTEST

Aktivierung der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. KLACKERTEST (0x31 01 F044)

_No arguments._

### STATUS_SYSTEMCHECK_DKVSFS

Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) Status lesen. SYSTEMCHECK_DKVSFS (0x31 03 F046)

_No arguments._

### STOP_SYSTEMCHECK_DKVSFS

Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) steuern-Ende. SYSTEMCHECK_DKVSFS (0x31 02 F046)

_No arguments._

### START_SYSTEMCHECK_DKVSFS

Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) Start. Beim Ausfuehren dieses Testerjobs muss das Bit B_falra auf 1 gesetzt werden. SYSTEMCHECK_DKVSFS (0x31 01 F046)

_No arguments._

### START_SYSTEMCHECK_DDYLSTR

Kurztest Lambdasonde nach Kat, Diagnose der Transition Time fett nach mager / mager nach fett. SYSTEMCHECK_DDYLSTR (0x31 01 F048)

_No arguments._

### STATUS_SYSTEMCHECK_DDYLSTR

Kurztest Lambdasonde nach Kat, Diagnose der Transition Time fett nach mager / mager nach fett status. SYSTEMCHECK_DDYLSTR (0x31 03 F048)

_No arguments._

### STOP_SYSTEMCHECK_DDYLSTR

Kurztest Lambdasonde nach Kat, Diagnose der Transition Time fett nach mager / mager nach fett steuern-ende. SYSTEMCHECK_DDYLSTR (0x31 02 F048)

_No arguments._

### START_SYSTEMCHECK_DDYLSRESP

Kurztest Lambdasonde nach Kat, Diagnose der Delay Time fett nach mager / mager nach fett. SYSTEMCHECK_DDYLSRESP (0x31 01 F049)

_No arguments._

### STATUS_SYSTEMCHECK_DDYLSRESP

Kurztest Lambdasonde nach Kat, Diagnose der Delay Time fett nach mager / mager nach fett. SYSTEMCHECK_DDYLSRESP (0x31 03 F049)

_No arguments._

### STOP_SYSTEMCHECK_DDYLSRESP

Kurztest Lambdasonde nach Kat, Diagnose der Delay Time fett nach mager / mager nach fett. SYSTEMCHECK_DDYLSRESP (0x31 02 F049)

_No arguments._

### STOP_SYSTEMCHECK_LSHK_STUCK

Kurztest Lambdasonde nach Kat, stuck check, Signal haengt fett / mager. SYSTEMCHECK_LSHK_STUCK (0x31 02 F04A)

_No arguments._

### START_SYSTEMCHECK_LSHK_STUCK

Kurztest Lambdasonde nach Kat, stuck check, Signal haengt fett / mager. SYSTEMCHECK_LSHK_STUCK (0x31 01 F04A)

_No arguments._

### STATUS_SYSTEMCHECK_LSHK_STUCK

Kurztest Lambdasonde nach Kat, stuck check, Signal haengt fett / mager. SYSTEMCHECK_LSHK_STUCK (0x31 03 F04A)

_No arguments._

### STATUS_KATREINIGUNG

Diagnosejob Anforderung Verbot Sondenheitzung nach Katreinigung Startvorraussetzung: Jobfreischaltung ueber Codewort SwSABMW_ReqPhdSensHtgAftCatClng_C KATREINIGUNG (0x31 03 F058)

_No arguments._

### START_KATREINIGUNG

Diagnosejob Anforderung Verbot Sondenheitzung nach Katreinigung dieser Job setzt Bit B_tpe_tester RB(SwSABMW_flgTstrReqExtdTPE): Startvorraussetzung: nmot = 0 Motordrehzahl gleich Null Jobfreischaltung ueber Codewort SwSABMW_ReqPhdSensHtgAftCatClng_C KATREINIGUNG (0x31 01 F058)

_No arguments._

### STATUS_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader auslesen SYSTEMCHECK_ATL (0x31 03 F0D0)

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

Ende Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0x31 02 F0D9)

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

Auslesen Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0x31 03 F0D9)

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

Ansteuerung Lambdaregelung deaktivieren SYSTEMCHECK_L_REGELUNG_AUS (0x31 01 F0D9)

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE

Auslesen Diagnosefunktion vertauschte Lambdasonden SYSTEMCHECK_L_SONDE (0x31 03 F0DF)

_No arguments._

### STATUS_EISYUGD

Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0x31 03 F0E0)

_No arguments._

### START_EISYUGD

Ansteuern Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0x31 01 F0E0)

| Name | Type | Description |
| --- | --- | --- |
| NKW | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw |
| VSE_SPRI | real | Istwert Einlassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vse_spri |
| VSA_SPRI | real | Istwert Auslassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vsa_spri |
| HUBEV_IST | real | Istwert Einlassventilhub Min: 0.0 Max: 65.535 a2l-Name: hubev_mareg |
| PS | real | Absolut Druck im Saugrohr (A2L-Name: Ps) (Istwert Umgebungsdruck) Einheit: hPa Min: 0.0 Max: 8191.875 a2l-Name: ps |

### STATUS_EISYGD

Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) EISYGD (0x31 03 F0E1)

_No arguments._

### START_EISYGD

Ansteuern Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) EISYGD (0x31 01 F0E1)

| Name | Type | Description |
| --- | --- | --- |
| NKW | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw |
| VSE_SPRI | real | Istwert Einlassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vse_spri |
| VSA_SPRI | real | Istwert Auslassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vsa_spri |
| WDK_IST | real | Aktueller Drosselklappenwinkel Einheit: % Min: -800.0 Max: 799.9755859375 a2l-Name: wdk_ist |

### STATUS_KRANN

Auslesen Krann-Adaptionswerte (Anforderung aus CP5404) KRANN (0x31 03 F0E3)

_No arguments._

### START_KRANN

Ansteuern Krann-Adaptionswerte (Anforderung aus CP5404) KRANN (0x31 01 F0E3)

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw_loc |
| RK_LOC | real | Relative Krafstoffmasse Min: 0.0 Max: 3199.951171875 a2l-Name: rf_loc |
| TANS_LOC | real | Ansauglufttemperatur Min: -3276.8 Max: 3276.7000000000003 a2l-Name: tans_loc |
| TMOT_LOC | real | Kuehlwassertemperatur Einheit: °C Min: -327.68 Max: 327.67 a2l-Name: tmot_loc |
| BA_IST_LOC | string | Istbetriebsart Werttabelle 0/ = Keine 1/ = Schicht 2/ = Homogen 3/ = Homogen_Schicht 8/ = Notlauf a2l-Name: ba_loc |

### STATUS_KLANN

Auslesen Klann-Adaptionswerte (Anforderung aus CP10798) KLANN (0x31 03 F0E4)

_No arguments._

### START_KLANN

Ansteuern Klann-Adaptionswerte (Anforderung aus CP10798) KLANN (0x31 01 F0E4)

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw_loc |
| RK_LOC | real | Relative Kraftstoffmasse Min: 0.0 Max: 3199.951171875 a2l-Name: rk_loc |
| TMOT_LOC | real | Kuehlwassertemperatur Einheit: °C Min: -327.68 Max: 327.67 a2l-Name: tmot_loc |

### START_SYSTEMCHECK_LSVK

Ansteuern Lambdasonden vor Kat SYSTEMCHECK_LSVK (0x31 01 F0E8)

_No arguments._

### STATUS_SYSTEMCHECK_LSVK

Auslesen Lambdasonden vor Kat SYSTEMCHECK_LSVK (0x31 03 F0E8)

_No arguments._

### STOP_SYSTEMCHECK_LSVK

Ende Lambdasonden vor Kat SYSTEMCHECK_LSVK (0x31 02 F0E8)

_No arguments._

### START_CRAM

Ansteuern RAM-Backup-Werte loeschen CRAM (0x31 01 F0E9)

_No arguments._

### STATUS_CRAM

Auslesen RAM-Backup-Werte loeschen CRAM (0x31 03 F0E9)

_No arguments._

### START_SYSTEMCHECK_DKAT

Ansteuern Kurztest Kat SYSTEMCHECK_DKAT (0x31 01 F0EB)

_No arguments._

### STATUS_SYSTEMCHECK_DKAT

Auslesen Kurztest Kat SYSTEMCHECK_DKAT (0x31 03 F0EB)

_No arguments._

### STOP_SYSTEMCHECK_DKAT

Ende Kurztest Kat SYSTEMCHECK_DKAT (0x31 02 F0EB)

_No arguments._

### STATUS_RAM

Auslesen RAM Backup zwangssichern RAM (0x31 03 F0F2)

_No arguments._

### START_RAM

Ansteuern RAM Backup zwangssichern RAM (0x31 01 F0F2)

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

Auslesen Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 03 F0F6)

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

Ansteuern Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 01 F0F6)

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

Ende Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 02 F0F6)

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
| 0x5AFF | unbekannter Verbauort | - |
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
| 0x005B | VOLVO Group Trucks |
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

### APPLNUM

| WERT | TEXT |
| --- | --- |
| 0x007B | Vmax Slave |
| 0x0095 | Vmax Master |
| 0x0097 | Pmax Slave |
| 0x0098 | Pmax Master |
| 0xFFFF | unbekannt |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### COENG_ST_COMPU_VERB

| WERT | TEXT |
| --- | --- |
| 0x00 | COENG_STANDBY |
| 0x01 | COENG_READY |
| 0x02 | COENG_CRANKING |
| 0x03 | COENG_RUNNING |
| 0x04 | COENG_STOPPING |
| 0x05 | COENG_FINISH |
| 0xFF | undefiniert |

### EPM_STSYNC_STATE_T

| WERT | TEXT |
| --- | --- |
| 0x00 | EPM_NO_SYNC |
| 0x0A | EPM_ALE_SYNC |
| 0x14 | EPM_CAS_SYNC |
| 0x15 | EPM_DIRSTALE_SYNC |
| 0x1E | EPM_FULL_SYNC |
| 0xFF | undefiniert |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | Energiesparmode aktiv | 0 |
| 0x021208 | DME, Kodierung: fehlt | 0 |
| 0x021209 | DME, Kodierung: Schreibfehler | 0 |
| 0x02120A | DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x02120B | DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x02120C | DME, Kodierung: Daten unplausibel | 0 |
| 0x021300 | Energiesparmodus: aktiv | 1 |
| 0x021302 | Energiesparmodus, Kopplung: aktiv | 0 |
| 0x021308 | DME Slave, Kodierung: fehlt | 0 |
| 0x021309 | DME Slave, Kodierung: Schreibfehler | 0 |
| 0x02130A | DME Slave, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x02130B | DME Slave, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x02130C | DME Slave, Kodierung: Daten unplausibel | 0 |
| 0x02FF12 | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x02FF13 | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x100001 | Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100011 | Drosselklappe 2, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100111 | Drosselklappe 2, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100501 | Drosselklappe 2, Funktion: schwergängig, zu langsam | 0 |
| 0x100A04 | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x100B04 | Drosselklappe 2, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x101001 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101002 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101101 | Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101102 | Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101301 | Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101302 | Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101401 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101411 | Drosselklappe 2, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101501 | Drosselklappe 2, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101502 | Drosselklappe 2, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101508 | Drosselklappe 2, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101C08 | Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101D08 | Drosselklappe 2, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101F01 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x101F02 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x102001 | Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102901 | Luftmasse 2, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102902 | Luftmasse 2, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102A01 | Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A11 | Luftmassenmesser 2, Signal: elektrischer Fehler | 0 |
| 0x102A22 | Luftmassenmesser, Arbeitsbereich: Luftmasse zu hoch | 0 |
| 0x102A23 | Luftmassenmesser 2, Arbeitsbereich: Luftmasse zu hoch | 0 |
| 0x102A32 | Luftmassenmesser, Arbeitsbereich: Luftmasse zu niedrig | 0 |
| 0x102A33 | Luftmassenmesser 2, Arbeitsbereich: Luftmasse zu niedrig | 0 |
| 0x102A42 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß | 0 |
| 0x102A43 | Luftmassenmesser 2, Arbeitsbereich: Periodendauer zu groß | 0 |
| 0x102A52 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig | 0 |
| 0x102A53 | Luftmassenmesser 2, Arbeitsbereich: Periodendauer zu niedrig | 0 |
| 0x102E10 | DME: interner Fehler [Luftmassenmesser: Leitungsunterbrechung Standby-Schalter] | 0 |
| 0x103001 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103004 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103008 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103010 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103011 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103012 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103013 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103101 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103104 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103108 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103308 | Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x10351C | Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104301 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104302 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104320 | Absolutdrucksensor, Saugrohr, Plausibilität: Druck zu hoch | 0 |
| 0x104321 | Absolutdrucksensor, Saugrohr, Plausibilität: Druck zu niedrig | 0 |
| 0x104401 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104402 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104501 | Absolutdrucksensor 2, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104502 | Absolutdrucksensor 2, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104601 | Absolutdrucksensor 2, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104602 | Absolutdrucksensor 2, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104620 | Absolutdrucksensor 2, Saugrohr, Plausibilität: Druck zu hoch | 0 |
| 0x104621 | Absolutdrucksensor 2, Saugrohr, Plausibilität: Druck zu niedrig | 0 |
| 0x104910 | Absolutdrucksensor, Saugrohr, Signaländerung: zu langsam | 0 |
| 0x104911 | Absolutdrucksensor 2, Saugrohr, Signaländerung: zu langsam | 0 |
| 0x104B01 | Absolutdrucksensor, Saugrohr: Sammelfehler | 0 |
| 0x104B11 | Absolutdrucksensor 2, Saugrohr: Sammelfehler | 0 |
| 0x105001 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Plus] | 0 |
| 0x105002 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Masse] | 0 |
| 0x105101 | Umgebungsdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x105102 | Umgebungsdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x105201 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu hoch im Nachlauf] | 0 |
| 0x105202 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu niedrig im Nachlauf] | 0 |
| 0x105301 | DME: interner Fehler [Umgebungsdrucksensor 2: Kurzschluss nach Plus] | 0 |
| 0x105302 | DME: interner Fehler [Umgebungsdrucksensor 2: Kurzschluss nach Masse] | 0 |
| 0x105401 | DME: interner Fehler [Umgebungsdrucksensor 2, Arbeitsbereich: Druck zu hoch] | 0 |
| 0x105402 | DME: interner Fehler [Umgebungsdrucksensor 2, Arbeitsbereich: Druck zu niedrig] | 0 |
| 0x105501 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck zu hoch im Nachlauf] | 0 |
| 0x105502 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck zu niedrig im Nachlauf] | 0 |
| 0x105A30 | DME: interner Fehler [Umgebungsdrucksensor: Sammelfehler] | 0 |
| 0x105A31 | DME: interner Fehler [Umgebungsdrucksensor 2: Sammelfehler] | 0 |
| 0x105A40 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu hoch] | 0 |
| 0x105A41 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu niedrig] | 0 |
| 0x105A42 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x105A43 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x105A44 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck unplausibel] | 0 |
| 0x105A45 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck unplausibel] | 0 |
| 0x107001 | Drosselklappenwinkel 2 - Absolutdruck Saugrohr 2, Vergleich: Druck zu hoch | 0 |
| 0x107002 | Drosselklappenwinkel 2 - Absolutdruck Saugrohr 2, Vergleich: Druck zu niedrig | 0 |
| 0x107801 | Tuningschutz: Luftmasse zu hoch | 0 |
| 0x107901 | Tuningschutz: Luftmasse 2 zu hoch | 0 |
| 0x107A50 | Drosselklappe: Notlauf aktiv | 0 |
| 0x107A51 | Drosselklappe 2: Notlauf aktiv | 0 |
| 0x107A70 | Drosselklappe, Ansteuerung: Kurzschluss | 0 |
| 0x107A71 | Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler | 0 |
| 0x107A73 | Drosselklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x107A80 | Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | Drosselklappe, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A82 | Drosselklappe 2, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A83 | Drosselklappe 2, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A90 | Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | Drosselklappe, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107A92 | Drosselklappe 2, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A93 | Drosselklappe 2, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107AE0 | Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x107AE1 | Drosselklappe 2, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x108920 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108921 | Ladelufttemperatursensor 2: Sammelfehler | 0 |
| 0x108922 | Ladelufttemperatursensor 2: Sammelfehler | 0 |
| 0x108930 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108A01 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A10 | Ladelufttemperatursensor, Spannungsänderung: zu schnell | 0 |
| 0x108A11 | Ladelufttemperatursensor 2, Spannungsänderung: zu schnell | 0 |
| 0x108B01 | Ladelufttemperatursensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108B02 | Ladelufttemperatursensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108B11 | Ladelufttemperatursensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x108B12 | Ladelufttemperatursensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x108B13 | Ladelufttemperatursensor, Spannungsänderung, Kopplung: zu schnell | 0 |
| 0x108B21 | Ladelufttemperatursensor 2, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x108B22 | Ladelufttemperatursensor 2, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x108B23 | Ladelufttemperatursensor 2, Spannungsänderung, Kopplung: zu schnell | 0 |
| 0x108C01 | Ladelufttemperatur, Plausibilität: Temperatur zu hoch | 0 |
| 0x108C08 | Ladelufttemperatur, Signal: festliegend | 0 |
| 0x108D01 | Ladelufttemperatur 2: Plausibilität, Temperatur zu hoch | 0 |
| 0x108D08 | Ladelufttemperatur 2: Signal, festliegend | 0 |
| 0x108F01 | Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x108F11 | Ansaugluftsystem 2: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109002 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109210 | Kennfeldthermostat, Kopplung: klemmt offen | 0 |
| 0x109308 | Kühlmitteltemperatursensor, Signaländerung: zu schnell | 0 |
| 0x109410 | Kühlmitteltemperatursensor, Signal, Kopplung: festliegend auf hoch | 0 |
| 0x10A001 | Temperatursensor Kühleraustritt, elektrisch: Kurzschluss nach Plus oder Leitung offen | 0 |
| 0x10A002 | Temperatursensor Kühleraustritt, elektrisch: Kurzschluss nach Masse | 0 |
| 0x10A108 | Temperatursensor Kühleraustritt, Signaländerung: zu schnell | 0 |
| 0x10A208 | Temperatursensor Kühleraustritt: Signal, festliegend | 0 |
| 0x10AA20 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10AA21 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10AA22 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart, Kopplung: Temperatur zu hoch | 0 |
| 0x10AA23 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart, Kopplung: Temperatur zu niedrig | 0 |
| 0x10AA30 | Kühlmitteltemperatursensor: Sammelfehler | 0 |
| 0x10AA40 | FlexRay, Botschaft (Kühlmitteltemperatursensor): fehlt | 0 |
| 0x10AA52 | Kühlmitteltemperatursensor, Signal: festliegend | 0 |
| 0x10AA55 | Kühlmitteltemperatursensor, Signal, Kopplung: festliegend | 0 |
| 0x10B101 | Außentemperatursensor: Kurzschluss nach Plus | 1 |
| 0x10B102 | Außentemperatursensor: Kurzschluss nach Masse | 1 |
| 0x10B104 | Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 1 |
| 0x10BA2E | Außentemperatur, Plausibilität, Kopplung: Temperatur zu hoch | 0 |
| 0x10BA2F | Außentemperatur, Plausibilität, Kopplung: Temperatur zu niedrig | 0 |
| 0x10BA30 | Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | Außentemperatursensor, Plausibilität: Außentemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | Außentemperatursensor, Plausibilität: Außentemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA4B | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA51 | Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x10BA53 | Ladelufttemperatursensor 2, Kaltstart: Sammelfehler | 0 |
| 0x10BA54 | Ladelufttemperatursensor 2: Sammelfehler | 0 |
| 0x10C004 | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10C104 | Ladelufttemperatursensor 2: Plausibilität, Kaltstart, Temperatur zu hoch | 0 |
| 0x10C111 | Ladelufttemperatursensor 2, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10FF01 | Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem 2 | 0 |
| 0x110001 | Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem | 0 |
| 0x110101 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110102 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110104 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110108 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110201 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110202 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110204 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110208 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110301 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110302 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110304 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110308 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110401 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110402 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110404 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110408 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110501 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110502 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110504 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110508 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110601 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110602 | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110604 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110608 | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110701 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110702 | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110704 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110708 | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110801 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110802 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110804 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110808 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x111030 | Injektor Zylinder 1, Stromanstieg: zu langsam | 0 |
| 0x111031 | Injektor Zylinder 2, Stromanstieg: zu langsam | 0 |
| 0x111032 | Injektor Zylinder 4, Stromanstieg: zu langsam | 0 |
| 0x111033 | Injektor Zylinder 3, Stromanstieg: zu langsam | 0 |
| 0x111034 | Injektor Zylinder 5, Stromanstieg: zu langsam | 0 |
| 0x111035 | Injektor Zylinder 7, Stromanstieg: zu langsam | 0 |
| 0x111036 | Injektor Zylinder 8, Stromanstieg: zu langsam | 0 |
| 0x111037 | Injektor Zylinder 6, Stromanstieg: zu langsam | 0 |
| 0x111110 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft | 0 |
| 0x111112 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel | 0 |
| 0x111114 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation gestört | 0 |
| 0x112101 | Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112104 | Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112201 | Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112204 | Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112301 | Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112304 | Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112401 | Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112404 | Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112501 | Injektor Zylinder 5, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112504 | Injektor Zylinder 5, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112601 | Injektor Zylinder 7, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112604 | Injektor Zylinder 7, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112701 | Injektor Zylinder 8, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112704 | Injektor Zylinder 8, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112801 | Injektor Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112804 | Injektor Zylinder 6, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x113025 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus | 0 |
| 0x113026 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse | 0 |
| 0x113027 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung | 0 |
| 0x113035 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung 2: Kurzschluss nach Plus | 0 |
| 0x113036 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung 2: Kurzschluss nach Masse | 0 |
| 0x113037 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung 2: Leitungsunterbrechung | 0 |
| 0x114101 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu mager | 0 |
| 0x114102 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu fett | 0 |
| 0x114202 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 7: Gemisch zu fett | 0 |
| 0x114302 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett | 0 |
| 0x114402 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 6: Gemisch zu fett | 0 |
| 0x114501 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 5: Gemisch zu mager | 0 |
| 0x114502 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 5: Gemisch zu fett | 0 |
| 0x114602 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett | 0 |
| 0x114702 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 8: Gemisch zu fett | 0 |
| 0x114802 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett | 0 |
| 0x117120 | Kleinstmengenadaption, Injektor Zylinder 1: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117121 | Kleinstmengenadaption, Injektor Zylinder 1: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117123 | Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117124 | Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117125 | Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117126 | Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117127 | Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung: Fehlfunktion | 0 |
| 0x117128 | Kleinstmengenadaption, Injektor Zylinder 1, Plausibilität: Signal unplausibel | 0 |
| 0x117220 | Kleinstmengenadaption, Injektor Zylinder 3: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117221 | Kleinstmengenadaption, Injektor Zylinder 3: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117223 | Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117224 | Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117225 | Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117226 | Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117227 | Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung: Fehlfunktion | 0 |
| 0x117228 | Kleinstmengenadaption, Injektor Zylinder 3, Plausibilität: Signal unplausibel | 0 |
| 0x117320 | Kleinstmengenadaption, Injektor Zylinder 4: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117321 | Kleinstmengenadaption, Injektor Zylinder 4: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117323 | Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117324 | Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117325 | Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117326 | Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117327 | Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung: Fehlfunktion | 0 |
| 0x117328 | Kleinstmengenadaption, Injektor Zylinder 4, Plausibilität: Signal unplausibel | 0 |
| 0x117337 | Kleinstmengenadaption, Injektor Zylinder 8: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117338 | Kleinstmengenadaption, Injektor Zylinder 8: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117339 | Kleinstmengenadaption, Injektor Zylinder 8, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117340 | Kleinstmengenadaption, Injektor Zylinder 8, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117341 | Kleinstmengenadaption, Injektor Zylinder 8, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117342 | Kleinstmengenadaption, Injektor Zylinder 8, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117343 | Kleinstmengenadaption, Injektor Zylinder 8, Signalerkennung: Fehlfunktion | 0 |
| 0x117344 | Kleinstmengenadaption, Injektor Zylinder 8, Plausibilität: Signal unplausibel | 0 |
| 0x117353 | Kleinstmengenadaption, Injektor Zylinder 7: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117354 | Kleinstmengenadaption, Injektor Zylinder 7: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117355 | Kleinstmengenadaption, Injektor Zylinder 7, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117356 | Kleinstmengenadaption, Injektor Zylinder 7, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117357 | Kleinstmengenadaption, Injektor Zylinder 7, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117358 | Kleinstmengenadaption, Injektor Zylinder 7, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117359 | Kleinstmengenadaption, Injektor Zylinder 7, Signalerkennung: Fehlfunktion | 0 |
| 0x117360 | Kleinstmengenadaption, Injektor Zylinder 7, Plausibilität: Signal unplausibel | 0 |
| 0x117420 | Kleinstmengenadaption, Injektor Zylinder 2: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117421 | Kleinstmengenadaption, Injektor Zylinder 2: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117423 | Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117424 | Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117425 | Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117426 | Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117427 | Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung: Fehlfunktion | 0 |
| 0x117428 | Kleinstmengenadaption, Injektor Zylinder 2, Plausibilität: Signal unplausibel | 0 |
| 0x117520 | Kleinstmengenadaption, Injektor Zylinder 5: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117521 | Kleinstmengenadaption, Injektor Zylinder 5: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117523 | Kleinstmengenadaption, Injektor Zylinder 5, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117524 | Kleinstmengenadaption, Injektor Zylinder 5, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117525 | Kleinstmengenadaption, Injektor Zylinder 5, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117526 | Kleinstmengenadaption, Injektor Zylinder 5, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117527 | Kleinstmengenadaption, Injektor Zylinder 5, Signalerkennung: Fehlfunktion | 0 |
| 0x117528 | Kleinstmengenadaption, Injektor Zylinder 5, Plausibilität: Signal unplausibel | 0 |
| 0x117620 | Kleinstmengenadaption, Injektor Zylinder 6: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117621 | Kleinstmengenadaption, Injektor Zylinder 6: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117623 | Kleinstmengenadaption, Injektor Zylinder 6, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117624 | Kleinstmengenadaption, Injektor Zylinder 6, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117625 | Kleinstmengenadaption, Injektor Zylinder 6, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117626 | Kleinstmengenadaption, Injektor Zylinder 6, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117627 | Kleinstmengenadaption, Injektor Zylinder 6, Signalerkennung: Fehlfunktion | 0 |
| 0x117628 | Kleinstmengenadaption, Injektor Zylinder 6, Plausibilität: Signal unplausibel | 0 |
| 0x118010 | Gemischregelung, bankübergreifend: Gemisch zu mager | 0 |
| 0x118011 | Gemischregelung, bankübergreifend: Gemisch zu fett | 0 |
| 0x118020 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118021 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118030 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1, Kopplung: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118031 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1, Kopplung: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118110 | Gemischregelung 2, bankübergreifend: Gemisch zu mager | 0 |
| 0x118111 | Gemischregelung 2, bankübergreifend: Gemisch zu fett | 0 |
| 0x118120 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118121 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118130 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2, Kopplung: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118131 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2, Kopplung: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118401 | Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118501 | Gemischregelung 2: Gemisch zu mager, große Abweichung | 0 |
| 0x118502 | Gemischregelung 2: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118701 | Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118702 | Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x119001 | Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119011 | Raildrucksensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x119012 | Raildrucksensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x119101 | Raildrucksensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119102 | Raildrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119111 | Raildrucksensor 2, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x119112 | Raildrucksensor 2, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x119201 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119202 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119208 | Kraftstoffniederdrucksensor, Signal: festliegend | 0 |
| 0x119211 | Kraftstoffniederdrucksensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x119212 | Kraftstoffniederdrucksensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x119218 | Kraftstoffniederdrucksensor, Signal, Kopplung: festliegend | 0 |
| 0x119304 | Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119308 | Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119314 | Raildrucksensor 2, Plausibilität, Kopplung: Druck zu hoch vor Motorstart | 0 |
| 0x119318 | Raildrucksensor 2, Plausibilität, Kopplung: Druck zu niedrig vor Motorstart | 0 |
| 0x119404 | Raildrucksensor, Signal: festliegend | 0 |
| 0x119414 | Raildrucksensor 2, Signal, Kopplung: festliegend | 0 |
| 0x119504 | Raildrucksensor 2, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119508 | Raildrucksensor 2, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119514 | Raildrucksensor, Plausibilität, Kopplung: Druck zu hoch vor Motorstart | 0 |
| 0x119518 | Raildrucksensor, Plausibilität, Kopplung: Druck zu niedrig vor Motorstart | 0 |
| 0x119604 | Raildrucksensor 2, Signal: festliegend | 0 |
| 0x119614 | Raildrucksensor, Signal, Kopplung: festliegend | 0 |
| 0x119F01 | Kraftstoffhochdruck 2 bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11A001 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch | 0 |
| 0x11A002 | Kraftstoffhochdruck, Plausibilität: Druck zu niedrig | 0 |
| 0x11A101 | Kraftstoffhochdruck 2, Plausibilität: Druck zu hoch | 0 |
| 0x11A102 | Kraftstoffhochdruck 2, Plausibilität: Druck zu niedrig | 0 |
| 0x11A204 | Kraftstoffniederdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x11A401 | Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11A701 | Raildrucksensor, Plausibilität: Druck zu niedrig | 0 |
| 0x11A702 | Raildrucksensor, Plausibilität: Druck zu hoch | 0 |
| 0x11A801 | Raildrucksensor 2, Plausibilität: Druck zu hoch | 0 |
| 0x11A802 | Raildrucksensor 2, Plausibilität: Druck zu niedrig | 0 |
| 0x11AA06 | Kraftstoffhochdrucksystem, Hochdruckpumpe, Mengensteuerventil: Anschlag erreicht | 0 |
| 0x11AA07 | Kraftstoffhochdrucksystem, Hochdruckpumpe 2, Mengensteuerventil: Anschlag erreicht | 0 |
| 0x11AC01 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11AC12 | Kraftstoffhochdruck, Plausibilität, Kaltstart, Kopplung: Druck zu niedrig | 0 |
| 0x11AD01 | Kraftstoffhochdruck 2, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AD02 | Kraftstoffhochdruck 2, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11B401 | Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B501 | Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11B701 | Kraftstoffhochdruck 2 bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B801 | Kraftstoffhochdruck 2 nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11C301 | Mengensteuerventil 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C302 | Mengensteuerventil 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C304 | Mengensteuerventil 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C311 | Mengensteuerventil 2, Ansteuerung, Kopplung: Kurzschluss nach Plus | 0 |
| 0x11C312 | Mengensteuerventil 2, Ansteuerung, Kopplung: Kurzschluss nach Masse | 0 |
| 0x11C314 | Mengensteuerventil 2, Ansteuerung, Kopplung: Leitungsunterbrechung | 0 |
| 0x11C401 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C411 | Mengensteuerventil, Ansteuerung, Kopplung: Kurzschluss nach Plus | 0 |
| 0x11C412 | Mengensteuerventil, Ansteuerung, Kopplung: Kurzschluss nach Masse | 0 |
| 0x11C414 | Mengensteuerventil, Ansteuerung, Kopplung: Leitungsunterbrechung | 0 |
| 0x11CF30 | Gemischregelung: Sammelfehler | 0 |
| 0x11CF31 | Gemischregelung 2: Sammelfehler | 0 |
| 0x120208 | Ladedruckregelung, Plausibilität: Druck zu hoch | 0 |
| 0x120218 | Ladedruckregelung, Plausibilität, Kopplung: Druck zu hoch | 0 |
| 0x120308 | Ladedruckregelung, Plausibilität: Druck zu niedrig | 0 |
| 0x120318 | Ladedruckregelung, Plausibilität, Kopplung: Druck zu niedrig | 0 |
| 0x120408 | Ladedruckregelung: Abschaltung als Folgereaktion | 0 |
| 0x120418 | Ladedruckregelung, Abschaltung, Kopplung: Druckaufbau gesperrt | 0 |
| 0x120608 | Ladedruckregelung 2, Plausibilität: Druck zu hoch | 0 |
| 0x120618 | Ladedruckregelung 2, Plausibilität, Kopplung: Druck zu hoch | 0 |
| 0x120708 | Ladedruckregelung 2, Plausibilität: Druck zu niedrig | 0 |
| 0x120718 | Ladedruckregelung 2, Plausibilität, Kopplung: Druck zu niedrig | 0 |
| 0x120908 | Ladedruckregelung 2: Abschaltung als Folgereaktion | 0 |
| 0x120918 | Ladedruckregelung 2, Abschaltung, Kopplung: Druckaufbau gesperrt | 0 |
| 0x120F12 | Auslassnockenwellensensor 2, Plausibilität: Muster ungültig | 0 |
| 0x121001 | Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121101 | Ladedrucksensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121102 | Ladedrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121201 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121202 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121301 | Ladedrucksensor 2, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121302 | Ladedrucksensor 2, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121521 | Ladedrucksensor: Sammelfehler | 0 |
| 0x121522 | Ladedrucksensor 2: Sammelfehler | 0 |
| 0x12152E | Ladedruck 2, Arbeitsbereich: Druck zu hoch | 0 |
| 0x12152F | Ladedruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x121530 | Ladedruck, Plausibilität: Druck zu hoch | 0 |
| 0x121531 | Ladedruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121532 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch | 0 |
| 0x121533 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig | 0 |
| 0x121540 | Ladedruck 2, Plausibilität: Druck zu hoch | 0 |
| 0x121541 | Ladedruck 2, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121542 | Ladedruck 2 - Umgebungsdruck 2, Vergleich: Ladedruck zu hoch | 0 |
| 0x121543 | Ladedruck 2 - Umgebungsdruck 2, Vergleich: Ladedruck zu niedrig | 0 |
| 0x123001 | Wastegate, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123002 | Wastegate, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123004 | Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123101 | Wastegate 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123102 | Wastegate 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123104 | Wastegate 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123201 | Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123211 | Wastegate, Ansteuerung, Kopplung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123301 | Wastegate 2, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123311 | Wastegate 2, Ansteuerung, Kopplung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x128008 | Lambdasonden vor Katalysator, Montage: vertauscht | 0 |
| 0x128101 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128201 | Lambdasonde vor Katalysator 2, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128401 | Lambdasonde vor Katalysator 2, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128901 | Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128A02 | Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128C01 | Lambdasonde vor Katalysator 2: Falschluft erkannt | 0 |
| 0x128E01 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x128E03 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichswiderstandsleitung | 0 |
| 0x128E05 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Abgleichswiderstandsleitung | 0 |
| 0x128F01 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x129001 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129101 | Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129102 | Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129A20 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A008 | Lambdasonden nach Katalysator, Montage: vertauscht | 0 |
| 0x12A101 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A102 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A201 | Lambdasonde nach Katalysator 2, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A202 | Lambdasonde nach Katalysator 2, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A308 | Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A408 | Lambdasonde nach Katalysator 2, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A801 | Lambdasonde nach Katalysator 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AA02 | Lambdasonde nach Katalysator 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AC04 | Lambdasonde nach Katalysator 2, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AD01 | Lambdasonde nach Katalysator: Signal festliegend auf Mager | 0 |
| 0x12AE01 | Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12AF01 | Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12AF08 | Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12AF10 | Lambdasonde nach Katalysator, im Schub, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12AF11 | Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12AF20 | Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12AF21 | Lambdasonde nach Katalysator, im Schub, Fett: Signal festliegend | 0 |
| 0x12B001 | Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B008 | Lambdasonde nach Katalysator 2, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B010 | Lambdasonde nach Katalysator 2, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12B011 | Lambdasonde nach Katalysator 2, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B020 | Lambdasonde nach Katalysator 2: Signal festliegend auf Fett | 0 |
| 0x12B021 | Lambdasonde nach Katalysator 2: Signal festliegend auf Mager | 0 |
| 0x12B101 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B201 | Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B202 | Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B204 | Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B401 | Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B402 | Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B404 | Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B505 | Lambdasondenbeheizung vor Katalysator, Funktion: Heizerfehler | 0 |
| 0x12B506 | Lambdasondenbeheizung vor Katalysator 2, Funktion: Heizerfehler | 0 |
| 0x12B701 | Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12B801 | Lambdasondenbeheizung nach Katalysator 2, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BB01 | Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12BC01 | Lambdasonde nach Katalysator 2, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12BD52 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD54 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD61 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD80 | Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BD81 | Lambdasonde vor Katalysator 2: Sammelfehler | 0 |
| 0x12BE08 | Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x12BF08 | Lambdasonde nach Katalysator 2, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x130001 | VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130002 | VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130004 | VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130104 | VANOS, Einlass: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130108 | VANOS, Einlass: Regelfehler, Position nicht erreicht | 0 |
| 0x130201 | VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130202 | VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130204 | VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130304 | VANOS, Auslass: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130308 | VANOS, Auslass: Regelfehler, Position nicht erreicht | 0 |
| 0x130401 | VANOS-Magnetventil Einlass 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130402 | VANOS-Magnetventil Einlass 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130404 | VANOS-Magnetventil Einlass 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130504 | VANOS, Einlass 2: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130508 | VANOS, Einlass 2: Regelfehler, Position nicht erreicht | 0 |
| 0x130601 | VANOS-Magnetventil Auslass 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130602 | VANOS-Magnetventil Auslass 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130604 | VANOS-Magnetventil Auslass 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130704 | VANOS, Auslass 2: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130708 | VANOS, Auslass 2: Regelfehler, Position nicht erreicht | 0 |
| 0x130E11 | Einlassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130E12 | Einlassnockenwellensensor 2, Plausibilität: Muster ungültig | 0 |
| 0x130E20 | Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130E21 | Einlassnockenwelle 2: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | Auslassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130F20 | Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F21 | Auslassnockenwelle 2: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x131601 | VANOS, Auslass 2, Kaltstart: nicht regelbar | 0 |
| 0x131701 | VANOS, Einlass 2, Kaltstart: nicht regelbar | 0 |
| 0x131808 | VANOS, Auslass, Kaltstart: Position nicht erreicht | 0 |
| 0x131908 | VANOS, Einlass, Kaltstart: Position nicht erreicht | 0 |
| 0x132101 | VANOS, Auslass: Sammelfehler | 0 |
| 0x132102 | VANOS 2, Auslass: Sammelfehler | 0 |
| 0x132201 | VANOS, Einlass: Sammelfehler | 0 |
| 0x132202 | VANOS 2, Einlass: Sammelfehler | 0 |
| 0x132301 | VANOS: Sammelfehler | 0 |
| 0x132302 | VANOS 2: Sammelfehler | 0 |
| 0x132408 | VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132508 | VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132608 | VANOS, Auslass 2: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132708 | VANOS, Einlass 2: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132808 | VANOS, Auslass 2, Kaltstart: Position nicht erreicht | 0 |
| 0x132908 | VANOS, Einlass 2, Kaltstart: Position nicht erreicht | 0 |
| 0x133010 | Valvetronic-Stellmotor, Ansteuerung: Fehlfunktion | 0 |
| 0x133011 | Valvetronic, Versorgungsspannung: Fehlfunktion | 0 |
| 0x133012 | Valvetronic-Stellmotor 2, Ansteuerung: Fehlfunktion | 0 |
| 0x133013 | Valvetronic 2, Versorgungsspannung: Fehlfunktion | 0 |
| 0x133101 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133206 | Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x133304 | Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133305 | Valvetronic 2: Bauteileschutz, Abschaltung System | 0 |
| 0x133710 | Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133711 | Valvetronic 2, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133B04 | Valvetronic System: keine Verstellung möglich | 0 |
| 0x133E10 | Valvetronic System: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x133E20 | Valvetronic System 2: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x134A02 | Valvetronic-Stellmotor: Überlastung | 0 |
| 0x134F01 | Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 1 |
| 0x135302 | Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System | 0 |
| 0x135401 | Valvetronic: Endstufe überlastet | 0 |
| 0x135403 | Valvetronic 2: Endstufe überlastet | 0 |
| 0x135501 | Valvetronic: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135502 | Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135605 | Valvetronic 2: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135608 | Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135705 | Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135706 | Valvetronic System: unterer Anschlag gelernt | 0 |
| 0x135715 | Valvetronic System 2: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135716 | Valvetronic System 2: unterer Anschlag gelernt | 0 |
| 0x135808 | Valvetronic-Stellmotor, Positionssensoren, elektrisch: Fehlfunktion | 0 |
| 0x135908 | Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x135A08 | Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x135A10 | Valvetronic-Stellmotor, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135A11 | Valvetronic-Stellmotor 2, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135B10 | Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x135D01 | Valvetronic-Stellmotor 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x135D02 | Valvetronic-Stellmotor 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x135D06 | Valvetronic-Stellmotor 2, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x135E01 | Valvetronic 2, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x135E02 | Valvetronic 2, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x135E04 | Valvetronic 2, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x135E08 | Valvetronic 2, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x135E10 | Valvetronic 2, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 0 |
| 0x135F02 | Valvetronic-Stellmotor 2: Bauteileschutz, Abschaltung System | 0 |
| 0x136002 | Valvetronic-Stellmotor 2: Überlastung | 0 |
| 0x136102 | Valvetronic-Stellmotor 2: Warnschwelle Überlastschutz überschritten | 0 |
| 0x136204 | Valvetronic System 2: keine Verstellung möglich | 0 |
| 0x136208 | Valvetronic System 2: keine Bewegung erkannt | 0 |
| 0x136304 | Valvetronic System 2: Warnschwelle Regelabweichung überschritten | 0 |
| 0x136408 | Valvetronic-Stellmotor 2, Positionssensoren, elektrisch: Fehlfunktion | 0 |
| 0x136508 | Valvetronic-Stellmotor 2, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x136608 | Valvetronic-Stellmotor 2, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x136711 | Valvetronic-Stellmotor 2, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x136712 | Valvetronic-Stellmotor 2, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x136713 | Valvetronic-Stellmotor 2, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x136714 | Valvetronic-Stellmotor 2, Positionssensoren: Überlauf erkannt | 0 |
| 0x136715 | Valvetronic-Stellmotor 2, Positionssensoren, Plausibilität: Feinhallsignale zueinander unplausibel | 0 |
| 0x136801 | Valvetronic-Relais 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x136802 | Valvetronic-Relais 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x136804 | Valvetronic-Relais 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138101 | Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138A01 | Abgasklappe 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138A02 | Abgasklappe 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138A04 | Abgasklappe 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x139001 | Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x140001 | Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140010 | Verbrennungsaussetzer, mehrere Zylinder: erkannt | 0 |
| 0x140011 | Verbrennungsaussetzer: Einspritzabschaltung | 0 |
| 0x140012 | Verbrennungsaussetzer, Kopplung: Einspritzabschaltung | 0 |
| 0x140020 | Verbrennungsaussetzer, mehrere Zylinder, Kopplung: erkannt | 0 |
| 0x140101 | Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140110 | Verbrennungsaussetzer, Zylinder 1: erkannt | 0 |
| 0x140201 | Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140210 | Verbrennungsaussetzer, Zylinder 2: erkannt | 0 |
| 0x140301 | Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140310 | Verbrennungsaussetzer, Zylinder 3: erkannt | 0 |
| 0x140401 | Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140410 | Verbrennungsaussetzer, Zylinder 4: erkannt | 0 |
| 0x140501 | Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140510 | Verbrennungsaussetzer, Zylinder 5: erkannt | 0 |
| 0x140601 | Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x140610 | Verbrennungsaussetzer, Zylinder 6: erkannt | 0 |
| 0x140701 | Verbrennungsaussetzer, Zylinder 7: Einspritzung wird abgeschaltet | 0 |
| 0x140702 | Verbrennungsaussetzer, Zylinder 7: abgasschädigend nach Startvorgang | 0 |
| 0x140704 | Verbrennungsaussetzer, Zylinder 7: abgasschädigend | 0 |
| 0x140710 | Verbrennungsaussetzer, Zylinder 7: erkannt | 0 |
| 0x140801 | Verbrennungsaussetzer, Zylinder 8: Einspritzung wird abgeschaltet | 0 |
| 0x140802 | Verbrennungsaussetzer, Zylinder 8: abgasschädigend nach Startvorgang | 0 |
| 0x140804 | Verbrennungsaussetzer, Zylinder 8: abgasschädigend | 0 |
| 0x140810 | Verbrennungsaussetzer, Zylinder 8: erkannt | 0 |
| 0x144010 | Zündung, Zylinder 4: Brenndauer außerhalb Toleranz | 0 |
| 0x144011 | Zündung, Zylinder 8: Brenndauer außerhalb Toleranz | 0 |
| 0x144012 | Zündung, Zylinder 3: Brenndauer außerhalb Toleranz | 0 |
| 0x144013 | Zündung, Zylinder 6: Brenndauer außerhalb Toleranz | 0 |
| 0x144014 | Zündung, Zylinder 7: Brenndauer außerhalb Toleranz | 0 |
| 0x144015 | Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x144016 | Zündung, Zylinder 8: Brenndauer zu kurz | 0 |
| 0x144017 | Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x144018 | Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x144019 | Zündung, Zylinder 7: Brenndauer zu kurz | 0 |
| 0x14401A | Superklopfen Zylinder 4: Einspritzabschaltung | 0 |
| 0x14401B | Superklopfen Zylinder 8: Einspritzabschaltung | 0 |
| 0x14401C | Superklopfen Zylinder 3: Einspritzabschaltung | 0 |
| 0x14401D | Superklopfen Zylinder 6: Einspritzabschaltung | 0 |
| 0x14401E | Superklopfen Zylinder 7: Einspritzabschaltung | 0 |
| 0x14401F | Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung | 0 |
| 0x144020 | Superklopfen Zylinder 8: dauerhafte Einspritzabschaltung | 0 |
| 0x144021 | Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung | 0 |
| 0x144022 | Superklopfen Zylinder 6: dauerhafte Einspritzabschaltung | 0 |
| 0x144023 | Superklopfen Zylinder 7: dauerhafte Einspritzabschaltung | 0 |
| 0x144024 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett | 0 |
| 0x144025 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 8: Gemisch zu fett | 0 |
| 0x144026 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett | 0 |
| 0x144027 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 6: Gemisch zu fett | 0 |
| 0x144028 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett | 0 |
| 0x144029 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 7: Gemisch zu fett | 0 |
| 0x14402A | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu mager | 0 |
| 0x14402B | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 8: Gemisch zu mager | 0 |
| 0x14402C | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu mager | 0 |
| 0x14402D | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 6: Gemisch zu mager | 0 |
| 0x14402E | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu mager | 0 |
| 0x14402F | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 7: Gemisch zu mager | 0 |
| 0x144030 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144031 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144032 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144033 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144034 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144035 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144036 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144037 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144038 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144039 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14403A | Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403B | Injektor Zylinder 8, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403C | Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403D | Injektor Zylinder 6, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403E | Injektor Zylinder 7, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403F | Injektor Zylinder 4, Stromanstieg: zu langsam | 0 |
| 0x144040 | Injektor Zylinder 8, Stromanstieg: zu langsam | 0 |
| 0x144041 | Injektor Zylinder 3, Stromanstieg: zu langsam | 0 |
| 0x144042 | Injektor Zylinder 6, Stromanstieg: zu langsam | 0 |
| 0x144043 | Injektor Zylinder 7, Stromanstieg: zu langsam | 0 |
| 0x144044 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144045 | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144046 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144047 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144048 | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144049 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404A | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404B | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404C | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404D | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404E | Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x14404F | Injektor Zylinder 8, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144050 | Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144051 | Injektor Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144052 | Injektor Zylinder 7, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144053 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu mager: Sammelfehler | 0 |
| 0x144054 | Zylinderindividuelle Gemischüberwachung über Laufunruhe 2,  Gemisch zu mager: Sammelfehler | 0 |
| 0x144055 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu fett: Sammelfehler | 0 |
| 0x144056 | Zylinderindividuelle Gemischüberwachung über Laufunruhe 2, Gemisch zu fett: Sammelfehler | 0 |
| 0x150102 | Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150402 | Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150502 | Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | Zündung, Zylinder 7: Brenndauer zu kurz | 0 |
| 0x150702 | Zündung, Zylinder 8: Brenndauer zu kurz | 0 |
| 0x150802 | Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x150C11 | Zündung, Zylinder 1: Brenndauer außerhalb Toleranz | 0 |
| 0x150C12 | Zündung, Zylinder 2: Brenndauer außerhalb Toleranz | 0 |
| 0x150C13 | Zündung, Zylinder 4: Brenndauer außerhalb Toleranz | 0 |
| 0x150C14 | Zündung, Zylinder 3: Brenndauer außerhalb Toleranz | 0 |
| 0x150C15 | Zündung, Zylinder 5: Brenndauer außerhalb Toleranz | 0 |
| 0x150C16 | Zündung, Zylinder 7: Brenndauer außerhalb Toleranz | 0 |
| 0x150C17 | Zündung, Zylinder 8: Brenndauer außerhalb Toleranz | 0 |
| 0x150C18 | Zündung, Zylinder 6: Brenndauer außerhalb Toleranz | 0 |
| 0x151001 | Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151201 | Zündwinkelverstellung 2 im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151301 | Zündwinkelverstellung 2 in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus | 0 |
| 0x152007 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse | 0 |
| 0x152008 | Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152010 | Zündkreis, Versorgungsspannung: Bankausfall 2 oder Motorausfall | 0 |
| 0x152021 | Relais Zündung und Injektoren, Versorgungsspannung Zündung 2: Kurzschluss nach Plus | 0 |
| 0x152022 | Relais Zündung und Injektoren, Versorgungsspannung Zündung 2: Kurzschluss nach Masse | 0 |
| 0x152108 | Superklopfen Zylinder 1: Einspritzabschaltung | 0 |
| 0x152118 | Superklopfen Zylinder 1: dauerhafte Einspritzabschaltung | 0 |
| 0x152208 | Superklopfen Zylinder 2: Einspritzabschaltung | 0 |
| 0x152218 | Superklopfen Zylinder 2: dauerhafte Einspritzabschaltung | 0 |
| 0x152308 | Superklopfen Zylinder 4: Einspritzungsabschaltung | 0 |
| 0x152318 | Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung | 0 |
| 0x152408 | Superklopfen Zylinder 3: Einspritzungsabschaltung | 0 |
| 0x152418 | Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung | 0 |
| 0x152508 | Superklopfen Zylinder 5: Einspritzungsabschaltung | 0 |
| 0x152518 | Superklopfen Zylinder 5: dauerhafte Einspritzabschaltung | 0 |
| 0x152608 | Superklopfen Zylinder 7: Einspritzungsabschaltung | 0 |
| 0x152618 | Superklopfen Zylinder 7: dauerhafte Einspritzabschaltung | 0 |
| 0x152708 | Superklopfen Zylinder 8: Einspritzabschaltung | 0 |
| 0x152718 | Superklopfen Zylinder 8: dauerhafte Einspritzabschaltung | 0 |
| 0x152808 | Superklopfen Zylinder 6: Einspritzabschaltung | 0 |
| 0x152818 | Superklopfen Zylinder 6: dauerhafte Einspritzabschaltung | 0 |
| 0x152D08 | Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160021 | Kurbelwellensensor: allgemeiner Synchronisationsverlust | 0 |
| 0x160510 | Kurbelwellensensor [Plausibilität]: Impulsbreite unplausibel | 0 |
| 0x164020 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164021 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164022 | Einlassnockenwellensensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164023 | Einlassnockenwellensensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164030 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164031 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164032 | Auslassnockenwellensensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164033 | Auslassnockenwellensensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164040 | Einlassnockenwelle: Montage fehlerhaft | 0 |
| 0x164041 | Auslassnockenwelle: Montage fehlerhaft | 0 |
| 0x164042 | Einlassnockenwelle 2: Montage fehlerhaft | 0 |
| 0x164043 | Auslassnockenwelle 2: Montage fehlerhaft | 0 |
| 0x168001 | Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168101 | Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168201 | Klopfsensor 3, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168202 | Klopfsensor 3, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168301 | Klopfsensor 4, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168302 | Klopfsensor 4, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168A20 | Klopfregelung: Systemfehler | 0 |
| 0x168A21 | Klopfregelung 2: Systemfehler | 0 |
| 0x168A30 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A90 | Klopfsensor 3, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A91 | Klopfsensor 3, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168B10 | Klopfsensor 3, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168B11 | Klopfsensor 3, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168B20 | Klopfsensor 4, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168B21 | Klopfsensor 4, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168B30 | Klopfsensor 4, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168B31 | Klopfsensor 4, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x180001 | Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180101 | Katalysator 2: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x190302 | Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
| 0x190303 | Tankentlüftungs- und Spülluftsystem, Feinstleck, Kopplung: Leckage größer 0,5 mm | 1 |
| 0x190F08 | Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191001 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191401 | Tankentlüftungsventil 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191402 | Tankentlüftungsventil 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191404 | Tankentlüftungsventil 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191A21 | Tankentlüftungsventil: klemmt offen | 0 |
| 0x191A22 | Tankentlüftungsventil 2: klemmt offen | 0 |
| 0x191A32 | Tankentlüftungsventil 2, Kopplung: klemmt offen | 0 |
| 0x191D01 | Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191E08 | Tankentlüftungssystem 2: Fehlfunktion | 0 |
| 0x191E31 | Tankentlüftungssystem, Kopplung: Fehlfunktion | 0 |
| 0x191E32 | Tankentlüftungssystem 2, Kopplung: Fehlfunktion | 0 |
| 0x193001 | Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193002 | Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193008 | Kraftstoff-Füllstandsgeber, links, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193101 | Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193102 | Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193108 | Kraftstoff-Füllstandsgeber, rechts, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193208 | Tankfüllstand, Plausibilität: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193218 | Tankfüllstandssensor: Signal unplausibel wegen festhängendem Tankfüllstandsgeber | 0 |
| 0x193A20 | Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
| 0x194001 | Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu niedrig | 0 |
| 0x194002 | Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu hoch | 0 |
| 0x194004 | Tankleckagemodul, Temperatur, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x194101 | Tankleckagemodul, Temperatursensor, Signaländerung: zu schnell | 0 |
| 0x194201 | Tankleckagemodul, Zeitgeber: Fehlfunktion | 0 |
| 0x194202 | Tankleckagemodul, Zeitgeber, Kopplung: Fehlfunktion | 0 |
| 0x194301 | Tankleckagemodul, Eigendiagnose: Fehlfunktion | 0 |
| 0x194401 | Tankleckagemodul, Kommunikation: gestört | 0 |
| 0x194402 | Tankleckagemodul, Kommunikation, Kopplung: gestört | 0 |
| 0x194501 | Tankleckagemodul, Kommunikation: Fehlfunktion | 0 |
| 0x194502 | Tankleckagemodul, Kommunikation. Kopplung: Fehlfunktion | 0 |
| 0x194601 | Tankleckagemodul, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194602 | Tankleckagemodul, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194603 | Tankleckagemodul, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x194604 | Tankleckagemodul, elektrisch: Leitungsunterbrechung | 0 |
| 0x194605 | Tankleckagemodul, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x194606 | Tankleckagemodul, elektrisch, Kopplung: Leitungsunterbrechung | 0 |
| 0x194701 | Tankleckagemodul, Druckschalter: klemmt | 0 |
| 0x194702 | Tankleckagemodul, Druckschalter, Kopplung: klemmt | 0 |
| 0x194801 | Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194802 | Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194803 | Tankleckagemodul, Druckschalter, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x194804 | Tankleckagemodul, Druckschalter, elektrisch: Leitungsunterbrechung | 0 |
| 0x194805 | Tankleckagemodul, Druckschalter, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x194806 | Tankleckagemodul, Druckschalter, elektrisch, Kopplung: Leitungsunterbrechung | 0 |
| 0x1A2001 | Elektrolüfter, Ansteuerleitung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | Elektrolüfter, Ansteuerleitung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | Elektrolüfter, Ansteuerleitung: Leitungsunterbrechung | 0 |
| 0x1A2108 | Elektrolüfter, Eigendiagnose Stufe 1: leichter Lüfterfehler | 0 |
| 0x1A2308 | Elektrolüfter, Eigendiagnose Stufe 2: Lüfterfehler mit potentieller Gefährdung für den Lüfter | 0 |
| 0x1A2408 | Elektrolüfter, Eigendiagnose Stufe 3: Lüfterfehler mit Motorfunktionseinschränkung | 0 |
| 0x1A2508 | Elektrolüfter, Eigendiagnose Stufe 4: schwerer Lüfterfehler | 0 |
| 0x1A2601 | Sicherungsrelais Elektrolüfter, Ansteuerleitung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | Sicherungsrelais Elektrolüfter, Ansteuerleitung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | Sicherungsrelais Elektrolüfter, Ansteuerleitung: Leitungsunterbrechung | 0 |
| 0x1A2804 | Elektrolüfter, Betriebsbereitschaft: eingeschränkt | 0 |
| 0x1A2904 | Elektrolüfter, Betriebsbereitschaft: nicht gegeben | 0 |
| 0x1B0808 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A20 | Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 0 |
| 0x1B0A60 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel | 0 |
| 0x1B0A61 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel | 0 |
| 0x1B0A62 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A64 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 0 |
| 0x1B0A65 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 0 |
| 0x1B0A66 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 0 |
| 0x1B0A67 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 0 |
| 0x1B2001 | EWS-Manipulationsschutz: Motorlauf durch EWS gesperrt | 0 |
| 0x1B2002 | EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | EWS Manipulationsschutz: Antwort unplausibel | 0 |
| 0x1B2101 | Schnittstelle EWS-DME: Hardwarefehler | 0 |
| 0x1B2102 | Schnittstelle EWS-DME: Framefehler | 0 |
| 0x1B2104 | Schnittstelle EWS-DME: Zeitüberschreitung | 0 |
| 0x1B2109 | Schnittstelle EWS-DME: Empfangsfehler CAS Schnittstelle | 0 |
| 0x1B2201 | DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2208 | DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2209 | DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key | 0 |
| 0x1B2301 | FlexRay, Botschaft (EWS Information FEM, 103.1.4): fehlt | 0 |
| 0x1B2302 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 0 |
| 0x1B2304 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 0 |
| 0x1B2904 | Funktionsfreischaltung, Geschwindigkeitsbegrenzung: Code ungültig | 0 |
| 0x1B2B01 | FlexRay, Botschaft (EWS Response Master, 251.0.8): Framefehler | 0 |
| 0x1B2B02 | FlexRay, Botschaft (EWS Response Master, 251.0.8): fehlt | 0 |
| 0x1B2B04 | FlexRay, Botschaft EWS-DME: Framefehler | 0 |
| 0x1B5101 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5202 | Klemme 15N_1: keine Spannung | 0 |
| 0x1B5302 | Klemme 15N_2: keine Spannung | 0 |
| 0x1B5402 | Klemme 15N_3: keine Spannung | 0 |
| 0x1B6008 | Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B9508 | Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf | 0 |
| 0x1B9702 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf | 0 |
| 0x1B9804 | Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf | 0 |
| 0x1B9A02 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf | 0 |
| 0x1B9B01 | Motorabstellzeit: Sammelfehler | 0 |
| 0x1BC004 | Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1BC101 | Nullgangsensor, Plausibilität: Signal unplausibel | 0 |
| 0x1BC108 | Nullgangsensor, Plausibilität: Position unplausibel | 0 |
| 0x1BC110 | Nullgangsensor, Signal: Tastverhältnis zu hoch | 0 |
| 0x1BC111 | Nullgangsensor, Signal: Tastverhältnis zu niedrig | 0 |
| 0x1BC112 | Nullgangsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BC113 | Nullgangsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BC114 | Nullgangsensor, Signal: Periodendauer außerhalb gültigem Bereich | 0 |
| 0x1BD401 | Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD402 | Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD404 | Raddrehzahlsensor hinten/links, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD408 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD501 | Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD502 | Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD504 | Raddrehzahlsensor vorn/links, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD508 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD601 | Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD602 | Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD604 | Raddrehzahlsensor hinten/rechts, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD608 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1BD701 | Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD702 | Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD704 | Raddrehzahlsensor vorn/rechts, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD708 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1C3108 | Motoröldrucksensor, Signal: festliegend | 0 |
| 0x1C3204 | Motoröldruckschalter: Leitungsunterbrechung oder Schalter klemmt | 0 |
| 0x1C4002 | Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | Ölzustandssensor: Fehlfunktion | 0 |
| 0x1C4116 | Ölzustand, Status Niveau: Fehlfunktion | 0 |
| 0x1C4117 | Ölzustand, Status Permittivität: Fehlfunktion | 0 |
| 0x1C4118 | Ölzustandssensor, Status Temperatur: Fehlfunktion | 0 |
| 0x1C4119 | Motoröltemperatursensor, elektrisch: Fehlfunktion | 0 |
| 0x1C5A20 | BSD, Kommunikation (Ölzustandssensor): fehlt | 0 |
| 0x1D2008 | Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2401 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3001 | Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung leicht geschädigt | 0 |
| 0x1D3101 | Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung geschädigt | 0 |
| 0x1D3201 | Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung stark geschädigt | 0 |
| 0x1D3211 | Kupplungstemperatur: Warnschwellenwert 1 ohne Schädigung überschritten | 1 |
| 0x1D3212 | Kupplungstemperatur: Warnschwellenwert 2 ohne Schädigung überschritten | 1 |
| 0x1D3301 | Drehzahlsensor Getriebe, Signal: Periodendauer zu groß | 0 |
| 0x1D3302 | Drehzahlsensor Getriebe: nicht angesteckt | 0 |
| 0x1D3304 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich: Drehzahl Getriebe zu hoch | 0 |
| 0x1D3308 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich: Drehzahlunterschied zu groß | 0 |
| 0x1D3311 | Drehzahlsensor Getriebe, Signal, Kopplung: Periodendauer zu groß | 0 |
| 0x1D3312 | Drehzahlsensor Getriebe, Kopplung: nicht angesteckt | 0 |
| 0x1D3314 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich, Kopplung: Drehzahl Getriebe zu hoch | 0 |
| 0x1D3318 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich, Kopplung: Drehzahlunterschied zu groß | 0 |
| 0x1D3401 | Getriebeöltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1D3402 | Getriebeöltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1D3411 | Getriebeöltemperatursensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x1D3412 | Getriebeöltemperatursensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x1D3501 | Getriebeölpumpe, Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D3502 | Getriebeölpumpe, Relaisansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D3504 | Getriebeölpumpe, Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3508 | Getriebeölpumpe, Relais: Übertemperatur erkannt | 0 |
| 0x1D3511 | Getriebeölpumpe, Relais, Ansteuerung, Kopplung: Kurzschluss nach Plus | 0 |
| 0x1D3512 | Getriebeölpumpe, Relais, Ansteuerung, Kopplung: Kurzschluss nach Masse | 0 |
| 0x1D3514 | Getriebeölpumpe, Relais, Ansteuerung, Kopplung: Leitungsunterbrechung | 0 |
| 0x1D3518 | Getriebeölpumpe, Relais, Kopplung: Übertemperatur erkannt | 0 |
| 0x1D3601 | Getriebeölkühlung: Getriebeöltemperatur zu hoch | 0 |
| 0x1D3611 | Getriebeölkühlung, Kopplung: Getriebeöltemperatur zu hoch | 0 |
| 0x1D3808 | Kupplungsschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1D3810 | Kupplungsschalter: Positionen zueinander unplausibel | 0 |
| 0x1D3901 | EGS, Signalüberwachung (Drehzahl_Getriebestrang_Turbine): Signalausfall oder ungültiger Signalinhalt | 1 |
| 0x1D3A01 | Kommunikation: Signal (Drehzahl_Getriebestrang_Abtrieb) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0x1D3B01 | EGS, Signalüberwachung (Status_Gangwahl_Antrieb): Signalausfall oder ungültiger Signalinhalt | 1 |
| 0x1D3C01 | Kommunikation: Signal (Status_Schaltung_Aktiv_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig | 1 |
| 0x1D3D01 | Getriebeöltemperatursensor, Signal: festliegend | 0 |
| 0x1D3D11 | Getriebeöltemperatursensor, Signal, Kopplung: festliegend | 0 |
| 0x1E0001 | Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E0108 | Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel | 0 |
| 0x1E0115 | Leerlaufregelung, Kaltstart: Drehzahländerung nicht plausibel | 0 |
| 0x1E0308 | Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel | 0 |
| 0x1E4001 | Sport-Taster, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1E4002 | Sport-Taster, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1E4101 | Servotronic-Taster, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1E4102 | Servotronic-Taster,  elektrisch: Kurzschluss nach Masse | 0 |
| 0x1E5201 | Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5301 | Manipulationsschutz: Motorleistung zu hoch | 0 |
| 0x1E5A20 | Antrieb, Sicherheitsfunktion: Leistungsreduzierung durch Sicherheitskonzept | 0 |
| 0x1F050E | Valvetronic 2, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F050F | Valvetronic 2, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0514 | Valvetronic, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F0515 | Valvetronic, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0516 | Antrieb, Sicherheitsfunktion: AD-Wandler Leerlauftestimpulsprüfung | 0 |
| 0x1F0517 | Antrieb, Sicherheitsfunktion: AD-Wandler Testspannungsprüfung | 0 |
| 0x1F0518 | DME, interner Fehler, Sicherheitsfunktion: Luftmengenabgleich | 0 |
| 0x1F0519 | Antrieb, Sicherheitsfunktion: Fahrpedalmodul oder Pedalwertgeber unplausibel | 0 |
| 0x1F0520 | Antrieb, Sicherheitsfunktion: Drehzahlgeber unplausibel | 0 |
| 0x1F0521 | DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung der Gemischkorrekturfaktoren | 0 |
| 0x1F0522 | DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 1 | 0 |
| 0x1F0523 | Antrieb, Sicherheitsfunktion: Sicherheitsabschaltung Einspritzung | 0 |
| 0x1F0524 | DME, interner Fehler, Sicherheitsfunktion: Lambda-Sollwert | 0 |
| 0x1F0525 | DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung relative Kraftstoffmasse | 0 |
| 0x1F0526 | DME, interner Fehler, Sicherheitsfunktion: Momentenvergleich | 0 |
| 0x1F0527 | DME, interner Fehler, Sicherheitsfunktion: Antriebstrangübersetzungsverhältnis unplausibel | 0 |
| 0x1F0528 | Antrieb, Sicherheitsfunktion: Getriebevariante unplausibel | 0 |
| 0x1F0529 | DME, interner Fehler, Sicherheitsfunktion: Zündwinkelüberwachung | 0 |
| 0x1F0530 | Antrieb, Sicherheitsfunktion: Abschaltpfad-Test negativ | 0 |
| 0x1F0531 | DME, interner Fehler, Sicherheitsfunktion: Plausiblisierung Kraftstoffmasse | 0 |
| 0x1F0532 | DME, interner Fehler, Überwachung MSC-Kommunikation: Fehlfunktion an Baustein R2S2/1 | 0 |
| 0x1F0534 | DME, interner Fehler, Master/Slave Überwachung, Sicherheitsfunktion: A-CAN Kommunikation | 0 |
| 0x1F0535 | Antrieb, Sicherheitsfunktion: Master/Slave Überwachung: FlexRay Kommunikation | 0 |
| 0x1F0536 | DME, interner Fehler, Master/Slave Überwachung, Sicherheitsfunktion: Master Identifizierung | 0 |
| 0x1F0537 | DME, interner Fehler, Master/Slave Überwachung, Sicherheitsfunktion: Anforderung Einspritzabschaltung vom Master | 0 |
| 0x1F053B | DME, interner Fehler, Sicherheitsfunktion: Momentenanforderung unplausibel | 0 |
| 0x1F0904 | DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F0905 | DME, interner Fehler, Valvetronic: Strom unplausibel | 0 |
| 0x1F0906 | DME, interner Fehler, Valvetronic: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1401 | DME, interner Fehler, MSA-Überwachung: fehlerhafte Berechnung | 0 |
| 0x1F1A40 | DME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x1F1A50 | DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A51 | DME, interner Fehler: Lesen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A70 | DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x1F1A71 | DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x1F1A80 | DME, interner Fehler, Watchdog-Ausgang: Fehlfunktion | 0 |
| 0x1F1A81 | DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation | 0 |
| 0x1F1A82 | DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung | 0 |
| 0x1F1A90 | Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A91 | Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A92 | Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1AA0 | DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA1 | DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA2 | DME, interner Fehler: Software-Reset | 0 |
| 0x1F1B40 | Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F1B41 | Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F1B42 | Startaggregat Ritzelstarter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F2102 | Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt | 0 |
| 0x1F2104 | DME, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt | 0 |
| 0x1F2108 | DME, falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2112 | Funktionsfreischaltung, Leistungserhöhung 2: nicht erfolgt | 0 |
| 0x1F2601 | DME, Kodierung: fehlt | 0 |
| 0x1F2604 | DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2701 | DME, Kodierung: Schreibfehler | 0 |
| 0x1F2702 | DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2704 | DME, Kodierung: Daten unplausibel | 0 |
| 0x1F2805 | DME, Software: falsch programmiert | 0 |
| 0x1F2A01 | DME Slave, Kodierung: fehlt | 0 |
| 0x1F2A04 | DME Slave, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2B01 | DME Slave, Kodierung: Schreibfehler | 0 |
| 0x1F2B02 | DME Slave, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2B04 | DME Slave, Kodierung: Daten unplausibel | 0 |
| 0x1F2C04 | DME Slave, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt | 0 |
| 0x1F2C08 | DME Slave, Falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F4A01 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F4D10 | DME, interner Fehler, Ansteuerung Mengensteuerventil: Fehlfunktion | 0 |
| 0x1F5020 | DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | DME Temperatur: Übertemperatur | 0 |
| 0x1F5110 | DME, Kühlung: Übertemperatur erkannt | 0 |
| 0x1FB001 | Powermanagement: Transportüberwachung Ladezustand Batterie OK | 0 |
| 0x1FB101 | Powermanagement: Batterie obere Startfähigkeitsgrenze unterschritten | 0 |
| 0x1FB201 | Check-Control-Meldung (ID 257): Motor zu heiß! Gemäßigt fahren | 0 |
| 0x1FB301 | Check-Control-Meldung (ID 39): Motor überhitzt. Vorsichtig halten | 0 |
| 0x1FB401 | Check-Control-Meldung (ID 367): Antrieb gemäßigt fahren | 0 |
| 0x1FB402 | Check-Control-Meldung (ID 257): Motor zu heiß. Gemäßigt fahren | 0 |
| 0x1FB501 | Check-Control-Meldung (ID 27): Motoröl nachfüllen | 0 |
| 0x1FB601 | Check-Control-Meldung (ID 450): Auto Start Stop Funktion deaktiviert | 0 |
| 0x1FB701 | Check-Control-Meldung (ID 397): Auto Start Stop Funktion ausgefallen | 0 |
| 0x1FB801 | Check-Control-Meldung (ID 212): Motoröldruck. Vorsichtig anhalten | 0 |
| 0x1FB901 | Check-Control-Meldung (ID 278): Niedrigen Gang wählen | 0 |
| 0x1FBA01 | Check-Control-Meldung (ID 32): Tankverschluss offen | 0 |
| 0x1FBB01 | Check-Control-Meldung (ID 567): Motorlüfter. Gemäßigt fahren | 0 |
| 0x1FBC01 | Check-Control-Meldung (ID 584): Transport-Modus | 0 |
| 0x1FBE01 | Check-Control-Meldung (ID 70): Lenkung. Gemäßigt fahren | 0 |
| 0x200711 | DME, interner Fehler, Überwachung Istmoment: maximaler Fehler bankübergreifender Momentenvergleich | 0 |
| 0x200D04 | DME, interner Fehler, Überwachung Sendesignale: Fahrpedal unplausibel | 0 |
| 0x200F11 | DME, interner Fehler, Überwachung Sendesignale: Ist-Radmoment unplausibel | 0 |
| 0x200F12 | DME, interner Fehler, Überwachung Sendesignale: koordiniertes Radmoment unplausibel | 0 |
| 0x200F13 | DME, interner Fehler, Überwachung Sendesignale: Verlustmoment unplausibel | 0 |
| 0x200F14 | DME, interner Fehler, Überwachung Sendesignale: Verstärkung Antriebsstrang unplausibel | 0 |
| 0x200F15 | DME, interner Fehler, Überwachung Sendesignale: Status Schnittstelle Fahrerassistenzsystem unplausibel | 0 |
| 0x200F16 | DME, interner Fehler, Überwachung Sendesignale: Statuswort Radmomentenschnittstelle unplausibel | 0 |
| 0x200F17 | DME, interner Fehler, Überwachung Sendesignale: Schleppmoment unplausibel | 0 |
| 0x200F18 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Fahrpedal unplausibel | 0 |
| 0x200F19 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Ist-Radmoment unplausibel | 0 |
| 0x200F20 | DME, interner Fehler, erweiterte Überwachung Sendesignale: koordiniertes Radmoment unplausibel | 0 |
| 0x200F21 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Verlustmoment unplausibel | 0 |
| 0x200F22 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Verstärkung Antriebsstrang unplausibel | 0 |
| 0x200F23 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Schnittstelle Fahrerassistenzsystem unplausibel | 0 |
| 0x200F24 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Qualifier Radmomentenschnittstelle unplausibel | 0 |
| 0x200F25 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Schleppmoment unplausibel | 0 |
| 0x200F26 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Motorlauf unplausibel | 0 |
| 0x200F27 | DME, interner Fehler, Überwachung Sendesignale: Drehzahl Hinterachse unplausibel | 0 |
| 0x200F28 | DME, interner Fehler, Überwachung Sendesignale: Fahrtrichtungswunsch unplausibel | 0 |
| 0x200F29 | DME, interner Fehler, Überwachung Sendesignale: Motorstatus unplausibel | 0 |
| 0x200F2A | DME, interner Fehler, Überwachung Sendesignale: Status Kraftschluss Antriebsstrang unplausibel | 0 |
| 0x200F2B | DME, interner Fehler, erweiterte Überwachung Sendesignale: Drehzahl Hinterachse unplausibel | 0 |
| 0x200F2C | DME, interner Fehler, erweiterte Überwachung Sendesignale: Fahrtrichtungswunsch unplausibel | 0 |
| 0x200F2D | DME, interner Fehler, erweiterte Überwachung Sendesignale: Motorstatus unplausibel | 0 |
| 0x200F2E | DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Kraftschluss Antriebsstrang unplausibel | 0 |
| 0x201004 | CBS-Client: Ausgabe von Ersatzwert | 0 |
| 0x201010 | A- / FA-CAN Hardware: defekt | 0 |
| 0x201020 | FlexRay Hardware: defekt | 0 |
| 0x201101 | DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x201201 | DME Slave, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A001 | Ladeluft-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A011 | Ladeluft-Kühlsystem: Drehzahl Kühlmittelpumpe 2 außerhalb der Toleranz | 0 |
| 0x20A101 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A102 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A104 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A111 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe 2 wegen Übertemperatur | 0 |
| 0x20A112 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe 2 wegen Überspannung | 0 |
| 0x20A114 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe 2 wegen Blockierung | 0 |
| 0x20A201 | Ladeluft-Kühlsystem: Schutzfunktion Kühlmittelpumpe wegen Trockenlauf aktiv | 1 |
| 0x20A202 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A204 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A208 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20A211 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe 2 erkannt | 0 |
| 0x20A212 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe 2 zu niedrig | 0 |
| 0x20A214 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe 2 Temperaturschwelle 1 überschritten | 0 |
| 0x20A218 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe 2 Temperaturschwelle 2 überschritten | 0 |
| 0x20A501 | Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20A502 | Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20A504 | Turbolader-Kühlmittelpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20A608 | Turbolader-Kühlmittelpumpe, Ansteuerung: Pumpe blockiert | 0 |
| 0x20A610 | Turbolader-Kühlmittelpumpe: blockiert | 0 |
| 0x20A611 | Turbolader-Kühlmittelpumpe, Rückmeldeleitung: Kurzschluss | 0 |
| 0x20A701 | Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A801 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A901 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x20A902 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20BA20 | Kupplungsschalter, Signal: fehlt | 0 |
| 0x20E102 | Kurbelgehäuseentlüftung, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x20E120 | Kurbelgehäuseentlüftung, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x20E121 | Kurbelgehäuseentlüftung 2, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x20E202 | Kurbelgehäuseentlüftung 2, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x210201 | Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | Generator, Temperatur: Übertemperatur | 1 |
| 0x210601 | Generator, mechanisch: Fehlfunktion | 0 |
| 0x210801 | Generator: Typ falsch | 0 |
| 0x210C01 | Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211A21 | BSD-Bus: Kommunikationsfehler | 0 |
| 0x211F01 | Generator/Startergenerator: Kodierung fehlt | 0 |
| 0x211F03 | Generator/Startergenerator: Kodierung oder Programmstand falsch | 0 |
| 0x213301 | Powermanagement: zentrale Überspannung | 1 |
| 0x213401 | Powermanagement: zentrale Unterspannung | 1 |
| 0x213501 | Powermanagement: Batterie Tiefentladung | 1 |
| 0x213601 | Powermanagement: Ruhestromverletzung | 0 |
| 0x213701 | Powermanagement: Batterieloser Betrieb | 1 |
| 0x213801 | Powermanagement: Transportüberwachung Ladezustand Batterie tiefentladen | 1 |
| 0x213901 | Powermanagement: Verbraucherreduzierung aktiv | 1 |
| 0x213A01 | Powermanagement: Transportüberwachung Ladezustand Batterie entladen | 1 |
| 0x213A20 | Bordnetzspannung, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x213A21 | Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x213B01 | Batteriezustandserkennung: Batterie defekt | 0 |
| 0x213C01 | Batteriezustandserkennung: Batterie tiefentladen | 0 |
| 0x215001 | Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 |
| 0x215101 | Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215104 | Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215108 | Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215701 | Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 |
| 0x215801 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 |
| 0x216002 | MSA, Überwachung: Zeitüberschreitung | 0 |
| 0x216104 | MSA, Überwachung: Startverzögerung | 0 |
| 0x216110 | Startaggregat Ritzelstarter: Anzahl MSA-Reflexstarts überschritten | 0 |
| 0x216111 | Startaggregat Ritzelstarter: Anzahl Motorstarts überschritten | 0 |
| 0x218001 | Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion | 0 |
| 0x218201 | Batterieladeeinheit, Sekundäre Batterie: defekt | 0 |
| 0x218301 | Batterieladeeinheit: Fehler im Trennelement/Kabelbaum | 0 |
| 0x218401 | Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x218402 | Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x218404 | Startspannungswandler/Startergenerator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x21A001 | Montagemode: aktiv | 0 |
| 0x21A023 | Verbrennungsmotor: Fehlstart oder Motor ausgegangen ohne Fahrereinfluss | 0 |
| 0x21A210 | Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 0 |
| 0x21A310 | Notlauf 1: Sammelfehler für DME Kopplung | 0 |
| 0x21A311 | Notlauf 1, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A320 | Notlauf 1, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A321 | Notlauf 1, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A330 | Notlauf 2: Sammelfehler für DME Kopplung | 0 |
| 0x21A331 | Notlauf 2, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A340 | Notlauf 2, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A341 | Notlauf 2, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A350 | Notlauf 3: Sammelfehler für DME Kopplung | 0 |
| 0x21A351 | Notlauf 3, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A360 | Notlauf 3, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A361 | Notlauf 3, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A370 | Notlauf 4: Sammelfehler für DME Kopplung | 0 |
| 0x21A371 | Notlauf 4, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A372 | Notlauf 5: Sammelfehler für DME Kopplung | 0 |
| 0x21A373 | Notlauf 5, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A380 | Notlauf 4, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A381 | Notlauf 4, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A382 | Notlauf 5, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A383 | Notlauf 5, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A411 | Pannendatenspeicher, Messwert: Adresse Messkanal ungültig | 0 |
| 0x21A412 | Pannendatenspeicher: Konfigurierter Speicherbedarf überschreitet gültigen Bereich | 0 |
| 0x21A413 | Pannendatenspeicher: Applikation zur Laufzeit geändert oder CRC Kollision mit dem Footer möglich | 0 |
| 0x21A414 | Pannendatenspeicher, Messwert: Speicherbereich ungültig | 0 |
| 0x21A415 | Pannendatenspeicher, Messwert: Speicherbereich überschritten | 0 |
| 0x21A416 | Pannendatenspeicher: Sammelfehler | 0 |
| 0x21A417 | Pannendatenspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A418 | Pannendatenspeicher, Header: Adresse  Messkanal ungültig | 0 |
| 0x21A419 | Pannendatenspeicher, Header: Speicherbereich ungültig | 0 |
| 0x21A41A | Pannendatenspeicher, Header: Speicherbereich überschritten | 0 |
| 0x21A430 | Langzeitqualitätsspeicher: Sammelfehler | 0 |
| 0x21A431 | Langzeitqualitätsspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A432 | Langzeitqualitätsspeicher, Messwert: Adresse ungültig | 0 |
| 0x21A433 | Langzeitqualitätsspeicher: Applikation zur Laufzeit geändert oder CRC Kollision mit dem Footer möglich | 0 |
| 0x21A434 | Langzeitqualitätsspeicher, Messwert: Speicherbereich überschritten | 0 |
| 0x21A435 | DME: interner Fehler [Software, TripRec - Gen. Trigger, Messwert: Adresse Messkanal ungültig] | 0 |
| 0x21A436 | DME: interner Fehler [Software, TripRec - Gen. Trigger: Parameteränderung zur Laufzeit] | 0 |
| 0x22FEA8 | APPMaxRngErrSnsr1_C | 0 |
| 0x22FEA9 | APPMaxRngErrSnsr2_C | 0 |
| 0x22FEAA | APPMinRngErrSnsr1_C | 0 |
| 0x22FEAB | APPMinRngErrSnsr2_C | 0 |
| 0x230008 | Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231501 | Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231A01 | Raddrehzahl, Kommunikation: gestört | 0 |
| 0x231A11 | Raddrehzahl, Kommunikation: gestört | 0 |
| 0x231F04 | A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x232004 | A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 1 |
| 0x239000 | Private-CAN Bus: Kommunikationsfehler | 1 |
| 0x239002 | Private-CAN, Botschaft (10ms Task): Prüfsumme falsch | 0 |
| 0x239003 | Private-CAN, Botschaft (100ms Task): Prüfsumme falsch | 0 |
| 0x239101 | Private-CAN, Botschaft (Segment Task): fehlt | 0 |
| 0x239102 | Private-CAN, Botschaft (10ms Task): fehlt | 0 |
| 0x239103 | Private-CAN, Botschaft (100ms Task): fehlt | 0 |
| 0x239210 | Private-CAN, Botschaft (segmentsynchron, von Master): fehlt | 0 |
| 0x239211 | Private-CAN, Botschaft (segmentsynchron, von Slave): fehlt | 0 |
| 0x239212 | Private-CAN, Botschaft (10ms Task, von Master): Prüfsumme falsch | 0 |
| 0x239213 | Private-CAN, Botschaft (10ms Task, von Master): fehlt | 0 |
| 0x239214 | Private-CAN, Botschaft (10ms Task, von Slave): Prüfsumme falsch | 0 |
| 0x239215 | Private-CAN, Botschaft (10ms Task,von Slave): fehlt | 0 |
| 0x239216 | Private-CAN, Botschaft (100ms Task, von Master): Prüfsumme falsch | 0 |
| 0x239217 | Private-CAN, Botschaft (100ms Task, von Master): fehlt | 0 |
| 0x239218 | Private-CAN, Botschaft (100ms Task, von Slave): Prüfsumme falsch | 0 |
| 0x239219 | Private-CAN, Botschaft (100ms Task, von Slave): fehlt | 0 |
| 0xCD840A | FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD841F | FlexRay Bus: Leitungsfehler | 1 |
| 0xCD8420 | FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8430 | FlexRay Bus: Kommunikationsfehler nach FlexRay Wake-up | 0 |
| 0xCD8440 | Private-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | A-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8801 | FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCD8B02 | FlexRay, Botschaft (Diagnose OBD 1, 263.3.4): Aliveprüfung | 0 |
| 0xCD8B04 | FlexRay, Botschaft (Diagnose OBD 1, 263.3.4): fehlt | 0 |
| 0xCD8BFF | Netzwerkfehler: nur zum Test | 0 |
| 0xCD8E10 | LIN Bus: Kommunikationsfehler | 1 |
| 0xCD8E11 | LIN, Kommunikation (Ladeeinheit für Zusatzbatterie): fehlt | 0 |
| 0xCD8E12 | LIN, Kommunikation (Generator): fehlt | 0 |
| 0xCD8F01 | LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD9001 | LIN, Kommunikation (Ladeluft-Kühlmittelpumpe): fehlt | 1 |
| 0xCD9402 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9432 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: fehlt | 1 |
| 0xCD9435 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 1 |
| 0xCD9437 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD945A | FlexRay, Botschaft (EWS Response Master, 251.0.8): Framefehler | 1 |
| 0xCD945B | FlexRay, Botschaft (EWS Response Master, 251.0.8): fehlt | 1 |
| 0xCD945C | FlexRay, Botschaft (EWS Challenge Slave, 251.4.8): Framefehler | 1 |
| 0xCD9502 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCD9508 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9632 | FlexRay, Botschaft (Status Servotronic, 241.0.2): Aliveprüfung | 1 |
| 0xCD9634 | FlexRay, Botschaft (Status Servotronic, 241.0.2): fehlt | 1 |
| 0xCD9702 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9710 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik 2, 272.4.8): fehlt | 1 |
| 0xCD9711 | FlexRay, Botschaft (Steuerung Diagnose OBD Fahrdynamik, 247.0.2): fehlt | 0 |
| 0xCD9902 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Aliveprüfung | 1 |
| 0xCD9933 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): fehlt | 1 |
| 0xCD9934 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Prüfsumme falsch | 1 |
| 0xCD9A02 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9A10 | FlexRay, Botschaft (Status Kontakt handbremse, 243.1.2): fehlt | 0 |
| 0xCD9B02 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Aliveprüfung | 1 |
| 0xCD9B04 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): fehlt | 1 |
| 0xCD9B08 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Prüfsumme falsch | 1 |
| 0xCD9D02 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9D04 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9D08 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9E02 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9E04 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9E08 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9F02 | FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Aliveprüfung | 1 |
| 0xCD9F04 | FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): fehlt | 1 |
| 0xCD9F08 | FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Prüfsumme falsch | 1 |
| 0xCDA002 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Aliveprüfung | 1 |
| 0xCDA004 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 1 |
| 0xCDA008 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Prüfsumme falsch | 1 |
| 0xCDA102 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xCDA104 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xCDA108 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xCDA302 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA321 | FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): Signalfehler | 1 |
| 0xCDA322 | FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): fehlt | 1 |
| 0xCDA323 | FlexRay, Botschaft (Nav-Graph 2 Route Beschreibung, 253.0.8 ): fehlt | 1 |
| 0xCDA324 | FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4 ): fehlt | 1 |
| 0xCDA402 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA421 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA426 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA428 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Aliveprüfung | 1 |
| 0xCDA429 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Prüfsumme falsch | 1 |
| 0xCDA435 | FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA461 | FlexRay, Botschaft (Kopplung 1 Slave Antrieb, 42.0.2): Aliveprüfung | 1 |
| 0xCDA462 | FlexRay, Botschaft (Kopplung 1 Slave Antrieb, 42.0.2): Prüfsumme falsch | 1 |
| 0xCDA463 | FlexRay, Botschaft (Kopplung 1 Slave Antrieb, 42.0.2): fehlt | 1 |
| 0xCDA471 | FlexRay, Botschaft (Kopplung 2 Slave Antrieb, 114.1.2): Aliveprüfung | 1 |
| 0xCDA472 | FlexRay, Botschaft (Kopplung 2 Slave Antrieb, 114.1.2): Prüfsumme falsch | 1 |
| 0xCDA473 | FlexRay, Botschaft (Kopplung 2 Slave Antrieb, 114.1.2): fehlt | 1 |
| 0xCDA474 | FlexRay, Botschaft (Kopplung 3 Slave Antrieb, 114.0.2): Aliveprüfung | 1 |
| 0xCDA475 | FlexRay, Botschaft (Kopplung 3 Slave Antrieb, 114.0.2): Prüfsumme falsch | 1 |
| 0xCDA476 | FlexRay, Botschaft (Kopplung 3 Slave Antrieb, 114.0.2): fehlt | 1 |
| 0xCDA481 | FlexRay, Botschaft (Kopplung 4 Slave Antrieb, 45.0.2): Aliveprüfung | 1 |
| 0xCDA482 | FlexRay, Botschaft (Kopplung 4 Slave Antrieb, 45.0.2): Prüfsumme falsch | 1 |
| 0xCDA483 | FlexRay, Botschaft (Kopplung 4 Slave Antrieb, 45.0.2): fehlt | 1 |
| 0xCDA491 | FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCDA492 | FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCDA493 | FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCDA494 | FlexRay, Botschaft (Soll Bremsmoment Summe Koordiniert, 63.1.4): fehlt | 1 |
| 0xCDA495 | FlexRay, Botschaft (Kopplung 5 Slave Antrieb, 32.0.2): Aliveprüfung | 1 |
| 0xCDA496 | FlexRay, Botschaft (Kopplung 5 Slave Antrieb, 32.0.2): Prüfsumme falsch | 1 |
| 0xCDA497 | FlexRay, Botschaft (Kopplung 5 Slave Antrieb, 32.0.2): fehlt | 1 |
| 0xCDA512 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Aliveprüfung | 1 |
| 0xCDA514 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xCDA518 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Prüfsumme falsch | 1 |
| 0xCDA519 | FA-CAN, Botschaft (Status Energie Spannung Strom, 0x399): fehlt | 0 |
| 0xCDA524 | FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDA525 | FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Signalfehler | 1 |
| 0xCDA67F | Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 1 |
| 0xCDA702 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDAB04 | FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAE04 | FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB204 | FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB302 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Aliveprüfung | 1 |
| 0xCDB304 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB308 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Prüfsumme falsch | 1 |
| 0xCDB404 | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB904 | FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBA04 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA09 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): Signalfehler | 1 |
| 0xCDBB02 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBE02 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBF04 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDC004 | A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC208 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC304 | A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDC310 | A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Signalfehler | 1 |
| 0xCDC401 | FA-CAN, Botschaft (Steuerung Anzeige M-Systeme, 0xDE): fehlt | 1 |
| 0xCDC402 | FA-CAN, Botschaft (Steuerung Anzeige M-Systeme, 0xDE): Aliveprüfung | 1 |
| 0xCDC405 | FA-CAN, Botschaft (Status Energie Spannung Strom, 0x399): fehlt | 1 |
| 0xCDC40A | FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCDC41F | FlexRay Bus: Leitungsfehler | 1 |
| 0xCDC420 | FlexRay Bus: Kommunikationsfehler | 1 |
| 0xCDC430 | FlexRay Bus: Kommunikationsfehler nach FlexRay Wake-up | 0 |
| 0xCDC486 | A-CAN Bus: Kommunikationsfehler | 1 |
| 0xCDC801 | FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCDCBFF | Netzwerkfehler: nur zum Test | 0 |
| 0xCDCC21 | LIN, Kommunikation (Ladeluft-Kühlmittelpumpe 2): fehlt | 1 |
| 0xCDCC40 | LIN Bus 2: Kommunikationsfehler | 1 |
| 0xCDD435 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 0 |
| 0xCDD45A | FlexRay, Botschaft (EWS Response Master, 251.0.8): Framefehler | 1 |
| 0xCDD45B | FlexRay, Botschaft (EWS Response Master, 251.0.8): fehlt | 1 |
| 0xCDD513 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): fehlt | 1 |
| 0xCDD613 | FlexRay, Botschaft (Radmoment Antrieb 1, 41.3.4): fehlt | 1 |
| 0xCDD631 | FlexRay, Botschaft (Status M-Drive 2, 266.1.8): Aliveprüfung | 1 |
| 0xCDD632 | FlexRay, Botschaft (Status M-Drive 2, 266.1.8): fehlt | 1 |
| 0xCDD713 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): fehlt | 1 |
| 0xCDDA10 | FlexRay, Botschaft (Status Kontakt handbremse, 243.1.2): fehlt | 0 |
| 0xCDE411 | FlexRay, Botschaft (Kopplung 1 Master Antrieb, 41.0.2): Aliveprüfung | 1 |
| 0xCDE412 | FlexRay, Botschaft (Kopplung 1 Master Antrieb, 41.0.2): Prüfsumme falsch | 1 |
| 0xCDE413 | FlexRay, Botschaft (Kopplung 1 Master Antrieb, 41.0.2): fehlt | 1 |
| 0xCDE421 | FlexRay, Botschaft (Kopplung 2 Master Antrieb, 113.0.2): Aliveprüfung | 1 |
| 0xCDE422 | FlexRay, Botschaft (Kopplung 2 Master Antrieb, 113.0.2): Prüfsumme falsch | 1 |
| 0xCDE423 | FlexRay, Botschaft (Kopplung 2 Master Antrieb, 113.0.2): fehlt | 1 |
| 0xCDE424 | FlexRay, Botschaft (Kopplung 3 Master Antrieb, 113.1.2): Aliveprüfung | 1 |
| 0xCDE425 | FlexRay, Botschaft (Kopplung 3 Master Antrieb, 113.1.2): Prüfsumme falsch | 1 |
| 0xCDE426 | FlexRay, Botschaft (Kopplung 3 Master Antrieb, 113.1.2): fehlt | 1 |
| 0xCDE431 | FlexRay, Botschaft (Kopplung 4 Master Antrieb, 61.0.2): Aliveprüfung | 1 |
| 0xCDE432 | FlexRay, Botschaft (Kopplung 4 Master Antrieb, 61.0.2): Prüfsumme falsch | 1 |
| 0xCDE433 | FlexRay, Botschaft (Kopplung 4 Master Antrieb, 61.0.2): fehlt | 1 |
| 0xCDE434 | FlexRay, Botschaft (Kopplung 5 Master Antrieb High, 75.0.2): Aliveprüfung | 1 |
| 0xCDE435 | FlexRay, Botschaft (Kopplung 5 Master Antrieb High, 75.0.2): Prüfsumme falsch | 1 |
| 0xCDE436 | FlexRay, Botschaft (Kopplung 5 Master Antrieb High, 75.0.2): fehlt | 1 |
| 0xCDE804 | FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDF404 | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDF504 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDF602 | FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDF604 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDF608 | FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDFA04 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDFB02 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDFB04 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDFB08 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCE0102 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCE0104 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCE0108 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCE0202 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCE0204 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCE0208 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FSCTYP1

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | SWT Classic light |
| 0x02 | SWT Classic full |
| 0x03 | SWT pre-enable light |
| 0x04 | SWT pre-enable full |
| 0x05 | SWT short |
| 0xFF | unbekannt |

### FSCTYP1RET

| WERT | TEXT |
| --- | --- |
| 0x00 | FSC nicht auslesen |
| 0x01 | FSC retten |
| 0xFF | unbekannt |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5800 | Zeitzähler ab Startende | s | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5.0 | 1.0 | 0.0 |
| 0x5802 | CARB FREEZE FRAME Byte, Bank 1, für LR | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x580B | Saugrohr-Absolutdruck | hPa | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1.25 | 1.0 | 0.0 |
| 0x580E | Zündwinkel Zylinder 1 | ° KW | - | signed char | - | 0.75 | 1.0 | 0.0 |
| 0x580F | Ansaugluft-Temperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5810 | Aktualität Minimumwarnung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5811 | Motoroelniveau | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5812 | Massenstrom HFM | kg/h | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5813 | relative Luftfüllung | % | - | unsigned char | - | 0.75 | 1.0 | 0.0 |
| 0x5814 | Normierter Fahrpedalwinkel | % | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0.0942 | 1.0 | 0.0 |
| 0x5816 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5818 | Luftmassenfluß | kg/h | - | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x5819 | Motordrehzahl [1/min] | 1/min | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x581A | Winkel Einlassventil oeffnet bezogen auf LWOT | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581B | Sollwinkel Nockenwelle Einlass öffnet | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581C | Winkel Auslassventil schließt bezogen auf LWOT | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581D | Sollwinkel Nockenwelle Auslass schließt | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581E | Ansauglufttemperatur, linearisiert und umgerechnet | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x581F | Kilometerstand bei der Erkennung Ölniveau am Minimum | km | - | unsigned int | - | 10.0 | 1.0 | 0.0 |
| 0x5820 | STATUS Klemme 15 | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x5821 | Steuergerätetemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5822 | Öltemperatur | °C | - | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x5823 | Abstellzeit | s | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5824 | Fehlerstatus E-Maschine | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5825 | Spannung von BCU gemessen | V | - | signed int | - | 0.01 | 1.0 | 0.0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned int | - | 0.00305176 | 1.0 | 0.0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0.01 | 1.0 | 0.0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed int | - | 0.00048828 | 1.0 | 0.0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | °C | - | unsigned char | - | 5.0 | 1.0 | -50.0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5832 | Zustand Motor-Koordinator | 0-n | - | 0xFF | CoEng_st_COMPU_VERB | 1.0 | 1.0 | 0.0 |
| 0x5833 | Statusbyte ON_Oelniveau | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100.0 | 1.0 | 0.0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x583A | Ansaugluft-Temperatur bei Start | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x583B | Fuellstand Kraftstofftank | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0.0942 | 1.0 | 0.0 |
| 0x583D | Betriebsstundenzähler | min | - | unsigned int | - | 6.0 | 1.0 | 0.0 |
| 0x583E | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5840 | DK-Winkel der Notluftposition | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x5841 | Temperatur Steuergerät | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5843 | Bedingung Startanforderung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | -1.0 |
| 0x584A | aktueller Generatorstatus | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned int | - | 0.00039063 | 1.0 | 0.0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned int | - | 0.02 | 1.0 | -200.0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x5854 | Batterietemperatur vom IBS | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned int | - | 0.00125 | 1.0 | 0.0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x585C | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 512.0 | 1.0 | 0.0 |
| 0x585E | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x5860 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x5862 | Sollwert Öldruck | kPa | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5863 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 0.0390625 | 1.0 | 0.0 |
| 0x5865 | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0.29296875 | 1.0 | 0.0 |
| 0x5866 | Relativer Füllstand des Motoröls | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information über CAN | km | - | unsigned int | - | 10.0 | 1.0 | 0.0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned int | - | 0.00025 | 1.0 | 6.0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 |
| 0x586E | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 |
| 0x586F | Öldruck | hPa | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5870 | Spannung Umgebungsdrucksensor | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5871 | Zaehler VVT Endstufenpruefung | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5877 | Rotorposition VVT-Motor | ° | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed int | - | 0.00003052 | 1.0 | 0.0 |
| 0x587B | Soll-Bestromung VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned int | - | 0.0001 | 1.0 | 0.0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x587E | Motortemperatur-Referenzwert aus Modell | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5882 | Motorstarttemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5883 | [0] Spannung Klopfwert Zylinder 1 (Slave 5) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5884 | Grenzerregerstrom E-Maschine 1 | A | - | unsigned char | - | 0.125 | 1.0 | 0.0 |
| 0x5885 | [2][3] Spannung Klopfwert Zylinder 3 (Slave 7) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned int | - | 0.005 | 1.0 | 0.0 |
| 0x5888 | [1] Spannung Klopfwert Zylinder 4 (Slave 8) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x588B | Zeit nach Startende | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x588C | Keramiktemperatur der LSU | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x5890 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x5892 | Differenz zwischen Umgebungsdruck und Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | - | signed int | - | 0.0390625 | 1.0 | 0.0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x5894 | [3][2] Spannung Klopfwerte Zylinder 2 (Slave 7) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x5898 | Generatorsollspannung für Komponententreiber Generator | V | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x589A | Tastverhältnis Nullgangsensor | % | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x589B | Bedingung unzulässig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x589E | Sollwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x589F | Batterietemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned int | - | 0.01820445 | 1.0 | 0.0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A6 | Rel. Exzenterwinkel | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58AC | Klemmenspannung E-Maschine | V | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | µs | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 (Slave 5) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 (Slave 8) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 (Slave 6) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 (Slave 7) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned int | - | 0.046875 | 1.0 | 0.0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0.75 | 1.0 | 0.0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58BF | Bedingung Powerfail EEPROM | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C0 | VVT-Endstufentemperatur aus Modell | °C | - | unsigned int | - | 0.75 | 1.0 | -48.0 |
| 0x58C1 | Korrigierte Segmentdauer | µs | - | unsigned long | - | 0.05 | 1.0 | 0.0 |
| 0x58C2 | Status STG Anforderung Radmoment Antriebsstrang Summe FAS | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C3 | Status STG Anforderung Drehmoment Kurbelwelle Fahrdynamik | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C4 | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C5 | Status STG ist Bremsmoment Summe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C6 | Status STG ist Lenkwinkel Vorderachse | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C7 | Status STG Status Stabilisierung DSC | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C8 | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | - | signed int | - | 0.00305176 | 1.0 | 0.0 |
| 0x58C9 | vvtmode | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58CA | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | - | signed int | - | 0.00305176 | 1.0 | 0.0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58CC | Verlustmoment Überwachung | % | - | signed int | - | 0.00305176 | 1.0 | 0.0 |
| 0x58CD | Spannung hinter VVT-Relais | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58CF | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | - | signed int | - | 0.0625 | 1.0 | 0.0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x58D1 | Abkühlung des Motors im Vergleich zum letzten Abstellen | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58D6 | Transition Time O2Sensor Lean2Rich (Sensor2) | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | % DK | - | signed int | - | 0.02441406 | 1.0 | 0.0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned int | - | 0.078125 | 1.0 | 0.0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58DF | Transition Time O2Sensor Rich2Lean (Sensor2) | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E1 | Abgleich DK-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E3 | Abgleich EV-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58E5 | [0] Gefilterte Funkenbrenndauer Zylinder 1 (Slave 5) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E6 | [1] Gefilterte Funkenbrenndauer Zylinder 4 (Slave 8) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E7 | [2] Gefilterte Funkenbrenndauer Zylinder 3 (Slave 6) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E8 | [3] Gefilterte Funkenbrenndauer Zylinder 2 (Slave 7) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E9 | empf. Spannung von Wasserpumpe | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x58EA | empf. Istdrehzahl von Wasserpumpe | 1/min | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58EB | überprüfte Umgebungstemp. vom CAN-Kombi | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58EC | empf. Temperatur von Wasserpumpe | °C | - | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x58ED | empf. Strom von Wasserpumpe | A | - | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x58EE | modellierte Umgebungstemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F1 | Zähler für unplausible fsr_w Werte | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0.01289062 | 1.0 | 0.0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed int | - | 0.00078125 | 1.0 | 0.0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58F9 | Maschinen-Typ (BSD, LIN, SGR) | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0.5 | 1.0 | 0.0 |
| 0x58FB | Delta Sondenoffset Führungsregelung | - | - | signed int | - | 0.00003052 | 1.0 | 0.0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58FE | Fehlercode SWT-Freischaltcode | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5900 | Gefiltertes zusätzlicher Sondendelay Mager-Fett, Sonde 2 | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x5901 | Gefiltertes zusätzlicher Sondendelay Fett-Mager, Sonde 2 | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x5904 | [1] IBS Status-/Fehlerbyte 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5905 | [2] IBS Status-/Fehlerbyte 2 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5906 | Solldrehzal Wasserpumpe | 1/min | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5919 | Fehlerstatus E-Maschine | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x591A | Schneller Mittelwert des Lambdareglerfaktor Koppelgröße Master Slave | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x591B | Normierter Fahrpedalwinkel Koppelgröße Master Slave | % | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x591C | Gefilterter Raildruck-Istwert (Absolutdruck) Koppelgröße Master Slave | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x591D | Solldruck Hochdrucksystem Koppelgröße Master Slave | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x591E | Relatives Moment für Aussetzererkennung Koppelgröße Master Slave | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5922 | Lambda-Istwert Bank 1 Koppelgröße über CAN | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5923 | Istwert Einlassventilhub Koppelgröße üebr CAN | mm | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x592A | Motordrehzahl, hochaufgelöst | 1/min | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x592B | Pulsbreite DGI-Sensor min | µs | - | signed long | - | 0.001 | 1.0 | 0.0 |
| 0x592C | Pulsbreite DGI-Sensor max | µs | - | signed long | - | 0.001 | 1.0 | 0.0 |
| 0x592D | KW-Winkelversatz im Motorstart | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x592E | Motorabstellposition | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x592F | Status Synchronisationsmodul | 0-n | - | 0xFF | Epm_stSync_State_t | 1.0 | 1.0 | 0.0 |
| 0x5945 | Anzahl der VVT Notläufe bis zum Tausch | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5946 | Anzahl der VVT Notläufe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5955 | Spannung hinter Inj/Ign Relais | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x5960 | Einlassventilhub | mm | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x59BD | [0] Einlass - NW Winkelversatz Feinadaption | ° KW | - | signed long | - | 0.02197266 | 1.0 | 0.0 |
| 0x59BE | [1] Auslas -NW Winkelversatz Feinadaption | ° KW | - | signed long | - | 0.02197266 | 1.0 | 0.0 |
| 0x59BF | [0] Einlass -NW Winkelversatz Referenzadaption | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x59C0 | [1 ]Auslass -NW Winkelversatz Referenzadaption | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x59C1 | Fehlerstatus KW-Signal | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x59CA | Triebstrangübersetzungsverhältnis gefiltert in der Funktionsüberwachung | - | - | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0x59CB | Übersetzungsverhältnis gesamt | - | - | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xF400 | PID 00 | TEXT | - | 4 | - | - | - | - |
| 0xF401 | PID 01 | TEXT | - | 4 | - | - | - | - |
| 0xF402 | PID 02 | TEXT | - | 2 | - | - | - | - |
| 0xF403 | PID 03 | TEXT | - | 2 | - | - | - | - |
| 0xF404 | PID 04 | TEXT | - | 1 | - | - | - | - |
| 0xF405 | PID 05 | TEXT | - | 1 | - | - | - | - |
| 0xF406 | PID 06 | TEXT | - | 1 | - | - | - | - |
| 0xF407 | PID 07 | TEXT | - | 1 | - | - | - | - |
| 0xF408 | PID 08 | TEXT | - | 1 | - | - | - | - |
| 0xF409 | PID 09 | TEXT | - | 1 | - | - | - | - |
| 0xF40A | PID 0A | TEXT | - | 1 | - | - | - | - |
| 0xF40B | PID 0B | TEXT | - | 1 | - | - | - | - |
| 0xF40C | PID 0C | TEXT | - | 2 | - | - | - | - |
| 0xF40D | PID 0D | TEXT | - | 1 | - | - | - | - |
| 0xF40E | PID 0E | TEXT | - | 1 | - | - | - | - |
| 0xF40F | PID 0F | TEXT | - | 1 | - | - | - | - |
| 0xF410 | PID 10 | TEXT | - | 2 | - | - | - | - |
| 0xF411 | PID 11 | TEXT | - | 1 | - | - | - | - |
| 0xF412 | PID 12 | TEXT | - | 1 | - | - | - | - |
| 0xF413 | PID 13 | TEXT | - | 1 | - | - | - | - |
| 0xF414 | PID 14 | TEXT | - | 2 | - | - | - | - |
| 0xF415 | PID 15 | TEXT | - | 2 | - | - | - | - |
| 0xF416 | PID 16 | TEXT | - | 2 | - | - | - | - |
| 0xF417 | PID 17 | TEXT | - | 2 | - | - | - | - |
| 0xF418 | PID 18 | TEXT | - | 2 | - | - | - | - |
| 0xF419 | PID 19 | TEXT | - | 2 | - | - | - | - |
| 0xF41A | PID 1A | TEXT | - | 2 | - | - | - | - |
| 0xF41B | PID 1B | TEXT | - | 2 | - | - | - | - |
| 0xF41C | PID 1C | TEXT | - | 1 | - | - | - | - |
| 0xF41D | PID 1D | TEXT | - | 1 | - | - | - | - |
| 0xF41E | PID 1E | TEXT | - | 1 | - | - | - | - |
| 0xF41F | PID 1F | TEXT | - | 2 | - | - | - | - |
| 0xF420 | PID 20 | TEXT | - | 4 | - | - | - | - |
| 0xF421 | PID 21 | TEXT | - | 2 | - | - | - | - |
| 0xF422 | PID 22 | TEXT | - | 2 | - | - | - | - |
| 0xF423 | PID 23 | TEXT | - | 2 | - | - | - | - |
| 0xF424 | PID 24 | TEXT | - | 4 | - | - | - | - |
| 0xF425 | PID 25 | TEXT | - | 4 | - | - | - | - |
| 0xF426 | PID 26 | TEXT | - | 4 | - | - | - | - |
| 0xF427 | PID 27 | TEXT | - | 4 | - | - | - | - |
| 0xF428 | PID 28 | TEXT | - | 4 | - | - | - | - |
| 0xF429 | PID 29 | TEXT | - | 4 | - | - | - | - |
| 0xF42A | PID 2A | TEXT | - | 4 | - | - | - | - |
| 0xF42B | PID 2B | TEXT | - | 4 | - | - | - | - |
| 0xF42C | PID 2C | TEXT | - | 1 | - | - | - | - |
| 0xF42D | PID 2D | TEXT | - | 1 | - | - | - | - |
| 0xF42E | PID 2E | TEXT | - | 1 | - | - | - | - |
| 0xF42F | PID 2F | TEXT | - | 1 | - | - | - | - |
| 0xF430 | PID 30 | TEXT | - | 1 | - | - | - | - |
| 0xF431 | PID 31 | TEXT | - | 2 | - | - | - | - |
| 0xF432 | PID 32 | TEXT | - | 2 | - | - | - | - |
| 0xF433 | PID 33 | TEXT | - | 1 | - | - | - | - |
| 0xF434 | PID 34 | TEXT | - | 4 | - | - | - | - |
| 0xF435 | PID 35 | TEXT | - | 4 | - | - | - | - |
| 0xF436 | PID 36 | TEXT | - | 4 | - | - | - | - |
| 0xF437 | PID 37 | TEXT | - | 4 | - | - | - | - |
| 0xF438 | PID 38 | TEXT | - | 4 | - | - | - | - |
| 0xF439 | PID 39 | TEXT | - | 4 | - | - | - | - |
| 0xF43A | PID 3A | TEXT | - | 4 | - | - | - | - |
| 0xF43B | PID 3B | TEXT | - | 4 | - | - | - | - |
| 0xF43C | PID 3C | TEXT | - | 2 | - | - | - | - |
| 0xF43D | PID 3D | TEXT | - | 2 | - | - | - | - |
| 0xF43E | PID 3E | TEXT | - | 2 | - | - | - | - |
| 0xF43F | PID 3F | TEXT | - | 2 | - | - | - | - |
| 0xF440 | PID 40 | TEXT | - | 4 | - | - | - | - |
| 0xF441 | PID 41 | TEXT | - | 4 | - | - | - | - |
| 0xF442 | PID 42 | TEXT | - | 2 | - | - | - | - |
| 0xF443 | PID 43 | TEXT | - | 2 | - | - | - | - |
| 0xF444 | PID 44 | TEXT | - | 2 | - | - | - | - |
| 0xF445 | PID 45 | TEXT | - | 1 | - | - | - | - |
| 0xF446 | PID 46 | TEXT | - | 1 | - | - | - | - |
| 0xF447 | PID 47 | TEXT | - | 1 | - | - | - | - |
| 0xF448 | PID 48 | TEXT | - | 1 | - | - | - | - |
| 0xF449 | PID 49 | TEXT | - | 1 | - | - | - | - |
| 0xF44A | PID 4A | TEXT | - | 1 | - | - | - | - |
| 0xF44B | PID 4B | TEXT | - | 1 | - | - | - | - |
| 0xF44C | PID 4C | TEXT | - | 1 | - | - | - | - |
| 0xF44D | PID 4D | TEXT | - | 2 | - | - | - | - |
| 0xF44E | PID 4E | TEXT | - | 2 | - | - | - | - |
| 0xF44F | PID 4F | TEXT | - | 4 | - | - | - | - |
| 0xF450 | PID 50 | TEXT | - | 4 | - | - | - | - |
| 0xF451 | PID 51 | TEXT | - | 1 | - | - | - | - |
| 0xF452 | PID 52 | TEXT | - | 1 | - | - | - | - |
| 0xF453 | PID 53 | TEXT | - | 2 | - | - | - | - |
| 0xF454 | PID 54 | TEXT | - | 2 | - | - | - | - |
| 0xF455 | PID 55 | TEXT | - | 1 | - | - | - | - |
| 0xF456 | PID 56 | TEXT | - | 1 | - | - | - | - |
| 0xF457 | PID 57 | TEXT | - | 1 | - | - | - | - |
| 0xF458 | PID 58 | TEXT | - | 1 | - | - | - | - |
| 0xF459 | PID 59 | TEXT | - | 2 | - | - | - | - |
| 0xF45A | PID 5A | TEXT | - | 1 | - | - | - | - |
| 0xF45B | PID 5B | TEXT | - | 1 | - | - | - | - |
| 0xF45C | PID 5C | TEXT | - | 1 | - | - | - | - |
| 0xF45D | PID 5D | TEXT | - | 2 | - | - | - | - |
| 0xF45E | PID 5E | TEXT | - | 2 | - | - | - | - |
| 0xF45F | PID 5F | TEXT | - | 1 | - | - | - | - |
| 0xF460 | PID 60 | TEXT | - | 4 | - | - | - | - |
| 0xF461 | PID 61 | TEXT | - | 1 | - | - | - | - |
| 0xF462 | PID 62 | TEXT | - | 1 | - | - | - | - |
| 0xF463 | PID 63 | TEXT | - | 2 | - | - | - | - |
| 0xF464 | PID 64 | TEXT | - | 5 | - | - | - | - |
| 0xF465 | PID 65 | TEXT | - | 2 | - | - | - | - |
| 0xF466 | PID 66 | TEXT | - | 5 | - | - | - | - |
| 0xF467 | PID 67 | TEXT | - | 3 | - | - | - | - |
| 0xF468 | PID 68 | TEXT | - | 7 | - | - | - | - |
| 0xF469 | PID 69 | TEXT | - | 7 | - | - | - | - |
| 0xF46A | PID 6A | TEXT | - | 5 | - | - | - | - |
| 0xF46B | PID 6B | TEXT | - | 5 | - | - | - | - |
| 0xF46C | PID 6C | TEXT | - | 5 | - | - | - | - |
| 0xF46D | PID 6D | TEXT | - | 11 | - | - | - | - |
| 0xF46E | PID 6E | TEXT | - | 9 | - | - | - | - |
| 0xF46F | PID 6F | TEXT | - | 3 | - | - | - | - |
| 0xF470 | PID 70 | TEXT | - | 10 | - | - | - | - |
| 0xF471 | PID 71 | TEXT | - | 6 | - | - | - | - |
| 0xF472 | PID 72 | TEXT | - | 5 | - | - | - | - |
| 0xF473 | PID 73 | TEXT | - | 5 | - | - | - | - |
| 0xF474 | PID 74 | TEXT | - | 5 | - | - | - | - |
| 0xF475 | PID 75 | TEXT | - | 7 | - | - | - | - |
| 0xF476 | PID 76 | TEXT | - | 7 | - | - | - | - |
| 0xF477 | PID 77 | TEXT | - | 5 | - | - | - | - |
| 0xF478 | PID 78 | TEXT | - | 9 | - | - | - | - |
| 0xF479 | PID 79 | TEXT | - | 9 | - | - | - | - |
| 0xF47A | PID 7A | TEXT | - | 7 | - | - | - | - |
| 0xF47B | PID 7B | TEXT | - | 7 | - | - | - | - |
| 0xF47C | PID 7C | TEXT | - | 9 | - | - | - | - |
| 0xF47D | PID 7D | TEXT | - | 1 | - | - | - | - |
| 0xF47E | PID 7E | TEXT | - | 1 | - | - | - | - |
| 0xF47F | PID 7F | TEXT | - | 13 | - | - | - | - |
| 0xF480 | PID 80 | TEXT | - | 4 | - | - | - | - |
| 0xF481 | PID 81 | TEXT | - | 21 | - | - | - | - |
| 0xF482 | PID 82 | TEXT | - | 21 | - | - | - | - |
| 0xF483 | PID 83 | TEXT | - | 5 | - | - | - | - |
| 0xF484 | PID 84 | TEXT | - | 1 | - | - | - | - |
| 0xF485 | PID 85 | TEXT | - | 10 | - | - | - | - |
| 0xF486 | PID 86 | TEXT | - | 5 | - | - | - | - |
| 0xF487 | PID 87 | TEXT | - | 5 | - | - | - | - |
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
| 0x021200 | Energiesparmode aktiv | 0 |
| 0x021208 | DME, Kodierung: fehlt | 0 |
| 0x021209 | DME, Kodierung: Schreibfehler | 0 |
| 0x02120A | DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x02120B | DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x02120C | DME, Kodierung: Daten unplausibel | 0 |
| 0x021300 | Energiesparmodus: aktiv | 1 |
| 0x021302 | Energiesparmodus, Kopplung: aktiv | 0 |
| 0x021308 | DME Slave, Kodierung: fehlt | 0 |
| 0x021309 | DME Slave, Kodierung: Schreibfehler | 0 |
| 0x02130A | DME Slave, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x02130B | DME Slave, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x02130C | DME Slave, Kodierung: Daten unplausibel | 0 |
| 0x02FF12 | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x02FF13 | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x100001 | Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100011 | Drosselklappe 2, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100111 | Drosselklappe 2, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100501 | Drosselklappe 2, Funktion: schwergängig, zu langsam | 0 |
| 0x100A04 | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x100B04 | Drosselklappe 2, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x101001 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101002 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101101 | Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101102 | Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101301 | Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101302 | Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101401 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101411 | Drosselklappe 2, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101501 | Drosselklappe 2, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101502 | Drosselklappe 2, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101508 | Drosselklappe 2, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101C08 | Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101D08 | Drosselklappe 2, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101F01 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x101F02 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x102001 | Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102901 | Luftmasse 2, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102902 | Luftmasse 2, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102A01 | Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A11 | Luftmassenmesser 2, Signal: elektrischer Fehler | 0 |
| 0x102A22 | Luftmassenmesser, Arbeitsbereich: Luftmasse zu hoch | 0 |
| 0x102A23 | Luftmassenmesser 2, Arbeitsbereich: Luftmasse zu hoch | 0 |
| 0x102A32 | Luftmassenmesser, Arbeitsbereich: Luftmasse zu niedrig | 0 |
| 0x102A33 | Luftmassenmesser 2, Arbeitsbereich: Luftmasse zu niedrig | 0 |
| 0x102A42 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß | 0 |
| 0x102A43 | Luftmassenmesser 2, Arbeitsbereich: Periodendauer zu groß | 0 |
| 0x102A52 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig | 0 |
| 0x102A53 | Luftmassenmesser 2, Arbeitsbereich: Periodendauer zu niedrig | 0 |
| 0x102E10 | DME: interner Fehler [Luftmassenmesser: Leitungsunterbrechung Standby-Schalter] | 0 |
| 0x103001 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103004 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103008 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103010 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103011 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103012 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103013 | Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103101 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103104 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103108 | Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103308 | Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x10351C | Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104301 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104302 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104320 | Absolutdrucksensor, Saugrohr, Plausibilität: Druck zu hoch | 0 |
| 0x104321 | Absolutdrucksensor, Saugrohr, Plausibilität: Druck zu niedrig | 0 |
| 0x104401 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104402 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104501 | Absolutdrucksensor 2, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104502 | Absolutdrucksensor 2, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104601 | Absolutdrucksensor 2, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104602 | Absolutdrucksensor 2, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104620 | Absolutdrucksensor 2, Saugrohr, Plausibilität: Druck zu hoch | 0 |
| 0x104621 | Absolutdrucksensor 2, Saugrohr, Plausibilität: Druck zu niedrig | 0 |
| 0x104910 | Absolutdrucksensor, Saugrohr, Signaländerung: zu langsam | 0 |
| 0x104911 | Absolutdrucksensor 2, Saugrohr, Signaländerung: zu langsam | 0 |
| 0x104B01 | Absolutdrucksensor, Saugrohr: Sammelfehler | 0 |
| 0x104B11 | Absolutdrucksensor 2, Saugrohr: Sammelfehler | 0 |
| 0x105001 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Plus] | 0 |
| 0x105002 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Masse] | 0 |
| 0x105101 | Umgebungsdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x105102 | Umgebungsdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x105201 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu hoch im Nachlauf] | 0 |
| 0x105202 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu niedrig im Nachlauf] | 0 |
| 0x105301 | DME: interner Fehler [Umgebungsdrucksensor 2: Kurzschluss nach Plus] | 0 |
| 0x105302 | DME: interner Fehler [Umgebungsdrucksensor 2: Kurzschluss nach Masse] | 0 |
| 0x105401 | DME: interner Fehler [Umgebungsdrucksensor 2, Arbeitsbereich: Druck zu hoch] | 0 |
| 0x105402 | DME: interner Fehler [Umgebungsdrucksensor 2, Arbeitsbereich: Druck zu niedrig] | 0 |
| 0x105501 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck zu hoch im Nachlauf] | 0 |
| 0x105502 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck zu niedrig im Nachlauf] | 0 |
| 0x105A30 | DME: interner Fehler [Umgebungsdrucksensor: Sammelfehler] | 0 |
| 0x105A31 | DME: interner Fehler [Umgebungsdrucksensor 2: Sammelfehler] | 0 |
| 0x105A40 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu hoch] | 0 |
| 0x105A41 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu niedrig] | 0 |
| 0x105A42 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x105A43 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x105A44 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck unplausibel] | 0 |
| 0x105A45 | DME: interner Fehler [Umgebungsdrucksensor 2, Plausibilität: Druck unplausibel] | 0 |
| 0x107001 | Drosselklappenwinkel 2 - Absolutdruck Saugrohr 2, Vergleich: Druck zu hoch | 0 |
| 0x107002 | Drosselklappenwinkel 2 - Absolutdruck Saugrohr 2, Vergleich: Druck zu niedrig | 0 |
| 0x107801 | Tuningschutz: Luftmasse zu hoch | 0 |
| 0x107901 | Tuningschutz: Luftmasse 2 zu hoch | 0 |
| 0x107A50 | Drosselklappe: Notlauf aktiv | 0 |
| 0x107A51 | Drosselklappe 2: Notlauf aktiv | 0 |
| 0x107A70 | Drosselklappe, Ansteuerung: Kurzschluss | 0 |
| 0x107A71 | Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler | 0 |
| 0x107A73 | Drosselklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x107A80 | Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | Drosselklappe, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A82 | Drosselklappe 2, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A83 | Drosselklappe 2, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A90 | Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | Drosselklappe, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107A92 | Drosselklappe 2, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A93 | Drosselklappe 2, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107AE0 | Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x107AE1 | Drosselklappe 2, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x108920 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108921 | Ladelufttemperatursensor 2: Sammelfehler | 0 |
| 0x108922 | Ladelufttemperatursensor 2: Sammelfehler | 0 |
| 0x108930 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108A01 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A10 | Ladelufttemperatursensor, Spannungsänderung: zu schnell | 0 |
| 0x108A11 | Ladelufttemperatursensor 2, Spannungsänderung: zu schnell | 0 |
| 0x108B01 | Ladelufttemperatursensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108B02 | Ladelufttemperatursensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108B11 | Ladelufttemperatursensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x108B12 | Ladelufttemperatursensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x108B13 | Ladelufttemperatursensor, Spannungsänderung, Kopplung: zu schnell | 0 |
| 0x108B21 | Ladelufttemperatursensor 2, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x108B22 | Ladelufttemperatursensor 2, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x108B23 | Ladelufttemperatursensor 2, Spannungsänderung, Kopplung: zu schnell | 0 |
| 0x108C01 | Ladelufttemperatur, Plausibilität: Temperatur zu hoch | 0 |
| 0x108C08 | Ladelufttemperatur, Signal: festliegend | 0 |
| 0x108D01 | Ladelufttemperatur 2: Plausibilität, Temperatur zu hoch | 0 |
| 0x108D08 | Ladelufttemperatur 2: Signal, festliegend | 0 |
| 0x108F01 | Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x108F11 | Ansaugluftsystem 2: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109002 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109210 | Kennfeldthermostat, Kopplung: klemmt offen | 0 |
| 0x109308 | Kühlmitteltemperatursensor, Signaländerung: zu schnell | 0 |
| 0x109410 | Kühlmitteltemperatursensor, Signal, Kopplung: festliegend auf hoch | 0 |
| 0x10A001 | Temperatursensor Kühleraustritt, elektrisch: Kurzschluss nach Plus oder Leitung offen | 0 |
| 0x10A002 | Temperatursensor Kühleraustritt, elektrisch: Kurzschluss nach Masse | 0 |
| 0x10A108 | Temperatursensor Kühleraustritt, Signaländerung: zu schnell | 0 |
| 0x10A208 | Temperatursensor Kühleraustritt: Signal, festliegend | 0 |
| 0x10AA20 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10AA21 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10AA22 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart, Kopplung: Temperatur zu hoch | 0 |
| 0x10AA23 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart, Kopplung: Temperatur zu niedrig | 0 |
| 0x10AA30 | Kühlmitteltemperatursensor: Sammelfehler | 0 |
| 0x10AA40 | FlexRay, Botschaft (Kühlmitteltemperatursensor): fehlt | 0 |
| 0x10AA52 | Kühlmitteltemperatursensor, Signal: festliegend | 0 |
| 0x10AA55 | Kühlmitteltemperatursensor, Signal, Kopplung: festliegend | 0 |
| 0x10B101 | Außentemperatursensor: Kurzschluss nach Plus | 1 |
| 0x10B102 | Außentemperatursensor: Kurzschluss nach Masse | 1 |
| 0x10B104 | Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 1 |
| 0x10BA2E | Außentemperatur, Plausibilität, Kopplung: Temperatur zu hoch | 0 |
| 0x10BA2F | Außentemperatur, Plausibilität, Kopplung: Temperatur zu niedrig | 0 |
| 0x10BA30 | Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | Außentemperatursensor, Plausibilität: Außentemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | Außentemperatursensor, Plausibilität: Außentemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA4B | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA51 | Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x10BA53 | Ladelufttemperatursensor 2, Kaltstart: Sammelfehler | 0 |
| 0x10BA54 | Ladelufttemperatursensor 2: Sammelfehler | 0 |
| 0x10C004 | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10C104 | Ladelufttemperatursensor 2: Plausibilität, Kaltstart, Temperatur zu hoch | 0 |
| 0x10C111 | Ladelufttemperatursensor 2, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10FF01 | Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem 2 | 0 |
| 0x110001 | Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem | 0 |
| 0x110101 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110102 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110104 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110108 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110201 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110202 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110204 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110208 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110301 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110302 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110304 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110308 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110401 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110402 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110404 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110408 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110501 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110502 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110504 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110508 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110601 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110602 | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110604 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110608 | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110701 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110702 | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110704 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110708 | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110801 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110802 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110804 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110808 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x111030 | Injektor Zylinder 1, Stromanstieg: zu langsam | 0 |
| 0x111031 | Injektor Zylinder 2, Stromanstieg: zu langsam | 0 |
| 0x111032 | Injektor Zylinder 4, Stromanstieg: zu langsam | 0 |
| 0x111033 | Injektor Zylinder 3, Stromanstieg: zu langsam | 0 |
| 0x111034 | Injektor Zylinder 5, Stromanstieg: zu langsam | 0 |
| 0x111035 | Injektor Zylinder 7, Stromanstieg: zu langsam | 0 |
| 0x111036 | Injektor Zylinder 8, Stromanstieg: zu langsam | 0 |
| 0x111037 | Injektor Zylinder 6, Stromanstieg: zu langsam | 0 |
| 0x111110 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft | 0 |
| 0x111112 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel | 0 |
| 0x111114 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation gestört | 0 |
| 0x112101 | Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112104 | Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112201 | Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112204 | Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112301 | Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112304 | Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112401 | Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112404 | Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112501 | Injektor Zylinder 5, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112504 | Injektor Zylinder 5, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112601 | Injektor Zylinder 7, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112604 | Injektor Zylinder 7, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112701 | Injektor Zylinder 8, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112704 | Injektor Zylinder 8, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112801 | Injektor Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112804 | Injektor Zylinder 6, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x113025 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus | 0 |
| 0x113026 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse | 0 |
| 0x113027 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung | 0 |
| 0x113035 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung 2: Kurzschluss nach Plus | 0 |
| 0x113036 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung 2: Kurzschluss nach Masse | 0 |
| 0x113037 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung 2: Leitungsunterbrechung | 0 |
| 0x114101 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu mager | 0 |
| 0x114102 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu fett | 0 |
| 0x114202 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 7: Gemisch zu fett | 0 |
| 0x114302 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett | 0 |
| 0x114402 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 6: Gemisch zu fett | 0 |
| 0x114501 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 5: Gemisch zu mager | 0 |
| 0x114502 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 5: Gemisch zu fett | 0 |
| 0x114602 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett | 0 |
| 0x114702 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 8: Gemisch zu fett | 0 |
| 0x114802 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett | 0 |
| 0x117120 | Kleinstmengenadaption, Injektor Zylinder 1: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117121 | Kleinstmengenadaption, Injektor Zylinder 1: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117123 | Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117124 | Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117125 | Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117126 | Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117127 | Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung: Fehlfunktion | 0 |
| 0x117128 | Kleinstmengenadaption, Injektor Zylinder 1, Plausibilität: Signal unplausibel | 0 |
| 0x117220 | Kleinstmengenadaption, Injektor Zylinder 3: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117221 | Kleinstmengenadaption, Injektor Zylinder 3: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117223 | Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117224 | Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117225 | Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117226 | Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117227 | Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung: Fehlfunktion | 0 |
| 0x117228 | Kleinstmengenadaption, Injektor Zylinder 3, Plausibilität: Signal unplausibel | 0 |
| 0x117320 | Kleinstmengenadaption, Injektor Zylinder 4: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117321 | Kleinstmengenadaption, Injektor Zylinder 4: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117323 | Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117324 | Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117325 | Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117326 | Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117327 | Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung: Fehlfunktion | 0 |
| 0x117328 | Kleinstmengenadaption, Injektor Zylinder 4, Plausibilität: Signal unplausibel | 0 |
| 0x117337 | Kleinstmengenadaption, Injektor Zylinder 8: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117338 | Kleinstmengenadaption, Injektor Zylinder 8: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117339 | Kleinstmengenadaption, Injektor Zylinder 8, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117340 | Kleinstmengenadaption, Injektor Zylinder 8, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117341 | Kleinstmengenadaption, Injektor Zylinder 8, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117342 | Kleinstmengenadaption, Injektor Zylinder 8, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117343 | Kleinstmengenadaption, Injektor Zylinder 8, Signalerkennung: Fehlfunktion | 0 |
| 0x117344 | Kleinstmengenadaption, Injektor Zylinder 8, Plausibilität: Signal unplausibel | 0 |
| 0x117353 | Kleinstmengenadaption, Injektor Zylinder 7: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117354 | Kleinstmengenadaption, Injektor Zylinder 7: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117355 | Kleinstmengenadaption, Injektor Zylinder 7, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117356 | Kleinstmengenadaption, Injektor Zylinder 7, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117357 | Kleinstmengenadaption, Injektor Zylinder 7, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117358 | Kleinstmengenadaption, Injektor Zylinder 7, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117359 | Kleinstmengenadaption, Injektor Zylinder 7, Signalerkennung: Fehlfunktion | 0 |
| 0x117360 | Kleinstmengenadaption, Injektor Zylinder 7, Plausibilität: Signal unplausibel | 0 |
| 0x117420 | Kleinstmengenadaption, Injektor Zylinder 2: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117421 | Kleinstmengenadaption, Injektor Zylinder 2: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117423 | Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117424 | Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117425 | Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117426 | Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117427 | Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung: Fehlfunktion | 0 |
| 0x117428 | Kleinstmengenadaption, Injektor Zylinder 2, Plausibilität: Signal unplausibel | 0 |
| 0x117520 | Kleinstmengenadaption, Injektor Zylinder 5: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117521 | Kleinstmengenadaption, Injektor Zylinder 5: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117523 | Kleinstmengenadaption, Injektor Zylinder 5, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117524 | Kleinstmengenadaption, Injektor Zylinder 5, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117525 | Kleinstmengenadaption, Injektor Zylinder 5, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117526 | Kleinstmengenadaption, Injektor Zylinder 5, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117527 | Kleinstmengenadaption, Injektor Zylinder 5, Signalerkennung: Fehlfunktion | 0 |
| 0x117528 | Kleinstmengenadaption, Injektor Zylinder 5, Plausibilität: Signal unplausibel | 0 |
| 0x117620 | Kleinstmengenadaption, Injektor Zylinder 6: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x117621 | Kleinstmengenadaption, Injektor Zylinder 6: Reglerwert außerhalb gültigem Bereich | 0 |
| 0x117623 | Kleinstmengenadaption, Injektor Zylinder 6, Grundadaption: Einschwingen des Reglers fehlgeschlagen | 0 |
| 0x117624 | Kleinstmengenadaption, Injektor Zylinder 6, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert | 0 |
| 0x117625 | Kleinstmengenadaption, Injektor Zylinder 6, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert | 0 |
| 0x117626 | Kleinstmengenadaption, Injektor Zylinder 6, Signalerkennung, Grundadaption: Fehlfunktion | 0 |
| 0x117627 | Kleinstmengenadaption, Injektor Zylinder 6, Signalerkennung: Fehlfunktion | 0 |
| 0x117628 | Kleinstmengenadaption, Injektor Zylinder 6, Plausibilität: Signal unplausibel | 0 |
| 0x118010 | Gemischregelung, bankübergreifend: Gemisch zu mager | 0 |
| 0x118011 | Gemischregelung, bankübergreifend: Gemisch zu fett | 0 |
| 0x118020 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118021 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118030 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1, Kopplung: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118031 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 1, Kopplung: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118110 | Gemischregelung 2, bankübergreifend: Gemisch zu mager | 0 |
| 0x118111 | Gemischregelung 2, bankübergreifend: Gemisch zu fett | 0 |
| 0x118120 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118121 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118130 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2, Kopplung: zylinderselektive Gesamtadaption unter gültigem Bereich | 0 |
| 0x118131 | Gemischregelung, Lambdaadaption über Laufunruhe, Bank 2, Kopplung: zylinderselektive Gesamtadaption über gültigem Bereich | 0 |
| 0x118401 | Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118501 | Gemischregelung 2: Gemisch zu mager, große Abweichung | 0 |
| 0x118502 | Gemischregelung 2: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118701 | Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118702 | Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x119001 | Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119011 | Raildrucksensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x119012 | Raildrucksensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x119101 | Raildrucksensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119102 | Raildrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119111 | Raildrucksensor 2, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x119112 | Raildrucksensor 2, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x119201 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119202 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119208 | Kraftstoffniederdrucksensor, Signal: festliegend | 0 |
| 0x119211 | Kraftstoffniederdrucksensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x119212 | Kraftstoffniederdrucksensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x119218 | Kraftstoffniederdrucksensor, Signal, Kopplung: festliegend | 0 |
| 0x119304 | Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119308 | Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119314 | Raildrucksensor 2, Plausibilität, Kopplung: Druck zu hoch vor Motorstart | 0 |
| 0x119318 | Raildrucksensor 2, Plausibilität, Kopplung: Druck zu niedrig vor Motorstart | 0 |
| 0x119404 | Raildrucksensor, Signal: festliegend | 0 |
| 0x119414 | Raildrucksensor 2, Signal, Kopplung: festliegend | 0 |
| 0x119504 | Raildrucksensor 2, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119508 | Raildrucksensor 2, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119514 | Raildrucksensor, Plausibilität, Kopplung: Druck zu hoch vor Motorstart | 0 |
| 0x119518 | Raildrucksensor, Plausibilität, Kopplung: Druck zu niedrig vor Motorstart | 0 |
| 0x119604 | Raildrucksensor 2, Signal: festliegend | 0 |
| 0x119614 | Raildrucksensor, Signal, Kopplung: festliegend | 0 |
| 0x119F01 | Kraftstoffhochdruck 2 bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11A001 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch | 0 |
| 0x11A002 | Kraftstoffhochdruck, Plausibilität: Druck zu niedrig | 0 |
| 0x11A101 | Kraftstoffhochdruck 2, Plausibilität: Druck zu hoch | 0 |
| 0x11A102 | Kraftstoffhochdruck 2, Plausibilität: Druck zu niedrig | 0 |
| 0x11A204 | Kraftstoffniederdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x11A401 | Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11A701 | Raildrucksensor, Plausibilität: Druck zu niedrig | 0 |
| 0x11A702 | Raildrucksensor, Plausibilität: Druck zu hoch | 0 |
| 0x11A801 | Raildrucksensor 2, Plausibilität: Druck zu hoch | 0 |
| 0x11A802 | Raildrucksensor 2, Plausibilität: Druck zu niedrig | 0 |
| 0x11AA06 | Kraftstoffhochdrucksystem, Hochdruckpumpe, Mengensteuerventil: Anschlag erreicht | 0 |
| 0x11AA07 | Kraftstoffhochdrucksystem, Hochdruckpumpe 2, Mengensteuerventil: Anschlag erreicht | 0 |
| 0x11AC01 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11AC12 | Kraftstoffhochdruck, Plausibilität, Kaltstart, Kopplung: Druck zu niedrig | 0 |
| 0x11AD01 | Kraftstoffhochdruck 2, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AD02 | Kraftstoffhochdruck 2, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11B401 | Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B501 | Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11B701 | Kraftstoffhochdruck 2 bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B801 | Kraftstoffhochdruck 2 nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11C301 | Mengensteuerventil 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C302 | Mengensteuerventil 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C304 | Mengensteuerventil 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C311 | Mengensteuerventil 2, Ansteuerung, Kopplung: Kurzschluss nach Plus | 0 |
| 0x11C312 | Mengensteuerventil 2, Ansteuerung, Kopplung: Kurzschluss nach Masse | 0 |
| 0x11C314 | Mengensteuerventil 2, Ansteuerung, Kopplung: Leitungsunterbrechung | 0 |
| 0x11C401 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C411 | Mengensteuerventil, Ansteuerung, Kopplung: Kurzschluss nach Plus | 0 |
| 0x11C412 | Mengensteuerventil, Ansteuerung, Kopplung: Kurzschluss nach Masse | 0 |
| 0x11C414 | Mengensteuerventil, Ansteuerung, Kopplung: Leitungsunterbrechung | 0 |
| 0x11CF30 | Gemischregelung: Sammelfehler | 0 |
| 0x11CF31 | Gemischregelung 2: Sammelfehler | 0 |
| 0x120208 | Ladedruckregelung, Plausibilität: Druck zu hoch | 0 |
| 0x120218 | Ladedruckregelung, Plausibilität, Kopplung: Druck zu hoch | 0 |
| 0x120308 | Ladedruckregelung, Plausibilität: Druck zu niedrig | 0 |
| 0x120318 | Ladedruckregelung, Plausibilität, Kopplung: Druck zu niedrig | 0 |
| 0x120408 | Ladedruckregelung: Abschaltung als Folgereaktion | 0 |
| 0x120418 | Ladedruckregelung, Abschaltung, Kopplung: Druckaufbau gesperrt | 0 |
| 0x120608 | Ladedruckregelung 2, Plausibilität: Druck zu hoch | 0 |
| 0x120618 | Ladedruckregelung 2, Plausibilität, Kopplung: Druck zu hoch | 0 |
| 0x120708 | Ladedruckregelung 2, Plausibilität: Druck zu niedrig | 0 |
| 0x120718 | Ladedruckregelung 2, Plausibilität, Kopplung: Druck zu niedrig | 0 |
| 0x120908 | Ladedruckregelung 2: Abschaltung als Folgereaktion | 0 |
| 0x120918 | Ladedruckregelung 2, Abschaltung, Kopplung: Druckaufbau gesperrt | 0 |
| 0x120F12 | Auslassnockenwellensensor 2, Plausibilität: Muster ungültig | 0 |
| 0x121001 | Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121101 | Ladedrucksensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121102 | Ladedrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121201 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121202 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121301 | Ladedrucksensor 2, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121302 | Ladedrucksensor 2, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121521 | Ladedrucksensor: Sammelfehler | 0 |
| 0x121522 | Ladedrucksensor 2: Sammelfehler | 0 |
| 0x12152E | Ladedruck 2, Arbeitsbereich: Druck zu hoch | 0 |
| 0x12152F | Ladedruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x121530 | Ladedruck, Plausibilität: Druck zu hoch | 0 |
| 0x121531 | Ladedruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121532 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch | 0 |
| 0x121533 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig | 0 |
| 0x121540 | Ladedruck 2, Plausibilität: Druck zu hoch | 0 |
| 0x121541 | Ladedruck 2, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121542 | Ladedruck 2 - Umgebungsdruck 2, Vergleich: Ladedruck zu hoch | 0 |
| 0x121543 | Ladedruck 2 - Umgebungsdruck 2, Vergleich: Ladedruck zu niedrig | 0 |
| 0x123001 | Wastegate, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123002 | Wastegate, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123004 | Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123101 | Wastegate 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123102 | Wastegate 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123104 | Wastegate 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123201 | Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123211 | Wastegate, Ansteuerung, Kopplung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123301 | Wastegate 2, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123311 | Wastegate 2, Ansteuerung, Kopplung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x128008 | Lambdasonden vor Katalysator, Montage: vertauscht | 0 |
| 0x128101 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128201 | Lambdasonde vor Katalysator 2, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128401 | Lambdasonde vor Katalysator 2, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128901 | Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128A02 | Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128C01 | Lambdasonde vor Katalysator 2: Falschluft erkannt | 0 |
| 0x128E01 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x128E03 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichswiderstandsleitung | 0 |
| 0x128E05 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Abgleichswiderstandsleitung | 0 |
| 0x128F01 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x129001 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129101 | Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129102 | Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129A20 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A008 | Lambdasonden nach Katalysator, Montage: vertauscht | 0 |
| 0x12A101 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A102 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A201 | Lambdasonde nach Katalysator 2, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A202 | Lambdasonde nach Katalysator 2, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A308 | Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A408 | Lambdasonde nach Katalysator 2, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A801 | Lambdasonde nach Katalysator 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AA02 | Lambdasonde nach Katalysator 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AC04 | Lambdasonde nach Katalysator 2, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AD01 | Lambdasonde nach Katalysator: Signal festliegend auf Mager | 0 |
| 0x12AE01 | Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12AF01 | Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12AF08 | Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12AF10 | Lambdasonde nach Katalysator, im Schub, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12AF11 | Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12AF20 | Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12AF21 | Lambdasonde nach Katalysator, im Schub, Fett: Signal festliegend | 0 |
| 0x12B001 | Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B008 | Lambdasonde nach Katalysator 2, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B010 | Lambdasonde nach Katalysator 2, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12B011 | Lambdasonde nach Katalysator 2, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B020 | Lambdasonde nach Katalysator 2: Signal festliegend auf Fett | 0 |
| 0x12B021 | Lambdasonde nach Katalysator 2: Signal festliegend auf Mager | 0 |
| 0x12B101 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B201 | Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B202 | Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B204 | Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B401 | Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B402 | Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B404 | Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B505 | Lambdasondenbeheizung vor Katalysator, Funktion: Heizerfehler | 0 |
| 0x12B506 | Lambdasondenbeheizung vor Katalysator 2, Funktion: Heizerfehler | 0 |
| 0x12B701 | Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12B801 | Lambdasondenbeheizung nach Katalysator 2, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BB01 | Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12BC01 | Lambdasonde nach Katalysator 2, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12BD52 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD54 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD61 | Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD80 | Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BD81 | Lambdasonde vor Katalysator 2: Sammelfehler | 0 |
| 0x12BE08 | Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x12BF08 | Lambdasonde nach Katalysator 2, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x130001 | VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130002 | VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130004 | VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130104 | VANOS, Einlass: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130108 | VANOS, Einlass: Regelfehler, Position nicht erreicht | 0 |
| 0x130201 | VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130202 | VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130204 | VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130304 | VANOS, Auslass: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130308 | VANOS, Auslass: Regelfehler, Position nicht erreicht | 0 |
| 0x130401 | VANOS-Magnetventil Einlass 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130402 | VANOS-Magnetventil Einlass 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130404 | VANOS-Magnetventil Einlass 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130504 | VANOS, Einlass 2: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130508 | VANOS, Einlass 2: Regelfehler, Position nicht erreicht | 0 |
| 0x130601 | VANOS-Magnetventil Auslass 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130602 | VANOS-Magnetventil Auslass 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130604 | VANOS-Magnetventil Auslass 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130704 | VANOS, Auslass 2: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130708 | VANOS, Auslass 2: Regelfehler, Position nicht erreicht | 0 |
| 0x130E11 | Einlassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130E12 | Einlassnockenwellensensor 2, Plausibilität: Muster ungültig | 0 |
| 0x130E20 | Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130E21 | Einlassnockenwelle 2: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | Auslassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130F20 | Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F21 | Auslassnockenwelle 2: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x131601 | VANOS, Auslass 2, Kaltstart: nicht regelbar | 0 |
| 0x131701 | VANOS, Einlass 2, Kaltstart: nicht regelbar | 0 |
| 0x131808 | VANOS, Auslass, Kaltstart: Position nicht erreicht | 0 |
| 0x131908 | VANOS, Einlass, Kaltstart: Position nicht erreicht | 0 |
| 0x132101 | VANOS, Auslass: Sammelfehler | 0 |
| 0x132102 | VANOS 2, Auslass: Sammelfehler | 0 |
| 0x132201 | VANOS, Einlass: Sammelfehler | 0 |
| 0x132202 | VANOS 2, Einlass: Sammelfehler | 0 |
| 0x132301 | VANOS: Sammelfehler | 0 |
| 0x132302 | VANOS 2: Sammelfehler | 0 |
| 0x132408 | VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132508 | VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132608 | VANOS, Auslass 2: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132708 | VANOS, Einlass 2: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132808 | VANOS, Auslass 2, Kaltstart: Position nicht erreicht | 0 |
| 0x132908 | VANOS, Einlass 2, Kaltstart: Position nicht erreicht | 0 |
| 0x133010 | Valvetronic-Stellmotor, Ansteuerung: Fehlfunktion | 0 |
| 0x133011 | Valvetronic, Versorgungsspannung: Fehlfunktion | 0 |
| 0x133012 | Valvetronic-Stellmotor 2, Ansteuerung: Fehlfunktion | 0 |
| 0x133013 | Valvetronic 2, Versorgungsspannung: Fehlfunktion | 0 |
| 0x133101 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133206 | Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x133304 | Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133305 | Valvetronic 2: Bauteileschutz, Abschaltung System | 0 |
| 0x133710 | Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133711 | Valvetronic 2, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133B04 | Valvetronic System: keine Verstellung möglich | 0 |
| 0x133E10 | Valvetronic System: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x133E20 | Valvetronic System 2: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x134A02 | Valvetronic-Stellmotor: Überlastung | 0 |
| 0x134F01 | Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 1 |
| 0x135302 | Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System | 0 |
| 0x135401 | Valvetronic: Endstufe überlastet | 0 |
| 0x135403 | Valvetronic 2: Endstufe überlastet | 0 |
| 0x135501 | Valvetronic: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135502 | Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135605 | Valvetronic 2: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135608 | Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135705 | Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135706 | Valvetronic System: unterer Anschlag gelernt | 0 |
| 0x135715 | Valvetronic System 2: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135716 | Valvetronic System 2: unterer Anschlag gelernt | 0 |
| 0x135808 | Valvetronic-Stellmotor, Positionssensoren, elektrisch: Fehlfunktion | 0 |
| 0x135908 | Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x135A08 | Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x135A10 | Valvetronic-Stellmotor, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135A11 | Valvetronic-Stellmotor 2, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135B10 | Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x135D01 | Valvetronic-Stellmotor 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x135D02 | Valvetronic-Stellmotor 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x135D06 | Valvetronic-Stellmotor 2, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x135E01 | Valvetronic 2, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x135E02 | Valvetronic 2, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x135E04 | Valvetronic 2, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x135E08 | Valvetronic 2, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x135E10 | Valvetronic 2, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 0 |
| 0x135F02 | Valvetronic-Stellmotor 2: Bauteileschutz, Abschaltung System | 0 |
| 0x136002 | Valvetronic-Stellmotor 2: Überlastung | 0 |
| 0x136102 | Valvetronic-Stellmotor 2: Warnschwelle Überlastschutz überschritten | 0 |
| 0x136204 | Valvetronic System 2: keine Verstellung möglich | 0 |
| 0x136208 | Valvetronic System 2: keine Bewegung erkannt | 0 |
| 0x136304 | Valvetronic System 2: Warnschwelle Regelabweichung überschritten | 0 |
| 0x136408 | Valvetronic-Stellmotor 2, Positionssensoren, elektrisch: Fehlfunktion | 0 |
| 0x136508 | Valvetronic-Stellmotor 2, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x136608 | Valvetronic-Stellmotor 2, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x136711 | Valvetronic-Stellmotor 2, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x136712 | Valvetronic-Stellmotor 2, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x136713 | Valvetronic-Stellmotor 2, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x136714 | Valvetronic-Stellmotor 2, Positionssensoren: Überlauf erkannt | 0 |
| 0x136715 | Valvetronic-Stellmotor 2, Positionssensoren, Plausibilität: Feinhallsignale zueinander unplausibel | 0 |
| 0x136801 | Valvetronic-Relais 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x136802 | Valvetronic-Relais 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x136804 | Valvetronic-Relais 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138101 | Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138A01 | Abgasklappe 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138A02 | Abgasklappe 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138A04 | Abgasklappe 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x139001 | Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x140001 | Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140010 | Verbrennungsaussetzer, mehrere Zylinder: erkannt | 0 |
| 0x140011 | Verbrennungsaussetzer: Einspritzabschaltung | 0 |
| 0x140012 | Verbrennungsaussetzer, Kopplung: Einspritzabschaltung | 0 |
| 0x140020 | Verbrennungsaussetzer, mehrere Zylinder, Kopplung: erkannt | 0 |
| 0x140101 | Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140110 | Verbrennungsaussetzer, Zylinder 1: erkannt | 0 |
| 0x140201 | Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140210 | Verbrennungsaussetzer, Zylinder 2: erkannt | 0 |
| 0x140301 | Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140310 | Verbrennungsaussetzer, Zylinder 3: erkannt | 0 |
| 0x140401 | Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140410 | Verbrennungsaussetzer, Zylinder 4: erkannt | 0 |
| 0x140501 | Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140510 | Verbrennungsaussetzer, Zylinder 5: erkannt | 0 |
| 0x140601 | Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x140610 | Verbrennungsaussetzer, Zylinder 6: erkannt | 0 |
| 0x140701 | Verbrennungsaussetzer, Zylinder 7: Einspritzung wird abgeschaltet | 0 |
| 0x140702 | Verbrennungsaussetzer, Zylinder 7: abgasschädigend nach Startvorgang | 0 |
| 0x140704 | Verbrennungsaussetzer, Zylinder 7: abgasschädigend | 0 |
| 0x140710 | Verbrennungsaussetzer, Zylinder 7: erkannt | 0 |
| 0x140801 | Verbrennungsaussetzer, Zylinder 8: Einspritzung wird abgeschaltet | 0 |
| 0x140802 | Verbrennungsaussetzer, Zylinder 8: abgasschädigend nach Startvorgang | 0 |
| 0x140804 | Verbrennungsaussetzer, Zylinder 8: abgasschädigend | 0 |
| 0x140810 | Verbrennungsaussetzer, Zylinder 8: erkannt | 0 |
| 0x144010 | Zündung, Zylinder 4: Brenndauer außerhalb Toleranz | 0 |
| 0x144011 | Zündung, Zylinder 8: Brenndauer außerhalb Toleranz | 0 |
| 0x144012 | Zündung, Zylinder 3: Brenndauer außerhalb Toleranz | 0 |
| 0x144013 | Zündung, Zylinder 6: Brenndauer außerhalb Toleranz | 0 |
| 0x144014 | Zündung, Zylinder 7: Brenndauer außerhalb Toleranz | 0 |
| 0x144015 | Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x144016 | Zündung, Zylinder 8: Brenndauer zu kurz | 0 |
| 0x144017 | Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x144018 | Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x144019 | Zündung, Zylinder 7: Brenndauer zu kurz | 0 |
| 0x14401A | Superklopfen Zylinder 4: Einspritzabschaltung | 0 |
| 0x14401B | Superklopfen Zylinder 8: Einspritzabschaltung | 0 |
| 0x14401C | Superklopfen Zylinder 3: Einspritzabschaltung | 0 |
| 0x14401D | Superklopfen Zylinder 6: Einspritzabschaltung | 0 |
| 0x14401E | Superklopfen Zylinder 7: Einspritzabschaltung | 0 |
| 0x14401F | Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung | 0 |
| 0x144020 | Superklopfen Zylinder 8: dauerhafte Einspritzabschaltung | 0 |
| 0x144021 | Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung | 0 |
| 0x144022 | Superklopfen Zylinder 6: dauerhafte Einspritzabschaltung | 0 |
| 0x144023 | Superklopfen Zylinder 7: dauerhafte Einspritzabschaltung | 0 |
| 0x144024 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett | 0 |
| 0x144025 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 8: Gemisch zu fett | 0 |
| 0x144026 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett | 0 |
| 0x144027 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 6: Gemisch zu fett | 0 |
| 0x144028 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett | 0 |
| 0x144029 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 7: Gemisch zu fett | 0 |
| 0x14402A | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu mager | 0 |
| 0x14402B | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 8: Gemisch zu mager | 0 |
| 0x14402C | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu mager | 0 |
| 0x14402D | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 6: Gemisch zu mager | 0 |
| 0x14402E | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu mager | 0 |
| 0x14402F | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 7: Gemisch zu mager | 0 |
| 0x144030 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144031 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144032 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144033 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144034 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144035 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144036 | Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144037 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144038 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x144039 | Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14403A | Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403B | Injektor Zylinder 8, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403C | Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403D | Injektor Zylinder 6, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403E | Injektor Zylinder 7, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x14403F | Injektor Zylinder 4, Stromanstieg: zu langsam | 0 |
| 0x144040 | Injektor Zylinder 8, Stromanstieg: zu langsam | 0 |
| 0x144041 | Injektor Zylinder 3, Stromanstieg: zu langsam | 0 |
| 0x144042 | Injektor Zylinder 6, Stromanstieg: zu langsam | 0 |
| 0x144043 | Injektor Zylinder 7, Stromanstieg: zu langsam | 0 |
| 0x144044 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144045 | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144046 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144047 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144048 | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x144049 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404A | Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404B | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404C | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404D | Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x14404E | Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x14404F | Injektor Zylinder 8, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144050 | Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144051 | Injektor Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144052 | Injektor Zylinder 7, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x144053 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu mager: Sammelfehler | 0 |
| 0x144054 | Zylinderindividuelle Gemischüberwachung über Laufunruhe 2,  Gemisch zu mager: Sammelfehler | 0 |
| 0x144055 | Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu fett: Sammelfehler | 0 |
| 0x144056 | Zylinderindividuelle Gemischüberwachung über Laufunruhe 2, Gemisch zu fett: Sammelfehler | 0 |
| 0x150102 | Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150402 | Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150502 | Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | Zündung, Zylinder 7: Brenndauer zu kurz | 0 |
| 0x150702 | Zündung, Zylinder 8: Brenndauer zu kurz | 0 |
| 0x150802 | Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x150C11 | Zündung, Zylinder 1: Brenndauer außerhalb Toleranz | 0 |
| 0x150C12 | Zündung, Zylinder 2: Brenndauer außerhalb Toleranz | 0 |
| 0x150C13 | Zündung, Zylinder 4: Brenndauer außerhalb Toleranz | 0 |
| 0x150C14 | Zündung, Zylinder 3: Brenndauer außerhalb Toleranz | 0 |
| 0x150C15 | Zündung, Zylinder 5: Brenndauer außerhalb Toleranz | 0 |
| 0x150C16 | Zündung, Zylinder 7: Brenndauer außerhalb Toleranz | 0 |
| 0x150C17 | Zündung, Zylinder 8: Brenndauer außerhalb Toleranz | 0 |
| 0x150C18 | Zündung, Zylinder 6: Brenndauer außerhalb Toleranz | 0 |
| 0x151001 | Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151201 | Zündwinkelverstellung 2 im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151301 | Zündwinkelverstellung 2 in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus | 0 |
| 0x152007 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse | 0 |
| 0x152008 | Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152010 | Zündkreis, Versorgungsspannung: Bankausfall 2 oder Motorausfall | 0 |
| 0x152021 | Relais Zündung und Injektoren, Versorgungsspannung Zündung 2: Kurzschluss nach Plus | 0 |
| 0x152022 | Relais Zündung und Injektoren, Versorgungsspannung Zündung 2: Kurzschluss nach Masse | 0 |
| 0x152108 | Superklopfen Zylinder 1: Einspritzabschaltung | 0 |
| 0x152118 | Superklopfen Zylinder 1: dauerhafte Einspritzabschaltung | 0 |
| 0x152208 | Superklopfen Zylinder 2: Einspritzabschaltung | 0 |
| 0x152218 | Superklopfen Zylinder 2: dauerhafte Einspritzabschaltung | 0 |
| 0x152308 | Superklopfen Zylinder 4: Einspritzungsabschaltung | 0 |
| 0x152318 | Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung | 0 |
| 0x152408 | Superklopfen Zylinder 3: Einspritzungsabschaltung | 0 |
| 0x152418 | Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung | 0 |
| 0x152508 | Superklopfen Zylinder 5: Einspritzungsabschaltung | 0 |
| 0x152518 | Superklopfen Zylinder 5: dauerhafte Einspritzabschaltung | 0 |
| 0x152608 | Superklopfen Zylinder 7: Einspritzungsabschaltung | 0 |
| 0x152618 | Superklopfen Zylinder 7: dauerhafte Einspritzabschaltung | 0 |
| 0x152708 | Superklopfen Zylinder 8: Einspritzabschaltung | 0 |
| 0x152718 | Superklopfen Zylinder 8: dauerhafte Einspritzabschaltung | 0 |
| 0x152808 | Superklopfen Zylinder 6: Einspritzabschaltung | 0 |
| 0x152818 | Superklopfen Zylinder 6: dauerhafte Einspritzabschaltung | 0 |
| 0x152D08 | Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160021 | Kurbelwellensensor: allgemeiner Synchronisationsverlust | 0 |
| 0x160510 | Kurbelwellensensor [Plausibilität]: Impulsbreite unplausibel | 0 |
| 0x164020 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164021 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164022 | Einlassnockenwellensensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164023 | Einlassnockenwellensensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164030 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164031 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164032 | Auslassnockenwellensensor 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164033 | Auslassnockenwellensensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164040 | Einlassnockenwelle: Montage fehlerhaft | 0 |
| 0x164041 | Auslassnockenwelle: Montage fehlerhaft | 0 |
| 0x164042 | Einlassnockenwelle 2: Montage fehlerhaft | 0 |
| 0x164043 | Auslassnockenwelle 2: Montage fehlerhaft | 0 |
| 0x168001 | Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168101 | Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168201 | Klopfsensor 3, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168202 | Klopfsensor 3, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168301 | Klopfsensor 4, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168302 | Klopfsensor 4, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168A20 | Klopfregelung: Systemfehler | 0 |
| 0x168A21 | Klopfregelung 2: Systemfehler | 0 |
| 0x168A30 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A90 | Klopfsensor 3, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A91 | Klopfsensor 3, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168B10 | Klopfsensor 3, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168B11 | Klopfsensor 3, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168B20 | Klopfsensor 4, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168B21 | Klopfsensor 4, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168B30 | Klopfsensor 4, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168B31 | Klopfsensor 4, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x180001 | Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180101 | Katalysator 2: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x190302 | Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
| 0x190303 | Tankentlüftungs- und Spülluftsystem, Feinstleck, Kopplung: Leckage größer 0,5 mm | 1 |
| 0x190F08 | Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191001 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191401 | Tankentlüftungsventil 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191402 | Tankentlüftungsventil 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191404 | Tankentlüftungsventil 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191A21 | Tankentlüftungsventil: klemmt offen | 0 |
| 0x191A22 | Tankentlüftungsventil 2: klemmt offen | 0 |
| 0x191A32 | Tankentlüftungsventil 2, Kopplung: klemmt offen | 0 |
| 0x191D01 | Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191E08 | Tankentlüftungssystem 2: Fehlfunktion | 0 |
| 0x191E31 | Tankentlüftungssystem, Kopplung: Fehlfunktion | 0 |
| 0x191E32 | Tankentlüftungssystem 2, Kopplung: Fehlfunktion | 0 |
| 0x193001 | Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193002 | Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193008 | Kraftstoff-Füllstandsgeber, links, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193101 | Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193102 | Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193108 | Kraftstoff-Füllstandsgeber, rechts, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193208 | Tankfüllstand, Plausibilität: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193218 | Tankfüllstandssensor: Signal unplausibel wegen festhängendem Tankfüllstandsgeber | 0 |
| 0x193A20 | Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
| 0x194001 | Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu niedrig | 0 |
| 0x194002 | Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu hoch | 0 |
| 0x194004 | Tankleckagemodul, Temperatur, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x194101 | Tankleckagemodul, Temperatursensor, Signaländerung: zu schnell | 0 |
| 0x194201 | Tankleckagemodul, Zeitgeber: Fehlfunktion | 0 |
| 0x194202 | Tankleckagemodul, Zeitgeber, Kopplung: Fehlfunktion | 0 |
| 0x194301 | Tankleckagemodul, Eigendiagnose: Fehlfunktion | 0 |
| 0x194401 | Tankleckagemodul, Kommunikation: gestört | 0 |
| 0x194402 | Tankleckagemodul, Kommunikation, Kopplung: gestört | 0 |
| 0x194501 | Tankleckagemodul, Kommunikation: Fehlfunktion | 0 |
| 0x194502 | Tankleckagemodul, Kommunikation. Kopplung: Fehlfunktion | 0 |
| 0x194601 | Tankleckagemodul, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194602 | Tankleckagemodul, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194603 | Tankleckagemodul, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x194604 | Tankleckagemodul, elektrisch: Leitungsunterbrechung | 0 |
| 0x194605 | Tankleckagemodul, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x194606 | Tankleckagemodul, elektrisch, Kopplung: Leitungsunterbrechung | 0 |
| 0x194701 | Tankleckagemodul, Druckschalter: klemmt | 0 |
| 0x194702 | Tankleckagemodul, Druckschalter, Kopplung: klemmt | 0 |
| 0x194801 | Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194802 | Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194803 | Tankleckagemodul, Druckschalter, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x194804 | Tankleckagemodul, Druckschalter, elektrisch: Leitungsunterbrechung | 0 |
| 0x194805 | Tankleckagemodul, Druckschalter, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x194806 | Tankleckagemodul, Druckschalter, elektrisch, Kopplung: Leitungsunterbrechung | 0 |
| 0x1A2001 | Elektrolüfter, Ansteuerleitung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | Elektrolüfter, Ansteuerleitung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | Elektrolüfter, Ansteuerleitung: Leitungsunterbrechung | 0 |
| 0x1A2108 | Elektrolüfter, Eigendiagnose Stufe 1: leichter Lüfterfehler | 0 |
| 0x1A2308 | Elektrolüfter, Eigendiagnose Stufe 2: Lüfterfehler mit potentieller Gefährdung für den Lüfter | 0 |
| 0x1A2408 | Elektrolüfter, Eigendiagnose Stufe 3: Lüfterfehler mit Motorfunktionseinschränkung | 0 |
| 0x1A2508 | Elektrolüfter, Eigendiagnose Stufe 4: schwerer Lüfterfehler | 0 |
| 0x1A2601 | Sicherungsrelais Elektrolüfter, Ansteuerleitung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | Sicherungsrelais Elektrolüfter, Ansteuerleitung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | Sicherungsrelais Elektrolüfter, Ansteuerleitung: Leitungsunterbrechung | 0 |
| 0x1A2804 | Elektrolüfter, Betriebsbereitschaft: eingeschränkt | 0 |
| 0x1A2904 | Elektrolüfter, Betriebsbereitschaft: nicht gegeben | 0 |
| 0x1B0808 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A20 | Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 0 |
| 0x1B0A60 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel | 0 |
| 0x1B0A61 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel | 0 |
| 0x1B0A62 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A64 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 0 |
| 0x1B0A65 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 0 |
| 0x1B0A66 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 0 |
| 0x1B0A67 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 0 |
| 0x1B2001 | EWS-Manipulationsschutz: Motorlauf durch EWS gesperrt | 0 |
| 0x1B2002 | EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | EWS Manipulationsschutz: Antwort unplausibel | 0 |
| 0x1B2101 | Schnittstelle EWS-DME: Hardwarefehler | 0 |
| 0x1B2102 | Schnittstelle EWS-DME: Framefehler | 0 |
| 0x1B2104 | Schnittstelle EWS-DME: Zeitüberschreitung | 0 |
| 0x1B2109 | Schnittstelle EWS-DME: Empfangsfehler CAS Schnittstelle | 0 |
| 0x1B2201 | DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2208 | DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2209 | DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key | 0 |
| 0x1B2301 | FlexRay, Botschaft (EWS Information FEM, 103.1.4): fehlt | 0 |
| 0x1B2302 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 0 |
| 0x1B2304 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 0 |
| 0x1B2904 | Funktionsfreischaltung, Geschwindigkeitsbegrenzung: Code ungültig | 0 |
| 0x1B2B01 | FlexRay, Botschaft (EWS Response Master, 251.0.8): Framefehler | 0 |
| 0x1B2B02 | FlexRay, Botschaft (EWS Response Master, 251.0.8): fehlt | 0 |
| 0x1B2B04 | FlexRay, Botschaft EWS-DME: Framefehler | 0 |
| 0x1B5101 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5202 | Klemme 15N_1: keine Spannung | 0 |
| 0x1B5302 | Klemme 15N_2: keine Spannung | 0 |
| 0x1B5402 | Klemme 15N_3: keine Spannung | 0 |
| 0x1B6008 | Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B9508 | Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf | 0 |
| 0x1B9702 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf | 0 |
| 0x1B9804 | Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf | 0 |
| 0x1B9A02 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf | 0 |
| 0x1B9B01 | Motorabstellzeit: Sammelfehler | 0 |
| 0x1BC004 | Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1BC101 | Nullgangsensor, Plausibilität: Signal unplausibel | 0 |
| 0x1BC108 | Nullgangsensor, Plausibilität: Position unplausibel | 0 |
| 0x1BC110 | Nullgangsensor, Signal: Tastverhältnis zu hoch | 0 |
| 0x1BC111 | Nullgangsensor, Signal: Tastverhältnis zu niedrig | 0 |
| 0x1BC112 | Nullgangsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BC113 | Nullgangsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BC114 | Nullgangsensor, Signal: Periodendauer außerhalb gültigem Bereich | 0 |
| 0x1BD401 | Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD402 | Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD404 | Raddrehzahlsensor hinten/links, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD408 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD501 | Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD502 | Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD504 | Raddrehzahlsensor vorn/links, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD508 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD601 | Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD602 | Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD604 | Raddrehzahlsensor hinten/rechts, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD608 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1BD701 | Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Plus | 1 |
| 0x1BD702 | Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Masse | 1 |
| 0x1BD704 | Raddrehzahlsensor vorn/rechts, elektrisch: Leitungsunterbrechung | 1 |
| 0x1BD708 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1C3108 | Motoröldrucksensor, Signal: festliegend | 0 |
| 0x1C3204 | Motoröldruckschalter: Leitungsunterbrechung oder Schalter klemmt | 0 |
| 0x1C4002 | Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | Ölzustandssensor: Fehlfunktion | 0 |
| 0x1C4116 | Ölzustand, Status Niveau: Fehlfunktion | 0 |
| 0x1C4117 | Ölzustand, Status Permittivität: Fehlfunktion | 0 |
| 0x1C4118 | Ölzustandssensor, Status Temperatur: Fehlfunktion | 0 |
| 0x1C4119 | Motoröltemperatursensor, elektrisch: Fehlfunktion | 0 |
| 0x1C5A20 | BSD, Kommunikation (Ölzustandssensor): fehlt | 0 |
| 0x1D2008 | Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2401 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3001 | Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung leicht geschädigt | 0 |
| 0x1D3101 | Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung geschädigt | 0 |
| 0x1D3201 | Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung stark geschädigt | 0 |
| 0x1D3211 | Kupplungstemperatur: Warnschwellenwert 1 ohne Schädigung überschritten | 1 |
| 0x1D3212 | Kupplungstemperatur: Warnschwellenwert 2 ohne Schädigung überschritten | 1 |
| 0x1D3301 | Drehzahlsensor Getriebe, Signal: Periodendauer zu groß | 0 |
| 0x1D3302 | Drehzahlsensor Getriebe: nicht angesteckt | 0 |
| 0x1D3304 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich: Drehzahl Getriebe zu hoch | 0 |
| 0x1D3308 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich: Drehzahlunterschied zu groß | 0 |
| 0x1D3311 | Drehzahlsensor Getriebe, Signal, Kopplung: Periodendauer zu groß | 0 |
| 0x1D3312 | Drehzahlsensor Getriebe, Kopplung: nicht angesteckt | 0 |
| 0x1D3314 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich, Kopplung: Drehzahl Getriebe zu hoch | 0 |
| 0x1D3318 | Drehzahlsensor Getriebe, Drehzahl Getriebe - Drehzahl Motor, Vergleich, Kopplung: Drehzahlunterschied zu groß | 0 |
| 0x1D3401 | Getriebeöltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1D3402 | Getriebeöltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1D3411 | Getriebeöltemperatursensor, elektrisch, Kopplung: Kurzschluss nach Plus | 0 |
| 0x1D3412 | Getriebeöltemperatursensor, elektrisch, Kopplung: Kurzschluss nach Masse | 0 |
| 0x1D3501 | Getriebeölpumpe, Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D3502 | Getriebeölpumpe, Relaisansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D3504 | Getriebeölpumpe, Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3508 | Getriebeölpumpe, Relais: Übertemperatur erkannt | 0 |
| 0x1D3511 | Getriebeölpumpe, Relais, Ansteuerung, Kopplung: Kurzschluss nach Plus | 0 |
| 0x1D3512 | Getriebeölpumpe, Relais, Ansteuerung, Kopplung: Kurzschluss nach Masse | 0 |
| 0x1D3514 | Getriebeölpumpe, Relais, Ansteuerung, Kopplung: Leitungsunterbrechung | 0 |
| 0x1D3518 | Getriebeölpumpe, Relais, Kopplung: Übertemperatur erkannt | 0 |
| 0x1D3601 | Getriebeölkühlung: Getriebeöltemperatur zu hoch | 0 |
| 0x1D3611 | Getriebeölkühlung, Kopplung: Getriebeöltemperatur zu hoch | 0 |
| 0x1D3808 | Kupplungsschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1D3810 | Kupplungsschalter: Positionen zueinander unplausibel | 0 |
| 0x1D3901 | EGS, Signalüberwachung (Drehzahl_Getriebestrang_Turbine): Signalausfall oder ungültiger Signalinhalt | 1 |
| 0x1D3A01 | Kommunikation: Signal (Drehzahl_Getriebestrang_Abtrieb) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0x1D3B01 | EGS, Signalüberwachung (Status_Gangwahl_Antrieb): Signalausfall oder ungültiger Signalinhalt | 1 |
| 0x1D3C01 | Kommunikation: Signal (Status_Schaltung_Aktiv_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig | 1 |
| 0x1D3D01 | Getriebeöltemperatursensor, Signal: festliegend | 0 |
| 0x1D3D11 | Getriebeöltemperatursensor, Signal, Kopplung: festliegend | 0 |
| 0x1E0001 | Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E0108 | Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel | 0 |
| 0x1E0115 | Leerlaufregelung, Kaltstart: Drehzahländerung nicht plausibel | 0 |
| 0x1E0308 | Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel | 0 |
| 0x1E4001 | Sport-Taster, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1E4002 | Sport-Taster, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1E4101 | Servotronic-Taster, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1E4102 | Servotronic-Taster,  elektrisch: Kurzschluss nach Masse | 0 |
| 0x1E5201 | Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5301 | Manipulationsschutz: Motorleistung zu hoch | 0 |
| 0x1E5A20 | Antrieb, Sicherheitsfunktion: Leistungsreduzierung durch Sicherheitskonzept | 0 |
| 0x1F050E | Valvetronic 2, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F050F | Valvetronic 2, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0514 | Valvetronic, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F0515 | Valvetronic, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0516 | Antrieb, Sicherheitsfunktion: AD-Wandler Leerlauftestimpulsprüfung | 0 |
| 0x1F0517 | Antrieb, Sicherheitsfunktion: AD-Wandler Testspannungsprüfung | 0 |
| 0x1F0518 | DME, interner Fehler, Sicherheitsfunktion: Luftmengenabgleich | 0 |
| 0x1F0519 | Antrieb, Sicherheitsfunktion: Fahrpedalmodul oder Pedalwertgeber unplausibel | 0 |
| 0x1F0520 | Antrieb, Sicherheitsfunktion: Drehzahlgeber unplausibel | 0 |
| 0x1F0521 | DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung der Gemischkorrekturfaktoren | 0 |
| 0x1F0522 | DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 1 | 0 |
| 0x1F0523 | Antrieb, Sicherheitsfunktion: Sicherheitsabschaltung Einspritzung | 0 |
| 0x1F0524 | DME, interner Fehler, Sicherheitsfunktion: Lambda-Sollwert | 0 |
| 0x1F0525 | DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung relative Kraftstoffmasse | 0 |
| 0x1F0526 | DME, interner Fehler, Sicherheitsfunktion: Momentenvergleich | 0 |
| 0x1F0527 | DME, interner Fehler, Sicherheitsfunktion: Antriebstrangübersetzungsverhältnis unplausibel | 0 |
| 0x1F0528 | Antrieb, Sicherheitsfunktion: Getriebevariante unplausibel | 0 |
| 0x1F0529 | DME, interner Fehler, Sicherheitsfunktion: Zündwinkelüberwachung | 0 |
| 0x1F0530 | Antrieb, Sicherheitsfunktion: Abschaltpfad-Test negativ | 0 |
| 0x1F0531 | DME, interner Fehler, Sicherheitsfunktion: Plausiblisierung Kraftstoffmasse | 0 |
| 0x1F0532 | DME, interner Fehler, Überwachung MSC-Kommunikation: Fehlfunktion an Baustein R2S2/1 | 0 |
| 0x1F0534 | DME, interner Fehler, Master/Slave Überwachung, Sicherheitsfunktion: A-CAN Kommunikation | 0 |
| 0x1F0535 | Antrieb, Sicherheitsfunktion: Master/Slave Überwachung: FlexRay Kommunikation | 0 |
| 0x1F0536 | DME, interner Fehler, Master/Slave Überwachung, Sicherheitsfunktion: Master Identifizierung | 0 |
| 0x1F0537 | DME, interner Fehler, Master/Slave Überwachung, Sicherheitsfunktion: Anforderung Einspritzabschaltung vom Master | 0 |
| 0x1F053B | DME, interner Fehler, Sicherheitsfunktion: Momentenanforderung unplausibel | 0 |
| 0x1F0904 | DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F0905 | DME, interner Fehler, Valvetronic: Strom unplausibel | 0 |
| 0x1F0906 | DME, interner Fehler, Valvetronic: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1401 | DME, interner Fehler, MSA-Überwachung: fehlerhafte Berechnung | 0 |
| 0x1F1A40 | DME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x1F1A50 | DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A51 | DME, interner Fehler: Lesen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A70 | DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x1F1A71 | DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x1F1A80 | DME, interner Fehler, Watchdog-Ausgang: Fehlfunktion | 0 |
| 0x1F1A81 | DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation | 0 |
| 0x1F1A82 | DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung | 0 |
| 0x1F1A90 | Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A91 | Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A92 | Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1AA0 | DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA1 | DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA2 | DME, interner Fehler: Software-Reset | 0 |
| 0x1F1B40 | Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F1B41 | Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F1B42 | Startaggregat Ritzelstarter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F2102 | Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt | 0 |
| 0x1F2104 | DME, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt | 0 |
| 0x1F2108 | DME, falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2112 | Funktionsfreischaltung, Leistungserhöhung 2: nicht erfolgt | 0 |
| 0x1F2601 | DME, Kodierung: fehlt | 0 |
| 0x1F2604 | DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2701 | DME, Kodierung: Schreibfehler | 0 |
| 0x1F2702 | DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2704 | DME, Kodierung: Daten unplausibel | 0 |
| 0x1F2805 | DME, Software: falsch programmiert | 0 |
| 0x1F2A01 | DME Slave, Kodierung: fehlt | 0 |
| 0x1F2A04 | DME Slave, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2B01 | DME Slave, Kodierung: Schreibfehler | 0 |
| 0x1F2B02 | DME Slave, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2B04 | DME Slave, Kodierung: Daten unplausibel | 0 |
| 0x1F2C04 | DME Slave, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt | 0 |
| 0x1F2C08 | DME Slave, Falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F4A01 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F4D10 | DME, interner Fehler, Ansteuerung Mengensteuerventil: Fehlfunktion | 0 |
| 0x1F5020 | DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | DME Temperatur: Übertemperatur | 0 |
| 0x1F5110 | DME, Kühlung: Übertemperatur erkannt | 0 |
| 0x1FB001 | Powermanagement: Transportüberwachung Ladezustand Batterie OK | 0 |
| 0x1FB101 | Powermanagement: Batterie obere Startfähigkeitsgrenze unterschritten | 0 |
| 0x1FB201 | Check-Control-Meldung (ID 257): Motor zu heiß! Gemäßigt fahren | 0 |
| 0x1FB301 | Check-Control-Meldung (ID 39): Motor überhitzt. Vorsichtig halten | 0 |
| 0x1FB401 | Check-Control-Meldung (ID 367): Antrieb gemäßigt fahren | 0 |
| 0x1FB402 | Check-Control-Meldung (ID 257): Motor zu heiß. Gemäßigt fahren | 0 |
| 0x1FB501 | Check-Control-Meldung (ID 27): Motoröl nachfüllen | 0 |
| 0x1FB601 | Check-Control-Meldung (ID 450): Auto Start Stop Funktion deaktiviert | 0 |
| 0x1FB701 | Check-Control-Meldung (ID 397): Auto Start Stop Funktion ausgefallen | 0 |
| 0x1FB801 | Check-Control-Meldung (ID 212): Motoröldruck. Vorsichtig anhalten | 0 |
| 0x1FB901 | Check-Control-Meldung (ID 278): Niedrigen Gang wählen | 0 |
| 0x1FBA01 | Check-Control-Meldung (ID 32): Tankverschluss offen | 0 |
| 0x1FBB01 | Check-Control-Meldung (ID 567): Motorlüfter. Gemäßigt fahren | 0 |
| 0x1FBC01 | Check-Control-Meldung (ID 584): Transport-Modus | 0 |
| 0x1FBE01 | Check-Control-Meldung (ID 70): Lenkung. Gemäßigt fahren | 0 |
| 0x200711 | DME, interner Fehler, Überwachung Istmoment: maximaler Fehler bankübergreifender Momentenvergleich | 0 |
| 0x200D04 | DME, interner Fehler, Überwachung Sendesignale: Fahrpedal unplausibel | 0 |
| 0x200F11 | DME, interner Fehler, Überwachung Sendesignale: Ist-Radmoment unplausibel | 0 |
| 0x200F12 | DME, interner Fehler, Überwachung Sendesignale: koordiniertes Radmoment unplausibel | 0 |
| 0x200F13 | DME, interner Fehler, Überwachung Sendesignale: Verlustmoment unplausibel | 0 |
| 0x200F14 | DME, interner Fehler, Überwachung Sendesignale: Verstärkung Antriebsstrang unplausibel | 0 |
| 0x200F15 | DME, interner Fehler, Überwachung Sendesignale: Status Schnittstelle Fahrerassistenzsystem unplausibel | 0 |
| 0x200F16 | DME, interner Fehler, Überwachung Sendesignale: Statuswort Radmomentenschnittstelle unplausibel | 0 |
| 0x200F17 | DME, interner Fehler, Überwachung Sendesignale: Schleppmoment unplausibel | 0 |
| 0x200F18 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Fahrpedal unplausibel | 0 |
| 0x200F19 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Ist-Radmoment unplausibel | 0 |
| 0x200F20 | DME, interner Fehler, erweiterte Überwachung Sendesignale: koordiniertes Radmoment unplausibel | 0 |
| 0x200F21 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Verlustmoment unplausibel | 0 |
| 0x200F22 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Verstärkung Antriebsstrang unplausibel | 0 |
| 0x200F23 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Schnittstelle Fahrerassistenzsystem unplausibel | 0 |
| 0x200F24 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Qualifier Radmomentenschnittstelle unplausibel | 0 |
| 0x200F25 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Schleppmoment unplausibel | 0 |
| 0x200F26 | DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Motorlauf unplausibel | 0 |
| 0x200F27 | DME, interner Fehler, Überwachung Sendesignale: Drehzahl Hinterachse unplausibel | 0 |
| 0x200F28 | DME, interner Fehler, Überwachung Sendesignale: Fahrtrichtungswunsch unplausibel | 0 |
| 0x200F29 | DME, interner Fehler, Überwachung Sendesignale: Motorstatus unplausibel | 0 |
| 0x200F2A | DME, interner Fehler, Überwachung Sendesignale: Status Kraftschluss Antriebsstrang unplausibel | 0 |
| 0x200F2B | DME, interner Fehler, erweiterte Überwachung Sendesignale: Drehzahl Hinterachse unplausibel | 0 |
| 0x200F2C | DME, interner Fehler, erweiterte Überwachung Sendesignale: Fahrtrichtungswunsch unplausibel | 0 |
| 0x200F2D | DME, interner Fehler, erweiterte Überwachung Sendesignale: Motorstatus unplausibel | 0 |
| 0x200F2E | DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Kraftschluss Antriebsstrang unplausibel | 0 |
| 0x201004 | CBS-Client: Ausgabe von Ersatzwert | 0 |
| 0x201010 | A- / FA-CAN Hardware: defekt | 0 |
| 0x201020 | FlexRay Hardware: defekt | 0 |
| 0x201101 | DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x201201 | DME Slave, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A001 | Ladeluft-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A011 | Ladeluft-Kühlsystem: Drehzahl Kühlmittelpumpe 2 außerhalb der Toleranz | 0 |
| 0x20A101 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A102 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A104 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A111 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe 2 wegen Übertemperatur | 0 |
| 0x20A112 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe 2 wegen Überspannung | 0 |
| 0x20A114 | Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe 2 wegen Blockierung | 0 |
| 0x20A201 | Ladeluft-Kühlsystem: Schutzfunktion Kühlmittelpumpe wegen Trockenlauf aktiv | 1 |
| 0x20A202 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A204 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A208 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20A211 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe 2 erkannt | 0 |
| 0x20A212 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe 2 zu niedrig | 0 |
| 0x20A214 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe 2 Temperaturschwelle 1 überschritten | 0 |
| 0x20A218 | Ladeluft-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe 2 Temperaturschwelle 2 überschritten | 0 |
| 0x20A501 | Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20A502 | Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20A504 | Turbolader-Kühlmittelpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20A608 | Turbolader-Kühlmittelpumpe, Ansteuerung: Pumpe blockiert | 0 |
| 0x20A610 | Turbolader-Kühlmittelpumpe: blockiert | 0 |
| 0x20A611 | Turbolader-Kühlmittelpumpe, Rückmeldeleitung: Kurzschluss | 0 |
| 0x20A701 | Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A801 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A901 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x20A902 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20BA20 | Kupplungsschalter, Signal: fehlt | 0 |
| 0x20E102 | Kurbelgehäuseentlüftung, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x20E120 | Kurbelgehäuseentlüftung, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x20E121 | Kurbelgehäuseentlüftung 2, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x20E202 | Kurbelgehäuseentlüftung 2, Entlüftungsschlauch: nicht angeschlossen/defekt | 0 |
| 0x210201 | Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | Generator, Temperatur: Übertemperatur | 1 |
| 0x210601 | Generator, mechanisch: Fehlfunktion | 0 |
| 0x210801 | Generator: Typ falsch | 0 |
| 0x210C01 | Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211A21 | BSD-Bus: Kommunikationsfehler | 0 |
| 0x211F01 | Generator/Startergenerator: Kodierung fehlt | 0 |
| 0x211F03 | Generator/Startergenerator: Kodierung oder Programmstand falsch | 0 |
| 0x213301 | Powermanagement: zentrale Überspannung | 1 |
| 0x213401 | Powermanagement: zentrale Unterspannung | 1 |
| 0x213501 | Powermanagement: Batterie Tiefentladung | 1 |
| 0x213601 | Powermanagement: Ruhestromverletzung | 0 |
| 0x213701 | Powermanagement: Batterieloser Betrieb | 1 |
| 0x213801 | Powermanagement: Transportüberwachung Ladezustand Batterie tiefentladen | 1 |
| 0x213901 | Powermanagement: Verbraucherreduzierung aktiv | 1 |
| 0x213A01 | Powermanagement: Transportüberwachung Ladezustand Batterie entladen | 1 |
| 0x213A20 | Bordnetzspannung, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x213A21 | Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x213B01 | Batteriezustandserkennung: Batterie defekt | 0 |
| 0x213C01 | Batteriezustandserkennung: Batterie tiefentladen | 0 |
| 0x215001 | Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 |
| 0x215101 | Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215104 | Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215108 | Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215701 | Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 |
| 0x215801 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 |
| 0x216002 | MSA, Überwachung: Zeitüberschreitung | 0 |
| 0x216104 | MSA, Überwachung: Startverzögerung | 0 |
| 0x216110 | Startaggregat Ritzelstarter: Anzahl MSA-Reflexstarts überschritten | 0 |
| 0x216111 | Startaggregat Ritzelstarter: Anzahl Motorstarts überschritten | 0 |
| 0x218001 | Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion | 0 |
| 0x218201 | Batterieladeeinheit, Sekundäre Batterie: defekt | 0 |
| 0x218301 | Batterieladeeinheit: Fehler im Trennelement/Kabelbaum | 0 |
| 0x218401 | Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x218402 | Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x218404 | Startspannungswandler/Startergenerator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x21A001 | Montagemode: aktiv | 0 |
| 0x21A023 | Verbrennungsmotor: Fehlstart oder Motor ausgegangen ohne Fahrereinfluss | 0 |
| 0x21A210 | Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 0 |
| 0x21A310 | Notlauf 1: Sammelfehler für DME Kopplung | 0 |
| 0x21A311 | Notlauf 1, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A320 | Notlauf 1, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A321 | Notlauf 1, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A330 | Notlauf 2: Sammelfehler für DME Kopplung | 0 |
| 0x21A331 | Notlauf 2, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A340 | Notlauf 2, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A341 | Notlauf 2, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A350 | Notlauf 3: Sammelfehler für DME Kopplung | 0 |
| 0x21A351 | Notlauf 3, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A360 | Notlauf 3, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A361 | Notlauf 3, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A370 | Notlauf 4: Sammelfehler für DME Kopplung | 0 |
| 0x21A371 | Notlauf 4, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A372 | Notlauf 5: Sammelfehler für DME Kopplung | 0 |
| 0x21A373 | Notlauf 5, Slave: Sammelfehler für DME Kopplung | 0 |
| 0x21A380 | Notlauf 4, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A381 | Notlauf 4, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A382 | Notlauf 5, Kopplung vom Slave: Sammelfehler | 0 |
| 0x21A383 | Notlauf 5, Kopplung vom Master: Sammelfehler | 0 |
| 0x21A411 | Pannendatenspeicher, Messwert: Adresse Messkanal ungültig | 0 |
| 0x21A412 | Pannendatenspeicher: Konfigurierter Speicherbedarf überschreitet gültigen Bereich | 0 |
| 0x21A413 | Pannendatenspeicher: Applikation zur Laufzeit geändert oder CRC Kollision mit dem Footer möglich | 0 |
| 0x21A414 | Pannendatenspeicher, Messwert: Speicherbereich ungültig | 0 |
| 0x21A415 | Pannendatenspeicher, Messwert: Speicherbereich überschritten | 0 |
| 0x21A416 | Pannendatenspeicher: Sammelfehler | 0 |
| 0x21A417 | Pannendatenspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A418 | Pannendatenspeicher, Header: Adresse  Messkanal ungültig | 0 |
| 0x21A419 | Pannendatenspeicher, Header: Speicherbereich ungültig | 0 |
| 0x21A41A | Pannendatenspeicher, Header: Speicherbereich überschritten | 0 |
| 0x21A430 | Langzeitqualitätsspeicher: Sammelfehler | 0 |
| 0x21A431 | Langzeitqualitätsspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A432 | Langzeitqualitätsspeicher, Messwert: Adresse ungültig | 0 |
| 0x21A433 | Langzeitqualitätsspeicher: Applikation zur Laufzeit geändert oder CRC Kollision mit dem Footer möglich | 0 |
| 0x21A434 | Langzeitqualitätsspeicher, Messwert: Speicherbereich überschritten | 0 |
| 0x21A435 | DME: interner Fehler [Software, TripRec - Gen. Trigger, Messwert: Adresse Messkanal ungültig] | 0 |
| 0x21A436 | DME: interner Fehler [Software, TripRec - Gen. Trigger: Parameteränderung zur Laufzeit] | 0 |
| 0x22FEA8 | APPMaxRngErrSnsr1_C | 0 |
| 0x22FEA9 | APPMaxRngErrSnsr2_C | 0 |
| 0x22FEAA | APPMinRngErrSnsr1_C | 0 |
| 0x22FEAB | APPMinRngErrSnsr2_C | 0 |
| 0x230008 | Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231501 | Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231A01 | Raddrehzahl, Kommunikation: gestört | 0 |
| 0x231A11 | Raddrehzahl, Kommunikation: gestört | 0 |
| 0x231F04 | A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x232004 | A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 1 |
| 0x239000 | Private-CAN Bus: Kommunikationsfehler | 1 |
| 0x239002 | Private-CAN, Botschaft (10ms Task): Prüfsumme falsch | 0 |
| 0x239003 | Private-CAN, Botschaft (100ms Task): Prüfsumme falsch | 0 |
| 0x239101 | Private-CAN, Botschaft (Segment Task): fehlt | 0 |
| 0x239102 | Private-CAN, Botschaft (10ms Task): fehlt | 0 |
| 0x239103 | Private-CAN, Botschaft (100ms Task): fehlt | 0 |
| 0x239210 | Private-CAN, Botschaft (segmentsynchron, von Master): fehlt | 0 |
| 0x239211 | Private-CAN, Botschaft (segmentsynchron, von Slave): fehlt | 0 |
| 0x239212 | Private-CAN, Botschaft (10ms Task, von Master): Prüfsumme falsch | 0 |
| 0x239213 | Private-CAN, Botschaft (10ms Task, von Master): fehlt | 0 |
| 0x239214 | Private-CAN, Botschaft (10ms Task, von Slave): Prüfsumme falsch | 0 |
| 0x239215 | Private-CAN, Botschaft (10ms Task,von Slave): fehlt | 0 |
| 0x239216 | Private-CAN, Botschaft (100ms Task, von Master): Prüfsumme falsch | 0 |
| 0x239217 | Private-CAN, Botschaft (100ms Task, von Master): fehlt | 0 |
| 0x239218 | Private-CAN, Botschaft (100ms Task, von Slave): Prüfsumme falsch | 0 |
| 0x239219 | Private-CAN, Botschaft (100ms Task, von Slave): fehlt | 0 |
| 0xCD840A | FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD841F | FlexRay Bus: Leitungsfehler | 1 |
| 0xCD8420 | FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8430 | FlexRay Bus: Kommunikationsfehler nach FlexRay Wake-up | 0 |
| 0xCD8440 | Private-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | A-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8801 | FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCD8B02 | FlexRay, Botschaft (Diagnose OBD 1, 263.3.4): Aliveprüfung | 0 |
| 0xCD8B04 | FlexRay, Botschaft (Diagnose OBD 1, 263.3.4): fehlt | 0 |
| 0xCD8BFF | Netzwerkfehler: nur zum Test | 0 |
| 0xCD8E10 | LIN Bus: Kommunikationsfehler | 1 |
| 0xCD8E11 | LIN, Kommunikation (Ladeeinheit für Zusatzbatterie): fehlt | 0 |
| 0xCD8E12 | LIN, Kommunikation (Generator): fehlt | 0 |
| 0xCD8F01 | LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD9001 | LIN, Kommunikation (Ladeluft-Kühlmittelpumpe): fehlt | 1 |
| 0xCD9402 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9432 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: fehlt | 1 |
| 0xCD9435 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 1 |
| 0xCD9437 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD945A | FlexRay, Botschaft (EWS Response Master, 251.0.8): Framefehler | 1 |
| 0xCD945B | FlexRay, Botschaft (EWS Response Master, 251.0.8): fehlt | 1 |
| 0xCD945C | FlexRay, Botschaft (EWS Challenge Slave, 251.4.8): Framefehler | 1 |
| 0xCD9502 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCD9508 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9632 | FlexRay, Botschaft (Status Servotronic, 241.0.2): Aliveprüfung | 1 |
| 0xCD9634 | FlexRay, Botschaft (Status Servotronic, 241.0.2): fehlt | 1 |
| 0xCD9702 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9710 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik 2, 272.4.8): fehlt | 1 |
| 0xCD9711 | FlexRay, Botschaft (Steuerung Diagnose OBD Fahrdynamik, 247.0.2): fehlt | 0 |
| 0xCD9902 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Aliveprüfung | 1 |
| 0xCD9933 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): fehlt | 1 |
| 0xCD9934 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Prüfsumme falsch | 1 |
| 0xCD9A02 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9A10 | FlexRay, Botschaft (Status Kontakt handbremse, 243.1.2): fehlt | 0 |
| 0xCD9B02 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Aliveprüfung | 1 |
| 0xCD9B04 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): fehlt | 1 |
| 0xCD9B08 | FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Prüfsumme falsch | 1 |
| 0xCD9D02 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9D04 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9D08 | FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9E02 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9E04 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9E08 | FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9F02 | FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Aliveprüfung | 1 |
| 0xCD9F04 | FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): fehlt | 1 |
| 0xCD9F08 | FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Prüfsumme falsch | 1 |
| 0xCDA002 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Aliveprüfung | 1 |
| 0xCDA004 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 1 |
| 0xCDA008 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Prüfsumme falsch | 1 |
| 0xCDA102 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xCDA104 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xCDA108 | FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xCDA302 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA321 | FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): Signalfehler | 1 |
| 0xCDA322 | FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): fehlt | 1 |
| 0xCDA323 | FlexRay, Botschaft (Nav-Graph 2 Route Beschreibung, 253.0.8 ): fehlt | 1 |
| 0xCDA324 | FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4 ): fehlt | 1 |
| 0xCDA402 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA421 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA426 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA428 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Aliveprüfung | 1 |
| 0xCDA429 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Prüfsumme falsch | 1 |
| 0xCDA435 | FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA461 | FlexRay, Botschaft (Kopplung 1 Slave Antrieb, 42.0.2): Aliveprüfung | 1 |
| 0xCDA462 | FlexRay, Botschaft (Kopplung 1 Slave Antrieb, 42.0.2): Prüfsumme falsch | 1 |
| 0xCDA463 | FlexRay, Botschaft (Kopplung 1 Slave Antrieb, 42.0.2): fehlt | 1 |
| 0xCDA471 | FlexRay, Botschaft (Kopplung 2 Slave Antrieb, 114.1.2): Aliveprüfung | 1 |
| 0xCDA472 | FlexRay, Botschaft (Kopplung 2 Slave Antrieb, 114.1.2): Prüfsumme falsch | 1 |
| 0xCDA473 | FlexRay, Botschaft (Kopplung 2 Slave Antrieb, 114.1.2): fehlt | 1 |
| 0xCDA474 | FlexRay, Botschaft (Kopplung 3 Slave Antrieb, 114.0.2): Aliveprüfung | 1 |
| 0xCDA475 | FlexRay, Botschaft (Kopplung 3 Slave Antrieb, 114.0.2): Prüfsumme falsch | 1 |
| 0xCDA476 | FlexRay, Botschaft (Kopplung 3 Slave Antrieb, 114.0.2): fehlt | 1 |
| 0xCDA481 | FlexRay, Botschaft (Kopplung 4 Slave Antrieb, 45.0.2): Aliveprüfung | 1 |
| 0xCDA482 | FlexRay, Botschaft (Kopplung 4 Slave Antrieb, 45.0.2): Prüfsumme falsch | 1 |
| 0xCDA483 | FlexRay, Botschaft (Kopplung 4 Slave Antrieb, 45.0.2): fehlt | 1 |
| 0xCDA491 | FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCDA492 | FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCDA493 | FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCDA494 | FlexRay, Botschaft (Soll Bremsmoment Summe Koordiniert, 63.1.4): fehlt | 1 |
| 0xCDA495 | FlexRay, Botschaft (Kopplung 5 Slave Antrieb, 32.0.2): Aliveprüfung | 1 |
| 0xCDA496 | FlexRay, Botschaft (Kopplung 5 Slave Antrieb, 32.0.2): Prüfsumme falsch | 1 |
| 0xCDA497 | FlexRay, Botschaft (Kopplung 5 Slave Antrieb, 32.0.2): fehlt | 1 |
| 0xCDA512 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Aliveprüfung | 1 |
| 0xCDA514 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xCDA518 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Prüfsumme falsch | 1 |
| 0xCDA519 | FA-CAN, Botschaft (Status Energie Spannung Strom, 0x399): fehlt | 0 |
| 0xCDA524 | FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDA525 | FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Signalfehler | 1 |
| 0xCDA67F | Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 1 |
| 0xCDA702 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDAB04 | FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAE04 | FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB204 | FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB302 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Aliveprüfung | 1 |
| 0xCDB304 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB308 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Prüfsumme falsch | 1 |
| 0xCDB404 | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB904 | FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBA04 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA09 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): Signalfehler | 1 |
| 0xCDBB02 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBE02 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBF04 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDC004 | A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC208 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC304 | A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDC310 | A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Signalfehler | 1 |
| 0xCDC401 | FA-CAN, Botschaft (Steuerung Anzeige M-Systeme, 0xDE): fehlt | 1 |
| 0xCDC402 | FA-CAN, Botschaft (Steuerung Anzeige M-Systeme, 0xDE): Aliveprüfung | 1 |
| 0xCDC405 | FA-CAN, Botschaft (Status Energie Spannung Strom, 0x399): fehlt | 1 |
| 0xCDC40A | FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCDC41F | FlexRay Bus: Leitungsfehler | 1 |
| 0xCDC420 | FlexRay Bus: Kommunikationsfehler | 1 |
| 0xCDC430 | FlexRay Bus: Kommunikationsfehler nach FlexRay Wake-up | 0 |
| 0xCDC486 | A-CAN Bus: Kommunikationsfehler | 1 |
| 0xCDC801 | FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCDCBFF | Netzwerkfehler: nur zum Test | 0 |
| 0xCDCC21 | LIN, Kommunikation (Ladeluft-Kühlmittelpumpe 2): fehlt | 1 |
| 0xCDCC40 | LIN Bus 2: Kommunikationsfehler | 1 |
| 0xCDD435 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 0 |
| 0xCDD45A | FlexRay, Botschaft (EWS Response Master, 251.0.8): Framefehler | 1 |
| 0xCDD45B | FlexRay, Botschaft (EWS Response Master, 251.0.8): fehlt | 1 |
| 0xCDD513 | FlexRay, Botschaft (Daten Antriebsstrang 2, 230.0.2): fehlt | 1 |
| 0xCDD613 | FlexRay, Botschaft (Radmoment Antrieb 1, 41.3.4): fehlt | 1 |
| 0xCDD631 | FlexRay, Botschaft (Status M-Drive 2, 266.1.8): Aliveprüfung | 1 |
| 0xCDD632 | FlexRay, Botschaft (Status M-Drive 2, 266.1.8): fehlt | 1 |
| 0xCDD713 | FlexRay, Botschaft (Radmoment Antrieb 4, 40.3.4): fehlt | 1 |
| 0xCDDA10 | FlexRay, Botschaft (Status Kontakt handbremse, 243.1.2): fehlt | 0 |
| 0xCDE411 | FlexRay, Botschaft (Kopplung 1 Master Antrieb, 41.0.2): Aliveprüfung | 1 |
| 0xCDE412 | FlexRay, Botschaft (Kopplung 1 Master Antrieb, 41.0.2): Prüfsumme falsch | 1 |
| 0xCDE413 | FlexRay, Botschaft (Kopplung 1 Master Antrieb, 41.0.2): fehlt | 1 |
| 0xCDE421 | FlexRay, Botschaft (Kopplung 2 Master Antrieb, 113.0.2): Aliveprüfung | 1 |
| 0xCDE422 | FlexRay, Botschaft (Kopplung 2 Master Antrieb, 113.0.2): Prüfsumme falsch | 1 |
| 0xCDE423 | FlexRay, Botschaft (Kopplung 2 Master Antrieb, 113.0.2): fehlt | 1 |
| 0xCDE424 | FlexRay, Botschaft (Kopplung 3 Master Antrieb, 113.1.2): Aliveprüfung | 1 |
| 0xCDE425 | FlexRay, Botschaft (Kopplung 3 Master Antrieb, 113.1.2): Prüfsumme falsch | 1 |
| 0xCDE426 | FlexRay, Botschaft (Kopplung 3 Master Antrieb, 113.1.2): fehlt | 1 |
| 0xCDE431 | FlexRay, Botschaft (Kopplung 4 Master Antrieb, 61.0.2): Aliveprüfung | 1 |
| 0xCDE432 | FlexRay, Botschaft (Kopplung 4 Master Antrieb, 61.0.2): Prüfsumme falsch | 1 |
| 0xCDE433 | FlexRay, Botschaft (Kopplung 4 Master Antrieb, 61.0.2): fehlt | 1 |
| 0xCDE434 | FlexRay, Botschaft (Kopplung 5 Master Antrieb High, 75.0.2): Aliveprüfung | 1 |
| 0xCDE435 | FlexRay, Botschaft (Kopplung 5 Master Antrieb High, 75.0.2): Prüfsumme falsch | 1 |
| 0xCDE436 | FlexRay, Botschaft (Kopplung 5 Master Antrieb High, 75.0.2): fehlt | 1 |
| 0xCDE804 | FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDF404 | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDF504 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDF602 | FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDF604 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDF608 | FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDFA04 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDFB02 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDFB04 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDFB08 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCE0102 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCE0104 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCE0108 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCE0202 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCE0204 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCE0208 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5800 | Zeitzähler ab Startende | s | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5.0 | 1.0 | 0.0 |
| 0x5802 | CARB FREEZE FRAME Byte, Bank 1, für LR | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x580B | Saugrohr-Absolutdruck | hPa | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1.25 | 1.0 | 0.0 |
| 0x580E | Zündwinkel Zylinder 1 | ° KW | - | signed char | - | 0.75 | 1.0 | 0.0 |
| 0x580F | Ansaugluft-Temperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5810 | Aktualität Minimumwarnung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5811 | Motoroelniveau | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5812 | Massenstrom HFM | kg/h | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5813 | relative Luftfüllung | % | - | unsigned char | - | 0.75 | 1.0 | 0.0 |
| 0x5814 | Normierter Fahrpedalwinkel | % | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0.0942 | 1.0 | 0.0 |
| 0x5816 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5818 | Luftmassenfluß | kg/h | - | unsigned char | - | 4.0 | 1.0 | 0.0 |
| 0x5819 | Motordrehzahl [1/min] | 1/min | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x581A | Winkel Einlassventil oeffnet bezogen auf LWOT | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581B | Sollwinkel Nockenwelle Einlass öffnet | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581C | Winkel Auslassventil schließt bezogen auf LWOT | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581D | Sollwinkel Nockenwelle Auslass schließt | ° KW | - | signed int | - | 0.0078125 | 1.0 | 0.0 |
| 0x581E | Ansauglufttemperatur, linearisiert und umgerechnet | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x581F | Kilometerstand bei der Erkennung Ölniveau am Minimum | km | - | unsigned int | - | 10.0 | 1.0 | 0.0 |
| 0x5820 | STATUS Klemme 15 | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x5821 | Steuergerätetemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5822 | Öltemperatur | °C | - | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x5823 | Abstellzeit | s | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5824 | Fehlerstatus E-Maschine | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5825 | Spannung von BCU gemessen | V | - | signed int | - | 0.01 | 1.0 | 0.0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned int | - | 0.00305176 | 1.0 | 0.0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0.01 | 1.0 | 0.0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed int | - | 0.00048828 | 1.0 | 0.0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | °C | - | unsigned char | - | 5.0 | 1.0 | -50.0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5832 | Zustand Motor-Koordinator | 0-n | - | 0xFF | CoEng_st_COMPU_VERB | 1.0 | 1.0 | 0.0 |
| 0x5833 | Statusbyte ON_Oelniveau | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100.0 | 1.0 | 0.0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x583A | Ansaugluft-Temperatur bei Start | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x583B | Fuellstand Kraftstofftank | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0.0942 | 1.0 | 0.0 |
| 0x583D | Betriebsstundenzähler | min | - | unsigned int | - | 6.0 | 1.0 | 0.0 |
| 0x583E | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5840 | DK-Winkel der Notluftposition | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x5841 | Temperatur Steuergerät | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5843 | Bedingung Startanforderung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | -1.0 |
| 0x584A | aktueller Generatorstatus | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned int | - | 0.00039063 | 1.0 | 0.0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned int | - | 0.02 | 1.0 | -200.0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x5854 | Batterietemperatur vom IBS | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned int | - | 0.00125 | 1.0 | 0.0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x585C | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 512.0 | 1.0 | 0.0 |
| 0x585E | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 2.0 | 1.0 | 0.0 |
| 0x5860 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 10.0 | 1.0 | 0.0 |
| 0x5862 | Sollwert Öldruck | kPa | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x5863 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 0.0390625 | 1.0 | 0.0 |
| 0x5865 | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0.29296875 | 1.0 | 0.0 |
| 0x5866 | Relativer Füllstand des Motoröls | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information über CAN | km | - | unsigned int | - | 10.0 | 1.0 | 0.0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned int | - | 0.00025 | 1.0 | 6.0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 |
| 0x586E | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 |
| 0x586F | Öldruck | hPa | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5870 | Spannung Umgebungsdrucksensor | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5871 | Zaehler VVT Endstufenpruefung | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5877 | Rotorposition VVT-Motor | ° | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed int | - | 0.00003052 | 1.0 | 0.0 |
| 0x587B | Soll-Bestromung VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned int | - | 0.0001 | 1.0 | 0.0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x587E | Motortemperatur-Referenzwert aus Modell | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5882 | Motorstarttemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5883 | [0] Spannung Klopfwert Zylinder 1 (Slave 5) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5884 | Grenzerregerstrom E-Maschine 1 | A | - | unsigned char | - | 0.125 | 1.0 | 0.0 |
| 0x5885 | [2][3] Spannung Klopfwert Zylinder 3 (Slave 7) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned int | - | 0.005 | 1.0 | 0.0 |
| 0x5888 | [1] Spannung Klopfwert Zylinder 4 (Slave 8) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x588B | Zeit nach Startende | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x588C | Keramiktemperatur der LSU | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x5890 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x5892 | Differenz zwischen Umgebungsdruck und Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | - | signed int | - | 0.0390625 | 1.0 | 0.0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x5894 | [3][2] Spannung Klopfwerte Zylinder 2 (Slave 7) | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x5898 | Generatorsollspannung für Komponententreiber Generator | V | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x589A | Tastverhältnis Nullgangsensor | % | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x589B | Bedingung unzulässig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x589E | Sollwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x589F | Batterietemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned int | - | 0.01820445 | 1.0 | 0.0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A6 | Rel. Exzenterwinkel | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58AC | Klemmenspannung E-Maschine | V | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | µs | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 (Slave 5) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 (Slave 8) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 (Slave 6) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 (Slave 7) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned int | - | 0.046875 | 1.0 | 0.0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0.75 | 1.0 | 0.0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58BF | Bedingung Powerfail EEPROM | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C0 | VVT-Endstufentemperatur aus Modell | °C | - | unsigned int | - | 0.75 | 1.0 | -48.0 |
| 0x58C1 | Korrigierte Segmentdauer | µs | - | unsigned long | - | 0.05 | 1.0 | 0.0 |
| 0x58C2 | Status STG Anforderung Radmoment Antriebsstrang Summe FAS | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C3 | Status STG Anforderung Drehmoment Kurbelwelle Fahrdynamik | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C4 | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C5 | Status STG ist Bremsmoment Summe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C6 | Status STG ist Lenkwinkel Vorderachse | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C7 | Status STG Status Stabilisierung DSC | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58C8 | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | - | signed int | - | 0.00305176 | 1.0 | 0.0 |
| 0x58C9 | vvtmode | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58CA | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | - | signed int | - | 0.00305176 | 1.0 | 0.0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58CC | Verlustmoment Überwachung | % | - | signed int | - | 0.00305176 | 1.0 | 0.0 |
| 0x58CD | Spannung hinter VVT-Relais | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58CF | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | - | signed int | - | 0.0625 | 1.0 | 0.0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x58D1 | Abkühlung des Motors im Vergleich zum letzten Abstellen | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | 1.0 | 1.0 | 0.0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58D6 | Transition Time O2Sensor Lean2Rich (Sensor2) | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | % DK | - | signed int | - | 0.02441406 | 1.0 | 0.0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned int | - | 0.078125 | 1.0 | 0.0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58DF | Transition Time O2Sensor Rich2Lean (Sensor2) | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E1 | Abgleich DK-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E3 | Abgleich EV-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58E5 | [0] Gefilterte Funkenbrenndauer Zylinder 1 (Slave 5) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E6 | [1] Gefilterte Funkenbrenndauer Zylinder 4 (Slave 8) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E7 | [2] Gefilterte Funkenbrenndauer Zylinder 3 (Slave 6) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E8 | [3] Gefilterte Funkenbrenndauer Zylinder 2 (Slave 7) | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58E9 | empf. Spannung von Wasserpumpe | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x58EA | empf. Istdrehzahl von Wasserpumpe | 1/min | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58EB | überprüfte Umgebungstemp. vom CAN-Kombi | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58EC | empf. Temperatur von Wasserpumpe | °C | - | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x58ED | empf. Strom von Wasserpumpe | A | - | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x58EE | modellierte Umgebungstemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F1 | Zähler für unplausible fsr_w Werte | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0.01289062 | 1.0 | 0.0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed int | - | 0.00078125 | 1.0 | 0.0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58F9 | Maschinen-Typ (BSD, LIN, SGR) | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0.5 | 1.0 | 0.0 |
| 0x58FB | Delta Sondenoffset Führungsregelung | - | - | signed int | - | 0.00003052 | 1.0 | 0.0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58FE | Fehlercode SWT-Freischaltcode | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5900 | Gefiltertes zusätzlicher Sondendelay Mager-Fett, Sonde 2 | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x5901 | Gefiltertes zusätzlicher Sondendelay Fett-Mager, Sonde 2 | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x5904 | [1] IBS Status-/Fehlerbyte 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5905 | [2] IBS Status-/Fehlerbyte 2 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5906 | Solldrehzal Wasserpumpe | 1/min | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5919 | Fehlerstatus E-Maschine | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x591A | Schneller Mittelwert des Lambdareglerfaktor Koppelgröße Master Slave | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x591B | Normierter Fahrpedalwinkel Koppelgröße Master Slave | % | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x591C | Gefilterter Raildruck-Istwert (Absolutdruck) Koppelgröße Master Slave | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x591D | Solldruck Hochdrucksystem Koppelgröße Master Slave | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x591E | Relatives Moment für Aussetzererkennung Koppelgröße Master Slave | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5922 | Lambda-Istwert Bank 1 Koppelgröße über CAN | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5923 | Istwert Einlassventilhub Koppelgröße üebr CAN | mm | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x592A | Motordrehzahl, hochaufgelöst | 1/min | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x592B | Pulsbreite DGI-Sensor min | µs | - | signed long | - | 0.001 | 1.0 | 0.0 |
| 0x592C | Pulsbreite DGI-Sensor max | µs | - | signed long | - | 0.001 | 1.0 | 0.0 |
| 0x592D | KW-Winkelversatz im Motorstart | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x592E | Motorabstellposition | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x592F | Status Synchronisationsmodul | 0-n | - | 0xFF | Epm_stSync_State_t | 1.0 | 1.0 | 0.0 |
| 0x5945 | Anzahl der VVT Notläufe bis zum Tausch | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5946 | Anzahl der VVT Notläufe | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5955 | Spannung hinter Inj/Ign Relais | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x5960 | Einlassventilhub | mm | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x59BD | [0] Einlass - NW Winkelversatz Feinadaption | ° KW | - | signed long | - | 0.02197266 | 1.0 | 0.0 |
| 0x59BE | [1] Auslas -NW Winkelversatz Feinadaption | ° KW | - | signed long | - | 0.02197266 | 1.0 | 0.0 |
| 0x59BF | [0] Einlass -NW Winkelversatz Referenzadaption | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x59C0 | [1 ]Auslass -NW Winkelversatz Referenzadaption | ° KW | - | signed int | - | 0.02197266 | 1.0 | 0.0 |
| 0x59C1 | Fehlerstatus KW-Signal | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x59CA | Triebstrangübersetzungsverhältnis gefiltert in der Funktionsüberwachung | - | - | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0x59CB | Übersetzungsverhältnis gesamt | - | - | unsigned int | - | 0.00097656 | 1.0 | 0.0 |
| 0xF400 | PID 00 | TEXT | - | 4 | - | - | - | - |
| 0xF401 | PID 01 | TEXT | - | 4 | - | - | - | - |
| 0xF402 | PID 02 | TEXT | - | 2 | - | - | - | - |
| 0xF403 | PID 03 | TEXT | - | 2 | - | - | - | - |
| 0xF404 | PID 04 | TEXT | - | 1 | - | - | - | - |
| 0xF405 | PID 05 | TEXT | - | 1 | - | - | - | - |
| 0xF406 | PID 06 | TEXT | - | 1 | - | - | - | - |
| 0xF407 | PID 07 | TEXT | - | 1 | - | - | - | - |
| 0xF408 | PID 08 | TEXT | - | 1 | - | - | - | - |
| 0xF409 | PID 09 | TEXT | - | 1 | - | - | - | - |
| 0xF40A | PID 0A | TEXT | - | 1 | - | - | - | - |
| 0xF40B | PID 0B | TEXT | - | 1 | - | - | - | - |
| 0xF40C | PID 0C | TEXT | - | 2 | - | - | - | - |
| 0xF40D | PID 0D | TEXT | - | 1 | - | - | - | - |
| 0xF40E | PID 0E | TEXT | - | 1 | - | - | - | - |
| 0xF40F | PID 0F | TEXT | - | 1 | - | - | - | - |
| 0xF410 | PID 10 | TEXT | - | 2 | - | - | - | - |
| 0xF411 | PID 11 | TEXT | - | 1 | - | - | - | - |
| 0xF412 | PID 12 | TEXT | - | 1 | - | - | - | - |
| 0xF413 | PID 13 | TEXT | - | 1 | - | - | - | - |
| 0xF414 | PID 14 | TEXT | - | 2 | - | - | - | - |
| 0xF415 | PID 15 | TEXT | - | 2 | - | - | - | - |
| 0xF416 | PID 16 | TEXT | - | 2 | - | - | - | - |
| 0xF417 | PID 17 | TEXT | - | 2 | - | - | - | - |
| 0xF418 | PID 18 | TEXT | - | 2 | - | - | - | - |
| 0xF419 | PID 19 | TEXT | - | 2 | - | - | - | - |
| 0xF41A | PID 1A | TEXT | - | 2 | - | - | - | - |
| 0xF41B | PID 1B | TEXT | - | 2 | - | - | - | - |
| 0xF41C | PID 1C | TEXT | - | 1 | - | - | - | - |
| 0xF41D | PID 1D | TEXT | - | 1 | - | - | - | - |
| 0xF41E | PID 1E | TEXT | - | 1 | - | - | - | - |
| 0xF41F | PID 1F | TEXT | - | 2 | - | - | - | - |
| 0xF420 | PID 20 | TEXT | - | 4 | - | - | - | - |
| 0xF421 | PID 21 | TEXT | - | 2 | - | - | - | - |
| 0xF422 | PID 22 | TEXT | - | 2 | - | - | - | - |
| 0xF423 | PID 23 | TEXT | - | 2 | - | - | - | - |
| 0xF424 | PID 24 | TEXT | - | 4 | - | - | - | - |
| 0xF425 | PID 25 | TEXT | - | 4 | - | - | - | - |
| 0xF426 | PID 26 | TEXT | - | 4 | - | - | - | - |
| 0xF427 | PID 27 | TEXT | - | 4 | - | - | - | - |
| 0xF428 | PID 28 | TEXT | - | 4 | - | - | - | - |
| 0xF429 | PID 29 | TEXT | - | 4 | - | - | - | - |
| 0xF42A | PID 2A | TEXT | - | 4 | - | - | - | - |
| 0xF42B | PID 2B | TEXT | - | 4 | - | - | - | - |
| 0xF42C | PID 2C | TEXT | - | 1 | - | - | - | - |
| 0xF42D | PID 2D | TEXT | - | 1 | - | - | - | - |
| 0xF42E | PID 2E | TEXT | - | 1 | - | - | - | - |
| 0xF42F | PID 2F | TEXT | - | 1 | - | - | - | - |
| 0xF430 | PID 30 | TEXT | - | 1 | - | - | - | - |
| 0xF431 | PID 31 | TEXT | - | 2 | - | - | - | - |
| 0xF432 | PID 32 | TEXT | - | 2 | - | - | - | - |
| 0xF433 | PID 33 | TEXT | - | 1 | - | - | - | - |
| 0xF434 | PID 34 | TEXT | - | 4 | - | - | - | - |
| 0xF435 | PID 35 | TEXT | - | 4 | - | - | - | - |
| 0xF436 | PID 36 | TEXT | - | 4 | - | - | - | - |
| 0xF437 | PID 37 | TEXT | - | 4 | - | - | - | - |
| 0xF438 | PID 38 | TEXT | - | 4 | - | - | - | - |
| 0xF439 | PID 39 | TEXT | - | 4 | - | - | - | - |
| 0xF43A | PID 3A | TEXT | - | 4 | - | - | - | - |
| 0xF43B | PID 3B | TEXT | - | 4 | - | - | - | - |
| 0xF43C | PID 3C | TEXT | - | 2 | - | - | - | - |
| 0xF43D | PID 3D | TEXT | - | 2 | - | - | - | - |
| 0xF43E | PID 3E | TEXT | - | 2 | - | - | - | - |
| 0xF43F | PID 3F | TEXT | - | 2 | - | - | - | - |
| 0xF440 | PID 40 | TEXT | - | 4 | - | - | - | - |
| 0xF441 | PID 41 | TEXT | - | 4 | - | - | - | - |
| 0xF442 | PID 42 | TEXT | - | 2 | - | - | - | - |
| 0xF443 | PID 43 | TEXT | - | 2 | - | - | - | - |
| 0xF444 | PID 44 | TEXT | - | 2 | - | - | - | - |
| 0xF445 | PID 45 | TEXT | - | 1 | - | - | - | - |
| 0xF446 | PID 46 | TEXT | - | 1 | - | - | - | - |
| 0xF447 | PID 47 | TEXT | - | 1 | - | - | - | - |
| 0xF448 | PID 48 | TEXT | - | 1 | - | - | - | - |
| 0xF449 | PID 49 | TEXT | - | 1 | - | - | - | - |
| 0xF44A | PID 4A | TEXT | - | 1 | - | - | - | - |
| 0xF44B | PID 4B | TEXT | - | 1 | - | - | - | - |
| 0xF44C | PID 4C | TEXT | - | 1 | - | - | - | - |
| 0xF44D | PID 4D | TEXT | - | 2 | - | - | - | - |
| 0xF44E | PID 4E | TEXT | - | 2 | - | - | - | - |
| 0xF44F | PID 4F | TEXT | - | 4 | - | - | - | - |
| 0xF450 | PID 50 | TEXT | - | 4 | - | - | - | - |
| 0xF451 | PID 51 | TEXT | - | 1 | - | - | - | - |
| 0xF452 | PID 52 | TEXT | - | 1 | - | - | - | - |
| 0xF453 | PID 53 | TEXT | - | 2 | - | - | - | - |
| 0xF454 | PID 54 | TEXT | - | 2 | - | - | - | - |
| 0xF455 | PID 55 | TEXT | - | 1 | - | - | - | - |
| 0xF456 | PID 56 | TEXT | - | 1 | - | - | - | - |
| 0xF457 | PID 57 | TEXT | - | 1 | - | - | - | - |
| 0xF458 | PID 58 | TEXT | - | 1 | - | - | - | - |
| 0xF459 | PID 59 | TEXT | - | 2 | - | - | - | - |
| 0xF45A | PID 5A | TEXT | - | 1 | - | - | - | - |
| 0xF45B | PID 5B | TEXT | - | 1 | - | - | - | - |
| 0xF45C | PID 5C | TEXT | - | 1 | - | - | - | - |
| 0xF45D | PID 5D | TEXT | - | 2 | - | - | - | - |
| 0xF45E | PID 5E | TEXT | - | 2 | - | - | - | - |
| 0xF45F | PID 5F | TEXT | - | 1 | - | - | - | - |
| 0xF460 | PID 60 | TEXT | - | 4 | - | - | - | - |
| 0xF461 | PID 61 | TEXT | - | 1 | - | - | - | - |
| 0xF462 | PID 62 | TEXT | - | 1 | - | - | - | - |
| 0xF463 | PID 63 | TEXT | - | 2 | - | - | - | - |
| 0xF464 | PID 64 | TEXT | - | 5 | - | - | - | - |
| 0xF465 | PID 65 | TEXT | - | 2 | - | - | - | - |
| 0xF466 | PID 66 | TEXT | - | 5 | - | - | - | - |
| 0xF467 | PID 67 | TEXT | - | 3 | - | - | - | - |
| 0xF468 | PID 68 | TEXT | - | 7 | - | - | - | - |
| 0xF469 | PID 69 | TEXT | - | 7 | - | - | - | - |
| 0xF46A | PID 6A | TEXT | - | 5 | - | - | - | - |
| 0xF46B | PID 6B | TEXT | - | 5 | - | - | - | - |
| 0xF46C | PID 6C | TEXT | - | 5 | - | - | - | - |
| 0xF46D | PID 6D | TEXT | - | 11 | - | - | - | - |
| 0xF46E | PID 6E | TEXT | - | 9 | - | - | - | - |
| 0xF46F | PID 6F | TEXT | - | 3 | - | - | - | - |
| 0xF470 | PID 70 | TEXT | - | 10 | - | - | - | - |
| 0xF471 | PID 71 | TEXT | - | 6 | - | - | - | - |
| 0xF472 | PID 72 | TEXT | - | 5 | - | - | - | - |
| 0xF473 | PID 73 | TEXT | - | 5 | - | - | - | - |
| 0xF474 | PID 74 | TEXT | - | 5 | - | - | - | - |
| 0xF475 | PID 75 | TEXT | - | 7 | - | - | - | - |
| 0xF476 | PID 76 | TEXT | - | 7 | - | - | - | - |
| 0xF477 | PID 77 | TEXT | - | 5 | - | - | - | - |
| 0xF478 | PID 78 | TEXT | - | 9 | - | - | - | - |
| 0xF479 | PID 79 | TEXT | - | 9 | - | - | - | - |
| 0xF47A | PID 7A | TEXT | - | 7 | - | - | - | - |
| 0xF47B | PID 7B | TEXT | - | 7 | - | - | - | - |
| 0xF47C | PID 7C | TEXT | - | 9 | - | - | - | - |
| 0xF47D | PID 7D | TEXT | - | 1 | - | - | - | - |
| 0xF47E | PID 7E | TEXT | - | 1 | - | - | - | - |
| 0xF47F | PID 7F | TEXT | - | 13 | - | - | - | - |
| 0xF480 | PID 80 | TEXT | - | 4 | - | - | - | - |
| 0xF481 | PID 81 | TEXT | - | 21 | - | - | - | - |
| 0xF482 | PID 82 | TEXT | - | 21 | - | - | - | - |
| 0xF483 | PID 83 | TEXT | - | 5 | - | - | - | - |
| 0xF484 | PID 84 | TEXT | - | 1 | - | - | - | - |
| 0xF485 | PID 85 | TEXT | - | 10 | - | - | - | - |
| 0xF486 | PID 86 | TEXT | - | 5 | - | - | - | - |
| 0xF487 | PID 87 | TEXT | - | 5 | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR |
| 0x1001 | Fehler Laenge Argument Ungueltig |
| 0x1002 | Fehler Argument in Tabelle nicht vorhanden |
| 0x1003 | Fehler Argument nicht vorhanden |
| 0x1004 | Fehler 1004 |
| 0x1005 | Fehler Resultwert ausserhalb gueltigem Bereich |
| 0x1006 | Fehler 1006 |
| 0x1007 | Fehler Rueckgabe Job fehlerhaft |
| 0x1008 | Fehler Rueckgabe Service fehlerhaft |
| 0x1009 | Fehler physikalischer Wert ausserhalb gueltigem Bereich |
| 0x100A | Fehler 100A |
| 0x100B | Fehler Unterlauf Fehler |
| 0x100C | Fehler Joblaenge falsch |
| 0x100E | Fehler 100E |
| 0x100F | Fehler Argument Wert im negativ Bereich |
| 0xXY | ERROR_UNKNOWN |

### OBD_RADAR_DIAGKANID_TAB

| WERT | TEXT |
| --- | --- |
| 0x0001 | Zylinderindividuelle Lambda-Fehler Raw Bank 2 |
| 0x0002 | Gemischadaption Diagnose Bank 2 |
| 0x0003 | Diagnose Kraftstoffversorgungssystem HDR Bank 2 |
| 0x0004 | Katalysatorschädigende Aussetzer |
| 0x0005 | Emissionsrelevante Aussetzer |
| 0x0006 | Katalysatordiagnose Bank 2 |
| 0x0007 | UEGO LSU-Plausibilitätsdiagnose Bank 2 |
| 0xFFFF | Kanal-ID nicht Definiert |

### RESET_GRPID

| WERT | TEXT |
| --- | --- |
| 0x00 | SWRESET_GRP_POWERON_E |
| 0x01 | SWRESET_GRP_HWRESET_E |
| 0x02 | SWRESET_GRP_WDT_E |
| 0x03 | SWRESET_GRP_WAKEUP_E |
| 0x04 | SWRESET_GRP_TRAP_E |
| 0x05 | SWRESET_GRP_SB_E |
| 0x06 | SWRESET_GRP_CB_E |
| 0x07 | SWRESET_SOFTRESETGRP_E |
| 0x08 | SWRESET_GRP_DUMMY_01 |
| 0x09 | SWRESET_GRP_DUMMY_02 |
| 0x0A | SWRESET_GRP_SYC_KL15RST_E |
| 0x0B | RESET_SWRESET_ASW_01 |
| 0x0C | RESET_EEP_GRP_E |
| 0x0D | RESET_SWRESET_EPM_E |
| 0x0E | RESET_SWRESET_ESC_E |
| 0x0F | RESET_EXECON_GRP_E |
| 0x10 | SWRESET_GRP_MO_PREICO |
| 0x11 | RESET_SWRESET_MOC |
| 0x12 | RESET_SWRESET_SOP |
| 0x13 | RESET_SWRESET_MOFICO |
| 0x14 | SWRESET_OCWDA |
| 0x15 | RESET_SWRESET_OS_01 |
| 0x16 | RESET_HWEMONGRP_E |
| 0x17 | RESET_ERRINTRGRP_E |
| 0x18 | SWRESET_SYCGRP_E |
| 0x19 | RESET_SWRESET_TPROT |
| 0x1A | RESET_ADCI_E |
| 0x1B | SWRESET_UNSUPPORTED_CPU_E |
| 0x1C | RESET_CANGRP_E |
| 0x1D | RESET_DMA_E |
| 0x1E | RESET_FLASH_E |
| 0x1F | SWRESET_PCP_GRP_E |
| 0xFF | undefiniert |

### RESET_ID

| WERT | TEXT |
| --- | --- |
| 0x0000 | SWRESET_POWERON_E |
| 0x0001 | SWRESET_POWERON_WDT_E |
| 0x0002 | SWRESET_POWERON_KL15_E |
| 0x0003 | SWRESET_HW_E |
| 0x0004 | SWRESET_WDT_E |
| 0x1000 | TRAP_MMU_VAF_E |
| 0x1001 | TRAP_MMU_VAP_E |
| 0x1002 | TRAP_INTPROT_PRIV_E |
| 0x1003 | TRAP_INTPROT_MPR_E |
| 0x1004 | TRAP_INTPROT_MPW_E |
| 0x1005 | TRAP_INTPROT_MPX_E |
| 0x1006 | TRAP_INTPROT_MPP_E |
| 0x1007 | TRAP_INTPROT_MPN_E |
| 0x1008 | TRAP_INTPROT_GRWP_E |
| 0x1009 | TRAP_INSTRERR_IOPC_E |
| 0x100A | TRAP_INSTRERR_UOPC_E |
| 0x100B | TRAP_INSTRERR_OPD_E |
| 0x100C | TRAP_INSTRERR_ALN_E |
| 0x100D | TRAP_INSTRERR_MEM_E |
| 0x100E | TRAP_CONTMANA_FCD_E |
| 0x100F | TRAP_CONTMANA_CDO_E |
| 0x1010 | TRAP_CONTMANA_CDU_E |
| 0x1011 | TRAP_CONTMANA_FCU_E |
| 0x1012 | TRAP_CONTMANA_CSU_E |
| 0x1013 | TRAP_CONTMANA_CTYP_E |
| 0x1014 | TRAP_CONTMANA_NEST_E |
| 0x1015 | TRAP_SYSBUSERR_PSE_E |
| 0x1016 | TRAP_SYSBUSERR_DSE_E |
| 0x1017 | TRAP_SYSBUSERR_DAE_E |
| 0x1018 | TRAP_SYSBUSERR_CAE_E |
| 0x1019 | TRAP_SYSBUSERR_PIE_E |
| 0x101A | TRAP_SYSBUSERR_DIE_E |
| 0x101B | TRAP_ASSTRAP_OVF_E |
| 0x101C | TRAP_ASSTRAP_SOVF_E |
| 0x101D | TRAP_SYSCALL_SYS_E |
| 0x101E | TRAP_NMI_ESR0_E |
| 0x101F | TRAP_NMI_ESR1_E |
| 0x1020 | TRAP_NMI_RES0_E |
| 0x1021 | TRAP_NMI_WDT_E |
| 0x1022 | TRAP_NMI_PE_E |
| 0x1023 | TRAP_NMI_OSCLWD_E |
| 0x1024 | TRAP_NMI_OSCHWD_E |
| 0x1025 | TRAP_NMI_OSCSPWD_E |
| 0x1026 | TRAP_NMI_SYSVCOLCK_E |
| 0x1027 | TRAP_NMI_ERAYVCOLCKT |
| 0x1028 | TRAP_NMI_FLOT_E |
| 0x1029 | TRAP_PE_P_IED_E |
| 0x102A | TRAP_PE_P_IE_T_E |
| 0x102B | TRAP_PE_P_IE_C_E |
| 0x102C | TRAP_PE_P_IE_S_E |
| 0x102D | TRAP_PE_P_IE_B_E |
| 0x102E | TRAP_PE_D_IED_E |
| 0x102F | TRAP_PE_D_IE_T_E |
| 0x1030 | TRAP_PE_D_IE_C_E |
| 0x1031 | TRAP_PE_D_IE_S_E |
| 0x1032 | TRAP_PE_D_IE_B_E |
| 0x1033 | TRAP_NMIPE_LDRAM_DSPR_E |
| 0x1034 | TRAP_NMIPE_DTAG_E |
| 0x1035 | TRAP_NMIPE_SPRAM_PSPR_E |
| 0x1036 | TRAP_NMIPE_PTAG_E |
| 0x1037 | TRAP_NMIPE_PMU_LMU_E |
| 0x1038 | TRAP_NMIPE_PRAM_E |
| 0x1039 | TRAP_NMIPE_CMEM_E |
| 0x103A | TRAP_NMIPE_CAN_E |
| 0x103B | TRAP_NMIPE_ERAY_E |
| 0x103C | TRAP_NMIPE_SRI_E |
| 0x103D | TRAP_NMIPE_EBU_E |
| 0x103E | TRAP_NMIPE_BMU_E |
| 0x2000 | SWRESET_POWERON_SIMU_E |
| 0x2001 | SWRESET_HRESET_SIMU_E |
| 0x2002 | SWRESET_RB_PROG_E |
| 0x2003 | SWRESET_SOFTRESET_5VUNDERVOLTAGE_E |
| 0x2004 | SWRESET_SOFTRESET_POSTDRV2PREDRV_E |
| 0x2005 | SWRESET_CBPROG_E |
| 0x2006 | SWRESET_CBCPU_E |
| 0x2007 | SWRESET_SBDUMMY_1_E |
| 0x2008 | SWRESET_SBDUMMY_2_E |
| 0x2009 | SWRESET_SBDUMMY_3_E |
| 0x200A | SWRESET_SBDUMMY_4_E |
| 0x200B | SWRESET_SBDUMMY_5_E |
| 0x200C | SWRESET_SBDUMMY_6_E |
| 0x200D | SWRESET_SBDUMMY_7_E |
| 0x200E | SWRESET_SBDUMMY_8_E |
| 0x3000 | RESET_SWRESET_BYP_SHUTDOWN |
| 0x3001 | SWRST_EEPBANDGAP_E |
| 0x3002 | SWRST_EEPNODEBUGGER_E |
| 0x3003 | SWRST_EEPDELENVRAM_E |
| 0x3004 | SWRST_WRITE_ERRORS_SECTORCHANGE_E |
| 0x3005 | SWRST_EEPACTFIRSTINIT_E |
| 0x3006 | RESET_SWRESET_EPMHCRS_WAIT_PCP_RESET_E |
| 0x3007 | RESET_SWRESET_ESC_SCHED_RESET_E |
| 0x3008 | SWRST_EXECON_FAULTYSTATE_E |
| 0x3009 | RESET_SWRESET_ILLEGAL_OPCODE |
| 0x300A | RESET_SWRESET_ILLEGAL_RETURN_TO_MAIN |
| 0x300B | RESET_SWRESET_MEMLAY_MP_ACCESS |
| 0x300C | SWRESET_MOCADCNTP_PREICO |
| 0x300D | SWRESET_MOCADCTST_PREICO |
| 0x300E | RESET_SWRESET_ILLEGAL_SW_PATH |
| 0x300F | RESET_SWRESET_MOCCOM_SPI_ERROR |
| 0x3010 | RESET_SWRESET_MOCCOM_CTSOPTST |
| 0x3011 | RESET_SWRESET_MOCCOM_SOPTST |
| 0x3012 | RESET_SWRESET_MOCCOM_CPLCHK_FAILED |
| 0x3013 | RESET_SWRESET_MOCCOM_OS_TIMEOUT_ERROR |
| 0x3014 | RESET_SWRESET_MOCGPTA |
| 0x3015 | RESET_SWRESET_MOCMEM_CPL |
| 0x3016 | RESET_SWRESET_MOCMEM_RAM |
| 0x3017 | RESET_SWRESET_MOCMEM_ROM |
| 0x3018 | RESET_SWRESET_MOCPCP |
| 0x3019 | RESET_SWRESET_MOCRAM_WRI |
| 0x301A | RESET_SWRESET_MOCRAM_CPL |
| 0x301B | RESET_SWRESET_MOCRAM_RAMTAB |
| 0x301C | RESET_SWRESET_MOCRAM_RSTPTRRAM |
| 0x301D | RESET_SWRESET_MOCRAM_STACKRAM |
| 0x301E | RESET_SWRESET_MOCRAM_CSARAM |
| 0x301F | RESET_SWRESET_MOCRAM_XRAM |
| 0x3020 | RESET_SWRESET_MOCRAM_IRAM |
| 0x3021 | RESET_SWRESET_MOCRAM_EXRAM |
| 0x3022 | RESET_SWRESET_MOCRAM_PROTRAM |
| 0x3023 | RESET_SWRESET_MOCRAM_EEPCPL |
| 0x3024 | RESET_SWRESET_MOCRAM_REPEXOK |
| 0x3025 | RESET_SWRESET_MOCROM |
| 0x3026 | RESET_SWRESET_MOCROM_CPL |
| 0x3027 | RESET_SWRESET_MOCROM_INDEX |
| 0x3028 | RESET_SWRESET_MOCROM_WD |
| 0x3029 | RESET_SWRESET_SOPTEST_FAILED |
| 0x302A | RESET_SWRESET_CPLCHK_FAILED |
| 0x302B | RESET_SWRESET_MOCSOP_MSC_ERROR |
| 0x302C | RESET_SWRESET_MOCSOP_SPI_ERROR |
| 0x302D | RESET_SWRESET_MOCSOP_OS_TIMEOUT_ERROR |
| 0x302E | RESET_SWRESET_MOCSOP_TIRESPTIME_ERROR |
| 0x302F | SWRESET_MOFAIR_ADJ_PREICO |
| 0x3030 | SWRESET_MOFRKTI_PREICO |
| 0x3031 | SWRESET_MOFGKC_PREICO |
| 0x3032 | SWRESET_MOFRLC_PREICO |
| 0x3033 | SWRESET_MOFMODC_PREICO |
| 0x3034 | SWRESET_MOFAPP_PREICO |
| 0x3035 | SWRESET_MOFESPD_PREICO |
| 0x3036 | SWRESET_MOFZWC_PREICO |
| 0x3037 | RESET_SWRESET_MOFICO_CHK_SYEGAS_FAILED |
| 0x3038 | SWRESET_MOFTRQCMP_PREICO |
| 0x3039 | SWRESET_MOFTRQRAT_PREICO |
| 0x303A | SWRESET_MOFTX_PREICO |
| 0x303B | SWRESET_MOFVAR_PREICO |
| 0x303C | SWRESET_OCWDA_WDA_ACTV |
| 0x303D | SWRESET_OCWDA_WDA_MONITOR |
| 0x303E | SWRESET_OCWDA_LOW_VLTG |
| 0x303F | SWRESET_OCWDA_OVR_VLTG |
| 0x3040 | RESET_SWRESET_INTERRUPTLOCK_EXPECTED |
| 0x3041 | RESET_USERSTACKOVERFLOW_DETECTED |
| 0x3042 | SWRST_HWEMONDEFAULT_E |
| 0x3043 | RESET_ERRINTR_E |
| 0x3044 | SWRESET_CALWAKEUP_E |
| 0x3045 | SWRESET_DEADLINE1MS_E |
| 0x3046 | SWRESET_DEADLINE10MS_E |
| 0x3047 | SWRESET_DEADLINEBG_E |
| 0x3048 | SWRESET_NMIDISABLED_E |
| 0x3049 | SWRESET_POSTDRIVE_E |
| 0x304A | SWRESET_SOFTRESET_WAKEUP_E |
| 0x304B | SWRESET_SOFTRESET_SHUTDOWN_E |
| 0x304C | SWRESET_T15RSTSHUTDOWN_E |
| 0x304D | SWRESET_UNDERVOLTAGE_E |
| 0x304E | SWRESET_T15_PRE_E |
| 0x304F | RESET_SWRESET_SWOVER_DONE |
| 0x3050 | SWRST_ADCI_ERROR_E |
| 0x3051 | SWRESET_CORE_ENV_E |
| 0x3052 | SWRST_CAN_MESSAGECONFIG |
| 0x3053 | RESET_DMA_ERROR_E |
| 0x3054 | SWRST_FLASHCONFIG_E |
| 0x3055 | SWRESET_PCP_ERROR_E |
| 0xFFFF | undefiniert |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Druck vor Drosselklappe | hPa | pvd_w | - | unsigned int | - | 0.078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4206_WERT | 0x4206 | STAT_0X4206_WERT | [0] Massenstrom über Drosselklappe | kg/h | SwSABMW_mfThrFlap | - | unsigned int | - | 0.03125 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Motor-Temperatur | °C | tmot | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4308_WERT | 0x4308 | STAT_0X4308_WERT | EWAPU Volumenstrom soll (gesamt) | 1/min | newpsoll | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4310_WERT | 0x4310 | STAT_0X4310_WERT | Solltemperatur Kühlmittel | - | tkwsoll_w | - | signed int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Oeltemperatur nach Filter | °C | toel_w | - | unsigned int | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoffverbrauch seit letztem Ölwechsel | - | ozkvbsm_ul | - | unsigned long | - | 0.00012207 | 1.0 | 0.0 | - | 22;2C | - | - |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | Ölkilometer | km | ozoelkm | - | unsigned int | - | 10.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Sensorrohwert Ölniveau | - | oznivr | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Sensorrohwert Permittivität | - | ozpermr_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Sensorrohwert Öltemperatur | - | oztempr | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Öltemperatur ungefiltert | °C | oztemp_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölniveau ungefiltert in [mm] | - | ozniv | - | unsigned char | - | 0.29296875 | 1.0 | 0.0 | - | 22;2C | - | - |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Permitivität für den Tester | - | ozpermakt | - | unsigned int | - | 0.00009155 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x440B_WERT | 0x440B | STAT_0X440B_WERT | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | ozlf1c_eep | - | unsigned char | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x440C_WERT | 0x440C | STAT_0X440C_WERT | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | ozlf2c_eep | - | unsigned char | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x440D_WERT | 0x440D | STAT_0X440D_WERT | Länderfaktor 1 | - | ozlf1t | - | unsigned char | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x440E_WERT | 0x440E | STAT_0X440E_WERT | Länderfaktor 2 | - | ozlf2t | - | unsigned char | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x440F_WERT | 0x440F | STAT_0X440F_WERT | Kurzzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivkrzt | - | unsigned char | - | 0.29296875 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4411_WERT | 0x4411 | STAT_0X4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | - | ozrwkvb | - | signed int | - | 10.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4412_WERT | 0x4412 | STAT_0X4412_WERT | Öllaufzeit | - | ozoelzeit | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4418_WERT | 0x4418 | STAT_0X4418_WERT | Status Ölzustandssensor | - | ozstatus | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4420_WERT | 0x4420 | STAT_0X4420_WERT | Eingangstemperatur Oeldruckregler | °C | tpoelreg_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4421_WERT | 0x4421 | STAT_0X4421_WERT | Öldruckregler P-Anteil | - | poelregp_w | - | signed int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4422_WERT | 0x4422 | STAT_0X4422_WERT | Öldruckregler I-Anteil | - | poelregi_w | - | signed int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4423_WERT | 0x4423 | STAT_0X4423_WERT | Öldruckregler D-Anteil | - | poelregd_w | - | signed int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4424_WERT | 0x4424 | STAT_0X4424_WERT | Bedingung Fehler Oelniveausensor | - | B_ozniverr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4425_WERT | 0x4425 | STAT_0X4425_WERT | Temperatur Oelsumpf | °C | oztempsmpf_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4426_WERT | 0x4426 | STAT_0X4426_WERT | Betriebsart Oeldruckregelung | - | bapoelrist | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4427_WERT | 0x4427 | STAT_0X4427_WERT | Status Anfrage Oelniveaumessung | - | stoelnivena | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4428_WERT | 0x4428 | STAT_0X4428_WERT | Bedingung Oeldruckfunktion an | 0/1 | B_poelfuncon | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4429_WERT | 0x4429 | STAT_0X4429_WERT | Anforderung Oelniveaudetailmessung | 0/1 | B_onqntmssganf | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x442A_WERT | 0x442A | STAT_0X442A_WERT | Oeltemperatur gueltig | - | B_oznivtemp | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x442B_WERT | 0x442B | STAT_0X442B_WERT | Kodierung Antriebsart (Keine-Heck-Allrad-Front) | - | onantriebsartcod | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x442C_WERT | 0x442C | STAT_0X442C_WERT | Rohwert Oilniveau | mm | Oil_niveau | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x442D_WERT | 0x442D | STAT_0X442D_WERT | Korrigiertes Niveau aus TP in MinErk | mm | On_minerk_nivmw | - | unsigned int | - | 0.29296875 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x442E_WERT | 0x442E | STAT_0X442E_WERT | Niv-Mittelwert QntMssg | mm | On_qntmssg_nivmw | - | unsigned int | - | 0.29296875 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x442F_WERT | 0x442F | STAT_0X442F_WERT | ABK Schnittstelle Oelniveau | cl | On_oelniveau | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4430_WERT | 0x4430 | STAT_0X4430_WERT | LSB Status fuer On_oelniveau | - | St_oelniveau_lsb | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4431_WERT | 0x4431 | STAT_0X4431_WERT | MSB Status fuer On_oelniveau | - | St_oelniveau_msb | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4432_WERT | 0x4432 | STAT_0X4432_WERT | Status des ÖNS- Komponententreibes | - | Oil_stKTResults | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4433_WERT | 0x4433 | STAT_0X4433_WERT | Status des ÖNS- Sensors | - | Oil_stSensor | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4434_WERT | 0x4434 | STAT_0X4434_WERT | Bedingung Motorölsensorfehler im Niveauerfassungssystem | - | B_ozlerr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4435_WERT | 0x4435 | STAT_0X4435_WERT | Bedingung Öldruck | 0/1 | B_oeldr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4436_WERT | 0x4436 | STAT_0X4436_WERT | Öldruck Istwert (Absolutdruck) | hPa | SWSABMW_pOilAbsltIs | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4500_WERT | 0x4500 | STAT_0X4500_WERT | Bedingung Kurbelwelle dreht | 0/1 | B_nmot | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IAVEX | 0x4501 | STAT_VVT_EXCENTER_ADAPTION_WERT | Integrierter Offset Hubadaption | - | hubadmrofs_w | - | signed int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| SSPEI | 0x4505 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | Sollwinkel Einlass-VANOS | ° KW | wnwsaeb_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Einlassnockenwellenposition | ° KW | wnwkwe_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Auslassnockenwellenposition | ° KW | wnwkwa_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4508_WERT | 0x4508 | STAT_0X4508_WERT | Bedingung fuel-off Adaption im eingeschwungenen Bereich | 0/1 | B_fofr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4509_WERT | 0x4509 | STAT_0X4509_WERT | Bedingung fuel-off Adaption für Katheizen | 0/1 | B_fofrkh | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x450C_WERT | 0x450C | STAT_0X450C_WERT | Kurbelwellenadaption Einlass erfolgt | 0/1 | B_phade | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x450D_WERT | 0x450D | STAT_0X450D_WERT | Kurbelwellenadaption Auslass erfolgt | 0/1 | B_phada | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x450E_WERT | 0x450E | STAT_0X450E_WERT | [0] Kurbelwellennullpunktverschiebung in Grad für Winkelversatzdiagnose | ° KW | EpmCaS_phiDiffAvrgLim | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4510_WERT | 0x4510 | STAT_0X4510_WERT | VVT-Lageregler, bleibende Abweichung erkannt | 0/1 | B_dvvtregelabweichung | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4511_WERT | 0x4511 | STAT_0X4511_WERT | VVT-Lageregelung, Schwingung erkannt | 0/1 | B_dvvtschwingung | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4512_WERT | 0x4512 | STAT_0X4512_WERT | VVT überlastet | 0/1 | B_vvttempovl_wrn | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4513_WERT | 0x4513 | STAT_0X4513_WERT | VVT-Überlastung, klemmender Steller | 0/1 | B_vvttempovl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4514_WERT | 0x4514 | STAT_0X4514_WERT | VVT-Adaption möglich | 0/1 | B_enadpvvt | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4515_WERT | 0x4515 | STAT_0X4515_WERT | Anforderung, VVT-Anschlaglernen | - | vvtlrnaf | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4516_WERT | 0x4516 | STAT_0X4516_WERT | Status VVT-Anschlaglernen | - | vvtlrnst | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4517_WERT | 0x4517 | STAT_0X4517_WERT | [0] Adaptierte Referenzposition Auslassnockenwellenflanke, Wert 0 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4518_WERT | 0x4518 | STAT_0X4518_WERT | [1] Adaptierte Referenzposition Auslassnockenwellenflanke, Wert 1 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4519_WERT | 0x4519 | STAT_0X4519_WERT | [2] Adaptierte Referenzposition Auslassnockenwellenflanke, Wert 2 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451A_WERT | 0x451A | STAT_0X451A_WERT | [3] Adaptierte Referenzposition Auslassnockenwellenflanke, Wert 3 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451B_WERT | 0x451B | STAT_0X451B_WERT | [4] Adaptierte Referenzposition Auslassnockenwellenflanke, Wert 4 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451C_WERT | 0x451C | STAT_0X451C_WERT | [5] Adaptierte Referenzposition Auslassnockenwellenflanke, Wert 5 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451D_WERT | 0x451D | STAT_0X451D_WERT | Gesamtzeit VVT-Performancetest | - | vvtdtperf_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451E_WERT | 0x451E | STAT_0X451E_WERT | Stromsumme VVT-Performancetest | A | ivvtsumperf_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4520_WERT | 0x4520 | STAT_0X4520_WERT | Motorleistung Effektiv | - | peffm_w | - | unsigned int | - | 0.01525879 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4521_WERT | 0x4521 | STAT_0X4521_WERT | Kraftstoffmassenstrom | kg/h | mkkgh_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4522_WERT | 0x4522 | STAT_0X4522_WERT | [0] Sollkraftstoffmassen Zylinder 1 (Slave 5) | mg/stroke | mkhs_w | - | unsigned int | - | 0.02119478 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4523_WERT | 0x4523 | STAT_0X4523_WERT | [3] Sollkraftstoffmassen Zylinder 4 (Slave 8) | mg/stroke | mkhs_w | - | unsigned int | - | 0.02119478 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4524_WERT | 0x4524 | STAT_0X4524_WERT | [6] Sollkraftstoffmassen Zylinder 3 (Slave 6) | mg/stroke | mkhs_w | - | unsigned int | - | 0.02119478 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4525_WERT | 0x4525 | STAT_0X4525_WERT | [9] Sollkraftstoffmassen Zylinder 2 (Slave 7) | mg/stroke | mkhs_w | - | unsigned int | - | 0.02119478 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x452A_WERT | 0x452A | STAT_0X452A_WERT | Sollwert Auslassspreizung variable NWS BMW | ° KW | wsprnwsa_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x452B_WERT | 0x452B | STAT_0X452B_WERT | Sollwert Einlassspreizung variable NWS BMW | ° KW | wsprnwse_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x452C_WERT | 0x452C | STAT_0X452C_WERT | Istwert Auslaßspreizung BMW | ° KW | wsprnwa_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x452E_WERT | 0x452E | STAT_0X452E_WERT | Istwert Einlaßspreizung BMW | ° KW | wsprnwe_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4530_WERT | 0x4530 | STAT_0X4530_WERT | [0] Aktueller Einspritzmodus Zylinder 1 (Slave 5) | - | InjMdChgA | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4531_WERT | 0x4531 | STAT_0X4531_WERT | [1] Aktueller Einspritzmodus Zylinder 4 (Slave 8) | - | InjMdChgA | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4532_WERT | 0x4532 | STAT_0X4532_WERT | [2] Aktueller Einspritzmodus Zylinder 3 (Slave 6) | - | InjMdChgA | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4533_WERT | 0x4533 | STAT_0X4533_WERT | [3] Aktueller Einspritzmodus Zylinder 2 (Slave 7) | - | InjMdChgA | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4536_WERT | 0x4536 | STAT_0X4536_WERT | Regeldifferenz Ladedruck Bank1 | hPa | SwSABMW_pCtlDifBnkSpc | - | signed int | - | 0.125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4538_WERT | 0x4538 | STAT_0X4538_WERT | [0] Mittlerer Versatz der äquidistanten Flanken der Nockenwelle 0 | ° KW | EpmCaS_phiDiffAvrg | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4539_WERT | 0x4539 | STAT_0X4539_WERT | [1] Mittlerer Versatz der äquidistanten Flanken der Nockenwelle 1 | ° KW | EpmCaS_phiDiffAvrg | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4540_WERT | 0x4540 | STAT_0X4540_WERT | Relative Zeit der Hubadaption | - | SwSABMW_RelTiHubAdap | - | unsigned char | - | 0.00390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | wdkba_w | - | signed int | - | 0.02441406 | 1.0 | 0.0 | - | 22;2C | - | - |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4602_WERT | 0x4602 | STAT_0X4602_WERT | Einlassventilhub (aus Exzenterwinkel gerechnet, mit Hub-Aadaption und mit Hubprädiktion) | mm | evhubi_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4603_WERT | 0x4603 | STAT_0X4603_WERT | Sollwert Einlassventilhub gefiltert | mm | evhubs_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generatorstrom | A | isgusmi_w | - | signed int | - | 0.125 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator | - | isgusmchipvers | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUBAT | 0x460A | STAT_UBATT_WERT | momentane Batteriespannung | V | ubt | - | unsigned int | - | 0.015 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | wub_w | - | unsigned int | - | 0.023481 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x460D_WERT | 0x460D | STAT_0X460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | - | unsigned int | - | 0.004 | 1.0 | -100.0 | - | 22;2C | - | - |
| TDSTF | 0x460E | STAT_0X460E_WERT | Abstand zur Startfähigkeit | % | dsoc_w | - | unsigned int | - | 0.004 | 1.0 | -100.0 | - | 22;2C | - | - |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | DF-Monitor für Batterie-Ladezustand in % | % | dfmonitor | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4613_WERT | 0x4613 | STAT_0X4613_WERT | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | ufgen | - | unsigned char | - | 0.1 | 1.0 | 10.6 | - | 22;2C | - | - |
| STAT_0x4615_WERT | 0x4615 | STAT_0X4615_WERT | Grenzerregerstrom | A | Isgusm_ierrgrenz | - | unsigned int | - | 0.00125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4616_WERT | 0x4616 | STAT_0X4616_WERT | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | tlrgen | - | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4617_WERT | 0x4617 | STAT_0X4617_WERT | Abgenommenes Generatormoment | Nm | isgusmm_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x461A_WERT | 0x461A | STAT_0X461A_WERT | Nominalspannung Regler Generator 1 | V | uregnom | - | unsigned char | - | 0.1 | 1.0 | 10.6 | - | 22;2C | - | - |
| STAT_0x461B_WERT | 0x461B | STAT_0X461B_WERT | Drehzahlschwelle für LoadResponse-Funktion | 1/min | tlrgensch_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4650_WERT | 0x4650 | STAT_0X4650_WERT | Getriebetemperatur | °C | tget | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4651_WERT | 0x4651 | STAT_0X4651_WERT | Tastverhältniss Wastgateansteuerung | % | tvldsten_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4652_WERT | 0x4652 | STAT_0X4652_WERT | Getriebetemperatur Handschalter vom Sensor Slave | °C | GbxOilT_tSens | - | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| STAT_0x4680_WERT | 0x4680 | STAT_0X4680_WERT | Nullgangposition gelernt | 0/1 | B_nggelernt | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4681_WERT | 0x4681 | STAT_0X4681_WERT | Bereitschaft Getriebe Neutralposition anlernen | 0/1 | B_ngimlf | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4682_WERT | 0x4682 | STAT_0X4682_WERT | Drehzahl Getriebedrehzahlsensor | 1/min | GbxSpd_nRevSens | - | signed int | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | B_sbbvk | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | ua10mo_w | - | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22;2C | - | - |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambdasoll Begrenzung (word) | - | lamsbg_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4710_WERT | 0x4710 | STAT_0X4710_WERT | Umgebungsdruck beim Abstellen für die Leckdiagnose | hPa | puleaknvld_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4711_WERT | 0x4711 | STAT_0X4711_WERT | Anzahl erkannte Feinstleck durch Diagnose | - | nvlddiasleakctr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4712_WERT | 0x4712 | STAT_0X4712_WERT | Anzahl dichtes EVAP-System erkannt durch Diagnose | - | nvldnrdiagctr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4713_WERT | 0x4713 | STAT_0X4713_WERT | Zähler Leckdiagnose nicht durchgeführt auf Grund Umgebungsdruckänderung | - | nvldcdnctr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4714_WERT | 0x4714 | STAT_0X4714_WERT | Anzahl Schalterdiagnose im Nachlauf abgeschlossen mit Fehlereintrag | - | nvldswer_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4715_WERT | 0x4715 | STAT_0X4715_WERT | Anzahl Schalterdiagnose im Nachlauf abgeschlossen mit Ergebnis i.O. | - | nvldnoer_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4716_WERT | 0x4716 | STAT_0X4716_WERT | Anzahl Schalterdiagnose im Nachlauf mit 5 Grad C Temperaturkriterium durchgeführt | - | nvldevnt_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x471B_WERT | 0x471B | STAT_0X471B_WERT | Zähler Leckdiagnose nicht durchgeführt auf Grund Tankfüllstand über Schwelle | - | SwSABMW_cntSmlLeakDgnsAbvThd | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Bedingung Kupplungspedal betätigt | 0/1 | B_kuppl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Schalter Kupplung | 0/1 | S_kupp | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Bedingung umschalten auf KFPEDS | 0/1 | B_pedsport | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Bedingung für Kompressoreinschalten | 0/1 | B_koe | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4804_WERT | 0x4804 | STAT_0X4804_WERT | Motorhaubensignal in Ordnung | 0/1 | Com_stHoodOpenSigOk | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Schalter Klemme 50 von CAN | 0/1 | S_ckl50 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | nmot_w | - | unsigned int | - | 0.25 | 1.0 | 0.0 | - | 22;2C | - | - |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlaufsolldrehzahl | 1/min | nsol_w | - | unsigned int | - | 0.25 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Bedingung Leerlaufregelung | 0/1 | B_llr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | normierter Fahrpedalwinkel | % | wped_w | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x480C_WERT | 0x480C | STAT_0X480C_WERT | Fuellungssollwert Motormanager | % | rlsol_w | - | unsigned int | - | 0.0234375 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x480D_WERT | 0x480D | STAT_0X480D_WERT | Fahrbahnlaengsneigung geschaetzt | ° | neigl_w | - | unsigned int | - | 0.05 | 1.0 | -64.0 | - | 22;2C | - | - |
| STAT_0x480E_WERT | 0x480E | STAT_0X480E_WERT | Qualitaet Fahrbahnlaengsneigung | - | neiglqual | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x480F_WERT | 0x480F | STAT_0X480F_WERT | Qualitaet Fahrbahnquerneigung | - | neigqqual | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4810_WERT | 0x4810 | STAT_0X4810_WERT | Fahrbahnquerneigung geschaetzt | ° | neigq_w | - | unsigned int | - | 0.05 | 1.0 | -64.0 | - | 22;2C | - | - |
| STAT_0x4811_WERT | 0x4811 | STAT_0X4811_WERT | Fahrzeugbeschleunigung | m/s² | bfzglfgr | - | signed char | - | 0.21699999 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4812_WERT | 0x4812 | STAT_0X4812_WERT | Querbeschleunigung | m/s² | bfzgqoz_w | - | signed int | - | 0.0015625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4813_WERT | 0x4813 | STAT_0X4813_WERT | Bedingung Powerfail | 0/1 | B_pwf | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISMOT | 0x4820 | STAT_MOTORTASTER_WERT | Motortaster | 0/1 | S_spt | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISSERV | 0x4821 | STAT_SERVOTASTER_WERT | Servotaster | 0/1 | S_lh | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4880_WERT | 0x4880 | STAT_0X4880_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | etkhlmx | - | unsigned char | - | 0.78125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4881_WERT | 0x4881 | STAT_0X4881_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | etkhtmx | - | unsigned char | - | 0.78125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4882_WERT | 0x4882 | STAT_0X4882_WERT | Zaehler Startabbrueche oder Ausgeher nach Schlüsselstart, LambdaRegler nicht aktiv | - | SwSABMW_CntrDetdFaildStrtOnlyKeyStrt | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4883_WERT | 0x4883 | STAT_0X4883_WERT | Zaehler Startabbrueche oder Ausgeher gesamt | - | SwSABMW_CntrDetdFaildStrtTot | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4890_WERT | 0x4890 | STAT_0X4890_WERT | Tprot-Status | - | BasUtil_stECUMode | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4891_WERT | 0x4891 | STAT_0X4891_WERT | OBDRADAR aktiv (Abschaltung wegen Schreibzyklen) | - | SysDiag_flgObdObsvrSectChgEnbl | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A02_WERT | 0x4A02 | STAT_0X4A02_WERT | ATL-Leckagediagnose läuft | 0/1 | B_atlberlek | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4A1B_WERT | 0x4A1B | STAT_0X4A1B_WERT | Elektrische Kraftstoffpumpe | 0/1 | B_ekp | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4A1D_WERT | 0x4A1D | STAT_0X4A1D_WERT | Spannung Bremsenunterdruck | V | udsbkv_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | °C | tmotlinf | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4A2B_WERT | 0x4A2B | STAT_0X4A2B_WERT | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | °C | tfa1linf | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4A2D_WERT | 0x4A2D | STAT_0X4A2D_WERT | Saugrohr-Absolutdruck gemessen | hPa | psrg_w | - | unsigned int | - | 0.078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ1 | 0x4A30 | STAT_LAUFUNRUHE_ZYL1_WERT | [0] Laufunruhe Zylinder logisch 1, physikalisch 1 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ3 | 0x4A32 | STAT_LAUFUNRUHE_ZYL3_WERT | [2] Laufunruhe Zylinder logisch 3, physikalisch 4 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ2 | 0x4A34 | STAT_LAUFUNRUHE_ZYL2_WERT | [1] Laufunruhe Zylinder logisch 2, physikalisch 5 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ4 | 0x4A35 | STAT_LAUFUNRUHE_ZYL4_WERT | [3] Laufunruhe Zylinder logisch 4, physikalisch 8 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN_WERT | Bedingung für erkannte Klopfer | 0/1 | B_kl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | [0] normierter Referenzpegel Klopfregelung Zylinder 1 (Slave 5) | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ3 | 0x4A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | [2] normierter Referenzpegel Klopfregelung Zylinder 3(Slave 6) | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ4 | 0x4A3B | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | [1] normierter Referenzpegel Klopfregelung Zylinder 4(Slave 8) | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ2 | 0x4A3C | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | [3] normierter Referenzpegel Klopfregelung Zylinder 2 (Slave 7) | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ5 | 0x4A43 | STAT_LAUFUNRUHE_ZYL5_WERT | [4] Laufunruhe Zylinder logisch 5, physikalisch 6 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ6 | 0x4A44 | STAT_LAUFUNRUHE_ZYL6_WERT | [5] Laufunruhe Zylinder logisch 6, physikalisch 3 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ7 | 0x4A45 | STAT_LAUFUNRUHE_ZYL7_WERT | [6] Laufunruhe Zylinder logisch 7, physikalisch 7 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ8 | 0x4A46 | STAT_LAUFUNRUHE_ZYL8_WERT | [7] Laufunruhe Zylinder logisch 8, physikalisch 2 | 1/s² | lutskzyl_w | - | signed int | - | 0.00710545 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | [0] Zuendwinkel Zylinder 1 (Slave 5) | ° KW | zwoutzyl_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZWZ4 | 0x4A4A | STAT_ZUENDWINKEL_ZYL4_WERT | [1] Zuendwinkel Zylinder 4 (Slave 8) | ° KW | zwoutzyln_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZWZ3 | 0x4A4C | STAT_ZUENDWINKEL_ZYL3_WERT | [2] Zuendwinkel Zylinder 3 (Slave 6) | ° KW | zwoutzyln_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZWZ2 | 0x4A4D | STAT_ZUENDWINKEL_ZYL2_WERT | [3] Zuendwinkel Zylinder 2 (Slave 7) | ° KW | zwoutzyln_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | B_sbbhk | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | B_hsha | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | B_hstlsua | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bedingung Bremslichtschalter betätigt | 0/1 | B_bl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bedingung Bremstestschalter betätigt | 0/1 | B_br | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISAGK | 0x4A65 | STAT_ABGASKLAPPE_EIN_WERT | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISMIL | 0x4A69 | STAT_MIL_EIN_WERT | MIL-Ansteuerung | 0/1 | B_mil | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISFGR | 0x4A6A | STAT_LAMPE_FGR_EIN_WERT | Lampe FGR ein | 0/1 | B_fgr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISCEL | 0x4A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | B_epcl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4A6C_WERT | 0x4A6C | STAT_0X4A6C_WERT | Korrekturfaktor für die Kraftstoffmenge | % | kva_korr | - | signed char | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAKFT | 0x4A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Tastverhältnis Kennfeldthermostat | - | tkwpwm | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IATEV | 0x4A77 | STAT_TEV_PWM_WERT | ausgegebenes Tastverhältnis für Tankentlüftungsventil (16 Bit) | % | tateout_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAVEP | 0x4A7A | STAT_VANOS_EINLASS_PWM_WERT | Tastverhältnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwree_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAVAP | 0x4A7B | STAT_VANOS_AUSLASS_PWM_WERT | Tastverhältnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwraa_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | fra_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A91_WERT | 0x4A91 | STAT_0X4A91_WERT | Amplitudenverhältnis laafh/laafv gefiltert | - | avkatf | - | unsigned char | - | 0.00390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A93_WERT | 0x4A93 | STAT_0X4A93_WERT | Fehlerzähler für Lernen Nullgang | - | GbxNPos_ctDefPlausDia | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| SANWA | 0x4A94 | STAT_NW_AUSLASS_SOLL_WERT | gespeicherter Nockenwellensollwinkel Auslaß | ° KW | wnwsswa_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | [0] Adaptionswert Nockenwelle Auslass | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | [0] Adaptionswert Nockenwelle Einlass | ° KW | EpmCaS_phiAdapRefPosI1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A97_WERT | 0x4A97 | STAT_0X4A97_WERT | Bedi. Vanos Einlass im Anschlag | 0/1 | B_vseansch | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A9D_WERT | 0x4A9D | STAT_0X4A9D_WERT | multiplikative Gemischkorrektur der Gemischadaption | - | frai_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDSLS | 0x4AA1 | STAT_SLS_DIAGNOSE_WERT | Zyklusflag: Tankentlüftungsventil Endstufe | - | Z_teve_byte | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDLSS | 0x4AA4 | STAT_LS_DIAGNOSE_WERT | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | llsstat | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AAA_WERT | 0x4AAA | STAT_0X4AAA_WERT | Tastverhältnis PWM Ansteuerung Öldruck | % | tvpoel_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AAB_WERT | 0x4AAB | STAT_0X4AAB_WERT | Tastverhältnis an Endstufe des Ladedruckstellers | % | tvldste_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AB0_WERT | 0x4AB0 | STAT_0X4AB0_WERT | Ladedruck- Sollwert | hPa | psolldr_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg_w | - | unsigned int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AB3_WERT | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Zähler für gefahrene Kilometer mit MIL EIN | km | DSMDur_ctPID21h | - | unsigned long | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | sekundengenauer Betriebsstundenzähler als 32 Bitwert | s | topcod_l | - | unsigned long | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Drucksensor Saugrohrdruck (word) | V | udss_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMLUF | 0x4ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert (Word) | kg/h | ml_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV_WERT | Bedingung automatischer Start | 0/1 | B_sta | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4AC2_WERT | 0x4AC2 | STAT_0X4AC2_WERT | Reset Information  | - | Reset_Env.adLoc | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AD5_WERT | 0x4AD5 | STAT_0X4AD5_WERT | Kraftstofftemperatur | °C | tkrst | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4AD6_WERT | 0x4AD6 | STAT_0X4AD6_WERT | Bedingung Schubabschalten | 0/1 | B_sa | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4AE2_WERT | 0x4AE2 | STAT_0X4AE2_WERT | Reset Information - Reset-group-ID of the last reset reason | 0-n | Reset_Env.xGrp | - | unsigned char | Reset_GrpID | - | - | - | - | 22;2C | - | - |
| STAT_0x4AE3_WERT | 0x4AE3 | STAT_0X4AE3_WERT | Reset Information - Reset-ID of the last reset | 0-n | Reset_Env.xId | - | unsigned int | Reset_ID | - | - | - | - | 22;2C | - | - |
| STAT_0x4AE4_WERT | 0x4AE4 | STAT_0X4AE4_WERT | Reset Information - User defined value of the last reset reason | - | Reset_Env.xUserValue | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AEB_WERT | 0x4AEB | STAT_0X4AEB_WERT | Kühlmitteltemperatur < 98 Grad C | % | tmotb1_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AEC_WERT | 0x4AEC | STAT_0X4AEC_WERT | 98 Grad C =< Kühlmitteltemperatur =< 112 Grad C | % | tmotb2_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AED_WERT | 0x4AED | STAT_0X4AED_WERT | 113 Grad C =< Kühlmitteltemperatur =< 120 Grad C | % | tmotb3_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AEE_WERT | 0x4AEE | STAT_0X4AEE_WERT | 121 Grad C =< Kühlmitteltemperatur =< 125 Grad C | % | tmotb4_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AEF_WERT | 0x4AEF | STAT_0X4AEF_WERT | Kühlmitteltemperatur > 125 Grad C | % | tmotb5_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF0_WERT | 0x4AF0 | STAT_0X4AF0_WERT | Motoröltemperatur < 80 Grad C | % | toelb1_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF1_WERT | 0x4AF1 | STAT_0X4AF1_WERT | 80 Grad C =< Motoröltemperatur =< 110 Grad C | % | toelb2_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF2_WERT | 0x4AF2 | STAT_0X4AF2_WERT | 110 Grad C =< Motoröltemperatur =< 135 Grad C | % | toelb3_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF3_WERT | 0x4AF3 | STAT_0X4AF3_WERT | 135 Grad C =< Motoröltemperatur =< 150 Grad C | % | toelb4_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF4_WERT | 0x4AF4 | STAT_0X4AF4_WERT | Motoröltemperatur > 150 Grad C | % | toelb5_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF5_WERT | 0x4AF5 | STAT_0X4AF5_WERT | Getriebeöltemperatur < 80 Grad C | % | tgetb1_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF6_WERT | 0x4AF6 | STAT_0X4AF6_WERT | 80 Grad C =< Getriebeöltemperatur =< 109 Grad C | % | tgetb2_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF7_WERT | 0x4AF7 | STAT_0X4AF7_WERT | 110 Grad C =< Getriebeöltemperatur =< 124 Grad C | % | tgetb3_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF8_WERT | 0x4AF8 | STAT_0X4AF8_WERT | 125 Grad C =< Getriebeöltemperatur =< 129 Grad C | % | tgetb4_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AF9_WERT | 0x4AF9 | STAT_0X4AF9_WERT | Getriebeöltemperatur > 129 Grad C | % | tgetb5_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AFA_WERT | 0x4AFA | STAT_0X4AFA_WERT | Umgebungstemperatur < 3 Grad C | % | tumgb1_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AFB_WERT | 0x4AFB | STAT_0X4AFB_WERT | 3 Grad C =< Umgebungstemperatur =< 19 Grad C | % | tumgb2_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AFC_WERT | 0x4AFC | STAT_0X4AFC_WERT | 20 Grad C =< Umgebungstemperatur =< 29 Grad C | % | tumgb3_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AFD_WERT | 0x4AFD | STAT_0X4AFD_WERT | 30 Grad C =< Umgebungstemperatur =< 39 Grad C | % | tumgb4_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AFE_WERT | 0x4AFE | STAT_0X4AFE_WERT | Umgebungstemperatur > 39 Grad C | % | tumgb5_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B10_WERT | 0x4B10 | STAT_0X4B10_WERT | Superklopfen 1_1 | - | iskn1r1_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B11_WERT | 0x4B11 | STAT_0X4B11_WERT | Superklopfen 1_2 | - | iskn1r2_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B12_WERT | 0x4B12 | STAT_0X4B12_WERT | Superklopfen 1_3 | - | iskn1r3_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B13_WERT | 0x4B13 | STAT_0X4B13_WERT | Superklopfen 2_1 | - | iskn2r1_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B14_WERT | 0x4B14 | STAT_0X4B14_WERT | Superklopfen 2_2 | - | iskn2r2_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B15_WERT | 0x4B15 | STAT_0X4B15_WERT | Superklopfen 2_3 | - | iskn2r3_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B20_WERT | 0x4B20 | STAT_0X4B20_WERT | Superklopfen 3_1 | - | iskn3r1_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B21_WERT | 0x4B21 | STAT_0X4B21_WERT | Superklopfen 3_2 | - | iskn3r2_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B22_WERT | 0x4B22 | STAT_0X4B22_WERT | Superklopfen 3_3 | - | iskn3r3_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B23_WERT | 0x4B23 | STAT_0X4B23_WERT | [0] Zaehler Aussetzerkennung Zylinder 1 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B25_WERT | 0x4B25 | STAT_0X4B25_WERT | [2] Zaehler Aussetzerkennung Zylinder 4 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B31_WERT | 0x4B31 | STAT_0X4B31_WERT | [1] Zaehler Aussetzerkennung Zylinder 5 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B32_WERT | 0x4B32 | STAT_0X4B32_WERT | [3] Zaehler Aussetzerkennung Zylinder 8 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B33_WERT | 0x4B33 | STAT_0X4B33_WERT | [4] Zaehler Aussetzerkennung Zylinder 6 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B34_WERT | 0x4B34 | STAT_0X4B34_WERT | [5] Zaehler Aussetzerkennung Zylinder 3 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B35_WERT | 0x4B35 | STAT_0X4B35_WERT | [6] Zaehler Aussetzerkennung Zylinder 7 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B40_WERT | 0x4B40 | STAT_0X4B40_WERT | [7] Zaehler Aussetzerkennung Zylinder 2 | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5800_WERT | 0x5800 | STAT_0X5800_WERT | Zeitzähler ab Startende | s | tnse_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5801_WERT | 0x5801 | STAT_0X5801_WERT | Umgebungsdruck | hPa | pu | - | unsigned char | - | 5.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | CARB FREEZE FRAME Byte, Bank 1, für LR | - | flglrs | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILMAR | 0x5804 | STAT_LUFTMASSE_RELATIV_WERT | relative Luftmasse (calc. load value) nach SAE J1979 | % | rml | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITMOT | 0x5805 | STAT_MOTORTEMPERATUR_LINEAR_WERT | Motortemperatur, linearisiert und umgerechnet | °C | tmotlin | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| IINT1 | 0x5806 | STAT_INTEGRATOR_BANK1_WERT | Lambda-Regler-Ausgang (Word) | - | fr_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Faktor aus Lambdaregelungsadaption für Bank 1 | - | frann_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPSAU | 0x580B | STAT_SAUGROHRDRUCK_WERT | Saugrohr-Absolutdruck | hPa | ps_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Motordrehzahl | 1/min | nmot | - | unsigned char | - | 40.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg | - | unsigned char | - | 1.25 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündwinkel Zylinder 1 | ° KW | zwzyl1 | - | signed char | - | 0.75 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITANS | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansaugluft-Temperatur | °C | tans | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5810_WERT | 0x5810 | STAT_0X5810_WERT | Aktualität Minimumwarnung | - | B_onausg25erkannt_byte | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5811_WERT | 0x5811 | STAT_0X5811_WERT | Motoroelniveau | - | SwSABMW_lenRelOilLvl | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILMKG | 0x5812 | STAT_LUFTMASSE_WERT | Massenstrom HFM | kg/h | mshfm_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | relative Luftfüllung | % | rl | - | unsigned char | - | 0.75 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5814_WERT | 0x5814 | STAT_0X5814_WERT | Normierter Fahrpedalwinkel | % | wped | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUK87 | 0x5815 | STAT_KL87_SPANNUNG_WERT | Batteriespannung | V | ub | - | unsigned char | - | 0.0942 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5816_WERT | 0x5816 | STAT_0X5816_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | lamsons_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITUMG | 0x5817 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | tumg | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmassenfluß | kg/h | ml | - | unsigned char | - | 4.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5819_WERT | 0x5819 | STAT_0X5819_WERT | Motordrehzahl [1/min] | 1/min | Epm_nEng | - | signed int | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISNWE | 0x581A | STAT_NW_EINLASSSPREIZUNG_WERT | Winkel Einlassventil oeffnet bezogen auf LWOT | ° KW | wnwe_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x581B_WERT | 0x581B | STAT_0X581B_WERT | Sollwinkel Nockenwelle Einlass öffnet | ° KW | wnwse_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISNWA | 0x581C | STAT_NW_AUSLASSSPREIZUNG_WERT | Winkel Auslassventil schließt bezogen auf LWOT | ° KW | wnwa_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x581D_WERT | 0x581D | STAT_0X581D_WERT | Sollwinkel Nockenwelle Auslass schließt | ° KW | wnwsa_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| RTANS | 0x581E | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Ansauglufttemperatur, linearisiert und umgerechnet | °C | tanslin | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x581F_WERT | 0x581F | STAT_0X581F_WERT | Kilometerstand bei der Erkennung Ölniveau am Minimum | km | onausgkmalt_w | - | unsigned int | - | 10.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5820_WERT | 0x5820 | STAT_0X5820_WERT | STATUS Klemme 15 | 0/1 | B_kl15 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x5821_WERT | 0x5821 | STAT_0X5821_WERT | Steuergerätetemperatur | °C | tsg | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5822_WERT | 0x5822 | STAT_0X5822_WERT | Öltemperatur | °C | toel | - | unsigned char | - | 1.0 | 1.0 | -60.0 | - | 22;2C | - | - |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Abstellzeit | s | tabst_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5824_WERT | 0x5824 | STAT_0X5824_WERT | Fehlerstatus E-Maschine | - | stisgusmdiag_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5825_WERT | 0x5825 | STAT_0X5825_WERT | Spannung von BCU gemessen | V | BcuEcu_u | - | signed int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappenwinkel aus Poti 1 | % DK | wdk1 | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAHV1 | 0x5827 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Tastverhältnis für Lambdasondenheizung | % | tahrlsu_w | - | unsigned int | - | 0.00305176 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAHN1 | 0x5829 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomentaufnahme des Wandlers über CAN | % | mdwancan_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x582C_WERT | 0x582C | STAT_0X582C_WERT | Lambdasonden-Istwert | - | lamzak_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x582D_WERT | 0x582D | STAT_0X582D_WERT | Korrekturwert der LSU-Spannung vor KAT | V | kusvk_w | - | signed int | - | 0.00048828 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x582F_WERT | 0x582F | STAT_0X582F_WERT | Abgastemperatur nach KAT aus Modell | °C | tkatm | - | unsigned char | - | 5.0 | 1.0 | -50.0 | - | 22;2C | - | - |
| STAT_0x5830_WERT | 0x5830 | STAT_0X5830_WERT | Dynamikwert der LSU | - | dynlsu_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Zustand Motor-Koordinator | 0-n | CoEng_st | - | unsigned char | CoEng_st_COMPU_VERB | - | - | - | - | 22;2C | - | - |
| STAT_0x5833_WERT | 0x5833 | STAT_0X5833_WERT | Statusbyte ON_Oelniveau | - | SwSABMW_stOilLvlDescr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5834_WERT | 0x5834 | STAT_0X5834_WERT | Umgebungsdruck von Sensor | hPa | pur_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGENH | 0x5835 | STAT_GENERATOR_HERSTELLERCODE_WERT | Kennung Generator Hersteller | - | isgusmherst | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | gefilterter Drehzahlgradient | 1/min/s | ngfil | - | signed char | - | 100.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5837_WERT | 0x5837 | STAT_0X5837_WERT | Solldruck Hochdrucksystem | MPa | prsoll_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5838_WERT | 0x5838 | STAT_0X5838_WERT | Relatives Moment für Aussetzererkennung | % | midmd | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | B_dkpu | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x583A_WERT | 0x583A | STAT_0X583A_WERT | Ansaugluft-Temperatur bei Start | °C | tansst | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Fuellstand Kraftstofftank | l | fstt | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x583C_WERT | 0x583C | STAT_0X583C_WERT | Batteriespannung; vom AD-Wandler erfasster Wert | V | wub | - | unsigned char | - | 0.0942 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x583D_WERT | 0x583D | STAT_0X583D_WERT | Betriebsstundenzähler | min | top_w | - | unsigned int | - | 6.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x583E_WERT | 0x583E | STAT_0X583E_WERT | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | % DK | wdknlpr_w | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x583F_WERT | 0x583F | STAT_0X583F_WERT | Sollwert DK-Winkel, bezogen auf unteren Anschlag | % DK | wdks | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5840_WERT | 0x5840 | STAT_0X5840_WERT | DK-Winkel der Notluftposition | % DK | wdknlp_w | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUSGI | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Temperatur Steuergerät | V | wtsg | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGTYP | 0x5842 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp | - | isgusmmakenn | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5843_WERT | 0x5843 | STAT_0X5843_WERT | Bedingung Startanforderung | - | B_staanf_byte | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITGEE | 0x5844 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | °C | isgusmtchip_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUSV1 | 0x5845 | STAT_SONDENSPANNUNG_VORKAT_WERT | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | uulsuv_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUPW1 | 0x5846 | STAT_PWG1_SPANNUNG_WERT | Spannung PWG-Poti 1 (Word) | V | upwg1_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUPW2 | 0x5847 | STAT_PWG2_SPANNUNG_WERT | Spannung PWG-Poti 2 (Word) | V | upwg2_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUSN1 | 0x5849 | STAT_SONDENSPANNUNG_NACHKAT_WERT | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | ushk_w | - | unsigned int | - | 0.00488281 | 1.0 | -1.0 | - | 22;2C | - | - |
| STAT_0x584A_WERT | 0x584A | STAT_0X584A_WERT | aktueller Generatorstatus | - | stisgusmstatus_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUDK2 | 0x584C | STAT_DK2_SPANNUNG_WERT | Spannung DK-Poti 2 | V | udkp2_w | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 | - | 22;2C | - | - |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Massenstrom Tankentlüftung in das Saugrohr | kg/h | mste_w | - | unsigned int | - | 0.00039063 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUDK1 | 0x584E | STAT_DK1_SPANNUNG_WERT | Spannung DK-Poti 1 | V | udkp1_w | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x584F_WERT | 0x584F | STAT_0X584F_WERT | Erkennung Bordnetzinstabilität | - | statbnserr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKUM | 0x5850 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Signalspannung des Kühlmitteltemperatursensor | V | utcw_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5852_WERT | 0x5852 | STAT_0X5852_WERT | Batteriestrom vom IBS | A | BattuEcu_i | - | unsigned int | - | 0.02 | 1.0 | -200.0 | - | 22;2C | - | - |
| STAT_0x5853_WERT | 0x5853 | STAT_0X5853_WERT | Batteriespannung von IBS | V | BattuEcu_u | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5854_WERT | 0x5854 | STAT_0X5854_WERT | Batterietemperatur vom IBS | °C | BattuEcu_t | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5855_WERT | 0x5855 | STAT_0X5855_WERT | schneller Mittelwert des Lambdaregelfaktors | - | frm_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| IIEGE | 0x5857 | STAT_0X5857_WERT | Erregerstrom Generator 1 | A | isgusmierr_w | - | unsigned int | - | 0.00125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5858_WERT | 0x5858 | STAT_0X5858_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | wdkba | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| IRLN1 | 0x585C | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_OBERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned char | - | 512.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned char | - | 2.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned char | - | 10.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5862_WERT | 0x5862 | STAT_0X5862_WERT | Sollwert Öldruck | kPa | poels_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned char | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMLOE | 0x5865 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivlangt | - | unsigned char | - | 0.29296875 | 1.0 | 0.0 | - | 22;2C | - | - |
| IFSOE | 0x5866 | STAT_FUELLSTAND_MOTOROEL_WERT | Relativer Füllstand des Motoröls | - | oelstandr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5867_WERT | 0x5867 | STAT_0X5867_WERT | Fahrstrecke des Fahrzeugs als Information über CAN | km | kmstand | - | unsigned int | - | 10.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | statsvreg1 | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | statsvreg2 | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUIBS | 0x586A | STAT_UBATT_IBS_WERT | aktuelle Batteriespannung | V | ubatt_w | - | unsigned int | - | 0.00025 | 1.0 | 6.0 | - | 22;2C | - | - |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | t2hstshort | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | t3hstshort | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | t4hstshort | - | unsigned char | - | 14.9333334 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x586F_WERT | 0x586F | STAT_0X586F_WERT | Öldruck | hPa | poel_w | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUUMG | 0x5870 | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung Umgebungsdrucksensor | V | udsu_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5871_WERT | 0x5871 | STAT_0X5871_WERT | Zaehler VVT Endstufenpruefung | - | dvestanznmotctr | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGENR | 0x5872 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion on Generator 1 | - | bsdgenregv | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5875_WERT | 0x5875 | STAT_0X5875_WERT | Soll-Motormoment MSR für schnellen Eingriff | Nm | mdradmsrs_w | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5876_WERT | 0x5876 | STAT_0X5876_WERT | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | prrohr_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5877_WERT | 0x5877 | STAT_0X5877_WERT | Rotorposition VVT-Motor | ° | vvtrotwn_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | dlahi_w | - | signed int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x587B_WERT | 0x587B | STAT_0X587B_WERT | Soll-Bestromung VVT-Motor | A | ivvtlrs_w | - | signed int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x587C_WERT | 0x587C | STAT_0X587C_WERT | Periodendauer des Nullgangsensorsignals | ms | GbxNPos_tiPwmPer | - | unsigned int | - | 0.0001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x587D_WERT | 0x587D | STAT_0X587D_WERT | Status Nullgangsensor | - | stngang | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x587E_WERT | 0x587E | STAT_0X587E_WERT | Motortemperatur-Referenzwert aus Modell | °C | tmrw | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | taml | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motorstarttemperatur | °C | tmst | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5883_WERT | 0x5883 | STAT_0X5883_WERT | [0] Spannung Klopfwert Zylinder 1 (Slave 5) | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5884_WERT | 0x5884 | STAT_0X5884_WERT | Grenzerregerstrom E-Maschine 1 | A | ierrfgrenz | - | unsigned char | - | 0.125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5885_WERT | 0x5885 | STAT_0X5885_WERT | [2][3] Spannung Klopfwert Zylinder 3 (Slave 7) | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| IGENA | 0x5887 | STAT_0X5887_WERT | Auslastungsgrad Generator 1 | - | isgusmdf_w | - | unsigned int | - | 0.005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5888_WERT | 0x5888 | STAT_0X5888_WERT | [1] Spannung Klopfwert Zylinder 4 (Slave 8) | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit nach Startende | s | tnst_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur der LSU | °C | tkerlsu_w | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 | - | 22;2C | - | - |
| STAT_0x5890_WERT | 0x5890 | STAT_0X5890_WERT | Kühlerauslasstemperatur | °C | tka | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Kupplungsmotormoment Istwert | Nm | mkist_w | - | signed int | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5892_WERT | 0x5892 | STAT_0X5892_WERT | Differenz zwischen Umgebungsdruck und Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | dpbkvur_w | - | signed int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | migs_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5894_WERT | 0x5894 | STAT_0X5894_WERT | [3][2] Spannung Klopfwerte Zylinder 2 (Slave 7) | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5896_WERT | 0x5896 | STAT_0X5896_WERT | Abgastemperatur hinter Hauptkat aus Modell | °C | tanhkm_w | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 | - | 22;2C | - | - |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Generatorsollspannung für Komponententreiber Generator | V | Isgusmusoll | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5899_WERT | 0x5899 | STAT_0X5899_WERT | Bedingung Anforderung Motorrelais einschalten | 0/1 | B_amtr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x589A_WERT | 0x589A | STAT_0X589A_WERT | Tastverhältnis Nullgangsensor | % | tngang_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x589B_WERT | 0x589B | STAT_0X589B_WERT | Bedingung unzulässig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | B_ivvtkse | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x589C_WERT | 0x589C | STAT_0X589C_WERT | Bedingung Freigabe VVT-Endstufe | 0/1 | B_vvten | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x589E_WERT | 0x589E | STAT_0X589E_WERT | Sollwert Exzenterwinkel VVT | ° | exwinks_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x589F_WERT | 0x589F | STAT_0X589F_WERT | Batterietemperatur | °C | tbatt | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0X58A0_WERT | Entladung während Ruhestromverletzung | Ah | qiruhe2_w | - | unsigned int | - | 0.01820445 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKME | 0x58A1 | STAT_KILOMETERSTAND_WERT | Wegstrecke_km auf 1km genau | - | kmstand_l | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0X58A2_WERT | Istwert Exzenterwinkel VVT | ° | exwnki_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0X58A3_WERT | rel. Exzenterwinkel am oberen mech. Anschlag | ° | exwnkoar_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0X58A6_WERT | Rel. Exzenterwinkel | ° | exwnkr_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZMAB | 0x58A7 | STAT_MOTORABSTELLZEIT_WERT | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | tabsmn_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A8_WERT | 0x58A8 | STAT_0X58A8_WERT | Rel. Exzenterwinkel am unteren mech. Anschlag | ° | exwnkuar_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0X58A9_WERT | VVT Verstellbereich aus Urlernvorgang | ° | exwnkvb_ur_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AA_WERT | 0x58AA | STAT_0X58AA_WERT | Verstellbereich des Exzenterwinkels | ° | exwnkvb_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AB_WERT | 0x58AB | STAT_0X58AB_WERT | DLR für DV-E: Summe der PID-Anteile | % | dlrspid_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AC_WERT | 0x58AC | STAT_0X58AC_WERT | Klemmenspannung E-Maschine | V | SwSABMW_uTermEmac | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AD_WERT | 0x58AD | STAT_0X58AD_WERT | Sauerstoffspeichervermögen KAT | mg | oscdktt_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AE_WERT | 0x58AE | STAT_0X58AE_WERT | Peridendauer für Massenstrom aus HFM | µs | tpmshfm_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | EKP-Sollvolumenstrom | l | vssekp | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | DK-Adaptionsschritt | - | lrnstep_c | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 (Slave 5) | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ4 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 (Slave 8) | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 (Slave 6) | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ2 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 (Slave 7) | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | aktueller Bremsdruck | hPa | pbrems | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0X58B8_WERT | Motordrehzahl in der Funktionsüberwachung | 1/min | MoF_nEng | - | unsigned char | - | 40.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0X58B9_WERT | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | MoF_uAPP | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BA_WERT | 0x58BA | STAT_0X58BA_WERT | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | rkmeeff_w | - | unsigned int | - | 0.046875 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BB_WERT | 0x58BB | STAT_0X58BB_WERT | Strom für VVT-Motor | A | ivvtm_w | - | signed int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BC_WERT | 0x58BC | STAT_0X58BC_WERT | relative Luftfüllung in der Funktionsüberwachung | % | rl_um | - | unsigned char | - | 0.75 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BD_WERT | 0x58BD | STAT_0X58BD_WERT | Status Fehler Überlast VVT1 | - | stdvovrld | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BE_WERT | 0x58BE | STAT_0X58BE_WERT | DV-E-Adaption: Status Prüfbedingungen | - | dveadchst | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BF_WERT | 0x58BF | STAT_0X58BF_WERT | Bedingung Powerfail EEPROM | - | B_eepwf_byte | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0X58C0_WERT | VVT-Endstufentemperatur aus Modell | °C | tvvtes_w | - | unsigned int | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Korrigierte Segmentdauer | µs | tsk_l | - | unsigned long | - | 0.05 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C2_WERT | 0x58C2 | STAT_0X58C2_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe FAS | - | Com_stTrqWhlDemFASQl_FX | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C3_WERT | 0x58C3 | STAT_0X58C3_WERT | Status STG Anforderung Drehmoment Kurbelwelle Fahrdynamik | - | Com_stDrvDyn_FX | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C4_WERT | 0x58C4 | STAT_0X58C4_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | Com_stEcuRqTrqSumStab_FX | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C5_WERT | 0x58C5 | STAT_0X58C5_WERT | Status STG ist Bremsmoment Summe | - | Com_stEcuBrkTrqSum_FX | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C6_WERT | 0x58C6 | STAT_0X58C6_WERT | Status STG ist Lenkwinkel Vorderachse | - | Com_stEcuAvlSteaFtax_FX | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C7_WERT | 0x58C7 | STAT_0X58C7_WERT | Status STG Status Stabilisierung DSC | - | Com_stECUStStabDSC_FX | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0X58C8_WERT | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | dmllri_w | - | signed int | - | 0.00305176 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58C9_WERT | 0x58C9 | STAT_0X58C9_WERT | vvtmode | - | vvtmode | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58CA_WERT | 0x58CA | STAT_0X58CA_WERT | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | dmllrz_w | - | signed int | - | 0.00305176 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58CB_WERT | 0x58CB | STAT_0X58CB_WERT | PD-Anteil schnell Leerlaufregelung | - | dvvttempovl | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58CC_WERT | 0x58CC | STAT_0X58CC_WERT | Verlustmoment Überwachung | % | tvvvtm_w | - | signed int | - | 0.00305176 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58CD_WERT | 0x58CD | STAT_0X58CD_WERT | Spannung hinter VVT-Relais | V | umtr | - | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58CE_WERT | 0x58CE | STAT_0X58CE_WERT | Carrierbyte Schalterstati | - | funst_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | MoF_trqClthTra16 | - | signed int | - | 0.0625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Berechnetes Ist-Moment in der Funktionsüberwachung | % | MoF_rTrqInrAct | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D1_WERT | 0x58D1 | STAT_0X58D1_WERT | Abkühlung des Motors im Vergleich zum letzten Abstellen | °C | tmotab | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0X58D4_WERT | Startbedingung Kraftschluss erfüllt | 0/1 | B_kupp1 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0X58D5_WERT | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | tfa1lin | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x58D6_WERT | 0x58D6 | STAT_0X58D6_WERT | Transition Time O2Sensor Lean2Rich (Sensor2) | s | trlrS2_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUANS | 0x58D7 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0X58D8_WERT | Differenz-DK-Winkel Sollwert - Istwert | % DK | dwdkdlr_w | - | signed int | - | 0.02441406 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0X58D9_WERT | Schrittzähler DK-Rückstellfeder-Prüfung | - | fprstep_c | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DA_WERT | 0x58DA | STAT_0X58DA_WERT | koordiniertes Moment für Füllung | % | milsol_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DB_WERT | 0x58DB | STAT_0X58DB_WERT | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | fzabgs_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DC_WERT | 0x58DC | STAT_0X58DC_WERT | Intervallzähler für abgasrelevante Aussetzer | - | ivzabg_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DD_WERT | 0x58DD | STAT_0X58DD_WERT | Druck vor Drosselklappe Rohwert | hPa | pvdr_w | - | unsigned int | - | 0.078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DE_WERT | 0x58DE | STAT_0X58DE_WERT | Spannung Drucksensor vor Drosselklappe | V | udsvd_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DF_WERT | 0x58DF | STAT_0X58DF_WERT | Transition Time O2Sensor Rich2Lean (Sensor2) | s | trrlS2_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0X58E0_WERT | Abgleich DK-Modell (Faktor) | - | eisydkfkaf | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0X58E1_WERT | Abgleich DK-Modell (Offset) | kg/h | eisydkkoff | - | signed char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0X58E2_WERT | Abgleich EV-Modell (Faktor) | - | eisyevfkaf | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0X58E3_WERT | Abgleich EV-Modell (Offset) | kg/h | eisyevkoff | - | signed char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0X58E4_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E5_WERT | 0x58E5 | STAT_0X58E5_WERT | [0] Gefilterte Funkenbrenndauer Zylinder 1 (Slave 5) | ms | dztbd_fil | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E6_WERT | 0x58E6 | STAT_0X58E6_WERT | [1] Gefilterte Funkenbrenndauer Zylinder 4 (Slave 8) | ms | dztbd_fil | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E7_WERT | 0x58E7 | STAT_0X58E7_WERT | [2] Gefilterte Funkenbrenndauer Zylinder 3 (Slave 6) | ms | dztbd_fil | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E8_WERT | 0x58E8 | STAT_0X58E8_WERT | [3] Gefilterte Funkenbrenndauer Zylinder 2 (Slave 7) | ms | dztbd_fil | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | empf. Spannung von Wasserpumpe | V | BasSvrAppl_uSplyPmp | - | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| INWAP | 0x58EA | STAT_WASSERPUMPE_DREHZAHL_WERT | empf. Istdrehzahl von Wasserpumpe | 1/min | BasSvrAppl_nActPmp | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58EB_WERT | 0x58EB | STAT_0X58EB_WERT | überprüfte Umgebungstemp. vom CAN-Kombi | °C | ctum | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| ITWAE | 0x58EC | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | empf. Temperatur von Wasserpumpe | °C | BasSvrAppl_tPmp | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22;2C | - | - |
| IIWAP | 0x58ED | STAT_WASSERPUMPE_STROM_WERT | empf. Strom von Wasserpumpe | A | BasSvrAppl_iPmp | - | unsigned char | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58EE_WERT | 0x58EE | STAT_0X58EE_WERT | modellierte Umgebungstemperatur | °C | tumm | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x58EF_WERT | 0x58EF | STAT_0X58EF_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0X58F0_WERT | ungefilterter Raildruck Istwert (abs.) | MPa | prroh_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F1_WERT | 0x58F1 | STAT_0X58F1_WERT | Zähler für unplausible fsr_w Werte | - | fsrnpcnt | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0X58F3_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0X58F4_WERT | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | upnd1ms_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0X58F5_WERT | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | uvvtdia3V | - | unsigned char | - | 0.01289062 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0X58F6_WERT | Sollspannung des VVT Lagereglers | V | uvvtlrs_w | - | signed int | - | 0.00078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0X58F7_WERT | VVT-Strom | - | vvtipl | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F8_WERT | 0x58F8 | STAT_0X58F8_WERT | Zeitdauer anliegende Erregerstrombegrenzung | - | Isgusmierrgrenzz | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F9_WERT | 0x58F9 | STAT_0X58F9_WERT | Maschinen-Typ (BSD, LIN, SGR) | - | Lin_stISGTyp | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FA_WERT | 0x58FA | STAT_0X58FA_WERT | gefilterter Faktor Tankentlüftungs-Adaption | - | fteadf | - | signed char | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FB_WERT | 0x58FB | STAT_0X58FB_WERT | Delta Sondenoffset Führungsregelung | - | dlatrmo_w | - | signed int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FC_WERT | 0x58FC | STAT_0X58FC_WERT | Fertigungs-Werkstatt-,Transportmodus | - | fetrawemod | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FD_WERT | 0x58FD | STAT_0X58FD_WERT | Untermodi des Fe Tra Fla Mode | - | fetraflamod | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FE_WERT | 0x58FE | STAT_0X58FE_WERT | Fehlercode SWT-Freischaltcode | - | Sia_TRes_St | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5900_WERT | 0x5900 | STAT_0X5900_WERT | Gefiltertes zusätzlicher Sondendelay Mager-Fett, Sonde 2 | s | dtlrfS2_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5901_WERT | 0x5901 | STAT_0X5901_WERT | Gefiltertes zusätzlicher Sondendelay Fett-Mager, Sonde 2 | s | dtrlfS2_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5904_WERT | 0x5904 | STAT_0X5904_WERT | [1] IBS Status-/Fehlerbyte 1 | - | BattuEcu_stInfoDiag | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5905_WERT | 0x5905 | STAT_0X5905_WERT | [2] IBS Status-/Fehlerbyte 2 | - | BattuEcu_stInfoDiag | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5906_WERT | 0x5906 | STAT_0X5906_WERT | Solldrehzal Wasserpumpe | 1/min | Layer_nDesTrbChgWP | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5919_WERT | 0x5919 | STAT_0X5919_WERT | Fehlerstatus E-Maschine | - | SwSABMW_stErrEmot | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x591A_WERT | 0x591A | STAT_0X591A_WERT | Schneller Mittelwert des Lambdareglerfaktor Koppelgröße Master Slave | - | frm_cw | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x591B_WERT | 0x591B | STAT_0X591B_WERT | Normierter Fahrpedalwinkel Koppelgröße Master Slave | % | wped_m | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x591C_WERT | 0x591C | STAT_0X591C_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) Koppelgröße Master Slave | MPa | prist_cw | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x591D_WERT | 0x591D | STAT_0X591D_WERT | Solldruck Hochdrucksystem Koppelgröße Master Slave | MPa | prsoll_cw | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x591E_WERT | 0x591E | STAT_0X591E_WERT | Relatives Moment für Aussetzererkennung Koppelgröße Master Slave | % | midmdc | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5922_WERT | 0x5922 | STAT_0X5922_WERT | Lambda-Istwert Bank 1 Koppelgröße über CAN | - | lamsoni_cw | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5923_WERT | 0x5923 | STAT_0X5923_WERT | Istwert Einlassventilhub Koppelgröße üebr CAN | mm | evhubi_cw | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x592A_WERT | 0x592A | STAT_0X592A_WERT | Motordrehzahl, hochaufgelöst | 1/min | Epm_nEng10ms | - | signed int | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x592B_WERT | 0x592B | STAT_0X592B_WERT | Pulsbreite DGI-Sensor min | µs | EpmCrS_tiPlsDgiMin | - | signed long | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x592C_WERT | 0x592C | STAT_0X592C_WERT | Pulsbreite DGI-Sensor max | µs | EpmCrS_tiPlsDgiMax | - | signed long | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x592D_WERT | 0x592D | STAT_0X592D_WERT | KW-Winkelversatz im Motorstart | ° KW | Epm_phiDiffRRS | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x592E_WERT | 0x592E | STAT_0X592E_WERT | Motorabstellposition | ° KW | EpmRRS_phiEngStop | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x592F_WERT | 0x592F | STAT_0X592F_WERT | Status Synchronisationsmodul | 0-n | Epm_stSync | - | unsigned char | Epm_stSync_State_t | - | - | - | - | 22;2C | - | - |
| STAT_0x5945_WERT | 0x5945 | STAT_0X5945_WERT | Anzahl der VVT Notläufe bis zum Tausch | - | anznlvvtaust_eep | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5946_WERT | 0x5946 | STAT_0X5946_WERT | Anzahl der VVT Notläufe | - | anzvvtnlanfh_eep | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5955_WERT | 0x5955 | STAT_0X5955_WERT | Spannung hinter Inj/Ign Relais | V | ubinj | - | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5960_WERT | 0x5960 | STAT_0X5960_WERT | Einlassventilhub | mm | evhubi_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59BD_WERT | 0x59BD | STAT_0X59BD_WERT | [0] Einlass - NW Winkelversatz Feinadaption | ° KW | EpmCaS_phiCaSOfsAvg | - | signed long | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59BE_WERT | 0x59BE | STAT_0X59BE_WERT | [1] Auslas -NW Winkelversatz Feinadaption | ° KW | EpmCaS_phiCaSOfsAvg | - | signed long | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59BF_WERT | 0x59BF | STAT_0X59BF_WERT | [0] Einlass -NW Winkelversatz Referenzadaption | ° KW | EpmCaS_phiDiffAvrg | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59C0_WERT | 0x59C0 | STAT_0X59C0_WERT | [1 ]Auslass -NW Winkelversatz Referenzadaption | ° KW | EpmCaS_phiDiffAvrg | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59C1_WERT | 0x59C1 | STAT_0X59C1_WERT | Fehlerstatus KW-Signal | - | EpmCrS_stSigDiagSrc | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59CA_WERT | 0x59CA | STAT_0X59CA_WERT | Triebstrangübersetzungsverhältnis gefiltert in der Funktionsüberwachung | - | MoF_rTrqPT1Flt | - | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x59CB_WERT | 0x59CB | STAT_0X59CB_WERT | Übersetzungsverhältnis gesamt | - | uevges_w | - | unsigned int | - | 0.00097656 | 1.0 | 0.0 | - | 22;2C | - | - |
| 0xFFFE | 0xFFFE | STAT_0XFFFE_WERT | Umweltbedingung unbekannt Tabellenende | HEX | - | - | unsigned char | - | - | - | - | - | 22;2C | - | - |

### SWSIGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | eingespielt |
| 0x02 | akzeptiert |
| 0x03 | abgelehnt |
| 0xFF | unbekannt |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe von Zuendung und Einspritzung (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört, Motorlauf gesperrt) |
| 0x01 | Freigabe von Zuendung und Einspritzung erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe von Zuendung und Einspritzung abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### T_1BIT_C_STATE_READY_OBD_2_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_FS_ERW_LR_AUS_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 0 - Open Loop - Start-/Ansteuerbedingung fuer Regelung nicht erfuellt |
| 1 | Bit 0 - Open Loop - Start-/Ansteuerbedingung fuer Regelung nicht erfuellt |

### T_1BIT_FS_ERW_LR_AUS_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 1 - Closed Loop - Lambdaregelung-Diagnose |
| 1 | Bit 1 - Closed Loop - Lambdaregelung-Diagnose |

### T_1BIT_FS_ERW_LR_AUS_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 2 - Open Loop - Keine Regelung durch Fahrzustand. Gemisch zu fett/mager |
| 1 | Bit 2 - Open Loop - Keine Regelung durch Fahrzustand. Gemisch zu fett/mager |

### T_1BIT_FS_ERW_LR_AUS_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 3 - Open Loop - Fehler erkannt |
| 1 | Bit 3 - Open Loop - Fehler erkannt |

### T_1BIT_FS_ERW_LR_AUS_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 4 - Closed Loop - Min. eine Lambdasonde fehlerhaft. U.u. in Einzelbetrieb |
| 1 | Bit 4 - Closed Loop - Min. eine Lambdasonde fehlerhaft. U.u. in Einzelbetrieb |

### T_1BIT_FS_ERW_VVTL_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 0 - Fehler unterer Anschlag nicht gefunden |
| 1 | Bit 0 - Fehler unterer Anschlag nicht gefunden |

### T_1BIT_FS_ERW_VVTL_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 1 - Fehler oberer Anschlag nicht gefunden |
| 1 | Bit 1 - Fehler oberer Anschlag nicht gefunden |

### T_1BIT_FS_ERW_VVTL_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 2 - Fehler Verstellbereich Fuehrungssensor unplausibel |
| 1 | Bit 2 - Fehler Verstellbereich Fuehrungssensor unplausibel |

### T_1BIT_FS_ERW_VVTL_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 3 - Fehler Verstellbereich Referenzsensor unplausibel |
| 1 | Bit 3 - Fehler Verstellbereich Referenzsensor unplausibel |

### T_1BIT_FS_ERW_VVTL_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 4 - Fehler zulaessige Hoechstzeit Anschlaglernvorgang ueberschritten |
| 1 | Bit 4 - Fehler zulaessige Hoechstzeit Anschlaglernvorgang ueberschritten |

### T_1BIT_FS_ERW_VVTL_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 5 - Fehler Spannungsversorgung |
| 1 | Bit 5 - Fehler Spannungsversorgung |

### T_1BIT_FS_ERW_VVTL_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 6 - Fehler VVT-Sensor, Leistungsversorgung oder Stellglied |
| 1 | Bit 6 - Fehler VVT-Sensor, Leistungsversorgung oder Stellglied |

### T_1BIT_FS_ERW_VVTL_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 7 - Ruecknahme Lernanforderung |
| 1 | Bit 7 - Ruecknahme Lernanforderung |

### T_1BIT_STATE_READY_OBD_1_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_1_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_1_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STAT_ERR_IO_TRLOG_LZQ_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: Anzahl maximale LZQ Sektorwechsel nicht erreicht. |
| 1 | n.i.O.: Anzahl maximale LZQ Sektorwechsel erreicht. |

### T_1BIT_STAT_ERR_IO_TRLOG_LZQ_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: LZQ Flashsektoren konnten initialisiert werden. |
| 1 | n.i.O.: LZQ Flashsektoren konnten nicht initialisiert werden. |

### T_1BIT_STAT_ERR_IO_TRLOG_LZQ_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: Beim Zählen der LZQ-Events im Flash kein Fehler aufgetreten. |
| 1 | n.i.O.: Beim Zählen der LZQ-Events im Flash ein Fehler aufgetreten. |

### T_1BIT_STAT_ERR_IO_TRLOG_LZQ_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: Letztes LZQ-Event konnte gespeichert werden. |
| 1 | n.i.O.: Letzte LZQ-Event konnte nicht gespeichert werden. |

### T_1BIT_STAT_ERR_IO_TRLOG_LZQ_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Status: Flash (LZQ-Berich) nicht initialisiert. |
| 1 | Status: Flash (LZQ-Berich) initialisiert. |

### T_1BIT_SWITCH_POSITION_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### T_1BIT_SWITCH_POSITION_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor laeuft |

### T_1BIT_SWITCH_POSITION_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### T_1BIT_SWITCH_POSITION_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### T_1BIT_SWITCH_POSITION_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### T_1BIT_SWITCH_POSITION_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 1 aktiv |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Verriegelungsanforderung Wegfahrsperre fuer Einspritzung nicht aktiv |
| 1 | Verriegelungsanforderung Wegfahrsperre fuer Einspritzung aktiv |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich erforderlich |
| 1 | Drosselklappen-Neuabgleich nicht erforderlich |

### T_1BIT_TRLOGERR_LZQ_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: Applikation gueltig: |
| 1 | n.i.O.: Applikation ungueltig: |

### T_1BIT_TRLOGERR_LZQ_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: LZQ Messwerte Adressen gueltig. |
| 1 | n.i.O.: Keine gueltige Adresse eines LZQ Messwertes. |

### T_1BIT_TRLOGERR_LZQ_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | i.O.: Applikationslabel wurden nicht zur gleichen Laufzeit geaendert. |
| 1 | n.i.O.: Applikationslabel wurden zur gleichen Laufzeit geaendert. |

### T_1BYTE_EVENTSTATUS_TRIPRCRD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Datenaufzeichnung gestoppt/initialisiert |
| 1 | Datenaufzeichnung gestartet |
| 2 | Datenaufzeichnung wird gespeichert |
| 3 | Datenaufzeichnung gespeichert |

### T_1BYTE_FS_DKVS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 8 | Funktion vollstaendig durchlaufen Fehler erkannt, fehlerhafte Gemischadaption |
| 9 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 255 | ungueltiger Wert |

### T_1BYTE_FS_DOP

| WERT | TEXT |
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
| 255 | ungueltiger Wert |

### T_1BYTE_FS_LSVK_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Dynamikpruefung Lambdasonde vor Kat ist aktiv |
| 2 | Dynamik Lambdasonde vor Kat geprueft |
| 255 | ungueltiger Wert |

### T_1BYTE_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivierung der Katheizfunktion inaktiv |
| 1 | Deaktivierung der Katheizfunktion aktiv |

### T_1BYTE_ST_MONTAGE_MODUS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Montage-Modus ist inaktiv |
| 1 | Montage-Modus ist aktiv |

### T_BA_IST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |

### T_B_EFRAMAX_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_FRASTAB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_MSRDKAD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Adaption nicht erfolgt |
| 1 | Adaption erfolgt |

### T_B_MSRHUBAD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Adaption nicht erfolgt |
| 1 | Adaption erfolgt |

### T_B_PHADA_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_PHADE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_STANDARD_1BYTE_LESEN_0_1_FAM

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 255 | Groesser 1 |

### T_B_TEAKT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_VVTNOTL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_CILCN_STDIAGTSTR_TEXT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Bedingung fuer mind. 1 Fehler (E_abc) im System erkannt |
| 2 | Bedingung Summenfehler durch DAFIM gesetzt |
| 4 | Bedingung Summenfehler durch DAFIM gesetzt (ungefilterte Adaptionswerte) |
| 6 | Bedingung Summenfehler durch DAFIM gesetzt gefiltert und ungefiltert |
| 16 | Adaption abgeschlossen |
| 18 | Adaption abgeschlossen und Bedingung Summenfehler durch DAFIM gesetzt |
| 20 | Adaption abgeschlossen und Bedingung Summenfehler durch DAFIM ungefiltert gesetzt |
| 32 | Erkennung eines Fehlers waehrend der Diagnose |
| 64 | Lambda-Imbalance Diagnose aktiv |
| 128 | Lambda-Imbalance Diagnose ist freigegeben |
| 192 | Lambda-Imbalance Diagnose ist freigegeben und aktiv |
| 255 | Zustand nicht definiert |

### T_CILCN_STTSTR_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Adaption laeuft |
| 1 | Adaption blockiert, Motor ausserhalb Drehzahl-/Lastbereich |
| 2 | Adaption blockiert, Motortemperatur ausserhalb zul. Bereich |
| 3 | Adaption blockiert, KAT-Temperatur ausserhalb zul. Bereich |
| 4 | Adaption blockiert wegen Fehlerspeichereintrag |
| 5 | Adaption blockiert, weil Lambdawert nicht 1, Kraftstoffversorgungssystem nicht i.O., KAT-Heizen aktiv oder Bauteileschutz aktiv |
| 6 | Adaption blockiert, weil Tankentlueftung oder Gemischadaption aktiv |
| 255 | Adaption ist blockiert (sonstige Freigabebedingung nicht erfuellt) |

### T_STEUERN_EWS4_SK_MODE_DOP

| WERT | TEXT |
| --- | --- |
| 1 | LOCK_SERVER/CLIENT_SK |
| 2 | WRITE_SERVER_SK |
| 3 | WRITE_CLIENT_SK |
| 7 | UNLOCK_CLIENT_SK |

### T_ST_ATLSVC_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Startbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 5 | Funktionstest laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### T_ST_ATLSVC_PVDK_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Ladedruckdiagnose ohne Ergebnis |
| 1 | Ladedruck fehlerfrei |
| 2 | Gesamtladedruck zu niedrig |
| 3 | Turbolader 1 mit Ladedruckfehler |
| 4 | Turbolader 2 mit Ladedruckfehler |
| 5 | Gesamtladedruck zu niedrig, Bank nicht identifiziert |

### T_S_VSMNHB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Schalter fuer Testereingriff nicht aktiv |
| 1 | Schalter fuer Testereingriff aktiv |

### _AUSLESEMODE

| NR | MODE |
| --- | --- |
| 0x00 | GROESSE |
| 0x01 | INPA |
| 0x02 | SGBD |
| 0x03 | FASTA |
| 0xFF | 0 |

### _EISYGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 3.00 |
| 0x01 | 1000 | 100.0 | 90.00 | 8.00 |
| 0x02 | 1500 | 85.00 | 80.00 | 15.0 |
| 0x03 | 3000 | 90.00 | 100.0 | 30.0 |
| 0x04 | 5000 | 110 | 110 | 30.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 4.00 |
| 0x01 | 2000 | 65.0 | 85.0 | 10.00 |
| 0x02 | 3000 | 90.0 | 100.0 | 15.00 |
| 0x03 | 4000 | 100.0 | 100.0 | 20.00 |
| 0x04 | 5000 | 110.0 | 110.0 | 30.00 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYUGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT | PS_WERT |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 660 | 90 | 105 | 0.4 | 900 |
| 0x01 | 1500 | 60 | 72 | 1.5 | 900 |
| 0x02 | 2000 | 56 | 70 | 2.5 | 900 |
| 0x03 | 3000 | 88 | 98 | 9.7 | 1500 |
| 0x04 | 4000 | 108 | 110 | 9.7 | 1500 |
| 0xFF | 0 | 0 | 0 | 0 | 0 |

### _EISYUGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT | PS_WERT |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 660 | 90 | 105 | 0.4 | 900 |
| 0x01 | 660 | 80 | 100 | 0.75 | 900 |
| 0x02 | 660 | 90 | 105 | 1.5 | 900 |
| 0x03 | 660 | 90 | 105 | 2.0 | 900 |
| 0x04 | 1500 | 60 | 72 | 1.5 | 900 |
| 0x05 | 2000 | 56 | 70 | 2.5 | 900 |
| 0x06 | 3000 | 88 | 98 | 9.7 | 1500 |
| 0x07 | 4000 | 108 | 110 | 9.7 | 1500 |
| 0x08 | 6000 | 108 | 110 | 9.7 | 1500 |
| 0xFF | 0 | 0 | 0 | 0 | 0 |

### _KLANN_FASTA

| NR | NKW_LOC_WERT | RK_LOC_WERT | TMOT_LOC_WERT |
| --- | --- | --- | --- |
| 0x00 | 700 | 0.10 | 100 |
| 0x01 | 3000 | 0.10 | 100 |
| 0x02 | 3000 | 0.70 | 100 |
| 0x03 | 1500 | 0.70 | 100 |
| 0x04 | 5000 | 1.00 | 100 |
| 0x05 | 5000 | 1.70 | 100 |
| 0x06 | 800 | 0.20 | 20 |
| 0x07 | 1000 | 0.60 | 20 |
| 0x08 | 2000 | 0.80 | 20 |
| 0x09 | 800 | 0.40 | 0 |
| 0x0A | 1500 | 1.00 | 0 |
| 0xFF | 0 | 0 | 0 |

### _KLANN_INPA

| NR | NKW_LOC_WERT | RK_LOC_WERT | TMOT_LOC_WERT |
| --- | --- | --- | --- |
| 0x00 | 700 | 0.12 | 100 |
| 0x01 | 700 | 0.15 | 100 |
| 0x02 | 1000 | 0.12 | 100 |
| 0x03 | 1000 | 0.20 | 100 |
| 0x04 | 1000 | 0.30 | 100 |
| 0x05 | 1000 | 0.40 | 100 |
| 0x06 | 1000 | 0.50 | 100 |
| 0x07 | 1000 | 0.70 | 100 |
| 0x08 | 1000 | 1.00 | 100 |
| 0x09 | 1000 | 1.20 | 100 |
| 0x0A | 1000 | 1.40 | 100 |
| 0x0B | 1000 | 1.60 | 100 |
| 0x0C | 1500 | 0.12 | 100 |
| 0x0D | 1500 | 0.20 | 100 |
| 0x0E | 1500 | 0.30 | 100 |
| 0x0F | 1500 | 0.40 | 100 |
| 0x10 | 1500 | 0.50 | 100 |
| 0x11 | 1500 | 0.70 | 100 |
| 0x12 | 1500 | 1.00 | 100 |
| 0x13 | 1500 | 1.20 | 100 |
| 0x14 | 1500 | 1.40 | 100 |
| 0x15 | 1500 | 1.60 | 100 |
| 0x16 | 2000 | 0.12 | 100 |
| 0x17 | 2000 | 0.20 | 100 |
| 0x18 | 2000 | 0.30 | 100 |
| 0x19 | 2000 | 0.40 | 100 |
| 0x1A | 2000 | 0.50 | 100 |
| 0x1B | 2000 | 0.70 | 100 |
| 0x1C | 2000 | 1.00 | 100 |
| 0x1D | 2000 | 1.20 | 100 |
| 0x1E | 2000 | 1.40 | 100 |
| 0x1F | 2000 | 1.60 | 100 |
| 0x20 | 2000 | 1.80 | 100 |
| 0x21 | 2500 | 0.12 | 100 |
| 0x22 | 2500 | 0.20 | 100 |
| 0x23 | 2500 | 0.30 | 100 |
| 0x24 | 2500 | 0.40 | 100 |
| 0x25 | 2500 | 0.50 | 100 |
| 0x26 | 2500 | 0.70 | 100 |
| 0x27 | 2500 | 1.00 | 100 |
| 0x28 | 2500 | 1.20 | 100 |
| 0x29 | 2500 | 1.40 | 100 |
| 0x2A | 2500 | 1.60 | 100 |
| 0x2B | 2500 | 1.80 | 100 |
| 0x2C | 3000 | 0.15 | 100 |
| 0x2D | 3000 | 0.20 | 100 |
| 0x2E | 3000 | 0.30 | 100 |
| 0x2F | 3000 | 0.40 | 100 |
| 0x30 | 3000 | 0.50 | 100 |
| 0x31 | 3000 | 0.70 | 100 |
| 0x32 | 3000 | 1.00 | 100 |
| 0x33 | 3000 | 1.20 | 100 |
| 0x34 | 3000 | 1.50 | 100 |
| 0x35 | 3000 | 1.80 | 100 |
| 0x36 | 4000 | 0.15 | 100 |
| 0x37 | 4000 | 0.20 | 100 |
| 0x38 | 4000 | 0.30 | 100 |
| 0x39 | 4000 | 0.40 | 100 |
| 0x3A | 4000 | 0.50 | 100 |
| 0x3B | 4000 | 0.70 | 100 |
| 0x3C | 4000 | 1.00 | 100 |
| 0x3D | 4000 | 1.20 | 100 |
| 0x3E | 4000 | 1.50 | 100 |
| 0x3F | 4000 | 1.80 | 100 |
| 0x40 | 5000 | 0.30 | 100 |
| 0x41 | 5000 | 0.40 | 100 |
| 0x42 | 5000 | 0.50 | 100 |
| 0x43 | 5000 | 0.70 | 100 |
| 0x44 | 5000 | 1.00 | 100 |
| 0x45 | 5000 | 1.20 | 100 |
| 0x46 | 5000 | 1.50 | 100 |
| 0x47 | 5000 | 1.80 | 100 |
| 0x48 | 6000 | 0.30 | 100 |
| 0x49 | 6000 | 0.50 | 100 |
| 0x4A | 6000 | 0.70 | 100 |
| 0x4B | 6000 | 1.00 | 100 |
| 0x4C | 6000 | 1.20 | 100 |
| 0x4D | 6000 | 1.40 | 100 |
| 0x4E | 6000 | 1.60 | 100 |
| 0x4F | 6000 | 1.80 | 100 |
| 0x50 | 700 | 0.12 | 20 |
| 0x51 | 700 | 0.15 | 20 |
| 0x52 | 1000 | 0.12 | 20 |
| 0x53 | 1000 | 0.30 | 20 |
| 0x54 | 1000 | 0.50 | 20 |
| 0x55 | 1000 | 0.70 | 20 |
| 0x56 | 1000 | 1.00 | 20 |
| 0x57 | 1000 | 1.40 | 20 |
| 0x58 | 1000 | 1.80 | 20 |
| 0x59 | 1500 | 0.12 | 20 |
| 0x5A | 1500 | 0.15 | 20 |
| 0x5B | 1500 | 0.20 | 20 |
| 0x5C | 1500 | 0.30 | 20 |
| 0x5D | 1500 | 0.50 | 20 |
| 0x5E | 1500 | 0.70 | 20 |
| 0x5F | 1500 | 1.00 | 20 |
| 0x60 | 1500 | 1.20 | 20 |
| 0x61 | 1500 | 1.40 | 20 |
| 0x62 | 1500 | 1.60 | 20 |
| 0x63 | 1500 | 1.80 | 20 |
| 0x64 | 2000 | 0.15 | 20 |
| 0x65 | 2000 | 0.20 | 20 |
| 0x66 | 2000 | 0.50 | 20 |
| 0x67 | 2000 | 0.70 | 20 |
| 0x68 | 2000 | 1.00 | 20 |
| 0x69 | 2000 | 1.20 | 20 |
| 0x6A | 2000 | 1.40 | 20 |
| 0x6B | 2000 | 1.60 | 20 |
| 0x6C | 2000 | 1.80 | 20 |
| 0x6D | 3000 | 0.15 | 20 |
| 0x6E | 3000 | 0.20 | 20 |
| 0x6F | 3000 | 0.60 | 20 |
| 0x70 | 3000 | 1.00 | 20 |
| 0x71 | 3000 | 1.40 | 20 |
| 0x72 | 4000 | 0.40 | 20 |
| 0x73 | 4000 | 0.80 | 20 |
| 0x74 | 4000 | 1.00 | 20 |
| 0x75 | 4000 | 1.20 | 20 |
| 0x76 | 4000 | 1.40 | 20 |
| 0x77 | 700 | 0.12 | 0 |
| 0x78 | 700 | 0.15 | 0 |
| 0x79 | 1000 | 0.12 | 0 |
| 0x7A | 1000 | 0.20 | 0 |
| 0x7B | 1000 | 0.30 | 0 |
| 0x7C | 1000 | 0.70 | 0 |
| 0x7D | 1000 | 1.00 | 0 |
| 0x7E | 2000 | 0.15 | 0 |
| 0x7F | 2000 | 0.20 | 0 |
| 0x80 | 2000 | 0.30 | 0 |
| 0x81 | 2000 | 0.70 | 0 |
| 0x82 | 2000 | 1.00 | 0 |
| 0x83 | 2000 | 1.30 | 0 |
| 0x84 | 2000 | 1.60 | 0 |
| 0x85 | 3000 | 0.15 | 0 |
| 0x86 | 3000 | 0.30 | 0 |
| 0x87 | 3000 | 0.70 | 0 |
| 0x88 | 3000 | 1.00 | 0 |
| 0x89 | 3000 | 1.30 | 0 |
| 0x8A | 3000 | 1.60 | 0 |
| 0x8B | 3000 | 1.60 | 0 |
| 0x8C | 3000 | 1.60 | 0 |
| 0x8D | 3000 | 1.60 | 0 |
| 0x8E | 3000 | 1.60 | 0 |
| 0x8F | 3000 | 1.60 | 0 |
| 0xFF | 0 | 0 | 0 |

### _KRANN_FASTA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 1000 | 60 | 30 |
| 0x01 | 2000 | 85 | 30 |
| 0x02 | 2500 | 40 | 30 |
| 0x03 | 2900 | 85 | 30 |
| 0x04 | 5000 | 80 | 30 |
| 0x05 | 6000 | 80 | 30 |
| 0xFF | 0 | 0 | 0 |

### _KRANN_INPA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 660 | 30 | 30 |
| 0x01 | 720 | 30 | 30 |
| 0x02 | 900 | 30 | 30 |
| 0x03 | 1200 | 30 | 30 |
| 0x04 | 1500 | 30 | 30 |
| 0x05 | 2000 | 30 | 30 |
| 0x06 | 2500 | 30 | 30 |
| 0x07 | 3000 | 30 | 30 |
| 0x08 | 4000 | 30 | 30 |
| 0x09 | 5000 | 30 | 30 |
| 0x0A | 6000 | 30 | 30 |
| 0x0B | 7000 | 30 | 30 |
| 0x0C | 660 | 40 | 30 |
| 0x0D | 720 | 40 | 30 |
| 0x0E | 900 | 40 | 30 |
| 0x0F | 1200 | 40 | 30 |
| 0x10 | 1500 | 40 | 30 |
| 0x11 | 2000 | 40 | 30 |
| 0x12 | 2500 | 40 | 30 |
| 0x13 | 3000 | 40 | 30 |
| 0x14 | 4000 | 40 | 30 |
| 0x15 | 5000 | 40 | 30 |
| 0x16 | 6000 | 40 | 30 |
| 0x17 | 7000 | 40 | 30 |
| 0x18 | 660 | 50 | 30 |
| 0x19 | 720 | 50 | 30 |
| 0x1A | 900 | 50 | 30 |
| 0x1B | 1200 | 50 | 30 |
| 0x1C | 1500 | 50 | 30 |
| 0x1D | 2000 | 50 | 30 |
| 0x1E | 2500 | 50 | 30 |
| 0x1F | 3000 | 50 | 30 |
| 0x20 | 4000 | 50 | 30 |
| 0x21 | 5000 | 50 | 30 |
| 0x22 | 6000 | 50 | 30 |
| 0x23 | 7000 | 50 | 30 |
| 0x24 | 660 | 60 | 30 |
| 0x25 | 720 | 60 | 30 |
| 0x26 | 900 | 60 | 30 |
| 0x27 | 1200 | 60 | 30 |
| 0x28 | 1500 | 60 | 30 |
| 0x29 | 2000 | 60 | 30 |
| 0x2A | 2500 | 60 | 30 |
| 0x2B | 3000 | 60 | 30 |
| 0x2C | 4000 | 60 | 30 |
| 0x2D | 5000 | 60 | 30 |
| 0x2E | 6000 | 60 | 30 |
| 0x2F | 7000 | 60 | 30 |
| 0x30 | 660 | 70 | 30 |
| 0x31 | 720 | 70 | 30 |
| 0x32 | 900 | 70 | 30 |
| 0x33 | 1200 | 70 | 30 |
| 0x34 | 1500 | 70 | 30 |
| 0x35 | 2000 | 70 | 30 |
| 0x36 | 2500 | 70 | 30 |
| 0x37 | 3000 | 70 | 30 |
| 0x38 | 4000 | 70 | 30 |
| 0x39 | 5000 | 70 | 30 |
| 0x3A | 6000 | 70 | 30 |
| 0x3B | 7000 | 70 | 30 |
| 0x3C | 660 | 80 | 30 |
| 0x3D | 720 | 80 | 30 |
| 0x3E | 900 | 80 | 30 |
| 0x3F | 1200 | 80 | 30 |
| 0x40 | 1500 | 80 | 30 |
| 0x41 | 2000 | 80 | 30 |
| 0x42 | 2500 | 80 | 30 |
| 0x43 | 3000 | 80 | 30 |
| 0x44 | 4000 | 80 | 30 |
| 0x45 | 5000 | 80 | 30 |
| 0x46 | 6000 | 80 | 30 |
| 0x47 | 7000 | 80 | 30 |
| 0x48 | 660 | 90 | 30 |
| 0x49 | 720 | 90 | 30 |
| 0x4A | 900 | 90 | 30 |
| 0x4B | 1200 | 90 | 30 |
| 0x4C | 1500 | 90 | 30 |
| 0x4D | 2000 | 90 | 30 |
| 0x4E | 2500 | 90 | 30 |
| 0x4F | 3000 | 90 | 30 |
| 0x50 | 4000 | 90 | 30 |
| 0x51 | 5000 | 90 | 30 |
| 0x52 | 6000 | 90 | 30 |
| 0x53 | 7000 | 90 | 30 |
| 0x54 | 660 | 100 | 30 |
| 0x55 | 720 | 100 | 30 |
| 0x56 | 900 | 100 | 30 |
| 0x57 | 1200 | 100 | 30 |
| 0x58 | 1500 | 100 | 30 |
| 0x59 | 2000 | 100 | 30 |
| 0x5A | 2500 | 100 | 30 |
| 0x5B | 3000 | 100 | 30 |
| 0x5C | 4000 | 100 | 30 |
| 0x5D | 5000 | 100 | 30 |
| 0x5E | 6000 | 100 | 30 |
| 0x5F | 7000 | 100 | 30 |
| 0x60 | 660 | 110 | 30 |
| 0x61 | 720 | 110 | 30 |
| 0x62 | 900 | 110 | 30 |
| 0x63 | 1200 | 110 | 30 |
| 0x64 | 1500 | 110 | 30 |
| 0x65 | 2000 | 110 | 30 |
| 0x66 | 2500 | 110 | 30 |
| 0x67 | 3000 | 110 | 30 |
| 0x68 | 4000 | 110 | 30 |
| 0x69 | 5000 | 110 | 30 |
| 0x6A | 6000 | 110 | 30 |
| 0x6B | 7000 | 110 | 30 |
| 0x6C | 660 | 120 | 30 |
| 0x6D | 720 | 120 | 30 |
| 0x6E | 900 | 120 | 30 |
| 0x6F | 1200 | 120 | 30 |
| 0x70 | 1500 | 120 | 30 |
| 0x71 | 2000 | 120 | 30 |
| 0x72 | 2500 | 120 | 30 |
| 0x73 | 3000 | 120 | 30 |
| 0x74 | 4000 | 120 | 30 |
| 0x75 | 5000 | 120 | 30 |
| 0x76 | 6000 | 120 | 30 |
| 0x77 | 7000 | 120 | 30 |
| 0x78 | 660 | 130 | 30 |
| 0x79 | 720 | 130 | 30 |
| 0x7A | 900 | 130 | 30 |
| 0x7B | 1200 | 130 | 30 |
| 0x7C | 1500 | 130 | 30 |
| 0x7D | 2000 | 130 | 30 |
| 0x7E | 2500 | 130 | 30 |
| 0x7F | 3000 | 130 | 30 |
| 0x80 | 4000 | 130 | 30 |
| 0x81 | 5000 | 130 | 30 |
| 0x82 | 6000 | 130 | 30 |
| 0x83 | 7000 | 130 | 30 |
| 0x84 | 660 | 140 | 30 |
| 0x85 | 720 | 140 | 30 |
| 0x86 | 900 | 140 | 30 |
| 0x87 | 1200 | 140 | 30 |
| 0x88 | 1500 | 140 | 30 |
| 0x89 | 2000 | 140 | 30 |
| 0x8A | 2500 | 140 | 30 |
| 0x8B | 3000 | 140 | 30 |
| 0x8C | 4000 | 140 | 30 |
| 0x8D | 5000 | 140 | 30 |
| 0x8E | 6000 | 140 | 30 |
| 0x8F | 7000 | 140 | 30 |
| 0xFF | 0 | 0 | 0 |
