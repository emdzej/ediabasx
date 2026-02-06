# mevd172.prg

## General

|  |  |
| --- | --- |
| File | mevd172.prg |
| Type | PRG |
| Jobs | 290 |
| Tables | 122 |
| Origin | BMW EA-360 Markus_Lorch |
| Revision | 9.000 |
| Author | P-+-Z-ENGINEERING-GMBH EA-360 Hadersdorfer |
| ECU Comment | SGBD für MEVD172 C-Muster zur SW 7572780B |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorelektronik ME V17.2 6 Zylinder N55 |  |  |
| ORIGIN | string | BMW EA-360 Markus_Lorch |  |  |
| REVISION | string | 9.000 |  |  |
| AUTHOR | string | P-+-Z-ENGINEERING-GMBH EA-360 Hadersdorfer |  |  |
| COMMENT | string | SGBD für MEVD172 C-Muster zur SW 7572780B |  |  |
| PACKAGE | string | 1.70 |  |  |
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

CBS Daten Zuruecksetzen (fuer CBS-Version 5) UDS: $2E WriteDataByIdentifier Modus  : Default Musterparametersatz fuer Bremsbelagverschleiss Vorder/Hinterachse br_v,100,1,0,0,0,1,0,0 br_h,100,1,0,0,0,1,0,0 jedoch mit 'Strich_Punkt' getrennt (nicht mit Komma!)

| Name | Type | Description |
| --- | --- | --- |
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, Sic, Sic_v, TUV, AU, Ueb, Efk Werte externe Umfaenge: Oel, NOx_a, Br_v, Br_h Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 0xFFh (255 dez) Defaultwert: 100 (0x64h) Bremsflüssigkeit: 150 (0x96h) erlaubt |
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

### STATUS_AEP_I12_ZYKLISCHES_NACHLADEN_HISTOGRAMM

Auslesen der Histogramme über die Standzeit bis zum Beginn des zyklischen Nachladens und der Ladedauern der zyklischen Nachladevorgänge AEP_I12_ZYKLISCHES_NACHLADEN_HISTOGRAMM (0x22 409E)

_No arguments._

### STEUERN_RUHESTROMMESSUNG

Ansteuern Ruhestrompruefung mit IBS UDS  : $31 RoutineControl UDS  : $01 startRoutine UDS  : $F02B Ruhestrompruefung

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Eco_max_i   Einheit: A   Min: 0 Max: 1.275 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Eco_msb   Einheit: s   Min: 0 Max: 12.75 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Eco_mz   Einheit: s   Min: 0 Max: 12.75 |
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: min   Min: 1 Max: 254 Achtung, Wert 128 ist ungültig |

### STATUS_IGRINFO_AEP

0x224016 STATUS_IGRINFO_AEP Infospeicher Intelligente Generator Regelung (IGR) auslesen

_No arguments._

### _STATUS_KLANN

0x3101F0E4 & 0x3103F0E4 _STATUS_KLANN Ansteuern und Auslesen Klann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _SWE_LESEN

0x31010205 SWE_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SWE_EINHEIT | string | auszulesender SWE Satz Eingabe von 0 bis 4 |

### START_AEP_I12_ZYKNL_INFOSPEICHER_LOESCHEN

Löschen des Historienspeichers für die letzen 4 Ladevorgänge der 12V-Batterie aus der Hochvolt-Batterie AEP_I12_ZYKNL_INFOSPEICHER_LOESCHEN (0x31 01 AE02)

_No arguments._

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n (4095) |

### STATUS_CBS_COZ_STATUS

Auslesen von Coz_status Sicherung CBS 5 Korrektur

_No arguments._

### _STATUS_AEP_I12_TEST_BATTERYGUARD

Anforderung Aufruf BatteryGuard Call auslesen Startvoraussetzungen: B_kl15 == TRUE. AEP_I12_TEST_BATTERYGUARD (0x31 03 F052)

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben UDS   : $2E   WriteDataByIdentifier UDS   : $C001 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATEN | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### _STEUERN_AEP_I12_TEST_LADEENDEGRUND

Job zum Test für AEP Funktionen AEP_I12_GRUND_LADEENDE (0x2E 5FA0)

| Name | Type | Description |
| --- | --- | --- |
| SW_DIAG_AEP_LADEENDEGRUND | unsigned char | Schreiben von Zyknlinfodiag Min: 0.0 Max: 255.0 a2l-Name: Zyknlinfodiag |

### STATUS_AEP_I12_ZYKLISCHES_NACHLADEN_INFO

Auslesen von wichtigen Kenngrößen der letzten 4 Vorgänge des zykllischen Nachladens plus dem letzten Parkvorgang AEP_I12_ZYKLISCHES_NACHLADEN_INFO (0x22 409D)

_No arguments._

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

UDS $31 01 F030 Batterietausch registrieren

_No arguments._

### STATUS_BZETOMSA2

0x224093 STATUS_BZETOMSA2 Analyse von MSA-Abschaltverhinderern durch BZE3 gegenüber AEPBZE SDG(A2l-NAME=bzetomsa)

_No arguments._

### STATUS_BZETOMSA

0x224155 STATUS_BZETOMSA Analyse von MSA-Abschaltverhinderern durch BZE3 gegenüber AEPBZE SDG(A2l-NAME=bzetomsa)

_No arguments._

### _STATUS_EISYGD

0x3101F0E1 & 0x3103F0E1 _STATUS_EISYGD Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STATUS_AEPDFMONITOR

0x224015 STATUS_AEPDFMONITOR FASTA-Messwertblock 10 lesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_IBS_STROMMESSUNG

Ansteuern IBS Strommessung UDS: $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| SCHWELLE_WERT | real | Bereich: 0 - 1310.7 A (A2L_Name: Eco_i_schwelle) |
| HOLDOFF_WERT | real | Bereich: 0 - 2.55 s (A2L_Name: Eco_i_holdoff) |
| MESSZEIT_WERT | real | Bereich: 0 - 0.51 s (A2L_Name: Eco_i_messzeit) |
| TIMEOUT_WERT | real | Bereich: 0 - 25.5 s (A2L_Name: Eco_i_timeout) |

### SWE_KOMPLETT_LESEN

0x31010205 SWE_KOMPLETT_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

_No arguments._

### _STOP_AEP_I12_TEST_BATTERYGUARD

Anforderung Aufruf BatteryGuard Call beenden Setzen der Größe B_batteryguardcalldiag =0 Startvoraussetzungen: B_kl15 == TRUE. AEP_I12_TEST_BATTERYGUARD (0x31 02 F052)

_No arguments._

### STEUERN_CBS_B_COZEW

Job für CBS 5 Korrektur

_No arguments._

### STATUS_VERBRAUCHERSTROM_EFII

Auslesen Verbraucherstrommessung EFII UDS  : $31   RoutineControl UDS  : $03   routineControlType UDS  : $7002 routineIdentifier

_No arguments._

### ABGLEICHWERTE_LESEN

0x225F90 ABGLEICHWERTE_LESEN Abgleichwerte Injektoren auslesen für CASCADE für Vergleich mit Daten aus COD-Datei Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### _STATUS_KRANN

0x3101F0E3 & 0x3103F0E3 _STATUS_KRANN Ansteuern und Auslesen Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STATUS_MSAINFO2

Auslesen Infospeicher Batteriezustandserkennung 2 UDS*: 0x224092 ReadDataByIdentifier

_No arguments._

### STATUS_DFDSN

0x224156 STATUS_DFDSN Diagnose der Generatorauslastung über FASTA

_No arguments._

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 es können 40 Messwerte in einem Block zusammengefasst werden

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_LEMINFO_AEP

0x224017 STATUS_LEMINFO_AEP Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

_No arguments._

### ABGLEICHWERTE_SCHREIBEN

0x2E5F90 ABGLEICHWERTE_SCHREIBEN Abgleichwerte Injektoren programmieren für CASCADE mit Übernahme Daten aus COD-Datei Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

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

### STATUS_EWS4_SK

Lesen des SecretKey des Server sowie Client für EWS4 UDS   : $22   ReadDataByIdentifier UDS   : $C002 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### START_AEP_I12_ZYKNL_HISTOGRAMM_LOESCHEN

Löschen von Histogramm und Zähler aller Ladevorgänge der 12V-Batterie aus dem Hochvolt-System AEP_I12_ZYKNL_HISTOGRAMM_LOESCHEN (0x31 01 AE03)

_No arguments._

### STATUS_MSAINFO_AEP

0x224018 _STATUS_MSAINFO_AEP Infospeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### STEUERN_ENDE_VERBRAUCHERSTROM_EFII

Ansteuerung Verbraucherstrommessung EFII (IBS) beenden UDS  : $31   RoutineControl UDS  : $02   routineControlType UDS  : $7002 routineIdentifier

_No arguments._

### _STATUS_EISYUGD

0x3101F0E0 & 0x3103F0E0 _STATUS_EISYUGD Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STEUERN_CBS_COZ_STATUS

Job für CBS 5 Korrektur

_No arguments._

### _START_AEP_I12_TEST_BATTERYGUARD

Anforderung Aufruf BatteryGuard Call Setzen der Größe B_batteryguardcalldiag =1 Startvoraussetzungen: B_kl15 == TRUE. AEP_I12_TEST_BATTERYGUARD (0x31 01 F052)

_No arguments._

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

### STATUS_SYSTEMCHECK_AEP_INFO_1

0x224022 STATUS_SYSTEMCHECK_AEP_INFO_1 Intelligenter Batteriesensor Bitfeld Pminfo1 lesen

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_2

0x224023 STATUS_SYSTEMCHECK_AEP_INFO_2 Intelligenter Batteriesensor Bitfeld Pminfo2 lesen

_No arguments._

### STATUS_EWS

Zurücklesen verschiedener interner Stati für EWS UDS   : $22   ReadDataByIdentifier UDS   : $C000 Sub-Parameter

| Name | Type | Description |
| --- | --- | --- |
| DIAGSG | string | Diagnose Steuergerät zulässig DME, DME2, EGS ohne Eintrag wird Original-Diagnoseadresse verwendet |

### STATUS_CBS_B_COZEW

Auslesen von B_cozew Sicherung CBS 5 Korrektur

_No arguments._

### STATUS_DFDSPROFLE

Generatorauslastungsprofil auslesen DFDSPROFLE (0x22 4081)

_No arguments._

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

### STATUS_GENINFO

Infospeicher Generatordiagnose erweitert auslesen GENINFO (0x22 401B)

_No arguments._

### STATUS_VERBREDINFO

0x22401D STATUS_VERBREDINFO Verbraucherreduzierungsspeicher auslesen

_No arguments._

### STATUS_DMEREF

BMW/Zulieferer Programmstands-Bezeichnung auslesen. DMEREF (0x22 401F)

_No arguments._

### IDENT_IBS

0x224021 IDENT_IBS Identifikationsdaten fuer IBS-Sensor auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_MESSWERTE_IBS

0x22402B STATUS_MESSWERTE_IBS Messwerte IBS auslesen

_No arguments._

### STATUS_MESSWERTE_LRP

Messwerte Laufruhepruefung auslesen MESSWERTE_LRP (0x22 402D)

_No arguments._

### STATUS_KQE

Messwerte zur Kraftstoffqualitaet auslesen KQE (0x22 4035)

_No arguments._

### STATUS_BZEDIAG

0x22403B STATUS_BZEDIAG BZE Infospeicher

_No arguments._

### STATUS_CALCVN

Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. CALCVN (0x22 403C)

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

### STATUS_BZEDIAG2

Auslesen Infospeicher Batteriezustandserkennung 2 UDS*: $22 ReadDataByIdentifier

_No arguments._

### STATUS_READINESS

Monitorfunktionen und Readinessflags aus DME auslesen READINESS (0x22 4105)

_No arguments._

### STATUS_WRUECKDREHWINKEL

VVT: Mehrfaches Rueckdrehen (Wiederholter Rueckdrehwinkel) lesen. WRUECKDREHWINKEL (0x22 5F75)

_No arguments._

### STATUS_VVTSCHWERGAENGIGKEIT

Anzahl erkannter VVT Lageregelungsfehler, Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible und Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversible (VVT-Schwergaengigkeit) lesen. VVTSCHWERGAENGIGKEIT (0x22 5F7B)

_No arguments._

### STATUS_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE auslesen. GVOBD (0x22 5F80)

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

### STATUS_VVTMINH

VVT-Minhub auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. VVTMINH (0x22 5FDE)

_No arguments._

### STATUS_LL_ABGLEICH

Abgleichwert LL (Leerlauf) auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. LL_ABGLEICH (0x22 5FF0)

_No arguments._

### ECU_CONFIG

Variante auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. ECU_CONFIG (0x22 5FF2)

_No arguments._

### STEUERN_WRUECKDREHWINKEL

VVT: Mehrfaches Rueckdrehen (Wiederholter Rueckdrehwinkel). Wenn B_favvtexwinksrev gesetzt ist, dann wird der Wert vom Tester (vvt_exwinksrev_count) auf den Zaehler (vvt_exwinksrev) kopiert. WRUECKDREHWINKEL (0x2E 5F75)

| Name | Type | Description |
| --- | --- | --- |
| SW_VVT_EXWINKSREV | unsigned int | Sollwert Zaehler Rueckdrehereignisse aufgrund von Lagereglerabweichung VVT-Steller Min: 0.0 Max: 65535.0 a2l-Name: vvt_exwinksrev_count |

### STEUERN_VVTHIGHCURRENT

Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible (VVT-Schwergaengigkeit) vorgeben. VVTHIGHCURRENT (0x2E 5F7A)

| Name | Type | Description |
| --- | --- | --- |
| SW_LGRF_IREV | real | Min: 0.0 Max: 65535.0 a2l-Name: vvt_highcurrent_count |

### STEUERN_VVTDEVIATION

Anzahl erkannter VVT Lageregelungsfehler vorgeben. VVTDEVIATION (0x2E 5F7B)

| Name | Type | Description |
| --- | --- | --- |
| SW_VVT_LGRF | real | Min: 0.0 Max: 65535.0 a2l-Name: vvt_deviation_count |

### STEUERN_ZDKSHDPRESET

Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) zuruecksetzen. Beim Aufruf dieses Services soll das Bit B_prail_mon_clr gesetzt werden. ZDKSHDPRESET (0x2E 5F7F)

_No arguments._

### STEUERN_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE vorgeben. Der Korrekturfaktor soll bei Klemmenwechsel auf den Standardwert 1 zurueckgesetzt werden. STEUERN_GVOBD (0x2E 5F80)

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_1 | real | Faktor auf Einspritzung Zylinder 1 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [0] |
| SW_F_MK_KORR_EXT_XZYL_5 | real | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [1] |
| SW_F_MK_KORR_EXT_XZYL_3 | real | Faktor auf Einspritzung Zylinder 3 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [2] |
| SW_F_MK_KORR_EXT_XZYL_6 | real | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [3] |
| SW_F_MK_KORR_EXT_XZYL_2 | real | Faktor auf Einspritzung Zylinder 2 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [4] |
| SW_F_MK_KORR_EXT_XZYL_4 | real | Faktor auf Einspritzung Zylinder 4 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [5] |

### STEUERN_PROGRAMM_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE programmieren. STEUERN_PROGRAMM_GVOBD (0x2E 5F80)

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_1 | real | Faktor auf Einspritzung Zylinder 1 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [0] |
| SW_F_MK_KORR_EXT_XZYL_5 | real | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [1] |
| SW_F_MK_KORR_EXT_XZYL_3 | real | Faktor auf Einspritzung Zylinder 3 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [2] |
| SW_F_MK_KORR_EXT_XZYL_6 | real | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [3] |
| SW_F_MK_KORR_EXT_XZYL_4 | real | Faktor auf Einspritzung Zylinder 4 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [4] |
| SW_F_MK_KORR_EXT_XZYL_2 | real | Faktor auf Einspritzung Zylinder 2 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 a2l-Name: fakmkkorrext_w Array [5] |

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

### STEUERN_HUBKORR_PROGRAMMIEREN

Hubkorrektur programmieren START-CONDITION: 8F STEUERN_HUBKORR_PROGRAMMIEREN (0x2E 5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSNNV | unsigned char | Codierdaten Hub Korrektur programmieren. Min: 0.0 Max: 255.0 a2l-Name: stvbrvsnnv |

### STEUERN_HUBKORR_RESET

Hubkorrektur loeschen START-CONDITION: 8B Fa-a2l-Name: stvbrvsnnv, stvbrvsin STEUERN_HUBKORR_RESET (0x2E 5F8C)

_No arguments._

### STEUERN_HUBKORR_VERSTELLEN

Hubkorrektur vorgeben START-CONDITION: 8F STEUERN_HUBKORR_VERSTELLEN (0x2E 5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSIN | unsigned char | Codierdaten Hub Korrektur schreiben. Min: 0.0 Max: 255.0 a2l-Name: stvbrvsin |

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

### STEUERN_IMA_ZYL_1

Abgleichwert Injektor 01 (phys) programmieren IMA_ZYL_1 (0x2E 5F91)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [0] |

### STEUERN_IMA_ZYL_2

Abgleichwert Injektor 02 (phys) programmieren IMA_ZYL_2 (0x2E 5F92)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_3

Abgleichwert Injektor 03 (phys) programmieren IMA_ZYL_3 (0x2E 5F93)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_4

Abgleichwert Injektor 04 (phys) programmieren IMA_ZYL_4 (0x2E 5F94)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_5

Abgleichwert Injektor 05 (phys) programmieren IMA_ZYL_5 (0x2E 5F95)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_5 | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_6

Abgleichwert Injektor 06 (phys) programmieren IMA_ZYL_6 (0x2E 5F96)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_6 | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_KVA

KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben KVA (0x2E 5FC1)

| Name | Type | Description |
| --- | --- | --- |
| KVA | real | Codierung Verbrauchsanzeigekorrektur Umrechnung: 0x80 bis 0x7F in -0.128 bis 0.127 Min: -0.128 Max: 0.127 a2l-Name: kva_korr |

### STEUERN_ENDE_ABLL

Abgleichwert LL (Leerlauf) Vorgeben beenden STEUERN_ENDE_ABLL (0x2E 5FF0)

_No arguments._

### STEUERN_LLABG_PROG

Abgleichwert LL (Leerlauf) programmieren STEUERN_LLABG_PROG (0x2E 5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnllmv |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnsacmv |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsmv |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsacmv |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnslbv |

### STEUERN_LL_ABGLEICH

Abgleichwert LL (Leerlauf) vorgeben STEUERN_LL_ABGLEICH (0x2E 5FF0)

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

### STEUERN_PM_HISTOGRAM_RESET

$2E 5F F5 04 Loeschen von pminfo1 index 23-30

_No arguments._

### STEUERN_ENDE_DK

Drosselklappe Ansteuerung beenden DK (0x2F 00 602A)

_No arguments._

### STEUERN_DK

Drosselklappe ansteuern DK (0x2F 03 602A)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK | real | Tastverhaeltniss Drosselklappe Einheit: % DK Min: 0.0 Max: 99.99999999999986 a2l-Name: wdktest_w |
| SW_TO_DK | unsigned long | Timeout Drosselklappe Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_UGEN

Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern UGEN (0x2F 03 6032)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_UGEN | real | Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Einheit: V Min: 10.6 Max: 36.1 a2l-Name: ugenext |
| SW_TO_UGEN | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_UGEN

Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden UGEN (0x2F 00 6032)

_No arguments._

### STEUERN_ELUER

E-Luefter-Relais ansteuern ELUER (0x2F 03 6081)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUER | unsigned char | Komponentenansteuerung: E-Luefter-Relais 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_elrlytst |
| SW_TO_ELUER | unsigned long | Timeout E-Luefter-Relais Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ELUER

E-Luefter-Relais Ansteuerung beenden ELUER (0x2F 00 6081)

_No arguments._

### STEUERN_GLF2

Gesteuerte Luftfuehrung Klappe 2 ansteuern GLF2 (0x2F 03 60A4)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF2 | unsigned char | Komponentenansteuerung: Gesteuerte Luftfuehrung Klappe 2 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_act_pkks_ext_adj |
| SW_TO_GLF2 | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 2 Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_GLF2

Gesteuerte Luftfuehrung Klappe 2 Ansteuerung beenden GLF2 (0x2F 00 60A4)

_No arguments._

### STEUERN_ODR

Oel Druck Regelung (Geregeltes Oeldrucksystem) ansteuern ODR (0x2F 03 60AB)

| Name | Type | Description |
| --- | --- | --- |
| SW_P_OELSOL_TST | unsigned long | Oeldruck Sollwert Einheit: hPa Min: 0.0 Max: 8160.0 a2l-Name: poelsoltst |
| SW_TO_ODR | unsigned long | Timeout Oeldruck Sollwert Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ODR

Oel Druck Regelung (Geregeltes Oeldrucksystem) Ansteuerung beenden ODR (0x2F 00 60AB)

_No arguments._

### STEUERN_ODV

Oeldruckventil (Geregeltes Oeldrucksystem) ansteuern ODV (0x2F 03 60AC)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ODV | real | Tastverhaeltniss Oeldruckventil Sollwert Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: tvpoeltst |
| SW_TO_ODV | unsigned long | Timeout Oeldruckventil Sollwert Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ODV

Oeldruckventil (Geregeltes Oeldrucksystem) Ansteuerung beenden ODV (0x2F 00 60AC)

_No arguments._

### STEUERN_ENDE_MLS

Motorlagersteuerung Ansteuerung beenden MLS (0x2F 00 60B2)

_No arguments._

### STEUERN_MLS

Motorlagersteuerung ansteuern MLS (0x2F 03 60B2)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MLS | unsigned char | Komponentenansteuerung: Motorlagersteuerung 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_molaet |
| SW_TO_MLS | unsigned long | Timeout Motorlagersteuerung Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ULV

Umluftventil ansteuern ULV (0x2F 03 60B5)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV | real | Tastverhaeltniss Umluftventil Einheit: % Min: 0.0 Max: 99.99847412109375 a2l-Name: arqtuvs_w |
| SW_TO_ULV | unsigned long | Timeout Umluftventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ULV

Umluftventil Ansteuerung beenden ULV (0x2F 00 60B5)

_No arguments._

### STEUERN_ENDE_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden LDS1 (0x2F 00 60B6)

_No arguments._

### STEUERN_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern LDS1 (0x2F 03 60B6)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS1 | real | Tastverhaeltniss Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Einheit: % Min: 0.0 Max: 99.99847412109375 a2l-Name: arqtwgv_w |
| SW_TO_LDS1 | unsigned long | Timeout Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_MSV

Mengensteuerventil Ansteuerung beenden MSV (0x2F 00 60BD)

_No arguments._

### STEUERN_MSV

Mengensteuerventil ansteuern MSV (0x2F 03 60BD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSV | real | Tastverhaeltniss Mengensteuerventil Einheit: MPa Min: 0.0 Max: 32.7675 a2l-Name: arqtprs_w |
| SW_TO_MSV | unsigned long | Timeout Mengensteuerventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_EWAP

elektr. Wasserpumpe (Bit Serielle Datenschnittstelle) ansteuern EWAP (0x2F 03 60BF)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP | unsigned char | Sollwert elektr. Wasserpumpe (0 bis 255 Upm) Einheit: 1/min Min: 0.0 Max: 255.0 a2l-Name: newpsolltst |
| SW_TO_EWAP | unsigned long | Timeout elektr. Wasserpumpe Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EWAP

elektr. Wasserpumpe Ansteuerung beenden EWAP (0x2F 00 60BF)

_No arguments._

### STEUERN_AGK

Abgasklappe ansteuern AGK (0x2F 03 60C1)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK | unsigned char | Komponentenansteuerung: Abgasklappe 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_btakrst |
| SW_TO_AGK | unsigned long | Timeout Abgasklappe Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_AGK

Abgasklappe Ansteuerung beenden AGK (0x2F 00 60C1)

_No arguments._

### STEUERN_GLF

Gesteuerte Luftfuehrung (Klappe 1) ansteuern GLF (0x2F 03 60C3)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF | unsigned char | Komponentenansteuerung: Gesteuerte Luftfuehrung Klappe 1 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_act_akks_ext_adj |
| SW_TO_GLF | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 1 Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_GLF

Gesteuerte Luftfuehrung (Klappe 1) Ansteuerung beenden GLF (0x2F 00 60C3)

_No arguments._

### STEUERN_ENDE_KFT

Kennfeldthermostat Ansteuerung beenden KFT (0x2F 00 60C9)

_No arguments._

### STEUERN_KFT

Kennfeldthermostat ansteuern KFT (0x2F 03 60C9)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT | unsigned char | Komponentenansteuerung: Kennfeldthermostat 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_etret |
| SW_TO_KFT | unsigned long | Timeout Kennfeldthermostat Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_DMTL_P

Diagnosemodul-Tank Leckage Pumpe ansteuern DMTL_P (0x2F 03 60CC)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P | unsigned char | Komponentenansteuerung: Diagnosemodul-Tank Leckage Pumpe 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_dmpmet |
| SW_TO_DMTL_P | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DMTL_P

Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden DMTL_P (0x2F 00 60CC)

_No arguments._

### STEUERN_DMTL_V

Diagnosemodul-Tank Leckage Ventil ansteuern DMTL_V (0x2F 03 60CD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V | unsigned char | Komponentenansteuerung: Diagnosemodul-Tank Leckage Ventil 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_dmmvet |
| SW_TO_DMTL_V | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DMTL_V

Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden DMTL_V (0x2F 00 60CD)

_No arguments._

### STEUERN_DMTL_HEIZUNG

Diagnosemodul-Tank Leckage Heizung ansteuern DMTL_HEIZUNG (0x2F 03 60CE)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH | unsigned char | Komponentenansteuerung: Diagnosemodul-Tank Leckage Heizung 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_dmhet |
| SW_TO_DMTLH | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DMTL_HEIZUNG

Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden DMTL_HEIZUNG (0x2F 00 60CE)

_No arguments._

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

### STEUERN_MIL

MIL (Malfunction Indicator Lamp) ansteuern MIL (0x2F 03 60D4)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL | unsigned long | Komponentenansteuerung: MIL (Malfunction Indicator Lamp) 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 |
| SW_TO_MIL | unsigned long | Timeout MIL (Malfunction Indicator Lamp) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_MIL

MIL (Malfunction Indicator Lamp) Ansteuerung beenden MIL (0x2F 00 60D4)

_No arguments._

### STEUERN_EML

EML (Engine Malfunction Lamp) ansteuern EML (0x2F 03 60D6)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML | unsigned long | Komponentenansteuerung: EML (Engine Malfunction Lamp) 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 |
| SW_TO_EML | unsigned long | Timeout EML (Engine Malfunction Lamp) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EML

EML (Engine Malfunction Lamp) Ansteuerung beenden EML (0x2F 00 60D6)

_No arguments._

### STEUERN_EKP

Elektrische Kraftstoffpumpe 1 ansteuern Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben EKP (0x2F 03 60D8)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1 | unsigned char | Komponentenansteuerung: Elektrische Kraftstoffpumpe 1 1 = Elektrische Kraftstoffpumpe 1 ansteuern 0 = Ansteuerung beenden Min: 0.0 Max: 1.0 a2l-Name: B_ekpet |
| SW_TO_EKP1 | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EKP

Elektrische Kraftstoffpumpe 1 Ansteuerung beenden Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben EKP (0x2F 00 60D8)

_No arguments._

### STEUERN_E_LUEFTER

E-Luefter ansteuern E_LUEFTER (0x2F 03 60DA)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE | real | Tastverhaeltniss E-Luefter Einheit: % Min: 0.0 Max: 93.359375 a2l-Name: tamldia |
| SW_TO_ELUE | unsigned long | Timeout E-Luefter Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_E_LUEFTER

E-Luefter Ansteuerung beenden E_LUEFTER (0x2F 00 60DA)

_No arguments._

### STEUERN_VVT

VVT ansteuern VVT (0x2F 03 60DD)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_VVT | real | Normierter Exzenterwinkel VVT Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: vvtaet |
| SW_TO_VVT | unsigned long | Timeout VVT Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_VVT

VVT Ansteuerung beenden VVT (0x2F 00 60DD)

_No arguments._

### STEUERN_EV1

Einspritzventil 1 (physikalisch) ansteuern EV1 (0x2F 03 60E1)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1 | unsigned long | Periodendauer Einspritzventil 1 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E1 |
| SW_TV_EV1 | real | Tastverhaeltniss Einspritzventil 1 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E1 |
| SW_TO_EV1 | unsigned long | Timeout Einspritzventil 1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV1

Einspritzventil 1 (physikalisch) Ansteuerung beenden EV1 (0x2F 00 60E1)

_No arguments._

### STEUERN_EV2

Einspritzventil 2 (physikalisch) ansteuern EV2 (0x2F 03 60E2)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2 | unsigned long | Periodendauer Einspritzventil 2 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E2 |
| SW_TV_EV2 | real | Tastverhaeltniss Einspritzventil 2 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E2 |
| SW_TO_EV2 | unsigned long | Timeout Einspritzventil 2 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV2

Einspritzventil 2 (physikalisch) Ansteuerung beenden EV2 (0x2F 00 60E2)

_No arguments._

### STEUERN_EV3

Einspritzventil 3 (physikalisch) ansteuern EV3 (0x2F 03 60E3)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3 | unsigned long | Periodendauer Einspritzventil 3 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E3 |
| SW_TV_EV3 | real | Tastverhaeltniss Einspritzventil 3 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E3 |
| SW_TO_EV3 | unsigned long | Timeout Einspritzventil 3 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV3

Einspritzventil 3 (physikalisch) Ansteuerung beenden EV3 (0x2F 00 60E3)

_No arguments._

### STEUERN_EV4

Einspritzventil 4 (physikalisch) ansteuern EV4 (0x2F 03 60E4)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4 | unsigned long | Periodendauer Einspritzventil 4 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E4 |
| SW_TV_EV4 | real | Tastverhaeltniss Einspritzventil 4 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E4 |
| SW_TO_EV4 | unsigned long | Timeout Einspritzventil 4 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV4

Einspritzventil 4 (physikalisch) Ansteuerung beenden EV4 (0x2F 00 60E4)

_No arguments._

### STEUERN_EV5

Einspritzventil 5 (physikalisch) ansteuern EV5 (0x2F 03 60E5)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV5 | unsigned long | Periodendauer Einspritzventil 5 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E5 |
| SW_TV_EV5 | real | Tastverhaeltniss Einspritzventil 5 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E5 |
| SW_TO_EV5 | unsigned long | Timeout Einspritzventil 5 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV5

Einspritzventil 5 (physikalisch) Ansteuerung beenden EV5 (0x2F 00 60E5)

_No arguments._

### STEUERN_EV6

Einspritzventil 6 (physikalisch) ansteuern EV6 (0x2F 03 60E6)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV6 | unsigned long | Periodendauer Einspritzventil 6 Einheit: ms Min: 0.0 Max: 2550.0 a2l-Name: BasSvrAppl_IOCtlPeriod60E6 |
| SW_TV_EV6 | real | Tastverhaeltniss Einspritzventil 6 Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E6 |
| SW_TO_EV6 | unsigned long | Timeout Einspritzventil 6 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV6

Einspritzventil 6 (physikalisch) Ansteuerung beenden EV6 (0x2F 00 60E6)

_No arguments._

### STEUERN_ENDE_ENWS

Vanos Einlass Ventil Ansteuerung beenden ENWS (0x2F 00 60ED)

_No arguments._

### STEUERN_ENWS

Vanos Einlass Ventil ansteuern ENWS (0x2F 03 60ED)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS | real | Tastverhaeltniss Vanos Einlassventil Einheit: ° KW Min: -102.4 Max: 101.6 a2l-Name: wnwetst |
| SW_TO_ENWS | unsigned long | Timeout Vanos Einlassventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ANWS

Vanos Auslass Ventil ansteuern ANWS (0x2F 03 60EE)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS | real | Tastverhaeltniss Vanos Auslassventil Einheit: ° KW Min: -102.4 Max: 101.6 a2l-Name: wnwatst |
| SW_TO_ANWS | unsigned long | Timeout Vanos Auslassventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ANWS

Vanos Auslass Ventil Ansteuerung beenden ANWS (0x2F 00 60EE)

_No arguments._

### STEUERN_TEAV

Absperrventil Tankentlueftung Ansteuerung TEAV (0x2F 03 60FC)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEAV | unsigned char | Komponentenansteuerung: Absperrventil Tankentlueftung 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_facpimv |
| SW_TO_TEAV | unsigned long | Timeout Absperrventil Tankentlueftung Max: 510s (default: 20s) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_TEAV

Absperrventil Tankentlueftung Ansteuerung beenden TEAV (0x2F 00 60FC)

_No arguments._

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

### START_SYSTEMCHECK_EVAUSBL

Ansteuern Diagnosefunktion Einspritzventilausblendung SYSTEMCHECK_EVAUSBL (0x31 01 F025)

| Name | Type | Description |
| --- | --- | --- |
| STAT_DEVOFF | unsigned char | Ausblendmaske Min: 0.0 Max: 255.0 a2l-Name: devoff |

### STOP_SYSTEMCHECK_EVAUSBL

Ende Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0x31 02 F025)

_No arguments._

### STATUS_SYSTEMCHECK_LLERH

Auslesen Diagnosefunktion Leerlauf-Erhoehung SYSTEMCHECK_LLERH (0xF026)

_No arguments._

### START_SYSTEMCHECK_LLERH

Ansteuern Diagnosefunktion Leerlauf-Erhoehung SYSTEMCHECK_LLERH (0xF026)

| Name | Type | Description |
| --- | --- | --- |
| LL | unsigned long | Drehzahlerhoeung |

### STOP_SYSTEMCHECK_LLERH

Diagnosefunktion Leerlauf-Erhoehung beenden SYSTEMCHECK_LLERH (0xF026)

_No arguments._

### START_SYSTEMCHECK_VVT_ANSCHLAG

Ansteuern Diagnosefunktion VVT-Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0x31 01 F027)

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

Diagnosefunktion VVT Anschlag lernen beenden SYSTEMCHECK_VVT_ANSCHLAG (0x31 02 F027)

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Auslesen VVT Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0x31 03 F027)

_No arguments._

### STOP_SYSTEMCHECK_GEN

Diagnosefunktion Generatortest beenden SYSTEMCHECK_GEN (0x31 02 F02A)

_No arguments._

### START_SYSTEMCHECK_GEN

Diagnosefunktion Generatortest SYSTEMCHECK_GEN (0x31 01 F02A)

_No arguments._

### STATUS_SYSTEMCHECK_GEN

Auslesen Diagnosefunktion Generatortest SYSTEMCHECK_GEN (0x31 03 F02A)

_No arguments._

### STATUS_RUHESTROMMESSUNG

Auslesen Ruhestromprüfung mit IBS UDS  : $31 RoutineControl UDS  : $03 requestRoutineResults UDS  : $F02B Ruhestrompruefung

_No arguments._

### STOP_SYSTEMCHECK_ODR

Diagnosefunktion Oeldruckregelung beenden SYSTEMCHECK_ODR (0x31 02 F02C)

_No arguments._

### STATUS_SYSTEMCHECK_ODR

Auslesen Diagnosefunktion Oeldruckregelung SYSTEMCHECK_ODR (0x31 03 F02C)

_No arguments._

### START_SYSTEMCHECK_ODR

Diagnosefunktion Oeldruckregelung SYSTEMCHECK_ODR (0x31 01 F02C)

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

Ansteuern Adaptionen selektiv loeschen - Batterietausch ausgeblendet. ADAP_SELEKTIV_LOESCHEN (0x31 01 F030)

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | unsigned char | AUSWAHLBYTE_1_BIT_7 -- > Adaption Abgasrueckfuehrungsventil (NOT USED) AUSWAHLBYTE_1_BIT_6 --> Adaption Lambdaregelung AUSWAHLBYTE_1_BIT_5 --> Adaption Drosselklappe AUSWAHLBYTE_1_BIT_4 --> Adaption Saugrohrmodell AUSWAHLBYTE_1_BIT_3 --> Adaption Tankentlueftung AUSWAHLBYTE_1_BIT_2 --> Adaption Lambdasonden AUSWAHLBYTE_1_BIT_1 --> Adaption Klopfregelung AUSWAHLBYTE_1_BIT_0 --> Adaption Leerlaufabgleich Min: 0.0 Max: 255.0 |
| AUSWAHLBYTE_2 | unsigned char | AUSWAHLBYTE_2_BIT_7 --> Adaption Variabler Ventiltrieb (VVT) AUSWAHLBYTE_2_BIT_6 --> Adaption gelernte Varianten AUSWAHLBYTE_2_BIT_5 --> Adaption Oktanzahl AUSWAHLBYTE_2_BIT_4 --> Registrierung Batterietausch AUSWAHLBYTE_2_BIT_3 --> Adaption Hochdruckpumpe AUSWAHLBYTE_2_BIT_2 --> Adaption Sekundaerluftsystem (NOT USED) AUSWAHLBYTE_2_BIT_1 --> Adaption NOx-Sensor (NOT USED) AUSWAHLBYTE_2_BIT_0 --> Adaption Lastregelung |
| AUSWAHLBYTE_3 | unsigned char | AUSWAHLBYTE_3_BIT_7 --> Energieadaption Injektoren (NOT USED) AUSWAHLBYTE_3_BIT_6 --> NOT USED AUSWAHLBYTE_3_BIT_5 --> NOT USED AUSWAHLBYTE_3_BIT_4 --> Adaption Laufunruhe (Faktor und Offset) und zylinderindividuelle Lambdaregelung(NOT USED) AUSWAHLBYTE_3_BIT_3 --> Adaption Zylindergleichstellung fuer Bandende und Fahrzyklus AUSWAHLBYTE_3_BIT_2 --> Adaption Verbrennungsregelung AUSWAHLBYTE_3_BIT_1 --> Adaption Segmentzeit AUSWAHLBYTE_3_BIT_0 --> Adaption VANOS Min: 0.0 Max: 255.0 |

### ADAP2_SELEKTIV_LOESCHEN

Ansteuern Adaptionen 2 selektiv loeschen ADAP2_SELEKTIV_LOESCHEN (0x31 01 F031)

| Name | Type | Description |
| --- | --- | --- |
| ADAV2_AUSWAHLBYTE_1 | unsigned char | ADAV2_AUSWAHLBYTE_1_BIT_7 -- > Kleinstmengenadaption ADAV2_AUSWAHLBYTE_1_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_3 --> Adaption elektrische Kraftstoffpumpe ADAV2_AUSWAHLBYTE_1_BIT_2 --> Adaption Langzeit fuer Injektoralterung Bank 2(NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_1 --> Adaption Langzeit fuer Injektoralterung Bank 1(NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_0 --> Adaption Nullgangsensor (Achtung: Mit diesem Bit darf die Adaption des Nullgangsensors nicht mehr geloescht werden! Bei Austausch des Nullgangsensors soll die Adaption mit dem dafuer vorgesehenen Dienst durch Min: 0.0 Max: 255.0 |
| ADAV2_AUSWAHLBYTE_2 | unsigned char | ADAV2_AUSWAHLBYTE_2_BIT_7 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_6 --> Verlustmomentadaption Reset ADAV2_AUSWAHLBYTE_2_BIT_5 --> Adaption NOx-Katalysator (NOT USED) ADAV2_AUSWAHLBYTE_2_BIT_4 --> Bereichserkennung Benzin im Oel (B_clradbo) ADAV2_AUSWAHLBYTE_2_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_0 --> NOT USED Min: 0.0 Max: 255.0 |
| ADAV2_AUSWAHLBYTE_3 | unsigned char | ADAV2_AUSWAHLBYTE_3_BIT_7 --> Zuruecksetzen der Hubkorrekturstatistik per Tester (Bit-Name = B_vbr_stat_reset_ext und Basisvariable = St_vbr_stat) ADAV2_AUSWAHLBYTE_3_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_0 --> NOT USED Min: 0.0 Max: 255.0 |

### STATUS_IBS_STROMMESSUNG

Auslesen IBS Strommessung UDS: $31 RoutineControl

_No arguments._

### STATUS_SYSTEMCHECK_ZSZ

Auslesen Zuendkerze freibrennen (Kalttestspezifisch) SYSTEMCHECK_ZSZ (0x31 03 F036)

_No arguments._

### STOP_SYSTEMCHECK_ZSZ

Ende Zuendkerze freibrennen (Kalttestspezifisch) SYSTEMCHECK_ZSZ (0x31 02 F036)

_No arguments._

### START_SYSTEMCHECK_ZSZ

Ansteuern Zuendkerze freibrennen (Kalttestspezifisch) SYSTEMCHECK_ZSZ (0x31 01 F036)

| Name | Type | Description |
| --- | --- | --- |
| ZUENDFREQUENZ | unsigned char | Zuendfrequenz zum Freibrennen der Zuendkerzen Einheit: 1/s Min: 0.0 Max: 255.0 a2l-Name: BasSvr_fCldTstIgnCln |
| FREIBRENNDAUER | real | Freibrenndauer Einheit: s Min: 0.0 Max: 655.35 a2l-Name: BasSvr_tiCldTstIgnCln |
| LADEDAUER | real | Ladedauer fuer alle Kalttest-Zuendungstests (Freibrennen, zeitgesteuerte Ablauf- sequenz, winkelsynchroner Test) Einheit: ms Min: 0.0 Max: 65.535 a2l-Name: BasSvr_tiCldTstIgnChDur |

### STOP_SYSTEMCHECK_ZSZW

Ende betriebspunktunabhaengiger (Winkelsynchroner) Zuenspulentest (Kalttestspezifisch) SYSTEMCHECK_ZSZW (0x31 02 F037)

_No arguments._

### START_SYSTEMCHECK_ZSZW

Ansteuern betriebspunktunabhaengiger (Winkelsynchroner) Zuenspulentest (Kalttestspezifisch) SYSTEMCHECK_ZSZW (0x31 01 F037)

| Name | Type | Description |
| --- | --- | --- |
| LADEDAUER | real | Ladedauer fuer alle Kalttest-Zuendungstests (Freibrennen, zeitgesteuerte Ablauf- sequenz, winkelsynchroner Test) Einheit: ms Min: 0.0 Max: 65.535 a2l-Name: BasSvr_tiCldTstIgnChDur |
| ZUENDWINKEL | real | Zuendwinkel fuer winkelsynchronen Zuendungstest (Es wird nur ein Wert uebertragen, welcher fuer alle Zylinder gleichermassen gilt). Einheit: ° KW Min: -96.0 Max: 95.30000000000001 a2l-Name: zwoutzylt_w |

### STATUS_SYSTEMCHECK_ZSZW

Auslesen betriebspunktunabhaengiger (Winkelsynchroner) Zuenspulentest (Kalttestspezifisch) SYSTEMCHECK_ZSZW (0x31 03 F037)

_No arguments._

### START_SYSTEMCHECK_EVZ

Ansteuern Sequentieller EV-Zylinderabfolgetest (Kalttestspezifisch) SYSTEMCHECK_EVZ (0x31 01 F038)

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERDAUER | real | Ansteuerdauer pro Einspritzimpuls vom Testermodul Einheit: ms Min: 0.0 Max: 4294967.295 a2l-Name: BasSvr_tiCldTstInjET |
| PERIONDENDAUER | real | Periodendauer fuer Einspritzimpuls vom Testermodul Einheit: s Min: 0.0 Max: 655.35 a2l-Name: BasSvr_tiCldTstInjPer |
| PAUSENDAUER | real | Pausendauer zwischen der Ansteuerung der Injektoren bei Ansteuersequenz vom Testermodul Einheit: s Min: 0.0 Max: 2.5500000000000003 a2l-Name: BasSvr_tiCldTstInjPse |
| ANZAHL_DER_TESTIMPULSE | unsigned char | Anzahl der Testimpulse pro Injektor vom Testermodul Min: 0.0 Max: 255.0 a2l-Name: BasSvr_numCldTstInjPls |

### STATUS_SYSTEMCHECK_EVZ

Auslesen Sequentieller EV-Zylinderabfolgetest (Kalttestspezifisch) SYSTEMCHECK_EVZ (0x31 03 F038)

_No arguments._

### STOP_SYSTEMCHECK_EVZ

Ende Sequentieller EV-Zylinderabfolgetest (Kalttestspezifisch) SYSTEMCHECK_EVZ (0x31 02 F038)

_No arguments._

### STOP_SYSTEMCHECK_ZSZZ

Ende Zeitbasierte Zuendsequenz (Kalttestspezifisch) SYSTEMCHECK_ZSZZ (0x31 02 F039)

_No arguments._

### START_SYSTEMCHECK_ZSZZ

Ansteuern Zeitbasierte Zuendsequenz (Kalttestspezifisch) SYSTEMCHECK_ZSZZ (0x31 01 F039)

| Name | Type | Description |
| --- | --- | --- |
| PAUSENDAUER | real | Pausendauer zwischen der Ansteuerung der Zuendkerzen bei Ansteuersequenz vom Testermodul Einheit: s Min: 0.0 Max: 2.5500000000000003 a2l-Name: BasSvr_tiCldTstIgnSeqPse |
| LADEDAUER | real | Ladedauer fuer alle Kalttest-Zuendungstests (Freibrennen, zeitgesteuerte Ablauf- sequenz, winkelsynchroner Test Einheit: ms Min: 0.0 Max: 65.535 a2l-Name: BasSvr_tiCldTstIgnChDur |

### STATUS_SYSTEMCHECK_ZSZZ

Auslesen Zeitbasierte Zuendsequenz (Kalttestspezifisch) SYSTEMCHECK_ZSZZ (0x31 03 F039)

_No arguments._

### STATUS_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Status-Routine ZWDIAG (0x31 03 F03A)

_No arguments._

### STOP_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Stop-Routine ZWDIAG (0x31 02 F03A)

_No arguments._

### START_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Start-Routine ZWDIAG (0x31 01 F03A)

| Name | Type | Description |
| --- | --- | --- |
| FAC_CH_DIAG_EXT_ADJ_IS | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen im Leerlauf Min: 0.0 Max: 1.9921875 a2l-Name: fetakhllfa |
| FAC_CH_DIAG_EXT_ADJ_PL | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen in der Teillast Min: 0.0 Max: 1.9921875 a2l-Name: fetakhtlfa |
| LV_CH_DIAG_EXT_REQ | unsigned char | Anforderung an Anpassung der geforderten Momentenreserve durch Katheizen ueber Tester (Leerlauf/Teillastbetrieb) Min: 0.0 Max: 3.0 a2l-Name: B_fetakhll, B_fetakhtl |

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

### STOP_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x31 02 F042)

_No arguments._

### STATUS_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x31 03 F042)

_No arguments._

### START_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader starten SYSTEMCHECK_ATL (0x31 01 F0D0)

_No arguments._

### STOP_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader beenden SYSTEMCHECK_ATL (0x31 02 F0D0)

_No arguments._

### STATUS_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader auslesen SYSTEMCHECK_ATL (0x31 03 F0D0)

_No arguments._

### STATUS_SYSTEMCHECK_GLF

Auslesen Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0x31 03 F0D5)

_No arguments._

### STOP_SYSTEMCHECK_GLF

Ende Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0x31 02 F0D5)

_No arguments._

### START_SYSTEMCHECK_GLF

Ansteuern Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0x31 01 F0D5)

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

Auslesen Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0x31 03 F0D9)

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

Ende Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0x31 02 F0D9)

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

Ansteuerung Lambdaregelung deaktivieren SYSTEMCHECK_L_REGELUNG_AUS (0x31 01 F0D9)

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Diagnosefunktion DMTL beenden SYSTEMCHECK_DMTL (0x31 02 F0DA)

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Auslesen Diagnosefunktion DMTL SYSTEMCHECK_DMTL (0x31 03 F0DA)

_No arguments._

### START_SYSTEMCHECK_DMTL

Ansteuern Diagnosefunktion DMTL SYSTEMCHECK_DMTL (0x31 01 F0DA)

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

### STATUS_EISYUGD

Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0x31 03 F0E0)

_No arguments._

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

### START_KLANN

Ansteuern Klann-Adaptionswerte (Anforderung aus CP10798) KLANN (0x31 01 F0E4)

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw_loc |
| RK_LOC | real | Relative Kraftstoffmasse Min: 0.0 Max: 3199.951171875 a2l-Name: rk_loc |
| TMOT_LOC | real | Kuehlwassertemperatur Einheit: °C Min: -327.68 Max: 327.67 a2l-Name: tmot_loc |

### STATUS_KLANN

Auslesen Klann-Adaptionswerte (Anforderung aus CP10798) KLANN (0x31 03 F0E4)

_No arguments._

### STATUS_DDLSHK

Auslesen Dynamik Diagnose Lambdasonden hinter Hauptkat DDLSHK (0x31 03 F0E7)

_No arguments._

### START_DDLSHK

Ansteuern Dynamik Diagnose Lambdasonden hinter Hauptkat DDLSHK (0x31 01 F0E7)

_No arguments._

### STOP_DDLSHK

Ende Dynamik Diagnose Lambdasonden hinter Hauptkat DDLSHK (0x31 02 F0E7)

_No arguments._

### STATUS_CRAM

Auslesen RAM-Backup-Werte loeschen CRAM (0x31 03 F0E9)

_No arguments._

### START_CRAM

Ansteuern RAM-Backup-Werte loeschen CRAM (0x31 01 F0E9)

_No arguments._

### START_SYSTEMCHECK_DKAT

Ansteuern Kurztest Kat SYSTEMCHECK_DKAT (0x31 01 F0EB)

_No arguments._

### STOP_SYSTEMCHECK_DKAT

Ende Kurztest Kat SYSTEMCHECK_DKAT (0x31 02 F0EB)

_No arguments._

### STATUS_SYSTEMCHECK_DKAT

Auslesen Kurztest Kat SYSTEMCHECK_DKAT (0x31 03 F0EB)

_No arguments._

### START_RAM

Ansteuern RAM Backup zwangssichern RAM (0x31 01 F0F2)

_No arguments._

### STATUS_RAM

Auslesen RAM Backup zwangssichern RAM (0x31 03 F0F2)

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

Auslesen Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 03 F0F6)

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

Ende Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 02 F0F6)

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

Ansteuern Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 01 F0F6)

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

0x3103F0F7 STATUS_SYSTEMCHECK_IGR_AUS Auslesen Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_IGR_AUS

0x3101F0F7 START_SYSTEMCHECK_IGR_AUS Ansteuerung Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

0x3102F0F7 STOP_SYSTEMCHECK_IGR_AUS Ende Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelag vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x05 | Bsi | Service Inclusive |
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
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode  | Allgemeiner Fertigungs- und Energiesparmode  |
| 0x01 | Spezieller Energiesparmode | Spezieller Energiesparmode |
| 0x02 | ECOS-Mode | ECOS-Mode |
| 0x03 | MOST-Mode | MOST-Mode |
| 0x04 | Betriebsmode 4 | Betriebsmode 4 |
| 0x05 | Betriebsmode 5 | Betriebsmode 5 |
| 0x06 | Rollenmode | Rollenmode |
| 0xFF | ungültiger Betriebsmodus | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | ja |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021200 | Energiesparmode aktiv | 0 |
| 0x02FF12 | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x100001 | Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100210 | Drosselklappensteller, Positionsüberwachung: Lageabweichung | 0 |
| 0x100A02 | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x100A10 | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Sammelfehler | 0 |
| 0x100C08 | Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zur Luftmasse | 0 |
| 0x100E08 | Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zur Luftmasse | 0 |
| 0x101001 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101002 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101401 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 0 |
| 0x101402 | Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 0 |
| 0x101C08 | Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101F01 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x101F02 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x102001 | Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102010 | Luftmassenmesser, Plausibilität: Luftmasse gegenüber Modell zu hoch | 0 |
| 0x102011 | Luftmassenmesser, Plausibilität: Luftmasse gegenüber Modell zu niedrig | 0 |
| 0x102610 | Luftmassenmesser, Signal: Unplausible Periodendauer, Wackelkontakt mit niedriger Frequenz | 0 |
| 0x102611 | Luftmassenmesser, Signal: Unplausible Periodendauer, Wackelkontakt mit hoher Frequenz | 0 |
| 0x102612 | Luftmassenmesser, Signal: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x102801 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig, Luftmasse zu niedrig | 0 |
| 0x102A01 | Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A02 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß, Luftmasse zu hoch | 0 |
| 0x103001 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103101 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103308 | Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x10351C | Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104301 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104302 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104401 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104402 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104610 | Absolutdrucksensor, Saugrohr, Plausibilität: Saugrohrdruck zu hoch | 0 |
| 0x104611 | Absolutdrucksensor, Saugrohr, Plausibilität: Saugrohrdruck zu niedrig | 0 |
| 0x104A40 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104B01 | Absolutdrucksensor, Saugrohr: Sammelfehler | 0 |
| 0x105001 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Plus] | 0 |
| 0x105002 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Masse] | 0 |
| 0x105101 | Umgebungsdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x105102 | Umgebungsdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x105201 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu hoch im Nachlauf] | 0 |
| 0x105202 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu niedrig im Nachlauf] | 0 |
| 0x105A30 | DME: interner Fehler [Umgebungsdrucksensor: Sammelfehler] | 0 |
| 0x105A40 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu hoch] | 0 |
| 0x105A41 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu niedrig] | 0 |
| 0x105A42 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x105A43 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x107801 | Tuningschutz: Luftmasse zu hoch | 0 |
| 0x107A22 | Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zu Ersatzwert aus Füllung | 0 |
| 0x107A30 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x107A31 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x107A32 | Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zu Ersatzwert aus Füllung | 0 |
| 0x107A40 | Drosselklappenpotenziometer: Drosselklappenpotenziometer 1 oder 2, Funktion | 0 |
| 0x107A50 | Drosselklappe: Notlauf aktiv | 0 |
| 0x107A70 | Drosselklappe, Ansteuerung: Kurzschluss | 0 |
| 0x107A71 | Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler | 0 |
| 0x107A73 | Drosselklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x107A80 | Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | Drosselklappe, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A90 | Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | Drosselklappe, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107AE0 | Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x107AF0 | Drosselklappe, Verstärkerabgleich: Fehlfunktion | 0 |
| 0x107C10 | Laststeuerung, Plausibilität: Massenstrom zu hoch | 0 |
| 0x108001 | Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108010 | Ansauglufttemperatursensor, Signaländerung: zu schnell | 0 |
| 0x108920 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108930 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108932 | Ansauglufttemperatursensor: Sammelfehler | 0 |
| 0x108A01 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A10 | Ladelufttemperatursensor, Spannungsänderung: zu schnell | 0 |
| 0x108C01 | Ladelufttemperatur, Plausibilität: Temperatur zu hoch | 0 |
| 0x108C08 | Ladelufttemperatur, Signal: festliegend | 0 |
| 0x108F01 | Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109002 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109208 | Kühlmitteltemperatursensor, Signal: festliegend auf niedrig | 0 |
| 0x109308 | Kühlmitteltemperatursensor, Signaländerung: zu schnell | 0 |
| 0x10AA20 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10AA21 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10AA30 | Kühlmitteltemperatursensor: Sammelfehler | 0 |
| 0x10AA40 | FlexRay, Botschaft (Kühlmitteltemperatursensor): fehlt | 0 |
| 0x10AA50 | Kühlmitteltemperatursensor, Signal: festliegend auf hoch | 0 |
| 0x10AA51 | Kühlmitteltemperatursensor, Signal: festliegend auf niedrig | 0 |
| 0x10AA52 | Kühlmitteltemperatursensor, Signal: festliegend | 0 |
| 0x10B101 | Außentemperatursensor: Kurzschluss nach Plus | 0 |
| 0x10B102 | Außentemperatursensor: Kurzschluss nach Masse | 0 |
| 0x10B104 | Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 0 |
| 0x10BA20 | Außentemperatursensor, Signal: Oberen Schwellwert überschritten | 0 |
| 0x10BA21 | Außentemperatursensor, Signal: Unteren Schwellwert unterschritten | 0 |
| 0x10BA22 | Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 0 |
| 0x10BA30 | Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | Außentemperatursensor, Plausibilität: Außentemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | Außentemperatursensor, Plausibilität: Außentemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA42 | Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10BA43 | Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA48 | Ansauglufttemperatur - Ladelufttemperatur, Vergleich: Ansauglufttemperatur zu hoch | 0 |
| 0x10BA49 | Ansauglufttemperatur - Ladelufttemperatur, Vergleich: Ansauglufttemperatur zu niedrig | 0 |
| 0x10BA4A | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10BA4B | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA4F | Ladelufttemperatursensor, Plausibilität: Ladelufttemperatur zu hoch | 0 |
| 0x10BA51 | Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x10C001 | Ladelufttemperatursensor, Signaländerung: zu schnell | 0 |
| 0x10C004 | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10C005 | Ladelufttemperatursensor, Signaländerung: zu schnell | 0 |
| 0x110001 | Zylindereinspritzabschaltung: Katschutz wegen Druck zu niedrig im Kraftstoff-System | 0 |
| 0x110101 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110102 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110104 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110108 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110201 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110202 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110204 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110208 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110301 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110302 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110304 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110308 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110401 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110402 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110404 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110408 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110501 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110502 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110504 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110508 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110601 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110602 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110604 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110608 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x111020 | Injektor Zylinder 1 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111021 | Injektor Zylinder 2 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111022 | Injektor Zylinder 3 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111023 | Injektor Zylinder 4 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111024 | Injektor Zylinder 5 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111025 | Injektor Zylinder 6 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111030 | Injektor Zylinder 1, Stromanstieg: zu langsam | 0 |
| 0x111031 | Injektor Zylinder 2, Stromanstieg: zu langsam | 0 |
| 0x111032 | Injektor Zylinder 3, Stromanstieg: zu langsam | 0 |
| 0x111033 | Injektor Zylinder 4, Stromanstieg: zu langsam | 0 |
| 0x111034 | Injektor Zylinder 5, Stromanstieg: zu langsam | 0 |
| 0x111035 | Injektor Zylinder 6, Stromanstieg: zu langsam | 0 |
| 0x111040 | Injektor Zylinder 1 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111041 | Injektor Zylinder 2 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111042 | Injektor Zylinder 3 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111043 | Injektor Zylinder 4 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111044 | Injektor Zylinder 5 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111045 | Injektor Zylinder 6 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111050 | Injektor Zylinder 1, mechanisch: Ventil klemmt offen | 0 |
| 0x111051 | Injektor Zylinder 2, mechanisch: Ventil klemmt offen | 0 |
| 0x111052 | Injektor Zylinder 3, mechanisch: Ventil klemmt offen | 0 |
| 0x111053 | Injektor Zylinder 4, mechanisch: Ventil klemmt offen | 0 |
| 0x111054 | Injektor Zylinder 5, mechanisch: Ventil klemmt offen | 0 |
| 0x111055 | Injektor Zylinder 6, mechanisch: Ventil klemmt offen | 0 |
| 0x111060 | Injektor Zylinder 1 und 2, elektrisch: Einspritzventil 1 oder 2 klemmt offen | 0 |
| 0x111061 | Injektor Zylinder 3 und 4, elektrisch: Einspritzventil 3 oder 4 klemmt offen | 0 |
| 0x111110 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft | 0 |
| 0x111111 | DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation fehlerhaft | 0 |
| 0x111112 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel | 0 |
| 0x111113 | DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation unplausibel | 0 |
| 0x111114 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation gestört | 0 |
| 0x111115 | DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation gestört | 0 |
| 0x111116 | Injektor Zylinder 5 und 6, elektrisch: Einspritzventil 5 oder 6 klemmt offen | 0 |
| 0x111117 | Injektor Zylinder 7 und 8, elektrisch: Einspritzventil 7 oder 8 klemmt offen | 0 |
| 0x113025 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus | 0 |
| 0x113026 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse | 0 |
| 0x113027 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung | 0 |
| 0x118001 | Gemischregelung: Gemisch zu mager | 0 |
| 0x118002 | Gemischregelung: Gemisch zu fett | 0 |
| 0x118401 | Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118C02 | Gemischregelung, Injektor-Alterung: langfristige Adaption unplausibel | 0 |
| 0x118E01 | Gemischadaption, Leerlauf: Gemisch zu mager | 0 |
| 0x118E02 | Gemischadaption, Leerlauf: Gemisch zu fett | 0 |
| 0x118F20 | Gemischadaption, unterer Drehzahlbereich: Gemisch in Teillast zu mager | 0 |
| 0x118F21 | Gemischadaption, unterer Drehzahlbereich: Gemisch in Teillast zu fett | 0 |
| 0x119001 | Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119201 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119202 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119301 | Raildrucksensor, Arbeitsbereich: Druck zu hoch | 0 |
| 0x119302 | Raildrucksensor, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x119304 | Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119308 | Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119404 | Raildrucksensor, Signal: festliegend | 0 |
| 0x11A001 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch | 0 |
| 0x11A002 | Kraftstoffhochdruck, Plausibilität: Druck zu niedrig | 0 |
| 0x11A201 | Kraftstoffniederdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x11A204 | Kraftstoffniederdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x11A210 | Kraftstoffniederdrucksystem, Plausibilität: Leistung elektrische Kraftstoffpumpe für Istdruck zu hoch | 0 |
| 0x11A211 | Kraftstoffniederdrucksystem: Leistung elektrische Kraftstoffpumpe für Istdruck zu niedrig | 0 |
| 0x11A301 | Kraftstoffhochdruck nach Motorstopp: Druck zu hoch | 0 |
| 0x11A401 | Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11A701 | Raildrucksensor, Plausibilität: Druck zu niedrig | 0 |
| 0x11A702 | Raildrucksensor, Plausibilität: Druck zu hoch | 0 |
| 0x11AA01 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch, Notlauf mit Niederdruck | 0 |
| 0x11AA02 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch, Notlauf mit Einspritzabschaltung | 0 |
| 0x11AA04 | Kraftstoffhochdruck: Druck kurzzeitig zu hoch, Drehzahl- und Lastbegrenzung | 0 |
| 0x11AB01 | Kraftstoffhochdrucksystem, Plausibilität: Regelabweichung des Mengensteuerventils zu groß | 0 |
| 0x11AB02 | Kraftstoffhochdrucksystem, Plausibilität: Regelabweichung des Mengensteuerventils zu klein | 0 |
| 0x11AC01 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11AD10 | Kraftstoffdruck: Minimaldruck unterschritten, Einspritzabschaltung zum Katschutz | 0 |
| 0x11AE01 | Kraftstoffversorgungssytem, Lambdaregelung: obere Grenze überschritten | 0 |
| 0x11AE02 | Kraftstoffversorgungssytem, Lambdaregelung: untere Grenze unterschritten | 0 |
| 0x11B209 | Kraftstoffniederdrucksystem, Plausibilität: Förderleistung zu niedrig | 0 |
| 0x11B210 | Kraftstoffniederdrucksystem, Plausibilität: Spannung elektrische Kraftstoffpumpe unplausibel | 0 |
| 0x11B211 | Kraftstoffniederdrucksystem, Regelung: Istdruck zu niedrig | 0 |
| 0x11B212 | Kraftstoffniederdrucksystem, Regelung: Istdruck zu hoch | 0 |
| 0x11B401 | Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B501 | Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11B601 | Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (verzögerte Umweltbedingungen): Druck zu niedrig | 0 |
| 0x11C401 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11CF30 | Gemischregelung: Sammelfehler | 0 |
| 0x120208 | Ladedruckregelung, Plausibilität: Druck zu hoch | 0 |
| 0x120308 | Ladedruckregelung, Plausibilität: Druck zu niedrig | 0 |
| 0x120408 | Ladedruckregelung: Abschaltung als Folgereaktion | 0 |
| 0x121001 | Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121201 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121202 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121521 | Ladedrucksensor: Sammelfehler | 0 |
| 0x121530 | Ladedruck, Plausibilität: Druck zu hoch | 0 |
| 0x121531 | Ladedruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121532 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch | 0 |
| 0x121533 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig | 0 |
| 0x121601 | Ladedrucksensor: Druck zu hoch | 0 |
| 0x121602 | Ladedrucksensor: Druck zu niedrig | 0 |
| 0x122001 | Schubumluftventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122002 | Schubumluftventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122004 | Schubumluftventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x122108 | Schubumluftventil: klemmt geschlossen | 0 |
| 0x122201 | Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil | 0 |
| 0x123001 | Wastegate, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123002 | Wastegate, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123004 | Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123201 | Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x128101 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128501 | Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128901 | Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128E01 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x128E08 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x129001 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129801 | Lambdasonde nach Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x129A20 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A101 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A102 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A308 | Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AF08 | Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B101 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B505 | Lambdasondenbeheizung vor Katalysator, Funktion: Heizerfehler | 0 |
| 0x12B701 | Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BD20 | Lambdasondenbeheizung vor Katalysator, Funktion: Betriebstemperatur nicht erreicht | 0 |
| 0x12BD21 | Lambdasondenbeheizung vor Katalysator, Funktion: Mangelnde Signalbereitschaft | 0 |
| 0x12BD22 | DME, interner Fehler, Lambdasonde vor Katalysator: Kalibrierwiderstandswert unplausibel | 0 |
| 0x12BD33 | Lambdasonde nach Katalysator, Alterung: Schubspannungsschwelle nicht erreicht | 0 |
| 0x12BD40 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12BD41 | Lambdasonde nach Katalysator, elektrisch: Adernschluss oder Lambdasonde vergiftet | 0 |
| 0x12BD43 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12BD50 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD51 | Lambdasonde vor Katalysator, Pumpstromleitung: Signalspannung im Schub zu klein infolge offener Pumpstromleitung | 0 |
| 0x12BD52 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD70 | Lambdasonde vor Katalysator, elektrisch: Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizungsfehler | 0 |
| 0x12BD80 | Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BD90 | Lambdasonde vor Katalysator, Plausibilität: Gemisch nach Katalysator zu fett | 0 |
| 0x12BD91 | Lambdasonde vor Katalysator, Plausibilität: Gemisch nach Katalysator zu mager | 0 |
| 0x12BD92 | Lambdasonde vor Katalysator, Plausibilität: festliegend auf mager | 0 |
| 0x12BD93 | Lambdasonde vor Katalysator, Plausibilität: festliegend auf fett | 0 |
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
| 0x130E11 | Einlassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130E20 | Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | Auslassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130F20 | Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x132101 | VANOS, Auslass: Sammelfehler | 0 |
| 0x132201 | VANOS, Einlass: Sammelfehler | 0 |
| 0x132301 | VANOS: Sammelfehler | 0 |
| 0x132408 | VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132508 | VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x133101 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133206 | Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x133208 | Valvetronic-Stellmotor, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133304 | Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133710 | Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133B04 | Valvetronic System: keine Verstellung möglich | 0 |
| 0x133E10 | Valvetronic System: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x134A02 | Valvetronic-Stellmotor: Überlastung | 0 |
| 0x134F01 | Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 0 |
| 0x135301 | DME, interner Fehler, Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x135302 | Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System | 0 |
| 0x135401 | Valvetronic: Endstufe überlastet | 0 |
| 0x135402 | Valvetronic-Stellmotor: Überlastung | 0 |
| 0x135501 | Valvetronic: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135502 | Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135604 | Valvetronic System: Regelabweichung zu gross | 0 |
| 0x135608 | Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135705 | Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135706 | Valvetronic System: unterer Anschlag gelernt | 0 |
| 0x135808 | Valvetronic-Stellmotor, Positionssensoren, elektrisch: Fehlfunktion | 0 |
| 0x135908 | Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x135A08 | Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x135A10 | Valvetronic-Stellmotor, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135B10 | Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x138101 | Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138201 | Kühlerjalousie, oben, Versorgungsspannung, Eigendiagnose: Fehlfunktion | 0 |
| 0x138301 | Kühlerjalousie, oben, Eigendiagnose: Übertemperatur erkannt | 0 |
| 0x138401 | Kühlerjalousie, oben, Eigendiagnose: elektrischer Fehler | 0 |
| 0x138501 | Kühlerjalousie, oben: unterer Anschlag nicht erkannt | 0 |
| 0x138601 | Kühlerjalousie, oben: oberer Anschlag nicht erkannt | 0 |
| 0x138701 | Kühlerjalousie, oben: oberer Anschlag zu früh erkannt | 0 |
| 0x138901 | Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138902 | Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138904 | Kühlerjalousie, unten, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x140001 | Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140101 | Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140201 | Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140301 | Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140401 | Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140501 | Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140601 | Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x143201 | Laufunruhe, Füllung Einzelzylinder: Momentenbeitrag zu niedrig | 0 |
| 0x150102 | Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150502 | Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x151001 | Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus | 0 |
| 0x152007 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse | 0 |
| 0x152009 | Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152108 | Superklopfen Zylinder 1: Einspritzabschaltung | 0 |
| 0x152208 | Superklopfen Zylinder 2: Einspritzabschaltung | 0 |
| 0x152308 | Superklopfen Zylinder 3: Einspritzabschaltung | 0 |
| 0x152408 | Superklopfen Zylinder 4: Einspritzabschaltung | 0 |
| 0x152508 | Superklopfen Zylinder 5: Einspritzungsabschaltung | 0 |
| 0x152608 | Superklopfen Zylinder 6: Einspritzungsabschaltung | 0 |
| 0x152D08 | Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160510 | Kurbelwellensensor [Plausibilität]: Impulsbreite unplausibel | 0 |
| 0x164020 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164021 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164030 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164031 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164040 | Einlassnockenwelle: Montage fehlerhaft | 0 |
| 0x164041 | Auslassnockenwelle: Montage fehlerhaft | 0 |
| 0x168A20 | Klopfregelung: Systemfehler | 0 |
| 0x168A30 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A70 | Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168A71 | Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168A80 | Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168A81 | Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x180001 | Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x190001 | DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190002 | DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190004 | DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190201 | Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1,0 mm | 0 |
| 0x190302 | Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
| 0x190401 | DMTL, Systemfehler: Pumpenstrom zu groß bei Referenzmessung | 0 |
| 0x190402 | DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung | 0 |
| 0x190404 | DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung | 0 |
| 0x190408 | DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert | 0 |
| 0x190501 | DMTL, Heizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190502 | DMTL, Heizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190504 | DMTL, Heizung, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190601 | DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190702 | DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190704 | DMTL-Leckdiagnosepumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191001 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191A20 | Tankentlüftungsventil: klemmt geschlossen | 0 |
| 0x191A21 | Tankentlüftungsventil: klemmt offen | 0 |
| 0x191B01 | Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191B02 | Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191B04 | Tankentlüftungssystem Absperrventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191C01 | Tankentlüftungssystem Absperrventil: klemmt offen | 0 |
| 0x191C02 | Tankentlüftungssystem, 2. Einleitestelle: Fehlfunktion | 0 |
| 0x191C03 | Tankentlüftungssystem, 2. Einleitestelle, Nachlauf: Fehlfunktion | 0 |
| 0x191D01 | Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x192001 | Tankdeckel: nicht korrekt geschlossen | 0 |
| 0x192002 | Tankdeckel: offen im Nachlauf | 0 |
| 0x193002 | Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193008 | Kraftstoff-Füllstandsgeber, links, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193011 | Kraftstoff-Füllstandsgeber, rechts, Signal: Kurzschluss nach Plus | 0 |
| 0x193102 | Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193108 | Kraftstoff-Füllstandsgeber, rechts, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193111 | Kraftstoff-Füllstandsgeber, links, Signal: Kurzschluss nach Plus | 0 |
| 0x193120 | Kraftstoff-Füllstandsgeber, links, Plausibilität: Tankfüllstandssignal zu hoch | 0 |
| 0x193218 | Tankfüllstandssensor: Signal unplausibel wegen festhängendem Tankfüllstandsgeber | 0 |
| 0x193220 | Tankfüllstand, Plausibilität: Tankfüllstand größer als Tankvolumen | 0 |
| 0x193221 | Tankfüllstandssensor: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193A20 | Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
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
| 0x1B0A20 | Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 0 |
| 0x1B0A50 | Fahrzeuggeschwindigkeit: Sammelfehler | 0 |
| 0x1B0A60 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel | 0 |
| 0x1B0A61 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel | 0 |
| 0x1B0A62 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A64 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 0 |
| 0x1B0A65 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 0 |
| 0x1B0A66 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 0 |
| 0x1B0A67 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 0 |
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
| 0x1B2302 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 0 |
| 0x1B2304 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 0 |
| 0x1B5101 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5202 | Klemme 15N_1: keine Spannung | 0 |
| 0x1B5302 | Klemme 15N_2: keine Spannung | 0 |
| 0x1B5402 | Klemme 15N_3: keine Spannung | 0 |
| 0x1B6008 | Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B9004 | Motorabstellzeit: Zeitüberschreitung oder Ungültigkeitswert | 0 |
| 0x1B9008 | Motorabstellzeit: Signal unplausibel | 0 |
| 0x1B9508 | Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf | 0 |
| 0x1B9702 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf | 0 |
| 0x1B9804 | Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf | 0 |
| 0x1B9A02 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf | 0 |
| 0x1BC004 | Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1C0001 | Motoröldruckregelung, Plausibilität: Druckschwankungen | 0 |
| 0x1C0101 | Motoröldruckregelung, Plausibilität, statisch: Druck zu hoch | 0 |
| 0x1C0102 | Motoröldruckregelung, Plausibilität, statisch: Druck zu niedrig | 0 |
| 0x1C0201 | Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0301 | Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | Motoröldruckregelung: instabil | 0 |
| 0x1C2001 | Motorölpumpe: Druck zu hoch | 0 |
| 0x1C2002 | Motorölpumpe: Druck zu niedrig | 0 |
| 0x1C3001 | Motoröldrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1C3002 | Motoröldrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1C3101 | Motoröldrucksensor, Plausibilität: Druck zu hoch vor Start | 0 |
| 0x1C3102 | Motoröldrucksensor, Plausibilität: Druck zu niedrig vor Start | 0 |
| 0x1C3108 | Motoröldrucksensor, Signal: festliegend | 0 |
| 0x1C4002 | Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | Ölzustandssensor: Fehlfunktion | 0 |
| 0x1C4111 | Ölzustandssensor, Plausibilität: Niveau unplausibel | 0 |
| 0x1C4112 | Ölzustandssensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C4113 | Ölzustandssensor, Plausibilität: Niveau unplausibel | 0 |
| 0x1C4114 | Ölzustandssensor, Plausibilität: Permittivität unplausibel | 0 |
| 0x1C4115 | Ölzustandssensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C4116 | Ölzustand, Status Niveau: Fehlfunktion | 0 |
| 0x1C4117 | Ölzustand, Status Permittivität: Fehlfunktion | 0 |
| 0x1C4118 | Ölzustandssensor, Status Temperatur: Fehlfunktion | 0 |
| 0x1C4119 | Motoröltemperatursensor, elektrisch: Fehlfunktion | 0 |
| 0x1C4120 | Motoröltemperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C5A20 | BSD, Kommunikation (Ölzustandssensor): fehlt | 0 |
| 0x1D2008 | Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2401 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3701 | Powermanagement, Batterie: Drehzahlanhebung aufgrund niedrigem Ladezustand | 0 |
| 0x1D3901 | EGS, Signalüberwachung (Drehzahl_Getriebestrang_Turbine): Signalausfall oder ungültiger Signalinhalt | 0 |
| 0x1D3A01 | Kommunikation: Signal (Drehzahl_Getriebestrang_Abtrieb) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 0 |
| 0x1D3B01 | EGS, Signalüberwachung (Status_Gangwahl_Antrieb): Signalausfall oder ungültiger Signalinhalt | 0 |
| 0x1D3C01 | Kommunikation: Signal (Status_Schaltung_Aktiv_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig | 0 |
| 0x1E0001 | Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E5201 | Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5301 | Manipulationsschutz: Motorleistung zu hoch | 0 |
| 0x1E5A20 | Antrieb, Sicherheitsfunktion: Leistungsreduzierung durch Sicherheitskonzept | 0 |
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
| 0x1F0533 | DME, interner Fehler, Überwachung MSC-Kommunikation: Fehlfunktion an Baustein R2S2/2 | 0 |
| 0x1F0904 | DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F1A40 | DME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x1F1A50 | DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A51 | DME, interner Fehler: Lesen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A70 | DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x1F1A71 | DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x1F1A72 | DME, interner Fehler, Überwachung 5V-Versorgung 2: Überspannung erkannt | 0 |
| 0x1F1A73 | DME, interner Fehler, Überwachung 5V-Versorgung 2: Unterspannung erkannt | 0 |
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
| 0x1F1B50 | Bordnetzspannung, DME-Hauptrelais, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x1F2102 | Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt | 0 |
| 0x1F2104 | DME, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt | 0 |
| 0x1F2108 | DME, falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | DME, Kodierung: fehlt | 0 |
| 0x1F2604 | DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2701 | DME, Kodierung: Schreibfehler | 0 |
| 0x1F2702 | DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2704 | DME, Kodierung: Daten unplausibel | 0 |
| 0x1F4A01 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F5020 | DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | DME Temperatur: Übertemperatur | 0 |
| 0x1FBB01 | Check-Control-Meldung (ID 567): Motorlüfter. Gemäßigt fahren | 0 |
| 0x200502 | DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung ICM unplausibel | 0 |
| 0x200503 | DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung ICM unplausibel | 0 |
| 0x200D04 | Antrieb, Sicherheitsfunktion: Bussignal Fahrpedalwert unplausibel | 0 |
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
| 0x201008 | CBS-Client: Verfügbarkeitssprung | 0 |
| 0x201010 | A- / FA-CAN Hardware: defekt | 0 |
| 0x201020 | FlexRay Hardware: defekt | 0 |
| 0x201030 | Testfunktion Layer: Fehlergruppe 1 | 0 |
| 0x201040 | Testfunktion Layer: Fehlergruppe 2 | 0 |
| 0x201101 | DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A701 | Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A801 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A901 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x20A902 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20A909 | BSD, Kommunikation (Motor-Kühlmittelpumpe): fehlt | 0 |
| 0x20AA04 | Motor-Kühlsystem: Kommunikation mit Kühlmittelpumpe fehlerhaft | 0 |
| 0x20AB08 | Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe | 0 |
| 0x20AC08 | Kühlmittelpumpe, Hardwareeingang: Status Notlauf-Eingang unplausibel | 0 |
| 0x20AD08 | Kühlmittelpumpe: Drehzahl unplausibel | 0 |
| 0x20BA20 | Kupplungsschalter, Signal: fehlt | 0 |
| 0x210201 | Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | Generator, Temperatur: Übertemperatur | 0 |
| 0x210501 | Generator, Plausibilität, Temperatur: Übertemperatur berechnet | 0 |
| 0x210601 | Generator, mechanisch: Fehlfunktion | 0 |
| 0x210701 | Generator, Regler: Typ falsch | 0 |
| 0x210801 | Generator: Typ falsch | 0 |
| 0x210901 | Generator, Kommunikation: keine Kommunikation | 0 |
| 0x210C01 | Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211A21 | BSD-Bus: Kommunikationsfehler | 0 |
| 0x211F01 | Generator/Startergenerator: Codierung fehlt | 0 |
| 0x212001 | Startergenerator, Kommunikation: Bus-Fehler | 0 |
| 0x212101 | Startergenerator, Plausibilität, elektrisch: berechnet | 0 |
| 0x212201 | Startergenerator, elektrisch: Fehlfunktion | 0 |
| 0x212301 | Startergenerator: Übertemperatur | 1 |
| 0x212401 | Startergenerator, mechanisch: Fehlfunktion | 0 |
| 0x212501 | Startergenerator, MSA Hardwareleitung: Signal unplausibel | 0 |
| 0x212601 | Startergenerator: MSA dauerhaft deaktiviert | 1 |
| 0x212701 | Startergenerator: MSA zeitweise deaktiviert | 1 |
| 0x212801 | Startergenerator: Sensorfehler | 0 |
| 0x212A01 | Startergenerator: Typ falsch | 0 |
| 0x213301 | Powermanagement: zentrale Überspannung | 0 |
| 0x213401 | Powermanagement: zentrale Unterspannung | 0 |
| 0x213501 | Powermanagement: Batterie Tiefentladung | 0 |
| 0x213604 | Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x213701 | Powermanagement: Batterieloser Betrieb | 0 |
| 0x213801 | Powermanagement: Transportüberwachung Ladezustand Batterie tiefentladen | 0 |
| 0x213901 | Powermanagement: Verbraucherreduzierung aktiv | 0 |
| 0x213A01 | Powermanagement: Transportüberwachung Ladezustand Batterie entladen | 0 |
| 0x213A20 | Bordnetzspannung, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x213A21 | Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x213A22 | Bordnetzspannung: Analog-Digital-Wandler defekt | 0 |
| 0x213B08 | Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C08 | Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x213D01 | Powermanagement, Bauteilerkennung: Batterieladeeinheit und Power Control Unit erkannt | 0 |
| 0x215001 | Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 |
| 0x215101 | Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215104 | Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215108 | Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215801 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 |
| 0x215B01 | Intelligenter Batteriesensor, Kommunikation: keine Kommunikation | 0 |
| 0x215C01 | Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 |
| 0x218001 | Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion | 0 |
| 0x218201 | Batterieladeeinheit, Sekundäre Batterie: defekt | 0 |
| 0x218301 | Batterieladeeinheit: Fehler im Trennelement/Kabelbaum | 0 |
| 0x219001 | Aktives Motorlager, elektrisch: Kurzschluss nach Plus | 0 |
| 0x219002 | Aktives Motorlager, elektrisch: Kurzschluss nach Masse | 0 |
| 0x219004 | Aktives Motorlager, elektrisch: Leitungsunterbrechung | 0 |
| 0x21A210 | Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 0 |
| 0x231501 | Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231802 | CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231902 | CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231F04 | A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 0 |
| 0xCD840A | FA-CAN Control Module Bus OFF | 0 |
| 0xCD8420 | FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | A-CAN Control Module Bus OFF | 0 |
| 0xCD8801 | FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCD8BFF | Netzwerkfehler: nur zum Test | 1 |
| 0xCD8C10 | LIN, Botschaft (Ladezustand Status IBS_LIN, 0x0A): fehlt | 0 |
| 0xCD8C11 | LIN, Botschaft (Fehler Status IBS_LIN, 0x0B): fehlt | 0 |
| 0xCD8C12 | LIN, Botschaft (Werte IBS_LIN, 0x09): fehlt | 0 |
| 0xCD8D10 | Kühlerjalousie, Kommunikation: gestört | 0 |
| 0xCD8D15 | LIN, Botschaft (Batterieladeeinheit, sekundäre Batterie): Elektrischer Fehler | 0 |
| 0xCD8D16 | LIN, Botschaft (Batterieladeeinheit, H-Brücke): Kein Ladebetrieb möglich | 0 |
| 0xCD8D17 | LIN, Botschaft (Batterieladeeinheit, Status Energieerzeugung Bordnetz 2, 0x5): fehlt | 0 |
| 0xCD8D18 | LIN, Botschaft (Batterieladeeinheit, Trennelement oder Leitung): Elektrischer Fehler | 0 |
| 0xCD8D19 | LIN, Kommunikation (Batterieladeeinheit, zweite Spannungsebene): Fehlfunktion | 0 |
| 0xCD8E10 | LIN Bus: Kommunikationsfehler | 0 |
| 0xCD8E11 | LIN, Kommunikation (Ladeeinheit für Zusatzbatterie): fehlt | 0 |
| 0xCD8F01 | LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD9002 | Kühlmittelpumpe, Kommunikation: Ungültige Botschaft | 1 |
| 0xCD9011 | Motor-Kühlsystem: Kommunikation mit Kühlmittelpumpe fehlerhaft | 0 |
| 0xCD9201 | LIN, Kommunikation (Kühlerjalousie): Zeitüberschreitung | 0 |
| 0xCD9203 | LIN, Kommunikation (Kühlerjalousie): fehlt | 0 |
| 0xCD9402 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9432 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: fehlt | 1 |
| 0xCD9435 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 1 |
| 0xCD9437 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD9502 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCD9508 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9902 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Aliveprüfung | 1 |
| 0xCD9933 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): fehlt | 1 |
| 0xCD9934 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Prüfsumme falsch | 1 |
| 0xCD9935 | FlexRay, Botschaft (Daten Fahrdynamiksensor Erweitert, 38.0.2): fehlt | 1 |
| 0xCD9A02 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
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
| 0xCDA204 | FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA302 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA402 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA410 | FlexRay, Botschaft (Anzeige LDM 1, 135.0.2): fehlt | 1 |
| 0xCDA421 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA425 | FlexRay, Botschaft (Status Parkassistent, 231.1.2): fehlt | 1 |
| 0xCDA426 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA430 | FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 74.0.2): Aliveprüfung | 1 |
| 0xCDA431 | FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 74.0.2): Prüfsumme falsch | 1 |
| 0xCDA432 | FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 74.0.2): fehlt | 1 |
| 0xCDA435 | FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA440 | FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): Aliveprüfung | 1 |
| 0xCDA441 | FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): Prüfsumme falsch | 1 |
| 0xCDA442 | FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA451 | FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied, 49.0.2): fehlt | 1 |
| 0xCDA512 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Aliveprüfung | 1 |
| 0xCDA514 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xCDA518 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Prüfsumme falsch | 1 |
| 0xCDA602 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDA608 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDA702 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDA904 | FA-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt | 1 |
| 0xCDAB04 | FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAE04 | FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB002 | FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDB008 | FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDB102 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDB108 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDB204 | FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB304 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB404 | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB904 | FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBA04 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA10 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xCDBA11 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xCDBA12 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xCDBA13 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xCDBA14 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xCDBA15 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xCDBA17 | FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): fehlt | 1 |
| 0xCDBA20 | FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Aliveprüfung | 1 |
| 0xCDBA21 | FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Prüfsumme falsch | 1 |
| 0xCDBA22 | FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): fehlt | 1 |
| 0xCDBA25 | FA-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCDBA30 | FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): Aliveprüfung | 1 |
| 0xCDBA31 | FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): Prüfsumme falsch | 1 |
| 0xCDBA32 | FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): fehlt | 1 |
| 0xCDBB02 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBB10 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xCDBB11 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xCDBB12 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xCDBB20 | A-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7): Aliveprüfung | 1 |
| 0xCDBB21 | A-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7): Prüfsumme falsch | 1 |
| 0xCDBB22 | A-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7): fehlt | 1 |
| 0xCDBC04 | A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): fehlt | 1 |
| 0xCDBC10 | A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): fehlt | 1 |
| 0xCDBC20 | A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Aliveprüfung | 1 |
| 0xCDBC21 | A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Prüfsumme falsch | 1 |
| 0xCDBC22 | A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): fehlt | 1 |
| 0xCDBC23 | A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCDBD04 | A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): fehlt | 1 |
| 0xCDBE02 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBE20 | A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): Aliveprüfung | 1 |
| 0xCDBE21 | A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): Prüfsumme falsch | 1 |
| 0xCDBE22 | A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): fehlt | 1 |
| 0xCDBF04 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDBF20 | A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): Aliveprüfung | 1 |
| 0xCDBF21 | A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): Prüfsumme falsch | 1 |
| 0xCDBF22 | A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): fehlt | 1 |
| 0xCDC004 | A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC208 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC304 | A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
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
| 0x5820 | Bedingung Klemme 15 | 0/1 | - | 0xFF | - | - | - | - |
| 0x5821 | Steuergerätetemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5822 | Öltemperatur | °C | - | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x5823 | Abstellzeit | s | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5825 | Spannung von BCU gemessen (U_BCU_LIN) | V | - | signed int | - | 0.01 | 1.0 | 0.0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned int | - | 0.00305176 | 1.0 | 0.0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0.01 | 1.0 | 0.0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed int | - | 0.00048828 | 1.0 | 0.0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | °C | - | unsigned char | - | 5.0 | 1.0 | -50.0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5832 | Zustand Motor-Koordinator | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100.0 | 1.0 | 0.0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | - | - | - |
| 0x583A | Ansaugluft-Temperatur bei Start | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x583B | Fuellstand Kraftstofftank | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0.0942 | 1.0 | 0.0 |
| 0x583D | Betriebsstundenzähler | min | - | unsigned int | - | 6.0 | 1.0 | 0.0 |
| 0x583E | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5840 | DK-Winkel der Notluftposition | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x5841 | Wert Temperatur Steuergerät | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | -1.0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned int | - | 0.00039063 | 1.0 | 0.0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5851 | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned int | - | 0.02 | 1.0 | -200.0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x5854 | Batterietemperatur vom IBS | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0.125 | 1.0 | 0.0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5859 | Pumpenstrom Referenzleck | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0x585A | min. Pumpenstrom bei Grobleckmessung | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0x585B | Pumpenstrom am Ende der Feinstleckmessung | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
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
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5871 | Zähler Prüfzustand für DVESTANZNMOT | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed int | - | 0.00003052 | 1.0 | 0.0 |
| 0x587B | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irreversibel | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x587E | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversibel | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5882 | Motorstarttemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5883 | [0] Referenzpegel Klopfregelung, 16 bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5884 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0.125 | 1.0 | 0.0 |
| 0x5885 | [2] Referenzpegel Klopfregelung, 16bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5886 | [3] Referenzpegel Klopfregelung, 16bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5888 | [5] Referenzpegel Klopfregelung, 16bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x588B | Zeit nach Startende | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x588C | Keramiktemperatur der LSU | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x588D | aktuelle Zeit Leckmessung | s | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x588E | Pumpenstrom Tankdiagnose | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x5894 | [4] Spannung Klopfwerte Zylinder 2 | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5895 | [1] Spannung Klopfwerte Zylinder 5 | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned char | - | 0.1 | 1.0 | 10.6 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | - | - | - |
| 0x589B | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | - | - | - |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | - | - | - |
| 0x589D | Anzahl erkannter VVT Lageregelungsfehler | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x589E | Sollwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x589F | Batterietemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned int | - | 0.01820445 | 1.0 | 0.0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A4 | Generatorstatus | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58A5 | Vom Generator empfangenes Lastsignal | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x58A6 | Rel. Exzenterwinkel | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | µs | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B0 | Zähler für Lerndauer eines Lernsteps | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 5 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 6 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B5 | [4] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B6 | [5] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned int | - | 0.046875 | 1.0 | 0.0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0.75 | 1.0 | 0.0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x58D2 | Luftklappe - Sollposition in Grad | - | - | unsigned char | - | 0.50196081 | 1.0 | 0.0 |
| 0x58D3 | Luftklappe - Istposition in Grad | - | - | unsigned char | - | 0.50196081 | 1.0 | 0.0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | - | - | - |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | % DK | - | signed int | - | 0.02441406 | 1.0 | 0.0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned int | - | 0.078125 | 1.0 | 0.0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E1 | Abgleich DK-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E3 | Abgleich EV-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58E5 | Rotorposition VVT-Motor | ° | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58E6 | Soll-Bestromung VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x58E9 | empf. Spannung von BSS-Wasserpumpe | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x58EA | empf. Istdrehzahl von BSS-Wasserpumpe | 1/min | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58EC | empf. Temperatur von BSS-Wasserpumpe | °C | - | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x58ED | empf. Strom von BSS-Wasserpumpe | % | - | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F2 | Tastverhältnis Mengensteuerventil | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0.01289062 | 1.0 | 0.0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed int | - | 0.00078125 | 1.0 | 0.0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0.5 | 1.0 | 0.0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x021200 | Energiesparmode aktiv | 0 |
| 0x02FF12 | Fehlerspeichereintrag: nur zum Test | 0 |
| 0x100001 | Drosselklappe, Funktion: klemmt kurzzeitig | 0 |
| 0x100101 | Drosselklappe, Funktion: klemmt dauerhaft | 0 |
| 0x100201 | Drosselklappe, Funktion: schwergängig, zu langsam | 0 |
| 0x100210 | Drosselklappensteller, Positionsüberwachung: Lageabweichung | 0 |
| 0x100A02 | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler | 0 |
| 0x100A10 | Drosselklappe, Drosselklappenpotenziometer 1 und 2: Sammelfehler | 0 |
| 0x100C08 | Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zur Luftmasse | 0 |
| 0x100E08 | Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zur Luftmasse | 0 |
| 0x101001 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101002 | Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101401 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt | 0 |
| 0x101402 | Drosselklappe, Adaption: Notluftposition nicht adaptiert | 0 |
| 0x101408 | Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101410 | Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig | 0 |
| 0x101C08 | Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 | 0 |
| 0x101F01 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch | 0 |
| 0x101F02 | Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig | 0 |
| 0x102001 | Luftmasse, Plausibilität: Luftmasse zu hoch | 0 |
| 0x102002 | Luftmasse, Plausibilität: Luftmasse zu niedrig | 0 |
| 0x102010 | Luftmassenmesser, Plausibilität: Luftmasse gegenüber Modell zu hoch | 0 |
| 0x102011 | Luftmassenmesser, Plausibilität: Luftmasse gegenüber Modell zu niedrig | 0 |
| 0x102610 | Luftmassenmesser, Signal: Unplausible Periodendauer, Wackelkontakt mit niedriger Frequenz | 0 |
| 0x102611 | Luftmassenmesser, Signal: Unplausible Periodendauer, Wackelkontakt mit hoher Frequenz | 0 |
| 0x102612 | Luftmassenmesser, Signal: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x102801 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig, Luftmasse zu niedrig | 0 |
| 0x102A01 | Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102A02 | Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß, Luftmasse zu hoch | 0 |
| 0x103001 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103101 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x103308 | Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 | 0 |
| 0x10351C | Fahrpedalmodul, Pedalwertgeber: Sammelfehler | 0 |
| 0x104301 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x104302 | Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x104401 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104402 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104610 | Absolutdrucksensor, Saugrohr, Plausibilität: Saugrohrdruck zu hoch | 0 |
| 0x104611 | Absolutdrucksensor, Saugrohr, Plausibilität: Saugrohrdruck zu niedrig | 0 |
| 0x104A40 | Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus | 0 |
| 0x104B01 | Absolutdrucksensor, Saugrohr: Sammelfehler | 0 |
| 0x105001 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Plus] | 0 |
| 0x105002 | DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Masse] | 0 |
| 0x105101 | Umgebungsdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x105102 | Umgebungsdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x105201 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu hoch im Nachlauf] | 0 |
| 0x105202 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu niedrig im Nachlauf] | 0 |
| 0x105A30 | DME: interner Fehler [Umgebungsdrucksensor: Sammelfehler] | 0 |
| 0x105A40 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu hoch] | 0 |
| 0x105A41 | DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu niedrig] | 0 |
| 0x105A42 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x105A43 | DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] | 0 |
| 0x107801 | Tuningschutz: Luftmasse zu hoch | 0 |
| 0x107A22 | Drosselklappe, Drosselklappenpotenziometer 1: Signal unplausibel zu Ersatzwert aus Füllung | 0 |
| 0x107A30 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x107A31 | Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x107A32 | Drosselklappe, Drosselklappenpotenziometer 2: Signal unplausibel zu Ersatzwert aus Füllung | 0 |
| 0x107A40 | Drosselklappenpotenziometer: Drosselklappenpotenziometer 1 oder 2, Funktion | 0 |
| 0x107A50 | Drosselklappe: Notlauf aktiv | 0 |
| 0x107A70 | Drosselklappe, Ansteuerung: Kurzschluss | 0 |
| 0x107A71 | Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch | 0 |
| 0x107A72 | DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler | 0 |
| 0x107A73 | Drosselklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x107A80 | Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht | 0 |
| 0x107A81 | Drosselklappe, schliessende Federprüfung: Fehlfunktion | 0 |
| 0x107A90 | Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht | 0 |
| 0x107A91 | Drosselklappe, öffnende Federprüfung: Fehlfunktion | 0 |
| 0x107AE0 | Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt | 0 |
| 0x107AF0 | Drosselklappe, Verstärkerabgleich: Fehlfunktion | 0 |
| 0x107C10 | Laststeuerung, Plausibilität: Massenstrom zu hoch | 0 |
| 0x108001 | Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108002 | Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108010 | Ansauglufttemperatursensor, Signaländerung: zu schnell | 0 |
| 0x108920 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108930 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x108932 | Ansauglufttemperatursensor: Sammelfehler | 0 |
| 0x108A01 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x108A02 | Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108A10 | Ladelufttemperatursensor, Spannungsänderung: zu schnell | 0 |
| 0x108C01 | Ladelufttemperatur, Plausibilität: Temperatur zu hoch | 0 |
| 0x108C08 | Ladelufttemperatur, Signal: festliegend | 0 |
| 0x108F01 | Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen | 0 |
| 0x109001 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x109002 | Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109208 | Kühlmitteltemperatursensor, Signal: festliegend auf niedrig | 0 |
| 0x109308 | Kühlmitteltemperatursensor, Signaländerung: zu schnell | 0 |
| 0x10AA20 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10AA21 | Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10AA30 | Kühlmitteltemperatursensor: Sammelfehler | 0 |
| 0x10AA40 | FlexRay, Botschaft (Kühlmitteltemperatursensor): fehlt | 0 |
| 0x10AA50 | Kühlmitteltemperatursensor, Signal: festliegend auf hoch | 0 |
| 0x10AA51 | Kühlmitteltemperatursensor, Signal: festliegend auf niedrig | 0 |
| 0x10AA52 | Kühlmitteltemperatursensor, Signal: festliegend | 0 |
| 0x10B101 | Außentemperatursensor: Kurzschluss nach Plus | 0 |
| 0x10B102 | Außentemperatursensor: Kurzschluss nach Masse | 0 |
| 0x10B104 | Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 0 |
| 0x10BA20 | Außentemperatursensor, Signal: Oberen Schwellwert überschritten | 0 |
| 0x10BA21 | Außentemperatursensor, Signal: Unteren Schwellwert unterschritten | 0 |
| 0x10BA22 | Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft | 0 |
| 0x10BA30 | Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität | 0 |
| 0x10BA40 | Außentemperatursensor, Plausibilität: Außentemperatur größer als Modelltemperatur | 0 |
| 0x10BA41 | Außentemperatursensor, Plausibilität: Außentemperatur kleiner als Modelltemperatur | 0 |
| 0x10BA42 | Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10BA43 | Ansauglufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA48 | Ansauglufttemperatur - Ladelufttemperatur, Vergleich: Ansauglufttemperatur zu hoch | 0 |
| 0x10BA49 | Ansauglufttemperatur - Ladelufttemperatur, Vergleich: Ansauglufttemperatur zu niedrig | 0 |
| 0x10BA4A | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10BA4B | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig | 0 |
| 0x10BA4F | Ladelufttemperatursensor, Plausibilität: Ladelufttemperatur zu hoch | 0 |
| 0x10BA51 | Ladelufttemperatursensor, Kaltstart: Sammelfehler | 0 |
| 0x10BA52 | Ladelufttemperatursensor: Sammelfehler | 0 |
| 0x10C001 | Ladelufttemperatursensor, Signaländerung: zu schnell | 0 |
| 0x10C004 | Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch | 0 |
| 0x10C005 | Ladelufttemperatursensor, Signaländerung: zu schnell | 0 |
| 0x110001 | Zylindereinspritzabschaltung: Katschutz wegen Druck zu niedrig im Kraftstoff-System | 0 |
| 0x110101 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110102 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110104 | Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110108 | Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110201 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110202 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110204 | Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110208 | Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110301 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110302 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110304 | Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110308 | Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110401 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110402 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110404 | Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110408 | Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110501 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110502 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110504 | Injektor Zylinder 5, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110508 | Injektor Zylinder 5, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110601 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110602 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110604 | Injektor Zylinder 6, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110608 | Injektor Zylinder 6, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x111020 | Injektor Zylinder 1 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111021 | Injektor Zylinder 2 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111022 | Injektor Zylinder 3 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111023 | Injektor Zylinder 4 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111024 | Injektor Zylinder 5 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111025 | Injektor Zylinder 6 Hochspannungsseite, Ansteuerung: Windungsschluss | 0 |
| 0x111030 | Injektor Zylinder 1, Stromanstieg: zu langsam | 0 |
| 0x111031 | Injektor Zylinder 2, Stromanstieg: zu langsam | 0 |
| 0x111032 | Injektor Zylinder 3, Stromanstieg: zu langsam | 0 |
| 0x111033 | Injektor Zylinder 4, Stromanstieg: zu langsam | 0 |
| 0x111034 | Injektor Zylinder 5, Stromanstieg: zu langsam | 0 |
| 0x111035 | Injektor Zylinder 6, Stromanstieg: zu langsam | 0 |
| 0x111040 | Injektor Zylinder 1 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111041 | Injektor Zylinder 2 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111042 | Injektor Zylinder 3 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111043 | Injektor Zylinder 4 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111044 | Injektor Zylinder 5 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111045 | Injektor Zylinder 6 Niederspannungsseite, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x111050 | Injektor Zylinder 1, mechanisch: Ventil klemmt offen | 0 |
| 0x111051 | Injektor Zylinder 2, mechanisch: Ventil klemmt offen | 0 |
| 0x111052 | Injektor Zylinder 3, mechanisch: Ventil klemmt offen | 0 |
| 0x111053 | Injektor Zylinder 4, mechanisch: Ventil klemmt offen | 0 |
| 0x111054 | Injektor Zylinder 5, mechanisch: Ventil klemmt offen | 0 |
| 0x111055 | Injektor Zylinder 6, mechanisch: Ventil klemmt offen | 0 |
| 0x111060 | Injektor Zylinder 1 und 2, elektrisch: Einspritzventil 1 oder 2 klemmt offen | 0 |
| 0x111061 | Injektor Zylinder 3 und 4, elektrisch: Einspritzventil 3 oder 4 klemmt offen | 0 |
| 0x111110 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft | 0 |
| 0x111111 | DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation fehlerhaft | 0 |
| 0x111112 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel | 0 |
| 0x111113 | DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation unplausibel | 0 |
| 0x111114 | DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation gestört | 0 |
| 0x111115 | DME, interner Fehler, HDEV-Endstufen-Baustein 2: SPI-Kommunikation gestört | 0 |
| 0x111116 | Injektor Zylinder 5 und 6, elektrisch: Einspritzventil 5 oder 6 klemmt offen | 0 |
| 0x111117 | Injektor Zylinder 7 und 8, elektrisch: Einspritzventil 7 oder 8 klemmt offen | 0 |
| 0x113025 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus | 0 |
| 0x113026 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse | 0 |
| 0x113027 | Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung | 0 |
| 0x118001 | Gemischregelung: Gemisch zu mager | 0 |
| 0x118002 | Gemischregelung: Gemisch zu fett | 0 |
| 0x118401 | Gemischregelung: Gemisch zu mager, große Abweichung | 0 |
| 0x118402 | Gemischregelung: Gemisch zu fett, große Abweichung | 0 |
| 0x118601 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118C02 | Gemischregelung, Injektor-Alterung: langfristige Adaption unplausibel | 0 |
| 0x118E01 | Gemischadaption, Leerlauf: Gemisch zu mager | 0 |
| 0x118E02 | Gemischadaption, Leerlauf: Gemisch zu fett | 0 |
| 0x118F20 | Gemischadaption, unterer Drehzahlbereich: Gemisch in Teillast zu mager | 0 |
| 0x118F21 | Gemischadaption, unterer Drehzahlbereich: Gemisch in Teillast zu fett | 0 |
| 0x119001 | Raildrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119002 | Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119201 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119202 | Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119301 | Raildrucksensor, Arbeitsbereich: Druck zu hoch | 0 |
| 0x119302 | Raildrucksensor, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x119304 | Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart | 0 |
| 0x119308 | Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart | 0 |
| 0x119404 | Raildrucksensor, Signal: festliegend | 0 |
| 0x11A001 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch | 0 |
| 0x11A002 | Kraftstoffhochdruck, Plausibilität: Druck zu niedrig | 0 |
| 0x11A201 | Kraftstoffniederdruck, Arbeitsbereich: Druck zu hoch | 0 |
| 0x11A204 | Kraftstoffniederdruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x11A210 | Kraftstoffniederdrucksystem, Plausibilität: Leistung elektrische Kraftstoffpumpe für Istdruck zu hoch | 0 |
| 0x11A211 | Kraftstoffniederdrucksystem: Leistung elektrische Kraftstoffpumpe für Istdruck zu niedrig | 0 |
| 0x11A301 | Kraftstoffhochdruck nach Motorstopp: Druck zu hoch | 0 |
| 0x11A401 | Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11A701 | Raildrucksensor, Plausibilität: Druck zu niedrig | 0 |
| 0x11A702 | Raildrucksensor, Plausibilität: Druck zu hoch | 0 |
| 0x11AA01 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch, Notlauf mit Niederdruck | 0 |
| 0x11AA02 | Kraftstoffhochdruck, Plausibilität: Druck zu hoch, Notlauf mit Einspritzabschaltung | 0 |
| 0x11AA04 | Kraftstoffhochdruck: Druck kurzzeitig zu hoch, Drehzahl- und Lastbegrenzung | 0 |
| 0x11AB01 | Kraftstoffhochdrucksystem, Plausibilität: Regelabweichung des Mengensteuerventils zu groß | 0 |
| 0x11AB02 | Kraftstoffhochdrucksystem, Plausibilität: Regelabweichung des Mengensteuerventils zu klein | 0 |
| 0x11AC01 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch | 0 |
| 0x11AC02 | Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig | 0 |
| 0x11AD10 | Kraftstoffdruck: Minimaldruck unterschritten, Einspritzabschaltung zum Katschutz | 0 |
| 0x11AE01 | Kraftstoffversorgungssytem, Lambdaregelung: obere Grenze überschritten | 0 |
| 0x11AE02 | Kraftstoffversorgungssytem, Lambdaregelung: untere Grenze unterschritten | 0 |
| 0x11B209 | Kraftstoffniederdrucksystem, Plausibilität: Förderleistung zu niedrig | 0 |
| 0x11B210 | Kraftstoffniederdrucksystem, Plausibilität: Spannung elektrische Kraftstoffpumpe unplausibel | 0 |
| 0x11B211 | Kraftstoffniederdrucksystem, Regelung: Istdruck zu niedrig | 0 |
| 0x11B212 | Kraftstoffniederdrucksystem, Regelung: Istdruck zu hoch | 0 |
| 0x11B401 | Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig | 0 |
| 0x11B501 | Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig | 0 |
| 0x11B601 | Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (verzögerte Umweltbedingungen): Druck zu niedrig | 0 |
| 0x11C401 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C402 | Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C404 | Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11CF30 | Gemischregelung: Sammelfehler | 0 |
| 0x120208 | Ladedruckregelung, Plausibilität: Druck zu hoch | 0 |
| 0x120308 | Ladedruckregelung, Plausibilität: Druck zu niedrig | 0 |
| 0x120408 | Ladedruckregelung: Abschaltung als Folgereaktion | 0 |
| 0x121001 | Ladedrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x121002 | Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121201 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch | 0 |
| 0x121202 | Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig | 0 |
| 0x121521 | Ladedrucksensor: Sammelfehler | 0 |
| 0x121530 | Ladedruck, Plausibilität: Druck zu hoch | 0 |
| 0x121531 | Ladedruck, Arbeitsbereich: Druck zu niedrig | 0 |
| 0x121532 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch | 0 |
| 0x121533 | Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig | 0 |
| 0x121601 | Ladedrucksensor: Druck zu hoch | 0 |
| 0x121602 | Ladedrucksensor: Druck zu niedrig | 0 |
| 0x122001 | Schubumluftventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122002 | Schubumluftventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122004 | Schubumluftventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x122108 | Schubumluftventil: klemmt geschlossen | 0 |
| 0x122201 | Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil | 0 |
| 0x123001 | Wastegate, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123002 | Wastegate, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123004 | Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123201 | Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung | 0 |
| 0x128101 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128501 | Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert | 0 |
| 0x128901 | Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | Lambdasonde vor Katalysator: Falschluft erkannt | 0 |
| 0x128E01 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung | 0 |
| 0x128E08 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Abgleichleitung | 0 |
| 0x129001 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus | 0 |
| 0x129002 | Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse | 0 |
| 0x129201 | DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler | 0 |
| 0x129202 | DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler | 0 |
| 0x129801 | Lambdasonde nach Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x129A20 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch | 0 |
| 0x129A21 | DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung | 0 |
| 0x12A101 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A102 | Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A308 | Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion | 0 |
| 0x12A701 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12A902 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse | 0 |
| 0x12AB04 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12AF08 | Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion | 0 |
| 0x12B101 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B102 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B104 | Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B505 | Lambdasondenbeheizung vor Katalysator, Funktion: Heizerfehler | 0 |
| 0x12B701 | Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12BD20 | Lambdasondenbeheizung vor Katalysator, Funktion: Betriebstemperatur nicht erreicht | 0 |
| 0x12BD21 | Lambdasondenbeheizung vor Katalysator, Funktion: Mangelnde Signalbereitschaft | 0 |
| 0x12BD22 | DME, interner Fehler, Lambdasonde vor Katalysator: Kalibrierwiderstandswert unplausibel | 0 |
| 0x12BD33 | Lambdasonde nach Katalysator, Alterung: Schubspannungsschwelle nicht erreicht | 0 |
| 0x12BD40 | Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus | 0 |
| 0x12BD41 | Lambdasonde nach Katalysator, elektrisch: Adernschluss oder Lambdasonde vergiftet | 0 |
| 0x12BD43 | Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung | 0 |
| 0x12BD50 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD51 | Lambdasonde vor Katalysator, Pumpstromleitung: Signalspannung im Schub zu klein infolge offener Pumpstromleitung | 0 |
| 0x12BD52 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung | 0 |
| 0x12BD60 | Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse | 0 |
| 0x12BD70 | Lambdasonde vor Katalysator, elektrisch: Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizungsfehler | 0 |
| 0x12BD80 | Lambdasonde vor Katalysator: Sammelfehler | 0 |
| 0x12BD90 | Lambdasonde vor Katalysator, Plausibilität: Gemisch nach Katalysator zu fett | 0 |
| 0x12BD91 | Lambdasonde vor Katalysator, Plausibilität: Gemisch nach Katalysator zu mager | 0 |
| 0x12BD92 | Lambdasonde vor Katalysator, Plausibilität: festliegend auf mager | 0 |
| 0x12BD93 | Lambdasonde vor Katalysator, Plausibilität: festliegend auf fett | 0 |
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
| 0x130E11 | Einlassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130E20 | Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x130F11 | Auslassnockenwellensensor, Plausibilität: Muster ungültig | 0 |
| 0x130F20 | Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz | 0 |
| 0x131401 | VANOS, Auslass, Kaltstart: nicht regelbar | 0 |
| 0x131501 | VANOS, Einlass, Kaltstart: nicht regelbar | 0 |
| 0x132101 | VANOS, Auslass: Sammelfehler | 0 |
| 0x132201 | VANOS, Einlass: Sammelfehler | 0 |
| 0x132301 | VANOS: Sammelfehler | 0 |
| 0x132408 | VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x132508 | VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition | 0 |
| 0x133101 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133102 | Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133104 | Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133201 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x133202 | Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x133206 | Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb | 0 |
| 0x133208 | Valvetronic-Stellmotor, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x133304 | Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x133710 | Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht | 0 |
| 0x133B04 | Valvetronic System: keine Verstellung möglich | 0 |
| 0x133E10 | Valvetronic System: deaktiviert, zu häufiger Verstellfehler | 0 |
| 0x134A02 | Valvetronic-Stellmotor: Überlastung | 0 |
| 0x134F01 | Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen | 0 |
| 0x134F02 | Valvetronic, Verstellbereich: Anschlag nicht gelernt | 0 |
| 0x134F04 | Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung | 0 |
| 0x134F08 | Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen | 0 |
| 0x134F10 | Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen | 0 |
| 0x135301 | DME, interner Fehler, Valvetronic: Bauteileschutz, Abschaltung System | 0 |
| 0x135302 | Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System | 0 |
| 0x135401 | Valvetronic: Endstufe überlastet | 0 |
| 0x135402 | Valvetronic-Stellmotor: Überlastung | 0 |
| 0x135501 | Valvetronic: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135502 | Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten | 0 |
| 0x135604 | Valvetronic System: Regelabweichung zu gross | 0 |
| 0x135608 | Valvetronic System: keine Bewegung erkannt | 0 |
| 0x135704 | Valvetronic System: Warnschwelle Regelabweichung überschritten | 0 |
| 0x135705 | Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten | 0 |
| 0x135706 | Valvetronic System: unterer Anschlag gelernt | 0 |
| 0x135808 | Valvetronic-Stellmotor, Positionssensoren, elektrisch: Fehlfunktion | 0 |
| 0x135908 | Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlt | 0 |
| 0x135A08 | Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Signale zueinander unplausibel | 0 |
| 0x135A10 | Valvetronic-Stellmotor, Positionssensoren: Absolutwert Exzenterwinkel falsch | 0 |
| 0x135B10 | Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung | 0 |
| 0x135B11 | Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung | 0 |
| 0x135B12 | Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung | 0 |
| 0x135C10 | Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt | 0 |
| 0x135C11 | Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel | 0 |
| 0x138101 | Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138201 | Kühlerjalousie, oben, Versorgungsspannung, Eigendiagnose: Fehlfunktion | 0 |
| 0x138301 | Kühlerjalousie, oben, Eigendiagnose: Übertemperatur erkannt | 0 |
| 0x138401 | Kühlerjalousie, oben, Eigendiagnose: elektrischer Fehler | 0 |
| 0x138501 | Kühlerjalousie, oben: unterer Anschlag nicht erkannt | 0 |
| 0x138601 | Kühlerjalousie, oben: oberer Anschlag nicht erkannt | 0 |
| 0x138701 | Kühlerjalousie, oben: oberer Anschlag zu früh erkannt | 0 |
| 0x138901 | Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138902 | Kühlerjalousie, unten, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138904 | Kühlerjalousie, unten, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x140001 | Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140101 | Verbrennungsaussetzer, Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x140102 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang | 0 |
| 0x140104 | Verbrennungsaussetzer, Zylinder 1: abgasschädigend | 0 |
| 0x140201 | Verbrennungsaussetzer, Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x140202 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang | 0 |
| 0x140204 | Verbrennungsaussetzer, Zylinder 2: abgasschädigend | 0 |
| 0x140301 | Verbrennungsaussetzer, Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x140302 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang | 0 |
| 0x140304 | Verbrennungsaussetzer, Zylinder 3: abgasschädigend | 0 |
| 0x140401 | Verbrennungsaussetzer, Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x140402 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang | 0 |
| 0x140404 | Verbrennungsaussetzer, Zylinder 4: abgasschädigend | 0 |
| 0x140501 | Verbrennungsaussetzer, Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x140502 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend nach Startvorgang | 0 |
| 0x140504 | Verbrennungsaussetzer, Zylinder 5: abgasschädigend | 0 |
| 0x140601 | Verbrennungsaussetzer, Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x140602 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend nach Startvorgang | 0 |
| 0x140604 | Verbrennungsaussetzer, Zylinder 6: abgasschädigend | 0 |
| 0x143201 | Laufunruhe, Füllung Einzelzylinder: Momentenbeitrag zu niedrig | 0 |
| 0x150102 | Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150502 | Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x151001 | Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh | 0 |
| 0x151101 | Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh | 0 |
| 0x152001 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus | 0 |
| 0x152007 | Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse | 0 |
| 0x152009 | Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall | 0 |
| 0x152108 | Superklopfen Zylinder 1: Einspritzabschaltung | 0 |
| 0x152208 | Superklopfen Zylinder 2: Einspritzabschaltung | 0 |
| 0x152308 | Superklopfen Zylinder 3: Einspritzabschaltung | 0 |
| 0x152408 | Superklopfen Zylinder 4: Einspritzabschaltung | 0 |
| 0x152508 | Superklopfen Zylinder 5: Einspritzungsabschaltung | 0 |
| 0x152608 | Superklopfen Zylinder 6: Einspritzungsabschaltung | 0 |
| 0x152D08 | Superklopfen: Einspritzungsabschaltung | 0 |
| 0x160001 | Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160020 | Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160510 | Kurbelwellensensor [Plausibilität]: Impulsbreite unplausibel | 0 |
| 0x164020 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164021 | Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164030 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x164031 | Auslassnockenwellensensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x164040 | Einlassnockenwelle: Montage fehlerhaft | 0 |
| 0x164041 | Auslassnockenwelle: Montage fehlerhaft | 0 |
| 0x168A20 | Klopfregelung: Systemfehler | 0 |
| 0x168A30 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A31 | Klopfsensor 1, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A40 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A41 | Klopfsensor 1, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A50 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus | 0 |
| 0x168A51 | Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse | 0 |
| 0x168A60 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus | 0 |
| 0x168A61 | Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse | 0 |
| 0x168A70 | Klopfsensor 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168A71 | Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x168A80 | Klopfsensor 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168A81 | Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung | 0 |
| 0x180001 | Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x190001 | DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190002 | DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190004 | DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190201 | Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1,0 mm | 0 |
| 0x190302 | Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm | 0 |
| 0x190401 | DMTL, Systemfehler: Pumpenstrom zu groß bei Referenzmessung | 0 |
| 0x190402 | DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung | 0 |
| 0x190404 | DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung | 0 |
| 0x190408 | DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert | 0 |
| 0x190501 | DMTL, Heizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190502 | DMTL, Heizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190504 | DMTL, Heizung, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190601 | DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190702 | DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190704 | DMTL-Leckdiagnosepumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191001 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191A20 | Tankentlüftungsventil: klemmt geschlossen | 0 |
| 0x191A21 | Tankentlüftungsventil: klemmt offen | 0 |
| 0x191B01 | Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191B02 | Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191B04 | Tankentlüftungssystem Absperrventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x191C01 | Tankentlüftungssystem Absperrventil: klemmt offen | 0 |
| 0x191C02 | Tankentlüftungssystem, 2. Einleitestelle: Fehlfunktion | 0 |
| 0x191C03 | Tankentlüftungssystem, 2. Einleitestelle, Nachlauf: Fehlfunktion | 0 |
| 0x191D01 | Tankentlüftungssystem: Fehlfunktion | 0 |
| 0x192001 | Tankdeckel: nicht korrekt geschlossen | 0 |
| 0x192002 | Tankdeckel: offen im Nachlauf | 0 |
| 0x193002 | Kraftstoff-Füllstandsgeber, links, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193008 | Kraftstoff-Füllstandsgeber, links, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193011 | Kraftstoff-Füllstandsgeber, rechts, Signal: Kurzschluss nach Plus | 0 |
| 0x193102 | Kraftstoff-Füllstandsgeber, rechts, elektrisch: Kurzschluss nach Masse | 0 |
| 0x193108 | Kraftstoff-Füllstandsgeber, rechts, Plausibilität: CAN Wert unplausibel | 0 |
| 0x193111 | Kraftstoff-Füllstandsgeber, links, Signal: Kurzschluss nach Plus | 0 |
| 0x193120 | Kraftstoff-Füllstandsgeber, links, Plausibilität: Tankfüllstandssignal zu hoch | 0 |
| 0x193218 | Tankfüllstandssensor: Signal unplausibel wegen festhängendem Tankfüllstandsgeber | 0 |
| 0x193220 | Tankfüllstand, Plausibilität: Tankfüllstand größer als Tankvolumen | 0 |
| 0x193221 | Tankfüllstandssensor: Abweichung zwischen Verbrauch und Füllstandsänderung | 0 |
| 0x193A20 | Tankfüllstand, Sammelfehler: Signal und elektrisch | 0 |
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
| 0x1B0A20 | Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch | 0 |
| 0x1B0A21 | Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten | 0 |
| 0x1B0A40 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch | 0 |
| 0x1B0A50 | Fahrzeuggeschwindigkeit: Sammelfehler | 0 |
| 0x1B0A60 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel | 0 |
| 0x1B0A61 | Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel | 0 |
| 0x1B0A62 | Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel | 0 |
| 0x1B0A64 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel | 0 |
| 0x1B0A65 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel | 0 |
| 0x1B0A66 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel | 0 |
| 0x1B0A67 | Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel | 0 |
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
| 0x1B2302 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler | 0 |
| 0x1B2304 | FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt | 0 |
| 0x1B5101 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1B5102 | Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1B5202 | Klemme 15N_1: keine Spannung | 0 |
| 0x1B5302 | Klemme 15N_2: keine Spannung | 0 |
| 0x1B5402 | Klemme 15N_3: keine Spannung | 0 |
| 0x1B6008 | Bremslichtschalter, Plausibilität: Signal unplausibel | 0 |
| 0x1B9004 | Motorabstellzeit: Zeitüberschreitung oder Ungültigkeitswert | 0 |
| 0x1B9008 | Motorabstellzeit: Signal unplausibel | 0 |
| 0x1B9508 | Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9608 | Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung | 0 |
| 0x1B9701 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf | 0 |
| 0x1B9702 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf | 0 |
| 0x1B9804 | Motorabstellzeit, Signal: fehlt | 0 |
| 0x1B9A01 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf | 0 |
| 0x1B9A02 | Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf | 0 |
| 0x1BC004 | Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) | 0 |
| 0x1C0001 | Motoröldruckregelung, Plausibilität: Druckschwankungen | 0 |
| 0x1C0101 | Motoröldruckregelung, Plausibilität, statisch: Druck zu hoch | 0 |
| 0x1C0102 | Motoröldruckregelung, Plausibilität, statisch: Druck zu niedrig | 0 |
| 0x1C0201 | Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1C0202 | Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1C0204 | Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1C0301 | Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) | 0 |
| 0x1C0302 | Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) | 0 |
| 0x1C0401 | Motoröldruckregelung: instabil | 0 |
| 0x1C2001 | Motorölpumpe: Druck zu hoch | 0 |
| 0x1C2002 | Motorölpumpe: Druck zu niedrig | 0 |
| 0x1C3001 | Motoröldrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1C3002 | Motoröldrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x1C3101 | Motoröldrucksensor, Plausibilität: Druck zu hoch vor Start | 0 |
| 0x1C3102 | Motoröldrucksensor, Plausibilität: Druck zu niedrig vor Start | 0 |
| 0x1C3108 | Motoröldrucksensor, Signal: festliegend | 0 |
| 0x1C4002 | Motorölniveau: zu niedrig | 0 |
| 0x1C4110 | Ölzustandssensor: Fehlfunktion | 0 |
| 0x1C4111 | Ölzustandssensor, Plausibilität: Niveau unplausibel | 0 |
| 0x1C4112 | Ölzustandssensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C4113 | Ölzustandssensor, Plausibilität: Niveau unplausibel | 0 |
| 0x1C4114 | Ölzustandssensor, Plausibilität: Permittivität unplausibel | 0 |
| 0x1C4115 | Ölzustandssensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C4116 | Ölzustand, Status Niveau: Fehlfunktion | 0 |
| 0x1C4117 | Ölzustand, Status Permittivität: Fehlfunktion | 0 |
| 0x1C4118 | Ölzustandssensor, Status Temperatur: Fehlfunktion | 0 |
| 0x1C4119 | Motoröltemperatursensor, elektrisch: Fehlfunktion | 0 |
| 0x1C4120 | Motoröltemperatursensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x1C5A20 | BSD, Kommunikation (Ölzustandssensor): fehlt | 0 |
| 0x1D2008 | Kennfeldthermostat: klemmt offen | 0 |
| 0x1D2401 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2402 | Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2404 | Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1D3701 | Powermanagement, Batterie: Drehzahlanhebung aufgrund niedrigem Ladezustand | 0 |
| 0x1D3901 | EGS, Signalüberwachung (Drehzahl_Getriebestrang_Turbine): Signalausfall oder ungültiger Signalinhalt | 0 |
| 0x1D3A01 | Kommunikation: Signal (Drehzahl_Getriebestrang_Abtrieb) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig | 0 |
| 0x1D3B01 | EGS, Signalüberwachung (Status_Gangwahl_Antrieb): Signalausfall oder ungültiger Signalinhalt | 0 |
| 0x1D3C01 | Kommunikation: Signal (Status_Schaltung_Aktiv_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig | 0 |
| 0x1E0001 | Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | Leerlaufregelung, Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | Leerlaufregelung, Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E5201 | Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch | 0 |
| 0x1E5301 | Manipulationsschutz: Motorleistung zu hoch | 0 |
| 0x1E5A20 | Antrieb, Sicherheitsfunktion: Leistungsreduzierung durch Sicherheitskonzept | 0 |
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
| 0x1F0533 | DME, interner Fehler, Überwachung MSC-Kommunikation: Fehlfunktion an Baustein R2S2/2 | 0 |
| 0x1F0904 | DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion | 0 |
| 0x1F1A40 | DME, interner Fehler: Überwachung SPI-Kommunikation | 0 |
| 0x1F1A50 | DME, interner Fehler: Löschen EEPROM fehlerhaft | 0 |
| 0x1F1A51 | DME, interner Fehler: Lesen EEPROM fehlerhaft | 0 |
| 0x1F1A52 | DME, interner Fehler: Schreiben EEPROM fehlerhaft | 0 |
| 0x1F1A60 | DME, interner Fehler: Überwachungsmodulfehler | 0 |
| 0x1F1A70 | DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt | 0 |
| 0x1F1A71 | DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt | 0 |
| 0x1F1A72 | DME, interner Fehler, Überwachung 5V-Versorgung 2: Überspannung erkannt | 0 |
| 0x1F1A73 | DME, interner Fehler, Überwachung 5V-Versorgung 2: Unterspannung erkannt | 0 |
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
| 0x1F1B50 | Bordnetzspannung, DME-Hauptrelais, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x1F2102 | Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt | 0 |
| 0x1F2104 | DME, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt | 0 |
| 0x1F2108 | DME, falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2601 | DME, Kodierung: fehlt | 0 |
| 0x1F2604 | DME, Kodierung: Fahrgestellnummer falsch | 0 |
| 0x1F2701 | DME, Kodierung: Schreibfehler | 0 |
| 0x1F2702 | DME, Kodierung: Signaturprüfung fehlerhaft | 0 |
| 0x1F2704 | DME, Kodierung: Daten unplausibel | 0 |
| 0x1F4A01 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1F4A02 | Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1F4A10 | Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1F5020 | DME, interner Fehler, Innentemperatursensor: Wert zu hoch | 0 |
| 0x1F5021 | DME, interner Fehler, Innentemperatursensor: Wert zu niedrig | 0 |
| 0x1F5101 | DME Temperatur: Übertemperatur | 0 |
| 0x1FBB01 | Check-Control-Meldung (ID 567): Motorlüfter. Gemäßigt fahren | 0 |
| 0x200502 | DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung ICM unplausibel | 0 |
| 0x200503 | DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung ICM unplausibel | 0 |
| 0x200D04 | Antrieb, Sicherheitsfunktion: Bussignal Fahrpedalwert unplausibel | 0 |
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
| 0x201008 | CBS-Client: Verfügbarkeitssprung | 0 |
| 0x201010 | A- / FA-CAN Hardware: defekt | 0 |
| 0x201020 | FlexRay Hardware: defekt | 0 |
| 0x201030 | Testfunktion Layer: Fehlergruppe 1 | 0 |
| 0x201040 | Testfunktion Layer: Fehlergruppe 2 | 0 |
| 0x201101 | DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt | 0 |
| 0x20A701 | Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz | 0 |
| 0x20A801 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur | 0 |
| 0x20A802 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung | 0 |
| 0x20A804 | Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung | 0 |
| 0x20A901 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt | 0 |
| 0x20A902 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig | 0 |
| 0x20A904 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten | 0 |
| 0x20A908 | Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten | 0 |
| 0x20A909 | BSD, Kommunikation (Motor-Kühlmittelpumpe): fehlt | 0 |
| 0x20AA04 | Motor-Kühlsystem: Kommunikation mit Kühlmittelpumpe fehlerhaft | 0 |
| 0x20AB08 | Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe | 0 |
| 0x20AC08 | Kühlmittelpumpe, Hardwareeingang: Status Notlauf-Eingang unplausibel | 0 |
| 0x20AD08 | Kühlmittelpumpe: Drehzahl unplausibel | 0 |
| 0x20BA20 | Kupplungsschalter, Signal: fehlt | 0 |
| 0x210201 | Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | Generator, Temperatur: Übertemperatur | 0 |
| 0x210501 | Generator, Plausibilität, Temperatur: Übertemperatur berechnet | 0 |
| 0x210601 | Generator, mechanisch: Fehlfunktion | 0 |
| 0x210701 | Generator, Regler: Typ falsch | 0 |
| 0x210801 | Generator: Typ falsch | 0 |
| 0x210901 | Generator, Kommunikation: keine Kommunikation | 0 |
| 0x210C01 | Generator, Kommunikation: Bus-Fehler | 0 |
| 0x211A21 | BSD-Bus: Kommunikationsfehler | 0 |
| 0x211F01 | Generator/Startergenerator: Codierung fehlt | 0 |
| 0x212001 | Startergenerator, Kommunikation: Bus-Fehler | 0 |
| 0x212101 | Startergenerator, Plausibilität, elektrisch: berechnet | 0 |
| 0x212201 | Startergenerator, elektrisch: Fehlfunktion | 0 |
| 0x212301 | Startergenerator: Übertemperatur | 1 |
| 0x212401 | Startergenerator, mechanisch: Fehlfunktion | 0 |
| 0x212501 | Startergenerator, MSA Hardwareleitung: Signal unplausibel | 0 |
| 0x212601 | Startergenerator: MSA dauerhaft deaktiviert | 1 |
| 0x212701 | Startergenerator: MSA zeitweise deaktiviert | 1 |
| 0x212801 | Startergenerator: Sensorfehler | 0 |
| 0x212A01 | Startergenerator: Typ falsch | 0 |
| 0x213301 | Powermanagement: zentrale Überspannung | 0 |
| 0x213401 | Powermanagement: zentrale Unterspannung | 0 |
| 0x213501 | Powermanagement: Batterie Tiefentladung | 0 |
| 0x213604 | Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x213701 | Powermanagement: Batterieloser Betrieb | 0 |
| 0x213801 | Powermanagement: Transportüberwachung Ladezustand Batterie tiefentladen | 0 |
| 0x213901 | Powermanagement: Verbraucherreduzierung aktiv | 0 |
| 0x213A01 | Powermanagement: Transportüberwachung Ladezustand Batterie entladen | 0 |
| 0x213A20 | Bordnetzspannung, Arbeitsbereich: Spannung zu hoch | 0 |
| 0x213A21 | Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig | 0 |
| 0x213A22 | Bordnetzspannung: Analog-Digital-Wandler defekt | 0 |
| 0x213B08 | Powermanagement, Batteriezustandserkennung: Batteriedefekt | 0 |
| 0x213C08 | Powermanagement, Batteriezustandserkennung: Tiefentladung | 0 |
| 0x213D01 | Powermanagement, Bauteilerkennung: Batterieladeeinheit und Power Control Unit erkannt | 0 |
| 0x215001 | Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion | 0 |
| 0x215101 | Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel | 0 |
| 0x215104 | Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel | 0 |
| 0x215108 | Intelligenter Batteriesensor, Plausibilität: Strom unplausibel | 0 |
| 0x215801 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse | 0 |
| 0x215901 | Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel | 0 |
| 0x215A01 | Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung | 0 |
| 0x215B01 | Intelligenter Batteriesensor, Kommunikation: keine Kommunikation | 0 |
| 0x215C01 | Intelligenter Batteriesensor, Eigendiagnose: Systemfehler | 0 |
| 0x218001 | Batterieladeeinheit: Interner Fehler | 0 |
| 0x218101 | Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion | 0 |
| 0x218201 | Batterieladeeinheit, Sekundäre Batterie: defekt | 0 |
| 0x218301 | Batterieladeeinheit: Fehler im Trennelement/Kabelbaum | 0 |
| 0x219001 | Aktives Motorlager, elektrisch: Kurzschluss nach Plus | 0 |
| 0x219002 | Aktives Motorlager, elektrisch: Kurzschluss nach Masse | 0 |
| 0x219004 | Aktives Motorlager, elektrisch: Leitungsunterbrechung | 0 |
| 0x21A210 | Kommunikation: Signal (Status_Welligkeit_FSSP) in FA-CAN, Botschaft (Dienste 0x5E0, Elektrische Anforderung Verbraucher ID2: 68): ungültig | 0 |
| 0x231501 | Fehlerspeichereintrag: Sendepuffer voll | 0 |
| 0x231502 | Fehlerspeichereintrag: Senden fehlgeschlagen | 0 |
| 0x231802 | CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231902 | CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: Kommunikationsfehler an A-CAN | 1 |
| 0x231F04 | A- / FA-CAN, Botschaften (Getriebe): fehlen | 0 |
| 0x233004 | FA-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi | 0 |
| 0xCD840A | FA-CAN Control Module Bus OFF | 0 |
| 0xCD8420 | FlexRay Bus: Kommunikationsfehler | 0 |
| 0xCD8486 | A-CAN Control Module Bus OFF | 0 |
| 0xCD8801 | FlexRay Controller, Startup: maximale Startupzeit überschritten | 0 |
| 0xCD8BFF | Netzwerkfehler: nur zum Test | 1 |
| 0xCD8C10 | LIN, Botschaft (Ladezustand Status IBS_LIN, 0x0A): fehlt | 0 |
| 0xCD8C11 | LIN, Botschaft (Fehler Status IBS_LIN, 0x0B): fehlt | 0 |
| 0xCD8C12 | LIN, Botschaft (Werte IBS_LIN, 0x09): fehlt | 0 |
| 0xCD8D10 | Kühlerjalousie, Kommunikation: gestört | 0 |
| 0xCD8D15 | LIN, Botschaft (Batterieladeeinheit, sekundäre Batterie): Elektrischer Fehler | 0 |
| 0xCD8D16 | LIN, Botschaft (Batterieladeeinheit, H-Brücke): Kein Ladebetrieb möglich | 0 |
| 0xCD8D17 | LIN, Botschaft (Batterieladeeinheit, Status Energieerzeugung Bordnetz 2, 0x5): fehlt | 0 |
| 0xCD8D18 | LIN, Botschaft (Batterieladeeinheit, Trennelement oder Leitung): Elektrischer Fehler | 0 |
| 0xCD8D19 | LIN, Kommunikation (Batterieladeeinheit, zweite Spannungsebene): Fehlfunktion | 0 |
| 0xCD8E10 | LIN Bus: Kommunikationsfehler | 0 |
| 0xCD8E11 | LIN, Kommunikation (Ladeeinheit für Zusatzbatterie): fehlt | 0 |
| 0xCD8F01 | LIN, Kommunikation (intelligenter Batteriesensor): fehlt | 0 |
| 0xCD9002 | Kühlmittelpumpe, Kommunikation: Ungültige Botschaft | 1 |
| 0xCD9011 | Motor-Kühlsystem: Kommunikation mit Kühlmittelpumpe fehlerhaft | 0 |
| 0xCD9201 | LIN, Kommunikation (Kühlerjalousie): Zeitüberschreitung | 0 |
| 0xCD9203 | LIN, Kommunikation (Kühlerjalousie): fehlt | 0 |
| 0xCD9402 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Aliveprüfung | 1 |
| 0xCD9404 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): fehlt | 1 |
| 0xCD9408 | FlexRay, Botschaft (Anforderung Drehmoment Kurbelwelle Fahrdynamik, 58.1.4): Prüfsumme falsch | 1 |
| 0xCD9432 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A) bei Unterspannung: fehlt | 1 |
| 0xCD9435 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF) bei Unterspannung: fehlt | 1 |
| 0xCD9437 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4) bei Unterspannung: Kommunikationsfehler | 1 |
| 0xCD9502 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Aliveprüfung | 1 |
| 0xCD9504 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): fehlt | 1 |
| 0xCD9508 | FlexRay, Botschaft (Anforderung Radmoment Antriebstrang Summe Stabilisierung / Soll Verteilung Längsmoment Vorderachse Hinterachse, 43.1.4): Prüfsumme falsch | 1 |
| 0xCD9602 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Aliveprüfung | 1 |
| 0xCD9604 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): fehlt | 1 |
| 0xCD9608 | FlexRay, Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, 47.0.2): Prüfsumme falsch | 1 |
| 0xCD9702 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Aliveprüfung | 1 |
| 0xCD9704 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): fehlt | 1 |
| 0xCD9708 | FlexRay, Botschaft (Konfiguration Schalter Fahrdynamik, 272.4.8): Prüfsumme falsch | 1 |
| 0xCD9902 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Aliveprüfung | 1 |
| 0xCD9904 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): fehlt | 1 |
| 0xCD9908 | FlexRay, Botschaft (Geschwindigkeit Fahrzeug, 55.3.4): Prüfsumme falsch | 1 |
| 0xCD9932 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Aliveprüfung | 1 |
| 0xCD9933 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): fehlt | 1 |
| 0xCD9934 | FlexRay, Botschaft (Giergeschwindigkeit Fahrzeug, 56.0.2): Prüfsumme falsch | 1 |
| 0xCD9935 | FlexRay, Botschaft (Daten Fahrdynamiksensor Erweitert, 38.0.2): fehlt | 1 |
| 0xCD9A02 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Aliveprüfung | 1 |
| 0xCD9A04 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): fehlt | 1 |
| 0xCD9A08 | FlexRay, Botschaft (Ist Bremsmoment Summe, 43.3.4): Prüfsumme falsch | 1 |
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
| 0xCDA204 | FlexRay, Botschaft (Anforderung Leistung Elektrisch EPS, 234.0.2): fehlt | 1 |
| 0xCDA302 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Aliveprüfung | 1 |
| 0xCDA304 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): fehlt | 1 |
| 0xCDA308 | FlexRay, Botschaft (Status Fahrzeugstillstand, 263.1.4): Prüfsumme falsch | 1 |
| 0xCDA402 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Aliveprüfung | 1 |
| 0xCDA404 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): fehlt | 1 |
| 0xCDA408 | FlexRay, Botschaft (Ist Lenkwinkel Vorderachse, 57.1.2): Prüfsumme falsch | 1 |
| 0xCDA410 | FlexRay, Botschaft (Anzeige LDM 1, 135.0.2): fehlt | 1 |
| 0xCDA421 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Aliveprüfung | 1 |
| 0xCDA422 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): fehlt | 1 |
| 0xCDA423 | FlexRay, Botschaft (Status Türsensoren Abgesichert, 256.3.4): Prüfsumme falsch | 1 |
| 0xCDA425 | FlexRay, Botschaft (Status Parkassistent, 231.1.2): fehlt | 1 |
| 0xCDA426 | FlexRay, Botschaft (Status Verteilung Längsmoment Vorderachse Hinterachse, 19.3.4): fehlt | 1 |
| 0xCDA430 | FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 74.0.2): Aliveprüfung | 1 |
| 0xCDA431 | FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 74.0.2): Prüfsumme falsch | 1 |
| 0xCDA432 | FlexRay, Botschaft (Betriebsart Drehzahl Drehmoment Hybrid, 74.0.2): fehlt | 1 |
| 0xCDA435 | FlexRay, Botschaft (Masse/Gewicht Fahrzeug, 108.1.2): fehlt | 1 |
| 0xCDA440 | FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): Aliveprüfung | 1 |
| 0xCDA441 | FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): Prüfsumme falsch | 1 |
| 0xCDA442 | FlexRay, Botschaft (Steuerung Koordination Drehmoment Hybrid, 73.0.2): fehlt | 1 |
| 0xCDA451 | FlexRay, Botschaft (Ist Lenkmoment Fahrer Stellglied, 49.0.2): fehlt | 1 |
| 0xCDA512 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Aliveprüfung | 1 |
| 0xCDA514 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): fehlt | 1 |
| 0xCDA518 | FA-CAN, Botschaft (Status Gurt Kontakt Sitzbelegung, 0x297): Prüfsumme falsch | 1 |
| 0xCDA602 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDA608 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDA702 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Aliveprüfung | 1 |
| 0xCDA704 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): fehlt | 1 |
| 0xCDA708 | FA-CAN, Botschaft (Status Fahrzeugstillstand Parkbremse, 0x2DC): Prüfsumme falsch | 1 |
| 0xCDA804 | FA-CAN, Botschaft (Relativzeit, 0x328): fehlt | 1 |
| 0xCDA904 | FA-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt | 1 |
| 0xCDAB04 | FA-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt | 1 |
| 0xCDAC04 | FA-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDAD04 | FA-CAN, Botschaft (Steuerung Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt | 1 |
| 0xCDAE04 | FA-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt | 1 |
| 0xCDAF04 | FA-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt | 1 |
| 0xCDB002 | FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDB008 | FA-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDB102 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDB108 | FA-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDB204 | FA-CAN, Botschaft (Außentemperatur, 0x2CA): fehlt | 1 |
| 0xCDB304 | FA-CAN, Botschaft (Daten Anzeige Getriebestrang, 0x3FD): fehlt | 1 |
| 0xCDB404 | FA-CAN, Botschaft (Fahrzeugzustand, 0x3A0): fehlt | 1 |
| 0xCDB504 | FA-CAN, Botschaft (Kilometerstand/Reichweite, 0x330): fehlt | 1 |
| 0xCDB602 | FA-CAN, Botschaft (Klemmen, 0x12F): Aliveprüfung | 1 |
| 0xCDB604 | FA-CAN, Botschaft (Klemmen, 0x12F): fehlt | 1 |
| 0xCDB608 | FA-CAN, Botschaft (Klemmen, 0x12F): Prüfsumme falsch | 1 |
| 0xCDB804 | FA-CAN, Botschaft (Anforderung Klimaanlage, 0x2F9): fehlt | 1 |
| 0xCDB904 | FA-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDBA04 | FA-CAN, Botschaft (Schlafbereitschaft Global FZM, 0x3A5): fehlt | 1 |
| 0xCDBA10 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Aliveprüfung | 1 |
| 0xCDBA11 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): Prüfsumme falsch | 1 |
| 0xCDBA12 | FA-CAN, Botschaft (Drehmoment Getriebe Hybrid, 0x8D): fehlt | 1 |
| 0xCDBA13 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Aliveprüfung | 1 |
| 0xCDBA14 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): Prüfsumme falsch | 1 |
| 0xCDBA15 | FA-CAN, Botschaft (Soll Daten Getriebe E-Motor 1, 0x91): fehlt | 1 |
| 0xCDBA17 | FA-CAN, Botschaft (Freigabe Kühlung Hochvoltspeicher, 0x37B): fehlt | 1 |
| 0xCDBA20 | FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Aliveprüfung | 1 |
| 0xCDBA21 | FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): Prüfsumme falsch | 1 |
| 0xCDBA22 | FA-CAN, Botschaft (Ist Daten E-Motor 1, 0x90): fehlt | 1 |
| 0xCDBA25 | FA-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCDBA30 | FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): Aliveprüfung | 1 |
| 0xCDBA31 | FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): Prüfsumme falsch | 1 |
| 0xCDBA32 | FA-CAN, Botschaft (Ist Daten E-Motor 1 Langzeit, 0x25B): fehlt | 1 |
| 0xCDBB02 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Aliveprüfung | 1 |
| 0xCDBB04 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): fehlt | 1 |
| 0xCDBB08 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe 2, 0xA0): Prüfsumme falsch | 1 |
| 0xCDBB10 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Aliveprüfung | 1 |
| 0xCDBB11 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): Prüfsumme falsch | 1 |
| 0xCDBB12 | A-CAN, Botschaft (Status Getriebe Hybrid, 0x409): fehlt | 1 |
| 0xCDBB20 | A-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7): Aliveprüfung | 1 |
| 0xCDBB21 | A-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7): Prüfsumme falsch | 1 |
| 0xCDBB22 | A-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7): fehlt | 1 |
| 0xCDBC04 | A-CAN, Botschaft (Anforderung Leistung Elektrisch PCU, 0x33F): fehlt | 1 |
| 0xCDBC10 | A-CAN, Botschaft (Daten Antrieb Elektrisch, 0x32F): fehlt | 1 |
| 0xCDBC20 | A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Aliveprüfung | 1 |
| 0xCDBC21 | A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): Prüfsumme falsch | 1 |
| 0xCDBC22 | A-CAN, Botschaft (Status Antrieb Hybrid, 0x3A4): fehlt | 1 |
| 0xCDBC23 | A-CAN, Botschaft (Diagnose OBD Motorsteuerung Elektrisch, 0x3E8): fehlt | 1 |
| 0xCDBD04 | A-CAN, Botschaft (Status Energieerzeugung BN2, 0x2AF): fehlt | 1 |
| 0xCDBE02 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): Aliveprüfung | 1 |
| 0xCDBE04 | A-CAN, Botschaft (Anzeige Drehzahl Motor Dynamisierung, 0xF8): fehlt | 1 |
| 0xCDBE20 | A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): Aliveprüfung | 1 |
| 0xCDBE21 | A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): Prüfsumme falsch | 1 |
| 0xCDBE22 | A-CAN, Botschaft (Möglichkeit Motorstart Motorstop. 0x3EC): fehlt | 1 |
| 0xCDBF04 | A-CAN, Botschaft (Status Getriebesteuergerät, 0x39A): fehlt | 1 |
| 0xCDBF20 | A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): Aliveprüfung | 1 |
| 0xCDBF21 | A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): Prüfsumme falsch | 1 |
| 0xCDBF22 | A-CAN, Botschaft (Daten Verbrennungsmotor E-Motor 1, 0x407): fehlt | 1 |
| 0xCDC004 | A-CAN, Botschaft (Diagnose OBD Getriebe, 0x396): fehlt | 1 |
| 0xCDC102 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Aliveprüfung | 1 |
| 0xCDC104 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): fehlt | 1 |
| 0xCDC108 | A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): Prüfsumme falsch | 1 |
| 0xCDC202 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Aliveprüfung | 1 |
| 0xCDC204 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): fehlt | 1 |
| 0xCDC208 | A-CAN, Botschaft (Anforderung Drehmoment Kurbelwelle Getriebe, 0xB0): Prüfsumme falsch | 1 |
| 0xCDC304 | A-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
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
| 0x5820 | Bedingung Klemme 15 | 0/1 | - | 0xFF | - | - | - | - |
| 0x5821 | Steuergerätetemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5822 | Öltemperatur | °C | - | unsigned char | - | 1.0 | 1.0 | -60.0 |
| 0x5823 | Abstellzeit | s | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5825 | Spannung von BCU gemessen (U_BCU_LIN) | V | - | signed int | - | 0.01 | 1.0 | 0.0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5827 | Tastverhältnis für Lambdasondenheizung | % | - | unsigned int | - | 0.00305176 | 1.0 | 0.0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0.01 | 1.0 | 0.0 |
| 0x582B | Drehmomentaufnahme des Wandlers über CAN | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x582C | Lambdasonden-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x582D | Korrekturwert der LSU-Spannung vor KAT | V | - | signed int | - | 0.00048828 | 1.0 | 0.0 |
| 0x582F | Abgastemperatur nach KAT aus Modell | °C | - | unsigned char | - | 5.0 | 1.0 | -50.0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x5832 | Zustand Motor-Koordinator | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100.0 | 1.0 | 0.0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | - | - | - |
| 0x583A | Ansaugluft-Temperatur bei Start | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x583B | Fuellstand Kraftstofftank | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0.0942 | 1.0 | 0.0 |
| 0x583D | Betriebsstundenzähler | min | - | unsigned int | - | 6.0 | 1.0 | 0.0 |
| 0x583E | Sollwert Drosselklappenwinkel, bez. auf unteren Anschlag | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5840 | DK-Winkel der Notluftposition | % DK | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 |
| 0x5841 | Wert Temperatur Steuergerät | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned int | - | 0.00488281 | 1.0 | -1.0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584D | Massenstrom Tankentlüftung in das Saugrohr | kg/h | - | unsigned int | - | 0.00039063 | 1.0 | 0.0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x584F | Erkennung Bordnetzinstabilität | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5850 | Signalspannung des Kühlmitteltemperatursensor | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5851 | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5852 | Batteriestrom vom IBS | A | - | unsigned int | - | 0.02 | 1.0 | -200.0 |
| 0x5853 | Batteriespannung von IBS | V | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x5854 | Batterietemperatur vom IBS | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0.125 | 1.0 | 0.0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 |
| 0x5859 | Pumpenstrom Referenzleck | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0x585A | min. Pumpenstrom bei Grobleckmessung | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0x585B | Pumpenstrom am Ende der Feinstleckmessung | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
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
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x5871 | Zähler Prüfzustand für DVESTANZNMOT | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 |
| 0x5875 | Soll-Motormoment MSR für schnellen Eingriff | Nm | - | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed int | - | 0.00003052 | 1.0 | 0.0 |
| 0x587B | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irreversibel | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x587E | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversibel | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x5882 | Motorstarttemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x5883 | [0] Referenzpegel Klopfregelung, 16 bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5884 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0.125 | 1.0 | 0.0 |
| 0x5885 | [2] Referenzpegel Klopfregelung, 16bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5886 | [3] Referenzpegel Klopfregelung, 16bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x5888 | [5] Referenzpegel Klopfregelung, 16bit | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 |
| 0x588B | Zeit nach Startende | s | - | unsigned int | - | 0.01 | 1.0 | 0.0 |
| 0x588C | Keramiktemperatur der LSU | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x588D | aktuelle Zeit Leckmessung | s | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x588E | Pumpenstrom Tankdiagnose | mA | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed int | - | 0.5 | 1.0 | 0.0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x5894 | [4] Spannung Klopfwerte Zylinder 2 | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5895 | [1] Spannung Klopfwerte Zylinder 5 | V | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | °C | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned char | - | 0.1 | 1.0 | 10.6 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | 0/1 | - | 0xFF | - | - | - | - |
| 0x589B | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | - | 0xFF | - | - | - | - |
| 0x589C | Bedingung Freigabe VVT-Endstufe | 0/1 | - | 0xFF | - | - | - | - |
| 0x589D | Anzahl erkannter VVT Lageregelungsfehler | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x589E | Sollwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x589F | Batterietemperatur | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58A0 | Entladung während Ruhestromverletzung | Ah | - | unsigned int | - | 0.01820445 | 1.0 | 0.0 |
| 0x58A1 | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A4 | Generatorstatus | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58A5 | Vom Generator empfangenes Lastsignal | % | - | unsigned char | - | 0.390625 | 1.0 | 0.0 |
| 0x58A6 | Rel. Exzenterwinkel | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58A8 | Rel. Exzenterwinkel am unteren mech. Anschlag | ° | - | signed int | - | 0.1 | 1.0 | 0.0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | ° | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58AD | Sauerstoffspeichervermögen KAT | mg | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | µs | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B0 | Zähler für Lerndauer eines Lernsteps | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 5 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 6 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B5 | [4] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B6 | [5] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned int | - | 0.001 | 1.0 | 0.0 |
| 0x58B7 | aktueller Bremsdruck | hPa | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58B8 | Motordrehzahl in der Funktionsüberwachung | 1/min | - | unsigned char | - | 40.0 | 1.0 | 0.0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned int | - | 0.046875 | 1.0 | 0.0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x58BC | relative Luftfüllung in der Funktionsüberwachung | % | - | unsigned char | - | 0.75 | 1.0 | 0.0 |
| 0x58BD | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58BE | DV-E-Adaption: Status Prüfbedingungen | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x58D2 | Luftklappe - Sollposition in Grad | - | - | unsigned char | - | 0.50196081 | 1.0 | 0.0 |
| 0x58D3 | Luftklappe - Istposition in Grad | - | - | unsigned char | - | 0.50196081 | 1.0 | 0.0 |
| 0x58D4 | Startbedingung Kraftschluss erfüllt | 0/1 | - | 0xFF | - | - | - | - |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | - | unsigned char | - | 0.75 | 1.0 | -48.0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert | % DK | - | signed int | - | 0.02441406 | 1.0 | 0.0 |
| 0x58D9 | Schrittzähler DK-Rückstellfeder-Prüfung | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58DA | koordiniertes Moment für Füllung | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58DB | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DC | Intervallzähler für abgasrelevante Aussetzer | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned int | - | 0.078125 | 1.0 | 0.0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E1 | Abgleich DK-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 |
| 0x58E3 | Abgleich EV-Modell (Offset) | kg/h | - | signed char | - | 8.0 | 1.0 | 0.0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58E5 | Rotorposition VVT-Motor | ° | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58E6 | Soll-Bestromung VVT-Motor | A | - | signed int | - | 0.00610352 | 1.0 | 0.0 |
| 0x58E9 | empf. Spannung von BSS-Wasserpumpe | V | - | unsigned char | - | 0.1 | 1.0 | 0.0 |
| 0x58EA | empf. Istdrehzahl von BSS-Wasserpumpe | 1/min | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58EC | empf. Temperatur von BSS-Wasserpumpe | °C | - | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x58ED | empf. Strom von BSS-Wasserpumpe | % | - | unsigned char | - | 0.5 | 1.0 | 0.0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned int | - | 0.0005 | 1.0 | 0.0 |
| 0x58F2 | Tastverhältnis Mengensteuerventil | % | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned int | - | 0.1 | 1.0 | 0.0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0.01289062 | 1.0 | 0.0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed int | - | 0.00078125 | 1.0 | 0.0 |
| 0x58F7 | VVT-Strom | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FA | gefilterter Faktor Tankentlüftungs-Adaption | - | - | signed char | - | 0.5 | 1.0 | 0.0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x58FD | Untermodi des Fe Tra Fla Mode | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 |
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
| 0x01 | ERROR |
| 0x02 | ERROR_ARGUMENT |
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
| 0x100D | Fehler 100D |
| 0x100E | Fehler 100E |
| 0x100F | Fehler Argument Wert im negativ Bereich |
| 0xXY | ERROR_UNKNOWN |

### MSD85UDS_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | -- |
| 1 | -- |

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

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Druck vor Drosselklappe | hPa | pvd_w | - | unsigned int | - | 0.078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Motor-Temperatur | °C | tmot | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Quittung Solldrehzahl von BSS-Wasserpumpe | 1/min | wmpdzst | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4307_WERT | 0x4307 | STAT_0X4307_WERT | empf. Status von BSS-Wasserpumpe | - | wmstat | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| STAT_0x4412_WERT | 0x4412 | STAT_0X4412_WERT | Öllaufzeit | mth | ozoelzeit | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4418_WERT | 0x4418 | STAT_0X4418_WERT | Status Ölzustandssensor | - | ozstatus | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAVEX | 0x4501 | STAT_VVT_EXCENTER_ADAPTION_WERT | VVT Excenterwellenadaptionswert | mm | hubadmrofs_w | - | signed int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| SSPEI | 0x4505 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | Sollwinkel vom BMW Layer (Einlass-VANOS) | ° KW | wnwsaeb_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Einlassnockenwellenposition | ° KW | wnwkwe_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Auslassnockenwellenposition | ° KW | wnwkwa_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| STAT_0x4517_WERT | 0x4517 | STAT_0X4517_WERT | [0] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 0 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4518_WERT | 0x4518 | STAT_0X4518_WERT | [1] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 1 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4519_WERT | 0x4519 | STAT_0X4519_WERT | [2] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 2 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451A_WERT | 0x451A | STAT_0X451A_WERT | [3] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 3 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451B_WERT | 0x451B | STAT_0X451B_WERT | [4] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 4 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451C_WERT | 0x451C | STAT_0X451C_WERT | [5] Adaptierte Referenzposition einer Auslassnockenwellenflanke, Wert 5 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451D_WERT | 0x451D | STAT_0X451D_WERT | Gesamtzeit VVT-Performancetest | - | vvtdtperf_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x451E_WERT | 0x451E | STAT_0X451E_WERT | Stromsumme VVT-Performancetest | A | ivvtsumperf_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | wdkba_w | - | signed int | - | 0.02441406 | 1.0 | 0.0 | - | 22;2C | - | - |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generatorstrom | - | st_i_gen | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 2 | - | bsdgencv | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUBAT | 0x460A | STAT_UBATT_WERT | momentane Batteriespannung | V | ubt | - | unsigned int | - | 0.015 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | wub_w | - | unsigned int | - | 0.02355 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x460D_WERT | 0x460D | STAT_0X460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | - | unsigned int | - | 0.004 | 1.0 | -100.0 | - | 22;2C | - | - |
| TDSTF | 0x460E | STAT_0X460E_WERT | Abstand zur Startfähigkeit | % | dsoc_w | - | unsigned int | - | 0.004 | 1.0 | -100.0 | - | 22;2C | - | - |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | DF-Monitor für Batterie-Ladezustand in % | % | dfmonitor | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4613_WERT | 0x4613 | STAT_0X4613_WERT | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | ufgen | - | unsigned char | - | 0.1 | 1.0 | 10.6 | - | 22;2C | - | - |
| STAT_0x4615_WERT | 0x4615 | STAT_0X4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | ierrfgrenz | - | unsigned char | - | 0.125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4616_WERT | 0x4616 | STAT_0X4616_WERT | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | tlrfgen | - | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4617_WERT | 0x4617 | STAT_0X4617_WERT | gefiltertes Generatormoment absolut | % | mdgenvf_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4618_WERT | 0x4618 | STAT_0X4618_WERT | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_lrfoff | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4619_WERT | 0x4619 | STAT_0X4619_WERT | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | B_bsdprot2 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x461A_WERT | 0x461A | STAT_0X461A_WERT | Nominalspannung Regler Generator 1 | V | uregnom | - | unsigned char | - | 0.1 | 1.0 | 10.6 | - | 22;2C | - | - |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | B_sbbvk | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | ua10mo_w | - | unsigned int | - | 0.00048828 | 1.0 | 0.0 | - | 22;2C | - | - |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambdasoll Begrenzung (word) | - | lamsbg_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Bedingung Kupplungspedal betätigt | 0/1 | B_kuppl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Schalter Kupplung | 0/1 | S_kupp | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Bedingung umschalten auf KFPEDS | 0/1 | B_pedsport | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Bedingung für Kompressoreinschalten | 0/1 | B_koe | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Schalter Klemme 50 von CAN | 0/1 | S_ckl50 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | nmot_w | - | unsigned int | - | 0.25 | 1.0 | 0.0 | - | 22;2C | - | - |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlaufsolldrehzahl | 1/min | nsol_w | - | unsigned int | - | 0.25 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Bedingung Leerlaufregelung | 0/1 | B_llr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | normierter Fahrpedalwinkel | % | wped_w | - | unsigned int | - | 0.0015259 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4880_WERT | 0x4880 | STAT_0X4880_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | etkhlmx | - | unsigned char | - | 0.78125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4881_WERT | 0x4881 | STAT_0X4881_WERT | Max. Quotient Zündwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | etkhtmx | - | unsigned char | - | 0.78125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4890_WERT | 0x4890 | STAT_0X4890_WERT | Tprot-Status auslesen | 0/1 | B_demsi | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4A02_WERT | 0x4A02 | STAT_0X4A02_WERT | ATL-Leckagediagnose läuft | 0/1 | B_atlberlek | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IUDMT | 0x4A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Pumpenstrom Tankdiagnose | V | uptes_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A1B_WERT | 0x4A1B | STAT_0X4A1B_WERT | Elektrische Kraftstoffpumpe | 0/1 | B_ekp | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | °C | tmotlinf | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4A2B_WERT | 0x4A2B | STAT_0X4A2B_WERT | physikalischer Temperaturwert, der sich bei Wandlung der tiefpassgefilterten Sensorspannung wtfa1f_w | °C | tfa1linf | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x4A2D_WERT | 0x4A2D | STAT_0X4A2D_WERT | Saugrohr-Absolutdruck gemessen | hPa | psrg_w | - | unsigned int | - | 0.078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ1 | 0x4A30 | STAT_LAUFUNRUHE_ZYL1_WERT | [0] Laufunruhe Zylinder 1 | 1/s² | lutskzyl_w | - | signed int | - | 0.00631593 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ2 | 0x4A31 | STAT_LAUFUNRUHE_ZYL2_WERT | [4] Laufunruhe Zylinder 2 | 1/s² | lutskzyl_w | - | signed int | - | 0.00631593 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ3 | 0x4A32 | STAT_LAUFUNRUHE_ZYL3_WERT | [2] Laufunruhe Zylinder 3 | 1/s² | lutskzyl_w | - | signed int | - | 0.00631593 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ4 | 0x4A33 | STAT_LAUFUNRUHE_ZYL4_WERT | [5] Laufunruhe Zylinder 4 | 1/s² | lutskzyl_w | - | signed int | - | 0.00631593 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ5 | 0x4A34 | STAT_LAUFUNRUHE_ZYL5_WERT | [1] Laufunruhe Zylinder 5 | 1/s² | lutskzyl_w | - | signed int | - | 0.00631593 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILUZ6 | 0x4A35 | STAT_LAUFUNRUHE_ZYL6_WERT | [3] Laufunruhe Zylinder 6 | 1/s² | lutskzyl_w | - | signed int | - | 0.00631593 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN_WERT | Bedingung für erkannte Klopfer | 0/1 | B_kl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | [0] normierter Referenzpegel Klopfregelung Zylinder 1 | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ2 | 0x4A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | [4] normierter Referenzpegel Klopfregelung Zylinder 2 | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ3 | 0x4A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | [2] normierter Referenzpegel Klopfregelung Zylinder 3 | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ4 | 0x4A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | [5] normierter Referenzpegel Klopfregelung Zylinder 4 | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ5 | 0x4A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | [1] normierter Referenzpegel Klopfregelung Zylinder 5 | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKZ6 | 0x4A3C | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | [3] normierter Referenzpegel Klopfregelung Zylinder 6 | V | rkrnv6_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | [0] Ausgegebener Zündwinkel | ° KW | zwoutzyl_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILAB1 | 0x4A50 | STAT_LAMBDA_BANK1_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | B_sbbhk | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | B_hsha | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | B_hstlsua | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bedingung Bremslichtschalter betätigt | 0/1 | B_bl | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bedingung Bremstestschalter betätigt | 0/1 | B_br | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISAGK | 0x4A65 | STAT_ABGASKLAPPE_EIN_WERT | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISDMP | 0x4A66 | STAT_DMTL_PUMPE_EIN_WERT | Bedingung DMTL-Pumpenmotor an | 0/1 | B_admtpm | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISDMV | 0x4A67 | STAT_DMTL_VENTIL_EIN_WERT | Bedingung DMTL-Magnetventil an | 0/1 | B_admtmv | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| ISDMH | 0x4A68 | STAT_DMTL_HEIZUNG_EIN_WERT | Bedingung Heizung DM-TL Portansteuerung | 0/1 | B_hdmtlp | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
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
| SANWA | 0x4A94 | STAT_NW_AUSLASS_SOLL_WERT | gespeicherter Nockenwellensollwinkel Auslaß | ° KW | wnwsswa_w | - | signed int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | [0] Adaptionswert Nockenwelle Auslass Bank 1 | ° KW | EpmCaS_phiAdapRefPosO1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | [0] Adaptionswert Nockenwelle Einlass Bank 1 | ° KW | EpmCaS_phiAdapRefPosI1_mp | - | signed int | - | 0.02197266 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A97_WERT | 0x4A97 | STAT_0X4A97_WERT | Bedi. Vanos Einlass im Anschlag | 0/1 | B_vseansch | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4A9D_WERT | 0x4A9D | STAT_0X4A9D_WERT | multiplikative Gemischkorrektur der Gemischadaption | - | frai_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDSLS | 0x4AA1 | STAT_SLS_DIAGNOSE_WERT | Zyklusflag: Tankentlüftungsventil Endstufe | - | Z_teve_byte | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDTEV | 0x4AA2 | STAT_TEV_DIAGNOSE_WERT | Funktionsstatus-Zähler DM-TL für Testerausgabe aus letztem Fahrzyklus | - | stpdmtla | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDLSS | 0x4AA4 | STAT_LS_DIAGNOSE_WERT | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | llsstat | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AAA_WERT | 0x4AAA | STAT_0X4AAA_WERT | Tastverhältnis PWM Ansteuerung Öldruck | % | tvpoel_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AAB_WERT | 0x4AAB | STAT_0X4AAB_WERT | Tastverhältnis an Endstufe des Ladedruckstellers | % | tvldste_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AB0_WERT | 0x4AB0 | STAT_0X4AB0_WERT | Ladedruck- Sollwert | hPa | psolldr_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg_w | - | unsigned int | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5AB3_WERT | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Zähler für gefahrene Kilometer mit MIL EIN | km | DSMDur_ctPID21h | - | unsigned long | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | sekundengenauer Betribsstundenzähler als 32 Bitwert | s | top_l | - | unsigned long | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Drucksensor Saugrohrdruck (word) | V | udss_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMLUF | 0x4ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert (Word) | kg/h | ml_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV_WERT | Bedingung automatischer Start | 0/1 | B_sta | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x4ABE_WERT | 0x4ABE | STAT_0X4ABE_WERT | I-Regler Mengenregelung Kraftstoffsystem | mg | FUEL_MASS_REQ_I_CTL_H_RES | - | signed int | - | 0.02119446 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4ABF_WERT | 0x4ABF | STAT_0X4ABF_WERT | Verbrauch ohne Regler | l/h | VFF_MFF_SP_FUP_CTL | - | unsigned int | - | 0.00389105 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AC0_WERT | 0x4AC0 | STAT_0X4AC0_WERT | Verbrauch mit Regler | l/h | VFF_VCV | - | unsigned int | - | 0.00389105 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AC2_WERT | 0x4AC2 | STAT_0X4AC2_WERT | Reset Information  | - | Reset_Env.adLoc | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AC4_WERT | 0x4AC4 | STAT_0X4AC4_WERT | Raildruck Kraftstoffsystem Sollwert | MPa | prsoll_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AC6_WERT | 0x4AC6 | STAT_0X4AC6_WERT | Modus Kraftstoffsystem (Druck-, Mengen-, oder Maximumregelung) | 0-n | STATE_PWM_VCV | - | unsigned char | ba_vcv_state_text | - | - | - | - | 22;2C | - | - |
| STAT_0x4ACC_WERT | 0x4ACC | STAT_0X4ACC_WERT | Luftklappe - Sollposition in Schritten | - | RadSht_StpEng | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4ACD_WERT | 0x4ACD | STAT_0X4ACD_WERT | Luftklappe - Istposition in Schritten | - | ShtrEcu_StpEngPos | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AD0_WERT | 0x4AD0 | STAT_0X4AD0_WERT | Luftklappe - Diagnosestatus allgemein | - | RadSht_stDiagGen | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AD1_WERT | 0x4AD1 | STAT_0X4AD1_WERT | Luftklappe - Diagnosestatus obere Luftklappe | - | RadSht_stDiagAKKS | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AD2_WERT | 0x4AD2 | STAT_0X4AD2_WERT | Luftklappe - Status obere Luftklappe | - | RadSht_stDiagAbvAirVlv | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AD3_WERT | 0x4AD3 | STAT_0X4AD3_WERT | Luftklappe - Status untere Luftklappe | - | RadSht_stDiagBntAirVlv | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4AD4_WERT | 0x4AD4 | STAT_0X4AD4_WERT | Luftklappe - Varianteninfo vom Steller | - | ShtrEcu_stVrs | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| STAT_0x4B23_WERT | 0x4B23 | STAT_0X4B23_WERT | [0] Zähler Aussetzerkennung Zylinder 1 (6-Zylinder) | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B24_WERT | 0x4B24 | STAT_0X4B24_WERT | [4] Zähler Aussetzerkennung Zylinder 2 (6-Zylinder) | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B25_WERT | 0x4B25 | STAT_0X4B25_WERT | [2] Zähler Aussetzerkennung Zylinder 3 (6-Zylinder) | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B30_WERT | 0x4B30 | STAT_0X4B30_WERT | [5] Zähler Aussetzerkennung Zylinder 4 (6-Zylinder) | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B31_WERT | 0x4B31 | STAT_0X4B31_WERT | [1] Zähler Aussetzerkennung Zylinder 5 (6-Zylinder) | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x4B32_WERT | 0x4B32 | STAT_0X4B32_WERT | [3] Zähler Aussetzerkennung Zylinder 6 (6-Zylinder) | - | fzabgzyl_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5800_WERT | 0x5800 | STAT_0X5800_WERT | Zeitzähler ab Startende (16bit) | s | tnse_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| STAT_0x5820_WERT | 0x5820 | STAT_0X5820_WERT | Bedingung Klemme 15 | 0/1 | B_kl15 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x5821_WERT | 0x5821 | STAT_0X5821_WERT | Steuergerätetemperatur | °C | tsg | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5822_WERT | 0x5822 | STAT_0X5822_WERT | Öltemperatur | °C | toel | - | unsigned char | - | 1.0 | 1.0 | -60.0 | - | 22;2C | - | - |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Abstellzeit | s | tabst_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5825_WERT | 0x5825 | STAT_0X5825_WERT | Spannung von BCU gemessen (U_BCU_LIN) | V | BcuEcu_u | - | signed int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappenwinkel aus Poti 1 | % DK | wdk1 | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAHV1 | 0x5827 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Tastverhältnis für Lambdasondenheizung | % | tahrlsu_w | - | unsigned int | - | 0.00305176 | 1.0 | 0.0 | - | 22;2C | - | - |
| IAHN1 | 0x5829 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomentaufnahme des Wandlers über CAN | % | mdwancan_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x582C_WERT | 0x582C | STAT_0X582C_WERT | Lambdasonden-Istwert | - | lamzak_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x582D_WERT | 0x582D | STAT_0X582D_WERT | Korrekturwert der LSU-Spannung vor KAT | V | kusvk_w | - | signed int | - | 0.00048828 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x582F_WERT | 0x582F | STAT_0X582F_WERT | Abgastemperatur nach KAT aus Modell | °C | tkatm | - | unsigned char | - | 5.0 | 1.0 | -50.0 | - | 22;2C | - | - |
| STAT_0x5830_WERT | 0x5830 | STAT_0X5830_WERT | Dynamikwert der LSU | - | dynlsu_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Zustand Motor-Koordinator | - | CoEng_st | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5834_WERT | 0x5834 | STAT_0X5834_WERT | Umgebungsdruck von Sensor | hPa | pur_w | - | unsigned int | - | 0.0390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGENH | 0x5835 | STAT_GENERATOR_HERSTELLERCODE_WERT | Kennung Generator Hersteller | - | genmanufak | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| IUSGI | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Wert Temperatur Steuergerät | V | wtsg | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGTYP | 0x5842 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp | - | gentypkenn | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITGEE | 0x5844 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | °C | tchip | - | unsigned char | - | 1.0 | 1.0 | -40.0 | - | 22;2C | - | - |
| IUSV1 | 0x5845 | STAT_SONDENSPANNUNG_VORKAT_WERT | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | uulsuv_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUPW1 | 0x5846 | STAT_PWG1_SPANNUNG_WERT | Spannung PWG-Poti 1 (Word) | V | upwg1_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUPW2 | 0x5847 | STAT_PWG2_SPANNUNG_WERT | Spannung PWG-Poti 2 (Word) | V | upwg2_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUSN1 | 0x5849 | STAT_SONDENSPANNUNG_NACHKAT_WERT | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | ushk_w | - | unsigned int | - | 0.00488281 | 1.0 | -1.0 | - | 22;2C | - | - |
| IUDK2 | 0x584C | STAT_DK2_SPANNUNG_WERT | Spannung DK-Poti 2 | V | udkp2_w | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 | - | 22;2C | - | - |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Massenstrom Tankentlüftung in das Saugrohr | kg/h | mste_w | - | unsigned int | - | 0.00039063 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUDK1 | 0x584E | STAT_DK1_SPANNUNG_WERT | Spannung DK-Poti 1 | V | udkp1_w | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x584F_WERT | 0x584F | STAT_0X584F_WERT | Erkennung Bordnetzinstabilität | - | statbnserr | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUKUM | 0x5850 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Signalspannung des Kühlmitteltemperatursensor | V | utcw_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| IULMM | 0x5851 | STAT_LUFTMASSE_WERT | Spannungswert des Ansauglufttemperatursensors tfa2 (SY_TFAKON > 0) | V | wtfa2_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5852_WERT | 0x5852 | STAT_0X5852_WERT | Batteriestrom vom IBS | A | iibsl_w | - | unsigned int | - | 0.02 | 1.0 | -200.0 | - | 22;2C | - | - |
| STAT_0x5853_WERT | 0x5853 | STAT_0X5853_WERT | Batteriespannung von IBS | V | uibsl_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5854_WERT | 0x5854 | STAT_0X5854_WERT | Batterietemperatur vom IBS | °C | tibsl | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5855_WERT | 0x5855 | STAT_0X5855_WERT | schneller Mittelwert des Lambdaregelfaktors (Word) | - | frm_w | - | unsigned int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| IIEGE | 0x5857 | STAT_0X5857_WERT | Erregerstrom Generator 1 | A | ierr | - | unsigned char | - | 0.125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5858_WERT | 0x5858 | STAT_0X5858_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | % DK | wdkba | - | unsigned char | - | 0.39215687 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5859_WERT | 0x5859 | STAT_0X5859_WERT | Pumpenstrom Referenzleck | mA | iptrefr_w | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x585A_WERT | 0x585A | STAT_0X585A_WERT | min. Pumpenstrom bei Grobleckmessung | mA | iptglmn_w | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x585B_WERT | 0x585B | STAT_0X585B_WERT | Pumpenstrom am Ende der Feinstleckmessung | mA | iptkl_w | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| IUUMG | 0x5870 | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | udsu_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5871_WERT | 0x5871 | STAT_0X5871_WERT | Zähler Prüfzustand für DVESTANZNMOT | - | dvestanznmotctr | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| VGENR | 0x5872 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion on Generator 1 | - | bsdgenregv | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5874_WERT | 0x5874 | STAT_0X5874_WERT | ADC-Spannung Pumpenstrom Tankdiagnose | V | urptes_w | - | unsigned int | - | 0.0012207 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5875_WERT | 0x5875 | STAT_0X5875_WERT | Soll-Motormoment MSR für schnellen Eingriff | Nm | mdradmsrs_w | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5876_WERT | 0x5876 | STAT_0X5876_WERT | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert | MPa | prrohr_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | dlahi_w | - | signed int | - | 0.00003052 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x587B_WERT | 0x587B | STAT_0X587B_WERT | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irreversibel | - | vvt_highcurrent | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x587E_WERT | 0x587E | STAT_0X587E_WERT | Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversibel | - | vvt_highcurrent_rev | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | taml | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motorstarttemperatur | °C | tmst | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x5883_WERT | 0x5883 | STAT_0X5883_WERT | [0] Referenzpegel Klopfregelung, 16 bit | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5884_WERT | 0x5884 | STAT_0X5884_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | ierrfgrenz | - | unsigned char | - | 0.125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5885_WERT | 0x5885 | STAT_0X5885_WERT | [2] Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5886_WERT | 0x5886 | STAT_0X5886_WERT | [3] Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| IGENA | 0x5887 | STAT_0X5887_WERT | Auslastungsgrad Generator 1 | % | dfsiggen | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5888_WERT | 0x5888 | STAT_0X5888_WERT | [5] Referenzpegel Klopfregelung, 16bit | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned int | - | 0.00024414 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit nach Startende | s | tnst_w | - | unsigned int | - | 0.01 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur der LSU | °C | tkerlsu_w | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 | - | 22;2C | - | - |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit Leckmessung | s | tdmlka_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom Tankdiagnose | mA | iptes_w | - | unsigned int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Kupplungsmotormoment Istwert | Nm | mkist_w | - | signed int | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | migs_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5894_WERT | 0x5894 | STAT_0X5894_WERT | [4] Spannung Klopfwerte Zylinder 2 | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5895_WERT | 0x5895 | STAT_0X5895_WERT | [1] Spannung Klopfwerte Zylinder 5 | V | rkr_w | - | unsigned int | - | 0.00007629 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x5896_WERT | 0x5896 | STAT_0X5896_WERT | Abgastemperatur hinter Hauptkat aus Modell | °C | tanhkm_w | - | unsigned int | - | 0.0234375 | 1.0 | -273.1499939 | - | 22;2C | - | - |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | ugen | - | unsigned char | - | 0.1 | 1.0 | 10.6 | - | 22;2C | - | - |
| STAT_0x5899_WERT | 0x5899 | STAT_0X5899_WERT | Bedingung Anforderung Motorrelais einschalten | 0/1 | B_amtr | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x589B_WERT | 0x589B | STAT_0X589B_WERT | Bedingung unzulössig hoher Motorstrom bei Kurzschluss erkannt | 0/1 | B_ivvtkse | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x589C_WERT | 0x589C | STAT_0X589C_WERT | Bedingung Freigabe VVT-Endstufe | 0/1 | B_vvten | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x589D_WERT | 0x589D | STAT_0X589D_WERT | Anzahl erkannter VVT Lageregelungsfehler | - | vvt_deviation | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x589E_WERT | 0x589E | STAT_0X589E_WERT | Sollwert Exzenterwinkel VVT | ° | exwinks_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x589F_WERT | 0x589F | STAT_0X589F_WERT | Batterietemperatur | °C | tbatt | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0X58A0_WERT | Entladung während Ruhestromverletzung | Ah | qiruhe2_w | - | unsigned int | - | 0.01820445 | 1.0 | 0.0 | - | 22;2C | - | - |
| ISKME | 0x58A1 | STAT_KILOMETERSTAND_WERT | Wegstrecke_km auf 1km genau | - | kmstand_l | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0X58A2_WERT | Istwert Exzenterwinkel VVT | ° | exwnki_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0X58A3_WERT | rel. Exzenterwinkel am oberen mech. Anschlag | ° | exwnkoar_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A4_WERT | 0x58A4 | STAT_0X58A4_WERT | Generatorstatus | - | st_gen | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A5_WERT | 0x58A5 | STAT_0X58A5_WERT | Vom Generator empfangenes Lastsignal | % | dffgen | - | unsigned char | - | 0.390625 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0X58A6_WERT | Rel. Exzenterwinkel | ° | exwnkr_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A7_WERT | 0x58A7 | STAT_0X58A7_WERT | Abstellzeit aus relativem Minutenzähler bis Motorstart | min | tabsmn_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Rel. Exzenterwinkel am unteren mech. Anschlag | ° | exwnkuar_w | - | signed int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0X58A9_WERT | VVT Verstellbereich aus Urlernvorgang | ° | exwnkvb_ur_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AA_WERT | 0x58AA | STAT_0X58AA_WERT | Verstellbereich des Exzenterwinkels | ° | exwnkvb_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AB_WERT | 0x58AB | STAT_0X58AB_WERT | DLR für DV-E: Summe der PID-Anteile | % | dlrspid_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AD_WERT | 0x58AD | STAT_0X58AD_WERT | Sauerstoffspeichervermögen KAT | mg | oscdktt_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58AE_WERT | 0x58AE | STAT_0X58AE_WERT | Peridendauer für Massenstrom aus HFM | µs | tpmshfm_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | EKP-Sollvolumenstrom | l | vssekp | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | Zähler für Lerndauer eines Lernsteps | - | lrnstep_c | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 5 | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 6 | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | [4] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | [5] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | dztbd_w | - | unsigned int | - | 0.001 | 1.0 | 0.0 | - | 22;2C | - | - |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | aktueller Bremsdruck | hPa | pbrems | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0X58B8_WERT | Motordrehzahl in der Funktionsüberwachung | 1/min | MoF_nEng | - | unsigned char | - | 40.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0X58B9_WERT | Pedalsollwert (8 Bit) in der Funktionsüberwachung | V | MoF_uAPP | - | unsigned char | - | 0.01953125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BA_WERT | 0x58BA | STAT_0X58BA_WERT | Bank mittel eingespritzte effektive relative Krafftstoffmasse (inkl. Reduzierstufe) | % | rkmeeff_w | - | unsigned int | - | 0.046875 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BB_WERT | 0x58BB | STAT_0X58BB_WERT | Strom für VVT-Motor | A | ivvtm_w | - | signed int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BC_WERT | 0x58BC | STAT_0X58BC_WERT | relative Luftfüllung in der Funktionsüberwachung | % | rl_um | - | unsigned char | - | 0.75 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BD_WERT | 0x58BD | STAT_0X58BD_WERT | Status Fehler Überlast VVT1 | - | stdvovrld | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58BE_WERT | 0x58BE | STAT_0X58BE_WERT | DV-E-Adaption: Status Prüfbedingungen | - | dveadchst | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
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
| STAT_0x58D2_WERT | 0x58D2 | STAT_0X58D2_WERT | Luftklappe - Sollposition in Grad | - | RadSht_phiPosDes | - | unsigned char | - | 0.50196081 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0X58D3_WERT | Luftklappe - Istposition in Grad | - | RadSht_phiPos | - | unsigned char | - | 0.50196081 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0X58D4_WERT | Startbedingung Kraftschluss erfüllt | 0/1 | B_kupp1 | - | unsigned char | - | - | - | - | - | 22;2C | - | - |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0X58D5_WERT | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | °C | tfa1lin | - | unsigned char | - | 0.75 | 1.0 | -48.0 | - | 22;2C | - | - |
| IUANS | 0x58D7 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0X58D8_WERT | Differenz-DK-Winkel Sollwert - Istwert | % DK | dwdkdlr_w | - | signed int | - | 0.02441406 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0X58D9_WERT | Schrittzähler DK-Rückstellfeder-Prüfung | - | fprstep_c | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DA_WERT | 0x58DA | STAT_0X58DA_WERT | koordiniertes Moment für Füllung | % | milsol_w | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DB_WERT | 0x58DB | STAT_0X58DB_WERT | Fehlerzähler abgasrelevante Aussetzer über alle Zylinder | - | fzabgs_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DC_WERT | 0x58DC | STAT_0X58DC_WERT | Intervallzähler für abgasrelevante Aussetzer | - | ivzabg_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DD_WERT | 0x58DD | STAT_0X58DD_WERT | Druck vor Drosselklappe Rohwert | hPa | pvdr_w | - | unsigned int | - | 0.078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58DE_WERT | 0x58DE | STAT_0X58DE_WERT | Spannung Drucksensor vor Drosselklappe | V | udsvd_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0X58E0_WERT | Abgleich DK-Modell (Faktor) | - | eisydkfkaf | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0X58E1_WERT | Abgleich DK-Modell (Offset) | kg/h | eisydkkoff | - | signed char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0X58E2_WERT | Abgleich EV-Modell (Faktor) | - | eisyevfkaf | - | unsigned char | - | 0.0078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0X58E3_WERT | Abgleich EV-Modell (Offset) | kg/h | eisyevkoff | - | signed char | - | 8.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0X58E4_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E5_WERT | 0x58E5 | STAT_0X58E5_WERT | Rotorposition VVT-Motor | ° | vvtrotwn_w | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58E6_WERT | 0x58E6 | STAT_0X58E6_WERT | Soll-Bestromung VVT-Motor | A | ivvtlrs_w | - | signed int | - | 0.00610352 | 1.0 | 0.0 | - | 22;2C | - | - |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | empf. Spannung von BSS-Wasserpumpe | V | wmu | - | unsigned char | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| INWAP | 0x58EA | STAT_WASSERPUMPE_DREHZAHL_WERT | empf. Istdrehzahl von BSS-Wasserpumpe | 1/min | wmpdzi | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| ITWAE | 0x58EC | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | empf. Temperatur von BSS-Wasserpumpe | °C | wmt | - | unsigned char | - | 1.0 | 1.0 | -50.0 | - | 22;2C | - | - |
| IIWAP | 0x58ED | STAT_WASSERPUMPE_STROM_WERT | empf. Strom von BSS-Wasserpumpe | % | wmi | - | unsigned char | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58EF_WERT | 0x58EF | STAT_0X58EF_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0X58F0_WERT | ungefilterter Raildruck Istwert (abs.) | MPa | prroh_w | - | unsigned int | - | 0.0005 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F2_WERT | 0x58F2 | STAT_0X58F2_WERT | Tastverhältnis Mengensteuerventil | % | PWM_VCV | - | unsigned int | - | 0.00152588 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0X58F3_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | - | unsigned int | - | 0.1 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0X58F4_WERT | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | upnd1ms_w | - | unsigned int | - | 0.00488281 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0X58F5_WERT | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | uvvtdia3V | - | unsigned char | - | 0.01289062 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0X58F6_WERT | Sollspannung des VVT Lagereglers | V | uvvtlrs_w | - | signed int | - | 0.00078125 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0X58F7_WERT | VVT-Strom | - | vvtipl | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FA_WERT | 0x58FA | STAT_0X58FA_WERT | gefilterter Faktor Tankentlüftungs-Adaption | - | fteadf | - | signed char | - | 0.5 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FC_WERT | 0x58FC | STAT_0X58FC_WERT | Fertigungs-Werkstatt-,Transportmodus | - | fetrawemod | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0x58FD_WERT | 0x58FD | STAT_0X58FD_WERT | Untermodi des Fe Tra Fla Mode | - | fetraflamod | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| STAT_0X58FF_WERT | 0x58FF | STAT_0X58FF_WERT | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22;2C | - | - |
| 0xFFFE | 0xFFFE | STAT_0XFFFE_WERT | Umweltbedingung unbekannt Tabellenende | HEX | - | - | unsigned char | - | - | - | - | - | 22;2C | - | - |

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

### TABLE_STATUS_BATTERIEZUSTAND

| NR | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie pruefen |
| 2 | Batterie nicht i.O. |
| 3 | ungueltig |

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

### TABLE_STATUS_IBS_BZE

| NR | TEXT |
| --- | --- |
| 0 | BZE nicht aktiv |
| 1 | BZE aktiv |

### TABLE_STATUS_LETZTER_BATTERIEWECHSEL

| NR | TEXT |
| --- | --- |
| 0 | Wechsel zulässig |
| 1 | Wechsel unzulässig |

### TABLE_STATUS_TIEFENTLADUNG

| NR | TEXT |
| --- | --- |
| 0 | Batterie i.O. |
| 1 | Batterie durch Tiefentladung geschädigt |

### TABLE_STATUS_WASSERVERLUST

| NR | TEXT |
| --- | --- |
| 0 | Wasserverlust i.O. |
| 1 | Wasserverlust nicht i.O. |

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

### T_1BIT_GENIUTEST_AB_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### T_1BIT_GENIUTEST_ERR_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### T_1BIT_GENIUTEST_ERR_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### T_1BIT_GENIUTEST_ERR_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### T_1BIT_GENIUTEST_ERR_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### T_1BIT_GENIUTEST_ERR_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### T_1BIT_GENIUTEST_ERR_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### T_1BIT_GENIUTEST_ERR_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

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

### T_BA_IST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |

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

### T_B_STANDARD_1BYTE_LESEN_0_1_FAM

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 255 | Groesser 1 |

### T_B_VVTNOTL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

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
| 12 | Schwankung von Referenzstrom zu gross |
| 13 | Elektrischer Fehler vorhanden |
| 14 | Max. Diagnosezeit erreicht/ueberschritten |
| 15 | Kein Freigabe TEV Aktiv |
| 20 | Funktion wurde Abgebrochen |
| 23 | Spannungsschwankung zu gross |
| 24 | Zuendung an |
| 30 | Funktion beendet: Tank Dicht |
| 31 | Funktion beendet: Feinleck erkannt |
| 32 | Funktion beendet: Grobleck erkannt |
| 33 | Funktion beendet: Modulfehler |
| 34 | Funktion beendet: Kein Grobleck erkannt |
| 255 | Funktion noch nicht gestartet |

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

### T_S_VSMNHB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 128 | 1 |

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

### BA_VCV_STATE_TEXT

| WERT | TEXT |
| --- | --- |
| 0x00 | VCV_TEST |
| 0x01 | START |
| 0x02 | MFP_CTL |
| 0x03 | VCV_CLOSE |
| 0x04 | VCV_CRASH |
| 0x05 | MFP_MAX |
| 0x06 | VCV_LIH |
| 0xFF | undefiniert |

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
