# dme_bx81.prg

## General

|  |  |
| --- | --- |
| File | dme_bx81.prg |
| Type | PRG |
| Jobs | 136 |
| Tables | 298 |
| Origin | BMW EA-740 Lorch |
| Revision | 3.000 |
| Author | P+Z EA-740 Berger, P+Z EA-740 Hadersdorfer |
| ECU Comment | SGBD für MEVD1723 C-Muster und Programmstand Bx8 I-411 PSTs 14A9_122_xxx_xxx |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorsteuerung Bosch MEVD.17.2.3 und BaukastenMotoren B38 B48 und B58 Bordnetz 2020 |  |  |
| ORIGIN | string | BMW EA-740 Lorch |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | P+Z EA-740 Berger, P+Z EA-740 Hadersdorfer |  |  |
| COMMENT | string | SGBD für MEVD1723 C-Muster und Programmstand Bx8 I-411 PSTs 14A9_122_xxx_xxx |  |  |
| PACKAGE | string | 1.36 |  |  |
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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 es können 40 Messwerte in einem Block zusammengefasst werden

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### _SWE_LESEN

0x31010205 SWE_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SWE_EINHEIT | string | auszulesender SWE Satz Eingabe von 0 bis 4 |

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n (4095) |

### ABGLEICHWERTE_SCHREIBEN

0x2E5F90 ABGLEICHWERTE_SCHREIBEN Abgleichwerte Injektoren programmieren für CASCADE mit Übernahme Daten aus COD-Datei Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### ABGLEICHWERTE_LESEN

0x225F90 ABGLEICHWERTE_LESEN Abgleichwerte Injektoren auslesen für CASCADE für Vergleich mit Daten aus COD-Datei Aktivierung: Klemme 15 = EIN

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### STATUS_IGRINFO_AEP

0x224016 STATUS_IGRINFO_AEP Infospeicher Intelligente Generator Regelung (IGR) auslesen

_No arguments._

### STATUS_LEMINFO_AEP

0x224017 STATUS_LEMINFO_AEP Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

_No arguments._

### STATUS_MSAINFO_AEP

0x224018 _STATUS_MSAINFO_AEP Infospeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_1

0x224022 STATUS_SYSTEMCHECK_AEP_INFO_1 Intelligenter Batteriesensor Bitfeld Pminfo1 lesen

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_2

0x224023 STATUS_SYSTEMCHECK_AEP_INFO_2 Intelligenter Batteriesensor Bitfeld Pminfo2 lesen

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

$2E 5F F5 04 Loeschen von pminfo1 index 23-30

_No arguments._

### STATUS_DFDSPROFLE

Generatorauslastungsprofil auslesen DFDSPROFLE (0x22 4081)

_No arguments._

### STATUS_VERBREDINFO

0x22401D STATUS_VERBREDINFO Verbraucherreduzierungsspeicher auslesen

_No arguments._

### STATUS_BZETOMSA

0x224155 STATUS_BZETOMSA Analyse von MSA-Abschaltverhinderern durch BZE3 gegenüber AEPBZE SDG(A2l-NAME=bzetomsa)

_No arguments._

### STATUS_DFDSN

0x224156 STATUS_DFDSN Diagnose der Generatorauslastung über FASTA

_No arguments._

### STATUS_MSAINFO2

Auslesen Infospeicher Batteriezustandserkennung 2 UDS*: 0x224092 ReadDataByIdentifier

_No arguments._

### STATUS_BZETOMSA2

0x224093 STATUS_BZETOMSA2 Analyse von MSA-Abschaltverhinderern durch BZE3 gegenüber AEPBZE SDG(A2l-NAME=bzetomsa)

_No arguments._

### IDENT_IBS

0x224021 IDENT_IBS Identifikationsdaten fuer IBS-Sensor auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_AEPDFMONITOR

0x224015 STATUS_AEPDFMONITOR FASTA-Messwertblock 10 lesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE_IBS

0x22402B STATUS_MESSWERTE_IBS Messwerte IBS auslesen

_No arguments._

### START_SYSTEMCHECK_IGR_AUS

0x3101F0F7 START_SYSTEMCHECK_IGR_AUS Ansteuerung Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

0x3103F0F7 STATUS_SYSTEMCHECK_IGR_AUS Auslesen Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

0x3102F0F7 STOP_SYSTEMCHECK_IGR_AUS Ende Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_RUHESTROMMESSUNG

Ansteuern Ruhestrompruefung mit IBS UDS  : $31 RoutineControl UDS  : $01 startRoutine UDS  : $F02B Ruhestrompruefung

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Eco_max_i   Einheit: A   Min: 0 Max: 1.275 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Eco_msb   Einheit: s   Min: 0 Max: 12.75 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Eco_mz   Einheit: s   Min: 0 Max: 12.75 |
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: min   Min: 0 Max: 255 |

### STATUS_RUHESTROMMESSUNG

Auslesen Ruhestromprüfung mit IBS UDS  : $31 RoutineControl UDS  : $03 requestRoutineResults UDS  : $F02B Ruhestrompruefung

_No arguments._

### STEUERN_IBS_STROMMESSUNG

Ansteuern IBS Strommessung UDS: $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| SCHWELLE_WERT | real | Bereich: 0 - 1310.7 A (A2L_Name: Eco_i_schwelle) |
| HOLDOFF_WERT | real | Bereich: 0 - 2.55 s (A2L_Name: Eco_i_holdoff) |
| MESSZEIT_WERT | real | Bereich: 0 - 0.51 s (A2L_Name: Eco_i_messzeit) |
| TIMEOUT_WERT | real | Bereich: 0 - 25.5 s (A2L_Name: Eco_i_timeout) |

### STATUS_IBS_STROMMESSUNG

Auslesen IBS Strommessung UDS: $31 RoutineControl

_No arguments._

### STATUS_BZEDIAG

0x22403B STATUS_BZEDIAG BZE Infospeicher

_No arguments._

### STATUS_BZEDIAG2

Auslesen Infospeicher Batteriezustandserkennung 2 UDS*: $22 ReadDataByIdentifier

_No arguments._

### STATUS_VERBRAUCHERSTROM_EFII

Auslesen Verbraucherstrommessung EFII UDS  : $31   RoutineControl UDS  : $03   routineControlType UDS  : $7002 routineIdentifier

_No arguments._

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

UDS $31 01 F030 Batterietausch registrieren

_No arguments._

### STEUERN_ENDE_VERBRAUCHERSTROM_EFII

Ansteuerung Verbraucherstrommessung EFII (IBS) beenden UDS  : $31   RoutineControl UDS  : $02   routineControlType UDS  : $7002 routineIdentifier

_No arguments._

### STEUERN_VERBRAUCHERSTROM_EFII

Ansteuerung Verbraucherstrommessung EFII (IBS) UDS  : $31   RoutineControl UDS  : $01   routineControlType UDS  : $7002 routineIdentifier

| Name | Type | Description |
| --- | --- | --- |
| STARTTRIGGERWERT | long | Ecos2 Start Trigger Wert [mA] |
| AUSSCHALTTRIGGER | long | Ecos2 Ende Trigger Wert [mA] |
| TOTZEIT | int | Ecos2 Strommessung holdoff Zeit [ms] |
| MESSZEIT | int | Ecos2 Messzeit [ms] |
| UNTERE_TOLERANZ | long | Ecos2 untere Stromschwelle [mA] |
| OBERE_TOLERANZ | long | Ecos2 obere Stromschwelle [mA] |
| MESSPUNKTE | int | Ecos2 Anzahl Messpunkte [-] |
| TRIGGERFILTER | int | Ecos2 Triggerfilter [ms] |
| MESSWERTFILTER | int | Ecos2 Messfilter [ms] |
| TIMEOUT | int | Ecos2 timeout Zeit [s] |
| POSTTRIGGER | int | Ecos2 Nachtrigger Aufzeichnung [ms] |

### _STATUS_EISYUGD

0x3101F0E0 & 0x3103F0E0 _STATUS_EISYUGD Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

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

### _STATUS_KLANN

0x3101F0E4 & 0x3103F0E4 _STATUS_KLANN Ansteuern und Auslesen Klann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STATUS_DAROL_LESEN

0x224061 STATUS_DAROL_LESEN Job zum Auslesen der DAROL Lastkollektivdaten

_No arguments._

### STATUS_CODIERUNG_OEL

0x223320 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_FREISCHALTUNG

TPROT Zertifikat lesen STATUS Freischaltung (0x22 FD03)

_No arguments._

### STATUS_FREISCHALTUNG_SWT

Status der Freischaltung für Vmax und Pmax lesen STATUS Freischaltung SWT (0x31010F1F) Achtung: es werden mehrere Saetze von Results angelegt, für jede Freischaltung ein eigener Satz

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

### STATUS_TRIPRCRDKONF_LZQ

TripRecorder: Konfiguration, Statuswerte und Errorwerte der Langzeitqualitaet (LZQ)-Größen und des LZQ Triggers auslesen. STATUS_TRIPRCRDKONF_LZQ (0x22 4107)

_No arguments._

### STATUS_TRIPRCRD_LZQ_01

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) -Eventdaten 01 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_01 (0x22 4108)

_No arguments._

### STATUS_TRIPRCRD_LZQ_02

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 02 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_02 (0x22 4109)

_No arguments._

### STATUS_TRIPRCRD_LZQ_03

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 03 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_03 (0x22 410A)

_No arguments._

### STATUS_TRIPRCRD_LZQ_04

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 04 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_04 (0x22 410B)

_No arguments._

### STATUS_TRIPRCRD_LZQ_05

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 1) - Eventdaten 05 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_05 (0x22 410C)

_No arguments._

### STATUS_TRIPRCRD_LZQ_06

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 06 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_06 (0x22 410D)

_No arguments._

### STATUS_TRIPRCRD_LZQ_07

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 07 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_07 (0x22 410E)

_No arguments._

### STATUS_TRIPRCRD_LZQ_08

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 08 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_08 (0x22 410F)

_No arguments._

### STATUS_TRIPRCRD_LZQ_09

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 09 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_09 (0x22 4110)

_No arguments._

### STATUS_TRIPRCRD_LZQ_10

TripRecorder: Auslesen von Langzeitqualitaet (LZQ) (Sektor 2) - Eventdaten 10 (Alle Flash-Sektoren aus Event-Speicherung). STATUS_TRIPRCRD_LZQ_10 (0x22 4111)

_No arguments._

### STEUERN_TRIPRCRDRESET_LZQ

TripRecorder: Löschen des LZQ-Datenspeichers. Beim Ausführen dieses Jobs: GlbDa_bTRReqIniFlshLtq_u8=TRUE. Die Löschung der LZQ-Speichersektoren erfolgt im Shutdown. STEUERN_TRIPRCRDRESET_LZQ (0x2E 5FE0)

_No arguments._

### STATUS_MSA2HISTORIENOSTOP

MSA2 Historienspeicher fuer verhinderte MSA-Stopps STATUS_MSA2HISTORIENOSTOP (0x22 403A)

_No arguments._

### STATUS_MSA2HISTORIENOSTART

MSA2HISTORIENOSTART Ringspeicher auslesen STATUS_MSA2HISTORIENOSTART (0x22 4040)

_No arguments._

### STATUS_TYPPRUEFNR

Typpruefnummer fuer BN2020 SGs auslesen STATUS_TYPPRUEFNR (0x22 4047)

_No arguments._

### STATUS_TRIPRCRD0

Auslesen des allgemeinen Zustands des Pannendatenspeichers. STATUS_TRIPRCRD0 (0x22 4068)

_No arguments._

### _STATUS_RB_STARTUPBBLOCKID

Entwicklung: Beschreibung Startupblock-Identifikation der RB DMEs/DDEs auslesen. _STATUS_RB_STARTUPBBLOCKID (0x22 4098)

_No arguments._

### _STATUS_RB_RESET_INFO

Entwicklung: Reset-Informationen bei RB DMEs/DDEs auslesen. _STATUS_RB_RESET_INFO (0x22 4099)

_No arguments._

### _STATUS_MSA2_DEAK_DEAKT

Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. _STATUS_MSA2_DEAK_DEAKT (0x22 5FDB)

_No arguments._

### _STEUERN_MSA2_DEAK_DEAKT_REQUEST

Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stopp Automatik) vorgeben Die Umsetzung ist ausschließlich für Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zurücknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_DEAKT (0x2E 5FDB)

| Name | Type | Description |
| --- | --- | --- |
| SW | string | Auswahl Parameter für unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Deaktivierer vorgeben 0 - MSA2 Selektive Blockierung der Deaktivierer vorgeben beenden Werttabelle 0 = MSA2 Deaktivierung DEAKT beenden 7 = MSA2 Deaktivierung DEAKT vorgeben |
| SW_MSA2_DEAK_DEAKT | unsigned long | Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstDeactvn |

### _STATUS_MSA2_DEAK_DFSP

Selektieve Blockierung der Deaktivierer aufgrund FSP-Einträgen MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. _STATUS_MSA2_DEAK_DFSP (0x22 5FDC)

_No arguments._

### _STEUERN_MSA2_DEAK_DFSP_REQUEST

Selektieve Blockierung der Deaktivierer aufgrund FSP-Einträgen MSA2 (Motor Start/Stopp Automatik) vorgeben. Die Umsetzung ist ausschließlich für Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zurücknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_DFSP (0x2E 5FDC)

| Name | Type | Description |
| --- | --- | --- |
| SW | string | Auswahl Parameter für unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Deaktivierer aufgrund FSP-Einträgen vorgeben 0 - MSA2 Selektive Blockierung der Deaktivierer aufgrund FSP-Einträgen vorgeben beenden Werttabelle 0 = MSA2 Deaktivierung DFSP beenden 7 = MSA2 Deaktivierung DFSP vorgeben |
| SW_MSA2_DEAK_DEAKTFS | unsigned long | Selektive Blockierung der Deaktivierer aufgrund von Fehlerspeichereinträgen MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstDeactvnFcm |

### _STATUS_MSA2_DEAK_EA

Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. _STATUS_MSA2_DEAK_EA (0x22 5FDD)

_No arguments._

### _STEUERN_MSA2_DEAK_EA_REQUEST

Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stopp Automatik) vorgeben. Die Umsetzung ist ausschließlich für Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zurücknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_EA (0x2E 5FDD)

| Name | Type | Description |
| --- | --- | --- |
| SW | string | Auswahl Parameter für unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Einschaltaufforderer vorgeben 0 - MSA2 Selektive Blockierung der Einschaltaufforderer vorgeben beenden Werttabelle 0 = MSA2 Deaktivierung EA beenden 7 = MSA2 Deaktivierung EA vorgeben |
| SW_MSA2_DEAK_EINSCHAUFVOR | unsigned long | Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstSwtOnReq |

### _STATUS_MSA2_DEAK_FAV

Selektive Blockierung der Fahrerabschaltverhinderer MSA2 (Motor Start/Stopp Automatik) auslesen. Die Umsetzung ist ausschließlich für Entwicklung gedacht. _STATUS_MSA2_DEAK_FAV (0x22 5FDF)

_No arguments._

### _STEUERN_MSA2_DEAK_FAV_REQUEST

Selektive Blockierung der Fahrerabschaltverhinderer MSA2 (Motor Start/Stopp Automatik) vorgeben Die Umsetzung ist ausschließlich für Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zurücknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_FAV (0x2E 5FDF)

| Name | Type | Description |
| --- | --- | --- |
| SW | string | Auswahl Parameter für unterschiedliche Servicefunktionen: 7 - MSA2 Selektive Blockierung der Fahrerabschaltverhinderer vorgeben 0 - MSA2 Selektive Blockierung der Fahrerabschaltverhinderer vorgeben beenden Werttabelle 0 = MSA2 Deaktivierung FAV beenden 7 = MSA2 Deaktivierung FAV vorgeben |
| SW_MSA2_DEAK_FAHRABSCHVERH | unsigned long | Selektive Blockierung der Fahrerabschaltverhinderer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstDrvSwtOffPrevn |

### _STATUS_MSA2_DEAK_EV

Selektive Blockierung der Einschaltverhinderer MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. _STATUS_MSA2_DEAK_EV (0x22 5FE5)

_No arguments._

### _STEUERN_MSA2_DEAK_EV_REQUEST

Selektive Blockierung der Einschaltverhinderer MSA2 (Motor Start/Stopp Automatik) vorgeben Die Umsetzung ist ausschließlich für Entwicklung gedacht. Deaktivierung nach einem Klemmenwechsel zurücknehmen (NICHT erst durch Einschlafen der DME/DDE!) _STEUERN_MSA2_DEAK_EV (0x2E 5FE5)

| Name | Type | Description |
| --- | --- | --- |
| SW | string | Auswahl Parameter für unterschiedliche Servicefunktionen: 7- MSA2 Selektive Blockierung der Einschaltverhinderer vorgeben 0 - MSA2 Selektive Blockierung der Einschaltverhinderer vorgeben beenden Werttabelle 0 = MSA2 Deaktivierung EV beenden 7 = MSA2 Deaktivierung EV vorgeben |
| SW_MSA2_DEAK_EINSCHVERH | unsigned long | Selektive Blockierung der Einschaltverhinderer MSA2 (Motor Start/Stop Automatik). Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstSwtOnPrevn |

### _STATUS_HYBRID_ACHSE_VM_EM

Im Rollenpruefstand bei Hybrid-Fahrzeugen mit rein elektrischer und VM-Achse, betriebene Achse(n) auslesen. _STATUS_HYBRID_ACHSE_VM_EM (0x22 5FFE)

_No arguments._

### _STEUERN_HYBRID_ACHSE_VM_EM_REQUEST

Im Rollenpruefstand bei Hybrid-Fahrzeugen mit rein elektrischer und VM-Achse, 0 - Betriebene Achse vorgeben beenden, 7 - Betriebene Achse vorgeben, Beim Beenden werden die auf den Parameter = 00 folgenden Parameter nicht ausgewertet. Im selben Fahrzyklus kann nicht zwischen VM- und elektrischem Betrieb umgeschaltet werden, ansonsten wird mit $7F,12 subFunctionNotSupported geantwortet. Startbedingungen: Bkl15 == FALSE, vfzg == 0, nmot == 0. _STEUERN_HYBRID_ACHSE_VM_EM (0x2E 5FFE)

| Name | Type | Description |
| --- | --- | --- |
| SW | string | Auswahl Parameter für unterschiedliche Servicefunktionen. 0 - Betriebene Achse (VM oder EM) vorgeben beenden, 7 - Betriebene Achse (VM oder EM) vorgeben. Werttabelle 7 = VM-Achse oder EM-Achse vorgeben. 0 = VM-Achse oder EM-Achse vorgeben beenden. |
| SW_HYBRID_ACHSE_VM_EM | unsigned char | Zwischen VM-Achse und elektrischer Achse, betriebene Achse vorgeben. Im selben Fahrzyklus darf nicht zwischen VM- und elektrischem Betrieb umgeschaltet werden. Wenn dies doch versucht wird, wird mit $7F,12 subFunctionNotSupported geantwortet (A2L-NAME: Msa_swbavmksgb). Normaler Fahrbetrieb: 00. Reiner Verbrennungsmotor (VM)-Betrieb : 01. Reiner elektrischer Betrieb : 02. Ausgabe einer Fehlermeldung an das Diagnosetool falls : 03-FF. Min: 0.0 Max: 255.0 a2l-Name: BasSvrAppl_stEomGripAxlDiag |

### ADAP_SELEKTIV_LOESCHEN

Ansteuern Adaptionen selektiv loeschen - Batterietausch ausgeblendet. ADAP_SELEKTIV_LOESCHEN (0x31 01 F030)

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | unsigned char | AUSWAHLBYTE_1_BIT_7 --> Adaption Abgasrueckfuehrungsventil (NOT USED) AUSWAHLBYTE_1_BIT_6 --> Adaption Lambdaregelung B_clradlr, B_clradlrh, klann_clrad() AUSWAHLBYTE_1_BIT_5 --> Adaption Drosselklappe B_lrndia AUSWAHLBYTE_1_BIT_4 --> Adaption Saugrohrmodell eisy_clrad(), B_clradeisy AUSWAHLBYTE_1_BIT_3 --> Adaption Tankentlueftung (NOT USED) AUSWAHLBYTE_1_BIT_2 --> Adaption Lambdasonden (NOT USED) AUSWAHLBYTE_1_BIT_1 --> Adaption Klopfregelung kr_clrad() AUSWAHLBYTE_1_BIT_0 --> Adaption Leerlaufabgleich B_clradllr Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: B_clradllr Bit 0x02: Bit 0x04: Bit 0x08: Bit 0x10: B_clradeisy Bit 0x20: B_lrndia Bit 0x40: B_clradlr Bit 0x80: |
| AUSWAHLBYTE_2 | unsigned char | AUSWAHLBYTE_2_BIT_7 --> Adaption Variabler Ventiltrieb (VVT) B_clradvvt, B_clradmhb AUSWAHLBYTE_2_BIT_6 --> Adaption gelernte Varainten B_clvar AUSWAHLBYTE_2_BIT_5 --> Adaption Oktanzahl (NOT USED) AUSWAHLBYTE_2_BIT_4 --> Batterietausch nur ueber eigenen Job AUSWAHLBYTE_2_BIT_3 --> Adaption Hochdruckpumpe LV_HPP_CTL_AD_CLR_EXT_REQ AUSWAHLBYTE_2_BIT_2 --> Adaption Sekundaerluftsystem (NOT USED) AUSWAHLBYTE_2_BIT_1 --> Adaption NOx-Sensor (NOT USED) AUSWAHLBYTE_2_BIT_0 --> Adaption Lastregelung ls_clrad() Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: Bit 0x02: Bit 0x04: Bit 0x08: LV_HPP_CTL_AD_CLR_EXT_REQ Bit 0x10: B_fabttreg Bit 0x20: Bit 0x40: B_clvar Bit 0x80: B_clradvvt |
| AUSWAHLBYTE_3 | unsigned char | AUSWAHLBYTE_3_BIT_7 --> Energieadaption Injektoren (NOT USED) AUSWAHLBYTE_3_BIT_6 --> Diagnosewerte Abgaskrümmerdruck (EisyDiagPakmx) Reset: BasSvrAppl_stRstrtDgnsVal AUSWAHLBYTE_3_BIT_5 --> NOT USED AUSWAHLBYTE_3_BIT_4 --> Adaption Laufunruhe (Faktor und Offset) und zylinderindividuelle Lambdaregelung (NOT USED) AUSWAHLBYTE_3_BIT_3 --> Adaption Zylindergleichstellung fuer Bandende und Fahrzyklus (NOT USED) AUSWAHLBYTE_3_BIT_2 --> Adaption Verbrennungsregelung (NOT USED) AUSWAHLBYTE_3_BIT_1 --> Adaption Segmentzeit B_clradfof AUSWAHLBYTE_3_BIT_0 --> Adaption VANOS vns_clrad(),  B_fanwrad Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: Bit 0x02: B_clradfof Bit 0x04: Bit 0x08: Bit 0x10: Bit 0x20: Bit 0x40: Bit 0x80: |

### ADAP2_SELEKTIV_LOESCHEN

Ansteuern Adaptionen 2 selektiv loeschen ADAP2_SELEKTIV_LOESCHEN (0x31 01 F031)

| Name | Type | Description |
| --- | --- | --- |
| ADAV2_AUSWAHLBYTE_1 | unsigned char | ADAV2_AUSWAHLBYTE_1_BIT_7 -- > Kleinstmengenadaption (bedinjadclr) ADAV2_AUSWAHLBYTE_1_BIT_6 --> Variante Abgasklappe löschen (DAKRE_StRstFlpTyp), BasSvrAppl_stVarEgFlapClr ADAV2_AUSWAHLBYTE_1_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_4 --> Neustart der Hinterachslernfunktion BasSvrAppl_flgRstRrAxlAdpn ADAV2_AUSWAHLBYTE_1_BIT_3 --> Cilc-Adaptionswerte Injektortausch Bank 1 (NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_2 --> Adaption Langzeit fuer Injektoralterung Bank 2 (NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_1 --> Adaption Langzeit fuer Injektoralterung Bank 1 klann_lza_clrad() ADAV2_AUSWAHLBYTE_1_BIT_0 --> Adaption Nullgangsensor(NOT USED) Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: Bit 0x02: Bit 0x04: Bit 0x08: Bit 0x10: Bit 0x20: Bit 0x40: Bit 0x80: bedinjadclr [3] |
| ADAV2_AUSWAHLBYTE_2 | unsigned char | ADAV2_AUSWAHLBYTE_2_BIT_7 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_4 --> Bereichserkennung Benzin im Oel (B_clradbo) ADAV2_AUSWAHLBYTE_2_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_1 --> Kraftstoffqualitätserfassung Reset: B_clradfuel ADAV2_AUSWAHLBYTE_2_BIT_0 --> Infospeicher Superklopffunktion löschen BasSvrAppl_stTstrTrg1_RC_B_SKRKO Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: Bit 0x02: B_clradfuel Bit 0x04: Bit 0x08: Bit 0x10: B_clradbbo Bit 0x20: Bit 0x40: Bit 0x80: |
| ADAV2_AUSWAHLBYTE_3 | unsigned char | ADAV2_AUSWAHLBYTE_3_BIT_7 --> Zuruecksetzen der Hubkorrekturstatistik (B_vbrstatresetext, St_vbr_stat.B_vbr_stat_reset_ext) ADAV2_AUSWAHLBYTE_3_BIT_6 --> Anforderung Nockenwellen Referenzadaption durch Tester (Kurbelwelle-Nockenwellenzuordnung). Der Neustart der Adaptation sollte immer nach Arbeit in der Umgebung der Nocken- oder Kurbelwelle ausgeführt werden. B_fanwrad ADAV2_AUSWAHLBYTE_3_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_0 --> NOT USED Min: 0.0 Max: 255.0 a2l-Name: Bit 0x01: Bit 0x02: Bit 0x04: Bit 0x08: Bit 0x10: Bit 0x20: Bit 0x40: Bit 0x80: B_vbrstatresetext |

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
| 0x0000B7 | SB LiMotive Germany GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
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
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | ja |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR |
| 0xXY | ERROR_UNKNOWN |

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

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSWERTE | 0x4000 | - | Messwerte auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000 | - |
| DFMONITOR | 0x4001 | STAT_AUSGANG_WERT | Batterieladezustand auslesen | % | - | - | unsigned char | - | 0,390625 | - | - | - | 22 | - | - | A2L-NAME=dfmonitor |
| DIGITAL_1 | 0x4002 | - | Status Schaltzustaende 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4002 | - |
| NOCKENWELLE_ADAPTION | 0x4006 | - | Nockenwellenadationswerte auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4006 | - |
| DIGITAL_0 | 0x4007 | - | Status Schaltzustaende 0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4007 | - |
| ADAPTION_DK | 0x4008 | - | Drosselklappenadaptionswerte auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008 | - |
| ADAPTION_GEMISCH | 0x400A | - | Gemischadaptionswerte auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A | - |
| MESSWERTE_VVT | 0x400B | - | VVT Messwerte auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400B | - |
| FASTA10 | 0x4015 | - | FASTA-Messwertblock 10 lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4015 | - |
| DMEREF | 0x401F | STAT_ECU_SW_REF_BMW_TEXT | BMW Programmstands-Bezeichnung auslesen | text | - | high | string[22] | - | - | - | - | - | 22 | - | - | - |
| MESSWERTE_EWAP | 0x4024 | - | elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Messwerte auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4024 | - |
| MESSWERTE_VAD | 0x4025 | - | Variantenadaptionen auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4025 | - |
| RBMMODE9 | 0x4026 | - | Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4026 | - |
| RBMME1 | 0x4029 | - | Rate Based Monitoring Motorsteuerung ME... Block 1 auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4029 | - |
| RBMME2 | 0x402A | - | Rate Based Monitoring Motorsteuerung ME... Block 2 auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402A | - |
| MESSWERTE_LRP | 0x402D | - | Messwerte Laufruhepruefung auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402D | - |
| NULLGANG_ERKENNUNG | 0x402E | - | Nullgang Erkennung auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402E | - |
| KQE | 0x4035 | - | Messwerte zur Kraftstoffqualitaet auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4035 | - |
| MSA2 | 0x4036 | - | MSA2 (MotorStopAutomatik 2) auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4036 | - |
| SGR | 0x4037 | - | SGR Startergenerator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4037 | - |
| IDENT_GEN | 0x4038 | - | Auslesen Identifikationsdaten Generator | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4038 | - |
| CALCVN | 0x403C | - | Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x403C | - |
| CYBL_HOM | 0x403D | - | Injektor Adaptionswerte lesen CYBL_HOM (FASTA GROESSEN) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x403D | - |
| ATLDIAG | 0x4044 | - | Turboladerstatus auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4044 | - |
| KLANNADAP | 0x4046 | - | KLANN Adaptionen auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4046 | - |
| INTEGRITAETDME | 0x4048 | - | Integritaet DME und Codierzaehler Leistungsklasse und maximale V_VEH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4048 | - |
| ZDKSHDP | 0x404C | - | Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) auslesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404C | - |
| EWPVRS | 0x404D | STAT_VRS_EWP_WERT | Variante der el. Hauptwasserpumpe lesen. | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - | A2L-NAME=EwpEcu_numVersNV |
| CBSMOTOROELHIST | 0x404F | - | CBS Motoroel Historien-Fkt lesen (FASTA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404F | - |
| DRLTEMPVER1 | 0x407A | - | Entwicklung DAROL Statistiken 1 auslesen (Temperaturverteilung Getriebeoel, Temperaturverteilung Getriebeglocke, Kupplungsreibung) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407A | - |
| DRLGANGWECHSELHFKT | 0x407B | STAT_DRL_GGW_DAT_DATA | Auslesen Getriebelastkollektiv: Übertragung Getriebe-Gangwechsel Häufigkeit. | data | - | high | data[128] | - | - | - | - | - | 22 | - | - | A2L-NAME=Drl_ggw_dat Array [0-63] |
| DRLSTRECKENPROFIL | 0x407C | STAT_DRL_VTGS_DAT_DATA | Auslesen Getriebelastkollektiv: Uebertragung Geschwindigkeitsverteilung und Fahrstrecke (Streckenprofil). | data | - | high | data[120] | - | - | - | - | - | 22 | - | - | A2L-NAME=Drl_vtgs_dat Array [0-29] |
| DRLTEMPVER2 | 0x407D | STAT_DRL_KPRB_DAT_DATA | Entwicklung DAROL Statistiken 2 auslesen (Temperaturverteilung Getriebeoel, Temperaturverteilung Getriebeglocke, Kupplungsreibung) | data | - | high | data[200] | - | - | - | - | - | 22 | - | - | A2L-NAME=Drl_kprb_dat Array [0-49] |
| TRIPRCRDKONF | 0x407E | - | Konfiguration der Groeßen und Trigger auslesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407E | - |
| SUPERKLOPFER | 0x407F | - | Infospeicher Superklopfer auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x407F | - |
| NMDSFNP | 0x4080 | STAT_NMDSFNP_DATA | Sekundaeres n/Md Kennfeld zur Erfassung von Fahrzeugnutzungsprofilen auslesen | data | - | high | data[192] | - | - | - | - | - | 22 | - | - | A2L-NAME=nmdpfnp_l Array [0-47] |
| DEGRADATIONZUSTART | 0x4083 | - | Betriebsstundenzaehler fuer Zustartdegradation (HYB GEN20). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4083 | - |
| PTSENSOR | 0x4085 | - | Druck und Temperatur im Tank auslesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4085 | - |
| CVO1 | 0x408F | - | Auslesen CVO-Adaptionen Teil 1 (Continuous Valve Operation). !!Hier werden Logische Zylinderreihenfolgen verwendet!! | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x408F | - |
| BETRIEB_ZMS | 0x4094 | - | Auslesen der Bertiebszustände des Zweimassenschwungrades die in DMD zu Ausblendzeiten führen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4094 | - |
| KRFTSTFFVRBRCH_MODIS_HIST | 0x4095 | - | Kraftstoffverbrauchstatistiken bei unterschiedlichen Fahrerlebnismodis (Eco, Normal-Komfort, Sport, und Gesamt) ueber FASTA und TSR auslesen/uebermitteln. (FASTA,TSR). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4095 | - |
| ABGASDRUCK_DIAG | 0x409A | - | Auslesen der Werte für die Diagnose Abgasdruck (Pak). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x409A | - |
| ZYKNLINFO | 0x409D | STAT_ZYKL_INFO_DATA | Auslesen von wichtigen Kenngrößen der letzten 4 Vorgänge des zykllischen Nachladens plus dem letzten Parkvorgang | data | - | high | data[88] | - | - | - | - | - | 22 | - | - | A2L-NAME=Zyknlinfo Array [0-88] |
| ZYKNLHIST | 0x409E | STAT_ZYKL_HISTORY_DATA | Auslesen der Histogramme über die Standzeit bis zum Beginn des zyklischen Nachladens und der Ladedauern der zyklischen Nachladevorgänge | data | - | high | data[16] | - | - | - | - | - | 22 | - | - | A2L-NAME=Zyknlhist Array [0-16] |
| READINESS | 0x4105 | - | Monitorfunktionen und Readinessflags aus DME auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4105 | - |
| SEGELVERH | 0x4106 | - | Auslesung des großen und kleinen Segelverhinderers. Dieser Job dient jetzt nur für Entwicklungszwecke. Wir für Kundenzwecke noch erweitert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4106 | - |
| ERWEITERT_GANGSENSOR_ERKENNUNG_SENT | 0x4150 | - | Erweiterte Gangsensorwerte Abfrage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4150 | - |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | high | unsigned int | - | 10 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=pu_w |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Druck vor Drosselklappe ( Wertebereich von 0...5120hPa ) | hPa | pvd_w | high | unsigned int | - | 20 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=pvd_w |
| STAT_0X4206_WERT | 0x4206 | STAT_0X4206_WERT | Massenstrom über Drosselklappe Bank 1 | kg/h | SwSABMW_mfThrFlap | high | unsigned int | - | - | 32 | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_mfThrFlap Array [0] |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Motor-Temperatur | °C | tmot | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tmot |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Bestätigte Solldrehzahl elektr. Wasserpumpe | 1/min | BasSvrAppl_nDesWp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_nDesWp |
| STAT_0X4307_WERT | 0x4307 | STAT_0X4307_WERT | Statusmeldung elektr. Wasserpumpe | - | BasSvrAppl_stComPmp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_stComPmp |
| STAT_0X4308_WERT | 0x4308 | STAT_0X4308_WERT | Solldrehzahl elektrische Wasserpumpe | 1/min | newpsoll | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=newpsoll |
| STAT_0X4310_WERT | 0x4310 | STAT_0X4310_WERT | Solltemperatur Kühlmittel | - | tkwsoll_w | high | int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=tkwsoll_w |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Oeltemperatur nach Filter | °C | toel_w | high | unsigned int | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=toel_w |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoffverbrauch seit letztem Ölwechsel | - | ozkvbsm_ul | high | unsigned long | - | - | 8192 | - | - | 2C; 22 | - | - | A2L-NAME=ozkvbsm_ul |
| STAT_0X4404_WERT | 0x4404 | STAT_0X4404_WERT | Ölkilometer | km | ozoelkm | high | unsigned int | - | 10 | - | - | - | 2C; 22 | - | - | A2L-NAME=ozoelkm |
| STAT_0X4405_WERT | 0x4405 | STAT_0X4405_WERT | Sensorrohwert Ölniveau | - | oznivr | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=oznivr |
| STAT_0X4406_WERT | 0x4406 | STAT_0X4406_WERT | Sensorrohwert Permittivität | - | ozpermr_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ozpermr_w |
| STAT_0X4407_WERT | 0x4407 | STAT_0X4407_WERT | Sensorrohwert Öltemperatur | - | oztempr | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=oztempr |
| STAT_0X4408_WERT | 0x4408 | STAT_0X4408_WERT | Öltemperatur ungefiltert | °C | oztemp_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=oztemp_w |
| STAT_0X4409_WERT | 0x4409 | STAT_0X4409_WERT | Ölniveau ungefiltert in [mm] | - | ozniv | - | unsigned char | - | 75 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=ozniv |
| STAT_0X440A_WERT | 0x440A | STAT_0X440A_WERT | Permitivität für den Tester | - | ozpermakt | high | unsigned int | - | 6 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=ozpermakt |
| STAT_0X440B_WERT | 0x440B | STAT_0X440B_WERT | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | ozlf1c_eep | - | unsigned char | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=ozlf1c_eep |
| STAT_0X440C_WERT | 0x440C | STAT_0X440C_WERT | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | ozlf2c_eep | - | unsigned char | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=ozlf2c_eep |
| STAT_0X440D_WERT | 0x440D | STAT_0X440D_WERT | Länderfaktor 1 | - | ozlf1t | - | unsigned char | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=ozlf1t |
| STAT_0X440E_WERT | 0x440E | STAT_0X440E_WERT | Länderfaktor 2 | - | ozlf2t | - | unsigned char | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=ozlf2t |
| STAT_0X440F_WERT | 0x440F | STAT_0X440F_WERT | Kurzzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivkrzt | - | unsigned char | - | 75 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=oznivkrzt |
| STAT_0X4411_WERT | 0x4411 | STAT_0X4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | - | ozrwkvb | high | int | - | - | 0,1 | - | - | 2C; 22 | - | - | A2L-NAME=ozrwkvb |
| STAT_0X4412_WERT | 0x4412 | STAT_0X4412_WERT | Öllaufzeit | mth | ozoelzeit | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ozoelzeit |
| STAT_0X4418_WERT | 0x4418 | STAT_0X4418_WERT | Status Ölzustandssensor | - | ozstatus | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ozstatus |
| STAT_0X4420_WERT | 0x4420 | STAT_0X4420_WERT | Eingangstemperatur Poel_reg | °C | tpoelreg_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=tpoelreg_w |
| STAT_0X4421_WERT | 0x4421 | STAT_0X4421_WERT | Öldruckregler P-Anteil | - | poelregp_w | high | int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=poelregp_w |
| STAT_0X4422_WERT | 0x4422 | STAT_0X4422_WERT | Öldruckregler I-Anteil | - | poelregi_w | high | int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=poelregi_w |
| STAT_0X4423_WERT | 0x4423 | STAT_0X4423_WERT | Öldruckregler D-Anteil | - | poelregd_w | high | int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=poelregd_w |
| STAT_0X4424 | 0x4424 | STAT_0X4424_WERT | Bedingung Ölsensorfehler | - | B_ozniverr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_ozniverr |
| STAT_0X4425_WERT | 0x4425 | STAT_0X4425_WERT | Öltemperatur im Sumpf | °C | oztempsmpf_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=oztempsmpf_w |
| STAT_0X4426_WERT | 0x4426 | STAT_0X4426_WERT | Ist-Betriebsart Öldruck Regelung | - | bapoelrist | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=bapoelrist |
| STAT_0X4427_WERT | 0x4427 | STAT_0X4427_WERT | Rückmeldung auf Anfrage zur Oelniveaumessung bitcodiert | - | stoelnivena | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=stoelnivena |
| STAT_0X4428 | 0x4428 | STAT_0X4428 | Schalter S_POELFUNC_ON | 0/1 | B_poelfuncon | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_poelfuncon |
| STAT_0X4429 | 0x4429 | STAT_0X4429 | Anforderung Detailmessung Ölniveau Ausgangsgröße | 0/1 | B_onqntmssganf | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_onqntmssganf |
| STAT_0X442A | 0x442A | STAT_0X442A_WERT | Bedingung Motoröltemperatur gültig | - | B_oznivtemp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_oznivtemp |
| STAT_0X442B_WERT | 0x442B | STAT_0X442B_WERT | Codierung Antriebsvariante | - | onantriebsartcod | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=onantriebsartcod |
| STAT_0X442C_WERT | 0x442C | STAT_0X442C_WERT | Rohwert Oilniveau | mm | Oil_niveau | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Oil_niveau |
| STAT_0X442D_WERT | 0x442D | STAT_0X442D_WERT | Korrigiertes Niveau aus TP in MinErk | mm | SwSABMW_CorLvlMinDetc | high | unsigned int | - | 0,29296875 | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_CorLvlMinDetc |
| STAT_0X442E_WERT | 0x442E | STAT_0X442E_WERT | Niv-Mittelwert QntMssg | mm | SwSABMW_AvrgOilLvlMeas | high | unsigned int | - | 0,29296875 | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_AvrgOilLvlMeas |
| STAT_0X442F_WERT | 0x442F | STAT_0X442F_WERT | ABK Schnittstelle Oelniveau | cl | SwSABMW_clRelOilLvl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_clRelOilLvl |
| STAT_0X4430_WERT | 0x4430 | STAT_0X4430_WERT | LSB Status fuer On_oelniveau | - | SwSABMW_stOilLvlDescrAbrt | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_stOilLvlDescrAbrt |
| STAT_0X4432_WERT | 0x4432 | STAT_0X4432_WERT | Status des ÖNS-Komponententreibes | - | Oil_stKTResults | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Oil_stKTResults |
| STAT_0X4433_WERT | 0x4433 | STAT_0X4433_WERT | Status des ÖNS-Komponententreibes | - | Oil_stSensor | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Oil_stSensor |
| STAT_0X4434_WERT | 0x4434 | STAT_0X4434_WERT | Bedingung Motorölsensorfehler im Niveauerfassungssystem | - | B_oznivlerr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_oznivlerr |
| STAT_0X4436_WERT | 0x4436 | STAT_0X4436_WERT | Öldruck Istwert (Absolutdruck) | hPa | SWSABMW_pOilAbsltIs | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SWSABMW_pOilAbsltIs |
| STAT_0X4500 | 0x4500 | STAT_0X4500 | Bedingung Motordrehzahl: n > NMIN | 0/1 | B_nmot | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_nmot |
| IAVEX | 0x4501 | STAT_VVT_EXCENTER_ADAPTION_WERT | Integrierter Offset Hubadaption | - | hubadmrofs_w | high | int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=hubadmrofs_w |
| IZYLM | 0x4502 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | ZylinderAnzahl des Motors | - | BasSvrAppl_Epm_numCyl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Epm_numCyl |
| STAT_0X4503_WERT | 0x4503 | STAT_0X4503_WERT | Zylinderindividuelle CVO- Grundadaption auslesen. Freigabe für Online-Regler (zylinderindividuell in phys. Reihenfolge) | - | BasSvrAppl_CvoAdpnRelCtrlCyl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_CvoAdpnRelCtrlCyl |
| SSPEI | 0x4505 | STAT_0X4505_WERT | Sollwinkel vom BMW Layer (Einlass-VANOS) | ° KW | wnwsaeb_w | high | int | - | - | 128 | - | - | 2C; 22 | - | - | A2L-NAME=wnwsaeb_w |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Winkel der Einlaß-NW-Flanken relativ zur Kurbelwelle | ° KW | wnwkwe_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=wnwkwe_w |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Winkel der Auslaß-NW-Flanken relativ zur Kurbelwelle | ° KW | wnwkwa_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=wnwkwa_w |
| STAT_0X4508 | 0x4508 | STAT_0X4508 | Bedingung fuel-off Adaption im aktuellen Drehzahlbereich ready | 0/1 | B_fofr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_fofr |
| STAT_0X4509 | 0x4509 | STAT_0X4509 | Bedingung fuel-off Adaption für Katheizen ready | 0/1 | B_fofrkh | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_fofrkh |
| STAT_0X450C | 0x450C | STAT_0X450C | Adaption Kurbel/Einlaßnockenwelle erfolgt | 0/1 | B_phade | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_phade |
| STAT_0X450D | 0x450D | STAT_0X450D | Adaption Kurbel/Auslaßnockenwelle erfolgt | 0/1 | B_phada | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_phada |
| STAT_0X450E_WERT | 0x450E | STAT_0X450E_WERT | Nullpunktverschiebung in Grad KW für die Winkelversatz Diagnose, bedingt durch Toleranzen der Einbaulage. | ° KW | EpmCaS_phiDiffAvrgLim | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiDiffAvrgLim Array [0] |
| STAT_0X4510 | 0x4510 | STAT_0X4510 | Bedingung VVT-Lagereglerüberwachung hat bleibende Regelabweichung erkannt | 0/1 | B_dvvtregelabweichung | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_dvvtregelabweichung |
| STAT_0X4511 | 0x4511 | STAT_0X4511 | Bedingung VVT-Lageregler schwingt | 0/1 | B_dvvtschwingung | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_dvvtschwingung |
| STAT_0X4512 | 0x4512 | STAT_0X4512 | Bedingung: VVT Motor Überlast Warnschwellle | 0/1 | B_vvttempovl_wrn | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_vvttempovl_wrn |
| STAT_0X4513 | 0x4513 | STAT_0X4513 | Bedingung VVT-Überlastung | 0/1 | B_vvttempovl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_vvttempovl |
| STAT_0X4514 | 0x4514 | STAT_0X4514 | Bedingung VVT-Adaption möglich | 0/1 | B_enadpvvt | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_enadpvvt |
| STAT_0X4515_WERT | 0x4515 | STAT_0X4515_WERT | Anforderung VVT-Anschlaglernen (intern) | - | vvtlrnaf | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvtlrnaf |
| STAT_0X4516_WERT | 0x4516 | STAT_0X4516_WERT | Status VVT-Anschlaglernen (intern) | - | vvtlrnst | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvtlrnst |
| STAT_0X4518_WERT | 0x4518 | STAT_0X4518_WERT | adaptierte Referenzpositionen der Auslaßnockenwelle Wert 1 | ° KW | EpmCaS_phiAdapRefPosO1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [1] |
| STAT_0X4519_WERT | 0x4519 | STAT_0X4519_WERT | adaptierte Referenzpositionen der Auslaßnockenwelle Wert 2 | ° KW | EpmCaS_phiAdapRefPosO1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [2] |
| STAT_0X451A_WERT | 0x451A | STAT_0X451A_WERT | adaptierte Referenzpositionen der Auslaßnockenwelle Wert 3 | ° KW | EpmCaS_phiAdapRefPosO1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [3] |
| STAT_0X451B_WERT | 0x451B | STAT_0X451B_WERT | adaptierte Referenzpositionen der Auslaßnockenwelle Wert 4 | ° KW | EpmCaS_phiAdapRefPosO1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [4] |
| STAT_0X451C_WERT | 0x451C | STAT_0X451C_WERT | adaptierte Referenzpositionen der Auslaßnockenwelle Wert 5 | ° KW | EpmCaS_phiAdapRefPosO1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [5] |
| STAT_0X451D_WERT | 0x451D | STAT_0X451D_WERT | Gesamtzeit VVT-Performancetest | - | vvtdtperf_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvtdtperf_w |
| STAT_0X451E_WERT | 0x451E | STAT_0X451E_WERT | Stromsumme VVT-Performancetest | A | ivvtsumperf_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ivvtsumperf_w |
| STAT_0X4520_WERT | 0x4520 | STAT_0X4520_WERT | Effektive Motorleistung | - | peffm_w | high | unsigned int | - | 1000 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=peffm_w |
| STAT_0X4521_WERT | 0x4521 | STAT_0X4521_WERT | Kraftstoffmassenstrom | kg/h | mkkgh_w | high | unsigned int | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=mkkgh_w |
| STAT_0X4522_WERT | 0x4522 | STAT_0X4522_WERT | Kraftstoffmasse homogen als Sollwert, Zylinder 1 | mg/stroke | BasSvrAppl_mkhs_w | high | unsigned int | - | 1389 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_mkhs_w Array [0] |
| STAT_0X4523_WERT | 0x4523 | STAT_0X4523_WERT | Kraftstoffmasse homogen als Sollwert, Zylinder 2 | mg/stroke | BasSvrAppl_mkhs_w | high | unsigned int | - | 1389 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_mkhs_w Array [1] |
| STAT_0X4524_WERT | 0x4524 | STAT_0X4524_WERT | Kraftstoffmasse homogen als Sollwert, Zylinder 3 | mg/stroke | BasSvrAppl_mkhs_w | high | unsigned int | - | 1389 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_mkhs_w Array [2] |
| STAT_0X4525_WERT | 0x4525 | STAT_0X4525_WERT | Kraftstoffmasse homogen als Sollwert, Zylinder 4 | mg/stroke | BasSvrAppl_mkhs_w | high | unsigned int | - | 1389 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_mkhs_w Array [3] |
| STAT_0X452A_WERT | 0x452A | STAT_0X452A_WERT | Sollwert Auslassspreizung variable NWS | ° KW | wsprnwsa_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=wsprnwsa_w |
| STAT_0X452B_WERT | 0x452B | STAT_0X452B_WERT | Sollwert Einlassspreizung variable NWS | ° KW | wsprnwse_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=wsprnwse_w |
| STAT_0X452C_WERT | 0x452C | STAT_0X452C_WERT | Istwert Auslaßspreizung | ° KW | wsprnwa_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=wsprnwa_w |
| STAT_0X452E_WERT | 0x452E | STAT_0X452E_WERT | Istwert Einlaßspreizung | ° KW | wsprnwe_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=wsprnwe_w |
| STAT_0X4530_WERT | 0x4530 | STAT_0X4530_WERT | Aktueller Einspritzmodus, Zylinder 1 | - | BasSvrAppl_AktEin | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AktEin Array [0] |
| STAT_0X4531_WERT | 0x4531 | STAT_0X4531_WERT | Aktueller Einspritzmodus, Zylinder 2 | - | BasSvrAppl_AktEin | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AktEin Array [1] |
| STAT_0X4532_WERT | 0x4532 | STAT_0X4532_WERT | Aktueller Einspritzmodus, Zylinder 3 | - | BasSvrAppl_AktEin | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AktEin Array [2] |
| STAT_0X4533_WERT | 0x4533 | STAT_0X4533_WERT | Aktueller Einspritzmodus, Zylinder 4 | - | BasSvrAppl_AktEin | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AktEin Array [3] |
| STAT_0X4536_WERT | 0x4536 | STAT_0X4536_WERT | Regeldifferenz Ladedruck - bankspezifisch Bank1 | hPa | SwSABMW_pCtlDifBnkSpc | high | int | - | 125 | 1000 | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_pCtlDifBnkSpc Array [0] |
| STAT_0X4538_WERT | 0x4538 | STAT_0X4538_WERT | Mittlerer Versatz der äquidistanten Flanken der Nockenwelle | ° KW | BasSvrAppl_Sig_EpmCaS | high | int | - | - | 45,5111111111 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Sig_EpmCaS Array [0] |
| STAT_0X4539_WERT | 0x4539 | STAT_0X4539_WERT | Mittlerer Versatz der äquidistanten Flanken der Nockenwelle | ° KW | BasSvrAppl_Sig_EpmCaS | high | int | - | - | 45,5111111111 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Sig_EpmCaS Array [1] |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | wdkba_w | high | int | - | 1600 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=wdkba_w |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=wdks_w |
| STAT_0X4602_WERT | 0x4602 | STAT_0X4602_WERT | Einlassventilhub (aus Exzenterwinkel gerechnet, mit Hub-Aadaption und mit Hubprädiktion) | mm | evhubi_w | high | unsigned int | - | - | 1000 | - | - | 2C; 22 | - | - | A2L-NAME=evhubi_w |
| STAT_0X4603_WERT | 0x4603 | STAT_0X4603_WERT | Sollwert Einlassventilhub gefiltert | mm | evhubs_w | high | unsigned int | - | - | 1000 | - | - | 2C; 22 | - | - | A2L-NAME=evhubs_w |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Ausgangstrom der Maschine | A | isgusmi_w | high | int | - | - | 8 | - | - | 2C; 22 | - | - | A2L-NAME=isgusmi_w |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Regler | - | isgusmchipvers | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=isgusmchipvers |
| IUBAT | 0x460A | STAT_UBATT_WERT | Gibt die momentane Batteriespannung an. | V | ubt | high | unsigned int | - | 0,015 | - | - | - | 2C; 22 | - | - | A2L-NAME=ubt |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler erfaßter Wert (16Bit aus 10Bit-Erfassung) | V | wub_w | high | unsigned int | - | 0,023481 | - | - | - | 2C; 22 | - | - | A2L-NAME=wub_w |
| STAT_0X460D_WERT | 0x460D | STAT_0X460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | high | unsigned int | - | 0,004 | - | -100,0 | - | 2C; 22 | - | - | A2L-NAME=abschkor_w |
| TDSTF | 0x460E | STAT_0X460E_WERT | Abstand zur Startfähigkeit | % | dsoc_w | high | unsigned int | - | 0,004 | - | -100,0 | - | 2C; 22 | - | - | A2L-NAME=dsoc_w |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | DF-Monitor für Batterie-Ladezustand in % | % | dfmonitor | - | unsigned char | - | 100 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=dfmonitor |
| STAT_0X4610_WERT | 0x4610 | STAT_0X4610_WERT | Rückmeldestatus an E-Lüfter-Relais-Testerjob | - | SwSABMW_stRespEfnRlyTstr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_stRespEfnRlyTstr |
| STAT_0X4611_WERT | 0x4611 | STAT_0X4611_WERT | Tastverhältnis E-Lüfter | - | SwSABMW_stRespAddEfnRlyTstr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_stRespAddEfnRlyTstr |
| STAT_0X4612_WERT | 0x4612 | STAT_0X4612 | Bedingung Lüfterfreigabe | 0/1 | SwSABMW_flgEnadEfnTstr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_flgEnadEfnTstr |
| STAT_0X4614_WERT | 0x4614 | STAT_0X4614 | Bedingung Zusatzlüfterfreigabe | 0/1 | SwSABMW_flgEnadAddEfnTstr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_flgEnadAddEfnTstr |
| STAT_0X4615_WERT | 0x4615 | STAT_0X4615_WERT | Grenzerregerstrom | A | isgusmierrgrenz_w | high | unsigned int | - | 0,00125 | - | - | - | 2C; 22 | - | - | A2L-NAME=isgusmierrgrenz_w |
| STAT_0X4616_WERT | 0x4616 | STAT_0X4616_WERT | physikal. Eingangswert (sec.) für Load response Zeit | s | tlrgen | - | unsigned char | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=tlrgen |
| STAT_0X4617_WERT | 0x4617 | STAT_0X4617_WERT | Abgenommenes Moment der Maschine | Nm | isgusmm_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=isgusmm_w |
| STAT_0X4618 | 0x4618 | STAT_0X4618 | Bedingung: Drehzahlschwelle für Loadresponse-Funktion des Generators ausschalten | 0/1 | B_lroff | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_lroff |
| STAT_0X461B_WERT | 0x461B | STAT_0X461B_WERT | Drezahlschwelle für LR-Funktion | 1/min | tlrgensch_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=tlrgensch_w |
| STAT_0X4650_WERT | 0x4650 | STAT_0X4650_WERT | Getriebetemperatur | °C | tget | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tget |
| STAT_0X4651_WERT | 0x4651 | STAT_0X4651_WERT | Tastverhältnis an Endstufe des Ladedruckstellers | % | tvldsten_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tvldsten_w |
| STAT_0X4680 | 0x4680 | STAT_0X4680 | Bedingung Nullgangpostion | 0/1 | B_nggelernt | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_nggelernt |
| STAT_0X4681 | 0x4681 | STAT_0X4681 | Bedingung Nullgangsignal im Lernfenster | 0/1 | B_ngimlf | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_ngimlf |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | B_sbbvk | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_sbbvk |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | ua10mo_w | high | unsigned int | - | - | 2048 | - | - | 2C; 22 | - | - | A2L-NAME=ua10mo_w |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambdasoll Begrenzung (word) | - | lamsbg_w | high | unsigned int | - | 16 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=lamsbg_w |
| STAT_0X4710_WERT | 0x4710 | STAT_0X4710_WERT | Umgebungsdruck beim Abstellen für die Leckdiagnose | hPa | puleaknvld_w | high | unsigned int | - | 10 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=puleaknvld_w |
| STAT_0X4711_WERT | 0x4711 | STAT_0X4711_WERT | Anzahl erkannte Feinstleck durch Diagnose | - | nvlddiasleakctr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=nvlddiasleakctr |
| STAT_0X4712_WERT | 0x4712 | STAT_0X4712_WERT | Anzahl dichtes EVAP-System erkannt durch Diagnose | - | nvldnrdiagctr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=nvldnrdiagctr |
| STAT_0X4713_WERT | 0x4713 | STAT_0X4713_WERT | Zähler Leckdiagnose nicht durchgeführt aufgrund Umgebungsdruckänderung | - | nvldcdnctr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=nvldcdnctr |
| STAT_0X4714_WERT | 0x4714 | STAT_0X4714_WERT | NVLD: Zähler EngineOff Schalterdiagnose mit Fehler | - | nvldswer_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=nvldswer_w |
| STAT_0X4715_WERT | 0x4715 | STAT_0X4715_WERT | NVLD: Zähler EngineOff Schalterdiagnose ohne Fehler | - | nvldnoer_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=nvldnoer_w |
| STAT_0X4716_WERT | 0x4716 | STAT_0X4716_WERT | NVLD: EngineOff Schalterdiagnose 5 deg.C Bedingung erfüllt | - | nvldevnt_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=nvldevnt_w |
| STAT_0X471B_WERT | 0x471B | STAT_0X471B_WERT | Zähler der nichtdurchgeführten Leckdiagnosen lesen | - | SwSABMW_cntSmlLeakDgnsAbvThd | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_cntSmlLeakDgnsAbvThd |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT | Bedingung Kupplungspedal betätigt | 0/1 | B_kuppl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_kuppl |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN | Schalter Kupplung | 0/1 | S_kupp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=S_kupp |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT | Bedingung umschalten auf KFPEDS | 0/1 | B_pedsport | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_pedsport |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Bedingung für Kompressoreinschalten | 0/1 | B_koe | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_koe |
| STAT_0X4804_WERT | 0x4804 | STAT_0X4804 | gülitges Motorhaubensignal | 0/1 | Com_stHoodOpenSigOk | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stHoodOpenSigOk |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN | Schalter Klemme 50 von CAN | 0/1 | S_ckl50 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=S_ckl50 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | nmot_w | high | unsigned int | - | 0,25 | - | - | - | 2C; 22 | - | - | A2L-NAME=nmot_w |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlaufsolldrehzahl | 1/min | nsol_w | high | unsigned int | - | 0,25 | - | - | - | 2C; 22 | - | - | A2L-NAME=nsol_w |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Bedingung Leerlaufregelung | 0/1 | B_llr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_llr |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | normierter Fahrpedalwinkel | % | wped_w | high | unsigned int | - | 100 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=wped_w |
| STAT_0X480C_WERT | 0x480C | STAT_0X480C_WERT | Soll-Füllung | % | rlsol_w | high | unsigned int | - | 0,75 | 32 | - | - | 2C; 22 | - | - | A2L-NAME=rlsol_w |
| STAT_0X480D_WERT | 0x480D | STAT_0X480D_WERT | Ist Längsneigung Fahrbahn | ° | neigl_w | high | unsigned int | - | 0,05 | - | -64,0 | - | 2C; 22 | - | - | A2L-NAME=neigl_w |
| STAT_0X480E_WERT | 0x480E | STAT_0X480E_WERT | Qualifier Ist Querneigung Fahrbahn | - | neiglqual | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=neiglqual |
| STAT_0X480F_WERT | 0x480F | STAT_0X480F_WERT | Qualifier Ist Längsneigung Fahrbahn | - | neigqqual | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=neigqqual |
| STAT_0X4810_WERT | 0x4810 | STAT_0X4810_WERT | Ist Querneigung Fahrbahn | ° | neigq_w | high | unsigned int | - | 0,05 | - | -64,0 | - | 2C; 22 | - | - | A2L-NAME=neigq_w |
| STAT_0X4811_WERT | 0x4811 | STAT_0X4811_WERT | Fahrzeuglängsbeschleunigung | m/s² | bfzglfgr | - | char | - | 0,217 | - | - | - | 2C; 22 | - | - | A2L-NAME=bfzglfgr |
| STAT_0X4812_WERT | 0x4812 | STAT_0X4812_WERT | Fahrzeugquerbeschleunigung (positiv und negativ) | m/s² | bfzgqoz_w | high | int | - | - | 640 | - | - | 2C; 22 | - | - | A2L-NAME=bfzgqoz_w |
| STAT_0X4813 | 0x4813 | STAT_0X4813 | Bedingung Powerfail | 0/1 | B_pwf | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_pwf |
| STAT_0X4880_WERT | 0x4880 | STAT_0X4880_WERT | geringster Abstand zur Fehlerschwelle (MAX-Fehlerpfad) innerhalb des Leerlaufs (im Lifecycle) | % | etkhlmx | - | unsigned char | - | 200 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=etkhlmx |
| STAT_0X4881_WERT | 0x4881 | STAT_0X4881_WERT | geringster Abstand zur Fehlerschwelle (MAX-Fehlerpfad) ausserhalb des Leerlaufs (im Lifecycle) | % | etkhtmx | - | unsigned char | - | 200 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=etkhtmx |
| STAT_0X4890_WERT | 0x4890 | STAT_0X4890_WERT | Tprot-Status auslesen | - | BasUtil_stECUMode | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasUtil_stECUMode |
| STAT_0X4A02 | 0x4A02 | STAT_0X4A02 | ATL-Leckagediagnose läuft | 0/1 | B_atlberlek | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_atlberlek |
| STAT_0X4A0C_WERT | 0x4A0C | STAT_0X4A0C_WERT | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | wtfa2_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=wtfa2_w |
| STAT_0X4A17_WERT | 0x4A17 | STAT_0X4A17_WERT | Spannung Pumpenstrom Tankdiagnose | V | uptes_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=uptes_w |
| STAT_0X4A1B | 0x4A1B | STAT_0X4A1B | Freigabe der EKP-Versorgung | 0/1 | B_ekp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_ekp |
| STAT_0X4A1D_WERT | 0x4A1D | STAT_0X4A1D_WERT | Spannung Drucksensor Bremskraftverstärker | V | udsbkv_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=udsbkv_w |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | °C | tmotlinf | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tmotlinf |
| STAT_0X4A2B_WERT | 0x4A2B | STAT_0X4A2B_WERT | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w ergibt | °C | tfa1linf | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tfa1linf |
| STAT_0X4A2D_WERT | 0x4A2D | STAT_0X4A2D_WERT | Saugrohr-Absolutdruck gemessen | hPa | psrg_w | high | unsigned int | - | 20 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=psrg_w |
| ILUZ1 | 0x4A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | 1/s² | BasSvrAppl_LauZyl | high | int | - | 0,00710545201332983 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_LauZyl Array [0] |
| ILUZ2 | 0x4A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | 1/s² | BasSvrAppl_LauZyl | high | int | - | 0,00710545201332983 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_LauZyl Array [1] |
| ILUZ3 | 0x4A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | 1/s² | BasSvrAppl_LauZyl | high | int | - | 0,00710545201332983 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_LauZyl Array [2] |
| ILUZ4 | 0x4A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | 1/s² | BasSvrAppl_LauZyl | high | int | - | 0,00710545201332983 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_LauZyl Array [3] |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN | Bedingung für erkannte Klopfer | 0/1 | B_kl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_kl |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 1 | V | BasSvrAppl_SpaKloZyl | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_SpaKloZyl Array [0] |
| IUKZ2 | 0x4A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 2 | V | BasSvrAppl_SpaKloZyl | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_SpaKloZyl Array [1] |
| IUKZ3 | 0x4A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 3 | V | BasSvrAppl_SpaKloZyl | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_SpaKloZyl Array [2] |
| IUKZ4 | 0x4A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | normierter Referenzpegel Klopfregelung Zylinder 4 | V | BasSvrAppl_SpaKloZyl | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_SpaKloZyl Array [3] |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zuendwinkel Zylinder 1 | ° KW | BasSvrAppl_AusZun | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AusZun Array [0] |
| IZWZ2 | 0x4A4A | STAT_ZUENDWINKEL_ZYL2_WERT | Zuendwinkel Zylinder 2 | ° KW | BasSvrAppl_AusZun | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AusZun Array [1] |
| IZWZ3 | 0x4A4C | STAT_ZUENDWINKEL_ZYL3_WERT | Zuendwinkel Zylinder 3 | ° KW | BasSvrAppl_AusZun | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AusZun Array [2] |
| IZWZ4 | 0x4A4D | STAT_ZUENDWINKEL_ZYL4_WERT | Zuendwinkel Zylinder 4 | ° KW | BasSvrAppl_AusZun | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_AusZun Array [3] |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1 | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | B_sbbhk | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_sbbhk |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1 | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | B_hsha | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_hsha |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | B_hstlsua | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_hstlsua |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN | Bedingung Bremslichtschalter betätigt | 0/1 | B_bl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_bl |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN | Bedingung Bremstestschalter betätigt | 0/1 | B_br | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_br |
| ISAGK | 0x4A65 | STAT_ABGASKLAPPE_EIN | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_akr |
| ISMIL | 0x4A69 | STAT_MIL_EIN | MIL-Ansteuerung | 0/1 | B_mil | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_mil |
| ISFGR | 0x4A6A | STAT_LAMPE_FGR_EIN | Bedingung FGR (Tempomat) aktiv | 0/1 | B_fgr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_fgr |
| ISCEL | 0x4A6B | STAT_CHECK_ENGINE_LAMPE_EIN | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | B_epcl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_epcl |
| STAT_0X4A6C_WERT | 0x4A6C | STAT_0X4A6C_WERT | Korrekturfaktor für die Kraftstoffmenge | % | kva_korr | - | char | - | - | 1000 | - | - | 2C; 22 | - | - | A2L-NAME=kva_korr |
| IAKFT | 0x4A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Tastverhältnis Kennfeldthermostat | - | tkwpwm | high | int | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=tkwpwm |
| IATEV | 0x4A77 | STAT_TEV_PWM_WERT | ausgegebenes Tastverhltnis für Tankentlftungsventil (16 Bit) | % | tateout_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tateout_w |
| IAVEP | 0x4A7A | STAT_VANOS_EINLASS_PWM_WERT | Tastverhältnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwree_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tanwree_w |
| IAVAP | 0x4A7B | STAT_VANOS_AUSLASS_PWM_WERT | Tastverhältnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwraa_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tanwraa_w |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | fra_w | high | unsigned int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=fra_w |
| STAT_0X4A91_WERT | 0x4A91 | STAT_0X4A91_WERT | Amplitudenverhältnis laafh/laafv gefiltert | - | avkatf | - | unsigned char | - | - | 256 | - | - | 2C; 22 | - | - | A2L-NAME=avkatf |
| STAT_0X4A93_WERT | 0x4A93 | STAT_0X4A93_WERT | Absoluter Fehlerereigniszähler für unplausiblen Nullgangsensor | - | GbxNPos_ctDefPlausDia | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=GbxNPos_ctDefPlausDia |
| SANWA | 0x4A94 | STAT_NW_AUSLASS_SOLL_WERT | gespeicherter Nockenwellensollwinkel Auslaß | ° KW | wnwsswa_w | high | int | - | - | 128 | - | - | 2C; 22 | - | - | A2L-NAME=wnwsswa_w |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | adaptierte Referenzpositionen der Auslaßnockenwelle 1 | ° KW | EpmCaS_phiAdapRefPosO1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [0] |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle 1 | ° KW | EpmCaS_phiAdapRefPosI1_mp | high | int | - | 0,0219726562500054 | - | - | - | 2C; 22 | - | - | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [0] |
| STAT_0X4A97 | 0x4A97 | STAT_0X4A97 | Bedi. Vanos Einlass im Anschlag | 0/1 | B_vseansch | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_vseansch |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fofstat |
| STAT_0X4A9D_WERT | 0x4A9D | STAT_0X4A9D_WERT | multiplikative Gemischkorrektur der Gemischadaption | - | frai_w | high | unsigned int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=frai_w |
| IDSLS | 0x4AA1 | STAT_SLS_DIAGNOSE_WERT | Zyklusflag: Tankentlüftungsventil Endstufe | - | Z_teve_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Z_teve_byte |
| IDLSS | 0x4AA4 | STAT_LS_DIAGNOSE_WERT | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | llsstat | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=llsstat |
| STAT_0X4AAA_WERT | 0x4AAA | STAT_0X4AAA_WERT | Tastverhältnis PWM Ansteuerung Öldruck | % | tvpoel_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tvpoel_w |
| STAT_0X4AAB_WERT | 0x4AAB | STAT_0X4AAB_WERT | Tastverhältnis an Endstufe des Ladedruckstellers | % | tvldste_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tvldste_w |
| STAT_0X4AB0_WERT | 0x4AB0 | STAT_0X4AB0_WERT | Ladedruck- Sollwert | hPa | psolldr_w | high | unsigned int | - | 10 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=psolldr_w |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg_w | high | unsigned int | - | 512 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=vfzg_w |
| STAT_0X4AB3_WERT | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Zähler für gefahrene Kilometer mit MIL EIN | km | DSMDur_ctPID21h | high | unsigned long | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=DSMDur_ctPID21h |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Verriegelung Codierbereich per Testerjob Wert aus top_l übernommen | s | topcod_l | high | unsigned long | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=topcod_l |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Drucksensor Saugrohrdruck (word) | V | udss_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=udss_w |
| IMLUF | 0x4ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert (Word) | kg/h | ml_w | high | unsigned int | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=ml_w |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV | Bedingung automatischer Start | 0/1 | B_sta | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_sta |
| STAT_0X4AC2_WERT | 0x4AC2 | STAT_0X4AC2_WERT | Reset Information / Adresse an der der letzte Reset ausgelöst wurde | - | Reset_Env.adLoc | high | unsigned long | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Reset_Env.adLoc |
| STAT_0X4ACC_WERT | 0x4ACC | STAT_0X4ACC_WERT | Luftklappe - Sollposition in Schritten | - | RadSht_StpEng | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_StpEng |
| STAT_0X4ACD_WERT | 0x4ACD | STAT_0X4ACD_WERT | Luftklappe - Istposition in Schritten | - | ShtrEcu_StpEngPos | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ShtrEcu_StpEngPos |
| STAT_0X4ACE_WERT | 0x4ACE | STAT_0X4ACE_WERT | Luftklappe - Sollposition in Grad | - | RadSht_phiPosDes | - | unsigned char | - | 128 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_phiPosDes |
| STAT_0X4ACF_WERT | 0x4ACF | STAT_0X4ACF_WERT | Luftklappe - Istposition in Grad | - | RadSht_phiPos | - | unsigned char | - | 128 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_phiPos |
| STAT_0X4AD0_WERT | 0x4AD0 | STAT_0X4AD0_WERT | Luftklappe - Diagnosestatus allgemein | - | RadSht_stDiagGen | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_stDiagGen |
| STAT_0X4AD1_WERT | 0x4AD1 | STAT_0X4AD1_WERT | Luftklappe - Diagnosestatus obere Luftklappe | - | RadSht_stDiagAKKS | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_stDiagAKKS |
| STAT_0X4AD2_WERT | 0x4AD2 | STAT_0X4AD2_WERT | Luftklappe - Status obere Luftklappe | - | RadSht_stDiagAbvAirVlv | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_stDiagAbvAirVlv |
| STAT_0X4AD3_WERT | 0x4AD3 | STAT_0X4AD3_WERT | Luftklappe - Status untere Luftklappe | - | RadSht_stDiagBntAirVlv | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_stDiagBntAirVlv |
| STAT_0X4AD4_WERT | 0x4AD4 | STAT_0X4AD4_WERT | Luftklappe - Varianteninfo vom Steller | - | ShtrEcu_stVrs | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ShtrEcu_stVrs |
| STAT_0X4AD5_WERT | 0x4AD5 | STAT_0X4AD5_WERT | Kraftstofftemperatur | °C | tkrst | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tkrst |
| STAT_0X4AD6 | 0x4AD6 | STAT_0X4AD6 | Bedingung Schubabschalten | 0/1 | B_sa | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_sa |
| STAT_0X4AE2 | 0x4AE2 | STAT_0X4AE2_WERT | Reset Information / Reset-Gruppen-ID der letzten Resetursache | - | Reset_Env.xGrp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Reset_Env.xGrp |
| STAT_0X4AE3 | 0x4AE3 | STAT_0X4AE3_WERT | Reset Information / Reset-ID der letzten Resetursache | - | Reset_Env.xId | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Reset_Env.xId |
| STAT_0X4AE4_WERT | 0x4AE4 | STAT_0X4AE4_WERT | Reset Information / Benutzer spezifischer Wert der letzten Resetursache | - | Reset_Env.xUserValue | high | unsigned long | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Reset_Env.xUserValue |
| STAT_0X4AEB_WERT | 0x4AEB | STAT_0X4AEB_WERT | Motortemperatur < 98°C | % | tmotb1_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tmotb1_w |
| STAT_0X4AEC_WERT | 0x4AEC | STAT_0X4AEC_WERT | Motortemperatur zwischen 98°C und 112°C | % | tmotb2_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tmotb2_w |
| STAT_0X4AED_WERT | 0x4AED | STAT_0X4AED_WERT | Motortemperatur zwischen 113°C und 120°C | % | tmotb3_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tmotb3_w |
| STAT_0X4AEE_WERT | 0x4AEE | STAT_0X4AEE_WERT | Motortemperatur zwischen 121°C und 125°C | % | tmotb4_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tmotb4_w |
| STAT_0X4AEF_WERT | 0x4AEF | STAT_0X4AEF_WERT | Motortemperatur > 125°C | % | tmotb5_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tmotb5_w |
| STAT_0X4AF0_WERT | 0x4AF0 | STAT_0X4AF0_WERT | Temperatur <80°C | % | toelb1_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=toelb1_w |
| STAT_0X4AF1_WERT | 0x4AF1 | STAT_0X4AF1_WERT | 80°C =< Temperatur <= 110°C | % | toelb2_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=toelb2_w |
| STAT_0X4AF2_WERT | 0x4AF2 | STAT_0X4AF2_WERT | 110°C =< Temperatur <= 135°C | % | toelb3_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=toelb3_w |
| STAT_0X4AF3_WERT | 0x4AF3 | STAT_0X4AF3_WERT | 135°C =< Temperatur <= 150°C | % | toelb4_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=toelb4_w |
| STAT_0X4AF4_WERT | 0x4AF4 | STAT_0X4AF4_WERT | Temperatur > 150°C | % | toelb5_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=toelb5_w |
| STAT_0X4AF5_WERT | 0x4AF5 | STAT_0X4AF5_WERT | Getriebetemperatur < 80°C | % | tgetb1_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tgetb1_w |
| STAT_0X4AF6_WERT | 0x4AF6 | STAT_0X4AF6_WERT | Getriebetemperatur zwischen 80°C und 109°C | % | tgetb2_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tgetb2_w |
| STAT_0X4AF7_WERT | 0x4AF7 | STAT_0X4AF7_WERT | Getriebetemperatur zwischen 110°C und 124°C | % | tgetb3_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tgetb3_w |
| STAT_0X4AF8_WERT | 0x4AF8 | STAT_0X4AF8_WERT | Getriebetemperatur zwischen 125°C und 129°C | % | tgetb4_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tgetb4_w |
| STAT_0X4AF9_WERT | 0x4AF9 | STAT_0X4AF9_WERT | Getriebetemperatur > 129°C | % | tgetb5_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tgetb5_w |
| STAT_0X4AFA_WERT | 0x4AFA | STAT_0X4AFA_WERT | Umgebungstemperatur < 3°C | % | tumgb1_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tumgb1_w |
| STAT_0X4AFB_WERT | 0x4AFB | STAT_0X4AFB_WERT | Umgebungstemperatur zwischen 3°C und 19°C | % | tumgb2_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tumgb2_w |
| STAT_0X4AFC_WERT | 0x4AFC | STAT_0X4AFC_WERT | Umgebungstemperatur zwischen 20°C und 29°C | % | tumgb3_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tumgb3_w |
| STAT_0X4AFD_WERT | 0x4AFD | STAT_0X4AFD_WERT | Umgebungstemperatur zwischen 30°C und 39°C | % | tumgb4_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tumgb4_w |
| STAT_0X4AFE_WERT | 0x4AFE | STAT_0X4AFE_WERT | Umgebungstemperatur > 39°C | % | tumgb5_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tumgb5_w |
| STAT_0X4B10_WERT | 0x4B10 | STAT_0X4B10_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 1 und Lastbereich 1 | - | iskn1r1_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn1r1_w |
| STAT_0X4B11_WERT | 0x4B11 | STAT_0X4B11_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 1 und Lastbereich 2 | - | iskn1r2_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn1r2_w |
| STAT_0X4B12_WERT | 0x4B12 | STAT_0X4B12_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 1 und Lastbereich 3 | - | iskn1r3_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn1r3_w |
| STAT_0X4B13_WERT | 0x4B13 | STAT_0X4B13_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 2 und Lastbereich 1 | - | iskn2r1_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn2r1_w |
| STAT_0X4B14_WERT | 0x4B14 | STAT_0X4B14_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 2 und Lastbereich 2 | - | iskn2r2_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn2r2_w |
| STAT_0X4B15_WERT | 0x4B15 | STAT_0X4B15_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 2 und Lastbereich 3 | - | iskn2r3_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn2r3_w |
| STAT_0X4B20_WERT | 0x4B20 | STAT_0X4B20_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 3 und Lastbereich 1 | - | iskn3r1_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn3r1_w |
| STAT_0X4B21_WERT | 0x4B21 | STAT_0X4B21_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 3 und Lastbereich 2 | - | iskn3r2_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn3r2_w |
| STAT_0X4B22_WERT | 0x4B22 | STAT_0X4B22_WERT | Superklopfen Ereigniszähler der Einspritzausblendung für Drehzahlbereich 3 und Lastbereich 3 | - | iskn3r3_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=iskn3r3_w |
| STAT_0X4B23_WERT | 0x4B23 | STAT_0X4B23_WERT | Zaehler Aussetzerkennung Zylinder 1 | - | BasSvrAppl_ZahAussZyl | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_ZahAussZyl Array [0] |
| STAT_0X4B24_WERT | 0x4B24 | STAT_0X4B24_WERT | Zaehler Aussetzerkennung Zylinder 2 | - | BasSvrAppl_ZahAussZyl | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_ZahAussZyl Array [1] |
| STAT_0X4B25_WERT | 0x4B25 | STAT_0X4B25_WERT | Zaehler Aussetzerkennung Zylinder 3 | - | BasSvrAppl_ZahAussZyl | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_ZahAussZyl Array [2] |
| STAT_0X4B30_WERT | 0x4B30 | STAT_0X4B30_WERT | Zaehler Aussetzerkennung Zylinder 4 | - | BasSvrAppl_ZahAussZyl | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_ZahAussZyl Array [3] |
| STAT_0X5800_WERT | 0x5800 | STAT_0X5800_WERT | Zeitzähler ab Startende (16bit) | s | tnse_w | high | unsigned int | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=tnse_w |
| STAT_0X5801_WERT | 0x5801 | STAT_0X5801_WERT | Umgebungsdruck | hPa | pu | - | unsigned char | - | 5 | - | - | - | 2C; 22 | - | - | A2L-NAME=pu |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | CARB FREEZE FRAME Byte, Bank 1, für LR | - | flglrs | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=flglrs |
| ILMAR | 0x5804 | STAT_LUFTMASSE_RELATIV_WERT | relative Luftmasse (calc. load value) nach SAE J1979 | % | rml | - | unsigned char | - | 100 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=rml |
| ITMOT | 0x5805 | STAT_MOTORTEMPERATUR_LINEAR_WERT | Motortemperatur, linearisiert und umgerechnet | °C | tmotlin | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tmotlin |
| IINT1 | 0x5806 | STAT_INTEGRATOR_BANK1_WERT | Lambda-Regler-Ausgang (Word) | - | fr_w | high | unsigned int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=fr_w |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Faktor aus Lambdaregelungsadaption für Bank 1 | - | frann_w | high | unsigned int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=frann_w |
| STAT_0X580A_WERT | 0x580A | STAT_0X580A_WERT | Sensor Temperatur | °C | RISECU_tSens | high | unsigned int | - | 0,09375 | - | 5,0 | - | 2C; 22 | - | - | A2L-NAME=RISECU_tSens |
| IPSAU | 0x580B | STAT_SAUGROHRDRUCK_WERT | Saugrohr-Absolutdruck (Word) | hPa | ps_w | high | unsigned int | - | 10 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=ps_w |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Motordrehzahl | 1/min | nmot | - | unsigned char | - | 40 | - | - | - | 2C; 22 | - | - | A2L-NAME=nmot |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg | - | unsigned char | - | 1,25 | - | - | - | 2C; 22 | - | - | A2L-NAME=vfzg |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündwinkel Zylinder 1 | ° KW | zwzyl1 | - | char | - | 191,25 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=zwzyl1 |
| ITANS | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansaugluft-Temperatur | °C | tans | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tans |
| STAT_0X5810_WERT | 0x5810 | STAT_0X5810_WERT | Aktualität Minimumwarnung | - | B_onausg25erkannt_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_onausg25erkannt_byte |
| STAT_0X5811_WERT | 0x5811 | STAT_0X5811_WERT | Relatives Motorölniveau in cl über Minimum | cl | SwSABMW_clRelOilLvl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_clRelOilLvl |
| ILMKG | 0x5812 | STAT_LUFTMASSE_WERT | Massenstrom HFM 16-Bit Größe | kg/h | mshfm_w | high | unsigned int | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=mshfm_w |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | relative Luftfüllung | % | rl | - | unsigned char | - | 0,75 | - | - | - | 2C; 22 | - | - | A2L-NAME=rl |
| STAT_0X5814_WERT | 0x5814 | STAT_0X5814_WERT | Normierter Fahrpedalwinkel | % | wped | - | unsigned char | - | 100 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=wped |
| IUK87 | 0x5815 | STAT_KL87_SPANNUNG_WERT | Batteriespannung | V | ub | - | unsigned char | - | 0,0942 | - | - | - | 2C; 22 | - | - | A2L-NAME=ub |
| STAT_0X5816_WERT | 0x5816 | STAT_0X5816_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | lamsons_w | high | unsigned int | - | 16 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=lamsons_w |
| ITUMG | 0x5817 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | tumg | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tumg |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmassenfluß | kg/h | ml | - | unsigned char | - | 4 | - | - | - | 2C; 22 | - | - | A2L-NAME=ml |
| STAT_0X5819_WERT | 0x5819 | STAT_0X5819_WERT | Mittlere Motordrehzahl über ein Zylindersegment | 1/min | Epm_nEng | high | int | - | - | 2 | - | - | 2C; 22 | - | - | A2L-NAME=Epm_nEng |
| ISNWE | 0x581A | STAT_NW_EINLASSSPREIZUNG_WERT | Winkel Einlassventil oeffnet bezogen auf LWOT | ° KW | wnwe_w | high | int | - | - | 128 | - | - | 2C; 22 | - | - | A2L-NAME=wnwe_w |
| STAT_0X581B_WERT | 0x581B | STAT_0X581B_WERT | Sollwinkel Nockenwelle Einlass öffnet | ° KW | wnwse_w | high | int | - | - | 128 | - | - | 2C; 22 | - | - | A2L-NAME=wnwse_w |
| ISNWA | 0x581C | STAT_NW_AUSLASSSPREIZUNG_WERT | Winkel Auslassventil schließt bezogen auf LWOT | ° KW | wnwa_w | high | int | - | - | 128 | - | - | 2C; 22 | - | - | A2L-NAME=wnwa_w |
| STAT_0X581D_WERT | 0x581D | STAT_0X581D_WERT | Sollwinkel Nockenwelle Auslass schließt | ° KW | wnwsa_w | high | int | - | - | 128 | - | - | 2C; 22 | - | - | A2L-NAME=wnwsa_w |
| RTANS | 0x581E | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Ansauglufttemperatur, linearisiert und umgerechnet | °C | tanslin | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tanslin |
| STAT_0X581F_WERT | 0x581F | STAT_0X581F_WERT | Kilometerstand bei der Erkennung Ölniveau am Minimum | km | onausgkmalt_w | high | unsigned int | - | 10 | - | - | - | 2C; 22 | - | - | A2L-NAME=onausgkmalt_w |
| STAT_0X5820_WERT | 0x5820 | STAT_0X5820_WERT | Status Klemme 15 | - | B_kl15_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_kl15_byte |
| STAT_0X5821_WERT | 0x5821 | STAT_0X5821_WERT | Steuergerätetemperatur | °C | tsg | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tsg |
| STAT_0X5822_WERT | 0x5822 | STAT_0X5822_WERT | Öltemperatur | °C | toel | - | unsigned char | - | - | - | -60,0 | - | 2C; 22 | - | - | A2L-NAME=toel |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Abstellzeit | s | tabst_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=tabst_w |
| STAT_0X5824_WERT | 0x5824 | STAT_0X5824_WERT | aktueller Fehlerstatus E-Maschine | - | stisgusmdiag_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=stisgusmdiag_w |
| STAT_0X5825_WERT | 0x5825 | STAT_0X5825_WERT | Spannung | V | BcuEcu_u | high | int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=BcuEcu_u |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappenwinkel aus Poti 1 | % DK | wdk1 | - | unsigned char | - | 100 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=wdk1 |
| IAHV1 | 0x5827 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Tastverhältnis für Lambdasondenheizung | % | tahrlsu_w | high | unsigned int | - | 200 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=tahrlsu_w |
| IAHN1 | 0x5829 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=phlsnh |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomentaufnahme des Wandlers über CAN | % | mdwancan_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=mdwancan_w |
| STAT_0X582C_WERT | 0x582C | STAT_0X582C_WERT | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | lamzak_w | high | unsigned int | - | 16 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=lamzak_w |
| STAT_0X582D_WERT | 0x582D | STAT_0X582D_WERT | Korrekturwert der LSU-Spannung vor Kat | V | kusvk_w | high | int | - | - | 2048 | - | - | 2C; 22 | - | - | A2L-NAME=kusvk_w |
| STAT_0X582E_WERT | 0x582E | STAT_0X582E_WERT | Bei 8HP AT-Getrieben modellierte Getriebeöltemperatur am Wandleraustritt im Falle mech. elekr. Notprogramm | °C | SwSABMW_tTrsmModLimp | high | int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_tTrsmModLimp |
| STAT_0X582F_WERT | 0x582F | STAT_0X582F_WERT | Abgastemperatur nach Katalysator aus Modell | °C | tkatm | - | unsigned char | - | 5 | - | -50,0 | - | 2C; 22 | - | - | A2L-NAME=tkatm |
| STAT_0X5830_WERT | 0x5830 | STAT_0X5830_WERT | Dynamikwert der LSU | - | dynlsu_w | high | unsigned int | - | 16 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=dynlsu_w |
| IMOST | 0x5832 | STAT_MOTOR_STATUS | Motorzustand | 0-n | CoEng_st | - | unsigned char | T_STATE_ENG_DOP | - | - | - | - | 2C; 22 | - | - | A2L-NAME=CoEng_st |
| STAT_0X5833_WERT | 0x5833 | STAT_0X5833_WERT | Statusbyte zur Beschreibung On_oelniveau | - | SwSABMW_stOilLvlDescr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_stOilLvlDescr |
| STAT_0X5834_WERT | 0x5834 | STAT_0X5834_WERT | Umgebungsdruck von Sensor | hPa | pur_w | high | unsigned int | - | 10 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=pur_w |
| VGENH | 0x5835 | STAT_GENERATOR_HERSTELLERCODE_WERT | Hersteller-Kennung | - | isgusmherst | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=isgusmherst |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | gefilterter Drehzahlgradient | 1/min/s | ngfil | - | char | - | 100 | - | - | - | 2C; 22 | - | - | A2L-NAME=ngfil |
| STAT_0X5837_WERT | 0x5837 | STAT_0X5837_WERT | Sollwert Raildruckregelung | MPa | prsoll_w | high | unsigned int | - | 5 | 10000 | - | - | 2C; 22 | - | - | A2L-NAME=prsoll_w |
| STAT_0X5838_WERT | 0x5838 | STAT_0X5838_WERT | Referenzmoment für Aussetzererkennung | % | midmd | - | unsigned char | - | 100 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=midmd |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Bedingung Sicherheitskraftstoffabschaltung (SKA) | - | B_dkpu_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_dkpu_byte |
| STAT_0X583A_WERT | 0x583A | STAT_0X583A_WERT | Ansaugluft-Temperatur bei Start | °C | tansst | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tansst |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Fuellstand Kraftstofftank | l | fstt | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fstt |
| STAT_0X583C_WERT | 0x583C | STAT_0X583C_WERT | Batteriespannung vom AD-Wandler erfasster Wert | V | wub | - | unsigned char | - | 0,0942 | - | - | - | 2C; 22 | - | - | A2L-NAME=wub |
| STAT_0X583D_WERT | 0x583D | STAT_0X583D_WERT | Operating time | min | top_w | high | unsigned int | - | 6 | - | - | - | 2C; 22 | - | - | A2L-NAME=top_w |
| STAT_0X583E_WERT | 0x583E | STAT_0X583E_WERT | Dauer-RAM: Sollwert DK-Winkel in NLP-Stellung, bez. auf UMA | % DK | wdknlpr_w | high | unsigned int | - | 100 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=wdknlpr_w |
| STAT_0X583F_WERT | 0x583F | STAT_0X583F_WERT | Sollwert DK-Winkel, bezogen auf unteren Anschlag | % DK | wdks | - | unsigned char | - | 100 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=wdks |
| STAT_0X5840_WERT | 0x5840 | STAT_0X5840_WERT | DK-Winkel der Notluftposition | % DK | wdknlp_w | high | unsigned int | - | 100 | 65535 | - | - | 2C; 22 | - | - | A2L-NAME=wdknlp_w |
| IUSGI | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Wert Temperatur Steuergerät | V | wtsg | - | unsigned char | - | 5 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=wtsg |
| VGTYP | 0x5842 | STAT_GENERATOR_TYP_WERT | Maschinen-Kennung | - | isgusmmakenn | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=isgusmmakenn |
| STAT_0X5843_WERT | 0x5843 | STAT_0X5843_WERT | Tester-Ausgabe-Bit für B_staanf | - | B_staanf_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_staanf_byte |
| ITGEE | 0x5844 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur der Maschine | °C | isgusmtchip_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=isgusmtchip_w |
| IUSV1 | 0x5845 | STAT_SONDENSPANNUNG_VORKAT_WERT | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | uulsuv_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=uulsuv_w |
| IUPW1 | 0x5846 | STAT_PWG1_SPANNUNG_WERT | Spannung PWG-Poti 1 (Word) | V | upwg1_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=upwg1_w |
| IUPW2 | 0x5847 | STAT_PWG2_SPANNUNG_WERT | Spannung PWG-Poti 2 (Word) | V | upwg2_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=upwg2_w |
| IUSN1 | 0x5849 | STAT_SONDENSPANNUNG_NACHKAT_WERT | Spannung Lambdasonde (4.88mV/LSB) hinter Katalysator | V | ushk_w | high | unsigned int | - | 5 | 1024 | -1,0 | - | 2C; 22 | - | - | A2L-NAME=ushk_w |
| STAT_0X584A_WERT | 0x584A | STAT_0X584A_WERT | aktueller Status E-Maschine | - | stisgusmstatus_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=stisgusmstatus_w |
| IUDK2 | 0x584C | STAT_DK2_SPANNUNG_WERT | Spannung DK-Poti 2 | V | udkp2_w | high | unsigned int | - | 80 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=udkp2_w |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Massenstrom Tankentlüftung in das Saugrohr | kg/h | mste_w | high | unsigned int | - | 25,6 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=mste_w |
| IUDK1 | 0x584E | STAT_DK1_SPANNUNG_WERT | Spannung DK-Poti 1 | V | udkp1_w | high | unsigned int | - | 80 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=udkp1_w |
| STAT_0X584F_WERT | 0x584F | STAT_0X584F_WERT | Umweltbedingung BNS-Fehler | - | statbnserr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=statbnserr |
| IUKUM | 0x5850 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Signalspannung des Kühlmitteltemperatursensor | V | utcw_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=utcw_w |
| IULMM | 0x5851 | STAT_LUFTMASSE_WERT | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | wtfa2_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=wtfa2_w |
| STAT_0X5852_WERT | 0x5852 | STAT_0X5852_WERT | Strom | A | BattuEcu_i | high | unsigned int | - | - | 50 | -200,0 | - | 2C; 22 | - | - | A2L-NAME=BattuEcu_i |
| STAT_0X5853_WERT | 0x5853 | STAT_0X5853_WERT | Spannung | V | BattuEcu_u | high | unsigned int | - | - | 1000 | - | - | 2C; 22 | - | - | A2L-NAME=BattuEcu_u |
| STAT_0X5854_WERT | 0x5854 | STAT_0X5854_WERT | Temperatur | °C | BattuEcu_t | - | unsigned char | - | 3 | 4 | -48,0 | - | 2C; 22 | - | - | A2L-NAME=BattuEcu_t |
| STAT_0X5855_WERT | 0x5855 | STAT_0X5855_WERT | schneller Mittelwert des Lambdaregelfaktors (Word) | - | frm_w | high | unsigned int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=frm_w |
| IIEGE | 0x5857 | STAT_0X5857_WERT | Erregerstrom Maschine | A | isgusmierr_w | high | unsigned int | - | 0,00125 | - | - | - | 2C; 22 | - | - | A2L-NAME=isgusmierr_w |
| STAT_0X5858_WERT | 0x5858 | STAT_0X5858_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | wdkba | - | unsigned char | - | 100 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=wdkba |
| STAT_0X5862_WERT | 0x5862 | STAT_0X5862_WERT | Sollwert Öldruck | kPa | poels_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=poels_w |
| STAT_0X5865_WERT | 0x5865 | STAT_0X5865_WERT | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | oznivlangt | - | unsigned char | - | 75 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=oznivlangt |
| STAT_0X5866_WERT | 0x5866 | STAT_0X5866_WERT | Relativer Füllstand des Motoröls | - | oelstandr | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=oelstandr |
| STAT_0X5867_WERT | 0x5867 | STAT_0X5867_WERT | Fahrstrecke des Fahrzeugs als Information über CAN | km | kmstand | high | unsigned int | - | 10 | - | - | - | 2C; 22 | - | - | A2L-NAME=kmstand |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | statsvreg1 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=statsvreg1 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | statsvreg2 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=statsvreg2 |
| IUIBS | 0x586A | STAT_UBATT_IBS_WERT | aktuelle Batteriespannung | V | ubatt_w | high | unsigned int | - | 0,00025 | - | 6,0 | - | 2C; 22 | - | - | A2L-NAME=ubatt_w |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | t2hstshort | - | unsigned char | - | 224 | 15 | - | - | 2C; 22 | - | - | A2L-NAME=t2hstshort |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | t3hstshort | - | unsigned char | - | 224 | 15 | - | - | 2C; 22 | - | - | A2L-NAME=t3hstshort |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | t4hstshort | - | unsigned char | - | 224 | 15 | - | - | 2C; 22 | - | - | A2L-NAME=t4hstshort |
| STAT_0X586F_WERT | 0x586F | STAT_0X586F_WERT | Öldruck | hPa | poel_w | high | int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=poel_w |
| IUUMG | 0x5870 | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | udsu_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=udsu_w |
| STAT_0X5871_WERT | 0x5871 | STAT_0X5871_WERT | Zähler Prüfzustand für DVESTANZNMOT | - | dvestanznmotctr | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=dvestanznmotctr |
| STAT_0X5874_WERT | 0x5874 | STAT_0X5874_WERT | ADC-Spannung Pumpenstrom Tankdiagnose | V | urptes_w | high | unsigned int | - | 80 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=urptes_w |
| STAT_0X5875_WERT | 0x5875 | STAT_0X5875_WERT | Soll-Motormoment MSR für schnellen Eingriff | Nm | mdradmsrs_w | high | int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=mdradmsrs_w |
| STAT_0X5876_WERT | 0x5876 | STAT_0X5876_WERT | Ungefilterter Hochdruck Rohwert (relativ Druck) | MPa | prrohr_w | high | unsigned int | - | 5 | 10000 | - | - | 2C; 22 | - | - | A2L-NAME=prrohr_w |
| STAT_0X5877_WERT | 0x5877 | STAT_0X5877_WERT | Rotorwinkel des VVT Motors | ° | vvtrotwn_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvtrotwn_w |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | I-Anteil der stetigen LRHK | - | dlahi_w | high | int | - | - | 32768 | - | - | 2C; 22 | - | - | A2L-NAME=dlahi_w |
| STAT_0X587B_WERT | 0x587B | STAT_0X587B_WERT | Vom Lageregler einzustellender VVT Motorstrom | A | ivvtlrs_w | high | int | - | 400 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=ivvtlrs_w |
| STAT_0X587C_WERT | 0x587C | STAT_0X587C_WERT | Periodendauer des Nullgangsensorsognals | ms | GbxNPos_tiPwmPer | high | unsigned int | - | - | 10000 | - | - | 2C; 22 | - | - | A2L-NAME=GbxNPos_tiPwmPer |
| STAT_0X587D_WERT | 0x587D | STAT_0X587D_WERT | Status Nullgangerkennung | - | stngang | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=stngang |
| STAT_0X587E_WERT | 0x587E | STAT_0X587E_WERT | Motortemperatur-Referenzwert aus Modell | °C | tmrw | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tmrw |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | taml | - | unsigned char | - | 100 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=taml |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=gangi |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motorstarttemperatur | °C | tmst | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tmst |
| STAT_0X5883_WERT | 0x5883 | STAT_0X5883_WERT | Spannung Klopfwerte Zylinder 1 | V | BasSvrAppl_rkr_w | high | unsigned int | - | 5 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_rkr_w Array [0] |
| STAT_0X5885_WERT | 0x5885 | STAT_0X5885_WERT | Spannung Klopfwerte Zylinder 2 | V | BasSvrAppl_rkr_w | high | unsigned int | - | 5 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_rkr_w Array [1] |
| STAT_0X5886_WERT | 0x5886 | STAT_0X5886_WERT | Spannung Klopfwerte Zylinder 3 | V | BasSvrAppl_rkr_w | high | unsigned int | - | 5 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_rkr_w Array [2] |
| IGENA | 0x5887 | STAT_0X5887_WERT | Auslastung der Maschine | - | isgusmdf_w | high | unsigned int | - | - | 200 | - | - | 2C; 22 | - | - | A2L-NAME=isgusmdf_w |
| STAT_0X5888_WERT | 0x5888 | STAT_0X5888_WERT | Spannung Klopfwerte Zylinder 4 | V | BasSvrAppl_rkr_w | high | unsigned int | - | 5 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_rkr_w Array [3] |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert | - | lamsoni_w | high | unsigned int | - | 16 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=lamsoni_w |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit nach Startende | s | tnst_w | high | unsigned int | - | 0,01 | - | - | - | 2C; 22 | - | - | A2L-NAME=tnst_w |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur der LSU | °C | tkerlsu_w | high | unsigned int | - | 0,0234375 | - | -273,15 | - | 2C; 22 | - | - | A2L-NAME=tkerlsu_w |
| STAT_0X5890_WERT | 0x5890 | STAT_0X5890_WERT | Temperatur Motorkühlerausgang (Kühlmittel) | °C | tka | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tka |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Kupplungsmotormoment Istwert | Nm | mkist_w | high | int | - | 0,5 | - | - | - | 2C; 22 | - | - | A2L-NAME=mkist_w |
| STAT_0X5892_WERT | 0x5892 | STAT_0X5892_WERT | Differenz zwischen Umgebungsdruck und Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | dpbkvur_w | high | int | - | 10 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=dpbkvur_w |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | migs_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=migs_w |
| STAT_0X5896_WERT | 0x5896 | STAT_0X5896_WERT | Abgastemperatur hinter Hauptkat aus Modell | °C | tanhkm_w | high | unsigned int | - | 0,0234375 | - | -273,15 | - | 2C; 22 | - | - | A2L-NAME=tanhkm_w |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Vorgabe Maschinen-Sollspannung | V | Isgusmusoll | high | unsigned int | - | - | 1000 | - | - | 2C; 22 | - | - | A2L-NAME=Isgusmusoll |
| STAT_0X5899_WERT | 0x5899 | STAT_0X5899_WERT | Tester-Ausgabe-Bit für B_amtr | - | B_amtr_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_amtr_byte |
| STAT_0X589A_WERT | 0x589A | STAT_0X589A_WERT | Tastverhältnis Nullgangsensor | % | tngang_w | high | unsigned int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=tngang_w |
| STAT_0X589B_WERT | 0x589B | STAT_0X589B_WERT | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | - | B_ivvtkse_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_ivvtkse_byte |
| STAT_0X589C_WERT | 0x589C | STAT_0X589C_WERT | Bedingung Freigabe VVT-Endstufe | - | B_vvten_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_vvten_byte |
| STAT_0X589D_WERT | 0x589D | STAT_0X589D_WERT | Anzahl erkannter VVT Lageregelungsfehler | - | vvt_deviation | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvt_deviation |
| STAT_0X589E_WERT | 0x589E | STAT_0X589E_WERT | Sollwert Exzenterwinkel VVT | ° | exwinks_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwinks_w |
| STAT_0X589F_WERT | 0x589F | STAT_0X589F_WERT | Batterietemperatur | °C | tbatt | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tbatt |
| STAT_0X58A0_WERT | 0x58A0 | STAT_0X58A0_WERT | Entladung während Ruhestromverletzung | Ah | qiruhe2_w | high | unsigned int | - | 65536 | 3600000 | - | - | 2C; 22 | - | - | A2L-NAME=qiruhe2_w |
| ISKME | 0x58A1 | STAT_KILOMETERSTAND_WERT | Wegstrecke_km auf 1km genau | - | kmstand_l | high | unsigned long | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=kmstand_l |
| STAT_0X58A2_WERT | 0x58A2 | STAT_0X58A2_WERT | Istwert Exzenterwinkel VVT | ° | exwnki_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwnki_w |
| STAT_0X58A3_WERT | 0x58A3 | STAT_0X58A3_WERT | rel. Exzenterwinkel am oberen mech. Anschlag | ° | exwnkoar_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwnkoar_w |
| STAT_0X58A4_WERT | 0x58A4 | STAT_0X58A4_WERT | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible | - | vvt_highcurrent | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvt_highcurrent |
| STAT_0X58A5_WERT | 0x58A5 | STAT_0X58A5_WERT | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversible | - | vvt_highcurrent_rev | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvt_highcurrent_rev |
| STAT_0X58A6_WERT | 0x58A6 | STAT_0X58A6_WERT | Relativer Exzenterwinkel ohnd Bezug auf einen Anschlag | ° | exwnkr_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwnkr_w |
| IZMAB | 0x58A7 | STAT_MOTORABSTELLZEIT_WERT | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | tabsmn_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=tabsmn_w |
| STAT_0X58A8_WERT | 0x58A8 | STAT_0X58A8_WERT | rel. Exzenterwinkel am unteren mech. Anschlag | ° | exwnkuar_w | high | int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwnkuar_w |
| STAT_0X58A9_WERT | 0x58A9 | STAT_0X58A9_WERT | VVT Verstellbereich aus Urlernvorgang | ° | exwnkvb_ur_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwnkvb_ur_w |
| STAT_0X58AA_WERT | 0x58AA | STAT_0X58AA_WERT | Verstellbereich des Exzenterwinkels | ° | exwnkvb_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=exwnkvb_w |
| STAT_0X58AB_WERT | 0x58AB | STAT_0X58AB_WERT | DLR für DV-E: Summe der PID-Anteile | % | dlrspid_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=dlrspid_w |
| STAT_0X58AC_WERT | 0x58AC | STAT_0X58AC_WERT | Klemmenspannung E-Maschine | V | SwSABMW_uTermEmac | high | unsigned int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_uTermEmac |
| STAT_0X58AD_WERT | 0x58AD | STAT_0X58AD_WERT | Sauerstoffspeichervermögen des Katalysators, temperatur- und luftmassenstrombezogen | mg | oscdktt_w | high | unsigned int | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=oscdktt_w |
| STAT_0X58AE_WERT | 0x58AE | STAT_0X58AE_WERT | Peridendauer für Massenstrom aus HFM | µs | tpmshfm_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=tpmshfm_w |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | EKP-Sollvolumenstrom | l | vssekp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vssekp |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | Zähler für Lerndauer eines Lernsteps | - | lrnstep_c | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=lrnstep_c |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | BasSvrAppl_Fun_Zyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Fun_Zyl Array [0] |
| IZFZ2 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | BasSvrAppl_Fun_Zyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Fun_Zyl Array [1] |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | BasSvrAppl_Fun_Zyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Fun_Zyl Array [2] |
| IZFZ4 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | BasSvrAppl_Fun_Zyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_Fun_Zyl Array [3] |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | aktueller Bremsdruck | hPa | pbrems | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=pbrems |
| STAT_0X58B8_WERT | 0x58B8 | STAT_0X58B8_WERT | Motordrehzahl in der Funktionsüberwachung | 1/min | MoF_nEng | - | unsigned char | - | 40 | - | - | - | 2C; 22 | - | - | A2L-NAME=MoF_nEng |
| STAT_0X58B9_WERT | 0x58B9 | STAT_0X58B9_WERT | plausibilisierte Fahrpedalspannung in der Funktionsüberwachung | V | MoF_uAPP | - | unsigned char | - | 5 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=MoF_uAPP |
| STAT_0X58BA_WERT | 0x58BA | STAT_0X58BA_WERT | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | rkmeeff_w | high | unsigned int | - | 3072 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=rkmeeff_w |
| STAT_0X58BB_WERT | 0x58BB | STAT_0X58BB_WERT | Strom für VVT-Motor | A | ivvtm_w | high | int | - | 400 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=ivvtm_w |
| STAT_0X58BC_WERT | 0x58BC | STAT_0X58BC_WERT | relative Luftfüllung in der Funktionsüberwachung | % | rl_um | - | unsigned char | - | 0,75 | - | - | - | 2C; 22 | - | - | A2L-NAME=rl_um |
| STAT_0X58BD_WERT | 0x58BD | STAT_0X58BD_WERT | Status Fehler Überlast VVT1 | - | stdvovrld | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=stdvovrld |
| STAT_0X58BE_WERT | 0x58BE | STAT_0X58BE_WERT | DV-E-Adaption: Status Prüfbedingungen | - | dveadchst | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=dveadchst |
| STAT_0X58BF_WERT | 0x58BF | STAT_0X58BF_WERT | Bedingung Powerfail EEPROM | - | B_eepwf_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_eepwf_byte |
| STAT_0X58C0_WERT | 0x58C0 | STAT_0X58C0_WERT | VVT-Endstufentemperatur aus Modell | °C | tvvtes_w | high | unsigned int | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tvvtes_w |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Korrigierte Segmentdauer | µs | tsk_l | high | unsigned long | - | - | 20 | - | - | 2C; 22 | - | - | A2L-NAME=tsk_l |
| STAT_0X58C2_WERT | 0x58C2 | STAT_0X58C2_WERT | Status_STG_Anforderung_Radmoment_Antriebsstrang_Summe_FAS [-] | - | Com_stTrqWhlDemFASQl_FX | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stTrqWhlDemFASQl_FX |
| STAT_0X58C3_WERT | 0x58C3 | STAT_0X58C3_WERT | Status_STG_Anforderung_Drehmoment_Kurbelwelle_Fahrdynamik | - | Com_stDrvDyn_FX | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stDrvDyn_FX |
| STAT_0X58C4_WERT | 0x58C4 | STAT_0X58C4_WERT | Status STG Anforderung Radmoment Antriebsstrang Summe Stabilisierung | - | Com_stEcuRqTrqSumStab_FX | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stEcuRqTrqSumStab_FX |
| STAT_0X58C5_WERT | 0x58C5 | STAT_0X58C5_WERT | Status STG Ist Bremsmoment Summe | - | Com_stEcuBrkTrqSum_FX | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stEcuBrkTrqSum_FX |
| STAT_0X58C6_WERT | 0x58C6 | STAT_0X58C6_WERT | Status STG Ist Lenkwinkel Vorderachse | - | Com_stEcuAvlSteaFtax_FX | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stEcuAvlSteaFtax_FX |
| STAT_0X58C7_WERT | 0x58C7 | STAT_0X58C7_WERT | Status STG Status Stabilisierung DSC | - | Com_stECUStStabDSC_FX | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stECUStStabDSC_FX |
| STAT_0X58C8_WERT | 0x58C8 | STAT_0X58C8_WERT | geforderte Drehmomentänderung von der LLR (I-Anteil) | % | dmllri_w | high | int | - | 100 | 32768 | - | - | 2C; 22 | - | - | A2L-NAME=dmllri_w |
| STAT_0X58C9_WERT | 0x58C9 | STAT_0X58C9_WERT | Ansteuerungsmodus für den VVT Motor | - | vvtmode | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvtmode |
| STAT_0X58CA_WERT | 0x58CA | STAT_0X58CA_WERT | geforderte MD-Änderung von der LLR (PD-Zündungsanteil) | % | dmllrz_w | high | int | - | 100 | 32768 | - | - | 2C; 22 | - | - | A2L-NAME=dmllrz_w |
| STAT_0X58CB_WERT | 0x58CB | STAT_0X58CB_WERT | Aufsummierte thermische Belastung VVT | - | dvvttempovl | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=dvvttempovl |
| STAT_0X58CC_WERT | 0x58CC | STAT_0X58CC_WERT | Tastverhältnis zur Ansteuerung des VVT-Stellmotors | % | tvvvtm_w | high | int | - | 100 | 32768 | - | - | 2C; 22 | - | - | A2L-NAME=tvvvtm_w |
| STAT_0X58CD_WERT | 0x58CD | STAT_0X58CD_WERT | Spannung hinter Motorrelais | V | umtr | - | unsigned char | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=umtr |
| STAT_0X58CE_WERT | 0x58CE | STAT_0X58CE_WERT | Carrierbyte Schalterstati | - | funst_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=funst_w |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Momentenanforderung vom Getriebe in der Funktionsüberwachung | Nm | MoF_trqClthTra16 | high | int | - | - | 16 | - | - | 2C; 22 | - | - | A2L-NAME=MoF_trqClthTra16 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Istmoment in der Funktionsüberwachung | % | MoF_rTrqInrAct | - | unsigned char | - | 100 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=MoF_rTrqInrAct |
| STAT_0X58D1_WERT | 0x58D1 | STAT_0X58D1_WERT | Motortemperatur beim Abstellen | °C | tmotab | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tmotab |
| STAT_0X58D2_WERT | 0x58D2 | STAT_0X58D2_WERT | Klappensollwert in Grad | - | RadSht_phiPosDes | - | unsigned char | - | 128 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_phiPosDes |
| STAT_0X58D3_WERT | 0x58D3 | STAT_0X58D3_WERT | Klappenistwert in Grad | - | RadSht_phiPos | - | unsigned char | - | 128 | 255 | - | - | 2C; 22 | - | - | A2L-NAME=RadSht_phiPos |
| STAT_0X58D4_WERT | 0x58D4 | STAT_0X58D4_WERT | Startbedingung Kraftschluss erfüllt | - | B_kupp1_byte | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=B_kupp1_byte |
| STAT_0X58D5_WERT | 0x58D5 | STAT_0X58D5_WERT | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | tfa1lin | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tfa1lin |
| STAT_0X58D6_WERT | 0x58D6 | STAT_0X58D6_WERT | Transition Time O2Sensor Lean2Rich (Sensor2) | s | trlrS2_w | high | unsigned int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=trlrS2_w |
| IUANS | 0x58D7 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=wtfa1_w |
| STAT_0X58D8_WERT | 0x58D8 | STAT_0X58D8_WERT | Differenz-DK-Winkel Sollwert - Istwert (wdkdlr_w - wdkba_w) | % DK | dwdkdlr_w | high | int | - | 1600 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=dwdkdlr_w |
| STAT_0X58D9_WERT | 0x58D9 | STAT_0X58D9_WERT | Schrittzähler DK-Rückstellfeder-Prüfung | - | fprstep_c | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fprstep_c |
| STAT_0X58DA_WERT | 0x58DA | STAT_0X58DA_WERT | koordiniertes Moment für Füllung | % | milsol_w | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=milsol_w |
| STAT_0X58DB_WERT | 0x58DB | STAT_0X58DB_WERT | Fehlerzähler Summe, zählt abgasrelevante Aussetzer über alle Zylinder | - | fzabgs_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fzabgs_w |
| STAT_0X58DC_WERT | 0x58DC | STAT_0X58DC_WERT | Intervallzähler für abgasrelevante Aussetzer (0-1000 KW-Umdr. bzw. 0-500 NW-Um.) | - | ivzabg_w | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=ivzabg_w |
| STAT_0X58DD_WERT | 0x58DD | STAT_0X58DD_WERT | Druck vor Drosselklappe Rohwert | hPa | pvdr_w | high | unsigned int | - | 20 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=pvdr_w |
| STAT_0X58DE_WERT | 0x58DE | STAT_0X58DE_WERT | Spannung Drucksensor vor Drosselklappe | V | udsvd_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=udsvd_w |
| STAT_0X58DF_WERT | 0x58DF | STAT_0X58DF_WERT | Transition Time O2Sensor Rich2Lean (Sensor2) | s | trrlS2_w | high | unsigned int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=trrlS2_w |
| STAT_0X58E4_WERT | 0x58E4 | STAT_0X58E4_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=opmodi |
| STAT_0X58E5_WERT | 0x58E5 | STAT_0X58E5_WERT | Gefilterte Funkenbrenndauer Zylinder 1 | ms | BasSvrAppl_GefFunZyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_GefFunZyl Array [0] |
| STAT_0X58E6_WERT | 0x58E6 | STAT_0X58E6_WERT | Gefilterte Funkenbrenndauer Zylinder 2 | ms | BasSvrAppl_GefFunZyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_GefFunZyl Array [1] |
| STAT_0X58E7_WERT | 0x58E7 | STAT_0X58E7_WERT | Gefilterte Funkenbrenndauer Zylinder 3 | ms | BasSvrAppl_GefFunZyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_GefFunZyl Array [2] |
| STAT_0X58E8_WERT | 0x58E8 | STAT_0X58E8_WERT | Gefilterte Funkenbrenndauer Zylinder 4 | ms | BasSvrAppl_GefFunZyl | high | unsigned int | - | 0,001 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_GefFunZyl Array [3] |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | Versorgungsspannung elektr. Wasserpumpe | V | BasSvrAppl_uSplyPmp | - | unsigned char | - | 0,1 | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_uSplyPmp |
| INWAP | 0x58EA | STAT_WASSERPUMPE_DREHZAHL_WERT | Istdrehzahl elektr. Wasserpumpe | 1/min | BasSvrAppl_nActPmp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_nActPmp |
| STAT_0X58EB_WERT | 0x58EB | STAT_0X58EB_WERT | überprüfte Umgebungstemperatur vom CAN-Kombi | °C | ctum | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=ctum |
| ITWAE | 0x58EC | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | Elektroniktemperatur elektr. Wasserpumpe | °C | BasSvrAppl_tPmp | - | unsigned char | - | - | - | -50,0 | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_tPmp |
| IIWAP | 0x58ED | STAT_WASSERPUMPE_STROM_WERT | Stromaufnahme elektr. Wasserpumpe | A | BasSvrAppl_iPmp | - | unsigned char | - | - | 2 | - | - | 2C; 22 | - | - | A2L-NAME=BasSvrAppl_iPmp |
| STAT_0X58EE_WERT | 0x58EE | STAT_0X58EE_WERT | modellierte Umgebungstemperatur | °C | tumm | - | unsigned char | - | 0,75 | - | -48,0 | - | 2C; 22 | - | - | A2L-NAME=tumm |
| STAT_0X58EF_WERT | 0x58EF | STAT_0X58EF_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | high | unsigned int | - | 5 | 10000 | - | - | 2C; 22 | - | - | A2L-NAME=prist_w |
| STAT_0X58F0_WERT | 0x58F0 | STAT_0X58F0_WERT | ungefilterter Raildruck Istwert (abs.) | MPa | prroh_w | high | unsigned int | - | 5 | 10000 | - | - | 2C; 22 | - | - | A2L-NAME=prroh_w |
| STAT_0X58F1_WERT | 0x58F1 | STAT_0X58F1_WERT | Zähler für unplausible fsr_w Werte | - | fsrnpcnt | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fsrnpcnt |
| STAT_0X58F2_WERT | 0x58F2 | STAT_0X58F2_WERT | PWM signal for the VCV | % | PWM_VCV | high | unsigned int | - | 100 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=PWM_VCV |
| STAT_0X58F3_WERT | 0x58F3 | STAT_0X58F3_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | high | unsigned int | - | - | 10 | - | - | 2C; 22 | - | - | A2L-NAME=pistndr_w |
| STAT_0X58F4_WERT | 0x58F4 | STAT_0X58F4_WERT | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | upnd1ms_w | high | unsigned int | - | 5 | 1024 | - | - | 2C; 22 | - | - | A2L-NAME=upnd1ms_w |
| STAT_0X58F5_WERT | 0x58F5 | STAT_0X58F5_WERT | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | uvvtdia3V | - | unsigned char | - | 3,3 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=uvvtdia3V |
| STAT_0X58F6_WERT | 0x58F6 | STAT_0X58F6_WERT | Sollspannung des VVT Lagereglers | V | uvvtlrs_w | high | int | - | 51,2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=uvvtlrs_w |
| STAT_0X58F7_WERT | 0x58F7 | STAT_0X58F7_WERT | Statusbyte Strommessung plausibel | - | vvtipl | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=vvtipl |
| STAT_0X58F8_WERT | 0x58F8 | STAT_0X58F8_WERT | Zeitzaehler Begrenzung E-Maschine wegen Hochtemperatur | - | Isgusmierrgrenzz | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Isgusmierrgrenzz |
| STAT_0X58F9_WERT | 0x58F9 | STAT_0X58F9_WERT | Erkennung ISG-Typ (BSD, LIN, SGR) | - | Lin_stISGTyp | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Lin_stISGTyp |
| STAT_0X58FA_WERT | 0x58FA | STAT_0X58FA_WERT | gefilterter Faktor Tankentlüftungs-Adaption | - | fteadf | - | char | - | 128 | 256 | - | - | 2C; 22 | - | - | A2L-NAME=fteadf |
| STAT_0X58FB_WERT | 0x58FB | STAT_0X58FB_WERT | Delta Sondenoffset Führungsregelung | - | dlatrmo_w | high | int | - | 2 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=dlatrmo_w |
| STAT_0X58FC_WERT | 0x58FC | STAT_0X58FC_WERT | Implementierung Fertigungs-Werkstatt-,Transportmodus mit Tester auslesen | - | fetrawemod | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fetrawemod |
| STAT_0X58FD_WERT | 0x58FD | STAT_0X58FD_WERT | Untermodi des Fe Tra Fla Mode | - | fetraflamod | high | unsigned int | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=fetraflamod |
| STAT_0X58FE_WERT | 0x58FE | STAT_0X58FE_WERT | Fehlercode SWT-Freischaltcode | - | Sia_TRes_St | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Sia_TRes_St |
| STAT_0X5900_WERT | 0x5900 | STAT_0X5900_WERT | Gefiltertes zusätzlicher Sondendelay Mager-Fett, Sonde 2 | s | dtlrfS2_w | high | unsigned int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=dtlrfS2_w |
| STAT_0X5901_WERT | 0x5901 | STAT_0X5901_WERT | Gefiltertes zusätzlicher Sondendelay Fett-Mager, Sonde 2 | s | dtrlfS2_w | high | unsigned int | - | - | 100 | - | - | 2C; 22 | - | - | A2L-NAME=dtrlfS2_w |
| STAT_0X5904_WERT | 0x5904 | STAT_0X5904_WERT | IBS Status-/Fehlerbyte 1 | - | BattuEcu_stInfoDiag | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BattuEcu_stInfoDiag Array [1] |
| STAT_0X5905_WERT | 0x5905 | STAT_0X5905_WERT | IBS Status-/Fehlerbyte 2 | - | BattuEcu_stInfoDiag | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=BattuEcu_stInfoDiag Array [2] |
| STAT_0X5910_WERT | 0x5910 | STAT_0X5910_WERT | Solldrehzahl elektrische Wasserpumpe | 1/min | newpsoll20 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=newpsoll20 |
| STAT_0X5911_WERT | 0x5911 | STAT_0X5911_WERT | Solldrehzahl elektrische Wasserpumpe zur Kühlung E-Maschine und EME | 1/min | newpsoll21 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=newpsoll21 |
| STAT_0X5912_WERT | 0x5912 | STAT_0X5912_WERT | Solldrehzahl elektrische Wasserpumpe zur Kühlung Ladeluft, GÖWWT, HV-GEN und -EME | 1/min | newpsoll22 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=newpsoll22 |
| STAT_0X5913_WERT | 0x5913 | STAT_0X5913_WERT | Status Diagnose Wasserpumpe | - | WtrPmp_stDiagEwp20 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=WtrPmp_stDiagEwp20 |
| STAT_0X5914_WERT | 0x5914 | STAT_0X5914_WERT | Status Rückmeldung der EWP21 (0 = i.O. 3 = n.i.O.) | - | Com_FX_StElWap | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_FX_StElWap |
| STAT_0X5915_WERT | 0x5915 | STAT_0X5915_WERT | Status Rückmeldung der EWP22 (0 = i.O. 3 = n.i.O.) | - | CACPmp_stDiagEwp22 | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=CACPmp_stDiagEwp22 |
| STAT_0X5916_WERT | 0x5916 | STAT_0X5916_WERT | Relativer Ladezustand NV Batterie | % | Layer_rChrgBattLowVltg | - | unsigned char | - | 0,5 | - | - | - | 2C; 22 | - | - | A2L-NAME=Layer_rChrgBattLowVltg |
| STAT_0X5917_WERT | 0x5917 | STAT_0X5917_WERT | Status DCDC-Wandler | - | Com_stDCConv_A | - | unsigned char | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_stDCConv_A |
| STAT_0X5918_WERT | 0x5918 | STAT_0X5918_WERT | Auslastung DCDC-Wandler | % | Com_rActBalPCU_A | - | unsigned char | - | 0,5 | - | - | - | 2C; 22 | - | - | A2L-NAME=Com_rActBalPCU_A |
| STAT_0X5919_WERT | 0x5919 | STAT_0X5919_WERT | Fehlerstatus E-Maschine | hex | SwSABMW_stErrEmot | high | unsigned long | - | - | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_stErrEmot |
| STAT_0X5930_WERT | 0x5930 | STAT_0X5930_WERT | Istwert Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | high | unsigned int | - | 2 | - | - | - | 2C; 22 | - | - | A2L-NAME=rinh_w |
| STAT_0X5932_WERT | 0x5932 | STAT_0X5932_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | high | unsigned int | - | 2560 | 65536 | - | - | 2C; 22 | - | - | A2L-NAME=rinlsu_w |
| STAT_0X5934_WERT | 0x5934 | STAT_0X5934_WERT | Abgleich Drosselklappenmodell (Offset) | kg/h | SwSABMW_offsAdjThrMdl | high | int | - | 0,03125 | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_offsAdjThrMdl |
| STAT_0X5935_WERT | 0x5935 | STAT_0X5935_WERT | Abgleich Einlassventilmodell (Offset) | kg/h | SwSABMW_offsAdjIntkVlvMdl | high | int | - | 0,03125 | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_offsAdjIntkVlvMdl |
| STAT_0X5936_WERT | 0x5936 | STAT_0X5936_WERT | Abgleich Drosselklappenmodell (Faktor) | - | SwSABMW_fakAdjThrMdl | high | unsigned int | - | 3,0517578125e-005 | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_fakAdjThrMdl |
| STAT_0X5937_WERT | 0x5937 | STAT_0X5937_WERT | Abgleich Einlassventilmodell (Faktor) | - | SwSABMW_fakAdjIntkVlvMdl | high | unsigned int | - | 3,0517578125e-005 | - | - | - | 2C; 22 | - | - | A2L-NAME=SwSABMW_fakAdjIntkVlvMdl |
| GENDATEN | 0x5F71 | - | Generatordaten auslesen (0x22) oder rücksetzen (0x2E). Beim Aufruf dieses Services als 0x2E wird das Bit B_isgtst_datenreset für 1 Sekunde auf 1 gesetzt. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F71 | RES_0x5F71 | - |
| DKATSPOSC | 0x5F73 | - | Vermessener Sauerstoffspeicher (OSC) des überwachten Katalysatorvolumens auslesen (0x22) oder vorgeben (0x2E). Beim Aufruf dieses Services als 0x2E wird BasSvrAppl_stMeasOSCCat für 1 Sekunde auf 1 gesetzt. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F73 | RES_0x5F73 | - |
| KATHEIZFUNKTION_DEAKTIVIERUNG | 0x5F74 | - | Deaktivierung der Katheizfunktionalitaet (1 = aktiv / 0 = inaktiv) auslesen (0x22) oder vorgeben (0x2E). Nach 50 Km muss die Deaktivierung der Katheizfunktionalitaet zurückgenommen werden (0=inaktiv). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F74 | RES_0x5F74 | - |
| WRUECKDREHWINKEL | 0x5F75 | - | VVT: Mehrfaches Rueckdrehen (Wiederholter Rueckdrehwinkel) auslesen (0x22) oder vorgeben (0x2E). Wenn B_favvtexwinksrev gesetzt ist (0x2E), dann wird der Wert vom Tester (vvt_exwinksrev_count) auf den Zaehler (vvt_exwinksrev) kopiert. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F75 | RES_0x5F75 | - |
| FUNKBRENNDAUERDIAG_RESET_ZYLINDERABSCHLTNG | 0x5F76 | - | Funkenbrenndauer-Diagnose: Abschaltmuster auslesen (0x22) oder Ruecknahme der Zylinderabschaltung vorgeben (0x2E). Beim Aufruf dieses Services als 0x2E wird B_abmdzbdclctst für 1 Sekunde auf 1 gesetzt. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F76 | RES_0x5F76 | - |
| OELNIVEAUSENSOR | 0x5F77 | - | Deaktivierung des Oelniveausensors (1 = aktiv / 0 = inaktiv) Dieser Service ist nur aktivierbar bei nmot_w = 0 und B_kl15 = TRUE. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F77 | - | - |
| TRIPRCRDRESET | 0x5F78 | - | Testerjob zum Loeschen des Pannendatenspeichers. Beim Ausfuehren dieses Jobs soll folgendes Label gesetzt werden: GlbDa_bTRReqIniFlsh_u8 = TRUE. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F78 | - | - |
| TRIPRCRDTRIGGER | 0x5F79 | - | Testerjob zur manuellen Auslösung eines Trigger-Events, ua. Pannendatenspeicher und Langzeitqualitaet-Datenspeicher. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F79 | - | - |
| VVTHIGHCURRENT | 0x5F7A | - | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible (VVT-Schwergaengigkeit) vorgeben. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F7A | - | - |
| VVTSCHWERGAENGIGKEIT | 0x5F7B | - | Anzahl erkannter VVT Lageregelungsfehler, Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible und Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversible (VVT-Schwergaengigkeit) auslesen (0x22) oder Anzahl erkannter VVT Lageregelungsfehler vorgeben (0x2E). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F7B | RES_0x5F7B | - |
| MSA2STARTERTAUSCH | 0x5F7C | - | Startzaehler fuer Startertausch auslesen (0x22) oder vorgeben (0x2E). Bei der Ausfuehrung dieses Jobs soll das Bit B_msastrtzrst fuer ca. 1 Sekunde auf TRUE gesetzt werden. Ansonsten muss B_msastrtzrst immer FALSE sein. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F7C | RES_0x5F7C | - |
| DAROLRESET | 0x5F7D | - | Darol Lastkollektivdaten ruecksetzen (FASTA) | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F7D | - | - |
| DISCODBSR | 0x5F7E | - | Verriegelung des betriebsstundenrelevanten Kodierbereichs auslesen (0x22) oder vorgeben (0x2E). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F7E | RES_0x5F7E | - |
| ZDKSHDPRESET | 0x5F7F | - | Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) zuruecksetzen. Beim Aufruf dieses Services soll das Bit B_prail_mon_clr gesetzt werden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F7F | - | - |
| GVOBD | 0x5F80 | - | Gemischvertrimmung fuer OBD-Demo und PVE auslesen (0x22) oder 07-vorgeben/ 08-programmieren (0x2E). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F80 | RES_0x5F80 | - |
| MSA2HISTORIERESET | 0x5F84 | - | MSA2 Historie Reset. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F84 | - | - |
| MSA2_DEAK_SAV | 0x5F85 | - | MSA2 Selektive Deaktivierung Abschaltverhinderer auslesen (0x22) oder vorgeben (0x2E). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F85 | RES_0x5F85 | - |
| NULLGANG_SCHREIBEN | 0x5F8A | - | Schreiben MSA Nullgang Lernwert | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5F8A | - | - |
| HUBKORR | 0x5F8C | - | Hubkorrektur auslesen (0x22) oder vorgeben (0x2E): 4 - Hubkorrektur loeschen, 7 - Hubkorrektur vorgeben, 8 - Hubkorrektur programmieren, Beim Loeschen werden die auf den Parameter = 04 folgenden Parameter nicht ausgewertet. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F8C | RES_0x5F8C | - |
| MSA2_DEAK | 0x5F8E | - | MSA (MotorStopAutomatik) Deaktivierung auslesen (0x22) oder vorgeben 07=vorgeben 08=programmieren 00=beenden (0x2E). Mit Hilfe dieses Services als 0x2E wird der MSA Status deaktiviert bis die Zündung neu eingeschaltet wird. Das feste Vorgeben (Subparameter 0x08) ist nur bei einem kmstand < 250km möglich. (SY_STASTO>0). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5F8E | RES_0x5F8E | - |
| KVA | 0x5FC1 | - | KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5FC1 | - | - |
| ABGLEICH_LL | 0x5FF0 | - | Abgleichwert LL (Leerlauf) auslesen (0x22) oder (0x2E:) 0 - Abgleichwert LL (Leerlauf) Vorgeben beenden, 7 - Abgleichwert LL (Leerlauf) vorgeben, 8 - Abgleichwert LL (Leerlauf) programmieren, Beim Beenden werden die auf den Parameter = 00 folgenden Parameter nicht ausgewertet. | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5FF0 | RES_0x5FF0 | - |
| ECU_CONFIG | 0x5FF2 | - | Alle gelernten Varianten in der DME auslesen (0x22) oder löschen (0x2E). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5FF2 | RES_0x5FF2 | - |
| SOUNDTUNING_DEAK | 0x5FFD | - | Codierung Sound-Tuning Off auslesen (0x22) oder vorgeben (0x2E). | - | - | - | - | - | - | - | - | - | 2E; 22 | ARG_0x5FFD | RES_0x5FFD | - |
| VERS_EINSPRIT_ZUND | 0x6020 | - | Relais Einspritzung / Zündung ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6020 | - | - |
| DK | 0x602A | - | Drosselklappe ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x602A | - | - |
| TAV | 0x606B | - | Tankabsperrventil manuell ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x606B | - | - |
| USOLL | 0x6073 | - | Sollspannungswert (des Generators) (ueber Isgtst_testerusoll) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6073 | - | - |
| RRZ | 0x6074 | - | Loadresponsewert (des Generators) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6074 | - | - |
| IERRGRENZ | 0x6075 | - | Grenzerregerstromwert (des Generators) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6075 | - | - |
| EWG | 0x6078 | - | EWG elektr. Wastegate ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6078 | - | - |
| ELUER | 0x6081 | - | E-Luefter-Relais ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6081 | - | - |
| GLF2 | 0x60A4 | - | Gesteuerte Luftfuehrung Klappe 2 ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60A4 | - | - |
| ODR | 0x60AB | - | Oel Druck Regelung (Geregeltes Oeldrucksystem) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60AB | - | - |
| ODV | 0x60AC | - | Oeldruckventil (Geregeltes Oeldrucksystem) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60AC | - | - |
| KGEH | 0x60AD | - | Kurbelgehäuseentlüftungsheizung ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60AD | - | - |
| ULV | 0x60B5 | - | Umluftventil ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60B5 | - | - |
| GLF | 0x60C3 | - | Gesteuerte Luftfuehrung (Klappe 1) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60C3 | - | - |
| KFT | 0x60C9 | - | Kennfeldthermostat ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60C9 | - | - |
| TEV | 0x60CF | - | Tankentlueftungsventil ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60CF | - | - |
| LSH1 | 0x60D0 | - | Lambdasondenheizung vor Kat Bank1 ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D0 | - | - |
| LSH2 | 0x60D1 | - | Lambdasondenheizung hinter Kat Bank1 ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D1 | - | - |
| MIL | 0x60D4 | - | MIL (Malfunction Indicator Lamp) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D4 | - | - |
| EML | 0x60D6 | - | EML (Engine Malfunction Lamp) ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60D6 | - | - |
| E_LUEFTER | 0x60DA | - | E-Luefter ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60DA | - | - |
| VVT | 0x60DD | - | VVT ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60DD | - | - |
| ENWS | 0x60ED | - | Vanos Einlass Ventil ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60ED | - | - |
| ANWS | 0x60EE | - | Vanos Auslass Ventil ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60EE | - | - |
| EL_AGK | 0x60FD | - | Elektrische Abgasklappe ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60FD | - | - |
| FPC_PWM | 0x60FF | - | Fuel Pump Controller (Intelligenter Aktuator der elektrischen Kraftstoffpumpe) über PWM ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x60FF | - | - |
| ELUEZL | 0x6100 | - | Ansteuern des zusätlichen E-Lüfters mit BMW SW | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6100 | - | - |
| ELUERELZL | 0x6101 | - | Ansteuern des zusätlichen E-Lüfters mit BMW SW über Relais | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6101 | - | - |
| ROH_LK | 0x6103 | - | Ansteuern der Luftklappe beim B38 i12 | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6103 | - | - |
| EWP_ATL | 0x6104 | - | Elektrische Wasserpumpe für Abgasturbolader ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6104 | - | - |
| EWP_LLK | 0x6106 | - | Elektrische Wasserpumpe für Ladeluftkühler ansteuern | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6106 | - | - |
| SYSTEMCHECK_TEV | 0xF022 | - | Auslesen Diagnosefunktion Tankentlueftungsventil | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF022 | - |
| EVAUSBL | 0xF025 | - | Auslesen Diagnosefunktion EinspritzVentile EV-Ausblendung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF025 | RES_0xF025 | - |
| LLERH | 0xF026 | - | Auslesen Diagnosefunktion Leerlauf-Erhoehung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF026 | RES_0xF026 | - |
| SYSTEMCHECK_VVT_ANSCHLAG | 0xF027 | - | Auslesen VVT Anschlag lernen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF027 | - |
| SYSTEMCHECK_ODR | 0xF02C | - | Auslesen Diagnosefunktion Oeldruckregelung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF02C | - |
| NULLGANG_LERNEN | 0xF02E | - | Ansteuern Nullgang lernen (Der Nullgang-Lernwert ist nichtfluechtig so abzulegen, dass er bei Reprogrammierung nicht überschrieben wird.) | - | - | - | - | - | - | - | - | - | 31 | - | - | - |
| ZGH | 0xF034 | - | Auslesen Zylinder Gleichstellung Homogen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF034 | - |
| ZWDIAG | 0xF03A | - | CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Status-Routine | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF03A | RES_0xF03A | - |
| BETRIEBSART_LUFT | 0xF03C | - | Umschalten ind die verschiedenen Modis der Luft-Betriebsarten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF03C | - | - |
| SAUGROHRDRUCK | 0xF03D | - | Manuele Vorgabe des einzustellenden Saugrohrdruckes STDPSFA wird vom Service auf 2 geschalten Startvorraussetzung: | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF03D | - | - |
| SYSTEMCHECK_KURBELGEH_DICHT | 0xF03E | - | Systemtest für die Prüfung auf dichtheit des Kurbelgehäuses Es werden die Saugrohrdrücke variiert um die Lekagevolumen zu ermittel | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF03E | - |
| DEAK_CVODIAG | 0xF03F | - | Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurückgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF03F | - |
| VANOSSPUELEN | 0xF042 | - | VANOS Spuelen fuer OBD und PVE. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF042 | RES_0xF042 | - |
| MONTAGEMODUS | 0xF043 | - | Auslesen Montage-Modus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF043 | - |
| KLACKERTEST | 0xF044 | - | Auslesen der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF044 | - |
| SYSTEMCHECK_EWG | 0xF045 | - | Diagnosefunktion elektrisches Wastegate lesen. Voraussetzung: B_ewg == true, SY_WGPS > 0 | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF045 | - |
| SYSTEMCHECK_DKVSFS | 0xF046 | - | Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) Status lesen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF046 | - |
| SYSTEMCHECK_NVLDII | 0xF047 | - | Tankdiagnose NVLDII lesen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF047 | - |
| SYSTEMCHECK_TEV2 | 0xF04B | - | Tank Entlueftungs Ventil (Drucksensor in zweiter Leitung zwischen TEV und SSP) TEV2-Check | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF04B | - |
| SGRRT | 0xF04C | - | SGR (Starter-Generator im Riementrieb) steuern. Bei Ausfuehrung dieses Servies, muss B_isgtst_testersgr auf TRUE gesetzt werden. Nach Beendigung dieses Services, bei Initialisierung, bei Klemme-15-Wechsel bzw. (bei Bedarf) nach einem Timeout t [s] muss B_isgtst_testersgr wieder FALSE werden. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF04C | RES_0xF04C | - |
| MSA_STARTZAEHLER | 0xF04D | - | MSA Startzähler auslesen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF04D | - |
| PTABGLEICH | 0xF04F | - | Drucksensor im Tank mit Umgebungdrucksensor in der DME abgleichen lesen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF04F | - |
| BETRIEBSART_EM1 | 0xF086 | - | E-Maschine 1 Betriebsarten lesen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF086 | RES_0xF086 | - |
| BETRIEBSART_EM2 | 0xF087 | - | E-Maschine2/HV- Starter-Generator (Generator/EM für Stromerzeugung aus VM) Betriebsarten lesen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF087 | RES_0xF087 | - |
| EV1 | 0xF088 | - | Einspritzventil 1 (physikalisch) ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF088 | - | - |
| EV2 | 0xF089 | - | Einspritzventil 2 (physikalisch) ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF089 | - | - |
| EV3 | 0xF08A | - | Einspritzventil 3 (physikalisch) ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF08A | - | - |
| EV4 | 0xF08B | - | Einspritzventil 4 (physikalisch) ansteuern | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF08B | - | - |
| SYSTEMCHECK_ATL | 0xF0D0 | - | Diagnosefunktion Abgasturbolader auslesen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0D0 | - |
| SYSTEMCHECK_GLF | 0xF0D5 | - | Auslesen Gesteuerte Luftfuehrung Systemcheck | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0D5 | - |
| L_REGELUNG_AUS | 0xF0D9 | - | Auslesen Lambdaregelung ausschalten | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0D9 | - |
| EISYUGD | 0xF0E0 | - | Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF0E0 | RES_0xF0E0 | - |
| EISYGD | 0xF0E1 | - | Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF0E1 | RES_0xF0E1 | - |
| KRANN | 0xF0E3 | - | Auslesen Krann-Adaptionswerte (Anforderung aus CP5404) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF0E3 | RES_0xF0E3 | - |
| KLANN | 0xF0E4 | - | Auslesen Klann-Adaptionswerte (Anforderung aus CP10798) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF0E4 | RES_0xF0E4 | - |
| SYSTEMCHECK_DDLSHK | 0xF0E7 | - | Auslesen Dynamik Diagnose Lamdasonden hinter Hauptkat | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0E7 | - |
| CRAM | 0xF0E9 | - | Auslesen RAM-Backup-Werte loeschen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0E9 | - |
| SYSTEMCHECK_DKAT | 0xF0EB | - | Auslesen Kurztest Kat | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0EB | - |
| SYSTEMCHECK_ON_QNTMSSNG | 0xF0EC | - | Auslesen Kurztest Oelniveau Detailmessung. Detailmessung ist ab Motoroeltemperatur von 10 Grad_C moeglich, dabei ist ein Messwert unter 65 Grad_C ein grober Schaetzwert. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0EC | - |
| RAM | 0xF0F2 | - | Auslesen RAM Backup zwangssichern | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0F2 | - |
| PM_MESSEMODE | 0xF0F6 | - | Auslesen Messemode | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0F6 | - |
| FPC_MONTAGEMODUS | 0xF0FC | - | Auslesen des Ergebnisses der Ansteuerfunktion für die elektrische Kraftstoffpumpe über der FPC als Montage-Modus. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0FC | - |
| FPC_PARAMETER | 0xF0FF | - | Auslesen der FPC (Fuel Pump Controller) Konfiguration und Variante. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF0FF | - |

### _MOTORUDSCODIERUNG_RUHESTROM

| NR | TEXT |
| --- | --- |
| 0 | Ruhestrom kleiner 80mA, keine Aktion des IBS |
| 1 | Ruhestrom = 80...200mA, keine Aktion da Entladung kleiner Schwellwert |
| 2 | Ruhestrom = 200...1000mA, keine Aktion da Entladung kleiner Schwellwert |
| 3 | Ruhestrom groesser 1000mA, keine Aktion da Entladung kleiner Schwellwert |
| 4 | Ruhestrom kleiner 80mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 5 | Ruhestrom = 80...200mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 6 | Ruhestrom = 200...1000mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 7 | Ruhestrom groesser 1000mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 8 | Ruhestrom kleiner 80mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 9 | Ruhestrom = 80...200mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 10 | Ruhestrom = 200...1000mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 11 | Ruhestrom groesser 1000mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 12 | Ruhestrom kleiner 80mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 13 | Ruhestrom = 80...200mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 14 | Ruhestrom = 200...1000mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 15 | Ruhestrom groesser 1000mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |

### _MSD85UDS_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

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

### TABLE_STATUS_LETZTER_BATTERIEWECHSEL

| NR | TEXT |
| --- | --- |
| 0 | Wechsel zulässig |
| 1 | Wechsel unzulässig |

### TABLE_STATUS_BATTERIEZUSTAND

| NR | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie pruefen |
| 2 | Batterie nicht i.O. |
| 3 | ungueltig |

### TABLE_STATUS_WASSERVERLUST

| NR | TEXT |
| --- | --- |
| 0 | Wasserverlust i.O. |
| 1 | Wasserverlust nicht i.O. |

### TABLE_STATUS_TIEFENTLADUNG

| NR | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie durch Tiefentladung geschädigt |

### TABLE_STATUS_IBS_BZE

| NR | TEXT |
| --- | --- |
| 0 | BZE nicht aktiv |
| 1 | BZE aktiv |

### TABLE_STATUS_ECO2_FUNKTIONSSTATI

| NR | TEXT |
| --- | --- |
| 0 | Funktion nicht gestartet |
| 2 | Stop-Routine erfolgreich abgearbeitet |
| 3 | Funktion wartet auf Freigabe |
| 4 | Parameter unplausibel |
| 5 | Warten auf Trigger |
| 6 | Trigger erkannt |
| 7 | Funktion abgebrochen, Motor läuft oder keine Rückmeldung vom IBS |
| 8 | Messung beendet |
| 9 | Funktion abgebrochen, Time Out erreicht |
| 10 | Messung beendet, Time Out erreicht |
| 255 | Ungültiger Wert |

### _AUSLESEMODE

| NR | MODE |
| --- | --- |
| 0x00 | GROESSE |
| 0x01 | INPA |
| 0x02 | SGBD |
| 0x03 | FASTA |
| 0xFF | 0 |

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

### _EISYUGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT | PS_WERT |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 660 | 90 | 105 | 0.4 | 900 |
| 0x01 | 1500 | 60 | 72 | 1.5 | 900 |
| 0x02 | 2000 | 56 | 70 | 2.5 | 900 |
| 0x03 | 3000 | 88 | 98 | 9.7 | 1500 |
| 0x04 | 4000 | 108 | 110 | 9.7 | 1500 |
| 0xFF | 0 | 0 | 0 | 0 | 0 |

### _EISYGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 4.00 |
| 0x01 | 2000 | 65.0 | 85.0 | 10.00 |
| 0x02 | 3000 | 90.0 | 100.0 | 15.00 |
| 0x03 | 4000 | 100.0 | 100.0 | 20.00 |
| 0x04 | 5000 | 110.0 | 110.0 | 30.00 |
| 0xFF | 0 | 0 | 0 | 0 |

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

### _EISYGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 3.00 |
| 0x01 | 1000 | 100.0 | 90.00 | 8.00 |
| 0x02 | 1500 | 85.00 | 80.00 | 15.0 |
| 0x03 | 3000 | 90.00 | 100.0 | 30.0 |
| 0x04 | 5000 | 110 | 110 | 30.0 |
| 0xFF | 0 | 0 | 0 | 0 |

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

### SWSIGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | eingespielt |
| 0x02 | akzeptiert |
| 0x03 | abgelehnt |
| 0xFF | unbekannt |

### APPLNUM

| WERT | TEXT |
| --- | --- |
| 0x007B | Vmax Slave |
| 0x0095 | Vmax Master |
| 0x0097 | Pmax Slave |
| 0x0098 | Pmax Master |
| 0xFFFF | unbekannt |

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

### ARG_0X5F71

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F71_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4 - Löschen / Generatordaten zurücksetzen. | - |

### ARG_0X5F73

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_DKATSPOSC | 0/1 | - | unsigned char | - | - | - | - | - | 0 | 1 | Diagnose Freigabe Bit. Signal vom Tester, welches die OSC-Vollvermessung triggert. Bit 0 oder 1 wird übergeben. Gleiche Funktionalitaet wie die Bosch Größe BasSvrAppl_stMeasOSCCat. | A2L-NAME=BasSvrAppl_stMeasOSCCat |

### ARG_0X5F74

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV | 0-n | - | unsigned char | - | T_1BYTE_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP | - | - | - | - | - | Deaktivierung der Katheizfunktionalitaet aktiv / inaktiv. (1=aktiv, 0=inaktiv). Nach 50 Km muss die Deaktivierung der Katheizfunktionalitaet zurückgenommen werden. | A2L-NAME=BasSvrAppl_stDeactvnCatHeatg |

### ARG_0X5F75

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_VVT_EXWINKSREV | - | high | unsigned int | - | - | - | - | - | 0 | 65535 | Sollwert Zaehler Rueckdrehereignisse aufgrund von Lagereglerabweichung VVT-Steller | A2L-NAME=vvt_exwinksrev_count |

### ARG_0X5F76

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F76_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4- Ruecknahme der Zylinderabschaltung | - |

### ARG_0X5F77

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_B_ONABK_OZDEAKTIV | 0-n | - | unsigned char | - | T_B_ONABK_OZDEAKTIV_DOP | - | - | - | 0 | 1 | Deaktivierung des Oelniveausensors | A2L-NAME=BasSvrAppl_stDeactvOilLvlSens |

### ARG_0X5F78

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F78_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4- Loeschen des Pannendatenspeichers | - |

### ARG_0X5F79

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRIPRCRDTRIGGER | - | high | unsigned int | - | - | - | - | - | 0 | 65535 | Manuelles Auslösen eines Trigger-Events. | - |

### ARG_0X5F7A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_LGRF_IREV | - | high | unsigned int | - | - | - | - | - | 0,0 | 65535,0 | - | A2L-NAME=vvt_highcurrent_count |

### ARG_0X5F7B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_VVT_LGRF | - | high | unsigned int | - | - | - | - | - | 0,0 | 65535,0 | - | A2L-NAME=vvt_deviation_count |

### ARG_0X5F7C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_MSA_STRTZGESCHK | - | high | unsigned long | - | - | - | - | - | 0 | 4294967295 | abgefragte Gesamtstartzahl | A2L-NAME=msastrtzgeschk_l |

### ARG_0X5F7D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F7D_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4 - Darol Lastkollektivdaten zurücksetzen | - |

### ARG_0X5F7E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_DIS_COD_BSR | 0-n | - | unsigned char | - | T_SW_5F7E_DOP | - | - | - | 1 | 1 | Verriegelung des betriebsstundenrelevanten Kodierbereichs | A2L-NAME=B_discodbsr |

### ARG_0X5F7F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F7F_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4 - Zeitanteile der erreichten Druckbereiche zurücksetzen | - |

### ARG_0X5F80

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F80_DOP | - | - | - | 7 | 8 | Auswahl Parameter für unterschiedliche Servicefunktionen: 7- Gemischvertrimmung vorgeben 8 - Gemischvertrimmung programmieren | - |
| SW_F_MK_KORR_EXT_XZYL_1 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 1 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [0] |
| SW_F_MK_KORR_EXT_XZYL_2 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 2 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [1] |
| SW_F_MK_KORR_EXT_XZYL_3 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 3 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [2] |
| SW_F_MK_KORR_EXT_XZYL_4 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 4 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [3] |
| SW_F_MK_KORR_EXT_XZYL_5 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [4] |
| SW_F_MK_KORR_EXT_XZYL_6 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [5] |
| SW_F_MK_KORR_EXT_XZYL_7 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 7 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [6] |
| SW_F_MK_KORR_EXT_XZYL_8 | - | high | unsigned int | - | - | - | 3,0517578125e-005 | - | 0,0 | 1,999969482421875 | Faktor auf Einspritzung Zylinder 8 (Physikalische Reihenfolge). | A2L-NAME=fakmkkorrext_w Array [7] |

### ARG_0X5F84

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F84_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4 - MSA2 History Reset | - |

### ARG_0X5F85

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F85_DOP | - | - | - | 0 | 7 | Auswahl Parameter für unterschiedliche Servicefunktionen: 7- MSA2 Selektive Deaktivierung Abschaltverhinderer vorgeben 0 - MSA2 Selektive Deaktivierung Abschaltverhinderer vorgeben beenden | - |
| SW_STAT_MSA2_DEAK_SAV | - | high | unsigned long | - | - | - | - | - | - | - | Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) | A2L-NAME=msaswsavdi_l |

### ARG_0X5F8A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NGS | % | high | unsigned int | - | - | - | 0,01 | - | 0,0 | 655,35 | Nullgang Lernwert | A2L-NAME=tvneutin_w |

### ARG_0X5F8C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F8C_DOP | - | - | - | 4 | 8 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4 - Hubkorrektur loeschen 7 - Hubkorrektur vorgeben 8 - Hubkorrektur programmieren | - |
| SW_STVBRVS | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Codierdaten Hub Korrektur | A2L-NAME=stvbrvsin |

### ARG_0X5F8E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5F8E_DOP | - | - | - | 0 | 8 | Auswahl Parameter für unterschiedliche Servicefunktionen: 7 - MSA2 Deaktivierung vorgeben 8 - MSA2 Deaktivierung fest vorgeben 0 - MSA2 Deaktivierung vorgeben beenden | - |

### ARG_0X5FC1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KVA | - | - | char | - | - | - | 0,001 | - | -0,128 | 0,127 | Codierung Verbrauchsanzeigekorrektur (-0.128% bis 0.127%) | A2L-NAME=kva_korr |

### ARG_0X5FF0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5FF0_DOP | - | - | - | 0 | 8 | Auswahl Parameter für unterschiedliche Servicefunktionen. 0 - Abgleichwert LL (Leerlauf) Vorgeben beenden, 7 - Abgleichwert LL (Leerlauf) vorgeben, 8 - Abgleichwert LL (Leerlauf) programmieren. | - |
| SW_ABLL1 | 1/min | - | char | - | - | - | 10 | - | -250,0 | 250,0 | Drehzahlanhebung im Leerlauf | A2L-NAME=dnllmv |
| SW_ABLL2 | 1/min | - | char | - | - | - | 10 | - | -250,0 | 250,0 | Drehzahlanhebung im Leerlauf mit Klimaanlage ein | A2L-NAME=dnsacmv |
| SW_ABLL3 | 1/min | - | char | - | - | - | 10 | - | -250,0 | 250,0 | Drehzahlanhebung im Leerlauf mit Fahrstufe | A2L-NAME=dnfsmv |
| SW_ABLL4 | 1/min | - | char | - | - | - | 10 | - | -250,0 | 250,0 | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein | A2L-NAME=dnfsacmv |
| SW_ABLL5 | 1/min | - | char | - | - | - | 10 | - | -250,0 | 250,0 | Drehzahlanhebung im Leerlauf zum Batterie laden | A2L-NAME=dnslbv |

### ARG_0X5FF2

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW | 0-n | - | unsigned char | - | T_SW_5FF2_DOP | - | - | - | 4 | 4 | Auswahl Parameter für unterschiedliche Servicefunktionen: 4 - Löschen | - |

### ARG_0X5FFD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_SOUNDTUNING_DEAK | 0/1 | - | unsigned char | - | - | - | - | - | 0 | 1 | Codierung Sound-Tuning Off: (BasSvrAppl_stSTOff) 0 = Soundtuning aktiv 1 = Soundtuning deaktiviert | A2L-NAME=BasSvrAppl_stSTOff |

### ARG_0X6020

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PHY_UVLSS | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Spannung Versorgung Einspritzung / Zuendung schalten | A2L-NAME=B_injr |

### ARG_0X602A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_DK | % DK | high | int | - | - | 40,96 | - | - | 0,0 | 100,0 | Tastverhältnis Drosselklappe | A2L-NAME=wdktest_w |

### ARG_0X606B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_TAV_STEUERN | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Tastverhältnis TAV ansteuern. | - |

### ARG_0X6073

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_USOLL | V | high | unsigned int | - | - | 1000 | - | - | 10,6 | 16,0 | Tastverhältnis Sollspannungswert. | A2L-NAME=BasSvrAppl_uDflTstr |

### ARG_0X6074

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_RRZ | s | high | unsigned int | - | - | 20 | - | - | 0,0 | 15,0 | Tastverhältnis Loadresponsewert (des Generators) (UGEN) | A2L-NAME=BasSvrAppl_tiLdRespTstr |

### ARG_0X6075

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_IERRGRENZ | A | high | unsigned int | - | - | 800 | - | - | 0,0 | 25,5 | Tastverhältnis Grenzerregerstromwert (des Generators) vorgeben (UGEN). | A2L-NAME=BasSvrAppl_iDesCrntTstr |

### ARG_0X6078

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_EWG | % | high | int | - | - | 2,56 | - | - | 0,0 | 99,609375 | Tastverhältnis Tastverhältnis elektr. Wastegate. normierte Sollpositionsvorgabe elektrisches Wastegate vom Tester (0%: WG geschlossen, 100% WG offen) vorgeben (EWG). | A2L-NAME=BasSvrAppl_nrmDesPosEwgTstr |

### ARG_0X6081

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_IELUER | - | high | int | - | - | - | - | - | 0 | 2 | Komponentenansteuerung: intelligenter E-Luefter-Relais 1 = Ansteuern 0 = Aussteuern (A2L-NAME: Ieltst_testerrelais) | A2L-NAME=BasSvrAppl_nrmDesEfnRlsTstr |

### ARG_0X60A4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_GLF2 | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Komponentenansteuerung: Gesteuerte Luftfuehrung Klappe 2 1 = Ansteuern 0 = Aussteuern (default) | A2L-NAME=B_act_pkks_ext_adj |

### ARG_0X60AB

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_P_OELSOL_TST | hPa | high | unsigned int | - | - | - | 32 | - | 0,0 | 8160,0 | Oeldruck Sollwert | A2L-NAME=poelsoltst |

### ARG_0X60AC

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_ODV | % | high | unsigned int | - | - | 655,36 | - | - | 0,0 | 99,99847412109375 | Tastverhältnis Oeldruckventil Sollwert | A2L-NAME=OilPmp_rATSSubVal_MP |

### ARG_0X60AD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_KGEH | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Tastverhältnis Kurbelgehaeuseentlueftungsheizung | - |

### ARG_0X60B5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_ULV | % | high | unsigned int | - | - | 655,36 | - | - | 0,0 | 99,99847412109375 | Tastverhältnis Umluftventil | A2L-NAME=arqtuvs_w |

### ARG_0X60C3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_GLF | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Komponentenansteuerung: Gesteuerte Luftfuehrung Klappe 1 1 = Ansteuern 0 = Aussteuern (default) | A2L-NAME=B_act_akks_ext_adj |

### ARG_0X60C9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_KFT | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Komponentenansteuerung: Kennfeldthermostat 1 = Ansteuern 0 = Aussteuern (default) | A2L-NAME=B_etret |

### ARG_0X60CF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_TEV | % | high | unsigned int | - | - | 655,36 | - | - | 0,0 | 99,99847412109375 | Tastverhältnis Tankentlueftungsventil | A2L-NAME=arqttev_w |

### ARG_0X60D0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_LSH1 | % | high | unsigned int | - | - | 327,68 | - | - | 0,0 | 100,0 | Tastverhältnis Lambdasondenheizung vor Kat 1 | A2L-NAME=resdhlsu |

### ARG_0X60D1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_LSH2 | % | high | int | - | - | 81,92 | - | - | 0,0 | 100,0 | Tastverhältnis Lambdasondenheizung hinter Kat 1 | A2L-NAME=resdhshe |

### ARG_0X60D4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_MIL | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Komponentenansteuerung: MIL (Malfunction Indicator Lamp) 1 = Ansteuern 0 = Aussteuern (default) | A2L-NAME=MILLmp_stPs |

### ARG_0X60D6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_EML | 0/1 | high | int | - | - | - | - | - | 0 | 1 | Komponentenansteuerung: EML (Engine Malfunction Lamp) 1 = Ansteuern 0 = Aussteuern (default) | A2L-NAME=SVSLmp_stPs |

### ARG_0X60DA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_IELUE | % | high | unsigned int | - | - | 655,36 | - | - | 0,0 | 99,99847412109375 | Tastverhältnis intelligenter E-Luefter mit BMW SW. | A2L-NAME=BasSvrAppl_ratDesEfnTstr |

### ARG_0X60DD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_VVT | % | high | int | - | - | 2,56 | - | - | 0,0 | 99,609375 | Tastverhältnis VVT | A2L-NAME=vvtaet |

### ARG_0X60ED

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_ENWS | ° KW | high | int | - | - | 1,25 | - | 128,0 | -102,4 | 101,6 | Tastverhältnis Vanos Einlassventil | A2L-NAME=wnwetst |

### ARG_0X60EE

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_ANWS | ° KW | high | int | - | - | 1,25 | - | 128,0 | -102,4 | 101,6 | Tastverhältnis Vanos Auslassventil | A2L-NAME=wnwatst |

### ARG_0X60FD

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_EAGK | % | high | int | - | - | 100 | - | - | 0,0 | 100,0 | Tastverhältnis elektrische Abgasklappe | - |

### ARG_0X60FF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_FPC_PWM | % | high | int | - | - | 100 | - | - | 0,0 | 100,0 | Tastverhältnis FPC | A2L-NAME=PSP_rCtlLimCorTrans_mp |

### ARG_0X6100

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_ZLIELUE | % | high | unsigned int | - | - | 655,36 | - | - | 0,0 | 99,99847412109375 | Tastverhältnis zusätzlicher E-Luefter mit BMW SW (A2L-NAME: Ieltst_testernelsollzl) | A2L-NAME=BasSvrAppl_ratDesAddEfnTstr |

### ARG_0X6101

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_ZLIELUER | - | high | int | - | - | - | - | - | 0 | 2 | Komponentenansteuerung: zusätlicher E-Luefter mit BMW SW über Relais 2 = Ansteuern 1 = Aussteuern (A2L-NAME: Ieltst_testerrelaiszl) | A2L-NAME=BasSvrAppl_nrmDesAddEfnRlsTstr |

### ARG_0X6103

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_LKR | % | high | unsigned int | - | - | 655,36 | - | - | 0,0 | 99,99847412109375 | Tastverhältnis Ansteuerung Luftklappe | A2L-NAME=BasSvrAppl_nrmDesPosChokeCtlTstr |

### ARG_0X6104

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_EWP_ATL | % | high | int | - | - | 81,92 | - | - | 10,0 | 93,0 | Tastverhältnis elektrische Wasserpumpe Abgasturbolader | A2L-NAME=BasSvrAppl_ratDesEwpAtlTstr |

### ARG_0X6106

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_TV_EWP_LLK | % | high | int | - | - | 81,92 | - | - | 10,0 | 93,0 | Tastverhältnis Wasserpumpe Ladeluftkühler. | A2L-NAME=BasSvrAppl_ratDesEwpIClrTstr |

### ARG_0XF025

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEVOFF | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Ausblendmaske | A2L-NAME=devoff |

### ARG_0XF026

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LL | + | - | 1/min | high | int | - | - | - | 0,25 | - | 0 | 4000 | Drehzahlerhoeung Die Testereingabe für nsolfa_w ist bis 8191.75 U/min möglich, aber die Leerlaufdrehzahl wird in der folgenden Funktion auf 4000 U/min begrenzt. | A2L-NAME=nsolfa_w |

### ARG_0XF03A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAC_CH_DIAG_EXT_ADJ_IS | + | - | - | - | unsigned char | - | - | - | 0,0078125 | - | 0,0 | 1,9921875 | Manipulation factor of CH torque reserve for ignition angle efficiency monitoring - demo-mode IS | A2L-NAME=fetakhllfa |
| FAC_CH_DIAG_EXT_ADJ_PL | + | - | - | - | unsigned char | - | - | - | 0,0078125 | - | 0,0 | 1,9921875 | Manipulation factor of CH torque reserve for ignition angle efficiency monitoring - demo-mode PL | A2L-NAME=fetakhtlfa |
| LV_CH_DIAG_EXT_REQ | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 3 | External request for ignition angle efficiency monitoring - demo- mode | A2L-NAME=Bit 0x01: B_fetakhll Bit 0x02: B_fetakhtl |

### ARG_0XF03C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_BA_LUFT | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 255 | Vorgabe Betriebsart Luft über St_dps_svc(BMW Größe) | A2L-NAME=SwSABMW_modAir |

### ARG_0XF03D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_SAUGROHRDRUCK_SOLL | + | - | hPa | high | int | - | - | 32767 | 4096 | - | - | - | Sollwert Saugrohrdruckkdifferenz | A2L-NAME=SwSABMW_pSuctnPip |

### ARG_0XF042

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VANOSSPL_M_MODUS | + | - | - | - | unsigned char | - | - | - | - | - | 1 | 2 | 1=gleichzeitiges Verstellen von Ein- und Auslass-Vanos. und 2=erst Verstellen Einlass, dann Verstellen Auslass. Default-Wert = 1. (A2L-Name: modenwstcl) | A2L-NAME=modenwstcl |
| VANOSSPL_N_AZLVERSTL | + | - | - | - | unsigned char | - | - | - | - | - | 1 | 50 | Anzahl Verstellungen (von 1 bis 50). Default-Wert = 10 Dez. (A2L-Name: anztvtcl) | A2L-NAME=anztvtcl |
| VANOSSPL_T_HLTZVERSTL | + | - | s | - | unsigned char | - | - | - | 0,1 | - | 0,0 | 5,0 | Haltezeit Verstellung (0 bis 5 s). Default-Wert = 2.0 s. Gesamtzeit Vanosspuelen = N * 2 * T * m. (A2L-Name: takttcl) | A2L-NAME=takttcl |
| VANOSSPL_N1_UDZLGRNZ | + | - | 1/min | - | unsigned char | - | - | - | 10 | - | 500,0 | 2000,0 | Untere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min unter LL-Solldrehzahl . Default-Wert = 1000. (A2L-Name: nmotmintcl) | A2L-NAME=nmotmintcl |
| VANOSSPL_N2_ODZLGRNZ | + | - | 1/min | - | unsigned char | - | - | - | 10 | - | 500,0 | 2000,0 | Obere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min ueber LL-Solldrehzahl . Default-Wert = 1200. (A2L-Name: nmotmaxtcl) | A2L-NAME=nmotmaxtcl |
| VANOSSPL_V_MAX | + | - | km/h | - | unsigned char | - | - | - | - | - | 0 | 100 | Max. Fahrzeuggeschwindigkeit (0 bis 100 km/h). Default-Wert = 0 (A2L-Name: vfzgmxtcl) | A2L-NAME=vfzgmxtcl |
| VANOSSPL_T2_ZUBRZ | + | - | s | - | unsigned char | - | - | - | 0,1 | - | 0,0 | 20,0 | Zulaessige Unterbrechungszeit (0 bis 20 s). Default-Wert = 5s. (A2L-Name: taktumxtcl) | A2L-NAME=taktumxtcl |
| VANOSSPL_DVSE1_VO1EV | + | - | ° KW | high | int | - | - | - | 0,1 | - | -102,4 | 101,60000000000001 | Verstelloffset 1 Einlass-Vanos (von -102,4 bis 101,6°KW). Default-Wert=5.6°Grad. (A2L-Name: ofstclnwe1) | A2L-NAME=ofstclnwe1 |
| VANOSSPL_DVSE2_VO2EV | + | - | ° KW | high | int | - | - | - | 0,1 | - | -102,4 | 101,60000000000001 | Verstelloffset 2 Einlass-Vanos (von -102,4 bis 101,6°KW). Default-Wert=-5.6°Grad. (A2L-Name: ofstclnwe2) | A2L-NAME=ofstclnwe2 |
| VANOSSPL_DVSA1_VO1AV | + | - | ° KW | high | int | - | - | - | 0,1 | - | -102,4 | 101,60000000000001 | Verstelloffset 1 Auslas-Vanos (von -102,4 bis 101,6°KW). Default-Wert=-5.6°Grad. (A2L-Name: ofstclnwa1) | A2L-NAME=ofstclnwa1 |
| VANOSSPL_DVSA2_VO1AV | + | - | ° KW | high | int | - | - | - | 0,1 | - | -102,4 | 101,60000000000001 | Verstelloffset 2 Auslas-Vanos (von -102,4 bis 101,6°KW). Default-Wert=5.6°Grad. (A2L-Name: ofstclnwa2) | A2L-NAME=ofstclnwa2 |

### ARG_0XF04C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ISGTST_TESTERSGR | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 255 | 0 = keine SGR-Ansteuerung durch den SGBD-Job / 2 = Startermodus. | - |

### ARG_0XF086

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BETRIEBSART_EM1 | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 255 | E-Maschine 1 Betriebsart vorgeben. 0 = Standby 3 = DC-Spannungsregelung 5 = Drehzahlregelung mit Momentenvorsteuerng 6 = IHVBCTL - mit Momentenvorsteuerung 10 = Freilauf (A2L-NAME: Betriebsart_em1_steuern). | A2L-NAME=BasSvrAppl_stEomEM1Wr |

### ARG_0XF087

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BETRIEBSART_EM2 | + | - | - | - | unsigned char | - | - | - | - | - | 0 | 255 | E-Maschine 2 (Generator) - Betriebsart vorgeben. 0 = Standby 3 = DC-Spannungsregelung 5 = Drehzahlregelung mit Momentenvorsteuerng 6 = IHVBCTL - mit Momentenvorsteuerung 10 = Freilauf (A2L-NAME: Betriebsart_em2_steuern). | A2L-NAME=BasSvrAppl_stEomEM2Wr |

### ARG_0XF088

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_EV1 | + | - | ms | - | unsigned char | - | - | - | 10 | - | 0,0 | 2550,0 | Periodendauer Einspritzventil 1 | A2L-NAME=BasSvrAppl_RCPeriodF088 |
| SW_TV_EV1 | + | - | % | - | unsigned char | - | - | - | 0,390625 | - | 0,0 | 99,609375 | Tastverhältnis Einspritzventil 1 | A2L-NAME=BasSvrAppl_RCDutyCycleF088 |
| SW_TO_EV1 | + | - | s | - | unsigned char | - | - | - | 2 | - | 0,0 | 510,0 | Timeout Einspritzventil 1 | - |

### ARG_0XF089

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_EV2 | + | - | ms | - | unsigned char | - | - | - | 10 | - | 0,0 | 2550,0 | Periodendauer Einspritzventil 2 | A2L-NAME=BasSvrAppl_RCPeriodF089 |
| SW_TV_EV2 | + | - | % | - | unsigned char | - | - | - | 0,390625 | - | 0,0 | 99,609375 | Tastverhältnis Einspritzventil 2 | A2L-NAME=BasSvrAppl_RCDutyCycleF089 |
| SW_TO_EV2 | + | - | s | - | unsigned char | - | - | - | 2 | - | 0,0 | 510,0 | Timeout Einspritzventil 2 | - |

### ARG_0XF08A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_EV3 | + | - | ms | - | unsigned char | - | - | - | 10 | - | 0,0 | 2550,0 | Periodendauer Einspritzventil 3 | A2L-NAME=BasSvrAppl_RCPeriodF08A |
| SW_TV_EV3 | + | - | % | - | unsigned char | - | - | - | 0,390625 | - | 0,0 | 99,609375 | Tastverhältnis Einspritzventil 3 | A2L-NAME=BasSvrAppl_RCDutyCycleF08A |
| SW_TO_EV3 | + | - | s | - | unsigned char | - | - | - | 2 | - | 0,0 | 510,0 | Timeout Einspritzventil 3 | - |

### ARG_0XF08B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_PD_EV4 | + | - | ms | - | unsigned char | - | - | - | 10 | - | 0,0 | 2550,0 | Periodendauer Einspritzventil 4 | A2L-NAME=BasSvrAppl_RCPeriodF08B |
| SW_TV_EV4 | + | - | % | - | unsigned char | - | - | - | 0,390625 | - | 0,0 | 99,609375 | Tastverhältnis Einspritzventil 4 | A2L-NAME=BasSvrAppl_RCDutyCycleF08B |
| SW_TO_EV4 | + | - | s | - | unsigned char | - | - | - | 2 | - | 0,0 | 510,0 | Timeout Einspritzventil 4 | - |

### ARG_0XF0E0

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NKW | + | - | 1/min | high | int | - | - | - | - | - | -32768 | 32767 | Drehzahl | A2L-NAME=Nkw |
| VSE_SPRI | + | - | ° KW | high | unsigned int | - | - | - | 0,1 | - | 0,0 | 6553,5 | Istwert Einlassspreizung variable NWS | A2L-NAME=Vse_spri |
| VSA_SPRI | + | - | ° KW | high | unsigned int | - | - | - | 0,1 | - | 0,0 | 6553,5 | Istwert Auslassspreizung variable NWS | A2L-NAME=Vsa_spri |
| HUBEV_IST | + | - | - | high | unsigned int | - | - | - | 0,001 | - | 0,0 | 65,535 | Istwert Einlassventilhub | A2L-NAME=Hubev_mareg |
| PS | + | - | hPa | high | unsigned int | - | - | - | 0,125 | - | 0,0 | 8191,875 | Absolut Druck im Saugrohr (A2L-Name: Ps) (Istwert Umgebungsdruck) | A2L-NAME=Ps |

### ARG_0XF0E1

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NKW | + | - | 1/min | high | int | - | - | - | - | - | -32768 | 32767 | Drehzahl | A2L-NAME=Nkw |
| VSE_SPRI | + | - | ° KW | high | unsigned int | - | - | - | 0,1 | - | 0,0 | 6553,5 | Istwert Einlassspreizung variable NWS | A2L-NAME=Vse_spri |
| VSA_SPRI | + | - | ° KW | high | unsigned int | - | - | - | 0,1 | - | 0,0 | 6553,5 | Istwert Auslassspreizung variable NWS | A2L-NAME=Vsa_spri |
| WDK_IST | + | - | % | high | int | - | - | - | 0,024414062 | - | -799,999983616 | 799,975569554 | Aktueller Drosselklappenwinkel | A2L-NAME=Wdk_ist |

### ARG_0XF0E3

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NKW_LOC | + | - | 1/min | high | int | - | - | - | - | - | -32768 | 32767 | Drehzahl | - |
| RK_LOC | + | - | - | high | unsigned int | - | - | - | 0,048828125 | - | 0,0 | 3199,951171875 | Relative Krafstoffmasse | - |
| TANS_LOC | + | - | - | high | int | - | - | - | 0,1 | - | -3276,8 | 3276,7000000000003 | Ansauglufttemperatur | - |
| TMOT_LOC | + | - | °C | high | int | - | - | - | 0,01 | - | -327,68 | 327,67 | Kuehlwassertemperatur | - |
| BA_IST_LOC | + | - | 0-n | - | unsigned char | - | T_BA_IST_DOP | - | - | - | - | - | Istbetriebsart | - |

### ARG_0XF0E4

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NKW_LOC | + | - | - | high | int | - | - | - | - | - | -32768 | 32767 | Drehzahl | - |
| RK_LOC | + | - | - | high | unsigned int | - | - | - | 0,048828125 | - | 0,0 | 3199,951171875 | Relative Kraftstoffmasse | - |
| TMOT_LOC | + | - | - | high | int | - | - | - | - | - | -32768 | 32767 | Kuehlwassertemperatur | - |

### BF_0X4002_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AC_EIN | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Status Klimabereitschaft: 0=aus, 1=ein | A2L-NAME=B_ko |
| STAT_BTS_EIN | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Status Bremslichtschalter-Kanal 2: 0=aus, 1=ein | A2L-NAME=B_br |
| STAT_BLS_EIN | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Status Bremslichtschalter-Kanal 1: 0=aus, 1=ein | A2L-NAME=B_bl |
| STAT_KUPPL_EIN | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Status Kupplungsschalter: 0=aus, 1=ein | A2L-NAME=B_kuppl |
| STAT_MOTOR_EIN | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Status Motorzustand: 0=Motor steht, 1=Motor laeuft | A2L-NAME=B_nmot |
| STAT_KL15_EIN | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Status Klemme-15: 0=aus, 1=ein | A2L-NAME=B_kl15 |

### BF_0X4007_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DK_ABGLEICH | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Status Drosselklappen-Neuabgleich: 0=nicht erforderlich, 1=erforderlich | A2L-NAME=B_lrnrdy |
| STAT_SCHUBAB | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Status Schubabschaltung: 0=nicht aktiv, 1=aktiv | A2L-NAME=B_sa |
| STAT_SIA_BINJLCK | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Status Verriegelungsanforderung Wegfahrsperre für Einspritzung: 0=nicht aktiv, 1=aktiv | A2L-NAME=Sia_bInjLck |
| STAT_FAHRSTUFE | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Status Fahrstufe: 0=Gang nicht eingelegt, Park- oder Neutralstellung, 1=Gang eingelegt, nicht Park- oder Neutralstellung | A2L-NAME=B_fs |
| STAT_KICKDOWN | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Status Kickdownerkennung: 0=nicht erkannt, 1=erkannt | A2L-NAME=B_kd |
| STAT_SPORT | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Status Sportschalter: 0=nicht erkannt, 1=erkannt | A2L-NAME=B_pedsport |

### BF_0X4007_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LS1_REGELUNG | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Status Regelkreis Bank 1: 0=nicht geschlossen, 1=geschlossen | A2L-NAME=B_lr |
| STAT_LS2_REGELUNG | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Status Regelkreis Bank 2: 0=nicht geschlossen, 1=geschlossen | A2L-NAME=B_lr2 |
| STAT_LSVK1 | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Status Lambdaregelung vor Katalysator Bank 1: 0=nicht aktiv, 1=aktiv | A2L-NAME=B_sbbvk |
| STAT_LSVK2 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Status Lambdaregelung vor Katalysator Bank 2: 0=nicht aktiv, 1=aktiv | A2L-NAME=B_sbbvk2 |
| STAT_LSHK1 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Status Lambdaregelung hinter Katalysator Bank 1: 0=nicht aktiv, 1=aktiv | A2L-NAME=B_sbbhk |
| STAT_LSHK2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Status Lambdaregelung hinter Katalysator Bank 2: 0=nicht aktiv, 1=aktiv | A2L-NAME=B_sbbhk2 |
| STAT_VL | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Status Vollast: 0=aus, 1=ein | A2L-NAME=B_vl |
| STAT_LL | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Status Leerlauf: 0=aus, 1=ein | A2L-NAME=B_ll |

### BF_0X4024_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERR_BIT0_EWAP | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Error Status Sperrung-Sollwert | A2L-NAME=BasSvrAppl_stComPmp Bit 0 |
| STAT_ERR_BIT1_EWAP | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Error Status Keine Drehzahlueberwachung | A2L-NAME=BasSvrAppl_stComPmp Bit 1 |
| STAT_ERR_BIT2_EWAP | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Error Status Sperrung-Deblockierung | A2L-NAME=BasSvrAppl_stComPmp Bit 2 |
| STAT_ERR_BIT3_EWAP | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Error Status Uebertemperatur | A2L-NAME=BasSvrAppl_stComPmp Bit 3 |
| STAT_ERR_BIT4_EWAP | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Error Status Ueberstrom | A2L-NAME=BasSvrAppl_stComPmp Bit 4 |
| STAT_ERR_BIT5_EWAP | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Error Status Trockenlauf | A2L-NAME=BasSvrAppl_stComPmp Bit 5 |
| STAT_ERR_BIT6_EWAP | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Error Status falsche Versorgungsspannung | A2L-NAME=BasSvrAppl_stComPmp Bit 6 |
| STAT_ERR_BIT7_EWAP | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Error Status Deblockierung aktiv | A2L-NAME=BasSvrAppl_stComPmp Bit 7 |

### BF_0X4044_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ATLDIAG_AKTIV | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Ladedruckdiagnose aktiv (a2l-Name: statldiagnom Bit 0) | A2L-NAME=statldiagnom Bit 0 |
| STAT_ATLDIAG_BANK1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Ladedruckdiagnose fuer Bank 1 durchgelaufen (a2l-Name: statldiagnom Bit 1) | A2L-NAME=statldiagnom Bit 1 |
| STAT_ATLDIAG_BANK2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Ladedruckdiagnose fuer Bank 2 durchgelaufen (a2l-Name: statldiagnom Bit 2) | A2L-NAME=statldiagnom Bit 2 |

### BF_0X4105_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMPREHENSIVE | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Ueberwachung der uebrigen Komponenten: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1B Bit 6 |
| STAT_FUELSYSTEM | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Ueberwachung Kraftstoffsystem: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1B Bit 5 |
| STAT_MISSFIRE | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Ueberwachung Verbrennungsaussetzer: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1B Bit 4 |
| STAT_COMPREHENSIVE_MONITOR | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Ueberwachung der uebrigen Komponenten: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1B Bit 2 |
| STAT_FUELSYSTEM_MONITOR | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Ueberwachung Kraftstoffsystem: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1B Bit 1 |
| STAT_MISSFIRE_MONITOR | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Ueberwachung Verbrennungsaussetzer: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1B Bit 0 |

### BF_0X4105_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AGRRDY_EIN | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Ueberwachung Abgasrueckfuehrung: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 7 |
| STAT_HSRDY_EIN | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Ueberwachung Lambdasondenheizung: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 6 |
| STAT_LSRDY_EIN | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Ueberwachung Lambdasonde: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 5 |
| STAT_KLIMARDY_EIN | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Ueberwachung Klimaanlage: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 4 |
| STAT_SLSRDY_EIN | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Ueberwachung Sekundaerluftsystem: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 3 |
| STAT_TESRDY_EIN | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Ueberwachung Tankentlueftungssystem: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 2 |
| STAT_HKATRDY_EIN | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Ueberwachung Katalysatorheizung: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 1 |
| STAT_KATRDY_EIN | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Ueberwachung Katalysator: 0=Test abgeschlossen oder nicht anwendbar, 1=Test nicht abgeschlossen | A2L-NAME=DSMRdy_xPId1D Bit 0 |

### BF_0X4105_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AGRMON_EIN | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Ueberwachung Abgasrueckfuehrung: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 7 |
| STAT_HSMON_EIN | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Ueberwachung Lambdasondenheizung: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 6 |
| STAT_LSMON_EIN | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Ueberwachung Lambdasonde: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 5 |
| STAT_KLIMAMON_EIN | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Ueberwachung Klimaanlage: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 4 |
| STAT_SLSMON_EIN | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Ueberwachung Sekundaerluftsystem: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 3 |
| STAT_TESMON_EIN | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Ueberwachung Tankentlueftungssystem: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 2 |
| STAT_HKATMON_EIN | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Ueberwachung Katalysatorheizung: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 1 |
| STAT_KATMON_EIN | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Ueberwachung Katalysator: 0=Test wird durch dieses Modul nicht unterstuetzt, 1=Test wird durch dieses Modul unterstuetzt | A2L-NAME=DSMRdy_xPId1C Bit 0 |

### BF_0XF025_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EV1_AUSBL | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Status ausgeblendetes Ventil 1 | A2L-NAME=evz_austot Bit 0 |
| STAT_EV2_AUSBL | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Status ausgeblendetes Ventil 2 | A2L-NAME=evz_austot Bit 1 |
| STAT_EV3_AUSBL | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Status ausgeblendetes Ventil 3 | A2L-NAME=evz_austot Bit 2 |
| STAT_EV4_AUSBL | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Status ausgeblendetes Ventil 4 | A2L-NAME=evz_austot Bit 3 |
| STAT_EV5_AUSBL | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Status ausgeblendetes Ventil 5 | A2L-NAME=evz_austot Bit 4 |
| STAT_EV6_AUSBL | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Status ausgeblendetes Ventil 6 | A2L-NAME=evz_austot Bit 5 |
| STAT_EV7_AUSBL | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Status ausgeblendetes Ventil 7 | A2L-NAME=evz_austot Bit 6 |
| STAT_EV8_AUSBL | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Status ausgeblendetes Ventil 8 | A2L-NAME=evz_austot Bit 7 |

### BF_0XF027_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VVTL_BIT0 | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Auswertung Bit 0 Fehler unterer Anschlag nicht gefunden | A2L-NAME=vvtchksf2 Bit 0 |
| STAT_VVTL_BIT1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Auswertung Bit 1 Fehler oberer Anschlag nicht gefunden | A2L-NAME=vvtchksf2 Bit 1 |
| STAT_VVTL_BIT2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Auswertung Bit 2 Fehler Verstellbereich Fuehrungssensor unplausibel | A2L-NAME=vvtchksf2 Bit 2 |
| STAT_VVTL_BIT3 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Auswertung Bit 3 Fehler Verstellbereich Referenzsensor unplausibel | A2L-NAME=vvtchksf2 Bit 3 |
| STAT_VVTL_BIT4 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Auswertung Bit 4 Fehler zulaessige Hoechstzeit Anschlaglernvorgang ueberschritten | A2L-NAME=vvtchksf2 Bit 4 |
| STAT_VVTL_BIT5 | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Auswertung Bit 5 Fehler Spannungsversorgung | A2L-NAME=vvtchksf2 Bit 5 |
| STAT_VVTL_BIT6 | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Auswertung Bit 6 Fehler VVT-Sensor, Leistungsversorgung oder Stellglied | A2L-NAME=vvtchksf2 Bit 6 |
| STAT_VVTL_BIT7 | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Auswertung Bit 7 Ruecknahme Lernanforderung | A2L-NAME=vvtchksf2 Bit 7 |

### BF_0XF045_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORFEHLER_EWG | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Sensorfehler eWG vorhanden | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 0 |
| STAT_UEBERTEMPERATUR_EWG | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Übertemperatur eWG vorhanden | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 1 |
| STAT_ENDSTUFENFEHLER_EWG | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Endstufenfehler eWG vorhanden | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 2 |
| STAT_LAGEREGLERABWEICHUNG_EWG | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Lagereglerabweichung eWG vorhanden | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 3 |
| STAT_UMGEBUNGSVAR_EWG | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Umweltbedingungen (Geschw./Drehzahl/Sperrzeit/Bauteiltemperatur) nicht gegeben. | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 4 |
| STAT_ALG_ABSCHALTUNG_EWG | 0/1 | - | unsigned char | 0x20 | - | - | - | - | allgemeine Abschaltung Reglerausgang (siehe Fehlerspeicher) | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 5 |
| STAT_WARNSCH_UEBTEMP_EWG | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Warnschwelle Übertemperatur eWG vorhanden | A2L-NAME=SwSABMW_stAddlRespWgeTst2 Bit 6 |

### BF_0XF0D5_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECRAS_UP_ERR7 | 0/1 | - | unsigned char | 0x80 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 7 |
| STAT_ECRAS_UP_ERR6 | 0/1 | - | unsigned char | 0x40 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 6 |
| STAT_ECRAS_UP_ERR5 | 0/1 | - | unsigned char | 0x20 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 5 |
| STAT_ECRAS_UP_ERR4 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 4 |
| STAT_ECRAS_UP_ERR3 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 3 |
| STAT_ECRAS_UP_ERR2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 2 |
| STAT_ECRAS_UP_ERR1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagGen Bit 1 |
| STAT_ECRAS_UP_ERR0 | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Fehler im Luftklappengesamtsystem (0=nicht vorhanden 1= vorhanden) | A2L-NAME=RadSht_stDiagGen Bit 0 |

### BF_0XF0D5_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECRAS_UP_DIAG_END7 | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Anschlagtest Auf (Blockiererkennung) bei der AKKS-LIN (0=noch nicht durchgeführt 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 7 |
| STAT_ECRAS_UP_DIAG_END6 | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Anschlagtest AUF (Anschlag nicht gefunden) bei der AKKS-LIN (0=noch nicht durchgeführt 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 6 |
| STAT_ECRAS_UP_DIAG_END5 | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Anschlagtest ZU bei der AKKS-LIN (0=noch nicht durchgeführt 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 5 |
| STAT_ECRAS_UP_DIAG_END4 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Status Elektrodiagnose im AKKS-LIN Steller (0=noch nicht durchgeführt 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 4 |
| STAT_ECRAS_UP_DIAG_END3 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Status Temperaturdiagnose im AKKS-LIN Steller (0=noch nicht durchgeführt 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 3 |
| STAT_ECRAS_UP_DIAG_END2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Status Spannungsdiagnose im AKKS-LIN Steller (0=noch nicht durchgeführt 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 2 |
| STAT_ECRAS_UP_DIAG_END1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Status Kommunikationsdiagnose auf Framefehler (0= noch nicht durchgeführt, 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 1 |
| STAT_ECRAS_UP_DIAG_END0 | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Status Kommunikationsdiagnose auf LIN Botschaften (0= noch nicht durchgeführt, 1= beendet) | A2L-NAME=RadSht_stDiagAKKS Bit 0 |

### BF_0XF0D5_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECRAS_UP7 | 0/1 | - | unsigned char | 0x80 | - | - | - | - | externe Ansteuerung AKKS-LIN (0= nicht aktiv 1= aktiv) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 7 |
| STAT_ECRAS_UP6 | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Systemtest (0= nicht aktiv 1= aktiv) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 6 |
| STAT_ECRAS_UP5 | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Anschlagtest Aus (0= nicht aktiv 1= aktiv) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 5 |
| STAT_ECRAS_UP4 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Anschlagtest Zu (0= nicht aktiv 1= aktiv) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 4 |
| STAT_ECRAS_UP3 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Spannungsstatus für AKKS-LIN Steller (0= UB n.i.O. 1= UB i.O.) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 3 |
| STAT_ECRAS_UP2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | AKKS-LIN offen (0= nicht offen 1= offen) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 2 |
| STAT_ECRAS_UP1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | AKKS-LIN geschlossen (0= nicht geschlossen 1= geschlossen) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 1 |
| STAT_ECRAS_UP0 | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Variante AKKS-LIN (0=nicht vorhanden 1= vorhanden) | A2L-NAME=RadSht_stDiagAbvAirVlv Bit 0 |

### BF_0XF0D5_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECRAS_DOWN7 | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Ansteuerung PKKS (0= Zu, 1= Auf) | A2L-NAME=RadSht_stDiagBntAirVlv Bit 7 |
| STAT_ECRAS_DOWN6 | 0/1 | - | unsigned char | 0x40 | - | - | - | - | externe Ansteuerung PKKS (0= nicht aktiv 1= aktiv) | A2L-NAME=RadSht_stDiagBntAirVlv Bit 6 |
| STAT_ECRAS_DOWN5 | 0/1 | - | unsigned char | 0x20 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagBntAirVlv Bit 5 |
| STAT_ECRAS_DOWN4 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagBntAirVlv Bit 4 |
| STAT_ECRAS_DOWN3 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagBntAirVlv Bit 3 |
| STAT_ECRAS_DOWN2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | nicht belegt | A2L-NAME=RadSht_stDiagBntAirVlv Bit 2 |
| STAT_ECRAS_DOWN1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | elektrischer Fehler PKKS (0=nicht vorhanden 1= vorhanden) | A2L-NAME=RadSht_stDiagBntAirVlv Bit 1 |
| STAT_ECRAS_DOWN0 | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Variante PKKS (0=nicht vorhanden 1= vorhanden) | A2L-NAME=RadSht_stDiagBntAirVlv Bit 0 |

### BF_0XF0D9_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LR_AUS_BIT0 | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Auswertung Bit 0 Open Loop - Start-/Ansteuerbedingung für Regelung nicht erfüllt | A2L-NAME=flglrs Bit 0 |
| STAT_LR_AUS_BIT1 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Auswertung Bit 1 Closed Loop - Lambdaregelung-Diagnose | A2L-NAME=flglrs Bit 1 |
| STAT_LR_AUS_BIT2 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Auswertung Bit 2 Open Loop - Keine Regelung durch Fahrzustand. Gemisch zu fett/mager | A2L-NAME=flglrs Bit 2 |
| STAT_LR_AUS_BIT3 | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Auswertung Bit 3 Open Loop - Fehler erkannt | A2L-NAME=flglrs Bit 3 |
| STAT_LR_AUS_BIT4 | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Auswertung Bit 4 Closed Loop - Min. eine Lambdasonde fehlerhaft. U.u. in Einzelbetrieb | A2L-NAME=flglrs Bit 4 |

### BF_0XF0EC_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ON_ST_MSB_BIT0_ABSTELLZEIT_NIO | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Abstellzeit (0=k.A. 1=Abstellzeit n.i.O.) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 0 |
| STAT_ON_ST_MSB_BIT1_MINERK_NIO | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Messwert in MinErkennung (0=k.A. 1=Noch kein Messwert in MinErkennung berechnet) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 1 |
| STAT_ON_ST_MSB_BIT2_QNTMSSG | 0/1 | - | unsigned char | 0x04 | - | - | - | - | QntMssg-Messung. Detailmessung laeuft falls TRUE. Nach Abbruch/Beendigung/bevor Messung ist das Bit auf FALSE. (0=k.A. 1=QntMssg-Messung) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 2 |
| STAT_ON_ST_MSB_BIT3_OLCMSSG | 0/1 | - | unsigned char | 0x08 | - | - | - | - | OLC-Messung (0=k.A. 1=OLC-Messung) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 3 |
| STAT_ON_ST_MSB_BIT4_MINERK | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Minerk-Messung (0=k.A. 1=Minerk-Messung) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 4 |
| STAT_ON_ST_MSB_BIT5_KLMMNG_NIO | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Gueltigkeit Rueckmeldung auf Anforderung Klemmung (0=k.A. 1=Keine gueltige Rueckmeldung auf Anforderung Klemmung) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 5 |
| STAT_ON_ST_MSB_BIT6_SENSOR_MESSW_NIO | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Messwerte vom Sensor (0=k.A. 1=Keine Messwerte vom Sensor) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 6 |
| STAT_ON_ST_MSB_BIT7_APPLKDATA_NIO | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Applikationsdaten (0=k.A. 1=Keine Applikationsdaten) | A2L-NAME=SwSABMW_stOilLvlDescr Bit 7 |

### BF_0XF0EC_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ON_ST_LSB_BED_BIT0_GANG | 0/1 | - | unsigned char | 0x01 | - | - | - | - | Gang / Kuppunlg (0=Randbedingung i.O. 1=Randbedingung n.i.O: Gang eingelegt, Kpplg getreten) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 0 |
| STAT_ON_ST_LSB_BED_BIT1_FAHRPEDAL | 0/1 | - | unsigned char | 0x02 | - | - | - | - | Fahrpedal (0=Randbedingung i.O. 1=Randbedingung n.i.O.: Fahrpedal getreten) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 1 |
| STAT_ON_ST_LSB_BED_BIT2_V | 0/1 | - | unsigned char | 0x04 | - | - | - | - | Geschwindigkeit (0=Randbedingung i.O. 1=Randbedingung n.i.O: V ungl. 0km/h) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 2 |
| STAT_ON_ST_LSB_BED_BIT3_KW | 0/1 | - | unsigned char | 0x08 | - | - | - | - | Kurbelwelle (0=Randbedingung i.O. 1=Randbedingung n.i.O.: Kurbelwelle dreht) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 3 |
| STAT_ON_ST_LSB_BED_BIT4_POEL | 0/1 | - | unsigned char | 0x10 | - | - | - | - | Oeldruck (0=Randbedingung i.O. 1=Randbedingung n.i.O.: Oeldruck n.i.O.) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 4 |
| STAT_ON_ST_LSB_BED_BIT5_NEIG | 0/1 | - | unsigned char | 0x20 | - | - | - | - | Neigung (0=Randbedingung i.O. 1=Randbedingung n.i.O.: Neigung n.i.O.) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 5 |
| STAT_ON_ST_LSB_BED_BIT6_NMOT | 0/1 | - | unsigned char | 0x40 | - | - | - | - | Motordrehzahl (0=Randbedingung i.O. 1=Randbedingung n.i.O.:Motordrehzahl n.i.O.) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 6 |
| STAT_ON_ST_LSB_BED_BIT7_MOTOEL | 0/1 | - | unsigned char | 0x80 | - | - | - | - | Motoroeltemp. (0=Randbedingung i.O. 1=Randbedingung n.i.O.: Motoroeltemp. n.i.O.) | A2L-NAME=SwSABMW_stOilLvlDescrAbrt Bit 7 |

### RES_0X4000

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LR1_MW_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Lambdaregler 1 | A2L-NAME=lasolrg_w |
| STAT_LR2_MW_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Lambdaregler 2 (für den Biturbo vorgesehen) | A2L-NAME=lasolrg2_w |
| STAT_VFZG_MW_WERT | km/h | high | unsigned int | - | - | 0,0078125 | - | - | Fahrzeuggeschwindigkeit | A2L-NAME=vfzg_w |
| STAT_NMOT_W_MW_WERT | 1/min | high | unsigned int | - | - | 0,25 | - | - | Motordrehzahl hoch aufgeloest | A2L-NAME=nmot_w |
| STAT_NSOL_MW_WERT | 1/min | high | unsigned int | - | - | 0,25 | - | - | Leerlauf-Solldrehzahl | A2L-NAME=nsol_w |
| STAT_CAM_IN_WERT | ° KW | high | int | - | - | 0,0078125 | - | - | Istwert Einlassnockenwellensteller | A2L-NAME=wnwe_w |
| STAT_CAM_EX_WERT | ° KW | high | int | - | - | 0,0078125 | - | - | Istwert Auslassnockenwellensteller | A2L-NAME=wnwa_w |
| STAT_TIA_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ansauglufttemperatur | A2L-NAME=tans |
| STAT_TCO_MES_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Kuehlmitteltemperatur Rohwert | A2L-NAME=tmot |
| STAT_IGA_IGC_WERT | ° KW | high | int | - | - | 0,1 | - | - | Zuendwinkel Zylinder 1 | A2L-NAME=zwoutzyl_w Array [0] |
| STAT_TPS_AV_1_WERT | % DK | high | int | - | - | 0,0244140625 | - | - | Drosselklappenwinkel Potentiometer 1 | A2L-NAME=wdkba_w |
| STAT_MAF_KGH_MES_BAS_WERT | kg/h | high | int | - | - | 0,1 | - | - | Gemessene Luftmasse Rohwert | A2L-NAME=mshfma_w |
| STAT_TQI_AV_WERT | Nm | high | int | - | - | 0,5 | - | - | aktuelle Drehmomentanforderung | A2L-NAME=mkist_w |
| STAT_VB_WERT | V | - | unsigned char | - | - | 0,0942 | - | - | Batteriespannung | A2L-NAME=ub |
| STAT_V_PVS_1_WERT | V | high | unsigned int | - | - | 0,0048828125 | - | - | Pedalwertgeber 1 Rohwert | A2L-NAME=upwg1_w |
| STAT_TCO_2_MES_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Kuehlmittelauslasstemperatur Rohwert | A2L-NAME=tmotlinf |
| STAT_KLOPFWERT_SPANNUNG_ZYL1_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 1 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [0] |
| STAT_KLOPFWERT_SPANNUNG_ZYL2_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 2 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [1] |
| STAT_KLOPFWERT_SPANNUNG_ZYL3_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 3 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [2] |
| STAT_KLOPFWERT_SPANNUNG_ZYL4_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 4 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [3] |
| STAT_KLOPFWERT_SPANNUNG_ZYL5_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 5 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [4] |
| STAT_KLOPFWERT_SPANNUNG_ZYL6_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 6 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [5] |
| STAT_KLOPFWERT_SPANNUNG_ZYL7_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 7 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [6] |
| STAT_KLOPFWERT_SPANNUNG_ZYL8_WERT | V | high | unsigned int | - | - | 5 | 1024 | - | Spannung Klopfwerte Zylinder 8 (phys). | A2L-NAME=BasSvrAppl_SpaKloZyl Array [7] |

### RES_0X4002

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | BIT | - | BITFIELD | - | BF_0x4002_0 | - | - | - | Decodierung des Statusbytes für Schalterzustände | - |

### RES_0X4006

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINKELVERSATZ_0_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Nullpunktverschiebung fuer die Winkelversatz Diagnose | A2L-NAME=EpmCaS_phiDiffAvrgLim Array [0] |
| STAT_PSN_EDGE_AD_CAM_IN_0_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [0] |
| STAT_PSN_EDGE_AD_CAM_IN_1_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [1] |
| STAT_PSN_EDGE_AD_CAM_IN_2_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [2] |
| STAT_PSN_EDGE_AD_CAM_IN_3_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [3] |
| STAT_PSN_EDGE_AD_CAM_IN_4_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [4] |
| STAT_PSN_EDGE_AD_CAM_IN_5_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosI1_mp Array [5] |
| STAT_WINKELVERSATZ_1_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Nullpunktverschiebung fuer die Winkelversatz Diagnose | A2L-NAME=EpmCaS_phiDiffAvrgLim Array [1] |
| STAT_PSN_EDGE_AD_CAM_EX_0_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Auslassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [0] |
| STAT_PSN_EDGE_AD_CAM_EX_1_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Auslassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [1] |
| STAT_PSN_EDGE_AD_CAM_EX_2_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Auslassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [2] |
| STAT_PSN_EDGE_AD_CAM_EX_3_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Auslassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [3] |
| STAT_PSN_EDGE_AD_CAM_EX_4_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Auslassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [4] |
| STAT_PSN_EDGE_AD_CAM_EX_5_WERT | ° KW | high | int | - | - | 0,0219726562500054 | - | - | Adaptierte Referenzposition einer NW-Flanke der Auslassnockenwelle | A2L-NAME=EpmCaS_phiAdapRefPosO1_mp Array [5] |
| STAT_B_PHADA | 0-n | - | unsigned char | - | T_B_PHADE_JOB_DOP | - | - | - | Adaption Kurbel/Auslassnockenwelle erfolgt. | A2L-NAME=B_phada |
| STAT_B_PHADE | 0-n | - | unsigned char | - | T_B_PHADA_JOB_DOP | - | - | - | Adaption Kurbel/Einlassnockenwelle erfolgt. | A2L-NAME=B_phade |

### RES_0X4007

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | BIT | - | BITFIELD | - | BF_0x4007_0 | - | - | - | Bitfeld 1 Statusinformationen für Schalterstellungen | - |
| - | BIT | - | BITFIELD | - | BF_0x4007_1 | - | - | - | Bitfeld 2 Statusinformationen für Schalterstellungen | - |

### RES_0X4008

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EV_ADD_WERT | kg/h | - | char | - | - | 8 | - | - | Adaption Einstritzventil Offset | A2L-NAME=eisyevkoff |
| STAT_EV_FAC_WERT | - | - | unsigned char | - | - | 0,0078125 | - | - | Adaption Einspritzventil Faktor | A2L-NAME=eisyevfkaf |
| STAT_DK_ADD_WERT | kg/h | - | char | - | - | 8 | - | - | Adaption Drosselkappe Offset | A2L-NAME=eisydkkoff |
| STAT_DK_FAC_WERT | - | - | unsigned char | - | - | 0,0078125 | - | - | Adaption Drosselklappe Faktor | A2L-NAME=eisydkfkaf |

### RES_0X400A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAC_1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus Lambdaregelungsadaption für Bank 1. Lambda Adaption carried out by customer (multiplicative share). | A2L-NAME=frann_w |
| STAT_FAC_2_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus Lambdaregelungsadaption für Bank 2. Lambda Adaption carried out by customer (multiplicative share). | A2L-NAME=frann2_w |
| STAT_PWM_UP_1_WERT | % | high | unsigned int | - | - | 0,0030517578125 | - | - | Tastverhältnis für Lambdasondenheizung für Bank 1. | A2L-NAME=tahrlsu_w |
| STAT_PWM_UP_2_WERT | % | high | unsigned int | - | - | 0,0030517578125 | - | - | Tastverhältnis für Lambdasondenheizung fur Bank 2. | A2L-NAME=tahrlsu2_w |

### RES_0X400B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLW_VVT_WERT | ° | high | unsigned int | - | - | 0,1 | - | - | VVT Exzenterwinkel Sollwert | A2L-NAME=exwinks_w |
| STAT_ISTW_VVT_WERT | ° | high | unsigned int | - | - | 0,1 | - | - | VVT Exzenterwinkel Istwert | A2L-NAME=exwnki_w |
| STAT_I_VVT_WERT | A | high | int | - | - | 0,006103515625 | - | - | VVT-Stellmotorstrom, Vorzeichen kennzeichnet Bewegungsrichtung | A2L-NAME=ivvtm_w |
| DUMMY_RESULT_01 | data | - | data[1] | - | - | - | - | - | HighByte von VVT-Spannung Leitungsversorgung hat Wert 0x00 | - |
| STAT_U_VVT_WERT | V | - | unsigned char | - | - | 0,1 | - | - | VVT-Spannung Leitungsversorgung | A2L-NAME=umtr |
| STAT_SRF_VVT_WERT | ° | high | unsigned int | - | - | 0,02197265625 | - | - | VVT-SensorRohwert Fuehrungssensor | A2L-NAME=exwnkfsr_w |
| STAT_NOTL_VVT | 0-n | - | unsigned char | - | T_B_VVTNOTL_DOP | - | - | - | VVT-Notlaufzustand | A2L-NAME=B_vvtnotl |
| STAT_SUEL_VVT_WERT | - | - | unsigned char | - | - | - | - | - | VVT-Systemueberlast | A2L-NAME=stdvovrld |

### RES_0X4015

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BSZSIFNP_WERT | s | high | unsigned long | - | - | - | - | - | Serviceintervall Betriebsstundenzaehler (bszsifnp_l) | A2L-NAME=bszsifnp_l |
| STAT_TMOTB1_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Kühlmitteltemperatur innerhalb Bereich 1 | A2L-NAME=tmotb1_w |
| STAT_TMOTB2_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Kühlmitteltemperatur innerhalb Bereich 2 | A2L-NAME=tmotb2_w |
| STAT_TMOTB3_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Kühlmitteltemperatur innerhalb Bereich 3 | A2L-NAME=tmotb3_w |
| STAT_TMOTB4_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Kühlmitteltemperatur innerhalb Bereich 4 | A2L-NAME=tmotb4_w |
| STAT_TMOTB5_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Kühlmitteltemperatur innerhalb Bereich 5 | A2L-NAME=tmotb5_w |
| STAT_TOELB1_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Motoröltemperatur innerhalb Bereich 1 | A2L-NAME=toelb1_w |
| STAT_TOELB2_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Motoröltemperatur innerhalb Bereich 2 | A2L-NAME=toelb2_w |
| STAT_TOELB3_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Motoröltemperatur innerhalb Bereich 3 | A2L-NAME=toelb3_w |
| STAT_TOELB4_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Motoröltemperatur innerhalb Bereich 4 | A2L-NAME=toelb4_w |
| STAT_TOELB5_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Motoröltemperatur innerhalb Bereich 5 | A2L-NAME=toelb5_w |
| STAT_TGETB1_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Getriebeöltemperatur innerhalb Bereich 1 | A2L-NAME=tgetb1_w |
| STAT_TGETB2_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Getriebeöltemperatur innerhalb Bereich 2 | A2L-NAME=tgetb2_w |
| STAT_TGETB3_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Getriebeöltemperatur innerhalb Bereich 3 | A2L-NAME=tgetb3_w |
| STAT_TGETB4_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Getriebeöltemperatur innerhalb Bereich 4 | A2L-NAME=tgetb4_w |
| STAT_TGETB5_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Getriebeöltemperatur innerhalb Bereich 5 | A2L-NAME=tgetb5_w |
| STAT_TUMGB1_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Umgebungstemperatur innerhalb Bereich 1 | A2L-NAME=tumgb1_w |
| STAT_TUMGB2_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Umgebungstemperatur innerhalb Bereich 2 | A2L-NAME=tumgb2_w |
| STAT_TUMGB3_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Umgebungstemperatur innerhalb Bereich 3 | A2L-NAME=tumgb3_w |
| STAT_TUMGB4_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Umgebungstemperatur innerhalb Bereich 4 | A2L-NAME=tumgb4_w |
| STAT_TUMGB5_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Umgebungstemperatur innerhalb Bereich 5 | A2L-NAME=tumgb5_w |
| STAT_N_STET_WERT | - | high | unsigned long | - | - | - | - | - | Zähler Anzahl Statistikeinträge | A2L-NAME=histsgges |
| STAT_TECU_1_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 1.1 | A2L-NAME=histsg11 |
| STAT_TECU_1_2_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 1.2 | A2L-NAME=histsg12 |
| STAT_TECU_1_3_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 1.3 | A2L-NAME=histsg13 |
| STAT_TECU_1_4_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 1.4 | A2L-NAME=histsg14 |
| STAT_TECU_1_5_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 1.5 | A2L-NAME=histsg15 |
| STAT_TECU_2_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 2.1 | A2L-NAME=histsg21 |
| STAT_TECU_2_2_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 2.2 | A2L-NAME=histsg22 |
| STAT_TECU_2_3_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 2.3 | A2L-NAME=histsg23 |
| STAT_TECU_2_4_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 2.4 | A2L-NAME=histsg24 |
| STAT_TECU_2_5_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 2.5 | A2L-NAME=histsg25 |
| STAT_TECU_3_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 3.1 | A2L-NAME=histsg31 |
| STAT_TECU_3_2_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 3.2 | A2L-NAME=histsg32 |
| STAT_TECU_3_3_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 3.3 | A2L-NAME=histsg33 |
| STAT_TECU_3_4_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 3.4 | A2L-NAME=histsg34 |
| STAT_TECU_3_5_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 3.5 | A2L-NAME=histsg35 |
| STAT_TECU_4_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 4.1 | A2L-NAME=histsg41 |
| STAT_TECU_4_2_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 4.2 | A2L-NAME=histsg42 |
| STAT_TECU_4_3_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 4.3 | A2L-NAME=histsg43 |
| STAT_TECU_4_4_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 4.4 | A2L-NAME=histsg44 |
| STAT_TECU_4_5_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 4.5 | A2L-NAME=histsg45 |
| STAT_TECU_5_1_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 5.1 | A2L-NAME=histsg51 |
| STAT_TECU_5_2_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 5.2 | A2L-NAME=histsg52 |
| STAT_TECU_5_3_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 5.3 | A2L-NAME=histsg53 |
| STAT_TECU_5_4_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 5.4 | A2L-NAME=histsg54 |
| STAT_TECU_5_5_WERT | HEX | high | unsigned int | - | - | - | - | - | Statistikkennfeld Wert 5.5 | A2L-NAME=histsg55 |
| STAT_SSV_NMOT_1_WERT | HEX | - | unsigned char | - | - | - | - | - | Stützstellenverteilung nmot-1 SG-Temperaturhistogramm (Kennwert STNSG1) | A2L-NAME=STNSG1 |
| STAT_SSV_NMOT_2_WERT | HEX | - | unsigned char | - | - | - | - | - | Stützstellenverteilung nmot-2 SG-Temperaturhistogramm (Kennwert STNSG2) | A2L-NAME=STNSG2 |
| STAT_SSV_NMOT_3_WERT | HEX | - | unsigned char | - | - | - | - | - | Stützstellenverteilung nmot-3 SG-Temperaturhistogramm (Kennwert STNSG3) | A2L-NAME=STNSG3 |
| STAT_SSV_NMOT_4_WERT | HEX | - | unsigned char | - | - | - | - | - | Stützstellenverteilung nmot-4 SG-Temperaturhistogramm (Kennwert STNSG4) | A2L-NAME=STNSG4 |
| STAT_SSV_NMOT_5_WERT | HEX | - | unsigned char | - | - | - | - | - | Stützstellenverteilung nmot-5 SG-Temperaturhistogramm (Kennwert STNSG5) | A2L-NAME=STNSG5 |
| STAT_SSV_TSG_1_WERT | HEX | - | unsigned char | - | - | - | - | - | 1Byte Stützstellenverteilung nmot-1 SG-Temperatur | A2L-NAME=STTSG1 |
| STAT_SSV_TSG_2_WERT | HEX | - | unsigned char | - | - | - | - | - | 1Byte Stützstellenverteilung nmot-2 SG-Temperatur | A2L-NAME=STTSG2 |
| STAT_SSV_TSG_3_WERT | HEX | - | unsigned char | - | - | - | - | - | 1Byte Stützstellenverteilung nmot-3 SG-Temperatur | A2L-NAME=STTSG3 |
| STAT_SSV_TSG_4_WERT | HEX | - | unsigned char | - | - | - | - | - | 1Byte Stützstellenverteilung nmot-4 SG-Temperatur | A2L-NAME=STTSG4 |
| STAT_SSV_TSG_5_WERT | HEX | - | unsigned char | - | - | - | - | - | 1Byte Stützstellenverteilung nmot-5 SG-Temperatur | A2L-NAME=STTSG5 |
| STAT_TINT_SGTH_WERT | - | - | unsigned char | - | - | - | - | - | 1Byte Zeitintervall für Erfassung SG-Temperatur-Histogramm | A2L-NAME=TSTSG |
| STAT_MAX_VVT_ENTEMP_WERT | °C | high | unsigned int | - | - | 0,75 | - | -48,0 | Max. VVT-Endstufentemperatur in der Zeit der Übertretung (tvvtest_w STWTES) für Eintrag in Block 1 von Highscore Tabelle | A2L-NAME=hc1_tvvtes |
| STAT_STGTMP_A_MAX_VVT_ENTMP_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Steuergerätetemperatur, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 1 von Highscore Tabelle | A2L-NAME=hc1_tsg |
| STAT_KMST_A_MAX_ENTMP_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 1 von Highscore Tabelle | A2L-NAME=hc1_kmstand |
| STAT_ASLTMP_A_MAX_ENTMP_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ansauglufttemperatur gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 1 von Highscore Tabelle | A2L-NAME=hc1_tans |
| STAT_TUE_WERT | s | high | unsigned int | - | - | - | - | - | Die Dauer der Übertretung (tvvtes_w STVVTES) für Eintrag in Block 1 | A2L-NAME=hc1_ttvvte |
| STAT_MAX_VVT_ENTEMP2_WERT | °C | high | unsigned int | - | - | 0,75 | - | -48,0 | Max. VVT-Endstufentemperatur in der Zeit der Übertretung (tvvtest_w STWTES) für Eintrag in Block 2 von Highscore Tabelle | A2L-NAME=hc2_tvvtes |
| STAT_STGTMP_A_MAX_VVT_ENTMP2_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Steuergerätetemperatur, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 2 von Highscore Tabelle | A2L-NAME=hc2_tsg |
| STAT_KMST_A_MAX_ENTMP2_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 2 von Highscore Tabelle | A2L-NAME=hc2_kmstand |
| STAT_ASLTMP_A_MAX_ENTMP2_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ansauglufttemperatur gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 2 von Highscore Tabelle | A2L-NAME=hc2_tans |
| STAT_TUE2_WERT | s | high | unsigned int | - | - | - | - | - | Die Dauer der Übertretung (tvvtes_w STVVTES) für Eintrag in Block 2 | A2L-NAME=hc2_ttvvte |
| STAT_MAX_VVT_ENTEMP3_WERT | °C | high | unsigned int | - | - | 0,75 | - | -48,0 | Max. VVT-Endstufentemperatur in der Zeit der Übertretung (tvvtest_w STWTES) für Eintrag in Block 3 von Highscore Tabelle | A2L-NAME=hc3_tvvtes |
| STAT_STGTMP_A_MAX_VVT_ENTMP3_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Steuergerätetemperatur, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 3 von Highscore Tabelle | A2L-NAME=hc3_tsg |
| STAT_KMST_A_MAX_ENTMP3_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 3 von Highscore Tabelle | A2L-NAME=hc3_kmstand |
| STAT_ASLTMP_A_MAX_ENTMP3_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ansauglufttemperatur gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 3 von Highscore Tabelle | A2L-NAME=hc3_tans |
| STAT_TUE3_WERT | s | high | unsigned int | - | - | - | - | - | Die Dauer der Übertretung (tvvtes_w STVVTES) für Eintrag in Block 3 | A2L-NAME=hc3_ttvvte |
| STAT_MAX_VVT_ENTEMP4_WERT | °C | high | unsigned int | - | - | 0,75 | - | -48,0 | Max. VVT-Endstufentemperatur in der Zeit der Übertretung (tvvtest_w STWTES) für Eintrag in Block 4 von Highscore Tabelle | A2L-NAME=hc4_tvvtes |
| STAT_STGTMP_A_MAX_VVT_ENTMP4_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Steuergerätetemperatur, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 4 von Highscore Tabelle | A2L-NAME=hc4_tsg |
| STAT_KMST_A_MAX_ENTMP4_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 4 von Highscore Tabelle | A2L-NAME=hc4_kmstand |
| STAT_ASLTMP_A_MAX_ENTMP4_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ansauglufttemperatur gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 4 von Highscore Tabelle | A2L-NAME=hc4_tans |
| STAT_TUE4_WERT | s | high | unsigned int | - | - | - | - | - | Die Dauer der Übertretung (tvvtes_w STVVTES) für Eintrag in Block 4 | A2L-NAME=hc4_ttvvte |
| STAT_MAX_VVT_ENTEMP5_WERT | °C | high | unsigned int | - | - | 0,75 | - | -48,0 | Max. VVT-Endstufentemperatur in der Zeit der Übertretung (tvvtest_w STWTES) für Eintrag in Block 5 von Highscore Tabelle | A2L-NAME=hc5_tvvtes |
| STAT_STGTMP_A_MAX_VVT_ENTMP5_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Steuergerätetemperatur, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 5 von Highscore Tabelle | A2L-NAME=hc5_tsg |
| STAT_KMST_A_MAX_ENTMP5_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand, gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 5 von Highscore Tabelle | A2L-NAME=hc5_kmstand |
| STAT_ASLTMP_A_MAX_ENTMP5_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ansauglufttemperatur gemessen zur Zeit der max. Endstufentemperatur für Eintrag in Block 5 von Highscore Tabelle | A2L-NAME=hc5_tans |
| STAT_TUE5_WERT | s | high | unsigned int | - | - | - | - | - | Die Dauer der Übertretung (tvvtes_w STVVTES) für Eintrag in Block 5 | A2L-NAME=hc5_ttvvte |

### RES_0X4024

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLLW_EWAP_WERT | 1/min | - | unsigned char | - | - | - | - | - | Ansteuerwert elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) | A2L-NAME=Layer_nEwpDes |
| STAT_ISTW_EWAP_WERT | 1/min | - | unsigned char | - | - | - | - | - | Istwert elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) | A2L-NAME=BasSvrAppl_nActPmp |
| STAT_U_EWAP_WERT | V | - | unsigned char | - | - | 0,1 | - | - | Pumpenspannung elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) | A2L-NAME=BasSvrAppl_uSplyPmp |
| STAT_T_EWAP_WERT | °C | - | unsigned char | - | - | - | - | -50,0 | Pumpentemperatur elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) | A2L-NAME=BasSvrAppl_tPmp |
| STAT_I_EWAP_WERT | % | - | unsigned char | - | - | 0,5 | - | - | Pumpenstrom elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) | A2L-NAME=BasSvrAppl_iPmp |
| STAT_VAR_EWAP_WERT | - | - | unsigned char | - | - | - | - | - | Variante elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) | A2L-NAME=BasSvrAppl_Sig_EwpData |
| - | BIT | - | BITFIELD | - | BF_0x4024_0 | - | - | - | Error Bytefield | - |
| STAT_TMOT_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Motortemperatur | A2L-NAME=tmot |
| STAT_TEMP_KUEHLERAUSLASS_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Temperatur Motorkühlerausgang (Kühlmittel) | A2L-NAME=tka |
| STAT_UBAT_WERT | V | high | unsigned int | - | - | 0,00025 | - | 6,0 | Batteriespannung | A2L-NAME=ubatt_w |

### RES_0X4025

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_I_HA_WERT | - | high | unsigned int | - | - | 0,0009765625 | - | - | Hinterachsuebersetzung Die aktuelle bzw. verwendete Übersetzungsverhaeltnis der Hinterachse. | A2L-NAME=iha_w |
| STAT_STATUS_HAL | 0-n | - | unsigned char | - | T_STATE_HAL_INTERN_DOP | - | - | - | Interner Status der Lernfunktion. | A2L-NAME=SwSABMW_stReAxlInt |
| STAT_I_HAL_HA_WERT | - | high | unsigned int | - | - | 0,0009765625 | - | - | Die aktuell im Lern-/verifikationszyklus bestimmte Übersetzungsverhaeltnis der Hinterachse. | A2L-NAME=SwSABMW_rCurrReAxl |
| STAT_STATUS_KSU | 0-n | - | unsigned char | - | T_STATE_KSU_INTERN_DOP | - | - | - | Interne Status der Kupplungsschlupfunterdrückungsfunktion KSU. | A2L-NAME=SwSABMW_stBytPlausReAxl |

### RES_0X4026

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OBDCOND_WERT | - | high | unsigned int | - | - | - | - | - | OBD Monitoring Conditions Encountered Counts (general denominator) | A2L-NAME=DIUMPR_ctGenDenom |
| STAT_IGNCNTR_WERT | - | high | unsigned int | - | - | - | - | - | Ignition Counter | A2L-NAME=DIUMPR_ctIgn |
| STAT_CATCOMP1_WERT | - | high | unsigned int | - | - | - | - | - | Catalyst Monitor Completion Counts Bank 1 (Numerator) | A2L-NAME=BasSvrAppl_ctCatMonBank1Num |
| STAT_CATCOND1_WERT | - | high | unsigned int | - | - | - | - | - | Catalyst Monitor Conditions Encountered Counts Bank 1 (Denominator) | A2L-NAME=BasSvrAppl_ctCatMonBank1Den |
| STAT_CATCOMP2_WERT | - | high | unsigned int | - | - | - | - | - | Catalyst Monitor Completion Counts Bank 2 (Numerator) | A2L-NAME=BasSvrAppl_ctCatMonBank2Num |
| STAT_CATCOND2_WERT | - | high | unsigned int | - | - | - | - | - | Catalyst Monitor Conditions Encountered Counts Bank 2 (Denominator) | A2L-NAME=BasSvrAppl_ctCatMonBank2Den |
| STAT_O2SCOMP1_WERT | - | high | unsigned int | - | - | - | - | - | O2 Sensor Monitor Completion Counts Bank 1 (Numerator) | A2L-NAME=BasSvrAppl_ctOxiSensBank1Num |
| STAT_O2SCOND1_WERT | - | high | unsigned int | - | - | - | - | - | O2 Sensor Monitor Conditions Encountered Counts Bank 1 (Denominator) | A2L-NAME=BasSvrAppl_ctOxiSensBank1Den |
| STAT_O2SCOMP2_WERT | - | high | unsigned int | - | - | - | - | - | O2 Sensor Monitor Completion Counts Bank 2 (Numerator) | A2L-NAME=BasSvrAppl_ctOxiSensBank2Num |
| STAT_O2SCOND2_WERT | - | high | unsigned int | - | - | - | - | - | O2 Sensor Monitor Conditions Encountered Counts Bank 2 (Denominator) | A2L-NAME=BasSvrAppl_ctOxiSensBank2Den |
| STAT_EGRCOMP_WERT | - | high | unsigned int | - | - | - | - | - | EGR Monitor Completion Condition Counts (Numerator) | A2L-NAME=BasSvrAppl_ctEGRMonNum |
| STAT_EGRCOND_WERT | - | high | unsigned int | - | - | - | - | - | EGR Monitor Conditions Encountered Counts (Denominator) | A2L-NAME=BasSvrAppl_ctEGRMonDen |
| STAT_AIRCOMP1_WERT | - | high | unsigned int | - | - | - | - | - | AIR Monitor Completion Condition Counts Bank 1 (Secondary Air) (Numerator) | A2L-NAME=BasSvrAppl_ctAirMonNum |
| STAT_AIRCOND1_WERT | - | high | unsigned int | - | - | - | - | - | AIR Monitor Conditions Encountered Counts Bank 1 (Secondary Air) (Denominator) | A2L-NAME=BasSvrAppl_ctAirMonDen |
| STAT_EVAPCOMP_WERT | - | high | unsigned int | - | - | - | - | - | EVAP Monitor Completion Condition Counts (Numerator) | A2L-NAME=BasSvrAppl_ctEVAPMonNum |
| STAT_EVAPCOND_WERT | - | high | unsigned int | - | - | - | - | - | EVAP Monitor Conditions Encountered Counts (Denominator) | A2L-NAME=BasSvrAppl_ctEVAPMonDen |
| STAT_SO2COMP1_WERT | - | high | unsigned int | - | - | - | - | - | SO2 Sensor Monitor Completion Condition Counts Bank 1 (Numerator) | A2L-NAME=BasSvrAppl_ctSOSensBank1Num |
| STAT_SO2COND1_WERT | - | high | unsigned int | - | - | - | - | - | SO2 Sensor Monitor Conditions Encountered Counts Bank 1 (Denominator) | A2L-NAME=BasSvrAppl_ctSOSensBank1Den |
| STAT_SO2COMP2_WERT | - | high | unsigned int | - | - | - | - | - | SO2 Sensor Monitor Completion Condition Counts Bank 2 (Numerator) | A2L-NAME=BasSvrAppl_ctSOSensBank2Num |
| STAT_SO2COND2_WERT | - | high | unsigned int | - | - | - | - | - | SO2 Sensor Monitor Conditions Encountered Counts Bank 2 (Denominator) | A2L-NAME=BasSvrAppl_ctSOSensBank2Den |

### RES_0X4029

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_FID_BHKT_WERT | - | high | unsigned int | - | - | - | - | - | Katalysator Bank1-Numerator | A2L-NAME=DIUMPR_Num.FID_BHKT |
| STAT_DEN_FID_BHKT_WERT | - | high | unsigned int | - | - | - | - | - | Katalysator Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_BHKT |
| STAT_NUM_FID_CDLSU_WERT | - | high | unsigned int | - | - | - | - | - | LSU dynamisch zu langsam Bank1 Numerator | A2L-NAME=DIUMPR_Num.FID_CDLSU |
| STAT_DEN_FID_CDLSU_WERT | - | high | unsigned int | - | - | - | - | - | LSU dynamisch zu langsam Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDLSU |
| STAT_NUM_FID_CULSU_WERT | - | high | unsigned int | - | - | - | - | - | Spannungsüberwachung LSU Bank1-Numerator | A2L-NAME=DIUMPR_Num.FID_CULSU |
| STAT_DEN_FID_CULSU_WERT | - | high | unsigned int | - | - | - | - | - | Spannungsüberwachung LSU Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CULSU |
| STAT_NUM_FID_CPLSU_WERT | - | high | unsigned int | - | - | - | - | - | Plausibilität der LSU Bank1-Numerator | A2L-NAME=DIUMPR_Num.FID_CPLSU |
| STAT_DEN_FID_CPLSU_WERT | - | high | unsigned int | - | - | - | - | - | Plausibilität der LSU Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CPLSU |
| STAT_NUM_FID_ATEVTLD_WERT | - | high | unsigned int | - | - | - | - | - | TEV-Check mit Tankleckagediagnose aktiv Numerator | A2L-NAME=DIUMPR_Num.FID_atevtld |
| STAT_DEN_FID_ATEVTLD_WERT | - | high | unsigned int | - | - | - | - | - | TEV-Check mit Tankleckage aktiv Denumerator | A2L-NAME=DIUMPR_Den.FID_atevtld |
| STAT_NUM_FID_CTESG_WERT | - | high | unsigned int | - | - | - | - | - | Tankdiagnose, Grobleck-Numerator | A2L-NAME=DIUMPR_Num.FID_CTESG |
| STAT_DEN_FID_CTESG_WERT | - | high | unsigned int | - | - | - | - | - | Tankdiagnose, Grobleck-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTESG |
| STAT_NUM_FID_CDMTK_WERT | - | high | unsigned int | - | - | - | - | - | Tankdiagnose, Feinstleck-Numerator | A2L-NAME=DIUMPR_Num.FID_CDMTK |
| STAT_DEN_FID_CDMTK_WERT | - | high | unsigned int | - | - | - | - | - | Tankdiagnose, Feinstleck-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDMTK |
| STAT_NUM_FID_CDMTL_WERT | - | high | unsigned int | - | - | - | - | - | Tankdiagnose, Modulfehler-Numerator | A2L-NAME=DIUMPR_Num.FID_CDMTL |
| STAT_DEN_FID_CDMTL_WERT | - | high | unsigned int | - | - | - | - | - | Tankdiagnose, Modulfehler-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDMTL |
| STAT_NUM_FID_CENWS_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellensteuerung Einlass Bank 1-Numerator | A2L-NAME=DIUMPR_Num.FID_CENWS |
| STAT_DEN_FID_CENWS_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellensteuerung Einlass Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CENWS |
| STAT_NUM_FID_CANWS_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellensteuerung Auslass Bank1-Numerator | A2L-NAME=DIUMPR_Num.FID_CANWS |
| STAT_DEN_FID_CANWS_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellensteuerung Auslass Bank 1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CANWS |
| STAT_NUM_FID_CNWVE_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellenverriegelungsdiagnose Einlass Bank1-Numerator | A2L-NAME=DIUMPR_Num.FID_CNWVE |
| STAT_DEN_FID_CNWVE_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellenverriegelungsdiagnose Einlass Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CNWVE |
| STAT_NUM_FID_CNWVA_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellenverriegelungsdiagnose Auslass Bank1-Numerator | A2L-NAME=DIUMPR_Num.FID_CNWVA |
| STAT_DEN_FID_CNWVA_WERT | - | high | unsigned int | - | - | - | - | - | Nockenwellenverriegelungsdiagnose Ausass Bank1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CNWVA |
| STAT_NUM_FID_EPMCASOFSERRCASI1_WERT | - | high | unsigned int | - | - | - | - | - | Zuordnung Einlassnockenwelle zu Kurbelwelle-Numerator | A2L-NAME=DIUMPR_Num.FID_EpmCaSOfsErrCaSI1 |
| STAT_DEN_FID_EPMCASOFSERRCASI1_WERT | - | high | unsigned int | - | - | - | - | - | Zuordnung Einlassnockenwelle zu Kurbelwelle-Denumerator | A2L-NAME=DIUMPR_Den.FID_EpmCaSOfsErrCaSI1 |
| STAT_NUM_FID_EPMCASOFSERRCASO1_WERT | - | high | unsigned int | - | - | - | - | - | Zuordnung Auslassnockenwelle zu Kurbelwelle-Numerator | A2L-NAME=DIUMPR_Num.FID_EpmCaSOfsErrCaSO1 |
| STAT_DEN_FID_EPMCASOFSERRCASO1_WERT | - | high | unsigned int | - | - | - | - | - | Zuordnung Auslassnockenwelle zu Kurbelwelle Numerator | A2L-NAME=DIUMPR_Den.FID_EpmCaSOfsErrCaSO1 |
| STAT_NUM_FID_BLASH_WERT | - | high | unsigned int | - | - | - | - | - | Lambdasondenalterung hinter KAT-Numerator | A2L-NAME=DIUMPR_Num.FID_BLASH |
| STAT_DEN_FID_BLASH_WERT | - | high | unsigned int | - | - | - | - | - | Lambdasondenalterung hinter KAT-Denumerator | A2L-NAME=DIUMPR_Den.FID_BLASH |
| STAT_NUM_FID_BHDYRE_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Delay time für O2 Sensor nach Hauptkatalysator-Numerator | A2L-NAME=DIUMPR_Num.FID_BHDYRE |
| STAT_DEN_FID_BHDYRE_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Delay time für O2 Sensor nach Hauptkatalysator-Denumerator | A2L-NAME=DIUMPR_Den.FID_BHDYRE |
| STAT_NUM_FID_ADSLS_WERT | - | high | unsigned int | - | - | - | - | - | Sekundärluftsystem-Numerator | A2L-NAME=DIUMPR_Num.FID_ADSLS |
| STAT_DEN_FID_ADSLS_WERT | - | high | unsigned int | - | - | - | - | - | Sekundärluftsystem-Denumerator | A2L-NAME=DIUMPR_Den.FID_ADSLS |
| STAT_NUM_FID_CSLSU_WERT | - | high | unsigned int | - | - | - | - | - | Überwachung des Schubadaptionsfaktors LSU-Numerator | A2L-NAME=DIUMPR_Num.FID_CSLSU |
| STAT_DEN_FID_CSLSU_WERT | - | high | unsigned int | - | - | - | - | - | Überwachung des Schubadaptionsfaktors LSU-Denumerator | A2L-NAME=DIUMPR_Den.FID_CSLSU |
| STAT_NUM_FID_CTRSH_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Transition Time für O2Sensor nach Hauptkat-Numerator | A2L-NAME=DIUMPR_Num.FID_CTRSH |
| STAT_DEN_FID_CTRSH_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Transition Time für O2Sensor nach Hauptkat-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTRSH |
| STAT_NUM_FID_DVVTLRUWRN_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ventilhubverstellung Warnschwelle Regelabweichung aus Lagereglerüberwachung- Numerator | A2L-NAME=DIUMPR_Num.FID_DVVTLRUWRN |
| STAT_DEN_FID_DVVTLRUWRN_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ventilhubverstellung Warnschwelle Regelabweichung aus Lagereglerüberwachung- Denominator | A2L-NAME=DIUMPR_Den.FID_DVVTLRUWRN |
| STAT_NUM_FID_DVVTLRUERR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ventilhubverstellung Stellgliedfehler aus Lagereglerüberwachung- Numerator | A2L-NAME=DIUMPR_Num.FID_DVVTLRUERR |
| STAT_DEN_FID_DVVTLRUERR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ventilhubverstellung Stellgliedfehler aus Lagereglerüberwachung- Denominator | A2L-NAME=DIUMPR_Den.FID_DVVTLRUERR |
| STAT_NUM_FID_ATEVSPL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV zweite Einleitstelle mit DMTL zweite Einleitstelle während Fahrt Numerator | A2L-NAME=DIUMPR_Num.FId_atevspl |
| STAT_DEN_FID_ATEVSPL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV zweite Einleitstelle mit DMTL zweite Einleitstelle während Fahrt Denominator | A2L-NAME=DIUMPR_Den.FId_atevspl |
| STAT_NUM_FID_CTEVSPLB_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV zweite Einleitstelle mit DMTL Prüfung auf Blockade im Nachlauf Numerator | A2L-NAME=DIUMPR_Num.FId_ctevsplb |
| STAT_DEN_FID_CTEVSPLB_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV zweite Einleitstelle mit DMTL Prüfung auf Blockade im Nachlauf Denominator | A2L-NAME=DIUMPR_Den.FId_ctevsplb |
| STAT_NUM_FID_BDLSU_WERT | - | high | unsigned int | - | - | - | - | - | DDYLSU Adaption Numerator | A2L-NAME=DIUMPR_Num.FID_BDLSU |
| STAT_DEN_FID_BDLSU_WERT | - | high | unsigned int | - | - | - | - | - | DDYLSU Adaption Denominator | A2L-NAME=DIUMPR_Den.FID_BDLSU |
| STAT_NUM_FID_ADSLSP_WERT | - | high | unsigned int | - | - | - | - | - | Sekundärluftdiagnose über Drucksensor Numerator | A2L-NAME=DIUMPR_Den.FID_ADSLSP |
| STAT_DEN_FID_ADSLSP_WERT | - | high | unsigned int | - | - | - | - | - | Sekundärluftdiagnose über Drucksensor Denominator | A2L-NAME=DIUMPR_Num.FID_ADSLSP |
| STAT_NUM_FID_HEGOS2B1LIM_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Sondendynamik hinter Kat, Limit Time für O2Sensor 2 Bank1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1Lim |
| STAT_DEN_FID_HEGOS2B1LIM_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Sondendynamik hinter Kat, Limit Time für O2Sensor 2 Bank1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1Lim |
| STAT_NUM_FID_NVLDSMLLEAK6_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose NVLD Small Leak Bedingung 6°C Numerator | A2L-NAME=DIUMPR_Num.FId_NVLDSmlLeak6 |
| STAT_DEN_FID_NVLDSMLLEAK6_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose NVLD Small Leak Bedingung 6°C Denominator | A2L-NAME=DIUMPR_Den.FId_NVLDSmlLeak6 |
| STAT_NUM_FID_HEGOS2B1VIRTTARLEANLIM_WERT | - | high | unsigned int | - | - | - | - | - | Virtual Fid for voltage limitation Target Lean check, Sensor 2 bank 1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1VirtTarLeanLim |
| STAT_DEN_FID_HEGOS2B1VIRTTARLEANLIM_WERT | - | high | unsigned int | - | - | - | - | - | Virtual Fid for voltage limitation Target Lean check, Sensor 2 bank 1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1VirtTarLeanLim |
| STAT_NUM_FID_HEGOS2B1VIRTTARRICHLIM_WERT | - | high | unsigned int | - | - | - | - | - | Virtual Fid for voltage limitation Target Rich check, Sensor 2 bank 1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1VirtTarRichLim |
| STAT_DEN_FID_HEGOS2B1VIRTTARRICHLIM_WERT | - | high | unsigned int | - | - | - | - | - | Virtual Fid for voltage limitation Target Rich check, Sensor 2 bank 1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1VirtTarRichLim |
| STAT_NUM_FID_HEGOS2B1TRANRL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnosis: Transition Time Rich to Lean for O2 Sensor 2, Bank 1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1TranRL |
| STAT_DEN_FID_HEGOS2B1TRANRL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnosis: Transition Time Rich to Lean for O2 Sensor 2, Bank 1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1TranRL |
| STAT_NUM_FID_HEGOS2B1TRANLR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnosis: Transition Time Lean to Rich for O2 Sensor 2, Bank 1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1TranLR |
| STAT_DEN_FID_HEGOS2B1TRANLR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnosis: Transition Time Lean to Rich for O2 Sensor 2, Bank 1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1TranLR |
| STAT_NUM_FID_HEGOS2B1DLY_WERT | - | high | unsigned int | - | - | - | - | - | Diagnosis Delay time für O2 Sensor 2, Bank1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1Dly |
| STAT_DEN_FID_HEGOS2B1DLY_WERT | - | high | unsigned int | - | - | - | - | - | Diagnosis Delay time für O2 Sensor 2, Bank1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1Dly |
| STAT_NUM_FID_HEGOS2B1DLYLRNUM_WERT | - | high | unsigned int | - | - | - | - | - | diagnosis delay time for O2 sensor 2, bank1 Numerator | A2L-NAME=DIUMPR_Num.FId_HEGOS2B1DlyLRNum |
| STAT_DEN_FID_HEGOS2B1DLYLRNUM_WERT | - | high | unsigned int | - | - | - | - | - | diagnosis delay time for O2 sensor 2, bank1 Denominator | A2L-NAME=DIUMPR_Den.FId_HEGOS2B1DlyLRNum |
| STAT_NUM_FID_BPLSU_WERT | - | high | unsigned int | - | - | - | - | - | FID für Fehlerpfad DFP_PLLSU Numerator | A2L-NAME=DIUMPR_Num.FID_BPLSU |
| STAT_DEN_FID_BPLSU_WERT | - | high | unsigned int | - | - | - | - | - | FID für Fehlerpfad DFP_PLLSU Denominator | A2L-NAME=DIUMPR_Den.FID_BPLSU |

### RES_0X402A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_FID_CCUHR_WERT | - | high | unsigned int | - | - | - | - | - | CAN relativer Zeitgeber-Numerator | A2L-NAME=DIUMPR_Num.FID_CCUHR |
| STAT_DEN_FID_CCUHR_WERT | - | high | unsigned int | - | - | - | - | - | CAN relativer Zeitgeber-Denumerator | A2L-NAME=DIUMPR_Den.FID_CCUHR |
| STAT_NUM_FID_CHSHK_WERT | - | high | unsigned int | - | - | - | - | - | Heizung Lambdasonde hinter KAT-Numerator | A2L-NAME=DIUMPR_Num.FID_CHSHK |
| STAT_DEN_FID_CHSHK_WERT | - | high | unsigned int | - | - | - | - | - | Heizung Lambdasonde hinter KAT-Denumerator | A2L-NAME=DIUMPR_Den.FID_CHSHK |
| STAT_NUM_FID_CHSV_WERT | - | high | unsigned int | - | - | - | - | - | Heizung Lambdasonde vor KAT-Numerator | A2L-NAME=DIUMPR_Num.FID_CHSV |
| STAT_DEN_FID_CHSV_WERT | - | high | unsigned int | - | - | - | - | - | Heizung Lambdasonde vor KAT-Denumerator | A2L-NAME=DIUMPR_Den.FID_CHSV |
| STAT_NUM_FID_XXX1_WERT | - | high | unsigned int | - | - | - | - | - | nicht belegt | - |
| STAT_DEN_FID_XXX1_WERT | - | high | unsigned int | - | - | - | - | - | nicht belegt | - |
| STAT_NUM_FID_BLLRH_WERT | - | high | unsigned int | - | - | - | - | - | Leerlaufregelung-Numerator | A2L-NAME=DIUMPR_Num.FID_BLLRH |
| STAT_DEN_FID_BLLRH_WERT | - | high | unsigned int | - | - | - | - | - | Leerlaufregelung-Denumerator | A2L-NAME=DIUMPR_Den.FID_BLLRH |
| STAT_NUM_FID_BLLRKH_WERT | - | high | unsigned int | - | - | - | - | - | Leerlaufregelung während KAT-Heizen-Numerator | A2L-NAME=DIUMPR_Num.FID_BLLRKH |
| STAT_DEN_FID_BLLRKH_WERT | - | high | unsigned int | - | - | - | - | - | Leerlaufregelung während KAT-Heizen-Denumerator | A2L-NAME=DIUMPR_Den.FID_BLLRKH |
| STAT_NUM_FID_CPUR_WERT | - | high | unsigned int | - | - | - | - | - | Umgebungsdrucksensor Range Check-Numerator | A2L-NAME=DIUMPR_Num.FID_CPUR |
| STAT_DEN_FID_CPUR_WERT | - | high | unsigned int | - | - | - | - | - | Umgebungsdrucksensor Range Check-Denumerator | A2L-NAME=DIUMPR_Den.FID_CPUR |
| STAT_NUM_FID_CTAVDC_WERT | - | high | unsigned int | - | - | - | - | - | Kaltstartdiagnose Ansauglufttemperatursensor vor DK-Numerator | A2L-NAME=DIUMPR_Num.FID_CTAVDC |
| STAT_DEN_FID_CTAVDC_WERT | - | high | unsigned int | - | - | - | - | - | Kaltstartdiagnose Ansauglufttemperatursensor vor DK-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTAVDC |
| STAT_NUM_FID_CTAVDR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ansauglufttemperatursensor VDK-Denumerator | A2L-NAME=DIUMPR_Num.FID_CTAVDR |
| STAT_DEN_FID_CTAVDR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ansauglufttemperatursensor VDK-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTAVDR |
| STAT_NUM_FID_CTANLC_WERT | - | high | unsigned int | - | - | - | - | - | Kaltstartdiagnose Ansauglufttemperatursensor nach Luftfilter-Numerator | A2L-NAME=DIUMPR_Num.FID_CTANLC |
| STAT_DEN_FID_CTANLC_WERT | - | high | unsigned int | - | - | - | - | - | Kaltstartdiagnose Ansauglufttemperatursensor nach Luftfilter-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTANLC |
| STAT_NUM_FID_CTANLR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnsoe Ansauglufttemperatursensor nach Luftfilter-Numerator | A2L-NAME=DIUMPR_Num.FID_CTANLR |
| STAT_DEN_FID_CTANLR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ansauglufttemperatursensor nach Luftfilter-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTANLR |
| STAT_NUM_FID_CTM_WERT | - | high | unsigned int | - | - | - | - | - | Motortemperatur TMOT-Numerator | A2L-NAME=DIUMPR_Num.FID_CTM |
| STAT_DEN_FID_CTM_WERT | - | high | unsigned int | - | - | - | - | - | Motortemperatur TMOT-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTM |
| STAT_NUM_FID_CTMCS_WERT | - | high | unsigned int | - | - | - | - | - | Motortemperatur TMOT-Sensor bei Kaltstart-Numerator | A2L-NAME=DIUMPR_Num.FID_CTMCS |
| STAT_DEN_FID_CTMCS_WERT | - | high | unsigned int | - | - | - | - | - | Motortemperatur TMOT-Sensor bei Kaltstart-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTMCS |
| STAT_NUM_FID_CTUM_WERT | - | high | unsigned int | - | - | - | - | - | Umgebungstemperatur TUM-Numerator | A2L-NAME=DIUMPR_Num.FID_CTUM |
| STAT_DEN_FID_CTUM_WERT | - | high | unsigned int | - | - | - | - | - | Umgebungstemperatur TUM-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTUM |
| STAT_NUM_FID_CVFZ_WERT | - | high | unsigned int | - | - | - | - | - | Geschwindigkeitssignal-Numerator | A2L-NAME=DIUMPR_Num.FID_CVFZ |
| STAT_DEN_FID_CVFZ_WERT | - | high | unsigned int | - | - | - | - | - | Geschwindigkeitssignal-Denumerator | A2L-NAME=DIUMPR_Den.FID_CVFZ |
| STAT_NUM_FID_CDVEF_WERT | - | high | unsigned int | - | - | - | - | - | DV-E Fehler bei Federprüfung-Numerator | A2L-NAME=DIUMPR_Num.FID_CDVEF |
| STAT_DEN_FID_CDVEF_WERT | - | high | unsigned int | - | - | - | - | - | V-E Fehler bei Federprüfung-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDVEF |
| STAT_NUM_FID_CDVEL_WERT | - | high | unsigned int | - | - | - | - | - | DV-E Lageabweichung-Numerator | A2L-NAME=DIUMPR_Num.FID_CDVEL |
| STAT_DEN_FID_CDVEL_WERT | - | high | unsigned int | - | - | - | - | - | DV-E Lageabweichung-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDVEL |
| STAT_NUM_FID_CDVER_WERT | - | high | unsigned int | - | - | - | - | - | DV-E Regelbereich-Numerator | A2L-NAME=DIUMPR_Num.FID_CDVER |
| STAT_DEN_FID_CDVER_WERT | - | high | unsigned int | - | - | - | - | - | DV-E Regelbereich-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDVER |
| STAT_NUM_FID_BMW_HFMPL_WERT | - | high | unsigned int | - | - | - | - | - | Plausibilisierung Luftmassenmesser-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_HFMPL |
| STAT_DEN_FID_BMW_HFMPL_WERT | - | high | unsigned int | - | - | - | - | - | Plausibilisierung Luftmassenmesser-Denumerator | A2L-NAME=DIUMPR_Den.FID_BMW_HFMPL |
| STAT_NUM_FID_BMW_DKPSRPL_WERT | - | high | unsigned int | - | - | - | - | - | Plausibilisierung Drucksensor Saugrohr-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_DKPSRPL |
| STAT_DEN_FID_BMW_DKPSRPL_WERT | - | high | unsigned int | - | - | - | - | - | Plausiblisierung Drucksensor Saugrohr-Denumerator | A2L-NAME=DIUMPR_Den.FID_BMW_DKPSRPL |
| STAT_NUM_FID_CDK_WERT | - | high | unsigned int | - | - | - | - | - | DK-Potentiometer-Numerator | A2L-NAME=DIUMPR_Num.FID_CDK |
| STAT_DEN_FID_CDK_WERT | - | high | unsigned int | - | - | - | - | - | DK-Potentiometer-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDK |
| STAT_NUM_FID_CDK1P_WERT | - | high | unsigned int | - | - | - | - | - | Drosselklappenpotentiometer 1-Numerator | A2L-NAME=DIUMPR_Num.FID_CDK1P |
| STAT_DEN_FID_CDK1P_WERT | - | high | unsigned int | - | - | - | - | - | Drosselklappenpotentiometer 1-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDK1P |
| STAT_NUM_FID_CDK2P_WERT | - | high | unsigned int | - | - | - | - | - | Drosselklappenpotentiometer 2-Numerator | A2L-NAME=DIUMPR_Num.FID_CDK2P |
| STAT_DEN_FID_CDK2P_WERT | - | high | unsigned int | - | - | - | - | - | Drosselklappenpotentiometer 2-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDK2P |
| STAT_NUM_FID_CKUP_WERT | - | high | unsigned int | - | - | - | - | - | Pedalwertgeber Kupplung-Numerator | A2L-NAME=DIUMPR_Num.FID_CKUP |
| STAT_DEN_FID_CKUP_WERT | - | high | unsigned int | - | - | - | - | - | Pedalwertgeber Kupplung-Denumerator | A2L-NAME=DIUMPR_Den.FID_CKUP |
| STAT_NUM_FID_CPVDR_WERT | - | high | unsigned int | - | - | - | - | - | Drucksensor vor Drosselklappe Plausibel Diagnose-Numerator | A2L-NAME=DIUMPR_Num.FID_CPVDR |
| STAT_DEN_FID_CPVDR_WERT | - | high | unsigned int | - | - | - | - | - | Drucksensor vor Drosselklappe Plausibel Diagnose-Denumerator | A2L-NAME=DIUMPR_Den.FID_CPVDR |
| STAT_NUM_FID_CDSKVR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Hochdrucksensor plausibel-Numerator | A2L-NAME=DIUMPR_Num.FID_CDSKVR |
| STAT_DEN_FID_CDSKVR_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Hochdrucksensor plausibel-Denumerator | A2L-NAME=DIUMPR_Den.FID_CDSKVR |
| STAT_NUM_FID_BMW_DMDKH_WERT | - | high | unsigned int | - | - | - | - | - | Md-Überwachung bei Katheizen-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_DMDKH |
| STAT_DEN_FID_BMW_DMDKH_WERT | - | high | unsigned int | - | - | - | - | - | Md-Überwachung bei Katheizen-Denumerator | A2L-NAME=DIUMPR_Den.FID_BMW_DMDKH |
| STAT_NUM_FID_XXX2_WERT | - | high | unsigned int | - | - | - | - | - | nicht belegt | - |
| STAT_DEN_FID_XXX2_WERT | - | high | unsigned int | - | - | - | - | - | nicht belegt | - |
| STAT_NUM_FID_CENCS_WERT | - | high | unsigned int | - | - | - | - | - | Funktion NW Stellerdiagnose-Einlass CERS-Numerator | A2L-NAME=DIUMPR_Num.FID_CENCS |
| STAT_DEN_FID_CENCS_WERT | - | high | unsigned int | - | - | - | - | - | Funktion NW Stellerdiagnose-Einlass CERS-Denumerator | A2L-NAME=DIUMPR_Den.FID_CENCS |
| STAT_NUM_FID_CANCS_WERT | - | high | unsigned int | - | - | - | - | - | Funktion NW Stellerdiagnose-Auslass CERS-Numerator | A2L-NAME=DIUMPR_Num.FID_CANCS |
| STAT_DEN_FID_CANCS_WERT | - | high | unsigned int | - | - | - | - | - | Funktion NW Stellerdiagnose-Auslass CERS-Denumerator | A2L-NAME=DIUMPR_Den.FID_CANCS |
| STAT_NUM_FID_CHDRKH_WERT | - | high | unsigned int | - | - | - | - | - | Raildruckregelung während KAT-Heizen CERS-Numerator | A2L-NAME=DIUMPR_Num.FID_CHDRKH |
| STAT_DEN_FID_CHDRKH_WERT | - | high | unsigned int | - | - | - | - | - | Raildruckregelung während KAT-Heizen CERS Denumerator | A2L-NAME=DIUMPR_Den.FID_CHDRKH |
| STAT_NUM_FID_CETKHL_WERT | - | high | unsigned int | - | - | - | - | - | Zündwinkelwirkungsgraddiagnose bei Katheizen(im Leerlauf) CERS-Numerator | A2L-NAME=DIUMPR_Num.FID_CETKHL |
| STAT_DEN_FID_CETKHL_WERT | - | high | unsigned int | - | - | - | - | - | Zündwinkelwirkungsgraddiagnose bei Katheizen (im Leerlauf) CERS-Denumerator | A2L-NAME=DIUMPR_Den.FID_CETKHL |
| STAT_NUM_FID_XXX3_WERT | - | high | unsigned int | - | - | - | - | - | nicht belegt | - |
| STAT_DEN_FID_XXX3_WERT | - | high | unsigned int | - | - | - | - | - | nicht belegt | - |
| STAT_NUM_FID_CTEOEH_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose CAN-Uhr ist zu schnell-Numerator | A2L-NAME=DIUMPR_Num.FID_CTEOEH |
| STAT_DEN_FID_CTEOEH_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose CAN-Uhr ist zu schnell-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTEOEH |
| STAT_NUM_FID_CTEOEL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose CAN-Uhr ist zu langsam-Numerator | A2L-NAME=DIUMPR_Num.FID_CTEOEL |
| STAT_DEN_FID_CTEOEL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose CAN-Uhr ist zu langsam-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTEOEL |
| STAT_NUM_FID_CTEOES_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Einseitiger Fehler der CAN-Uhr-Numerator | A2L-NAME=DIUMPR_Num.FID_CTEOES |
| STAT_DEN_FID_CTEOES_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Einseitiger Fehler der CAN-Uhr-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTEOES |
| STAT_NUM_FID_CTEOET_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Fehler der CAN-Uhr (beidseitiger Check)-Numerator | A2L-NAME=DIUMPR_Num.FID_CTEOET |
| STAT_DEN_FID_CTEOET_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Fehler der CAN-Uhr (beidseitiger Check)-Denumerator | A2L-NAME=DIUMPR_Den.FID_CTEOET |
| STAT_NUM_FID_CETKHT_WERT | - | high | unsigned int | - | - | - | - | - | Zündwinkelwirkungsgraddiagnose bei Katheizen (im Teillastbereich) CERS-Numerator | A2L-NAME=DIUMPR_Num.FID_CETKHT |
| STAT_DEN_FID_CETKHT_WERT | - | high | unsigned int | - | - | - | - | - | Zündwinkelwirkungsgraddiagnose bei Katheizen (im Teillastbereich) CERS-Denumerator | A2L-NAME=DIUMPR_Den.FID_CETKHT |
| STAT_NUM_FID_BMW_ATLDIAG_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ladedruck-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_ATLDIAG |
| STAT_DEN_FID_BMW_ATLDIAG_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Ladedruck-Denumerator | A2L-NAME=DIUMPR_Den.FID_BMW_ATLDIAG |
| STAT_NUM_FID_CHFMR_WERT | - | high | unsigned int | - | - | - | - | - | HFM-Rationality-Diagnose-Numerator (nur Prince) | A2L-NAME=DIUMPR_Num.FID_CHFMR |
| STAT_DEN_FID_CHFMR_WERT | - | high | unsigned int | - | - | - | - | - | HFM-Rationality-Diagnose-Denominator (nur Prince) | A2L-NAME=DIUMPR_Den.FID_CHFMR |
| STAT_NUM_FID_CAFIMD_WERT | - | high | unsigned int | - | - | - | - | - | Cylinder-Imbalance Diagnose-Numerator | A2L-NAME=DIUMPR_Num.FID_CAFIMD |
| STAT_DEN_FID_CAFIMD_WERT | - | high | unsigned int | - | - | - | - | - | Cylinder-Imbalance Diagnose-Denominator | A2L-NAME=DIUMPR_Den.FID_CAFIMD |
| STAT_NUM_FID_CIP_WERT | - | high | unsigned int | - | - | - | - | - | IP Lambdasondenleitung Diagnose-Numerator | A2L-NAME=DIUMPR_Num.FID_CIP |
| STAT_DEN_FID_CIP_WERT | - | high | unsigned int | - | - | - | - | - | IP Lambdasondenleitung Diagnose-Denominator | A2L-NAME=DIUMPR_Den.FID_CIP |
| STAT_NUM_FID_CTH_WERT | - | high | unsigned int | - | - | - | - | - | Thermostat Diagnose-Numerator | A2L-NAME=DIUMPR_Num.FID_CTH |
| STAT_DEN_FID_CTH_WERT | - | high | unsigned int | - | - | - | - | - | Thermostat Diagnose-Denominator | A2L-NAME=DIUMPR_Den.FID_CTH |
| STAT_NUM_FID_BMW_DOR_WERT | - | high | unsigned int | - | - | - | - | - | Aktivierung Premair-Diagnose-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_DOR |
| STAT_DEN_FID_BMW_DOR_WERT | - | high | unsigned int | - | - | - | - | - | Aktivierung Premair-Diagnose-Denominator | A2L-NAME=DIUMPR_Den.FID_BMW_DOR |
| STAT_NUM_FID_BMW_HFMPLLL_WERT | - | high | unsigned int | - | - | - | - | - | Massenstromdiagnose am HFM im Leerlauf-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_HFMPLLL |
| STAT_DEN_FID_BMW_HFMPLLL_WERT | - | high | unsigned int | - | - | - | - | - | Massenstromdiagnose am HFM im Leerlauf-Denominator | A2L-NAME=DIUMPR_Den.FID_BMW_HFMPLLL |
| STAT_NUM_FID_BMW_HFMPLCD_MX_WERT | - | high | unsigned int | - | - | - | - | - | Massenstromdiagnose am HFM im Coast Down-Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_HFMPLCD_MX |
| STAT_DEN_FID_BMW_HFMPLCD_MX_WERT | - | high | unsigned int | - | - | - | - | - | Massenstromdiagnose am HFM im Coast Down-Denominator | A2L-NAME=DIUMPR_Den.FID_BMW_HFMPLCD_MX |
| STAT_NUM_FID_CAFIMRAWD_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Luft Kraftsstoff Imbalance (ungefilterte Adaptionswerte) Numerator | A2L-NAME=DIUMPR_Num.FID_CAFIMRAWD |
| STAT_DEN_FID_CAFIMRAWD_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Luft Kraftsstoff Imbalance (ungefilterte Adaptionswerte) Denominator | A2L-NAME=DIUMPR_Den.FID_CAFIMRAWD |
| STAT_NUM_FID_CTKA_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Temperatur Kühlerausgang Numerator | A2L-NAME=DIUMPR_Num.FID_CTKA |
| STAT_DEN_FID_CTKA_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Temperatur Kühlerausgang Denominator | A2L-NAME=DIUMPR_Den.FID_CTKA |
| STAT_NUM_FID_BMW_EWGRBM_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose el. Wastegate Numerator | A2L-NAME=DIUMPR_Num.FID_BMW_EWGRBM |
| STAT_DEN_FID_BMW_EWGRBM_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose el. Wastegate Denominator | A2L-NAME=DIUMPR_Den.FID_BMW_EWGRBM |
| STAT_NUM_FID_NVLDSMLLEAK8_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose NVLD Small Leak Bedingung 8°C Numerator | A2L-NAME=DIUMPR_Num.FId_NVLDSmlLeak8 |
| STAT_DEN_FID_NVLDSMLLEAK8_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose NVLD Small Leak Bedingung 8°C Denominator | A2L-NAME=DIUMPR_Den.FId_NVLDSmlLeak8 |
| STAT_NUM_FID_NVLDSWCHK_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose NVLD IUMPR-Freigabe Schalterprüfung Numerator | A2L-NAME=DIUMPR_Num.FId_NVLDSwChk |
| STAT_DEN_FID_NVLDSWCHK_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose NVLD IUMPR-Freigabe Schalterprüfung Denominator | A2L-NAME=DIUMPR_Den.FId_NVLDSwChk |
| STAT_NUM_FID_ATEVPS_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV-Check über Saugrohrdrucksensor Numerator | A2L-NAME=DIUMPR_Num.FId_atevps |
| STAT_DEN_FID_ATEVPS_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV-Check über Saugrohrdrucksensor Denominator | A2L-NAME=DIUMPR_Den.FId_atevps |
| STAT_NUM_FID_ATEVPSPL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV zweite Einleitstelle mit Drucksensor zweite Einleitstelle Numerator | A2L-NAME=DIUMPR_Num.FId_atevpspl |
| STAT_DEN_FID_ATEVPSPL_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose TEV zweite Einleitstelle mit Drucksensor zweite Einleitstelle Denominator | A2L-NAME=DIUMPR_Den.FId_atevpspl |
| STAT_NUM_FID_DSSPDYN_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Dynamische Prüfung Drucksensorsignal zweite Einleitstelle Numerator | A2L-NAME=DIUMPR_Num.FID_DSSPdyn |
| STAT_DEN_FID_DSSPDYN_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Dynamische Prüfung Drucksensorsignal zweite Einleitstelle Denominator | A2L-NAME=DIUMPR_Den.FID_DSSPdyn |
| STAT_NUM_FID_CINJCATHEATGDIAG_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Einspritzausgabe im Katheizen Numerator | A2L-NAME=DIUMPR_Num.FId_CInjCatHeatgDiag |
| STAT_DEN_FID_CINJCATHEATGDIAG_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Einspritzausgabe im Katheizen Denominator | A2L-NAME=DIUMPR_Den.FId_CInjCatHeatgDiag |
| STAT_NUM_FID_CHFMRN_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose HFM Bereichsprüfung Numerator | A2L-NAME=DIUMPR_Num.FID_CHFMRN |
| STAT_DEN_FID_CHFMRN_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose HFM Bereichsprüfung Denominator | A2L-NAME=DIUMPR_Den.FID_CHFMRN |
| STAT_NUM_FID_CDFTIV_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Tankabsperrventil (TAV) Numerator . | A2L-NAME=DIUMPR_Num.FID_CDFTIV |
| STAT_DEN_FID_CDFTIV_WERT | - | high | unsigned int | - | - | - | - | - | Diagnose Tankabsperrventil (TAV) Denominator | A2L-NAME=DIUMPR_Den.FID_CDFTIV |
| STAT_NUM_FID_BLLRCS_WERT | - | high | unsigned int | - | - | - | - | - | Fehler Drehzahlabweichung im Leerlauf bei CSERS-Strategy - Numerator . | A2L-NAME=DIUMPR_Num.FID_BLLRCS |
| STAT_DEN_FID_BLLRCS_WERT | - | high | unsigned int | - | - | - | - | - | Fehler Drehzahlabweichung im Leerlauf bei CSERS-Strategy - Denominator. | A2L-NAME=DIUMPR_Den.FID_BLLRCS |
| STAT_NUM_FID_CENCSX_WERT | - | high | unsigned int | - | - | - | - | - | Funktion Nockenwellenstellerdiagnose Einlass CSERS extended - Numerator. | A2L-NAME=DIUMPR_Num.FID_CENCSX |
| STAT_DEN_FID_CENCSX_WERT | - | high | unsigned int | - | - | - | - | - | Funktion Nockenwellenstellerdiagnose Einlass CSERS extended - Denominator. | A2L-NAME=DIUMPR_Den.FID_CENCSX |
| STAT_NUM_FID_CANCSX_WERT | - | high | unsigned int | - | - | - | - | - | Funktion Nockenwellenstellerdiagnose Auslass CSERS extended - Numerator. | A2L-NAME=DIUMPR_Num.FID_CANCSX |
| STAT_DEN_FID_CANCSX_WERT | - | high | unsigned int | - | - | - | - | - | Funktion Nockenwellenstellerdiagnose Auslass CSERS extended - Denominator. | A2L-NAME=DIUMPR_Den.FID_CANCSX |

### RES_0X402D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STVBRVSO_WERT | - | high | unsigned int | - | - | - | - | - | Statuswort Verbrennungsregelung fuer Service | A2L-NAME=stvbrvso_w |
| STAT_STVBRVSIN_WERT | - | - | unsigned char | - | - | - | - | - | Statuswort Verbrennungsregelung vom Tester | A2L-NAME=stvbrvsin |
| STAT_STVBRVSNNV_WERT | - | - | unsigned char | - | - | - | - | - | Statuswort Verbrennungsregelung vom Tester nichtfluechtig | A2L-NAME=stvbrvsnnv |
| STAT_AMO_05_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Gesamte DFT 0,5 Motorordnung | A2L-NAME=amplmo05_w |
| STAT_AMO_10_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Gesamte DFT 1,0 Motorordnung | A2L-NAME=amplmo10_w |
| STAT_AMO_15_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Gesamte DFT 1,5 Motorordnung | A2L-NAME=amplmo15_w |
| STAT_AMO_20_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Gesamte DFT 2,0 Motorordnung | A2L-NAME=amplmo20_w |
| STAT_EXWKOR_VBR_1_WERT | ° | high | int | - | - | 0,022 | - | - | Excenterwinkelkorrektur fuer Verbrennungsregelung für jeweils Zylinder 1 von allen Bänken | A2L-NAME=BasSvrAppl_ExcVerZyl Array [0] |
| STAT_ZYLHUBKOR_0_WERT | - | - | unsigned char | - | - | - | - | - | Fuer Hubkorrektur ausgewaehlter Zylinder | A2L-NAME=zylhubkorstat Array [0] |
| STAT_MINHUB_WERT | mm | high | unsigned int | - | - | 0,001 | - | - | Tatsaechlich wirksamer Minhub (nach Ein-/Ausblenddungsfaktoren) | A2L-NAME=minhub_w |
| STAT_EXWKOR_VBR_3_WERT | ° | high | int | - | - | 0,022 | - | - | Excenterwinkelkorrektur fuer Verbrennungsregelung für jeweils Zylinder 3 von allen Bänken | A2L-NAME=BasSvrAppl_ExcVerZyl Array [2] |
| STAT_EXWKOR_VBR_4_WERT | ° | high | int | - | - | 0,022 | - | - | Excenterwinkelkorrektur fuer Verbrennungsregelung für jeweils Zylinder 4 von allen Bänken | A2L-NAME=BasSvrAppl_ExcVerZyl Array [3] |
| STAT_MINHUBVS_WERT | mm | high | unsigned int | - | - | 0,001 | - | - | Vorgabe Minhub ueber Tester | A2L-NAME=minhubvs |
| STAT_MINHUBVSI_WERT | mm | high | unsigned int | - | - | 0,001 | - | - | Tatsaechlich wirksamer Minhub aus Verstelleingriff (vor Ein-/Ausblendungsfaktoren) | A2L-NAME=minhubvsi |
| STAT_MINHUBVSNV_WERT | mm | high | unsigned int | - | - | 0,001 | - | - | dauerhaft fest programmierter Minhub | A2L-NAME=minhubvsnv |
| STAT_S_VSMNHB | 0-n | - | unsigned char | - | T_S_VSMNHB_DOP | - | - | - | Schalter fuer Testereingriff | A2L-NAME=S_VSMNHB |
| STAT_S_VSMNHBNV_WERT | - | - | unsigned char | - | - | - | - | - | Schalter fuer Testereingriff | A2L-NAME=S_VSMNHBNV |
| STAT_GEMSCH_KORRKT_VBR_1_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 1 (Physikalische Reihenfolge) (A2L-NAME: F_ti_vbr_ad_xzyl[0]) | A2L-NAME=BasSvrAppl_ZylGemVerZyl Array [0] |
| STAT_LURABS_F_1_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 1 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_GefLauZyl Array [0] |
| STAT_LURDIF_F_1_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 1 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_AbwLauZyl Array [0] |
| STAT_ZUENDWNKL_OFF_VBR_1_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 1 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[0]) | A2L-NAME=BasSvrAppl_ZunVerZyl Array [0] |
| STAT_GEMSCH_KORRKT_VBR_2_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 2 (Physikalische Reihenfolge) (A2L-NAME: F_ti_vbr_ad_xzyl[1]) | A2L-NAME=BasSvrAppl_ZylGemVerZyl Array [1] |
| STAT_LURABS_F_2_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 2 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_GefLauZyl Array [1] |
| STAT_LURDIF_F_2_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 2 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_AbwLauZyl Array [1] |
| STAT_ZUENDWNKL_OFF_VBR_2_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 2 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[1]) | A2L-NAME=BasSvrAppl_ZunVerZyl Array [1] |
| STAT_GEMSCH_KORRKT_VBR_3_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 3 (Physikalische Reihenfolge) (A2L-NAME: F_ti_vbr_ad_xzyl[2]) | A2L-NAME=BasSvrAppl_ZylGemVerZyl Array [2] |
| STAT_LURABS_F_3_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 3 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_GefLauZyl Array [2] |
| STAT_LURDIF_F_3_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 3 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_AbwLauZyl Array [2] |
| STAT_ZUENDWNKL_OFF_VBR_3_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 3 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[2]) | A2L-NAME=BasSvrAppl_ZunVerZyl Array [2] |
| STAT_GEMSCH_KORRKT_VBR_4_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 4 (Physikalische Reihenfolge) (A2L-NAME: F_ti_vbr_ad_xzyl[3]) | A2L-NAME=BasSvrAppl_ZylGemVerZyl Array [3] |
| STAT_LURABS_F_4_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 4 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_GefLauZyl Array [3] |
| STAT_LURDIF_F_4_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 4 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_AbwLauZyl Array [3] |
| STAT_ZUENDWNKL_OFF_VBR_4_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 4 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[3]) | A2L-NAME=BasSvrAppl_ZunVerZyl Array [3] |
| STAT_GEMSCH_KORRKT_VBR_5_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 5 (Physikalische Reihenfolge) 0xFFFF falls SY_ZYLZA<5 (A2L-NAME: F_ti_vbr_ad_xzyl[4]) | A2L-NAME=BasSvrAppl_ZylGemVerZyl Array [4] |
| STAT_LURABS_F_5_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 5 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_GefLauZyl Array [4] |
| STAT_LURDIF_F_5_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 5 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_AbwLauZyl Array [4] |
| STAT_ZUENDWNKL_OFF_VBR_5_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 5 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[4]) 0xFFFF falls SY_ZYLZA<5 | A2L-NAME=BasSvrAppl_ZunVerZyl Array [4] |
| STAT_GEMSCH_KORRKT_VBR_6_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 6 (Physikalische Reihenfolge) 0xFFFF falls SY_ZYLZA<6 | A2L-NAME=BasSvrAppl_ZylGemVerZyl Array [5] |
| STAT_LURABS_F_6_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 6 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_GefLauZyl Array [5] |
| STAT_LURDIF_F_6_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 6 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_AbwLauZyl Array [5] |
| STAT_ZUENDWNKL_OFF_VBR_6_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 6 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[5]) 0xFFFF falls SY_ZYLZA<6 | A2L-NAME=BasSvrAppl_ZunVerZyl Array [5] |
| STAT_GEMSCH_KORRKT_VBR_7_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 7 (Physikalische Reihenfolge) 0xFFFF falls SY_ZYLZA<7 (A2L-NAME: F_ti_vbr_ad_xzyl[6]) | - |
| STAT_LURABS_F_7_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 7 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_LURDIF_F_7_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 7 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_ZUENDWNKL_OFF_VBR_7_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 7 (Physikalische Reihenfolge) (A2L-NAME: Zw_vbr_ad_xzyl[6]) 0xFFFF falls SY_ZYLZA<7 | - |
| STAT_GEMSCH_KORRKT_VBR_8_WERT | % | high | unsigned int | - | - | 0,00152587890625 | - | - | Zylinderselektive Gemischkorrektur für Verbrennungsregelung Zylinder 8(Physikalische Reihenfolge) 0xFFFF falls SY_ZYLZA<8 (A2L-NAME: F_ti_vbr_ad_xzyl[7]) | - |
| STAT_LURABS_F_8_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte Laufunruhedeltas für Zylinder 8 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_LURDIF_F_8_WERT | - | high | int | - | - | 0,1 | - | - | Gefilterte mittlere Abweichung des Lur-Wertes für Zylinder 8 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_ZUENDWNKL_OFF_VBR_8_WERT | ° | high | int | - | - | 0,001 | - | - | Zuendwinkeloffset fuer Verbrennungsregelung Zylinder 8 (Physikalische Reihenfolge). (A2L-NAME: Zw_vbr_ad_xzyl[7]) 0xFFFF falls SY_ZYLZA<8 | - |
| STAT_AMO_30_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Gesamte DFT 3,0 Motorordnung | A2L-NAME=amplmo30_w |
| STAT_EXWKOR_VBR_2_WERT | ° | high | int | - | - | 0,022 | - | - | Excenterwinkelkorrektur fuer Verbrennungsregelung für jeweils Zylinder 2 von allen Bänken. | A2L-NAME=BasSvrAppl_ExcVerZyl Array [1] |
| STAT_ZYLHUBKOR_1_WERT | - | - | unsigned char | - | - | - | - | - | Für Hubkorrektur ausgewählter Zylinder. | A2L-NAME=zylhubkorstat Array [1] |
| STAT_HUBKOR_0_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Hubkorrektur Status. | A2L-NAME=hubkorstat Array [0] |
| STAT_HUBKOR_1_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Hubkorrektur Status. | A2L-NAME=hubkorstat Array [1] |

### RES_0X402E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_NG_POSITION_WERT | % | high | unsigned int | - | - | 0,01 | - | - | Aktuelle Position Nullgangsensor | A2L-NAME=tngang_w |
| STAT_PHY_NG_LERN_WERT | % | high | unsigned int | - | - | 0,01 | - | - | angelernter Wert Nullgangsensor | A2L-NAME=tvneutrl_w |
| STAT_NG_ERKANNT | 0-n | - | unsigned char | - | T_B_1BYTE_LESEN_0_1 | - | - | - | Status Nullgangerkennung (Fahrzeug befindet sich aktuell im Nullgang) (0=falsch 1= wahr) | A2L-NAME=B_gangnul |
| STAT_NG_GELERNT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Nullgangsensor ist bereits eingelernt (0=falsch 1= wahr) | A2L-NAME=B_nggelernt |
| STAT_KUP_BETAETIGT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Kupplung betaetigt (0=falsch 1= wahr) | A2L-NAME=B_kupplext |
| STAT_MOT_DREHT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Motor laeuft (0=falsch 1= wahr) | A2L-NAME=B_nmot |
| STAT_NG_IM_LF | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Sensorwert im Lernfenster (kein Gang eingelegt) (0=falsch 1= wahr) | A2L-NAME=B_ngimlf |

### RES_0X4035

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QB1_WERT | - | high | unsigned int | - | - | - | - | - | Qualitaetsbereich 1 (Niedrig) | A2L-NAME=FQS_numQlRngLo |
| STAT_QB2_WERT | - | high | unsigned int | - | - | - | - | - | Qualitaetsbereich 2 (Mittel) | A2L-NAME=FQS_numQlRngMedm |
| STAT_QB3_WERT | - | high | unsigned int | - | - | - | - | - | Qualitaetsbereich 3 (Hoch) | A2L-NAME=FQS_numQlRngHi |
| STAT_KM1_WERT | km | high | unsigned int | - | - | 8 | - | - | Kilometerstand 1 | A2L-NAME=FQS_lMlgQlRcrd Array [0] |
| STAT_KM1QB_WERT | - | - | unsigned char | - | - | - | - | - | Qualitaetsbereich bei Kilometerstand 1 | A2L-NAME=FQS_facQlRng Array [0] |
| STAT_KM2_WERT | km | high | unsigned int | - | - | 8 | - | - | Kilometerstand 2 | A2L-NAME=FQS_lMlgQlRcrd Array [1] |
| STAT_KM2QB_WERT | - | - | unsigned char | - | - | - | - | - | Qualitaetsbereich bei Kilometerstand 2 | A2L-NAME=FQS_facQlRng Array [1] |
| STAT_KM3_WERT | km | high | unsigned int | - | - | 8 | - | - | Kilometerstand 3 | A2L-NAME=FQS_lMlgQlRcrd Array [2] |
| STAT_KM3QB_WERT | - | - | unsigned char | - | - | - | - | - | Qualitaetsbereich bei Kilometerstand 3 | A2L-NAME=FQS_facQlRng Array [2] |
| STAT_KM4_WERT | km | high | unsigned int | - | - | 8 | - | - | Kilometerstand 4 | A2L-NAME=FQS_lMlgQlRcrd Array [3] |
| STAT_KM4QB_WERT | - | - | unsigned char | - | - | - | - | - | Qualitaetsbereich bei Kilometerstand 4 | A2L-NAME=FQS_facQlRng Array [3] |
| STAT_KM5_WERT | km | high | unsigned int | - | - | 8 | - | - | Kilometerstand 5 | A2L-NAME=FQS_lMlgQlRcrd Array [4] |
| STAT_KM5QB_WERT | - | - | unsigned char | - | - | - | - | - | Qualitaetsbereich bei Kilometerstand 5 | A2L-NAME=FQS_facQlRng Array [4] |

### RES_0X4036

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA2_SWFAVW_WERT | - | high | unsigned long | - | - | - | - | - | Statuswort Fahrer-Abschaltverhinderer (verhindern MSA-Stopp) | A2L-NAME=Layer_stDbgMSAswfavw |
| STAT_MSA2_SWSAVW_WERT | - | high | unsigned long | - | - | - | - | - | Statuswort System-Abschaltverhinderer (verhindern MSA-Stopp) | A2L-NAME=Layer_stDbgMSAswsavw |
| STAT_MSA2_SWDW_WERT | - | high | unsigned long | - | - | - | - | - | Statuswort Deaktivierer (verhindern MSA-Stopp und MSA-Start) | A2L-NAME=Layer_stDbgMSAswdw |
| STAT_MSA2_SWEAW_WERT | - | high | unsigned long | - | - | - | - | - | Statuswort Einschaltaufforderer (bewirken MSA-Start) | A2L-NAME=Layer_stDbgMSAsweaw |
| STAT_MSA2_SWEVW_WERT | - | high | unsigned long | - | - | - | - | - | Statuswort Einschaltverhinderer (Verhindern MSA-Start) | A2L-NAME=Layer_stDbgMSAevw |
| STAT_MSA2_SWDFSPF_WERT | - | high | unsigned long | - | - | - | - | - | Statuswort Statuswort Deaktivierer aufgrund von Fehlerspeichereinträgen | A2L-NAME=Layer_stDbgMSAswdfspf |
| STAT_MSA2_TASTERLED_WERT | - | - | unsigned char | - | - | - | - | - | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung. 0 = Taster-LED aus, Signal plausibel 1 = Taster-LED an, Signal plausibel 2 = Taster-LED aus, Signal unplausibel 3 = Taster-LED an, Signal unplausibel | A2L-NAME=msastled |
| STAT_MSA2_KUP | 0-n | - | unsigned char | - | T_1BYTE_MSA_KUP_DOP | - | - | - | Status MSA Kupplung Betaetigung | A2L-NAME=Bit 0: B_kupplext Bit 1: B_kupp1 |

### RES_0X4037

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA_STRTZ_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl MSA-Starts | A2L-NAME=msastrtz_l |
| STAT_MSA_STRTZGES_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl Gesamtstarts | A2L-NAME=msastrtzges_l |
| STAT_SGR_STOPMO_WERT | - | - | unsigned char | - | - | - | - | - | Aktueller Betriebszustand SGR | A2L-NAME=SgrEcu_stModEng |
| STAT_SGR_OPMO_WERT | - | - | unsigned char | - | - | - | - | - | Soll Betriebszustand SGR | A2L-NAME=Layer_stOpMode |
| STAT_SGR_TCHIP_WERT | °C | high | int | - | - | 0,1 | - | - | Chiptemperatur SGR | A2L-NAME=SgrEcu_tChip |
| STAT_SGR_CHNUM_WERT | - | - | unsigned char | - | - | - | - | - | Chipnummer SGR | A2L-NAME=SgrEcu_numChip |
| STAT_B_MSASTART_WERT | - | - | unsigned char | - | - | - | - | - | Bedingung Startanforderung MSA | A2L-NAME=B_staanf_byte |
| STAT_B_MSASTOPP_WERT | - | - | unsigned char | - | - | - | - | - | Bedingung Stoppanforderung MSA | A2L-NAME=B_stoanf_byte |
| STAT_B_MSASTARTA_WERT | - | - | unsigned char | - | - | - | - | - | Ankuendigung MSA-Start | A2L-NAME=B_msastarta |
| STAT_B_CKL50_WERT | - | - | unsigned char | - | - | - | - | - | Bedingung Klemme 50 (ueber CAN) | A2L-NAME=S_ckl50 |
| STAT_SGR_NROTOR_WERT | 1/min | high | unsigned int | - | - | - | - | - | Rotordrehzahl SGR | A2L-NAME=SgrEcu_nRtr |
| STAT_KLMMENV_EMASCH_WERT | V | high | unsigned int | - | - | 0,01 | - | - | Klemmenspannung E-Maschine. | A2L-NAME=SwSABMW_uTermEmac |
| STAT_BEDINGUNG_ANST_SGRHW | 0-n | - | unsigned char | - | T_B_SGRHWL_SIKO_DOP | - | - | - | Bedingung fuer die Ansteuerung der SGR-HW-Leitung (aus MSA_SiKo). | A2L-NAME=B_sgrhwlsiko |
| STAT_ANLASSER_FEHLER_SGR | 0-n | - | unsigned char | - | T_B_ISGSKT_MSAAKT_DOP | - | - | - | Status HWL-SGR. | A2L-NAME=SgrEcu_stCmn1 |

### RES_0X4038

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GEN_TYP | 0-n | - | unsigned char | - | T_LIN_STISGTYP_TEXTTABLE_DOP | - | - | - | Maschinen-Typ (A2L-Name: Lin_stISGTyp) | A2L-NAME=Lin_stISGTyp |
| STAT_GEN_HERST | 0-n | - | unsigned char | - | T_ISGUSM_HERST_DOP | - | - | - | Herstellerkennung elektrische Maschine (A2L-Name: isgusmherst) | A2L-NAME=isgusmherst |
| STAT_TYPKENNUNG | 0-n | - | unsigned char | - | T_ISGUSM_MAKENN_DOP | - | - | - | Typkennung elektrische Maschine (A2L-Name: isgusmmakenn) | A2L-NAME=isgusmmakenn |
| STAT_CHIPHERST | 0-n | - | unsigned char | - | T_ISGUSM_CHIPHERST_DOP | - | - | - | Chiphersteller (A2L-Name: isgusmchipherst) | A2L-NAME=isgusmchipherst |
| STAT_CHIPVERSION_WERT | - | - | unsigned char | - | - | - | - | - | Chipversion (A2L-Name: isgusmchipvers) | A2L-NAME=isgusmchipvers |

### RES_0X403C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALID_TEXT | text | high | string[16] | - | - | - | - | - | Cal-ID auslesen (hier muss die Cal-ID wie bei Mode $09 (PID $04) ausgegeben werden) | - |
| STAT_CVN_WERT | HEX | high | unsigned long | - | - | - | - | - | CVN auslesen (hier muss die CVN wie bei Mode $09 (PID $06) ausgegeben werden) | - |

### RES_0X403D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZ_ADAP_LOW_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl der Adaptionen im Lowbereich (A2L-Name: CILCN_ctLrnCyclLo) | A2L-NAME=CILCN_ctLrnCyclLo |
| STAT_ANZ_ADAP_HIGH_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl der Adaptionen im Highbereich (A2L-Name: CILCN_ctLrnCyclHi) | A2L-NAME=CILCN_ctLrnCyclHi |
| STAT_ANZ_ADAP_TESTER_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl der Adaptionen im Testerbetrieb (A2L-Name: CILCN_ctLrnCyclTstr) | A2L-NAME=CILCN_ctLrnCyclTstr |
| STAT_FAKTOR_ADAP_LOW_ZYL_1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 1 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaLowbch Array [0] |
| STAT_FAKTOR_ADAP_LOW_ZYL_2_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 2 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaLowbch Array [1] |
| STAT_FAKTOR_ADAP_LOW_ZYL_3_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 3 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaLowbch Array [2] |
| STAT_FAKTOR_ADAP_LOW_ZYL_4_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 4 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaLowbch Array [3] |
| STAT_FAKTOR_ADAP_LOW_ZYL_5_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 5. Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_LOW_ZYL_6_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 6 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_LOW_ZYL_7_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 7 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_LOW_ZYL_8_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Lowbereich - Zylinder 8 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_HIGH_ZYL_1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich - Zylinder 1 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaHighbch Array [0] |
| STAT_FAKTOR_ADAP_HIGH_ZYL_2_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich - Zylinder 2 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaHighbch Array [1] |
| STAT_FAKTOR_ADAP_HIGH_ZYL_3_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich - Zylinder 3 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaHighbch Array [2] |
| STAT_FAKTOR_ADAP_HIGH_ZYL_4_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich - Zylinder 4 (phys). Dient zur Beschreibung, keine logische Zuordnung. | A2L-NAME=BasSvrAppl_ZylAdaHighbch Array [3] |
| STAT_FAKTOR_ADAP_HIGH_ZYL_5_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich - Zylinder 5 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_HIGH_ZYL_6_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich für Zylinder 6 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_HIGH_ZYL_7_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich für Zylinder 7 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |
| STAT_FAKTOR_ADAP_HIGH_ZYL_8_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Zylinderindividuelle Adaptionswerte im Highbereich für Zylinder 8 (phys). Dient zur Beschreibung, keine logische Zuordnung. | - |

### RES_0X4044

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ATLDIAG_AKTIV | BIT | - | BITFIELD | - | BF_0x4044_0 | - | - | - | Status Turboladerdiagnose | A2L-NAME=statldiagnom |

### RES_0X4046

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_F_LRADAP1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus Lambdaregelungsadaption für Bank 1 (A2L-Name: frann_w) | A2L-NAME=frann_w |
| STAT_DLATRMO_WERT | - | high | int | - | - | 3,0517578125e-005 | - | - | Für die vordere Lambdasonde Delta (adaptierter) Sondenoffset zur Fuehrungsregelung (A2L-Name: dlatrmo_w). | A2L-NAME=dlatrmo_w |
| STAT_FLRADAP1C_W_0_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 1 | A2L-NAME=flradap1cxmod_w Array [0] |
| STAT_FLRADAP1C_W_1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 2 | A2L-NAME=flradap1cxmod_w Array [1] |
| STAT_FLRADAP1C_W_2_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 3 | A2L-NAME=flradap1cxmod_w Array [2] |
| STAT_FLRADAP1C_W_3_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 4 | A2L-NAME=flradap1cxmod_w Array [3] |
| STAT_FLRADAP1C_W_4_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 5 | A2L-NAME=flradap1cxmod_w Array [4] |
| STAT_FLRADAP1C_W_5_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 6 | A2L-NAME=flradap1cxmod_w Array [5] |
| STAT_FLRADAP1C_W_6_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 7 | A2L-NAME=flradap1cxmod_w Array [6] |
| STAT_FLRADAP1C_W_7_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 8 | A2L-NAME=flradap1cxmod_w Array [7] |
| STAT_FLRADAP1C_W_8_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 9 | A2L-NAME=flradap1cxmod_w Array [8] |
| STAT_FLRADAP1C_W_9_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 10 | A2L-NAME=flradap1cxmod_w Array [9] |
| STAT_FLRADAP1C_W_10_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 11 | A2L-NAME=flradap1cxmod_w Array [10] |
| STAT_FLRADAP1C_W_11_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 12 | A2L-NAME=flradap1cxmod_w Array [11] |
| STAT_FLRADAP1C_W_12_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 13 | A2L-NAME=flradap1cxmod_w Array [12] |
| STAT_FLRADAP1C_W_13_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 14 | A2L-NAME=flradap1cxmod_w Array [13] |
| STAT_FLRADAP1C_W_14_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktoren aus KLANN-Befragung an applizierten Zentren Bank1 15 | A2L-NAME=flradap1cxmod_w Array [14] |
| STAT_F_LRLZA1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Langzeitadaptions-Faktor aus KLANN Bank1 (NV-Ram) (A2L-Name: frannlza_w) | A2L-NAME=frannlza_w |
| STAT_FLRADAPSTXAB_W_0_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus KLANN für Start/Nachstartkorrektur Bank1/2 (NV-Ram) 1 | A2L-NAME=flradapstxab_w Array [0] |
| STAT_FLRADAPSTXAB_W_1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus KLANN für Start/Nachstartkorrektur Bank1/2 (NV-Ram) 2 | A2L-NAME=flradapstxab_w Array [1] |

### RES_0X4048

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSIONSKENNUNG_WERT | - | - | unsigned char | - | - | - | - | - | Versionskennung | - |
| STAT_KENNUNGSWE1_1_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 1.1 | - |
| STAT_KENNUNGSWE1_2_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 1.2 | - |
| STAT_PRUEFERGEBNIS1_WERT | - | - | unsigned char | - | - | - | - | - | Pruefergebniss 1 | - |
| STAT_KENNUNGSWE2_1_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 2.1 | - |
| STAT_KENNUNGSWE2_2_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 2.2 | - |
| STAT_PRUEFERGEBNIS2_WERT | - | - | unsigned char | - | - | - | - | - | Pruefergebniss 2 | - |
| STAT_KENNUNGSWE3_1_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 3.1 | - |
| STAT_KENNUNGSWE3_2_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 3.2 | - |
| STAT_PRUEFERGEBNIS3_WERT | - | - | unsigned char | - | - | - | - | - | Pruefergebniss 3 | - |
| STAT_KENNUNGSWE4_1_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 4.1 | - |
| STAT_KENNUNGSWE4_2_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 4.2 | - |
| STAT_PRUEFERGEBNIS4_WERT | - | - | unsigned char | - | - | - | - | - | Pruefergebniss 4 | - |
| STAT_KENNUNGSWE5_1_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 5.1 | - |
| STAT_KENNUNGSWE5_2_WERT | - | high | unsigned long | - | - | - | - | - | Kennung SWE 5.2 | - |
| STAT_PRUEFERGEBNIS5_WERT | - | - | unsigned char | - | - | - | - | - | Pruefergebniss 5 | - |
| STAT_ANZAHLCODLK_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl Codierungen Leistungsklasse | - |
| STAT_MAXIMALEVVEH_WERT | - | high | unsigned int | - | - | - | - | - | maximale V_VEH | - |

### RES_0X404C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T_PRAIL_MON_XB_YPB_0_0_WERT | s | high | unsigned long | - | - | 0,01 | - | - | Raildruckmonitor: aufintegrierte Zeit des Raildrucks Prail_ist_xpb von Rail ix zwischen Schwellen iy. Umrechnung = 0,01 | A2L-NAME=tprailmonxb_l Array [0] |
| STAT_T_PRAIL_MON_XB_YPB_1_0_WERT | s | high | unsigned long | - | - | 0,01 | - | - | Raildruckmonitor: aufintegrierte Zeit des Raildrucks Prail_ist_xpb von Rail ix zwischen Schwellen iy. Umrechnung = 0,01 | A2L-NAME=tprailmonxb_l Array [1] |
| STAT_T_PRAIL_MON_XB_YPB_2_0_WERT | s | high | unsigned long | - | - | 0,01 | - | - | Raildruckmonitor: aufintegrierte Zeit des Raildrucks Prail_ist_xpb von Rail ix zwischen Schwellen iy. Umrechnung = 0,01 | A2L-NAME=tprailmonxb_l Array [2] |
| STAT_T_PRAIL_MON_XB_YPB_3_0_WERT | s | high | unsigned long | - | - | 0,01 | - | - | Raildruckmonitor: aufintegrierte Zeit des Raildrucks Prail_ist_xpb von Rail ix zwischen Schwellen iy. Umrechnung = 0,01 | A2L-NAME=tprailmonxb_l Array [3] |
| DUMMY_RESULT_01 | data | high | data[16] | - | - | - | - | - | DUMMY_RESULT_01 | - |

### RES_0X404F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OZ_KVBMW_WERT | - | high | unsigned long | - | - | 0,0001220703125 | - | - | Mittelwert Kraftstoffverbrauch (A2L-NAME=Oz_kvbmw) | A2L-NAME=kvbmw_l |
| STAT_COZ_KMVERBR_WERT | km | high | unsigned long | - | - | - | - | - | Gefahrene Strecke fuer Coz_kvbverbrabs (A2L-NAME=Coz_kmverbr) | A2L-NAME=cozkmverbr_l |
| STAT_COZ_KVBVERBRABS_WERT | l | high | unsigned long | - | - | 0,01 | - | - | Absolute verbrauchte Kraftstoffmenge (A2L-NAME=Coz_kvbverbrabs) | A2L-NAME=cozkvbverbrabs_l |

### RES_0X407A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_DRL_TGOE_DAT_DATA | data | high | data[36] | - | - | - | - | - | Temperaturverteilung Getriebeoel [9] | A2L-NAME=Drl_tgoe_dat Array [0-8] |
| STAT_SW_DRL_TGGL_DAT_DATA | data | high | data[36] | - | - | - | - | - | Temperaturverteilung Getriebeglocke [9] | A2L-NAME=Drl_tggl_dat Array [0-8] |

### RES_0X407E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GLBDA_ADTRLOGELEMADR_CA_DATA | data | high | data[200] | - | - | - | - | - | Adressparameter der zu speichernden Kanaele [50] | A2L-NAME=GlbDA_adTRLogElemAdr_CA Array [0-49] |
| STAT_GLBDA_FACTRLOGRIDFAC_CA_DATA | data | high | data[50] | - | - | - | - | - | Faktor fuer Zeitraster des zu speichernden Kanal [50] | A2L-NAME=GlbDA_facTRLogGridFac_CA Array [0-49] |
| STAT_GLBDA_NUMTRLOGGRIDREP_CA_DATA | data | high | data[50] | - | - | - | - | - | Wiederholungen fuer Zeitraster des zu speichernden Kanal | A2L-NAME=GlbDA_numTRLogGridRep_CA Array [0-49] |
| STAT_GLBDA_XTRLOGELEMCFG_CA_DATA | data | high | data[200] | - | - | - | - | - | Komprimierungsparameter des zu speichernden Kanal [50] | A2L-NAME=GlbDA_xTRLogElemCfg_CA Array [0-49] |
| STAT_GLBDA_XTRTRGINTELEMCFG_CA_DATA | data | high | data[200] | - | - | - | - | - | Parameter der internen Trigger-Elemente [50] | A2L-NAME=GlbDA_xTRTrgIntElemCfg_CA Array [0-49] |

### RES_0X407F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INFOBSK_0_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [0] |
| STAT_INFOBSK_1_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [1] |
| STAT_INFOBSK_2_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [2] |
| STAT_INFOBSK_3_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [3] |
| STAT_INFOBSK_4_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [4] |
| STAT_INFOBSK_5_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [5] |
| STAT_INFOBSK_6_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [6] |
| STAT_INFOBSK_7_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [7] |
| STAT_INFOBSK_8_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [8] |
| STAT_INFOBSK_9_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [9] |
| STAT_INFOBSK_10_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [10] |
| STAT_INFOBSK_11_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [11] |
| STAT_INFOBSK_12_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [12] |
| STAT_INFOBSK_13_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [13] |
| STAT_INFOBSK_14_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [14] |
| STAT_INFOBSK_15_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [15] |
| STAT_INFOBSK_16_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [16] |
| STAT_INFOBSK_17_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [17] |
| STAT_INFOBSK_18_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [18] |
| STAT_INFOBSK_19_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_sk | A2L-NAME=infoBsk Array [19] |
| STAT_INFOBSSK_0_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [0] |
| STAT_INFOBSSK_1_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [1] |
| STAT_INFOBSSK_2_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [2] |
| STAT_INFOBSSK_3_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [3] |
| STAT_INFOBSSK_4_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [4] |
| STAT_INFOBSSK_5_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [5] |
| STAT_INFOBSSK_6_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [6] |
| STAT_INFOBSSK_7_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [7] |
| STAT_INFOBSSK_8_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [8] |
| STAT_INFOBSSK_9_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [9] |
| STAT_INFOBSSK_10_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [10] |
| STAT_INFOBSSK_11_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [11] |
| STAT_INFOBSSK_12_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [12] |
| STAT_INFOBSSK_13_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [13] |
| STAT_INFOBSSK_14_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [14] |
| STAT_INFOBSSK_15_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [15] |
| STAT_INFOBSSK_16_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [16] |
| STAT_INFOBSSK_17_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [17] |
| STAT_INFOBSSK_18_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [18] |
| STAT_INFOBSSK_19_WERT | - | - | unsigned char | - | - | - | - | - | Information Superklopfen-Bit B_ssk | A2L-NAME=infoBssk Array [19] |
| STAT_INFONMOT_0_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [0] |
| STAT_INFONMOT_1_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [1] |
| STAT_INFONMOT_2_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [2] |
| STAT_INFONMOT_3_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [3] |
| STAT_INFONMOT_4_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [4] |
| STAT_INFONMOT_5_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [5] |
| STAT_INFONMOT_6_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [6] |
| STAT_INFONMOT_7_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [7] |
| STAT_INFONMOT_8_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [8] |
| STAT_INFONMOT_9_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [9] |
| STAT_INFONMOT_10_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [10] |
| STAT_INFONMOT_11_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [11] |
| STAT_INFONMOT_12_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [12] |
| STAT_INFONMOT_13_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [13] |
| STAT_INFONMOT_14_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [14] |
| STAT_INFONMOT_15_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [15] |
| STAT_INFONMOT_16_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [16] |
| STAT_INFONMOT_17_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [17] |
| STAT_INFONMOT_18_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [18] |
| STAT_INFONMOT_19_WERT | 1/min | - | unsigned char | - | - | 40 | - | - | Information Drehzahl | A2L-NAME=infonmot Array [19] |
| STAT_INFORL_0_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [0] |
| STAT_INFORL_1_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [1] |
| STAT_INFORL_2_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [2] |
| STAT_INFORL_3_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [3] |
| STAT_INFORL_4_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [4] |
| STAT_INFORL_5_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [5] |
| STAT_INFORL_6_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [6] |
| STAT_INFORL_7_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [7] |
| STAT_INFORL_8_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [8] |
| STAT_INFORL_9_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [9] |
| STAT_INFORL_10_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [10] |
| STAT_INFORL_11_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [11] |
| STAT_INFORL_12_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [12] |
| STAT_INFORL_13_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [13] |
| STAT_INFORL_14_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [14] |
| STAT_INFORL_15_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [15] |
| STAT_INFORL_16_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [16] |
| STAT_INFORL_17_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [17] |
| STAT_INFORL_18_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [18] |
| STAT_INFORL_19_WERT | % | - | unsigned char | - | - | 0,75 | - | - | Information Last | A2L-NAME=inforl Array [19] |
| STAT_INFOZKR_0_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [0] |
| STAT_INFOZKR_1_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [1] |
| STAT_INFOZKR_2_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [2] |
| STAT_INFOZKR_3_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [3] |
| STAT_INFOZKR_4_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [4] |
| STAT_INFOZKR_5_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [5] |
| STAT_INFOZKR_6_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [6] |
| STAT_INFOZKR_7_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [7] |
| STAT_INFOZKR_8_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [8] |
| STAT_INFOZKR_9_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [9] |
| STAT_INFOZKR_10_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [10] |
| STAT_INFOZKR_11_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [11] |
| STAT_INFOZKR_12_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [12] |
| STAT_INFOZKR_13_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [13] |
| STAT_INFOZKR_14_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [14] |
| STAT_INFOZKR_15_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [15] |
| STAT_INFOZKR_16_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [16] |
| STAT_INFOZKR_17_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [17] |
| STAT_INFOZKR_18_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [18] |
| STAT_INFOZKR_19_WERT | - | - | unsigned char | - | - | - | - | - | Information Zylinderzähler | A2L-NAME=infozkr Array [19] |
| STAT_INFOTMOT_0_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [0] |
| STAT_INFOTMOT_1_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [1] |
| STAT_INFOTMOT_2_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [2] |
| STAT_INFOTMOT_3_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [3] |
| STAT_INFOTMOT_4_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [4] |
| STAT_INFOTMOT_5_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [5] |
| STAT_INFOTMOT_6_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [6] |
| STAT_INFOTMOT_7_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [7] |
| STAT_INFOTMOT_8_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [8] |
| STAT_INFOTMOT_9_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [9] |
| STAT_INFOTMOT_10_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [10] |
| STAT_INFOTMOT_11_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [11] |
| STAT_INFOTMOT_12_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [12] |
| STAT_INFOTMOT_13_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [13] |
| STAT_INFOTMOT_14_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [14] |
| STAT_INFOTMOT_15_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [15] |
| STAT_INFOTMOT_16_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [16] |
| STAT_INFOTMOT_17_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [17] |
| STAT_INFOTMOT_18_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [18] |
| STAT_INFOTMOT_19_WERT | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Information Motortemperatur | A2L-NAME=infotmot Array [19] |
| STAT_INFOKMST_W_0_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [0] |
| STAT_INFOKMST_W_1_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [1] |
| STAT_INFOKMST_W_2_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [2] |
| STAT_INFOKMST_W_3_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [3] |
| STAT_INFOKMST_W_4_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [4] |
| STAT_INFOKMST_W_5_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [5] |
| STAT_INFOKMST_W_6_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [6] |
| STAT_INFOKMST_W_7_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [7] |
| STAT_INFOKMST_W_8_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [8] |
| STAT_INFOKMST_W_9_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [9] |
| STAT_INFOKMST_W_10_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [10] |
| STAT_INFOKMST_W_11_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [11] |
| STAT_INFOKMST_W_12_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [12] |
| STAT_INFOKMST_W_13_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [13] |
| STAT_INFOKMST_W_14_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [14] |
| STAT_INFOKMST_W_15_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [15] |
| STAT_INFOKMST_W_16_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [16] |
| STAT_INFOKMST_W_17_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [17] |
| STAT_INFOKMST_W_18_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [18] |
| STAT_INFOKMST_W_19_WERT | - | high | unsigned int | - | - | - | - | - | Information Kilometerstand bzw. Betriebsstunden (CWSKRKO.6) | A2L-NAME=infokmst_w Array [19] |
| STAT_INFOFOCTAN_0_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [0] |
| STAT_INFOFOCTAN_1_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [1] |
| STAT_INFOFOCTAN_2_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [2] |
| STAT_INFOFOCTAN_3_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [3] |
| STAT_INFOFOCTAN_4_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [4] |
| STAT_INFOFOCTAN_5_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [5] |
| STAT_INFOFOCTAN_6_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [6] |
| STAT_INFOFOCTAN_7_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [7] |
| STAT_INFOFOCTAN_8_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [8] |
| STAT_INFOFOCTAN_9_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [9] |
| STAT_INFOFOCTAN_10_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [10] |
| STAT_INFOFOCTAN_11_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [11] |
| STAT_INFOFOCTAN_12_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [12] |
| STAT_INFOFOCTAN_13_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [13] |
| STAT_INFOFOCTAN_14_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [14] |
| STAT_INFOFOCTAN_15_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [15] |
| STAT_INFOFOCTAN_16_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [16] |
| STAT_INFOFOCTAN_17_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [17] |
| STAT_INFOFOCTAN_18_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [18] |
| STAT_INFOFOCTAN_19_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Faktor adaptierte Kraftstoffqualität (0 - ROZ98, 1 - ROZ91) | A2L-NAME=infofoctan Array [19] |
| STAT_INFOSTATSKINFO2_0_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [0] |
| STAT_INFOSTATSKINFO2_1_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [1] |
| STAT_INFOSTATSKINFO2_2_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [2] |
| STAT_INFOSTATSKINFO2_3_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [3] |
| STAT_INFOSTATSKINFO2_4_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [4] |
| STAT_INFOSTATSKINFO2_5_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [5] |
| STAT_INFOSTATSKINFO2_6_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [6] |
| STAT_INFOSTATSKINFO2_7_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [7] |
| STAT_INFOSTATSKINFO2_8_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [8] |
| STAT_INFOSTATSKINFO2_9_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [9] |
| STAT_INFOSTATSKINFO2_10_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [10] |
| STAT_INFOSTATSKINFO2_11_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [11] |
| STAT_INFOSTATSKINFO2_12_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [12] |
| STAT_INFOSTATSKINFO2_13_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [13] |
| STAT_INFOSTATSKINFO2_14_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [14] |
| STAT_INFOSTATSKINFO2_15_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [15] |
| STAT_INFOSTATSKINFO2_16_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [16] |
| STAT_INFOSTATSKINFO2_17_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [17] |
| STAT_INFOSTATSKINFO2_18_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [18] |
| STAT_INFOSTATSKINFO2_19_WERT | - | - | unsigned char | - | - | - | - | - | Infobytes 2 Superklopfer | A2L-NAME=infoinj Array [19] |
| STAT_TOTAL_CTKRBSSK_WERT | - | high | unsigned long | - | - | - | - | - | Anzahl der Superklopfen (nur Vorentflammung) ueber alle Fahrzyklen und alle Zylinder. | A2L-NAME=skeventctr_l |
| STAT_INFOEVAB_0_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [0] |
| STAT_INFOEVAB_1_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [1] |
| STAT_INFOEVAB_2_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [2] |
| STAT_INFOEVAB_3_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [3] |
| STAT_INFOEVAB_4_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [4] |
| STAT_INFOEVAB_5_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [5] |
| STAT_INFOEVAB_6_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [6] |
| STAT_INFOEVAB_7_WERT | - | high | unsigned int | - | - | - | - | - | Information von Ausblendungsanforderungen. | A2L-NAME=infoevab_w Array [7] |

### RES_0X4083

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZAEHLER_GESAMTSTART_WERT | - | high | unsigned long | - | - | - | - | - | Zähler Gesamtstart | A2L-NAME=msastrtzges_l |
| STAT_KM_STAND_WERT | - | high | unsigned long | - | - | - | - | - | Wegstrecke_km auf 1km genau | A2L-NAME=kmstand_l |
| STAT_FAK_PREDSOHSGR_WERT | - | - | unsigned char | - | - | 0,01 | - | - | prädiktiver SGR SOH abhängiger Faktor für Degradation in EME | A2L-NAME=SwSABMW_facPrdcSGRSoh |
| STAT_BETRIEBSSTUNDENZAEHLER_WERT | s | high | unsigned long | - | - | 0,01 | - | - | Betriebsstundenzähler in s | A2L-NAME=SwSABMW_opHrsSpst |

### RES_0X4085

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_KRAFTSTOFFTANK_WERT | mbar | high | unsigned int | - | - | 0,5 | - | 300,0 | Druckwert Kraftstofftank | A2L-NAME=TankEcu_pFlTnk |
| STAT_TEMP_KRAFTSTOFFTANK_WERT | °C | high | unsigned int | - | - | - | - | -40,0 | Temperaturwert Kraftstofftank | A2L-NAME=TankEcu_tFlTnk |
| STAT_FEHLER_DRUCK | 0/1 | - | unsigned char | - | - | - | - | - | Fehler Druck | A2L-NAME=TankEcu_bPresErr |
| STAT_FLAG_KOMMUNIKATIONSFEHLER | 0/1 | - | unsigned char | - | - | - | - | - | Flag für Kommunikationsfehler | A2L-NAME=TankEcu_bComErr |
| STAT_FLAG_CHECKSUMME | 0/1 | - | unsigned char | - | - | - | - | - | Flag für Checksumme | A2L-NAME=TankEcu_bChkSumErr |
| STAT_FLAG_BIT_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | - | - | - | Flag für Bit Überwachung | A2L-NAME=TankEcu_bBitErr |
| STAT_VERSION_HARDWARE_WERT | - | - | unsigned char | - | - | - | - | - | Version Hardware | A2L-NAME=TankEcu_numVersHw |
| STAT_VERSION_SOFTWARE_WERT | - | - | unsigned char | - | - | - | - | - | Version Software | A2L-NAME=TankEcu_numVersSw |

### RES_0X408F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr0_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr0_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr0_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr0_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr0_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr1_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr1_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr1_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr1_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr1_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr2_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr2_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr2_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr2_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr2_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr3_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr3_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr3_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr3_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL1_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 1, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl0_Tmpr3_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr0_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr0_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr0_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr0_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr0_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr1_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr1_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr1_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr1_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr1_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr2_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr2_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr2_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr2_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr2_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr3_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr3_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr3_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr3_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL2_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 2, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl2_Tmpr3_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr0_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr0_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr0_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr0_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr0_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr1_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr1_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr1_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr1_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr1_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr2_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr2_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr2_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr2_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr2_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr3_Press0 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr3_Press1 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr3_Press2 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr3_Press3 |
| STAT_CVO_VERZ_OEFFNEN_ZYL3_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 3, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Tantot_SwCyl1_Tmpr3_Press4 |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL4_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 4, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL5_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 5, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL6_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 6, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL7_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 7, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP1_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP1_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP1_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP1_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP1_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP2_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP2_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP2_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP2_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP2_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP3_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP3_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP3_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP3_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP3_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP4_DRUCK1_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP4_DRUCK2_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP4_DRUCK3_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP4_DRUCK4_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_VERZ_OEFFNEN_ZYL8_TEMP4_DRUCK5_WERT | µs | high | unsigned int | - | - | - | 10 | - | Abhebeverzögerung Zylinder 8, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr0_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr0_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr0_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr0_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr0_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr1_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr1_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr1_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr1_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr1_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr2_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr2_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr2_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr2_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr2_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr3_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr3_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr3_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr3_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL1_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 1, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl0_Tmpr3_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr0_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr0_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr0_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr0_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr0_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr1_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr1_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr1_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr1_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr1_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr2_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr2_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr2_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr2_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr2_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr3_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr3_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr3_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr3_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL2_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 2, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl2_Tmpr3_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr0_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr0_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr0_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr0_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr0_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr1_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr1_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr1_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr1_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr1_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr2_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr2_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr2_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr2_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr2_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr3_Press0 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr3_Press1 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr3_Press2 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr3_Press3 |
| STAT_CVO_ADAP_DELTATI_ZYL3_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 3, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_DeltaTi_SwCyl1_Tmpr3_Press4 |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL4_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 4, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL5_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 5, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL6_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 6, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL7_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 7, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP1_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 1, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP1_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 1, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP1_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 1, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP1_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 1, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP1_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 1, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP2_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 2, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP2_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 2, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP2_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 2, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP2_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 2, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP2_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 2, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP3_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 3, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP3_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 3, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP3_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 3, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP3_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 3, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP3_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 3, Druckstufe 5 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP4_DRUCK1_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 4, Druckstufe 1 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP4_DRUCK2_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 4, Druckstufe 2 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP4_DRUCK3_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 4, Druckstufe 3 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP4_DRUCK4_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 4, Druckstufe 4 | - |
| STAT_CVO_ADAP_DELTATI_ZYL8_TEMP4_DRUCK5_WERT | µs | high | int | - | - | - | 10 | - | Delta ti Zylinder 8, Temperaturpunkt 4, Druckstufe 5 | - |
| STAT_INJVVG_CVOADPN_BASEADPNCNTR_TMPR0_WERT | - | high | unsigned int | - | - | - | - | - | Grundadaptionszähler Temperaturpunkt 1 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnCntr_Tmpr0 |
| STAT_INJVVG_CVOADPN_BASEADPNCNTR_TMPR1_WERT | - | high | unsigned int | - | - | - | - | - | Grundadaptionszähler Temperaturpunkt 2 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnCntr_Tmpr1 |
| STAT_INJVVG_CVOADPN_BASEADPNCNTR_TMPR2_WERT | - | high | unsigned int | - | - | - | - | - | Grundadaptionszähler Temperaturpunkt 3 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnCntr_Tmpr2 |
| STAT_INJVVG_CVOADPN_BASEADPNCNTR_TMPR3_WERT | - | high | unsigned int | - | - | - | - | - | Grundadaptionszähler Temperaturpunkt 4 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnCntr_Tmpr3 |
| STAT_INJVVG_CVOADPN_INJCNTR_WERT | - | high | unsigned long | - | - | - | - | - | Einspritzzähler seit Urstart oder Powerfail | A2L-NAME=InjVvG_CvoAdpn_InjCntr |
| STAT_INJVVG_CVOADPN_BASEADPNLSTMEAS_TMPR0_WERT | - | high | unsigned long | - | - | - | - | - | Einspritzzählerstand von letzter Grundadaption Temperaturpunkt 1 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnLstMeas_Tmpr0 |
| STAT_INJVVG_CVOADPN_BASEADPNLSTMEAS_TMPR1_WERT | - | high | unsigned long | - | - | - | - | - | Einspritzzählerstand von letzter Grundadaption Temperaturpunkt 2 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnLstMeas_Tmpr1 |
| STAT_INJVVG_CVOADPN_BASEADPNLSTMEAS_TMPR2_WERT | - | high | unsigned long | - | - | - | - | - | Einspritzzählerstand von letzter Grundadaption Temperaturpunkt 3 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnLstMeas_Tmpr2 |
| STAT_INJVVG_CVOADPN_BASEADPNLSTMEAS_TMPR3_WERT | - | high | unsigned long | - | - | - | - | - | Einspritzzählerstand von letzter Grundadaption Temperaturpunkt 4 | A2L-NAME=InjVvG_CvoAdpn_BaseAdpnLstMeas_Tmpr3 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR0_PRESS0_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 1, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr0_Press0 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR0_PRESS1_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 1, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr0_Press1 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR0_PRESS2_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 1, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr0_Press2 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR0_PRESS3_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 1, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr0_Press3 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR0_PRESS4_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 1, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr0_Press4 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR1_PRESS0_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 2, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr1_Press0 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR1_PRESS1_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 2, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr1_Press1 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR1_PRESS2_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 2, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr1_Press2 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR1_PRESS3_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 2, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr1_Press3 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR1_PRESS4_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 2, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr1_Press4 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR2_PRESS0_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 3, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr2_Press0 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR2_PRESS1_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 3, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr2_Press1 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR2_PRESS2_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 3, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr2_Press2 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR2_PRESS3_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 3, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr2_Press3 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR2_PRESS4_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 3, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr2_Press4 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR3_PRESS0_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 4, Druckstufe 1 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr3_Press0 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR3_PRESS1_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 4, Druckstufe 2 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr3_Press1 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR3_PRESS2_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 4, Druckstufe 3 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr3_Press2 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR3_PRESS3_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 4, Druckstufe 4 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr3_Press3 |
| STAT_INJVVG_CVOADPN_LOCKED_SWCYL_TMPR3_PRESS4_WERT | HEX | - | unsigned char | - | - | - | - | - | für Adaption gesperrte Zylinder, wegen Plausibilisierung, Temperaturpunkt 4, Druckstufe 5 | A2L-NAME=InjVvG_CvoAdpn_Locked_SwCyl_Tmpr3_Press4 |

### RES_0X4094

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MISFDET_TITOTDMFDSBCSUSPC_WERT | s | high | unsigned long | - | - | 0,1 | - | - | Summe Zeit - Bedingung Verdacht auf verklemmte ZMS-Federn. (A2L: MisfDet_tiTotDmfDsbcSuspc) | A2L-NAME=MisfDet_tiTotDmfDsbcSuspc |
| STAT_MISFDET_TITOTDMFDSBC_WERT | s | high | unsigned long | - | - | 0,1 | - | - | Summe Zeit - Bedingung Laufunruhesignal gestört durch ZMS-Einflüsse. (A2L: MisfDet_tiTotDmfDsbc) | A2L-NAME=MisfDet_tiTotDmfDsbc |
| STAT_MISFDET_DSTTOTDMF_WERT | m | high | unsigned int | - | - | - | - | - | Summe Wegstrecke - Bedingung Verdacht auf verklemmte ZMS-Feder. (A2L:MisfDet_dstTotDmfDsbcSuspc) | A2L-NAME=MisfDet_dstTotDmfDsbcSuspc |
| STAT_MISFDET_DSTTOTDMFDSBC_WERT | m | high | unsigned int | - | - | - | - | - | Summe Wegstrecke - Bedingung Laufunruhesignal gestört durch ZMS-Einflüsse. (A2L: MisfDet_dstTotDmfDsbc) | A2L-NAME=MisfDet_dstTotDmfDsbc |
| STAT_MISFDET_RATTITOTDMFDSBCSUSPCTOTOTVEHOPERTI_WERT | - | high | motorola float | - | - | 1e-009 | - | - | Verhältnis Zeit Verdacht auf verklemmte ZMS-Federn zu Betriebsstundenzähler. (A2L: MisfDet_ratTiTotDmfDsbcSuspcToTotVehOperTi) | A2L-NAME=MisfDet_ratTiTotDmfDsbcSuspcToTotVehOperTi |
| STAT_MISFDET_RATTITOTDMFDSBCTOTOTVEHOPERTI_WERT | - | high | motorola float | - | - | 1e-009 | - | - | Verhältnis Zeit Laufunruhesignal gestört durch ZMSEinflüsse zu Betriebsstundenzähler. (A2L: MisfDet_ratTiTotDmfDsbcToTotVehOperTi) | A2L-NAME=MisfDet_ratTiTotDmfDsbcToTotVehOperTi |
| STAT_MISFDET_RATDSTTOTDMFDSBCSUSPCTOVEHMILG_WERT | - | high | motorola float | - | - | 1e-009 | - | - | Verhältnis Wegstrecke Verdacht auf verklemmte ZMS-Federn zu Kilometerstand. (A2L:MisfDet_ratDstTotDmfDsbcSuspcToVehMilg) | A2L-NAME=MisfDet_ratDstTotDmfDsbcSuspcToVehMilg |
| STAT_MISFDET_RATDSTTOTDMFDSBCTOVEHMILG_WERT | - | high | motorola float | - | - | 1e-009 | - | - | Verhältnis Wegstrecke Laufunruhesignal gestört durch ZMSEinflüsse zu Kilometerstand. (A2L:MisfDet_ratDstTotDmfDsbcToVehMilg) | A2L-NAME=MisfDet_ratDstTotDmfDsbcToVehMilg |

### RES_0X4095

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AVG_DRVGSTMOD_WERT | l/100km | high | unsigned int | - | - | 0,001 | - | - | Durchschnittsverbrauch gesamt (A2L-NAME: BMWstat_avg_DrvGstMod_uw). | A2L-NAME=SwSABMW_AvrgCnsTot |
| STAT_DST_DRVGSTMOD_WERT | km | high | unsigned long | - | - | 0,001 | - | - | Wegstrecke Gesamt (A2L-NAME: BMWstat_dst_DrvGstMod_ul). | A2L-NAME=SwSABMW_dstTot |
| STAT_AVG_DRVECOMOD_WERT | l/100km | high | unsigned int | - | - | 0,001 | - | - | Durchschnittsverbrauch im ECO Modus (A2L-NAME: BMWstat_avg_DrvEcoMod_uw). | A2L-NAME=SwSABMW_AvrgCnsEcoMod |
| STAT_DST_DRVECOMOD_WERT | km | high | unsigned long | - | - | 0,001 | - | - | Wegstrecke ECO Mode (A2L-NAME: BMWstat_dst_DrvEcoMod_ul). | A2L-NAME=SwSABMW_dstEcoMod |
| STAT_AVG_DRVCFTMOD_WERT | l/100km | high | unsigned int | - | - | 0,001 | - | - | Durchschnittsverbrauch im Komfort/Normal Modus (A2L-NAME: BMWstat_avg_DrvCftMod_uw). | A2L-NAME=SwSABMW_AvrgCnsCmftMod |
| STAT_DST_DRVCFTMOD_WERT | km | high | unsigned long | - | - | 0,001 | - | - | Wegstrecke Komfort/Normal Mode (A2L-NAME: BMWstat_dst_DrvCftMod_ul). | A2L-NAME=SwSABMW_dstCmftMod |
| STAT_AVG_DRVSPTMOD_WERT | l/100km | high | unsigned int | - | - | 0,001 | - | - | Durchschnittsverbrauch im Sport Modus (A2L-NAME: BMWstat_avg_DrvSptMod_uw). | A2L-NAME=SwSABMW_AvrgCnsSptMod |
| STAT_DST_DRVSPTMOD_WERT | km | high | unsigned long | - | - | 0,001 | - | - | Wegstrecke Sport Mode (A2L-NAME: BMWstat_dst_DrvSptMod_ul). | A2L-NAME=SwSABMW_dstSpt |
| STAT_AVG_IDLMOD_WERT | l/h | high | unsigned int | - | - | 0,001 | - | - | Kraftstoffverbrauch im Leerlauf (A2L-NAME: BMWstat_avg_IdlMod_uw). | A2L-NAME=SwSABMW_FlCnsIdl |
| STAT_TI_IDLMOD_WERT | s | high | unsigned long | - | - | - | - | - | Zeit im Leerlauf (A2L-NAME: BMWstat_ti_IdlMod_ul). | A2L-NAME=SwSABMW_tIdl |

### RES_0X409A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CNT_PAKMX_WERT | - | - | unsigned char | - | - | - | - | - | Zaehler der PAKMX Einzelpruefungen (Abgasdruck zu hoch) (A2L-NAME: SwSABMW_cntEgpChk). | A2L-NAME=SwSABMW_cntEgpChk |
| STAT_CNT_PAKMX_DC_WERT | - | - | unsigned char | - | - | - | - | - | Zaehler der PAKMX Einzelpruefungen in diesem Driving Cycle(Abgasdruck zu hoch) (A2L-NAME: SwSABMW_cntEgpChkActDrvg). | A2L-NAME=SwSABMW_cntEgpChkActDrvg |
| STAT_CNT_PAKMX_SOLL_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl der noetigen PAKMX Einzelpruefungen fuer statistischen Fehler (FSP-Ausgabe) (A2L-NAME: SwSABMW_cntEgpChkStcErr). | A2L-NAME=SwSABMW_cntEgpChkStcErr |
| STAT_F_PAKMX_ERR_WERT | - | - | unsigned char | - | - | 0,00390625 | - | - | Statistischer Fehler der PAKMX (Abgasdruck zu hoch). | A2L-NAME=SwSABMW_statErrEgpChk |

### RES_0X4105

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | BIT | - | BITFIELD | - | BF_0x4105_0 | - | - | - | Readiness code completion status 1 | A2L-NAME=DSMRdy_xPId1B |
| - | BIT | - | BITFIELD | - | BF_0x4105_1 | - | - | - | Readiness code completion status 2 | A2L-NAME=DSMRdy_xPId1D |
| - | BIT | - | BITFIELD | - | BF_0x4105_2 | - | - | - | Status configuration for readiness code (non continuous tests) | A2L-NAME=DSMRdy_xPId1C |

### RES_0X4106

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEGEL_VERHINDERER_WERT | HEX | high | unsigned long | - | - | - | - | - | Auslesung des Segelverhinderers. | A2L-NAME=SwSABMW_stListSailInhb |
| STAT_SEGEL_FEHLER_EXT_WERT | HEX | high | unsigned int | - | - | - | - | - | Auslesung der Fehler der externen Segelverhinderer. | A2L-NAME=SwSABMW_stListErrMsg |

### RES_0X4150

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_NG_POSITION_WERT | % | high | unsigned int | - | - | 0,01 | - | - | Aktuelle Position Nullgangsensor | A2L-NAME=tngang_w |
| STAT_PHY_NG_LERN_WERT | % | high | unsigned int | - | - | 0,01 | - | - | angelernter Wert Nullgangsensor | A2L-NAME=tvneutrl_w |
| STAT_NG_ERKANNT | 0-n | - | unsigned char | - | T_B_1BYTE_LESEN_0_1 | - | - | - | Status Nullgangerkennung (Fahrzeug befindet sich aktuell im Nullgang) (0=falsch 1= wahr) | A2L-NAME=B_gangnul |
| STAT_NG_GELERNT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Nullgangsensor ist bereits eingelernt (0=falsch 1= wahr) | A2L-NAME=B_nggelernt |
| STAT_KUP_BETAETIGT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Kupplung betaetigt (0=falsch 1= wahr) | A2L-NAME=B_kupplext |
| STAT_MOT_DREHT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Motor laeuft (0=falsch 1= wahr) | A2L-NAME=B_nmot |
| STAT_NG_IM_LF | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Sensorwert im Lernfenster (kein Gang eingelegt) (0=falsch 1= wahr) | A2L-NAME=B_ngimlf |
| STAT_ALPHA_AKT_POS_WERT | % | high | unsigned int | - | - | 0,01220703125 | - | - | Aktuelle Position Wählwinkel Alpha [%]. | A2L-NAME=GbxPos_rXPosAftOffs |
| STAT_BETA_AKT_POS_WERT | % | high | unsigned int | - | - | 0,01220703125 | - | - | Aktuelle Position Schaltwinkel Beta [%]. | A2L-NAME=GbxPos_rYPosAftOffs |
| STAT_ALPHA_GELERNT_WERT | % | high | unsigned int | - | - | 0,01220703125 | - | - | Angelernter Wählwinkel Alfa-Wert [%]. | A2L-NAME=GbxPos_rXPosOffsZrPos |
| STAT_BETA_GELERNT_WERT | % | high | unsigned int | - | - | 0,01220703125 | - | - | Angelernter Schaltwinkel Beta-Wert [%]. | A2L-NAME=GbxPos_rYPosOffsZrPos |
| STAT_ALPHA_BETA_GELERNT | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Alpha- und Beta-Wert ist gelernt (0=falsch 1= wahr). | A2L-NAME=GbxPos_stPosOffsLrn |
| STAT_SENSW_ALPHA_LF | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Sensorwert Wählwinkel Alpha im Lernfenster (0=falsch 1= wahr) | A2L-NAME=GbxPos_stOffsLrnReqdCond Bit 6 |
| STAT_SENSW_BETA_LF | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Sensorwert Schaltwinkel Beta im Lernfenster (0=falsch, 1=wahr) | A2L-NAME=GbxPos_stOffsLrnReqdCond Bit 7 |
| STAT_GETRIEBETMP_WERT | °C | high | int | - | - | 0,1 | - | -273,14 | Aktuelle Getriebetemperatur (SlowChannel).Von -40 bis 150 [°C], 1[°C] Auflösung. Def: Ausgabe analog zum kennlinienkorrigierten Temperaturwert. Anmerkung nach CP 119870: Die Temperatur wird mittels eines NTC-Elements im Sensor detektiert. Der Wertebereich umfasst -40°C bis 150°C. Die Linearisierung der Kennlinie inklusive Fehlerbetrachtung muss für die Auflösung/Abweichung von +/-1K im Steuergerät erfolgen. | A2L-NAME=GbxPos_tGbx |
| STAT_SCHALTHBLPOS_WERT | - | high | unsigned int | - | - | - | - | - | Schalthebelposition Bytestruktur: Bit 0-5: Gang 1-6 Bit 6: Rückwärtsgang Bit 7: Gang eingelegt? [1] / Synchronisation?[0] Fälle: N_56 00110000 N_34 00001100 N_R12 00000011 R_engaged 11000000 6_engaged 10100000 5_engaged 10010000 4_engaged 10001000 3_engaged 10000100 2_engaged 10000010 1_engaged 10000001 R_syn 01000000 6_syn 00100000 5_syn 00010000 4_syn 00001000 3_syn 00000100 2_syn 00000010 1_syn 00000001 Nicht eingelernt 00111111 | A2L-NAME=GbxPos_numLvrPos |

### RES_0X5F71

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_0_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [0] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_1_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [1] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_2_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [2] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_3_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [3] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_4_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [4] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_5_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [5] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_6_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [6] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_7_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [7] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_8_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [8] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_9_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [9] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_10_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [10] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_11_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [11] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_12_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [12] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_13_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [13] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_14_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [14] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_15_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [15] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_16_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [16] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_17_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [17] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_18_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [18] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_19_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [19] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_20_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [20] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_21_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [21] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_22_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [22] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_23_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [23] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_24_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [24] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_25_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [25] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_26_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [26] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_27_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [27] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_28_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [28] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_29_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [29] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_30_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [30] |
| STAT_SWSABMW_DATARRPERCDISTOPEMAC_U16_31_WERT | - | high | unsigned int | - | - | 1,52587890625e-005 | - | - | - | A2L-NAME=SwSABMW_datArrPercDistOpEmac_u16 Array [31] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_0_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [0] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_1_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [1] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_2_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [2] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_3_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [3] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_4_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [4] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_5_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [5] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_6_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [6] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_7_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [7] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_8_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [8] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_9_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [9] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_10_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [10] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_11_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [11] |
| STAT_SWSABMW_FACDATARRISGSDMSTAT_12_WERT | - | high | int | - | - | - | - | - | - | A2L-NAME=SwSABMW_facDatArrIsgSdmStat Array [12] |
| STAT_SWSABMW_TOTOPHRSISGSDMSTAT_WERT | - | high | unsigned long | - | - | - | - | - | Gesamt-Betriebsstundenzähler für Isgsdm_statistik | A2L-NAME=SwSABMW_totOpHrsIsgSdmStat |

### RES_0X5F73

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OSC_LAST_1_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Letzter Wert OSC Vollvermessung, Bank1. | A2L-NAME=ExhMod_rOSCAvrgB1 |
| STAT_OSC_LAST_2_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Letzter Wert OSC Vollvermessung, Bank2. ExhMod_rOSCAvrgB2 für TWCDOSCPRIB2_SY > 0, sonst 0xFFFF. | A2L-NAME=ExhMod_rOSCAvrgB2 |
| STAT_KM_OSC_LAST_1_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand der letzten Vollvermessung, Bank1. | A2L-NAME=ExhMod_lenMilgLstOSCFullB1 |
| STAT_KM_OSC_LAST_2_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand der letzten Vollvermessung, Bank2. ExhMod_lenMilgLstOSCFullB2 für TWCDOSCPRIB2_SY > 0, sonst 0xFFFF. | A2L-NAME=ExhMod_lenMilgLstOSCFullB2 |
| STAT_OSC_MIN_1_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Minimaler Wert OSC Vollvermessung, Bank1. | A2L-NAME=ExhMod_rOSCFullMinB1 |
| STAT_OSC_MIN_2_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Minimaler Wert OSC Vollvermessung, Bank2. ExhMod_rOSCFullMinB2 für TWCDOSCPRIB2_SY > 0, sonst 0xFFFF. | A2L-NAME=ExhMod_rOSCFullMinB2 |
| STAT_KM_OSC_MIN_1_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand der minimalen Vollvermessung, Bank1. | A2L-NAME=ExhMod_lenMilgMinOSCFullB1 |
| STAT_KM_OSC_MIN_2_WERT | km | high | unsigned int | - | - | 10 | - | - | Kilometerstand der minimalen Vollvermessung, Bank2. ExhMod_lenMilgMinOSCFullB2 für TWCDOSCPRIB2_SY > 0, sonst 0xFFFF. | A2L-NAME=ExhMod_lenMilgMinOSCFullB2 |
| STAT_AKT_KATDIAGNOSE_1_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Aktueller Katdiagnose-Messwert Bank1. | A2L-NAME=TWCD_rOSCAvrgB1 |
| STAT_AKT_KATDIAGNOSE_2_WERT | - | high | unsigned int | - | - | 0,000244140625 | - | - | Aktueller Katdiagnose-Messwert Bank1. 2 Byte. TWCD_rOSCAvrgB2 für TWCDOSCSCNDB1_SY > 0, sonst 0xFFFF. | A2L-NAME=TWCD_rOSCAvrgB2 |
| STAT_DIAGNOSESTATOSC_1_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl durchgeführter Vollvermessungen (Zyklen Ist-Wert), Bank1. | A2L-NAME=ExhMod_numOSCFullMeasB1 |
| STAT_DIAGNOSESTATOSC_2_WERT | - | - | unsigned char | - | - | - | - | - | Anzahl durchgeführter Vollvermessungen (Zyklen Ist-Wert), Bank2. ExhMod_numOSCFullMeasB2 für TWCDOSCPRIB2_SY > 0, sonst 0xFF. | A2L-NAME=ExhMod_numOSCFullMeasB2 |

### RES_0X5F74

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV | 0-n | - | unsigned char | - | T_1BYTE_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP | - | - | - | Deaktivierung der Katheizfunktionalitaet aktiv / inaktiv. (1=aktiv, 0=inaktiv). | A2L-NAME=BasSvrAppl_stDeactvnCatHeatg |

### RES_0X5F75

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VVT_EXWINKSREV_WERT | - | high | unsigned int | - | - | - | - | - | Zaehler Rueckdrehereignisse aufgrund von Lagereglerabweichung VVT-Steller | A2L-NAME=vvt_exwinksrev |

### RES_0X5F76

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUNKBRENNDAUER_ABSCHLTMUSTER_WERT | - | - | unsigned char | - | - | - | - | - | Funkenbrenndauer-Diagnose: Abschaltmuster. . | A2L-NAME=abmdzbd |

### RES_0X5F7B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VVT_LRGF_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl erkannter VVT Lageregelungsfehler | A2L-NAME=vvt_deviation |
| STAT_VVT_LRGF_IREV_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irreversibel | A2L-NAME=vvt_highcurrent |
| STAT_VVT_LRGF_REV_WERT | - | high | unsigned int | - | - | - | - | - | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversibel | A2L-NAME=vvt_highcurrent_rev |

### RES_0X5F7C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA_STRTZGES_WERT | - | high | unsigned long | - | - | - | - | - | Zaehler Gesamtstart (A2L-Name: Msa_strtzges) | A2L-NAME=msastrtzges_l |
| STAT_MSA_STRTZRFL_WERT | - | high | unsigned long | - | - | - | - | - | Zaehler Reflexstarts | A2L-NAME=mastrtzrfl_l |
| STAT_MSA_STRTZGES0_WERT | - | high | unsigned long | - | - | - | - | - | Gesamtstartzahl beim letzten Startertausch | A2L-NAME=msastrtzges0_l |
| STAT_MSA_STRTZRFL0_WERT | - | high | unsigned long | - | - | - | - | - | Gesamtreflexstartzahl beim letzen Startertausch | A2L-NAME=msastrtzrfl0_l |
| STAT_MSA_STRTZKM0_WERT | km | high | unsigned long | - | - | - | - | - | Gesamtkilometerzahl beim letzten Startertausch | A2L-NAME=msastrtzkm0_l |

### RES_0X5F7E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIS_COD_BSR_WERT | - | - | unsigned char | - | - | - | - | - | Verriegelung des betriebsstundenrelevanten Kodierbereichs (Auslesen vom Bit: DIS_COD_BSR) | A2L-NAME=B_discodbsr |

### RES_0X5F80

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_F_MK_KORR_EXT_XZYL_1_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 1 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [0] |
| STAT_SW_F_MK_KORR_EXT_XZYL_2_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 2 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [1] |
| STAT_SW_F_MK_KORR_EXT_XZYL_3_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 3 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [2] |
| STAT_SW_F_MK_KORR_EXT_XZYL_4_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 4 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [3] |
| STAT_SW_F_MK_KORR_EXT_XZYL_5_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [4] |
| STAT_SW_F_MK_KORR_EXT_XZYL_6_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [5] |
| STAT_SW_F_MK_KORR_EXT_XZYL_7_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 7 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [6] |
| STAT_SW_F_MK_KORR_EXT_XZYL_8_WERT | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor auf Einspritzung Zylinder 8 (Physikalische Reihenfolge) | A2L-NAME=fakmkkorrext_w Array [7] |

### RES_0X5F85

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA2_DEAK_SAV_WERT | - | high | unsigned long | - | - | - | - | - | Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) | A2L-NAME=msaswsavdi_l |

### RES_0X5F8C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STVBRVSIN_WERT | - | - | unsigned char | - | - | - | - | - | Statuswort Verbrennungsregelung vom Tester nichtflüchtig. | A2L-NAME=stvbrvsin |
| STAT_STVBRVSNNV_WERT | - | - | unsigned char | - | - | - | - | - | Statuswort Verbrennungsregelung vom Tester. | A2L-NAME=stvbrvsnnv |
| STAT_STVBRVSO_WERT | - | high | unsigned int | - | - | - | - | - | Statuswort Verbrennungsregelung für Service. | A2L-NAME=stvbrvso_w |

### RES_0X5F8E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MSA2_DEAK | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | MSA2 (MotorStopAutomatik) deaktiviert (0=falsch 1=wahr) | A2L-NAME=B_msasw |

### RES_0X5FF0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OFS_WERT | 1/min | - | char | - | - | 10 | - | - | Drehzahlanhebung im Leerlauf | A2L-NAME=dnllmv |
| STAT_OFS_ACC_WERT | 1/min | - | char | - | - | 10 | - | - | Drehzahlanhebung im Leerlauf mit Klimaanlage ein | A2L-NAME=dnsacmv |
| STAT_OFS_DRI_WERT | 1/min | - | char | - | - | 10 | - | - | Drehzahlanhebung im Leerlauf mit Fahrstufe | A2L-NAME=dnfsmv |
| STAT_OFS_ACC_DRI_WERT | 1/min | - | char | - | - | 10 | - | - | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein | A2L-NAME=dnfsacmv |
| STAT_OFS_VB_WERT | 1/min | - | char | - | - | 10 | - | - | Drehzahlanhebung im Leerlauf zum Batterie laden | A2L-NAME=dnslbv |

### RES_0X5FF2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISA_WERT | - | - | unsigned char | - | - | - | - | - | DISA geschaltet vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Disa |
| STAT_DISA_LM_WERT | - | - | unsigned char | - | - | - | - | - | DISA geregelt mit Lagerueckmeldung. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Disa_Lm |
| STAT_ANSK_WERT | - | - | unsigned char | - | - | - | - | - | Ansaugluftklappe vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Ansk |
| STAT_TURBO_WERT | - | - | unsigned char | - | - | - | - | - | Turbo mit Wastegate vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Turbo |
| STAT_TURBO_VTG_WERT | - | - | unsigned char | - | - | - | - | - | Turbo mit variabler Turbinengeometrie vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Turbo_Vtg |
| STAT_AGR_WERT | - | - | unsigned char | - | - | - | - | - | Abgasrueckfuehrung vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Agr |
| STAT_AGK_MONO_WERT | - | - | unsigned char | - | - | - | - | - | Abgaskonzept Mono vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Agk_Mono |
| STAT_AGK_Y_WERT | - | - | unsigned char | - | - | - | - | - | Abgaskonzept Y vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Agk_y |
| STAT_AGK_STEREO_WERT | - | - | unsigned char | - | - | - | - | - | Abgaskonzept Stereo vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Agk_Stereo |
| STAT_AGK_KAT_WERT | - | - | unsigned char | - | - | - | - | - | Abgaskonzept ohne KAT vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Agk_Kat |
| STAT_LLSVK_WERT | - | - | unsigned char | - | - | - | - | - | Lineare Lambdasonden vor KAT vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Llsvk |
| STAT_BLSVK_WERT | - | - | unsigned char | - | - | - | - | - | Binaere Lambdasonden vor KAT vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Blsvk |
| STAT_SLP_WERT | - | - | unsigned char | - | - | - | - | - | Sekundaerluftpumpe vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Slp |
| STAT_SLV_WERT | - | - | unsigned char | - | - | - | - | - | Sekundaerluftventil vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Slv |
| STAT_AGK_WERT | - | - | unsigned char | - | - | - | - | - | Abgasklappe vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Agk |
| STAT_SOK_WERT | - | - | unsigned char | - | - | - | - | - | Soundklappe vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Sok |
| STAT_KLJ_WERT | - | - | unsigned char | - | - | - | - | - | Kuehler Jalousie vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Klj |
| STAT_ELUE_400_WERT | - | - | unsigned char | - | - | - | - | - | E-Luefter 400W vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Elue400 |
| STAT_ELUE_600_WERT | - | - | unsigned char | - | - | - | - | - | E-Luefter 600W vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Elue600 |
| STAT_EBL_WERT | - | - | unsigned char | - | - | - | - | - | E-Box-Luefter. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Ebl |
| STAT_MFL_WERT | - | - | unsigned char | - | - | - | - | - | Multifunktionslenkrad. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Mfl |
| STAT_SPT_WERT | - | - | unsigned char | - | - | - | - | - | Sport-Taster. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Spt |
| STAT_TOZNIV_WERT | - | - | unsigned char | - | - | - | - | - | Thermischer Oelniveausensor vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Tozniv |
| STAT_AKKS_BN2000_WERT | - | - | unsigned char | - | - | - | - | - | Aktive Kuehlluftklappe (oben). 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Akks |
| STAT_PKKS_BN2000_WERT | - | - | unsigned char | - | - | - | - | - | Passive Kuehlluftklappe (unten). 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Pkks |
| STAT_HS_WERT | - | - | unsigned char | - | - | - | - | - | Handschalter vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=codget BitMapping[0=0,1=1] |
| STAT_EGS_WERT | - | - | unsigned char | - | - | - | - | - | EGS vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=codget BitMapping[0=0,4=1] |
| STAT_DKG_WERT | - | - | unsigned char | - | - | - | - | - | DKG vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=codget BitMapping[0=0,8=1] |
| STAT_ASC_WERT | - | - | unsigned char | - | - | - | - | - | Automatic Stability Control vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_ascpkw |
| STAT_ARS_WERT | - | - | unsigned char | - | - | - | - | - | Anti Roll Stabilisierung vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_arsvar |
| STAT_AFS_WERT | - | - | unsigned char | - | - | - | - | - | Active Front Steering vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_afsvar |
| STAT_RKK_WERT | - | - | unsigned char | - | - | - | - | - | Relais Klimakompressor vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Rkk |
| STAT_MSA_WERT | - | - | unsigned char | - | - | - | - | - | Start-Stop-Automatik. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Msa |
| STAT_AOEL_WERT | - | - | unsigned char | - | - | - | - | - | Oelabscheiderheizung vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Aoel |
| STAT_EMF_WERT | - | - | unsigned char | - | - | - | - | - | Elektromechanische Feststellbremse vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Emf |
| STAT_SAT_WERT | - | - | unsigned char | - | - | - | - | - | Sportautomat. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Sat |
| STAT_ELUE_850_WERT | - | - | unsigned char | - | - | - | - | - | E-Luefter 850W vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Elue850 |
| STAT_IBS_WERT | - | - | unsigned char | - | - | - | - | - | Vorhalt (bisher: intelligenter Batteriesensor an BSD vorhanden) 0=nicht vorhanden / 1=vorhanden | - |
| STAT_ELUE_1000_WERT | - | - | unsigned char | - | - | - | - | - | E-Luefter 1000W vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Elue1000 |
| STAT_KLIMA_WERT | - | - | unsigned char | - | - | - | - | - | Klimaanlage verbaut. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_kovar |
| STAT_BN2000_WERT | - | - | unsigned char | - | - | - | - | - | Bordnetz 2000. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Bn2000 |
| STAT_TEMP_CAN_WERT | - | - | unsigned char | - | - | - | - | - | Tempomat ueber CAN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_fgrverba |
| STAT_KOMBI_WERT | - | - | unsigned char | - | - | - | - | - | Kombi ueber CAN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_tumcanei |
| STAT_LDM_WERT | - | - | unsigned char | - | - | - | - | - | Laengsdynamik-Management. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_ldm |
| STAT_LMM_WERT | - | - | unsigned char | - | - | - | - | - | Luftmassenmesser. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Lmm |
| STAT_PST_AFS_WERT | - | - | unsigned char | - | - | - | - | - | Powersteering: AFS1-Botschaft Variante. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Pst_Afs |
| STAT_PST_STE_WERT | - | - | unsigned char | - | - | - | - | - | Powersteering: STE1-Botschaft Variante. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Pst_Ste |
| STAT_FSTCAN_WERT | - | - | unsigned char | - | - | - | - | - | Fuellstandsinformation ueber CAN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_fstcanei |
| STAT_ICM_WERT | - | - | unsigned char | - | - | - | - | - | Bedingung ICM verbaut. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Icm |
| STAT_IBS_BSD_WERT | - | - | unsigned char | - | - | - | - | - | Batteriesensor am BSD erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_dev0det |
| STAT_ZWP_BSD_WERT | - | - | unsigned char | - | - | - | - | - | El. Zusatzwasserpumpe fuer Elektronik am BSD erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_dev2det |
| STAT_EWAP_BSD_WERT | - | - | unsigned char | - | - | - | - | - | El. Wasserpumpe am BSD erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_dev3det |
| STAT_OZS_BSD_WERT | - | - | unsigned char | - | - | - | - | - | Oelzustandssensor am BSD erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_dev4det |
| STAT_GEN_2_BSD_WERT | - | - | unsigned char | - | - | - | - | - | Generator 2 am BSD erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_dev5det |
| STAT_GEN_1_BSD_WERT | - | - | unsigned char | - | - | - | - | - | Generator 1 am BSD erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_dev6det |
| STAT_AFS_BN2020_WERT | - | - | unsigned char | - | - | - | - | - | Elektrische Lenkung L6 erkannt. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Rf_Afs_Bn2020 |
| STAT_IBS_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Batteriesensor an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Ibs_Lin |
| STAT_AKKS_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Aktive Kuehlklappensteuerung an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Akks_Lin |
| STAT_BCU_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Broadcastunit an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Bcu_Lin |
| STAT_SGR_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Startergenerator an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Sgr_Lin |
| STAT_OELSENS_WERT | - | - | unsigned char | - | - | - | - | - | Variante Oelsensor. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Oelsens |
| STAT_WAP_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Wasserpumpe an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Wap_Lin |
| STAT_GEN_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Generator an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Gen_Lin |
| STAT_ZWAP_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Zusatzwasserpumpe an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Zwap_Lin |
| STAT_PTSENS_TANK_LIN_WERT | - | - | unsigned char | - | - | - | - | - | pT-Sensor Tank an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Tank_Lin |
| STAT_RISSENS_LIN_WERT | - | - | unsigned char | - | - | - | - | - | RIS-Sensor LIN (EAC-Sensor) an LIN. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Rissens_Lin |
| STAT_NDRREG_WERT | - | - | unsigned char | - | - | - | - | - | NDR Regelung aktiv, Sensor verbaut. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_ndrreg |
| STAT_AKS_WERT | - | - | unsigned char | - | - | - | - | - | Abgasklappensteller AKS. 0=noch kein Urlernen stattgefunden, 1=keine Abgasklappe vorhanden, 2=pneumatische Abgasklappe vorhanden, 4=elektrische Abgasklappe vorhanden. | A2L-NAME=BasSvrAppl_Rv_Aks |
| STAT_DMTL_WERT | - | - | unsigned char | - | - | - | - | - | DMTL vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Dmtl |
| STAT_NVLD_WERT | - | - | unsigned char | - | - | - | - | - | NVLD vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Nvld |
| STAT_DS_TEV_WERT | - | - | unsigned char | - | - | - | - | - | Drucksensor TEV vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_PsTEV |
| STAT_TEV2_WERT | - | - | unsigned char | - | - | - | - | - | Zweite Einleitstelle vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_CpvSpl |
| STAT_RACE_EWP_WERT | - | - | unsigned char | - | - | - | - | - | Racetrack EWP an LIN vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_Ewp7 |
| STAT_EWG_WERT | - | - | unsigned char | - | - | - | - | - | Elektrisches Wastegate vorhanden. 0=nicht vorhanden / 1=vorhanden | A2L-NAME=B_ewg |
| STAT_EWAPU_LIN_WERT | - | - | unsigned char | - | - | - | - | - | Lernfunktion EWAPU 0=nicht vorhanden / 1=vorhanden | A2L-NAME=BasSvrAppl_Rv_EWAPU_Lin |

### RES_0X5FFD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOUNDTUNING_DEAK | 0-n | - | unsigned char | - | T_1BYTE_SOUNDTUNING_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP | - | - | - | Codierung Sound-Tuning Off 0 = Soundtuning aktiv 1 = Soundtuning deaktiviert | A2L-NAME=BasSvrAppl_stSTOff |

### RES_0XF022

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_DFTE | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS DFTE | A2L-NAME=stptes |

### RES_0XF025

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF025_0 | - | - | - | Status Byte ausgeblendete Ventile | - |
| STAT_FS_DFEV_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Status ausgeblendete Ventile | A2L-NAME=B_faevz BitMapping[0=0,1=5] |

### RES_0XF026

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAGNOSE | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus Diagnosefunktion LL-Erhoehung | A2L-NAME=llsstat |

### RES_0XF027

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_VVTL | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS VVTL | A2L-NAME=vvtchksf1 |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF027_0 | - | - | - | FUNKTIONSSTATUS_ERWEITERT_VVTL | A2L-NAME=vvtchksf2 |
| STAT_ROTW_VVT_WERT | - | - | + | ° | high | unsigned int | - | - | - | - | - | VVT Rotorwinkel | A2L-NAME=vvtrotwn_w |
| STAT_EXW_VVT_WERT | - | - | + | ° | high | int | - | - | 0,1 | - | - | Rel. Exenterwinkel | A2L-NAME=exwnkr_w |

### RES_0XF02C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAGNOSE_1 | - | - | + | 0-n | - | unsigned char | - | T_ST_TESTPOELSYS_DOP | - | - | - | Stati fuer Diagnosefunktion Oeldruckregelung | A2L-NAME=sttestpoelsys |
| STAT_DIAGNOSE_2 | - | - | + | 0-n | - | unsigned char | - | T_ST_TESTPOELSYS2_DOP | - | - | - | Erweiterte Stati fuer Diagnosefunktion Oeldruckregelung | A2L-NAME=sttestpoelsys2 |
| STAT_TOEL_WERT | - | - | + | °C | high | unsigned int | - | - | - | - | -60,0 | Ausgabewert Motoroeltemperatur fuer LoCAN (A2L-Name: Toel) | A2L-NAME=toel |
| STAT_P_OEL_SOLL_WERT | - | - | + | kPa | high | unsigned int | - | - | 0,1 | - | - | Sollwert Oeldruck | A2L-NAME=poels_w |
| STAT_P_OEL_IST_WERT | - | - | + | hPa | high | int | - | - | - | - | - | Istwert Oeldruck | A2L-NAME=poel_w |
| STAT_NKW_SOLL_WERT | - | - | + | 1/min | high | int | - | - | - | - | - | Sollwertanforderung Drehzahl aus Funktion Oeldruckregelung | A2L-NAME=nsolpoel_w |
| STAT_NKW_WERT | - | - | + | 1/min | high | int | - | - | 0,5 | - | - | Istwert Drehzahl Kurbelwelle | A2L-NAME=Epm_nEng |

### RES_0XF034

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ZGH | - | - | + | 0-n | - | unsigned char | - | T_CILCN_STTSTR_DOP | - | - | - | Statusinformation zur Freigabe der Funktion im Werkstatt-Testerbetrieb (A2L-Name: CILCN_stTstr) | A2L-NAME=CILCN_stTstr |
| STAT_CILCN_STDIAGTSTR | - | - | + | 0-n | - | unsigned char | - | T_CILCN_STDIAGTSTR_TEXT_DOP | - | - | - | Testerschnittstelle (A2L-Name: CILCN_stDiagTstr) | A2L-NAME=CILCN_stDiagTstr |
| STAT_CILCN_CTLRNCYCLTSTR_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Anzahl der Adaptionen im Testerbetrieb (A2L-Name: CILCN_ctLrnCyclTstr) | A2L-NAME=CILCN_ctLrnCyclTstr |

### RES_0XF03A

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ZWDIAG | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS ZWDIAG | - |
| STAT_LV_DIAG_CST_ACT | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Condition for cold start diagnosis active | A2L-NAME=B_endcsst |
| STAT_LV_INH_DIAG_EFF_IGA_CST | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Flag for inhibitation of the Ignition angle efficiency Diagnosis | A2L-NAME=B_endcsst BitMapping[0=1,1=0] |
| STAT_STATE_CH | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | state of catalyst heating (A2L-Name: state_ch) | A2L-NAME=B_khakt |
| STAT_T_AST_WERT | - | - | + | s | high | unsigned int | - | - | 0,1 | - | - | Time after start (A2L-Name: t_ast) | A2L-NAME=tnse_w |
| STAT_TCO_ST_WERT | - | - | + | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | coolant temperature at start (A2L-Name: tco_st) | A2L-NAME=tmst |
| STAT_LV_CDN_DIAG_EFF_IGA_CST_IS | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Diagnosis conditions fulfilled Ignition angle efficiency at coldstart - idle speed | A2L-NAME=B_enetkhll |
| STAT_LV_CDN_DIAG_EFF_IGA_CST_PL | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Diagnosis conditions fulfilled Ignition angle efficiency at coldstart - part load | A2L-NAME=B_enetkhtl |

### RES_0XF03E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_KGD | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | BMW Funktionsstatus St_dps_svc_fs | A2L-NAME=SwSABMW_stDgnsCrkcsLeak |
| STAT_SOLL_STATI_DPS_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Status-Vorgabe fuer DiffenenzdruckFunktionsart sollvorgabe | A2L-NAME=SwSABMW_modAir |
| STAT_VORG_SOLL_DRUCK_DPS_WERT | - | - | + | hPa | high | int | - | - | 4096 | 32767 | - | Vorgabe-Saugrohr-Differenzdruck | A2L-NAME=SwSABMW_pSuctnPip |
| STAT_SOLL_DRUCK_DPS_WERT | - | - | + | hPa | high | int | - | - | 0,0390625 | - | - | Sollwert Saugrohr-Differenzdruck | A2L-NAME=dpssol_w |
| STAT_IST_DRUCK_DPS_WERT | - | - | + | hPa | high | int | - | - | 0,0390625 | - | - | Istwert Saugrohr-Differenzdruck | A2L-NAME=dps_w |
| STAT_IST_BA_LUFT_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Luftbetriebsart | A2L-NAME=opmodi |
| STAT_LUFTM_HFM_WERT | - | - | + | kg/h | high | unsigned int | - | - | 0,1 | - | - | HFM Massenstrom | A2L-NAME=mshfm_w |
| STAT_DK_WINKEL_WERT | - | - | + | % DK | high | int | - | - | 1600 | 65536 | - | Drosselklappenwinkel | A2L-NAME=wdkba_w |
| STAT_VVT_EXENT_WINKEL_WERT | - | - | + | ° | high | unsigned int | - | - | - | 10 | - | Istwert Exzenterwinkel VVT | A2L-NAME=exwnki_w |
| STAT_LUFTM_TNK_WERT | - | - | + | kg/h | high | unsigned int | - | - | 25,6 | 65536 | - | Tankenentlüftungsstrom Luftmasse | A2L-NAME=mste_w |
| STAT_LAMBDAREGLER_WERT | - | - | + | - | high | unsigned int | - | - | 2 | 65536 | - | Gemischregler Bank 1 | A2L-NAME=fr_w |
| STAT_LAMBDAREGLER_2_WERT | - | - | + | - | high | unsigned int | - | - | 2 | 65536 | - | Gemischregler Bank 2 | A2L-NAME=fr2_w |
| STAT_LAMBDAREGLER_ADAP_WERT | - | - | + | - | high | unsigned int | - | - | 2 | 65536 | - | Gemischadaption Bank1 | A2L-NAME=fra_w |
| STAT_LAMBDAREGLER_ADAP_2_WERT | - | - | + | - | high | unsigned int | - | - | 2 | 65536 | - | Gemischadaption Bank2 | A2L-NAME=fra2_w |
| STAT_SOLL_LAMDA_WERT | - | - | + | - | high | unsigned int | - | - | 16 | 65536 | - | Sollwert Abgas-Lambda Bank1 | A2L-NAME=lamsbg_w |
| STAT_SOLL_LAMDA_2_WERT | - | - | + | - | high | unsigned int | - | - | 16 | 65536 | - | Sollwert Abgas-Lambda Bank2 | A2L-NAME=lamsbg2_w |
| STAT_IST_LAMDA_WERT | - | - | + | - | high | unsigned int | - | - | 16 | 65536 | - | Istwert Abgas-Lambda Bank1 | A2L-NAME=lamsoni_w |
| STAT_IST_LAMDA_2_WERT | - | - | + | - | high | unsigned int | - | - | 16 | 65536 | - | Istwert Abgas-Lambda Bank2 | A2L-NAME=lamsoni2_w |
| STAT_EISYEV_FAK_WERT | - | - | + | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Massenstrom Reglerausgang Adaption Faktor EV-Modell | A2L-NAME=SwSABMW_fakAdjIntkVlvMdl |
| STAT_EISYEV_OFF_WERT | - | - | + | kg/h | high | int | - | - | 0,03125 | - | - | Massenstrom Reglerausgang Adaption Offset EV-Modell | A2L-NAME=SwSABMW_offsAdjIntkVlvMdl |
| STAT_HUBAD_OFF_WERT | - | - | + | - | high | int | - | - | 0,001 | - | - | Integrierter Offset Hubadaption | A2L-NAME=hubadmrofs_w |
| STAT_EISYDK_FAK_WERT | - | - | + | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Saugrohdruck Adaption Faktor | A2L-NAME=SwSABMW_fakAdjThrMdl |
| STAT_EISYDK_OFF_WERT | - | - | + | kg/h | high | int | - | - | 0,03125 | - | - | Saugrohdruck Adaption Offset | A2L-NAME=SwSABMW_offsAdjThrMdl |
| STAT_DELTA_LAMBDAR_WERT | - | - | + | % | high | int | - | - | 100 | 32768 | - | Lambda-Regler Differenz zwischen Zustand 2 minus Zustand 1 in Werkstattest Saugrohrdifferenzdruckvorgabe | A2L-NAME=SwSABMW_prcLsuGovDiff |
| STAT_DELTA_SAUGROHDRUCK_WERT | - | - | + | - | high | int | - | - | 32 | 65536 | - | Mshfm Differenz zwischen Zustand 2 minus Zustand 1 in Werkstattest Saugrohrdifferenzdruckvorgabe | A2L-NAME=SwSABMW_facMshfmDiff |

### RES_0XF03F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_CVO_DIAG_DEAK | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus der Abschaltung von CVO Diagnosen | A2L-NAME=BasSvrAppl_stDeactvnCvoDiag |
| STAT_ZAEHLER_JBANF_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Zähler wie oft der Job angefordert worden ist. muss im Flashresistenten Bereich liegen. Bei Überlauf auf max Wert zu begrenzen. Label muss noch von Bosch erstellt werden. | A2L-NAME=InjVvG_DeactvnCvoDiagCtr |

### RES_0XF042

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_VANOSSPUELEN | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS VANOSSPUELEN | A2L-NAME=statnwstcl |
| STAT_NMOT_W_WERT | - | - | + | 1/min | high | unsigned int | - | - | 0,25 | - | - | Motordrehzahl soll zws. der unteren Drehzahlgrenze (ca. 100 rpm unter LL-Solldrehzahl. Default= 1000 rpm) und der oberen Drehzahlgrenze (ca. 100 rpm ueber LL-Solldrehzahl. Default = 1200 rpm) sein. | A2L-NAME=nmot_w |
| STAT_V_WERT | - | - | + | km/h | high | unsigned int | - | - | 0,0078125 | - | - | Fahrzeuggeschwindigkeit soll zws. 0 und 100 Km/h liegen. Default = 0 | A2L-NAME=vfzg_w |
| STAT_ST_LL_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Status Leerlauf (A2L-Name: St_ll) | A2L-NAME=B_ll |
| STAT_CTR_CAM_OFS_EXT_ADJ_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Zaehler Spuelvorgänge waerend Testereingriff (A2L-Name: anwstclzyk) | A2L-NAME=anwstclzyk |

### RES_0XF043

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_MONTAGEMODUS | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS MONTAGEMODUS | - |
| STAT_ST_MONTAGE_MODUS | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_ST_MONTAGE_MODUS_DOP | - | - | - | Status Montage-Modus aktiv/inaktiv | A2L-NAME=BasSvrAppl_stAsblyMode |

### RES_0XF044

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_KLACKERTEST | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS KLACKERTEST | - |
| STAT_AKTUELL_ANSTUERWERT_ATS_WERT | - | - | + | HEX | - | unsigned char | - | - | - | - | - | aktueller Ansteuerwert aus ATS-Funktion mit Parameter ACTR_TST_MFVLV1_ACT | - |

### RES_0XF045

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ELEKWG | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_EWG_SYSTEST_DOP | - | - | - | FUNKTIONSSTATUS elektr. Wastegate | A2L-NAME=SwSABMW_stAddlRespWgeTst |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF045_0 | - | - | - | standardisierte Status-Rueckmeldung vom eWGSystemtest an den Tester (A2L-Name: Stat_ewgsvc_tester) | A2L-NAME=SwSABMW_stAddlRespWgeTst2 |
| STAT_FS_BETRIEBSSTAT | - | - | + | 0-n | - | unsigned char | - | T_STAT_EWG_DOP | - | - | - | Betriebsstatus elektrisches Wastegate (A2L-Name: Stat_ewg) | A2L-NAME=SwSABMW_stOpWge |
| STAT_FS_ANSCHLGADAP_EWG_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Status-Rueckmeldung Anschlagsadaptionen (Bit0-3:UMA,Bit4-7:OMA) vom eWG-Systemtest an den Tester (A2L-Name: Stat_ewgsvc_umaoma) | A2L-NAME=SwSABMW_stAdapRespWgeTst |
| STAT_VRSTL_EWG_SL1SL2_WERT | - | - | + | s | - | unsigned char | - | - | 0,005 | - | - | Testerausgabe Verstellzeit fuer Verstellung vom eWG von Sollposition 1 auf 2 beim eWG-Performancetest (Bestandteil vom eWG-Systemtest) (A2L-Name: T_ewgsvc1) | A2L-NAME=SwSABMW_tiDesPosWgeTst1 |
| STAT_VRSTL_EWG_SL2SL3_WERT | - | - | + | s | - | unsigned char | - | - | 0,005 | - | - | Testerausgabe Verstellzeit fuer Verstellung vom eWG von Sollposition 2 auf 3 beim eWG-Performancetest (Bestandteil vom eWG-Systemtest) (A2L-Name:T_ewgsvc2) | A2L-NAME=SwSABMW_tiDesPosWgeTst2 |
| STAT_POS_EWG_MECHANSCHLG_WGOFF_WERT | - | - | + | mm | high | int | - | - | 0,0009765625 | - | - | Rohwert Position unterer mechanischer Anschlag vom elektrisches Wastegate (WG geschlossen) (A2L-Name: Ewgposr_uma) | A2L-NAME=SwSABMW_rawPosDwnWge |
| STAT_POS_EWG_MECHANSCHLG_WGON_WERT | - | - | + | mm | high | int | - | - | 0,0009765625 | - | - | Rohwert Position oberer mechanischer Anschlag vom elektrisches Wastegate (WG offen) (A2L-Name: Ewgposr_oma) | A2L-NAME=SwSABMW_rawPosUpWge |
| STAT_MIN_EWG_UNT_MECHANSCHLG_WERT | - | - | + | - | high | int | - | - | 0,0009765625 | - | - | Min-Grenze unterer mechanischer Anschlag. (A2L-NAME: Ewgposad_tester[0]) | A2L-NAME=SwSABMW_posWgeMaxMin Array [0] |
| STAT_NORM_POS_EWG_UNT_MECHANSCHLG_WERT | - | - | + | - | high | int | - | - | 0,0009765625 | - | - | Norm-Position unterer mechanischer Anschlag. (A2L-NAME: Ewgposad_tester[1]) | A2L-NAME=SwSABMW_posWgeMaxMin Array [1] |
| STAT_MAX_POS_EWG_UNT_MECHANSCHLG_WERT | - | - | + | - | high | int | - | - | 0,0009765625 | - | - | Max-Position unterer mechanischer Anschlag. (A2L-NAME: Ewgposad_tester[2]) | A2L-NAME=SwSABMW_posWgeMaxMin Array [2] |
| STAT_MIN_EWG_OBER_MECHANSCHLG_WERT | - | - | + | - | high | int | - | - | 0,0009765625 | - | - | Min-Grenze oberer mechanischer Anschlag. (A2L-NAME: Ewgposad_tester[3]) | A2L-NAME=SwSABMW_posWgeMaxMin Array [3] |
| STAT_NORM_POS_EWG_OBER_MECHANSCHLG_WERT | - | - | + | - | high | int | - | - | 0,0009765625 | - | - | Norm-Position oberer mechanischer Anschlag (A2L-NAME: Ewgposad_tester[4]) | A2L-NAME=SwSABMW_posWgeMaxMin Array [4] |
| STAT_MAX_POS_EWG_OBER_MECHANSCHLG_WERT | - | - | + | - | high | int | - | - | 0,0009765625 | - | - | Max-Position oberer mechanischer Anschlag. (A2L-NAME: Ewgposad_tester[5]) | A2L-NAME=SwSABMW_posWgeMaxMin Array [5] |
| STAT_VRSTL_MAX_EWG_SL1SL2_WERT | - | - | + | s | - | unsigned char | - | - | 0,005 | - | - | Maximale Verstellzeit für Verstellung von Sollposition 1 auf 2 im ewg-Systemtest. (A2L-NAME: Tewgsvcmax_tester[0]) | A2L-NAME=SwSABMW_tiMaxTiWgeTst Array [0] |
| STAT_VRSTL_MAX_EWG_SL2SL3_WERT | - | - | + | s | - | unsigned char | - | - | 0,005 | - | - | Maximale Verstellzeit für Verstellung von Sollposition 2 auf 3 im ewg-Systemtest (A2L-NAME: Tewgsvcmax_tester[1]) | A2L-NAME=SwSABMW_tiMaxTiWgeTst Array [1] |

### RES_0XF046

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_DKVSFS | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) | A2L-NAME=FlMA_stShoTestMixAdpn |
| STAT_F_LRADAP1_WERT | - | - | + | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus Lambdaregelungsadaption fuer Bank 1 (A2L-Name: F_lradap1) | A2L-NAME=frann_w |
| STAT_F_LRADAP2_WERT | - | - | + | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | Faktor aus Lambdaregelungsadaption für Bank 2 (A2L-Name: F_lradap2) | - |
| STAT_FRM_W_WERT | - | - | + | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | schneller Mittelwert des Lambdaregelfaktors (Word) (A2L-Name: frm_w) | A2L-NAME=frm_w |
| STAT_FRM2_W_WERT | - | - | + | - | high | unsigned int | - | - | 3,0517578125e-005 | - | - | schneller Mittelwert des Lambdaregelfaktors Bank 2(Word) (A2L-Name: frm2_w) | - |
| STAT_B_EFRAMAX | - | - | + | 0-n | - | unsigned char | - | T_B_EFRAMAX_DOP | - | - | - | Bedingung obere Diagnoseschwellen multiplikative Korrektur aktuell überschritten (A2L-Name: B_eframax) | A2L-NAME=B_eframax |
| STAT_B_EFRAMIN | - | - | + | 0-n | - | unsigned char | - | T_B_EFRAMAX_DOP | - | - | - | Bedingung untere Diagnoseschwellen multiplikative Korrektur aktuell überschritten (A2L-Name: B_eframin) | A2L-NAME=B_eframin |
| STAT_NMOT_WERT | - | - | + | 1/min | - | unsigned char | - | - | 40 | - | - | Motordrehzahl (A2L-Name: nmot) | A2L-NAME=nmot |
| STAT_RL_WERT | - | - | + | % | - | unsigned char | - | - | 0,75 | - | - | relative Luftfuellung (A2L-Name: rl) | A2L-NAME=rl |
| STAT_B_TEAKT | - | - | + | 0-n | - | unsigned char | - | T_B_TEAKT_DOP | - | - | - | Bedingung Tankentlueftung aktiv (normaler Betrieb oder Notlauf) (A2L-Name: B_teakt) | A2L-NAME=B_teakt |
| STAT_B_FRASTAB | - | - | + | 0-n | - | unsigned char | - | T_B_FRASTAB_DOP | - | - | - | Bedingung: FRA-Integrator (lokal) stabil (A2L-Name: B_frastab) | A2L-NAME=B_frastab |

### RES_0XF047

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_NVLDII | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS NVLDII | A2L-NAME=BasSvrAppl_stSysChkNatVacLeakDetc |
| STAT_LV_DIAG_SWI_PSN_ST | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Schalterstatus bei Start ( 1 = closed ) (A2L-Name: B_swpnvld) | A2L-NAME=B_swpnvld |
| STAT_LV_ERR_SWI_EL_DIAG_SCG_INT_NVLD | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Fehler Kurzschluss nach Masse (1 = finished) (A2L-Name:B_nvleswmn) | A2L-NAME=B_nvleswmn |
| STAT_LV_ERR_SWI_EL_DIAG_SCP_INT_NVLD | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Kurzschluss nach Plus(1 = finished) (A2L-Name:B_nvleswmx) | A2L-NAME=B_nvleswmx |
| STAT_LV_ERR_SWI_EL_DIAG_OC_INT_NVLD | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Fehler Lastabfall (1 = finished) (A2L-Name:B_nvleswsg) | A2L-NAME=B_nvleswsg |
| STAT_LV_DIAG_SMT_SWI_AV_NVLD | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Aktuelle Schalterposition (A2L-Name: B_nvlddiagswi) | A2L-NAME=B_nvlddiagswi |
| STAT_TAM_SMT_NVLD_WERT | - | - | + | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Umgebungstemperatur von NVLD (A2L-Name: tam_smt_nvld) | A2L-NAME=tEnvNVLD |

### RES_0XF04B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_TEV2 | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS TEV2 | A2L-NAME=stptessp |
| STAT_BED_P_VOR_VERDICHTER | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | Bedingung Druck vor Verdichter. Druckverhältnis Saugstrahlpumpe im erlaubten Bereich 0/1=false/true | A2L-NAME=B_dtepsspu |

### RES_0XF04C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_SGRRT | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS SGRRT | A2L-NAME=BasSvrAppl_stSGRRT |
| STAT_ST_ISGUSM_TESTERSGR_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Freigaberückmeldung an SGR-SGBD-Job (A2L-Name: St_isgusm_testersgr): 0 = Testeransteuerung inaktiv / 1 = Funktion wurde neu gestartet / 2 = Funktion wartet auf SGR-Start / 3 = SGR-Start beendet / 4 = SGR-Start abgebrochen (z.B. Motordefekt), aber SGR prinzipiell i.O. / 5 = Kein SGR verbaut, Job nicht ausfuehrbar / 6 = Kommunikationsfehler, Job nicht ausfuehrbar / 7 = SGR-Fehler, Job nicht ausfuehrbar / 8 = Fehler, Job nicht ausfuehrbar / 9 = Keine Soll-Betriebsart ausgewaehlt oder gewaehlter Modus technisch nicht moeglich / 10 = SGR-Start-Anforderung durch z.B. Klemmenwechsel unterbrochen moeglich | A2L-NAME=SwSABMW_stRlsRespTstrSgr |
| STAT_ISGUSM_SGRSTARTZ_WERT | - | - | + | - | high | unsigned long | - | - | - | - | - | Startzähler SGR (A2L-Name: Isgusm_sgrstartz) | A2L-NAME=SwSABMW_strtCntSgr |

### RES_0XF04D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZ_KOMFORTSTART_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Anzahl der durchgeführten Comfort MSA-Starts | A2L-NAME=Anz_stvar_comfstart |
| STAT_ANZ_RESPONSESTART_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Anzahl der durchgeführten Response MSA-Starts | A2L-NAME=Anz_stvar_respstart |
| STAT_ANZ_NORMALSTART_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Anzahl der durchgeführten Normal MSA-Starts | A2L-NAME=Anz_stvar_normalstart |
| STAT_ANZ_SICHERSTART_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Anzahl der durchgeführten Sicher MSA-Starts | A2L-NAME=Anz_stvar_sicherstart |
| STAT_ANZ_SCHLUESSELSTART_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Anzahl der durchgeführten Key-Starts | A2L-NAME=Anz_stvar_keystart |

### RES_0XF04F

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_PTABGLEICH | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus PTABGLEICH | - |
| STAT_FS2_ERWTRT_PTABGLEICH | - | - | + | 0-n | - | unsigned char | - | T_FS2_ERWTRT_PTABGLEICH_DOP | - | - | - | Erweiterter Funktionsstatus fuer Abgleich Drucksensor im Tank mit Umgebungdrucksensor in der DME. | - |
| STAT_TEMP_KRAFTSTOFFTNK_WERT | - | - | + | °C | high | unsigned int | - | - | - | - | -40,0 | Temperaturwert Kraftstofftank. | A2L-NAME=TankEcu_tFlTnk |
| STAT_FUELLSTD_KRAFTSTOFFTNK_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Fuellstand Kraftstofftank. | A2L-NAME=fstt |

### RES_0XF086

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_BETRIEBSARTEN_EM1 | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus Tester-Vorgabe fuer E-Maschine 1 Betriebsart (Status_betriebsart_em1_lesen). | A2L-NAME=SwSABMW_stRetStValEomEM1Rd |
| STAT_BETRIEBSARTEN_EM1 | - | - | + | 0-n | - | unsigned char | - | T_BETRIEBSART_EM_DOP | - | - | - | E-Maschine 1 Betriebsart lesen (A2L-NAME: Betriebsart_em1_lesen). | A2L-NAME=SwSABMW_stRetValEomEM1Rd |

### RES_0XF087

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_BETRIEBSART_EM2 | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus Tester-Vorgabe fuer E-Maschine 2 Betriebsart. (A2L-NAME: Status_betriebsart_em1_lesen) | A2L-NAME=SwSABMW_stRetStValEomEM2Rd |
| STAT_BETRIEBSART_EM2 | - | - | + | 0-n | - | unsigned char | - | T_BETRIEBSART_EM_DOP | - | - | - | E-Maschine 2 (Generator) Betriebsart lesen. (A2L-NAME: Betriebsart_em2_lesen) | A2L-NAME=SwSABMW_stRetValEomEM2Rd |

### RES_0XF0D0

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAGNOSE_1 | - | - | + | 0-n | - | unsigned char | - | T_ST_ATLSVC_DOP | - | - | - | Status waehrend der Diagnose der ATL (A2L-Name: St_atlsvc) | A2L-NAME=statlsvc |
| STAT_DIAGNOSE_2 | - | - | + | 0-n | - | unsigned char | - | T_ST_ATLSVC_PVDK_DOP | - | - | - | Ergebis der Diagnosefunktion der ATL (A2L-Name: St_atlsvc_pvdk) | A2L-NAME=statlsvcpvdk |
| STAT_AMP_WERT | - | - | + | hPa | high | unsigned int | - | - | 0,0390625 | - | - | Ambient pressure (measured or adapted) (A2L-Name: amp) | A2L-NAME=pur_w |
| STAT_TAM_WERT | - | - | + | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Ambient temperature (A2L-Name: tam) | A2L-NAME=tumg |
| STAT_TIA_WERT | - | - | + | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Intake air temperature (A2L-Name: tia) | A2L-NAME=tans |
| STAT_ATLSVC_DPVDK1_WERT | - | - | + | - | high | int | - | - | 0,125 | - | - | Differenzdruck vor DK beider Turbolader (A2L-Name: Atlsvc_dpvdk1) | A2L-NAME=atlsvcdpvdk1_w |
| STAT_ATLSVC_DPVDK2_WERT | - | - | + | - | high | int | - | - | 0,125 | - | - | Differenzdruck vor DK mit Turbolader 1 (A2L-Name: Atlsvc_dpvdk2) | A2L-NAME=atlsvcdpvdk2_w |
| STAT_ATLSVC_DPVDK3_WERT | - | - | + | - | high | int | - | - | 0,125 | - | - | Differenzdruck vor DK mit Turbolader 2 (A2L-Name: Atlsvc_dpvdk3) | A2L-NAME=atlsvcdpvdk3_w |
| STAT_PWG_IST_WERT | - | - | + | - | high | unsigned int | - | - | 0,00152590218966964 | - | - | Pedalwert Fahrerwunsch in % (A2L-Name: Pwg_ist) | A2L-NAME=wped_w |
| STAT_TN_ABSTELL_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Abstellzeit (A2L-Name: Tn_abstell) | A2L-NAME=tabst_w |
| STAT_B_KUPP | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Bedingung Kupplungsbetätigung über Schalter oder Modell (A2L-Name: St_bgkuppl.B_kupp) | A2L-NAME=B_kuppl |
| STAT_GANGI_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Aktueller Gang intern (A2L-Name: Gangi) | A2L-NAME=gangi |
| STAT_V_WERT | - | - | + | km/h | high | unsigned int | - | - | 0,0078125 | - | - | Fahrzeuggeschwindigkeit (A2L-Name: V) | A2L-NAME=vfzg_w |
| STAT_TMOT_WERT | - | - | + | °C | - | unsigned char | - | - | 0,75 | - | -48,0 | Kuehlwassertemperatur (A2L-Name: Tmot) | A2L-NAME=tmot |
| STAT_PU_WERT | - | - | + | hPa | high | unsigned int | - | - | 0,0390625 | - | - | Umgebungsdruck (A2L-Name: Pu) | A2L-NAME=pu_w |
| STAT_LV_ERR_PUT_EL | - | - | + | 0/1 | - | unsigned char | - | - | - | - | - | electrical PUT sensor error detected (DFC_PVDEmax and DFC_PVDEmin) | A2L-NAME=DFC_st.DFC_PVDEmax \|\| DFC_st.DFC_PVDEmin |

### RES_0XF0D5

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CTR_ECRAS_UP_SP_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Sollposition in Schritten fuer Luftklappe (A2L-NAME: RadSht_StpEng) | A2L-NAME=RadSht_StpEng |
| STAT_CTR_ECRAS_UP_WERT | - | - | + | - | high | unsigned int | - | - | - | - | - | Istposition in Schritten fuer Luftklappe (A2L-NAME: ShtrECU_StpEngPos). | A2L-NAME=ShtrEcu_StpEngPos |
| STAT_ANG_ECRAS_UP_SP_WERT | - | - | + | - | - | unsigned char | - | - | 0,501960784313725 | - | - | Sollposition in Grad obere Luftklappe (A2L-NAME: RadSht_phiPos). | A2L-NAME=RadSht_phiPosDes |
| STAT_ANG_ECRAS_UP_WERT | - | - | + | - | - | unsigned char | - | - | 0,501960784313725 | - | - | Istposition in Grad obere Luftklappe (A2L-NAME: RadSht_phiPos). | A2L-NAME=RadSht_phiPos |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0D5_0 | - | - | - | Diagnosestatus allgemein | A2L-NAME=RadSht_stDiagGen |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0D5_1 | - | - | - | Diagnosestatus obere Luftklappe | A2L-NAME=RadSht_stDiagAKKS |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0D5_2 | - | - | - | Status obere Luftklappe | A2L-NAME=RadSht_stDiagAbvAirVlv |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0D5_3 | - | - | - | Status untere Luftklappe | A2L-NAME=RadSht_stDiagBntAirVlv |
| STAT_STATE_ECRAS_UP_VAR_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Varianteninfo vom AKKS-LIN Steller (highbyte= Hardwareversion 0-F lowbyte= Softwareversion 0-F) (a2l: shtrecu_stinit) | A2L-NAME=ShtrEcu_stVrs |

### RES_0XF0D9

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_DFL0 | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS DFLO | A2L-NAME=B_falr BitMapping[0=0,1=5] |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0D9_0 | - | - | - | CARB FREEZE FRAME Byte, Bank 1, für Lambdaregelung. | A2L-NAME=flglrs |

### RES_0XF0E0

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_EISYUGD | - | - | + | 0-n | - | unsigned char | - | T_B_MSRHUBAD_DOP | - | - | - | FUNKTIONSSTATUS Eisy Adaption Ungedrosselt (EISYUGD) | A2L-NAME=B_msrhubad |
| STAT_MRNN_TEST_VVT_WERT | - | - | + | - | high | int | - | - | 3,0517578125e-005 | - | - | Massenstromregler-Adaptionswert NN im VVT Betrieb ueber Test gelesen | A2L-NAME=nntstvvt_w |

### RES_0XF0E1

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_EISYGD | - | - | + | 0-n | - | unsigned char | - | T_B_MSRDKAD_DOP | - | - | - | Massestromregler auf DK erstmalig erfolgt | A2L-NAME=B_msrdkad |
| STAT_MRNN_TEST_DK_WERT | - | - | + | - | high | int | - | - | 3,0517578125e-005 | - | - | Massenstromregler-Adaptionswert NN im GD - Betrieb ueber Test gelesen | A2L-NAME=nntstdk_w |

### RES_0XF0E3

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KRNN_TEST_WERT | - | - | + | ° | high | int | - | - | 0,1 | - | - | Zuendwinkelaenderung aus Adaption Klopfregelung fuer Testerabfrage | A2L-NAME=SwSABMW_TstrKnkCtlAdap |

### RES_0XF0E4

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLNN_TEST_WERT | - | - | + | % | high | int | - | - | 0,00152587890625 | - | - | Lambdaadaptionswert fuer Testerabfrage | A2L-NAME=klannst_w |

### RES_0XF0E7

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_DDLSHK | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Bedingung dynamikmessung Lambdasonde Hinterkat freigegeben | A2L-NAME=B_sctrlsh |
| STAT_FS_DDLSHK2 | - | - | + | 0-n | - | unsigned char | - | T_B_STANDARD_1BYTE_LESEN_0_1 | - | - | - | Bedingung dynamikmessung Lambdasonde Hinterkat 2 freigegeben | A2L-NAME=B_aldylsh2 |
| STAT_TAHSO_WERT | - | - | + | °C | high | unsigned int | - | - | 0,0234375 | - | -273,15 | Abgastemperatur an Sonde hinter Kat | A2L-NAME=tahso_w |
| STAT_TAHSO2_WERT | - | - | + | °C | high | unsigned int | - | - | 0,0234375 | - | -273,15 | Abgastemperatur an Sonde hinter Kat 2 | A2L-NAME=tahso2_w |
| STAT_TRLRS2_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Transient Zeit Sonde hinter KAT LR | A2L-NAME=trlrS2_w |
| STAT_TRRLS2_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Transient Zeit Sonde hinter KAT RL | A2L-NAME=trrlS2_w |
| STAT_TRLRS22_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Response Zeit Sonde hinter KAT LR, Bank2 | A2L-NAME=trlrS22_w |
| STAT_TRRLS22_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Response Zeit Sonde hinter KAT RL, Bank2 | A2L-NAME=trrlS22_w |
| STAT_DTLRFS2_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Response Zeit Sonde hinter KAT LR | A2L-NAME=dtlrfS2_w |
| STAT_DTRLFS2_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Response Zeit Sonde hinter KAT RL | A2L-NAME=dtrlfS2_w |
| STAT_DTLRFS22_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Response Zeit Sonde hinter KAT LR Bank2 | A2L-NAME=dtlrfS22_w |
| STAT_DTRLFS22_WERT | - | - | + | s | high | unsigned int | - | - | 0,01 | - | - | Ereignisfilterwert für Response Zeit Sonde hinter KAT RL Bank2 | A2L-NAME=dtrlfS22_w |

### RES_0XF0E9

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_CRAM | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS CRAM | A2L-NAME=B_eepwf BitMapping[0=0,1=8] |

### RES_0XF0EB

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_DKAT | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS DKAT | A2L-NAME=dkatstat |

### RES_0XF0EC

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0EC_0 | - | - | - | Status Oelniveaeu Detailmessung: MSB-Status. Messung laueft falls Bit2 auf TRUE (Nach Abbruch/Beendigung/bevor Messung ist das Bit auf FALSE). (A2L-NAME: SwSABMW_stOilLvlDescr). | A2L-NAME=SwSABMW_stOilLvlDescr |
| - | - | - | + | BIT | - | BITFIELD | - | BF_0xF0EC_1 | - | - | - | Status Oelniveaeu Detailmessung: Abbruchbedingungen/Randbedingungen (LSB-Status). Messung Abgebrochen falls Wert != 0 (Abbruch: B_on_dtlmssgsrv = false). (A2L-NAME: SwSABMW_stOilLvlDescrAbrt). | A2L-NAME=SwSABMW_stOilLvlDescrAbrt |
| STAT_ON_NIVEAUQNT_SRV_WERT | - | - | + | l | - | unsigned char | - | - | 0,01 | - | - | Oelniveau in Liter ueber Minimum fuer den Service. Ein Messwert unter 65 Grad_C ist ein grober Schaetzwert. Gueltige Messwertausgaben sind: 0.00 (MIN), 0.25, 0.50, 0.75, 1.00, 1.25, 1.50 (MAX), 1.75, 2.00, 2.25 Liter. Falls Messwerteausgebe == 2.55 Liter, wurde die Detailmessung im Driving Cycle noch NICHT erfolgreich durchgefuehrt. (A2L-NAME: SwSABMW_lOilLvlOverMin). | A2L-NAME=SwSABMW_lOilLvlOverMin |

### RES_0XF0F2

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_RAM | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | FUNKTIONSSTATUS RAM | - |

### RES_0XF0F6

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMCHECK_PM_MESSEMODE | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus Powermanagement Messemode | A2L-NAME=B_fapmmess BitMapping[0=0,1=5] |

### RES_0XF0FC

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FPC_MONTAGEMODUS | - | - | + | 0-n | - | unsigned char | - | T_FPC_FS_DOP | - | - | - | FPC Montagemodus auslesen. | A2L-NAME=PSPDia_stFPCAsblyRem |

### RES_0XF0FF

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO | INFO2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FPC_IST_PARAMETER_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Istwert FPC Konfiguration. | A2L-NAME=PSPDia_idxFPCPrmRem |
| STAT_FPC_SOLL_PARAMETER_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Sollwert FPC Konfiguration. | A2L-NAME=PSPDia_idxFPCPrmEepRem |
| STAT_FPC_VARIANTE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | FPC Variante. | A2L-NAME=PSPDia_idxFPCVrntRem |

### T_1BYTE_EVENTSTATUS_TRIPRCRD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Datenaufzeichnung gestoppt/initialisiert |
| 1 | Datenaufzeichnung gestartet |
| 2 | Datenaufzeichnung wird gespeichert |
| 3 | Datenaufzeichnung gespeichert |

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

### T_1BYTE_FS_EWG_SYSTEST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Lernen unterer mechanischer Anschlag |
| 3 | Lernen oberer mechanischer Anschlag |
| 4 | Verstellzeitentest |
| 5 | Funktion fehlerfrei beendet |
| 6 | Funktion beendet ohne Ergebnis |
| 7 | Funktion mit Fehler beendet Fehler unterer mechanischer Anschlag Lernen |
| 8 | Funktion mit Fehler beendet Fehler oberer mechanischer Anschlag |
| 9 | Funktion mit Fehler beendet Fehler Timeout Verstellzeitentest |
| 10 | Funktion mit Fehler beendet Fehler Verstellzeiten zu groß |
| 11 | Funktion mit Fehler beendet Fehler allgemein |
| 255 | ungueltiger Wert |

### T_1BYTE_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivierung der Katheizfunktion inaktiv |
| 1 | Deaktivierung der Katheizfunktion aktiv |

### T_1BYTE_MSA_KUP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kupplung nicht oder zu weniger als 10% betaetigt |
| 1 | Kupplung zu mindestens 10% betaetigt |
| 2 | Kupplungssensorsignal unplausibel |
| 3 | Kupplung zu mindestens 90% betaetigt |

### T_1BYTE_SOUNDTUNING_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivierung des Sound-Tuning inaktiv |
| 1 | Deaktivierung des Sound-Tuning aktiv |

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

### T_BETRIEBSART_EM_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Standby |
| 3 | DC-Spannungsregelung |
| 5 | Drehzahlregelung mit Momentenvorsteuerung |
| 6 | IHVBCTL - mit Momentenvorsteuerung |
| 10 | Freilauf |
| 13 | Signal nicht verfuegbar |
| 14 | Fehler |
| 15 | Signal ungueltig |

### T_B_1BYTE_LESEN_0_1

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

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

### T_B_ISGSKT_MSAAKT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | FALSE |
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

### T_B_ONABK_OZDEAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_PHADA_JOB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_PHADE_JOB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_SGRHWL_SIKO_DOP

| WERT | TEXT |
| --- | --- |
| 0 | FALSE |
| 1 | TRUE |

### T_B_STANDARD_1BYTE_LESEN_0_1

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 255 | Undefined |

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
| 1 | Bedingung für mind. 1 Fehler (E_abc) im System erkannt |
| 2 | Bedingung Summenfehler durch DAFIM gesetzt |
| 4 | Bedingung Summenfehler durch DAFIM gesetzt (ungefilterte Adaptionswerte) |
| 6 | Bedingung Summenfehler durch DAFIM gesetzt gefiltert und ungefiltert |
| 16 | Adaption abgeschlossen |
| 18 | Adaption abgeschlossen und Bedingung Summenfehler durch DAFIM gesetzt |
| 20 | Adaption abgeschlossen und Bedingung Summenfehler durch DAFIM ungefiltert gesetzt |
| 32 | Erkennung eines Fehlers während der Diagnose |
| 64 | Lambda-Imbalance Diagnose aktiv |
| 128 | Lambda-Imbalance Diagnose ist freigegeben |
| 192 | Lambda-Imbalance Diagnose ist freigegeben und aktiv |
| 255 | Zustand nicht definiert |

### T_CILCN_STTSTR_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Adaption läuft |
| 1 | Adaption blockiert, Motor außerhalb Drehzahl-/Lastbereich |
| 2 | Adaption blockiert, Motortemperatur außerhalb zul. Bereich |
| 3 | Adaption blockiert, KAT-Temperatur außerhalb zul. Bereich |
| 4 | Adaption blockiert wegen Fehlerspeichereintrag |
| 5 | Adaption blockiert, weil Lambdawert nicht 1, Kraftstoffversorgungssystem nicht i.O., KAT-Heizen aktiv oder Bauteileschutz aktiv |
| 6 | Adaption blockiert, weil Tankentlüftung oder Gemischadaption aktiv |
| 255 | Adaption ist blockiert (sonstige Freigabebedingung nicht erfüllt) |

### T_FPC_FS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 3 | Funktion wartet auf Freigabe |
| 5 | Funktion laeuft |
| 8 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |

### T_FS2_ERWTRT_PTABGLEICH_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Tanktemperatur außerhalb Bereich (TankEcu_tFlTnk) |
| 2 | Fuellstand zu hoch (fstt) |
| 4 | TAV ist geschlossen (Bedingung TAV geoeffnet) |
| 8 | Diagnose TAV meldet Fehler |
| 255 | Status nicht Definiert oder noch nicht gestartet |

### T_HYBRID_ACHSE_VM_EM_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Normaler Fahrbetrieb. |
| 1 | Reiner Verbrennungsmotor (VM)-Betrieb |
| 2 | Reiner elektrischer Betrieb. |
| 3 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 4 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 5 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 6 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 7 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 8 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 9 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 10 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 11 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 12 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 13 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 14 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 15 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 16 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 17 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 18 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 19 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 20 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 21 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 22 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 23 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 24 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 25 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 26 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 27 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 28 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 29 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 30 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 31 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 32 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 33 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 34 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 35 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 36 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 37 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 38 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 39 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 40 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 41 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 42 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 43 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 44 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 45 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 46 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 47 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 48 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 49 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 50 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 51 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 52 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 53 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 54 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 55 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 56 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 57 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 58 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 59 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 60 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 61 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 62 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 63 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 64 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 65 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 66 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 67 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 68 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 69 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 70 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 71 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 72 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 73 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 74 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 75 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 76 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 77 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 78 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 79 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 80 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 81 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 82 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 83 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 84 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 85 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 86 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 87 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 88 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 89 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 90 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 91 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 92 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 93 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 94 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 95 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 96 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 97 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 98 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 99 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 100 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 101 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 102 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 103 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 104 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 105 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 106 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 107 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 108 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 109 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 110 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 111 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 112 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 113 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 114 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 115 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 116 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 117 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 118 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 119 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 120 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 121 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 122 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 123 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 124 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 125 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 126 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 127 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 128 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 129 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 130 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 131 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 132 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 133 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 134 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 135 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 136 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 137 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 138 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 139 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 140 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 141 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 142 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 143 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 144 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 145 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 146 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 147 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 148 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 149 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 150 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 151 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 152 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 153 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 154 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 155 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 156 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 157 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 158 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 159 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 160 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 161 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 162 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 163 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 164 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 165 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 166 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 167 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 168 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 169 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 170 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 171 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 172 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 173 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 174 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 175 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 176 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 177 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 178 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 179 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 180 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 181 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 182 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 183 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 184 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 185 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 186 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 187 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 188 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 189 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 190 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 191 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 192 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 193 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 194 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 195 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 196 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 197 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 198 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 199 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 200 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 201 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 202 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 203 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 204 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 205 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 206 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 207 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 208 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 209 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 210 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 211 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 212 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 213 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 214 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 215 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 216 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 217 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 218 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 219 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 220 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 221 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 222 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 223 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 224 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 225 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 226 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 227 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 228 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 229 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 230 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 231 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 232 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 233 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 234 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 235 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 236 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 237 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 238 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 239 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 240 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 241 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 242 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 243 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 244 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 245 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 246 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 247 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 248 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 249 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 250 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 251 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 252 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 253 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 254 | Ausgabe einer Fehlermeldung an das Diagnosetool |
| 255 | Ausgabe einer Fehlermeldung an das Diagnosetool |

### T_ISGUSM_CHIPHERST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bosch |
| 1 | Infineon |
| 2 | Freescale |
| 3 | ST |
| 4 | Elmos |
| 5 | Sanken |
| 6 | Denso |
| 7 | (Reserve) |
| 255 | nicht Definiert |

### T_ISGUSM_HERST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bosch |
| 1 | Valeo |
| 2 | Denso/Delphi |
| 3 | Hitachi |
| 4 | Denso |
| 5 | Melco |
| 6 | Visteon |
| 255 | nicht Definiert |

### T_ISGUSM_MAKENN_DOP

| WERT | TEXT |
| --- | --- |
| 0 | - |
| 1 | C2.1 / SC1 |
| 2 | C2.4 / SC2 |
| 3 | TG23 / H3.1 / SC3 |
| 4 | SG9 / LIF150 / SC4 |
| 5 | SC5 |
| 6 | M2.5 / SC6 |
| 7 | CL8+ / EL7-150 |
| 8 | SG12 / TG12 /LIF180 / EL7-150 HED |
| 9 | C1.9 / EL7-175 |
| 10 | M2.3 / EL7-175 HED |
| 11 | H3.8 / EL8-180 |
| 12 | E4 / SG11 / EL8-180 HED |
| 13 | M3.0 / EL8-210 |
| 14 | EL8-210 HED |
| 15 | - |
| 16 | TG17 |
| 17 | TG17 (mit Bosch) |
| 18 | - |
| 19 | CL 12+ Prince |
| 20 | E8 / SG14 / FG18D |
| 21 | FG18 |
| 22 | FG18D |
| 23 | - |
| 24 | TG15 |
| 25 | FG23 |
| 26 | CG25 |
| 27 | - |
| 28 | E8+ (mit BSD I) |
| 29 | - |
| 30 | - |
| 31 | E8+ (mit BSD II) |
| 255 | nicht Definiert |

### T_LIN_STISGTYP_TEXTTABLE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | unbekannt |
| 1 | BSD-Generator |
| 2 | VDA-LIN-Generator |
| 3 | Starter-Generator SGR |
| 255 | nicht Definiert |

### T_STATE_ENG_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ES |
| 1 | ST |
| 2 | IS |
| 3 | PL |
| 4 | PU |
| 5 | PUC |

### T_STATE_HAL_INTERN_DOP

| WERT | TEXT |
| --- | --- |
| 0 | HAL_RESET |
| 1 | HAL_INITIALES_LERNEN |
| 2 | HAL_INITIAL_GELERNT |
| 3 | HAL_VERIFIKATION_FEHLGESCHLAGEN (1-mal) |
| 4 | HAL_VERIFIKATION_FEHLGESCHLAGEN (2-mal) |
| 5 | HAL_VERIFIKATION_FEHLGESCHLAGEN (3-mal) |
| 6 | HAL_VERIFIKATION_FEHLGESCHLAGEN (4-mal) |
| 7 | HAL_VERIFIKATION_FEHLERHAFT |
| 8 | HAL_ADAPTION_LERNEN |
| 9 | HAL_VERIFIKATION_OK |

### T_STATE_KSU_INTERN_DOP

| WERT | TEXT |
| --- | --- |
| 0 | HAL_HA_UNPLAUSIBEL |
| 1 | HAL_INT_STATUS_NDIFF |
| 2 | HAL_INT_STATUS_PLAUSFREIGABE_DME |

### T_STAT_EWG_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Start |
| 1 | geregelter Betrieb |
| 2 | Zuhaltebetrieb |
| 3 | unteren Anschlag lernen (WG geschlossen) |
| 4 | oberen Anschlag lernen (WG offen) |
| 5 | Notbetrieb, Abschaltung |
| 6 | Notbetrieb, gesteuert Auffahren |
| 7 | Abschaltung im Nachlauf |
| 8 | Standby wegen nicht gültigem Sensor |
| 255 | Status nicht Definiert |

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

### T_ST_TESTPOELSYS2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | -- |
| 1 | Abbruch durch Tester |
| 2 | Warmlauf (Oeltemperatur zu niedrig) |
| 3 | Abbruch aufgrund zu hoher Oeltemperatur |
| 4 | Abbruch aufgrund fehlender Reglerfreigabe |
| 5 | Abbruch der Diagnosefunktion nach Schritt 1 (Fehlerspeicher auslesen) |
| 6 | Abbruch der Diagnosefunktion nach Schritt 2 (Fehlerspeicher auslesen) |
| 7 | Abbruch der Diagnosefunktion nach Schritt 3 (Fehlerspeicher auslesen) |
| 8 | Testfunktion 1 laeuft (konstante Drehzahl, Solldruck-Spruenge) |
| 9 | Testfunktion 2 laeuft (konstante Drehzahl, Solldruck-Rampen) |
| 10 | Testfunktion 3 laeuft (Drehzahl-Rampen, konstanter Solloeldruck) |

### T_ST_TESTPOELSYS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktionstest laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### T_SW_5F71_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5F76_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5F78_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5F7D_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5F7E_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Verriegelung Kodierbereich |

### T_SW_5F7F_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5F80_DOP

| WERT | TEXT |
| --- | --- |
| 7 | Gemischvertrimmung vorgeben |
| 8 | Gemischvertrimmung programmieren |

### T_SW_5F84_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5F85_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung SAV beenden |
| 7 | MSA2 Deaktivierung SAV vorgeben |

### T_SW_5F8C_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Hubkorrektur Reset |
| 7 | Hubkorrektur vorgeben |
| 8 | Hubkorrektur programmieren |

### T_SW_5F8E_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung beenden |
| 7 | MSA2 Deaktivierung vorgeben |
| 8 | MSA2 Deaktivierung programmieren |

### T_SW_5FDB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung DEAKT beenden |
| 7 | MSA2 Deaktivierung DEAKT vorgeben |

### T_SW_5FDC_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung DFSP beenden |
| 7 | MSA2 Deaktivierung DFSP vorgeben |

### T_SW_5FDD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung EA beenden |
| 7 | MSA2 Deaktivierung EA vorgeben |

### T_SW_5FDF_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung FAV beenden |
| 7 | MSA2 Deaktivierung FAV vorgeben |

### T_SW_5FE5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | MSA2 Deaktivierung EV beenden |
| 7 | MSA2 Deaktivierung EV vorgeben |

### T_SW_5FF0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Leerlauf Abgleich beenden |
| 7 | Leerlauf Abgleich vorgeben |
| 8 | Leerlauf Abgleich programmieren |

### T_SW_5FF2_DOP

| WERT | TEXT |
| --- | --- |
| 4 | Varianten loeschen |

### T_SW_5FFE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | VM-Achse oder EM-Achse vorgeben beenden. |
| 7 | VM-Achse oder EM-Achse vorgeben. |

### T_S_VSMNHB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000000 | 000000 FehlerOrt nicht bedatet | 0 |
| 0x021200 | 0x021200 Energiesparmode aktiv | 0 |
| 0x02FF12 | 0x02FF12 Fehlerspeichereintrag: nur zum Test | 0 |
| 0x100001 | 0x100001 Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | 0x100101 Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | 0x100201 Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100A04 | 0x100A04 Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x101001 | 0x101001 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101002 | 0x101002 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | 0x101201 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | 0x101202 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101401 | 0x101401 Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | 0x101402 Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | 0x101408 Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | 0x101410 Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101C08 | 0x101C08 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101F01 | 0x101F01 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x101F02 | 0x101F02 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x102001 | 0x102001 Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | 0x102002 Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102A01 | 0x102A01 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A22 | 0x102A22 Luftmassenmesser, Arbeitsbereich: Luftmasse zu hoch | 0 |
| 0x102A32 | 0x102A32 Luftmassenmesser, Arbeitsbereich: Luftmasse zu niedrig | 0 |
| 0x102A42 | 0x102A42 Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß | 0 |
| 0x102A52 | 0x102A52 Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig | 0 |
| 0x102E10 | 0x102E10 DME, interner Fehler, Luftmassenmesser: Leitungsunterbrechung Standby-Schalter | 0 |
| 0x103001 | 0x103001 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | 0x103002 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103004 | 0x103004 Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103008 | 0x103008 Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103101 | 0x103101 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | 0x103102 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103104 | 0x103104 Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103108 | 0x103108 Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103308 | 0x103308 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x10351C | 0x10351C Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104301 | 0x104301 Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104302 | 0x104302 Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104320 | 0x104320 Absolutdrucksensor, Saugrohr, Arbeitsbereich: Druck zu hoch | 0 |
| 0x104401 | 0x104401 Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104402 | 0x104402 Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104B01 | 0x104B01 Absolutdrucksensor, Saugrohr: Sammelfehler | 0 |
| 0x105001 | 0x105001 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x105002 | 0x105002 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x105201 | 0x105201 Umgebungsdrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x105202 | 0x105202 Umgebungsdrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x105A30 | 0x105A30 Umgebungsdrucksensor: Sammelfehler | 0 |
| 0x105A40 | 0x105A40 Umgebungsdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x105A41 | 0x105A41 Umgebungsdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x105A42 | 0x105A42 Umgebungsdruck, Arbeitsbereich: Druck unplausibel | 0 |
| 0x105A43 | 0x105A43 Umgebungsdruck, Arbeitsbereich: Druck unplausibel | 0 |
| 0x107801 | 0x107801 Tuningschutz: Luftmasse zu hoch | 0 |
| 0x107A50 | 0x107A50 Drosselklappe: Notlauf aktiv | 0 |
| 0x107A70 | 0x107A70 Drosselklappe, Ansteuerung: Kurzschluss | 0 |
| 0x107A71 | 0x107A71 Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | 0x107A72 DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler | 0 |
| 0x107A73 | 0x107A73 Drosselklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x107A80 | 0x107A80 Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | 0x107A81 Drosselklappe, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A90 | 0x107A90 Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | 0x107A91 Drosselklappe, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107AE0 | 0x107AE0 Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x108001 | 0x108001 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | 0x108002 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108208 | 0x108208 Ansauglufttemperatur: Signal, festliegend | 0 |
| 0x108920 | 0x108920 Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108930 | 0x108930 Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108932 | 0x108932 Ansauglufttemperatursensor: Sammelfehler | 0 |
| 0x108A01 | 0x108A01 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | 0x108A02 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A05 | 0x108A05 Ladelufttemperatursensor, Arbeitsbreich: Temperatur zu hoch | 0 |
| 0x108A10 | 0x108A10 Ladelufttemperatursensor, Spannungsänderung: zu schnell | 0 |
| 0x108C01 | 0x108C01 Ladelufttemperatur, Plausibilität: Temperatur zu hoch | 0 |
| 0x108C08 | 0x108C08 Ladelufttemperatur, Signal: festliegend | 0 |
| 0x108F01 | 0x108F01 Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | 0x109001 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109002 | 0x109002 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109010 | 0x109010 Heizungsrücklaufsensor, Plausibilität: Wackelkontakt erkannt | 0 |
| 0x109011 | 0x109011 Heizungsrücklaufsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109012 | 0x109012 Heizungsrücklaufsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109308 | 0x109308 Kühlmitteltemperatursensor, Signaländerung: zu schnell | 0 |
| 0x10A209 | 0x10A209 Motorraumtemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10A20A | 0x10A20A Motorraumtemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10A20B | 0x10A20B Motorraumtemperatursensor, Plausibilität: Wackelkontakt erkannt | 1 |
| 0x10A20C | 0x10A20C Motorraumtemperatursensor, elektrisch: Kurzschluss nach Plus | 1 |
| 0x10A20D | 0x10A20D Motorraumtemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10A20E | 0x10A20E Endstufe, Zusatzlüfter, Relais: Übertemperatur erkannt | 0 |
| 0x10A20F | 0x10A20F Zusatzlüfter, Relais,Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10A210 | 0x10A210 Zusatzlüfter, Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10A211 | 0x10A211 Zusatzlüfter, Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10A212 | 0x10A212 Zusatzlüfter, elektrisch: Fehlfunktion | 0 |
| 0x10A213 | 0x10A213 Zusatzlüfter Stufe1: falscher Lüfter verbaut | 0 |
| 0x10A214 | 0x10A214 Zusatzlüfter Stufe2: blockiert / schwergänig  | 0 |
| 0x10A215 | 0x10A215 Zusatzlüfter Stufe3: Lüfter nicht angelaufen | 0 |
| 0x10A216 | 0x10A216 Zusatzlüfter, Stufe4: Lüfter schaltet nicht ab | 0 |
| 0x10A217 | 0x10A217 Zusatzlüfter, Plausibilität: Drehzahl zu niedrig | 0 |
| 0x10A218 | 0x10A218 Zusatzlüfter: Plausibilisierung nicht erfolgt | 0 |
| 0x10AA20 | 0x10AA20 Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10AA21 | 0x10AA21 Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10AA30 | 0x10AA30 Kühlmitteltemperatursensor: Sammelfehler | 0 |
| 0x10AA52 | 0x10AA52 Kühlmitteltemperatursensor, Signal: festliegend | 0 |
| 0x10B101 | 0x10B101 Außentemperatursensor, elektrisch: Kurzschluss nach Plus | 1 |
| 0x10B102 | 0x10B102 Außentemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10B104 | 0x10B104 Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 1 |
| 0x10BA30 | 0x10BA30 Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | 0x10BA40 Außentemperatursensor, Plausibilität: Außentemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | 0x10BA41 Außentemperatursensor, Plausibilität: Außentemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA42 | 0x10BA42 Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10BA43 | 0x10BA43 Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA4B | 0x10BA4B Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA51 | 0x10BA51 Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | 0x10BA52 Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x10C004 | 0x10C004 Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10C009 | 0x10C009 Ansaugluftklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10C00A | 0x10C00A Ansaugluftklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10C00B | 0x10C00B Ansaugluftklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10C00C | 0x10C00C Ansaugluftklappe, Ansteuerung: Verstellzeit unplausibel | 0 |
| 0x110001 | 0x110001 Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem | 0 |
| 0x110103 | 0x110103 Injektor Zylinder 1, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110105 | 0x110105 Injektor Zylinder 1, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x110203 | 0x110203 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110205 | 0x110205 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x110303 | 0x110303 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110305 | 0x110305 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x110403 | 0x110403 Injektor Zylinder 4, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110405 | 0x110405 Injektor Zylinder 4, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x112101 | 0x112101 Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112104 | 0x112104 Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112201 | 0x112201 Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112204 | 0x112204 Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112301 | 0x112301 Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112304 | 0x112304 Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112401 | 0x112401 Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112404 | 0x112404 Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x113025 | 0x113025 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus | 0 |
| 0x113026 | 0x113026 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse | 0 |
| 0x113027 | 0x113027 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung | 0 |
| 0x114102 | 0x114102 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu fett | 0 |
| 0x114202 | 0x114202 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett | 0 |
| 0x114302 | 0x114302 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett | 0 |
| 0x114402 | 0x114402 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett | 0 |
| 0x117128 | 0x117128 Kleinstmengenadaption, Injektor Zylinder 1, Plausibilität: Signal unplausibel | 0 |
| 0x117228 | 0x117228 Kleinstmengenadaption, Injektor Zylinder 3, Plausibilität: Signal unplausibel | 0 |
| 0x117328 | 0x117328 Kleinstmengenadaption, Injektor Zylinder 4, Plausibilität: Signal unplausibel | 0 |
| 0x117329 | 0x117329 Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption: Sammelfehler | 0 |
| 0x11732A | 0x11732A Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption: Sammelfehler | 0 |
| 0x11732B | 0x11732B Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption: Sammelfehler | 0 |
| 0x11732C | 0x11732C Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption: Sammelfehler | 0 |
| 0x11732D | 0x11732D Kleinstmengenadaption, Injektor Zylinder 1, Regelbetrieb: Sammelfehler | 0 |
| 0x11732E | 0x11732E Kleinstmengenadaption, Injektor Zylinder 2, Regelbetrieb: Sammelfehler | 0 |
| 0x11732F | 0x11732F Kleinstmengenadaption, Injektor Zylinder 3, Regelbetrieb: Sammelfehler | 0 |
| 0x117330 | 0x117330 Kleinstmengenadaption, Injektor Zylinder 4, Regelbetrieb: Sammelfehler | 0 |
| 0x117428 | 0x117428 Kleinstmengenadaption, Injektor Zylinder 2, Plausibilität: Signal unplausibel | 0 |
| 0x118001 | 0x118001 Gemischregelung: Gemisch zu mager | 0 |
| 0x118002 | 0x118002 Gemischregelung: Gemisch zu fett | 0 |
| 0x118401 | 0x118401 Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | 0x118402 Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | 0x118601 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | 0x118602 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x119001 | 0x119001 Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | 0x119002 Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119304 | 0x119304 Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119308 | 0x119308 Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119404 | 0x119404 Raildrucksensor, Signal: festliegend | 0 |
| 0x11A001 | 0x11A001 Kraftstoffhochdruck, Plausibilität: Druck zu hoch | 0 |
| 0x11A002 | 0x11A002 Kraftstoffhochdruck, Plausibilität: Druck zu niedrig | 0 |
| 0x11A030 | 0x11A030 Kraftstoffniederdrucksystem, elektrische Kraftstoffpumpe, Adaption: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x11A031 | 0x11A031 Kraftstoffniederdrucksystem, elektrische Kraftstoffpumpe: Druck zu niedrig | 0 |
| 0x11A032 | 0x11A032 Kraftstoffniederdrucksystem, elektrische Kraftstoffpumpe: Druck zu niedrig bei geringem Tankfüllstand | 0 |
| 0x11A401 | 0x11A401 Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11AC01 | 0x11AC01 Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | 0x11AC02 Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11B010 | 0x11B010 Kraftstoffpumpensteuerung (FPC): Parametersatz fehlt oder Montagemodus aktiv | 0 |
| 0x11B011 | 0x11B011 Kraftstoffpumpensteuerung (FPC), interner Fehler: Fehlfunktion | 0 |
| 0x11B012 | 0x11B012 Kraftstoffpumpensteuerung (FPC), interner Fehler: Temperaturschwelle 2 überschritten | 0 |
| 0x11B013 | 0x11B013 Kraftstoffpumpensteuerung (FPC), interner Fehler: Temperaturschwelle 3 überschritten | 0 |
| 0x11B014 | 0x11B014 Elektrische Kraftstoffpumpe, Ansteuerung: Kurzschluss | 0 |
| 0x11B015 | 0x11B015 Kraftstoffpumpensteuerung (FPC), Nachlauf: Kommunikation mit ACSM fehlt | 0 |
| 0x11B016 | 0x11B016 Elektrische Kraftstoffpumpe, Arbeitsbereich: Strom zu hoch | 0 |
| 0x11B017 | 0x11B017 Elektrische Kraftstoffpumpe, Arbeitsbereich: Strom zu niedrig | 0 |
| 0x11B018 | 0x11B018 Elektrische Kraftstoffpumpe: blockiert | 0 |
| 0x11B030 | 0x11B030 Kraftstoffpumpensteuerung (FPC), Signalleitung: Leitungsunterbrechung | 0 |
| 0x11B031 | 0x11B031 Kraftstoffpumpensteuerung (FPC), Signalleitung: Übertemperatur erkannt | 0 |
| 0x11B032 | 0x11B032 Kraftstoffpumpensteuerung (FPC), Signalleitung: Kurzschluss nach Plus | 0 |
| 0x11B033 | 0x11B033 Kraftstoffpumpensteuerung (FPC), Signalleitung: Kurzschluss nach Masse | 0 |
| 0x11B209 | 0x11B209 Kraftstoffniederdrucksystem, Plausibilität: Förderleistung zu niedrig | 0 |
| 0x11B213 | 0x11B213 Kraftstoffsystem, Plausibilität: Druck zu niedrig  | 0 |
| 0x11B401 | 0x11B401 Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B501 | 0x11B501 Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11B510 | 0x11B510 Einspritzung, Notlauf: Zylinder ausgefallen | 1 |
| 0x11C004 | 0x11C004 Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C401 | 0x11C401 Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | 0x11C402 Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | 0x11C404 Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C405 | 0x11C405 Mengensteuerventil, Ansteuerung, Hochspannungsseite: Kurzschluss | 0 |
| 0x11C406 | 0x11C406 Mengensteuerventil, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x11C407 | 0x11C407 Mengensteuerventil, Ansteuerung, Niederspannungsseite: Kurzschluss | 0 |
| 0x11CF30 | 0x11CF30 Gemischregelung: Sammelfehler | 0 |
| 0x120208 | 0x120208 Ladedruckregelung, Plausibilität: Druck zu hoch | 0 |
| 0x120308 | 0x120308 Ladedruckregelung, Plausibilität: Druck zu niedrig | 0 |
| 0x120408 | 0x120408 Ladedruckregelung, Abschaltung: Druckaufbau gesperrt | 0 |
| 0x121001 | 0x121001 Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | 0x121002 Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121201 | 0x121201 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121202 | 0x121202 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121521 | 0x121521 Ladedrucksensor: Sammelfehler | 0 |
| 0x12152F | 0x12152F Ladedruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x121531 | 0x121531 Ladedruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121532 | 0x121532 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch | 0 |
| 0x121533 | 0x121533 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig | 0 |
| 0x122001 | 0x122001 Schubumluftventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122002 | 0x122002 Schubumluftventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122004 | 0x122004 Schubumluftventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x122108 | 0x122108 Schubumluftventil: klemmt geschlossen | 0 |
| 0x122201 | 0x122201 Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil | 0 |
| 0x123201 | 0x123201 Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123401 | 0x123401 Elektrisches Wastegate, Anschlag-Lernen, Kaltstart: Fehlfunktion | 0 |
| 0x123411 | 0x123411 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) nicht gefunden | 0 |
| 0x123412 | 0x123412 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) nicht gefunden | 0 |
| 0x123421 | 0x123421 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate offen) nicht gefunden | 0 |
| 0x123422 | 0x123422 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate geschlossen) nicht gefunden | 0 |
| 0x123431 | 0x123431 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) außerhalb Toleranz | 0 |
| 0x123432 | 0x123432 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) außerhalb Toleranz | 0 |
| 0x123433 | 0x123433 Elektrisches Wastegate, Anschlag-Lernen: Verstellbereich außerhalb Toleranz | 0 |
| 0x123437 | 0x123437 Elektrisches Wastegate: klemmt geschlossen | 0 |
| 0x123511 | 0x123511 Elektrisches Wastegate, Wastegate-Klappe: schwergängig | 0 |
| 0x123512 | 0x123512 Elektrisches Wastegate, Wastegate-Klappe, Kaltstart: schwergängig | 0 |
| 0x123513 | 0x123513 Elektrisches Wastegate, Positionssensor, Versorgungsspannung, Plausibilität: Spannung zu niedrig | 0 |
| 0x123516 | 0x123516 Elektrisches Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123601 | 0x123601 Elektrisches Wastegate, Ansteuerung: Kurzschluss | 0 |
| 0x123602 | 0x123602 DME, interner Fehler, Elektrisches Wastegate: Temperatur zu hoch | 0 |
| 0x123608 | 0x123608 DME, interner Fehler, Elektrisches Wastegate: SPI-Kommunikation fehlerhaft | 0 |
| 0x123609 | 0x123609 Elektrisches Wastegate, thermischer Überlastschutz: Warnschwelle überschritten | 0 |
| 0x12360B | 0x12360B Elektrisches Wastegate, thermischer Überlastschutz: Notlauf aktiv | 0 |
| 0x123701 | 0x123701 Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x123702 | 0x123702 Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x128101 | 0x128101 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | 0x128301 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128901 | 0x128901 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | 0x128B01 Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128E01 | 0x128E01 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x129001 | 0x129001 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | 0x129002 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | 0x129201 DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | 0x129202 DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129A20 | 0x129A20 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | 0x129A21 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A308 | 0x12A308 Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | 0x12A701 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | 0x12A902 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | 0x12AB04 Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AD01 | 0x12AD01 Lambdasonde nach Katalysator: Signal festliegend auf Mager | 0 |
| 0x12AE01 | 0x12AE01 Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12AF10 | 0x12AF10 Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12AF11 | 0x12AF11 Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12AF20 | 0x12AF20 Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12B101 | 0x12B101 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | 0x12B102 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | 0x12B104 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | 0x12B301 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | 0x12B302 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | 0x12B304 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B505 | 0x12B505 Lambdasondenbeheizung vor Katalysator, Funktion: Heizerfehler | 0 |
| 0x12B701 | 0x12B701 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BD52 | 0x12BD52 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | 0x12BD60 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD80 | 0x12BD80 Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BE08 | 0x12BE08 Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
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
| 0x130E11 | 0x130E11 Einlassnockenwellensensor, Plausibilität: Signal unplausibel | 0 |
| 0x130E20 | 0x130E20 Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | 0x130F11 Auslassnockenwellensensor, Plausibilität: Signal unplausibel | 0 |
| 0x130F20 | 0x130F20 Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | 0x131401 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | 0x131501 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x131808 | 0x131808 VANOS, Auslass, Kaltstart: Position nicht erreicht | 0 |
| 0x131908 | 0x131908 VANOS, Einlass, Kaltstart: Position nicht erreicht | 0 |
| 0x132101 | 0x132101 VANOS, Auslass: Sammelfehler | 0 |
| 0x132201 | 0x132201 VANOS, Einlass: Sammelfehler | 0 |
| 0x132301 | 0x132301 VANOS: Sammelfehler | 0 |
| 0x133010 | 0x133010 Valvetronic-Stellmotor, Ansteuerung: Fehlfunktion | 0 |
| 0x133011 | 0x133011 Valvetronic, Versorgungsspannung: Fehlfunktion | 0 |
| 0x133101 | 0x133101 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | 0x133102 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | 0x133104 Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | 0x133201 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | 0x133202 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133304 | 0x133304 Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133710 | 0x133710 Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133B04 | 0x133B04 Valvetronic System: keine Verstellung möglich | 0 |
| 0x133E10 | 0x133E10 Valvetronic System: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x134A02 | 0x134A02 Valvetronic-Stellmotor: Überlastung | 0 |
| 0x134F01 | 0x134F01 Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | 0x134F02 Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | 0x134F04 Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | 0x134F08 Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | 0x134F10 Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 1 |
| 0x135302 | 0x135302 Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System | 0 |
| 0x135401 | 0x135401 Valvetronic: Endstufe überlastet | 0 |
| 0x135501 | 0x135501 Valvetronic: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135502 | 0x135502 Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135608 | 0x135608 Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | 0x135704 Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135705 | 0x135705 Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135706 | 0x135706 Valvetronic System: unterer Anschlag gelernt | 0 |
| 0x135808 | 0x135808 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung Fehlfunktion | 0 |
| 0x135908 | 0x135908 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x135A08 | 0x135A08 Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x135A10 | 0x135A10 Valvetronic-Stellmotor, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135B10 | 0x135B10 Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | 0x135B11 Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | 0x135B12 Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | 0x135C10 Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | 0x135C11 Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x138101 | 0x138101 Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | 0x138102 Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | 0x138104 Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138201 | 0x138201 Kühlerjalousie, oben, Versorgungsspannung, Eigendiagnose: Fehlfunktion | 0 |
| 0x138301 | 0x138301 Kühlerjalousie, oben, Eigendiagnose: Übertemperatur erkannt | 0 |
| 0x138401 | 0x138401 Kühlerjalousie, oben, Eigendiagnose: elektrischer Fehler | 0 |
| 0x138501 | 0x138501 Kühlerjalousie, oben: unterer Anschlag nicht erkannt | 0 |
| 0x138601 | 0x138601 Kühlerjalousie, oben: oberer Anschlag nicht erkannt | 0 |
| 0x138701 | 0x138701 Kühlerjalousie, oben: oberer Anschlag zu früh erkannt | 0 |
| 0x138901 | 0x138901 Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138902 | 0x138902 Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138904 | 0x138904 Kühlerjalousie, unten, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138A12 | 0x138A12 Abgasklappe: keine Rückmeldung | 0 |
| 0x140001 | 0x140001 Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | 0x140002 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | 0x140004 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140010 | 0x140010 Verbrennungsaussetzer, mehrere Zylinder: erkannt | 0 |
| 0x140011 | 0x140011 Verbrennungsaussetzer: Einspritzabschaltung | 0 |
| 0x140101 | 0x140101 Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | 0x140102 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | 0x140104 Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140110 | 0x140110 Verbrennungsaussetzer, Zylinder 1: erkannt | 0 |
| 0x140201 | 0x140201 Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | 0x140202 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | 0x140204 Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140210 | 0x140210 Verbrennungsaussetzer, Zylinder 2: erkannt | 0 |
| 0x140301 | 0x140301 Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | 0x140302 Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | 0x140304 Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140310 | 0x140310 Verbrennungsaussetzer, Zylinder 3: erkannt | 0 |
| 0x140401 | 0x140401 Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | 0x140402 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | 0x140404 Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140410 | 0x140410 Verbrennungsaussetzer, Zylinder 4: erkannt | 0 |
| 0x150102 | 0x150102 Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | 0x150202 Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | 0x150302 Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | 0x150402 Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150C11 | 0x150C11 Zündung, Zylinder 1: Brenndauer außerhalb Toleranz | 0 |
| 0x150C12 | 0x150C12 Zündung, Zylinder 2: Brenndauer außerhalb Toleranz | 0 |
| 0x150C13 | 0x150C13 Zündung, Zylinder 3: Brenndauer außerhalb Toleranz | 0 |
| 0x150C14 | 0x150C14 Zündung, Zylinder 4: Brenndauer außerhalb Toleranz | 0 |
| 0x150C23 | 0x150C23 Zündung, Zylinder 1: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x150C24 | 0x150C24 Zündung, Zylinder 2: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x150C25 | 0x150C25 Zündung, Zylinder 3: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x150C26 | 0x150C26 Zündung, Zylinder 4: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x151001 | 0x151001 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | 0x151101 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | 0x152001 Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus | 0 |
| 0x152007 | 0x152007 Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse | 0 |
| 0x152008 | 0x152008 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152108 | 0x152108 Superklopfen Zylinder 1: Einspritzabschaltung | 0 |
| 0x152118 | 0x152118 Superklopfen Zylinder 1: dauerhafte Einspritzabschaltung | 0 |
| 0x152208 | 0x152208 Superklopfen Zylinder 2: Einspritzabschaltung | 0 |
| 0x152218 | 0x152218 Superklopfen Zylinder 2: dauerhafte Einspritzabschaltung | 0 |
| 0x152308 | 0x152308 Superklopfen Zylinder 3: Einspritzabschaltung | 0 |
| 0x152318 | 0x152318 Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung | 0 |
| 0x152408 | 0x152408 Superklopfen Zylinder 4: Einspritzabschaltung | 0 |
| 0x152418 | 0x152418 Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung | 0 |
| 0x152D08 | 0x152D08 Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | 0x160001 Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | 0x160020 Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160021 | 0x160021 Kurbelwellensensor: allgemeiner Synchronisationsverlust  | 0 |
| 0x160501 | 0x160501 Kurbelgehäuseentlüftungsheizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x160502 | 0x160502 Kurbelgehäuseentlüftungsheizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x160504 | 0x160504 Kurbelgehäuseentlüftungsheizung, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x160510 | 0x160510 Kurbelwellensensor, Plausibilität: Drehrichtung unplausibel | 0 |
| 0x164020 | 0x164020 Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164021 | 0x164021 Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164030 | 0x164030 Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164031 | 0x164031 Ausassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164040 | 0x164040 Einlassnockenwelle: Montage fehlerhaft | 0 |
| 0x164041 | 0x164041 Auslassnockenwelle: Montage fehlerhaft | 0 |
| 0x168001 | 0x168001 Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | 0x168002 Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168101 | 0x168101 Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | 0x168102 Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168A20 | 0x168A20 Klopfregelung: Systemfehler | 0 |
| 0x168A30 | 0x168A30 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | 0x168A31 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | 0x168A40 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | 0x168A41 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | 0x168A50 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | 0x168A51 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | 0x168A60 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | 0x168A61 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x180001 | 0x180001 Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180110 | 0x180110 Katalysator, Plausibilität: Abgasgegendruck zu hoch | 0 |
| 0x190302 | 0x190302 Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
| 0x190F08 | 0x190F08 Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191001 | 0x191001 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | 0x191002 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | 0x191004 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191C02 | 0x191C02 Tankentlüftungssystem, 2. Einleitestelle: Fehlfunktion | 0 |
| 0x193001 | 0x193001 Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193002 | 0x193002 Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193008 | 0x193008 Kraftstoff-Füllstandsgeber, links, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193101 | 0x193101 Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193102 | 0x193102 Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193108 | 0x193108 Kraftstoff-Füllstandsgeber, rechts, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193208 | 0x193208 Tankfüllstand, Plausibilität: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193A20 | 0x193A20 Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
| 0x194001 | 0x194001 Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu niedrig | 0 |
| 0x194002 | 0x194002 Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu hoch | 0 |
| 0x194004 | 0x194004 Tankleckagemodul, Temperatur, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x194101 | 0x194101 Tankleckagemodul, Temperatursensor, Signaländerung: zu schnell | 0 |
| 0x194201 | 0x194201 Tankleckagemodul, Zeitgeber: Fehlfunktion | 0 |
| 0x194401 | 0x194401 Tankleckagemodul, Kommunikation: gestört | 0 |
| 0x194501 | 0x194501 Tankleckagemodul, Kommunikation: Fehlfunktion | 0 |
| 0x194601 | 0x194601 Tankleckagemodul, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194602 | 0x194602 Tankleckagemodul, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194604 | 0x194604 Tankleckagemodul, elektrisch: Leitungsunterbrechung | 0 |
| 0x194701 | 0x194701 Tankleckagemodul, Druckschalter: klemmt | 0 |
| 0x194801 | 0x194801 Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194802 | 0x194802 Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194804 | 0x194804 Tankleckagemodul, Druckschalter, elektrisch: Leitungsunterbrechung | 0 |
| 0x1A2001 | 0x1A2001 Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | 0x1A2002 Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | 0x1A2004 Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2009 | 0x1A2009 Elektrolüfter, Ansteuerung: Fehlfunktion | 0 |
| 0x1A200A | 0x1A200A Check-Control-Meldung (ID 567): Motorlüfter gestört, gemäßigt fahren | 0 |
| 0x1A200B | 0x1A200B Check-Control-Meldung (ID 568): Motorlüfter Defekt, Fahrzeug sofort abstellen | 0 |
| 0x1A200C | 0x1A200C Sicherungsrelais Elektrolüfter, Ansteuerung: Fehlfunktion | 0 |
| 0x1A200D | 0x1A200D Elektrolüfter, Eigendiagnose Stufe 1: Drehzahlreduzierung 1 | 0 |
| 0x1A200E | 0x1A200E Elektrolüfter, Eigendiagnose Stufe 2: Drehzahlreduzierung 2 | 0 |
| 0x1A200F | 0x1A200F Elektrolüfter, Eigendiagnose Stufe 3: Drehzahlreduzierung 3 | 0 |
| 0x1A2010 | 0x1A2010 Elektrolüfter, Eigendiagnose Stufe 4: eingeschränkter Lauf | 0 |
| 0x1A2011 | 0x1A2011 Elektrolüfter, Eigendiagnose Stufe 5: Stillstand 1 | 0 |
| 0x1A2012 | 0x1A2012 Elektrolüfter, Eigendiagnose Stufe 6: Stillstand 2 | 0 |
| 0x1A2013 | 0x1A2013 Elektrolüfter: Typ nicht plausibel | 0 |
| 0x1A2601 | 0x1A2601 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | 0x1A2602 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | 0x1A2604 Sicherungsrelais Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2709 | 0x1A2709 Zusatzlüfter, Relais, Ansteuerung: Sammelfehler | 0 |
| 0x1B0A20 | 0x1B0A20 Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | 0x1B0A21 Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | 0x1B0A40 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 0 |
| 0x1B0A60 | 0x1B0A60 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel | 0 |
| 0x1B0A61 | 0x1B0A61 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel | 0 |
| 0x1B0A62 | 0x1B0A62 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A64 | 0x1B0A64 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 0 |
| 0x1B0A65 | 0x1B0A65 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 0 |
| 0x1B0A66 | 0x1B0A66 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 0 |
| 0x1B0A67 | 0x1B0A67 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 0 |
| 0x1B2001 | 0x1B2001 EWS-Manipulationsschutz: Motorlauf durch EWS gesperrt | 0 |
| 0x1B2002 | 0x1B2002 EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | 0x1B2008 EWS Manipulationsschutz: Antwort unplausibel | 0 |
| 0x1B2201 | 0x1B2201 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | 0x1B2202 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2208 | 0x1B2208 DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2209 | 0x1B2209 DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key | 0 |
| 0x1B2301 | 0x1B2301 FlexRay, Botschaft (EWS Information FEM, 103.1.4): fehlt | 0 |
| 0x1B2302 | 0x1B2302 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 0 |
| 0x1B2304 | 0x1B2304 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 0 |
| 0x1B2904 | 0x1B2904 Funktionsfreischaltung, Geschwindigkeitsbegrenzung: Code ungültig | 0 |
| 0x1B5101 | 0x1B5101 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | 0x1B5102 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5202 | 0x1B5202 Klemme 15N_1: keine Spannung | 0 |
| 0x1B5302 | 0x1B5302 Klemme 15N_2: keine Spannung | 0 |
| 0x1B5402 | 0x1B5402 Klemme 15N_3: keine Spannung | 0 |
| 0x1B6008 | 0x1B6008 Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B9508 | 0x1B9508 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | 0x1B9608 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | 0x1B9701 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf | 0 |
| 0x1B9702 | 0x1B9702 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf | 0 |
| 0x1B9804 | 0x1B9804 Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | 0x1B9A01 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf | 0 |
| 0x1B9A02 | 0x1B9A02 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf | 0 |
| 0x1B9B01 | 0x1B9B01 Motorabstellzeit: Sammelfehler | 0 |
| 0x1BC004 | 0x1BC004 Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1BC101 | 0x1BC101 Nullgangsensor, Plausibilität: Signal unplausibel | 0 |
| 0x1BC115 | 0x1BC115 Gangsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BC116 | 0x1BC116 Gangsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BC117 | 0x1BC117 Gangsensor, Plausibilität, Position unplausibel | 0 |
| 0x1BC118 | 0x1BC118 Gangsensor, Lernwerte: unplausibel oder Speichern fehlgeschlagen | 0 |
| 0x1BC119 | 0x1BC119 Gangsensor: Schalthebelpositon ungültig | 0 |
| 0x1BC11A | 0x1BC11A Gangsensor, Kommunikation: Statusinformation fehlerhaft | 0 |
| 0x1BC11B | 0x1BC11B Gangsensor, Plausibilität: Temparatur zu hoch | 0 |
| 0x1BC11C | 0x1BC11C Gangsensor, Kommunikation: fehlt | 0 |
| 0x1BC11D | 0x1BC11D Gangsensor, Plausibilität: Wackelkontakt erkannt | 0 |
| 0x1BC11E | 0x1BC11E Gangsensor, Kommunikation, Fast Kanal: gestört | 0 |
| 0x1BC11F | 0x1BC11F Gangsensor, Kommunikation, Slow Kanal: gestört | 0 |
| 0x1BD408 | 0x1BD408 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD508 | 0x1BD508 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD608 | 0x1BD608 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1BD708 | 0x1BD708 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1C0001 | 0x1C0001 Motoröldruckregelung, Plausibilität: Druckschwankungen | 0 |
| 0x1C0101 | 0x1C0101 Motoröldruckregelung, Plausiblität, statisch: Druck zu hoch | 0 |
| 0x1C0102 | 0x1C0102 Motoröldruckregelung, Plausiblität, statisch: Druck zu niedrig | 0 |
| 0x1C0201 | 0x1C0201 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | 0x1C0202 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | 0x1C0204 Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0301 | 0x1C0301 Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | 0x1C0302 Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | 0x1C0401 Motoröldruckregelung: instabil | 0 |
| 0x1C2001 | 0x1C2001 Motorölpumpe: Druck zu hoch | 0 |
| 0x1C2002 | 0x1C2002 Motorölpumpe: Druck zu niedrig | 0 |
| 0x1C3005 | 0x1C3005 Motoröldrucksensor: Membranriss | 0 |
| 0x1C3101 | 0x1C3101 Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu hoch | 0 |
| 0x1C3102 | 0x1C3102 Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu niedrig | 0 |
| 0x1C3108 | 0x1C3108 Motoröldrucksensor, Signal: festliegend | 0 |
| 0x1C4002 | 0x1C4002 Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | 0x1C4110 Ölzustandssensor: Fehlfunktion | 0 |
| 0x1D2008 | 0x1D2008 Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2401 | 0x1D2401 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | 0x1D2402 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | 0x1D2404 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3001 | 0x1D3001 Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung leicht geschädigt | 0 |
| 0x1D3101 | 0x1D3101 Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung geschädigt | 0 |
| 0x1D3201 | 0x1D3201 Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung stark geschädigt | 0 |
| 0x1D3211 | 0x1D3211 Kupplungstemperatur: Warnschwellenwert 1 ohne Schädigung überschritten | 1 |
| 0x1D3212 | 0x1D3212 Kupplungstemperatur: Warnschwellenwert 2 ohne Schädigung überschritten | 1 |
| 0x1D3330 | 0x1D3330 Kommunikationsfehler zu EGS während E-Fahren | 1 |
| 0x1D3331 | 0x1D3331 Kommunikationsfehler zu EGS während Verbrennerbetrieb | 1 |
| 0x1D3650 | 0x1D3650 Hinterachsgetriebe, Plausibilität: Übersetzung unplausibel | 0 |
| 0x1D3701 | 0x1D3701 Powermanagement, Batterie: Drehzahlanhebung aufgrund niedrigem Ladezustand | 0 |
| 0x1D3810 | 0x1D3810 Kupplungsschalter: Positionen zueinander unplausibel | 0 |
| 0x1D3A01 | 0x1D3A01 Kommunikation: Signal (Drehzahl_Getriebestrang_Abtrieb) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0x1D3C01 | 0x1D3C01 Kommunikation: Signal (Status_Schaltung_Aktiv_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig | 1 |
| 0x1E0001 | 0x1E0001 Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | 0x1E0002 Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | 0x1E0101 Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | 0x1E0102 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E0308 | 0x1E0308 Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel | 0 |
| 0x1E5201 | 0x1E5201 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5301 | 0x1E5301 Manipulationsschutz: Motorleistung zu hoch | 0 |
| 0x1E5A20 | 0x1E5A20 Motordrehmomentbegrenzung: maximales Sollmoment dauerhaft überschritten | 0 |
| 0x1F0513 | 0x1F0513 Valvetronic, Versorgungsspannung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F0514 | 0x1F0514 Valvetronic, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F0515 | 0x1F0515 Valvetronic, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0516 | 0x1F0516 DME, interner Fehler, Sicherheitsfunktion: AD-Wandler Leerlauftestimpulsprüfung | 0 |
| 0x1F0517 | 0x1F0517 DME, interner Fehler, Sicherheitsfunktion: AD-Wandler Testspannungsprüfung | 0 |
| 0x1F0519 | 0x1F0519 DME, interner Fehler, Sicherheitsfunktion: Signalplausibilisierung Fahrpedalmodul oder Pedalwertgeber | 0 |
| 0x1F0520 | 0x1F0520 DME, interner Fehler, Sicherheitsfunktion: Drehzahlgeber | 0 |
| 0x1F0522 | 0x1F0522 DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 1 | 0 |
| 0x1F0523 | 0x1F0523 DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 2 | 0 |
| 0x1F0528 | 0x1F0528 DME, interner Fehler, Sicherheitsfunktion: Variantenkodierung | 0 |
| 0x1F0530 | 0x1F0530 DME, interner Fehler: Abschaltpfad-Test durch Überwachungsmodul | 0 |
| 0x1F053C | 0x1F053C DME, interner Fehler, Sicherheitsfunktion: maximale Fahrzeugbeschleuningung überschritten  | 0 |
| 0x1F053D | 0x1F053D DME, interner Fehler, erweiterte Überwachung Sendesignale: Ist-Motordrehmoment unplausibel | 0 |
| 0x1F053F | 0x1F053F DME, interner Fehler, Sicherheitsfunktion: Fahrbereitschaft | 0 |
| 0x1F0540 | 0x1F0540 DME, interner Fehler, Sicherheitsfunktion: Fahrpedallbegrenzungswert überschritten | 0 |
| 0x1F0904 | 0x1F0904 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F0905 | 0x1F0905 DME, interner Fehler, Valvetronic: Strom unplausibel | 0 |
| 0x1F0906 | 0x1F0906 DME, interner Fehler, Valvetronic: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A40 | 0x1F1A40 DME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x1F1A50 | 0x1F1A50 DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A51 | 0x1F1A51 DME, interner Fehler: Lesen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | 0x1F1A52 DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | 0x1F1A60 DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A70 | 0x1F1A70 DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x1F1A71 | 0x1F1A71 DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x1F1A80 | 0x1F1A80 DME, interner Fehler, Watchdog-Ausgang: Fehlfunktion | 0 |
| 0x1F1A81 | 0x1F1A81 DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation | 0 |
| 0x1F1A82 | 0x1F1A82 DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung | 0 |
| 0x1F1A90 | 0x1F1A90 Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A91 | 0x1F1A91 Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A92 | 0x1F1A92 Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A93 | 0x1F1A93 Überwachung 5V Sensor-Versorgung: Spannung zu hoch | 0 |
| 0x1F1A94 | 0x1F1A94 Überwachung 5V Sensor-Versorgung: Kurzschluss nach Masse | 0 |
| 0x1F1A95 | 0x1F1A95 Überwachung 5V Sensor-Versorgung: Spannung zu niedrig | 0 |
| 0x1F1A96 | 0x1F1A96 Überwachung 5V Sensor-Versorgung 2: Spannung zu hoch | 0 |
| 0x1F1A97 | 0x1F1A97 Überwachung 5V Sensor-Versorgung 2: Kurzschluss nach Masse | 0 |
| 0x1F1A98 | 0x1F1A98 Überwachung 5V Sensor-Versorgung 2: Spannung zu niedrig | 0 |
| 0x1F1A99 | 0x1F1A99 Überwachung 5V Sensor-Versorgung 3: Spannung zu hoch | 0 |
| 0x1F1A9A | 0x1F1A9A Überwachung 5V Sensor-Versorgung 3: Kurzschluss nach Masse | 0 |
| 0x1F1A9B | 0x1F1A9B Überwachung 5V Sensor-Versorgung 3: Spannung zu niedrig | 0 |
| 0x1F1AA0 | 0x1F1AA0 DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA1 | 0x1F1AA1 DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA2 | 0x1F1AA2 DME, interner Fehler: Software-Reset | 0 |
| 0x1F1B54 | 0x1F1B54 Bordnetz, Spannungsversorgung: Fehlfunktion (Meldung von EME) | 1 |
| 0x1F1B55 | 0x1F1B55 Bordnetzspannung: Spannung zu niedrig (Fehler im Hochvoltsystem) | 0 |
| 0x1F2102 | 0x1F2102 Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt | 0 |
| 0x1F2104 | 0x1F2104 DME, falscher Datensatz: CAN Timeout | 0 |
| 0x1F2108 | 0x1F2108 DME, falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | 0x1F2601 DME, Kodierung: fehlt | 0 |
| 0x1F2604 | 0x1F2604 DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2701 | 0x1F2701 DME, Kodierung: Schreibfehler | 0 |
| 0x1F2702 | 0x1F2702 DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2704 | 0x1F2704 DME, Kodierung: Daten unplausibel | 0 |
| 0x1F2801 | 0x1F2801 DME, Software: Programm ungültig | 0 |
| 0x1F2802 | 0x1F2802 DME, Software: Daten ungültig | 0 |
| 0x1F4A01 | 0x1F4A01 Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | 0x1F4A02 Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | 0x1F4A10 Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F4D10 | 0x1F4D10 DME, interner Fehler, Ansteuerung Mengensteuerventil: Fehlfunktion | 0 |
| 0x1F5020 | 0x1F5020 DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | 0x1F5021 DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | 0x1F5101 DME Temperatur: Übertemperatur | 0 |
| 0x1FB001 | 0x1FB001 Check-Control-Meldung (ID 484): Batterie OK | 0 |
| 0x1FB101 | 0x1FB101 Check-Control-Meldung (ID 229): Batterie laden | 0 |
| 0x1FB201 | 0x1FB201 Check-Control-Meldung (ID 257): Motor zu heiß! Gemäßigt fahren | 0 |
| 0x1FB301 | 0x1FB301 Check-Control-Meldung (ID 39): Motor überhitzt. Vorsichtig halten | 0 |
| 0x1FB401 | 0x1FB401 Check-Control-Meldung (ID 367): Antrieb gemäßigt fahren | 0 |
| 0x1FB501 | 0x1FB501 Check-Control-Meldung (ID 27): Motoröl nachfüllen | 0 |
| 0x1FB601 | 0x1FB601 Check-Control-Meldung (ID 450): Auto Start Stop Funktion deaktiviert | 0 |
| 0x1FB701 | 0x1FB701 Check-Control-Meldung (ID 397): Auto Start Stop Funktion ausgefallen | 0 |
| 0x1FB801 | 0x1FB801 Check-Control-Meldung (ID 212): Motoröldruck. Vorsichtig anhalten | 0 |
| 0x1FB901 | 0x1FB901 Check-Control-Meldung (ID 278): Niedrigen Gang wählen | 0 |
| 0x1FBB01 | 0x1FBB01 Check-Control-Meldung (ID 567): Motorlüfter. Gemäßigt fahren | 0 |
| 0x1FBC01 | 0x1FBC01 Check-Control-Meldung (ID 584): Transport-Modus | 0 |
| 0x1FBD00 | 0x1FBD00 Check-Control-Meldung (ID 568): Antrieb. Vorsichtig anhalten | 0 |
| 0x1FBD01 | 0x1FBD01 Check-Control-Meldung (ID 569): Antrieb. Vorsichtig anhalten | 0 |
| 0x1FBD02 | 0x1FBD02 Check-Control-Meldung (ID 49): Antrieb. Demnächst prüfen | 0 |
| 0x1FBD05 | 0x1FBD05 Check-Control-Meldung (ID 807): Ladekabel abziehen | 0 |
| 0x1FBD06 | 0x1FBD06 Check-Control-Meldung (ID 808): Ladekabel prüfen | 0 |
| 0x1FBD07 | 0x1FBD07 Fahrbereitschaft: nicht möglich | 0 |
| 0x1FBD10 | 0x1FBD10 Notlaufmanager: Anforderung Dauergong aufgrund Getriebefehler | 0 |
| 0x1FBE02 | 0x1FBE02 Check-Control-Meldung (ID 882): Fahrzeug gegen Wegrollen sichern | 0 |
| 0x1FBE03 | 0x1FBE03 Check-Control-Meldung (ID 400): Motorölstand zu hoch | 0 |
| 0x201004 | 0x201004 CBS-Client: Ausgabe von Ersatzwert | 0 |
| 0x201010 | 0x201010 A- / FA-CAN Hardware: defekt | 0 |
| 0x201020 | 0x201020 FlexRay Hardware: defekt | 0 |
| 0x201101 | 0x201101 DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A101 | 0x20A101 Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A104 | 0x20A104 Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A105 | 0x20A105 Ladeluft-Kühlmittelpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20A106 | 0x20A106 DME, interner Fehler, Ladeluft-Kühlmittelpumpe: Temperatur zu hoch | 0 |
| 0x20A107 | 0x20A107 Ladeluft-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20A109 | 0x20A109 Ladeluft-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20A10B | 0x20A10B Ladeluft-Kühlsystem: Drehzahl Kühlmittelpumpe zu niedrig | 0 |
| 0x20A201 | 0x20A201 Ladeluft-Kühlsystem: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 1 |
| 0x20A501 | 0x20A501 Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20A502 | 0x20A502 Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20A503 | 0x20A503 Turbolader-Kühlmittelpumpe, Eigendiagnose: Signal unplausibel | 0 |
| 0x20A504 | 0x20A504 Turbolader-Kühlmittelpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20A506 | 0x20A506 DME, interner Fehler, Treiber, Turbolader-Kühlmittelpumpe: Temperatur zu hoch | 0 |
| 0x20A507 | 0x20A507 Motor-Kühlsystem: Abschaltung Turboladerkühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A508 | 0x20A508 Motor-Kühlsystem: Abschaltung Turboladerkühlmittelpumpe wegen Blockierung | 0 |
| 0x20A509 | 0x20A509 Motor-Kühlsystem: Drehzahl Turboladerkühlmtitelpumpe zu niedrig | 0 |
| 0x20A50A | 0x20A50A Motor-Kühlsystem: Kühlmittelverlust durch Turboladerkühlmittelpumpe erkannt | 0 |
| 0x20A701 | 0x20A701 Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A703 | 0x20A703 Motor-Kühlsystem: Bauteileschutz Temporäre Motorleistungsreduzierung | 0 |
| 0x20A801 | 0x20A801 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | 0x20A802 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | 0x20A804 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A902 | 0x20A902 Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | 0x20A904 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | 0x20A908 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20AB08 | 0x20AB08 Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe | 0 |
| 0x20AD13 | 0x20AD13 Hauptwasserpumpe: Klappestellung Fehlerhaft | 0 |
| 0x20BA20 | 0x20BA20 Kupplungsschalter, Signal: fehlt | 0 |
| 0x210201 | 0x210201 Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | 0x210301 Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | 0x210401 Generator, Temperatur: Übertemperatur | 1 |
| 0x210601 | 0x210601 Generator, mechanisch: Fehlfunktion | 0 |
| 0x210801 | 0x210801 Generator: Typ falsch | 0 |
| 0x210C01 | 0x210C01 Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211F01 | 0x211F01 Generator/Startergenerator: Kodierung fehlt | 0 |
| 0x211F03 | 0x211F03 Generator/Startergenerator: Kodierung oder Programmstand falsch | 0 |
| 0x213301 | 0x213301 Powermanagement, Überspannung: Überspannung erkannt | 1 |
| 0x213401 | 0x213401 Powermanagement, Unterspannung: Unterspannung erkannt | 1 |
| 0x213501 | 0x213501 Powermanagement, Batterieüberwachung: Tiefentladung | 1 |
| 0x213601 | 0x213601 Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x213701 | 0x213701 Powermanagement: Batterieloser Betrieb | 1 |
| 0x213801 | 0x213801 Batterie, Transport: Batterie auf Transport geschädigt | 1 |
| 0x213901 | 0x213901 Verbraucherreduzierung: aktiv | 1 |
| 0x213A01 | 0x213A01 Batterie, Transport, Überwachung: Batterie auf Transport entladen | 1 |
| 0x213A20 | 0x213A20 Bordnetzspannung, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x213A21 | 0x213A21 Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x213B01 | 0x213B01 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C01 | 0x213C01 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x215001 | 0x215001 Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 |
| 0x215101 | 0x215101 Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215104 | 0x215104 Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215108 | 0x215108 Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215701 | 0x215701 Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 |
| 0x215801 | 0x215801 Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | 0x215901 Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | 0x215A01 Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 |
| 0x215F40 | 0x215F40 Intelligenter Batteriesensor, Arbeitsbereich: Strom zu hoch | 0 |
| 0x215F41 | 0x215F41 Intelligenter Batteriesensor, Arbeitsbereich: Strom zu niedrig | 0 |
| 0x215F42 | 0x215F42 Intelligenter Batteriesensor, Arbeitsbereich: Temperatur zu hoch | 0 |
| 0x215F43 | 0x215F43 Intelligenter Batteriesensor, Arbeitsbereich: Temperatur zu niedrig | 0 |
| 0x215F44 | 0x215F44 Intelligenter Batteriesensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x215F45 | 0x215F45 Intelligenter Batteriesensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x216002 | 0x216002 MSA, Überwachung: Zeitüberschreitung | 0 |
| 0x216104 | 0x216104 MSA, Überwachung: Startverzögerung | 0 |
| 0x216110 | 0x216110 Startaggregat Ritzelstarter: Anzahl MSA-Reflexstarts überschritten | 0 |
| 0x216111 | 0x216111 Startaggregat Ritzelstarter: Anzahl Motorstarts überschritten | 0 |
| 0x218001 | 0x218001 Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | 0x218101 Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion | 0 |
| 0x218201 | 0x218201 Batterieladeeinheit, Sekundäre Batterie: defekt | 0 |
| 0x218301 | 0x218301 Batterieladeeinheit: Fehler im Trennelement/Kabelbaum oder sekundäre Batterie tiefentladen | 0 |
| 0x21A001 | 0x21A001 Montagemode: aktiv | 0 |
| 0x21A002 | 0x21A002 Notlaufmanager: Anforderung Fahrbereitschaft Aufheben von Steuergerät Elektromaschine | 1 |
| 0x21A003 | 0x21A003 Notlaufmanager: Anforderung Verbrennungsmotor Momentreduktion Stufe 1 von Steuergerät Elektromaschine | 1 |
| 0x21A004 | 0x21A004 Notlaufmanager: Anforderung Verbrennungsmotor Momentreduktion Stufe 2 von Steuergerät Elektromaschine | 1 |
| 0x21A005 | 0x21A005 Notlaufmanager: Anforderung Verbrennungsmotor Momentreduktion Stufe 3 von Steuergerät Elektromaschine | 1 |
| 0x21A009 | 0x21A009 Notlaufmanager: Anforderung Aktivierung Leerlaufregelung Verbrennungsmotor von Steuergerät Elektromaschine | 1 |
| 0x21A00A | 0x21A00A Notlaufmanager: Anforderung Nullstromregelung von Steuergerät Elektromaschine | 1 |
| 0x21A00B | 0x21A00B Notlaufmanager: Anforderung Kraftschluss Getriebe elektrische Achse Aufheben von Steuergerät Elektromaschine | 1 |
| 0x21A00C | 0x21A00C Notlaufmanager: Anforderung Kraftschluss Getriebe elektrische Achse Aufheben bei Maximalgeschwindigkeit von Steuergerät Elektromaschine | 1 |
| 0x21A00D | 0x21A00D Notlaufmanager: Anforderung Kraftschluss Getriebe elektrische Achse Herstellen von Steuergerät Elektromaschine | 1 |
| 0x21A00F | 0x21A00F Notlaufmanager: Anforderung Verbrennungsmotor Abschaltverhinderer von Steuergerät Elektromaschine | 1 |
| 0x21A010 | 0x21A010 Notlaufmanager: Anforderung Standby von Steuergerät Elektromaschine | 1 |
| 0x21A011 | 0x21A011 Notlaufmanager: Anforderung Deaktivierung Starteinrichtung Elektromaschine von Steuergerät Elektromaschine | 1 |
| 0x21A111 | 0x21A111 Motordrehzahlbegrenzung, Stufe 1: infolge Notlaufanforderung vom EME-Notlaufmanager | 1 |
| 0x21A112 | 0x21A112 Motordrehzahlbegrenzung, Stufe 2: infolge Notlaufanforderung vom EME-Notlaufmanager | 1 |
| 0x21A113 | 0x21A113 Motordrehzahlbegrenzung, Stufe 3: infolge Notlaufanforderung vom EME-Notlaufmanager | 1 |
| 0x21A117 | 0x21A117 Notlaufmanager: Anforderung Verbrennungsmotor Einschaltaufforderer von Steuergerät Elektromaschine | 1 |
| 0x21A118 | 0x21A118 Notlaufmanager: Anforderung Deaktivierung MSA von Steuergerät Elektromaschine | 1 |
| 0x21A119 | 0x21A119 Notlaufmanager: Anforderung Deaktivierung MSA mit Check-Control-Meldung von Steuergerät Elektromaschine | 1 |
| 0x21A11A | 0x21A11A Notlaufmanager: Anforderung Deaktivierung MSA mit Verbrennungsmotor Einschaltaufforderer von Steuergerät Elektromaschine | 1 |
| 0x21A11B | 0x21A11B Notlaufmanager: Anforderung Deaktivierung MSA mit Verbrennungsmotor Enschaltaufforderer und Check-Control-Meldung von Steuergerät Elektromaschine | 1 |
| 0x21A11C | 0x21A11C Notlaufmanager: Anforderung Verbrennungsmotor Einschaltverhinderer von Steuergerät Elektromaschine | 1 |
| 0x21A11D | 0x21A11D Notlaufmanager: Anforderung Verbrennungsmotor MSA Abschaltaufforderer von Steuergerät Elektromaschine | 1 |
| 0x21A11F | 0x21A11F Notlaufmanager: Anforderung Deaktivierung Anzeige verbrennungsmotorischen Reichweite von Steuergerät Elektromaschine | 1 |
| 0x21A120 | 0x21A120 Notlaufmanager: Anforderung elektrischer Notlauf von EGS | 1 |
| 0x21A121 | 0x21A121 Notlaufmanager: Anforderung Neutralschaltung von EGS | 1 |
| 0x21A122 | 0x21A122 Notlaufmanager: Anforderung Deaktivierung Zustarteinrichtung von Steuergerät Elektromaschine | 1 |
| 0x21A210 | 0x21A210 Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 0 |
| 0x21A310 | 0x21A310 Notlauf 1: Sammelfehler für DME Kopplung | 0 |
| 0x21A330 | 0x21A330 Notlauf 2: Sammelfehler für DME Kopplung | 0 |
| 0x21A350 | 0x21A350 Notlauf 3: Sammelfehler für DME Kopplung | 0 |
| 0x21A370 | 0x21A370 Notlauf 4: Sammelfehler für DME Kopplung | 0 |
| 0x21A372 | 0x21A372 Notlauf 5: Sammelfehler für DME Kopplung | 0 |
| 0x21A411 | 0x21A411 Pannendatenspeicher, Messwert: Adresse ungültig | 0 |
| 0x21A412 | 0x21A412 Pannendatenspeicher: Applikationsparameter ungültig | 0 |
| 0x21A413 | 0x21A413 Pannendatenspeicher: Applikation zur Laufzeit geändert | 0 |
| 0x21A414 | 0x21A414 Pannendatenspeicher, Messwert: Pointer ungültig | 0 |
| 0x21A415 | 0x21A415 Pannendatenspeicher, Messwert: Applikation ungültig | 0 |
| 0x21A416 | 0x21A416 Pannendatenspeicher: Fehlfunktion Speicherzugriff | 0 |
| 0x21A417 | 0x21A417 Pannendatenspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A418 | 0x21A418 Pannendatenspeicher, Header: Adresse ungültig | 0 |
| 0x21A419 | 0x21A419 Pannendatenspeicher, Header: Pointer ungültig | 0 |
| 0x21A41A | 0x21A41A Pannendatenspeicher, Header: Applikation ungültig | 0 |
| 0x21A430 | 0x21A430 Langzeitqualitätsspeicher: Fehlfunktion Speicherzugriff | 0 |
| 0x21A431 | 0x21A431 Langzeitqualitätsspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A432 | 0x21A432 Langzeitqualitätsspeicher, Messwert: Adresse ungültig | 0 |
| 0x21A433 | 0x21A433 Langzeitqualitätsspeicher: Applikation zur Laufzeit geändert | 0 |
| 0x21A434 | 0x21A434 Langzeitqualitätsspeicher, Messwert: Applikation ungültig | 0 |
| 0x21A500 | 0x21A500 Notlaufmanager: Anforderung Bauteileschutz Trennkupplung, Abschaltung Verbrennungsmotor | 1 |
| 0x21A501 | 0x21A501 Integrierte Anfahrkupplung: klemmt geschlossen | 1 |
| 0x21A502 | 0x21A502 Integrierte elektrische Getriebeölpumpe: Fehlfunktion | 1 |
| 0x21A503 | 0x21A503 Trennkupplung: klemmt geschlossen | 1 |
| 0x21A504 | 0x21A504 Trennkupplung: klemmt offen | 1 |
| 0x21A505 | 0x21A505 EGS: elektrischer Notlauf aktiv | 1 |
| 0x21A506 | 0x21A506 EGS: mechanischer Notlauf aktiv | 1 |
| 0x21A507 | 0x21A507 EGS: Reset | 1 |
| 0x21A510 | 0x21A510 Startsystem, Elektromaschine: Zeitüberschreitung | 0 |
| 0x21A511 | 0x21A511 Startsystem, Ritzelstarter: Zeitüberschreitung | 0 |
| 0x21A513 | 0x21A513 Startaggregat Startergenerator: Sammelfehler | 0 |
| 0x21B000 | 0x21B000 Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B001 | 0x21B001 Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B002 | 0x21B002 Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B003 | 0x21B003 Kraftstofftank Drucksensor/Temperaturfühler - Druck unplausibel (gemeldet vom TFM) | 1 |
| 0x21B004 | 0x21B004 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Druck zu hoch (gemeldet vom TFM) | 1 |
| 0x21B005 | 0x21B005 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Druck zu niedrig (gemeldet vom TFM) | 1 |
| 0x21B006 | 0x21B006 Kraftstofftank Drucksensor/Temperaturfühler Temperatur unplausibel (gemeldet vom TFM) | 1 |
| 0x21B007 | 0x21B007 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Untertemperatur (gemeldet vom TFM) | 1 |
| 0x21B008 | 0x21B008 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Übertemperatur (gemeldet vom TFM) | 1 |
| 0x21B009 | 0x21B009 Kraftstofftank Drucksensor/Temperaturfühler - Drucksignal festliegend (gemeldet vom TFM) | 1 |
| 0x21B00A | 0x21B00A Kraftstofftank Drucksensor/Temperaturfühler Temperatur unplausibel (gemeldet vom TFM) | 1 |
| 0x21B00B | 0x21B00B Tankentlüftungssystem Tankfunktionsmodul Zeitgeber - Fehlfunktion (gemeldet vom TFM) | 1 |
| 0x21B00C | 0x21B00C Tankentlüftungssystem - sehr kleines Leck entdeckt (gemeldet vom TFM) | 1 |
| 0x21B00D | 0x21B00D Tankabsperrventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B00E | 0x21B00E Tankabsperrventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B00F | 0x21B00F Tankabsperrventil Steuerkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B010 | 0x21B010 Tankabsperrventil - klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B011 | 0x21B011 Tankabsperrventil - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B012 | 0x21B012 Tankabsperrventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B013 | 0x21B013 Atmosphären Isolationsventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B014 | 0x21B014 Atmosphären Isolationsventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B015 | 0x21B015 Atmosphären Isolationsventil Steuerkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B016 | 0x21B016 Atmosphären Isolationsventil - klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B017 | 0x21B017 Atmosphären Isolationsventil - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B018 | 0x21B018 Atmosphären Isolationsventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B019 | 0x21B019 Tankklappe Positionssensor/-schalter Schaltkreis - Fehlfunktion oder  Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B01A | 0x21B01A Tankklappe Positionssensor/-schalter Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B01B | 0x21B01B Tankklappe Positionssensor/-schalter Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B01C | 0x21B01C Tankklappe - klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B01D | 0x21B01D Tankklappe - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B01E | 0x21B01E Tankklappe Positionssensor/-schalter Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B01F | 0x21B01F Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B020 | 0x21B020 Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B021 | 0x21B021 Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B022 | 0x21B022 Tankklappe Öffnungsanforderungssensor/-schalter - Leistungsproblem oder klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B023 | 0x21B023 Tankklappe Öffnungsanforderungssensor/-schalter - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B024 | 0x21B024 Tankklappe Verriegelungsteuerung - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B025 | 0x21B025 Tankklappe Verriegelungsteuerung Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B026 | 0x21B026 Tankklappe Verriegelungsteuerung Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B029 | 0x21B029 Tankklappe Verriegelungsteuerung Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x230008 | 0x230008 Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231501 | 0x231501 Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | 0x231502 Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231F04 | 0x231F04 A- und FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | 0x233004 FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 1 |
| 0x234709 | 0x234709 Flexray, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): Aliveprüfung | 0 |
| 0x234710 | 0x234710 Flexray, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): fehlt | 0 |
| 0x23471A | 0x23471A Flexray, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): Prüfsumme falsch | 0 |
| 0x234A05 | 0x234A05 A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): fehlt | 0 |
| 0x235410 | 0x235410 Notlaufmanager: Anforderung Leerlaufdrehzahlanhebung von Steuergerät Elektromaschine | 1 |
| 0x235805 | 0x235805 FlexRay, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): Signalfehler | 0 |
| 0xCD840A | 0xCD840A FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD841F | 0xCD841F FlexRay Bus: Kommunikationsfehler nach FlexRay Wake-up | 1 |
| 0xCD8420 | 0xCD8420 FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | 0xCD8486 A-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8801 | 0xCD8801 FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCD8BFF | 0xCD8BFF Netzwerkfehler: nur zum Test | 0 |
| 0xCD8E10 | 0xCD8E10 LIN Bus: Kommunikationsfehler | 1 |
| 0xCD8E11 | 0xCD8E11 LIN, Kommunikation (Ladeeinheit für Zusatzbatterie): fehlt | 0 |
| 0xCD8E12 | 0xCD8E12 LIN, Kommunikation (Generator): fehlt | 0 |
| 0xCD8F01 | 0xCD8F01 LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD8F10 | 0xCD8F10 LIN, Kommunikation (Startergenerator): fehlt | 0 |
| 0xCD9010 | 0xCD9010 LIN, Kommunikation (Motor-Kühlmittelpumpe): fehlt | 1 |
| 0xCD9203 | 0xCD9203 LIN, Kommunikation (Kühlerjalousie): fehlt | 0 |
| 0xCD9432 | 0xCD9432 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: fehlt | 1 |
| 0xCD9435 | 0xCD9435 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 1 |
| 0xCD9437 | 0xCD9437 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD9440 | 0xCD9440 FlexRay, Botschaft (Navigationsgraph, 253.3.4): fehlt | 0 |
| 0xCD9441 | 0xCD9441 FlexRay, Botschaft (Navigationsgraph Fahrspur, 137.1.2): fehlt | 0 |
| 0xCD9442 | 0xCD9442 FlexRay, Botschaft (Navigationsgraph Karten Daten, 258.3.4): fehlt | 0 |
| 0xCD9443 | 0xCD9443 FlexRay, Botschaft (Übereinstimmung Navigationsgraph, 254.0.4): fehlt | 0 |
| 0xCD9444 | 0xCD9444 FlexRay, Botschaft (Synchronisation Navigationsgraph, 254.1.4): fehlt | 0 |
| 0xCD9445 | 0xCD9445 FlexRay, Botschaft (Navigationsgraph Geschwindigkeit, 258.1.4): fehlt | 0 |
| 0xCD9446 | 0xCD9446 FlexRay, Botschaft (Navigation System Information, 277.6.8): fehlt  | 0 |
| 0xCD9447 | 0xCD9447 FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): Prüfsumme falsch | 0 |
| 0xCD9448 | 0xCD9448 FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): Aliveprüfung | 0 |
| 0xCD9449 | 0xCD9449 FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): fehlt | 0 |
| 0xCD944A | 0xCD944A Kommunikation: Signal (QU_ACLNX_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCD944B | 0xCD944B Kommunikation: Signal (QU_ACLNY_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCD9450 | 0xCD9450 FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): Prüfsumme falsch | 0 |
| 0xCD9451 | 0xCD9451 FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): Aliveprüfung | 0 |
| 0xCD9452 | 0xCD9452 FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): fehlt | 0 |
| 0xCD9453 | 0xCD9453 FlexRay, Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, 69.0.2): Prüfsumme falsch | 0 |
| 0xCD9454 | 0xCD9454 FlexRay, Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, 69.0.2): Aliveprüfung | 0 |
| 0xCD9455 | 0xCD9455 FlexRay, Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, 69.0.2): fehlt | 0 |
| 0xCD9456 | 0xCD9456 FlexRay, Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, 69.0.2): Prüfsumme falsch | 0 |
| 0xCD9457 | 0xCD9457 FlexRay, Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, 69.0.2): Aliveprüfung | 0 |
| 0xCD9458 | 0xCD9458 FlexRay, Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, 69.0.2): fehlt | 0 |
| 0xCD9462 | 0xCD9462 FlexRay, Botschaft (Vorgabe Drehmoment Betriebsstrategie, 94.1.2): fehlt | 0 |
| 0xCD9463 | 0xCD9463 FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): fehlt | 0 |
| 0xCD9464 | 0xCD9464 FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): fehlt | 0 |
| 0xCD9502 | 0xCD9502 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | 0xCD9504 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): fehlt | 1 |
| 0xCD9508 | 0xCD9508 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | 0xCD9602 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | 0xCD9604 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | 0xCD9608 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | 0xCD9702 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | 0xCD9704 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | 0xCD9708 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9710 | 0xCD9710 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik 2, 272.4.8): fehlt | 1 |
| 0xCD9730 | 0xCD9730 FlexRay, Botschaft (Daten Zusatzbatterie, 262.2.4): fehlt | 0 |
| 0xCD9902 | 0xCD9902 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | 0xCD9904 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | 0xCD9908 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | 0xCD9932 FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Aliveprüfung | 1 |
| 0xCD9933 | 0xCD9933 FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): fehlt | 1 |
| 0xCD9934 | 0xCD9934 FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Prüfsumme falsch | 1 |
| 0xCD9A02 | 0xCD9A02 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | 0xCD9A04 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | 0xCD9A08 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9B02 | 0xCD9B02 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Aliveprüfung | 1 |
| 0xCD9B04 | 0xCD9B04 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): fehlt | 1 |
| 0xCD9B08 | 0xCD9B08 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Prüfsumme falsch | 1 |
| 0xCD9C12 | 0xCD9C12 A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): fehlt, Sender EME | 0 |
| 0xCD9D02 | 0xCD9D02 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9D04 | 0xCD9D04 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9D08 | 0xCD9D08 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9E02 | 0xCD9E02 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9E04 | 0xCD9E04 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9E08 | 0xCD9E08 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9F02 | 0xCD9F02 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Aliveprüfung | 1 |
| 0xCD9F04 | 0xCD9F04 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): fehlt | 1 |
| 0xCD9F08 | 0xCD9F08 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Prüfsumme falsch | 1 |
| 0xCD9F11 | 0xCD9F11 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Signalfehler | 0 |
| 0xCD9F13 | 0xCD9F13 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Signalfehler | 1 |
| 0xCDA002 | 0xCDA002 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Aliveprüfung | 1 |
| 0xCDA004 | 0xCDA004 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 1 |
| 0xCDA008 | 0xCDA008 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Prüfsumme falsch | 1 |
| 0xCDA011 | 0xCDA011 FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): Aliveprüfung | 1 |
| 0xCDA012 | 0xCDA012 FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): fehlt | 1 |
| 0xCDA013 | 0xCDA013 FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): Prüfsumme falsch | 1 |
| 0xCDA102 | 0xCDA102 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xCDA104 | 0xCDA104 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xCDA108 | 0xCDA108 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xCDA204 | 0xCDA204 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA302 | 0xCDA302 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | 0xCDA304 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | 0xCDA308 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA310 | 0xCDA310 FlexRay, Botschaft (Daten Hybrid, 73.0.2): Aliveprüfung | 1 |
| 0xCDA311 | 0xCDA311 FlexRay, Botschaft (Daten Hybrid, 73.0.2): Prüfsumme falsch | 1 |
| 0xCDA312 | 0xCDA312 FlexRay, Botschaft (Daten Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA313 | 0xCDA313 FlexRay, Botschaft (Daten Hybrid, 73.0.2): Signalfehler | 1 |
| 0xCDA321 | 0xCDA321 FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): Signalfehler | 1 |
| 0xCDA322 | 0xCDA322 FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): fehlt | 1 |
| 0xCDA402 | 0xCDA402 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | 0xCDA404 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | 0xCDA408 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA421 | 0xCDA421 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | 0xCDA422 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | 0xCDA423 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA426 | 0xCDA426 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA428 | 0xCDA428 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Aliveprüfung | 1 |
| 0xCDA429 | 0xCDA429 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Prüfsumme falsch | 1 |
| 0xCDA432 | 0xCDA432 FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA435 | 0xCDA435 FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA451 | 0xCDA451 FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied, 49.0.2): fehlt | 1 |
| 0xCDA452 | 0xCDA452 FlexRay, Botschaft (Ist Kraft Zahnstange, 49.0.2): fehlt | 1 |
| 0xCDA491 | 0xCDA491 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCDA492 | 0xCDA492 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCDA493 | 0xCDA493 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCDA494 | 0xCDA494 FlexRay, Botschaft (Soll Bremsmoment Summe Koordiniert, 63.1.4): fehlt | 1 |
| 0xCDA498 | 0xCDA498 FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): Signalfehler | 1 |
| 0xCDA520 | 0xCDA520 FA-CAN, Botschaft (Status Drucktank, 0x2E7): fehlt | 0 |
| 0xCDA521 | 0xCDA521 FlexRay,Botschaft (Vorgabe Drehmoment Betriebsstrategie / Vorgabe Drehmoment | 0 |
| 0xCDA522 | 0xCDA522 Kommunikation: Signal (AVL_TORQ_MOT_TRCT) in FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): ausgefallen oder ungültig | 1 |
| 0xCDA523 | 0xCDA523 Kommunikation: Signal (ST_UNRU_DSC) in FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): ungültig | 1 |
| 0xCDA524 | 0xCDA524 FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDA525 | 0xCDA525 FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Signalfehler | 1 |
| 0xCDA526 | 0xCDA526 Kommunikation: Signal (AVL_TRGR_RW) in FlexRay, Botschaft (Neigung Fahrbahn / Lenkwinkel Vorderachse Effektiv, 56.1.2): ungültig | 1 |
| 0xCDA529 | 0xCDA529 Kommunikation: Signal (TORQ_MOT_1_CTRL_ITG) in A-CAN, Botschaft (Status Daten E-Motor 1, 0x29D): ungültig | 1 |
| 0xCDA52A | 0xCDA52A Kommunikation: Signal (ACLNX_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCDA52B | 0xCDA52B Kommunikation: Signal (ACLNY_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCDA52C | 0xCDA52C Kommunikation: Signal (AVL_LOGR_RW) in FlexRay, Botschaft (Neigung Fahrbahn / Lenkwinkel Vorderachse Effektiv, 56.1.2): ungültig | 1 |
| 0xCDA52D | 0xCDA52D Kommunikation: Signal (AVL_RQMT_HTFL) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA52E | 0xCDA52E Kommunikation: Signal (AVL_STEA_FTAX_WHL) in FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): ungültig | 1 |
| 0xCDA52F | 0xCDA52F Kommunikation: Signal (COU_(X)_NAVGRPH_2_EVT_PROFIL) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA530 | 0xCDA530 Kommunikation: Signal (COU_NAVGRPH_2_(X)_PROFIL) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA531 | 0xCDA531 Kommunikation: Signal (T_SEC_COU_REL) in FA-CAN, Botschaft (Relativzeit BN2020, 0x328): ungültig | 1 |
| 0xCDA532 | 0xCDA532 Kommunikation: Signal (DRAW_TORQ_CRSH_GRB) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA533 | 0xCDA533 Kommunikation: Signal (CTR_SNW) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA534 | 0xCDA534 Kommunikation: Signal (DISP_ECO_CON_2_HTCL_COOD) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA535 | 0xCDA535 Kommunikation: Signal (DISP_GR_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA536 | 0xCDA536 Kommunikation: Signal (DISP_RQ_GR_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA537 | 0xCDA537 Kommunikation: Signal (ST_CT_BTL) in FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): ungültig | 1 |
| 0xCDA538 | 0xCDA538 Kommunikation: Signal (ST_PURG_RDI) in FA-CAN, Botschaft (Status Drucktank, 0x2E7): ungültig | 1 |
| 0xCDA539 | 0xCDA539 Kommunikation: Signal (ST_ILK_STRT_GRB) in FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA53A | 0xCDA53A Kommunikation: Signal (ST_BLTB_SW_DR) in FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): ungültig | 1 |
| 0xCDA53B | 0xCDA53B FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): Prüfsumme falsch | 1 |
| 0xCDA53C | 0xCDA53C FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): Aliveprüfung | 1 |
| 0xCDA53D | 0xCDA53D FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): fehlt | 1 |
| 0xCDA53E | 0xCDA53E FlexRay, Botschaft (Temperatur_Bremse, 281.4.8): Aliveprüfung | 1 |
| 0xCDA53F | 0xCDA53F FlexRay, Botschaft (Temperatur_Bremse , 281.4.8): fehlt | 1 |
| 0xCDA540 | 0xCDA540 FlexRay, Botschaft (Teleservice Trigger Status, 279.4.8): fehlt | 1 |
| 0xCDA541 | 0xCDA541 Kommunikation: Signal (DIAG_OBD_HYB_1_MUX_IMME) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA542 | 0xCDA542 Kommunikation: Signal (DIAG_OBD_HYB_1_MUX_MAX) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA543 | 0xCDA543 Kommunikation: Signal (IDX_GRB_DYN) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA544 | 0xCDA544 Kommunikation: Signal (IDX_SEG_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4): ungültig | 1 |
| 0xCDA545 | 0xCDA545 Kommunikation: Signal ((X)_1_L_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA546 | 0xCDA546 Kommunikation: Signal ((X)_2_L_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA547 | 0xCDA547 Kommunikation: Signal ((X)_3_L_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA548 | 0xCDA548 Kommunikation: Signal (EVT_L_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA549 | 0xCDA549 Kommunikation: Signal (EVT_OFFS_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA54A | 0xCDA54A Kommunikation: Signal (L_SEG_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): ungültig | 1 |
| 0xCDA54B | 0xCDA54B Kommunikation: Signal (RT_OFFS_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4): ungültig | 1 |
| 0xCDA54C | 0xCDA54C Kommunikation: Signal (RNG) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA54D | 0xCDA54D Kommunikation: Signal (LIM_TORQ_CRSH_GRB_PROTE) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA54E | 0xCDA54E Kommunikation: Signal (MILE_KM) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA54F | 0xCDA54F Kommunikation: Signal (TAR_MOD_SHFT_DVCH) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA550 | 0xCDA550 Kommunikation: Signal (TAR_OPMO_PT_DRS) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): ungültig | 1 |
| 0xCDA551 | 0xCDA551 Kommunikation: Signal (MASS_VEH) in FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): ungültig | 1 |
| 0xCDA552 | 0xCDA552 Kommunikation: Signal (DISP_RPM_ENG_CRSH_GRB) in A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): ungültig | 1 |
| 0xCDA553 | 0xCDA553 Kommunikation: Signal (TAR_RPM_ENG_CRSH_GRB) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA554 | 0xCDA554 Kommunikation: Signal (QUAN_NAVGRPH_2_RAD_PROFIL) in FlexRay, Botschaft (Nav-Graph 2 Route Beschreibung, 253.0.8): ungültig | 1 |
| 0xCDA555 | 0xCDA555 Kommunikation: Signal (AVL_RPM_WHL_FLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA556 | 0xCDA556 Kommunikation: Signal (AVL_RPM_WHL_FRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA557 | 0xCDA557 Kommunikation: Signal (AVL_RPM_WHL_RLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA558 | 0xCDA558 Kommunikation: Signal (AVL_RPM_WHL_RRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA559 | 0xCDA559 Kommunikation: Signal (ST_OPMO_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA55A | 0xCDA55A Kommunikation: Signal (DISP_PRG_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA55B | 0xCDA55B Kommunikation: Signal (QU_FN_OBD_1_SEN_1_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55C | 0xCDA55C Kommunikation: Signal (QU_FN_OBD_1_SEN_2_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55D | 0xCDA55D Kommunikation: Signal (QU_FN_OBD_1_SEN_3_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55E | 0xCDA55E Kommunikation: Signal (QU_FN_OBD_1_SEN_4_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55F | 0xCDA55F Kommunikation: Signal (AVL_SETQ_EFAN_AIC) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA560 | 0xCDA560 Kommunikation: Signal (RQ_HTFL_AIC) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA561 | 0xCDA561 Kommunikation: Signal (RQ_COOL_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA562 | 0xCDA562 Kommunikation: Signal (RQ_GRB_DYNS_RPM_ENG) in A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): ungültig | 1 |
| 0xCDA563 | 0xCDA563 Kommunikation: Signal (ST_TORQ_COMPT_RISE) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA564 | 0xCDA564 Kommunikation: Signal (REIN_GRDT) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0xCDA565 | 0xCDA565 Kommunikation: Signal ((X)_1_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA566 | 0xCDA566 Kommunikation: Signal ((X)_2_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA567 | 0xCDA567 Kommunikation: Signal ((X)_3_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA568 | 0xCDA568 Kommunikation: Signal (QU_AVL_RPM_WHL_FLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA569 | 0xCDA569 Kommunikation: Signal (QU_AVL_RPM_WHL_FRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA56A | 0xCDA56A Kommunikation: Signal (QU_AVL_RPM_WHL_RLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA56B | 0xCDA56B Kommunikation: Signal (QU_AVL_RPM_WHL_RRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA56C | 0xCDA56C Kommunikation: Signal (QU_AVL_STEA_FTAX_WHL) in FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): ungültig | 1 |
| 0xCDA56D | 0xCDA56D Kommunikation: Signal (ST_CT_BON) in FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): ungültig | 1 |
| 0xCDA56E | 0xCDA56E Kommunikation: Signal (ST_BRG_DV) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): ungültig | 1 |
| 0xCDA570 | 0xCDA570 Kommunikation: Signal (QU_AVL_BRTORQ_SUM_DVCH) in FlexRay, Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4): ungültig | 1 |
| 0xCDA571 | 0xCDA571 Kommunikation: Signal (QU_AVL_BRTORQ_SUM) in FlexRay, Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4): ungültig | 1 |
| 0xCDA572 | 0xCDA572 Kommunikation: Signal (ST_OP_MSA) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA573 | 0xCDA573 Kommunikation: Signal (ST_STCD_PENG) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA574 | 0xCDA574 Kommunikation: Signal (ST_CCLT_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA575 | 0xCDA575 Kommunikation: Signal (ST_CCLT_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA576 | 0xCDA576 Kommunikation: Signal (ST_ILK_ERRM_FZM) in FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): ungültig | 1 |
| 0xCDA577 | 0xCDA577 Kommunikation: Signal (DISP_ECO_CON_HTCL_COOD) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA578 | 0xCDA578 Kommunikation: Signal (RQ_SU_SW_DRDY) in FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik / Konfiguration Schalter Fahrdynamik 2, 272.4.8): ungültig | 1 |
| 0xCDA579 | 0xCDA579 Kommunikation: Signal (ST_ENERG_FZM) in FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): ungültig | 1 |
| 0xCDA57A | 0xCDA57A Kommunikation: Signal (CTR_ENG_STOP) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA57B | 0xCDA57B Kommunikation: Signal (EVT_INFO_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA57C | 0xCDA57C Kommunikation: Signal (EVT_INFO_SRC_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA57D | 0xCDA57D Kommunikation: Signal (EVT_PRO_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA57E | 0xCDA57E Kommunikation: Signal (QU_FN_ABS) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): ungültig | 1 |
| 0xCDA57F | 0xCDA57F Kommunikation: Signal (QU_FN_ASC) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): ungültig | 1 |
| 0xCDA580 | 0xCDA580 Kommunikation: Signal (ST_FLLV_FUTA_SPAR) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA581 | 0xCDA581 Kommunikation: Signal (ST_GRCT) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA582 | 0xCDA582 Kommunikation: Signal (Com_stGbxFsHup_A_Sig_C) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA583 | 0xCDA583 Kommunikation: Signal (RQ_MIL_DIAG_OBD_GRB) in A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): ungültig | 1 |
| 0xCDA584 | 0xCDA584 Kommunikation: Signal (RQ_MIL_DIAG_OBD_GRB) in FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): ungültig | 1 |
| 0xCDA585 | 0xCDA585 Kommunikation: Signal (ST_VRS_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA586 | 0xCDA586 Kommunikation: Signal (ST_GRSEL_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA587 | 0xCDA587 Kommunikation: Signal (DISP_PO_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA588 | 0xCDA588 Kommunikation: Signal (ST_KL_KEY_VLD) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA589 | 0xCDA589 Kommunikation: Signal (ST_KL_KEY_VLD) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA58A | 0xCDA58A Kommunikation: Signal (QU_MASS_VEH) in FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): ungültig | 1 |
| 0xCDA58B | 0xCDA58B Kommunikation: Signal (NAVGRAPH_2_PRO_SHI) in FlexRay, Botschaft (Nav-Graph 2 Profil, 239.0.2): ungültig | 1 |
| 0xCDA58C | 0xCDA58C Kommunikation: Signal (NAVGRAPH_2_PRO_EVT) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA58D | 0xCDA58D Kommunikation: Signal (ST_PHTR_ENGSTA_DRV) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA58E | 0xCDA58E Kommunikation: Signal (CTR_CR_SWO_EKP) in FA-CAN, Botschaft (Steuerung Crashabschaltung EKP, 0x135): ungültig | 1 |
| 0xCDA58F | 0xCDA58F Kommunikation: Signal (CTR_SLP_BUS) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA590 | 0xCDA590 Kommunikation: Signal (CTR_FSL) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA591 | 0xCDA591 Kommunikation: Signal (DSTN_SLRDI_GLB) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA592 | 0xCDA592 Kommunikation: Signal (CTR_SLRDI_GLB) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA593 | 0xCDA593 Kommunikation: Signal (ST_SSP) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA594 | 0xCDA594 Kommunikation: Signal (ST_ILK_STRT_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA595 | 0xCDA595 Kommunikation: Signal (ST_KL) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA596 | 0xCDA596 Kommunikation: Signal (ST_RQ_TORQ_GRB) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA597 | 0xCDA597 Kommunikation: Signal (ST_LIM_STORQ_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA598 | 0xCDA598 Kommunikation: Signal (QU_TAR_WMOM_PT_SUM_STAB) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): ungültig | 1 |
| 0xCDA599 | 0xCDA599 Kommunikation: Signal (QU_AVL_STMOM_DV_ACT) in FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied / Ist Kraft Zahnstange, 49.0.2): ungültig | 1 |
| 0xCDA59A | 0xCDA59A Kommunikation: Signal (QU_TAR_2_WMOM_PT_SUM_DRS) in FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): ungültig | 1 |
| 0xCDA59B | 0xCDA59B Kommunikation: Signal (ST_GRLV_ACV_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA59C | 0xCDA59C Kommunikation: Signal (SU_DSC_WSS) in FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): ungültig | 1 |
| 0xCDA59D | 0xCDA59D Kommunikation: Signal (TYP_STREET_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): ungültig | 1 |
| 0xCDA59E | 0xCDA59E Kommunikation: Signal (ST_VEH_CON) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA59F | 0xCDA59F Kommunikation: Signal (ST_VEH_CON) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA601 | 0xCDA601 Kommunikation: Signal (QU_SER_REPAT_XTRQ_FTAX_BAX_ACT) in FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse / xDrive Stellglied Information, 19.3.4): ungültig | 1 |
| 0xCDA603 | 0xCDA603 Kommunikation: Signal (QU_AVL_REPAT_XTRQ_FTAX_BAX) in FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse / xDrive Stellglied Information, 19.3.4): ungültig | 1 |
| 0xCDA605 | 0xCDA605 Kommunikation: Signal (ST_RSTA_2) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA606 | 0xCDA606 Kommunikation: Signal (ST_GR_BAC) in FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): ungültig | 1 |
| 0xCDA607 | 0xCDA607 Kommunikation: Signal (AVL_REPAT_XTRQ_FTAX_BAX) in FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse / xDrive Stellglied Information, 19.3.4): ungültig | 1 |
| 0xCDA609 | 0xCDA609 Kommunikation: Signal (ST_VEHSS_PBRK) in FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): ungültig | 1 |
| 0xCDA60A | 0xCDA60A Kommunikation: Signal (ST_VEHSS) in FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): ungültig | 1 |
| 0xCDA60B | 0xCDA60B Kommunikation: Signal (LIM_V_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): ungültig | 1 |
| 0xCDA60C | 0xCDA60C Kommunikation: Signal (QU_V_VEH_COG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug / Geschwindigkeit Fahrzeug 2, 55.3.4): ungültig | 1 |
| 0xCDA60D | 0xCDA60D Kommunikation: Signal (CTR_RDI_AIC) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA60E | 0xCDA60E Kommunikation: Signal (TEMP_EX) in FA-CAN, Botschaft (Außentemperatur, 0x2CA): ungültig | 1 |
| 0xCDA60F | 0xCDA60F Kommunikation: Signal (TEMP_EX_UNFILT) in FA-CAN, Botschaft (Außentemperatur, 0x2CA): ungültig | 1 |
| 0xCDA610 | 0xCDA610 Kommunikation: Signal (TEMP_TROI) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA611 | 0xCDA611 Kommunikation: Signal (AVL_TORQ_ACCM) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA612 | 0xCDA612 Kommunikation: Signal (AVL_BRTORQ_SUM_DVCH) in FlexRay, Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4): ungültig | 1 |
| 0xCDA613 | 0xCDA613 Kommunikation: Signal (TORQ_COMPT_RISE) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA614 | 0xCDA614 Kommunikation: Signal (LSS_TORQ_OUT_GRB) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0xCDA615 | 0xCDA615 Kommunikation: Signal (TAR_TORQ_CRSH_SLOW) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA616 | 0xCDA616 Kommunikation: Signal (TAR_WMOM_PT_SUM_STAB_FAST) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): ungültig | 1 |
| 0xCDA617 | 0xCDA617 Kommunikation: Signal (TAR_WMOM_PT_SUM_STAB) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): ungültig | 1 |
| 0xCDA618 | 0xCDA618 Kommunikation: Signal (AVL_STMOM_DV_ACT) in FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied / Ist Kraft Zahnstange, 49.0.2): ungültig | 1 |
| 0xCDA619 | 0xCDA619 Kommunikation: Signal (TAR_2_WMOM_PT_SUM_DRS) in FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): ungültig | 1 |
| 0xCDA61A | 0xCDA61A Kommunikation: Signal (UN_PWR_S_MOD) in FlexRay, Botschaft (Einheiten BN2020, 252.0.4): ungültig | 1 |
| 0xCDA61B | 0xCDA61B Kommunikation: Signal (UN_TORQ_S_MOD) in FlexRay, Botschaft (Einheiten BN2020, 252.0.4): ungültig | 1 |
| 0xCDA61C | 0xCDA61C Kommunikation: Signal (V_VEH_COG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug / Geschwindigkeit Fahrzeug 2, 55.3.4): ungültig | 1 |
| 0xCDA61D | 0xCDA61D Kommunikation: Signal (FLLV_FUTA) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA61E | 0xCDA61E Kommunikation: Signal (FLLV_FUTA_LH) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA61F | 0xCDA61F Kommunikation: Signal (FLLV_FUTA_RH) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA620 | 0xCDA620 Kommunikation: Signal (VYAW_VEH) in FlexRay, Botschaft (Daten Fahrdynamiksensor Erweitert / Giergeschwindigkeit Fahrzeug, 56.0.2): ungültig | 1 |
| 0xCDA62A | 0xCDA62A Kommunikation: Signal (AVL_COL_TEMP_ENGMG_EL) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA62B | 0xCDA62B Kommunikation: Signal (AVL_OPMO_MOT_1) in A-CAN, Botschaft (Status Daten E-Motor 1, 0x29D): ungültig | 1 |
| 0xCDA62C | 0xCDA62C Kommunikation: Signal (AVL_PWR_DOCTR_HV_BN) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA62D | 0xCDA62D Kommunikation: Signal (AVL_PWR_HV_BN) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA62E | 0xCDA62E Kommunikation: Signal (AVL_TEMP_CHGE) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA62F | 0xCDA62F Kommunikation: Signal (CHGCOND_HVSTO) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): ungültig | 1 |
| 0xCDA630 | 0xCDA630 Kommunikation: Signal (CHGCOND_HVSTO_DELTA) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): ungültig | 1 |
| 0xCDA631 | 0xCDA631 Kommunikation: Signal (CHL_VRFD_AVL_DT_SRT_MOT_1) in A-CAN, Botschaft (Abgesichert Ist Daten Kurzzeit E-Motor 1, 0xCD): ungültig | 1 |
| 0xCDA632 | 0xCDA632 Kommunikation: Signal (FRSG_FN_DRVG_CYC) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA633 | 0xCDA633 Kommunikation: Signal (GRB_2_IN_RPM_MAX) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA634 | 0xCDA634 Kommunikation: Signal (PCN_TORQ_MAX_MOT_1_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA635 | 0xCDA635 Kommunikation: Signal (PCN_TORQ_MAX_MOT_TRCT_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA636 | 0xCDA636 Kommunikation: Signal (PCN_TORQ_MIN_MOT_1_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA637 | 0xCDA637 Kommunikation: Signal (PCN_TORQ_MIN_MOT_TRCT_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA638 | 0xCDA638 Kommunikation: Signal (RLS_RSTA_EGS) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA639 | 0xCDA639 Kommunikation: Signal (RLS_TYP_ENGSTA_MOT_TRCT) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA63A | 0xCDA63A Kommunikation: Signal (RQ_CENG_PWRD_DRV_ELC) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA63B | 0xCDA63B Kommunikation: Signal (RQ_CHGCOND_HVSTO_MAX) in A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): ungültig | 1 |
| 0xCDA63C | 0xCDA63C Kommunikation: Signal (RQ_CHGCOND_HVSTO_MIN) in A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): ungültig | 1 |
| 0xCDA63D | 0xCDA63D Kommunikation: Signal (RQ_OPMO_HYM_HVSTO) in A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): ungültig | 1 |
| 0xCDA63E | 0xCDA63E A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): Prüfsumme flasch | 1 |
| 0xCDA63F | 0xCDA63F A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): Aliveprüfung | 1 |
| 0xCDA640 | 0xCDA640 A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): fehlt | 1 |
| 0xCDA641 | 0xCDA641 FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): Prüfsumme falsch | 1 |
| 0xCDA642 | 0xCDA642 FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): Aliveprüfung | 1 |
| 0xCDA643 | 0xCDA643 FA-CAN, Botschaft (Status Drucktank, 0x2E7): Prüfsumme falsch | 1 |
| 0xCDA644 | 0xCDA644 FA-CAN, Botschaft (Status Drucktank, 0x2E7): Aliveprüfung | 1 |
| 0xCDA645 | 0xCDA645 FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): fehlt | 1 |
| 0xCDA646 | 0xCDA646 Kommunikation: Signal (TAR_PO_GRB) in FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): ungültig | 1 |
| 0xCDA647 | 0xCDA647 Kommunikation: Signal (AVL_DIRRT_MOT_TRCT) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA648 | 0xCDA648 Kommunikation: Signal (AVL_OPMO_MOT_TRCT) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA649 | 0xCDA649 Kommunikation: Signal (AVL_RPM_MOT_TRCT) in FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): ungültig | 1 |
| 0xCDA64A | 0xCDA64A Kommunikation: Signal (ENERG_BN_RDI_DRVG) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA64B | 0xCDA64B Kommunikation: Signal (RLS_OVLD_MOT_TRCT) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA64C | 0xCDA64C Kommunikation: Signal (RQ_EMMOD_HYB_2_ENGMG_EL) in FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): ungültig | 1 |
| 0xCDA64D | 0xCDA64D Kommunikation: Signal (RQ_EMMOD_HYB_3_ENGMG_EL) in FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): ungültig | 1 |
| 0xCDA64E | 0xCDA64E Kommunikation: Signal (RQ_MIL_DIAG_OBD_DRDY) in FlexRay, Botschaft (Steuerung Diagnose OBD Fahrdynamik, 247.0.2): ungültig | 1 |
| 0xCDA64F | 0xCDA64F Kommunikation: Signal (SPEC_DYNMC_GRB_2) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA650 | 0xCDA650 Kommunikation: Signal (ST_CHGNG_HV_PWMG) in FlexRay, Botschaft (Status DCDC, 125.0.2): ungültig | 1 |
| 0xCDA651 | 0xCDA651 Kommunikation: Signal (ST_INFO_GRB_2) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA652 | 0xCDA652 FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): Prüfsumme falsch | 1 |
| 0xCDA653 | 0xCDA653 FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): Aliveprüfung | 1 |
| 0xCDA654 | 0xCDA654 Kommunikation: Signal (ST_PSBTY_ENGSTA_ENGSTP) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA655 | 0xCDA655 Kommunikation: Signal (ST_RLS_WISH_MOM_OBD) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA656 | 0xCDA656 Kommunikation: Signal (V_VEH_MAX) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA657 | 0xCDA657 Kommunikation: Signal (AVL_I_LV_DCDC_CNV) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA658 | 0xCDA658 Kommunikation: Signal (AVL_CUTIL_PCU) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA659 | 0xCDA659 Kommunikation: Signal (TAR_U_LDREL) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA65A | 0xCDA65A Kommunikation: Signal (PRIO_TAR_U_LDREL) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA65B | 0xCDA65B Kommunikation: Signal (RQ_DRVG_RDI) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA65C | 0xCDA65C Kommunikation: Signal (ST_DCDC_CNV) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA65D | 0xCDA65D Kommunikation: Signal (RQ_MIL_DIAG_OBD_ENGMG_EL) in A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): ungültig | 1 |
| 0xCDA65E | 0xCDA65E Kommunikation: Signal (RQ_IDLG_CLCTR) in FlexRay, Botschaft (Daten Hybrid, 73.0.2): ungültig | 1 |
| 0xCDA65F | 0xCDA65F Kommunikation: Signal (RQ_EMMOD_HYB_ENGMG_EL) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA660 | 0xCDA660 Kommunikation: Signal (RQ_PAIC) in FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): ungültig | 1 |
| 0xCDA661 | 0xCDA661 Kommunikation: Signal (AVL_TEMP_DCDC_CNV) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA662 | 0xCDA662 Kommunikation: Signal (AVL_TEMP_MOT_TRCT) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA663 | 0xCDA663 Kommunikation: Signal (AVL_TEMP_PWOSTG_ENGMG_EL) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA664 | 0xCDA664 Kommunikation: Signal (TAR_WMOM_PT_SUM_RECUP) in FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): ungültig | 1 |
| 0xCDA702 | 0xCDA702 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | 0xCDA704 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | 0xCDA708 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | 0xCDA804 FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDAB04 | 0xCDAB04 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | 0xCDAC04 FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | 0xCDAD04 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAE04 | 0xCDAE04 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | 0xCDAF04 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB204 | 0xCDB204 FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB302 | 0xCDB302 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Aliveprüfung | 1 |
| 0xCDB304 | 0xCDB304 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB308 | 0xCDB308 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Prüfsumme falsch | 1 |
| 0xCDB404 | 0xCDB404 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | 0xCDB504 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | 0xCDB602 FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | 0xCDB604 FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | 0xCDB608 FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | 0xCDB804 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDBA04 | 0xCDBA04 FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA10 | 0xCDBA10 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xCDBA11 | 0xCDBA11 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xCDBA12 | 0xCDBA12 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xCDBA13 | 0xCDBA13 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xCDBA14 | 0xCDBA14 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xCDBA15 | 0xCDBA15 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xCDBA17 | 0xCDBA17 FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): fehlt | 1 |
| 0xCDBB02 | 0xCDBB02 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | 0xCDBB04 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | 0xCDBB08 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBB09 | 0xCDBB09 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Signalfehler | 1 |
| 0xCDBB10 | 0xCDBB10 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xCDBB11 | 0xCDBB11 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xCDBB12 | 0xCDBB12 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xCDBC20 | 0xCDBC20 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Aliveprüfung | 1 |
| 0xCDBC21 | 0xCDBC21 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Prüfsumme falsch | 1 |
| 0xCDBC22 | 0xCDBC22 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): fehlt | 1 |
| 0xCDBC23 | 0xCDBC23 A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt, Sender EME | 1 |
| 0xCDBE02 | 0xCDBE02 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | 0xCDBE04 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBF04 | 0xCDBF04 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDC004 | 0xCDC004 A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | 0xCDC102 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | 0xCDC104 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | 0xCDC108 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC109 | 0xCDC109 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Signalfehler | 1 |
| 0xCDC120 | 0xCDC120 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Aliveprüfung | 1 |
| 0xCDC121 | 0xCDC121 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Prüfsumme falsch | 1 |
| 0xCDC122 | 0xCDC122 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): fehlt | 1 |
| 0xCDC123 | 0xCDC123 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Signalfehler | 1 |
| 0xCDC202 | 0xCDC202 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC203 | 0xCDC203 A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 1 |
| 0xCDC204 | 0xCDC204 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC205 | 0xCDC205 Kommunikation: Signal (ST_ABM_EAX) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDC208 | 0xCDC208 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC311 | 0xCDC311 A-CAN, Botschaft (Messbotschaft EGS, 0x786): fehlt | 1 |
| 0xCDF209 | 0xCDF209 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Signalfehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4205 | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4300 | Motor-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4306 | Bestätigte Solldrehzahl elektr. Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | Statusmeldung elektr. Wasserpumpe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4308 | EWAPU Volumenstrom soll (gesamt) | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4310 | Solltemperatur Kühlmittel | - | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4402 | Oeltemperatur nach Filter | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x4403 | Kraftstoffverbrauch seit letztem Ölwechsel | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x440B | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4420 | Eingangstemperatur Poel_reg | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4421 | Öldruckregler P-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4422 | Öldruckregler I-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4423 | Öldruckregler D-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4426 | Ist-Betriebsart Öldruck Regelung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4427 | Rückmeldung auf Anfrage zur Oelniveaumessung bitcodiert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4428 | Schalter S_POELFUNC_ON | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4429 | Anforderung Detailmessung Ölniveau Ausgangsgröße | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x442B | Kodierparameter Antriebsart (0=keine Kodierung, 1 = Heck, 2=Allrad, 3=Front) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442C | Rohwert Öl- Niveau | mm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442D | Korrigiertes Niveau aus TP in MinErk | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442E | Niv- Mittelwert QntMssg | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442F | ABK Schnittstelle Öl- Niveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4430 | LSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4431 | MSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4432 | Status des ÖNS- Komponententreibers | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4433 | Status des ÖNS- Sensors | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4434 | Bedingung Niveaumessfehler vom Ölzustandssensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4500 | Bedingung drehende Kurbelwelle erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4501 | VVT Excenterwellenadaptionswert | - | - | signed integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4502 | Zylinderzahl aktuelle Variante | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4505 | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4506 | Einlassnockenwellenposition | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4507 | Auslassnockenwellenposition | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x450C | Kurbelwellenadaption Einlass erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450D | Kurbelwellenadaption Auslass erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450E | [0] Kurbelwellennullpunktverschiebung in Grad für Winkelversatzdiagnose | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4510 | VVT-Lageregler, bleibende Abweichung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4511 | VVT-Lageregelung, Schwingung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4512 | VVT überlastet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4513 | VVT-Überlastung, klemmender Steller | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4514 | VVT-Adaption möglich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4515 | Anforderung, VVT-Anschlaglernen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4516 | Status VVT-Anschlaglernen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4517 | [0] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 0 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4518 | [1] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4519 | [2] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 2 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451A | [3] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 3 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451B | [4] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 4 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451C | [5] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 5 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451D | Gesamtzeit VVT-Performancetest | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x451E | Stromsumme VVT-Performancetest | A | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4520 | Effektive Motorleistung | - | - | unsigned integer | - | 0,0152587890625 | 1 | 0,0 |
| 0x4521 | Kraftstoffmassenstrom | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4522 | [0] Kraftstoffmasse homogen als Sollwert 0 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4523 | [3] Kraftstoffmasse homogen als Sollwert 1 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4524 | [6] Kraftstoffmasse homogen als Sollwert 2 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4525 | [9] Kraftstoffmasse homogen als Sollwert 3 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x452A | Sollwert Auslassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452B | Sollwert Einlassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452C | Istwert Auslaßspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452E | Istwert Einlaßspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4530 | [0] Aktueller Einspritzmodus, Zylinder 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4531 | [1] Aktueller Einspritzmodus, Zylinder 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4532 | [2] Aktueller Einspritzmodus, Zylinder 3 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4533 | [3] Aktueller Einspritzmodus, Zylinder 4 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4536 | [0] Regelabweichung des Ladedruckreglers - bankspezifisch Bank 1 | hPa | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4600 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x4601 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4604 | Generatorstrom | A | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4605 | Chipversion E-Maschine 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x460A | momentane Batteriespannung | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460C | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | - | unsigned integer | - | 0,02348100021481514 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460E | Abstand zur Startfähigkeit | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460F | DF-Monitor für Batterie-Ladezustand in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4610 | Status Ansteuerung E-Lüfter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4611 | Status Ansteuerung Zusatzlüfter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4612 | Bedingung Lüfterfreigabe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4614 | Bedingung Zusatzlüfterfreigabe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4615 | Grenzerregerstrom E-Maschine 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x4616 | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | Abgenommenes Generatormoment | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461B | Drehzahlschwelle für LR-Funktion E-Maschine 1 | 1/min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4650 | Getriebetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4651 | Tastverhältnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4680 | Leerlaufdrehzahl gelernt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4681 | Bereitschaft Getriebe Neutralposition anlernen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4700 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x4704 | Lambdasoll Begrenzung (word) | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x4710 | Umgebungsdruck beim Abstellen für die Leckdiagnose | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4711 | Anzahl erkannte Feinstleck durch Diagnose | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4712 | Anzahl dichtes EVAP-System erkannt durch Diagnose | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4713 | Zähler Leckdiagnose nicht durchgeführt  aufgrund Umgebungs- | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4714 | NVLD: Zähler EngineOff Schalterdiagnose mit Fehler | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4715 | NVLD: Zähler EngineOff Schalterdiagnose ohne Fehler | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4716 | NVLD: EngineOff Schalterdiagnose 5 deg. C Bedingung erfüllt | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4800 | Bedingung Kupplungspedal betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Schalter Kupplung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Bedingung umschalten auf KFPEDS | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Bedingung für Kompressoreinschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Schalter Klemme 50 von CAN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4807 | Motordrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4808 | Leerlaufsolldrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4809 | Bedingung Leerlaufregelung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480B | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x480C | Sollwert Füllung des Momentenmanagers | % | - | unsigned integer | - | 0,0234375 | 1 | 0,0 |
| 0x480D | Fahrbahnlängsneigung (geschätzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x480E | Qualifier Fahrbahnlängsneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x480F | Qualifier Fahrbahnquerneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4810 | Fahrbahnquerneigung (geschätzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x4811 | Fahrzeuglängsbeschleunigung | m/s^2 | - | signed char | - | 0,21699999272823334 | 1 | 0,0 |
| 0x4812 | Fahrzeugquerbeschleunigung | m/s^2 | - | signed integer | - | 0,0015625000232830644 | 1 | 0,0 |
| 0x4813 | Bedingung Powerfail | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4880 | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4881 | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4890 | Tprot-Status auslesen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A02 | ATL-Leckagediagnose läuft | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A17 | Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A1B | Elektrische Kraftstoffpumpe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A1D | Spannung Bremsenunterdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A21 | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4A2B | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4A2D | Saugrohr-Absolutdruck gemessen | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4A30 | [0] Laufunruhe Zylinder 1 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A31 | [1] Laufunruhe Zylinder 2 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A32 | [2] Laufunruhe Zylinder 3 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A33 | [3] Laufunruhe Zylinder 4 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A36 | Bedingung für erkannte Klopfer | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A37 | [0] normierter Referenzpegel Klopfregelung Zylinder 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A38 | [1] normierter Referenzpegel Klopfregelung Zylinder 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A39 | [2] normierter Referenzpegel Klopfregelung Zylinder 3 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A3A | [3] normierter Referenzpegel Klopfregelung Zylinder 4 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A49 | [0] Ausgegebener Zündwinkel 1 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A4A | [1] Ausgegebener Zündwinkel 2 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A4C | [2] Ausgegebener Zündwinkel 3 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A4D | [3] Ausgegebener Zündwinkel 4 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A52 | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A54 | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A56 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A60 | Bedingung Bremslichtschalter betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A61 | Bedingung Bremstestschalter betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A65 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
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
| 0x4A93 | Fehlerzähler für Lernen Nullgang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A94 | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4A95 | [0] Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4A96 | [0] Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4A97 | Bedi. Vanos Einlass im Anschlag | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A99 | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A9D | multiplikative Gemischkorrektur der Gemischadaption | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4AA1 | Zyklusflag: Tankentlüftungsventil Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AA4 | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AAA | Tastverhältnis PWM Ansteuerung Öldruck | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AAB | Tastverhältnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AB0 | Ladedruck- Sollwert | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4AB1 | Fahrzeuggeschwindigkeit | km/h | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| 0x4AB3 | Zähler für gefahrene Kilometer mit MIL EIN | km | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4AB4 | sekundengenauer Betribsstundenzähler als 32 Bitwert | s | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4AB8 | Spannung Drucksensor Saugrohrdruck (word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABC | Luftmassenfluss gefiltert (Word) | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4ABD | Bedingung automatischer Start | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AC2 | Reset Information  | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ACC | Luftklappe - Sollposition in Schritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4ACD | Luftklappe - Istposition in Schritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AD0 | Luftklappe - Diagnosestatus allgemein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD1 | Luftklappe - Diagnosestatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD2 | Luftklappe - Status obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD3 | Luftklappe - Status untere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD4 | Luftklappe - Varianteninfo vom Steller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD5 | Kraftstofftemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4AD6 | Bedingung Schubabschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
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
| 0x4B23 | [0] Zähler Aussetzerkennung Zylinder 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B24 | [1] Zähler Aussetzerkennung Zylinder 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B25 | [2] Zähler Aussetzerkennung Zylinder 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B30 | [3] Zähler Aussetzerkennung Zylinder 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x5802 | CARB FREEZE FRAME Byte, Bank 1, für LR | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x580A | RIS-Sensor LIN (EAC-Sensor)-Temperaturwert | Grad C | - | unsigned integer | - | 0,09375 | 1 | 5,0 |
| 0x580B | Saugrohr-Absolutdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,25 | 1 | 0,0 |
| 0x580E | Zündwinkel Zylinder 1 | Grad KW | - | signed char | - | 0,75 | 1 | 0,0 |
| 0x580F | Ansaugluft-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5810 | Aktualität Minimumwarnung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5811 | Motorölniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
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
| 0x581F | Kilometerstand bei der Erkennung Ölniveau am Minimum | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5820 | STATUS Klemme 15 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5821 | Steuergerätetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5822 | Öltemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -60,0 |
| 0x5823 | Abstellzeit | s | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5824 | Aktueller Fehlerstatus E-Maschine | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5825 | Spannung von BCU gemessen | V | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x582E | Modellierte 8HP-Getriebeöltemperatur am Wandleraustritt im Falle mech./elekr. Notprogramm | Grad C | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5832 | Zustand Motor-Koordinator | 0-n | - | 0xFF | CoEng_st_COMPU_VERB | 1 | 1 | 0 |
| 0x5833 | Status relatives Motorölniveau über Minimum | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
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
| 0x5843 | Bedingung Startanforderung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x584A | aktueller Generatorstatus | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5851 | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5854 | Batterietemperatur vom IBS | deg C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5862 | Sollwert Öldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5865 | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Relativer Füllstand des Motoröls | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information über CAN | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586E | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5871 | Zähler Prüfzustand für VVT Endstufenprüfung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5877 | Rotorposition VVT-Motor | ° | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x587B | Soll-Bestromung VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x587E | Motortemperatur-Referenzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5883 | [0] Referenzpegel Klopfregelung, 16 bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5885 | [2] Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5886 | [3] Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| 0x5888 | [5] Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x588B | Zeit nach Startende | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x588C | Keramiktemperatur der LSU | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5890 | Kühlerauslasstemperatur lesen | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x5892 | Differenz zwischen Umgebungsdruck und  Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589A | Tastverhältnis Nullgangsensor | % | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x589B | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589D | Anzahl erkannter VVT Lageregelungsfehler | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x589E | Sollwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x589F | Batterietemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A4 | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irreversibel | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A5 | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversibel | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A6 | Rel. Exzenterwinkel | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58AC | Klemmenspannung E-Maschine | V | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | Zähler für Lerndauer eines Lernsteps der Drosselklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BF | Bedingung Powerfail EEPROM | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
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
| 0x58CD | Spannung hinter VVT/Motor-Relais | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CF | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | - | signed integer | - | 0,0625 | 1 | 0,0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58D1 | Motortemperatur beim Abstellen | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D2 | Luftklappe - Sollposition in Grad | - | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| 0x58D3 | Luftklappe - Istposition in Grad | - | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D6 | Transition Time O2Sensor Lean2Rich (Sensor2) | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58DF | Transition Time O2Sensor Rich2Lean (Sensor2) | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58E5 | [0] Gefilterte Funkenbrenndauer Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E6 | [1] Gefilterte Funkenbrenndauer Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E7 | [2] Gefilterte Funkenbrenndauer Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E8 | [3] Gefilterte Funkenbrenndauer Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E9 | Versorgungsspannung elektr. Wasserpumpe | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Istdrehzahl elektr. Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | überprüfte Umgebungstemperatur vom CAN-Kombi | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58EC | Elektroniktemperatur elektr. Wasserpumpe | Grad C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Stromaufnahme elektr. Wasserpumpe | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EE | modellierte Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F1 | Zähler für unplausible fsr_w Werte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F2 | Tastverhältnis Mengensteuerventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58F9 | Typ E-Maschine 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x58FB | Delta Sondenoffset Führungsregelung | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58FE | Fehlercode SWT-Freischaltcode | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5900 | Gefiltertes zusätzlicher Sondendelay Mager-Fett, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5901 | Gefiltertes zusätzlicher Sondendelay Fett-Mager, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5904 | [1] IBS Status-/Fehlerbyte 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5905 | [2] IBS Status-/Fehlerbyte 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5910 | Sollwert E-Pumpe Abgasturbolader | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5911 | Sollwert E-Pumpe Allgemeine Antriebselektronik | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5912 | Sollwert E-Pumpe Ladeluftkühlung | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5913 | Status elektrische Pumpe Abgasturbolader | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5914 | Status elektrische Pumpe Allgemeine Antriebselektronik | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5915 | Status elektrische Pumpe Ladeluftkühlung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5916 | Relativer Ladezustand NV Batterie auslesen | % | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x5917 | Status DCDC-Wandler auslesen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5918 | Auslastung DCDC-Wandler auslesen | % | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x5919 | Fehlerstatus E-Maschine | hex | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x592A | Motordrehzahl, hochaufgelöst | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x592B | Pulsbreite DGI-Sensor min | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592C | Pulsbreite DGI-Sensor max | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592D | KW-Winkelversatz im Motorstart | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592E | Motorabstellposition | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592F | Status Synchronisationsmodul | 0-n | - | 0xFF | Epm_stSync_State_t | 1 | 1 | 0 |
| 0x5930 | Istwert Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned integer | - | 2,0 | 1 | 0,0 |
| 0x5932 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5934 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5935 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5936 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5937 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000000 | 000000 FehlerOrt nicht bedatet | 0 |
| 0x021200 | 0x021200 Energiesparmode aktiv | 0 |
| 0x02FF12 | 0x02FF12 Fehlerspeichereintrag: nur zum Test | 0 |
| 0x100001 | 0x100001 Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | 0x100101 Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | 0x100201 Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100A04 | 0x100A04 Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x101001 | 0x101001 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101002 | 0x101002 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | 0x101201 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | 0x101202 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101401 | 0x101401 Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | 0x101402 Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | 0x101408 Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | 0x101410 Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 1 |
| 0x101C08 | 0x101C08 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101F01 | 0x101F01 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x101F02 | 0x101F02 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x102001 | 0x102001 Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | 0x102002 Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102A01 | 0x102A01 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A22 | 0x102A22 Luftmassenmesser, Arbeitsbereich: Luftmasse zu hoch | 0 |
| 0x102A32 | 0x102A32 Luftmassenmesser, Arbeitsbereich: Luftmasse zu niedrig | 0 |
| 0x102A42 | 0x102A42 Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß | 0 |
| 0x102A52 | 0x102A52 Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig | 0 |
| 0x102E10 | 0x102E10 DME, interner Fehler, Luftmassenmesser: Leitungsunterbrechung Standby-Schalter | 0 |
| 0x103001 | 0x103001 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | 0x103002 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103004 | 0x103004 Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103008 | 0x103008 Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103101 | 0x103101 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | 0x103102 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103104 | 0x103104 Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x103108 | 0x103108 Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x103308 | 0x103308 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x10351C | 0x10351C Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104301 | 0x104301 Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104302 | 0x104302 Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104320 | 0x104320 Absolutdrucksensor, Saugrohr, Arbeitsbereich: Druck zu hoch | 0 |
| 0x104401 | 0x104401 Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104402 | 0x104402 Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104B01 | 0x104B01 Absolutdrucksensor, Saugrohr: Sammelfehler | 0 |
| 0x105001 | 0x105001 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x105002 | 0x105002 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x105201 | 0x105201 Umgebungsdrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x105202 | 0x105202 Umgebungsdrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x105A30 | 0x105A30 Umgebungsdrucksensor: Sammelfehler | 0 |
| 0x105A40 | 0x105A40 Umgebungsdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x105A41 | 0x105A41 Umgebungsdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x105A42 | 0x105A42 Umgebungsdruck, Arbeitsbereich: Druck unplausibel | 0 |
| 0x105A43 | 0x105A43 Umgebungsdruck, Arbeitsbereich: Druck unplausibel | 0 |
| 0x107801 | 0x107801 Tuningschutz: Luftmasse zu hoch | 0 |
| 0x107A50 | 0x107A50 Drosselklappe: Notlauf aktiv | 0 |
| 0x107A70 | 0x107A70 Drosselklappe, Ansteuerung: Kurzschluss | 0 |
| 0x107A71 | 0x107A71 Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | 0x107A72 DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler | 0 |
| 0x107A73 | 0x107A73 Drosselklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x107A80 | 0x107A80 Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | 0x107A81 Drosselklappe, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A90 | 0x107A90 Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | 0x107A91 Drosselklappe, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107AE0 | 0x107AE0 Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x108001 | 0x108001 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | 0x108002 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108208 | 0x108208 Ansauglufttemperatur: Signal, festliegend | 0 |
| 0x108920 | 0x108920 Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108930 | 0x108930 Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108932 | 0x108932 Ansauglufttemperatursensor: Sammelfehler | 0 |
| 0x108A01 | 0x108A01 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | 0x108A02 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A05 | 0x108A05 Ladelufttemperatursensor, Arbeitsbreich: Temperatur zu hoch | 0 |
| 0x108A10 | 0x108A10 Ladelufttemperatursensor, Spannungsänderung: zu schnell | 0 |
| 0x108C01 | 0x108C01 Ladelufttemperatur, Plausibilität: Temperatur zu hoch | 0 |
| 0x108C08 | 0x108C08 Ladelufttemperatur, Signal: festliegend | 0 |
| 0x108F01 | 0x108F01 Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | 0x109001 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109002 | 0x109002 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109010 | 0x109010 Heizungsrücklaufsensor, Plausibilität: Wackelkontakt erkannt | 0 |
| 0x109011 | 0x109011 Heizungsrücklaufsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109012 | 0x109012 Heizungsrücklaufsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109308 | 0x109308 Kühlmitteltemperatursensor, Signaländerung: zu schnell | 0 |
| 0x10A209 | 0x10A209 Motorraumtemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10A20A | 0x10A20A Motorraumtemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10A20B | 0x10A20B Motorraumtemperatursensor, Plausibilität: Wackelkontakt erkannt | 1 |
| 0x10A20C | 0x10A20C Motorraumtemperatursensor, elektrisch: Kurzschluss nach Plus | 1 |
| 0x10A20D | 0x10A20D Motorraumtemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10A20E | 0x10A20E Endstufe, Zusatzlüfter, Relais: Übertemperatur erkannt | 0 |
| 0x10A20F | 0x10A20F Zusatzlüfter, Relais,Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10A210 | 0x10A210 Zusatzlüfter, Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10A211 | 0x10A211 Zusatzlüfter, Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10A212 | 0x10A212 Zusatzlüfter, elektrisch: Fehlfunktion | 0 |
| 0x10A213 | 0x10A213 Zusatzlüfter Stufe1: falscher Lüfter verbaut | 0 |
| 0x10A214 | 0x10A214 Zusatzlüfter Stufe2: blockiert / schwergänig  | 0 |
| 0x10A215 | 0x10A215 Zusatzlüfter Stufe3: Lüfter nicht angelaufen | 0 |
| 0x10A216 | 0x10A216 Zusatzlüfter, Stufe4: Lüfter schaltet nicht ab | 0 |
| 0x10A217 | 0x10A217 Zusatzlüfter, Plausibilität: Drehzahl zu niedrig | 0 |
| 0x10A218 | 0x10A218 Zusatzlüfter: Plausibilisierung nicht erfolgt | 0 |
| 0x10AA20 | 0x10AA20 Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10AA21 | 0x10AA21 Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10AA30 | 0x10AA30 Kühlmitteltemperatursensor: Sammelfehler | 0 |
| 0x10AA52 | 0x10AA52 Kühlmitteltemperatursensor, Signal: festliegend | 0 |
| 0x10B101 | 0x10B101 Außentemperatursensor, elektrisch: Kurzschluss nach Plus | 1 |
| 0x10B102 | 0x10B102 Außentemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10B104 | 0x10B104 Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 1 |
| 0x10BA30 | 0x10BA30 Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | 0x10BA40 Außentemperatursensor, Plausibilität: Außentemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | 0x10BA41 Außentemperatursensor, Plausibilität: Außentemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA42 | 0x10BA42 Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10BA43 | 0x10BA43 Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA4B | 0x10BA4B Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA51 | 0x10BA51 Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | 0x10BA52 Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x10C004 | 0x10C004 Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10C009 | 0x10C009 Ansaugluftklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x10C00A | 0x10C00A Ansaugluftklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x10C00B | 0x10C00B Ansaugluftklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x10C00C | 0x10C00C Ansaugluftklappe, Ansteuerung: Verstellzeit unplausibel | 0 |
| 0x110001 | 0x110001 Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem | 0 |
| 0x110103 | 0x110103 Injektor Zylinder 1, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110105 | 0x110105 Injektor Zylinder 1, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x110203 | 0x110203 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110205 | 0x110205 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x110303 | 0x110303 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110305 | 0x110305 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x110403 | 0x110403 Injektor Zylinder 4, Ansteuerung: Hochspannungsseite, Kurzschluss | 0 |
| 0x110405 | 0x110405 Injektor Zylinder 4, Ansteuerung: Niederspannungsseite, Kurzschluss | 0 |
| 0x112101 | 0x112101 Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112104 | 0x112104 Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112201 | 0x112201 Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112204 | 0x112204 Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112301 | 0x112301 Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112304 | 0x112304 Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112401 | 0x112401 Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112404 | 0x112404 Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x113025 | 0x113025 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus | 0 |
| 0x113026 | 0x113026 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse | 0 |
| 0x113027 | 0x113027 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung | 0 |
| 0x114102 | 0x114102 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu fett | 0 |
| 0x114202 | 0x114202 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett | 0 |
| 0x114302 | 0x114302 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett | 0 |
| 0x114402 | 0x114402 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett | 0 |
| 0x117128 | 0x117128 Kleinstmengenadaption, Injektor Zylinder 1, Plausibilität: Signal unplausibel | 0 |
| 0x117228 | 0x117228 Kleinstmengenadaption, Injektor Zylinder 3, Plausibilität: Signal unplausibel | 0 |
| 0x117328 | 0x117328 Kleinstmengenadaption, Injektor Zylinder 4, Plausibilität: Signal unplausibel | 0 |
| 0x117329 | 0x117329 Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption: Sammelfehler | 0 |
| 0x11732A | 0x11732A Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption: Sammelfehler | 0 |
| 0x11732B | 0x11732B Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption: Sammelfehler | 0 |
| 0x11732C | 0x11732C Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption: Sammelfehler | 0 |
| 0x11732D | 0x11732D Kleinstmengenadaption, Injektor Zylinder 1, Regelbetrieb: Sammelfehler | 0 |
| 0x11732E | 0x11732E Kleinstmengenadaption, Injektor Zylinder 2, Regelbetrieb: Sammelfehler | 0 |
| 0x11732F | 0x11732F Kleinstmengenadaption, Injektor Zylinder 3, Regelbetrieb: Sammelfehler | 0 |
| 0x117330 | 0x117330 Kleinstmengenadaption, Injektor Zylinder 4, Regelbetrieb: Sammelfehler | 0 |
| 0x117428 | 0x117428 Kleinstmengenadaption, Injektor Zylinder 2, Plausibilität: Signal unplausibel | 0 |
| 0x118001 | 0x118001 Gemischregelung: Gemisch zu mager | 0 |
| 0x118002 | 0x118002 Gemischregelung: Gemisch zu fett | 0 |
| 0x118401 | 0x118401 Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | 0x118402 Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | 0x118601 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | 0x118602 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x119001 | 0x119001 Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | 0x119002 Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119304 | 0x119304 Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119308 | 0x119308 Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119404 | 0x119404 Raildrucksensor, Signal: festliegend | 0 |
| 0x11A001 | 0x11A001 Kraftstoffhochdruck, Plausibilität: Druck zu hoch | 0 |
| 0x11A002 | 0x11A002 Kraftstoffhochdruck, Plausibilität: Druck zu niedrig | 0 |
| 0x11A030 | 0x11A030 Kraftstoffniederdrucksystem, elektrische Kraftstoffpumpe, Adaption: Adaptionswert außerhalb gültigem Bereich | 0 |
| 0x11A031 | 0x11A031 Kraftstoffniederdrucksystem, elektrische Kraftstoffpumpe: Druck zu niedrig | 0 |
| 0x11A032 | 0x11A032 Kraftstoffniederdrucksystem, elektrische Kraftstoffpumpe: Druck zu niedrig bei geringem Tankfüllstand | 0 |
| 0x11A401 | 0x11A401 Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11AC01 | 0x11AC01 Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | 0x11AC02 Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11B010 | 0x11B010 Kraftstoffpumpensteuerung (FPC): Parametersatz fehlt oder Montagemodus aktiv | 0 |
| 0x11B011 | 0x11B011 Kraftstoffpumpensteuerung (FPC), interner Fehler: Fehlfunktion | 0 |
| 0x11B012 | 0x11B012 Kraftstoffpumpensteuerung (FPC), interner Fehler: Temperaturschwelle 2 überschritten | 0 |
| 0x11B013 | 0x11B013 Kraftstoffpumpensteuerung (FPC), interner Fehler: Temperaturschwelle 3 überschritten | 0 |
| 0x11B014 | 0x11B014 Elektrische Kraftstoffpumpe, Ansteuerung: Kurzschluss | 0 |
| 0x11B015 | 0x11B015 Kraftstoffpumpensteuerung (FPC), Nachlauf: Kommunikation mit ACSM fehlt | 0 |
| 0x11B016 | 0x11B016 Elektrische Kraftstoffpumpe, Arbeitsbereich: Strom zu hoch | 0 |
| 0x11B017 | 0x11B017 Elektrische Kraftstoffpumpe, Arbeitsbereich: Strom zu niedrig | 0 |
| 0x11B018 | 0x11B018 Elektrische Kraftstoffpumpe: blockiert | 0 |
| 0x11B030 | 0x11B030 Kraftstoffpumpensteuerung (FPC), Signalleitung: Leitungsunterbrechung | 0 |
| 0x11B031 | 0x11B031 Kraftstoffpumpensteuerung (FPC), Signalleitung: Übertemperatur erkannt | 0 |
| 0x11B032 | 0x11B032 Kraftstoffpumpensteuerung (FPC), Signalleitung: Kurzschluss nach Plus | 0 |
| 0x11B033 | 0x11B033 Kraftstoffpumpensteuerung (FPC), Signalleitung: Kurzschluss nach Masse | 0 |
| 0x11B209 | 0x11B209 Kraftstoffniederdrucksystem, Plausibilität: Förderleistung zu niedrig | 0 |
| 0x11B213 | 0x11B213 Kraftstoffsystem, Plausibilität: Druck zu niedrig  | 0 |
| 0x11B401 | 0x11B401 Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B501 | 0x11B501 Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11B510 | 0x11B510 Einspritzung, Notlauf: Zylinder ausgefallen | 1 |
| 0x11C004 | 0x11C004 Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C401 | 0x11C401 Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | 0x11C402 Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | 0x11C404 Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C405 | 0x11C405 Mengensteuerventil, Ansteuerung, Hochspannungsseite: Kurzschluss | 0 |
| 0x11C406 | 0x11C406 Mengensteuerventil, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x11C407 | 0x11C407 Mengensteuerventil, Ansteuerung, Niederspannungsseite: Kurzschluss | 0 |
| 0x11CF30 | 0x11CF30 Gemischregelung: Sammelfehler | 0 |
| 0x120208 | 0x120208 Ladedruckregelung, Plausibilität: Druck zu hoch | 0 |
| 0x120308 | 0x120308 Ladedruckregelung, Plausibilität: Druck zu niedrig | 0 |
| 0x120408 | 0x120408 Ladedruckregelung, Abschaltung: Druckaufbau gesperrt | 0 |
| 0x121001 | 0x121001 Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | 0x121002 Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121201 | 0x121201 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121202 | 0x121202 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121521 | 0x121521 Ladedrucksensor: Sammelfehler | 0 |
| 0x12152F | 0x12152F Ladedruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x121531 | 0x121531 Ladedruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121532 | 0x121532 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch | 0 |
| 0x121533 | 0x121533 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig | 0 |
| 0x122001 | 0x122001 Schubumluftventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122002 | 0x122002 Schubumluftventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122004 | 0x122004 Schubumluftventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x122108 | 0x122108 Schubumluftventil: klemmt geschlossen | 0 |
| 0x122201 | 0x122201 Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil | 0 |
| 0x123201 | 0x123201 Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x123401 | 0x123401 Elektrisches Wastegate, Anschlag-Lernen, Kaltstart: Fehlfunktion | 0 |
| 0x123411 | 0x123411 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) nicht gefunden | 0 |
| 0x123412 | 0x123412 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) nicht gefunden | 0 |
| 0x123421 | 0x123421 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate offen) nicht gefunden | 0 |
| 0x123422 | 0x123422 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate geschlossen) nicht gefunden | 0 |
| 0x123431 | 0x123431 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) außerhalb Toleranz | 0 |
| 0x123432 | 0x123432 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) außerhalb Toleranz | 0 |
| 0x123433 | 0x123433 Elektrisches Wastegate, Anschlag-Lernen: Verstellbereich außerhalb Toleranz | 0 |
| 0x123437 | 0x123437 Elektrisches Wastegate: klemmt geschlossen | 0 |
| 0x123511 | 0x123511 Elektrisches Wastegate, Wastegate-Klappe: schwergängig | 0 |
| 0x123512 | 0x123512 Elektrisches Wastegate, Wastegate-Klappe, Kaltstart: schwergängig | 0 |
| 0x123513 | 0x123513 Elektrisches Wastegate, Positionssensor, Versorgungsspannung, Plausibilität: Spannung zu niedrig | 0 |
| 0x123516 | 0x123516 Elektrisches Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123601 | 0x123601 Elektrisches Wastegate, Ansteuerung: Kurzschluss | 0 |
| 0x123602 | 0x123602 DME, interner Fehler, Elektrisches Wastegate: Temperatur zu hoch | 0 |
| 0x123608 | 0x123608 DME, interner Fehler, Elektrisches Wastegate: SPI-Kommunikation fehlerhaft | 0 |
| 0x123609 | 0x123609 Elektrisches Wastegate, thermischer Überlastschutz: Warnschwelle überschritten | 0 |
| 0x12360B | 0x12360B Elektrisches Wastegate, thermischer Überlastschutz: Notlauf aktiv | 0 |
| 0x123701 | 0x123701 Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x123702 | 0x123702 Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x128101 | 0x128101 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | 0x128301 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128901 | 0x128901 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | 0x128B01 Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128E01 | 0x128E01 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x129001 | 0x129001 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | 0x129002 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | 0x129201 DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | 0x129202 DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129A20 | 0x129A20 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | 0x129A21 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A308 | 0x12A308 Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | 0x12A701 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | 0x12A902 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | 0x12AB04 Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AD01 | 0x12AD01 Lambdasonde nach Katalysator: Signal festliegend auf Mager | 0 |
| 0x12AE01 | 0x12AE01 Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12AF10 | 0x12AF10 Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion | 0 |
| 0x12AF11 | 0x12AF11 Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12AF20 | 0x12AF20 Lambdasonde nach Katalysator: Signal festliegend auf Fett | 0 |
| 0x12B101 | 0x12B101 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | 0x12B102 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | 0x12B104 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | 0x12B301 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | 0x12B302 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | 0x12B304 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B505 | 0x12B505 Lambdasondenbeheizung vor Katalysator, Funktion: Heizerfehler | 0 |
| 0x12B701 | 0x12B701 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BD52 | 0x12BD52 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | 0x12BD60 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD80 | 0x12BD80 Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BE08 | 0x12BE08 Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
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
| 0x130E11 | 0x130E11 Einlassnockenwellensensor, Plausibilität: Signal unplausibel | 0 |
| 0x130E20 | 0x130E20 Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | 0x130F11 Auslassnockenwellensensor, Plausibilität: Signal unplausibel | 0 |
| 0x130F20 | 0x130F20 Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | 0x131401 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | 0x131501 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x131808 | 0x131808 VANOS, Auslass, Kaltstart: Position nicht erreicht | 0 |
| 0x131908 | 0x131908 VANOS, Einlass, Kaltstart: Position nicht erreicht | 0 |
| 0x132101 | 0x132101 VANOS, Auslass: Sammelfehler | 0 |
| 0x132201 | 0x132201 VANOS, Einlass: Sammelfehler | 0 |
| 0x132301 | 0x132301 VANOS: Sammelfehler | 0 |
| 0x133010 | 0x133010 Valvetronic-Stellmotor, Ansteuerung: Fehlfunktion | 0 |
| 0x133011 | 0x133011 Valvetronic, Versorgungsspannung: Fehlfunktion | 0 |
| 0x133101 | 0x133101 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | 0x133102 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | 0x133104 Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | 0x133201 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | 0x133202 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133304 | 0x133304 Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133710 | 0x133710 Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133B04 | 0x133B04 Valvetronic System: keine Verstellung möglich | 0 |
| 0x133E10 | 0x133E10 Valvetronic System: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x134A02 | 0x134A02 Valvetronic-Stellmotor: Überlastung | 0 |
| 0x134F01 | 0x134F01 Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | 0x134F02 Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | 0x134F04 Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | 0x134F08 Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | 0x134F10 Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 1 |
| 0x135302 | 0x135302 Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System | 0 |
| 0x135401 | 0x135401 Valvetronic: Endstufe überlastet | 0 |
| 0x135501 | 0x135501 Valvetronic: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135502 | 0x135502 Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135608 | 0x135608 Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | 0x135704 Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135705 | 0x135705 Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135706 | 0x135706 Valvetronic System: unterer Anschlag gelernt | 0 |
| 0x135808 | 0x135808 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung Fehlfunktion | 0 |
| 0x135908 | 0x135908 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x135A08 | 0x135A08 Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x135A10 | 0x135A10 Valvetronic-Stellmotor, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135B10 | 0x135B10 Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | 0x135B11 Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | 0x135B12 Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | 0x135C10 Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | 0x135C11 Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x138101 | 0x138101 Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | 0x138102 Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | 0x138104 Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138201 | 0x138201 Kühlerjalousie, oben, Versorgungsspannung, Eigendiagnose: Fehlfunktion | 0 |
| 0x138301 | 0x138301 Kühlerjalousie, oben, Eigendiagnose: Übertemperatur erkannt | 0 |
| 0x138401 | 0x138401 Kühlerjalousie, oben, Eigendiagnose: elektrischer Fehler | 0 |
| 0x138501 | 0x138501 Kühlerjalousie, oben: unterer Anschlag nicht erkannt | 0 |
| 0x138601 | 0x138601 Kühlerjalousie, oben: oberer Anschlag nicht erkannt | 0 |
| 0x138701 | 0x138701 Kühlerjalousie, oben: oberer Anschlag zu früh erkannt | 0 |
| 0x138901 | 0x138901 Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138902 | 0x138902 Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138904 | 0x138904 Kühlerjalousie, unten, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138A12 | 0x138A12 Abgasklappe: keine Rückmeldung | 0 |
| 0x140001 | 0x140001 Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | 0x140002 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | 0x140004 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140010 | 0x140010 Verbrennungsaussetzer, mehrere Zylinder: erkannt | 0 |
| 0x140011 | 0x140011 Verbrennungsaussetzer: Einspritzabschaltung | 0 |
| 0x140101 | 0x140101 Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | 0x140102 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | 0x140104 Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140110 | 0x140110 Verbrennungsaussetzer, Zylinder 1: erkannt | 0 |
| 0x140201 | 0x140201 Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | 0x140202 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | 0x140204 Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140210 | 0x140210 Verbrennungsaussetzer, Zylinder 2: erkannt | 0 |
| 0x140301 | 0x140301 Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | 0x140302 Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | 0x140304 Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140310 | 0x140310 Verbrennungsaussetzer, Zylinder 3: erkannt | 0 |
| 0x140401 | 0x140401 Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | 0x140402 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | 0x140404 Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140410 | 0x140410 Verbrennungsaussetzer, Zylinder 4: erkannt | 0 |
| 0x150102 | 0x150102 Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | 0x150202 Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | 0x150302 Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | 0x150402 Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150C11 | 0x150C11 Zündung, Zylinder 1: Brenndauer außerhalb Toleranz | 0 |
| 0x150C12 | 0x150C12 Zündung, Zylinder 2: Brenndauer außerhalb Toleranz | 0 |
| 0x150C13 | 0x150C13 Zündung, Zylinder 3: Brenndauer außerhalb Toleranz | 0 |
| 0x150C14 | 0x150C14 Zündung, Zylinder 4: Brenndauer außerhalb Toleranz | 0 |
| 0x150C23 | 0x150C23 Zündung, Zylinder 1: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x150C24 | 0x150C24 Zündung, Zylinder 2: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x150C25 | 0x150C25 Zündung, Zylinder 3: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x150C26 | 0x150C26 Zündung, Zylinder 4: Kontaktfehler zwischen Zündkerze und Zündspule | 0 |
| 0x151001 | 0x151001 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | 0x151101 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | 0x152001 Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus | 0 |
| 0x152007 | 0x152007 Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse | 0 |
| 0x152008 | 0x152008 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152108 | 0x152108 Superklopfen Zylinder 1: Einspritzabschaltung | 0 |
| 0x152118 | 0x152118 Superklopfen Zylinder 1: dauerhafte Einspritzabschaltung | 0 |
| 0x152208 | 0x152208 Superklopfen Zylinder 2: Einspritzabschaltung | 0 |
| 0x152218 | 0x152218 Superklopfen Zylinder 2: dauerhafte Einspritzabschaltung | 0 |
| 0x152308 | 0x152308 Superklopfen Zylinder 3: Einspritzabschaltung | 0 |
| 0x152318 | 0x152318 Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung | 0 |
| 0x152408 | 0x152408 Superklopfen Zylinder 4: Einspritzabschaltung | 0 |
| 0x152418 | 0x152418 Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung | 0 |
| 0x152D08 | 0x152D08 Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | 0x160001 Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | 0x160020 Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160021 | 0x160021 Kurbelwellensensor: allgemeiner Synchronisationsverlust  | 0 |
| 0x160501 | 0x160501 Kurbelgehäuseentlüftungsheizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x160502 | 0x160502 Kurbelgehäuseentlüftungsheizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x160504 | 0x160504 Kurbelgehäuseentlüftungsheizung, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x160510 | 0x160510 Kurbelwellensensor, Plausibilität: Drehrichtung unplausibel | 0 |
| 0x164020 | 0x164020 Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164021 | 0x164021 Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164030 | 0x164030 Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164031 | 0x164031 Ausassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164040 | 0x164040 Einlassnockenwelle: Montage fehlerhaft | 0 |
| 0x164041 | 0x164041 Auslassnockenwelle: Montage fehlerhaft | 0 |
| 0x168001 | 0x168001 Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | 0x168002 Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168101 | 0x168101 Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | 0x168102 Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168A20 | 0x168A20 Klopfregelung: Systemfehler | 0 |
| 0x168A30 | 0x168A30 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | 0x168A31 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | 0x168A40 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | 0x168A41 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | 0x168A50 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | 0x168A51 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | 0x168A60 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | 0x168A61 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x180001 | 0x180001 Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180110 | 0x180110 Katalysator, Plausibilität: Abgasgegendruck zu hoch | 0 |
| 0x190302 | 0x190302 Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
| 0x190F08 | 0x190F08 Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191001 | 0x191001 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | 0x191002 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | 0x191004 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191C02 | 0x191C02 Tankentlüftungssystem, 2. Einleitestelle: Fehlfunktion | 0 |
| 0x193001 | 0x193001 Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193002 | 0x193002 Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193008 | 0x193008 Kraftstoff-Füllstandsgeber, links, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193101 | 0x193101 Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x193102 | 0x193102 Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193108 | 0x193108 Kraftstoff-Füllstandsgeber, rechts, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193208 | 0x193208 Tankfüllstand, Plausibilität: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193A20 | 0x193A20 Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
| 0x194001 | 0x194001 Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu niedrig | 0 |
| 0x194002 | 0x194002 Tankleckagemodul, Temperatursensor, elektrisch: Spannung zu hoch | 0 |
| 0x194004 | 0x194004 Tankleckagemodul, Temperatur, Plausibilität, Kaltstart: Temperatur unplausibel | 0 |
| 0x194101 | 0x194101 Tankleckagemodul, Temperatursensor, Signaländerung: zu schnell | 0 |
| 0x194201 | 0x194201 Tankleckagemodul, Zeitgeber: Fehlfunktion | 0 |
| 0x194401 | 0x194401 Tankleckagemodul, Kommunikation: gestört | 0 |
| 0x194501 | 0x194501 Tankleckagemodul, Kommunikation: Fehlfunktion | 0 |
| 0x194601 | 0x194601 Tankleckagemodul, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194602 | 0x194602 Tankleckagemodul, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194604 | 0x194604 Tankleckagemodul, elektrisch: Leitungsunterbrechung | 0 |
| 0x194701 | 0x194701 Tankleckagemodul, Druckschalter: klemmt | 0 |
| 0x194801 | 0x194801 Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Plus | 0 |
| 0x194802 | 0x194802 Tankleckagemodul, Druckschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x194804 | 0x194804 Tankleckagemodul, Druckschalter, elektrisch: Leitungsunterbrechung | 0 |
| 0x1A2001 | 0x1A2001 Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | 0x1A2002 Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | 0x1A2004 Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2009 | 0x1A2009 Elektrolüfter, Ansteuerung: Fehlfunktion | 0 |
| 0x1A200A | 0x1A200A Check-Control-Meldung (ID 567): Motorlüfter gestört, gemäßigt fahren | 0 |
| 0x1A200B | 0x1A200B Check-Control-Meldung (ID 568): Motorlüfter Defekt, Fahrzeug sofort abstellen | 0 |
| 0x1A200C | 0x1A200C Sicherungsrelais Elektrolüfter, Ansteuerung: Fehlfunktion | 0 |
| 0x1A200D | 0x1A200D Elektrolüfter, Eigendiagnose Stufe 1: Drehzahlreduzierung 1 | 0 |
| 0x1A200E | 0x1A200E Elektrolüfter, Eigendiagnose Stufe 2: Drehzahlreduzierung 2 | 0 |
| 0x1A200F | 0x1A200F Elektrolüfter, Eigendiagnose Stufe 3: Drehzahlreduzierung 3 | 0 |
| 0x1A2010 | 0x1A2010 Elektrolüfter, Eigendiagnose Stufe 4: eingeschränkter Lauf | 0 |
| 0x1A2011 | 0x1A2011 Elektrolüfter, Eigendiagnose Stufe 5: Stillstand 1 | 0 |
| 0x1A2012 | 0x1A2012 Elektrolüfter, Eigendiagnose Stufe 6: Stillstand 2 | 0 |
| 0x1A2013 | 0x1A2013 Elektrolüfter: Typ nicht plausibel | 0 |
| 0x1A2601 | 0x1A2601 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | 0x1A2602 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | 0x1A2604 Sicherungsrelais Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2709 | 0x1A2709 Zusatzlüfter, Relais, Ansteuerung: Sammelfehler | 0 |
| 0x1B0A20 | 0x1B0A20 Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | 0x1B0A21 Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | 0x1B0A40 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 0 |
| 0x1B0A60 | 0x1B0A60 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel | 0 |
| 0x1B0A61 | 0x1B0A61 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel | 0 |
| 0x1B0A62 | 0x1B0A62 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A64 | 0x1B0A64 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 0 |
| 0x1B0A65 | 0x1B0A65 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 0 |
| 0x1B0A66 | 0x1B0A66 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 0 |
| 0x1B0A67 | 0x1B0A67 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 0 |
| 0x1B2001 | 0x1B2001 EWS-Manipulationsschutz: Motorlauf durch EWS gesperrt | 0 |
| 0x1B2002 | 0x1B2002 EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | 0x1B2008 EWS Manipulationsschutz: Antwort unplausibel | 0 |
| 0x1B2201 | 0x1B2201 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | 0x1B2202 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2208 | 0x1B2208 DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2209 | 0x1B2209 DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key | 0 |
| 0x1B2301 | 0x1B2301 FlexRay, Botschaft (EWS Information FEM, 103.1.4): fehlt | 0 |
| 0x1B2302 | 0x1B2302 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 0 |
| 0x1B2304 | 0x1B2304 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 0 |
| 0x1B2904 | 0x1B2904 Funktionsfreischaltung, Geschwindigkeitsbegrenzung: Code ungültig | 0 |
| 0x1B5101 | 0x1B5101 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | 0x1B5102 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5202 | 0x1B5202 Klemme 15N_1: keine Spannung | 0 |
| 0x1B5302 | 0x1B5302 Klemme 15N_2: keine Spannung | 0 |
| 0x1B5402 | 0x1B5402 Klemme 15N_3: keine Spannung | 0 |
| 0x1B6008 | 0x1B6008 Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B9508 | 0x1B9508 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | 0x1B9608 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | 0x1B9701 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf | 0 |
| 0x1B9702 | 0x1B9702 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf | 0 |
| 0x1B9804 | 0x1B9804 Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | 0x1B9A01 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf | 0 |
| 0x1B9A02 | 0x1B9A02 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf | 0 |
| 0x1B9B01 | 0x1B9B01 Motorabstellzeit: Sammelfehler | 0 |
| 0x1BC004 | 0x1BC004 Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1BC101 | 0x1BC101 Nullgangsensor, Plausibilität: Signal unplausibel | 0 |
| 0x1BC115 | 0x1BC115 Gangsensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BC116 | 0x1BC116 Gangsensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BC117 | 0x1BC117 Gangsensor, Plausibilität, Position unplausibel | 0 |
| 0x1BC118 | 0x1BC118 Gangsensor, Lernwerte: unplausibel oder Speichern fehlgeschlagen | 0 |
| 0x1BC119 | 0x1BC119 Gangsensor: Schalthebelpositon ungültig | 0 |
| 0x1BC11A | 0x1BC11A Gangsensor, Kommunikation: Statusinformation fehlerhaft | 0 |
| 0x1BC11B | 0x1BC11B Gangsensor, Plausibilität: Temparatur zu hoch | 0 |
| 0x1BC11C | 0x1BC11C Gangsensor, Kommunikation: fehlt | 0 |
| 0x1BC11D | 0x1BC11D Gangsensor, Plausibilität: Wackelkontakt erkannt | 0 |
| 0x1BC11E | 0x1BC11E Gangsensor, Kommunikation, Fast Kanal: gestört | 0 |
| 0x1BC11F | 0x1BC11F Gangsensor, Kommunikation, Slow Kanal: gestört | 0 |
| 0x1BD408 | 0x1BD408 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD508 | 0x1BD508 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion | 1 |
| 0x1BD608 | 0x1BD608 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1BD708 | 0x1BD708 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion | 1 |
| 0x1C0001 | 0x1C0001 Motoröldruckregelung, Plausibilität: Druckschwankungen | 0 |
| 0x1C0101 | 0x1C0101 Motoröldruckregelung, Plausiblität, statisch: Druck zu hoch | 0 |
| 0x1C0102 | 0x1C0102 Motoröldruckregelung, Plausiblität, statisch: Druck zu niedrig | 0 |
| 0x1C0201 | 0x1C0201 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | 0x1C0202 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | 0x1C0204 Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0301 | 0x1C0301 Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | 0x1C0302 Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | 0x1C0401 Motoröldruckregelung: instabil | 0 |
| 0x1C2001 | 0x1C2001 Motorölpumpe: Druck zu hoch | 0 |
| 0x1C2002 | 0x1C2002 Motorölpumpe: Druck zu niedrig | 0 |
| 0x1C3005 | 0x1C3005 Motoröldrucksensor: Membranriss | 0 |
| 0x1C3101 | 0x1C3101 Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu hoch | 0 |
| 0x1C3102 | 0x1C3102 Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu niedrig | 0 |
| 0x1C3108 | 0x1C3108 Motoröldrucksensor, Signal: festliegend | 0 |
| 0x1C4002 | 0x1C4002 Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | 0x1C4110 Ölzustandssensor: Fehlfunktion | 0 |
| 0x1D2008 | 0x1D2008 Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2401 | 0x1D2401 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | 0x1D2402 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | 0x1D2404 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3001 | 0x1D3001 Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung leicht geschädigt | 0 |
| 0x1D3101 | 0x1D3101 Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung geschädigt | 0 |
| 0x1D3201 | 0x1D3201 Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung stark geschädigt | 0 |
| 0x1D3211 | 0x1D3211 Kupplungstemperatur: Warnschwellenwert 1 ohne Schädigung überschritten | 1 |
| 0x1D3212 | 0x1D3212 Kupplungstemperatur: Warnschwellenwert 2 ohne Schädigung überschritten | 1 |
| 0x1D3330 | 0x1D3330 Kommunikationsfehler zu EGS während E-Fahren | 1 |
| 0x1D3331 | 0x1D3331 Kommunikationsfehler zu EGS während Verbrennerbetrieb | 1 |
| 0x1D3650 | 0x1D3650 Hinterachsgetriebe, Plausibilität: Übersetzung unplausibel | 0 |
| 0x1D3701 | 0x1D3701 Powermanagement, Batterie: Drehzahlanhebung aufgrund niedrigem Ladezustand | 0 |
| 0x1D3810 | 0x1D3810 Kupplungsschalter: Positionen zueinander unplausibel | 0 |
| 0x1D3A01 | 0x1D3A01 Kommunikation: Signal (Drehzahl_Getriebestrang_Abtrieb) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0x1D3C01 | 0x1D3C01 Kommunikation: Signal (Status_Schaltung_Aktiv_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig | 1 |
| 0x1E0001 | 0x1E0001 Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | 0x1E0002 Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | 0x1E0101 Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | 0x1E0102 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E0308 | 0x1E0308 Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel | 0 |
| 0x1E5201 | 0x1E5201 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5301 | 0x1E5301 Manipulationsschutz: Motorleistung zu hoch | 0 |
| 0x1E5A20 | 0x1E5A20 Motordrehmomentbegrenzung: maximales Sollmoment dauerhaft überschritten | 0 |
| 0x1F0513 | 0x1F0513 Valvetronic, Versorgungsspannung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F0514 | 0x1F0514 Valvetronic, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x1F0515 | 0x1F0515 Valvetronic, Versorgungsspannung: Leitungsunterbrechung | 0 |
| 0x1F0516 | 0x1F0516 DME, interner Fehler, Sicherheitsfunktion: AD-Wandler Leerlauftestimpulsprüfung | 0 |
| 0x1F0517 | 0x1F0517 DME, interner Fehler, Sicherheitsfunktion: AD-Wandler Testspannungsprüfung | 0 |
| 0x1F0519 | 0x1F0519 DME, interner Fehler, Sicherheitsfunktion: Signalplausibilisierung Fahrpedalmodul oder Pedalwertgeber | 0 |
| 0x1F0520 | 0x1F0520 DME, interner Fehler, Sicherheitsfunktion: Drehzahlgeber | 0 |
| 0x1F0522 | 0x1F0522 DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 1 | 0 |
| 0x1F0523 | 0x1F0523 DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 2 | 0 |
| 0x1F0528 | 0x1F0528 DME, interner Fehler, Sicherheitsfunktion: Variantenkodierung | 0 |
| 0x1F0530 | 0x1F0530 DME, interner Fehler: Abschaltpfad-Test durch Überwachungsmodul | 0 |
| 0x1F053C | 0x1F053C DME, interner Fehler, Sicherheitsfunktion: maximale Fahrzeugbeschleuningung überschritten  | 0 |
| 0x1F053D | 0x1F053D DME, interner Fehler, erweiterte Überwachung Sendesignale: Ist-Motordrehmoment unplausibel | 0 |
| 0x1F053F | 0x1F053F DME, interner Fehler, Sicherheitsfunktion: Fahrbereitschaft | 0 |
| 0x1F0540 | 0x1F0540 DME, interner Fehler, Sicherheitsfunktion: Fahrpedallbegrenzungswert überschritten | 0 |
| 0x1F0904 | 0x1F0904 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F0905 | 0x1F0905 DME, interner Fehler, Valvetronic: Strom unplausibel | 0 |
| 0x1F0906 | 0x1F0906 DME, interner Fehler, Valvetronic: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A40 | 0x1F1A40 DME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x1F1A50 | 0x1F1A50 DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A51 | 0x1F1A51 DME, interner Fehler: Lesen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | 0x1F1A52 DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | 0x1F1A60 DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A70 | 0x1F1A70 DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x1F1A71 | 0x1F1A71 DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x1F1A80 | 0x1F1A80 DME, interner Fehler, Watchdog-Ausgang: Fehlfunktion | 0 |
| 0x1F1A81 | 0x1F1A81 DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation | 0 |
| 0x1F1A82 | 0x1F1A82 DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung | 0 |
| 0x1F1A90 | 0x1F1A90 Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A91 | 0x1F1A91 Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A92 | 0x1F1A92 Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich | 0 |
| 0x1F1A93 | 0x1F1A93 Überwachung 5V Sensor-Versorgung: Spannung zu hoch | 0 |
| 0x1F1A94 | 0x1F1A94 Überwachung 5V Sensor-Versorgung: Kurzschluss nach Masse | 0 |
| 0x1F1A95 | 0x1F1A95 Überwachung 5V Sensor-Versorgung: Spannung zu niedrig | 0 |
| 0x1F1A96 | 0x1F1A96 Überwachung 5V Sensor-Versorgung 2: Spannung zu hoch | 0 |
| 0x1F1A97 | 0x1F1A97 Überwachung 5V Sensor-Versorgung 2: Kurzschluss nach Masse | 0 |
| 0x1F1A98 | 0x1F1A98 Überwachung 5V Sensor-Versorgung 2: Spannung zu niedrig | 0 |
| 0x1F1A99 | 0x1F1A99 Überwachung 5V Sensor-Versorgung 3: Spannung zu hoch | 0 |
| 0x1F1A9A | 0x1F1A9A Überwachung 5V Sensor-Versorgung 3: Kurzschluss nach Masse | 0 |
| 0x1F1A9B | 0x1F1A9B Überwachung 5V Sensor-Versorgung 3: Spannung zu niedrig | 0 |
| 0x1F1AA0 | 0x1F1AA0 DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA1 | 0x1F1AA1 DME, interner Fehler: Software-Reset | 0 |
| 0x1F1AA2 | 0x1F1AA2 DME, interner Fehler: Software-Reset | 0 |
| 0x1F1B54 | 0x1F1B54 Bordnetz, Spannungsversorgung: Fehlfunktion (Meldung von EME) | 1 |
| 0x1F1B55 | 0x1F1B55 Bordnetzspannung: Spannung zu niedrig (Fehler im Hochvoltsystem) | 0 |
| 0x1F2102 | 0x1F2102 Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt | 0 |
| 0x1F2104 | 0x1F2104 DME, falscher Datensatz: CAN Timeout | 0 |
| 0x1F2108 | 0x1F2108 DME, falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | 0x1F2601 DME, Kodierung: fehlt | 0 |
| 0x1F2604 | 0x1F2604 DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2701 | 0x1F2701 DME, Kodierung: Schreibfehler | 0 |
| 0x1F2702 | 0x1F2702 DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2704 | 0x1F2704 DME, Kodierung: Daten unplausibel | 0 |
| 0x1F2801 | 0x1F2801 DME, Software: Programm ungültig | 0 |
| 0x1F2802 | 0x1F2802 DME, Software: Daten ungültig | 0 |
| 0x1F4A01 | 0x1F4A01 Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | 0x1F4A02 Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | 0x1F4A10 Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F4D10 | 0x1F4D10 DME, interner Fehler, Ansteuerung Mengensteuerventil: Fehlfunktion | 0 |
| 0x1F5020 | 0x1F5020 DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | 0x1F5021 DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | 0x1F5101 DME Temperatur: Übertemperatur | 0 |
| 0x1FB001 | 0x1FB001 Check-Control-Meldung (ID 484): Batterie OK | 0 |
| 0x1FB101 | 0x1FB101 Check-Control-Meldung (ID 229): Batterie laden | 0 |
| 0x1FB201 | 0x1FB201 Check-Control-Meldung (ID 257): Motor zu heiß! Gemäßigt fahren | 0 |
| 0x1FB301 | 0x1FB301 Check-Control-Meldung (ID 39): Motor überhitzt. Vorsichtig halten | 0 |
| 0x1FB401 | 0x1FB401 Check-Control-Meldung (ID 367): Antrieb gemäßigt fahren | 0 |
| 0x1FB501 | 0x1FB501 Check-Control-Meldung (ID 27): Motoröl nachfüllen | 0 |
| 0x1FB601 | 0x1FB601 Check-Control-Meldung (ID 450): Auto Start Stop Funktion deaktiviert | 0 |
| 0x1FB701 | 0x1FB701 Check-Control-Meldung (ID 397): Auto Start Stop Funktion ausgefallen | 0 |
| 0x1FB801 | 0x1FB801 Check-Control-Meldung (ID 212): Motoröldruck. Vorsichtig anhalten | 0 |
| 0x1FB901 | 0x1FB901 Check-Control-Meldung (ID 278): Niedrigen Gang wählen | 0 |
| 0x1FBB01 | 0x1FBB01 Check-Control-Meldung (ID 567): Motorlüfter. Gemäßigt fahren | 0 |
| 0x1FBC01 | 0x1FBC01 Check-Control-Meldung (ID 584): Transport-Modus | 0 |
| 0x1FBD00 | 0x1FBD00 Check-Control-Meldung (ID 568): Antrieb. Vorsichtig anhalten | 0 |
| 0x1FBD01 | 0x1FBD01 Check-Control-Meldung (ID 569): Antrieb. Vorsichtig anhalten | 0 |
| 0x1FBD02 | 0x1FBD02 Check-Control-Meldung (ID 49): Antrieb. Demnächst prüfen | 0 |
| 0x1FBD05 | 0x1FBD05 Check-Control-Meldung (ID 807): Ladekabel abziehen | 0 |
| 0x1FBD06 | 0x1FBD06 Check-Control-Meldung (ID 808): Ladekabel prüfen | 0 |
| 0x1FBD07 | 0x1FBD07 Fahrbereitschaft: nicht möglich | 0 |
| 0x1FBD10 | 0x1FBD10 Notlaufmanager: Anforderung Dauergong aufgrund Getriebefehler | 0 |
| 0x1FBE02 | 0x1FBE02 Check-Control-Meldung (ID 882): Fahrzeug gegen Wegrollen sichern | 0 |
| 0x1FBE03 | 0x1FBE03 Check-Control-Meldung (ID 400): Motorölstand zu hoch | 0 |
| 0x201004 | 0x201004 CBS-Client: Ausgabe von Ersatzwert | 0 |
| 0x201010 | 0x201010 A- / FA-CAN Hardware: defekt | 0 |
| 0x201020 | 0x201020 FlexRay Hardware: defekt | 0 |
| 0x201101 | 0x201101 DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A101 | 0x20A101 Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A104 | 0x20A104 Ladeluft-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A105 | 0x20A105 Ladeluft-Kühlmittelpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20A106 | 0x20A106 DME, interner Fehler, Ladeluft-Kühlmittelpumpe: Temperatur zu hoch | 0 |
| 0x20A107 | 0x20A107 Ladeluft-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20A109 | 0x20A109 Ladeluft-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20A10B | 0x20A10B Ladeluft-Kühlsystem: Drehzahl Kühlmittelpumpe zu niedrig | 0 |
| 0x20A201 | 0x20A201 Ladeluft-Kühlsystem: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 1 |
| 0x20A501 | 0x20A501 Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20A502 | 0x20A502 Turbolader-Kühlmittelpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20A503 | 0x20A503 Turbolader-Kühlmittelpumpe, Eigendiagnose: Signal unplausibel | 0 |
| 0x20A504 | 0x20A504 Turbolader-Kühlmittelpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20A506 | 0x20A506 DME, interner Fehler, Treiber, Turbolader-Kühlmittelpumpe: Temperatur zu hoch | 0 |
| 0x20A507 | 0x20A507 Motor-Kühlsystem: Abschaltung Turboladerkühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A508 | 0x20A508 Motor-Kühlsystem: Abschaltung Turboladerkühlmittelpumpe wegen Blockierung | 0 |
| 0x20A509 | 0x20A509 Motor-Kühlsystem: Drehzahl Turboladerkühlmtitelpumpe zu niedrig | 0 |
| 0x20A50A | 0x20A50A Motor-Kühlsystem: Kühlmittelverlust durch Turboladerkühlmittelpumpe erkannt | 0 |
| 0x20A701 | 0x20A701 Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A703 | 0x20A703 Motor-Kühlsystem: Bauteileschutz Temporäre Motorleistungsreduzierung | 0 |
| 0x20A801 | 0x20A801 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | 0x20A802 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | 0x20A804 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A902 | 0x20A902 Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | 0x20A904 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | 0x20A908 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20AB08 | 0x20AB08 Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe | 0 |
| 0x20AD13 | 0x20AD13 Hauptwasserpumpe: Klappestellung Fehlerhaft | 0 |
| 0x20BA20 | 0x20BA20 Kupplungsschalter, Signal: fehlt | 0 |
| 0x210201 | 0x210201 Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | 0x210301 Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | 0x210401 Generator, Temperatur: Übertemperatur | 1 |
| 0x210601 | 0x210601 Generator, mechanisch: Fehlfunktion | 0 |
| 0x210801 | 0x210801 Generator: Typ falsch | 0 |
| 0x210C01 | 0x210C01 Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211F01 | 0x211F01 Generator/Startergenerator: Kodierung fehlt | 0 |
| 0x211F03 | 0x211F03 Generator/Startergenerator: Kodierung oder Programmstand falsch | 0 |
| 0x213301 | 0x213301 Powermanagement, Überspannung: Überspannung erkannt | 1 |
| 0x213401 | 0x213401 Powermanagement, Unterspannung: Unterspannung erkannt | 1 |
| 0x213501 | 0x213501 Powermanagement, Batterieüberwachung: Tiefentladung | 1 |
| 0x213601 | 0x213601 Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x213701 | 0x213701 Powermanagement: Batterieloser Betrieb | 1 |
| 0x213801 | 0x213801 Batterie, Transport: Batterie auf Transport geschädigt | 1 |
| 0x213901 | 0x213901 Verbraucherreduzierung: aktiv | 1 |
| 0x213A01 | 0x213A01 Batterie, Transport, Überwachung: Batterie auf Transport entladen | 1 |
| 0x213A20 | 0x213A20 Bordnetzspannung, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x213A21 | 0x213A21 Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x213B01 | 0x213B01 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C01 | 0x213C01 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x215001 | 0x215001 Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 |
| 0x215101 | 0x215101 Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215104 | 0x215104 Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215108 | 0x215108 Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215701 | 0x215701 Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 |
| 0x215801 | 0x215801 Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | 0x215901 Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | 0x215A01 Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 |
| 0x215F40 | 0x215F40 Intelligenter Batteriesensor, Arbeitsbereich: Strom zu hoch | 0 |
| 0x215F41 | 0x215F41 Intelligenter Batteriesensor, Arbeitsbereich: Strom zu niedrig | 0 |
| 0x215F42 | 0x215F42 Intelligenter Batteriesensor, Arbeitsbereich: Temperatur zu hoch | 0 |
| 0x215F43 | 0x215F43 Intelligenter Batteriesensor, Arbeitsbereich: Temperatur zu niedrig | 0 |
| 0x215F44 | 0x215F44 Intelligenter Batteriesensor, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x215F45 | 0x215F45 Intelligenter Batteriesensor, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x216002 | 0x216002 MSA, Überwachung: Zeitüberschreitung | 0 |
| 0x216104 | 0x216104 MSA, Überwachung: Startverzögerung | 0 |
| 0x216110 | 0x216110 Startaggregat Ritzelstarter: Anzahl MSA-Reflexstarts überschritten | 0 |
| 0x216111 | 0x216111 Startaggregat Ritzelstarter: Anzahl Motorstarts überschritten | 0 |
| 0x218001 | 0x218001 Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | 0x218101 Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion | 0 |
| 0x218201 | 0x218201 Batterieladeeinheit, Sekundäre Batterie: defekt | 0 |
| 0x218301 | 0x218301 Batterieladeeinheit: Fehler im Trennelement/Kabelbaum oder sekundäre Batterie tiefentladen | 0 |
| 0x21A001 | 0x21A001 Montagemode: aktiv | 0 |
| 0x21A002 | 0x21A002 Notlaufmanager: Anforderung Fahrbereitschaft Aufheben von Steuergerät Elektromaschine | 1 |
| 0x21A003 | 0x21A003 Notlaufmanager: Anforderung Verbrennungsmotor Momentreduktion Stufe 1 von Steuergerät Elektromaschine | 1 |
| 0x21A004 | 0x21A004 Notlaufmanager: Anforderung Verbrennungsmotor Momentreduktion Stufe 2 von Steuergerät Elektromaschine | 1 |
| 0x21A005 | 0x21A005 Notlaufmanager: Anforderung Verbrennungsmotor Momentreduktion Stufe 3 von Steuergerät Elektromaschine | 1 |
| 0x21A009 | 0x21A009 Notlaufmanager: Anforderung Aktivierung Leerlaufregelung Verbrennungsmotor von Steuergerät Elektromaschine | 1 |
| 0x21A00A | 0x21A00A Notlaufmanager: Anforderung Nullstromregelung von Steuergerät Elektromaschine | 1 |
| 0x21A00B | 0x21A00B Notlaufmanager: Anforderung Kraftschluss Getriebe elektrische Achse Aufheben von Steuergerät Elektromaschine | 1 |
| 0x21A00C | 0x21A00C Notlaufmanager: Anforderung Kraftschluss Getriebe elektrische Achse Aufheben bei Maximalgeschwindigkeit von Steuergerät Elektromaschine | 1 |
| 0x21A00D | 0x21A00D Notlaufmanager: Anforderung Kraftschluss Getriebe elektrische Achse Herstellen von Steuergerät Elektromaschine | 1 |
| 0x21A00F | 0x21A00F Notlaufmanager: Anforderung Verbrennungsmotor Abschaltverhinderer von Steuergerät Elektromaschine | 1 |
| 0x21A010 | 0x21A010 Notlaufmanager: Anforderung Standby von Steuergerät Elektromaschine | 1 |
| 0x21A011 | 0x21A011 Notlaufmanager: Anforderung Deaktivierung Starteinrichtung Elektromaschine von Steuergerät Elektromaschine | 1 |
| 0x21A111 | 0x21A111 Motordrehzahlbegrenzung, Stufe 1: infolge Notlaufanforderung vom EME-Notlaufmanager | 1 |
| 0x21A112 | 0x21A112 Motordrehzahlbegrenzung, Stufe 2: infolge Notlaufanforderung vom EME-Notlaufmanager | 1 |
| 0x21A113 | 0x21A113 Motordrehzahlbegrenzung, Stufe 3: infolge Notlaufanforderung vom EME-Notlaufmanager | 1 |
| 0x21A117 | 0x21A117 Notlaufmanager: Anforderung Verbrennungsmotor Einschaltaufforderer von Steuergerät Elektromaschine | 1 |
| 0x21A118 | 0x21A118 Notlaufmanager: Anforderung Deaktivierung MSA von Steuergerät Elektromaschine | 1 |
| 0x21A119 | 0x21A119 Notlaufmanager: Anforderung Deaktivierung MSA mit Check-Control-Meldung von Steuergerät Elektromaschine | 1 |
| 0x21A11A | 0x21A11A Notlaufmanager: Anforderung Deaktivierung MSA mit Verbrennungsmotor Einschaltaufforderer von Steuergerät Elektromaschine | 1 |
| 0x21A11B | 0x21A11B Notlaufmanager: Anforderung Deaktivierung MSA mit Verbrennungsmotor Enschaltaufforderer und Check-Control-Meldung von Steuergerät Elektromaschine | 1 |
| 0x21A11C | 0x21A11C Notlaufmanager: Anforderung Verbrennungsmotor Einschaltverhinderer von Steuergerät Elektromaschine | 1 |
| 0x21A11D | 0x21A11D Notlaufmanager: Anforderung Verbrennungsmotor MSA Abschaltaufforderer von Steuergerät Elektromaschine | 1 |
| 0x21A11F | 0x21A11F Notlaufmanager: Anforderung Deaktivierung Anzeige verbrennungsmotorischen Reichweite von Steuergerät Elektromaschine | 1 |
| 0x21A120 | 0x21A120 Notlaufmanager: Anforderung elektrischer Notlauf von EGS | 1 |
| 0x21A121 | 0x21A121 Notlaufmanager: Anforderung Neutralschaltung von EGS | 1 |
| 0x21A122 | 0x21A122 Notlaufmanager: Anforderung Deaktivierung Zustarteinrichtung von Steuergerät Elektromaschine | 1 |
| 0x21A210 | 0x21A210 Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 0 |
| 0x21A310 | 0x21A310 Notlauf 1: Sammelfehler für DME Kopplung | 0 |
| 0x21A330 | 0x21A330 Notlauf 2: Sammelfehler für DME Kopplung | 0 |
| 0x21A350 | 0x21A350 Notlauf 3: Sammelfehler für DME Kopplung | 0 |
| 0x21A370 | 0x21A370 Notlauf 4: Sammelfehler für DME Kopplung | 0 |
| 0x21A372 | 0x21A372 Notlauf 5: Sammelfehler für DME Kopplung | 0 |
| 0x21A411 | 0x21A411 Pannendatenspeicher, Messwert: Adresse ungültig | 0 |
| 0x21A412 | 0x21A412 Pannendatenspeicher: Applikationsparameter ungültig | 0 |
| 0x21A413 | 0x21A413 Pannendatenspeicher: Applikation zur Laufzeit geändert | 0 |
| 0x21A414 | 0x21A414 Pannendatenspeicher, Messwert: Pointer ungültig | 0 |
| 0x21A415 | 0x21A415 Pannendatenspeicher, Messwert: Applikation ungültig | 0 |
| 0x21A416 | 0x21A416 Pannendatenspeicher: Fehlfunktion Speicherzugriff | 0 |
| 0x21A417 | 0x21A417 Pannendatenspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A418 | 0x21A418 Pannendatenspeicher, Header: Adresse ungültig | 0 |
| 0x21A419 | 0x21A419 Pannendatenspeicher, Header: Pointer ungültig | 0 |
| 0x21A41A | 0x21A41A Pannendatenspeicher, Header: Applikation ungültig | 0 |
| 0x21A430 | 0x21A430 Langzeitqualitätsspeicher: Fehlfunktion Speicherzugriff | 0 |
| 0x21A431 | 0x21A431 Langzeitqualitätsspeicher: maximaler Sektorwechsel erreicht | 0 |
| 0x21A432 | 0x21A432 Langzeitqualitätsspeicher, Messwert: Adresse ungültig | 0 |
| 0x21A433 | 0x21A433 Langzeitqualitätsspeicher: Applikation zur Laufzeit geändert | 0 |
| 0x21A434 | 0x21A434 Langzeitqualitätsspeicher, Messwert: Applikation ungültig | 0 |
| 0x21A500 | 0x21A500 Notlaufmanager: Anforderung Bauteileschutz Trennkupplung, Abschaltung Verbrennungsmotor | 1 |
| 0x21A501 | 0x21A501 Integrierte Anfahrkupplung: klemmt geschlossen | 1 |
| 0x21A502 | 0x21A502 Integrierte elektrische Getriebeölpumpe: Fehlfunktion | 1 |
| 0x21A503 | 0x21A503 Trennkupplung: klemmt geschlossen | 1 |
| 0x21A504 | 0x21A504 Trennkupplung: klemmt offen | 1 |
| 0x21A505 | 0x21A505 EGS: elektrischer Notlauf aktiv | 1 |
| 0x21A506 | 0x21A506 EGS: mechanischer Notlauf aktiv | 1 |
| 0x21A507 | 0x21A507 EGS: Reset | 1 |
| 0x21A510 | 0x21A510 Startsystem, Elektromaschine: Zeitüberschreitung | 0 |
| 0x21A511 | 0x21A511 Startsystem, Ritzelstarter: Zeitüberschreitung | 0 |
| 0x21A513 | 0x21A513 Startaggregat Startergenerator: Sammelfehler | 0 |
| 0x21B000 | 0x21B000 Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B001 | 0x21B001 Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B002 | 0x21B002 Kraftstofftank Drucksensor/Temperaturfühler Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B003 | 0x21B003 Kraftstofftank Drucksensor/Temperaturfühler - Druck unplausibel (gemeldet vom TFM) | 1 |
| 0x21B004 | 0x21B004 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Druck zu hoch (gemeldet vom TFM) | 1 |
| 0x21B005 | 0x21B005 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Druck zu niedrig (gemeldet vom TFM) | 1 |
| 0x21B006 | 0x21B006 Kraftstofftank Drucksensor/Temperaturfühler Temperatur unplausibel (gemeldet vom TFM) | 1 |
| 0x21B007 | 0x21B007 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Untertemperatur (gemeldet vom TFM) | 1 |
| 0x21B008 | 0x21B008 Kraftstofftank Drucksensor/Temperaturfühler Bereichs- oder Leistungsproblem - Übertemperatur (gemeldet vom TFM) | 1 |
| 0x21B009 | 0x21B009 Kraftstofftank Drucksensor/Temperaturfühler - Drucksignal festliegend (gemeldet vom TFM) | 1 |
| 0x21B00A | 0x21B00A Kraftstofftank Drucksensor/Temperaturfühler Temperatur unplausibel (gemeldet vom TFM) | 1 |
| 0x21B00B | 0x21B00B Tankentlüftungssystem Tankfunktionsmodul Zeitgeber - Fehlfunktion (gemeldet vom TFM) | 1 |
| 0x21B00C | 0x21B00C Tankentlüftungssystem - sehr kleines Leck entdeckt (gemeldet vom TFM) | 1 |
| 0x21B00D | 0x21B00D Tankabsperrventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B00E | 0x21B00E Tankabsperrventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B00F | 0x21B00F Tankabsperrventil Steuerkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B010 | 0x21B010 Tankabsperrventil - klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B011 | 0x21B011 Tankabsperrventil - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B012 | 0x21B012 Tankabsperrventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B013 | 0x21B013 Atmosphären Isolationsventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B014 | 0x21B014 Atmosphären Isolationsventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B015 | 0x21B015 Atmosphären Isolationsventil Steuerkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B016 | 0x21B016 Atmosphären Isolationsventil - klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B017 | 0x21B017 Atmosphären Isolationsventil - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B018 | 0x21B018 Atmosphären Isolationsventil Steuerkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B019 | 0x21B019 Tankklappe Positionssensor/-schalter Schaltkreis - Fehlfunktion oder  Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B01A | 0x21B01A Tankklappe Positionssensor/-schalter Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B01B | 0x21B01B Tankklappe Positionssensor/-schalter Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B01C | 0x21B01C Tankklappe - klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B01D | 0x21B01D Tankklappe - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B01E | 0x21B01E Tankklappe Positionssensor/-schalter Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B01F | 0x21B01F Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B020 | 0x21B020 Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B021 | 0x21B021 Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B022 | 0x21B022 Tankklappe Öffnungsanforderungssensor/-schalter - Leistungsproblem oder klemmt offen (gemeldet vom TFM) | 1 |
| 0x21B023 | 0x21B023 Tankklappe Öffnungsanforderungssensor/-schalter - klemmt geschlossen (gemeldet vom TFM) | 1 |
| 0x21B024 | 0x21B024 Tankklappe Verriegelungsteuerung - Fehlfunktion oder Leitungsunterbrechung (gemeldet vom TFM) | 1 |
| 0x21B025 | 0x21B025 Tankklappe Verriegelungsteuerung Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x21B026 | 0x21B026 Tankklappe Verriegelungsteuerung Schaltkreis - hoch (gemeldet vom TFM) | 1 |
| 0x21B029 | 0x21B029 Tankklappe Verriegelungsteuerung Schaltkreis - niedrig (gemeldet vom TFM) | 1 |
| 0x230008 | 0x230008 Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231501 | 0x231501 Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | 0x231502 Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231F04 | 0x231F04 A- und FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | 0x233004 FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 1 |
| 0x234709 | 0x234709 Flexray, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): Aliveprüfung | 0 |
| 0x234710 | 0x234710 Flexray, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): fehlt | 0 |
| 0x23471A | 0x23471A Flexray, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): Prüfsumme falsch | 0 |
| 0x234A05 | 0x234A05 A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): fehlt | 0 |
| 0x235410 | 0x235410 Notlaufmanager: Anforderung Leerlaufdrehzahlanhebung von Steuergerät Elektromaschine | 1 |
| 0x235805 | 0x235805 FlexRay, Botschaft(Status Reibwert Fahrdynamik, 53.1.4): Signalfehler | 0 |
| 0xCD840A | 0xCD840A FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD841F | 0xCD841F FlexRay Bus: Kommunikationsfehler nach FlexRay Wake-up | 1 |
| 0xCD8420 | 0xCD8420 FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | 0xCD8486 A-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8801 | 0xCD8801 FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCD8BFF | 0xCD8BFF Netzwerkfehler: nur zum Test | 0 |
| 0xCD8E10 | 0xCD8E10 LIN Bus: Kommunikationsfehler | 1 |
| 0xCD8E11 | 0xCD8E11 LIN, Kommunikation (Ladeeinheit für Zusatzbatterie): fehlt | 0 |
| 0xCD8E12 | 0xCD8E12 LIN, Kommunikation (Generator): fehlt | 0 |
| 0xCD8F01 | 0xCD8F01 LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD8F10 | 0xCD8F10 LIN, Kommunikation (Startergenerator): fehlt | 0 |
| 0xCD9010 | 0xCD9010 LIN, Kommunikation (Motor-Kühlmittelpumpe): fehlt | 1 |
| 0xCD9203 | 0xCD9203 LIN, Kommunikation (Kühlerjalousie): fehlt | 0 |
| 0xCD9432 | 0xCD9432 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: fehlt | 1 |
| 0xCD9435 | 0xCD9435 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 1 |
| 0xCD9437 | 0xCD9437 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD9440 | 0xCD9440 FlexRay, Botschaft (Navigationsgraph, 253.3.4): fehlt | 0 |
| 0xCD9441 | 0xCD9441 FlexRay, Botschaft (Navigationsgraph Fahrspur, 137.1.2): fehlt | 0 |
| 0xCD9442 | 0xCD9442 FlexRay, Botschaft (Navigationsgraph Karten Daten, 258.3.4): fehlt | 0 |
| 0xCD9443 | 0xCD9443 FlexRay, Botschaft (Übereinstimmung Navigationsgraph, 254.0.4): fehlt | 0 |
| 0xCD9444 | 0xCD9444 FlexRay, Botschaft (Synchronisation Navigationsgraph, 254.1.4): fehlt | 0 |
| 0xCD9445 | 0xCD9445 FlexRay, Botschaft (Navigationsgraph Geschwindigkeit, 258.1.4): fehlt | 0 |
| 0xCD9446 | 0xCD9446 FlexRay, Botschaft (Navigation System Information, 277.6.8): fehlt  | 0 |
| 0xCD9447 | 0xCD9447 FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): Prüfsumme falsch | 0 |
| 0xCD9448 | 0xCD9448 FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): Aliveprüfung | 0 |
| 0xCD9449 | 0xCD9449 FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): fehlt | 0 |
| 0xCD944A | 0xCD944A Kommunikation: Signal (QU_ACLNX_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCD944B | 0xCD944B Kommunikation: Signal (QU_ACLNY_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCD9450 | 0xCD9450 FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): Prüfsumme falsch | 0 |
| 0xCD9451 | 0xCD9451 FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): Aliveprüfung | 0 |
| 0xCD9452 | 0xCD9452 FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): fehlt | 0 |
| 0xCD9453 | 0xCD9453 FlexRay, Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, 69.0.2): Prüfsumme falsch | 0 |
| 0xCD9454 | 0xCD9454 FlexRay, Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, 69.0.2): Aliveprüfung | 0 |
| 0xCD9455 | 0xCD9455 FlexRay, Botschaft (Anforderung Radmoment Antrieb 1 elektrifizierter Allrad, 69.0.2): fehlt | 0 |
| 0xCD9456 | 0xCD9456 FlexRay, Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, 69.0.2): Prüfsumme falsch | 0 |
| 0xCD9457 | 0xCD9457 FlexRay, Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, 69.0.2): Aliveprüfung | 0 |
| 0xCD9458 | 0xCD9458 FlexRay, Botschaft (Anforderung Radmoment Antrieb 2 elektrifizierter Allrad, 69.0.2): fehlt | 0 |
| 0xCD9462 | 0xCD9462 FlexRay, Botschaft (Vorgabe Drehmoment Betriebsstrategie, 94.1.2): fehlt | 0 |
| 0xCD9463 | 0xCD9463 FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): fehlt | 0 |
| 0xCD9464 | 0xCD9464 FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): fehlt | 0 |
| 0xCD9502 | 0xCD9502 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | 0xCD9504 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): fehlt | 1 |
| 0xCD9508 | 0xCD9508 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | 0xCD9602 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | 0xCD9604 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | 0xCD9608 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | 0xCD9702 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | 0xCD9704 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | 0xCD9708 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9710 | 0xCD9710 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik 2, 272.4.8): fehlt | 1 |
| 0xCD9730 | 0xCD9730 FlexRay, Botschaft (Daten Zusatzbatterie, 262.2.4): fehlt | 0 |
| 0xCD9902 | 0xCD9902 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | 0xCD9904 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | 0xCD9908 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | 0xCD9932 FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Aliveprüfung | 1 |
| 0xCD9933 | 0xCD9933 FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): fehlt | 1 |
| 0xCD9934 | 0xCD9934 FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Prüfsumme falsch | 1 |
| 0xCD9A02 | 0xCD9A02 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | 0xCD9A04 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | 0xCD9A08 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9B02 | 0xCD9B02 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Aliveprüfung | 1 |
| 0xCD9B04 | 0xCD9B04 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): fehlt | 1 |
| 0xCD9B08 | 0xCD9B08 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Prüfsumme falsch | 1 |
| 0xCD9C12 | 0xCD9C12 A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): fehlt, Sender EME | 0 |
| 0xCD9D02 | 0xCD9D02 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9D04 | 0xCD9D04 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9D08 | 0xCD9D08 FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9E02 | 0xCD9E02 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Aliveprüfung | 1 |
| 0xCD9E04 | 0xCD9E04 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): fehlt | 1 |
| 0xCD9E08 | 0xCD9E08 FlexRay, Botschaft (Querbeschleunigung Schwerpunkt, 55.0.2): Prüfsumme falsch | 1 |
| 0xCD9F02 | 0xCD9F02 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Aliveprüfung | 1 |
| 0xCD9F04 | 0xCD9F04 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): fehlt | 1 |
| 0xCD9F08 | 0xCD9F08 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Prüfsumme falsch | 1 |
| 0xCD9F11 | 0xCD9F11 FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): Signalfehler | 0 |
| 0xCD9F13 | 0xCD9F13 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Signalfehler | 1 |
| 0xCDA002 | 0xCDA002 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Aliveprüfung | 1 |
| 0xCDA004 | 0xCDA004 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): fehlt | 1 |
| 0xCDA008 | 0xCDA008 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): Prüfsumme falsch | 1 |
| 0xCDA011 | 0xCDA011 FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): Aliveprüfung | 1 |
| 0xCDA012 | 0xCDA012 FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): fehlt | 1 |
| 0xCDA013 | 0xCDA013 FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): Prüfsumme falsch | 1 |
| 0xCDA102 | 0xCDA102 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Aliveprüfung | 1 |
| 0xCDA104 | 0xCDA104 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): fehlt | 1 |
| 0xCDA108 | 0xCDA108 FlexRay, Botschaft (Neigung Fahrbahn, 56.1.2): Prüfsumme falsch | 1 |
| 0xCDA204 | 0xCDA204 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA302 | 0xCDA302 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | 0xCDA304 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | 0xCDA308 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA310 | 0xCDA310 FlexRay, Botschaft (Daten Hybrid, 73.0.2): Aliveprüfung | 1 |
| 0xCDA311 | 0xCDA311 FlexRay, Botschaft (Daten Hybrid, 73.0.2): Prüfsumme falsch | 1 |
| 0xCDA312 | 0xCDA312 FlexRay, Botschaft (Daten Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA313 | 0xCDA313 FlexRay, Botschaft (Daten Hybrid, 73.0.2): Signalfehler | 1 |
| 0xCDA321 | 0xCDA321 FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): Signalfehler | 1 |
| 0xCDA322 | 0xCDA322 FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): fehlt | 1 |
| 0xCDA402 | 0xCDA402 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | 0xCDA404 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | 0xCDA408 FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA421 | 0xCDA421 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | 0xCDA422 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | 0xCDA423 FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA426 | 0xCDA426 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA428 | 0xCDA428 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Aliveprüfung | 1 |
| 0xCDA429 | 0xCDA429 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Prüfsumme falsch | 1 |
| 0xCDA432 | 0xCDA432 FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA435 | 0xCDA435 FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA451 | 0xCDA451 FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied, 49.0.2): fehlt | 1 |
| 0xCDA452 | 0xCDA452 FlexRay, Botschaft (Ist Kraft Zahnstange, 49.0.2): fehlt | 1 |
| 0xCDA491 | 0xCDA491 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCDA492 | 0xCDA492 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCDA493 | 0xCDA493 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCDA494 | 0xCDA494 FlexRay, Botschaft (Soll Bremsmoment Summe Koordiniert, 63.1.4): fehlt | 1 |
| 0xCDA498 | 0xCDA498 FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): Signalfehler | 1 |
| 0xCDA520 | 0xCDA520 FA-CAN, Botschaft (Status Drucktank, 0x2E7): fehlt | 0 |
| 0xCDA521 | 0xCDA521 FlexRay,Botschaft (Vorgabe Drehmoment Betriebsstrategie / Vorgabe Drehmoment | 0 |
| 0xCDA522 | 0xCDA522 Kommunikation: Signal (AVL_TORQ_MOT_TRCT) in FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): ausgefallen oder ungültig | 1 |
| 0xCDA523 | 0xCDA523 Kommunikation: Signal (ST_UNRU_DSC) in FlexRay, Botschaft (Status Stabilisierung DSC, 47.1.2): ungültig | 1 |
| 0xCDA524 | 0xCDA524 FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDA525 | 0xCDA525 FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Signalfehler | 1 |
| 0xCDA526 | 0xCDA526 Kommunikation: Signal (AVL_TRGR_RW) in FlexRay, Botschaft (Neigung Fahrbahn / Lenkwinkel Vorderachse Effektiv, 56.1.2): ungültig | 1 |
| 0xCDA529 | 0xCDA529 Kommunikation: Signal (TORQ_MOT_1_CTRL_ITG) in A-CAN, Botschaft (Status Daten E-Motor 1, 0x29D): ungültig | 1 |
| 0xCDA52A | 0xCDA52A Kommunikation: Signal (ACLNX_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCDA52B | 0xCDA52B Kommunikation: Signal (ACLNY_COG) in FlexRay, Botschaft (Längsbeschleunigung Schwerpunkt / Querbeschleunigung Schwerpunkt, 55.0.2): ungültig | 1 |
| 0xCDA52C | 0xCDA52C Kommunikation: Signal (AVL_LOGR_RW) in FlexRay, Botschaft (Neigung Fahrbahn / Lenkwinkel Vorderachse Effektiv, 56.1.2): ungültig | 1 |
| 0xCDA52D | 0xCDA52D Kommunikation: Signal (AVL_RQMT_HTFL) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA52E | 0xCDA52E Kommunikation: Signal (AVL_STEA_FTAX_WHL) in FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): ungültig | 1 |
| 0xCDA52F | 0xCDA52F Kommunikation: Signal (COU_(X)_NAVGRPH_2_EVT_PROFIL) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA530 | 0xCDA530 Kommunikation: Signal (COU_NAVGRPH_2_(X)_PROFIL) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA531 | 0xCDA531 Kommunikation: Signal (T_SEC_COU_REL) in FA-CAN, Botschaft (Relativzeit BN2020, 0x328): ungültig | 1 |
| 0xCDA532 | 0xCDA532 Kommunikation: Signal (DRAW_TORQ_CRSH_GRB) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA533 | 0xCDA533 Kommunikation: Signal (CTR_SNW) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA534 | 0xCDA534 Kommunikation: Signal (DISP_ECO_CON_2_HTCL_COOD) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA535 | 0xCDA535 Kommunikation: Signal (DISP_GR_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA536 | 0xCDA536 Kommunikation: Signal (DISP_RQ_GR_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA537 | 0xCDA537 Kommunikation: Signal (ST_CT_BTL) in FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): ungültig | 1 |
| 0xCDA538 | 0xCDA538 Kommunikation: Signal (ST_PURG_RDI) in FA-CAN, Botschaft (Status Drucktank, 0x2E7): ungültig | 1 |
| 0xCDA539 | 0xCDA539 Kommunikation: Signal (ST_ILK_STRT_GRB) in FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA53A | 0xCDA53A Kommunikation: Signal (ST_BLTB_SW_DR) in FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): ungültig | 1 |
| 0xCDA53B | 0xCDA53B FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): Prüfsumme falsch | 1 |
| 0xCDA53C | 0xCDA53C FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): Aliveprüfung | 1 |
| 0xCDA53D | 0xCDA53D FlexRay, Botschaft (Status Gurt Kontakt Sitzbelegung, 275.6.8): fehlt | 1 |
| 0xCDA53E | 0xCDA53E FlexRay, Botschaft (Temperatur_Bremse, 281.4.8): Aliveprüfung | 1 |
| 0xCDA53F | 0xCDA53F FlexRay, Botschaft (Temperatur_Bremse , 281.4.8): fehlt | 1 |
| 0xCDA540 | 0xCDA540 FlexRay, Botschaft (Teleservice Trigger Status, 279.4.8): fehlt | 1 |
| 0xCDA541 | 0xCDA541 Kommunikation: Signal (DIAG_OBD_HYB_1_MUX_IMME) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA542 | 0xCDA542 Kommunikation: Signal (DIAG_OBD_HYB_1_MUX_MAX) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA543 | 0xCDA543 Kommunikation: Signal (IDX_GRB_DYN) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA544 | 0xCDA544 Kommunikation: Signal (IDX_SEG_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4): ungültig | 1 |
| 0xCDA545 | 0xCDA545 Kommunikation: Signal ((X)_1_L_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA546 | 0xCDA546 Kommunikation: Signal ((X)_2_L_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA547 | 0xCDA547 Kommunikation: Signal ((X)_3_L_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA548 | 0xCDA548 Kommunikation: Signal (EVT_L_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA549 | 0xCDA549 Kommunikation: Signal (EVT_OFFS_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA54A | 0xCDA54A Kommunikation: Signal (L_SEG_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): ungültig | 1 |
| 0xCDA54B | 0xCDA54B Kommunikation: Signal (RT_OFFS_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Route Offset, 261.2.4): ungültig | 1 |
| 0xCDA54C | 0xCDA54C Kommunikation: Signal (RNG) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA54D | 0xCDA54D Kommunikation: Signal (LIM_TORQ_CRSH_GRB_PROTE) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA54E | 0xCDA54E Kommunikation: Signal (MILE_KM) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA54F | 0xCDA54F Kommunikation: Signal (TAR_MOD_SHFT_DVCH) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA550 | 0xCDA550 Kommunikation: Signal (TAR_OPMO_PT_DRS) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 33.1.4): ungültig | 1 |
| 0xCDA551 | 0xCDA551 Kommunikation: Signal (MASS_VEH) in FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): ungültig | 1 |
| 0xCDA552 | 0xCDA552 Kommunikation: Signal (DISP_RPM_ENG_CRSH_GRB) in A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): ungültig | 1 |
| 0xCDA553 | 0xCDA553 Kommunikation: Signal (TAR_RPM_ENG_CRSH_GRB) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA554 | 0xCDA554 Kommunikation: Signal (QUAN_NAVGRPH_2_RAD_PROFIL) in FlexRay, Botschaft (Nav-Graph 2 Route Beschreibung, 253.0.8): ungültig | 1 |
| 0xCDA555 | 0xCDA555 Kommunikation: Signal (AVL_RPM_WHL_FLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA556 | 0xCDA556 Kommunikation: Signal (AVL_RPM_WHL_FRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA557 | 0xCDA557 Kommunikation: Signal (AVL_RPM_WHL_RLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA558 | 0xCDA558 Kommunikation: Signal (AVL_RPM_WHL_RRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA559 | 0xCDA559 Kommunikation: Signal (ST_OPMO_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA55A | 0xCDA55A Kommunikation: Signal (DISP_PRG_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA55B | 0xCDA55B Kommunikation: Signal (QU_FN_OBD_1_SEN_1_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55C | 0xCDA55C Kommunikation: Signal (QU_FN_OBD_1_SEN_2_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55D | 0xCDA55D Kommunikation: Signal (QU_FN_OBD_1_SEN_3_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55E | 0xCDA55E Kommunikation: Signal (QU_FN_OBD_1_SEN_4_ERR) in FlexRay, Botschaft (Diagnose OBD Hybrid 1, 263.3.4): ungültig | 1 |
| 0xCDA55F | 0xCDA55F Kommunikation: Signal (AVL_SETQ_EFAN_AIC) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA560 | 0xCDA560 Kommunikation: Signal (RQ_HTFL_AIC) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA561 | 0xCDA561 Kommunikation: Signal (RQ_COOL_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA562 | 0xCDA562 Kommunikation: Signal (RQ_GRB_DYNS_RPM_ENG) in A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): ungültig | 1 |
| 0xCDA563 | 0xCDA563 Kommunikation: Signal (ST_TORQ_COMPT_RISE) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA564 | 0xCDA564 Kommunikation: Signal (REIN_GRDT) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0xCDA565 | 0xCDA565 Kommunikation: Signal ((X)_1_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA566 | 0xCDA566 Kommunikation: Signal ((X)_2_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA567 | 0xCDA567 Kommunikation: Signal ((X)_3_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA568 | 0xCDA568 Kommunikation: Signal (QU_AVL_RPM_WHL_FLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA569 | 0xCDA569 Kommunikation: Signal (QU_AVL_RPM_WHL_FRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA56A | 0xCDA56A Kommunikation: Signal (QU_AVL_RPM_WHL_RLH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA56B | 0xCDA56B Kommunikation: Signal (QU_AVL_RPM_WHL_RRH) in FlexRay, Botschaft (Ist Drehzahl Rad, 46.0.1): ungültig | 1 |
| 0xCDA56C | 0xCDA56C Kommunikation: Signal (QU_AVL_STEA_FTAX_WHL) in FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): ungültig | 1 |
| 0xCDA56D | 0xCDA56D Kommunikation: Signal (ST_CT_BON) in FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): ungültig | 1 |
| 0xCDA56E | 0xCDA56E Kommunikation: Signal (ST_BRG_DV) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): ungültig | 1 |
| 0xCDA570 | 0xCDA570 Kommunikation: Signal (QU_AVL_BRTORQ_SUM_DVCH) in FlexRay, Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4): ungültig | 1 |
| 0xCDA571 | 0xCDA571 Kommunikation: Signal (QU_AVL_BRTORQ_SUM) in FlexRay, Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4): ungültig | 1 |
| 0xCDA572 | 0xCDA572 Kommunikation: Signal (ST_OP_MSA) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA573 | 0xCDA573 Kommunikation: Signal (ST_STCD_PENG) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA574 | 0xCDA574 Kommunikation: Signal (ST_CCLT_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA575 | 0xCDA575 Kommunikation: Signal (ST_CCLT_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA576 | 0xCDA576 Kommunikation: Signal (ST_ILK_ERRM_FZM) in FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): ungültig | 1 |
| 0xCDA577 | 0xCDA577 Kommunikation: Signal (DISP_ECO_CON_HTCL_COOD) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA578 | 0xCDA578 Kommunikation: Signal (RQ_SU_SW_DRDY) in FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik / Konfiguration Schalter Fahrdynamik 2, 272.4.8): ungültig | 1 |
| 0xCDA579 | 0xCDA579 Kommunikation: Signal (ST_ENERG_FZM) in FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): ungültig | 1 |
| 0xCDA57A | 0xCDA57A Kommunikation: Signal (CTR_ENG_STOP) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA57B | 0xCDA57B Kommunikation: Signal (EVT_INFO_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA57C | 0xCDA57C Kommunikation: Signal (EVT_INFO_SRC_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA57D | 0xCDA57D Kommunikation: Signal (EVT_PRO_(X)_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA57E | 0xCDA57E Kommunikation: Signal (QU_FN_ABS) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): ungültig | 1 |
| 0xCDA57F | 0xCDA57F Kommunikation: Signal (QU_FN_ASC) in FlexRay, Botschaft (Status Stabilisierung DSC / Status Stabilisierung DSC 2, 47.1.2): ungültig | 1 |
| 0xCDA580 | 0xCDA580 Kommunikation: Signal (ST_FLLV_FUTA_SPAR) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA581 | 0xCDA581 Kommunikation: Signal (ST_GRCT) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA582 | 0xCDA582 Kommunikation: Signal (Com_stGbxFsHup_A_Sig_C) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA583 | 0xCDA583 Kommunikation: Signal (RQ_MIL_DIAG_OBD_GRB) in A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): ungültig | 1 |
| 0xCDA584 | 0xCDA584 Kommunikation: Signal (RQ_MIL_DIAG_OBD_GRB) in FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): ungültig | 1 |
| 0xCDA585 | 0xCDA585 Kommunikation: Signal (ST_VRS_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA586 | 0xCDA586 Kommunikation: Signal (ST_GRSEL_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA587 | 0xCDA587 Kommunikation: Signal (DISP_PO_GRB) in FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): ungültig | 1 |
| 0xCDA588 | 0xCDA588 Kommunikation: Signal (ST_KL_KEY_VLD) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA589 | 0xCDA589 Kommunikation: Signal (ST_KL_KEY_VLD) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA58A | 0xCDA58A Kommunikation: Signal (QU_MASS_VEH) in FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): ungültig | 1 |
| 0xCDA58B | 0xCDA58B Kommunikation: Signal (NAVGRAPH_2_PRO_SHI) in FlexRay, Botschaft (Nav-Graph 2 Profil, 239.0.2): ungültig | 1 |
| 0xCDA58C | 0xCDA58C Kommunikation: Signal (NAVGRAPH_2_PRO_EVT) in FlexRay, Botschaft (Nav-Graph 2 Ereignis Profil, 239.1.2): ungültig | 1 |
| 0xCDA58D | 0xCDA58D Kommunikation: Signal (ST_PHTR_ENGSTA_DRV) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA58E | 0xCDA58E Kommunikation: Signal (CTR_CR_SWO_EKP) in FA-CAN, Botschaft (Steuerung Crashabschaltung EKP, 0x135): ungültig | 1 |
| 0xCDA58F | 0xCDA58F Kommunikation: Signal (CTR_SLP_BUS) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA590 | 0xCDA590 Kommunikation: Signal (CTR_FSL) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA591 | 0xCDA591 Kommunikation: Signal (DSTN_SLRDI_GLB) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA592 | 0xCDA592 Kommunikation: Signal (CTR_SLRDI_GLB) in FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): ungültig | 1 |
| 0xCDA593 | 0xCDA593 Kommunikation: Signal (ST_SSP) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA594 | 0xCDA594 Kommunikation: Signal (ST_ILK_STRT_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA595 | 0xCDA595 Kommunikation: Signal (ST_KL) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA596 | 0xCDA596 Kommunikation: Signal (ST_RQ_TORQ_GRB) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA597 | 0xCDA597 Kommunikation: Signal (ST_LIM_STORQ_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA598 | 0xCDA598 Kommunikation: Signal (QU_TAR_WMOM_PT_SUM_STAB) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): ungültig | 1 |
| 0xCDA599 | 0xCDA599 Kommunikation: Signal (QU_AVL_STMOM_DV_ACT) in FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied / Ist Kraft Zahnstange, 49.0.2): ungültig | 1 |
| 0xCDA59A | 0xCDA59A Kommunikation: Signal (QU_TAR_2_WMOM_PT_SUM_DRS) in FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): ungültig | 1 |
| 0xCDA59B | 0xCDA59B Kommunikation: Signal (ST_GRLV_ACV_GRB) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA59C | 0xCDA59C Kommunikation: Signal (SU_DSC_WSS) in FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): ungültig | 1 |
| 0xCDA59D | 0xCDA59D Kommunikation: Signal (TYP_STREET_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): ungültig | 1 |
| 0xCDA59E | 0xCDA59E Kommunikation: Signal (ST_VEH_CON) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA59F | 0xCDA59F Kommunikation: Signal (ST_VEH_CON) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA601 | 0xCDA601 Kommunikation: Signal (QU_SER_REPAT_XTRQ_FTAX_BAX_ACT) in FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse / xDrive Stellglied Information, 19.3.4): ungültig | 1 |
| 0xCDA603 | 0xCDA603 Kommunikation: Signal (QU_AVL_REPAT_XTRQ_FTAX_BAX) in FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse / xDrive Stellglied Information, 19.3.4): ungültig | 1 |
| 0xCDA605 | 0xCDA605 Kommunikation: Signal (ST_RSTA_2) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA606 | 0xCDA606 Kommunikation: Signal (ST_GR_BAC) in FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): ungültig | 1 |
| 0xCDA607 | 0xCDA607 Kommunikation: Signal (AVL_REPAT_XTRQ_FTAX_BAX) in FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse / xDrive Stellglied Information, 19.3.4): ungültig | 1 |
| 0xCDA609 | 0xCDA609 Kommunikation: Signal (ST_VEHSS_PBRK) in FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): ungültig | 1 |
| 0xCDA60A | 0xCDA60A Kommunikation: Signal (ST_VEHSS) in FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): ungültig | 1 |
| 0xCDA60B | 0xCDA60B Kommunikation: Signal (LIM_V_NAVGRPH_2) in FlexRay, Botschaft (Nav-Graph 2 Aktuelle Segment, 252.2.4): ungültig | 1 |
| 0xCDA60C | 0xCDA60C Kommunikation: Signal (QU_V_VEH_COG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug / Geschwindigkeit Fahrzeug 2, 55.3.4): ungültig | 1 |
| 0xCDA60D | 0xCDA60D Kommunikation: Signal (CTR_RDI_AIC) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA60E | 0xCDA60E Kommunikation: Signal (TEMP_EX) in FA-CAN, Botschaft (Außentemperatur, 0x2CA): ungültig | 1 |
| 0xCDA60F | 0xCDA60F Kommunikation: Signal (TEMP_EX_UNFILT) in FA-CAN, Botschaft (Außentemperatur, 0x2CA): ungültig | 1 |
| 0xCDA610 | 0xCDA610 Kommunikation: Signal (TEMP_TROI) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA611 | 0xCDA611 Kommunikation: Signal (AVL_TORQ_ACCM) in FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): ungültig | 1 |
| 0xCDA612 | 0xCDA612 Kommunikation: Signal (AVL_BRTORQ_SUM_DVCH) in FlexRay, Botschaft (Ist Bremsmoment Summe / Status Parametrisierung I-Brake, 43.3.4): ungültig | 1 |
| 0xCDA613 | 0xCDA613 Kommunikation: Signal (TORQ_COMPT_RISE) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): ungültig | 1 |
| 0xCDA614 | 0xCDA614 Kommunikation: Signal (LSS_TORQ_OUT_GRB) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 1 |
| 0xCDA615 | 0xCDA615 Kommunikation: Signal (TAR_TORQ_CRSH_SLOW) in A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): ungültig | 1 |
| 0xCDA616 | 0xCDA616 Kommunikation: Signal (TAR_WMOM_PT_SUM_STAB_FAST) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung, 43.1.4): ungültig | 1 |
| 0xCDA617 | 0xCDA617 Kommunikation: Signal (TAR_WMOM_PT_SUM_STAB) in FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): ungültig | 1 |
| 0xCDA618 | 0xCDA618 Kommunikation: Signal (AVL_STMOM_DV_ACT) in FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied / Ist Kraft Zahnstange, 49.0.2): ungültig | 1 |
| 0xCDA619 | 0xCDA619 Kommunikation: Signal (TAR_2_WMOM_PT_SUM_DRS) in FlexRay, Botschaft (Anforderung 2 Radmoment Antriebstrang Summe FAS, 131.1.4): ungültig | 1 |
| 0xCDA61A | 0xCDA61A Kommunikation: Signal (UN_PWR_S_MOD) in FlexRay, Botschaft (Einheiten BN2020, 252.0.4): ungültig | 1 |
| 0xCDA61B | 0xCDA61B Kommunikation: Signal (UN_TORQ_S_MOD) in FlexRay, Botschaft (Einheiten BN2020, 252.0.4): ungültig | 1 |
| 0xCDA61C | 0xCDA61C Kommunikation: Signal (V_VEH_COG) in FlexRay, Botschaft (Geschwindigkeit Fahrzeug / Geschwindigkeit Fahrzeug 2, 55.3.4): ungültig | 1 |
| 0xCDA61D | 0xCDA61D Kommunikation: Signal (FLLV_FUTA) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA61E | 0xCDA61E Kommunikation: Signal (FLLV_FUTA_LH) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA61F | 0xCDA61F Kommunikation: Signal (FLLV_FUTA_RH) in FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): ungültig | 1 |
| 0xCDA620 | 0xCDA620 Kommunikation: Signal (VYAW_VEH) in FlexRay, Botschaft (Daten Fahrdynamiksensor Erweitert / Giergeschwindigkeit Fahrzeug, 56.0.2): ungültig | 1 |
| 0xCDA62A | 0xCDA62A Kommunikation: Signal (AVL_COL_TEMP_ENGMG_EL) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA62B | 0xCDA62B Kommunikation: Signal (AVL_OPMO_MOT_1) in A-CAN, Botschaft (Status Daten E-Motor 1, 0x29D): ungültig | 1 |
| 0xCDA62C | 0xCDA62C Kommunikation: Signal (AVL_PWR_DOCTR_HV_BN) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA62D | 0xCDA62D Kommunikation: Signal (AVL_PWR_HV_BN) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA62E | 0xCDA62E Kommunikation: Signal (AVL_TEMP_CHGE) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA62F | 0xCDA62F Kommunikation: Signal (CHGCOND_HVSTO) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): ungültig | 1 |
| 0xCDA630 | 0xCDA630 Kommunikation: Signal (CHGCOND_HVSTO_DELTA) in A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): ungültig | 1 |
| 0xCDA631 | 0xCDA631 Kommunikation: Signal (CHL_VRFD_AVL_DT_SRT_MOT_1) in A-CAN, Botschaft (Abgesichert Ist Daten Kurzzeit E-Motor 1, 0xCD): ungültig | 1 |
| 0xCDA632 | 0xCDA632 Kommunikation: Signal (FRSG_FN_DRVG_CYC) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA633 | 0xCDA633 Kommunikation: Signal (GRB_2_IN_RPM_MAX) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA634 | 0xCDA634 Kommunikation: Signal (PCN_TORQ_MAX_MOT_1_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA635 | 0xCDA635 Kommunikation: Signal (PCN_TORQ_MAX_MOT_TRCT_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA636 | 0xCDA636 Kommunikation: Signal (PCN_TORQ_MIN_MOT_1_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA637 | 0xCDA637 Kommunikation: Signal (PCN_TORQ_MIN_MOT_TRCT_STAT_OSTR) in A-CAN, Botschaft (Vorgabe Drehmoment Traktion Langzeit, 0x13E): ungültig | 1 |
| 0xCDA638 | 0xCDA638 Kommunikation: Signal (RLS_RSTA_EGS) in A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): ungültig | 1 |
| 0xCDA639 | 0xCDA639 Kommunikation: Signal (RLS_TYP_ENGSTA_MOT_TRCT) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA63A | 0xCDA63A Kommunikation: Signal (RQ_CENG_PWRD_DRV_ELC) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDA63B | 0xCDA63B Kommunikation: Signal (RQ_CHGCOND_HVSTO_MAX) in A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): ungültig | 1 |
| 0xCDA63C | 0xCDA63C Kommunikation: Signal (RQ_CHGCOND_HVSTO_MIN) in A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): ungültig | 1 |
| 0xCDA63D | 0xCDA63D Kommunikation: Signal (RQ_OPMO_HYM_HVSTO) in A-CAN, Botschaft (Modus Spannungsgesteuert, 0x432): ungültig | 1 |
| 0xCDA63E | 0xCDA63E A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): Prüfsumme flasch | 1 |
| 0xCDA63F | 0xCDA63F A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): Aliveprüfung | 1 |
| 0xCDA640 | 0xCDA640 A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): fehlt | 1 |
| 0xCDA641 | 0xCDA641 FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): Prüfsumme falsch | 1 |
| 0xCDA642 | 0xCDA642 FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): Aliveprüfung | 1 |
| 0xCDA643 | 0xCDA643 FA-CAN, Botschaft (Status Drucktank, 0x2E7): Prüfsumme falsch | 1 |
| 0xCDA644 | 0xCDA644 FA-CAN, Botschaft (Status Drucktank, 0x2E7): Aliveprüfung | 1 |
| 0xCDA645 | 0xCDA645 FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): fehlt | 1 |
| 0xCDA646 | 0xCDA646 Kommunikation: Signal (TAR_PO_GRB) in FA-CAN, Botschaft (Daten Position Getriebestrang, 0x212): ungültig | 1 |
| 0xCDA647 | 0xCDA647 Kommunikation: Signal (AVL_DIRRT_MOT_TRCT) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA648 | 0xCDA648 Kommunikation: Signal (AVL_OPMO_MOT_TRCT) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA649 | 0xCDA649 Kommunikation: Signal (AVL_RPM_MOT_TRCT) in FlexRay, Botschaft (Ist Daten E-Motor Traktion, 93.0.2): ungültig | 1 |
| 0xCDA64A | 0xCDA64A Kommunikation: Signal (ENERG_BN_RDI_DRVG) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA64B | 0xCDA64B Kommunikation: Signal (RLS_OVLD_MOT_TRCT) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA64C | 0xCDA64C Kommunikation: Signal (RQ_EMMOD_HYB_2_ENGMG_EL) in FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): ungültig | 1 |
| 0xCDA64D | 0xCDA64D Kommunikation: Signal (RQ_EMMOD_HYB_3_ENGMG_EL) in FlexRay, Botschaft (Status E-Motor Traktion, 238.1.2): ungültig | 1 |
| 0xCDA64E | 0xCDA64E Kommunikation: Signal (RQ_MIL_DIAG_OBD_DRDY) in FlexRay, Botschaft (Steuerung Diagnose OBD Fahrdynamik, 247.0.2): ungültig | 1 |
| 0xCDA64F | 0xCDA64F Kommunikation: Signal (SPEC_DYNMC_GRB_2) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA650 | 0xCDA650 Kommunikation: Signal (ST_CHGNG_HV_PWMG) in FlexRay, Botschaft (Status DCDC, 125.0.2): ungültig | 1 |
| 0xCDA651 | 0xCDA651 Kommunikation: Signal (ST_INFO_GRB_2) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA652 | 0xCDA652 FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): Prüfsumme falsch | 1 |
| 0xCDA653 | 0xCDA653 FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): Aliveprüfung | 1 |
| 0xCDA654 | 0xCDA654 Kommunikation: Signal (ST_PSBTY_ENGSTA_ENGSTP) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA655 | 0xCDA655 Kommunikation: Signal (ST_RLS_WISH_MOM_OBD) in FlexRay, Botschaft (Status Betriebsart E-Motor Traktion, 94.0.2): ungültig | 1 |
| 0xCDA656 | 0xCDA656 Kommunikation: Signal (V_VEH_MAX) in FlexRay, Botschaft (Möglichkeit Motorstart Motorstop, 235.1.2): ungültig | 1 |
| 0xCDA657 | 0xCDA657 Kommunikation: Signal (AVL_I_LV_DCDC_CNV) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA658 | 0xCDA658 Kommunikation: Signal (AVL_CUTIL_PCU) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA659 | 0xCDA659 Kommunikation: Signal (TAR_U_LDREL) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA65A | 0xCDA65A Kommunikation: Signal (PRIO_TAR_U_LDREL) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA65B | 0xCDA65B Kommunikation: Signal (RQ_DRVG_RDI) in FA-CAN, Botschaft (Klemmen, 0x12F): ungültig | 1 |
| 0xCDA65C | 0xCDA65C Kommunikation: Signal (ST_DCDC_CNV) in A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): ungültig | 1 |
| 0xCDA65D | 0xCDA65D Kommunikation: Signal (RQ_MIL_DIAG_OBD_ENGMG_EL) in A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): ungültig | 1 |
| 0xCDA65E | 0xCDA65E Kommunikation: Signal (RQ_IDLG_CLCTR) in FlexRay, Botschaft (Daten Hybrid, 73.0.2): ungültig | 1 |
| 0xCDA65F | 0xCDA65F Kommunikation: Signal (RQ_EMMOD_HYB_ENGMG_EL) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA660 | 0xCDA660 Kommunikation: Signal (RQ_PAIC) in FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): ungültig | 1 |
| 0xCDA661 | 0xCDA661 Kommunikation: Signal (AVL_TEMP_DCDC_CNV) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA662 | 0xCDA662 Kommunikation: Signal (AVL_TEMP_MOT_TRCT) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA663 | 0xCDA663 Kommunikation: Signal (AVL_TEMP_PWOSTG_ENGMG_EL) in A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): ungültig | 1 |
| 0xCDA664 | 0xCDA664 Kommunikation: Signal (TAR_WMOM_PT_SUM_RECUP) in FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): ungültig | 1 |
| 0xCDA702 | 0xCDA702 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | 0xCDA704 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | 0xCDA708 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | 0xCDA804 FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDAB04 | 0xCDAB04 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | 0xCDAC04 FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | 0xCDAD04 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAE04 | 0xCDAE04 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | 0xCDAF04 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB204 | 0xCDB204 FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB302 | 0xCDB302 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Aliveprüfung | 1 |
| 0xCDB304 | 0xCDB304 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB308 | 0xCDB308 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Prüfsumme falsch | 1 |
| 0xCDB404 | 0xCDB404 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | 0xCDB504 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | 0xCDB602 FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | 0xCDB604 FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | 0xCDB608 FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | 0xCDB804 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDBA04 | 0xCDBA04 FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA10 | 0xCDBA10 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xCDBA11 | 0xCDBA11 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xCDBA12 | 0xCDBA12 FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xCDBA13 | 0xCDBA13 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xCDBA14 | 0xCDBA14 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xCDBA15 | 0xCDBA15 FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xCDBA17 | 0xCDBA17 FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): fehlt | 1 |
| 0xCDBB02 | 0xCDBB02 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | 0xCDBB04 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | 0xCDBB08 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBB09 | 0xCDBB09 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Signalfehler | 1 |
| 0xCDBB10 | 0xCDBB10 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xCDBB11 | 0xCDBB11 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xCDBB12 | 0xCDBB12 A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xCDBC20 | 0xCDBC20 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Aliveprüfung | 1 |
| 0xCDBC21 | 0xCDBC21 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Prüfsumme falsch | 1 |
| 0xCDBC22 | 0xCDBC22 A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): fehlt | 1 |
| 0xCDBC23 | 0xCDBC23 A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt, Sender EME | 1 |
| 0xCDBE02 | 0xCDBE02 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | 0xCDBE04 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBF04 | 0xCDBF04 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDC004 | 0xCDC004 A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | 0xCDC102 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | 0xCDC104 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | 0xCDC108 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC109 | 0xCDC109 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Signalfehler | 1 |
| 0xCDC120 | 0xCDC120 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Aliveprüfung | 1 |
| 0xCDC121 | 0xCDC121 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Prüfsumme falsch | 1 |
| 0xCDC122 | 0xCDC122 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): fehlt | 1 |
| 0xCDC123 | 0xCDC123 A-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Signalfehler | 1 |
| 0xCDC202 | 0xCDC202 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC203 | 0xCDC203 A-CAN, Botschaft (Status Hochvoltspeicher 2, 0x112): fehlt | 1 |
| 0xCDC204 | 0xCDC204 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC205 | 0xCDC205 Kommunikation: Signal (ST_ABM_EAX) in A-CAN, Botschaft (Status E-Motor Traktion Langzeit, 0x192): ungültig | 1 |
| 0xCDC208 | 0xCDC208 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC311 | 0xCDC311 A-CAN, Botschaft (Messbotschaft EGS, 0x786): fehlt | 1 |
| 0xCDF209 | 0xCDF209 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Signalfehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4205 | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4300 | Motor-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4306 | Bestätigte Solldrehzahl elektr. Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | Statusmeldung elektr. Wasserpumpe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4308 | EWAPU Volumenstrom soll (gesamt) | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4310 | Solltemperatur Kühlmittel | - | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4402 | Oeltemperatur nach Filter | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x4403 | Kraftstoffverbrauch seit letztem Ölwechsel | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x440B | CodingDataSet-ÖL-Länderfaktor1- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | CodingDataSet-ÖL-Länderfaktor2- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4420 | Eingangstemperatur Poel_reg | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4421 | Öldruckregler P-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4422 | Öldruckregler I-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4423 | Öldruckregler D-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4426 | Ist-Betriebsart Öldruck Regelung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4427 | Rückmeldung auf Anfrage zur Oelniveaumessung bitcodiert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4428 | Schalter S_POELFUNC_ON | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4429 | Anforderung Detailmessung Ölniveau Ausgangsgröße | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x442B | Kodierparameter Antriebsart (0=keine Kodierung, 1 = Heck, 2=Allrad, 3=Front) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442C | Rohwert Öl- Niveau | mm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442D | Korrigiertes Niveau aus TP in MinErk | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442E | Niv- Mittelwert QntMssg | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442F | ABK Schnittstelle Öl- Niveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4430 | LSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4431 | MSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4432 | Status des ÖNS- Komponententreibers | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4433 | Status des ÖNS- Sensors | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4434 | Bedingung Niveaumessfehler vom Ölzustandssensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4500 | Bedingung drehende Kurbelwelle erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4501 | VVT Excenterwellenadaptionswert | - | - | signed integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4502 | Zylinderzahl aktuelle Variante | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4505 | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4506 | Einlassnockenwellenposition | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4507 | Auslassnockenwellenposition | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x450C | Kurbelwellenadaption Einlass erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450D | Kurbelwellenadaption Auslass erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450E | [0] Kurbelwellennullpunktverschiebung in Grad für Winkelversatzdiagnose | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4510 | VVT-Lageregler, bleibende Abweichung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4511 | VVT-Lageregelung, Schwingung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4512 | VVT überlastet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4513 | VVT-Überlastung, klemmender Steller | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4514 | VVT-Adaption möglich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4515 | Anforderung, VVT-Anschlaglernen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4516 | Status VVT-Anschlaglernen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4517 | [0] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 0 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4518 | [1] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4519 | [2] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 2 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451A | [3] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 3 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451B | [4] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 4 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451C | [5] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 5 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451D | Gesamtzeit VVT-Performancetest | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x451E | Stromsumme VVT-Performancetest | A | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4520 | Effektive Motorleistung | - | - | unsigned integer | - | 0,0152587890625 | 1 | 0,0 |
| 0x4521 | Kraftstoffmassenstrom | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4522 | [0] Kraftstoffmasse homogen als Sollwert 0 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4523 | [3] Kraftstoffmasse homogen als Sollwert 1 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4524 | [6] Kraftstoffmasse homogen als Sollwert 2 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4525 | [9] Kraftstoffmasse homogen als Sollwert 3 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x452A | Sollwert Auslassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452B | Sollwert Einlassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452C | Istwert Auslaßspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452E | Istwert Einlaßspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4530 | [0] Aktueller Einspritzmodus, Zylinder 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4531 | [1] Aktueller Einspritzmodus, Zylinder 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4532 | [2] Aktueller Einspritzmodus, Zylinder 3 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4533 | [3] Aktueller Einspritzmodus, Zylinder 4 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4536 | [0] Regelabweichung des Ladedruckreglers - bankspezifisch Bank 1 | hPa | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4600 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x4601 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4604 | Generatorstrom | A | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4605 | Chipversion E-Maschine 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x460A | momentane Batteriespannung | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460C | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | - | unsigned integer | - | 0,02348100021481514 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460E | Abstand zur Startfähigkeit | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460F | DF-Monitor für Batterie-Ladezustand in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4610 | Status Ansteuerung E-Lüfter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4611 | Status Ansteuerung Zusatzlüfter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4612 | Bedingung Lüfterfreigabe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4614 | Bedingung Zusatzlüfterfreigabe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4615 | Grenzerregerstrom E-Maschine 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x4616 | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | Abgenommenes Generatormoment | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461B | Drehzahlschwelle für LR-Funktion E-Maschine 1 | 1/min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4650 | Getriebetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4651 | Tastverhältnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4680 | Leerlaufdrehzahl gelernt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4681 | Bereitschaft Getriebe Neutralposition anlernen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4700 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x4704 | Lambdasoll Begrenzung (word) | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x4710 | Umgebungsdruck beim Abstellen für die Leckdiagnose | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4711 | Anzahl erkannte Feinstleck durch Diagnose | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4712 | Anzahl dichtes EVAP-System erkannt durch Diagnose | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4713 | Zähler Leckdiagnose nicht durchgeführt  aufgrund Umgebungs- | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4714 | NVLD: Zähler EngineOff Schalterdiagnose mit Fehler | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4715 | NVLD: Zähler EngineOff Schalterdiagnose ohne Fehler | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4716 | NVLD: EngineOff Schalterdiagnose 5 deg. C Bedingung erfüllt | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4800 | Bedingung Kupplungspedal betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Schalter Kupplung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Bedingung umschalten auf KFPEDS | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Bedingung für Kompressoreinschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Schalter Klemme 50 von CAN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4807 | Motordrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4808 | Leerlaufsolldrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4809 | Bedingung Leerlaufregelung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480B | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x480C | Sollwert Füllung des Momentenmanagers | % | - | unsigned integer | - | 0,0234375 | 1 | 0,0 |
| 0x480D | Fahrbahnlängsneigung (geschätzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x480E | Qualifier Fahrbahnlängsneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x480F | Qualifier Fahrbahnquerneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4810 | Fahrbahnquerneigung (geschätzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x4811 | Fahrzeuglängsbeschleunigung | m/s^2 | - | signed char | - | 0,21699999272823334 | 1 | 0,0 |
| 0x4812 | Fahrzeugquerbeschleunigung | m/s^2 | - | signed integer | - | 0,0015625000232830644 | 1 | 0,0 |
| 0x4813 | Bedingung Powerfail | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4880 | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4881 | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4890 | Tprot-Status auslesen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A02 | ATL-Leckagediagnose läuft | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A17 | Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A1B | Elektrische Kraftstoffpumpe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A1D | Spannung Bremsenunterdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A21 | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4A2B | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4A2D | Saugrohr-Absolutdruck gemessen | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4A30 | [0] Laufunruhe Zylinder 1 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A31 | [1] Laufunruhe Zylinder 2 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A32 | [2] Laufunruhe Zylinder 3 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A33 | [3] Laufunruhe Zylinder 4 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x4A36 | Bedingung für erkannte Klopfer | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A37 | [0] normierter Referenzpegel Klopfregelung Zylinder 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A38 | [1] normierter Referenzpegel Klopfregelung Zylinder 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A39 | [2] normierter Referenzpegel Klopfregelung Zylinder 3 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A3A | [3] normierter Referenzpegel Klopfregelung Zylinder 4 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A49 | [0] Ausgegebener Zündwinkel 1 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A4A | [1] Ausgegebener Zündwinkel 2 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A4C | [2] Ausgegebener Zündwinkel 3 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A4D | [3] Ausgegebener Zündwinkel 4 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A52 | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A54 | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A56 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A60 | Bedingung Bremslichtschalter betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A61 | Bedingung Bremstestschalter betätigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A65 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
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
| 0x4A93 | Fehlerzähler für Lernen Nullgang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A94 | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4A95 | [0] Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4A96 | [0] Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4A97 | Bedi. Vanos Einlass im Anschlag | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A99 | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A9D | multiplikative Gemischkorrektur der Gemischadaption | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4AA1 | Zyklusflag: Tankentlüftungsventil Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AA4 | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AAA | Tastverhältnis PWM Ansteuerung Öldruck | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AAB | Tastverhältnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AB0 | Ladedruck- Sollwert | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4AB1 | Fahrzeuggeschwindigkeit | km/h | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| 0x4AB3 | Zähler für gefahrene Kilometer mit MIL EIN | km | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4AB4 | sekundengenauer Betribsstundenzähler als 32 Bitwert | s | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4AB8 | Spannung Drucksensor Saugrohrdruck (word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABC | Luftmassenfluss gefiltert (Word) | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4ABD | Bedingung automatischer Start | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AC2 | Reset Information  | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ACC | Luftklappe - Sollposition in Schritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4ACD | Luftklappe - Istposition in Schritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AD0 | Luftklappe - Diagnosestatus allgemein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD1 | Luftklappe - Diagnosestatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD2 | Luftklappe - Status obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD3 | Luftklappe - Status untere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD4 | Luftklappe - Varianteninfo vom Steller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD5 | Kraftstofftemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4AD6 | Bedingung Schubabschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
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
| 0x4B23 | [0] Zähler Aussetzerkennung Zylinder 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B24 | [1] Zähler Aussetzerkennung Zylinder 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B25 | [2] Zähler Aussetzerkennung Zylinder 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4B30 | [3] Zähler Aussetzerkennung Zylinder 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x5802 | CARB FREEZE FRAME Byte, Bank 1, für LR | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x580A | RIS-Sensor LIN (EAC-Sensor)-Temperaturwert | Grad C | - | unsigned integer | - | 0,09375 | 1 | 5,0 |
| 0x580B | Saugrohr-Absolutdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,25 | 1 | 0,0 |
| 0x580E | Zündwinkel Zylinder 1 | Grad KW | - | signed char | - | 0,75 | 1 | 0,0 |
| 0x580F | Ansaugluft-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5810 | Aktualität Minimumwarnung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5811 | Motorölniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
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
| 0x581F | Kilometerstand bei der Erkennung Ölniveau am Minimum | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5820 | STATUS Klemme 15 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5821 | Steuergerätetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5822 | Öltemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -60,0 |
| 0x5823 | Abstellzeit | s | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5824 | Aktueller Fehlerstatus E-Maschine | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5825 | Spannung von BCU gemessen | V | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x582E | Modellierte 8HP-Getriebeöltemperatur am Wandleraustritt im Falle mech./elekr. Notprogramm | Grad C | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5832 | Zustand Motor-Koordinator | 0-n | - | 0xFF | CoEng_st_COMPU_VERB | 1 | 1 | 0 |
| 0x5833 | Status relatives Motorölniveau über Minimum | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
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
| 0x5843 | Bedingung Startanforderung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x584A | aktueller Generatorstatus | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5851 | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5854 | Batterietemperatur vom IBS | deg C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5862 | Sollwert Öldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5865 | Langzeit-Ölniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Relativer Füllstand des Motoröls | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information über CAN | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586E | Zeit, indem der Ruhestrom größer als 1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5871 | Zähler Prüfzustand für VVT Endstufenprüfung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5877 | Rotorposition VVT-Motor | ° | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x587B | Soll-Bestromung VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x587E | Motortemperatur-Referenzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5883 | [0] Referenzpegel Klopfregelung, 16 bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5885 | [2] Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5886 | [3] Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| 0x5888 | [5] Referenzpegel Klopfregelung, 16bit | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x588B | Zeit nach Startende | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x588C | Keramiktemperatur der LSU | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5890 | Kühlerauslasstemperatur lesen | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x5892 | Differenz zwischen Umgebungsdruck und  Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589A | Tastverhältnis Nullgangsensor | % | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x589B | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x589D | Anzahl erkannter VVT Lageregelungsfehler | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x589E | Sollwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x589F | Batterietemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A4 | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irreversibel | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A5 | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversibel | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A6 | Rel. Exzenterwinkel | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58AC | Klemmenspannung E-Maschine | V | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | Zähler für Lerndauer eines Lernsteps der Drosselklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BF | Bedingung Powerfail EEPROM | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
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
| 0x58CD | Spannung hinter VVT/Motor-Relais | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CF | Soll- Motormoment aus Getriebeüberwachung in der Funktionsüberwachung | Nm | - | signed integer | - | 0,0625 | 1 | 0,0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58D1 | Motortemperatur beim Abstellen | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D2 | Luftklappe - Sollposition in Grad | - | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| 0x58D3 | Luftklappe - Istposition in Grad | - | - | unsigned char | - | 0,501960813999176 | 1 | 0,0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D6 | Transition Time O2Sensor Lean2Rich (Sensor2) | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58DF | Transition Time O2Sensor Rich2Lean (Sensor2) | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58E5 | [0] Gefilterte Funkenbrenndauer Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E6 | [1] Gefilterte Funkenbrenndauer Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E7 | [2] Gefilterte Funkenbrenndauer Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E8 | [3] Gefilterte Funkenbrenndauer Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E9 | Versorgungsspannung elektr. Wasserpumpe | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Istdrehzahl elektr. Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | überprüfte Umgebungstemperatur vom CAN-Kombi | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58EC | Elektroniktemperatur elektr. Wasserpumpe | Grad C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Stromaufnahme elektr. Wasserpumpe | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EE | modellierte Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F1 | Zähler für unplausible fsr_w Werte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F2 | Tastverhältnis Mengensteuerventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58F9 | Typ E-Maschine 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x58FB | Delta Sondenoffset Führungsregelung | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58FE | Fehlercode SWT-Freischaltcode | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5900 | Gefiltertes zusätzlicher Sondendelay Mager-Fett, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5901 | Gefiltertes zusätzlicher Sondendelay Fett-Mager, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5904 | [1] IBS Status-/Fehlerbyte 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5905 | [2] IBS Status-/Fehlerbyte 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5910 | Sollwert E-Pumpe Abgasturbolader | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5911 | Sollwert E-Pumpe Allgemeine Antriebselektronik | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5912 | Sollwert E-Pumpe Ladeluftkühlung | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5913 | Status elektrische Pumpe Abgasturbolader | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5914 | Status elektrische Pumpe Allgemeine Antriebselektronik | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5915 | Status elektrische Pumpe Ladeluftkühlung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5916 | Relativer Ladezustand NV Batterie auslesen | % | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x5917 | Status DCDC-Wandler auslesen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5918 | Auslastung DCDC-Wandler auslesen | % | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x5919 | Fehlerstatus E-Maschine | hex | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x592A | Motordrehzahl, hochaufgelöst | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x592B | Pulsbreite DGI-Sensor min | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592C | Pulsbreite DGI-Sensor max | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592D | KW-Winkelversatz im Motorstart | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592E | Motorabstellposition | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592F | Status Synchronisationsmodul | 0-n | - | 0xFF | Epm_stSync_State_t | 1 | 1 | 0 |
| 0x5930 | Istwert Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned integer | - | 2,0 | 1 | 0,0 |
| 0x5932 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5934 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5935 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5936 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5937 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### COENG_ST_COMPU_VERB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | COENG_STANDBY |
| 0x01 | COENG_READY |
| 0x02 | COENG_CRANKING |
| 0x03 | COENG_RUNNING |
| 0x04 | COENG_STOPPING |
| 0x05 | COENG_FINISH |
| 0xFF | undefiniert |

### EPM_STSYNC_STATE_T

| WERT | UWTEXT |
| --- | --- |
| 0x00 | EPM_NO_SYNC |
| 0x0A | EPM_ALE_SYNC |
| 0x14 | EPM_CAS_SYNC |
| 0x15 | EPM_DIRSTALE_SYNC |
| 0x1E | EPM_FULL_SYNC |
| 0xFF | undefiniert |
