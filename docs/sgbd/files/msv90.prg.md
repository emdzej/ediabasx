# msv90.prg

## General

|  |  |
| --- | --- |
| File | msv90.prg |
| Type | PRG |
| Jobs | 260 |
| Tables | 140 |
| Origin | BMW EA-360 Lorch |
| Revision | 8.007 |
| Author | P&Z EA-360 Berger, P&Z EA-360 Kunze |
| ECU Comment | SGBD für MSV90 zur SW 9Z72850S |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSV90 für N52TUE mit UDS Protokoll  |  |  |
| ORIGIN | string | BMW EA-360 Lorch |  |  |
| REVISION | string | 8.007 |  |  |
| AUTHOR | string | P&Z EA-360 Berger, P&Z EA-360 Kunze |  |  |
| COMMENT | string | SGBD für MSV90 zur SW 9Z72850S |  |  |
| PACKAGE | string | 1.47 |  |  |
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

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

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

### _SWE_LESEN

0x31010205 SWE_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SWE_EINHEIT | string | auszulesender SWE Satz Eingabe von 0 bis 4 |

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 es können 40 Messwerte in einem Block zusammengefasst werden

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

### ADAP_SELEKTIV_LOESCHEN

0x3101F030 ADAP_SELEKTIV_LOESCHEN Ansteuern Adaptionen selektiv loeschen Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### ADAP2_SELEKTIV_LOESCHEN

0x3101F031 ADAP2_SELEKTIV_LOESCHEN Ansteuern Adaptionen 2 selektiv loeschen Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STATUS_RBMMS1

0x224027 STATUS_RBMMS1 Rate Based Monitoring Motorsteuerung MSD85 Block 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CALCVN

Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. CALCVN (0x403C)

_No arguments._

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n (4095) |

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
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: min   Min: 1 Max: 254 Achtung, Wert 128 ist ungültig |

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

### STATUS_AEP_I12_ZYKLISCHES_NACHLADEN_INFO

Auslesen von wichtigen Kenngrößen der letzten 4 Vorgänge des zykllischen Nachladens plus dem letzten Parkvorgang AEP_I12_ZYKLISCHES_NACHLADEN_INFO (0x22 409D)

_No arguments._

### STATUS_AEP_I12_ZYKLISCHES_NACHLADEN_HISTOGRAMM

Auslesen der Histogramme über die Standzeit bis zum Beginn des zyklischen Nachladens und der Ladedauern der zyklischen Nachladevorgänge AEP_I12_ZYKLISCHES_NACHLADEN_HISTOGRAMM (0x22 409E)

_No arguments._

### _STEUERN_AEP_I12_TEST_LADEENDEGRUND

Job zum Test für AEP Funktionen AEP_I12_GRUND_LADEENDE (0x2E 5FA0)

| Name | Type | Description |
| --- | --- | --- |
| SW_DIAG_AEP_LADEENDEGRUND | unsigned char | Schreiben von Zyknlinfodiag Min: 0.0 Max: 255.0 a2l-Name: Zyknlinfodiag |

### START_AEP_I12_ZYKNL_INFOSPEICHER_LOESCHEN

Löschen des Historienspeichers für die letzen 4 Ladevorgänge der 12V-Batterie aus der Hochvolt-Batterie AEP_I12_ZYKNL_INFOSPEICHER_LOESCHEN (0x31 01 AE02)

_No arguments._

### START_AEP_I12_ZYKNL_HISTOGRAMM_LOESCHEN

Löschen von Histogramm und Zähler aller Ladevorgänge der 12V-Batterie aus dem Hochvolt-System AEP_I12_ZYKNL_HISTOGRAMM_LOESCHEN (0x31 01 AE03)

_No arguments._

### _START_AEP_I12_TEST_BATTERYGUARD

Anforderung Aufruf BatteryGuard Call Setzen der Größe B_batteryguardcalldiag =1 Startvoraussetzungen: B_kl15 == TRUE. AEP_I12_TEST_BATTERYGUARD (0x31 01 F052)

_No arguments._

### _STATUS_AEP_I12_TEST_BATTERYGUARD

Anforderung Aufruf BatteryGuard Call auslesen Startvoraussetzungen: B_kl15 == TRUE. AEP_I12_TEST_BATTERYGUARD (0x31 03 F052)

_No arguments._

### _STOP_AEP_I12_TEST_BATTERYGUARD

Anforderung Aufruf BatteryGuard Call beenden Setzen der Größe B_batteryguardcalldiag =0 Startvoraussetzungen: B_kl15 == TRUE. AEP_I12_TEST_BATTERYGUARD (0x31 02 F052)

_No arguments._

### STATUS_CODIERUNG_OEL

0x223320 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_EISYUGD

0x310xF0E0 _STATUS_EISYUGD Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_EISYGD

0x310xF0E1 _STATUS_EISYGD Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_KRANN

0x310xF0E3 _STATUS_KRANN Ansteuern und Auslesen Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_KLANN

0x310xF0E4 _STATUS_KLANN Ansteuern und Auslesen Klann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_GENINFO

0x22401B _STATUS_GENINFO Infospeicher Generatordiagnose erweitert auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### ECU_CONFIG

0x225FF2 ECU_CONFIG Variante auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### ECU_CONFIG_RESET

0x2E5FF204 ECU_CONFIG_RESET Variante loeschen Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_AT_WERT | unsigned long | Automatik Getriebe LV_AT   Min: 0 Max: 1 |
| SW_ARS_WERT | unsigned long | ARS Aktive Roll-Stabilisierung LV_VAR_ARS   Min: 0 Max: 1 |
| SW_EBOX_CFA_WERT | unsigned long | E-Box-Luefter LV_VAR_EBOX_CFA   Min: 0 Max: 1 |
| SW_MSW_WERT | unsigned long | Multifunktionslenkrad LV_VAR_MSW   Min: 0 Max: 1 |
| SW_SOF_WERT | unsigned long | Soundklappe LV_VAR_SOF   Min: 0 Max: 1 |
| SW_SOF_SWI_WERT | unsigned long | Sport-Taster CONF_SOF_SWI   Min: 0 Max: 1 |
| SW_GEAR_WERT | unsigned long | Komfortstart LV_VAR_BN_GEAR_REV   Min: 0 Max: 1 |
| SW_EF_WERT | unsigned long | Abgasklappe LV_VAR_EF   Min: 0 Max: 1 |
| SW_LIN_COMP_WERT | unsigned long | LIN Komponenten Kuehlerjalousie oben und unten, IBS, CWP, DCDC LV_VAR_ECRAS_UP   Min: 0 Max: 1 |
| SW_RLY_ST_WERT | unsigned long | Starterrelais LV_VAR_RLY_ST   Min: 0 Max: 1 |
| SW_LSH_DOWN_WERT | unsigned long | Lambdasonde hinter Katalysator LV_VAR_LSH_DOWN   Min: 0 Max: 1 |
| SW_LSH_UP_WERT | unsigned long | Lambdasonde vor Katalysator LV_VAR_LSH_UP   Min: 0 Max: 1 |
| SW_BN_TRL_WERT | unsigned long | Anhaengermodul LV_VAR_BN_TRL   Min: 0 Max: 1 |
| SW_ETCU_SPT_WERT | unsigned long | Sportgetriebe  (A2L-Name: lv_var_etcu_spt) LV_VAR_ETCU_SPT   Min: 0 Max: 1 |
| SW_TCT_WERT | unsigned long | Doppelkuplungsgetriebe (A2L-Name: lv_var_tct) LV_VAR_TCT   Min: 0 Max: 1 |
| SW_AEB_WERT | unsigned long | Motorlager (A2L-Name: lv_var_aeb) LV_VAR_AEB   Min: 0 Max: 1 |
| SW_TQ_PBR_WERT | unsigned long | Elektromechanische Feststellbremse (A2L-Name: lv_var_tq_pbr) LV_VAR_TQ_PBR   Min: 0 Max: 1 |

### START_SYSTEMCHECK_DMTL

0x3101F0DA START_SYSTEMCHECK_DMTL Ansteuern Diagnosefunktion DMTL Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

0x3101F025 START_SYSTEMCHECK_EVAUSBL Ansteuern Diagnosefunktion Einspritzventilausblendung Aktivierung: Klemme 15 = EIN UND Motorstatus = (Leerlauf ODER Teillast) UND Drehzahl < 3000 1/min Activation: LV_IGK = 1 UND STATE_ENG = (IS ODER PL) UND N < C_N_MAX_KWP

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR_WERT | unsigned long | Nummer des auszublendenden Einspritzventils (A2L-Name: inh_iv) INH_IV_KWP   Min: 0 Max: 255 |

### START_SYSTEMCHECK_GEN

0x3101F02A START_SYSTEMCHECK_GEN Diagnosefunktion Generatortest 

_No arguments._

### START_SYSTEMCHECK_GLF

0x3101F0D5 START_SYSTEMCHECK_GLF Ansteuern Gesteuerte Luftfuehrung Systemcheck Aktivierung: Testeransteuerung obere Luftklappe = AUS UND Testeransteuerung untere Luftklappe = AUS UND Batteriezustand in Ordnung = JA UND Startverriegelung des Klappentests = AUS Activation: LV_ECRAS_UP_EXT_ADJ = 0 UND LV_ECRAS_DOWN_EXT_ADJ = 0 UND LV_CDN_VB_MIN_DIAG = 1 UND LV_ECRAS_EOL_INH = 0

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

0x3101F0D9 START_SYSTEMCHECK_L_REGELUNG_AUS Ansteuerung Lambdaregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_DUMMY_1_WERT | unsigned long | Umrechnung: 0x00 bis 0xFF in 0 oder 1 (Ausnahme fuer Rueckwaertskompatibilitaet SGBD MSD80) 1BYTE 0x00-0xFF in 0 oder 1   Min: 0 Max: 1 |
| STAT_LV_INH_LAM_KWP_WERT | unsigned long | Switch off condition for lambda control via KWP2000  /  01= disabled 00=enabled (A2L-Name: lv_inh_lam_kwp) LV_INH_LAM_KWP   Min: 0 Max: 1 |

### START_SYSTEMCHECK_L_SONDE

0x3101F0DF START_SYSTEMCHECK_L_SONDE Ansteuern Diagnosefunktion vertauschte Lambdasonden Aktivierung: Klemme 15 = EIN UND Leerlauf UND Motortemperatur > 77 Grad C UND Abgastemperatur[i] > -48 Grad C UND Lambdasondensignal[i] = EIN UND Bereitschaft Lambdasonde hinter Katalsyator Bank[i] rueckgesetzt = EIN UND Status Lambdasondenheizung vor Katalysator Bank[i] = LSH_POW_CTL UND Status Lambdasondenheizung hinter Katalysator Bank[i] = LSH_POW_CTL UND Startverriegelung Lambdasonden aus Signalplausibilitaetstest Bank[i] = AUS (i = 1 FUER Bank 1, i = 2 FUER Bank 2) Activation: LV_IGK = 1 UND LV_IS = 1 UND TCO > C_TCO_MIN_VLS_EOL UND TEG_CAT_DOWN_MDL[i] > C_TEG_CAT_DOWN_EOL UND LV_LAMB_LS_UP_VLD[i] = 1 UND LV_LS_DOWN_READY[i] = 1 UND STATE_LSH_UP[i] = LSH_POW_CTL UND STATE_LSH_DOWN[i] = LSH_POW_CTL UND LV_DIAG_ACT_INH_LS_UP_DOWN[i] = 0 (i = 1 FUER Bank 1, i = 2 FUER Bank 2)

_No arguments._

### START_SYSTEMCHECK_LLERH

0x3101F026 START_SYSTEMCHECK_LLERH Ansteuern Diagnosefunktion Leerlauf-Erhoehung 

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | unsigned long | LL-Sollwert 0 bis 3000 1/min N_SP_IS_EXT_ADJ   Einheit: rpm   Min: 0 Max: 10000 |

### START_SYSTEMCHECK_ODR

0x3101F02C START_SYSTEMCHECK_ODR Diagnosefunktion Oeldruckregelung

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

0x3101F0F6 START_SYSTEMCHECK_PM_MESSEMODE Ansteuern Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_SEK_LUFT

0x3101F020 START_SYSTEMCHECK_SEK_LUFT Ansteuern Diagnosefunktion Sekundaerluft

_No arguments._

### START_SYSTEMCHECK_TEV

0x3101F022 START_SYSTEMCHECK_TEV Ansteuern Diagnosefunktion Tankentlueftungsventil Aktivierung: Klemme 15 = EIN UND Phase Motorstart beendet = EIN UND Funktionscheck TEV = EIN UND Geschwindigkeit = 0 km/h UND LV_MAF_SP_TQI_DYW_DIAGCPS = 1 UND (Betriebsart TEV = 1 ODER Betriebsart TEV = 2) UND Fehlerspeichereintrag TEV = AUS Activation: LV_IGK = 1 UND LV_ST_END = 1 UND LV_INH_DIAGCPS = 0 UND VS = 0 UND LV_MAF_SP_TQI_DYW_DIAGCPS = 1 UND (OPM_AV_DIAGCPS = 1 ODER OPM_AV_DIAGCPS = 2) UND LV_ERR_DIAGCPS = 0

_No arguments._

### START_SYSTEMCHECK_VVT_ANSCHLAG

0x3101F027 START_SYSTEMCHECK_VVT_ANSCHLAG Ansteuern Diagnosefunktion VVT-Anschlag lernen

| Name | Type | Description |
| --- | --- | --- |
| STAT_VVTL_WERT | unsigned long | VVT-Anschlaege lernen starten  1=unteren Anschlag lernen, 6=beide Anschlaege lernen 1_BYTE_VVL   Min: 0 Max: 6 |

### START_SYSTEMCHECK_VVT_SOLLWERT

0x3101F0FE START_SYSTEMCHECK_VVT_SOLLWERT Systemdiagnose VVT Steuerung ueber CAN freigeben

_No arguments._

### START_VANOSSPUELEN

0x3101F042 START_VANOSSPUELEN VANOS Spuelen fuer OBD und PVE. 

| Name | Type | Description |
| --- | --- | --- |
| VANOSSPL_M_MODUS_WERT | unsigned long | 1=gleichzeitiges Verstellen von Ein- und Auslass-Vanos. und 2=erst Verstellen Einlass, dann Verstellen Auslass. Default-Wert = 1. VANOSSPL_M_MODUS   Min: 1 Max: 2 |
| VANOSSPL_N_AZLVERSTL_WERT | unsigned long | 1 Verstellung bedeutet erst dvse1, dann dvse2 (von 1 bis 50).  Default-Wert = 10 Dez. VANOSSPL_N_AZLVERSTL   Min: 1 Max: 50 |
| VANOSSPL_T_HLTZVERSTL_WERT | real | Haltezeit Verstellung (0 bis 5 s). Default-Wert = 2.1 s.                        Gesamtzeit Vanosspuelen = N * 2 * T * m. T_HLD_CAM_OFS_EXT_ADJ   Einheit: s   Min: 0 Max: 25.5 |
| VANOSSPL_N1_UDZLGRNZ_WERT | unsigned long | Untere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min unter LL-Solldrehzahl . Default-Wert = 1000. VANOSSPL_N1_UDZLGRNZ   Einheit: rpm   Min: 500 Max: 2000 |
| VANOSSPL_N2_ODZLGRNZ_WERT | unsigned long | Obere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min ueber LL-Solldrehzahl . Default-Wert = 1200. VANOSSPL_N2_ODZLGRNZ   Einheit: rpm   Min: 500 Max: 2000 |
| VANOSSPL_V_MAX_WERT | unsigned long | Max. Fahrzeuggeschwindigkeit (0 bis 100 km/h). Default-Wert = 0 VANOSSPL_V_MAX   Einheit: km/h   Min: 0 Max: 100 |
| VANOSSPL_T2_ZUBRZ_WERT | real | Zulaessige Unterbrechungszeit (0 bis 25,5 s). Default-Wert = 5,1s. T_WAIT_MAX_CAM_OFS_EXT_ADJ   Einheit: s   Min: 0 Max: 25.5 |
| VANOSSPL_DVSE1_VO1EV_WERT | real | Verstelloffset 1 Einlass-Vanos (von -102,4 bis 101,6Â°KW). Default-Wert=5.6Â°Grad. VANOSSPL_DVSE1_VO1EV   Einheit: Grad   Min: -102.4 Max: 101.6 |
| VANOSSPL_DVSE2_VO2EV_WERT | real | Verstelloffset 2 Einlass-Vanos (von -102,4 bis 101,6Â°KW). Default-Wert=-5.6Â°Grad. VANOSSPL_DVSE2_VO2EV   Einheit: Grad   Min: -102.4 Max: 101.6 |
| VANOSSPL_DVSA1_VO1AV_WERT | real | Verstelloffset 1 Auslas-Vanos (von -102,4 bis 101,6Â°KW). Default-Wert=-5.6Â°Grad. VANOSSPL_DVSA1_VO1AV   Einheit: Grad   Min: -102.4 Max: 101.6 |
| VANOSSPL_DVSA2_VO1AV_WERT | real | Verstelloffset 2 Auslas-Vanos (von -102,4 bis 101,6Â°KW). Default-Wert=5.6Â°Grad. VANOSSPL_DVSA2_VO1AV   Einheit: Grad   Min: -102 Max: 102 |

### STATUS_ABLLMD

0x225F86 STATUS_ABLLMD Lesen Abgleichwert Momentenreserve im Leerlauf

_No arguments._

### STATUS_ADAPTION_GEMISCH

0x22400A STATUS_ADAPTION_GEMISCH Gemischadaptionswerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

0x224AB4 STATUS_BETRIEBSSTUNDENZAEHLER Betriebsstundenzaehler auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CBSMOTOROELHIST

0x22404F STATUS_CBSMOTOROELHIST CBS Motoroel Historien-Funktion lesen (FASTA)

_No arguments._

### STATUS_DFMONITOR

0x224001 STATUS_DFMONITOR Batterieladezustand auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DIGITAL_0

0x224007 STATUS_DIGITAL_0 Status Schaltzustaende 0 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DIGITAL_1

0x224002 STATUS_DIGITAL_1 Status Schaltzustaende Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DISCODBSR

0x225F7E STATUS_DISCODBSR Verriegelung des betriebsstundenrelevanten Kodierbereichs (Auslesen vom Bit: DIS_COD_BSR)

_No arguments._

### STATUS_EISYGD

0x3103F0E1 STATUS_EISYGD Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EISYUGD

0x3103F0E0 STATUS_EISYUGD Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403)

_No arguments._

### STATUS_FASTA10

0x224015 STATUS_FASTA10 FASTA-Messwertblock 10 lesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_INTEGRITAETDME

0x224048 STATUS_INTEGRITAETDME Integritaet DME und Codierzaehler Leistungsklasse, Vmax und maximale V_VEH

_No arguments._

### STATUS_KQE

0x224035 STATUS_KQE Messwerte zur Kraftstoffqualitaet auslesen

_No arguments._

### STATUS_KRANN

0x3103F0E3 STATUS_KRANN Auslesen Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LL_ABGLEICH

0x225FF0 STATUS_LL_ABGLEICH Abgleichwert LL (Leerlauf) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE

0x224000 STATUS_MESSWERTE Messwerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE_LRP

0x22402D STATUS_MESSWERTE_LRP Messwerte Laufruhepruefung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORLAUFUNRUHE

0x224003 STATUS_MOTORLAUFUNRUHE Motorlaufunruhewerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

0x224006 STATUS_NOCKENWELLE_ADAPTION Nockenwellenadationswerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_PM_BACKUP

0x225F8B STATUS_PM_BACKUP Auslesen des PM-Backup Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RAM

0x3103F0F2 STATUS_RAM Auslesen RAM Backup zwangssichern

_No arguments._

### STATUS_RBMMODE9

0x224026 STATUS_RBMMODE9 Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RBMMS2

0x224028 STATUS_RBMMS2 Rate Based Monitoring Motorsteuerung MSD85 Block 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RBMMS3

0x224066 STATUS_RBMMS3 Rate Based Monitoring Motorsteuerung MS... Block 3 auslesen

_No arguments._

### STATUS_READINESS

0x224105 STATUS_READINESS Monitorfunktionen und Readinessflags aus DME auslesen

_No arguments._

### STATUS_SEGELVERH

0x224106 STATUS_SEGELVERH Auslesung des grossen und kleinen Segelverhinderers. Dieser Job dient nur fuer Entwicklungszwecke.

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

0x3103F0DA STATUS_SYSTEMCHECK_DMTL Auslesen Diagnosefunktion DMTL Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_EVAUSBL

0x3103F025 STATUS_SYSTEMCHECK_EVAUSBL Auslesen Diagnosefunktion EinspritzVentile EV-Ausblendung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_GEN

0x3103F02A STATUS_SYSTEMCHECK_GEN Auslesen Diagnosefunktion Generatortest Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_GLF

0x3103F0D5 STATUS_SYSTEMCHECK_GLF Auslesen Gesteuerte Luftfuehrung Systemcheck

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

0x3103F0D9 STATUS_SYSTEMCHECK_L_REGELUNG_AUS Auslesen Lambdaregelung ausschalten Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE

0x3103F0DF STATUS_SYSTEMCHECK_L_SONDE Auslesen Diagnosefunktion vertauschte Lambdasonden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_LLERH

0x3103F026 STATUS_SYSTEMCHECK_LLERH Auslesen Diagnosefunktion Leerlauf-Erhoehung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_ODR

0x3103F02C STATUS_SYSTEMCHECK_ODR Auslesen Diagnosefunktion Oeldruckregelung

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

0x3103F0F6 STATUS_SYSTEMCHECK_PM_MESSEMODE Auslesen Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LUFT

0x3103F020 STATUS_SYSTEMCHECK_SEK_LUFT Auslesen Diagnosefunktion Sekundaerluft Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_TEV

0x3103F022 STATUS_SYSTEMCHECK_TEV Auslesen Diagnosefunktion Tankentlueftungsventil Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TYPPRUEFNR

0x224047 STATUS_TYPPRUEFNR Typpruefnummer fuer BN2020-SGs lesen

_No arguments._

### STATUS_VANOSSPUELEN

0x3103F042 STATUS_VANOSSPUELEN VANOS Spuelen fuer OBD und PVE.

_No arguments._

### STATUS_VVT2_ADAP

0x224096 STATUS_VVT2_ADAP VVT2 Adaptionsgroessen (Sensorwerte und Gueltigkeiten) lesen (fuer Conti MSV80 & MSV 90 (N52TUE) -- alt) .

_No arguments._

### STATUS_VVTL

0x3103F027 STATUS_VVTL Auslesen VVT Anschlag lernen

_No arguments._

### STATUS_VVTMINH

0x225FDE STATUS_VVTMINH VVT-Minhub auslesen  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden.

_No arguments._

### STATUS_ZWDIAG

0x3103F03A STATUS_ZWDIAG CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose Status)

_No arguments._

### STEUERN_ABLLMD

0x2E5F86 STEUERN_ABLLMD Schreiben Abgleichwert Momentenreserve im Leerlauf

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLLMD_WERT | real | Abgleichwert Momentenreserve im Leerlauf TQ_ADD_IS_BOL_KWP   Einheit: Nm   Min: 0 Max: 25.5 |

### STEUERN_AGK

0x2F60C103 STEUERN_AGK Abgasklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK_WERT | unsigned long | Sollwert LV_ACT_EF_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_AGK_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ANWS

0x2F60EE03 STEUERN_ANWS Vanos Auslass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Sollwert Vanos_Auslass-Ventiel (A2L-NAME: CAM_SP_EX_EXT_ADJ) CAM_SP_EX_EXT_ADJ   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ANWS_WERT | unsigned long | Timeout Ventil Auslassnockenwellensteller Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_CO_ABGLEICH_ENDE

0x2E5FF100 STEUERN_CO_ABGLEICH_ENDE Abgleichwert CO (Kohlenmonoxid) Vorgeben beenden NO_CON

_No arguments._

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

0x2E5FF108 STEUERN_CO_ABGLEICH_PROGRAMMIEREN Abgleichwert CO (Kohlenmonoxid) programmieren NO_CON

| Name | Type | Description |
| --- | --- | --- |
| STAT_CO_ABGLEICH_WERT | real | Abgleichwert CO (Kohlenmonoxid) 1BYTE in -50 bis +49.609375 %   Einheit: %   Min: -50 Max: 49.609375 |

### STEUERN_CO_ABGLEICH_VERSTELLEN

0x2E5FF107 STEUERN_CO_ABGLEICH_VERSTELLEN Abgleichwert CO (Kohlenmonoxid) vorgeben  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. NO_CON

| Name | Type | Description |
| --- | --- | --- |
| STAT_CO_ABGLEICH_WERT | real | Abgleichwert CO (Kohlenmonoxid) FAC_MFF_ADD_EXT_ADJ   Einheit: %   Min: -50 Max: 49.609375 |

### STEUERN_DISA

0x2F60C603 STEUERN_DISA Variable Sauganlage (DISA) Klappe ansteuern NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DISA_WERT | unsigned long | Sollwert Variable Sauganlage (DISA) Klappe LV_VIM_1_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DISA_WERT | unsigned long | Timeout Variable Sauganlage (DISA) Klappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DISA2

0x2F60AE03 STEUERN_DISA2 Variable Sauganlage (DISA) Klappe2 ansteuern NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DISA2_WERT | unsigned long | Sollwert Variable Sauganlage (DISA) Klappe2 LV_VIM_2_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DISA2_WERT | unsigned long | Timeout Variable Sauganlage (DISA) Klappe2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DISCODBSR

0x2E5F7E STEUERN_DISCODBSR Verriegelung des betriebsstundenrelevanten Kodierbereichs.

_No arguments._

### STEUERN_DK

0x2F602A03 STEUERN_DK Drosselklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Sollwert Drosselklappe (A2L-NAME:TPS_SP_EXT_ADJ) TPS_SP_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_DK_WERT | unsigned long | Timeout Drosselklappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DMTL_HEIZUNG

0x2F60CE03 STEUERN_DMTL_HEIZUNG Diagnosemodul-Tank Leckage Heizung ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Heizung LV_ACT_DMTLH_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DMTLH_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DMTL_P

0x2F60CC03 STEUERN_DMTL_P Diagnosemodul-Tank Leckage Pumpe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Pumpe LV_ACT_DMTL_PUMP_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DMTL_P_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DMTL_V

0x2F60CD03 STEUERN_DMTL_V Diagnosemodul-Tank Leckage Ventil ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Ventil LV_ACT_DMTLS_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DMTL_V_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_E_LUEFTER

0x2F60DA03 STEUERN_E_LUEFTER E-Luefter ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE_WERT | real | Tastverhaeltniss E-Luefter ECFPWM_ECF_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ELUE_WERT | unsigned long | Timeout E-Luefter 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EISYGD

0x3101F0E1 STEUERN_EISYGD Ansteuern Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| WDK_IST_WERT | real | Aktueller Drosselklappenwinkel WDK_IST   Einheit: %   Min: -800 Max: 799.9755 |

### STEUERN_EISYUGD

0x3101F0E0 STEUERN_EISYUGD Ansteuern Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| HUBEV_IST_WERT | real | Istwert Einlassventilhub HUBEV_IST   Einheit: mm   Min: 0 Max: 65.535 |

### STEUERN_EKP

0x2F60D803 STEUERN_EKP Elektrische Kraftstoffpumpe 1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1_WERT | real | Tastverhaeltniss Elektrische Kraftstoffpumpe 1 EFPPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EKP1_WERT | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ELUER

0x2F608103 STEUERN_ELUER E-Luefter-Relais ansteuern NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUER_WERT | unsigned long | Tastverhaeltniss E-Luefter-Relais  (a2l:lv_act_ecf_rly_ext_adj) LV_ACT_ECF_RLY_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_ELUER_WERT | unsigned long | Timeout E-Luefter-Relais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EML

0x2F60D603 STEUERN_EML EML (Engine Malfunction Lamp) ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML_WERT | unsigned long | Sollwert EML (Engine Malfunction Lamp) LV_ACT_WAL_1_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_EML_WERT | unsigned long | Timeout EML (Engine Malfunction Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ENDE_AGK

0x2F60C100 STEUERN_ENDE_AGK Abgasklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ANWS

0x2F60EE00 STEUERN_ENDE_ANWS Vanos Auslass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DISA

0x2F60C600 STEUERN_ENDE_DISA Variable Sauganlage (DISA) Klappe Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_DISA2

0x2F60AE00 STEUERN_ENDE_DISA2 Variable Sauganlage (DISA) Klappe2 Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_DK

0x2F602A00 STEUERN_ENDE_DK Drosselklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DMTL_HEIZUNG

0x2F60CE00 STEUERN_ENDE_DMTL_HEIZUNG Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DMTL_P

0x2F60CC00 STEUERN_ENDE_DMTL_P Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DMTL_V

0x2F60CD00 STEUERN_ENDE_DMTL_V Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_E_LUEFTER

0x2F60DA00 STEUERN_ENDE_E_LUEFTER E-Luefter Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EKP

0x2F60D800 STEUERN_ENDE_EKP Elektrische Kraftstoffpumpe 1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ELUER

0x2F608100 STEUERN_ENDE_ELUER E-Luefter-Relais Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EML

0x2F60D600 STEUERN_ENDE_EML EML (Engine Malfunction Lamp) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ENWS

0x2F60ED00 STEUERN_ENDE_ENWS Vanos Einlass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EV1

0x2F60E100 STEUERN_ENDE_EV1 Einspritzventil 1 (physikalisch) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EV2

0x2F60E200 STEUERN_ENDE_EV2 Einspritzventil 2 (physikalisch) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EV3

0x2F60E300 STEUERN_ENDE_EV3 Einspritzventil 3 (physikalisch) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EV4

0x2F60E400 STEUERN_ENDE_EV4 Einspritzventil 4 (physikalisch) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EV5

0x2F60E500 STEUERN_ENDE_EV5 Einspritzventil 5 (physikalisch) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EV6

0x2F60E600 STEUERN_ENDE_EV6 Einspritzventil 6 (physikalisch) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_EWAP

0x2F60BF00 STEUERN_ENDE_EWAP elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_GLF

0x2F60C300 STEUERN_ENDE_GLF Gesteuerte Luftfuehrung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_GLF2

0x2F60A400 STEUERN_ENDE_GLF2 Gesteuerte Luftfuehrung Klappe 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_KFT

0x2F60C900 STEUERN_ENDE_KFT Kennfeldthermostat Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_KGEH

0x2F60AD00 STEUERN_ENDE_KGEH Kurbelgehaeuseentlueftungsheizung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LRP

0x2E5FF700 STEUERN_ENDE_LRP Laufruhepruefung Vorgeben beenden NO_CON

_No arguments._

### STEUERN_ENDE_LSH1

0x2F60D000 STEUERN_ENDE_LSH1 Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH2

0x2F60D100 STEUERN_ENDE_LSH2 Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH3

0x2F60D200 STEUERN_ENDE_LSH3 Lambdasondenheizung vor Kat Bank2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH4

0x2F60D300 STEUERN_ENDE_LSH4 Lambdasondenheizung hinter Kat Bank2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_MIL

0x2F60D400 STEUERN_ENDE_MIL MIL (Malfunction Indicator Lamp) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ODR

0x2F60AB00 STEUERN_ENDE_ODR Oel Druck Regelung (Geregeltes Oeldrucksystem) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_ODV

0x2F60AC00 STEUERN_ENDE_ODV Oeldruckventil (Geregeltes Oeldrucksystem) Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_SLP

0x2F60CB00 STEUERN_ENDE_SLP Sekundaerluftpumpe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_SOK

0x2F60C200 STEUERN_ENDE_SOK Soundklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_SR

0x2F60C400 STEUERN_ENDE_SR Startrelais Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_TEV

0x2F60CF00 STEUERN_ENDE_TEV Tankentlueftungsventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UGEN

0x2F603200 STEUERN_ENDE_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UVLSS

0x2F602000 STEUERN_ENDE_UVLSS Versorgung Einspritzung / Zuendung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_VVT

0x2F60DD00 STEUERN_ENDE_VVT VVT Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_VVTMINH

0x2E5FDE00 STEUERN_ENDE_VVTMINH VVT-Minhub Vorgeben beenden NO_CON

_No arguments._

### STEUERN_ENDE_VVTR

0x2F60DC00 STEUERN_ENDE_VVTR VVT-Entlastungsrelais Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_ZWDIAG

0x3102F03A STEUERN_ENDE_ZWDIAG CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose Steuern-Ende)

_No arguments._

### STEUERN_ENWS

0x2F60ED03 STEUERN_ENWS Vanos Einlass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS_WERT | real | Sollwert Vanos-Einlass-Ventil (A2L-NAME: CAM_SP_IN_EXT_ADJ) CAM_SP_IN_EXT_ADJ   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ENWS_WERT | unsigned long | Timeout Ventil Einlassnockenwellensteller Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV1

0x2F60E103 STEUERN_EV1 Einspritzventil 1 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_IV_PER_EXT_ADJ_1_WERT | unsigned long | Periodendauer Einspritzventil 1 (A2L-Name: iv_per_ext_adj[0]) IV_PER_EXT_ADJ[0]   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV1_WERT | real | Sollwert Einspritzventil 1 IV_EXT_ADJ[0]   Einheit: ms   Min: 0 Max: 20.4 |
| SW_TO_EV1_WERT | unsigned long | Timeout Einspritzventil 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV2

0x2F60E203 STEUERN_EV2 Einspritzventil 2 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_IV_PER_EXT_ADJ_2_WERT | unsigned long | Periodendauer Einspritzventil 2 (A2L-Name: iv_per_ext_adj[1]) IV_PER_EXT_ADJ[4]   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV2_WERT | real | Sollwert Einspritzventil 2 IV_EXT_ADJ[4]   Einheit: ms   Min: 0 Max: 20.4 |
| SW_TO_EV2_WERT | unsigned long | Timeout Einspritzventil 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV3

0x2F60E303 STEUERN_EV3 Einspritzventil 3 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_IV_PER_EXT_ADJ_3_WERT | unsigned long | Periodendauer Einspritzventil 3 (A2L-Name: iv_per_ext_adj[2]) IV_PER_EXT_ADJ[2]   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV3_WERT | real | Sollwert Einspritzventil 3 IV_EXT_ADJ[2]   Einheit: ms   Min: 0 Max: 20.4 |
| SW_TO_EV3_WERT | unsigned long | Timeout Einspritzventil 3 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV4

0x2F60E403 STEUERN_EV4 Einspritzventil 4 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_IV_PER_EXT_ADJ_4_WERT | unsigned long | Periodendauer Einspritzventil 4 (A2L-Name: iv_per_ext_adj[5]) IV_PER_EXT_ADJ[5]   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV4_WERT | real | Sollwert Einspritzventil 4 IV_EXT_ADJ[5]   Einheit: ms   Min: 0 Max: 20.4 |
| SW_TO_EV4_WERT | unsigned long | Timeout Einspritzventil 4 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV5

0x2F60E503 STEUERN_EV5 Einspritzventil 5 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_IV_PER_EXT_ADJ_5_WERT | unsigned long | Periodendauer Einspritzventil 5 (A2L-Name: iv_per_ext_adj[1]) IV_PER_EXT_ADJ[1]   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV5_WERT | real | Sollwert Einspritzventil 5 IV_EXT_ADJ[1]   Einheit: ms   Min: 0 Max: 20.4 |
| SW_TO_EV5_WERT | unsigned long | Timeout Einspritzventil 5 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV6

0x2F60E603 STEUERN_EV6 Einspritzventil 6 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_IV_PER_EXT_ADJ_6_WERT | unsigned long | Periodendauer Einspritzventil 6 (A2L-Name: iv_per_ext_adj[3]) IV_PER_EXT_ADJ[3]   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV6_WERT | real | Sollwert Einspritzventil 6 IV_EXT_ADJ[3]   Einheit: ms   Min: 0 Max: 20.4 |
| SW_TO_EV6_WERT | unsigned long | Timeout Einspritzventil 6 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EWAP

0x2F60BF03 STEUERN_EWAP elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) ansteuern nur bei Fahrzeuggeschwindigkeit v=0 und Motortemperatur TMOT kleiner 115gradCelsius und Batteriespannung UBAT groesser 10Volt CON_EWAP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP_WERT | real | Sollwert elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) N_REL_CWP_SP_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GLF

0x2F60C303 STEUERN_GLF Gesteuerte Luftfuehrung ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | unsigned long | Sollwert Gesteuerte Luftfuehrung LV_ACT_ECRAS_UP_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_GLF_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GLF2

0x2F60A403 STEUERN_GLF2 Gesteuerte Luftfuehrung Klappe 2 ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF2_WERT | unsigned long | Tastverhaeltniss Gesteuerte Luftfuehrung Klappe 2 LV_ACT_ECRAS_DOWN_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_GLF2_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KFT

0x2F60C903 STEUERN_KFT Kennfeldthermostat ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT_WERT | real | Sollwert Kennfeldthermostat ECTPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_KFT_WERT | unsigned long | Timeout Kennfeldthermostat 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KGEH

0x2F60AD03 STEUERN_KGEH Kurbelgehaeuseentlueftungsheizung ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KGEH_WERT | unsigned long | Sollwert Kurbelgehaeuseentlueftungsheizung LV_ACT_RLY_CRCV_HEAT_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_KGEH_WERT | unsigned long | Timeout Kurbelgehaeuseentlueftungsheizung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KRANN

0x3101F0E3 STEUERN_KRANN Ansteuern Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| RF_WERT_WERT | real | Relative Kraftstoffmasse (A2L-Name: Rf) RF   Einheit: %   Min: -327.68 Max: 327.67 |
| TANS_WERT | real | Ansauglufttemperatur TANS   Einheit: C   Min: -3276.8 Max: 3276.7 |
| TMOT_WERT | real | Kuehlwassertemperatur TMOT   Einheit: C   Min: -327.68 Max: 327.67 |
| BA_IST_WERT | string | Istbetriebsart BA_IST   Min: 0 Max: 8 |

### STEUERN_KVA

0x2E5FC1 STEUERN_KVA KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | real | correction factor for consumption (A2L-Name: fac_fco_kwp) FAC_FCO_KWP   Min: -0.128 Max: 0.127 |

### STEUERN_LL_ABGLEICH

0x2E5FF007 STEUERN_LL_ABGLEICH Abgleichwert LL (Leerlauf) vorgeben Aktivierung: Klemme 15 = EIN UND Leerlaufabgleich ueber Testervorgabe = EIN Activation: LV_IGK = 1 UND LV_KWP_ENA = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_OFS_ACC_DRI_IN_WERT | long | Abgleichswert LL mit Klima und Fahrbedingung N_KWP_OFS_ACC_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_DRI_IN_WERT | long | Abgleichswert LL mit Fahrstufe N_KWP_OFS_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_IN_WERT | long | Abgleichswert LL N_KWP_OFS_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_ACC_IN_WERT | long | Abgleichswert LL mit Klimaanlage N_KWP_OFS_ACC_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_VB_IN_WERT | long | Abgleichswert LL mit niedriger Batteriespannung N_KWP_OFS_VB_KWP   Einheit: rpm   Min: -256 Max: 254 |

### STEUERN_LLABG_PROG

0x2E5FF008 STEUERN_LLABG_PROG Abgleichwert LL (Leerlauf) programmieren Aktivierung: Klemme 15 = EIN UND Leerlaufabgleich ueber Testervorgabe = EIN Activation: LV_IGK = 1 UND LV_KWP_ENA = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_OFS_ACC_DRI_IN_WERT | long | Abgleichswert LL mit Klima und Fahrbedingung N_KWP_OFS_ACC_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_DRI_IN_WERT | long | Abgleichswert LL mit Fahrstufe N_KWP_OFS_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_IN_WERT | long | Abgleichswert LL N_KWP_OFS_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_ACC_IN_WERT | long | Abgleichswert LL mit Klimaanlage N_KWP_OFS_ACC_KWP   Einheit: rpm   Min: -256 Max: 254 |
| SW_OFS_VB_IN_WERT | long | Abgleichswert LL mit niedriger Batteriespannung N_KWP_OFS_VB_KWP   Einheit: rpm   Min: -256 Max: 254 |

### STEUERN_LRP

0x2E5FF707 STEUERN_LRP Laufruhepruefung vorgeben NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_HUBEINGRIFF_INAKTIV_WERT | unsigned long | zylinderselektiver Hubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |
| SW_MINHUBEINGRIFF_INAKTIV_WERT | unsigned long | Minhubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |
| SW_ZUENDWINKELEINGRIFF_INAKTIV_WERT | unsigned long | Zuendwinkeleingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |
| SW_GEMISCHEINGRIFF_INAKTIV_WERT | unsigned long | Gemischeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |

### STEUERN_LSH1

0x2F60D003 STEUERN_LSH1 Lambdasondenheizung vor Kat Bank1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 LSHPWM_UP_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH1_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH2

0x2F60D103 STEUERN_LSH2 Lambdasondenheizung hinter Kat Bank1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank1 LSHPWM_DOWN_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH2_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH3

0x2F60D203 STEUERN_LSH3 Lambdasondenheizung vor Kat Bank2 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH3_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank2 LSHPWM_UP_EXT_ADJ[2]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH3_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH4

0x2F60D303 STEUERN_LSH4 Lambdasondenheizung hinter Kat Bank2 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH4_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank2 LSHPWM_DOWN_EXT_ADJ[2]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH4_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MIL

0x2F60D403 STEUERN_MIL MIL (Malfunction Indicator Lamp) ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL_WERT | unsigned long | Sollwert MIL (Malfunction Indicator Lamp) LV_ACT_MIL_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_MIL_WERT | unsigned long | Timeout MIL (Malfunction Indicator Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ODR

0x2F60AB03 STEUERN_ODR Oel Druck Regelung (Geregeltes Oeldrucksystem) ansteuern nur bei Fahrzeuggeschwindigkeit v=0 und Motordrehzahl n=0 V_N_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_P_OELSOL_TST_WERT | unsigned long | Oeldruck Sollwert durch Testereingriff (A2L-NAME: poi_sp_ext_adj) POIL_SP_EXT_ADJ   Einheit: hPa   Min: 0 Max: 8160 |
| SW_TO_ODR_WERT | unsigned long | Timeout Oel Druck Regelung (Geregeltes Oeldrucksystem) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ODV

0x2F60AC03 STEUERN_ODV Oeldruckventil (Geregeltes Oeldrucksystem) ansteuern nur bei Motordrehzahl n=0 N_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ODV_WERT | real | Tastverhaeltniss Oeldruckventil (Geregeltes Oeldrucksystem) POIL_PWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ODV_WERT | unsigned long | Timeout Oeldruckventil (Geregeltes Oeldrucksystem) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_PM_RESTORE

0x2E5F8B STEUERN_PM_RESTORE Schreiben PM-Restore Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_PMRESTORE_0_WERT | unsigned long | PM-Restore Byte 0 PMRESTORE[0]   Min: 0 Max: 255 |
| SW_PMRESTORE_1_WERT | unsigned long | PM-Restore Byte 1 PMRESTORE[1]   Min: 0 Max: 3 |
| SW_PMRESTORE_2_WERT | unsigned long | PM-Restore Byte 2 PMRESTORE[2]   Min: 0 Max: 255 |
| SW_PMRESTORE_3_WERT | unsigned long | PM-Restore Byte 3 PMRESTORE[3]   Min: 0 Max: 3 |
| SW_PMRESTORE_4_WERT | unsigned long | PM-Restore Byte 4 PMRESTORE[4]   Min: 0 Max: 255 |
| SW_PMRESTORE_5_WERT | unsigned long | PM-Restore Byte 5 PMRESTORE[5]   Min: 0 Max: 3 |
| SW_PMRESTORE_6_WERT | unsigned long | PM-Restore Byte 6 PMRESTORE[6]   Min: 0 Max: 255 |

### STEUERN_PROGRAMM_LRP

0x2E5FF708 STEUERN_PROGRAMM_LRP Laufruhepruefung programmieren NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_HUBEINGRIFF_INAKTIV_WERT | unsigned long | zylinderselektiver Hubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |
| SW_MINHUBEINGRIFF_INAKTIV_WERT | unsigned long | Minhubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |
| SW_ZUENDWINKELEINGRIFF_INAKTIV_WERT | unsigned long | Zuendwinkeleingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |
| SW_GEMISCHEINGRIFF_INAKTIV_WERT | unsigned long | Gemischeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL DEC   Min: 0 Max: 255 |

### STEUERN_PROGRAMM_VVTMINH

0x2E5FDE08 STEUERN_PROGRAMM_VVTMINH VVT-Minhub programmieren NO_CON

| Name | Type | Description |
| --- | --- | --- |
| STAT_VVL_MIN_NVMY_EXT_ADJ_WERT | real | adjustment value for minimum valve lift (A2L-Name: vvl_min_nvmy_ext_adj) VVL_MIN_NVMY_EXT_ADJ   Einheit: mm   Min: 0 Max: 65.535 |

### STEUERN_RAM

0x3101F0F2 STEUERN_RAM Ansteuern RAM Backup zwangssichern

_No arguments._

### STEUERN_SLP

0x2F60CB03 STEUERN_SLP Sekundaerluftpumpe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SLP_WERT | unsigned long | Tastverhaeltniss Sekundaerluftpumpe LV_SAP_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_SLP_WERT | unsigned long | Timeout Sekundaerluftpumpe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_SOK

0x2F60C203 STEUERN_SOK Soundklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SOK_WERT | unsigned long | Sollwert Soundklappe LV_ACT_SOF_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_SOK_WERT | unsigned long | Timeout Soundklappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_SR

0x2F60C403 STEUERN_SR Startrelais ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SR_WERT | unsigned long | Sollwert Startrelais LV_ACT_RLY_ST_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_SR_WERT | unsigned long | Timeout Startrelais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_TEV

0x2F60CF03 STEUERN_TEV Tankentlueftungsventil ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV_WERT | real | Tastverhaeltniss Tankentlueftungsventil CPPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_TEV_WERT | unsigned long | Timeout Tankentlueftungsventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_UGEN

0x2F603203 STEUERN_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UGEN_WERT | real | Spannung Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) V_ALTER_SP_EXT_ADJ   Einheit: V   Min: 0 Max: 6553.5 |
| SW_TO_UGEN_WERT | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_UVLSS

0x2F602003 STEUERN_UVLSS Versorgung Einspritzung / Zuendung ansteuern Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UVLSS_WERT | unsigned long | Spannung Versorgung Einspritzung / ZÃ¼ndung LV_RLY_HPDI_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_UVLSS_WERT | unsigned long | Timeout Versorgung Einspritzung / ZÃ¼ndung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_VVT

0x2F60DD03 STEUERN_VVT VVT ansteuern NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_VVT_WERT | real | Stellbereich VVT ANG_SP_EXT_ADJ_VVL   Einheit: g/s   Min: 0 Max: 179.29687 |
| SW_TO_VVT_WERT | unsigned long | Timeout VVT 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_VVTMINH

0x2E5FDE07 STEUERN_VVTMINH VVT-Minhub vorgeben NO_CON

| Name | Type | Description |
| --- | --- | --- |
| STAT_VVL_MIN_EXT_ADJ_WERT | real | adjustment value for minimum valve lift (A2L-Name: vvl_min_ext_adj) VVL_MIN_EXT_ADJ   Einheit: mm   Min: 0 Max: 65.535 |

### STEUERN_VVTR

0x2F60DC03 STEUERN_VVTR VVT-Entlastungsrelais ansteuern nur bei Motordrehzahl n=0 N_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_VVTR_WERT | unsigned long | Tastverhaeltniss VVT-Entlastungsrelais LV_RLY_VVL_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_VVTR_WERT | unsigned long | Timeout VVT-Entlastungsrelais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ZWDIAG

0x3101F03A STEUERN_ZWDIAG CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose Steuern) 

| Name | Type | Description |
| --- | --- | --- |
| EFF_IGA_CST_LIM_EXT_ADJ_WERT | real | Externe Effizienz Beschraenkung durch externes Geraet EFF_IGA_CST_LIM_EXT_ADJ   Min: 0 Max: 1.99996 |
| FAC_CH_DIAG_EXT_ADJ_IS_WERT | real | Manipulation von CH Drehmoment Reserve fuer Zuendwinkel Effizienz Ueberwachung - Demo-Modus ist FAC_CH_DIAG_EXT_ADJ_IS   Min: 0 Max: 1.9921875 |
| FAC_CH_DIAG_EXT_ADJ_PL_WERT | real | Manipulation von CH Drehmoment Reserve fuer Zuendwinkel Effizienz Ueberwachung - Demo-Modus PL FAC_CH_DIAG_EXT_ADJ_PL   Min: 0 Max: 1.9921875 |

### STOP_SYSTEMCHECK_DMTL

0x3102F0DA STOP_SYSTEMCHECK_DMTL Diagnosefunktion DMTL beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

0x3102F025 STOP_SYSTEMCHECK_EVAUSBL Ende Diagnosefunktion EinspritzVentile EV-Ausblendung Aktivierung: Klemme 15 = EIN UND Motorstatus = (Leerlauf ODER Teillast) UND Drehzahl < 3000 1/min Activation: LV_IGK = 1 UND STATE_ENG = (IS ODER PL) UND N < C_N_MAX_KWP

_No arguments._

### STOP_SYSTEMCHECK_GEN

0x3102F02A STOP_SYSTEMCHECK_GEN Diagnosefunktion Generatortest beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_GLF

0x3102F0D5 STOP_SYSTEMCHECK_GLF Ende Gesteuerte Luftfuehrung Systemcheck Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

0x3102F0D9 STOP_SYSTEMCHECK_L_REGELUNG_AUS Ende Lambdaregelung ausschalten Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_L_SONDE

0x3102F0DF STOP_SYSTEMCHECK_L_SONDE Diagnosefunktion vertauschte Lambdasonden beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_LLERH

0x3102F026 STOP_SYSTEMCHECK_LLERH Diagnosefunktion Leerlauf-Erhoehung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_ODR

0x3102F02C STOP_SYSTEMCHECK_ODR Diagnosefunktion Oeldruckregelung beenden

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

0x3102F0F6 STOP_SYSTEMCHECK_PM_MESSEMODE Ende Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

0x3102F020 STOP_SYSTEMCHECK_SEK_LUFT Diagnosefunktion Sekundaerluft beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_TEV

0x3102F022 STOP_SYSTEMCHECK_TEV Diagnosefunktion Tankentlueftungsventil beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

0x3102F027 STOP_SYSTEMCHECK_VVT_ANSCHLAG Diagnosefunktion VVT Anschlag lernen beenden

_No arguments._

### STOP_VANOSSPUELEN

0x3102F042 STOP_VANOSSPUELEN VANOS Spuelen fuer OBD und PVE. Steuern-Ende

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
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000000 | 000000 FehlerOrt nicht bedatet | 0 |
| 0x021200 | 0x021200 Transportmodus: aktiv | 0 |
| 0x100001 | 0x100001 Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | 0x100101 Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | 0x100201 Drosselklappe, schwergängig: zu langsam | 0 |
| 0x100304 | 0x100304 DME, interner Fehler, Ansteuerung Drosselklappe: Fehlfunktion | 0 |
| 0x100A04 | 0x100A04 Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x100C08 | 0x100C08 Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zur Luftmasse | 0 |
| 0x100E08 | 0x100E08 Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zur Luftmasse | 0 |
| 0x101001 | 0x101001 Drosselklappe, Drosselklappenpotenziometer 1: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x101002 | 0x101002 Drosselklappe: Drosselklappenpotenziometer 1, Kurzschluss nach Masse | 0 |
| 0x101201 | 0x101201 Drosselklappe: Drosselklappenpotenziometer 2, Kurzschluss nach Plus | 0 |
| 0x101202 | 0x101202 Drosselklappe, Drosselklappenpotenziometer 2: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x101401 | 0x101401 Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | 0x101402 Drosselklappe: Notluftposition nicht adaptiert | 0 |
| 0x101404 | 0x101404 Drosselklappe: Federtest und Prüfung Notluftposition nicht durchgeführt | 0 |
| 0x101408 | 0x101408 Drosselklappe: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101901 | 0x101901 Drosselklappe, Startprüfung: Federtest | 0 |
| 0x101902 | 0x101902 Drosselklappe, Startprüfung: Prüfung Notluftposition | 0 |
| 0x101A01 | 0x101A01 Drosselklappe, kontinuierliche Adaption: unterer Anschlag nicht adaptiert | 0 |
| 0x101C08 | 0x101C08 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x102001 | 0x102001 Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | 0x102002 Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102201 | 0x102201 Luftmassenmesser: Sammelfehler | 0 |
| 0x102204 | 0x102204 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102801 | 0x102801 Luftmassenmesser, Messbereich: Signal außerhalb gültigem Bereich | 0 |
| 0x102A01 | 0x102A01 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A02 | 0x102A02 Luftmassenmesser, Signal: außerhalb gültigem Bereich | 0 |
| 0x103001 | 0x103001 Fahrpedalmodul, Pedalwertgeber 1: Kurzschluss nach Plus | 0 |
| 0x103002 | 0x103002 Fahrpedalmodul, Pedalwertgeber 1: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103004 | 0x103004 Fahrpedalmodul, Pedalwertgeber 1: Arbeitsbereich, Spannung zu hoch | 0 |
| 0x103008 | 0x103008 Fahrpedalmodul, Pedalwertgeber 1: Arbeitsbereich, Spannung zu niedrig | 0 |
| 0x103101 | 0x103101 Fahrpedalmodul, Pedalwertgeber 2: Kurzschluss nach Plus | 0 |
| 0x103102 | 0x103102 Fahrpedalmodul, Pedalwertgeber 2: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103104 | 0x103104 Fahrpedalmodul, Pedalwertgeber 2: Arbeitsbereich, Spannung zu hoch | 0 |
| 0x103108 | 0x103108 Fahrpedalmodul, Pedalwertgeber 2: Arbeitsbereich, Spannung zu niedrig | 0 |
| 0x103208 | 0x103208 Fahrpedalmodul, Pedalwertgeber: Doppelfehler | 0 |
| 0x103308 | 0x103308 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x104101 | 0x104101 Drosselklappenwinkel - Differenzdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x104102 | 0x104102 Drosselklappenwinkel - Differenzdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x104208 | 0x104208 Differenzdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck unplausibel | 0 |
| 0x104701 | 0x104701 Differenzdrucksensor, Saugrohr: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x104702 | 0x104702 Differenzdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x105001 | 0x105001 Umgebungsdrucksensor: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x105002 | 0x105002 Umgebungsdrucksensor: Kurzschluss nach Masse | 0 |
| 0x105101 | 0x105101 Umgebungsdrucksensor, Plausibilität: Maximaldruck unplausibel | 0 |
| 0x105102 | 0x105102 Umgebungsdrucksensor, Plausibilität: Minimaldruck unplausibel | 0 |
| 0x106001 | 0x106001 Variable Sauganlage, Stellmotor: Ansteuerung, Kurzschluss nach Plus | 0 |
| 0x106002 | 0x106002 Variable Sauganlage, Stellmotor: Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x106004 | 0x106004 Variable Sauganlage, Stellmotor: Ansteuerung, Leitungsunterbrechung | 0 |
| 0x106101 | 0x106101 Variable Sauganlage, Stellmotor 2: Ansteuerung, Kurzschluss nach Plus | 0 |
| 0x106102 | 0x106102 Variable Sauganlage, Stellmotor 2: Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x106104 | 0x106104 Variable Sauganlage, Stellmotor 2: Ansteuerung, Leitungsunterbrechung | 0 |
| 0x106201 | 0x106201 Variable Sauganlage, Plausibilität: DISA 2 Schalter defekt | 0 |
| 0x106202 | 0x106202 Variable Sauganlage, Plausibilität: DISA 1 Schalter defekt | 0 |
| 0x106308 | 0x106308 Variable Sauganlage, Eigendiagnose: mechanischer Fehler oder Stellmotor defekt | 0 |
| 0x106408 | 0x106408 Variable Sauganlage 2, Eigendiagnose: mechanischer Fehler oder Stellmotor defekt | 0 |
| 0x107101 | 0x107101 Drosselklappe, Adaptionswerte: fehlen, Neuadaption erforderlich | 1 |
| 0x107201 | 0x107201 Drosselklappe, Startprüfung: Federtest | 0 |
| 0x107202 | 0x107202 Drosselklappe, Startprüfung: Prüfung Notluftposition | 0 |
| 0x107B01 | 0x107B01 DME, interner Fehler: Überwachung Luftpfad, Signal unplausibel | 0 |
| 0x107B02 | 0x107B02 DME, interner Fehler: Überwachung Luftpfad, Drosselklappenstellung unplausibel | 0 |
| 0x108001 | 0x108001 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | 0x108002 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108201 | 0x108201 Ansauglufttemperatur: Plausibilität, Temperatur zu hoch | 0 |
| 0x108202 | 0x108202 Ansauglufttemperatur: Plausibilität, Temperatur zu niedrig | 0 |
| 0x108208 | 0x108208 Ansauglufttemperatur: Signal, festliegend | 0 |
| 0x109001 | 0x109001 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x109002 | 0x109002 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109108 | 0x109108 Kühlmitteltemperatursensor, Plausibilität: unplausibel bezüglich Lambdaregelung | 0 |
| 0x109208 | 0x109208 Kühlmitteltemperatursensor, Plausibilität: Signal hängt | 0 |
| 0x109308 | 0x109308 Kühlmitteltemperatursensor, Plausibilität: Signaländerung zu schnell | 0 |
| 0x109408 | 0x109408 Kühlmitteltemperatursensor, Plausibilität: Signal hängt im oberen Messbereich | 0 |
| 0x10B008 | 0x10B008 Außentemperatursensor, Plausibilität: Signal unplausibel | 0 |
| 0x10B101 | 0x10B101 Außentemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x10B102 | 0x10B102 Außentemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10B104 | 0x10B104 Außentemperatursensor, elektrisch: Signalfehler | 1 |
| 0x10E001 | 0x10E001 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 1: Gemisch zu mager | 0 |
| 0x10E002 | 0x10E002 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 1: Gemisch zu fett | 0 |
| 0x10E101 | 0x10E101 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 2: Gemisch zu mager | 0 |
| 0x10E102 | 0x10E102 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 2: Gemisch zu fett | 0 |
| 0x10E201 | 0x10E201 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 3: Gemisch zu mager | 0 |
| 0x10E202 | 0x10E202 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 3: Gemisch zu fett | 0 |
| 0x10E301 | 0x10E301 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 4: Gemisch zu mager | 0 |
| 0x10E302 | 0x10E302 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 4: Gemisch zu fett | 0 |
| 0x10E401 | 0x10E401 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 5: Gemisch zu mager | 0 |
| 0x10E402 | 0x10E402 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 5: Gemisch zu fett | 0 |
| 0x10E501 | 0x10E501 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 6: Gemisch zu mager | 0 |
| 0x10E502 | 0x10E502 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 6: Gemisch zu fett | 0 |
| 0x10F101 | 0x10F101 Zylindergleichstellung über Lambda, Zylinder 1: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F102 | 0x10F102 Zylindergleichstellung über Lambda, Zylinder 1: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F201 | 0x10F201 Zylindergleichstellung über Lambda, Zylinder 2: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F202 | 0x10F202 Zylindergleichstellung über Lambda, Zylinder 2: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F301 | 0x10F301 Zylindergleichstellung über Lambda, Zylinder 3: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F302 | 0x10F302 Zylindergleichstellung über Lambda, Zylinder 3: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F401 | 0x10F401 Zylindergleichstellung über Lambda, Zylinder 4: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F402 | 0x10F402 Zylindergleichstellung über Lambda, Zylinder 4: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F501 | 0x10F501 Zylindergleichstellung über Lambda, Zylinder 5: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F502 | 0x10F502 Zylindergleichstellung über Lambda, Zylinder 5: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F601 | 0x10F601 Zylindergleichstellung über Lambda, Zylinder 6: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F602 | 0x10F602 Zylindergleichstellung über Lambda, Zylinder 6: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x110008 | 0x110008 Zylindereinspritzabschaltung: Tankfüllstand zu gering | 0 |
| 0x111201 | 0x111201 Einspritzventil Zylinder 1, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111202 | 0x111202 Einspritzventil Zylinder 1, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111204 | 0x111204 Einspritzventil Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111301 | 0x111301 Einspritzventil Zylinder 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111302 | 0x111302 Einspritzventil Zylinder 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111304 | 0x111304 Einspritzventil Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111401 | 0x111401 Einspritzventil Zylinder 3, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111402 | 0x111402 Einspritzventil Zylinder 3, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111404 | 0x111404 Einspritzventil Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111501 | 0x111501 Einspritzventil Zylinder 4, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111502 | 0x111502 Einspritzventil Zylinder 4, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111504 | 0x111504 Einspritzventil Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111601 | 0x111601 Einspritzventil Zylinder 5, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111602 | 0x111602 Einspritzventil Zylinder 5, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111604 | 0x111604 Einspritzventil Zylinder 5, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111701 | 0x111701 Einspritzventil Zylinder 6, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111702 | 0x111702 Einspritzventil Zylinder 6, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111704 | 0x111704 Einspritzventil Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x118001 | 0x118001 Gemischregelung: Gemisch zu mager | 0 |
| 0x118002 | 0x118002 Gemischregelung: Gemisch zu fett | 0 |
| 0x118101 | 0x118101 Gemischregelung 2: Gemisch zu mager | 0 |
| 0x118102 | 0x118102 Gemischregelung 2: Gemisch zu fett | 0 |
| 0x118401 | 0x118401 Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | 0x118402 Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118501 | 0x118501 Gemischregelung 2: Gemisch zu mager, große Abweichung | 0 |
| 0x118502 | 0x118502 Gemischregelung 2: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | 0x118601 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | 0x118602 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118701 | 0x118701 Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118702 | 0x118702 Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118801 | 0x118801 Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118802 | 0x118802 Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118900 | 0x118900 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator | 0 |
| 0x118901 | 0x118901 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118902 | 0x118902 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x11B004 | 0x11B004 Kraftstoffpumpe, Funktion: Notabschaltung | 1 |
| 0x11B101 | 0x11B101 Elektrische Kraftstoffpumpe: Drehzahl zu hoch | 1 |
| 0x11B102 | 0x11B102 Elektrische Kraftstoffpumpe: Drehzahl zu niedrig | 1 |
| 0x11B104 | 0x11B104 Elektrische Kraftstoffpumpe: Notlauf | 1 |
| 0x11B108 | 0x11B108 Kraftstoffpumpe: Übertemperatur | 1 |
| 0x128008 | 0x128008 Lambdasonden vor Katalysator, Montage: vertauscht | 0 |
| 0x128101 | 0x128101 Lambdasonde vor Katalysator, Systemprüfung: Signal konstant mager | 0 |
| 0x128201 | 0x128201 Lambdasonde vor Katalysator 2, Systemprüfung: Signal konstant mager | 0 |
| 0x128301 | 0x128301 Lambdasonde vor Katalysator, Systemprüfung: Signal konstant fett | 0 |
| 0x128401 | 0x128401 Lambdasonde vor Katalysator 2, Systemprüfung: Signal konstant fett | 0 |
| 0x128501 | 0x128501 Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128601 | 0x128601 Lambdasonde vor Katalysator 2, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128901 | 0x128901 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128902 | 0x128902 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128A01 | 0x128A01 Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128A02 | 0x128A02 Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | 0x128B01 Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128C01 | 0x128C01 Lambdasonde vor Katalysator 2: Falschluft erkannt | 0 |
| 0x128E01 | 0x128E01 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x128E02 | 0x128E02 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128E04 | 0x128E04 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128E08 | 0x128E08 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x128F01 | 0x128F01 Lambdasonde vor Katalysator 2, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x128F02 | 0x128F02 Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128F04 | 0x128F04 Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128F08 | 0x128F08 Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x129001 | 0x129001 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | 0x129002 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129101 | 0x129101 Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129102 | 0x129102 Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | 0x129201 DME, interner Fehler: Regler für Lambdasonde vor Katalysator defekt | 0 |
| 0x129202 | 0x129202 DME, interner Fehler: Regler für Lambdasonde vor Katalysator defekt | 0 |
| 0x129301 | 0x129301 DME, interner Fehler, Lambdasonde vor Katalysator 2: Initialisierungsfehler | 0 |
| 0x129302 | 0x129302 DME, interner Fehler, Lambdasonde vor Katalysator 2: Kommunikationsfehler | 0 |
| 0x12A008 | 0x12A008 Lambdasonden nach Katalysator, Montage: vertauscht | 0 |
| 0x12A100 | 0x12A100 Lambdasonde nach Katalysator, Systemprüfung | 0 |
| 0x12A101 | 0x12A101 Lambdasonde nach Katalysator, Systemprüfung: Signal konstant fett | 0 |
| 0x12A102 | 0x12A102 Lambdasonde nach Katalysator, Systemprüfung: Signal konstant Mager | 0 |
| 0x12A200 | 0x12A200 Lambdasonde nach Katalysator 2, Systemprüfung | 0 |
| 0x12A201 | 0x12A201 Lambdasonde nach Katalysator 2, Systemprüfung: Signal konstant Fett | 0 |
| 0x12A202 | 0x12A202 Lambdasonde nach Katalysator 2, Systemprüfung: Signal konstant Mager | 0 |
| 0x12A308 | 0x12A308 Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A408 | 0x12A408 Lambdasonde nach Katalysator 2, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | 0x12A701 Lambdasonde nach Katalysator, Signal: Kurzschluss nach Plus | 0 |
| 0x12A801 | 0x12A801 Lambdasonde nach Katalysator 2, Signal: Kurzschluss nach Plus | 0 |
| 0x12A902 | 0x12A902 Lambdasonde nach Katalysator, Signal: Kurzschluss nach Masse | 0 |
| 0x12AA02 | 0x12AA02 Lambdasonde nach Katalysator 2, Signal: Kurzschluss nach Masse | 0 |
| 0x12AB04 | 0x12AB04 Lambdasonde nach Katalysator, Signal: Leitungsunterbrechung | 0 |
| 0x12AC04 | 0x12AC04 Lambdasonde nach Katalysator 2, Signal: Leitungsunterbrechung | 0 |
| 0x12AF08 | 0x12AF08 Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B008 | 0x12B008 Lambdasonde nach Katalysator 2, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B101 | 0x12B101 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | 0x12B102 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | 0x12B104 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B200 | 0x12B200 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung | 0 |
| 0x12B201 | 0x12B201 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B202 | 0x12B202 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B204 | 0x12B204 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | 0x12B301 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | 0x12B302 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | 0x12B304 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B401 | 0x12B401 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B402 | 0x12B402 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B404 | 0x12B404 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B501 | 0x12B501 Lambdasondentemperaturmessung vor Katalysator: Betriebstemperatur nicht erreicht | 0 |
| 0x12B502 | 0x12B502 Lambdasondentemperaturmessung vor Katalysator: Betriebstemperatur im Warmlauf nicht erreicht | 0 |
| 0x12B504 | 0x12B504 Lambdasondentemperaturmessung vor Katalysator: Messung im Steuergerät fehlgeschlagen | 0 |
| 0x12B601 | 0x12B601 Lambdasondentemperaturmessung vor Katalysator 2: Betriebstemperatur nicht erreicht | 0 |
| 0x12B602 | 0x12B602 Lambdasondentemperaturmessung vor Katalysator 2: Betriebstemperatur im Warmlauf nicht erreicht | 0 |
| 0x12B604 | 0x12B604 Lambdasondentemperaturmessung vor Katalysator 2: Messung im Steuergerät fehlgeschlagen | 0 |
| 0x12B701 | 0x12B701 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12B801 | 0x12B801 Lambdasondenbeheizung nach Katalysator 2, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BE08 | 0x12BE08 Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x12BF08 | 0x12BF08 Lambdasonde nach Katalysator 2, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x130001 | 0x130001 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130002 | 0x130002 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130004 | 0x130004 VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130108 | 0x130108 VANOS, Einlass: Regelfehler, Position nicht erreicht | 0 |
| 0x130201 | 0x130201 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130202 | 0x130202 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130204 | 0x130204 VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130308 | 0x130308 VANOS, Auslass: Regelfehler, Position nicht erreicht | 0 |
| 0x130801 | 0x130801 Einlassnockenwelle, Positionsüberwachung: Zahnsprung | 0 |
| 0x130901 | 0x130901 Auslassnockenwelle, Positionsüberwachung: Zahnsprung | 0 |
| 0x130C01 | 0x130C01 Kurbelwelle - Einlassnockenwelle, Referenz: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x130D01 | 0x130D01 Kurbelwelle - Auslassnockenwelle, Referenz: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x130E01 | 0x130E01 Kurbelwelle - Einlassnockenwelle, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x130F01 | 0x130F01 Kurbelwelle - Auslassnockenwelle, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x131401 | 0x131401 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131408 | 0x131408 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | 0x131501 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x131508 | 0x131508 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x133108 | 0x133108 Valvetronic-Relais, Ansteuerung: elektrischer Fehler | 0 |
| 0x133201 | 0x133201 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | 0x133202 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133204 | 0x133204 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss der Motorleitungen | 0 |
| 0x133304 | 0x133304 DME, interner Fehler, Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133401 | 0x133401 Valvetronic, thermischer Überlastschutz: Abschaltung System | 0 |
| 0x133501 | 0x133501 Valvetronic-Stellmotor: Überstrom erkannt | 0 |
| 0x133701 | 0x133701 Valvetronic, Verstellbereich: gelernter Bereich ausserhalb Toleranzen | 0 |
| 0x133702 | 0x133702 Valvetronic, Verstellbereich: unterer Anschlag nicht gelernt | 0 |
| 0x133704 | 0x133704 Valvetronic, Verstellbereich: keine Anschläge gelernt | 0 |
| 0x133801 | 0x133801 Valvetronic, Abgleichspannung: Minimum (L1) unterschritten | 0 |
| 0x133802 | 0x133802 Valvetronic, Abgleichspannung: Maximum (L1) überschritten | 0 |
| 0x133804 | 0x133804 Valvetronic, Abgleichspannung: Minimum (L2) unterschritten | 0 |
| 0x133808 | 0x133808 Valvetronic, Abgleichspannung: Maximum (L2) überschritten | 0 |
| 0x133900 | 0x133900 DME, interner Fehler, Valvetronic | 0 |
| 0x133901 | 0x133901 DME, interner Fehler, Valvetronic: Überstrom erkannt | 0 |
| 0x133902 | 0x133902 DME, interner Fehler, Valvetronic: Unterspannung erkannt | 0 |
| 0x133A08 | 0x133A08 DME, interner Fehler, Valvetronic: Schreib-/Lesefehler im EEPROM | 0 |
| 0x133B04 | 0x133B04 Valvetronic System: keine Verstellung möglich | 0 |
| 0x133B08 | 0x133B08 Valvetronic System: keine Verstellung möglich | 0 |
| 0x133C01 | 0x133C01 Valvetronic, thermischer Überlastschutz: Warnschwelle Strom überschritten | 0 |
| 0x133C02 | 0x133C02 Valvetronic, thermischer Überlastschutz: Warnschwelle Stellmotor überschritten | 0 |
| 0x133C04 | 0x133C04 Valvetronic, thermischer Überlastschutz: Warnschwelle Endstufe überschritten | 0 |
| 0x133F01 | 0x133F01 Valvetronic, Adaption: oberer Anschlag nicht gelernt | 0 |
| 0x133F02 | 0x133F02 Valvetronic, Adaption: unterer Anschlag nicht gelernt | 0 |
| 0x134002 | 0x134002 Valvetronic, Exzenterwellensensor, Führung: Fehlfunktion | 0 |
| 0x134101 | 0x134101 Valvetronic, Exzenterwellensensor, Führung: Magnetrad fehlt | 0 |
| 0x134202 | 0x134202 Valvetronic, Exzenterwellensensor, Referenz: Fehlfunktion | 0 |
| 0x134301 | 0x134301 Valvetronic, Exzenterwellensensor, Referenz: Magnetrad fehlt | 0 |
| 0x134408 | 0x134408 Valvetronic, Exzenterwellensensoren: Sammelfehler | 0 |
| 0x134501 | 0x134501 DME, interner Fehler, Valvetronic: Transistortemperatur H1 unplausibel | 0 |
| 0x134502 | 0x134502 DME, interner Fehler, Valvetronic: Transistortemperatur H2 unplausibel | 0 |
| 0x134504 | 0x134504 DME, interner Fehler, Valvetronic: Transistortemperatur L1 unplausibel | 0 |
| 0x134508 | 0x134508 DME, interner Fehler, Valvetronic: Transistortemperatur L2 unplausibel | 0 |
| 0x134601 | 0x134601 Valvetronic, Exzenterwellensensoren, elektrisch: Kurzschluss nach Plus | 0 |
| 0x134602 | 0x134602 Valvetronic, Exzenterwellensensoren, elektrisch: Kurzschluss nach Masse | 0 |
| 0x134702 | 0x134702 Valvetronic, Leistungsbegrenzung: Valvetronic öffnet nicht | 0 |
| 0x134704 | 0x134704 Valvetronic, Leistungsbegrenzung: Exzenterwinkel fährt nicht auf Vollhubposition | 0 |
| 0x134808 | 0x134808 Valvetronic System: Mechanik schwergängig | 0 |
| 0x134908 | 0x134908 Valvetronic-Stellmotor: Leistungsverlust | 0 |
| 0x134A02 | 0x134A02 Valvetronic-Stellmotor: Überlastung, Überlast | 0 |
| 0x134B00 | 0x134B00 Valvetronic-Stellmotor, Versorgungsspannung | 0 |
| 0x134B01 | 0x134B01 Valvetronic-Stellmotor, Spannungsversorgung: Überspannung | 0 |
| 0x134B02 | 0x134B02 Valvetronic-Stellmotor, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x134C04 | 0x134C04 Valvetronic, Exzenterwellensensor, Führung: Prüfsumme falsch | 0 |
| 0x134D04 | 0x134D04 Valvetronic, Exzenterwellensensor, Referenz: Prüfsumme falsch | 0 |
| 0x134E08 | 0x134E08 Exzenterwellensensor, Plausibilität: Sensorsignale zueinander unplausibel | 0 |
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
| 0x140001 | 0x140001 Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | 0x140002 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | 0x140004 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140008 | 0x140008 Verbrennungsaussetzer, mehrere Zylinder: Summenfehler | 0 |
| 0x140100 | 0x140100 Verbrennungsaussetzer, Zylinder 1 | 0 |
| 0x140101 | 0x140101 Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | 0x140102 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | 0x140104 Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140200 | 0x140200 Verbrennungsaussetzer, Zylinder 2 | 0 |
| 0x140201 | 0x140201 Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | 0x140202 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | 0x140204 Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140300 | 0x140300 Verbrennungsaussetzer, Zylinder 3 | 0 |
| 0x140301 | 0x140301 Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | 0x140302 Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | 0x140304 Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140400 | 0x140400 Verbrennungsaussetzer, Zylinder 4 | 0 |
| 0x140401 | 0x140401 Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | 0x140402 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | 0x140404 Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140500 | 0x140500 Verbrennungsaussetzer, Zylinder 5 | 0 |
| 0x140501 | 0x140501 Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | 0x140502 Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | 0x140504 Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140600 | 0x140600 Verbrennungsaussetzer, Zylinder 6 | 0 |
| 0x140601 | 0x140601 Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | 0x140602 Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | 0x140604 Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x142002 | 0x142002 Verbrennungsaussetzer: Tankfüllstand zu gering | 0 |
| 0x143002 | 0x143002 Laufunruhemessung: Messfehler Kurbelwellensensor | 0 |
| 0x150102 | 0x150102 Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | 0x150202 Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | 0x150302 Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | 0x150402 Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150502 | 0x150502 Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | 0x150602 Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x151000 | 0x151000 Zündwinkelverstellung im Leerlauf, Kaltstart | 0 |
| 0x151001 | 0x151001 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151100 | 0x151100 Zündwinkelverstellung in Teillast, Kaltstart | 0 |
| 0x151101 | 0x151101 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152000 | 0x152000 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152004 | 0x152004 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152008 | 0x152008 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x154001 | 0x154001 Zündspule Zylinder 1: Zündkreisüberwachung | 0 |
| 0x154101 | 0x154101 Zündspule Zylinder 2: Zündkreisüberwachung | 0 |
| 0x154201 | 0x154201 Zündspule Zylinder 3: Zündkreisüberwachung | 0 |
| 0x154301 | 0x154301 Zündspule Zylinder 4: Zündkreisüberwachung | 0 |
| 0x154401 | 0x154401 Zündspule Zylinder 5: Zündkreisüberwachung | 0 |
| 0x154501 | 0x154501 Zündspule Zylinder 6: Zündkreisüberwachung | 0 |
| 0x160001 | 0x160001 Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160002 | 0x160002 Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160101 | 0x160101 Kurbelwellensensor, Synchronisation: Fehlfunktion | 0 |
| 0x160201 | 0x160201 Kurbelwellensensorsignal, Zahnfehler: Zähnezahl falsch | 0 |
| 0x160301 | 0x160301 Kurbelwellensensorsignal, Lückenfehler: Zahnzeit unplausibel | 0 |
| 0x160402 | 0x160402 Kurbelwellensensor, Segmentadaption: Grenzwert überschritten | 0 |
| 0x162001 | 0x162001 Einlassnockenwellensensor, Synchronisation: Fehlfunktion | 0 |
| 0x162101 | 0x162101 Einlassnockenwellensensor, elektrisch: Signal fehlt | 0 |
| 0x162201 | 0x162201 Einlassnockenwellensensor, Funktion: Segmentzeitfehler | 0 |
| 0x163101 | 0x163101 Auslassnockenwellensensor, Synchronisation: Fehlfunktion | 0 |
| 0x163201 | 0x163201 Auslassnockenwellensensor, elektrisch: Signal fehlt | 0 |
| 0x163301 | 0x163301 Auslassnockenwellensensor, Funktion: Segmentzeitfehler | 0 |
| 0x168001 | 0x168001 Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | 0x168002 Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168008 | 0x168008 Klopfsensor 1, Signal: unplausibel | 0 |
| 0x168101 | 0x168101 Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | 0x168102 Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168108 | 0x168108 Klopfsensor 2, Signal: unplausibel | 0 |
| 0x170301 | 0x170301 Sekundärluftpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x170302 | 0x170302 Sekundärluftpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x170304 | 0x170304 Sekundärluftpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x180000 | 0x180000 Katalysator | 0 |
| 0x180001 | 0x180001 Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180002 | 0x180002 Katalysator: defekt | 0 |
| 0x180008 | 0x180008 Katalysator: Wirkungsgrad unterhalb Grenzwert (nicht validiert) | 0 |
| 0x180100 | 0x180100 Katalysator 2 | 0 |
| 0x180101 | 0x180101 Katalysator 2: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180102 | 0x180102 Katalysator 2: defekt | 0 |
| 0x180108 | 0x180108 Katalysator 2: Wirkungsgrad unterhalb Grenzwert (nicht validiert) | 0 |
| 0x190001 | 0x190001 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190002 | 0x190002 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190004 | 0x190004 DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190201 | 0x190201 Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1,0 mm | 0 |
| 0x190302 | 0x190302 Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
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
| 0x190802 | 0x190802 DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung | 0 |
| 0x190904 | 0x190904 DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung | 0 |
| 0x190A08 | 0x190A08 DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert | 0 |
| 0x190F04 | 0x190F04 Tankentlüftungssystem: Fehlfunktion Bandende | 0 |
| 0x190F08 | 0x190F08 Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191001 | 0x191001 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | 0x191002 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | 0x191004 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x192001 | 0x192001 Tankdeckel: nicht korrekt geschlossen | 0 |
| 0x193000 | 0x193000 Tankfüllstandssensor, links, Signal | 1 |
| 0x193001 | 0x193001 Tankfüllstandssensor, links, Signal: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x193002 | 0x193002 Tankfüllstandssensor, links, Signal: Kurzschluss nach Masse | 1 |
| 0x193008 | 0x193008 Tankfüllstandssensor, links, Signal: CAN Wert unplausibel | 1 |
| 0x193100 | 0x193100 Tankfüllstandssensor, rechts, Signal | 1 |
| 0x193101 | 0x193101 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x193102 | 0x193102 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Masse | 1 |
| 0x193108 | 0x193108 Tankfüllstandssensor, rechts, Signal: CAN Wert unplausibel | 1 |
| 0x193208 | 0x193208 Tankfüllstand, Plausibilität: unplausibel zu Verbrauchswert | 0 |
| 0x1A2001 | 0x1A2001 Elektrolüfter, Ansteuerungsleitung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | 0x1A2002 Elektrolüfter, Ansteuerungsleitung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | 0x1A2004 Elektrolüfter, Ansteuerungsleitung: Leitungsunterbrechung | 0 |
| 0x1A2108 | 0x1A2108  Elektrolüfter, Eigendiagnose Stufe 1: leichter Lüfterfehler | 0 |
| 0x1A2308 | 0x1A2308 Elektrolüfter, Eigendiagnose Stufe 2: Lüfterfehler mit potentieller Gefährdung für den Lüfter | 0 |
| 0x1A2408 | 0x1A2408 Elektrolüfter, Eigendiagnose Stufe 3: Lüfterfehler mit Motorfunktionseinschränkung | 0 |
| 0x1A2508 | 0x1A2508 Elektrolüfter, Eigendiagnose Stufe 4: schwerer Lüfterfehler | 0 |
| 0x1A2601 | 0x1A2601 Abschaltrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | 0x1A2602 Abschaltrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | 0x1A2604 Abschaltrelais Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2708 | 0x1A2708 Abschaltrelais Elektrolüfter, Plausibilität: Fehler beim Ein- bzw. Ausschalten des Relais | 0 |
| 0x1B0004 | 0x1B0004 Fahrzeuggeschwindigkeit, Signal: fehlt | 0 |
| 0x1B0108 | 0x1B0108 Fahrzeuggeschwindigkeit, Plausibilität: Signal unplausibel | 0 |
| 0x1B0204 | 0x1B0204 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit unplausibel oder CAN-Bus Kommunikation gestört | 1 |
| 0x1B0301 | 0x1B0301 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu niedrig bei niedrigem Lastzustand | 1 |
| 0x1B0401 | 0x1B0401 Fahrzeuggeschwindigkeit, Signaländerung: unplausibel | 1 |
| 0x1B0500 | 0x1B0500 Fahrzeuggeschwindigkeit, Signal | 1 |
| 0x1B0501 | 0x1B0501 Fahrzeuggeschwindigkeit, Signal: festliegend auf Null | 1 |
| 0x1B0601 | 0x1B0601 Fahrzeuggeschwindigkeit, Signal: festliegend | 1 |
| 0x1B0701 | 0x1B0701 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 1 |
| 0x1B0B01 | 0x1B0B01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 1 |
| 0x1B0C01 | 0x1B0C01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 1 |
| 0x1B0D01 | 0x1B0D01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 1 |
| 0x1B0E01 | 0x1B0E01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 1 |
| 0x1B2002 | 0x1B2002 EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | 0x1B2008 EWS Manipulationsschutz: Antwort unplausibel | 0 |
| 0x1B2101 | 0x1B2101 Schnittstelle EWS-DME: Hardwarefehler | 0 |
| 0x1B2102 | 0x1B2102 Schnittstelle EWS-DME: Framefehler | 0 |
| 0x1B2104 | 0x1B2104 Schnittstelle EWS-DME: Zeitüberschreitung | 0 |
| 0x1B2108 | 0x1B2108 Schnittstelle EWS-DME: Prüfsummenfehler | 0 |
| 0x1B2201 | 0x1B2201 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | 0x1B2202 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2204 | 0x1B2204 DME, interner Fehler, EWS-Daten: Startwert zerstört/ 2- aus 3-Auswahl fehlgeschlagen | 0 |
| 0x1B2208 | 0x1B2208 DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2302 | 0x1B2302 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 1 |
| 0x1B2304 | 0x1B2304 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 1 |
| 0x1B2801 | 0x1B2801 DME-Sperrung: EWS nicht freigeschalten | 0 |
| 0x1B5001 | 0x1B5001 Überwachung Klemme 15: Wake-up-Leitung Kurzschluss nach Plus | 0 |
| 0x1B5002 | 0x1B5002 Überwachung Klemme 15: Wake-up-Leitung Kurzschluss nach Masse | 0 |
| 0x1B5004 | 0x1B5004 Überwachung Klemme 15: Botschaft vom CAS fehlt oder fehlerhaft | 0 |
| 0x1B5008 | 0x1B5008 Überwachung Klemme 15: Signal Wake-up-Leitung unplausibel zur Botschaft CAS Klemmenstatus | 0 |
| 0x1B5101 | 0x1B5101 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | 0x1B5102 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5501 | 0x1B5501 Klemme 15N: keine Spannung | 0 |
| 0x1B5601 | 0x1B5601 Klemme 15N_1: keine Spannung | 0 |
| 0x1B5701 | 0x1B5701 Klemme 15N_2: keine Spannung | 0 |
| 0x1B5801 | 0x1B5801 Klemme 15N_3: keine Spannung | 0 |
| 0x1B8108 | 0x1B8108 EAC Sensor, Kodierung: falsch | 0 |
| 0x1B8201 | 0x1B8201 EAC Sensor: elektrisch, Kurzschluss nach Plus | 0 |
| 0x1B8204 | 0x1B8204 EAC Sensor: elektrisch, Kurzschluss nach Masse | 0 |
| 0x1B8208 | 0x1B8208 EAC Sensor: Arbeitsbereich, Temperatur unplausibel | 0 |
| 0x1B9004 | 0x1B9004 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Zeitüberschreitung oder Ungültigkeitswert | 1 |
| 0x1B9008 | 0x1B9008 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf/Nachlauf | 0 |
| 0x1B9104 | 0x1B9104 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf/Nachlauf | 0 |
| 0x1B9208 | 0x1B9208 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Wake-up | 0 |
| 0x1B9308 | 0x1B9308 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf | 0 |
| 0x1B9408 | 0x1B9408 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Nachlauf | 0 |
| 0x1B9508 | 0x1B9508 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | 0x1B9608 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1BAF08 | 0x1BAF08 Fahrpedalmodul - Bremspedal, Vergleich: Pedalwerte zueinander unplausibel | 0 |
| 0x1BD401 | 0x1BD401 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD402 | 0x1BD402 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD404 | 0x1BD404 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD408 | 0x1BD408 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion | 0 |
| 0x1BD501 | 0x1BD501 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD502 | 0x1BD502 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD504 | 0x1BD504 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD508 | 0x1BD508 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion | 0 |
| 0x1BD601 | 0x1BD601 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD602 | 0x1BD602 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD604 | 0x1BD604 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD608 | 0x1BD608 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion | 0 |
| 0x1BD701 | 0x1BD701 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD702 | 0x1BD702 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD704 | 0x1BD704 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD708 | 0x1BD708 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion | 0 |
| 0x1C0001 | 0x1C0001 Motoröldruckregelung, Plausibilität: Druckschwankungen | 0 |
| 0x1C0101 | 0x1C0101 Motoröldruckregelung, Plausibilität, statisch: Druck zu hoch | 0 |
| 0x1C0102 | 0x1C0102 Motoröldruckregelung, Plausibilität, statisch: Druck zu niedrig | 0 |
| 0x1C0201 | 0x1C0201 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | 0x1C0202 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | 0x1C0204 Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0300 | 0x1C0300 Motoröldruckregelventil: klemmt | 0 |
| 0x1C0301 | 0x1C0301 Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | 0x1C0302 Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | 0x1C0401 Motoröldruckregelung: instabil | 0 |
| 0x1C2001 | 0x1C2001 Motorölpumpe: Druck zu hoch | 0 |
| 0x1C2002 | 0x1C2002 Motorölpumpe: Druck zu niedrig | 0 |
| 0x1C3001 | 0x1C3001 Motoröldrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1C3002 | 0x1C3002 Motoröldrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1C3101 | 0x1C3101 Motoröldrucksensor: Plausibilität, Druck vor Motorstart zu hoch | 0 |
| 0x1C3102 | 0x1C3102 Motoröldrucksensor: Plausibilität, Druck vor Motorstart zu niedrig | 0 |
| 0x1C3104 | 0x1C3104 Motoröldrucksensor: Plausibilität, Leitungsunterbrechung Masse | 0 |
| 0x1C3108 | 0x1C3108 Motoröldrucksensor: Signal, festliegend | 0 |
| 0x1C3204 | 0x1C3204 Motoröldruckschalter: Leitungsunterbrechung oder Schalter klemmt | 0 |
| 0x1C3302 | 0x1C3302 Motorölpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C4002 | 0x1C4002 Thermischer Ölniveausensor: Niveau zu niedrig | 0 |
| 0x1C4102 | 0x1C4102 Motorölniveau: zu niedrig | 0 |
| 0x1C5001 | 0x1C5001 Ölzustandssensor: Temperaturmessung | 0 |
| 0x1C5002 | 0x1C5002 Ölzustandssensor: Niveaumessung | 0 |
| 0x1C5004 | 0x1C5004 Ölzustandssensor: Kommunikationsfehler | 0 |
| 0x1C5008 | 0x1C5008 Ölzustandssensor: Permittivitätsfehler | 0 |
| 0x1C5104 | 0x1C5104 Ölzustandssensor, Kommunikation: keine Kommunikation | 0 |
| 0x1D2008 | 0x1D2008 Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2204 | 0x1D2204 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D2301 | 0x1D2301 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | 0x1D2402 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D3901 | 0x1D3901 EGS, Signalüberwachung (Turbinendrehzahl): ungültiger Signalinhalt | 1 |
| 0x1D3A01 | 0x1D3A01 EGS, Signalüberwachung (Drehzahl Abtrieb): ungültiger Signalinhalt | 1 |
| 0x1D3B01 | 0x1D3B01 EGS, Signalüberwachung (Ganginformation): ungültiger Signalinhalt | 1 |
| 0x1D3C01 | 0x1D3C01 EGS, Signalüberwachung (Status Schaltvorgang): ungültiger Signalinhalt | 1 |
| 0x1D3F01 | 0x1D3F01 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit möglicher Schädigung Getriebölkühlerleitungen erkannt | 0 |
| 0x1D4001 | 0x1D4001 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit Schädigung Getriebeöl erkannt | 0 |
| 0x1D4101 | 0x1D4101 Getriebe: Notlauf aktiv | 1 |
| 0x1E0001 | 0x1E0001 Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | 0x1E0002 Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | 0x1E0101 Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | 0x1E0102 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E5008 | 0x1E5008 Drehmomentüberwachung: Plausibilität | 0 |
| 0x1E5108 | 0x1E5108 Motordrehmoment, Anforderung über CAN: nicht erfüllbar | 0 |
| 0x1E5201 | 0x1E5201 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1F0001 | 0x1F0001 DME, interner Fehler, RAM: RAM-Baustein | 0 |
| 0x1F0002 | 0x1F0002 DME, interner Fehler, RAM: Sicherheitsrechner RAM | 0 |
| 0x1F0101 | 0x1F0101 DME, interner Fehler, Prüfsumme: Bootsoftware | 0 |
| 0x1F0102 | 0x1F0102 DME, interner Fehler, Prüfsumme: Applikationssoftware | 0 |
| 0x1F0104 | 0x1F0104 DME, interner Fehler, Prüfsumme: Datenbereich | 0 |
| 0x1F0201 | 0x1F0201 DME, interner Fehler, NVMY-Prüfsumme: NVMY-Überprüfung | 0 |
| 0x1F0304 | 0x1F0304 DME, interner Fehler, Klopfsensorbaustein: SPI-Kommunikation gestört | 0 |
| 0x1F0404 | 0x1F0404 DME, interner Fehler, Mehrfachendstufenbaustein: SPI-Kommunikation gestört | 0 |
| 0x1F0601 | 0x1F0601 Klemme 15N vom CAS, Schaltverzögerung: schaltet zu spät | 0 |
| 0x1F0801 | 0x1F0801 Warm Reset Diagnose: Geplanter Software Reset | 0 |
| 0x1F0802 | 0x1F0802 Warm Reset Diagnose: unerwünschter Software Reset | 0 |
| 0x1F0804 | 0x1F0804 Warm Reset Diagnose: Power On Reset | 0 |
| 0x1F0808 | 0x1F0808 Warm Reset Diagnose: Hardware Reset | 0 |
| 0x1F1601 | 0x1F1601 DME, Nachlauf: unvollständiges Herunterfahren erkannt | 0 |
| 0x1F2004 | 0x1F2004 Kodierung fehlt: Kodierdaten im EEPROM fehlerhaft | 0 |
| 0x1F2008 | 0x1F2008 Kodierung fehlt: keine Kodierung nach Programmierung | 0 |
| 0x1F2104 | 0x1F2104 Falscher Datensatz: CAN Timeout | 0 |
| 0x1F2108 | 0x1F2108 Falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | 0x1F2601 Kodierung: falsche Variante kodiert | 0 |
| 0x1F2602 | 0x1F2602 Kodierung: Variante fehlt | 0 |
| 0x1F2701 | 0x1F2701 Kodierung: Fehler beim Schreiben der Variante | 0 |
| 0x1F2702 | 0x1F2702 Kodierung: Variantenprüfung fehlerhaft | 0 |
| 0x1F2704 | 0x1F2704 Kodierung: Unplausible Variante | 0 |
| 0x1F2801 | 0x1F2801 DME, Software: Programm ungültig | 0 |
| 0x1F2802 | 0x1F2802 DME, Software: Daten ungültig | 0 |
| 0x1F2804 | 0x1F2804 DME, Software: Programm und Daten ungültig | 0 |
| 0x1F3008 | 0x1F3008 DME, interner Fehler, Fahrpedalmodul: Spannungsversorgung Pedalwertgeber 1 | 0 |
| 0x1F3108 | 0x1F3108 DME, interner Fehler, Fahrpedalmodul: Spannungsversorgung Pedalwertgeber 2 | 0 |
| 0x1F4001 | 0x1F4001 Startautomatik, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4002 | 0x1F4002 Startautomatik, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4004 | 0x1F4004 Startautomatik, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F4801 | 0x1F4801 Entlastungsrelais für Zündung und Einspritzung: Spannungsversorgung Einspritzung fehlt | 0 |
| 0x1F4901 | 0x1F4901 Entlastungsrelais für Zündung und Einspritzung: Spannungsversorgung Zündung fehlt | 0 |
| 0x1F4A04 | 0x1F4A04 Entlastungsrelais für Zündung und Einspritzung: nicht abgefallen | 0 |
| 0x1F4A08 | 0x1F4A08 Entlastungsrelais für Zündung und Einspritzung: nicht angezogen  | 0 |
| 0x1F4B08 | 0x1F4B08 Entlastungsrelais für Zündung und Einspritzung, Schaltverzögerung: schaltet zu spät | 0 |
| 0x1F5001 | 0x1F5001 DME, interner Fehler, Innentemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1F5002 | 0x1F5002 DME, interner Fehler, Innentemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x200000 | 0x200000 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung | 0 |
| 0x200001 | 0x200001 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: FGR Überwachung | 0 |
| 0x200002 | 0x200002 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: ACC Überwachung | 0 |
| 0x200004 | 0x200004 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: LDM Überwachung | 0 |
| 0x200108 | 0x200108 DME, interner Fehler, Überwachung Motordrehzahl: Fehlfunktion | 0 |
| 0x200208 | 0x200208 DME, interner Fehler, Überwachung Drehzahlbegrenzung: Fehlfunktion | 0 |
| 0x200308 | 0x200308 DME, interner Fehler, Überwachung Fahrpedalmodul: Fehlfunktion | 0 |
| 0x200400 | 0x200400 DME, interner Fehler, Überwachung Leerlaufregelung | 0 |
| 0x200404 | 0x200404 DME, interner Fehler, Überwachung Leerlaufregelung: Anforderung I-Anteil unplausibel | 0 |
| 0x200408 | 0x200408 DME, interner Fehler, Überwachung Leerlaufregelung: Anforderung PD-Anteil unplausibel | 0 |
| 0x200500 | 0x200500 DME, interner Fehler, Überwachung externe Momentenanforderung: Sendesignale unplausibel | 0 |
| 0x200501 | 0x200501 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung MSR unplausibel | 0 |
| 0x200502 | 0x200502 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung ICM unplausibel | 0 |
| 0x200504 | 0x200504 DME, interner Fehler, Überwachung externe Momentenanforderung: Sendesignale unplausibel | 0 |
| 0x200508 | 0x200508 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung EGS unplausibel | 0 |
| 0x200601 | 0x200601 DME, interner Fehler, Überwachung Sollmoment: maximales Kupplungsmoment unplausibel | 0 |
| 0x200602 | 0x200602 DME, interner Fehler, Überwachung Sollmoment: minimales Kupplungsmoment unplausibel | 0 |
| 0x200604 | 0x200604 DME, interner Fehler, Überwachung Sollmoment: Verlustmoment unplausibel | 0 |
| 0x200708 | 0x200708 DME, interner Fehler, Überwachung Istmoment: Signal unplausibel | 0 |
| 0x200808 | 0x200808 DME, interner Fehler, Überwachung Hardware: Fehlfunktion | 0 |
| 0x200C01 | 0x200C01 DME, interner Fehler: ROM-Fehler | 0 |
| 0x200C02 | 0x200C02 DME, interner Fehler: RAM-Fehler | 0 |
| 0x200C04 | 0x200C04 DME, interner Fehler: Prozessor-Fehler | 0 |
| 0x200C08 | 0x200C08 DME, interner Fehler: Hauptprozessor-Fehler | 0 |
| 0x200D01 | 0x200D01 DME, interner Fehler, Überwachung Sendesignale: Radmomente unplausibel | 0 |
| 0x200D02 | 0x200D02 DME, interner Fehler, Überwachung Sendesignale: Fahrerwunsch unplausibel | 0 |
| 0x200D04 | 0x200D04 DME, interner Fehler, Überwachung Sendesignale: Fahrpedalwert unplausibel | 0 |
| 0x200D08 | 0x200D08 DME, interner Fehler, Überwachung Sendesignale: CAN-Fehler | 0 |
| 0x20A701 | 0x20A701 Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A801 | 0x20A801 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | 0x20A802 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | 0x20A804 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A901 | 0x20A901 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x20A902 | 0x20A902 Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | 0x20A904 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | 0x20A908 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20AA04 | 0x20AA04 Motor-Kühlsystem: Kommunikation mit Kühlmittelpumpe fehlerhaft | 0 |
| 0x20AB08 | 0x20AB08 Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe | 0 |
| 0x20B001 | 0x20B001 Kupplungsschalter, elektrisch: Kurzschluss nach Plus | 0 |
| 0x20B002 | 0x20B002 Kupplungsschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x210201 | 0x210201 Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | 0x210301 Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | 0x210401 Generator, Temperatur: Übertemperatur | 1 |
| 0x210501 | 0x210501 Generator, Plausibilität, Temperatur: Übertemperatur berechnet | 1 |
| 0x210601 | 0x210601 Generator, mechanisch: Fehlfunktion | 0 |
| 0x210701 | 0x210701 Generator, Regler: Typ falsch | 0 |
| 0x210801 | 0x210801 Generator: Typ falsch | 0 |
| 0x210901 | 0x210901 Generator, Kommunikation: keine Kommunikation | 0 |
| 0x213301 | 0x213301 Powermanagement, Überspannung: Überspannung erkannt | 1 |
| 0x213401 | 0x213401 Powermanagement, Unterspannung: Unterspannung erkannt | 1 |
| 0x213501 | 0x213501 Powermanagement, Batterieüberwachung: Tiefentladung | 1 |
| 0x213601 | 0x213601 Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x213701 | 0x213701 Powermanagement: Batterieloser Betrieb | 0 |
| 0x213801 | 0x213801 Batterie, Transport: Batterie auf Transport geschädigt | 0 |
| 0x213901 | 0x213901 Verbraucherreduzierung: aktiv | 1 |
| 0x213A01 | 0x213A01 Batterie, Transport, Überwachung: Batterie auf Transport entladen | 0 |
| 0x213B01 | 0x213B01 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213B08 | 0x213B08 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C00 | 0x213C00 Powermanagement, Batteriezustandserkennung | 0 |
| 0x213C01 | 0x213C01 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x213C08 | 0x213C08 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x215401 | 0x215401 Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215501 | 0x215501 Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215601 | 0x215601 Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215701 | 0x215701 Intelligenter Batteriesensor: Eigendiagnose, Systemfehler | 0 |
| 0x215801 | 0x215801 Intelligenter Batteriesensor: Wake-up-Leitung, elektrisch, Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | 0x215901 Intelligenter Batteriesensor: Kompabilität, Version nicht plausibel | 0 |
| 0x215A01 | 0x215A01 Intelligenter Batteriesensor: Wake-up-Leitung, elektrisch, Leitungsunterbrechung | 0 |
| 0x215B01 | 0x215B01 LIN, Kommunikation (Intelligenter Batteriesensor): Zusatzstatus Framefehler | 0 |
| 0x218001 | 0x218001 Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | 0x218101 Batterieladeeinheit: Leitungsüberwachung fehlerhaft | 0 |
| 0x218201 | 0x218201 Batterieladeeinheit: Zusatzbatterie defekt | 0 |
| 0x218301 | 0x218301 Batterieladeeinheit: Fehler im Trennrelais oder Kabelbaum oder Zusatzbatterie tiefentladen | 0 |
| 0x219001 | 0x219001 Aktives Motorlager, elektrisch: Kurzschluss nach Plus | 0 |
| 0x219002 | 0x219002 Aktives Motorlager, elektrisch: Kurzschluss nach Masse | 0 |
| 0x219004 | 0x219004 Aktives Motorlager, elektrisch: Leitungsunterbrechung | 0 |
| 0x230004 | 0x230004 Kommunikation Einschlafkoordinator: Zeitüberschreitung | 0 |
| 0x230008 | 0x230008 Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231101 | 0x231101 Fehlerspeichereintrag: nur zum Test | 0 |
| 0x231301 | 0x231301 Netzwerkfehler: nur zum Test | 0 |
| 0x231501 | 0x231501 Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | 0x231502 Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231701 | 0x231701 CAN-Kommunikation bei Unterspannung: Kommunikationsfehler zur EGS | 1 |
| 0x231801 | 0x231801 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0x231802 | 0x231802 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231804 | 0x231804 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0x231901 | 0x231901 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0x231902 | 0x231902 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231904 | 0x231904 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0x231F04 | 0x231F04 A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | 0x233004 FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 1 |
| 0x2A0004 | 0x2A0004 Sekundärluftsystem: Sekundärluftmenge zu gering Bank 1 und Bank 2 | 0 |
| 0xCD8408 | 0xCD8408 FlexRay Bus: Controller-Reset durchgeführt | 0 |
| 0xCD840A | 0xCD840A FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8420 | 0xCD8420 FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | 0xCD8486 A-CAN Bus: Kommunikationsfehler | 1 |
| 0xCD8487 | 0xCD8487 FlexRay Controller, Startup: Fehlfunktion | 1 |
| 0xCD8508 | 0xCD8508 FlexRay Bus: Hardware defekt | 1 |
| 0xCD850A | 0xCD850A LIN-Bus, Kommunikation: Bit-Fehler | 0 |
| 0xCD850B | 0xCD850B LIN-Bus, Kommunikation: Unvollständiges Frame | 0 |
| 0xCD850C | 0xCD850C LIN-Bus, Kommunikation: Prüfsumme | 0 |
| 0xCD8601 | 0xCD8601 FlexRay Controller, Startup: Synchronisationsfehler | 1 |
| 0xCD8801 | 0xCD8801 FlexRay Controller, Startup: maximale Startupzeit überschritten | 1 |
| 0xCD8E01 | 0xCD8E01 LIN  Bus, Kommunikationsfehler: Kurzschluss | 0 |
| 0xCD8E02 | 0xCD8E02 LIN  Bus, Kommunikationsfehler: Leitungsunterbrechung | 0 |
| 0xCD8F01 | 0xCD8F01 LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD9001 | 0xCD9001 LIN, Kommunikation (Ladeluft-Kühlmittelpumpe): fehlt | 0 |
| 0xCD9002 | 0xCD9002 LIN, Kommunikation (Ladeluft-Kühlmittelpumpe): fehlerhaft | 0 |
| 0xCD9101 | 0xCD9101 Batterieladeeinheit, LIN Kommunikation: Zeitüberschreitung | 0 |
| 0xCD9102 | 0xCD9102 Batterieladeeinheit, LIN Kommunikation: ungültige Botschaft | 0 |
| 0xCD9201 | 0xCD9201 LIN, Kommunikation (Kühlerjalousie): fehlt | 0 |
| 0xCD9202 | 0xCD9202 LIN, Kommunikation (Kühlerjalousie): ungültiger Botschaftsinhalt | 0 |
| 0xCD9304 | 0xCD9304 Bitserielle Datenschnittstelle, Signal: Kommunikationsfehler | 0 |
| 0xCD9402 | 0xCD9402 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | 0xCD9404 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | 0xCD9408 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9430 | 0xCD9430 CAN-Kommunikation bei Unterspannung: Kommunikationsfehler zur EGS | 1 |
| 0xCD9431 | 0xCD9431 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0xCD9432 | 0xCD9432 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0xCD9433 | 0xCD9433 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0xCD9434 | 0xCD9434 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0xCD9435 | 0xCD9435 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0xCD9436 | 0xCD9436 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0xCD9502 | 0xCD9502 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | 0xCD9504 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCD9508 | 0xCD9508 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | 0xCD9602 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | 0xCD9604 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | 0xCD9608 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | 0xCD9702 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | 0xCD9704 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | 0xCD9708 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9804 | 0xCD9804 FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): fehlt | 1 |
| 0xCD9902 | 0xCD9902 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | 0xCD9904 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | 0xCD9908 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9A02 | 0xCD9A02 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | 0xCD9A04 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | 0xCD9A08 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9B02 | 0xCD9B02 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Aliveprüfung | 1 |
| 0xCD9B04 | 0xCD9B04 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): fehlt | 1 |
| 0xCD9B08 | 0xCD9B08 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Prüfsumme falsch | 1 |
| 0xCD9C02 | 0xCD9C02 FlexRay, Botschaft (Ist Lenkwinkel Fahrer, 59.0.2): Aliveprüfung | 1 |
| 0xCD9C04 | 0xCD9C04 FlexRay, Botschaft (Ist Lenkwinkel Fahrer, 59.0.2): fehlt | 1 |
| 0xCD9C08 | 0xCD9C08 FlexRay, Botschaft (Ist Lenkwinkel Fahrer, 59.0.2): Prüfsumme falsch | 1 |
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
| 0xCDA202 | 0xCDA202 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): Aliveprüfung | 1 |
| 0xCDA204 | 0xCDA204 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA208 | 0xCDA208 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): Prüfsumme falsch | 1 |
| 0xCDA302 | 0xCDA302 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | 0xCDA304 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | 0xCDA308 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA426 | 0xCDA426 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA428 | 0xCDA428 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Aliveprüfung | 1 |
| 0xCDA429 | 0xCDA429 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Prüfsumme falsch | 1 |
| 0xCDA491 | 0xCDA491 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCDA492 | 0xCDA492 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCDA493 | 0xCDA493 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCDA524 | 0xCDA524 FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDA602 | 0xCDA602 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDA604 | 0xCDA604 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDA608 | 0xCDA608 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDA702 | 0xCDA702 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | 0xCDA704 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | 0xCDA708 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA802 | 0xCDA802 FA-CAN, Botschaft (Relativzeit, 0x328): Aliveprüfung | 1 |
| 0xCDA804 | 0xCDA804 FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDA808 | 0xCDA808 FA-CAN, Botschaft (Relativzeit, 0x328): Prüfsumme falsch | 1 |
| 0xCDA902 | 0xCDA902 FA-CAN, Botschaft (Status Anhänger, 0x2E4): Aliveprüfung | 1 |
| 0xCDA904 | 0xCDA904 FA-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt | 1 |
| 0xCDA908 | 0xCDA908 FA-CAN, Botschaft (Status Anhänger, 0x2E4): Prüfsumme falsch | 1 |
| 0xCDAB02 | 0xCDAB02 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): Aliveprüfung | 1 |
| 0xCDAB04 | 0xCDAB04 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAB08 | 0xCDAB08 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): Prüfsumme falsch | 1 |
| 0xCDAC04 | 0xCDAC04 FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD02 | 0xCDAD02 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): Aliveprüfung | 1 |
| 0xCDAD04 | 0xCDAD04 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAD08 | 0xCDAD08 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): Prüfsumme falsch | 1 |
| 0xCDAE02 | 0xCDAE02 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): Aliveprüfung | 1 |
| 0xCDAE04 | 0xCDAE04 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAE08 | 0xCDAE08 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): Prüfsumme falsch | 1 |
| 0xCDAF02 | 0xCDAF02 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): Aliveprüfung | 1 |
| 0xCDAF04 | 0xCDAF04 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDAF08 | 0xCDAF08 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): Prüfsumme falsch | 1 |
| 0xCDB002 | 0xCDB002 FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDB004 | 0xCDB004 FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDB008 | 0xCDB008 FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDB102 | 0xCDB102 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDB104 | 0xCDB104 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDB108 | 0xCDB108 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDB204 | 0xCDB204 FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB302 | 0xCDB302 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Aliveprüfung | 1 |
| 0xCDB304 | 0xCDB304 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB308 | 0xCDB308 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Prüfsumme falsch | 1 |
| 0xCDB402 | 0xCDB402 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): Aliveprüfung | 1 |
| 0xCDB404 | 0xCDB404 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB408 | 0xCDB408 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): Prüfsumme falsch | 1 |
| 0xCDB502 | 0xCDB502 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): Aliveprüfung | 1 |
| 0xCDB504 | 0xCDB504 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB508 | 0xCDB508 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): Prüfsumme falsch | 1 |
| 0xCDB602 | 0xCDB602 FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | 0xCDB604 FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | 0xCDB608 FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB702 | 0xCDB702 FA-CAN, Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): Aliveprüfung | 1 |
| 0xCDB704 | 0xCDB704 FA-CAN, Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): fehlt | 1 |
| 0xCDB708 | 0xCDB708 FA-CAN, Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): Prüfsumme falsch | 1 |
| 0xCDB802 | 0xCDB802 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): Aliveprüfung | 1 |
| 0xCDB804 | 0xCDB804 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB808 | 0xCDB808 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): Prüfsumme falsch | 1 |
| 0xCDB904 | 0xCDB904 FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBB02 | 0xCDBB02 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | 0xCDBB04 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | 0xCDBB08 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBC02 | 0xCDBC02 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): Aliveprüfung | 1 |
| 0xCDBC04 | 0xCDBC04 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): fehlt | 1 |
| 0xCDBC08 | 0xCDBC08 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): Prüfsumme falsch | 1 |
| 0xCDBD02 | 0xCDBD02 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): Aliveprüfung | 1 |
| 0xCDBD04 | 0xCDBD04 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): fehlt | 1 |
| 0xCDBD08 | 0xCDBD08 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): Prüfsumme falsch | 1 |
| 0xCDBE02 | 0xCDBE02 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | 0xCDBE04 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBE08 | 0xCDBE08 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Prüfsumme falsch | 1 |
| 0xCDBF04 | 0xCDBF04 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDC004 | 0xCDC004 A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | 0xCDC102 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | 0xCDC104 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | 0xCDC108 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | 0xCDC202 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | 0xCDC204 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC208 | 0xCDC208 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC302 | 0xCDC302 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Aliveprüfung | 1 |
| 0xCDC304 | 0xCDC304 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDC308 | 0xCDC308 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Prüfsumme falsch | 1 |
| 0xCDCA08 | 0xCDCA08 Getriebesteuerung: Fehlerverwaltung Getriebe | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4203 | Massenstrom vom HFM | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4205 | Saugrohrdruck 1 / Ladedruck 1 | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4302 | Wasserpumpe Leistung über BSD | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4303 | Wasserpumpe Elektronik Temperatur | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x4304 | Wasserpumpe Strom | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x4305 | Wasserpumpe Drehzahl Ist | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4306 | Wasserpumpe Drehzahl Soll | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | Wasserpumpe Betriebsart | 0-n | - | 0xFF | _CNV_S_13__CNV_S_13__856 | 1 | 1 | 0 |
| 0x4400 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x441E | Kurzzeitmittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x441F | Vormittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4421 | Orientierungswert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4422 | Vormittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4423 | Kurzzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4424 | Langzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4500 | VVT-Excenter Istwert | Grad | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4501 | VVT-Excenter Sollwert | ° | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4502 | Mechanischer Verstellbereich VVT aus Lernroutine | Grad | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4503 | Sollwert für Lageregler | ° | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4504 | Sollwert für Lageregler vom Tester | ° | - | unsigned char | - | 0,703125 | 1 | 0,0 |
| 0x4505 | Sollwert Einlassspreizung | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4506 | Nockenwellenposition Einlass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4507 | Nockenwellenposition Auslass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4508 | Istwert Einlassspreizung | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4509 | Istwert Auslassspreizung | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x450A | Normspreizung Auslass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x450B | Normspreizung Einlass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x4600 | aktueller Drosselklappenwinkel | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4601 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,026881719008088112 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4610 | aktuelle Position Disaklappen | % | - | unsigned integer | - | 0,003051757114008069 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD II Protokoll | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominale Generatorspannung | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x461B | Statusbits für Ladezustand in Carrierbyte St_degn1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461C | bisheriger Wasserverlust | g/Ah | - | unsigned long | - | 2,7777777855675367E-9 | 1 | 0,0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4704 | Lambda Sollwert Bank1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4705 | Lambda Sollwert Bank2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4800 | Kupplungsschalter Status | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Kupplungsschalter vorhanden | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Sporttaster aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Status Klima ein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4804 | Sekundärluft Pumpe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Startrelais über CAN aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4806 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4807 | Motor Drehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4808 | Leerlauf Solldrehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4809 | Status LL | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Kilometerstand Auflösung 1 km | km | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | Pedalwert Fahrerwunsch in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x482A | Status Sekundärluftventil | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x482C | Drosselklappe Sollwert Bank 1 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4830 | Zähler Gradientenüberwachungsdiagnose beendet, Bank 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4831 | Zähler Gradientenüberwachungsdiagnose beendet, Bank 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4832 | Veränderlicher Durchschnittswert der Gradientenüberwachung, Bank 1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4833 | Veränderlicher Durchschnittswert der Gradientenüberwachung, Bank 2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4834 | Gepeicherter Maximalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4835 | Gepeicherter Maximalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4836 | Gespeicherter Minimalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4837 | Gespeicherter Minimalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4838 | Quadrierte Standardabweichung der Gradientenüberwachung, Bank 1 | (V/s)² | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| 0x4839 | Quadrierte Standardabweichung der Gradientenüberwachung, Bank 2 | (V/s)² | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| 0x4880 | maximaler Zündwinkel Quotient im Leerlauf | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4881 | maximaler Zündwinkel Quotient bei Teillast | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A00 | Versorgung FWG 1 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x4A01 | Versorgung FWG 2 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x4A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A06 | Diagnosebedingungen Bank2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A07 | Diagnosebedingungen Bank 2 Ende | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A08 | Spannung Ansauglufttemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A0D | Spannung Sekundärluft | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x4A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x4A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A1C | sekundäre Luftstrommassenmessung | kg/h | - | unsigned integer | - | 0,015625 | 1 | 0,0 |
| 0x4A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4A23 | Sollwert Öldruck | hPa | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4A24 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4A25 | Istwert Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A26 | Saugrohrdruck gefiltert | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A2B | Temperatur vor Drosselklappe | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A2C | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4A2D | absoluter Saugrohrdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4A30 | Laufunruhe Zylinder 1 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A31 | Laufunruhe Zylinder 2 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A32 | Laufunruhe Zylinder 3 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A33 | Laufunruhe Zylinder 4 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A34 | Laufunruhe Zylinder 5 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A35 | Laufunruhe Zylinder 6 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A36 | Status Klopfen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A37 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A38 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A39 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3A | Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3B | Spannung Klopfwerte Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3C | Spannung Klopfwerte Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3D | Klopfsignal Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3E | Klopfsignal Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3F | Klopfsignal Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A40 | Klopfsignal Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A41 | Klopfsignal Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A42 | Klopfsignal Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A49 | Zündwinkel Zylinder 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| 0x4A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A4C | Motorlager Typ | 0/1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A4F | VVT-Entlastungsrelais EIN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A59 | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5B | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5C | Aktive Fehlerrückmeldung DISA-Klappe 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A5D | Schalthäufigkeitszähler DISA-Klappe 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4A5E | Aktive Fehlerrückmeldung DISA-Klappe 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A5F | Schalthäufigkeitszähler DISA-Klappe 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4A60 | Bremslichtschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A61 | Bremslichttestschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A62 | Öldruckschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A63 | E-Box-Lüfter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A64 | Motorlager weiche Dämpfung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A65 | Abgasklappe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A66 | DMTL Pumpe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A67 | DMTL Ventil Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A68 | DMTL Heizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A69 | MIL Lampe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6C | Verbrauchskorrekturfaktor | - | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4A6D | Status Taste FGR | 0-n | - | 0xFF | _CNV_S_8_RANGE_STAT_17 | 1 | 1 | 0 |
| 0x4A6E | Status für irreversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4A6F | Status für reversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4A71 | DISA1 PWM (große/obere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x4A72 | DISA2 PWM (kleine/untere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x4A73 | Kurbelgehäuseentlüftungsheizung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A75 | Sekundärluft Ventil | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A76 | Adaption Öffnungspunkt Tankentlüftungsventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A77 | Tankentlüftungsventil TEV PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A7A | VANOS PWM Wert Einlass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A7B | VANOS PWM Wert Auslass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A7C | Lüfterfehler mit Funktionseinschränkungen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A7D | Schwerwiegender Lüfterfehler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A7F | Phase-Shift-Adaption Lambdasonde Bank 1 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x4A80 | Phase-Shift-Adaption Lambdasonde Bank 2 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x4A81 | Integrator Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A82 | Integrator Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A83 | Adaption Offset Lambda Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A84 | Adaption Offset Lambda Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A85 | Adaption Multiplikation Lambda Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A86 | Adaption Multiplikation Lambda Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A87 | Adaptionswert Trimregelung Bank 1 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x4A88 | Adaptionswert Trimregelung Bank 2 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x4A89 | multiplikative Gemischadaption hohe Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8A | multiplikative Gemischadaption hohe Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8B | multiplikative Gemischadaption niedrige Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8C | multiplikative Gemischadaption niedrige Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8D | additive Gemischadaption Leerlauf Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A8E | additive Gemischadaption Leerlauf Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A8F | Adaption Schubabgleich Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A90 | Adaption Schubabgleich Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A91 | Katalysatordiagnosewert Bank1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x4A92 | Katalysatordiagnosewert Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x4A94 | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x4A95 | Adaptionswert Nockenwelle Auslass Bank 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x4A96 | Adaptionswert Nockenwelle Einlass Bank 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x4A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AA1 | Angefordertes PWM-Signal, E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4AA2 | ECF Relais aktivieren | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AAA | Tastverhältnis Öldruck-Regelventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AB2 | Periodendauer Luftmasse 1 | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x4AB5 | SAP  Bewertung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AB6 | Rohwert Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4AB8 | Spannung Saugrohrdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4AB9 | Spannung Sportschalter | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABA | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4ABC | Luftmasse | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AC2 | Reset Adresse | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AC6 | berechnete Einspritzzeit, Zylinder 1 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4AC7 | berechnete Einspritzzeit, Zylinder 2 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4AC8 | berechnete Einspritzzeit, Zylinder 3 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4AC9 | berechnete Einspritzzeit, Zylinder 4 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4ACA | berechnete Einspritzzeit, Zylinder 5 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4ACB | berechnete Einspritzzeit, Zylinder 6 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4ACC | Sollposition obere Luftklappe in Verstellschritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4ACD | Istposition obere Luftklappe in Verstellschritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AD0 | Fehlerstatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD1 | Diagnosestatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD2 | Status untere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD3 | Varianteninformation obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD5 | DME-Temperaturstatistik, Zähler 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD6 | DME-Temperaturstatistik, Zähler 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD7 | DME-Temperaturstatistik, Zähler 3 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD8 | DME-Temperaturstatistik, Zähler 4 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD9 | DME-Temperaturstatistik, Zähler 5 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ADA | DME-Temperaturstatistik, Zähler 6 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ADB | DME-Temperaturstatistik, Zähler 7 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ADC | DME-Temperaturstatistik, Zähler 8 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AE2 | Resetart des letzten Resets | 0-n | - | 0xFF | _CNV_S_19_ECOP_RANGE_626 | 1 | 1 | 0 |
| 0x4AE3 | Hintegrundinformationen zum letzten gültigen Reset | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AE4 | Zusätzliche Resetinformationen zur Resetursache | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AE5 | Zähler Reset Safe | m | - | unsigned long | - | 100,0 | 1 | 0,0 |
| 0x4AE6 | Gesamtlaufzeit Reset Safe | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x4AE7 | CPU Last beim zurücksetzen Reset Safe | % | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| 0x4AE8 | Geschwindigkeit bei maximaler CPU Last | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AEA | Anzahl von atypischen Warm-Resets seit letzter Power-Up-Phase (BSW) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AEB | Temperatur < 98 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEC | 98 Grad Celsius <= Temperatur <= 112 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AED | 113 Grad Celsius <= Temperatur <= 120 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEE | 121 Grad Celsius <= Temperatur <= 125 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEF | Temperatur > 125 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF0 | Temperatur < 80 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF1 | 80 Grad Celsius <= Temperatur <= 110 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF2 | 110 Grad Celsius <= Temperatur <= 135 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF3 | 135 Grad Celsius <= Temperatur <= 150 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF4 | Temperatur > 150 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF5 | Temperatur < 80 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF6 | 80 Grad Celsius <= Temperatur <= 109 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF7 | 110 Grad Celsius <= Temperatur <= 124 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF8 | 125 Grad Celsius <= Temperatur <= 129 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF9 | Temperatur > 129 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFA | Temperatur < 3 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFB | 3 Grad Celsius <= Temperatur <= 19 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFC | 20 Grad Celsius <= Temperatur <= 29 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFD | 30 Grad Celsius <= Temperatur <= 39 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFE | Temperatur > 39 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_6_LACO_RANGE_537 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_6_LACO_RANGE_537 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Kühlmitteltemperatur OBD | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5806 | Lambda Integrator Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5808 | Lambda Integrator Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x580B | Saugrohrdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580C | Drehzahl | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | °CRK | - | unsigned char | - | 0,5 | 1 | -64,0 |
| 0x580F | Ansauglufttemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5810 | Luftdurchsatz OBD | g/s | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5812 | Luftmasse gemessen | kg/h | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5818 | Luftmasse gerechnet | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x5819 | Drehzahl OBD Byte | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x581A | Position Einspritzung CAM VVTI | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581B | Anfangspunkt für VVTI | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581C | Nockenwelle Auslass | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581D | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581E | Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5825 | Abstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5826 | Drosselklappe 2 Sollwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5827 | Lambdasondenheizung vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5828 | Lambdasondenheizung vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5829 | Lambdasondenheizung hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582A | Lambdasondenheizung hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582B | Drehmomenteingriff über CAN | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582C | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582D | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582E | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x582F | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x5830 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| 0x5831 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_123 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| 0x5835 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_493 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_493 | 1 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_290 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x583D | Resettyp | 0-n | - | 0xFF | _CNV_S_19_ECOP_RANGE_626 | 1 | 1 | 0 |
| 0x583E | Motordrehzahl bei Reset | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x583F | Drosselklappe Sollwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5840 | CPU Last bei Reset | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Versorgung Fahrwertgeber 1 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1,0 | 1 | -48,0 |
| 0x5845 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5846 | Spannung Pedalwertgeber 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5847 | Spannung Pedalwertgeber 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5848 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5849 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584A | Spannung Kl. 15 Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584B | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584C | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584D | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x584E | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5851 | Spannung Ansauglufttemperatur, Sensor | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 |
| 0x5854 | Versorgung Fahrwertgeber 2 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5855 | Mittelwert Bank 1 | % | - | signed char | - | 0,390625 | 1 | 0,0 |
| 0x5856 | Mittelwert Bank 2 | % | - | signed char | - | 0,390625 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5858 | Drosselklappe aktueller Wert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585B | DMTL Strom Diagnoseende | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585E | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x585F | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5862 | Öldruck Sollwert | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5863 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5865 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Kilometerstand | km | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | Batteriespannung von IBS gemessen | V | - | unsigned char | - | 0,06400000303983688 | 1 | 6,0 |
| 0x586B | Zeit mit Ruhestrom 80 - 200 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit mit Ruhestrom 200 - 1000 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586D | Zähler Erkennung schlechte Strasse | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586E | Zeit mit Ruhestrom größer 1000 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Ist Öldruck | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5872 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5874 | Spannung Strommessung DMTL | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5875 | Sollwert Motormoment | Nm | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5876 | Mittelwert der sekundären Luftmasse am SAE | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x5877 | SAE Wertebereich | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x587B | maximaler Stromerwartungswert der Drossel | A^2 | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__119 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_503 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_503 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Ansteuerung untere Luftklappe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5884 | Rückgelesener Erregergrenzstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5890 | Gemessene Spannung vom DCDC Wandler gegen Masse | V | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5892 | Startpunkt der Positionssteuerung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_496 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_496 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5898 | Generator Sollspannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5899 | DISA position | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x589A | gewählter momentaner Grad an Jitter | ° | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x589B | Spannungsoffset Signalpfad CJ120 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589C | Spannungsoffset Signalpfad CJ120 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589D | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589E | Relay Status | 0-n | - | 0xFF | _CNV_S_3_STATE_RLY__343 | 1 | 1 | 0 |
| 0x589F | Motorgeschwindigkeit | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58A0 | Batterietemperatur | °C | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x58A1 | Entladung während Ruhestromverletzung | Ah | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 |
| 0x58A2 | Wasserpumpe Stromaufnahme | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x58A3 | relative Wasserpumpenspannung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58A4 | Status Generator | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58A5 | Generatorauslastung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58A6 | Generatorspannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit in min | min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58A8 | Motorabstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58A9 | Resetzähler Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Fehlercode Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AB | Abweichung DK-Potentiometer 1 und Modellwert | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58AC | Abweichung DK-Potentiometer 2 und Modellwert | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AE | Periodendauer Luftmasse | us | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BA | Statusbyte 3 Sendesignale Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BB | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BD | Luftmassenmodellwert für Siko | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BE | Getriebetemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x58BF | Statusbyte vom Error Memory Management | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 7812,21826171875 | 1 | 0,0 |
| 0x58C2 | Statusbyte MFF-Monitoring | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C3 | Statusbyte ISC-Monitoring | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C4 | Statusbyte CRU-Monitoring | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58C5 | Drehzahl Überwachung (resetsicher) | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58C6 | Status Einspritzventile (resetsicher) | ° | - | unsigned char | - | 0,703125 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | -4096,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58C9 | I-Anteil LL passive Rampe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CD | Entladung während Ruhestromverletzung | Ah | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CF | Motormoment Sollwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D0 | Motormoment Istwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D2 | Sollposition obere Luftklappe in Grad | Grad | - | unsigned char | - | 256,0 | 1 | -95,0 |
| 0x58D3 | Istposition obere Luftklappe in Grad | Grad | - | unsigned char | - | 256,0 | 1 | -95,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D5 | Ansauglufttemperatur im Laderstrang | °C | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D7 | momentaner Motorstrom | A | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x58D8 | erwartete DC Motortemperatur | °C | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58D9 | Fehlercode Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | Resetzähler Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DF | Spannung Sportschalter | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_7__CNV_S_7_D_807 | 1 | 1 | 0 |
| 0x58E5 | Lastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E6 | Nulllastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E7 | Spannung Pedalwertgeber 1 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E8 | Spannung Pedalwertgeber 2 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E9 | Wasserpumpe Spannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Wasserpumpe Drehzahl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | Wasserpumpe Drehzahl Soll-Ist-Differenz | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Wasserpumpe Temperatur Elektronik | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Moment der elektrischen Wasserpumpe | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EE | relative CWP Leistung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58EF | Temperatur Getriebeöltemperaturmodell | °C | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x58F0 | Raildruck Bank 2 | hPa | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| 0x58F1 | DME - Losnummer | 0-n | - | 0xFF | _CNV_S_13_RANGE_STAT_604 | 1 | 1 | 0 |
| 0x58F3 | Kraftstoffdruck vor Mengensteuerventil | hPa | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| 0x58F4 | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F6 | Eingangssignal Rückführregler 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F7 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 30,516477584838867 | 1 | 0,0 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,0610351525247097 | 1 | 7,843136878244668E-8 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,0610351525247097 | 1 | 7,843136878244668E-8 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FC | Katheizen aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58FD | Statusbyte 2 Sendesignale Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000000 | 000000 FehlerOrt nicht bedatet | 0 |
| 0x021200 | 0x021200 Transportmodus: aktiv | 0 |
| 0x100001 | 0x100001 Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | 0x100101 Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | 0x100201 Drosselklappe, schwergängig: zu langsam | 0 |
| 0x100304 | 0x100304 DME, interner Fehler, Ansteuerung Drosselklappe: Fehlfunktion | 0 |
| 0x100A04 | 0x100A04 Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x100C08 | 0x100C08 Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zur Luftmasse | 0 |
| 0x100E08 | 0x100E08 Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zur Luftmasse | 0 |
| 0x101001 | 0x101001 Drosselklappe, Drosselklappenpotenziometer 1: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x101002 | 0x101002 Drosselklappe: Drosselklappenpotenziometer 1, Kurzschluss nach Masse | 0 |
| 0x101201 | 0x101201 Drosselklappe: Drosselklappenpotenziometer 2, Kurzschluss nach Plus | 0 |
| 0x101202 | 0x101202 Drosselklappe, Drosselklappenpotenziometer 2: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x101401 | 0x101401 Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 1 |
| 0x101402 | 0x101402 Drosselklappe: Notluftposition nicht adaptiert | 0 |
| 0x101404 | 0x101404 Drosselklappe: Federtest und Prüfung Notluftposition nicht durchgeführt | 0 |
| 0x101408 | 0x101408 Drosselklappe: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101901 | 0x101901 Drosselklappe, Startprüfung: Federtest | 0 |
| 0x101902 | 0x101902 Drosselklappe, Startprüfung: Prüfung Notluftposition | 0 |
| 0x101A01 | 0x101A01 Drosselklappe, kontinuierliche Adaption: unterer Anschlag nicht adaptiert | 0 |
| 0x101C08 | 0x101C08 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x102001 | 0x102001 Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | 0x102002 Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102201 | 0x102201 Luftmassenmesser: Sammelfehler | 0 |
| 0x102204 | 0x102204 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102801 | 0x102801 Luftmassenmesser, Messbereich: Signal außerhalb gültigem Bereich | 0 |
| 0x102A01 | 0x102A01 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A02 | 0x102A02 Luftmassenmesser, Signal: außerhalb gültigem Bereich | 0 |
| 0x103001 | 0x103001 Fahrpedalmodul, Pedalwertgeber 1: Kurzschluss nach Plus | 0 |
| 0x103002 | 0x103002 Fahrpedalmodul, Pedalwertgeber 1: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103004 | 0x103004 Fahrpedalmodul, Pedalwertgeber 1: Arbeitsbereich, Spannung zu hoch | 0 |
| 0x103008 | 0x103008 Fahrpedalmodul, Pedalwertgeber 1: Arbeitsbereich, Spannung zu niedrig | 0 |
| 0x103101 | 0x103101 Fahrpedalmodul, Pedalwertgeber 2: Kurzschluss nach Plus | 0 |
| 0x103102 | 0x103102 Fahrpedalmodul, Pedalwertgeber 2: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103104 | 0x103104 Fahrpedalmodul, Pedalwertgeber 2: Arbeitsbereich, Spannung zu hoch | 0 |
| 0x103108 | 0x103108 Fahrpedalmodul, Pedalwertgeber 2: Arbeitsbereich, Spannung zu niedrig | 0 |
| 0x103208 | 0x103208 Fahrpedalmodul, Pedalwertgeber: Doppelfehler | 0 |
| 0x103308 | 0x103308 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x104101 | 0x104101 Drosselklappenwinkel - Differenzdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x104102 | 0x104102 Drosselklappenwinkel - Differenzdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x104208 | 0x104208 Differenzdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck unplausibel | 0 |
| 0x104701 | 0x104701 Differenzdrucksensor, Saugrohr: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x104702 | 0x104702 Differenzdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x105001 | 0x105001 Umgebungsdrucksensor: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x105002 | 0x105002 Umgebungsdrucksensor: Kurzschluss nach Masse | 0 |
| 0x105101 | 0x105101 Umgebungsdrucksensor, Plausibilität: Maximaldruck unplausibel | 0 |
| 0x105102 | 0x105102 Umgebungsdrucksensor, Plausibilität: Minimaldruck unplausibel | 0 |
| 0x106001 | 0x106001 Variable Sauganlage, Stellmotor: Ansteuerung, Kurzschluss nach Plus | 0 |
| 0x106002 | 0x106002 Variable Sauganlage, Stellmotor: Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x106004 | 0x106004 Variable Sauganlage, Stellmotor: Ansteuerung, Leitungsunterbrechung | 0 |
| 0x106101 | 0x106101 Variable Sauganlage, Stellmotor 2: Ansteuerung, Kurzschluss nach Plus | 0 |
| 0x106102 | 0x106102 Variable Sauganlage, Stellmotor 2: Ansteuerung, Kurzschluss nach Masse | 0 |
| 0x106104 | 0x106104 Variable Sauganlage, Stellmotor 2: Ansteuerung, Leitungsunterbrechung | 0 |
| 0x106201 | 0x106201 Variable Sauganlage, Plausibilität: DISA 2 Schalter defekt | 0 |
| 0x106202 | 0x106202 Variable Sauganlage, Plausibilität: DISA 1 Schalter defekt | 0 |
| 0x106308 | 0x106308 Variable Sauganlage, Eigendiagnose: mechanischer Fehler oder Stellmotor defekt | 0 |
| 0x106408 | 0x106408 Variable Sauganlage 2, Eigendiagnose: mechanischer Fehler oder Stellmotor defekt | 0 |
| 0x107101 | 0x107101 Drosselklappe, Adaptionswerte: fehlen, Neuadaption erforderlich | 1 |
| 0x107201 | 0x107201 Drosselklappe, Startprüfung: Federtest | 0 |
| 0x107202 | 0x107202 Drosselklappe, Startprüfung: Prüfung Notluftposition | 0 |
| 0x107B01 | 0x107B01 DME, interner Fehler: Überwachung Luftpfad, Signal unplausibel | 0 |
| 0x107B02 | 0x107B02 DME, interner Fehler: Überwachung Luftpfad, Drosselklappenstellung unplausibel | 0 |
| 0x108001 | 0x108001 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | 0x108002 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108201 | 0x108201 Ansauglufttemperatur: Plausibilität, Temperatur zu hoch | 0 |
| 0x108202 | 0x108202 Ansauglufttemperatur: Plausibilität, Temperatur zu niedrig | 0 |
| 0x108208 | 0x108208 Ansauglufttemperatur: Signal, festliegend | 0 |
| 0x109001 | 0x109001 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x109002 | 0x109002 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109108 | 0x109108 Kühlmitteltemperatursensor, Plausibilität: unplausibel bezüglich Lambdaregelung | 0 |
| 0x109208 | 0x109208 Kühlmitteltemperatursensor, Plausibilität: Signal hängt | 0 |
| 0x109308 | 0x109308 Kühlmitteltemperatursensor, Plausibilität: Signaländerung zu schnell | 0 |
| 0x109408 | 0x109408 Kühlmitteltemperatursensor, Plausibilität: Signal hängt im oberen Messbereich | 0 |
| 0x10B008 | 0x10B008 Außentemperatursensor, Plausibilität: Signal unplausibel | 0 |
| 0x10B101 | 0x10B101 Außentemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x10B102 | 0x10B102 Außentemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10B104 | 0x10B104 Außentemperatursensor, elektrisch: Signalfehler | 1 |
| 0x10E001 | 0x10E001 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 1: Gemisch zu mager | 0 |
| 0x10E002 | 0x10E002 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 1: Gemisch zu fett | 0 |
| 0x10E101 | 0x10E101 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 2: Gemisch zu mager | 0 |
| 0x10E102 | 0x10E102 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 2: Gemisch zu fett | 0 |
| 0x10E201 | 0x10E201 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 3: Gemisch zu mager | 0 |
| 0x10E202 | 0x10E202 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 3: Gemisch zu fett | 0 |
| 0x10E301 | 0x10E301 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 4: Gemisch zu mager | 0 |
| 0x10E302 | 0x10E302 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 4: Gemisch zu fett | 0 |
| 0x10E401 | 0x10E401 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 5: Gemisch zu mager | 0 |
| 0x10E402 | 0x10E402 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 5: Gemisch zu fett | 0 |
| 0x10E501 | 0x10E501 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 6: Gemisch zu mager | 0 |
| 0x10E502 | 0x10E502 Zylinderindividuelle Gemischüberwachung über Lambda, Zylinder 6: Gemisch zu fett | 0 |
| 0x10F101 | 0x10F101 Zylindergleichstellung über Lambda, Zylinder 1: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F102 | 0x10F102 Zylindergleichstellung über Lambda, Zylinder 1: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F201 | 0x10F201 Zylindergleichstellung über Lambda, Zylinder 2: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F202 | 0x10F202 Zylindergleichstellung über Lambda, Zylinder 2: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F301 | 0x10F301 Zylindergleichstellung über Lambda, Zylinder 3: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F302 | 0x10F302 Zylindergleichstellung über Lambda, Zylinder 3: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F401 | 0x10F401 Zylindergleichstellung über Lambda, Zylinder 4: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F402 | 0x10F402 Zylindergleichstellung über Lambda, Zylinder 4: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F501 | 0x10F501 Zylindergleichstellung über Lambda, Zylinder 5: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F502 | 0x10F502 Zylindergleichstellung über Lambda, Zylinder 5: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x10F601 | 0x10F601 Zylindergleichstellung über Lambda, Zylinder 6: Zylinderselektive Lambdaregelung, untere Grenze erreicht | 0 |
| 0x10F602 | 0x10F602 Zylindergleichstellung über Lambda, Zylinder 6: Zylinderselektive Lambdaregelung, obere Grenze erreicht | 0 |
| 0x110008 | 0x110008 Zylindereinspritzabschaltung: Tankfüllstand zu gering | 0 |
| 0x111201 | 0x111201 Einspritzventil Zylinder 1, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111202 | 0x111202 Einspritzventil Zylinder 1, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111204 | 0x111204 Einspritzventil Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111301 | 0x111301 Einspritzventil Zylinder 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111302 | 0x111302 Einspritzventil Zylinder 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111304 | 0x111304 Einspritzventil Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111401 | 0x111401 Einspritzventil Zylinder 3, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111402 | 0x111402 Einspritzventil Zylinder 3, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111404 | 0x111404 Einspritzventil Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111501 | 0x111501 Einspritzventil Zylinder 4, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111502 | 0x111502 Einspritzventil Zylinder 4, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111504 | 0x111504 Einspritzventil Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111601 | 0x111601 Einspritzventil Zylinder 5, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111602 | 0x111602 Einspritzventil Zylinder 5, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111604 | 0x111604 Einspritzventil Zylinder 5, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111701 | 0x111701 Einspritzventil Zylinder 6, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x111702 | 0x111702 Einspritzventil Zylinder 6, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x111704 | 0x111704 Einspritzventil Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x118001 | 0x118001 Gemischregelung: Gemisch zu mager | 0 |
| 0x118002 | 0x118002 Gemischregelung: Gemisch zu fett | 0 |
| 0x118101 | 0x118101 Gemischregelung 2: Gemisch zu mager | 0 |
| 0x118102 | 0x118102 Gemischregelung 2: Gemisch zu fett | 0 |
| 0x118401 | 0x118401 Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | 0x118402 Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118501 | 0x118501 Gemischregelung 2: Gemisch zu mager, große Abweichung | 0 |
| 0x118502 | 0x118502 Gemischregelung 2: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | 0x118601 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | 0x118602 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118701 | 0x118701 Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118702 | 0x118702 Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118801 | 0x118801 Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118802 | 0x118802 Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118900 | 0x118900 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator | 0 |
| 0x118901 | 0x118901 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118902 | 0x118902 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x11B004 | 0x11B004 Kraftstoffpumpe, Funktion: Notabschaltung | 1 |
| 0x11B101 | 0x11B101 Elektrische Kraftstoffpumpe: Drehzahl zu hoch | 1 |
| 0x11B102 | 0x11B102 Elektrische Kraftstoffpumpe: Drehzahl zu niedrig | 1 |
| 0x11B104 | 0x11B104 Elektrische Kraftstoffpumpe: Notlauf | 1 |
| 0x11B108 | 0x11B108 Kraftstoffpumpe: Übertemperatur | 1 |
| 0x128008 | 0x128008 Lambdasonden vor Katalysator, Montage: vertauscht | 0 |
| 0x128101 | 0x128101 Lambdasonde vor Katalysator, Systemprüfung: Signal konstant mager | 0 |
| 0x128201 | 0x128201 Lambdasonde vor Katalysator 2, Systemprüfung: Signal konstant mager | 0 |
| 0x128301 | 0x128301 Lambdasonde vor Katalysator, Systemprüfung: Signal konstant fett | 0 |
| 0x128401 | 0x128401 Lambdasonde vor Katalysator 2, Systemprüfung: Signal konstant fett | 0 |
| 0x128501 | 0x128501 Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128601 | 0x128601 Lambdasonde vor Katalysator 2, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128901 | 0x128901 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128902 | 0x128902 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128A01 | 0x128A01 Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128A02 | 0x128A02 Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | 0x128B01 Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128C01 | 0x128C01 Lambdasonde vor Katalysator 2: Falschluft erkannt | 0 |
| 0x128E01 | 0x128E01 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x128E02 | 0x128E02 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128E04 | 0x128E04 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128E08 | 0x128E08 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x128F01 | 0x128F01 Lambdasonde vor Katalysator 2, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x128F02 | 0x128F02 Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128F04 | 0x128F04 Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128F08 | 0x128F08 Lambdasonde vor Katalysator 2, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x129001 | 0x129001 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | 0x129002 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129101 | 0x129101 Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129102 | 0x129102 Lambdasonde vor Katalysator 2, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | 0x129201 DME, interner Fehler: Regler für Lambdasonde vor Katalysator defekt | 0 |
| 0x129202 | 0x129202 DME, interner Fehler: Regler für Lambdasonde vor Katalysator defekt | 0 |
| 0x129301 | 0x129301 DME, interner Fehler, Lambdasonde vor Katalysator 2: Initialisierungsfehler | 0 |
| 0x129302 | 0x129302 DME, interner Fehler, Lambdasonde vor Katalysator 2: Kommunikationsfehler | 0 |
| 0x12A008 | 0x12A008 Lambdasonden nach Katalysator, Montage: vertauscht | 0 |
| 0x12A100 | 0x12A100 Lambdasonde nach Katalysator, Systemprüfung | 0 |
| 0x12A101 | 0x12A101 Lambdasonde nach Katalysator, Systemprüfung: Signal konstant fett | 0 |
| 0x12A102 | 0x12A102 Lambdasonde nach Katalysator, Systemprüfung: Signal konstant Mager | 0 |
| 0x12A200 | 0x12A200 Lambdasonde nach Katalysator 2, Systemprüfung | 0 |
| 0x12A201 | 0x12A201 Lambdasonde nach Katalysator 2, Systemprüfung: Signal konstant Fett | 0 |
| 0x12A202 | 0x12A202 Lambdasonde nach Katalysator 2, Systemprüfung: Signal konstant Mager | 0 |
| 0x12A308 | 0x12A308 Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A408 | 0x12A408 Lambdasonde nach Katalysator 2, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | 0x12A701 Lambdasonde nach Katalysator, Signal: Kurzschluss nach Plus | 0 |
| 0x12A801 | 0x12A801 Lambdasonde nach Katalysator 2, Signal: Kurzschluss nach Plus | 0 |
| 0x12A902 | 0x12A902 Lambdasonde nach Katalysator, Signal: Kurzschluss nach Masse | 0 |
| 0x12AA02 | 0x12AA02 Lambdasonde nach Katalysator 2, Signal: Kurzschluss nach Masse | 0 |
| 0x12AB04 | 0x12AB04 Lambdasonde nach Katalysator, Signal: Leitungsunterbrechung | 0 |
| 0x12AC04 | 0x12AC04 Lambdasonde nach Katalysator 2, Signal: Leitungsunterbrechung | 0 |
| 0x12AF08 | 0x12AF08 Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B008 | 0x12B008 Lambdasonde nach Katalysator 2, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B101 | 0x12B101 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | 0x12B102 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | 0x12B104 Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B200 | 0x12B200 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung | 0 |
| 0x12B201 | 0x12B201 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B202 | 0x12B202 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B204 | 0x12B204 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | 0x12B301 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | 0x12B302 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | 0x12B304 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B401 | 0x12B401 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B402 | 0x12B402 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B404 | 0x12B404 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B501 | 0x12B501 Lambdasondentemperaturmessung vor Katalysator: Betriebstemperatur nicht erreicht | 0 |
| 0x12B502 | 0x12B502 Lambdasondentemperaturmessung vor Katalysator: Betriebstemperatur im Warmlauf nicht erreicht | 0 |
| 0x12B504 | 0x12B504 Lambdasondentemperaturmessung vor Katalysator: Messung im Steuergerät fehlgeschlagen | 0 |
| 0x12B601 | 0x12B601 Lambdasondentemperaturmessung vor Katalysator 2: Betriebstemperatur nicht erreicht | 0 |
| 0x12B602 | 0x12B602 Lambdasondentemperaturmessung vor Katalysator 2: Betriebstemperatur im Warmlauf nicht erreicht | 0 |
| 0x12B604 | 0x12B604 Lambdasondentemperaturmessung vor Katalysator 2: Messung im Steuergerät fehlgeschlagen | 0 |
| 0x12B701 | 0x12B701 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12B801 | 0x12B801 Lambdasondenbeheizung nach Katalysator 2, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BE08 | 0x12BE08 Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x12BF08 | 0x12BF08 Lambdasonde nach Katalysator 2, Dynamik, von Mager nach Fett: langsame Reaktion | 0 |
| 0x130001 | 0x130001 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130002 | 0x130002 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130004 | 0x130004 VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130108 | 0x130108 VANOS, Einlass: Regelfehler, Position nicht erreicht | 0 |
| 0x130201 | 0x130201 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130202 | 0x130202 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130204 | 0x130204 VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130308 | 0x130308 VANOS, Auslass: Regelfehler, Position nicht erreicht | 0 |
| 0x130801 | 0x130801 Einlassnockenwelle, Positionsüberwachung: Zahnsprung | 0 |
| 0x130901 | 0x130901 Auslassnockenwelle, Positionsüberwachung: Zahnsprung | 0 |
| 0x130C01 | 0x130C01 Kurbelwelle - Einlassnockenwelle, Referenz: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x130D01 | 0x130D01 Kurbelwelle - Auslassnockenwelle, Referenz: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x130E01 | 0x130E01 Kurbelwelle - Einlassnockenwelle, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x130F01 | 0x130F01 Kurbelwelle - Auslassnockenwelle, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x131401 | 0x131401 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131408 | 0x131408 VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | 0x131501 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x131508 | 0x131508 VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x133108 | 0x133108 Valvetronic-Relais, Ansteuerung: elektrischer Fehler | 0 |
| 0x133201 | 0x133201 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | 0x133202 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133204 | 0x133204 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss der Motorleitungen | 0 |
| 0x133304 | 0x133304 DME, interner Fehler, Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133401 | 0x133401 Valvetronic, thermischer Überlastschutz: Abschaltung System | 0 |
| 0x133501 | 0x133501 Valvetronic-Stellmotor: Überstrom erkannt | 0 |
| 0x133701 | 0x133701 Valvetronic, Verstellbereich: gelernter Bereich ausserhalb Toleranzen | 0 |
| 0x133702 | 0x133702 Valvetronic, Verstellbereich: unterer Anschlag nicht gelernt | 0 |
| 0x133704 | 0x133704 Valvetronic, Verstellbereich: keine Anschläge gelernt | 0 |
| 0x133801 | 0x133801 Valvetronic, Abgleichspannung: Minimum (L1) unterschritten | 0 |
| 0x133802 | 0x133802 Valvetronic, Abgleichspannung: Maximum (L1) überschritten | 0 |
| 0x133804 | 0x133804 Valvetronic, Abgleichspannung: Minimum (L2) unterschritten | 0 |
| 0x133808 | 0x133808 Valvetronic, Abgleichspannung: Maximum (L2) überschritten | 0 |
| 0x133900 | 0x133900 DME, interner Fehler, Valvetronic | 0 |
| 0x133901 | 0x133901 DME, interner Fehler, Valvetronic: Überstrom erkannt | 0 |
| 0x133902 | 0x133902 DME, interner Fehler, Valvetronic: Unterspannung erkannt | 0 |
| 0x133A08 | 0x133A08 DME, interner Fehler, Valvetronic: Schreib-/Lesefehler im EEPROM | 0 |
| 0x133B04 | 0x133B04 Valvetronic System: keine Verstellung möglich | 0 |
| 0x133B08 | 0x133B08 Valvetronic System: keine Verstellung möglich | 0 |
| 0x133C01 | 0x133C01 Valvetronic, thermischer Überlastschutz: Warnschwelle Strom überschritten | 0 |
| 0x133C02 | 0x133C02 Valvetronic, thermischer Überlastschutz: Warnschwelle Stellmotor überschritten | 0 |
| 0x133C04 | 0x133C04 Valvetronic, thermischer Überlastschutz: Warnschwelle Endstufe überschritten | 0 |
| 0x133F01 | 0x133F01 Valvetronic, Adaption: oberer Anschlag nicht gelernt | 0 |
| 0x133F02 | 0x133F02 Valvetronic, Adaption: unterer Anschlag nicht gelernt | 0 |
| 0x134002 | 0x134002 Valvetronic, Exzenterwellensensor, Führung: Fehlfunktion | 0 |
| 0x134101 | 0x134101 Valvetronic, Exzenterwellensensor, Führung: Magnetrad fehlt | 0 |
| 0x134202 | 0x134202 Valvetronic, Exzenterwellensensor, Referenz: Fehlfunktion | 0 |
| 0x134301 | 0x134301 Valvetronic, Exzenterwellensensor, Referenz: Magnetrad fehlt | 0 |
| 0x134408 | 0x134408 Valvetronic, Exzenterwellensensoren: Sammelfehler | 0 |
| 0x134501 | 0x134501 DME, interner Fehler, Valvetronic: Transistortemperatur H1 unplausibel | 0 |
| 0x134502 | 0x134502 DME, interner Fehler, Valvetronic: Transistortemperatur H2 unplausibel | 0 |
| 0x134504 | 0x134504 DME, interner Fehler, Valvetronic: Transistortemperatur L1 unplausibel | 0 |
| 0x134508 | 0x134508 DME, interner Fehler, Valvetronic: Transistortemperatur L2 unplausibel | 0 |
| 0x134601 | 0x134601 Valvetronic, Exzenterwellensensoren, elektrisch: Kurzschluss nach Plus | 0 |
| 0x134602 | 0x134602 Valvetronic, Exzenterwellensensoren, elektrisch: Kurzschluss nach Masse | 0 |
| 0x134702 | 0x134702 Valvetronic, Leistungsbegrenzung: Valvetronic öffnet nicht | 0 |
| 0x134704 | 0x134704 Valvetronic, Leistungsbegrenzung: Exzenterwinkel fährt nicht auf Vollhubposition | 0 |
| 0x134808 | 0x134808 Valvetronic System: Mechanik schwergängig | 0 |
| 0x134908 | 0x134908 Valvetronic-Stellmotor: Leistungsverlust | 0 |
| 0x134A02 | 0x134A02 Valvetronic-Stellmotor: Überlastung, Überlast | 0 |
| 0x134B00 | 0x134B00 Valvetronic-Stellmotor, Versorgungsspannung | 0 |
| 0x134B01 | 0x134B01 Valvetronic-Stellmotor, Spannungsversorgung: Überspannung | 0 |
| 0x134B02 | 0x134B02 Valvetronic-Stellmotor, Versorgungsspannung: Kurzschluss nach Masse | 0 |
| 0x134C04 | 0x134C04 Valvetronic, Exzenterwellensensor, Führung: Prüfsumme falsch | 0 |
| 0x134D04 | 0x134D04 Valvetronic, Exzenterwellensensor, Referenz: Prüfsumme falsch | 0 |
| 0x134E08 | 0x134E08 Exzenterwellensensor, Plausibilität: Sensorsignale zueinander unplausibel | 0 |
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
| 0x140001 | 0x140001 Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | 0x140002 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | 0x140004 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140008 | 0x140008 Verbrennungsaussetzer, mehrere Zylinder: Summenfehler | 0 |
| 0x140100 | 0x140100 Verbrennungsaussetzer, Zylinder 1 | 0 |
| 0x140101 | 0x140101 Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | 0x140102 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | 0x140104 Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140200 | 0x140200 Verbrennungsaussetzer, Zylinder 2 | 0 |
| 0x140201 | 0x140201 Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | 0x140202 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | 0x140204 Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140300 | 0x140300 Verbrennungsaussetzer, Zylinder 3 | 0 |
| 0x140301 | 0x140301 Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | 0x140302 Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | 0x140304 Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140400 | 0x140400 Verbrennungsaussetzer, Zylinder 4 | 0 |
| 0x140401 | 0x140401 Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | 0x140402 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | 0x140404 Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140500 | 0x140500 Verbrennungsaussetzer, Zylinder 5 | 0 |
| 0x140501 | 0x140501 Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | 0x140502 Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | 0x140504 Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140600 | 0x140600 Verbrennungsaussetzer, Zylinder 6 | 0 |
| 0x140601 | 0x140601 Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | 0x140602 Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | 0x140604 Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x142002 | 0x142002 Verbrennungsaussetzer: Tankfüllstand zu gering | 0 |
| 0x143002 | 0x143002 Laufunruhemessung: Messfehler Kurbelwellensensor | 0 |
| 0x150102 | 0x150102 Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | 0x150202 Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | 0x150302 Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | 0x150402 Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150502 | 0x150502 Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | 0x150602 Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x151000 | 0x151000 Zündwinkelverstellung im Leerlauf, Kaltstart | 0 |
| 0x151001 | 0x151001 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151100 | 0x151100 Zündwinkelverstellung in Teillast, Kaltstart | 0 |
| 0x151101 | 0x151101 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152000 | 0x152000 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152004 | 0x152004 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152008 | 0x152008 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x154001 | 0x154001 Zündspule Zylinder 1: Zündkreisüberwachung | 0 |
| 0x154101 | 0x154101 Zündspule Zylinder 2: Zündkreisüberwachung | 0 |
| 0x154201 | 0x154201 Zündspule Zylinder 3: Zündkreisüberwachung | 0 |
| 0x154301 | 0x154301 Zündspule Zylinder 4: Zündkreisüberwachung | 0 |
| 0x154401 | 0x154401 Zündspule Zylinder 5: Zündkreisüberwachung | 0 |
| 0x154501 | 0x154501 Zündspule Zylinder 6: Zündkreisüberwachung | 0 |
| 0x160001 | 0x160001 Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160002 | 0x160002 Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160101 | 0x160101 Kurbelwellensensor, Synchronisation: Fehlfunktion | 0 |
| 0x160201 | 0x160201 Kurbelwellensensorsignal, Zahnfehler: Zähnezahl falsch | 0 |
| 0x160301 | 0x160301 Kurbelwellensensorsignal, Lückenfehler: Zahnzeit unplausibel | 0 |
| 0x160402 | 0x160402 Kurbelwellensensor, Segmentadaption: Grenzwert überschritten | 0 |
| 0x162001 | 0x162001 Einlassnockenwellensensor, Synchronisation: Fehlfunktion | 0 |
| 0x162101 | 0x162101 Einlassnockenwellensensor, elektrisch: Signal fehlt | 0 |
| 0x162201 | 0x162201 Einlassnockenwellensensor, Funktion: Segmentzeitfehler | 0 |
| 0x163101 | 0x163101 Auslassnockenwellensensor, Synchronisation: Fehlfunktion | 0 |
| 0x163201 | 0x163201 Auslassnockenwellensensor, elektrisch: Signal fehlt | 0 |
| 0x163301 | 0x163301 Auslassnockenwellensensor, Funktion: Segmentzeitfehler | 0 |
| 0x168001 | 0x168001 Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | 0x168002 Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168008 | 0x168008 Klopfsensor 1, Signal: unplausibel | 0 |
| 0x168101 | 0x168101 Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | 0x168102 Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168108 | 0x168108 Klopfsensor 2, Signal: unplausibel | 0 |
| 0x170301 | 0x170301 Sekundärluftpumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x170302 | 0x170302 Sekundärluftpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x170304 | 0x170304 Sekundärluftpumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x180000 | 0x180000 Katalysator | 0 |
| 0x180001 | 0x180001 Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180002 | 0x180002 Katalysator: defekt | 0 |
| 0x180008 | 0x180008 Katalysator: Wirkungsgrad unterhalb Grenzwert (nicht validiert) | 0 |
| 0x180100 | 0x180100 Katalysator 2 | 0 |
| 0x180101 | 0x180101 Katalysator 2: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180102 | 0x180102 Katalysator 2: defekt | 0 |
| 0x180108 | 0x180108 Katalysator 2: Wirkungsgrad unterhalb Grenzwert (nicht validiert) | 0 |
| 0x190001 | 0x190001 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190002 | 0x190002 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190004 | 0x190004 DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190201 | 0x190201 Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1,0 mm | 0 |
| 0x190302 | 0x190302 Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
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
| 0x190802 | 0x190802 DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung | 0 |
| 0x190904 | 0x190904 DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung | 0 |
| 0x190A08 | 0x190A08 DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert | 0 |
| 0x190F04 | 0x190F04 Tankentlüftungssystem: Fehlfunktion Bandende | 0 |
| 0x190F08 | 0x190F08 Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x191001 | 0x191001 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | 0x191002 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | 0x191004 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x192001 | 0x192001 Tankdeckel: nicht korrekt geschlossen | 0 |
| 0x193000 | 0x193000 Tankfüllstandssensor, links, Signal | 1 |
| 0x193001 | 0x193001 Tankfüllstandssensor, links, Signal: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x193002 | 0x193002 Tankfüllstandssensor, links, Signal: Kurzschluss nach Masse | 1 |
| 0x193008 | 0x193008 Tankfüllstandssensor, links, Signal: CAN Wert unplausibel | 1 |
| 0x193100 | 0x193100 Tankfüllstandssensor, rechts, Signal | 1 |
| 0x193101 | 0x193101 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x193102 | 0x193102 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Masse | 1 |
| 0x193108 | 0x193108 Tankfüllstandssensor, rechts, Signal: CAN Wert unplausibel | 1 |
| 0x193208 | 0x193208 Tankfüllstand, Plausibilität: unplausibel zu Verbrauchswert | 0 |
| 0x1A2001 | 0x1A2001 Elektrolüfter, Ansteuerungsleitung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | 0x1A2002 Elektrolüfter, Ansteuerungsleitung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | 0x1A2004 Elektrolüfter, Ansteuerungsleitung: Leitungsunterbrechung | 0 |
| 0x1A2108 | 0x1A2108  Elektrolüfter, Eigendiagnose Stufe 1: leichter Lüfterfehler | 0 |
| 0x1A2308 | 0x1A2308 Elektrolüfter, Eigendiagnose Stufe 2: Lüfterfehler mit potentieller Gefährdung für den Lüfter | 0 |
| 0x1A2408 | 0x1A2408 Elektrolüfter, Eigendiagnose Stufe 3: Lüfterfehler mit Motorfunktionseinschränkung | 0 |
| 0x1A2508 | 0x1A2508 Elektrolüfter, Eigendiagnose Stufe 4: schwerer Lüfterfehler | 0 |
| 0x1A2601 | 0x1A2601 Abschaltrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | 0x1A2602 Abschaltrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | 0x1A2604 Abschaltrelais Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2708 | 0x1A2708 Abschaltrelais Elektrolüfter, Plausibilität: Fehler beim Ein- bzw. Ausschalten des Relais | 0 |
| 0x1B0004 | 0x1B0004 Fahrzeuggeschwindigkeit, Signal: fehlt | 0 |
| 0x1B0108 | 0x1B0108 Fahrzeuggeschwindigkeit, Plausibilität: Signal unplausibel | 0 |
| 0x1B0204 | 0x1B0204 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit unplausibel oder CAN-Bus Kommunikation gestört | 1 |
| 0x1B0301 | 0x1B0301 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu niedrig bei niedrigem Lastzustand | 1 |
| 0x1B0401 | 0x1B0401 Fahrzeuggeschwindigkeit, Signaländerung: unplausibel | 1 |
| 0x1B0500 | 0x1B0500 Fahrzeuggeschwindigkeit, Signal | 1 |
| 0x1B0501 | 0x1B0501 Fahrzeuggeschwindigkeit, Signal: festliegend auf Null | 1 |
| 0x1B0601 | 0x1B0601 Fahrzeuggeschwindigkeit, Signal: festliegend | 1 |
| 0x1B0701 | 0x1B0701 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 1 |
| 0x1B0B01 | 0x1B0B01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 1 |
| 0x1B0C01 | 0x1B0C01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 1 |
| 0x1B0D01 | 0x1B0D01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 1 |
| 0x1B0E01 | 0x1B0E01 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 1 |
| 0x1B2002 | 0x1B2002 EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | 0x1B2008 EWS Manipulationsschutz: Antwort unplausibel | 0 |
| 0x1B2101 | 0x1B2101 Schnittstelle EWS-DME: Hardwarefehler | 0 |
| 0x1B2102 | 0x1B2102 Schnittstelle EWS-DME: Framefehler | 0 |
| 0x1B2104 | 0x1B2104 Schnittstelle EWS-DME: Zeitüberschreitung | 0 |
| 0x1B2108 | 0x1B2108 Schnittstelle EWS-DME: Prüfsummenfehler | 0 |
| 0x1B2201 | 0x1B2201 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | 0x1B2202 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2204 | 0x1B2204 DME, interner Fehler, EWS-Daten: Startwert zerstört/ 2- aus 3-Auswahl fehlgeschlagen | 0 |
| 0x1B2208 | 0x1B2208 DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2302 | 0x1B2302 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 1 |
| 0x1B2304 | 0x1B2304 FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 1 |
| 0x1B2801 | 0x1B2801 DME-Sperrung: EWS nicht freigeschalten | 0 |
| 0x1B5001 | 0x1B5001 Überwachung Klemme 15: Wake-up-Leitung Kurzschluss nach Plus | 0 |
| 0x1B5002 | 0x1B5002 Überwachung Klemme 15: Wake-up-Leitung Kurzschluss nach Masse | 0 |
| 0x1B5004 | 0x1B5004 Überwachung Klemme 15: Botschaft vom CAS fehlt oder fehlerhaft | 0 |
| 0x1B5008 | 0x1B5008 Überwachung Klemme 15: Signal Wake-up-Leitung unplausibel zur Botschaft CAS Klemmenstatus | 0 |
| 0x1B5101 | 0x1B5101 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | 0x1B5102 Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5501 | 0x1B5501 Klemme 15N: keine Spannung | 0 |
| 0x1B5601 | 0x1B5601 Klemme 15N_1: keine Spannung | 0 |
| 0x1B5701 | 0x1B5701 Klemme 15N_2: keine Spannung | 0 |
| 0x1B5801 | 0x1B5801 Klemme 15N_3: keine Spannung | 0 |
| 0x1B8108 | 0x1B8108 EAC Sensor, Kodierung: falsch | 0 |
| 0x1B8201 | 0x1B8201 EAC Sensor: elektrisch, Kurzschluss nach Plus | 0 |
| 0x1B8204 | 0x1B8204 EAC Sensor: elektrisch, Kurzschluss nach Masse | 0 |
| 0x1B8208 | 0x1B8208 EAC Sensor: Arbeitsbereich, Temperatur unplausibel | 0 |
| 0x1B9004 | 0x1B9004 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Zeitüberschreitung oder Ungültigkeitswert | 1 |
| 0x1B9008 | 0x1B9008 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf/Nachlauf | 0 |
| 0x1B9104 | 0x1B9104 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf/Nachlauf | 0 |
| 0x1B9208 | 0x1B9208 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Wake-up | 0 |
| 0x1B9308 | 0x1B9308 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Motorlauf | 0 |
| 0x1B9408 | 0x1B9408 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi unplausibel im Nachlauf | 0 |
| 0x1B9508 | 0x1B9508 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | 0x1B9608 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1BAF08 | 0x1BAF08 Fahrpedalmodul - Bremspedal, Vergleich: Pedalwerte zueinander unplausibel | 0 |
| 0x1BD401 | 0x1BD401 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD402 | 0x1BD402 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD404 | 0x1BD404 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD408 | 0x1BD408 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion | 0 |
| 0x1BD501 | 0x1BD501 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD502 | 0x1BD502 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD504 | 0x1BD504 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD508 | 0x1BD508 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion | 0 |
| 0x1BD601 | 0x1BD601 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD602 | 0x1BD602 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD604 | 0x1BD604 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD608 | 0x1BD608 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion | 0 |
| 0x1BD701 | 0x1BD701 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1BD702 | 0x1BD702 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1BD704 | 0x1BD704 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Leitungsunterbrechung | 0 |
| 0x1BD708 | 0x1BD708 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion | 0 |
| 0x1C0001 | 0x1C0001 Motoröldruckregelung, Plausibilität: Druckschwankungen | 0 |
| 0x1C0101 | 0x1C0101 Motoröldruckregelung, Plausibilität, statisch: Druck zu hoch | 0 |
| 0x1C0102 | 0x1C0102 Motoröldruckregelung, Plausibilität, statisch: Druck zu niedrig | 0 |
| 0x1C0201 | 0x1C0201 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | 0x1C0202 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | 0x1C0204 Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0300 | 0x1C0300 Motoröldruckregelventil: klemmt | 0 |
| 0x1C0301 | 0x1C0301 Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | 0x1C0302 Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | 0x1C0401 Motoröldruckregelung: instabil | 0 |
| 0x1C2001 | 0x1C2001 Motorölpumpe: Druck zu hoch | 0 |
| 0x1C2002 | 0x1C2002 Motorölpumpe: Druck zu niedrig | 0 |
| 0x1C3001 | 0x1C3001 Motoröldrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1C3002 | 0x1C3002 Motoröldrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1C3101 | 0x1C3101 Motoröldrucksensor: Plausibilität, Druck vor Motorstart zu hoch | 0 |
| 0x1C3102 | 0x1C3102 Motoröldrucksensor: Plausibilität, Druck vor Motorstart zu niedrig | 0 |
| 0x1C3104 | 0x1C3104 Motoröldrucksensor: Plausibilität, Leitungsunterbrechung Masse | 0 |
| 0x1C3108 | 0x1C3108 Motoröldrucksensor: Signal, festliegend | 0 |
| 0x1C3204 | 0x1C3204 Motoröldruckschalter: Leitungsunterbrechung oder Schalter klemmt | 0 |
| 0x1C3302 | 0x1C3302 Motorölpumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C4002 | 0x1C4002 Thermischer Ölniveausensor: Niveau zu niedrig | 0 |
| 0x1C4102 | 0x1C4102 Motorölniveau: zu niedrig | 0 |
| 0x1C5001 | 0x1C5001 Ölzustandssensor: Temperaturmessung | 0 |
| 0x1C5002 | 0x1C5002 Ölzustandssensor: Niveaumessung | 0 |
| 0x1C5004 | 0x1C5004 Ölzustandssensor: Kommunikationsfehler | 0 |
| 0x1C5008 | 0x1C5008 Ölzustandssensor: Permittivitätsfehler | 0 |
| 0x1C5104 | 0x1C5104 Ölzustandssensor, Kommunikation: keine Kommunikation | 0 |
| 0x1D2008 | 0x1D2008 Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2204 | 0x1D2204 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D2301 | 0x1D2301 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | 0x1D2402 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D3901 | 0x1D3901 EGS, Signalüberwachung (Turbinendrehzahl): ungültiger Signalinhalt | 1 |
| 0x1D3A01 | 0x1D3A01 EGS, Signalüberwachung (Drehzahl Abtrieb): ungültiger Signalinhalt | 1 |
| 0x1D3B01 | 0x1D3B01 EGS, Signalüberwachung (Ganginformation): ungültiger Signalinhalt | 1 |
| 0x1D3C01 | 0x1D3C01 EGS, Signalüberwachung (Status Schaltvorgang): ungültiger Signalinhalt | 1 |
| 0x1D3F01 | 0x1D3F01 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit möglicher Schädigung Getriebölkühlerleitungen erkannt | 0 |
| 0x1D4001 | 0x1D4001 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit Schädigung Getriebeöl erkannt | 0 |
| 0x1D4101 | 0x1D4101 Getriebe: Notlauf aktiv | 1 |
| 0x1E0001 | 0x1E0001 Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | 0x1E0002 Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | 0x1E0101 Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | 0x1E0102 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E5008 | 0x1E5008 Drehmomentüberwachung: Plausibilität | 0 |
| 0x1E5108 | 0x1E5108 Motordrehmoment, Anforderung über CAN: nicht erfüllbar | 0 |
| 0x1E5201 | 0x1E5201 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1F0001 | 0x1F0001 DME, interner Fehler, RAM: RAM-Baustein | 0 |
| 0x1F0002 | 0x1F0002 DME, interner Fehler, RAM: Sicherheitsrechner RAM | 0 |
| 0x1F0101 | 0x1F0101 DME, interner Fehler, Prüfsumme: Bootsoftware | 0 |
| 0x1F0102 | 0x1F0102 DME, interner Fehler, Prüfsumme: Applikationssoftware | 0 |
| 0x1F0104 | 0x1F0104 DME, interner Fehler, Prüfsumme: Datenbereich | 0 |
| 0x1F0201 | 0x1F0201 DME, interner Fehler, NVMY-Prüfsumme: NVMY-Überprüfung | 0 |
| 0x1F0304 | 0x1F0304 DME, interner Fehler, Klopfsensorbaustein: SPI-Kommunikation gestört | 0 |
| 0x1F0404 | 0x1F0404 DME, interner Fehler, Mehrfachendstufenbaustein: SPI-Kommunikation gestört | 0 |
| 0x1F0601 | 0x1F0601 Klemme 15N vom CAS, Schaltverzögerung: schaltet zu spät | 0 |
| 0x1F0801 | 0x1F0801 Warm Reset Diagnose: Geplanter Software Reset | 0 |
| 0x1F0802 | 0x1F0802 Warm Reset Diagnose: unerwünschter Software Reset | 0 |
| 0x1F0804 | 0x1F0804 Warm Reset Diagnose: Power On Reset | 0 |
| 0x1F0808 | 0x1F0808 Warm Reset Diagnose: Hardware Reset | 0 |
| 0x1F1601 | 0x1F1601 DME, Nachlauf: unvollständiges Herunterfahren erkannt | 0 |
| 0x1F2004 | 0x1F2004 Kodierung fehlt: Kodierdaten im EEPROM fehlerhaft | 0 |
| 0x1F2008 | 0x1F2008 Kodierung fehlt: keine Kodierung nach Programmierung | 0 |
| 0x1F2104 | 0x1F2104 Falscher Datensatz: CAN Timeout | 0 |
| 0x1F2108 | 0x1F2108 Falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | 0x1F2601 Kodierung: falsche Variante kodiert | 0 |
| 0x1F2602 | 0x1F2602 Kodierung: Variante fehlt | 0 |
| 0x1F2701 | 0x1F2701 Kodierung: Fehler beim Schreiben der Variante | 0 |
| 0x1F2702 | 0x1F2702 Kodierung: Variantenprüfung fehlerhaft | 0 |
| 0x1F2704 | 0x1F2704 Kodierung: Unplausible Variante | 0 |
| 0x1F2801 | 0x1F2801 DME, Software: Programm ungültig | 0 |
| 0x1F2802 | 0x1F2802 DME, Software: Daten ungültig | 0 |
| 0x1F2804 | 0x1F2804 DME, Software: Programm und Daten ungültig | 0 |
| 0x1F3008 | 0x1F3008 DME, interner Fehler, Fahrpedalmodul: Spannungsversorgung Pedalwertgeber 1 | 0 |
| 0x1F3108 | 0x1F3108 DME, interner Fehler, Fahrpedalmodul: Spannungsversorgung Pedalwertgeber 2 | 0 |
| 0x1F4001 | 0x1F4001 Startautomatik, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4002 | 0x1F4002 Startautomatik, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4004 | 0x1F4004 Startautomatik, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F4801 | 0x1F4801 Entlastungsrelais für Zündung und Einspritzung: Spannungsversorgung Einspritzung fehlt | 0 |
| 0x1F4901 | 0x1F4901 Entlastungsrelais für Zündung und Einspritzung: Spannungsversorgung Zündung fehlt | 0 |
| 0x1F4A04 | 0x1F4A04 Entlastungsrelais für Zündung und Einspritzung: nicht abgefallen | 0 |
| 0x1F4A08 | 0x1F4A08 Entlastungsrelais für Zündung und Einspritzung: nicht angezogen  | 0 |
| 0x1F4B08 | 0x1F4B08 Entlastungsrelais für Zündung und Einspritzung, Schaltverzögerung: schaltet zu spät | 0 |
| 0x1F5001 | 0x1F5001 DME, interner Fehler, Innentemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1F5002 | 0x1F5002 DME, interner Fehler, Innentemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x200000 | 0x200000 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung | 0 |
| 0x200001 | 0x200001 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: FGR Überwachung | 0 |
| 0x200002 | 0x200002 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: ACC Überwachung | 0 |
| 0x200004 | 0x200004 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: LDM Überwachung | 0 |
| 0x200108 | 0x200108 DME, interner Fehler, Überwachung Motordrehzahl: Fehlfunktion | 0 |
| 0x200208 | 0x200208 DME, interner Fehler, Überwachung Drehzahlbegrenzung: Fehlfunktion | 0 |
| 0x200308 | 0x200308 DME, interner Fehler, Überwachung Fahrpedalmodul: Fehlfunktion | 0 |
| 0x200400 | 0x200400 DME, interner Fehler, Überwachung Leerlaufregelung | 0 |
| 0x200404 | 0x200404 DME, interner Fehler, Überwachung Leerlaufregelung: Anforderung I-Anteil unplausibel | 0 |
| 0x200408 | 0x200408 DME, interner Fehler, Überwachung Leerlaufregelung: Anforderung PD-Anteil unplausibel | 0 |
| 0x200500 | 0x200500 DME, interner Fehler, Überwachung externe Momentenanforderung: Sendesignale unplausibel | 0 |
| 0x200501 | 0x200501 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung MSR unplausibel | 0 |
| 0x200502 | 0x200502 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung ICM unplausibel | 0 |
| 0x200504 | 0x200504 DME, interner Fehler, Überwachung externe Momentenanforderung: Sendesignale unplausibel | 0 |
| 0x200508 | 0x200508 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung EGS unplausibel | 0 |
| 0x200601 | 0x200601 DME, interner Fehler, Überwachung Sollmoment: maximales Kupplungsmoment unplausibel | 0 |
| 0x200602 | 0x200602 DME, interner Fehler, Überwachung Sollmoment: minimales Kupplungsmoment unplausibel | 0 |
| 0x200604 | 0x200604 DME, interner Fehler, Überwachung Sollmoment: Verlustmoment unplausibel | 0 |
| 0x200708 | 0x200708 DME, interner Fehler, Überwachung Istmoment: Signal unplausibel | 0 |
| 0x200808 | 0x200808 DME, interner Fehler, Überwachung Hardware: Fehlfunktion | 0 |
| 0x200C01 | 0x200C01 DME, interner Fehler: ROM-Fehler | 0 |
| 0x200C02 | 0x200C02 DME, interner Fehler: RAM-Fehler | 0 |
| 0x200C04 | 0x200C04 DME, interner Fehler: Prozessor-Fehler | 0 |
| 0x200C08 | 0x200C08 DME, interner Fehler: Hauptprozessor-Fehler | 0 |
| 0x200D01 | 0x200D01 DME, interner Fehler, Überwachung Sendesignale: Radmomente unplausibel | 0 |
| 0x200D02 | 0x200D02 DME, interner Fehler, Überwachung Sendesignale: Fahrerwunsch unplausibel | 0 |
| 0x200D04 | 0x200D04 DME, interner Fehler, Überwachung Sendesignale: Fahrpedalwert unplausibel | 0 |
| 0x200D08 | 0x200D08 DME, interner Fehler, Überwachung Sendesignale: CAN-Fehler | 0 |
| 0x20A701 | 0x20A701 Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A801 | 0x20A801 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | 0x20A802 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | 0x20A804 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A901 | 0x20A901 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x20A902 | 0x20A902 Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | 0x20A904 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | 0x20A908 Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20AA04 | 0x20AA04 Motor-Kühlsystem: Kommunikation mit Kühlmittelpumpe fehlerhaft | 0 |
| 0x20AB08 | 0x20AB08 Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe | 0 |
| 0x20B001 | 0x20B001 Kupplungsschalter, elektrisch: Kurzschluss nach Plus | 0 |
| 0x20B002 | 0x20B002 Kupplungsschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x210201 | 0x210201 Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | 0x210301 Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | 0x210401 Generator, Temperatur: Übertemperatur | 1 |
| 0x210501 | 0x210501 Generator, Plausibilität, Temperatur: Übertemperatur berechnet | 1 |
| 0x210601 | 0x210601 Generator, mechanisch: Fehlfunktion | 0 |
| 0x210701 | 0x210701 Generator, Regler: Typ falsch | 0 |
| 0x210801 | 0x210801 Generator: Typ falsch | 0 |
| 0x210901 | 0x210901 Generator, Kommunikation: keine Kommunikation | 0 |
| 0x213301 | 0x213301 Powermanagement, Überspannung: Überspannung erkannt | 1 |
| 0x213401 | 0x213401 Powermanagement, Unterspannung: Unterspannung erkannt | 1 |
| 0x213501 | 0x213501 Powermanagement, Batterieüberwachung: Tiefentladung | 1 |
| 0x213601 | 0x213601 Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x213701 | 0x213701 Powermanagement: Batterieloser Betrieb | 0 |
| 0x213801 | 0x213801 Batterie, Transport: Batterie auf Transport geschädigt | 0 |
| 0x213901 | 0x213901 Verbraucherreduzierung: aktiv | 1 |
| 0x213A01 | 0x213A01 Batterie, Transport, Überwachung: Batterie auf Transport entladen | 0 |
| 0x213B01 | 0x213B01 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213B08 | 0x213B08 Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C00 | 0x213C00 Powermanagement, Batteriezustandserkennung | 0 |
| 0x213C01 | 0x213C01 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x213C08 | 0x213C08 Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x215401 | 0x215401 Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215501 | 0x215501 Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215601 | 0x215601 Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215701 | 0x215701 Intelligenter Batteriesensor: Eigendiagnose, Systemfehler | 0 |
| 0x215801 | 0x215801 Intelligenter Batteriesensor: Wake-up-Leitung, elektrisch, Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | 0x215901 Intelligenter Batteriesensor: Kompabilität, Version nicht plausibel | 0 |
| 0x215A01 | 0x215A01 Intelligenter Batteriesensor: Wake-up-Leitung, elektrisch, Leitungsunterbrechung | 0 |
| 0x215B01 | 0x215B01 LIN, Kommunikation (Intelligenter Batteriesensor): Zusatzstatus Framefehler | 0 |
| 0x218001 | 0x218001 Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | 0x218101 Batterieladeeinheit: Leitungsüberwachung fehlerhaft | 0 |
| 0x218201 | 0x218201 Batterieladeeinheit: Zusatzbatterie defekt | 0 |
| 0x218301 | 0x218301 Batterieladeeinheit: Fehler im Trennrelais oder Kabelbaum oder Zusatzbatterie tiefentladen | 0 |
| 0x219001 | 0x219001 Aktives Motorlager, elektrisch: Kurzschluss nach Plus | 0 |
| 0x219002 | 0x219002 Aktives Motorlager, elektrisch: Kurzschluss nach Masse | 0 |
| 0x219004 | 0x219004 Aktives Motorlager, elektrisch: Leitungsunterbrechung | 0 |
| 0x230004 | 0x230004 Kommunikation Einschlafkoordinator: Zeitüberschreitung | 0 |
| 0x230008 | 0x230008 Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231101 | 0x231101 Fehlerspeichereintrag: nur zum Test | 0 |
| 0x231301 | 0x231301 Netzwerkfehler: nur zum Test | 0 |
| 0x231501 | 0x231501 Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | 0x231502 Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231701 | 0x231701 CAN-Kommunikation bei Unterspannung: Kommunikationsfehler zur EGS | 1 |
| 0x231801 | 0x231801 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0x231802 | 0x231802 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231804 | 0x231804 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0x231901 | 0x231901 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0x231902 | 0x231902 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231904 | 0x231904 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0x231F04 | 0x231F04 A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | 0x233004 FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 1 |
| 0x2A0004 | 0x2A0004 Sekundärluftsystem: Sekundärluftmenge zu gering Bank 1 und Bank 2 | 0 |
| 0xCD8408 | 0xCD8408 FlexRay Bus: Controller-Reset durchgeführt | 0 |
| 0xCD840A | 0xCD840A FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8420 | 0xCD8420 FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | 0xCD8486 A-CAN Bus: Kommunikationsfehler | 1 |
| 0xCD8487 | 0xCD8487 FlexRay Controller, Startup: Fehlfunktion | 1 |
| 0xCD8508 | 0xCD8508 FlexRay Bus: Hardware defekt | 1 |
| 0xCD850A | 0xCD850A LIN-Bus, Kommunikation: Bit-Fehler | 0 |
| 0xCD850B | 0xCD850B LIN-Bus, Kommunikation: Unvollständiges Frame | 0 |
| 0xCD850C | 0xCD850C LIN-Bus, Kommunikation: Prüfsumme | 0 |
| 0xCD8601 | 0xCD8601 FlexRay Controller, Startup: Synchronisationsfehler | 1 |
| 0xCD8801 | 0xCD8801 FlexRay Controller, Startup: maximale Startupzeit überschritten | 1 |
| 0xCD8E01 | 0xCD8E01 LIN  Bus, Kommunikationsfehler: Kurzschluss | 0 |
| 0xCD8E02 | 0xCD8E02 LIN  Bus, Kommunikationsfehler: Leitungsunterbrechung | 0 |
| 0xCD8F01 | 0xCD8F01 LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD9001 | 0xCD9001 LIN, Kommunikation (Ladeluft-Kühlmittelpumpe): fehlt | 0 |
| 0xCD9002 | 0xCD9002 LIN, Kommunikation (Ladeluft-Kühlmittelpumpe): fehlerhaft | 0 |
| 0xCD9101 | 0xCD9101 Batterieladeeinheit, LIN Kommunikation: Zeitüberschreitung | 0 |
| 0xCD9102 | 0xCD9102 Batterieladeeinheit, LIN Kommunikation: ungültige Botschaft | 0 |
| 0xCD9201 | 0xCD9201 LIN, Kommunikation (Kühlerjalousie): fehlt | 0 |
| 0xCD9202 | 0xCD9202 LIN, Kommunikation (Kühlerjalousie): ungültiger Botschaftsinhalt | 0 |
| 0xCD9304 | 0xCD9304 Bitserielle Datenschnittstelle, Signal: Kommunikationsfehler | 0 |
| 0xCD9402 | 0xCD9402 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | 0xCD9404 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | 0xCD9408 FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9430 | 0xCD9430 CAN-Kommunikation bei Unterspannung: Kommunikationsfehler zur EGS | 1 |
| 0xCD9431 | 0xCD9431 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0xCD9432 | 0xCD9432 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0xCD9433 | 0xCD9433 CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0xCD9434 | 0xCD9434 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN | 1 |
| 0xCD9435 | 0xCD9435 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0xCD9436 | 0xCD9436 CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an FA-CAN und A-CAN | 1 |
| 0xCD9502 | 0xCD9502 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | 0xCD9504 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCD9508 | 0xCD9508 FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | 0xCD9602 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | 0xCD9604 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | 0xCD9608 FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | 0xCD9702 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | 0xCD9704 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | 0xCD9708 FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9804 | 0xCD9804 FlexRay, Botschaft (Einheiten BN2020, 252.0.4 ): fehlt | 1 |
| 0xCD9902 | 0xCD9902 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | 0xCD9904 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | 0xCD9908 FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9A02 | 0xCD9A02 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | 0xCD9A04 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | 0xCD9A08 FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
| 0xCD9B02 | 0xCD9B02 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Aliveprüfung | 1 |
| 0xCD9B04 | 0xCD9B04 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): fehlt | 1 |
| 0xCD9B08 | 0xCD9B08 FlexRay, Botschaft (Ist Drehzahl Rad, 46.1.2): Prüfsumme falsch | 1 |
| 0xCD9C02 | 0xCD9C02 FlexRay, Botschaft (Ist Lenkwinkel Fahrer, 59.0.2): Aliveprüfung | 1 |
| 0xCD9C04 | 0xCD9C04 FlexRay, Botschaft (Ist Lenkwinkel Fahrer, 59.0.2): fehlt | 1 |
| 0xCD9C08 | 0xCD9C08 FlexRay, Botschaft (Ist Lenkwinkel Fahrer, 59.0.2): Prüfsumme falsch | 1 |
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
| 0xCDA202 | 0xCDA202 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): Aliveprüfung | 1 |
| 0xCDA204 | 0xCDA204 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA208 | 0xCDA208 FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): Prüfsumme falsch | 1 |
| 0xCDA302 | 0xCDA302 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | 0xCDA304 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | 0xCDA308 FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA426 | 0xCDA426 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA428 | 0xCDA428 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Aliveprüfung | 1 |
| 0xCDA429 | 0xCDA429 FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): Prüfsumme falsch | 1 |
| 0xCDA491 | 0xCDA491 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCDA492 | 0xCDA492 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCDA493 | 0xCDA493 FlexRay, Botschaft (Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCDA524 | 0xCDA524 FA-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDA602 | 0xCDA602 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDA604 | 0xCDA604 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDA608 | 0xCDA608 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDA702 | 0xCDA702 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | 0xCDA704 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | 0xCDA708 FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA802 | 0xCDA802 FA-CAN, Botschaft (Relativzeit, 0x328): Aliveprüfung | 1 |
| 0xCDA804 | 0xCDA804 FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDA808 | 0xCDA808 FA-CAN, Botschaft (Relativzeit, 0x328): Prüfsumme falsch | 1 |
| 0xCDA902 | 0xCDA902 FA-CAN, Botschaft (Status Anhänger, 0x2E4): Aliveprüfung | 1 |
| 0xCDA904 | 0xCDA904 FA-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt | 1 |
| 0xCDA908 | 0xCDA908 FA-CAN, Botschaft (Status Anhänger, 0x2E4): Prüfsumme falsch | 1 |
| 0xCDAB02 | 0xCDAB02 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): Aliveprüfung | 1 |
| 0xCDAB04 | 0xCDAB04 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAB08 | 0xCDAB08 FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): Prüfsumme falsch | 1 |
| 0xCDAC04 | 0xCDAC04 FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD02 | 0xCDAD02 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): Aliveprüfung | 1 |
| 0xCDAD04 | 0xCDAD04 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAD08 | 0xCDAD08 FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): Prüfsumme falsch | 1 |
| 0xCDAE02 | 0xCDAE02 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): Aliveprüfung | 1 |
| 0xCDAE04 | 0xCDAE04 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAE08 | 0xCDAE08 FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): Prüfsumme falsch | 1 |
| 0xCDAF02 | 0xCDAF02 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): Aliveprüfung | 1 |
| 0xCDAF04 | 0xCDAF04 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDAF08 | 0xCDAF08 FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): Prüfsumme falsch | 1 |
| 0xCDB002 | 0xCDB002 FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDB004 | 0xCDB004 FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDB008 | 0xCDB008 FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDB102 | 0xCDB102 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDB104 | 0xCDB104 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDB108 | 0xCDB108 FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDB204 | 0xCDB204 FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB302 | 0xCDB302 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Aliveprüfung | 1 |
| 0xCDB304 | 0xCDB304 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB308 | 0xCDB308 FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): Prüfsumme falsch | 1 |
| 0xCDB402 | 0xCDB402 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): Aliveprüfung | 1 |
| 0xCDB404 | 0xCDB404 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB408 | 0xCDB408 FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): Prüfsumme falsch | 1 |
| 0xCDB502 | 0xCDB502 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): Aliveprüfung | 1 |
| 0xCDB504 | 0xCDB504 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB508 | 0xCDB508 FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): Prüfsumme falsch | 1 |
| 0xCDB602 | 0xCDB602 FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | 0xCDB604 FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | 0xCDB608 FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB702 | 0xCDB702 FA-CAN, Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): Aliveprüfung | 1 |
| 0xCDB704 | 0xCDB704 FA-CAN, Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): fehlt | 1 |
| 0xCDB708 | 0xCDB708 FA-CAN, Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): Prüfsumme falsch | 1 |
| 0xCDB802 | 0xCDB802 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): Aliveprüfung | 1 |
| 0xCDB804 | 0xCDB804 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB808 | 0xCDB808 FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): Prüfsumme falsch | 1 |
| 0xCDB904 | 0xCDB904 FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBB02 | 0xCDBB02 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | 0xCDBB04 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | 0xCDBB08 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBC02 | 0xCDBC02 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): Aliveprüfung | 1 |
| 0xCDBC04 | 0xCDBC04 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): fehlt | 1 |
| 0xCDBC08 | 0xCDBC08 A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): Prüfsumme falsch | 1 |
| 0xCDBD02 | 0xCDBD02 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): Aliveprüfung | 1 |
| 0xCDBD04 | 0xCDBD04 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): fehlt | 1 |
| 0xCDBD08 | 0xCDBD08 A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): Prüfsumme falsch | 1 |
| 0xCDBE02 | 0xCDBE02 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | 0xCDBE04 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBE08 | 0xCDBE08 A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Prüfsumme falsch | 1 |
| 0xCDBF04 | 0xCDBF04 A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDC004 | 0xCDC004 A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | 0xCDC102 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | 0xCDC104 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | 0xCDC108 A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | 0xCDC202 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | 0xCDC204 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC208 | 0xCDC208 A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC302 | 0xCDC302 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Aliveprüfung | 1 |
| 0xCDC304 | 0xCDC304 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xCDC308 | 0xCDC308 A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): Prüfsumme falsch | 1 |
| 0xCDCA08 | 0xCDCA08 Getriebesteuerung: Fehlerverwaltung Getriebe | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4203 | Massenstrom vom HFM | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4205 | Saugrohrdruck 1 / Ladedruck 1 | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4302 | Wasserpumpe Leistung über BSD | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4303 | Wasserpumpe Elektronik Temperatur | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x4304 | Wasserpumpe Strom | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x4305 | Wasserpumpe Drehzahl Ist | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4306 | Wasserpumpe Drehzahl Soll | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | Wasserpumpe Betriebsart | 0-n | - | 0xFF | _CNV_S_13__CNV_S_13__856 | 1 | 1 | 0 |
| 0x4400 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x441E | Kurzzeitmittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x441F | Vormittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4421 | Orientierungswert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4422 | Vormittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4423 | Kurzzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4424 | Langzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4500 | VVT-Excenter Istwert | Grad | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4501 | VVT-Excenter Sollwert | ° | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4502 | Mechanischer Verstellbereich VVT aus Lernroutine | Grad | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4503 | Sollwert für Lageregler | ° | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 |
| 0x4504 | Sollwert für Lageregler vom Tester | ° | - | unsigned char | - | 0,703125 | 1 | 0,0 |
| 0x4505 | Sollwert Einlassspreizung | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4506 | Nockenwellenposition Einlass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4507 | Nockenwellenposition Auslass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4508 | Istwert Einlassspreizung | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4509 | Istwert Auslassspreizung | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x450A | Normspreizung Auslass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x450B | Normspreizung Einlass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x4600 | aktueller Drosselklappenwinkel | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4601 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,026881719008088112 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4610 | aktuelle Position Disaklappen | % | - | unsigned integer | - | 0,003051757114008069 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD II Protokoll | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominale Generatorspannung | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x461B | Statusbits für Ladezustand in Carrierbyte St_degn1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461C | bisheriger Wasserverlust | g/Ah | - | unsigned long | - | 2,7777777855675367E-9 | 1 | 0,0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4704 | Lambda Sollwert Bank1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4705 | Lambda Sollwert Bank2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4800 | Kupplungsschalter Status | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Kupplungsschalter vorhanden | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Sporttaster aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Status Klima ein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4804 | Sekundärluft Pumpe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Startrelais über CAN aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4806 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4807 | Motor Drehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4808 | Leerlauf Solldrehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4809 | Status LL | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Kilometerstand Auflösung 1 km | km | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | Pedalwert Fahrerwunsch in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x482A | Status Sekundärluftventil | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x482C | Drosselklappe Sollwert Bank 1 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4830 | Zähler Gradientenüberwachungsdiagnose beendet, Bank 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4831 | Zähler Gradientenüberwachungsdiagnose beendet, Bank 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4832 | Veränderlicher Durchschnittswert der Gradientenüberwachung, Bank 1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4833 | Veränderlicher Durchschnittswert der Gradientenüberwachung, Bank 2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4834 | Gepeicherter Maximalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4835 | Gepeicherter Maximalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4836 | Gespeicherter Minimalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4837 | Gespeicherter Minimalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4838 | Quadrierte Standardabweichung der Gradientenüberwachung, Bank 1 | (V/s)² | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| 0x4839 | Quadrierte Standardabweichung der Gradientenüberwachung, Bank 2 | (V/s)² | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| 0x4880 | maximaler Zündwinkel Quotient im Leerlauf | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4881 | maximaler Zündwinkel Quotient bei Teillast | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A00 | Versorgung FWG 1 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x4A01 | Versorgung FWG 2 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x4A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A06 | Diagnosebedingungen Bank2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A07 | Diagnosebedingungen Bank 2 Ende | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A08 | Spannung Ansauglufttemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A0D | Spannung Sekundärluft | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x4A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x4A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x4A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A1C | sekundäre Luftstrommassenmessung | kg/h | - | unsigned integer | - | 0,015625 | 1 | 0,0 |
| 0x4A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4A23 | Sollwert Öldruck | hPa | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4A24 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4A25 | Istwert Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A26 | Saugrohrdruck gefiltert | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A2B | Temperatur vor Drosselklappe | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4A2C | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4A2D | absoluter Saugrohrdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4A30 | Laufunruhe Zylinder 1 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A31 | Laufunruhe Zylinder 2 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A32 | Laufunruhe Zylinder 3 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A33 | Laufunruhe Zylinder 4 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A34 | Laufunruhe Zylinder 5 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A35 | Laufunruhe Zylinder 6 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x4A36 | Status Klopfen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A37 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A38 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A39 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3A | Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3B | Spannung Klopfwerte Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3C | Spannung Klopfwerte Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3D | Klopfsignal Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3E | Klopfsignal Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3F | Klopfsignal Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A40 | Klopfsignal Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A41 | Klopfsignal Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A42 | Klopfsignal Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A49 | Zündwinkel Zylinder 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| 0x4A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A4C | Motorlager Typ | 0/1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A4F | VVT-Entlastungsrelais EIN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 |
| 0x4A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A59 | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5B | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5C | Aktive Fehlerrückmeldung DISA-Klappe 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A5D | Schalthäufigkeitszähler DISA-Klappe 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4A5E | Aktive Fehlerrückmeldung DISA-Klappe 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4A5F | Schalthäufigkeitszähler DISA-Klappe 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4A60 | Bremslichtschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A61 | Bremslichttestschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A62 | Öldruckschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A63 | E-Box-Lüfter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A64 | Motorlager weiche Dämpfung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A65 | Abgasklappe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A66 | DMTL Pumpe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A67 | DMTL Ventil Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A68 | DMTL Heizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A69 | MIL Lampe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6C | Verbrauchskorrekturfaktor | - | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4A6D | Status Taste FGR | 0-n | - | 0xFF | _CNV_S_8_RANGE_STAT_17 | 1 | 1 | 0 |
| 0x4A6E | Status für irreversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4A6F | Status für reversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4A71 | DISA1 PWM (große/obere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x4A72 | DISA2 PWM (kleine/untere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x4A73 | Kurbelgehäuseentlüftungsheizung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A75 | Sekundärluft Ventil | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A76 | Adaption Öffnungspunkt Tankentlüftungsventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A77 | Tankentlüftungsventil TEV PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A7A | VANOS PWM Wert Einlass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A7B | VANOS PWM Wert Auslass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A7C | Lüfterfehler mit Funktionseinschränkungen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A7D | Schwerwiegender Lüfterfehler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A7F | Phase-Shift-Adaption Lambdasonde Bank 1 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x4A80 | Phase-Shift-Adaption Lambdasonde Bank 2 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x4A81 | Integrator Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A82 | Integrator Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A83 | Adaption Offset Lambda Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A84 | Adaption Offset Lambda Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A85 | Adaption Multiplikation Lambda Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A86 | Adaption Multiplikation Lambda Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A87 | Adaptionswert Trimregelung Bank 1 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x4A88 | Adaptionswert Trimregelung Bank 2 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x4A89 | multiplikative Gemischadaption hohe Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8A | multiplikative Gemischadaption hohe Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8B | multiplikative Gemischadaption niedrige Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8C | multiplikative Gemischadaption niedrige Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x4A8D | additive Gemischadaption Leerlauf Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A8E | additive Gemischadaption Leerlauf Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4A8F | Adaption Schubabgleich Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A90 | Adaption Schubabgleich Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A91 | Katalysatordiagnosewert Bank1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x4A92 | Katalysatordiagnosewert Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x4A94 | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x4A95 | Adaptionswert Nockenwelle Auslass Bank 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x4A96 | Adaptionswert Nockenwelle Einlass Bank 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x4A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AA1 | Angefordertes PWM-Signal, E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4AA2 | ECF Relais aktivieren | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AAA | Tastverhältnis Öldruck-Regelventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AB2 | Periodendauer Luftmasse 1 | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x4AB5 | SAP  Bewertung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AB6 | Rohwert Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4AB8 | Spannung Saugrohrdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4AB9 | Spannung Sportschalter | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABA | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4ABC | Luftmasse | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AC2 | Reset Adresse | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AC6 | berechnete Einspritzzeit, Zylinder 1 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4AC7 | berechnete Einspritzzeit, Zylinder 2 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4AC8 | berechnete Einspritzzeit, Zylinder 3 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4AC9 | berechnete Einspritzzeit, Zylinder 4 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4ACA | berechnete Einspritzzeit, Zylinder 5 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4ACB | berechnete Einspritzzeit, Zylinder 6 | ms | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 |
| 0x4ACC | Sollposition obere Luftklappe in Verstellschritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4ACD | Istposition obere Luftklappe in Verstellschritten | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AD0 | Fehlerstatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD1 | Diagnosestatus obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD2 | Status untere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD3 | Varianteninformation obere Luftklappe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AD5 | DME-Temperaturstatistik, Zähler 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD6 | DME-Temperaturstatistik, Zähler 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD7 | DME-Temperaturstatistik, Zähler 3 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD8 | DME-Temperaturstatistik, Zähler 4 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AD9 | DME-Temperaturstatistik, Zähler 5 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ADA | DME-Temperaturstatistik, Zähler 6 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ADB | DME-Temperaturstatistik, Zähler 7 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4ADC | DME-Temperaturstatistik, Zähler 8 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AE2 | Resetart des letzten Resets | 0-n | - | 0xFF | _CNV_S_19_ECOP_RANGE_626 | 1 | 1 | 0 |
| 0x4AE3 | Hintegrundinformationen zum letzten gültigen Reset | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AE4 | Zusätzliche Resetinformationen zur Resetursache | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x4AE5 | Zähler Reset Safe | m | - | unsigned long | - | 100,0 | 1 | 0,0 |
| 0x4AE6 | Gesamtlaufzeit Reset Safe | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x4AE7 | CPU Last beim zurücksetzen Reset Safe | % | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| 0x4AE8 | Geschwindigkeit bei maximaler CPU Last | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AEA | Anzahl von atypischen Warm-Resets seit letzter Power-Up-Phase (BSW) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AEB | Temperatur < 98 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEC | 98 Grad Celsius <= Temperatur <= 112 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AED | 113 Grad Celsius <= Temperatur <= 120 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEE | 121 Grad Celsius <= Temperatur <= 125 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AEF | Temperatur > 125 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF0 | Temperatur < 80 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF1 | 80 Grad Celsius <= Temperatur <= 110 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF2 | 110 Grad Celsius <= Temperatur <= 135 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF3 | 135 Grad Celsius <= Temperatur <= 150 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF4 | Temperatur > 150 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF5 | Temperatur < 80 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF6 | 80 Grad Celsius <= Temperatur <= 109 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF7 | 110 Grad Celsius <= Temperatur <= 124 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF8 | 125 Grad Celsius <= Temperatur <= 129 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AF9 | Temperatur > 129 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFA | Temperatur < 3 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFB | 3 Grad Celsius <= Temperatur <= 19 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFC | 20 Grad Celsius <= Temperatur <= 29 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFD | 30 Grad Celsius <= Temperatur <= 39 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AFE | Temperatur > 39 Grad Celsius | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_6_LACO_RANGE_537 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_6_LACO_RANGE_537 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Kühlmitteltemperatur OBD | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5806 | Lambda Integrator Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5808 | Lambda Integrator Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x580B | Saugrohrdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580C | Drehzahl | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | °CRK | - | unsigned char | - | 0,5 | 1 | -64,0 |
| 0x580F | Ansauglufttemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5810 | Luftdurchsatz OBD | g/s | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5812 | Luftmasse gemessen | kg/h | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5818 | Luftmasse gerechnet | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x5819 | Drehzahl OBD Byte | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x581A | Position Einspritzung CAM VVTI | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581B | Anfangspunkt für VVTI | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581C | Nockenwelle Auslass | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581D | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581E | Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5825 | Abstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5826 | Drosselklappe 2 Sollwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5827 | Lambdasondenheizung vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5828 | Lambdasondenheizung vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5829 | Lambdasondenheizung hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582A | Lambdasondenheizung hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582B | Drehmomenteingriff über CAN | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582C | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582D | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582E | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x582F | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x5830 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| 0x5831 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_123 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| 0x5835 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_493 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_493 | 1 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_290 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x583D | Resettyp | 0-n | - | 0xFF | _CNV_S_19_ECOP_RANGE_626 | 1 | 1 | 0 |
| 0x583E | Motordrehzahl bei Reset | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x583F | Drosselklappe Sollwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5840 | CPU Last bei Reset | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Versorgung Fahrwertgeber 1 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1,0 | 1 | -48,0 |
| 0x5845 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5846 | Spannung Pedalwertgeber 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5847 | Spannung Pedalwertgeber 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5848 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5849 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584A | Spannung Kl. 15 Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584B | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584C | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584D | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x584E | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5851 | Spannung Ansauglufttemperatur, Sensor | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 |
| 0x5854 | Versorgung Fahrwertgeber 2 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5855 | Mittelwert Bank 1 | % | - | signed char | - | 0,390625 | 1 | 0,0 |
| 0x5856 | Mittelwert Bank 2 | % | - | signed char | - | 0,390625 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5858 | Drosselklappe aktueller Wert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585B | DMTL Strom Diagnoseende | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585E | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x585F | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5862 | Öldruck Sollwert | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5863 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5865 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Kilometerstand | km | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | Batteriespannung von IBS gemessen | V | - | unsigned char | - | 0,06400000303983688 | 1 | 6,0 |
| 0x586B | Zeit mit Ruhestrom 80 - 200 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit mit Ruhestrom 200 - 1000 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586D | Zähler Erkennung schlechte Strasse | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586E | Zeit mit Ruhestrom größer 1000 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Ist Öldruck | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5872 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5874 | Spannung Strommessung DMTL | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5875 | Sollwert Motormoment | Nm | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5876 | Mittelwert der sekundären Luftmasse am SAE | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x5877 | SAE Wertebereich | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x587B | maximaler Stromerwartungswert der Drossel | A^2 | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__119 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_503 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_503 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Ansteuerung untere Luftklappe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5884 | Rückgelesener Erregergrenzstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5890 | Gemessene Spannung vom DCDC Wandler gegen Masse | V | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5892 | Startpunkt der Positionssteuerung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_496 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_496 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5898 | Generator Sollspannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5899 | DISA position | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x589A | gewählter momentaner Grad an Jitter | ° | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x589B | Spannungsoffset Signalpfad CJ120 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589C | Spannungsoffset Signalpfad CJ120 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589D | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589E | Relay Status | 0-n | - | 0xFF | _CNV_S_3_STATE_RLY__343 | 1 | 1 | 0 |
| 0x589F | Motorgeschwindigkeit | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58A0 | Batterietemperatur | °C | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x58A1 | Entladung während Ruhestromverletzung | Ah | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 |
| 0x58A2 | Wasserpumpe Stromaufnahme | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x58A3 | relative Wasserpumpenspannung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58A4 | Status Generator | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58A5 | Generatorauslastung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58A6 | Generatorspannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit in min | min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58A8 | Motorabstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58A9 | Resetzähler Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Fehlercode Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AB | Abweichung DK-Potentiometer 1 und Modellwert | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58AC | Abweichung DK-Potentiometer 2 und Modellwert | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AE | Periodendauer Luftmasse | us | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BA | Statusbyte 3 Sendesignale Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BB | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BD | Luftmassenmodellwert für Siko | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BE | Getriebetemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x58BF | Statusbyte vom Error Memory Management | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 7812,21826171875 | 1 | 0,0 |
| 0x58C2 | Statusbyte MFF-Monitoring | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C3 | Statusbyte ISC-Monitoring | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C4 | Statusbyte CRU-Monitoring | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58C5 | Drehzahl Überwachung (resetsicher) | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58C6 | Status Einspritzventile (resetsicher) | ° | - | unsigned char | - | 0,703125 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | -4096,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58C9 | I-Anteil LL passive Rampe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CD | Entladung während Ruhestromverletzung | Ah | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CF | Motormoment Sollwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D0 | Motormoment Istwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D2 | Sollposition obere Luftklappe in Grad | Grad | - | unsigned char | - | 256,0 | 1 | -95,0 |
| 0x58D3 | Istposition obere Luftklappe in Grad | Grad | - | unsigned char | - | 256,0 | 1 | -95,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D5 | Ansauglufttemperatur im Laderstrang | °C | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D7 | momentaner Motorstrom | A | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x58D8 | erwartete DC Motortemperatur | °C | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58D9 | Fehlercode Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | Resetzähler Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DF | Spannung Sportschalter | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_7__CNV_S_7_D_807 | 1 | 1 | 0 |
| 0x58E5 | Lastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E6 | Nulllastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E7 | Spannung Pedalwertgeber 1 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E8 | Spannung Pedalwertgeber 2 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E9 | Wasserpumpe Spannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Wasserpumpe Drehzahl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | Wasserpumpe Drehzahl Soll-Ist-Differenz | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Wasserpumpe Temperatur Elektronik | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Moment der elektrischen Wasserpumpe | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EE | relative CWP Leistung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58EF | Temperatur Getriebeöltemperaturmodell | °C | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x58F0 | Raildruck Bank 2 | hPa | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| 0x58F1 | DME - Losnummer | 0-n | - | 0xFF | _CNV_S_13_RANGE_STAT_604 | 1 | 1 | 0 |
| 0x58F3 | Kraftstoffdruck vor Mengensteuerventil | hPa | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| 0x58F4 | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F6 | Eingangssignal Rückführregler 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F7 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 30,516477584838867 | 1 | 0,0 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,0610351525247097 | 1 | 7,843136878244668E-8 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,0610351525247097 | 1 | 7,843136878244668E-8 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FC | Katheizen aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58FD | Statusbyte 2 Sendesignale Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR |
| 0x02 | ERROR_ARGUMENT |
| 0xXY | ERROR_UNKNOWN |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | °C | TIA | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 | - | 22;2C | - | - |
| IPSAU | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck | hPa | MAP_MES | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 | - | 22;2C | - | - |
| ILMKG | 0x4203 | STAT_LUFTMASSE_WERT | Massenstrom vom HFM | kg/h | MAF_KGH_MES | - | unsigned integer | - | 0,03125 | 1 | 0,0 | - | 22;2C | - | - |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Saugrohrdruck 1 / Ladedruck 1 | hPa | MAP_DIP_MES_BAS | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 | - | 22;2C | - | - |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | °C | TCO | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x4301_WERT | 0x4301 | STAT_0x4301_WERT | Kühlerauslasstemperatur | °C | TCO_2 | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| IPWAB | 0x4302 | STAT_WASSERPUMPENLEISTUNG_BSD_WERT | Wasserpumpe Leistung über BSD | % | REL_CWP_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| ITWAE | 0x4303 | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | Wasserpumpe Elektronik Temperatur | °C | TEMP_EL_CWP_SEC | - | unsigned char | - | 1,0 | 1 | -50,0 | - | 22;2C | - | - |
| IIWAP | 0x4304 | STAT_WASSERPUMPE_STROM_WERT | Wasserpumpe Strom | A | CUR_CNS_CWP_SEC | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 | - | 22;2C | - | - |
| INWAP | 0x4305 | STAT_WASSERPUMPE_DREHZAHL_WERT | Wasserpumpe Drehzahl Ist | - | N_REL_CWP_SEC | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Wasserpumpe Drehzahl Soll | - | N_REL_CWP_SP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IBAWP | 0x4307 | STAT_WASSERPUMPE_BETRIEBSART_WERT | Wasserpumpe Betriebsart | 0-n | BA_WM_IST | - | unsigned char | _CNV_S_13__CNV_S_13__856 | 1 | 1 | 0 | - | 22;2C | - | - |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | ° C | TOEL | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | - | OZ_KVBSM_UL | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | km | OZ_OELKM | - | unsigned integer | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Ölsensor Niveau Rohwert | - | OZ_NIVR | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Ölsensor Qualität Rohwert | - | OZ_PERMR | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Ölsensor Temperatur Rohwert | - | OZ_TEMPR | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Ölsensor Temperatur | ° C | OZ_TEMPAKT | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölsensor Niveau | mm | OZ_NIVAKT | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Ölsensor Qualität | - | OZ_PERMAKT | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | - | OZ_LF1C | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | - | OZ_LF2C | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | OZ_LF1T | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | OZ_LF2T | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | mm | OZ_NIVKRZT | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | km | OZ_RWKVB | - | signed integer | - | 10,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | - | OZ_OELZEIT | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISOPS | 0x4418 | STAT_PEILSTABANZEIGE_WERT | Status Peilstabanzeige | - | OZ_LV | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x441E_WERT | 0x441E | STAT_0x441E_WERT | Kurzzeitmittelwert | mm | OZ_KRZOR | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x441F_WERT | 0x441F | STAT_0x441F_WERT | Vormittelwert | mm | OZ_VORMW | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4421_WERT | 0x4421 | STAT_0x4421_WERT | Orientierungswert Counter | - | OZ_ORICNT | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4422_WERT | 0x4422 | STAT_0x4422_WERT | Vormittelwert Counter | - | OZ_VORMWCNT | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4423_WERT | 0x4423 | STAT_0x4423_WERT | Kurzzeitmittelwert Counter | - | OZ_KRZCNT | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4424_WERT | 0x4424 | STAT_0x4424_WERT | Langzeitmittelwert Counter | - | OZ_LGMWCNT | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IWVEX | 0x4500 | STAT_VVT_EXCENTER_WERT | VVT-Excenter Istwert | Grad | ANG_EXC_VVL | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 | - | 22;2C | - | - |
| SWVEX | 0x4501 | STAT_VVT_EXCENTER_SOLL_WERT | VVT-Excenter Sollwert | ° | ANG_SP_VVL | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 | - | 22;2C | - | - |
| IWVVB | 0x4502 | STAT_VVT_VERSTELLBEREICH_LERNROUTINE_WERT | Mechanischer Verstellbereich VVT aus Lernroutine | Grad | ANG_STK_VVL | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 | - | 22;2C | - | - |
| SWVLR | 0x4503 | STAT_VVT_LAGEREGLER_SOLL_WERT | Sollwert für Lageregler | ° | ANG_SP_VVL_CUS | - | unsigned integer | - | 0,02197319269180298 | 1 | 0,0 | - | 22;2C | - | - |
| SWVLT | 0x4504 | STAT_VVT_LAGEREGLER_SOLL_VON_TESTER_WERT | Sollwert für Lageregler vom Tester | ° | ANG_SP_EXT_ADJ_VVL | - | unsigned char | - | 0,703125 | 1 | 0,0 | - | 22;2C | - | - |
| SSPEI | 0x4505 | STAT_VVT_EINLASSSPREIZUNG_SOLL_WERT | Sollwert Einlassspreizung | °CRK | CAM_SP_IVVT_IN | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Nockenwellenposition Einlass | °CRK | PSN_CAM_IN_1 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 | - | 22;2C | - | - |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Nockenwellenposition Auslass | °CRK | PSN_CAM_EX_1 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 | - | 22;2C | - | - |
| ISNWE | 0x4508 | STAT_NW_EINLASSSPREIZUNG_WERT | Istwert Einlassspreizung | °CRK | CAM_IN[1] | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 | - | 22;2C | - | - |
| NSNWA | 0x450A | STAT_NW_NORMSPREIZUNG_AUSLASS_WERT | Normspreizung Auslass | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,0234375 | 1 | 0,0 | - | 22;2C | - | - |
| NSNWE | 0x450B | STAT_NW_NORMSPREIZUNG_EINLASS_WERT | Normspreizung Einlass | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,0234375 | 1 | 0,0 | - | 22;2C | - | - |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | aktueller Drosselklappenwinkel | °TPS | TPS_AV | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 | - | 22;2C | - | - |
| SWDKM | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Drosselklappe Sollwert | °TPS | TPS_SP_MDL | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 | - | 22;2C | - | - |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung über BSD | V | V_ALTER_SP | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 | - | 22;2C | - | - |
| ITGEE | 0x4603 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | ° C | TCHIP | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generator Strom | - | I_GEN | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 1 | - | BSDGENCV | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| VGENR | 0x4606 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| VGENH | 0x4607 | STAT_GENERATOR_HERSTELLERCODE_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| VGTYP | 0x4608 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | V | VB | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 | - | 22;2C | - | - |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 | - | 22;2C | - | - |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | V | VB_BAS | - | unsigned integer | - | 0,026881719008088112 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | - | ABSCH_KORR | - | signed integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| TDSTF | 0x460E | STAT_ABSTAND_ZUR_STARTFAEHIGKEITSGRENZE_WERT | Abstand zur Startfähigkeitsgrenze | - | D_SOC | - | signed integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | % | LOAD_BAT | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IPDIS | 0x4610 | STAT_DISAKLAPPEN_POSITION_WERT | aktuelle Position Disaklappen | % | VIM_AV | - | unsigned integer | - | 0,003051757114008069 | 1 | 0,0 | - | 22;2C | - | - |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | % | N_PERC_ECF | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IIEGE | 0x4612 | STAT_GENERATOR_ERREGERSTROM_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4613_WERT | 0x4613 | STAT_0x4613_WERT | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | U_FGEN | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| IGENA | 0x4614 | STAT_AUSLASTUNGSGRAD_GENERATOR_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4615_WERT | 0x4615 | STAT_0x4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4616_WERT | 0x4616 | STAT_0x4616_WERT | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | TLRFGEN | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| MGENG | 0x4617 | STAT_GEFILTERTES_GENERATORMOMENT_ABSOLUT_(AUSGANG)_WERT | gefiltertes Generatormoment absolut Ausgang | Nm | MD_GENNM_NA | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4618_WERT | 0x4618 | STAT_0x4618_WERT | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_LRFOFF | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4619_WERT | 0x4619 | STAT_0x4619_WERT | Bedingung BSD II Protokoll | 0/1 | B_BSDPROT2 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IUNGE | 0x461A | STAT_NOMINALE_GENERATORSPANNUNG_WERT | Nominale Generatorspannung | V | UREGNOM | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x461B_WERT | 0x461B | STAT_0x461B_WERT | Statusbits für Ladezustand in Carrierbyte St_degn1 | 0/1 | B_ULADE | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x461C_WERT | 0x461C | STAT_0x461C_WERT | bisheriger Wasserverlust | g/Ah | QV_H2O_ZG | - | unsigned long | - | 2,7777777855675367E-9 | 1 | 0,0 | - | 22;2C | - | - |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | LV_IPLSL_VLD[1] | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | LV_IPLSL_VLD[2] | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | VLS_COR_LSL[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | VLS_COR_LSL[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank1 | - | LAMB_BAS[0] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank2 | - | LAMB_BAS[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Kupplungsschalter Status | 0/1 | LV_CS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Kupplungsschalter vorhanden | 0/1 | LV_CS_CUS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Sporttaster aktiv | 0/1 | LV_SOF_SWI | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Status Klima ein | - | STATE_ACIN_CAN | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4804_WERT | 0x4804 | STAT_0x4804_WERT | Sekundärluft Pumpe aktiv | 0/1 | LV_SAP | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Startrelais über CAN aktiv | 0/1 | LV_RLY_ST_CAN | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4806_WERT | 0x4806 | STAT_0x4806_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motor Drehzahl | rpm | N | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlauf Solldrehzahl | rpm | N_SP_IS | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Status LL | 0/1 | LV_IS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Kilometerstand Auflösung 1 km | km | CTR_KM_BN | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Pedalwert Fahrerwunsch in % | % | PV_AV | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x482A_WERT | 0x482A | STAT_0x482A_WERT | Status Sekundärluftventil | 0/1 | LV_SAV | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x482C_WERT | 0x482C | STAT_0x482C_WERT | Drosselklappe Sollwert Bank 1 | °TPS | TPS_SP | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4830_WERT | 0x4830 | STAT_0x4830_WERT | Zähler Gradientenüberwachungsdiagnose beendet, Bank 1 | - | CTR_NR_DIAG_PUE_LS_DOWN[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4831_WERT | 0x4831 | STAT_0x4831_WERT | Zähler Gradientenüberwachungsdiagnose beendet, Bank 2 | - | CTR_NR_DIAG_PUE_LS_DOWN[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4832_WERT | 0x4832 | STAT_0x4832_WERT | Veränderlicher Durchschnittswert der Gradientenüberwachung, Bank 1 | mV/s | VLS_DOWN_PUE_MMV[1] | - | signed integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4833_WERT | 0x4833 | STAT_0x4833_WERT | Veränderlicher Durchschnittswert der Gradientenüberwachung, Bank 2 | mV/s | VLS_DOWN_PUE_MMV[2] | - | signed integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4834_WERT | 0x4834 | STAT_0x4834_WERT | Gepeicherter Maximalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 1 | mV/s | VLS_DOWN_PUE_SAVE_MAX[1] | - | signed integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4835_WERT | 0x4835 | STAT_0x4835_WERT | Gepeicherter Maximalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 2 | mV/s | VLS_DOWN_PUE_SAVE_MAX[2] | - | signed integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4836_WERT | 0x4836 | STAT_0x4836_WERT | Gespeicherter Minimalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 1 | mV/s | VLS_DOWN_PUE_SAVE_MIN[1] | - | signed integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4837_WERT | 0x4837 | STAT_0x4837_WERT | Gespeicherter Minimalgradient, O2-Sensor downstream über alle Fahrzyklen, Bank 2 | mV/s | VLS_DOWN_PUE_SAVE_MIN[2] | - | signed integer | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4838_WERT | 0x4838 | STAT_0x4838_WERT | Quadrierte Standardabweichung der Gradientenüberwachung, Bank 1 | (V/s)² | VLS_DOWN_PUE_STD[1] | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4839_WERT | 0x4839 | STAT_0x4839_WERT | Quadrierte Standardabweichung der Gradientenüberwachung, Bank 2 | (V/s)² | VLS_DOWN_PUE_STD[2] | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4880_WERT | 0x4880 | STAT_0x4880_WERT | maximaler Zündwinkel Quotient im Leerlauf | % | EFF_IGA_CST_QUO_IS_MAX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4881_WERT | 0x4881 | STAT_0x4881_WERT | maximaler Zündwinkel Quotient bei Teillast | % | EFF_IGA_CST_QUO_PL_MAX | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUPV1 | 0x4A00 | STAT_PWG1_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 1 | V | VCC_PVS_1 | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 | - | 22;2C | - | - |
| IUPV2 | 0x4A01 | STAT_PWG2_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 2 | V | VCC_PVS_2 | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 | - | 22;2C | - | - |
| IUPW1 | 0x4A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUPW2 | 0x4A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A06_WERT | 0x4A06 | STAT_0x4A06_WERT | Diagnosebedingungen Bank2 | V | V_TPS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A07_WERT | 0x4A07 | STAT_0x4A07_WERT | Diagnosebedingungen Bank 2 Ende | V | V_TPS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUANS | 0x4A08 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannung Ansauglufttemperatur | V | VP_TIA | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IUKUM | 0x4A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V | VP_TCO[1] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IUKUA | 0x4A0A | STAT_KUEHLERAUSLASSTEMPERATUR_SPANNUNG_WERT | Spannung Kühlmitteltemperatur Kühlerausgang | V | VP_TCO[2] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IUUMG | 0x4A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V | V_AMP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSLS | 0x4A0D | STAT_SEKUNDAERLUFT_SPANNUNG_WERT | Spannung Sekundärluft | V | V_SAF | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 | - | 22;2C | - | - |
| IUSGI | 0x4A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V | VP_TECU | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A0F_WERT | 0x4A0F | STAT_0x4A0F_WERT | Spannung Kl.15 | V | V_IGK_BAS | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUK15 | 0x4A10 | STAT_KL15_SPANNUNG_WERT | Spannung Kl15 | V | V_IGK_MES | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 | - | 22;2C | - | - |
| IUSV1 | 0x4A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSV2 | 0x4A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSN1 | 0x4A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSN2 | 0x4A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUDMT | 0x4A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Strommessung DMTL | V | V_DMTL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A1C_WERT | 0x4A1C | STAT_0x4A1C_WERT | sekundäre Luftstrommassenmessung | kg/h | SAF_KGH_MES_BAS | - | unsigned integer | - | 0,015625 | 1 | 0,0 | - | 22;2C | - | - |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| ITSGI | 0x4A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x4A23_WERT | 0x4A23 | STAT_0x4A23_WERT | Sollwert Öldruck | hPa | P_OEL_SOLL | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SWDKL | 0x4A24 | STAT_DK_WINKEL_SOLL_WERT | Drosselklappe Sollwert | °TPS | TPS_SP | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A25_WERT | 0x4A25 | STAT_0x4A25_WERT | Istwert Öldruck | hPa | P_OEL_IST | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A26_WERT | 0x4A26 | STAT_0x4A26_WERT | Saugrohrdruck gefiltert | hPa | map | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 | - | 22;2C | - | - |
| IPPW1 | 0x4A27 | STAT_PWG1_WERT | Pedalwertgeber Potentiometer 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IPPW2 | 0x4A28 | STAT_PWG2_WERT | Pedalwertgeber Potentiometer 2 | % | PV_AV_2 | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| RFPWG | 0x4A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A2B_WERT | 0x4A2B | STAT_0x4A2B_WERT | Temperatur vor Drosselklappe | ° C | TANS | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A2C_WERT | 0x4A2C | STAT_0x4A2C_WERT | Druck vor Drosselklappe | hPa | PVDKDS | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A2D_WERT | 0x4A2D | STAT_0x4A2D_WERT | absoluter Saugrohrdruck | hPa | PS_IST | - | unsigned integer | - | 0,0390625 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ1 | 0x4A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | µs | ER_CYL[0] | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ2 | 0x4A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | µs | ER_CYL[4] | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ3 | 0x4A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | µs | ER_CYL[2] | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ4 | 0x4A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | µs | ER_CYL[5] | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ5 | 0x4A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | µs | ER_CYL[1] | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILUZ6 | 0x4A35 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | µs | ER_CYL[3] | - | signed integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | 0/1 | LV_KNK | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ2 | 0x4A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 2 | V | NL[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ3 | 0x4A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ4 | 0x4A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ5 | 0x4A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 5 | V | NL[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IUKZ6 | 0x4A3C | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IKSZ1 | 0x4A3D | STAT_KLOPFSIGNAL_ZYL1_WERT | Klopfsignal Zylinder 1 | V | KNKS[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IKSZ5 | 0x4A3E | STAT_KLOPFSIGNAL_ZYL5_WERT | Klopfsignal Zylinder 5 | V | KNKS[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IKSZ4 | 0x4A3F | STAT_KLOPFSIGNAL_ZYL4_WERT | Klopfsignal Zylinder 4 | V | KNKS[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IKSZ3 | 0x4A40 | STAT_KLOPFSIGNAL_ZYL3_WERT | Klopfsignal Zylinder 3 | V | KNKS[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IKSZ6 | 0x4A41 | STAT_KLOPFSIGNAL_ZYL6_WERT | Klopfsignal Zylinder 6 | V | KNKS[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IKSZ2 | 0x4A42 | STAT_KLOPFSIGNAL_ZYL2_WERT | Klopfsignal Zylinder 2 | V | KNKS[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder 1 | °CRK | IGA_IGC[0] | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 | - | 22;2C | - | - |
| ILASB | 0x4A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A4C_WERT | 0x4A4C | STAT_0x4A4C_WERT | Motorlager Typ | 0/1 | lc_swi_aeb_typ | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISACR | 0x4A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN | Klimakompressorrelais Ein | 0/1 | LV_ACCOUT_RLY | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A4F_WERT | 0x4A4F | STAT_0x4A4F_WERT | VVT-Entlastungsrelais EIN | 0/1 | LV_STATE_RLY_VVL | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ILAB1 | 0x4A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Katalysator Bank 1 | - | LAMB_LS_UP[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ILAB2 | 0x4A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Katalysator Bank 2 | - | LAMB_LS_UP[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS hinter Katalysator Bank 1 | 0/1 | LV_LS_DOWN_READY[1] | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IRNK2 | 0x4A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS hinter Katalysator Bank 2 | 0/1 | LV_LS_DOWN_READY[2] | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung hinter Katalysator Bank 1 | 0-n | STATE_LSH_DOWN[1] | - | unsigned char | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHN2 | 0x4A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung hinter Katalysator Bank 2 | 0-n | STATE_LSH_DOWN[2] | - | unsigned char | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Katalysator Bank 1 | 0-n | STATE_LSH_UP[1] | - | unsigned char | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 | - | 22;2C | - | - |
| ISHV2 | 0x4A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Katalysator Bank 2 | 0-n | STATE_LSH_UP[2] | - | unsigned char | _CNV_S_7_EGCP_RANGE_474 | 1 | 1 | 0 | - | 22;2C | - | - |
| IAHV1 | 0x4A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IAHN1 | 0x4A59 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IAHV2 | 0x4A5A | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IAHN2 | 0x4A5B | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK2_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A5C_WERT | 0x4A5C | STAT_0x4A5C_WERT | Aktive Fehlerrückmeldung DISA-Klappe 1 | - | ERR_VIMPWM_1_FB | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A5D_WERT | 0x4A5D | STAT_0x4A5D_WERT | Schalthäufigkeitszähler DISA-Klappe 1 | - | CTR_VIMPWM_1_EDGE | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A5E_WERT | 0x4A5E | STAT_0x4A5E_WERT | Aktive Fehlerrückmeldung DISA-Klappe 2 | - | ERR_VIMPWM_2_FB | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A5F_WERT | 0x4A5F | STAT_0x4A5F_WERT | Schalthäufigkeitszähler DISA-Klappe 2 | - | CTR_VIMPWM_2_EDGE | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | 0/1 | LV_IM_BLS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | 0/1 | LV_IM_BTS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISOED | 0x4A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | 0/1 | LV_POIL_SWI | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISEBO | 0x4A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Box-Lüfter Ein | 0/1 | LV_EBOX_CFA | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A64_WERT | 0x4A64 | STAT_0x4A64_WERT | Motorlager weiche Dämpfung | 0/1 | LV_SWI_AEB | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISAGK | 0x4A65 | STAT_ABGASKLAPPE_EIN_WERT | Abgasklappe Ein | 0/1 | LV_EF | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDMP | 0x4A66 | STAT_DMTL_PUMPE_EIN_WERT | DMTL Pumpe Ein | 0/1 | LV_DMTL_PUMP | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDMV | 0x4A67 | STAT_DMTL_VENTIL_EIN_WERT | DMTL Ventil Ein | 0/1 | LV_DMTLS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDMH | 0x4A68 | STAT_DMTL_HEIZUNG_EIN_WERT | DMTL Heizung Ein | 0/1 | LV_HDMTL_ON | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISMIL | 0x4A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | 0/1 | LV_MIL_CAN | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISFGR | 0x4A6A | STAT_LAMPE_FGR_EIN_WERT | Lampe FGR Ein | 0/1 | LV_CRU_MAIN_SWI | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| ISCEL | 0x4A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | 0/1 | LV_WAL_1_CAN | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A6C_WERT | 0x4A6C | STAT_0x4A6C_WERT | Verbrauchskorrekturfaktor | - | FAC_FCO_KWP | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 | - | 22;2C | - | - |
| ISTFG | 0x4A6D | STAT_TASTE_FGR_EIN_WERT | Status Taste FGR | 0-n | STATE_MSW_CAN | - | unsigned char | _CNV_S_8_RANGE_STAT_17 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A6E_WERT | 0x4A6E | STAT_0x4A6E_WERT | Status für irreversible Abschaltbedingung | - | STATE_CRU_OFF_IRR | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A6F_WERT | 0x4A6F | STAT_0x4A6F_WERT | Status für reversible Abschaltbedingung | - | STATE_CRU_OFF_REV | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IADS1 | 0x4A71 | STAT_DISA1_PWM_WERT | DISA1 PWM (große/obere Klappe) | % | VIMPWM_1 | - | signed integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| IADS2 | 0x4A72 | STAT_DISA2_PWM_WERT | DISA2 PWM (kleine/untere Klappe) | % | VIMPWM_2 | - | signed integer | - | 0,0030517578125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A73_WERT | 0x4A73 | STAT_0x4A73_WERT | Kurbelgehäuseentlüftungsheizung | 0/1 | LV_RLY_CRCV_HEAT_EXT_ADJ | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IAKFT | 0x4A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | % | ECTPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A75_WERT | 0x4A75 | STAT_0x4A75_WERT | Sekundärluft Ventil | 0/1 | LV_SAV | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4A76_WERT | 0x4A76 | STAT_0x4A76_WERT | Adaption Öffnungspunkt Tankentlüftungsventil | % | CPPWM_ADD_AD_MEM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IATEV | 0x4A77 | STAT_TEV_PWM_WERT | Tankentlüftungsventil TEV PWM | % | CPPWM_CPS | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IAELUE | 0x4A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IAVEP | 0x4A7A | STAT_VANOS_EINLASS_PWM_WERT | VANOS PWM Wert Einlass | % | IVVTPWM_0 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IAVAP | 0x4A7B | STAT_VANOS_AUSLASS_PWM_WERT | VANOS PWM Wert Auslass | % | IVVTPWM_1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A7C_WERT | 0x4A7C | STAT_0x4A7C_WERT | Lüfterfehler mit Funktionseinschränkungen | 0/1 | lv_err_ecfpwm_fb_3 | - | 0xFF | - | 1 | 1 | 0 | - | - | - | - |
| STAT_0x4A7D_WERT | 0x4A7D | STAT_0x4A7D_WERT | Schwerwiegender Lüfterfehler | 0/1 | lv_err_ecfpwm_fb_4 | - | 0xFF | - | 1 | 1 | 0 | - | - | - | - |
| STAT_0x4A7F_WERT | 0x4A7F | STAT_0x4A7F_WERT | Phase-Shift-Adaption Lambdasonde Bank 1 | °CRK | DELTA_CRK_CYL_LAM[1] | - | signed char | - | 6,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A80_WERT | 0x4A80 | STAT_0x4A80_WERT | Phase-Shift-Adaption Lambdasonde Bank 2 | °CRK | DELTA_CRK_CYL_LAM[2] | - | signed char | - | 6,0 | 1 | 0,0 | - | 22;2C | - | - |
| IINT1 | 0x4A81 | STAT_INTEGRATOR_BANK1_WERT | Integrator Bank 1 | % | FAC_LAM_LIM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| IINT2 | 0x4A82 | STAT_INTEGRATOR_BANK2_WERT | Integrator Bank 2 | % | FAC_LAM_LIM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| IADD1 | 0x4A83 | STAT_ADAPTION_ADDITIV_BANK1_WERT | Adaption Offset Lambda Bank 1 | mg/stk | MFF_AD_ADD_MMV_REL[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 | - | 22;2C | - | - |
| IADD2 | 0x4A84 | STAT_ADAPTION_ADDITIV_BANK2_WERT | Adaption Offset Lambda Bank 2 | mg/stk | MFF_AD_ADD_MMV_REL[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 | - | 22;2C | - | - |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Adaption Multiplikation Lambda Bank 1 | % | MFF_AD_FAC_MMV_REL[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| IMUL2 | 0x4A86 | STAT_ADAPTION_MULTIPLIKATIV_BANK2_WERT | Adaption Multiplikation Lambda Bank 2 | % | MFF_AD_FAC_MMV_REL[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| STAT_0x4A87_WERT | 0x4A87 | STAT_0x4A87_WERT | Adaptionswert Trimregelung Bank 1 | - | LAMB_DELTA_AD_LAM_ADJ[1] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A88_WERT | 0x4A88 | STAT_0x4A88_WERT | Adaptionswert Trimregelung Bank 2 | - | LAMB_DELTA_AD_LAM_ADJ[2] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A89_WERT | 0x4A89 | STAT_0x4A89_WERT | multiplikative Gemischadaption hohe Last Bank 1 | % | FAC_H_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| STAT_0x4A8A_WERT | 0x4A8A | STAT_0x4A8A_WERT | multiplikative Gemischadaption hohe Last Bank 2 | % | FAC_H_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| STAT_0x4A8B_WERT | 0x4A8B | STAT_0x4A8B_WERT | multiplikative Gemischadaption niedrige Last Bank 1 | % | FAC_L_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| STAT_0x4A8C_WERT | 0x4A8C | STAT_0x4A8C_WERT | multiplikative Gemischadaption niedrige Last Bank 2 | % | FAC_L_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 | - | 22;2C | - | - |
| STAT_0x4A8D_WERT | 0x4A8D | STAT_0x4A8D_WERT | additive Gemischadaption Leerlauf Bank 1 | mg/stk | MFF_ADD_LAM_AD[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 | - | 22;2C | - | - |
| STAT_0x4A8E_WERT | 0x4A8E | STAT_0x4A8E_WERT | additive Gemischadaption Leerlauf Bank 2 | mg/stk | MFF_ADD_LAM_AD[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 | - | 22;2C | - | - |
| STAT_0x4A8F_WERT | 0x4A8F | STAT_0x4A8F_WERT | Adaption Schubabgleich Bank 1 | - | FAC_LSL_GAIN_AD[1] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A90_WERT | 0x4A90 | STAT_0x4A90_WERT | Adaption Schubabgleich Bank 2 | - | FAC_LSL_GAIN_AD[2] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A91_WERT | 0x4A91 | STAT_0x4A91_WERT | Katalysatordiagnosewert Bank1 | - | EFF_CAT_DIAG_OBD[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4A92_WERT | 0x4A92 | STAT_0x4A92_WERT | Katalysatordiagnosewert Bank2 | - | EFF_CAT_DIAG_OBD[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| SANWA | 0x4A94 | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Auslass Sollwert | °CRK | CAM_SP_IVVT_EX | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 | - | 22;2C | - | - |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass Bank 1 | °CRK | PSN_AD_CAM_EX_1 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass Bank 1 | °CRK | PSN_AD_CAM_IN_1 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x4A97_WERT | 0x4A97 | STAT_0x4A97_WERT | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | B_VSEAN_LOC | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | 0/1 | LV_SEG_AD_AVL_ER | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AA1_WERT | 0x4AA1 | STAT_0x4AA1_WERT | Angefordertes PWM-Signal, E-Lüfter | % | ECFPWM_REQ | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AA2_WERT | 0x4AA2 | STAT_0x4AA2_WERT | ECF Relais aktivieren | 0/1 | LV_ECF_RLY_ACT | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AAA_WERT | 0x4AAA | STAT_0x4AAA_WERT | Tastverhältnis Öldruck-Regelventil | % | POIL_PWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AB2_WERT | 0x4AB2 | STAT_0x4AB2_WERT | Periodendauer Luftmasse 1 | µs | T_PER_MAF_FRQ[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AB3_WERT | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Fahrstrecke mit MIL an | km | DIST_ACT_MIL | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | h | TRT | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AB5_WERT | 0x4AB5 | STAT_0x4AB5_WERT | SAP  Bewertung | 0/1 | LV_VAR_SAP | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| RTANS | 0x4AB6 | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Rohwert Ansauglufttemperatur | °C | TIA_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| RTKWA | 0x4AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Saugrohrdruck | V | V_MAP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IUSST | 0x4AB9 | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V | V_SOF_SWI | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 | - | 22;2C | - | - |
| IAKSP | 0x4ABA | STAT_KRAFTSTOFFPUMPE_PWM_WERT | PWM Kraftstoffpumpe | % | EFPPWM | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IMLUF | 0x4ABC | STAT_LUFTMASSE_WERT | Luftmasse | kg/h | MAF_KGH_MES_BAS | - | unsigned integer | - | 0,03125 | 1 | 0,0 | - | 22;2C | - | - |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV_WERT | Starterrelais aktiv | 0/1 | LV_RLY_ST | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AC2_WERT | 0x4AC2 | STAT_0x4AC2_WERT | Reset Adresse | - | STACK_ADR_RST[0][0] | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC6_WERT | 0x4AC6 | STAT_0x4AC6_WERT | berechnete Einspritzzeit, Zylinder 1 | ms | TI_1_MES_0 | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC7_WERT | 0x4AC7 | STAT_0x4AC7_WERT | berechnete Einspritzzeit, Zylinder 2 | ms | TI_1_MES_4 | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC8_WERT | 0x4AC8 | STAT_0x4AC8_WERT | berechnete Einspritzzeit, Zylinder 3 | ms | TI_1_MES_2 | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AC9_WERT | 0x4AC9 | STAT_0x4AC9_WERT | berechnete Einspritzzeit, Zylinder 4 | ms | TI_1_MES_5 | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ACA_WERT | 0x4ACA | STAT_0x4ACA_WERT | berechnete Einspritzzeit, Zylinder 5 | ms | TI_1_MES_1 | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ACB_WERT | 0x4ACB | STAT_0x4ACB_WERT | berechnete Einspritzzeit, Zylinder 6 | ms | TI_1_MES_3 | - | unsigned integer | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ACC_WERT | 0x4ACC | STAT_0x4ACC_WERT | Sollposition obere Luftklappe in Verstellschritten | - | CTR_ECRAS_UP_SP | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ACD_WERT | 0x4ACD | STAT_0x4ACD_WERT | Istposition obere Luftklappe in Verstellschritten | - | CTR_ECRAS_UP_LST | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD0_WERT | 0x4AD0 | STAT_0x4AD0_WERT | Fehlerstatus obere Luftklappe | - | STATE_ECRAS_UP_ERR | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD1_WERT | 0x4AD1 | STAT_0x4AD1_WERT | Diagnosestatus obere Luftklappe | - | STATE_ECRAS_UP_DIAG_END | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD2_WERT | 0x4AD2 | STAT_0x4AD2_WERT | Status untere Luftklappe | - | STATE_ECRAS_DOWN | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD3_WERT | 0x4AD3 | STAT_0x4AD3_WERT | Varianteninformation obere Luftklappe | - | STATE_ECRAS_UP_VAR | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD5_WERT | 0x4AD5 | STAT_0x4AD5_WERT | DME-Temperaturstatistik, Zähler 1 | - | CTR_STC_TECU_1 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD6_WERT | 0x4AD6 | STAT_0x4AD6_WERT | DME-Temperaturstatistik, Zähler 2 | - | CTR_STC_TECU_2 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD7_WERT | 0x4AD7 | STAT_0x4AD7_WERT | DME-Temperaturstatistik, Zähler 3 | - | CTR_STC_TECU_3 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD8_WERT | 0x4AD8 | STAT_0x4AD8_WERT | DME-Temperaturstatistik, Zähler 4 | - | CTR_STC_TECU_4 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AD9_WERT | 0x4AD9 | STAT_0x4AD9_WERT | DME-Temperaturstatistik, Zähler 5 | - | CTR_STC_TECU_5 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ADA_WERT | 0x4ADA | STAT_0x4ADA_WERT | DME-Temperaturstatistik, Zähler 6 | - | CTR_STC_TECU_6 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ADB_WERT | 0x4ADB | STAT_0x4ADB_WERT | DME-Temperaturstatistik, Zähler 7 | - | CTR_STC_TECU_7 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4ADC_WERT | 0x4ADC | STAT_0x4ADC_WERT | DME-Temperaturstatistik, Zähler 8 | - | CTR_STC_TECU_8 | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AE2_WERT | 0x4AE2 | STAT_0x4AE2_WERT | Resetart des letzten Resets | 0-n | STATE_RST_TYP_ACT | - | unsigned char | _CNV_S_19_ECOP_RANGE_626 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AE3_WERT | 0x4AE3 | STAT_0x4AE3_WERT | Hintegrundinformationen zum letzten gültigen Reset | 0/1 | LV_DBG_INFO_VLD[0] | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x4AE4_WERT | 0x4AE4 | STAT_0x4AE4_WERT | Zusätzliche Resetinformationen zur Resetursache | - | STATE_RST_INFO_ADD[0] | - | unsigned long | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AE5_WERT | 0x4AE5 | STAT_0x4AE5_WERT | Zähler Reset Safe | m | DIST_RST_DET[0] | - | unsigned long | - | 100,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AE6_WERT | 0x4AE6 | STAT_0x4AE6_WERT | Gesamtlaufzeit Reset Safe | h | TRT_RST_DET[0] | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AE7_WERT | 0x4AE7 | STAT_0x4AE7_WERT | CPU Last beim zurücksetzen Reset Safe | % | CPU_LOAD_MAX_RST_DET[0] | - | unsigned integer | - | 0,09765625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AE8_WERT | 0x4AE8 | STAT_0x4AE8_WERT | Geschwindigkeit bei maximaler CPU Last | rpm | N_CPU_LOAD_MAX_RST_DET[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEA_WERT | 0x4AEA | STAT_0x4AEA_WERT | Anzahl von atypischen Warm-Resets seit letzter Power-Up-Phase (BSW) | - | CTR_WRST | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEB_WERT | 0x4AEB | STAT_0x4AEB_WERT | Temperatur < 98 Grad Celsius | % | TMOT_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEC_WERT | 0x4AEC | STAT_0x4AEC_WERT | 98 Grad Celsius <= Temperatur <= 112 Grad Celsius | % | TMOT_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AED_WERT | 0x4AED | STAT_0x4AED_WERT | 113 Grad Celsius <= Temperatur <= 120 Grad Celsius | % | TMOT_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEE_WERT | 0x4AEE | STAT_0x4AEE_WERT | 121 Grad Celsius <= Temperatur <= 125 Grad Celsius | % | TMOT_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AEF_WERT | 0x4AEF | STAT_0x4AEF_WERT | Temperatur > 125 Grad Celsius | % | TMOT_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF0_WERT | 0x4AF0 | STAT_0x4AF0_WERT | Temperatur < 80 Grad Celsius | % | TOEL_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF1_WERT | 0x4AF1 | STAT_0x4AF1_WERT | 80 Grad Celsius <= Temperatur <= 110 Grad Celsius | % | TOEL_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF2_WERT | 0x4AF2 | STAT_0x4AF2_WERT | 110 Grad Celsius <= Temperatur <= 135 Grad Celsius | % | TOEL_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF3_WERT | 0x4AF3 | STAT_0x4AF3_WERT | 135 Grad Celsius <= Temperatur <= 150 Grad Celsius | % | TOEL_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF4_WERT | 0x4AF4 | STAT_0x4AF4_WERT | Temperatur > 150 Grad Celsius | % | TOEL_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF5_WERT | 0x4AF5 | STAT_0x4AF5_WERT | Temperatur < 80 Grad Celsius | % | TGET_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF6_WERT | 0x4AF6 | STAT_0x4AF6_WERT | 80 Grad Celsius <= Temperatur <= 109 Grad Celsius | % | TGET_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF7_WERT | 0x4AF7 | STAT_0x4AF7_WERT | 110 Grad Celsius <= Temperatur <= 124 Grad Celsius | % | TGET_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF8_WERT | 0x4AF8 | STAT_0x4AF8_WERT | 125 Grad Celsius <= Temperatur <= 129 Grad Celsius | % | TGET_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AF9_WERT | 0x4AF9 | STAT_0x4AF9_WERT | Temperatur > 129 Grad Celsius | % | TGET_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFA_WERT | 0x4AFA | STAT_0x4AFA_WERT | Temperatur < 3 Grad Celsius | % | TUMG_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFB_WERT | 0x4AFB | STAT_0x4AFB_WERT | 3 Grad Celsius <= Temperatur <= 19 Grad Celsius | % | TUMG_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFC_WERT | 0x4AFC | STAT_0x4AFC_WERT | 20 Grad Celsius <= Temperatur <= 29 Grad Celsius | % | TUMG_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFD_WERT | 0x4AFD | STAT_0x4AFD_WERT | 30 Grad Celsius <= Temperatur <= 39 Grad Celsius | % | TUMG_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x4AFE_WERT | 0x4AFE | STAT_0x4AFE_WERT | Temperatur > 39 Grad Celsius | % | TUMG_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5800_WERT | 0x5800 | STAT_0x5800_WERT | Zeit nach Start | s | T_AST_SAE_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5801_WERT | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | kPa | OBD_AMP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | 0-n | STATE_LS[1] | - | unsigned char | _CNV_S_6_LACO_RANGE_537 | 1 | 1 | 0 | - | 22;2C | - | - |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | 0-n | STATE_LS[2] | - | unsigned char | _CNV_S_6_LACO_RANGE_537 | 1 | 1 | 0 | - | 22;2C | - | - |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5805_WERT | 0x5805 | STAT_0x5805_WERT | Kühlmitteltemperatur OBD | °C | OBD_TCO | - | unsigned char | - | 1,0 | 1 | -40,0 | - | 22;2C | - | - |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda Integrator Gruppe 1 | % | OBD_LAM_COR[1] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 | - | 22;2C | - | - |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lambda Adaption Summe mul. und add. Gruppe 1 | % | OBD_LAM_AD[1] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 | - | 22;2C | - | - |
| ILIN2 | 0x5808 | STAT_LAMBDA_INTEGRATOR_GRUPPE2_WERT | Lambda Integrator Gruppe 2 | % | OBD_LAM_COR[2] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 | - | 22;2C | - | - |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Lambda Adaption Summe mul. und add. Gruppe 2 | % | OBD_LAM_AD[2] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 | - | 22;2C | - | - |
| IPSA2 | 0x580B | STAT_SAUGROHRDRUCK_2_WERT | Saugrohrdruck | kPa | MAP_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Drehzahl | rpm | OBD_N_H | - | unsigned char | - | 64,0 | 1 | 0,0 | - | 22;2C | - | - |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündzeitpunkt Zylinder 1 | °CRK | OBD_IGA_IGC | - | unsigned char | - | 0,5 | 1 | -64,0 | - | 22;2C | - | - |
| ITANL | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_LOW_WERT | Ansauglufttemperatur | °C | OBD_TIA | - | unsigned char | - | 1,0 | 1 | -40,0 | - | 22;2C | - | - |
| ILMGS | 0x5810 | STAT_LUFTMASSE_GRAMM_PRO_SEKUNDE_WERT | Luftdurchsatz OBD | g/s | OBD_MAF_H | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 | - | 22;2C | - | - |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5812_WERT | 0x5812 | STAT_0x5812_WERT | Luftmasse gemessen | kg/h | MAF_KGH_MES_BAS_KWP | - | unsigned char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | % | RF_KWP | - | signed char | - | 2,559999942779541 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5815_WERT | 0x5815 | STAT_0x5815_WERT | Batteriespannung | V | OBD_VB_H | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5816_WERT | 0x5816 | STAT_0x5816_WERT | Lambda Setpoint | - | OBD_LAMB_SP_H | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5817_WERT | 0x5817 | STAT_0x5817_WERT | Umgebungstemperatur | °C | OBD_TAM | - | unsigned char | - | 1,0 | 1 | -40,0 | - | 22;2C | - | - |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmasse gerechnet | mg/stk | MAF_KWP | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5819_WERT | 0x5819 | STAT_0x5819_WERT | Drehzahl OBD Byte | rpm | N_SAE_BYTE_KWP | - | unsigned char | - | 64,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x581A_WERT | 0x581A | STAT_0x581A_WERT | Position Einspritzung CAM VVTI | °CRK | CAM_IN_KWP | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 | - | 22;2C | - | - |
| STAT_0x581B_WERT | 0x581B | STAT_0x581B_WERT | Anfangspunkt für VVTI | °CRK | CAM_SP_IVVT_IN_KWP | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 | - | 22;2C | - | - |
| STAT_0x581C_WERT | 0x581C | STAT_0x581C_WERT | Nockenwelle Auslass | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 | - | 22;2C | - | - |
| STAT_0x581D_WERT | 0x581D | STAT_0x581D_WERT | Nockenwelle Auslass Sollwert | °CRK | CAM_SP_IVVT_EX | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 | - | 22;2C | - | - |
| STAT_0x581E_WERT | 0x581E | STAT_0x581E_WERT | Ansauglufttemperatur | °C | TIA_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| ITMOT | 0x581F | STAT_MOTORTEMPERATUR_WERT | Motortemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | (Motor)-Öltemperatur | °C | TOIL_MES | - | unsigned char | - | 1,0 | 1 | -40,0 | - | 22;2C | - | - |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Zeit Motor steht | min | T_ES_H | - | unsigned char | - | 256,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5824_WERT | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x5825_WERT | 0x5825 | STAT_0x5825_WERT | Abstellzeit | min | T_ES_CUS_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5826_WERT | 0x5826 | STAT_0x5826_WERT | Drosselklappe 2 Sollwert | °TPS | TPS_AV_1_KWP | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5827_WERT | 0x5827 | STAT_0x5827_WERT | Lambdasondenheizung vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5828_WERT | 0x5828 | STAT_0x5828_WERT | Lambdasondenheizung vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5829_WERT | 0x5829 | STAT_0x5829_WERT | Lambdasondenheizung hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582A_WERT | 0x582A | STAT_0x582A_WERT | Lambdasondenheizung hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomenteingriff über CAN | - | STATE_TQ_CAN_PLAUS | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582C_WERT | 0x582C | STAT_0x582C_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | CTR_ERR_LSL_IF_SPI_WR[1] | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582D_WERT | 0x582D | STAT_0x582D_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | CTR_ERR_LSL_IF_SPI_WR[2] | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582E_WERT | 0x582E | STAT_0x582E_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | FAC_DIAG_DYN_LSL_UP_KWP[1] | - | unsigned char | - | 0,00390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x582F_WERT | 0x582F | STAT_0x582F_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | FAC_DIAG_DYN_LSL_UP_KWP[2] | - | unsigned char | - | 0,00390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5830_WERT | 0x5830 | STAT_0x5830_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | FAC_MV_DIAG_DYN_LSL_UP_KWP[1] | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5831_WERT | 0x5831 | STAT_0x5831_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | FAC_MV_DIAG_DYN_LSL_UP_KWP[2] | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 | - | 22;2C | - | - |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Motor Status | 0-n | STATE_ENG | - | unsigned char | _CNV_S_6_RANGE_STAT_123 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x5833_WERT | 0x5833 | STAT_0x5833_WERT | Umgebungstemperatur beim Start | °C | TAM_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | hPa | AMP_MES_KWP | - | unsigned char | - | 5,306640625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5835_WERT | 0x5835 | STAT_0x5835_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | rpm/s | N_GRD | - | signed char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | STATE_ERR_EL_LSL_UP[1] | - | unsigned char | _CNV_S_11_EGCP_RANGE_493 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | STATE_ERR_EL_LSL_UP[2] | - | unsigned char | _CNV_S_11_EGCP_RANGE_493 | 1 | 1 | 0 | - | 22;2C | - | - |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Status Drosselklappe Notlauf | 0-n | STATE_ETC_LIH | - | unsigned char | _CNV_S_6_RANGE_STAT_290 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansauglufttemperatur beim Start | °C | TIA_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | l | FTL | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | V | VB | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583D_WERT | 0x583D | STAT_0x583D_WERT | Resettyp | 0-n | STATE_RST_TYP[0] | - | unsigned char | _CNV_S_19_ECOP_RANGE_626 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x583E_WERT | 0x583E | STAT_0x583E_WERT | Motordrehzahl bei Reset | rpm | N_RST_DET_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x583F_WERT | 0x583F | STAT_0x583F_WERT | Drosselklappe Sollwert | °TPS | TPS_SP_KWP | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5840_WERT | 0x5840 | STAT_0x5840_WERT | CPU Last bei Reset | % | CPU_LOAD_RST_DET_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| RTSGR | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_ROH_WERT | SG-Innentemperatur Rohwert | V | VP_TECU_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5842_WERT | 0x5842 | STAT_0x5842_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5843_WERT | 0x5843 | STAT_0x5843_WERT | Versorgung Fahrwertgeber 1 | V | VCC_PVS_1_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5844_WERT | 0x5844 | STAT_0x5844_WERT | Chiptemperatur Generator 1 | °C | TCHIP_KWP | - | unsigned char | - | 1,0 | 1 | -48,0 | - | 22;2C | - | - |
| STAT_0x5845_WERT | 0x5845 | STAT_0x5845_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5846_WERT | 0x5846 | STAT_0x5846_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5847_WERT | 0x5847 | STAT_0x5847_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5848_WERT | 0x5848 | STAT_0x5848_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5849_WERT | 0x5849 | STAT_0x5849_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| RUK15 | 0x584A | STAT_KL15_SPANNUNG_ROH_WERT | Spannung Kl. 15 Rohwert | V | V_IGK_BAS_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x584B_WERT | 0x584B | STAT_0x584B_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x584C_WERT | 0x584C | STAT_0x584C_WERT | Spannung Drosselklappe Potentiometer 2 | V | V_TPS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | FLOW_COR_CPS_KWP | - | unsigned char | - | 0,03125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x584E_WERT | 0x584E | STAT_0x584E_WERT | Spannung Drosselklappe Potentiometer 1 | V | V_TPS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x584F_WERT | 0x584F | STAT_0x584F_WERT | Erkennung Bordnetzinstabilität | - | STAT_BNSERR | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5850_WERT | 0x5850 | STAT_0x5850_WERT | Spannung Motortemperatur | V | VP_TCO_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5851_WERT | 0x5851 | STAT_0x5851_WERT | Spannung Ansauglufttemperatur, Sensor | V | VP_TIA_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5852_WERT | 0x5852 | STAT_0x5852_WERT | Kühlmitteltemperatur Kühlerausgang Rohwert | V | V_TCO_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5853_WERT | 0x5853 | STAT_0x5853_WERT | Spannung Kl.87 Rohwert | V | VB_BAS_KWP | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5854_WERT | 0x5854 | STAT_0x5854_WERT | Versorgung Fahrwertgeber 2 | V | VCC_PVS_2_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | Mittelwert Bank 1 | % | FAC_LAM_MV_MMV_KWP[1] | - | signed char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5856_WERT | 0x5856 | STAT_0x5856_WERT | Mittelwert Bank 2 | % | FAC_LAM_MV_MMV_KWP[2] | - | signed char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5857_WERT | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 | - | 22;2C | - | - |
| IADKA | 0x5858 | STAT_AKTUELLER_DK_WINKEL_WERT | Drosselklappe aktueller Wert | °TPS | TPS_AV_KWP | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5859_WERT | 0x5859 | STAT_0x5859_WERT | DMTL Strom Referenzleck | mA | CUR_DMTL_REF_LEAK_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x585A_WERT | 0x585A | STAT_0x585A_WERT | DMTL Strom Grobleck | mA | CUR_DMTL_ROUGH_LEAK_MIN_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x585B_WERT | 0x585B | STAT_0x585B_WERT | DMTL Strom Diagnoseende | mA | CUR_DMTL_COR_FIL_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x585C_WERT | 0x585C | STAT_0x585C_WERT | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | R_IT_LS_DOWN_KWP_H[1] | - | unsigned char | - | 256,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_WERT | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | R_IT_LS_DOWN_KWP_H[2] | - | unsigned char | - | 256,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | R_IT_LS_DOWN_KWP_L[1] | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | R_IT_LS_DOWN_KWP_L[2] | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | R_IT_LS_UP_KWP_H[1] | - | unsigned char | - | 64,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | R_IT_LS_UP_KWP_H[2] | - | unsigned char | - | 64,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5862_WERT | 0x5862 | STAT_0x5862_WERT | Öldruck Sollwert | hPa | P_OEL_SOLL_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | R_IT_LS_UP_KWP_L[1] | - | unsigned char | - | 0,25 | 1 | 0,0 | - | 22;2C | - | - |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | R_IT_LS_UP_KWP_L[2] | - | unsigned char | - | 0,25 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5865_WERT | 0x5865 | STAT_0x5865_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5866_WERT | 0x5866 | STAT_0x5866_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5867_WERT | 0x5867 | STAT_0x5867_WERT | Kilometerstand | km | CTR_KM_CAN_KWP | - | unsigned char | - | 2560,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | STAT_SV_REG1 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | STAT_SV_REG2 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x586A_WERT | 0x586A | STAT_0x586A_WERT | Batteriespannung von IBS gemessen | V | U_BATT_KWP | - | unsigned char | - | 0,06400000303983688 | 1 | 6,0 | - | 22;2C | - | - |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA | min | T2HISTSHORT | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 | - | 22;2C | - | - |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit mit Ruhestrom 200 - 1000 mA | min | T3HISTSHORT | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 | - | 22;2C | - | - |
| IZSST | 0x586D | STAT_ZAEHLER_ERKENNUNG_SCHLECHTE_STRASSE_WERT | Zähler Erkennung schlechte Strasse | - | SUM_RR_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit mit Ruhestrom größer 1000 mA | min | T4HISTSHORT | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x586F_WERT | 0x586F | STAT_0x586F_WERT | Ist Öldruck | hPa | P_OEL_IST_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5870_WERT | 0x5870 | STAT_0x5870_WERT | Spannung DME Umgebungsdruck | V | V_AMP_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| SLAG1 | 0x5871 | STAT_LAMBDA_SOLLWERT_GRUPPE1_WERT | Lambda-Sollwert Gruppe 1 | - | LAMB_SP_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5872_WERT | 0x5872 | STAT_0x5872_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert Gruppe 2 | - | LAMB_SP_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5874_WERT | 0x5874 | STAT_0x5874_WERT | Spannung Strommessung DMTL | V | V_DMTL_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5875_WERT | 0x5875 | STAT_0x5875_WERT | Sollwert Motormoment | Nm | TQI_SP_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5876_WERT | 0x5876 | STAT_0x5876_WERT | Mittelwert der sekundären Luftmasse am SAE | kg/h | SAF_DIAG_MIN_SAE_KWP | - | unsigned char | - | 0,03125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5877_WERT | 0x5877 | STAT_0x5877_WERT | SAE Wertebereich | kg/h | SAF_KGH_DIF_SAE_KWP | - | unsigned char | - | 0,03125 | 1 | 0,0 | - | 22;2C | - | - |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | - | LAMB_DELTA_I_LAM_ADJ_KWP[1] | - | signed char | - | 9,765625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | - | LAMB_DELTA_I_LAM_ADJ_KWP[2] | - | signed char | - | 9,765625E-4 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x587B_WERT | 0x587B | STAT_0x587B_WERT | maximaler Stromerwartungswert der Drossel | A^2 | CUR_CUR_EFC_MAX_DR_VVL_KWP | - | unsigned char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| ISMST | 0x587C | STAT_MOTORSTEUERUNG_WERT | Status Motorsteuerung | 0-n | ECU_STATE | - | unsigned char | _CNV_S_7_RANGE_ECU__119 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[1] | - | unsigned char | _CNV_S_4_EGCP_RANGE_503 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x587E_WERT | 0x587E | STAT_0x587E_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[2] | - | unsigned char | _CNV_S_4_EGCP_RANGE_503 | 1 | 1 | 0 | - | 22;2C | - | - |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5880_WERT | 0x5880 | STAT_0x5880_WERT | Ansteuerung untere Luftklappe | 0/1 | LV_ECRAS_DOWN_1 | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | - | GEAR | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | °C | TCO_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 | - | 22;2C | - | - |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | V | NL_KWP[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Rückgelesener Erregergrenzstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | V | NL_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5886_WERT | 0x5886 | STAT_0x5886_WERT | Spannung Klopfwerte Zylinder 6 | V | NL_KWP[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5887_WERT | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | V | NL_KWP[5] | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert Gruppe 1 | - | LAMB_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Gruppe 2 | - | LAMB_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | s | T_AST_SAE_H_KWP | - | unsigned char | - | 256,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | TTIP_MES_LS_UP_KWP[1] | - | signed char | - | 16,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit DMTL Leckmessung | s | T_ACT_LEAK_MES_KWP | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 | - | 22;2C | - | - |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom bei DMTL Pumpenprüfung | mA | CUR_DMTL_DMTLS_TEST_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 | - | 22;2C | - | - |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | TTIP_MES_LS_UP_KWP[2] | - | signed char | - | 16,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5890_WERT | 0x5890 | STAT_0x5890_WERT | Gemessene Spannung vom DCDC Wandler gegen Masse | V | V_DCDC_LIN_LOW_KWP | - | unsigned char | - | 0,25 | 1 | 0,0 | - | 22;2C | - | - |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | Nm | TQ_REQ_CLU_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5892_WERT | 0x5892 | STAT_0x5892_WERT | Startpunkt der Positionssteuerung | % | ANG_SP_CTL_VVL_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | Nm | TQI_GS_FAST_DEC_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[1] | - | unsigned char | _CNV_S_4_EGCP_RANGE_496 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x5895_WERT | 0x5895 | STAT_0x5895_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[2] | - | unsigned char | _CNV_S_4_EGCP_RANGE_496 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Katalysator Bank 1 | °C | TEG_CAT_DOWN_MDL_KWP[1] | - | signed char | - | 16,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5897_WERT | 0x5897 | STAT_0x5897_WERT | Abgastemperatur hinter Katalysator Bank 2 | °C | TEG_CAT_DOWN_MDL_KWP[2] | - | signed char | - | 16,0 | 1 | 0,0 | - | 22;2C | - | - |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Generator Sollspannung | V | V_ALTER_SP_KWP | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x5899_WERT | 0x5899 | STAT_0x5899_WERT | DISA position | % | VIM_AV_KWP | - | unsigned char | - | 0,78125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x589A_WERT | 0x589A | STAT_0x589A_WERT | gewählter momentaner Grad an Jitter | ° | ANG_EXC_VVL_KWP | - | unsigned char | - | 0,78125 | 1 | 0,0 | - | 22;2C | - | - |
| IUOS1 | 0x589B | STAT_SPANNUNGSOFFSET_SIGNALPFAD1_WERT | Spannungsoffset Signalpfad CJ120 1 | V | VLS_OFS_LSL_KWP[1] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 | - | 22;2C | - | - |
| IUOS2 | 0x589C | STAT_SPANNUNGSOFFSET_SIGNALPFAD2_WERT | Spannungsoffset Signalpfad CJ120 2 | V | VLS_OFS_LSL_KWP[2] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 | - | 22;2C | - | - |
| STAT_0x589D_WERT | 0x589D | STAT_0x589D_WERT | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | STATE_DIAG_DR_VVL | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x589E_WERT | 0x589E | STAT_0x589E_WERT | Relay Status | 0-n | STATE_RLY_VVL_ADJ_EXT | - | unsigned char | _CNV_S_3_STATE_RLY__343 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x589F_WERT | 0x589F | STAT_0x589F_WERT | Motorgeschwindigkeit | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0x58A0_WERT | Batterietemperatur | °C | T_BATT_KWP | - | signed char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A1_WERT | 0x58A1 | STAT_0x58A1_WERT | Entladung während Ruhestromverletzung | Ah | Q_IRUHE2_KWP | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0x58A2_WERT | Wasserpumpe Stromaufnahme | A | CUR_CNS_CWP_SEC | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0x58A3_WERT | relative Wasserpumpenspannung | % | REL_CWP_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A4_WERT | 0x58A4 | STAT_0x58A4_WERT | Status Generator | - | ST_GEN | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A5_WERT | 0x58A5 | STAT_0x58A5_WERT | Generatorauslastung | % | DFFGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0x58A6_WERT | Generatorspannung | V | U_GEN_KWP | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A7_WERT | 0x58A7 | STAT_0x58A7_WERT | Abstellzeit in min | min | TN_ABSTELLM_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Motorabstellzeit | min | T_ES_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | Resetzähler Rechnerüberwachung: alter Wert | - | ENVD_3_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Fehlercode Rechnerüberwachung: alter Wert | - | ENVD_2_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IADK1 | 0x58AB | STAT_ABWEICHUNG_DK_POTI1_WERT | Abweichung DK-Potentiometer 1 und Modellwert | mg/stk | TPS_MAF_DIF_INT_1_KWP | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 | - | 22;2C | - | - |
| IADK2 | 0x58AC | STAT_ABWEICHUNG_DK_POTI2_WERT | Abweichung DK-Potentiometer 2 und Modellwert | mg/stk | TPS_MAF_DIF_INT_2_KWP | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 | - | 22;2C | - | - |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Pedalwertgeber 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58AE_WERT | 0x58AE | STAT_0x58AE_WERT | Periodendauer Luftmasse | us | T_PER_MAF_FRQ_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | Kraftstoff Anforderung an Pumpe | l/h | VFF_EFP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | DK-Adaptionsschritt | - | TPS_AD_STEP_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 | ms | V_DUR_IGC_KWP[0] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Funkenbrenndauer Zylinder 5 | ms | V_DUR_IGC_KWP[1] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 | ms | V_DUR_IGC_KWP[2] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Funkenbrenndauer Zylinder 6 | ms | V_DUR_IGC_KWP[3] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Funkenbrenndauer Zylinder 2 | ms | V_DUR_IGC_KWP[4] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 | - | 22;2C | - | - |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 | ms | V_DUR_IGC_KWP[5] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | rpm | N_32_MON | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | % | PV_AV_MON | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BA_WERT | 0x58BA | STAT_0x58BA_WERT | Statusbyte 3 Sendesignale Überwachung | - | STATE_LV_ERR_COM_MON_1_3 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BB_WERT | 0x58BB | STAT_0x58BB_WERT | PWM Kraftstoffpumpe | % | EFPPWM_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | mg/stk | MAF_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BD_WERT | 0x58BD | STAT_0x58BD_WERT | Luftmassenmodellwert für Siko | mg/stk | MAF_SUB_COR_MMV_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58BE_WERT | 0x58BE | STAT_0x58BE_WERT | Getriebetemperatur | °C | TEMP_GB | - | unsigned char | - | 1,0 | 1 | -40,0 | - | 22;2C | - | - |
| STAT_0x58BF_WERT | 0x58BF | STAT_0x58BF_WERT | Statusbyte vom Error Memory Management | - | STATE_LV_ERR_COM_MON_1 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | Motordrehzahl Ersatzwert Überwachung | rpm | N_32_SUB_MON | - | unsigned char | - | 32,0 | 1 | 0,0 | - | 22;2C | - | - |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit | µs | SEG_T_MES_KWP_H | - | unsigned char | - | 7812,21826171875 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C2_WERT | 0x58C2 | STAT_0x58C2_WERT | Statusbyte MFF-Monitoring | % | ANG_SP_CTL_VVL_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C3_WERT | 0x58C3 | STAT_0x58C3_WERT | Statusbyte ISC-Monitoring | % | PWM_DR_OUT_SET_VVL_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C4_WERT | 0x58C4 | STAT_0x58C4_WERT | Statusbyte CRU-Monitoring | V | VCC_DR_VVL_KWP | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C5_WERT | 0x58C5 | STAT_0x58C5_WERT | Drehzahl Überwachung (resetsicher) | V | V_VCC_SENS_VVL_KWP | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C6_WERT | 0x58C6 | STAT_0x58C6_WERT | Status Einspritzventile (resetsicher) | ° | ANG_DE_ABSV_PLAUS_CHK_VVL_KWP | - | unsigned char | - | 0,703125 | 1 | 0,0 | - | 22;2C | - | - |
| INSUE | 0x58C7 | STAT_LEERLAUF_SOLLDREHZAHLABWEICHUNG_WERT | LL-Solldrehzahlabweichung Überwachung | rpm | N_DIF_SP_IS_MON | - | unsigned char | - | 32,0 | 1 | -4096,0 | - | 22;2C | - | - |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | I-Anteil Momentdifferenz Überwachung und Modell | Nm | TQ_DIF_I_IS_MON_KWP | - | signed char | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58C9_WERT | 0x58C9 | STAT_0x58C9_WERT | I-Anteil LL passive Rampe aktiv | 0/1 | LV_PAS_RAMP_ACT_I_IS | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | Nm | TQ_DIF_P_D_SLOW_IS_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | Nm | TQ_DIF_P_D_FAST_IS_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | Nm | TQ_LOSS_MON_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STATE_0x58CD_WERT | 0x58CD | STATE_0x58CD_WERT | Entladung während Ruhestromverletzung | Ah | Q_IRUHE2_KWP | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58CE_WERT | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | STATE_BYTE_SWI_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Motormoment Sollwert Überwachung | Nm | TQI_SP_MON | - | unsigned char | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Motormoment Istwert Überwachung | Nm | TQI_AV_MON | - | unsigned char | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | Nm | TQI_AV_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D2_WERT | 0x58D2 | STAT_0x58D2_WERT | Sollposition obere Luftklappe in Grad | Grad | ANG_ECRAS_UP_SP | - | unsigned char | - | 256,0 | 1 | -95,0 | - | 22;2C | - | - |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0x58D3_WERT | Istposition obere Luftklappe in Grad | Grad | ANG_ECRAS_UP | - | unsigned char | - | 256,0 | 1 | -95,0 | - | 22;2C | - | - |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Abweichung maximales Moment an Kupplung Überwachung | Nm | TQ_MAX_CLU_DIF_MON_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0x58D5_WERT | Ansauglufttemperatur im Laderstrang | °C | TEMP_SWI_MES_MAX_VVL_KWP | - | signed char | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D6_WERT | 0x58D6 | STAT_0x58D6_WERT | Abweichung minimales Moment an Kupplung Überwachung | Nm | TQ_MIN_CLU_DIF_MON_KWP | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D7_WERT | 0x58D7 | STAT_0x58D7_WERT | momentaner Motorstrom | A | CUR_MOT_VVL_3_KWP | - | signed char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0x58D8_WERT | erwartete DC Motortemperatur | °C | TEMP_MOT_VVL_KWP | - | signed char | - | 2,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Fehlercode Rechnerüberwachung: aktueller Wert | - | ENVD_0_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | Resetzähler Rechnerüberwachung: aktueller Wert | - | ENVD_1_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| IUSPS | 0x58DF | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V | V_SOF_SWI_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0x58E0_WERT | Abgleich Drosselklappenmodell (Faktor) | - | EISYDK_KORFAK_B | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0x58E1_WERT | Abgleich Drosselklappenmodell (Offset) | kg/h | EISYDK_KOROFF_B | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0x58E2_WERT | Abgleich Einlassventilmodell (Faktor) | - | EISYEV_KORFAK_B | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0x58E3_WERT | Abgleich Einlassventilmodell (Offset) | kg/h | EISYEV_KOROFF_B | - | signed char | - | 8,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Betriebsart Istwert | 0-n | BA_IST | - | unsigned char | _CNV_S_7__CNV_S_7_D_807 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x58E5_WERT | 0x58E5 | STAT_0x58E5_WERT | Lastwert für Aussetzererkennung | % | LOAD_MIS_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E6_WERT | 0x58E6 | STAT_0x58E6_WERT | Nulllastwert für Aussetzererkennung | % | LOAD_MIN_MIS_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E7_WERT | 0x58E7 | STAT_0x58E7_WERT | Spannung Pedalwertgeber 1 Überwachung | V | V_PVS_1_MON_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58E8_WERT | 0x58E8 | STAT_0x58E8_WERT | Spannung Pedalwertgeber 2 Überwachung | V | V_PVS_2_MON_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 | - | 22;2C | - | - |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | Wasserpumpe Spannung | V | V_CWP | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58EA_WERT | 0x58EA | STAT_0x58EA_WERT | Wasserpumpe Drehzahl | - | N_REL_CWP | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| INWSI | 0x58EB | STAT_WASSERPUMPE_DREHZAHL_SOLL_IST_DIFFERENZ_WERT | Wasserpumpe Drehzahl Soll-Ist-Differenz | - | N_REL_CWP_DIF | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58EC_WERT | 0x58EC | STAT_0x58EC_WERT | Wasserpumpe Temperatur Elektronik | °C | TEMP_EL_CWP | - | unsigned char | - | 1,0 | 1 | -50,0 | - | 22;2C | - | - |
| STAT_0x58ED_WERT | 0x58ED | STAT_0x58ED_WERT | Moment der elektrischen Wasserpumpe | A | CUR_CNS_CWP | - | unsigned char | - | 0,5 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58EE_WERT | 0x58EE | STAT_0x58EE_WERT | relative CWP Leistung | % | REL_CWP_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58EF_WERT | 0x58EF | STAT_0x58EF_WERT | Temperatur Getriebeöltemperaturmodell | °C | TWANDLER_SIM | - | signed char | - | 2,559999942779541 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0x58F0_WERT | Raildruck Bank 2 | hPa | FUP_KWP | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 | - | 22;2C | - | - |
| IDMEL | 0x58F1 | STAT_DME_LOSNUMMER_WERT | DME - Losnummer | 0-n | STATE_LRN_ECU_KWP | - | unsigned char | _CNV_S_13_RANGE_STAT_604 | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0x58F3_WERT | Kraftstoffdruck vor Mengensteuerventil | hPa | FUP_EFP_KWP | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0x58F4_WERT | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | V_FUP_EFP_MV_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0x58F5_WERT | Eingangssignal Rückführregler 1 | V | VLS_DIF_LAM_ADJ_KWP[1] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 | - | 22;2C | - | - |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0x58F6_WERT | Eingangssignal Rückführregler 2 | V | VLS_DIF_LAM_ADJ_KWP[2] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 | - | 22;2C | - | - |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0x58F7_WERT | Laufunruhe Segmentzeit | µs | SEG_T_MES_KWP_L | - | unsigned char | - | 30,516477584838867 | 1 | 0,0 | - | 22;2C | - | - |
| ILSA5 | 0x58F8 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL5_WERT | Segmentadaption Laufunruhe Zyl. 5 | %. | SEG_AD_MMV_ER_KWP[1] | - | signed char | - | 0,0610351525247097 | 1 | 7,843136878244668E-8 | - | 22;2C | - | - |
| ILSA3 | 0x58F9 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL3_WERT | Segmentadaption Laufunruhe Zyl. 3 | %. | SEG_AD_MMV_ER_KWP[2] | - | signed char | - | 0,0610351525247097 | 1 | 7,843136878244668E-8 | - | 22;2C | - | - |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | CL_MMV_SAE_KWP | - | unsigned char | - | 0,0078125 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58FB_WERT | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | SUM_DIAG_DIAGCPS_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| STAT_0x58FC_WERT | 0x58FC | STAT_0x58FC_WERT | Katheizen aktiv | 0/1 | LV_WUP | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |
| STAT_0x58FD_WERT | 0x58FD | STAT_0x58FD_WERT | Statusbyte 2 Sendesignale Überwachung | - | STATE_LV_ERR_COM_MON_1_2 | - | unsigned char | - | 1,0 | 1 | 0,0 | - | 22;2C | - | - |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 | - | 22;2C | - | - |

### _CNV_S_11_EGCP_RANGE_491

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_FAULT |
| 0x01 | SCG_LINE_RCD |
| 0x02 | SCG_LINE_VIP |
| 0x03 | SCG_LINE_VG |
| 0x04 | SCG_LINE_VN |
| 0x05 | SCG |
| 0x06 | SCBAT_LINE_RCD |
| 0x07 | SCBAT_LINE_VIP |
| 0x08 | SCBAT_LINE_VG |
| 0x09 | SCBAT_LINE_VN |
| 0x0A | SCBAT |
| 0xFF | undefiniert |

### _CNV_S_11_EGCP_RANGE_493

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_FAULT |
| 0x01 | SCG_LINE_RCD |
| 0x02 | SCG_LINE_VIP |
| 0x03 | SCG_LINE_VG |
| 0x04 | SCG_LINE_VN |
| 0x05 | SCG |
| 0x06 | SCBAT_LINE_RCD |
| 0x07 | SCBAT_LINE_VIP |
| 0x08 | SCBAT_LINE_VG |
| 0x09 | SCBAT_LINE_VN |
| 0x0A | SCBAT |
| 0xFF | undefiniert |

### _CNV_S_11_EGCP_RANGE_499

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_FAULT |
| 0x01 | SCG_LINE_RCD |
| 0x02 | SCG_LINE_VIP |
| 0x03 | SCG_LINE_VG |
| 0x04 | SCG_LINE_VN |
| 0x05 | SCG |
| 0x06 | SCBAT_LINE_RCD |
| 0x07 | SCBAT_LINE_VIP |
| 0x08 | SCBAT_LINE_VG |
| 0x09 | SCBAT_LINE_VN |
| 0x0A | SCBAT |
| 0xFF | undefiniert |

### _CNV_S_12__CNV_S_12__830

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine |
| 0x01 | WARMLAUF |
| 0x02 | ECO |
| 0x03 | NORMAL |
| 0x04 | HIGH |
| 0x05 | HIGH+KFT |
| 0x06 | BAUTEILSCHUTZ |
| 0x07 | HEIZLEISTUNG |
| 0x08 | NOTLAUF |
| 0x09 | APPLIKATION |
| 0x0A | Befuellen/Entlueften |
| 0x0B | Verbrennungsmotor steht |
| 0xFF | undefiniert |

### _CNV_S_12__CNV_S_12__846

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine |
| 0x01 | WARMLAUF |
| 0x02 | ECO |
| 0x03 | NORMAL |
| 0x04 | HIGH |
| 0x05 | HIGH+KFT |
| 0x06 | BAUTEILSCHUTZ |
| 0x07 | HEIZLEISTUNG |
| 0x08 | NOTLAUF |
| 0x09 | APPLIKATION |
| 0x0A | Befuellen/Entlueften |
| 0x0B | Verbrennungsmotor steht |
| 0xFF | undefiniert |

### _CNV_S_12__CNV_S_12__850

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine |
| 0x01 | WARMLAUF |
| 0x02 | ECO |
| 0x03 | NORMAL |
| 0x04 | HIGH |
| 0x05 | HIGH+KFT |
| 0x06 | BAUTEILSCHUTZ |
| 0x07 | HEIZLEISTUNG |
| 0x08 | NOTLAUF |
| 0x09 | APPLIKATION |
| 0x0A | Befuellen/Entlueften |
| 0x0B | Verbrennungsmotor steht |
| 0x0C | Netzladen |
| 0xFF | undefiniert |

### _CNV_S_12__CNV_S_12__853

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine |
| 0x01 | WARMLAUF |
| 0x02 | ECO |
| 0x03 | NORMAL |
| 0x04 | HIGH |
| 0x05 | HIGH+KFT |
| 0x06 | BAUTEILSCHUTZ |
| 0x07 | HEIZLEISTUNG |
| 0x08 | NOTLAUF |
| 0x09 | APPLIKATION |
| 0x0A | Befuellen/Entlueften |
| 0x0B | Verbrennungsmotor steht |
| 0xFF | undefiniert |

### _CNV_S_13_RANGE_STAT_597

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ROM_NOT_PLAUS |
| 0x11 | LEARNING_FAILED |
| 0x3D | LOT8 |
| 0x5A | LOT1 |
| 0x79 | LOT5 |
| 0x97 | LOT9 |
| 0xA5 | LOT2 |
| 0xAE | LOT4 |
| 0xBC | SERIAL_ECU |
| 0xCB | LOT6 |
| 0xD3 | LOT7 |
| 0xEA | LOT3 |
| 0xFF | NOT LEARNED |

### _CNV_S_13_RANGE_STAT_604

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ROM_NOT_PLAUS |
| 0x11 | LEARNING_FAILED |
| 0x3D | LOT8 |
| 0x5A | LOT1 |
| 0x79 | LOT5 |
| 0x97 | LOT9 |
| 0xA5 | LOT2 |
| 0xAE | LOT4 |
| 0xBC | SERIAL_ECU |
| 0xCB | LOT6 |
| 0xD3 | LOT7 |
| 0xEA | LOT3 |
| 0xFF | NOT LEARNED |

### _CNV_S_13_RANGE_STAT_608

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ROM_NOT_PLAUS |
| 0x11 | LEARNING_FAILED |
| 0x3D | LOT8 |
| 0x5A | LOT1 |
| 0x79 | LOT5 |
| 0x97 | LOT9 |
| 0xA5 | LOT2 |
| 0xAE | LOT4 |
| 0xBC | SERIAL_ECU |
| 0xCB | LOT6 |
| 0xD3 | LOT7 |
| 0xEA | LOT3 |
| 0xFF | NOT LEARNED |

### _CNV_S_13_RANGE_STAT_609

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ROM_NOT_PLAUS |
| 0x11 | LEARNING_FAILED |
| 0x3D | LOT8 |
| 0x5A | LOT1 |
| 0x79 | LOT5 |
| 0x97 | LOT9 |
| 0xA5 | LOT2 |
| 0xAE | LOT4 |
| 0xBC | SERIAL_ECU |
| 0xCB | LOT6 |
| 0xD3 | LOT7 |
| 0xEA | LOT3 |
| 0xFF | NOT LEARNED |

### _CNV_S_13__CNV_S_13__856

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine |
| 0x01 | WARMLAUF |
| 0x02 | ECO |
| 0x03 | NORMAL |
| 0x04 | HIGH |
| 0x05 | HIGH+KFT |
| 0x06 | BAUTEILSCHUTZ |
| 0x07 | HEIZLEISTUNG |
| 0x08 | NOTLAUF |
| 0x09 | APPLIKATION |
| 0x0A | Befuellen/Entlueften |
| 0x0B | Verbrennungsmotor steht |
| 0x0C | Netzladen |
| 0xFF | undefiniert |

### _CNV_S_19_ECOP_RANGE_618

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO |
| 0x01 | DET_ERROR |
| 0x02 | DISABLED |
| 0x10 | PORST_UNINTENDED |
| 0x11 | PORST_CPL_FAIL |
| 0x12 | PORST_INTENDED |
| 0x13 | PORST_VDD_ERROR |
| 0x20 | EXTRST_UNINTENDED |
| 0x30 | WDTRST_UNINTENDED |
| 0x40 | LLRST_UNINTENDED |
| 0x50 | LCRST_UNINTENDED |
| 0x60 | CSRST_UNINTENDED |
| 0xA0 | SWRST_UNINTENDED |
| 0xA1 | SWRST_CPL_FAIL |
| 0xA2 | SWRST_INTENDED |
| 0xA3 | SWRST_VDD_ERROR |
| 0xA4 | SWRST_EXCEPTION |
| 0xA5 | SWRST_NMI |
| 0xA6 | SWRST_ERROR |
| 0xFF | undefiniert |

### _CNV_S_19_ECOP_RANGE_625

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO |
| 0x01 | DET_ERROR |
| 0x02 | DISABLED |
| 0x10 | PORST_UNINTENDED |
| 0x11 | PORST_CPL_FAIL |
| 0x12 | PORST_INTENDED |
| 0x13 | PORST_VDD_ERROR |
| 0x20 | EXTRST_UNINTENDED |
| 0x30 | WDTRST_UNINTENDED |
| 0x40 | LLRST_UNINTENDED |
| 0x50 | LCRST_UNINTENDED |
| 0x60 | CSRST_UNINTENDED |
| 0xA0 | SWRST_UNINTENDED |
| 0xA1 | SWRST_CPL_FAIL |
| 0xA2 | SWRST_INTENDED |
| 0xA3 | SWRST_VDD_ERROR |
| 0xA4 | SWRST_EXCEPTION |
| 0xA5 | SWRST_NMI |
| 0xA6 | SWRST_ERROR |
| 0xFF | undefiniert |

### _CNV_S_19_ECOP_RANGE_626

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO |
| 0x01 | DET_ERROR |
| 0x02 | DISABLED |
| 0x10 | PORST_UNINTENDED |
| 0x11 | PORST_CPL_FAIL |
| 0x12 | PORST_INTENDED |
| 0x13 | PORST_VDD_ERROR |
| 0x20 | EXTRST_UNINTENDED |
| 0x30 | WDTRST_UNINTENDED |
| 0x40 | LLRST_UNINTENDED |
| 0x50 | LCRST_UNINTENDED |
| 0x60 | CSRST_UNINTENDED |
| 0xA0 | SWRST_UNINTENDED |
| 0xA1 | SWRST_CPL_FAIL |
| 0xA2 | SWRST_INTENDED |
| 0xA3 | SWRST_VDD_ERROR |
| 0xA4 | SWRST_EXCEPTION |
| 0xA5 | SWRST_NMI |
| 0xA6 | SWRST_ERROR |
| 0xFF | undefiniert |

### _CNV_S_19_ECOP_RANGE_628

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO |
| 0x01 | DET_ERROR |
| 0x02 | DISABLED |
| 0x10 | PORST_UNINTENDED |
| 0x11 | PORST_CPL_FAIL |
| 0x12 | PORST_INTENDED |
| 0x13 | PORST_VDD_ERROR |
| 0x20 | EXTRST_UNINTENDED |
| 0x30 | WDTRST_UNINTENDED |
| 0x40 | LLRST_UNINTENDED |
| 0x50 | LCRST_UNINTENDED |
| 0x60 | CSRST_UNINTENDED |
| 0xA0 | SWRST_UNINTENDED |
| 0xA1 | SWRST_CPL_FAIL |
| 0xA2 | SWRST_INTENDED |
| 0xA3 | SWRST_VDD_ERROR |
| 0xA4 | SWRST_EXCEPTION |
| 0xA5 | SWRST_NMI |
| 0xA6 | SWRST_ERROR |
| 0xFF | undefiniert |

### _CNV_S_19_ECOP_RANGE_630

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO |
| 0x01 | DET_ERROR |
| 0x02 | DISABLED |
| 0x10 | PORST_UNINTENDED |
| 0x11 | PORST_CPL_FAIL |
| 0x12 | PORST_INTENDED |
| 0x13 | PORST_VDD_ERROR |
| 0x20 | EXTRST_UNINTENDED |
| 0x30 | WDTRST_UNINTENDED |
| 0x40 | LLRST_UNINTENDED |
| 0x50 | LCRST_UNINTENDED |
| 0x60 | CSRST_UNINTENDED |
| 0xA0 | SWRST_UNINTENDED |
| 0xA1 | SWRST_CPL_FAIL |
| 0xA2 | SWRST_INTENDED |
| 0xA3 | SWRST_VDD_ERROR |
| 0xA4 | SWRST_EXCEPTION |
| 0xA5 | SWRST_NMI |
| 0xA6 | SWRST_ERROR |
| 0xFF | undefiniert |

### _CNV_S_3_STATE_RLY__343

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Request cannot be executed |
| 0x01 | relay open |
| 0x02 | relay close |
| 0xFF | undefiniert |

### _CNV_S_3_STATE_RLY__347

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Request cannot be executed |
| 0x01 | relay open |
| 0x02 | relay close |
| 0xFF | undefiniert |

### _CNV_S_3_STATE_RLY__353

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Request cannot be executed |
| 0x01 | relay open |
| 0x02 | relay close |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_495

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_496

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_502

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_503

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x03 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_509

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x03 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_532

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_537

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0:INI |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_543

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_6_LACO_RANGE_537

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0:INI |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_109

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_120

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_123

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_290

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ETC_NO_LIH |
| 0x01 | ETC_LIH_1 |
| 0x02 | ETC_LIH_2_REV |
| 0x04 | ETC_LIH_2 |
| 0x08 | ETC_LIH_3 |
| 0x10 | ETC_LIH_4 |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_295

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ETC_NO_LIH |
| 0x01 | ETC_LIH_1 |
| 0x02 | ETC_LIH_2_REV |
| 0x04 | ETC_LIH_2 |
| 0x08 | ETC_LIH_3 |
| 0x10 | ETC_LIH_4 |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_301

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ETC_NO_LIH |
| 0x01 | ETC_LIH_1 |
| 0x02 | ETC_LIH_2_REV |
| 0x04 | ETC_LIH_2 |
| 0x08 | ETC_LIH_3 |
| 0x10 | ETC_LIH_4 |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_474

| WERT | UWTEXT |
| --- | --- |
| 0x00 | LSH_OFF |
| 0x01 | LSH_POW_RISE |
| 0x02 | LSH_POW_RED |
| 0x03 | LSH_POW_FALL |
| 0x04 | LSH_POW_CTL |
| 0x05 | LSH_VB_PROT |
| 0x06 | LSH_TEMP_PROT |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_481

| WERT | UWTEXT |
| --- | --- |
| 0x00 | LSH_OFF |
| 0x01 | LSH_POW_RISE |
| 0x02 | LSH_POW_RED |
| 0x03 | LSH_POW_FALL |
| 0x04 | LSH_POW_CTL |
| 0x05 | LSH_VB_PROT |
| 0x06 | LSH_TEMP_PROT |
| 0xFF | undefiniert |

### _CNV_S_7_RANGE_ECU__105

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ENG_STOP |
| 0x01 | RUN_ENG |
| 0x02 | SYN_ENG_IGK_ON |
| 0x03 | SYN_ENG_IGK_OFF |
| 0x04 | PWL |
| 0x05 | ENG_LOCK |
| 0x06 | WAKE_UP |
| 0xFF | undefiniert |

### _CNV_S_7_RANGE_ECU__116

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ENG_STOP |
| 0x01 | RUN_ENG |
| 0x02 | SYN_ENG_IGK_ON |
| 0x03 | SYN_ENG_IGK_OFF |
| 0x04 | PWL |
| 0x05 | ENG_LOCK |
| 0x06 | WAKE_UP |
| 0xFF | undefiniert |

### _CNV_S_7_RANGE_ECU__119

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ENG_STOP |
| 0x01 | RUN_ENG |
| 0x02 | SYN_ENG_IGK_ON |
| 0x03 | SYN_ENG_IGK_OFF |
| 0x04 | PWL |
| 0x05 | ENG_LOCK |
| 0x06 | WAKE_UP |
| 0xFF | undefiniert |

### _CNV_S_7__CNV_S_7_D_785

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_7__CNV_S_7_D_800

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_7__CNV_S_7_D_803

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_7__CNV_S_7_D_806

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_7__CNV_S_7_D_807

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_8_RANGE_STAT_17

| WERT | UWTEXT |
| --- | --- |
| 0x00 | None |
| 0x01 | Set-Acc-TipUp |
| 0x02 | Decelerate-TipDown |
| 0x03 | Resume |
| 0x04 | Off |
| 0x05 | - |
| 0x06 | - |
| 0x07 | Error |
| 0xFF | undefiniert |

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

### MOTORUDSCODIERUNG_RUHESTROM

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

### MSD85UDS_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | -- |
| 1 | -- |

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

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 84.8000 | 114.470 | 0.295467 |
| 0x01 | 720 | 84.4127 | 113.987 | 0.311767 |
| 0x02 | 900 | 80.9271 | 111.686 | 0.381667 |
| 0x03 | 1200 | 74.1944 | 107.850 | 0.506900 |
| 0x04 | 1500 | 68.7327 | 105.293 | 0.646500 |
| 0x05 | 2000 | 69.2935 | 105.293 | 0.861500 |
| 0x06 | 2500 | 71.4243 | 103.589 | 1.027500 |
| 0x07 | 3000 | 72.2243 | 101.032 | 1.254750 |
| 0x08 | 4000 | 76.5657 | 102.452 | 1.567060 |
| 0x09 | 5000 | 78.0336 | 106.998 | 1.919500 |
| 0x0A | 6000 | 78.0336 | 108.277 | 2.325500 |
| 0x0B | 7000 | 80.1645 | 108.703 | 2.401500 |
| 0x0C | 660 | 84.1067 | 105.653 | 0.408600 |
| 0x0D | 720 | 82.8800 | 104.160 | 0.428533 |
| 0x0E | 900 | 72.8000 | 98.4000 | 0.532333 |
| 0x0F | 1200 | 62.0000 | 90.4000 | 0.734000 |
| 0x10 | 1500 | 55.6000 | 84.0000 | 0.950000 |
| 0x11 | 2000 | 53.6000 | 82.4000 | 1.550000 |
| 0x12 | 2500 | 53.6000 | 82.4000 | 1.900000 |
| 0x13 | 3000 | 57.2000 | 78.0000 | 2.055000 |
| 0x14 | 4000 | 62.9333 | 80.3556 | 2.255560 |
| 0x15 | 5000 | 68.8000 | 86.4000 | 2.607000 |
| 0x16 | 6000 | 68.8000 | 87.2000 | 3.000000 |
| 0x17 | 7000 | 76.0000 | 88.0000 | 3.070000 |
| 0x18 | 660 | 76.0533 | 96.2667 | 0.548600 |
| 0x19 | 720 | 74.1867 | 94.6667 | 0.579333 |
| 0x1A | 900 | 65.0667 | 89.8667 | 0.708333 |
| 0x1B | 1200 | 56.4000 | 82.8000 | 0.956000 |
| 0x1C | 1500 | 52.4000 | 77.2000 | 1.450000 |
| 0x1D | 2000 | 51.2000 | 71.2000 | 2.141000 |
| 0x1E | 2500 | 52.8000 | 70.4000 | 2.551000 |
| 0x1F | 3000 | 54.4000 | 70.8000 | 2.805000 |
| 0x20 | 4000 | 60.0889 | 72.7111 | 2.917560 |
| 0x21 | 5000 | 64.8000 | 84.8000 | 3.042000 |
| 0x22 | 6000 | 67.2000 | 88.0000 | 3.400000 |
| 0x23 | 7000 | 75.2000 | 88.0000 | 3.457000 |
| 0x24 | 660 | 68.0533 | 91.7867 | 0.674533 |
| 0x25 | 720 | 66.5067 | 89.4933 | 0.726667 |
| 0x26 | 900 | 60.2667 | 81.3333 | 0.966667 |
| 0x27 | 1200 | 54.8000 | 74.0000 | 1.260000 |
| 0x28 | 1500 | 52.0000 | 70.0000 | 1.700000 |
| 0x29 | 2000 | 51.2000 | 68.8000 | 2.715000 |
| 0x2A | 2500 | 51.2000 | 68.8000 | 3.231000 |
| 0x2B | 3000 | 53.6000 | 66.4000 | 3.660000 |
| 0x2C | 4000 | 55.2000 | 73.1556 | 3.772110 |
| 0x2D | 5000 | 63.2000 | 86.4000 | 3.554000 |
| 0x2E | 6000 | 68.8000 | 88.8000 | 4.057000 |
| 0x2F | 7000 | 74.4000 | 88.8000 | 4.057000 |
| 0x30 | 660 | 63.1467 | 91.6800 | 0.865867 |
| 0x31 | 720 | 62.0267 | 89.4933 | 0.926667 |
| 0x32 | 900 | 58.6667 | 81.3333 | 1.166670 |
| 0x33 | 1200 | 54.8000 | 73.6000 | 1.540000 |
| 0x34 | 1500 | 52.8000 | 70.0000 | 2.000000 |
| 0x35 | 2000 | 52.8000 | 68.8000 | 3.075000 |
| 0x36 | 2500 | 54.4000 | 68.8000 | 3.865000 |
| 0x37 | 3000 | 53.6000 | 66.4000 | 4.092500 |
| 0x38 | 4000 | 59.5556 | 75.5556 | 3.979890 |
| 0x39 | 5000 | 64.8000 | 88.0000 | 3.950000 |
| 0x3A | 6000 | 75.2000 | 87.2000 | 4.420000 |
| 0x3B | 7000 | 78.4000 | 87.2000 | 4.420000 |
| 0x3C | 660 | 60.6400 | 91.5733 | 1.114530 |
| 0x3D | 720 | 59.7867 | 89.4933 | 1.203330 |
| 0x3E | 900 | 57.8667 | 81.3333 | 1.683330 |
| 0x3F | 1200 | 56.0000 | 73.2000 | 2.070000 |
| 0x40 | 1500 | 54.8000 | 69.2000 | 2.150000 |
| 0x41 | 2000 | 56.0000 | 68.0000 | 3.500000 |
| 0x42 | 2500 | 56.0000 | 70.4000 | 4.268000 |
| 0x43 | 3000 | 57.6000 | 68.0000 | 4.301000 |
| 0x44 | 4000 | 63.4667 | 77.0667 | 4.194670 |
| 0x45 | 5000 | 70.4000 | 89.6000 | 4.132000 |
| 0x46 | 6000 | 79.2000 | 88.8000 | 4.663000 |
| 0x47 | 7000 | 80.8000 | 88.8000 | 4.663000 |
| 0x48 | 660 | 66.7745 | 94.2034 | 1.744750 |
| 0x49 | 720 | 66.5081 | 92.9241 | 1.867950 |
| 0x4A | 900 | 66.5081 | 88.6071 | 2.430140 |
| 0x4B | 1200 | 66.0075 | 81.9584 | 2.822470 |
| 0x4C | 1500 | 65.2566 | 76.8075 | 2.942470 |
| 0x4D | 2000 | 60.4025 | 71.8038 | 3.901520 |
| 0x4E | 2500 | 63.4063 | 71.4013 | 4.658550 |
| 0x4F | 3000 | 64.9547 | 71.0528 | 4.746730 |
| 0x50 | 4000 | 70.0931 | 80.1129 | 4.406960 |
| 0x51 | 5000 | 74.3019 | 94.3019 | 4.660330 |
| 0x52 | 6000 | 79.7987 | 94.0025 | 5.242290 |
| 0x53 | 7000 | 80.8981 | 94.0025 | 5.242290 |
| 0x54 | 660 | 76.2503 | 98.7295 | 2.421350 |
| 0x55 | 720 | 76.2141 | 98.2628 | 2.580020 |
| 0x56 | 900 | 76.2141 | 97.2856 | 3.180620 |
| 0x57 | 1200 | 75.6784 | 91.5499 | 3.697140 |
| 0x58 | 1500 | 72.6285 | 83.8356 | 3.757640 |
| 0x59 | 2000 | 63.7142 | 79.4141 | 4.171430 |
| 0x5A | 2500 | 67.9857 | 80.4569 | 4.954070 |
| 0x5B | 3000 | 75.1284 | 79.0070 | 5.094960 |
| 0x5C | 4000 | 80.0173 | 83.0333 | 4.686980 |
| 0x5D | 5000 | 80.4856 | 97.3142 | 5.136140 |
| 0x5E | 6000 | 82.8999 | 96.7857 | 5.655360 |
| 0x5F | 7000 | 84.7570 | 96.7857 | 5.785710 |
| 0x60 | 660 | 85.9559 | 102.562 | 3.433330 |
| 0x61 | 720 | 85.9559 | 102.413 | 3.580000 |
| 0x62 | 900 | 85.9559 | 102.413 | 4.300000 |
| 0x63 | 1200 | 85.7972 | 97.7779 | 5.020000 |
| 0x64 | 1500 | 78.9018 | 88.4954 | 5.000000 |
| 0x65 | 2000 | 67.2128 | 83.8477 | 4.620000 |
| 0x66 | 2500 | 69.7651 | 84.8000 | 5.300000 |
| 0x67 | 3000 | 80.6477 | 84.3303 | 5.582500 |
| 0x68 | 4000 | 91.1665 | 86.7162 | 5.233780 |
| 0x69 | 5000 | 92.8513 | 99.3651 | 5.770000 |
| 0x6A | 6000 | 95.8990 | 98.5651 | 6.250000 |
| 0x6B | 7000 | 100.712 | 98.5651 | 6.500000 |
| 0x6C | 660 | 90.4000 | 104.296 | 4.700000 |
| 0x6D | 720 | 90.4000 | 104.219 | 4.753330 |
| 0x6E | 900 | 90.4000 | 104.219 | 5.233330 |
| 0x6F | 1200 | 90.4000 | 100.109 | 5.660000 |
| 0x70 | 1500 | 81.6000 | 91.8209 | 6.050000 |
| 0x71 | 2000 | 69.2372 | 87.6417 | 6.000000 |
| 0x72 | 2500 | 70.4000 | 88.9533 | 5.950000 |
| 0x73 | 3000 | 81.7093 | 88.7696 | 6.282500 |
| 0x74 | 4000 | 96.4294 | 92.9135 | 6.311780 |
| 0x75 | 5000 | 99.4186 | 101.312 | 6.750000 |
| 0x76 | 6000 | 106.479 | 100.730 | 7.100000 |
| 0x77 | 7000 | 112.442 | 100.730 | 7.400000 |
| 0x78 | 660 | 90.4000 | 104.623 | 4.800000 |
| 0x79 | 720 | 90.4000 | 104.596 | 4.880000 |
| 0x7A | 900 | 90.4000 | 104.596 | 5.600000 |
| 0x7B | 1200 | 90.4000 | 100.298 | 6.160000 |
| 0x7C | 1500 | 81.6000 | 94.2748 | 7.770000 |
| 0x7D | 2000 | 69.9923 | 92.5497 | 8.000000 |
| 0x7E | 2500 | 70.4000 | 96.1265 | 7.870000 |
| 0x7F | 3000 | 81.8981 | 94.2439 | 7.945000 |
| 0x80 | 4000 | 97.4781 | 100.632 | 7.341110 |
| 0x81 | 5000 | 99.7961 | 103.577 | 8.000000 |
| 0x82 | 6000 | 112.142 | 103.373 | 8.500000 |
| 0x83 | 7000 | 117.350 | 103.373 | 8.900000 |
| 0x84 | 660 | 90.4000 | 104.800 | 4.899900 |
| 0x85 | 720 | 90.4000 | 104.800 | 5.006540 |
| 0x86 | 900 | 90.4000 | 104.800 | 5.966300 |
| 0x87 | 1200 | 90.4000 | 100.400 | 6.899260 |
| 0x88 | 1500 | 81.6000 | 95.6000 | 8.998770 |
| 0x89 | 2000 | 70.4000 | 95.2000 | 9.698300 |
| 0x8A | 2500 | 70.4000 | 100.000 | 9.698170 |
| 0x8B | 3000 | 82.0000 | 97.2000 | 9.698250 |
| 0x8C | 4000 | 98.0444 | 104.800 | 9.697640 |
| 0x8D | 5000 | 100.000 | 104.800 | 9.698300 |
| 0x8E | 6000 | 115.200 | 104.800 | 9.698800 |
| 0x8F | 7000 | 120.000 | 104.800 | 9.699200 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 105.0 | 2.00 |
| 0x01 | 720 | 120.0 | 105.0 | 3.00 |
| 0x02 | 900 | 120.0 | 105.0 | 4.00 |
| 0x03 | 1200 | 120.0 | 104.0 | 5.00 |
| 0x04 | 1500 | 120.0 | 103.0 | 6.00 |
| 0x05 | 2000 | 119.0 | 100.0 | 7.00 |
| 0x06 | 2500 | 118.0 | 98.0 | 8.00 |
| 0x07 | 3000 | 116.0 | 98.0 | 9.00 |
| 0x08 | 4000 | 112.0 | 95.0 | 10.0 |
| 0x09 | 5000 | 107.0 | 91.0 | 11.0 |
| 0x0A | 6000 | 107.0 | 86.0 | 12.0 |
| 0x0B | 7000 | 107.0 | 84.0 | 13.0 |
| 0x0C | 660 | 118.0 | 103.0 | 5.0 |
| 0x0D | 720 | 118.0 | 103.0 | 6.0 |
| 0x0E | 900 | 118.0 | 101.0 | 7.0 |
| 0x0F | 1200 | 116.0 | 95.0 | 8.0 |
| 0x10 | 1500 | 113.0 | 91.0 | 9.0 |
| 0x11 | 2000 | 111.0 | 95.0 | 10.0 |
| 0x12 | 2500 | 109.0 | 92.0 | 11.0 |
| 0x13 | 3000 | 108.0 | 95.0 | 12.0 |
| 0x14 | 4000 | 102.0 | 97.0 | 13.0 |
| 0x15 | 5000 | 91.0 | 95.0 | 14.0 |
| 0x16 | 6000 | 99.0 | 94.0 | 15.0 |
| 0x17 | 7000 | 103.0 | 81.0 | 16.0 |
| 0x18 | 660 | 113.0 | 98.0 | 7.0 |
| 0x19 | 720 | 112.0 | 98.0 | 8.0 |
| 0x1A | 900 | 111.0 | 97.0 | 10.0 |
| 0x1B | 1200 | 109.0 | 92.0 | 11.0 |
| 0x1C | 1500 | 108.0 | 88.0 | 12.0 |
| 0x1D | 2000 | 105.0 | 95.0 | 13.0 |
| 0x1E | 2500 | 104.0 | 92.0 | 15.0 |
| 0x1F | 3000 | 98.0 | 98.0 | 17.0 |
| 0x20 | 4000 | 92.0 | 95.0 | 18.0 |
| 0x21 | 5000 | 91.0 | 96.0 | 19.0 |
| 0x22 | 6000 | 97.0 | 96.0 | 22.0 |
| 0x23 | 7000 | 101.0 | 95.0 | 24.0 |
| 0x24 | 660 | 109.0 | 98.0 | 9.0 |
| 0x25 | 720 | 108.0 | 98.0 | 10.0 |
| 0x26 | 900 | 107.0 | 97.0 | 12.0 |
| 0x27 | 1200 | 103.0 | 92.0 | 13.0 |
| 0x28 | 1500 | 101.0 | 88.0 | 15.0 |
| 0x29 | 2000 | 99.0 | 95.0 | 17.0 |
| 0x2A | 2500 | 97.0 | 92.0 | 18.0 |
| 0x2B | 3000 | 95.0 | 98.0 | 19.0 |
| 0x2C | 4000 | 94.0 | 95.0 | 22.0 |
| 0x2D | 5000 | 102.0 | 96.0 | 24.0 |
| 0x2E | 6000 | 108.0 | 96.0 | 25.0 |
| 0x2F | 7000 | 113.0 | 95.0 | 27.0 |
| 0x30 | 660 | 109.0 | 98.0 | 13.0 |
| 0x31 | 720 | 108.0 | 98.0 | 14.0 |
| 0x32 | 900 | 107.0 | 97.0 | 16.0 |
| 0x33 | 1200 | 103.0 | 92.0 | 17.0 |
| 0x34 | 1500 | 101.0 | 88.0 | 19.0 |
| 0x35 | 2000 | 99.0 | 95.0 | 21.0 |
| 0x36 | 2500 | 97.0 | 92.0 | 22.0 |
| 0x37 | 3000 | 95.0 | 98.0 | 23.0 |
| 0x38 | 4000 | 94.0 | 95.0 | 26.0 |
| 0x39 | 5000 | 102.0 | 96.0 | 28.0 |
| 0x3A | 6000 | 108.0 | 96.0 | 29.0 |
| 0x3B | 7000 | 113.0 | 95.0 | 30.0 |
| 0x3C | 660 | 109.0 | 98.0 | 15.0 |
| 0x3D | 720 | 108.0 | 98.0 | 16.0 |
| 0x3E | 900 | 107.0 | 97.0 | 18.0 |
| 0x3F | 1200 | 103.0 | 92.0 | 19.0 |
| 0x40 | 1500 | 101.0 | 88.0 | 20.0 |
| 0x41 | 2000 | 99.0 | 95.0 | 22.0 |
| 0x42 | 2500 | 97.0 | 92.0 | 24.0 |
| 0x43 | 3000 | 95.0 | 98.0 | 25.0 |
| 0x44 | 4000 | 94.0 | 95.0 | 28.0 |
| 0x45 | 5000 | 102.0 | 96.0 | 30.0 |
| 0x46 | 6000 | 108.0 | 96.0 | 31.0 |
| 0x47 | 7000 | 113.0 | 95.0 | 32.0 |
| 0x48 | 660 | 109.0 | 98.0 | 17.0 |
| 0x49 | 720 | 108.0 | 98.0 | 18.0 |
| 0x4A | 900 | 107.0 | 97.0 | 20.0 |
| 0x4B | 1200 | 103.0 | 92.0 | 21.0 |
| 0x4C | 1500 | 101.0 | 88.0 | 22.0 |
| 0x4D | 2000 | 99.0 | 95.0 | 24.0 |
| 0x4E | 2500 | 97.0 | 92.0 | 26.0 |
| 0x4F | 3000 | 95.0 | 98.0 | 27.0 |
| 0x50 | 4000 | 94.0 | 95.0 | 30.0 |
| 0x51 | 5000 | 102.0 | 96.0 | 32.0 |
| 0x52 | 6000 | 108.0 | 96.0 | 34.0 |
| 0x53 | 7000 | 113.0 | 95.0 | 36.0 |
| 0x54 | 660 | 109.0 | 98.0 | 20.0 |
| 0x55 | 720 | 108.0 | 98.0 | 21.0 |
| 0x56 | 900 | 107.0 | 97.0 | 23.0 |
| 0x57 | 1200 | 103.0 | 92.0 | 24.0 |
| 0x58 | 1500 | 101.0 | 88.0 | 25.0 |
| 0x59 | 2000 | 99.0 | 95.0 | 27.0 |
| 0x5A | 2500 | 97.0 | 92.0 | 29.0 |
| 0x5B | 3000 | 95.0 | 98.0 | 30.0 |
| 0x5C | 4000 | 94.0 | 95.0 | 33.0 |
| 0x5D | 5000 | 102.0 | 96.0 | 35.0 |
| 0x5E | 6000 | 108.0 | 96.0 | 37.0 |
| 0x5F | 7000 | 113.0 | 95.0 | 39.0 |
| 0x60 | 660 | 109.0 | 98.0 | 22.0 |
| 0x61 | 720 | 108.0 | 98.0 | 23.0 |
| 0x62 | 900 | 107.0 | 97.0 | 25.0 |
| 0x63 | 1200 | 103.0 | 92.0 | 26.0 |
| 0x64 | 1500 | 101.0 | 88.0 | 27.0 |
| 0x65 | 2000 | 99.0 | 95.0 | 29.0 |
| 0x66 | 2500 | 97.0 | 92.0 | 31.0 |
| 0x67 | 3000 | 95.0 | 98.0 | 32.0 |
| 0x68 | 4000 | 94.0 | 95.0 | 35.0 |
| 0x69 | 5000 | 102.0 | 96.0 | 37.0 |
| 0x6A | 6000 | 108.0 | 96.0 | 39.0 |
| 0x6B | 7000 | 113.0 | 95.0 | 41.0 |
| 0x6C | 660 | 109.0 | 98.0 | 25.0 |
| 0x6D | 720 | 108.0 | 98.0 | 26.0 |
| 0x6E | 900 | 107.0 | 97.0 | 27.0 |
| 0x6F | 1200 | 103.0 | 92.0 | 28.0 |
| 0x70 | 1500 | 101.0 | 88.0 | 29.0 |
| 0x71 | 2000 | 99.0 | 95.0 | 31.0 |
| 0x72 | 2500 | 97.0 | 92.0 | 33.0 |
| 0x73 | 3000 | 95.0 | 98.0 | 34.0 |
| 0x74 | 4000 | 94.0 | 95.0 | 37.0 |
| 0x75 | 5000 | 102.0 | 96.0 | 39.0 |
| 0x76 | 6000 | 108.0 | 96.0 | 41.0 |
| 0x77 | 7000 | 113.0 | 95.0 | 43.0 |
| 0x78 | 660 | 109.0 | 98.0 | 30.0 |
| 0x79 | 720 | 108.0 | 98.0 | 30.0 |
| 0x7A | 900 | 107.0 | 97.0 | 32.0 |
| 0x7B | 1200 | 103.0 | 92.0 | 33.0 |
| 0x7C | 1500 | 101.0 | 88.0 | 34.0 |
| 0x7D | 2000 | 99.0 | 95.0 | 35.0 |
| 0x7E | 2500 | 97.0 | 92.0 | 38.0 |
| 0x7F | 3000 | 95.0 | 98.0 | 39.0 |
| 0x80 | 4000 | 94.0 | 95.0 | 42.0 |
| 0x81 | 5000 | 102.0 | 96.0 | 45.0 |
| 0x82 | 6000 | 108.0 | 96.0 | 47.0 |
| 0x83 | 7000 | 113.0 | 95.0 | 50.0 |
| 0x84 | 660 | 99.9 | 101.0 | 100.0 |
| 0x85 | 720 | 108.0 | 98.0 | 100.0 |
| 0x86 | 900 | 107.0 | 97.0 | 100.0 |
| 0x87 | 1200 | 103.0 | 92.0 | 100.0 |
| 0x88 | 1500 | 101.0 | 88.0 | 100.0 |
| 0x89 | 2000 | 99.0 | 95.0 | 100.0 |
| 0x8A | 2500 | 97.0 | 92.0 | 100.0 |
| 0x8B | 3000 | 95.0 | 98.0 | 100.0 |
| 0x8C | 4000 | 94.0 | 95.0 | 100.0 |
| 0x8D | 5000 | 102.0 | 96.0 | 100.0 |
| 0x8E | 6000 | 108.0 | 96.0 | 100.0 |
| 0x8F | 7000 | 113.0 | 95.0 | 100.0 |
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

### _EISYUGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 85.00 | 110.0 | 0.35 |
| 0x01 | 1000 | 90.00 | 105.0 | 6.50 |
| 0x02 | 1500 | 80.00 | 117.0 | 0.50 |
| 0x03 | 2000 | 51.00 | 69.00 | 2.70 |
| 0x04 | 2500 | 81.00 | 117.0 | 0.78 |
| 0x05 | 2500 | 70.00 | 100.0 | 9.70 |
| 0x06 | 4000 | 62.00 | 76.00 | 4.10 |
| 0x07 | 6000 | 115.0 | 105.0 | 9.70 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 3.00 |
| 0x01 | 1000 | 100.0 | 90.00 | 8.00 |
| 0x02 | 1500 | 85.00 | 80.00 | 15.0 |
| 0x03 | 3000 | 90.00 | 100.0 | 30.0 |
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
| 0x00 | 700 | 0.12 | 100 |
| 0x01 | 700 | 0.15 | 100 |
| 0x02 | 1000 | 0.12 | 100 |
| 0x03 | 1000 | 0.20 | 100 |
| 0x04 | 1000 | 0.30 | 100 |
| 0x05 | 1000 | 0.40 | 100 |
| 0xFF | 0 | 0 | 0 |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 2 nicht geschlossen |
| 1 | Regelkreis Bank 2 geschlossen |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 2 aktiv |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 2 aktiv |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 1 aktiv |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### _MSV90_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### _MSV90_TABLE_SWITCH_POSITION_LOW_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich nicht erforderlich |
| 1 | Drosselklappen-Neuabgleich erforderlich |

### _MSV90_TABLE_SWITCH_POSITION_LOW_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### _MSV90_TABLE_SWITCH_POSITION_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### _MSV90_TABLE_SWITCH_POSITION_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### _MSV90_TABLE_SWITCH_POSITION_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### _MSV90_TABLE_SWITCH_POSITION_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### _MSV90_TABLE_SWITCH_POSITION_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### _MSV90_TABLE_SWITCH_POSITION_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### _MSV90_TABLE_SWITCH_POSITION_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Motor laeuft |
| 1 | Motor steht |

### _MSV90_TABLE_SWITCH_POSITION_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### _MSV90_CNV_S_2__CNV_S_2_D_435_CM_0X4_792E940S

| NR | TEXT |
| --- | --- |
| 0 | FALSE |
| 4 | TRUE |

### _MSV90_TABLE_FS

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
| 255 | ungueltiger Wert |

### _MSV90_CNV_S_10_STATE_EOL__949_CM_9Z71400S

| NR | TEXT |
| --- | --- |
| 0 | NOT_START |
| 1 | ST_INH |
| 2 | PAR_NOT_PLAUS |
| 3 | WAIT_REL |
| 4 | UNDEF |
| 5 | ACT |
| 6 | END_WOUT_RESULT |
| 7 | ABORTED |
| 8 | END_WOUT_ERR |
| 9 | END_WITH_ERR |

### _MSV90_TABEL_STATUS_OBD_READINESS

| NR | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### _MSV90_TABEL_STATUS_OBD_MONITOR

| NR | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### _MSV90_CNV_S_10_STATE_EOL__449_CM_4DC3200S_

| NR | TEXT |
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

### _MSV90_CNV_S_13_STATE_DMTL_140_CM

| NR | TEXT |
| --- | --- |
| 0 | Start |
| 1 | Erste Referenzleck Messung |
| 2 | Grobleck Messung Start |
| 3 | Grobleck Messung erweitert |
| 4 | Grobleck Messung beendet |
| 5 | Feinleck Messung Start |
| 6 | Feinleck Messung erweitert |
| 7 | Zweite Referenzleck Messung |
| 8 | Tank geprueft |
| 9 | Feinleck |
| 10 | Grobleck |
| 11 | Modulfehler |
| 12 | Ende |
| 17 | Batteriespannung aus gueltigem Bereich |
| 18 | elektrischer Fehler |
| 33 | Tank nachfuellen festgestellt |
| 34 | Tankverschluss offen |
| 35 | Batteriespannung Fluktuation zu hoch |
| 36 | Diagnose maximale Zeit erreicht |
| 37 | Fluktuation Referenzsrtom zu hoch |
| 38 | Pumpenstrom abgefallen waehrend der Messung |

### _MSV90_TABLE_ST_GENTEST

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |

### _MSV90_TABLE_GENIUTEST_ERR_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### _MSV90_TABLE_GENIUTEST_ERR_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### _MSV90_TABLE_GENIUTEST_ERR_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### _MSV90_TABLE_GENIUTEST_ERR_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### _MSV90_TABLE_GENIUTEST_ERR_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### _MSV90_TABLE_GENIUTEST_ERR_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### _MSV90_TABLE_GENIUTEST_ERR_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

### _MSV90_TABLE_GENIUTEST_ERR_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorregler plausibel |
| 1 | Generatortest, Generatorregler unplausibel |

### _MSV90_TABLE_GENIUTEST_AB_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### _MSV90_CNV_S_14_STATE_VLS__226_CM_4DC3200S

| NR | TEXT |
| --- | --- |
| 0 | Diagnose nicht aktiv |
| 1 | Diagnose Schritt 1: Fett/Mager |
| 2 | Diagnose Schritt 2: Mager/Fett |
| 3 | Diagnose wartet auf Freigabe |
| 4 | Diagnose Timeout |
| 16 | Diagnose beendet, Sonden in Ordnung |
| 17 | Diagnose beendet, Sonden vor Katalysator vertauscht |
| 18 | Diagnose beendet, Sonden nach Katalysator vertauscht |
| 19 | Diagnose beendet, Sonden vor und nach Katalysator vertauscht |
| 20 | Diagnose beendet, Sonden vor Katalysator Bank 1 nicht plausibel |
| 21 | Diagnose beendet, Sonden vor Katalysator Bank 2 nicht plausibel |
| 22 | Diagnose beendet, Sonden nach Katalysator Bank 1 nicht plausibel |
| 23 | Diagnose beendet, Sonden nach Katalysator Bank 2 nicht plausibel |
| 24 | Diagnose beendet, keine brauchbaren Ergebnisse |

### _MSV90_CNV_S_10_STATE_EOL__449_CM_4DC3200S

| NR | TEXT |
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

### _MSV90_TABLE_ST_TESTPOELSYS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktionstest laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### _MSV90_TABLE_ST_TESTPOELSYS2

| NR | TEXT |
| --- | --- |
| 0 | -- |
| 1 | Abbruch durch Tester |
| 2 | Warmlauf (Oeltemperatur zu niedrig) |
| 3 | Abbruch aufgrund zu hoher Oeltemperatur |
| 4 | Abbruch der Diagnosefunktion nach Schritt 1 (Fehlerspeicher auslesen) |
| 5 | Abbruch der Diagnosefunktion nach Schritt 2 (Fehlerspeicher auslesen) |
| 6 | Abbruch der Diagnosefunktion nach Schritt 3 (Fehlerspeicher auslesen) |

### _MSV90_CNV_S_10_STATE_EOL__960_CM_9SP8300S

| NR | TEXT |
| --- | --- |
| 0 | NOT_START |
| 1 | ST_INH |
| 2 | PAR_NOT_PLAUS |
| 3 | WAIT_REL |
| 4 | UNDEF |
| 5 | ACT |
| 6 | END_WOUT_RESULT |
| 7 | ABORTED |
| 8 | END_WOUT_ERR |
| 9 | END_WITH_ERR |

### _MSV90_CNV_S_6_STATE_DIAG_157_CM

| NR | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Schritt 1 |
| 2 | Schritt 2 |
| 3 | Schritt 3 |
| 4 | Rampe |
| 5 | Ende LOCK_STEP |

### _MSV90_TABLE_STATUS_AD_RUN_VVL

| NR | TEXT |
| --- | --- |
| 0 | AD_Check: AD aktiv - Startbedingungen fuer Adaption OK und Adaptation laueft. |
| 1 | AD Failed: AD abgebrochen - Fehler waehrend Adaption aufgetreten. |
| 2 | AD Cancelled: Adaption vom SG extern abgebrochen. |
| 3 | AD Rejected : Adaptions interner Fehler - Bedingungen fuer Adaption Start/Ausfuehrung nicht erfuellt. |
| 5 | AD Init : Keine Adaption durchgefuehrt im Fahrzyklus. |
| 6 | AD Finished : Adaption beendet (mit oder ohne Erfolg) - Nach Klemmenwechsel auf AD Init. |

### _MSV90_TABLE_STATUS_AD_DFCT_VVL

| NR | TEXT |
| --- | --- |
| 0 | Fehler bei der letzten VVT2 Adaptionsroutine aufgetreten. |
| 1 | Kein Fehler bei der letzten VVT2 Adaptionsroutine aufgetreten. |

### _MSV90_CNV_S_4_STATE_CH_776_CM_762E940S

| NR | TEXT |
| --- | --- |
| 0 | CH_OFF |
| 1 | CH_AST |
| 2 | CH_LOW_LOAD |
| 3 | CH_SO2P |

### _MSV90_CNV_S_2_DEF_BIT_UB_19_CM

| NR | TEXT |
| --- | --- |
| 0 | FALSE |
| 1 | TRUE |

### _MSV90_CNV_S_5_DEF_BA_GDI_588_CM

| NR | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |
