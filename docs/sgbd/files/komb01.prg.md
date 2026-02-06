# komb01.prg

## General

|  |  |
| --- | --- |
| File | komb01.prg |
| Type | PRG |
| Jobs | 82 |
| Tables | 148 |
| Origin | BMW EI-44 Herbert_Jilg |
| Revision | 32.003 |
| Author | Bertrandt EI-42 Finsterhölzl, Bertrandt EI-44 Pecher |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Instrumentenkombi |  |  |
| ORIGIN | string | BMW EI-44 Herbert_Jilg |  |  |
| REVISION | string | 32.003 |  |  |
| AUTHOR | string | Bertrandt EI-42 Finsterhölzl, Bertrandt EI-44 Pecher |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.78 |  |  |
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

### STEUERN_LEUCHTEN

Leuchten im Kombi ansteuern. Für Service- und Testzwecke Service nur in Extended Mode erlaubt JobHeaderFormat 0xD11B STEUERN_LEUCHTEN

| Name | Type | Description |
| --- | --- | --- |
| STEUERPARAMETER | string | 'AUS' =  Kontrolle zurück ans Kombi geben, (keine argument_FARBE nötig) 'EIN' =  Leuchten im Kombi ansteuern |
| FARBE | string | 'ROT' = Rote Leuchten im Kombi ansteuern 'GELB' = Gelbe Leuchten im Kombi ansteuern 'ORANGE' = Orange Leuchten im Kombi ansteuern 'GRUEN' = Gruene Leuchten im Kombi ansteuern 'BLAU' = Blau Leuchten im Kombi ansteuern |

### KOMBI_UHRZEIT_DATUM_STELLEN

Uhrzeit und Datum stellen Für Service- und Testzwecke Daten werden vom PC bzw. Tester uebernommen JobHeaderFormat 0xD113 STEUERN_UHRZEIT_DATUM

_No arguments._

### STATUS_GWSZ_ANZEIGE

JobHeaderFormat 0xD122 GWSZ_ANZEIGE_WERT

_No arguments._

### STATUS_DREHZAHLGRENZE

JobHeaderFormat 0xD124 DREHZAHLGRENZE_WERT

_No arguments._

### STATUS_TACHOGRENZE

JobHeaderFormat 0xD109 TACHOGRENZE_WERT

_No arguments._

### _STATUS_FGN_CODIERT

JobHeaderFormat 0x300A FGN_CODIERT Entwicklungsjob

_No arguments._

### _STATUS_FGN_RDA_KOPIE

JobHeaderFormat 0x401F FGN_RDA_KOPIE Entwicklungsjob

_No arguments._

### STATUS_CHECK_CONTROL_HISTORY

Liest den CC Historyspeicher aus dem RAM aus. JobHeaderFormat 0xD10B CHECK_CONTROL_MELDUNG_ID

_No arguments._

### _STATUS_SERVICE_SCHLUESSELDATEN

Dieser Job dient zum blockweisen Auslesen der im CAS gespeicherten Service Schlüsseldaten. JobHeaderFormat 0x1006 STATUS_SERVICE_SCHLUESSELDATEN Entwicklungsjob

_No arguments._

### _STATUS_READDATABYIDENTIFIER

JobHeaderFormat Freies Telegramm fuers ReadDataByIdentifier Service Entwicklungsjob

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | BYTE 0: DID !MSB-Byte als Hexzahl |
| BYTE1 | int | BYTE 1: DID !LSB-Byte als Hexzahl |

### STATUS_CBS_SERVICE_AKTIVIERUNG

JobHeaderFormat STATUS_CBS_SERVICE_AKTIVIERUNG

| Name | Type | Description |
| --- | --- | --- |
| CBS_SERVICE | string | 'FZG_CHECK','FZG_CHECK_UNABH','AU', 'HU','BB_VORNE', 'BB_HINTEN' 'MOTOROEL', 'UEBERGABE', 'BREMSFL', 'EINF_KONTR', 'BSI' |

### STEUERN_CBS_SERVICE_AKTIVIERUNG

JobHeaderFormat STEUERN_CBS_SERVICE_AKTIVIERUNG

| Name | Type | Description |
| --- | --- | --- |
| CBS_SERVICE | string | 'FZG_CHECK', 'FZG_CHECK_UNABH','AU', 'HU','BB_VORNE', 'BB_HINTEN' 'MOTOROEL', 'UEBERGABE', 'BREMSFL', 'EINF_KONTR', 'BSI' |
| AKTION | unsigned char | 1: aktiv, 0: inaktiv |

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STATUS_FOT_TEMPERATUR

Gibt die FOT Temperatur im SG. an

_No arguments._

### STATUS_MOST_3DB

xx Status der 3dB Leistungsabsenkung der MOST FOTs.

_No arguments._

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_WAKEUP_STATUS

Gibt an, ob das SG den MOST-Ring geweckt hat oder geweckt wurde.

_No arguments._

### STEUERN_ABILITY_TO_WAKE

Gibt an, ob das SG den MOST-Ring wecken darf.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ABILITY_TO_WAKE | int | 0=off 1=on 2=critical |

### STEUERN_MOST_3DB

3dB Leistungsabsenkung der MOST FOTs

_No arguments._

### STEUERN_WATCHDOG_TRIGGER_STOP

JobHeaderFormat 0xF020 STEUERN_WATCHDOG_TRIGGER_STOP Der Service 0x31 ist nur im Extended (Diagnose) Session erlaubt

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned char | Zeitübergabe in 1[s] 1Byte (0x00 - 0xFF) |

### STEUERN_GWSZ_OFFSET

JobHeaderFormat 0xD114 GWSZ_RESET

_No arguments._

### _STATUS_EERAMDATEN

Dieser Job dient ausschliesslich zum Auslesen der Debugdaten JobHeaderFormat 0x23 STATUS_EERAMDATEN Entwicklungsjob

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_MSB | unsigned char | MSB-Byte Speicheradresse |
| ADRESSE_LSB | unsigned char | LSB-Byte Speicheradresse |
| LAENGE_MSB | unsigned char | MSB-Byte Antwortlänge |
| LAENGE_LSB | unsigned char | LSB-Byte Antwortlänge |

### _STEUERN_DCC_HERSTELLDATENKORREKTUR

JobHeaderFormat Entwicklungsjob, Beachte: SGBD-Verteilung nur gezielt von der EI-42!

_No arguments._

### STATUS_LEUCHTEN

Status_Leuchten im Kombi abfragen. Für Service- und Testzwecke Service im default Mode erlaubt JobHeaderFormat 0x2520 STATUS_LEUCHTEN

| Name | Type | Description |
| --- | --- | --- |
| LEUCHTE | string | 'ABS_S' = Zustand und Farbe der ABS-Symbol Leuchte abfragen 'ABS_SC' = Zustand und Farbe der ABS-Schriftzug Leuchte abfragen 'BRAKE_SC' = Zustand und Farbe der BRAKE-Schriftzug (ABWL in US) Leuchte abfragen 'ABWL_S' = Zustand und Farbe der ABWL-Symbol Leuchte abfragen 'RDC_S' = Zustand und Farbe der RDC-Symbol Leuchte abfragen 'AFS_S' = Zustand und Farbe der AFS-Symbol Leuchte abfragen 'DSC_S' = Zustand und Farbe der DSC-Symbol Leuchte abfragen 'DSC_OFF_S' = Zustand und Farbe der DSC_OFF-Symbol Leuchte abfragen 'AUTO_H_SC' = Zustand und Farbe der AUTO-H-Schriftzug Leuchte abfragen 'P_S' = Zustand und Farbe der P-Symbol Leuchte abfragen 'PARK_SC' = Zustand und Farbe der PARK-Schriftzug Leuchte abfragen 'ACC_FZG_S' = Zustand und Farbe der ACC-FZG-Symbol Leuchte abfragen 'MIL_S' = Zustand und Farbe der MIL-Symbol Leuchte abfragen 'AIRBAG_S' = Zustand und Farbe der Airbag-Symbol Leuchte abfragen 'GURT_S' = Zustand und Farbe der Gurt-Symbol Leuchte abfragen 'NSL' = Zustand und Farbe der Nebelschlussleuchte abfragen 'NSW' = Zustand und Farbe der Nebelscheinwerfer Leuchte abfragen 'STANDLICHT' = Zustand und Farbe der Standlicht Leuchte abfragen 'FERNLICHT' = Zustand und Farbe der Fernlicht Leuchte abfragen 'FLA' = Zustand und Farbe der Fernlichtassistent Leuchte abfragen 'BLINKER_R' = Zustand und Farbe der Blinker lins Leuchte abfragen 'BLINKER_L' = Zustand und Farbe der Blinker rechts Leuchte abfragen 'DCC' = Zustand und Farbe der DCC Leuchte abfragen |

### _STATUS_ECO_MODE_AUSTRITT

JobHeaderFormat STATUS_ECO_MODE_AUSTRITT

_No arguments._

### _DET_LOESCHEN

JobHeaderFormat 0x402C FGN_CODIERT Entwicklungsjob

_No arguments._

### _GSS_LOESCHEN

JobHeaderFormat 0x402C FGN_CODIERT Entwicklungsjob

_No arguments._

### _STATUS_GSS_ERROR_LESEN

Liest die Fehlercodes aus GSS Fehlerspeicher aus. JobHeaderFormat Der Service 0x31 ist nur in Extended (Diagnose) Session erlaubt

_No arguments._

### STATUS_VCM_BACKUP_ISTUFE_LESEN

Liefert die im EEPROM abgelegte I-Stufe jeweils für Werk, HO und HO-Backup. JobHeaderFormat 0x100B STATUS_ISTUFE

_No arguments._

### STATUS_VCM_BACKUP_FAHRZEUGAUFTRAG_LESEN

Der Job dient zum Auslesen des redundant im KOMBI gespeicherten Fahrzeugauftrags. Hinweise: Das FEM/BDC ist das Master-SG für den Fahrzeugauftrag. Es werden nur die uninterpretierten Rohdaten des VCM-Backup aus dem KOMBI EEPROM geliefert JobHeaderFormat 0x3F1C und 0x3F1D FAHRZEUGAUFTRAG

_No arguments._

### STATUS_BMW_CC_DATENSAETZE_LESEN

0xD12D BMW_CC_DATENSAETZE

_No arguments._

### STATUS_HU_CC_DATENSAETZE_LESEN

0xA10A HU_CC_DATENSAETZE

| Name | Type | Description |
| --- | --- | --- |
| CCM_SYSZEIT | long | Parameter 1: CCM_SYSZEIT (1 Byte) 0-FFh: Zeit in 30min-Schritten |
| CCM_GWSZ | long | Parameter 2: CCM_GWSZ (1 Byte) 0-FFh: Kilometer in 1km |

### STATUS_HU_ZEITSTAEMPEL_LESEN

0xD12C HU_ZEITSTAEMPEL

_No arguments._

### STATUS_HUD_VERBAU_LESEN

Auslesen des HUD Verbaus

_No arguments._

### SEGMENTDATEN_SPEICHER

0xD12F SEGMENTDATEN_SPEICHER

_No arguments._

### TIMER_KLIMATISIERUNG

JobHeaderFormat 0xD121 TIMER_KLIMATISIERUNG

_No arguments._

### TEST_TIMER_STATUS

Informationen zu Timern aus Kombi auslesen $22   ReadDataByIdentifier $F101 SVK_AKTUELL (Default) $23 ReadMemoryByAdress

_No arguments._

### STEUERN_STARTWERTESPEICHER_DEFAULT

0xD116 HU_CC_DATENSAETZE Vorgabe = Defaultwerte (12kWh, 30kmh, 25s)

_No arguments._

### _STATUS_HW_VARIANTE_ERW

Den Hersteller, die HW-Variante und den Verbaustand analoger Zeiger im Kombi zu ermitteln Für Service- und Testzwecke Service im default Mode erlaubt JobHeaderFormat Job ist HW-abhängig und gilt nicht für alle HW-Varianten !

_No arguments._

### _STATUS_TANK_MAX

Auslesen des Tankvolumens

_No arguments._

### _SEGMENTDATEN_SPEICHER

0xD12F SEGMENTDATEN_SPEICHER

_No arguments._

### _STATUS_READMEMORYBYADDRESS

JobHeaderFormat free telegram for ReadMemoryByAddress Service Job for developement

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | MSB-Byte of address in hex |
| BYTE1 | int | LSB-Byte of address in hex |
| BYTE2 | int | length of readout in hex (0x00 ... 0xff) |

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

### ARG_0X4010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TWSZ | km | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | - | - | 0x00000000 =  Nur ein Rücksetzen auf 0km möglich. Eine Vorgabe auf einen bestimmten Wert nicht zulässig. |

### ARG_0X4400_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HW_HAUPTINDEX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei grösseren Änderungen soll der HI geändert weden |
| HW_UNTERINDEX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei kleineren Änderungen soll der UI geändert weden |

### ARG_0X4802

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION | - | high | char | - | - | - | - | - | - | - | 0x00 = OFF; 0x01 = ON; |

### ARG_0X4806

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REGISTERADRESSE | - | high | unsigned long | - | - | - | - | - | - | - | zu beschreibende Registeradresse |
| REGISTERLAENGE | - | high | unsigned char | - | - | - | - | - | - | - | 0x00 = 1 Byte; 0x00 = 1 Halfword; 0x02 = 1 Word |
| REGISTERWERT | - | high | unsigned long | - | - | - | - | - | - | - | Registerwert |

### ARG_0X4807

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REGISTERADRESSE | - | high | unsigned long | - | - | - | - | - | - | - | auzulesende Registeradresse |
| REGISTERLAENGE | - | high | unsigned char | - | - | - | - | - | - | - | 0x00 = 1 Byte; 0x00 = 1 Halfword; 0x02 = 1 Word |

### ARG_0X4808

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | - | high | unsigned int | - | - | - | - | - | - | - | Bildposition in Mikroschritten |

### ARG_0XA102

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BILD | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 0: 0x00: Ohne Muster, es wird ein Testbild gemäß Farbvorgabe vorgegeben. 0x01-0x3F: Kombitestbilder anzeigen (BMW) 0x40-0x7F: Headup-Display Testbilder anzeigen (BMW) 0x80-0xBF: Kombitestbilder anzeigen (Lieferant) 0xC0-0xFF: Headup-Display Testbilder anzeigen (Lieferant) |
| ROT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 1: 0x00- 0xFF (rot) |
| GRUEN | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 2: 0x00- 0xFF (grün) |
| BLAU | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 3: 0x00- 0xFF (blau) |

### ARG_0XA103

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | unsigned char | - | TAB_WARPING_AKTION | - | - | - | - | - | 0x00 = abbrechen Warping ohne Speichern der Veränderungen und zurück zur normalen Ansicht 0x01 = anzeigen Warpingbild mit Ansicht des Rechteck ohne Parametersatz  0x02 = Warpingbild mit Ansicht des Rechteck mit der Veränderung durch die Werte in den Argumenten 0x03 = beenden von Warping mit Speichern der Daten und zurück zur normalen Ansicht |
| MODE | + | - | 0-n | - | unsigned char | - | TAB_WARPING | - | - | - | - | - | 0x00 : keine Änderung 0x01 : Trapez 0x02 : Rhombus 0x03 : Kissen-Tonne 0x04 : Smile 0x05 : Höhe 0x06 : Breite 0x08 : H-Shift |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_WARPING_RICHTUNG | - | - | - | - | - | 00h : keine Änderung 01h : hoch 02h : runter 03h : links 04h : rechts |
| DELTA | + | - | - | - | char | - | - | - | - | - | - | - | Wert der Veränderung der Verstellung in Pixel. |

### ARG_0XA105

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION_BLINKER | + | - | 0-n | - | char | - | TAB_KOMBI_BLINKER | - | - | - | - | - | Argumente siehe Tabelle TAB_KOMBI_BLINKER |

### ARG_0XA106

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARPLISTE | + | - | 0-n | - | char | - | TAB_WARPLISTE | - | - | - | - | - | Es sind drei Kennlinien möglich: 1. CAF - Codierdaten 2. Werksmesstechnik - Mit einer Kamera vermessene Kennlinie 3. Service - im Service nachjustierte Kennlinie |

### ARG_0XA107

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS | + | - | 0-n | - | unsigned char | - | TAB_HUD_BILDPOSITION | 1.0 | 1.0 | 0.0 | - | - | Gibt an, ob nach dem Beenden der Routine die Bildposition beibehalten werden soll:  0x01 = ShortPeriod - Motor fährt nach Beenden in Ausgangsstellung zurück, 0x02 = Continuation - Motor behält Position bei, 0x03 = Bildrotation Rotation wird nur in der Baureihe L6 bei gleichzeitigem Verbau eines RGR Head-Up Displays unterstützt |
| HOEHE_RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_HUD_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Höhenverstellung:   0x01 = hoch,   0x02 = runter Bildrotation:   0x01 = rechtsdrehend,   0x02 = linksdrehend |
| SCHRITTZAHL | + | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Anzahl der Schritte für die Höhenverstellung bzw. Bildrotation. |

### ARG_0XD08D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 = speichern auf aktuellen Schlüssel 0x01 = speichern auf alle Schlüssel |
| POSITION | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 Anschlag unten 100 Anschlag oben |

### ARG_0XD08E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0x00 = speichern auf aktuellen Schlüssel 0x01 = speichern auf alle Schlüssel |
| POSITION | - | - | char | - | - | - | - | - | -10.0 | 10.0 | -10 Anschlag links 0 mitte +10 Anschlag rechts |

### ARG_0XD090

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 =HUD deaktivieren 0x01 =HUD aktivieren |

### ARG_0XD10A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KM_LEISTUNG | km | - | unsigned char | - | - | - | - | - | 1 | 0xFE | Angenommene, durchschnittliche Jahreskilometerleistung für die CBS-Berechnungen (in 1000 km). |

### ARG_0XD115

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT_ACC | km/h | - | int | - | - | 10 | - | - | 0 | 400 | vorzugebende Geschwindigkeit für ACC-Zeiger in km/h |

### ARG_0XD116_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NEBENVERBRAUCHERLEISTUNG | kW | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | Nebenverbraucherleistung in [0.01 kW] |
| MO_FR_CONSUMPTION_1 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_1 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_1 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| MO_FR_CONSUMPTION_2 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_2 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_2 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| MO_FR_CONSUMPTION_3 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_3 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_3 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| MO_FR_CONSUMPTION_4 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_4 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_4 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| MO_FR_CONSUMPTION_5 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_5 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_5 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| MO_FR_CONSUMPTION_6 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_6 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_6 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| MO_FR_CONSUMPTION_7 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Consumption  [ 1.0Wh/100km] |
| MO_FR_COUNTER_7 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Mo-Fr Counter  [1s] |
| MO_FR_SPEED_7 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Mo-Fr Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_1 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_1 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_1 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_2 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_2 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_2 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_3 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_3 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_3 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_4 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_4 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_4 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_5 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_5 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_5 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_6 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_6 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_6 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SA_CONSUMPTION_7 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Consumption  [ 1.0Wh/100km] |
| SA_COUNTER_7 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Sa Counter  [1s] |
| SA_SPEED_7 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Sa Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_1 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_1 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_1 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_2 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_2 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_2 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_3 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_3 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_3 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_4 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_4 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_4 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_5 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_5 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_5 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_6 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_6 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_6 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |
| SO_CONSUMPTION_7 | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Consumption  [ 1.0Wh/100km] |
| SO_COUNTER_7 | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | So Counter  [1s] |
| SO_SPEED_7 | km/h | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | So Speed  [ 0.1 km/h] |

### ARG_0XD117

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | 1/min | - | int | - | - | - | - | - | 0 | 10000 | Vorgeben der Drehzahlmesserstellung in 1/min |

### ARG_0XD11A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT | km/h | - | int | - | - | 10 | - | - | - | - | Setze Tacho auf beliebige Geschwindigkeit. Eingabe in km/h |

### ARG_0XD11C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBRAUCH | - | - | int | - | - | - | - | - | - | - | Vorgabe von Momentanverbrauch in L/100km oder Öltemperatur in Grad Celsius. |

### ARG_0XD11D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POWER_RESERVE | % | - | int | - | - | 10.0 | - | - | 0.0 | 100.0 | Ansteuern des Power-Reserve Zeigers. Eingabe in % |

### ARG_0XD11E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TANKINHALT | % | - | int | - | - | - | - | - | 0 | 100 | Tankinhalt in % vorgeben |

### ARG_0XD125

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EWIGER_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | Ewiger Durchschnittsverbrauch in 0,01 [L/100km] |
| 10000KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | 10.000 km Durchschnittsverbrauch in 0,01 [L/100km] |
| 33KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | 33 km Durchschnittsverbrauch in 0,01 [L/100km] |

### ARG_0XD128

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EWIGER_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Ewiger Durchschnittsverbrauch in 0,1 [kWh/100km] |
| 10000KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | 10.000 km Durchschnittsverbrauch in 0,1 [kWh/100km] |
| 33KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | 33 km Durchschnittsverbrauch in 0,1 [kWh/100km] |

### ARG_0XD12B

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT_1 | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit |
| ENERGIE_1 | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Durch den REX erzeugte Energie |
| GESCHWINDIGKEIT_2 | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit |
| ENERGIE_2 | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Durch den REX erzeugte Energie |
| GESCHWINDIGKEIT_3 | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit |
| ENERGIE_3 | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Durch den REX erzeugte Energie |
| GESCHWINDIGKEIT_4 | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit |
| ENERGIE_4 | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Durch den REX erzeugte Energie |
| GESCHWINDIGKEIT_5 | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit |
| ENERGIE_5 | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Durch den REX erzeugte Energie |
| GESCHWINDIGKEIT_6 | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Geschwindigkeit |
| ENERGIE_6 | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Durch den REX erzeugte Energie |

### ARG_0XD12E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T_ID_FUNKTION_BEDIENUNG_TIMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| T_ID_BEDIENUNG_TIMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 - 8). |
| T_BEDIENUNG_TIMER_STUNDE | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer_Stunde (OP_TIM_HR) |
| T_BEDIENUNG_TIMER_MINUTEN | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer_Minute (OP_TIM_MN) |
| T_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| T_BEDIENUNG_AUSWAHL_WOCHENTAG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |

### ARG_0XDA0C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_PORT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des Port, der verwendet werden soll: 0x01 = Hintergrund-LEDs, servicerelevant 0x02 = LED Strom, nur für Entwicklung 0x03 = Displayheizung, nur für Entwicklung |
| PWM_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - 10000 entspricht  0,01% = Lichtleistung max. abgesenkt,  100% = volle Lichtleistung |

### ARG_0XF120

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INTERFACE | + | - | 0-n | high | unsigned char | - | TAB_INTERFACE | 1.0 | 1.0 | 0.0 | - | - | APIX Interface |

### BF_BLOCK_01_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_01_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_01_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_02_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_02_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_02_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_03_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_03_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_03_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_04_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_04_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_04_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_05_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_05_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_05_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_06_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_06_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_06_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_07_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_07_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_07_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_08_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_08_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_08_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_09_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_09_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_09_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_10_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_10_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_10_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLS_VERZOEGERUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLS_VERZOEGERUNG | 0-n | high | unsigned char | 0x03 | TAB_BLS_VERZOEGERUNG | - | - | - | Status_BLS / Verzögerung   xxxx xx11b |

### BF_ECO_MODE_AUSTRITT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSTRITT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Austritt |
| STAT_LAST | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Last |
| STAT_GESCHWINDIGKEIT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Geschwindigkeit |
| STAT_VERZOEGERUNG | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Verzögerung |
| STAT_GANGWAHL | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Gangwahl |
| STAT_GWS | 0/1 | high | unsigned char | 0x20 | - | - | - | - | GWS |
| STAT_KUP | 0/1 | high | unsigned char | 0x40 | - | - | - | - | KUP |
| STAT_VZA | 0/1 | high | unsigned char | 0x80 | - | - | - | - | VZA |

### BF_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x05 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | <Funktionen gemäß der FeTra-Liste eintragen> |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026000 | Energiesparmode aktiv | 0 |
| 0x02FF60 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7F607 | KOMBI: Keine aktuellen Kodierdaten gespeichert | 0 |
| 0xB7F608 | KOMBI: Kodierdaten fehlerhaft | 0 |
| 0xB7F609 | KOMBI: Kodierdaten nicht freigegeben | 0 |
| 0xB7F60A | KOMBI: Steuergerät ist nicht für das Fahrzeug kodiert | 0 |
| 0xB7F60B | KOMBI: Kodierdaten unplausibel | 0 |
| 0xB7F60C | PIA Konfigurationsfehler | 1 |
| 0xB7F60F | KOMBI: Gesamtwegstrecke kann nicht restauriert werden | 0 |
| 0xB7F640 | KOMBI: Displaytemperatursensor in der Instrumentenkombination hat einen Kurzschluss nach Masse | 0 |
| 0xB7F641 | KOMBI: Displaytemperatursensor in der Instrumentenkombination hat einen Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F643 | KOMBI: Fotodiode in der Instrumentenkombination hat einen Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F644 | KOMBI: Taste Tageswegstreckenzähler hat einen Kurzschluss nach Masse oder zur Versorgungsspannung | 0 |
| 0xB7F654 | Außentemperatursensor hat einen Kurzschluss nach Masse | 1 |
| 0xB7F655 | Außentemperatursensor hat einen Kurzschluss zur Versorgungsspannung | 1 |
| 0xB7F660 | KOMBI: Gesamtwegstrecke des Fahrzeuges kann nicht restauriert werden | 0 |
| 0xB7F661 | KOMBI: Gesamtwegstrecke fehlerhaft | 0 |
| 0xB7F662 | Kombi SG: Redundanz-Gesamtkilometerstand kann nicht restauriert werden | 1 |
| 0xB7F663 | KOMBI: Redundante Daten aus dem Partnersteuergerät übernommen | 1 |
| 0xB7F664 | KOMBI: Abgleich der Fahrgestellnummer fehlerhaft | 1 |
| 0xB7F665 | KOMBI: Redundante Daten im Partnersteuergerät abgelegt | 1 |
| 0xB7F666 | KOMBI: CBS-Daten können nicht restauriert werden | 1 |
| 0xB7F667 | KOMBI: Ablage der Systemzeit fehlerhaft | 0 |
| 0xB7F668 | KOMBI: Systemzeit wurde zurückgesetzt | 1 |
| 0xB7F669 | Hauptleiterplatte Hardware-Reset | 0 |
| 0xB7F66E | Kombi: Infofehler 6 | 0 |
| 0xB7F676 | KOMBI: Überspannung erkannt | 1 |
| 0xB7F678 | Temperaturbedingte Reduzierung der Displayhinterleuchtung | 1 |
| 0xB7F67B | KOMBI: Weckleitungsstatus fehlerhaft (Hardwareleitung) | 1 |
| 0xB7F67D | KOMBI: Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xB7F67E | Kombi SG: Neustart der Systemplatine (watchdog) | 0 |
| 0xB7F685 | KOMBI: Unterspannung erkannt | 1 |
| 0xB7F686 | KOMBI: Displayhinterleuchtung und Grafikplatine abgeschaltet (Aufstartfehler) | 0 |
| 0xB7F688 | KOMBI: Gangpositions-, Schaltpunktanzeige abgeschaltet (Aufstartfehler) | 0 |
| 0xB7F689 | KOMBI: Displayhinterleuchtung und Grafikplatine abgeschaltet (Laufzeitfehler) | 0 |
| 0xB7F68A | KOMBI: Getriebeposition-, Schaltpunktanzeige abgeschaltet, Anzeigefehler | 0 |
| 0xB7F68B | KOMBI: Gangpositions-, Schaltpunktanzeige abgeschaltet (Umsetzungsfehler) | 0 |
| 0xB7F68C | KOMBI: Fehler in Gangpositions-, Schaltpunktanzeige, CAN-Botschaften (Erkennung durch Grafikplatine) | 1 |
| 0xB7F68D | KOMBI:Temperatursensor im Bereich der Drehzahlanzeige, Kurzschluss nach Masse | 0 |
| 0xB7F68E | KOMBI:Temperatursensor im Bereich der Drehzahlanzeige, Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F68F | Kombi: Übertemperatur Spannungsversorgung | 1 |
| 0xB7F690 | KOMBI: Fehlerhafte Prüfsumme in den Redundanzdaten | 1 |
| 0xB7F691 | KOMBI: Temperatursensor in der Spannungsversorgung, Kurzschluss nach Masse | 0 |
| 0xB7F692 | KOMBI: Temperatursensor in der Spannungsversorgung, Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F693 | Übertemperatur Bereich Drehzahlmesser | 1 |
| 0xB7F694 | KOMBI: Displayhinterleuchtung, Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F695 | KOMBI: Displayhinterleuchtung, Kurzschluss nach Masse | 0 |
| 0xB7F6A1 | KOMBI: Standzeitabschaltung erreicht | 1 |
| 0xB7F6A3 | KOMBI: Kombi-Spannungsversorgung Kl. 30 ausgefallen | 1 |
| 0xB7F6A4 | KOMBI: Kombi-Spannungsversorgung Kl. 30B ausgefallen | 1 |
| 0xB7F6A5 | KOMBI: Spannungsüberwachung im Kombi ausgefallen | 0 |
| 0xB7F6A6 | KOMBI: Fehler beim Ausschalten der Spannungsversorgung beim Aufstarttest | 0 |
| 0xB7F6A7 | KOMBI: Fehler beim Einschalten der Spannungsversorgung beim Aufstarttest | 0 |
| 0xB7F6A8 | KOMBI: Speicherfehler beim Aufstarttest | 0 |
| 0xB7F6A9 | KOMBI: Anzeigeabschaltfehler beim Aufstarten | 0 |
| 0xB7F6AA | KOMBI: Displayabschaltfehler beim Aufstarten | 0 |
| 0xB7F6AB | KOMBI: Fehlerhafter Vergleich in der Anzeige beim Aufstarten | 0 |
| 0xB7F6AC | KOMBI: Fehlerhafte Signatur im Aufstarttest | 0 |
| 0xB7F6AD | KOMBI: Fehlerbedingter Reset beim Aufstarttest der Spannungsversorgung | 0 |
| 0xB7F6AE | KOMBI: Fehlerbedingter Reset beim Aufstarttest des Speichers | 0 |
| 0xB7F6AF | KOMBI: Fehlerbedingter Reset beim Aufstarttest des Alivezählers | 0 |
| 0xB7F6B0 | KOMBI: Interner Prozessorfehler (RAM, ROM, ALU) | 0 |
| 0xB7F6B2 | KOMBI: Fehler in der Anzeigeeinheit | 0 |
| 0xB7F6B3 | KOMBI: Inkompatibler Datenlayout in der Anzeigeeinheit | 0 |
| 0xB7F6B4 | KOMBI: Abschaltfehler in der Anzeigeeinheit (NO SIGNAL) | 0 |
| 0xB7F6B5 | KOMBI: Fehler im Alivezähler der Anzeigeeinheit | 0 |
| 0xB7F6B6 | KOMBI: Fehler in der Spannungsversorgung der Elektronikeinheit | 0 |
| 0xB7F6B7 | KOMBI: Fehler in der Spannungsversorgung der Anzeigeeinheit | 0 |
| 0xB7F6B9 | KOMBI: Fehler in der Spannungsversorgung des Head Up Displays | 0 |
| 0xB7F6C1 | KOMBI: Fehler in der Check Control-Verarbeitung | 0 |
| 0xB7F6C2 | KOMBI: Fehler in den Check Control-Daten | 0 |
| 0xB7F6C3 | KOMBI: Fehler in der Check Control-Anzeige | 0 |
| 0xB7F6C4 | KOMBI: Unbekannte EEPROM Version | 0 |
| 0xB7F6C5 | KOMBI: HUD Stromaufnahme zu hoch | 0 |
| 0xB7F6C6 | Kombi: Kilometerbereich beschreibbar | 0 |
| 0xB7F6C8 | KOMBI: Aufstartfehler Grafiksystem, Gang- / Schaltpunktanzeige abgeschaltet | 0 |
| 0xB7F6C9 | KOMBI: Laufzeitfehler Grafiksystem, Gang- / Schaltpunktanzeige abgeschaltet | 0 |
| 0xB7F6CA | KOMBI: Laufzeitfehler Grafiksystem, Reset | 0 |
| 0xB7F6CB | KOMBI: Unterschied der CAN-Auswertung zw. Kombi- und Grafiksystem | 0 |
| 0xB7F6CF | KOMBI: Steuereinheit Hintergrundbeleuchtung ausgefallen | 0 |
| 0xB7F6D0 | KOMBI: Grafikanzeige ausgefallen (Alive HMI) | 0 |
| 0xB7F6E0 | HUD: Temperatursensor im HUD fehlerhaft | 0 |
| 0xB7F6E1 | HUD: Versorgungsspannung unterhalb minimalem Wert | 0 |
| 0xB7F6E3 | HUD: Fehler in der Kommunikation (HUD antwortet nicht) | 0 |
| 0xB7F6E4 | HUD: Fehler in der Displayhinterleuchtung | 0 |
| 0xB7F6E5 | HUD: Checksummenfehler in den Flashdaten | 0 |
| 0xB7F6E6 | HUD: Spiegel-Motor ausgefallen | 0 |
| 0xB7F6E7 | HUD: Fehler in den Warpingdaten | 0 |
| 0xB7F6E9 | HUD: Temperaturbedingte Abschaltung der Hinterleuchtung | 0 |
| 0xB7F6EA | HUD: Unterspannung | 0 |
| 0xB7F6EC | HUD: Fehlerhafte Bilddaten vom Kombi empfangen | 0 |
| 0xB7F6F0 | HUD: Combiner-Scheibe blockiert | 1 |
| 0xB7F6F1 | HUD: Schrittmotor oder Spiegelmechanik defekt | 0 |
| 0xB7F70B | Tankgeber unplausibel | 1 |
| 0xB7F70C | Linker Tankgeber defekt oder mechanisch blockiert | 1 |
| 0xB7F70D | Rechter Tankgeber defekt oder mechanisch blockiert | 1 |
| 0xB7F70E | Kombi: Interner SW-Fehler (CANIF_E_FULL_TX_BUFFER) | 0 |
| 0xB7F72C | Kombi: Temperatursensor an der FOT-Unit, Kurzschluss zu GND | 1 |
| 0xB7F72D | Kombi: Temperatursensor an der FOT-Unit, Kurzschluss zu Ub | 1 |
| 0xB7F7AE | Kombi: Fehler bei CCM Anzeige | 0 |
| 0xB7F7B9 | HUD: falsche HUD-Variante verbaut | 1 |
| 0xE10401 | FA-CAN Physikalischer Busfehler | 0 |
| 0xE10409 | FA-CAN Bus (-) shorted to Bus (+) | 0 |
| 0xE1040A | FA-CAN Control Module Bus OFF | 0 |
| 0xE1043F | MOST: Empfänger hat Nachricht nicht abgenommen | 1 |
| 0xE10440 | Reset | 0 |
| 0xE10441 | MOST: Ringbruch | 1 |
| 0xE10445 | MOST: Reset | 0 |
| 0xE10BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE11401 | Botschaft (Status Objekt Koordination, 0x21F) fehlt, Empfänger KOMBI, Sender NVE/SAS/ICM_QL | 1 |
| 0xE11410 | Zeitbotschaft ZGW ausgefallen  | 1 |
| 0xE11411 | Zeitbotschaft ausgefallen  | 1 |
| 0xE11420 | KOMBI: ServiceCall kann nicht ausgeführt werden | 1 |
| 0xE11421 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer ist ausgefallen | 1 |
| 0xE11422 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer, Signalfehler | 1 |
| 0xE11450 | Botschaft (Klemmen, 0x12F) fehlt, Empfänger KOMBI, Sender CAS/FEM/BDC | 1 |
| 0xE11452 | Botschaft (Klemmen, 0x12F) nicht aktuell, Empfänger KOMBI, Sender CAS/FEM/BDC | 1 |
| 0xE11454 | Botschaft (Rohdaten Tankfüllstand,0x349) fehlt,Empfänger KOMBI, Sender JBE/REM/BDC | 1 |
| 0xE11455 | Botschaft (Zentralverriegelung und Klappenzustand, 0x2FC) fehlt, Empfänger KOMBI, Sender CAS/FEM/BDC | 1 |
| 0xE11456 | Botschaft (Bedienung Lenkstocktaster, 0x1EE) fehlt, Empfänger KOMBI, Sender SZL/FEM/BDC | 1 |
| 0xE11457 | Botschaft (Dimmung, 0x202) fehlt, Empfänger KOMBI, Sender FRM/FEM/BDC | 1 |
| 0xE11458 | Botschaft (Blinken, 0x1F6) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE11459 | Botschaft (Lampenzustand, 0x21A) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE1145A | Botschaft (Kennzahl Umrechnung Geschwindigkeit, 0x3CB) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1145B | Botschaft (Status Gurtschlosskontakt Sitzbelegung,0x297) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE1145C | Botschaft (Anzeige Drehzahl Antriebsstrang, 0x0F3) fehlt, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1145D | Botschaft (Nachlaufzeit Klemme 30 fehlergesteuert, 0x3AC) fehlt, Empfänger KOMBI, Sender JBE/FEM/BDC | 1 |
| 0xE1145E | Botschaft (Daten Antriebsstrang, 0x3F9) fehlt, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1145F | Botschaft (Status Anhänger,0x2E4) fehlt, Empfänger KOMBI, Sender AHM/AAG | 1 |
| 0xE11460 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) fehlt, Empfänger KOMBI, Sender EGS  DKG | 1 |
| 0xE11461 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) Prüfsumme falsch, Empfänger KOMBI, Sender EGS, DKG | 1 |
| 0xE11462 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) nicht aktuell, Empfänger KOMBI, Sender EGS  DKG | 1 |
| 0xE11463 | Botschaft (Konfiguration Schalter Fahrdynamik 2, 0x3E6) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE11464 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger KOMBI, Sender ICM/DSC | 1 |
| 0xE11465 | CAN-Kommunikationsfehler | 1 |
| 0xE11466 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE11467 | Botschaft (Winkel Fahrpedal, 0x0D9) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE11468 | Botschaft (Anzeige Längsdynamikmanagement, 0x289) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC/SAS | 1 |
| 0xE11469 | Botschaft (Anzeige Längsdynamikmanagement, 0x289) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/DSC/SAS | 1 |
| 0xE1146A | Botschaft (Anzeige Längsdynamikmanagement, 0x289) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC/SAS | 1 |
| 0xE1146C | Botschaft (Anzeige Längsdynamikmanagement 2, 0x33B) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC/SAS/KAFAS | 1 |
| 0xE1146D | Botschaft (Anzeige Längsdynamikmanagement 2, 0x33B) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/DSC/SAS/KAFAS | 1 |
| 0xE1146E | Botschaft (Anzeige Längsdynamikmanagement 2, 0x33B) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC/SAS/KAFAS | 1 |
| 0xE1146F | Botschaft (Status Stabilisierung DSC, 0x173) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11470 | Botschaft (Status Spurverlassenswarnsystem, 0x327) fehlt, Empfänger KOMBI, Sender KAFAS/ICM | 1 |
| 0xE11472 | Botschaft (Status Spurverlassenswarnsystem, 0x327) nicht aktuell, Empfänger KOMBI, Sender KAFAS/ICM | 1 |
| 0xE11474 | Botschaft (Anzeige Check-Control Bypass EMF, 0x36F) fehlt, Empfänger KOMBI, Sender EMF | 1 |
| 0xE11475 | Botschaft (Anzeige Check-Control Bypass EMF, 0x36F) Prüfsumme falsch, Empfänger KOMBI, Sender EMF | 1 |
| 0xE11476 | Botschaft (Anzeige Check-Control Bypass EMF, 0x36F) nicht aktuell, Empfänger KOMBI, Sender EMF | 1 |
| 0xE11477 | Botschaft (Anzeige Drehzahl Antriebsstrang, 0x0F3) Prüfsumme falsch,Empfänger KOMBI ,Sender DME DDE | 1 |
| 0xE11478 | Botschaft (Anzeige DrehzahlAntriebsstrang, 0x0F3) nicht aktuell, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1147A | Botschaft (Status Verbrauch Kraftstoff Motor, 0x2C4) fehlt, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1147C | Botschaft (Alive Zähler Telefon, 0x0C1) fehlt, Empfänger KOMBI, Sender TCU  COMBOX | 1 |
| 0xE1147E | Botschaft (Alive Zähler Telefon, 0x0C1) nicht aktuell, Empfänger KOMBI, Sender TCU  COMBOX | 1 |
| 0xE11480 | Botschaft (Alive Zähler Sicherheit, 0x0D7) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11482 | Botschaft (Alive Zähler Sicherheit, 0x0D7) nicht aktuell, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11490 | Botschaft (Anzeige Check-Control Bypass, 0x36E) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11491 | Botschaft (Anzeige Check-Control Bypass, 0x36E) Prüfsumme falsch, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11492 | Botschaft (Anzeige Check-Control Bypass, 0x36E) nicht aktuell, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11494 | Botschaft (Konfiguration SPORT-Taster, 0x3A7) fehlt, Empfänger KOMBI, Sender ICM/DSC | 1 |
| 0xE11496 | Botschaft (Konfiguration SPORT-Taster, 0x3A7) nicht aktuell, Empfänger KOMBI, Sender ICM/DSC | 1 |
| 0xE11498 | Botschaft (Status Motor-Start-Stopp-Automatik, 0x30B) fehlt, Empfänger KOMBI,Sender DME  DDE | 1 |
| 0xE11499 | Botschaft (Status Motor-Start-Stopp-Automatik, 0x30B) Prüfsumme falsch, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1149A | Botschaft (Status Motor-Start-Stopp-Automatik, 0x30B) nicht aktuell, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1149B | Botschaft (Wegstrecke Fahrzeug, 0x2BB) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1149C | Botschaft (Wegstrecke Fahrzeug, 0x2BB) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1149D | Botschaft (Wegstrecke Fahrzeug, 0x2BB) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1149E | Botschaft (Erkennung Verkehrszeichen, 0x287) fehlt, Empfänger KOMBI, Sender KAFAS | 1 |
| 0xE114A0 | Botschaft (Status Reifen RDC, 0x368) fehlt, Empfänger KOMBI, Sender RDC | 1 |
| 0xE114A2 | Botschaft (Status Reifen RDC, 0x368) nicht aktuell, Empfänger KOMBI, Sender RDC | 1 |
| 0xE114A3 | Botschaft (Status Gurtschlosskontakt Sitzbelegung, 0x297) Prüfsumme falsch, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE114A4 | Botschaft (Status Gurtschlosskontakt Sitzbelegung,0x297) nicht aktuell, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE114A5 | Botschaft (Coach-Door Begrenzung Geschwindigkeit, 0x36C) fehlt, Empfänger KOMBI, Sender CDM | 1 |
| 0xE114A6 | Botschaft (Status Helligkeit Umgebung, 0x2A5) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE114A7 | Botschaft (Coach-Door Begrenzung Geschwindigkeit, 0x36C) nicht aktuell, Empfänger KOMBI, Sender CDM | 1 |
| 0xE114A8 | Botschaft (Status Fernlichtassistent, 0x36A) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE114A9 | Botschaft (Status Fahrlicht, 0x314) fehlt, Empfänger KOMBI, Sender JBE/BDC | 1 |
| 0xE114AA | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Empfänger KOMBI, Sender JBE/FEM/BDC | 1 |
| 0xE114AC | Botschaft (Status Sitzlehnenverriegelung Beifahrer, 0x34D) fehlt, Empfänger KOMBI,  Sender SMBF | 1 |
| 0xE114AE | Botschaft (Status Sitzlehnenverriegelung Beifahrer,0x34D) nicht aktuell, Empfänger KOMBI, Sender SMBF | 1 |
| 0xE114B0 | Botschaft (Status Sitzlehnenverriegelung Fahrer, 0x34B) fehlt, Empfänger KOMBI, Sender SMFA | 1 |
| 0xE114B2 | Botschaft (Status Sitzlehnenverriegelung Fahrer, 0x34B) nicht aktuell, Empfänger KOMBI, Sender SMFA | 1 |
| 0xE114B4 | Botschaft (Status Niveauregulierung Fahrzeug, 0x26A) fehlt, Empfänger KOMBI, Sender EHC | 1 |
| 0xE114B5 | Botschaft (Status Niveauregulierung Fahrzeug, 0x26A) nicht aktuell, Empfänger KOMBI, Sender EHC | 1 |
| 0xE114B8 | Botschaft (Anzeige Checkcontrol Fahrdynamik Koordiniert, 0x2A7) fehlt, Empfänger KOMBI, Sender DSC / ICMQL | 1 |
| 0xE114B9 | Botschaft (Anzeige Checkcontrol Fahrdynamik Koordiniert, 0x2A7) Prüfsumme falsch, Empfänger KOMBI, Sender DSC / ICMQL | 1 |
| 0xE114BA | Botschaft (Anzeige Checkcontrol Fahrdynamik Koordiniert, 0x2A7) nicht aktuell, Empfänger KOMBI, Sender DSC / ICMQL | 1 |
| 0xE114BC | Instrumentenkombination erkennt Störung am MOST | 1 |
| 0xE114BD | Botschaft (Daten Antriebsstrang 2, 0x3F9) nicht aktuell, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE114BE | Schnittstelle EGS (Daten Anzeige Getriebestrang, 0x3FD); Signal ungültig | 1 |
| 0xE114C0 | Botschaft (Status Rückwärtsgang, 0x3B0) fehlt, Empfänger KOMBI, Sender FRM/BDC | 1 |
| 0xE114C2 | Signalfehler in der Botschaft Klemmenstatus | 1 |
| 0xE114C4 | Botschaft (Status HUD 2, 0x213) fehlt, Empfänger KOMBI, Sender HUD | 1 |
| 0xE114C6 | Botschaft (Status HUD 2, 0x213) nicht aktuell, Empfänger KOMBI, Sender HUD | 1 |
| 0xE114C8 | Botschaft (Status Notruf, 0x2C3) fehlt, Empfänger KOMBI, Sender COMBOX/TCB/TPL | 1 |
| 0xE114CA | Botschaft (Status Notruf, 0x2C3) nicht aktuell, Empfänger KOMBI, Sender COMBOX/TCB/TPL | 1 |
| 0xE114CB | Botschaft (Alive Zentrales Gateway-Modul, 0x0C0) fehlt, Empfänger KOMBI, Sender ZGM | 1 |
| 0xE114CD | Botschaft (Alive Zentrales Gateway-Modul, 0x0C0) nicht aktuell, Empfänger KOMBI, Sender ZGM | 1 |
| 0xE114CE | Botschaft (Drehmoment Kurbelwelle 1, 0x0A5) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE114D0 | Botschaft (Status M-Drive 2, 0x42E) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE114D2 | Botschaft (Status M-Drive 2, 0x42E) nicht aktuell, Empfänger KOMBI, Sender DME | 1 |
| 0xE114D4 | Botschaft (Status Cabrio Dach, 0x342) fehlt, Empfänger KOMBI, Sender CVM/CTM | 1 |
| 0xE114D6 | Botschaft (Status Cabrio Dach, 0x342) nicht aktuell, Empfänger KOMBI, Sender CVM/CTM | 1 |
| 0xE114D8 | Botschaft (Anzeige Zustand Hybrid, 0x3AD) fehlt, Empfänger KOMBI, Sender EME/AE | 1 |
| 0xE114D9 | Botschaft (Status Kontakt Handbremse, 0x34F) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE114DA | Botschaft (Status Hochvoltspeicher 1, 0x1FA) fehlt, Empfänger KOMBI, Sender SME | 1 |
| 0xE114DB | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (BBV) ist ausgefallen | 1 |
| 0xE114DC | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (BBH) ist ausgefallen | 1 |
| 0xE114DD | Botschaft (Anzeige Verbrauchsvorteil Hybrid, 0x40C) fehlt, Empfänger KOMBI, Sender EME | 1 |
| 0xE114DE | Botschaft (Anzeige Zustand Hybrid, 0x3AD) nicht aktuell, Empfänger KOMBI, Sender EME/AE | 1 |
| 0xE114E0 | Botschaft (Status Reifen, 0x369) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE114E1 | Botschaft (Status Reifen, 0x369) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE114E2 | Botschaft (Status Heckspoiler BN2020, 0x26B) fehlt, Empfänger KOMBI, Sender HKFM_HS | 1 |
| 0xE114E3 | Botschaft (Status Heckspoiler BN2020, 0x26B) nicht aktuell, Empfänger KOMBI, Sender HKFM_HS | 1 |
| 0xE114E4 | Botschaft (Anzeige Fahrerassistenzsystem, 0x31C) fehlt, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114E5 | Botschaft (Anzeige Fahrerassistenzsystem, 0x31C) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114E6 | Botschaft (Anzeige Fahrerassistenzsystem, 0x31C) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114E7 | Botschaft (Zustand Fahrzeug, 0x3C) fehlt, Empfänger KOMBI, Sender ZGW | 1 |
| 0xE114E8 | Botschaft (Anzeige Check-Control Fahrerassistenzsystem, 0x30D) fehlt, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114E9 | Botschaft (Anzeige Check-Control Fahrerassistenzsystem, 0x30D) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114EA | Botschaft (Anzeige Check-Control Fahrerassistenzsystem, 0x30D) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114EB | Botschaft (Anzeige Check-Control Parkassistent, 0x30C) fehlt, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114EC | Botschaft (Anzeige Check-Control Parkassistent, 0x30C) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114ED | Botschaft (Anzeige Check-Control Parkassistent, 0x30C) nicht aktuell, Empfänger KOMBI , Sender ICM_QL/SAS | 1 |
| 0xE114EF | Botschaft (Daten Hochvoltspeicher, 0x431) fehlt, Empfänger KOMBI, Sender SME | 1 |
| 0xE11500 | Botschaft (Konfiguration SOC Hold, 0x350) fehlt, Empfänger KOMBI, Sender eDME | 1 |
| 0xE11501 | Botschaft (Reichweitekarte Information, 0x3C8) fehlt, Empfänger KOMBI, Sender HU | 1 |
| 0xE11502 | Botschaft (Status Parkassistent, 0x378) fehlt, Empfänger KOMBI, Sender PMA | 1 |
| 0xE11503 | Botschaft (Status Parkassistent, 0x378) nicht aktuell, Empfänger KOMBI, Sender PMA | 1 |
| 0xE11504 | Botschaft (Neigung Fahrbahn, 0x163) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11505 | Botschaft (Anzeige Checkcontrol Bypass 02, 0x329) fehlt, Empfänger KOMBI, Sender AAG | 1 |
| 0xE11506 | Botschaft (Anzeige Checkcontrol Bypass 02, 0x329) Prüfsumme falsch, Empfänger KOMBI, Sender AAG | 1 |
| 0xE11507 | Botschaft (Anzeige Checkcontrol Bypass 02, 0x329) nicht aktuell, Empfänger KOMBI, Sender AAG | 1 |
| 0xE11508 | Botschaft (Ladestatus, 0x3E9) fehlt, Empfänger KOMBI, Sender AE/EME | 1 |
| 0xE11509 | Botschaft (Ladestatus 2, 0x2FA) fehlt, Empfänger KOMBI, Sender AE / EME | 1 |
| 0xE1150A | Botschaft (Systemstatus Elektrisches Fahrzeug Antrieb, 0x308) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE1150B | Botschaft (Daten Reichweitenberechnung, 0x32B) fehlt, Empfänger KOMBI, Sender AE / EME | 1 |
| 0xE1150C | Botschaft (Daten Reichweitenberechnung 2, 0x201) fehlt, Empfänger KOMBI, Sender AE / EME | 1 |
| 0xE1150D | Botschaft (Status Ladeschnittstelle, 0x3B4) fehlt, Empfänger KOMBI, Sender LIM | 1 |
| 0xE1150E | Botschaft (Modus Spannungsgesteuert, 0x432) fehlt, Empfänger KOMBI, Sender SME | 1 |
| 0xE1150F | Botschaft (Daten Hochvoltspeicher 2, 0x239) fehlt, Empfänger KOMBI, Sender SME | 1 |
| 0xE11510 | Botschaft (Status Klima Standfunktionen, 0x2F0) fehlt, Empfänger KOMBI, Sender IHKA | 1 |
| 0xE11511 | Botschaft (Steuerung Crash, 0x19B) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11512 | Botschaft (Steuerung Crash, 0x19B) nicht aktuell, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11513 | Botschaft (Fahrerlebnis Modus, 0x3D8) fehlt, Empfänger KOMBI, Sender BDC | 1 |
| 0xE11514 | Botschaft (Längsbeschleunigung Schwerpunkt, 0x199) fehlt, Empfänger KOMBI, Sender DSC / ICM_QL | 1 |
| 0xE11515 | Botschaft (Querbeschleunigung Schwerpunkt, 0x19A) fehlt, Empfänger KOMBI, Sender DSC / ICM_QL | 1 |
| 0xE11516 | Botschaft (Status Fahrzeug Klang , 0x37F) fehlt, Empfänger KOMBI, Sender VSG | 1 |
| 0xE11517 | Botschaft (Status Fahrzeug Klang, 0x37F) nicht aktuell, Empfänger KOMBI, Sender VSG | 1 |
| 0xE11518 | Botschaft (Steuerung Anzeige M-Systeme, 0x0DE) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE11524 | Botschaft (Anzeige Vorausschau, 0x2EC) fehlt, Empfänger KOMBI, Sender DSC, SAS | 1 |
| 0xE11542 | Botschaft (Bedienung Taster HUD, 0x28B) fehlt, Empfänger KOMBI, Sender BDC | 1 |
| 0xE11545 | Botschaft (Anforderung Klimaanlage 1, 0x200) fehlt, Empfänger KOMBI, Sender IHKA | 1 |
| 0xE11546 | Botschaft (Radmoment Antrieb 1, 0x8F) fehlt, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11556 | Botschaft (Ist Drehzahl Rad ungesichert, 0x254) fehlt, Empfänger KOMBI, Sender DSC_Modul | 1 |
| 0xE11558 | Botschaft (Anzeige leistung Antrieb, 0x2AE) fehlt, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11559 | Botschaft (Steuerung Anzeige M-Systeme, 0x0DE) nicht aktuell, Empfänger KOMBI, Sender DME | 1 |
| 0xE11566 | Botschaft (Anzeige Checkcontrol Bypass 03, 0x3A8) fehlt, Empfänger KOMBI, Sender CTM, CVM | 1 |
| 0xE11567 | Botschaft (Anzeige Checkcontrol Bypass 03, 0x3A8) nicht aktuell, Empfänger KOMBI, Sender CTM, CVM | 1 |
| 0xE11568 | Botschaft (Anzeige Checkcontrol Bypass 03, 0x3A8) Prüfsumme falsch, Empfänger KOMBI, Sender CTM, CVM | 1 |
| 0xE11577 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (DPF) ist ausgefallen | 1 |
| 0xE11580 | Botschaft (Status Anzeige Gurtwarnung, 0x3C0) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE12C00 | Tankfüllstandssensor links: Kurzschluss nach Masse | 1 |
| 0xE12C01 | Tankfüllstandssensor links: Kurzschluss zur Versorgungsspannung oder nach Masse | 1 |
| 0xE12C02 | Tankfüllstandssensor rechts: Kurzschluss nach Masse | 1 |
| 0xE12C03 | Tankfüllstandssensor rechts: Kurzschluss zur Versorgungsspannung oder nach Masse | 1 |
| 0xE12C10 | Schnittstelle EGS  DKG (Daten Anzeige Getriebestrang, 0x3FD): Signal ungültig | 1 |
| 0xE12C11 | Schnittstelle ICM/DSC (Geschwindigkeit Fahrzeug, 0x1A1): Signal ungültig | 1 |
| 0xE12C12 | Schnittstelle ICM_QL/DSC/SAS (Anzeige Längsdynamikmanagement 1, 0x289): Signal ungültig | 1 |
| 0xE12C13 | Schnittstelle ICM_QL/SAS (Anzeige Längsdynamikmanagement 2, 0x33B): Signal ungültig | 1 |
| 0xE12C14 | Schnittstelle DME  DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C15 | Schnittstelle FEM/BDC (Blinken, 0x1F6): Signal ungültig | 1 |
| 0xE12C16 | Schnittstelle FRM/BDC (Dimmung, 0x202): Signal ungültig | 1 |
| 0xE12C17 | Schnittstelle ICM_QL/DSC (Kennzahl Umrechnung Geschwindigkeit, 0x3CB): Signal ungültig | 1 |
| 0xE12C18 | Schnittstelle ICM/DSC (Konfiguration SPORT-Taster, 0x3A7): Signal ungültig | 1 |
| 0xE12C19 | Schnittstelle ACSM (Status Gurtschlosskontakt Sitzbelegung, 0x297): Signal ungültig | 1 |
| 0xE12C1A | Schnittstelle CAS/FEM/BDC (Zentralverriegelung und Klappenzustand, 0x2FC): Signal ungültig | 1 |
| 0xE12C1B | Schnittstelle CAS/FEM/BDC (Klemmen, 0x12F): Signal ungültig | 1 |
| 0xE12C1C | Schnittstelle DME  DDE (Daten Antriebsstrang 2, 0x3F9): Signal ungültig | 1 |
| 0xE12C1D | Information: Klemme 30f wurde abgeschaltet (Nachlaufzeit Klemme 30 fehlergesteuert, 0x3AC) | 1 |
| 0xE12C1E | Schnittstelle KAFAS/ICM (Status Spurverlassenswarnung, 0x327): Signal ungültig | 1 |
| 0xE12C1F | Schnittstelle ICM_QL/DSC (Wegstrecke Fahrzeug,0x2BB): Signal ungültig | 1 |
| 0xE12C20 | Schnittstelle KAFAS (Erkennung Verkehrszeichen, 0x287): Signal ungültig | 1 |
| 0xE12C21 | Schnittstelle DME, DDE (Status Verbrauch Kraftstoff Motor, 0x2C4): Signal ungültig | 1 |
| 0xE12C22 | Schnittstelle FEM/BDC (Status Fernlichtassistent, 0x36A): Signal ungültig | 1 |
| 0xE12C23 | Schnittstelle NVE/SAS (Status Objekt Night-Vision, 0x21F): Signal ungültig | 1 |
| 0xE12C24 | Schnittstelle FEM/BDC (Status Fahrlicht, 0x314): Signal ungültig | 1 |
| 0xE12C25 | Schnittstelle SMBF (Status Sitzlehnenverriegelung Beifahrer, 0x34D): Signal ungültig | 1 |
| 0xE12C26 | Schnittstelle SMFA (Status Sitzlehnenverriegelung Fahrer, 0x34B): Signal ungültig | 1 |
| 0xE12C27 | Schnittstelle DME (Drehmoment Kurbelwelle 1, 0x0A5): Signal ungültig | 1 |
| 0xE12C28 | Schnittstelle FRM/BDC (Status Rückwärtsgang, 0x3B0): Signal ungültig | 1 |
| 0xE12C29 | Schnittstelle HUD (Status HUD 2, 0x213): Signal ungültig | 1 |
| 0xE12C2A | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C2B | Schnittstelle DME DDE (Daten Antriebsstrang 2, 0x3F9): Signal ungültig | 1 |
| 0xE12C2C | Schnittstelle EME/AE (Anzeige Zustand Hybrid, 0x3AD): Signal ungültig | 1 |
| 0xE12C32 | Schnittstelle FEM/BDC (Status Helligkeit Umgebung, 0x2A5): Signal ungültig | 1 |
| 0xE12C33 | Schnittstelle FEM/BDC (Status Kontakt Handbremse, 0x34F): Signal ungültig | 1 |
| 0xE12C34 | Schnittstelle SME (Status Hochvoltspeicher 1, 0x1FA): Signal ungültig | 1 |
| 0xE12C35 | Schnittstelle SZL/FEM/BDC (Bedienung Lenkstocktaster, 0x1EE): Signal ungültig | 1 |
| 0xE12C36 | Schnittstelle DME (Status M-Drive 2, 0x42E): Signal ungültig | 1 |
| 0xE12C37 | Schnittstelle ICM_QL/DSC (Konfiguration Schalter Fahrdynamik 2, 0x3E6): Signal ungültig | 1 |
| 0xE12C38 | Schnittstelle DME (Winkel Fahrpedal, 0x0D9): Signal ungültig | 1 |
| 0xE12C39 | Schnittstelle DSC (Status Stabilisierung DSC, 0x173): Signal ungültig | 1 |
| 0xE12C3B | Schnittstelle DME DDE (Status Motor-Start-Stopp-Automatik, 0x30B): Signal ungültig | 1 |
| 0xE12C3D | Schnittstelle DSC (Meldung vom CBS-Teilnehmer BBV): Signal ungültig | 1 |
| 0xE12C3E | Schnittstelle DSC (Meldung vom CBS-Teilnehmer BBH): Signal ungültig | 1 |
| 0xE12C3F | Schnittstelle EME (Anzeige Verbrauchsvorteil Hybrid, 0x40C): Signal ungültig | 1 |
| 0xE12C40 | Keine oder unvollständige Listendarstellung (über MOST) | 1 |
| 0xE12C41 | Listenanzeige nicht beendet | 1 |
| 0xE12C42 | Schnittstelle HU (Anzeige Entertainment Funktion, 0x44C): Signal ungültig | 1 |
| 0xE12C43 | Schnittstelle ICM_QL/SAS (Anzeige Verzögerungsassistent, 0x334): Signal ungültig | 1 |
| 0xE12C44 | Schnittstelle ICM_QL/SAS (Anzeige Fahrerassistenzsystem, 0x31C): Signal ungültig | 1 |
| 0xE12C46 | Schnittstelle SM_FA (Memoryverstellung, 0x20B): Signal ungültig | 1 |
| 0xE12C47 | Schnittstelle ZGW (Zustand Fahrzeug, 0x3C): Signal ungültig | 1 |
| 0xE12C48 | Schnittstelle SME (Daten Hochvoltspeicher, 0x431): Signal ungültig | 1 |
| 0xE12C49 | Schnittstelle eDME (Konfiguration SOC Hold, 0x350): Signal ungültig | 1 |
| 0xE12C4B | Schnittstelle HU (Reichweitekarte Information, 0x3C8): Signal ungültig | 1 |
| 0xE12C4C | Schnittstelle PMA (Status Parkassistent, 0x378): Signal ungültig | 1 |
| 0xE12C4D | Schnittstelle DSC (Neigung Fahrbahn, 0x163): Signal ungültig | 1 |
| 0xE12C4E | Schnittstelle AE / EME (Ladestatus, 0x3E9): Signal ungültig | 1 |
| 0xE12C4F | Schnittstelle AE / EME (Ladestatus 2, 0x2FA): Signal ungültig | 1 |
| 0xE12C50 | Schnittstelle DME (Systemstatus Elektrisches Fahrzeug Antrieb, 0x308): Signal ungültig | 1 |
| 0xE12C51 | Schnittstelle AE / EME (Daten Reichweitenberechnung, 0x32B): Signal ungültig | 1 |
| 0xE12C52 | Schnittstelle AE / EME (Daten Reichweitenberechnung 2, 0x201): Signal ungültig | 1 |
| 0xE12C53 | Schnittstelle LIM (Status Ladeschnittstelle, 0x3B4): Signal ungültig | 1 |
| 0xE12C54 | Schnittstelle SME (Modus Spannungsgesteuert, 0x432): Signal ungültig | 1 |
| 0xE12C55 | Schnittstelle SME (Daten Hochvoltspeicher 2, 0x239): Signal ungültig | 1 |
| 0xE12C56 | Schnittstelle IHKA (Status Klima Standfunktionen, 0x2F0): Signal ungültig | 1 |
| 0xE12C57 | Schnittstelle BDC (Fahrerlebnis Modus, 0x3D8): Signal ungültig | 1 |
| 0xE12C58 | Schnittstelle DSC / ICM_QL (Längsbeschleunigung Schwerpunkt, 0x199): Signal ungültig | 1 |
| 0xE12C59 | Schnittstelle DSC / ICM_QL (Querbeschleunigung Schwerpunkt, 0x19A): Signal ungültig | 1 |
| 0xE12C5A | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C60 | Schnittstelle VSG (Status Fahrzeug Klang, 0x37F): Signal ungültig | 1 |
| 0xE12C61 | Schnittstelle DME (Steuerung Anzeige M-Systeme, 0x0DE): Signal ungültig | 1 |
| 0xE12C62 | Schnittstelle DME (Steuerung Shiftlights, 0x0DF): Signal ungültig | 1 |
| 0xE12C64 | Schnittstelle DSC, SAS (Anzeige Vorausschau, 0x2EC): Signal ungültig | 1 |
| 0xE12C68 | Schnittstelle BDC (Bedienung Taster HUD, 0x28B): Signal ungültig | 1 |
| 0xE12C70 | Schnittstelle IHKA (Anforderung Klimaanlage 1, 0x200): Signal ungültig | 1 |
| 0xE12C71 | Schnittstelle DME1 (Radmoment Antrieb 1, 0x8F): Signal ungültig | 1 |
| 0xE12C75 | Schnittstelle DSC_Modul (Ist Drehzahl Rad ungesichert, 0x254): Signal ungültig | 1 |
| 0xE12C77 | Schnittstelle DME1 (Anzeige Leistung Antrieb, 0x2AE): Signal ungültig | 1 |
| 0xE12C97 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (DPF): Signal ungültig | 1 |
| 0xE12CA0 | Schnittstelle ACSM (Status Anzeige Gurtwarnung, 0x3C0): Signal ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM_Stand | km | - | unsigned int | - | - | - | - |
| 0x1701 | System_Zeit | sec | - | unsigned int | - | - | - | - |
| 0x1708 | Klemmenstatus | hex | - | unsigned char | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170B | NPR | hex | - | unsigned char | - | - | - | - |
| 0x170C | UBATT | mV | - | unsigned int | - | - | - | - |
| 0x1721 | Resetursache | - | - | unsigned int | - | - | - | - |
| 0x1732 | MOSTMesErrorFktID | dezimal | - | unsigned int | - | - | - | - |
| 0x4060 | SW_Komponent_ID | hex | - | unsigned char | - | - | - | - |
| 0x4061 | Systemzustand | hex | - | unsigned char | - | - | - | - |
| 0x4070 | APIX-Fehlerzähler | - | - | unsigned int | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 |
| 0x930002 | Kombi MOST: Most Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 1 |
| 0x930003 | Kombi MOST: Most Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930004 | Diagnosemaster-Client: Datenzwischenablage im Active Response Handler übergelaufen | 1 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (Phase Locked Loop) arbeitet nicht korrekt | 0 |
| 0x930008 | Systemzustand OK nicht fristgerecht erkannt | 0 |
| 0x930009 | FBlock mit Methode SenderHandle: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x93000A | FBlock mit Methode: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x930011 | MOST: Ringbruch | 1 |
| 0x930033 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht | 1 |
| 0x930034 | Empfängerknoten: hat Nachricht nicht abgenommen; fehlerhafte Checksumme am Empfänger erkannt | 1 |
| 0x930035 | Übertragungsfehler im Hardware Abstraction Layer | 0 |
| 0x930036 | Empfängerknoten: Segmentierungsfehler in Nachricht erkannt | 0 |
| 0x930037 | Senderknoten: Segmentierungsfehler in Nachricht erkannt | 0 |
| 0x930038 | Empfängerknoten: Fehler in Nachrichtenwarteschlange erkannt | 0 |
| 0x930039 | Senderknoten: Fehler in Nachrichten warteschlange erkannt | 0 |
| 0x93003A | Empfängerknoten: Kommandointerpreter kennt Nachricht nicht | 0 |
| 0x93003B | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen | 0 |
| 0x93003C | WakeUp MOST: Ring unerlaubt geweckt | 0 |
| 0x93003D | Senderknoten: adressierter Funktionsblock existiert nicht | 0 |
| 0x93003E | Senderknoten: falsche Parameter in Nachricht | 0 |
| 0x93003F | MOST Operation Senderknoten: Fehler in adressierter Funktion | 0 |
| 0x930040 | Senderknoten: Fehler in Segmentierung | 0 |
| 0x930041 | Funktionsblock: sendet keine Werte trotz Notifizierung | 1 |
| 0x930042 | Funktionsblock: Notifizierung abgelehnt; Spalte der Notifizierungstabelle voll | 1 |
| 0x930043 | Funktionsblock: Notifizierung abgelehnt; keine freien Zeilen in Notifizierungstabelle | 1 |
| 0x930044 | Funktionsblock: Notifizierung abgelehnt; gewünschte Funktion existiert nicht | 1 |
| 0x930045 | Funktionsblock: Notifizierung abgelehnt; Grund unbekannt | 1 |
| 0x930046 | Funktionsblock: Notifizierung abgelehnt; Funktionswert momentan nicht vorhanden | 1 |
| 0xB7F600 | Kombi: Fehler beim Schreiben der EEPROM-Daten | 0 |
| 0xB7F601 | Kombi: Fehler beim Lesen der EEPROM-Daten | 0 |
| 0xB7F602 | Kombi: Fehler in der Steuerung der EEPROM-Daten | 0 |
| 0xB7F603 | Kombi: Fehler beim Löschen der EEPROM-Daten | 0 |
| 0xB7F604 | Kombi: Fehler beim Schreiben der gesamten EEPROM-Daten | 0 |
| 0xB7F605 | Kombi: Fehler in der Konfiguration der EEPROM-Daten | 0 |
| 0xB7F606 | Kombi: Fehler beim Lesen der gesamten EEPROM-Daten | 0 |
| 0xB7F60C | Kombi: Personal Profile Konfigurationsfehler | 0 |
| 0xB7F669 | Kombi: Infofehler 1 | 0 |
| 0xB7F66A | Kombi: Infofehler 2 | 0 |
| 0xB7F66B | Kombi: Infofehler 3 | 0 |
| 0xB7F66C | Kombi: Infofehler 4 | 0 |
| 0xB7F66D | Kombi SG: KSS Infofehler 5 | 0 |
| 0xB7F66E | Kombi: Infofehler 6 | 0 |
| 0xB7F66F | Kombi: Infofehler 7 | 0 |
| 0xB7F670 | Kombi: Infofehler 8 | 0 |
| 0xB7F671 | Kombi: Infofehler 9 | 0 |
| 0xB7F672 | Kombi: Infofehler 10 | 0 |
| 0xB7F677 | Kombi: Fehler beim HUD ein- oder ausschalten | 0 |
| 0xB7F678 | Kombi: Temperaturbedingte Reduzierung der Displayhinterleuchtung | 1 |
| 0xB7F67C | Kombi: CAN-Eingangspuffer, Datenverlust | 0 |
| 0xB7F67E | Kombi SG: Neustart der Systemplatine (watchdog) | 0 |
| 0xB7F67F | Kombi: EEPROM Adressfehler | 0 |
| 0xB7F680 | Kombi: EEPROM Bereichsfehler | 0 |
| 0xB7F681 | Kombi: Speicherauslastung, Schwelle 1 erreicht | 0 |
| 0xB7F682 | Kombi: Speicherauslastung, Schwelle 2 erreicht | 0 |
| 0xB7F683 | Kombi SG: Diagnosepuffer voll | 0 |
| 0xB7F684 | Kombi: Diagnosezwischenspeicher gelöscht | 0 |
| 0xB7F687 | Kombi: Neustart der Grafikplatine, Aufstartfehler | 0 |
| 0xB7F68A | KOMBI: Getriebeposition-, Schaltpunktanzeige abgeschaltet, Anzeigefehler | 0 |
| 0xB7F68F | Kombi: Übertemperatur Spannungsversorgung | 1 |
| 0xB7F693 | Kombi: Übertemperatur im Bereich Drehzahlanzeige | 1 |
| 0xB7F696 | Kombi: Displayhinterleuchtung weiß, Strang 1 Kurzschluss zu Ub | 0 |
| 0xB7F697 | Kombi: Displayhinterleichtung weiß, Strang 2 Kurzschluss zu Ub | 0 |
| 0xB7F698 | Kombi: Displayhinterleichtung weiß, Strang 3 Kurzschluss zu Ub | 0 |
| 0xB7F699 | Kombi: Displayhinterleuchtung rot, Kurzschluss zu Ub | 0 |
| 0xB7F69A | Kombi: Tubenbeleuchtung, Kurzschluss zu Ub | 0 |
| 0xB7F69B | Ghrafikplatine IPC Timeout | 0 |
| 0xB7F69C | Kombi: Reset MOST-Knoten im Kombi | 0 |
| 0xB7F69D | Kombi: Kommunikationsverlust zum MOST-Knoten im Kombi | 0 |
| 0xB7F69E | Kombi: Kommunikationsaufbau zum MOST-Knoten im Kombi | 0 |
| 0xB7F69F | Kombi: Reserve 5 | 0 |
| 0xB7F6A0 | Kombi: Kommunikationsaufbau zum MOST-Knoten im Kombi | 0 |
| 0xB7F6A2 | Kombi: Speicherfehler | 0 |
| 0xB7F6B8 | KOMBI: Prüfsummenfehler in der SW der Anzeigeeinheit | 0 |
| 0xB7F6BD | Kombi:  Ausfall der APIX-Schrittmotorkommunikation | 0 |
| 0xB7F6C0 | HUD: Aktivierungszustand unplausibel | 0 |
| 0xB7F6C6 | Kombi: Kilometerbereich beschreibbar | 0 |
| 0xB7F6C7 | Ein undefinierter Wert wurde in der CAF gefunden. | 0 |
| 0xB7F6D1 | APIX-Kommunikationsfehler-Zähler während des Betriebs | 0 |
| 0xB7F6D2 | Ein undefinierter Wert wurde vom CAN-Bus empfangen. | 0 |
| 0xB7F6D3 | Ein undefinierter Wert wurde vom MOST-Bus empfangen. | 0 |
| 0xB7F6DE | APIX-Kommunikationsfehler-Zähler während des Aufstarts | 0 |
| 0xB7F6E2 | HUD: Spannungsbedingte Helligkeitsreduzierung | 1 |
| 0xB7F6E8 | HUD: Temperaturbedingte Helligkeitsreduzierung | 1 |
| 0xB7F6EB | HUD: Variante unbekannt | 0 |
| 0xB7F6ED | HUD: Temperatursensor im HUD-Display fehlerhaft | 0 |
| 0xB7F6EE | HUD: 1.8V Spannungsversorgung fehlerhaft | 0 |
| 0xB7F6EF | HUD: Ueberspannung am HUD | 0 |
| 0xB7F6F0 | HUD: Combiner-Scheibe blockiert | 0 |
| 0xB7F6F8 | HUD: HUD Power- or APIX-Line disrupted | 0 |
| 0xB7F6F9 | HUD: HUD LINK Loss detected | 0 |
| 0xB7F6FA | HUD: HUD or APIX Initialisation failed | 0 |
| 0xB7F6FB | HUD: APIX Transaction Buffer Overload | 0 |
| 0xB7F6FC | HUD: Power Consumption too high | 0 |
| 0xB7F700 | Kombi: Vergleich Tankinhalt - kumulierter Verbrauch | 1 |
| 0xB7F701 | Kombi: Tankgeber links - dynamischer Vergleich links/rechts | 1 |
| 0xB7F702 | Kombi: Tankgeber rechts - dynamischer Vergleich links/rechts | 1 |
| 0xB7F703 | Kombi: Tankgeber links - dynamischer Vergleich FZG | 1 |
| 0xB7F704 | Kombi: Tankgeber rechts - dynamischer Vergleich FZG | 1 |
| 0xB7F705 | Kombi: Tankgeber links - Umpumpen | 1 |
| 0xB7F706 | Kombi: Tankgeber rechts - Umpumpen | 1 |
| 0xB7F707 | Kombi: Tankgeber unplausibel | 1 |
| 0xB7F70A | Kombi: Vergleich Tankentnahme - Einspritzmenge | 1 |
| 0xB7F70E | Kombi: Interner SW-Fehler (CAN_E_TIMEOUT) | 1 |
| 0xB7F70F | Kombi: Interner SW-Fehler (CANIF_E_FULL_TX_BUFFER) | 1 |
| 0xB7F710 | Kombi: Interner SW-Fehler (CANIF_E_STOPPED) | 1 |
| 0xB7F711 | Kombi: Interner SW-Fehler (CANNM_E_CANIF_TRANSMIT_ERROR) | 1 |
| 0xB7F712 | Kombi: Interner SW-Fehler (CANNM_E_INIT_FAILED) | 1 |
| 0xB7F713 | Kombi: Interner SW-Fehler (CANNM_E_NETWORK_TIMEOUT) | 1 |
| 0xB7F714 | Kombi: Interner SW-Fehler (CANNM_E_TX_PATH_FAILED) | 1 |
| 0xB7F715 | Kombi: Interner SW-Fehler (CANTP_E_COM) | 1 |
| 0xB7F716 | Kombi: Interner SW-Fehler (CANTP_E_OPER_NOT_SUPPORTED) | 1 |
| 0xB7F717 | Kombi: Interner SW-Fehler (CANTRCV_TJA1040_E_NO_TRCV_CTRL) | 1 |
| 0xB7F718 | Kombi: Interner SW-Fehler (ECUM_E_ALL_RUN_REQUESTS_KILLED) | 1 |
| 0xB7F719 | Kombi: Interner SW-Fehler (ECUM_E_RAM_CHECKED_FAILED) | 1 |
| 0xB7F71A | Kombi: Interner SW-Fehler (IPDUM_E_TRANSMIT_FAILED) | 1 |
| 0xB7F71B | Kombi: Interner SW-Fehler (MCU_E_CLOCK_FAILURE) | 1 |
| 0xB7F71C | Kombi: Interner SW-Fehler (NVM_E_INTEGRITY_FAILED) | 1 |
| 0xB7F71D | Kombi: Interner SW-Fehler (NVM_E_REQ_FAILED) | 1 |
| 0xB7F71E | Kombi: Interner SW-Fehler (PDUR_E_INIT_FAILED) | 1 |
| 0xB7F71F | Kombi: Interner SW-Fehler (PDUR_E_PDU_INSTANCE_LOST) | 1 |
| 0xB7F720 | Kombi: Interner SW-Fehler (WDG_12_IA_E_DISABLE_REJECTED) | 1 |
| 0xB7F721 | Kombi: Interner SW-Fehler (WDG_12_IA_E_MODE_SWITCH_FAILED) | 1 |
| 0xB7F722 | Kombi: Interner SW-Fehler (WDGM_E_ALIVE_SUPERVISION) | 1 |
| 0xB7F723 | Kombi: Interner SW-Fehler (WDGM_E_SET_MODE) | 1 |
| 0xB7F724 | Kombi: Interner SW-Fehler (EEP_E_COM_FAILURE) | 1 |
| 0xB7F725 | Kombi: Interner SW-Fehler (CANSM_E_MODE_CHANGE_NETWORK_0) | 1 |
| 0xB7F726 | Kombi: Interner SW-Fehler (CANSM_E_BUSOFF_NETWORK_0) | 1 |
| 0xB7F727 | Kombi: Interner SW-Fehler (CANSM_E_SETTRCVMODE_NETWORK_0) | 1 |
| 0xB7F728 | Kombi: Abschaltung der PW-supplys von Display/Backlight | 1 |
| 0xB7F729 | Kombi: Abschaltung der PW-supplys von GaugeBL/TT | 1 |
| 0xB7F72A | Kombi: Abschaltung der PW-supplys von GPU | 1 |
| 0xB7F79A | Kombi: mit dem Ausblenden der elektrischen Reichweite | 0 |
| 0xB7F7A1 | Kombi: Vergleich Tankgeber - Verbrauchssignal | 1 |
| 0xB7F7AD | Kombi: Fehler bei CCM Anzeige | 0 |
| 0xB7F7B9 | HUD: falsche HUD-Variante verbaut | 1 |
| 0xB7F7BA | HUD: Status ARH Link-Mode is not ARHIF_LS_STARTED | 0 |
| 0xB7F7BB | HUD: internal Flash-Watchdog expired | 0 |
| 0xB7F7BC | HUD: internal Callback-Watchdog expired | 0 |
| 0xE114BC | Instrumentenkombination erkennt Störung am MOST | 1 |
| 0xE114C2 | Signalfehler in der MOST-Botschaft Klemmenstatus | 1 |
| 0xE114F0 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0xE114F1 | KOMBI: Software Konfigurationsfehler | 0 |
| 0xE12C2A | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C2B | Schnittstelle DME DDE (Daten Antriebsstrang 2, 0x3F9): Signal ungültig | 1 |
| 0xE12C2F | Schnittstelle HU (Quittierung Anforderung Kombi, 0x172): Signal fehlerhaft | 1 |
| 0xE12C30 | Schnittstelle HU (Status Service Call TeleX, 0x30F): Signal fehlerhaft | 1 |
| 0xE12C3A | Schnittstelle HU (Steuerung Historie Anzeigen Kombi, 0x43A): Signal fehlerhaft | 1 |
| 0xE12C3C | Schnittstelle DME, DDE (Status Verbrauch Kraftstoff Motor, 0x2C4): Signal ungültig | 1 |
| 0xE12C43 | Schnittstelle ICM_QL (Anzeige Verzögerungsassistent, 0x334): Signal ungültig | 1 |
| 0xE12C45 | Schnittstelle EGS  DKG (Daten Anzeige Getriebestrang, 0x3FD): Signal ungültig | 1 |
| 0xE12C4A | Schnittstelle HU (Prognose Routenziel, 0x3C7): Signal ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM_Stand | km | - | unsigned int | - | - | - | - |
| 0x1701 | System_Zeit | sec | - | unsigned int | - | - | - | - |
| 0x1708 | Klemmenstatus | hex | - | unsigned char | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170B | NPR | hex | - | unsigned char | - | - | - | - |
| 0x170C | UBATT | mV | - | unsigned int | - | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x1721 | Resetursache | - | - | unsigned char | - | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x1732 | MOSTMesErrorFktID | dezimal | - | unsigned int | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4060 | SW_Komponent_ID | hex | - | unsigned char | - | - | - | - |
| 0x4061 | Systemzustand | hex | - | unsigned char | - | - | - | - |
| 0x4070 | APIX-Fehlerzähler | - | - | unsigned int | - | - | - | - |
| 0xD112 | ATemp | Grad C | - | unsigned int | - | - | 514 | -40 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR_ANZAHL_ARGUMENTE |
| 0x02 | ERROR_CCM_SYSZEIT_ZU_GROSS |
| 0x03 | ERROR_CCM_GWSZ_ZU_GROSS |
| 0x04 | ERROR_NO_SVK |
| 0x05 | TIMER_OKAY |
| 0x06 | TIMER_NO_OKAY |
| 0x07 | UNGUELTIGE SGBM NUMMER |
| 0x08 | UNGUELTIGE HERSTELLER NUMMER |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TWSZ_WERT | km | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Liefert den angezeigten TWSZ zurück |

### RES_0X4200

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRW_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Potentielle Reichweite (PRW) |
| STAT_CRW_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Comfort- Mode Reichweite (CRW) |
| STAT_BCRW_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | BC- Reichweite in 0,1 km |
| STAT_GRW_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gewonnene Reichweite (GRW) |
| STAT_GK_WERT | µl | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | gewonnener Kraftstoff (GK) |

### RES_0X4201

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKUM_ABS_VERBR_ERH_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | akkumulierte absolute Verbrauchserhöhung |
| STAT_VERBR_ERH_VERZOEGERUNG_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbrauchserhöhung durch Verzögerung |
| STAT_VERBR_ERH_MSA_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbrauchserhöhung durch MSA |
| STAT_V_REF_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | V ref |
| STAT_V_IST_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | V ist |
| STAT_FWP_AKT_WERT | % | high | unsigned int | - | - | 1.0 | 40.0 | 0.0 | FWP akt |
| STAT_BLS_VERZOEGERUNG | Bit | high | BITFIELD | - | BF_BLS_VERZOEGERUNG | - | - | - | Status_BLS / Verzögerung |

### RES_0X4202

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PI_PROZ_VERBR_ERH_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI prozentuale Verbrauchserhöhung |
| STAT_PI_VERBR_ERH_GW_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Gangwahl |
| STAT_PI_VERBR_ERH_GESCHW_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Geschwindigkeit |
| STAT_PI_VERBR_ERH_BESCHL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Beschleunigung |
| STAT_PI_VERBR_ERH_KOMF_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Komfort |

### RES_0X4203

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MV_AKT_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch aktuell |
| STAT_MV_REF_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref (V ist) |
| STAT_MV_REF_30_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 30 |
| STAT_MV_REF_70_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 70 |
| STAT_MV_REF_100_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 100 |
| STAT_MV_REF_MAX_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref Max |
| STAT_MV_REF_GESAMT_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref Gesamt |

### RES_0X4204

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_MODE_AUSTRITT | Bit | high | BITFIELD | - | BF_ECO_MODE_AUSTRITT | - | - | - | ECO- Mode Austritt |
| STAT_ECO_TIPP_ANZ | 0-n | high | unsigned char | - | TAB_ECO_TIPP_ANZ | - | - | - | ECO Tipp Anzeige |

### RES_0X4205

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_X_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_X_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0X4206

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_Y_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_Y_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0X4207

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_Z_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_Z_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0X4208

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_A_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_A_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0X4209

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITT_AKT_BERECH_SEGMENTS_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert des akt. berechneten Segments in 0,1 |
| STAT_DURCHSCHNITT_HYBRID_RUECKGEW_AKT_SEGM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittswert Hybridrückgewinnung des akt. Segments |

### RES_0X4230

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUETZSTELLE1_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 1.Stuetzstelle |
| STAT_STUETZSTELLE2_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 2.Stuetzstelle |
| STAT_STUETZSTELLE3_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 3.Stuetzstelle |
| STAT_STUETZSTELLE4_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 4.Stuetzstelle |
| STAT_STUETZSTELLE5_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 5.Stuetzstelle |
| STAT_STUETZSTELLE6_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 6.Stuetzstelle |
| STAT_STUETZSTELLE7_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 7.Stuetzstelle |
| STAT_STUETZSTELLE8_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 8.Stuetzstelle |
| STAT_STUETZSTELLE9_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 9.Stuetzstelle |
| STAT_STUETZSTELLE10_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 10.Stuetzstelle |
| STAT_STUETZSTELLE11_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 11.Stuetzstelle |

### RES_0X4231

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUETZSTELLE1_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 1.Stuetzstelle |
| STAT_STUETZSTELLE2_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 2.Stuetzstelle |
| STAT_STUETZSTELLE3_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 3.Stuetzstelle |
| STAT_STUETZSTELLE4_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 4.Stuetzstelle |
| STAT_STUETZSTELLE5_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 5.Stuetzstelle |
| STAT_STUETZSTELLE6_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 6.Stuetzstelle |
| STAT_STUETZSTELLE7_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 7.Stuetzstelle |
| STAT_STUETZSTELLE8_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 8.Stuetzstelle |
| STAT_STUETZSTELLE9_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 9.Stuetzstelle |
| STAT_STUETZSTELLE10_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 10.Stuetzstelle |
| STAT_STUETZSTELLE11_WERT | l/km | high | unsigned int | - | - | - | 100 | - | 11.Stuetzstelle |

### RES_0X4232

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNFAKTOR1_ECO_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor1 ECO |
| STAT_LERNFAKTOR2_ECO_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor2 ECO |
| STAT_LERNFAKTOR3_ECO_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor3 ECO |
| STAT_LERNFAKTOR4_ECO_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor4 ECO |
| STAT_LERNFAKTOR1_NORMAL_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor1 Normal |
| STAT_LERNFAKTOR2_NORMAL_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor2 Normal |
| STAT_LERNFAKTOR3_NORMAL_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor3 Normal |
| STAT_LERNFAKTOR4_NORMAL_WERT | L/100km | - | int | - | - | - | 100 | - | Lernfaktor4 Normal |

### RES_0X4233

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DELTA_RATIO_ECO_WERT | L/100km | - | int | - | - | - | 100 | - | Delta_ratio_ECO |
| STAT_VB_INTERPOLIERT_ECO_WERT | L/100km | - | int | - | - | - | 100 | - | Verbr_interpoliert_ECO |
| STAT_DELTA_RATIO_NORMAL_WERT | L/100km | - | int | - | - | - | 100 | - | Delta_ratio_NORMAL |
| STAT_VB_INTERPOLIERT_NORMAL_WERT | L/100km | - | int | - | - | - | 100 | - | Verbr_interpoliert_NORMAL |

### RES_0X4400_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTINDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bei größeren Änderungen soll der HI geändert werden |
| STAT_UNTERINDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bei kleineren Änderungen soll der Unterindex geändert werden |

### RES_0X4800

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_OPERATION_HOURS_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_OPERATION_MINUTES_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_LED_OPERATION_HOURS_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_LED_OPERATION_MINUTES_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_LED_REPEAT_TIME_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_TEMP_THRESHOLD_01_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_TEMP_THRESHOLD_02_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_TEMP_THRESHOLD_03_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_TEMP_THRESHOLD_04_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_TEMP1_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_TEMP2_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_TEMP3_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_TEMP4_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_TEMP5_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_LOGTIME_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_DIM_THRESHOLD_01_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_DIM_THRESHOLD_02_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_DIM_THRESHOLD_03_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_DIM_THRESHOLD_04_WERT | - | - | unsigned char | - | - | - | - | - | - |
| STAT_HUD_ZONE_1_DIM1_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_1_DIM2_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_1_DIM3_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_1_DIM4_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_1_DIM5_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_2_DIM1_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_2_DIM2_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_2_DIM3_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_2_DIM4_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_2_DIM5_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_3_DIM1_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_3_DIM2_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_3_DIM3_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_3_DIM4_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_3_DIM5_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_4_DIM1_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_4_DIM2_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_4_DIM3_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_4_DIM4_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ZONE_4_DIM5_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_HEIGHT_ADJUSTMENT_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ROTATION_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ACTIVATION_WERT | - | - | unsigned int | - | - | - | - | - | - |
| STAT_HUD_ENVIRONMENTAL_COND_WERT | - | - | unsigned char | - | - | - | - | - | - |

### RES_0X4801

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_USER0_BRIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER0_HEIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER0_ROTATION_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER0_FUNKTION_WERT | - | high | int | - | - | - | - | - | - |
| STAT_HUD_USER1_BRIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER1_HEIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER1_ROTATION_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER1_FUNKTION_WERT | - | high | int | - | - | - | - | - | - |
| STAT_HUD_USER2_BRIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER2_HEIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER2_ROTATION_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_USER2_FUNKTION_WERT | - | high | int | - | - | - | - | - | - |
| STAT_HUD_GUEST_BRIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_GUEST_HEIGHT_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_GUEST_ROTATION_WERT | - | high | unsigned char | - | - | - | - | - | - |
| STAT_HUD_GUEST_FUNKTION_WERT | - | high | int | - | - | - | - | - | - |

### RES_0X4807

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGISTER_WERT | - | high | unsigned long | - | - | - | - | - | ausgelesener Wert des Registers |

### RES_0X4808

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_WERT | - | high | unsigned int | - | - | - | - | - | Bildposition in Mikroschritten |

### RES_0XA103

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSTELLGRENZE_EIN | + | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0x00 = Verstellgrenze nicht erreicht 0x01 = Verstellgrenze erreicht |

### RES_0XA106

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARPING_NR | + | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0x00:Liste erfolgreich ausgewaehlt 0xFE:Listenwahl nicht moeglich |

### RES_0XD08D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEY | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Arguments KEY |
| STAT_POSITION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Arguments Position |

### RES_0XD08E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEY | 0/1 | high | unsigned char | - | - | - | - | - | Rückgabe des Arguments KEY |
| STAT_POSITION_WERT | - | - | char | - | - | - | - | - | Rückgabe des Arguments Position |

### RES_0XD10A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_LEISTUNG_WERT | km | - | unsigned char | - | - | - | - | - | Angenommene, durchschnittliche Jahreskilometerleistung für die CBS-Berechnungen (in 1000 km pro Jahr). |

### RES_0XD10D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSOLUT_GWSZ_RAM_WERT | km | - | long | - | - | - | - | - | Liefert den absoluten Gesamtwegstreckenzähler aus dem RAM. |
| STAT_ABSOLUT_GWSZ_EEP_WERT | km | - | long | - | - | - | - | - | Liefert den absoluten Gesamtwegstreckenzähler aus dem EEPROM. |

### RES_0XD111_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELECTRIC_RANGE_CURRENT_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_ELECTRIC_RANGE_CURRENT [0,1 km] |
| STAT_ELECTRIC_RANGE_MAXIMUM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_ELECTRIC_RANGE_MAXIMUM (actual  maximum, depends on battery deterioration  etc.)  [0,1 km] |
| STAT_FUEL_RANGE_CURRENT_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_FUEL_RANGE_CURRENT [0,1 km]  (0xFFFF if no REX is available) |
| STAT_FUEL_RANGE_MAXIMUM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_FUEL_RANGE_MAXIMUM (actual  maximum, depends on average consumption etc.)  [0,1 km] (0xFFFF if no REX is available) |
| STAT_RANGE_CONSUMPTION_ELECTRIC_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_RANGE_CONSUMPTION_ELECTRIC [kWh/100km], (only for vehicles without STARTWETESPEICHER, 0xFFFF if not used) |
| STAT_NEBENVERBRAUCHERLEISTUNG_WERT | kW | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | STAT_NEBENVERBRAUCHERLEISTUNG_WERT  [0,01 kW], (only for vehicles without STARTWERTESPEICHER, 0xFFFF if not used) |

### RES_0XD112

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_A_TEMP_ANZEIGE_WERT | °C | - | unsigned char | - | - | - | 2 | -40 | Anzeigewert Außentemperatur |
| STAT_A_TEMP_ROHWERT_WERT | °C | - | unsigned char | - | - | - | 2 | -40 | Rohwert Außentemperatur |

### RES_0XD113

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMBI_STUNDE_WERT | - | - | char | - | - | - | - | - | Rückgabe der aktuellen Stunde. |
| STAT_KOMBI_MINUTE_WERT | - | - | char | - | - | - | - | - | Rückgabe der aktuellen Minute. |
| STAT_KOMBI_SEKUNDE_WERT | - | - | char | - | - | - | - | - | Rückgabe der aktuellen Sekunde. |
| STAT_KOMBI_TAG_WERT | - | - | char | - | - | - | - | - | Rückgabe des aktuellen Tag. |
| STAT_KOMBI_MONAT_WERT | - | - | char | - | - | - | - | - | Rückgabe des aktuellen Monat. |
| STAT_KOMBI_JAHR_WERT | - | - | int | - | - | - | - | - | Rückgabe des aktuellen Jahr. |
| STAT_KOMBI_ZEIT_FORMAT | 0-n | - | char | - | TAB_KOMBI_FORMAT_UHRZEIT | - | - | - | Rückgabe des aktuellen Anzeigeformat. |

### RES_0XD115

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_ACC_WERT | km/h | - | int | - | - | - | 10 | - | gesetzte Geschwindigkeit fuer ACC-Zeiger in km/h |

### RES_0XD116_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEBENVERBRAUCHERLEISTUNG_WERT | kW | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Nebenverbraucherleistung in [0.01 kW] |
| STAT_MO_FR_CONSUMPTION_1_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_1_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_MO_FR_CONSUMPTION_2_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_2_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_MO_FR_CONSUMPTION_3_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_3_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_MO_FR_CONSUMPTION_4_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_4_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_MO_FR_CONSUMPTION_5_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_5_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_MO_FR_CONSUMPTION_6_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_6_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_MO_FR_CONSUMPTION_7_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Consumption  [ 1.0Wh/100km] |
| STAT_MO_FR_COUNTER_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mo-Fr Counter  [1s] |
| STAT_MO_FR_SPEED_7_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Mo-Fr Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_1_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_1_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_2_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_2_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_3_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_3_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_4_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_4_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_5_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_5_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_6_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_6_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SA_CONSUMPTION_7_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Consumption  [ 1.0Wh/100km] |
| STAT_SA_COUNTER_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sa Counter  [1s] |
| STAT_SA_SPEED_7_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Sa Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_1_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_1_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_2_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_2_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_2_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_3_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_3_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_3_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_4_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_4_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_4_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_5_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_5_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_5_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_6_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_6_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_6_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |
| STAT_SO_CONSUMPTION_7_WERT | Wh/100km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Consumption  [ 1.0Wh/100km] |
| STAT_SO_COUNTER_7_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | So Counter  [1s] |
| STAT_SO_SPEED_7_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | So Speed  [ 0.1 km/h] |

### RES_0XD117

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREZAHL_WERT | 1/min | - | int | - | - | - | - | - | vorgegebene Drehzahlmesserstellung in 1/min |

### RES_0XD118

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_KODIERTE_STARTZEITEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl kodierter Startzeiten |
| STAT_STARTZEIT_ANFANG_1_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ANFANG_2_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ANFANG_3_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ANFANG_4_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ANFANG_5_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ANFANG_6_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ANFANG_7_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Anfang [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_1_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_2_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_3_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_4_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_5_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_6_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |
| STAT_STARTZEIT_ENDE_7_WERT | - | high | unsigned char | - | - | 15.0 | 1.0 | 0.0 | Startzeit Ende [Anzeige in Stunden und Minuten, Auflösung 15 Minuten, 05hex = 01:15Uhr] |

### RES_0XD11A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | - | int | - | - | - | 10 | - | gesetzte Geschwindigkeit in km/h |

### RES_0XD11C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBRAUCH_WERT | - | - | int | - | - | - | - | - | gesetzter Momentanverbrauch in L/100km oder Öltemperatur in Grad Celsius |

### RES_0XD11D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POWER_RESERVE_WERT | % | - | int | - | - | - | 10.0 | - | gesetzter Power Reserve Wert in % |

### RES_0XD11E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKINHALT_WERT | % | - | int | - | - | - | - | - | vorgegebener Tankinhalt in % |

### RES_0XD11F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKKAMMER_RECHTS_WERT | Liter | - | unsigned int | - | - | - | 128 | - | Inhalt rechte Tankkammer in Liter |
| STAT_TANKKAMMER_LINKS_WERT | Liter | - | unsigned int | - | - | - | 128 | - | Inhalt linke Tankkammer in Liter |
| STAT_SUMMENWERT_WERT | Liter | - | unsigned int | - | - | - | 128 | - | Ungedämpfte Summe der Literwerte der Tank-Hebelgeber rechts und links in Liter |
| STAT_GEDAEMPFT_ANZ_WERT | Liter | - | unsigned int | - | - | - | 128 | - | Zahlenwert gedämpfter Summenwert aus Hebelgeber links und rechts in Liter |
| STAT_TANKPHASE | 0-n | - | char | - | TAB_KOMBI_TANKPHASE | - | - | - | Tankphase:  1= i.O;  2= mind. 1 Hebelgeber n.i.O.; 3= wie 2 und zusaetzlich kein Verbrauchssignal |

### RES_0XD121

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T1_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T1_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T1_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T1_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T1_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T1_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T2_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T2_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T2_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T2_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T2_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T2_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T3_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T3_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T3_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T3_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T3_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T3_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T4_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T4_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T4_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T4_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T4_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T4_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T5_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T5_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T5_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T5_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T5_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T5_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T6_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T6_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T6_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T6_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T6_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T6_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T7_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T7_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T7_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T7_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T7_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T7_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |

### RES_0XD125

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWIGER_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ewiger Durchschnittsverbrauch in 0,01 [L/100km] |
| STAT_10000KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 10.000 km Durchschnittsverbrauch in 0,01 [L/100km] |
| STAT_33KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 33 km Durchschnittsverbrauch in 0,01 [L/100km] |

### RES_0XD126

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BC_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Durchschnittsverbrauch in 0,01 [l/100km] |
| STAT_BC_DSG_L_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_BC_MVERB_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Momentanverbrauch in 0,01 [l/100km] |
| STAT_BC_RW_L_KM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Reichweite in 0,1 [km] |

### RES_0XD127

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RBC_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Reisebordcomputer Durchschnittsverbrauch in 0,01 [l/100km] |
| STAT_RBC_DSG_L_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Reisebordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_RBC_ABFAHRT_L_KM_WERT | - | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Abfahrtszeit in [hh,mm] |
| STAT_RBC_DAUER_L_KM_WERT | - | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Dauer in [hh,mm] |
| STAT_RBC_STRECKE_L_KM_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Strecke in 1 [km] |

### RES_0XD128

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWIGER_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Ewiger Durchschnittsverbrauch in 0,1 [kWh/100km] |
| STAT_10000KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10.000 km Durchschnittsverbrauch in 0,1 [kWh/100km] |
| STAT_33KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 33 km Durchschnittsverbrauch in 0,1 [kWh/100km] |

### RES_0XD129

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BC_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Durchschnittsverbrauch in 0,1 [KWh/100km] |
| STAT_BC_DSG_KWH_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_BC_MVERB_KWH_KM_WERT | kW | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Momentanverbrauch in 0,1 [KWh/h]=[KW] |
| STAT_BC_RW_KWH_KM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Reichweite in 0,1 [km] |

### RES_0XD12A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RBC_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Reisebordcomputer Durchschnittsverbrauch in 0,1 [KWh/100km] |
| STAT_RBC_DSG_KWH_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Reisebordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_RBC_ABFAHRT_KWH_KM_WERT | - | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Abfahrtszeit in [hh,mm] |
| STAT_RBC_DAUER_KWH_KM_WERT | - | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Dauer in [hh,mm] |
| STAT_RBC_STRECKE_KWH_KM_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Strecke in 1 [km] |

### RES_0XD12B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_1_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit |
| STAT_ENERGIE_1_WERT | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durch den REX erzeugte Energie |
| STAT_GESCHWINDIGKEIT_2_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit |
| STAT_ENERGIE_2_WERT | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durch den REX erzeugte Energie |
| STAT_GESCHWINDIGKEIT_3_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit |
| STAT_ENERGIE_3_WERT | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durch den REX erzeugte Energie |
| STAT_GESCHWINDIGKEIT_4_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit |
| STAT_ENERGIE_4_WERT | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durch den REX erzeugte Energie |
| STAT_GESCHWINDIGKEIT_5_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit |
| STAT_ENERGIE_5_WERT | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durch den REX erzeugte Energie |
| STAT_GESCHWINDIGKEIT_6_WERT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Geschwindigkeit |
| STAT_ENERGIE_6_WERT | Wh/l | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durch den REX erzeugte Energie |

### RES_0XD12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDENZAEHLER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler [1 Sekunde] |
| STAT_GWSZ_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | GWSZ [1 km] |
| STAT_TAG_WERT | d | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Datum (Tag) zum Zeitpunkt der CC-Abfrage |
| STAT_MONAT_WERT | mth | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Datum (Monat) zum Zeitpunkt der CC-Abfrage |
| STAT_JAHR_WERT | y | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Datum (Jahr) zum Zeitpunkt der CC-Abfrage, wobei hier das Offset auf das Jahr 2000 ausgegeben wird |

### RES_0XD12F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_01_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_01_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_01_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_01_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_01_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_01_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_01_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_01_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_01_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_01_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_01_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_01_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_01_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_01_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_01_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_01_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_02_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_02_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_02_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_02_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_02_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_02_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_02_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_02_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_02_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_02_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_02_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_02_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_02_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_02_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_02_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_02_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_03_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_03_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_03_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_03_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_03_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_03_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_03_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_03_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_03_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_03_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_03_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_03_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_03_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_03_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_03_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_03_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_04_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_04_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_04_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_04_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_04_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_04_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_04_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_04_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_04_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_04_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_04_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_04_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_04_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_04_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_04_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_04_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_05_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_05_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_05_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_05_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_05_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_05_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_05_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_05_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_05_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_05_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_05_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_05_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_05_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_05_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_05_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_05_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_06_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_06_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_06_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_06_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_06_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_06_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_06_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_06_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_06_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_06_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_06_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_06_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_06_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_06_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_06_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_06_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_07_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_07_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_07_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_07_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_07_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_07_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_07_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_07_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_07_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_07_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_07_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_07_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_07_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_07_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_07_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_07_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_08_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_08_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_08_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_08_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_08_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_08_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_08_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_08_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_08_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_08_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_08_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_08_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_08_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_08_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_08_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_08_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_09_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_09_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_09_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_09_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_09_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_09_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_09_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_09_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_09_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_09_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_09_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_09_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_09_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_09_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_09_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_09_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_10_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_10_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_10_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_10_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_10_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_10_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_10_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_10_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_10_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_10_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_10_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_10_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolute und komfort |
| STAT_BLOCK_10_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_10_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_10_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_10_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |

### RES_0XD1D0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRW_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Potentielle Reichweite (PRW) |
| STAT_CRW_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Comfort- Mode Reichweite (CRW) |
| STAT_BCRW_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | BC- Reichweite in 0,1 km |
| STAT_GRW_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gewonnene Reichweite (GRW) |
| STAT_GK_WERT | µl | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | gewonnener Kraftstoff (GK) |

### RES_0XD1D1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKUM_ABS_VERBR_ERH_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | akkumulierte absolute Verbrauchserhöhung |
| STAT_VERBR_ERH_VERZOEGERUNG_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbrauchserhöhung durch Verzögerung |
| STAT_VERBR_ERH_MSA_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbrauchserhöhung durch MSA |
| STAT_V_REF_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | V ref |
| STAT_V_IST_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | V ist |
| STAT_FWP_AKT_WERT | % | high | unsigned int | - | - | 1.0 | 40.0 | 0.0 | FWP akt |
| STAT_BLS_VERZOEGERUNG | Bit | high | BITFIELD | - | BF_BLS_VERZOEGERUNG | - | - | - | Status_BLS / Verzögerung |

### RES_0XD1D2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PI_PROZ_VERBR_ERH_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI prozentuale Verbrauchserhöhung |
| STAT_PI_VERBR_ERH_GW_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Gangwahl |
| STAT_PI_VERBR_ERH_GESCHW_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Geschwindigkeit |
| STAT_PI_VERBR_ERH_BESCHL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Beschleunigung |
| STAT_PI_VERBR_ERH_KOMF_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Komfort |

### RES_0XD1D3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MV_AKT_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch aktuell |
| STAT_MV_REF_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref (V ist) |
| STAT_MV_REF_30_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 30 |
| STAT_MV_REF_70_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 70 |
| STAT_MV_REF_100_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 100 |
| STAT_MV_REF_MAX_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref Max |
| STAT_MV_REF_GESAMT_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref Gesamt |

### RES_0XD1D4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECO_MODE_AUSTRITT | Bit | high | BITFIELD | - | BF_ECO_MODE_AUSTRITT | - | - | - | ECO- Mode Austritt |
| STAT_ECO_TIPP_ANZ | 0-n | high | unsigned char | - | TAB_ECO_TIPP_ANZ | - | - | - | ECO Tipp Anzeige |

### RES_0XD1D5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_X_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_X_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_X_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_X_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_X_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0XD1D6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_Y_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_Y_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_Y_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_Y_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_Y_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0XD1D7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_Z_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_Z_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_Z_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_Z_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_Z_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_Z_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0XD1D8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITTSWERT_8_SKAL_A_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_8 |
| STAT_DURCHSCHNITTSWERT_16_SKAL_A_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert_16 |
| STAT_VERBRAUCH_SEG1_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG1_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG1_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG1_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG2_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG2_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG2_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG2_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG3_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG3_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG3_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG3_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG4_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG4_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG4_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG4_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG5_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG5_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG5_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG5_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG6_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG6_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG6_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG6_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG7_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG7_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG7_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG7_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG8_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG8_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG8_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG8_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG9_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG9_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG9_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG9_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG10_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG10_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG10_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG10_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG11_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG11_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG11_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG11_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG12_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG12_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG12_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG12_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG13_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG13_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG13_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG13_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG14_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG14_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG14_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG14_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG15_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG15_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG15_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG15_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |
| STAT_VERBRAUCH_SEG16_SKAL_A_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbrauch |
| STAT_VERBRAUCHVORTEIL_SEG16_SKAL_A_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verbrauchsvorteil |
| STAT_ZAEHLER_SEG16_SKAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler |
| STAT_FDS_FU_SEG16_SKAL_A_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 00010000 = FU 00001111 = FDS  FDS Attribut: 0  Initialisierung 1  Modus Traction gesetzt 2  Modus Komfort gesetzt 3  Modus Basis gesetzt 4  Modus Sport gesetzt 5  Modus Sport+ gesetzt 6  Modus Race gesetzt 7  Modus ECO gesetzt 8  Modus ECO+ gesetzt 9 - E  Reserve F  Signal ungültig  FU Attribut: 0  Fahrt ohne Fahrtunterbrechung (FU) 1  Fahrt mit Fahrtunterbrechung (FU) |

### RES_0XD1D9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DURCHSCHNITT_AKT_BERECH_SEGMENTS_WERT | l/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Durchschnittswert des akt. berechneten Segments in 0,1 |
| STAT_DURCHSCHNITT_HYBRID_RUECKGEW_AKT_SEGM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Durchschnittswert Hybridrückgewinnung des akt. Segments |

### RES_0XDA0C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_WERT | - | - | char | - | - | 1.0 | 1.0 | 0.0 | Angabe des ausgewählten Port. |

### RES_0XDA0E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_LED_BETRIEBSSTUNDENZAEHLER_STUNDEN_WERT | Std. | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden der LED-Arrays |
| STAT_HUD_LED_BETRIEBSSTUNDENZAEHLER_MINUTEN_WERT | min | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Betriebsminuten der LED-Arrays |
| STAT_HUD_LOGTIME_WERT | min | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Logbuch Zeitintervall |
| STAT_HUD_TEMP1_BRIGHT1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 1, Helligkeitsbereich 1 |
| STAT_HUD_TEMP1_BRIGHT2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 1, Helligkeitsbereich 2 |
| STAT_HUD_TEMP1_BRIGHT3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 1, Helligkeitsbereich 3 |
| STAT_HUD_TEMP1_BRIGHT4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 1, Helligkeitsbereich 4 |
| STAT_HUD_TEMP1_BRIGHT5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 1, Helligkeitsbereich 5 |
| STAT_HUD_TEMP2_BRIGHT1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 2, Helligkeitsbereich 1 |
| STAT_HUD_TEMP2_BRIGHT2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 2, Helligkeitsbereich 2 |
| STAT_HUD_TEMP2_BRIGHT3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 2, Helligkeitsbereich 3 |
| STAT_HUD_TEMP2_BRIGHT4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 2, Helligkeitsbereich 4 |
| STAT_HUD_TEMP2_BRIGHT5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 2, Helligkeitsbereich 5 |
| STAT_HUD_TEMP3_BRIGHT1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 3, Helligkeitsbereich 1 |
| STAT_HUD_TEMP3_BRIGHT2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 3, Helligkeitsbereich 2 |
| STAT_HUD_TEMP3_BRIGHT3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 3, Helligkeitsbereich 3 |
| STAT_HUD_TEMP3_BRIGHT4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 3, Helligkeitsbereich 4 |
| STAT_HUD_TEMP3_BRIGHT5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 3, Helligkeitsbereich 5 |
| STAT_HUD_TEMP4_BRIGHT1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 4, Helligkeitsbereich 1 |
| STAT_HUD_TEMP4_BRIGHT2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 4, Helligkeitsbereich 2 |
| STAT_HUD_TEMP4_BRIGHT3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 4, Helligkeitsbereich 3 |
| STAT_HUD_TEMP4_BRIGHT4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 4, Helligkeitsbereich 4 |
| STAT_HUD_TEMP4_BRIGHT5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 4, Helligkeitsbereich 5 |
| STAT_HUD_TEMP5_BRIGHT1_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 5, Helligkeitsbereich 1 |
| STAT_HUD_TEMP5_BRIGHT2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 5, Helligkeitsbereich 2 |
| STAT_HUD_TEMP5_BRIGHT3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 5, Helligkeitsbereich 3 |
| STAT_HUD_TEMP5_BRIGHT4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 5, Helligkeitsbereich 4 |
| STAT_HUD_TEMP5_BRIGHT5_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Logbucheinträge im Temperaturbereich 5, Helligkeitsbereich 5 |
| STAT_HUD_SCHWELLWERT_TEMP1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Temperaturbereich 1 |
| STAT_HUD_SCHWELLWERT_TEMP2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Temperaturbereich 2 |
| STAT_HUD_SCHWELLWERT_TEMP3_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Temperaturbereich 3 |
| STAT_HUD_SCHWELLWERT_TEMP4_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Temperaturbereich 4 |
| STAT_HUD_SCHWELLWERT_HELLIGKEIT1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Helligkeit 1 |
| STAT_HUD_SCHWELLWERT_HELLIGKEIT2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Helligkeit 2 |
| STAT_HUD_SCHWELLWERT_HELLIGKEIT3_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Helligkeit 3 |
| STAT_HUD_SCHWELLWERT_HELLIGKEIT4_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schwellwert Helligkeit 4 |
| STAT_RESERVED_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert |

### RES_0XDA43

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_AD_TEMP_BL_WERT | °C | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur LED |
| STAT_HUD_AD_KL30_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung Klemme 30 |
| STAT_HUD_LED_DRV_CUR_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED Strom |
| STAT_HUD_LED_DRV_SPG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED Spannung |
| STAT_HUD_LED_DRV_FET1_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FET Spannung Kette 1 |
| STAT_HUD_LED_DRV_FET2_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FET Spannung Kette 2 |
| STAT_HUD_LED_DRV_OV_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Überspannung |
| STAT_HUD_LED_DRV_FAULT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehler LED Treiber |
| STAT_HUD_LED_PWM_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM |
| STAT_HUD_LED_PWM_INV_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM invertiert |
| STAT_HUD_SMC_FLAGS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SMC Status Flags |
| STAT_RESERVE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_RESERVE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |
| STAT_RESERVE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_RESERVE4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |

### RES_0XDA44

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_VERSION_MAIN_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HUD SW im Kombi (Main) |
| STAT_SW_VERSION_MINOR_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HUD SW im Kombi (Minor) |
| STAT_SW_VERSION_PATCH_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HUD SW im Kombi (Patch) |

### RES_0XDA46

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_VERBAUORT_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbauort |
| STAT_SENSOR_BMW_TEILE_NR_WERT | HEX | high | unsigned long | - | - | - | - | - | BMW Sachnummer |
| STAT_SENSOR_HERSTELLER_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Herstellernummer |
| STAT_SENSOR_SERIEN_NR_WERT | HEX | high | unsigned long | - | - | - | - | - | Seriennummer |
| STAT_SENSOR_PROD_DATUM_YEAR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum Jahr |
| STAT_SENSOR_PROD_DATUM_MONTH_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum Monat |
| STAT_SENSOR_PROD_DATUM_DAY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum Tag |
| STAT_SENSOR_HW_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | HW Versionsnummer |
| STAT_SENSOR_OPTIK_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Optikversionsnummer |
| STAT_SENSOR_MECHANIK_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanikversionsnummer |
| STAT_SENSOR_FLASH_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flashversionsnummer |

### RES_0XF120

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERFACE | + | - | - | 0-n | high | unsigned char | - | TAB_INTERFACE | 1.0 | 1.0 | 0.0 | APIX Interface |

### RES_KLEMMEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL_R | 0/1 | - | unsigned char | 0x01 | - | - | - | - | KLEMME_R: 1=EIN; 0=AUS |
| STAT_KL_15 | 0/1 | - | unsigned char | 0x02 | - | - | - | - | KLEMME_15: 1=EIN; 0=AUS |
| STAT_KL_50 | 0/1 | - | unsigned char | 0x04 | - | - | - | - | KLEMME_50: 1=EIN; 0=AUS |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SELBSTTEST | 0x0F04 | - | Ein-/ausschalten des Selbttest. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| START_SYSTIME | 0x1005 | - | Start des Systemzeitzählers. (Für Diagnosemaster) | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STATUS_SYSTIME | 0x1725 | STAT_SEKUNDEN_SEIT_INIT_WERT | Lesen des Systemzeitzählers. (Für Diagnosemaster) | s | - | - | unsigned long | - | - | - | - | - | 22 | - | - |
| STEUERN_TESTBITMAP_KOMBI_HUD | 0xA102 | - | Testbitmap im Kombi oder Headup-Display darstellen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA102 | - |
| STEUERN_WARPING | 0xA103 | - | Einstellung der Bildverzerrung am HUD. Referenzpunkt der Veränderung ist immer die linke obere Ecke. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA103 | RES_0xA103 |
| SELBSTTEST_HUD | 0xA104 | - | Starten und stoppen des Funktionstests des HUD. Funktionen Höhenverstellung, Bildrotation und Hinterleuchtung mit stufenweisem Absenken werden angesteuert. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_BLINKER | 0xA105 | - | Blinker ansteuern, für Service-und Testzwecke. Es müssen immer beide Argumente übergeben werden. Nach Aufruf dieses Jobs kann der Vorgabemodus durch 0x00 beendet werden. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA105 | - |
| STEUERN_WARPLISTE | 0xA106 | - | Der Job wählt eine der 3 Warpingkennlinien für HUD aus. Über den Parameter wird die Kennlinie ausgewählt. Es sind drei Kennlinien möglich: 1. CAF - Codierdaten 2. Werksmesstechnik - Mit einer Kamera vermessene Kennlinie 3. Service - im Service nachjustierte Kennlinie  Diese Kennlinien werden benötigt, um die Scheibenkrümmung im HUD auszugleichen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA106 | RES_0xA106 |
| STEUERN_HUD_BILDPOSITION_RELATIV | 0xA107 | - | Routine zum Steuern der Bildposition (Höhe) relativ zur aktuellen Position. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA107 | - |
| HUD_SHOWMODE | 0xAA00 | - | startet HUD Anzeigesequenz | - | - | - | - | - | - | - | - | - | 31 | - | - |
| HUD_LOGBUCH_RESET | 0xAA01 | - | Logbuchdaten auf 0 zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| HUD_BILDHOEHE | 0xD08D | - | Steuerung Bildhöhe | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD08D_D | RES_0xD08D_D |
| HUD_BILDROTATION | 0xD08E | - | Steuerung Bildrotation | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD08E | RES_0xD08E |
| HUD_AKTIVIERUNG | 0xD090 | - | HUD ein oder ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD090 | - |
| DREHZAHL_WERT | 0xD106 | STAT_DREHZAHL_WERT | Ausgabe der Motordrehzahl. | 1/min | - | - | int | - | - | - | - | - | 22 | - | - |
| TACHO_WERT | 0xD107 | STAT_GESCHWINDIGKEIT_WERT | Rückgabe der Anzeigegeschwindigkeit. | km/h | GESCHWINDIGKEIT | - | int | - | - | 10 | - | - | 22 | - | - |
| CBS_KM_PRO_JAHR | 0xD10A | - | Angenommene, durchschnittliche Jahreskilometerleistung für die CBS-Berechnungen (in 1000 km pro Jahr). | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD10A | RES_0xD10A |
| GWSZ_ABSOLUT_WERT | 0xD10D | - | Aufruf liefert den angezeigeten Gesamtwegstreckenzähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD10D |
| LSS_TASTE | 0xD10E | STAT_KOMBI_LSS_TASTE_GEDRUECKT | Rückgabe des Status der Lenkstockschaltertaste. | 0-n | - | - | char | TAB_KOMBI_LSS | - | - | - | - | 22 | - | - |
| KOMBI_REICHWEITE_BEV_PHEV | 0xD111 | - | Reichweitenanzeige aus Kombiinstrument | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD111_D |
| A_TEMP_WERT | 0xD112 | - | Liefert die Außentemperatur in Grad Celsius. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD112 |
| KOMBI_UHRZEIT_DATUM | 0xD113 | - | Aufruf liefert die Uhrzeit und das Datum zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD113 |
| GWSZ_RESET | 0xD114 | STAT_GWSZ_OFFSET_WERT | Aufruf setzt den Gesamtwegstreckenzähler zurück. | km | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STEUERN_ACC_ZEIGER | 0xD115 | - | Vorgabe der Geschwindigkeit für ACC-Zeiger in km/h. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD115 | RES_0xD115 |
| STARTWERTESPEICHER | 0xD116 | - | Startwerte(Verbrauch, Reichweite) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD116_D | RES_0xD116_D |
| STEUERN_DREHZAHL | 0xD117 | - | Vorgabe der Drehzahl für Drehzahlmesser-Zeiger in U/min, oder Ausschalten des Vorgabemodus. Der Service ist nur erlaubt in Extended (Diagnose) Session. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD117 | RES_0xD117 |
| STARTWERT_ZEITEN | 0xD118 | - | Job liest die kodierten Startwertzeiten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD118 |
| STEUERN_TACHO | 0xD11A | - | Die Funktion setzt den Tacho auf eine beliebige Geschwindigkeit. Eingabe in km/h. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD11A | RES_0xD11A |
| STEUERN_KVA_OELTEMPERATUR | 0xD11C | - | Vorgabe von Momentanverbrauch in L/100km oder Öltemperatur in Grad Celsius. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD11C | RES_0xD11C |
| KOMBI_POWER_RESERVE | 0xD11D | - | Status/Steuern des Power-Reserve Zeigers. Eingabe in % | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xD11D | RES_0xD11D |
| STEUERN_TANKANZEIGE | 0xD11E | - | Vorgabe des Tankinhalt. Eingabe in %. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD11E | RES_0xD11E |
| TANKINHALT | 0xD11F | - | Rückgabe der Literwerte der Tank-Hebelgeber 1 und 2, Summenwert ungedämpft und gedämpft sowie Tankphase. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD11F |
| TIMER_KLIMATISIERUNG | 0xD121 | - | Eingestellter Timer für Klimatisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD121 |
| KOMBI_BC_DSV_L_KM | 0xD125 | - | Durchschnittsverbräuche | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD125 | RES_0xD125 |
| KOMBI_BC_BCW_L_KM | 0xD126 | - | Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD126 |
| KOMBI_BC_RBC_L_KM | 0xD127 | - | Reise-Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD127 |
| KOMBI_BC_DSV_KWH_KM | 0xD128 | - | Durchschnittsverbräuche | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD128 | RES_0xD128 |
| KOMBI_BC_BCW_KWH_KM | 0xD129 | - | Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD129 |
| KOMBI_BC_RBC_KWH_KM | 0xD12A | - | Reise-Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12A |
| UMSATZRATEN_SPEICHER | 0xD12B | - | Umsatzraten, die Energie die durch den REX in den jeweiligen Geschwindigkeitsklassen umgesetzt/erzeugt worden ist. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD12B | RES_0xD12B |
| ZEITSTEMPEL_HU_ABFRAGEN | 0xD12C | - | Zeitstempel Abfrage HU-relevanter Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12C_D |
| KLIMA_TIMER_SCHREIBEN | 0xD12E | - | Schreibt neue Werte in den Timer für Klima | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD12E | - |
| SEGMENTDATEN_SPEICHER | 0xD12F | - | Segmentdatenspeicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12F_D |
| REICHWEITE_GEWONNENER_KRAFTSTOFF | 0xD1D0 | - | Reichweite und gewonnener Kraftstoff | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D0 |
| VERBRAUCHSERHOEHUNG_ALPHA | 0xD1D1 | - | Verbrauchserhöhung alpha | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D1 |
| VERBRAUCHSERHOEHUNG_PI | 0xD1D2 | - | Verbrauchserhöhung PI | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D2 |
| MEHRVERBRAUCH_MV_REF | 0xD1D3 | - | Mehrverbrauch MVref | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D3 |
| ECO_MODE_AUSTRITT | 0xD1D4 | - | ECO- Mode Austritt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D4 |
| VERBRAEUCHE_SKALIERUNG_X | 0xD1D5 | - | Verbräuche Skalierung x | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D5 |
| VERBRAEUCHE_SKALIERUNG_Y | 0xD1D6 | - | Verbräuche Skalierung y | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D6 |
| VERBRAEUCHE_SKALIERUNG_Z | 0xD1D7 | - | Verbräuche Skalierung z | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D7 |
| VERBRAEUCHE_SKALIERUNG_A | 0xD1D8 | - | Verbräuche Skalierung a | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D8 |
| VERBRAUCHSVORTEIL_HYBRID_AKT_SEGMENT | 0xD1D9 | - | Verbrauch / Verbrauchsvorteil Hybrid aktuelles Segment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D9 |
| AKTIVE_WARPLISTE | 0xDA00 | STAT_WARPLISTE_AKTIV | Abfrage, welche WARPLISTE momentan aktiv ist. Status siehe Tabelle:  TAB_WARPLISTE | 0-n | - | - | char | TAB_WARPLISTE | - | - | - | - | 22 | - | - |
| STATUS_HUD_BILDPOSITION_SCHRITTE | 0xDA0A | STAT_HUD_BILDPOSITION_SCHRITTE_WERT | Position des Motors für die Bildpostition in Schritten | Schritte | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_HUD_HELLIGKEIT | 0xDA0C | - | Steuern der Helligkeit vom Head-Up-Display. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDA0C | RES_0xDA0C |
| STATUS_HUD_LOGBUCH | 0xDA0E | - | Job liest das Logbuch des HUD aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA0E |
| STATUS_HUD_BILDROTATION_SCHRITTE | 0xDA0F | STAT_HUD_BILDROTATION_SCHRITTE_WERT | Position des Motors für die Bildrotation in Schritten im HUD | Schritte | - | - | int | - | - | - | - | - | 22 | - | - |
| HUD_PORTS_LESEN | 0xDA43 | - | interne Messwerte lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA43 |
| HUD_SW_VERSION_LESEN | 0xDA44 | - | HUD SW Version lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA44 |
| HUD_SENSOREN_IDENT_LESEN_ERWEITERT | 0xDA46 | - | Identifikation Daten lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA46 |
| HUD_M_SHOWMODE | 0xF018 | - | startet HUD Anzeigesequenz in M-Fahrzeugen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _TWSZ | 0x4010 | - | Tageswegstreckenzähler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4010_D | RES_0x4010_D |
| REICHWEITE_GEWONNENER_KRAFTSTOFF | 0x4200 | - | Reichweite und gewonnener Kraftstoff | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4200 |
| VERBRAUCHSERHOEHUNG_ALPHA | 0x4201 | - | Verbrauchserhöhung alpha | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4201 |
| VERBRAUCHSERHOEHUNG_PI | 0x4202 | - | Verbrauchserhöhung PI | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4202 |
| MEHRVERBRAUCH_MV_REF | 0x4203 | - | Mehrverbrauch Mvref | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4203 |
| ECO_MODE_AUSTRITT | 0x4204 | - | ECO- Mode Austritt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4204 |
| VERBRAEUCHE_SKALIERUNG_X | 0x4205 | - | Verbräuche Skalierung x | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4205 |
| VERBRAEUCHE_SKALIERUNG_Y | 0x4206 | - | Verbräuche Skalierung y | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4206 |
| VERBRAEUCHE_SKALIERUNG_Z | 0x4207 | - | Verbräuche Skalierung z | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4207 |
| VERBRAEUCHE_SKALIERUNG_A | 0x4208 | - | Verbräuche Skalierung a | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4208 |
| VERBRAUCHSVORTEIL_HYBRID_AKT_SEGMENT | 0x4209 | - | Verbrauch / Verbrauchsvorteil Hybrid aktuelles Segment | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4209 |
| VERBRAUCH_CHARAKTERISTIK_ECO | 0x4230 | - | Verbrauchscharakteristik ECO | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4230 |
| VERBRAUCH_CHARAKTERISTIK_NORMAL | 0x4231 | - | Verbrauchscharakteristik Normal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4231 |
| VERBRAUCH_CHARAKTERISTIK_LERNFAKTOR | 0x4232 | - | Verbrauchscharakteristik Lernfaktor Eco/Normal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4232 |
| VERBRAUCH_CHARAKTERISTIK_FAKTOR | 0x4233 | - | Verbrauchscharakteristik Faktor ECO/Normal lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4233 |
| _HW_AENDERUNGSINDEX | 0x4400 | - | Damit soll der Index gelesen/geschrieben werden, der kleine Änderungen an der Kombi-HW dokumentiert, die keinen Einfluss auf die BMW- Freigabeprozesse haben. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4400_D | RES_0x4400_D |
| HUD_LOGBUCH | 0x4800 | - | Dieser Job liefert die Logbuch-Daten des HUD | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4800 |
| HUD_PIA | 0x4801 | - | Job liefert die PIA-Daten des HUD. Zurückgegeben werden die MMI Einstellungen für Bildhöhe, Bildrotation, Helligkeitsoffset und Funktionsauswahl. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4801 |
| HUD_SYSTEMDATENEINBLENDUNG | 0x4802 | - | Job aktiviert die Anzeige der Systemdaten im HUD | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4802 | - |
| HUD_NO_SIGNAL_SCREEN | 0x4803 | - | Job triggert die Anzeige des No-Signal Bildes im HUD | - | - | - | - | - | - | - | - | - | 2F | - | - |
| HUD_START_UP_SCREEN | 0x4804 | - | Job führt zur Anzeige des Start-Up Bildes im HUD. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| HUD_PROCESS_VERSION_READ | 0x4805 | STAT_AL_NUMMER_WERT | - | - | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| HUD_REGISTER_SCHREIBEN | 0x4806 | - | Beschreiben der Indigo Register | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4806 | - |
| HUD_REGISTER_LESEN | 0x4807 | - | Lesen der Indigo Register | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4807 | RES_0x4807 |
| HUD_BILDPOSITION_MIKROSCHRITTE | 0x4808 | - | Ansteuerung der Bildposition in Mikroschritten | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4808 | RES_0x4808 |
| CC_MELDUNGSSPEICHER_LOESCHEN | 0xF010 | - | CC-Meldungsspeicher (Historyspeicher) löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FLASHDATEN_APIX_DOWNLOAD | 0xF120 | - | Laden der Flashdaten aus dem Indigo | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF120 | RES_0xF120 |

### TAB_BLS_VERZOEGERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bremsung |
| 0x01 | Bremskreis 1 aktiv |
| 0x02 | Bremskreis 2 aktiv |
| 0x03 | Nicht definiert |

### TAB_ECO_TIPP_ANZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Tipp |
| 0x01 | Langsamer beschleunigen |
| 0x02 | Geschwindigkeit reduzieren |
| 0x03 | Vorrausschauender Bremsen |
| 0x04 | Empfohlenen Gang wählen |
| 0x05 | Gangwahlschalter in D-Mode bewegen |
| 0x06 | Im Stand Leerlauf einlegen Kupplung schließen |
| 0x07 | Im Stand Bremse betätigen |
| 0x08 | Vom Gas gehen wegen Geschwindigkeitsbegrenzung |
| 0x09 | Vom Gas gehen wegen Geschwindigkeitsbegrenzung, Einheit km/h |
| 0x0A | Vom Gas gehen wegen Geschwindigkeitsbegrenzung, Einheit mph |
| 0x0B | Vom Gas gehen wegen Straßenverlauf |
| 0x0C | Vom Gas gehen wegen Kreisverkehr |
| 0x0D | Vom Gas gehen wegen Kreisverkehr, Linksverkehr |
| 0x0E | Vom Gas gehen wegen Kreisverkehr, Rechtsverkehr |
| 0x0F | Vom Gas gehen wegen Abbiegemöglichkeit |
| 0x10 | Infotafel bei Aktivierung ECO-Tipps in MMI |
| 0x11 | Fenster schließen wegen hohe Geschwindigkeit |
| 0x12 | Fenster schließen wegen Klimaanlage an |
| 0x3F | Signal ungültig |

### TAB_HUD_BILDPOSITION

| WERT | TEXT |
| --- | --- |
| 0x01 | ShortPeriod |
| 0x02 | Continuation |
| 0x03 | Bildrotation |

### TAB_HUD_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | hoch bzw. rechtsdrehend |
| 0x02 | runter bzw. linksdrehend |

### TAB_INTERFACE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kombi Frontend |
| 0x01 | Head-Op Display |

### TAB_KOMBI_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorgabe beenden (AUS) |
| 0x11 | Nomalblinken links |
| 0x12 | Nomalblinken rechts |
| 0x13 | Nomalblinken links und rechts |
| 0x21 | Defektblinken links |
| 0x22 | Defektblinken rechts |
| 0x23 | Defektblinken rechts und links |
| 0x31 | Doppelblinken links |
| 0x32 | Doppelblinken rechts |
| 0x33 | Doppelblinken rechts und links |
| 0x41 | Blinker statisch links EIN |
| 0x42 | Blinker statisch rechts EIN |
| 0x43 | Blinker statisch links und rechts EIN |

### TAB_KOMBI_FORMAT_UHRZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | 24h, dd.mm.yyyy |
| 0x01 | 12h, dd.mm.yyyy |
| 0x08 | keine Vorgabe Uhrzeitformat (beibehlten), dd.mm.yyyy |
| 0x10 | 24h, mm/dd/yyyy |
| 0x11 | 12h, mm/dd/yyyy |
| 0x18 | keine Vorgabe Uhrzeitformat (beibehlten),  mm/dd/yyyy |
| 0x80 | Datumsformat beibehalten, 24h |
| 0x81 | Datumsformat beibehalten, 12h |
| 0x88 | keine Vorgabe Uhrzeitformat (beibehlten), allgemein |

### TAB_KOMBI_LSS

| WERT | TEXT |
| --- | --- |
| 0x80 | Lenkstock-Taste (LSS) |
| 0x40 | Kombitaste |
| 0xC0 | Lenkstock- und Kombitaste gedrückt |
| 0x00 | nicht gedrückt |

### TAB_KOMBI_TANKPHASE

| WERT | TEXT |
| --- | --- |
| 0x01 | i.O |
| 0x02 | mind. 1 Hebelgeber n.i.O |
| 0x03 | mind. 1 Hebelgeber n.i.O und zusätzlich kein Verbrauchssignal |

### TAB_STERNE_BESCHLEUNIGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 Sterne |
| 0x01 | 1 Stern |
| 0x02 | 2 Sterne |
| 0x03 | 3 Sterne |
| 0x04 | 4 Sterne |
| 0x05 | 5 Sterne |

### TAB_STERNE_BREMSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 Sterne |
| 0x08 | 1 Stern |
| 0x10 | 2 Sterne |
| 0x18 | 3 Sterne |
| 0x20 | 4 Sterne |
| 0x28 | 5 Sterne |

### TAB_TANKPHASE

| WERT | INFO |
| --- | --- |
| 0x01 | okey |
| 0x02 | Tankphase2 |
| 0x03 | Tankphase3 |
| 0x00 | ungueltig |

### TAB_WARPING

| WERT | TEXT |
| --- | --- |
| 0x00 | KEINE_AENDERUNG |
| 0x01 | TRAPEZ |
| 0x02 | RHOMBUS |
| 0x03 | KISSEN |
| 0x04 | SMILE |
| 0x05 | HOEHE |
| 0x06 | BREITE |
| 0x08 | H_SHIFT |

### TAB_WARPING_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | ABBRECHEN |
| 0x01 | ANZEIGEN |
| 0x02 | VERAENDERN |
| 0x03 | SPEICHERN |

### TAB_WARPING_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | KEINE_AENDERUNG |
| 0x01 | HOCH |
| 0x02 | RUNTER |
| 0x03 | LINKS |
| 0x04 | RECHTS |

### TAB_WARPLISTE

| WERT | TEXT |
| --- | --- |
| 1 | CAF |
| 2 | Messtechnik |
| 3 | Service |

### TFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x02 | NetworkMaster=0x02 |
| 0x03 | ConnectionMaster=0x03 |
| 0x04 | PowerMaster=0x04 |
| 0x05 | Vehicle=0x05 |
| 0x06 | Diagnose=0x06 |
| 0x07 | VideoSwitch=0x07 |
| 0x10 | ManMachineInterface=0x10 |
| 0x11 | Sprachverarbeitungssystem=0x11 |
| 0x15 | ControlElements=0x15 |
| 0x16 | Security=0x16 |
| 0x20 | AudioMaster=0x20 |
| 0x22 | AudioAmplifier=0x22 |
| 0x23 | HeadPhoneAmplifier=0x23 |
| 0x24 | AuxilliaryInput=0x24 |
| 0x31 | AudioDiscPlayer=0x31 |
| 0x32 | MultiMediaChanger=0x32 |
| 0x40 | AM/FM Tuner=0x40 |
| 0x41 | TMC Tuner=0x41 |
| 0x42 | TVTuner=0x42 |
| 0x43 | ExternSource=0x43 |
| 0x44 | SDARS=0x44 |
| 0x50 | TelefonFix=0x50 |
| 0x51 | PhoneBook=0x51 |
| 0x52 | Navigationssystem=0x52 |
| 0x6F | Monitor=0x6F |
| 0x71 | Climate=0x71 |
| 0x80 | MMI_Terminal=0x80 |
| 0x81 | KOMBI_Terminal=0x81 |
| 0x90 | Telematik=0x90 |
| 0xAB | EDIABAS4MOST=0xAB |
| 0xC9 | Service=0xC9 |
| 0xCA | KombiMiscFkts=0xCA |
| 0xCB | Bordcomputer=0xCB |
| 0xCC | ADASInterface=0xCC |
| 0xE0 | KombiInterface=0xE0 |
| 0xE1 | HUDInterface=0xE1 |
| 0xFD | Sahara=0xFD |

### TMOSTLIGHT

| WERT | TEXT |
| --- | --- |
| 0 | Lichtleistung abgesenkt |
| 1 | Volle Lichtleistung |

### TWAKEUPSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | nicht initialisiert |
| 1 | SG hat geweckt |
| 2 | SG wurde geweckt |

### TABILITYWAKE

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |
| 2 | critical |
