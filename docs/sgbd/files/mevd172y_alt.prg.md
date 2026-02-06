# mevd172y_alt.prg

## General

|  |  |
| --- | --- |
| File | mevd172y_alt.prg |
| Type | PRG |
| Jobs | 235 |
| Tables | 103 |
| Origin | BMW EA-413 Ortner |
| Revision | 0.900 |
| Author | P&Z EA-413 Berger, P&Z EA-413 Lorch |
| ECU Comment | SGBD für MEVD172 C-Muster zur SW 75B1400B |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MEVD172 für N55 MSA / Hybrid  mit UDS-Protokoll |  |  |
| ORIGIN | string | BMW EA-413 Ortner |  |  |
| REVISION | string | 0.900 |  |  |
| AUTHOR | string | P&Z EA-413 Berger, P&Z EA-413 Lorch |  |  |
| COMMENT | string | SGBD für MEVD172 C-Muster zur SW 75B1400B |  |  |
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

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

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

### IS_LESEN

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $2000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

_No arguments._

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $22 ReadDataByIdentifier UDS  : $20 dataIdentifier UDS  : $00 alle Info-Meldungen anschließend UDS  : $20 dataIdentifier UDS  : $nn Details zur Info-Meldung an der Position n Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### STATUS_EWS4_SK

Lesen des SecretKey des Server sowie Client für EWS4 UDS   : $22   ReadDataByIdentifier UDS   : $C002 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

_No arguments._

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n (4095) |

### _SWE_LESEN

0x31010205 SWE_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SWE_EINHEIT | string | auszulesender SWE Satz Eingabe von 0 bis 4 |

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### ABGLEICHWERTE_SCHREIBEN

0x2E5F90 ABGLEICHWERTE_SCHREIBEN Abgleichwerte Injektoren programmieren für CASCADE mit Übernahme Daten aus COD-Datei Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### ABGLEICHWERTE_LESEN

0x225F90 ABGLEICHWERTE_LESEN Abgleichwerte Injektoren auslesen für CASCADE für Vergleich mit Daten aus COD-Datei Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### STATUS_MESSWERTE

Messwerte auslesen MESSWERTE (0x4000)

_No arguments._

### STATUS_DFMONITOR

Batterieladezustand auslesen DFMONITOR (0x4001)

_No arguments._

### STATUS_DIGITAL_1

Status Schaltzustaende 1 DIGITAL_1 (0x4002)

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

Nockenwellenadationswerte auslesen NOCKENWELLE_ADAPTION (0x4006)

_No arguments._

### STATUS_DIGITAL_0

Status Schaltzustaende 0 DIGITAL_0 (0x4007)

_No arguments._

### STATUS_ADAPTION_DK

Drosselklappenadaptionswerte auslesen ADAPTION_DK (0x4008)

_No arguments._

### STATUS_ADAPTION_GEMISCH

Gemischadaptionswerte auslesen ADAPTION_GEMISCH (0x400A)

_No arguments._

### STATUS_MESSWERTE_VVT

VVT Messwerte auslesen MESSWERTE_VVT (0x400B)

_No arguments._

### FASTA10

FASTA-Messwertblock 10 lesen FASTA10 (0x4015)

_No arguments._

### STATUS_GENINFO

Infospeicher Generatordiagnose erweitert auslesen GENINFO (0x401B)

_No arguments._

### STATUS_MESSWERTE_EWAP

elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Messwerte auslesen MESSWERTE_EWAP (0x4024)

_No arguments._

### STATUS_MESSWERTE_VAD

Variantenadaptionen auslesen MESSWERTE_VAD (0x4025)

_No arguments._

### STATUS_RBMMODE9

Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) RBMMODE9 (0x4026)

_No arguments._

### STATUS_RBMME1

Rate Based Monitoring Motorsteuerung ME... Block 1 auslesen (Vorhalt) RBMME1 (0x4029)

_No arguments._

### STATUS_RBMME2

Rate Based Monitoring Motorsteuerung ME... Block 2 auslesen (Vorhalt) RBMME2 (0x402A)

_No arguments._

### STATUS_MESSWERTE_LRP

Messwerte Laufruhepruefung auslesen MESSWERTE_LRP (0x402D)

_No arguments._

### STATUS_NULLGANG_ERKENNUNG

Nullgang Erkennung auslesen NULLGANG_ERKENNUNG (0x402E)

_No arguments._

### STATUS_MSA2

MSA2 (MotorStopAutomatik 2) auslesen MSA2 (0x4036)

_No arguments._

### STATUS_MSA2HISTORIENOSTOP

MSA2 Historienspeicher fuer verhinderte MSA-Stopps MSA2HISTORIENOSTOP (0x403A)

_No arguments._

### STATUS_BZEDIAG

BZE Infospeicher BZEDIAG (0x403B)

_No arguments._

### STATUS_CALCVN

Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. CALCVN (0x403C)

_No arguments._

### STATUS_INJAD

Injektor Adaptionswerte lesen INJAD (Kleinstmengen-Adaption RB-Umfaenge) INJAD (0x403F)

_No arguments._

### STATUS_MSA2HISTORIENOSTART

MSA2HISTORIENOSTART Ringspeicher auslesen MSA2HISTORIENOSTART (0x4040)

_No arguments._

### STATUS_ATLDIAG

Turboladerstatus auslesen ATLDIAG (0x4044)

_No arguments._

### STATUS_KLANNADAP

KLANN Adaptionen auslesen KLANNADAP (0x4046)

_No arguments._

### STATUS_READINESS

Monitorfunktionen und Readinessflags aus DME auslesen READINESS (0x4105)

_No arguments._

### STEUERN_MSA2HISTORIERESET

MSA2 Historie Reset. MSA2HISTORIERESET (0x5F84)

_No arguments._

### STATUS_MSA2_DEAK_SAV

MSA2 Deaktivieren Abschaltverhinderer. MSA2_DEAK_SAV (0x5F85)

_No arguments._

### STEUERN_ENDE_MSA2_DEAK_SAV

Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_ENDE_MSA2_DEAK_SAV (0x5F85)

_No arguments._

### STEUERN_MSA2_DEAK_SAV

Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_SAV (0x5F85)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_SAV | unsigned long | Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) |

### STEUERN_NULLGANG_SCHREIBEN

Schreiben Nullgang Lernwert NULLGANG_SCHREIBEN (0x5F8A)

| Name | Type | Description |
| --- | --- | --- |
| STAT_NGS | real | Nullgang Lernwert |

### STATUS_PM_BACKUP

Auslesen des PM-Backup PM_BACKUP (0x5F8B)

_No arguments._

### STEUERN_PM_RESTORE

Schreiben PM-Restore PM_RESTORE (0x5F8B)

| Name | Type | Description |
| --- | --- | --- |
| SW_PMRESTORE_0 | unsigned char | Codierdaten Powermanagement Backup |
| SW_PMRESTORE_1 | unsigned char | Codierdaten Powermanagement Backup |
| SW_PMRESTORE_2 | unsigned char | Codierdaten Powermanagement Backup |
| SW_PMRESTORE_3 | unsigned char | Codierdaten Powermanagement Backup |
| SW_PMRESTORE_4 | unsigned char | Codierdaten Powermanagement Backup |
| SW_PMRESTORE_5 | unsigned char | Codierdaten Powermanagement Backup |
| SW_PMRESTORE_6 | unsigned char | Codierdaten Powermanagement Backup |

### STATUS_HUBKORR

Hubkorrektur auslesen HUBKORR (0x5F8C)

_No arguments._

### STEUERN_HUBKORR_PROGRAMMIEREN

Hubkorrektur programmieren STEUERN_HUBKORR_PROGRAMMIEREN (0x5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSNNV | unsigned char | Codierdaten Hub Korrektur |

### STEUERN_HUBKORR_RESET

Hubkorrektur loeschen STEUERN_HUBKORR_RESET (0x5F8C)

_No arguments._

### STEUERN_HUBKORR_VERSTELLEN

Hubkorrektur vorgeben STEUERN_HUBKORR_VERSTELLEN (0x5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSIN | unsigned char | Codierdaten Hub Korrektur |

### STATUS_MSA2_DEAK

MSA (MotorStopAutomatik) deaktivieren auslesen MSA2_DEAK (0x5F8E)

_No arguments._

### STEUERN_ENDE_MSA2_DEAK

MSA (MotorStopAutomatik) deaktivieren Vorgeben beenden STEUERN_ENDE_MSA2_DEAK (0x5F8E)

_No arguments._

### STEUERN_MSA2_DEAK

MSA (MotorStopAutomatik) deaktivieren vorgeben STEUERN_MSA2_DEAK (0x5F8E)

_No arguments._

### STEUERN_MSA2_DEAK_DAUERHAFT

MSA (MotorStopAutomatik) deaktivieren fest vorgeben STEUERN_MSA2_DEAK_DAUERHAFT (0x5F8E)

_No arguments._

### STATUS_IMAALLE

Abgleichwerte Injektoren auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. IMAALLE (0x5F90)

_No arguments._

### STEUERN_IMAALLE

Abgleichwerte Injektoren programmieren IMAALLE (0x5F90)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) |
| SW_DURCHFLUSSABGLEICH_ZYL_5 | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) |
| SW_DURCHFLUSSABGLEICH_ZYL_6 | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) |

### STEUERN_IMA_ZYL_1

Abgleichwert Injektor 01 programmieren IMA_ZYL_1 (0x5F91)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) |

### STEUERN_IMA_ZYL_2

Abgleichwert Injektor 08 programmieren IMA_ZYL_2 (0x5F92)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) |

### STEUERN_IMA_ZYL_3

Abgleichwert Injektor 06 programmieren IMA_ZYL_3 (0x5F93)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) |

### STEUERN_IMA_ZYL_4

Abgleichwert Injektor 03 programmieren IMA_ZYL_4 (0x5F94)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) |

### STEUERN_IMA_ZYL_5

Abgleichwert Injektor 02 programmieren IMA_ZYL_5 (0x5F95)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_5 | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) |

### STEUERN_IMA_ZYL_6

Abgleichwert Injektor 05 programmieren IMA_ZYL_6 (0x5F96)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_6 | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) |

### STEUERN_KVA

KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben KVA (0x5FC1)

| Name | Type | Description |
| --- | --- | --- |
| KVA | real | Codierung Verbrauchsanzeigekorrektur Umrechnung: 0x80 bis 0x7F in -0.128 bis 0.127 |

### STATUS_VVTMINH

VVT-Minhub auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. VVTMINH (0x5FDE)

_No arguments._

### STATUS_LL_ABGLEICH

Abgleichwert LL (Leerlauf) auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. LL_ABGLEICH (0x5FF0)

_No arguments._

### STEUERN_ENDE_ABLL

Abgleichwert LL (Leerlauf) Vorgeben beenden STEUERN_ENDE_ABLL (0x5FF0)

_No arguments._

### STEUERN_LLABG_PROG

Abgleichwert LL (Leerlauf) programmieren STEUERN_LLABG_PROG (0x5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden |

### STEUERN_LL_ABGLEICH

Abgleichwert LL (Leerlauf) vorgeben STEUERN_LL_ABGLEICH (0x5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden |

### ECU_CONFIG

Variante auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. ECU_CONFIG (0x5FF2)

_No arguments._

### ECU_CONFIG_RESET

Variante loeschen ECU_CONFIG_RESET (0x5FF2)

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

Powermanagement Histogramm loeschen STEUERN_PM_HISTOGRAM_RESET (0x5FF5)

_No arguments._

### STEUERN_DK

Drosselklappe ansteuern DK (0x602A)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK | real | Tastverhaeltniss Drosselklappe |
| SW_TO_DK | unsigned long | Timeout Drosselklappe |

### STEUERN_ENDE_DK

Drosselklappe Ansteuerung beenden DK (0x602A)

_No arguments._

### STEUERN_ENDE_UGEN

Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden UGEN (0x6032)

_No arguments._

### STEUERN_UGEN

Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern UGEN (0x6032)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_UGEN | real | Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) |
| SW_TO_UGEN | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) |

### STEUERN_ELUER

E-Luefter-Relais ansteuern ELUER (0x6081)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUER | unsigned char | Tastverhaeltniss E-Luefter-Relais |
| SW_TO_ELUER | unsigned long | Timeout E-Luefter-Relais |

### STEUERN_ENDE_ELUER

E-Luefter-Relais Ansteuerung beenden ELUER (0x6081)

_No arguments._

### STEUERN_ENDE_GLF2

Gesteuerte Luftfuehrung Klappe 2 Ansteuerung beenden GLF2 (0x60A4)

_No arguments._

### STEUERN_GLF2

Gesteuerte Luftfuehrung Klappe 2 ansteuern GLF2 (0x60A4)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF2 | unsigned char | Tastverhaeltniss Gesteuerte Luftfuehrung Klappe 2 |
| SW_TO_GLF2 | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 2 |

### STEUERN_ENDE_ODR

Oel Druck Regelung (Geregeltes Oeldrucksystem) Ansteuerung beenden ODR (0x60AB)

_No arguments._

### STEUERN_ODR

Oel Druck Regelung (Geregeltes Oeldrucksystem) ansteuern ODR (0x60AB)

| Name | Type | Description |
| --- | --- | --- |
| SW_P_OELSOL_TST | unsigned long | Oeldruck Sollwert |
| SW_TO_ODR | unsigned long | Timeout Oeldruck Sollwert |

### STEUERN_ENDE_ODV

Oeldruckventil (Geregeltes Oeldrucksystem) Ansteuerung beenden ODV (0x60AC)

_No arguments._

### STEUERN_ODV

Oeldruckventil (Geregeltes Oeldrucksystem) ansteuern ODV (0x60AC)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ODV | real | Tastverhaeltniss Oeldruckventil Sollwert |
| SW_TO_ODV | unsigned long | Timeout Oeldruckventil Sollwert |

### STEUERN_ENDE_MLS

Motorlagersteuerung Ansteuerung beenden MLS (0x60B2)

_No arguments._

### STEUERN_MLS

Motorlagersteuerung ansteuern MLS (0x60B2)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MLS | unsigned char | Sollwert Motorlagersteuerung |
| SW_TO_MLS | unsigned long | Timeout Motorlagersteuerung |

### STEUERN_ENDE_ULV

Umluftventil Ansteuerung beenden ULV (0x60B5)

_No arguments._

### STEUERN_ULV

Umluftventil ansteuern ULV (0x60B5)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV | real | Tastverhaeltniss Umluftventil |
| SW_TO_ULV | unsigned long | Timeout Umluftventil |

### STEUERN_ENDE_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden LDS1 (0x60B6)

_No arguments._

### STEUERN_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern LDS1 (0x60B6)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS1 | real | Tastverhaeltniss Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) |
| SW_TO_LDS1 | unsigned long | Timeout Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) |

### STEUERN_ENDE_MSV

Mengensteuerventil Ansteuerung beenden MSV (0x60BD)

_No arguments._

### STEUERN_MSV

Mengensteuerventil ansteuern MSV (0x60BD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSV | real | Tastverhaeltniss Mengensteuerventil |
| SW_TO_MSV | unsigned long | Timeout Mengensteuerventil |

### STEUERN_ENDE_EWAP

elektr. Wasserpumpe Ansteuerung beenden EWAP (0x60BF)

_No arguments._

### STEUERN_EWAP

elektr. Wasserpumpe (Bit Serielle Datenschnittstelle) ansteuern EWAP (0x60BF)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP | unsigned char | Tastverhaeltniss elektr. Wasserpumpe |
| SW_TO_EWAP | unsigned char | Timeout elektr. Wasserpumpe |

### STEUERN_AGK

Abgasklappe ansteuern AGK (0x60C1)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK | unsigned char | Tastverhaeltniss Abgasklappe 0 bis 100 Prozent |
| SW_TO_AGK | unsigned long | Timeout Abgasklappe 0 bis 510s |

### STEUERN_ENDE_AGK

Abgasklappe Ansteuerung beenden AGK (0x60C1)

_No arguments._

### STEUERN_ENDE_GLF

Gesteuerte Luftfuehrung (Klappe 1) Ansteuerung beenden GLF (0x60C3)

_No arguments._

### STEUERN_GLF

Gesteuerte Luftfuehrung (Klappe 1) ansteuern GLF (0x60C3)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF | unsigned char | Tastverhaeltnis Gesteuerte Luftfuehrung Klappe 1 |
| SW_TO_GLF | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 1 |

### STEUERN_ENDE_KFT

Kennfeldthermostat Ansteuerung beenden KFT (0x60C9)

_No arguments._

### STEUERN_KFT

Kennfeldthermostat ansteuern KFT (0x60C9)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT | unsigned char | Tastverhaeltniss Kennfeldthermostat |
| SW_TO_KFT | unsigned long | Timeout Kennfeldthermostat |

### STEUERN_DMTL_P

Diagnosemodul-Tank Leckage Pumpe ansteuern DMTL_P (0x60CC)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P | unsigned char | Tastverhaeltniss Diagnosemodul-Tank Leckage Pumpe |
| SW_TO_DMTL_P | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe |

### STEUERN_ENDE_DMTL_P

Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden DMTL_P (0x60CC)

_No arguments._

### STEUERN_DMTL_V

Diagnosemodul-Tank Leckage Ventil ansteuern DMTL_V (0x60CD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V | unsigned char | Tastverhaeltniss Diagnosemodul-Tank Leckage Ventil |
| SW_TO_DMTL_V | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil |

### STEUERN_ENDE_DMTL_V

Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden DMTL_V (0x60CD)

_No arguments._

### STEUERN_DMTL_HEIZUNG

Diagnosemodul-Tank Leckage Heizung ansteuern DMTL_HEIZUNG (0x60CE)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH | unsigned char | Tastverhaeltniss Diagnosemodul-Tank Leckage Heizung |
| SW_TO_DMTLH | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung |

### STEUERN_ENDE_DMTL_HEIZUNG

Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden DMTL_HEIZUNG (0x60CE)

_No arguments._

### STEUERN_ENDE_TEV

Tankentlueftungsventil Ansteuerung beenden TEV (0x60CF)

_No arguments._

### STEUERN_TEV

Tankentlueftungsventil ansteuern TEV (0x60CF)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV | real | Tastverhaeltniss Tankentlueftungsventil |
| SW_TO_TEV | unsigned long | Timeout Tankentlueftungsventil |

### STEUERN_ENDE_LSH1

Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden LSH1 (0x60D0)

_No arguments._

### STEUERN_LSH1

Lambdasondenheizung vor Kat Bank1 ansteuern LSH1 (0x60D0)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1 | unsigned char | Tastverhaeltniss Lambdasondenheizung vor Kat 1 |
| SW_TO_LSH1 | unsigned long | Timeout Lambdasondenheizung vor Kat 1 |

### STEUERN_ENDE_LSH2

Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden LSH2 (0x60D1)

_No arguments._

### STEUERN_LSH2

Lambdasondenheizung hinter Kat Bank1 ansteuern LSH2 (0x60D1)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2 | unsigned char | Tastverhaeltniss Lambdasondenheizung hinter Kat 1 |
| SW_TO_LSH2 | unsigned long | Timeout Lambdasondenheizung hinter Kat 1 |

### STEUERN_ENDE_MIL

MIL (Malfunction Indicator Lamp) Ansteuerung beenden MIL (0x60D4)

_No arguments._

### STEUERN_MIL

MIL (Malfunction Indicator Lamp) ansteuern MIL (0x60D4)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL | unsigned long | Tastverhaeltniss MIL (Malfunction Indicator Lamp) |
| SW_TO_MIL | unsigned long | Timeout MIL (Malfunction Indicator Lamp) |

### STEUERN_EML

EML (Engine Malfunction Lamp) ansteuern EML (0x60D6)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML | unsigned long | Tastverhaeltniss EML (Engine Malfunction Lamp) |
| SW_TO_EML | unsigned long | Timeout EML (Engine Malfunction Lamp) |

### STEUERN_ENDE_EML

EML (Engine Malfunction Lamp) Ansteuerung beenden EML (0x60D6)

_No arguments._

### STEUERN_EKP

Elektrische Kraftstoffpumpe 1 ansteuern Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben EKP (0x60D8)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1 | unsigned char | Tastverhaeltniss Elektrische Kraftstoffpumpe 1 |
| SW_TO_EKP1 | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 |

### STEUERN_ENDE_EKP

Elektrische Kraftstoffpumpe 1 Ansteuerung beenden Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben EKP (0x60D8)

_No arguments._

### STEUERN_ENDE_E_LUEFTER

E-Luefter Ansteuerung beenden E_LUEFTER (0x60DA)

_No arguments._

### STEUERN_E_LUEFTER

E-Luefter ansteuern E_LUEFTER (0x60DA)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE | real | Tastverhaeltniss E-Luefter |
| SW_TO_ELUE | unsigned long | Timeout E-Luefter |

### STEUERN_ENDE_VVT

VVT Ansteuerung beenden VVT (0x60DD)

_No arguments._

### STEUERN_VVT

VVT ansteuern VVT (0x60DD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_VVT | real | Tastverhaeltnis VVT |
| SW_TO_VVT | unsigned long | Timeout VVT |

### STEUERN_ENDE_EV1

Einspritzventil 1 (physikalisch) Ansteuerung beenden EV1 (0x60E1)

_No arguments._

### STEUERN_EV1

Einspritzventil 1 (physikalisch) ansteuern EV1 (0x60E1)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1 | unsigned long | Periodendauer Einspritzventil 1 |
| SW_TV_EV1 | real | Tastverhaeltniss Einspritzventil 1 |
| SW_TO_EV1 | unsigned long | Timeout Einspritzventil 1 |

### STEUERN_ENDE_EV2

Einspritzventil 2 (physikalisch) Ansteuerung beenden EV2 (0x60E2)

_No arguments._

### STEUERN_EV2

Einspritzventil 2 (physikalisch) ansteuern EV2 (0x60E2)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2 | unsigned long | Periodendauer Einspritzventil 2 |
| SW_TV_EV2 | real | Tastverhaeltniss Einspritzventil 2 |
| SW_TO_EV2 | unsigned long | Timeout Einspritzventil 2 |

### STEUERN_ENDE_EV3

Einspritzventil 3 (physikalisch) Ansteuerung beenden EV3 (0x60E3)

_No arguments._

### STEUERN_EV3

Einspritzventil 3 (physikalisch) ansteuern EV3 (0x60E3)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3 | unsigned long | Periodendauer Einspritzventil 3 |
| SW_TV_EV3 | real | Tastverhaeltniss Einspritzventil 3 |
| SW_TO_EV3 | unsigned long | Timeout Einspritzventil 3 |

### STEUERN_ENDE_EV4

Einspritzventil 4 (physikalisch) Ansteuerung beenden EV4 (0x60E4)

_No arguments._

### STEUERN_EV4

Einspritzventil 4 (physikalisch) ansteuern EV4 (0x60E4)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4 | unsigned long | Periodendauer Einspritzventil 4 |
| SW_TV_EV4 | real | Tastverhaeltniss Einspritzventil 4 |
| SW_TO_EV4 | unsigned long | Timeout Einspritzventil 4 |

### STEUERN_ENDE_EV5

Einspritzventil 5 (physikalisch) Ansteuerung beenden EV5 (0x60E5)

_No arguments._

### STEUERN_EV5

Einspritzventil 5 (physikalisch) ansteuern EV5 (0x60E5)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV5 | unsigned long | Periodendauer Einspritzventil 5 |
| SW_TV_EV5 | real | Tastverhaeltniss Einspritzventil 5 |
| SW_TO_EV5 | unsigned long | Timeout Einspritzventil 5 |

### STEUERN_ENDE_EV6

Einspritzventil 6 (physikalisch) Ansteuerung beenden EV6 (0x60E6)

_No arguments._

### STEUERN_EV6

Einspritzventil 6 (physikalisch) ansteuern EV6 (0x60E6)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV6 | unsigned long | Periodendauer Einspritzventil 6 |
| SW_TV_EV6 | real | Tastverhaeltniss Einspritzventil 6 |
| SW_TO_EV6 | unsigned long | Timeout Einspritzventil 6 |

### STEUERN_ENDE_ENWS

Vanos Einlass Ventil Ansteuerung beenden ENWS (0x60ED)

_No arguments._

### STEUERN_ENWS

Vanos Einlass Ventil ansteuern ENWS (0x60ED)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS | real | Tastverhaeltniss Vanos Einlassventil |
| SW_TO_ENWS | unsigned long | Timeout Vanos Einlassventil |

### STEUERN_ANWS

Vanos Auslass Ventil ansteuern ANWS (0x60EE)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS | real | Tastverhaeltniss Vanos Auslassventil |
| SW_TO_ANWS | unsigned long | Timeout Vanos Auslassventil |

### STEUERN_ENDE_ANWS

Vanos Auslass Ventil Ansteuerung beenden ANWS (0x60EE)

_No arguments._

### START_SYSTEMCHECK_TEV

Ansteuern Diagnosefunktion Tankentlueftungsventil SYSTEMCHECK_TEV (0xF022)

_No arguments._

### STATUS_SYSTEMCHECK_TEV

Auslesen Diagnosefunktion Tankentlueftungsventil SYSTEMCHECK_TEV (0xF022)

_No arguments._

### STOP_SYSTEMCHECK_TEV

Diagnosefunktion Tankentlueftungsventil beenden SYSTEMCHECK_TEV (0xF022)

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

Ansteuern Diagnosefunktion Einspritzventilausblendung SYSTEMCHECK_EVAUSBL (0xF025)

| Name | Type | Description |
| --- | --- | --- |
| STAT_DEVOFF | unsigned char | Ausblendmaske |

### STATUS_SYSTEMCHECK_EVAUSBL

Auslesen Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0xF025)

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

Ende Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0xF025)

_No arguments._

### START_SYSTEMCHECK_LLERH

Ansteuern Diagnosefunktion Leerlauf-Erhoehung SYSTEMCHECK_LLERH (0xF026)

| Name | Type | Description |
| --- | --- | --- |
| LL | unsigned long | Drehzahlerhoeung |

### STATUS_SYSTEMCHECK_LLERH

Auslesen Diagnosefunktion Leerlauf-Erhoehung SYSTEMCHECK_LLERH (0xF026)

_No arguments._

### STOP_SYSTEMCHECK_LLERH

Diagnosefunktion Leerlauf-Erhoehung beenden SYSTEMCHECK_LLERH (0xF026)

_No arguments._

### START_SYSTEMCHECK_VVT_ANSCHLAG

Ansteuern Diagnosefunktion VVT-Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0xF027)

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Auslesen VVT Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0xF027)

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

Diagnosefunktion VVT Anschlag lernen beenden SYSTEMCHECK_VVT_ANSCHLAG (0xF027)

_No arguments._

### START_SYSTEMCHECK_GEN

Diagnosefunktion Generatortest SYSTEMCHECK_GEN (0xF02A)

_No arguments._

### STATUS_SYSTEMCHECK_GEN

Auslesen Diagnosefunktion Generatortest SYSTEMCHECK_GEN (0xF02A)

_No arguments._

### STOP_SYSTEMCHECK_GEN

Diagnosefunktion Generatortest beenden SYSTEMCHECK_GEN (0xF02A)

_No arguments._

### START_NULLGANG_LERNEN

Ansteuern Nullgang lernen (Der Nullgang-Lernwert ist nichtfluechtig so abzulegen, dass er bei Reprogrammierung nicht überschrieben wird.) NULLGANG_LERNEN (0xF02E)

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

Ansteuern Adaptionen selektiv loeschen - Batterietausch ausgeblendet. ADAP_SELEKTIV_LOESCHEN (0xF030)

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | unsigned char | AUSWAHLBYTE_1_BIT_7 -- > Adaption Abgasrueckfuehrungsventil (NOT USED) AUSWAHLBYTE_1_BIT_6 --> Adaption Lambdaregelung AUSWAHLBYTE_1_BIT_5 --> Adaption Drosselklappe AUSWAHLBYTE_1_BIT_4 --> Adaption Saugrohrmodell AUSWAHLBYTE_1_BIT_3 --> Adaption Tankentlueftung AUSWAHLBYTE_1_BIT_2 --> Adaption Lambdasonden AUSWAHLBYTE_1_BIT_1 --> Adaption Klopfregelung AUSWAHLBYTE_1_BIT_0 --> Adaption Leerlaufabgleich |
| AUSWAHLBYTE_2 | unsigned char | AUSWAHLBYTE_2_BIT_7 --> Adaption Variabler Ventiltrieb (VVT) AUSWAHLBYTE_2_BIT_6 --> Adaption gelernte Varainten AUSWAHLBYTE_2_BIT_5 --> Adaption Oktanzahl AUSWAHLBYTE_2_BIT_4 --> Registrierung Batterietausch AUSWAHLBYTE_2_BIT_3 --> Adaption Hochdruckpumpe AUSWAHLBYTE_2_BIT_2 --> Adaption Sekundaerluftsystem (NOT USED) AUSWAHLBYTE_2_BIT_1 --> Adaption NOx-Sensor (NOT USED) AUSWAHLBYTE_2_BIT_0 --> Adaption Lastregelung |
| AUSWAHLBYTE_3 | unsigned char | AUSWAHLBYTE_3_BIT_7 --> Energieadaption Injektoren (NOT USED) AUSWAHLBYTE_3_BIT_6 --> NOT USED AUSWAHLBYTE_3_BIT_5 --> NOT USED AUSWAHLBYTE_3_BIT_4 --> Adaption Laufunruhe (Faktor und Offset) und zylinderindividuelle Lambdaregelung(NOT USED) AUSWAHLBYTE_3_BIT_3 --> Adaption Zylindergleichstellung fuer Bandende und Fahrzyklus AUSWAHLBYTE_3_BIT_2 --> Adaption Verbrennungsregelung AUSWAHLBYTE_3_BIT_1 --> Adaption Segmentzeit AUSWAHLBYTE_3_BIT_0 --> Adaption VANOS |

### ADAP2_SELEKTIV_LOESCHEN

Ansteuern Adaptionen 2 selektiv loeschen ADAP2_SELEKTIV_LOESCHEN (0xF031)

| Name | Type | Description |
| --- | --- | --- |
| ADAV2_AUSWAHLBYTE_1 | unsigned char | ADAV2_AUSWAHLBYTE_1_BIT_7 -- > Kleinstmengenadaption ADAV2_AUSWAHLBYTE_1_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_3 --> Adaption elektrische Kraftstoffpumpe ADAV2_AUSWAHLBYTE_1_BIT_2 --> Adaption Langzeit fuer Injektoralterung Bank 2(NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_1 --> Adaption Langzeit fuer Injektoralterung Bank 1(NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_0 --> Adaption Nullgangsensor (Achtung: Mit diesem Bit darf die Adaption des Nullgangsensors nicht mehr geloescht werden! Bei Austausch des Nullgangsensors soll die Adaption mit dem dafuer vorgesehenen Dienst durch |
| ADAV2_AUSWAHLBYTE_2 | unsigned char | ADAV2_AUSWAHLBYTE_2_BIT_7 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_6 --> Verlustmomentadaption Reset ADAV2_AUSWAHLBYTE_2_BIT_5 --> Adaption NOx-Katalysator (NOT USED) ADAV2_AUSWAHLBYTE_2_BIT_4 --> Bereichserkennung Benzin im Oel (B_clradbo) ADAV2_AUSWAHLBYTE_2_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_0 --> NOT USED |
| ADAV2_AUSWAHLBYTE_3 | unsigned char | ADAV2_AUSWAHLBYTE_3_BIT_7 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_0 --> NOT USED |

### START_SYSTEMCHECK_ZSZ

Ansteuern Zuendkerze freibrennen (Kalttestspezifisch) SYSTEMCHECK_ZSZ (0xF036)

| Name | Type | Description |
| --- | --- | --- |
| ZUENDFREQUENZ | unsigned char | Zuendfrequenz zum Freibrennen der Zuendkerzen |
| FREIBRENNDAUER | real | Freibrenndauer |
| LADEDAUER | real | Ladedauer fuer alle Kalttest-Zuendungstests (Freibrennen, zeitgesteuerte Ablauf- sequenz, winkelsynchroner Test) |

### STATUS_SYSTEMCHECK_ZSZ

Auslesen Zuendkerze freibrennen (Kalttestspezifisch) SYSTEMCHECK_ZSZ (0xF036)

_No arguments._

### STOP_SYSTEMCHECK_ZSZ

Ende Zuendkerze freibrennen (Kalttestspezifisch) SYSTEMCHECK_ZSZ (0xF036)

_No arguments._

### START_SYSTEMCHECK_ZSZW

Ansteuern betriebspunktunabhaengiger (Winkelsynchroner) Zuenspulentest (Kalttestspezifisch) SYSTEMCHECK_ZSZW (0xF037)

| Name | Type | Description |
| --- | --- | --- |
| LADEDAUER | real | Ladedauer fuer alle Kalttest-Zuendungstests (Freibrennen, zeitgesteuerte Ablauf- sequenz, winkelsynchroner Test) |
| ZUENDWINKEL | real | Zuendwinkel fuer winkelsynchronen Zuendungstest (Es wird nur ein Wert übertragen, welcher für alle Zylinder gleichermassen gilt). |

### STATUS_SYSTEMCHECK_ZSZW

Auslesen betriebspunktunabhaengiger (Winkelsynchroner) Zuenspulentest (Kalttestspezifisch) SYSTEMCHECK_ZSZW (0xF037)

_No arguments._

### STOP_SYSTEMCHECK_ZSZW

Ende betriebspunktunabhaengiger (Winkelsynchroner) Zuenspulentest (Kalttestspezifisch) SYSTEMCHECK_ZSZW (0xF037)

_No arguments._

### START_SYSTEMCHECK_EVZ

Ansteuern Sequentieller EV-Zylinderabfolgetest (Kalttestspezifisch) SYSTEMCHECK_EVZ (0xF038)

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERDAUER | real | Ansteuerdauer pro Einspritzimpuls vom Testermodul |
| PERIONDENDAUER | real | Periodendauer fuer Einspritzimpuls vom Testermodul |
| PAUSENDAUER | real | Pausendauer zwischen der Ansteuerung der Injektoren bei Ansteuersequenz vom Testermodul |
| ANZAHL_DER_TESTIMPULSE | unsigned char | Anzahl der Testimpulse pro Injektor vom Testermodul |

### STATUS_SYSTEMCHECK_EVZ

Auslesen Sequentieller EV-Zylinderabfolgetest (Kalttestspezifisch) SYSTEMCHECK_EVZ (0xF038)

_No arguments._

### STOP_SYSTEMCHECK_EVZ

Ende Sequentieller EV-Zylinderabfolgetest (Kalttestspezifisch) SYSTEMCHECK_EVZ (0xF038)

_No arguments._

### START_SYSTEMCHECK_ZSZZ

Ansteuern Zeitbasierte Zuendsequenz (Kalttestspezifisch) SYSTEMCHECK_ZSZZ (0xF039)

| Name | Type | Description |
| --- | --- | --- |
| PAUSENDAUER | real | Pausendauer zwischen der Ansteuerung der Zuendkerzen bei Ansteuersequenz vom Testermodul |
| LADEDAUER | real | Ladedauer fuer alle Kalttest-Zuendungstests (Freibrennen, zeitgesteuerte Ablauf- sequenz, winkelsynchroner Test |

### STATUS_SYSTEMCHECK_ZSZZ

Auslesen Zeitbasierte Zuendsequenz (Kalttestspezifisch) SYSTEMCHECK_ZSZZ (0xF039)

_No arguments._

### STOP_SYSTEMCHECK_ZSZZ

Ende Zeitbasierte Zuendsequenz (Kalttestspezifisch) SYSTEMCHECK_ZSZZ (0xF039)

_No arguments._

### START_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Start-Routine ZWDIAG (0xF03A)

| Name | Type | Description |
| --- | --- | --- |
| FAC_CH_DIAG_EXT_ADJ_IS | real | Manipulation factor of CH torque reserve for ignition angle efficiency monitoring - demo-mode IS |
| FAC_CH_DIAG_EXT_ADJ_PL | real | Manipulation factor of CH torque reserve for ignition angle efficiency monitoring - demo-mode PL |
| LV_CH_DIAG_EXT_REQ | unsigned char | External request for ignition angle efficiency monitoring - demo- mode |

### STATUS_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Status-Routine ZWDIAG (0xF03A)

_No arguments._

### STOP_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Stop-Routine ZWDIAG (0xF03A)

_No arguments._

### START_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader starten SYSTEMCHECK_ATL (0xF0D0)

_No arguments._

### STATUS_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader auslesen SYSTEMCHECK_ATL (0xF0D0)

_No arguments._

### STOP_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader beenden SYSTEMCHECK_ATL (0xF0D0)

_No arguments._

### START_SYSTEMCHECK_GLF

Ansteuern Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0xF0D5)

_No arguments._

### STATUS_SYSTEMCHECK_GLF

Auslesen Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0xF0D5)

_No arguments._

### STOP_SYSTEMCHECK_GLF

Ende Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0xF0D5)

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

Ansteuerung Lambdaregelung deaktivieren SYSTEMCHECK_L_REGELUNG_AUS (0xF0D9)

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

Auslesen Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0xF0D9)

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

Ende Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0xF0D9)

_No arguments._

### START_SYSTEMCHECK_DMTL

Ansteuern Diagnosefunktion DMTL SYSTEMCHECK_DMTL (0xF0DA)

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Auslesen Diagnosefunktion DMTL SYSTEMCHECK_DMTL (0xF0DA)

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Diagnosefunktion DMTL beenden SYSTEMCHECK_DMTL (0xF0DA)

_No arguments._

### START_EISYUGD

Ansteuern Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0xF0E0)

| Name | Type | Description |
| --- | --- | --- |
| NKW | int | Drehzahl |
| VSE_SPRI | real | Istwert Einlassspreizung variable NWS |
| VSA_SPRI | real | Istwert Auslassspreizung variable NWS |
| HUBEV_IST | real | Istwert Einlassventilhub |

### STATUS_EISYUGD

Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0xF0E0)

_No arguments._

### START_EISYGD

Ansteuern Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) EISYGD (0xF0E1)

| Name | Type | Description |
| --- | --- | --- |
| NKW | int | Drehzahl |
| VSE_SPRI | real | Istwert Einlassspreizung variable NWS |
| VSA_SPRI | real | Istwert Auslassspreizung variable NWS |
| WDK_IST | real | Aktueller Drosselklappenwinkel |

### STATUS_EISYGD

Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) EISYGD (0xF0E1)

_No arguments._

### START_KLANN

Ansteuern Krann-Adaptionswerte (Anforderung aus CP10798) KLANN (0xF0E4)

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC | int | Drehzahl |
| RK_LOC | real | Relative Kraftstoffmasse |
| TMOT_LOC | real | Kuehlwassertemperatur |

### STATUS_KLANN

Auslesen Krann-Adaptionswerte (Anforderung aus CP10798) KLANN (0xF0E4)

_No arguments._

### START_DDLSHK

Ansteuern Dynamik Diagnose Lamdasonden hinter Hauptkat DDLSHK (0xF0E7)

_No arguments._

### STATUS_DDLSHK

Auslesen Dynamik Diagnose Lamdasonden hinter Hauptkat DDLSHK (0xF0E7)

_No arguments._

### STOP_DDLSHK

Ende Dynamik Diagnose Lamdasonden hinter Hauptkat DDLSHK (0xF0E7)

_No arguments._

### START_CRAM

Ansteuern RAM-Backup-Werte loeschen CRAM (0xF0E9)

_No arguments._

### STATUS_CRAM

Auslesen RAM-Backup-Werte loeschen CRAM (0xF0E9)

_No arguments._

### START_SYSTEMCHECK_DKAT

Ansteuern Kurztest Kat SYSTEMCHECK_DKAT (0xF0EB)

_No arguments._

### STATUS_SYSTEMCHECK_DKAT

Auslesen Kurztest Kat SYSTEMCHECK_DKAT (0xF0EB)

_No arguments._

### STOP_SYSTEMCHECK_DKAT

Ende Kurztest Kat SYSTEMCHECK_DKAT (0xF0EB)

_No arguments._

### START_RAM

Ansteuern RAM Backup zwangssichern RAM (0xF0F2)

_No arguments._

### STATUS_RAM

Auslesen RAM Backup zwangssichern RAM (0xF0F2)

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

Ansteuern Messemode SYSTEMCHECK_PM_MESSEMODE (0xF0F6)

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

Auslesen Messemode SYSTEMCHECK_PM_MESSEMODE (0xF0F6)

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

Ende Messemode SYSTEMCHECK_PM_MESSEMODE (0xF0F6)

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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
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
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
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
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
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
| 0x5780 | Fussgängerschutz Sensorband | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
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
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | AB Volvo |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic |
| 0x0061 | Flextronics / Sidler Automotive |
| 0x0062 | EAO Automotive |
| 0x0063 | helag-electronic |
| 0x0064 | Magna International |
| 0x0065 | ARVINMERITOR |
| 0x0067 | Defond Holding / BJAutomotive |
| 0xFFFF | unbekannter Hersteller |

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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode  | Allgemeiner Fertigungs- und Energiesparmode  |
| 0x01 | Spezieller Energiesparmode | Spezieller Energiesparmode |
| 0x02 | ECOS-Mode | ECOS-Mode |
| 0x03 | MOST-Mode | MOST-Mode |
| 0x04 | Betriebsmode 4 | Betriebsmode 4 |
| 0x05 | Betriebsmode 5 | Betriebsmode 5 |
| 0x06 | Rollenmode | Rollenmode |
| 0xFF | ungültiger Betriebsmodus | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000000 | 000000 FehlerOrt nicht bedatet | 0 |
| 0x021200 | 0x021200 Energiesparmode: aktiv | 0 |
| 0x02FF12 | 0x02FF12 Dummy Application DTC: application DTC | 0 |
| 0x100001 | 0x100001 Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | 0x100101 Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | 0x100201 Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100A02 | 0x100A02 Drosselklappe, Drosselklappenpotenziometer 1 und 2: Sammelfehler | 0 |
| 0x100C08 | 0x100C08 Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zur Luftmasse | 0 |
| 0x100E08 | 0x100E08 Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zur Luftmasse | 0 |
| 0x101001 | 0x101001 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x101002 | 0x101002 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | 0x101201 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | 0x101202 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x101401 | 0x101401 Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | 0x101402 Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | 0x101408 Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | 0x101410 Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101C08 | 0x101C08 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Poti 1 und Poti 2 | 0 |
| 0x101F01 | 0x101F01 Drosselklappenwinkel - Saugrohrdruck, Korrelation: Grenzwert überschritten | 0 |
| 0x101F02 | 0x101F02 Drosselklappenwinkel - Saugrohrdruck, Korrelation: Grenzwert unterschritten | 0 |
| 0x102010 | 0x102010 Luftmassenmesser, Plausibilität: Luftmasse gegenüber Modell zu hoch | 0 |
| 0x102011 | 0x102011 Luftmassenmesser, Plausibilität: Luftmasse gegenüber Modell zu niedrig | 0 |
| 0x102610 | 0x102610 Luftmassenmesser, Signal: Unplausible Periodendauer, Wackelkontakt mit niedriger Frequenz | 0 |
| 0x102611 | 0x102611 Luftmassenmesser, Signal: Unplausible Periodendauer, Wackelkontakt mit hoher Frequenz | 0 |
| 0x102612 | 0x102612 Luftmassenmesser, Signal: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x103001 | 0x103001 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | 0x103002 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103101 | 0x103101 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | 0x103102 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103308 | 0x103308 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Signal 1 und Signal 2 | 0 |
| 0x10351C | 0x10351C Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104402 | 0x104402 Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104610 | 0x104610 Absolutdrucksensor, Saugrohr, Plausibilität: Saugrohrdruck zu hoch | 0 |
| 0x104611 | 0x104611 Absolutdrucksensor, Saugrohr, Plausibilität: Saugrohrdruck zu niedrig | 0 |
| 0x104A40 | 0x104A40 Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104B01 | 0x104B01 Absolutdrucksensor, Saugrohr, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x105001 | 0x105001 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x105002 | 0x105002 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x105201 | 0x105201 Umgebungsdrucksensor, Nachlauf: Druck zu hoch | 0 |
| 0x105202 | 0x105202 Umgebungsdrucksensor, Nachlauf: Druck zu niedrig | 0 |
| 0x105A30 | 0x105A30 Umgebungsdrucksensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x105A40 | 0x105A40 Umgebungsdrucksensor, Plausibilität: Druck zu hoch | 0 |
| 0x105A41 | 0x105A41 Umgebungsdrucksensor, Plausibilität: Druck zu niedrig | 0 |
| 0x105A42 | 0x105A42 Umgebungsdrucksensor, Plausibilität: Differenz aktueller mit letztem Fahrzyklus zu hoch | 0 |
| 0x105A43 | 0x105A43 Umgebungsdrucksensor, Plausibilität: Kontinuitätsfehler | 0 |
| 0x107A70 | 0x107A70 DME, interner Fehler, Ansteuerung Drosselklappe: Kurzschluss | 0 |
| 0x107A71 | 0x107A71 DME, interner Fehler, Ansteuerung Drosselklappe: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | 0x107A72 DME, interner Fehler, Ansteuerung Drosselklappe: Interner Kommunikationsfehler | 0 |
| 0x107A73 | 0x107A73 DME, interner Fehler, Ansteuerung Drosselklappe: Leitungsunterbrechung | 0 |
| 0x107A80 | 0x107A80 Drosselklappensteller, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | 0x107A81 Drosselklappensteller, schliessende Federprüfung: Fehler bei Federprüfung | 0 |
| 0x107A90 | 0x107A90 Drosselklappensteller, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | 0x107A91 Drosselklappensteller, öffnende Federprüfung: Fehler bei Federprüfung | 0 |
| 0x107AE0 | 0x107AE0 Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x107AF0 | 0x107AF0 Drosselklappensteller, Verstärkerabgleich: Fehlfunktion | 0 |
| 0x107C10 | 0x107C10 Laststeuerung, Plausibilität: Massenstrom zu hoch | 0 |
| 0x108001 | 0x108001 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | 0x108002 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108010 | 0x108010 Ansauglufttemperatursensor, elektrisch: Signal nicht plausibel | 0 |
| 0x108920 | 0x108920 Ladelufttemperatursensor, Kaltstart, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x108930 | 0x108930 Ladelufttemperatursensor, Kaltstart, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x108932 | 0x108932 Ansauglufttemperatursensor, Kaltstart, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x108A01 | 0x108A01 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | 0x108A02 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A10 | 0x108A10 Ladelufttemperatursensor, elektrisch: Signal nicht plausibel  | 0 |
| 0x108C08 | 0x108C08 Ladelufttemperatursensor, Plausibilität: Signal hängt | 0 |
| 0x108F01 | 0x108F01 Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | 0x109001 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x109002 | 0x109002 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109308 | 0x109308 Kühlmitteltemperatursensor, Plausibilität: Signaländerung zu schnell | 0 |
| 0x10AA20 | 0x10AA20 Kühlmitteltemperatursensor, Kaltstart: Kühlmitteltemperatur zu hoch | 0 |
| 0x10AA21 | 0x10AA21 Kühlmitteltemperatursensor, Kaltstart: Kühlmitteltemperatur zu niedrig | 0 |
| 0x10AA30 | 0x10AA30 Kühlmitteltemperatursensor, Sammelfehler: elektrisch und Signal | 0 |
| 0x10AA40 | 0x10AA40 Kühlmitteltemperatursensor, elektrisch: Signal fehlt | 0 |
| 0x10AA50 | 0x10AA50 Kühlmitteltemperatursensor, Plausibilität: Motortemperatur gegenüber Modell unplausibel zu hoch | 0 |
| 0x10AA51 | 0x10AA51 Kühlmitteltemperatursensor, Plausibilität: Motortemperatur gegenüber Modell unplausibel zu niedrig | 0 |
| 0x10AA52 | 0x10AA52 Kühlmitteltemperatursensor, Plausibilität: Motortemperatur unplausibel | 0 |
| 0x10BA20 | 0x10BA20 Umgebungstemperatursensor, Signal: Oberen Schwellwert überschritten | 0 |
| 0x10BA21 | 0x10BA21 Umgebungstemperatursensor, Signal: Unteren Schwellwert unterschritten | 0 |
| 0x10BA22 | 0x10BA22 Umgebungstemperatursensor, Signal: CAN-Botschaft fehlerhaft | 0 |
| 0x10BA30 | 0x10BA30 Umgebungstemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | 0x10BA40 Umgebungstemperatursensor, Plausibilität: Umgebungstemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | 0x10BA41 Umgebungstemperatursensor, Plausibilität: Umgebungstemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA42 | 0x10BA42 Ansauglufttemperatursensor, Kaltstart: Ansauglufttemperatur zu hoch | 0 |
| 0x10BA43 | 0x10BA43 Ansauglufttemperatursensor, Kaltstart: Ansauglufttemperatur zu niedrig | 0 |
| 0x10BA48 | 0x10BA48 Ansauglufttemperatursensor, Plausibilität: Ansauglufttemperatur zu hoch | 0 |
| 0x10BA49 | 0x10BA49 Ansauglufttemperatursensor, Plausibilität: Ansauglufttemperatur zu niedrig | 0 |
| 0x10BA4A | 0x10BA4A Ladelufttemperatursensor, Kaltstart: Ladelufttemperatur zu hoch | 0 |
| 0x10BA4B | 0x10BA4B Ladelufttemperatursensor, Kaltstart: Ladelufttemperatur zu niedrig | 0 |
| 0x10BA4F | 0x10BA4F Ladelufttemperatursensor, Plausibilität: Ladelufttemperatur zu hoch | 0 |
| 0x10BA51 | 0x10BA51 Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | 0x10BA52 Ladelufttemperatursensor, Sammelfehler: Plausibilität | 0 |
| 0x10C005 | 0x10C005 Ladelufttemperatursensor, Gradient: Anstieg zu hoch | 0 |
| 0x110101 | 0x110101 Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110102 | 0x110102 Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110104 | 0x110104 Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110108 | 0x110108 Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110201 | 0x110201 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110202 | 0x110202 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110204 | 0x110204 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110208 | 0x110208 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110301 | 0x110301 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110302 | 0x110302 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110304 | 0x110304 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110308 | 0x110308 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110401 | 0x110401 Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110402 | 0x110402 Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110404 | 0x110404 Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110408 | 0x110408 Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110501 | 0x110501 Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110502 | 0x110502 Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110504 | 0x110504 Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110508 | 0x110508 Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110601 | 0x110601 Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110602 | 0x110602 Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110604 | 0x110604 Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110608 | 0x110608 Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x111020 | 0x111020 Injektor Zylinder 1 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111021 | 0x111021 Injektor Zylinder 2 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111022 | 0x111022 Injektor Zylinder 3 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111023 | 0x111023 Injektor Zylinder 4 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111024 | 0x111024 Injektor Zylinder 5 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111025 | 0x111025 Injektor Zylinder 6 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111030 | 0x111030 Injektor Zylinder 1 Niederspannungsseite, Ansteuerung: Boosterzeitfenster | 0 |
| 0x111031 | 0x111031 Injektor Zylinder 2 Niederspannungsseite, Ansteuerung: Boosterzeitfenster | 0 |
| 0x111032 | 0x111032 Injektor Zylinder 3 Niederspannungsseite, Ansteuerung: Boosterzeitfenster | 0 |
| 0x111033 | 0x111033 Injektor Zylinder 4 Niederspannungsseite, Ansteuerung: Boosterzeitfenster | 0 |
| 0x111034 | 0x111034 Injektor Zylinder 5 Niederspannungsseite, Ansteuerung: Boosterzeitfenster | 0 |
| 0x111035 | 0x111035 Injektor Zylinder 6 Niederspannungsseite, Ansteuerung: Boosterzeitfenster | 0 |
| 0x111040 | 0x111040 Injektor Zylinder 1 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111041 | 0x111041 Injektor Zylinder 2 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111042 | 0x111042 Injektor Zylinder 3 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111043 | 0x111043 Injektor Zylinder 4 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111044 | 0x111044 Injektor Zylinder 5 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111045 | 0x111045 Injektor Zylinder 6 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111110 | 0x111110 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft | 0 |
| 0x111111 | 0x111111 DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation fehlerhaft | 0 |
| 0x111112 | 0x111112 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel | 0 |
| 0x111113 | 0x111113 DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation unplausibel | 0 |
| 0x111114 | 0x111114 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation, Signalfehler | 0 |
| 0x111115 | 0x111115 DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation, Signalfehler | 0 |
| 0x113025 | 0x113025 Injektoren, Spannungsversorgung: Kurzschluss nach Plus | 0 |
| 0x113026 | 0x113026 Injektoren, Spannungsversorgung: Kurzschluss nach Masse | 0 |
| 0x113027 | 0x113027 Injektoren, Spannungsversorgung: Leitungsunterbrechung | 0 |
| 0x118601 | 0x118601 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | 0x118602 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118F20 | 0x118F20 Gemischadaption, unterer Drehzahlbereich: Gemisch in Teillast zu mager | 0 |
| 0x118F21 | 0x118F21 Gemischadaption, unterer Drehzahlbereich: Gemisch in Teillast zu fett | 0 |
| 0x119001 | 0x119001 Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | 0x119002 Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119201 | 0x119201 Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119202 | 0x119202 Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119301 | 0x119301 Raildrucksensor, Spannungsprüfung: obere Schwelle überschritten | 0 |
| 0x119302 | 0x119302 Raildrucksensor, Spannungsprüfung: untere Schwelle unterschritten | 0 |
| 0x119304 | 0x119304 Raildrucksensor, Plausibilität: Maximaldruck überschritten | 0 |
| 0x119308 | 0x119308 Raildrucksensor, Plausibilität: Minimaldruck unterschritten | 0 |
| 0x119404 | 0x119404 Raildrucksensor, Plausibilität: Signal hängt | 0 |
| 0x11A001 | 0x11A001 Kraftstoffhochdrucksystem, Kraftstoffdruck: Maximaldruck überschritten | 0 |
| 0x11A002 | 0x11A002 Kraftstoffhochdrucksystem, Kraftstoffdruck: Minimaldruck unterschritten | 0 |
| 0x11A210 | 0x11A210 Kraftstoffniederdrucksystem: Leistung elektrische Kraftstoffpumpe für Istdruck zu hoch | 0 |
| 0x11A401 | 0x11A401 Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11AA01 | 0x11AA01 Kraftstoffversorgungssystem: Druck zu hoch, Notlauf mit Niederdruck | 0 |
| 0x11AA02 | 0x11AA02 Kraftstoffversorgungssystem: Druck zu hoch, Notlauf mit Einspritzabschaltung | 0 |
| 0x11AA04 | 0x11AA04 Kraftstoffversorgungssystem: Druck kurzzeitig zu hoch, Drehzahl- und Lastbegrenzung | 0 |
| 0x11AC01 | 0x11AC01 Kraftstoffhochdrucksystem, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | 0x11AC02 Kraftstoffhochdrucksystem, Kaltstart: Druck zu niedrig | 0 |
| 0x11AD10 | 0x11AD10 Kraftstoffdruck: Minimaldruck unterschritten, Einspritzabschaltung zum Katschutz | 0 |
| 0x11AE01 | 0x11AE01 Kraftstoffversorgungssytem, Lambdaregelung: obere Grenze überschritten | 0 |
| 0x11AE02 | 0x11AE02 Kraftstoffversorgungssytem, Lambdaregelung: untere Grenze unterschritten | 0 |
| 0x11B209 | 0x11B209 Kraftstoffniederdrucksystem: allgemeiner Fehler | 0 |
| 0x11B210 | 0x11B210 Kraftstoffniederdrucksystem, Signal: Spannung elektrische Kraftstoffpumpe unplausibel | 0 |
| 0x11B211 | 0x11B211 Kraftstoffniederdrucksystem, Regelung: Istdruck zu niedrig | 0 |
| 0x11B212 | 0x11B212 Kraftstoffniederdrucksystem, Regelung: Istdruck zu hoch | 0 |
| 0x11C401 | 0x11C401 Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | 0x11C402 Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | 0x11C404 Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11CF30 | 0x11CF30 Kraftstoffversorgungssystem, Sammelfehler: Gemischadaption im Leerlauf und unteren Drehzahlbereich | 0 |
| 0x120208 | 0x120208 Ladedruckregelung, oberer Wert: Ladedruck zu hoch | 0 |
| 0x120308 | 0x120308 Ladedruckregelung, unterer Wert: Ladedruck zu niedrig | 0 |
| 0x120408 | 0x120408 Ladedruckregelung, Abschaltung: Ladedruckaufbau gesperrt | 0 |
| 0x121001 | 0x121001 Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | 0x121002 Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121521 | 0x121521 Ladedrucksensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x121530 | 0x121530 Ladedrucksensor, Plausibilität: Druck vor Drosselklappe zu hoch | 0 |
| 0x121531 | 0x121531 Ladedrucksensor, Plausibilität: Druck vor Drosselklappe zu niedrig | 0 |
| 0x121532 | 0x121532 Ladedrucksensor, Plausibilität: Druck vor Drosselklappe bei Motorstillstand zu hoch | 0 |
| 0x121533 | 0x121533 Ladedrucksensor, Plausibilität: Druck vor Drosselklappe bei Motorstillstand zu niedrig | 0 |
| 0x121601 | 0x121601 Ladedrucksensor: Druck zu hoch | 0 |
| 0x121602 | 0x121602 Ladedrucksensor: Druck zu niedrig | 0 |
| 0x122001 | 0x122001 Schubumluftventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122002 | 0x122002 Schubumluftventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122004 | 0x122004 Schubumluftventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x122108 | 0x122108 Schubumluftventil, Mechanik: klemmt geschlossen | 0 |
| 0x122201 | 0x122201 Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil | 0 |
| 0x123001 | 0x123001 Wastegate, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123002 | 0x123002 Wastegate, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123004 | 0x123004 Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123201 | 0x123201 Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x128101 | 0x128101 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | 0x128301 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128501 | 0x128501 Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128901 | 0x128901 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | 0x128B01 Lambdasonde vor Katalysator, Verbau: Sonde nicht angesteckt | 0 |
| 0x128E01 | 0x128E01 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x129001 | 0x129001 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | 0x129002 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | 0x129201 DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | 0x129202 DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129A20 | 0x129A20 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | 0x129A21 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A101 | 0x12A101 Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A102 | 0x12A102 Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A308 | 0x12A308 Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | 0x12A701 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | 0x12A902 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | 0x12AB04 Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12B101 | 0x12B101 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | 0x12B102 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | 0x12B104 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | 0x12B301 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | 0x12B302 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | 0x12B304 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B701 | 0x12B701 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BD20 | 0x12BD20 Lambdasondenbeheizung vor Katalysator, Funktion: Betriebstemperatur nicht erreicht | 0 |
| 0x12BD21 | 0x12BD21 Lambdasondenbeheizung vor Katalysator, Funktion: Mangelnde Signalbereitschaft | 0 |
| 0x12BD22 | 0x12BD22 Lambdasondenbeheizung vor Katalysator, Funktion: Innenwiderstand des Signalkreises zu hochohmig | 0 |
| 0x12BD33 | 0x12BD33 Lambdasonde nach Katalysator, Alterung: Schubspannungsschwelle nicht erreicht | 0 |
| 0x12BD50 | 0x12BD50 Lambdasonde vor Katalysator, Pumpstromleitung: Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung | 0 |
| 0x12BD52 | 0x12BD52 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | 0x12BD60 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung virtuelle Masse | 0 |
| 0x12BD70 | 0x12BD70 Lambdasonde vor Katalysator, elektrisch: Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizungsfehler | 0 |
| 0x12BD80 | 0x12BD80 Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BD90 | 0x12BD90 Lambdasonde vor Katalysator, Plausibilität: Gemisch nach Katalysator zu fett | 0 |
| 0x12BD91 | 0x12BD91 Lambdasonde vor Katalysator, Plausibilität: Gemisch nach Katalysator zu mager | 0 |
| 0x130001 | 0x130001 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130002 | 0x130002 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130004 | 0x130004 VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130104 | 0x130104 VANOS, Einlass: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130108 | 0x130108 VANOS, Einlass: Regelfehler, Position nicht erreicht | 0 |
| 0x130201 | 0x130201 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130202 | 0x130202 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130204 | 0x130204 VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130304 | 0x130304 VANOS, Auslass: Regelfehler, Nockenwelle klemmt | 0 |
| 0x130308 | 0x130308 VANOS, Auslass: Regelfehler, Position nicht erreicht | 0 |
| 0x130E11 | 0x130E11 Einlassnockenwellensensor: Signal unplausibel | 0 |
| 0x130E20 | 0x130E20 Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | 0x130F11 Auslassnockenwellensensor: Signal unplausibel | 0 |
| 0x130F20 | 0x130F20 Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | 0x131401 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | 0x131501 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x132101 | 0x132101 VANOS, Auslass, Sammelfehler: elektrisch oder mechanisch | 0 |
| 0x132201 | 0x132201 VANOS, Einlass, Sammelfehler: elektrisch oder mechanisch | 0 |
| 0x132301 | 0x132301 VANOS, Sammelfehler: elektrisch oder mechanisch | 0 |
| 0x132408 | 0x132408 VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132508 | 0x132508 VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x133101 | 0x133101 Valvetronic Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | 0x133102 Valvetronic Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | 0x133104 Valvetronic Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | 0x133201 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | 0x133202 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133206 | 0x133206 Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x133208 | 0x133208 Valvetronic-Stellmotor, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133710 | 0x133710 Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x134F01 | 0x134F01 Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | 0x134F02 Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | 0x134F04 Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | 0x134F08 Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | 0x134F10 Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 1 |
| 0x135301 | 0x135301 Valvetronic, Bauteileschutz Endstufe: Abschaltung System | 0 |
| 0x135302 | 0x135302 Valvetronic, Bauteileschutz Stellmotor: Abschaltung System | 0 |
| 0x135401 | 0x135401 Valvetronic, Überlastschutz: Endstufe überlastet | 0 |
| 0x135402 | 0x135402 Valvetronic, Überlastschutz: Stellmotor überlastet | 0 |
| 0x135501 | 0x135501 Valvetronic, Überlastschutz: Warnschwelle Endstufe überschritten | 0 |
| 0x135502 | 0x135502 Valvetronic, Überlastschutz: Warnschwelle Stellmotor überschritten | 0 |
| 0x135604 | 0x135604 Valvetronic System: Regelabweichung zu gross | 0 |
| 0x135608 | 0x135608 Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | 0x135704 Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135808 | 0x135808 Valvetronic-Stellmotor, Positionssensoren: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x135908 | 0x135908 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlerhaft | 0 |
| 0x135A08 | 0x135A08 Valvetronic-Stellmotor, Positionssensoren: Signal unplausibel | 0 |
| 0x135A10 | 0x135A10 Valvetronic-Stellmotor, Positionssensoren: Exzenterwinkel falsch | 0 |
| 0x135B10 | 0x135B10 Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | 0x135B11 Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | 0x135B12 Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | 0x135C10 Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | 0x135C11 Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x138101 | 0x138101 Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | 0x138102 Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | 0x138104 Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138201 | 0x138201 Kühlerjalousie, oben, Versorgungsspannung Steller: Spannungsfehler | 0 |
| 0x138301 | 0x138301 Kühlerjalousie, oben, Übertemperatur Steller: Grenzwert überschritten | 0 |
| 0x138401 | 0x138401 Kühlerjalousie, oben, Steller intern: elektrischer Fehler | 0 |
| 0x138501 | 0x138501 Kühlerjalousie, oben, unterer Anschlag: wird nicht erkannt | 0 |
| 0x138601 | 0x138601 Kühlerjalousie, oben, oberer Anschlag: wird nicht erkannt | 0 |
| 0x138701 | 0x138701 Kühlerjalousie, oben, oberer Anschlag: zu früh erkannt | 0 |
| 0x138901 | 0x138901 Kühlerjalousie, unten, elektrisch: Kurzschluss nach Plus | 0 |
| 0x138902 | 0x138902 Kühlerjalousie, unten, elektrisch: Kurzschluss nach Masse | 0 |
| 0x138904 | 0x138904 Kühlerjalousie, unten, elektrisch: Leitungsunterbrechung | 0 |
| 0x140001 | 0x140001 Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | 0x140002 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | 0x140004 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140101 | 0x140101 Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | 0x140102 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | 0x140104 Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140201 | 0x140201 Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | 0x140202 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | 0x140204 Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140301 | 0x140301 Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | 0x140302 Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | 0x140304 Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140401 | 0x140401 Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | 0x140402 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | 0x140404 Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140501 | 0x140501 Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | 0x140502 Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | 0x140504 Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140601 | 0x140601 Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | 0x140602 Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | 0x140604 Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x143201 | 0x143201 Laufunruhe, Füllung Einzelzylinder: Momentenbeitrag zu niedrig | 0 |
| 0x150102 | 0x150102 Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | 0x150202 Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | 0x150302 Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | 0x150402 Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150502 | 0x150502 Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | 0x150602 Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x151001 | 0x151001 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | 0x151101 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | 0x152001 Zündung, Spannungsversorgung: Kurzschluss nach Plus | 0 |
| 0x152007 | 0x152007 Zündung, Spannungsversorgung: Leitungsunterbrechung oder Kurzschluss nach Masse | 0 |
| 0x152009 | 0x152009 Zündkreis, Versorgungsspannung: Bank- oder Motorausfall | 0 |
| 0x152108 | 0x152108 Superklopfen Zylinder 1: Einspritzungsabschaltung | 0 |
| 0x152208 | 0x152208 Superklopfen Zylinder 2: Einspritzungsabschaltung | 0 |
| 0x152308 | 0x152308 Superklopfen Zylinder 3: Einspritzungsabschaltung | 0 |
| 0x152408 | 0x152408 Superklopfen Zylinder 4: Einspritzungsabschaltung | 0 |
| 0x152508 | 0x152508 Superklopfen Zylinder 5: Einspritzungsabschaltung | 0 |
| 0x152608 | 0x152608 Superklopfen Zylinder 6: Einspritzungsabschaltung | 0 |
| 0x152D08 | 0x152D08 Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | 0x160001 Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | 0x160020 Kurbelwellensensor: Gestörtes Kurbelwellensignal | 0 |
| 0x160510 | 0x160510 Kurbelwellensensor, Abstellposition: unplausibel | 0 |
| 0x164020 | 0x164020 Einlassnockenwellensensor: Signal hoch | 0 |
| 0x164021 | 0x164021 Einlassnockenwellensensor: Signal niedrig | 0 |
| 0x164030 | 0x164030 Auslassnockenwellensensor: Signal hoch | 0 |
| 0x164031 | 0x164031 Auslassnockenwellensensor: Signal niedrig | 0 |
| 0x164040 | 0x164040 Einlassnockenwelle, Mechanik: Montage fehlerhaft | 0 |
| 0x164041 | 0x164041 Auslassnockenwelle, Mechanik: Montage fehlerhaft | 0 |
| 0x168A20 | 0x168A20 Klopfregelung, Fehlerprüfung: Fehlfunktion, Systemfehler | 0 |
| 0x168A30 | 0x168A30 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | 0x168A31 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | 0x168A40 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | 0x168A41 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | 0x168A50 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | 0x168A51 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | 0x168A60 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | 0x168A61 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A70 | 0x168A70 Klopfsensor, Signal: Motor mechanisch zu laut oder KS außerhalb Toleranz (Empfindlichkeit) | 0 |
| 0x168A71 | 0x168A71 Klopfsensor, Signal: Elektrischer Fehler KS (Wackelkontakt) oder KS locker | 0 |
| 0x168A80 | 0x168A80 Klopfsensor 2, Signal: Motor mechanisch zu laut oder KS außerhalb Toleranz (Empfindlichkeit) | 0 |
| 0x168A81 | 0x168A81 Klopfsensor 2, Signal: Elektrischer Fehler KS (Wackelkontakt) oder KS locker | 0 |
| 0x180001 | 0x180001 Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x190001 | 0x190001 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190002 | 0x190002 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190004 | 0x190004 DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190201 | 0x190201 Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1, 0 mm | 0 |
| 0x190302 | 0x190302 Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0, 5 mm | 0 |
| 0x190401 | 0x190401 DMTL, Systemfehler: Pumpenstrom zu groß bei Referenzmessung | 0 |
| 0x190402 | 0x190402 DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung | 0 |
| 0x190404 | 0x190404 DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung | 0 |
| 0x190408 | 0x190408 DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert | 0 |
| 0x190501 | 0x190501 DMTL, Heizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190502 | 0x190502 DMTL, Heizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190504 | 0x190504 DMTL, Heizung, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190601 | 0x190601 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190702 | 0x190702 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190704 | 0x190704 DMTL-Leckdiagnosepumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191001 | 0x191001 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | 0x191002 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | 0x191004 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191A20 | 0x191A20 Tankentlüftungsventil: klemmt geschlossen | 0 |
| 0x191A21 | 0x191A21 Tankentlüftungsventil: klemmt offen | 0 |
| 0x191B01 | 0x191B01 Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191B02 | 0x191B02 Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191B04 | 0x191B04 Tankentlüftungssystem Absperrventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x192001 | 0x192001 Tankdeckel: nicht korrekt geschlossen | 0 |
| 0x192002 | 0x192002 Tankdeckel: offen im Nachlauf | 0 |
| 0x193002 | 0x193002 Kraftstoff-Füllstandsgeber, links, Signal: Kurzschluss nach Masse | 0 |
| 0x193008 | 0x193008 Kraftstoff-Füllstandsgeber, links, Signal: CAN Wert unplausibel | 0 |
| 0x193011 | 0x193011 Kraftstoff-Füllstandsgeber, rechts, Signal: Kurzschluss nach Plus | 0 |
| 0x193102 | 0x193102 Kraftstoff-Füllstandsgeber, rechts, Signal: Kurzschluss nach Masse | 0 |
| 0x193108 | 0x193108 Kraftstoff-Füllstandsgeber, rechts, Signal: CAN Wert unplausibel | 0 |
| 0x193111 | 0x193111 Kraftstoff-Füllstandsgeber, links, Signal: Kurzschluss nach Plus | 0 |
| 0x193120 | 0x193120 Kraftstoff-Füllstandsgeber, links, Signal: Tankfüllstandsignal unplausibel zu hoch | 0 |
| 0x193218 | 0x193218 Kraftstoff-Füllstandsgeber: Signal unplausibel wegen festhängendem Tankfüllstandsgeber | 0 |
| 0x193220 | 0x193220 Kraftstoff-Füllstandsgeber: Tankfüllstand größer als Tankvolumen | 0 |
| 0x193221 | 0x193221 Kraftstoff-Füllstandsgeber: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193A20 | 0x193A20 Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
| 0x1A2001 | 0x1A2001 Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | 0x1A2002 Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | 0x1A2004 Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2108 | 0x1A2108 Elektrolüfter, Eigendiagnose Stufe 1: leichter Lüfterfehler | 0 |
| 0x1A2308 | 0x1A2308 Elektrolüfter, Eigendiagnose Stufe 2: Lüfterfehler mit potentieller Gefährdung für den Lüfter | 0 |
| 0x1A2408 | 0x1A2408 Elektrolüfter, Eigendiagnose Stufe 3: Lüfterfehler mit Motorfunktionseinschränkung | 0 |
| 0x1A2508 | 0x1A2508 Elektrolüfter, Eigendiagnose Stufe 4: schwerer Lüfterfehler | 0 |
| 0x1A2601 | 0x1A2601 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | 0x1A2602 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | 0x1A2604 Sicherungsrelais Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1B0A20 | 0x1B0A20 Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | 0x1B0A21 Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | 0x1B0A40 Fahrzeuggeschwindigkeit: Signal zu hoch | 0 |
| 0x1B0A50 | 0x1B0A50 Fahrzeuggeschwindigkeit, Sammelfehler: Signal und Plausibilität | 0 |
| 0x1B0A60 | 0x1B0A60 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last nicht erreicht | 0 |
| 0x1B0A61 | 0x1B0A61 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub nicht erreicht | 0 |
| 0x1B0A62 | 0x1B0A62 Fahrzeuggeschwindigkeit, Plausibilität: Unplausibles Geschwindigkeitssignal | 0 |
| 0x1B0A64 | 0x1B0A64 Fahrzeuggeschwindigkeit, Radsensor hinten/links, Plausibilität: Signal unplausibel | 0 |
| 0x1B0A65 | 0x1B0A65 Fahrzeuggeschwindigkeit, Radsensor vorn/links, Plausibilität: Signal unplausibel | 0 |
| 0x1B0A66 | 0x1B0A66 Fahrzeuggeschwindigkeit, Radsensor hinten/rechts, Plausibilität: Signal unplausibel | 0 |
| 0x1B0A67 | 0x1B0A67 Fahrzeuggeschwindigkeit, Radsensor vorn/rechts, Plausibilität: Signal unplausibel | 0 |
| 0x1B2002 | 0x1B2002 EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | 0x1B2008 EWS Manipulationsschutz: erwartete Antwort unplausibel | 0 |
| 0x1B2101 | 0x1B2101 Schnittstelle EWS-DME: Hardwarefehler | 0 |
| 0x1B2102 | 0x1B2102 Schnittstelle EWS-DME: Framefehler | 0 |
| 0x1B2104 | 0x1B2104 Schnittstelle EWS-DME: Zeitüberschreitung | 0 |
| 0x1B2109 | 0x1B2109 Schnittstelle EWS-DME: Empfangsfehler CAS Schnittstelle | 0 |
| 0x1B2201 | 0x1B2201 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | 0x1B2202 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2208 | 0x1B2208 DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2209 | 0x1B2209 DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key | 0 |
| 0x1B2302 | 0x1B2302 Botschaft EWS-DME fehlerhaft: Framefehler | 0 |
| 0x1B2304 | 0x1B2304 Botschaft EWS-DME fehlerhaft: Zeitüberschreitung | 0 |
| 0x1B5101 | 0x1B5101 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | 0x1B5102 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x1B5202 | 0x1B5202 Klemme 15N_1, Versorgung geschaltet durch CAS, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x1B5302 | 0x1B5302 Klemme 15N_2, Versorgung geschaltet durch CAS, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x1B5402 | 0x1B5402 Klemme 15N_3, Versorgung geschaltet durch CAS, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x1B6008 | 0x1B6008 Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B7101 | 0x1B7101 Bremsunterdrucksensor, Plausibilität: Differenzdruck zu hoch | 0 |
| 0x1B7201 | 0x1B7201 Bremsunterdrucksensor: Kurzschluss nach Plus | 0 |
| 0x1B7202 | 0x1B7202 Bremsunterdrucksensor: Kurzschluss nach Masse | 0 |
| 0x1B9508 | 0x1B9508 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | 0x1B9608 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | 0x1B9701 Motorabstellzeit: zu schnell im Motorlauf | 0 |
| 0x1B9702 | 0x1B9702 Motorabstellzeit: zu langsam im Motorlauf | 0 |
| 0x1B9804 | 0x1B9804 Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | 0x1B9A01 Motorabstellzeit: zu schnell im Nachlauf | 0 |
| 0x1B9A02 | 0x1B9A02 Motorabstellzeit: zu langsam im Nachlauf | 0 |
| 0x1BC004 | 0x1BC004 Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1BC101 | 0x1BC101 Nullgangsensor, Plausibilität: Signal unplausibel | 0 |
| 0x1BC110 | 0x1BC110 Nullgangsensor, Signal: Tastverhältnis zu hoch | 0 |
| 0x1BC111 | 0x1BC111 Nullgangsensor, Signal: Tastverhältnis zu niedrig | 0 |
| 0x1BC112 | 0x1BC112 Nullgangsensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x1BC113 | 0x1BC113 Nullgangsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BC114 | 0x1BC114 Nullgangsensor, Plausibilität: Periodendauer außerhalb gültigem Bereich | 0 |
| 0x1C0001 | 0x1C0001 Motoröldruckregelung, dynamisch: Druckschwankungen | 0 |
| 0x1C0101 | 0x1C0101 Motoröldruckregelung, statisch: Motoröldruck zu hoch, Notlauf | 0 |
| 0x1C0102 | 0x1C0102 Motoröldruckregelung, statisch: Motoröldruck zu niedrig, Notlauf | 0 |
| 0x1C0201 | 0x1C0201 Öldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | 0x1C0202 Öldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | 0x1C0204 Öldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0301 | 0x1C0301 Öldruckregelventil, mechanisch: hängt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | 0x1C0302 Öldruckregelventil, mechanisch: hängt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | 0x1C0401 Motoröldrucksystem: Regelung instabil | 0 |
| 0x1C2001 | 0x1C2001 Ölpumpe, mechanisch: Öldruck zu hoch | 0 |
| 0x1C2002 | 0x1C2002 Ölpumpe, mechanisch: Öldruck zu niedrig | 0 |
| 0x1C3001 | 0x1C3001 Motoröldrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1C3002 | 0x1C3002 Motoröldrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1C3101 | 0x1C3101 Motoröldrucksensor, Plausibilität: Druck zu hoch vor Start | 0 |
| 0x1C3102 | 0x1C3102 Motoröldrucksensor, Plausibilität: Druck zu niedrig vor Start | 0 |
| 0x1C3108 | 0x1C3108 Motoröldrucksensor, Plausibilität: Signal hängt | 0 |
| 0x1C4002 | 0x1C4002 Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | 0x1C4110 Ölzustandssensor, elektrisch: Fehlfunktion | 0 |
| 0x1C4111 | 0x1C4111 Ölzustandssensor, Plausibilität: Niveau unplausibel | 0 |
| 0x1C4112 | 0x1C4112 Ölzustandssensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C4113 | 0x1C4113 Ölzustandssensor, Plausibilität: Niveau unplausibel | 0 |
| 0x1C4114 | 0x1C4114 Ölzustandssensor, Plausibilität: Permittivität unplausibel | 0 |
| 0x1C4115 | 0x1C4115 Ölzustandssensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C4116 | 0x1C4116 Ölzustandssensor, elektrisch: Niveau Fehlfunktion | 0 |
| 0x1C4117 | 0x1C4117 Ölzustandssensor, elektrisch: Permittivität Fehlfunktion | 0 |
| 0x1C4118 | 0x1C4118 Ölzustandssensor, elektrisch: Temperatur Fehlfunktion | 0 |
| 0x1C4119 | 0x1C4119 Motoröltemperatursensor, elektrisch: Fehlfunktion | 0 |
| 0x1C4120 | 0x1C4120 Motoröltemperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C5A20 | 0x1C5A20 BSD-Botschaft vom Ölzustandssensor: fehlt | 0 |
| 0x1D2008 | 0x1D2008 Kennfeldthermostat, mechanisch: klemmt offen | 0 |
| 0x1D2401 | 0x1D2401 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | 0x1D2402 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | 0x1D2404 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3701 | 0x1D3701 Schaltzeitpunkt: Anpassung | 0 |
| 0x1D3808 | 0x1D3808 Kupplungsschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1D3901 | 0x1D3901 EGS, Signalüberwachung (Turbinendrehzahl): ungültiger Signalinhalt | 1 |
| 0x1D3A01 | 0x1D3A01 EGS, Signalüberwachung (Drehzahl Abtrieb): ungültiger Signalinhalt | 1 |
| 0x1D3B01 | 0x1D3B01 EGS, Signalüberwachung (Ganginformation): ungültiger Signalinhalt | 1 |
| 0x1D3C01 | 0x1D3C01 EGS, Signalüberwachung (Status Schaltvorgang): ungültiger Signalinhalt | 1 |
| 0x1E0001 | 0x1E0001 Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | 0x1E0002 Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | 0x1E0101 Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | 0x1E0102 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E5201 | 0x1E5201 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5A20 | 0x1E5A20 Überwachung Motordrehmoment-Begrenzung: Maximal zulässiges Sollmoment wird dauerhaft überschritten | 0 |
| 0x1F0514 | 0x1F0514 Valvetronic-Relais, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F0515 | 0x1F0515 Valvetronic-Relais, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0516 | 0x1F0516 DME, interner Fehler, Überwachung elektrisches Fahrpedal: AD-Wandler Leerlauftestimpulsprüfung | 0 |
| 0x1F0517 | 0x1F0517 DME, interner Fehler, Überwachung elektrisches Fahrpedal: AD-Wandler Testspannungsprüfung | 0 |
| 0x1F0518 | 0x1F0518 DME, interner Fehler, Überwachung elektrisches Fahrpedal: Luftmengenabgleich | 0 |
| 0x1F0519 | 0x1F0519 DME, interner Fehler: Überwachung Signalplausibilisierung Fahrpedalmodul oder Pedalwertgeber | 0 |
| 0x1F0520 | 0x1F0520 DME, interner Fehler, Überwachung elektrisches Fahrpedal: Drehzahlgeber | 0 |
| 0x1F0521 | 0x1F0521 DME, interner Fehler: Überwachung Plausibilisierung der Gemischkorrekturfaktoren | 0 |
| 0x1F0522 | 0x1F0522 DME, interner Fehler: Überwachung Einspritzmengenbegrenzung Ebene 1 | 0 |
| 0x1F0523 | 0x1F0523 DME, interner Fehler: Überwachung Einspritzmengenbegrenzung Ebene 2 | 0 |
| 0x1F0524 | 0x1F0524 DME, interner Fehler: Überwachung des Lambda-Sollwertes | 0 |
| 0x1F0525 | 0x1F0525 DME, interner Fehler: Überwachung Plausibilisierung der relativen Kraftstoffmasse | 0 |
| 0x1F0526 | 0x1F0526 DME, interner Fehler: Überwachung Momentenvergleich | 0 |
| 0x1F0527 | 0x1F0527 DME, interner Fehler, Überwachung elektrisches Fahrpedal: Antriebstrangübersetzungsverhältnis unplausibel | 0 |
| 0x1F0528 | 0x1F0528 DME, interner Fehler: Überwachung Variantencodierung | 0 |
| 0x1F0529 | 0x1F0529 DME, interner Fehler, Überwachung elektrisches Fahrpedal: Zündwinkelüberwachung | 0 |
| 0x1F0530 | 0x1F0530 DME, interner Fehler: Abschaltpfad-Test durch Überwachungsmodul | 0 |
| 0x1F0531 | 0x1F0531 DME, interner Fehler: Überwachung Plausiblisierung Kraftstoffmasse | 0 |
| 0x1F0904 | 0x1F0904 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F1401 | 0x1F1401 DME, interner Fehler, MSA-Überwachung: fehlerhafte Berechnung | 0 |
| 0x1F1A50 | 0x1F1A50 DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | 0x1F1A52 DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | 0x1F1A60 DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A80 | 0x1F1A80 DME, interner Fehler, Watchdog-Ausgang: WDA-Activ mit unbekannter Ursache | 0 |
| 0x1F1A81 | 0x1F1A81 DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation | 0 |
| 0x1F1A82 | 0x1F1A82 DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung | 0 |
| 0x1F1A90 | 0x1F1A90 DME, interner Fehler, Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A91 | 0x1F1A91 DME, interner Fehler, Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A92 | 0x1F1A92 DME, interner Fehler, Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1B40 | 0x1F1B40 Starter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F1B41 | 0x1F1B41 Starter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F1B42 | 0x1F1B42 Starter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F1B50 | 0x1F1B50 Bordnetzspannung, DME-Hauptrelais: Spannung zu hoch | 0 |
| 0x1F2104 | 0x1F2104 Falscher Datensatz: CAN Timeout | 0 |
| 0x1F2108 | 0x1F2108 Falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | 0x1F2601 Codierung: falsche Variante codiert | 0 |
| 0x1F2604 | 0x1F2604 Codierung: Fahrgestellnummer nicht kodiert | 0 |
| 0x1F2701 | 0x1F2701 Codierung: Fehler beim Schreiben der Variante | 0 |
| 0x1F2702 | 0x1F2702 Codierung: Variantenprüfung fehlerhaft | 0 |
| 0x1F2704 | 0x1F2704 Codierung: Unplausible Variante | 0 |
| 0x1F4A01 | 0x1F4A01 Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | 0x1F4A02 Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | 0x1F4A10 Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F5020 | 0x1F5020 DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | 0x1F5021 DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | 0x1F5101 DME Temperatur: Übertemperatur | 0 |
| 0x200D04 | 0x200D04 DME, interner Fehler, Überwachung Sendesignale: Fahrpedal unplausibel | 0 |
| 0x200F11 | 0x200F11 DME, interner Fehler, Überwachung Sendesignale: Ist-Radmoment unplausibel | 0 |
| 0x200F12 | 0x200F12 DME, interner Fehler, Überwachung Sendesignale: koordiniertes Radmoment unplausibel | 0 |
| 0x200F13 | 0x200F13 DME, interner Fehler, Überwachung Sendesignale: Verlustmoment unplausibel | 0 |
| 0x200F14 | 0x200F14 DME, interner Fehler, Überwachung Sendesignale: Verstärkung Antriebsstrang unplausibel | 0 |
| 0x200F15 | 0x200F15 DME, interner Fehler, Überwachung Sendesignale: Status Schnittstelle Fahrerassistenzsystem unplausibel | 0 |
| 0x200F16 | 0x200F16 DME, interner Fehler, Überwachung Sendesignale: Statuswort Radmomentenschnittstelle unplausibel | 0 |
| 0x200F17 | 0x200F17 DME, interner Fehler, Überwachung Sendesignale: Schleppmoment unplausibel | 0 |
| 0x200F18 | 0x200F18 DME, interner Fehler, erweiterte Überwachung Sendesignale: Fahrpedal unplausibel | 0 |
| 0x200F19 | 0x200F19 DME, interner Fehler, erweiterte Überwachung Sendesignale: Ist-Radmoment unplausibel | 0 |
| 0x200F20 | 0x200F20 DME, interner Fehler, erweiterte Überwachung Sendesignale: koordiniertes Radmoment unplausibel | 0 |
| 0x200F21 | 0x200F21 DME, interner Fehler, erweiterte Überwachung Sendesignale: Verlustmoment unplausibel | 0 |
| 0x200F22 | 0x200F22 DME, interner Fehler, erweiterte Überwachung Sendesignale: Verstärkung Antriebsstrang unplausibel | 0 |
| 0x200F23 | 0x200F23 DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Schnittstelle Fahrerassistenzsystem unplausibel | 0 |
| 0x200F24 | 0x200F24 DME, interner Fehler, erweiterte Überwachung Sendesignale: Qualifier Radmomentenschnittstelle unplausibel | 0 |
| 0x200F25 | 0x200F25 DME, interner Fehler, erweiterte Überwachung Sendesignale: Schleppmoment unplausibel | 0 |
| 0x200F26 | 0x200F26 DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Motorlauf unplausibel | 0 |
| 0x200F27 | 0x200F27 DME, interner Fehler, Überwachung Sendesignale: Drehzahl Hinterachse unplausibel | 0 |
| 0x200F28 | 0x200F28 DME, interner Fehler, Überwachung Sendesignale: Fahrtrichtungswunsch unplausibel | 0 |
| 0x200F29 | 0x200F29 DME, interner Fehler, Überwachung Sendesignale: Motorstatus unplausibel | 0 |
| 0x200F2A | 0x200F2A DME, interner Fehler, Überwachung Sendesignale: Status Kraftschluss Antriebsstrang unplausibel | 0 |
| 0x200F2B | 0x200F2B DME, interner Fehler, erweiterte Überwachung Sendesignale: Drehzahl Hinterachse unplausibel | 0 |
| 0x200F2C | 0x200F2C DME, interner Fehler, erweiterte Überwachung Sendesignale: Fahrtrichtungswunsch unplausibel | 0 |
| 0x200F2D | 0x200F2D DME, interner Fehler, erweiterte Überwachung Sendesignale: Motorstatus unplausibel | 0 |
| 0x200F2E | 0x200F2E DME, interner Fehler, erweiterte Überwachung Sendesignale: Status Kraftschluss Antriebsstrang unplausibel | 0 |
| 0x201004 | 0x201004 CBS-Client: Ausgabe von Ersatzwert | 0 |
| 0x201008 | 0x201008 CBS-Client: Verfügbarkeitssprung | 0 |
| 0x201010 | 0x201010 CAN Hardware: defekt | 0 |
| 0x201020 | 0x201020 FlexRay Hardware: defekt | 0 |
| 0x201030 | 0x201030 Testfunktion Layer: Fehlergruppe 1 | 0 |
| 0x201040 | 0x201040 Testfunktion Layer: Fehlergruppe 2 | 0 |
| 0x201101 | 0x201101 DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A701 | 0x20A701 Kühlmittelpumpe, Drehzahlabweichung: außerhalb der Toleranz | 0 |
| 0x20A801 | 0x20A801 Kühlmittelpumpe, Abschaltung: interne Temperatur zu hoch | 0 |
| 0x20A802 | 0x20A802 Kühlmittelpumpe, Abschaltung: Überspannung erkannt | 0 |
| 0x20A804 | 0x20A804 Kühlmittelpumpe, Abschaltung: Pumpe blockiert | 0 |
| 0x20A901 | 0x20A901 Kühlmittelpumpe, leistungsreduzierter Betrieb: Trockenlauf erkannt | 0 |
| 0x20A902 | 0x20A902 Kühlmittelpumpe, leistungsreduzierter Betrieb: Unterspannung erkannt | 0 |
| 0x20A904 | 0x20A904 Kühlmittelpumpe, leistungsreduzierter Betrieb: Temperaturgrenze 1 überschritten | 0 |
| 0x20A908 | 0x20A908 Kühlmittelpumpe, leistungsreduzierter Betrieb: Temperaturgrenze 2 überschritten | 0 |
| 0x20A909 | 0x20A909 BSD-Botschaft von der elektrischen Kühlmittelpumpe: fehlt | 0 |
| 0x20AB08 | 0x20AB08 Kühlmittelpumpe, Notlauf-Eingang: keine Spannung | 0 |
| 0x20BA20 | 0x20BA20 Kupplungsschalter, Signal: Signal fehlt | 0 |
| 0x210201 | 0x210201 Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | 0x210301 Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | 0x210401 Generator, Temperatur: Übertemperatur | 1 |
| 0x210601 | 0x210601 Generator, mechanisch: Fehlfunktion | 0 |
| 0x210801 | 0x210801 Generator: Typ falsch | 0 |
| 0x210C01 | 0x210C01 Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211A21 | 0x211A21 BSD-Bus: Kommunikationsfehler | 0 |
| 0x211F01 | 0x211F01 Generator/Startergenerator: Codierung fehlt | 0 |
| 0x212001 | 0x212001 Startergenerator, Kommunikation: Bus-Fehler | 0 |
| 0x212101 | 0x212101 Startergenerator, Plausibilität, elektrisch: berechnet | 0 |
| 0x212201 | 0x212201 Startergenerator, elektrisch: Fehlfunktion | 0 |
| 0x212301 | 0x212301 Startergenerator: Übertemperatur | 1 |
| 0x212401 | 0x212401 Startergenerator, mechanisch: Fehlfunktion | 0 |
| 0x212501 | 0x212501 Startergenerator, MSA Hardwareleitung: Signal unplausibel | 0 |
| 0x212601 | 0x212601 Startergenerator: MSA dauerhaft deaktiviert | 1 |
| 0x212701 | 0x212701 Startergenerator: MSA zeitweise deaktiviert | 1 |
| 0x212801 | 0x212801 Startergenerator: Sensorfehler | 0 |
| 0x212A01 | 0x212A01 Startergenerator: Typ falsch | 0 |
| 0x213301 | 0x213301 Powermanagement, Überspannung: Überspannung erkannt | 1 |
| 0x213401 | 0x213401 Powermanagement, Unterspannung: Unterspannung erkannt | 1 |
| 0x213501 | 0x213501 Powermanagement, Batterieüberwachung: Tiefentladung | 1 |
| 0x213604 | 0x213604 Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 1 |
| 0x213701 | 0x213701 Powermanagement: Batterieloser Betrieb | 1 |
| 0x213801 | 0x213801 Batterie, Transport: Batterie auf Transport geschädigt | 1 |
| 0x213901 | 0x213901 Verbraucherreduzierung: aktiv | 1 |
| 0x213A01 | 0x213A01 Batterie, Transport, Überwachung: Batterie auf Transport entladen | 1 |
| 0x213A20 | 0x213A20 Bordnetzspannung: Spannung zu hoch | 0 |
| 0x213A21 | 0x213A21 Bordnetzspannung: Spannung zu niedrig | 0 |
| 0x213A22 | 0x213A22 Bordnetzspannung: Analog-Digital-Wandler defekt | 0 |
| 0x213B08 | 0x213B08 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C08 | 0x213C08 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x213D01 | 0x213D01 Powermanagement, Bauteilerkennung: Batterieladeeinheit und Power Control Unit erkannt | 0 |
| 0x215001 | 0x215001 Intelligenter Batteriesensor, Signal: Bus-Fehler | 0 |
| 0x215101 | 0x215101 Intelligenter Batteriesensor, Funktion: Temperaturfehler | 0 |
| 0x215104 | 0x215104 Intelligenter Batteriesensor, Funktion: Spannungsfehler | 0 |
| 0x215108 | 0x215108 Intelligenter Batteriesensor, Funktion: Stromfehler | 0 |
| 0x215801 | 0x215801 Intelligenter Batteriesensor, Wake-up-Leitung: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | 0x215901 Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | 0x215A01 Intelligenter Batteriesensor, Wake-up-Leitung: Leitungsunterbrechung | 0 |
| 0x215B01 | 0x215B01 Intelligenter Batteriesensor, Kommunikation: keine Kommunikation | 0 |
| 0x215C01 | 0x215C01 Intelligenter Batteriesensor, Eigendiagnose: interner Fehler | 0 |
| 0x216002 | 0x216002 MSA, Überwachung: Motorstart zu langsam | 0 |
| 0x216104 | 0x216104 MSA, Überwachung: Aufbau Motordrehzahl zu langsam | 0 |
| 0x218001 | 0x218001 Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | 0x218101 Batterieladeeinheit: Leitungsüberwachung fehlerhaft | 0 |
| 0x218201 | 0x218201 Batterieladeeinheit: Zusatzbatterie defekt | 0 |
| 0x218301 | 0x218301 Batterieladeeinheit: Fehler im Trennrelais oder Kabelbaum oder Zusatzbatterie tiefentladen | 0 |
| 0x219001 | 0x219001 Aktives Motorlager, elektrisch: Kurzschluss nach Plus | 0 |
| 0x219002 | 0x219002 Aktives Motorlager, elektrisch: Kurzschluss nach Masse | 0 |
| 0x219004 | 0x219004 Aktives Motorlager, elektrisch: Leitungsunterbrechung | 0 |
| 0x22FF3C | 0x22FF3C EwpEcuSTEWPLIN_C | 0 |
| 0x22FF56 | 0x22FF56 InmLINNodeAltEcuAbsnt_C | 0 |
| 0x22FF60 | 0x22FF60 SLPEmax_C | 0 |
| 0x22FF61 | 0x22FF61 SLPEmin_C | 0 |
| 0x22FF62 | 0x22FF62 SLPEsig_C | 0 |
| 0x22FF63 | 0x22FF63 SLVEmax_C | 0 |
| 0x22FF64 | 0x22FF64 SLVEmin_C | 0 |
| 0x22FF65 | 0x22FF65 SLVEsig_C | 0 |
| 0x22FF6A | 0x22FF6A MSAKUPPPLAUSnpl_C | 0 |
| 0x22FF6B | 0x22FF6B OilNTQTOENSnp_C | 0 |
| 0x22FF6C | 0x22FF6C OilNTQTOENSsp_C | 0 |
| 0x22FF6D | 0x22FF6D OilNTQTOENSsp2_C | 0 |
| 0x22FF6E | 0x22FF6E OilNTQTOENStp_C | 0 |
| 0x231501 | 0x231501 Aktive DTC-reporting: DTC-Puffer voll | 0 |
| 0x231502 | 0x231502 Aktive DTC-reporting: DTC-Senden fehlerhaft | 0 |
| 0x231F04 | 0x231F04 EGS über A- und FA-CAN: Kommunikationsfehler | 0 |
| 0x233004 | 0x233004 Dienst (0x5E0, OBD Sensor Diagnosestatus): fehlt | 1 |
| 0xCD840A | 0xCD840A FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8420 | 0xCD8420 FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | 0xCD8486 A-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8801 | 0xCD8801 FlexRay controller, Startupzeit: maximale Startupzeit überschritten | 0 |
| 0xCD8BFF | 0xCD8BFF Dummy Network DTC: network DTC | 0 |
| 0xCD8D10 | 0xCD8D10 LIN, Botschaft (Kühlerjalousie, 0x33): Kommunikationsfehler vom Kühlerjalousieantrieb | 0 |
| 0xCD8D17 | 0xCD8D17 LIN, Botschaft (Batterieladeeinheit, Status Energieerzeugung Bordnetz 2, 0x5): fehlt | 0 |
| 0xCD8E10 | 0xCD8E10 LIN Bus, Kommunikation: Signal fehlt | 1 |
| 0xCD8F01 | 0xCD8F01 Intelligenter Batteriesensor, LIN Kommunikation: Zeitüberschreitung | 0 |
| 0xCD9001 | 0xCD9001 Kühlmittelpumpe, Kommunikation: Zeitüberschreitung | 1 |
| 0xCD9002 | 0xCD9002 Kühlmittelpumpe, Kommunikation: Ungültige Botschaft | 1 |
| 0xCD9201 | 0xCD9201 Kühlerjalousie, LIN Kommunikation: Zeitüberschreitung | 0 |
| 0xCD9203 | 0xCD9203 Kühlerjalousie, LIN Kommunikation: Signal fehlerhaft | 0 |
| 0xCD9402 | 0xCD9402 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | 0xCD9404 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | 0xCD9408 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9432 | 0xCD9432 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0xCD9435 | 0xCD9435 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0xCD9437 | 0xCD9437 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD9502 | 0xCD9502 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | 0xCD9504 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): fehlt | 1 |
| 0xCD9508 | 0xCD9508 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | 0xCD9602 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | 0xCD9604 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | 0xCD9608 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | 0xCD9702 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | 0xCD9704 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | 0xCD9708 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9902 | 0xCD9902 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | 0xCD9904 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | 0xCD9908 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | 0xCD9932 Flexray, Botschaft (Giergeschwindigkeit Fahrzeug, 38.0.2): Aliveprüfung | 1 |
| 0xCD9933 | 0xCD9933 Flexray, Botschaft (Giergeschwindigkeit Fahrzeug, 38.0.2): fehlt | 1 |
| 0xCD9934 | 0xCD9934 Flexray, Botschaft (Giergeschwindigkeit Fahrzeug, 38.0.2): Prüfsumme falsch | 1 |
| 0xCD9935 | 0xCD9935 Flexray, Botschaft (Daten Fahrdynamiksensor Erweitert, 38.0.2): fehlt | 1 |
| 0xCD9A02 | 0xCD9A02 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | 0xCD9A04 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | 0xCD9A08 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9B02 | 0xCD9B02 FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): Aliveprüfung | 1 |
| 0xCD9B04 | 0xCD9B04 FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): fehlt | 1 |
| 0xCD9B08 | 0xCD9B08 FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): Prüfsumme falsch | 1 |
| 0xCD9D02 | 0xCD9D02 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9D04 | 0xCD9D04 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9D08 | 0xCD9D08 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9E02 | 0xCD9E02 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9E04 | 0xCD9E04 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9E08 | 0xCD9E08 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9F02 | 0xCD9F02 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Aliveprüfung | 1 |
| 0xCD9F04 | 0xCD9F04 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): fehlt | 1 |
| 0xCD9F08 | 0xCD9F08 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Prüfsumme falsch | 1 |
| 0xCDA002 | 0xCDA002 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Aliveprüfung | 1 |
| 0xCDA004 | 0xCDA004 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 1 |
| 0xCDA008 | 0xCDA008 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Prüfsumme falsch | 1 |
| 0xCDA102 | 0xCDA102 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xCDA104 | 0xCDA104 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xCDA108 | 0xCDA108 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xCDA204 | 0xCDA204 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA302 | 0xCDA302 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | 0xCDA304 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | 0xCDA308 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA402 | 0xCDA402 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | 0xCDA404 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | 0xCDA408 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA410 | 0xCDA410 FlexRay, Botschaft (Anzeige LDM 1, 135.0.2): fehlt | 1 |
| 0xCDA421 | 0xCDA421 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | 0xCDA422 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | 0xCDA423 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA425 | 0xCDA425 FlexRay, Botschaft (Status Parkassistent, 231.1.2): fehlt | 1 |
| 0xCDA426 | 0xCDA426 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA430 | 0xCDA430 FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 73.0.2): Aliveprüfung | 1 |
| 0xCDA431 | 0xCDA431 FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 73.0.2): Prüfsumme falsch | 1 |
| 0xCDA432 | 0xCDA432 FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA435 | 0xCDA435 FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA440 | 0xCDA440 FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): Aliveprüfung | 1 |
| 0xCDA441 | 0xCDA441 FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): Prüfsumme falsch | 1 |
| 0xCDA442 | 0xCDA442 FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA450 | 0xCDA450 FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied / Ist Kraft Zahnstange, 49.0.2): fehlt | 1 |
| 0xCDA458 | 0xCDA458 A-CAN, Botschaft (Diagnose OBD SME, 0x426): fehlt, Sender SME | 1 |
| 0xCDA512 | 0xCDA512 FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Aliveprüfung | 1 |
| 0xCDA514 | 0xCDA514 FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xCDA518 | 0xCDA518 FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Prüfsumme falsch | 1 |
| 0xCDA702 | 0xCDA702 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | 0xCDA704 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | 0xCDA708 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | 0xCDA804 FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDA904 | 0xCDA904 FA-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt | 1 |
| 0xCDAB04 | 0xCDAB04 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | 0xCDAC04 FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | 0xCDAD04 FA-CAN, Botschaft (Steuerung Crashabschaltung EKP, 0x135): fehlt | 1 |
| 0xCDAE04 | 0xCDAE04 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | 0xCDAF04 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB204 | 0xCDB204 FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB304 | 0xCDB304 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB404 | 0xCDB404 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | 0xCDB504 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | 0xCDB602 FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | 0xCDB604 FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | 0xCDB608 FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | 0xCDB804 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB904 | 0xCDB904 FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBA04 | 0xCDBA04 FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA10 | 0xCDBA10 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xCDBA11 | 0xCDBA11 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xCDBA12 | 0xCDBA12 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xCDBA13 | 0xCDBA13 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xCDBA14 | 0xCDBA14 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xCDBA15 | 0xCDBA15 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xCDBA17 | 0xCDBA17 FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): fehlt | 1 |
| 0xCDBA20 | 0xCDBA20 FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Aliveprüfung | 1 |
| 0xCDBA21 | 0xCDBA21 FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Prüfsumme falsch | 1 |
| 0xCDBA22 | 0xCDBA22 FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): fehlt | 1 |
| 0xCDBA25 | 0xCDBA25 FA-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCDBA30 | 0xCDBA30 FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): Aliveprüfung | 1 |
| 0xCDBA31 | 0xCDBA31 FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): Prüfsumme falsch | 1 |
| 0xCDBA32 | 0xCDBA32 FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): fehlt | 1 |
| 0xCDBB02 | 0xCDBB02 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | 0xCDBB04 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | 0xCDBB08 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBB10 | 0xCDBB10 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xCDBB11 | 0xCDBB11 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xCDBB12 | 0xCDBB12 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xCDBC04 | 0xCDBC04 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): fehlt | 1 |
| 0xCDBC10 | 0xCDBC10 A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): fehlt | 1 |
| 0xCDBC20 | 0xCDBC20 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Aliveprüfung | 1 |
| 0xCDBC21 | 0xCDBC21 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Prüfsumme falsch | 1 |
| 0xCDBC22 | 0xCDBC22 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): fehlt | 1 |
| 0xCDBC23 | 0xCDBC23 A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCDBD04 | 0xCDBD04 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): fehlt | 1 |
| 0xCDBE02 | 0xCDBE02 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | 0xCDBE04 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBE20 | 0xCDBE20 A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): Aliveprüfung | 1 |
| 0xCDBE21 | 0xCDBE21 A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): Prüfsumme falsch | 1 |
| 0xCDBE22 | 0xCDBE22 A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): fehlt | 1 |
| 0xCDBF04 | 0xCDBF04 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDBF20 | 0xCDBF20 A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): Aliveprüfung | 1 |
| 0xCDBF21 | 0xCDBF21 A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): Prüfsumme falsch | 1 |
| 0xCDBF22 | 0xCDBF22 A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): fehlt | 1 |
| 0xCDC004 | 0xCDC004 A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | 0xCDC102 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | 0xCDC104 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | 0xCDC108 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | 0xCDC202 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle EGS, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | 0xCDC204 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle EGS, 0xB0): fehlt | 1 |
| 0xCDC208 | 0xCDC208 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle EGS, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC304 | 0xCDC304 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4205 | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4300 | Motor-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4306 | Quittung  Solldrehzahl von BSS-Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | empf. Status von BSS-Wasserpumpe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Oeltemperatur nach Filter | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x4403 | Kraftstoffverbrauch seit letztem Ölwechsel | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | Ölkilometer | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Sensorrohwert Ölniveau | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4406 | Sensorrohwert Permittivität | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Sensorrohwert Öltemperatur | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4408 | Öltemperatur ungefiltert | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Ölniveau ungefiltert in [mm] | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Permitivität für den Tester | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzzeit-Ölniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | - | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öllaufzeit | month | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Ölzustandssensor | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4505 | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4506 | Einlassnockenwellenposition | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4507 | Auslassnockenwellenposition | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x450C | Kurbelwellenadaption Einlass erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450D | Kurbelwellenadaption Auslass erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450E | Kurbelwellennullpunktverschiebung in Grad für Winkelversatzdiagnose | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4510 | VVT-Lageregler, bleibende Abweichung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4511 | VVT-Lageregelung, Schwingung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4512 | VVT überlastet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4513 | VVT-Überlastung, klemmender Steller | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4514 | VVT-Adaption möglich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4515 | Anforderung, VVT-Anschlaglernen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4516 | Status VVT-Anschlaglernen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4517 | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 0 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4518 | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4519 | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 2 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451A | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 3 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451B | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 4 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451C | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 5 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451D | Gesamtzeit VVT-Performancetest | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x451E | Stromsumme VVT-Performancetest | A | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4600 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x4601 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4604 | Generatorstrom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x460A | momentane Batteriespannung | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460C | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | - | unsigned integer | - | 0,02355000004172325 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460E | Abstand zur Startfähigkeit | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460F | DF-Monitor für Batterie-Ladezustand in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4613 | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4616 | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | Abgenommenes Generatormoment | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominalspannung Regler Generator 1 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x461B | Drehzahlschwelle für LoadResponse-Funktion | Upm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4680 | Leerlaufdrehzahl gelernt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4681 | Bereitschaft Getriebe Neutralposition anlernen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4700 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Bedingung Sonde betriebsbereit vor Kat, Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x4703 | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde Bank 2 | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x4704 | Lambdasoll Begrenzung (word) | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x4705 | Lambdasoll Begrenzung (word) Bank2 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x4800 | Bedingung Kupplungspedal betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Schalter Kupplung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Bedingung umschalten auf KFPEDS | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Bedingung für Kompressoreinschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Schalter Klemme 50 von CAN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4807 | Motordrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4808 | Leerlaufsolldrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4809 | Bedingung Leerlaufregelung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480B | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x4880 | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4881 | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4A02 | ATL-Leckagediagnose läuft | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A17 | Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A1B | Elektrische Kraftstoffpumpe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A1D | Spannung Bremsenunterdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A21 | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4A2B | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4A2D | Saugrohr-Absolutdruck gemessen | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4A30 | Laufunruhe Zylinder 1 | (Umdr./sec)^2 | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| 0x4A31 | Laufunruhe Zylinder 2 | (Umdr./sec)^2 | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| 0x4A32 | Laufunruhe Zylinder 3 | (Umdr./sec)^2 | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| 0x4A33 | Laufunruhe Zylinder 4 | (Umdr./sec)^2 | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| 0x4A34 | Laufunruhe Zylinder 5 | (Umdr./sec)^2 | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| 0x4A35 | Laufunruhe Zylinder 6 | (Umdr./sec)^2 | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| 0x4A36 | Bedingung für erkannte Klopfer | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A37 | normierter Referenzpegel Klopfregelung Zylinder 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A38 | normierter Referenzpegel Klopfregelung Zylinder 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A39 | normierter Referenzpegel Klopfregelung Zylinder 3 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A3A | normierter Referenzpegel Klopfregelung Zylinder 4 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A3B | normierter Referenzpegel Klopfregelung Zylinder 5 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A3C | normierter Referenzpegel Klopfregelung Zylinder 6 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A49 | Ausgegebener Zündwinkel | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A52 | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A53 | Bedingung Sonde betriebsbereit hinter Kat Bank2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A54 | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A55 | Bedingung Sonde 2 hinter Kat ausreichend beheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A56 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A57 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt, Bank2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A60 | Bedingung Bremslichtschalter betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A61 | Bedingung Bremstestschalter betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A65 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A66 | Bedingung DMTL-Pumpenmotor an | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A67 | Bedingung DMTL-Magnetventil an | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A68 | Bedingung Heizung DM-TL Portansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A69 | MIL-Ansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6A | Lampe FGR ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6B | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6C | Korrekturfaktor für die Kraftstoffmenge | % | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4A74 | Tastverhältnis Kennfeldthermostat | - | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A77 | ausgegebenes Tastverhältnis für Tankentlüftungsventil (16 Bit) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A7A | Tastverhältnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A7B | Tastverhältnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A85 | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A91 | Amplitudenverhältnis laafh/laafv gefiltert | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x4A92 | Amplitudenverhältnis laafh/laafv gefiltert Bank2 | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x4A93 | Fehlerzähler für Lernen Nullgang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A94 | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4A95 | Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4A96 | Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4A97 | Bedi. Vanos Einlass im Anschlag | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A99 | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A9D | multiplikative Gemischkorrektur der Gemischadaption | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4AA1 | Zyklusflag: Tankentlüftungsventil Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AA2 | Funktionsstatus-Zähler DM-TL für Testerausgabe aus letztem Fahrzyklus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AA4 | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AAA | Tastverhältnis PWM Ansteuerung Öldruck | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AAB | Tastverhältnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AAC | Tastverhältnis an Endstufe des Ladedruckstellers, Bank 2 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AB0 | Ladedruck- Sollwert | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4AB1 | Fahrzeuggeschwindigkeit | km/h | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| 0x4AB3 | Zähler für gefahrene Kilometer mit MIL EIN | km | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4AB4 | sekundengenauer Betribsstundenzähler als 32 Bitwert | s | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4AB8 | Spannung Drucksensor Saugrohrdruck (word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABC | Luftmassenfluss gefiltert (Word) | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4ABD | Bedingung automatischer Start | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4ABE | I-Regler Mengenregelung Kraftstoffsystem | mg | - | signed integer | - | 0,0211944580078125 | 1 | 0,0 |
| 0x4ABF | Verbrauch ohne Regler | l/h | - | unsigned integer | - | 0,0038910505827516317 | 1 | 0,0 |
| 0x4AC0 | Verbrauch mit Regler | l/h | - | unsigned integer | - | 0,0038910505827516317 | 1 | 0,0 |
| 0x4AC2 | Reset Information  | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AC4 | Raildruck Kraftstoffsystem Sollwert | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x4AC6 | Modus Kraftstoffsystem (Druck-, Mengen-, oder Maximumregelung) | 0-n | - | 0xFF | ba_vcv_state_text | 1 | 1 | 0 |
| 0x4ACC | Luftklappe - Sollposition in Schritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4ACD | Luftklappe - Istposition in Schritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AD0 | Luftklappe - Diagnosestatus allgemein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD1 | Luftklappe - Diagnosestatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD2 | Luftklappe - Status obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD3 | Luftklappe - Status untere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD4 | Luftklappe - Varianteninfo vom Steller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD5 | Kraftstofftemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4AD6 | Bedingung Schubabschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AE2 | Reset Information - Reset-group-ID of the last reset reason | 0-n | - | 0xFF | Reset_GrpID | 1 | 1 | 0 |
| 0x4AE3 | Reset Information - Reset-ID of the last reset | 0-n | - | 0xFFFF | Reset_ID | 1 | 1 | 0 |
| 0x4AE4 | Reset Information - User defined value of the last reset reason | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AEB | Kühlmitteltemperatur < 98°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEC | 98°C =< Kühlmitteltemperatur =< 112°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AED | 113°C =< Kühlmitteltemperatur =< 120°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEE | 121°C =< Kühlmitteltemperatur =< 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEF | Kühlmitteltemperatur > 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF0 | Motoröltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF1 | Motoröltemperatur zwischen 80 °C und 110°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF2 | Motoröltemperatur zwischen 110°C und 135°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF3 | Motoröltemperatur zwischen 135°C und 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF4 | Motoröltemperatur größer 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF5 | Getriebeöltemperatur kleiner 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF6 | Getriebeöltemperatur zwischen 80 °C und 109°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF7 | Getriebeöltemperatur zwischen 110°C und 124°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF8 | Getriebeöltemperatur zwischen 125°C und 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF9 | Getriebeöltemperatur größer 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFA | Umgebungstemperatur kleiner 3°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFB | Umgebungstemperatur zwischen 3°C und 19°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFC | Umgebungstemperatur zwischen 20°C und 29°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFD | Umgebungstemperatur zwischen 30°C und 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFE | Umgebungstemperatur größer 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4B10 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B11 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B12 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B13 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B14 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B15 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B20 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B21 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B22 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B23 | Zähler Aussetzerkennung Zylinder 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B24 | Zähler Aussetzerkennung Zylinder 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B25 | Zähler Aussetzerkennung Zylinder 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B30 | Zähler Aussetzerkennung Zylinder 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B31 | Zähler Aussetzerkennung Zylinder 5 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B32 | Zähler Aussetzerkennung Zylinder 6 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x5802 | CARB FREEZE FRAME Byte, Bank 1, für LR | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5803 | CARB FREEZE FRAME Byte, Bank 2, für LR | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5809 | Faktor aus Lambdaregelungsadaption, Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x580B | Saugrohr-Absolutdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,25 | 1 | 0,0 |
| 0x580E | Zündwinkel Zylinder 1 | Grad KW | - | signed char | - | 0,75 | 1 | 0,0 |
| 0x580F | Ansaugluft-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5812 | Massenstrom HFM | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5813 | relative Luftfüllung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x5814 | Normierter Fahrpedalwinkel | %PED | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x5816 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5818 | Luftmassenfluß | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5819 | Motordrehzahl [1/min] | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x581A | Winkel Einlassventil oeffnet bezogen auf LWOT | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581B | Sollwinkel Nockenwelle Einlass öffnet | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581C | Winkel Auslassventil schließt bezogen auf LWOT | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581D | Sollwinkel Nockenwelle Auslass schließt | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581E | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5820 | STATUS Klemme 15 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5821 | Steuergerätetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5822 | Öltemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -60,0 |
| 0x5823 | Abstellzeit | s | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5825 | Spannung von BCU gemessen | V | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5828 | Tastverhältnis für Lambdasondenheizung, Bank 2 | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5831 | Dynamikwert der LSU, Bank 2 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5832 | Zustand Motor-Koordinator | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100,0 | 1 | 0,0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x583A | Ansaugluft-Temperatur bei Start | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x583B | Fuellstand Kraftstofftank | L | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x583D | Betriebsstundenzähler | min | - | unsigned integer | - | 6,0 | 1 | 0,0 |
| 0x583E | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | %DK | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5840 | DK-Winkel der Notluftposition | %DK | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x5841 | Temperatur Steuergerät | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Bedingung Startanforderung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5844 | Chiptemperatur Generator 1 | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x584A | aktueller Generatorstatus | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x584B | ADC-Spannung Lambdasonde hinter Katalysator Bank2 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5851 | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5854 | Batterietemperatur vom IBS | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5856 | schneller Mittelwert des Lambdaregelfaktors Bank 2(Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5859 | Pumpenstrom Referenzleck | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585A | min. Pumpenstrom bei Grobleckmessung | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585B | Pumpenstrom am Ende der Feinstleckmessung | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585C | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 512,0 | 1 | 0,0 |
| 0x585D | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT Bank2 | Ohm | - | unsigned char | - | 512,0 | 1 | 0,0 |
| 0x585E | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned integer | - | 2,0 | 1 | 0,0 |
| 0x585F | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT Bank2 | Ohm | - | unsigned integer | - | 2,0 | 1 | 0,0 |
| 0x5860 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5861 | Innenwiderstand der Nernstzelle der LSU, Bank 2 | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5862 | Sollwert Öldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5863 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5864 | Innenwiderstand der Nernstzelle der LSU, Bank 2 | Ohm | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5865 | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Relativer Füllstand des Motoröls | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information über CAN | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586E | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor Bank2 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5883 | Referenzpegel Klopfregelung, 16 bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5884 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5886 | Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| 0x5888 | Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Bank2 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x588B | Zeit nach Startende | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x588C | Keramiktemperatur der LSU | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x588D | aktuelle Zeit Leckmessung | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x588E | Pumpenstrom Tankdiagnose | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x588F | Keramiktemperatur der LSU, Bank 2 | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x5892 | Differenz zwischen Umgebungsdruck und  Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5894 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5895 | Spannung Klopfwerte Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589A | Tastverhältnis Nullgangsensor | % | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x589B | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589E | Sollwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x589F | Batterietemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A6 | Rel. Exzenterwinkel | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | Zähler für Lerndauer eines Lernsteps der Drosselklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B2 | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 5 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B3 | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B4 | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 6 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B5 | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B6 | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C0 | VVT-Endstufentemperatur aus Modell | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x58C1 | Korrigierte Segmentdauer | us | - | unsigned long | - | 0,05000000074505806 | 1 | 0,0 |
| 0x58C2 | Status STG Anforderung Radmoment Antriebsstrang Summe FAS | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C3 | Status STG Anforderung Drehmoment Kurbelwelle Fahrdynamik | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C4 | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C5 | Status STG ist Bremsmoment Summe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C6 | Status STG ist Lenkwinkel Vorderachse | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C7 | Status STG Status Stabilisierung DSC | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C8 | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58C9 | vvtmode | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CA | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58CD | Verlustmomentabweichung Überwachung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CF | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | - | signed integer | - | 0,0625 | 1 | 0,0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58D1 | Massenstrom Abgas ohne Kraftstoffanteil vor Hauptkatalysator | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58D2 | Luftklappe - Sollposition in Grad | - | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| 0x58D3 | Luftklappe - Istposition in Grad | - | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich DK-Modell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich EV-Modell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58E9 | empf. Spannung von BSS-Wasserpumpe | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | empf. Istdrehzahl von BSS-Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | empf. Temperatur von BSS-Wasserpumpe | Grad C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | empf. Strom von BSS-Wasserpumpe | % | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F2 | Tastverhältnis Mengensteuerventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58F9 | Maschinen-Typ (BSD, LIN, SGR) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Druck vor Drosselklappe | hPa | pvd_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Motor-Temperatur | Grad C | tmot | - | unsigned char | - | 0,75 | 1 | -48,0 |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Quittung  Solldrehzahl von BSS-Wasserpumpe | 1/min | wmpdzst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4307_WERT | 0x4307 | STAT_0x4307_WERT | empf. Status von BSS-Wasserpumpe | - | wmstat | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Oeltemperatur nach Filter | Grad C | toel_w | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoffverbrauch seit letztem Ölwechsel | - | ozkvbsm_ul | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | Ölkilometer | km | ozoelkm | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Sensorrohwert Ölniveau | - | oznivr | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Sensorrohwert Permittivität | - | ozpermr_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Sensorrohwert Öltemperatur | - | oztempr | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Öltemperatur ungefiltert | Grad C | oztemp_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölniveau ungefiltert in [mm] | - | ozniv | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Permitivität für den Tester | - | ozpermakt | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | ozlf1c_eep | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | ozlf2c_eep | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | ozlf1t | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | ozlf2t | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivkrzt | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | - | ozrwkvb | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Öllaufzeit | month | ozoelzeit | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4418_WERT | 0x4418 | STAT_0x4418_WERT | Status Ölzustandssensor | - | ozstatus | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SSPEI | 0x4505 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | wnwsaeb_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Einlassnockenwellenposition | Grad KW | wnwkwe_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Auslassnockenwellenposition | Grad KW | wnwkwa_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x450C_WERT | 0x450C | STAT_0x450C_WERT | Kurbelwellenadaption Einlass erfolgt | 0/1 | B_phade | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x450D_WERT | 0x450D | STAT_0x450D_WERT | Kurbelwellenadaption Auslass erfolgt | 0/1 | B_phada | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x450E_WERT | 0x450E | STAT_0x450E_WERT | Kurbelwellennullpunktverschiebung in Grad für Winkelversatzdiagnose | deg CrS | EpmCaS_phiDiffAvrgLim | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4510_WERT | 0x4510 | STAT_0x4510_WERT | VVT-Lageregler, bleibende Abweichung erkannt | 0/1 | B_dvvtregelabweichung | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4511_WERT | 0x4511 | STAT_0x4511_WERT | VVT-Lageregelung, Schwingung erkannt | 0/1 | B_dvvtschwingung | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4512_WERT | 0x4512 | STAT_0x4512_WERT | VVT überlastet | 0/1 | B_vvttempovl_wrn | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4513_WERT | 0x4513 | STAT_0x4513_WERT | VVT-Überlastung, klemmender Steller | 0/1 | B_vvttempovl | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4514_WERT | 0x4514 | STAT_0x4514_WERT | VVT-Adaption möglich | 0/1 | B_enadpvvt | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4515_WERT | 0x4515 | STAT_0x4515_WERT | Anforderung, VVT-Anschlaglernen | - | vvtlrnaf | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4516_WERT | 0x4516 | STAT_0x4516_WERT | Status VVT-Anschlaglernen | - | vvtlrnst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4517_WERT | 0x4517 | STAT_0x4517_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 0 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4518_WERT | 0x4518 | STAT_0x4518_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 1 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4519_WERT | 0x4519 | STAT_0x4519_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 2 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451A_WERT | 0x451A | STAT_0x451A_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 3 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451B_WERT | 0x451B | STAT_0x451B_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 4 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451C_WERT | 0x451C | STAT_0x451C_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 5 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451D_WERT | 0x451D | STAT_0x451D_WERT | Gesamtzeit VVT-Performancetest | - | vvtdtperf_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x451E_WERT | 0x451E | STAT_0x451E_WERT | Stromsumme VVT-Performancetest | A | ivvtsumperf_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | wdkba_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generatorstrom | - | st_i_gen | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 2 | - | bsdgencv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | momentane Batteriespannung | V | ubt | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | wub_w | - | unsigned integer | - | 0,02355000004172325 | 1 | 0,0 |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| TDSTF | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeit | % | dsoc_w | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | DF-Monitor für Batterie-Ladezustand in % | % | dfmonitor | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4613_WERT | 0x4613 | STAT_0x4613_WERT | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | ufgen | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| STAT_0x4616_WERT | 0x4616 | STAT_0x4616_WERT | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | tlrfgen | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4617_WERT | 0x4617 | STAT_0x4617_WERT | Abgenommenes Generatormoment | Nm | Isgusm_m | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4618_WERT | 0x4618 | STAT_0x4618_WERT | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_lrfoff | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4619_WERT | 0x4619 | STAT_0x4619_WERT | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | B_bsdprot2 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x461A_WERT | 0x461A | STAT_0x461A_WERT | Nominalspannung Regler Generator 1 | V | uregnom | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| STAT_0x461B_WERT | 0x461B | STAT_0x461B_WERT | Drehzahlschwelle für LoadResponse-Funktion | Upm | Tlrgenschw | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4680_WERT | 0x4680 | STAT_0x4680_WERT | Leerlaufdrehzahl gelernt | 0/1 | B_nggelernt | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4681_WERT | 0x4681 | STAT_0x4681_WERT | Bereitschaft Getriebe Neutralposition anlernen | 0/1 | B_ngimlf | - | unsigned char | - | 1 | 1 | 0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | B_sbbvk | - | unsigned char | - | 1 | 1 | 0 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Bedingung Sonde betriebsbereit vor Kat, Bank 2 | 0/1 | B_sbbvk2 | - | unsigned char | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | ua10mo_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde Bank 2 | V | ua10mo2_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambdasoll Begrenzung (word) | - | lamsbg_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambdasoll Begrenzung (word) Bank2 | - | lamsbg2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Bedingung Kupplungspedal betätigt | 0/1 | B_kuppl | - | unsigned char | - | 1 | 1 | 0 |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Schalter Kupplung | 0/1 | S_kupp | - | unsigned char | - | 1 | 1 | 0 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Bedingung umschalten auf KFPEDS | 0/1 | B_pedsport | - | unsigned char | - | 1 | 1 | 0 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Bedingung für Kompressoreinschalten | 0/1 | B_koe | - | unsigned char | - | 1 | 1 | 0 |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Schalter Klemme 50 von CAN | 0/1 | S_ckl50 | - | unsigned char | - | 1 | 1 | 0 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | nmot_w | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlaufsolldrehzahl | 1/min | nsol_w | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Bedingung Leerlaufregelung | 0/1 | B_llr | - | unsigned char | - | 1 | 1 | 0 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | normierter Fahrpedalwinkel | %PED | wped_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| STAT_0x4880_WERT | 0x4880 | STAT_0x4880_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | etkhlmx | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| STAT_0x4881_WERT | 0x4881 | STAT_0x4881_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | etkhtmx | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| STAT_0x4A02_WERT | 0x4A02 | STAT_0x4A02_WERT | ATL-Leckagediagnose läuft | 0/1 | B_atlberlek | - | unsigned char | - | 1 | 1 | 0 |
| IUDMT | 0x4A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Pumpenstrom Tankdiagnose | V | uptes_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x4A1B_WERT | 0x4A1B | STAT_0x4A1B_WERT | Elektrische Kraftstoffpumpe | 0/1 | B_ekp | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4A1D_WERT | 0x4A1D | STAT_0x4A1D_WERT | Spannung Bremsenunterdruck | V | udsbkv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | tmotlinf | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x4A2B_WERT | 0x4A2B | STAT_0x4A2B_WERT | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | Grad C | tfa1linf | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x4A2D_WERT | 0x4A2D | STAT_0x4A2D_WERT | Saugrohr-Absolutdruck gemessen | hPa | psrg_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| ILUZ1 | 0x4A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| ILUZ2 | 0x4A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| ILUZ3 | 0x4A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| ILUZ4 | 0x4A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| ILUZ5 | 0x4A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| ILUZ6 | 0x4A35 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN_WERT | Bedingung für erkannte Klopfer | 0/1 | B_kl | - | unsigned char | - | 1 | 1 | 0 |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 1 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ2 | 0x4A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 2 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ3 | 0x4A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 3 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ4 | 0x4A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 4 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ5 | 0x4A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 5 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ6 | 0x4A3C | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 6 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Ausgegebener Zündwinkel | Grad KW | zwoutzyl_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | B_sbbhk | - | unsigned char | - | 1 | 1 | 0 |
| IRNK2 | 0x4A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Bedingung Sonde betriebsbereit hinter Kat Bank2 | 0/1 | B_sbbhk2 | - | unsigned char | - | 1 | 1 | 0 |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | B_hsha | - | unsigned char | - | 1 | 1 | 0 |
| ISHN2 | 0x4A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Bedingung Sonde 2 hinter Kat ausreichend beheizt | 0/1 | B_hsha2 | - | unsigned char | - | 1 | 1 | 0 |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | B_hstlsua | - | unsigned char | - | 1 | 1 | 0 |
| ISHV2 | 0x4A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt, Bank2 | 0/1 | B_hstlsua2 | - | unsigned char | - | 1 | 1 | 0 |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bedingung Bremslichtschalter betätigt | 0/1 | B_bl | - | unsigned char | - | 1 | 1 | 0 |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bedingung Bremstestschalter betätigt | 0/1 | B_br | - | unsigned char | - | 1 | 1 | 0 |
| ISAGK | 0x4A65 | STAT_ABGASKLAPPE_EIN_WERT | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | 1 | 1 | 0 |
| ISDMP | 0x4A66 | STAT_DMTL_PUMPE_EIN_WERT | Bedingung DMTL-Pumpenmotor an | 0/1 | B_admtpm | - | unsigned char | - | 1 | 1 | 0 |
| ISDMV | 0x4A67 | STAT_DMTL_VENTIL_EIN_WERT | Bedingung DMTL-Magnetventil an | 0/1 | B_admtmv | - | unsigned char | - | 1 | 1 | 0 |
| ISDMH | 0x4A68 | STAT_DMTL_HEIZUNG_EIN_WERT | Bedingung Heizung DM-TL Portansteuerung | 0/1 | B_hdmtlp | - | unsigned char | - | 1 | 1 | 0 |
| ISMIL | 0x4A69 | STAT_MIL_EIN_WERT | MIL-Ansteuerung | 0/1 | B_mil | - | unsigned char | - | 1 | 1 | 0 |
| ISFGR | 0x4A6A | STAT_LAMPE_FGR_EIN_WERT | Lampe FGR ein | 0/1 | B_fgr | - | unsigned char | - | 1 | 1 | 0 |
| ISCEL | 0x4A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | B_epcl | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4A6C_WERT | 0x4A6C | STAT_0x4A6C_WERT | Korrekturfaktor für die Kraftstoffmenge | % | kva_korr | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| IAKFT | 0x4A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Tastverhältnis Kennfeldthermostat | - | tkwpwm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IATEV | 0x4A77 | STAT_TEV_PWM_WERT | ausgegebenes Tastverhältnis für Tankentlüftungsventil (16 Bit) | % | tateout_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IAVEP | 0x4A7A | STAT_VANOS_EINLASS_PWM_WERT | Tastverhältnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwree_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IAVAP | 0x4A7B | STAT_VANOS_AUSLASS_PWM_WERT | Tastverhältnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwraa_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | fra_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4A91_WERT | 0x4A91 | STAT_0x4A91_WERT | Amplitudenverhältnis laafh/laafv gefiltert | - | avkatf | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| STAT_0x4A92_WERT | 0x4A92 | STAT_0x4A92_WERT | Amplitudenverhältnis laafh/laafv gefiltert Bank2 | - | avkatf2 | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| STAT_0x4A93_WERT | 0x4A93 | STAT_0x4A93_WERT | Fehlerzähler für Lernen Nullgang | - | GbxNPos_ctDefPlausDia | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SANWA | 0x4A94 | STAT_NW_AUSLASS_SOLL_WERT | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | wnwsswa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | EpmCaS_phiAdapRefPosI1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4A97_WERT | 0x4A97 | STAT_0x4A97_WERT | Bedi. Vanos Einlass im Anschlag | 0/1 | B_vseansch | - | unsigned char | - | 1 | 1 | 0 |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4A9D_WERT | 0x4A9D | STAT_0x4A9D_WERT | multiplikative Gemischkorrektur der Gemischadaption | - | frai_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IDSLS | 0x4AA1 | STAT_SLS_DIAGNOSE_WERT | Zyklusflag: Tankentlüftungsventil Endstufe | - | Z_teve_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDTEV | 0x4AA2 | STAT_TEV_DIAGNOSE_WERT | Funktionsstatus-Zähler DM-TL für Testerausgabe aus letztem Fahrzyklus | - | stpdmtla | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDLSS | 0x4AA4 | STAT_LS_DIAGNOSE_WERT | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | llsstat | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AAA_WERT | 0x4AAA | STAT_0x4AAA_WERT | Tastverhältnis PWM Ansteuerung Öldruck | % | tvpoel_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AAB_WERT | 0x4AAB | STAT_0x4AAB_WERT | Tastverhältnis an Endstufe des Ladedruckstellers | % | tvldste_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAC_WERT | 0x4AAC | STAT_0x5AAC_WERT | Tastverhältnis an Endstufe des Ladedruckstellers, Bank 2 | % | tvldste2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AB0_WERT | 0x4AB0 | STAT_0x4AB0_WERT | Ladedruck- Sollwert | hPa | psolldr_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg_w | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5AB3_WERT | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Zähler für gefahrene Kilometer mit MIL EIN | km | DSMDur_ctPID21h | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | sekundengenauer Betribsstundenzähler als 32 Bitwert | s | top_l | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Drucksensor Saugrohrdruck (word) | V | udss_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IMLUF | 0x4ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert (Word) | kg/h | ml_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV_WERT | Bedingung automatischer Start | 0/1 | B_sta | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4ABE_WERT | 0x4ABE | STAT_0x4ABE_WERT | I-Regler Mengenregelung Kraftstoffsystem | mg | FUEL_MASS_REQ_I_CTL_H_RES | - | signed integer | - | 0,0211944580078125 | 1 | 0,0 |
| STAT_0x4ABF_WERT | 0x4ABF | STAT_0x4ABF_WERT | Verbrauch ohne Regler | l/h | VFF_MFF_SP_FUP_CTL | - | unsigned integer | - | 0,0038910505827516317 | 1 | 0,0 |
| STAT_0x4AC0_WERT | 0x4AC0 | STAT_0x4AC0_WERT | Verbrauch mit Regler | l/h | VFF_VCV | - | unsigned integer | - | 0,0038910505827516317 | 1 | 0,0 |
| STAT_0x4AC2_WERT | 0x4AC2 | STAT_0x4AC2_WERT | Reset Information  | - | Reset_Env.adLoc | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x4AC4_WERT | 0x4AC4 | STAT_0x4AC4_WERT | Raildruck Kraftstoffsystem Sollwert | MPa | prsoll_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x4AC6_WERT | 0x4AC6 | STAT_0x4AC6_WERT | Modus Kraftstoffsystem (Druck-, Mengen-, oder Maximumregelung) | 0-n | STATE_PWM_VCV | - | unsigned char | ba_vcv_state_text | 1 | 1 | 0 |
| STAT_0x4ACC_WERT | 0x4ACC | STAT_0x4ACC_WERT | Luftklappe - Sollposition in Schritten | - | RadSht_StpEng | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4ACD_WERT | 0x4ACD | STAT_0x4ACD_WERT | Luftklappe - Istposition in Schritten | - | ShtrEcu_StpEngPos | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4AD0_WERT | 0x4AD0 | STAT_0x4AD0_WERT | Luftklappe - Diagnosestatus allgemein | - | RadSht_stDiagGen | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AD1_WERT | 0x4AD1 | STAT_0x4AD1_WERT | Luftklappe - Diagnosestatus obere Luftklappe | - | RadSht_stDiagAKKS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AD2_WERT | 0x4AD2 | STAT_0x4AD2_WERT | Luftklappe - Status obere Luftklappe | - | RadSht_stDiagAbvAirVlv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AD3_WERT | 0x4AD3 | STAT_0x4AD3_WERT | Luftklappe - Status untere Luftklappe | - | RadSht_stDiagBntAirVlv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AD4_WERT | 0x4AD4 | STAT_0x4AD4_WERT | Luftklappe - Varianteninfo vom Steller | - | ShtrEcu_stVrs | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AD5_WERT | 0x4AD5 | STAT_0x4AD5_WERT | Kraftstofftemperatur | Grad C | tkrst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x4AD6_WERT | 0x4AD6 | STAT_0x4AD6_WERT | Bedingung Schubabschalten | 0/1 | B_sa | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4AE2_WERT | 0x4AE2 | STAT_0x4AE2_WERT | Reset Information - Reset-group-ID of the last reset reason | 0-n | Reset_Env.xGrp | - | unsigned char | Reset_GrpID | 1 | 1 | 0 |
| STAT_0x4AE3_WERT | 0x4AE3 | STAT_0x4AE3_WERT | Reset Information - Reset-ID of the last reset | 0-n | Reset_Env.xId | - | unsigned integer | Reset_ID | 1 | 1 | 0 |
| STAT_0x4AE4_WERT | 0x4AE4 | STAT_0x4AE4_WERT | Reset Information - User defined value of the last reset reason | - | Reset_Env.xUserValue | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x4AEB_WERT | 0x4AEB | STAT_0x4AEB_WERT | Kühlmitteltemperatur < 98°C | % | tmotb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AEC_WERT | 0x4AEC | STAT_0x4AEC_WERT | 98°C =< Kühlmitteltemperatur =< 112°C | % | tmotb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AED_WERT | 0x4AED | STAT_0x4AED_WERT | 113°C =< Kühlmitteltemperatur =< 120°C | % | tmotb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AEE_WERT | 0x4AEE | STAT_0x4AEE_WERT | 121°C =< Kühlmitteltemperatur =< 125°C | % | tmotb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AEF_WERT | 0x4AEF | STAT_0x4AEF_WERT | Kühlmitteltemperatur > 125°C | % | tmotb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF0_WERT | 0x4AF0 | STAT_0x4AF0_WERT | Motoröltemperatur < 80°C | % | toelb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF1_WERT | 0x4AF1 | STAT_0x4AF1_WERT | Motoröltemperatur zwischen 80 °C und 110°C | % | toelb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF2_WERT | 0x4AF2 | STAT_0x4AF2_WERT | Motoröltemperatur zwischen 110°C und 135°C | % | toelb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF3_WERT | 0x4AF3 | STAT_0x4AF3_WERT | Motoröltemperatur zwischen 135°C und 150°C | % | toelb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF4_WERT | 0x4AF4 | STAT_0x4AF4_WERT | Motoröltemperatur größer 150°C | % | toelb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF5_WERT | 0x4AF5 | STAT_0x4AF5_WERT | Getriebeöltemperatur kleiner 80°C | % | tgetb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF6_WERT | 0x4AF6 | STAT_0x4AF6_WERT | Getriebeöltemperatur zwischen 80 °C und 109°C | % | tgetb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF7_WERT | 0x4AF7 | STAT_0x4AF7_WERT | Getriebeöltemperatur zwischen 110°C und 124°C | % | tgetb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF8_WERT | 0x4AF8 | STAT_0x4AF8_WERT | Getriebeöltemperatur zwischen 125°C und 129°C | % | tgetb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AF9_WERT | 0x4AF9 | STAT_0x4AF9_WERT | Getriebeöltemperatur größer 129°C | % | tgetb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AFA_WERT | 0x4AFA | STAT_0x4AFA_WERT | Umgebungstemperatur kleiner 3°C | % | tumgb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AFB_WERT | 0x4AFB | STAT_0x4AFB_WERT | Umgebungstemperatur zwischen 3°C und 19°C | % | tumgb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AFC_WERT | 0x4AFC | STAT_0x4AFC_WERT | Umgebungstemperatur zwischen 20°C und 29°C | % | tumgb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AFD_WERT | 0x4AFD | STAT_0x4AFD_WERT | Umgebungstemperatur zwischen 30°C und 39°C | % | tumgb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AFE_WERT | 0x4AFE | STAT_0x4AFE_WERT | Umgebungstemperatur größer 39°C | % | tumgb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4B10_WERT | 0x4B10 | STAT_0x4B10_WERT | Superklopfen | - | iskn1r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B11_WERT | 0x4B11 | STAT_0x4B11_WERT | Superklopfen | - | iskn1r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B12_WERT | 0x4B12 | STAT_0x4B12_WERT | Superklopfen | - | iskn1r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B13_WERT | 0x4B13 | STAT_0x4B13_WERT | Superklopfen | - | iskn2r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B14_WERT | 0x4B14 | STAT_0x4B14_WERT | Superklopfen | - | iskn2r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B15_WERT | 0x4B15 | STAT_0x4B15_WERT | Superklopfen | - | iskn2r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B20_WERT | 0x4B20 | STAT_0x4B20_WERT | Superklopfen | - | iskn3r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B21_WERT | 0x4B21 | STAT_0x4B21_WERT | Superklopfen | - | iskn3r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B22_WERT | 0x4B22 | STAT_0x4B22_WERT | Superklopfen | - | iskn3r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B23_WERT | 0x4B23 | STAT_0x4B23_WERT | Zähler Aussetzerkennung Zylinder 1 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B24_WERT | 0x4B24 | STAT_0x4B24_WERT | Zähler Aussetzerkennung Zylinder 2 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B25_WERT | 0x4B25 | STAT_0x4B25_WERT | Zähler Aussetzerkennung Zylinder 3 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B30_WERT | 0x4B30 | STAT_0x4B30_WERT | Zähler Aussetzerkennung Zylinder 4 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B31_WERT | 0x4B31 | STAT_0x4B31_WERT | Zähler Aussetzerkennung Zylinder 5 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4B32WERT | 0x4B32 | STAT_0x4B32WERT | Zähler Aussetzerkennung Zylinder 6 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5800_WERT | 0x5800 | STAT_0x5800_WERT | Zeitzähler ab Startende (16bit) | s | tnse_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x5801_WERT | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | hPa | pu | - | unsigned char | - | 5,0 | 1 | 0,0 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | CARB FREEZE FRAME Byte, Bank 1, für LR | - | flglrs | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5803_WERT | 0x5803 | STAT_0x5803_WERT | CARB FREEZE FRAME Byte, Bank 2, für LR | - | flglrs2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ILMAR | 0x5804 | STAT_LUFTMASSE_RELATIV_WERT | relative Luftmasse (calc. load value) nach SAE J1979 | % | rml | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ITMOT | 0x5805 | STAT_MOTORTEMPERATUR_LINEAR_WERT | Motortemperatur, linearisiert und umgerechnet | Grad C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| IINT1 | 0x5806 | STAT_INTEGRATOR_BANK1_WERT | Lambda-Regler-Ausgang (Word) | - | fr_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Faktor aus Lambdaregelungsadaption für Bank 1 | - | frann_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Faktor aus Lambdaregelungsadaption, Bank 2 | - | frann2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IPSAU | 0x580B | STAT_SAUGROHRDRUCK_WERT | Saugrohr-Absolutdruck | hPa | ps_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Motordrehzahl | 1/min | nmot | - | unsigned char | - | 40,0 | 1 | 0,0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg | - | unsigned char | - | 1,25 | 1 | 0,0 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündwinkel Zylinder 1 | Grad KW | zwzyl1 | - | signed char | - | 0,75 | 1 | 0,0 |
| ITANS | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansaugluft-Temperatur | Grad C | tans | - | unsigned char | - | 0,75 | 1 | -48,0 |
| ILMKG | 0x5812 | STAT_LUFTMASSE_WERT | Massenstrom HFM | kg/h | mshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | relative Luftfüllung | % | rl | - | unsigned char | - | 0,75 | 1 | 0,0 |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Normierter Fahrpedalwinkel | %PED | wped | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| IUK87 | 0x5815 | STAT_KL87_SPANNUNG_WERT | Batteriespannung | V | ub | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| STAT_0x5816_WERT | 0x5816 | STAT_0x5816_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | lamsons_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| ITUMG | 0x5817 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | Grad C | tumg | - | unsigned char | - | 0,75 | 1 | -48,0 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmassenfluß | kg/h | ml | - | unsigned char | - | 4,0 | 1 | 0,0 |
| STAT_0x5819_WERT | 0x5819 | STAT_0x5819_WERT | Motordrehzahl [1/min] | rpm | Epm_nEng | - | signed integer | - | 0,5 | 1 | 0,0 |
| ISNWE | 0x581A | STAT_NW_EINLASSSPREIZUNG_WERT | Winkel Einlassventil oeffnet bezogen auf LWOT | Grad KW | wnwe_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x581B_WERT | 0x581B | STAT_0x581B_WERT | Sollwinkel Nockenwelle Einlass öffnet | Grad KW | wnwse_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| ISNWA | 0x581C | STAT_NW_AUSLASSSPREIZUNG_WERT | Winkel Auslassventil schließt bezogen auf LWOT | Grad KW | wnwa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x581D_WERT | 0x581D | STAT_0x581D_WERT | Sollwinkel Nockenwelle Auslass schließt | Grad KW | wnwsa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| RTANS | 0x581E | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | tanslin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | STATUS Klemme 15 | 0/1 | B_kl15 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergerätetemperatur | Grad C | tsg | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | Öltemperatur | Grad C | toel | - | unsigned char | - | 1,0 | 1 | -60,0 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Abstellzeit | s | tabst_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5825_WERT | 0x5825 | STAT_0x5825_WERT | Spannung von BCU gemessen | V | BcuEcu_u | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappenwinkel aus Poti 1 | %DK | wdk1 | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| IAHV1 | 0x5827 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Tastverhältnis für Lambdasondenheizung | % | tahrlsu_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| IAHV2 | 0x5828 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Tastverhältnis für Lambdasondenheizung, Bank 2 | % | tahrlsu2_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| IAHN1 | 0x5829 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomentaufnahme des Wandlers über CAN | % | mdwancan_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x582C_WERT | 0x582C | STAT_0x582C_WERT | Lambdasonden-Istwert | - | lamzak_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| STAT_0x582D_WERT | 0x582D | STAT_0x582D_WERT | Korrekturwert der LSU-Spannung vor KAT | V | kusvk_w | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| STAT_0x582F_WERT | 0x582F | STAT_0x582F_WERT | Abgastemperatur nach KAT aus Modell | Grad C | tkatm | - | unsigned char | - | 5,0 | 1 | -50,0 |
| STAT_0x5830_WERT | 0x5830 | STAT_0x5830_WERT | Dynamikwert der LSU | - | dynlsu_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| STAT_0x5831_WERT | 0x5831 | STAT_0x5831_WERT | Dynamikwert der LSU, Bank 2 | - | dynlsu2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Zustand Motor-Koordinator | - | CoEng_st | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck von Sensor | hPa | pur_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| VGENH | 0x5835 | STAT_GENERATOR_HERSTELLERCODE_WERT | Kennung Generator Hersteller | - | isgusmherst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | gefilterter Drehzahlgradient | 1/min/s | ngfil | - | signed char | - | 100,0 | 1 | 0,0 |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Solldruck Hochdrucksystem | MPa | prsoll_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Relatives Moment für Aussetzererkennung | % | midmd | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | B_dkpu | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansaugluft-Temperatur bei Start | Grad C | tansst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Fuellstand Kraftstofftank | L | fstt | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Batteriespannung; vom AD-Wandler erfasster Wert | V | wub | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| STAT_0x583D_WERT | 0x583D | STAT_0x583D_WERT | Betriebsstundenzähler | min | top_w | - | unsigned integer | - | 6,0 | 1 | 0,0 |
| STAT_0x583E_WERT | 0x583E | STAT_0x583E_WERT | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | %DK | wdknlpr_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| STAT_0x583F_WERT | 0x583F | STAT_0x583F_WERT | Sollwert DK-Winkel, bezogen auf unteren Anschlag | %DK | wdks | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| STAT_0x5840_WERT | 0x5840 | STAT_0x5840_WERT | DK-Winkel der Notluftposition | %DK | wdknlp_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| IUSGI | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Temperatur Steuergerät | V | wtsg | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| VGTYP | 0x5842 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp | - | isgusmmakenn | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5843_WERT | 0x5843 | STAT_0x5843_WERT | Bedingung Startanforderung | 0/1 | B_staanf | - | unsigned char | - | 1 | 1 | 0 |
| ITGEE | 0x5844 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR | Chiptemperatur Generator 1 | Grad C | isgusmtchip_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IUSV1 | 0x5845 | STAT_SONDENSPANNUNG_VORKAT_WERT | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | uulsuv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW1 | 0x5846 | STAT_PWG1_SPANNUNG_WERT | Spannung PWG-Poti 1 (Word) | V | upwg1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW2 | 0x5847 | STAT_PWG2_SPANNUNG_WERT | Spannung PWG-Poti 2 (Word) | V | upwg2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN1 | 0x5849 | STAT_SONDENSPANNUNG_NACHKAT_WERT | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | ushk_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| STAT_0x584A_WERT | 0x584A | STAT_0x584A_WERT | aktueller Generatorstatus | - | St_isgusm_status | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IUSN2 | 0x584B | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | ADC-Spannung Lambdasonde hinter Katalysator Bank2 (Word) | V | ushk2_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| IUDK2 | 0x584C | STAT_DK2_SPANNUNG_WERT | Spannung DK-Poti 2 | V | udkp2_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Massenstrom Tankentlüftung in das Saugrohr | kg/h | mste_w | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| IUDK1 | 0x584E | STAT_DK1_SPANNUNG_WERT | Spannung DK-Poti 1 | V | udkp1_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| STAT_0x584F_WERT | 0x584F | STAT_0x584F_WERT | Erkennung Bordnetzinstabilität | - | statbnserr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUKUM | 0x5850 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Signalspannung des Kühlmitteltemperatursensor | V | utcw_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IULMM | 0x5851 | STAT_LUFTMASSE_WERT | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | wtfa2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5852_WERT | 0x5852 | STAT_0x5852_WERT | Batteriestrom vom IBS | A | iibsl_w | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| STAT_0x5853_WERT | 0x5853 | STAT_0x5853_WERT | Batteriespannung von IBS | V | uibsl_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5854_WERT | 0x5854 | STAT_0x5854_WERT | Batterietemperatur vom IBS | Grad C | tibsl | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | schneller Mittelwert des Lambdaregelfaktors (Word) | - | frm_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5856_WERT | 0x5856 | STAT_0x5856_WERT | schneller Mittelwert des Lambdaregelfaktors Bank 2(Word) | - | frm2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IIEGE | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | isgusmierr_w | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| STAT_0x5858_WERT | 0x5858 | STAT_0x5858_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | wdkba | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| STAT_0x5859_WERT | 0x5859 | STAT_0x5859_WERT | Pumpenstrom Referenzleck | mA | iptrefr_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x585A_WERT | 0x585A | STAT_0x585A_WERT | min. Pumpenstrom bei Grobleckmessung | mA | iptglmn_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x585B_WERT | 0x585B | STAT_0x585B_WERT | Pumpenstrom am Ende der Feinstleckmessung | mA | iptkl_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| IRLN1 | 0x585C | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_OBERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned char | - | 512,0 | 1 | 0,0 |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_OBERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT Bank2 | Ohm | rinh2_w | - | unsigned char | - | 512,0 | 1 | 0,0 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned integer | - | 2,0 | 1 | 0,0 |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT Bank2 | Ohm | rinh2_w | - | unsigned integer | - | 2,0 | 1 | 0,0 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned char | - | 10,0 | 1 | 0,0 |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Innenwiderstand der Nernstzelle der LSU, Bank 2 | Ohm | rinlsu2_w | - | unsigned char | - | 10,0 | 1 | 0,0 |
| STAT_0x5862_WERT | 0x5862 | STAT_0x5862_WERT | Sollwert Öldruck | kPa | poels_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | Innenwiderstand der Nernstzelle der LSU, Bank 2 | Ohm | rinlsu2_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IMLOE | 0x5865 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivlangt | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IFSOE | 0x5866 | STAT_FUELLSTAND_MOTOROEL_WERT | Relativer Füllstand des Motoröls | - | oelstandr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5867_WERT | 0x5867 | STAT_0x5867_WERT | Fahrstrecke des Fahrzeugs als Information über CAN | km | kmstand | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | statsvreg1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | statsvreg2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUIBS | 0x586A | STAT_UBATT_IBS_WERT | aktuelle Batteriespannung | V | ubatt_w | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | t2hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | t3hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | t4hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| STAT_0x586F_WERT | 0x586F | STAT_0x586F_WERT | Öldruck | hPa | poel_w | - | signed integer | - | 1,0 | 1 | 0,0 |
| IUUMG | 0x5870 | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | udsu_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| VGENR | 0x5872 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion on Generator 1 | - | bsdgenregv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor Bank2 | - | lamsons2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| STAT_0x5874_WERT | 0x5874 | STAT_0x5874_WERT | ADC-Spannung Pumpenstrom Tankdiagnose | V | urptes_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| STAT_0x5875_WERT | 0x5875 | STAT_0x5875_WERT | Soll-Motormoment MSR für schnellen Eingriff | Nm | mdradmsrs_w | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5876_WERT | 0x5876 | STAT_0x5876_WERT | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | prrohr_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | dlahi_w | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x587C_WERT | 0x587C | STAT_0x587C_WERT | Periodendauer des Nullgangsensorsignals | ms | GbxNPos_tiPwmPer | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Status Nullgangsensor | - | stngang | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | taml | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motorstarttemperatur | Grad C | tmst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | Referenzpegel Klopfregelung, 16 bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | ierrfgrenz | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5886_WERT | 0x5886 | STAT_0x5886_WERT | Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IGENA | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | - | isgusmdf_w | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Bank2 | - | lamsoni2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit nach Startende | s | tnst_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur der LSU | Grad C | tkerlsu_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit Leckmessung | s | tdmlka_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom Tankdiagnose | mA | iptes_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur der LSU, Bank 2 | Grad C | tkerlsu2_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Kupplungsmotormoment Istwert | Nm | mkist_w | - | signed integer | - | 0,5 | 1 | 0,0 |
| STAT_0x5892_WERT | 0x5892 | STAT_0x5892_WERT | Differenz zwischen Umgebungsdruck und  Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | dpbkvur_w | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | migs_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | Spannung Klopfwerte Zylinder 2 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5895_WERT | 0x5895 | STAT_0x5895_WERT | Spannung Klopfwerte Zylinder 5 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Hauptkat aus Modell | Grad C | tanhkm_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | ugen | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| STAT_0x5899_WERT | 0x5899 | STAT_0x5899_WERT | Bedingung Anforderung Motorrelais einschalten | 0/1 | B_amtr | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x589A_WERT | 0x589A | STAT_0x589A_WERT | Tastverhältnis Nullgangsensor | % | tngang_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x589B_WERT | 0x589B | STAT_0x589B_WERT | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | B_ivvtkse | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x589C_WERT | 0x589C | STAT_0x589C_WERT | Bedingung Freigabe VVT-Endstufe | 0/1 | B_vvten | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x589E_WERT | 0x589E | STAT_0x589E_WERT | Sollwert Exzenterwinkel VVT | Grad | exwinks_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x589F_WERT | 0x589F | STAT_0x589F_WERT | Batterietemperatur | Grad C | tbatt | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0x58A0_WERT | Entladung während Ruhestromverletzung | Ah | qiruhe2_w | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| ISKME | 0x58A1 | STAT_KILOMETERSTAND_WERT | Wegstrecke_km auf 1km genau | - | kmstand_l | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0x58A2_WERT | Istwert Exzenterwinkel VVT | Grad | exwnki_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0x58A3_WERT | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | exwnkoar_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0x58A6_WERT | Rel. Exzenterwinkel | Grad | exwnkr_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A7_WERT | 0x58A7 | STAT_0x58A7_WERT | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | tabsmn_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Rel. Exzenterwinkel am unteren mech. Anschlag | Grad | exwnkuar_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | VVT Verstellbereich aus Urlernvorgang | Grad | exwnkvb_ur_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Verstellbereich des Exzenterwinkels | Grad | exwnkvb_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58AB_WERT | 0x58AB | STAT_0x58AB_WERT | DLR für DV-E: Summe der PID-Anteile | % | dlrspid_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Sauerstoffspeichervermögen KAT | mg | oscdktt_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58AE_WERT | 0x58AE | STAT_0x58AE_WERT | Peridendauer für Massenstrom aus HFM | us | tpmshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | EKP-Sollvolumenstrom | l | vssekp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | Zähler für Lerndauer eines Lernsteps der Drosselklappe | - | lrnstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 5 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 6 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | aktueller Bremsdruck | hPa | pbrems | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Motordrehzahl in der Funktionsüberwachung | 1/min | MoF_nEng | - | unsigned char | - | 40,0 | 1 | 0,0 |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | MoF_uAPP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x58BA_WERT | 0x58BA | STAT_0x58BA_WERT | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | rkmeeff_w | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| STAT_0x58BB_WERT | 0x58BB | STAT_0x58BB_WERT | Strom für VVT-Motor | A | ivvtm_w | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | relative Luftfüllung in der Funktionsüberwachung | % | rl_um | - | unsigned char | - | 0,75 | 1 | 0,0 |
| STAT_0x58BD_WERT | 0x58BD | STAT_0x58BD_WERT | Status Fehler Überlast VVT1 | - | stdvovrld | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58BE_WERT | 0x58BE | STAT_0x58BE_WERT | DV-E-Adaption: Status Prüfbedingungen | - | dveadchst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | VVT-Endstufentemperatur aus Modell | Grad C | tvvtes_w | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Korrigierte Segmentdauer | us | tsk_l | - | unsigned long | - | 0,05000000074505806 | 1 | 0,0 |
| STAT_0x58C2_WERT | 0x58C2 | STAT_0x58C2_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe FAS | - | Com_stTrqWhlDemFASQl_FX | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C3_WERT | 0x58C3 | STAT_0x58C3_WERT | Status STG Anforderung Drehmoment Kurbelwelle Fahrdynamik | - | Com_stDrvDyn_FX | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C4_WERT | 0x58C4 | STAT_0x58C4_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | Com_stEcuRqTrqSumStab_FX | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C5_WERT | 0x58C5 | STAT_0x58C5_WERT | Status STG ist Bremsmoment Summe | - | Com_stEcuBrkTrqSum_FX | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C6_WERT | 0x58C6 | STAT_0x58C6_WERT | Status STG ist Lenkwinkel Vorderachse | - | Com_stEcuAvlSteaFtax_FX | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C7_WERT | 0x58C7 | STAT_0x58C7_WERT | Status STG Status Stabilisierung DSC | - | Com_stECUStStabDSC_FX | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | dmllri_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x58C9_WERT | 0x58C9 | STAT_0x58C9_WERT | vvtmode | - | vvtmode | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | dmllrz_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | - | dvvttempovl | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | % | tvvvtm_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x58CD_WERT | 0x58CD | STAT_0x58CD_WERT | Verlustmomentabweichung Überwachung | V | umtr | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58CE_WERT | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | funst_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | MoF_trqClthTra16 | - | signed integer | - | 0,0625 | 1 | 0,0 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Berechnetes Ist-Moment in der Funktionsüberwachung | % | MoF_rTrqInrAct | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58D0_WERT | 0x58D1 | STAT_0x58D0_WERT | Massenstrom Abgas ohne Kraftstoffanteil vor Hauptkatalysator | kg/h | msaovhk_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58D2_WERT | 0x58D2 | STAT_0x58D2_WERT | Luftklappe - Sollposition in Grad | - | RadSht_phiPosDes | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0x58D3_WERT | Luftklappe - Istposition in Grad | - | RadSht_phiPos | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Startbedingung Kraftschluss erfüllt | 0/1 | B_kupp1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0x58D5_WERT | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | tfa1lin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| IUANS | 0x58D7 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0x58D8_WERT | Differenz-DK-Winkel Sollwert - Istwert | %DK | dwdkdlr_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Schrittzähler DK-Rückstellfeder-Prüfung | - | fprstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | koordiniertes Moment für Füllung | % | milsol_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x58DB_WERT | 0x58DB | STAT_0x58DB_WERT | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | fzabgs_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58DC_WERT | 0x58DC | STAT_0x58DC_WERT | Intervallzähler für abgasrelevante Aussetzer | - | ivzabg_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58DD_WERT | 0x58DD | STAT_0x58DD_WERT | Druck vor Drosselklappe Rohwert | hPa | pvdr_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| STAT_0x58DE_WERT | 0x58DE | STAT_0x58DE_WERT | Spannung Drucksensor vor Drosselklappe | V | udsvd_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0x58E0_WERT | Abgleich DK-Modell (Faktor) | - | eisydkfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0x58E1_WERT | Abgleich DK-Modell (Offset) | kg/h | eisydkkoff | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0x58E2_WERT | Abgleich EV-Modell (Faktor) | - | eisyevfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0x58E3_WERT | Abgleich EV-Modell (Offset) | kg/h | eisyevkoff | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | empf. Spannung von BSS-Wasserpumpe | V | wmu | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| INWAP | 0x58EA | STAT_WASSERPUMPE_DREHZAHL_WERT | empf. Istdrehzahl von BSS-Wasserpumpe | 1/min | wmpdzi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITWAE | 0x58EC | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | empf. Temperatur von BSS-Wasserpumpe | Grad C | wmt | - | unsigned char | - | 1,0 | 1 | -50,0 |
| IIWAP | 0x58ED | STAT_WASSERPUMPE_STROM_WERT | empf. Strom von BSS-Wasserpumpe | % | wmi | - | unsigned char | - | 0,5 | 1 | 0,0 |
| STAT_0x58EF_WERT | 0x58EF | STAT_0x58EF_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0x58F0_WERT | ungefilterter Raildruck Istwert (abs.) | MPa | prroh_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x58F2_WERT | 0x58F2 | STAT_0x58F2_WERT | Tastverhältnis Mengensteuerventil | % | PWM_VCV | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0x58F3_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0x58F4_WERT | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | upnd1ms_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0x58F5_WERT | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | uvvtdia3V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0x58F6_WERT | Sollspannung des VVT Lagereglers | V | uvvtlrs_w | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0x58F7_WERT | VVT-Strom | - | vvtipl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58F8_WERT | 0x58F8 | STAT_0x58F8_WERT | Zeitdauer anliegende Erregerstrombegrenzung | min | Isgusm_ierrgrenzz | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58F9_WERT | 0x58F9 | STAT_0x58F9_WERT | Maschinen-Typ (BSD, LIN, SGR) | - | isgusmtyp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | gefilterter Faktor Tankentlüftungs-Adaption | - | fteadf | - | signed char | - | 0,5 | 1 | 0,0 |
| STAT_0x58FC_WERT | 0x58FC | STAT_0x58FC_WERT | Fertigungs-Werkstatt-,Transportmodus | - | fetrawemod | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58FD_WERT | 0x58FD | STAT_0x58FD_WERT | Untermodi des Fe Tra Fla Mode | - | fetraflamod | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### RESET_GRPID

| WERT | UWTEXT |
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
| 0x0A | SWRESET_GRP_DUMMY_03 |
| 0x0B | RESET_EEP_GRP_E |
| 0x0C | RESET_SWRESET_EPM_E |
| 0x0D | RESET_SWRESET_ESC_E |
| 0x0E | RESET_EXECON_GRP_E |
| 0x0F | RESET_SWRESET_ASW_01 |
| 0x10 | SWRESET_GRP_MO_PREICO |
| 0x11 | RESET_SWRESET_MOC |
| 0x12 | RESET_SWRESET_SOP |
| 0x13 | RESET_SWRESET_MOFICO |
| 0x14 | SWRESET_OCWDA |
| 0x15 | RESET_SWRESET_OS_01 |
| 0x16 | SWRESET_PCP_GRP_E |
| 0x17 | RESET_HWEMONGRP_E |
| 0x18 | RESET_ERRINTRGRP_E |
| 0x19 | SWRESET_SYCGRP_E |
| 0x1A | RESET_SWRESET_TPROT |
| 0x1B | SWRESET_UNSUPPORTED_CPU_E |
| 0x1C | RESET_ADCI_E |
| 0x1D | SWRESET_R2S2_INI_GRP_E |
| 0x1E | RESET_DMA_E |
| 0x1F | RESET_FLASH_E |
| 0xFF | undefiniert |

### RESET_ID

| WERT | UWTEXT |
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
| 0x3000 | SWRST_EEPBANDGAP_E |
| 0x3001 | SWRST_EEPNODEBUGGER_E |
| 0x3002 | SWRST_EEPDELENVRAM_E |
| 0x3003 | SWRST_WRITE_ERRORS_SECTORCHANGE_E |
| 0x3004 | SWRST_EEPACTFIRSTINIT_E |
| 0x3005 | RESET_SWRESET_EPMHCRS_WAIT_PCP_RESET_E |
| 0x3006 | RESET_SWRESET_ESC_SCHED_RESET_E |
| 0x3007 | SWRST_EXECON_FAULTYSTATE_E |
| 0x3008 | RESET_SWRESET_ILLEGAL_OPCODE |
| 0x3009 | RESET_SWRESET_ILLEGAL_RETURN_TO_MAIN |
| 0x300A | SWRESET_MOCADCNTP_PREICO |
| 0x300B | SWRESET_MOCADCTST_PREICO |
| 0x300C | RESET_SWRESET_ILLEGAL_SW_PATH |
| 0x300D | RESET_SWRESET_MOCCOM_SPI_ERROR |
| 0x300E | RESET_SWRESET_MOCCOM_CTSOPTST |
| 0x300F | RESET_SWRESET_MOCCOM_SOPTST |
| 0x3010 | RESET_SWRESET_MOCCOM_CPLCHK_FAILED |
| 0x3011 | RESET_SWRESET_MOCCOM_OS_TIMEOUT_ERROR |
| 0x3012 | RESET_SWRESET_MOCGPTA |
| 0x3013 | RESET_SWRESET_MOCMEM_CPL |
| 0x3014 | RESET_SWRESET_MOCMEM_RAM |
| 0x3015 | RESET_SWRESET_MOCMEM_ROM |
| 0x3016 | RESET_SWRESET_MOCPCP |
| 0x3017 | RESET_SWRESET_MOCRAM_WRI |
| 0x3018 | RESET_SWRESET_MOCRAM_CPL |
| 0x3019 | RESET_SWRESET_MOCRAM_RAMTAB |
| 0x301A | RESET_SWRESET_MOCRAM_RSTPTRRAM |
| 0x301B | RESET_SWRESET_MOCRAM_STACKRAM |
| 0x301C | RESET_SWRESET_MOCRAM_CSARAM |
| 0x301D | RESET_SWRESET_MOCRAM_XRAM |
| 0x301E | RESET_SWRESET_MOCRAM_IRAM |
| 0x301F | RESET_SWRESET_MOCRAM_EXRAM |
| 0x3020 | RESET_SWRESET_MOCRAM_PROTRAM |
| 0x3021 | RESET_SWRESET_MOCRAM_EEPCPL |
| 0x3022 | RESET_SWRESET_MOCRAM_REPEXOK |
| 0x3023 | RESET_SWRESET_MOCROM |
| 0x3024 | RESET_SWRESET_MOCROM_CPL |
| 0x3025 | RESET_SWRESET_MOCROM_INDEX |
| 0x3026 | RESET_SWRESET_MOCROM_WD |
| 0x3027 | RESET_SWRESET_SOPTEST_FAILED |
| 0x3028 | RESET_SWRESET_CPLCHK_FAILED |
| 0x3029 | RESET_SWRESET_MOCSOP_MSC_ERROR |
| 0x302A | RESET_SWRESET_MOCSOP_SPI_ERROR |
| 0x302B | RESET_SWRESET_MOCSOP_OS_TIMEOUT_ERROR |
| 0x302C | RESET_SWRESET_MOCSOP_TIRESPTIME_ERROR |
| 0x302D | SWRESET_MOFAIR_ADJ_PREICO |
| 0x302E | SWRESET_MOFAPP_PREICO |
| 0x302F | SWRESET_MOFESPD_PREICO |
| 0x3030 | SWRESET_MOFGKC_PREICO |
| 0x3031 | SWRESET_MOFRLC_PREICO |
| 0x3032 | RESET_SWRESET_MOFICO_CHK_SYEGAS_FAILED |
| 0x3033 | SWRESET_MOFMODC_PREICO |
| 0x3034 | SWRESET_MOFRKTI_PREICO |
| 0x3035 | SWRESET_MOFTRQCMP_PREICO |
| 0x3036 | SWRESET_MOFTRQRAT_PREICO |
| 0x3037 | SWRESET_MOFTX_PREICO |
| 0x3038 | SWRESET_MOFVAR_PREICO |
| 0x3039 | SWRESET_MOFZWC_PREICO |
| 0x303A | SWRESET_OCWDA_WDA_ACTV |
| 0x303B | SWRESET_OCWDA_WDA_MONITOR |
| 0x303C | SWRESET_OCWDA_LOW_VLTG |
| 0x303D | SWRESET_OCWDA_OVR_VLTG |
| 0x303E | RESET_SWRESET_INTERRUPTLOCK_EXPECTED |
| 0x303F | RESET_USERSTACKOVERFLOW_DETECTED |
| 0x3040 | SWRESET_PCP_ERROR_E |
| 0x3041 | SWRST_HWEMONDEFAULT_E |
| 0x3042 | RESET_ERRINTR_E |
| 0x3043 | SWRESET_CALWAKEUP_E |
| 0x3044 | SWRESET_DEADLINE1MS_E |
| 0x3045 | SWRESET_DEADLINE10MS_E |
| 0x3046 | SWRESET_DEADLINEBG_E |
| 0x3047 | SWRESET_NMIDISABLED_E |
| 0x3048 | SWRESET_POSTDRIVE_E |
| 0x3049 | SWRESET_SOFTRESET_WAKEUP_E |
| 0x304A | SWRESET_SOFTRESET_SHUTDOWN_E |
| 0x304B | SWRESET_T15RSTSHUTDOWN_E |
| 0x304C | SWRESET_UNDERVOLTAGE_E |
| 0x304D | SWRESET_T15_PRE_E |
| 0x304E | RESET_SWRESET_SWOVER_DONE |
| 0x304F | SWRESET_CORE_ENV_E |
| 0x3050 | SWRST_ADCI_ERROR_E |
| 0x3051 | SWRST_R2S2_INI_ERROR_E |
| 0x3052 | RESET_DMA_ERROR_E |
| 0x3053 | SWRST_FLASHCONFIG_E |
| 0xFFFF | undefiniert |

### BA_VCV_STATE_TEXT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VCV_TEST |
| 0x01 | START |
| 0x02 | MFP_CTL |
| 0x03 | VCV_CLOSE |
| 0x04 | VCV_CRASH |
| 0x05 | MFP_MAX |
| 0x06 | VCV_LIH |
| 0xFF | undefiniert |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Druck vor Drosselklappe | hPa | pvd_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 | - | 22;2C | - | - |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Motor-Temperatur | Grad C | tmot | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Quittung  Solldrehzahl von BSS-Wasserpumpe | 1/min | wmpdzst | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4307_WERT | 0x4307 | STAT_0x4307_WERT | empf. Status von BSS-Wasserpumpe | - | wmstat | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Oeltemperatur nach Filter | Grad C | toel_w | - | unsigned integer | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoffverbrauch seit letztem Ölwechsel | - | ozkvbsm_ul | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | Ölkilometer | km | ozoelkm | - | unsigned integer | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Sensorrohwert Ölniveau | - | oznivr | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Sensorrohwert Permittivität | - | ozpermr_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Sensorrohwert Öltemperatur | - | oztempr | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Öltemperatur ungefiltert | Grad C | oztemp_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölniveau ungefiltert in [mm] | - | ozniv | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Permitivität für den Tester | - | ozpermakt | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | ozlf1c_eep | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | ozlf2c_eep | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | ozlf1t | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | ozlf2t | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivkrzt | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | - | ozrwkvb | - | signed integer | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Öllaufzeit | month | ozoelzeit | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4418_WERT | 0x4418 | STAT_0x4418_WERT | Status Ölzustandssensor | - | ozstatus | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SSPEI | 0x4505 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | wnwsaeb_w | - | signed integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Einlassnockenwellenposition | Grad KW | wnwkwe_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Auslassnockenwellenposition | Grad KW | wnwkwa_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x450C_WERT | 0x450C | STAT_0x450C_WERT | Kurbelwellenadaption Einlass erfolgt | 0/1 | B_phade | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x450D_WERT | 0x450D | STAT_0x450D_WERT | Kurbelwellenadaption Auslass erfolgt | 0/1 | B_phada | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x450E_WERT | 0x450E | STAT_0x450E_WERT | Kurbelwellennullpunktverschiebung in Grad für Winkelversatzdiagnose | deg CrS | EpmCaS_phiDiffAvrgLim | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4510_WERT | 0x4510 | STAT_0x4510_WERT | VVT-Lageregler, bleibende Abweichung erkannt | 0/1 | B_dvvtregelabweichung | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4511_WERT | 0x4511 | STAT_0x4511_WERT | VVT-Lageregelung, Schwingung erkannt | 0/1 | B_dvvtschwingung | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4512_WERT | 0x4512 | STAT_0x4512_WERT | VVT überlastet | 0/1 | B_vvttempovl_wrn | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4513_WERT | 0x4513 | STAT_0x4513_WERT | VVT-Überlastung, klemmender Steller | 0/1 | B_vvttempovl | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4514_WERT | 0x4514 | STAT_0x4514_WERT | VVT-Adaption möglich | 0/1 | B_enadpvvt | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4515_WERT | 0x4515 | STAT_0x4515_WERT | Anforderung, VVT-Anschlaglernen | - | vvtlrnaf | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4516_WERT | 0x4516 | STAT_0x4516_WERT | Status VVT-Anschlaglernen | - | vvtlrnst | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4517_WERT | 0x4517 | STAT_0x4517_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 0 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4518_WERT | 0x4518 | STAT_0x4518_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 1 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4519_WERT | 0x4519 | STAT_0x4519_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 2 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x451A_WERT | 0x451A | STAT_0x451A_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 3 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x451B_WERT | 0x451B | STAT_0x451B_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 4 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x451C_WERT | 0x451C | STAT_0x451C_WERT | Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 5 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x451D_WERT | 0x451D | STAT_0x451D_WERT | Gesamtzeit VVT-Performancetest | - | vvtdtperf_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x451E_WERT | 0x451E | STAT_0x451E_WERT | Stromsumme VVT-Performancetest | A | ivvtsumperf_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | wdkba_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 | - | 22;2C | - | - |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generatorstrom | - | st_i_gen | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 2 | - | bsdgencv | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUBAT | 0x460A | STAT_UBATT_WERT | momentane Batteriespannung | V | ubt | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 | - | 22;2C | - | - |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | wub_w | - | unsigned integer | - | 0,02355000004172325 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 | - | 22;2C | - | - |
| TDSTF | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeit | % | dsoc_w | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 | - | 22;2C | - | - |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | DF-Monitor für Batterie-Ladezustand in % | % | dfmonitor | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4613_WERT | 0x4613 | STAT_0x4613_WERT | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | ufgen | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 | - | 22;2C | - | - |
| STAT_0x4616_WERT | 0x4616 | STAT_0x4616_WERT | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | tlrfgen | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4617_WERT | 0x4617 | STAT_0x4617_WERT | Abgenommenes Generatormoment | Nm | Isgusm_m | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4618_WERT | 0x4618 | STAT_0x4618_WERT | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_lrfoff | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4619_WERT | 0x4619 | STAT_0x4619_WERT | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | B_bsdprot2 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x461A_WERT | 0x461A | STAT_0x461A_WERT | Nominalspannung Regler Generator 1 | V | uregnom | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 | - | 22;2C | - | - |
| STAT_0x461B_WERT | 0x461B | STAT_0x461B_WERT | Drehzahlschwelle für LoadResponse-Funktion | Upm | Tlrgenschw | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4680_WERT | 0x4680 | STAT_0x4680_WERT | Leerlaufdrehzahl gelernt | 0/1 | B_nggelernt | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4681_WERT | 0x4681 | STAT_0x4681_WERT | Bereitschaft Getriebe Neutralposition anlernen | 0/1 | B_ngimlf | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | B_sbbvk | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Bedingung Sonde betriebsbereit vor Kat, Bank 2 | 0/1 | B_sbbvk2 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | ua10mo_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde Bank 2 | V | ua10mo2_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 | - | 22;2C | - | - |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambdasoll Begrenzung (word) | - | lamsbg_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambdasoll Begrenzung (word) Bank2 | - | lamsbg2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Bedingung Kupplungspedal betätigt | 0/1 | B_kuppl | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Schalter Kupplung | 0/1 | S_kupp | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Bedingung umschalten auf KFPEDS | 0/1 | B_pedsport | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Bedingung für Kompressoreinschalten | 0/1 | B_koe | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Schalter Klemme 50 von CAN | 0/1 | S_ckl50 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | nmot_w | - | unsigned integer | - | 0,25 | 1 | 0,0 | - | 22;2C | - | - |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlaufsolldrehzahl | 1/min | nsol_w | - | unsigned integer | - | 0,25 | 1 | 0,0 | - | 22;2C | - | - |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Bedingung Leerlaufregelung | 0/1 | B_llr | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | normierter Fahrpedalwinkel | %PED | wped_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4880_WERT | 0x4880 | STAT_0x4880_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | etkhlmx | - | unsigned char | - | 0,78125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4881_WERT | 0x4881 | STAT_0x4881_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | etkhtmx | - | unsigned char | - | 0,78125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A02_WERT | 0x4A02 | STAT_0x4A02_WERT | ATL-Leckagediagnose läuft | 0/1 | B_atlberlek | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IUDMT | 0x4A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Pumpenstrom Tankdiagnose | V | uptes_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A1B_WERT | 0x4A1B | STAT_0x4A1B_WERT | Elektrische Kraftstoffpumpe | 0/1 | B_ekp | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A1D_WERT | 0x4A1D | STAT_0x4A1D_WERT | Spannung Bremsenunterdruck | V | udsbkv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | tmotlinf | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x4A2B_WERT | 0x4A2B | STAT_0x4A2B_WERT | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | Grad C | tfa1linf | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x4A2D_WERT | 0x4A2D | STAT_0x4A2D_WERT | Saugrohr-Absolutdruck gemessen | hPa | psrg_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ1 | 0x4A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ2 | 0x4A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ3 | 0x4A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ4 | 0x4A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ5 | 0x4A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ6 | 0x4A35 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,0063159349374473095 | 1 | 0,0 | - | 22;2C | - | - |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN_WERT | Bedingung für erkannte Klopfer | 0/1 | B_kl | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 1 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ2 | 0x4A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 2 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ3 | 0x4A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 3 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ4 | 0x4A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 4 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ5 | 0x4A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 5 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ6 | 0x4A3C | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 6 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Ausgegebener Zündwinkel | Grad KW | zwoutzyl_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | B_sbbhk | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IRNK2 | 0x4A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Bedingung Sonde betriebsbereit hinter Kat Bank2 | 0/1 | B_sbbhk2 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | B_hsha | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHN2 | 0x4A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Bedingung Sonde 2 hinter Kat ausreichend beheizt | 0/1 | B_hsha2 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | B_hstlsua | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHV2 | 0x4A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt, Bank2 | 0/1 | B_hstlsua2 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bedingung Bremslichtschalter betätigt | 0/1 | B_bl | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bedingung Bremstestschalter betätigt | 0/1 | B_br | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISAGK | 0x4A65 | STAT_ABGASKLAPPE_EIN_WERT | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDMP | 0x4A66 | STAT_DMTL_PUMPE_EIN_WERT | Bedingung DMTL-Pumpenmotor an | 0/1 | B_admtpm | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDMV | 0x4A67 | STAT_DMTL_VENTIL_EIN_WERT | Bedingung DMTL-Magnetventil an | 0/1 | B_admtmv | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDMH | 0x4A68 | STAT_DMTL_HEIZUNG_EIN_WERT | Bedingung Heizung DM-TL Portansteuerung | 0/1 | B_hdmtlp | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISMIL | 0x4A69 | STAT_MIL_EIN_WERT | MIL-Ansteuerung | 0/1 | B_mil | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISFGR | 0x4A6A | STAT_LAMPE_FGR_EIN_WERT | Lampe FGR ein | 0/1 | B_fgr | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISCEL | 0x4A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | B_epcl | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A6C_WERT | 0x4A6C | STAT_0x4A6C_WERT | Korrekturfaktor für die Kraftstoffmenge | % | kva_korr | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IAKFT | 0x4A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Tastverhältnis Kennfeldthermostat | - | tkwpwm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IATEV | 0x4A77 | STAT_TEV_PWM_WERT | ausgegebenes Tastverhältnis für Tankentlüftungsventil (16 Bit) | % | tateout_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IAVEP | 0x4A7A | STAT_VANOS_EINLASS_PWM_WERT | Tastverhältnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwree_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IAVAP | 0x4A7B | STAT_VANOS_AUSLASS_PWM_WERT | Tastverhältnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwraa_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | fra_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A91_WERT | 0x4A91 | STAT_0x4A91_WERT | Amplitudenverhältnis laafh/laafv gefiltert | - | avkatf | - | unsigned char | - | 0,00390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A92_WERT | 0x4A92 | STAT_0x4A92_WERT | Amplitudenverhältnis laafh/laafv gefiltert Bank2 | - | avkatf2 | - | unsigned char | - | 0,00390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A93_WERT | 0x4A93 | STAT_0x4A93_WERT | Fehlerzähler für Lernen Nullgang | - | GbxNPos_ctDefPlausDia | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SANWA | 0x4A94 | STAT_NW_AUSLASS_SOLL_WERT | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | wnwsswa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | EpmCaS_phiAdapRefPosI1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A97_WERT | 0x4A97 | STAT_0x4A97_WERT | Bedi. Vanos Einlass im Anschlag | 0/1 | B_vseansch | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A9D_WERT | 0x4A9D | STAT_0x4A9D_WERT | multiplikative Gemischkorrektur der Gemischadaption | - | frai_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IDSLS | 0x4AA1 | STAT_SLS_DIAGNOSE_WERT | Zyklusflag: Tankentlüftungsventil Endstufe | - | Z_teve_byte | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IDTEV | 0x4AA2 | STAT_TEV_DIAGNOSE_WERT | Funktionsstatus-Zähler DM-TL für Testerausgabe aus letztem Fahrzyklus | - | stpdmtla | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IDLSS | 0x4AA4 | STAT_LS_DIAGNOSE_WERT | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | llsstat | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AAA_WERT | 0x4AAA | STAT_0x4AAA_WERT | Tastverhältnis PWM Ansteuerung Öldruck | % | tvpoel_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AAB_WERT | 0x4AAB | STAT_0x4AAB_WERT | Tastverhältnis an Endstufe des Ladedruckstellers | % | tvldste_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5AAC_WERT | 0x4AAC | STAT_0x5AAC_WERT | Tastverhältnis an Endstufe des Ladedruckstellers, Bank 2 | % | tvldste2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AB0_WERT | 0x4AB0 | STAT_0x4AB0_WERT | Ladedruck- Sollwert | hPa | psolldr_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg_w | - | unsigned integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5AB3_WERT | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Zähler für gefahrene Kilometer mit MIL EIN | km | DSMDur_ctPID21h | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | sekundengenauer Betribsstundenzähler als 32 Bitwert | s | top_l | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Drucksensor Saugrohrdruck (word) | V | udss_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IMLUF | 0x4ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert (Word) | kg/h | ml_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV_WERT | Bedingung automatischer Start | 0/1 | B_sta | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4ABE_WERT | 0x4ABE | STAT_0x4ABE_WERT | I-Regler Mengenregelung Kraftstoffsystem | mg | FUEL_MASS_REQ_I_CTL_H_RES | - | signed integer | - | 0,0211944580078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ABF_WERT | 0x4ABF | STAT_0x4ABF_WERT | Verbrauch ohne Regler | l/h | VFF_MFF_SP_FUP_CTL | - | unsigned integer | - | 0,0038910505827516317 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC0_WERT | 0x4AC0 | STAT_0x4AC0_WERT | Verbrauch mit Regler | l/h | VFF_VCV | - | unsigned integer | - | 0,0038910505827516317 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC2_WERT | 0x4AC2 | STAT_0x4AC2_WERT | Reset Information  | - | Reset_Env.adLoc | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC4_WERT | 0x4AC4 | STAT_0x4AC4_WERT | Raildruck Kraftstoffsystem Sollwert | MPa | prsoll_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC6_WERT | 0x4AC6 | STAT_0x4AC6_WERT | Modus Kraftstoffsystem (Druck-, Mengen-, oder Maximumregelung) | 0-n | STATE_PWM_VCV | - | unsigned char | ba_vcv_state_text | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4ACC_WERT | 0x4ACC | STAT_0x4ACC_WERT | Luftklappe - Sollposition in Schritten | - | RadSht_StpEng | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ACD_WERT | 0x4ACD | STAT_0x4ACD_WERT | Luftklappe - Istposition in Schritten | - | ShtrEcu_StpEngPos | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD0_WERT | 0x4AD0 | STAT_0x4AD0_WERT | Luftklappe - Diagnosestatus allgemein | - | RadSht_stDiagGen | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD1_WERT | 0x4AD1 | STAT_0x4AD1_WERT | Luftklappe - Diagnosestatus obere Luftklappe | - | RadSht_stDiagAKKS | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD2_WERT | 0x4AD2 | STAT_0x4AD2_WERT | Luftklappe - Status obere Luftklappe | - | RadSht_stDiagAbvAirVlv | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD3_WERT | 0x4AD3 | STAT_0x4AD3_WERT | Luftklappe - Status untere Luftklappe | - | RadSht_stDiagBntAirVlv | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD4_WERT | 0x4AD4 | STAT_0x4AD4_WERT | Luftklappe - Varianteninfo vom Steller | - | ShtrEcu_stVrs | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD5_WERT | 0x4AD5 | STAT_0x4AD5_WERT | Kraftstofftemperatur | Grad C | tkrst | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x4AD6_WERT | 0x4AD6 | STAT_0x4AD6_WERT | Bedingung Schubabschalten | 0/1 | B_sa | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AE2_WERT | 0x4AE2 | STAT_0x4AE2_WERT | Reset Information - Reset-group-ID of the last reset reason | 0-n | Reset_Env.xGrp | - | unsigned char | Reset_GrpID | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AE3_WERT | 0x4AE3 | STAT_0x4AE3_WERT | Reset Information - Reset-ID of the last reset | 0-n | Reset_Env.xId | - | unsigned integer | Reset_ID | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AE4_WERT | 0x4AE4 | STAT_0x4AE4_WERT | Reset Information - User defined value of the last reset reason | - | Reset_Env.xUserValue | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEB_WERT | 0x4AEB | STAT_0x4AEB_WERT | Kühlmitteltemperatur < 98°C | % | tmotb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEC_WERT | 0x4AEC | STAT_0x4AEC_WERT | 98°C =< Kühlmitteltemperatur =< 112°C | % | tmotb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AED_WERT | 0x4AED | STAT_0x4AED_WERT | 113°C =< Kühlmitteltemperatur =< 120°C | % | tmotb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEE_WERT | 0x4AEE | STAT_0x4AEE_WERT | 121°C =< Kühlmitteltemperatur =< 125°C | % | tmotb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEF_WERT | 0x4AEF | STAT_0x4AEF_WERT | Kühlmitteltemperatur > 125°C | % | tmotb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF0_WERT | 0x4AF0 | STAT_0x4AF0_WERT | Motoröltemperatur < 80°C | % | toelb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF1_WERT | 0x4AF1 | STAT_0x4AF1_WERT | Motoröltemperatur zwischen 80 °C und 110°C | % | toelb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF2_WERT | 0x4AF2 | STAT_0x4AF2_WERT | Motoröltemperatur zwischen 110°C und 135°C | % | toelb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF3_WERT | 0x4AF3 | STAT_0x4AF3_WERT | Motoröltemperatur zwischen 135°C und 150°C | % | toelb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF4_WERT | 0x4AF4 | STAT_0x4AF4_WERT | Motoröltemperatur größer 150°C | % | toelb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF5_WERT | 0x4AF5 | STAT_0x4AF5_WERT | Getriebeöltemperatur kleiner 80°C | % | tgetb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF6_WERT | 0x4AF6 | STAT_0x4AF6_WERT | Getriebeöltemperatur zwischen 80 °C und 109°C | % | tgetb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF7_WERT | 0x4AF7 | STAT_0x4AF7_WERT | Getriebeöltemperatur zwischen 110°C und 124°C | % | tgetb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF8_WERT | 0x4AF8 | STAT_0x4AF8_WERT | Getriebeöltemperatur zwischen 125°C und 129°C | % | tgetb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF9_WERT | 0x4AF9 | STAT_0x4AF9_WERT | Getriebeöltemperatur größer 129°C | % | tgetb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFA_WERT | 0x4AFA | STAT_0x4AFA_WERT | Umgebungstemperatur kleiner 3°C | % | tumgb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFB_WERT | 0x4AFB | STAT_0x4AFB_WERT | Umgebungstemperatur zwischen 3°C und 19°C | % | tumgb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFC_WERT | 0x4AFC | STAT_0x4AFC_WERT | Umgebungstemperatur zwischen 20°C und 29°C | % | tumgb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFD_WERT | 0x4AFD | STAT_0x4AFD_WERT | Umgebungstemperatur zwischen 30°C und 39°C | % | tumgb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFE_WERT | 0x4AFE | STAT_0x4AFE_WERT | Umgebungstemperatur größer 39°C | % | tumgb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B10_WERT | 0x4B10 | STAT_0x4B10_WERT | Superklopfen | - | iskn1r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B11_WERT | 0x4B11 | STAT_0x4B11_WERT | Superklopfen | - | iskn1r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B12_WERT | 0x4B12 | STAT_0x4B12_WERT | Superklopfen | - | iskn1r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B13_WERT | 0x4B13 | STAT_0x4B13_WERT | Superklopfen | - | iskn2r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B14_WERT | 0x4B14 | STAT_0x4B14_WERT | Superklopfen | - | iskn2r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B15_WERT | 0x4B15 | STAT_0x4B15_WERT | Superklopfen | - | iskn2r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B20_WERT | 0x4B20 | STAT_0x4B20_WERT | Superklopfen | - | iskn3r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B21_WERT | 0x4B21 | STAT_0x4B21_WERT | Superklopfen | - | iskn3r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B22_WERT | 0x4B22 | STAT_0x4B22_WERT | Superklopfen | - | iskn3r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B23_WERT | 0x4B23 | STAT_0x4B23_WERT | Zähler Aussetzerkennung Zylinder 1 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B24_WERT | 0x4B24 | STAT_0x4B24_WERT | Zähler Aussetzerkennung Zylinder 2 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B25_WERT | 0x4B25 | STAT_0x4B25_WERT | Zähler Aussetzerkennung Zylinder 3 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B30_WERT | 0x4B30 | STAT_0x4B30_WERT | Zähler Aussetzerkennung Zylinder 4 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B31_WERT | 0x4B31 | STAT_0x4B31_WERT | Zähler Aussetzerkennung Zylinder 5 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4B32WERT | 0x4B32 | STAT_0x4B32WERT | Zähler Aussetzerkennung Zylinder 6 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5800_WERT | 0x5800 | STAT_0x5800_WERT | Zeitzähler ab Startende (16bit) | s | tnse_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5801_WERT | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | hPa | pu | - | unsigned char | - | 5,0 | 1 | 0,0 | - | 22;2C | - | - |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | CARB FREEZE FRAME Byte, Bank 1, für LR | - | flglrs | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5803_WERT | 0x5803 | STAT_0x5803_WERT | CARB FREEZE FRAME Byte, Bank 2, für LR | - | flglrs2 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILMAR | 0x5804 | STAT_LUFTMASSE_RELATIV_WERT | relative Luftmasse (calc. load value) nach SAE J1979 | % | rml | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| ITMOT | 0x5805 | STAT_MOTORTEMPERATUR_LINEAR_WERT | Motortemperatur, linearisiert und umgerechnet | Grad C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| IINT1 | 0x5806 | STAT_INTEGRATOR_BANK1_WERT | Lambda-Regler-Ausgang (Word) | - | fr_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Faktor aus Lambdaregelungsadaption für Bank 1 | - | frann_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Faktor aus Lambdaregelungsadaption, Bank 2 | - | frann2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IPSAU | 0x580B | STAT_SAUGROHRDRUCK_WERT | Saugrohr-Absolutdruck | hPa | ps_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Motordrehzahl | 1/min | nmot | - | unsigned char | - | 40,0 | 1 | 0,0 | - | 22;2C | - | - |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg | - | unsigned char | - | 1,25 | 1 | 0,0 | - | 22;2C | - | - |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündwinkel Zylinder 1 | Grad KW | zwzyl1 | - | signed char | - | 0,75 | 1 | 0,0 | - | 22;2C | - | - |
| ITANS | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansaugluft-Temperatur | Grad C | tans | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| ILMKG | 0x5812 | STAT_LUFTMASSE_WERT | Massenstrom HFM | kg/h | mshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | relative Luftfüllung | % | rl | - | unsigned char | - | 0,75 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Normierter Fahrpedalwinkel | %PED | wped | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 | - | 22;2C | - | - |
| IUK87 | 0x5815 | STAT_KL87_SPANNUNG_WERT | Batteriespannung | V | ub | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5816_WERT | 0x5816 | STAT_0x5816_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | lamsons_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ITUMG | 0x5817 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | Grad C | tumg | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmassenfluß | kg/h | ml | - | unsigned char | - | 4,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5819_WERT | 0x5819 | STAT_0x5819_WERT | Motordrehzahl [1/min] | rpm | Epm_nEng | - | signed integer | - | 0,5 | 1 | 0,0 | - | 22;2C | - | - |
| ISNWE | 0x581A | STAT_NW_EINLASSSPREIZUNG_WERT | Winkel Einlassventil oeffnet bezogen auf LWOT | Grad KW | wnwe_w | - | signed integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x581B_WERT | 0x581B | STAT_0x581B_WERT | Sollwinkel Nockenwelle Einlass öffnet | Grad KW | wnwse_w | - | signed integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| ISNWA | 0x581C | STAT_NW_AUSLASSSPREIZUNG_WERT | Winkel Auslassventil schließt bezogen auf LWOT | Grad KW | wnwa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x581D_WERT | 0x581D | STAT_0x581D_WERT | Sollwinkel Nockenwelle Auslass schließt | Grad KW | wnwsa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| RTANS | 0x581E | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | tanslin | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | STATUS Klemme 15 | 0/1 | B_kl15 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergerätetemperatur | Grad C | tsg | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | Öltemperatur | Grad C | toel | - | unsigned char | - | 1,0 | 1 | -60,0 | - | 22;2C | - | - |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Abstellzeit | s | tabst_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5825_WERT | 0x5825 | STAT_0x5825_WERT | Spannung von BCU gemessen | V | BcuEcu_u | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappenwinkel aus Poti 1 | %DK | wdk1 | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 | - | 22;2C | - | - |
| IAHV1 | 0x5827 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Tastverhältnis für Lambdasondenheizung | % | tahrlsu_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| IAHV2 | 0x5828 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Tastverhältnis für Lambdasondenheizung, Bank 2 | % | tahrlsu2_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| IAHN1 | 0x5829 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomentaufnahme des Wandlers über CAN | % | mdwancan_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582C_WERT | 0x582C | STAT_0x582C_WERT | Lambdasonden-Istwert | - | lamzak_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582D_WERT | 0x582D | STAT_0x582D_WERT | Korrekturwert der LSU-Spannung vor KAT | V | kusvk_w | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582F_WERT | 0x582F | STAT_0x582F_WERT | Abgastemperatur nach KAT aus Modell | Grad C | tkatm | - | unsigned char | - | 5,0 | 1 | -50,0 | - | 22;2C | - | - |
| STAT_0x5830_WERT | 0x5830 | STAT_0x5830_WERT | Dynamikwert der LSU | - | dynlsu_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5831_WERT | 0x5831 | STAT_0x5831_WERT | Dynamikwert der LSU, Bank 2 | - | dynlsu2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Zustand Motor-Koordinator | - | CoEng_st | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck von Sensor | hPa | pur_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| VGENH | 0x5835 | STAT_GENERATOR_HERSTELLERCODE_WERT | Kennung Generator Hersteller | - | isgusmherst | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | gefilterter Drehzahlgradient | 1/min/s | ngfil | - | signed char | - | 100,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Solldruck Hochdrucksystem | MPa | prsoll_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Relatives Moment für Aussetzererkennung | % | midmd | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | B_dkpu | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansaugluft-Temperatur bei Start | Grad C | tansst | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Fuellstand Kraftstofftank | L | fstt | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Batteriespannung; vom AD-Wandler erfasster Wert | V | wub | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583D_WERT | 0x583D | STAT_0x583D_WERT | Betriebsstundenzähler | min | top_w | - | unsigned integer | - | 6,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583E_WERT | 0x583E | STAT_0x583E_WERT | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | %DK | wdknlpr_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583F_WERT | 0x583F | STAT_0x583F_WERT | Sollwert DK-Winkel, bezogen auf unteren Anschlag | %DK | wdks | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5840_WERT | 0x5840 | STAT_0x5840_WERT | DK-Winkel der Notluftposition | %DK | wdknlp_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 | - | 22;2C | - | - |
| IUSGI | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Temperatur Steuergerät | V | wtsg | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| VGTYP | 0x5842 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp | - | isgusmmakenn | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5843_WERT | 0x5843 | STAT_0x5843_WERT | Bedingung Startanforderung | 0/1 | B_staanf | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ITGEE | 0x5844 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR | Chiptemperatur Generator 1 | Grad C | isgusmtchip_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IUSV1 | 0x5845 | STAT_SONDENSPANNUNG_VORKAT_WERT | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | uulsuv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUPW1 | 0x5846 | STAT_PWG1_SPANNUNG_WERT | Spannung PWG-Poti 1 (Word) | V | upwg1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUPW2 | 0x5847 | STAT_PWG2_SPANNUNG_WERT | Spannung PWG-Poti 2 (Word) | V | upwg2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSN1 | 0x5849 | STAT_SONDENSPANNUNG_NACHKAT_WERT | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | ushk_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 | - | 22;2C | - | - |
| STAT_0x584A_WERT | 0x584A | STAT_0x584A_WERT | aktueller Generatorstatus | - | St_isgusm_status | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUSN2 | 0x584B | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | ADC-Spannung Lambdasonde hinter Katalysator Bank2 (Word) | V | ushk2_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 | - | 22;2C | - | - |
| IUDK2 | 0x584C | STAT_DK2_SPANNUNG_WERT | Spannung DK-Poti 2 | V | udkp2_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 | - | 22;2C | - | - |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Massenstrom Tankentlüftung in das Saugrohr | kg/h | mste_w | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IUDK1 | 0x584E | STAT_DK1_SPANNUNG_WERT | Spannung DK-Poti 1 | V | udkp1_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x584F_WERT | 0x584F | STAT_0x584F_WERT | Erkennung Bordnetzinstabilität | - | statbnserr | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUKUM | 0x5850 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Signalspannung des Kühlmitteltemperatursensor | V | utcw_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IULMM | 0x5851 | STAT_LUFTMASSE_WERT | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | wtfa2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5852_WERT | 0x5852 | STAT_0x5852_WERT | Batteriestrom vom IBS | A | iibsl_w | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 | - | 22;2C | - | - |
| STAT_0x5853_WERT | 0x5853 | STAT_0x5853_WERT | Batteriespannung von IBS | V | uibsl_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5854_WERT | 0x5854 | STAT_0x5854_WERT | Batterietemperatur vom IBS | Grad C | tibsl | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | schneller Mittelwert des Lambdaregelfaktors (Word) | - | frm_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5856_WERT | 0x5856 | STAT_0x5856_WERT | schneller Mittelwert des Lambdaregelfaktors Bank 2(Word) | - | frm2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IIEGE | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | isgusmierr_w | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5858_WERT | 0x5858 | STAT_0x5858_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | wdkba | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5859_WERT | 0x5859 | STAT_0x5859_WERT | Pumpenstrom Referenzleck | mA | iptrefr_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x585A_WERT | 0x585A | STAT_0x585A_WERT | min. Pumpenstrom bei Grobleckmessung | mA | iptglmn_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x585B_WERT | 0x585B | STAT_0x585B_WERT | Pumpenstrom am Ende der Feinstleckmessung | mA | iptkl_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 | - | 22;2C | - | - |
| IRLN1 | 0x585C | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_OBERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned char | - | 512,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_OBERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT Bank2 | Ohm | rinh2_w | - | unsigned char | - | 512,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT Bank2 | Ohm | rinh2_w | - | unsigned integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned char | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Innenwiderstand der Nernstzelle der LSU, Bank 2 | Ohm | rinlsu2_w | - | unsigned char | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5862_WERT | 0x5862 | STAT_0x5862_WERT | Sollwert Öldruck | kPa | poels_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | Innenwiderstand der Nernstzelle der LSU, Bank 2 | Ohm | rinlsu2_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| IMLOE | 0x5865 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivlangt | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| IFSOE | 0x5866 | STAT_FUELLSTAND_MOTOROEL_WERT | Relativer Füllstand des Motoröls | - | oelstandr | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5867_WERT | 0x5867 | STAT_0x5867_WERT | Fahrstrecke des Fahrzeugs als Information über CAN | km | kmstand | - | unsigned integer | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | statsvreg1 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | statsvreg2 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUIBS | 0x586A | STAT_UBATT_IBS_WERT | aktuelle Batteriespannung | V | ubatt_w | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 | - | 22;2C | - | - |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | t2hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 | - | 22;2C | - | - |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | t3hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 | - | 22;2C | - | - |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | t4hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x586F_WERT | 0x586F | STAT_0x586F_WERT | Öldruck | hPa | poel_w | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUUMG | 0x5870 | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | udsu_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| VGENR | 0x5872 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion on Generator 1 | - | bsdgenregv | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor Bank2 | - | lamsons2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5874_WERT | 0x5874 | STAT_0x5874_WERT | ADC-Spannung Pumpenstrom Tankdiagnose | V | urptes_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5875_WERT | 0x5875 | STAT_0x5875_WERT | Soll-Motormoment MSR für schnellen Eingriff | Nm | mdradmsrs_w | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5876_WERT | 0x5876 | STAT_0x5876_WERT | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | prrohr_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | dlahi_w | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x587C_WERT | 0x587C | STAT_0x587C_WERT | Periodendauer des Nullgangsensorsignals | ms | GbxNPos_tiPwmPer | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Status Nullgangsensor | - | stngang | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | taml | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motorstarttemperatur | Grad C | tmst | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | Referenzpegel Klopfregelung, 16 bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | ierrfgrenz | - | unsigned char | - | 0,125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5886_WERT | 0x5886 | STAT_0x5886_WERT | Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IGENA | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | - | isgusmdf_w | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Bank2 | - | lamsoni2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit nach Startende | s | tnst_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur der LSU | Grad C | tkerlsu_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 | - | 22;2C | - | - |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit Leckmessung | s | tdmlka_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom Tankdiagnose | mA | iptes_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 | - | 22;2C | - | - |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur der LSU, Bank 2 | Grad C | tkerlsu2_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 | - | 22;2C | - | - |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Kupplungsmotormoment Istwert | Nm | mkist_w | - | signed integer | - | 0,5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5892_WERT | 0x5892 | STAT_0x5892_WERT | Differenz zwischen Umgebungsdruck und  Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | dpbkvur_w | - | signed integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | migs_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | Spannung Klopfwerte Zylinder 2 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5895_WERT | 0x5895 | STAT_0x5895_WERT | Spannung Klopfwerte Zylinder 5 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Hauptkat aus Modell | Grad C | tanhkm_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 | - | 22;2C | - | - |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | ugen | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 | - | 22;2C | - | - |
| STAT_0x5899_WERT | 0x5899 | STAT_0x5899_WERT | Bedingung Anforderung Motorrelais einschalten | 0/1 | B_amtr | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x589A_WERT | 0x589A | STAT_0x589A_WERT | Tastverhältnis Nullgangsensor | % | tngang_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x589B_WERT | 0x589B | STAT_0x589B_WERT | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | B_ivvtkse | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x589C_WERT | 0x589C | STAT_0x589C_WERT | Bedingung Freigabe VVT-Endstufe | 0/1 | B_vvten | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x589E_WERT | 0x589E | STAT_0x589E_WERT | Sollwert Exzenterwinkel VVT | Grad | exwinks_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x589F_WERT | 0x589F | STAT_0x589F_WERT | Batterietemperatur | Grad C | tbatt | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0x58A0_WERT | Entladung während Ruhestromverletzung | Ah | qiruhe2_w | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 | - | 22;2C | - | - |
| ISKME | 0x58A1 | STAT_KILOMETERSTAND_WERT | Wegstrecke_km auf 1km genau | - | kmstand_l | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0x58A2_WERT | Istwert Exzenterwinkel VVT | Grad | exwnki_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0x58A3_WERT | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | exwnkoar_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0x58A6_WERT | Rel. Exzenterwinkel | Grad | exwnkr_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A7_WERT | 0x58A7 | STAT_0x58A7_WERT | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | tabsmn_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Rel. Exzenterwinkel am unteren mech. Anschlag | Grad | exwnkuar_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | VVT Verstellbereich aus Urlernvorgang | Grad | exwnkvb_ur_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Verstellbereich des Exzenterwinkels | Grad | exwnkvb_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58AB_WERT | 0x58AB | STAT_0x58AB_WERT | DLR für DV-E: Summe der PID-Anteile | % | dlrspid_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Sauerstoffspeichervermögen KAT | mg | oscdktt_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58AE_WERT | 0x58AE | STAT_0x58AE_WERT | Peridendauer für Massenstrom aus HFM | us | tpmshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | EKP-Sollvolumenstrom | l | vssekp | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | Zähler für Lerndauer eines Lernsteps der Drosselklappe | - | lrnstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 5 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 6 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | aktueller Bremsdruck | hPa | pbrems | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Motordrehzahl in der Funktionsüberwachung | 1/min | MoF_nEng | - | unsigned char | - | 40,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | MoF_uAPP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BA_WERT | 0x58BA | STAT_0x58BA_WERT | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | rkmeeff_w | - | unsigned integer | - | 0,046875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BB_WERT | 0x58BB | STAT_0x58BB_WERT | Strom für VVT-Motor | A | ivvtm_w | - | signed integer | - | 0,006103515625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | relative Luftfüllung in der Funktionsüberwachung | % | rl_um | - | unsigned char | - | 0,75 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BD_WERT | 0x58BD | STAT_0x58BD_WERT | Status Fehler Überlast VVT1 | - | stdvovrld | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BE_WERT | 0x58BE | STAT_0x58BE_WERT | DV-E-Adaption: Status Prüfbedingungen | - | dveadchst | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | VVT-Endstufentemperatur aus Modell | Grad C | tvvtes_w | - | unsigned integer | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Korrigierte Segmentdauer | us | tsk_l | - | unsigned long | - | 0,05000000074505806 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C2_WERT | 0x58C2 | STAT_0x58C2_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe FAS | - | Com_stTrqWhlDemFASQl_FX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C3_WERT | 0x58C3 | STAT_0x58C3_WERT | Status STG Anforderung Drehmoment Kurbelwelle Fahrdynamik | - | Com_stDrvDyn_FX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C4_WERT | 0x58C4 | STAT_0x58C4_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | Com_stEcuRqTrqSumStab_FX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C5_WERT | 0x58C5 | STAT_0x58C5_WERT | Status STG ist Bremsmoment Summe | - | Com_stEcuBrkTrqSum_FX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C6_WERT | 0x58C6 | STAT_0x58C6_WERT | Status STG ist Lenkwinkel Vorderachse | - | Com_stEcuAvlSteaFtax_FX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C7_WERT | 0x58C7 | STAT_0x58C7_WERT | Status STG Status Stabilisierung DSC | - | Com_stECUStStabDSC_FX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | dmllri_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C9_WERT | 0x58C9 | STAT_0x58C9_WERT | vvtmode | - | vvtmode | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | dmllrz_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | - | dvvttempovl | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | % | tvvvtm_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CD_WERT | 0x58CD | STAT_0x58CD_WERT | Verlustmomentabweichung Überwachung | V | umtr | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CE_WERT | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | funst_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | MoF_trqClthTra16 | - | signed integer | - | 0,0625 | 1 | 0,0 | - | 22;2C | - | - |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Berechnetes Ist-Moment in der Funktionsüberwachung | % | MoF_rTrqInrAct | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D0_WERT | 0x58D1 | STAT_0x58D0_WERT | Massenstrom Abgas ohne Kraftstoffanteil vor Hauptkatalysator | kg/h | msaovhk_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D2_WERT | 0x58D2 | STAT_0x58D2_WERT | Luftklappe - Sollposition in Grad | - | RadSht_phiPosDes | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0x58D3_WERT | Luftklappe - Istposition in Grad | - | RadSht_phiPos | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Startbedingung Kraftschluss erfüllt | 0/1 | B_kupp1 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0x58D5_WERT | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | tfa1lin | - | unsigned char | - | 0,75 | 1 | -48,0 | - | 22;2C | - | - |
| IUANS | 0x58D7 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0x58D8_WERT | Differenz-DK-Winkel Sollwert - Istwert | %DK | dwdkdlr_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Schrittzähler DK-Rückstellfeder-Prüfung | - | fprstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | koordiniertes Moment für Füllung | % | milsol_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58DB_WERT | 0x58DB | STAT_0x58DB_WERT | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | fzabgs_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58DC_WERT | 0x58DC | STAT_0x58DC_WERT | Intervallzähler für abgasrelevante Aussetzer | - | ivzabg_w | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58DD_WERT | 0x58DD | STAT_0x58DD_WERT | Druck vor Drosselklappe Rohwert | hPa | pvdr_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58DE_WERT | 0x58DE | STAT_0x58DE_WERT | Spannung Drucksensor vor Drosselklappe | V | udsvd_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0x58E0_WERT | Abgleich DK-Modell (Faktor) | - | eisydkfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0x58E1_WERT | Abgleich DK-Modell (Offset) | kg/h | eisydkkoff | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0x58E2_WERT | Abgleich EV-Modell (Faktor) | - | eisyevfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0x58E3_WERT | Abgleich EV-Modell (Offset) | kg/h | eisyevkoff | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | empf. Spannung von BSS-Wasserpumpe | V | wmu | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| INWAP | 0x58EA | STAT_WASSERPUMPE_DREHZAHL_WERT | empf. Istdrehzahl von BSS-Wasserpumpe | 1/min | wmpdzi | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITWAE | 0x58EC | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | empf. Temperatur von BSS-Wasserpumpe | Grad C | wmt | - | unsigned char | - | 1,0 | 1 | -50,0 | - | 22;2C | - | - |
| IIWAP | 0x58ED | STAT_WASSERPUMPE_STROM_WERT | empf. Strom von BSS-Wasserpumpe | % | wmi | - | unsigned char | - | 0,5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58EF_WERT | 0x58EF | STAT_0x58EF_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0x58F0_WERT | ungefilterter Raildruck Istwert (abs.) | MPa | prroh_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F2_WERT | 0x58F2 | STAT_0x58F2_WERT | Tastverhältnis Mengensteuerventil | % | PWM_VCV | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0x58F3_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0x58F4_WERT | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | upnd1ms_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0x58F5_WERT | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | uvvtdia3V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0x58F6_WERT | Sollspannung des VVT Lagereglers | V | uvvtlrs_w | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0x58F7_WERT | VVT-Strom | - | vvtipl | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F8_WERT | 0x58F8 | STAT_0x58F8_WERT | Zeitdauer anliegende Erregerstrombegrenzung | min | Isgusm_ierrgrenzz | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F9_WERT | 0x58F9 | STAT_0x58F9_WERT | Maschinen-Typ (BSD, LIN, SGR) | - | isgusmtyp | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | gefilterter Faktor Tankentlüftungs-Adaption | - | fteadf | - | signed char | - | 0,5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58FC_WERT | 0x58FC | STAT_0x58FC_WERT | Fertigungs-Werkstatt-,Transportmodus | - | fetrawemod | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58FD_WERT | 0x58FD | STAT_0x58FD_WERT | Untermodi des Fe Tra Fla Mode | - | fetraflamod | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |

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

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 2 aktiv |

### T_1BYTE_MSA_KUP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kupplung nicht oder zu weniger als 10% betaetigt |
| 1 | Kupplung zu mindestens 10% betaetigt |
| 2 | Kupplungssensorsignal unplausibel |
| 3 | Kupplung zu mindestens 90% betaetigt |

### T_ST_ATLSVC_PVDK_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Ladedruckdiagnose ohne Ergebnis |
| 1 | Ladedruck fehlerfrei |
| 2 | Gesamtladedruck zu niedrig |
| 3 | Turbolader 1 mit Ladedruckfehler |
| 4 | Turbolader 2 mit Ladedruckfehler |
| 5 | Gesamtladedruck zu niedrig, Bank nicht identifiziert |

### T_B_BZDON_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine BZE3 |
| 1 | BZE3 |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### T_1BIT_STATE_READY_OBD_2_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_GENIUTEST_ERR_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### T_1BIT_STATE_READY_OBD_1_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_SWITCH_POSITION_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### T_1BIT_GENIUTEST_ERR_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorregler plausibel |
| 1 | Generatortest, Generatorregler unplausibel |

### T_1BIT_STATE_READY_OBD_1_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_GENIUTEST_ERR_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_1BIT_C_STATE_READY_OBD_2_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_BZD_BTZUST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie pruefen |
| 2 | Batterie nicht i.O. |
| 3 | ungueltig |

### T_B_BZD_WRGBAT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Wasserverbrauch i.O. |
| 1 | Wasserverbrauch n.i.O. |

### T_STATE_DMTL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | START |
| 1 | Referenzleck Messung |
| 2 | Grobleck Messung |
| 3 | Feinleck Messung |
| 4 | Zweite Referenzleck Messung |
| 6 | Diagnose beendet |
| 10 | Funktion nicht Startbar |
| 11 | Batteriespannung ausserhalb Bereich |
| 12 | Schwankung von Referenzstrom zu groß |
| 13 | Elektrischer Fehler vorhanden |
| 14 | Max. Diagnosezeit erreicht/ueberschritten |
| 15 | Kein Freigabe TEV Aktiv |
| 20 | Funktion wurde Abgebrochen |
| 23 | Spannungsschwankung zu groß |
| 24 | Zündung an |
| 30 | Funktion beendet: Tank Dicht |
| 31 | Funktion beendet: Feinleck erkannt |
| 32 | Funktion beendet: Grobleck erkannt |
| 33 | Funktion beendet: Modulfehler |
| 34 | Funktion beendet: Kein Grobleck erkannt |
| 255 | Funktion noch nicht gestartet |

### T_1BIT_C_STATE_READY_OBD_2_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_2_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_1BIT_SWITCH_POSITION_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

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

### T_1BIT_SWITCH_POSITION_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 2 nicht geschlossen |
| 1 | Regelkreis Bank 2 geschlossen |

### T_1BIT_C_STATE_READY_OBD_2_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_B_VVTNOTL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich erforderlich |
| 1 | Drosselklappen-Neuabgleich nicht erforderlich |

### T_1BIT_GENIUTEST_ERR_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### T_1BIT_GENIUTEST_ERR_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### T_1BIT_STATE_READY_OBD_2_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_GENIUTEST_ERR_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_1BIT_GENIUTEST_ERR_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### T_EOL_RAM_1__DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Startbedingungen nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | Undefinierter Zustand |
| 5 | Funktionstest laeuft |
| 6 | Funktion ergebnislos beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion durchlaufen und kein Fehler erkannt |
| 9 | Funktion durchlaufen und Fehler erkannt |

### T_1BIT_SWITCH_POSITION_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_B_QVCH2O_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Wasserverbrauch i.O. |
| 1 | Wasserverbrauch nicht i.O. |

### T_1BIT_STATE_READY_OBD_2_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_C_STATE_READY_OBD_2_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_B_BZD_TE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie tiefentladen |

### T_1BIT_SWITCH_POSITION_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Motor laeuft |
| 1 | Motor steht |

### T_1BIT_STATE_READY_OBD_2_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_C_STATE_READY_OBD_2_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_2_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_ST_GENTEST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |

### T_1BIT_C_STATE_READY_OBD_2_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_B_STANDARD_1BYTE_LESEN_0_1

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 2 | Groesser 1 |

### T_1BIT_C_STATE_READY_OBD_2_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

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

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_1BIT_STATE_READY_OBD_1_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_GENIUTEST_AB_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 2 aktiv |

### T_1BIT_SWITCH_POSITION_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### T_S_VSMNHB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 128 | 1 |

### T_1BIT_GENIUTEST_ERR_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### T_1BYTE_FS_ERWEITERT_VVTL_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Unterer Anschlag nicht gelernt |
| 2 | Oberer Anschlag nicht gelernt |
| 4 | Fuehrungssensor-Lernwert war ausserhalb des Fensters |
| 8 | Referenzsensor-Lernwert war ausserhalb des Fensters |
| 16 | Timeout beim Lernvorgang |
| 32 | Spannung ausserhalb des zulaessigen Bereichs |
| 64 | Anschlaglern-Abbruch wegen Sensorfehler, Leistungsversorgungsfehler oder Stellgliedfehler |
| 128 | Anschlaglern-Abbruch durch Ruecknahme der Anforderung |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### T_1BIT_STATE_READY_OBD_2_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 1 aktiv |
