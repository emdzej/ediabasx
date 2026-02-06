# MSD85L6_EA.prg

## General

|  |  |
| --- | --- |
| File | MSD85L6_EA.prg |
| Type | PRG |
| Jobs | 147 |
| Tables | 85 |
| Origin | BMW EA-413 Kallich |
| Revision | 1.000 |
| Author | P&Z EA-413 Berger |
| ECU Comment | SGBD für MSD85 C-Muster mit SW 791I600S |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSD85 fuer N63 mit EWS4 oder CAS in Fahrzeugen der Baureihe L6 |  |  |
| ORIGIN | string | BMW EA-413 Kallich |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | P&Z EA-413 Berger |  |  |
| COMMENT | string | SGBD für MSD85 C-Muster mit SW 791I600S |  |  |
| PACKAGE | string | 0.27 |  |  |
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
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) |

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
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG, ZKrz_a, DAD Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 255 Defaultwert: 100 |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 8000h Defaultwert: 8000h |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0hex -> % 1hex -> km*10 Fhex -> d.c. Defaultwert: Fh |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0h Schalter, keine Aenderung: FFh Defaultwert: FFh |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 0-254 Monate Schalter, keine Aenderung: FFh Defaultwert: FFh |
| Res_Byte | int | Reserve Byte (noch unbenutzt) Defaultwert: 00h |

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

### ECU_CONFIG

0x225FF2 ECU_CONFIG Variante auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_DMTL

0x3101F0DA START_SYSTEMCHECK_DMTL Ansteuern Diagnosefunktion DMTL Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

0x3101F025 START_SYSTEMCHECK_EVAUSBL Ansteuern Diagnosefunktion Einspritzventilausblendung Aktivierung: Klemme 15 = EIN UND Motorstatus = (Leerlauf ODER Teillast) UND Drehzahl < 3000 1/min Activation: LV_IGK = 1 UND STATE_ENG = (IS ODER PL) UND N < C_N_MAX_KWP

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR_WERT | unsigned long | Shut off pattern for static cylinder shut off (fixed cylinder allocation) (A2L-Name: inh_iv) INH_IV_KWP   Min: 0 Max: 255 |

### START_SYSTEMCHECK_GEN

0x3101F02A START_SYSTEMCHECK_GEN Diagnosefunktion Generatortest 

_No arguments._

### START_SYSTEMCHECK_GLF

0x3101F0D5 START_SYSTEMCHECK_GLF Ansteuern Gesteuerte Luftfuehrung Systemcheck Aktivierung: Testeransteuerung obere Luftklappe = AUS UND Testeransteuerung untere Luftklappe = AUS UND Batteriezustand in Ordnung = JA UND Startverriegelung des Klappentests = AUS Activation: LV_ECRAS_UP_EXT_ADJ = 0 UND LV_ECRAS_DOWN_EXT_ADJ = 0 UND LV_CDN_VB_MIN_DIAG = 1 UND LV_ECRAS_EOL_INH = 0

_No arguments._

### START_SYSTEMCHECK_IGR_AUS

0x3101F0F7 START_SYSTEMCHECK_IGR_AUS Ansteuerung Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_LLERH

0x3101F026 START_SYSTEMCHECK_LLERH Ansteuern Diagnosefunktion Leerlauf-Erhoehung 

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | unsigned long | LL-Sollwert 0 bis 2000 1/min N_SP_IS_EXT_ADJ   Einheit: rpm   Min: 0 Max: 10000 |

### START_SYSTEMCHECK_PM_MESSEMODE

0x3101F0F6 START_SYSTEMCHECK_PM_MESSEMODE Ansteuern Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_IMAALLE

0x225F90 STATUS_IMAALLE Abgleichwerte Injektoren auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LL_ABGLEICH

0x225FF0 STATUS_LL_ABGLEICH Abgleichwert LL (Leerlauf) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

0x3103F0D5 STATUS_SYSTEMCHECK_GLF Auslesen Gesteuerte Luftfuehrung Systemcheck Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

0x3103F0F7 STATUS_SYSTEMCHECK_IGR_AUS Auslesen Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_LLERH

0x3103F026 STATUS_SYSTEMCHECK_LLERH Auslesen Diagnosefunktion Leerlauf-Erhoehung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

0x3103F0F6 STATUS_SYSTEMCHECK_PM_MESSEMODE Auslesen Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_TEV

0x3103F022 STATUS_SYSTEMCHECK_TEV Auslesen Diagnosefunktion Tankentlueftungsventil Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_AGK

0x2F60C103 STEUERN_AGK Abgasklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK_WERT | unsigned long | Tastverhaeltniss 0 bis 100 Prozent LV_ACT_EF_EXT_ADJ[1] (t.b.d.)   Min: 0 Max: 1 |
| SW_TO_AGK_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_AGK2

0x2F608703 STEUERN_AGK2 Abgasklappe 2 ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK2_WERT | unsigned long | Tastverhaeltniss 0 bis 100 Prozent LV_ACT_EF_EXT_ADJ[2] (t.b.d.)   Min: 0 Max: 1 |
| SW_TO_AGK2_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ANWS

0x2F60EE03 STEUERN_ANWS Vanos Auslass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Tastverhaeltniss Ventil Auslassnockenwellensteller Bank 1 CAM_SP_EX_EXT_ADJ[1] (t.b.d.)   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ANWS_WERT | unsigned long | Timeout Ventil Auslassnockenwellensteller Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ANWS2

0x2F608903 STEUERN_ANWS2 Vanos Auslass Ventil 2 ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS2_WERT | real | Tastverhaeltniss Ventil Auslassnockenwellensteller Bank 2 CAM_SP_EX_EXT_ADJ[2] (t.b.d.)   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ANWS2_WERT | unsigned long | Timeout Ventil Auslassnockenwellensteller Bank 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DK

0x2F602A03 STEUERN_DK Drosselklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Tastverhaeltniss Drosselklappe TPS_SP_EXT_ADJ[1]   Einheit: TPS   Min: 0 Max: 119.5 |
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

### STEUERN_EKP

0x2F60D803 STEUERN_EKP Elektrische Kraftstoffpumpe 1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1_WERT | real | Tastverhaeltniss Elektrische Kraftstoffpumpe 1 EFPPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EKP1_WERT | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EML

0x2F60D603 STEUERN_EML EML (Engine Malfunction Lamp) ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML_WERT | unsigned long | Sollwert EML (Engine Malfunction Lamp) LV_ACT_WAL_1_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_EML_WERT | unsigned long | Timeout EML (Engine Malfunction Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ENDE_AGK

0x2F60C100 STEUERN_ENDE_AGK Abgasklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_AGK2

0x2F608700 STEUERN_ENDE_AGK2 Abgasklappe 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ANWS

0x2F60EE00 STEUERN_ENDE_ANWS Vanos Auslass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ANWS2

0x2F608900 STEUERN_ENDE_ANWS2 Vanos Auslass Ventil 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STEUERN_ENDE_EML

0x2F60D600 STEUERN_ENDE_EML EML (Engine Malfunction Lamp) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ENWS

0x2F60ED00 STEUERN_ENDE_ENWS Vanos Einlass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ENWS2

0x2F608800 STEUERN_ENDE_ENWS2 Vanos Einlass Ventil 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EWAP

0x2F60BF00 STEUERN_ENDE_EWAP elektr. Wasserpumpe ueber LIN Ansteuerung beenden NO_CON

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

### STEUERN_ENDE_LDS1

0x2F60B600 STEUERN_ENDE_LDS1 Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LDS2

0x2F60B700 STEUERN_ENDE_LDS2 Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH1

0x2F60D000 STEUERN_ENDE_LSH1 Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STEUERN_ENDE_ULV

0x2F60B500 STEUERN_ENDE_ULV Umluftventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ULV2

0x2F608A00 STEUERN_ENDE_ULV2 Umluftventil 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UVLSS

0x2F602000 STEUERN_ENDE_UVLSS Versorgung Einspritzung / Zuendung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENWS

0x2F60ED03 STEUERN_ENWS Vanos Einlass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS_WERT | real | Tastverhaeltniss Ventil Einlassnockenwellensteller Bank 1 CAM_SP_IN_EXT_ADJ[1] (t.b.d.)   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ENWS_WERT | unsigned long | Timeout Ventil Einlassnockenwellensteller Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ENWS2

0x2F608803 STEUERN_ENWS2 Vanos Einlass Ventil 2 ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS2_WERT | real | Tastverhaeltniss Ventil Einlassnockenwellensteller Bank 2 CAM_SP_IN_EXT_ADJ[2] (t.b.d.)   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ENWS2_WERT | unsigned long | Timeout Ventil Einlassnockenwellensteller Bank 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GLF

0x2F60C303 STEUERN_GLF Gesteuerte Luftfuehrung ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | unsigned long | Tastverhaeltniss Gesteuerte Luftfuehrung LV_ACT_ECRAS_UP_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_GLF_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

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
| SW_TV_KGEH_WERT | unsigned long | Tastverhaeltniss Kurbelgehaeuseentlueftungsheizung LV_ACT_RLY_CRCV_HEAT_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_KGEH_WERT | unsigned long | Timeout Kurbelgehaeuseentlueftungsheizung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KVA

0x2E5FC1 STEUERN_KVA KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | real | correction factor for consumption (A2L-Name: fac_fco_kwp) FAC_FCO_KWP   Min: -0.128 Max: 0.127 |

### STEUERN_LDS1

0x2F60B603 STEUERN_LDS1 Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS1_WERT | real | Tastverhaeltniss Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) WGPWM_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.9984741210938 |
| SW_TO_LDS1_WERT | unsigned long | Timeout Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LDS2

0x2F60B703 STEUERN_LDS2 Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS2_WERT | real | Tastverhaeltniss Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) WGPWM_EXT_ADJ[2]   Einheit: %   Min: 0 Max: 99.9984741210938 |
| SW_TO_LDS2_WERT | unsigned long | Timeout Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

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

### STEUERN_LSH1

0x2F60D003 STEUERN_LSH1 Lambdasondenheizung vor Kat Bank1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 LSHPWM_UP_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH1_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

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

### STEUERN_PROGRAMM_IMA_ZYL_1

0x2E5F91 STEUERN_PROGRAMM_IMA_ZYL_1 Abgleichwert Injektor 01 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[0]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[0]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_2

0x2E5F98 STEUERN_PROGRAMM_IMA_ZYL_2 Abgleichwert Injektor 02 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[7]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[7]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_3

0x2E5F96 STEUERN_PROGRAMM_IMA_ZYL_3 Abgleichwert Injektor 03 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[5]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[5]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_4

0x2E5F93 STEUERN_PROGRAMM_IMA_ZYL_4 Abgleichwert Injektor 04 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[2]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[2]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_5

0x2E5F92 STEUERN_PROGRAMM_IMA_ZYL_5 Abgleichwert Injektor 02 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[1]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[1]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_6

0x2E5F95 STEUERN_PROGRAMM_IMA_ZYL_6 Abgleichwert Injektor 06 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[4]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[4]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_7

0x2E5F97 STEUERN_PROGRAMM_IMA_ZYL_7 Abgleichwert Injektor 07 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[6]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[6]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_8

0x2E5F94 STEUERN_PROGRAMM_IMA_ZYL_8 Abgleichwert Injektor 08 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[3]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[3]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMAALLE

0x2E5F90 STEUERN_PROGRAMM_IMAALLE Abgleichwerte Injektoren programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[0]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[0]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[1]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[1]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[2]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[2]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[3]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[3]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[4]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[4]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[5]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[5]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[6]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[6]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[7]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[7]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_SOK

0x2F60C203 STEUERN_SOK Soundklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SOK_WERT | unsigned long | Tastverhaeltniss Soundklappe LV_ACT_SOF_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_SOK_WERT | unsigned long | Timeout Soundklappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_SR

0x2F60C403 STEUERN_SR Startrelais ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SR_WERT | unsigned long | Tastverhaeltniss Startrelais LV_ACT_RLY_ST_EXT_ADJ   Min: 0 Max: 1 |
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

### STEUERN_ULV

0x2F60B503 STEUERN_ULV Umluftventil ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV_WERT | real | Tastverhaeltniss Umluftventil 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ULV_WERT | unsigned long | Timeout Umluftventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ULV2

0x2F608A03 STEUERN_ULV2 Umluftventil 2 ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV2_WERT | real | Tastverhaeltniss Umluftventil 2 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ULV2_WERT | unsigned long | Timeout Umluftventil 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STOP_SYSTEMCHECK_DMTL

0x3102F0DA STOP_SYSTEMCHECK_DMTL Diagnosefunktion DMTL beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_GEN

0x3102F02A STOP_SYSTEMCHECK_GEN Diagnosefunktion Generatortest beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_GLF

0x3102F0D5 STOP_SYSTEMCHECK_GLF Ende Gesteuerte Luftfuehrung Systemcheck Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

0x3102F0F7 STOP_SYSTEMCHECK_IGR_AUS Ende Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_LLERH

0x3102F026 STOP_SYSTEMCHECK_LLERH Diagnosefunktion Leerlauf-Erhoehung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

0x3102F0F6 STOP_SYSTEMCHECK_PM_MESSEMODE Ende Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_TEV

0x3102F022 STOP_SYSTEMCHECK_TEV Diagnosefunktion Tankentlueftungsventil beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### _SWE_LESEN

0x31010205 SWE_LESEN Informationen zu Softwareeinheiten auf dem Steuergerät unter Verwendung des Jobs SVK_LESEN UDS  : $31   RoutinControl by RequestSerice ID UDS  : $01xx Sub-Parameter fuer SVK UDS  : $0205 SWEDI (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SWE_EINHEIT | string | auszulesender SWE Satz Eingabe von 0 bis 4 |

### IS_LESEN

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $2000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

_No arguments._

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

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
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor | - |
| 0x0200 | Elektrische Wasserpumpe | - |
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
| 0x0F00 | Rearview Kamera hinten | - |
| 0x1000 | Topview Kamera Außenspiegel links | - |
| 0x1100 | Topview Kamera Außenspiegel rechts | - |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | - |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | - |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A00 | Schalterblock Sitzheizung hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2200 | Funkempfänger | 1 |
| 0x2300 | Funkempfänger 2 | 1 |
| 0x2400 | Türgriffelektronik Fahrer | - |
| 0x2500 | Türgriffelektronik Beifahrer | - |
| 0x2600 | Türgriffelektronik Fahrer hinten | - |
| 0x2700 | Türgriffelektronik Beifahrer hinten | - |
| 0x2800 | Telestart-Handsender 1 | - |
| 0x2900 | Telestart-Handsender 2 | - |
| 0x2A00 | RSE-Fernbedienung | - |
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
| 0x04 | Filt | Mikrofilter |
| 0x06 | Br_h | Bremsbelag hinten |
| 0x07 | CSF | Dieselpartikelfilter |
| 0x08 | Batt | Batterie |
| 0x09 | QMV | QMV-H-Oel |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x13 | H2 | H2-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x15 | Efk | Einfahrkontrolle |
| 0x16 | DAD | Additiv fuer Partikelfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
| 0x23 | DKG | DK-Getriebeoel |
| 0x0A | ZKrz_a | Zuendkerzen adaptiv |
| 0x0D | NOx_a | NOx-Additiv |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000000 | 000000 FehlerOrt nicht bedatet | 0 |
| 0x021201 | 0x021201 Energiesparmodus aktiv: Fertigungsmodus | 0 |
| 0x021202 | 0x021202 Energiesparmodus aktiv: Transportmodus | 0 |
| 0x021204 | 0x021204 Energiesparmodus aktiv: Werkstattmodus | 0 |
| 0x100601 | 0x100601 Drosselklappe, Ansteuerung: Fehlfunktion | 0 |
| 0x100701 | 0x100701 Drosselklappe 2, Ansteuerung: Fehlfunktion | 0 |
| 0x100801 | 0x100801 Drosselklappe, Positionsrückmeldung: klemmt kurzzeitig | 0 |
| 0x100802 | 0x100802 Drosselklappe, Positionsrückmeldung: klemmt dauerhaft | 0 |
| 0x100C08 | 0x100C08 Drosselklappe, Drosselklappenpotenziometer 1, Plausibilität: unplausibel zur Luftmasse | 0 |
| 0x100D08 | 0x100D08 Drosselklappe 2, Drosselklappenpotenziometer 1, Plausibilität: unplausibel zur Luftmasse | 0 |
| 0x100E08 | 0x100E08 Drosselklappe, Drosselklappenpotenziometer 2, Plausibilität: unplausibel zur Luftmasse | 0 |
| 0x100F08 | 0x100F08 Drosselklappe 2, Drosselklappenpotenziometer 2, Plausibilität: unplausibel zur Luftmasse | 0 |
| 0x101001 | 0x101001 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x101002 | 0x101002 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101101 | 0x101101 Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x101102 | 0x101102 Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse | 0 |
| 0x101201 | 0x101201 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101202 | 0x101202 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x101301 | 0x101301 Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x101302 | 0x101302 Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x101401 | 0x101401 Drosselklappe, Drosselklappenadaption: Randbedingungen nicht erfüllt | 0 |
| 0x101402 | 0x101402 Drosselklappe, Drosselklappenadaption: Notluftposition nicht adaptiert | 0 |
| 0x101404 | 0x101404 Drosselklappe, Drosselklappenadaption: Federtest und Notluftprüfung nicht durchgeführt | 0 |
| 0x101408 | 0x101408 Drosselklappe, Drosselklappenadaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101501 | 0x101501 Drosselklappe 2, Drosselklappenadaption: Randbedingungen nicht erfüllt | 0 |
| 0x101502 | 0x101502 Drosselklappe 2, Drosselklappenadaption: Notluftposition nicht adaptiert | 0 |
| 0x101504 | 0x101504 Drosselklappe 2, Drosselklappenadaption: Federtest und Notluftprüfung nicht durchgeführt | 0 |
| 0x101508 | 0x101508 Drosselklappe 2, Drosselklappenadaption: Erstadaption, unterer Anschlag nicht gelernt | 0 |
| 0x101601 | 0x101601 Drosselklappe, Drosselklappenadaption, Federtest: unterer Anschlag nicht erreicht | 0 |
| 0x101602 | 0x101602 Drosselklappe, Drosselklappenadaption, Federtest: Fehler untere Rückstellfeder | 0 |
| 0x101604 | 0x101604 Drosselklappe, Drosselklappenadaption, Federtest: obere Sollposition nicht erreicht | 0 |
| 0x101608 | 0x101608 Drosselklappe, Drosselklappenadaption, Federtest: Fehler obere Rückstellfeder | 0 |
| 0x101701 | 0x101701 Drosselklappe 2, Drosselklappenadaption, Federtest: unterer Anschlag nicht erreicht | 0 |
| 0x101702 | 0x101702 Drosselklappe 2, Drosselklappenadaption, Federtest: Fehler untere Rückstellfeder | 0 |
| 0x101704 | 0x101704 Drosselklappe 2, Drosselklappenadaption, Federtest: obere Sollposition nicht erreicht | 0 |
| 0x101708 | 0x101708 Drosselklappe 2, Drosselklappenadaption, Federtest: Fehler obere Rückstellfeder | 0 |
| 0x101801 | 0x101801 Drosselklappe 2, Startprüfung: Federtest | 0 |
| 0x101802 | 0x101802 Drosselklappe 2, Startprüfung: Notluftprüfung | 0 |
| 0x101901 | 0x101901 Drosselklappe, Startprüfung: Federtest | 0 |
| 0x101902 | 0x101902 Drosselklappe, Startprüfung: Notluftprüfung | 0 |
| 0x101C08 | 0x101C08 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Poti 1 und Poti 2 | 0 |
| 0x101D08 | 0x101D08 Drosselklappe 2, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Poti 1 und Poti 2 | 0 |
| 0x101F01 | 0x101F01 Drosselklappenwinkel - Saugrohrdruck, Korrelation: Grenzwert überschritten | 0 |
| 0x101F02 | 0x101F02 Drosselklappenwinkel - Saugrohrdruck, Korrelation: Grenzwert unterschritten | 0 |
| 0x102001 | 0x102001 Luftmassensystem: Messwert Luftmasse zu hoch | 0 |
| 0x102002 | 0x102002 Luftmassensystem: Messwert Luftmasse zu niedrig | 0 |
| 0x102201 | 0x102201 Luftmassenmesser, Signal: Messbereichsproblem | 0 |
| 0x102204 | 0x102204 Luftmassenmesser, Signal: elektrischer Fehler | 0 |
| 0x102501 | 0x102501 Luftmassenmesser, elektrisch: Leitungsunterbrechung oder Sensor defekt | 0 |
| 0x102502 | 0x102502 Luftmassenmesser, elektrisch: Sensor defekt | 0 |
| 0x102601 | 0x102601 Luftmassenmesser 2, elektrisch: Leitungsunterbrechung oder Sensor defekt | 0 |
| 0x102602 | 0x102602 Luftmassenmesser 2, elektrisch: Sensor defekt | 0 |
| 0x102701 | 0x102701 Luftmassenmesser, Plausibilität: Gradient zu hoch | 0 |
| 0x102801 | 0x102801 Luftmassenmesser 2, Plausibilität: Gradient zu hoch | 0 |
| 0x102901 | 0x102901 Luftmassensystem 2: Messwert Luftmasse zu hoch | 0 |
| 0x102902 | 0x102902 Luftmassensystem 2: Messwert Luftmasse zu niedrig | 0 |
| 0x103001 | 0x103001 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103002 | 0x103002 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103101 | 0x103101 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus | 0 |
| 0x103102 | 0x103102 Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x103208 | 0x103208 Fahrpedalmodul, Pedalwertgeber Potenziometer, Signal: Doppelfehler | 0 |
| 0x103308 | 0x103308 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Signal 1 und Signal 2 | 0 |
| 0x104308 | 0x104308 Saugrohrdrucksensor, Nachlauf: Signal unplausibel | 0 |
| 0x104401 | 0x104401 Saugrohrdrucksensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x104402 | 0x104402 Saugrohrdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104501 | 0x104501 Saugrohrdrucksensor 2, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x104502 | 0x104502 Saugrohrdrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x104608 | 0x104608 Saugrohrdrucksensor 2, Nachlauf: Signal unplausibel | 0 |
| 0x105001 | 0x105001 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x105002 | 0x105002 Umgebungsdrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x105101 | 0x105101 Umgebungsdrucksensor, Plausibilität: Maximaldruck unplausibel | 0 |
| 0x105102 | 0x105102 Umgebungsdrucksensor, Plausibilität: Minimaldruck unplausibel | 0 |
| 0x107001 | 0x107001 Drosselklappenwinkel - Saugrohrdruck 2, Korrelation: Grenzwert überschritten | 0 |
| 0x107002 | 0x107002 Drosselklappenwinkel - Saugrohrdruck 2, Korrelation: Grenzwert unterschritten | 0 |
| 0x108001 | 0x108001 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x108002 | 0x108002 Ansauglufttemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108101 | 0x108101 Ansauglufttemperatursensor 2, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x108102 | 0x108102 Ansauglufttemperatursensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108201 | 0x108201 Ansauglufttemperatursensor, Plausibilität: Maximaltemperatur unplausibel | 0 |
| 0x108202 | 0x108202 Ansauglufttemperatursensor, Plausibilität: Minimaltemperatur unplausibel | 0 |
| 0x108208 | 0x108208 Ansauglufttemperatursensor, Plausibilität: Signal hängt | 0 |
| 0x108301 | 0x108301 Ansauglufttemperatursensor 2, Plausibilität: Maximaltemperatur unplausibel | 0 |
| 0x108302 | 0x108302 Ansauglufttemperatursensor 2, Plausibilität: Minimaltemperatur unplausibel | 0 |
| 0x108308 | 0x108308 Ansauglufttemperatursensor 2, Plausibilität: Signal hängt | 0 |
| 0x108401 | 0x108401 Ansauglufttemperatursensor vor Drosselklappe, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x108402 | 0x108402 Ansauglufttemperatursensor vor Drosselklappe, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108501 | 0x108501 Ansauglufttemperatursensor vor Drosselklappe 2, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x108502 | 0x108502 Ansauglufttemperatursensor vor Drosselklappe 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x108601 | 0x108601 Ansauglufttemperatursensor vor Drosselklappe, Plausibilität: Maximaltemperatur unplausibel | 0 |
| 0x108602 | 0x108602 Ansauglufttemperatursensor vor Drosselklappe, Plausibilität: Minimaltemperatur unplausibel | 0 |
| 0x108608 | 0x108608 Ansauglufttemperatursensor vor Drosselklappe, Plausibilität: Signal hängt | 0 |
| 0x108701 | 0x108701 Ansauglufttemperatursensor vor Drosselklappe 2, Plausibilität: Maximaltemperatur unplausibel | 0 |
| 0x108702 | 0x108702 Ansauglufttemperatursensor vor Drosselklappe 2, Plausibilität: Minimaltemperatur unplausibel | 0 |
| 0x108708 | 0x108708 Ansauglufttemperatursensor vor Drosselklappe 2, Plausibilität: Signal hängt | 0 |
| 0x109001 | 0x109001 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x109002 | 0x109002 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x109108 | 0x109108 Kühlmitteltemperatursensor, Plausibilität: unplausibel bezüglich Lambdaregelung | 0 |
| 0x109208 | 0x109208 Kühlmitteltemperatursensor, Plausibilität: Signal hängt | 0 |
| 0x109308 | 0x109308 Kühlmitteltemperatursensor, Plausibilität: Signaländerung zu schnell | 0 |
| 0x109408 | 0x109408 Kühlmitteltemperatursensor, Plausibilität: Signal hängt im oberern Messbereich | 0 |
| 0x10B008 | 0x10B008 Umgebungstemperatursensor, Plausibilität: Signal unplausibel | 0 |
| 0x10B101 | 0x10B101 Umgebungstemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x10B102 | 0x10B102 Umgebungstemperatursensor, elektrisch: Kurzschluss nach Masse | 1 |
| 0x10B104 | 0x10B104 Umgebungstemperatursensor, elektrisch: Signalfehler | 1 |
| 0x10C001 | 0x10C001 Ladelufttemperatursensor, Gradient: Gradient zu hoch oder Sprung | 0 |
| 0x10C004 | 0x10C004 Ladelufttemperatursensor, Gradient: Offset zu hoch | 0 |
| 0x10C101 | 0x10C101 Ladelufttemperatursensor 2, Gradient: Gradient zu hoch oder Sprung | 0 |
| 0x10C104 | 0x10C104 Ladelufttemperatursensor 2, Gradient: Offset zu hoch | 0 |
| 0x110001 | 0x110001 Zylindereinspritzabschaltung: Druck zu niedrig im Hochdruck-System | 0 |
| 0x110002 | 0x110002 Zylindereinspritzabschaltung: Druck zu niedrig im Niederdruck-System | 0 |
| 0x110008 | 0x110008 Zylindereinspritzabschaltung: Tankfüllstand zu gering | 0 |
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
| 0x110701 | 0x110701 Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110702 | 0x110702 Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110704 | 0x110704 Injektor Zylinder 7, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110708 | 0x110708 Injektor Zylinder 7, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110801 | 0x110801 Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse | 0 |
| 0x110802 | 0x110802 Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110804 | 0x110804 Injektor Zylinder 8, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus | 0 |
| 0x110808 | 0x110808 Injektor Zylinder 8, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse | 0 |
| 0x112101 | 0x112101 Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112102 | 0x112102 Injektor Zylinder 1, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112104 | 0x112104 Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112108 | 0x112108 Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112201 | 0x112201 Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112202 | 0x112202 Injektor Zylinder 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112204 | 0x112204 Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112208 | 0x112208 Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112301 | 0x112301 Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112302 | 0x112302 Injektor Zylinder 3, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112304 | 0x112304 Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112308 | 0x112308 Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112401 | 0x112401 Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112402 | 0x112402 Injektor Zylinder 4, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112404 | 0x112404 Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112408 | 0x112408 Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112501 | 0x112501 Injektor Zylinder 5, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112502 | 0x112502 Injektor Zylinder 5, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112504 | 0x112504 Injektor Zylinder 5, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112508 | 0x112508 Injektor Zylinder 5, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112601 | 0x112601 Injektor Zylinder 6, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112602 | 0x112602 Injektor Zylinder 6, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112604 | 0x112604 Injektor Zylinder 6, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112608 | 0x112608 Injektor Zylinder 6, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112701 | 0x112701 Injektor Zylinder 7, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112702 | 0x112702 Injektor Zylinder 7, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112704 | 0x112704 Injektor Zylinder 7, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112708 | 0x112708 Injektor Zylinder 7, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x112801 | 0x112801 Injektor Zylinder 8, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x112802 | 0x112802 Injektor Zylinder 8, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x112804 | 0x112804 Injektor Zylinder 8, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite | 0 |
| 0x112808 | 0x112808 Injektor Zylinder 8, Ansteuerung: Leitungsunterbrechung bei aufgeladenem Injektor | 0 |
| 0x115D04 | 0x115D04 Injektor, Kodierung, Plausibilität: Energie-Nominalwert | 0 |
| 0x115D08 | 0x115D08 Injektor, Kodierung, Plausibilität: Kleinmengen-Nominalwert | 0 |
| 0x118001 | 0x118001 Gemischregelung: Gemisch im Leerlauf zu mager | 0 |
| 0x118002 | 0x118002 Gemischregelung: Gemisch im Leerlauf zu fett | 0 |
| 0x118004 | 0x118004 Gemischregelung: Gemisch zu mager | 0 |
| 0x118008 | 0x118008 Gemischregelung: Gemisch zu fett | 0 |
| 0x118101 | 0x118101 Gemischregelung 2: Gemisch im Leerlauf zu mager | 0 |
| 0x118102 | 0x118102 Gemischregelung 2: Gemisch im Leerlauf zu fett | 0 |
| 0x118104 | 0x118104 Gemischregelung 2: Gemisch zu mager | 0 |
| 0x118108 | 0x118108 Gemischregelung 2: Gemisch zu fett | 0 |
| 0x118401 | 0x118401 Gemischregelung: Gemisch zu mager; große Abweichung | 0 |
| 0x118402 | 0x118402 Gemischregelung: Gemisch zu fett; große Abweichung | 0 |
| 0x118501 | 0x118501 Gemischregelung 2: Gemisch zu mager; große Abweichung | 0 |
| 0x118502 | 0x118502 Gemischregelung 2: Gemisch zu fett; große Abweichung | 0 |
| 0x118601 | 0x118601 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118602 | 0x118602 Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118701 | 0x118701 Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118702 | 0x118702 Lambdasonde vor Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118801 | 0x118801 Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118802 | 0x118802 Lambdasonde nach Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118901 | 0x118901 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu fett | 0 |
| 0x118902 | 0x118902 Lambdasonde nach Katalysator 2, Gemischfeinregelung: Abgas nach Katalysator zu mager | 0 |
| 0x118A01 | 0x118A01 Gemischregelung, geringe Emissionverschlechterung: Gemisch zu fett | 0 |
| 0x118A02 | 0x118A02 Gemischregelung, geringe Emissionverschlechterung: Gemisch zu mager | 0 |
| 0x118B01 | 0x118B01 Gemischregelung 2, geringe Emissionverschlechterung: Gemisch zu fett | 0 |
| 0x118B02 | 0x118B02 Gemischregelung 2, geringe Emissionverschlechterung: Gemisch zu mager | 0 |
| 0x119001 | 0x119001 Raildrucksensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x119002 | 0x119002 Raildrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119101 | 0x119101 Raildrucksensor 2, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x119102 | 0x119102 Raildrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x119201 | 0x119201 Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x119202 | 0x119202 Kraftstoffniederdrucksensor, elektrisch: Kurzschluss nach Masse oder Leitungsnterbrechung | 0 |
| 0x119208 | 0x119208 Kraftstoffniederdrucksensor, elektrisch: Signal unplausibel | 0 |
| 0x11A001 | 0x11A001 Kraftstoffhochdrucksystem, Kraftstoffdruck: Druck zu hoch | 0 |
| 0x11A002 | 0x11A002 Kraftstoffhochdrucksystem, Kraftstoffdruck: Maximaldruck überschritten | 0 |
| 0x11A004 | 0x11A004 Kraftstoffhochdrucksystem, Kraftstoffdruck: Minimaldruck unterschritten | 0 |
| 0x11A101 | 0x11A101 Kraftstoffhochdrucksystem 2, Kraftstoffdruck: Druck zu hoch | 0 |
| 0x11A102 | 0x11A102 Kraftstoffhochdrucksystem 2, Kraftstoffdruck: Maximaldruck überschritten | 0 |
| 0x11A104 | 0x11A104 Kraftstoffhochdrucksystem 2, Kraftstoffdruck: Minimaldruck unterschritten | 0 |
| 0x11A201 | 0x11A201 Kraftstoffniederdrucksystem, Kraftstoffdruck: Druck zu hoch | 0 |
| 0x11A202 | 0x11A202 Kraftstoffniederdrucksystem, Kraftstoffdruck: Maximaldruck überschritten | 0 |
| 0x11A204 | 0x11A204 Kraftstoffniederdrucksystem, Kraftstoffdruck: Minimaldruck unterschritten | 0 |
| 0x11A501 | 0x11A501 Kraftstoffhochdrucksystem, Messbereich: Druck zu hoch | 0 |
| 0x11A502 | 0x11A502 Kraftstoffhochdrucksystem, Messbereich: Maximaldruck überschritten | 0 |
| 0x11A504 | 0x11A504 Kraftstoffhochdrucksystem, Messbereich: Minimaldruck unterschritten | 0 |
| 0x11A601 | 0x11A601 Kraftstoffhochdrucksystem 2, Messbereich: Druck zu hoch | 0 |
| 0x11A602 | 0x11A602 Kraftstoffhochdrucksystem 2, Messbereich: Maximaldruck überschritten | 0 |
| 0x11A604 | 0x11A604 Kraftstoffhochdrucksystem 2, Messbereich: Minimaldruck unterschritten | 0 |
| 0x11A701 | 0x11A701 Kraftstoffhochdrucksystem, Regelung: Kraftstoffmasse außerhalb Grenzwert | 0 |
| 0x11A702 | 0x11A702 Kraftstoffhochdrucksystem, Regelung: berechnete Kraftstoffmasse ungültig | 0 |
| 0x11A704 | 0x11A704 Kraftstoffhochdrucksystem, Regelung: Mengenregelung außerhalb gültigem Bereich | 0 |
| 0x11A801 | 0x11A801 Kraftstoffhochdrucksystem 2, Regelung: Kraftstoffmasse außerhalb Grenzwert | 0 |
| 0x11A802 | 0x11A802 Kraftstoffhochdrucksystem 2, Regelung: berechnete Kraftstoffmasse ungültig | 0 |
| 0x11A804 | 0x11A804 Kraftstoffhochdrucksystem 2, Regelung: Mengenregelung außerhalb gültigem Bereich | 0 |
| 0x11B004 | 0x11B004 Kraftstoffpumpe, Funktion: Notabschaltung | 0 |
| 0x11B101 | 0x11B101 Kraftstoffpumpe: Drehzahl zu hoch | 0 |
| 0x11B102 | 0x11B102 Kraftstoffpumpe: Drehzahl zu niedrig | 0 |
| 0x11B104 | 0x11B104 Kraftstoffpumpe: Notlauf | 0 |
| 0x11B108 | 0x11B108 Kraftstoffpumpe: Übertemperatur | 0 |
| 0x11B201 | 0x11B201 Kraftstoffniederdrucksystem, Regelung: Förderleistungsregelung außerhalb gültigem Bereich | 0 |
| 0x11B202 | 0x11B202 Kraftstoffniederdrucksystem, Regelung: Förderleistung außerhalb Grenzwert | 0 |
| 0x11B204 | 0x11B204 Kraftstoffniederdrucksystem, Regelung: minimale Förderleistung außerhalb Grenzwert | 0 |
| 0x11C201 | 0x11C201 Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C202 | 0x11C202 Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C204 | 0x11C204 Mengensteuerventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x11C301 | 0x11C301 Mengensteuerventil 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x11C302 | 0x11C302 Mengensteuerventil 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x11C304 | 0x11C304 Mengensteuerventil 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x120008 | 0x120008 Ladedruckregelung, Leckage: Ladedruck zu niedrig | 0 |
| 0x120208 | 0x120208 Ladedruckregelung, oberer Wert: Ladedruck zu hoch | 0 |
| 0x120308 | 0x120308 Ladedruckregelung, unterer Wert: Ladedruck zu niedrig | 0 |
| 0x120408 | 0x120408 Ladedruckregelung, Abschaltung: Ladedruckaufbau gesperrt | 0 |
| 0x120508 | 0x120508 Ladedruckregelung 2, Leckage: Ladedruck zu niedrig | 0 |
| 0x120608 | 0x120608 Ladedruckregelung 2, oberer Wert: Ladedruck zu hoch | 0 |
| 0x120708 | 0x120708 Ladedruckregelung 2, unterer Wert: Ladedruck zu niedrig | 0 |
| 0x121001 | 0x121001 Ladedrucksensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x121002 | 0x121002 Ladedrucksensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121101 | 0x121101 Ladedrucksensor 2, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x121102 | 0x121102 Ladedrucksensor 2, elektrisch: Kurzschluss nach Masse | 0 |
| 0x121208 | 0x121208 Ladedrucksensor, Nachlauf: Signal unplausibel | 0 |
| 0x121308 | 0x121308 Ladedrucksensor 2, Nachlauf: Signal unplausibel | 0 |
| 0x122001 | 0x122001 Schubumluftventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122002 | 0x122002 Schubumluftventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122004 | 0x122004 Schubumluftventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x122101 | 0x122101 Schubumluftventil 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x122102 | 0x122102 Schubumluftventil 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x122104 | 0x122104 Schubumluftventil 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123001 | 0x123001 Wastegate, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123002 | 0x123002 Wastegate, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123004 | 0x123004 Wastegate, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x123101 | 0x123101 Wastegate 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x123102 | 0x123102 Wastegate 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x123104 | 0x123104 Wastegate 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x128008 | 0x128008 Lambdasonden vor Katalysator, Montage: vertauscht | 0 |
| 0x128101 | 0x128101 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128201 | 0x128201 Lambdasonde vor Katalysator 2, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x128301 | 0x128301 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128401 | 0x128401 Lambdasonde vor Katalysator 2, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x128501 | 0x128501 Lambdasonde vor Katalysator, im Schub: Signal unterhalb Grenzwert | 0 |
| 0x128601 | 0x128601 Lambdasonde vor Katalysator 2, im Schub: Signal unterhalb Grenzwert | 0 |
| 0x128901 | 0x128901 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion | 0 |
| 0x128A01 | 0x128A01 Lambdasonde vor Katalysator 2, Dynamik: langsame Reaktion | 0 |
| 0x128B01 | 0x128B01 Lambdasonde vor Katalysator, Verbau: Sonde nicht angesteckt | 0 |
| 0x128C01 | 0x128C01 Lambdasonde vor Katalysator 2, Verbau: Sonde nicht angesteckt | 0 |
| 0x128E01 | 0x128E01 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x128E02 | 0x128E02 Lambdasonde vor Katalysator, Leitungsfehler: Leitungsunterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128E04 | 0x128E04 Lambdasonde vor Katalysator, Leitungsfehler: Leitungsunterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128E08 | 0x128E08 Lambdasonde vor Katalysator, Leitungsfehler: Unterbrechung Abgleichleitung | 0 |
| 0x128F01 | 0x128F01 Lambdasonde vor Katalysator 2, Leitungsfehler: Unterbrechung Nernstleitung | 0 |
| 0x128F02 | 0x128F02 Lambdasonde vor Katalysator 2, Leitungsfehler: Leitungsunterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128F04 | 0x128F04 Lambdasonde vor Katalysator 2, Leitungsfehler: Leitungsunterbrechung virtuelle Masse oder Pumpstromleitung | 0 |
| 0x128F08 | 0x128F08 Lambdasonde vor Katalysator 2, Leitungsfehler: Unterbrechung Abgleichleitung | 0 |
| 0x129001 | 0x129001 Lambdasonde, Signalverarbeitung: Kurzschluss nach Plus | 0 |
| 0x129002 | 0x129002 Lambdasonde, Signalverarbeitung: Kurzschluss nach Masse | 0 |
| 0x129101 | 0x129101 Lambdasonde 2, Signalverarbeitung: Kurzschluss nach Plus | 0 |
| 0x129102 | 0x129102 Lambdasonde 2, Signalverarbeitung: Kurzschluss nach Masse | 0 |
| 0x129201 | 0x129201 DME, interner Fehler, Lambdasonde: Initialisierungsfehler | 0 |
| 0x129202 | 0x129202 DME, interner Fehler, Lambdasonde: Kommunikationsfehler | 0 |
| 0x129301 | 0x129301 DME, interner Fehler, Lambdasonde 2: Initialisierungsfehler | 0 |
| 0x129302 | 0x129302 DME, interner Fehler, Lambdasonde 2: Kommunikationsfehler | 0 |
| 0x12A008 | 0x12A008 Lambdasonden nach Katalysator, Montage: vertauscht | 0 |
| 0x12A101 | 0x12A101 Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A102 | 0x12A102 Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager | 0 |
| 0x12A201 | 0x12A201 Lambdasonde nach Katalysator 2, Systemprüfung: Signal festliegend auf Fett | 0 |
| 0x12A202 | 0x12A202 Lambdasonde nach Katalysator 2, Systemprüfung: Signal festliegend auf Mager | 0 |
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
| 0x12B201 | 0x12B201 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B202 | 0x12B202 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B204 | 0x12B204 Lambdasondenbeheizung vor Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B301 | 0x12B301 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B302 | 0x12B302 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B304 | 0x12B304 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B401 | 0x12B401 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x12B402 | 0x12B402 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x12B404 | 0x12B404 Lambdasondenbeheizung nach Katalysator 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x12B501 | 0x12B501 Lambdasondenbeheizung vor Katalysator, Funktion: Betriebsbereitschaft Sonde zu spät erreicht | 0 |
| 0x12B504 | 0x12B504 Lambdasondenbeheizung vor Katalysator, Funktion: Sondentemperaturmessung im Steuergerät fehlgeschlagen | 0 |
| 0x12B601 | 0x12B601 Lambdasondenbeheizung vor Katalysator 2, Funktion: Betriebsbereitschaft Sonde zu spät erreicht | 0 |
| 0x12B604 | 0x12B604 Lambdasondenbeheizung vor Katalysator 2, Funktion: Sondentemperaturmessung im Steuergerät fehlgeschlagen | 0 |
| 0x12B701 | 0x12B701 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12B801 | 0x12B801 Lambdasondenbeheizung nach Katalysator 2, Funktion: Innenwiderstand zu hoch | 0 |
| 0x12B901 | 0x12B901 Lambdasonde vor Katalysator, Temperatur: Betriebsbereitschaft Sonde zu spät erreicht | 0 |
| 0x12B904 | 0x12B904 Lambdasonde vor Katalysator, Temperatur: Sondentemperaturmessung im Steuergerät fehlgeschlagen | 0 |
| 0x12BA01 | 0x12BA01 Lambdasonde vor Katalysator 2, Temperatur: Betriebsbereitschaft Sonde zu spät erreicht | 0 |
| 0x12BA04 | 0x12BA04 Lambdasonde vor Katalysator 2, Temperatur: Sondentemperaturmessung im Steuergerät fehlgeschlagen | 0 |
| 0x130001 | 0x130001 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130002 | 0x130002 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130004 | 0x130004 VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130108 | 0x130108 VANOS, Einlass: Regelfehler, Position nicht erreicht | 0 |
| 0x130201 | 0x130201 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130202 | 0x130202 VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130204 | 0x130204 VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130308 | 0x130308 VANOS, Auslass: Regelfehler, Position nicht erreicht | 0 |
| 0x130401 | 0x130401 VANOS-Magnetventil Einlass 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130402 | 0x130402 VANOS-Magnetventil Einlass 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130404 | 0x130404 VANOS-Magnetventil Einlass 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130508 | 0x130508 VANOS, Einlass 2: Regelfehler, Position nicht erreicht | 0 |
| 0x130601 | 0x130601 VANOS-Magnetventil Auslass 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x130602 | 0x130602 VANOS-Magnetventil Auslass 2, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x130604 | 0x130604 VANOS-Magnetventil Auslass 2, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x130708 | 0x130708 VANOS, Auslass 2: Regelfehler, Position nicht erreicht | 0 |
| 0x130801 | 0x130801 Einlassnockenwelle, Zahnsprung: Spreizung außerhalb Grenzwert | 0 |
| 0x130901 | 0x130901 Auslassnockenwelle, Zahnsprung: Spreizung außerhalb Grenzwert | 0 |
| 0x130A01 | 0x130A01 Einlassnockenwelle 2, Zahnsprung: Spreizung außerhalb Grenzwert | 0 |
| 0x130B01 | 0x130B01 Auslassnockenwelle 2, Zahnsprung: Spreizung außerhalb Grenzwert | 0 |
| 0x130C01 | 0x130C01 Kurbelwelle - Einlassnockenwelle, Übereinstimmung: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x130D01 | 0x130D01 Kurbelwelle - Auslassnockenwelle, Übereinstimmung: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x130E01 | 0x130E01 Kurbelwelle - Einlassnockenwelle, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x130F01 | 0x130F01 Kurbelwelle - Auslassnockenwelle, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x131001 | 0x131001 Kurbelwelle - Einlassnockenwelle 2, Übereinstimmung: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x131101 | 0x131101 Kurbelwelle - Auslassnockenwelle 2, Übereinstimmung: Winkelunterschied außerhalb Grenzwert | 0 |
| 0x131201 | 0x131201 Kurbelwelle - Einlassnockenwelle 2, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x131301 | 0x131301 Kurbelwelle - Auslassnockenwelle 2, Synchronisation: Nockenwellensignal außerhalb Grenzwert | 0 |
| 0x138101 | 0x138101 Abgasklappe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x138102 | 0x138102 Abgasklappe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x138104 | 0x138104 Abgasklappe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x138201 | 0x138201 Kühlerjalousie, oben, Versorgungsspannung Steller: Spannungsfehler | 0 |
| 0x138301 | 0x138301 Kühlerjalousie, oben, Übertemperatur Steller: Grenzwert überschritten | 0 |
| 0x138401 | 0x138401 Kühlerjalousie, oben, Steller intern: elektrischer Fehler | 0 |
| 0x138501 | 0x138501 Kühlerjalousie, oben, unterer Anschlag: wird nicht erkannt | 0 |
| 0x138601 | 0x138601 Kühlerjalousie, oben, oberer Anschlag 1: wird nicht erkannt | 0 |
| 0x138701 | 0x138701 Kühlerjalousie, oben, oberer Anschlag 2: zu früh erkannt | 0 |
| 0x138801 | 0x138801 Kühlerjalousie, oben, Kommunikation Steller: Nachricht ungültig | 0 |
| 0x138901 | 0x138901 Kühlerjalousie, unten, elektrisch: Kurzschluss nach Plus | 0 |
| 0x138902 | 0x138902 Kühlerjalousie, unten, elektrisch: Kurzschluss nach Masse | 0 |
| 0x138904 | 0x138904 Kühlerjalousie, unten, elektrisch: Leitungsunterbrechung | 0 |
| 0x140001 | 0x140001 Verbrennungsaussetzer, mehrere Zylinder: Einspritzung wird abgeschaltet | 0 |
| 0x140002 | 0x140002 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang | 0 |
| 0x140004 | 0x140004 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend | 0 |
| 0x140008 | 0x140008 Verbrennungsaussetzer, mehrere Zylinder: Summenfehler | 0 |
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
| 0x140701 | 0x140701 Verbrennungsaussetzer, Zylinder 7: Einspritzung wird abgeschaltet | 0 |
| 0x140702 | 0x140702 Verbrennungsaussetzer, Zylinder 7: abgasschädigend nach Startvorgang | 0 |
| 0x140704 | 0x140704 Verbrennungsaussetzer, Zylinder 7: abgasschädigend | 0 |
| 0x140801 | 0x140801 Verbrennungsaussetzer, Zylinder 8: Einspritzung wird abgeschaltet | 0 |
| 0x140802 | 0x140802 Verbrennungsaussetzer, Zylinder 8: abgasschädigend nach Startvorgang | 0 |
| 0x140804 | 0x140804 Verbrennungsaussetzer, Zylinder 8: abgasschädigend | 0 |
| 0x142002 | 0x142002 Verbrennungsaussetzer: Tankfüllstand zu gering | 0 |
| 0x143002 | 0x143002 Laufunruhemessung: Messfehler Kurbelwellensensor | 0 |
| 0x150102 | 0x150102 Zündung, Zylinder 1: Brenndauer zu kurz | 0 |
| 0x150202 | 0x150202 Zündung, Zylinder 2: Brenndauer zu kurz | 0 |
| 0x150302 | 0x150302 Zündung, Zylinder 3: Brenndauer zu kurz | 0 |
| 0x150402 | 0x150402 Zündung, Zylinder 4: Brenndauer zu kurz | 0 |
| 0x150502 | 0x150502 Zündung, Zylinder 5: Brenndauer zu kurz | 0 |
| 0x150602 | 0x150602 Zündung, Zylinder 6: Brenndauer zu kurz | 0 |
| 0x150702 | 0x150702 Zündung, Zylinder 7: Brenndauer zu kurz | 0 |
| 0x150802 | 0x150802 Zündung, Zylinder 8: Brenndauer zu kurz | 0 |
| 0x152008 | 0x152008 Zündung, Spannungsversorgung: Leitungsunterbrechung | 0 |
| 0x152108 | 0x152108 Superklopfen Zylinder 1: Einspritzung wird abgeschaltet | 0 |
| 0x152208 | 0x152208 Superklopfen Zylinder 2: Einspritzung wird abgeschaltet | 0 |
| 0x152308 | 0x152308 Superklopfen Zylinder 3: Einspritzung wird abgeschaltet | 0 |
| 0x152408 | 0x152408 Superklopfen Zylinder 4: Einspritzung wird abgeschaltet | 0 |
| 0x152508 | 0x152508 Superklopfen Zylinder 5: Einspritzung wird abgeschaltet | 0 |
| 0x152608 | 0x152608 Superklopfen Zylinder 6: Einspritzung wird abgeschaltet | 0 |
| 0x152708 | 0x152708 Superklopfen Zylinder 7: Einspritzung wird abgeschaltet | 0 |
| 0x152808 | 0x152808 Superklopfen Zylinder 8: Einspritzung wird abgeschaltet | 0 |
| 0x156101 | 0x156101 Zündspule Zylinder 1, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156201 | 0x156201 Zündspule Zylinder 2, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156301 | 0x156301 Zündspule Zylinder 3, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156401 | 0x156401 Zündspule Zylinder 4, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156501 | 0x156501 Zündspule Zylinder 5, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156601 | 0x156601 Zündspule Zylinder 6, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156701 | 0x156701 Zündspule Zylinder 7, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x156801 | 0x156801 Zündspule Zylinder 8, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x160001 | 0x160001 Kurbelwellensensor, Signal: fehlt | 0 |
| 0x160002 | 0x160002 Kurbelwellensensor, Signal: unplausibel | 0 |
| 0x160101 | 0x160101 Kurbelwellensensor, Signal: Sensor defekt | 0 |
| 0x160201 | 0x160201 Kurbelwellensensor, Zahnfehler: Fehlfunktion | 0 |
| 0x160301 | 0x160301 Kurbelwellensensor, Lückenfehler: Fehlfunktion | 0 |
| 0x160402 | 0x160402 Kurbelwellensensor, Adaption: Grenzwert überschritten | 0 |
| 0x162001 | 0x162001 Einlassnockenwellensensor, Signal: Sensor defekt | 0 |
| 0x162101 | 0x162101 Einlassnockenwellensensor, elektrisch: Signal fehlt | 0 |
| 0x162201 | 0x162201 Einlassnockenwellensensor, Funktion: Messfehler | 0 |
| 0x162301 | 0x162301 Einlassnockenwellensensor 2, Signal: Sensor defekt | 0 |
| 0x162401 | 0x162401 Einlassnockenwellensensor 2, elektrisch: Signal fehlt | 0 |
| 0x162501 | 0x162501 Einlassnockenwellensensor 2, Funktion: Messfehler | 0 |
| 0x163101 | 0x163101 Auslassnockenwellensensor, Signal: Sensor defekt | 0 |
| 0x163201 | 0x163201 Auslassnockenwellensensor, elektrisch: Signal fehlt | 0 |
| 0x163301 | 0x163301 Auslassnockenwellensensor, Funktion: Messfehler | 0 |
| 0x163401 | 0x163401 Auslassnockenwellensensor 2, Signal: Sensor defekt | 0 |
| 0x163501 | 0x163501 Auslassnockenwellensensor 2, elektrisch: Signal fehlt | 0 |
| 0x163601 | 0x163601 Auslassnockenwellensensor 2, Funktion: Messfehler | 0 |
| 0x168001 | 0x168001 Klopfsensorsignal 1, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168002 | 0x168002 Klopfsensorsignal 1, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168008 | 0x168008 Klopfsensorsignal 1, Signal: unplausibel | 0 |
| 0x168101 | 0x168101 Klopfsensorsignal 2, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168102 | 0x168102 Klopfsensorsignal 2, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168108 | 0x168108 Klopfsensorsignal 2, Signal: unplausibel | 0 |
| 0x168201 | 0x168201 Klopfsensorsignal 3, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168202 | 0x168202 Klopfsensorsignal 3, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168208 | 0x168208 Klopfsensorsignal 3, Signal: unplausibel | 0 |
| 0x168301 | 0x168301 Klopfsensorsignal 4, Signal: Motorgeräusch über Grenzwert | 0 |
| 0x168302 | 0x168302 Klopfsensorsignal 4, Signal: Motorgeräusch unter Grenzwert | 0 |
| 0x168308 | 0x168308 Klopfsensorsignal 4, Signal: unplausibel | 0 |
| 0x180001 | 0x180001 Katalysator: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180002 | 0x180002 Katalysator: defekt | 0 |
| 0x180101 | 0x180101 Katalysator 2: Wirkungsgrad unterhalb Grenzwert | 0 |
| 0x180102 | 0x180102 Katalysator 2: defekt | 0 |
| 0x190001 | 0x190001 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190002 | 0x190002 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190004 | 0x190004 DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190101 | 0x190101 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190102 | 0x190102 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190104 | 0x190104 DMTL-Leckdiagnosepumpe, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190201 | 0x190201 DMTL, Feinleck: Leckage größer 1, 0 mm | 0 |
| 0x190302 | 0x190302 DMTL, Feinstleck: Leckage größer 0, 5 mm | 0 |
| 0x190401 | 0x190401 DMTL, Systemfehler: Pumpenstrom zu groß bei Referenzmessung | 0 |
| 0x190402 | 0x190402 DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung | 0 |
| 0x190404 | 0x190404 DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Feinleckprüfung | 0 |
| 0x190408 | 0x190408 DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert | 0 |
| 0x190501 | 0x190501 DMTL, Heizung, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x190502 | 0x190502 DMTL, Heizung, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x190504 | 0x190504 DMTL, Heizung, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x190F04 | 0x190F04 Tankentlüftungssystem, Funktion: Funktionstest Bandende | 0 |
| 0x190F08 | 0x190F08 Tankentlüftungssystem, Funktion: Funktionstest | 0 |
| 0x191001 | 0x191001 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x191002 | 0x191002 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x191004 | 0x191004 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x192001 | 0x192001 Tankdeckel: nicht korrekt geschlossen | 0 |
| 0x193001 | 0x193001 Kraftstoff-Füllstandsgeber, links, Signal: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x193002 | 0x193002 Kraftstoff-Füllstandsgeber, links, Signal: Kurzschluss nach Masse | 1 |
| 0x193008 | 0x193008 Kraftstoff-Füllstandsgeber, links, Signal: CAN Wert unplausibel | 1 |
| 0x193101 | 0x193101 Kraftstoff-Füllstandsgeber, rechts, Signal: Kurzschluss nach Plus oder Leitungsunterbrechung | 1 |
| 0x193102 | 0x193102 Kraftstoff-Füllstandsgeber, rechts, Signal: Kurzschluss nach Masse | 1 |
| 0x193108 | 0x193108 Kraftstoff-Füllstandsgeber, rechts, Signal: CAN Wert unplausibel | 1 |
| 0x193208 | 0x193208 Tankfüllstand, Plausibilität: unplausibel zu Verbrauchswert | 0 |
| 0x1A2001 | 0x1A2001 Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2002 | 0x1A2002 Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2004 | 0x1A2004 Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1A2108 | 0x1A2108  Elektrolüfter, Eigendiagnose Stufe 1: leichter Lüfterfehler | 0 |
| 0x1A2308 | 0x1A2308 Elektrolüfter, Eigendiagnose Stufe 2: Lüfterfehler mit potentiellen Gefährdung für den Lüfter | 0 |
| 0x1A2408 | 0x1A2408 Elektrolüfter, Eigendiagnose Stufe 3: Lüfterfehler mit Motorfunktionseinschränkung | 0 |
| 0x1A2508 | 0x1A2508 Elektrolüfter, Eigendiagnose Stufe 4: schwerer Lüfterfehler | 0 |
| 0x1A2601 | 0x1A2601 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1A2602 | 0x1A2602 Sicherungsrelais Elektrolüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1A2604 | 0x1A2604 Sicherungsrelais Elektrolüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1B0004 | 0x1B0004 Fahrzeuggeschwindigkeit, Signal: fehlt | 0 |
| 0x1B0108 | 0x1B0108 Fahrzeuggeschwindigkeit, Plausibilität: Signal unplausibel | 0 |
| 0x1B2002 | 0x1B2002 EWS Manipulationsschutz: kein Startwert programmiert | 0 |
| 0x1B2008 | 0x1B2008 EWS Manipulationsschutz: erwartete Antwort unplausibel | 0 |
| 0x1B2101 | 0x1B2101 Schnittstelle EWS-DME: Hardwarefehler | 0 |
| 0x1B2102 | 0x1B2102 Schnittstelle EWS-DME: Framefehler | 0 |
| 0x1B2104 | 0x1B2104 Schnittstelle EWS-DME: Zeitüberschreitung | 0 |
| 0x1B2108 | 0x1B2108 Schnittstelle EWS-DME: Prüfsummenfehler | 0 |
| 0x1B2201 | 0x1B2201 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit | 0 |
| 0x1B2202 | 0x1B2202 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage | 0 |
| 0x1B2204 | 0x1B2204 DME, interner Fehler, EWS-Daten: Startwert zerstört/ 2- aus 3-Auswahl fehlgeschlagen | 0 |
| 0x1B2208 | 0x1B2208 DME, interner Fehler, EWS-Daten: Prüfsummenfehler | 0 |
| 0x1B2302 | 0x1B2302 Botschaft EWS-DME fehlerhaft: Framefehler | 0 |
| 0x1B2304 | 0x1B2304 Botschaft EWS-DME fehlerhaft: Zeitüberschreitung | 0 |
| 0x1B5001 | 0x1B5001 Überwachung Klemme 15: Wake-up-Leitung Kurzschluss nach Plus | 0 |
| 0x1B5002 | 0x1B5002 Überwachung Klemme 15: Wake-up-Leitung Kurzschluss nach Masse | 0 |
| 0x1B5004 | 0x1B5004 Überwachung Klemme 15: Botschaft vom CAS fehlt oder fehlerhaft | 0 |
| 0x1B5008 | 0x1B5008 Überwachung Klemme 15: Signal Wake-up-Leitung unplausibel zur Botschaft CAS Klemmenstatus | 0 |
| 0x1B9004 | 0x1B9004 Motorabstellzeit: Zeitüberschreitung oder Ungültigkeitswert | 1 |
| 0x1B9008 | 0x1B9008 Motorabstellzeit: Signal unplausibel | 0 |
| 0x1BAF08 | 0x1BAF08 Fahrpedalmodul und Bremspedal, Plausibilität: Pedalwertel unplausibel | 0 |
| 0x1C3001 | 0x1C3001 Motoröldrucksensor, elektrisch: Kurzschluss nach Plus | 0 |
| 0x1C3002 | 0x1C3002 Motoröldrucksensor, elektrisch: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x1C3204 | 0x1C3204 Öldruckschalter: Leitungsunterbrechung oder Schalter klemmt | 0 |
| 0x1C4002 | 0x1C4002 Thermischer Ölniveausensor: Ölniveau zu niedrig | 0 |
| 0x1C4004 | 0x1C4004 Thermischer Ölniveausensor: Signal fehlt | 0 |
| 0x1C4008 | 0x1C4008 Thermischer Ölniveausensor: Signal unplausibel | 0 |
| 0x1C5001 | 0x1C5001 Ölzustandssensor: Temperaturmessung | 0 |
| 0x1C5002 | 0x1C5002 Ölzustandssensor: Niveaumessung | 0 |
| 0x1C5004 | 0x1C5004 Ölzustandssensor: Kommunikationsfehler | 0 |
| 0x1C5008 | 0x1C5008 Ölzustandssensor: Leitfähigkeitsmessung | 0 |
| 0x1C5104 | 0x1C5104 Ölzustandssensor, Kommunikation: keine Kommunikation | 0 |
| 0x1D2008 | 0x1D2008 Kennfeldthermostat, mechanisch: klemmt offen | 0 |
| 0x1D2101 | 0x1D2101 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x1D2102 | 0x1D2102 Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x1D2104 | 0x1D2104 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x1E0001 | 0x1E0001 Leerlaufregelung: Drehzahl zu hoch | 0 |
| 0x1E0002 | 0x1E0002 Leerlaufregelung: Drehzahl zu niedrig | 0 |
| 0x1E0101 | 0x1E0101 Leerlaufregelung bei Kaltstart: Drehzahl zu hoch | 0 |
| 0x1E0102 | 0x1E0102 Leerlaufregelung bei Kaltstart: Drehzahl zu niedrig | 0 |
| 0x1E5008 | 0x1E5008 Drehmomentüberwachung: Plausibilität | 0 |
| 0x1E5108 | 0x1E5108 Motordrehmoment, Anforderung über CAN: nicht erfüllbar | 0 |
| 0x1F0001 | 0x1F0001 DME, interner Fehler, RAM: RAM-Baustein | 0 |
| 0x1F0002 | 0x1F0002 DME, interner Fehler, RAM: Sicherheitsrechner RAM | 0 |
| 0x1F0101 | 0x1F0101 DME, interner Fehler, Prüfsumme: Bootsoftware | 0 |
| 0x1F0102 | 0x1F0102 DME, interner Fehler, Prüfsumme: Applikationssoftware | 0 |
| 0x1F0104 | 0x1F0104 DME, interner Fehler, Prüfsumme: Datenbereich | 0 |
| 0x1F0201 | 0x1F0201 DME, interner Fehler, RAM-Prüfsumme: RAM-Überprüfung | 0 |
| 0x1F0304 | 0x1F0304 DME, interner Fehler, Klopfsensorbaustein: Zeitüberschreitung SPI Bus | 0 |
| 0x1F0404 | 0x1F0404 DME, interner Fehler, Mehrfachendstufenbaustein: Zeitüberschreitung SPI Bus | 0 |
| 0x1F0501 | 0x1F0501 DME-Hauptrelais, Ansteuerung: nicht abgefallen | 0 |
| 0x1F0502 | 0x1F0502 DME-Hauptrelais, Ansteuerung: nicht angezogen | 0 |
| 0x1F0602 | 0x1F0602 DME-Hauptrelais, Schaltverzögerung: schaltet zu spät | 0 |
| 0x1F0801 | 0x1F0801 Warm Reset Diagnose: Geplanter Software Reset | 0 |
| 0x1F0802 | 0x1F0802 Warm Reset Diagnose: unerwünschter Software Reset | 0 |
| 0x1F0804 | 0x1F0804 Warm Reset Diagnose: Power On Reset | 0 |
| 0x1F0808 | 0x1F0808 Warm Reset Diagnose: Hardware Reset | 0 |
| 0x1F2004 | 0x1F2004 Codierung fehlt: Codierdaten im EEPROM fehlerhaft | 0 |
| 0x1F2008 | 0x1F2008 Codierung fehlt: keine Codierung nach Programmierung | 0 |
| 0x1F2104 | 0x1F2104 Falscher Datensatz: CAN Timeout | 0 |
| 0x1F2108 | 0x1F2108 Falscher Datensatz: Variantenüberwachung | 0 |
| 0x1F2201 | 0x1F2201 Injektoren Gruppe 1 oder DME, interner Fehler: Initialisierungsfehler | 0 |
| 0x1F2202 | 0x1F2202 Injektoren Gruppe 1 oder DME, interner Fehler: Verbindungsfehler | 0 |
| 0x1F2204 | 0x1F2204 Injektoren Gruppe 1 oder DME, interner Fehler: Entladungsfehler | 0 |
| 0x1F2301 | 0x1F2301 Injektoren Gruppe 2 oder DME, interner Fehler: Initialisierungsfehler | 0 |
| 0x1F2302 | 0x1F2302 Injektoren Gruppe 2 oder DME, interner Fehler: Verbindungsfehler | 0 |
| 0x1F2304 | 0x1F2304 Injektoren Gruppe 2 oder DME, interner Fehler: Entladungsfehler | 0 |
| 0x1F2401 | 0x1F2401 Injektoren Gruppe 3 oder DME, interner Fehler: Initialisierungsfehler | 0 |
| 0x1F2402 | 0x1F2402 Injektoren Gruppe 3 oder DME, interner Fehler: Verbindungsfehler | 0 |
| 0x1F2404 | 0x1F2404 Injektoren Gruppe 3 oder DME, interner Fehler: Entladungsfehler | 0 |
| 0x1F2501 | 0x1F2501 Injektoren Gruppe 4 oder DME, interner Fehler: Initialisierungsfehler | 0 |
| 0x1F2502 | 0x1F2502 Injektoren Gruppe 4 oder DME, interner Fehler: Verbindungsfehler | 0 |
| 0x1F2504 | 0x1F2504 Injektoren Gruppe 4 oder DME, interner Fehler: Entladungsfehler | 0 |
| 0x1F3008 | 0x1F3008 Fahrpedalmodul, interner Fehler, Kanal 1: Spannungsregler | 0 |
| 0x1F3108 | 0x1F3108 Fahrpedalmodul, interner Fehler, Kanal 2: Spannungsregler | 0 |
| 0x1F4A04 | 0x1F4A04 Relais Zündung und Injektoren: nicht abgefallen | 0 |
| 0x1F4A08 | 0x1F4A08 Relais Zündung und Injektoren: nicht angezogen  | 0 |
| 0x1F4B08 | 0x1F4B08 Relais Zündung und Injektoren, Schaltverzögerung: schaltet zu spät | 0 |
| 0x1F4C04 | 0x1F4C04 Sicherungsrelais Mengensteuerventil: Leitungsunterbrechung | 0 |
| 0x1F4C08 | 0x1F4C08 Sicherungsrelais Mengensteuerventil: nicht angezogen  | 0 |
| 0x1F5001 | 0x1F5001 DME, interner Fehler, Innentemperatursensor, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x1F5002 | 0x1F5002 DME, interner Fehler, Innentemperatursensor, elektrisch: Kurzschluss nach Masse | 0 |
| 0x200001 | 0x200001 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: ACC Überwachung | 0 |
| 0x200002 | 0x200002 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: DCC Überwachung | 0 |
| 0x200004 | 0x200004 DME, interner Fehler, Überwachung Fahrgeschwindigkeitsregelung: LDM Überwachung | 0 |
| 0x200108 | 0x200108 DME, interner Fehler, Überwachung Motordrehzahl: Fehlfunktion | 0 |
| 0x200208 | 0x200208 DME, interner Fehler, Überwachung Drehzahlbegrenzung: Fehlfunktion | 0 |
| 0x200308 | 0x200308 DME, interner Fehler, Überwachung Fahrpedalmodul: Fehlfunktion | 0 |
| 0x200404 | 0x200404 DME, interner Fehler, Überwachung Leerlaufregelung: Anforderung I-Anteil unplausibel | 0 |
| 0x200408 | 0x200408 DME, interner Fehler, Überwachung Leerlaufregelung: Anforderung PD-Anteil unplausibel | 0 |
| 0x200501 | 0x200501 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung MSR unplausibel | 0 |
| 0x200504 | 0x200504 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung AMT unplausibel | 0 |
| 0x200508 | 0x200508 DME, interner Fehler, Überwachung externe Momentenanforderung: Anforderung EGS unplausibel | 0 |
| 0x200601 | 0x200601 DME, interner Fehler, Überwachung Sollmoment: maximales Kupplungsmoment unplausibel | 0 |
| 0x200602 | 0x200602 DME, interner Fehler, Überwachung Sollmoment: minimales Kupplungsmoment unplausibel | 0 |
| 0x200604 | 0x200604 DME, interner Fehler, Überwachung Sollmoment: Verlustmoment unplausibel | 0 |
| 0x200608 | 0x200608 DME, interner Fehler, Überwachung Sollmoment: Sporttastersignal unplausibel | 0 |
| 0x200708 | 0x200708 DME, interner Fehler, Überwachung Istmoment: Signal unplausibel | 0 |
| 0x200808 | 0x200808 DME, interner Fehler, Überwachung Hardware: Fehlfunktion | 0 |
| 0x200908 | 0x200908 DME, interner Fehler, Überwachung Kraftstoffmenge: unplausibel | 0 |
| 0x200A08 | 0x200A08 DME, interner Fehler, Überwachung Drosselklappe: Spannung zwischen Poti 1 und 2 unplausibel | 0 |
| 0x200C01 | 0x200C01 DME, interner Fehler, Steuergerätefehler, interne Überwachung: ROM-Fehler | 0 |
| 0x200C02 | 0x200C02 DME, interner Fehler, Steuergerätefehler, interne Überwachung: RAM-Fehler | 0 |
| 0x200C04 | 0x200C04 DME, interner Fehler, Steuergerätefehler, interne Überwachung: Rechnerüberwachung; allgemeiner Sammelfehler | 0 |
| 0x200C08 | 0x200C08 DME, interner Fehler, Steuergerätefehler, interne Überwachung: Hauptrechnerüberwachung; Befehlssatztestfehler | 0 |
| 0x20A001 | 0x20A001 Elektrische Wasserpumpe, Drehzahlabweichung: außerhalb der Toleranz | 0 |
| 0x20A101 | 0x20A101 Elektrische Wasserpumpe, Abschaltung: interne Temperatur zu hoch | 0 |
| 0x20A102 | 0x20A102 Elektrische Wasserpumpe, Abschaltung: Überspannung | 0 |
| 0x20A104 | 0x20A104 Elektrische Wasserpumpe, Abschaltung: Überstrom | 0 |
| 0x20A201 | 0x20A201 Elektrische Wasserpumpe, leistungsreduzierter Betrieb: Trockenlauf | 0 |
| 0x20A202 | 0x20A202 Elektrische Wasserpumpe, leistungsreduzierter Betrieb: Unterspannung | 0 |
| 0x20A204 | 0x20A204 Elektrische Wasserpumpe, leistungsreduzierter Betrieb: Temperaturgrenze 1 überschritten | 0 |
| 0x20A208 | 0x20A208 Elektrische Wasserpumpe, leistungsreduzierter Betrieb: Temperaturgrenze 2 überschritten | 0 |
| 0x20A408 | 0x20A408 Elektrische Wasserpumpe, Plausibilität Kommunikation: keine Spannung am Notlauf-Eingang der Pumpe | 0 |
| 0x20B001 | 0x20B001 Kupplungsschalter, elektrisch: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x20B002 | 0x20B002 Kupplungsschalter, elektrisch: Kurzschluss nach Masse | 0 |
| 0x20C001 | 0x20C001 E-Box-Lüfter, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20C002 | 0x20C002 E-Box-Lüfter, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20C004 | 0x20C004 E-Box-Lüfter, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x20E001 | 0x20E001 Motorentlüftungs-Heizungsrelais, Ansteuerung: Kurzschluss nach Plus | 0 |
| 0x20E002 | 0x20E002 Motorentlüftungs-Heizungsrelais, Ansteuerung: Kurzschluss nach Masse | 0 |
| 0x20E004 | 0x20E004 Motorentlüftungs-Heizungsrelais, Ansteuerung: Leitungsunterbrechung | 0 |
| 0x210001 | 0x210001 Generator, Untererregung: in Startphase | 0 |
| 0x210201 | 0x210201 Generator, elektrisch: Fehlfunktion | 0 |
| 0x210301 | 0x210301 Generator, Plausibilität, elektrisch: berechnet | 0 |
| 0x210401 | 0x210401 Generator, Temperatur: Übertemperatur | 0 |
| 0x210501 | 0x210501 Generator, Plausibilität, Temperatur: Übertemperatur berechnet | 0 |
| 0x210601 | 0x210601 Generator, mechanisch: Fehlfunktion | 0 |
| 0x210701 | 0x210701 Generator, Regler: Typ falsch | 0 |
| 0x210801 | 0x210801 Generator: Typ falsch | 0 |
| 0x210901 | 0x210901 Generator, Kommunikation: keine Kommunikation | 0 |
| 0x213001 | 0x213001 Powermanagement: Überspannung | 0 |
| 0x213002 | 0x213002 Powermanagement: Unterspannung | 0 |
| 0x213004 | 0x213004 Powermanagement: batterieloser Betrieb | 0 |
| 0x213102 | 0x213102 Powermanagement, Batterieüberwachung: Tiefentladung | 0 |
| 0x213208 | 0x213208 Powermanagement, Ruhestromüberwachung: Ruhestromverletzung | 0 |
| 0x215001 | 0x215001 Intelligenter Batteriesensor, Signal: Bus-Fehler | 0 |
| 0x215004 | 0x215004 Intelligenter Batteriesensor, Signal: Bus-Fehler | 0 |
| 0x215008 | 0x215008 Intelligenter Batteriesensor, Signal: Software-Fehler | 0 |
| 0x215101 | 0x215101 Intelligenter Batteriesensor, Funktion: Temperaturfehler | 0 |
| 0x215104 | 0x215104 Intelligenter Batteriesensor, Funktion: Spannungsfehler | 0 |
| 0x215108 | 0x215108 Intelligenter Batteriesensor, Funktion: Stromfehler | 0 |
| 0x215201 | 0x215201 Intelligenter Batteriesensor, Signalübertragung: Wake-up-Leitung Kurzschluss nach Masse | 0 |
| 0x215204 | 0x215204 Intelligenter Batteriesensor, Signalübertragung: intener Fehler | 0 |
| 0x215208 | 0x215208 Intelligenter Batteriesensor, Signalübertragung: Pegel Wake-up-Leitung unplausibel | 0 |
| 0x230004 | 0x230004 Kommunikation Einschlafkoordinator: Zeitüberschreitung | 0 |
| 0x230008 | 0x230008 Kommunikation Einschlafkoordinator: Nachricht unplausibel | 0 |
| 0x231101 | 0x231101 Dummy Application DTC Master: application DTC | 0 |
| 0x231301 | 0x231301 Dummy Network DTC Master: network DTC | 0 |
| 0x231501 | 0x231501 DTC Reporting Master: DTC sending buffer is full | 0 |
| 0x231502 | 0x231502 DTC Reporting Master: sending of DTC s failed | 0 |
| 0xCD8404 | 0xCD8404 FA-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8601 | 0xCD8601 FlexRay controller error on BUS 1: Asynchronmodus | 0 |
| 0xCD8704 | 0xCD8704 A-CAN Bus: Kommunikationsfehler | 0 |
| 0xCD8801 | 0xCD8801 FlexRay controller error on BUS 2: maximale Startupzeit überschritten | 0 |
| 0xCD8C01 | 0xCD8C01 Botschaft (0x33, ST_AKKS_LIN): Zeitüberschreitung | 0 |
| 0xCD8D01 | 0xCD8D01 Botschaft (0x33, ST_AKKS_LIN): Prüfsummenfehler | 0 |
| 0xCD9F02 | 0xCD9F02 Botschaft (47.1.2, Status Stabilisierung DSC): Alive-Signal-Fehler | 1 |
| 0xCD9F04 | 0xCD9F04 Botschaft (47.1.2, Status Stabilisierung DSC): Zeitüberschreitung | 1 |
| 0xCD9F08 | 0xCD9F08 Botschaft (47.1.2, Status Stabilisierung DSC): Prüfsummenfehler | 1 |
| 0xCDD402 | 0xCDD402 Botschaft (58.1.4, Anforderung Drehmoment Kurbelwelle Fahrdynamik): Alive-Signal-Fehler | 1 |
| 0xCDD404 | 0xCDD404 Botschaft (58.1.4, Anforderung Drehmoment Kurbelwelle Fahrdynamik): Zeitüberschreitung | 1 |
| 0xCDD408 | 0xCDD408 Botschaft (58.1.4, Anforderung Drehmoment Kurbelwelle Fahrdynamik): Prüfsummenfehler | 1 |
| 0xCDD502 | 0xCDD502 Botschaft (43.1.4, Anforderung Radmoment Antriebstrang Summe Stabilisierung): Alive-Signal-Fehler | 1 |
| 0xCDD504 | 0xCDD504 Botschaft (43.1.4, Anforderung Radmoment Antriebstrang Summe Stabilisierung): Zeitüberschreitung | 1 |
| 0xCDD508 | 0xCDD508 Botschaft (43.1.4, Anforderung Radmoment Antriebstrang Summe Stabilisierung): Prüfsummenfehler | 1 |
| 0xCDD702 | 0xCDD702 Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): Alive-Signal-Fehler | 1 |
| 0xCDD704 | 0xCDD704 Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): Zeitüberschreitung | 1 |
| 0xCDD708 | 0xCDD708 Botschaft (272.4.8, Konfiguration Schalter Fahrdynamik): Prüfsummenfehler | 1 |
| 0xCDD902 | 0xCDD902 Botschaft (55.3.4, Geschwindigkeit Fahrzeug): Alive-Signal-Fehler | 1 |
| 0xCDD904 | 0xCDD904 Botschaft (55.3.4, Geschwindigkeit Fahrzeug): Zeitüberschreitung | 1 |
| 0xCDD908 | 0xCDD908 Botschaft (55.3.4, Geschwindigkeit Fahrzeug): Prüfsummenfehler | 1 |
| 0xCDDA02 | 0xCDDA02 Botschaft (43.3.4, Ist Bremsmoment Summe): Alive-Signal-Fehler | 1 |
| 0xCDDA04 | 0xCDDA04 Botschaft (43.3.4, Ist Bremsmoment Summe): Zeitüberschreitung | 1 |
| 0xCDDA08 | 0xCDDA08 Botschaft (43.3.4, Ist Bremsmoment Summe): Prüfsummenfehler | 1 |
| 0xCDDB02 | 0xCDDB02 Botschaft (46.1.2, Ist Drehzahl Rad): Alive-Signal-Fehler | 1 |
| 0xCDDB04 | 0xCDDB04 Botschaft (46.1.2, Ist Drehzahl Rad): Zeitüberschreitung | 1 |
| 0xCDDB08 | 0xCDDB08 Botschaft (46.1.2, Ist Drehzahl Rad): Prüfsummenfehler | 1 |
| 0xCDDC02 | 0xCDDC02 Botschaft (59.0.2, Ist Lenkwinkel Fahrer): Alive-Signal-Fehler | 1 |
| 0xCDDC04 | 0xCDDC04 Botschaft (59.0.2, Ist Lenkwinkel Fahrer): Zeitüberschreitung | 1 |
| 0xCDDC08 | 0xCDDC08 Botschaft (59.0.2, Ist Lenkwinkel Fahrer): Prüfsummenfehler | 1 |
| 0xCDDD02 | 0xCDDD02 Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): Alive-Signal-Fehler | 1 |
| 0xCDDD04 | 0xCDDD04 Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): Zeitüberschreitung | 1 |
| 0xCDDD08 | 0xCDDD08 Botschaft (55.0.2, Längsbeschleunigung Schwerpunkt): Prüfsummenfehler | 1 |
| 0xCDDE02 | 0xCDDE02 Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): Alive-Signal-Fehler | 1 |
| 0xCDDE04 | 0xCDDE04 Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): Zeitüberschreitung | 1 |
| 0xCDDE08 | 0xCDDE08 Botschaft (55.0.2, Querbeschleunigung Schwerpunkt): Prüfsummenfehler | 1 |
| 0xCDE002 | 0xCDE002 Botschaft (58.1.4, Anforderung Radmoment Antriebstrang Summe FAS): Alive-Signal-Fehler | 1 |
| 0xCDE004 | 0xCDE004 Botschaft (58.1.4, Anforderung Radmoment Antriebstrang Summe FAS): Zeitüberschreitung | 1 |
| 0xCDE008 | 0xCDE008 Botschaft (58.1.4, Anforderung Radmoment Antriebstrang Summe FAS): Prüfsummenfehler | 1 |
| 0xCDE102 | 0xCDE102 Botschaft (56.1.2, Neigung Fahrbahn): Alive-Signal-Fehler | 1 |
| 0xCDE104 | 0xCDE104 Botschaft (56.1.2, Neigung Fahrbahn): Zeitüberschreitung | 1 |
| 0xCDE108 | 0xCDE108 Botschaft (56.1.2, Neigung Fahrbahn): Prüfsummenfehler | 1 |
| 0xCDE802 | 0xCDE802 Botschaft (0x328, Relativzeit): Alive-Signal-Fehler | 1 |
| 0xCDE804 | 0xCDE804 Botschaft (0x328, Relativzeit): Zeitüberschreitung | 1 |
| 0xCDE808 | 0xCDE808 Botschaft (0x328, Relativzeit): Prüfsummenfehler | 1 |
| 0xCDE902 | 0xCDE902 Botschaft (0x2E4, Status Anhänger): Alive-Signal-Fehler | 1 |
| 0xCDE904 | 0xCDE904 Botschaft (0x2E4, Status Anhänger): Zeitüberschreitung | 1 |
| 0xCDE908 | 0xCDE908 Botschaft (0x2E4, Status Anhänger): Prüfsummenfehler | 1 |
| 0xCDEB02 | 0xCDEB02 Botschaft (0x3B0, Status Gang Rückwärts): Alive-Signal-Fehler | 1 |
| 0xCDEB04 | 0xCDEB04 Botschaft (0x3B0, Status Gang Rückwärts): Zeitüberschreitung | 1 |
| 0xCDEB08 | 0xCDEB08 Botschaft (0x3B0, Status Gang Rückwärts): Prüfsummenfehler | 1 |
| 0xCDEC02 | 0xCDEC02 Botschaft (0x39A, Status Getriebesteuergerät): Alive-Signal-Fehler | 1 |
| 0xCDEC04 | 0xCDEC04 Botschaft (0x39A, Status Getriebesteuergerät): Zeitüberschreitung | 1 |
| 0xCDEC08 | 0xCDEC08 Botschaft (0x39A, Status Getriebesteuergerät): Prüfsummenfehler | 1 |
| 0xCDED02 | 0xCDED02 Botschaft (0x135, Steuerung Crashabschaltung EKP): Alive-Signal-Fehler | 1 |
| 0xCDED04 | 0xCDED04 Botschaft (0x135, Steuerung Crashabschaltung EKP): Zeitüberschreitung | 1 |
| 0xCDED08 | 0xCDED08 Botschaft (0x135, Steuerung Crashabschaltung EKP): Prüfsummenfehler | 1 |
| 0xCDEE02 | 0xCDEE02 Botschaft (0x2F8, Uhrzeit/Datum): Alive-Signal-Fehler | 1 |
| 0xCDEE04 | 0xCDEE04 Botschaft (0x2F8, Uhrzeit/Datum): Zeitüberschreitung | 1 |
| 0xCDEE08 | 0xCDEE08 Botschaft (0x2F8, Uhrzeit/Datum): Prüfsummenfehler | 1 |
| 0xCDEF02 | 0xCDEF02 Botschaft (0x2FC, ZV und Klappenzustand): Alive-Signal-Fehler | 1 |
| 0xCDEF04 | 0xCDEF04 Botschaft (0x2FC, ZV und Klappenzustand): Zeitüberschreitung | 1 |
| 0xCDEF08 | 0xCDEF08 Botschaft (0x2FC, ZV und Klappenzustand): Prüfsummenfehler | 1 |
| 0xCDF002 | 0xCDF002 Botschaft (0x1AF, Daten Getriebestrang): Alive-Signal-Fehler | 1 |
| 0xCDF004 | 0xCDF004 Botschaft (0x1AF, Daten Getriebestrang): Zeitüberschreitung | 1 |
| 0xCDF008 | 0xCDF008 Botschaft (0x1AF, Daten Getriebestrang): Prüfsummenfehler | 1 |
| 0xCDF102 | 0xCDF102 Botschaft (0x0B0, Anforderung Drehmoment Kurbelwelle EGS): Alive-Signal-Fehler | 1 |
| 0xCDF104 | 0xCDF104 Botschaft (0x0B0, Anforderung Drehmoment Kurbelwelle EGS): Zeitüberschreitung | 1 |
| 0xCDF108 | 0xCDF108 Botschaft (0x0B0, Anforderung Drehmoment Kurbelwelle EGS): Prüfsummenfehler | 1 |
| 0xCDF202 | 0xCDF202 Botschaft ([0x2CA, Außentemperatur): Alive-Signal-Fehler | 1 |
| 0xCDF204 | 0xCDF204 Botschaft ([0x2CA, Außentemperatur): Zeitüberschreitung | 1 |
| 0xCDF208 | 0xCDF208 Botschaft ([0x2CA, Außentemperatur): Prüfsummenfehler | 1 |
| 0xCDF402 | 0xCDF402 Botschaft (0x3A0, Fahrzeugzustand): Alive-Signal-Fehler | 1 |
| 0xCDF404 | 0xCDF404 Botschaft (0x3A0, Fahrzeugzustand): Zeitüberschreitung | 1 |
| 0xCDF408 | 0xCDF408 Botschaft (0x3A0, Fahrzeugzustand): Prüfsummenfehler | 1 |
| 0xCDF502 | 0xCDF502 Botschaft (0x330, Kilometerstand/Reichweite): Alive-Signal-Fehler | 1 |
| 0xCDF504 | 0xCDF504 Botschaft (0x330, Kilometerstand/Reichweite): Zeitüberschreitung | 1 |
| 0xCDF508 | 0xCDF508 Botschaft (0x330, Kilometerstand/Reichweite): Prüfsummenfehler | 1 |
| 0xCDF602 | 0xCDF602 Botschaft (0x12F, Klemmen): Alive-Signal-Fehler | 1 |
| 0xCDF604 | 0xCDF604 Botschaft (0x12F, Klemmen): Zeitüberschreitung | 1 |
| 0xCDF608 | 0xCDF608 Botschaft (0x12F, Klemmen): Prüfsummenfehler | 1 |
| 0xCDF702 | 0xCDF702 Botschaft (0x3BE, Nachlaufzeit Stromversorgung): Alive-Signal-Fehler | 1 |
| 0xCDF704 | 0xCDF704 Botschaft (0x3BE, Nachlaufzeit Stromversorgung): Zeitüberschreitung | 1 |
| 0xCDF708 | 0xCDF708 Botschaft (0x3BE, Nachlaufzeit Stromversorgung): Prüfsummenfehler | 1 |
| 0xCDF802 | 0xCDF802 Botschaft (0x2F9, Anforderung Klimaanlage): Alive-Signal-Fehler | 1 |
| 0xCDF804 | 0xCDF804 Botschaft (0x2F9, Anforderung Klimaanlage): Zeitüberschreitung | 1 |
| 0xCDF808 | 0xCDF808 Botschaft (0x2F9, Anforderung Klimaanlage): Prüfsummenfehler | 1 |
| 0xCDFE02 | 0xCDFE02 Botschaft (F8, Anzeige Drehzahl Motor Dynamisierung): Alive-Signal-Fehler | 1 |
| 0xCDFE04 | 0xCDFE04 Botschaft (F8, Anzeige Drehzahl Motor Dynamisierung): Zeitüberschreitung | 1 |
| 0xCDFE08 | 0xCDFE08 Botschaft (F8, Anzeige Drehzahl Motor Dynamisierung): Prüfsummenfehler | 1 |
| 0xCDFF02 | 0xCDFF02 Botschaft (0x39A, Status Getriebesteuergerät): Alive-Signal-Fehler | 1 |
| 0xCDFF04 | 0xCDFF04 Botschaft (0x39A, Status Getriebesteuergerät: Zeitüberschreitung | 1 |
| 0xCDFF08 | 0xCDFF08 Botschaft (0x39A, Status Getriebesteuergerät: Prüfsummenfehler | 1 |
| 0xCE0002 | 0xCE0002 Botschaft (0x396, Diagnose OBD Getriebe): Alive-Signal-Fehler | 1 |
| 0xCE0004 | 0xCE0004 Botschaft (0x396, Diagnose OBD Getriebe): Zeitüberschreitung | 1 |
| 0xCE0008 | 0xCE0008 Botschaft (0x396, Diagnose OBD Getriebe): Prüfsummenfehler | 1 |
| 0xCE0102 | 0xCE0102 Botschaft (0x1AF, Daten Getriebestrang): Alive-Signal-Fehler | 1 |
| 0xCE0104 | 0xCE0104 Botschaft (0x1AF, Daten Getriebestrang): Zeitüberschreitung | 1 |
| 0xCE0108 | 0xCE0108 Botschaft (0x1AF, Daten Getriebestrang): Prüfsummenfehler | 1 |
| 0xCE0202 | 0xCE0202 Botschaft (0x0B0, Anforderung Drehmoment Kurbelwelle EGS): Alive-Signal-Fehler | 1 |
| 0xCE0204 | 0xCE0204 Botschaft (0x0B0, Anforderung Drehmoment Kurbelwelle EGS): Zeitüberschreitung | 1 |
| 0xCE0208 | 0xCE0208 Botschaft (0x0B0, Anforderung Drehmoment Kurbelwelle EGS): Prüfsummenfehler | 1 |
| 0xCE0302 | 0xCE0302 Botschaft (0x335, Status Elektrische Kraftstoffpumpe): Alive-Signal-Fehler | 1 |
| 0xCE0304 | 0xCE0304 Botschaft (0x335, Status Elektrische Kraftstoffpumpe): Zeitüberschreitung | 1 |
| 0xCE0308 | 0xCE0308 Botschaft (0x335, Status Elektrische Kraftstoffpumpe): Prüfsummenfehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | ja |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4206 | Rohwert Luftmassenstrom vom HFM Bank 1 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4207 | Rohwert Luftmassenstrom vom HFM Bank 2 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4208 | Massenstrom vom HFM Bank 1 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4209 | Massenstrom vom HFM Bank 2 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4400 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | ° C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | ° C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4416 | zugeteilte Bonuskraftstoffmenge | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x441C | Ölfüllstand | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x441D | Ölfüllstand Peilstab | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x441E | Kurzzeitmittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x441F | Vormittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4420 | Langzeitmittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4421 | Orientierungswert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4422 | Vormittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4423 | Kurzzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4424 | Langzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4425 | CBS Restweganzeige | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4426 | CBS Verfügbarkeitsanzeige | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x4427 | CBS Restwegprognose | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4429 | korrigierter Kurzmittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x442A | DME initialisiert | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4509 | Istwert Auslassspreizung Bank 1 | °CRK | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| 0x450C | VANOS PWM Wert Einlass Bank 1 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x450D | VANOS PWM Wert Einlass Bank 2 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x450E | VANOS PWM Wert Auslass Bank 1 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x450F | VANOS PWM Wert Auslass Bank 2 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4510 | Istwert Einlassspreizung Bank 1 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4511 | Istwert Einlassspreizung Bank 2 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4512 | Istwert Auslassspreizung Bank 2 | °CRK | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| 0x4513 | Sollwert Einlassspreizung Bank 1 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4514 | Sollwert Einlassspreizung Bank 2 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4515 | Sollwert Auslassspreizung Bank 1 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4516 | Sollwert Auslassspreizung Bank 2 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4517 | Normspreizung Einlass Bank 1 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4518 | Normspreizung Einlass Bank 2 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4519 | Normspreizung Auslass Bank 1 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x451A | Normspreizung auslass Bank 2 | °CRK | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x451B | Nockenwellenposition Einlass Bank 2 | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| 0x451C | Nockenwellenposition Auslass Bank 2 | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| 0x451D | Adaptionswert Nockenwelle Auslass Bank 2 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| 0x451E | Adaptionswert Nockenwelle Einlass Bank 2 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned long | - | 0,100000001490116 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | °C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| 0x460A | Batteriespannung aktuell | V | - | unsigned integer | - | 0,0149999996647239 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,50000011874363E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD II Protokoll | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominale Generatorspannung | V | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
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
| 0x4805 | Startrelais über CAN aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4806 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4807 | Motor Drehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4808 | Leerlauf Solldrehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4809 | Status LL | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Kilometerstand Auflösung 1 km | km | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | Pedalwert Fahrerwunsch in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x480C | Spannung Ansauglufttemperatur 1 | V | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| 0x480D | Spannung Ansauglufttemperatur 2 | V | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| 0x480E | Rohwert Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x480F | Rohwert Ansauglufttemperatur 2 | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4814 | Druck vor Drosselklappe Bank 1 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4815 | Druck nach Drosselklappe Bank 1 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4816 | Temperatur vor Drosselklappe Bank 1 | °C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4817 | Druck vor Drosselklappe Bank 2 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4818 | Druck nach Drosselklappe Bank 2 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4819 | Temperatur vor Drosselklappe Bank 2 | °C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x481A | Raildruck Bank 1 | hPa | - | unsigned integer | - | 5,30672168731689 | 1 | 0,0 |
| 0x481B | Raildruck Bank 2 | hPa | - | unsigned integer | - | 5,30672168731689 | 1 | 0,0 |
| 0x481C | ADC-Wert1 Drosselklappe Bank 1 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| 0x481D | ADC-Wert2 Drosselklappe Bank 1 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| 0x481E | ADC-Wert1 Drosselklappe Bank 2 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| 0x481F | ADC-Wert2 Drosselklappe Bank 2 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| 0x4820 | Drosselklappenwinkel Bank 1 | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4821 | Drosselklappenwinkel Bank 2 | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4822 | Drosselklappe Sollwert Bank 1 | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4823 | Drosselklappe Sollwert Bank 2 | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4828 | Status Abgasklappe 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4829 | Status Abgasklappe 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x482C | Drosselklappe Sollwert Bank 1 | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x482D | Drosselklappe Sollwert Bank 2 | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4A00 | Versorgung FWG 1 | V | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| 0x4A01 | Versorgung FWG 2 | V | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| 0x4A02 |  Bedingungen für Ablaufen der Turboladerdiagnose Bank1 erfüllt | 0/1 | - | 0xFFFF | - | 1 | 1 | 0 |
| 0x4A03 | Turboladerdiagnose Bank 1 gesamthaft abgelaufen | 0/1 | - | 0xFFFF | - | 1 | 1 | 0 |
| 0x4A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| 0x4A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| 0x4A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| 0x4A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| 0x4A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| 0x4A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A15 | Diagnose von zu niedrigem Ladedruck beendet | 0/1 | - | 0xFFFF | - | 1 | 1 | 0 |
| 0x4A16 | Diagnose von zu hohem Ladedruck beendet | 0/1 | - | 0xFFFF | - | 1 | 1 | 0 |
| 0x4A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4A26 | gemittelter Saugrohrdruck | hPa | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| 0x4A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A2E | Kraftstoffniederdrucksensor | hPa | - | unsigned integer | - | 2,65336084365845 | 1 | 0,0 |
| 0x4A36 | Status Klopfen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A37 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A38 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A39 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3A | Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3B | Spannung Klopfwerte Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3C | Spannung Klopfwerte Zylinder 8 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3D | Klopfsignal Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3E | Klopfsignal Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A3F | Klopfsignal Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A40 | Klopfsignal Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A41 | Klopfsignal Zylinder 8 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A42 | Klopfsignal Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A43 | Klopfsignal Zylinder 7 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A44 | Klopfsignal Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A47 | Spannung Klopfwerte Zylinder 7 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A48 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x4A49 | Zündwinkel Zylinder 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,6249989382923 |
| 0x4A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| 0x4A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| 0x4A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| 0x4A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| 0x4A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A59 | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5B | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A5F | Status HPDI-Relais | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A60 | Bremslichtschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A61 | Bremslichttestschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A62 | Öldruckschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A63 | E-Box-Lüfter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A66 | DMTL Pumpe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A67 | DMTL Ventil Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A68 | DMTL Heizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A69 | MIL Lampe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A6C | Verbrauchskorrekturfaktor | - | - | signed char | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4A70 | Soundklappe Zustand | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A73 | Kurbelgehäuseentlüftungsheizung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A76 | Adaption Öffnungspunkt Tankentlüftungsventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4A77 | Tankentlüftungsventil TEV PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4A81 | Integrator Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A82 | Integrator Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A83 | Adaption Offset Lambda Bank 1 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x4A84 | Adaption Offset Lambda Bank 2 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x4A85 | Adaption Multiplikation Lambda Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A86 | Adaption Multiplikation Lambda Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A87 | Adaptionswert Trimregelung Bank 1 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x4A88 | Adaptionswert Trimregelung Bank 2 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x4A89 | multiplikative Gemischadaption hohe Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A8A | multiplikative Gemischadaption hohe Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A8B | multiplikative Gemischadaption niedrige Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A8C | multiplikative Gemischadaption niedrige Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4A8D | additive Gemischadaption Leerlauf Bank 1 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x4A8E | additive Gemischadaption Leerlauf Bank 2 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x4A8F | Adaption Schubabgleich Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A90 | Adaption Schubabgleich Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4A91 | Katalysatordiagnosewert Bank1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x4A92 | Katalysatordiagnosewert Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x4A95 | Adaptionswert Nockenwelle Auslass Bank 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| 0x4A96 | Adaptionswert Nockenwelle Einlass Bank 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| 0x4A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4A9A | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4AA7 | Leckluftadaption Istwert | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x4AAB | Wastegate 1 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AAC | Wastegate 2 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4AB0 | Periodendauer Luftmasse 2 | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4AB2 | Periodendauer Luftmasse 1 | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,77777780866018E-5 | 1 | 0,0 |
| 0x4AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4AB8 | Spannung Saugrohrdruck 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABA | PWM Kraftstoffpumpe | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4ABB | Spannung Saugrohrdruck 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4B00 | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B01 | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B02 | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B03 | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B04 | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B05 | Einspritzzeit Zylinder 8 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B06 | Einspritzzeit Zylinder 7 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B07 | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| 0x4B10 | Tastverhältnis Injektor 1 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B11 | Tastverhältnis Injektor 6 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B12 | Tastverhältnis Injektor 4 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B13 | Tastverhältnis Injektor 3 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B14 | Tastverhältnis Injektor 5 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B15 | Tastverhältnis Injektor 8 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B16 | Tastverhältnis Injektor 7 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B17 | Tastverhältnis Injektor 2 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x4B20 | Elektrische Ladung Injektor 1 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B21 | Elektrische Ladung Injektor 6 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B22 | Elektrische Ladung Injektor 4 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B23 | Elektrische Ladung Injektor 3 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B24 | Elektrische Ladung Injektor 5 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B25 | Elektrische Ladung Injektor 8 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B26 | Elektrische Ladung Injektor 7 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B27 | Elektrische Ladung Injektor 2 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x4B30 | Spannung Injektor 1 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B31 | Spannung Injektor 6 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B32 | Spannung Injektor 4 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B33 | Spannung Injektor 3 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B34 | Spannung Injektor 5 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B35 | Spannung Injektor 8 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B36 | Spannung Injektor 7 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B37 | Spannung Injektor 2 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x4B40 | Adaptionswert der Enstufe Injektor 1 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B41 | Adaptionswert der Enstufe Injektor 6 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B42 | Adaptionswert der Enstufe Injektor 4 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B43 | Adaptionswert der Enstufe Injektor 3 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B44 | Adaptionswert der Enstufe Injektor 5 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B45 | Adaptionswert der Enstufe Injektor 8 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B46 | Adaptionswert der Enstufe Injektor 7 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4B47 | Adaptionswert der Enstufe Injektor 2 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4BBF | Plausibilität Injektorcodierung Durchflussabgleich | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4BCA | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt A | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BCB | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt A | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BCC | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt B | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BCD | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt B | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BCE | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt C | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BCF | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt C | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BD0 | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt D | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BD1 | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt D | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BD2 | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt E | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x4BD3 | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt E | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_297 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_297 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,5599999427795406 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5827 | Lambdasondenheizung vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5828 | Lambdasondenheizung vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5829 | Lambdasondenheizung hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582A | Lambdasondenheizung hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582B | Drehmomenteingriff über CAN | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582C | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582D | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582E | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x582F | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_52 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 21,226886749267585 | 1 | 0,0 |
| 0x5835 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_251 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_251 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x584D | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x5855 | Mittelwert Bank 1 | % | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| 0x5856 | Mittelwert Bank 2 | % | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5865 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | Batteriespannung von IBS gemessen | - | - | unsigned char | - | 0,06400000303983693 | 1 | 6,0 |
| 0x586B | Zeit mit Ruhestrom 80 - 200 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x586C | Zeit mit Ruhestrom 200 - 1000 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x586D | Zähler Erkennung schlechte Strasse | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586E | Zeit mit Ruhestrom größer 1000 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x5872 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__50 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_262 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_262 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5884 | Rückgelesener Erregergrenzstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 1,5625238418579097 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_254 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_254 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x58A9 | Resetzähler Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Fehlercode Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B7 | Bremsdruck | bar | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit | µs | - | unsigned long | - | 0,238418579101563 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D9 | Fehlercode Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | Resetzähler Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_5__CNV_S_5_D_569 | 1 | 1 | 0 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
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

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | °C | TIA | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IPUMG | 0x4201 | STAT_0x4201_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| IPSAU | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck | hPa | MAP_MES | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IMLUF | 0x4206 | STAT_LUFTMASSE_WERT | Rohwert Luftmassenstrom vom HFM Bank 1 | kg/h | MAF_KGH_MES_BAS[1] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| IMLU2 | 0x4207 | STAT_LUFTMASSE_2_WERT | Rohwert Luftmassenstrom vom HFM Bank 2 | kg/h | MAF_KGH_MES_BAS[2] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| STAT_0x4208_WERT | 0x4208 | STAT_0x4208_WERT | Massenstrom vom HFM Bank 1 | kg/h | MAF_KGH_MES[1] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| STAT_0x4209_WERT | 0x4209 | STAT_0x4209_WERT | Massenstrom vom HFM Bank 2 | kg/h | MAF_KGH_MES[2] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | °C | TCO | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x4301_WERT | 0x4301 | STAT_0x4301_WERT | Kühlerauslasstemperatur | °C | TCO_2 | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | ° C | TOEL | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | - | OZ_KVBSM_UL | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | km | OZ_OELKM | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Ölsensor Niveau Rohwert | - | OZ_NIVR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Ölsensor Qualität Rohwert | - | OZ_PERMR | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Ölsensor Temperatur Rohwert | - | OZ_TEMPR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Ölsensor Temperatur | ° C | OZ_TEMPAKT | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölsensor Niveau | mm | OZ_NIVAKT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Ölsensor Qualität | - | OZ_PERMAKT | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | - | OZ_LF1C | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | - | OZ_LF2C | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | OZ_LF1T | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | OZ_LF2T | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | mm | OZ_NIVKRZT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | km | OZ_RWKVB | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | - | OZ_OELZEIT | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4416_WERT | 0x4416 | STAT_0x4416_WERT | zugeteilte Bonuskraftstoffmenge | - | OZ_KVBOG | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4418_WERT | 0x4418 | STAT_0x4418_WERT | Status Peilstabanzeige | - | OZ_LV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x441C_WERT | 0x441C | STAT_0x441C_WERT | Ölfüllstand | mm | OZ_NIV | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x441D_WERT | 0x441D | STAT_0x441D_WERT | Ölfüllstand Peilstab | mm | OZ_PEIL | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x441E_WERT | 0x441E | STAT_0x441E_WERT | Kurzzeitmittelwert | mm | OZ_KRZOR | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x441F_WERT | 0x441F | STAT_0x441F_WERT | Vormittelwert | mm | OZ_VORMW | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4420_WERT | 0x4420 | STAT_0x4420_WERT | Langzeitmittelwert | mm | OZ_LANGMW | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4421_WERT | 0x4421 | STAT_0x4421_WERT | Orientierungswert Counter | - | OZ_ORICNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4422_WERT | 0x4422 | STAT_0x4422_WERT | Vormittelwert Counter | - | OZ_VORMWCNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4423_WERT | 0x4423 | STAT_0x4423_WERT | Kurzzeitmittelwert Counter | - | OZ_KRZCNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4424_WERT | 0x4424 | STAT_0x4424_WERT | Langzeitmittelwert Counter | - | OZ_LGMWCNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4425_WERT | 0x4425 | STAT_0x4425_WERT | CBS Restweganzeige | km | OZ_RWANZ | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4426_WERT | 0x4426 | STAT_0x4426_WERT | CBS Verfügbarkeitsanzeige | - | OZ_VFANZ | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| STAT_0x4427_WERT | 0x4427 | STAT_0x4427_WERT | CBS Restwegprognose | km | OZ_RWPROG | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4429_WERT | 0x4429 | STAT_0x4429_WERT | korrigierter Kurzmittelwert | mm | OZ_KRZMWKOR | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x442A | 0x442A | STAT_0x442A | DME initialisiert | 0/1 | B_DMEINI | - | 0xFF | - | 1 | 1 | 0 |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung Bank 1 | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| STAT_0x450C_WERT | 0x450C | STAT_0x450C_WERT | VANOS PWM Wert Einlass Bank 1 | % | IVVTPWM_IN[0] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x450D_WERT | 0x450D | STAT_0x450D_WERT | VANOS PWM Wert Einlass Bank 2 | % | IVVTPWM_IN[1] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x450E_WERT | 0x450E | STAT_0x450E_WERT | VANOS PWM Wert Auslass Bank 1 | % | IVVTPWM_EX[0] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x450F_WERT | 0x450F | STAT_0x450F_WERT | VANOS PWM Wert Auslass Bank 2 | % | IVVTPWM_EX[1] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4510_WERT | 0x4510 | STAT_0x4510_WERT | Istwert Einlassspreizung Bank 1 | °CRK | CAM_IN_H[1] | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4511_WERT | 0x4511 | STAT_0x4511_WERT | Istwert Einlassspreizung Bank 2 | °CRK | CAM_IN_H[2] | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4512_WERT | 0x4512 | STAT_0x4512_WERT | Istwert Auslassspreizung Bank 2 | °CRK | CAM_EX[2] | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| STAT_0x4513_WERT | 0x4513 | STAT_0x4513_WERT | Sollwert Einlassspreizung Bank 1 | °CRK | CAM_SP_IVVT_IN | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4514_WERT | 0x4514 | STAT_0x4514_WERT | Sollwert Einlassspreizung Bank 2 | °CRK | CAM_SP_IVVT_IN | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4515_WERT | 0x4515 | STAT_0x4515_WERT | Sollwert Auslassspreizung Bank 1 | °CRK | CAM_SP_IVVT_EX | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4516_WERT | 0x4516 | STAT_0x4516_WERT | Sollwert Auslassspreizung Bank 2 | °CRK | CAM_SP_IVVT_EX | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4517_WERT | 0x4517 | STAT_0x4517_WERT | Normspreizung Einlass Bank 1 | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4518_WERT | 0x4518 | STAT_0x4518_WERT | Normspreizung Einlass Bank 2 | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4519_WERT | 0x4519 | STAT_0x4519_WERT | Normspreizung Auslass Bank 1 | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x451A_WERT | 0x451A | STAT_0x451A_WERT | Normspreizung auslass Bank 2 | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x451B_WERT | 0x451B | STAT_0x451B_WERT | Nockenwellenposition Einlass Bank 2 | °CRK | PSN_CAM_IN_2 | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| STAT_0x451C_WERT | 0x451C | STAT_0x451C_WERT | Nockenwellenposition Auslass Bank 2 | °CRK | PSN_CAM_EX_2 | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| STAT_0x451D_WERT | 0x451D | STAT_0x451D_WERT | Adaptionswert Nockenwelle Auslass Bank 2 | °CRK | PSN_AD_CAM_EX_2 | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| STAT_0x451E_WERT | 0x451E | STAT_0x451E_WERT | Adaptionswert Nockenwelle Einlass Bank 2 | °CRK | PSN_AD_CAM_IN_2 | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung über BSD | V | V_ALTER_SP | - | unsigned long | - | 0,100000001490116 | 1 | 10,6 |
| ITGEE | 0x4603 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | °C | TCHIP | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generator Strom | - | I_GEN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 1 | - | BSDGENCV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENR | 0x4606 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENH | 0x4607 | STAT_GENERATOR_HERSTELLERCODE_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGTYP | 0x4608 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | V | VB | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | Batteriespannung aktuell | V | UBT | - | unsigned integer | - | 0,0149999996647239 | 1 | 0,0 |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned integer | - | 2,50000011874363E-4 | 1 | 6,0 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | V | VB_BAS | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | - | ABSCH_KORR | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x460E_WERT | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeitsgrenze | - | D_SOC | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | % | LOAD_BAT | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | % | N_PERC_ECF | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4612_WERT | 0x4612 | STAT_0x4612_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x4613_WERT | 0x4613 | STAT_0x4613_WERT | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | U_FGEN | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4614_WERT | 0x4614 | STAT_0x4614_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4615_WERT | 0x4615 | STAT_0x4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x4616_WERT | 0x4616 | STAT_0x4616_WERT | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | TLRFGEN | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4617_WERT | 0x4617 | STAT_0x4617_WERT | gefiltertes Generatormoment absolut Ausgang | Nm | MD_GENNM | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4618_WERT | 0x4618 | STAT_0x4618_WERT | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_LRFOFF | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4619_WERT | 0x4619 | STAT_0x4619_WERT | Bedingung BSD II Protokoll | 0/1 | B_BSDPROT2 | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x461A_WERT | 0x461A | STAT_0x461A_WERT | Nominale Generatorspannung | V | UREGNOM | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | LV_INH_LSCL[1] | - | 0xFF | - | 1 | 1 | 0 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | LV_INH_LSCL[2] | - | 0xFF | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | VLS_UP_COR[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | VLS_UP_COR[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank1 | - | LAMB_BAS[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank2 | - | LAMB_BAS[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Kupplungsschalter Status | 0/1 | LV_CS | - | 0xFF | - | 1 | 1 | 0 |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Kupplungsschalter vorhanden | 0/1 | LV_CS_CUS | - | 0xFF | - | 1 | 1 | 0 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Sporttaster aktiv | 0/1 | LV_SOF_SWI | - | 0xFF | - | 1 | 1 | 0 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Status Klima ein | - | STATE_ACIN_CAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Startrelais über CAN aktiv | 0/1 | LV_RLY_ST_CAN | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4806_WERT | 0x4806 | STAT_0x4806_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motor Drehzahl | rpm | N | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlauf Solldrehzahl | rpm | N_SP_IS | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Status LL | 0/1 | LV_IS | - | 0xFF | - | 1 | 1 | 0 |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Kilometerstand Auflösung 1 km | km | CTR_KM_BN | - | unsigned long | - | 1,0 | 1 | 0,0 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Pedalwert Fahrerwunsch in % | % | PV_AV | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x480C_WERT | 0x480C | STAT_0x480C_WERT | Spannung Ansauglufttemperatur 1 | V | VP_TIA[1] | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| STAT_0x480D_WERT | 0x480D | STAT_0x480D_WERT | Spannung Ansauglufttemperatur 2 | V | VP_TIA[2] | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| STAT_0x480E_WERT | 0x480E | STAT_0x480E_WERT | Rohwert Ansauglufttemperatur 1 | °C | TIA_MES[1] | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x480F_WERT | 0x480F | STAT_0x480F_WERT | Rohwert Ansauglufttemperatur 2 | °C | TIA_MES[2] | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x4814_WERT | 0x4814 | STAT_0x4814_WERT | Druck vor Drosselklappe Bank 1 | hPa | PVDKDS_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4815_WERT | 0x4815 | STAT_0x4815_WERT | Druck nach Drosselklappe Bank 1 | hPa | PS_IST_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4816_WERT | 0x4816 | STAT_0x4816_WERT | Temperatur vor Drosselklappe Bank 1 | °C | TANS_I | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x4817_WERT | 0x4817 | STAT_0x4817_WERT | Druck vor Drosselklappe Bank 2 | hPa | PVDKDS_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4818_WERT | 0x4818 | STAT_0x4818_WERT | Druck nach Drosselklappe Bank 2 | hPa | PS_IST_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4819_WERT | 0x4819 | STAT_0x4819_WERT | Temperatur vor Drosselklappe Bank 2 | °C | TANS_I | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x481A_WERT | 0x481A | STAT_0x481A_WERT | Raildruck Bank 1 | hPa | FUP_H_MPL[0] | - | unsigned integer | - | 5,30672168731689 | 1 | 0,0 |
| STAT_0x481B_WERT | 0x481B | STAT_0x481B_WERT | Raildruck Bank 2 | hPa | FUP_H_MPL[1] | - | unsigned integer | - | 5,30672168731689 | 1 | 0,0 |
| STAT_0x481C_WERT | 0x481C | STAT_0x481C_WERT | ADC-Wert1 Drosselklappe Bank 1 | V | VP_TPS_1[1] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| STAT_0x481D_WERT | 0x481D | STAT_0x481D_WERT | ADC-Wert2 Drosselklappe Bank 1 | V | VP_TPS_2[1] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| STAT_0x481E_WERT | 0x481E | STAT_0x481E_WERT | ADC-Wert1 Drosselklappe Bank 2 | V | VP_TPS_1[2] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| STAT_0x481F_WERT | 0x481F | STAT_0x481F_WERT | ADC-Wert2 Drosselklappe Bank 2 | V | VP_TPS_2[2] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,22044601616309E-15 |
| STAT_0x4820_WERT | 0x4820 | STAT_0x4820_WERT | Drosselklappenwinkel Bank 1 | °TPS | TPS_AV[1] | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| STAT_0x4821_WERT | 0x4821 | STAT_0x4821_WERT | Drosselklappenwinkel Bank 2 | °TPS | TPS_AV[2] | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| STAT_0x4822_WERT | 0x4822 | STAT_0x4822_WERT | Drosselklappe Sollwert Bank 1 | °TPS | TPS_SP_MDL[1] | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| STAT_0x4823_WERT | 0x4823 | STAT_0x4823_WERT | Drosselklappe Sollwert Bank 2 | °TPS | TPS_SP_MDL[2] | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| STAT_0x4828_WERT | 0x4828 | STAT_ABGASKLAPPE_1_EIN_WERT | Status Abgasklappe 1 | 0/1 | LV_EF | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4829_WERT | 0x4829 | STAT_ABGASKLAPPE_2_EIN_WERT | Status Abgasklappe 2 | 0/1 | LV_EF | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x482C_WERT | 0x482C | STAT_0x482C_WERT | Drosselklappe Sollwert Bank 1 | °TPS | TPS_SP[1] | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| STAT_0x482D_WERT | 0x482D | STAT_0x482D_WERT | Drosselklappe Sollwert Bank 2 | °TPS | TPS_SP[2] | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| IUPV1 | 0x4A00 | STAT_PWG1_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 1 | V | VCC_PVS_1 | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| IUPV2 | 0x4A01 | STAT_PWG2_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 2 | V | VCC_PVS_2 | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| STAT_0x5A02_WERT | 0x4A02 | STAT_0x5A02_WERT |  Bedingungen für Ablaufen der Turboladerdiagnose Bank1 erfüllt | 0/1 | LV_CDN_DIAG_TCHA_LEAK_1 | - | 0xFFFF | - | 1 | 1 | 0 |
| STAT_0x5A03_WERT | 0x4A03 | STAT_0x5A03_WERT | Turboladerdiagnose Bank 1 gesamthaft abgelaufen | 0/1 | LV_END_DIAG_TCHA_LEAK_1 | - | 0xFFFF | - | 1 | 1 | 0 |
| IUPW1 | 0x4A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW2 | 0x4A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKUM | 0x4A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V | VP_TCO[1] | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| IUKUA | 0x4A0A | STAT_KUEHLERAUSLASSTEMPERATUR_SPANNUNG_WERT | Spannung Kühlmitteltemperatur Kühlerausgang | V | VP_TCO[2] | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| IUUMG | 0x4A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V | V_AMP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSGI | 0x4A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V | VP_TECU | - | unsigned integer | - | 1,52587876073085E-4 | 1 | 0,0 |
| STAT_0x5A0F_WERT | 0x4A0F | STAT_0x5A0F_WERT | Spannung Kl.15 | V | V_IGK_BAS | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| IUK15 | 0x4A10 | STAT_KL15_SPANNUNG_WERT | Spannung Kl15 | V | V_IGK_MES | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| IUSV1 | 0x4A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSV2 | 0x4A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN1 | 0x4A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN2 | 0x4A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x4A15_WERT | 0x4A15 | STAT_0x4A15_WERT | Diagnose von zu niedrigem Ladedruck beendet | 0/1 | LV_END_DIAG_TCHA_PRS_LOW_1 | - | 0xFFFF | - | 1 | 1 | 0 |
| STAT_0x4A16_WERT | 0x4A16 | STAT_0x4A16_WERT | Diagnose von zu hohem Ladedruck beendet | 0/1 | LV_END_DIAG_TCHA_PRS_HIGH_1 | - | 0xFFFF | - | 1 | 1 | 0 |
| IUDMT | 0x4A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Strommessung DMTL | V | V_DMTL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| ITKUA | 0x4A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| ITSGI | 0x4A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x4A26_WERT | 0x4A26 | STAT_0x4A26_WERT | gemittelter Saugrohrdruck | hPa | MAP | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| IPPW1 | 0x4A27 | STAT_PWG1_WERT | Pedalwertgeber Potentiometer 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IPPW2 | 0x4A28 | STAT_PWG2_WERT | Pedalwertgeber Potentiometer 2 | % | PV_AV_2 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| RFPWG | 0x4A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5A2E_WERT | 0x4A2E | STAT_0x5A2E_WERT | Kraftstoffniederdrucksensor | hPa | FUP_EFP | - | unsigned integer | - | 2,65336084365845 | 1 | 0,0 |
| ISKLO | 0x4A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | 0/1 | LV_KNK | - | 0xFF | - | 1 | 1 | 0 |
| IUKZ1 | 0x4A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ6 | 0x4A38 | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ4 | 0x4A39 | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ3 | 0x4A3A | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ5 | 0x4A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 5 | V | NL[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ8 | 0x4A3C | STAT_KLOPFWERT_ZYL8_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 8 | V | NL[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ1 | 0x4A3D | STAT_KLOPFSIGNAL_ZYL1_WERT | Klopfsignal Zylinder 1 | V | KNKS[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ5 | 0x4A3E | STAT_KLOPFSIGNAL_ZYL5_WERT | Klopfsignal Zylinder 5 | V | KNKS[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ3 | 0x4A3F | STAT_KLOPFSIGNAL_ZYL3_WERT | Klopfsignal Zylinder 3 | V | KNKS[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ4 | 0x4A40 | STAT_KLOPFSIGNAL_ZYL4_WERT | Klopfsignal Zylinder 4 | V | KNKS[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ8 | 0x4A41 | STAT_KLOPFSIGNAL_ZYL8_WERT | Klopfsignal Zylinder 8 | V | KNKS[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ6 | 0x4A42 | STAT_KLOPFSIGNAL_ZYL6_WERT | Klopfsignal Zylinder 6 | V | KNKS[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ7 | 0x4A43 | STAT_KLOPFSIGNAL_ZYL7_WERT | Klopfsignal Zylinder 7 | V | KNKS[6] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ2 | 0x4A44 | STAT_KLOPFSIGNAL_ZYL2_WERT | Klopfsignal Zylinder 2 | V | KNKS[7] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ7 | 0x4A47 | STAT_KLOPFWERT_ZYL7_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 7 | V | NL[6] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ2 | 0x4A48 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 2 | V | NL[7] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IZWZ1 | 0x4A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder 1 | °CRK | IGA_IGC[0] | - | unsigned char | - | 0,375 | 1 | -35,6249989382923 |
| ILASB | 0x4A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISACR | 0x4A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN | Klimakompressorrelais Ein | 0/1 | LV_ACCOUT_RLY | - | 0xFF | - | 1 | 1 | 0 |
| ILAB1 | 0x4A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Katalysator Bank 1 | - | LAMB_LS_UP[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| ILAB2 | 0x4A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Katalysator Bank 2 | - | LAMB_LS_UP[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| IRNK1 | 0x4A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS hinter Katalysator Bank 1 | 0/1 | LV_LS_DOWN_READY[1] | - | 0xFF | - | 1 | 1 | 0 |
| IRNK2 | 0x4A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS hinter Katalysator Bank 2 | 0/1 | LV_LS_DOWN_READY[2] | - | 0xFF | - | 1 | 1 | 0 |
| ISHN1 | 0x4A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung hinter Katalysator Bank 1 | 0-n | STATE_LSH_DOWN[1] | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| ISHN2 | 0x4A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung hinter Katalysator Bank 2 | 0-n | STATE_LSH_DOWN[2] | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| ISHV1 | 0x4A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Katalysator Bank 1 | 0-n | STATE_LSH_UP[1] | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| ISHV2 | 0x4A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Katalysator Bank 2 | 0-n | STATE_LSH_UP[2] | - | 0xFF | _CNV_S_7_EGCP_RANGE_236 | 1 | 1 | 0 |
| IAHV1 | 0x4A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN1 | 0x4A59 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHV2 | 0x4A5A | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN2 | 0x4A5B | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK2_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5A5F | 0x4A5F | STAT_0x5A5F | Status HPDI-Relais | 0/1 | LV_RLY_HPDI | - | 0xFF | - | 1 | 1 | 0 |
| ISBLS | 0x4A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | 0/1 | LV_IM_BLS | - | 0xFF | - | 1 | 1 | 0 |
| ISBLT | 0x4A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | 0/1 | LV_IM_BTS | - | 0xFF | - | 1 | 1 | 0 |
| ISOED | 0x4A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | 0/1 | LV_POIL_SWI | - | 0xFF | - | 1 | 1 | 0 |
| ISEBO | 0x4A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Box-Lüfter Ein | 0/1 | LV_EBOX_CFA | - | 0xFF | - | 1 | 1 | 0 |
| ISDMP | 0x4A66 | STAT_DMTL_PUMPE_EIN_WERT | DMTL Pumpe Ein | 0/1 | LV_DMTL_PUMP | - | 0xFF | - | 1 | 1 | 0 |
| ISDMV | 0x4A67 | STAT_DMTL_VENTIL_EIN_WERT | DMTL Ventil Ein | 0/1 | LV_DMTLS | - | 0xFF | - | 1 | 1 | 0 |
| ISDMH | 0x4A68 | STAT_DMTL_HEIZUNG_EIN_WERT | DMTL Heizung Ein | 0/1 | LV_HDMTL_ON | - | 0xFF | - | 1 | 1 | 0 |
| ISMIL | 0x4A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | 0/1 | LV_MIL_CAN | - | 0xFF | - | 1 | 1 | 0 |
| ISCEL | 0x4A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | 0/1 | LV_WAL_1_CAN | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4A6C_WERT | 0x4A6C | STAT_0x4A6C_WERT | Verbrauchskorrekturfaktor | - | FAC_FCO_KWP | - | signed char | - | 0,00100000004749745 | 1 | 0,0 |
| IASOU | 0x4A70 | STAT_SOUNDKLAPPE_PWM_WERT | Soundklappe Zustand | 0/1 | LV_SOF | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4A73 | 0x4A73 | STAT_0x4A73 | Kurbelgehäuseentlüftungsheizung | 0/1 | LV_RLY_CRCV_HEAT | - | 0xFF | - | 1 | 1 | 0 |
| IAKFT | 0x4A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | % | ECTPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4A76_WERT | 0x4A76 | STAT_0x4A76_WERT | Adaption Öffnungspunkt Tankentlüftungsventil | % | CPPWM_ADD_AD_MEM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IATEV | 0x4A77 | STAT_TEV_PWM_WERT | Tankentlüftungsventil TEV PWM | % | CPPWM_CPS | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAELUE | 0x4A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IINT1 | 0x4A81 | STAT_INTEGRATOR_BANK1_WERT | Integrator Bank 1 | % | FAC_LAM_LIM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| IINT2 | 0x4A82 | STAT_INTEGRATOR_BANK2_WERT | Integrator Bank 2 | % | FAC_LAM_LIM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| IADD1 | 0x4A83 | STAT_ADAPTION_ADDITIV_BANK1_WERT | Adaption Offset Lambda Bank 1 | mg/stk | MFF_ADD_LAM_AD_OUT[1] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| IADD2 | 0x4A84 | STAT_ADAPTION_ADDITIV_BANK2_WERT | Adaption Offset Lambda Bank 2 | mg/stk | MFF_ADD_LAM_AD_OUT[2] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| IMUL1 | 0x4A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Adaption Multiplikation Lambda Bank 1 | % | FAC_LAM_AD_CUS[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| IMUL2 | 0x4A86 | STAT_ADAPTION_MULTIPLIKATIV_BANK2_WERT | Adaption Multiplikation Lambda Bank 2 | % | FAC_LAM_AD_CUS[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4A87_WERT | 0x4A87 | STAT_0x4A87_WERT | Adaptionswert Trimregelung Bank 1 | - | LAMB_DELTA_AD_LAM_ADJ[1] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| STAT_0x4A88_WERT | 0x4A88 | STAT_0x4A88_WERT | Adaptionswert Trimregelung Bank 2 | - | LAMB_DELTA_AD_LAM_ADJ[2] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| STAT_0x4A89_WERT | 0x4A89 | STAT_0x4A89_WERT | multiplikative Gemischadaption hohe Last Bank 1 | % | FAC_H_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4A8A_WERT | 0x4A8A | STAT_0x4A8A_WERT | multiplikative Gemischadaption hohe Last Bank 2 | % | FAC_H_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4A8B_WERT | 0x4A8B | STAT_0x4A8B_WERT | multiplikative Gemischadaption niedrige Last Bank 1 | % | FAC_L_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4A8C_WERT | 0x4A8C | STAT_0x4A8C_WERT | multiplikative Gemischadaption niedrige Last Bank 2 | % | FAC_L_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4A8D_WERT | 0x4A8D | STAT_0x4A8D_WERT | additive Gemischadaption Leerlauf Bank 1 | mg/stk | MFF_ADD_LAM_AD[1] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| STAT_0x4A8E_WERT | 0x4A8E | STAT_0x4A8E_WERT | additive Gemischadaption Leerlauf Bank 2 | mg/stk | MFF_ADD_LAM_AD[2] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| STAT_0x4A8F_WERT | 0x4A8F | STAT_0x4A8F_WERT | Adaption Schubabgleich Bank 1 | - | FAC_LSL_GAIN_AD[1] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4A90_WERT | 0x4A90 | STAT_0x4A90_WERT | Adaption Schubabgleich Bank 2 | - | FAC_LSL_GAIN_AD[2] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4A91_WERT | 0x4A91 | STAT_0x4A91_WERT | Katalysatordiagnosewert Bank1 | - | EFF_CAT_DIAG_OBD[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x4A92_WERT | 0x4A92 | STAT_0x4A92_WERT | Katalysatordiagnosewert Bank2 | - | EFF_CAT_DIAG_OBD[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| IANWA | 0x4A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass Bank 1 | °CRK | PSN_AD_CAM_EX_1 | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| IANWE | 0x4A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass Bank 1 | °CRK | PSN_AD_CAM_IN_1 | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| STAT_0x4A97 | 0x4A97 | STAT_0x4A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | B_VSEAN_LOC | - | 0xFF | - | 1 | 1 | 0 |
| IAKWF | 0x4A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | 0/1 | LV_SEG_AD_AVL_ER | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4A9A_WERT | 0x4A9A | STAT_0x4A9A_WERT | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | LV_VAR_MAF_LEARNT | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4AA7_WERT | 0x4AA7 | STAT_0x4AA7_WERT | Leckluftadaption Istwert | kg/h | MSNLGOFS_TMP | - | signed integer | - | 0,03125 | 1 | 0,0 |
| STAT_0x4AAB_WERT | 0x4AAB | STAT_0x4AAB_WERT | Wastegate 1 PWM | % | WGPWM_0 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AAC_WERT | 0x4AAC | STAT_0x4AAC_WERT | Wastegate 2 PWM | % | WGPWM_1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4AB0_WERT | 0x4AB0 | STAT_0x4AB0_WERT | Periodendauer Luftmasse 2 | µs | T_PER_MAF_FRQ[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IVKMH | 0x4AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4AB2_WERT | 0x4AB2 | STAT_0x4AB2_WERT | Periodendauer Luftmasse 1 | µs | T_PER_MAF_FRQ[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IWMIL | 0x4AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Fahrstrecke mit MIL an | km | DIST_ACT_MIL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IZBST | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | h | TRT | - | unsigned long | - | 2,77777780866018E-5 | 1 | 0,0 |
| RTKWA | 0x4AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IUSAU | 0x4AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Saugrohrdruck 1 | V | V_MAP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IAKSP | 0x4ABA | STAT_KRAFTSTOFFPUMPE_PWM_WERT | PWM Kraftstoffpumpe | % | EFPPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4ABB_WERT | 0x4ABB | STAT_0x4ABB_WERT | Spannung Saugrohrdruck 2 | V | V_MAP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IASRE | 0x4ABD | STAT_STARTRELAIS_AKTIV_WERT | Starterrelais aktiv | 0/1 | LV_RLY_ST | - | 0xFF | - | 1 | 1 | 0 |
| STAT_0x4B00_WERT | 0x4B00 | STAT_0x4B00_WERT | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen | ms | TI_1_MES[0] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B01_WERT | 0x4B01 | STAT_0x4B01_WERT | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen | ms | TI_1_MES[4] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B02_WERT | 0x4B02 | STAT_0x4B02_WERT | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen | ms | TI_1_MES[2] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B03_WERT | 0x4B03 | STAT_0x4B03_WERT | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen | ms | TI_1_MES[5] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B04_WERT | 0x4B04 | STAT_0x4B04_WERT | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen | ms | TI_1_MES[1] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B05_WERT | 0x4B05 | STAT_0x4B05_WERT | Einspritzzeit Zylinder 8 von der Endstufe rückgemessen | ms | TI_1_MES[3] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B06_WERT | 0x4B06 | STAT_0x4B06_WERT | Einspritzzeit Zylinder 7 von der Endstufe rückgemessen | ms | TI_1_MES[6] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B07_WERT | 0x4B07 | STAT_0x4B07_WERT | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen | ms | TI_1_MES[7] | - | unsigned integer | - | 0,00100000004749745 | 1 | 0,0 |
| STAT_0x4B10_WERT | 0x4B10 | STAT_0x4B10_WERT | Tastverhältnis Injektor 1 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[0] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B11_WERT | 0x4B11 | STAT_0x4B11_WERT | Tastverhältnis Injektor 6 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[4] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B12_WERT | 0x4B12 | STAT_0x4B12_WERT | Tastverhältnis Injektor 4 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[2] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B13_WERT | 0x4B13 | STAT_0x4B13_WERT | Tastverhältnis Injektor 3 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[5] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B14_WERT | 0x4B14 | STAT_0x4B14_WERT | Tastverhältnis Injektor 5 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[1] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B15_WERT | 0x4B15 | STAT_0x4B15_WERT | Tastverhältnis Injektor 8 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[3] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B16_WERT | 0x4B16 | STAT_0x4B16_WERT | Tastverhältnis Injektor 7 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[6] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B17_WERT | 0x4B17 | STAT_0x4B17_WERT | Tastverhältnis Injektor 2 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[7] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x4B20_WERT | 0x4B20 | STAT_0x4B20_WERT | Elektrische Ladung Injektor 1 | uAs | CHA_IV_1_MES[0] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B21_WERT | 0x4B21 | STAT_0x4B21_WERT | Elektrische Ladung Injektor 6 | uAs | CHA_IV_1_MES[4] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B22_WERT | 0x4B22 | STAT_0x4B22_WERT | Elektrische Ladung Injektor 4 | uAs | CHA_IV_1_MES[2] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B23_WERT | 0x4B23 | STAT_0x4B23_WERT | Elektrische Ladung Injektor 3 | uAs | CHA_IV_1_MES[5] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B24_WERT | 0x4B24 | STAT_0x4B24_WERT | Elektrische Ladung Injektor 5 | uAs | CHA_IV_1_MES[1] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B25_WERT | 0x4B25 | STAT_0x4B25_WERT | Elektrische Ladung Injektor 8 | uAs | CHA_IV_1_MES[3] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B26_WERT | 0x4B26 | STAT_0x4B26_WERT | Elektrische Ladung Injektor 7 | uAs | CHA_IV_1_MES[6] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B27_WERT | 0x4B27 | STAT_0x4B27_WERT | Elektrische Ladung Injektor 2 | uAs | CHA_IV_1_MES[7] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x4B30_WERT | 0x4B30 | STAT_0x4B30_WERT | Spannung Injektor 1 | V | V_IV_1_MES[0] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B31_WERT | 0x4B31 | STAT_0x4B31_WERT | Spannung Injektor 6 | V | V_IV_1_MES[4] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B32_WERT | 0x4B32 | STAT_0x4B32_WERT | Spannung Injektor 4 | V | V_IV_1_MES[2] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B33_WERT | 0x4B33 | STAT_0x4B33_WERT | Spannung Injektor 3 | V | V_IV_1_MES[5] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B34_WERT | 0x4B34 | STAT_0x4B34_WERT | Spannung Injektor 5 | V | V_IV_1_MES[1] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B35_WERT | 0x4B35 | STAT_0x4B35_WERT | Spannung Injektor 8 | V | V_IV_1_MES[3] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B36_WERT | 0x4B36 | STAT_0x4B36_WERT | Spannung Injektor 7 | V | V_IV_1_MES[6] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B37_WERT | 0x4B37 | STAT_0x4B37_WERT | Spannung Injektor 2 | V | V_IV_1_MES[7] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x4B40_WERT | 0x4B40 | STAT_0x4B40_WERT | Adaptionswert der Enstufe Injektor 1 | %/mJ | FAC_EGY_PWM_AD[0] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B41_WERT | 0x4B41 | STAT_0x4B41_WERT | Adaptionswert der Enstufe Injektor 6 | %/mJ | FAC_EGY_PWM_AD[4] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B42_WERT | 0x4B42 | STAT_0x4B42_WERT | Adaptionswert der Enstufe Injektor 4 | %/mJ | FAC_EGY_PWM_AD[2] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B43_WERT | 0x4B43 | STAT_0x4B43_WERT | Adaptionswert der Enstufe Injektor 3 | %/mJ | FAC_EGY_PWM_AD[5] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B44_WERT | 0x4B44 | STAT_0x4B44_WERT | Adaptionswert der Enstufe Injektor 5 | %/mJ | FAC_EGY_PWM_AD[1] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B45_WERT | 0x4B45 | STAT_0x4B45_WERT | Adaptionswert der Enstufe Injektor 8 | %/mJ | FAC_EGY_PWM_AD[3] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B46_WERT | 0x4B46 | STAT_0x4B46_WERT | Adaptionswert der Enstufe Injektor 7 | %/mJ | FAC_EGY_PWM_AD[6] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4B47_WERT | 0x4B47 | STAT_0x4B47_WERT | Adaptionswert der Enstufe Injektor 2 | %/mJ | FAC_EGY_PWM_AD[7] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4BBF_WERT | 0x4BBF | STAT_0x4BBF_WERT | Plausibilität Injektorcodierung Durchflussabgleich | - | LF_ERR_PLAUS_IV_MFF_CAL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4BCA_WERT | 0x4BCA | STAT_0x4BCA_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt A | % | FAC_LAM_TCO_A[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BCB_WERT | 0x4BCB | STAT_0x4BCB_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt A | % | FAC_LAM_TCO_A[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BCC_WERT | 0x4BCC | STAT_0x4BCC_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt B | % | FAC_LAM_TCO_B[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BCD_WERT | 0x4BCD | STAT_0x4BCD_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt B | % | FAC_LAM_TCO_B[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BCE_WERT | 0x4BCE | STAT_0x4BCE_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt C | % | FAC_LAM_TCO_C[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BCF_WERT | 0x4BCF | STAT_0x4BCF_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt C | % | FAC_LAM_TCO_C[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BD0_WERT | 0x4BD0 | STAT_0x4BD0_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt D | % | FAC_LAM_TCO_D[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BD1_WERT | 0x4BD1 | STAT_0x4BD1_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt D | % | FAC_LAM_TCO_D[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BD2_WERT | 0x4BD2 | STAT_0x4BD2_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt E | % | FAC_LAM_TCO_E[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| STAT_0x4BD3_WERT | 0x4BD3 | STAT_0x4BD3_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt E | % | FAC_LAM_TCO_E[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | 0-n | STATE_LS[1] | - | 0xFF | _CNV_S_5_LACO_RANGE_297 | 1 | 1 | 0 |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | 0-n | STATE_LS[2] | - | 0xFF | _CNV_S_5_LACO_RANGE_297 | 1 | 1 | 0 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | % | RF | - | signed char | - | 2,5599999427795406 | 1 | 0,0 |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x581F_WERT | 0x581F | STAT_0x581F_WERT | Motortemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | (Motor)-Öltemperatur | °C | TOIL_MES | - | unsigned char | - | 1,0 | 1 | -40,0 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Zeit Motor steht | min | T_ES | - | unsigned char | - | 256,0 | 1 | 0,0 |
| STAT_0x5824_WERT | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x5827_WERT | 0x5827 | STAT_0x5827_WERT | Lambdasondenheizung vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5828_WERT | 0x5828 | STAT_0x5828_WERT | Lambdasondenheizung vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5829_WERT | 0x5829 | STAT_0x5829_WERT | Lambdasondenheizung hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x582A_WERT | 0x582A | STAT_0x582A_WERT | Lambdasondenheizung hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomenteingriff über CAN | - | STATE_TQ_CAN_PLAUS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x582C_WERT | 0x582C | STAT_0x582C_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | CTR_ERR_LSL_IF_SPI_WR[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x582D_WERT | 0x582D | STAT_0x582D_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | CTR_ERR_LSL_IF_SPI_WR[2] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x582E_WERT | 0x582E | STAT_0x582E_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | FAC_DIAG_DYN_LSL_UP[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| STAT_0x582F_WERT | 0x582F | STAT_0x582F_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | FAC_DIAG_DYN_LSL_UP[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Motor Status | 0-n | STATE_ENG | - | 0xFF | _CNV_S_6_RANGE_STAT_52 | 1 | 1 | 0 |
| STAT_0x5833_WERT | 0x5833 | STAT_0x5833_WERT | Umgebungstemperatur beim Start | °C | TAM_ST | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned char | - | 21,226886749267585 | 1 | 0,0 |
| STAT_0x5835_WERT | 0x5835 | STAT_0x5835_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | rpm/s | N_GRD | - | signed char | - | 32,0 | 1 | 0,0 |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | STATE_ERR_EL_LSL_UP[1] | - | 0xFF | _CNV_S_11_EGCP_RANGE_251 | 1 | 1 | 0 |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | STATE_ERR_EL_LSL_UP[2] | - | 0xFF | _CNV_S_11_EGCP_RANGE_251 | 1 | 1 | 0 |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansauglufttemperatur beim Start | °C | TIA_ST | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | l | FTL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | V | VB | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| STAT_0x5842_WERT | 0x5842 | STAT_0x5842_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | FLOW_COR_CPS | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | Mittelwert Bank 1 | % | FAC_LAM_MV_MMV[1] | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| STAT_0x5856_WERT | 0x5856 | STAT_0x5856_WERT | Mittelwert Bank 2 | % | FAC_LAM_MV_MMV[2] | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| STAT_0x5857_WERT | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x5865_WERT | 0x5865 | STAT_0x5865_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x5866_WERT | 0x5866 | STAT_0x5866_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | STAT_SV_REG1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | STAT_SV_REG2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x586A_WERT | 0x586A | STAT_0x586A_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned char | - | 0,06400000303983693 | 1 | 6,0 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA | min | T2HISTSHORT | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit mit Ruhestrom 200 - 1000 mA | min | T3HISTSHORT | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| IZSST | 0x586D | STAT_ZAEHLER_ERKENNUNG_SCHLECHTE_STRASSE_WERT | Zähler Erkennung schlechte Strasse | - | SUM_RR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit mit Ruhestrom größer 1000 mA | min | T4HISTSHORT | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| STAT_0x5872_WERT | 0x5872 | STAT_0x5872_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISMST | 0x587C | STAT_MOTORSTEUERUNG_WERT | Status Motorsteuerung | 0-n | ECU_STATE | - | 0xFF | _CNV_S_7_RANGE_ECU__50 | 1 | 1 | 0 |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[1] | - | 0xFF | _CNV_S_4_EGCP_RANGE_262 | 1 | 1 | 0 |
| STAT_0x587E_WERT | 0x587E | STAT_0x587E_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[2] | - | 0xFF | _CNV_S_4_EGCP_RANGE_262 | 1 | 1 | 0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | - | GEAR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | °C | TCO_ST | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Rückgelesener Erregergrenzstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5886_WERT | 0x5886 | STAT_0x5886_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5887_WERT | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[5] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | s | T_AST | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | TTIP_MES_LS_UP[1] | - | signed char | - | 16,0 | 1 | 0,0 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit DMTL Leckmessung | s | T_ACT_LEAK_MES | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom bei DMTL Pumpenprüfung | mA | CUR_DMTL_DMTLS_TEST | - | unsigned char | - | 1,5625238418579097 | 1 | 0,0 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | TTIP_MES_LS_UP[2] | - | signed char | - | 16,0 | 1 | 0,0 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | Nm | TQ_REQ_CLU | - | signed char | - | 8,0 | 1 | 0,0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | Nm | TQI_GS_FAST_DEC | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[1] | - | 0xFF | _CNV_S_4_EGCP_RANGE_254 | 1 | 1 | 0 |
| STAT_0x5895_WERT | 0x5895 | STAT_0x5895_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[2] | - | 0xFF | _CNV_S_4_EGCP_RANGE_254 | 1 | 1 | 0 |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Katalysator Bank 1 | °C | TEG_CAT_DOWN_MDL[1] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| STAT_0x5897_WERT | 0x5897 | STAT_0x5897_WERT | Abgastemperatur hinter Katalysator Bank 2 | °C | TEG_CAT_DOWN_MDL[2] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | Resetzähler Rechnerüberwachung: alter Wert | - | ENVD_3_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Fehlercode Rechnerüberwachung: alter Wert | - | ENVD_2_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Pedalwertgeber 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | Kraftstoff Anforderung an Pumpe | l/h | VFF_EFP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 | ms | V_DUR_IGC_0 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Funkenbrenndauer Zylinder 5 | ms | V_DUR_IGC_1 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 | ms | V_DUR_IGC_2 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Funkenbrenndauer Zylinder 6 | ms | V_DUR_IGC_3 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Funkenbrenndauer Zylinder 2 | ms | V_DUR_IGC_4 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 | ms | V_DUR_IGC_5 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | Bremsdruck | bar | BRAKE_PRS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | rpm | N_32_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | % | PV_AV_MON | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | mg/stk | MAF_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | Motordrehzahl Ersatzwert Überwachung | rpm | N_32_SUB_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit | µs | SEG_T_MES | - | unsigned long | - | 0,238418579101563 | 1 | 0,0 |
| INSUE | 0x58C7 | STAT_LEERLAUF_SOLLDREHZAHLABWEICHUNG_WERT | LL-Solldrehzahlabweichung Überwachung | rpm | N_DIF_SP_IS_MON | - | signed char | - | 32,0 | 1 | 0,0 |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | I-Anteil Momentdifferenz Überwachung und Modell | Nm | TQ_DIF_I_IS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | Nm | TQ_DIF_P_D_SLOW_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | Nm | TQ_DIF_P_D_FAST_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | Nm | TQ_LOSS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | Nm | TQI_AV | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Abweichung maximales Moment an Kupplung Überwachung | Nm | TQ_MAX_CLU_DIF_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D6_WERT | 0x58D6 | STAT_0x58D6_WERT | Abweichung minimales Moment an Kupplung Überwachung | Nm | TQ_MIN_CLU_DIF_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Fehlercode Rechnerüberwachung: aktueller Wert | - | ENVD_0_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | Resetzähler Rechnerüberwachung: aktueller Wert | - | ENVD_1_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Betriebsart Istwert | 0-n | BA_IST | - | 0xFF | _CNV_S_5__CNV_S_5_D_569 | 1 | 1 | 0 |
| ILSA5 | 0x58F8 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL5_WERT | Segmentadaption Laufunruhe Zyl. 5 | %. | SEG_AD_MMV_ER[1] | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| ILSA3 | 0x58F9 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL3_WERT | Segmentadaption Laufunruhe Zyl. 3 | %. | SEG_AD_MMV_ER[2] | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | CL_MMV_SAE | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58FB_WERT | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | SUM_DIAG_DIAGCPS_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### _CNV_S_11_EGCP_RANGE_251

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

### _CNV_S_4_EGCP_RANGE_254

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_262

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x04 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_297

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_5__CNV_S_5_D_569

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | Schicht |
| 0x02 | Homogen |
| 0x03 | Homogen_Schicht |
| 0x08 | NOTLAUF |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_52

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_236

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

### _CNV_S_7_RANGE_ECU__50

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

### _MSD85UDS_TABLE_UEN

| NR | TEXT |
| --- | --- |
| 1 | Ruecksetzung erfolgt |
| 2 | Ruecksetzung nicht erfolgt |

### _MSD85UDS_CNV_S_2_DEF_BIT_UB_755_CM_4DC3300S

| NR | TEXT |
| --- | --- |
| 0 | Auslieferungszustand |
| 1 | Abweichung zum Auslieferungszustand |

### _MSD85UDS_CNV_S_2_DEF_BIT_UB_755_CM0X2_4DC3300S

| NR | TEXT |
| --- | --- |
| 0 | Schaltpunktanzeige inaktiv |
| 1 | Schaltpunktanzeige aktiv |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 2 nicht geschlossen |
| 1 | Regelkreis Bank 2 geschlossen |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 2 aktiv |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 2 aktiv |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 1 aktiv |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### _MSD85UDS_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### _MSD85UDS_TABLE_SWITCH_POSITION_LOW_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich nicht erforderlich |
| 1 | Drosselklappen-Neuabgleich erforderlich |

### _MSD85UDS_TABLE_SWITCH_POSITION_LOW_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### _MSD85UDS_TABLE_SWITCH_POSITION_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### _MSD85UDS_TABLE_SWITCH_POSITION_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### _MSD85UDS_TABLE_SWITCH_POSITION_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### _MSD85UDS_TABLE_SWITCH_POSITION_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### _MSD85UDS_TABLE_SWITCH_POSITION_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### _MSD85UDS_TABLE_SWITCH_POSITION_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### _MSD85UDS_TABLE_SWITCH_POSITION_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Motor laeuft |
| 1 | Motor steht |

### _MSD85UDS_TABLE_SWITCH_POSITION_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### _MSD85UDS_CNV_S_2_DEF_BIT_UB_716_CM0X4

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 4 | Wahr |

### _MSD85UDS_CNV_S_4_RANGE_STAT_455_CM_4DC3200S

| NR | TEXT |
| --- | --- |
| 0 | Deaktiviert |
| 1 | Fertigungsmodus |
| 2 | Transportmodus |
| 3 | Flashmodus |

### _MSD85UDS_TABEL_STATUS_OBD_READINESS

| NR | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### _MSD85UDS_TABEL_STATUS_OBD_MONITOR

| NR | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### _MSD85UDS_TABLE_ECOS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Startbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### _MSD85UDSDEF_ST_ATLSVC_BMSNF

| NR | TEXT |
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

### _MSD85UDSDEF_ST_ATLSVC_PVDK_BMSNF

| NR | TEXT |
| --- | --- |
| 0 | Ladedruckdiagnose ohne Ergebnis |
| 1 | Ladedruck fehlerfrei |
| 2 | Gesamtladedruck zu niedrig |
| 3 | Turbolader 1 mit Ladedruckfehler |
| 4 | Turbolader 2 mit Ladedruckfehler |
| 5 | Gesamtladedruck zu niedrig, Bank nicht identifiziert |

### _MSD85UDS_CNV_S_2_DEF_BIT_UW_683_CM_4DC3500S

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### _MSD85UDS_CNV_S_10_STATE_EOL__449_CM_4DC3200S

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

### _MSD85UDS_CNV_S_13_STATE_DMTL_140_CM

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

### _MSD85UDS_TABLE_ST_GENTEST

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

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

### _MSD85UDS_TABLE_GENIUTEST_ERR_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorregler plausibel |
| 1 | Generatortest, Generatorregler unplausibel |

### _MSD85UDS_TABLE_GENIUTEST_AB_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### _MSD85UDS_TABLE_FS

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

### _MSD85UDS_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### _MSD85UDS_CNV_S_14_STATE_VLS__226_CM_4DC3200S

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

### _MSD85UDS_CNV_S_6_STATE_DIAG_157_CM

| NR | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Schritt 1 |
| 2 | Schritt 2 |
| 3 | Schritt 3 |
| 4 | Rampe |
| 5 | Ende LOCK_STEP |

### _MSD85UDS_CNV_S_4_CYBL_RANGE_180_CM_792E600S

| NR | TEXT |
| --- | --- |
| 0 | INITIALIZATION |
| 1 | LOCK |
| 2 | WAIT |
| 3 | CYLINDER_BALANCING |

### _MSD85UDS_CNV_S_3_CYBL_RANGE_179_CM_792E600S

| NR | TEXT |
| --- | --- |
| 0 | NO |
| 1 | LOW |
| 2 | HIGH |

### _MSD85UDS_CNV_S_5_DEF_BA_GDI_588_CM

| NR | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |

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

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
| 0x4D | Fehler gespeichert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x80 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x81 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |
